# Round 28 — WAVE 1 re-skin (per-type proof → fan-out) · phone-readable summary = the ROUND REPORT block in chat
Full detail log for the elevated re-skin. Token+font re-cut detail is in `round-27-capture-plan.md`.
Standing rules: BUILD-TRACKER RS1–RS4 (structural-upgrade map, variety gate, restyle-only, type-wave),
CUTOVER GATE, PACE (per-type proof → automate fan-out).

## Commits (preview-11ty)
- `a2be13b` token+font re-cut · `73c5d54` money page proof · `5d31386` home + premium process + variety gate
- `910d028` mid-mega nav + light footer (global chrome) · `9e5cec5` hub proof (/accounting/) + nav nowrap + fidelity vocab
- (this round) hub fan-out + final-band tighten + phone-cleared

## Type proofs + fan-out status
| Type | Proof page | Status |
|---|---|---|
| money/bofu | /accounting/bookkeeping/cleanup-bookkeeping/ | ✅ proven (founder OK) |
| home | / | ✅ done |
| global chrome | nav + footer (all pages) | ✅ done (mid-mega, light footer, nowrap) |
| hub (t-hub) | /accounting/ | ✅ proven (founder OK) → ✅ FANNED OUT (9 t-hub pages) |
| guide (t-guide) | — | ▶ next |
| state pillar (t-location) | NY pillar + 1 NY child | pending |
| contact | /contact/ | pending |
| honest-triage | /quickbooks/speak-to-a-quickbooks-expert/ | pending |

## Elevated component library (old → handoff map; LIVE)
call-block (replaces forms) · deliver-card (replaces .num grid) · premium numbered process (circle
numbers, no grey rule) · split hero + signature figure (figure-taccount / figure-cleanup-beforeafter) ·
dark final band (one earned dark moment) · featured pricing tier · mid-mega nav + light footer accordion.
Battery design-fidelity teaches the new vocab (hero-figure, call-block, deliver-card) per tier.

## Hub fan-out (this round)
t-hub layout DEFAULTS the elevated light split hero (signature = T-account unless page sets heroFigure)
+ dark final band (unless ctaBand.dark==false). One layout edit fanned all 9 t-hub pages:
/ · /accounting/ · /quickbooks/ · /accounting/advisory/ · /accounting/bookkeeping/ · /accounting/services/
· /accounting/industries/ · /about/ · /resources/research/.
NOTE: founder's help/migration/payroll/vs/partners are NOT t-hub (other tiers) → their own waves.

## Variety gate (#12a automated)
Battery `variety-12a` hard-fails >1 numbered system/page. 40 pre-elevation pages exempted in
variety-exceptions.json — removed as each TYPE is re-skinned. #12b adjacency reported (64 pages).

