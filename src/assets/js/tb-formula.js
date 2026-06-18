/* TechBrot · tb-formula.js — arithmetic calculator island (break-even,
 * cash runway, budget worksheet). Deterministic, client-only (no network).
 * It computes ONLY on the user's own numbers — no firm pricing, no advice,
 * no fabricated outputs — and every page frames the result as "a model of
 * your inputs, talk to us to act on it." Outputs are reserved in the markup
 * with "—" placeholders, so updating them causes no layout shift (CLS 0).
 * The formula is chosen by data-formula on [data-calc]; inputs are read by
 * data-calc-num; results are written to [data-out="<key>"]. Edge cases
 * (zero/negative denominators) are handled honestly, never with a fake number. */
(function () {
  'use strict';
  if (window.__tbFormulaInit) return;
  window.__tbFormulaInit = true;

  var root = document.querySelector('[data-calc][data-formula]');
  if (!root) return;

  var formula = root.getAttribute('data-formula');
  var inputs = root.querySelectorAll('[data-calc-num]');

  function num(id) {
    var el = root.querySelector('[data-calc-num="' + id + '"]');
    if (!el) return NaN;
    var v = parseFloat(String(el.value).replace(/[^0-9.\-]/g, ''));
    return v;
  }
  function has(v) { return !isNaN(v); }
  function money(v) {
    var sign = v < 0 ? '−' : '';
    return sign + '$' + Math.abs(Math.round(v)).toLocaleString('en-US');
  }
  function out(key, val) {
    var el = root.querySelector('[data-out="' + key + '"]');
    if (el) el.innerHTML = val;
  }

  var FORMULAS = {
    breakeven: function () {
      var fixed = num('fixed'), price = num('price'), varcost = num('varcost');
      if (!has(fixed) || !has(price) || !has(varcost)) {
        out('primary', '&mdash;'); out('m1', '&mdash;'); out('m2', '&mdash;');
        out('text', 'Enter your monthly fixed costs, price per sale, and variable cost per sale above.');
        return;
      }
      var cm = price - varcost;
      out('m1', money(cm));
      if (cm <= 0) {
        out('primary', 'No break-even');
        out('m2', '&mdash;');
        out('text', 'At these numbers each sale loses money (price does not cover its variable cost), so there is no break-even volume. Raising price or cutting variable cost per sale is the first lever — a fractional CFO conversation can help model it.');
        return;
      }
      var units = Math.ceil(fixed / cm);
      var revenue = units * price;
      out('primary', units.toLocaleString('en-US') + ' sales / mo');
      out('m2', money(revenue));
      out('text', 'You break even at about ' + units.toLocaleString('en-US') + ' sales a month (' + money(revenue) + ' in revenue), where contribution margin covers your fixed costs. This is a model of your inputs, not advice — book a call to pressure-test the assumptions.');
    },
    runway: function () {
      var cash = num('cash'), burn = num('burn');
      if (!has(cash) || !has(burn)) {
        out('primary', '&mdash;'); out('text', 'Enter your cash on hand and average monthly net burn above.');
        return;
      }
      if (burn <= 0) {
        out('primary', 'No runway limit');
        out('text', 'At these numbers you are cash-flow neutral or positive (net burn is zero or below), so cash is not running down. If that flips, runway = cash ÷ monthly burn. A fractional CFO can help build the forecast.');
        return;
      }
      var months = cash / burn;
      out('primary', months.toFixed(1) + ' months');
      out('text', 'At about ' + money(burn) + '/month of net burn, ' + money(cash) + ' of cash lasts roughly ' + months.toFixed(1) + ' months. This is a model of your inputs, not advice — a fractional CFO conversation can turn it into a real forecast and a plan.');
    },
    budget: function () {
      var income = num('income'), cogs = num('cogs'), fixed = num('fixed'), other = num('other');
      if (!has(income) || !has(cogs) || !has(fixed) || !has(other)) {
        out('primary', '&mdash;'); out('m1', '&mdash;'); out('m2', '&mdash;');
        out('text', 'Enter your monthly revenue and the three expense lines above.');
        return;
      }
      var expenses = cogs + fixed + other;
      var net = income - expenses;
      out('m1', money(expenses));
      out('primary', (net < 0 ? '' : '+') + money(net) + ' / mo');
      if (income > 0) {
        var margin = (net / income) * 100;
        out('m2', margin.toFixed(1) + '%');
      } else {
        out('m2', '&mdash;');
      }
      out('text', net < 0
        ? 'At these numbers you run a monthly deficit of ' + money(Math.abs(net)) + ' — expenses exceed revenue. This is a model of your inputs, not advice; book a call to work through where to close the gap.'
        : 'At these numbers you keep ' + money(net) + ' a month after expenses. This is a model of your inputs, not advice; a fractional CFO conversation turns a budget into a plan.');
    },
  };

  var run = FORMULAS[formula];
  if (!run) return;

  inputs.forEach(function (el) {
    el.addEventListener('input', run);
  });
  run();
})();
