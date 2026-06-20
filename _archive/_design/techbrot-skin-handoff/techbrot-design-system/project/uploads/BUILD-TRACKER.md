# BUILD-TRACKER.md — living truth (overrides blueprint between revisions)
Updated: 2026-06-13 · Session 1 round 7 (THREE RULINGS + /contact/ ELEVATION — the first elevation of an existing baseline page)

## ROUND 7 — RULINGS APPLIED + /contact/ ELEVATED (T-BOFU)
### Ruling 1 APPLIED — sharp pipeline + David photo (TODO 14 CLOSED)
- @11ty/eleventy-img installed; `{% photo %}` async shortcode in
  eleventy.config.cjs: AVIF/WebP/JPEG, explicit width/height (CLS 0),
  loading=lazy default (`eager: true` opt-in for above-fold), alt
  REQUIRED (build fails without). Sources stay where the founder drops
  them; generated variants → /assets/img/generated/ (hashed names).
- david-westgate.jpg wired into the homepage team card through the
  pipeline (initials mark replaced). 9 variants generated from the
  212,156 B source: **64w AVIF 1,616 B (the 1× fetch) · 128w AVIF
  2,651 B (2×) · 192w AVIF 3,712 B · JPEG fallback 2,187–8,470 B** —
  ~99% smaller than the source at 1×. CSS: `.team-card picture`
  flex-shrink guard (+1 rule). Lighthouse home re-run: **CLS 0 with
  the photo live** — explicit-dims guarantee holds. Visual proof:
  shots/home-team-card.png.
### Ruling 2 APPLIED — CSS hard gate 55KB → 58KB (TODO 15 CLOSED)
- Gate now 59,392 B in BOTH enforcement points (eleventy.config.cjs
  build-fail + run_battery.py); extract_css.py label corrected (it
  reports source bytes; the gate is minified-artifact).
- Conditions logged per ruling: (a) SOURCE TRIM PASS is a scheduled
  task during silo elevation — execute tracker trim candidates
  (06-chrome/07-extensions comment condensing), target source back
  under 75 KB; (b) **58 KB is the ceiling through cutover — the gate
  does not move again.**
### TODO 5 CLOSED — all 11 unmapped intent keys resolved (pre-contact)
- Added to intents.json (additive, `_added`-marked, canonical pricing
  from the live tier pages): qb-faq · quickbooks · quickbooks-plan ·
  quickbooks-proadvisor · quickbooks-setup-{essentials $750–1.5K,
  standard $1.5–3K, complex $3–5K+} · quickbooks-migration-{simple
  from $2.5K, standard from $4.5K, complex from $7.5K} · techbrot-fit.
- New scout: _build/scripts/scout_intents.py (live-HTML intent scan vs
  registry, state-lookup aware). Result: **106/106 live intent keys
  mapped, zero unmapped.**
### Ruling 3 APPLIED — /contact/ ELEVATED (first baseline-page elevation)
- **Page**: src/contact.njk + contact.11tydata.js → /contact/ (URL
  byte-identical). T-BOFU layout, chrome:minimal, bofu tint. 1,396
  rendered words (baseline 951 — enriched, not gutted).
