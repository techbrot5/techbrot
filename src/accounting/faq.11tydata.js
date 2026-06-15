/* /accounting/faq/ — t-guide CollectionPage + FAQPage elevation (MIGRATION-PROTOCOL,
 * content-to-goal / visual-floor). FROZEN-CONTRACT source:
 * jobs/2d3a1fa3/tmp/contract-acct-faq.txt is the ONLY authority for the 25 headings
 * + 18 FAQ. Old accounting/faq/index.html read for BODY PROSE only.
 *
 * Pattern carried VERBATIM from the proven t-guide FAQ (src/quickbooks/faq.njk +
 * src/partners/faq.njk + their .11tydata.js): guide-grid (sticky toc +
 * article.prose) · byline-block · pull-quote · meta-reviewed. The 8 cluster H2s
 * become article <h2> sections (cluster category headings verbatim), each carrying
 * the 18 contract FAQ as <h3> question + prose answer (T3 no collapse — every
 * heading a real <hN>). The 18 contract FAQ ALSO render as a faq__list AND
 * regenerate the FAQPage from the SAME flat array (schema == rendered, verbatim/
 * flat, append-only). Industry-specialization cluster carries real routing prose
 * (no contract FAQ falls in it) so the H2 stays a real section.
 *
 * Vocabulary + intents matched to quickbooks/faq.njk. CTA lexicon (canonical only):
 * "Book the discovery call" -> /contact/?intent=accounting (primary);
 * "Get the free file review" -> /quickbooks/file-review/?intent=file-review;
 * "Speak to a ProAdvisor" (tel). HONESTY (R5/R9): no fabricated stats/outcomes/
 * reviews; no AggregateRating; David Westgate only in reviewedBy schema @id;
 * independent firm, not affiliated with Intuit Inc.; bookkeeping/ProAdvisor scope
 * (not a CPA/tax-prep firm). */

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

