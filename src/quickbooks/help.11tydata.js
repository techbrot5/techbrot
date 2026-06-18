/* /quickbooks/help/ (round-17 elevation). Sources: baseline.json (49 headings,
 * 8 FAQ — all unique) + quickbooks/help/index.html (full copy). t-mofu support
 * hub. Citable: THE DIAGNOSTIC TRIAGE MODEL — route the visitor to the right
 * engagement by SYMPTOM (8 situations) and URGENCY (broken-now / this-month /
 * researching), with an honest scope each. Sheet-7 honest-triage: disclosure
 * above the fold, never "official", Intuit software-level issues routed to
 * Intuit; nothing implies affiliation. quick-5 additive, zero overlap with FAQ.
 * CTA: MOFU — PRIMARY "Get the free file review"; emergency phone kept in the
 * urgency-tier content, NOT the hero. Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what kind / how fast / vs Intuit support / errors+corruption / cost / versions / Desktop sunset / affiliated)
  aiSummary: [
    { q: "How do I know which engagement I actually need?", a: "<strong>The diagnostic triage model</strong> routes you by symptom and urgency: a file that won’t open → emergency diagnostic; books behind → cleanup; wrong withholding → payroll review; still on Desktop → migration; new business → setup; need a monthly bookkeeper → recurring; multi-state sales tax → compliance. Not sure? A free discovery call surfaces it." },
    { q: "What can a ProAdvisor fix that Intuit support can’t?", a: "Simple test: <strong>“Can’t log in” → Intuit. “My books are wrong” → ProAdvisor.</strong> We handle the operational accounting inside QuickBooks — chart of accounts, reconciliation, payroll config, sales tax, migration, file repair. Intuit handles software-level login, billing, and bugs." },
    { q: "Do you work inside my own QuickBooks file?", a: "Yes. We access as <strong>accountant-users inside your own file</strong> — you keep your data, the audit trail is visible to you at any time, and we never operate in a parallel system or require a data export. Books stay your books." },
    { q: "What happens on an emergency, same-day?", a: "For active emergencies in business hours (file corruption, payroll-day failures, year-end deadlines) a ProAdvisor runs a <strong>same-day diagnostic</strong> over encrypted screen share — File Doctor or manual rebuild, backup restore if needed. Same-day <em>resolution</em> depends on the situation; the call tells you what’s fixable on what timeline." },
    { q: "Is the discovery call really free, and is there a catch?", a: "Free, 30 minutes, no obligation. The ProAdvisor surfaces the actual issue and recommends the right engagement &mdash; <strong>or tells you it isn’t the right fit, honestly.</strong> A written fixed-fee scope follows within 3 business days if you proceed." },
  ],
  // "What kind of QuickBooks help do you actually need?" — 8 symptom→route cards (the triage model)
  triage: [
    { opener: "“My QuickBooks file won’t open. Errors everywhere.”", body: "<strong>File corruption / error codes</strong> (6000-series, 6190, -83, multi-user network errors). Emergency diagnostic over encrypted screen share — File Doctor or manual rebuild, clean-backup restore if needed. <strong>Typically $500–$2,500.</strong>", cta: "QuickBooks file cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup" },
    { opener: "“My books haven’t been reconciled in months.”", body: "<strong>Cleanup engagement.</strong> Structural issues, unreconciled accounts, miscategorized transactions, a year-end deadline approaching. Fixed-fee project; books CPA-ready at completion. <strong>Typically $1,500–$15,000+.</strong>", cta: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup" },
    { opener: "“Payroll is withholding the wrong amounts.”", body: "<strong>Payroll configuration error</strong> — state tables not updated, multi-state employee setup wrong, or local jurisdiction tax (Indiana CAGIT/COIT, Ohio RITA, NYC) misconfigured. Audit, exposure check, correction. <strong>Typically $750–$3,000.</strong>", cta: "Payroll management", href: "/accounting/payroll-management/?intent=payroll" },
    { opener: "“We’re still on QuickBooks Desktop.”", body: "<strong>Migration engagement.</strong> Intuit is sunsetting Desktop; staying means losing payroll, payments, and security updates. Desktop → Online or Enterprise, data + integrations + payroll migrated cleanly. <strong>Typically $2,500–$10,000+.</strong>", cta: "QuickBooks migration", href: "/quickbooks/migration/?intent=quickbooks-migration" },
    { opener: "“Starting a new business. Need QuickBooks set up right.”", body: "<strong>Setup engagement.</strong> Chart of accounts for your industry, opening balances, sales tax, integrations, training. Foundation work that prevents a cleanup in year two. <strong>Typically $750–$5,000.</strong>", cta: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup" },
    { opener: "“I need a reliable monthly bookkeeper.”", body: "<strong>Recurring engagement.</strong> No current bookkeeper, or the current one isn’t delivering a reliable monthly close. Named ProAdvisor, CPA-ready monthly statements. <strong>Typically $400–$2,500+/month.</strong>", cta: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly" },
    { opener: "“Sales tax is multi-state and complicated.”", body: "<strong>Post-Wayfair nexus exposure.</strong> Selling into states where you may have economic nexus but haven’t registered or configured QuickBooks correctly. Nexus review first, then ongoing compliance. <strong>$500–$3,000 review + $250–$1,500+/mo.</strong>", cta: "Sales tax compliance", href: "/accounting/sales-tax-compliance/?intent=sales-tax" },
    { opener: "“Not sure what I actually need.”", body: "<strong>Diagnostic-call territory.</strong> Most people know something’s wrong but not which engagement fits — that’s the call’s job. The ProAdvisor surfaces the real issue and recommends the right path, or says “not the right fit.” <strong>Free.</strong>", cta: "Book a discovery call", href: "/contact/?intent=qb-help" },
  ],
  // "How fast can we help?" — urgency tiers (part of the triage model)
  urgency: [
    { name: "Books broken right now.", who: "File corruption, payroll-day failures, year-end deadlines under 72 hours, IRS/state notices arriving today.", path: "Call +1 (877) 751-5575 — a ProAdvisor picks up.", tel: true, scope: "Same-day diagnostic, yes. Same-day resolution depends on the situation — some fixes take days. The call surfaces what’s actually fixable on what timeline." },
    { name: "Need to engage this month.", who: "Cleanup, a monthly-bookkeeping search, planned setup or migration, a payroll transition. Not on fire, but ready.", path: "Send the discovery brief — response within 1 business day.", tel: false, scope: "This is what we’re built for. Most engagements start here." },
    { name: "Researching for the future.", who: "Migration 60+ days out, evaluating options, comparing TechBrot, capital-event preparation.", path: "Send a brief or book directly.", tel: false, scope: "Calm research conversations welcomed. No follow-up sequence." },
  ],
  // "The QuickBooks problems most U.S. businesses run into." — 6 common problems
  problems: [
    { name: "Bank feeds stop syncing.", body: "Bank or credit-card feeds disconnect, leaving weeks or months of transactions un-imported. Common with QB Desktop on multi-user. Fix requires manual reconciliation of the gap plus root-cause configuration." },
    { name: "Reconciliation discrepancies that won’t resolve.", body: "A stubborn variance previous bookkeepers couldn’t locate — typically deleted-then-restored transactions, duplicate entries, or beginning-balance errors traceable to QuickBooks setup." },
    { name: "Multi-state payroll tax configured wrong.", body: "An employee residing in one state and working in another, or county-level taxes (Indiana CAGIT/COIT, Ohio RITA) misconfigured. Often undetected for 6–18 months until a state notice arrives." },
    { name: "Sales tax not tracking by state.", body: "QuickBooks shows total sales tax collected but can’t produce the state-by-state reports needed for multi-state filings. A configuration issue from initial setup — fix it once or live with manual prep every period." },
    { name: "Chart of accounts is unworkable.", body: "Too many sub-accounts, no logical hierarchy, expenses grouped in ways that don’t produce useful reports. Typically QuickBooks set up by someone without industry-specific knowledge." },
    { name: "Job costing showing wrong numbers.", body: "Manufacturers, construction contractors, and project-based services see unreliable margins. Almost always a setup issue — items, classes, and project structures weren’t aligned at the start." },
  ],
  // "All QuickBooks help, routed properly." — 6 service routes
  services: [
    { num: "Engagement 01", name: "QuickBooks Setup", body: "Professional implementation — chart of accounts designed for your industry, opening balances, integrations, sales tax, training.", fee: "$750–$5,000+", eng: "One-time, 2–4 weeks", href: "/quickbooks/setup/?intent=quickbooks-setup" },
    { num: "Engagement 02", name: "QuickBooks Cleanup", body: "Files with structural issues — unreconciled accounts, miscategorized transactions, chart-of-accounts problems. Fixed-fee project.", fee: "$1,200–$12,000+", eng: "One-time, 1–4 weeks", href: "/quickbooks/cleanup/?intent=qb-cleanup" },
    { num: "Engagement 03", name: "QuickBooks Migration", body: "Desktop → Online migration before Intuit’s sunset, or a platform switch (Wave/Xero/Bench → QuickBooks). Data, integrations, payroll all migrate.", fee: "$2,500–$10,000+", eng: "One-time, 3–8 weeks", href: "/quickbooks/migration/?intent=quickbooks-migration" },
    { num: "Engagement 04", name: "Monthly Bookkeeping", body: "Recurring fixed-fee monthly close inside your file — reconciliation, categorization, statements, CPA handoff. Named ProAdvisor.", fee: "$400–$2,500+/mo", eng: "Recurring monthly", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly" },
    { num: "Engagement 05", name: "Payroll Management", body: "Multi-state payroll with QuickBooks Payroll — state/local tax configuration, multi-state employees, quarterly filings, year-end W-2/1099.", fee: "$150–$800+/mo", eng: "Recurring monthly", href: "/accounting/payroll-management/?intent=payroll" },
    { num: "Engagement 06", name: "Sales Tax Compliance", body: "Multi-state nexus analysis, exemption-certificate management, monthly filings, audit support. QuickBooks-integrated.", fee: "$250–$1,500+/mo", eng: "Recurring + setup", href: "/accounting/sales-tax-compliance/?intent=sales-tax" },
  ],
  // "What QuickBooks help typically costs." — 3 cost shapes
  costs: [
    { name: "Emergency fix", forWhom: "File corruption, error resolution, payroll-day failures, year-end emergency cleanup.", bullets: ["Same-day diagnostic call", "Encrypted screen-share work session", "File Doctor or manual rebuild", "Backup restoration if needed", "Post-fix documentation"], cta: "Speak to a ProAdvisor" },
    { name: "Project engagement", forWhom: "Cleanup, setup, migration. One-time defined-scope work delivered in weeks, not months.", bullets: ["Discovery call & written scope", "Fixed fee, no hourly billing", "Named ProAdvisor ownership", "Defined start and completion dates", "Written summary at completion", "30-day post-engagement support"], cta: "Book the discovery call" },
    { name: "Recurring engagement", forWhom: "Monthly bookkeeping, ongoing payroll, multi-state sales tax compliance, ongoing QuickBooks support.", bullets: ["Fixed monthly fee", "Same-shape monthly deliverables", "Named ProAdvisor continuity", "Year-end CPA handoff included", "No long-term contract lock-in", "Scope reviewed quarterly"], cta: "Book the discovery call" },
  ],
  reviewSpec: [
    { value: "Certifications", label: "Certified Intuit ProAdvisor — QBO L2, Desktop, Enterprise, Payroll · verifiable on Intuit’s directory" },
    { value: "Scope", label: "Operational QuickBooks help inside the software — not Intuit’s login/billing/software support" },
    { value: "Engagement", label: "Fixed-fee, written scope · same-day diagnostic for emergencies · 30-min discovery call free" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with, endorsed by, or sponsored by Intuit Inc." },
  ],
  related: [
    { title: "QuickBooks Support Hub", href: "/quickbooks/support/", body: "Symptom-by-symptom QuickBooks help with the honest split — what an independent ProAdvisor fixes inside your file versus what belongs with Intuit. Error codes, file problems, payroll, and the “how to contact QuickBooks support” guide." },
    { title: "QuickBooks Error Codes", href: "/quickbooks/help/error-codes/", body: "The full Certified-ProAdvisor error-code reference — H-series, 6000-series, 12000/15000-series, PS payroll, and more, each with causes, a self-fix, and when to call." },
    { title: "Speak to a QuickBooks Expert", href: "/contact/?intent=qb-help", body: "Book a free 30-minute discovery call — a Certified ProAdvisor surfaces the issue and recommends the right engagement, or says it isn’t the right fit." },
    { title: "The ProAdvisor Team", href: "/about/?intent=techbrot-fit", body: "Who delivers the work — the Certified QuickBooks ProAdvisor team and how the firm operates." },
    { title: "QuickBooks Services Hub", href: "/quickbooks/?intent=quickbooks", body: "The full ProAdvisor silo — every engagement type with scope and pricing." },
    { title: "Bookkeeper vs Accountant vs ProAdvisor", href: "/vs/bookkeeper-vs-accountant/", body: "Which role you actually need, and where a ProAdvisor fits among them." },
  ],
  faq: [
    { q: "What kind of QuickBooks help does TechBrot provide?", a: "Operational QuickBooks help delivered by Certified ProAdvisors: setup, cleanup, migration, payroll configuration, error resolution, file repair, multi-state tax setup, and ongoing monthly bookkeeping — the work that lives inside QuickBooks software. We don’t provide Intuit’s own software-level support; for login issues, billing, or software bugs, Intuit is the right path." },
    { q: "How quickly can I get QuickBooks help?", a: "Same-day diagnostic for active emergencies during business hours (file corruption, payroll-day failures, year-end pressure). 1 business day for active scoping. 3 business days for planning. Discovery calls are 30 minutes and free, with a written fixed-fee scope within 3 business days of the call." },
    { q: "What’s the difference between TechBrot’s QuickBooks help and Intuit’s own QuickBooks support?", a: "Intuit’s support handles software-level issues (login, billing, bugs). TechBrot’s ProAdvisor help handles operational accounting issues inside the software (chart of accounts, reconciliation, payroll, sales tax, migration). Simple test: “Can’t log in” → Intuit. “My books are wrong” → ProAdvisor." },
    { q: "Does TechBrot help with QuickBooks errors and file corruption?", a: "Yes. Desktop H-series and 6000-series errors, 6190 and -83 errors, multi-user network errors, file-size issues, and Online file lockouts. The fix runs over encrypted screen share — File Doctor or a manual rebuild, with a clean-backup restore if needed — typically a $500–$2,500 fixed-fee emergency engagement." },
    { q: "How much does QuickBooks help cost?", a: "The discovery call is free. Cleanup $1,200–$12,000+; setup $750–$5,000+; migration $2,500–$10,000+; monthly bookkeeping $400–$2,500+/month; payroll $150–$800+/month; sales tax $250–$1,500+/month. Every engagement is fixed-fee with a written scope before work begins — no hourly billing." },
    { q: "What QuickBooks versions does TechBrot support?", a: "All current versions: QuickBooks Online (all tiers), QuickBooks Desktop (Pro/Premier), QuickBooks Enterprise (all editions), and QuickBooks Payroll. Active Intuit ProAdvisor certifications across QBO Level 2, Desktop, Enterprise, and Payroll. Independent firm — not affiliated with Intuit Inc." },
    { q: "Can TechBrot help with my QuickBooks Desktop sunset migration?", a: "Yes — Desktop-to-Online (or Desktop-to-Enterprise) migration is one of our most common engagements. Intuit is sunsetting Desktop on a rolling timeline; we migrate data, integrations, payroll, and sales tax cleanly, with historical reconciliation and a verified file. Typically $2,500–$10,000+ depending on file complexity." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work in QuickBooks daily, but we are not owned, employed, endorsed, or sponsored by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#help-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks help by Certified ProAdvisors","serviceType":"Operational QuickBooks help — setup, cleanup, migration, payroll, error resolution","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks help engagements","itemListElement":data.services.map(function(s){return {"@type":"Offer","name":stripTags(s.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(s.fee)+" · "+stripTags(s.eng)},"availability":"https://schema.org/InStock"};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
