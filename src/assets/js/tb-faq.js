/* TechBrot · tb-faq.js — FAQ accordion (design-system .faq component).
 * One panel open at a time; panels stay in the DOM (grid-rows animation,
 * crawlable when closed); reduced-motion handled by the motion tokens.
 * Keyboard: triggers are real <button>s — Enter/Space native; Escape
 * closes the open panel and returns focus to its trigger. */
(function () {
  'use strict';
  if (window.__tbFaqInit) return;
  window.__tbFaqInit = true;

  var lists = document.querySelectorAll('.faq__list');
  if (!lists.length) return;

  lists.forEach(function (list) {
    var triggers = list.querySelectorAll('.faq__trigger');

    function setOpen(trigger, open) {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', String(open));
      if (panel) panel.setAttribute('data-open', String(open));
    }

    triggers.forEach(function (t) {
      t.addEventListener('click', function () {
        var isOpen = t.getAttribute('aria-expanded') === 'true';
        triggers.forEach(function (other) { setOpen(other, false); });
        if (!isOpen) setOpen(t, true);
      });
    });

    list.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Escape') return;
      var open = list.querySelector('.faq__trigger[aria-expanded="true"]');
      if (open) {
        setOpen(open, false);
        open.focus();
      }
    });
  });
})();
