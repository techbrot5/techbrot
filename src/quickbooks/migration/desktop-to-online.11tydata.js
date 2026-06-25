/* /quickbooks/migration/desktop-to-online/ (MIGRATION-PROTOCOL elevation).
 * Sources: FROZEN contract (contract-qb-desktoponline.txt — 44 headings, 7 FAQ)
 * + quickbooks/migration/desktop-to-online/index.html (BODY PROSE only). t-bofu,
 * cobalt vocabulary copied from the PARENT migration hub (src/quickbooks/
 * migration.njk + .11tydata.js) and src/quickbooks/cleanup.njk. Real
 * Desktop->Online content: the QB Desktop sunset timeline, what transfers vs
 * what rebuilds, integrity + reconciliation verification against the Desktop
 * baseline, opening balances tied to a conversion date, payroll + sales-tax
 * re-setup. Desktop sunset dates are factual (Intuit): subscription-only since
 * 2022 versions, new-subscriber stop-sell Sep 30 2024, Desktop 2023 support end
 * May 31 2026, Desktop 2024 (last non-Enterprise) Sep 30 2027, Enterprise
 * exempt; inventory weighted-average -> FIFO. Price $2,500-$10,000+ (matches
 * baseline FAQ). Authorship firm-level; founder schema-only (David Westgate in
 * reviewedBy @id only). Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // H2 "Certified QuickBooks ProAdvisor credentials" — both platforms a migration spans
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
  ],
  // "Desktop to Online migration, in five questions." — AEO quick-5, distinct from FAQ
  aiSummary: [
    { q: "Can you migrate Desktop to Online?", a: "Yes. The migration converts your Desktop company file to a QuickBooks Online company &mdash; chart of accounts, lists, customers, vendors, transaction history. Intuit&rsquo;s tool copies the data; a ProAdvisor handles the <strong>verification, reconciliation, app rebuild, and workflow reconfiguration</strong> that make the file usable." },
    { q: "What doesn&rsquo;t transfer?", a: "<strong>Reconciliation reports, some memorized reports and templates, certain payroll detail, audit-trail history, recurring transactions, customized forms, and some inventory detail.</strong> Inventory also re-bases (Desktop weighted-average &rarr; QBO FIFO), and Desktop&rsquo;s class/job structure maps differently to Online&rsquo;s class/location/project model. A proper migration rebuilds the essentials." },
    { q: "Is historical data preserved?", a: "Transaction history transfers but must be <strong>verified, not assumed</strong> &mdash; conversion can drop, duplicate, or misclassify items. We compare trial balances and key reports between Desktop and the converted Online file and reconcile differences before sign-off." },
    { q: "How long and how much?", a: "<strong>Two to four weeks</strong> for a standard migration; four to eight for complex or multi-entity. Cost: roughly <strong>$2,500&ndash;$5,000 standard</strong>, <strong>$5,000&ndash;$10,000+ complex</strong>. Fixed-fee against written scope; pre-migration cleanup scoped separately if needed." },
    { q: "Free tool or ProAdvisor?", a: "Intuit&rsquo;s tool does the raw conversion free and can suffice for a simple clean file. But conversion is the easy 20%; the <strong>verification, reconciliation, integration rebuild, and training</strong> are the 80% that decide whether the file works. A ProAdvisor owns the whole outcome." },
  ],
  // "Desktop is a declining platform. Plan the move on your terms." — six signal cards
  // (H3s frozen verbatim by contract)
  signals: [
    { opener: "Desktop is subscription-only now.", body: "The one-time perpetual license ended with the 2022 versions. As of 2024, every Desktop edition &mdash; Pro Plus, Premier Plus, Enterprise &mdash; is an annual subscription. The buy-it-once Desktop era is over." },
    { opener: "New Desktop sales stopped Sep 30, 2024.", body: "On September 30, 2024 Intuit stopped selling new Desktop Pro Plus, Premier Plus, and Mac Plus subscriptions to U.S. customers. Existing subscribers can still renew, but new buyers are routed to Online or Enterprise." },
    { opener: "Support ends version by version.", body: "Each Desktop version gets roughly three years of support. Desktop 2023 lost support on May 31, 2026; Desktop 2024 &mdash; the last non-Enterprise release &mdash; ends September 30, 2027. After that, payroll tables, bank feeds, and security updates stop." },
    { opener: "New features land in Online first.", body: "Intuit concentrates new functionality, integrations, and AI features in QuickBooks Online. Desktop increasingly receives maintenance, not innovation." },
    { opener: "Forced moves go badly.", body: "Migrating because a version sunset gave you no choice means rushing. Migrating now, deliberately, means doing it right with time to verify everything &mdash; before the industry rush as the 2027 date nears." },
    { opener: "But Desktop still wins sometimes.", body: "Heavy inventory, certain industry-specific workflows, or Enterprise-only features can still favor staying &mdash; Enterprise is exempt from the sunset. We&rsquo;ll tell you honestly if that&rsquo;s you, rather than pushing a move." },
  ],
  // "The conversion is 20%. This is the other 80%." — six scope items (H3s frozen)
  scope80: [
    { num: "01", name: "Pre-migration assessment", body: "We review the Desktop file first &mdash; size, integrity, list count, inventory method, customizations &mdash; and flag anything that needs <a href=\"/quickbooks/cleanup/?intent=qb-cleanup\">cleanup</a> before conversion. Migrating a broken file just moves the problems." },
    { num: "02", name: "Data conversion", body: "The actual Desktop-to-Online conversion, run correctly &mdash; chart of accounts, customers, vendors, items, and transaction history moved into a properly prepared Online company." },
    { num: "03", name: "Integrity verification", body: "Trial balance, account balances, and key reports compared between the documented Desktop baseline and the converted Online file. Every discrepancy investigated &mdash; not a hope that the copy worked." },
    { num: "04", name: "Reconciliation validation", body: "Reconciled status verified and opening balances confirmed as of the conversion date, so your first Online reconciliation starts from a known-good baseline instead of inherited drift." },
    { num: "05", name: "App &amp; integration rebuild", body: "Bank feeds reconnected; payroll, payments, receipt-capture, e-commerce, and reporting apps reconnected and reconfigured for Online. Sales tax re-set up for QBO&rsquo;s automated model. The integrations the tool simply drops." },
    { num: "06", name: "Workflow rebuild &amp; training", body: "Online works differently &mdash; classes, locations, projects, recurring transactions, user roles all reconfigured to match how you operate, plus team training so the new file is usable from day one." },
  ],
  // "What transfers, what doesn't, and what we rebuild." — three columns (H3s frozen)
  transfer: [
    { name: "Transfers cleanly", body: "Chart of accounts, customers and vendors, most lists, item lists, and transaction history (invoices, bills, payments, journal entries). Reconciled <em>status</em> on transactions. Open balances. The core ledger comes across &mdash; it just has to be verified." },
    { name: "Doesn&rsquo;t transfer", body: "<strong>Reconciliation reports, many memorized reports and templates, certain payroll detail, full audit-trail history, recurring transaction setups, customized forms, and some inventory detail.</strong> Inventory re-bases from weighted-average to FIFO, and Desktop&rsquo;s class/job structure maps differently to Online&rsquo;s class/location/project model." },
    { name: "We rebuild in Online", body: "The essentials that don&rsquo;t convert &mdash; key reports recreated, recurring transactions re-established, forms rebranded, classes/locations/projects reconfigured, payroll and sales tax re-set up, and integrations reconnected &mdash; so nothing critical is lost in the move, even when the tool drops it." },
  ],
  // "From Desktop file to a verified Online company." — four phases (H3s frozen)
  phases: [
    { num: "01", when: "Typical: 3 business days", name: "Assessment &amp; scope", body: "30-minute call plus a review of your Desktop file. We identify file condition, what won&rsquo;t transfer, integration scope, and any cleanup needed. We also confirm who should move now and who is genuinely better served staying on Desktop or Enterprise. Written fixed-fee scope within 3 business days." },
    { num: "02", when: "Typical: 1&ndash;2 weeks", name: "Prep &amp; convert", body: "Pre-migration cleanup if needed, Online company prepared, conversion run. We document the Desktop baseline (trial balance, key reports, account balances) and set a defined conversion date before converting, so we have something exact to validate against." },
    { num: "03", when: "Typical: 1&ndash;3 weeks", name: "Verify &amp; rebuild", body: "Integrity verification against the Desktop baseline, reconciliation validation, opening balances tied to the conversion date, app and integration reconnection, payroll and sales-tax re-setup, workflow and reporting rebuild. Every discrepancy resolved before sign-off." },
    { num: "04", when: "Optional: ongoing engagement", name: "Train &amp; hand off", body: "Team training on the new Online workflows, a written summary of what transferred and what was rebuilt, and optional transition to <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> in the new file." },
  ],
  // "Fixed fee, written scope, no hourly billing." — two tiers (H3s frozen)
  tiers: [
    { name: "Standard migration", price: "$2,500&ndash;$5,000", forWhom: "Single-entity businesses with a reasonably clean Desktop file and standard integrations.", bullets: ["Pre-migration assessment", "Data conversion", "Full integrity verification", "Reconciliation validation", "Bank feed &amp; core app reconnection", "Essential workflow rebuild", "Written transfer summary"], cta: "Scope a Standard migration", note: "Most common" },
    { name: "Complex migration", price: "$5,000&ndash;$10,000+", forWhom: "Large files, multiple entities, heavy integrations, inventory complexity, or full workflow rebuild and team training.", bullets: ["Everything in Standard", "Multi-entity migration", "Large-file &amp; inventory handling", "Extensive app-stack rebuild", "Full workflow reconfiguration", "Custom reporting rebuild", "Team training sessions"], cta: "Scope a Complex migration", note: "" },
  ],
  // "What transfers, what doesn't" rendered as a vs-table (Professional migration vs Intuit free tool)
  toolCompare: [
    { dim: "Data conversion", us: "Run correctly into a prepared Online company", other: "Yes" },
    { dim: "Integrity verification", us: "Trial balance &amp; reports checked vs the Desktop baseline", other: "Not performed" },
    { dim: "Reconciliation validation", us: "Opening balances confirmed to the conversion date", other: "Not performed" },
    { dim: "What doesn&rsquo;t transfer", us: "Reports, recurring, forms, inventory rebuilt in Online", other: "Dropped silently" },
    { dim: "App &amp; bank-feed rebuild", us: "Feeds, payroll, payments, e-commerce reconnected", other: "Not handled" },
    { dim: "Payroll &amp; sales tax", us: "Re-set up for Online&rsquo;s different model", other: "Not handled" },
    { dim: "Workflow &amp; training", us: "Classes/locations/projects rebuilt, team trained", other: "None" },
  ],
  // "A Certified ProAdvisor on both platforms." — operator trust-row
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online (L2) and Desktop, the two platforms a migration spans" },
    { value: "Verification", label: "Trial-balance & key-report comparison, Desktop baseline vs converted Online" },
    { value: "Accountability", label: "Named operator · platform-level quality review · written transfer summary" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  // "Related QuickBooks services." — four links (H3s frozen)
  related: [
    { title: "All migration services", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "The migration hub &mdash; reverse moves, other-software switches, cross-platform conversions, and the 7-point Migration Integrity Protocol." },
    { title: "Balances wrong after conversion", href: "/quickbooks/migration/balances-wrong-after-conversion/?intent=quickbooks-migration", body: "If a prior conversion left the numbers off, this is the focused post-migration fix." },
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "Where a broken Desktop file gets repaired before conversion. Often paired with migration." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Ongoing close in your new Online file &mdash; the common next step after migration." },
  ],
  // 7 FAQ — verbatim QUESTIONS + verbatim ANSWERS from the FROZEN contract (append-only)
  faq: [
    { q: "Can you migrate QuickBooks Desktop to QuickBooks Online?", a: "Yes. A QuickBooks Desktop to Online migration converts your Desktop company file into a QuickBooks Online company, transferring your chart of accounts, lists, customers, vendors, and transaction history. Intuit provides an automated conversion tool, but the tool moves data without verifying it landed correctly, rebuilding workflows, or reconnecting integrations. A ProAdvisor-led migration handles the conversion plus the verification, reconciliation, app rebuild, and workflow reconfiguration that determine whether the new file is actually usable." },
    { q: "What does NOT transfer from Desktop to Online?", a: "Several things do not convert cleanly: reconciliation reports (only the reconciled status of transactions carries, not the reports themselves), some memorized reports and templates, certain payroll detail and prior payroll data, audit-trail history beyond what Online retains, recurring transaction setups, customized forms, and some inventory detail. Inventory also re-bases because Desktop uses weighted-average costing while QuickBooks Online uses FIFO only. Desktop&rsquo;s class-and-job structure maps differently to Online&rsquo;s class, location, and project model. A proper migration documents what won&rsquo;t transfer in advance and rebuilds the essentials in Online &mdash; exactly the work the automated tool skips." },
    { q: "Will my historical data and transactions be preserved?", a: "Transaction history transfers, but it must be verified rather than assumed. The conversion can drop, duplicate, or misclassify items, and balances can shift if the original file had unreconciled accounts or data-integrity issues. Our migration includes a full integrity check &mdash; comparing trial balances, account balances, and key reports in Desktop against the converted Online file &mdash; and reconciling any differences before sign-off. The goal is a converted file you can actually trust, not just a file that opened." },
    { q: "Is QuickBooks Desktop being discontinued?", a: "In stages, yes. Intuit moved Desktop to subscription-only starting with the 2022 versions (the one-time perpetual license is gone), and on September 30, 2024 it stopped selling new Desktop Pro Plus, Premier Plus, and Mac Plus subscriptions to U.S. customers &mdash; existing subscribers can still renew. Support then ends by version: Desktop 2023 lost support on May 31, 2026, and Desktop 2024, the last non-Enterprise release, loses support on September 30, 2027, after which payroll tax tables, bank feeds, and security updates stop. QuickBooks Enterprise is the exception &mdash; Intuit continues to sell and support it. For most small businesses, migration is a question of when, not whether." },
    { q: "How long does a Desktop to Online migration take?", a: "A standard single-entity migration with verification and reconciliation typically completes in two to four weeks. Larger files, multiple entities, heavy third-party integrations, or significant pre-migration cleanup extend that to four to eight weeks. The largest variable is file condition: a clean Desktop file converts faster than one that needs cleanup first. The timeline is fixed in the written scope before work begins." },
    { q: "How much does Desktop to Online migration cost?", a: "ProAdvisor-led migration is priced by scope, not by hour. A standard single-entity migration with integrity verification and reconciliation runs roughly $2,500 to $5,000. Complex migrations &mdash; large files, multiple entities, extensive integrations, or workflow rebuild and team training &mdash; run $5,000 to $10,000 or more. If the Desktop file needs cleanup before conversion, that is scoped separately. Every engagement is fixed-fee against a written scope &mdash; for a quote, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Should I use Intuit&rsquo;s free migration tool or a ProAdvisor?", a: "Intuit&rsquo;s tool handles the raw data conversion at no cost, and for a very simple, clean file it can be enough. The risk is everything around the conversion: the tool does not verify the data landed correctly, does not reconcile balances, does not reconnect bank feeds and app integrations, does not reconfigure workflows for Online&rsquo;s different structure, and does not train your team. For most businesses the conversion is the easy 20 percent; the verification and rebuild are the 80 percent that determine whether the new file works. A ProAdvisor owns the whole outcome, not just the file copy." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/desktop-to-online/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-desktoponline-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Desktop to Online","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Desktop to Online migration","serviceType":"QuickBooks Desktop-to-Online migration and data conversion","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Desktop-to-Online migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From Desktop file to a verified Online company","description":"The four-phase QuickBooks Desktop-to-Online migration sequence, from assessment to verified handoff.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
