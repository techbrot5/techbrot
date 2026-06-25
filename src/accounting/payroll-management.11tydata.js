/* /accounting/payroll-management/ (round-17 elevation). Sources: baseline.json
 * (48 headings, 13 FAQ — 8 substantive + 5 schema-only dupes) +
 * accounting/payroll-management/index.html (full copy). t-bofu. Citable:
 * MULTI-STATE PAYROLL-TAX HANDLING — registering the business in each state an
 * employee works, configuring state income-tax withholding + state unemployment
 * (SUTA) accounts, applying reciprocal-state agreements, and filing in every
 * jurisdiction (a single remote hire creates payroll nexus before the first
 * paycheck). Price $150–$800+/mo. quick-5 additive, zero overlap with FAQ. CTA:
 * non-QB BOFU — NO phone. Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // the citable element — defined precisely
  multistate: {
    body: "<strong>Multi-state payroll-tax handling</strong> is the work that scales non-linearly with every state you employ in: registering the business in each state where an employee actually works, opening state income-tax withholding and state unemployment (SUTA) accounts, applying reciprocal-state agreements between neighboring states, and filing in every jurisdiction on its own schedule. A single remote hire in a new state creates payroll nexus there &mdash; registration, withholding setup, and unemployment all have to happen <em>before</em> the first paycheck, not after.",
  },
  payCycle: [
    { num: "3–5 days before", name: "Hours & data captured", body: "Hours imported from time-tracking, salaried employees verified, bonuses and reimbursements captured, PTO requests reconciled, new hires and terminations confirmed." },
    { num: "2–3 days before", name: "Calculations & review", body: "Gross-to-net calculations run, federal and state withholdings computed, deductions applied, multi-state allocations verified. The operator reviews for anomalies before submission." },
    { num: "1–2 days before", name: "Submission & funding", body: "Payroll submitted, direct deposits funded, tax withholdings transmitted to federal and state agencies on schedule. Pay stubs published to employee portals." },
    { num: "Pay date & after", name: "Posting & reconciliation", body: "Direct deposits land. Payroll journal entries post to QuickBooks. Liabilities reconciled. State notices, employee questions, and amendments handled within agreed service windows." },
  ],
  included: [
    "Scheduled pay cycle processing", "Federal tax withholding & deposits", "State tax withholding & deposits",
    "Quarterly 941 filings", "State unemployment filings", "New hire reporting (state-mandated)",
    "Direct deposit & pay stub generation", "Employee portal & self-service access", "PTO & benefits deduction tracking",
    "Year-end W-2 & 1099 preparation", "QuickBooks bookkeeping integration", "Named operator point of contact",
  ],
  layered: [
    "Multi-state nexus analysis & registration", "Remote worker compliance setup", "Workers’ comp coordination",
    "401(k) & benefits provider integration", "HSA, FSA, and commuter benefits", "Contractor & 1099 payment processing",
    "Bonus & commission structures", "Equity compensation handling", "Multi-entity payroll coordination",
    "State agency notice response", "Payroll system migration", "Custom reporting & analytics",
  ],
  // quick-5 — distinct from FAQ (what is / cost / includes / work-with-software / multi-state / switch / sw-vs-mgmt / integrate-bookkeeping)
  aiSummary: [
    { q: "When does each pay cycle actually start?", a: "<strong>3–5 days before pay date.</strong> Hours and data are captured, then calculations and review (2–3 days out), submission and funding (1–2 days out), and posting and reconciliation on pay date — a fixed four-phase cadence every cycle, so nothing is rushed the night before." },
    { q: "What happens when a remote hire crosses state lines?", a: "A single employee in a new state creates <strong>payroll nexus</strong> there. Before their first paycheck we register the business in that state, open withholding and unemployment accounts, and apply any reciprocal-state agreement — the core of multi-state payroll-tax handling." },
    { q: "Who is liable if a payroll tax filing is late?", a: "Filings (941s, state withholding, SUTA, new-hire reporting) are run on schedule by a <strong>named Certified Payroll ProAdvisor</strong> under platform-level quality review. Deadlines are tracked and met; if a state notice arrives, the operator responds and resolves it within the agreed service window." },
    { q: "What do I still have to do myself each cycle?", a: "Approve hours and confirm any changes — new hires, terminations, bonuses, PTO. <strong>That’s it.</strong> Calculations, withholdings, filings, deposits, pay stubs, and the bookkeeping posting are operated for you." },
    { q: "What year-end forms do you produce, and when?", a: "<strong>W-2s for employees and 1099s for contractors</strong>, prepared and filed by the IRS and state deadlines (W-2/1099 to recipients by January 31). Quarterly 941 and state unemployment filings are handled throughout the year." },
  ],
  signals: [
    { opener: "You have employees in multiple states.", body: "Multi-state payroll triggers registration in each state, multi-state withholding rules, unemployment in each state, and reciprocal-state coordination. The compliance load grows non-linearly with each new state." },
    { opener: "You hired your first remote employee in another state.", body: "A single remote employee in a new state creates payroll nexus there. Registration, withholding setup, and state unemployment all need to happen before the first paycheck." },
    { opener: "You’ve received state agency notices you don’t understand.", body: "State payroll-tax notices, unemployment audits, and reciprocal-state questions arrive without warning. Professional management responds correctly and resolves them without penalties." },
    { opener: "You’re spending hours every pay cycle on payroll yourself.", body: "Self-managed payroll consumes 5–15 hours per cycle once you have multiple employees, benefits deductions, and multi-state work. That time costs more than professional management does." },
    { opener: "Your payroll doesn’t reconcile to your bookkeeping.", body: "If payroll and bookkeeping run separately, monthly reconciliation gaps compound. Integrated payroll-and-bookkeeping management eliminates this category of error entirely." },
    { opener: "You’re switching payroll providers and need a clean transition.", body: "Provider switches mid-year require careful coordination — YTD totals, prior filings, state accounts, direct-deposit migration. A botched switch produces months of cleanup work." },
  ],
  tiers: [
    { name: "Essentials", price: "$150–$300", per: "/month", forWhom: "Simple single-state payroll, under 10 employees, no contractors, standard benefits, biweekly or semi-monthly cycle.", bullets: ["Scheduled pay cycle processing", "Federal & single-state tax filings", "Direct deposit & pay stubs", "Year-end W-2 & 1099 preparation", "QuickBooks bookkeeping integration"], cta: "Scope an Essentials engagement", note: "" },
    { name: "Standard", price: "$300–$600", per: "/month", forWhom: "Multi-state payroll (2–5 states), 10–50 employees, contractors, benefits deductions, growing teams.", bullets: ["Everything in Essentials", "Multi-state filings & compliance", "Contractor & 1099 payment processing", "Benefits provider integration", "New hire onboarding workflows", "State agency notice response"], cta: "Scope a Standard engagement", note: "Most common" },
    { name: "Complex", price: "$600–$800+", per: "/month", forWhom: "50+ employees, 6+ states, multi-entity payroll, equity compensation, complex benefits, union or prevailing-wage situations.", bullets: ["Everything in Standard", "Multi-entity payroll coordination", "Equity compensation handling", "Workers’ comp coordination", "Multi-state nexus analysis", "Custom reporting & analytics", "Year-end audit support"], cta: "Scope a Complex engagement", note: "" },
  ],
  // "From first call to first clean pay cycle." — onboarding flow (one-time), HowTo
  onboarding: [
    { name: "Payroll Diagnostic", sub: "3 business days", body: "A 30-minute call reviews your current setup, employee count, state coverage, software, and compliance posture. Written fixed-fee scope within 3 business days." },
    { name: "Setup & Migration", sub: "2–4 weeks", body: "New: company setup, state registrations, software configuration, employee onboarding. Transitioning: YTD migration, prior-filings reconciliation, direct-deposit setup, employee notification." },
    { name: "First Cycle & Verification", sub: "first pay date +5 days", body: "First payroll run under TechBrot management, with platform-level quality review. Any setup discrepancies resolved before the second cycle." },
    { name: "Recurring Operations", sub: "ongoing", body: "Every cycle runs the four-phase cadence. Quarterly 941 filings, state unemployment filings, and year-end W-2/1099 preparation handled on schedule." },
  ],
  platforms: [
    { tag: "QB", name: "QuickBooks Payroll", body: "Default platform for TechBrot engagements. All three tiers — Core, Premium, Elite. Native integration with QuickBooks bookkeeping eliminates reconciliation gaps." },
    { tag: "G", name: "Gusto", body: "Strong fit for venture-stage businesses, modern benefits stacks, and remote-first teams. We recommend Gusto over QuickBooks Payroll when the use case fits better." },
    { tag: "R", name: "Rippling", body: "Strong fit for companies running unified HR/IT/payroll, complex equity structures, or international employees. Higher complexity, higher ceiling." },
    { tag: "ADP", name: "ADP / Paychex", body: "Enterprise-grade platforms with full HR depth. Supported when the business has outgrown small-business platforms or operates in heavily regulated industries." },
    { tag: "+", name: "Migration support", body: "Switching platforms is routine. We handle YTD migration, state-account transitions, employee notification, and prior-filings reconciliation. Most transitions complete in 2–4 weeks." },
    { tag: "?", name: "Not sure which platform?", body: "Part of the diagnostic. We recommend the platform that fits your business — not the one we’d earn more on. Independence is part of the standard." },
  ],
  operatorSpec: [
    { value: "Certification", label: "Certified QuickBooks Payroll ProAdvisor — multi-state capable" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review · filings on schedule" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  nextSteps: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Payroll and bookkeeping integrate cleanly — combined, the payroll journal posts and reconciles every month with no gap, at a materially lower combined cost than separate providers." },
    { title: "QuickBooks Payroll", href: "/quickbooks/payroll/?intent=qb-payroll-setup", body: "The default platform, professionally configured and operated — Core, Premium, or Elite, integrated with your QuickBooks file." },
    { title: "Sales tax compliance", href: "/accounting/sales-tax-compliance/?intent=sales-tax", body: "Multi-state employees often mean multi-state sales-tax nexus too — the same operator network handles post-Wayfair compliance." },
    { title: "QuickBooks cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "If payroll entries never reconciled to the books, a QuickBooks cleanup corrects the file before ongoing payroll posts cleanly." },
  ],
  faq: [
    { q: "What is payroll management?", a: "Payroll management is the ongoing professional handling of an employer’s payroll function — running scheduled pay cycles, calculating and withholding federal and state taxes, filing required payroll-tax returns, processing direct deposits and pay stubs, handling employee onboarding and offboarding, tracking PTO and benefits, and producing year-end W-2 and 1099 reporting. Professional payroll management ensures compliance and accurate records that integrate with the business’s accounting system." },
    { q: "How much does payroll management cost?", a: "Payroll management is priced as a fixed monthly fee. Typical engagements: $150–$300/month for simple single-state engagements under 10 employees, $300–$600/month for standard multi-state or growing teams, $600–$800+/month for complex multi-state, multi-entity, or compliance-heavy engagements. Setup engagements are quoted separately." },
    { q: "Can I talk to a payroll ProAdvisor before I commit?", a: "Yes — start with a free 30-minute payroll diagnostic, no obligation. An independent Certified Payroll ProAdvisor reviews your employee count, states, software, and compliance posture, then sends a written fixed-fee scope within 3 business days. Call (877) 751-5575 or <a href=\"/contact/?intent=payroll\">request the diagnostic</a>. If you also have multi-state customers, ask about pairing <a href=\"/accounting/sales-tax-compliance/?intent=sales-tax\">sales-tax compliance</a> on the same nexus analysis." },
    { q: "Do you work with my existing payroll software?", a: "Yes. Operators are Certified QuickBooks Payroll ProAdvisors and support QuickBooks Payroll (Core, Premium, Elite) as the default, and also work fluently with Gusto, Rippling, ADP, and Paychex when those fit better. Payroll integrates with your existing QuickBooks bookkeeping so entries reconcile cleanly every month." },
    { q: "Can you handle multi-state payroll?", a: "Yes. Multi-state payroll is one of the most common reasons businesses move to professional management. We handle state registration, state unemployment account setup, multi-state withholding tax filings, remote-worker compliance, nexus analysis when employees cross state lines, and reciprocal-state agreements." },
    { q: "Can I switch from my current payroll provider?", a: "Yes. Provider switches are routine. We handle YTD migration, prior-filings reconciliation, state-account transitions, direct-deposit migration, and employee notification. Most transitions complete in 2–4 weeks, and we time them to avoid breaking your filing history." },
    { q: "How does payroll integrate with my bookkeeping?", a: "When the same firm runs both, the payroll journal posts directly into your QuickBooks file each cycle and liabilities reconcile automatically — eliminating the reconciliation gaps that appear when payroll and bookkeeping run with separate providers. Paired with <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, the combined engagement also costs materially less than two separate vendors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/payroll-management/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#payroll-management-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Payroll management","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Payroll management services","serviceType":"Multi-state payroll processing, tax filing, and compliance","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Payroll management tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name)+" payroll management","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+stripTags(t.per)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From first call to first clean pay cycle","description":"How a TechBrot payroll engagement onboards, from diagnostic to recurring operations.","step":data.onboarding.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What payroll management includes every cycle","itemListElement":data.included.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
