/* TechBrot · tb-select.js — select-driven tools (1099 deadline, QuickBooks
 * plan selector). Deterministic, client-only (no network). Dispatches on
 * data-select-formula on [data-calc]; reads <select>s by data-calc-sel;
 * writes results to [data-out="<key>"]. Reserved outputs → CLS 0.
 *
 * HONESTY: the deadline formula computes the real IRS rule (1099-NEC due
 * Jan 31 of the filing year, rolled to the next business day if Jan 31 is a
 * weekend) and always tells the user to confirm on IRS.gov. The plan selector
 * recommends a QuickBooks Online tier on FEATURE FIT only — it never quotes
 * Intuit prices (TechBrot is not Intuit), and feature gating follows the real
 * QBO tier limits (inventory/projects/classes → Plus; >5 users → Advanced). */
(function () {
  'use strict';
  if (window.__tbSelectInit) return;
  window.__tbSelectInit = true;

  var root = document.querySelector('[data-calc][data-select-formula]');
  if (!root) return;

  var formula = root.getAttribute('data-select-formula');
  var selects = root.querySelectorAll('[data-calc-sel]');

  function val(id) {
    var el = root.querySelector('[data-calc-sel="' + id + '"]');
    return el ? el.value : '';
  }
  function out(key, v) {
    var el = root.querySelector('[data-out="' + key + '"]');
    if (el) el.innerHTML = v;
  }

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  var FORMULAS = {
    deadline: function () {
      var taxYear = parseInt(val('year'), 10);
      if (isNaN(taxYear)) { out('primary', '&mdash;'); return; }
      var filingYear = taxYear + 1;
      // 1099-NEC + W-2: due Jan 31 of the filing year; roll weekend → Monday.
      var d = new Date(filingYear, 0, 31);
      var dow = d.getDay(); // 0 Sun .. 6 Sat
      var rolled = false;
      if (dow === 6) { d.setDate(d.getDate() + 2); rolled = true; }
      else if (dow === 0) { d.setDate(d.getDate() + 1); rolled = true; }
      var label = MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
      out('primary', label);
      // 1099-MISC e-file to IRS: March 31 of the filing year.
      var mar = new Date(filingYear, 2, 31);
      out('m1', MONTHS[mar.getMonth()] + ' ' + mar.getDate() + ', ' + mar.getFullYear());
      out('text',
        'For tax year ' + taxYear + ', Form 1099-NEC must be sent to recipients and filed with the IRS by ' +
        '<strong>' + label + '</strong>' +
        (rolled ? ' (January 31 falls on a weekend that year, so the deadline rolls to the next business day)' : '') +
        '. W-2 forms to employees and the SSA share the same January 31 deadline. ' +
        'Always confirm the exact current-year dates on IRS.gov &mdash; deadlines can shift for holidays, and penalties apply for late filing.');
    },
    planselect: function () {
      var users = parseInt(val('users'), 10) || 1;
      var inventory = val('inventory') === '1';
      var projects = val('projects') === '1';
      var classes = val('classes') === '1';
      var billtime = val('billtime') === '1';

      var tier, why, over25 = users > 25;
      if (users > 5) {
        tier = 'QuickBooks Online Advanced';
        why = 'You need more than five users, which only Advanced supports (up to 25).' +
          (over25 ? ' Above 25 users you may need QuickBooks Enterprise or a custom plan &mdash; we can advise.' : '') +
          ' Advanced also adds deeper reporting, custom roles, and workflow automation.';
      } else if (users > 3) {
        tier = 'QuickBooks Online Plus';
        why = 'You need four or five users, which is beyond Essentials’ three-user limit, so Plus is the floor &mdash; and it adds inventory, project profitability, and class/location tracking if you grow into them.';
      } else if (inventory || projects || classes) {
        tier = 'QuickBooks Online Plus';
        var needs = [];
        if (inventory) needs.push('inventory tracking');
        if (projects) needs.push('project/job profitability');
        if (classes) needs.push('class or location tracking');
        why = 'You need ' + needs.join(', ') + ', which ' + (needs.length > 1 ? 'are' : 'is') + ' only available on Plus (Simple Start and Essentials don’t include ' + (needs.length > 1 ? 'them' : 'it') + ').';
      } else if (users > 1 || billtime) {
        tier = 'QuickBooks Online Essentials';
        why = 'You need ' + (users > 1 ? 'multiple users' : 'billable time tracking') + ' and bill management, but not inventory or projects &mdash; Essentials covers that with up to three users.';
      } else {
        tier = 'QuickBooks Online Simple Start';
        why = 'A single user with straightforward income and expenses, no inventory, projects, or class tracking &mdash; Simple Start has what you need without paying for features you won’t use.';
      }
      out('primary', tier);
      out('text', why + ' This is a fit-based starting point, not a price comparison &mdash; Intuit sets and changes plan pricing, so check current prices at Intuit. A Certified ProAdvisor can confirm the right tier and set it up correctly.');
    },
  };

  var run = FORMULAS[formula];
  if (!run) return;
  selects.forEach(function (el) { el.addEventListener('change', run); });
  run();
})();
