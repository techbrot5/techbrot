/* /accounting/services/virtual-accounting/ — LIVE baseline services-catalog spoke
 * migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-virtual.txt — its TITLE,
 * META, 6 FAQ, and SCHEMA-TYPE set are virtual-accounting and are honored
 * verbatim. Its HEADING BLOCK is DEFECTIVE: it was extracted from the OLD
 * BODY of accounting/services/virtual-accounting/index.html, which contained
 * an E-COMMERCE INDUSTRY page body (wrong content pasted under the correct
 * virtual-accounting <head>). The e-commerce headings cannot be rendered
 * verbatim under a "Virtual Accounting Services" title without producing an
 * incoherent, dishonest page that violates T6 (REAL virtual-accounting
 * content) and the HONESTY rules. Per standing rule #7 (push back) / #6
 * (root-cause, no masking) this build uses REAL virtual-accounting headings
 * mapped 1:1 onto the proven cobalt section shape; the heading defect is
 * FLAGGED to the founder in the report. The 6 contract FAQ Q/A are
 * virtual-accounting and are used VERBATIM (no dedup). REFERENCE pattern:
 * src/quickbooks/online.njk + src/accounting/advisory/cash-flow-management.*
 * (proven t-mofu cobalt) for structure/schema/vocab. t-mofu, tierClass
 * section--tier-guide, bodyClass page--mofu, callBar true. CTA intent:
 * accounting (canonical lexicon). Footer chrome H2s + "The monthly brief."
 * NOT rendered here — base-layout chrome / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question to keep
 * the heading inventory clean. Honesty R5/R9: no fabricated stats/outcomes/
 * reviews; firm-level authorship; David Westgate in reviewedBy schema @id
 * only; independent firm, not affiliated with Intuit Inc. No <strong> in the
 * dark hero subheading (hero is paper-compact here; rule respected anyway). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Virtual accounting, plainly." — definition prose (real virtual-accounting; from contract A1 + old <head> service description, enriched).
  definition: [
    "Virtual accounting is accounting delivered <strong>entirely remotely through cloud software</strong>, rather than by an on-site or local bookkeeper. The work itself &mdash; <a href=\"/accounting/bookkeeping/\">bookkeeping</a>, the month-end close, reconciliation, financial statements &mdash; is the same; what&rsquo;s different is the delivery model. Everything runs in a cloud-based <a href=\"/quickbooks/online/\">QuickBooks Online</a> file both you and your accountant access in real time, with secure document exchange, scheduled video reviews, and digital communication replacing in-person handoffs.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> run the full accounting operation in your own cloud file &mdash; reconciliation, the monthly close, AR/AP, payroll coordination, and a financial package on a set cadence &mdash; with a named ProAdvisor wherever your business operates in the U.S. It is an <a href=\"/accounting/services/\">outsourced function delivered virtually</a>: accounting operations, not <a href=\"/accounting/advisory/\">external audit, assurance, or income-tax filing</a>, which we coordinate cleanly with your CPA or EA. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Virtual accounting, in five questions." — quick-answer (NON-heading questions; real virtual-accounting quick-5).
  aiSummary: [
    { q: "What is virtual accounting?", a: "Accounting delivered <strong>fully remotely</strong> through cloud software &mdash; bookkeeping, month-end close, reconciliation, and financial statements run in a cloud QuickBooks file both you and your accountant access in real time. Same work as on-site accounting; a different, location-independent delivery model." },
    { q: "How is it different from outsourced accounting?", a: "<strong>Outsourced</strong> describes <em>who</em> does the work (an external firm, not an internal hire). <strong>Virtual</strong> describes <em>how</em> it&rsquo;s delivered (cloud-based, fully remote, real-time shared access). TechBrot&rsquo;s accounting is both &mdash; an outsourced function delivered virtually." },
    { q: "Is it secure?", a: "A well-run virtual practice is typically <strong>more</strong> secure than shuttling paper or emailing spreadsheets. Data lives in cloud QuickBooks with bank-level encryption and logged, permission-based access; documents move through secure exchange, not email attachments &mdash; no box of records to lose." },
    { q: "Does location matter?", a: "No. Because the work is cloud-based and fully remote, a business in any U.S. state works with TechBrot the same way &mdash; no local bookkeeper required, no disadvantage to being outside a major metro. Where state-specific matters arise, such as <a href=\"/accounting/sales-tax-compliance/\">sales-tax nexus</a>, we coordinate accordingly." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee scaled to scope</strong> &mdash; volume and complexity, not location. Core engagements generally run from around $400 to $2,500+ per month, quoted against a written scope after a discovery call. No hourly billing. See <a href=\"/pricing/\">pricing</a>." },
  ],
  // "When a virtual model is the right fit." — 6 signals (buyer-card; real virtual-accounting).
  signals: [
    { opener: "You&rsquo;re a remote-first or distributed team.", body: "If your company already runs in the cloud, your accounting should too &mdash; one shared QuickBooks file, real-time access, no paper handoffs. A virtual model matches how you already operate." },
    { opener: "You can&rsquo;t find a qualified local accountant.", body: "Outside a major metro, the pool of credentialed accountants thins fast. Virtual delivery removes geography from the equation &mdash; you work with the right ProAdvisor regardless of where either party sits." },
    { opener: "You operate in multiple locations.", body: "Multi-location operations that would otherwise need bookkeeping in several places consolidate into one cloud file with one named ProAdvisor &mdash; consistent books across every site, not a patchwork." },
    { opener: "You&rsquo;re tired of dropping off paper.", body: "Bank statements, receipts, and bills move through secure document exchange instead of binders and email attachments. The monthly handoff becomes a non-event, handled in the file." },
    { opener: "You want to see your books, not wait for them.", body: "Real-time shared access means you can open the same file your accountant works in, any time &mdash; not wait for a month-end PDF. Scheduled video reviews replace the in-person sit-down." },
    { opener: "You&rsquo;re still on QuickBooks Desktop.", body: "If a desktop file is tethering your books to one machine, moving to a fully virtual model starts with a clean <a href=\"/quickbooks/migration/desktop-to-online/?intent=quickbooks-migration\">Desktop-to-Online migration</a> &mdash; handled as part of onboarding." },
  ],
  // "What virtual accounting actually delivers." — 6 deliverables (stack-8 + num; real virtual-accounting; drives ItemList + OfferCatalog).
  deliverables: [
    { num: "01", name: "Your own cloud QuickBooks file", body: "Accounting runs in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> file &mdash; not a shared agency ledger &mdash; with real-time access for both you and your ProAdvisor. You own the file; we work in it. Desktop files are migrated to Online as part of onboarding." },
    { num: "02", name: "Secure document exchange", body: "Statements, receipts, and bills move through encrypted, permission-based document exchange rather than email attachments. Access is logged and revocable &mdash; the weakest links of paper and inbox handoffs are removed by design." },
    { num: "03", name: "Monthly close &amp; reconciliation", body: "Real bank and credit-card reconciliation and a true month-end close, delivered in the cloud file on a set cadence &mdash; the same rigorous <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> work, performed remotely." },
    { num: "04", name: "Scheduled video reviews", body: "A regular video review with your named ProAdvisor walks the financials in plain language &mdash; what the numbers say and what to do about them &mdash; replacing the in-person sit-down without losing the conversation." },
    { num: "05", name: "A named ProAdvisor, anywhere", body: "One <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisor</a> who knows your file, reachable digitally, wherever your business operates in the U.S. &mdash; with platform-level continuity so file context is never held by one person alone." },
    { num: "06", name: "CPA-ready coordination", body: "Output is CPA-ready and coordinated with your tax professional at year-end. Virtual accounting covers accounting operations &mdash; not external audit, assurance, or income-tax filing, which stay with your CPA or EA." },
  ],
  // "Online vs on-site accounting." — honest head-to-head (vs-scroll + vs-table; NO collapse per T3).
  vsTable: [
    { cap: "Real-time access to your books", virtual: "yes", onsite: "month-end only", outsourcedPaper: "batch handoff" },
    { cap: "Works regardless of your location", virtual: "yes", onsite: "local only", outsourcedPaper: "ships paper" },
    { cap: "Documents move by secure exchange", virtual: "yes", onsite: "paper / binder", outsourcedPaper: "email attachments" },
    { cap: "You own the QuickBooks file", virtual: "yes", onsite: "usually", outsourcedPaper: "sometimes" },
    { cap: "Named ProAdvisor point of contact", virtual: "yes", onsite: "yes", outsourcedPaper: "varies" },
    { cap: "Scheduled video reviews", virtual: "yes", onsite: "in person", outsourcedPaper: "rare" },
    { cap: "No office records to lose", virtual: "yes", onsite: "no", outsourcedPaper: "no" },
    { cap: "Income-tax filing", virtual: "via your CPA", onsite: "via your CPA", outsourcedPaper: "via your CPA" },
  ],
  // "From first call to a file you trust." — 4-phase process (process-diagram; real virtual-accounting onboarding).
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to understand your business, where the books stand, and whether a fully virtual model fits. No pitch &mdash; just the right next step and a written fixed-fee scope within 3 business days." },
    { num: "Phase 2", name: "Cloud setup &amp; migration", body: "We set up or move you into a cloud QuickBooks Online file &mdash; including a clean <a href=\"/quickbooks/migration/desktop-to-online/?intent=quickbooks-migration\">Desktop-to-Online migration</a> if needed &mdash; with secure document exchange, bank feeds, and access configured for real-time shared work." },
    { num: "Phase 3", name: "Monthly operation", body: "Reconciliation, the month-end close, AR/AP, and payroll coordination run in your file each month, with documents flowing through secure exchange &mdash; the same accounting operation, delivered remotely." },
    { num: "Phase 4", name: "Reporting &amp; review", body: "A monthly financial package and a scheduled video review with your named ProAdvisor, with CPA-ready output coordinated to your tax professional at year-end." },
  ],
  // "Related services & industries." — 4 related (stack-8 linked).
  related: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The recurring close at the core of a virtual engagement &mdash; real reconciliation and a financial package delivered on schedule in your cloud file." },
    { title: "QuickBooks Online", href: "/quickbooks/online/?intent=quickbooks", body: "The cloud ledger every virtual engagement runs in &mdash; an honest read on the platform, the plan tiers, and the fit from an independent ProAdvisor." },
    { title: "Desktop-to-Online migration", href: "/quickbooks/migration/desktop-to-online/?intent=quickbooks-migration", body: "The first step in going fully virtual from a desktop file &mdash; migration with integrity verification and reconciliation, done as part of onboarding." },
    { title: "All accounting services", href: "/accounting/services/", body: "The full TechBrot service catalog &mdash; bookkeeping, payroll, sales tax, and advisory, every track fixed-fee with a written scope." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row).
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Cloud bookkeeping, close, reconciliation, reporting &mdash; not external audit, assurance, or income-tax filing" },
    { value: "Fixed-fee", label: "Written scope before work &middot; delivered in your own cloud QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 6 contract Q/A, VERBATIM questions + answers (virtual-accounting; no dedup, append-only).
  faq: [
    { q: "What is virtual accounting?", a: "Virtual accounting is accounting delivered entirely remotely through cloud software, rather than by an on-site or local bookkeeper. The work itself &mdash; bookkeeping, the month-end close, reconciliation, financial statements &mdash; is the same; what&rsquo;s different is the delivery model. Everything runs in a cloud-based QuickBooks file both you and your accountant access in real time, with secure document exchange, video reviews, and digital communication replacing in-person handoffs. It lets a business work with the right accounting team regardless of where either party is located." },
    { q: "What&rsquo;s the difference between virtual accounting and outsourced accounting?", a: "They describe two different things and usually overlap. Outsourced accounting refers to who does the work &mdash; an external firm rather than an internal hire &mdash; and to the scope of the function delivered. Virtual accounting refers to how the work is delivered &mdash; fully remote, cloud-based, with real-time shared access &mdash; rather than on-site or local. TechBrot&rsquo;s accounting is both: an outsourced function delivered virtually. You can have one without the other, but for most modern businesses they come together." },
    { q: "Is virtual accounting secure?", a: "A well-run virtual practice is typically more secure than shuttling paper or emailing spreadsheets. Data lives in cloud QuickBooks with bank-level encryption and access controls; documents move through secure exchange rather than email attachments; access is permission-based and logged; and there&rsquo;s no box of records in an office to lose or a laptop to be stolen with everything on it. Security depends on the practices used, not on whether the work is remote &mdash; and remote, done right, removes several of the weakest links." },
    { q: "Can virtual accounting work for any location?", a: "Yes. Because the work is cloud-based and fully remote, a business in any U.S. state can work with TechBrot the same way &mdash; there&rsquo;s no need for a local bookkeeper, and no disadvantage to being outside a major metro. This is especially valuable for remote-first companies, multi-location operations that would otherwise need bookkeeping in several places, and owners in areas with few qualified local accountants. Where state-specific matters arise, such as sales-tax nexus, we coordinate accordingly." },
    { q: "What software does virtual accounting use?", a: "TechBrot delivers virtual accounting in QuickBooks Online as the core ledger, with a connected stack around it &mdash; secure document exchange, bank and credit card feeds, receipt capture, bill-pay and payroll integrations, and reporting tools &mdash; all cloud-based and accessible to both you and your ProAdvisor in real time. Businesses on QuickBooks Desktop that want to move to a fully virtual model are migrated to QuickBooks Online as part of onboarding." },
    { q: "How much does virtual accounting cost?", a: "Virtual accounting is priced as a fixed monthly fee scaled to the volume and complexity of the work, the same way TechBrot prices its other recurring engagements &mdash; core engagements generally run from around $400 to $2,500+ per month. The delivery model is virtual; the pricing follows scope, not location. Quoted against written scope after a discovery call; no hourly billing." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/services/virtual-accounting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-virtual-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Services","item":"https://techbrot.com/accounting/services/"},
          {"@type":"ListItem","position":4,"name":"Virtual Accounting","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Virtual Accounting Services","serviceType":"Virtual accounting services","description":"Cloud-based, fully remote accounting for U.S. businesses — bookkeeping, month-end close, reconciliation, and financial reporting delivered in the client's own cloud QuickBooks file with real-time shared access, secure document exchange, scheduled video reviews, and a named Certified ProAdvisor, available regardless of business location. Output is CPA-ready and coordinated with the client's tax professional. Does not include income-tax filing, IRS representation, audit, assurance, or legal advice.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. remote-first, multi-location, and location-independent businesses and owners"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Virtual accounting deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What virtual accounting delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Virtual accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
