/* /quickbooks/migration/ (round-16 elevation). Sources: baseline.json (42
 * headings, 7 FAQ) + quickbooks/migration/index.html (full copy). t-bofu.
 * Citable / NAMED: the "Migration Integrity Protocol" — a 7-point verification
 * checklist run against the source file before any migration is signed off
 * (opening balances, bank feeds, payroll history, vendor/customer lists,
 * inventory, recurring transactions, report parity). Price $2,500–$10,000+.
 * Desktop sunset dates are factual (Intuit). quick-5 additive, zero overlap
 * with FAQ. CTA: QB-specific BOFU — phone tertiary permitted. Authorship
 * firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "What's actually happening — and why timing matters." — the Desktop sunset (factual)
  timeline: [
    { num: "Sep 30, 2024", name: "New Desktop subscriptions discontinued.", body: "Intuit stopped selling new QuickBooks Desktop Pro Plus, Premier Plus, and Mac Plus subscriptions to U.S. customers. Existing subscribers can still renew, but the door to new Desktop is closed. Enterprise is the exception." },
    { num: "May 31, 2026", name: "Desktop 2023 support ended.", body: "QuickBooks Desktop 2023 lost all support — payroll tax tables, bank feeds, and security updates stopped. Each Desktop version gets roughly three years of support from release, then its connected features go dark." },
    { num: "2026 — now", name: "Desktop 2024 still supported.", body: "If you’re on Desktop 2024 — the last non-Enterprise release — you still have support and bank feeds. Migration capacity at most ProAdvisor firms is currently manageable. This is the calm before the rush." },
    { num: "Sep 30, 2027", name: "Desktop 2024 support ends.", body: "Intuit ends support for Desktop 2024 — payroll tables freeze, bank feeds disconnect, security patches stop. Industry migration capacity tightens dramatically. The cost to migrate doesn’t fall with time; the risk of waiting rises." },
  ],
  // quick-5 — distinct from FAQ (why migrating / cost / Intuit-tool / includes / how long / non-QB / Enterprise-vs-Online)
  aiSummary: [
    { q: "What is the Migration Integrity Protocol?", a: "A <strong>7-point verification checklist</strong> the operator runs against your source file before any migration is signed off: opening balances, bank feeds, payroll history, vendor/customer lists, inventory, recurring transactions, and report parity. The free Intuit tool moves data; this is how we prove the moved file is actually correct." },
    { q: "Will my historical data and reports survive the move?", a: "Yes — that’s the point of the protocol. Historical transactions are reconciled against bank and credit-card statements, and <strong>report parity</strong> is verified so your P&amp;L and balance sheet match across the old and new files before handoff." },
    { q: "Do you migrate inside my own QuickBooks subscription?", a: "Yes. The operator works in <strong>your own QuickBooks Online (or Enterprise) subscription</strong> as an authorized accountant-user. The file is yours from day one; subscriptions pass through at Intuit list pricing." },
    { q: "Should I migrate now or wait?", a: "<strong>Now.</strong> Desktop 2024 support ends September 30, 2027; as that date nears, industry migration capacity tightens and the rush raises both cost and risk. The cost to migrate doesn’t fall with time. Enterprise customers are exempt from the sunset." },
    { q: "What happens to my Desktop integrations?", a: "Most Desktop integrations have <strong>no direct QBO equivalent</strong>, so they’re replaced with QBO-compatible tools and reconnected — payment processors, payroll, time tracking, inventory, e-commerce — then test transactions verify each one before handoff." },
  ],
  signals: [
    { opener: "You’re running QuickBooks Desktop Pro or Premier.", body: "Intuit’s sunset roadmap applies to you. Migration is a question of timing, not necessity. Moving now is materially easier than moving in 2027 during the industry rush." },
    { opener: "You’re on Wave, Xero, FreshBooks, or Bench.", body: "Cross-platform migration to QuickBooks Online improves CPA compatibility, lender-readiness, and the integration ecosystem. Former Bench clients — after its December 2024 shutdown and relaunch — are a frequent case." },
    { opener: "Your business has outgrown your current QBO tier.", body: "Moving from QBO Simple Start to Plus, or Plus to Advanced, isn’t plug-and-play. New features require new configuration; old data structures often need restructuring." },
    { opener: "Your accountant or new CPA can’t work in your current platform.", body: "Most U.S. CPAs work primarily in QuickBooks Online. If your accountant is asking you to migrate, the business case is already made." },
    { opener: "You’re facing an audit, capital raise, or business sale.", body: "Buyers, investors, and auditors read your books on a modern, cloud-accessible platform. A Desktop file is a friction point; a poorly migrated QBO file is worse." },
    { opener: "Your Desktop integrations are degrading.", body: "Bank feeds breaking, payment-processor compatibility issues, payroll-service warnings. Intuit’s third-party ecosystem is moving to QBO; the Desktop ecosystem is shrinking." },
  ],
  phases: [
    { num: "01", when: "Week 1", name: "Migration Diagnostic & Pre-Audit", body: "A 30-minute call reviews your current platform, years of history, transaction volume, integrations, and structural issues. A pre-migration audit identifies what transfers cleanly and what needs rework. Written fixed-fee scope within 3 business days." },
    { num: "02", when: "Week 2–4", name: "Data Conversion & Restructure", body: "Data converted from Desktop, or rebuilt from scratch for non-QuickBooks sources. Chart of accounts restructured for QBO. Opening balances verified. Customer and vendor records cleaned. Historical transactions reconciled against statements." },
    { num: "03", when: "Week 4–6", name: "Integration Replacement & Configuration", body: "Desktop integrations replaced with QBO-compatible equivalents. Bank feeds reconnected. Payroll history migrated. Sales tax reconfigured for QBO’s different model. Third-party tools reconnected. Test transactions verified." },
    { num: "04", when: "Week 6–8", name: "Verification, Training & CPA Handoff", body: "First-month transactions in QBO reconciled to confirm migration accuracy. Training on QBO interface differences with recorded video. Documented migration summary. CPA coordination for the file transition. Optional continuation into monthly bookkeeping." },
  ],
  // the citable element — the Migration Integrity Protocol (7-point verification)
  integrity: [
    { point: "Opening balances", body: "Every account’s opening balance verified against the source file and prior records as of a defined date." },
    { point: "Bank & credit-card feeds", body: "Every feed reconnected in QBO and confirmed pulling transactions correctly." },
    { point: "Payroll history", body: "Payroll history and year-to-date figures migrated and reconciled to filed returns." },
    { point: "Vendor & customer lists", body: "Vendor and customer records transferred, de-duplicated, and balance-verified." },
    { point: "Inventory", body: "Inventory items, quantities, and valuation method migrated and verified where applicable." },
    { point: "Recurring transactions", body: "Recurring transactions and templates rebuilt in QBO and test-fired." },
    { point: "Report parity", body: "P&L and balance sheet reconciled across the old and new files so the numbers match before handoff." },
  ],
  included: [
    "Pre-migration file audit", "Data conversion (Intuit tool or manual rebuild)", "Chart of accounts review & restructuring",
    "Opening balance verification", "Customer & vendor record cleanup", "Historical transaction reconciliation",
    "Bank & credit card feed reconnection", "Sales tax reconfiguration", "First-month post-migration reconciliation",
    "Training session with recorded video", "Documented migration summary", "CPA-coordinated handoff",
    "30-day post-migration support window",
  ],
  configured: [
    "Multi-year history migration", "Payroll history & YTD migration", "Inventory data migration & valuation",
    "Job costing & project history", "Class & location tracking rebuild", "Multi-entity consolidation rebuild",
    "Payment processor integration replacement", "E-commerce integration replacement", "Time tracking integration replacement",
    "Custom report template recreation", "User permissions & access setup", "Cross-platform migration (Wave, Xero, Bench, etc.)",
  ],
  tiers: [
    { name: "Simple Migration", price: "$2,500–$4,500", per: "", forWhom: "Single-entity Desktop-to-Online, under 3 years of history, few integrations, no inventory, no payroll history.", bullets: ["Pre-migration audit", "Data conversion", "Chart of accounts review", "Bank feed reconnection", "Training & documented handoff", "30-day support window"], cta: "Scope a Simple migration", note: "" },
    { name: "Standard Migration", price: "$4,500–$7,500", per: "", forWhom: "Multi-year history (3–7 years), 3–6 integrations, payroll history, inventory, multi-state sales tax, cross-platform (Wave/Xero/Bench).", bullets: ["Everything in Simple", "Multi-year history reconciliation", "Integration replacement (3–6 tools)", "Payroll history & YTD migration", "Inventory migration", "Multi-state sales tax setup", "CPA-coordinated handoff"], cta: "Scope a Standard migration", note: "Most common" },
    { name: "Complex Migration", price: "$7,500–$10,000+", per: "", forWhom: "Multi-entity, multi-location, industry-specific operations, Enterprise migrations, 6+ integrations, custom report rebuild, full multi-year history.", bullets: ["Everything in Standard", "Multi-entity consolidation rebuild", "Industry-specific configuration", "Job costing & project history", "6+ integration replacements", "Custom report template rebuild", "Enterprise-specific configuration", "Extended CPA & auditor coordination"], cta: "Scope a Complex migration", note: "" },
  ],
  // "What Intuit's migration tool does — and doesn't do." (the free tool = conceded column)
  toolCompare: [
    { dim: "Technical data transfer", us: "Yes — and verified for accuracy", other: "Yes" },
    { dim: "Accuracy review", us: "Every account checked against source", other: "Not performed" },
    { dim: "Chart of accounts redesign", us: "Restructured for QBO’s model", other: "Transferred as-is" },
    { dim: "Desktop integration replacement", us: "Replaced with QBO-compatible tools", other: "Not handled" },
    { dim: "Historical reconciliation", us: "Reconciled to statements", other: "Not performed" },
    { dim: "CPA coordination", us: "Coordinated handoff", other: "None" },
  ],
  operatorSpec: [
    { value: "Certifications", label: "Certified ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Coverage", label: "Desktop & Online migration specialists" },
    { value: "Accountability", label: "Named operator · platform-level quality review · 30-day support" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  nextSteps: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The natural continuation. Same operator, no rework, monthly close runs cleanly in the new platform." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "When migrating from a non-QuickBooks platform, setup work runs alongside migration to build the new file correctly from scratch." },
    { title: "QuickBooks cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "If a prior migration or Desktop file left errors behind, cleanup reconciles and corrects before the new file goes live." },
    { title: "Migrating from Bench?", href: "/contact/?intent=bench-migration", body: "After Bench’s December 2024 shutdown and relaunch, moving off Bench to QBO is a regular cross-platform engagement." },
  ],
  faq: [
    { q: "Why is everyone migrating from QuickBooks Desktop to Online?", a: "Intuit is phasing out Desktop. New-subscription stop-sell was September 30, 2024; Desktop 2023 lost support May 31, 2026; Desktop 2024 loses support September 30, 2027. After end-of-support, payroll tables freeze, bank feeds disconnect, and security patches stop. Enterprise is exempt. Migration is a question of timing, not necessity." },
    { q: "How much does QuickBooks Desktop to Online migration cost?", a: "A fixed one-time engagement, typically $2,500–$10,000+. Simple migrations (single-entity, under 3 years) run $2,500–$4,500; standard (multi-year, 3–6 integrations, payroll) $4,500–$7,500; complex (multi-entity, Enterprise, 6+ integrations) $7,500–$10,000+. The written scope is fixed before work begins." },
    { q: "Can I just use Intuit’s free migration tool?", a: "Intuit’s free tool handles the data transfer but doesn’t review accuracy, redesign the chart of accounts for QBO, replace Desktop integrations, or reconcile history. Most migrations TechBrot delivers exist because the free tool ran but the result wasn’t usable — broken feeds, missing integrations, an unusable chart of accounts, off opening balances." },
    { q: "What does professional QuickBooks migration include?", a: "A pre-migration audit, data conversion, chart-of-accounts review and restructuring, opening-balance verification, customer/vendor cleanup, historical reconciliation, bank-feed reconnection, sales-tax reconfiguration, a first-month reconciliation, training with recorded video, a documented summary, and a CPA-coordinated handoff — verified against the 7-point Migration Integrity Protocol before sign-off." },
    { q: "How long does QuickBooks migration take?", a: "3–8 weeks. Simple migrations run about 3 weeks; standard 4–6; complex 6–8. The timeline is fixed in the written scope before work begins." },
    { q: "Can I migrate from non-QuickBooks platforms?", a: "Yes. Bench shut down December 27, 2024 and relaunched under new ownership after a January 2025 bankruptcy filing — migrating off Bench to QBO is a regular engagement, as are Wave, Xero, and FreshBooks. Cross-platform migration rebuilds the chart of accounts from scratch, so it runs on the higher end." },
    { q: "QuickBooks Enterprise or QuickBooks Online?", a: "Enterprise is exempt from the Desktop sunset and Intuit continues to sell and support it. Most U.S. small and mid-sized businesses are best served by QuickBooks Online; Enterprise fits larger operations needing advanced inventory, industry-specific editions, or up to 40 users. The diagnostic recommends the platform that fits — with no upsell incentive." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#migration-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Desktop-to-Online migration services","serviceType":"Professional QuickBooks migration and data conversion","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"How a TechBrot QuickBooks migration runs","description":"The four-phase QuickBooks migration sequence, from diagnostic to CPA handoff.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"ItemList","@id":url+"#integrity-protocol","name":"The Migration Integrity Protocol — 7-point verification","itemListElement":data.integrity.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.point)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
