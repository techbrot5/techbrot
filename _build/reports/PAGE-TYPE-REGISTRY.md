# PAGE-TYPE-REGISTRY — living truth for the migration + design reset
Updated: 2026-06-14 · maintained every migration round · MUST be complete by cutover.

This registry is the **input to the design reset**. Every page is tagged to a TYPE; every
TYPE has an exact ordered section list + the components each section uses. The design reset
re-skins by TYPE, so the registry must cover EVERY type — including types that don't exist
yet (blogs, research, switch, state children) so the reset covers them too.

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

### TYPE: state landing  → tier t-location  [NOT YET BUILT — first new tier to prove]
/find-an-accountant/{state}/. Sections: hero--location + hero__motif (state contour ledger
motif) · proof-strip--dark · state-specific intro · buyer-card routing to services ·
trust-row · **intake-form (state variant)** · sticky call-bar (mobile) · FAQ · cta-band.
Rich: hero__motif · proof-strip · intake-form · buyer-card.

### TYPE: state child (city / industry / service)  → tier t-location  [NOT BUILT]
/find-an-accountant/{state}/{city|industry|service}/. Lighter t-location: compact hero ·
local intro · service routing · intake-form (state) · FAQ. The NY orphan tree (~43) is the
existing template/source content.

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

### TYPE: comparison (vs)  → tier t-mofu  [baseline: 5 to migrate; expansion: more]
/vs/{a-vs-b}/. Sections: hero--compact · byline-block · **vs-table** (fair, "where they
win") · verdict · buyer-card · FAQ · meta-reviewed. The /vs/ hub = t-mofu/t-hub ItemList routing.

### TYPE: support / speak page  → tier t-bofu + HONEST-TRIAGE (Sheet 7)  [baseline: speak-to-expert; expansion: support silo ~20]
/quickbooks/speak-to-a-quickbooks-expert/, /quickbooks/support/*. MANDATORY honest-triage:
disclosure banner ABOVE THE FOLD · never "official" · intake qualifies Intuit billing/account
intent AWAY · never implies Intuit affiliation. Sections: disclosure banner · hero · triage
intro · proof-strip · intake-form (with Intuit-routing qualifier) · FAQ.

### TYPE: reviews listing  → tier t-mofu  [NOT BUILT]
/reviews/, /reviews/by-*. Verified Clutch reviews only; NO AggregateRating until 5+ real (rule 4).

═══════════════════════════════════════════════════════════════
PART 3 — PER-PAGE TIER ASSIGNMENTS for the 104  ⚠ PROPOSED, NOT DECIDED
═══════════════════════════════════════════════════════════════
**STATUS: PROPOSED — founder decides on preview (open item #5 is OPEN).** Every tier below is
a proposal derived from blueprint Sheet 1 (funnel + schema), used only to build-to-FLOOR so
the page passes the per-tier gate. NONE is a final decision. The **t-bofu-vs-t-mofu calls in
particular are NOT settled** — the founder reviews each on preview and may re-tier. Do not
treat any assignment here as hardened; do not cite this as the founder's decision. When the
founder rules a tier on preview, move it to a separate DECIDED column with the date.

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
