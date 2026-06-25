/* /quickbooks/migration/other-software-to-qb/ (MIGRATION-PROTOCOL elevation).
 * Sources: FROZEN CONTRACT (contract-qb-othersw.txt — 44 headings, 7 FAQ) +
 * quickbooks/migration/other-software-to-qb/index.html (BODY PROSE only).
 * t-bofu cobalt. Cross-platform migration to QuickBooks Online from Xero,
 * FreshBooks, Wave, Sage, spreadsheets, or a custom system. Honest framing:
 * NO Intuit-native one-click tool; partial third-party converters (e.g. Intuit
 * recommends a Dataswitcher-assisted conversion for Xero) don't carry payroll/
 * reconciliation history and don't verify — exporting, mapping, building, and
 * VERIFYING against the source is the engagement. Price $2,500–$10,000+.
 * quick-5 additive, zero overlap with FAQ. CTA: QB-migration BOFU — phone
 * tertiary permitted. Authorship firm-level; founder schema-only. Independent
 * firm — not affiliated with Intuit Inc. or any source platform. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Certified QuickBooks ProAdvisor credentials" — checks-list (cleanup pattern)
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
  ],
  // "Migrating to QuickBooks, in five questions." — quick-5, distinct from FAQ
  // (no-native-tool / Desktop-vs-other / how-much-history / how-long+cost / should-I-switch)
  aiSummary: [
    { q: "Can you migrate from Xero, FreshBooks, Wave, or Sage?", a: "Yes &mdash; to QuickBooks Online from Xero, FreshBooks, Wave, Sage, other software, and spreadsheets. Unlike a Desktop-to-Online conversion, there&rsquo;s <strong>no Intuit-native one-click tool</strong>; partial third-party converters exist but don&rsquo;t carry payroll or reconciliation history and don&rsquo;t verify. Exporting, mapping, importing, and verifying the source data is the engagement." },
    { q: "How is it different from Desktop-to-Online?", a: "<a href=\"/quickbooks/migration/?intent=quickbooks-migration\">Desktop-to-Online</a> moves between two QuickBooks products, so Intuit&rsquo;s tool automates most of it. A different platform has <strong>no native equivalent</strong> &mdash; data structures differ, so it&rsquo;s exported, mapped to QuickBooks&rsquo; chart-of-accounts and list structure, and imported with verification, even where a third-party converter helps." },
    { q: "How much history can I bring?", a: "Depends on the source. Sometimes <strong>full history</strong> imports; often the cost-effective path is <strong>opening balances plus open AR/AP</strong> at a cutover date, keeping the old system as a read-only archive. We recommend the balance of completeness versus cost &mdash; there&rsquo;s rarely value in paying to import years of messy history you&rsquo;ll never reference." },
    { q: "How long and how much?", a: "<strong>Two to four weeks</strong> for a straightforward single-entity move; four to eight for multi-year, multi-entity, inventory, or heavy integrations. Cost: <strong>$2,500&ndash;$5,000 standard</strong>, <strong>$5,000&ndash;$10,000+ complex</strong>. Fixed-fee against a written scope after a source-data assessment." },
    { q: "Should I switch at all?", a: "Not always. QuickBooks fits most U.S. small businesses, but not every one. As an independent firm with no incentive to move you, we&rsquo;ll say so honestly &mdash; <strong>if your current software serves you well, we won&rsquo;t sell you a migration you don&rsquo;t need.</strong>" },
  ],
  // "Coming from one of these? We've done it." — 6 source platforms (buyer-card grid)
  sources: [
    { opener: "Xero to QuickBooks", body: "The most common cross-platform move. Xero&rsquo;s chart of accounts, contacts, and transaction structure mapped to QuickBooks &mdash; with a Dataswitcher-assisted conversion where it fits &mdash; and balances and AR/AP reconciled to the source. (Intuit points Xero users to a Dataswitcher-assisted path; it covers roughly the current plus one or two prior fiscal years and rolls older periods into an opening balance.) <a href=\"/quickbooks/migration/xero-to-quickbooks/\">See the full Xero to QuickBooks migration &rarr;</a>" },
    { opener: "FreshBooks to QuickBooks", body: "Businesses outgrowing FreshBooks&rsquo; invoicing-first model. Clients, invoices, expenses, and balances brought into a full double-entry QuickBooks structure &mdash; with the chart of accounts built out properly rather than inferred from invoice categories. <a href=\"/quickbooks/migration/freshbooks-to-quickbooks/\">See the full FreshBooks to QuickBooks migration &rarr;</a>" },
    { opener: "Wave to QuickBooks", body: "Moving off Wave for more capability or integrations. Customers, vendors, transactions, and opening balances migrated and verified in QuickBooks Online, with the bank feeds and rules rebuilt for the new file. <a href=\"/quickbooks/migration/wave-to-quickbooks/\">See the full Wave to QuickBooks migration &rarr;</a>" },
    { opener: "Sage to QuickBooks", body: "Sage 50, Sage Business Cloud, or Sage Intacct to QuickBooks. Chart of accounts, lists, and balances mapped and reconciled across the structural differences between Sage&rsquo;s nominal-ledger model and QuickBooks. <a href=\"/quickbooks/migration/sage-to-quickbooks/\">See the full Sage to QuickBooks migration &rarr;</a>" },
    { opener: "Spreadsheets to QuickBooks", body: "Graduating from Excel or Google Sheets to real accounting software. Opening balances established, customer/vendor/item lists built, and a clean QuickBooks structure set up from scratch &mdash; often paired with a <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup engagement</a>." },
    { opener: "Other software or a custom system", body: "Industry-specific tools, legacy systems, or anything that can export data. If it produces a usable export, we can map it into QuickBooks &mdash; the source-data assessment confirms what&rsquo;s feasible before any scope is written." },
  ],
  // "A clean arrival, not a raw import." — 6 numbered coverage items (grid-2 + stack-8/num)
  coverage: [
    { num: "01", name: "Source assessment &amp; approach", body: "We review your current software&rsquo;s data and export options, decide how much history to bring versus archive, and recommend the cutover approach that balances completeness against cost &mdash; before any work begins." },
    { num: "02", name: "Export &amp; mapping", body: "Source data exported &mdash; via a third-party converter where one fits, or by direct export &mdash; and mapped to QuickBooks&rsquo; structure: chart of accounts, customers, vendors, items, and transactions translated from how your old system stored them to how QuickBooks expects them." },
    { num: "03", name: "QuickBooks company build", body: "A properly structured QuickBooks Online company built to receive the data &mdash; the same <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup discipline</a> as a fresh file, so you&rsquo;re not importing into a default template that fights your business." },
    { num: "04", name: "Opening balances &amp; AR/AP", body: "Opening balances established as of the cutover date and open invoices and bills brought in as individual transactions &mdash; so you can collect, pay, and reconcile from day one rather than inheriting a single lump balance." },
    { num: "05", name: "Integrity verification", body: "Balances, AR, AP, and key totals in QuickBooks reconciled against the source system before sign-off &mdash; the step a raw tool conversion skips, and the one that separates trustworthy books from a guess. Intuit itself recommends a ProAdvisor verify the data after any third-party conversion." },
    { num: "06", name: "Integrations &amp; training", body: "Bank feeds, payments, payroll, and app integrations connected for QuickBooks, sales tax reconfigured for QuickBooks&rsquo; model, plus team training on the new workflows so the switch is a step forward, not a stumble." },
  ],
  // "Three approaches to your historical data." — 3 cards (buyer-card grid)
  history: [
    { opener: "Full history", body: "When the source data is clean and the platform exports it well, multiple years of transaction history can be imported and verified. Best when you genuinely need year-over-year detail inside QuickBooks &mdash; and worth the added scope to get it." },
    { opener: "Opening balances + current year", body: "The most common and cost-effective path: bring opening balances and open AR/AP at a cutover date plus the current year&rsquo;s detail, and keep the old system as a read-only archive for prior periods. Clean, fast, and trustworthy." },
    { opener: "Clean start", body: "When the source data is messy or the history isn&rsquo;t worth migrating, start fresh in QuickBooks with correct opening balances as of the cutover. Often paired with a <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup engagement</a> for a genuinely clean foundation." },
  ],
  // "From your old software to a verified QuickBooks file." — HowTo (process-diagram)
  phases: [
    { num: "01", when: "Typical: 3 business days", name: "Assessment &amp; scope", body: "A ProAdvisor reviews your current software, its export options, and how much history you need. We recommend the approach, confirm what&rsquo;s feasible, and produce a written fixed-fee scope within 3 business days." },
    { num: "02", when: "Typical: 1–2 weeks", name: "Build &amp; map", body: "The QuickBooks Online company is built and the source data exported and mapped to it. We document the source balances first, so there&rsquo;s a baseline to verify the import against." },
    { num: "03", when: "Typical: 1–3 weeks", name: "Import &amp; verify", body: "Data imported, opening balances and AR/AP established, and the QuickBooks file reconciled against the source totals. Every discrepancy resolved before sign-off." },
    { num: "04", when: "Optional: ongoing engagement", name: "Connect, train &amp; hand off", body: "Integrations connected, team trained on QuickBooks workflows, a written summary of what transferred provided, and optional transition to <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> in the new file." },
  ],
  // "Fixed fee, written scope, no hourly billing." — 2 pricing tiers (review-card)
  tiers: [
    { name: "Standard migration", price: "$2,500–$5,000", forWhom: "Single-entity businesses bringing opening balances plus current-year detail from a clean source file.", bullets: ["Source assessment &amp; approach", "Export &amp; mapping", "QuickBooks company build", "Opening balances &amp; AR/AP", "Integrity verification to source", "Core integrations connected", "Written transfer summary"], cta: "Scope a Standard migration", note: "Most common" },
    { name: "Complex migration", price: "$5,000–$10,000+", forWhom: "Multiple years of full history, multiple entities, inventory, or extensive integrations and workflow setup.", bullets: ["Everything in Standard", "Multi-year history import", "Multi-entity migration", "Inventory migration &amp; setup", "Extensive integration rebuild", "Full workflow configuration", "Team training sessions"], cta: "Scope a Complex migration", note: "" },
  ],
  // "A Certified ProAdvisor who builds the destination right." — operator trust-row
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Method", label: "Destination built to setup standard; import verified against the source" },
    { value: "Accountability", label: "Named ProAdvisor · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc. or any source platform" },
  ],
  // "Reviewed by the TechBrot Certified ProAdvisor team." — review trust-row
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Cross-platform migration to QuickBooks · income-tax filing coordinated with your CPA/EA" },
    { value: "Method", label: "Destination built to setup standard; import reconciled to the source · fixed-fee, written scope" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. or any source-platform vendor" },
  ],
  // "Related QuickBooks services." — 4 link cards (nextSteps stack-8 pattern)
  nextSteps: [
    { title: "Desktop to Online migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "Already on QuickBooks Desktop? That&rsquo;s a same-platform conversion with its own Intuit tooling &mdash; a different engagement from a cross-platform move." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "A clean start in QuickBooks &mdash; the foundation every good migration is built on, and the pairing for a clean-start cutover." },
    { title: "QuickBooks to Xero", href: "/contact/?intent=quickbooks-migration", body: "Considering the reverse move, away from QuickBooks? We&rsquo;ll tell you honestly whether you should &mdash; and do it right if you do." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Ongoing close in your new QuickBooks file &mdash; the common next step after migrating, with the same operator." },
  ],
  faq: [
    { q: "Can you migrate to QuickBooks from Xero, FreshBooks, Wave, or Sage?", a: "Yes. TechBrot Certified ProAdvisors migrate businesses to QuickBooks Online from Xero, FreshBooks, Wave, Sage, and other accounting software, as well as from spreadsheets. Unlike a same-platform Desktop-to-Online conversion, moving from a different software has no Intuit-native one-click tool. Partial third-party converters exist (for example, Intuit recommends a Dataswitcher-assisted conversion for Xero), but they don&rsquo;t carry everything &mdash; payroll and reconciliation history typically don&rsquo;t transfer &mdash; and they don&rsquo;t verify the result. Exporting and mapping the source data, building a properly structured QuickBooks Online company, and verifying that balances and lists landed correctly is the core of the engagement." },
    { q: "How is this different from a Desktop-to-Online migration?", a: "A Desktop-to-Online migration moves between two QuickBooks products, so Intuit&rsquo;s conversion tool handles most of the data automatically. Migrating from a different platform like Xero or FreshBooks has no equivalent native tool &mdash; the data structures differ, so it must be exported, mapped to QuickBooks&rsquo; chart of accounts and list structure, and imported with verification. Even where a third-party converter helps, some data (such as payroll and reconciliation history) doesn&rsquo;t transfer, and the converted file still has to be reconciled to the source. The right approach depends on your source software and how much history you need." },
    { q: "How much historical data can I bring into QuickBooks?", a: "It depends on the source software and the cleanliness of its data. In some cases full transaction history can be imported; in others the practical and cost-effective approach is to bring opening balances as of a chosen cutover date plus open AR and AP, and start fresh in QuickBooks from there, keeping the old system as a read-only archive for prior periods. Some converters (like Dataswitcher for Xero) cover roughly the current plus one or two prior fiscal years and roll older periods into an opening balance. We assess your source data and recommend the approach that balances completeness against cost &mdash; there&rsquo;s rarely value in paying to import years of messy history you&rsquo;ll never reference." },
    { q: "How long does it take to migrate to QuickBooks?", a: "A straightforward migration &mdash; a clean source file, a single entity, opening balances plus current-year detail &mdash; typically completes in two to four weeks. Bringing multiple years of full history, multiple entities, inventory, or heavy integrations extends that to four to eight weeks. The largest variables are how much history you want and how clean the source data is. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost to migrate to QuickBooks from other software?", a: "Migration from another platform is priced by scope, not by hour. A standard single-entity migration &mdash; opening balances, current-year detail, lists, and core setup &mdash; typically runs $2,500 to $5,000. A complex migration with multiple years of history, multiple entities, inventory, or extensive integrations runs $5,000 to $10,000 or more. Every engagement is fixed-fee against a written scope produced from an assessment of your source data." },
    { q: "Should I switch from my current software to QuickBooks at all?", a: "Not always. QuickBooks Online is the right fit for most U.S. small and mid-sized businesses, but not every one &mdash; some workflows are genuinely better served by the platform you&rsquo;re on. As an independent firm with no incentive to move you, we&rsquo;ll assess your situation honestly: if QuickBooks is a clear improvement, we&rsquo;ll scope the migration; if your current software is serving you well, we&rsquo;ll say so rather than sell a move you don&rsquo;t need." },
    { q: "Can I talk to a ProAdvisor before committing to a migration?", a: "Yes — start with a free source-data assessment call, no obligation. A Certified ProAdvisor reviews your current software&rsquo;s export options, recommends how much history to bring versus archive, and sends a written fixed-fee scope within 3 business days. Call (877) 751-5575 or <a href=\"/contact/?intent=quickbooks-migration\">book the call</a>. Already on QuickBooks Desktop? That&rsquo;s a different, same-platform <a href=\"/quickbooks/migration/desktop-to-online/?intent=quickbooks-migration\">Desktop-to-Online</a> conversion." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/other-software-to-qb/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#othersw-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Other software to QuickBooks","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Migrate to QuickBooks from other software","serviceType":"Cross-platform migration to QuickBooks Online from Xero, FreshBooks, Wave, Sage, and spreadsheets","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Cross-platform QuickBooks migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From your old software to a verified QuickBooks file","description":"The four-phase cross-platform QuickBooks migration sequence, from assessment to handoff, with verification against the source built in.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
