/* ============================================================
   WeiQuan Award System — wq-award.js
   GSAP + ScrollTrigger + Lenis wiring, memory-constellation
   canvas, wayfinding, pinned device gallery, magnetic CTAs,
   labeled cursor, hover image-reveals, kinetic line reveals.

   Namespaced, additive, defensive: every block feature-detects
   its dependencies. No-JS / no-CDN / reduced-motion → the page
   reads perfectly as calm static content.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';
  var hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';
  var hasSplit = hasGsap && typeof window.SplitText !== 'undefined';
  var hasLenis = typeof window.Lenis !== 'undefined';

  if (hasST) gsap.registerPlugin(ScrollTrigger);
  if (hasSplit && hasST) gsap.registerPlugin(SplitText);

  /* ---------- 1. Lenis + GSAP canonical wiring ---------- */
  var lenis = null;
  // Lenis: skipped under reduced-motion and on coarse pointers (native scroll wins)
  if (hasLenis && hasGsap && !reduceMotion && finePointer) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    document.documentElement.classList.add('wq-lenis');
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  // Shared-instance hooks: other pages (e.g. lingjing.html) probe these to
  // reuse the Lenis instance instead of creating a second one.
  window.__WQ_LENIS__ = lenis;
  window.WQAward = window.WQAward || {};
  window.WQAward.lenis = lenis;
  window.WQAward.version = '1.0.0';
  window.WQAward.reduceMotion = reduceMotion;
  window.WQAward.finePointer = finePointer;

  function scrollToTarget(sel) {
    var el = document.querySelector(sel);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -84, duration: 1.4 });
    else el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  // Anchor links: route through Lenis when active (keeps anchor UX intact)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      a.addEventListener('click', function (e) {
        if (!lenis) return; // native smooth-scroll CSS handles it
        e.preventDefault();
        scrollToTarget(href);
      });
    }
  });

  // Escape closes the fullscreen overlay nav (existing toggle JS untouched)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var menu = document.querySelector('.nav-menu');
      var burger = document.querySelector('.hamburger');
      if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
        if (burger) burger.classList.remove('active');
      }
      var modal = document.querySelector('#instructionsModal');
      if (modal) { modal.classList.remove('open'); modal.style.display = 'none'; }
    }
  });

  /* ---------- 2. Kinetic line reveals (SplitText, lines only) ---------- */
  if (hasSplit && hasST && !reduceMotion) {
    document.querySelectorAll('.wq-split').forEach(function (el) {
      var split;
      try {
        split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'wq-line' });
      } catch (err) { return; }
      gsap.from(split.lines, {
        yPercent: 115,
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.1, // tight; per-line, never per-char on CJK
        scrollTrigger: { trigger: el, start: 'top 86%', once: true }
      });
    });
  }

  /* ---------- 3. Generic reveals (JS-set initial states only) ---------- */
  if (hasGsap && hasST && !reduceMotion) {
    gsap.utils.toArray('.wq-reveal').forEach(function (el) {
      gsap.from(el, {
        y: 40,
        autoAlpha: 0,
        duration: 1.05,
        ease: 'power3.out',
        delay: parseFloat(el.dataset.wqDelay || 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });

    // hero entry choreography — plays once, after first paint
    var heroBits = document.querySelectorAll('.wq-hero [data-wq-hero]');
    if (heroBits.length) {
      gsap.from(heroBits, {
        y: 46, autoAlpha: 0, duration: 1.2, ease: 'power4.out',
        stagger: 0.09, delay: 0.15, overwrite: 'auto'
      });
    }
  }

  /* ---------- 4. Scroll progress bar + chapter wayfinding ---------- */
  var bar = document.querySelector('.wq-progress__bar');
  function paintProgress() {
    if (!bar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, (window.scrollY || 0) / max)) : 0;
    bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { paintProgress(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  if (lenis) lenis.on('scroll', onScroll);
  paintProgress();

  // chapter rail 01–08
  var chapters = Array.prototype.slice.call(document.querySelectorAll('[data-wq-chapter]'));
  var rail = document.querySelector('.wq-rail');
  if (rail && chapters.length && 'IntersectionObserver' in window) {
    chapters.forEach(function (sec) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'wq-rail__dot';
      b.setAttribute('aria-label', '前往章节 ' + sec.dataset.wqChapter + ' ' + (sec.dataset.wqLabel || ''));
      b.innerHTML = '<span class="wq-rail__label">' + (sec.dataset.wqLabel || '') +
        '</span><span class="wq-rail__num">' + sec.dataset.wqChapter +
        '</span><span class="wq-rail__tick" aria-hidden="true"></span>';
      b.addEventListener('click', function () {
        scrollToTarget('#' + sec.id);
      });
      b._sec = sec;
      rail.appendChild(b);
    });
    var dots = Array.prototype.slice.call(rail.children);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        dots.forEach(function (d) {
          d.classList.toggle('is-active', d._sec === en.target);
        });
      });
    }, { rootMargin: '-38% 0px -52% 0px', threshold: 0 });
    chapters.forEach(function (sec) { io.observe(sec); });
  }

  // hero "past" flag hides the scroll hint
  var hero = document.querySelector('.wq-hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      hero.classList.toggle('is-past', !en[0].isIntersecting && (window.scrollY || 0) > 80);
    }, { threshold: 0.35 }).observe(hero);
  }

  /* ---------- 5. Memory-constellation canvas (hero ambient) ---------- */
  (function constellation() {
    var canvas = document.getElementById('wq-constellation');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var W = 0, H = 0, dpr = 1, nodes = [], raf = 0, running = false, visible = true;
    var mouse = { x: -9999, y: -9999 };

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2); // DPR cap
      var r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      var n = W < 700 ? 46 : 118; // calmer on small screens
      nodes = [];
      for (var i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
          r: 0.8 + Math.random() * 1.9,
          gold: Math.random() < 0.07, // rare warm memory nodes
          tw: Math.random() * Math.PI * 2
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      var link = 128, t = performance.now() / 1000;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.tw += 0.02;
        if (!reduceMotion) {
          a.x += a.vx; a.y += a.vy;
          // gentle cursor repulsion — presence, not plaything
          var dx = a.x - mouse.x, dy = a.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 14400 && d2 > 1) {
            var d = Math.sqrt(d2), f = (120 - d) / 120 * 0.6;
            a.x += (dx / d) * f; a.y += (dy / d) * f;
          }
          if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20;
          if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20;
        }
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], ddx = a.x - b.x, ddy = a.y - b.y;
          var dist = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dist < link) {
            var alpha = (1 - dist / link) * 0.34;
            ctx.strokeStyle = 'rgba(6,182,212,' + alpha.toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var p = nodes[k];
        var tw = 0.45 + 0.55 * Math.abs(Math.sin(p.tw));
        ctx.fillStyle = p.gold
          ? 'rgba(212,165,116,' + (0.75 * tw).toFixed(3) + ')'
          : 'rgba(6,182,212,' + (0.8 * tw).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        if (p.r > 2.1) { // halo on larger "memory" nodes
          ctx.fillStyle = p.gold ? 'rgba(212,165,116,0.10)' : 'rgba(6,182,212,0.10)';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.4, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (!reduceMotion && running) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (running || !visible) return;
      running = true;
      if (reduceMotion) { frame(); running = false; return; } // one still frame
      raf = requestAnimationFrame(frame);
    }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

    size(); seed();
    // start only when the hero is actually on screen — text paints first
    if ('IntersectionObserver' in window && hero) {
      new IntersectionObserver(function (en) {
        visible = en[0].isIntersecting;
        if (visible) start(); else stop();
      }, { threshold: 0.02 }).observe(hero);
    } else { start(); }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else if (visible) start();
    });
    canvas.parentElement.addEventListener('mousemove', function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener('mouseleave', function () {
      mouse.x = -9999; mouse.y = -9999;
    });
    var rz; window.addEventListener('resize', function () {
      clearTimeout(rz); rz = setTimeout(function () { size(); seed(); if (reduceMotion) frame(); }, 180);
    });
  })();

  /* ---------- 6. Pinned horizontal device gallery (pointer-fine) ---------- */
  (function gallery() {
    var pin = document.querySelector('.wq-devices__pin');
    var track = document.querySelector('.wq-devices__track');
    var pct = document.querySelector('.wq-gallerymeta__pct');
    var fill = document.querySelector('.wq-gallerymeta__fill');
    if (!pin || !track) return;
    function readout(p) {
      var v = Math.round(p * 100);
      if (pct) pct.textContent = (v < 10 ? '0' : '') + v + '%';
      if (fill) fill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    }
    var canPin = hasGsap && hasST && !reduceMotion && finePointer && window.innerWidth > 900;
    if (canPin) {
      pin.classList.add('wq-devices--pinned');
      var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      gsap.to(track, {
        x: function () { return -dist(); },
        ease: 'none',
        scrollTrigger: {
          trigger: pin, start: 'top top',
          end: function () { return '+=' + dist(); },
          pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: function (self) { readout(self.progress); }
        }
      });
      readout(0);
    } else {
      // stacked / swipe fallback: progress from the track's own scroll
      readout(0);
    }
  })();

  /* ---------- 7. Magnetic CTAs (pointer-fine, motion-ok) ----------
     Hero download buttons keep the original 3D-tilt behavior, so the
     magnetic layer skips .btn-ios/.btn-android/.btn-secondary to avoid
     two writers fighting over `transform`. */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.wq-btn:not(.btn-ios):not(.btn-android):not(.btn-secondary)').forEach(function (btn) {
      var strength = 26;
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        var tx = (x / r.width) * strength, ty = (y / r.height) * strength;
        if (hasGsap) gsap.to(btn, { x: tx, y: ty, duration: 0.35, ease: 'power3.out', overwrite: 'auto' });
        else { btn.style.transform = 'translate(' + tx + 'px,' + ty + 'px)'; }
      });
      btn.addEventListener('mouseleave', function () {
        if (hasGsap) gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.45)', overwrite: 'auto' });
        else btn.style.transform = '';
      });
    });
  }

  /* ---------- 8. Labeled custom cursor (pointer-fine only) ---------- */
  if (finePointer && !reduceMotion) {
    var cur = document.querySelector('.wq-cursor');
    if (cur) {
      var ring = cur.querySelector('.wq-cursor__ring');
      var dot = cur.querySelector('.wq-cursor__dot');
      var label = cur.querySelector('.wq-cursor__label');
      var rx = hasGsap ? gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3' }) : null;
      var ry = hasGsap ? gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3' }) : null;
      function move(x, y) {
        if (rx) { rx(x); ry(y); }
        else { ring.style.transform = 'translate(' + x + 'px,' + y + 'px)'; }
        dot.style.transform = 'translate(' + x + 'px,' + y + 'px)'; // near-native latency
        label.style.transform = 'translate(' + (x - 0) + 'px,' + y + 'px) translate(-50%,-50%)';
      }
      document.addEventListener('mousemove', function (e) { move(e.clientX, e.clientY); }, { passive: true });
      document.addEventListener('mousedown', function () { cur.classList.add('is-down'); });
      document.addEventListener('mouseup', function () { cur.classList.remove('is-down'); });
      // labeled states via [data-cursor]
      document.querySelectorAll('[data-cursor]').forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          label.textContent = el.getAttribute('data-cursor');
          cur.classList.add('is-label');
        });
        el.addEventListener('mouseleave', function () { cur.classList.remove('is-label'); });
      });
    }
  }

  /* ---------- 9. Hover image-reveal on scenario rows (no-WebGL tier) ---------- */
  if (finePointer && !reduceMotion) {
    var card = document.querySelector('.wq-hovercard');
    if (card) {
      var glyph = card.querySelector('.wq-hovercard__glyph');
      var cap = card.querySelector('.wq-hovercard__cap');
      var cx = 0, cy = 0, tx = 0, ty = 0, shown = false, cardRaf = 0;
      function loop() {
        cx += (tx - cx) * 0.14; cy += (ty - cy) * 0.14;
        card.style.left = cx + 'px'; card.style.top = cy + 'px';
        if (shown) cardRaf = requestAnimationFrame(loop);
      }
      document.querySelectorAll('.wq-row[data-wq-preview]').forEach(function (row) {
        row.addEventListener('mouseenter', function (e) {
          var d = row.getAttribute('data-wq-preview').split('|');
          card.style.background = d[0] || '';
          if (glyph) glyph.textContent = d[1] || '';
          if (cap) cap.textContent = (d[2] || '').toUpperCase();
          shown = true;
          tx = e.clientX + 28; ty = e.clientY - 100;
          cx = tx; cy = ty;
          card.style.opacity = '1';
          card.style.transform = 'scale(1) rotate(-3deg)';
          cardRaf = requestAnimationFrame(loop);
        });
        row.addEventListener('mousemove', function (e) {
          tx = e.clientX + 28; ty = e.clientY - 100;
        });
        row.addEventListener('mouseleave', function () {
          shown = false; cancelAnimationFrame(cardRaf);
          card.style.opacity = '0';
          card.style.transform = 'scale(.85) rotate(-3deg)';
        });
      });
    }
  }

  /* ---------- 10. Keep ScrollTrigger honest on resize/font swap ---------- */
  window.addEventListener('load', function () {
    if (hasST) ScrollTrigger.refresh();
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { if (hasST) ScrollTrigger.refresh(); });
  }
})();
