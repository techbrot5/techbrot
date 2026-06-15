/* /accounting/services/controller-services/ — LIVE baseline accounting service
 * child migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-controller.txt (44 headings,
 * 6 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/services/controller-services/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure/schema; src/accounting/advisory/cash-flow-management.njk +
 * .11tydata.js (just-built clean t-mofu child) copied for vocabulary + full
 * schema node set; src/accounting/services.njk (services hub) +
 * src/accounting/advisory/fractional-cfo.njk for service vocabulary/intent.
 * t-mofu, tierClass section--tier-guide, bodyClass page--mofu. CTA intent:
 * accounting (canonical lexicon, matches services hub). Footer chrome H2s
 * (Accounting/QuickBooks/Company/Network) + "The monthly brief." NOT rendered
 * here — base-layout chrome / dropped per protocol T2. The 5 quick-answer
 * questions render as NON-heading ai-summary__question (the baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact. FAQ: 6
 * contract Q/A verbatim, answers preserved (append-only enrichment); NO dedup.
 * The old 7th baseline Q ("Can the controller supervise our existing
 * bookkeeper?") is NOT in the contract FAQ — preserved as section prose
 * (acct-controller-supervise) to satisfy no-gutting, not in the FAQ array.
 * Honesty R5/R9: no fabricated stats/outcomes/reviews; David Westgate in
 * reviewedBy schema @id only; firm-level authorship; independent firm, not
 * affiliated with Intuit Inc. No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Controller services, plainly." — definition prose (from old TL;DR body; no <strong> rule applies to dark hero only)
  definition: [
    "A <strong>controller</strong> owns the accuracy, timeliness, and integrity of a company&rsquo;s financial records. The role manages the <a href=\"/accounting/month-end-close/\">month-end close</a>, oversees <a href=\"/accounting/financial-statements/\">financial statement</a> preparation, designs and operates <strong>internal controls</strong>, supervises the bookkeeping function, owns the reporting calendar, and ensures the numbers are right before they reach leadership, the board, or the CPA.",
    "It&rsquo;s the rung most growth-stage businesses skip: the <a href=\"/accounting/bookkeeping/\">bookkeeper</a> records transactions, the <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">CFO</a> sets strategy, and in between sits the person accountable for the books being <em>correct and on time</em>. TechBrot delivers <strong>outsourced controller services</strong> through Certified ProAdvisors on a fixed monthly retainer &mdash; a tier above <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, a tier below fractional CFO &mdash; usually running alongside bookkeeping we also operate, so the controller is supervising a function we own end to end. Operational oversight only; tax filing, audit, and IRS representation stay with your CPA. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Controller services, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "What does a controller do?", a: "Owns the <strong>accuracy, timeliness, and integrity</strong> of the financial records &mdash; manages the close, oversees statement preparation, designs and operates internal controls, supervises bookkeeping, and ensures the numbers are right before they reach leadership, the board, or the CPA." },
    { q: "Bookkeeper vs controller vs CFO?", a: "A <strong>bookkeeper</strong> records and reconciles. A <strong>controller</strong> manages and verifies the accounting function. A <strong>CFO</strong> sets strategy. A ladder: bookkeeper produces the data, controller guarantees it&rsquo;s accurate and timely, CFO interprets and drives strategy." },
    { q: "When does a business need one?", a: "When bookkeeping is done but <strong>no one owns whether it&rsquo;s accurate and on time</strong> &mdash; slow close, late-surfacing errors, no internal controls, junior staff or multiple vendors needing supervision, outgrown a bookkeeper but not ready for a CFO." },
    { q: "Outsourced vs full-time controller?", a: "Identical function, different model. Full-time: <strong>$90K&ndash;$160K+</strong> fully loaded. Outsourced/fractional: same oversight on a <strong>fixed monthly retainer</strong>, scaled to the hours the business actually needs." },
    { q: "Does it replace my bookkeeper or CPA?", a: "No. The controller sits <strong>above the bookkeeper and beside the CPA</strong> &mdash; supervises and verifies bookkeeping, produces CPA-ready books, coordinates on filing. Does not file taxes, represent before the IRS, or perform audit/assurance." },
  ],
  // "Bookkeeper, controller, CFO — three roles, one ladder." — 3 ladder rungs (stack-8 + num)
  ladder: [
    { num: "01", name: "Bookkeeper &mdash; records the data", body: "Categorizes transactions, reconciles accounts, captures receipts, produces the raw monthly numbers. The operational foundation. Answers: <em>is it recorded?</em> Delivered through <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>." },
    { num: "02", name: "Controller &mdash; guarantees it&rsquo;s right", body: "Manages the close, verifies statements, designs controls, supervises the bookkeeping, owns the calendar. The accountability layer. Answers: <em>is it accurate, complete, and on time?</em>" },
    { num: "03", name: "CFO &mdash; decides what it means", body: "Forecasting, board reporting, fundraising, capital allocation, strategic decisions. The judgment layer. Answers: <em>what do we do about it?</em> Delivered through <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO</a>." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signals (buyer-card)
  signals: [
    { opener: "Your close is slow or unpredictable.", body: "If you don&rsquo;t know when statements will land each month &mdash; or they&rsquo;re weeks late &mdash; no one owns the close. A controller puts it on a calendar and holds it." },
    { opener: "Errors surface after the books are &ldquo;done.&rdquo;", body: "If mistakes keep appearing in finished statements, there&rsquo;s no review layer between the bookkeeper and you. The controller is that review." },
    { opener: "You&rsquo;re the only check on the numbers.", body: "When the owner is the sole control &mdash; the only one approving, reviewing, catching &mdash; the business has a single point of failure and no real internal controls. That&rsquo;s a risk a controller closes." },
    { opener: "Bookkeeping is split across people or vendors.", body: "Junior staff, a part-time bookkeeper, plus a payroll vendor and a sales-tax vendor &mdash; with no one coordinating. A controller supervises the whole function so it works as one system." },
    { opener: "You&rsquo;ve outgrown a bookkeeper but a CFO is overkill.", body: "Plenty of businesses need rigorous oversight and reliable reporting without strategic finance leadership yet. The controller is exactly that middle tier." },
    { opener: "A board, lender, or CPA needs reporting they can trust.", body: "External parties need accurate statements on a reliable schedule. A controller owns that output and stands behind it &mdash; so it holds up to scrutiny." },
  ],
  // "What controller services actually deliver." — 6 deliverables (stack-8 + num) — drives ItemList + OfferCatalog
  deliverables: [
    { num: "01", name: "Close management", body: "Owning the <a href=\"/accounting/month-end-close/\">month-end close</a> on a published calendar &mdash; reconciliations verified, accruals posted, the period locked on time, every month." },
    { num: "02", name: "Financial statement oversight", body: "Reviewing the P&amp;L, balance sheet, and cash flow for accuracy and reasonableness before they ship &mdash; catching errors the bookkeeping process misses." },
    { num: "03", name: "Internal controls", body: "Designing and operating controls appropriate to your size &mdash; approval workflows, segregation of duties, spend authorization, reconciliation review &mdash; so the books aren&rsquo;t protected by one person&rsquo;s memory." },
    { num: "04", name: "Bookkeeping supervision", body: "Supervising the bookkeeping function &mdash; whether TechBrot&rsquo;s, your internal staff, or a mix &mdash; so the people recording transactions have someone reviewing and directing the work." },
    { num: "05", name: "Reporting calendar &amp; package", body: "Owning a reliable reporting calendar and the monthly package that goes to leadership, the board, or lenders &mdash; consistent format, on schedule, defensible." },
    { num: "06", name: "CPA &amp; vendor coordination", body: "Coordinating with your CPA on year-end and tax, and with payroll, sales-tax, and other vendors &mdash; so the whole finance function is managed, not just the parts." },
  ],
  // "From assessment to owned accountability." — 4-phase process (process-diagram)
  process: [
    { num: "Phase 1", name: "Assessment", body: "A 30-minute call to understand your current finance function, who does what, where the gaps and risks are, and what reporting you actually need. No pitch." },
    { num: "Phase 2", name: "Stabilize the foundation", body: "If the books need it, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> first &mdash; a controller can&rsquo;t guarantee accuracy on an unreliable base. We get to a known-good starting point." },
    { num: "Phase 3", name: "Install the operating system", body: "Close calendar, control workflows, review checkpoints, reporting package and cadence &mdash; the structure that makes the function run reliably, documented and owned." },
    { num: "Phase 4", name: "Run &amp; oversee", body: "Each month the close is managed, statements reviewed, controls operated, the package delivered, and the CPA coordinated &mdash; with a named controller accountable for all of it." },
  ],
  // "What a controller is, isn’t, and coordinates with." — 3 scope cards (stack-8)
  scope: [
    { name: "A controller is", body: "Accountable for accurate, timely, complete books. Manages the close, reviews statements, designs and operates internal controls, supervises bookkeeping, owns the reporting calendar and package, and coordinates the finance function end to end. The oversight layer between bookkeeping and strategy." },
    { name: "A controller isn&rsquo;t", body: "A <strong>tax preparer</strong> &mdash; your CPA files. An <strong>auditor</strong> &mdash; audit and compilation are licensed CPA engagements. A <strong>CFO</strong> &mdash; strategy, fundraising, and board leadership are a <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">separate tier</a>. A <strong>bookkeeper</strong> &mdash; the controller oversees that work rather than doing all of it." },
    { name: "A controller coordinates with", body: "Your CPA or EA on year-end and tax. Your bookkeeping team (TechBrot&rsquo;s or internal). Your payroll and sales-tax providers. Your fractional CFO, if you have one. Your board and lenders on reporting. The role connects the function; it doesn&rsquo;t do every job in it." },
  ],
  // "Related services." — 4 related (stack-8 linked)
  related: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The layer below &mdash; the recording function a controller supervises." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "The layer above &mdash; strategic finance built on the accurate books a controller guarantees." },
    { title: "Month-end close", href: "/accounting/month-end-close/", body: "The core discipline a controller manages and owns." },
    { title: "Financial statements", href: "/accounting/financial-statements/", body: "The output a controller reviews and stands behind every month." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row)
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Close management, statement oversight, internal controls, bookkeeping supervision, reporting, CPA coordination &mdash; not tax filing, audit, or assurance" },
    { value: "Fixed-fee", label: "Fixed monthly retainer, written scope before work &middot; typically runs alongside TechBrot bookkeeping" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 6 contract Q/A, verbatim questions, answers preserved (append-only enrichment). NO dedup; all 6 are distinct.
  faq: [
    { q: "What does a controller do?", a: "A controller owns the accuracy, timeliness, and integrity of a company&rsquo;s financial records. The role manages the month-end close, oversees financial statement preparation, designs and operates internal controls, supervises bookkeeping staff or vendors, owns the reporting calendar, and ensures the numbers are right before they reach leadership, the board, or the CPA. Where a bookkeeper records transactions and a CFO sets strategy, the controller is accountable for the books being correct and on time." },
    { q: "What&rsquo;s the difference between a bookkeeper, a controller, and a CFO?", a: "A bookkeeper records and reconciles transactions &mdash; the operational layer. A controller manages and verifies the accounting function &mdash; owning the close, statement accuracy, and internal controls. A CFO sets financial strategy &mdash; forecasting, fundraising, board reporting, capital decisions. They form a ladder: the bookkeeper produces the data, the controller guarantees it&rsquo;s accurate and timely, the CFO interprets it and drives strategy. Smaller businesses often need only a bookkeeper; growth-stage businesses add a controller; complex or capital-raising businesses add a CFO on top." },
    { q: "When does a business need a controller?", a: "When the bookkeeping is being done but no one owns whether it&rsquo;s accurate and on time. Common triggers: the close is slow or unpredictable; financial statements have errors that surface late; there are no internal controls and the owner is the only check; bookkeeping is handled by junior staff or multiple vendors who need supervision; the business has outgrown a bookkeeper but isn&rsquo;t ready for a full-time CFO; or a board, lender, or CPA needs reporting they can rely on. A controller is the missing accountability layer." },
    { q: "What&rsquo;s the difference between a controller and an outsourced controller?", a: "The function is identical; the employment model differs. A full-time controller is an in-house hire &mdash; typically $90,000 to $160,000+ fully loaded at growth stage. An outsourced or fractional controller delivers the same oversight &mdash; close management, statement accuracy, internal controls, reporting &mdash; on a fixed monthly retainer, scaled to the hours the business actually needs. Most businesses between a bookkeeper and a full-time finance team need controller-level oversight but not a full-time controller&rsquo;s salary." },
    { q: "Does a controller replace my bookkeeper or my CPA?", a: "No. A controller sits above the bookkeeper and beside the CPA. The bookkeeper still records transactions; the controller supervises and verifies that work and owns the close. The CPA still files taxes and performs any audit or compilation; the controller produces the accurate, CPA-ready books they work from and coordinates with them. TechBrot controller services do not include tax filing, IRS representation, audit, or assurance &mdash; those remain licensed CPA work." },
    { q: "How much do controller services cost?", a: "Outsourced controller services are priced as a fixed monthly retainer scaled to the size of the business, the volume and complexity of the accounting, and the depth of oversight required &mdash; typically a tier above monthly bookkeeping and a tier below fractional CFO. Engagements usually run alongside TechBrot bookkeeping underneath, so the controller is supervising a function we also operate. Quoted against written scope; no hourly billing." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/services/controller-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-controller-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Services","item":"https://techbrot.com/accounting/services/"},
          {"@type":"ListItem","position":4,"name":"Controller Services","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Outsourced Controller Services","serviceType":"Outsourced controller services","description":"Fractional and outsourced controller services for U.S. growth-stage businesses — managing the month-end close, overseeing financial statement preparation and accuracy, designing and operating internal controls, supervising the bookkeeping function, owning the reporting calendar, and coordinating with the CPA. Delivered by Certified ProAdvisors on a fixed monthly retainer. Does not include income-tax filing, IRS representation, audit, assurance, or legal advice.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. growth-stage small and mid-sized businesses with active bookkeeping needing oversight and reporting accuracy"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Controller services deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What controller services deliver","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Controller services — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
