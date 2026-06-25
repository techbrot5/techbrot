/* /quickbooks/migration/xero-to-quickbooks/ (Xero-specific migration, distinct
 * from the generic other-software-to-qb umbrella). t-bofu cobalt. Exact-match
 * keyword: "xero to quickbooks migration / switch from xero to quickbooks" —
 * high-intent switcher already moving TO QuickBooks (on-brand). DEEP on Xero
 * specifics: NO native Xero→QBO converter, so export + map + rebuild + verify.
 * Carries over: chart of accounts, contacts (customers/suppliers), open
 * invoices/bills, manual journals. Doesn't carry cleanly: bank transactions +
 * reconciliation history — handled via opening balances at a conversion date.
 * Xero tracking categories → QuickBooks classes/locations; repeating invoices +
 * bank rules rebuilt in QB; opening balances tied to Xero's trial balance at
 * cutover (Migration Integrity Protocol — TechBrot's coined DefinedTerm).
 * Honest: no seamless/lossless overclaim. Price $2,500–$10,000+ (one-time,
 * ~3–8 wks), range only, exact fixed fee in writing after free discovery call.
 * Cross-links: /quickbooks/compare/quickbooks-vs-xero/ (should-you-switch),
 * other-software-to-qb (umbrella), quickbooks-to-xero (honest reverse).
 * Founder schema-only. Not affiliated with Intuit Inc. or Xero. No CPA tax
 * filing. No AggregateRating/Review schema. */
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
  // "Xero to QuickBooks, in five questions." — quick-5, distinct from FAQ
  aiSummary: [
    { q: "Is there a tool that moves Xero into QuickBooks automatically?", a: "No &mdash; there&rsquo;s <strong>no Intuit-native one-click Xero-to-QuickBooks converter</strong>. The move is to export your Xero data, map it to QuickBooks&rsquo; structure, rebuild what doesn&rsquo;t export (repeating invoices, bank rules), and verify the result. Some data is brought in as opening balances rather than re-imported transaction by transaction." },
    { q: "What carries over from Xero, and what doesn&rsquo;t?", a: "<strong>Carries over:</strong> chart of accounts, contacts (customers and suppliers), open invoices, open bills, and manual journals. <strong>Doesn&rsquo;t come across cleanly:</strong> bank transactions and reconciliation history &mdash; handled with opening balances at a conversion date. Tracking categories, repeating invoices, and bank rules are rebuilt natively in QuickBooks." },
    { q: "What happens to my Xero tracking categories?", a: "Xero <strong>tracking categories</strong> map to QuickBooks <strong>classes or locations</strong> &mdash; QuickBooks&rsquo; equivalent for segmenting income and expenses. We translate each category so your departmental, location, or project reporting carries through to the new file." },
    { q: "How long and how much?", a: "<strong>Three to eight weeks</strong> depending on entities, history, and tracking complexity. Cost: <strong>$2,500&ndash;$10,000+</strong>, one-time and fixed-fee against a written scope produced after a free discovery call. Always a range up front; the exact fixed fee is confirmed in writing once we&rsquo;ve seen the Xero file." },
    { q: "Should I switch from Xero to QuickBooks at all?", a: "Not always. As an independent firm we&rsquo;ll say so honestly &mdash; see <a href=\"/quickbooks/compare/quickbooks-vs-xero/\">QuickBooks vs Xero</a> for the comparison. We also do the reverse (<a href=\"/quickbooks/migration/quickbooks-to-xero/?intent=quickbooks-migration\">QuickBooks to Xero</a>), so we have no incentive to push the move &mdash; if Xero serves you well, we&rsquo;ll tell you." },
  ],
  // "Carries over, rebuilt, or doesn't come across." — 3 honest buckets (buyer-card grid)
  transfers: [
    { opener: "Carries over from Xero", body: "Your <strong>chart of accounts</strong>, <strong>contacts</strong> (customers and suppliers), <strong>open invoices</strong>, <strong>open bills</strong>, and <strong>manual journals</strong> export from Xero and map into QuickBooks. These are the lists and balances that define your books &mdash; they come across and are reconciled to the source." },
    { opener: "Rebuilt natively in QuickBooks", body: "<strong>Tracking categories</strong> become QuickBooks <strong>classes or locations</strong>; <strong>repeating invoices</strong> and <strong>bank rules</strong> are recreated in QuickBooks because the two systems handle them differently. These don&rsquo;t port &mdash; they&rsquo;re set up fresh so they work the QuickBooks way, not patched in." },
    { opener: "Doesn&rsquo;t come across cleanly", body: "<strong>Bank transactions and reconciliation history</strong> don&rsquo;t translate out of Xero &mdash; reconciled lines are tied to Xero&rsquo;s bank statement model. We handle this with <strong>opening balances at a conversion date</strong> and keep Xero as a read-only archive for prior detail. No &ldquo;seamless&rdquo; claim &mdash; this is the honest limit." },
  ],
  // "A clean arrival from Xero, not a raw import." — 6 numbered coverage items
  coverage: [
    { num: "01", name: "Xero file assessment &amp; conversion date", body: "We review your Xero organisation &mdash; entities, tracking categories, chart of accounts, how much history you want &mdash; and set a <strong>conversion date</strong>: the cutover at which QuickBooks takes over and opening balances are struck. Decided before any work begins." },
    { num: "02", name: "Lists &amp; contacts mapping", body: "Xero&rsquo;s chart of accounts and contacts mapped to QuickBooks &mdash; Xero&rsquo;s single contact list split into QuickBooks&rsquo; customers and vendors, account types translated, and items and tax rates set up to match QuickBooks&rsquo; model." },
    { num: "03", name: "Tracking categories &rarr; classes/locations", body: "Each Xero <strong>tracking category</strong> rebuilt as a QuickBooks <strong>class or location</strong> so your segmented reporting &mdash; by department, location, or project &mdash; carries through. Mapped deliberately, since QuickBooks structures this differently than Xero." },
    { num: "04", name: "Open invoices, bills &amp; journals", body: "<strong>Open invoices and open bills</strong> brought in as individual transactions so AR and AP age correctly from day one, and <strong>manual journals</strong> carried over. You can collect and pay in QuickBooks immediately, not inherit a single lump balance." },
    { num: "05", name: "Opening balances tied to Xero&rsquo;s trial balance", body: "Bank, credit-card, and all account opening balances established at the conversion date and <strong>reconciled to Xero&rsquo;s trial balance</strong> before sign-off &mdash; because reconciliation history doesn&rsquo;t carry, this verification is what makes the new file trustworthy." },
    { num: "06", name: "Rebuild repeating items, rules &amp; integrations", body: "<strong>Repeating invoices</strong> and <strong>bank rules</strong> rebuilt in QuickBooks, bank feeds and payments reconnected, sales tax reconfigured for QuickBooks&rsquo; model, and team trained on the new workflows so the switch is a step forward." },
  ],
  // "From your Xero file to a verified QuickBooks company." — HowTo (process-diagram)
  phases: [
    { num: "01", when: "Typical: 3 business days", name: "Assess &amp; scope", body: "A ProAdvisor reviews your Xero file, its tracking categories and history, and sets the conversion date. We confirm what carries over versus what gets rebuilt, then produce a written fixed-fee scope within 3 business days." },
    { num: "02", when: "Typical: 1–2 weeks", name: "Build QuickBooks &amp; map Xero", body: "The QuickBooks Online company is built to setup standard, and Xero&rsquo;s chart of accounts, contacts, and items are mapped to it. We document Xero&rsquo;s trial balance at the conversion date first, as the baseline to verify against." },
    { num: "03", when: "Typical: 1–3 weeks", name: "Import, set balances &amp; verify", body: "Open invoices, open bills, and journals imported; tracking categories rebuilt as classes or locations; opening balances established and <strong>reconciled to Xero&rsquo;s trial balance</strong>. Every discrepancy resolved before sign-off." },
    { num: "04", when: "Optional: ongoing engagement", name: "Rebuild rules, train &amp; hand off", body: "Repeating invoices and bank rules rebuilt, integrations connected, team trained, and a written summary of what transferred provided &mdash; with optional transition to <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> in the new QuickBooks file." },
  ],
  // "Fixed fee, written scope, no hourly billing." — 2 pricing tiers (review-card)
  tiers: [
    { name: "Standard Xero migration", price: "$2,500–$5,000", forWhom: "Single-entity Xero organisations bringing chart of accounts, contacts, open AR/AP, and opening balances at a conversion date.", bullets: ["Xero file assessment &amp; conversion date", "Chart of accounts &amp; contacts mapping", "Tracking categories &rarr; classes/locations", "Open invoices, bills &amp; journals", "Opening balances tied to Xero&rsquo;s TB", "Repeating invoices &amp; bank rules rebuilt", "Written transfer summary"], cta: "Scope a Standard Xero migration", note: "Most common" },
    { name: "Complex Xero migration", price: "$5,000–$10,000+", forWhom: "Multiple Xero entities, extensive tracking categories, multi-year detail, inventory, or heavy app integrations.", bullets: ["Everything in Standard", "Multi-entity Xero migration", "Extensive tracking-category mapping", "Multi-year detail where feasible", "Inventory migration &amp; setup", "Extensive integration rebuild", "Team training sessions"], cta: "Scope a Complex Xero migration", note: "" },
  ],
  // "A Certified ProAdvisor who knows both systems." — operator trust-row
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Method", label: "QuickBooks built to setup standard; opening balances verified against Xero&rsquo;s trial balance" },
    { value: "Accountability", label: "Named ProAdvisor · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc. or Xero" },
  ],
  // "Reviewed by the TechBrot Certified ProAdvisor team." — review trust-row
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Xero-to-QuickBooks migration · income-tax filing coordinated with your CPA/EA" },
    { value: "Method", label: "Opening balances reconciled to Xero&rsquo;s trial balance · fixed-fee, written scope" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. or Xero Limited" },
  ],
  // "Related QuickBooks services." — 4 link cards
  nextSteps: [
    { title: "QuickBooks vs Xero", href: "/quickbooks/compare/quickbooks-vs-xero/", body: "Not sure you should switch yet? The honest comparison of QuickBooks and Xero &mdash; features, pricing, and fit &mdash; before you commit to the move." },
    { title: "Migrating from a different platform?", href: "/quickbooks/migration/other-software-to-qb/?intent=quickbooks-migration", body: "Coming from FreshBooks, Wave, Sage, spreadsheets, or another system instead of Xero? The umbrella migration page covers cross-platform moves to QuickBooks." },
    { title: "QuickBooks to Xero", href: "/quickbooks/migration/quickbooks-to-xero/?intent=quickbooks-migration", body: "We do the reverse too. If you&rsquo;re weighing leaving QuickBooks for Xero, we&rsquo;ll tell you honestly whether you should &mdash; and do it right if you do." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Ongoing close in your new QuickBooks file &mdash; the common next step after migrating from Xero, with the same operator." },
  ],
  faq: [
    { q: "Is there a tool that migrates Xero to QuickBooks automatically?", a: "No. There is no Intuit-native one-click converter that moves a Xero organisation into QuickBooks Online &mdash; the two systems structure data differently. The migration is to export your Xero data, map it to QuickBooks&rsquo; chart of accounts and list structure, rebuild what doesn&rsquo;t export (such as repeating invoices and bank rules), and verify the result. Some data, including bank transactions and reconciliation history, is handled with opening balances at a conversion date rather than re-imported line by line. Doing it with a Certified ProAdvisor is what produces a file you can trust rather than a partial import." },
    { q: "What data carries over from Xero, and what doesn&rsquo;t?", a: "Carries over: your chart of accounts, contacts (customers and suppliers), open invoices, open bills, and manual journals &mdash; the lists and balances that define your books. Rebuilt natively in QuickBooks: tracking categories (which become classes or locations), repeating invoices, and bank rules, because QuickBooks handles these differently than Xero. Does not come across cleanly: bank transactions and reconciliation history &mdash; Xero ties reconciled lines to its own bank statement model, so these are handled with opening balances established at a conversion date, with Xero kept as a read-only archive for prior detail. We&rsquo;re honest about this up front &mdash; no &ldquo;seamless&rdquo; or &ldquo;lossless&rdquo; claim." },
    { q: "What happens to my Xero tracking categories in QuickBooks?", a: "Xero tracking categories map to QuickBooks classes or locations &mdash; QuickBooks&rsquo; equivalent mechanism for segmenting income and expenses by department, location, or project. We translate each tracking category deliberately, since the two systems structure segmentation differently, so the departmental or project reporting you relied on in Xero carries through to the new QuickBooks file rather than being lost in the move." },
    { q: "How long does a Xero to QuickBooks migration take?", a: "A straightforward single-entity Xero migration &mdash; chart of accounts, contacts, open AR/AP, opening balances at a conversion date, and a modest set of tracking categories &mdash; typically completes in three to four weeks. Multiple entities, extensive tracking categories, multi-year detail, inventory, or heavy integrations extend that to roughly six to eight weeks. The timeline is fixed in the written scope before work begins, after we&rsquo;ve reviewed your Xero file." },
    { q: "How much does it cost to switch from Xero to QuickBooks?", a: "A Xero-to-QuickBooks migration is a one-time, fixed-fee engagement priced by scope, not by hour. A standard single-entity migration typically runs $2,500 to $5,000; a complex migration with multiple entities, extensive tracking categories, multi-year history, inventory, or heavy integrations runs $5,000 to $10,000 or more. We always quote a range up front and confirm the exact fixed fee in writing after a free discovery call where we see your actual Xero file. See our pricing page for how migration pricing fits the rest of our services." },
    { q: "Should I switch from Xero to QuickBooks at all?", a: "Not always. QuickBooks Online fits most U.S. small and mid-sized businesses, but Xero genuinely serves some workflows well. As an independent firm &mdash; and one that also migrates QuickBooks to Xero &mdash; we have no incentive to push you either direction, so we&rsquo;ll assess your situation honestly. If QuickBooks is a clear improvement, we&rsquo;ll scope the migration; if Xero is serving you well, we&rsquo;ll tell you. The QuickBooks vs Xero comparison lays out the trade-offs if you&rsquo;re still deciding." },
    { q: "Can I talk to a ProAdvisor before committing to a Xero migration?", a: "Yes — start with a free discovery call, no obligation. A Certified ProAdvisor reviews your actual Xero file, sets a conversion date, confirms what carries over versus what gets rebuilt, and sends a written fixed-fee scope within 3 business days. Call (877) 751-5575 or <a href=\"/contact/?intent=quickbooks-migration\">book the call</a>. Still deciding whether to switch? The <a href=\"/quickbooks/compare/quickbooks-vs-xero/\">QuickBooks vs Xero comparison</a> lays out the trade-offs first." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/xero-to-quickbooks/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#x2q-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Xero to QuickBooks","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Xero to QuickBooks Migration","serviceType":"Migration from Xero to QuickBooks Online — export, map, rebuild, and verify against Xero's trial balance","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses on Xero"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Xero to QuickBooks migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From your Xero file to a verified QuickBooks company","description":"The four-phase Xero-to-QuickBooks migration sequence, from assessment to handoff, with opening balances verified against Xero's trial balance built in.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
