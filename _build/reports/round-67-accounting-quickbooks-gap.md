# Round 67 — GAP REPORT: /accounting/ + /quickbooks/ silos vs v4 (BUILD vs MISSING)

Analysis only — no build. Computed from v4 Sheet 1 vs the live `_site` build. `/quickbooks/support/<cat>/*`
wildcard buckets excluded (demand-gated per Sheet 7). Legend: **BUILD** = genuine distinct substance ·
**FLAG** = honesty/overclaim risk, decide framing · **MERGE/SKIP** = thin or duplicates existing page.

## ACCOUNTING — v4 76 · built 45 · MISSING 31
Hubs/core all built (/accounting/, bookkeeping/, advisory/, services/, industries/ + 18 industries, financial-statements, job-costing, month-end-close, payroll-management, reconciliation-services, sales-tax-compliance, chart-of-accounts-setup, faqs).

**A. Tax sub-silo (6) — ⚑ HONESTY-CRITICAL**
- /accounting/tax/ · tax-preparation/ · tax-strategy/ · irs-problem-resolution/ · sales-tax-filing/ · /accounting/advisory/tax-planning/
- We are a bookkeeping/ProAdvisor firm — we do NOT file taxes, do tax strategy, or represent before the IRS. As literal service pages these OVERCLAIM.
- **REC:** build ONLY as honest-triage "books-ready / your-CPA-files" pages (same pattern as the state tax-notice/biztax triage) — hub + irs-problem-resolution (books-first triage) + tax-planning (advisory coordinates w/ CPA). **MERGE** sales-tax-filing → existing /accounting/sales-tax-compliance/. **SKIP or triage-only** tax-preparation + tax-strategy (pure overclaim otherwise). Needs your ruling.

**B. Standalone service spokes (build — genuine)**
- /accounting/accounts-payable/ · /accounting/accounts-receivable/ — real distinct services. **BUILD** (t-bofu/service).
- /accounting/1099-preparation/ — **BUILD** honest (we prepare/track 1099 data; filing via e-file/CPA).
- /accounting/new-business-setup/ — **BUILD** (entity/accounting infrastructure; distinct from QB setup).
- /accounting/year-end-review/ — **BUILD** (year-end close + CPA handoff; seasonal intent).
- /accounting/pricing/ — **BUILD** (pricing TYPE, like the state pricing pages; canonical figures).
- /accounting/speak-to-an-accountant/ — ⚑ **FLAG**: "accountant" reads CPA. Build as honest-triage "speak to our Certified ProAdvisor team" (not a CPA/tax) — same as speak-to-a-proadvisor — or skip.

**C. Services audience-variants (4) — thin risk**
- small-business-accounting/ + startup-accounting/ — **BUILD** (distinct audiences). 
- business-accounting/ + monthly-accounting/ — **MERGE/SKIP** (generic; overlap services hub + monthly-bookkeeping).
- /accounting/services/fractional-cfo/ — **SKIP** (duplicate of built /accounting/advisory/fractional-cfo/ → 301).

**D. Bookkeeping sub-silo expansion (8) — overlap risk**
- online-bookkeeping/ · outsourced-bookkeeping/ — **BUILD** (high-intent keywords, distinct angles: cloud vs replace-in-house).
- virtual-bookkeeping/ · remote-bookkeeping/ — ⚑ near-synonyms of online/outsourced → **MERGE** (build only if a genuinely distinct angle; else 301 to online-bookkeeping).
- ecommerce-bookkeeping/ · real-estate-bookkeeping/ · restaurant-bookkeeping/ — **MERGE/overlap** with built /accounting/industries/{ecommerce,real-estate,restaurant}/; build only if a bookkeeping-specific angle distinct from the industry page.
- historical-cleanup/ — **MERGE** (dup of cleanup-bookkeeping/catch-up).

**E. Near-dups of built advisory/cleanup**
- cash-flow-forecasting/ → MERGE (built cash-flow-management + budgeting-forecasting) · financial-review/ → MERGE (financial-statements/business-performance-review) · backlog-transactions/ → MERGE (catch-up) · profitability-analysis/ → **BUILD** under advisory if distinct, else merge.

**F. ⚑ HONESTY HARD-SKIP**
- /accounting/case-studies/ — REAL engagements only; firm has 2 Clutch reviews, no substantiable case studies. **SKIP/FLAG** until real, substantiable case studies exist (fabrication risk otherwise).

## QUICKBOOKS — v4 169 · built 82 · MISSING 87
Built: hub, setup, cleanup, consulting, migration(+5), online, desktop, enterprise, which-plan, payroll(+4), help(+30 symptom + 21 error codes), proadvisor-team, speak-expert, file-review, support(+2), faq, desktop/support-end-dates.

