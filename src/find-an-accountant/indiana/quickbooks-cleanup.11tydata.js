/* /find-an-accountant/indiana/quickbooks-cleanup/ — IN SERVICE child (QB spoke), t-money.
 * Mirrors the proven DE child (delaware/quickbooks-cleanup.*) and the NY exemplar
 * (new-york/quickbooks-cleanup.*) with Indiana content per IN-FACTS.md. JSON front-matter
 * in the .njk; this file supplies content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service, FAQPage).
 *
 * IN LOCALIZATION: DE's gross-receipts tie-out → Indiana SALES-TAX tie-out (flat 7% statewide,
 * NO local add-ons) + county-LIT payroll withholding (all 92 counties levy their own LIT on top
 * of the flat 2.95% state rate; county of residence on Jan 1; Form WH-4) + business personal-
 * property posture ($2,000,000 exemption for 2026, but still DECLARE on Form 102/103 — TechBrot
 * keeps the asset detail clean; it does NOT file the county return). PRICING: IN-FACTS gives only
 * "QuickBooks Cleanup from $1,200" — higher tiers are written qualitatively (no fabricated dollar
 * ranges). provider = #organization; areaServed = State Indiana (NO street address, NO LocalBusiness,
 * NO PostalAddress/geo/hasMap — areaServed-only, mirrors NY); reviewedBy #david-westgate on WebPage.
 * HONESTY (R5): no invented reviews/stats/clients/outcomes; outcomes are representative capability-
 * level statements; firm-level review byline (no founder name). Independent firm — does NOT file
 * Indiana/federal/LIT/sales-tax/personal-property returns; not a registered agent; coordinates with
 * the client's CPA/EA and county assessor. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Indiana businesses across all 92 counties. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Indiana QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Indiana businesses, reconciling <a href=\"/find-an-accountant/indiana/sales-tax-help/\">Indiana sales-tax liability</a> at the flat 7% statewide rate and correcting county-LIT payroll withholding so the file ties to what was filed with the Indiana DOR.",
    "The work is diagnostic before it is corrective. A messy file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, a sales-tax payable that no longer matches the filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a payroll item set to the wrong county LIT &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 92 Indiana counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">bookkeeping cleanup</a> (broader financial reconstruction, including multi-entity and multi-state nexus untangling for Indiana shippers) and <a href=\"/find-an-accountant/indiana/quickbooks-migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Indiana taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Sales tax or county LIT is mis-configured in the file.", body: "Indiana has a flat 7% statewide sales tax with <strong>no local add-ons</strong> &mdash; a file mis-set to collect a layered or local rate, or one not collecting the 7% on taxable goods and services, is a common error to fix. So is payroll set to the wrong <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county LIT</a>: every county levies its own rate and the file must withhold by the employee&rsquo;s county of residence on January 1 (Form WH-4). Both are frequent precursors to a DOR notice." },
    { title: "Undeposited funds has months or years of old balances.", body: "An undeposited-funds account that won&rsquo;t clear is one of the most common file-quality issues. Cleanup investigates each original deposit against the bank, matches the open receipts, and resolves the stranded items properly instead of writing them off blind." },
    { title: "You upgraded versions and something broke.", body: "Version upgrades, year-end rollovers, and Desktop edition switches commonly create data inconsistencies. ProAdvisor cleanup validates the file after the upgrade and resolves what migrated incorrectly &mdash; balances, links, and list damage." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Indiana) sales-tax and county-LIT tie-out across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Indiana businesses across all 92 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Indiana QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "Indiana sales-tax &amp; county-LIT tie-out", body: "<a href=\"/find-an-accountant/indiana/sales-tax-help/\">Sales-tax liability</a> reconciled to filed Indiana DOR returns at the flat 7% statewide rate (no local add-ons), and payroll items set to the correct <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county LIT</a> by county of residence on January 1 (Form WH-4) &mdash; key if you&rsquo;re behind or were noticed. We do the tie-out; your CPA files." },
    { num: "06", title: "File corruption &amp; error resolution", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair." },
    { num: "07", title: "Multi-user &amp; version verification", body: "Multi-user configuration and hosting diagnosed and repaired; permissions audited. Post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the fixed-asset detail clean for the Form 102/103 business personal-property posture (the $2,000,000 exemption for 2026 still requires a declaration). Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Indiana sales-tax &amp; county-LIT tie-out. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>Sales tax &amp; county LIT:</strong> from a payable mis-set to a layered rate or payroll missing the right county to liability tied out to filed Indiana DOR returns and withholding configured to the correct county, reducing notice risk.",
    "<strong>File integrity:</strong> from errors, corruption warnings, and lockouts to a clean, validated file verified after repair.",
    "<strong>Multi-user access:</strong> from users locked out or mode-switching constantly to stable multi-user mode with permissions audited.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. IN-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a multi-user fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, Indiana sales-tax and county-LIT tie-out, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-entity QuickBooks Enterprise and multi-state nexus files for Indiana shippers and manufacturers, and post-corruption restoration with full statement validation.", href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">bookkeeping cleanup</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level.
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 92 Indiana counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "If the file issues are paired with messy or inaccurate books &mdash; or multi-entity and multi-state nexus tangles &mdash; bookkeeping cleanup is the broader engagement, often combined with file cleanup.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { title: "QuickBooks migration", body: "Desktop-to-Online or other software-to-QuickBooks migrations by Certified ProAdvisors with data-integrity verification.", href: "/find-an-accountant/indiana/quickbooks-migration/", cta: "Migration &rarr;" },
    { title: "QuickBooks error fixes", body: "If the file is throwing H-series, 6000-series, or other QuickBooks errors, targeted error fixes resolve the fault and verify the file so it doesn&rsquo;t return.", href: "/find-an-accountant/indiana/quickbooks-error-fixes/", cta: "Error fixes &rarr;" },
    { title: "Sales tax help", body: "Flat 7% Indiana sales-tax setup and the tie-out that keeps your DOR filings and books in agreement.", href: "/find-an-accountant/indiana/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, Indiana sales-tax &amp; county-LIT tie-out &middot; sales-tax, LIT, and business personal-property (Form 102/103) filing coordinated with your CPA/EA and county assessor" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (IN cap 5–7). visible faq__list = FAQPage schema (same array). 1 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Indiana?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Indiana businesses, cleanup also reconciles sales-tax liability to filed Indiana DOR returns at the flat 7% statewide rate and corrects county-LIT payroll withholding &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Indiana?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "What&rsquo;s the difference between file cleanup and bookkeeping cleanup?", a: "QuickBooks file cleanup focuses on the file itself &mdash; bank feeds, reconciliation, corruption, multi-user, version conflicts. Bookkeeping cleanup is broader and reconstructs accurate financials from a messy state across prior periods, including untangling multi-entity and multi-state nexus books. Many Indiana engagements combine both, and we scope whichever (or both) your file needs." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Indiana businesses across all 92 counties." },
    { q: "How is this different from calling Intuit support?", a: "Intuit product support resolves software-level issues &mdash; installation, billing, account access. It does not perform bookkeeping work, reconciliation rebuilds, or data integrity repairs that require judgment about your transactions. TechBrot&rsquo;s Certified ProAdvisors do that work independently, as an unaffiliated ProAdvisor firm." },
    { q: "Will my Indiana CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, with sales-tax liability tied out to filed Indiana DOR returns, and with payroll set to the correct county LIT. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana QuickBooks Cleanup","description":"QuickBooks file cleanup for Indiana businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, and sales-tax & county-LIT tie-out. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-quickbooks-cleanup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-qbcleanup-summary","#in-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Indiana businesses — file repair, reconciliation rebuild, undeposited-funds clearing, and Indiana sales-tax & county-LIT tie-out, delivered by a Certified ProAdvisor served remotely across all 92 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana sales-tax, county-LIT, or business personal-property returns — coordinates with the client's CPA, EA, and county assessor.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
