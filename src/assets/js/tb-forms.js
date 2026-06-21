/* ============================================================================
   TechBrot · tb-forms.js — contact form behavior (validation + submission)
   ----------------------------------------------------------------------------
   Port of the live contact.js, governed by _build/baseline/form-contract.json.
   The payload shape is REPRODUCED EXACTLY — the Apps Script endpoint must
   keep working with zero script-side changes. Additions over the live file:
     · endpoint comes from _data/site.json via window.TB_FORM_ENDPOINT
       (single source; empty string '' = native form POST fallback — preserved)
     · honeypot: input[name="company_website"] — bots fill it, humans never
       see it. A filled honeypot shows fake success and never POSTs. The field
       is NOT added to the payload (Apps Script field set unchanged).
     · GA4 lead_submit via window.tbTrack — fail-closed (console outside
       production, see tb-analytics.js).
     · outside production: never POSTs; logs the exact would-send payload to
       console and to [data-payload-log] for byte-for-byte contract review.
   ============================================================================ */
(function initContactForm() {
  'use strict';

  if (window.__tbContactFormInit) return;
  window.__tbContactFormInit = true;

  var form = document.querySelector('[data-form="contact-discovery"]');
  if (!form) return;

  var TB_FORM_ENDPOINT = window.TB_FORM_ENDPOINT || '';
  var isProduction = window.TB_ENV === 'production';

  var submitBtn = form.querySelector('[data-cta="contact-form-submit"]');
  var SUBMIT_LABEL = submitBtn ? submitBtn.textContent.trim() : 'Send the Discovery Brief';
  var submitting = false;

  function validate() {
    var errors = [];
    var name = field('name'), company = field('company'), email = field('email');
    var consent = form.querySelector('input[name="consent"]');
    if (name && !name.value.trim()) errors.push({ el: name, msg: 'Please enter your name.' });
    if (company && !company.value.trim()) errors.push({ el: company, msg: 'Please enter your company.' });
    if (email && !isEmail(email.value.trim())) errors.push({ el: email, msg: 'Please enter a valid work email.' });
    if (consent && !consent.checked) errors.push({ el: consent, msg: 'Please confirm we can contact you.' });
    return errors;
  }

  function field(name) { return form.querySelector('[name="' + name + '"]'); }
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  function clearErrors() {
    form.querySelectorAll('.intake-field__error').forEach(function (n) { n.remove(); });
    form.querySelectorAll('[aria-invalid="true"]').forEach(function (n) { n.removeAttribute('aria-invalid'); });
    var se = form.querySelector('.intake-form__submit-error');
    if (se) se.remove();
  }

  function showErrors(errors) {
    clearErrors();
    errors.forEach(function (e) {
      e.el.setAttribute('aria-invalid', 'true');
      var msg = document.createElement('p');
      msg.className = 'intake-field__error';
      msg.setAttribute('role', 'alert');
      msg.textContent = e.msg;
      var host = e.el.closest('.intake-field') || e.el.closest('.intake-checkbox') || e.el.parentNode;
      host.appendChild(msg);
    });
    if (errors.length) errors[0].el.focus();
  }

  /* collect() — EXACT port from live contact.js. Key order, the services
     array, and the industry overwrite quirk are part of the contract. */
  function collect() {
    var data = {};
    ['name','company','email','phone','revenue_range','industry','qb_status','timeline','message','consent','lead_source','ai_tool'].forEach(function (n) {
      var el = field(n);
      if (el) data[n] = (el.type === 'checkbox') ? (el.checked ? el.value : '') : el.value.trim();
    });
    data.services = Array.prototype.map.call(
      form.querySelectorAll('[data-service-input]:checked'), function (b) { return b.value; });
    form.querySelectorAll('[data-meta]').forEach(function (el) {
      data[el.getAttribute('data-meta')] = el.value || '';
    });
    var li = form.querySelector('[data-intent-tracker]');
    var lr = form.querySelector('[data-referrer-tracker]');
    if (li) data.referring_intent = li.value || '';
    if (lr) data.referring_page = lr.value || '';
    data._submitted_at = new Date().toISOString();
    data._page_url = window.location.href;
    return data;
  }

  function honeypotTripped() {
    var hp = form.querySelector('[name="company_website"]');
    return !!(hp && hp.value);
  }

  function setSubmitting(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    submitBtn.textContent = on ? 'Sending…' : SUBMIT_LABEL;
  }

  function showSuccess() {
    var wrap = form.closest('.contact-form-wrap') || form.parentNode;
    if (wrap.querySelector('.intake-form__success')) return;

    var firstName = (field('name') && field('name').value.trim().split(' ')[0]) || '';
    var greeting = firstName ? ('Thank you, ' + escapeHtml(firstName) + '.') : 'Thank you.';

    var panel = document.createElement('div');
    panel.className = 'intake-form__success';
    panel.setAttribute('role', 'status');
    panel.setAttribute('aria-live', 'polite');
    panel.innerHTML =
      '<p class="intake-form__success-eyebrow">Discovery brief received</p>' +
      '<h2 class="intake-form__success-heading">' + greeting + ' Your brief is in.</h2>' +
      '<p class="intake-form__success-body">A Certified ProAdvisor reviews your situation personally &mdash; no auto-responder, no sales sequence. ' +
      'You&rsquo;ll hear back <strong>within one business day</strong> with discovery-call slots and an honest first read on where we&rsquo;d start.</p>' +
      '<p class="intake-form__success-aside">Prefer to move faster? ' +
      '<a href="tel:+18777515575">Call us at (877) 751-5575 &rarr;</a></p>';

    form.style.display = 'none';
    wrap.appendChild(panel);
    panel.setAttribute('tabindex', '-1');
    panel.focus({ preventScroll: true });
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function showSubmitError() {
    clearErrors();
    var box = document.createElement('p');
    box.className = 'intake-form__submit-error';
    box.setAttribute('role', 'alert');
    box.innerHTML = 'Something went wrong sending your brief. Please try again, ' +
      'or email us directly at <a href="mailto:info@techbrot.com">info@techbrot.com</a>.';
    var footer = form.querySelector('.intake-form__actions') || form;
    footer.appendChild(box);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function logPayload(payload) {
    var json = JSON.stringify(payload, null, 2);
    console.info('[tb-forms:' + (window.TB_ENV || 'preview') + '] would-send payload (NOT posted):\n' + json);
    var sink = document.querySelector('[data-payload-log]');
    if (sink) sink.textContent = json;
  }

  form.addEventListener('submit', function (ev) {
    if (submitting) { ev.preventDefault(); return; }

    if (honeypotTripped()) {
      /* Spam: pretend success, never POST, never track. */
      ev.preventDefault();
      showSuccess();
      return;
    }

    var errors = validate();
    if (errors.length) { ev.preventDefault(); showErrors(errors); return; }

    if (!isProduction) {
      /* LOCALHOST-ONLY MODE: log the exact contract payload, no network. */
      ev.preventDefault();
      var payload = collect();
      logPayload(payload);
      if (window.tbTrack) window.tbTrack('lead_submit', { intent: payload.intent || '', page_path: window.location.pathname });
      showSuccess();
      return;
    }

    if (!TB_FORM_ENDPOINT) return; /* native POST fallback — preserved */

    ev.preventDefault();
    submitting = true;
    clearErrors();
    setSubmitting(true);

    fetch(TB_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(collect())
    })
      .then(function (r) { return r.json().catch(function () { return { ok: r.ok }; }); })
      .then(function (res) {
        if (res && (res.ok || res.result === 'success')) {
          if (window.tbTrack) window.tbTrack('lead_submit', { intent: (field('intent') || {}).value || '', page_path: window.location.pathname });
          showSuccess();
        } else { submitting = false; setSubmitting(false); showSubmitError(); }
      })
      .catch(function () { submitting = false; setSubmitting(false); showSubmitError(); });
  });

  /* ── Intent routing (engine port of contact-intents.js, data-driven from
        _data/intents.json exposed as window.TB_INTENT_MAP / TB_LOOKUPS) ── */
  (function applyIntent() {
    var MAP = window.TB_INTENT_MAP || {};
    var LOOKUPS = window.TB_LOOKUPS || {};
    var params = new URLSearchParams(window.location.search);
    function param(k) { return (params.get(k) || '').trim(); }

    var meta = {
      intent: param('intent'), state: param('state'), city: param('city'),
      industry: param('industry'), service: param('service'),
      source_page: param('source_page') || document.referrer || '',
      source_type: param('source_type'), funnel_stage: param('funnel_stage'),
      urgency: param('urgency'), operator_candidate: param('operator_candidate')
    };
    /* Round 6: only overwrite when the URL has a value — pages may
       pre-fill an HTML default (e.g. intent=file-review on the
       file-review page) that ?intent= overrides but empty URLs must
       not wipe. collect() still writes the field "ALWAYS" to the
       payload, so the form-contract.json contract is preserved. */
    Object.keys(meta).forEach(function (k) {
      var el = form.querySelector('[data-meta="' + k + '"]');
      if (el && meta[k]) el.value = meta[k];
    });
    var legacyRef = form.querySelector('[data-referrer-tracker]');
    if (legacyRef && !legacyRef.value && document.referrer) legacyRef.value = document.referrer;
    var legacyIntent = form.querySelector('[data-intent-tracker]');
    if (legacyIntent && meta.intent) legacyIntent.value = meta.intent;

    var config = meta.intent && MAP[meta.intent] ? MAP[meta.intent] : null;
    if (!config && meta.intent) {
      var adv = /^(.*)-advisory$/.exec(meta.intent);
      var stateSlug = adv ? adv[1] : meta.intent;
      if (LOOKUPS.state && LOOKUPS.state[stateSlug]) {
        var base = MAP[adv ? '__state_advisory__' : '__state_pillar__'];
        if (base) {
          var stateName = LOOKUPS.state[stateSlug];
          config = {
            headline: base.headline.replace(/\{state\}/g, stateName),
            lede: base.lede.replace(/\{state\}/g, stateName),
            service: base.service, cta: base.cta
          };
        }
      }
    }
    if (!config) return;

    var headline = document.querySelector('[data-intent-headline]');
    var lede = document.querySelector('[data-intent-lede]');
    if (headline && config.headline) headline.innerHTML = config.headline;
    if (lede && config.lede) lede.innerHTML = config.lede;
    if (submitBtn && config.cta) { submitBtn.textContent = config.cta; SUBMIT_LABEL = config.cta; }
    if (config.service) {
      var box = form.querySelector('[data-service-input][value="' + config.service + '"]');
      if (box) box.checked = true;
    }
  })();
})();
