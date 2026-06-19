# Round 91 — Pricing children (5 BOFU per-service pricing pages)

**Phase:** GROWTH (flip held). **Founder-confirmed order:** pricing children first; research layer = capture-pipeline-only (no publishing). **Battery:** GREEN on clean rebuild.

## WHAT I DID — built 5 per-service pricing-detail pages (t-bofu, cloned from /pricing/)
1. **/pricing/bookkeeping/** — monthly bookkeeping pricing; 3 tiers (Essentials $400–$700 · Standard $700–$1,400 · Complex $1,400–$2,500+/mo), what drives the tier, what's included. 8 FAQ.
2. **/pricing/cleanup/** — cleanup ($1,500–$15,000+) + catch-up ($2,000–$20,000+); forensic-pricing rationale, QB cleanup tier figures pulled verbatim from the live tier pages, "Compounding Reconciliation Drift" / "Historical Accounting Debt" DefinedTerms. 8 FAQ.
3. **/pricing/payroll/** — payroll management $150–$800+/mo; what drives the fee; **software subscription billed separately by the provider** (provider-neutral, no provider prices quoted). 8 FAQ.
4. **/pricing/cfo/** — fractional CFO $3,000–$8,000+/mo, by application; priced on judgment not transaction volume; advisory-not-tax/audit boundary. 8 FAQ.
5. **/pricing/quickbooks-setup/** — QB setup $750–$5,000+ one-time; what drives it across QBO/Desktop/Enterprise; **QB subscription billed by Intuit separately**; "TechBrot Setup Protocol" DefinedTerm. 8 FAQ.

Each = `.njk` + `.11tydata.js` (WebPage + BreadcrumbList + Service + OfferCatalog/PriceSpecification[range-as-description, no fabricated point price] + FAQPage). Cannibalization guard held: each links to `/pricing/` (canonical overview) + its service page, does NOT restate them. `/pricing/` got a new "Detailed pricing, by service" card section linking all 5 (inbound, non-orphan).

## DECISIONS / HONESTY
- **Canonical figures ONLY** (Sheet 0) — every range is the canonical value; no invented numbers, no "average client pays" stats. Always a range; "exact fixed fee in writing within 3 business days of a free discovery call" throughout. No Review/AggregateRating.
- **Honesty correction (mid-round):** the quickbooks-setup agent added "many businesses qualify for ProAdvisor discount pricing on the subscription, which we'll point you to" (page body + one FAQ). REMOVED both — it risked contradicting the site-wide "we earn no commission / independent, not Intuit's pricing" stance and asserted an unconfirmed benefit. Now reads clean: subscription billed by Intuit separately, not resold/marked up, prices deferred to Intuit.
- **CTA:** canonical labels only (Book the discovery call / Get the free file review / Speak to a ProAdvisor on the QB-specific setup page). Intents: pricing + file-review. No new labels, no new intents.
- Founder-name-zero; not-affiliated-with-Intuit on every page; tax-filing-excluded where relevant.

## VERIFICATION
- BATTERY GREEN (clean rebuild). url-set 566 within contract · links 52,409 resolve · founder-zero · css 80,259B/83,968B · cta-lexicon 16 sanctioned · manifest · variety-12a ≤1 numbered/page.
- All 5 pricing pages: faq-min-6 (8 each) · zero quick-5↔FAQ overlap · FAQPage verbatim.
- **design-fidelity fix:** initial run failed on /pricing/{cfo,cleanup,payroll}/ (no tier-correct BOFU handoff component). Added the parent's "path to a fixed fee" `flow` (flow__step — permitted BOFU component) to each; all 3 now pass. (bookkeeping had a flow, quickbooks-setup had fix-steps — passed first time.)
- equity n/a (net-new growth pages).

## COUNT
COUNT: total pages live = 561 (orientation `*.html` non-dev; prior 556 + 5 new) · re-skinned (142) + growth = 419 · pages added THIS turn = [/pricing/bookkeeping/, /pricing/cleanup/, /pricing/payroll/, /pricing/cfo/, /pricing/quickbooks-setup/] · remaining in current cluster (pricing children) = 0 · next cluster = industry high-fee (~6, round 92)

## OPEN / NEXT
- Research layer: capture pipeline confirmed intact + honest at N=0/collecting; NOTHING published (founder rule: zero numbers until N≥20 with sample size). No build there.
- NEXT: industry high-fee (~6) — property-management, amazon-sellers, shopify-sellers, short-term-rentals, law-firm-trust-accounting + 1 consolidated specialty-trades (trust-fund boundary held: records/reconcile only, never hold/disburse funds).
- FLIP-BLOCKER #6 grows: 5 new pricing pages join the inferred-clean list (LIVE axe/overflow pending).
