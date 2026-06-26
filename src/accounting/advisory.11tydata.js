/* /accounting/advisory/ hub (round-17 elevation). Sources: baseline.json (28
 * headings, 10 FAQ — 5 substantive + 5 schema-only dupes/variants) +
 * accounting/advisory/index.html (full copy). t-hub. Citable / framework:
 * THE JUDGMENT LAYER — as automation commoditizes routine data entry
 * (categorizing, reconciling, closing), the durable value moves up to the
 * judgment layer: interpreting the numbers and deciding what to do next.
 * Bookkeeping records what happened; advisory interprets it. quick-5 additive,
 * zero overlap with FAQ. CTA: HUB — Explore Services primary, NO phone.
 * Authorship firm-level (ProAdvisor team); founder schema-only. Fractional CFO
 * $3,000–$8,000+/mo by application; lighter advisory quoted by scope. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  judgment: {
    body: "<strong>The judgment layer.</strong> For a decade the value in accounting was getting the data in — categorizing, reconciling, closing. Software and AI are now very good at that, and getting better; the commodity line is moving up, and firms that only do data entry move down with it. What software can’t do is sit across the table and tell you the truth: that the product line you love loses money, that you’ll be tight on cash in March, that the second location isn’t carrying its rent yet. That requires someone who understands both your numbers and your business &mdash; and will say it plainly. <strong>That judgment layer is where the value now concentrates, and it’s deliberately where TechBrot is built to compete.</strong>",
  },
  // quick-5 — distinct from FAQ (what is / vs bookkeeping / when need / replace CPA / cost / clean-books-first / vs fractional CFO)
  aiSummary: [
    { q: "Why is judgment the part automation can’t replace?", a: "Software can categorize a transaction; it can’t tell you whether to hire, how much cash you’ll have in 90 days, or which product line actually makes money. As data entry is commoditized, the durable value moves to the <strong>judgment layer</strong> — interpreting the numbers and deciding what to do." },
    { q: "What decisions does advisory actually help me make?", a: "The real ones: <strong>will I run out of cash, what should I watch, what can I afford, what’s the right move, what’s really working.</strong> Cash-flow forecasting, KPI reporting, budgeting, financial strategy, and performance review each map to one of those questions." },
    { q: "Can advisory be added to my monthly bookkeeping?", a: "Yes — that’s the most common path. Lighter advisory (KPI reporting, budgeting, cash-flow planning) is <strong>layered onto a monthly bookkeeping engagement and quoted by scope</strong>; it scales up to a full fractional CFO engagement as the business grows." },
    { q: "Who delivers advisory at TechBrot?", a: "The <strong>Certified QuickBooks ProAdvisor team</strong> — operational and strategic finance built on books that are already correct. We focus on cash flow, KPIs, budgeting, performance, and strategy; your CPA files the taxes and we coordinate cleanly." },
    { q: "What does a monthly advisory report actually contain?", a: "The <strong>handful of numbers that run your business</strong> — in plain language, not a 40-tab spreadsheet: a rolling cash-flow forecast, your key KPIs against target, margin and profitability by segment, and a short action list of what to do next." },
  ],
  // "Five ways we turn books into decisions — and a CFO when you need one." (6 services)
  services: [
    { area: "01 · Cash flow", name: "Cash flow management & forecasting", body: "Know what cash you’ll have, when, and why — rolling forecasts, working-capital planning, and the levers that change the picture.", answers: "Will I run out of cash?", href: "/contact/?intent=cash-flow" },
    { area: "02 · KPIs", name: "KPI & management reporting", body: "The handful of numbers that actually run your business, reported monthly in plain language — not a 40-tab spreadsheet no one reads.", answers: "What should I watch?", href: "/contact/?intent=kpi-reporting" },
    { area: "03 · Budgeting", name: "Budgeting & forecasting", body: "A budget you’ll actually use, with forecasts that update against reality — so plans and spending stay connected all year.", answers: "What can I afford?", href: "/contact/?intent=budgeting" },
    { area: "04 · Strategy", name: "Financial strategy", body: "Pricing, margin, capital structure, and the big calls — hire, expand, borrow, sell — grounded in your real numbers, tax-aware planning coordinated with your CPA.", answers: "What’s the right move?", href: "/contact/?intent=financial-strategy" },
    { area: "05 · Performance", name: "Business performance review", body: "A regular, structured read on what’s working and what isn’t — margin, profitability by segment, and trends — turned into a short action list.", answers: "What’s really working?", href: "/contact/?intent=performance-review" },
    { area: "06 · Fractional CFO", name: "Fractional CFO", body: "A senior finance leader at part-time cost — forecasting, board reporting, fundraising and capital-event readiness for $1M–$50M businesses. By application.", answers: "Who owns the numbers?", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo" },
  ],
  // "What advisory is, isn't, and who we coordinate with." (3 stacked)
  scope: [
    { name: "Advisory is", body: "Cash-flow forecasting and management. KPI and management reporting. Budgeting and forecasting. Profitability and performance analysis. Pricing and margin guidance. Financial strategy for hiring, expansion, borrowing, and sale readiness. Fractional CFO leadership." },
    { name: "Advisory isn’t", body: "Income-tax filing or IRS representation. Tax-position or legal advice. A substitute for accurate books — advisory is only as good as the bookkeeping underneath it. Audit or assurance work. Investment, securities, or insurance advice." },
    { name: "We coordinate with", body: "Your CPA or EA on tax-aware planning and filing. Your attorney on entity and transaction matters. Your banker and lenders on financing. We bring the numbers and the analysis; licensed professionals make the calls that require a license." },
  ],
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor — QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Cash flow, KPIs, budgeting, performance, strategy, fractional CFO · income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work · built on accurate books in your own QuickBooks file" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. · QuickBooks is a registered trademark of Intuit Inc." },
  ],
  related: [
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "Senior finance leadership at part-time cost — the heaviest advisory engagement." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The accurate-books foundation advisory is built on." },
    { title: "Industry expertise", href: "/contact/?intent=industries-faq", body: "Advisory grounded in how your specific industry runs." },
    { title: "Service catalog", href: "/accounting/services/?intent=accounting", body: "Every engagement type with scope, pricing, and the decision framework." },
  ],
  faq: [
    { q: "What is accounting advisory?", a: "The work that turns accurate books into decisions: cash-flow forecasting, KPI reporting, budgeting, performance review, and financial strategy. Where bookkeeping records what happened, advisory interprets it and tells you what to do next. TechBrot delivers advisory through Certified ProAdvisors, including fractional CFO engagements, always built on books that are already correct." },
    { q: "How is advisory different from bookkeeping?", a: "Bookkeeping is the operational recording and reconciliation of transactions — the foundation. Advisory is the judgment layer on top: forecasting cash, analyzing margin and KPIs, planning budgets, and guiding decisions. As automation commoditizes routine data entry, advisory is where the value now concentrates. The two work together — advisory is only as good as the books underneath it." },
    { q: "When does a business need accounting advisory?", a: "Common triggers include cash that’s hard to predict, growth that strains working capital, decisions about hiring or expansion, raising capital, preparing for a sale, or simply not knowing which parts of the business are actually profitable. If you have clean books but can’t turn them into confident decisions, that’s the advisory gap." },
    { q: "Does advisory replace my CPA?", a: "No. TechBrot advisory focuses on operational and strategic financial decisions — cash flow, KPIs, budgeting, performance, and strategy. Your CPA or EA handles income-tax filing, tax positions, and IRS representation. We coordinate directly with them, including on tax-aware planning, but we do not file taxes or provide tax advice." },
    { q: "Do I need clean books before advisory?", a: "Yes — advisory is only as reliable as the numbers underneath it. If your books need work first, we start with a cleanup and accurate monthly bookkeeping, then layer advisory on top. Many clients begin with bookkeeping and grow into advisory as the business does." },
    { q: "What does accounting advisory cost?", a: "Lighter advisory — KPI reporting, budgeting, cash-flow planning — is often added to a monthly bookkeeping engagement and quoted by scope. Fractional CFO engagements typically run $3,000–$8,000+ per month and are accepted by application. All pricing is fixed-fee against a written scope, with no hourly billing." },
    { q: "What’s the difference between advisory and a fractional CFO?", a: "Fractional CFO is the heaviest, most senior form of advisory — an embedded part-time finance leader who owns forecasting, board reporting, and capital-event readiness for $1M–$50M businesses, by application. Lighter advisory (KPI reporting, budgeting, cash-flow planning) delivers specific analyses without a standing leadership seat. Most clients start light and scale up." },
    { q: "What does a fractional CFO actually do?", a: "A fractional CFO is a senior finance leader who works with you part-time instead of as a full-time hire. The role owns cash-flow forecasting, KPI and board reporting, budgeting, margin and pricing strategy, and readiness for fundraising or a sale — the calls a bookkeeper or controller doesn’t make. TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagements for roughly $1M–$50M businesses, by application, always built on books that are already accurate." },
    { q: "When is my business ready for a fractional CFO?", a: "Usually when revenue runs roughly $1M–$50M and the financial decisions outgrow the books — you’re forecasting cash tightly, raising capital, planning a major expansion, or preparing for a sale, and you need someone to own the numbers without a full-time hire. Below that, lighter advisory — KPI reporting, budgeting, cash-flow planning — layered onto your <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> is usually the right fit. TechBrot accepts fractional CFO engagements by application and scales advisory up as the business grows." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/advisory/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage","CollectionPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#advisory-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Advisory","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Accounting advisory & fractional CFO services","serviceType":"Cash flow, KPI reporting, budgeting, financial strategy, fractional CFO","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Accounting advisory services","itemListElement":data.services.map(function(s){return {"@type":"Offer","name":stripTags(s.name),"availability":"https://schema.org/InStock"};})}},
        {"@type":"ItemList","@id":url+"#services","name":"Accounting advisory services","itemListElement":data.services.map(function(s,i){return {"@type":"ListItem","position":i+1,"name":stripTags(s.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
