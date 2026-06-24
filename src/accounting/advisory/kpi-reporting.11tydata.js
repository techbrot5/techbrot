/* /accounting/advisory/kpi-reporting/ — t-mofu COBALT migration (MIGRATION-PROTOCOL:
 * content-to-goal, visual-floor). FROZEN CONTRACT authority: contract-acct-kpi.txt
 * (36 headings verbatim/exact-level + 11 FAQ verbatim, append-only). Old root HTML
 * read for BODY PROSE only. Vocabulary + schema pattern copied from the t-mofu cobalt
 * proving page src/quickbooks/online.njk + .11tydata.js (advisory vocabulary from
 * fractional-cfo.njk / advisory.njk). Cobalt-only classes — NO invented class. Tables
 * are vs-scroll+vs-table (no collapse). Footer chrome (Accounting/QuickBooks/Company/
 * Network h2 + "The monthly brief.") NOT rendered — chrome lives in base.njk; "The
 * monthly brief." droppable per contract. Content is REAL KPI-reporting specificity:
 * KPI dashboards, industry/role metrics, reporting cadence, the QBR, leading vs lagging,
 * dashboard tooling, when needed, the advisory-not-tax/audit boundary (coordinated with
 * CPA). HONEST: no fabricated stats/outcomes/reviews; firm-level authorship; illustrative
 * metric examples flagged representative. CTA canonical lexicon, intent=kpi-reporting
 * (valid — used in advisory.11tydata.js). Independent firm — not affiliated with Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 (ai-summary) — verbatim contract Q7–Q11 (the "in five questions" flat set).
  aiSummary: [
    { q: "What is KPI and management reporting?", a: "Identifying the small set of numbers that actually drive a business and reporting them on a regular cadence in a form leaders can act on &mdash; the metrics that explain why the numbers move, not just what they are." },
    { q: "How is a KPI different from a financial statement?", a: "A statement reports the full, formal picture. A KPI is a single decision-focused metric drawn from those numbers and operations, chosen because it predicts or explains performance. Statements are comprehensive; KPIs are selective and actionable." },
    { q: "Leading vs lagging indicators?", a: "Lagging indicators report results that already happened (revenue, profit, margin). Leading indicators predict what&rsquo;s coming (pipeline, bookings, booked hours, churn signals). A useful set includes both &mdash; one confirms, the other lets you steer early." },
    { q: "How many KPIs should I track?", a: "Fewer than most think &mdash; often five to ten tied to the decisions you actually make. Tracking dozens and acting on none is the common failure. We define the few that matter for your business and stage." },
    { q: "What does it cost?", a: "Usually added to a monthly bookkeeping or advisory engagement at a fixed monthly fee by scope. Extensive reporting is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  // signals — old body Q/A preserved verbatim (buyer-card; cobalt).
  signals: [
    { opener: "You get a P&amp;L but don&rsquo;t know what to do with it.", body: "A financial statement reports results without telling you which lever to pull. KPI reporting translates the books into the two or three moves that matter this month." },
    { opener: "You&rsquo;re running on gut, not numbers.", body: "Instinct gets a business started; it doesn&rsquo;t scale one. A defined metric set replaces &ldquo;it feels busy&rdquo; with what&rsquo;s actually happening." },
    { opener: "You track everything and act on nothing.", body: "Too many metrics is the same as none. We cut the dashboard down to the few KPIs that drive decisions and ignore the vanity numbers." },
    { opener: "Different people quote different numbers.", body: "When sales, ops, and finance each have their own version of the truth, no one trusts the data. One agreed KPI set, defined once, ends the debate." },
    { opener: "You can&rsquo;t tell if this month was good.", body: "Without targets and trends, every month feels the same. Reporting against goals and prior periods makes &ldquo;good&rdquo; and &ldquo;bad&rdquo; obvious at a glance." },
    { opener: "A board, lender, or investor wants regular reporting.", body: "Outside stakeholders expect consistent, credible numbers on schedule. We produce board- and lender-ready reporting that holds up to scrutiny." },
  ],
  // what's included — old body prose preserved (stack-8 numbered; cobalt).
  included: [
    { num: "01", name: "A defined KPI set", body: "The handful of metrics that actually drive your business &mdash; chosen with you, defined precisely so everyone calculates them the same way." },
    { num: "02", name: "Monthly management report", body: "A clean monthly report or dashboard with your KPIs against targets and trends &mdash; built from the books, not assembled by hand each time." },
    { num: "03", name: "Leading + lagging indicators", body: "Lagging metrics to confirm results and leading metrics to steer ahead of them &mdash; so the report predicts, not just records." },
    { num: "04", name: "Industry &amp; role-specific metrics", body: "Prime cost for a restaurant, utilization for an agency, MRR for SaaS, job margin for construction &mdash; the numbers your industry actually runs on." },
    { num: "05", name: "Plain-language commentary", body: "A short written read each month from a named ProAdvisor: what changed, why, and the one or two things worth acting on. No jargon." },
    { num: "06", name: "Board &amp; lender-ready output", body: "Consistent, credible reporting formatted for outside stakeholders when a board, investor, or lender needs to see the numbers." },
  ],
  // leading-vs-lagging — REAL content-to-goal, honest cells (vs-scroll+vs-table, no collapse).
  // Illustrative metric examples are representative of common patterns, not client data.
  indicatorTable: [
    { dim: "What it answers", lagging: "What already happened", leading: "What is likely coming" },
    { dim: "Timing", lagging: "After the period closes", leading: "Before results land" },
    { dim: "Typical metrics", lagging: "Revenue, net profit, gross margin, last month&rsquo;s cash balance", leading: "Pipeline, bookings, booked hours, quote volume, churn signals" },
    { dim: "Used to", lagging: "Confirm and report", leading: "Steer and decide early" },
    { dim: "Reliability", lagging: "High &mdash; it&rsquo;s recorded fact", leading: "Directional &mdash; a signal, not a certainty" },
    { dim: "On its own", lagging: "Tells you where you&rsquo;ve been", leading: "Tells you where you&rsquo;re heading" },
  ],
  // industry/role metric examples — REAL specificity (stack-8; cobalt). Representative, illustrative.
  metricsByIndustry: [
    { tag: "Agency &amp; professional services", name: "Utilization, realization, effective rate", body: "Billable utilization, realization against standard rate, effective hourly rate, and pipeline-to-capacity &mdash; the numbers that tell a services firm whether the team is busy on work that actually pays." },
    { tag: "SaaS &amp; subscription", name: "MRR, churn, CAC payback", body: "Monthly recurring revenue, net and gross churn, CAC payback period, and net revenue retention &mdash; the unit economics that decide whether growth is compounding or leaking." },
    { tag: "Restaurant &amp; hospitality", name: "Prime cost, labor %, covers", body: "Prime cost (COGS + labor as a share of sales), labor percentage, average check, and covers per shift &mdash; the operating ratios a restaurant lives or dies on." },
    { tag: "Construction &amp; trades", name: "Job margin, WIP, backlog", body: "Gross margin by job, work-in-progress and over/under-billing, backlog coverage, and cash collected vs billed &mdash; the project-level numbers a P&amp;L alone hides." },
    { tag: "E-commerce &amp; retail", name: "Contribution margin, AOV, sell-through", body: "Contribution margin after fulfillment and ad spend, average order value, repeat-purchase rate, and inventory sell-through &mdash; the post-ad-spend numbers that show what each order really earns." },
    { tag: "Any owner-led business", name: "Cash, margin, conversion", body: "Cash runway, gross and operating margin, cash conversion cycle, and revenue per employee &mdash; the cross-industry vitals every owner should be able to read at a glance." },
  ],
  // reporting cadence — REAL management-reporting rhythm (process-style stack; cobalt).
  cadence: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to understand your business, the decisions you make, and what you wish you could see. No pitch." },
    { num: "Phase 2", name: "Define the KPIs", body: "We select the few metrics that matter for your business and stage and define each precisely &mdash; running a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> first if the books underneath aren&rsquo;t reliable." },
    { num: "Phase 3", name: "Build the report", body: "We build the monthly report or dashboard from your books, wired to update from the source data rather than rebuilt by hand." },
    { num: "Phase 4", name: "Report &amp; review", body: "Each month the report lands with commentary, and we review it on a set cadence &mdash; refining the metric set as the business changes." },
  ],
  // the reporting rhythm — REAL cadence content-to-goal (stack-8; cobalt).
  rhythm: [
    { tag: "Monthly", name: "The management report", body: "Once the books close, your KPI set lands as a clean report or dashboard &mdash; metrics against targets and prior periods, with a short plain-language read on what changed and what&rsquo;s worth acting on." },
    { tag: "Quarterly", name: "The quarterly business review (QBR)", body: "A deeper standing review each quarter &mdash; trends across the full set, progress against the year&rsquo;s targets, and the two or three decisions the numbers are pointing to. The QBR is where reporting turns into strategy." },
    { tag: "As it changes", name: "Refining the set", body: "A KPI set isn&rsquo;t fixed. As the business adds a location, a product line, or a funding round, we add, retire, or redefine metrics so the report keeps answering the questions you&rsquo;re actually asking." },
  ],
  // dashboard tooling — REAL, honest (no vendor hype) (stack-8; cobalt).
  tooling: [
    { name: "Built in your QuickBooks file", body: "Most management reporting starts in the books themselves &mdash; QuickBooks Online&rsquo;s built-in reporting, custom report packages, and classes/locations &mdash; so the numbers come straight from the source ledger, not a hand-keyed copy." },
    { name: "Live dashboards", body: "Where a richer view earns its keep, we wire a live dashboard (QuickBooks-native, Spreadsheet Sync, or a connected reporting tool) that refreshes from the books on its own &mdash; no monthly rebuild, no version drift between people." },
    { name: "Operational sources", body: "Some leading indicators live outside accounting &mdash; the CRM pipeline, the PSA&rsquo;s booked hours, the e-commerce platform. We pull those in deliberately so the report covers operations, not just the ledger." },
  ],
  // when it's needed — REAL trigger content (buyer-card; cobalt). Routes to lifecycle work.
  whenNeeded: [
    { opener: "&ldquo;The books are clean but I still can&rsquo;t steer.&rdquo;", body: "Accurate financials, no decision signal. A defined KPI set and a monthly report turn the close into something you can act on.", cta: "Define the KPIs", href: "/contact/?intent=kpi-reporting" },
    { opener: "&ldquo;A board or lender wants reporting on a schedule.&rdquo;", body: "Outside stakeholders need consistent, credible numbers on time. We produce board- and lender-ready reporting that holds up to scrutiny.", cta: "Book the discovery call", href: "/contact/?intent=kpi-reporting" },
    { opener: "&ldquo;My books aren&rsquo;t reliable enough to report on.&rdquo;", body: "A KPI is only as good as the data under it. We start with a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> and reliable <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, then build the reporting on top.", cta: "Get accurate books first", href: "/quickbooks/file-review/?intent=file-review" },
  ],
  // operator trust-row — firm-level, honest; mirrors online.njk operatorSpec.
  operatorSpec: [
    { value: "ProAdvisor", label: "delivered by Certified QuickBooks ProAdvisors — firm-level authorship" },
    { value: "Advisory", label: "KPI definition, reporting & commentary — not tax filing, audit, or assurance" },
    { value: "Fixed-fee", label: "written scope before work — no hourly billing" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  // FAQ — 11 contract Q/A, VERBATIM, flat, append-only (same array feeds FAQPage).
  faq: [
    { q: "What is KPI and management reporting?", a: "KPI (key performance indicator) and management reporting is the practice of identifying the small set of numbers that actually drive a business and reporting them on a regular cadence in a form leaders can act on. It goes beyond standard financial statements to track the operational and financial metrics &mdash; margin, cash conversion, utilization, customer or unit economics &mdash; that explain why the numbers move and what to do about them." },
    { q: "What&rsquo;s the difference between a KPI and a financial statement?", a: "A financial statement reports the full, formal picture of what happened &mdash; income statement, balance sheet, cash flow. A KPI is a single, decision-focused metric drawn from those numbers and from operations, chosen because it predicts or explains performance. Financial statements are comprehensive; KPIs are selective and actionable. Good management reporting pairs a handful of KPIs with brief commentary, not a 40-tab spreadsheet." },
    { q: "What&rsquo;s the difference between leading and lagging indicators?", a: "Lagging indicators report results that already happened &mdash; revenue, net profit, last month&rsquo;s margin. Leading indicators predict what&rsquo;s coming &mdash; pipeline, bookings, booked hours, quote volume, churn signals. A useful KPI set includes both: lagging metrics confirm where you&rsquo;ve been, leading metrics let you steer before results land." },
    { q: "How many KPIs should a business track?", a: "Fewer than most businesses think. The common failure is tracking dozens of metrics and acting on none. A focused set &mdash; often five to ten &mdash; that ties directly to the decisions an owner actually makes is far more useful than an exhaustive dashboard no one reads. We define the few that matter for your business and stage." },
    { q: "Is KPI reporting the same as bookkeeping?", a: "No. Bookkeeping produces the accurate financial records. KPI and management reporting sits on top: it selects, calculates, and interprets the metrics that matter and turns them into decisions. The reporting is only as reliable as the books underneath it, which is why we start there if the bookkeeping needs work." },
    { q: "What does KPI reporting cost?", a: "KPI and management reporting is usually added to a monthly bookkeeping or advisory engagement and quoted as a fixed monthly fee against a written scope, sized to the number of metrics, locations or segments, and reporting cadence. More extensive reporting is part of a fractional CFO engagement, typically $3,000&ndash;$8,000+ per month by application. No hourly billing." },
  ],
  // related advisory & services — contract h3 set, verbatim names.
  related: [
    { title: "Cash flow management", href: "/accounting/advisory/cash-flow-management/?intent=cash-flow", body: "The forecast that turns one of your most important KPIs into action." },
    { title: "Budgeting &amp; forecasting", href: "/accounting/advisory/budgeting-forecasting/?intent=budgeting", body: "The targets your KPIs get measured against." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "Reporting as one piece of an ongoing senior-finance seat." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The accurate-books foundation every metric is built on." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/kpi-reporting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-kpi-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":"https://techbrot.com/accounting/advisory/"},
          {"@type":"ListItem","position":4,"name":"KPI & Management Reporting","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"KPI & Management Reporting","serviceType":"KPI and management reporting","description":"Defining a tailored set of key performance indicators, building a monthly management report or dashboard with leading and lagging indicators, and delivering plain-language commentary for U.S. businesses, delivered by Certified ProAdvisors on accurate books. Coordinates with the client's CPA or EA; does not provide tax-filing, audit, or assurance services.","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What KPI & management reporting delivers","itemListElement":data.included.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"KPI & management reporting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
