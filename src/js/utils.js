/**
 * utils.js - 工具函数库
 */

// 数据处理工具
const DataUtils = {
    /**
     * 清理时间数据
     */
    sanitizeTime(val) {
        if (val === null || val === undefined || val === '') return 0;
        const time = Number(val);
        if (!Number.isFinite(time) || time < 0) {
            throw new TypeError(`Invalid divergence time: ${val}`);
        }
        return time;
    },
    
    /**
     * 构建层级数据
     */
    buildHierarchy(data) {
        if (!data || (!data.clades && !data.families)) {
            throw new TypeError('Mammal hierarchy data is missing');
        }

        const map = new Map();
        const addNode = (key, node) => {
            if (!key) throw new Error('Hierarchy node is missing a key');
            if (map.has(key)) throw new Error(`Duplicate hierarchy key: ${key}`);
            map.set(key, node);
        };
        
        // 处理分支节点
        if (data.clades) {
            Object.keys(data.clades).forEach(key => {
                const rawNode = data.clades[key];
                addNode(key, {
                    ...rawNode,
                    taxon_key: key,
                    scientific_name: key,
                    en_name: rawNode.en_name || key,
                    divergence_time_mya: this.sanitizeTime(rawNode.divergence_time_mya),
                    children: []
                });
            });
        }
        
        // 处理科级节点
        if (data.families) {
            data.families.forEach(fam => {
                addNode(fam.family_en, {
                    ...fam,
                    children: [],
                    cn_name: fam.family_cn,
                    en_name: fam.family_en,
                    taxon_key: fam.family_en,
                    scientific_name: fam.family_en,
                    divergence_time_mya: this.sanitizeTime(fam.divergence_time_mya)
                });
            });
        }
        
        // 建立父子关系
        const roots = [];
        map.forEach(node => {
            const parentKey = node.parent || node.parent_clade;
            if (parentKey) {
                const parent = map.get(parentKey);
                if (!parent) {
                    throw new Error(`Missing parent '${parentKey}' for '${node.taxon_key}'`);
                }
                parent.children.push(node);
            } else if (!parentKey) {
                roots.push(node);
            }
        });

        if (roots.length !== 1) {
            throw new Error(`Expected one hierarchy root, found ${roots.length}`);
        }

        return d3.hierarchy(roots[0]);
    },
    
    /**
     * 获取节点等级值
     */
    getNodeRankValue(d) {
        const rankMap = {
            "root": 0, "class": 10, "subclass": 20, "infraclass": 30,
            "superorder": 40, "order": 50, "suborder": 60, "infraorder": 70,
            "parvorder": 80, "superfamily": 85, "family": 90
        };
        
        if (d.data.family_en) return 90;
        
        if (d.data.rank) {
            const key = d.data.rank.toLowerCase();
            if (rankMap[key] !== undefined) return rankMap[key];
        }
        
        if (d.depth === 0) return 0;
        return null;
    }
};

// DOM 工具
const DOMUtils = {
    /**
     * 生成纸质纹理
     */
    generatePaperTexture() {
        const canvas = document.createElement('canvas');
        const size = 128;
        canvas.width = size;
        canvas.height = size;
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, size, size);
        
        const imageData = ctx.getImageData(0, 0, size, size);
        const buffer = new Uint32Array(imageData.data.buffer);
        
        for (let i = 0; i < buffer.length; i++) {
            const noise = Math.random() * 255;
            buffer[i] = 0xff000000 | (noise << 16) | (noise << 8) | noise;
        }
        
        ctx.putImageData(imageData, 0, 0);
        return canvas.toDataURL('image/png');
    },
    
    /**
     * 创建卡片元素（使用 DOM API 避免 XSS）
     */
    createCardElement(item, imgBase64) {
        const element = document.createElement('button');
        element.type = 'button';
        element.className = item.isHero ? 'card-element hero' : 'card-element';
        element.setAttribute('aria-label', `${t('openDetails')}: ${getLocalizedText(item, 'name')}`);

        const content = document.createElement('div');
        content.className = 'card-content';

        const img = document.createElement('img');
        img.className = 'card-img';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = getLocalizedText(item, 'name');
        if (imgBase64) {
            img.src = imgBase64;
        }
        img.addEventListener('error', function() {
            this.style.display = 'none';
            this.parentElement.style.background = '#222';
        });

        const info = document.createElement('div');
        info.className = 'card-info';

        const cnSpan = document.createElement('span');
        cnSpan.className = 'card-cn';
        cnSpan.textContent = getLocalizedText(item, 'name');

        const enSpan = document.createElement('span');
        enSpan.className = 'card-en';
        enSpan.textContent = item.en_name;

        info.appendChild(cnSpan);
        info.appendChild(enSpan);
        content.appendChild(img);
        content.appendChild(info);
        element.appendChild(content);

        return element;
    }
};

// 性能优化工具
const PerformanceUtils = {
    /**
     * 防抖函数
     */
    debounce(func, wait) {
        let timeout;
        function executedFunction(...args) {
            const context = this;
            const later = () => {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
        executedFunction.cancel = () => {
            clearTimeout(timeout);
            timeout = null;
        };
        return executedFunction;
    },
    
    /**
     * 节流函数
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    /**
     * 计算动态卡片数量
     */
    calculateCardCount() {
        const config = getConfig('performance.cardCount');
        let count = config.base + Math.floor(window.innerHeight / config.densityFactor);
        return Math.min(Math.max(count, config.min), config.max);
    }
};
