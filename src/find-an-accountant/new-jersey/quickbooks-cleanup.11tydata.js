/* /find-an-accountant/new-jersey/quickbooks-cleanup/ — NJ SERVICE child (QB spoke), t-money.
 * Mirrors the proven PA child (pennsylvania/quickbooks-cleanup.*) with New Jersey content per
 * NJ-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * NJ LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): PA's Act 32
 * EIT-by-PSD-code → NJ's multi-fund payroll-contribution stack (UI/TDI/FLI/WF, employer + employee,
 * across TWO 2026 wage bases — $44,800 and $171,100, employee TDI 0.19% / FLI 0.23%) often set with
 * only one wage base or stale rates; PA's reciprocity angle stays (a PA resident working in NJ files
 * Form NJ-165 and is withheld for PA, not NJ — a common over-withholding fix); PA's split-rate sales
 * tax → NJ's 6.625% statewide with the UEZ / Salem County half-rate (3.3125%) that a UEZ business
 * often mis-charges at the full rate; PLUS Newark and Jersey City employer payroll taxes (~1%,
 * employer-side) a messy file is usually missing. Rates framed per NJ-FACTS: GIT middle brackets and
 * experience-rated employer UI/TDI never quoted; Newark/JC rates qualitative ("about 1%"); the 2026
 * employee TDI 0.19% / FLI 0.23% and the wage bases ARE stated facts and may be used.
 * PRICING: NJ-FACTS gives "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively
 * (no fabricated dollar ranges). provider = #organization; areaServed = State New Jersey (NO street
 * address, NO LocalBusiness, NO PostalAddress/geo/hasMap — areaServed-only); reviewedBy
 * #david-westgate on WebPage. ROUTING (NJ core state, 6 pages): NJ cross-links limited to the
 * pillar + 4 siblings (quickbooks-accountant, small-business-accountant, bookkeeping-services,
 * quickbooks-setup); everything else routes to an existing GLOBAL page. HONESTY (R5): no invented
 * reviews/stats/clients/outcomes; outcomes are representative capability-level statements; firm-
 * level review byline (no founder name). Independent firm — does NOT file New Jersey/federal/
 * Corporation Business Tax/gross income tax/UI-TDI-FLI/Newark-Jersey City/sales-tax returns; not a
 * registered agent; coordinates with the client's CPA/EA, the NJ Division of Taxation, NJ DOL, and
 * the cities. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to New Jersey businesses across all 21 counties from our Delaware headquarters next door. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What New Jersey QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for New Jersey businesses, correcting a <a href=\"/quickbooks/payroll/\">UI/TDI/FLI/WF payroll stack</a> set with only one wage base or stale employee rates, switching Pennsylvania-resident workers to PA withholding under the PA&ndash;NJ reciprocal agreement (Form NJ-165), adding Newark or Jersey City employer payroll-tax tracking, and re-sourcing <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> charged at the full 6.625% where a UEZ or Salem County business should charge the 3.3125% half-rate.",
    "The work is diagnostic before it is corrective. A messy New Jersey file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, payroll running with only one wage base instead of the two New Jersey uses, a sales-tax payable that no longer matches the filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a payroll item ignoring the second wage base or the employee TDI/FLI rates, a UEZ sale taxed at the full 6.625% &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 21 New Jersey counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file New Jersey taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Payroll funds are mis-set, or you&rsquo;re running on only one wage base.", body: "New Jersey payroll is where generic out-of-state bookkeeping goes wrong. The <a href=\"/find-an-accountant/new-jersey/quickbooks-accountant/\">UI/TDI/FLI/WF stack</a> runs across <strong>two wage bases</strong> &mdash; $44,800 for UI/WF and $171,100 for employee TDI and FLI in 2026 &mdash; with both employer and employee contributions, and the 2026 employee rates are 0.19% (TDI) and 0.23% (FLI). A file with only one wage base, stale rates, or missing funds is a common and costly fix; we rebuild each fund and reconcile it." },
    { title: "PA-resident staff are over-withheld, or city payroll tax isn&rsquo;t tracked.", body: "Under the PA&ndash;NJ reciprocal agreement, a Pennsylvania resident working in New Jersey files <strong>Form NJ-165</strong> and is withheld for Pennsylvania, not New Jersey &mdash; a file still withholding NJ tax over-withholds all year. So does a Newark or Jersey City employer with no <strong>employer payroll tax</strong> tracked in the books. We collect the NJ-165s, switch the withholding per employee, and add the city payroll-tax tracking before it becomes a notice." },
    { title: "A UEZ business is charging the full 6.625% sales tax.", body: "New Jersey sales tax is <strong>6.625% statewide</strong>, but a certified Urban Enterprise Zone or Salem County business should charge the <strong>3.3125% half-rate</strong> on qualifying sales &mdash; a file charging the full rate is wrong, and the qualifying and non-qualifying sales need separating. We correct the <a href=\"/accounting/sales-tax-compliance/\">sales-tax sourcing</a> and reconcile it to the filed returns." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: New Jersey QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for New Jersey) the UI/TDI/FLI/WF payroll stack across both wage bases, PA&ndash;NJ reciprocity (Form NJ-165), Newark/Jersey City employer payroll-tax tracking, and UEZ/Salem half-rate sales-tax sourcing across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of payroll funds and wage bases to rebuild, cross-border and city payroll-tax exposure, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to New Jersey businesses across all 21 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, UI/TDI/FLI payroll correction, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What New Jersey QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "UI/TDI/FLI/WF payroll-stack correction", body: "The <a href=\"/quickbooks/payroll/\">New Jersey payroll stack</a> rebuilt across <strong>both 2026 wage bases</strong> ($44,800 for UI/WF; $171,100 for employee TDI and FLI), with the 2026 employee rates (TDI 0.19%, FLI 0.23%) set and the experience-rated employer funds confirmed against the NJ DOL notice, and the quarterly figures reconciled &mdash; key if you&rsquo;re behind or were noticed. We do the tie-out; your CPA files. Confirm current figures with the NJ Department of Labor." },
    { num: "06", title: "Reciprocity &amp; city payroll-tax tie-out", body: "Pennsylvania-resident workers switched to PA withholding under the <strong>PA&ndash;NJ reciprocal agreement</strong> once <strong>Form NJ-165</strong> is on file, and <strong>Newark</strong> or <strong>Jersey City</strong> employer payroll-tax tracking added to the books where it applies (employer-side, roughly 1%, rates current as of the review date). Reconciled to filed returns." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the pass-through income detail clean for a growing firm&rsquo;s BAIT evaluation. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. UI/TDI/FLI/WF payroll correction across both wage bases, NJ-165 reciprocity withholding, Newark/Jersey City payroll-tax tracking, and UEZ/Salem half-rate sales-tax sourcing. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>UI/TDI/FLI/WF payroll:</strong> from one wage base and stale rates to the full stack rebuilt across both 2026 wage bases with the employee TDI/FLI rates set and the funds reconciled &mdash; reducing notice risk.",
    "<strong>Reciprocity &amp; city tax:</strong> from PA-resident staff over-withheld for New Jersey and untracked Newark/Jersey City payroll tax to NJ-165 withholding switched per employee and the city liability tracked.",
    "<strong>Sales tax:</strong> from the full 6.625% charged on qualifying UEZ or Salem County sales to the correct 3.3125% half-rate, with qualifying and non-qualifying sales separated and reconciled.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. NJ-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a one-wage-base payroll fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=new-jersey&amp;state=new-jersey&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, UI/TDI/FLI/WF correction, NJ-165 reciprocity, city payroll-tax tracking, UEZ sales-tax sourcing, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=new-jersey&amp;state=new-jersey&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-fund payroll with cross-border NJ-165 staff and Newark/Jersey City exposure, multi-entity QuickBooks Enterprise and multi-state nexus files for New Jersey shippers and manufacturers, and post-corruption restoration with full statement validation.", href: "/contact/?intent=new-jersey&amp;state=new-jersey&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of payroll funds and wage bases to rebuild, cross-border and city payroll-tax exposure, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 21 New Jersey counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "New Jersey bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, UI/TDI/FLI payroll review, and sales-tax sub-reconciliation including the UEZ/Salem half-rate.", href: "/find-an-accountant/new-jersey/bookkeeping-services/", cta: "New Jersey bookkeeping &rarr;" },
    { title: "New Jersey QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, the UI/TDI/FLI/WF payroll stack across both wage bases, reciprocity, and the 6.625% / 3.3125% sales-tax setup &mdash; is often the better path.", href: "/find-an-accountant/new-jersey/quickbooks-setup/", cta: "New Jersey setup &rarr;" },
    { title: "Sales tax compliance", body: "New Jersey sales-tax setup (6.625% statewide, 3.3125% UEZ/Salem half-rate) and the multi-state nexus review that keeps your filings and books in agreement across the NY and PA lines.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, UI/TDI/FLI/WF payroll across both wage bases, PA&ndash;NJ reciprocity (NJ-165), Newark/Jersey City payroll-tax tracking, 6.625% / 3.3125% UEZ sales-tax sourcing &middot; New Jersey, federal, payroll, city, and sales-tax filing coordinated with your CPA/EA, the NJ Division of Taxation, and NJ DOL" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (NJ cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in New Jersey?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For New Jersey businesses, cleanup also corrects a UI/TDI/FLI/WF payroll stack set with only one wage base or stale rates, switches Pennsylvania-resident workers to PA withholding under the reciprocal agreement (Form NJ-165), adds Newark or Jersey City employer payroll-tax tracking, and re-sources sales tax charged at the full 6.625% where a UEZ or Salem County business should charge the 3.3125% half-rate &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, UI/TDI/FLI payroll correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in New Jersey?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many payroll funds and wage bases need rebuilding, your cross-border and Newark/Jersey City payroll-tax exposure, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does New Jersey payroll get mis-configured in QuickBooks so often?", a: "Because graduated income-tax withholding is the easy part &mdash; the complexity is the multi-fund stack. New Jersey funds Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) through payroll, with both employer and employee contributions across two wage bases ($44,800 and, for employee TDI/FLI, $171,100 in 2026), and the 2026 employee rates are 0.19% (TDI) and 0.23% (FLI). Generic out-of-state bookkeeping commonly runs one wage base or stale rates, which is wrong all year. Cleanup rebuilds each fund across both bases and reconciles the quarterly figures. We do the tie-out; your CPA files." },
    { q: "Will cleanup fix PA-resident over-withholding and the UEZ sales-tax rate?", a: "Yes. Under the PA&ndash;NJ reciprocal agreement, a Pennsylvania resident working in New Jersey files Form NJ-165 and is withheld for Pennsylvania, not New Jersey &mdash; we collect the forms and switch the withholding per employee so cross-border staff stop being over-withheld. We also re-source sales tax so a certified Urban Enterprise Zone or Salem County business charges the 3.3125% half-rate on qualifying sales instead of the full 6.625%, with qualifying and non-qualifying sales separated. Newark and Jersey City employer payroll taxes are tracked where they apply." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to New Jersey businesses across all 21 counties." },
    { q: "Will my New Jersey CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, with the UI/TDI/FLI/WF stack rebuilt across both wage bases, NJ-165 reciprocity withholding switched per employee, Newark/Jersey City payroll tax tracked, and sales tax sourced at the correct 6.625% / 3.3125% rate. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-jersey/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New Jersey QuickBooks Cleanup","description":"QuickBooks file cleanup for New Jersey businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, the UI/TDI/FLI/WF payroll stack across both wage bases, PA–NJ reciprocity (Form NJ-165), Newark/Jersey City payroll-tax tracking, and 6.625% / 3.3125% UEZ sales-tax sourcing. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-jersey-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nj-svc-qbcleanup-summary","#nj-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New Jersey","item":"https://techbrot.com/find-an-accountant/new-jersey/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"New Jersey QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for New Jersey businesses — file repair, reconciliation rebuild, undeposited-funds clearing, the UI/TDI/FLI/WF payroll stack across both wage bases, PA–NJ reciprocity (Form NJ-165), Newark/Jersey City employer payroll-tax tracking, and 6.625% / 3.3125% UEZ sales-tax sourcing, delivered by a Certified ProAdvisor served remotely across all 21 counties. Independent Certified QuickBooks ProAdvisor firm; does not file New Jersey, federal, Corporation Business Tax, gross income tax, UI/TDI/FLI payroll, Newark/Jersey City payroll-tax, or sales-tax returns — coordinates with the client's CPA, EA, the NJ Division of Taxation, and NJ DOL.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New Jersey","sameAs":"https://en.wikipedia.org/wiki/New_Jersey"},
          "audience":{"@type":"BusinessAudience","audienceType":"New Jersey small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
