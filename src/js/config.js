/**
 * config.js - 全局配置
 */

// 应用配置
const APP_CONFIG = {
    // 性能配置
    performance: {
        particleCount: {
            desktop: 2000,
            mobile: 1000
        },
        cardCount: {
            base: 30,
            densityFactor: 25,
            min: 35,
            max: 80
        }
    },
    
    // 3D 场景配置
    scene3D: {
        helix: {
            radiusBase: 600,
            radiusMax: 800,
            radiusMobile: 650,
            yStep: 30,
            thetaDensity: 0.25
        },
        camera: {
            initialY: 5000,
            initialZ: 10,
            targetZDesktop: 2000,
            targetZMobile: 1400
        }
    },
    
    // 树形图配置
    tree: {
        width: {
            desktop: 2000,
            mobile: 1200
        },
        minHeight: 800,
        nodeSpacing: 45,
        zoom: {
            scaleExtent: [0.15, 3],
            translateExtent: [[-2000, -500], [2500, 2000]],
            initialScale: {
                desktop: 0.8,
                mobile: 0.5
            },
            initialX: {
                desktop: 50,
                mobile: 20
            }
        }
    },
    
    // 地质年代配置
    geologicalEpochs: [
        { name: { zh: "第四纪", en: "Quaternary" }, start: 0, end: 2.58, color: "#FFF2AE" },
        { name: { zh: "新近纪", en: "Neogene" }, start: 2.58, end: 23.03, color: "#FFFF00" },
        { name: { zh: "古近纪", en: "Paleogene" }, start: 23.03, end: 66.0, color: "#FDCC8A" },
        { name: { zh: "白垩纪", en: "Cretaceous" }, start: 66.0, end: 145.0, color: "#A1D99B" },
        { name: { zh: "侏罗纪", en: "Jurassic" }, start: 145.0, end: 201.3, color: "#3182BD" },
        { name: { zh: "三叠纪", en: "Triassic" }, start: 201.3, end: 251.9, color: "#9ECAE1" }
    ]
};

/**
 * 工具函数：判断是否为移动端
 * @returns {boolean}
 */
function isMobile() {
    return window.innerWidth < 768;
}

/**
 * 工具函数：获取配置值
 * @param {string} path - 配置路径（用点号分隔）
 * @returns {*} 配置值
 */
function getConfig(path) {
    const keys = path.split('.');
    let value = APP_CONFIG;
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value;
}
