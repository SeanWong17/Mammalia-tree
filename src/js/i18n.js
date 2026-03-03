/**
 * i18n.js - 国际化配置
 */

// 语言配置
const i18n = {
    zh: {
        // UI 文本
        title: "MAMMALIA",
        subtitle: "哺乳纲演化时间树 · 沉浸式导览",
        enterBtn: "探索演化树",
        loading: "资源加载中...",
        
        // 控制按钮
        btnCollapse: "逐级收起",
        btnExpand: "逐级展开",
        btnInfo: "说明与日志",
        searchPlaceholder: "搜索科名（中文/拉丁名）...",
        noResults: "无匹配结果",
        
        // 彩蛋
        originBtn: "溯源：最后的合弓纲",
        exitEggBtn: "返回现代哺乳纲",
        easterEggText: "我们是合弓纲在这颗星球上，最后的孑遗。",
        
        // 模态框
        aboutTitle: "关于本项目",
        closeBtn: "×"
    },
    en: {
        // UI 文本
        title: "MAMMALIA",
        subtitle: "Mammalian Evolution Tree · Immersive Guide",
        enterBtn: "Explore Evolution",
        loading: "Loading Resources...",
        
        // 控制按钮
        btnCollapse: "Collapse Level",
        btnExpand: "Expand Level",
        btnInfo: "About & Changelog",
        searchPlaceholder: "Search family (Chinese/Latin)...",
        noResults: "No Results",
        
        // 彩蛋
        originBtn: "Origin: Last Synapsids",
        exitEggBtn: "Return to Modern Mammals",
        easterEggText: "We are the last remnants of Synapsida on this planet.",
        
        // 模态框
        aboutTitle: "About This Project",
        closeBtn: "×"
    }
};

// 当前语言状态
let currentLanguage = 'zh';

/**
 * 切换语言
 * @param {string} lang - 语言代码 ('zh' 或 'en')
 */
function switchLanguage(lang) {
    if (!i18n[lang]) {
        console.warn(`Language '${lang}' not found, keeping current language`);
        return;
    }
    currentLanguage = lang;
    updateUILanguage();
}

/**
 * 获取翻译文本
 * @param {string} key - 翻译键（支持点号分隔的路径）
 * @returns {string} 翻译后的文本
 */
function t(key) {
    const keys = key.split('.');
    let value = i18n[currentLanguage];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

/**
 * 更新 UI 语言
 */
function updateUILanguage() {
    // 更新标题和副标题
    const title = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');
    const enterBtn = document.getElementById('enter-btn');
    
    if (title) title.textContent = t('title');
    if (subtitle) subtitle.textContent = t('subtitle');
    if (enterBtn) enterBtn.textContent = t('enterBtn');
    
    // 更新加载文本
    const loading = document.getElementById('loading-screen');
    if (loading) loading.textContent = t('loading');
    
    // 更新控制按钮
    const btnCollapse = document.getElementById('btn-collapse-all');
    const btnExpand = document.getElementById('btn-expand-all');
    const btnInfo = document.getElementById('btn-info');
    
    if (btnCollapse) btnCollapse.title = t('btnCollapse');
    if (btnExpand) btnExpand.title = t('btnExpand');
    if (btnInfo) btnInfo.title = t('btnInfo');
    
    // 更新搜索框
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    
    // 更新彩蛋按钮
    const originBtn = document.getElementById('origin-btn');
    const exitEggBtn = document.getElementById('exit-egg-btn');
    const easterEggText = document.querySelector('.ee-text-main');
    
    if (originBtn) originBtn.textContent = t('originBtn');
    if (exitEggBtn) exitEggBtn.textContent = t('exitEggBtn');
    if (easterEggText) easterEggText.textContent = t('easterEggText');
}

/**
 * 获取当前语言
 * @returns {string} 当前语言代码
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * 获取多语言文本 - 用于数据字段
 * @param {object} data - 数据对象
 * @param {string} field - 字段名（如 'name', 'description'）
 * @returns {string} 对应语言的文本
 */
function getLocalizedText(data, field) {
    const lang = currentLanguage;
    
    if (field === 'name') {
        // 名称字段
        if (lang === 'en') {
            // 英文模式：优先显示英文名称，如果没有则显示拉丁学名
            if (data.en_name) {
                return data.en_name;
            } else if (data.family_en) {
                return data.family_en;
            } else if (data.en_name || data.family_en) {
                return data.en_name || data.family_en;
            } else {
                // 如果都没有，显示拉丁学名（通常是键名）
                return data.cn_name || data.family_cn || 'Unknown';
            }
        } else {
            // 中文模式
            return data.cn_name || data.family_cn || data.en_name || data.family_en || '未命名';
        }
    } else if (field === 'description') {
        // 描述字段
        if (lang === 'en') {
            // 英文模式：如果有英文描述就用，否则显示简化信息
            if (data.en_description) {
                return data.en_description;
            } else if (data.family_en || data.en_name) {
                const name = data.family_en || data.en_name;
                return `${name} - A family/clade of mammals. (Detailed description available in Chinese only)`;
            } else {
                return 'Description not available in English.';
            }
        } else {
            // 中文模式
            return data.description || data.desc || '暂无详细资料...';
        }
    }
    
    return '';
}