- **Sequence (10)**: contact-{hero · in-brief · tldr (bofu tint, body
  id=#contact-promise — the BASELINE SPEAKABLE selector preserved) ·
  ai-summary (quick-5 ruled) · expect (3-step process-diagram, live
  "What to expect" steps verbatim) · trust (5 "Why owners choose"
  bullets verbatim incl. disclaimer link + Direct contact / HQ cards) ·
  main (THE FORM, #contact-discovery-form) · alt (4 channels verbatim:
  Calendly / phone / partners / press) · faq (7 NEW buyer-objection
  Q/As) · cta (layout)}.
- **Baseline equity accounting** (battery check `content-equity`, NEW —
  see below): 13/13 baseline headings present or justified · H1, meta
  description, canonical, ContactPage + BreadcrumbList schema nodes
  (incl. og image ref + #contact-promise speakable) VERBATIM · live
  form contract reproduced: field names, services[] values+order+help
  lines, select options, consent text, "Send the Discovery Brief"
  label, ALL-EMPTY hidden meta defaults (live semantic — contact takes
  its meaning from URL params/referrer). JUSTIFIED REMOVALS (founder
  sign-off requested): "The monthly brief." newsletter section (round-4
  ruling: /subscribe unverified, no dead forms ship) + 4 legacy footer
  column headings (chrome:minimal per round-4 chrome variant rule).
  BSS title artifact stripped (TODO 4 applied for this page).
- **LIVE DEFECT fixed at elevation**: live consent + FAQ linked
  /legal/privacy/ — a URL that has NEVER existed (real page:
  /legal/privacy-policy/). Battery `links` caught it; elevation links
  the real page. Recorded alongside TODO 3's defect class.
- **Form probes** (_build/verify/form-payload-contact.json, 3 cases):
  default → all meta empty, source_page=referrer fallback, 24 keys ✓ ·
  ?intent=quickbooks-setup-standard (NEW key) → CTA "Scope the Setup",
  services=["qb-setup"] auto-checked ✓ · ?intent=texas → state-lookup
  __state_pillar__ path, CTA "Book the Discovery Call",
  services=["not-sure"] ✓. GA4 lead_submit/phone_click wired,
  console-only outside production.
- Quick-5 (contact): How fast does TechBrot respond? · What happens
  after I send the discovery brief? · Do I have to commit to anything
  on the call? · What should I put in the brief? · Where is TechBrot
  headquartered?
- FAQ (7, FAQPage verbatim, zero overlap, phone ≤2): discovery call
  cost? · sales pitch on the call? · not the right fit? · only
  QuickBooks businesses? · pricing after the call? · marketing list? ·
  urgent — skip the form? *(phone + Calendly)*
- New CSS (tokenized): .intake-checkbox__help · .intake-group__note ·
  .intake-field__optional · .intake-form__reassurance (live form's
  visible help/optional/reassurance text — baseline content).
  site.json emails gained hello@ + press@ (live page values).
### NEW BATTERY CHECK — content-equity differ (risk hierarchy #2, now enforced)
- run_battery.py check 8: for every built URL present in the FROZEN
  baseline — every baseline heading, FAQ Q/A, and schema node type must
  be present in the built page OR carry a founder-justified entry in
  _build/battery/equity-exceptions.json. Justified removals are
  REPORTED every round, never silent. First enforcement: /contact/
  GREEN (13 headings · 0 FAQ · 24 schema types accounted).
### Round-7 verification (full battery + probes, all on current build)
| Check | Result |
|---|---|
| Battery (19 checks incl. content-equity) | ✅ ALL GREEN |
| url-set / links / intents / founder-zero / css-drift | ✅ (251 hrefs across 4 preview pages resolve) |
| css-bytes | ✅ minified 56,642 B / 59,392 B gate (2,750 B headroom) · source 84,652 B ⚠ over soft-cap (trim pass scheduled per ruling 2) |
| Δ vs round 6 | +544 B minified (+983 B source): picture guard + form help/note/optional/reassurance |
| content-equity (/contact/) | ✅ 13 headings · 24 schema types · justified removals reported |
| overflow 360/390/768 (contact + home) | ✅ 349/379/753 — clean |
| Lighthouse desktop /contact/ | a11y 100 · BP 100 · SEO 100 · CLS 0 · perf 68 host-limited (benchmarkIndex 174; gate item 4) |
| Lighthouse desktop / (photo live) | a11y 100 · BP 100 · SEO 100 · **CLS 0** · perf 60 host-limited |
| Form payload proof | ✅ 3 probes (default / new key / state lookup) — form-payload-contact.json |
| Screenshots | contact desktop full / hero / mobile-360 + home-team-card (photo proof) — _build/verify/shots/ |
| Prod build from clean | ✅ 3 pages, dev/* excluded, env fail-closed intact |
### Round-7 scripts added (no-one-liner rule)
scout_intents.py · form_probe_contact.ps1 · screenshots-contact.ps1 ·
shot_anchor.ps1 (fragment-scrolled screenshots) · lighthouse-page.ps1
(added in the round-6 re-verify, reused here).

## ROUND 6 — HOMEPAGE MICRO-FIX + /quickbooks/file-review/ (T-BOFU #1)
### Homepage micro-fix (quick-5 oxblood rule scope)
- `.ai-summary--ruled` rule moved from `.ai-summary__item` (whole row,
  question + answer) to `.ai-summary__question` ONLY. Answer text now
  sits clean with no rule. Component-level CSS edit in 07-extensions.css
  — applies to the quick-5 pattern SITEWIDE (homepage today,
  file-review this round, every future page with the .ai-summary--ruled
  variant). Visual proof: home-quick5-fixed-desktop.png shot.

### /quickbooks/file-review/ — T-BOFU page (Sheet 8 BOFU priority #1)
- **Page**: src/quickbooks/file-review.njk + file-review.11tydata.js
  → permalink /quickbooks/file-review/ → renders as
  _site-prod/quickbooks/file-review/index.html. Intent key
  `file-review` added to intents.json (canonical key — every
  problem/symptom/error CTA converges here; today the homepage's hero
  ghost CTA is the first live consumer via `?intent=home`).
- **Layout**: NEW src/_includes/layouts/t-bofu.njk · chrome: minimal
  (logo + phone only, slim footer — no funnel leakage) · `.hero--compact`
  with 48×3 oxblood hairline accent (::before, design 05-kit §BOFU) ·
  ledger-bofu surface (--surface-tier-bofu, paper-deep #ECEAE2) on
  TL;DR + cta-band. Reusable for every future T-BOFU endpoint.
- **Page sequence (10 sections)** — file-review-{hero · in-brief · tldr
  (bofu tint, speakable-paired) · ai-summary (5 BOFU Q/A, ruled
  variant) · checks (6-row ledger list, NEW .checks-list extension) ·
  process (4-step .process-diagram reuse) · trust (4 trust-row items +
  2 verified Clutch cards) · form (full intake-form, intent=file-review
  default) · faq (7 buyer-objection Q/As, accordion, FAQPage verbatim)
  · cta (slim band, layout-supplied)}.
### THE FORM (the page's engine)
- form-contract.json payload reproduced EXACTLY (24 keys + services
  array + industry overwrite quirk). Captured proof:
  _build/verify/form-payload-file-review.json.
- HTML defaults set: `intent=file-review`, `source_type=bofu-conversion`,
  `funnel_stage=BOFU` (others empty; source_page intentionally
  empty so the live-engine semantic — URL param > document.referrer >
  empty — is preserved).
- **tb-forms.js round-6 change**: intent engine's data-meta loop
  changed from unconditional `el.value = meta[k]` to
  `if (meta[k]) el.value = meta[k]` — empty URL params no longer
  WIPE HTML defaults. The collect() loop still writes ALL data-meta
  fields to the payload "ALWAYS" — form-contract.json contract
  preserved. Verified with two probes:
  - DEFAULT URL (no params) → payload.intent = "file-review",
    source_type = "bofu-conversion", funnel_stage = "BOFU", services = [].
  - ?intent=cleanup&state=texas → payload.intent = "cleanup",
    state = "texas", services = ["cleanup"] (engine auto-checks per
    intents.json MAP["cleanup"].service); BOFU defaults preserved.
- Honeypot `company_website` present + sr-only + NOT in payload.
- GA4 lead_submit + phone_click wired via tbTrack; disabled outside
  production (console-only).
### CSS budget — INTAKE FORM CSS BACK IN BUNDLE
- Re-added to 07-extensions.css as a tokenized port from the design's
  03-components (lines ~2685–3050 form system + 4198–4373 success/error).
  The Part B drift block (29 hardcoded hex flagged in round 1) was
  re-tokenized AA-clean — accent / text-primary / border-hairline /
  bg-card / text-secondary / accent-tinted rgba. Trimmed to fit the
  hard gate: dropped intake-form__header/__eyebrow/__heading/__lede
  (form uses generic .section__header above the form instead), dropped
  the success-panel entrance animation and reduced-motion media (motion
  tokens already zero on the design token layer), dropped
  intake-checkbox--consent overrides and :has(input:checked) outer-card
  state. Result: form is fully styled, success panel + error states
  re-tokenized and present.
- **BYTE REPORT (vs ratified 55 KB hard gate)**:
  - minified: 56,098 B / 56,320 B hard gate · **headroom 222 B** ⚠ TIGHT
  - source: 83,675 B · over 70 KB soft-cap (flagged; soft-cap was
    already over from round 5)
  - Delta from round 5: +6,369 B minified (was 49,729 B → now 56,098 B).
  - Hard gate held, but with under 0.5% headroom. Next CSS-touching
    round needs a trim before adding net new selectors, or the
    founder may want to ratify a budget bump (e.g., 58 KB minified)
    to make /contact/ and the T-MOFU/T-GUIDE work breathe. **Flagged
    for ruling; this round stays under the existing gate.**
### JSON-LD @graph (file-review.11tydata.js)
- WebPage (speakable: #file-review-tldr-body + #file-review-in-brief-text)
- BreadcrumbList: Home → QuickBooks → File review
- Service (#service-file-review): "Free QuickBooks File Review",
  serviceType, areaServed=US, BusinessAudience, offers: Offer with
  price="0" priceCurrency=USD availability=InStock; provider = global
  Organization @id (#organization)
- FAQPage: 7 Q/A VERBATIM from the rendered accordion (battery
  `faq-schema-verbatim` GREEN)
- NO AggregateRating (under-5 rule stands)
### Quick-5 questions (file-review)
1. What is a QuickBooks file review?
2. What does the review cost?
3. How long does the review take?
4. What do you need from me?
5. Is my data safe?
### FAQ questions (file-review, accordion, FAQPage verbatim)
1. What if the review uncovers more problems than I expected?
2. Will I get pressured to buy ongoing monthly bookkeeping?
3. Can I just talk to a ProAdvisor on the phone first? *(phone in answer)*
4. We're a multi-entity or multi-year situation — does the free review still apply?
5. Is the written fixed-fee scope binding?
6. Who actually reviews the file?
7. What happens if you tell me the file is fine? *(phone in answer)*

Zero overlap with quick-5 (battery `faq-overlap` GREEN).
### Strategic in-body interlinks (chrome:minimal compensation)
TL;DR + F2 + F7 weave: /accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup
· /catch-up-bookkeeping/?intent=catch-up · /monthly-bookkeeping/?intent=monthly
· /quickbooks/. Every page CTA routes to #file-review-form or tel:.
### Round-6 verification (full battery + probes — RE-RUN 2026-06-13 after reboot)
The 2026-06-12 reboot hit during the final battery pass, AFTER the last
source edit (22:53: file-review source_page HTML default → empty, so the
live-engine semantic URL param > referrer > empty is preserved) but with
_site-prod, Lighthouse, and screenshots still built from the 22:34
pre-edit state. 2026-06-13: prod artifact rebuilt from clean and the
ENTIRE battery re-run on the current source — all artifacts in
_build/verify/ now post-date the final edit. The only page delta between
stale and current artifacts was that one hidden input (invisible).
| Check | Result |
|---|---|
| Battery (14 checks across home + file-review) | ✅ ALL GREEN |
| url-set | ✅ 3 URLs (home, file-review, dev/form-test) all in baseline∪queue (dev/* preview-only; prod output = 2 pages) |
| links | ✅ 219 hrefs across 3 pages all resolve |
| intents | ✅ all CTA intents in intents.json; 2 page intent keys unique |
| founder-zero | ✅ visible content clean |
| css-drift | ✅ zero hardcoded hex, zero undeclared vars in bundle |
| css-bytes | ✅ 56,098 B / 56,320 B (222 B headroom) ⚠ source 83,675 B over 70 KB soft-cap |
| ai-summary-5 (home + file-review) | ✅ exactly 5 Q/A each |
| faq-min-6 (home + file-review) | ✅ 7 FAQ items each |
| faq-overlap (home + file-review) | ✅ zero overlap each |
| faq-schema-verbatim (home + file-review) | ✅ 7 Q/A match accordion verbatim each |
| overflow 360 / 390 / 768 | ✅ file-review AND home: scrollW 349 / 379 / 753 — clean, zero overflow |
| Lighthouse desktop (file-review, fresh prod artifact, 2 runs) | a11y 100 / BP 100 / SEO 100 / CLS 0 · all failing audits performance-only · perf 29–32 at benchmarkIndex 77–90 (host much slower post-reboot than the 2026-06-12 run: perf 58 @ benchmarkIndex 192). Quality categories identical across all runs; perf NOT calibrated on this host — go-remote gate item 4 stands |
| Form payload proof | ✅ RE-CAPTURED both probes into _build/verify/form-payload-file-review.json: default (intent=file-review · source_type=bofu-conversion · funnel_stage=BOFU · services=[] · source_page=referrer fallback ✓ proves the 22:53 fix) + override ?intent=cleanup&state=texas (intent=cleanup · state=texas · services=["cleanup"] auto-checked · BOFU defaults preserved). 24 contract keys + services array. Known artifact quirk: _page_url shows `&amp;` — Chrome --dump-dom serialization escape during capture, not a page bug |
| Skin guarantee | ✅ css-drift zero |
| Screenshots | RE-SHOT on current build: file-review desktop full / hero desktop / mobile-360 + home-quick5 micro-fix (rule under question only, verified visually) — _build/verify/shots/ |

New named scripts this pass (founder no-one-liner rule):
_build/scripts/lighthouse-page.ps1 (parameterized page audit) ·
screenshots-file-review.ps1 · form_probe.ps1 (dual payload probe,
writes the form-payload artifact).

### DAVID PHOTO — flag (NOT wired this round; needs founder call)
- `assets/people/david-westgate.jpg` IS NOW ON DISK (212 KB JPG,
  written 2026-06-08). Round 5 logged "NOT present on disk" — that
  flag is OUT OF DATE.
- Standing order: "wire it with sharp the moment it exists." The
  sharp pipeline does NOT exist yet (round 4 deferred to "first
  image arrives"). Wiring inline without sharp would ship a raw
  212 KB JPG on the homepage, which would hurt LCP/perf on mobile
  and conflict with the standing order's intent.
- **Action**: KEEPING the typographic initials mark on the homepage
  team card this round. Two paths for the founder to pick:
  1. Build the sharp pipeline next round (Eleventy Image plugin,
     `{% photo %}` shortcode AVIF/WebP/JPEG with explicit dims) —
     proper standing-order compliance, also unblocks editorial-break
     slots.
  2. Ship inline `<img>` with explicit dims + lazy load as a deliberate
     interim, accept the perf hit, plan sharp upgrade for a later round.
- Until founder rules: David photo stays on the FLAG list (now with the
  correct on-disk state).

### Go-remote gate — item 2 CLOSED
- /quickbooks/file-review/ BUILT, verified, all CTAs that point at it
  no longer 404. Go-remote blockers remaining: item 1 (preview-header
  proof on Cloudflare), item 3 (TEST-MIGRATION-2026 live form POST),
  item 4 (Lighthouse re-verification on calibrated infra), item 5
  (`npm run build:prod` from clean — already proven each round).

## ROUND 5 — REFINEMENT (founder rulings + homepage)
### Rulings closed
1. **CSS BUDGET RATIFIED:** hard gate = minified ≤55KB (shipping artifact);
   source soft-cap 70KB, flagged never blocking. This round: minified
   49,729B / 56,320B (6.4KB headroom) · source 75,095B — OVER the 70KB
   soft-cap (flagged; FAQ family +7.4KB and guides +1.7KB drove it; next
   trim opportunity: comment condensing in 06-chrome/07-extensions).
2. **3 GUIDE URLS LOCKED** in build-new-queue.json + linked from
   #home-guides: /resources/guides/{quickbooks-cleanup, hire-a-bookkeeper,
   bookkeeping-rates}/ — T-GUIDE work, **GO-REMOTE BLOCKERS**.
3. **BUTTON COLOR CLOSED:** shipped system wins — ink-at-rest, oxblood
   hover.
### STANDING RULE — per-page Q/A architecture (sitewide)
- Quick-5 (.ai-summary--ruled, NY oxblood-left-rule pattern) sits DIRECTLY
  BELOW the TL;DR. AI-extraction layer; speakable-paired; OUT of FAQPage.
- Bottom FAQ accordion (#<slug>-faq, design .faq component) after
  framework/trust, before cta-band: 6–8 buyer-objection Q/As, one open at
  a time, panels crawlable when closed (grid-rows animation, motion
  tokens, reduced-motion honored). FAQPage JSON-LD carries the ACCORDION
  verbatim — one FAQPage per page. Phone-in-answers: ≤2 natural placements.
- ZERO OVERLAP between quick-5 and FAQ questions.
- Battery enforces all of it: ai-summary-5 · faq-min-6 · faq-overlap ·
  faq-schema-verbatim (schema == rendered text, entity-normalized).
### STANDING RULE — tier surfaces (final table)
| Tier | Surface token | Value |
|---|---|---|
| T-HUB | --surface-tier-hub | paper-mist #F7F5F0 |
| T-LOCATION | --surface-tier-hub | (approved: hub tint) |
| T-MOFU | --surface-tier-guide | paper-warm #F3F1EB |
| T-GUIDE | --surface-tier-guide | paper-warm #F3F1EB |
| T-BOFU | --surface-tier-bofu | paper-deep #ECEAE2 |
Application: TL;DR section + final cta-band sit on the tier surface;
cta-band light variant re-inks text, tier class supplies surface.
### STANDING RULE — prose link affordance (WCAG 1.4.1)
Prose links: whisper hairline underline at rest (ink-faint, 1px, 3px
offset) → accent color on hover/focus. Nav/buttons/card-list links exempt.
(Interpretation note: rest indicator is a full-width hairline; the 60→100
width animation remains the .btn--text treatment — text-decoration cannot
width-animate multiline safely.)
### Homepage changes
- Quick-5 relocated below TL;DR, ruled style; FAQ accordion added (7 Q/As;
  phone CTA in #1 cost and #6 multi-year answers); learning-center
  restored (3 locked guide URLs); industry tiles now TEXT-ONLY (Lucide
  removed there; remains sanctioned for table marks + future contact
  icons); team: lead-practice card carries the real italic-t logo mark.
- **DAVID PHOTO FLAG:** assets/people/david-westgate.jpg NOT present on
  disk (chat-attached image is not a file source). Card keeps typographic
  initials per ruling E fallback — drop the file in and it wires next
  round. Old source for the record: none — the card has only ever used
  initials "DW", no image was ever referenced.
- Diagram upgrade: judgment SVG 1,614B → 3,279B (period nodes, recon arcs,
  value gridlines, drift step, baseline ticks, double rule); process
  diagram + double-rule markers & junction dots (+~0.4KB CSS).
### Round-5 verification
Battery 10/10 GREEN (incl. new FAQ checks; schema-verbatim validated) ·
overflow probe 349/379/753 clean · Lighthouse a11y 100 / BP 100 / SEO 100,
zero failing audits · CLS 0 · accordion keyboard live-verified (one-at-a-
time, Escape + focus return, closed panels crawlable) · 1,957 rendered
words · founder-name-zero · skin guarantee (css-drift zero) · section
order (18): hero · in-brief · tldr · ai-summary · services · judgment ·
start · process · reviews · team · compare · industries · guides · states
· framework · trust · faq · cta. (Spec said 19 — actual is 18 with
in-brief counted; no section from the spec is missing.)

## ROUND 4 — HOMEPAGE FINAL BUILD
### Chrome (nav/footer TODO #1 CLOSED)
- NY-page chrome pattern ported as system components in 06-chrome.css
  (12.7KB source): util-bar · sticky .site-header with dropdown menus
  (button-toggled, aria-expanded, Escape/outside-click close) · mobile
  drawer (dialog, accordions, focus return, scroll lock) · dark
  .site-footer (brand col + 4 sitemap columns + disclosure + legal).
  Behavior in tb-nav.js (2.6KB, deferred, full-chrome pages only).
- **CHROME VARIANT RULE (standing):** `chrome: full` default — full nav +
  full footer. `chrome: minimal` for T-BOFU conversion endpoints
  (/contact/, /quickbooks/file-review/, future /book-a-call/): logo +
  phone header, slim footer (NAP + disclaimer + Privacy/Terms), no nav
  links = no funnel leakage. T-BOFU layout will default minimal. Verified
  on the dev harness page (chrome: minimal).
- Footer carries the MANDATORY trademark disclaimer — site chrome is
  exempt from the page two-mention ceiling (founder ruling). Newsletter
  band from the legacy footer EXCLUDED (/subscribe endpoint unverified —
  no dead forms ship).
### Standing ruling A — AI-SUMMARY IS ALWAYS FIVE
- Every page with the section: exactly 5 page-specific Q/A pairs, FAQPage
  schema pairs all five. Battery check `ai-summary-5` enforces ==5.
  Homepage: 5 built (incl. the two new: "Who is TechBrot for?", "What
  makes TechBrot different?"); FAQPage @graph node added (dump|safe).
  NO AggregateRating (under 5 reviews — rule stands; visible 5.0 display
  only, founder-supplied verified Clutch data).
### Standing ruling B — TIER-CODED SECTION SURFACES (tokens only)
- New tokens: --color-paper-mist #F7F5F0 (ONE new step interpolated
  inside the warm paper ramp) · --surface-tier-hub: paper-mist ·
  --surface-tier-bofu: paper-deep #ECEAE2 · --surface-tier-guide:
  paper-warm #F3F1EB. Changing the three tier tokens re-skins every page
  of that tier (skin guarantee holds).
- T-HUB applied: TL;DR + final cta-band on --surface-tier-hub; NO dark
  band on hub final-cta (dark = hero only). Light variant
  .section--cta-band--light re-inks text; the tier class supplies the
  surface. Verified: page dark surfaces = hero + footer chrome only.
- CONTRAST (WCAG, computed): on hub mist — primary 18.06 · body 13.20 ·
  secondary 6.36 · accent 8.82. On guide warm — 17.43/12.73/6.13/8.51.
  On bofu deep — 16.34/11.94/5.75/7.98. All AA+ (≥4.5). Btn paper-on-
  oxblood 9.19.
- **PROPOSAL (awaiting founder):** T-LOCATION → --surface-tier-hub
  (location pages are structurally hubs: dark hero + motif); T-MOFU →
  --surface-tier-guide (mid-funnel editorial kinship). If full
  distinction wanted, a 4th paper step is needed — say the word.
- NOTE: the design's .btn--primary is INK-bodied with oxblood hover
  (03-components truth); the brief §5 text says "oxblood". On the light
  band buttons render the system primary (ink). If oxblood-at-rest is
  wanted, that's an upstream component change — flag to ratify.
### Visual layer
- Process diagram: .process-diagram (extension) composing the design's
  .process-step — oxblood 2px phase markers, connecting hairlines, mono
  tabular numerals. Reusable on every service page.
- Judgment figure: partials/figure-judgment.svg — ledger-language inline
  SVG (720×220 explicit, currentColor, aria-hidden; flat drifting
  automation line w/ error ticks vs rising reconciled judgment line w/
  check marks + double ledger rule). In .ledger-figure component.
- Lucide icons (readme substitution policy): 8 inline-copied at
  stroke 1.5, 18px, currentColor — src/_includes/icons/ (3.5KB total).
- Comparison marks: .mark-yes/.mark-no CSS-drawn (no emoji/icon font)
  with .sr-only text equivalents.
- **EDITORIAL-BREAK SLOTS OPEN, AWAITING FOUNDER IMAGERY** — no real
  warm-toned documentary images exist in repo assets; nothing
  placeholder/stock shipped. sharp pipeline still pending first image.
### Content merge (sections as built, in order)
home-hero · home-in-brief · home-tldr (hub tint) · home-services ·
home-judgment (3 cards + figure) · home-start (6 buyer cards, intents:
cleanup, catch-up, monthly, qb-help*, quickbooks-setup, fractional-cfo —
*qb-help ADDED to intents.json additively; spec's qb-setup/cfo mapped to
EXISTING registry keys per "never duplicate") · home-process (diagram) ·
home-reviews (merged proof: 5.0 header + 2 verified Clutch cards,
founder-supplied) · home-team (initials marks, David Westgate operator
block + Intuit directory link) · home-compare (why-network table, honest
cells — solo bookkeeper concedes "named operator") · home-industries
(8 Lucide tiles + all-industries) · home-states (21 pills, all
repo/queue-verified) · home-ai-summary (5) · home-framework ·
home-trust · home-cta (light, hub tint).
### CSS BUDGET AMENDMENT (RATIFICATION NEEDED)
- The mandated scope cannot fit readable source in 55KB. Gate changed:
  **HARD gate = minified site.min.css ≤55KB (shipped artifact); source
  overage reported as flag.** This round: minified 43,016B / 56,320B
  (13.3KB headroom) · source 65,335B (flagged over).
- INTAKE FORM CSS (8.7KB) dropped from bundle this round — returns when
  file-review//contact/ builds. Dev harness functional unstyled-intake.
- Byte costs this round: chrome +12.7KB src · extensions +8.0KB src ·
  buyer/process/why-network/locations/industries sections +8.4KB src ·
  icons 3.5KB (HTML-inline) · judgment SVG 1.4KB · tb-nav.js 2.6KB.
### Round-4 flags/fixes (battery- or audit-caught)
- sr-only labels escaped the comparison table's overflow clip → page
  overflow at 360/390 (probe-caught) → .why-network__table positioned.
- Footer wordmark oxblood em = 1.96:1 on dark → inverted on dark chrome.
- 3 GUIDE URLS NOT LOCKED: Sheet 8 names no guide slugs (Sheet 5 backlog
  is topic-less /resources/guides/[topic]). Founder must specify the
  three; learning-center section joins the homepage when they build.
  Recorded in build-new-queue.json _pending_guides.
### Round-4 verification
battery ALL GREEN (incl. new ai-summary-5) · overflow probe 360/390/768:
349/379/753 scrollWidth — clean (drawer open + accordions also clean at
narrow widths; drawer mechanics keyboard-verified: Escape closes, focus
returns) · Lighthouse a11y 100 (zero failing audits) · BP 100 · SEO 100 ·
CLS 0 · perf NOT measurable this round (benchmarkIndex 83–108 under
load; go-remote gate item stands) · 1,796 rendered words · 88 internal
links in main, 79 unique anchor texts, none used >2×, zero bare
anchors · skin guarantee: css-drift check zero hardcoded hex/undeclared
vars in bundle · screenshots in _build/verify/shots/.

## ROUND 3 — HOMEPAGE REFINEMENT (founder audit response)
APPLIED:
- Two-mention disclaimer ceiling: homepage now has EXACTLY two independence/
  trademark mentions — cta-band disclaimer (#home-cta) + AI-summary entry
  (#home-ai-summary, question reworded to "Is TechBrot the same as Intuit or
  QuickBooks?"). Removed: in-brief disclosure block, in-brief source line
  "independent — not Intuit", and the FOOTER trademark sentence (it was a
  third mention). ⚠ Footer removal conflicts with design readme rule 7
  ("disclaimer mandatory … and in the footer") — founder ruling applied;
  reconcile upstream. CEILING IS NOW A STANDING RULE for all non-support
  pages; support silo keeps above-fold disclosure per Sheet 7.
- Hero: H1 unchanged (already the thesis). Subheading replaced with the
  ruled keyword line ("Certified QuickBooks ProAdvisors, accountants, and
  advisors … CFO advisory."). CTAs + intent params unchanged.
- Trust-row tiles per stat ruling: "4× ProAdvisor certifications" ·
  "2 verified Clutch reviews" · "Fixed-fee written-scope pricing" ·
  "Response within one business day" (replaced "U.S.-based" tile; all
  claims baseline-sourced).
AUDIT/PAGE MISMATCH (flagged, rule 7 — sections referenced by the audit
that DO NOT EXIST on the homepage as built; nothing invented):
- "Where accounting is going" section · "What clients say"/"Client work"
  review sections (no verified review TEXT is available in repo sources —
  needs founder-supplied Clutch quotes before any reviews section ships) ·
  stat-tile block ("U.S. incorporated"/"100% vetted") · Learning Center
  guide cards · buyer-routing "Where are you, actually?" · comparison
  table · David Westgate operator block · five-question AI-summary (built
  one has three) · engagement-process section · states grid.
  → The built homepage is the minimal T-HUB per brief §6. If the audit
  reflects a richer target homepage from the design chat, supply that
  section spec and it builds next round.
VERIFIED AFTER EDITS: battery ALL GREEN · overflow clean 360/390/768 ·
Lighthouse a11y 100 / BP 100 / SEO 100 (prod artifact, zero failing audits)
· Intuit-mention containers = exactly {#home-ai-summary, #home-cta}.
PERMISSIONS: .claude/settings.local.json updated per founder instruction.

## MODE: LOCALHOST-ONLY (locked by founder 2026-06-12, until explicitly lifted)
- NO git commits / push / remote setup. NO Cloudflare Pages. NO public preview.
- This file is the commit log until "go remote". First commit then captures
  the whole verified state at once.
- **GO-REMOTE GATE (ALL must pass BEFORE first deploy):**
  1. Fail-closed env safety proven with PREVIEW HEADERS (X-Robots-Tag) on the
     hosting platform — meta-level noindex already proven locally.
  2. `/quickbooks/file-review/` BUILT — homepage CTAs point at it; no CTA may
     404 on a public preview or production (founder ruling 2026-06-12).
  3. Live form test submission (marker TEST-MIGRATION-2026) posted to the
     real Apps Script endpoint and verified in the sheet.
  4. Lighthouse mobile ≥95 re-verified on calibrated infrastructure
     (PageSpeed Insights vs the Cloudflare preview). This machine's
     benchmarkIndex is 192 (~8× below Lighthouse reference) — local mobile
     scores are not calibrated; desktop run on clean build: perf 81 (LCP
     1.16s, host-limited TBT), a11y 100, BP 100, SEO 100, CLS 0.
  5. Production builds from clean output (`npm run build:prod` → _site-prod).
  6. OG-image batch round complete (founder ruling 2026-06-13): auto-generated
     OG cards for all pages via the proven sister-site pattern; the verbatim
     schema/og references (e.g. contact-og.png) resolve to real assets.

## STATUS SNAPSHOT
| Item | State |
|---|---|
| Part A baseline | ✅ FROZEN (139 repo pages) — _build/baseline/ |
| Part B design fetch | ✅ COMPLETE — _design/techbrot-design-system/ · tokens verified · drift documented below |
| Part C factory | ✅ Homepage-scope complete (11ty + bundle + env safety + battery + form/intent JS) |
| Session 2 homepage | ✅ BUILT + VERIFIED on localhost — David photo now live via sharp pipeline (round 7) |
| /quickbooks/file-review/ (T-BOFU #1) | ✅ ROUND 6 BUILT — go-remote gate item 2 CLOSED |
| /contact/ (FIRST ELEVATION, T-BOFU) | ✅ ROUND 7 ELEVATED — content-equity differ GREEN, awaiting founder audit of the elevation pattern |
| Sharp pipeline ({% photo %}) | ✅ ROUND 7 BUILT — unblocks editorial breaks, OG images, operator photos |
| Next build | After elevation-pattern audit: /quickbooks/cleanup/{focused,standard,complex}/ + T-GUIDE trio queue (ruling 13) |

## LOCALHOST URLS (for founder check)
- Homepage: http://localhost:8080/ (eleventy --serve, preview build, live-reload)
- Form harness: http://localhost:8080/dev/form-test/?intent=monthly (try other keys)
- Production artifact: http://localhost:8125/ (serve, _site-prod, what Lighthouse measured)
- Lighthouse reports: _build/verify/lighthouse-home.report.html / lighthouse-desktop.report.html

## PART B — DESIGN INVENTORY (handoff: "TechBrot Design System", fetched 2026-06-12)
- css/: 00-fonts (Google CDN) · 01-tokens (115 tokens, LOCKED) · 02-base
  (LOCKED) · 03-components (101KB, full vocabulary) · 04-pages (141KB,
  page-scoped) · 05-kit (brief-§5 kit) — full set archived in _design/.
- 18 React components in 6 groups · 5 tier templates (t-hub/mofu/bofu/guide/
  location) · ui_kits/website (rendered tier truth) · guidelines specimens ·
  assets: logo-t-black/white.png (200×240 raster — vector still pending),
  motif-ledger-full/single.svg (currentColor, explicit dims).
- TOKEN VERIFICATION: accent #841E1E ✓ · Fraunces/Inter/JetBrains Mono ✓ ·
  fs-12…fs-68 (16 steps) ✓ · space-1…space-40 (15 steps) ✓ · reduced-motion
  zeroing built into tokens ✓.
- DRIFT FOUND (handoff, documented — NOT zero):
  a. 29 hardcoded hex in 03-components.css lines ~4099–4360: the pasted-in
     "contact success panel + intent enrichment" block (off-palette #1A1A1A/
     #DDD9D0/#F0EEE9/#F8EDED/#E4C9C9) + var() fallbacks in the integrations
     dark band. NOT imported into our bundle. Re-tokenize when the contact
     page is rebuilt; upstream fix needed in the design project.
  b. 47 undeclared custom-property usages (--fs-11 ×19, --font-display ×10,
     --fs-19/26, --lh-13/15, --space-9) in the kb-* family + 04-pages.
     Affected sections not imported (except INTAKE FORM → --fs-11 aliased,
     see extensions). Upstream fix needed.

## SESSION-1 EXTENSIONS TO DESIGN CSS (all marked `EXTENSION` in-file; upstream to Claude Design pending)
| File | Change | Why |
|---|---|---|
| 01-tokens.css | `--fs-11: 0.6875rem` added by name | used-but-undeclared in INTAKE FORM (drift b) — brief rule: never inline |
| 01-tokens.css | `--text-eyebrow` → ink-mute (was ink-faint) | #8B8B85 measured 3.27:1 at 12-13px — WCAG AA fail; brief's "tokens AA-clean" premise was wrong |
| 01-tokens.css | font stacks gained metric-matched fallbacks | CLS 0 during webfont swap |
| 02-base.css | `text-rendering: optimizeLegibility` → `auto` | forced slow text path; multi-second Style&Layout on throttled mobile. CONFLICTS WITH "02-base LOCKED" — founder ratification requested |
| 03-components.css (subset) | `.service-card__list a, .service-card__cta { padding-block: var(--space-1) }` | Lighthouse/WCAG 2.2 24px touch-target fail |
| 06-chrome.css | `.site-base a` underline; lockup img explicit 25×30 box | link-distinguishability fail; CLS guard |
| 00-fonts.css | rewritten: self-hosted latin variable woff2 (Fraunces n+i, Inter), metric fallbacks | brief §4 mandate; kills render-blocking CDN CSS. JetBrains Mono NOT self-hosted yet (no usage on built pages) |
- extract_css.py preserves files carrying EXTENSION blocks on re-runs.
- BOM INCIDENT (fixed, battery-visible): PowerShell-written CSS carried UTF-8
  BOMs; concatenation put U+FEFF mid-bundle and esbuild escaped it INTO the
  next selector — `\feff :root` matched nothing and silently killed every
  token. Bundler now strips per-file BOMs. Lesson: all CSS bytes verified in
  the rendered page, not just in the file.

## FACTORY STATE (Part C, homepage scope)
- 11ty 3.1.6 · src/ + _includes/layouts/ (base.njk, t-hub.njk) + _data/
  (site.json single-source NAP/phone/emails/socials/formEndpoint/ga4Id ·
  intents.json · schemaGlobal.json — global @graph extracted VERBATIM from
  baseline: Organization+ProfessionalService, Brand, 2 Person, WebSite).
- CSS: ONE site.min.css bundled in eleventy.before (esbuild), budget-gated.
  Round byte report: source 48,935B / 56,320B budget (7,385B headroom) ·
  minified 30,518B. Curated sections: buttons, hero, tldr, ai-summary,
  service cards, final-cta, intake form (03) · in-brief, framework, cta-band,
  trust-row, disclosure, hero tiers (05) · chrome (06).
- Env fail-closed: preview = noindex,nofollow meta + NO gtag + dev pages
  built; production = index,follow + gtag + dev pages EXCLUDED + clean output
  dir (_site-prod). Proven both ways this round.
- JS: tb-analytics.js (phone_click delegation; events console-only outside
  production) · tb-forms.js (live contact.js port per form-contract.json +
  honeypot company_website [NOT in payload] + intent engine driven by
  intents.json + payload logger outside production).
- intents.json: 90 live keys + lookups + `home` (additive). 11 unmapped live
  keys still to resolve (TODO 5).
- Battery (_build/battery/run_battery.py, ALL GREEN this round): output-URL
  set vs baseline∪queue · anchor/internal-link audit · intent-key existence +
  front-matter duplicate check · founder-name-zero (visible text only) ·
  CSS hex/undeclared-var drift · CSS byte gate.

## HOMEPAGE (T-HUB) — built this round
- Sequence per brief §6: dark hero--hub + inline full-grade ledger motif
  (explicit 560×720, currentColor=accent) → in-brief + independence
  disclosure → TL;DR #home-tldr (speakable-paired) → silo card-grid
  #home-services (routing root: accounting, quickbooks, advisory, vs,
  find-an-accountant, pricing + trust/methodology/partners via list links)
  → ai-summary #home-ai-summary (3 Q&A incl. not-Intuit disambiguation)
  → framework ("Two delivery modes. One operating standard." — REAL coined
  concept from /about/ + /about/methodology/ baseline copy) → trust-row
  (Certified ProAdvisor ×4 products · "2 verified Clutch reviews" stated
  honestly · fixed-fee · U.S.-based) → cta-band + mandatory trademark
  disclaimer. No FAQ (not in T-HUB sequence; none fabricated).
- Funnel wiring: hero primary → /contact/?intent=home · hero ghost →
  /quickbooks/file-review/?intent=home (slug CONFIRMED by founder, queued
  next) · cta-band → /contact/?intent=home. Informational links carry no
  intent (nav links ≠ conversion CTAs — interpretation noted for audit).
- Schema: global @graph verbatim + per-page WebPage (speakable #home-tldr-body)
  + BreadcrumbList + ItemList(6 silos), all via dump|safe.
- Section IDs follow #home-* convention (anchors-are-equity rule).

## VERIFICATION RESULTS (this round, localhost)
| Check | Result |
|---|---|
| Battery (6 checks) | ✅ ALL GREEN |
| Lighthouse desktop (clean prod artifact) | perf 81 · a11y 100 · BP 100 · SEO 100 |
| CLS / LCP / FCP (desktop) | 0 / 1162ms / 756ms |
| Lighthouse mobile | NOT CALIBRATED on this host (benchmarkIndex 192; scores 39–72 across identical runs) → go-remote gate item 4 |
| Overflow 360 / 390 / 768 | ✅ clean (scrollWidth ≤ viewport, zero offenders) |
| Focus states | ✅ 2px #0F4FCC outline, 3px offset (spec) |
| Reduced motion | ✅ token-level zeroing (built into 01-tokens) |
| Keyboard form | ✅ filled + submitted via keyboard/programmatic fill; required-field errors are role=alert |
| Founder-name-zero | ✅ visible text clean; Person schema only |
| Form payload | ✅ logged, matches form-contract.json incl. industry-overwrite quirk — _build/verify/form-payload-logged.json. NOT posted (localhost mode) |
| Analytics gating | ✅ preview: zero external requests; lead_submit/phone_click console-logged "NOT sent" |
| Intent routing | ✅ ?intent=monthly swaps headline/CTA/service pre-check exactly like live engine |

## BUILD-NEW QUEUE — 25 URLS RESERVED (locked slugs; _build/build-new-queue.json)
1. / — ✅ BUILT (round 4) — quick-5 micro-fix round 6
2. /quickbooks/file-review/ — ✅ BUILT (round 6) — go-remote gate item 2 CLOSED
3.–25. /resources/guides/{quickbooks-cleanup,hire-a-bookkeeper,
   bookkeeping-rates}/ (3 T-GUIDE, go-remote blockers) · /about/team/ ·
   /reviews/ · /legal/ · /quickbooks/cleanup/{focused,standard,complex}/
   · /find-an-accountant/ + 16 state pillars — "URL reserved —
   content builds fresh."

## FOUNDER RULINGS LOG
1. 2026-06-12 — No live-site fetches; sources = repo + Claude Design only.
   Archived form/intent JS + form-contract.json KEPT as the payload ruling.
2. 24 live-but-not-in-repo URLs → BUILD-NEW queue, URLs locked.
3. baseline.json frozen (139 pages) as content-equity contract.
4. Build order: HOMEPAGE first, then silo-by-silo elevation.
5. LOCALHOST-ONLY mode; commit/push/Cloudflare deferred to "go remote".
6. GA4 events implemented but disabled outside production.
7. No live form POST until go-remote; payload logged instead.
8. /quickbooks/file-review/ CONFIRMED (Sheet 8); queued; go-remote blocker.
9. 2026-06-12 (round 6) — file-review intent registry: `file-review`
   added; canonical key for every problem/symptom/error CTA.
10. 2026-06-12 (round 6) — tb-forms.js intent engine: empty URL params
    no longer wipe HTML defaults; collect() loop still writes
    data-meta fields "ALWAYS" so the live form contract is preserved.
11. 2026-06-13 (round 7) — DAVID PHOTO: build the sharp pipeline NOW
    (factory infrastructure), wire the photo through it. No interim
    raw <img>.
12. 2026-06-13 (round 7) — CSS GATE: minified hard gate raised 55→58 KB
    (59,392 B). Conditions: source trim pass scheduled during silo
    elevation (target <75 KB source); 58 KB is the CEILING THROUGH
    CUTOVER — the gate does not move again.
13. 2026-06-13 (round 7) — BUILD ORDER: pattern-locking first — /contact/
    elevation (first elevation of an existing page) BEFORE cleanup tiers
    and the T-GUIDE trio. One page, then stop for audit.
14. 2026-06-13 (round-7 audit) — ELEVATION PATTERN APPROVED. The 4
    /contact/ removals SIGNED OFF. Chrome-relocated differ class created
    (footer/nav headings ≠ removals). Calendly FAQ #7 placement KEEP —
    real founder link, correct urgent-intent placement; flag closed.
15. 2026-06-13 — OG images: one auto-generated batch round before
    go-remote (gate item 6); not per-page work.
16. 2026-06-13 — BATCH ORDER: first elevation batch = legal silo +
    standalone trust pages (6 pages: legal×4, /trust/, /partners/),
    chrome:full, tier tints per table; legal pages skip the Q/A
    architecture; trust + partners get the full standing pattern.

## STANDING RULES (locked)
- ROUND REPORTS ON DISK (founder rule 2026-06-13, EXTENDED same day):
  at the end of every round, the full round report is written to
  _build/reports/round-N.md in addition to the terminal output. The file
  must be COMPLETE STANDALONE — it ends with an "OPEN ITEMS / STOPPED AT"
  section carrying every question, flag, and pending ruling exactly as
  stated in the terminal sign-off. The founder audits from the file
  alone. (equity_report.py <url> generates the per-item differ for
  every elevation report.)
- CHROME-RELOCATED differ class (founder ruling 2026-06-13): baseline
  headings that exist only as site chrome (footer columns, nav) are
  classified CHROME-RELOCATED (present in the full-chrome variant), not
  removals — no per-page sign-off. True removals (e.g. the newsletter
  band) stay JUSTIFIED-REMOVED; the newsletter-band class itself is
  SIGNED OFF (2026-06-13).
- NO CHAINED/COMPLEX SHELL ONE-LINERS (founder rule 2026-06-12): every
  multi-step operation lives as a named script in _build/scripts/ —
  dev-server.ps1 · build-prod.ps1 · battery.ps1 · lighthouse.ps1 [desktop]
  · lighthouse-page.ps1 [-Path -Slug -Preset] · overflow_probe.ps1 [path]
  · screenshots.ps1 / screenshots-file-review.ps1 / screenshots-contact.ps1
  · shot_anchor.ps1 [-Path -Anchor -Out] · form_probe.ps1 (file-review)
  · form_probe_contact.ps1 · scout_intents.py · equity_report.py [url]
  (+ lh_summary.py). Reuse every round; add new scripts there.
  Encoding gotcha (2026-06-13): em-dashes in .ps1 written as UTF-8
  no-BOM parse as CP-1252 smart quotes in PowerShell 5.1 and break
  string terminators — ASCII punctuation only in scripts.
- ONE CLASS SYSTEM SITE-WIDE — pages compose Design-system classes only; new
  patterns enter the component layer as named token-driven classes, reported
  with byte cost. (This round's additions: only the EXTENSION fixes above.)
- SECTION IDs are equity — existing IDs survive elevation; new pages use
  #<slug>-tldr / #<slug>-faq convention. Battery anchor audit every round.

## TODO LEDGER
| # | Item | Phase |
|---|---|---|
| 1 | NAV/FOOTER: no canonical design — minimal chrome shipping; do not invent | Until design ruling |
| 2 | Vector logo (current mark is 200×240 PNG; needed for favicon/large) | Founder asset |
| 3 | /about/network/ missing canonical (live defect) — fix at elevation | Elevation |
| 4 | Strip `<title>BSS-1-11ty</title>` artifact (139/139) at port | Elevation |
| 5 | ✅ CLOSED round 7 — all 11 keys added to intents.json (additive, canonical pricing); scout_intents.py reports 106/106 live keys mapped | DONE |
| 6 | Upstream the Session-1 EXTENSION fixes + drift list to the Claude Design project | Founder relay |
| 7 | 02-base `text-rendering` edit conflicts with "locked" — ratify or revert | Founder ruling |
| 8 | JetBrains Mono self-host (first page that uses kb-*/mono) | When needed |
| 9 | og:image / twitter:image — RULED 2026-06-13: single batch round of auto-generated OG cards for ALL pages (proven sister-site pattern) before go-remote. Added as GO-REMOTE GATE ITEM 6. Not per-page work | OG batch round |
| 10 | CSS budget tension at scale: full design CSS is ~275KB vs 55KB budget — per-round curation holds for now; founder ruling needed before the budget blocks elevation | Watch |
| 11 | Research-layer logging start (Sheet 5: "cannot backfill") | Founder decision |
| 12 | Funnel-logic-per-tier table (symptom/error→file-review · vs→/switch/ [PLANNED v2 — confirm before wiring] · guides→soft CTA · hubs→primary service CTA) — fill as tiers build | Part C cont. |
| 13 | `--color-accent-soft #B85050` flagged "avoid/possibly vestigial" by brief §4 — confirm removal upstream | Founder relay |
| 14 | ✅ CLOSED round 7 — sharp pipeline built ({% photo %}, @11ty/eleventy-img), David photo wired through it on the homepage team card; CLS 0 verified | DONE |
| 15 | ✅ CLOSED round 7 — gate re-ratified 58 KB (59,392 B), CEILING THROUGH CUTOVER; source trim pass scheduled during silo elevation (target <75 KB source) | DONE |
| 16 | LIVE DEFECT (same class as #3): live /contact/ links /legal/privacy/ — URL never existed (real page /legal/privacy-policy/). Fixed on the elevated page; check other live pages for the same dead link during silo elevation | Elevation |
| 17 | SOURCE TRIM PASS (ruling 2 condition a): comment condensing in 06-chrome/07-extensions during silo elevation; target source <75 KB (currently 84,652 B) | Silo elevation |
