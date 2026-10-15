(function () {
  'use strict';

  const videos = Array.from(document.querySelectorAll('[data-product-video]'));
  if (!videos.length) return;

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const constrainedNetwork = Boolean(
    connection && (connection.saveData || /(^|-)2g$/.test(connection.effectiveType || ''))
  );
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canAutoplay = !constrainedNetwork && !reducedMotion;
  let hlsLibraryPromise;

  function loadHlsLibrary() {
    if (window.Hls) return Promise.resolve(window.Hls);
    if (hlsLibraryPromise) return hlsLibraryPromise;

    hlsLibraryPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL('static/hls.min.js', document.baseURI).href;
      script.async = true;
      script.onload = () => resolve(window.Hls);
      script.onerror = () => reject(new Error('Unable to load the adaptive video player.'));
      document.head.appendChild(script);
    });

    return hlsLibraryPromise;
  }

  function playWhenReady(video) {
    if (!canAutoplay || video.dataset.autoplay !== 'true' || !video.dataset.inView) return;
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => {});
  }

  function useFallback(video) {
    const fallback = video.dataset.fallback;
    if (!fallback || video.dataset.usingFallback === 'true') return;

    if (video._hls) {
      video._hls.destroy();
      video._hls = null;
    }

    video.dataset.usingFallback = 'true';
    video.src = fallback;
    video.load();
    playWhenReady(video);
  }

  function attachHls(video, source) {
    loadHlsLibrary()
      .then((Hls) => {
        if (!Hls || !Hls.isSupported()) {
          useFallback(video);
          return;
        }

        const hls = new Hls({
          startLevel: -1,
          autoStartLoad: !constrainedNetwork,
          capLevelToPlayerSize: true,
          maxBufferLength: 16,
          maxMaxBufferLength: 30,
          backBufferLength: 8,
          enableWorker: true,
          lowLatencyMode: false
        });

        video._hls = hls;
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => playWhenReady(video));
        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) useFallback(video);
        });
      })
      .catch(() => useFallback(video));
  }

  function loadVideo(video) {
    if (video.dataset.loaded === 'true') return;
    video.dataset.loaded = 'true';
    video.setAttribute('aria-busy', 'true');

    const hlsSource = video.dataset.hls;
    const canUseNativeHls = video.canPlayType('application/vnd.apple.mpegurl');
    const isLocalPreview = window.location.protocol === 'file:';

    if (hlsSource && !isLocalPreview && canUseNativeHls) {
      video.src = hlsSource;
      video.load();
      playWhenReady(video);
    } else if (hlsSource && !isLocalPreview && window.MediaSource) {
      attachHls(video, hlsSource);
    } else {
      useFallback(video);
    }
  }

  videos.forEach((video) => {
    video.addEventListener('play', () => {
      if (video._hls) video._hls.startLoad();
    });
    video.addEventListener('loadeddata', () => {
      video.removeAttribute('aria-busy');
      playWhenReady(video);
    });
    video.addEventListener('error', () => useFallback(video));
  });

  if ('IntersectionObserver' in window) {
    const loadObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '240px 0px' });

    const playbackObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.dataset.inView = 'true';
          playWhenReady(video);
        } else {
          delete video.dataset.inView;
          video.pause();
        }
      });
    }, { threshold: 0.15 });

    videos.forEach((video) => {
      loadObserver.observe(video);
      playbackObserver.observe(video);
    });
  } else {
    videos.forEach((video) => {
      video.dataset.inView = 'true';
      loadVideo(video);
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach((video) => video.pause());
  });
})();