**G. Cleanup tiers + scenarios (12) — BUILD (strong)**
- /quickbooks/cleanup/focused/ · standard/ · complex/ — the 3 cost/scope tiers (coined cleanup-tiering model). **BUILD**.
- cleanup/{after-prior-bookkeeper, prior-owner-setup-issues, structural-issues, undeposited-funds, forcing-reconciliation-risks, cleanup-vs-reconciliation, before-monthly-bookkeeping, accountant-review} — real distinct cleanup scenarios, strong AI-cite. **BUILD**.
- cleanup/file-review/ — **SKIP/301** (dup of built /quickbooks/file-review/).

**H. Online feature pages (21 + hub) — BUILD (genuine, large)**
- /quickbooks/online/features/ hub + bank-feeds, bank-rules, bills, budgeting, cash-flow-planner, chart-of-accounts, classes, custom-fields, customers, estimates, expenses, inventory, invoices, payroll, products-services, projects, reconciliation, reports, sales-tax, time-tracking — each a real QBO feature. **BUILD** (some glossary overlap, but feature pages are distinct from definitions). Largest single block.

**I. Online integrations (9 + hub) — BUILD**
- /quickbooks/online/integrations/ hub + amazon/gusto/hubspot/paypal/shopify/square/stripe/woocommerce/zapier sync — real distinct integrations. **BUILD** (honesty: describe accurately, no fabricated capabilities; we're not the integration vendor).

**J. Advanced power-user (10 + hub) — BUILD**
- /quickbooks/advanced/ hub + api-integrations, approval-chains, automation, batch-transactions, consolidated-reporting, custom-report-builder, multi-entity-management, spreadsheet-sync, user-permissions, workflows — real QBO-Advanced/Enterprise features. **BUILD**.

**K. Software comparisons (7 + hub) — BUILD (honesty-gated)**
- /quickbooks/compare/ hub + online-vs-desktop, online-plans, quickbooks-vs-{xero,wave,sage,freshbooks,zoho-books} — SOFTWARE comparisons (distinct from /vs/ which is competitor-FIRM comparisons). **BUILD** with fair comparisons + NO fabricated competitor pricing. online-plans/online-vs-desktop overlap which-plan-is-right → build distinct or merge.

**L. Product + desktop/enterprise spokes — BUILD**
- /quickbooks/premier/ (product, alongside desktop/online/enterprise) · desktop/{hosting, multi-user-setup} · enterprise/{features, hosting-cloud, industries, pricing} — real. **BUILD**.

**M. Reconciliation + setup + payroll spokes**
- /quickbooks/reconciliation/ hub + bank-account, credit-card, beginning-balance-issues, blocked-or-wont-complete, cleanup-required — real (some overlap help/reconciliation-broken + /accounting/reconciliation-services/; build distinct). **BUILD (de-dup)**.
- setup/{checklist, new-business, migration-from-spreadsheets} — **BUILD**.
- payroll/{direct-deposit, tax-filing} — **BUILD** (honesty: filing via Intuit payroll/CPA).
- /quickbooks/why-reconciliation-fails/ · /quickbooks/pos-migration/ — **BUILD** (real, timely).

**N. Near-dups / MERGE / ⚑ SKIP**
- /quickbooks/job-costing/ → MERGE/overlap with built /accounting/job-costing/ (build only if QB-specific angle).
- /quickbooks/plans/ → MERGE (which-plan-is-right + compare/online-plans).
- /quickbooks/deposits/ → MERGE (undeposited-funds cleanup/glossary).
- /quickbooks/help/error-codes/unrecoverable/ → **SKIP/301** (dup of built unrecoverable-error/).
- /quickbooks/support/24-7-support/ → ⚑ **SKIP** (Sheet-7 mandated drop; we're not 24/7; after-hours-help already shipped).

## BUILT-NOT-IN-V4 (harmless, keep)
/accounting/advisory/faq/ · /accounting/industries/faq/ · /quickbooks/payroll/faq/ (additive FAQ pages).

## RECOMMENDED BUILD ORDER (after your confirm) — by value × low-honesty-risk
1. **QB cleanup tiers + scenarios (11)** — coined-framework, highest cleanup-intent, low risk.
2. **QB online feature pages (22)** — biggest brand-cluster block, genuine, low risk.
3. **QB advanced (11) + integrations (10)** — power-user + integration intent.
4. **QB comparisons (8)** — honesty-gated (no fabricated pricing).
5. **QB product/desktop/enterprise/reconciliation/setup/payroll spokes (~22)** — fill the product silo.
6. **Accounting service spokes (AP, AR, 1099, new-business-setup, year-end-review, pricing, small-business/startup-accounting) (~9)** — genuine.
7. **Accounting bookkeeping/online+outsourced (2)** — distinct keywords.
8. **⚑ Tax sub-silo (honest-triage only)** + **speak-to-an-accountant (honest-triage)** — needs your honesty ruling.
9. **SKIP:** case-studies · 24-7-support · the MERGE/301 dups above.

Net buildable (excl. flags/skips): ~**95** pages (QB ~78 · accounting ~17). With flags resolved your way, the two silos reach full honest v4 spec.
