/* /find-an-accountant/virginia/quickbooks-cleanup/ — VA SERVICE child (QB spoke), t-money.
 * Mirrors the proven MD child (maryland/quickbooks-cleanup.*) with Virginia content per
 * VA-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * VA LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): MD's
 * county "piggyback" local income tax + the 3% IT/data-services tax DO NOT carry over — VIRGINIA HAS
 * NO LOCAL INCOME TAX. The distinct VA hook is the LOCAL BUSINESS tax: the BPOL gross-receipts
 * business-license tax, levied by most cities and counties and set by locality + business
 * classification, where a business operating in multiple Virginia jurisdictions owes a SEPARATE BPOL
 * each — so a file running all revenue through one account with no per-jurisdiction tracking can't
 * support the BPOL filings; plus local BTPP and Machinery & Tools. The second VA hook is the VARIABLE
 * regional sales tax (5.3% general / 6.0% Northern Virginia, Hampton Roads, Richmond / 7.0% Historic
 * Triangle), where a file charging one rate across regions under-collects in the higher regions. The
 * third is reciprocity with MD/PA/WV/KY/DC (Form VA-4) — cross-border staff over-withheld for Virginia
 * who should be exempt. Specific locality BPOL rates and sales-tax regions are framed QUALITATIVELY,
 * never quoted as a fixed locality figure; the 7.75%-over-$1M bracket is a PROPOSAL, not law; the PTET
 * (5.75% elective entity-level) is advisory and flagged "confirm 2026 status". PRICING: VA-FACTS gives
 * "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively (no fabricated dollar ranges).
 * provider = #organization; areaServed = State Virginia (NO street address, NO LocalBusiness, NO
 * PostalAddress/geo/hasMap — areaServed-only); reviewedBy #david-westgate on WebPage. ROUTING (VA core
 * state, 6 pages): VA cross-links limited to the pillar + 4 siblings (quickbooks-accountant,
 * small-business-accountant, bookkeeping-services, quickbooks-setup); everything else routes to an
 * existing GLOBAL page. HONESTY (R5): no invented reviews/stats/clients/outcomes; outcomes are
 * representative capability-level statements; firm-level review byline (no founder name). Independent
 * firm — does NOT file Virginia/federal/corporate income tax/state income tax/payroll-withholding/
 * sales-tax/BPOL or local business-tax/PTET returns; not a registered agent; coordinates with the
 * client's CPA/EA, the Virginia Department of Taxation, and the locality. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Virginia businesses across the Commonwealth&rsquo;s counties and independent cities from our Delaware headquarters next door. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Virginia QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Virginia businesses, rebuilding the books to <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">track gross receipts by locality</a> so each jurisdiction&rsquo;s BPOL is supportable, re-sourcing <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> where one rate is charged across Virginia&rsquo;s 5.3% / 6.0% / 7.0% regions, and switching cross-border staff to home-state withholding under the MD/PA/WV/KY/DC reciprocal agreements (Form VA-4).",
    "The work is diagnostic before it is corrective. A messy Virginia file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, all revenue running through a single account with no way to allocate gross receipts to the localities where BPOL is owed, a sales-tax payable that no longer matches the filings because one rate was charged across regions, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, revenue never tagged by jurisdiction, a sale sourced to the wrong regional rate, cross-border staff still withheld for Virginia after reciprocity applies &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across Virginia&rsquo;s counties and independent cities. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Virginia taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Gross receipts can&rsquo;t be split by locality for BPOL.", body: "Virginia&rsquo;s local business tax is where generic out-of-state bookkeeping goes wrong. Most cities and counties levy a <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">BPOL tax on gross receipts</a>, and a business operating in several Virginia jurisdictions generally needs a <strong>separate BPOL for each</strong> &mdash; so gross receipts have to be tracked by location. A file that runs all revenue through one account can&rsquo;t support those filings. We rebuild the file to tag gross receipts by jurisdiction and keep the BTPP and Machinery &amp; Tools asset detail locality-ready." },
    { title: "One sales-tax rate is charged across regions.", body: "Virginia&rsquo;s sales tax is <strong>variable by region</strong> &mdash; 5.3% in most of the state, 6.0% in Northern Virginia, Hampton Roads, and the Richmond region, and 7.0% in the Historic Triangle. A file charging a single rate everywhere is <strong>under-collecting in the higher regions</strong>. We reconfigure the <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> so the correct regional rate applies by location, set the reduced 1% grocery rate where it applies, and reconcile the prior periods." },
    { title: "Cross-border staff are over-withheld for Virginia.", body: "Under Virginia&rsquo;s reciprocity with <strong>Maryland, Pennsylvania, West Virginia, Kentucky, and DC</strong>, a resident of those jurisdictions working in Virginia with limited presence (generally 183 days or fewer, no Virginia home, wage income only) is taxed only by their home state once <strong>Form VA-4</strong> is on file &mdash; a file still withholding Virginia tax over-withholds cross-border staff all year. We collect the exemption forms, switch the withholding per employee, and tie it to the filed returns." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Virginia QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Virginia) gross-receipts tracking by locality for the BPOL tax, the variable regional sales tax (5.3% / 6.0% / 7.0%), and MD/PA/WV/KY/DC reciprocity (Form VA-4) across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of localities you owe BPOL in, your sales-tax exposure across the regional rates, the number of reciprocity states you withhold for, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Virginia businesses across the Commonwealth&rsquo;s counties and independent cities. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, gross-receipts-by-locality setup for BPOL, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Virginia QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "BPOL gross-receipts-by-locality tracking", body: "The file rebuilt to <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">track gross receipts by jurisdiction</a> &mdash; so a business owing <strong>BPOL in several Virginia localities</strong> can allocate revenue to each and support a <strong>separate BPOL filing per jurisdiction</strong> &mdash; with the BTPP and Machinery &amp; Tools asset detail kept locality-ready. We do the tracking; you or your CPA make the locality filing. Confirm each locality&rsquo;s BPOL rate and classification with its commissioner of the revenue." },
    { num: "06", title: "Regional sales tax &amp; reciprocity tie-out", body: "QuickBooks sales-tax items reconfigured for Virginia&rsquo;s <strong>variable regional rates</strong> (5.3% general; 6.0% in Northern Virginia, Hampton Roads, and Richmond; 7.0% in the Historic Triangle) where one rate was charged across regions, with the reduced 1% grocery rate set where it applies; and cross-border staff switched to home-state withholding under Virginia&rsquo;s <strong>MD/PA/WV/KY/DC reciprocity</strong> once <strong>Form VA-4</strong> is on file. Reconciled to filed returns; confirm the regional rate by location against the Virginia Tax rate lookup." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the distributive-share detail clean for a growing pass-through&rsquo;s PTET-election evaluation. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Gross-receipts-by-locality tracking for BPOL, the variable regional sales tax sourced by location, and MD/PA/WV/KY/DC reciprocity withholding per employee. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>BPOL gross receipts:</strong> from all revenue in one account to gross receipts tracked by locality so a separate BPOL filing per jurisdiction is supportable &mdash; reducing notice risk.",
    "<strong>Regional sales tax:</strong> from one rate charged across regions to the 5.3% / 6.0% / 7.0% rates configured by location, with under-collection in the higher regions corrected and reconciled.",
    "<strong>Reciprocity:</strong> from MD/PA/WV/KY/DC-resident staff over-withheld for Virginia to VA-4 reciprocity withholding switched per employee and tied to the filed returns.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. VA-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or setting up gross-receipts tracking by locality for a single-jurisdiction BPOL fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=virginia&amp;state=virginia&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, gross-receipts-by-locality tracking for BPOL, the variable regional sales tax, MD/PA/WV/KY/DC reciprocity, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=virginia&amp;state=virginia&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-locality BPOL gross-receipts allocation with cross-border VA-4 reciprocity staff, multi-entity QuickBooks Enterprise and multi-state nexus files for Virginia contractors and IT firms, and post-corruption restoration with full statement validation.", href: "/contact/?intent=virginia&amp;state=virginia&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of localities you owe BPOL in, your sales-tax exposure across the regional rates, the number of reciprocity states you withhold for, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "Virginia&rsquo;s counties and independent cities, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "Virginia bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, gross-receipts-by-locality review for BPOL, and regional sales-tax sub-reconciliation across the 5.3% / 6.0% / 7.0% rates.", href: "/find-an-accountant/virginia/bookkeeping-services/", cta: "Virginia bookkeeping &rarr;" },
    { title: "Virginia QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, gross-receipts tracking by locality for BPOL, the variable regional sales tax, and MD/PA/WV/KY/DC reciprocity &mdash; is often the better path.", href: "/find-an-accountant/virginia/quickbooks-setup/", cta: "Virginia setup &rarr;" },
    { title: "Sales tax compliance", body: "Virginia sales-tax setup (the 5.3% / 6.0% / 7.0% regional rates, the reduced 1% grocery rate, the data-center exemption) and the multi-state nexus review that keeps your filings and books in agreement across the MD, NC, and TN lines.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, gross-receipts tracking by locality for the BPOL tax, the variable regional sales tax (5.3% / 6.0% / 7.0%), MD/PA/WV/KY/DC reciprocity (Form VA-4) &middot; Virginia, federal, payroll, BPOL/local, and sales-tax filing coordinated with your CPA/EA, the Virginia Department of Taxation, and your locality" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (VA cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Virginia?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Virginia businesses, cleanup also rebuilds the file to track gross receipts by locality so each jurisdiction&rsquo;s BPOL is supportable, re-sources sales tax where one rate was charged across Virginia&rsquo;s 5.3% / 6.0% / 7.0% regions, and switches cross-border staff to home-state withholding under the MD/PA/WV/KY/DC reciprocal agreements (Form VA-4) &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, gross-receipts-by-locality setup for BPOL, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Virginia?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many localities you owe BPOL in, your sales-tax exposure across the regional rates, how many reciprocity states you withhold for, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Virginia local business tax get missed in QuickBooks so often?", a: "Because Virginia has no local income tax, so generic out-of-state bookkeeping assumes the local burden is on payroll &mdash; but in Virginia it&rsquo;s on the business side. Most cities and counties levy a BPOL tax on gross receipts, the rate is set by each locality and business classification, and a business operating in several Virginia jurisdictions generally needs a separate BPOL for each. A file that runs all revenue through one account can&rsquo;t allocate gross receipts by jurisdiction, so the BPOL filings aren&rsquo;t supportable. Cleanup rebuilds the file to tag gross receipts by locality and keeps the BTPP and Machinery &amp; Tools asset detail ready. We do the tracking; you or your CPA file with the locality. Confirm each locality&rsquo;s rate with its commissioner of the revenue." },
    { q: "Will cleanup fix one-rate sales tax and cross-border over-withholding?", a: "Yes. Virginia&rsquo;s sales tax is variable by region &mdash; 5.3% in most of the state, 6.0% in Northern Virginia, Hampton Roads, and the Richmond region, and 7.0% in the Historic Triangle &mdash; so a file charging one rate everywhere under-collects in the higher regions. We reconfigure the sales-tax items so the correct regional rate applies by location and reconcile the prior periods. We also switch cross-border staff to home-state withholding under Virginia&rsquo;s reciprocity with Maryland, Pennsylvania, West Virginia, Kentucky, and DC once Form VA-4 is on file, so staff who qualify stop being over-withheld for Virginia." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Virginia businesses across the Commonwealth&rsquo;s counties and independent cities." },
    { q: "Will my Virginia CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, gross receipts tracked by locality so each BPOL filing is supportable, sales tax sourced at the correct regional rate, and cross-border staff withheld under VA-4 reciprocity. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/virginia/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Virginia QuickBooks Cleanup","description":"QuickBooks file cleanup for Virginia businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, gross-receipts tracking by locality for the BPOL tax, the variable regional sales tax (5.3% / 6.0% / 7.0%), and MD/PA/WV/KY/DC reciprocity (Form VA-4). Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-virginia-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#va-svc-qbcleanup-summary","#va-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Virginia","item":"https://techbrot.com/find-an-accountant/virginia/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Virginia QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Virginia businesses — file repair, reconciliation rebuild, undeposited-funds clearing, gross-receipts tracking by locality for the BPOL tax, the variable regional sales tax (5.3% / 6.0% / 7.0%), and MD/PA/WV/KY/DC reciprocity (Form VA-4), delivered by a Certified ProAdvisor served remotely across Virginia's counties and independent cities. Independent Certified QuickBooks ProAdvisor firm; does not file Virginia, federal, corporate income tax, the state income tax, payroll-withholding, the sales-tax return, the BPOL or local business-tax returns, or the PTET return — coordinates with the client's CPA, EA, the Virginia Department of Taxation, and the locality.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Virginia","sameAs":"https://en.wikipedia.org/wiki/Virginia"},
          "audience":{"@type":"BusinessAudience","audienceType":"Virginia small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
