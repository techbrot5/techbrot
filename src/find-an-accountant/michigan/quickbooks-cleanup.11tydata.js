/* /find-an-accountant/michigan/quickbooks-cleanup/ — MI SERVICE child (QB spoke), t-money.
 * Mirrors the proven OH child (ohio/quickbooks-cleanup.*) with Michigan content per
 * MI-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * MI LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): OH's
 * municipal income tax (649 cities + school districts, the 20-day rule, RITA/CCA) → MI's CITY
 * income tax under the City Income Tax Act (CITA, 1964 PA 284), levied by just 24 cities and
 * withheld by WORK LOCATION for nonresidents — far simpler than Ohio (no school-district layer,
 * no 20-day rule) but a file that applies one city's rate to everyone still withholds the wrong
 * city tax all year. Detroit 2.4%/1.2% (VERIFIED, Treasury-administered); Grand Rapids & Saginaw
 * 1.5%/0.75%; Highland Park 2%/1%; the other ~20 cities at the CITA base 1%/0.5% (non-Detroit
 * individual rates framed QUALITATIVELY). The cleanup-specific MI hooks: wrong-city tax
 * withholding, misclassified owner compensation (draws vs. wages so the S-corp / FTE position is
 * supportable), untracked CIT apportionment (MI's REAL 6% Corporate Income Tax on C-corps — the
 * clean contrast to OH's no-corp-tax CAT), FTE-readiness (elective flow-through entity tax at the
 * 4.25% IIT rate, SALT-cap workaround, Form 5772), and unreconciled accounts. Sales tax is a FLAT
 * 6% statewide with NO local add-on (vs OH's county-variable) — a file that drifted from one rate
 * is the fix. State income tax is a FLAT 4.25% (confirmed 2026). Reciprocity IL/IN/KY/MN/OH/WI
 * (Form MI-W4) exempts cross-border residents from MI STATE withholding only — the CITY tax still
 * applies, and it does not cover contractors or non-wage income. PRICING: MI-FACTS gives
 * "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively (no fabricated dollar
 * ranges). provider = #organization; areaServed = State Michigan (NO street address, NO
 * LocalBusiness, NO PostalAddress/geo/hasMap — areaServed-only); reviewedBy #david-westgate on
 * WebPage. ROUTING (MI core state, 6 pages): MI cross-links limited to the pillar + 4 siblings
 * (quickbooks-accountant, small-business-accountant, bookkeeping-services, quickbooks-setup);
 * everything else routes to an existing GLOBAL page. HONESTY (R5): no invented reviews/stats/
 * clients/outcomes; outcomes are representative capability-level statements; firm-level review
 * byline (no founder name). Independent firm — does NOT file Michigan/federal/the CIT/the
 * individual income tax/the city income-tax filings/the sales-tax return/the FTE (Form 5772)
 * return; not a registered agent; coordinates with the client's CPA/EA, the Michigan Dept of
 * Treasury, and the city. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Michigan businesses across all 83 counties from our Delaware headquarters. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Michigan QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Michigan businesses, correcting <a href=\"/quickbooks/payroll/\">payroll</a> that withholds one city&rsquo;s income tax for everyone because work-location withholding across the 24 City Income Tax Act cities (Detroit at 2.4%/1.2%) was never configured, untangling <strong>misclassified owner compensation</strong> so the S-corp or flow-through entity position is supportable, and tracking <strong>Corporate Income Tax apportionment</strong> against the 6% CIT while confirming <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> at the flat 6% statewide rate.",
    "The work is diagnostic before it is corrective. A messy Michigan file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, payroll applying one city&rsquo;s rate to everyone instead of each employee&rsquo;s work location, owner compensation booked as a draw or an expense so the S-corp or FTE position can&rsquo;t be supported, Corporate Income Tax apportionment nobody has measured, a sales-tax payable that no longer matches the flat 6% filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a payroll item pointed at the wrong city, an owner draw posted as wages &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 83 Michigan counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Michigan taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Payroll withholds one city&rsquo;s income tax for everyone.", body: "Michigan payroll is where generic out-of-state bookkeeping goes wrong. <a href=\"/find-an-accountant/michigan/quickbooks-accountant/\">24 Michigan cities</a> levy a city income tax under the City Income Tax Act, generally withheld by the <strong>city where the work is performed</strong> for nonresidents &mdash; <strong>Detroit at 2.4% resident / 1.2% nonresident</strong>, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%. It&rsquo;s far simpler than Ohio (no school districts, no 20-day rule), but a file that applies one city&rsquo;s rate to everyone, or misses the resident/nonresident split, withholds the wrong city tax all year. We rebuild work-location withholding per employee and reconcile it." },
    { title: "Owner compensation is misclassified.", body: "Owner pay booked as a draw when it should be wages &mdash; or run as wages with no reasonable-compensation basis &mdash; quietly breaks the file for an <strong>S-corp</strong> or a <strong>flow-through entity</strong> decision. We separate owner draws, distributions, and W-2 wages cleanly and keep the distributive-share detail straight, so the books support the position your CPA takes and the <strong>4.25% FTE election</strong> can be evaluated on real numbers." },
    { title: "CIT apportionment and the sales-tax rate are untracked.", body: "Michigan levies a <strong>real 6% Corporate Income Tax</strong> on C-corporations &mdash; unlike Ohio, which has none &mdash; on the apportioned base, so a file that never tracks Michigan-sourced receipts can&rsquo;t support the apportionment. And sales tax is a <strong>flat 6% statewide</strong> with no local add-on, so a payable that drifted from one rate is simply wrong. We keep the receipts CIT-ready and confirm the <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> at the single 6% rate, nexus scoped." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Michigan QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Michigan) the city income tax by work location across the 24 City Income Tax Act cities (Detroit 2.4%/1.2%), misclassified owner compensation, Corporate Income Tax apportionment against the 6% CIT, flow-through entity readiness, and the flat 6% sales-tax setup across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of cities you withhold for, whether you owe the 6% CIT or should evaluate the FTE election, your sales-tax exposure, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Michigan businesses across all 83 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, city work-location tax correction, owner-compensation cleanup, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Michigan QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "City income tax withholding correction", body: "The Michigan <a href=\"/quickbooks/payroll/\">city income tax</a> rebuilt per employee by <strong>work location</strong> across the <strong>24 City Income Tax Act cities</strong> &mdash; correcting a file that applied one city&rsquo;s rate to everyone or missed the resident/nonresident split (Detroit at <strong>2.4%/1.2%</strong>, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%) &mdash; with the local withholding reconciled. No school-district layer, no 20-day rule &mdash; far simpler than Ohio. We do the tie-out; your CPA files. Confirm current city rates against the city or Michigan Treasury." },
    { num: "06", title: "Owner compensation &amp; CIT/FTE tie-out", body: "Misclassified owner pay separated into <strong>draws, distributions, and W-2 wages</strong> so the <strong>S-corp</strong> or <strong>flow-through entity</strong> position is supportable, with the distributive-share detail kept clean for the <strong>4.25% FTE election</strong> (Form 5772). Michigan-sourced receipts measured and kept <strong>CIT-ready</strong> for the apportioned 6% Corporate Income Tax. Reconciled to filed returns; the CPA makes the election and files." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the owner-equity and distributive-share detail clean for a growing pass-through&rsquo;s FTE-election evaluation. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. City income tax rebuilt by work location across the 24 CITA cities, owner compensation reclassified for the S-corp/FTE position, CIT apportionment kept ready against the 6% rate, and the flat 6% sales-tax items confirmed. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>City tax:</strong> from one city&rsquo;s rate applied to everyone to work-location withholding rebuilt per employee across the 24 CITA cities (Detroit at the right 2.4%/1.2% resident/nonresident rate) and reconciled &mdash; reducing notice risk.",
    "<strong>Owner compensation:</strong> from draws, distributions, and wages tangled together to a clean split that supports the S-corp or flow-through entity position and the 4.25% FTE election.",
    "<strong>CIT &amp; sales tax:</strong> from untracked apportionment and a drifted sales rate to Michigan-sourced receipts kept CIT-ready against the 6% rate and the flat 6% sales tax confirmed by item.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. MI-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a wrong-city withholding fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=michigan&amp;state=michigan&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, city work-location correction, owner-compensation cleanup, CIT/FTE readiness, the flat 6% sales-tax items, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=michigan&amp;state=michigan&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-city CITA payroll, multi-entity QuickBooks Enterprise and multi-state nexus files for Michigan manufacturers and logistics firms, and post-corruption restoration with full statement validation.", href: "/contact/?intent=michigan&amp;state=michigan&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of cities you withhold for, whether you owe the 6% CIT or should evaluate the FTE election, your sales-tax footprint, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 83 Michigan counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "Michigan bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, city work-location tax review, owner-compensation checks, and CIT/FTE and sales-tax sub-reconciliation.", href: "/find-an-accountant/michigan/bookkeeping-services/", cta: "Michigan bookkeeping &rarr;" },
    { title: "Michigan QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, city-tax withholding by work location (Detroit/Grand Rapids), and the flat 6% sales-tax setup &mdash; is often the better path.", href: "/find-an-accountant/michigan/quickbooks-setup/", cta: "Michigan setup &rarr;" },
    { title: "Sales tax compliance", body: "Michigan sales-tax setup at the flat 6% statewide rate (no local add-on anywhere) and the multi-state nexus review that keeps your filings and books in agreement across the Ohio, Indiana, and Wisconsin lines.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, the city income tax by work location across the 24 CITA cities (Detroit 2.4%/1.2%), owner-compensation cleanup, CIT apportionment and FTE readiness against the 6% rate, and flat 6% sales-tax setup &middot; Michigan, federal, the CIT, the individual income tax, the city, and sales-tax filing coordinated with your CPA/EA, the Michigan Dept of Treasury, and the city" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (MI cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Michigan?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Michigan businesses, cleanup also corrects payroll that withholds one city&rsquo;s income tax for everyone because work-location withholding across the 24 City Income Tax Act cities was never configured, untangles misclassified owner compensation so the S-corp or flow-through entity position is supportable, and tracks Corporate Income Tax apportionment and the flat 6% sales-tax setup the file was ignoring &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, city work-location tax correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Michigan?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many cities you withhold for, whether you owe the 6% CIT or should evaluate the FTE election, your sales-tax exposure, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Michigan payroll get mis-configured in QuickBooks so often?", a: "Because the state income tax is the easy part &mdash; a flat 4.25% &mdash; and the complexity is the city income tax. 24 Michigan cities levy a city income tax under the City Income Tax Act, generally withheld for the city where the work is performed (for nonresidents): Detroit at 2.4% resident / 1.2% nonresident, Grand Rapids and Saginaw at 1.5%/0.75%, Highland Park at 2%/1%, and most others at 1%/0.5%. It&rsquo;s far simpler than Ohio &mdash; no school districts, no 20-day rule &mdash; but generic out-of-state bookkeeping commonly applies one city&rsquo;s rate to everyone or misses the resident/nonresident split, which is wrong all year. Cleanup rebuilds work-location withholding per employee and reconciles it. We do the tie-out; your CPA files. Confirm current city rates against the city or Michigan Treasury." },
    { q: "Will cleanup fix misclassified owner compensation and untracked CIT apportionment?", a: "Yes. Owner pay tangled across draws, distributions, and wages quietly breaks the file for an S-corp or a flow-through entity decision, so we separate it cleanly and keep the distributive-share detail straight, ready for the 4.25% FTE election (Form 5772). Michigan also levies a real 6% Corporate Income Tax on C-corporations &mdash; unlike Ohio, which has none &mdash; on the apportioned base, so we measure your Michigan-sourced receipts and keep them CIT-ready. The sales tax is a flat 6% statewide with no local add-on, which we confirm by item. We reconcile to the filed returns; your CPA makes the election and files." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Michigan businesses across all 83 counties." },
    { q: "Will my Michigan CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, the city income tax rebuilt per employee by work location across the 24 CITA cities, owner compensation split cleanly for the S-corp or FTE position, Michigan-sourced receipts kept CIT-ready against the 6% rate, and sales tax confirmed at the flat 6% statewide rate. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/michigan/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Michigan QuickBooks Cleanup","description":"QuickBooks file cleanup for Michigan businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, the city income tax by work location across the 24 City Income Tax Act cities (Detroit 2.4%/1.2%), misclassified owner compensation, Corporate Income Tax apportionment against the 6% CIT, flow-through entity readiness, and the flat 6% sales-tax setup. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-michigan-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#mi-svc-qbcleanup-summary","#mi-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Michigan","item":"https://techbrot.com/find-an-accountant/michigan/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Michigan QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Michigan businesses — file repair, reconciliation rebuild, undeposited-funds clearing, the city income tax by work location across the 24 City Income Tax Act cities (Detroit 2.4%/1.2%), misclassified owner-compensation cleanup, Corporate Income Tax apportionment against the 6% CIT, flow-through entity readiness, and the flat 6% sales-tax setup, delivered by a Certified ProAdvisor served remotely across all 83 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Michigan, federal, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales and use tax return, or the flow-through entity (Form 5772) return — coordinates with the client's CPA, EA, the Michigan Department of Treasury, and the city.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Michigan","sameAs":"https://en.wikipedia.org/wiki/Michigan"},
          "audience":{"@type":"BusinessAudience","audienceType":"Michigan small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
