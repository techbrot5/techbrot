/* /find-an-accountant/tennessee/quickbooks-cleanup/ — TN SERVICE child (QB spoke), t-money.
 * Mirrors the proven Arizona child (arizona/quickbooks-cleanup.*) with Tennessee content per
 * TN-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * TN LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): Tennessee has
 * NO individual income tax (the Hall tax was fully repealed for tax years beginning Jan 1, 2021), so
 * payroll has NO state income-tax withholding — the income side is simple. The complexity, and the
 * cleanup-specific hooks, live in: (1) the HIGH COMBINED SALES TAX — a 7% STATE rate plus a local
 * option up to 2.75% (every locality has one; combined commonly ~9.25–9.75%, among the highest in the
 * US) — so a file charging a single flat rate is wrong by location; (2) the BUSINESS (gross-receipts)
 * tax at the $100,000 threshold (a state + a city tax) — gross receipts that were never tracked by
 * jurisdiction mean the threshold was crossed unnoticed; (3) the FRANCHISE & EXCISE (F&E) tax — a 6.5%
 * EXCISE on net earnings + a 0.25% FRANCHISE tax on net worth ($100 min, net-worth-only since the 2024
 * property-measure/Schedule G repeal) — so a tangled equity section / misclassified owner comp breaks
 * the franchise-tax NET-WORTH base; and (4) UNRECONCILED ACCOUNTS. PRICING: TN-FACTS gives "QuickBooks
 * Cleanup from $1,200"; higher tiers written qualitatively (no fabricated dollar ranges). provider =
 * #organization; areaServed = State Tennessee (NO street address, NO LocalBusiness, NO PostalAddress/geo/
 * hasMap — areaServed-only); reviewedBy #david-westgate on WebPage. ROUTING (TN core state, 6 pages): TN
 * cross-links limited to the pillar + siblings (quickbooks-accountant, bookkeeping-services,
 * quickbooks-setup); everything else routes to an existing GLOBAL page. HONESTY (R5): no invented
 * reviews/stats/clients/outcomes; outcomes are representative capability-level statements; firm-level
 * review byline (no founder name). Independent firm — does NOT file Tennessee/federal/the F&E (FAE 170)
 * return/the business-tax return/the sales-tax return; not a registered agent; coordinates with the
 * client's CPA/EA and the Tennessee Dept of Revenue. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Tennessee businesses across all 95 counties from our Delaware headquarters. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Tennessee QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Tennessee businesses, correcting a <a href=\"/accounting/sales-tax-compliance/\">sales-tax</a> setup charging a single flat rate instead of the correct combined rate by location (the 7% state rate plus a local option up to 2.75%), reconstructing <strong>gross receipts by jurisdiction</strong> so the $100,000 business-tax threshold is visible, untangling <strong>misclassified owner compensation</strong> and a messy equity section so the franchise-tax net-worth base is supportable, and clearing <strong>unreconciled accounts</strong>.",
    "The work is diagnostic before it is corrective. A messy Tennessee file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, a sales-tax setup charging one flat rate instead of the correct combined rate by location, gross receipts that were never tracked by jurisdiction so the $100,000 business-tax threshold slipped past unnoticed, owner compensation booked as a draw or an expense and an equity section so tangled the franchise-tax net-worth base can&rsquo;t be supported, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a sales-tax item set to one rate, an owner draw posted as wages &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 95 Tennessee counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Tennessee taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "QuickBooks charges one flat sales-tax rate for everywhere.", body: "Tennessee&rsquo;s <strong>combined sales tax is among the highest in the country</strong> &mdash; a <strong>7%</strong> state rate plus a local option <strong>up to 2.75%</strong>, in multiples of 0.25%, and <strong>every locality has a local rate</strong>, so the combined rate commonly lands near <strong>9.25&ndash;9.75%</strong> and varies by location. A file charging a single flat rate is wrong for sales outside its home jurisdiction. We rebuild the <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> so the right combined rate applies by destination, and confirm current rates against the <a href=\"https://www.tn.gov/revenue/taxes/sales-and-use-tax/local-sales-tax.html\" rel=\"noopener nofollow\">Tennessee Department of Revenue local sales-tax</a> source." },
    { title: "Owner compensation and equity are tangled.", body: "Owner pay booked as a draw when it should be wages &mdash; or run as wages with no reasonable-compensation basis &mdash; and a commingled equity section quietly break the file for the <strong>franchise-tax net-worth base</strong>. Tennessee&rsquo;s <strong>0.25% franchise tax</strong> keys off net worth (net-worth-only since the 2024 property-measure repeal), so we separate owner draws, distributions, and W-2 wages cleanly and clean the equity section, so the books support the FAE 170 base your CPA files on." },
    { title: "Gross receipts were never tracked by jurisdiction.", body: "Tennessee&rsquo;s <strong>business tax</strong> is a <strong>gross-receipts</strong> tax &mdash; a state business tax plus a city business tax &mdash; owed once you gross <strong>$100,000</strong> in a county or municipality. Files that never tracked receipts by jurisdiction cross the threshold unnoticed, leaving a registration and filing gap. We reconstruct gross receipts by jurisdiction so the obligation is visible, then keep it tracked. <a href=\"https://www.tn.gov/revenue/taxes/business-tax.html\" rel=\"noopener nofollow\">TN Dept of Revenue &mdash; business tax &rarr;</a>" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Tennessee QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Tennessee) a sales-tax setup charging a single flat rate instead of the correct combined rate by location (7% state plus a local option up to 2.75%), gross receipts reconstructed by jurisdiction so the $100,000 business-tax threshold is visible, misclassified owner compensation and a tangled equity section cleaned so the franchise-tax net-worth base is supportable, and unreconciled accounts cleared across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of sales-tax jurisdictions you report, whether you crossed the $100,000 business-tax threshold, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Tennessee businesses across all 95 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, combined-sales-tax correction by location, gross-receipts reconstruction, owner-compensation cleanup, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Tennessee QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "Sales-tax rate &amp; gross-receipts correction", body: "Tennessee <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> rebuilt for the correct <strong>combined rate by location</strong> &mdash; correcting a file that charged a single flat rate instead of the 7% state rate plus the local option up to 2.75%. <strong>Gross receipts reconstructed by jurisdiction</strong> so the <strong>$100,000 business-tax threshold</strong> (a state and a city tax) is visible. Because combined rates are set per location and change, we confirm current rates against the <a href=\"https://www.tn.gov/revenue/taxes/sales-and-use-tax/local-sales-tax.html\" rel=\"noopener nofollow\">Tennessee Department of Revenue local sales-tax</a> source. We do the tie-out; the business or its CPA files the return." },
    { num: "06", title: "Owner compensation &amp; F&amp;E tie-out", body: "Misclassified owner pay separated into <strong>draws, distributions, and W-2 wages</strong>, and the <strong>equity section</strong> cleaned, so the <strong>franchise-tax net-worth base</strong> on the FAE 170 is supportable. Tennessee&rsquo;s <strong>0.25% franchise tax</strong> keys off net worth (net-worth-only since the 2024 property-measure repeal) and the <strong>6.5% excise</strong> off net earnings, so both figures are reconciled to filed returns; the CPA files. Because Tennessee has no individual income tax, owner draws carry no state income-tax consequence at the personal level." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts, unreconciled accounts &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity, resolving <strong>unreconciled accounts</strong> that hide the file&rsquo;s real position, and keeping the owner-equity detail clean for the franchise-tax net-worth base. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Sales-tax items rebuilt for the correct combined rate by location, gross receipts reconstructed by jurisdiction for the business tax, owner compensation and equity cleaned for the franchise-tax net-worth base, and unreconciled accounts cleared. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>Sales tax:</strong> from a single flat rate charged on everything to the correct combined rate configured by location (7% state plus the local option) and reconciled &mdash; reducing notice risk.",
    "<strong>Business tax:</strong> from gross receipts no one tracked to receipts reconstructed by jurisdiction so the $100,000 threshold is visible and the registration gap is closed.",
    "<strong>Franchise &amp; Excise:</strong> from a tangled equity section to a clean net-worth base and net earnings that support the FAE 170.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. TN-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a sales-tax-rate fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=tennessee&amp;state=tennessee&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, combined-sales-tax correction by location, gross-receipts reconstruction, owner-compensation and equity cleanup, unreconciled accounts, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=tennessee&amp;state=tennessee&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-jurisdiction sales-tax files, multi-entity QuickBooks Enterprise and multi-state nexus files for Tennessee healthcare, logistics, and manufacturing operations, and post-corruption restoration with full statement validation.", href: "/contact/?intent=tennessee&amp;state=tennessee&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of sales-tax jurisdictions you report, whether you crossed the $100,000 business-tax threshold, your multi-state footprint, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 95 Tennessee counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "Tennessee bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, sales-tax sub-reconciliation by location, gross-receipts tracking, and a balance sheet that ties out.", href: "/find-an-accountant/tennessee/bookkeeping-services/", cta: "Tennessee bookkeeping &rarr;" },
    { title: "Tennessee QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, sales-tax items for the combined rate by location (Nashville, Memphis, Knoxville), and no-state-withholding payroll &mdash; is often the better path.", href: "/find-an-accountant/tennessee/quickbooks-setup/", cta: "Tennessee setup &rarr;" },
    { title: "Sales tax &amp; compliance", body: "Tennessee sales-tax setup at the 7% state rate plus the local option (combined rate by location), gross-receipts tracking for the business tax, and the multi-state nexus review that keeps your filings and books in agreement across the state line.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, the sales tax at the combined rate by location (7% state plus local up to 2.75%), gross-receipts tracking for the business tax, owner-compensation cleanup, unreconciled accounts, and the franchise-tax net-worth base &middot; Tennessee, federal, the F&amp;E (FAE 170) return, the business-tax return, and the sales-tax return coordinated with your CPA/EA and the Tennessee Dept of Revenue" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (TN cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Tennessee?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Tennessee businesses, cleanup also corrects a sales-tax setup charging a single flat rate instead of the correct combined rate by location, reconstructs gross receipts by jurisdiction so the $100,000 business-tax threshold is visible, untangles misclassified owner compensation and a messy equity section so the franchise-tax net-worth base is supportable, and clears unreconciled accounts &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, combined-sales-tax correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Tennessee?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many sales-tax jurisdictions you report, whether you crossed the $100,000 business-tax threshold, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Tennessee sales tax get mis-configured in QuickBooks so often?", a: "Because there&rsquo;s no income tax to manage &mdash; Tennessee has no individual income tax, so payroll has no state withholding &mdash; and the operational complexity is the sales tax. Tennessee&rsquo;s combined rate is among the highest in the country: a 7% state rate plus a local option up to 2.75% (in multiples of 0.25%), and every locality has one, so the combined rate commonly lands near 9.25&ndash;9.75% and varies by location. Generic out-of-state bookkeeping commonly charges one flat rate, which is wrong for sales outside the home jurisdiction. Cleanup rebuilds the sales-tax items for the correct combined rate by destination, and reconciles the prior periods. We do the tie-out; the business or its CPA files. Confirm current rates against the <a href=\"https://www.tn.gov/revenue/taxes/sales-and-use-tax/local-sales-tax.html\" rel=\"noopener nofollow\">Tennessee Department of Revenue local sales-tax</a> source." },
    { q: "My gross receipts were never tracked by county &mdash; can cleanup fix the business tax?", a: "Yes. Tennessee&rsquo;s business tax is a gross-receipts tax &mdash; a state business tax plus a city business tax &mdash; that a business must register for and remit once it grosses $100,000 in a county or municipality. A file that never tracked receipts by jurisdiction can cross the threshold unnoticed, leaving a registration and filing gap. We reconstruct gross receipts by jurisdiction so the obligation is visible, set the file up to track it going forward, and reconcile the prior periods. You or your CPA file the business-tax return. See the <a href=\"https://www.tn.gov/revenue/taxes/business-tax.html\" rel=\"noopener nofollow\">TN Department of Revenue business tax</a> page." },
    { q: "Will cleanup fix a tangled equity section for the franchise tax?", a: "Yes. Tennessee&rsquo;s Franchise &amp; Excise (F&amp;E) tax keys off net worth (the 0.25% franchise tax, net-worth-only since the 2024 property-measure repeal) and net earnings (the 6.5% excise), so a commingled equity section or misclassified owner compensation breaks the franchise-tax base. We separate owner draws, distributions, and W-2 wages cleanly, clean the equity section, and reconcile the net-worth and net-earnings figures to the filed returns &mdash; so the FAE 170 base is supportable. Your CPA files the return. Because Tennessee has no individual income tax, owner draws carry no personal state income-tax consequence." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Tennessee businesses across all 95 counties. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/tennessee/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Tennessee QuickBooks Cleanup","description":"QuickBooks file cleanup for Tennessee businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, the sales tax configured at the correct combined rate by location (7% state plus a local option up to 2.75%), gross receipts reconstructed by jurisdiction for the $100,000 business tax, misclassified owner compensation and a tangled equity section cleaned for the franchise-tax net-worth base, and unreconciled accounts. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/tennessee-quickbooks-cleanup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#tn-svc-qbcleanup-summary","#tn-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Tennessee","item":"https://techbrot.com/find-an-accountant/tennessee/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Tennessee QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Tennessee businesses — file repair, reconciliation rebuild, undeposited-funds clearing, the sales tax configured at the correct combined rate by location (7% state plus a local option up to 2.75%), gross receipts reconstructed by jurisdiction for the $100,000 business tax, misclassified owner-compensation and equity cleanup for the franchise-tax net-worth base, and unreconciled accounts, delivered by a Certified ProAdvisor served remotely across all 95 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Tennessee, federal, the F&E (FAE 170) return, the business-tax return, or the sales-tax return — coordinates with the client's CPA, EA, and the Tennessee Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Tennessee","sameAs":"https://en.wikipedia.org/wiki/Tennessee"},
          "audience":{"@type":"BusinessAudience","audienceType":"Tennessee small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
