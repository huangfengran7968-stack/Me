/* ============================================================
   DeepSire Award Motion & Interaction Layer
   BOLD v2 ("Solar Flare"): louder parallax, magnetic buttons,
   cursor-follow hero glow (fine pointers only), kinetic hero
   title settle. All motion respects prefers-reduced-motion and
   degrades on touch devices.
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var docEl = document.documentElement;
    if (!docEl.classList.contains('award')) return;

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var allowMotion = !reducedMotion && finePointer;

    // kinetic-ready flag for the hero title settle animation
    window.addEventListener('load', function () {
      docEl.classList.add('is-loaded');
    });

    /* ---------------------------------------------------------
       1. Scroll reveal
    --------------------------------------------------------- */
    var revealEls = document.querySelectorAll('.reveal');
    if (reducedMotion) {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      revealEls.forEach(function (el) {
        // auto-stagger items that opt into a reveal group
        var group = el.closest('[data-reveal-group]');
        if (group && !el.style.getPropertyValue('--reveal-delay')) {
          var siblings = Array.prototype.slice.call(group.querySelectorAll(':scope > .reveal, :scope .reveal'));
          var idx = siblings.indexOf(el);
          if (idx > 0) el.style.setProperty('--reveal-delay', Math.min(idx, 6) * 90 + 'ms');
        }
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------------------------------------------------------
       2. Scroll progress hairline + active nav link
    --------------------------------------------------------- */
    var progress = document.getElementById('award-progress');
    var navLinks = document.querySelectorAll('.award-nav-link[href^="#"], .nav-links a[href^="#"]');
    var sections = [];
    navLinks.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) sections.push({ link: a, el: s, id: a.getAttribute('href') });
    });

    function onScroll() {
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress && max > 0 && !reducedMotion) {
        progress.style.transform = 'scaleX(' + Math.min(y / max, 1) + ')';
      }
      if (navEl) navEl.classList.toggle('nav-solid', y > 24);
      // active section link
      var current = sections.length ? sections[0] : null;
      sections.forEach(function (s) {
        if (s.el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = s;
      });
      navLinks.forEach(function (a) { a.classList.toggle('active', current && a === current.link); });
    }
    var navEl = document.querySelector('nav');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { onScroll(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    onScroll();

    /* ---------------------------------------------------------
       3. Hero parallax (hero media + ghost, stronger)
    --------------------------------------------------------- */
    var heroMedia = document.querySelector('[data-hero-media]');
    var heroInner = document.querySelector('[data-hero-inner]');
    var heroGhost = document.querySelector('.hero-ghost');
    if (heroMedia && allowMotion) {
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroMedia.style.transform = 'translateY(' + y * 0.18 + 'px)';
          if (heroInner) heroInner.style.transform = 'translateY(' + y * -0.08 + 'px)';
          if (heroGhost) heroGhost.style.transform = 'translateX(-50%) rotate(-2deg) translateY(' + y * 0.3 + 'px)';
        }
      }, { passive: true });
    }

    /* ---------------------------------------------------------
       3b. Cursor-follow glow (hero only, fine pointers, motion ok)
    --------------------------------------------------------- */
    if (allowMotion) {
      var hero = document.querySelector('.hero');
      var glow = document.querySelector('[data-hero-glow]');
      if (hero && glow) {
        var glowRaf = null;
        hero.addEventListener('mousemove', function (e) {
          if (glowRaf) return;
          glowRaf = requestAnimationFrame(function () {
            var r = hero.getBoundingClientRect();
            glow.style.setProperty('--gx', (e.clientX - r.left) + 'px');
            glow.style.setProperty('--gy', (e.clientY - r.top) + 'px');
            glow.classList.add('on');
            glowRaf = null;
          });
        });
        hero.addEventListener('mouseleave', function () {
          glow.classList.remove('on');
        });
      }
    }

    /* ---------------------------------------------------------
       4. Magnetic buttons (fine pointers only)
    --------------------------------------------------------- */
    if (allowMotion) {
      document.querySelectorAll('.award-btn--primary').forEach(function (btn) {
        var strength = 0.32;
        btn.addEventListener('mousemove', function (e) {
          var r = btn.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2;
          var y = e.clientY - r.top - r.height / 2;
          btn.style.transform = 'translate(' + x * strength + 'px,' + y * strength + 'px) scale(1.03)';
        });
        btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
      });
    }

    /* ---------------------------------------------------------
       5. Dual-helix canvas (gold monochrome)
    --------------------------------------------------------- */
    (function initHelix() {
      var canvas = document.getElementById('sriDualHelix');
      if (!canvas || !canvas.getContext) return;
      var ctx = canvas.getContext('2d');
      var raf = null, particles = [], isVisible = false, pageVisible = !document.hidden;

      function resize() {
        var w = canvas.offsetWidth, h = canvas.offsetHeight;
        if (!w || !h) return;
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      resize();
      window.addEventListener('resize', resize);
      document.addEventListener('visibilitychange', function () {
        pageVisible = !document.hidden;
        if (pageVisible && isVisible) start(); else stop();
      });

      function seed() {
        particles = [];
        for (var i = 0; i < 90; i++) {
          var base = {
            angle: (i / 90) * Math.PI * 4,
            radius: 46 + Math.random() * 34,
            speed: 0.006 + Math.random() * 0.006,
            y: i / 90,
            size: Math.random() * 1.6 + 0.7,
            opacity: Math.random() * 0.55 + 0.3
          };
          particles.push(Object.assign({}, base, { phase: 0 }));
          particles.push(Object.assign({}, base, { phase: Math.PI }));
        }
      }
      seed();

      function draw(t) {
        var w = canvas.offsetWidth, h = canvas.offsetHeight;
        if (!w || !h) return;
        ctx.clearRect(0, 0, w, h);
        var cx = w / 2;
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          var a = p.angle + t * p.speed + p.phase;
          var x = cx + Math.cos(a) * p.radius;
          var y = p.y * h;
          var pulse = 0.5 + 0.5 * Math.sin(t * 0.002 + p.angle * 2);
          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 161, 31,' + (p.opacity * (0.55 + 0.45 * pulse)).toFixed(3) + ')';
          ctx.fill();
        }
        // faint rung lines
        ctx.strokeStyle = 'rgba(255, 161, 31, 0.07)';
        ctx.lineWidth = 0.6;
        for (var j = 0; j < 24; j++) {
          var yy = (j / 24) * h;
          var a1 = (j / 24) * Math.PI * 4 + t * 0.008;
          var a2 = a1 + Math.PI;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a1) * 58, yy);
          ctx.lineTo(cx + Math.cos(a2) * 58, yy);
          ctx.stroke();
        }
      }

      function start() {
        if (raf) return;
        if (reducedMotion) {
          draw(0); // single static frame
          return;
        }
        (function loop(t) { draw(t || 0); raf = requestAnimationFrame(loop); })();
      }
      function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          isVisible = entries[0].isIntersecting;
          if (isVisible && pageVisible) start(); else stop();
        }, { threshold: 0.1 }).observe(canvas);
      } else {
        start();
      }
    })();

    /* ---------------------------------------------------------
       6. Ecosystem marquee gallery (drag + gentle auto-drift)
    --------------------------------------------------------- */
    (function initGallery() {
      var mount = document.getElementById('circular-gallery');
      if (!mount) return;
      mount.classList.add('award-gallery');
      mount.setAttribute('tabindex', '0'); // keyboard-operable rail
      var track = document.createElement('div');
      track.className = 'award-gallery__track';
      mount.appendChild(track);

      var paths = [
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
      var loaded = 0;
      paths.forEach(function (path) {
        var fig = document.createElement('figure');
        fig.className = 'award-gallery__item';
        var img = new Image();
        img.decoding = 'async';
        img.alt = '';
        img.draggable = false;
        img.onload = function () {
          fig.appendChild(img);
          track.appendChild(fig);
          loaded++;
          if (loaded === paths.length) track.classList.add('is-settled');
        };
        img.onerror = function () { loaded++; };
        img.src = path;
      });

      // keyboard support: arrows scroll the rail
      mount.addEventListener('keydown', function (e) {
        var step = mount.clientWidth * 0.6;
        if (e.key === 'ArrowRight') { mount.scrollLeft += step; e.preventDefault(); }
        else if (e.key === 'ArrowLeft') { mount.scrollLeft -= step; e.preventDefault(); }
      });

      // drag-to-scroll
      var isDown = false, startX = 0, startLeft = 0;
      mount.addEventListener('pointerdown', function (e) {
        isDown = true; startX = e.clientX; startLeft = mount.scrollLeft;
        mount.setPointerCapture(e.pointerId);
        mount.classList.add('is-dragging');
      });
      mount.addEventListener('pointermove', function (e) {
        if (!isDown) return;
        mount.scrollLeft = startLeft - (e.clientX - startX);
      });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (evt) {
        mount.addEventListener(evt, function () {
          isDown = false;
          mount.classList.remove('is-dragging');
        });
      });

      // gentle auto-drift (fine pointers, motion allowed)
      if (allowMotion) {
        var raf = null, dir = 1, pageVisible = !document.hidden;
        document.addEventListener('visibilitychange', function () {
          pageVisible = !document.hidden;
        });
        function drift() {
          if (!isDown && pageVisible && track.children.length) {
            if (mount.scrollLeft + mount.clientWidth >= mount.scrollWidth - 2) dir = -1;
            else if (mount.scrollLeft <= 0) dir = 1;
            mount.scrollLeft += dir * 0.35;
          }
          raf = requestAnimationFrame(drift);
        }
        var galIO = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting && !raf) drift();
          else if (!entries[0].isIntersecting && raf) { cancelAnimationFrame(raf); raf = null; }
        }, { threshold: 0.1 });
        galIO.observe(mount);
      }
    })();

    /* ---------------------------------------------------------
       7. APK download flow (mirrors legacy behavior)
    --------------------------------------------------------- */
    (function initApk() {
      var link = document.getElementById('apk-download-link');
      if (!link) return;
      var status = document.getElementById('apk-download-status');
      var API = 'https://oms.deepsire.com/tencent/getStsApkCredential';
      function setStatus(msg) { if (status) status.textContent = msg; }
      function storage() {
        try {
          var t = window.localStorage;
          t.setItem('__t', '1'); t.removeItem('__t');
          return t;
        } catch (e) { return null; }
      }
      function fetchApkUrl() {
        var ctrl = new AbortController();
        var timer = window.setTimeout(function () { ctrl.abort(); }, 15000);
        var body = new URLSearchParams();
        body.append('serviceType', 0);
        return fetch(API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body,
          signal: ctrl.signal
        }).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        }).then(function (data) {
          if (data && data.code === 0 && data.data && data.data.url) {
            var st = storage();
            if (st) {
              st.setItem('apkUrl', data.data.url);
              st.setItem('apkExpiration', data.data.expirationTimestamp);
            }
            return data.data.url;
          }
          throw new Error('Bad response');
        }).catch(function () { return null; })
          .finally(function () { window.clearTimeout(timer); });
      }
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (link.getAttribute('aria-busy') === 'true') return;
        link.setAttribute('aria-busy', 'true');
        link.classList.add('is-loading');
        setStatus('Preparing your download…');
        var st = storage();
        var cached = st && st.getItem('apkUrl');
        var exp = st && parseInt(st.getItem('apkExpiration') || '0', 10);
        var url = (cached && exp && Date.now() < exp) ? Promise.resolve(cached) : fetchApkUrl();
        url.then(function (downloadUrl) {
          if (downloadUrl) {
            setStatus('');
            window.location.assign(downloadUrl);
          } else {
            setStatus('The direct download is unavailable right now — please try the App Store or Google Play options.');
          }
        }).finally(function () {
          link.setAttribute('aria-busy', 'false');
          link.classList.remove('is-loading');
        });
      });
    })();

    /* ---------------------------------------------------------
       8. Lazy-load hero video (don't fight the network);
          respect reduced motion by not autoplaying
    --------------------------------------------------------- */
    var heroVideo = document.querySelector('video[data-hero-video]');
    if (heroVideo) {
      if (reducedMotion) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
      } else if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries, obs) {
          if (entries[0].isIntersecting) {
            if (heroVideo.getAttribute('preload') !== 'none') heroVideo.load();
            obs.disconnect();
          }
        }).observe(heroVideo);
      }
    }
  });
})();
