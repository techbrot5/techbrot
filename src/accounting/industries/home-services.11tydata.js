/* /accounting/industries/home-services/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-homeservices.txt (42 headings, 7 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/home-services/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/accounting/industries/construction.njk
 * + .11tydata.js (proven t-mofu cobalt, job/service-costing analog) and
 * src/quickbooks/online.njk — COPIED t-mofu cobalt vocabulary + the full schema set
 * (WebPage, BreadcrumbList, Service, ItemList, FAQPage, QAPage).
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: the frozen contract carries 7 verbatim Q/A — emitted verbatim/flat/append-only
 * as visible faq__list AND FAQPage schema from the SAME array (NO dedup). The old body
 * carried exactly these 7 Q/A and no additional Q/A, so nothing extra is appended and
 * nothing is gutted. FAQPage + QAPage emitted from the live arrays — single source.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm — not
 * affiliated with Intuit Inc., any FSM platform, or any consumer-financing partner;
 * bookkeeping/ProAdvisor scope — does NOT file income taxes, coordinates with the
 * client's CPA/EA. No <strong> in the dark hero subheading.
 *
 * CTA — canonical lexicon ONLY: "Book the discovery call" -> /contact/?intent=accounting;
 * "Get the free file review" -> /quickbooks/file-review/?intent=file-review;
 * "Speak to a ProAdvisor" (tel). In-body links use valid canonical intents only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Home services accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "Home services breaks generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> at four points. The fundamental operational unit is the <strong>truck or technician</strong>, not the project &mdash; <strong>revenue per truck per day (RPTD)</strong>, <strong>average ticket</strong>, <strong>close rate</strong>, and <strong>callback rate</strong> are the metrics that determine business health, and none show up in a standard P&amp;L. <strong>Service agreements and maintenance plans</strong> (HVAC tune-ups, pest control quarterly visits, lawn care annual programs) are <strong>deferred revenue under ASC 606</strong> &mdash; cash collected upfront but earned ratably or per visit; most bookkeeping treats them as immediate revenue, overstating current revenue and understating liabilities. <strong>Consumer financing</strong> through GreenSky, Synchrony, Wisetack, and EnerBank requires <strong>dealer-fee accounting</strong> (5&ndash;12% of ticket) plus multi-year reconciliation back to original jobs. <strong>Field-service-management platforms</strong> (ServiceTitan, Housecall Pro, Jobber, FieldEdge, Service Fusion) are the operational source of truth, requiring summary-level reconciliation to QuickBooks. <strong>Multi-trade operators</strong> (HVAC + plumbing + electrical) need per-trade P&amp;L.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure dispatched-service economics in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, recognize service-agreement revenue correctly under ASC 606, reconcile financing partners monthly, integrate cleanly with major FSM platforms, allocate shared costs across trades, and surface RPTD, average ticket, and close rate as the headline numbers. For operators ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into truck-expansion, pricing, and PE-readiness decisions &mdash; a field being aggressively rolled up by private equity. We deliver the books; your CPA or EA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., and zero commission on FSM platforms, financing partners, or any vendor.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Home services accounting, in five questions.)
  aiSummary: [
    { q: "Why is home services accounting different?", a: "Four structural issues: <strong>truck-based unit economics</strong> (RPTD, average ticket, close rate), <strong>service-agreement deferred revenue</strong> under ASC 606, <strong>consumer financing dealer fees</strong> (5&ndash;12% of ticket), and <strong>FSM platform reconciliation</strong> (ServiceTitan, Housecall Pro, Jobber). None handled by generic bookkeeping." },
    { q: "What is revenue per truck per day (RPTD)?", a: "Total revenue divided by truck-days deployed &mdash; the headline operational metric. Representative healthy ranges by trade: <strong>HVAC $2,500&ndash;$4,000+</strong>, plumbing $1,800&ndash;$3,000, electrical $1,500&ndash;$2,500, cleaning $400&ndash;$800, pest control $800&ndash;$1,500. The RPTD trend matters more than the absolute level." },
    { q: "How do you handle service agreements correctly?", a: "As <strong>deferred revenue under ASC 606</strong>. A $300 annual HVAC maintenance plan covering two visits earns $150 per visit (visit-based) or $25/month (ratable access). Cash sits as a balance-sheet liability until earned. Most bookkeeping gets this wrong; we configure deferred revenue accounts and post recognition monthly." },
    { q: "Do you handle financing, FSM, multi-trade?", a: "Yes. <strong>Financing</strong>: GreenSky, Synchrony, Wisetack, EnerBank with dealer-fee accounting and finance-company reconciliation. <strong>FSM</strong>: ServiceTitan, Housecall Pro, Jobber, FieldEdge integrated via summary journal entries. <strong>Multi-trade</strong>: per-trade P&amp;L with shared-cost allocation." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by truck count, trade mix, service-plan volume, financing volume, and FSM platform. No hourly billing. Most home services engagements include initial <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to restate service-agreement revenue recognition. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places home services operators lose the numbers (grid-3 buyer-cards).
  // 3 frozen H3s verbatim. (H2: Three places home services operators lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Service agreements booked as revenue", title: "Cash treated as revenue; ASC 606 ignored.", body: "The operator sells a $300 annual HVAC maintenance plan in March; the bookkeeper records $300 of revenue in March. ASC 606 says wrong &mdash; the obligation is two future tune-up visits (or 12 months of priority access), and revenue earns as the obligation is satisfied. The result: March revenue overstated, the deferred revenue liability invisible on the balance sheet, the business looking more profitable than cash flow supports, and the timing mismatch reversing brutally when plan sales slow. The fix is deferred revenue at sale, recognition per visit or ratably, and a plan-level liability schedule maintained monthly." },
    { signal: "No revenue-per-truck reporting", title: "Trucks expand without RPTD discipline.", body: "The operator adds the third truck because the second one is &ldquo;busy.&rdquo; Six months later margins have compressed and no one knows why. Without revenue per truck per day, average ticket, and close rate reported monthly by truck and by trade, expansion decisions run on intuition &mdash; some trucks pull their weight, some don&rsquo;t, and the books don&rsquo;t reveal which. The fix is RPTD calculated monthly from the FSM platform, average ticket and close rate tracked by technician and trade, and per-trade contribution margin for multi-trade operators &mdash; the dispatched-service KPI set as the headline of the monthly package." },
    { signal: "Financing reconciliation is informal", title: "Dealer fees buried, jobs unmatched.", body: "Customers finance a large share of high-ticket installs (HVAC systems, water heaters, exterior work). The finance company funds the contractor at 88&ndash;95% of ticket; the 5&ndash;12% dealer fee gets buried in revenue netting or scattered through fees and discounts, multi-year promotional periods add accrual complexity, and finance-company statements don&rsquo;t reconcile to specific jobs. The true cost of offering financing goes invisible. The fix is full ticket as revenue, dealer fee as a separate expense (never netted), finance funding matched to jobs, and dealer-fee-as-percentage-of-financed-revenue reported as a real cost line." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Home services accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; KPIs", title: "Revenue per truck &amp; dispatch KPIs", body: "RPTD, average ticket, close rate, callback rate, and membership penetration calculated monthly from FSM data &mdash; the dispatched-service KPI set as the headline of the financial package.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Deferred revenue", title: "Service-agreement deferred revenue", body: "Service-plan revenue posted to deferred revenue at sale, recognized per visit or ratably under ASC 606, with a plan-level liability schedule maintained monthly so the owner sees what is owed in future service.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03 &middot; Financing", title: "Consumer financing reconciliation", body: "GreenSky, Synchrony, Wisetack, and EnerBank: full ticket as revenue, dealer fees booked as a separate expense, finance-company funding matched to individual jobs and reconciled monthly.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; FSM", title: "FSM platform reconciliation", body: "ServiceTitan, Housecall Pro, Jobber, FieldEdge, and Service Fusion reconciled to QuickBooks via summary journal entries, with a full audit trail back to jobs and a clean monthly close.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "05 &middot; Multi-trade", title: "Per-trade P&amp;L &amp; inventory", body: "Per-trade P&amp;L with documented shared-cost allocation, plus truck and warehouse inventory with cycle counts and shrinkage recognition &mdash; typically on QuickBooks Enterprise for larger multi-trade operations.", href: "/quickbooks/enterprise/", cta: "QuickBooks Enterprise &rarr;" },
    { num: "06 &middot; Advisory", title: "Growth &amp; PE-readiness advisory", body: "Truck-expansion modeling, pricing strategy, service-plan penetration targets, acquisition diligence, and exit preparation &mdash; the judgment layer above the books as home services is rolled up by private equity.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // SUB-VERTICALS — Home services across trades (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Home services across trades. + 6 H3s)
  trades: [
    { title: "HVAC", body: "Highest ticket and parts intensity in the trades. Service-agreement penetration is the growth lever; install financing dominates volume; seasonality is severe. Often the lead trade in multi-trade operations, with a heavy ServiceTitan / FieldEdge user base." },
    { title: "Plumbing", body: "Moderate ticket, moderate parts intensity, less seasonal than HVAC. Service and repair dominate; high-ticket events (water heater, repipe, sewer) are often financed. Strong overlap with HVAC for multi-trade combinations." },
    { title: "Electrical", body: "Moderate ticket, moderate parts, with meaningful project work (panel upgrades, EV chargers, generator install) alongside service. Less commodity than HVAC and plumbing, so pricing discipline matters more." },
    { title: "Cleaning &amp; janitorial", body: "High truck-days, lower ticket, minimal parts inventory. Recurring contract revenue dominates (residential subscriptions, commercial weekly/monthly). Labor cost is the dominant economic driver; per-route profitability matters more than per-job." },
    { title: "Pest control", body: "Moderate ticket with a strong recurring revenue base (quarterly residential, monthly commercial). Service-agreement penetration is the key growth metric; chemicals are the main &ldquo;parts&rdquo; line. Often expanding into adjacent services (mosquito, termite, wildlife)." },
    { title: "Multi-trade &amp; specialty", body: "Multi-trade operators (HVAC + plumbing + electrical, often + generator or smart home), plus specialty trades: garage door, appliance repair, locksmith, chimney, septic, restoration. Per-trade P&amp;L and shared-cost allocation become essential." },
  ],

  // INTEGRATIONS — home services tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to your home services stack.)
  integrations: [
    "ServiceTitan &mdash; enterprise FSM, common on larger operations ($5M+)",
    "Housecall Pro &mdash; small-to-mid FSM, the most common platform",
    "Jobber &mdash; small-to-mid FSM for service and dispatch",
    "FieldEdge &mdash; FSM for larger HVAC and multi-trade operations",
    "Service Fusion &amp; Workiz &mdash; FSM for specific trade niches",
    "GreenSky, Synchrony, Wisetack, EnerBank &mdash; consumer financing reconciled monthly",
    "Gusto &amp; ADP &mdash; technician and dispatch/CSR payroll",
    "Bill.com, Ramp, Expensify &mdash; payables and expense capture",
  ],
  integrationsNote: "Different stack? If your FSM platform exports clean data, we can work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON TABLE — single-truck vs multi-truck (vs-scroll + vs-table, no collapse, T3).
  // (H2: Single-truck owner-operator vs. multi-truck dispatched operation.)
  comparison: [
    { row: "Operational metrics", us: "RPTD by truck, average ticket by technician, close rate, callback rate, membership penetration", them: "Revenue, gross margin, owner&rsquo;s draw" },
    { row: "Service agreements", us: "Hundreds-to-thousands of plans requiring deferred revenue automation and recognition discipline", them: "A few plans, manageable on a spreadsheet" },
    { row: "Financing volume", us: "Significant volume across multiple finance partners requiring monthly reconciliation and dealer-fee tracking", them: "Occasional, manually tracked" },
    { row: "Inventory", us: "Per-truck and warehouse perpetual inventory with cycle counts and shrinkage recognition", them: "One truck&rsquo;s parts, mentally tracked" },
    { row: "Labor model", us: "W-2 technicians + dispatch/CSR + admin, often performance-based pay with commission and spiff tracking", them: "Owner-operator (sole prop or S-corp owner-employee)" },
    { row: "Platform", us: "QuickBooks Enterprise + ServiceTitan / FieldEdge, sometimes a dedicated multi-trade platform", them: "QuickBooks Online Plus + Housecall Pro or Jobber" },
    { row: "Reporting cadence", us: "Weekly truck flash + monthly trade P&amp;L + quarterly KPI review + annual planning &amp; PE-readiness", them: "Monthly P&amp;L" },
  ],
  comparisonNote: "Most home services operators start on the left and grow into the right. The accounting transition needs to happen around truck 2 or 3 &mdash; before the second truck&rsquo;s data is permanently commingled with the first&rsquo;s in a way that&rsquo;s painful to separate when private-equity diligence arrives.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From service-agreement mess to revenue per truck. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your trade mix, truck count, service-plan volume, financing volume, FSM platform, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to restate service-agreement revenue recognition and rebuild financing reconciliation, plus the right chart-of-accounts setup for dispatched-service economics." },
    { num: "Phase 3", name: "Monthly FSM reconciliation &amp; KPIs", body: "Books reconciled monthly with the FSM platform, service-agreement recognition posted, financing partners reconciled, per-trade P&amp;L produced, and the dispatched-service KPI dashboard delivered." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with RPTD by truck, ticket and close-rate trends, and deferred revenue liability, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on truck expansion, pricing, plan-penetration targets, and PE-readiness when applicable." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose (no gutting).
  // (H2: Revenue per truck is the start. The PE roll-up is the point.)
  advisoryBody: [
    "Home services is being aggressively rolled up by private equity right now. HVAC, plumbing, electrical, and pest control operators with clean books, real KPI infrastructure, and disciplined service-agreement accounting are getting acquired at multiples that didn&rsquo;t exist five years ago. Operators with messy books and approximated KPIs sell for materially less &mdash; or don&rsquo;t sell at all.",
    "Once RPTD is visible by truck, service-agreement revenue is on ASC 606, financing partners are reconciled, and per-trade P&amp;L is clean, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Whether to add a truck, when to launch a service-plan campaign, whether to enter a new trade, how to position for sale, and what EBITDA an acquirer would normalize to &mdash; the decisions that determine the eventual exit multiple.",
    "That&rsquo;s where <strong>home services advisory</strong> comes in: a fractional CFO who knows your dispatched-service economics turning them into expansion strategy, plan-penetration modeling, and PE-readiness preparation. Accurate books come first; then that judgment turns them into decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Service-agreement cleanup", body: "Restate prior-period service-agreement revenue from cash-basis to ASC 606 deferred recognition, and rebuild plan-level liability schedules.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "QuickBooks Enterprise", body: "Multi-truck and multi-trade operators need Class/Location tracking, advanced inventory, and the platform headroom for serious dispatched-service operations.", href: "/quickbooks/enterprise/", cta: "Explore Enterprise &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Truck expansion, plan-penetration modeling, pricing strategy, and PE-readiness preparation as the home services roll-up wave continues.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Dispatched-service KPIs, service-agreement deferred revenue, financing reconciliation, FSM integration, multi-trade P&amp;L, inventory &middot; income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc., any FSM platform, or any consumer financing partner &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim, answers preserved verbatim;
  // enrichment append-only). visible faq__list = FAQPage schema (same array, NO dedup).
  // The old body carried exactly these 7 Q/A and no additional Q/A — nothing appended,
  // nothing gutted. (H2: Home services accounting questions.)
  faq: [
    { q: "Why is home services accounting different from regular bookkeeping?", a: "Home services accounting fails generic bookkeeping at four distinct points. First, the fundamental operational unit is the truck or technician, not the project &mdash; revenue per truck per day (RPTD), average ticket, close rate, and callback rate are the metrics that determine whether the business is healthy, and none of them show up in a standard P&amp;L. Second, service agreements and maintenance plans (HVAC twice-yearly tune-ups, pest control quarterly visits, lawn care annual programs) are paid upfront or on subscription but earn ratably over the service period &mdash; generic bookkeeping treats the cash payment as immediate revenue, overstating current revenue and understating deferred-revenue liabilities. Third, consumer financing through GreenSky, Synchrony, Wisetack, and EnerBank requires dealer-fee accounting (the contractor receives 88-95% of ticket; the dealer fee is a real cost) plus multi-year reconciliation of finance company payments back to original jobs. Fourth, field-service management platforms (ServiceTitan, Housecall Pro, Jobber) are the operational source of truth for jobs and invoices, requiring summary-level reconciliation to QuickBooks rather than transaction-level sync. Generic bookkeeping handles none of this. To get your trucks on real numbers, speak to a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "What is revenue per truck per day and why does it matter?", a: "Revenue per truck per day (RPTD) is the headline operational metric for any dispatched-service business &mdash; total revenue divided by truck-days deployed. A two-truck HVAC company operating 5 days a week generates ~520 truck-days per year; if they did $1.5M in revenue, RPTD is ~$2,884. Healthy RPTD varies significantly by trade: HVAC service+install typically $2,500-$4,000+, plumbing $1,800-$3,000, electrical $1,500-$2,500, cleaning $400-$800 (much higher truck-days, lower ticket), pest control $800-$1,500. RPTD growing year over year means the operation is getting more productive per asset deployed; flat or declining RPTD while revenue grows means you&rsquo;re just adding trucks without improving the unit economics. Pair RPTD with average ticket (revenue per call) and close rate (% of calls that convert to billable work) and you have the dispatched-service economic picture in three numbers." },
    { q: "How do you handle service agreements and maintenance plans correctly?", a: "Service agreements and maintenance plans are deferred revenue under ASC 606 &mdash; cash collected upfront or on subscription, but revenue recognized as service is delivered or ratably over the contract period (whichever pattern matches the performance obligation). A $300 annual HVAC maintenance plan covering two visits earns $150 per visit (if the visits are the performance obligation) or $25/month ratably (if access to service is the obligation). The cash sits as a deferred revenue liability on the balance sheet until earned. Most generic bookkeeping treats the $300 as immediate revenue when collected, which overstates current revenue by the amount of unearned plans, understates liabilities, and <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">creates a mess</a> when plans aren&rsquo;t fulfilled (refunds, customer churn). Worse, on a fast-growing service-plan-selling business, the books look much more profitable than the cash flow suggests &mdash; until growth slows and the timing mismatch reverses. We configure deferred revenue accounts, post the recognition entries monthly, and produce the plan-level liability schedule that actually tells the owner what&rsquo;s owed in future service." },
    { q: "How does consumer financing accounting work (GreenSky, Synchrony, Wisetack)?", a: "Consumer financing is dominant in big-ticket home services &mdash; HVAC installs, water heater replacements, roof and exterior work. When a customer finances a $12,000 system through GreenSky, Synchrony, or Wisetack: the customer signs the loan, the finance company funds the contractor (typically within 1-5 business days), the contractor receives 88-95% of ticket (the dealer fee is 5-12% depending on the program and credit profile), and the customer pays the finance company over 24-120 months. Accounting requires recording the full $12,000 as revenue, the discount as a dealer-fee expense (not netted against revenue, which obscures both the revenue and the cost of capital), the funded amount as cash received. For longer-term zero-interest promotional periods, additional accrual treatment may apply. We configure financing accounts, reconcile finance-company statements monthly (matching individual jobs to deposits), and produce dealer-fee-as-percentage-of-financed-revenue reporting so the owner sees the true cost of offering financing." },
    { q: "Do you integrate with ServiceTitan, Housecall Pro, Jobber, and other FSM platforms?", a: "Yes. Field-service management (FSM) platforms &mdash; ServiceTitan, Housecall Pro, Jobber, FieldEdge, Service Fusion, Workiz &mdash; are the operational source of truth for home services operations: dispatch, customer history, invoicing, payment processing, technician performance. The integration to QuickBooks is typically through summary-level journal entries (not transaction-level sync) since the FSM platform is where job-level detail lives. Monthly reconciliation: revenue from FSM matched to deposits in the bank, financing splits reconciled to finance company statements, sales tax accruals matched, customer balances aged appropriately. We work with all major FSM platforms &mdash; ServiceTitan and FieldEdge for larger operations (often $5M+), Housecall Pro and Jobber for small-to-mid (most common), Service Fusion and Workiz for specific trade niches. The FSM remains the operational system; QuickBooks remains the financial general ledger; the reconciliation discipline between them is what makes the books reliable." },
    { q: "How do you handle multi-trade home services (HVAC + plumbing + electrical)?", a: "Many home services businesses operate multiple trades &mdash; most commonly HVAC, plumbing, and electrical combined, sometimes adding generator service, indoor air quality, or smart-home integration. Multi-trade operators need <a href=\"/accounting/job-costing/\">per-trade P&amp;L</a> to know which trade actually drives profitability &mdash; gross margin, labor utilization, average ticket, and parts cost all vary significantly across trades, and a single consolidated P&amp;L masks the trade that&rsquo;s subsidizing the others. We configure Class or Service Item tracking by trade in QuickBooks, allocate shared costs (truck and equipment depreciation, dispatch and CSR labor, marketing, occupancy) across trades using a documented methodology, and produce per-trade contribution margin monthly. Multi-trade operators discover, on first honest per-trade reporting, that one trade typically subsidizes the others &mdash; usually the install-heavy trade (HVAC) carries the service-heavy trades, or the inverse depending on the operation. Knowing which is the precondition to acting on it." },
    { q: "What about truck and warehouse inventory for home services?", a: "Inventory management varies hugely by trade. HVAC carries substantial truck inventory ($5K-$15K per truck in parts, condensers, refrigerant) plus warehouse stock of equipment. Plumbing carries moderate truck inventory ($2K-$5K) plus fixture and water heater stock. Electrical similar to plumbing. Cleaning and pest control carry minimal inventory (chemicals, consumables). For inventory-heavy trades, the accounting challenges are perpetual inventory tracking (real-time inventory levels updated as parts are pulled for jobs), cycle counts to reconcile perpetual records to physical stock, shrinkage recognition (theft, damage, mis-counts, technician &lsquo;truck losses&rsquo;), and dead-stock identification. Inventory shrinkage of 2-5% of inventory value is typical; 5%+ signals operational problems. We configure inventory tracking, integrate with the FSM platform&rsquo;s parts allocation, schedule cycle counts, and recognize shrinkage monthly. For multi-truck operations, by-truck inventory tracking becomes essential &mdash; and is where most home services bookkeeping fails." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/home-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/home-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-homeservices-definition","#acctind-homeservices-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Home Services","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Home Services Accounting","serviceType":"Specialist accounting and bookkeeping for home services operators","description":"Specialist accounting for U.S. home services — HVAC, plumbing, electrical, cleaning, pest control, and multi-trade operators. Covers dispatched-service economics (revenue per truck per day, average ticket, close rate), service-agreement deferred revenue under ASC 606, consumer financing reconciliation (GreenSky, Synchrony, Wisetack, EnerBank), truck and warehouse inventory, multi-trade per-trade P&L, and FSM platform integration (ServiceTitan, Housecall Pro, Jobber, FieldEdge, Service Fusion), delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. home services operators — HVAC, plumbing, electrical, cleaning, pest control, multi-trade"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Home services accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What home services accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Home services accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
