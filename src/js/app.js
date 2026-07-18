/** app.js - Application lifecycle and UI controller. */

class AppManager {
    constructor() {
        this.ui = {
            loading: document.getElementById('loading-screen'),
            introLayer: document.getElementById('ui-layer'),
            enterBtn: document.getElementById('enter-btn'),
            modal: document.getElementById('modal'),
            modalClose: document.getElementById('modal-close'),
            infoModal: document.getElementById('info-modal'),
            infoBtn: document.getElementById('btn-info'),
            infoClose: document.getElementById('info-close'),
            vizContainer: document.getElementById('container-viz'),
            timeAxis: document.getElementById('time-axis'),
            topControls: document.getElementById('top-controls'),
            paperTexture: document.getElementById('paper-texture')
        };
        this.state = 'booting';
        this.particleBg = null;
        this.helixApp = null;
        this.treeApp = null;
        this.rawData = null;
        this.activeModal = null;
        this.lastFocusedElement = null;
        this.currentModalData = null;
        this.boundHandlers = {};
        this.started = false;
    }

    start() {
        if (this.started) return;
        this.started = true;
        this.bindUIEvents();
        this.setupLanguageSwitch();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize(), { once: true });
        } else {
            this.initialize();
        }
    }

    validateRuntime() {
        const missing = [];
        if (typeof mammalsData === 'undefined') missing.push('mammalsData');
        if (typeof IMAGE_MANIFEST === 'undefined') missing.push('IMAGE_MANIFEST');
        if (typeof d3 === 'undefined') missing.push('D3');
        if (typeof THREE === 'undefined') missing.push('Three.js');
        if (typeof TWEEN === 'undefined') missing.push('Tween.js');
        if (typeof THREE !== 'undefined' && !THREE.CSS3DRenderer) missing.push('CSS3DRenderer');
        if (typeof THREE !== 'undefined' && !THREE.OrbitControls) missing.push('OrbitControls');
        if (missing.length) throw new Error(`Missing runtime dependencies: ${missing.join(', ')}`);
    }

    initialize() {
        if (this.state !== 'booting') return;

        try {
            this.validateRuntime();
            this.rawData = mammalsData;
            updateUILanguage();

            if (!isMobile() && this.ui.paperTexture) {
                const textureUrl = DOMUtils.generatePaperTexture();
                this.ui.paperTexture.style.backgroundImage = `url(${textureUrl})`;
            }

            if (!prefersReducedMotion()) {
                try {
                    this.particleBg = new ParticleBackground('container-particles');
                } catch (error) {
                    console.warn('WebGL background unavailable; continuing without it.', error);
                }
            }

            this.init3DScene();
            this.state = 'ready';
            if (this.ui.enterBtn) this.ui.enterBtn.disabled = false;
            this.hideLoadingScreen();
        } catch (error) {
            this.showFatalError(error);
        }
    }

    hideLoadingScreen() {
        if (!this.ui.loading) return;
        this.ui.loading.setAttribute('aria-busy', 'false');
        this.ui.loading.style.opacity = 0;
        const delay = prefersReducedMotion() ? 0 : 500;
        setTimeout(() => {
            if (this.state !== 'error') this.ui.loading.style.display = 'none';
        }, delay);
    }

    showFatalError(error) {
        console.error('Application initialization failed.', error);
        this.state = 'error';
        if (this.ui.enterBtn) this.ui.enterBtn.disabled = true;
        if (!this.ui.loading) return;

        this.ui.loading.textContent = '';
        this.ui.loading.style.display = 'flex';
        this.ui.loading.style.opacity = 1;
        this.ui.loading.setAttribute('role', 'alert');
        this.ui.loading.setAttribute('aria-busy', 'false');

        const message = document.createElement('p');
        message.className = 'loading-error';
        message.textContent = t('loadError');
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.className = 'retry-btn';
        retry.textContent = t('retry');
        retry.addEventListener('click', () => window.location.reload());
        this.ui.loading.append(message, retry);
        retry.focus();
    }

    bindUIEvents() {
        this.boundHandlers.enter = () => this.transitionToTree();
        this.ui.enterBtn?.addEventListener('click', this.boundHandlers.enter);

        this.boundHandlers.modalClose = () => this.closeModal(this.ui.modal);
        this.ui.modalClose?.addEventListener('click', this.boundHandlers.modalClose);
        this.boundHandlers.modalOverlay = (event) => {
            if (event.target === this.ui.modal) this.closeModal(this.ui.modal);
        };
        this.ui.modal?.addEventListener('click', this.boundHandlers.modalOverlay);

        this.boundHandlers.infoOpen = () => this.openModal(this.ui.infoModal);
        this.ui.infoBtn?.addEventListener('click', this.boundHandlers.infoOpen);
        this.boundHandlers.infoClose = () => this.closeModal(this.ui.infoModal);
        this.ui.infoClose?.addEventListener('click', this.boundHandlers.infoClose);
        this.boundHandlers.infoOverlay = (event) => {
            if (event.target === this.ui.infoModal) this.closeModal(this.ui.infoModal);
        };
        this.ui.infoModal?.addEventListener('click', this.boundHandlers.infoOverlay);

        this.boundHandlers.keydown = (event) => this.handleDocumentKeydown(event);
        document.addEventListener('keydown', this.boundHandlers.keydown);
    }

    handleDocumentKeydown(event) {
        if (!this.activeModal) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            this.closeModal(this.activeModal);
            return;
        }
        if (event.key !== 'Tab') return;

        const focusable = Array.from(this.activeModal.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )).filter(element => element.getClientRects().length > 0);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    openModal(modalElement) {
        if (!modalElement) return;
        if (this.activeModal && this.activeModal !== modalElement) {
            this.closeModal(this.activeModal, { restoreFocus: false });
        }
        this.lastFocusedElement = document.activeElement;
        this.activeModal = modalElement;
        modalElement.style.display = 'flex';
        modalElement.setAttribute('aria-hidden', 'false');
        const focusTarget = modalElement.querySelector('.modal-close') || modalElement.querySelector('.modal-card');
        requestAnimationFrame(() => focusTarget?.focus());
    }

    closeModal(modalElement, options = {}) {
        if (!modalElement || modalElement.getAttribute('aria-hidden') === 'true') return;
        modalElement.style.display = 'none';
        modalElement.setAttribute('aria-hidden', 'true');
        if (this.activeModal === modalElement) this.activeModal = null;
        if (options.restoreFocus !== false && this.lastFocusedElement?.isConnected) {
            this.lastFocusedElement.focus();
        }
    }

    setupLanguageSwitch() {
        const langBtn = document.getElementById('lang-switch');
        if (!langBtn) return;

        this.boundHandlers.language = () => {
            const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
            switchLanguage(newLang);
            langBtn.textContent = newLang === 'zh' ? 'EN' : '中';

            if (this.treeApp?.g) {
                this.treeApp.g.selectAll('.node:not(.ghost)')
                    .attr('aria-label', d => getLocalizedText(d.data, 'name'));
                this.treeApp.g.selectAll('.node:not(.ghost) text')
                    .text(d => getLocalizedText(d.data, 'name'))
                    .attr('aria-label', d => `${t('openDetails')}: ${getLocalizedText(d.data, 'name')}`);
                this.treeApp.svg?.attr('aria-label', t('treeLabel'));
            }

            if (this.treeApp?.textGroup) {
                this.treeApp.textGroup.selectAll('.epoch-label')
                    .text(d => d.name[currentLanguage]);
            }

            if (this.currentModalData && this.activeModal === this.ui.modal) {
                this.renderModal(this.currentModalData);
            }
        };
        langBtn.addEventListener('click', this.boundHandlers.language);
    }

    init3DScene() {
        const dynamicCount = PerformanceUtils.calculateCardCount();
        const flatData = this.rawData.families.map(family => ({
            ...family,
            cn_name: family.family_cn,
            en_name: family.family_en,
            scientific_name: family.family_en,
            desc: family.description,
            rank: 'Family (科)',
            isHero: Math.random() < 0.2
        }));

        for (let index = flatData.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [flatData[index], flatData[swapIndex]] = [flatData[swapIndex], flatData[index]];
        }

        this.helixApp = new HelixViewer(
            'container-3d',
            flatData.slice(0, dynamicCount),
            data => this.showModal(data)
        );
    }

    transitionToTree() {
        if (this.state !== 'ready') return;
        this.state = 'transitioning';
        if (this.ui.enterBtn) this.ui.enterBtn.disabled = true;
        if (this.ui.introLayer) this.ui.introLayer.style.opacity = 0;
        this.particleBg?.fadeOut(prefersReducedMotion() ? 0 : 1500);

        const complete = () => this.completeTreeTransition();
        if (this.helixApp && !this.helixApp.disposed) {
            this.helixApp.zoomInAndEnd(complete);
        } else {
            complete();
        }
    }

    completeTreeTransition() {
        if (this.state !== 'transitioning') return;

        try {
            if (this.ui.introLayer) this.ui.introLayer.style.display = 'none';
            document.body.style.backgroundColor = 'var(--bg-color)';
            document.body.style.color = 'var(--text-color)';
            this.particleBg?.dispose();
            this.particleBg = null;
            this.helixApp = null;

            if (this.ui.vizContainer) this.ui.vizContainer.style.display = 'block';
            if (this.ui.timeAxis) this.ui.timeAxis.style.display = 'flex';
            if (this.ui.topControls) this.ui.topControls.style.display = 'flex';
            if (!isMobile() && this.ui.paperTexture) this.ui.paperTexture.style.display = 'block';

            this.treeApp?.dispose();
            this.treeApp = new EvolutionTree('container-viz', this.rawData, data => this.showModal(data));
            this.treeApp.init();
            this.state = 'tree';
        } catch (error) {
            this.showFatalError(error);
        }
    }

    showModal(data) {
        this.currentModalData = data;
        this.renderModal(data);
        this.openModal(this.ui.modal);
    }

    renderModal(data) {
        const elements = {
            cn: document.getElementById('modal-cn'),
            en: document.getElementById('modal-en'),
            desc: document.getElementById('modal-desc'),
            img: document.getElementById('modal-img'),
            tags: document.getElementById('modal-tags')
        };

        if (elements.cn) elements.cn.textContent = getLocalizedText(data, 'name');
        if (elements.en) {
            elements.en.textContent = data.scientific_name || data.family_en || data.taxon_key || data.en_name || '';
        }
        if (elements.desc) elements.desc.textContent = getLocalizedText(data, 'description');

        if (elements.tags) {
            elements.tags.textContent = '';
            if (data.taxonomy) {
                Object.entries(data.taxonomy).forEach(([rank, name]) => {
                    const tag = document.createElement('span');
                    tag.className = 'info-tag';
                    tag.textContent = `${rank}: ${name}`;
                    elements.tags.appendChild(tag);
                });
            }
        }

        const imageKey = data.family_en || data.scientific_name || data.taxon_key;
        const imageUrl = getImage(imageKey);
        if (elements.img) {
            elements.img.onerror = null;
            if (imageUrl) {
                elements.img.style.display = 'block';
                elements.img.src = imageUrl;
                elements.img.alt = getLocalizedText(data, 'name');
                elements.img.onerror = () => {
                    elements.img.style.display = 'none';
                };
            } else {
                elements.img.removeAttribute('src');
                elements.img.alt = '';
                elements.img.style.display = 'none';
            }
        }
    }

    dispose() {
        this.particleBg?.dispose();
        this.helixApp?.dispose();
        this.treeApp?.dispose();
        this.ui.enterBtn?.removeEventListener('click', this.boundHandlers.enter);
        this.ui.modalClose?.removeEventListener('click', this.boundHandlers.modalClose);
        this.ui.modal?.removeEventListener('click', this.boundHandlers.modalOverlay);
        this.ui.infoBtn?.removeEventListener('click', this.boundHandlers.infoOpen);
        this.ui.infoClose?.removeEventListener('click', this.boundHandlers.infoClose);
        this.ui.infoModal?.removeEventListener('click', this.boundHandlers.infoOverlay);
        document.removeEventListener('keydown', this.boundHandlers.keydown);
        document.getElementById('lang-switch')?.removeEventListener('click', this.boundHandlers.language);
        this.state = 'disposed';
    }
}

const app = new AppManager();
window.mammaliaApp = app;
app.start();
