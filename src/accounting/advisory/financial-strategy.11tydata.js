/* /accounting/advisory/financial-strategy/ — t-mofu COBALT migration under
 * MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT
 * (contract-acct-finstrat.txt) is the ONLY authority for the 36 headings +
 * 11 FAQ. Old accounting/advisory/financial-strategy/index.html read for
 * BODY PROSE only. t-mofu vocabulary + schema COPIED from
 * src/quickbooks/online.{njk,11tydata.js}; advisory vocabulary from
 * src/accounting/advisory/fractional-cfo.njk + src/accounting/advisory.njk.
 *
 * T2 — headings frozen verbatim, exact level; entities preserved; footer
 *   chrome NOT rendered; "The monthly brief." (newsletter) dropped per contract.
 * T3 — no collapse; tables = vs-scroll + vs-table.
 * T4 — FAQ: the 11 contract Q/A rendered as faq__list AND FAQPage from the SAME
 *   array (verbatim/flat/append-only). Old body Q/A preserved as section content
 *   (the boundary FAQ "Do you arrange financing or give investment advice?" from
 *   the old page is preserved in the prose of the SCOPE/boundary section — no
 *   gutting). Contract FAQ has intentional schema-only short variants (Q7–Q11)
 *   that re-ask Q1/Q2/Q3/Q4/Q6 — preserved verbatim, append-only.
 * T6 — content-to-goal: REAL financial-strategy content (multi-year strategy,
 *   capital allocation, fundraise/debt readiness, exit/M&A prep, unit economics
 *   + scaling, when needed, engagement mechanics, the boundary). Specific, not a
 *   mad-lib.
 *
 * COBALT only — no invented classes. CTA canonical lexicon. intent=financial-
 * strategy is a VALID registered intent (src/_data/intents.json) — used as-is.
 * R5/R9: no fabricated stats/outcomes/reviews; no AggregateRating; no personal
 * name (firm-level authorship). Independent firm — not affiliated with Intuit Inc.
 */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Financial strategy, plainly." — definition prose (from old TL;DR, enriched)
  definition: [
    "<strong>Financial strategy</strong> is the framework behind the budget &mdash; the deliberate choices about <a href=\"/accounting/advisory/budgeting-forecasting/?intent=budgeting\">pricing, margin, cost structure, capital, and timing</a> that shape the next two to five years. It&rsquo;s where pricing reviews live, where capital-structure questions get answered, where decisions to hire, expand, borrow, or sell get pressure-tested against real numbers, and where the financial picture gets aligned with what the owners actually want from the business. Strategy work is grounded in <a href=\"/accounting/bookkeeping/\">accurate books</a>, framed by <a href=\"/accounting/advisory/budgeting-forecasting/?intent=budgeting\">budgets and forecasts</a>, and measured against the right <a href=\"/accounting/advisory/kpi-reporting/?intent=kpi-reporting\">KPIs</a>.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> do the financial analysis and modeling, run the scenarios, and coordinate the <strong>tax-aware planning</strong> with your CPA &mdash; but we don&rsquo;t file taxes, take tax positions, or provide legal, investment, or lending advice. That stays with the licensed professionals we coordinate with. Discrete strategy work is fixed-fee against a written scope; ongoing strategic finance runs inside a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Financial strategy, in five questions." — quick-5 (verbatim from old AI summary)
  aiSummary: [
    { q: "What is financial strategy?", a: "The deliberate choices about <strong>pricing, margin, cost structure, capital, and timing</strong> that shape the next two to five years &mdash; the framework that turns accurate books and forecasts into intent-driven decisions." },
    { q: "How is it different from a budget?", a: "A <strong>budget</strong> plans what you&rsquo;ll spend and earn given the strategy you already have. <strong>Strategy</strong> is the prior step &mdash; deciding what the strategy should be. Budget and forecast are the math; strategy is the intent behind them." },
    { q: "Do you give tax advice or file taxes?", a: "No. We do <strong>tax-aware financial planning</strong> &mdash; modeling how decisions affect tax, surfacing questions for your CPA, coordinating directly. We don&rsquo;t file returns, take positions, or represent before the IRS. Anything requiring a license stays with your licensed professional." },
    { q: "Can you help prepare a business for sale?", a: "Yes &mdash; <strong>sale-readiness</strong>: clean books, defensible add-backs and normalizations, working-capital positioning, KPI history, a financial story buyers can underwrite. We coordinate with the M&amp;A advisor, attorney, and CPA running the transaction." },
    { q: "What does it cost?", a: "Discrete projects (pricing reviews, scenario modeling, sale-readiness) are <strong>fixed-fee by scope</strong>. Ongoing strategic finance is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  // "If any of these are on the table, the answer is yes." — six h3 signals (buyer-card, t-mofu signature)
  signals: [
    { name: "You haven&rsquo;t changed prices in years.", body: "Cost has moved; price often hasn&rsquo;t. A pricing review tests what the market and your margin will actually bear &mdash; and what to leave alone." },
    { name: "Growth isn&rsquo;t turning into profit.", body: "Revenue is up, margin is flat or down. Strategy work surfaces where it&rsquo;s leaking &mdash; product mix, customer segment, discounting, overhead &mdash; and what to actually fix." },
    { name: "You&rsquo;re weighing a major investment.", body: "New location, new product, big equipment, an acquisition. Modeling the upside, the downside, and the cash and margin impact before committing &mdash; not after." },
    { name: "You&rsquo;re thinking about taking on debt.", body: "Capital structure isn&rsquo;t obvious. How much, what kind, at what cost, what coverage does the business actually support &mdash; the analysis the banker won&rsquo;t do for you." },
    { name: "A sale is on the horizon.", body: "Whether two years out or this year, sale-readiness work materially affects valuation. Clean books, defensible add-backs, KPI history, working-capital tuning &mdash; done before the buyer starts asking." },
    { name: "What you want from the business has shifted.", body: "More cash to owners, less time, faster growth, lower risk &mdash; whatever the goal, the financial picture has to be deliberately aligned with it. Strategy is that alignment." },
  ],
  // "What financial strategy actually delivers." — six h3 capabilities (stack-8 grid)
  delivers: [
    { num: "01", name: "Pricing &amp; margin strategy", body: "Where price is left on the table, where discounting is leaking margin, which segments and products carry the business, and what to do about each. Unit economics &mdash; contribution margin, customer profitability, where each incremental dollar of revenue actually lands &mdash; sit underneath the pricing call." },
    { num: "02", name: "Capital structure &amp; financing", body: "How the business is funded today, what mix actually fits, when borrowing makes sense, and the coverage and capacity analysis lenders expect &mdash; coordinated with your banker, who provides the credit. Debt-readiness work assembles the package before the loan committee asks for it." },
    { num: "03", name: "Hire / expand / build modeling", body: "The next hire, the new location, the big initiative &mdash; modeled against revenue, margin, and cash impact, with the breakeven and the downside spelled out before commitment. Scaling decisions get tested against unit economics, not against optimism." },
    { num: "04", name: "Tax-aware planning (with your CPA)", body: "Modeling how decisions affect the tax picture and surfacing questions your CPA should answer. We coordinate; we do not file taxes or take tax positions. The boundary is deliberate &mdash; advisory and strategy, not tax filing, audit, or legal work." },
    { num: "05", name: "Sale-readiness", body: "Clean books, defensible add-backs and normalizations, working-capital positioning, KPI history, and a financial story buyers can underwrite. Done before the buyer arrives &mdash; coordinated with the M&amp;A advisor, attorney, and CPA who run the transaction." },
    { num: "06", name: "Owner-goal alignment", body: "More cash, less time, faster growth, lower risk &mdash; translating what owners actually want into a financial picture deliberately shaped to deliver it. Multi-year strategy is the through-line: where the business is going, and what the numbers have to do to get it there." },
  ],
  // "From decision in front of you to a number you can stand behind." — four h3 phases (engagement mechanics, process-diagram)
  phases: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to understand the decision in front of you, the constraints, and what you actually want from the business. No pitch. A discrete strategy project or an ongoing seat &mdash; we scope to the work, not the other way around." },
    { num: "Phase 2", name: "Analysis &amp; modeling", body: "Built on accurate books &mdash; running a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> first if the numbers underneath aren&rsquo;t reliable &mdash; with scenarios, sensitivities, and breakeven analysis spelled out. Strategy built on unreliable numbers is just confident guessing." },
    { num: "Phase 3", name: "Coordinate &amp; recommend", body: "Tax-aware questions go to your CPA, financing questions to your banker, legal questions to your attorney. We coordinate, integrate, and bring you a clear recommendation &mdash; the boundary with licensed work held cleanly throughout." },
    { num: "Phase 4", name: "Decide &amp; execute", body: "A short, plain-language recommendation from a named ProAdvisor, with the assumptions explicit &mdash; and ongoing review if the decision plays out over months or quarters. Fixed-fee for a project; inside the fractional CFO retainer when the work is continuous." },
  ],
  // "Some decisions are projects. Some need a seat at the table." — project-vs-seat boundary prose (mission/cross-sell)
  seat: [
    "A pricing review or an expansion model is a project &mdash; defined, scoped, delivered. But for businesses where strategic decisions are constant, an ongoing relationship works better than serial projects. That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> comes in: the same strategy work, the same integration with cash flow, KPIs, and budgets, but continuous &mdash; with someone who knows your numbers as well as you do.",
    "Most clients start with a discrete project &mdash; pricing, a financing question, sale-readiness &mdash; and grow into ongoing strategic finance as the business gets bigger or the decisions get harder. As automation handles the routine, this kind of judgment is where the real value now lives.",
  ],
  // boundary table — what strategy IS / IS NOT (vs-scroll + vs-table, T3 no-collapse).
  // Preserves the old boundary FAQ ("Do you arrange financing or give investment advice?")
  // as section content rather than gutting it.
  boundaryTable: [
    { area: "Pricing, margin &amp; unit economics", strategy: "yes", licensed: "no" },
    { area: "Capital structure &amp; financing analysis", strategy: "yes", licensed: "lender provides the credit" },
    { area: "Hire / expand / build modeling", strategy: "yes", licensed: "no" },
    { area: "Sale &amp; M&amp;A readiness (financial story)", strategy: "yes", licensed: "M&amp;A advisor / attorney run the deal" },
    { area: "Tax-aware planning", strategy: "modeling &amp; coordination", licensed: "CPA / EA files &amp; takes positions" },
    { area: "Tax filing &amp; IRS representation", strategy: "no", licensed: "CPA / EA" },
    { area: "Audit &amp; assurance", strategy: "no", licensed: "audit firm" },
    { area: "Legal structure &amp; contracts", strategy: "no", licensed: "attorney" },
    { area: "Lending / investment / securities advice", strategy: "no", licensed: "licensed advisor" },
  ],
  // T4 — the 11 contract Q/A, VERBATIM, append-only. Q7–Q11 are the contract's
  // intentional schema-only short variants; preserved exactly as frozen.
  faq: [
    { q: "What is financial strategy?", a: "Financial strategy is the set of choices about how a business makes money and uses its capital &mdash; pricing and margin, cost structure, how it funds growth, when to hire, when to expand, whether to borrow, and how to prepare for a sale. It&rsquo;s not a single product; it&rsquo;s the framework that turns accurate books and forecasts into the deliberate decisions that shape the next two to five years." },
    { q: "How is financial strategy different from a budget?", a: "A budget plans what you&rsquo;ll spend and earn given the strategy you already have. Financial strategy is the prior step: deciding what the strategy should be. It includes pricing and margin choices, capital structure, financing posture, and the major decisions a budget then reflects. Budget and forecast are the math; strategy is the intent behind them." },
    { q: "Does TechBrot give tax advice or file taxes?", a: "No. TechBrot is not a tax practice. We do tax-aware financial planning &mdash; modeling how decisions affect the tax picture, surfacing questions worth your CPA&rsquo;s attention, and coordinating directly with your CPA or EA &mdash; but we don&rsquo;t file tax returns, take tax positions, or represent clients before the IRS. Anything that requires a license stays with your licensed professional." },
    { q: "Can you help prepare a business for sale?", a: "Yes. Sale-readiness is part of financial strategy: clean and reliable books, defensible add-backs and normalizations, working-capital and inventory positioning, KPI history, and a financial story buyers can underwrite. We coordinate with the M&amp;A advisor, attorney, and CPA who run the transaction; we don&rsquo;t broker the sale or provide legal or tax positions." },
    { q: "Do I need clean books before strategy work?", a: "Yes &mdash; strategy built on unreliable numbers is just confident guessing. If your books need work, we start with a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> and reliable <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, then build the strategy on top. Many clients begin with bookkeeping and grow into strategy work as the business matures." },
    { q: "What does financial strategy advisory cost?", a: "Discrete strategy engagements &mdash; pricing reviews, scenario modeling, sale-readiness work &mdash; are quoted as fixed-fee project work against a written scope. Ongoing strategic finance is part of a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a> engagement, typically $3,000&ndash;$8,000+ per month by application. No hourly billing." },
    { q: "What is financial strategy?", a: "The deliberate choices about pricing, margin, cost structure, capital, and timing that shape the next two to five years &mdash; the framework that turns accurate books and forecasts into intent-driven decisions." },
    { q: "How is it different from a budget?", a: "A budget plans what you&rsquo;ll spend and earn given the strategy you already have. Strategy is the prior step &mdash; deciding what the strategy should be. Budget and forecast are the math; strategy is the intent behind them." },
    { q: "Do you give tax advice or file taxes?", a: "No. We do tax-aware financial planning &mdash; modeling how decisions affect tax, surfacing questions for your CPA, coordinating directly. We don&rsquo;t file returns, take positions, or represent before the IRS. Anything requiring a license stays with your licensed professional." },
    { q: "Can you help prepare a business for sale?", a: "Yes &mdash; sale-readiness: clean books, defensible add-backs and normalizations, working-capital positioning, KPI history, a financial story buyers can underwrite. We coordinate with the M&amp;A advisor, attorney, and CPA running the transaction." },
    { q: "What does it cost?", a: "Discrete projects (pricing reviews, scenario modeling, sale-readiness) are fixed-fee by scope. Ongoing strategic finance is part of a fractional CFO engagement ($3,000&ndash;$8,000+/mo, by application). No hourly billing." },
  ],
  // "Related advisory & services." — four h3 related (stack-8)
  related: [
    { title: "Budgeting &amp; forecasting", href: "/accounting/advisory/budgeting-forecasting/?intent=budgeting", body: "The annual plan that turns strategy into a number to manage against." },
    { title: "Cash flow management", href: "/accounting/advisory/cash-flow-management/?intent=cash-flow", body: "The liquidity picture that decides what the strategy can actually fund." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "Ongoing strategic finance for businesses where decisions are constant." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The accurate-books foundation every strategic decision is built on." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review row (trust-row)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Pricing, margin, capital structure, hire/expand modeling, sale-readiness, tax-aware planning" },
    { value: "Engagement", label: "Fixed-fee, written scope before work — built on accurate books in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. — QuickBooks is a registered trademark of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/financial-strategy/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-finstrat-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":"https://techbrot.com/accounting/advisory/"},
          {"@type":"ListItem","position":4,"name":"Financial Strategy","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Financial Strategy Advisory","serviceType":"Financial strategy advisory","description":"Pricing and margin strategy, capital structure and financing decisions, hire/expand/borrow/sale planning, tax-aware planning coordinated with the client's CPA or EA, and sale-readiness work for U.S. businesses, delivered by Certified ProAdvisors on accurate books. Does not provide tax-filing, IRS representation, legal advice, audit, assurance, lending, or investment-advisory services.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Financial strategy advisory deliverables","itemListElement":data.delivers.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#delivers","name":"What financial strategy delivers","itemListElement":data.delivers.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Financial strategy — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
