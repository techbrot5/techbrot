/* /quickbooks/migration/wave-to-quickbooks/ (exact-match migration page).
 * Mirrors other-software-to-qb structure. DISTINCT ANGLE: deep on Wave
 * specifics — Wave is a free, lightweight tool businesses OUTGROW (no class/
 * location tracking, no real inventory, thin reporting, few integrations,
 * limited multi-user roles). Migration = export customers/vendors/invoices/
 * transactions from Wave, set opening balances at a conversion date, rebuild
 * the chart of accounts properly in QBO, verify back to Wave. Honest: Wave is
 * good for very small/simple businesses — we'll say if you don't need to
 * switch yet. NO fabricated Wave prices (core free; payroll/payments paid —
 * stated qualitatively, specifics deferred to Wave). Canonical migration
 * pricing only: $2,500–$10,000+ (smaller Wave files scope toward low end).
 * Cross-link: umbrella /other-software-to-qb/ + comparison /compare/
 * quickbooks-vs-wave/. t-bofu cobalt. Authorship firm-level; founder schema-
 * only. Not affiliated with Intuit Inc. or Wave. "Migration Integrity
 * Protocol" DefinedTerm where natural. No AggregateRating/Review. */
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
  // "Wave to QuickBooks, in five questions." — quick-5, distinct from FAQ
  aiSummary: [
    { q: "Can you migrate from Wave to QuickBooks?", a: "Yes &mdash; to QuickBooks Online. There&rsquo;s <strong>no one-click Wave-to-QuickBooks converter</strong>, so the engagement is exporting your Wave customers, vendors, invoices, and transactions; setting opening balances at a conversion date; rebuilding a proper chart of accounts in QuickBooks; and verifying the result back against Wave so the books tie." },
    { q: "Why do businesses leave Wave?", a: "Because they outgrow it. Wave is a fine free tool for simple businesses, but it has <strong>no class or location tracking, no real inventory, thin reporting, few integrations, and limited multi-user roles</strong>. The trigger to switch is needing a capability Wave lacks &mdash; not a flaw in Wave itself." },
    { q: "How much of my Wave history transfers?", a: "It depends on your Wave file. Sometimes the detail is worth importing; often the cost-effective path is <strong>opening balances plus open AR/AP</strong> at a cutover date, keeping Wave as a read-only archive. We recommend the balance of completeness versus cost." },
    { q: "How long and how much?", a: "Wave files are often small and clean, so many migrations are quick. Cost is the standard migration range of <strong>$2,500&ndash;$10,000+</strong>, fixed-fee against a written scope &mdash; smaller Wave files often land toward the lower end or scope as a focused setup engagement. Final price follows an assessment." },
    { q: "Should I switch from Wave at all?", a: "Not always. If you&rsquo;re a freelancer or very small service business with simple invoicing and no inventory or department reporting, Wave may already do everything you need. As an independent firm with no incentive to move you, <strong>if Wave still serves you well, we&rsquo;ll say so.</strong>" },
  ],
  // "The capability walls that trigger the switch." — 6 Wave limits (buyer-card grid)
  triggers: [
    { opener: "You need class or location tracking", body: "Wave has no way to tag transactions by department, project, location, or fund. When you need profit-and-loss by segment &mdash; per store, per program, per job &mdash; QuickBooks&rsquo; class and location tracking is usually the single biggest reason to move." },
    { opener: "You&rsquo;re carrying inventory", body: "Wave doesn&rsquo;t do real inventory &mdash; no quantity-on-hand tracking, no cost of goods sold from stock, no reorder visibility. Once you hold product, QuickBooks&rsquo; inventory items, valuation, and COGS handling become necessary rather than nice-to-have." },
    { opener: "You&rsquo;ve outgrown the reporting", body: "Wave&rsquo;s reports cover the basics. When you need budget-vs-actual, customizable financials, deeper management reporting, or reports your lender or board expects, QuickBooks&rsquo; reporting depth is the upgrade." },
    { opener: "You need apps Wave doesn&rsquo;t connect to", body: "Wave&rsquo;s integration list is short. QuickBooks connects to a large app ecosystem &mdash; CRM, e-commerce, expense tools, payroll, time tracking, and more &mdash; so the books stop being an island. Outgrowing integrations is a common, quiet trigger." },
    { opener: "You need real user roles", body: "Wave&rsquo;s multi-user access is limited. As a team grows, you need to control who sees and edits what &mdash; granular permissions for bookkeepers, managers, and your accountant &mdash; which QuickBooks supports far more fully." },
    { opener: "You want a ProAdvisor ecosystem", body: "Far more accountants and bookkeepers work fluently in QuickBooks. Moving onto QuickBooks makes it easier to bring in a Certified ProAdvisor, hand off to a CPA at tax time, or scale into outsourced bookkeeping with a common platform underneath." },
  ],
  // "An honest map of your Wave data." — 6 numbered transfer items (grid-2 + num)
  transfers: [
    { num: "01", name: "Customers &amp; vendors", body: "Your Wave customer and vendor lists export cleanly and are mapped into QuickBooks &mdash; names, contact details, and balances aligned to QuickBooks&rsquo; structure rather than Wave&rsquo;s. This is the part that transfers most directly." },
    { num: "02", name: "Open invoices &amp; bills (AR/AP)", body: "Unpaid invoices and bills are brought in as individual open transactions at the cutover, not as one lump balance &mdash; so you can collect, pay, and reconcile each one in QuickBooks from day one." },
    { num: "03", name: "Transactions &amp; history", body: "Wave transaction detail can be imported where it&rsquo;s worth it, but there&rsquo;s no perfect converter &mdash; how much history comes across is a deliberate scope decision, often opening balances plus current-year detail rather than every prior year." },
    { num: "04", name: "Chart of accounts (rebuilt)", body: "This is rebuilt, not copied. Wave&rsquo;s flat category structure is replaced with a properly designed QuickBooks chart of accounts &mdash; the same <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup discipline</a> as a fresh file &mdash; so the destination fits your business instead of inheriting Wave&rsquo;s shape." },
    { num: "05", name: "Bank feeds &amp; rules (re-established)", body: "Bank and card connections, plus categorization rules, are set up fresh in QuickBooks &mdash; they don&rsquo;t carry over from Wave. We rebuild them so day-to-day entry is at least as fast as it was, usually faster." },
    { num: "06", name: "What doesn&rsquo;t transfer", body: "Reconciliation history, attachments in some cases, and Wave-specific settings generally don&rsquo;t come across &mdash; the old Wave account is kept as a read-only archive for those. We tell you exactly what&rsquo;s archived versus migrated, in writing, before any work begins." },
  ],
  // "Three approaches to your Wave history." — 3 cards (buyer-card grid)
  history: [
    { opener: "Full history", body: "When your Wave file is clean and you genuinely need year-over-year detail inside QuickBooks, multiple years of transaction history can be imported and verified. Worth the added scope when the detail will actually be used." },
    { opener: "Opening balances + current year", body: "The most common and cost-effective path for Wave files: opening balances and open AR/AP at a cutover date plus the current year&rsquo;s detail, with Wave kept as a read-only archive for prior periods. Clean, fast, and trustworthy." },
    { opener: "Clean start", body: "When the Wave data is messy or the history isn&rsquo;t worth migrating, start fresh in QuickBooks with correct opening balances as of the cutover &mdash; often paired with a <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup engagement</a> for a genuinely clean foundation." },
  ],
  // "From Wave to a verified QuickBooks file." — HowTo (process-diagram)
  phases: [
    { num: "01", when: "Typical: 3 business days", name: "Assessment &amp; scope", body: "A ProAdvisor reviews your Wave file, what&rsquo;s pushing you to switch, and how much history you need &mdash; and confirms whether you should switch at all. We then produce a written fixed-fee scope, usually within 3 business days." },
    { num: "02", when: "Typical: 1 week", name: "Build &amp; map", body: "The QuickBooks Online company is built with a proper chart of accounts, and your Wave data is exported and mapped to it. We document the Wave balances first, so there&rsquo;s a baseline to verify the import against." },
    { num: "03", when: "Typical: 1–2 weeks", name: "Import &amp; verify", body: "Customers, vendors, invoices, and transactions imported, opening balances and AR/AP established, and the QuickBooks file reconciled against the Wave totals. Every discrepancy resolved before sign-off &mdash; the Migration Integrity Protocol step." },
    { num: "04", when: "Optional: ongoing engagement", name: "Connect, train &amp; hand off", body: "Bank feeds, rules, and integrations connected, the team trained on QuickBooks workflows, a written summary of what transferred provided, and optional transition to <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> in the new file." },
  ],
  // "Fixed fee, written scope, no hourly billing." — 2 pricing tiers (review-card)
  tiers: [
    { name: "Standard Wave migration", price: "$2,500–$5,000", forWhom: "Single-entity businesses bringing opening balances plus current-year detail from a clean Wave file; many smaller Wave files land at the lower end or as a focused setup.", bullets: ["Wave file assessment &amp; approach", "Customer/vendor/invoice export", "QuickBooks company build", "Opening balances &amp; AR/AP", "Integrity verification to Wave", "Bank feeds &amp; rules rebuilt", "Written transfer summary"], cta: "Scope a Standard migration", note: "Most common" },
    { name: "Complex Wave migration", price: "$5,000–$10,000+", forWhom: "Multiple years of full history, multiple entities, new inventory setup, class/location structure, or extensive integrations and workflow configuration.", bullets: ["Everything in Standard", "Multi-year history import", "Multi-entity migration", "Inventory setup &amp; mapping", "Class/location structure", "Extensive integration rebuild", "Team training sessions"], cta: "Scope a Complex migration", note: "" },
  ],
  // "A Certified ProAdvisor who builds the destination right." — operator trust-row
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Method", label: "Destination built to setup standard; import verified against your Wave file" },
    { value: "Accountability", label: "Named ProAdvisor · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc. or Wave" },
  ],
  // "Reviewed by the TechBrot Certified ProAdvisor team." — review trust-row
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Wave-to-QuickBooks migration · income-tax filing coordinated with your CPA/EA" },
    { value: "Method", label: "Destination built to setup standard; import reconciled to Wave · fixed-fee, written scope" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. or Wave Financial Inc." },
  ],
  // "Related QuickBooks services." — 4 link cards (nextSteps stack-8 pattern)
  nextSteps: [
    { title: "QuickBooks vs Wave: should you switch?", href: "/quickbooks/compare/quickbooks-vs-wave/", body: "Still deciding? The side-by-side comparison walks through who each platform fits &mdash; distinct from this how-to-migrate page." },
    { title: "Migrate to QuickBooks from other software", href: "/quickbooks/migration/other-software-to-qb/?intent=quickbooks-migration", body: "Coming from Xero, FreshBooks, Sage, or spreadsheets instead of Wave? The umbrella page covers cross-platform moves into QuickBooks." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "A clean start in QuickBooks &mdash; the foundation every good Wave migration is built on, and the pairing for a clean-start cutover." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Ongoing close in your new QuickBooks file &mdash; the common next step after leaving Wave, with the same operator." },
  ],
  faq: [
    { q: "Can you migrate from Wave to QuickBooks Online?", a: "Yes. TechBrot Certified ProAdvisors migrate businesses from Wave to QuickBooks Online. There is no Intuit-native or one-click Wave-to-QuickBooks converter, so the engagement is to export your Wave data &mdash; customers, vendors, invoices, and transactions &mdash; establish opening balances as of a chosen conversion date, rebuild a properly structured chart of accounts in QuickBooks, and verify that balances and lists landed correctly against your Wave file. The result is a clean QuickBooks company that ties back to your numbers, not a raw import." },
    { q: "Why would I switch from Wave when it&rsquo;s free?", a: "You shouldn&rsquo;t, unless you&rsquo;ve outgrown it. Wave is a genuinely good free tool for very small and simple businesses. But it has firm limits &mdash; no class or location tracking, no real inventory, thin reporting, a short integration list, and limited multi-user roles &mdash; and outgrowing one of those is the honest reason to move. QuickBooks is paid software, so the trade is capability for cost. If you need the capability, the cost is worth it; if you don&rsquo;t need it yet, staying on Wave is the right call, and we&rsquo;ll tell you so." },
    { q: "What transfers from Wave, and what has to be rebuilt?", a: "Customers and vendors export and map most directly. Open invoices and bills are brought in as individual transactions at the cutover. Transaction history can be imported where it&rsquo;s worth it, but how much is a scope decision. The chart of accounts is rebuilt, not copied &mdash; Wave&rsquo;s flat categories are replaced with a proper QuickBooks structure. Bank feeds and rules are set up fresh; they don&rsquo;t carry over. Reconciliation history and some settings generally don&rsquo;t transfer, so the old Wave account is kept as a read-only archive. We document exactly what migrates versus archives, in writing, before work begins." },
    { q: "How much of my history can I bring into QuickBooks?", a: "It depends on your Wave file and how clean its data is. In some cases full transaction history can be imported; in others the practical and cost-effective approach is to bring opening balances as of a cutover date plus open AR and AP, and start current-year detail in QuickBooks from there, keeping Wave as a read-only archive for prior periods. We assess your file and recommend the approach that balances completeness against cost &mdash; there&rsquo;s rarely value in paying to import years of history you&rsquo;ll never reference." },
    { q: "How much does a Wave-to-QuickBooks migration cost?", a: "Migration is priced by scope, not by the hour. The standard migration range is $2,500 to $5,000, and a complex migration with multiple years of history, multiple entities, new inventory or class/location structure, or extensive integrations runs $5,000 to $10,000 or more. Because Wave files are often small and clean, many Wave migrations land toward the lower end or scope as a focused setup engagement. Every engagement is fixed-fee against a written scope produced after assessing your Wave file. We don&rsquo;t quote a Wave-specific number sight unseen; full pricing is on our pricing page." },
    { q: "Should I switch from Wave to QuickBooks at all?", a: "Not always. If you&rsquo;re a freelancer or very small service business with simple invoicing, a few expense categories, no inventory, no need for class or location reporting, and one or two people in the books, Wave may already do everything you need &mdash; and switching would cost you money for capability you won&rsquo;t use. As an independent firm with no incentive to move you, we assess honestly: if there&rsquo;s a real capability gap QuickBooks closes, we&rsquo;ll scope the migration; if Wave is serving you well, we&rsquo;ll tell you to stay and revisit later. Our QuickBooks vs Wave comparison helps you weigh it." },
    { q: "Will my books be accurate after migrating from Wave?", a: "That&rsquo;s the entire point of doing it with a ProAdvisor rather than a raw export-and-import. The migration includes integrity verification &mdash; our Migration Integrity Protocol records your Wave balances first, then reconciles the balances, AR, AP, and key totals in QuickBooks against them before sign-off, so the new file ties back to the numbers you had. An unverified import is how businesses end up with wrong balances and untrustworthy books; the verification step is what prevents it. We also document everything so your CPA can see exactly what transferred." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/wave-to-quickbooks/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#w2q-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Wave to QuickBooks","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Wave to QuickBooks Migration","serviceType":"Migration from Wave Accounting to QuickBooks Online","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small businesses outgrowing Wave"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Wave-to-QuickBooks migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From Wave to a verified QuickBooks file","description":"The four-phase Wave-to-QuickBooks migration sequence, from assessment to handoff, with verification against the Wave file built in.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
