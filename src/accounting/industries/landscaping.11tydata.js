/* /accounting/industries/landscaping/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-landscaping.txt (42 headings, 7 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/landscaping/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/accounting/industries/construction
 * .njk + .11tydata.js (job-costing substance closely related) + src/quickbooks/online.njk
 * (proven t-mofu cobalt) for structure + schema. National scope.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: the contract carries 7 verbatim Q/A (T4 — NO dedup). All 7 render in the visible
 * faq__list AND emit to FAQPage from the SAME array. The old body Q/A is identical to the
 * 7 contract Q/A, so preserving the FAQ block preserves the body Q/A (no gutting). The 5
 * ai-summary questions feed QAPage. FAQPage + QAPage emitted from the same arrays.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc. or any landscaping platform; bookkeeping/ProAdvisor scope —
 * does NOT file income taxes, coordinates with the client's CPA/EA. No <strong> in the
 * dark hero subheading. CTA labels: canonical lexicon only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Landscaping accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "Landscaping runs <strong>three distinct revenue streams</strong> that each break generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a>. <strong>Recurring maintenance</strong> (lawn-care programs, commercial contracts, seasonal snow agreements) is <strong>deferred revenue under ASC 606</strong> &mdash; cash collected on signup or seasonally, revenue earned over the service period. <strong>Design-build project work</strong> (installations, hardscape, irrigation) needs <strong>WIP tracking and percentage-of-completion or completed-contract recognition</strong>. <strong>Enhancement services</strong> (mulch installs, cleanups, plantings) are typically recognized as work completes. On top of that, northern operators face <strong>severe seasonality</strong> &mdash; 70&ndash;80% of revenue in 6&ndash;7 months &mdash; making off-season cash flow the difference between surviving winter and not.",
    "Crew-based dispatched economics demand <strong>revenue per crew per day</strong> (RPCD), route density, and average stop ticket that no standard P&amp;L produces, and the <strong>equipment fleet</strong> &mdash; trucks, trailers, commercial mowers, skid steers &mdash; is capital-intensive with Section&nbsp;179, bonus, and MACRS depreciation to coordinate. Industry platforms (LMN, Aspire, ServiceAutopilot, RealGreen, JobNimbus, SingleOps) are the operational source of truth that must reconcile to the ledger. <strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who set this up correctly in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keep it accurate monthly, and turn it into per-crew and per-project profitability you can price and grow from. For operators ready to act, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns the numbers into crew, equipment, and seasonal decisions. We deliver the books; your CPA or EA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., zero commission on any platform.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // Feeds QAPage. (H2: Landscaping accounting, in five questions.)
  aiSummary: [
    { q: "Why is landscaping accounting different?", a: "Four structural issues generic bookkeeping misses: <strong>maintenance-contract deferred revenue</strong> under ASC&nbsp;606, <strong>design-build WIP and project recognition</strong>, <strong>crew-based dispatched economics</strong> (RPCD, route density, average stop), and <strong>severe seasonality</strong> &mdash; 70&ndash;80% of revenue concentrated in 6&ndash;7 months for northern operators." },
    { q: "How do maintenance contracts work?", a: "As <strong>deferred revenue under ASC&nbsp;606</strong>. A $1,200 annual lawn program collected in spring earns ~$43 per visit (a 28-visit season) or ratably over the service months. Seasonal snow contracts recognize over the Nov&ndash;Mar service period; commercial quarterly contracts recognize ratably each quarter." },
    { q: "How does design-build accounting work?", a: "<strong>WIP tracking plus percentage-of-completion or completed-contract</strong> recognition under ASC&nbsp;606. Materials and labor coded to the project, deposits booked as customer advances, progress billings tracked against costs, revenue recognized monthly under the project&rsquo;s method &mdash; so project-level profit is visible at completion, not guessed at." },
    { q: "What is revenue per crew per day?", a: "Total revenue divided by crew-days deployed. <strong>Maintenance RPCD typically runs $800&ndash;$2,000</strong> for a foreman-plus-two crew; <strong>design-build RPCD $2,500&ndash;$5,000+</strong>. Combined with route density and average stop ticket, RPCD shows which crews and routes actually earn their place." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by crew count, revenue mix (maintenance vs. design-build vs. snow), platform, and equipment fleet size. No hourly billing. Most landscaping engagements begin with a <a href=\"/quickbooks/file-review/?intent=file-review\">file review</a> and cleanup to restate maintenance-contract revenue. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places landscapers lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places landscapers lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Maintenance booked as cash", title: "Annual prepaids treated as cash, ASC 606 ignored.", body: "Sell a $1,200 annual lawn program in spring and book $1,200 of revenue that month, and ASC&nbsp;606 says wrong &mdash; the obligation is 28 visits across the season, earned per visit or ratably. Spring revenue is overstated by ~$1,000 per program, the deferred-revenue liability is invisible, and the operation looks far more profitable than the season&rsquo;s real margin. The fix is deferred revenue at sale, recognized per visit or ratably, with a deferred-revenue waterfall produced monthly &mdash; snow contracts handled the same way over Nov&ndash;Mar." },
    { signal: "No per-crew economics", title: "Maintenance subsidizes design-build (or vice versa).", body: "Run three maintenance crews and a design-build crew with no separate P&amp;L and RPCD, route density, average stop, and project margin are all approximated. One service line quietly subsidizes the others &mdash; usually design-build carries maintenance, or commercial carries residential &mdash; but the books never reveal which way it runs. The fix is class or service-item tracking by crew and service line, RPCD calculated monthly per crew, and design-build margin reported at completion, so the dispatched-service KPI set becomes the headline of the monthly package." },
    { signal: "Seasonality &amp; fleet unhandled", title: "Off-season cash flow blind, fleet decisions on intuition.", body: "Without proper deferred revenue, monthly depreciation, and forward cash forecasting, the operation looks artificially profitable in peak season and unexpectedly tight in winter. Fleet decisions &mdash; replace this mower or run it another year, buy a skid steer or rent &mdash; get made with no cost-per-hour data. The fix is monthly depreciation reflecting fleet usage, deferred revenue smoothing the season, a six-month cash forecast updated monthly, and an equipment register with cost-per-hour for major equipment." },
  ],

  // SUB-VERTICALS — "Landscaping across every format." (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Landscaping across every format. + 6 H3s)
  subverticals: [
    { name: "Residential lawn care", body: "Mow/blow/go routes, lawn-treatment programs (fertilization, weed control, aeration), and residential maintenance subscriptions. Route density and customer retention are the economic levers. Often on RealGreen, ServiceAutopilot, or Yardbook." },
    { name: "Commercial maintenance", body: "HOA, office-park, retail-center, and multifamily maintenance contracts. Larger ticket per account, quarterly or monthly billing, contract-renewal cycles, often bundled with snow &amp; ice. Aspire and LMN are strong in this segment." },
    { name: "Design-build &amp; installation", body: "Landscape design, hardscape (patios, retaining walls), outdoor kitchens, water features, plant installations, and irrigation systems. Project-based fixed-fee work with WIP tracking and progress recognition. Higher margin but lumpier revenue." },
    { name: "Snow &amp; ice management", body: "Commercial plowing, ice management, and sidewalk crews. Seasonal contracts (per-push, seasonal-unlimited, time-and-materials), weather-dependent economics, often the second revenue peak after summer maintenance ends." },
    { name: "Multi-service operators", body: "Combined maintenance, design-build, and snow operators &mdash; the dominant model for established mid-market landscapers. Requires per-service-line P&amp;L to know what&rsquo;s actually profitable. Typically <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> with class tracking." },
    { name: "Specialty &amp; arboricultural", body: "Tree care and arboriculture, irrigation specialists, holiday lighting, athletic-field and golf-course maintenance, and landscape architecture. Specialty pricing, more equipment-intensive, with distinctive certifications and insurance." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Landscaping accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Maintenance", title: "ASC 606 maintenance recognition", body: "Annual lawn programs, commercial contracts, and seasonal snow agreements posted to deferred revenue at sale, recognized per visit or ratably across service months, with a deferred-revenue waterfall each month.", href: "/accounting/chart-of-accounts-setup/" },
    { num: "02 &middot; Design-build", title: "Project WIP &amp; recognition", body: "Design-build projects tracked with WIP and percentage-of-completion or completed-contract recognition, so project margin is visible at completion or progress &mdash; not guessed at.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "03 &middot; Crew KPIs", title: "Revenue per crew per day", body: "RPCD, route density, and average stop ticket calculated monthly per crew. Multi-service operators get per-service-line P&amp;L &mdash; maintenance vs. design-build vs. snow.", href: "/accounting/bookkeeping/" },
    { num: "04 &middot; Equipment", title: "Equipment fleet &amp; cost-per-hour", body: "Equipment register maintained, Section&nbsp;179, bonus, and MACRS depreciation coordinated with your CPA, and cost-per-hour reporting for major equipment behind replace-vs-maintain decisions.", href: "/accounting/bookkeeping/" },
    { num: "05 &middot; Seasonality", title: "Off-season cash flow", body: "Six-month cash-flow forecasting, off-season financing strategy, and seasonal pricing optimization &mdash; the work that determines whether the operation survives winter.", href: "/accounting/advisory/fractional-cfo/" },
    { num: "06 &middot; Platform", title: "FSM platform reconciliation", body: "LMN, Aspire, ServiceAutopilot, RealGreen, JobNimbus, and SingleOps reconciled monthly to QuickBooks with revenue, materials, payroll, and deposits matched.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
  ],

  // INTEGRATIONS — landscaping platforms reconciled with QuickBooks (checks-list).
  // (H2: Connected to your landscaping stack.)
  integrations: [
    "LMN (Landscape Management Network) &mdash; strong in design-build estimating",
    "Aspire Software &mdash; native QuickBooks sync, common on multi-crew operators",
    "ServiceAutopilot &mdash; route, dispatch, and invoicing synced to the ledger",
    "RealGreen Systems &mdash; lawn-treatment programs and route economics",
    "JobNimbus &mdash; project tracking for design-build and installs",
    "SingleOps &mdash; estimating-to-invoicing for mid-market operators",
    "Gusto / ADP &mdash; multi-crew and H-2B seasonal payroll",
    "QuickBooks Time &mdash; field time to crew labor cost allocation",
  ],
  integrationsNote: "Different stack? If your landscaping platform exports clean data, we can work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON — single-crew vs multi-crew + design-build (vs-scroll + vs-table, T3 no collapse).
  // (H2: Owner-operator single-crew vs. multi-crew route + design-build.)
  comparison: [
    { cap: "Revenue streams", left: "Maintenance only, single service line", right: "Maintenance + design-build + snow + enhancements, each with different accounting" },
    { cap: "Revenue recognition", left: "Cash or simple deferred for prepaid programs", right: "ASC 606 deferred revenue + project WIP + percentage-of-completion" },
    { cap: "P&amp;L reporting", left: "Single P&amp;L with the crew as the unit", right: "Per-service-line P&amp;L + per-crew P&amp;L + project-margin reporting" },
    { cap: "Crew labor", left: "Owner plus 1&ndash;2 laborers, often family", right: "Multi-crew W-2 payroll + H-2B seasonal workers + designer/sales, often performance-based" },
    { cap: "Equipment fleet", left: "One truck, one trailer, 2&ndash;4 mowers", right: "Multi-truck fleet + specialty equipment (skid steers, mini excavators, snow plows) with rolling trade-ins" },
    { cap: "Platform", left: "QuickBooks Online + Jobber or Yardbook", right: "QuickBooks Enterprise + LMN or Aspire with full operational integration" },
    { cap: "Reporting cadence", left: "Monthly P&amp;L", right: "Weekly crew flash + monthly service-line P&amp;L + quarterly review + 6-month cash forecast" },
  ],

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From seasonal-revenue chaos to per-crew profitability. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your revenue mix, crew count, platform, seasonal pattern, equipment fleet, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "Where needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to restate maintenance-contract recognition and rebuild design-build WIP, plus the right <a href=\"/accounting/chart-of-accounts-setup/\">chart-of-accounts setup</a> for landscaping economics." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; reporting", body: "Books reconciled monthly with the FSM platform, maintenance recognition posted, design-build WIP updated, per-crew and per-service-line P&amp;L produced, and the cash-flow forecast refreshed." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly package with RPCD by crew, project margin by job, the deferred-revenue waterfall, and equipment cost-per-hour, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on pricing, crew expansion, design-build mix, and fleet decisions." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose (no gutting).
  // (H2: Real RPCD is the start. The next crew and the next season are the point.)
  advisoryBody: [
    "Once maintenance contracts are on ASC&nbsp;606, design-build WIP is tracked, RPCD is visible by crew, and equipment cost-per-hour is calculated, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Whether to add a crew or improve the efficiency of the ones you have, when to invest in a new commercial mower or skid steer, whether design-build is profitable enough to expand, how to price the snow-contract renewal, what the off-season cash gap will actually be &mdash; the decisions that determine whether the operation survives winter and grows next season.",
    "That&rsquo;s where <strong>landscaping advisory</strong> comes in: a fractional CFO who knows your crew economics turning them into pricing strategy, crew planning, equipment-financing analysis, and off-season cash-flow management. Real RPCD and clean project margin come first; then that judgment turns them into decisions. As automation commoditizes basic entry, this advisory layer is where landscaping operators find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim, answers preserved verbatim; T4 NO dedup).
  // visible faq__list = FAQPage schema (same array). The old body Q/A is identical to these 7,
  // so the FAQ block preserves the body Q/A (no gutting).
  // (H2: Landscaping accounting questions.)
  faq: [
    { q: "Why is landscaping accounting different from regular bookkeeping?", a: "Landscaping operations run three distinct revenue streams that each have different accounting patterns: recurring maintenance (lawn care contracts, commercial maintenance, snow removal seasonal contracts) as deferred revenue earning over the service period, design-build project work (installations, hardscape, irrigation) requiring WIP tracking and percentage-of-completion or completed-contract recognition, and enhancement services (mulch installs, cleanups, plantings) often invoiced as completed work. On top of that, severe seasonality concentrates 70&ndash;80% of revenue in 6&ndash;7 months for non-southern operators, making off-season cash flow management critical. Crew-based dispatched-service economics require revenue per crew per day, route density, and drive time tracking that no standard P&amp;L produces. Equipment fleet is substantial &mdash; trucks, trailers, commercial mowers, skid steers &mdash; with significant depreciation and Section 179 implications. H-2B seasonal labor adds <a href=\"/accounting/payroll-management/\">payroll</a> complexity. Generic bookkeeping handles maybe one of these layers; landscaping-specialist accounting handles all of them." },
    { q: "How do you handle recurring maintenance contracts and deferred revenue?", a: "Recurring maintenance contracts are deferred revenue under ASC 606 &mdash; cash collected on signup or seasonally, but revenue recognized as service is delivered. A $1,200 annual lawn care program covering 28 visits across the season earns ~$43 per visit (or ratably over the service months, depending on contract terms). A $3,600 seasonal snow contract paid in October recognizes over the November&ndash;March service period (specific recognition pattern depends on whether the contract is per-push, seasonal-unlimited, or hybrid). Commercial maintenance contracts paid quarterly recognize ratably over each quarter. Most landscaping bookkeeping treats the upfront cash as immediate revenue, overstating early-season revenue and understating the deferred liability &mdash; until the season ends and the reversal hits. We configure deferred revenue accounts for each contract type, automate the recognition pattern based on contract terms, and produce the deferred revenue waterfall showing what&rsquo;s owed in future service across the season." },
    { q: "How do you handle design-build and installation project accounting?", a: "Design-build projects (patio installations, irrigation systems, landscape designs, retaining walls, outdoor kitchens) are fixed-fee project work requiring WIP tracking and one of two revenue recognition methods under ASC 606. Percentage-of-completion recognizes revenue as the project progresses (using cost-to-cost, labor-hours, or milestone methods), typically for projects spanning multiple months or with significant materials investment. Completed-contract defers all revenue recognition until project completion, used for shorter projects or when reliable progress measurement isn&rsquo;t possible. For each project we configure: contract terms in QuickBooks (Customer:Job structure), materials and labor coded to the project, deposits booked as customer advances (not revenue), progress billings tracked against costs incurred, and revenue recognized monthly under whichever method matches the project. Change orders flow through the same structure with documented approval. The result: <a href=\"/accounting/job-costing/\">project-level profitability</a> is visible at completion (or progress) rather than guessed at." },
    { q: "What is revenue per crew per day and why does it matter?", a: "Revenue per crew per day (RPCD) is the headline operational metric for route-based landscaping &mdash; total revenue generated by a crew divided by days deployed. For maintenance routes, RPCD depends on route density (jobs per route), average ticket per stop, and crew efficiency. Healthy maintenance RPCD varies by region and crew size but typically runs $800&ndash;$2,000 for a foreman+2-laborer crew. Design-build crew RPCD runs higher ($2,500&ndash;$5,000+) given the higher ticket of installation work. Drive time between jobs is a real cost &mdash; a crew that drives 3 hours between distant accounts produces less revenue than a tight route. Most landscapers don&rsquo;t measure RPCD by crew or by route monthly, so they can&rsquo;t tell which crews and routes earn their place. We configure the chart of accounts and FSM platform integration to surface RPCD, average stop ticket, and route density monthly &mdash; turning intuition into evidence." },
    { q: "How do you handle severe seasonality and off-season cash flow?", a: "Northern landscapers generate 70&ndash;80% of annual revenue in the 6&ndash;7 month growing season, often with a secondary winter peak from snow &amp; ice management. Off-season cash flow management is what determines whether the operation survives. The bookkeeping side: deferred revenue from annual prepaid contracts smooths revenue across the year (proper ASC 606 recognition shows the season&rsquo;s earned revenue distributed monthly rather than spiked at collection), fixed-cost trending (insurance, equipment payments, lease, year-round overhead) makes off-season cash needs visible months in advance, and equipment depreciation handled monthly rather than annually keeps the P&amp;L from looking artificially profitable in summer. The advisory side: cash flow forecasting six months ahead, off-season financing strategy (lines of credit, equipment refinancing, deferred vendor terms), and seasonal pricing optimization to capture more revenue in shoulder periods. We handle both &mdash; operational accounting plus seasonal cash flow advisory. If winter cash flow is the question that keeps you up, call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Do you handle equipment depreciation, Section 179, and fleet decisions?", a: "Yes. Landscaping equipment is capital-intensive &mdash; commercial trucks ($30K&ndash;$80K), enclosed trailers ($15K&ndash;$25K), zero-turn commercial mowers ($10K&ndash;$25K each, often 4&ndash;8 per crew), specialty equipment (skid steers $40K&ndash;$80K, mini excavators $30K&ndash;$60K, snow plows). Section 179 expensing allows immediate deduction up to annual limits (current limits change annually; verify with your CPA). Bonus depreciation provides additional first-year deduction at a percentage that has been phasing down from 100% pre-2023 through scheduled phase-outs. Used equipment qualifies for bonus depreciation under TCJA changes. The strategy combines these methods plus regular MACRS depreciation, optimized for the specific tax situation. ASC 842 lease analysis applies to equipment financed via lease &mdash; most modern landscaping equipment leases are finance leases under ASC 842 criteria. We maintain the equipment register, calculate depreciation under whatever method your CPA elects, and produce cost-per-hour reporting for major equipment so fleet decisions (replace vs maintain vs add) have real data behind them." },
    { q: "Do you integrate with LMN, Aspire, ServiceAutopilot, and other landscaping platforms?", a: "Yes. Landscaping operational platforms &mdash; LMN (Landscape Management Network), Aspire Software, ServiceAutopilot (also branded SA), RealGreen Systems, JobNimbus, SingleOps, Yardbook, Service Fusion &mdash; are the source of truth for jobs, scheduling, dispatching, time tracking, materials usage, and invoicing. The integration to QuickBooks varies by platform: some have native QuickBooks sync (Aspire, ServiceAutopilot, LMN with QuickBooks Online), others require summary-level journal entries posted from monthly reports. Either way, the reconciliation discipline matters: revenue from the platform matched to deposits, materials usage tied to job profitability, payroll integrated for crew labor cost allocation, deferred revenue posted for prepaid contracts. We work with all major landscaping platforms &mdash; Aspire and ServiceAutopilot most common for established multi-crew operators, LMN strong in design-build, SingleOps and JobNimbus gaining share in mid-market. The platform remains the operational system; QuickBooks remains the financial general ledger; the reconciliation discipline between them is what makes the books reliable." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Maintenance recognition, design-build WIP, crew economics, equipment, seasonal cash flow, FSM integration &middot; income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any landscaping platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Home services accounting", body: "For dispatched-service businesses in HVAC, plumbing, electrical, and other home trades with overlapping crew and service-agreement economics.", href: "/accounting/industries/home-services/" },
    { title: "Construction accounting", body: "For larger design-build, hardscape, and commercial site-work operators where project WIP and percentage-of-completion are the dominant model.", href: "/accounting/industries/construction/" },
    { title: "Fractional CFO &amp; advisory", body: "Seasonal cash-flow forecasting, crew-expansion modeling, equipment-financing analysis, and design-build mix optimization.", href: "/accounting/advisory/fractional-cfo/" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/landscaping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/landscaping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-landscaping-definition","#acctind-landscaping-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Landscaping","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Landscaping Accounting & Bookkeeping","serviceType":"Landscaping accounting and QuickBooks bookkeeping","description":"Specialist accounting for U.S. landscapers — recurring maintenance contracts as deferred revenue under ASC 606, design-build WIP and project recognition, revenue per crew per day, seasonality and off-season cash flow, equipment depreciation, and FSM platform reconciliation (LMN, Aspire, ServiceAutopilot), delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. landscaping operators — residential lawn care, commercial maintenance, design-build, hardscape, snow & ice"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Landscaping accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What landscaping accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Landscaping accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