// The 8 cluster H2 sections — heading VERBATIM from the contract, lede carried
// from the old HTML kb-cluster__lede (BODY PROSE only). The 18 contract FAQ are
// distributed into their topical clusters; each item's question/answer is
// rendered VERBATIM (the contract answer, append-only enrichment via internal
// routing links the contract references). Industry specialization carries
// routing prose only (no contract FAQ lands there).
const clusters = [
  {
    id: "cluster-fundamentals",
    heading: "Accounting fundamentals.",
    lede: "The foundational concepts every business owner should understand &mdash; what accounting actually is, GAAP vs cash basis, the chart of accounts, the financial statements that matter.",
    items: [
      {
        anchor: "acfaq-bookkeeping-vs-accounting",
        q: "What is the difference between bookkeeping and accounting?",
        a: "<p>Bookkeeping is the operational recording of financial transactions &mdash; categorizing expenses, reconciling bank accounts, processing payroll, generating invoices, maintaining the general ledger. Accounting is the broader discipline that uses bookkeeping data to produce financial statements, perform analysis, support tax preparation, and guide business decisions. Bookkeeping is the foundation; accounting is what gets built on top.</p><p>In practical terms, a bookkeeper maintains the books; an accountant interprets them. A Certified QuickBooks ProAdvisor firm like TechBrot handles both the operational bookkeeping (data entry, reconciliation, payroll processing) and the accounting layer above it (<a href=\"/accounting/financial-statements/\">financial statement preparation</a>, <a href=\"/accounting/advisory/\">advisory work</a>, <a href=\"/accounting/advisory/kpi-reporting/\">KPI reporting</a>, <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO services</a>). What we don&rsquo;t do is regulated tax-filing work &mdash; that requires a CPA or EA credential and stays with your tax professional. See also our <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant comparison</a>.</p>",
      },
      {
        anchor: "acfaq-gaap",
        q: "What is GAAP and does my business need to follow it?",
        a: "<p>GAAP &mdash; Generally Accepted Accounting Principles &mdash; is the standard accounting framework used in the United States, established by the Financial Accounting Standards Board (FASB). GAAP defines how revenue is recognized (ASC 606), how leases are accounted for (ASC 842), how nonprofits report (ASC 958), and dozens of other standards.</p><p>Public companies must follow GAAP. Most private companies are not legally required to follow GAAP but typically do because their bank covenants, investors, potential acquirers, and CPA expect GAAP-compliant financials. Cash-basis bookkeeping for very small businesses (under $5M revenue, no inventory, no investors) can defer GAAP compliance &mdash; but most growing businesses cross the threshold where GAAP matters by year 3-5 of operations. We produce GAAP-compliant books by default; if cash-basis is intentionally chosen for your situation, we configure for that explicitly.</p>",
      },
      {
        anchor: "acfaq-cash-vs-accrual",
        q: "Cash basis vs accrual accounting &mdash; which should my business use?",
        a: "<p>Cash basis records revenue when cash is received and expenses when cash is paid. Accrual basis records revenue when earned (regardless of when cash arrives) and expenses when incurred (regardless of when cash leaves). Cash basis is simpler but obscures business reality &mdash; a profitable cash-basis business can have a balance sheet that doesn&rsquo;t match operations, deferred revenue liabilities that don&rsquo;t appear, prepaid expenses that aren&rsquo;t tracked.</p><p>Accrual basis matches GAAP, gives accurate margin reporting, and is required once a business has inventory, deferred revenue (memberships, subscriptions, prepaid contracts), or significant receivables/payables. Practically: businesses under $1M revenue with simple service-based operations can use cash basis acceptably; businesses with any complexity (inventory, subscriptions, memberships, projects, multi-month engagements) should be on accrual. The IRS allows cash basis up to certain revenue thresholds; GAAP-compliant books require accrual.</p>",
      },
    ],
  },
  {
    id: "cluster-bookkeeping",
    heading: "Bookkeeping engagements.",
    lede: "The three core bookkeeping engagement types &mdash; monthly, cleanup, catch-up &mdash; plus how scope, pricing, and provider transitions actually work.",
    items: [
      {
        anchor: "acfaq-monthly-includes",
        q: "What does monthly bookkeeping include?",
        a: "<p><a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly bookkeeping</a> is the ongoing engagement that maintains the books month after month after they&rsquo;ve been set up (or cleaned up). Standard monthly scope includes: transaction categorization (all bank and credit card transactions coded to the correct chart-of-accounts categories), <a href=\"/accounting/reconciliation-services/\">bank and credit card reconciliation</a> (every account reconciled to statement balance), accounts payable and receivable management (vendor bills entered and reconciled, customer invoices tracked and aged), payroll posting (payroll runs reconciled to QuickBooks), sales tax accrual posting (where applicable), <a href=\"/accounting/month-end-close/\">monthly close</a> (period closed, books locked, prior period protected), <a href=\"/accounting/financial-statements/\">financial statement generation</a> (balance sheet, P&amp;L, cash flow), and monthly review with the business owner.</p><p>Cadence is monthly with a defined close calendar &mdash; typically a 5-10 day close. Cost varies by transaction volume and complexity: typically $400-$2,500+/month, fixed-fee, with a written scope that defines everything included.</p>",
      },
      {
        anchor: "acfaq-cleanup",
        q: "What is bookkeeping cleanup and how is it different from monthly bookkeeping?",
        a: "<p><a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">Bookkeeping cleanup</a> is a one-time engagement that fixes an existing QuickBooks file with accumulated errors before ongoing monthly bookkeeping begins. Monthly bookkeeping assumes the file is clean and reconciled; cleanup gets it there. Common cleanup engagements: months or years of unreconciled bank accounts, transactions miscategorized or sitting in undeposited funds or other unresolved accounts, AR/AP aging that doesn&rsquo;t match general ledger, payroll posting drift, fixed asset register out of sync, opening balance errors that propagated.</p><p>Cleanup is tiered fixed-fee: focused cleanup (3-6 months, single-account scope) typically $1,500-$3,000; standard cleanup (6-18 months, multi-account) typically $3,000-$7,500; complex cleanup (multi-year accumulated errors, multi-entity) typically $7,500-$15,000+. After cleanup, monthly bookkeeping takes over as the ongoing engagement. Most cleanup engagements transition cleanly to monthly bookkeeping.</p>",
      },
      {
        anchor: "acfaq-catch-up",
        q: "What is catch-up bookkeeping?",
        a: "<p><a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-up bookkeeping</a> is reconstructing books that haven&rsquo;t been maintained &mdash; either because no one was doing the books, the previous bookkeeper stopped, or the business never had professional bookkeeping in place. Catch-up differs from cleanup in scope: cleanup fixes a partially-maintained file with errors; catch-up builds from scratch where no bookkeeping was happening.</p><p>Typical catch-up scope: 6 months to 3+ years of transactions to categorize, all accounts to reconcile against bank statements, AP/AR to reconstruct from invoices and bills, payroll history to reconcile against payroll reports, sales tax history to reconstruct, financial statements to produce for the catch-up period. Cost: typically $2,000-$20,000+ depending on time period and transaction volume. Catch-up is essential for businesses preparing for a CPA tax filing, seeking financing, planning a sale, or just needing to know where the business actually stands financially.</p>",
      },
      {
        anchor: "acfaq-monthly-cost",
        q: "How much does monthly bookkeeping cost?",
        a: "<p>Monthly bookkeeping at TechBrot ranges from $400 to $2,500+ per month, fixed-fee, set in written scope before any work begins. Pricing depends on transaction volume (more transactions = more time), business complexity (multi-entity, multi-state, multi-currency add complexity), number of bank/credit card accounts to reconcile, payroll complexity (single-state W-2 vs multi-state with contractors), sales tax complexity (single-state vs multi-state nexus), inventory complexity, and integrations to manage (Shopify, Amazon, Stripe, etc.).</p><p>Typical ranges: solo professional services or small e-commerce $400-$700/mo; established small business with employees $700-$1,500/mo; multi-state or multi-entity operations $1,500-$2,500+/mo. We don&rsquo;t bill hourly &mdash; fixed-fee aligns our incentives with delivery efficiency rather than billable hours. See the <a href=\"/pricing/\">pricing reference</a> for the full engagement-by-engagement breakdown.</p>",
      },
    ],
  },
  {
    id: "cluster-close",
    heading: "Month-end close &amp; reconciliation.",
    lede: "The operational discipline that turns transactional data into reliable financial statements &mdash; what close means, how reconciliation works, and the reporting that depends on both.",
    items: [
      {
        anchor: "acfaq-chart-of-accounts",
        q: "What is the chart of accounts and why does it matter?",
        a: "<p>The chart of accounts (CoA) is the structured list of every account in the general ledger &mdash; assets, liabilities, equity, revenue, expenses, broken into categories. The CoA structure determines what every financial report shows: how revenue is broken down (service lines, product categories, geographies), how expenses are categorized (cost of goods sold vs operating expenses vs overhead), which sub-totals appear on the P&amp;L, what the balance sheet structure looks like.</p><p>A correctly designed CoA produces useful reports automatically; a poorly designed CoA means every report has structural problems no amount of cleanup fixes. Industry-specific CoAs matter &mdash; a <a href=\"/accounting/industries/restaurant/\">restaurant CoA</a> looks different from a <a href=\"/accounting/industries/saas/\">SaaS CoA</a> which looks different from a <a href=\"/accounting/industries/construction/\">construction CoA</a>. We treat CoA setup as foundational work &mdash; see <a href=\"/accounting/chart-of-accounts-setup/\">/accounting/chart-of-accounts-setup/</a> for the canonical reference covering both /accounting/ and /quickbooks/ silos.</p>",
      },
      {
        anchor: "acfaq-monthly-statements",
        q: "What financial statements do I need monthly?",
        a: "<p>Standard monthly <a href=\"/accounting/financial-statements/\">financial statements</a> include three core reports: balance sheet (assets, liabilities, equity at month-end &mdash; a point-in-time snapshot), profit &amp; loss statement (revenue and expenses over the period &mdash; operational performance), and cash flow statement (cash generated from operations, investing, financing &mdash; bridges P&amp;L to actual cash).</p><p>Many businesses also need monthly: accounts receivable aging (who owes you, how long past due), accounts payable aging (who you owe, when payments due), bank account reconciliation reports (confirming books match bank), and a monthly close summary memo (significant items, judgment calls, follow-ups). Industry-specific reports add depth: <a href=\"/accounting/industries/construction/\">construction</a> needs WIP reports, <a href=\"/accounting/industries/saas/\">SaaS</a> needs MRR/ARR waterfalls, retail needs inventory turnover, agencies need utilization reports. We deliver the standard three plus industry-specific reports as part of <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> engagements.</p>",
      },
      {
        anchor: "acfaq-month-end-close",
        q: "What does month-end close mean and how long should it take?",
        a: "<p>Month-end close is the structured process of finalizing the books for a period &mdash; ensuring all transactions are recorded, all accounts are reconciled, all accruals and prepayments are posted, all journal entries are made, and the period is closed and locked so financial statements can be relied upon and prior-period data can&rsquo;t be inadvertently changed.</p><p>A disciplined monthly close standard runs 5-10 business days from period end: days 1-3 transaction completion (final bills, invoices, payroll), days 4-7 reconciliations (bank, credit card, payroll, sales tax), days 8-10 accruals, adjustments, review, and lock. Faster close (under 5 days) is achievable for clean operations with strong integrations; slower close (15+ days) signals process problems. See <a href=\"/accounting/month-end-close/\">/accounting/month-end-close/</a> for the full close methodology.</p>",
      },
    ],
  },
  {
    id: "cluster-payroll-tax",
    heading: "Payroll &amp; sales tax compliance.",
    lede: "The two operational compliance areas where most businesses bleed time and risk &mdash; payroll multi-state complexity and sales tax economic nexus across all U.S. states.",
    items: [
      {
        anchor: "acfaq-payroll-handle",
        q: "Do you handle payroll, or just configure it?",
        a: "<p>Both, scoped separately. Payroll setup (one-time engagement) configures the payroll system correctly from day one &mdash; tax-account registration coordination, employee setup, benefits configuration, chart-of-accounts mapping, first pay-run verification. <a href=\"/accounting/payroll-management/\">Payroll management</a> (ongoing engagement) handles the recurring work: pay-run processing, employee changes, multi-state compliance maintenance, quarterly tax filings, year-end W-2 and 1099 generation.</p><p>We work with both QuickBooks Payroll and Gusto (zero affiliate commission on either) and select the right platform per client. Multi-state payroll requires careful handling &mdash; see <a href=\"/accounting/payroll-management/\">/accounting/payroll-management/</a> and <a href=\"/quickbooks/payroll/multi-state/\">/quickbooks/payroll/multi-state/</a>.</p>",
      },
      {
        anchor: "acfaq-multi-state-payroll",
        q: "How do you handle multi-state payroll?",
        a: "<p>Multi-state payroll requires registering for state income tax withholding and state unemployment insurance (SUI) accounts in every state where employees physically work &mdash; not just the state where the business is headquartered. Beyond registration, multi-state operations involve: convenience-of-the-employer rules in six states (NY, CT, PA, NJ, DE, NE) that override normal state-of-work logic, reciprocity agreements between state pairs that affect withholding, local taxes in dozens of municipalities (Ohio RITA/CCA, Pennsylvania PSD codes, Kentucky local occupational taxes, NYC city tax, San Francisco payroll expense tax, others), and state-specific paid leave and other compliance overlays.</p><p>We handle the operational and QuickBooks Payroll/Gusto configuration; we coordinate with your CPA on nexus opinions. See <a href=\"/quickbooks/payroll/multi-state/\">/quickbooks/payroll/multi-state/</a>.</p>",
      },
      {
        anchor: "acfaq-sales-tax-nexus",
        q: "What is sales tax compliance and economic nexus?",
        a: "<p><a href=\"/accounting/sales-tax-compliance/\">Sales tax compliance</a> is the operational process of collecting sales tax from customers, remitting it to state and local tax authorities, and filing periodic returns. Most U.S. businesses selling taxable products/services to multiple states face economic nexus &mdash; the post-Wayfair v South Dakota (2018) Supreme Court ruling that allows states to require sales tax collection from out-of-state sellers crossing economic thresholds, typically $100,000 in sales or 200 transactions per state per year (varies by state).</p><p>Once nexus is established in a state, the business must register for sales tax, collect at correct rates (state + county + city + special-district), and file returns on the state&rsquo;s required cadence (monthly, quarterly, or annual). We handle operational sales tax compliance: nexus monitoring, registration coordination, Avalara/TaxJar integration setup, monthly filing, exception handling. See <a href=\"/accounting/sales-tax-compliance/\">/accounting/sales-tax-compliance/</a>.</p>",
      },
    ],
  },
  {
    id: "cluster-advisory",
    heading: "Advisory &amp; fractional CFO.",
    lede: "The judgment layer above bookkeeping &mdash; where automation cannot replace strategic financial leadership, and where margin lives as basic data entry commoditizes.",
    items: [
      {
        anchor: "acfaq-advisory-vs-bookkeeping",
        q: "What is accounting advisory and how is it different from bookkeeping?",
        a: "<p>Bookkeeping is the operational layer &mdash; recording, categorizing, reconciling, producing financial statements. <a href=\"/accounting/advisory/\">Advisory</a> is the judgment layer that turns those financials into business decisions &mdash; how to price, when to hire, whether to add a location, how to fund growth, what KPIs to track, when to negotiate which contracts. Bookkeeping answers what happened. Advisory answers what to do about it.</p><p>As automation and AI commoditize basic bookkeeping, value increasingly lives in the advisory layer &mdash; the strategic judgment that automation cannot replace. TechBrot&rsquo;s advisory cluster covers fractional CFO, cash flow management, budgeting and forecasting, KPI reporting, quarterly business review, and financial strategy. See <a href=\"/accounting/advisory/\">/accounting/advisory/</a> for the full advisory hub.</p>",
      },
      {
        anchor: "acfaq-fractional-cfo",
        q: "When should I hire a fractional CFO vs full-time CFO?",
        a: "<p>A <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> is the right answer when a business needs strategic financial leadership but doesn&rsquo;t yet have the complexity or budget to justify full-time CFO compensation ($200K-$400K+ all-in for an experienced CFO in the U.S.). Typical fractional CFO threshold: businesses between $1M-$30M revenue, businesses approaching a financing round or exit, businesses in transition (rapid growth, post-acquisition, new market entry), businesses where the founder/CEO is making financial decisions on intuition rather than analysis.</p><p>Fractional CFO pricing: typically $3,000-$8,000+/month for 10-25 hours of strategic financial leadership monthly. Full-time CFO becomes justified when financial complexity demands 40+ hours/week, when the team has multiple finance staff requiring leadership, or when the business has reached $30M-$50M+ revenue. We offer fractional CFO at <a href=\"/accounting/advisory/fractional-cfo/\">/accounting/advisory/fractional-cfo/</a>.</p>",
      },
    ],
  },
  {
    id: "cluster-industries",
    heading: "Industry specialization.",
    lede: "Which industries we serve, why industry-specific accounting matters, and when industry specialization is essential vs. when generalist work is fine.",
    items: [],
    closing:
      "<p>Industry depth changes how the books are structured and what reporting matters. A <a href=\"/accounting/industries/construction/\">construction</a> file needs job costing and WIP schedules; a <a href=\"/accounting/industries/saas/\">SaaS</a> file needs deferred-revenue waterfalls and MRR/ARR reporting; a <a href=\"/accounting/industries/restaurant/\">restaurant</a> file needs prime-cost tracking and tip handling; a law firm needs IOLTA trust accounting. The chart of accounts, the integrations, and the monthly reporting package all differ by vertical.</p><p>TechBrot serves 17 industries with industry-specific chart-of-accounts design, KPI reporting, and engagement scoping. Industry specialization is essential where regulatory or operational structure is distinctive (trust accounting, job costing, inventory, multi-location); generalist bookkeeping is fine for simple single-location service businesses. Start at the <a href=\"/accounting/industries/\">industries hub</a> to find your vertical, or the <a href=\"/accounting/industries/faq/\">industries FAQ</a> for the cross-industry patterns.</p>",
  },
  {
    id: "cluster-engagement",
    heading: "Engagement model &amp; pricing.",
    lede: "How TechBrot charges, why fixed-fee instead of hourly, what we do and don&rsquo;t do, how engagements start, and the honest scope boundaries that protect both sides.",
    items: [
      {
        anchor: "acfaq-charge",
        q: "What does TechBrot charge for engagements?",
        a: "<p>TechBrot uses fixed-fee pricing on all engagements &mdash; no hourly billing. Pricing varies by engagement and complexity, always set in written scope before any work begins. Typical ranges: monthly bookkeeping $400-$2,500+/mo; bookkeeping cleanup $1,500-$15,000+ (tiered focused/standard/complex); catch-up bookkeeping $2,000-$20,000+; chart of accounts setup $750-$2,500; payroll management $150-$800+/mo; payroll setup $1,500-$6,000+; multi-state payroll setup $3,000-$10,000+; year-end payroll work $1,500-$7,500+; sales tax compliance $250-$1,500+/mo + nexus review $500-$3,000; fractional CFO $3,000-$8,000+/mo by application.</p><p>Fixed-fee aligns our incentives &mdash; efficient delivery rather than billable hours. Discovery calls are complimentary. The canonical figures for every engagement live on the <a href=\"/pricing/\">pricing reference</a>.</p>",
      },
      {
        anchor: "acfaq-file-tax-returns",
        q: "Does TechBrot file tax returns?",
        a: "<p>No. Income tax filing (Form 1120 for C-corps, 1120-S for S-corps, 1065 for partnerships, Schedule C for sole proprietors) is regulated work requiring CPA or EA credentials. TechBrot is a Certified QuickBooks ProAdvisor firm &mdash; we handle operational accounting, bookkeeping, payroll, sales tax compliance, and advisory work. We produce CPA-ready books and coordinate with your CPA or EA on tax filing.</p><p>This separation is structural: regulated work performed by appropriately credentialed professionals, operational work handled by ProAdvisors with the right depth. Working with TechBrot does not replace your CPA &mdash; it makes your CPA&rsquo;s work easier by delivering accurate books and clean documentation. If you don&rsquo;t currently have a CPA, we can recommend one in your state. The boundary is set out in our <a href=\"/legal/disclaimer/\">disclaimer</a>.</p>",
      },
      {
        anchor: "acfaq-get-started",
        q: "How do I get started?",
        a: "<p>Book a 30-minute discovery call. The call covers your current state (existing bookkeeping, QuickBooks setup, business complexity), your specific situation (industry, growth stage, immediate needs), the engagement type that fits, and any questions you have about how we work. Within 3 business days of the call, we deliver a written scope with fixed-fee pricing &mdash; no surprises, no hourly billing, no pressure to commit on the call itself.</p><p>If the engagement fits, work begins on the scheduled start date. If it doesn&rsquo;t fit, we&rsquo;ll say so and route to whatever does fit. The discovery call is complimentary; the scope is non-binding; the engagement starts only when you commit in writing. <a href=\"/contact/?intent=accounting\">Book the discovery call</a> to start.</p>",
      },
    ],
  },
];

