export function initGA(measurementId) {
  if (!measurementId) return;

  // Load gtag.js
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  // Bootstrap dataLayer + gtag()
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId);
}

// Optional helpers for later (not required right now)
export function trackPageview(path) {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', path ? { page_path: path } : {});
}

export function trackEvent(name, params = {}) {
  if (!window.gtag) return;
  window.gtag('event', name, params);
}

