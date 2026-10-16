/* ==========================================================================
   共享 JavaScript - 微圈 Soul 产品页（v2 "记忆星河"）
   --------------------------------------------------------------------------
   消费者（2026-10-16 核查）：仅被以下 4 个页面加载
     - sight-soul.html / touch-soul.html / pleasure-soul.html / scent-soul.html
   可自由演进；不被其他页面引用。

   保留的原始钩子（全部兼容）：
     .reveal（IntersectionObserver → .active）
     .header（滚动 >50px → .scrolled）
     .feature-card（--mx / --my 鼠标跟随光斑）
     .hamburger / .nav-links（移动端菜单；新增 Esc 关闭）
     .lang-btn[data-lang] + 全局 pageTranslations（中英切换；applyTranslations
       选择器映射保持不变，模板沿用原类名）
     initMobileCardInteraction（原内联于 pleasure/scent 页，移入此处统一维护）

   新增（全部 transform/opacity only；pointer:fine + 非 reduced-motion 才启用）：
     html.js 门控（无 JS 时 .reveal 不隐藏——wow-as-layer-not-gate）
     body.loaded（hero 灵魂字 line-mask 入场）
     .soul-progress（滚动进度，短名单 #3 wayfinding）
     .magnetic（磁吸 CTA，research §1.6）
     .hover-preview（feature 悬停影像揭示 no-WebGL tier，research §1.7）
     .hero-char-wrap --char-y（hero 视差，research §1.2 克制版）
     body.scrolled-past（滚动提示淡出）
   ========================================================================== */
