/* /quickbooks/migration/migration-cleanup/ (cobalt t-bofu elevation). Sources:
 * FROZEN contract (contract-qb-migcleanup.txt — 41 headings, 7 FAQ) + old
 * quickbooks/migration/migration-cleanup/index.html (BODY PROSE only). Child of
 * the /quickbooks/migration/ hub; matches its t-bofu cobalt vocabulary, intake
 * usage, and schema shape. Content-to-goal: REAL post-migration cleanup — what a
 * botched/DIY conversion breaks (duplicate accounts, wrong opening balances,
 * broken AR/AP, unmapped items, sales-tax misconfig, payroll-history gaps), the
 * diagnostic + fix sequence, validation against the source file, clean handoff.
 * Comparison/pricing data is vs-scroll + vs-table (NOT buyer-cards). Citable: the
 * source-file comparison method — cleanup measured against the original file.
 * Price $1,500–$10,000+ (contract A6, verbatim band). FAQ 7 verbatim/flat,
 * append-only enrichment. Authorship firm-level; founder schema-only. Independent
 * firm — not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
  ],
  // "Migration cleanup, in five questions." — quick-5, distinct from the 7 FAQ
  // (definition / vs balance repair / fix-someone-else / what gets fixed / re-migrate)
  aiSummary: [
    { q: "What is QuickBooks migration cleanup?", a: "The repair work after a conversion that left the file broken. Migration moves the data; cleanup fixes what came across wrong &mdash; <strong>balances, reconciliation, duplicated lists and items, AR/AP detail, inventory, dead integrations, and broken workflows</strong>. A file you can actually run a business on, not just one that opened." },
    { q: "How is it different from fixing wrong balances?", a: "Balance repair is the focused subset &mdash; just the numbers. Migration cleanup is <strong>broader</strong>: balances plus lists, items, integrations, reconciliation, and workflows. Numbers only &rarr; balance repair. Whole file wrong &rarr; cleanup." },
    { q: "Can you fix a migration someone else did?", a: "Yes &mdash; that&rsquo;s most engagements. We fix conversions done with Intuit&rsquo;s free tool, by a previous bookkeeper, or by another provider. We work from your current Online file and the original source, comparing the two. <strong>We don&rsquo;t need to have done the original migration.</strong>" },
    { q: "What gets cleaned up?", a: "Opening and account <strong>balances</strong> corrected to source; <strong>reconciliation</strong> rebuilt; duplicated or garbled <strong>lists and items</strong> repaired; <strong>AR/AP</strong> re-established as open transactions; <strong>inventory</strong> corrected (including the weighted-average&ndash;to&ndash;FIFO change); <strong>integrations</strong> reconnected; broken <strong>workflows and reports</strong> rebuilt." },
    { q: "Should I clean up or re-migrate?", a: "If most data survived and the problems are correctable, cleanup in place is faster and cheaper. If the conversion dropped large portions or the source file is corrupted, a fresh re-migration may win. The diagnostic compares the files and recommends whichever genuinely fits." },
  ],
  // "If the conversion left you with any of these." — 6 signal buyer-cards (grid-2)
  signals: [
    { opener: "Your lists are a duplicated mess.", body: "Customers, vendors, or items came across doubled, merged, or renamed. The same customer appears three times; products lost their account mappings." },
    { opener: "The numbers don&rsquo;t tie.", body: "Balances, reconciliation, AR/AP &mdash; the financial side is off. If <em>only</em> this is wrong, balance repair may be enough; if it&rsquo;s part of a bigger mess, cleanup covers it." },
    { opener: "Integrations died in the move.", body: "Bank feeds, payroll, payments, e-commerce, receipt capture &mdash; the apps that fed your Desktop file didn&rsquo;t follow to Online, or reconnected wrong." },
    { opener: "Your workflows don&rsquo;t exist anymore.", body: "Recurring transactions, memorized reports, custom forms, and the day-to-day workflows you relied on didn&rsquo;t convert &mdash; so basic tasks now take twice as long." },
    { opener: "Inventory is wrong or gone.", body: "Inventory items, quantities, or valuation converted incorrectly &mdash; and Online&rsquo;s FIFO costing differs from Desktop&rsquo;s weighted-average, so stock and COGS can land untrustworthy. A serious problem for product businesses." },
    { opener: "You inherited someone else&rsquo;s bad migration.", body: "A DIY conversion, a previous bookkeeper, or another provider did the move and left it broken. We clean up migrations regardless of who performed them." },
  ],
  // "Six areas a conversion most often damages." — six damaged-area cards (grid-2, num + h3)
  scope: [
    { num: "01", name: "Balances &amp; reconciliation", body: "Opening and account balances corrected to the source, and bank, credit-card, and balance-sheet accounts re-reconciled so the numbers tie to statements again. A conversion that drops or rounds an opening balance throws every period that follows; this is where cleanup starts." },
    { num: "02", name: "Lists &amp; items", body: "Duplicated, merged, or renamed customer, vendor, and item lists repaired; duplicate or orphaned chart-of-accounts entries merged; products and services re-mapped to the right income, COGS, and tax accounts so transactions post correctly instead of landing in suspense." },
    { num: "03", name: "AR &amp; AP detail", body: "Open invoices and bills re-established as individual transactions where they converted as lump-sum summaries, so aging reports tie to the balance sheet and you can collect and pay against real detail &mdash; not a single opening-balance line." },
    { num: "04", name: "Inventory", body: "Inventory items, quantities, and valuation corrected to the source basis &mdash; including reconciling the weighted-average-to-FIFO change that occurs moving Desktop to Online &mdash; with adjustments documented so on-hand stock and COGS are trustworthy again." },
    { num: "05", name: "Integrations", body: "Bank feeds reconnected; payroll, payments, e-commerce, receipt-capture, and reporting apps reconnected and reconfigured for Online &mdash; including sales-tax setup, which uses a different model in Online and is a frequent post-conversion misconfiguration &mdash; so the file is fed correctly going forward." },
    { num: "06", name: "Workflows &amp; reports", body: "Recurring transactions, key reports, custom forms, classes, locations, and user roles rebuilt for Online &mdash; and payroll-history and year-to-date gaps reconstructed where the conversion left them blank &mdash; so day-to-day work runs the way it did before the move, or better." },
  ],
  // "Migration cleanup, balance repair, or file cleanup?" — three-way disambiguation
  // rendered as a vs-table (NOT scope cards), per protocol T3.
  which: [
    { dim: "When it fits", cleanup: "The whole file feels wrong after the move", balance: "Only the numbers are off", file: "Problems built up over time, no migration involved" },
    { dim: "What broke", cleanup: "Balances <em>and</em> lists, items, integrations, inventory, workflows", balance: "Opening balances, reconciliation, AR/AP totals", file: "Reconciliation drift, messy categorization, corruption" },
    { dim: "Starts by", cleanup: "Comparing the converted file against the source", balance: "Tracing the balances back to the source", file: "Diagnosing the existing file on its own" },
    { dim: "Scope", cleanup: "Broad &mdash; multi-area repair", balance: "Narrow, faster, cheaper", file: "Whatever the existing file needs" },
    { dim: "Where it lives", cleanup: "This page", balance: "Balances wrong after conversion", file: "QuickBooks file cleanup" },
  ],
  // "From a broken conversion to a file that works." — 4-step process (process-diagram)
  process: [
    { num: "01", name: "Cleanup diagnostic", body: "A ProAdvisor reviews your converted Online file against the original source &mdash; balances, lists, AR/AP, inventory, integrations, workflows &mdash; and maps everything that came across wrong. Written fixed-fee scope follows, plus an honest clean-up-vs-re-migrate recommendation.", when: "Typical: 2–4 business days" },
    { num: "02", name: "Financial cleanup", body: "Balances corrected, reconciliation rebuilt, AR/AP re-established, inventory fixed &mdash; the numbers worked back to the source basis first, because everything else sits on top of them.", when: "Typical: 1–2 weeks" },
    { num: "03", name: "Structural &amp; integration cleanup", body: "Lists and items de-duplicated and re-mapped, the chart of accounts cleaned, integrations and sales tax reconnected and reconfigured, workflows and reports rebuilt for Online &mdash; so the file is usable day to day, not just accurate on paper.", when: "Typical: 1–2 weeks" },
    { num: "04", name: "Verify, document &amp; hand off", body: "The cleaned file verified against the source, every correction documented for you and your CPA, and an optional transition to monthly bookkeeping so it stays clean.", when: "Optional: ongoing engagement" },
  ],
  // Pricing — vs-scroll + vs-table (NOT buyer-cards). Band verbatim from contract A6.
  pricing: [
    { tier: "Contained cleanup", price: "$1,500&ndash;$4,000", forWhom: "Balances and reconciliation plus light list repair.", includes: "Opening-balance correction, reconciliation rebuild, light customer/vendor/item de-duplication." },
    { tier: "Full cleanup", price: "$4,000&ndash;$10,000+", forWhom: "Balances, lists, AR/AP, inventory, integrations, and workflows.", includes: "Everything in contained, plus AR/AP detail rebuild, inventory and FIFO reconciliation, integration and sales-tax reconfiguration, workflow and report rebuild." },
  ],
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Method", label: "Converted file diagnosed and rebuilt against the original source" },
    { value: "Accountability", label: "Named operator · platform-level quality review · documented corrections" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  // "Related QuickBooks services." — 4 related h3 links (verbatim headings)
  related: [
    { title: "Balances wrong after conversion", href: "/quickbooks/migration/balances-wrong-after-conversion/", body: "The focused fix when only the numbers are off, not the whole file." },
    { title: "Desktop to Online migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "The migration done right the first time &mdash; with verification that prevents the cleanup." },
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "For file problems that accumulated over time rather than from a migration." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Keeps the cleaned-up file clean &mdash; the common next step after a cleanup." },
  ],
  // 7 FAQ — verbatim from the FROZEN contract; enrichment appends, never reworded.
  faq: [
    { q: "What is QuickBooks migration cleanup?", a: "QuickBooks migration cleanup is the repair work needed after a conversion that left the file disorganized or broken. Where a migration moves the data, cleanup fixes what came across wrong: incorrect balances, broken reconciliation, duplicated or garbled lists and items, accounts-receivable and accounts-payable detail that converted as summaries, miscalculated inventory, disconnected bank feeds and app integrations, and workflows that no longer function. It's the difference between a file that technically opened and a file you can actually run a business on." },
    { q: "How is migration cleanup different from fixing wrong balances?", a: "Fixing wrong balances is a focused subset &mdash; it corrects the numbers when the balances don't tie after conversion. Migration cleanup is broader: it covers the balances plus everything else a bad conversion damaged, including duplicated or merged lists, broken items and products, disconnected integrations, missing reconciliation, and workflows that need rebuilding. If only the numbers are off, balance repair is enough; if the whole file feels wrong, migration cleanup is the right engagement." },
    { q: "How is migration cleanup different from regular QuickBooks file cleanup?", a: "Regular QuickBooks file cleanup fixes problems that developed in a file over time &mdash; accumulated reconciliation drift, messy categorization, file corruption. Migration cleanup fixes problems introduced by a conversion: data that dropped, duplicated, or converted incorrectly when moving from Desktop to Online or from another software. The skills overlap, but migration cleanup starts by comparing the new file against the original source data, which regular cleanup doesn't need to do." },
    { q: "Can you clean up a migration someone else did?", a: "Yes. Most migration cleanup engagements are exactly that &mdash; fixing a conversion done by the business itself with Intuit's free tool, by a previous bookkeeper, or by another provider. We don't need to have performed the original migration. We work from your current Online file and, where available, the original Desktop file or source data, comparing the two to find and fix what went wrong." },
    { q: "What gets cleaned up after a migration?", a: "Typical migration cleanup covers: opening and account balances corrected to the source; reconciliation rebuilt so accounts tie to statements; duplicated, merged, or garbled customer, vendor, and item lists repaired; AR and AP re-established as individual open invoices and bills; inventory valuation corrected (including the weighted-average-to-FIFO change that occurs moving from Desktop to QuickBooks Online); bank feeds and app integrations reconnected and reconfigured for Online; and broken or missing workflows, recurring transactions, and reports rebuilt. The exact scope is set by a diagnostic against your file." },
    { q: "How much does QuickBooks migration cleanup cost?", a: "Migration cleanup is priced by scope after a diagnostic, not by hour. A contained cleanup &mdash; balances and reconciliation plus light list repair &mdash; typically runs $1,500 to $4,000. A full cleanup across balances, lists, AR/AP, inventory, integrations, and workflows runs $4,000 to $10,000 or more depending on file size, number of periods affected, and integration complexity. Every engagement is fixed-fee against a written scope produced from the diagnostic &mdash; book a free diagnostic or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Should I clean up the file or just re-migrate?", a: "It depends on how much survived the conversion. If most of the data is in the Online file and the problems are correctable, cleanup in place is faster and cheaper than starting over. If the conversion dropped large portions of data, or the original Desktop file itself was corrupted and needs repair first, a fresh re-migration may be the better path. The diagnostic compares what's in the Online file against the source and recommends whichever is genuinely faster and cheaper for your situation." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/migration-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-migcleanup-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Migration cleanup","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks migration cleanup","serviceType":"QuickBooks post-migration cleanup and repair","description":"Repair of a broken QuickBooks conversion — balances, lists, AR/AP, inventory, integrations, and workflows reconciled and rebuilt against the source file.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks migration cleanup tiers","itemListElement":data.pricing.map(function(t){return {"@type":"Offer","name":stripTags(t.tier),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From a broken conversion to a file that works","description":"How a TechBrot QuickBooks migration cleanup runs, from diagnostic to clean handoff.","step":data.process.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
