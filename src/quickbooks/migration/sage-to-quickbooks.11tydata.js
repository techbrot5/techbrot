/* /quickbooks/migration/sage-to-quickbooks/ (exact-match, high-intent).
 * Keyword: "sage to quickbooks / switch from sage to quickbooks" — ON-BRAND
 * (into QuickBooks). t-bofu cobalt. DISTINCT ANGLE vs the generic
 * /quickbooks/migration/other-software-to-qb/ umbrella (linked): goes DEEP on
 * Sage specifics — Sage is a FAMILY (Sage 50 / Sage 50cloud, Sage Business
 * Cloud Accounting, Sage Intacct, Sage 100); common SMB move is Sage 50 → QBO.
 * Sage's nominal-code / fixed-chart / departments structure differs from QB's
 * named chart + classes/locations. Migration = export CoA/nominal ledger,
 * customers/vendors, open transactions; map nominal codes → QB chart of
 * accounts; departments → classes/locations; opening balances at a conversion
 * date VERIFIED to the Sage trial balance. Trigger = cloud, cost, ecosystem,
 * leaving desktop Sage. Honest: Sage Intacct is a different (mid-market) tier —
 * if a business needs that, QBO may not fit; say so. Defer Sage product/pricing
 * to Sage; NO fabricated Sage pricing. Canonical migration price $2,500–$10,000+
 * only (see /pricing/). Cross-link /quickbooks/compare/quickbooks-vs-sage/
 * (should-you-switch). "Migration Integrity Protocol" DefinedTerm. CTA:
 * QB-migration BOFU — phone tertiary. Authorship firm-level; founder
 * schema-only. Independent firm — not affiliated with Intuit Inc. or Sage.
 * We don't file taxes; CPA handles tax. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Certified QuickBooks ProAdvisor credentials" — checks-list
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
  ],
  // "Sage to QuickBooks, in five questions." — quick-5, distinct from FAQ
  // (which-Sage / why-it-takes-work / nominal-codes-mapping / how-much+how-long / should-I-switch)
  aiSummary: [
    { q: "Which Sage can you migrate from?", a: "All of them &mdash; but &ldquo;Sage&rdquo; is a <strong>family</strong>, and which one matters. We migrate <strong>Sage 50 / Sage 50cloud</strong>, <strong>Sage Business Cloud Accounting</strong>, and <strong>Sage 100</strong> to QuickBooks Online. <strong>Sage Intacct</strong> is a different, mid-market tier &mdash; if your business genuinely needs Intacct-level capability, QuickBooks may not be the right fit, and we&rsquo;ll tell you honestly." },
    { q: "Why isn&rsquo;t it a one-click move?", a: "There&rsquo;s <strong>no Intuit-native tool</strong> that pulls Sage into QuickBooks, and the structures differ. Sage organizes the books around <strong>nominal codes</strong> and a fixed chart layout, often with departments; QuickBooks uses a named chart of accounts with classes and locations. The data has to be exported, mapped between those models, imported, and verified." },
    { q: "What happens to my nominal codes?", a: "Your Sage <strong>nominal codes are mapped to a QuickBooks chart of accounts</strong>, and any <strong>departments map to classes or locations</strong>. We build the destination chart deliberately rather than dumping codes in raw &mdash; so the accounts are named, structured, and usable on day one, and the trial balance still ties." },
    { q: "How much history, how long, how much?", a: "Often the cost-effective path is <strong>opening balances plus open AR/AP</strong> at a conversion date, with Sage kept as a read-only archive; full history is possible when the export is clean and you need it. Timeline: <strong>two to four weeks</strong> straightforward, four to eight complex. Cost: <strong>$2,500&ndash;$5,000 standard</strong>, <strong>$5,000&ndash;$10,000+ complex</strong>, fixed-fee against a written scope." },
    { q: "Should I leave Sage at all?", a: "Not always. Sage is strong for certain mid-market and industry-specific needs, and Sage Intacct is a genuinely different tier. As an independent firm with no incentive to move you, we&rsquo;ll weigh it honestly &mdash; if Sage serves you well, we won&rsquo;t sell you a migration you don&rsquo;t need. For the head-to-head, see <a href=\"/quickbooks/compare/quickbooks-vs-sage/\">QuickBooks vs Sage</a>." },
  ],
  // "Sage is a family — the move depends on which." — Sage products (buyer-card grid)
  products: [
    { opener: "Sage 50 &amp; Sage 50cloud", body: "The most common SMB move &mdash; Sage 50 (formerly Peachtree) and Sage 50cloud to QuickBooks Online. Desktop-rooted, organized around nominal codes and a fixed chart with departments. We export the chart of accounts and nominal ledger, customers, vendors, items, and open transactions, then map them into QuickBooks and reconcile to the Sage trial balance." },
    { opener: "Sage Business Cloud Accounting", body: "Sage&rsquo;s cloud small-business product (formerly Sage One). Already online, so the trigger is usually ecosystem and app fit rather than &ldquo;getting to the cloud.&rdquo; We export the chart, contacts, and open balances, map the structure to QuickBooks, and rebuild bank feeds and rules in the new file." },
    { opener: "Sage 100", body: "A more capable mid-tier ERP-leaning product (formerly MAS 90/200). Migrations here need a careful look at modules, customizations, and inventory before scoping &mdash; the source assessment confirms what exports cleanly and what rebuilds, and whether QuickBooks Online or a more capable QuickBooks edition is the right destination." },
    { opener: "Sage Intacct — a different tier", body: "Sage Intacct is mid-market, multi-entity financial-management software &mdash; a genuinely higher tier than QuickBooks Online. If your business truly needs Intacct-level capability (deep multi-entity consolidation, dimensional reporting, complex revenue recognition), QuickBooks may not be the right fit. We&rsquo;ll say so plainly rather than sell a downgrade." },
  ],
  // "A clean arrival, not a raw import." — 6 numbered coverage items (grid-2 + stack-8/num)
  coverage: [
    { num: "01", name: "Sage product &amp; source assessment", body: "We confirm exactly which Sage product you run, review its export options and data, decide how much nominal-ledger history to bring versus archive, and recommend the conversion-date approach &mdash; before any work begins." },
    { num: "02", name: "Nominal code &rarr; chart of accounts mapping", body: "The core of a Sage migration. Sage&rsquo;s nominal codes and fixed chart layout are mapped to a deliberately structured QuickBooks chart of accounts, and Sage departments are mapped to QuickBooks classes or locations &mdash; not dumped in raw." },
    { num: "03", name: "Lists, customers &amp; vendors", body: "Customers, vendors, and item lists exported from Sage and rebuilt in QuickBooks with the right detail &mdash; so AR, AP, and items behave correctly rather than arriving as flat, unusable records." },
    { num: "04", name: "Opening balances &amp; open AR/AP", body: "Opening balances established as of the conversion date, with open invoices and bills brought in as individual transactions &mdash; so you can collect, pay, and reconcile from day one rather than inheriting a single lump balance." },
    { num: "05", name: "Verification to the Sage trial balance", body: "The QuickBooks file reconciled against your <strong>Sage trial balance</strong> &mdash; balances, AR, AP, and key totals tied back to the source before sign-off. This is the step a raw export skips, and the one that separates trustworthy books from a guess." },
    { num: "06", name: "Integrations &amp; training", body: "Bank feeds, payments, payroll, and app integrations connected for QuickBooks, sales tax reconfigured for QuickBooks&rsquo; model, plus team training on the new workflows so leaving Sage is a step forward, not a stumble." },
  ],
  // "Honest about what comes across." — 3 cards (buyer-card grid)
  transfers: [
    { opener: "What typically transfers", body: "Chart of accounts (mapped from nominal codes), customer and vendor lists, item lists, opening balances at the conversion date, and open AR/AP as individual transactions. With a clean Sage export and the scope to support it, multiple years of transaction detail can come across too." },
    { opener: "What usually rebuilds", body: "Bank feeds and bank rules, recurring transactions and templates, custom report layouts, user permissions, and integration connections generally rebuild in QuickBooks rather than transfer. Sage&rsquo;s department structure rebuilds as QuickBooks classes or locations. We set these up as part of the engagement." },
    { opener: "What stays in Sage", body: "When prior-year detail isn&rsquo;t worth migrating, it stays archived in your Sage file as a read-only record &mdash; the cost-effective default for most businesses. We&rsquo;ll never claim Sage history transferred when it didn&rsquo;t; what comes across is documented in the scope and the transfer summary." },
  ],
  // "From your Sage file to a verified QuickBooks file." — HowTo (process-diagram)
  phases: [
    { num: "01", when: "Typical: 3 business days", name: "Assessment &amp; scope", body: "A ProAdvisor confirms which Sage product you run, reviews its export options and how much nominal-ledger history you need, recommends the approach, and produces a written fixed-fee scope within 3 business days." },
    { num: "02", when: "Typical: 1–2 weeks", name: "Build &amp; map", body: "The QuickBooks Online company is built and the Sage data exported and mapped &mdash; nominal codes to a QuickBooks chart of accounts, departments to classes or locations. We document the Sage trial balance first, so there&rsquo;s a baseline to verify against." },
    { num: "03", when: "Typical: 1–3 weeks", name: "Import &amp; verify", body: "Data imported, opening balances and open AR/AP established at the conversion date, and the QuickBooks file reconciled against the Sage trial balance. Every discrepancy resolved before sign-off." },
    { num: "04", when: "Optional: ongoing engagement", name: "Connect, train &amp; hand off", body: "Integrations connected, team trained on QuickBooks workflows, a written summary of what transferred from Sage provided, and optional transition to <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> in the new file." },
  ],
  // "Fixed fee, written scope, no hourly billing." — 2 pricing tiers (review-card)
  tiers: [
    { name: "Standard Sage migration", price: "$2,500–$5,000", forWhom: "Single-entity Sage 50 or Sage Business Cloud businesses bringing opening balances plus current-year detail from a clean source file.", bullets: ["Sage product &amp; source assessment", "Nominal code to chart-of-accounts mapping", "Customers, vendors &amp; item lists", "Opening balances &amp; open AR/AP", "Verification to the Sage trial balance", "Core integrations connected", "Written transfer summary"], cta: "Scope a Standard migration", note: "Most common" },
    { name: "Complex Sage migration", price: "$5,000–$10,000+", forWhom: "Multiple years of full history, multiple entities, Sage 100 or inventory, or extensive integrations and workflow setup.", bullets: ["Everything in Standard", "Multi-year nominal-ledger history", "Multi-entity migration", "Inventory migration &amp; setup", "Sage 100 module review", "Extensive integration rebuild", "Team training sessions"], cta: "Scope a Complex migration", note: "" },
  ],
  // "A Certified ProAdvisor who maps Sage to QuickBooks right." — operator trust-row
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Method", label: "Nominal codes mapped to a QuickBooks chart of accounts; import verified to the Sage trial balance" },
    { value: "Accountability", label: "Named ProAdvisor · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc. or Sage" },
  ],
  // "Reviewed by the TechBrot Certified ProAdvisor team." — review trust-row
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Sage to QuickBooks migration · income-tax filing coordinated with your CPA/EA" },
    { value: "Method", label: "Nominal codes mapped to QuickBooks; import reconciled to the Sage trial balance · fixed-fee, written scope" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. or Sage" },
  ],
  // "Related QuickBooks services." — 4 link cards (nextSteps stack-8 pattern)
  nextSteps: [
    { title: "QuickBooks vs Sage — should you switch?", href: "/quickbooks/compare/quickbooks-vs-sage/", body: "Still deciding whether to leave Sage at all? The head-to-head comparison weighs the two honestly &mdash; including where Sage is the better fit &mdash; before you commit to a migration." },
    { title: "Migrate from other software", href: "/quickbooks/migration/other-software-to-qb/?intent=quickbooks-migration", body: "Coming from Xero, FreshBooks, Wave, or spreadsheets instead of Sage? The cross-platform migration umbrella covers the broader move into QuickBooks." },
    { title: "Desktop to Online migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "Already on QuickBooks Desktop? That&rsquo;s a same-platform conversion with its own Intuit tooling &mdash; a different engagement from leaving Sage." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "A clean start in QuickBooks &mdash; the foundation every good migration is built on, and the pairing for a clean-start cutover off Sage." },
  ],
  faq: [
    { q: "Which Sage products can you migrate to QuickBooks?", a: "&ldquo;Sage&rdquo; is a family of different products, and the migration path depends on which one you run. We migrate Sage 50 and Sage 50cloud (formerly Peachtree), Sage Business Cloud Accounting, and Sage 100 to QuickBooks Online &mdash; the most common move being Sage 50 to QuickBooks Online. Sage Intacct is a different, mid-market tier of software; if your business genuinely needs Intacct-level capability, QuickBooks may not be the right fit, and we&rsquo;ll say so rather than sell a downgrade. The first step in any Sage migration is confirming exactly which product you&rsquo;re on, because it changes the scope and the path." },
    { q: "Is there a one-click tool to move Sage into QuickBooks?", a: "No. There is no Intuit-native one-click tool that pulls Sage into QuickBooks, and Sage&rsquo;s data structure doesn&rsquo;t line up with QuickBooks on its own. Sage organizes the books around nominal codes and a fixed chart layout, often with departments, while QuickBooks uses a named chart of accounts with classes and locations. The migration is to export the chart of accounts and nominal ledger, customers, vendors, items, and open transactions; map them to QuickBooks&rsquo; structure; establish opening balances at a conversion date; and verify the result against your Sage trial balance. That mapping and verification is the engagement &mdash; not a button." },
    { q: "What happens to my Sage nominal codes in QuickBooks?", a: "Your Sage nominal codes are mapped to a QuickBooks chart of accounts, and any Sage departments are mapped to QuickBooks classes or locations. Rather than dumping codes in raw, we build the destination chart deliberately &mdash; named, structured accounts that match how your business actually reports &mdash; so the file is usable on day one and the trial balance still ties. This nominal-code-to-chart-of-accounts mapping is the structural heart of a Sage migration and the main reason it takes real work rather than a simple import." },
    { q: "How much of my Sage history can I bring into QuickBooks?", a: "It depends on which Sage product you&rsquo;re on and how clean the export is. In some cases multiple years of transaction history can be imported and verified; in many cases the practical and cost-effective approach is to bring opening balances as of a chosen conversion date plus open AR and AP, start fresh in QuickBooks from there, and keep the Sage file as a read-only archive for prior periods. We assess your Sage data and recommend the balance of completeness versus cost &mdash; there&rsquo;s rarely value in paying to import years of history you&rsquo;ll never reference inside QuickBooks." },
    { q: "How long does a Sage to QuickBooks migration take, and what does it cost?", a: "A straightforward migration &mdash; a clean Sage 50 or Sage Business Cloud file, a single entity, opening balances plus current-year detail &mdash; typically completes in two to four weeks. Multiple years of full history, multiple entities, Sage 100, inventory, or heavy integrations extend that to four to eight weeks. On cost, a standard single-entity migration typically runs $2,500 to $5,000, and a complex one runs $5,000 to $10,000 or more. Every engagement is fixed-fee against a written scope produced from a source-data assessment &mdash; there&rsquo;s no hourly billing and no Sage-specific surcharge we invent." },
    { q: "Should I switch from Sage to QuickBooks at all?", a: "Not always. Sage is strong for certain mid-market and industry-specific needs, and Sage Intacct in particular is a genuinely higher tier than QuickBooks Online &mdash; if you need that level of multi-entity or dimensional capability, leaving for QuickBooks would be a downgrade. The common triggers for switching are moving to the cloud, cost, ecosystem and app fit, or leaving desktop Sage behind, and for many small businesses QuickBooks Online is a clear improvement. As an independent firm with no incentive to move you, we&rsquo;ll assess it honestly: if QuickBooks is the better fit we&rsquo;ll scope the migration; if Sage is serving you well we&rsquo;ll say so. The <a href=\"/quickbooks/compare/quickbooks-vs-sage/\">QuickBooks vs Sage comparison</a> walks through the decision in detail." },
    { q: "Will my data be accurate after migrating from Sage?", a: "That&rsquo;s the entire point of doing it with a ProAdvisor rather than a raw export. The migration includes verification against your Sage trial balance &mdash; the balances, AR, AP, and key totals in QuickBooks are reconciled back to the source before sign-off, so the new file ties to the numbers you had in Sage. We call this discipline the Migration Integrity Protocol: a documented map from Sage to QuickBooks plus a reconciliation that proves the new file ties out. An unverified export is how businesses end up with wrong balances and untrustworthy books; the verification step is what prevents it." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/sage-to-quickbooks/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#s2q-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Sage to QuickBooks","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Sage to QuickBooks Migration","serviceType":"Migration to QuickBooks Online from Sage 50, Sage Business Cloud Accounting, and Sage 100","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses on Sage"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Sage to QuickBooks migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From your Sage file to a verified QuickBooks file","description":"The four-phase Sage-to-QuickBooks migration sequence, from assessment to handoff, with the conversion verified against the Sage trial balance built in.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"DefinedTerm","@id":url+"#migration-integrity-protocol","name":"Migration Integrity Protocol","description":"TechBrot's documented method for migrating from Sage to QuickBooks: a mapped record from each Sage nominal code to its QuickBooks chart-of-accounts destination, plus a reconciliation that verifies the new QuickBooks file ties back to the source Sage trial balance before sign-off.","inDefinedTermSet":{"@id":"https://techbrot.com/#glossary"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
