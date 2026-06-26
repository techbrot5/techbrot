/* /accounting/industries/professional-services/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-profsvc.txt (42 headings, 7 FAQ) is the ONLY authority for headings
 * + FAQ. Old HTML accounting/industries/professional-services/index.html read for BODY PROSE
 * only. REFERENCE pattern: src/accounting/industries/construction.njk + .11tydata.js (proven
 * t-mofu cobalt) for structure + the FULL schema set (WebPage, BreadcrumbList, Service,
 * ItemList, FAQPage, QAPage); src/quickbooks/online.njk for the t-mofu vocabulary.
 * Content angle reused from the NY analog
 * (src/find-an-accountant/new-york/industries/consulting.njk) but NATIONAL scope — NY-specific
 * tax (NYC UBT / nexus / NY taxable-service) dropped, generalized to professional-services
 * economics: utilization & realization, time-and-billing into QuickBooks, WIP/unbilled,
 * partner/principal compensation & draws, retainer vs. project revenue recognition (ASC 606),
 * trust/IOLTA, multi-entity consolidation, and the books/CPA boundary.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true. Footer
 * chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief." NOT rendered here —
 * base chrome owns them / dropped per protocol T2. The 5 quick-answer questions render as
 * NON-heading ai-summary__question (baseline captured them as <dt>, NOT <hN>) to keep the
 * frozen heading inventory exact. T3 no collapse — the generic-vs-professional comparison
 * renders as vs-scroll + vs-table.
 *
 * FAQ: the frozen contract carries 7 verbatim Q/A; ALL 7 render in the visible faq__list and
 * feed FAQPage from the SAME array, NO dedup (CRITICAL — full 7-question FAQPage required).
 * Questions verbatim; answers preserved word-for-word (enrichment is append-only; none was
 * needed here — answers are reproduced exactly from the contract). FAQPage + QAPage emitted
 * from arrays — single source of truth. The old in-body advisory Q/A ("are the books right? →
 * what do we do about them?") substance is preserved as section prose in the advisory block —
 * no gutting, not duplicated into the FAQ array.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only (E-E-A-T); independent firm, not
 * affiliated with Intuit Inc.; bookkeeping/ProAdvisor scope — does NOT file income taxes,
 * render trust-compliance opinions, or provide IRS representation; coordinates with the
 * client's CPA, EA, or attorney. No <strong> in the dark hero subheading. CTA labels are the
 * canonical lexicon only (Book the discovery call / Get the free file review / Speak to a
 * ProAdvisor); in-body links use valid canonical intents only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&times;/g,"×").replace(/&asymp;/g,"≈").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Professional services accounting, plainly." (from baseline TL;DR body, national scope)
  definition: [
    "Professional services firms sell <strong>time, expertise, and project outcomes</strong> &mdash; not products. That breaks generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> in three structural ways. <strong>Revenue</strong> depends on utilization and realization rates that a generic chart of accounts can&rsquo;t surface, and on fee structures &mdash; hourly, flat-fee, retainer, contingency &mdash; where a retainer paid up front is <strong>deferred revenue earned over the term</strong> (ASC 606), not profit on the day it lands. <strong>Margin</strong> requires tracking unbilled <strong>work-in-progress</strong>, write-downs, and write-offs &mdash; not just invoices and expenses. <strong>Compliance</strong> involves trust accounting and IOLTA for law firms, partner-equity treatment for partnerships, and multi-entity consolidation for firms with operating, management, and real-estate entities.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure your own <a href=\"/quickbooks/online/\">QuickBooks</a> file so utilization, realization, WIP aging, partner equity, and entity-level reporting are visible <em>monthly</em> &mdash; not discovered at year-end. We connect the time-tracking, practice-management, and project tools you already run (Clio, Karbon, Harvest, Asana, HubSpot, Bill.com, and many others) and reconcile what they export into the books. For firms ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into pricing, partner-compensation, and growth decisions. We deliver the books; your CPA or EA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.; we do not file income taxes or provide IRS representation.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Professional services accounting, in five questions.)
  aiSummary: [
    { q: "Why is professional services accounting different?", a: "Firms sell <strong>time and expertise, not products</strong>. Revenue depends on <strong>utilization and realization rates</strong> and on retainer/project revenue timing; margin requires <strong>WIP and write-off tracking</strong>; compliance involves trust/IOLTA for law firms and partner-equity treatment for partnerships. Generic bookkeeping misses all three." },
    { q: "What are utilization and realization?", a: "<strong>Utilization rate</strong>: share of available hours billable to clients (1,800 / 2,080 &asymp; 87%). <strong>Realization rate</strong>: share of billable hours that convert to collected revenue ($360 / $400 &asymp; 90%). Together they reveal true economic capacity &mdash; most firms operate around 65&ndash;75% combined and don&rsquo;t track it monthly." },
    { q: "Do you handle trust accounting and IOLTA?", a: "Yes &mdash; operationally. Trust accounts separated from operating, monthly <strong>three-way reconciliation</strong> (bank, trust ledger, client subledgers), no commingling. We handle the operational accounting; <strong>state-bar compliance opinions</strong> and <strong>tax matters</strong> coordinate with your CPA or attorney." },
    { q: "What about partner equity, draws, and multi-entity?", a: "Partner draws are <strong>equity distributions, not expenses</strong> &mdash; wrong treatment distorts both P&amp;L and balance sheet. We set up <strong>separate equity accounts per partner</strong>, keep <strong>guaranteed payments, distributions, capital, and loans</strong> straight, and consolidate multi-entity structures (operating + management + holding) cleanly. <strong>K-1s</strong> remain your CPA&rsquo;s scope." },
    { q: "Which tools do you integrate with?", a: "<strong>Time/billing</strong>: Clio, PracticePanther, Karbon, Harvest, TimeSolv, TSheets. <strong>Practice management</strong>: Karbon, Canopy, Jetpack, Pixie. <strong>Project</strong>: Asana, Monday, ClickUp, Mavenlink. <strong>CRM</strong>: HubSpot, Salesforce, Pipedrive. <strong>Bills/expenses</strong>: Bill.com, Expensify, Ramp, Brex. We work with what you have." },
  ],

  // CHALLENGES — three places professional services firms lose the numbers (grid-3 buyer-cards).
  // 3 frozen H3s verbatim. (H2: Three places professional services firms lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Revenue is invisible", title: "Utilization &amp; realization aren&rsquo;t tracked.", body: "Without utilization and realization visible monthly, you can&rsquo;t see whether the team is busy enough, whether work is converting to collected revenue, or which practice areas, partners, or service lines are actually profitable. The fix is time-tracking integrated to the books, with utilization and realization reported by person, practice area, and client &mdash; every month, not at year-end. If you can&rsquo;t answer &ldquo;what was our realization rate last month&rdquo; in under a minute, you&rsquo;re running blind on the economics that matter." },
    { signal: "WIP is a mystery", title: "Unbilled work &amp; write-offs untracked.", body: "Time and expense sit between when work is performed and when an invoice goes out. Without WIP tracking you can&rsquo;t see the true revenue pipeline, spot clients aging without billing, or quantify what&rsquo;s written off before it ever reaches an invoice. The fix is WIP captured from time-tracking, aged in QuickBooks, with write-downs and write-offs recorded against the original work &mdash; so realization is a measured number, not a hope. If write-offs happen quietly inside billing without flowing to the books, your P&amp;L looks better than reality." },
    { signal: "Partner equity &amp; entities are wrong", title: "Draws booked wrong, entities tangled.", body: "Partner draws booked as income or owner expense distort both the P&amp;L and the balance sheet and create messy K-1s. Multi-entity structures with operating, management, and holding companies often run intercompany accounts that never reconcile. The fix is partner equity set up correctly &mdash; separate equity accounts per partner, distinct treatment for draws, distributions, guaranteed payments, and capital &mdash; plus multi-entity bookkeeping with clean intercompany elimination. K-1 preparation stays with your CPA; our job is making the data flowing to those K-1s correct, not approximate." },
  ],

  // SUB-VERTICALS — five professional-services sub-verticals (plus boutique), one engagement model
  // (grid-3 stack-8). 6 frozen H3s verbatim; bodies from the live signal-card strip.
  // (H2: Five professional-services sub-verticals, one engagement model. + 6 H3s)
  subverticals: [
    { title: "Law firms", body: "Trust and IOLTA accounting with three-way reconciliation. Fee-arrangement tracking (hourly, flat, contingency, hybrid). Practice-area profitability. Integration with Clio, PracticePanther, MyCase, ProLaw, Tabs3, CosmoLex. State-bar reporting coordinated with your CPA or attorney." },
    { title: "Consulting practices", body: "Engagement-level profitability across hourly, retainer, and fixed-fee work. Utilization tracking by consultant. Project margin against fee budgets. Integration with Harvest, Toggl, Asana, HubSpot, Salesforce. Subcontractor and 1099 tracking." },
    { title: "Agencies (creative, marketing, PR, digital)", body: "Retainer revenue recognition over the engagement term. Pass-through and reimbursable handling (ad spend, media buys, production costs) separated from marked-up revenue. Client and project P&amp;Ls. Integration with Mavenlink, Forecast, Productive, Float, Kantata. Multi-currency where international clients apply." },
    { title: "Accounting &amp; CPA firms", body: "Practice-management integration (Karbon, Canopy, Jetpack Workflow, Pixie). Recurring vs. project revenue separation. Partner-by-partner equity and compensation. The unique meta-engagement: keeping a CPA firm&rsquo;s own books cleanly while they keep their clients&rsquo;." },
    { title: "Architecture &amp; engineering", body: "Phase-based billing, percentage-of-completion considerations, multi-phase project P&amp;Ls. Reimbursable expense pass-through. Integration with Deltek Ajera/Vantagepoint where applicable, Harvest/QuickBooks where not. Multi-state professional-licensing considerations coordinated with your CPA." },
    { title: "Boutique &amp; specialty practices", body: "Smaller firms with distinctive workflows &mdash; expert-witness firms, executive coaching, specialty medical practices, IP &amp; patent firms, advisory boutiques. We adapt the professional-services engagement model to the specific economics rather than forcing a generic template." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Professional services accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Revenue", title: "Utilization &amp; realization reporting", body: "Time-tracking integrated to QuickBooks; utilization and realization reported monthly by person, practice area, and client &mdash; not at year-end.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "02 &middot; Margin", title: "WIP, write-downs &amp; project profitability", body: "Unbilled work captured and aged, write-downs recorded against original work, true engagement and project margins visible &mdash; with retainer and project revenue recognized in the right period.", href: "/accounting/bookkeeping/" },
    { num: "03 &middot; Compliance", title: "Trust accounting &amp; IOLTA", body: "For law firms: trust funds separated from operating, three-way reconciliation monthly, no commingling. Operational scope &mdash; state-bar opinions coordinated with your attorney.", href: "/accounting/bookkeeping/" },
    { num: "04 &middot; Equity", title: "Partner equity &amp; multi-entity", body: "Separate equity accounts per partner; correct treatment for draws, distributions, guaranteed payments, and capital. Clean intercompany elimination for multi-entity structures.", href: "/accounting/chart-of-accounts-setup/" },
    { num: "05 &middot; Cleanup", title: "Practice-management mess cleanup", body: "Untangle misbooked partner draws, fix WIP-to-revenue mismatches, restore trust-account integrity, and reconcile entities to a known-good baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { num: "06 &middot; Advisory", title: "Partner-compensation &amp; growth advisory", body: "Pricing strategy, partner-compensation modeling, capacity planning, and cash-flow forecasting through partner-distribution cycles. The judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/" },
  ],

  // INTEGRATIONS — professional-services tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to where your firm runs.)
  integrations: [
    "Clio, PracticePanther, MyCase, ProLaw, Tabs3, CosmoLex &mdash; law-firm practice management &amp; trust",
    "Karbon, Canopy, Jetpack Workflow, Pixie &mdash; accounting-firm practice management",
    "Harvest, Toggl, TimeSolv, Bill4Time, TSheets &mdash; time-tracking reconciled to billable utilization",
    "Asana, Monday, ClickUp, Mavenlink, Forecast, Float, Kantata &mdash; project &amp; resource planning",
    "HubSpot, Salesforce, Pipedrive &mdash; CRM and pipeline mapped to client and service line",
    "Bill.com, Expensify, Ramp, Brex, Divvy &mdash; AP, bills, and reimbursable pass-through costs",
    "Deltek Ajera/Vantagepoint &mdash; architecture &amp; engineering project accounting where applicable",
  ],
  integrationsNote: "Different stack? If it has a QuickBooks integration or exports clean data, we work with it &mdash; we build the workflow around the tools you already run. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON — note under the generic-vs-professional vs-table.
  comparisonNote: "If your current bookkeeper can&rsquo;t produce the right-column views on demand, your firm is being run with the wrong instrument panel.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From mistreated books to a real instrument panel. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your sub-vertical, partner structure, time-tracking stack, multi-entity setup, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to fix misbooked partner draws, untangle WIP, and reconcile entities &mdash; plus the right <a href=\"/accounting/chart-of-accounts-setup/\">chart-of-accounts setup</a> for professional services." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; reporting", body: "Books reconciled monthly with utilization, realization, WIP aging, and partner-equity reporting maintained. Trust accounts reconciled three ways where applicable." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with the professional-services KPI set, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on pricing, partner compensation, and growth." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the
  // baseline "are the books right? → what do we do about them?" advisory Q/A substance (no gutting).
  // (H2: Clean numbers are the start. Partner decisions are the point.)
  advisoryBody: [
    "Once utilization, realization, WIP, and equity are visible monthly, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do about them?&rdquo; Whether to raise rates, where capacity is constrained, how to structure partner compensation, when a new entity makes sense, whether a practice line earns its overhead &mdash; the decisions that actually move a professional-services firm.",
    "That&rsquo;s where <strong>professional-services advisory</strong> comes in: a Certified ProAdvisor who knows your numbers turning them into pricing, capacity, partner-compensation, and growth decisions. Clean numbers come first; then that judgment turns them into decisions. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Utilization/realization, WIP, trust accounting (operational), partner equity, multi-entity &middot; income-tax filing and trust-compliance opinions coordinated with your CPA, EA, or attorney" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim, answers preserved word-for-word).
  // visible faq__list = FAQPage schema (same array, NO dedup — all 7 emitted).
  // (H2: Professional services accounting questions.)
  faq: [
    { q: "Why is accounting different for professional services firms?", a: "Professional services firms sell time, expertise, and project outcomes &mdash; not products. That changes almost every accounting question. Revenue is tied to billable hours, fee structures (hourly, flat-fee, retainer, contingency, performance-based), and realization rates rather than units sold. Cost of service is largely labor and overhead, not COGS. Work-in-progress sits unbilled for weeks or months between work performed and invoice sent. Trust accounts and IOLTA requirements apply to law firms. Partner structures create equity treatment most generic bookkeepers handle wrong. Multi-entity holding-company structures are common. The result: a professional services firm with generic bookkeeping typically can&rsquo;t see utilization, realization, <a href=\"/accounting/job-costing/\">true project margin</a>, or partner equity correctly &mdash; meaning the firm is flying blind on the numbers that actually matter." },
    { q: "What are utilization and realization rates?", a: "Utilization rate measures the share of an employee&rsquo;s available hours that are billable to clients. A senior associate billing 1,800 hours out of 2,080 available has roughly 87% utilization. Realization rate measures how much of those billable hours actually convert to collected revenue &mdash; after write-downs, write-offs, and discounts. A firm billing $400/hour with $360/hour realized has 90% realization. Together they tell you the true economics: a firm with 80% utilization &times; 85% realization is generating roughly 68% of its theoretical billable capacity. Most professional services firms don&rsquo;t track these properly because their bookkeeping isn&rsquo;t set up to surface them. We configure QuickBooks (and the connected time-tracking system) so utilization and realization are visible monthly, not annually." },
    { q: "Do you handle trust accounting (IOLTA) for law firms?", a: "Yes &mdash; operationally. We maintain IOLTA and client trust accounts in QuickBooks separately from operating funds, reconcile them monthly, handle three-way reconciliation (bank statement, trust ledger, and client subledgers), and ensure no commingling between trust and operating accounts. Note the scope boundary: we handle the operational accounting; we coordinate with your state bar&rsquo;s compliance requirements and your CPA on any tax matters. Specific state bar audit defense or trust-accounting compliance opinions belong to a CPA or attorney familiar with your state&rsquo;s rules &mdash; we provide the underlying records and coordinate, but we don&rsquo;t render compliance opinions ourselves." },
    { q: "What about partner draws, distributions, and equity for partnerships?", a: "Partner equity is one of the most consistently mishandled areas in professional services bookkeeping. Partner draws are not expenses &mdash; they&rsquo;re equity distributions, but they&rsquo;re often booked to income or owner-expense accounts in DIY files, which distorts both the P&amp;L and the balance sheet. Guaranteed payments, profit distributions, capital contributions, and partner loan accounts each have specific treatment that affects the tax return. We set up partner equity correctly (separate accounts per partner, separate capital/draws/distributions tracking), maintain it through the year, and produce CPA-ready partner-by-partner equity reporting at year-end. Your CPA files the K-1s; we make sure the data flowing to those K-1s is correct." },
    { q: "Can you handle multi-entity or holding-company structures?", a: "Yes. Many professional services firms operate multi-entity: an operating company, a management or admin entity, a real-estate holding company, sometimes separate entities per practice line or partner group. We handle entity-by-entity bookkeeping in QuickBooks (or QuickBooks Enterprise for true multi-entity), maintain intercompany accounts and eliminate them cleanly, produce consolidated reporting where needed, and coordinate the data with your CPA for tax filing across entities. Multi-entity work is meaningfully more complex than single-entity work and is scoped accordingly &mdash; but it&rsquo;s normal for our professional-services engagements, not exceptional." },
    { q: "How do you handle WIP, unbilled time, and write-offs?", a: "Work-in-progress in a professional services firm is the time and expense incurred for clients that hasn&rsquo;t yet been invoiced. Tracking WIP correctly is important for two reasons: it shows the true revenue pipeline before invoicing, and it surfaces realization issues when WIP is written down before billing (or written off after billing). We configure WIP tracking that flows from your time-tracking system into the books, age WIP so partners can see what&rsquo;s sitting unbilled, capture write-downs and write-offs against the original work, and report realization rates against actual billings. Done right, this turns &lsquo;are we collecting what we earn?&rsquo; from a quarterly mystery into a monthly known answer." },
    { q: "Which time-tracking and practice management tools do you integrate with?", a: "For time-tracking and billing: Harvest, Toggl Track, Clockify, TimeSolv, Bill4Time, TSheets, Karbon&rsquo;s time module. For <a href=\"/accounting/industries/legal/\">law firms</a> specifically: Clio, PracticePanther, MyCase, ProLaw, Tabs3, CosmoLex. For accounting firms: Karbon, Canopy, Jetpack Workflow, Pixie. For project-based agencies and consultants: Harvest + Asana/Monday/ClickUp, Forecast, Float, Productive, Mavenlink, Kantata. For CRM and pipeline: HubSpot, Salesforce, Pipedrive. For expenses and bills: Bill.com, Expensify, Ramp, Brex, Divvy. The integration choice depends on what your firm already uses; we work with what you have rather than forcing platform changes. If your stack needs evaluation as part of the engagement, that&rsquo;s part of the discovery call." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "Fix misbooked partner draws, untangle WIP, restore trust integrity, and reconcile entities to a CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { title: "Chart of accounts setup", body: "Per-partner equity, WIP, multi-entity intercompany &mdash; the structural setup that makes the rest work.", href: "/accounting/chart-of-accounts-setup/" },
    { title: "Fractional CFO &amp; advisory", body: "Turn utilization, realization, and partner equity into pricing, compensation, and growth decisions.", href: "/accounting/advisory/fractional-cfo/" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/professional-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/professional-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-profsvc-definition","#acctind-profsvc-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Professional Services","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Professional Services Accounting","serviceType":"Specialist accounting and bookkeeping for professional services firms","description":"Specialist accounting for U.S. professional services firms — law firms (including trust/IOLTA accounting), consulting practices, marketing and creative agencies, accounting and CPA firms, architecture and engineering firms. Covers utilization and realization rate tracking, unbilled WIP and write-off treatment, retainer and project revenue recognition, partner equity and draws, multi-entity consolidation, and project profitability reporting, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes, render trust-compliance opinions, or provide IRS representation — coordinates with the client's CPA, EA, or attorney.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. professional services firms — law, consulting, agencies, accounting, A&E"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Professional services accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What professional services accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Professional services accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
