/* /accounting/advisory/budgeting-forecasting/ — t-mofu COBALT migration under
 * MIGRATION-PROTOCOL (content-to-goal, visual-floor). Authority: FROZEN CONTRACT
 * (contract-acct-budget.txt) for headings (36, footer chrome NOT rendered, "The
 * monthly brief." dropped) + 11 FAQ (verbatim/flat, append-only). Old root HTML
 * read for BODY PROSE only. t-mofu vocabulary copied from quickbooks/online.njk;
 * advisory vocabulary from accounting/advisory/fractional-cfo.njk +
 * accounting/advisory.njk. COBALT classes only — no invented class. Tables =
 * vs-scroll+vs-table. CTA canonical lexicon: book-call (intent=budgeting),
 * file-review (intent=file-review), speak-to-a-ProAdvisor (tel). HONESTY R5/R9:
 * no fabricated stats/outcomes/reviews; illustrative outcomes flagged
 * representative; no AggregateRating; firm-level authorship; founder schema-only.
 * Schema: WebPage+BreadcrumbList+Service(OfferCatalog)+ItemList+FAQPage — same
 * pattern as the t-mofu reference. Independent firm — not affiliated with Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Budgeting & forecasting, plainly." — the plain-terms definition (in-brief is layout-driven; this is the prose section).
  definition: [
    "Budgeting is the plan for the year &mdash; a target for revenue, cost, profit, and investment, broken out by month and built from the <strong>drivers</strong> of the business (units sold, customers, billable hours, headcount) rather than last year&rsquo;s padded numbers. Forecasting is the rolling update of that plan against reality: each month, actuals land from the books and the rest of the year is rebuilt to reflect what&rsquo;s actually likely to happen. Variance reporting closes the loop &mdash; explaining where the business is ahead or behind, by how much, and why.",
    "Together they turn the books from a record of the past into a tool for steering the future. TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> build the annual budget, run the monthly reforecast, and deliver variance commentary in plain language &mdash; on top of <a href=\"/accounting/bookkeeping/\">accurate books</a>. It is <a href=\"/accounting/advisory/\">advisory</a>, not bookkeeping or tax, and only as good as the books underneath. It coordinates with your CPA or EA for anything requiring a license; it does not include tax filing, audit, or assurance services. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // quick-5 — "Budgeting & forecasting, in five questions." Distinct framing vs FAQ. Verbatim quick-answers from the live page, append-only enrichment.
  aiSummary: [
    { q: "What is budgeting and forecasting?", a: "<strong>Budgeting</strong> sets the annual target; <strong>forecasting</strong> updates it monthly with actuals; <strong>variance reporting</strong> explains the gap. Together they let you steer the year intentionally instead of discovering at December how it went." },
    { q: "Budget vs forecast?", a: "A <strong>budget</strong> is fixed &mdash; the target set in January that everyone is held against. A <strong>forecast</strong> is dynamic &mdash; updated monthly to reflect where the year is likely to actually land. Budget answers &ldquo;where did we plan&rdquo;; forecast answers &ldquo;where are we going.&rdquo;" },
    { q: "What is a driver-based budget?", a: "One built from the underlying <strong>drivers</strong> of the business &mdash; units sold, billable hours, customers, average ticket, headcount &mdash; rather than padding last year. Change a driver assumption and the whole budget updates. Far more useful for scenarios than a static line-by-line copy." },
    { q: "How is this different from cash flow management?", a: "Budgeting plans the full income statement across the year; <a href=\"/accounting/advisory/cash-flow-management/\">cash flow management</a> focuses on the <strong>timing of money in and out</strong>, typically on a 13-week horizon. The annual frame and the short-term liquidity, working together." },
    { q: "What does it cost?", a: "Usually added to a monthly bookkeeping or advisory engagement at a fixed monthly fee by scope. Extensive planning is part of a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signal H3s (buyer-card; openers verbatim contract H3s).
  signals: [
    { opener: "Your &ldquo;budget&rdquo; is last year&rsquo;s numbers plus ten percent.", body: "That isn&rsquo;t a budget &mdash; it&rsquo;s a guess. A driver-based budget connects the plan to the actual things that drive revenue and cost, so it can be challenged and changed when an assumption proves wrong." },
    { opener: "You don&rsquo;t know if you can afford the next hire.", body: "Hiring on a hunch is how teams get into trouble. A working budget answers &ldquo;what can we afford, and when&rdquo; with a number you can stand behind &mdash; and a forecast that shows what changes once the salary lands." },
    { opener: "You won&rsquo;t know how the year went until December.", body: "If results are only obvious at year-end, course-correction is impossible. Monthly budget-vs-actual variance reporting catches drift in February, when you can still do something about it &mdash; not December, when you can&rsquo;t." },
    { opener: "A lender or investor wants projections.", body: "Outside capital expects credible forward numbers. We produce projections that hold up to scrutiny &mdash; tied to drivers and stated assumptions, not pulled from the air &mdash; in the format banks, lenders, and investors actually read." },
    { opener: "You&rsquo;re weighing a big decision.", body: "Open a location, launch a line, take on a contract, restructure pricing &mdash; scenario and what-if planning shows the revenue, margin, and cash impact before you commit, not after the decision is already made." },
    { opener: "Departments overspend with no one noticing in time.", body: "A budget without monthly variance reporting is decorative. Reviewing actuals against plan each month, broken out by team or location, puts spending back under control where the decisions are actually made." },
  ],
  // "What budgeting & forecasting actually delivers." — 6 deliverable H3s (grid-3 stack-8 with .num).
  delivers: [
    { num: "01", name: "Annual driver-based budget", body: "A budget built from the things that drive your business &mdash; units, customers, hours, headcount &mdash; not last year plus ten percent. Change a driver and the whole plan updates, so the budget can be tested, challenged, and defended." },
    { num: "02", name: "Rolling monthly reforecast", body: "Each month, actuals come in and the rest of the year is rebuilt to reflect reality &mdash; so the plan keeps up with the business instead of going stale by March. The forecast always answers &ldquo;where are we actually heading now.&rdquo;" },
    { num: "03", name: "Budget-vs-actual variance reporting", body: "Monthly comparison of actual results against budget with material variances explained &mdash; in plain language, with the moves that matter, not a wall of cells. This is the report that turns a January exercise into a living management tool." },
    { num: "04", name: "Scenario &amp; what-if planning", body: "Model the hire, the launch, the slow quarter, the new location &mdash; and see the income, margin, and cash impact before you commit. Because the budget is driver-based, a scenario is a change of assumptions, not a rebuild." },
    { num: "05", name: "Lender &amp; investor projections", body: "Credible forward numbers in the format banks, lenders, and investors expect &mdash; tied to drivers and stated assumptions, defensible under questioning. The projection a credit committee or an investor can actually interrogate." },
    { num: "06", name: "Department &amp; segment budgets", body: "Budgets broken by team, location, or product line so accountability lives where the decisions are made, not just at the company level &mdash; and variance is reviewed at the level where someone can act on it." },
  ],
  // "From first budget to a plan that keeps up with the year." — 4-phase cadence (process-diagram; H3s verbatim).
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to understand your business model, the drivers behind it, and the decisions you need the budget to support. No pitch &mdash; just whether a budget, or accurate books first, is the right next step." },
    { num: "Phase 2", name: "Build the budget", body: "We build the annual driver-based budget on accurate books &mdash; running a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> first if the numbers underneath aren&rsquo;t reliable yet. Drivers, assumptions, and a month-by-month plan you can stand behind." },
    { num: "Phase 3", name: "Monthly variance &amp; reforecast", body: "Each month, actuals are compared to budget, material variances are explained, and the forecast for the rest of the year is updated &mdash; the rhythm that makes the budget useful instead of decorative." },
    { num: "Phase 4", name: "Review &amp; refine", body: "A regular review with a named ProAdvisor turns the variance report into the one or two decisions that matter &mdash; and refines the drivers as the business changes, so the model stays honest to reality." },
  ],
  // vs-table — the boundary: where budgeting & forecasting sits vs cash flow management vs tax/audit. Honest concede cells. (T3: tables → vs-scroll+vs-table, no collapse.)
  boundary: [
    { cap: "Plans the full-year income statement", bf: "yes", cash: "no", tax: "no" },
    { cap: "Built from business drivers, updated monthly", bf: "yes", cash: "partial", tax: "no" },
    { cap: "13-week timing of money in and out", bf: "annual frame", cash: "Cash flow wins", tax: "no" },
    { cap: "Budget-vs-actual variance commentary", bf: "yes", cash: "no", tax: "no" },
    { cap: "Lender / investor projections", bf: "yes", cash: "short-horizon only", tax: "no" },
    { cap: "Files your tax return", bf: "no", cash: "no", tax: "Your CPA / EA" },
    { cap: "Audit or assurance opinion", bf: "no", cash: "no", tax: "Your audit firm" },
    { cap: "Requires accurate books underneath", bf: "yes", cash: "yes", tax: "yes" },
  ],
  // "A plan is only useful if someone steers by it." — beyond-the-budget prose (mission-block → prose).
  steerProse: [
    "A good budget surfaces the right questions &mdash; where margin is holding, which segment is carrying the business, when the next hire actually pencils. Answering those questions month after month is what turns a planning document into a management practice. The budget is the artifact; the monthly conversation around the variance is the value.",
    "For owners who want that ongoing, budgeting and forecasting sits alongside <a href=\"/accounting/advisory/cash-flow-management/\">cash flow management</a>, <a href=\"/accounting/advisory/kpi-reporting/\">KPI &amp; management reporting</a>, and strategy in a broader advisory relationship &mdash; up to a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> who owns the numbers with you. As automation handles the routine bookkeeping, this planning-and-judgment layer is where the real value now lives.",
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review prose + trust-row (no personal name; founder schema-only).
  reviewProse: [
    "This page reflects how TechBrot delivers budgeting and forecasting. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm, and reviewed for accuracy on driver-based budgeting, rolling reforecasting, variance reporting, and the boundaries of the service.",
    "Where our approach or scope changes, this page is updated. Budgeting and forecasting is delivered on accurate books and coordinated with your CPA or EA for anything requiring a license. Not affiliated with Intuit Inc. &mdash; QuickBooks is a registered trademark of Intuit Inc.",
  ],
  reviewSpec: [
    { value: "QBO L2 + Desktop, Enterprise, Payroll", label: "active Intuit ProAdvisor certifications — verifiable on Intuit&rsquo;s directory" },
    { value: "Advisory scope", label: "budgeting, reforecasting, variance, scenarios, projections — not tax filing, audit, or assurance" },
    { value: "Fixed-fee", label: "written scope before work — built on accurate books in your own QuickBooks file" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  // "Related advisory & services." — 4 related H3s (verbatim contract H3s).
  related: [
    { title: "Cash flow management", href: "/accounting/advisory/cash-flow-management/", body: "The 13-week horizon that manages liquidity inside the annual plan &mdash; the short-term money picture the budget frames." },
    { title: "KPI &amp; management reporting", href: "/accounting/advisory/kpi-reporting/", body: "The few metrics the budget gets measured by, month after month &mdash; the dashboard behind the variance conversation." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", body: "Budgeting and forecasting as one piece of an ongoing senior-finance seat &mdash; the heaviest of the advisory engagements." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "The accurate-books foundation every budget is measured against &mdash; the actuals the forecast updates from each month." },
  ],
  // FAQ — 11 contract Q/A, verbatim & flat, append-only. Powers both faq__list and FAQPage from this one array.
  faq: [
    { q: "What is budgeting and forecasting?", a: "Budgeting is the plan for the year &mdash; a target for revenue, cost, profit, and investment, broken out by month and built from the drivers of the business. Forecasting is the rolling update of that plan against reality: every month, actuals come in and the forecast for the rest of the year is rebuilt with what&rsquo;s actually likely to happen. Together they let you steer a year intentionally instead of finding out at December how the year went." },
    { q: "What&rsquo;s the difference between a budget and a forecast?", a: "A budget is fixed: it&rsquo;s the target set at the start of the year that everyone is held against. A forecast is dynamic: it&rsquo;s updated each month with actual results to reflect where the year is now likely to land. Budget answers &lsquo;where did we plan to go&rsquo;; forecast answers &lsquo;where are we actually going&rsquo;. The variance between them is where the management conversation happens." },
    { q: "What is a driver-based budget?", a: "A driver-based budget is built from the underlying drivers of the business &mdash; units sold, billable hours, customers, average ticket, headcount &mdash; rather than padding last year&rsquo;s numbers. Revenue and cost flow from the drivers, so changing an assumption (price, volume, churn) automatically updates the whole budget. It&rsquo;s far more useful for planning and scenarios than a static line-by-line copy of last year." },
    { q: "What is budget-vs-actual variance reporting?", a: "Each month, actual results from the books are compared to the budget for that month, with material variances explained: where the business is ahead or behind, by how much, and why. This is the report that turns the budget from a January exercise into a living management tool &mdash; and the basis for monthly reforecasting." },
    { q: "How is this different from cash flow management?", a: "Budgeting and forecasting plan the full income statement and operating picture across the year. <a href=\"/accounting/advisory/cash-flow-management/\">Cash flow management</a> focuses specifically on the timing of money in and out, usually on a 13-week horizon. The two work together: the budget sets the annual frame, the cash flow forecast manages the short-term liquidity inside it." },
    { q: "What does budgeting and forecasting cost?", a: "Budgeting and forecasting is usually added to a monthly bookkeeping or advisory engagement and quoted as a fixed monthly fee against a written scope, sized to the complexity of the business, number of segments or locations, and forecast cadence. More extensive planning is part of a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement, typically $3,000&ndash;$8,000+ per month by application. No hourly billing." },
    { q: "What is budgeting and forecasting?", a: "Budgeting sets the annual target; forecasting updates it monthly with actuals; variance reporting explains the gap. Together they let you steer the year intentionally instead of discovering at December how it went." },
    { q: "Budget vs forecast?", a: "A budget is fixed &mdash; the target set in January that everyone is held against. A forecast is dynamic &mdash; updated monthly to reflect where the year is likely to actually land. Budget answers &ldquo;where did we plan&rdquo;; forecast answers &ldquo;where are we going.&rdquo;" },
    { q: "What is a driver-based budget?", a: "One built from the underlying drivers of the business &mdash; units sold, billable hours, customers, average ticket, headcount &mdash; rather than padding last year. Change a driver assumption and the whole budget updates. Far more useful for scenarios than a static line-by-line copy." },
    { q: "How is this different from cash flow management?", a: "Budgeting plans the full income statement across the year; cash flow management focuses on the timing of money in and out, typically on a 13-week horizon. The annual frame and the short-term liquidity, working together." },
    { q: "What does it cost?", a: "Usually added to a monthly bookkeeping or advisory engagement at a fixed monthly fee by scope. Extensive planning is part of a fractional CFO engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/budgeting-forecasting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-budget-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":"https://techbrot.com/accounting/advisory/"},
          {"@type":"ListItem","position":4,"name":"Budgeting & Forecasting","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Budgeting & Forecasting","serviceType":"Annual budgeting, driver-based forecasting, and budget-vs-actual variance reporting","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"What budgeting & forecasting delivers","itemListElement":data.delivers.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,180)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What budgeting & forecasting delivers","itemListElement":data.delivers.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Budgeting & forecasting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
