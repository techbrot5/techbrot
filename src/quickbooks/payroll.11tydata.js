/* /quickbooks/payroll/ (round-17 elevation). Sources: baseline.json (33
 * headings, 7 FAQ — all unique) + quickbooks/payroll/index.html (full copy).
 * t-bofu. Citable: QB-SPECIFIC PAYROLL — QuickBooks Payroll files exactly what
 * it's configured to file, so the ProAdvisor value is the part it WON'T do on
 * its own: work-vs-residence state, reciprocity, and local jurisdiction tax
 * (Indiana CAGIT/COIT, Ohio RITA/CCA, Pennsylvania local PSD, NYC/Yonkers). Plans
 * Core/Premium/Elite (+ Desktop Payroll). Engagements $750–$4,000 one-time;
 * managed $150–$800+/mo. quick-5 additive, zero overlap with FAQ. CTA:
 * QB-specific BOFU — phone tertiary OK. Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  multistate: {
    body: "<strong>QuickBooks Payroll files exactly what it&rsquo;s configured to file</strong> — which means a configuration error becomes a filing error becomes a state notice. The failures cluster in three predictable places, and none of them is a software bug: <strong>work state vs. residence state</strong> (QuickBooks doesn&rsquo;t infer it — set it wrong and withholding is wrong from day one), <strong>reciprocity agreements</strong> (un-applied where they exist = double-withholding; wrongly assumed where they don&rsquo;t = under-withholding), and <strong>local jurisdiction tax</strong> — the deepest trap: Indiana CAGIT/COIT (by January-1 county of residence), Ohio RITA/CCA municipal tax, Pennsylvania local EIT by PSD code, NYC and Yonkers resident taxes. QuickBooks <em>supports</em> these, but only a human configures them correctly. That&rsquo;s the ProAdvisor line.",
  },
  // quick-5 — distinct from FAQ (plans / can-set-up / why-wrong-tax / multi-state-handling / switch / file-taxes / affiliated)
  aiSummary: [
    { q: "What does QuickBooks Payroll NOT handle on its own?", a: "It automates filing, but only on how it&rsquo;s configured. It <strong>won&rsquo;t infer</strong> an employee&rsquo;s work-vs-residence state, apply reciprocity, or set up local jurisdiction taxes — that configuration is the ProAdvisor&rsquo;s job, and it&rsquo;s the single most common thing left undone." },
    { q: "Which local taxes get missed most often?", a: "The deepest trap: <strong>Indiana county tax (CAGIT/COIT)</strong> keyed to January-1 residence, <strong>Ohio municipal tax (RITA/CCA)</strong>, <strong>Pennsylvania local EIT</strong> by PSD code, and <strong>NYC / Yonkers</strong> resident taxes. QuickBooks supports them all — they just have to be configured, and usually aren&rsquo;t." },
    { q: "Do you configure inside my own QuickBooks Payroll?", a: "Yes. A Certified Payroll ProAdvisor configures <strong>your own QuickBooks Payroll subscription</strong> as an authorized accountant-user — company/employee records, registrations, local tax, pay schedules, direct deposit. Your data stays yours." },
    { q: "A state payroll notice already arrived — now what?", a: "That&rsquo;s a <strong>payroll error-correction engagement</strong>: the ProAdvisor audits the configuration, quantifies the historical exposure, prepares correction documentation (including W-2c or corrected 1099s if needed), and fixes the config so it doesn&rsquo;t recur. Typically $750–$3,000." },
    { q: "Do I need a one-time setup or ongoing payroll?", a: "Setup, migration, and error correction are <strong>one-time fixed-fee projects</strong> ($750–$4,000). If you&rsquo;d rather not run payroll yourself at all, <strong>ongoing managed payroll</strong> ($150–$800+/mo) processes every cycle, files multi-state, and handles year-end — see payroll management." },
  ],
  // "QuickBooks Payroll plans, without the sales pitch." — Core/Premium/Elite
  plans: [
    { name: "Core", price: "Right when: one state, simple deductions, no HR or time-tracking needs.", bullets: ["Full-service payroll & direct deposit", "Automated federal & state tax filing", "Auto payroll for salaried teams", "1099 e-file for contractors", "Next-day direct deposit"], note: "" },
    { name: "Premium", price: "Right when: multi-state employees, time tracking matters, or you want HR support.", bullets: ["Everything in Core", "Same-day direct deposit", "HR support center", "Workers’ comp administration", "Built-in time tracking", "Expert setup review"], note: "The common sweet spot" },
    { name: "Elite", price: "Right when: complex multi-state, project costing, or you want tax-penalty protection on filings.", bullets: ["Everything in Premium", "Tax penalty protection", "Personal HR advisor", "Project-level time tracking", "Priority support"], note: "" },
  ],
  // "Four ways a Payroll ProAdvisor helps."
  ways: [
    { num: "Engagement 01", name: "QuickBooks Payroll setup", body: "Fresh configuration: company & employee records, federal/state registration mapping, local jurisdiction tax, pay schedules, deductions, benefits, direct deposit, prior-payroll entry for mid-year starts.", fee: "$750–$3,000", eng: "One-time", href: "/contact/?intent=qb-payroll-setup" },
    { num: "Engagement 02", name: "Migration to QuickBooks Payroll", body: "Switching from Gusto, ADP, Paychex, or another provider. Employee records, YTD totals, tax registrations, and pay history transferred so filings stay accurate. First live run verified.", fee: "$1,000–$4,000", eng: "One-time project", href: "/contact/?intent=qb-payroll-setup" },
    { num: "Engagement 03", name: "Payroll error correction", body: "Wrong tax calculations, multi-state misconfiguration, missing local taxes, W-2 corrections. Configuration audit, historical exposure assessment, correction documentation.", fee: "$750–$3,000", eng: "One-time audit + fix", href: "/contact/?intent=qb-payroll-setup" },
    { num: "Engagement 04", name: "Ongoing payroll management", body: "Don’t want to run it yourself? Recurring managed payroll — processing, multi-state filings, quarterly 941s, year-end W-2/1099 — on QuickBooks Payroll.", fee: "$150–$800+/mo", eng: "Recurring monthly", href: "/accounting/payroll-management/?intent=payroll" },
  ],
  // "What we're called in to fix." — 6 issues
  fixes: [
    { name: "Wrong tax withheld.", body: "Federal or state withholding off, usually traceable to a wrong filing status, exemption, or work/residence state on the employee record." },
    { name: "Missing local taxes.", body: "County or municipal taxes (CAGIT/COIT, RITA, PA local) never configured — discovered when a local notice arrives." },
    { name: "Multi-state employee chaos.", body: "Employees across state lines without reciprocity or wage allocation set, producing wrong withholding in both states." },
    { name: "Mid-year migration gaps.", body: "Switched providers mid-year without correct YTD entry, so quarterly and W-2 totals don’t reconcile." },
    { name: "W-2 / 1099 corrections.", body: "Year-end forms wrong because of accumulated configuration errors — requiring W-2c or corrected 1099 filings." },
    { name: "Contractor misclassification.", body: "Workers paid as 1099 who should be W-2 (or vice versa), set up wrong in QuickBooks and creating exposure." },
  ],
  reviewSpec: [
    { value: "Entity", label: "TechBrot Inc. · Delaware C-Corporation · independent ProAdvisor firm" },
    { value: "Certification", label: "Active Intuit QuickBooks Payroll ProAdvisor (+ QBO L2, Desktop, Enterprise)" },
    { value: "Verification", label: "Public ProAdvisor directory at proadvisor.intuit.com" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. · QuickBooks is a registered trademark of Intuit Inc." },
  ],
  related: [
    { title: "Payroll Management", href: "/accounting/payroll-management/?intent=payroll", body: "Ongoing managed payroll — processing, multi-state filings, quarterly 941s, year-end W-2/1099." },
    { title: "QuickBooks Setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "Full QuickBooks implementation — chart of accounts, integrations, sales tax, and payroll together." },
    { title: "QuickBooks Migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "Desktop-to-Online migration — worth scoping alongside payroll so you don’t configure it twice." },
    { title: "QuickBooks Help", href: "/quickbooks/help/?intent=qb-help", body: "Not sure which engagement fits? Start with the diagnostic triage and route to the right help." },
  ],
  faq: [
    { q: "What are the QuickBooks Payroll plans?", a: "QuickBooks Online Payroll has three tiers: Core (full-service payroll, automated federal/state tax filing, direct deposit), Premium (adds same-day direct deposit, HR support center, workers’ comp admin, time tracking), and Elite (adds tax-penalty protection, personal HR advisor, project time tracking). Desktop Payroll exists for Desktop users. The right tier depends on employee count and multi-state complexity, not the priciest default." },
    { q: "Can TechBrot set up QuickBooks Payroll for me?", a: "Yes. Certified Intuit Payroll ProAdvisors configure it end-to-end: company/employee setup, federal + state registration mapping, local jurisdiction tax (CAGIT/COIT, RITA, PA local PSD), pay schedules, deductions, direct deposit, and prior-payroll entry for mid-year starts. Fixed-fee, written scope, configured right the first time." },
    { q: "Why is QuickBooks Payroll calculating the wrong tax?", a: "Most common causes: stale withholding tables, wrong work/residence state, multi-state employees without reciprocity or allocation, missing local taxes, or a wrong filing status/exemption. Multi-state and local-tax errors are the most frequent and most expensive — they surface as state notices. A ProAdvisor audits the configuration, identifies historical exposure, and prepares corrections." },
    { q: "How does TechBrot handle multi-state payroll in QuickBooks?", a: "Configure each employee’s work and residence state, apply reciprocity where it exists, allocate wages across states, register withholding in each required state, and configure local taxes — all verified against actual state rules, not QuickBooks defaults. This is where generic setup most often goes wrong." },
    { q: "Can I switch to QuickBooks Payroll from another provider?", a: "Yes. Migrating from Gusto, ADP, Paychex, or another provider transfers employee records, YTD totals, tax registrations, and pay history so filings stay accurate. It’s cleanest at quarter or year start; mid-year is routine with proper YTD entry. Fixed-fee project, and we verify the first live payroll run before completion." },
    { q: "Does TechBrot file payroll taxes?", a: "QuickBooks Payroll files federal and state payroll taxes automatically on supported plans, and TechBrot configures and monitors that as part of a payroll engagement. What we don’t do is file income-tax returns or represent clients before the IRS — that’s your CPA or EA, and we coordinate with them on income tax." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm — including QuickBooks Payroll certification. We use QuickBooks software but are not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/payroll/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#payroll-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Payroll","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Payroll setup & configuration","serviceType":"QuickBooks Payroll plan selection, setup, multi-state and local tax configuration, migration, and error correction","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks Payroll engagements","itemListElement":data.ways.map(function(w){return {"@type":"Offer","name":stripTags(w.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(w.fee)+" · "+stripTags(w.eng)},"availability":"https://schema.org/InStock"};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
