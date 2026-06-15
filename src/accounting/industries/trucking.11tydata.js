/* /accounting/industries/trucking/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-trucking.txt (42 headings, 7 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/trucking/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/accounting/industries/
 * construction.njk + .11tydata.js (proven t-mofu cobalt) for structure + the FULL
 * schema set (WebPage, BreadcrumbList, Service, ItemList, FAQPage, QAPage);
 * src/quickbooks/online.njk for the multi-column vs-table + grid patterns.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns the footer columns / the newsletter line is
 * dropped per protocol T2. The 5 quick-answer questions render as NON-heading
 * ai-summary__question (baseline captured them as <dt>, NOT <hN>) to keep the frozen
 * heading inventory exact. The H1 + final-CTA H2 ("Get trucking books that show real
 * cost per mile.") render via the t-mofu layout hero + ctaBand.
 *
 * FAQ: contract carries 7 verbatim Q/A (questions verbatim; answers preserved verbatim,
 * enrichment append-only). All 7 render as visible faq__list AND emit FAQPage — NO
 * dedup. The baseline body also carried no extra standalone Q/A beyond these 7; the
 * "advice vs bookkeeping" advisory substance is preserved as section prose in the
 * advisory mission block (no gutting), not duplicated into the FAQ array. FAQPage +
 * QAPage emitted from the same arrays — single source of truth.
 *
 * SCHEMA: WebPage, BreadcrumbList, Service (with hasOfferCatalog), ItemList
 * (deliverables), FAQPage (all 7, NO dedup), QAPage (from the 5-question ai-summary).
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc. or any fuel card, factoring company, ELD, or TMS platform;
 * bookkeeping/ProAdvisor scope — does NOT file income taxes, give classification legal
 * opinions, or handle DOT representation; coordinates with the client's CPA/EA/attorney.
 * No <strong> in the dark hero subheading. CTA labels are the canonical lexicon only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Trucking accounting, plainly." (from baseline TL;DR body, national scope)
  definition: [
    "Trucking has complications generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> can&rsquo;t touch. <strong>IFTA quarterly fuel-tax reporting</strong> tracks miles and fuel by every U.S. state and Canadian province; under-reported jurisdictional data compounds into audit exposure that can reach back years. <strong>Per-diem</strong> for DOT-regulated drivers qualifies for the 80% deduction rate (not the standard 50%) when properly documented. <strong>Owner-operator vs company driver classification</strong> has been heavily enforced by the IRS and DOL, with lease-purchase arrangements particularly scrutinized. <strong>Equipment depreciation</strong> on $150K&ndash;$250K+ Class 8 tractors involves Section 179 limits, bonus-depreciation phase-down, trade-in considerations, and ASC 842 lease analysis.",
    "<strong>Fuel cards</strong> (Comdata, EFS Wex, TCH, Pilot, Love&rsquo;s) need monthly reconciliation feeding both IFTA and the books. <strong>Factoring</strong> &mdash; selling receivables to Apex, RTS, eCapital, OTR Solutions, or Triumph &mdash; needs accounting that captures the advance, reserve, fee, and eventual release correctly, not just the cash that lands. And <strong>cost-per-mile</strong> and <strong>revenue-per-mile</strong> are the fundamental trucking economic metrics most operators never track.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure <a href=\"/quickbooks/online/\">QuickBooks</a> for trucking economics, reconcile fuel cards and factoring monthly, produce IFTA-ready quarterly reports, handle owner-operator 1099s with W-9 discipline, maintain equipment registers for depreciation, and surface RPM/CPM by truck and lane. For carriers ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into rate-negotiation, expansion, and lane-strategy decisions. We deliver the books; your CPA or EA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Trucking accounting, in five questions.)
  aiSummary: [
    { q: "Why is trucking accounting different?", a: "Complications no other industry shares: <strong>IFTA</strong> quarterly fuel-tax reporting across states and provinces, <strong>per-diem</strong> at the 80% deduction rate for DOT-regulated drivers, <strong>owner-operator classification</strong> with IRS and DOL enforcement risk, <strong>equipment depreciation</strong> under Section 179 and bonus rules, <strong>factoring</strong> accounting, and <strong>cost-per-mile</strong> economics. Company-wide income and expense can&rsquo;t tell you whether each truck makes money." },
    { q: "Do you handle IFTA quarterly fuel-tax filing?", a: "Yes. Miles by jurisdiction from ELD or trip sheets, plus fuel purchases by jurisdiction from your fuel cards (Comdata, EFS Wex, TCH, Pilot, Love&rsquo;s), reconciled to <strong>jurisdiction-by-jurisdiction fuel tax</strong> and filed quarterly with your base state &mdash; April 30, July 31, October 31, January 31 deadlines." },
    { q: "How does per-diem work for truckers?", a: "Drivers subject to DOT hours-of-service rules and traveling away from their tax home qualify for the <strong>transportation-industry per-diem</strong> meal allowance, with an <strong>80% deduction</strong> rate (versus 50% standard). The IRS sets the rate annually. It&rsquo;s either paid as non-taxable reimbursement by the employer or claimed as a business expense by the owner-operator on Schedule C." },
    { q: "Do you handle owner-operator vs company driver, equipment depreciation, and factoring?", a: "Yes. <strong>Owner-operator</strong> 1099 with W-9 and year-end 1099-NEC; <strong>company driver</strong> W-2 with full payroll &mdash; the legal classification stays with your attorney or CPA. <strong>Equipment depreciation</strong> under Section 179, bonus, and MACRS with ASC 842 lease analysis. <strong>Factoring</strong> with the advance, reserve, and fee recorded correctly." },
    { q: "What does it cost?", a: "A fixed monthly fee against a written scope &mdash; driven by truck count, operation type (owner-operator vs fleet), factoring volume, and multi-jurisdiction complexity. No hourly billing. IFTA prep is typically included; major <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> for files with prior-period drift is scoped separately. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places trucking operations lose the numbers (grid-3 buyer-cards).
  // 3 frozen H3s verbatim. (H2: Three places trucking operations lose the numbers. + 3 H3s)
  challenges: [
    { signal: "IFTA reporting is informal", title: "Approximated miles, missing fuel receipts.", body: "Quarterly IFTA returns prepared from incomplete data &mdash; approximated jurisdictional miles because ELD data wasn&rsquo;t exported, missing receipts because cash fuel wasn&rsquo;t tracked, gallons reported by truck stop rather than by jurisdiction. Each quarter compounds the next, and IFTA audits can reach back four years. The fix is ELD data integrated to mileage tracking, fuel cards reconciled monthly, cash fuel captured with location, and returns produced from real data with audit-grade documentation behind every number." },
    { signal: "Owner-operator classification is sloppy", title: "1099/W-2 misclassification exposure.", body: "Drivers classified as 1099 owner-operators who functionally operate as employees create real IRS and DOL exposure &mdash; back payroll taxes, workers&rsquo; comp, unemployment, penalties &mdash; and lease-purchase arrangements have been heavily scrutinized. California&rsquo;s AB5 and similar state tests are aggressive. The fix is classification reviewed with your transportation attorney or CPA, books configured to support whichever classification is legally correct, W-9 discipline and 1099-NEC for true owner-operators, or proper W-2 payroll for employees." },
    { signal: "Cost economics are invisible", title: "No cost-per-mile or revenue-per-mile reporting.", body: "Without RPM and CPM by truck, by lane, or by operation type, rate-negotiation, lane-selection, and truck-acquisition decisions get made on intuition. Most carriers don&rsquo;t know whether their longest-running lane is profitable or whether a specific truck loses money every mile it runs. The fix is a chart of accounts configured for trucking, RPM and CPM reported monthly by truck and aggregated by lane, and fuel- and maintenance-cost per mile benchmarked against industry norms." },
  ],

  // WHO WE SERVE — trucking at every scale (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Trucking at every scale. + 6 H3s)
  scale: [
    { title: "Independent owner-operators", body: "Single-truck operations under their own authority or leased to a motor carrier. IFTA, per-diem, Schedule C bookkeeping, factoring reconciliation, and RPM/CPM for the truck &mdash; the reference case for owner-operator accounting." },
    { title: "Lease-purchase drivers", body: "Drivers operating company equipment under lease-to-own contracts &mdash; a heavily scrutinized classification. We coordinate with your attorney on whether the arrangement holds up as 1099 or should be restructured, and the bookkeeping supports whichever classification is determined." },
    { title: "Small fleets (2&ndash;20 trucks)", body: "Owner-operated small fleets with mixed driver structures (some company drivers, some owner-operators). Per-truck P&amp;L, multi-truck IFTA, an equipment register, fleet-level cost-per-mile reporting, and owner-operator settlement processing." },
    { title: "Mid-size carriers (20&ndash;100 trucks)", body: "Established carriers with TMS integration, maintenance shops, dispatchers, and full payroll for drivers and back office. Operations-level reporting, lane profitability, asset utilization, often <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> with class tracking by truck." },
    { title: "Freight brokers", body: "Brokers earning margin between shipper rate and carrier pay. A different revenue model than carriers (margin-based, not freight-revenue based), with distinct accounting for shipper receivables and carrier payables, broker-bond accounting, and carrier-vetting documentation." },
    { title: "Specialized trucking", body: "Hazmat, refrigerated, flatbed, oversize/overweight, tanker, intermodal, and last-mile delivery. Each carries specialty insurance, equipment, route considerations, and rate premiums, so the bookkeeping adapts to the specialty rather than forcing a generic template." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Trucking accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; IFTA", title: "IFTA quarterly fuel-tax", body: "Miles by jurisdiction from your ELD, fuel by jurisdiction from your fuel cards, and quarterly returns produced from real data with audit-grade documentation behind every number.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "02 &middot; Per-diem", title: "Per-diem at the 80% rate", body: "Transportation-industry per-diem tracked correctly, away-from-home documentation maintained, the 80% deduction supported, and current IRS rates verified annually.", href: "/accounting/bookkeeping/" },
    { num: "03 &middot; Drivers", title: "Driver classification &amp; payroll", body: "Owner-operator 1099 with W-9 and year-end 1099-NEC, company-driver W-2 with full payroll, and settlement processing &mdash; with classification coordinated with your attorney.", href: "/accounting/payroll-management/" },
    { num: "04 &middot; Equipment", title: "Depreciation &amp; lease analysis", body: "An equipment register maintained, Section 179 plus bonus depreciation plus MACRS coordinated with your CPA, and ASC 842 lease classification for tractors and trailers.", href: "/accounting/bookkeeping/" },
    { num: "05 &middot; Factoring", title: "Factoring &amp; fuel-card reconciliation", body: "Factoring advances, reserves, fees, and releases recorded correctly, and fuel cards (Comdata, EFS Wex, TCH, Pilot, Love&rsquo;s) reconciled monthly to the bank.", href: "/accounting/bookkeeping/" },
    { num: "06 &middot; Advisory", title: "Rate &amp; lane advisory", body: "Cost-per-mile and revenue-per-mile by truck and lane, rate-negotiation support, fleet-expansion modeling, and equipment-financing analysis &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/" },
  ],

  // INTEGRATIONS — trucking stack reconciled with QuickBooks (checks-list).
  // (H2: Connected to your trucking stack.)
  integrations: [
    "Comdata &mdash; fuel-card statements reconciled monthly, feeding IFTA",
    "EFS Wex &mdash; fuel purchases tracked by jurisdiction",
    "TCH &mdash; fuel-card transactions matched to the books",
    "Pilot Flying J &amp; Love&rsquo;s &mdash; fuel stops captured by location",
    "Apex Capital, RTS Financial, eCapital &mdash; factoring advance/reserve/fee accounting",
    "OTR Solutions &amp; Triumph &mdash; factoring statements reconciled monthly",
    "Motive (KeepTruckin), Samsara, Geotab &mdash; ELD mileage by jurisdiction",
    "McLeod &amp; TruckingOffice &mdash; TMS data exported to QuickBooks",
  ],
  integrationsNote: "Different stack? If your TMS, ELD, or fuel card exports clean data, we work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON — owner-operator vs fleet carrier bookkeeping. vs-scroll + vs-table (no collapse, T3).
  // (H2: Owner-operator bookkeeping vs. fleet carrier bookkeeping.)
  compare: [
    { cap: "Entity structure", oo: "Sole proprietor (Schedule C) or single-member LLC", fleet: "S-corp or C-corp with multiple employees, sometimes a multi-entity holding structure" },
    { cap: "IFTA reporting scope", oo: "Single-truck data, manageable manually", fleet: "Fleet-wide ELD integration required; per-truck and aggregate reporting" },
    { cap: "Driver payroll", oo: "Owner&rsquo;s draw (sole prop/LLC) or S-corp owner W-2 plus draw", fleet: "Multi-driver W-2 payroll plus owner-operator 1099 settlements, multi-state where drivers reside" },
    { cap: "P&amp;L reporting", oo: "Single P&amp;L with the truck as the unit", fleet: "Per-truck, per-lane, and per-driver P&amp;L, plus a consolidated fleet view" },
    { cap: "Equipment register", oo: "One tractor, one trailer", fleet: "Multi-truck fleet with rolling acquisitions, trades, and disposals; sometimes leased equipment" },
    { cap: "Platform", oo: "QuickBooks Online Plus or specialized owner-operator software", fleet: "QuickBooks Enterprise with class tracking by truck, or a dedicated trucking platform feeding QuickBooks" },
    { cap: "Reporting cadence", oo: "Monthly P&amp;L plus RPM/CPM", fleet: "Weekly truck flash, monthly fleet P&amp;L, quarterly lane review, annual fleet strategy" },
  ],
  compareNote: "Most carriers start on the left and grow into the right. The accounting transition usually happens around the third or fourth truck &mdash; when manual processes stop scaling and per-truck reporting becomes essential to know which trucks are earning their place.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From IFTA scramble to cost per mile. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your operation size, truck count, driver structure, fuel-card and factoring setup, ELD platform, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Setup &amp; cleanup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to reconcile prior-period fuel cards and factoring, rebuild the equipment register, and restate IFTA documentation &mdash; plus the right chart of accounts for trucking economics." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; quarterly IFTA", body: "Books reconciled monthly with fuel cards, factoring, driver settlements, and equipment. Quarterly IFTA returns produced from real data and filed with your base state by the deadline." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with RPM/CPM by truck and lane, fuel-cost-per-mile benchmarking, and maintenance trending, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on rate negotiation, lane strategy, and fleet expansion." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose (preserves the
  // baseline advisory / "advice vs bookkeeping" substance; no gutting).
  // (H2: RPM and CPM are the start. The next truck purchase is the point.)
  advisoryBody: [
    "Once IFTA is clean, per-diem is captured correctly, drivers are classified right, and cost-per-mile is visible by truck and lane, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Which lanes to drop, which to expand, when to add a truck, when to park one, whether to refinance, whether the rate from a new shipper actually makes money after all costs &mdash; the decisions that actually move a trucking operation.",
    "That&rsquo;s where <strong>trucking advisory</strong> comes in: a fractional CFO who knows your CPM, turning it into rate-negotiation positions, lane-strategy recommendations, fleet-expansion modeling, and equipment-financing analysis. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin per mile &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "IFTA, per-diem, driver classification (operational), equipment, factoring, fuel-card reconciliation, RPM/CPM &middot; income-tax filing, classification opinions, and DOT representation coordinated with your CPA/EA/attorney" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any fuel card, factoring company, ELD, or TMS platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim; answers preserved verbatim).
  // visible faq__list = FAQPage schema (same array, NO dedup). (H2: Trucking accounting questions.)
  faq: [
    { q: "Why is trucking accounting different from regular bookkeeping?", a: "Trucking accounting involves complications no other industry shares. IFTA (International Fuel Tax Agreement) requires quarterly fuel-tax reporting across every U.S. state and Canadian province where a truck operates, with total miles tracked by jurisdiction and fuel purchases tracked by jurisdiction &mdash; under-reporting creates audit exposure that can compound across years. Per-diem treatment for DOT-regulated drivers allows the 80% deduction rate rather than the standard 50% meal deduction, but only when properly categorized. Owner-operator vs company driver classification has been the subject of major IRS and DOL enforcement, with lease-purchase arrangements particularly scrutinized. Equipment depreciation involves Section 179, bonus depreciation, trade-in considerations, and the operating-vs-finance-lease question under ASC 842. Fuel-card reconciliation across Comdata, EFS Wex, TCH, and others has its own patterns. Freight factoring with advance percentages and reserve accounts needs correct accounting. Generic bookkeeping handles none of this &mdash; trucking-specialist accounting handles all of it." },
    { q: "Do you handle IFTA quarterly fuel-tax reporting?", a: "Yes. IFTA reporting requires tracking total miles driven in each jurisdiction (state or Canadian province) and fuel purchases made in each jurisdiction for the quarter, then calculating fuel-tax owed or refunded to each jurisdiction based on the difference between fuel consumed (based on miles and your truck&rsquo;s MPG) and fuel purchased. The mechanics: pull mileage data from your ELD or trip sheets, pull fuel-purchase data from your fuel card statements (Comdata, EFS Wex, TCH, Pilot Flying J, Love&rsquo;s, or direct fuel stops), calculate jurisdiction-by-jurisdiction fuel tax, file the IFTA return in your base state by the quarterly deadline (April 30, July 31, October 31, January 31). Done right, this is a routine quarterly process. Done wrong (incomplete mileage data, missing fuel receipts, approximated jurisdictional splits), audit exposure builds quarter by quarter. We integrate with major ELD platforms and fuel cards, maintain the trip data, and produce IFTA-ready quarterly reports for your filing." },
    { q: "How does per-diem work for truck drivers and do you handle it?", a: "Drivers who are subject to DOT hours-of-service rules and travel away from their tax home (overnight stays away from home) qualify for the special transportation-industry per-diem meal allowance. The IRS sets the rate annually &mdash; recent years have been around $69 per full day domestic and $74 per full day international &mdash; and transportation workers can deduct 80% of the per-diem (versus 50% for most meal expenses). Per-diem can be paid by the employer as non-taxable reimbursement (reducing both employee taxable income and employer payroll tax) or claimed by the driver as an unreimbursed business expense (for owner-operators on Schedule C, or under accountable plan rules for employees). The mechanics matter: improperly paid per-diem becomes taxable wages; properly paid per-diem reduces tax burden meaningfully. We configure per-diem tracking, ensure documentation supports the away-from-home test, and coordinate with your CPA on the tax-return treatment. Per-diem rates change annually &mdash; verify current rates before reporting." },
    { q: "Do you handle owner-operator vs company driver classification?", a: "Yes &mdash; operationally, in coordination with your attorney or CPA on the legal characterization. Owner-operators are 1099 independent contractors operating their own equipment under their own authority or leased to a motor carrier; company drivers are W-2 employees driving company-owned equipment. The classification has major tax and legal implications: payroll taxes, workers&rsquo; compensation, unemployment insurance, IRS misclassification penalties, and state-specific tests (California&rsquo;s AB5 has been particularly aggressive). Lease-purchase arrangements (where the driver operates a company truck under a lease-to-own contract) have been heavily scrutinized as potentially disguised employment. We configure the bookkeeping to support whichever classification is correct for your operation &mdash; 1099 onboarding with W-9 collection and 1099-NEC year-end filing for true owner-operators, or W-2 employment with full payroll for company drivers &mdash; but the legal determination of which classification applies belongs to your attorney or CPA familiar with the federal and state tests." },
    { q: "How do you handle equipment depreciation, Section 179, and bonus depreciation?", a: "Class 8 tractors and trailers are major capital assets ($150K-$250K+ for a new sleeper tractor) with several available tax-treatment options. Section 179 expensing allows immediate deduction up to an annual limit (current limit changes annually; verify with your CPA). Bonus depreciation allows additional first-year deduction at a percentage that has been phasing down &mdash; recent years have been 80%, then 60%, with continued phase-down scheduled. Used equipment qualifies for bonus depreciation under TCJA changes. The actual depreciation strategy combines these methods plus regular MACRS depreciation, optimized for the specific tax situation. The operating-lease vs finance-lease question under ASC 842 (effective for private companies in 2022) requires analysis of each tractor or trailer lease to determine balance-sheet treatment &mdash; most truck leases are finance leases under ASC 842&rsquo;s criteria. We maintain the equipment register, calculate depreciation under whatever method your CPA elects, and produce the fixed-asset schedules tax filing needs. Depreciation strategy decisions stay with your CPA." },
    { q: "Do you handle factoring and freight invoice financing?", a: "Yes. Freight factoring &mdash; selling receivables to a factoring company (Apex Capital, RTS Financial, eCapital, OTR Solutions, Triumph Business Capital) for immediate cash &mdash; is extremely common in trucking because shipper payment terms (typically 30-60 days) are too slow for fuel and operating cash flow. The mechanics: carrier delivers freight and submits invoice to factoring company, factoring company advances 90-97% of invoice value within 24 hours (typically), shipper pays factoring company directly on terms, factoring company releases remaining reserve to carrier net of factoring fee (typically 1-5% of invoice value). Accounting requires recording: full invoice value as receivable, advance as cash, reserve as a receivable from factoring company, factoring fee as expense, and matching the eventual reserve release to the original invoice. Generic bookkeeping typically gets this wrong by recording only the cash advance as revenue, understating both revenue and expenses. We configure the factoring workflow correctly, reconcile factoring statements monthly, and surface the true cost of factoring as a percentage of revenue." },
    { q: "What about cost-per-mile and revenue-per-mile reporting?", a: "Cost-per-mile (CPM) and revenue-per-mile (RPM) are the fundamental trucking economic metrics &mdash; the difference between a profitable operation and one that&rsquo;s slowly going broke. Revenue per mile is total freight revenue divided by total miles driven (loaded and empty). Cost per mile breaks into fixed costs (truck payment, insurance, permits, IFTA, administrative) and variable costs (fuel, maintenance, tires, driver pay, per-diem). A common range for over-the-road operation: revenue per mile $2.00-$3.00+, fuel cost per mile $0.45-$0.65 (varies hugely with diesel prices), maintenance $0.15-$0.25, total cost per mile $1.50-$2.50 depending on operation type. The margin between RPM and CPM is where the operation lives or dies. Most owner-operators and small fleets don&rsquo;t track these monthly &mdash; we configure the bookkeeping to surface RPM and CPM as the headline numbers, broken down by load type, lane, or even individual truck for fleets." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Trucking books cleanup", body: "Reconcile prior-period fuel cards and factoring, rebuild the equipment register, and restate IFTA documentation &mdash; then transition into accurate monthly bookkeeping.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { title: "QuickBooks Enterprise", body: "Fleet carriers need class tracking by truck, advanced reporting, and the platform headroom for multi-truck operations.", href: "/quickbooks/enterprise/" },
    { title: "Fractional CFO &amp; advisory", body: "Rate negotiation, lane strategy, fleet-expansion modeling, and equipment-financing analysis &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; construction, real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/trucking/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/trucking-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-trucking-definition","#acctind-trucking-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Trucking","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Trucking Accounting & Bookkeeping","serviceType":"Specialist accounting and QuickBooks bookkeeping for trucking operations","description":"IFTA quarterly fuel-tax reporting, per-diem treatment, owner-operator vs company driver classification, equipment depreciation and lease analysis, fuel-card reconciliation, freight-factoring accounting, and cost-per-mile/revenue-per-mile reporting for U.S. owner-operators, small fleets, and mid-size carriers, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes or provide DOT representation — coordinates with the client's CPA, EA, or attorney.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. owner-operators, small fleets, and mid-size trucking carriers"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Trucking accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What trucking accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Trucking accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
