/* ===== 共享 JavaScript - 子页通用 ===== */
(function() {
    // 滚动动画观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 导航栏滚动效果
    const header = document.querySelector('.header');
    if (header) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    header.classList.toggle('scrolled', window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Feature 卡片鼠标跟随效果
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
            card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
        });
    });

    // 汉堡菜单
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => { navLinks.classList.remove('active'); });
        });
    }

    // 浏览器语言检测
    function detectBrowserLang() {
        const saved = localStorage.getItem('preferred_lang');
        if (saved && ['zh','en'].includes(saved)) return saved;
        const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (lang.startsWith('zh')) return 'zh';
        return 'en';
    }

    // 自动应用检测到的语言
    (function autoApplyLang() {
        const lang = detectBrowserLang();
        const btn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (btn && typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTranslations(pageTranslations[lang]);
        }
    })();

    // 语言切换
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            localStorage.setItem('preferred_lang', lang);
            if (typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
                applyTranslations(pageTranslations[lang]);
            }
        });
    });

    function applyTranslations(t) {
        const selectors = {
            '.hero-badge': t.hero?.badge,
            '.hero-content h1': t.hero?.title,
            '.hero-subtitle': t.hero?.subtitle,
            '.hero-buttons .btn-primary': t.hero?.btn1,
            '.hero-buttons .btn-secondary': t.hero?.btn2,
            '.philosophy-content h2': t.philosophy?.title,
            '#features .section-header h2': t.features?.title,
            '#features .section-header p': t.features?.subtitle,
            '#stories .section-header h2': t.stories?.title,
            '#stories .section-header p': t.stories?.subtitle,
            '#specs .section-header h2': t.specs?.title,
            '#specs .section-header p': t.specs?.subtitle,
        };
        Object.entries(selectors).forEach(([sel, val]) => {
            if (val) document.querySelectorAll(sel).forEach(el => el.textContent = val);
        });

        // Philosophy 段落
        const phiP = document.querySelectorAll('.philosophy-content p');
        if (t.philosophy?.p1 && phiP[0]) phiP[0].textContent = t.philosophy.p1;
        if (t.philosophy?.p2 && phiP[1]) phiP[1].textContent = t.philosophy.p2;
        if (t.philosophy?.p3 && phiP[2]) phiP[2].textContent = t.philosophy.p3;

        // Feature 卡片
        const featureCards = document.querySelectorAll('#features .feature-card');
        ['card1','card2','card3','card4'].forEach((key, i) => {
            if (t.features?.[key] && featureCards[i]) {
                const h3 = featureCards[i].querySelector('h3');
                const p = featureCards[i].querySelector('p');
                if (h3) h3.textContent = t.features[key].title;
                if (p) p.textContent = t.features[key].desc;
            }
        });

        // Story 卡片
        const storyCards = document.querySelectorAll('#stories .story-card');
        ['story1','story2'].forEach((key, i) => {
            if (t.stories?.[key] && storyCards[i]) {
                const h3 = storyCards[i].querySelector('h3');
                const p = storyCards[i].querySelector('p');
                if (h3) h3.textContent = t.stories[key].title;
                if (p) p.textContent = t.stories[key].desc;
            }
        });

        // Spec 项目
        const specItems = document.querySelectorAll('#specs .spec-item');
        ['spec1','spec2','spec3','spec4'].forEach((key, i) => {
            if (t.specs?.[key] && specItems[i]) {
                const val = specItems[i].querySelector('.spec-value');
                const label = specItems[i].querySelector('.spec-label');
                const detail = specItems[i].querySelector('.spec-detail');
                if (val) val.textContent = t.specs[key].value;
                if (label) label.textContent = t.specs[key].label;
                if (detail) detail.textContent = t.specs[key].detail;
            }
        });

        // CTA / Product Selection
        const sectionData = t.cta || t.productSelection || {};
        const ctaH2 = document.querySelector('.cta h2, .product-selection .section-header h2');
        const ctaP = document.querySelector('.cta p, .product-selection .section-header p');
        if (sectionData.title && ctaH2) ctaH2.textContent = sectionData.title;
        if (sectionData.subtitle && ctaP) ctaP.textContent = sectionData.subtitle;
        if (sectionData.btn) {
            document.querySelectorAll('.cta .btn-primary, .product-selection .btn-primary').forEach(el => el.textContent = sectionData.btn);
        }

        // CTA 产品选项（触魂器 .product-option）
        const productOptions = document.querySelectorAll('.cta .product-option, .product-selection .product-option');
        ['option1','option2','option3'].forEach((key, i) => {
            if (sectionData[key] && productOptions[i]) {
                const tag = productOptions[i].querySelector('.tag, .desc');
                if (tag) tag.textContent = sectionData[key];
            }
            const sloganKey = key + 'Slogan';
            if (sectionData[sloganKey] && productOptions[i]) {
                const slogan = productOptions[i].querySelector('.slogan');
                if (slogan) slogan.textContent = sectionData[sloganKey];
            }
            // featureItems (触魂器产品选项内的特性列表)
            const fiKey = 'featureItems' + (i + 1);
            if (sectionData[fiKey] && productOptions[i]) {
                const items = productOptions[i].querySelectorAll('.feature-item');
                sectionData[fiKey].forEach((txt, j) => { if (items[j]) items[j].textContent = txt; });
            }
        });

        // CTA 产品卡片（嗅魂器/悦魂器 .product-card）
        const productCards = document.querySelectorAll('.product-card');
        ['card1','card2','card3'].forEach((key, i) => {
            if (t.productSelection?.[key] && productCards[i]) {
                const card = productCards[i];
                const d = t.productSelection[key];
                const brand = card.querySelector('.product-brand');
                const name = card.querySelector('.product-name');
                const cn = card.querySelector('.product-cn');
                const slogan = card.querySelector('.product-slogan');
                if (brand && d.brand) brand.textContent = d.brand;
                if (name && d.name) name.textContent = d.name;
                if (cn && d.cn) cn.textContent = d.cn;
                if (slogan && d.slogan) slogan.textContent = d.slogan;
                if (d.specs) {
                    const specItems = card.querySelectorAll('.product-spec-item');
                    d.specs.forEach((s, j) => { if (specItems[j]) specItems[j].textContent = s; });
                }
            }
        });

        // CTA 链接
        const ctaLinks = document.querySelectorAll('.cta-links a, .product-selection .cta-links a');
        if (sectionData.links) {
            const linkKeys = Object.values(sectionData.links);
            ctaLinks.forEach((el, i) => { if (linkKeys[i]) el.textContent = linkKeys[i]; });
        }

        // 移动端点击提示
        if (t.mobileTapHint) {
            document.querySelectorAll('.mobile-tap-hint').forEach(el => el.textContent = t.mobileTapHint);
        }

        // 年龄提示（悦魂器）
        if (t.hero?.ageNotice) {
            const ageNotice = document.querySelector('.age-notice');
            if (ageNotice) {
                const svg = ageNotice.querySelector('svg');
                ageNotice.textContent = t.hero.ageNotice;
                if (svg) ageNotice.prepend(svg);
            }
        }

        // 导航栏
        const navItems = document.querySelectorAll('.nav-links a');
        if (t.nav?.home && navItems[0]) navItems[0].textContent = t.nav.home;
        if (t.nav?.sight && navItems[1]) navItems[1].textContent = t.nav.sight;
        if (t.nav?.touch && navItems[2]) navItems[2].textContent = t.nav.touch;
        if (t.nav?.scent && navItems[3]) navItems[3].textContent = t.nav.scent;
        if (t.nav?.pleasure && navItems[4]) navItems[4].textContent = t.nav.pleasure;
    }
})();