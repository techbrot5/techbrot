# PAGE-TYPE-REGISTRY — living truth for the migration + design reset
Updated: 2026-06-15 (Deliverable 0 reconcile) · MUST stay complete through the redesign (now BEFORE cutover).

This registry is the **input to the design reset**. Every page is tagged to a TYPE; every
TYPE has an exact ordered section list + the components each section uses. The design reset
re-skins by TYPE, so the registry must cover EVERY type — including types that don't exist
yet (blogs, research, switch, state children) so the reset covers them too.

> **⟳ RECONCILED 2026-06-15 (post-migration Deliverable 0).** Path B migration is COMPLETE (139/139
> baselines). Part 1's "Built" lists below were captured mid-migration and are now NON-EXHAUSTIVE (every
> baseline is built); treat Part 1 as the per-TYPE **section/component spec** (still accurate), not a
> build-status inventory — for build status see git + FINAL-MIGRATION-REPORT. **TIER RULINGS NOW DECIDED
> (founder, supersede Part 3's "PROPOSED" caveat):** (a) routing **hubs = t-hub**; (b) **conversion
> children = t-bofu** (specific paid services + honest-triage); (c) **t-location ONLY the state PILLAR**
> (state landing); state cities/industries = t-location landings OK, but state SERVICE/conversion children
> are t-bofu; (d) consideration/product/comparison = t-mofu; (e) FAQ/reference = t-guide; (f) honesty =
> illustrative-not-fabricated (R5). **AS-BUILT vs RULED:** build-to-floor used ONE proven tier per silo,
> so some conversion children shipped on t-location (NY children) or t-mofu (accounting services) and are
> queued for **t-bofu re-tiering in the redesign phase (before cutover)** — the per-URL queue lives in
> FINAL-MIGRATION-REPORT Sections A + D. Do NOT re-tier here yet; the redesign does it.

Tier→layout: t-hub=layouts/t-hub.njk · t-mofu=t-mofu.njk · t-bofu=t-bofu.njk ·
t-guide=t-guide.njk · t-location=t-location.njk. The design-fidelity gate (battery #12)
asserts each page carries ≥1 rich component its tier permits (PLACEMENT-MAP).

═══════════════════════════════════════════════════════════════
PART 1 — BUILT PAGE TYPES (exact section lists, from shipped pages)
═══════════════════════════════════════════════════════════════

### TYPE: silo-hub  → tier t-hub
Built: /quickbooks/, /accounting/, /accounting/advisory/, /pricing/, /about/, /partners/.
Sections (ordered): hero--hub + hero__motif (dark band) · tldr/in-brief · quick-5
(ai-summary--ruled) · buyer-card routing grid · flow diagram (flow__step) · pull-quote ·
prose/stat-row · trust-row · FAQ accordion · cta-band--light + tier tint.
Rich components: buyer-card · flow__step · pull-quote · stat__delta · hero__motif.

### TYPE: consideration / product / comparison  → tier t-mofu
Built: /quickbooks/online/, /about/methodology/, /trust/. (desktop in progress.)
Sections: hero--compact · in-brief/tldr · **byline-block** (top) · quick-5 · **vs-table**
(comparison/editions) · **buyer-card** routing · prose sections (stack-8, NOT review-card) ·
**pull-quote** · operator/trust-row · **meta-reviewed** (foot) · FAQ · cta-band.
Rich: byline-block · vs-table · buyer-card · pull-quote · meta-reviewed · stat__delta.
CTA RULE (ruling 2): t-mofu products = file-review-PRIMARY.

### TYPE: conversion / money page  → tier t-bofu
Built: /accounting/payroll-management/ + the 9 (fractional-cfo, catch-up/cleanup/monthly
bookkeeping, sales-tax, qb cleanup/migration/payroll/setup). [tier of the 9 under founder
review — open item #5.]
Sections: hero--compact (chrome minimal, no nav) · **proof-strip** (first body section) ·
definition · process-diagram · deliverables (checks-list) · quick-5 · buyer-card signals ·
pricing (stack-8) · operator + trust-row · **intake-form** (shared partial, before FAQ) · FAQ.
Rich: proof-strip · intake-form · flow__step · (problem-pattern opt).

### TYPE: reference / long-form guide  → tier t-guide
Built: /quickbooks/faq/.
Sections: hero--compact · in-brief · **byline-block** · **guide-grid** (sticky **toc** +
article.prose) · **pull-quote** · featured Q-block · reviewer section · related grid ·
**meta-reviewed** · FAQPage.
Rich: toc__label · guide-grid · byline-block · meta-reviewed · pull-quote · stat__delta · diagram-figure.

### TYPE: error / symptom problem-page  → tier t-guide (problem-pattern variant)
Built: /quickbooks/help/error-codes/ (hub) + h202, 15240, 3371, ps038, c-series,
error-6000-series, unrecoverable-error.
Sections: hero--compact + **error-badge** in eyebrow · disclosure · **byline-block** ·
credentials · definition · quick-5 · causes (**stack-8**) · **fix-steps** (compact numbered
self-fix) · signals (stack-8) · **call-breakout** (before operator) · operator + trust-row ·
**meta-reviewed** · FAQ · related.
Rich: error-badge · fix-steps · call-breakout · byline-block · meta-reviewed.
Hub variant: byline-block + call-breakout + meta-reviewed + families/signals as stack-8;
keeps its engagement-process process-diagram.

### TYPE: standalone form / legal  → EXCLUDED from design-fidelity gate (own patterns)
/contact/, /quickbooks/file-review/ (intake-form pages); /legal/* (legal-doc); 404.

═══════════════════════════════════════════════════════════════
PART 2 — NOT-YET-BUILT PAGE TYPES (intended sections — design reset MUST cover these)
═══════════════════════════════════════════════════════════════
(from v4 Sheet 1/7/8; sections are intended, refined when first built)

### TYPE: state landing (PILLAR)  → tier t-location  [✅ BUILT — NY pillar + CA/TX/FL/IL landings; tier PROVEN]
/find-an-accountant/{state}/. **t-location is for the PILLAR ONLY** (founder ruling). Sections:
hero--location + hero__motif (state contour ledger; NY contour for NY, neutral motif-align-full for
CA/TX/FL/IL via the `heroMotif` override) · in-brief · buyer-card routing · trust-row · intake-form ·
sticky call-bar · FAQ · cta-band. Rich: hero__motif · proof-strip · intake-form · buyer-card.
State strategy (founder): NY built full (pillar + 38 children); CA/TX/FL/IL = landings only (no children);
other states' children build POST-REDESIGN.

### TYPE: state child (city / industry / service)  → see ruling  [✅ NY's 38 BUILT (t-location, build-to-floor)]
/find-an-accountant/{state}/{city|industry|service}/. **FINAL tiers per founder ruling:** cities + industry
landings = t-location (consideration, OK as built); **service + honest-triage children = t-bofu** (conversion
— currently shipped t-location, in the re-tiering queue: FINAL-MIGRATION-REPORT Section A2/A3). The NY tree
(38 children) is the built template/source content; non-NY states' children build post-redesign.

### TYPE: research / dataset article  → tier t-guide (research dress)  [1 built: /resources/research/]
/resources/research/{study}/. Sections: hero--compact · byline-block · **dataset-header** ·
guide-grid + toc · prose with **stat-cite** (max 2/page) · figures (**fig-caption**) ·
methodology · meta-reviewed · FAQ. Rich: guide-grid · byline-block · meta-reviewed · diagram-figure · stat__delta.

### TYPE: guide article  → tier t-guide  [LOCKED queue: 3 go-remote-blocker guides]
/resources/guides/{topic}/. Same as reference/long-form guide type (toc/guide-grid/byline/
pull-quote/meta-reviewed). ~16 planned.

### TYPE: glossary term  → tier t-guide (compact)  [NOT BUILT — ~45]
/glossary/{term}/. Sections: compact hero · definition (speakable) · in-context usage ·
related terms · CTA. Rich: byline-block or pull-quote (light).

### TYPE: tool / calculator  → tier t-mofu (tool variant)  [NOT BUILT — ~9]
/tools/{calc}/. Sections: hero--compact · **tool-panel** (radio-tiles / stepper) ·
**tool-result** · **tool-cta** (always hands off to file-review) · explainer prose · FAQ.

### TYPE: blog post  → tier t-guide (article)  [NOT BUILT — blog silo]
/blog/{slug}/. Article: byline-block · prose · pull-quote · related · meta-reviewed.

### TYPE: case study  → tier t-mofu (proof)  [NOT BUILT — ~12]
/case-studies/{slug}/. Sections: hero--compact · situation/approach/result · stat__delta
(honest, real engagements only) · pull-quote · CTA. NO fabricated case studies (rule 4).

### TYPE: switch page  → tier t-bofu (conversion)  [NOT BUILT — switch silo, 4]
/switch/from-{competitor}/. Sections: hero--rule · proof-strip · vs-table (us vs them, fair)
· migration steps (flow) · intake-form · FAQ. Conversion-tier.

### TYPE: comparison (vs)  → tier t-mofu  [✅ BUILT — 5 baseline (hub + bookkeeper-vs-accountant + bench/pilot/qb-live); expansion: more]
/vs/{a-vs-b}/. Sections: hero--compact · byline-block · **vs-table** (fair, "where they
win") · verdict · buyer-card · FAQ · meta-reviewed. The /vs/ hub = t-mofu ItemList routing.

### TYPE: support / speak page  → tier t-bofu + HONEST-TRIAGE (Sheet 7)  [✅ speak-to-expert BUILT (national) + NY speak-to-a-proadvisor + the 4 NY honest-triage; expansion: support silo ~20]
/quickbooks/speak-to-a-quickbooks-expert/, /quickbooks/support/*. MANDATORY honest-triage:
disclosure banner ABOVE THE FOLD · never "official" · intake qualifies Intuit billing/account
intent AWAY · never implies Intuit affiliation. Sections: disclosure banner · hero · triage
intro · proof-strip · intake-form (with Intuit-routing qualifier) · FAQ.

### TYPE: reviews listing  → tier t-mofu  [NOT BUILT]
/reviews/, /reviews/by-*. Verified Clutch reviews only; NO AggregateRating until 5+ real (rule 4).

═══════════════════════════════════════════════════════════════
PART 3 — PER-PAGE TIER ASSIGNMENTS  ✅ ALL BUILT (139/139) · tiers below are AS-BUILT (build-to-floor)
═══════════════════════════════════════════════════════════════
**STATUS (reconciled 2026-06-15): every page is BUILT.** The tiers below are the AS-BUILT (build-to-floor)
tier each page shipped on. Open item #5 is now resolved by the founder TIER RULINGS in the header reconcile
block. **The FINAL tier (for the redesign) follows those rulings; where the as-built tier differs, the page
is in the re-tiering queue:**
- **DECIDED FINAL tiers:** hubs = t-hub · consideration/product/comparison = t-mofu · conversion children
  (paid services + honest-triage) = t-bofu · state PILLAR only = t-location · FAQ/reference = t-guide.
- **RE-TIER QUEUE (as-built ≠ final; fixed in the redesign, before cutover — see FINAL-MIGRATION-REPORT):**
  · NY service + honest-triage children (~17) shipped t-location → **t-bofu** (Report Section A2/A3).
  · accounting services children (controller/outsourced/virtual-accounting) + standalones (financial-
    statements, job-costing, month-end-close, reconciliation-services, chart-of-accounts-setup) shipped
    t-mofu → review for **t-bofu** (Report Section D2).
  · NY cities/industries + accounting industry landings stay t-location / t-mofu respectively (consideration
    — no re-tier).

QUICKBOOKS-16:
- t-mofu (product/comparison/about): /quickbooks/desktop/, /enterprise/, /which-plan-is-right/,
  /proadvisor-team/, /consulting/, /payroll/setup/, /payroll/multi-state/, /payroll/year-end/.
- t-mofu (comparison): /quickbooks/payroll/vs-gusto/.
- t-bofu (conversion) OR t-guide (how-to): /quickbooks/migration/{desktop-to-online,
  migration-cleanup, other-software-to-qb, quickbooks-to-xero} = t-bofu/conversion;
  /quickbooks/migration/balances-wrong-after-conversion/ = t-guide (HowTo schema).
- t-bofu + HONEST-TRIAGE: /quickbooks/speak-to-a-quickbooks-expert/.
- t-guide (FAQ): /quickbooks/payroll/faq/.

VS-5: /vs/ = t-mofu (or t-hub ItemList) routing · 4 children = t-mofu comparison.
PARTNERS-1: /partners/faq/ = t-guide (CollectionPage+FAQPage).

ACCOUNTING-39 (from Sheet 1 funnel):
- t-hub: /accounting/bookkeeping/, /accounting/services/, /accounting/industries/ (ItemList hubs).
- t-mofu: advisory children (cash-flow-management, budgeting-forecasting, kpi-reporting,
  business-performance-review, financial-strategy); services children (controller-services,
  outsourced-accounting, virtual-accounting); standalones (financial-statements, job-costing,
  month-end-close, reconciliation-services, chart-of-accounts-setup); 18 industries children.
- t-guide (FAQ): /accounting/faq/, /accounting/advisory/faq/, /accounting/bookkeeping/faq/,
  /accounting/industries/faq/.

FIND-AN-ACCOUNTANT-43: t-location (landing) + t-location-child (cities/industries/services).
  CA/TX/FL/IL landings + the NY orphan tree (~39). NY is the content template.
