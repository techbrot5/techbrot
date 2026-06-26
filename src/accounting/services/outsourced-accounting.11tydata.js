/* /accounting/services/outsourced-accounting/ — LIVE baseline accounting-services
 * child migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-outsourced.txt (40 headings,
 * 6 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/services/outsourced-accounting/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure/cobalt vocabulary; src/accounting/advisory/cash-flow-management.njk +
 * .11tydata.js for the FULL baseline schema set (WebPage + BreadcrumbList +
 * Service + ItemList + FAQPage + QAPage). t-mofu, tierClass section--tier-guide,
 * bodyClass page--mofu. CTA intent: accounting (canonical lexicon — no
 * outsourced-accounting-specific intent exists in the map). Footer chrome H2s
 * (Accounting/QuickBooks/Company/Network) + "The monthly brief." NOT rendered
 * here — base-layout chrome / dropped per protocol T2. The 5 quick-answer
 * questions render as NON-heading ai-summary__question (baseline captured them
 * as <dt>, NOT <hN>) to keep the frozen heading inventory exact. FAQ: 6 contract
 * Q/A verbatim, answers preserved (append-only enrichment) and used for BOTH the
 * faq__list AND the FAQPage schema (NO dedup). The old 7th display Q/A ("Do we
 * keep our own QuickBooks file and access?") is preserved as body content under
 * the FAQ section (no gutting) but is NOT in the frozen-6 FAQPage schema array.
 * Honesty R5/R9: no fabricated stats/outcomes/reviews; firm-level authorship;
 * David Westgate in reviewedBy schema @id only; independent firm, not affiliated
 * with Intuit Inc. No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Outsourced accounting, plainly." — definition prose (from old TL;DR body, preserved/enriched; no <strong> rule applies to dark hero only)
  definition: [
    "<strong>Outsourced accounting</strong> means delegating your operational accounting function to an external firm instead of building and managing it in-house. A full engagement covers recurring <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">bookkeeping</a>, the <a href=\"/accounting/month-end-close/\">month-end close</a>, <a href=\"/accounting/reconciliation-services/\">account reconciliation</a>, <a href=\"/accounting/financial-statements/\">financial statement</a> preparation, and coordination of <a href=\"/accounting/payroll-management/\">payroll</a> and <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> &mdash; with optional <a href=\"/accounting/services/controller-services/\">controller</a> oversight on top.",
    "The output is <strong>CPA-ready</strong> and handed to your tax professional for filing; TechBrot doesn&rsquo;t file taxes or perform audits, which keeps your books with accounting specialists and your returns with a licensed tax pro. Delivered by <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> in your own QuickBooks file, on a fixed monthly fee, with a named lead and built-in continuity &mdash; a managed accounting department without the hiring, training, turnover, or single-person risk. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Outsourced accounting, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "What is outsourced accounting?", a: "Delegating your <strong>operational accounting function</strong> to an external firm instead of building it in-house &mdash; bookkeeping, close, reconciliation, statements, payroll and sales-tax coordination, optional controller oversight. A managed accounting department without hiring one." },
    { q: "Outsourced accounting vs bookkeeping?", a: "Bookkeeping is <strong>one component</strong> &mdash; recording and reconciling. Outsourced accounting is the <strong>whole function</strong>: bookkeeping plus close, statements, reporting, payroll/sales-tax coordination, and optional controller-level oversight." },
    { q: "Cheaper than hiring in-house?", a: "Almost always, below mid-market size. An internal bookkeeper plus part-time controller &mdash; salary, benefits, taxes, software, management &mdash; runs into <strong>six figures</strong>, before turnover and single-point-of-failure risk. Outsourced delivers the same function on a fixed fee with built-in continuity." },
    { q: "Does it include tax prep?", a: "<strong>No.</strong> We produce CPA-ready books and coordinate with your CPA or EA, who files. We don&rsquo;t file returns, take tax positions, or perform audit/assurance. Books with accounting specialists, returns with a licensed tax pro &mdash; a feature, not a gap." },
    { q: "What does it cost?", a: "Fixed monthly fee scaled to volume and complexity &mdash; core engagements roughly <strong>$400&ndash;$2,500+/mo</strong>, controller-inclusive above that. Quoted against written scope after a discovery call; no hourly billing." },
  ],
  // "The whole function — not a slice of it." — 6 deliverables (stack-8 + num). h3s VERBATIM per contract.
  deliverables: [
    { num: "01", name: "Recurring bookkeeping", body: "Transactions recorded, categorized, and reconciled on a regular cadence &mdash; the operational base everything else is built on. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly bookkeeping</a>, owned and run." },
    { num: "02", name: "Month-end close", body: "A real <a href=\"/accounting/month-end-close/\">close</a> on a published calendar &mdash; reconciliations, accruals, depreciation, period locked &mdash; so each month&rsquo;s numbers are final and verifiable, not perpetually provisional." },
    { num: "03", name: "Reconciliation", body: "Every bank, credit card, loan, and balance-sheet account <a href=\"/accounting/reconciliation-services/\">reconciled</a> to its source monthly &mdash; the proof step that makes the books real rather than assumed." },
    { num: "04", name: "Financial statements", body: "All three <a href=\"/accounting/financial-statements/\">statements</a> &mdash; P&amp;L, balance sheet, cash flow &mdash; delivered monthly with plain-language commentary, CPA-ready for your tax professional." },
    { num: "05", name: "Payroll &amp; sales-tax coordination", body: "Coordination of <a href=\"/accounting/payroll-management/\">payroll</a> and <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a> so they reconcile cleanly into the books &mdash; not three disconnected vendors handing off to each other." },
    { num: "06", name: "Optional controller oversight", body: "Add <a href=\"/accounting/services/controller-services/\">controller-level oversight</a> &mdash; close management, statement review, internal controls &mdash; when you need someone accountable for the function, not just running it." },
  ],
  // "If any of these sound familiar, the answer is probably yes." — 6 signals (buyer-card). h3s VERBATIM per contract.
  signals: [
    { opener: "You&rsquo;re doing the books yourself.", body: "Owner time spent on bookkeeping is the most expensive labor in the company applied to the lowest-leverage work. Outsourcing the function buys that time back." },
    { opener: "One person holds all the accounting knowledge.", body: "If your bookkeeper leaving would be a crisis, you have a single point of failure. A managed function has built-in continuity &mdash; no one person is the whole department." },
    { opener: "You&rsquo;re stitching together vendors.", body: "A bookkeeper here, a payroll service there, a sales-tax tool somewhere else, and no one connecting them. Outsourced accounting runs them as one coordinated function." },
    { opener: "Hiring in-house doesn&rsquo;t pencil out yet.", body: "You need more than a part-time bookkeeper but can&rsquo;t justify a full internal team. Outsourcing gives you the full function at a fraction of the loaded cost." },
    { opener: "Your books are always behind.", body: "If the function is under-resourced, the books slip &mdash; and behind books make every decision and every tax season harder. A managed function keeps them current by design." },
    { opener: "You want to focus on the business, not its accounting.", body: "Accounting is essential and rarely the thing the owner is best at or should be doing. Outsourcing hands it to specialists so you can run the company." },
  ],
  // "The real cost of an internal accounting department." — vs in-house prose (preserved from old mission-block)
  vsInHouse: [
    "An internal accounting function looks like one bookkeeper&rsquo;s salary on paper. In reality it&rsquo;s salary plus benefits, payroll taxes, software licenses, training, and the management time to supervise it &mdash; and for anything beyond basic recording, a part-time controller on top. Add the risk that the one person who knows your books could leave, take the institutional knowledge with them, and leave you reconstructing the function from scratch.",
    "Outsourced accounting replaces all of that with a fixed monthly fee and a managed function. No benefits, no turnover, no single point of failure, no management overhead &mdash; and a named lead with a team and platform behind them, so continuity is structural rather than dependent on one hire staying. For most businesses below the mid-market, the math isn&rsquo;t close.",
    "Where it flips: once a business is large enough that a full internal finance team is genuinely justified and continuously utilized, in-house starts to win. We&rsquo;ll tell you honestly when you&rsquo;re approaching that line.",
  ],
  // "From handoff to a function that just runs." — 4-phase process (process-diagram). h3s VERBATIM per contract.
  process: [
    { num: "Phase 1", name: "Discovery &amp; assessment", body: "A 30-minute call plus a review of your current books &mdash; what&rsquo;s working, what&rsquo;s behind, what the function actually needs to cover. We scope the engagement before quoting. No pitch." },
    { num: "Phase 2", name: "Cleanup to baseline", body: "If the books need it, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> or <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a> first &mdash; a managed function can only run cleanly from a reliable starting point." },
    { num: "Phase 3", name: "Transition the function", body: "We take over the recurring work &mdash; bookkeeping, reconciliation, close, statements, payroll and sales-tax coordination &mdash; with a named ProAdvisor leading and a documented cadence." },
    { num: "Phase 4", name: "Run, report &amp; review", body: "Each month the function runs on calendar: books current, period closed, statements delivered with commentary, CPA coordinated. Add <a href=\"/accounting/advisory/?intent=advisory\">advisory</a> or <a href=\"/accounting/services/controller-services/\">controller</a> oversight as the business grows." },
  ],
  // "What the managed function covers — and what stays with your CPA." — 3 scope cards (stack-8). h3s VERBATIM per contract.
  scope: [
    { name: "We run", body: "The full operational accounting function: recurring bookkeeping, reconciliation, month-end close, financial statement preparation, payroll and sales-tax coordination, reporting, and optional controller oversight. Delivered in your own QuickBooks file, CPA-ready, on a fixed monthly fee." },
    { name: "We don&rsquo;t", body: "File income tax returns or represent before the IRS. Provide tax-position or legal advice. Perform <strong>audit, review, or compilation</strong> &mdash; licensed CPA engagements. We&rsquo;re a QuickBooks ProAdvisor firm running your accounting operation, not a tax or assurance practice." },
    { name: "We coordinate with", body: "Your CPA or EA, who files from the CPA-ready books we deliver. Your payroll provider and sales-tax tools, which we reconcile into the function. Your lenders and board on the reporting they need. Licensed work stays with licensed professionals." },
  ],
  // FAQ — 6 contract Q/A, verbatim questions, answers preserved (append-only enrichment). Drives BOTH faq__list AND FAQPage schema (NO dedup).
  faq: [
    { q: "What is outsourced accounting?", a: "Outsourced accounting is delegating your operational accounting function to an external firm instead of building and managing it in-house. A full outsourced engagement covers recurring bookkeeping, the month-end close, account reconciliation, financial statement preparation, and coordination of payroll and sales tax &mdash; with optional controller oversight on top. The output is CPA-ready and handed to your tax professional for filing. You get a managed accounting department without hiring, training, or supervising one." },
    { q: "What&rsquo;s the difference between outsourced accounting and bookkeeping?", a: "Bookkeeping is one component &mdash; recording and reconciling transactions. Outsourced accounting is the whole function: bookkeeping plus the month-end close, financial statement preparation, reconciliation discipline, reporting, payroll and sales-tax coordination, and optional controller-level oversight. If you need transactions recorded, that&rsquo;s <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">bookkeeping</a>. If you need the entire accounting operation run for you &mdash; accurate, on time, CPA-ready, managed end to end &mdash; that&rsquo;s outsourced accounting." },
    { q: "Is outsourced accounting cheaper than hiring in-house?", a: "Almost always, for businesses below the size that justifies a full internal team. An in-house bookkeeper plus a part-time controller, with salary, benefits, payroll taxes, software, training, and management overhead, runs well into six figures &mdash; before accounting for turnover and the single-point-of-failure risk of one person holding all the knowledge. Outsourced accounting delivers the same function on a fixed monthly fee, with built-in continuity and no employment overhead. The crossover point where in-house wins is usually well up in the mid-market." },
    { q: "Does outsourced accounting include tax preparation?", a: "No. TechBrot delivers the operational accounting function and produces CPA-ready books and financial statements, then coordinates directly with your CPA or EA, who files the returns. We are an independent QuickBooks ProAdvisor firm, not a tax practice &mdash; we don&rsquo;t file returns, take tax positions, represent before the IRS, or perform audit, review, or compilation. Keeping bookkeeping and tax with separate specialists is a feature, not a gap: your books are managed by accounting specialists and filed by a licensed tax professional." },
    { q: "How does an outsourced accounting engagement work?", a: "It starts with a discovery call and an assessment of your current books. If the books need work, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> brings them to a reliable baseline first. Then the recurring function begins: transactions recorded and reconciled, the <a href=\"/accounting/month-end-close/\">month-end close</a> run on a published calendar, financial statements delivered monthly with commentary, and payroll and sales tax coordinated. A named ProAdvisor owns the relationship, the work is delivered in your own QuickBooks file, and everything is priced as a fixed monthly fee against written scope." },
    { q: "How much does outsourced accounting cost?", a: "Outsourced accounting is priced as a fixed monthly fee scaled to the volume and complexity of the work &mdash; transaction count, number of accounts and entities, payroll and sales-tax scope, reporting depth, and whether controller oversight is included. Core engagements generally run from around $400 to $2,500+ per month, with controller-inclusive engagements priced above that. Quoted against written scope after a discovery call; no hourly billing. To scope your function and get a quote, call a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>. See <a href=\"/pricing/\">pricing</a>." },
  ],
  // Old display 7th Q/A — preserved as body content (no gutting); NOT in the frozen-6 FAQPage schema array.
  faqExtra: [
    { q: "Do we keep our own QuickBooks file and access?", a: "Yes. The work is done in your own QuickBooks file, which you own and have full access to throughout &mdash; not a locked-down file you can only see through a portal. If the engagement ever ends, you keep the file, the history, and the structure. Your books are never held hostage." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row)
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Bookkeeping, close, reconciliation, statements, payroll/sales-tax coordination, optional controller &mdash; not tax filing, audit, or assurance" },
    { value: "Fixed-fee", label: "Written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // "Related services." — 4 related (stack-8 linked). h3s VERBATIM per contract.
  related: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "The recording layer at the core of the managed function &mdash; if that&rsquo;s all you need." },
    { title: "Controller services", href: "/accounting/services/controller-services/", body: "The oversight tier you can add on top of the outsourced function." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "Where a behind or broken set of books gets fixed before the function is handed over." },
    { title: "Advisory", href: "/accounting/advisory/?intent=advisory", body: "The judgment layer above the function &mdash; turning accurate books into decisions." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/services/outsourced-accounting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-outsourced-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Services","item":"https://techbrot.com/accounting/services/"},
          {"@type":"ListItem","position":4,"name":"Outsourced Accounting","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Outsourced Accounting Services","serviceType":"Outsourced accounting services","description":"A complete managed accounting function for U.S. businesses — recurring bookkeeping, month-end close, account reconciliation, financial statement preparation, payroll and sales-tax coordination, and optional controller oversight — delivered by Certified ProAdvisors on a fixed monthly fee. CPA-ready output coordinated with the client's tax professional. Does not include income-tax filing, IRS representation, audit, assurance, or legal advice.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses replacing or avoiding an internal accounting function"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Outsourced accounting deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What the managed accounting function covers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Outsourced accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
