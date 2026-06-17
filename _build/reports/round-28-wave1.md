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

## Update 2026-06-17 (session 2 cont. — NY CHILDREN FAN-OUT, founder OK'd)
**✅ NY CHILDREN FAN-OUT DONE (`5c9e8db`).** All 37 remaining NY children elevated to the split hero +
T-account figure + trust chips via `_build/scripts/ny_children_elevate.py` (idempotent, line-based/CRLF-safe,
front-matter add only; skipped the already-done NYC child). Coverage: 11 cities + cities-hub · 8 industries +
industries-hub · 13 service children · 4 honest-triage. The whole NY tree (pillar + 38 children) now wears the
elevated state hero — visually consistent with the pillar + NYC child.
- VERIFY: equity GREEN site-wide (all NY children content-equity PASS — front-matter add only, no heading/FAQ/
  schema touched) · battery green (design-fidelity 136, variety-12a, css-drift, manifest) · CSS 76,515B/83,968B ·
  overflow clean 360/390/768 + axe 0/29 spot-checked on a service child (cleanup-bookkeeping); city/industry/
  service render-checked for the elevated hero. CLS 0 (fixed-viewBox figure).
- **SCOPE NOTE (transparent):** this fan-out is the elevated HERO on the CURRENT t-location tier for all 37.
  The formal **t-location→t-bofu tier-TAGGING re-tier** for the 13 service + 4 honest-triage children
  (data-tier/cta-tint only — the hero is already identical via heroFigure, and the conversion structure
  proof-strip/intake-form already lives in their bodies) is DEFERRED to a clean follow-up pass: it needs
  per-page tierClass/bodyClass reconciliation and the honest-triage ones touch STOP-GATE #2, so it shouldn't be
  bundled into a hero sweep. **Honest-triage COPY untouched** (hero re-skin only) — STOP-GATE #2 not crossed.

## Update 2026-06-17 (session 2 cont. — STATE LANDINGS, founder OK'd)
**✅ STATE LANDINGS DONE (`209768b`).** CA/TX/FL/IL elevated to the same split hero + T-account figure +
state-tailored trust chips (e.g. "California businesses · all 58 counties"). The legacy dark neutral-motif hero
is retired for them; `heroMotif` left in front-matter (now unused/harmless — only the dark else-branch reads it).
equity GREEN · battery green (css 76,515B) · overflow clean 360/390/768 · axe 0/36 (Texas spot-check) · CLS 0.
**The ENTIRE find-an-accountant silo (43 pages: NY pillar + 38 NY children + 4 state landings) now wears the
elevated state hero — visually consistent end to end.**

