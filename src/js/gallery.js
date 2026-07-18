/** gallery.js - WebGL background and CSS3D specimen gallery. */

function getImage(key) {
    return (typeof IMAGE_MANIFEST !== 'undefined' && IMAGE_MANIFEST[key])
        ? IMAGE_MANIFEST[key]
        : '';
}

/** Class 1: ParticleBackground (WebGL 星空) */
class ParticleBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) throw new Error(`Missing particle container: ${containerId}`);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.animationFrameId = null;
        this.fadeAnimationFrameId = null;
        this.disposed = false;
        this.mouseX = 0;
        this.mouseY = 0;

        // 预绑定方法引用，确保 removeEventListener 能正确匹配
        this._onResize = this.onResize.bind(this);
        this._onMouseMove = this.onMouseMove.bind(this);
        this._onTouchMove = this._handleTouchMove.bind(this);
        this._animate = this.animate.bind(this);

        this.init();
    }

    init() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
        this.camera.position.z = 1000;
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
        this.createParticles();
        window.addEventListener('resize', this._onResize);
        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('touchmove', this._onTouchMove, { passive: true });
        this._animate();
    }

    createParticles() {
        const particleCount = isMobile()
            ? getConfig('performance.particleCount.mobile')
            : getConfig('performance.particleCount.desktop');

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const colorPalette = [
            new THREE.Color(0xc5a059),
            new THREE.Color(0x4a90a4),
            new THREE.Color(0x8b7355),
            new THREE.Color(0xffffff)
        ];

        for (let i = 0; i < particleCount; i++) {
            const radius = 800 + Math.random() * 1200;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 3 + 1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    _handleTouchMove(e) {
        if (e.touches.length > 0) {
            this.mouseX = (e.touches[0].clientX - window.innerWidth / 2) * 0.0003;
            this.mouseY = (e.touches[0].clientY - window.innerHeight / 2) * 0.0003;
        }
    }

    onMouseMove(e) {
        this.mouseX = (e.clientX - window.innerWidth / 2) * 0.0003;
        this.mouseY = (e.clientY - window.innerHeight / 2) * 0.0003;
    }

    onResize() {
        if (!this.camera) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        if (this.disposed || !this.renderer) return;
        this.animationFrameId = requestAnimationFrame(this._animate);
        if (this.particles) {
            this.particles.rotation.y += 0.0002 + this.mouseX * 0.1;
            this.particles.rotation.x += 0.0001 + this.mouseY * 0.1;
        }
        this.renderer.render(this.scene, this.camera);
    }

    fadeOut(duration = 500) {
        if (!this.particles || this.disposed) return;
        if (prefersReducedMotion() || duration <= 0) {
            this.particles.material.opacity = 0;
            return;
        }
        const startOpacity = this.particles.material.opacity;
        const startTime = Date.now();
        const fade = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            this.particles.material.opacity = startOpacity * (1 - progress);
            if (progress < 1) this.fadeAnimationFrameId = requestAnimationFrame(fade);
        };
        fade();
    }

    dispose() {
        if (this.disposed) return;
        this.disposed = true;
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        if (this.fadeAnimationFrameId) cancelAnimationFrame(this.fadeAnimationFrameId);
        // 正确移除所有事件监听器
        window.removeEventListener('resize', this._onResize);
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('touchmove', this._onTouchMove);
        // 释放 GPU 资源
        if (this.particles) {
            this.particles.geometry.dispose();
            this.particles.material.dispose();
        }
        if (this.renderer) {
            this.renderer.dispose();
            if (this.container && this.renderer.domElement.parentNode === this.container) {
                this.container.removeChild(this.renderer.domElement);
            }
        }
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
    }
}

/** Class 2: HelixViewer (CSS3D 螺旋) */
class HelixViewer {
    constructor(containerId, data, onCardClick) {
        this.container = document.getElementById(containerId);
        if (!this.container) throw new Error(`Missing gallery container: ${containerId}`);
        this.data = data;
        this.onCardClick = onCardClick;
        this.objects = [];
        this.animationFrameId = null;
        this.disposed = false;
        this.transitioning = false;
        this.timers = new Set();
        this.tweens = new Set();

        // 预绑定方法引用
        this._onResize = this.onResize.bind(this);
        this._animate = this.animate.bind(this);

        this.init();
    }

    init() {
        const width = window.innerWidth;
        const height = window.innerHeight;
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
        this.controls.autoRotate = !prefersReducedMotion();
        this.controls.autoRotateSpeed = 60;
        this.controls.enabled = false;

        this.renderer.domElement.style.touchAction = 'none';
        this.createHelix();
        window.addEventListener('resize', this._onResize);
        this._animate();

        this.playIntroSequence();
    }

