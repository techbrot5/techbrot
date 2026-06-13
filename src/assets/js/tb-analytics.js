/* TechBrot · tb-analytics.js — GA4 event layer, fail-closed.
 * Events fire to gtag ONLY when window.TB_ENV === 'production' (base.njk
 * loads gtag only in production builds). Everywhere else they log to the
 * console so behavior is verifiable without sending analytics. */
(function () {
  'use strict';
  if (window.__tbAnalyticsInit) return;
  window.__tbAnalyticsInit = true;

  var isProduction = window.TB_ENV === 'production';

  function track(eventName, params) {
    if (isProduction && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    } else {
      console.info('[tb-analytics:' + (window.TB_ENV || 'preview') + '] ' +
        eventName + ' (NOT sent — analytics disabled outside production)',
        params || {});
    }
  }
  window.tbTrack = track;

  /* phone_click — any tel: link or [data-tb-event="phone_click"] */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href^="tel:"]');
    if (!a) return;
    track('phone_click', {
      link_url: a.getAttribute('href'),
      page_path: window.location.pathname
    });
  });
})();
