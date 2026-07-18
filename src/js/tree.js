/** tree.js - D3 evolution tree. */

/** Class 3: EvolutionTree (D3.js 演化树) */
class EvolutionTree {
    constructor(containerId, rawData, onNodeClick) {
        this.containerId = containerId;
        this.rawData = rawData;
        this.onNodeClick = onNodeClick;
        this.allNodes = [];
        this.axisGroup = null;
        this.axis = null;
        this.geologicalEpochs = getConfig('geologicalEpochs');
        this.isEasterEggActive = false;
        this.axisWidth = 0;
        this.viewHeight = window.innerHeight;
        this.searchNodes = [];
        this.searchInput = null;
        this.searchResults = null;
        this.performSearch = null;
        this._searchInputHandler = null;
        this._searchKeydownHandler = null;
        this._documentClickHandler = null;
        this._originClickHandler = null;

        this._onResize = PerformanceUtils.debounce(() => this.handleResize(), 120);
    }

    init() {
        const container = document.getElementById(this.containerId);
        if (!container) throw new Error(`Missing tree container: ${this.containerId}`);
        container.innerHTML = '';

        this.axisWidth = this.getTimelineWidth();
        this.viewHeight = window.innerHeight;

        this.root = DataUtils.buildHierarchy(this.rawData);
        this.searchNodes = Object.freeze(this.root.descendants());
        this.allNodes = this.searchNodes;
        this.root.x0 = 0;
        this.root.y0 = 0;

        this.svg = d3.select("#" + this.containerId)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("role", "tree")
            .attr("aria-label", t('treeLabel'));

        this.svg.on("click", (e) => {
            if (!e.target.closest('.node')) this.clearHighlight();
        });

        this.g = this.svg.append("g").attr("class", "tree-layer");
        this.timeScale = d3.scaleLinear().domain([255, 0]).range([0, this.axisWidth]);

        this.drawBackground();
        this.setupTimeAxis();
        this.setupZoom();
        this.setupSearch();
        this.setupTreeControls();

        this.treeLayout = d3.cluster().size([this.viewHeight, this.axisWidth]);
        this.update(this.root, { animate: false });
        this.initEasterEgg();

        window.removeEventListener('resize', this._onResize);
        window.addEventListener('resize', this._onResize);
    }

    setupTreeControls() {
        const expandButton = document.getElementById('btn-expand-all');
        const collapseButton = document.getElementById('btn-collapse-all');
        if (expandButton) expandButton.onclick = () => this.expandOneLevel();
        if (collapseButton) collapseButton.onclick = () => this.collapseOneLevel();
    }

    getNodeRankValue(d) {
        return DataUtils.getNodeRankValue(d);
    }

    expandOneLevel() {
        const collapsedNodes = this.root.descendants()
            .filter(d => d._children && d._children.length > 0);

        if (collapsedNodes.length === 0) return;

        let minHiddenRankVal = 999;
        collapsedNodes.forEach(p => {
            p._children.forEach(child => {
                const r = this.getNodeRankValue(child);
                if (r !== null && r < minHiddenRankVal) minHiddenRankVal = r;
            });
        });

        if (minHiddenRankVal === 999) return;

        let hasAction = false;
        collapsedNodes.forEach(d => {
            const hasTargetRankChild = d._children.some(child =>
                this.getNodeRankValue(child) === minHiddenRankVal
            );
            if (hasTargetRankChild) {
                d.children = d._children;
                d._children = null;
                hasAction = true;
            }
        });

        if (hasAction) this.update(this.root);
    }

    collapseOneLevel() {
        const expandedNodes = this.root.descendants()
            .filter(d => d.children && d.children.length > 0);

        if (expandedNodes.length === 0) return;

        let maxChildRankVal = -1;
        expandedNodes.forEach(p => {
            p.children.forEach(child => {
                const r = this.getNodeRankValue(child);
                if (r !== null && r > maxChildRankVal) maxChildRankVal = r;
            });
        });

        if (maxChildRankVal === -1) return;

        let hasAction = false;
        expandedNodes.forEach(d => {
            const hasTargetRankChild = d.children.some(child =>
                this.getNodeRankValue(child) === maxChildRankVal
            );
            if (hasTargetRankChild) {
                d._children = d.children;
                d.children = null;
                hasAction = true;
            }
        });

        if (hasAction) this.update(this.root);
    }