    createHelix() {
        const helixGroup = new THREE.Group();
        const config = getConfig('scene3D.helix');

        // 动态计算半径
        let radius = Math.max(config.radiusBase, Math.min(window.innerWidth * 0.6, config.radiusMax));
        if (isMobile()) radius = config.radiusMobile;

        const yStep = config.yStep;
        const totalY = this.data.length * yStep;

        this.data.forEach((item, i) => {
            const imageUrl = getImage(item.en_name);
            const element = DOMUtils.createCardElement(item, imageUrl);

            element.addEventListener('click', () => {
                if (this.onCardClick) this.onCardClick(item);
            });
            element.addEventListener('touchstart', () => {}, { passive: true });

            const object = new THREE.CSS3DObject(element);

            // 调整旋转角度密度
            const thetaDensity = config.thetaDensity * (config.radiusBase / radius);
            const theta = i * thetaDensity;
            const y = -(totalY / 2) + i * yStep;
            const offset = (i % 2) * Math.PI;

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
        const config = getConfig('scene3D.camera');
        const targetZ = isMobile() ? config.targetZMobile : config.targetZDesktop;

        if (prefersReducedMotion()) {
            this.camera.position.set(0, 0, targetZ);
            this.camera.lookAt(0, 0, 0);
            this.controls.autoRotateSpeed = 0;
            this.controls.enabled = true;
            this.container.classList.add('interactive');
            return;
        }

        this.schedule(() => {
            if (this.disposed || this.transitioning) return;
            // 位置下落 + 拉远
            const positionTween = new TWEEN.Tween(this.camera.position)
                .to({ x: 0, y: 0, z: targetZ }, 3000)
                .easing(TWEEN.Easing.Cubic.InOut)
                .start();
            this.tweens.add(positionTween);

            // 旋转减速
            const controlsTween = new TWEEN.Tween(this.controls)
                .to({ autoRotateSpeed: 2.0 }, 3000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onComplete(() => {
                    if (this.disposed || !this.controls) return;
                    this.controls.enabled = true;
                    this.container.classList.add('interactive');
                })
                .start();
            this.tweens.add(controlsTween);
        }, 1500);
    }

    schedule(callback, delay) {
        const timer = setTimeout(() => {
            this.timers.delete(timer);
            callback();
        }, delay);
        this.timers.add(timer);
        return timer;
    }

    onResize() {
        if (!this.camera) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        if (this.disposed || !this.renderer || !this.controls) return;
        this.animationFrameId = requestAnimationFrame(this._animate);
        this.controls.update();
        TWEEN.update();
        this.renderer.render(this.scene, this.camera);
    }

    zoomInAndEnd(onComplete) {
        if (this.transitioning || this.disposed) return;
        this.transitioning = true;
        const overlay = document.getElementById('transition-overlay');
        this.container.classList.remove('interactive');
        this.tweens.forEach(tween => tween.stop());
        this.tweens.clear();

        if (prefersReducedMotion()) {
            if (overlay) overlay.style.opacity = 1;
            this.dispose();
            if (onComplete) onComplete();
            if (overlay) overlay.style.opacity = 0;
            return;
        }

        const controlsTween = new TWEEN.Tween(this.controls)
            .to({ autoRotateSpeed: 20 }, 2000)
            .easing(TWEEN.Easing.Cubic.In)
            .start();
        this.tweens.add(controlsTween);

        const cameraTween = new TWEEN.Tween(this.camera.position)
            .to({ x: 0, y: 0, z: -2000 }, 2000)
            .easing(TWEEN.Easing.Exponential.In)
            .onUpdate(() => {
                if (this.camera && this.scene) this.camera.lookAt(this.scene.position);
            })
            .start();
        this.tweens.add(cameraTween);

        this.schedule(() => {
            if (overlay) overlay.style.opacity = 1;
        }, 1500);

        this.schedule(() => {
            this.dispose();
            if (onComplete) onComplete();
            setTimeout(() => {
                if (overlay) overlay.style.opacity = 0;
            }, 300);
        }, 2000);
    }

    dispose() {
        if (this.disposed) return;
        this.disposed = true;
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        this.timers.forEach(timer => clearTimeout(timer));
        this.timers.clear();
        this.tweens.forEach(tween => tween.stop());
        this.tweens.clear();
        window.removeEventListener('resize', this._onResize);
        if (this.controls) this.controls.dispose();
        if (this.container && this.renderer?.domElement.parentNode === this.container) {
            this.container.removeChild(this.renderer.domElement);
        }
        this.container?.classList.remove('interactive');
        this.objects = [];
        this.onCardClick = null;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
    }
}
