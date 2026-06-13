/* TechBrot · tb-nav.js — site chrome behavior, NEW SKIN hooks
 * (changeover round 10). BEHAVIOR CONTRACT UNCHANGED per the handoff:
 * aria-expanded toggles, Escape/outside close, focus returns to the
 * opener, drawer scroll lock. Selector hooks re-pointed at the
 * 03-chrome.SKIN vocabulary (nav__trigger/nav__dropdown[data-open],
 * drawer/drawer__trigger/drawer__panel[data-open], nav__hamburger)
 * + the is-scrolled header state the new CSS animates. */
(function () {
  'use strict';
  if (window.__tbNavInit) return;
  window.__tbNavInit = true;

  /* ── Desktop dropdown menus ── */
  var toggles = Array.prototype.slice.call(
    document.querySelectorAll('.nav__trigger'));

  function closeAllMenus(except) {
    toggles.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var menu = document.getElementById(t.getAttribute('aria-controls'));
      if (menu) menu.setAttribute('data-open', 'false');
    });
  }

  toggles.forEach(function (t) {
    t.addEventListener('click', function () {
      var menu = document.getElementById(t.getAttribute('aria-controls'));
      if (!menu) return;
      var open = t.getAttribute('aria-expanded') === 'true';
      closeAllMenus(t);
      t.setAttribute('aria-expanded', String(!open));
      menu.setAttribute('data-open', String(!open));
    });
  });

  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.site-nav')) closeAllMenus();
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    var openToggle = toggles.filter(function (t) {
      return t.getAttribute('aria-expanded') === 'true';
    })[0];
    if (openToggle) {
      closeAllMenus();
      openToggle.focus();
    }
  });

  /* ── Mobile drawer ── */
  var drawer = document.getElementById('site-drawer');
  var openBtn = document.querySelector('.nav__hamburger');
  var closeBtn = drawer && drawer.querySelector('[data-action="close-drawer"]');

  function drawerOpen() {
    return drawer && drawer.getAttribute('data-open') === 'true';
  }

  function setDrawer(open) {
    if (!drawer || !openBtn) return;
    drawer.setAttribute('data-open', String(open));
    openBtn.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) {
      (closeBtn || drawer).focus();
    } else {
      openBtn.focus();
    }
  }

  if (openBtn && drawer) {
    openBtn.addEventListener('click', function () { setDrawer(!drawerOpen()); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && drawerOpen()) setDrawer(false);
    });

    /* drawer accordions */
    drawer.querySelectorAll('.drawer__trigger').forEach(function (t) {
      t.addEventListener('click', function () {
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        var open = t.getAttribute('aria-expanded') === 'true';
        t.setAttribute('aria-expanded', String(!open));
        panel.setAttribute('data-open', String(!open));
      });
    });
  }

  /* ── Header scroll state (height compresses per 03-chrome) ── */
  var header = document.getElementById('site-header');
  if (header) {
    var scrolled = false;
    window.addEventListener('scroll', function () {
      var now = window.scrollY > 24;
      if (now !== scrolled) {
        scrolled = now;
        header.classList.toggle('is-scrolled', now);
      }
    }, { passive: true });
  }
})();
