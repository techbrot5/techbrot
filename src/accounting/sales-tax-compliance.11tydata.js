/* /accounting/sales-tax-compliance/ (round-17 elevation). Sources: baseline.json
 * (44 headings, 13 FAQ — 8 substantive + 5 schema-only dupes/variants) +
 * accounting/sales-tax-compliance/index.html (full copy). t-bofu. Citable:
 * the POST-WAYFAIR ECONOMIC-NEXUS FRAMEWORK — South Dakota v. Wayfair (2018)
 * replaced physical-presence nexus with economic nexus (collect once you exceed
 * a state's threshold, typically $100k in sales OR 200 transactions/yr; varies),
 * plus marketplace-facilitator laws. Price $250–$1,500+/mo by state count.
 * quick-5 additive, zero overlap with FAQ. CTA: non-QB BOFU — NO phone.
 * Authorship firm-level; founder schema-only. No invented stats. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // the citable framework
  wayfair: {
    body: "<strong>The post-Wayfair nexus framework:</strong> before 2018, sales-tax obligations followed <em>physical</em> presence — a location, employees, or inventory in a state. <em>South Dakota v. Wayfair, Inc.</em> (June 2018) replaced that with <strong>economic nexus</strong>: a state can require you to collect once you exceed its threshold — typically <strong>$100,000 in sales OR 200 transactions</strong> in a calendar year (specifics vary by state and have shifted). Layer on <strong>marketplace-facilitator laws</strong> (the platform collects on marketplace sales, but FBA inventory still creates physical nexus) and most multi-state small businesses now have obligations they didn’t have before 2018 — and most haven’t caught up.",
  },
  // quick-5 — distinct from FAQ (what is / cost / economic nexus / SaaS collect / marketplace+FBA / includes / should-have-been / audits)
  aiSummary: [
    { q: "Who actually files my returns each month?", a: "A <strong>named Certified QuickBooks ProAdvisor</strong> with multi-state sales-tax experience, under platform-level quality review. For VDAs, audits with significant exposure, or tax-position disputes we coordinate with state-specific sales-tax counsel — operational compliance is ours; legal representation runs through licensed professionals." },
    { q: "When in the month does each state’s return get filed?", a: "On a fixed monthly cadence: data capture & reconciliation (days 1–7), return preparation (days 7–15), <strong>filing & remittance on each state’s required schedule (days 15–25)</strong>, then notices & nexus monitoring (days 25–31). Each state has its own due date; the cadence keeps every one on time." },
    { q: "Does compliance run on my QuickBooks data?", a: "Yes — and it has to. Filings are only as accurate as the transaction data underneath. Sales-by-state flows from <strong>your QuickBooks file</strong> (plus Shopify/Amazon) into return prep and reconciles to the books monthly, which is why running it with our <strong>monthly bookkeeping</strong> removes the reconciliation gap entirely." },
    { q: "Where does multi-state sales-tax exposure usually hide?", a: "Three places: <strong>Amazon FBA inventory</strong> (creates physical nexus in storage states even when the marketplace collects), <strong>expired or missing exemption certificates</strong> (B2B sales become taxable retroactively in audit), and <strong>mixed revenue streams</strong> (product + SaaS + marketplace each taxed differently per state)." },
    { q: "What does a nexus review produce, and how long?", a: "A <strong>state-by-state taxability map</strong> for your specific revenue mix — where you have nexus, where you must register, and what each state taxes. It usually takes <strong>1–2 weeks</strong> and is a one-time engagement (typically $500–$2,000) separate from the monthly retainer." },
  ],
  signals: [
    { opener: "You sell on Shopify, your own site, or direct-to-consumer.", body: "Direct online sales hit economic-nexus thresholds in 5–15 states within 1–2 years for most growing brands. Unlike marketplace sales, marketplace-facilitator laws don’t apply — you collect and remit directly." },
    { opener: "You sell on Amazon FBA, eBay, Walmart, or Etsy.", body: "Marketplace-facilitator laws shift most collection to the marketplace — but FBA inventory creates physical nexus in storage states, and direct sales outside the marketplace still trigger your own compliance. A common confusion zone." },
    { opener: "You sell SaaS or digital products.", body: "SaaS taxability varies wildly — some states fully tax, some fully exempt, some apply conditional rules. A multi-state SaaS company typically needs jurisdiction-by-jurisdiction taxability analysis to know where collection is required." },
    { opener: "You have customers in 10+ states.", body: "Once a business has customers across more than 10 states, the probability of economic-nexus exposure approaches certainty. The question becomes which states — not whether." },
    { opener: "You’ve received a state sales tax notice.", body: "State sales-tax notices are routine outreach, not adversarial — but ignoring them compounds the problem. A notice typically means the state believes you have nexus and wants registration to begin." },
    { opener: "You’re preparing for fundraising, sale, or audit.", body: "Sales-tax exposure is one of the first things diligence teams examine in M&A and capital events. Unreported liability can materially affect valuation or kill deals. Quantifying exposure before diligence beats during." },
  ],
  // "How sales tax actually works for your business." — 6 business-type cards
  models: [
    { name: "Shopify, BigCommerce, WooCommerce", load: "High", pattern: "Direct sales mean you collect and remit in every nexus state — no marketplace-facilitator coverage. Economic nexus typically triggers in 5–15 states within 12–24 months.", watch: "Sales through your own site vs. marketplace platforms run on different rules — track both streams from day one." },
    { name: "Amazon FBA, eBay, Walmart, Etsy", load: "Moderate", pattern: "Marketplace-facilitator laws shift collection to the platform, but you still register in physical-nexus states, report marketplace sales in some states, and handle direct-sale compliance.", watch: "FBA inventory in a state typically creates physical nexus — independent of economic nexus — even when the marketplace collects." },
    { name: "B2B SaaS, B2C software, digital products", load: "Highly variable", pattern: "Taxability differs more by state for SaaS than any other category. Jurisdiction-by-jurisdiction analysis required — some states fully tax, some exempt, some condition on B2B/B2C or hosted/downloaded.", watch: "SaaS taxability rules change more often than physical goods — annual review is part of standard SaaS compliance." },
    { name: "Professional services, agencies, consulting", load: "Lower, rising", pattern: "Many states tax specific services (digital services, data processing, advertising) even when general services are exempt. Taxability is state- and category-specific.", watch: "States are progressively expanding service taxation — what’s exempt today may be taxable in 2–3 years." },
    { name: "Wholesale, distribution, manufacturing", load: "Moderate", pattern: "Most B2B sales are exempt with proper exemption-certificate management — but the certificate work itself is operational overhead. Storage and inventory locations create physical nexus.", watch: "Exemption-certificate management is the largest operational risk in B2B — missing or expired certificates create taxable transactions retroactively in audit." },
    { name: "Multi-stream & complex businesses", load: "High", pattern: "Businesses combining product sales, service revenue, SaaS, and marketplace sales need each stream analyzed separately — different taxability rules in each state.", watch: "Mixed businesses are where most sales-tax exposure hides. Stream-by-stream analysis is essential." },
  ],
  // "What every month actually looks like." — monthly cycle (the visual)
  cycle: [
    { num: "Days 1–7", name: "Data capture & reconciliation", body: "Prior-month sales pulled from QuickBooks, Shopify, Amazon, and other platforms. Sales by state and jurisdiction reconciled. Marketplace-facilitator transactions separated from direct sales. Tax-collected vs. tax-due variances identified." },
    { num: "Days 7–15", name: "Return preparation", body: "Returns prepared for each state with filings due that month. Local jurisdiction breakdowns calculated. Exemption certificates verified for any non-taxed transactions. Threshold tracking updated." },
    { num: "Days 15–25", name: "Filing & remittance", body: "Returns filed on each state’s required schedule. Tax remitted via state portals or ACH. Filing confirmations stored. State-specific issues (rate updates, schema changes) handled." },
    { num: "Days 25–31", name: "Notices & nexus monitoring", body: "State notices reviewed and responded to within service windows. Economic-nexus thresholds monitored across all states. New nexus warnings flagged. Monthly compliance summary delivered." },
  ],
  included: [
    "Multi-state sales tax filings on each state’s schedule", "Sales tax remittance to state agencies",
    "Economic nexus threshold monitoring", "Marketplace facilitator reconciliation",
    "QuickBooks bookkeeping integration", "E-commerce platform integration (Shopify, Amazon, etc.)",
    "State notice response within service windows", "Exemption certificate basic management",
    "Rate update monitoring", "Monthly compliance summary", "Named operator point of contact", "Annual nexus review",
  ],
  layered: [
    "Initial multi-state nexus analysis", "State and local registration in new jurisdictions",
    "SaaS jurisdiction-by-jurisdiction taxability analysis", "Voluntary Disclosure Agreement (VDA) coordination",
    "Back-tax exposure quantification", "Sales tax audit support & documentation",
    "Exemption certificate program design", "Amazon FBA physical nexus management",
    "Avalara, TaxJar, or similar platform configuration", "M&A due diligence sales tax review",
    "Industry-specific compliance (alcohol, tobacco, etc.)", "International VAT coordination via referral",
  ],
  tiers: [
    { name: "Simple", price: "$250–$500", per: "/month", forWhom: "1–3 state compliance, single revenue stream, no marketplace complexity, simple products or services.", bullets: ["Monthly filings in 1–3 states", "Sales tax remittance", "Nexus monitoring", "QuickBooks integration", "State notice response", "Annual nexus review"], cta: "Scope a Simple engagement", note: "" },
    { name: "Standard", price: "$500–$1,000", per: "/month", forWhom: "4–15 state compliance, multi-channel e-commerce, marketplace + direct sales, service businesses with multi-state exposure, growing SaaS.", bullets: ["Everything in Simple", "Multi-channel reconciliation", "Marketplace facilitator handling", "Shopify / Amazon / platform integration", "Exemption certificate basic management", "Avalara or TaxJar configuration", "Quarterly nexus expansion review"], cta: "Scope a Standard engagement", note: "Most common" },
    { name: "Complex", price: "$1,000–$1,500+", per: "/month", forWhom: "15+ state compliance, complex multi-stream businesses, SaaS with full taxability mapping, B2B with significant certificate work, regulated products.", bullets: ["Everything in Standard", "15+ state coverage", "Multi-stream revenue handling", "SaaS jurisdiction-by-jurisdiction taxability", "Exemption certificate program management", "Amazon FBA physical nexus management", "Industry-specific compliance", "Monthly nexus expansion review"], cta: "Scope a Complex engagement", note: "" },
  ],
  operatorSpec: [
    { value: "Certifications", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Coverage", label: "All 50 U.S. states + local jurisdictions" },
    { value: "Scope split", label: "Operational compliance via TechBrot · legal & tax-position via licensed counsel" },
    { value: "Software", label: "QuickBooks-native + Avalara / TaxJar where applicable" },
  ],
  nextSteps: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The natural pair. Sales-tax filings depend on accurate transaction data — integrated bookkeeping + sales tax eliminates the reconciliation gap." },
    { title: "Payroll management", href: "/accounting/payroll-management/?intent=payroll", body: "Multi-state payroll pairs naturally with multi-state sales tax — the same nexus analysis informs both. A common bundle for e-commerce and SaaS." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "Sales-tax configuration is part of every setup — multi-state nexus and rate management are designed during setup, not bolted on later." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "For growth-stage businesses, sales-tax exposure is a CFO-level concern — affecting M&A diligence, margin reporting, and capital-event readiness." },
  ],
  faq: [
    { q: "What is sales tax compliance?", a: "Sales tax compliance is the ongoing work of determining where a business has sales-tax obligations, registering with each state, collecting tax from customers at correct rates, filing returns on each state’s schedule, remitting collected tax, managing exemption certificates, and responding to state notices and audits. Compliance complexity grew significantly after the 2018 South Dakota v. Wayfair Supreme Court decision created economic-nexus rules." },
    { q: "How much does sales tax compliance cost?", a: "Fixed monthly fees scaling with state count: Simple (1–3 states) $250–$500/month, Standard (4–15 states) $500–$1,000/month, Complex (15+ states) $1,000–$1,500+/month. Initial nexus analysis and state registration are one-time engagements, typically $500–$3,000 depending on scope." },
    { q: "What is economic nexus and when do I have it?", a: "Economic nexus is the legal threshold that triggers a sales-tax obligation in a state based on economic activity rather than physical presence. Most U.S. states require collection once a business exceeds $100,000 in sales or 200 transactions in the state during a given period (thresholds vary by state and have shifted over time). Once established, the business must register, collect, file, and remit going forward." },
    { q: "Do SaaS and software companies need to collect sales tax?", a: "Often, yes — but it varies dramatically by state. Some states fully tax SaaS, some fully exempt it, and some apply conditional rules based on B2B vs B2C or hosted vs downloaded. A multi-state SaaS company typically needs a jurisdiction-by-jurisdiction taxability analysis to know exactly where collection is required." },
    { q: "What about marketplace facilitator laws and Amazon FBA?", a: "Marketplace-facilitator laws shift collection on marketplace sales to the platform (Amazon, eBay, Walmart, Etsy). But FBA inventory stored in a state typically creates physical nexus there independent of economic nexus, and any direct sales outside the marketplace still trigger your own compliance. Both streams must be tracked separately." },
    { q: "Can I talk to a ProAdvisor before committing to sales-tax compliance?", a: "Yes — start with a no-obligation call. An independent Certified ProAdvisor reviews your sales channels and states, explains where you likely have nexus, and scopes a fixed monthly fee in writing. Call (877) 751-5575 or <a href=\"/contact/?intent=sales-tax\">request a nexus review</a>. Filings run on your QuickBooks data, so it pairs cleanly with <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>." },
    { q: "What if I should have been collecting sales tax but haven’t been?", a: "A common situation. For limited exposure: register and start complying going forward. For larger exposure: Voluntary Disclosure Agreement (VDA) programs with each affected state typically reduce penalties and limit lookback in exchange for proactive registration and back-tax payment. For audits with significant exposure or tax-position disputes we coordinate with state-specific sales-tax counsel — our role is operational compliance and documentation; legal representation and tax-position defense run through licensed professionals." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/sales-tax-compliance/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#sales-tax-compliance-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Sales tax compliance","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Sales tax compliance services","serviceType":"Multi-state sales tax nexus, filing, remittance, and audit support","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Sales tax compliance tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name)+" sales tax compliance","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+stripTags(t.per)+" · fixed fee, scaling by state count"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What sales tax compliance includes every month","itemListElement":data.included.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