(function() {
    'use strict';

    /* JS 生效标记：CSS 侧 .reveal 隐藏仅在 html.js 下成立 */
    document.documentElement.classList.add('js');

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(pointer: fine)').matches;
    var canHover = window.matchMedia('(hover: hover)').matches;

    /* ---------- 1. 滚动显现（原始钩子，保留） ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(function(el) { observer.observe(el); });
    } else {
        revealEls.forEach(function(el) { el.classList.add('active'); });
    }

    /* ---------- 2. 导航栏滚动态 + 进度条 + 滚动提示（原始钩子扩展） ---------- */
    var header = document.querySelector('.header');
    var progressBar = document.querySelector('.soul-progress span');
    var ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function() {
            var y = window.scrollY || window.pageYOffset;
            if (header) header.classList.toggle('scrolled', y > 50);
            document.body.classList.toggle('scrolled-past', y > window.innerHeight * 0.55);
            if (progressBar) {
                var max = document.documentElement.scrollHeight - window.innerHeight;
                progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0).toFixed(4) + ')';
            }
            /* hero 灵魂字视差：小幅差速，仅装饰层（research §1.2） */
            if (!reduceMotion && heroCharWrap && y < window.innerHeight * 1.25) {
                heroCharWrap.style.setProperty('--char-y', (y * 0.12).toFixed(1) + 'px');
            }
            ticking = false;
        });
    }
    var heroCharWrap = document.querySelector('.hero-char-wrap');
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* hero 入场：首帧绘制后加 .loaded，触发灵魂字 line-mask 揭示 */
    window.addEventListener('load', function() {
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                document.body.classList.add('loaded');
            });
        });
    });
    /* load 极慢时的兜底：2.5s 必亮（research §1.4 上限原则） */
    setTimeout(function() { document.body.classList.add('loaded'); }, 2500);

    /* ---------- 3. Feature 卡片鼠标跟随光斑（原始钩子，保留） ---------- */
    document.querySelectorAll('.feature-card').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100).toFixed(2) + '%');
            card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100).toFixed(2) + '%');
        });
    });

    /* ---------- 4. 磁吸 CTA（research §1.6；仅细指针 + 非 reduced-motion） ---------- */
    if (finePointer && !reduceMotion) {
        document.querySelectorAll('.magnetic').forEach(function(el) {
            var raf = null, x = 0, y = 0, tx = 0, ty = 0;
            function loop() {
                x += (tx - x) * 0.18;
                y += (ty - y) * 0.18;
                el.style.setProperty('--mag-x', x.toFixed(2) + 'px');
                el.style.setProperty('--mag-y', y.toFixed(2) + 'px');
                if (Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05) {
                    raf = requestAnimationFrame(loop);
                } else {
                    el.style.setProperty('--mag-x', '0px');
                    el.style.setProperty('--mag-y', '0px');
                    raf = null;
                }
            }
            function kick() { if (!raf) raf = requestAnimationFrame(loop); }
            el.addEventListener('mousemove', function(e) {
                var r = el.getBoundingClientRect();
                tx = (e.clientX - (r.left + r.width / 2)) * 0.28;
                ty = (e.clientY - (r.top + r.height / 2)) * 0.28;
                kick();
            });
            el.addEventListener('mouseleave', function() { tx = 0; ty = 0; kick(); });
        });
    }

    /* ---------- 5. Feature 悬停影像揭示（no-WebGL tier，research §1.7） ----------
       触屏降级：CSS 侧 .hover-preview 直接 display:none，内容不受影响。 */
    var preview = document.querySelector('.hover-preview');
    if (preview && finePointer && canHover && !reduceMotion) {
        var px = 0, py = 0, cx = 0, cy = 0, active = false, paf = null;
        function follow() {
            cx += (px - cx) * 0.14;
            cy += (py - cy) * 0.14;
            preview.style.transform =
                'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px) translate(-50%,-118%)' +
                (preview.classList.contains('on') ? ' scale(1)' : ' scale(0.92)');
            if (active || Math.abs(px - cx) > 0.5 || Math.abs(py - cy) > 0.5) {
                paf = requestAnimationFrame(follow);
            } else {
                paf = null;
            }
        }
        function poke() { if (!paf) paf = requestAnimationFrame(follow); }
        document.querySelectorAll('.features-grid').forEach(function(grid) {
            grid.addEventListener('mousemove', function(e) {
                px = e.clientX; py = e.clientY; poke();
            });
            grid.querySelectorAll('.feature-card').forEach(function(card) {
                card.addEventListener('mouseenter', function() {
                    active = true;
                    grid.classList.add('previewing');
                    preview.classList.add('on');
                    poke();
                });
                card.addEventListener('mouseleave', function() {
                    active = false;
                    grid.classList.remove('previewing');
                    preview.classList.remove('on');
                });
            });
        });
    }

    /* ---------- 6. 汉堡菜单（原始钩子，保留；新增 Esc 关闭） ---------- */
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.addEventListener('click', function() { navLinks.classList.remove('active'); });
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') navLinks.classList.remove('active');
        });
    }

    /* ---------- 7. 移动端产品卡点按展开（原内联函数，移入统一维护） ---------- */
    function initMobileCardInteraction() {
        var isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile) return;
        var cards = document.querySelectorAll('.product-card');
        cards.forEach(function(card) {
            var specsArea = card.querySelector('.specs-area');
            if (!specsArea) return;
            card.addEventListener('click', function(e) {
                if (e.target.closest('a') || e.target.closest('button')) return;
                var isExpanded = specsArea.classList.contains('mobile-expanded');
                cards.forEach(function(other) {
                    var o = other.querySelector('.specs-area');
                    if (o) o.classList.remove('mobile-expanded');
                });
                if (!isExpanded) specsArea.classList.add('mobile-expanded');
            });
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.product-card')) {
                cards.forEach(function(card) {
                    var o = card.querySelector('.specs-area');
                    if (o) o.classList.remove('mobile-expanded');
                });
            }
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
        initMobileCardInteraction();
        autoApplyLang();
    });

    /* ---------- 8. 语言检测与切换（原始钩子，保留；autoApply 延后到 DOM 就绪，
       修复原"shared.js 先于 pageTranslations 执行导致首屏不翻译"时序问题） ---------- */
    function detectBrowserLang() {
        try {
            var saved = window.localStorage.getItem('preferred_lang');
            if (saved && ['zh', 'en'].indexOf(saved) !== -1) return saved;
        } catch (err) { /* 无痕模式等：忽略 */ }
        var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (lang.indexOf('zh') === 0) return 'zh';
        return 'en';
    }

    function autoApplyLang() {
        var lang = detectBrowserLang();
        var btn = document.querySelector('.lang-btn[data-lang="' + lang + '"]');
        if (btn && typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
            document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            applyTranslations(pageTranslations[lang]);
        }
    }

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var lang = this.getAttribute('data-lang');
            document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            try { window.localStorage.setItem('preferred_lang', lang); } catch (err) { /* 忽略 */ }
            if (typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
                applyTranslations(pageTranslations[lang]);
            }
        });
    });

    function applyTranslations(t) {
        var selectors = {
            '.hero-badge-text': t.hero && t.hero.badge,
            /* 注：.hero-content h1（灵魂字）是图形品牌标识，不随语言切换翻译，
               如"微圈"字标一样保持原字形；data-char 幽灵层与之恒定一致。 */
            '.hero-subtitle': t.hero && t.hero.subtitle,
            '.hero-buttons .btn-primary': t.hero && t.hero.btn1,
            '.hero-buttons .btn-secondary': t.hero && t.hero.btn2,
            /* 注：.philosophy-content h2 用 setAccentedText 单独处理（保留 <em> 重音） */
            '#features .section-header h2': t.features && t.features.title,
            '#features .section-header p': t.features && t.features.subtitle,
            '#stories .section-header h2': t.stories && t.stories.title,
            '#stories .section-header p': t.stories && t.stories.subtitle,
            '#specs .section-header h2': t.specs && t.specs.title,
            '#specs .section-header p': t.specs && t.specs.subtitle,
        };
        Object.keys(selectors).forEach(function(sel) {
            var val = selectors[sel];
            if (val) document.querySelectorAll(sel).forEach(function(el) { el.textContent = val; });
        });

        var phiP = document.querySelectorAll('.philosophy-content p');
        if (t.philosophy && t.philosophy.p1 && phiP[0]) phiP[0].textContent = t.philosophy.p1;
        if (t.philosophy && t.philosophy.p2 && phiP[1]) phiP[1].textContent = t.philosophy.p2;
        if (t.philosophy && t.philosophy.p3 && phiP[2]) phiP[2].textContent = t.philosophy.p3;

        /* Philosophy h2：保留模板里的 <em> 重音（data-accent 短语命中才包裹） */
        var phiH2 = document.querySelector('.philosophy-content h2');
        if (t.philosophy && t.philosophy.title && phiH2) {
            var accent = phiH2.getAttribute('data-accent') || '';
            var title = t.philosophy.title;
            phiH2.textContent = title;
            if (accent && title.indexOf(accent) !== -1) {
                var parts = title.split(accent);
                phiH2.textContent = '';
                parts.forEach(function(part, i) {
                    phiH2.appendChild(document.createTextNode(part));
                    if (i < parts.length - 1) {
                        var em = document.createElement('em');
                        em.textContent = accent;
                        phiH2.appendChild(em);
                    }
                });
            }
        }

        var featureCards = document.querySelectorAll('#features .feature-card');
        ['card1', 'card2', 'card3', 'card4'].forEach(function(key, i) {
            if (t.features && t.features[key] && featureCards[i]) {
                var h3 = featureCards[i].querySelector('h3');
                var p = featureCards[i].querySelector('p');
                if (h3) h3.textContent = t.features[key].title;
                if (p) p.textContent = t.features[key].desc;
            }
        });

        var storyCards = document.querySelectorAll('#stories .story-card');
        ['story1', 'story2'].forEach(function(key, i) {
            if (t.stories && t.stories[key] && storyCards[i]) {
                var h3 = storyCards[i].querySelector('h3');
                var p = storyCards[i].querySelector('p');
                /* h3 保留 .story-icon 图标 span：翻译文案自带 emoji，开头时剥离避免重复 */
                if (h3) {
                    var iconEl = h3.querySelector('.story-icon');
                    var title = t.stories[key].title;
                    if (iconEl) {
                        while (iconEl.nextSibling) iconEl.nextSibling.remove();
                        var clean = title.replace(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F?|\u2764\uFE0F?)\s*/u, '');
                        h3.appendChild(document.createTextNode(clean));
                    } else {
                        h3.textContent = title;
                    }
                }
                if (p) p.textContent = t.stories[key].desc;
            }
        });

        var specItems = document.querySelectorAll('#specs .spec-item');
        ['spec1', 'spec2', 'spec3', 'spec4'].forEach(function(key, i) {
            if (t.specs && t.specs[key] && specItems[i]) {
                var val = specItems[i].querySelector('.spec-value');
                var label = specItems[i].querySelector('.spec-label');
                var detail = specItems[i].querySelector('.spec-detail');
                if (val) val.textContent = t.specs[key].value;
                if (label) label.textContent = t.specs[key].label;
                if (detail) detail.textContent = t.specs[key].detail;
            }
        });

        var sectionData = t.cta || t.productSelection || {};
        var ctaH2 = document.querySelector('.cta h2, .product-selection .section-header h2');
        var ctaP = document.querySelector('.cta p, .product-selection .section-header p');
        if (sectionData.title && ctaH2) ctaH2.textContent = sectionData.title;
        if (sectionData.subtitle && ctaP) ctaP.textContent = sectionData.subtitle;
        if (sectionData.btn) {
            document.querySelectorAll('.cta .btn-primary, .product-selection .btn-primary')
                .forEach(function(el) { el.textContent = sectionData.btn; });
        }

        var productOptions = document.querySelectorAll('.cta .product-option, .product-selection .product-option');
        ['option1', 'option2', 'option3'].forEach(function(key, i) {
            if (sectionData[key] && productOptions[i]) {
                var tag = productOptions[i].querySelector('.tag, .desc');
                if (tag) tag.textContent = sectionData[key];
            }
            var sloganKey = key + 'Slogan';
            if (sectionData[sloganKey] && productOptions[i]) {
                var slogan = productOptions[i].querySelector('.slogan');
                if (slogan) slogan.textContent = sectionData[sloganKey];
            }
            var fiKey = 'featureItems' + (i + 1);
            if (sectionData[fiKey] && productOptions[i]) {
                var items = productOptions[i].querySelectorAll('.feature-item');
                sectionData[fiKey].forEach(function(txt, j) { if (items[j]) items[j].textContent = txt; });
            }
        });

        var productCards = document.querySelectorAll('.product-card');
        ['card1', 'card2', 'card3'].forEach(function(key, i) {
            if (t.productSelection && t.productSelection[key] && productCards[i]) {
                var card = productCards[i];
                var d = t.productSelection[key];
                var brand = card.querySelector('.product-brand');
                var name = card.querySelector('.product-name');
                var cn = card.querySelector('.product-cn');
                var slogan = card.querySelector('.product-slogan');
                if (brand && d.brand) brand.textContent = d.brand;
                if (name && d.name) name.textContent = d.name;
                if (cn && d.cn) cn.textContent = d.cn;
                if (slogan && d.slogan) slogan.textContent = d.slogan;
                if (d.specs) {
                    var specEls = card.querySelectorAll('.product-spec-item');
                    d.specs.forEach(function(s, j) { if (specEls[j]) specEls[j].textContent = s; });
                }
            }
        });

        var ctaLinks = document.querySelectorAll('.cta-links a, .product-selection .cta-links a');
        if (sectionData.links) {
            var linkKeys = Object.keys(sectionData.links).map(function(k) { return sectionData.links[k]; });
            ctaLinks.forEach(function(el, i) { if (linkKeys[i]) el.textContent = linkKeys[i]; });
        }

        if (t.mobileTapHint) {
            document.querySelectorAll('.mobile-tap-hint').forEach(function(el) { el.textContent = t.mobileTapHint; });
        }

        if (t.hero && t.hero.ageNotice) {
            var ageNotice = document.querySelector('.age-notice');
            if (ageNotice) {
                var svg = ageNotice.querySelector('svg');
                ageNotice.textContent = t.hero.ageNotice;
                if (svg) ageNotice.prepend(svg);
            }
        }

        var navItems = document.querySelectorAll('.nav-links a');
        if (t.nav && t.nav.home && navItems[0]) navItems[0].textContent = t.nav.home;
        if (t.nav && t.nav.sight && navItems[1]) navItems[1].textContent = t.nav.sight;
        if (t.nav && t.nav.touch && navItems[2]) navItems[2].textContent = t.nav.touch;
        if (t.nav && t.nav.scent && navItems[3]) navItems[3].textContent = t.nav.scent;
        if (t.nav && t.nav.pleasure && navItems[4]) navItems[4].textContent = t.nav.pleasure;
    }
})();
