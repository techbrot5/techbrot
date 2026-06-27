/* /find-an-accountant/delaware/quickbooks-cleanup/ — DE SERVICE child (QB spoke), t-money.
 * Mirrors the proven NY exemplar (new-york/quickbooks-cleanup.*) with Delaware content per
 * DE-FACTS.md. JSON front-matter in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * DE LOCALIZATION: NY's NYC/NY sales-tax tie-out → Delaware GROSS-RECEIPTS tie-out (no sales
 * tax in DE; the receipts tax is on the seller, by activity, filed with the Division of Revenue);
 * franchise-tax reserve; commingled holding-company entities. PRICING: DE-FACTS gives only
 * "QuickBooks Cleanup from $1,200" — the higher tiers are written qualitatively (no fabricated
 * dollar ranges). provider = #organization; areaServed = State Delaware; reviewedBy
 * #david-westgate on WebPage. HONESTY (R5): no invented reviews/stats/clients/outcomes; outcomes
 * are representative capability-level statements; firm-level review byline (no founder name).
 * Independent firm — does NOT file Delaware returns or the franchise tax; not a registered agent;
 * coordinates with the client's CPA/EA and registered agent. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered to Delaware businesses from our Middletown office and remotely statewide. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Delaware QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Delaware businesses, reconciling <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts liability</a> so it ties to what was filed with the Division of Revenue.",
    "The work is diagnostic before it is corrective. A messy file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, a gross-receipts payable that no longer matches the filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">bookkeeping cleanup</a> (broader financial reconstruction, including separating commingled holding-company entities) and <a href=\"/find-an-accountant/delaware/quickbooks-migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Gross-receipts liability doesn&rsquo;t match what you filed.", body: "For Delaware businesses, a gross-receipts payable that doesn&rsquo;t tie to filed Division of Revenue returns is a common cleanup trigger &mdash; and a frequent precursor to a state notice. We reconcile the liability to the filings by activity, period by period, so the books match what was filed." },
    { title: "Undeposited funds has months or years of old balances.", body: "An undeposited-funds account that won&rsquo;t clear is one of the most common file-quality issues. Cleanup investigates each original deposit against the bank, matches the open receipts, and resolves the stranded items properly instead of writing them off blind." },
    { title: "You upgraded versions and something broke.", body: "Version upgrades, year-end rollovers, and Desktop edition switches commonly create data inconsistencies. ProAdvisor cleanup validates the file after the upgrade and resolves what migrated incorrectly &mdash; balances, links, and list damage." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Delaware) gross-receipts tie-out across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered to Delaware businesses from Middletown and remotely. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Delaware QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "Gross-receipts-tax tie-out", body: "Gross-receipts liability reconciled by activity to filed Delaware returns, so the payable in QuickBooks matches reality &mdash; key if you&rsquo;re behind or were noticed. We do the tie-out; your CPA or registered agent files." },
    { num: "06", title: "File corruption &amp; error resolution", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair." },
    { num: "07", title: "Multi-user &amp; version verification", body: "Multi-user configuration and hosting diagnosed and repaired; permissions audited. Post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and confirming any per-entity holding-company structure. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Gross-receipts tie-out. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>Gross receipts:</strong> from a payable that doesn&rsquo;t match filed returns to liability tied out by activity, reducing notice risk.",
    "<strong>File integrity:</strong> from errors, corruption warnings, and lockouts to a clean, validated file verified after repair.",
    "<strong>Multi-user access:</strong> from users locked out or mode-switching constantly to stable multi-user mode with permissions audited.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. DE-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a multi-user fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, gross-receipts tie-out, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-entity QuickBooks Enterprise and commingled holding-company files, and post-corruption restoration with full statement validation.", href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">bookkeeping cleanup</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level.
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All three Delaware counties &middot; office in Middletown, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "If the file issues are paired with messy or inaccurate books &mdash; or commingled holding-company entities &mdash; bookkeeping cleanup is the broader engagement, often combined with file cleanup.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { title: "QuickBooks migration", body: "Desktop-to-Online or other software-to-QuickBooks migrations by Certified ProAdvisors with data-integrity verification.", href: "/find-an-accountant/delaware/quickbooks-migration/", cta: "Migration &rarr;" },
    { title: "QuickBooks setup", body: "If your file is beyond repair or you&rsquo;re starting fresh, setup rebuilds the file correctly from the chart of accounts up.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Setup &rarr;" },
    { title: "Gross receipts tax help", body: "Activity-based gross-receipts tracking and the tie-out that keeps your Delaware filings and books in agreement.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, gross-receipts tie-out &middot; income-tax &amp; franchise-tax filing coordinated with your CPA/EA and registered agent" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (DE-FACTS cap 5–7). visible faq__list = FAQPage schema (same array). 1 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Delaware?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Delaware businesses, cleanup also reconciles gross-receipts liability by activity so it ties to what was filed with the Division of Revenue &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Delaware?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "What&rsquo;s the difference between file cleanup and bookkeeping cleanup?", a: "QuickBooks file cleanup focuses on the file itself &mdash; bank feeds, reconciliation, corruption, multi-user, version conflicts. Bookkeeping cleanup is broader and reconstructs accurate financials from a messy state across prior periods, including separating commingled holding-company entities. Many Delaware engagements combine both, and we scope whichever (or both) your file needs." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered to Delaware businesses from our Middletown office and remotely statewide." },
    { q: "How is this different from calling Intuit support?", a: "Intuit product support resolves software-level issues &mdash; installation, billing, account access. It does not perform bookkeeping work, reconciliation rebuilds, or data integrity repairs that require judgment about your transactions. TechBrot&rsquo;s Certified ProAdvisors do that work independently, as an unaffiliated ProAdvisor firm." },
    { q: "Will my Delaware CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, and with gross-receipts liability tied out by activity. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware QuickBooks Cleanup","description":"QuickBooks file cleanup for Delaware businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, and gross-receipts tie-out. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-qbcleanup-summary","#de-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Delaware businesses — file repair, reconciliation rebuild, undeposited-funds clearing, and gross-receipts tie-out by activity, delivered by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
