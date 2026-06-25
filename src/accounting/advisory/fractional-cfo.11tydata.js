/* /accounting/advisory/fractional-cfo/ (round-17 elevation). Sources:
 * baseline.json (54 headings, 13 FAQ — 8 substantive + 5 schema-only
 * dupes/variants) + accounting/advisory/fractional-cfo/index.html (full copy).
 * t-bofu. Citable: THE ENGAGEMENT MODEL — the weekly/monthly/quarterly/
 * event-driven operating rhythm a fractional CFO runs (operating rhythm · close
 * & board reporting · strategic review · capital & transactions) — plus the
 * economics ($250K–$400K full-time loaded vs $3,000–$8,000+/mo fractional =
 * 15–30% of full-time cost; 20–60 hrs/month). $1M–$50M, by application. quick-5
 * additive, zero overlap with FAQ. CTA: non-QB BOFU — NO phone. Authorship
 * firm-level; founder schema-only. No invented stats. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what is / cost / when need / vs controller / what do / replace CPA / how structured / available)
  aiSummary: [
    { q: "What does the weekly, monthly, and quarterly rhythm look like?", a: "<strong>The engagement model:</strong> a weekly operating rhythm (13-week cash flow refreshed, open decisions, a 60–90 min working session), a monthly close & board package, a quarterly strategic review (budget-vs-actual, forecast refresh, capital allocation), and event-driven bursts for fundraising, M&A, or audits — scope flexes during those windows." },
    { q: "Who is my actual CFO, and do they show up to the board?", a: "A <strong>named senior operator</strong> with prior full-time CFO/controller experience — matched by industry, stage, and engagement type, not availability. They show up to your board meetings, talk to your investors, and own the work, backed by platform-level engagement review." },
    { q: "Do I need clean books before a CFO engagement?", a: "Effectively yes — <strong>CFO work only delivers value on accurate books.</strong> The first thing the CFO does is assess the operational accounting underneath; on unreliable books they’d have to fix them first (slow at CFO rates) or analyze a foundation that can’t be trusted (worse)." },
    { q: "Which businesses is fractional CFO wrong for?", a: "Three: <strong>sub-$1M revenue</strong> (a controller or senior bookkeeper is usually right), <strong>post-$50M</strong> (a full-time CFO is usually right), and <strong>pre-product-market-fit startups</strong> (rarely useful). The model fits the $1M–$50M middle." },
    { q: "Can TechBrot run the bookkeeping underneath too?", a: "Yes — and it’s why we offer CFO at all. When the <strong>fractional CFO pairs with TechBrot bookkeeping, payroll, and sales tax</strong>, the CFO works from accurate books day one, integration costs disappear, and the finance stack runs as one system instead of three vendors." },
  ],
  signals: [
    { opener: "You’re preparing to raise capital or refinance debt.", body: "Investors and lenders evaluate the financial work product, not just the numbers. A clean financial model, a defensible plan, and a credible operator on the call materially affect terms." },
    { opener: "You’re running blind on cash flow.", body: "If you can’t answer “how many weeks of runway do we have at current burn” in 30 seconds, you don’t have a forecasting function. A fractional CFO builds the 13-week rolling cash flow and the scenarios behind it." },
    { opener: "Your board or investors want better reporting.", body: "Monthly board packages, KPI dashboards, and investor updates are CFO-level work product. Bookkeeper-produced financial statements aren’t the same deliverable." },
    { opener: "You’re considering an M&A event or exit.", body: "Selling a business requires audit-grade financials, defensible add-backs, working-capital adjustments, and a senior operator who can defend the story to buyers. CFO work directly affects valuation outcome." },
    { opener: "Your CEO is doing CFO work.", body: "If the founder or CEO is building financial models, running cash-flow forecasts, or preparing board packages personally, that’s capacity drag. CFO work doesn’t scale on founder time." },
    { opener: "You need senior judgment, not just senior reports.", body: "Pricing decisions, hiring economics, capital allocation, segment-profitability calls — these need a senior operator weighing trade-offs, not a report describing them." },
  ],
  // "What we cover." — 6 areas (num + name + body + bullets)
  coverage: [
    { num: "01", name: "Financial Strategy", body: "Annual budgeting, multi-year planning, capital allocation, and strategic financial direction.", bullets: ["Annual operating budget", "Three-year strategic financial plan", "Capital allocation framework", "Business unit profitability strategy", "Investment prioritization"] },
    { num: "02", name: "Cash Flow & Forecasting", body: "13-week rolling cash flow, runway analysis, and scenario modeling for operating decisions.", bullets: ["13-week rolling cash flow forecast", "Runway scenario modeling", "Burn rate analysis & trajectory", "Working capital management", "Treasury & cash optimization"] },
    { num: "03", name: "Board & Investor Reporting", body: "Monthly board packages, investor updates, and KPI dashboards that withstand scrutiny.", bullets: ["Monthly board package", "Investor update memos", "KPI dashboard development", "Variance reporting", "Audit committee support"] },
    { num: "04", name: "Fundraising & Capital", body: "Financial model build, due-diligence preparation, lender package, and deal-room support through close.", bullets: ["Investor-grade financial model", "Due diligence preparation", "Lender package development", "Data room construction", "Investor & lender call support"] },
    { num: "05", name: "KPI & Unit Economics", body: "Metric definition, segment profitability, and the unit-economics work that drives pricing and strategy.", bullets: ["Unit economics analysis", "Customer profitability segmentation", "Contribution margin by SKU or service", "CAC, LTV, payback analysis", "Sales & marketing efficiency metrics"] },
    { num: "06", name: "Senior Advisory & M&A", body: "Strategic decisions, pricing, hiring economics, M&A readiness, and exit preparation.", bullets: ["Strategic decision support", "Pricing strategy & analysis", "Hiring economics & team planning", "M&A readiness & valuation prep", "Exit preparation & deal advisory"] },
  ],
  notList: "A fractional CFO does not file taxes (your CPA does), does not perform audits (your audit firm does), does not provide legal or fiduciary advice (your attorney does), and does not replace your bookkeeper (TechBrot bookkeeping does). The CFO operates above the bookkeeping layer and coordinates with these functions — not instead of them. CFO work only delivers value on top of accurate operational books.",
  // "How a fractional CFO engagement actually runs." — THE ENGAGEMENT MODEL (citable, process-diagram)
  engagementModel: [
    { num: "Weekly", name: "Operating rhythm", body: "13-week cash flow refreshed. Open strategic decisions reviewed. Ad-hoc analysis on whatever is in front of the CEO that week. 60–90 minute working session." },
    { num: "Monthly", name: "Close & board reporting", body: "Monthly financials reviewed with the CFO lens. Board package or investor update prepared. KPI dashboard updated. Variance against budget. Forward look at the next 30–60 days." },
    { num: "Quarterly", name: "Strategic review", body: "Budget-vs-actual deep-dive. Forecast refreshed. Capital allocation review. Pricing or unit-economics analysis. Board prep if applicable. Engagement scope review." },
    { num: "Event-driven", name: "Capital & transactions", body: "Fundraising, M&A, refinancing, audits — the high-intensity work that comes in bursts. Engagement scope and retainer adjust during these windows to match the work required." },
  ],
  tiers: [
    { name: "Strategic", price: "$3,000–$5,000", per: "/month", forWhom: "Stable operating businesses needing senior financial direction without active capital events. Light forecasting, monthly board review, ad-hoc advisory.", bullets: ["Monthly board / leadership review", "13-week cash flow (monthly refresh)", "Annual budgeting", "Strategic advisory (email + monthly call)", "Quarterly engagement review"], cta: "Apply for Strategic", note: "" },
    { name: "Active", price: "$5,000–$7,000", per: "/month", forWhom: "Growth-stage businesses with active forecasting needs, weekly operating rhythm, KPI work, and ongoing strategic decisions.", bullets: ["Everything in Strategic", "Weekly operating rhythm (60–90 min)", "13-week cash flow (weekly refresh)", "KPI dashboard & unit economics", "Monthly board package", "Investor update memos", "Scenario modeling & analysis"], cta: "Apply for Active", note: "Most common" },
    { name: "Intensive", price: "$7,000–$8,000+", per: "/month", forWhom: "Active fundraising, M&A, financial transformation, or high-complexity multi-entity operations needing senior bandwidth weekly.", bullets: ["Everything in Active", "Active fundraising / M&A support", "Investor-grade financial model build", "Due diligence & data room", "Investor & lender call support", "Multi-entity consolidation strategy", "Audit prep & coordination"], cta: "Apply for Intensive", note: "" },
  ],
  // "The business profiles where fractional CFO works." — 6 profiles
  profiles: [
    { num: "01", name: "Bootstrapped growth-stage operators", body: "$2M–$30M revenue, profitable or near-profitable, capital-efficient. CFO-level work for budgeting, pricing, and capital-allocation decisions without dilution." },
    { num: "02", name: "Venture-backed companies between rounds", body: "Seed through Series A–B companies needing CFO work for board reporting, runway management, and next-round prep — without a $300K hire diluting the cap table." },
    { num: "03", name: "PE portfolio companies", body: "Lower-middle-market portfolio companies needing CFO bandwidth for value-creation-plan execution, monthly sponsor reporting, and exit preparation." },
    { num: "04", name: "Pre-exit owners", body: "Owners considering a sale in 12–36 months. CFO work materially affects valuation — clean financials, defensible add-backs, professional buyer-side answers." },
    { num: "05", name: "Multi-entity / multi-state operators", body: "Complex structures — multiple LLCs, multi-state operations, intercompany transactions — needing senior financial coordination above the bookkeeping layer." },
    { num: "—", name: "When fractional CFO doesn’t fit", body: "Sub-$1M revenue (a controller or senior bookkeeper is usually right). Post-$50M revenue (a full-time CFO is usually right). Pre-product-market-fit startups (rarely useful)." },
  ],
  // "From application to first board meeting." — onboarding (stacked-numbered)
  onboarding: [
    { name: "Application", sub: "Free, no obligation", body: "Send a brief application: business stage, revenue, current finance function, why now, and what you’re looking for. 10–15 minutes, no fee." },
    { name: "Diagnostic call", sub: "within 1 week of application", body: "A 45-minute call with a senior operator. We assess fit, scope, timing, and engagement match. Both sides decide whether to continue." },
    { name: "Written scope & match", sub: "5 business days", body: "A written engagement scope within 5 business days — tier, scope, deliverables, cadence, retainer, named CFO operator, and start date." },
    { name: "Engagement start", sub: "2 weeks from scope acceptance", body: "Engagement agreement signed. Onboarding to operating books, KPIs, and stakeholders. First operating-rhythm session within the first week." },
  ],
  operatorSpec: [
    { value: "Operator profile", label: "Senior finance executives with prior CFO or controller experience" },
    { value: "Engagement match", label: "Industry, stage, and engagement-type aligned — not by availability" },
    { value: "Accountability", label: "Named CFO operator · platform engagement review" },
    { value: "Capacity", label: "Limited engagements per quarter to preserve senior attention" },
  ],
  related: [
    { title: "All advisory services", href: "/accounting/advisory/?intent=advisory", body: "The full advisory layer — cash flow, KPIs, budgeting, strategy, performance — fractional CFO is the heaviest of them." },
    { title: "Cash flow management", href: "/contact/?intent=cash-flow", body: "13-week rolling cash flow and runway scenarios — often the first thing a CFO engagement stands up." },
    { title: "Performance review", href: "/contact/?intent=performance-review", body: "Margin and profitability by segment, turned into a short action list." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The accurate operational books a CFO engagement is built on — runs cleanly underneath." },
  ],
  faq: [
    { q: "What is a fractional CFO?", a: "An experienced finance executive serving as a part-time Chief Financial Officer — financial strategy, cash-flow forecasting, board reporting, fundraising, KPI work, and senior decisions. Typically 20–60 hours/month on a fixed retainer. The model exists because $1M–$50M businesses need CFO-level work but can’t justify a $250K+ full-time hire." },
    { q: "How much does a fractional CFO cost?", a: "A fixed monthly retainer: Strategic $3,000–$5,000, Active $5,000–$7,000, Intensive $7,000–$8,000+. Full-time CFOs at this stage cost $250K–$400K all-in — fractional delivers senior work at 15–30% of full-time cost." },
    { q: "When does a business need a fractional CFO?", a: "Three inflection points: revenue crosses $1M–$3M and decisions get harder; you’re preparing for a capital event (fundraising, refinancing, sale); or scaling complexity outpaces the existing finance function. Also when the CEO is personally doing CFO work." },
    { q: "What’s the difference between a fractional CFO and a controller?", a: "A controller manages accounting operations (close, statements, controls). A fractional CFO operates strategically (planning, forecasting, fundraising, board). Growth-stage businesses often need both — the controller produces continuous output, the CFO interprets it and drives strategy." },
    { q: "What does a fractional CFO actually do?", a: "Six areas: financial strategy, cash flow & forecasting, board & investor reporting, fundraising & capital, KPI & unit economics, and senior advisory & M&A. Not tax filing, not audit, not legal — those stay with the licensed professionals we coordinate with." },
    { q: "Does a fractional CFO replace my CPA?", a: "No. The CFO handles operational and strategic finance — strategy, forecasting, board reporting, fundraising. Your CPA or EA handles income-tax filing, tax positions, and IRS representation. The CFO coordinates with them but does not file taxes or provide tax advice." },
    { q: "How are engagements structured?", a: "Three tiers on a fixed monthly retainer against a written scope — Strategic, Active, and Intensive — defined by operating rhythm (monthly vs weekly), deliverables, and intensity. Scope and retainer flex during event-driven windows like fundraising or M&A. No hourly billing." },
    { q: "Is a fractional CFO available immediately?", a: "Engagements are accepted by application and limited per quarter to preserve senior attention. After a brief application and a 45-minute diagnostic call, a written scope is produced within 5 business days, with engagement start typically about 2 weeks after scope acceptance." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/fractional-cfo/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#fractional-cfo-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":"https://techbrot.com/accounting/advisory/"},
          {"@type":"ListItem","position":4,"name":"Fractional CFO","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Fractional CFO services","serviceType":"Part-time strategic financial leadership for $1M–$50M businesses","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. businesses $1M–$50M revenue"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Fractional CFO retainers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name)+" fractional CFO","priceSpecification":{"@type":"UnitPriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+stripTags(t.per)+" · fixed retainer, written scope","unitText":"MONTH"},"availability":"https://schema.org/LimitedAvailability"};})}},
        {"@type":"ItemList","@id":url+"#coverage","name":"What a fractional CFO covers","itemListElement":data.coverage.map(function(c,i){return {"@type":"ListItem","position":i+1,"name":stripTags(c.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
