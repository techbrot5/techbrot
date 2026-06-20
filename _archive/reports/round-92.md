# Round 92 — Industry high-fee verticals (6 pages)

**Phase:** GROWTH (flip held). **Founder-confirmed scope:** 5 distinct high-fee verticals + 1 consolidated specialty-trades (NOT the 3-way split). **Trust-fund boundary held.** **Battery:** GREEN.

## WHAT I DID — built 6 high-fee industry pages (t-mofu, cloned from the closest existing industry page)
1. **/accounting/industries/property-management/** — (clone of real-estate) managing OTHERS' properties: tenant deposit/trust ledgers, monthly owner statements + owner draws + 1099-MISC, CAM, mgmt-fee revenue, AppFolio/Buildium → QB. 7 FAQ.
2. **/accounting/industries/amazon-sellers/** — (clone of ecommerce) FBA settlement-report reconciliation, reserves, FBA inventory/COGS, marketplace-facilitator sales-tax nuance. 6 FAQ.
3. **/accounting/industries/shopify-sellers/** — (clone of ecommerce) Shopify Payments payout reconciliation, gift-card liability, multi-channel, seller-remits-own-sales-tax nuance. 6 FAQ.
4. **/accounting/industries/short-term-rentals/** — (clone of real-estate) per-listing P&L, Airbnb/VRBO payout reconciliation, occupancy/lodging tax, Schedule C-vs-E (deferred to CPA), Guesty/Hostaway → QB. 8 FAQ.
5. **/accounting/industries/law-firm-trust-accounting/** — (clone of legal) the deep IOLTA / three-way-reconciliation dive; /legal/ stays the broad hub and links to it. 8 FAQ.
6. **/accounting/industries/specialty-trades/** — (clone of home-services) ONE consolidated HVAC/plumbing/electrical page: per-ticket parts/labor margin, service agreements as deferred revenue, tech/truck profitability, consumer-financing reconciliation, ServiceTitan/Housecall Pro → QB. 7 FAQ.

Each = `.njk` + `.11tydata.js` (WebPage + BreadcrumbList + Service + ItemList + FAQPage + QAPage). Industries hub (`industries.11tydata.js`) extended with 6 new rows (additive → inbound links + ItemList).

## DECISIONS / HONESTY
- **TRUST-FUND BOUNDARY (founder ruling) held verbatim** on property-management, law-firm-trust, short-term-rentals: **we keep records and reconcile only — we NEVER hold, control, sign on, or disburse client/tenant/escrow/IOLTA funds.** The attorney/manager controls the account and makes every disbursement. Bar-rule/real-estate-trust compliance deferred to the state bar / real-estate commission / the client's attorney. IOLTA page states this in hero, in-brief, a dedicated "what we never do" section, 3 FAQ, and the Service schema.
- **Tax deferral:** Schedule C-vs-E, depreciation, cost-seg, nexus determinations, certified-payroll determinations — concepts explained for literacy, the DETERMINATION deferred to the client's CPA/authority. We keep the books that support it; we don't file income taxes.
- **Sales-tax nuance accurate:** Amazon = marketplace facilitator generally collects/remits (still must be recorded; seller may have own non-Amazon nexus); Shopify = seller generally remits its own (Shopify Tax only calculates). Both defer the nexus call to CPA/authority.
- **Distinct-or-merge held:** each links to its broad parent (real-estate / ecommerce / legal / home-services) and does NOT restate it. Consolidated specialty-trades (1 page) per founder ruling — HVAC/plumbing/electrical as one coherent page, not 3 near-dups.
- Canonical pricing only (reference /pricing/); no industry-specific invented prices. Founder-name-zero; not-affiliated-with-Intuit (and not-affiliated-with Amazon/Shopify/Airbnb/FSM/financing vendors). No fabricated stats/clients/reviews; no AggregateRating/Review schema. CTAs canonical only (intent=accounting / file-review + phone).

## VERIFICATION
- BATTERY GREEN. url-set 572 within contract · links 53,034 resolve · founder-zero · css 80,259B/83,968B · variety-12a ≤1 numbered/page.
- 6 pages: faq-min-6 (7/6/6/8/8/7) · FAQPage verbatim-matches accordion.
- **variety-12a fix (this round):** initial run failed on amazon/shopify/specialty-trades (2 numbered systems each — the ecommerce/home-services template carries a numbered `.num` deliverables grid AND a numbered process-diagram). Per the RS1 component map, kept the process-diagram (real sequence) numbered and converted the parallel deliverables grid to plain cards (removed `.num`). All 3 now pass.
- equity n/a (net-new growth pages).

## COUNT
COUNT: total pages live = 567 (orientation `*.html` non-dev; round-91 561 + 6 new) · re-skinned (142) + growth = 425 · pages added THIS turn = [/accounting/industries/{property-management, amazon-sellers, shopify-sellers, short-term-rentals, law-firm-trust-accounting, specialty-trades}/] · remaining in current cluster (industry high-fee) = 0 · next cluster = into-QB migration split (4: xero/wave/sage/freshbooks-to-quickbooks; spreadsheets skipped — already at /quickbooks/setup/migration-from-spreadsheets/)

## NEXT / FLAGS
- NEXT (round 93): into-QB migration split — break the generic /quickbooks/migration/other-software-to-qb/ into exact-match children (xero/wave/sage/freshbooks-to-quickbooks); keep the generic page as the umbrella hub (not 301'd — it serves the generic query + cross-links the children).
- DO-NOT-BUILD (founder): /results/ + /case-studies/ (data-gated) · switching-away/reverse-leave-QB (off-brand) · /quickbooks/emergency/ (covered by help/emergency-help).
- HOLD (founder decision): risk-reversal/guarantee page (only with real guarantee terms) · direct booking/scheduler (flip-gate infra, parked with the form handler).
- FLIP-BLOCKER #6 grows: 6 new industry pages join the inferred-clean list (LIVE axe/overflow pending).
