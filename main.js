/**
 * main.js
 */

// 如果 LOCAL_IMAGES 未定义，防止报错
const IMAGES = (typeof LOCAL_IMAGES !== 'undefined') ? LOCAL_IMAGES : {};

/** Class 1: ParticleBackground (WebGL 星空) */
class ParticleBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null; this.camera = null; this.renderer = null; this.particles = null;
        this.animationFrameId = null; this.mouseX = 0; this.mouseY = 0;
        this.init();
    }
    init() {
        const width = window.innerWidth; const height = window.innerHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
        this.camera.position.z = 1000;
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
        this.createParticles();
        window.addEventListener('resize', this.onResize.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        // 增加触摸移动支持
        document.addEventListener('touchmove', (e) => {
            if(e.touches.length > 0) {
                this.mouseX = (e.touches[0].clientX - window.innerWidth / 2) * 0.0003;
                this.mouseY = (e.touches[0].clientY - window.innerHeight / 2) * 0.0003;
            }
        }, {passive: true});
        this.animate();
    }
    createParticles() {
        const particleCount = window.innerWidth < 768 ? 1000 : 2000; // 移动端减少粒子数
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const colorPalette = [new THREE.Color(0xc5a059), new THREE.Color(0x4a90a4), new THREE.Color(0x8b7355), new THREE.Color(0xffffff)];
        for (let i = 0; i < particleCount; i++) {
            const radius = 800 + Math.random() * 1200;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r; colors[i * 3 + 1] = color.g; colors[i * 3 + 2] = color.b;
            sizes[i] = Math.random() * 3 + 1;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        const material = new THREE.PointsMaterial({ size: 2, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, sizeAttenuation: true });
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    onMouseMove(e) { this.mouseX = (e.clientX - window.innerWidth / 2) * 0.0003; this.mouseY = (e.clientY - window.innerHeight / 2) * 0.0003; }
    onResize() { if (!this.camera) return; this.camera.aspect = window.innerWidth / window.innerHeight; this.camera.updateProjectionMatrix(); this.renderer.setSize(window.innerWidth, window.innerHeight); }
    animate() {
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        if (this.particles) { this.particles.rotation.y += 0.0002 + this.mouseX * 0.1; this.particles.rotation.x += 0.0001 + this.mouseY * 0.1; }
        this.renderer.render(this.scene, this.camera);
    }
    fadeOut(duration = 500) {
        const startOpacity = this.particles.material.opacity;
        const startTime = Date.now();
        const fade = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            this.particles.material.opacity = startOpacity * (1 - progress);
            if (progress < 1) requestAnimationFrame(fade);
        };
        fade();
    }
    dispose() {
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        if (this.container && this.renderer) this.container.removeChild(this.renderer.domElement);
        this.scene = null; this.camera = null; this.renderer = null;
    }
}

/** Class 2: HelixViewer (CSS3D 螺旋) */
class HelixViewer {
    constructor(containerId, data, onCardClick) {
        this.container = document.getElementById(containerId);
        this.data = data; this.onCardClick = onCardClick; this.objects = [];
        this.init();
    }
    init() {
        const width = window.innerWidth; const height = window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 5000);
        
        // 初始状态：极高空俯视
        this.camera.position.set(0, 5000, 10); 
        this.camera.lookAt(0, 0, 0);

        this.scene = new THREE.Scene();
        this.renderer = new THREE.CSS3DRenderer();
        this.renderer.setSize(width, height);
        this.container.appendChild(this.renderer.domElement);
        
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true; 
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 60; 
        this.controls.enabled = false; 

        this.renderer.domElement.style.touchAction = 'none';
        this.createHelix();
        window.addEventListener('resize', this.onResize.bind(this));
        this.animate();

        this.playIntroSequence();
    }

    createHelix() {
        const helixGroup = new THREE.Group();
            
            // 2. 动态计算半径
            let radius = Math.max(600, Math.min(window.innerWidth * 0.6, 800));

            // 如果是极窄的手机屏幕（如折叠屏外屏），稍微再缩小一点
            if (window.innerWidth < 768) radius = 650;

            const yStep = 30; 
            const totalY = this.data.length * yStep;

        this.data.forEach((item, i) => {
            const element = document.createElement('div');
            element.className = item.isHero ? 'card-element hero' : 'card-element';
            
            // 从全局变量 IMAGES 中获取 Base64 数据
            const imgBase64 = IMAGES[item.en_name] || ''; 

            element.innerHTML = `
                <div class="card-content">
                    <img src="${imgBase64}" class="card-img" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='#222'">
                    <div class="card-info">
                        <span class="card-cn">${item.cn_name}</span>
                        <span class="card-en">${item.en_name}</span>
                    </div>
                </div>
            `;
            
            element.addEventListener('click', () => { if(this.onCardClick) this.onCardClick(item); });
            element.addEventListener('touchstart', () => { }, {passive: true});

        const object = new THREE.CSS3DObject(element);
                
                // 3. 调整旋转角度 theta 的密度
                // 如果半径变大了，为了保持视觉上的紧凑感，可以稍微减小每个卡片的旋转间隔
                // 基础间隔 0.25，半径越大，间隔越小 (反比关系)
                const thetaDensity = 0.25 * (600 / radius); 
                
                const theta = i * thetaDensity; 
                const y = -(totalY / 2) + i * yStep; 
                const offset = (i % 2) * Math.PI; // 保持双螺旋结构
                
                object.position.setFromCylindricalCoords(radius, theta + offset, y);
                const vector = new THREE.Vector3(0, object.position.y, 0);
                object.lookAt(vector);
                helixGroup.add(object);
                this.objects.push(object);
            });
            this.scene.add(helixGroup);
        }

    // 动画序列
    playIntroSequence() {
        // 适配移动端：小屏幕需要把相机拉得更远才能看到全貌
        const isMobile = window.innerWidth < 768;
        const targetZ = isMobile ? 2400 : 1800;

        setTimeout(() => {
            // 位置下落 + 拉远
            new TWEEN.Tween(this.camera.position)
                .to({ x: 0, y: 0, z: targetZ }, 3000)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();

            // 旋转减速
            new TWEEN.Tween(this.controls)
                .to({ autoRotateSpeed: 2.0 }, 3000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onComplete(() => {
                    this.controls.enabled = true;
                    this.container.classList.add('interactive');
                })
                .start();
        }, 1500);
    }

    onResize() { if (!this.camera) return; this.camera.aspect = window.innerWidth / window.innerHeight; this.camera.updateProjectionMatrix(); this.renderer.setSize(window.innerWidth, window.innerHeight); }
    animate() { this.animationFrameId = requestAnimationFrame(this.animate.bind(this)); this.controls.update(); TWEEN.update(); this.renderer.render(this.scene, this.camera); }
    
    zoomInAndEnd(onComplete) {
        const overlay = document.getElementById('transition-overlay');
        this.container.classList.remove('interactive');
        new TWEEN.Tween(this.controls).to({ autoRotateSpeed: 20 }, 2000).easing(TWEEN.Easing.Cubic.In).start();
        new TWEEN.Tween(this.camera.position).to({ x: 0, y: 0, z: -2000 }, 2000).easing(TWEEN.Easing.Exponential.In).onUpdate(() => this.camera.lookAt(this.scene.position)).start();
        setTimeout(() => { overlay.style.opacity = 1; }, 1500);
        setTimeout(() => { this.dispose(); if (onComplete) onComplete(); setTimeout(() => { overlay.style.opacity = 0; }, 300); }, 2000);
    }
    
    dispose() {
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        window.removeEventListener('resize', this.onResize.bind(this));
        if (this.container && this.renderer) { this.container.removeChild(this.renderer.domElement); this.container.innerHTML = ''; }
        this.scene = null; this.camera = null; this.renderer = null; this.controls = null;
    }
}

/** Class 3: EvolutionTree (D3.js 演化树) */
class EvolutionTree {
    constructor(containerId, rawData, onNodeClick) {
        this.containerId = containerId;
        this.rawData = rawData;
        this.onNodeClick = onNodeClick;
        this.allNodes = [];
        this.axisGroup = null; this.axis = null;
        this.geologicalEpochs = [
            { name: "第四纪", start: 0, end: 2.58, color: "#FFF2AE" },
            { name: "新近纪", start: 2.58, end: 23.03, color: "#FFFF00" },
            { name: "古近纪", start: 23.03, end: 66.0, color: "#FDCC8A" },
            { name: "白垩纪", start: 66.0, end: 145.0, color: "#A1D99B" },
            { name: "侏罗纪", start: 145.0, end: 201.3, color: "#3182BD" },
            { name: "三叠纪", start: 201.3, end: 251.9, color: "#9ECAE1" }
        ];
        this.isEasterEggActive = false;
    }

    init() {
        const container = document.getElementById(this.containerId);
        container.innerHTML = '';
        
        // 适配移动端：动态计算树的宽度
        const isMobile = window.innerWidth < 768;
        const width = isMobile ? 1200 : 2000; // 移动端稍微窄一点，但仍需保证横向滚动
        const viewHeight = window.innerHeight;

        this.root = this.buildHierarchy(this.rawData);
        this.root.x0 = 0; this.root.y0 = 0;

        this.svg = d3.select("#" + this.containerId).append("svg").attr("width", "100%").attr("height", "100%");
        this.svg.on("click", (e) => { if (!e.target.closest('.node')) this.clearHighlight(); });

        this.g = this.svg.append("g").attr("class", "tree-layer");
        this.timeScale = d3.scaleLinear().domain([255, 0]).range([0, width]);

        this.drawBackground(width);
        this.setupTimeAxis();
        this.setupZoom(viewHeight, width); // 传入宽度用于初始缩放计算
        this.setupSearch();
        this.setupTreeControls();

        this.treeLayout = d3.cluster().size([viewHeight, width]);
        this.update(this.root);
        this.allNodes = this.root.descendants();
        this.initEasterEgg();
    }

    setupTreeControls() {
        document.getElementById('btn-expand-all').onclick = () => this.expandOneLevel();
        document.getElementById('btn-collapse-all').onclick = () => this.collapseOneLevel();
    }

    getNodeRankValue(d) {
        const rankMap = {
            "root": 0, "class": 10, "subclass": 20, "infraclass": 30, "superorder": 40,
            "order": 50, "suborder": 60, "infraorder": 70, "parvorder": 80, "superfamily": 85, "family": 90
        };
        if (d.data.family_en) return 90;
        if (d.data.rank) {
            const key = d.data.rank.toLowerCase();
            if (rankMap[key] !== undefined) return rankMap[key];
        }
        if (d.depth === 0) return 0;
        return null;
    }

    expandOneLevel() {
        const collapsedNodes = this.root.descendants().filter(d => d._children && d._children.length > 0);
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
            const hasTargetRankChild = d._children.some(child => this.getNodeRankValue(child) === minHiddenRankVal);
            if (hasTargetRankChild) { d.children = d._children; d._children = null; hasAction = true; }
        });
        if (hasAction) this.update(this.root);
    }

    collapseOneLevel() {
        const expandedNodes = this.root.descendants().filter(d => d.children && d.children.length > 0);
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
            const hasTargetRankChild = d.children.some(child => this.getNodeRankValue(child) === maxChildRankVal);
            if (hasTargetRankChild) { d._children = d.children; d.children = null; hasAction = true; }
        });
        if (hasAction) this.update(this.root);
    }

    clearHighlight() {
        this.g.selectAll('.node').classed('highlighted', false);
        document.getElementById('search-results').style.display = 'none';
    }

    drawBackground(width) {
        const bgGroup = this.g.append("g").attr("class", "bg-group");
        bgGroup.selectAll(".epoch-band").data(this.geologicalEpochs).enter().append("rect")
            .attr("class", "epoch-band")
            .attr("x", d => Math.min(this.timeScale(d.start), this.timeScale(d.end)))
            .attr("y", -20000)
            .attr("width", d => Math.max(0, Math.abs(this.timeScale(d.start) - this.timeScale(d.end)) - 0.5))
            .attr("height", 40000)
            .attr("fill", d => d.color).attr("stroke", "none");

        this.textGroup = this.g.append("g").attr("class", "text-group");
        this.textGroup.selectAll(".epoch-label").data(this.geologicalEpochs).enter().append("text")
            .attr("class", "epoch-label")
            .attr("x", d => this.timeScale((d.start + d.end) / 2)).attr("y", 0).text(d => d.name);
    }

    setupZoom(viewHeight, width) {
        const isMobile = window.innerWidth < 768;
        // 移动端初始缩放比例更小，以便看到更多内容
        const initialScale = isMobile ? 0.5 : 0.8;
        const initialX = isMobile ? 20 : 50;

        this.zoom = d3.zoom()
            .scaleExtent([0.15, 3]) 
            .translateExtent([[-2000, -500], [2500, 2000]]) 
            .on("zoom", (e) => {
                this.g.attr("transform", e.transform);
                const centerY = (viewHeight / 2 - e.transform.y) / e.transform.k;
                this.g.selectAll(".epoch-label").attr("y", centerY);
                
                if (!this.isEasterEggActive) { this.currentTransform = e.transform; }
                if (this.axisGroup && this.axis) {
                    const newScale = e.transform.rescaleX(this.timeScale);
                    // 移动端减少刻度数量
                    const tickCount = isMobile ? 4 : 8;
                    this.axis.scale(newScale).ticks(tickCount);
                    this.axisGroup.call(this.axis);
                    this.styleAxis();
                }
            });

        this.svg.call(this.zoom).call(this.zoom.transform, d3.zoomIdentity.translate(initialX, viewHeight / 2 - 50).scale(initialScale));
        this.currentTransform = d3.zoomIdentity.translate(initialX, viewHeight / 2 - 50).scale(initialScale);
        this.svg.on("mousemove", (e) => this.updateTimeIndicator(e));
        // 移动端触摸事件
        this.svg.on("touchmove", (e) => {
            const touch = e.touches[0];
            this.updateTimeIndicator({ clientX: touch.clientX });
        });
    }

    setupTimeAxis() {
        const axisSvg = d3.select("#axis-svg");
        axisSvg.selectAll("*").remove(); 
        const isMobile = window.innerWidth < 768;
        const ticks = isMobile ? [250, 145, 66, 0] : [250, 200, 145, 100, 66, 50, 25, 0];
        
        this.axis = d3.axisBottom(this.timeScale).tickValues(ticks).tickFormat(d => `${d} MYA`);
        this.axisGroup = axisSvg.append("g").attr("transform", "translate(0, 10)").call(this.axis);
        this.styleAxis();
    }
    
    styleAxis() {
        if (!this.axisGroup) return;
        this.axisGroup.selectAll("text").style("font-family", "'Playfair Display', serif").style("font-size", "11px").style("fill", "#5d4037");
        this.axisGroup.selectAll("line, path").style("stroke", "#5d4037");
    }
    
    updateTimeIndicator(e) {
        const indicator = document.getElementById('time-indicator');
        if (!this.currentTransform) return;
        const mouseX = e.clientX;
        const mya = this.currentTransform.rescaleX(this.timeScale).invert(mouseX);
        if (mya >= 0 && mya <= 255) {
            indicator.style.display = 'block'; indicator.style.left = mouseX + 'px'; indicator.textContent = `${mya.toFixed(1)} MYA`;
        } else { indicator.style.display = 'none'; }
    }
    
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 1) { searchResults.style.display = 'none'; return; }
            const matches = this.allNodes.filter(node => {
                const cn = (node.data.cn_name || node.data.family_cn || '').toLowerCase();
                const en = (node.data.en_name || node.data.family_en || '').toLowerCase();
                return cn.includes(query) || en.includes(query);
            }).slice(0, 10);
            
            if (matches.length > 0) {
                searchResults.innerHTML = matches.map(node => `<div class="search-result-item" data-node-id="${node.id}"><span class="result-cn">${node.data.cn_name || node.data.family_cn}</span><span class="result-en">${node.data.en_name || node.data.family_en}</span></div>`).join('');
                searchResults.style.display = 'block';
                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.stopPropagation(); this.focusOnNode(parseInt(item.dataset.nodeId));
                        searchResults.style.display = 'none'; searchInput.value = '';
                    });
                });
            } else { searchResults.innerHTML = '<div class="search-result-item">无匹配结果</div>'; searchResults.style.display = 'block'; }
        });
        document.addEventListener('click', (e) => { if (!e.target.closest('#search-container')) searchResults.style.display = 'none'; });
    }
    
    focusOnNode(nodeId) {
        const targetNode = this.allNodes.find(n => n.id === nodeId);
        if (!targetNode) return;
        this.clearHighlight();
        let current = targetNode;
        while (current.parent) {
            if (current.parent._children) { current.parent.children = current.parent._children; current.parent._children = null; }
            current = current.parent;
        }
        this.update(this.root);
        setTimeout(() => {
            this.g.selectAll('.node').filter(d => d.id === nodeId).classed('highlighted', true).raise();
        }, 50);
        
        // 适配移动端：聚焦时的缩放比例
        const isMobile = window.innerWidth < 768;
        const scale = isMobile ? 1.0 : 1.5;
        const x = -targetNode.y * scale + window.innerWidth / 2;
        const y = -targetNode.x * scale + window.innerHeight / 2;
        this.svg.transition().duration(750).call(this.zoom.transform, d3.zoomIdentity.translate(x, y).scale(scale));
    }

    update(source) {
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
        const newHeight = Math.max(800, d3.max(levelWidth) * 45); 
        this.zoom.translateExtent([[-800, -500], [2200, newHeight + 200]]);
        this.svg.call(this.zoom);

        // 适配移动端：树的宽度参数
        const isMobile = window.innerWidth < 768;
        const treeWidth = isMobile ? 1200 : 2000;
        this.treeLayout = d3.cluster().size([newHeight, treeWidth]);
        this.treeLayout(this.root);

        this.root.descendants().forEach(d => { 
            d.y = this.timeScale(d.data.divergence_time_mya || 0); 
        });

        let i = 0;
        const nodes = this.root.descendants();
        const node = this.g.selectAll('g.node').data(nodes, d => d.id || (d.id = ++i));
        
        const nodeEnter = node.enter().append('g').attr('class', 'node')
            .attr("transform", d => `translate(${source.y0},${source.x0})`)
            .on('click', (e, d) => { e.stopPropagation(); this.clickNode(e, d); });

        nodeEnter.append('circle').attr('r', 1e-6).style("fill", d => d._children ? "#fff" : "");
        nodeEnter.append('text').attr("dy", 4).attr("x", d => d.children || d._children ? -10 : 10)
            .style("text-anchor", d => d.children || d._children ? "end" : "start")
            .text(d => d.data.cn_name || d.data.family_cn).style('fill-opacity', 1e-6)
            .on("click", (e, d) => { e.stopPropagation(); if(this.onNodeClick) this.onNodeClick(d.data); });

        const nodeUpdate = node.merge(nodeEnter).transition().duration(500).attr("transform", d => `translate(${d.y},${d.x})`);
        nodeUpdate.select('circle').attr('r', 4.5).attr('class', d => d._children ? "collapsed" : "").style("fill", d => d._children ? "#fff" : "");
        nodeUpdate.select('text').style('fill-opacity', 1);

        const nodeExit = node.exit().transition().duration(500).attr("transform", d => `translate(${source.y},${source.x})`).remove();
        nodeExit.select('circle').attr('r', 1e-6); nodeExit.select('text').style('fill-opacity', 1e-6);

        const link = this.g.selectAll('path.link').data(this.root.links(), d => d.target.id);
        
        const linkEnter = link.enter().insert('path', "g").attr("class", "link")
            .attr('d', d => { 
                const o = { x: source.x0, y: source.y0 }; 
                return this.diagonal(o, o, true); 
            });

        link.merge(linkEnter).transition().duration(500)
            .attr('d', d => this.diagonal(d.source, d.target));

        link.exit().transition().duration(500)
            .attr('d', d => { 
                const o = { x: source.x, y: source.y }; 
                return this.diagonal(o, o, true); 
            }).remove();

        nodes.forEach(d => { d.x0 = d.x; d.y0 = d.y; });
        this.allNodes = this.root.descendants();
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
        if (d.children) { d._children = d.children; d.children = null; } 
        else { d.children = d._children; d._children = null; }
        this.update(d);
    }

    buildHierarchy(data) {
        const map = {}; const sanitizeTime = (val) => (!val) ? 0 : +val;
        if (data.clades) {
            Object.keys(data.clades).forEach(key => {
                const rawNode = data.clades[key];
                map[key] = { ...rawNode, en_name: key, divergence_time_mya: sanitizeTime(rawNode.divergence_time_mya), children: [] };
            });
        }
        if (data.families) {
            data.families.forEach(fam => {
                map[fam.family_en] = { ...fam, children: [], cn_name: fam.family_cn, en_name: fam.family_en, divergence_time_mya: sanitizeTime(fam.divergence_time_mya) };
            });
        }
        let root = null;
        Object.values(map).forEach(node => {
            const parentKey = node.parent || node.parent_clade;
            if (parentKey && map[parentKey]) { map[parentKey].children.push(node); } 
            else if (!parentKey) { root = node; }
        });
        if (!root && Object.keys(map).length > 0) root = map[Object.keys(map)[0]];
        return d3.hierarchy(root);
    }

    initEasterEgg() {
        this.ghostData = {
            name: "Synapsida", cn: "合弓纲", time: 318,
            children: [
                { name: "Caseasauria", cn: "卡色龙亚目 [灭绝]", time: 290, dead: true },
                {
                    name: "Eupelycosauria", cn: "真盘龙亚目", time: 305,
                    children: [
                        { name: "Varanopidae", cn: "蜥代龙科 [灭绝]", time: 280, dead: true },
                        { name: "Edaphosauridae", cn: "基龙科 [灭绝]", time: 290, dead: true },
                        {
                            name: "Sphenacodontia", cn: "楔齿龙类", time: 295,
                            children: [
                                { name: "Dimetrodon", cn: "异齿龙 [灭绝]", time: 275, dead: true },
                                {
                                    name: "Therapsida", cn: "兽孔目", time: 270,
                                    children: [
                                        { name: "Dinocephalia", cn: "恐头兽亚目 [灭绝]", time: 260, dead: true },
                                        { name: "Anomodontia", cn: "二齿兽/水龙兽 [灭绝]", time: 255, dead: true },
                                        { name: "Gorgonopsia", cn: "丽齿兽亚目 [灭绝]", time: 252, dead: true },
                                        {
                                            name: "Cynodontia", cn: "犬齿兽类", time: 260,
                                            children: [
                                                { name: "Tritylodontidae", cn: "三列齿兽 [灭绝]", time: 150, dead: true },
                                                {
                                                    name: "Mammaliaformes", cn: "哺乳形类", time: 220,
                                                    children: [
                                                        { name: "Morganucodon", cn: "摩根齿兽 [灭绝]", time: 205, dead: true },
                                                        { name: "Mammalia", cn: "哺乳纲 (幸存)", time: 177, target: true } 
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        const btn = document.getElementById('origin-btn');
        btn.style.display = 'block';
        btn.addEventListener('click', () => this.triggerEasterEgg());
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

        const xOffset = this.root.x - targetNode.x; 

        const ghostGroup = this.g.insert("g", ":first-child").attr("class", "ghost-layer");

        ghostGroup.selectAll(".link.ghost").data(ghostRoot.links()).enter().append("path")
            .attr("class", d => {
                let isSurvivor = false;
                let checker = targetNode;
                while(checker) {
                    if (d.target === checker) { isSurvivor = true; break; }
                    checker = checker.parent;
                }
                return isSurvivor ? "link ghost survivor-line" : "link ghost";
            })
            .attr("d", d => {
                const s = { y: d.source.y, x: d.source.x + xOffset };
                const t = { y: d.target.y, x: d.target.x + xOffset };
                return `M ${s.y} ${s.x} C ${(s.y + t.y) / 2} ${s.x}, ${(s.y + t.y) / 2} ${t.x}, ${t.y} ${t.x}`;
            })
            .style("opacity", 0)
            .transition().duration(2000)
            .style("opacity", d => {
                let isSurvivor = false;
                let checker = targetNode;
                while(checker) {
                    if (d.target === checker) { isSurvivor = true; break; }
                    checker = checker.parent;
                }
                return isSurvivor ? 0.8 : 0.3; 
            });

        const gNodes = ghostGroup.selectAll(".node.ghost").data(ghostRoot.descendants()).enter().append("g")
            .attr("class", "node ghost").attr("transform", d => `translate(${d.y},${d.x + xOffset})`);

        gNodes.append("circle").attr("r", 4).style("opacity", 0).transition().duration(2000).style("opacity", 0.6);
        gNodes.append("text").attr("dy", -8).attr("text-anchor", "middle").text(d => d.data.cn).style("opacity", 0).transition().duration(2000).style("opacity", 0.8);

        const startX = this.timeScale(360); 
        const endX = this.timeScale(0);
        const viewWidth = Math.abs(startX - endX);
        const scale = (window.innerWidth / viewWidth) * 0.85; 
        
        const transform = d3.zoomIdentity.translate(window.innerWidth * 0.08 - startX * scale, window.innerHeight / 2).scale(scale);

        this.svg.transition().duration(3000).ease(d3.easeCubicInOut).call(this.zoom.transform, transform);

        this.g.selectAll(".node:not(.ghost)")
            .transition().duration(2000)
            .style("opacity", d => d.depth === 0 ? 0 : 0.1);

        this.g.selectAll(".link:not(.ghost)").transition().duration(2000).style("opacity", 0.05);
        document.getElementById('top-controls').style.display = 'none';
        document.getElementById('origin-btn').style.display = 'none';
        document.getElementById('time-axis').style.opacity = 0;

        const overlay = document.getElementById('easter-egg-overlay');
        const mainText = document.querySelector('.ee-text-main');
        const exitBtn = document.getElementById('exit-egg-btn');

        overlay.classList.add('interactive'); 
        overlay.style.opacity = 1; mainText.style.opacity = 1; mainText.style.transform = 'translateY(0)';

        const enterExploreMode = () => {
            mainText.style.opacity = 0;
            overlay.classList.remove('interactive');
            setTimeout(() => { overlay.style.opacity = 0; }, 500);
            exitBtn.classList.add('visible');
            exitBtn.onclick = () => this.exitEasterEgg();
        };

        this.skipHandler = () => { if(this.textTimer) clearTimeout(this.textTimer); enterExploreMode(); };
        overlay.addEventListener('click', this.skipHandler, { once: true });

        this.textTimer = setTimeout(() => {
            overlay.removeEventListener('click', this.skipHandler);
            enterExploreMode();
        }, 2000); 
    }

    exitEasterEgg() {
        if (!this.isEasterEggActive) return;
        const exitBtn = document.getElementById('exit-egg-btn');
        const mainText = document.querySelector('.ee-text-main');

        exitBtn.classList.remove('visible');
        setTimeout(() => { mainText.style.transform = 'translateY(20px)'; }, 500);

        this.g.selectAll(".ghost-layer").transition().duration(1000).style("opacity", 0).remove();
        this.g.selectAll(".node:not(.ghost)").transition().duration(1000).style("opacity", 1);
        this.g.selectAll(".link:not(.ghost)").transition().duration(1000).style("opacity", 1);

        if (this.savedTransform) {
            this.svg.transition().duration(1500).ease(d3.easeCubicOut).call(this.zoom.transform, this.savedTransform);
        }

        setTimeout(() => {
            document.getElementById('top-controls').style.display = 'flex';
            document.getElementById('origin-btn').style.display = 'block';
            document.getElementById('time-axis').style.opacity = 1;
            this.isEasterEggActive = false;
        }, 1500);
    }
}

/** Class 4: AppManager (主控制器) */
class AppManager {
    constructor() {
        this.ui = {
            loading: document.getElementById('loading-screen'),
            introLayer: document.getElementById('ui-layer'),
            enterBtn: document.getElementById('enter-btn'),
            modal: document.getElementById('modal'),
            modalClose: document.querySelector('.modal-close'),
            infoModal: document.getElementById('info-modal'),
            infoBtn: document.getElementById('btn-info'),
            infoClose: document.getElementById('info-close'),
            vizContainer: document.getElementById('container-viz'),
            timeAxis: document.getElementById('time-axis'),
            topControls: document.getElementById('top-controls'),
            paperTexture: document.getElementById('paper-texture')
        };
        this.particleBg = null; this.helixApp = null; this.treeApp = null; this.rawData = null;
    }

    start() {
        window.onload = () => {
            if (typeof mammalsData === 'undefined') { alert("错误：未找到 mammalsData，请确保 data.js 已正确加载。"); return; }
            this.rawData = mammalsData;
            
            // 移动端减少纹理渲染以提升性能
            if(window.innerWidth > 768) {
                this.generatePaperTexture();
            }
            
            this.particleBg = new ParticleBackground('container-particles');
            this.init3DScene();
            this.ui.loading.style.opacity = 0;
            setTimeout(() => this.ui.loading.style.display = 'none', 500);
        };
        
        this.ui.enterBtn.addEventListener('click', () => this.transitionToTree());
        
        // 绑定资料模态框事件
        this.ui.modalClose.addEventListener('click', () => this.closeModal(this.ui.modal));
        this.ui.modal.addEventListener('click', (e) => { if (e.target === this.ui.modal) this.closeModal(this.ui.modal); });

        // 绑定信息模态框事件
        this.ui.infoBtn.addEventListener('click', () => { this.ui.infoModal.style.display = 'flex'; });
        this.ui.infoClose.addEventListener('click', () => this.closeModal(this.ui.infoModal));
        this.ui.infoModal.addEventListener('click', (e) => { if (e.target === this.ui.infoModal) this.closeModal(this.ui.infoModal); });
    }

    init3DScene() {
        // 1. 动态计算卡片数量
        // 逻辑：基础数量 30 + 每 25px 屏幕高度增加 1 张卡片
        // 限制：最少 35 张，最多 80 张（防止性能问题）
        const densityFactor = 25; 
        let dynamicCount = 30 + Math.floor(window.innerHeight / densityFactor);
        dynamicCount = Math.min(Math.max(dynamicCount, 35), 80);

        // console.log(`屏幕高度: ${window.innerHeight}, 计算出的卡片数量: ${dynamicCount}`);

        const flatData = this.rawData.families.map(fam => ({
            cn_name: fam.family_cn, 
            en_name: fam.family_en, 
            desc: fam.description, 
            taxonomy: fam.taxonomy, 
            rank: "Family (科)", 
            isHero: Math.random() < 0.2
        }))
        .sort(() => Math.random() - 0.5)
        .slice(0, dynamicCount); // <--- 使用动态计算的数量

        this.helixApp = new HelixViewer('container-3d', flatData, (data) => this.showModal(data));
    }

    transitionToTree() {
        this.ui.introLayer.style.opacity = 0;
        if (this.particleBg) this.particleBg.fadeOut(1500);
        this.helixApp.zoomInAndEnd(() => {
            this.ui.introLayer.style.display = 'none';
            document.body.style.backgroundColor = 'var(--bg-color)';
            document.body.style.color = 'var(--text-color)';
            if (this.particleBg) setTimeout(() => this.particleBg.dispose(), 500);
            this.ui.vizContainer.style.display = 'block';
            this.ui.timeAxis.style.display = 'flex';
            this.ui.topControls.style.display = 'flex';
            if(window.innerWidth > 768) this.ui.paperTexture.style.display = 'block';
            this.treeApp = new EvolutionTree('container-viz', this.rawData, (data) => this.showModal(data));
            this.treeApp.init();
        });
    }

    generatePaperTexture() {
        const canvas = document.createElement('canvas'); const size = 128; canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size);
        const imageData = ctx.getImageData(0, 0, size, size); const buffer = new Uint32Array(imageData.data.buffer);
        for (let i = 0; i < buffer.length; i++) {
            const noise = Math.random() * 255;
            buffer[i] = 0xff000000 | (noise << 16) | (noise << 8) | noise;
        }
        ctx.putImageData(imageData, 0, 0);
        this.ui.paperTexture.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
    }

    showModal(data) {
        const els = { cn: document.getElementById('modal-cn'), en: document.getElementById('modal-en'), desc: document.getElementById('modal-desc'), img: document.getElementById('modal-img'), tags: document.getElementById('modal-tags') };
        els.cn.innerText = data.cn_name || data.family_cn || "未命名";
        els.en.innerText = data.en_name || data.family_en || "";
        els.desc.innerText = data.desc || data.description || "暂无详细资料...";
        els.tags.innerHTML = "";
        if (data.taxonomy) { Object.entries(data.taxonomy).forEach(([rank, name]) => { els.tags.innerHTML += `<span class="info-tag">${rank}: ${name}</span>`; }); }
        
        const familyEn = data.family_en || data.en_name;
        
        // 从全局变量 IMAGES 中获取 Base64 数据
        const imgBase64 = IMAGES[familyEn];

        if (imgBase64) {
            els.img.style.display = "block"; 
            els.img.src = imgBase64; // 直接赋值 Base64
            els.img.onerror = () => { els.img.style.display = 'none'; };
        } else { 
            els.img.style.display = "none"; 
        }
        
        this.ui.modal.style.display = 'flex';
    }

    closeModal(modalElement) { modalElement.style.display = 'none'; }
}

const app = new AppManager();
app.start();


