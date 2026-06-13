"""Changeover step 4: rewrite the two money-page FORMS onto the new-skin
shell (pages/*.html render markup: intake-grid · intake-group__grid ·
intake-checkbox span-pattern · intake-consent) while preserving the
LOCKED CONTRACT byte-for-byte where it matters: field names incl.
services[], full option sets + values, required flags, data-meta hidden
defaults, referring trackers, honeypot, data-service-input hooks.
Contact's visible labels/legends/notes stay VERBATIM (baseline equity);
file-review's condensed labels follow its render.
Replaces the block <div class="contact-form-wrap"> … </form> on each page.
Usage: python _build/scripts/reskin_forms.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

SELECTS = """        <div class="intake-grid">
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-revenue">{REV_LABEL} <span class="intake-field__optional">optional</span></label>
            <select id="{P}-revenue" name="revenue_range">
              <option value="">Select range</option>
              <option value="pre-revenue">Pre-revenue / new business</option>
              <option value="under-500k">Under $500K</option>
              <option value="500k-1m">$500K&ndash;$1M</option>
              <option value="1m-5m">$1M&ndash;$5M</option>
              <option value="5m-25m">$5M&ndash;$25M</option>
              <option value="25m-plus">$25M+</option>
              <option value="prefer-not">Prefer not to share</option>
            </select>
          </div>
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-industry">Industry <span class="intake-field__optional">optional</span></label>
            <select id="{P}-industry" name="industry">
              <option value="">Select industry</option>
              <option value="ecommerce">E-commerce / DTC</option>
              <option value="saas">SaaS / Software</option>
              <option value="professional-services">Professional services</option>
              <option value="agency">Agency / Marketing</option>
              <option value="construction">Construction / Trades</option>
              <option value="real-estate">Real estate</option>
              <option value="restaurants">Restaurants / Hospitality</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="healthcare">Healthcare</option>
              <option value="nonprofit">Nonprofit</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-qb-status">{QB_LABEL}{QB_OPT}</label>
            <select id="{P}-qb-status" name="qb_status">
              <option value="">{QB_PLACEHOLDER}</option>
              <option value="qbo-current">{QBO}</option>
              <option value="qb-desktop">{QBD}</option>
              <option value="qb-enterprise">{QBE}</option>
              <option value="other-software">{QBOTHER}</option>
              <option value="no-software">No accounting software / spreadsheets</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-timeline">Timeline{TL_OPT}</label>
            <select id="{P}-timeline" name="timeline">
              <option value="">Select urgency</option>
              <option value="immediate">Immediate &mdash; this week</option>
              <option value="month">Within a month</option>
              <option value="quarter">Within this quarter</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>
        </div>"""

HIDDEN = """        {# Hidden metadata — names + data-meta identical to the live form
           contract; defaults are this page's own. URL params override,
           empty params never wipe (round-6 engine rule). #}
        <input type="hidden" name="intent"             data-meta="intent"             value="{INTENT}">
        <input type="hidden" name="state"              data-meta="state"              value="">
        <input type="hidden" name="city"               data-meta="city"               value="">
        <input type="hidden" name="industry_intent"    data-meta="industry"           value="">
        <input type="hidden" name="service"            data-meta="service"            value="">
        <input type="hidden" name="source_page"        data-meta="source_page"        value="">
        <input type="hidden" name="source_type"        data-meta="source_type"        value="{STYPE}">
        <input type="hidden" name="funnel_stage"       data-meta="funnel_stage"       value="{STAGE}">
        <input type="hidden" name="urgency"            data-meta="urgency"            value="">
        <input type="hidden" name="operator_candidate" data-meta="operator_candidate" value="">
        <input type="hidden" name="referring_intent" id="{P}-referring-intent" value="" data-intent-tracker>
        <input type="hidden" name="referring_page"   id="{P}-referring-page"   value="" data-referrer-tracker>

        {# Honeypot — bots fill it; humans never see it. NOT in the payload. #}
        <div class="sr-only" aria-hidden="true">
          <label for="{P}-company-website">Company website (leave blank)</label>
          <input type="text" id="{P}-company-website" name="company_website" tabindex="-1" autocomplete="off">
        </div>"""


def build_form(P, form_id, intent, stype, stage, legends, services,
               rev_label, qb_labels, msg_label, msg_ph, consent_html,
               submit_label, reassurance, notes):
    svc_rows = "\n".join(
        f'            <label class="intake-checkbox"><input type="checkbox" '
        f'name="services[]" value="{v}" data-service-input><span>{label}'
        + (f'<span class="intake-checkbox__help">{help_}</span>' if help_ else "")
        + "</span></label>"
        for v, label, help_ in services)
    selects = (SELECTS.replace("{P}", P)
               .replace("{REV_LABEL}", rev_label)
               .replace("{QB_LABEL}", qb_labels[0])
               .replace("{QB_OPT}", qb_labels[7])
               .replace("{QB_PLACEHOLDER}", qb_labels[1])
               .replace("{QBO}", qb_labels[2]).replace("{QBD}", qb_labels[3])
               .replace("{QBE}", qb_labels[4]).replace("{QBOTHER}", qb_labels[5]))
    hidden = (HIDDEN.replace("{P}", P).replace("{INTENT}", intent)
              .replace("{STYPE}", stype).replace("{STAGE}", stage))
    return f'''    <div class="contact-form-wrap">
      {{# NEW-SKIN form shell (handoff pages render). The render is a SHELL:
         every locked contract detail is OURS — services[] names, full
         option sets + values, hidden meta, trackers, honeypot. FENCED. #}
      <form class="intake-form" id="{form_id}" data-form="contact-discovery" method="POST" action="/contact/submit" novalidate>

        <div class="intake-grid">
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-name">Full name</label>
            <input type="text" id="{P}-name" name="name" required autocomplete="name">
          </div>
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-company">Company</label>
            <input type="text" id="{P}-company" name="company" required autocomplete="organization">
          </div>
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-email">Work email</label>
            <input type="email" id="{P}-email" name="email" required autocomplete="email">
          </div>
          <div class="intake-field">
            <label class="intake-field__label" for="{P}-phone">Phone <span class="intake-field__optional">optional</span></label>
            <input type="tel" id="{P}-phone" name="phone" autocomplete="tel" aria-describedby="{P}-phone-help">
            <p class="intake-field__help" id="{P}-phone-help">Only used to schedule the call &mdash; never for marketing.</p>
          </div>
        </div>

        <fieldset class="intake-group">
          <legend>{legends[0]}</legend>
          <p class="intake-group__note">{notes[0]}</p>
          <div class="intake-group__grid">
{svc_rows}
          </div>
        </fieldset>

{selects}

        <div class="intake-field">
          <label class="intake-field__label" for="{P}-message">{msg_label} <span class="intake-field__optional">optional</span></label>
          <textarea id="{P}-message" name="message" rows="5" placeholder="{msg_ph}"></textarea>
        </div>

        <div class="intake-consent">
          <label class="intake-checkbox"><input type="checkbox" name="consent" value="agreed" required><span>{consent_html}</span></label>
        </div>

{hidden}

        <div>
          <button class="btn btn--primary btn--lg" type="submit" data-cta="contact-form-submit">{submit_label}</button>
          <p class="intake-form__reassurance">{reassurance}</p>
        </div>
      </form>
    </div>'''


def replace_block(path, new_block):
    s = Path(path).read_text(encoding="utf-8")
    start = s.index('    <div class="contact-form-wrap">')
    end = s.index("</form>", start) + len("</form>")
    # swallow the closing wrap div
    close = s.index("</div>", end)
    end = close + len("</div>")
    Path(path).write_text(s[:start] + new_block + s[end:],
                          encoding="utf-8", newline="\n")
    print(path, "form re-skinned")


# ── file-review (labels per its render; intent defaults = BOFU page) ──
fr_services = [
    ("cleanup", "QuickBooks cleanup", ""),
    ("catch-up", "Catch-up bookkeeping", ""),
    ("monthly-bookkeeping", "Monthly bookkeeping", ""),
    ("qb-setup", "QuickBooks setup", ""),
    ("qb-migration", "QuickBooks migration", ""),
    ("payroll", "Payroll management", ""),
    ("sales-tax", "Sales tax compliance", ""),
    ("fractional-cfo", "Fractional CFO", ""),
    ("new-business", "New business setup", ""),
    ("not-sure", "Not sure &mdash; please advise", ""),
]
replace_block(
    ROOT / "src/quickbooks/file-review.njk",
    build_form(
        "fr", "file-review-form-el", "file-review", "bofu-conversion", "BOFU",
        ["What we should look at"], fr_services,
        "Annual revenue",
        ["QuickBooks version", "Select version", "QuickBooks Online",
         "QuickBooks Desktop", "QuickBooks Enterprise",
         "Other software (Xero, Wave, etc.)", "", ""],
        "What you&rsquo;re seeing in the file",
        "Reconciliation gaps, balances that don&rsquo;t look right, errors &mdash; anything you want a Certified ProAdvisor to confirm.",
        "I agree to be contacted by TechBrot regarding this file review.",
        "Submit for free review",
        "No spam, no list, no obligation. A ProAdvisor replies within one business day.",
        ["Check everything that applies &mdash; &ldquo;not sure&rdquo; is a real answer."]))

# ── contact (visible text VERBATIM = baseline equity; defaults all empty) ──
ct_services = [
    ("monthly-bookkeeping", "Monthly bookkeeping", "Recurring, fixed-fee monthly close"),
    ("cleanup", "QuickBooks cleanup", "Books out of order, structural issues"),
    ("catch-up", "Catch-up bookkeeping", "Months or years behind"),
    ("qb-setup", "QuickBooks setup", "New file or restructuring"),
    ("qb-migration", "QuickBooks migration", "Desktop &rarr; Online, or platform switch"),
    ("payroll", "Payroll management", "Single or multi-state payroll"),
    ("sales-tax", "Sales tax compliance", "Multi-state nexus, filings, audits"),
    ("fractional-cfo", "Fractional CFO", "Strategic finance, by application"),
    ("new-business", "New business setup", "First-time accounting infrastructure"),
    ("not-sure", "Not sure yet", "Diagnostic call will figure it out"),
]
replace_block(
    ROOT / "src/contact.njk",
    build_form(
        "contact", "contact-discovery-form", "", "", "",
        ["What we should discuss"], ct_services,
        "Annual revenue",
        ["QuickBooks status", "Select status", "Using QuickBooks Online",
         "Using QuickBooks Desktop", "Using QuickBooks Enterprise",
         "Using other software (Xero, Wave, etc.)", "",
         ' <span class="intake-field__optional">optional</span>'],
        "Discovery notes",
        "Anything specific about your situation. The more context, the better the diagnostic call.",
        'I agree to be contacted by TechBrot regarding this inquiry.<span class="intake-checkbox__help">We&rsquo;ll only use your details to respond to this request. See our <a href="/legal/privacy-policy/">privacy policy</a>.</span>',
        "Send the Discovery Brief",
        "Response within 1 business day. No marketing list. No sales follow-up sequence.",
        ["Pick what fits. Pick more than one if more than one fits."]))