## CUTOVER GATE status (flip-to-live pre-flight)
1. ✅ Real phone CLEARED — (877) 751-5575 / +18777515575 is REAL (founder 2026-06-17); central
   site.phone token; chrome+layouts+call-block reference it; no wrong/old number anywhere
   (contact.njk + tb-forms.js hold the same real number, not tokenised — tokenise at contact proof;
   dev/* samples use a fictional 555, preview-only/not shipped).
2. ⬜ Real Intuit ProAdvisor badge artwork · 3. ⬜ baseline-vs-prod re-crawl · 4. ⬜ /resources/ repoint
   (interim → /resources/research/) · 5. ⬜ full re-skin equity-green site-wide.

## Verification (this round)
Battery GREEN: equity all 139 (fanned hubs: about 48h, advisory 28h, bookkeeping 30h, industries 25h,
services 37h, quickbooks 36h) · variety-12a · design-fidelity 136 · cta-lexicon · manifest · CSS 69,671B/82KB.
Probes: /quickbooks/ (representative fanned hub) overflow clean 360/390/768 · axe 0 (28) · CLS 0 · a11y/BP/SEO 100.
Final-band tightened (96→64px) + bottom-right motif removed, site-wide.

---
## Update 2026-06-17 (autonomous run + pre-/clear checkpoint)
- **Q&A split (approved):** bookkeeping children (cleanup/catch-up/monthly) 10→5 intent Q&A via 11ty
  `override:aiSummary` (page 5 replaces the cascaded directory 5; generic 5 stay on the hub). Equity GREEN.
  `/vs/` inspected → NOT the bug (two intentional, correctly-headed blocks: aiSummary 4 + libraryQs 5). Left as-is.
  NOTE: dev server caches data modules — a clean `npx @11ty/eleventy` reflects the 5.
- **Endpoint type proof + fan-out:** new shared `partials/util-hero.njk` (eyebrow + H1 + lede + single CTA +
  phone, bordered). Applied to **contact** (proof), **file-review** (fan-out), **404** (refactored to share it).
  Stripped on endpoints: the 5-Q AI Q&A + numbered process + breadcrumb. Form stays centerpiece. contact equity
  GREEN (13 baseline headings; ai-summary/process/FAQ were additive; #contact-promise speakable preserved).
  CONTACT corrections (founder): hero LEFT-aligned (`heroAlign: left` → `.util-hero--left`); BRIEF/TLDR retained.
- **NAV-SCOPE fix (founder):** removed the blanket `chrome: minimal` from `t-bofu.njk` → FULL mega-nav is the
  default everywhere; MINIMAL nav (logo+phone) is now ENDPOINT-ONLY (/contact/ + /file-review/). 404 → full.
  AUDIT: 19 pages were minimal before; after, only contact + file-review (+ /dev/form-test, preview-only).
  **16 non-endpoint pages fixed** (money/BOFU: quickbooks/*, accounting/bookkeeping/*, advisory, migration/*).
  One source: chrome defaults to FULL (base.njk site-header `chrome != minimal`); endpoints opt into minimal.
- **Visual polish (founder spot-check):** nav warm→cold, breadcrumb spacing, premium prose inline-links,
  prose rhythm, trust-row elevation, related-cards (cleanup "around" → cards).
- Verification: battery GREEN throughout (equity all 139, variety-12a, design-fidelity, cta-lexicon, manifest);
  probed pages overflow clean 360/390/768 · axe 0 · CLS 0 · a11y/BP/SEO 100. CSS ~71KB/82KB.

## Update 2026-06-17 (session 2 — GUIDE proof + site-wide link-underline)
**✅ GUIDE PROOF (`792ba59`) — `/quickbooks/faq/`** (registry's canonical reference/long-form guide).
Read the locked `Guide - Template.dc.html`; the elevated guide article = split article-hero + signature
figure · byline · sticky TOC · prose w/ embedded diagram-feature · mid-article lead-magnet (dark, once).
The faq page already carried guide-grid + sticky TOC + byline + pull-quote + meta-reviewed; added the 3
missing elevated elements:
- **t-guide layout** now supports an OPT-IN split article-hero + signature figure (`heroFigure`, DEFAULT
  OFF — fit-to-purpose: legal/error keep the clean compact hero). hero.trust chips render in both variants.
  Mirrors the proven t-hub heroFigure pattern. faq set `heroFigure: "taccount"` + 3 trust chips.
- **`.diagram-feature`** (NEW token-only component, from the locked template) — a carded in-article
  signature diagram (distinct from the plain `.diagram-figure`). Partial `figure-reconcile-flow.svg`
  (book balance → 3 adjustments → bank reconciled, draw-on) placed in the **cluster-fixing** section
  (content-true: that cluster covers cleanup/reconciliation).
- **`.lead-magnet`** (NEW token-only component) — the one dark mid-article offer (after cluster 4).
  HONESTY (R5): the locked template offers a "one-page PDF" at `/resources/cleanup-checklist/` which does
  NOT exist → reframed to point at the REAL free file review (no fabricated download). Applying R5, not a
  new gate.
- VERIFY: equity GREEN (26 baseline headings · 35 FAQ · 26 schema) · axe 0/27 · overflow clean
  360/390/768 (sw 360/375/753) · CLS 0 (fixed-viewBox SVG) · design-fidelity PASS · variety-12a PASS ·
  css-drift PASS · CSS 74,714B→ (after underline) 75,939B / 83,968B gate. axe caught a contrast bug on the
  first pass (lead-magnet text inheriting `.article p` body color #2d384e on #0A0F1C = 1.62) → fixed by
  bumping `.lead-magnet .__title/.__sub` specificity to 0,2,0 + `--color-ink-inverted-soft` (~9:1). Re-axe 0.

**✅ LINK UNDERLINE — single site-wide source (`5c07840`)** (founder directive this session).
Unified ALL text-link underlines to the buyer-card treatment: short PARTIAL rule by default → animates to
FULL on hover/focus (faint ink → accent, 1.5px). **ONE source** = a consolidated `:is(...)` block in
`09-extensions.css` using a **background-gradient** underline (NOT a `::after` pseudo — a pseudo only
underlines a single-line box; the gradient also works on WRAPPING inline prose links). `02-base`
(`main a:not([class])`) + the prose-link color rules now carry ONLY colour, never the underline, so it is
never doubled. Covers: prose/inline, "Explore →" card links, heading-links, footer column links,
breadcrumb, TOC. **NAV primary links kept the captured pill-hover chrome** (the locked Guide-template nav
is pill-hover, no underline; underlining it would contradict design-ownership) — JUDGMENT CALL flagged for
a 5-sec founder confirm. Reduced-motion: width snaps, no animation.
- Fixed the founder's exact complaints on /quickbooks/: "Explore file cleanup →" (was full border-bottom)
  + "QuickBooks Payroll management" inline + "Monthly bookkeeping" heading-links → all now `45% 1.5px`
  partial → `100%` accent on hover (computed-style probe confirmed). axe /quickbooks/ 0/28.
- Source of truth: the block headed `LINK UNDERLINE — SINGLE SITE-WIDE SOURCE` in
  `src/assets/css/09-extensions.css`. Edit there to change link underlines anywhere.

## Update 2026-06-17 (session 2 cont. — breadcrumbs site-wide + nav underline + guide fan-out)
**✅ BREADCRUMBS on every page EXCEPT /contact/ (`0beee05`, founder directive).** t-hub layout now renders
the breadcrumb block (the 8 hubs already carried breadcrumb DATA → all 8 fixed at once: /accounting/ +
4 sub-hubs · /quickbooks/ · /about/ · /resources/research/). util-hero renders a gated breadcrumb; added
breadcrumb data to **file-review** + **404**; **contact** deliberately omits it. **Home (`/`) left without** —
a single-item "Home" crumb is meaningless (root); FLAGGED for founder (one line to add if wanted). Verified:
all hubs + file-review + 404 = breadcrumb present; contact = none; home = none.
**✅ NAV underline (`0beee05`, founder re-confirmed "nav" in the underline list).** Primary `.nav__link`s now
carry the SAME partial→full underline as everything else — single-line padded pills, so the EXACT buyer-card
`::after` pseudo is used (positions the rule under the text where the gradient can't); pill-hover dropped on
plain links to match the buyer-card; dropdown TRIGGERS keep their chevron + pill (they open menus). Computed
probe: nav `::after` width 59.9px partial (faint ink) → full accent on hover. axe /accounting/ 0/26, /quickbooks/ 0/28.
**✅ GUIDE FAN-OUT — reference sub-type (`bd23320`).** Elevated split article-hero + signature T-account figure
+ tailored honest trust chips on the 6 reference FAQ guides: /accounting/faq/ · /accounting/advisory/faq/ ·
/accounting/bookkeeping/faq/ · /accounting/industries/faq/ · /quickbooks/payroll/faq/ · /partners/faq/ (all
already carried guide-grid + byline + meta-reviewed). **Fit-to-purpose boundary:** error pages + the migration
HowTo + legal docs KEEP their compact/clean heroes (no marketing figure). equity GREEN all 6 · overflow clean
360/390/768 (/accounting/faq/ sw 360/375/753) · battery green · CSS 76,515B/83,968B.

## Update 2026-06-17 (session 2 cont. — STOP-GATE #1: NY pillar + 1 NY child)
**✅ STOP-GATE #1 PROVED (`d72642d`).** Read the locked `State Pillar - Template.dc.html` — the elevated
state-pillar hero is the **LIGHT split article-hero + signature T-account figure + trust chips**, NOT the legacy
dark state-contour hero. That contour hero was a Code-authored migration-floor invention; the captured design
supersedes it (design-ownership rule), so it's RETIRED for the pillar. Implementation:
- **t-location layout**: added a `heroFigure` opt-in (default OFF), mirroring t-hub/t-guide — light split hero +
  figure + trust when set, legacy dark-contour hero otherwise. Buttons non-inverted in the light variant.
- **`/find-an-accountant/new-york/`** (pillar): `heroFigure: "taccount"` + 3 NY trust chips. equity GREEN
  (72 baseline headings · 17 FAQ · 30 schema; the 2 removals — "Recent New York results." reframed to
  "Representative New York outcomes." per R5, + "The monthly brief." — are PRE-EXISTING founder-ruled, not mine).
  axe 0/36 · overflow clean 360/390/768 (sw 360/375/753) · CLS 0.
- **`/find-an-accountant/new-york/cities/new-york-city/`** (1 NY child, flagship city): same elevated hero +
  NYC trust chips. equity GREEN (21h · 8faq · 27schema) · axe 0/29 · overflow clean · CLS 0.
- CA/TX/FL/IL landings + the other 37 NY children UNCHANGED (dark hero) — await fan-out. CSS 76,515B (no new CSS;
  the split-hero/figure classes already existed). Battery green · design-fidelity · variety-12a.

**⏸ STOP-GATE #1 — awaiting founder review of the NY pillar + child before fanning out the NY children.**
**▶ NEXT (after OK):** fan out NY children per CONFIRMED re-tier rulings — cities (11) + industries (8) =
elevated t-location hero; service children (13) + honest-triage (4) → RE-TIER to t-bofu; CA/TX/FL/IL landings =
elevated t-location hero (neutral). Then STOP-GATE #2 (honest-triage copy) · Wave-2 registry types. Resume from
the "🔵 FRESH-SESSION RESUME" block in BUILD-TRACKER.
