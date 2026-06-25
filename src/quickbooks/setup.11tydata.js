/* /quickbooks/setup/ (round-16 elevation). Sources: baseline.json (43 headings,
 * 8 FAQ) + quickbooks/setup/index.html (full copy). t-bofu. Citable / NAMED:
 * the "TechBrot Setup Protocol" — the four-phase setup sequence, each phase with
 * a named output. NOTE: baseline documents FOUR phases ("Every setup engagement
 * runs four phases."); founder asked for five — preserved the 4-phase equity and
 * named the protocol; flagged the count for founder's call (report). Visual:
 * ProcessFlow of the protocol. Price $750–$5,000+. quick-5 additive, zero
 * overlap with FAQ. CTA: QB-specific BOFU — phone tertiary ("Speak to a
 * ProAdvisor") permitted. Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  signals: [
    { opener: "You’re implementing QuickBooks for the first time.", body: "New entity, new business, or first-time accounting software. The setup decisions made now determine reporting structure, tax readiness, and audit defensibility for years." },
    { opener: "You operate in a regulated or specialized industry.", body: "Construction, real estate, restaurants, professional services, manufacturing, nonprofits, e-commerce — each needs an industry-specific chart of accounts and reporting structure. Generic setup creates years of rework." },
    { opener: "You have inventory, jobs, or class-based segments.", body: "Inventory accounting, job costing, project tracking, and segment reporting require deliberate setup. Add them later and you lose historical comparability." },
    { opener: "You collect sales tax in multiple states.", body: "Multi-state sales tax means multi-state nexus, filings, and rate configuration. Sales-tax setup is one of the easiest places to get into compliance trouble." },
    { opener: "You’re migrating from another accounting platform.", body: "Coming from Wave, FreshBooks, Xero, Bench, or spreadsheets. Migration involves opening-balance reconciliation, historical transaction handling, and integration replacement." },
    { opener: "You’re raising capital or preparing for an audit.", body: "Investors and auditors read your books. A clean, well-structured QuickBooks file says “professional operator” before any human does. A wizard-built file says the opposite." },
  ],
  // quick-5 — distinct from FAQ (what is / cost / wizard / what includes / which product / how long / continue monthly / already-wrong)
  aiSummary: [
    { q: "Is setup a fixed fee or billed hourly?", a: "<strong>One-time fixed fee against a written scope</strong>, never hourly. The diagnostic produces the scope, implementation plan, and price in writing before any work begins. Software subscriptions are separate and pass through at Intuit list pricing." },
    { q: "Why does the original setup matter years later?", a: "Because everything is built on it. <strong>Most cleanup engagements TechBrot performs exist because the original setup was wrong.</strong> A file built right means monthly bookkeeping runs cleanly, tax prep takes hours not days, and advisory work has accurate books to stand on." },
    { q: "Do you set up inside my own QuickBooks subscription?", a: "Yes. Your operator configures <strong>your own QuickBooks file and subscription</strong> as an authorized accountant-user — the file is yours from day one, and access is revocable at any time." },
    { q: "What does the TechBrot Setup Protocol actually produce?", a: "Four phases, each with a named output: a <strong>written scope</strong>, a <strong>configured company file &amp; industry chart of accounts</strong>, <strong>connected integrations &amp; entered records</strong>, and a <strong>reconciled first month with a setup summary and training</strong>." },
    { q: "Can you configure multi-state sales tax and industry specifics?", a: "Yes. Multi-state sales-tax nexus and rates, plus industry-specific charts of accounts and reporting (construction, restaurants, manufacturing, nonprofits, e-commerce) are configured as scope requires — that’s the difference from a wizard setup." },
  ],
  // "Every setup engagement runs four phases." — the TechBrot Setup Protocol (HowTo)
  protocol: [
    { num: "01", when: "Week 1", name: "Setup Diagnostic", output: "Written scope & implementation plan", body: "A 30-minute call reviews your business structure, industry, transaction volume, prior records, integration needs, and reporting requirements. Written fixed-fee scope and implementation plan within 3 business days." },
    { num: "02", when: "Week 1–2", name: "File & Chart Build", output: "Configured company file & industry chart of accounts", body: "Company file created in the right QuickBooks product. Custom chart of accounts designed for your industry. Sales tax, payroll, class and location tracking, and reporting structures configured. Opening balances entered against a defined as-of date." },
    { num: "03", when: "Week 2–3", name: "Integration & Data Entry", output: "Connected integrations & entered records", body: "Bank and credit-card accounts connected. Customer and vendor records entered. Recurring transactions templated. Third-party integrations configured — payment processors, payroll, time tracking, inventory, e-commerce, point-of-sale." },
    { num: "04", when: "Week 3–4", name: "Verification & Handoff", output: "Reconciled first month + setup summary & training", body: "First-month transactions reconciled to verify the setup is correct. Documented setup summary delivered. Training session with recorded video. Optional transition to monthly bookkeeping with the same operator." },
  ],
  included: [
    "Company file created in the right QuickBooks product", "Custom chart of accounts designed for your industry",
    "Opening balances reconciled to prior records", "Bank & credit card feed integration",
    "Sales tax configuration with nexus states", "Customer & vendor record entry",
    "Recurring transaction templates", "First-month reconciliation", "Documented setup summary",
    "Training session with recorded video", "30-day post-setup support window", "Named operator point of contact",
  ],
  configured: [
    "Payroll setup & employee onboarding", "Class & location tracking", "Job costing & project tracking",
    "Inventory setup & valuation method", "Payment processor integration (Stripe, Square, PayPal)",
    "E-commerce platform integration (Shopify, WooCommerce, Amazon)", "Time tracking integration (TSheets, Harvest)",
    "Bill pay setup (Bill.com, Melio)", "Multi-entity setup & consolidation", "Industry-specific reporting structures",
    "Custom report templates", "User permissions & access control",
  ],
  tiers: [
    { name: "Essentials Setup", price: "$750", per: "", forWhom: "Single-entity sole proprietors and very small businesses, simple chart of accounts, no inventory, no payroll, no multi-state sales tax, under 3 integrations.", bullets: ["Company file & chart of accounts", "Opening balances", "Bank & credit card integration", "Single-state sales tax (if applicable)", "Training session", "30-day support window"], cta: "Scope an Essentials setup", note: "" },
    { name: "Standard Setup", price: "$1,500–$3,000", per: "", forWhom: "U.S. small businesses with payroll, inventory, class tracking, or multi-state sales tax. Industry-specific chart of accounts. 3–6 integrations.", bullets: ["Everything in Essentials", "Industry-specific chart of accounts", "Payroll setup & employee onboarding", "Multi-state sales tax", "Class & location tracking", "3–6 third-party integrations"], cta: "Scope a Standard setup", note: "Most common" },
    { name: "Complex Setup", price: "$3,000–$5,000+", per: "", forWhom: "Multi-entity, multi-location, inventory-heavy operations, advanced industry needs, 6+ integrations, QuickBooks Enterprise.", bullets: ["Everything in Standard", "Multi-entity setup & consolidation", "Inventory valuation method", "Job costing & project tracking", "Industry-specific reporting", "6+ integrations", "Custom report templates", "User permissions & access control"], cta: "Scope a Complex setup", note: "" },
  ],
  products: [
    { tag: "QBO", name: "Online Simple Start / Essentials", body: "For sole proprietors and very small operations. Limited reporting, no inventory or class tracking. Most TechBrot setups bypass this tier for QBO Plus." },
    { tag: "QBO+", name: "Online Plus", body: "The default for most U.S. small-business setups. Supports inventory, class and location tracking, project tracking, and 5 users. Strongest price-to-capability ratio in the lineup." },
    { tag: "QBO++", name: "Online Advanced", body: "For growing businesses needing custom user roles, batch invoicing, advanced reporting, and a dedicated account manager. 25 users. Fits the $5M–$50M revenue range." },
    { tag: "ENT", name: "QuickBooks Enterprise", body: "For larger operations needing advanced inventory, industry-specific editions (contractor, manufacturing, nonprofit, retail), or up to 40 users. Hosted Desktop or on-premise." },
    { tag: "⚠", name: "Desktop Pro & Premier", body: "Being phased out by Intuit. New subscriptions discontinued in 2024; existing licenses lose support by 2027. We migrate Desktop clients to QBO or Enterprise rather than setting up new Desktop files." },
    { tag: "?", name: "Not sure which fits?", body: "The diagnostic includes product selection. We recommend the product that fits your business — not the one we’d earn more on. Independence is part of the standard." },
  ],
  nextSteps: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Most setups transition directly into monthly bookkeeping with the same operator — the file was built right, so the close runs cleanly." },
    { title: "QuickBooks migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "Coming from Desktop, Xero, Wave, or spreadsheets? Migration verifies and reconciles the move before setup configures the new file." },
    { title: "QuickBooks cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "If a wizard-built or prior setup already created problems, cleanup corrects them and re-establishes a reliable baseline." },
    { title: "Payroll management", href: "/accounting/payroll-management/?intent=payroll", body: "Payroll set up at implementation can roll into ongoing payroll management — processing, tax filing, multi-state compliance." },
  ],
  operatorSpec: [
    { value: "Certification", label: "Certified ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  faq: [
    { q: "What is professional QuickBooks setup?", a: "Professional QuickBooks setup is the implementation engagement where a Certified ProAdvisor configures QuickBooks for a specific business: creating the company file, designing the chart of accounts for the business and industry, entering opening balances, configuring sales tax and payroll, connecting bank and credit-card feeds, setting up class and location tracking, and integrating third-party systems. Done correctly, the setup determines whether the books are reliable for the next several years." },
    { q: "How much does QuickBooks setup cost?", a: "A fixed one-time engagement: typically $750 for simple single-entity setups, $1,500–$3,000 for standard small-business implementations, and $3,000–$5,000+ for complex multi-entity, multi-state, or industry-specific work. The diagnostic call produces a written scope before work begins. Software subscription costs are separate and pass through at Intuit list pricing." },
    { q: "Do I need professional setup if QuickBooks has a setup wizard?", a: "The QuickBooks setup wizard creates a generic company file with a generic chart of accounts. It does not design accounts for your specific business and industry, configure sales tax for your nexus states, set up class tracking, migrate opening balances, or integrate third-party systems. Most setup work TechBrot performs is fixing wizard-driven setups that produced bookkeeping problems in months one through three." },
    { q: "What does professional QuickBooks setup include?", a: "Every setup includes the company file in the right product, an industry-specific chart of accounts, reconciled opening balances, bank and credit-card integration, sales-tax configuration for your nexus states, customer and vendor records, recurring-transaction templates, a first-month reconciliation, a documented setup summary, a recorded training session, a 30-day support window, and a named operator. Payroll, class tracking, inventory, job costing, and multi-entity are configured when scope requires." },
    { q: "Which QuickBooks product should I use?", a: "Product selection is part of the diagnostic. QuickBooks Online Plus fits most U.S. small businesses with inventory, class tracking, or multiple users. Online Advanced fits growing businesses with reporting needs. Enterprise fits larger operations needing advanced inventory or industry-specific features. Desktop Pro and Premier are being phased out by Intuit and not recommended for new setups." },
    { q: "How long does QuickBooks setup take?", a: "2 to 4 weeks from kickoff to handoff. Simple single-entity setups complete in 2 weeks. Multi-entity, multi-state, or industry-specific implementations run 3 to 4 weeks. Timeline depends on access to prior records, third-party integration complexity, and client availability for review sessions." },
    { q: "Do you continue with monthly bookkeeping after setup?", a: "Most TechBrot setups transition directly into monthly bookkeeping with the same operator — the file was built right, so the ongoing close runs cleanly. It’s optional; you can also take the documented, verified file to your own accountant. No lock-in." },
    { q: "What if my books are already in QuickBooks but the setup is wrong?", a: "That’s common. Depending on the damage, it’s either a cleanup (correcting errors and reconciliations in place) or a re-setup (rebuilding the chart of accounts and configuration). The diagnostic tells you which path fits and prices it in writing before any work begins." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#setup-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Setup","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks setup & implementation services","serviceType":"Professional QuickBooks setup and configuration","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks setup tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"The TechBrot Setup Protocol","description":"The four-phase QuickBooks setup sequence TechBrot runs on every engagement, each phase with a named output.","step":data.protocol.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