// The 6 popular-strip anchors (contract H2 "Six questions answered most often."),
// pointing into the cluster sections above. Verbatim questions.
const popular = [
  { qid: "Q.01", cluster: "Fundamentals", anchor: "acfaq-bookkeeping-vs-accounting", q: "What is the difference between bookkeeping and accounting?" },
  { qid: "Q.04", cluster: "Bookkeeping", anchor: "acfaq-monthly-includes", q: "What does monthly bookkeeping include?" },
  { qid: "Q.07", cluster: "Bookkeeping", anchor: "acfaq-monthly-cost", q: "How much does monthly bookkeeping cost?" },
  { qid: "Q.15", cluster: "Advisory", anchor: "acfaq-fractional-cfo", q: "When should I hire a fractional CFO vs full-time CFO?" },
  { qid: "Q.16", cluster: "Pricing", anchor: "acfaq-charge", q: "What does TechBrot charge for engagements?" },
  { qid: "Q.18", cluster: "Pricing", anchor: "acfaq-get-started", q: "How do I get started?" },
];

// The 18 contract FAQ — verbatim questions, flat prose answers (the verbatim
// contract answers). Rendered as a faq__list AND the FAQPage schema, from this
// SAME flat array. Append-only enrichment is allowed; here the answers carry the
// contract text verbatim (flat, no links/lists in the faq__list copy).
const faq = [
  {
    q: "What is the difference between bookkeeping and accounting?",
    a: "Bookkeeping is the operational recording of financial transactions &mdash; categorizing expenses, reconciling bank accounts, processing payroll, generating invoices, maintaining the general ledger. Accounting is the broader discipline that uses bookkeeping data to produce financial statements, perform analysis, support tax preparation, and guide business decisions. Bookkeeping is the foundation; accounting is what gets built on top. In practical terms, a bookkeeper maintains the books; an accountant interprets them. A Certified QuickBooks ProAdvisor firm like TechBrot handles both the operational bookkeeping (data entry, reconciliation, payroll processing) and the accounting layer above it (financial statement preparation, advisory work, KPI reporting, fractional CFO services). What we don&rsquo;t do is regulated tax-filing work &mdash; that requires a CPA or EA credential and stays with your tax professional.",
  },
  {
    q: "What is GAAP and does my business need to follow it?",
    a: "GAAP &mdash; Generally Accepted Accounting Principles &mdash; is the standard accounting framework used in the United States, established by the Financial Accounting Standards Board (FASB). GAAP defines how revenue is recognized (ASC 606), how leases are accounted for (ASC 842), how nonprofits report (ASC 958), and dozens of other standards. Public companies must follow GAAP. Most private companies are not legally required to follow GAAP but typically do because their bank covenants, investors, potential acquirers, and CPA expect GAAP-compliant financials. Cash-basis bookkeeping for very small businesses (under $5M revenue, no inventory, no investors) can defer GAAP compliance &mdash; but most growing businesses cross the threshold where GAAP matters by year 3-5 of operations. We produce GAAP-compliant books by default; if cash-basis is intentionally chosen for your situation, we configure for that explicitly.",
  },
  {
    q: "Cash basis vs accrual accounting &mdash; which should my business use?",
    a: "Cash basis records revenue when cash is received and expenses when cash is paid. Accrual basis records revenue when earned (regardless of when cash arrives) and expenses when incurred (regardless of when cash leaves). Cash basis is simpler but obscures business reality &mdash; a profitable cash-basis business can have a balance sheet that doesn&rsquo;t match operations, deferred revenue liabilities that don&rsquo;t appear, prepaid expenses that aren&rsquo;t tracked. Accrual basis matches GAAP, gives accurate margin reporting, and is required once a business has inventory, deferred revenue (memberships, subscriptions, prepaid contracts), or significant receivables/payables. Practically: businesses under $1M revenue with simple service-based operations can use cash basis acceptably; businesses with any complexity (inventory, subscriptions, memberships, projects, multi-month engagements) should be on accrual. The IRS allows cash basis up to certain revenue thresholds; GAAP-compliant books require accrual.",
  },
  {
    q: "What does monthly bookkeeping include?",
    a: "Monthly bookkeeping is the ongoing engagement that maintains the books month after month after they&rsquo;ve been set up (or cleaned up). Standard monthly scope includes: transaction categorization (all bank and credit card transactions coded to the correct chart-of-accounts categories), bank and credit card reconciliation (every account reconciled to statement balance), accounts payable and receivable management (vendor bills entered and reconciled, customer invoices tracked and aged), payroll posting (payroll runs reconciled to QuickBooks), sales tax accrual posting (where applicable), monthly close (period closed, books locked, prior period protected), financial statement generation (balance sheet, P&amp;L, cash flow), and monthly review with the business owner. Cadence is monthly with a defined close calendar &mdash; typically a 5-10 day close. Cost varies by transaction volume and complexity: typically $400-$2,500+/month, fixed-fee, with a written scope that defines everything included.",
  },
  {
    q: "What is bookkeeping cleanup and how is it different from monthly bookkeeping?",
    a: "Bookkeeping cleanup is a one-time engagement that fixes an existing QuickBooks file with accumulated errors before ongoing monthly bookkeeping begins. Monthly bookkeeping assumes the file is clean and reconciled; cleanup gets it there. Common cleanup engagements: months or years of unreconciled bank accounts, transactions miscategorized or sitting in undeposited funds or other unresolved accounts, AR/AP aging that doesn&rsquo;t match general ledger, payroll posting drift, fixed asset register out of sync, opening balance errors that propagated. Cleanup is tiered fixed-fee: focused cleanup (3-6 months, single-account scope) typically $1,500-$3,000; standard cleanup (6-18 months, multi-account) typically $3,000-$7,500; complex cleanup (multi-year accumulated errors, multi-entity) typically $7,500-$15,000+. After cleanup, monthly bookkeeping takes over as the ongoing engagement. Most cleanup engagements transition cleanly to monthly bookkeeping.",
  },
  {
    q: "What is catch-up bookkeeping?",
    a: "Catch-up bookkeeping is reconstructing books that haven&rsquo;t been maintained &mdash; either because no one was doing the books, the previous bookkeeper stopped, or the business never had professional bookkeeping in place. Catch-up differs from cleanup in scope: cleanup fixes a partially-maintained file with errors; catch-up builds from scratch where no bookkeeping was happening. Typical catch-up scope: 6 months to 3+ years of transactions to categorize, all accounts to reconcile against bank statements, AP/AR to reconstruct from invoices and bills, payroll history to reconcile against payroll reports, sales tax history to reconstruct, financial statements to produce for the catch-up period. Cost: typically $2,000-$20,000+ depending on time period and transaction volume. Catch-up is essential for businesses preparing for a CPA tax filing, seeking financing, planning a sale, or just needing to know where the business actually stands financially.",
  },
  {
    q: "How much does monthly bookkeeping cost?",
    a: "Monthly bookkeeping at TechBrot ranges from $400 to $2,500+ per month, fixed-fee, set in written scope before any work begins. Pricing depends on transaction volume (more transactions = more time), business complexity (multi-entity, multi-state, multi-currency add complexity), number of bank/credit card accounts to reconcile, payroll complexity (single-state W-2 vs multi-state with contractors), sales tax complexity (single-state vs multi-state nexus), inventory complexity, and integrations to manage (Shopify, Amazon, Stripe, etc.). Typical ranges: solo professional services or small e-commerce $400-$700/mo; established small business with employees $700-$1,500/mo; multi-state or multi-entity operations $1,500-$2,500+/mo. We don&rsquo;t bill hourly &mdash; fixed-fee aligns our incentives with delivery efficiency rather than billable hours.",
  },
  {
    q: "What is the chart of accounts and why does it matter?",
    a: "The chart of accounts (CoA) is the structured list of every account in the general ledger &mdash; assets, liabilities, equity, revenue, expenses, broken into categories. The CoA structure determines what every financial report shows: how revenue is broken down (service lines, product categories, geographies), how expenses are categorized (cost of goods sold vs operating expenses vs overhead), which sub-totals appear on the P&amp;L, what the balance sheet structure looks like. A correctly designed CoA produces useful reports automatically; a poorly designed CoA means every report has structural problems no amount of cleanup fixes. Industry-specific CoAs matter &mdash; a restaurant CoA looks different from a SaaS CoA which looks different from a construction CoA. We treat CoA setup as foundational work &mdash; see /accounting/chart-of-accounts-setup/ for the canonical reference covering both /accounting/ and /quickbooks/ silos.",
  },
  {
    q: "What financial statements do I need monthly?",
    a: "Standard monthly financial statements include three core reports: balance sheet (assets, liabilities, equity at month-end &mdash; a point-in-time snapshot), profit &amp; loss statement (revenue and expenses over the period &mdash; operational performance), and cash flow statement (cash generated from operations, investing, financing &mdash; bridges P&amp;L to actual cash). Many businesses also need monthly: accounts receivable aging (who owes you, how long past due), accounts payable aging (who you owe, when payments due), bank account reconciliation reports (confirming books match bank), and a monthly close summary memo (significant items, judgment calls, follow-ups). Industry-specific reports add depth: construction needs WIP reports, SaaS needs MRR/ARR waterfalls, retail needs inventory turnover, agencies need utilization reports. We deliver the standard three plus industry-specific reports as part of monthly bookkeeping engagements.",
  },
  {
    q: "What does month-end close mean and how long should it take?",
    a: "Month-end close is the structured process of finalizing the books for a period &mdash; ensuring all transactions are recorded, all accounts are reconciled, all accruals and prepayments are posted, all journal entries are made, and the period is closed and locked so financial statements can be relied upon and prior-period data can&rsquo;t be inadvertently changed. A disciplined monthly close standard runs 5-10 business days from period end: days 1-3 transaction completion (final bills, invoices, payroll), days 4-7 reconciliations (bank, credit card, payroll, sales tax), days 8-10 accruals, adjustments, review, and lock. Faster close (under 5 days) is achievable for clean operations with strong integrations; slower close (15+ days) signals process problems. See /accounting/month-end-close/ for the full close methodology.",
  },
  {
    q: "Do you handle payroll, or just configure it?",
    a: "Both, scoped separately. Payroll setup (one-time engagement) configures the payroll system correctly from day one &mdash; tax-account registration coordination, employee setup, benefits configuration, chart-of-accounts mapping, first pay-run verification. Payroll management (ongoing engagement) handles the recurring work: pay-run processing, employee changes, multi-state compliance maintenance, quarterly tax filings, year-end W-2 and 1099 generation. We work with both QuickBooks Payroll and Gusto (zero affiliate commission on either) and select the right platform per client. Multi-state payroll requires careful handling &mdash; see /accounting/payroll-management/ and /quickbooks/payroll/multi-state/.",
  },
  {
    q: "How do you handle multi-state payroll?",
    a: "Multi-state payroll requires registering for state income tax withholding and state unemployment insurance (SUI) accounts in every state where employees physically work &mdash; not just the state where the business is headquartered. Beyond registration, multi-state operations involve: convenience-of-the-employer rules in six states (NY, CT, PA, NJ, DE, NE) that override normal state-of-work logic, reciprocity agreements between state pairs that affect withholding, local taxes in dozens of municipalities (Ohio RITA/CCA, Pennsylvania PSD codes, Kentucky local occupational taxes, NYC city tax, San Francisco payroll expense tax, others), and state-specific paid leave and other compliance overlays. We handle the operational and QuickBooks Payroll/Gusto configuration; we coordinate with your CPA on nexus opinions. See /quickbooks/payroll/multi-state/.",
  },
  {
    q: "What is sales tax compliance and economic nexus?",
    a: "Sales tax compliance is the operational process of collecting sales tax from customers, remitting it to state and local tax authorities, and filing periodic returns. Most U.S. businesses selling taxable products/services to multiple states face economic nexus &mdash; the post-Wayfair v South Dakota (2018) Supreme Court ruling that allows states to require sales tax collection from out-of-state sellers crossing economic thresholds, typically $100,000 in sales or 200 transactions per state per year (varies by state). Once nexus is established in a state, the business must register for sales tax, collect at correct rates (state + county + city + special-district), and file returns on the state&rsquo;s required cadence (monthly, quarterly, or annual). We handle operational sales tax compliance: nexus monitoring, registration coordination, Avalara/TaxJar integration setup, monthly filing, exception handling. See /accounting/sales-tax-compliance/.",
  },
  {
    q: "What is accounting advisory and how is it different from bookkeeping?",
    a: "Bookkeeping is the operational layer &mdash; recording, categorizing, reconciling, producing financial statements. Advisory is the judgment layer that turns those financials into business decisions &mdash; how to price, when to hire, whether to add a location, how to fund growth, what KPIs to track, when to negotiate which contracts. Bookkeeping answers what happened. Advisory answers what to do about it. As automation and AI commoditize basic bookkeeping, value increasingly lives in the advisory layer &mdash; the strategic judgment that automation cannot replace. TechBrot&rsquo;s advisory cluster covers fractional CFO, cash flow management, budgeting and forecasting, KPI reporting, quarterly business review, and financial strategy. See /accounting/advisory/ for the full advisory hub.",
  },
  {
    q: "When should I hire a fractional CFO vs full-time CFO?",
    a: "A fractional CFO is the right answer when a business needs strategic financial leadership but doesn&rsquo;t yet have the complexity or budget to justify full-time CFO compensation ($200K-$400K+ all-in for an experienced CFO in the U.S.). Typical fractional CFO threshold: businesses between $1M-$30M revenue, businesses approaching a financing round or exit, businesses in transition (rapid growth, post-acquisition, new market entry), businesses where the founder/CEO is making financial decisions on intuition rather than analysis. Fractional CFO pricing: typically $3,000-$8,000+/month for 10-25 hours of strategic financial leadership monthly. Full-time CFO becomes justified when financial complexity demands 40+ hours/week, when the team has multiple finance staff requiring leadership, or when the business has reached $30M-$50M+ revenue. We offer fractional CFO at /accounting/advisory/fractional-cfo/.",
  },
  {
    q: "What does TechBrot charge for engagements?",
    a: "TechBrot uses fixed-fee pricing on all engagements &mdash; no hourly billing. Pricing varies by engagement and complexity, always set in written scope before any work begins. Typical ranges: monthly bookkeeping $400-$2,500+/mo; bookkeeping cleanup $1,500-$15,000+ (tiered focused/standard/complex); catch-up bookkeeping $2,000-$20,000+; chart of accounts setup $750-$2,500; payroll management $150-$800+/mo; payroll setup $1,500-$6,000+; multi-state payroll setup $3,000-$10,000+; year-end payroll work $1,500-$7,500+; sales tax compliance $250-$1,500+/mo + nexus review $500-$3,000; fractional CFO $3,000-$8,000+/mo by application. Fixed-fee aligns our incentives &mdash; efficient delivery rather than billable hours. Discovery calls are complimentary.",
  },
  {
    q: "Does TechBrot file tax returns?",
    a: "No. Income tax filing (Form 1120 for C-corps, 1120-S for S-corps, 1065 for partnerships, Schedule C for sole proprietors) is regulated work requiring CPA or EA credentials. TechBrot is a Certified QuickBooks ProAdvisor firm &mdash; we handle operational accounting, bookkeeping, payroll, sales tax compliance, and advisory work. We produce CPA-ready books and coordinate with your CPA or EA on tax filing. This separation is structural: regulated work performed by appropriately credentialed professionals, operational work handled by ProAdvisors with the right depth. Working with TechBrot does not replace your CPA &mdash; it makes your CPA&rsquo;s work easier by delivering accurate books and clean documentation. If you don&rsquo;t currently have a CPA, we can recommend one in your state.",
  },
  {
    q: "How do I get started?",
    a: "Book a 30-minute discovery call. The call covers your current state (existing bookkeeping, QuickBooks setup, business complexity), your specific situation (industry, growth stage, immediate needs), the engagement type that fits, and any questions you have about how we work. Within 3 business days of the call, we deliver a written scope with fixed-fee pricing &mdash; no surprises, no hourly billing, no pressure to commit on the call itself. If the engagement fits, work begins on the scheduled start date. If it doesn&rsquo;t fit, we&rsquo;ll say so and route to whatever does fit. The discovery call is complimentary; the scope is non-binding; the engagement starts only when you commit in writing.",
  },
];

