// Shared hooks for the portfolio.
// Exports helpers onto window so other Babel files can use them.

const { useState, useEffect, useRef, useCallback, useMemo } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.setAttribute('data-in', 'true'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-in', 'true');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

// Tweaks state — syncs with :root data-* attrs, persists via postMessage host.
function useTweaks(initial) {
  const [tweaks, setTweaks] = useState(initial);

  // Apply to DOM whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', tweaks.theme);
    root.setAttribute('data-accent', tweaks.accent);
    root.setAttribute('data-fontpair', tweaks.fontPair);
    root.setAttribute('data-density', tweaks.density);
  }, [tweaks]);

  const update = useCallback((patch) => {
    setTweaks(prev => {
      const next = { ...prev, ...patch };
      try {
        window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
      } catch (e) {}
      return next;
    });
  }, []);

  return [tweaks, update];
}

// Tweaks panel visibility controlled by the host toolbar
function useTweaksVisible() {
  const [visible, setVisible] = useState(false);
  const listenerReady = useRef(false);

  useEffect(() => {
    const onMsg = (ev) => {
      const d = ev.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    listenerReady.current = true;
    // Announce availability only AFTER the listener is live.
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return [visible, setVisible];
}

Object.assign(window, { useReveal, useScrolled, useTweaks, useTweaksVisible });
