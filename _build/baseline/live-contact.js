/* ============================================================================
   TechBrot · contact.js — contact form behavior (validation + submission)
   ----------------------------------------------------------------------------
   Hardened against double-submit AND double-script-load.
   Intent routing + metadata pre-fill lives in contact-intents.js (separate).
   ============================================================================ */

(function initContactForm() {
  'use strict';

  /* HARD GUARD: run once per page, even if this file is included twice. */
  if (window.__tbContactFormInit) return;
  window.__tbContactFormInit = true;

  var form = document.querySelector('[data-form="contact-discovery"]');
  if (!form) return;

  /* Google Apps Script Web App URL. Empty ('') = native form POST fallback. */
  var TB_FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxa3SOlN8h0cGzLgnYq3A4FiH7s9TpWSFp50yhaaBaAQt2Vkddnyg12JvrtpLYmNSGudg/exec';

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

  function collect() {
    var data = {};
    ['name','company','email','phone','revenue_range','industry','qb_status','timeline','message','consent'].forEach(function (n) {
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

  function setSubmitting(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    submitBtn.textContent = on ? 'Sending…' : SUBMIT_LABEL;
  }

  function showSuccess() {
    var wrap = form.closest('.contact-form-wrap') || form.parentNode;
    if (wrap.querySelector('.intake-form__success')) return; /* never duplicate */

    var firstName = (field('name') && field('name').value.trim().split(' ')[0]) || '';
    var greeting = firstName ? ('Thank you, ' + escapeHtml(firstName) + '.') : 'Thank you.';

    var panel = document.createElement('div');
    panel.className = 'intake-form__success';
    panel.setAttribute('role', 'status');
    panel.setAttribute('aria-live', 'polite');
    panel.innerHTML =
      '<div class="intake-form__success-mark" aria-hidden="true">' +
        '<svg viewBox="0 0 52 52" width="48" height="48" fill="none" stroke="currentColor" stroke-width="3">' +
          '<circle class="intake-form__success-circle" cx="26" cy="26" r="24"/>' +
          '<path class="intake-form__success-check" d="M16 27l7 7 13-15" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
      '</div>' +
      '<p class="intake-form__success-eyebrow">Discovery brief received</p>' +
      '<h2 class="intake-form__success-heading">' + greeting + ' Your brief is in.</h2>' +
      '<p class="intake-form__success-body">A Certified ProAdvisor reviews your situation personally &mdash; no auto-responder, no sales sequence. ' +
      'You&rsquo;ll hear back <strong>within one business day</strong> with discovery-call slots and an honest first read on where we&rsquo;d start.</p>' +
      '<ul class="intake-form__success-steps" role="list">' +
        '<li><span class="intake-form__success-step">01</span> Confirmation email with call slots &mdash; within 1 business day</li>' +
        '<li><span class="intake-form__success-step">02</span> 30-minute discovery call &mdash; review, not a pitch</li>' +
        '<li><span class="intake-form__success-step">03</span> Written fixed-fee scope within 3 business days &mdash; or an honest &ldquo;not the right fit&rdquo;</li>' +
      '</ul>' +
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

  form.addEventListener('submit', function (ev) {
    if (submitting) { ev.preventDefault(); return; }
    var errors = validate();
    if (errors.length) { ev.preventDefault(); showErrors(errors); return; }
    if (!TB_FORM_ENDPOINT) return;

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
        if (res && (res.ok || res.result === 'success')) { showSuccess(); }
        else { submitting = false; setSubmitting(false); showSubmitError(); }
      })
      .catch(function () { submitting = false; setSubmitting(false); showSubmitError(); });
  });

})();