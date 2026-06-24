/* intent_exec_check.js — EXECUTES the real src/assets/js/tb-forms.js applyIntent
   against the REAL shipped intent data (src/_data/intents.json, which dc dumps
   verbatim into the page) via a minimal DOM shim. Proves the ?intent= engine
   actually swaps headline/lede/CTA/service-prefill per origin — not stubbed.
   Run: node _build/scripts/intent_exec_check.js
   No browser, no network, no deps. Pure code-path execution. */
'use strict';
const fs = require('fs');

const intents = JSON.parse(fs.readFileSync('src/_data/intents.json', 'utf8'));
const formJs  = fs.readFileSync('src/assets/js/tb-forms.js', 'utf8');
const builtHtml = fs.readFileSync('_site/contact/index.html', 'utf8');

// --- sanity: prove the map actually shipped in the built page ---
const shipped = /window\.TB_INTENT_MAP\s*=\s*\{/.test(builtHtml);
if (!shipped) { console.error('FAIL: TB_INTENT_MAP not found in built _site/contact/index.html'); process.exit(1); }

// page defaults (the "generic" copy before any swap) — from contact.njk
const DEFAULT_HEADLINE = 'Discovery brief';
const DEFAULT_LEDE = 'Six minutes. Six fields. We’ll respond within one business day with discovery call slots and a sense of where we’d start.';
const DEFAULT_CTA = 'Send the Discovery Brief';

function makeEl(initial) {
  return {
    innerHTML: initial && initial.innerHTML !== undefined ? initial.innerHTML : '',
    textContent: initial && initial.textContent !== undefined ? initial.textContent : '',
    value: '', checked: false, type: (initial && initial.type) || 'text', disabled: false,
    style: {},
    setAttribute() {}, getAttribute() { return null; }, removeAttribute() {},
    focus() {}, scrollIntoView() {}, appendChild() {}, remove() {},
    closest() { return null; },
    querySelector() { return null; }, querySelectorAll() { return []; },
  };
}

function run(intent, extraParams) {
  // fresh element registry per run
  const reg = {};
  function get(sel) {
    if (!reg[sel]) {
      if (sel === '[data-intent-headline]') reg[sel] = makeEl({ innerHTML: DEFAULT_HEADLINE });
      else if (sel === '[data-intent-lede]') reg[sel] = makeEl({ innerHTML: DEFAULT_LEDE });
      else if (sel === '[data-cta="contact-form-submit"]') reg[sel] = makeEl({ textContent: DEFAULT_CTA });
      else reg[sel] = makeEl();
    }
    return reg[sel];
  }

  const form = {
    querySelector: (sel) => get(sel),
    querySelectorAll: () => [],
    addEventListener() {}, // we don't fire submit here; only applyIntent matters
    closest() { return null; }, style: {},
  };

  const search = '?intent=' + encodeURIComponent(intent) +
    (extraParams ? '&' + extraParams : '');

  const sandbox = {
    window: {
      TB_INTENT_MAP: intents.intents,
      TB_LOOKUPS: intents.lookups,
      TB_ENV: 'preview',
      TB_FORM_ENDPOINT: 'https://example/exec',
      location: { search, href: 'https://techbrot.com/contact/' + search, pathname: '/contact/' },
    },
    document: {
      querySelector: (sel) => (sel === '[data-form="contact-discovery"]' ? form : get(sel)),
      querySelectorAll: () => [],
      referrer: '',
      createElement: () => makeEl(),
    },
    URLSearchParams,
    console: { info() {}, error() {} },
  };
  sandbox.window.__tbContactFormInit = false;

  // execute the REAL file in the sandbox
  const vm = require('vm');
  vm.createContext(sandbox);
  vm.runInContext(formJs, sandbox);

  const h = get('[data-intent-headline]').innerHTML;
  const l = get('[data-intent-lede]').innerHTML;
  const c = get('[data-cta="contact-form-submit"]').textContent;
  // which service checkbox got checked?
  let svc = '';
  for (const sel in reg) {
    const m = sel.match(/\[data-service-input\]\[value="([^"]+)"\]/);
    if (m && reg[sel].checked) svc = m[1];
  }
  // what hidden meta values were written?
  const meta = {};
  for (const sel in reg) {
    const m = sel.match(/\[data-meta="([^"]+)"\]/);
    if (m && reg[sel].value) meta[m[1]] = reg[sel].value;
  }
  return { h, l, c, svc, meta };
}

function show(label, intent, extra) {
  const r = run(intent, extra);
  const swapped = (x, base) => (x === base ? '  (UNCHANGED — generic)' : '  <-- SWAPPED');
  console.log('\n=== ?intent=' + intent + (extra ? '&' + extra : '') + '  [' + label + '] ===');
  console.log('  headline : ' + r.h.replace(/<br>/g, ' / ') + swapped(r.h, DEFAULT_HEADLINE));
  console.log('  lede     : ' + r.l.slice(0, 70) + (r.l.length > 70 ? '…' : '') + swapped(r.l, DEFAULT_LEDE));
  console.log('  CTA btn  : ' + r.c + swapped(r.c, DEFAULT_CTA));
  console.log('  service✓ : ' + (r.svc || '(none)'));
  console.log('  hidden meta written: ' + JSON.stringify(r.meta));
}

console.log('TB_INTENT_MAP shipped in built page: YES (' + Object.keys(intents.intents).length + ' keys)');
console.log('Page defaults — headline: "' + DEFAULT_HEADLINE + '" | CTA: "' + DEFAULT_CTA + '"');

show('home ghost CTA', 'home');
show('BOFU cleanup', 'cleanup', 'state=texas');
show('monthly bookkeeping', 'monthly');
show('partner apply', 'partner-apply');
show('explicit state pillar', 'texas');
show('state-advisory fallback', 'florida-advisory');
show('UNKNOWN intent (graceful)', 'zzz-not-a-real-intent');
