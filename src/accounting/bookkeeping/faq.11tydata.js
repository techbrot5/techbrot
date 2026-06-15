/* /accounting/bookkeeping/faq/ — t-guide CollectionPage + FAQPage elevation
 * (MIGRATION-PROTOCOL, content-to-goal / visual-floor). FROZEN-CONTRACT source:
 * jobs/2d3a1fa3/tmp/contract-acct-bk-faq.txt is the ONLY authority for the 25
 * headings + 7 FAQ. Old accounting/bookkeeping/faq/index.html read for BODY
 * PROSE only.
 *
 * Pattern carried VERBATIM from the proven t-guide FAQ (src/quickbooks/faq.njk +
 * .11tydata.js and src/partners/faq.njk): guide-grid (sticky toc + article.prose)
 * · byline-block · pull-quote · meta-reviewed. The 7 cluster H2s become article
 * <h2> sections, each carrying its real bookkeeping-FAQ prose (what bookkeeping
 * covers, monthly bookkeeping in practice, cleanup, catch-up, pricing/engagement
 * model, software/technology, switching/onboarding) — real specificity carried
 * from the old kb-cluster bodies. The 7 contract FAQ render as a faq__list AND
 * regenerate the FAQPage from the SAME array (schema == rendered, verbatim/flat,
 * append-only).
 *
 * Parent hub: src/accounting/bookkeeping/bookkeeping.njk. Vocabulary + intents
 * matched to that hub and to quickbooks/faq.njk. CTA lexicon (canonical only):
 * "Book the discovery call" -> /contact/?intent=bookkeeping; "Get the free file
 * review" -> /quickbooks/file-review/?intent=file-review; "Speak to a ProAdvisor"
 * (tel). HONESTY: independent firm, not affiliated with Intuit Inc.; no fabricated
 * stats/outcomes/reviews; no AggregateRating; David Westgate only in reviewedBy
 * schema @id (no personal name in visible content). The title/meta_description are
 * the FROZEN baseline strings (equity) and reference the 35-question baseline; the
 * rendered page surfaces the 7 cluster topics and the 7 contract FAQ. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&middot;/g, "·")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

// The 7 cluster H2 sections — heading VERBATIM from the contract, prose carried
// from the old HTML kb-cluster bodies (BODY PROSE only). The first item in each
// cluster doubles as the cluster's anchor entry in the popular strip.
const clusters = [
  {
    id: "cluster-scope",
    heading: "What bookkeeping covers.",
    lede: "The operational scope of professional bookkeeping &mdash; what&rsquo;s included, where it ends, who does the work, and how it differs from generic data entry.",
    items: [
      {
        anchor: "bkfaq-scope-include",
        q: "What does professional bookkeeping actually include?",
        a: "<p>Professional bookkeeping covers seven core deliverables month after month: <strong>transaction categorization</strong> (every bank and credit card transaction coded to the correct chart-of-accounts category), <strong>bank and credit card reconciliation</strong> (every account reconciled to statement balance), <strong>accounts payable and receivable management</strong> (vendor bills entered and tracked, customer invoices aged), <strong>payroll posting</strong> (payroll runs reconciled to general ledger), <strong>sales tax accrual posting</strong> where applicable, <strong><a href=\"/accounting/month-end-close/\">month-end close</a></strong> (period closed, prior data locked), and <strong><a href=\"/accounting/financial-statements/\">financial statement generation</a></strong> (balance sheet, P&amp;L, cash flow statement).</p><p>Some engagements add: inventory tracking, multi-entity consolidation, deferred revenue recognition, foreign-currency handling, and industry-specific KPI dashboards. What bookkeeping is NOT: income tax filing (your CPA&rsquo;s work), IRS representation (CPA or EA work), audit or assurance services (CPA work), legal entity structuring (attorney work). At TechBrot we hold a clean scope boundary &mdash; operational accounting, CPA-ready books, no tax filing.</p>",
      },
      {
        anchor: "bkfaq-scope-dataentry",
        q: "What&rsquo;s the difference between bookkeeping and data entry?",
        a: "<p>Data entry is mechanical &mdash; recording transactions as they appear, putting numbers in fields, matching obvious patterns. <strong>Bookkeeping is judgment work</strong> &mdash; deciding which transactions belong in which chart-of-accounts category, identifying transactions that need reclassification, recognizing patterns that signal problems (duplicate entries, miscategorizations, missing transactions, fraud indicators), reconciling against bank statements with judgment about timing differences, and producing financial statements that reflect business reality rather than bank-feed defaults.</p><p>The distinction matters because automation increasingly handles data entry &mdash; bank feeds, OCR, AI categorization, integration imports. What automation doesn&rsquo;t yet handle: the judgment calls, the exception management, the reconciliation discipline, the close calendar, the GAAP application. Generic &ldquo;bookkeeping&rdquo; services that compete on price typically deliver data entry; professional bookkeeping delivers the judgment layer that produces reliable books. See <a href=\"/accounting/advisory/\">accounting advisory</a> for the layer above bookkeeping.</p>",
      },
      {
        anchor: "bkfaq-scope-who",
        q: "Who actually does the work &mdash; bookkeepers, accountants, or someone else?",
        a: "<p>At TechBrot, bookkeeping work is done by Certified QuickBooks ProAdvisors and supervised accountants &mdash; not offshore data-entry workers, not unsupervised junior staff, not generic &ldquo;virtual assistants.&rdquo; The reason: bookkeeping requires both QuickBooks platform fluency (ProAdvisor certification) and accounting judgment (CoA design, reconciliation discipline, accrual decisions, GAAP application).</p><p>For each engagement, a <strong>named ProAdvisor</strong> is the point of accountability &mdash; not a faceless &ldquo;account manager&rdquo; rotating tickets to whoever is available. Vetted operator network engagements work the same way: a named, certified ProAdvisor in the client&rsquo;s state or industry, accountable for the work. See <a href=\"/about/network/\">the operator network</a> for the firm structure.</p>",
      },
      {
        anchor: "bkfaq-scope-vsaccounting",
        q: "What&rsquo;s the difference between bookkeeping and accounting?",
        a: "<p>Bookkeeping is the operational layer &mdash; recording, categorizing, reconciling, producing financial statements. Accounting is the broader discipline that uses bookkeeping data to produce financial analysis, support tax preparation, perform advisory work, and guide business decisions. Bookkeeping is the foundation; accounting is what gets built on top. In practical terms, a bookkeeper maintains the books; an accountant interprets them.</p><p>TechBrot operates both layers: operational bookkeeping plus the accounting layer above &mdash; <a href=\"/accounting/financial-statements/\">financial statements</a>, <a href=\"/accounting/advisory/\">advisory</a>, and <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> work. What we don&rsquo;t do is regulated tax-filing work, which requires CPA or EA credentials &mdash; that stays with your CPA, who files from the books we keep.</p>",
      },
    ],
  },
  {
    id: "cluster-monthly",
    heading: "Monthly bookkeeping in practice.",
    lede: "The recurring engagement that maintains the books month after month &mdash; cadence, deliverables, integrations, communication rhythm, and what to expect operationally.",
    items: [
      {
        anchor: "bkfaq-monthly-practice",
        q: "What does monthly bookkeeping look like in practice?",
        a: "<p>A typical <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> engagement runs on a defined cadence. <strong>Week 1 of each month</strong>: prior-month transaction categorization, bank feed reconciliation, AP/AR review. <strong>Week 2</strong>: payroll posting, sales tax accrual, intercompany clearing, any month-specific work (multi-entity consolidation, foreign-currency translation). <strong>Week 3</strong>: month-end close &mdash; accruals, prepayments, deferred revenue recognition, period lock. <strong>Week 4</strong>: financial statement review with client, monthly summary memo, KPI dashboard delivery, any forward-looking advisory commentary.</p><p>Client communication: typically one structured monthly review call (30&ndash;45 minutes) plus async messaging for questions during the month. Most monthly engagements close the prior month within 10 business days; clean operations with strong integrations can close within 5&ndash;7 days.</p>",
      },
      {
        anchor: "bkfaq-monthly-deliverables",
        q: "What deliverables come with monthly bookkeeping?",
        a: "<p>Standard monthly deliverables: <strong>balance sheet</strong>, <strong>profit &amp; loss statement</strong>, <strong>cash flow statement</strong>, <strong>AR aging report</strong>, <strong>AP aging report</strong>, <strong>bank reconciliation reports</strong> (one per account), <strong>monthly summary memo</strong> (significant items, judgment calls, follow-ups), and where applicable <strong>industry-specific reports</strong> (WIP for construction, MRR/ARR for SaaS, prime cost for restaurants, utilization for agencies).</p><p>Some engagements also include variance analysis (actual vs budget, current vs prior period), a KPI dashboard, a rolling 13-week cash flow forecast where advisory is included, multi-entity consolidations, and board-ready financial packages. Deliverables are defined in the engagement scope &mdash; we don&rsquo;t bundle work the client doesn&rsquo;t need or undersell deliverables the engagement requires.</p>",
      },
      {
        anchor: "bkfaq-monthly-integrations",
        q: "What integrations do you manage as part of monthly bookkeeping?",
        a: "<p>Most modern bookkeeping engagements involve integrations &mdash; the QuickBooks file connects to the business&rsquo;s operational source-of-truth platforms, automating data flow and reducing manual entry. Common integrations we manage: <strong>bank and credit card feeds</strong> (every account in QuickBooks), <strong>ecommerce platforms</strong> (Shopify, Amazon Seller Central, BigCommerce, WooCommerce), <strong>payment processors</strong> (Stripe, Square, PayPal), <strong>POS systems</strong> (Toast, Square POS, Lightspeed, Clover), <strong>billing and AP platforms</strong> (Bill.com, Ramp, Melio), <strong>payroll</strong> (QuickBooks Payroll, Gusto, ADP, Paychex with summary entries), and <strong>industry-specific platforms</strong> (ServiceTitan, MindBody, Procore, Clio).</p><p>Integration setup and ongoing management is part of the engagement &mdash; not a separate fee. Integration health is monitored monthly; broken integrations create data quality problems we catch and fix before they affect month-end close.</p>",
      },
      {
        anchor: "bkfaq-monthly-close",
        q: "What happens at month-end close?",
        a: "<p><a href=\"/accounting/month-end-close/\">Month-end close</a> is the structured process of finalizing the books for a period. Day-by-day: <strong>Days 1&ndash;3</strong> &mdash; final bills entered, final invoices generated, payroll posted, integrations synced. <strong>Days 4&ndash;7</strong> &mdash; bank reconciliation, credit card reconciliation, payroll reconciliation, sales tax accrual posted, AP/AR aged. <strong>Days 8&ndash;10</strong> &mdash; accruals posted, prepayments adjusted, deferred revenue recognized, depreciation posted, intercompany cleared, period reviewed, journal entries finalized, period locked.</p><p>After close: financial statements generated, monthly review call scheduled, deliverables packaged. Clean 5&ndash;7 day closes are achievable for businesses with strong integrations and simple operations. Most close in 7&ndash;10 days; 10+ days signals operational issues we address (late bill entry, broken integrations, complex multi-entity).</p>",
      },
    ],
  },
  {
    id: "cluster-cleanup",
    heading: "Cleanup engagements.",
    lede: "When the existing QuickBooks file has accumulated errors and needs restoration before ongoing bookkeeping is reliable &mdash; tiered scope, timeline, and what cleanup actually fixes.",
    items: [
      {
        anchor: "bkfaq-cleanup-vs-catchup",
        q: "When do I need bookkeeping cleanup vs catch-up?",
        a: "<p>The distinction is whether bookkeeping was happening at all. <strong>Cleanup</strong> applies when bookkeeping was being done but contains errors &mdash; the QuickBooks file exists, transactions are recorded (mostly), reconciliations were attempted, but the result is unreliable. Common cleanup triggers: months of unreconciled bank accounts, transactions sitting in undeposited funds or other unresolved accounts, AR/AP aging that doesn&rsquo;t match general ledger, payroll posting drift, multiple chart-of-accounts inconsistencies.</p><p><strong>Catch-up</strong> applies when bookkeeping was not happening &mdash; the QuickBooks file is empty or barely populated, transactions were not being recorded, and the work involves building from source documents (bank statements, credit card statements, invoices, bills). Many engagements involve both: catch-up for recent unmaintained periods plus cleanup of older partially-maintained periods. The discovery call sorts which engagement fits.</p>",
      },
      {
        anchor: "bkfaq-cleanup-tiers",
        q: "What are the cleanup tiers (focused / standard / complex)?",
        a: "<p>Three tiered cleanup engagements scope by complexity. <strong>Focused cleanup</strong> ($1,500&ndash;$3,000): single-issue scope &mdash; typically 3&ndash;6 months of one account type that needs reconciliation, or a specific structural fix (undeposited funds cleanup, payroll posting reconciliation). 2&ndash;4 week timeline. <strong>Standard cleanup</strong> ($3,000&ndash;$7,500): broader scope &mdash; 6&ndash;18 months of accumulated issues across multiple accounts, requiring multi-account reconciliation, AP/AR reconstruction, CoA restructuring. 4&ndash;8 week timeline.</p><p><strong>Complex cleanup</strong> ($7,500&ndash;$15,000+): multi-year accumulated errors, multi-entity files, files requiring rebuild from extract, or files where damage interacts with multiple business areas (payroll + sales tax + inventory + multi-entity). 8&ndash;16+ week timeline. Pricing reflects engagement variable complexity &mdash; we don&rsquo;t quote a flat rate that incentivizes us to under-deliver on harder engagements. See <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">bookkeeping cleanup</a> for the full tier breakdown.</p>",
      },
      {
        anchor: "bkfaq-cleanup-cost",
        q: "How much does bookkeeping cleanup cost?",
        a: "<p><a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">Bookkeeping cleanup</a> is priced fixed-fee based on engagement complexity, set in written scope before any work begins. <strong>Focused cleanup</strong> (single-issue scope, typically 3&ndash;6 months of one account type needing reconciliation, or a specific structural fix) typically scopes <strong>$1,500&ndash;$3,000</strong>. <strong>Standard cleanup</strong> (broader scope, multi-account, 6&ndash;18 months of accumulated issues) typically scopes <strong>$3,000&ndash;$7,500</strong>. <strong>Complex cleanup</strong> (multi-year accumulated errors, multi-entity files, files requiring rebuild from extract, or files where damage interacts with multiple business areas) typically scopes <strong>$7,500&ndash;$15,000+</strong>.</p><p>Pricing reflects engagement variable complexity &mdash; we don&rsquo;t quote a flat rate that incentivizes us to under-deliver on harder engagements. After cleanup, most engagements transition to ongoing monthly bookkeeping. See <a href=\"/pricing/\">the pricing reference</a> for canonical figures.</p>",
      },
      {
        anchor: "bkfaq-cleanup-tax",
        q: "Does cleanup affect my tax return?",
        a: "<p>Yes &mdash; cleanup typically affects prior-year tax returns if the cleanup involves prior tax years. Common scenarios: cleanup discovers expenses that weren&rsquo;t deducted (amended return reclaims the deduction), cleanup discovers revenue that wasn&rsquo;t reported (amended return increases tax owed; honest disclosure prevents larger penalties later), cleanup resolves opening-balance errors that propagated across years (multiple amended returns may be needed).</p><p>We coordinate directly with your CPA on tax implications. Where cleanup discovers material prior-year issues, the CPA assesses amended-return requirements; we provide the corrected financial statements and supporting documentation. For most cleanup engagements, prior-year impact is modest; for complex multi-year cleanup, the CPA coordination is more involved. See <a href=\"/legal/disclaimer/\">the disclaimer</a> for scope boundaries on tax matters.</p>",
      },
    ],
  },
  {
    id: "cluster-catchup",
    heading: "Catch-up engagements.",
    lede: "When bookkeeping wasn&rsquo;t happening at all &mdash; reconstructing books from source documents, navigating IRS exposure, and getting current.",
    items: [
      {
        anchor: "bkfaq-catchup-what",
        q: "What is catch-up bookkeeping?",
        a: "<p><a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-up bookkeeping</a> is reconstructing books that haven&rsquo;t been maintained &mdash; either because no one was doing the books, the previous bookkeeper stopped, or the business never had professional bookkeeping in place. Catch-up differs from cleanup in scope: cleanup fixes a partially-maintained file with errors; catch-up builds from scratch where no bookkeeping was happening.</p><p>Typical catch-up scope: <strong>6 months to 3+ years</strong> of transactions to categorize, all accounts to reconcile against bank statements, AP/AR to reconstruct from invoices and bills, payroll history to reconcile against payroll reports, sales tax history to reconstruct, financial statements to produce for the catch-up period. Catch-up is essential for businesses preparing for a CPA tax filing, seeking financing, planning a sale, or just needing to know where the business actually stands financially.</p>",
      },
      {
        anchor: "bkfaq-catchup-cost",
        q: "How much does catch-up bookkeeping cost?",
        a: "<p>Catch-up bookkeeping is priced based on time period and transaction volume, fixed-fee in written scope. Typical ranges: <strong>6 months of catch-up for a small service business</strong>: $2,000&ndash;$5,000. <strong>12&ndash;18 months for a small business with moderate complexity</strong>: $5,000&ndash;$10,000. <strong>2&ndash;3 years for a business with significant volume or complexity</strong>: $10,000&ndash;$20,000. <strong>Multi-year complex catch-up</strong> with multi-entity, inventory, or specialty industry requirements: $20,000+.</p><p>Pricing depends on transaction volume (more transactions = more time), business complexity (multi-state, multi-entity, multi-currency), document quality (clean QuickBooks import vs paper bank statements scanned in vs missing records requiring reconstruction), and required deliverables (basic books vs CPA-ready vs audit-ready). The discovery call produces a written scope within 3 business days.</p>",
      },
      {
        anchor: "bkfaq-catchup-docs",
        q: "What documents do you need for catch-up?",
        a: "<p>Standard documents required for catch-up: <strong>bank statements</strong> for every business account for every month in scope, <strong>credit card statements</strong> for every business credit card for every month in scope, <strong>payroll reports</strong> from the payroll provider (Gusto, QuickBooks Payroll, ADP) covering the catch-up period, <strong>sales tax returns</strong> if filed (or transaction reports if not), <strong>major customer invoices</strong> issued during the period (or sales reports from ecommerce/POS), <strong>major vendor bills</strong> received during the period, and <strong>any existing QuickBooks file</strong> (even if mostly empty).</p><p>Where documents are missing: we work with what&rsquo;s available, reconstruct from bank statements where transactions can be identified, and flag gaps that require client input or estimated entries. For very old or incomplete records, we discuss the trade-offs honestly &mdash; sometimes reconstruction isn&rsquo;t possible and the engagement scope adjusts to what can realistically be delivered.</p>",
      },
      {
        anchor: "bkfaq-catchup-unfiled",
        q: "What if I haven&rsquo;t filed taxes in years?",
        a: "<p>Unfiled tax returns are a serious issue but resolvable. The order of operations: <strong>(1) Catch up the bookkeeping first</strong> &mdash; you can&rsquo;t file accurate tax returns without accurate books for the years in question. <strong>(2) Engage a CPA for the back-tax filings</strong> &mdash; we coordinate directly. The CPA assesses penalty exposure, voluntary-disclosure eligibility where applicable, and the filing strategy. <strong>(3) Establish ongoing bookkeeping and current-year tax filing</strong> &mdash; preventing the situation from continuing.</p><p>IRS exposure for unfiled returns generally includes a failure-to-file penalty, a failure-to-pay penalty, and interest on unpaid amounts; penalties compound, and proactive disclosure typically reduces them. We handle the bookkeeping side; the CPA handles tax representation. See <a href=\"/legal/disclaimer/\">the disclaimer</a> for scope boundaries.</p>",
      },
    ],
  },
  {
    id: "cluster-pricing",
    heading: "Pricing &amp; engagement model.",
    lede: "How TechBrot charges for bookkeeping, what affects pricing, what&rsquo;s not included, and the engagement model that keeps incentives aligned with clients.",
    items: [
      {
        anchor: "bkfaq-pricing-monthly",
        q: "How much does monthly bookkeeping cost?",
        a: "<p>Monthly bookkeeping at TechBrot ranges from <strong>$400 to $2,500+ per month</strong>, fixed-fee, set in written scope before any work begins. Typical ranges: solo professional services or small e-commerce <strong>$400&ndash;$700/mo</strong>; established small business with employees <strong>$700&ndash;$1,500/mo</strong>; multi-state or multi-entity operations <strong>$1,500&ndash;$2,500+/mo</strong>; complex multi-entity with significant integrations or inventory <strong>$2,500&ndash;$5,000+/mo</strong>.</p><p>Pricing factors: transaction volume, business complexity (multi-entity, multi-state, multi-currency), number of bank and credit card accounts to reconcile, payroll complexity, sales tax complexity, inventory complexity, and integrations to manage. See <a href=\"/pricing/\">the pricing reference</a> for canonical figures.</p>",
      },
      {
        anchor: "bkfaq-pricing-fixedfee",
        q: "Why fixed-fee instead of hourly billing?",
        a: "<p>Fixed-fee pricing <strong>aligns the firm&rsquo;s incentives with the client&rsquo;s outcomes</strong>. Hourly billing creates an incentive to extend engagements &mdash; the longer the work takes, the more the firm earns. Fixed-fee creates the opposite incentive: efficient delivery directly benefits the firm because we&rsquo;re paid for the outcome regardless of hours invested.</p><p>From the client side, fixed-fee provides <strong>predictability</strong> &mdash; you know the cost before any work begins, can budget against it, and don&rsquo;t get surprise invoices for scope creep. The trade-off is upfront scoping work: every engagement starts with a discovery call and written scope. We absorb the scoping investment because it produces better engagements and longer client relationships. See <a href=\"/trust/\">trust &amp; standards</a> for the full engagement model.</p>",
      },
      {
        anchor: "bkfaq-pricing-excluded",
        q: "What&rsquo;s not included in monthly bookkeeping pricing?",
        a: "<p>Standard monthly bookkeeping pricing covers the seven core deliverables (transaction categorization, reconciliation, AP/AR, payroll posting, sales tax accrual, month-end close, financial statements). What&rsquo;s scoped separately: <strong>income tax filing</strong> (CPA work, not in our scope), <strong>tax planning and strategy</strong> (CPA work), <strong>year-end payroll filings</strong> (W-2/1099 generation, included only if specified in scope), <strong>multi-state sales tax filing</strong> (a separate service &mdash; see <a href=\"/accounting/sales-tax-compliance/\">sales tax compliance</a>), <strong>advisory and fractional CFO work</strong> (see <a href=\"/accounting/advisory/\">advisory</a>), <strong>major one-time projects</strong>, and <strong>IRS or state audit representation</strong> (CPA/EA work).</p><p>If a service falls outside monthly bookkeeping scope, we scope it separately with its own written engagement &mdash; no scope creep, no surprise invoices. Most clients add services over time as the business evolves; pricing for additions is always written before work begins.</p>",
      },
      {
        anchor: "bkfaq-pricing-contracts",
        q: "Do you require long-term contracts?",
        a: "<p><strong>Project engagements</strong> (cleanup, catch-up, setup, migration) are scoped per-project with no long-term commitment beyond the project itself. <strong>Retainer engagements</strong> (monthly bookkeeping, payroll management, sales tax compliance, fractional CFO) typically have a minimum engagement period of <strong>3&ndash;6 months</strong>, after which they continue month-to-month.</p><p>We don&rsquo;t lock clients into long contracts &mdash; if the engagement isn&rsquo;t producing value, the client can exit after the minimum period without penalty. The minimum exists because onboarding investment (chart-of-accounts review, integration setup, first-month verification) is real, and one-month engagements don&rsquo;t allow the work to stabilize. Most client relationships extend for years because the work compounds, not because we&rsquo;ve locked them in.</p>",
      },
    ],
  },
  {
    id: "cluster-software",
    heading: "Software &amp; technology.",
    lede: "QuickBooks Online vs Desktop vs Enterprise, alternatives we work with, integration stack, automation and AI, and data security.",
    items: [
      {
        anchor: "bkfaq-software-which",
        q: "What software do you use for bookkeeping?",
        a: "<p>TechBrot is a Certified QuickBooks ProAdvisor firm &mdash; <a href=\"/quickbooks/online/\">QuickBooks Online</a>, <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a>, and <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> are our core platforms. <strong>QuickBooks Online (QBO)</strong> fits most modern small businesses (typical default). <strong>QuickBooks Desktop</strong> fits businesses requiring deep customization, industry-specific configurations, or legacy workflows. <strong>QuickBooks Enterprise</strong> fits larger operations (25+ employees, advanced inventory, multi-location, complex pricing).</p><p>We work in the <strong>client&rsquo;s own QuickBooks file</strong> &mdash; we don&rsquo;t lock clients into our subscription. Beyond QuickBooks, we integrate with industry platforms: Shopify, Amazon Seller Central, Stripe, Square, Toast, ServiceTitan, MindBody, Procore, Buildertrend, Clio, and dozens more. For payroll: <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> and Gusto. For bill pay and AP: Bill.com, Ramp, Melio. We do NOT take affiliate revenue on any of these platforms &mdash; selection is based on fit, not commission. See <a href=\"/quickbooks/which-plan-is-right/\">which plan is right</a>.</p>",
      },
      {
        anchor: "bkfaq-software-alts",
        q: "Do you work with Xero, Wave, FreshBooks, or other platforms?",
        a: "<p>Our specialty is the QuickBooks ecosystem &mdash; we focus depth on QuickBooks rather than spreading thin across multiple platforms. Where we encounter <strong>Xero</strong>, <strong>Wave</strong>, <strong>FreshBooks</strong>, <strong>Sage 50</strong>, <strong>NetSuite</strong>, or other platforms, we typically recommend <a href=\"/quickbooks/migration/\">migration to QuickBooks</a> as part of the engagement. The reason: depth in one platform produces better outcomes than shallow coverage across many.</p><p>For businesses that genuinely need to stay on a non-QuickBooks platform (specific integration requirements, multinational operations on NetSuite), we coordinate with platform-specialist providers rather than do shallow work ourselves. Honest fit assessment matters more than chasing every engagement.</p>",
      },
      {
        anchor: "bkfaq-software-automation",
        q: "How does automation and AI fit into bookkeeping?",
        a: "<p>Automation handles increasing portions of routine bookkeeping work: <strong>bank feeds</strong> import transactions automatically, <strong>OCR</strong> extracts data from receipts and bills, <strong>integrations</strong> sync data from ecommerce and POS platforms, <strong>AI categorization</strong> suggests chart-of-accounts assignments based on transaction patterns, <strong>rule-based posting</strong> handles repeating transactions. The result: less manual data entry, faster transaction processing, fewer mechanical errors.</p><p>What automation does NOT replace: <strong>judgment calls</strong> (which AI suggestion is correct vs which is wrong), <strong>exception management</strong> (transactions that don&rsquo;t fit any pattern), <strong>reconciliation discipline</strong> (verifying books match bank statements), <strong>GAAP application</strong> (accrual, deferred revenue, percentage-of-completion), and the <strong>advisory layer</strong> (what to do about what the data shows). As automation commoditizes data entry, value moves to the judgment and advisory layers. See <a href=\"/accounting/advisory/\">advisory</a>.</p>",
      },
      {
        anchor: "bkfaq-software-security",
        q: "How is my financial data kept secure, and who owns the file?",
        a: "<p>Data security operates at multiple layers. <strong>QuickBooks platform security</strong>: Intuit operates bank-grade security on QBO with encryption in transit and at rest, two-factor authentication, audit logs, and SOC 2 Type II compliance. <strong>Access controls</strong>: ProAdvisor access through QuickBooks Online Accountant doesn&rsquo;t require sharing login credentials &mdash; we access via our own credentialed account with audit logging. <strong>Document handling</strong>: client documents exchanged via secure portals (Box, SharePoint) with permission controls, not email attachments. We never need bank login credentials; QuickBooks bank feeds are bank-authorized integrations.</p><p><strong>The client owns the QuickBooks file and all financial data &mdash; always.</strong> TechBrot works in the client&rsquo;s file with ProAdvisor access; we do not own the file, the subscription, or the data. If the client ends the engagement, the file remains with the client and our access is revoked. We deliberately avoid the &ldquo;data hostage&rdquo; pattern. See <a href=\"/legal/dpa/\">the Data Processing Agreement</a> for the formal terms.</p>",
      },
    ],
  },
  {
    id: "cluster-switching",
    heading: "Switching &amp; onboarding.",
    lede: "Transitioning from your current bookkeeper, what onboarding looks like, communication patterns, and getting started.",
    items: [
      {
        anchor: "bkfaq-switch-can",
        q: "Can I switch from my current bookkeeper to TechBrot?",
        a: "<p>Yes &mdash; transitions are common and we handle them cleanly. A typical transition: <strong>discovery call</strong> to assess current file state and historical bookkeeper quality, <strong>written scope</strong> including any required cleanup from prior provider issues, <strong>coordination with the prior provider</strong> for QuickBooks access transfer, <strong>opening-balance verification</strong> at the transition date, <strong>first month of ongoing monthly bookkeeping</strong> with extra review, and a <strong>defined go-live date</strong> where TechBrot is the sole provider. Transition logistics typically take 1&ndash;3 weeks depending on prior file state.</p><p>Most transitions identify some level of cleanup needed &mdash; previous bookkeepers vary widely in quality, and even competent prior work usually shows some patterns we would structure differently. We don&rsquo;t weaponize the assessment to inflate cleanup scope; if the prior file is solid, we say so and proceed straight to monthly bookkeeping. Honest assessment is the engagement model.</p>",
      },
      {
        anchor: "bkfaq-switch-unreliable",
        q: "What if my current bookkeeper&rsquo;s work is unreliable?",
        a: "<p>Common situation &mdash; not your fault, and usually solvable. The discovery call assesses the file objectively: <strong>(1) Identify what&rsquo;s working</strong> (transactions categorized, integrations functional, current-period accuracy) and <strong>what&rsquo;s broken</strong> (unreconciled accounts, miscategorizations, balance sheet inconsistencies). <strong>(2) Determine cleanup scope</strong> &mdash; how far back to clean, what tier, what timeline. <strong>(3) Scope the engagement honestly</strong> &mdash; a cleanup engagement to fix historical issues, plus ongoing monthly bookkeeping to maintain going forward.</p><p>Signs of unreliable prior bookkeeping: bank accounts unreconciled for multiple months, AR/AP balances that don&rsquo;t make operational sense, an undeposited funds account accumulating unresolved items, journal entries with no explanation, CoA inconsistencies, financial statements that don&rsquo;t reconcile to source data. Our discovery process catches these without weaponizing the assessment. See <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">bookkeeping cleanup</a> for cleanup specifics.</p>",
      },
      {
        anchor: "bkfaq-switch-onboarding",
        q: "What does onboarding actually involve?",
        a: "<p>Onboarding for a monthly bookkeeping engagement: <strong>Week 1</strong> &mdash; access setup (QuickBooks Online Accountant access granted, document portal provisioned, communication channels established), team introductions (named ProAdvisor assigned), engagement letter signed, kickoff call scheduled. <strong>Week 2</strong> &mdash; integration audit, CoA review (any structural issues flagged), opening-balance verification (transition date balances confirmed against bank statements). <strong>Week 3</strong> &mdash; first reconciliation pass on the transition month, first month-end close run, financial statement delivery.</p><p>For cleanup or catch-up engagements, onboarding folds into the project work itself &mdash; the engagement starts immediately on accumulated periods rather than waiting for an onboarding ramp. Total onboarding time: typically 1&ndash;3 weeks depending on file state and engagement complexity. The named ProAdvisor is the single point of contact throughout.</p>",
      },
      {
        anchor: "bkfaq-switch-start",
        q: "How do I get started?",
        a: "<p>Book a 30-minute discovery call. The call covers your current state (existing bookkeeping, QuickBooks setup, business complexity), your specific situation (industry, growth stage, immediate needs), the engagement type that fits, and any questions you have about how we work. Within <strong>3 business days</strong> of the call, we deliver a written scope with fixed-fee pricing &mdash; no surprises, no hourly billing, no pressure to commit on the call itself.</p><p>If the engagement fits, work begins on the scheduled start date. If it doesn&rsquo;t fit, we&rsquo;ll say so and route to whatever does, including firms outside TechBrot when that&rsquo;s the honest answer. The discovery call is complimentary; the scope is non-binding; the engagement starts only when you commit in writing.</p>",
      },
    ],
  },
];

// The 6 popular-strip anchors (contract H2 "Six questions answered most often."),
// pointing into the cluster sections above. Verbatim questions.
const popular = [
  { qid: "Q.01", cluster: "Scope", anchor: "bkfaq-scope-include", q: "What does professional bookkeeping actually include?" },
  { qid: "Q.06", cluster: "Monthly", anchor: "bkfaq-monthly-practice", q: "What does monthly bookkeeping look like in practice?" },
  { qid: "Q.11", cluster: "Cleanup", anchor: "bkfaq-cleanup-vs-catchup", q: "When do I need bookkeeping cleanup vs catch-up?" },
  { qid: "Q.14", cluster: "Cleanup", anchor: "bkfaq-cleanup-cost", q: "How much does bookkeeping cleanup cost?" },
  { qid: "Q.26", cluster: "Software", anchor: "bkfaq-software-which", q: "What software do you use for bookkeeping?" },
  { qid: "Q.31", cluster: "Switching", anchor: "bkfaq-switch-can", q: "Can I switch from my current bookkeeper to TechBrot?" },
];

// The 7 contract FAQ — VERBATIM questions, flat prose answers (the verbatim
// answers from the contract). Rendered as a faq__list AND the FAQPage schema.
// Append-only enrichment allowed; here the answers carry the exact contract text.
const faq = [
  {
    q: "What does professional bookkeeping actually include?",
    a: "Professional bookkeeping covers seven core deliverables month after month: transaction categorization (every bank and credit card transaction coded to the correct chart-of-accounts category), bank and credit card reconciliation (every account reconciled to statement balance), accounts payable and receivable management (vendor bills entered and tracked, customer invoices aged), payroll posting (payroll runs reconciled to general ledger), sales tax accrual posting where applicable, month-end close (period closed, prior data locked), and financial statement generation (balance sheet, P&amp;L, cash flow statement). Some engagements add: inventory tracking, multi-entity consolidation, deferred revenue recognition, foreign-currency handling, and industry-specific KPI dashboards. What bookkeeping is NOT: income tax filing (your CPA&rsquo;s work), IRS representation (CPA or EA work), audit or assurance services (CPA work), legal entity structuring (attorney work). At TechBrot we hold a clean scope boundary &mdash; operational accounting, CPA-ready books, no tax filing.",
  },
  {
    q: "What does monthly bookkeeping look like in practice?",
    a: "A typical monthly bookkeeping engagement runs on a defined cadence. Week 1 of each month: prior-month transaction categorization, bank feed reconciliation, AP/AR review. Week 2: payroll posting, sales tax accrual, intercompany clearing, any month-specific work (multi-entity consolidation, foreign-currency translation). Week 3: month-end close &mdash; accruals, prepayments, deferred revenue recognition, period lock. Week 4: financial statement review with client, monthly summary memo, KPI dashboard delivery, any forward-looking advisory commentary. Client communication: typically one structured monthly review call (30-45 minutes) plus async messaging for questions during the month. Most monthly engagements close the prior month within 10 business days; clean operations with strong integrations can close within 5-7 days.",
  },
  {
    q: "When do I need bookkeeping cleanup vs catch-up?",
    a: "The distinction is whether bookkeeping was happening at all. Cleanup applies when bookkeeping was being done but contains errors &mdash; the QuickBooks file exists, transactions are recorded (mostly), reconciliations were attempted, but the result is unreliable. Common cleanup triggers: months of unreconciled bank accounts, transactions sitting in undeposited funds or other unresolved accounts, AR/AP aging that doesn&rsquo;t match general ledger, payroll posting drift, multiple chart-of-accounts inconsistencies. Catch-up applies when bookkeeping was not happening &mdash; the QuickBooks file is empty or barely populated, transactions were not being recorded, and the work involves building from source documents (bank statements, credit card statements, invoices, bills). Many engagements involve both: catch-up for recent unmaintained periods plus cleanup of older partially-maintained periods. The discovery call sorts which engagement fits.",
  },
  {
    q: "How much does bookkeeping cleanup cost?",
    a: "Bookkeeping cleanup is priced fixed-fee based on engagement complexity, set in written scope before any work begins. Focused cleanup (single-issue scope, typically 3-6 months of one account type needing reconciliation, or a specific structural fix) typically scopes $1,500-$3,000. Standard cleanup (broader scope, multi-account, 6-18 months of accumulated issues) typically scopes $3,000-$7,500. Complex cleanup (multi-year accumulated errors, multi-entity files, files requiring rebuild from extract, or files where damage interacts with multiple business areas) typically scopes $7,500-$15,000+. Pricing reflects engagement variable complexity &mdash; we don&rsquo;t quote a flat rate that incentivizes us to under-deliver on harder engagements. After cleanup, most engagements transition to ongoing monthly bookkeeping.",
  },
  {
    q: "How much does catch-up bookkeeping cost?",
    a: "Catch-up bookkeeping is priced based on time period and transaction volume, fixed-fee in written scope. Typical ranges: 6 months of catch-up for a small service business: $2,000-$5,000. 12-18 months for a small business with moderate complexity: $5,000-$10,000. 2-3 years for a business with significant volume or complexity: $10,000-$20,000. Multi-year complex catch-up with multi-entity, inventory, or specialty industry requirements: $20,000+. Pricing depends on transaction volume (more transactions = more time), business complexity (multi-state, multi-entity, multi-currency), document quality (clean QuickBooks import vs paper bank statements scanned in vs missing records requiring reconstruction), and required deliverables (basic books vs CPA-ready vs audit-ready). The discovery call produces a written scope within 3 business days.",
  },
  {
    q: "What software do you use for bookkeeping?",
    a: "TechBrot is a Certified QuickBooks ProAdvisor firm &mdash; QuickBooks Online, QuickBooks Desktop, and QuickBooks Enterprise are our core platforms. QuickBooks Online (QBO) fits most modern small businesses (typical default). QuickBooks Desktop fits businesses requiring deep customization, industry-specific configurations, or legacy workflows. QuickBooks Enterprise fits larger operations (25+ employees, advanced inventory, multi-location, complex pricing). We work in the client&rsquo;s own QuickBooks file (we don&rsquo;t lock clients into our subscription). Beyond QuickBooks, we integrate with industry platforms: Shopify, Amazon Seller Central, Stripe, Square, Toast, ServiceTitan, MindBody, Procore, Buildertrend, Clio, and dozens more. For payroll: QuickBooks Payroll and Gusto. For bill pay and AP: Bill.com, Ramp, Melio. We do NOT do affiliate revenue on any of these platforms &mdash; selection is based on fit, not commission.",
  },
  {
    q: "Can I switch from my current bookkeeper to TechBrot?",
    a: "Yes &mdash; transitions are common and we handle them cleanly. A typical transition: discovery call to assess current file state and historical bookkeeper quality, written scope including any required cleanup from prior provider issues, coordination with the prior provider for QuickBooks access transfer, opening-balance verification at the transition date, first month of ongoing monthly bookkeeping with extra review, and a defined go-live date where TechBrot is the sole provider. Transition logistics typically take 1-3 weeks depending on prior file state. Most transitions identify some level of cleanup needed &mdash; previous bookkeepers vary widely in quality, and even competent prior work usually shows some patterns we would structure differently. We don&rsquo;t weaponize the assessment to inflate cleanup scope; if the prior file is solid, we say so and proceed straight to monthly bookkeeping. Honest assessment is the engagement model.",
  },
];

// "The full bookkeeping service universe." — the 8 contract H3 cards.
const related = [
  { cluster: "Bookkeeping", title: "Bookkeeping Hub", href: "/accounting/bookkeeping/", body: "The full bookkeeping silo &mdash; monthly, cleanup, and catch-up engagements. Independent ProAdvisor firm, fixed-fee." },
  { cluster: "Bookkeeping", title: "Monthly Bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "Ongoing bookkeeping engagement &mdash; categorization, reconciliation, payroll posting, close, financial statements." },
  { cluster: "Bookkeeping", title: "Bookkeeping Cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/", body: "For files with accumulated errors. Tiered focused / standard / complex by complexity." },
  { cluster: "Bookkeeping", title: "Catch-Up Bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/", body: "For businesses 6 months to 3+ years behind. Reconstruct from source documents, fixed-fee." },
  { cluster: "Accounting", title: "Financial Statements", href: "/accounting/financial-statements/", body: "GAAP-compliant monthly financial statements &mdash; balance sheet, P&amp;L, cash flow, plus industry-specific reporting." },
  { cluster: "Accounting", title: "Month-End Close", href: "/accounting/month-end-close/", body: "The disciplined close calendar that produces reliable monthly financials &mdash; 5-10 day standard." },
  { cluster: "Advisory", title: "Advisory Hub", href: "/accounting/advisory/", body: "Fractional CFO, cash flow management, budgeting, KPI reporting, performance review, financial strategy." },
  { cluster: "FAQ", title: "Accounting FAQ", href: "/accounting/faq/", body: "The accounting silo&rsquo;s broader FAQ &mdash; fundamentals, advisory, payroll, industries, engagement model." },
];

module.exports = {
  popular: popular,
  clusters: clusters,
  faq: faq,
  related: related,
  reviewBody:
    "This reference is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm with no Intuit commission. The bookkeeping engagement scopes, deliverables, and pricing ranges on this page reflect TechBrot&rsquo;s own fixed-fee model, reviewed as of the date below. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files. Independent firm &mdash; not affiliated with Intuit Inc.",
  reviewerCreds: [
    { label: "Certifications", detail: "Active Intuit ProAdvisor across QBO Level&nbsp;2, Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, cleanup, catch-up, monthly close &middot; tax filing coordinated with your CPA/EA" },
    { label: "Pricing", detail: "Fixed-fee against written scope &middot; no hourly billing, no surprise invoices" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; zero commission on any Intuit product" },
  ],
  eleventyComputed: {
    pageGraph(data) {
      const url = "https://techbrot.com/accounting/bookkeeping/faq/";
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["CollectionPage", "WebPage"],
            "@id": url + "#webpage",
            url: url,
            name: data.title,
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            audience: {
              "@type": "BusinessAudience",
              audienceType: "U.S. small and mid-sized businesses",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#acct-bk-faq-in-brief-text"],
            },
            reviewedBy: { "@id": "https://techbrot.com/#david-westgate" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": url + "#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Accounting", item: "https://techbrot.com/accounting/" },
              { "@type": "ListItem", position: 3, name: "Bookkeeping", item: "https://techbrot.com/accounting/bookkeeping/" },
              { "@type": "ListItem", position: 4, name: "FAQ", item: url },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": url + "#faq",
            mainEntity: data.faq.map(function (item) {
              return {
                "@type": "Question",
                name: stripTags(item.q),
                acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
              };
            }),
          },
        ],
      };
    },
  },
};
