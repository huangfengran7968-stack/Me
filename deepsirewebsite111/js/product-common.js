(function () {
    'use strict';

    window.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const langLabels = {
        en: 'EN', zh: '中文', ja: '日本語', ko: '한국어',
        fr: 'FR', de: 'DE', es: 'ES', pt: 'PT', ru: 'RU', ar: 'AR'
    };

    /**
     * Initialize a language selector dropdown with keyboard accessibility.
     *
     * @param {Object} translations - Map of lang code -> translation dictionary.
     * @param {Object} [options]
     * @param {Function} [options.onBeforeTranslate] - Called before default translation.
     *        Receives (element, value, key). Return false to skip default handling.
     * @param {Function} [options.onAfterTranslate] - Called after a language change.
     *        Receives (lang).
     */
    window.initLanguageSelector = function initLanguageSelector(translations, options) {
        options = options || {};

        const langSelector = document.getElementById('langSelector');
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        const langCurrent = document.getElementById('langCurrent');

        if (!langSelector || !langBtn || !langDropdown) return;

        function setLanguage(lang) {
            const t = translations[lang] || translations.en;
            if (!t) return;

            document.querySelectorAll('[data-translate-key]').forEach(function (el) {
                const key = el.getAttribute('data-translate-key');
                if (!t[key]) return;

                if (options.onBeforeTranslate && options.onBeforeTranslate(el, t[key], key) === false) {
                    return;
                }

                if (el.hasAttribute('data-translate-placeholder')) {
                    el.placeholder = t[key];
                } else {
                    el.textContent = t[key];
                }
            });

            if (langCurrent) langCurrent.textContent = langLabels[lang] || 'EN';

            langDropdown.querySelectorAll('button').forEach(function (opt) {
                const isActive = opt.dataset.lang === lang;
                opt.classList.toggle('active', isActive);
                opt.setAttribute('aria-selected', String(isActive));
            });

            localStorage.setItem('preferredLanguage', lang);
            document.documentElement.lang = lang;
            if (document.body) document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

            if (options.onAfterTranslate) options.onAfterTranslate(lang);
        }

        function setLangOpen(isOpen) {
            langSelector.classList.toggle('open', isOpen);
            langBtn.setAttribute('aria-expanded', String(isOpen));
            if (isOpen) {
                const activeOption = langDropdown.querySelector('button.active') || langDropdown.querySelector('button');
                if (activeOption) setTimeout(function () { activeOption.focus(); }, 0);
            } else if (document.activeElement && langDropdown.contains(document.activeElement)) {
                langBtn.focus();
            }
        }

        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            setLangOpen(!langSelector.classList.contains('open'));
        });

        langBtn.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const langOptions = Array.from(langDropdown.querySelectorAll('button'));
                const currentIndex = langOptions.findIndex(function (opt) { return opt.classList.contains('active'); });
                let nextIndex = Math.max(currentIndex, 0);
                if (!langSelector.classList.contains('open')) {
                    setLangOpen(true);
                }
                if (e.key === 'ArrowDown') nextIndex = (nextIndex + 1) % langOptions.length;
                else if (e.key === 'ArrowUp') nextIndex = (nextIndex - 1 + langOptions.length) % langOptions.length;
                else if (e.key === 'Enter' || e.key === ' ') {
                    if (currentIndex >= 0) setLanguage(langOptions[currentIndex].dataset.lang);
                    setLangOpen(false);
                    return;
                }
                langOptions.forEach(function (opt, i) {
                    const isActive = i === nextIndex;
                    opt.classList.toggle('active', isActive);
                    opt.setAttribute('aria-selected', String(isActive));
                });
                langOptions[nextIndex].focus();
            }
        });

        langDropdown.addEventListener('click', function (e) {
            const btn = e.target.closest('button[data-lang]');
            if (btn) {
                setLanguage(btn.dataset.lang);
                setLangOpen(false);
            }
        });

        langDropdown.addEventListener('keydown', function (e) {
            const langOptions = Array.from(langDropdown.querySelectorAll('button'));
            const currentIndex = langOptions.indexOf(document.activeElement);
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                langOptions[(currentIndex + 1) % langOptions.length].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                langOptions[(currentIndex - 1 + langOptions.length) % langOptions.length].focus();
            } else if (e.key === 'Home') {
                e.preventDefault();
                langOptions[0].focus();
            } else if (e.key === 'End') {
                e.preventDefault();
                langOptions[langOptions.length - 1].focus();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                setLangOpen(false);
            } else if (e.key === 'Tab') {
                setLangOpen(false);
            }
        });

        document.addEventListener('click', function (e) {
            if (!langSelector.contains(e.target)) setLangOpen(false);
        });

        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        if (savedLang && translations[savedLang]) setLanguage(savedLang);
    };

    /**
     * Stable hero product title.
     *
     * Product names stay invariant across locales. The effect changes weight only;
     * layout, font size, and character positions never depend on pointer movement.
     */
    window.initProductHeroTitle = function initProductHeroTitle(container, options) {
        if (!container) return null;

        options = options || {};
        const title = container.querySelector('.text-pressure-title');
        if (!title) return null;

        const text = options.text || container.getAttribute('data-text') || title.textContent.trim();
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let resizeObserver = null;
        let animationFrame = null;

        title.textContent = '';
        Array.from(text).forEach(function (character) {
            const span = document.createElement('span');
            span.textContent = character === ' ' ? '\u00A0' : character;
            title.appendChild(span);
        });

        const spans = Array.from(title.querySelectorAll('span'));

        function fitTitle() {
            title.style.fontSize = '';
            const availableWidth = Math.max(0, container.clientWidth - 8);
            const naturalWidth = title.scrollWidth;
            if (!availableWidth || !naturalWidth || naturalWidth <= availableWidth) return;

            const baseSize = parseFloat(window.getComputedStyle(title).fontSize);
            const fittedSize = Math.max(32, baseSize * (availableWidth / naturalWidth));
            title.style.fontSize = fittedSize + 'px';
        }

        function resetWeight() {
            spans.forEach(function (span) {
                span.style.fontVariationSettings = "'wght' 300, 'wdth' 100, 'ital' 0";
            });
        }

        function updateWeight(clientX) {
            if (reducedMotion) return;
            if (animationFrame) cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(function () {
                const containerRect = container.getBoundingClientRect();
                const pointerX = clientX - containerRect.left;
                const influenceRadius = Math.max(1, containerRect.width * 0.4);

                spans.forEach(function (span) {
                    const rect = span.getBoundingClientRect();
                    const characterCenter = rect.left + rect.width / 2 - containerRect.left;
                    const proximity = Math.max(0, 1 - Math.abs(pointerX - characterCenter) / influenceRadius);
                    const weight = Math.round(300 + proximity * 600);
                    span.style.fontVariationSettings = "'wght' " + weight + ", 'wdth' 100, 'ital' 0";
                });
            });
        }

        if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            container.addEventListener('pointermove', function (event) { updateWeight(event.clientX); });
            container.addEventListener('pointerleave', resetWeight);
        }

        if ('ResizeObserver' in window) {
            resizeObserver = new ResizeObserver(fitTitle);
            resizeObserver.observe(container);
        } else {
            window.addEventListener('resize', fitTitle);
        }

        resetWeight();
        fitTitle();
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitle);

        return {
            text: text,
            spans: spans,
            handleResize: fitTitle,
            destroy: function () {
                if (resizeObserver) resizeObserver.disconnect();
                if (animationFrame) cancelAnimationFrame(animationFrame);
                window.removeEventListener('resize', fitTitle);
            }
        };
    };
})();
