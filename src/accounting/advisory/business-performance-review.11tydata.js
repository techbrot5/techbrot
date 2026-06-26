/* /accounting/advisory/business-performance-review/ — MIGRATION-PROTOCOL port of a
 * LIVE baseline advisory child to the COBALT t-mofu tier (content-to-goal, visual-
 * floor). Authority for headings + 11 FAQ: contract-acct-bpr.txt (FROZEN). Old HTML
 * read for BODY PROSE only. t-mofu cobalt vocabulary + schema COPIED from
 * src/quickbooks/online.{njk,11tydata.js}; advisory vocabulary from
 * fractional-cfo.njk + advisory.njk. NO invented classes; tables = vs-scroll+vs-table.
 * CTA canonical lexicon only. CTA intent: performance-review (already valid in src —
 * advisory.11tydata.js / faq / fractional-cfo). Firm-level authorship; no personal
 * name; only the 2 real Clutch reviews referenced (proof-strip, no duplication, no
 * AggregateRating). content-to-goal: REAL business-performance-review specifics —
 * periodic review, margin/profitability, trend + benchmarking, the QBR, action
 * planning from the numbers, when needed, the advisory boundary (NOT tax/audit,
 * coordinated with CPA). Old body Q/A ("What gets covered in a review?") preserved as
 * section content (no gutting). Independent firm — not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — the contract's "in five questions". Verbatim quick-answers (the 5
  // schema-only flat variants of the FAQ live here as the AI-summary block).
  aiSummary: [
    { q: "What is a business performance review?", a: "A recurring, structured read of <strong>margin, segment profitability, KPI variance, and trends</strong> &mdash; turned into a short action list with named owners. The standing meeting that converts financial reports into decisions." },
    { q: "How is it different from KPI reporting?", a: "KPI reporting delivers the numbers; a review is the <strong>working session</strong> that turns them into decisions. Reporting is the data; the review is what you do with it. Most clients have both." },
    { q: "How often should we do it?", a: "<strong>Monthly</strong> is standard for active operations; <strong>quarterly</strong> for steadier or smaller businesses. Many clients pair both: brief monthly checks, longer quarterly strategic reviews." },
    { q: "Who runs the review?", a: "A <strong>named Certified ProAdvisor</strong> &mdash; preps materials, walks you through the read, documents the action list with owners and deadlines. The point is decisions and accountability, not a deck." },
    { q: "What does it cost?", a: "Usually added to a monthly bookkeeping or advisory engagement at a fixed monthly fee by scope. Intensive review and ongoing accountability is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  // "Business performance review, plainly." — definition prose (old TL;DR, elevated).
  definition: [
    "A <strong>business performance review</strong> is the recurring working session that turns financial reports into decisions. Monthly or quarterly, a Certified ProAdvisor pulls together margin, segment and product-line profitability, KPI variance against budget and prior periods, and trends, walks you through the read in plain language, and turns it into a short action list with named owners and deadlines. It&rsquo;s the standing meeting that closes the loop between <a href=\"/accounting/advisory/kpi-reporting/\">KPI reporting</a>, <a href=\"/accounting/advisory/budgeting-forecasting/\">budget variance</a>, <a href=\"/accounting/advisory/cash-flow-management/\">cash flow</a>, and what you actually do next.",
    "It is built on <a href=\"/accounting/bookkeeping/\">accurate books</a>, run by a named ProAdvisor, and accountable to outcomes rather than presentation. It is <a href=\"/accounting/advisory/?intent=advisory\">advisory</a> &mdash; not bookkeeping, not tax, not audit &mdash; and only as reliable as the books underneath. We focus on operational and strategic finance and coordinate with your CPA or EA for anything requiring a license. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "If any of these sound familiar, the answer is yes." — six signal cards (buyer-card).
  signals: [
    { opener: "You get reports but nothing changes after them.", body: "Numbers without a working session are wallpaper. A review turns the report into one or two decisions and a name next to each." },
    { opener: "You don&rsquo;t know which segments actually carry the business.", body: "Company-wide profit hides the truth that some lines, locations, or customer types fund the others. A review surfaces it &mdash; and what to do about it." },
    { opener: "Margin is drifting and you can&rsquo;t pinpoint why.", body: "A structured read against budget and prior periods tells you where margin is leaking, fast &mdash; instead of waiting a quarter to notice." },
    { opener: "Action items never close.", body: "A review with named owners and a follow-up next month is what makes decisions stick. Without that loop, the same items resurface forever." },
    { opener: "Leadership is divided on what the numbers mean.", body: "A standing read with one ProAdvisor narrating gives the team one version of the truth and one short list to argue about, not five." },
    { opener: "A board, lender, or investor expects a regular read.", body: "Outside stakeholders want consistent, credible performance commentary on schedule. We deliver the materials and run the conversation." },
  ],
  // "What a performance review actually delivers." — six included cards (num + name + body).
  included: [
    { num: "01", name: "Pre-read &amp; materials", body: "A short pre-read built from your accurate books &mdash; financials, KPI variance, segment views, trend lines &mdash; sent ahead of the meeting so the time is spent deciding, not reading." },
    { num: "02", name: "Margin &amp; segment review", body: "Profitability by product line, customer segment, or location alongside gross and operating margin &mdash; surfacing where the business is actually making and losing money." },
    { num: "03", name: "KPI &amp; budget variance", body: "Performance against the metrics that matter and against the budget &mdash; where the business is ahead, where it&rsquo;s behind, and what the variance is telling you." },
    { num: "04", name: "Trends &amp; early signals", body: "Multi-period trend reads &mdash; not single-month spikes &mdash; that surface the slow drifts and early signals worth acting on before they become problems." },
    { num: "05", name: "Working session with a named ProAdvisor", body: "A live conversation, not a presentation &mdash; pressure-testing what the numbers mean, what to do, and what to ignore." },
    { num: "06", name: "Action list with owners &amp; follow-up", body: "A short list of decisions and actions out of every review, each with a named owner and due date &mdash; revisited at the next session so things actually close." },
  ],
  // Cadence-comparison table — REAL content-to-goal: monthly review vs the quarterly
  // business review (QBR), honest cells. Tables = vs-scroll + vs-table per protocol.
  cadenceTable: [
    { dim: "Typical cadence", monthly: "Every month, on close", quarterly: "Every quarter, on quarter-end close" },
    { dim: "Depth of read", monthly: "Tight check on margin &amp; KPI variance", quarterly: "Deeper strategic read across the quarter" },
    { dim: "Best fit", monthly: "Active operations, tight margins, fast markets", quarterly: "Steadier or smaller operations" },
    { dim: "Trend window", monthly: "Month-over-month drift &amp; early signals", quarterly: "Multi-month trend &amp; seasonality" },
    { dim: "Benchmarking", monthly: "Against budget &amp; prior month", quarterly: "Against budget, prior quarters &amp; plan" },
    { dim: "Action loop", monthly: "Short list, closed before next month", quarterly: "Heavier decisions, capital &amp; planning" },
    { dim: "Best paired with", monthly: "Monthly bookkeeping underneath", quarterly: "A monthly check between QBRs" },
  ],
  // "From close-of-books to closed action items." — the four-phase process (process-diagram).
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map the decisions you want a recurring read to support, the right cadence, and who needs to be in the room. No pitch." },
    { num: "Phase 2", name: "Set up the read", body: "We define the metrics, segments, and views the review will cover, built from accurate books &mdash; running a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> first if the numbers underneath aren&rsquo;t reliable yet." },
    { num: "Phase 3", name: "Run the review", body: "Each cycle, a Certified ProAdvisor sends the pre-read, runs the working session, and documents the action list with named owners and deadlines." },
    { num: "Phase 4", name: "Follow up &amp; refine", body: "Action items are tracked across reviews so things actually close, and the read itself is refined as the business changes and new questions surface." },
  ],
  operatorSpec: [
    { value: "Named", label: "Certified ProAdvisor runs every review &mdash; not a rotating deck" },
    { value: "Fixed-fee", label: "written scope before work &middot; no hourly billing" },
    { value: "Advisory", label: "not tax filing, audit, assurance, lending, or investment advice" },
    { value: "Independent", label: "coordinated with your CPA &middot; not affiliated with Intuit Inc." },
  ],
  // "Related advisory & services." — four related (h3s frozen by contract).
  related: [
    { title: "KPI &amp; management reporting", href: "/accounting/advisory/kpi-reporting/", body: "The metric set the review reads against month after month." },
    { title: "Budgeting &amp; forecasting", href: "/accounting/advisory/budgeting-forecasting/", body: "The plan the review measures performance against." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "The review as one piece of an ongoing senior-finance seat." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The accurate-books foundation every review is built on." },
  ],
  // FAQ — 11 contract Q/A, verbatim/flat, append-only (Q1–Q6 substantive, Q7–Q11 the
  // schema-only flat variants). Same array feeds faq__list + FAQPage.
  faq: [
    { q: "What is a business performance review?", a: "A business performance review is a recurring, structured read of how the business actually performed &mdash; margin, profitability by segment or product line, KPI variance against targets and prior periods, and the trends behind the numbers &mdash; turned into a short action list with a named owner for each item. It&rsquo;s the standing meeting that converts financial reports into decisions, on a monthly or quarterly cadence." },
    { q: "How is it different from KPI reporting or a P&amp;L?", a: "<a href=\"/accounting/advisory/kpi-reporting/\">KPI reporting</a> delivers the numbers; a performance review is the working session that turns those numbers into decisions. A P&amp;L is the financial statement; a review interprets it alongside KPIs, variance against <a href=\"/accounting/advisory/budgeting-forecasting/\">budget</a>, and trend lines. Reporting is the data; the review is what you do with it. The two work together &mdash; most clients have both." },
    { q: "How often should we hold a performance review?", a: "Monthly reviews are standard for businesses with active operations, tight margins, or fast-moving markets. Quarterly is a fit for steadier or smaller operations where a deeper but less frequent read works better. Many clients pair both: a brief monthly check and a longer quarterly strategic review. Cadence is set in the engagement scope based on how often you actually need to act on the numbers." },
    { q: "Who runs the review?", a: "A named Certified ProAdvisor runs the review with you, prepares the materials in advance from your accurate books, walks you through the read, and documents the action list with named owners and deadlines. The point is decisions and accountability &mdash; not a presentation." },
    { q: "Do I need clean books to start?", a: "Yes &mdash; a performance review is only as reliable as the books and KPIs it&rsquo;s built on. If your books need work, we start with a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> and reliable <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, then layer reviews on top. Many clients begin with bookkeeping and add a review cadence as the business grows." },
    { q: "What does a performance review engagement cost?", a: "Performance review is usually added to a monthly bookkeeping or advisory engagement and quoted as a fixed monthly fee against a written scope, sized to cadence, complexity, and segments or locations covered. More intensive review and ongoing accountability is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement, typically $3,000&ndash;$8,000+ per month by application. No hourly billing." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/business-performance-review/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-bpr-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":"https://techbrot.com/accounting/advisory/"},
          {"@type":"ListItem","position":4,"name":"Business Performance Review","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Business Performance Review","serviceType":"Business performance review","description":"Recurring monthly or quarterly performance reviews covering margin, segment and product-line profitability, KPI variance against targets and prior periods, and trend analysis, delivered as a structured meeting and short action list with named owners. By Certified ProAdvisors on accurate books. Coordinates with the client's CPA or EA; does not provide tax-filing, audit, assurance, lending, or investment-advisory services.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Performance review deliverables","itemListElement":data.included.map(function(c){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(c.name),"description":stripTags(c.body).slice(0,180)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What a performance review delivers","itemListElement":data.included.map(function(c,i){return {"@type":"ListItem","position":i+1,"name":stripTags(c.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Business performance review — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