    clearHighlight() {
        this.g.selectAll('.node:not(.ghost)').classed('highlighted', false);
        this.setSearchExpanded(false);
    }

    getTimelineWidth() {
        const axisSvg = document.getElementById('axis-svg');
        const axisWidth = axisSvg?.getBoundingClientRect().width || axisSvg?.clientWidth || 0;

        if (axisWidth > 0) return axisWidth;

        const container = document.getElementById(this.containerId);
        return container?.getBoundingClientRect().width || container?.clientWidth || window.innerWidth;
    }

    drawBackground() {
        this.g.selectAll(".bg-group, .text-group").remove();
        const bgGroup = this.g.append("g").attr("class", "bg-group");

        bgGroup.selectAll(".epoch-band")
            .data(this.geologicalEpochs)
            .enter()
            .append("rect")
            .attr("class", "epoch-band")
            .attr("x", d => Math.min(this.timeScale(d.start), this.timeScale(d.end)))
            .attr("y", -20000)
            .attr("width", d => Math.max(0, Math.abs(this.timeScale(d.start) - this.timeScale(d.end)) - 0.5))
            .attr("height", 40000)
            .attr("fill", d => d.color)
            .attr("stroke", "none");

        this.textGroup = this.g.append("g").attr("class", "text-group");

        this.textGroup.selectAll(".epoch-label")
            .data(this.geologicalEpochs)
            .enter()
            .append("text")
            .attr("class", "epoch-label")
            .attr("x", d => this.timeScale((d.start + d.end) / 2))
            .attr("y", 0)
            .text(d => d.name[currentLanguage]);
    }

    setupZoom() {
        const config = getConfig('tree.zoom');
        const initialScale = isMobile()
            ? config.initialScale.mobile
            : config.initialScale.desktop;
        const initialX = isMobile()
            ? config.initialX.mobile
            : config.initialX.desktop;
        const [[minX, minY], [, maxY]] = config.translateExtent;

        this.zoom = d3.zoom()
            .scaleExtent(config.scaleExtent)
            .translateExtent([[minX, minY], [this.axisWidth + 500, maxY]])
            .on("zoom", (e) => {
                this.g.attr("transform", e.transform);

                const centerY = (this.viewHeight / 2 - e.transform.y) / e.transform.k;
                this.g.selectAll(".epoch-label").attr("y", centerY);

                if (!this.isEasterEggActive) {
                    this.currentTransform = e.transform;
                }

                if (this.axisGroup && this.axis) {
                    const newScale = e.transform.rescaleX(this.timeScale);
                    const tickCount = isMobile() ? 4 : 8;
                    this.axis.scale(newScale).ticks(tickCount);
                    this.axisGroup.call(this.axis);
                    this.styleAxis();
                }
            });

        this.svg.call(this.zoom)
            .call(this.zoom.transform, d3.zoomIdentity
                .translate(initialX, this.viewHeight / 2 - 50)
                .scale(initialScale));

        this.currentTransform = d3.zoomIdentity
            .translate(initialX, this.viewHeight / 2 - 50)
            .scale(initialScale);

        // 鼠标移动事件
        this.svg.on("mousemove", (e) => this.updateTimeIndicator(e));

        // 移动端触摸事件
        this.svg.on("touchmove", (e) => {
            const touch = e.touches[0];
            this.updateTimeIndicator({ clientX: touch.clientX });
        });
    }

