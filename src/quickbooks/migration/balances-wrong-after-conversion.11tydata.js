/* /quickbooks/migration/balances-wrong-after-conversion/ — MIGRATION-PROTOCOL
 * elevation to the cobalt t-guide tier (content-to-goal, visual-floor). Heading
 * + 7-FAQ authority: contract-qb-balances.txt (frozen equity contract). Body
 * prose sourced from the old root HTML (read for prose only). Reference pattern:
 * src/quickbooks/help/error-codes/h202.{njk,11tydata.js} — the proven t-guide
 * HowTo proving page. Cobalt vocabulary ONLY; no invented classes. HowTo schema
 * emitted from the ordered `processSteps` array (the diagnostic → correct →
 * verify → hand-off sequence), same shape as h202's fixSteps→HowTo. Tables use
 * vs-scroll + vs-table (NEVER buyer-cards — mobile overflow). FAQ = the 7
 * contract Q/A, verbatim, faq__list + FAQPage from the same array (append-only).
 * Honesty (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating;
 * authorship firm-level; founder schema-only. Independent firm — not Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "Both", label: "sides of the conversion certified — QuickBooks Desktop and Online (Level 2)" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "Post-conversion repair spans both platforms &mdash; the Desktop file the numbers came from and the Online file they landed in. Every ProAdvisor is certified on both.",
    "Active QuickBooks Desktop, Enterprise, and Online (Level 2) certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience reconciling a converted file back to its Desktop baseline &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct cuts (what / why inventory moved / fixable / re-migrate / cost-time)
  aiSummary: [
    { q: "Why are balances wrong after migrating to Online?", a: "Most common causes: opening balances that didn&rsquo;t convert, dropped or duplicated transactions, reconciliation status that didn&rsquo;t carry, AR/AP that converted as summary not detail, inventory re-based from weighted-average to FIFO, and shifted retained earnings. Usually traces to Desktop-file issues the conversion tool carried over silently." },
    { q: "Why did inventory change?", a: "Because the method changes. QuickBooks Desktop uses weighted-average costing; QuickBooks Online uses FIFO only and it can&rsquo;t be changed. Conversion re-bases inventory asset and COGS onto FIFO, so the value legitimately differs from Desktop. The fix documents and reconciles the change." },
    { q: "Can it be fixed?", a: "Yes. A diagnostic compares the converted Online file to the original Desktop balances, isolates which accounts are off and why, then corrects opening balances, reconciliation, duplicates, and AR/AP/inventory until the file ties back to the Desktop numbers you trusted." },
    { q: "Do I have to redo the migration?", a: "Usually not. If the data is in Online but balances are off, it&rsquo;s correctable in place. A full re-migration is only needed when conversion dropped large portions of data or the file is corrupted. The diagnostic decides which path is faster and cheaper." },
    { q: "How much and how long?", a: "Focused fix: $750&ndash;$2,500, a few days to a week. Broader repair across opening balances, reconciliation, AR/AP, and inventory: $2,500&ndash;$6,000 or more, one to three weeks. Fixed-fee after a diagnostic, usually scheduled within a day or two." },
  ],
  // The six balance errors a conversion leaves behind — the citable cause list.
  causes: [
    { rank: "Error 01", name: "Opening balances shifted.", body: "QuickBooks Online starts your history differently than Desktop. If the Desktop file had unreconciled items, open undeposited funds, or balance-sheet accounts that weren&rsquo;t reconciled to source, the conversion carries those discrepancies and surfaces them as opening balances that don&rsquo;t match what you had." },
    { rank: "Error 02", name: "Reconciliations no longer tie.", body: "Reconciled status often doesn&rsquo;t carry through conversion, so accounts that balanced to the penny in Desktop suddenly show drift against the same statements in Online &mdash; the cleared transactions are there, but the reconciliation that proved them is gone." },
    { rank: "Error 03", name: "AR or AP doesn&rsquo;t match the detail.", body: "Open invoices and bills sometimes convert as a single summary balance instead of individual transactions &mdash; or payments get misapplied &mdash; so the aging report no longer matches the accounts-receivable or accounts-payable control account on the balance sheet." },
    { rank: "Error 04", name: "Transactions duplicated or dropped.", body: "Conversion can double-post some transactions and skip others, throwing off the profit-and-loss and the balance sheet in ways that aren&rsquo;t obvious until you reconcile against statements and source documents." },
    { rank: "Error 05", name: "Inventory re-based to FIFO.", body: "Desktop uses weighted-average costing; QuickBooks Online uses FIFO only and the method can&rsquo;t be changed. After conversion your inventory asset and cost of goods sold recalculate onto FIFO &mdash; a real, structural change from the Desktop valuation, not a glitch, but one that must be documented and reconciled." },
    { rank: "Error 06", name: "Retained earnings or equity moved.", body: "If the conversion closed prior years differently than Desktop did, retained earnings and the equity section can shift &mdash; making the balance sheet look wrong even when every underlying transaction is intact. Sales-tax-liability balances can move the same way when the agency setup converts differently." },
  ],
  // What the repair covers — six work areas worked back to the Desktop baseline.
  repairCovers: [
    { num: "01", name: "Baseline comparison", body: "We pull the original Desktop trial balance, Balance Sheet, and Inventory Valuation Summary and compare them line by line against the converted Online file &mdash; so we know exactly which accounts are off, and by how much, before touching anything." },
    { num: "02", name: "Opening balance correction", body: "A correct, documented opening balance established for every affected account as of the conversion date, against the source trial balance &mdash; so the file has a trustworthy starting point to reconcile forward from." },
    { num: "03", name: "Reconciliation rebuild", body: "Bank, credit-card, and balance-sheet accounts re-reconciled to statements so reconciled status and balances are real again, not inherited drift carried over from the Desktop file." },
    { num: "04", name: "Duplicate &amp; dropped transaction fix", body: "Double-posted transactions removed and missing ones reconstructed from source, so the profit-and-loss and balance sheet reflect what actually happened &mdash; the date-cutoff errors that strand a period get corrected here too." },
    { num: "05", name: "AR / AP re-establishment", body: "Open invoices and bills rebuilt as individual transactions where they converted as summaries, so the aging reports tie back to the balance sheet and you can collect and pay accurately again." },
    { num: "06", name: "Inventory &amp; equity reconciliation", body: "The weighted-average-to-FIFO inventory change reconciled and documented against the pre-conversion valuation, and retained-earnings and equity tied to the Desktop basis &mdash; so your CPA sees exactly what changed and why." },
  ],
  // FOUR ordered diagnostic → fix → verify → hand-off steps — the HowTo sequence.
  processSteps: [
    { name: "Balance diagnostic", body: "A ProAdvisor compares the converted Online file against your Desktop baseline &mdash; trial balance, Balance Sheet, and key reports &mdash; isolates which accounts are wrong and why, and tells you whether an in-place repair or a re-migration is the right call. A written fixed-fee scope follows.", meta: "Typical: 1&ndash;3 business days" },
    { name: "Correct &amp; reconcile", body: "Opening balances corrected against the source trial balance, reconciliations rebuilt, duplicates and dropped transactions resolved, AR/AP and inventory re-established, and the opening-balance-equity (OBE) account cleared &mdash; each fix worked back to the Desktop baseline rather than forced to a target number.", meta: "Typical: a few days to 3 weeks" },
    { name: "Verify against baseline", body: "The corrected Online file is re-compared to the Desktop trial balance and key reports. Every remaining difference is explained and documented &mdash; the FIFO inventory re-basing, for example, is a legitimate variance &mdash; and nothing is signed off until the file ties or each variance is justified.", meta: "Typical: 1&ndash;2 business days" },
    { name: "Document &amp; hand off", body: "A written summary of every correction for your records and your CPA, plus an optional transition to monthly bookkeeping so the now-clean file stays clean. You leave with a file that ties to the numbers you trusted before the move.", meta: "Optional: ongoing engagement" },
  ],
  // Repair-in-place vs re-migrate — the honest decision, as a vs-table (NOT cards).
  pathRows: [
    { factor: "When it applies", repair: "The data is in the Online file but balances are off", remigrate: "Conversion dropped a large portion of the data, or the file is fundamentally corrupted" },
    { factor: "What it fixes", repair: "Opening balances, reconciliation, duplicates, AR/AP, inventory &mdash; in place", remigrate: "A fresh conversion, often after the Desktop file itself is cleaned up first" },
    { factor: "Cost &amp; speed", repair: "Faster and cheaper &mdash; the right answer for the large majority of cases", remigrate: "More time and cost; only worth it when an in-place repair won&rsquo;t hold" },
    { factor: "How we decide", repair: "The diagnostic compares both files and recommends the path that actually fits", remigrate: "We say so plainly if that&rsquo;s your situation, rather than billing a repair that won&rsquo;t hold" },
  ],
  // The honest-answer signals — when the diagnostic tilts toward re-migration.
  pathSignals: [
    { name: "Repair in place (most cases)", body: "When the data is in the Online file but balances are off, an in-place repair &mdash; opening balances, reconciliation, duplicates, AR/AP, inventory &mdash; is faster and cheaper than redoing everything. This is the right answer for the large majority of post-conversion balance problems." },
    { name: "Re-migrate (rare)", body: "Only warranted when conversion dropped a large portion of the data, the file is fundamentally corrupted, or the Desktop file itself needs cleanup first. We&rsquo;ll say so plainly if that&rsquo;s your situation rather than billing an in-place repair that won&rsquo;t hold." },
    { name: "The diagnostic decides", body: "You don&rsquo;t have to guess. The diagnostic compares the two files and tells you which path actually fits &mdash; and we recommend the one that&rsquo;s faster and cheaper for your file, not the one that bills more." },
  ],
  operatorSpec: [
    { value: "Both files", label: "diagnosed against the Desktop file the numbers came from and the Online file they landed in" },
    { value: "$750–$6,000+", label: "fixed-fee scope by area, set after the diagnostic &mdash; never by the hour" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, and not Intuit&rsquo;s software support" },
  ],
  related: [
    { title: "Desktop to Online migration", href: "/quickbooks/migration/desktop-to-online/", body: "The full migration done right the first time &mdash; with the verification that prevents wrong balances." },
    { title: "Migration cleanup", href: "/quickbooks/migration/migration-cleanup/", body: "Broader post-migration repair when more than balances came across wrong." },
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/", body: "Where the Desktop file needs repair before a clean re-migration is possible." },
    { title: "Reconciliation services", href: "/accounting/reconciliation-services/", body: "The discipline at the core of getting post-conversion balances to tie again." },
  ],
  // The 7 contract FAQ — verbatim Q + verbatim A (append-only enrichment allowed).
  faq: [
    { q: "Why are my balances wrong after migrating QuickBooks to Online?", a: "The most common causes are: opening balances that didn&rsquo;t convert correctly, transactions that were dropped or duplicated during conversion, reconciliation status that didn&rsquo;t carry so accounts no longer tie to statements, accounts-receivable and accounts-payable detail that converted as summary rather than open invoices and bills, inventory that recalculated under a different costing method, and retained earnings or equity that shifted because the conversion closed the books differently than Desktop did. Most of these trace back to data integrity issues that existed in the Desktop file before conversion, which the automated migration tool carried over without flagging." },
    { q: "Can wrong balances after a QuickBooks migration be fixed?", a: "Yes. Post-conversion balance errors are fixable without redoing the entire migration in most cases. The fix starts with a diagnostic that compares the converted Online file against the original Desktop balances &mdash; trial balance, account balances, and key reports &mdash; to isolate exactly which accounts are off and why. From there a ProAdvisor corrects opening balances, resolves duplicated or dropped transactions, re-establishes reconciliation, and reconciles AR/AP and inventory to source. The goal is a converted file that ties back to the Desktop numbers you trusted." },
    { q: "Do I need to redo the whole migration if balances are wrong?", a: "Usually not. If the data is in the Online file but the balances are off, the issue is typically correctable in place &mdash; opening balances, reconciliation, duplicates, AR/AP, and inventory adjustments. A full re-migration is only warranted when conversion dropped a large portion of the data or the file is fundamentally corrupted. The diagnostic determines which path is faster and cheaper, and we recommend the one that actually fits your file rather than defaulting to the more expensive option." },
    { q: "Why did my opening balances change after conversion?", a: "Opening balances commonly shift after conversion because QuickBooks Online handles the start-of-history differently than Desktop. If the Desktop file had unreconciled items, open undeposited funds, or balance-sheet accounts that weren&rsquo;t reconciled to source, the conversion carries those discrepancies and can surface them as changed opening balances. The fix is to establish a correct, documented opening balance for each account as of the conversion date and reconcile forward from there." },
    { q: "Why is my accounts receivable or accounts payable wrong after migrating?", a: "AR and AP errors after conversion usually happen when open invoices and bills convert as summary balances rather than as individual open transactions, when customer or vendor payments get misapplied during conversion, or when the Desktop file had un-applied credits or partial payments that the tool handled differently. The result is a control-account balance that doesn&rsquo;t match the detail. Repair re-establishes the individual open invoices and bills so the aging reports tie to the balance sheet again." },
    { q: "How much does it cost to fix balances after a QuickBooks migration?", a: "Post-migration balance repair is priced by scope after a diagnostic, not by hour. A focused single-area fix &mdash; opening balances or one set of reconciliations &mdash; typically runs $750 to $2,500. A broader repair across opening balances, reconciliation, AR/AP, and inventory runs $2,500 to $6,000 or more depending on how many periods and accounts are affected. Every engagement is fixed-fee against a written scope, and the diagnostic tells you which it is before any work begins." },
    { q: "How long does it take to fix post-conversion balance errors?", a: "A focused fix typically completes in a few business days to a week once the diagnostic is done. A broader multi-account repair runs one to three weeks depending on the number of periods, accounts, and transactions involved. Because these errors block your ability to trust the books, we prioritize them &mdash; the diagnostic is usually scheduled within a day or two of you reaching out." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/balances-wrong-after-conversion/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-balances-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"Balances Wrong After Conversion","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Balances Wrong After Migration? How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Online","applicationCategory":"BusinessApplication","operatingSystem":"Web"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Intermediate","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks balances that are wrong after migration","description":"Diagnose and repair incorrect balances after a QuickBooks Desktop to Online conversion in four ordered steps: compare to the Desktop baseline, correct and reconcile, verify, and document.","tool":[{"@type":"HowToTool","name":"QuickBooks Desktop trial balance"},{"@type":"HowToTool","name":"QuickBooks Online"},{"@type":"HowToTool","name":"Inventory Valuation Summary"}],"step":data.processSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#qb-balances-process"};})},
        {"@type":"Service","@id":url+"#service","name":"Post-Migration Balance Repair","serviceType":"QuickBooks post-conversion balance repair","description":"Diagnosis and repair of incorrect account balances after a QuickBooks Desktop to Online migration, including opening-balance corrections, reconciliation rebuild, duplicate and dropped transaction resolution, accounts-receivable and accounts-payable reconciliation, and inventory and retained-earnings correction. Delivered by Certified ProAdvisors as fixed-fee project work. Independent firm; does not include income-tax filing, IRS representation, audit, or assurance.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. businesses with incorrect balances after a QuickBooks migration"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$750–$6,000+ fixed-fee scope by area, set after a diagnostic"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