// "The full accounting service universe." — the 8 contract H3 cards. Titles
// VERBATIM from the contract H3s; body prose carried from the old HTML
// kb-related cards (BODY PROSE only).
const related = [
  { cluster: "Bookkeeping", title: "Monthly Bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "Ongoing bookkeeping engagement &mdash; categorization, reconciliation, payroll posting, month-end close, financial statements, all fixed-fee." },
  { cluster: "Bookkeeping", title: "Bookkeeping Cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/", body: "For files with accumulated errors, missing reconciliations, and structural problems. Tiered fixed-fee by complexity." },
  { cluster: "Bookkeeping", title: "Catch-Up Bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/", body: "For businesses 6 months to 3+ years behind on bookkeeping. Reconstruct from source documents, fixed-fee." },
  { cluster: "Advisory", title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", body: "Strategic financial leadership for $1M&ndash;$30M businesses &mdash; 10-25 hours/month of CFO-level judgment, fixed-fee." },
  { cluster: "Advisory", title: "Advisory Hub", href: "/accounting/advisory/", body: "Cash flow management, budgeting &amp; forecasting, KPI reporting, quarterly business review, financial strategy." },
  { cluster: "Payroll", title: "Payroll Management", href: "/accounting/payroll-management/", body: "Multi-state payroll, contractor management, year-end W-2/1099 generation, full compliance." },
  { cluster: "Tax compliance", title: "Sales Tax Compliance", href: "/accounting/sales-tax-compliance/", body: "Multi-state nexus monitoring, registration, Avalara/TaxJar integration, monthly filing, exception handling." },
  { cluster: "Industries", title: "17 Industry Pages", href: "/accounting/industries/", body: "Industry-specialist accounting for SaaS, ecommerce, construction, restaurants, dental, legal, manufacturing, agencies, and 9 more." },
];

module.exports = {
  popular: popular,
  clusters: clusters,
  faq: faq,
  related: related,
  reviewBody:
    "This reference is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm with no Intuit commission. The figures on this page &mdash; monthly bookkeeping, cleanup, catch-up, payroll, sales tax, and fractional CFO ranges &mdash; reflect TechBrot&rsquo;s own fixed-fee scopes and the canonical <a href=\"/pricing/\">pricing reference</a>; GAAP, economic-nexus, and multi-state payroll facts are stated as of the review date. TechBrot performs operational accounting, bookkeeping, payroll, and sales-tax compliance and coordinates with your CPA or EA, who files tax returns.",
  reviewerCreds: [
    { label: "Certifications", detail: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, close, payroll, sales tax, advisory &middot; tax filing coordinated with your CPA/EA" },
    { label: "Pricing", detail: "Fixed-fee ranges reflect TechBrot&rsquo;s own written scopes &middot; canonical figures on the pricing reference" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; zero commission on any Intuit product" },
  ],
  eleventyComputed: {
    pageGraph(data) {
      const url = "https://techbrot.com/accounting/faq/";
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
              audienceType: "Small and mid-sized U.S. businesses",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#acct-faq-in-brief-text"],
            },
            reviewedBy: { "@id": "https://techbrot.com/#david-westgate" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": url + "#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Accounting", item: "https://techbrot.com/accounting/" },
              { "@type": "ListItem", position: 3, name: "FAQ", item: url },
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