    handleResize() {
        if (!this.svg || !this.root || !this.zoom || !this.timeScale) return;

        const previousScale = this.timeScale.copy();
        const previousTransform = this.currentTransform || d3.zoomIdentity;
        const visibleDomain = previousTransform.rescaleX(previousScale).domain();
        const newAxisWidth = this.getTimelineWidth();

        if (!newAxisWidth) return;

        this.axisWidth = newAxisWidth;
        this.viewHeight = window.innerHeight;
        this.timeScale.range([0, this.axisWidth]);
        this.treeLayout = d3.cluster().size([this.viewHeight, this.axisWidth]);

        this.drawBackground();
        this.setupTimeAxis();
        this.update(this.root, { animate: false });

        const worldStart = this.timeScale(visibleDomain[0]);
        const worldEnd = this.timeScale(visibleDomain[1]);
        const worldSpan = Math.abs(worldEnd - worldStart) || 1;
        const nextScale = this.axisWidth / worldSpan;
        const nextX = -nextScale * Math.min(worldStart, worldEnd);
        const nextTransform = d3.zoomIdentity
            .translate(nextX, previousTransform.y)
            .scale(nextScale);

        this.svg.call(this.zoom.transform, nextTransform);
    }

    setupTimeAxis() {
        const axisSvg = d3.select("#axis-svg");
        axisSvg.selectAll("*").remove();
        const mobile = isMobile();
        const ticks = mobile ? [250, 145, 66, 0] : [250, 200, 145, 100, 66, 50, 25, 0];

        this.axis = d3.axisBottom(this.timeScale).tickValues(ticks).tickFormat(d => `${d} MYA`);
        this.axisGroup = axisSvg.append("g").attr("transform", "translate(0, 10)").call(this.axis);
        this.styleAxis();
    }

    styleAxis() {
        if (!this.axisGroup) return;
        this.axisGroup.selectAll("text")
            .style("font-family", "'Playfair Display', serif")
            .style("font-size", "11px")
            .style("fill", "#5d4037");
        this.axisGroup.selectAll("line, path")
            .style("stroke", "#5d4037");
    }

    updateTimeIndicator(e) {
        const indicator = document.getElementById('time-indicator');
        if (!this.currentTransform) return;
        const mouseX = e.clientX;
        const mya = this.currentTransform.rescaleX(this.timeScale).invert(mouseX);
        if (mya >= 0 && mya <= 255) {
            indicator.style.display = 'block';
            indicator.style.left = mouseX + 'px';
            indicator.textContent = mya.toFixed(1) + ' MYA';
        } else {
            indicator.style.display = 'none';
        }
    }

    setSearchExpanded(expanded) {
        if (!this.searchInput || !this.searchResults) return;
        this.searchResults.style.display = expanded ? 'block' : 'none';
        this.searchInput.setAttribute('aria-expanded', String(expanded));
    }

    setupSearch() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        if (!this.searchInput || !this.searchResults) return;

        this.performSearch?.cancel();
        if (this._searchInputHandler) this.searchInput.removeEventListener('input', this._searchInputHandler);
        if (this._searchKeydownHandler) this.searchInput.removeEventListener('keydown', this._searchKeydownHandler);
        if (this._documentClickHandler) document.removeEventListener('click', this._documentClickHandler);

