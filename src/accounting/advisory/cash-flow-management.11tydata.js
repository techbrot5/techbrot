/* /accounting/advisory/cash-flow-management/ — LIVE baseline advisory child
 * migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-cashflow.txt (36 headings,
 * 11 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/advisory/cash-flow-management/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure/schema; src/accounting/advisory/fractional-cfo.njk + advisory.njk
 * for advisory vocabulary/tone. t-mofu, tierClass section--tier-guide,
 * bodyClass page--mofu. CTA intent: cash-flow (canonical lexicon). Footer
 * chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base-layout chrome / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (the
 * baseline captured them as <dt>, NOT <hN>) to keep the frozen heading
 * inventory exact. FAQ: 11 contract Q/A verbatim (Q1-Q6 substantive, Q7-Q11
 * schema-only flat variants — append-only). Honesty R5/R9: no fabricated
 * stats/outcomes/reviews; David Westgate in reviewedBy schema @id only;
 * firm-level authorship; independent firm, not affiliated with Intuit Inc.
 * No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Cash flow management, plainly." — definition prose (from old TL;DR body, enriched; no <strong> rule applies to dark hero only)
  definition: [
    "Cash flow management is the ongoing work of understanding, forecasting, and shaping the timing of money moving in and out of a business &mdash; because <strong>profit and cash are not the same thing</strong>. A business can be profitable on paper while waiting 60 days to collect, paying suppliers in 15, carrying inventory, and funding growth, all of which consume cash the income statement never shows.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> build a rolling <strong>13-week cash flow forecast</strong> on top of your <a href=\"/accounting/bookkeeping/\">accurate books</a>, manage working capital and AR/AP timing, analyze runway, and run scenario planning &mdash; so tight weeks are seen and solved early, not discovered at payroll. It&rsquo;s <a href=\"/accounting/advisory/?intent=advisory\">advisory</a>, not bookkeeping or tax: forward-looking, decision-focused, and only as good as the books underneath it. We coordinate with your banker and CPA; we do not lend or file taxes. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Cash flow management, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "What is cash flow management?", a: "The ongoing work of understanding, forecasting, and shaping the timing of money in and out of a business &mdash; a rolling forecast of expected cash, managing receivable and payable timing, runway analysis, and planning for shortfalls before they happen." },
    { q: "Why can a profitable business run out of cash?", a: "Because <strong>profit and cash differ</strong>. Profit records when a sale is earned; cash arrives when the customer pays. Slow collections, fast payables, inventory, and growth all consume cash the income statement doesn&rsquo;t show &mdash; the most common cause of cash crises in healthy businesses." },
    { q: "What is a 13-week cash flow forecast?", a: "A rolling, week-by-week projection of cash in and out over the next quarter. <strong>Thirteen weeks</strong> is short enough to be accurate and long enough to see trouble coming &mdash; the standard working tool for active cash management, updated weekly." },
    { q: "Is it the same as bookkeeping?", a: "No. Bookkeeping records what happened; cash flow management is <strong>forward-looking</strong> &mdash; it forecasts what will happen and helps you change it. It&rsquo;s advisory built on accurate books." },
    { q: "What does it cost?", a: "Usually added to a monthly bookkeeping or advisory engagement at a fixed monthly fee by scope. Intensive, hands-on cash management is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signals (buyer-card)
  signals: [
    { opener: "You&rsquo;re profitable but always tight on cash.", body: "The P&amp;L looks healthy, yet the bank account doesn&rsquo;t. That gap is timing &mdash; collections, payables, inventory, and growth &mdash; and it&rsquo;s exactly what a forecast exposes and fixes." },
    { opener: "You can&rsquo;t predict next month&rsquo;s balance.", body: "If the bank balance is a surprise every month, you&rsquo;re flying blind. A rolling forecast turns it into a number you can see weeks ahead." },
    { opener: "Growth is eating cash faster than it makes it.", body: "Scaling consumes working capital &mdash; more inventory, more payroll, more receivables outstanding. Growth without a cash plan is how fast-growing companies fail." },
    { opener: "Payroll or tax dates create stress.", body: "If you brace for payroll or quarterly obligations, the timing isn&rsquo;t mapped. It should be a non-event you saw coming, not a scramble." },
    { opener: "Your business is seasonal.", body: "Seasonal swings need cash banked in the strong months to carry the lean ones. A forecast makes that deliberate instead of a yearly scramble." },
    { opener: "You&rsquo;re weighing a loan or line of credit.", body: "Before borrowing, you need to know how much, when, and whether you can service it. We build the forecasts lenders ask for and time the decision &mdash; your banker provides the credit." },
  ],
  // "What cash flow management actually delivers." — 6 deliverables (stack-8 + num)
  deliverables: [
    { num: "01", name: "13-week rolling forecast", body: "A week-by-week projection of cash in and out over the next quarter, rebuilt from actuals so it stays accurate &mdash; the core working tool. Short enough to be reliable, long enough to see a tight week coming and act on it." },
    { num: "02", name: "Working capital &amp; AR/AP timing", body: "Managing when money arrives and leaves &mdash; collections cadence, payable timing, deposit and inventory cycles &mdash; the levers that move cash without touching profit. Most cash problems live here, not in the P&amp;L." },
    { num: "03", name: "Runway &amp; burn analysis", body: "How many months of cash you have at current burn, and which line items move it most. Essential for venture-stage and fast-growth businesses where the question is measured in weeks, not quarters." },
    { num: "04", name: "Scenario &amp; what-if planning", body: "Model the hire, the big order, the slow quarter, the new location &mdash; and see the cash impact before you commit, not after. Sensitivity testing on the assumptions that actually swing the balance." },
    { num: "05", name: "Financing &amp; credit-line readiness", body: "The forecasts and financials lenders require, plus a clear read on borrowing capacity and timing &mdash; coordinated with your banker, who provides the credit. We prepare and time the ask; we do not lend or broker." },
    { num: "06", name: "Monthly cash review", body: "A regular, plain-language read with a named ProAdvisor: where cash stands, what&rsquo;s coming, and the one or two moves that matter this month &mdash; so the forecast drives decisions instead of sitting in a spreadsheet." },
  ],
  // "From first forecast to a number you trust." — 4-phase process (process-diagram)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to understand your cash cycle, the decisions ahead, and where the books stand. No pitch &mdash; just whether a forecast, or accurate books first, is the right next step." },
    { num: "Phase 2", name: "Baseline forecast", body: "We build your first 13-week forecast from accurate books &mdash; running a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> first if the numbers underneath aren&rsquo;t reliable yet. The forecast is only as good as the bookkeeping below it." },
    { num: "Phase 3", name: "Levers &amp; plan", body: "We identify the moves that change the picture &mdash; collections, payable timing, financing, spend &mdash; and turn them into a concrete plan with owners and dates, not a list of observations." },
    { num: "Phase 4", name: "Rolling forecast &amp; review", body: "The forecast updates against actuals and we review it on a set cadence, so cash stays predictable and surprises don&rsquo;t happen. Weekly while it&rsquo;s tight; monthly once it&rsquo;s under control." },
  ],
  // "Related advisory & services." — 4 related (stack-8 linked)
  related: [
    { title: "Budgeting &amp; forecasting", href: "/accounting/advisory/budgeting-forecasting/?intent=advisory", body: "The annual plan that frames the weekly cash picture &mdash; targets and assumptions the 13-week forecast measures against." },
    { title: "KPI &amp; management reporting", href: "/accounting/advisory/kpi-reporting/?intent=advisory", body: "The handful of numbers that explain why cash moves the way it does &mdash; days-sales-outstanding, margin, and the metrics behind the balance." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "Cash management as one piece of an ongoing senior-finance seat &mdash; forecasting, KPIs, strategy, and board-level reporting." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The accurate-books foundation every forecast is built on &mdash; real reconciliation and a monthly close you can trust." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row)
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Forecasting, working capital, runway, scenario planning, monthly review &mdash; not lending, investment, or tax filing" },
    { value: "Fixed-fee", label: "Written scope before work &middot; built on accurate books in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 11 contract Q/A, verbatim questions, answers preserved (append-only enrichment). Q7-Q11 are schema-only flat variants kept per append-only contract.
  faq: [
    { q: "What is cash flow management?", a: "Cash flow management is the ongoing work of understanding, forecasting, and shaping the timing of money moving in and out of a business. It includes building a rolling forecast of expected cash, managing the timing of receivables and payables, analyzing runway, and planning for shortfalls and surpluses before they happen. The goal is simple: always know what cash you&rsquo;ll have, when, and why &mdash; and never be surprised by a shortfall." },
    { q: "Why can a profitable business run out of cash?", a: "Because profit and cash are different things. Profit is recorded when a sale is earned; cash arrives when the customer actually pays. A business can be profitable on paper while waiting 60 days to collect, paying suppliers in 15, carrying inventory, and funding growth &mdash; all of which consume cash the income statement doesn&rsquo;t show. This timing gap is the single most common reason healthy businesses hit cash crises, and it&rsquo;s exactly what cash flow management exists to prevent." },
    { q: "What is a 13-week cash flow forecast?", a: "A 13-week cash flow forecast is a rolling, week-by-week projection of cash in and cash out over the next quarter. Thirteen weeks is short enough to be accurate and long enough to see trouble coming, so you can act on a tight week before it arrives. It&rsquo;s the standard working tool for active cash management and is updated each week as actuals come in." },
    { q: "Is cash flow management the same as bookkeeping?", a: "No. Bookkeeping records what already happened. Cash flow management is forward-looking &mdash; it forecasts what will happen and helps you change it. It&rsquo;s an advisory service built on top of accurate books: the forecast is only as reliable as the bookkeeping underneath it, which is why we start there if the books need work." },
    { q: "Do you arrange loans or lines of credit?", a: "No. TechBrot is not a lender or broker. We help you understand your borrowing capacity, prepare the cash flow forecasts and financials lenders ask for, and time financing decisions &mdash; then coordinate with your banker or lender, who provides the actual credit. We do not provide lending, investment, or securities advice." },
    { q: "What does cash flow management cost?", a: "Cash flow management is usually added to a monthly bookkeeping or advisory engagement and quoted as a fixed monthly fee against a written scope, sized to your complexity and forecast frequency. More intensive, hands-on cash management is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement, typically $3,000&ndash;$8,000+ per month by application. No hourly billing." },
    { q: "What is cash flow management?", a: "The ongoing work of understanding, forecasting, and shaping the timing of money in and out of a business &mdash; a rolling forecast of expected cash, managing receivable and payable timing, runway analysis, and planning for shortfalls before they happen." },
    { q: "Why can a profitable business run out of cash?", a: "Because profit and cash differ. Profit records when a sale is earned; cash arrives when the customer pays. Slow collections, fast payables, inventory, and growth all consume cash the income statement doesn&rsquo;t show &mdash; the most common cause of cash crises in healthy businesses." },
    { q: "What is a 13-week cash flow forecast?", a: "A rolling, week-by-week projection of cash in and out over the next quarter. Thirteen weeks is short enough to be accurate and long enough to see trouble coming &mdash; the standard working tool for active cash management, updated weekly." },
    { q: "Is it the same as bookkeeping?", a: "No. Bookkeeping records what happened; cash flow management is forward-looking &mdash; it forecasts what will happen and helps you change it. It&rsquo;s advisory built on accurate books." },
    { q: "What does it cost?", a: "Usually added to a monthly bookkeeping or advisory engagement at a fixed monthly fee by scope. Intensive, hands-on cash management is part of a fractional CFO engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/cash-flow-management/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-cashflow-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":"https://techbrot.com/accounting/advisory/"},
          {"@type":"ListItem","position":4,"name":"Cash Flow Management","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Cash Flow Management & Forecasting","serviceType":"Cash flow management and forecasting","description":"Rolling 13-week cash flow forecasting, working-capital and accounts receivable/payable timing, cash runway and burn analysis, scenario planning, and monthly cash review for U.S. businesses, delivered by Certified ProAdvisors. Coordinates with the client's CPA, EA, and banker; does not provide lending, investment, or tax-filing services.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Cash flow management deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What cash flow management delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Cash flow management — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
