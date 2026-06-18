/* TechBrot · tb-calc.js — pricing-estimate calculator island.
 * Deterministic, client-only (no network). Reads the model from the
 * inline #calc-model JSON (the SAME object that rendered the <select>s,
 * so client logic can never drift from the server markup). Sums the
 * chosen option values, maps the total to the first band whose `upTo`
 * threshold is >= the score, and writes a RANGE — never a single number,
 * never a quote. The result area is reserved in the markup, so updating
 * it causes no layout shift (CLS 0). Honesty by construction: the band
 * ranges are slices of the published $400–$2,500+/mo pricing and nothing
 * here can produce a value outside that published range. */
(function () {
  'use strict';
  if (window.__tbCalcInit) return;
  window.__tbCalcInit = true;

  var root = document.querySelector('[data-calc]');
  if (!root) return;

  var modelEl = document.getElementById('calc-model');
  if (!modelEl) return;

  var model;
  try { model = JSON.parse(modelEl.textContent); }
  catch (e) { return; }
  if (!model || !model.bands || !model.bands.length) return;

  var inputs = root.querySelectorAll('[data-calc-input]');
  var valueEl = root.querySelector('[data-calc-value]');
  var bandEl = root.querySelector('[data-calc-band]');
  var whyEl = root.querySelector('[data-calc-why]');
  if (!valueEl) return;

  function pickBand(score) {
    for (var i = 0; i < model.bands.length; i++) {
      if (score <= model.bands[i].upTo) return model.bands[i];
    }
    return model.bands[model.bands.length - 1];
  }

  function recalc() {
    var score = 0;
    inputs.forEach(function (sel) {
      var n = parseInt(sel.value, 10);
      if (!isNaN(n)) score += n;
    });
    var band = pickBand(score);
    valueEl.innerHTML = band.display;
    if (bandEl) bandEl.textContent = band.name;
    if (whyEl) whyEl.innerHTML = band.why;
  }

  inputs.forEach(function (sel) {
    sel.addEventListener('change', recalc);
  });

  recalc();
})();
