document.addEventListener('DOMContentLoaded', function() {
            // Initialize Ecosystem Swiper
            const ecosystemSwiper = new Swiper('.ecosystem-swiper', {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: false,
                autoplay: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                breakpoints: {
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 24,
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 28,
                    },
                },
            });
        });

        // Ensure video plays with enhanced loading
        document.addEventListener('DOMContentLoaded', () => {
            const heroVideo = document.querySelector('.hero-card video');
            if (heroVideo) {
                // Add loading class for smooth transition
                heroVideo.classList.add('video-loading');
                
                // Wait for video to be ready
                heroVideo.addEventListener('loadeddata', () => {
                    heroVideo.classList.remove('video-loading');
                    heroVideo.classList.add('video-loaded');
                });
                
                // Attempt autoplay
                const playPromise = heroVideo.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Autoplay started successfully
                    }).catch(error => {
                        // Autoplay was prevented, enable on user interaction
                        const enableVideo = () => {
                            heroVideo.play();
                            document.removeEventListener('click', enableVideo);
                            document.removeEventListener('touchstart', enableVideo);
                            document.removeEventListener('keydown', enableVideo);
                        };
                        
                        document.addEventListener('click', enableVideo, { once: true });
                        document.addEventListener('touchstart', enableVideo, { once: true });
                        document.addEventListener('keydown', enableVideo, { once: true });
                    });
                }
                
                // Handle video errors gracefully
                heroVideo.addEventListener('error', (e) => {
                    console.warn('Video loading error:', e);
                    // Fallback: show poster or static image
                    heroVideo.style.background = 'linear-gradient(135deg, rgba(108, 43, 217, 0.2), rgba(144, 147, 255, 0.2))';
                });
            }
        });
        
        // Scroll Reveal Animation
        function handleScrollReveal() {
            const elements = document.querySelectorAll('.scroll-reveal');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Parallax Effect
        function handleParallax() {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                const scrollY = window.scrollY;
                heroSection.style.setProperty('--scroll-y', `${scrollY * 0.5}px`);
                heroSection.classList.add('parallax');
            }
        }
        
        // Create Particles
        function createParticles() {
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'hero-particles';

            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.appendChild(particlesContainer);

                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.animationDelay = `${Math.random() * 6}s`;
                    particle.style.animationDuration = `${4 + Math.random() * 4}s`;
                    particlesContainer.appendChild(particle);
                }
            }
        }

        // ============================================
        // HERO CAROUSEL - SPIRIT REALM INTEGRATION
        // ============================================

        class HeroCarousel {
            constructor() {
                this.carousel = document.getElementById('heroCarousel');
                this.slides = document.querySelectorAll('.hero-slide');
                this.dots = document.querySelectorAll('.carousel-dot');
                this.currentSlide = 0;
                this.totalSlides = this.slides.length;
                this.autoPlayInterval = null;
                this.autoPlayDelay = 6000; // 6 seconds per slide
                this.reducedMotion = window.prefersReducedMotion || false;

                if (this.carousel && this.slides.length > 1) {
                    this.init();
                }

                // Pause autoplay when page is hidden to save resources
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) {
                        this.stopAutoPlay();
                    } else if (this.carousel && this.slides.length > 1 && !this.reducedMotion) {
                        this.startAutoPlay();
                    }
                });
            }

            init() {
                // Bind dot clicks
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });

                // Start auto-play unless reduced motion is preferred
                if (!this.reducedMotion) {
                    this.startAutoPlay();

                    // Pause on hover
                    this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
                    this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
                }

                // Initialize Spirit Realm particles if on slide 1
                if (this.slides[1]) {
                    this.initSpiritRealmParticles();
                }
            }

            goToSlide(index) {
                // Remove active class from current slide and dot
                this.slides[this.currentSlide].classList.remove('active');
                this.dots[this.currentSlide].classList.remove('active');

                // Update current slide index
                this.currentSlide = index;

                // Add active class to new slide and dot
                this.slides[this.currentSlide].classList.add('active');
                this.dots[this.currentSlide].classList.add('active');

                // Reset auto-play timer
                if (!this.reducedMotion) {
                    this.stopAutoPlay();
                    this.startAutoPlay();
                }

                // Trigger particle animation for spirit realm slide
                if (this.currentSlide === 1) {
                    this.startSpiritRealmAnimation();
                }
            }

            nextSlide() {
                const nextIndex = (this.currentSlide + 1) % this.totalSlides;
                this.goToSlide(nextIndex);
            }

            startAutoPlay() {
                if (this.reducedMotion) return;
                this.stopAutoPlay();
                this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
            }

            stopAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            }

            initSpiritRealmParticles() {
                const canvas = document.getElementById('spiritRealmCanvas');
                if (!canvas) return;

                const ctx = canvas.getContext('2d');

                const resizeCanvas = () => {
                    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
                    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
                    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                };

                resizeCanvas();
                window.addEventListener('resize', resizeCanvas);

                // Static reduced-motion fallback
                if (window.prefersReducedMotion) {
                    const drawStatic = () => {
                        const centerX = canvas.offsetWidth / 2;
                        const centerY = canvas.offsetHeight / 2;
                        const radius = Math.max(canvas.offsetWidth, canvas.offsetHeight) / 2;
                        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
                        gradient.addColorStop(0, 'rgba(0, 224, 255, 0.08)');
                        gradient.addColorStop(0.5, 'rgba(144, 147, 255, 0.04)');
                        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                    };
                    drawStatic();
                    window.addEventListener('resize', drawStatic);
                    return;
                }

                let animationId;
                let particles = [];
                let isVisible = false;
                let isPageVisible = !document.hidden;

                // Create particles representing digital lives
                class Particle {
                    constructor() {
                        this.reset();
                    }

                    reset() {
                        const centerX = canvas.offsetWidth / 2;
                        const centerY = canvas.offsetHeight / 2;

                        // Start from edges
                        const angle = Math.random() * Math.PI * 2;
                        const distance = Math.max(canvas.offsetWidth, canvas.offsetHeight);
                        this.x = centerX + Math.cos(angle) * distance;
                        this.y = centerY + Math.sin(angle) * distance;

                        // Target position (toward center with some spread)
                        this.targetX = centerX + (Math.random() - 0.5) * 400;
                        this.targetY = centerY + (Math.random() - 0.5) * 300;

                        this.size = Math.random() * 2 + 0.5;
                        this.speedX = (this.targetX - this.x) / (200 + Math.random() * 200);
                        this.speedY = (this.targetY - this.y) / (200 + Math.random() * 200);
                        this.opacity = 0;
                        this.targetOpacity = Math.random() * 0.8 + 0.2;

                        // Color: cyan to gold gradient
                        const colors = [
                            'rgba(0, 224, 255,',
                            'rgba(212, 175, 55,',
                            'rgba(144, 147, 255,'
                        ];
                        this.color = colors[Math.floor(Math.random() * colors.length)];
                    }

                    update() {
                        // Move toward target
                        this.x += this.speedX;
                        this.y += this.speedY;

                        // Fade in
                        if (this.opacity < this.targetOpacity) {
                            this.opacity += 0.005;
                        }

                        // Check if reached target area
                        const distToTarget = Math.sqrt(
                            Math.pow(this.x - this.targetX, 2) +
                            Math.pow(this.y - this.targetY, 2)
                        );

                        if (distToTarget < 50) {
                            // Slow down and float
                            this.speedX *= 0.98;
                            this.speedY *= 0.98;

                            // Add subtle floating motion
                            this.x += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3;
                            this.y += Math.cos(Date.now() * 0.001 + this.y * 0.01) * 0.3;
                        }
                    }

                    draw() {
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fillStyle = `${this.color} ${this.opacity})`;
                        ctx.fill();

                        // Add glow effect
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                        ctx.fillStyle = `${this.color} ${this.opacity * 0.15})`;
                        ctx.fill();
                    }
                }

                // Initialize particles
                const createParticleBurst = () => {
                    particles = [];
                    for (let i = 0; i < 150; i++) {
                        setTimeout(() => {
                            particles.push(new Particle());
                        }, i * 20); // Staggered creation
                    }
                };

                const animate = () => {
                    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

                    // Draw connecting lines between nearby particles
                    ctx.strokeStyle = 'rgba(0, 224, 255, 0.08)';
                    ctx.lineWidth = 0.5;

                    for (let i = 0; i < particles.length; i++) {
                        particles[i].update();
                        particles[i].draw();

                        // Draw connections
                        for (let j = i + 1; j < particles.length; j++) {
                            const dx = particles[i].x - particles[j].x;
                            const dy = particles[i].y - particles[j].y;
                            const dist = Math.sqrt(dx * dx + dy * dy);

                            if (dist < 80) {
                                ctx.beginPath();
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                                ctx.globalAlpha = (1 - dist / 80) * 0.15;
                                ctx.stroke();
                                ctx.globalAlpha = 1;
                            }
                        }
                    }

                    if (isVisible && isPageVisible) {
                        animationId = requestAnimationFrame(animate);
                    } else {
                        animationId = null;
                    }
                };

                // Store methods for external control
                this.spiritRealmAnimate = animate;
                this.spiritRealmCreateParticles = createParticleBurst;
                this.particlesActive = false;

                // Observe visibility to pause when offscreen
                const observer = new IntersectionObserver((entries) => {
                    isVisible = entries[0].isIntersecting;
                    if (isVisible && isPageVisible && !animationId) {
                        animate();
                    }
                }, { threshold: 0 });
                observer.observe(canvas);

                document.addEventListener('visibilitychange', () => {
                    isPageVisible = !document.hidden;
                    if (isVisible && isPageVisible && !animationId) {
                        animate();
                    }
                });

                // Start animation loop but don't create particles yet
                animate();
            }

            startSpiritRealmAnimation() {
                if (!this.particlesActive && this.spiritRealmCreateParticles) {
                    this.spiritRealmCreateParticles();
                    this.particlesActive = true;
                }
            }
        }

        // Initialize carousel when DOM is ready
        let heroCarousel;
        document.addEventListener('DOMContentLoaded', () => {
            heroCarousel = new HeroCarousel();

            // Initialize all Spirit Realm animations
            initSpiritRealmAnimations();
            updateNavigationSections();

            // Handle scroll target from hash URL (e.g., index.html#vessels)
            function handleHashScroll() {
                const hash = window.location.hash;
                console.log('Current hash:', hash);
                
                if (hash) {
                    const targetId = hash.substring(1); // 移除 # 符号
                    console.log('Target ID from hash:', targetId);
                    
                    const targetElement = document.getElementById(targetId);
                    console.log('Target element found:', targetElement);
                    
                    if (targetElement) {
                        // 等待页面完全加载后滚动
                        setTimeout(() => {
                            const navHeight = 80;
                            const elementPosition = targetElement.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                            
                            console.log('Scrolling to position:', offsetPosition);

                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        }, 300); // 增加延迟确保页面完全渲染
                    }
                }
            }

            // 页面加载时检查哈希
            handleHashScroll();
            
            // 历史导航时也检查哈希（比如用户点击后退按钮）
            window.addEventListener('hashchange', handleHashScroll);
        });

        // ============================================
        // SPIRIT REALM - COMPLETE ANIMATION SYSTEM
        // ============================================

        function initSpiritRealmAnimations() {
            initDualHelixAnimation();
        }

        // 1. Dual Helix Animation (Transition Section)
        function initDualHelixAnimation() {
            const canvas = document.getElementById('sriDualHelix');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let animationId;
            let isVisible = false;
            let isPageVisible = !document.hidden;

            const resize = () => {
                canvas.width = canvas.offsetWidth * window.devicePixelRatio;
                canvas.height = canvas.offsetHeight * window.devicePixelRatio;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            };

            resize();
            window.addEventListener('resize', resize);

            // Static reduced-motion fallback
            if (window.prefersReducedMotion) {
                const centerX = canvas.offsetWidth / 2;
                const radiusBase = 60;
                ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
                for (let i = 0; i < 80; i++) {
                    const y = (i / 80) * canvas.offsetHeight;
                    const angle = (i / 80) * Math.PI * 4;
                    const radius = radiusBase + (i % 2 === 0 ? 20 : 0);
                    const x1 = centerX + Math.cos(angle) * radius;
                    const x2 = centerX + Math.cos(angle + Math.PI) * radius;

                    ctx.beginPath();
                    ctx.arc(x1, y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(0, 224, 255, 0.5)';
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(x2, y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
                    ctx.fill();

                    ctx.beginPath();
                    ctx.moveTo(x1, y);
                    ctx.lineTo(x2, y);
                    ctx.strokeStyle = 'rgba(212, 175, 55, 0.05)';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
                return;
            }

            const particles1 = [];
            const particles2 = [];
            const numParticles = 80;

            for (let i = 0; i < numParticles; i++) {
                particles1.push({
                    angle: (i / numParticles) * Math.PI * 4,
                    radius: 60 + Math.random() * 40,
                    speed: 0.008 + Math.random() * 0.004,
                    y: (i / numParticles) * canvas.offsetHeight,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.6 + 0.4
                });

                particles2.push({
                    angle: (i / numParticles) * Math.PI * 4 + Math.PI,
                    radius: 60 + Math.random() * 40,
                    speed: 0.008 + Math.random() * 0.004,
                    y: (i / numParticles) * canvas.offsetHeight,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.6 + 0.4
                });
            }

            const renderFrame = () => {
                ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

                const centerX = canvas.offsetWidth / 2;

                // Draw helix 1
                particles1.forEach((p, i) => {
                    p.angle += p.speed;
                    const x = centerX + Math.cos(p.angle) * p.radius;

                    ctx.beginPath();
                    ctx.arc(x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 224, 255, ${p.opacity})`;
                    ctx.fill();

                    // Connection to helix 2
                    if (particles2[i]) {
                        const p2 = particles2[i];
                        const x2 = centerX + Math.cos(p2.angle) * p2.radius;

                        ctx.beginPath();
                        ctx.moveTo(x, p.y);
                        ctx.lineTo(x2, p2.y);
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });

                // Draw helix 2
                particles2.forEach(p => {
                    p.angle += p.speed;
                    const x = centerX + Math.cos(p.angle) * p.radius;

                    ctx.beginPath();
                    ctx.arc(x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
                    ctx.fill();
                });
            };

            const startAnimation = () => {
                if (animationId) return;
                const loop = () => {
                    if (!isVisible || !isPageVisible) {
                        animationId = null;
                        return;
                    }
                    renderFrame();
                    animationId = requestAnimationFrame(loop);
                };
                loop();
            };

            const stopAnimation = () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                isVisible = entries[0].isIntersecting;
                if (isVisible && isPageVisible) {
                    startAnimation();
                } else {
                    stopAnimation();
                }
            }, { threshold: 0 });
            observer.observe(canvas);

            document.addEventListener('visibilitychange', () => {
                isPageVisible = !document.hidden;
                if (isVisible && isPageVisible) {
                    startAnimation();
                } else {
                    stopAnimation();
                }
            });

            // Initial start if already visible
            if (isPageVisible) {
                isVisible = true;
                startAnimation();
            }
        }

        // Update Navigation Sections List
        function updateNavigationSections() {
            // Navigation links now point to external pages or sections
        }
        
        // Navigation Scroll Effect
        function handleNavScroll() {
            if (typeof window.refreshSiteNavigation === 'function') {
                window.refreshSiteNavigation();
                return;
            }
            const nav = document.querySelector('nav');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 16);
        }
        
        // Event Listeners
        window.addEventListener('scroll', () => {
            handleScrollReveal();
            handleParallax();
            handleNavScroll();
        });
        
        // Set hero section height to match window height
        function setHeroHeight() {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.height = window.innerHeight + 'px';
            }
        }

        // Scroll to top of page only if no hash is present
        function scrollToTopIfNoHash() {
            if (!window.location.hash) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }

        // Scroll to next section when arrow is clicked
        function scrollToNextSection() {
            const nextSection = document.querySelector('.main-content');
            if (nextSection) {
                const navHeight = 80;
                const elementPosition = nextSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize on load
        window.addEventListener('load', () => {
            setHeroHeight();
            
            // Call again after a short delay to ensure all elements are rendered
            setTimeout(() => {
                scrollToTopIfNoHash();
                setHeroHeight();
            }, 100);
            
            // Call again after another delay to handle any late-loading elements
            setTimeout(() => {
                scrollToTopIfNoHash();
                setHeroHeight();
            }, 500);
            
            createParticles();
            handleScrollReveal();
            handleNavScroll();
        });

        // Update hero height on window resize
        window.addEventListener('resize', () => {
            setHeroHeight();
            handleNavScroll();
        });

        // Update hero height when scrollbar appears/disappears
        window.addEventListener('scroll', setHeroHeight);
        // APK Download Handler
        const apkLink = document.getElementById('apk-download-link');
        if (apkLink) {
            const apkStatus = document.getElementById('apk-download-status');
            const getStorage = () => {
                try { return window.localStorage; } catch (error) { return null; }
            };
            const getDownloadText = (key, fallback) => {
                const currentLang = document.documentElement.lang || 'en';
                const translations = window.translations || {};
                return (translations[currentLang] || translations.en || {})[key] || fallback;
            };
            const setDownloadStatus = (message = '', state = '') => {
                if (!apkStatus) return;
                apkStatus.textContent = message;
                apkStatus.dataset.state = state;
            };
            const setDownloadBusy = (busy) => {
                apkLink.setAttribute('aria-busy', String(busy));
                apkLink.classList.toggle('is-loading', busy);
            };
            const fetchApkUrl = async () => {
                const apiUrl = 'https://oms.deepsire.com/tencent/getStsApkCredential';
                const controller = new AbortController();
                const timeout = window.setTimeout(() => controller.abort(), 15000);
                try {
                    const formData = new URLSearchParams();
                    formData.append('serviceType', 0);
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: formData,
                        signal: controller.signal
                    });
                    if (!response.ok) throw new Error(`API request failed: ${response.status}`);
                    const data = await response.json();
                    if (data && data.code === 0 && data.data && data.data.url) {
                        const { url, expirationTimestamp } = data.data;
                        const storage = getStorage();
                        if (storage) {
                            storage.setItem('apkUrl', url);
                            storage.setItem('apkExpiration', expirationTimestamp);
                        }
                        return url;
                    } else {
                        throw new Error('Invalid API response format.');
                    }
                } catch (error) {
                    console.error('Failed to fetch APK URL:', error);
                    return null;
                } finally {
                    window.clearTimeout(timeout);
                }
            };

            apkLink.addEventListener('click', async (e) => {
                e.preventDefault();
                
                if (apkLink.getAttribute('aria-busy') === 'true') return;
                const kicker = apkLink.querySelector('small');
                const span = apkLink.querySelector('span');
                const originalText = span ? span.textContent : 'Download';
                const originalKicker = kicker ? kicker.textContent : 'Direct APK';
                const storage = getStorage();
                
                const cachedUrl = storage ? storage.getItem('apkUrl') : null;
                const cachedExpiration = storage ? storage.getItem('apkExpiration') : null;
                const isExpired = !cachedExpiration || (Date.now() + 5000) >= parseInt(cachedExpiration, 10);
                
                let downloadUrl = cachedUrl;

                if (isExpired || !downloadUrl) {
                    if (kicker) kicker.textContent = getDownloadText('apk_download_kicker', 'Direct APK');
                    if (span) span.textContent = getDownloadText('apk_download_loading', 'Preparing secure link…');
                    setDownloadStatus(getDownloadText('apk_download_loading', 'Preparing secure link…'));
                    setDownloadBusy(true);
                    downloadUrl = await fetchApkUrl();
                    setDownloadBusy(false);
                    if (!downloadUrl) {
                        const errorMessage = getDownloadText('apk_download_error', 'Could not prepare the download. Please try again.');
                        if (span) span.textContent = getDownloadText('apk_download_label', 'Download');
                        setDownloadStatus(errorMessage, 'error');
                        window.setTimeout(() => {
                            if (kicker) kicker.textContent = originalKicker;
                            if (span) span.textContent = originalText;
                            setDownloadStatus();
                        }, 4500);
                        return;
                    }
                }
                
                if (kicker) kicker.textContent = originalKicker;
                if (span) span.textContent = originalText;
                setDownloadStatus();
                window.location.assign(downloadUrl);
            });
        }

        // Canvas 2D Gallery Implementation
        function initCanvasGallery() {
            console.log('Initializing Canvas 2D Gallery...');

            const container = document.getElementById('circular-gallery');
            if (!container) return;

            const canvas = document.createElement('canvas');
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const desktopImagePaths = [
                'image/product/10.1-inch photo frame.jpg',
                'image/product/15.6-inch digital cloud photo frame.jpg',
                'image/product/21.5-inch digital cloud photo frame.jpg',
                'image/product/BCL.jpg',
                'image/product/GEENA1.jpg',
                'image/product/JJC010.jpg',
                'image/product/M-108.jpg',
                'image/product/M-201.jpg',
                'image/product/M-218.jpg',
                'image/product/SR09.jpg',
                'image/product/Sea.jpg'
            ];
            const mobileImagePaths = Array.from({ length: 11 }, (_, index) => `image/product/mobile/${String(index + 1).padStart(2, '0')}.webp`);
            const imagePaths = window.matchMedia('(max-width: 768px)').matches ? mobileImagePaths : desktopImagePaths;

            const images = [];
            let loadedCount = 0;
            let scrollX = 0;
            let targetScrollX = 0;
            let isDragging = false;
            let startX = 0;
            let startScrollX = 0;
            let isPaused = false;
            let isPageVisible = !document.hidden;
            let animationId = null;

            // Load images
            imagePaths.forEach((path, index) => {
                const img = new Image();
                img.decoding = 'async';
                img.onload = () => {
                    loadedCount++;
                    console.log('Image loaded:', path);
                    if (loadedCount === imagePaths.length) {
                        console.log('All images loaded, starting gallery...');
                        startAnimation();
                    }
                };
                img.onerror = () => {
                    console.error('Failed to load image:', path);
                    loadedCount++;
                    if (loadedCount === imagePaths.length) {
                        startAnimation();
                    }
                };
                img.src = path;
                images.push(img);
            });

            function resize() {
                const rect = container.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            }

            function drawRoundRect(ctx, x, y, width, height, radius) {
                ctx.beginPath();
                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + width - radius, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                ctx.lineTo(x + width, y + height - radius);
                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                ctx.lineTo(x + radius, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
                ctx.closePath();
            }

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const itemWidth = 350;
                const itemHeight = 400;
                const gap = 40;
                const totalWidth = (itemWidth + gap) * images.length;
                const centerY = canvas.height / 2;

                // Apply curved effect
                const bend = 0.8;
                const H = canvas.width / 2;

                for (let loop = 0; loop < 3; loop++) {
                    images.forEach((img, i) => {
                        if (!img.complete || !img.naturalWidth || !img.naturalHeight) return;

                        let x = i * (itemWidth + gap) - scrollX + loop * totalWidth;
                        x -= (itemWidth + gap) * images.length;

                        if (x + itemWidth < -100 || x > canvas.width + 100) return;

                        const centerX = x + itemWidth / 2;
                        const relX = centerX - canvas.width / 2;
                        const effectiveX = Math.min(Math.abs(relX), H);

                        let yOffset = 0;
                        let rotation = 0;

                        if (bend !== 0) {
                            const B_abs = Math.abs(bend) * 100;
                            const R = (H * H + B_abs * B_abs) / (2 * B_abs);
                            const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
                            yOffset = bend > 0 ? -arc : arc;
                            rotation = Math.sign(relX) * Math.asin(effectiveX / R) * 0.3;
                        }

                        ctx.save();
                        ctx.translate(centerX, centerY + yOffset);
                        ctx.rotate(rotation);

                        // Draw shadow
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                        ctx.shadowBlur = 20;
                        ctx.shadowOffsetY = 10;

                        // Draw rounded rect clip
                        drawRoundRect(ctx, -itemWidth / 2, -itemHeight / 2, itemWidth, itemHeight, 12);
                        ctx.fillStyle = '#0a0a0a';
                        ctx.fill();

                        ctx.clip();

                        // Draw image
                        const scale = Math.min(itemWidth / img.width, itemHeight / img.height) * 0.9;
                        const drawWidth = img.width * scale;
                        const drawHeight = img.height * scale;
                        ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);

                        ctx.restore();
                    });
                }
            }

            function animate() {
                if (!isPaused && !isDragging && isPageVisible && !window.prefersReducedMotion) {
                    targetScrollX += 1;
                }

                scrollX += (targetScrollX - scrollX) * 0.1;

                const totalWidth = (350 + 40) * images.length;
                if (scrollX > totalWidth) {
                    scrollX -= totalWidth;
                    targetScrollX -= totalWidth;
                }

                draw();
                animationId = requestAnimationFrame(animate);
            }

            function startAnimation() {
                resize();
                animate();
            }

            // Event listeners
            window.addEventListener('resize', resize);

            document.addEventListener('visibilitychange', () => {
                isPageVisible = !document.hidden;
            });

            canvas.addEventListener('mouseenter', () => {
                isPaused = true;
            });

            canvas.addEventListener('mouseleave', () => {
                isPaused = false;
            });

            canvas.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
                startScrollX = targetScrollX;
                canvas.style.cursor = 'grabbing';
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const dx = startX - e.clientX;
                targetScrollX = startScrollX + dx * 0.5;
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
                canvas.style.cursor = 'grab';
            });

            canvas.addEventListener('wheel', (e) => {
                e.preventDefault();
                targetScrollX += e.deltaY * 0.3;
            });

            // Touch events
            canvas.addEventListener('touchstart', (e) => {
                isDragging = true;
                startX = e.touches[0].clientX;
                startScrollX = targetScrollX;
            });

            window.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const dx = startX - e.touches[0].clientX;
                targetScrollX = startScrollX + dx * 0.5;
            });

            window.addEventListener('touchend', () => {
                isDragging = false;
            });

            canvas.style.cursor = 'grab';
            console.log('Canvas 2D Gallery initialized');
        }

        window.addEventListener('load', initCanvasGallery);