        this.performSearch = PerformanceUtils.debounce((query) => {
            if (query.length < 1) {
                this.setSearchExpanded(false);
                return;
            }

            const matches = this.searchNodes.filter(node => {
                const searchable = [
                    node.data.cn_name,
                    node.data.family_cn,
                    node.data.en_name,
                    node.data.family_en,
                    node.data.scientific_name,
                    node.data.representative_species
                ].filter(Boolean).join(' ').toLowerCase();
                return searchable.includes(query);
            }).slice(0, 10);

            this.searchResults.textContent = '';

            if (matches.length > 0) {
                matches.forEach(node => {
                    const item = document.createElement('button');
                    item.type = 'button';
                    item.className = 'search-result-item';
                    item.setAttribute('role', 'option');
                    item.dataset.nodeId = node.id;

                    const cnSpan = document.createElement('span');
                    cnSpan.className = 'result-cn';
                    cnSpan.textContent = getLocalizedText(node.data, 'name');

                    const enSpan = document.createElement('span');
                    enSpan.className = 'result-en';
                    enSpan.textContent = node.data.scientific_name || node.data.family_en || node.data.en_name || '';

                    item.appendChild(cnSpan);
                    item.appendChild(enSpan);

                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.focusOnNode(parseInt(item.dataset.nodeId, 10));
                        this.setSearchExpanded(false);
                        this.searchInput.value = '';
                        this.searchInput.focus();
                    });

                    this.searchResults.appendChild(item);
                });
            } else {
                const noResult = document.createElement('div');
                noResult.className = 'search-result-item';
                noResult.setAttribute('role', 'status');
                noResult.textContent = t('noResults');
                this.searchResults.appendChild(noResult);
            }
            this.setSearchExpanded(true);
        }, 200);

        this._searchInputHandler = (e) => {
            this.performSearch(e.target.value.trim().toLowerCase());
        };
        this._searchKeydownHandler = (e) => {
            if (e.key === 'Escape') {
                this.setSearchExpanded(false);
            } else if (e.key === 'ArrowDown') {
                const firstResult = this.searchResults.querySelector('button');
                if (firstResult) {
                    e.preventDefault();
                    firstResult.focus();
                }
            }
        };
        this.searchInput.addEventListener('input', this._searchInputHandler);
        this.searchInput.addEventListener('keydown', this._searchKeydownHandler);

        this._documentClickHandler = (e) => {
            if (!e.target.closest('#search-container')) {
                this.setSearchExpanded(false);
            }
        };
        document.addEventListener('click', this._documentClickHandler);
    }

    focusOnNode(nodeId) {
        const targetNode = this.searchNodes.find(n => n.id === nodeId);
        if (!targetNode) return;
        this.clearHighlight();
        let current = targetNode;
        while (current.parent) {
            if (current.parent._children) {
                current.parent.children = current.parent._children;
                current.parent._children = null;
            }
            current = current.parent;
        }
        this.update(this.root);
        setTimeout(() => {
            this.g.selectAll('.node:not(.ghost)')
                .filter(d => d.id === nodeId)
                .classed('highlighted', true)
                .raise();
        }, 50);

        const scale = isMobile() ? 1.0 : 1.5;
        const x = -targetNode.y * scale + window.innerWidth / 2;
        const y = -targetNode.x * scale + window.innerHeight / 2;
        this.svg.transition().duration(prefersReducedMotion() ? 0 : 750)
            .call(this.zoom.transform, d3.zoomIdentity.translate(x, y).scale(scale));
    }

    update(source, options = {}) {
        const duration = options.animate === false || prefersReducedMotion() ? 0 : 500;
        let levelWidth = [1];
        const childCount = (level, n) => {
            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);
                levelWidth[level + 1] += n.children.length;
                n.children.forEach(d => childCount(level + 1, d));
            }
        };
        childCount(0, this.root);

        // 动态调整树高，防止重叠
        const config = getConfig('tree');
        const newHeight = Math.max(config.minHeight, d3.max(levelWidth) * config.nodeSpacing);
        this.zoom.translateExtent([[-800, -500], [this.axisWidth + 200, newHeight + 200]]);
        this.svg.call(this.zoom);

        this.treeLayout = d3.cluster().size([newHeight, this.axisWidth]);
        this.treeLayout(this.root);

        this.root.descendants().forEach(d => {
            d.y = this.timeScale(d.data.divergence_time_mya || 0);
        });

        let i = 0;
        const nodes = this.root.descendants();
        const node = this.g.selectAll('g.node:not(.ghost)')
            .data(nodes, d => d.id || (d.id = ++i));

        const nodeEnter = node.enter()
            .append('g')
            .attr('class', 'node')
            .attr('role', 'treeitem')
            .attr('tabindex', 0)
            .attr("transform", d => `translate(${source.y0},${source.x0})`)
            .on('click', (e, d) => {
                e.stopPropagation();
                this.clickNode(e, d);
            })
            .on('keydown', (e, d) => {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                e.stopPropagation();
                if (d.children || d._children) {
                    this.clickNode(e, d);
                } else if (this.onNodeClick) {
                    this.onNodeClick(d.data);
                }
            });

        nodeEnter.append('circle')
            .attr('r', 1e-6);

        nodeEnter.append('text')
            .attr('role', 'button')
            .attr('tabindex', 0)
            .attr("dy", 4)
            .attr("x", d => d.children || d._children ? -10 : 10)
            .attr("text-anchor", d => d.children || d._children ? "end" : "start")
            .text(d => getLocalizedText(d.data, 'name'))
            .style('fill-opacity', 1e-6)
            .on("click", (e, d) => {
                e.stopPropagation();
                if (this.onNodeClick) this.onNodeClick(d.data);
            })
            .on('keydown', (e, d) => {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                e.stopPropagation();
                if (this.onNodeClick) this.onNodeClick(d.data);
            });

        const nodeMerge = node.merge(nodeEnter)
            .attr('aria-label', d => getLocalizedText(d.data, 'name'))
            .attr('aria-expanded', d => d.children || d._children ? String(Boolean(d.children)) : null);

        const nodeUpdate = nodeMerge
            .transition()
            .duration(duration)
            .attr("transform", d => `translate(${d.y},${d.x})`);

        // 使用 CSS class 控制样式，不设置内联 fill 样式
        nodeUpdate.select('circle')
            .attr('r', 4.5)
            .attr('class', d => d._children ? "collapsed" : "");

        nodeUpdate.select('text')
            .attr('aria-label', d => `${t('openDetails')}: ${getLocalizedText(d.data, 'name')}`)
            .attr("x", d => d.children || d._children ? -10 : 10)
            .attr("text-anchor", d => d.children || d._children ? "end" : "start")
            .style('fill-opacity', 1);

        const nodeExit = node.exit()
            .transition()
            .duration(duration)
            .attr("transform", d => `translate(${source.y},${source.x})`)
            .remove();

        nodeExit.select('circle').attr('r', 1e-6);
        nodeExit.select('text').style('fill-opacity', 1e-6);

        const link = this.g.selectAll('path.link:not(.ghost)')
            .data(this.root.links(), d => d.target.id);

        const linkEnter = link.enter()
            .insert('path', "g")
            .attr("class", "link")
            .attr('d', d => {
                const o = { x: source.x0, y: source.y0 };
                return this.diagonal(o, o, true);
            });

        link.merge(linkEnter)
            .transition()
            .duration(duration)
            .attr('d', d => this.diagonal(d.source, d.target));

        link.exit()
            .transition()
            .duration(duration)
            .attr('d', d => {
                const o = { x: source.x, y: source.y };
                return this.diagonal(o, o, true);
            })
            .remove();

        nodes.forEach(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });

    }

    diagonal(s, d, isZero = false) {
        if (isZero || (s.x === d.x && s.y === d.y)) {
            return `M ${s.y} ${s.x} L ${d.y} ${d.x}`;
        }
        const radius = 12;
        const vDist = d.x - s.x;
        if (Math.abs(vDist) < radius * 2) {
            return `M ${s.y} ${s.x} L ${s.y} ${d.x} L ${d.y} ${d.x}`;
        }
        const dir = vDist > 0 ? 1 : -1;
        const curveEndX = Math.min(s.y + radius, d.y);
        return `
            M ${s.y} ${s.x}
            L ${s.y} ${d.x - radius * dir}
            Q ${s.y} ${d.x} ${curveEndX} ${d.x}
            L ${d.y} ${d.x}
        `;
    }

    clickNode(event, d) {
        if (this.isEasterEggActive) return;
        if (event.target.tagName === 'text') return;

        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }

        this.update(d);
    }

    initEasterEgg() {
        // 使用外部彩蛋数据
        this.ghostData = EASTER_EGG_DATA;

        const btn = document.getElementById('origin-btn');
        const githubLink = document.getElementById('github-link');
        if (btn) {
            btn.style.display = 'block';
            this._originClickHandler = () => this.triggerEasterEgg();
            btn.onclick = this._originClickHandler;
        }
        if (githubLink) githubLink.style.display = 'flex';
    }

    triggerEasterEgg() {
        if (this.isEasterEggActive) return;
        this.isEasterEggActive = true;

        this.savedTransform = this.currentTransform;

        const ghostRoot = d3.hierarchy(this.ghostData);
        const ghostTreeLayout = d3.tree().size([800, 500]);
        ghostTreeLayout(ghostRoot);

        let targetNode = null;
        ghostRoot.descendants().forEach(d => {
            d.y = this.timeScale(d.data.time);
            if (d.data.target) targetNode = d;
        });

        if (!targetNode) {
            this.isEasterEggActive = false;
            return;
        }

        const revealDuration = prefersReducedMotion() ? 0 : 2000;
        const travelDuration = prefersReducedMotion() ? 0 : 3000;

        const xOffset = this.root.x - targetNode.x;

        const ghostGroup = this.g.insert("g", ":first-child").attr("class", "ghost-layer");

        ghostGroup.selectAll(".link.ghost")
            .data(ghostRoot.links())
            .enter()
            .append("path")
            .attr("class", d => {
                let isSurvivor = false;
                let checker = targetNode;
                while (checker) {
                    if (d.target === checker) { isSurvivor = true; break; }
                    checker = checker.parent;
                }
                return isSurvivor ? "link ghost survivor-line" : "link ghost";
            })
            .attr("d", d => {
                const s = { y: d.source.y, x: d.source.x + xOffset };
                const tgt = { y: d.target.y, x: d.target.x + xOffset };
                return `M ${s.y} ${s.x} C ${(s.y + tgt.y) / 2} ${s.x}, ${(s.y + tgt.y) / 2} ${tgt.x}, ${tgt.y} ${tgt.x}`;
            })
            .style("opacity", 0)
            .transition()
            .duration(revealDuration)
            .style("opacity", d => {
                let isSurvivor = false;
                let checker = targetNode;
                while (checker) {
                    if (d.target === checker) { isSurvivor = true; break; }
                    checker = checker.parent;
                }
                return isSurvivor ? 0.8 : 0.3;
            });

        const gNodes = ghostGroup.selectAll(".node.ghost")
            .data(ghostRoot.descendants())
            .enter()
            .append("g")
            .attr("class", "node ghost")
            .attr("transform", d => `translate(${d.y},${d.x + xOffset})`);

        gNodes.append("circle")
            .attr("r", 4)
            .style("opacity", 0)
            .transition()
            .duration(revealDuration)
            .style("opacity", 0.6);

        gNodes.append("text")
            .attr("dy", -8)
            .attr("text-anchor", "middle")
            .text(d => currentLanguage === 'zh' ? d.data.cn : d.data.name)
            .style("opacity", 0)
            .transition()
            .duration(revealDuration)
            .style("opacity", 0.8);

        const startX = this.timeScale(360);
        const endX = this.timeScale(0);
        const viewWidth = Math.abs(startX - endX);
        const scale = (window.innerWidth / viewWidth) * 0.85;

        const transform = d3.zoomIdentity
            .translate(window.innerWidth * 0.08 - startX * scale, window.innerHeight / 2)
            .scale(scale);

        this.svg.transition()
            .duration(travelDuration)
            .ease(d3.easeCubicInOut)
            .call(this.zoom.transform, transform);

        this.g.selectAll(".node:not(.ghost)")
            .transition()
            .duration(revealDuration)
            .style("opacity", d => d.depth === 0 ? 0 : 0.1);

        this.g.selectAll(".link:not(.ghost)")
            .transition()
            .duration(revealDuration)
            .style("opacity", 0.05);

        document.getElementById('top-controls').style.display = 'none';
        document.getElementById('origin-btn').style.display = 'none';
        document.getElementById('github-link').style.display = 'none';
        document.getElementById('time-axis').style.opacity = 0;

        const overlay = document.getElementById('easter-egg-overlay');
        const mainText = document.querySelector('.ee-text-main');
        const exitBtn = document.getElementById('exit-egg-btn');

        overlay.classList.add('interactive');
        overlay.style.opacity = 1;
        mainText.style.opacity = 1;
        mainText.style.transform = 'translateY(0)';

        const enterExploreMode = () => {
            mainText.style.opacity = 0;
            overlay.classList.remove('interactive');
            setTimeout(() => { overlay.style.opacity = 0; }, prefersReducedMotion() ? 0 : 500);
            exitBtn.classList.add('visible');
            exitBtn.onclick = () => this.exitEasterEgg();
        };

        this.skipHandler = () => {
            if (this.textTimer) clearTimeout(this.textTimer);
            enterExploreMode();
        };
        overlay.addEventListener('click', this.skipHandler, { once: true });

        this.textTimer = setTimeout(() => {
            overlay.removeEventListener('click', this.skipHandler);
            enterExploreMode();
        }, prefersReducedMotion() ? 0 : 2000);
    }

    exitEasterEgg() {
        if (!this.isEasterEggActive) return;
        const exitBtn = document.getElementById('exit-egg-btn');
        const mainText = document.querySelector('.ee-text-main');

        exitBtn.classList.remove('visible');
        setTimeout(() => {
            mainText.style.transform = 'translateY(20px)';
        }, prefersReducedMotion() ? 0 : 500);

        const exitDuration = prefersReducedMotion() ? 0 : 1000;
        const restoreDuration = prefersReducedMotion() ? 0 : 1500;

        this.g.selectAll(".ghost-layer")
            .transition()
            .duration(exitDuration)
            .style("opacity", 0)
            .remove();

        this.g.selectAll(".node:not(.ghost)")
            .transition()
            .duration(exitDuration)
            .style("opacity", 1);

        this.g.selectAll(".link:not(.ghost)")
            .transition()
            .duration(exitDuration)
            .style("opacity", 1);

        if (this.savedTransform) {
            this.svg.transition()
                .duration(restoreDuration)
                .ease(d3.easeCubicOut)
                .call(this.zoom.transform, this.savedTransform);
        }

        setTimeout(() => {
            document.getElementById('top-controls').style.display = 'flex';
            document.getElementById('origin-btn').style.display = 'block';
            document.getElementById('github-link').style.display = 'flex';
            document.getElementById('time-axis').style.opacity = 1;
            this.isEasterEggActive = false;
        }, restoreDuration);
    }

    dispose() {
        window.removeEventListener('resize', this._onResize);
        this._onResize.cancel?.();
        this.performSearch?.cancel();
        if (this.searchInput && this._searchInputHandler) {
            this.searchInput.removeEventListener('input', this._searchInputHandler);
        }
        if (this.searchInput && this._searchKeydownHandler) {
            this.searchInput.removeEventListener('keydown', this._searchKeydownHandler);
        }
        if (this._documentClickHandler) {
            document.removeEventListener('click', this._documentClickHandler);
        }
        if (this.textTimer) clearTimeout(this.textTimer);

        const overlay = document.getElementById('easter-egg-overlay');
        if (overlay && this.skipHandler) overlay.removeEventListener('click', this.skipHandler);
        const originButton = document.getElementById('origin-btn');
        if (originButton?.onclick === this._originClickHandler) originButton.onclick = null;
        const exitButton = document.getElementById('exit-egg-btn');
        if (exitButton) exitButton.onclick = null;
        const expandButton = document.getElementById('btn-expand-all');
        const collapseButton = document.getElementById('btn-collapse-all');
        if (expandButton) expandButton.onclick = null;
        if (collapseButton) collapseButton.onclick = null;

        this.svg?.interrupt();
        this.g?.selectAll('*').interrupt();
        this.svg?.on('.zoom', null).on('click', null).on('mousemove', null).on('touchmove', null);
        this.svg?.remove();
        this.onNodeClick = null;
    }
}
