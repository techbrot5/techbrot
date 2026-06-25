/* /quickbooks/migration/freshbooks-to-quickbooks/ (exact-match migration page).
 * t-bofu. FreshBooks → QuickBooks Online. DISTINCT ANGLE from the generic
 * /quickbooks/migration/other-software-to-qb/ umbrella (linked): goes DEEP on
 * FreshBooks specifics — invoicing/time-tracking-centric, historically lighter
 * double-entry, weaker balance sheet, no real inventory. Migration = export
 * clients/invoices/expenses; map time tracking → QuickBooks Projects; build a
 * proper chart of accounts + opening balances + balance sheet in QB. Trigger =
 * needing real double-entry, a true balance sheet, inventory, or CPA-grade
 * reporting. Fair to FreshBooks (strong for freelancer/service invoicing) — we
 * frame as OUTGROWING it, not disparaging. Accounting-model claims conservative
 * ("historically / lighter plans"), defer specifics to FreshBooks. Cross-link
 * /quickbooks/compare/quickbooks-vs-freshbooks/ (should-you-switch). Canonical
 * pricing ONLY $2,500–$10,000+; NO FreshBooks-specific number. No fabricated
 * stats/clients/reviews; no AggregateRating/Review. Founder schema-only.
 * Independent firm — not affiliated with Intuit Inc. or FreshBooks. We don't
 * file taxes; CPA handles tax. Migration Integrity Protocol DefinedTerm. */
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
  // "FreshBooks to QuickBooks, in five questions." — quick-5, distinct from FAQ
  aiSummary: [
    { q: "Can you migrate from FreshBooks to QuickBooks?", a: "Yes &mdash; to QuickBooks Online. There&rsquo;s <strong>no Intuit-native one-click tool</strong> for FreshBooks, so the engagement is exporting your clients, invoices, and expenses, mapping FreshBooks time tracking to <strong>QuickBooks Projects</strong>, building a proper chart of accounts, setting opening balances, and verifying the new file against your FreshBooks data." },
    { q: "Why do businesses leave FreshBooks for QuickBooks?", a: "FreshBooks is strong for freelancer and service-business <strong>invoicing and time tracking</strong>. Businesses move to QuickBooks when they need what FreshBooks isn&rsquo;t built for: <strong>real double-entry accounting, a true balance sheet, inventory tracking, or accountant-grade reporting</strong>. It&rsquo;s outgrowing the tool, not a flaw in it." },
    { q: "What about my time tracking?", a: "FreshBooks time tracking maps to <strong>QuickBooks Projects</strong>, where time, costs, and profitability live per project. We rebuild your billable-time workflow in QuickBooks so client billing and job costing keep working after the switch." },
    { q: "What transfers and what gets rebuilt?", a: "Clients, invoices, and expenses generally export and import. The <strong>chart of accounts, balance sheet structure, opening balances, and inventory</strong> are built properly in QuickBooks rather than carried across &mdash; because FreshBooks&rsquo; lighter accounting model doesn&rsquo;t map one-to-one. We&rsquo;re honest about both up front." },
    { q: "How long and how much?", a: "<strong>Two to four weeks</strong> for a straightforward single-entity move; longer with multi-year history or inventory. Cost: fixed-fee <strong>$2,500&ndash;$10,000+</strong> against a written scope, with the exact fee set after a free call. See <a href=\"/pricing/\">pricing</a>." },
  ],
  // "The signs you've outgrown FreshBooks." — 6 triggers (buyer-card grid), fair framing
  triggers: [
    { opener: "You need a true balance sheet", body: "FreshBooks centers on invoicing and the profit-and-loss view; a complete, reliable balance sheet has historically been lighter. When you, a lender, or your CPA need a real statement of assets, liabilities, and equity, that&rsquo;s a classic reason to move to QuickBooks&rsquo; full double-entry accounting." },
    { opener: "You&rsquo;re carrying inventory", body: "FreshBooks doesn&rsquo;t offer real inventory tracking. If you buy and sell physical product and need quantity on hand, cost of goods sold, and reorder visibility, QuickBooks Online&rsquo;s inventory features (on the plans that include them) are built for it." },
    { opener: "Your CPA wants accountant-grade reporting", body: "Accountants work in QuickBooks every day. When your CPA or bookkeeper needs standard reports, an accountant&rsquo;s view, and clean double-entry detail to close your books and prepare your return, QuickBooks removes friction FreshBooks can introduce at that stage." },
    { opener: "You need real double-entry detail", body: "FreshBooks historically wasn&rsquo;t a full double-entry system, and lighter plans still favor simplicity over depth. Growing businesses eventually need journal-level control, proper account reconciliation, and audit-ready detail &mdash; the core of what QuickBooks does." },
    { opener: "Your invoicing has outgrown the model", body: "FreshBooks is excellent at simple service invoicing. But progress billing, complex sales tax across jurisdictions, items and services tied to a chart of accounts, and tighter AR controls are where many businesses bump the ceiling and look to QuickBooks." },
    { opener: "You want one system that scales", body: "Plenty of businesses bolt extra tools onto FreshBooks as they grow. QuickBooks&rsquo; larger ecosystem &mdash; payroll, payments, inventory, projects, and a deep app marketplace &mdash; lets you consolidate as you scale rather than patch. We&rsquo;ll tell you honestly if you&rsquo;re not there yet." },
  ],
  // "A clean arrival, not a raw import." — 6 numbered coverage items (FreshBooks-specific)
  coverage: [
    { num: "01", name: "FreshBooks assessment &amp; approach", body: "We review your FreshBooks account &mdash; clients, invoices, expenses, time entries, and what your plan supports for export &mdash; decide how much history to bring versus archive, and recommend the cutover approach that balances completeness against cost before any work begins." },
    { num: "02", name: "Clients, invoices &amp; expenses export", body: "Your FreshBooks clients, invoices, and expenses exported and mapped to QuickBooks&rsquo; customer, transaction, and expense structure &mdash; translated from how FreshBooks stores them to how QuickBooks expects them, not dumped in as a flat list." },
    { num: "03", name: "Real chart of accounts &amp; balance sheet", body: "A proper double-entry chart of accounts built out in QuickBooks &mdash; not inferred from FreshBooks invoice categories &mdash; with the same <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup discipline</a> as a fresh file, so you arrive with a balance sheet that actually balances." },
    { num: "04", name: "Time tracking &rarr; QuickBooks Projects", body: "FreshBooks time tracking mapped to QuickBooks Projects, where billable time, costs, and per-project profitability live. Your billable-time and job-costing workflow is rebuilt in QuickBooks so client billing keeps working after the switch." },
    { num: "05", name: "Opening balances &amp; AR/AP", body: "Opening balances established as of the cutover date and open invoices and bills brought in as individual transactions &mdash; so you can collect, pay, and reconcile from day one rather than inheriting a single lump balance from FreshBooks." },
    { num: "06", name: "Integrity verification to FreshBooks", body: "Balances, AR, AP, and key totals in QuickBooks reconciled against your FreshBooks data before sign-off &mdash; the step a raw export skips, and the one that separates trustworthy books from a guess. This is the heart of our Migration Integrity Protocol." },
  ],
  // "Honest about what comes across." — 3 cards: transfers / rebuilds / archive
  transfers: [
    { opener: "Generally transfers", body: "Clients/contacts, invoices, expenses, and the totals behind them export from FreshBooks and import into QuickBooks with mapping. Where a current-year detail import is worth it, we bring transactions across and verify them against your FreshBooks figures." },
    { opener: "Rebuilt in QuickBooks", body: "The double-entry chart of accounts, balance sheet structure, opening balances, inventory, and time-tracking-to-Projects mapping are built properly in QuickBooks. FreshBooks&rsquo; lighter accounting model doesn&rsquo;t map one-to-one, so rebuilding is more reliable than forcing a carry-over." },
    { opener: "Archived, not migrated", body: "When years of older history aren&rsquo;t worth the cost to import, we keep your FreshBooks account or its exports as a read-only archive for reference and bring opening balances at the cutover instead &mdash; the common, cost-effective choice." },
  ],
  // "From FreshBooks to a verified QuickBooks file." — HowTo (process-diagram) — Migration Integrity Protocol
  phases: [
    { num: "01", when: "Typical: 3 business days", name: "Assessment &amp; scope", body: "A ProAdvisor reviews your FreshBooks account, its export options, and how much history you need. We recommend the approach, confirm what&rsquo;s feasible, and produce a written fixed-fee scope within 3 business days." },
    { num: "02", when: "Typical: 1–2 weeks", name: "Build &amp; map", body: "The QuickBooks Online company is built with a real chart of accounts, and your FreshBooks clients, invoices, and expenses are exported and mapped to it. Time tracking is mapped to QuickBooks Projects. We document FreshBooks balances first, so there&rsquo;s a baseline to verify against." },
    { num: "03", when: "Typical: 1–3 weeks", name: "Import &amp; verify", body: "Data imported, opening balances and AR/AP established, and the QuickBooks file reconciled against your FreshBooks totals. Every discrepancy resolved before sign-off &mdash; the verification core of the Migration Integrity Protocol." },
    { num: "04", when: "Optional: ongoing engagement", name: "Connect, train &amp; hand off", body: "Payments, payroll, and app integrations connected, your team trained on QuickBooks workflows, a written summary of what transferred provided, and optional transition to <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> in the new file." },
  ],
  // "Fixed fee, written scope, no hourly billing." — 2 pricing tiers (canonical range only)
  tiers: [
    { name: "Standard migration", price: "$2,500–$5,000", forWhom: "Single-entity service businesses bringing clients, invoices, expenses, and current-year detail from FreshBooks.", bullets: ["FreshBooks assessment &amp; approach", "Clients, invoices &amp; expenses export", "Real chart of accounts &amp; balance sheet", "Time tracking mapped to QuickBooks Projects", "Opening balances &amp; AR/AP", "Integrity verification to FreshBooks", "Written transfer summary"], cta: "Scope a Standard migration", note: "Most common" },
    { name: "Complex migration", price: "$5,000–$10,000+", forWhom: "Multiple years of full history, multiple entities, inventory to establish, or extensive integrations and workflow setup.", bullets: ["Everything in Standard", "Multi-year history import", "Multi-entity migration", "Inventory setup in QuickBooks", "Extensive integration rebuild", "Full workflow configuration", "Team training sessions"], cta: "Scope a Complex migration", note: "" },
  ],
  // operator trust-row
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Method", label: "Real chart of accounts built; FreshBooks data verified against the source" },
    { value: "Accountability", label: "Named ProAdvisor · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc. or FreshBooks" },
  ],
  // review trust-row
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "FreshBooks to QuickBooks migration · income-tax filing coordinated with your CPA/EA" },
    { value: "Method", label: "Chart of accounts built to setup standard; import reconciled to FreshBooks · fixed-fee, written scope" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. or FreshBooks" },
  ],
  // "Related QuickBooks services." — 4 link cards (incl. cross-link to /compare/ + generic umbrella)
  nextSteps: [
    { title: "QuickBooks vs FreshBooks comparison", href: "/quickbooks/compare/quickbooks-vs-freshbooks/", body: "Still deciding whether to switch? Our head-to-head comparison covers the should-you-move question &mdash; this page is the how-to-migrate once you&rsquo;ve decided." },
    { title: "Other software to QuickBooks", href: "/quickbooks/migration/other-software-to-qb/", body: "Coming from Xero, Wave, Sage, spreadsheets, or a custom system instead of FreshBooks? The general cross-platform migration guide covers those moves." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "A clean start in QuickBooks &mdash; the foundation every good migration is built on, and the pairing for a clean-start cutover off FreshBooks." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Ongoing close in your new QuickBooks file &mdash; the common next step after leaving FreshBooks, with the same operator." },
  ],
  faq: [
    { q: "Can you migrate my data from FreshBooks to QuickBooks?", a: "Yes. TechBrot Certified ProAdvisors migrate businesses from FreshBooks to QuickBooks Online. Because this is a cross-platform move, there is no Intuit-native one-click tool &mdash; your FreshBooks clients, invoices, and expenses are exported and mapped to QuickBooks&rsquo; structure, your time tracking is mapped to QuickBooks Projects, a proper chart of accounts and opening balances are established, and the new file is reconciled against your FreshBooks data before sign-off." },
    { q: "Why would I switch from FreshBooks to QuickBooks?", a: "FreshBooks is genuinely strong for freelancer and service-business invoicing, expense capture, and time tracking, so this isn&rsquo;t about it being a bad tool. Businesses move to QuickBooks when they need what FreshBooks isn&rsquo;t built for: real double-entry accounting, a true balance sheet, inventory tracking, or accountant-grade reporting. If FreshBooks still serves you well, we&rsquo;ll say so &mdash; we have no incentive to move you. If you&rsquo;re still weighing it, our QuickBooks vs FreshBooks comparison covers the decision in detail." },
    { q: "What happens to my FreshBooks time tracking in QuickBooks?", a: "FreshBooks time tracking maps to QuickBooks Projects, where billable time, costs, and per-project profitability are tracked together. We rebuild your billable-time and job-costing workflow in QuickBooks so client billing keeps working after the switch &mdash; rather than leaving you to recreate it manually. Exactly how it&rsquo;s configured depends on the QuickBooks Online plan you choose and how you bill time today." },
    { q: "Will my balance sheet and chart of accounts come across from FreshBooks?", a: "We build them properly in QuickBooks rather than carrying them across. FreshBooks centers on invoicing and a profit-and-loss view, and its accounting model has historically been lighter than full double-entry, so a balance sheet and chart of accounts don&rsquo;t map one-to-one. Building them to setup standard in QuickBooks &mdash; with correct opening balances at the cutover date &mdash; is more reliable than forcing a carry-over, and it&rsquo;s why the new file arrives with a balance sheet that actually balances. For exactly what your current FreshBooks plan supports, defer to FreshBooks&rsquo; own documentation." },
    { q: "How much historical data can I bring from FreshBooks?", a: "It depends on your FreshBooks plan&rsquo;s export options and how clean the data is. In some cases current-year (and recent prior-year) detail can be imported and verified; in others the practical, cost-effective approach is to bring opening balances and open AR/AP as of a chosen cutover date and keep FreshBooks or its exports as a read-only archive for older periods. We assess your account and recommend the balance of completeness versus cost &mdash; there&rsquo;s rarely value in paying to import years of detail you&rsquo;ll never reference." },
    { q: "Does FreshBooks handle inventory, and what happens to it in QuickBooks?", a: "FreshBooks doesn&rsquo;t offer real inventory tracking, so if you carry inventory it&rsquo;s set up fresh in QuickBooks rather than migrated. QuickBooks Online supports inventory tracking on the plans that include it &mdash; quantity on hand, cost of goods sold, and item-level detail. Establishing your items, quantities, and values at the cutover date is part of a complex migration. We&rsquo;ll scope this in writing once we see what you carry." },
    { q: "How much does it cost to migrate from FreshBooks to QuickBooks?", a: "The migration is priced by scope, not by hour. A standard single-entity migration &mdash; clients, invoices, expenses, current-year detail, a real chart of accounts, and core setup &mdash; typically runs $2,500 to $5,000. A complex migration with multiple years of history, multiple entities, inventory to establish, or extensive integrations runs $5,000 to $10,000 or more. Every engagement is fixed-fee against a written scope, and the exact fee is set after a free call. See our pricing page for the full picture." },
    { q: "Will my data be accurate after migrating to QuickBooks?", a: "That&rsquo;s the entire point of doing it with a ProAdvisor rather than a raw export. The migration includes integrity verification &mdash; balances, AR, AP, and key totals in QuickBooks are reconciled against your FreshBooks data before sign-off, so the new file ties back to the numbers you had. A raw export or unverified conversion is how businesses end up with wrong balances and untrustworthy books; the verification step is what prevents it, and it&rsquo;s the core of our Migration Integrity Protocol." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/freshbooks-to-quickbooks/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#f2q-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"FreshBooks to QuickBooks","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"FreshBooks to QuickBooks Migration","serviceType":"Migration from FreshBooks to QuickBooks Online — clients, invoices, expenses, time tracking to Projects, chart of accounts and balance sheet","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. freelancers, service businesses, and small businesses outgrowing FreshBooks"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"FreshBooks to QuickBooks migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From FreshBooks to a verified QuickBooks file","description":"The four-phase FreshBooks-to-QuickBooks migration sequence, from assessment to handoff, with verification against your FreshBooks data built in.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@id":"https://techbrot.com/frameworks/migration-integrity-protocol/#term"},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