## Update 2026-06-17 (session 2 cont. — autonomous: 2-CTA hero cap + tier re-tag) + REVIEW REPORT
**✅ HEROES CAPPED AT 2 CTAs (`9aee383`).** Founder: heroes show ≤2 action buttons. Enforced once per layout via
`hero.actions.slice(0,2)` (t-hub/t-mofu/t-bofu/t-guide/t-location + util-hero) — site-wide + future-proof; the 3rd
CTA (usually the tel "Speak to a ProAdvisor", already in the header + sticky call-bar) is dropped. ctaBand (final
CTA) untouched. Verified exactly 2 hero CTAs; kept pairs sensible — e.g. NY pillar [Book the discovery call · Send
the Discovery Brief], faq [Get the free file review · Book the discovery call].
**✅ TIER RE-TAG (`e134674`).** 13 NY service + 4 honest-triage children t-location→t-bofu via
`_build/scripts/ny_retier_bofu.py` (layout swap + `section--tier-hub`→`section--tier-bofu` + bodyClass `page--bofu`;
bodyClass is cosmetic, unused in CSS). data-tier=bofu confirmed; cities/industries stay location. design-fidelity
PASS (bofu via proof-strip/intake-form/hero-figure) · equity GREEN · overflow clean 360/390/768 · axe 0/29 (urgent-
bookkeeping). **Honest-triage compliance copy UNTOUCHED** — these pages use copy-based disclosure (hero subheading
"…not emergency tax filing or representation. We deliver the books; your CPA files." + the "what we can do / won't
pretend" scope-split section), not a `.disclosure` component; re-tag changed only 6 front-matter/class lines.

### ⚑ REVIEW REPORT (founder-requested — items to glance at)
1. **2-CTA cap — what got dropped.** Every hero with 3 CTAs lost its 3rd (the tel "Speak to a ProAdvisor" in
   nearly all cases). Heroes now have NO direct phone button on pages that previously did; the phone remains in the
   header, the mobile sticky call-bar, the call-block/call-breakout sections, and final CTA bands. If you want the
   PHONE to be one of the 2 kept on any specific type, say which and I'll reorder that type's hero actions.
2. **Tier re-tag is tagging/tint only.** The 17 pages now render as t-bofu (correct conversion tier) but their
   BODIES are still the as-built location-clone content (same sections). No content rewrite was done (out of scope +
   equity). If you want these conversion pages restructured to the leaner t-bofu money-page shape (proof-strip →
   intake/call → FAQ), that's a separate content pass — flag it.
3. **Empty commit `c5b78d1` ("_")** slipped into history between the two commits (my mistake; zero tree impact).
   Left in place (rewriting pushed history is riskier than a harmless empty commit) — can squash on the next
   housekeeping pass. Flagging for transparency.
4. **STOP-GATE #2 (honest-triage) — currently preserved, not re-opened.** Compliance copy is intact as-built. No
   change made. If you want the honest-triage copy re-reviewed/tightened, that's the gate to open next.
5. **`heroMotif` now unused** on CA/TX/FL/IL + NY pillar (the dark-hero else-branch only). Harmless; can be removed
   in cleanup.

## Update 2026-06-17 (session 2 cont. — WAVE-2 ASSESSMENT against captured per-type heroes)
Verified every Wave-2 type against **Gallery 06 (Heroes Per Type)** + the captured templates. Gallery 06's rule:
"No uniform hero — each page type gets a first screen fit to its job; legal/utility get a clean document treatment,
never a marketing hero." So Wave-2 is NOT a uniform figure-hero fan-out. Findings:
- **legal ✅ DONE** — disclaimer/terms/dpa already render the `.legal-doc` document header (eyebrow "Legal" + title
  + Effective/Updated dates), zero marketing hero, zero cta-band. Exactly the Gallery 06 legal frame. (The
  `Legal - Template.dc.html` file is an unreliable copy-paste of the home/marketing shell — Gallery 06 is the real
  spec; flagged.)
- **product/mofu ✅ FIT** — e.g. /quickbooks/desktop/, /which-plan-is-right/, /about/methodology/: compact hero
  (skin re-cut) + vs-table/buyer-card body + CallBand + capped CTAs. Gallery 06 mofu adds a small "diagram tease"
  (OPTIONAL enhancement, not a gap).
- **comparison/vs ✅ FIT** — /vs/* : compact hero + vs-table verdict + CallBand. Matches Gallery 06 "honest verdict".
- **pricing ✅ FIT** — /pricing/ (t-bofu): compact hero + real fixed-fee tier TABLES + CallBand. Gallery 06 shows
  3 featured tier TILES in-hero (OPTIONAL enhancement).
- **location-child ⚠ CONFLICT (founder decision)** — see review item below.

### ⚑ REVIEW REPORT (Wave-2)
1. **location-child hero CONFLICT (the one real Wave-2 decision).** Gallery 06 specifies the location child = a
   LIGHTER hero, explicitly "NOT the pillar hero" (the A4 fix, flagged in RED in the capture: no map, no big form,
   distinct from pillar). The NY-children fan-out (`5c9e8db`, which you OK'd) instead gave the **11 cities + 8
   industries (+ the NYC child)** the PILLAR's figure-split hero — i.e. it re-introduced the A4 clone the capture
   warns against. The service children are now t-bofu, where a figure hero IS capture-correct (money-page), so
   those are fine; the pillar keeps its figure (correct). **To fix cities/industries to the capture I'd add a new
   light-compact location-child hero (no figure, no dark contour, distinct from the pillar) and re-apply to ~19–20
   pages.** That's a structure change to just-approved pages, so I did NOT do it unilaterally. **Recommend: build
   the lighter child hero per the capture.** Your call: keep the figure hero (override the capture), or switch
   cities/industries to the lighter hero.
2. **Wave-2 needed almost no new code** — the skin re-cut (Commit 1) + migration bodies already put mofu/comparison/
   pricing/legal into fit-to-type states. Optional capture enhancements remain (mofu diagram-tease, pricing featured
   tiles) — low priority, flag if you want them.
3. **`Legal - Template.dc.html` is unreliable** (contains the marketing/home shell, not a legal doc) — used Gallery
   06 as the legal spec instead. Noting so it isn't trusted later.

## Update 2026-06-17 (session 2 cont. — location-child lighter hero + honest-triage proof)
**✅ LOCATION-CHILD LIGHTER HERO (`71d98b1`).** Founder ruled: make cities/industries lighter (A4 fix — children
must NOT clone the pillar's heavy figure hero). Added a t-location `heroLight` branch (lighter compact conversion
hero: eyebrow + heading + lede + 2 CTAs + trust; NO figure, no dark contour, no motif — clearly subordinate). Swept
all 19 city + industry leaf pages heroFigure→heroLight via `ny_children_lighten.py`. Pillar keeps its figure;
t-bofu service children keep theirs (money-page, capture-correct). equity GREEN · battery green · design-fidelity
PASS (location pages pass via buyer-card/proof-strip) · overflow clean 360/390/768 · axe 0/27 (Brooklyn) · CLS 0.
NOTE: the 2 sub-hubs (cities.njk, industries.njk) kept the figure hero (hub-like routing) — leave or lighten later.

**⏸ STOP-GATE #2 — HONEST-TRIAGE PROOF (`52de277`) — AWAITING FOUNDER OK.**
Read the captured Honest Triage template + Gallery 06: the honest-triage signature is an **amber disclosure ATF
banner**. Proved on `/quickbooks/speak-to-a-quickbooks-expert/`: new opt-in `.disclosure--warn` (amber --caution-*
tokens: soft bg + border + deep ink + warning icon) makes the not-Intuit / route-billing-login-to-Intuit boundary
unmissable above the fold. **Compliance COPY kept verbatim** (the thorough round-26 founder-approved disclosure —
NOT downgraded to the captured shorter phrasing; ours is a superset). The exact copy on the page:
> **TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm — not Intuit, not QuickBooks
> Customer Support, not QuickBooks Live, and not Intuit's expert or ProAdvisor referral line.** Calling this number
> does not reach Intuit. … For any Intuit account, billing, subscription, login, password, or product-bug matter,
> contact Intuit directly. What this team does is the accounting work inside your own books. …
> + the explicit checks-list split (talk-to-this-team vs go-to-Intuit, with the Intuit support link).
equity GREEN (36h/7faq/27schema) · axe 0/31 (amber AA) · battery green · CSS 77,023B. **FOUNDER: verify the copy →
OK the triage fan-out** (then: amber disclosure across all triage pages + lighten the 4 NY triage heroes to the
compact triage hero per the capture).

**▶ NEXT (after triage OK, FULLY AUTONOMOUS toward 200):** triage fan-out → rest of Wave-2 (optional mofu diagram-
tease / pricing tiles) → find-an-accountant LAST → toward 200. Hard gates held. Only STOP = the triage gate (now).

## Update 2026-06-17 (session 2 cont. — triage fan-out + link-TYPE UX system + cutover-gate audit)
**✅ TRIAGE FAN-OUT (`d55bc0b`)** — all 5 triage pages: amber `.disclosure--warn` ATF banner; 4 NY triage compacted
+ call-breakout CALL conversion. **✅ LINK-TYPE UX + ARROW (`b21605e`)** — action/contact = partial→full, nav/list =
clean→hover, animated `.lnk-arrow` (118 wrapped), ONE source, axe 0v/28p, WCAG focus intact. Standing UX rule R8
recorded. **RE-SKIN COMPLETE: 142/142 built pages on the elevated system; battery green throughout.**

### ⛳ CUTOVER-GATE AUDIT (2026-06-17, for the flip-vs-build decision)
| Gate | Status |
|---|---|
| Real phone | ✅ (877) 751-5575 tokenized site-wide |
| Full site equity-GREEN + battery | ✅ 142/142 · 0 reds · CSS 77,525B/83,968B |
| GA4 | ✅ wired (`G-K2Z8GK69Z5`, fail-closed: fires only when TB_ENV=production) + tb-analytics event layer |
| Orphan 301s | ✅ 3 staged in `_redirects` (find-an-accountant→/accounting/, /reviews/→/trust/, /about/team/→/about/) |
| **Form POST handler** | ❌ **PENDING** — forms POST to `/contact/submit` + `/api/pillar-lead`; NO Cloudflare Pages Function in repo (`functions/` absent). Forms will fail on submit until a handler is added. |
| **OG image per type** | ❌ **PENDING** — base head has og:title/desc/url/type + twitter `summary`, but NO `og:image`/`twitter:image`. No social/AI preview image. |
| **Intuit ProAdvisor badge artwork** | ❌ **PENDING** — no badge asset in `src/assets`; founder supplies. |
| **baseline-vs-live-prod re-crawl** | ⚠ PARTIAL — 3 known orphans 301'd; full re-crawl to catch any other live-prod URL not yet done. |
| /resources/ interim repoint | ⚠ nav "Resources" → /resources/research/ interim (safe; real /resources/ hub is post-redesign). |

**▶ HOLDING for founder flip-vs-build decision (autonomous paused per founder).**

## Update 2026-06-17 (GROWTH PHASE started — founder held flip, build to 200 first)
Build order CONFIRMED (founder): glossary → CA/TX/FL/IL children → support → more-QB → tools → guides →
pricing+blog → trust/reviews/etc. Honesty LOUDER for growth (real claims only).
**⏸ GLOSSARY TYPE PROOF (`ec7002c`) — AWAITING FOUNDER GLANCE before fan-out.**
- `/glossary/bank-reconciliation/` (the proof entry): substantive, citable definition (speakable) · why-it-matters
  · how-it-works + the signature reconcile-flow diagram (genuinely fits) · book-vs-bank clarification · related-
  cluster links (cleanup/monthly/migration) · CALL conversion · 6 real FAQ. Schema: **DefinedTerm + WebPage +
  BreadcrumbList + FAQPage** (verbatim). t-guide compact, elevated system.
- `/glossary/` index: **CollectionPage + DefinedTermSet** landing; terms grid grows as the type fans out.
- VERIFY: battery GREEN (url-set/manifest/links/design-fidelity 138/variety/css 77,515B) · overflow clean
  360/390/768 · axe 0/27 · CLS 0. Honesty: real definitions, firm byline, no fabricated counts.
- **Glossary-type pattern banked:** compact t-guide · DefinedTerm schema · speakable definition · why/how/clarify
  · related-grid · CALL · 6 FAQ (only where genuinely substantive — FAQ optional per term to avoid padding;
  faq-min-6 gate means a term either carries 6+ real Q or omits the faq__list).
**▶ NEXT (after glance): fan out glossary** (real definitions only, one per term, link into clusters) → then
CA state children → down the order. Report every URL each turn.

## Update 2026-06-17 (GLOSSARY fan-out WAVE 1 — proof approved, data-driven system + 7 terms)
**✅ GLOSSARY WAVE 1 (`232faa3`).** Built the scalable data-driven glossary system: ONE source
`src/_data/glossary.js` → paginated `entry.njk` + the index, sharing the array (migrated the approved proof in).
7 real, substantive, citable terms — **quality over count, real-or-omit held:**
- `/glossary/bank-reconciliation/` (FAQ ×6 + reconcile-flow diagram) · `/glossary/chart-of-accounts/` ·
  `/glossary/double-entry-accounting/` (T-account diagram) · `/glossary/general-ledger/` ·
  `/glossary/accrual-vs-cash-basis-accounting/` · `/glossary/catch-up-bookkeeping/` (before/after diagram) ·
  `/glossary/month-end-close/` · index `/glossary/`.
- Each: real definition + why-it-matters + cluster links + CALL; DefinedTerm + WebPage + BreadcrumbList schema +
  speakable. Signature diagram ONLY where it genuinely fits (3 of 7). FAQ only where 6+ real (bank-rec only).
  Honesty: accurate definitions, firm byline, no fabricated counts. battery green · design-fidelity 144 ·
  overflow clean 360/390/768 · axe 0/27 · CLS 0.
- Adding a term now = one entry in `glossary.js` + its URL in build-new-queue.json.
**▶ NEXT (autonomous): more glossary terms (real ones only) → then CA state children** (real localized tax/context
per state — founder reviews closely). Report every URL each turn.

COUNT: total pages live = 150 · re-skinned (142) + growth this phase = 8 · pages added THIS turn = none (R9
standing-count-rule setup; prior build = glossary wave 1: /glossary/ + /glossary/{bank-reconciliation, chart-of-
accounts, double-entry-accounting, general-ledger, accrual-vs-cash-basis-accounting, catch-up-bookkeeping,
month-end-close}/) · remaining in current cluster (glossary) ≈ ~18 candidate quality terms (real-or-skip; working
target ~25) · next cluster = CA/TX/FL/IL state children.

## Update 2026-06-17 (GLOSSARY wave 2 + elevated in-brief)
**✅ GLOSSARY WAVE 2 (`8868799`) — +7 substantive terms** (real-or-omit held; no forced diagrams):
/glossary/{accounts-receivable, accounts-payable, trial-balance, profit-and-loss-statement, balance-sheet,
fractional-cfo, sales-tax-nexus}/. Each: real definition + why + cluster links + CALL; DefinedTerm/WebPage/
BreadcrumbList schema + speakable. FAQ only on sales-tax-nexus (6 real Q; nexus determination + filings deferred
to CPA/EA — honesty held). Fixed a bad link (sales-tax → /accounting/sales-tax-compliance/).
**✅ UX — elevated in-brief intro/lede (`8868799`, ONE source = `src/assets/css/05-tiers.css` `.in-brief`):**
hairline top separator + generous top air (border-top 1px + padding-top space-8) + refined 62ch measure +
quieter sourced caption. Reads as its own editorial section, not body text under the hero CTAs. Inherited by
EVERY tier that renders `.in-brief`, site-wide. axe 0/25 · overflow unaffected (border/padding only) · CLS 0.
Battery green · design-fidelity 151 · CSS 77,693B.

COUNT: total pages live = 157 · re-skinned (142) + growth this phase = 15 · pages added THIS turn =
/glossary/accounts-receivable/, /glossary/accounts-payable/, /glossary/trial-balance/,
/glossary/profit-and-loss-statement/, /glossary/balance-sheet/, /glossary/fractional-cfo/,
/glossary/sales-tax-nexus/ (7 glossary terms) · remaining in current cluster (glossary) ≈ ~10–12 candidate quality
terms (real-or-skip) · next cluster = CA/TX/FL/IL state children.

## Update 2026-06-17 (HERO+INTRO width fix — site-wide, one source)
**✅ HERO+INTRO WIDTH FIX (`f54d507`).** Compact-hero pages had a width mismatch: hero `.hero` 46em / lede 32em
vs `.in-brief` container-narrow 820px → hairline overhang + empty-looking right. Fixed at the component level
(`src/assets/css/05-tiers.css`): the compact hero block, its lede, and the in-brief now all share
`--measure-prose` (680px) at the same left edge. Verified /glossary/: heroW = inbriefW = 680, same left (47px) —
hairline aligns cleanly. Split heroes unaffected (`.hero--split .hero{max-width:none}` overrides; the figure
fills the right = intentional asymmetric layout). ONE source, every compact hero+intro page inherits it. CLS 0,
axe unaffected (measure only), battery green, CSS 77,691B.
**SHOWN FOR FOUNDER CONFIRM (consistency across types before locking as standard):** /glossary/ (compact, fixed) ·
/quickbooks/desktop/ (compact mofu, fixed) · /accounting/ + /quickbooks/faq/ (split heroes — figure fills right,
in-brief at the 680 content measure below).

COUNT: total pages live = 157 · re-skinned (142) + growth this phase = 15 · pages added THIS turn = none
(site-wide hero+intro width fix; no new pages) · remaining in current cluster (glossary) ≈ ~10–12 candidate
quality terms (real-or-skip) · next cluster = CA/TX/FL/IL state children.

## Update 2026-06-17 (GLOSSARY COMPLETE — final wave, real-or-skip held)
**✅ GLOSSARY TYPE COMPLETE (`6667592`) — FINAL COUNT: 24 terms + index = 25 pages.** Added 10 final distinct
substantive terms: bookkeeping-vs-accounting, cost-of-goods-sold, cash-flow-statement, depreciation,
certified-quickbooks-proadvisor (FAQ ×6, incl. explicit not-Intuit-affiliation Q), retained-earnings,
deferred-revenue, opening-balance, 1099-vs-w2, journal-entry (T-account diagram). **Held the bar: STOPPED at 24
distinct substantive terms — did NOT pad toward 25/46.** Diagrams + FAQ only where genuine. Honesty held
(depreciation tax method · 1099 classification · sales-tax nexus all deferred to CPA/EA). All 24:
DefinedTerm/WebPage/BreadcrumbList schema + speakable + CALL. battery green · design-fidelity 161 · url-set 173 ·
axe 0/26 · overflow clean 360/390/768 · CLS 0.

COUNT: total pages live = 167 · re-skinned (142) + growth this phase = 25 · pages added THIS turn =
/glossary/{bookkeeping-vs-accounting, cost-of-goods-sold, cash-flow-statement, depreciation,
certified-quickbooks-proadvisor, retained-earnings, deferred-revenue, opening-balance, 1099-vs-w2,
journal-entry}/ (10 terms) · remaining in current cluster = 0 (GLOSSARY COMPLETE at 24 terms) · next cluster =
CA/TX/FL/IL state children — **NEW-TYPE PROOF: build ONE CA child → STOP for founder glance before fan-out.**

## Update 2026-06-17 (CA STATE-CHILD PROOF — STOP for founder glance)
**⏸ CA STATE-CHILD PROOF (`fd6a898`) — `/find-an-accountant/california/cities/san-francisco/` — AWAITING FOUNDER GLANCE.**
Treated as the make-or-break new-type proof for the whole state cluster. GENUINELY localized SF/CA content, NOT a
name-swapped NY clone — the un-clonable hook is the **SF Gross Receipts Tax (taxed on gross receipts, not net
income → can owe at a loss)**, layered on California's **$800 minimum franchise tax** (FTB, owed regardless of
profit) + income-based LLC fee, **CDTFA** sales/use tax (7.25% base, ~8.625% in SF), and **AB5** worker
classification. Plus SF-specific local context, areas (SoMa/FiDi/Mission/etc.), tax stack, SF verticals
(tech/SaaS → /accounting/industries/saas/, restaurants, etc.), and 8 SF FAQ. **Find-replace test: CA→TX reads
false at every line** (TX has no state income tax, no $800 franchise-on-existence, no SF-style city
gross-receipts tax, no AB5). Honesty held: real facts, deferred to FTB/CDTFA/SF Treasurer/CPA; no fabricated
stats/clients; firm byline; the 2 real Clutch reviews not duplicated. Lighter city-child hero (heroLight),
CALL conversion, WebPage/BreadcrumbList/Service/FAQPage schema + speakable, glossary cross-links
(sales-tax-nexus, deferred-revenue, 1099-vs-w2). battery green · design-fidelity 162 · url-set 174 · overflow
clean 360/390/768 · axe 0/27 · CLS 0. **FOUNDER: review the localization → approve to fan out the state children.**

COUNT: total pages live = 168 · re-skinned (142) + growth this phase = 26 · pages added THIS turn =
/find-an-accountant/california/cities/san-francisco/ (1 — CA state-child proof) · remaining in current cluster =
state children fan-out PENDING founder approval of this proof · next cluster (after approval) = CA cities/
industries fan-out, then TX/FL/IL.
