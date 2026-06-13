/* ============================================================================
   TechBrot · contact-intents.js — ENGINE for contact intent routing
   ----------------------------------------------------------------------------
   Reads URL params on the contact page and:
     - swaps headline + lede (from base intent in TB_INTENT_MAP)
     - swaps the submit CTA copy (intent.cta, optional)
     - ENRICHES the message with state / city / industry via interpolation
       (so ONE base intent serves all states/cities/industries)
     - pre-checks the matching service checkbox
     - pre-selects the industry <select> if a known industry param is passed
     - writes the FULL V2 metadata model into hidden fields:
         intent · state · city · industry · service · source_page ·
         source_type · funnel_stage · urgency · operator_candidate
     - captures referrer (existing behavior, preserved)

   DEPENDS ON: window.TB_INTENT_MAP and window.TB_LOOKUPS (intent-map.js).
   Loads only on the contact page. Fully backward-compatible: pages that pass
   only ?intent= behave exactly as before. Unknown intents fall back to the
   default headline/lede with NO error.
   ============================================================================ */

(function initContactIntentEngine() {
  'use strict';

  /* HARD GUARD: run once per page, even if this file is included twice. */
  if (window.__tbContactIntentInit) return;
  window.__tbContactIntentInit = true;

  /* Run only on the contact page */
  if (document.documentElement.getAttribute('data-page') !== 'contact' &&
      !document.querySelector('[data-page="contact"]')) {
    return;
  }

  var MAP = window.TB_INTENT_MAP || {};
  var LOOK = window.TB_LOOKUPS || { state: {}, city: {}, industry: {} };

  var params = new URLSearchParams(window.location.search);

  /* ---- Read the full V2 metadata model from the URL --------------------- */
  var meta = {
    intent:             param('intent'),
    state:              param('state'),
    city:               param('city'),
    industry:           param('industry'),
    service:            param('service'),
    source_page:        param('source_page') || document.referrer || '',
    source_type:        param('source_type'),
    funnel_stage:       param('funnel_stage'),
    urgency:            param('urgency'),
    operator_candidate: param('operator_candidate')
  };

  function param(name) {
    var v = params.get(name);
    return v ? v.trim() : '';
  }

  /* ---- Display-name resolvers (with safe fallbacks) --------------------- */
  function stateName(slug) {
    if (!slug) return '';
    return LOOK.state[slug] || titleize(slug);
  }
  function cityName(slug) {
    if (!slug) return '';
    return LOOK.city[slug] || titleize(slug);
  }
  function industryName(slug) {
    if (!slug) return '';
    return LOOK.industry[slug] || titleize(slug);
  }
  function titleize(slug) {
    return String(slug).replace(/-/g, ' ').replace(/\b\w/g, function (c) {
      return c.toUpperCase();
    });
  }

  /* ---- Build a location phrase, e.g. "in Buffalo, New York" ------------- */
  function locationPhrase() {
    var c = cityName(meta.city);
    var s = stateName(meta.state);
    if (c && s) return 'in ' + c + ', ' + s;
    if (c)      return 'in ' + c;
    if (s)      return 'in ' + s;
    return '';
  }

  /* =========================================================================
     ALWAYS write the hidden metadata fields — even with no intent — so every
     submission carries whatever context the originating page provided.
     ========================================================================= */
  writeHidden('intent', meta.intent);
  writeHidden('state', meta.state);
  writeHidden('city', meta.city);
  writeHidden('industry', meta.industry);
  writeHidden('service', meta.service);
  writeHidden('source_page', meta.source_page);
  writeHidden('source_type', meta.source_type);
  writeHidden('funnel_stage', meta.funnel_stage);
  writeHidden('urgency', meta.urgency);
  writeHidden('operator_candidate', meta.operator_candidate);

  function writeHidden(key, value) {
    var el = document.querySelector('[data-meta="' + key + '"]');
    if (el) { el.value = value || ''; }
  }

  /* Preserve existing referrer tracker (legacy hook, still supported) */
  var legacyRef = document.querySelector('[data-referrer-tracker]');
  if (legacyRef && !legacyRef.value && document.referrer) {
    legacyRef.value = document.referrer;
  }
  var legacyIntent = document.querySelector('[data-intent-tracker]');
  if (legacyIntent && meta.intent) {
    legacyIntent.value = meta.intent;
  }

  /* =========================================================================
     CONTENT SWAP — only if a known base intent is present.
     ========================================================================= */
  /* Resolve the content config for this intent.
     Priority:
       1. Exact intent key in TB_INTENT_MAP (e.g. 'monthly', 'qbo-advisory').
       2. State-pillar fallback: if the intent slug is a known STATE
          (TB_LOOKUPS.state) OR ends in '-advisory' over a known state, use a
          generic location-aware template. This means every state pillar that
          sends ?intent=<state> (or ?intent=<state>-advisory) gets a correctly
          phrased headline/lede WITHOUT a per-state entry — the engine's
          locationPhrase() enrichment fills in "in New York", etc.
       3. No match → default headline/lede stays (no error). */
  var config = meta.intent && MAP[meta.intent] ? MAP[meta.intent] : null;

  if (!config && meta.intent) {
    var advisoryMatch = /^(.*)-advisory$/.exec(meta.intent);
    var stateSlug = advisoryMatch ? advisoryMatch[1] : meta.intent;
    var isKnownState = LOOK.state && Object.prototype.hasOwnProperty.call(LOOK.state, stateSlug);

    // If state param wasn't explicitly passed, infer it from the intent slug
    // so locationPhrase() can enrich correctly.
    if (isKnownState && !meta.state) { meta.state = stateSlug; }

    if (isKnownState && advisoryMatch && MAP['__state_advisory__']) {
      config = MAP['__state_advisory__'];
    } else if (isKnownState && MAP['__state_pillar__']) {
      config = MAP['__state_pillar__'];
    }
  }

  if (config) {
    var loc = locationPhrase();
    var ind = industryName(meta.industry);
    var st = stateName(meta.state);
    var cty = cityName(meta.city);

    /* Token interpolation — lets a single template embed location/industry.
       Supported tokens (all optional, gracefully removed if no value):
         {state}     → "New York"
         {city}      → "Buffalo"
         {location}  → "in New York" / "in Buffalo, New York"
         {industry}  → "construction"
       Collapses any leftover double-spaces from empty tokens. */
    function interpolate(tpl) {
      if (!tpl) return tpl;
      return tpl
        .replace(/\{state\}/g, st || '')
        .replace(/\{city\}/g, cty || '')
        .replace(/\{location\}/g, loc || '')
        .replace(/\{industry\}/g, ind || '')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s+([.,])/g, '$1')   // tidy " ." / " ," from empty tokens
        .trim();
    }

    /* Headline — prefer the explicit hook, fall back to the contact hero H1
       so the swap works even if the markup lacks data-contact-headline-default. */
    var headlineEl = document.querySelector('[data-contact-headline-default]')
      || document.querySelector('.contact-hero__heading')
      || document.querySelector('.service-hero__heading')
      || document.querySelector('#main h1');
    if (headlineEl && config.headline) {
      headlineEl.innerHTML = interpolate(config.headline);
    }

    /* Lede — base copy (interpolated), then append an enrichment sentence only
       if the template did NOT already consume the location via a {location}
       token (avoids saying "in New York" twice). */
    var ledeEl = document.querySelector('[data-contact-lede-default]')
      || document.querySelector('.contact-hero__subheading')
      || document.querySelector('.contact-hero__lede')
      || document.querySelector('.service-hero__subheading');
    if (ledeEl && config.lede) {
      var ledeUsesLocation = /\{location\}|\{state\}|\{city\}/.test(config.lede);
      var baseLede = interpolate(config.lede);
      ledeEl.innerHTML = ledeUsesLocation ? baseLede : (baseLede + enrichmentSentence(ind, loc));
    }

    /* CTA copy (optional) */
    if (config.cta) {
      var ctaEl = document.querySelector('[data-cta="contact-form-submit"]');
      if (ctaEl) { ctaEl.textContent = config.cta; }
    }

    /* Pre-check the matching service checkbox */
    if (config.service) {
      var box = document.querySelector('[data-service-input][value="' + config.service + '"]');
      if (box) { box.checked = true; }
    }
  }

  /* Pre-select the industry dropdown if the param maps to an existing option,
     regardless of whether an intent matched (helps the form pre-fill). */
  if (meta.industry) {
    var sel = document.getElementById('contact-industry');
    if (sel) {
      var opt = sel.querySelector('option[value="' + cssEscape(meta.industry) + '"]');
      if (opt) { sel.value = meta.industry; }
    }
  }

  /* Build the enrichment sentence appended to the lede. Kept human + concise.
     Examples:
       industry + location -> " Specialized for construction businesses in Buffalo, New York."
       location only       -> " Serving businesses in New York."
       industry only       -> " Specialized for construction businesses." */
  function enrichmentSentence(ind, loc) {
    // Inline, same body color as the lede — no separate red sentence. Only the
    // place / industry NAME carries a subtle accent via contact-hero__context.
    function wrap(label) { return '<span class="contact-hero__context">' + label + '</span>'; }
    if (ind && loc) return ' Specialized for ' + wrap(ind) + ' businesses ' + wrap(loc) + '.';
    if (loc)        return ' Serving businesses ' + wrap(loc) + '.';
    if (ind)        return ' Specialized for ' + wrap(ind) + ' businesses.';
    return '';
  }

  function cssEscape(s) {
    return String(s).replace(/"/g, '\\"');
  }

})();
