/* TechBrot · tb-callbar.js — mobile sticky call-bar auto-hide/reveal
 * (06-additions.SKIN contract, changeover round 10). Hides on scroll
 * down, reveals on scroll up; .has-call-bar on <body> reserves the
 * space so the bar never causes layout shift (zero CLS). Loaded only
 * on pages that ship the bar (LOCATION/MOFU/BOFU per PLACEMENT-MAP). */
(function () {
  'use strict';
  var bar = document.querySelector('.call-bar');
  if (!bar) return;
  var lastY = window.scrollY;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      /* down past 120px hides; any upward intent reveals */
      if (y > lastY + 4 && y > 120) {
        bar.classList.add('call-bar--hidden');
      } else if (y < lastY - 4) {
        bar.classList.remove('call-bar--hidden');
      }
      lastY = y;
      ticking = false;
    });
  }, { passive: true });
})();
