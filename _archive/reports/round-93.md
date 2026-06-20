# Round 93 — Into-QB migration split (4 exact-match pages)

**Phase:** GROWTH (flip held). **Founder-confirmed:** built-but-thin fix — break the generic /quickbooks/migration/other-software-to-qb/ into exact-match children. **Battery:** GREEN.

## WHAT I DID — built 4 exact-match into-QB migration pages (t-bofu, cloned from other-software-to-qb)
1. **/quickbooks/migration/xero-to-quickbooks/** — Xero specifics: no native converter, chart/contacts/invoices/journals export; bank+reconciliation history don't carry (opening balances at cutover); tracking categories → classes/locations; verified to Xero trial balance. 8 FAQ.
2. **/quickbooks/migration/wave-to-quickbooks/** — Wave specifics: outgrowing free/basic (no classes, no real inventory, thin reporting); fair-to-Wave ("you might not need to switch yet"). 7 FAQ.
3. **/quickbooks/migration/freshbooks-to-quickbooks/** — FreshBooks specifics: invoicing-first, lighter double-entry; time-tracking → QB Projects; trigger = needing real balance sheet/inventory; conservative accounting-model claims. 8 FAQ.
4. **/quickbooks/migration/sage-to-quickbooks/** — Sage specifics: Sage family (50/Business Cloud/Intacct), nominal codes → chart of accounts, departments → classes/locations; **honest note: Sage Intacct is a higher tier — if a business needs it, QBO may be a downgrade, and we'll say so.** 7 FAQ.

Each = `.njk` + `.11tydata.js` (WebPage + BreadcrumbList + Service + HowTo + FAQPage; sage/freshbooks also DefinedTerm "Migration Integrity Protocol"). **Generic `other-software-to-qb` KEPT as the umbrella hub (not 301'd)** — enriched its 6 source-platform cards with inbound links to the 4 children (baseline equity GREEN — additive, no headings/FAQ/schema removed). spreadsheets-to-quickbooks SKIPPED (already at /quickbooks/setup/migration-from-spreadsheets/).

## DECISIONS / HONESTY
- **Built-but-thin fix:** high-intent "xero/wave/freshbooks/sage to quickbooks" searches no longer share one diluted generic page; each has a dedicated exact-match page. Distinct from the generic (umbrella, linked) and from /quickbooks/compare/quickbooks-vs-X/ (the should-you-switch comparison — cross-linked).
- **Honesty:** honest transfer caveats (what carries vs rebuilds vs doesn't — reconciliation history doesn't); fair to each competitor (outgrowing, not disparaging); Sage Intacct downgrade-honesty; no fabricated competitor pricing (deferred to vendor); canonical migration pricing only ($2,500–$10,000+, range, exact fee after free call); not-affiliated-with-Intuit-or-the-source-vendor; founder-name-zero; we-don't-file-taxes (CPA files). No fabricated stats/reviews; no AggregateRating/Review schema. CTAs canonical only (intent=quickbooks-migration / file-review + phone).

## VERIFICATION
- BATTERY GREEN. url-set 576 within contract · links 53,419 resolve · founder-zero · css 80,259B/83,968B.
- 4 pages: faq-min-6 (8/7/8/7) · FAQPage verbatim. other-software-to-qb equity GREEN (44 headings · 7 FAQ · 27 schema) after link enrichment.
- **2 fix iterations this round (logged as recurring template gotchas):**
  1. **variety-12a** — all 4 failed (the other-software-to-qb template, like ecommerce/home-services, carries a numbered `coverage` grid `.num` AND a process-diagram = 2 numbered systems). Fix: de-numbered the parallel `coverage` grid (removed `.num`), kept the process-diagram HowTo as the 1 sequence.
  2. **intents** — wave page had an invalid CTA intent `quickbooks-online` (agent-injected on a /quickbooks/online/ link). Fix: removed the param. Validated all 4 pages' intents = {file-review, quickbooks-migration} only.
- equity n/a for the 4 net-new pages.

## ⚠ RECURRING TEMPLATE GOTCHA (for future clones)
Templates with BOTH a numbered deliverables/coverage grid (`.num`) AND a process-diagram (ecommerce, home-services, other-software-to-qb) trip variety-12a when cloned (the source pages are variety-exempted; clones aren't). **Pre-emptively de-number the parallel grid** on clone. Also validate agent-built pages' intents against intents.json before battery.

## COUNT
COUNT: total pages live = 571 (orientation `*.html` non-dev; round-92 567 + 4 migration) · re-skinned (142) + growth = 429 · pages added THIS turn = [/quickbooks/migration/{xero,wave,freshbooks,sage}-to-quickbooks/] · remaining in current cluster (migration split) = 0 (spreadsheets covered) · next cluster = proadvisor-near-me (1, founder-confirmed) → then 3 competitor /vs/ + year-end-close

## NEXT / HELD / DO-NOT-BUILD
- NEXT (round 94, founder-confirmed): /quickbooks/proadvisor-near-me/ — national "near me" answer page; honest remote-first (NO LocalBusiness schema, no fabricated offices); routes to /find-an-accountant/ + 5 state pillars; intent=quickbooks-proadvisor.
- HELD (founder): guarantee page (real terms only) · scheduler/book-a-call (flip infra).
- DO-NOT-BUILD (founder): results/case-studies (data-gated) · switching-away · emergency.
- FLIP-BLOCKER #6 grows: 4 new migration pages join the inferred-clean list (LIVE axe/overflow pending).
