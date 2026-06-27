/* /find-an-accountant/north-carolina/quickbooks-cleanup/ — NC SERVICE child (QB spoke), t-money.
 * Mirrors the proven GA child (georgia/quickbooks-cleanup.*) with North Carolina content per
 * NC-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * NC LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): like GA,
 * North Carolina has NO local/city income tax (state-only withholding) AND NO reciprocity, so all
 * NC-source wages are withheld for the state — the multi-state/remote-employer trap. The cleanup-
 * specific NC hooks: a sales-tax setup charging a SINGLE statewide rate because the county local
 * (2.00%/2.25%) and transit (0.50%, 4 counties) add-ons that push the combined rate to 6.75-7.50%
 * by county (Mecklenburg/Charlotte rising to 8.25% July 1 2026) were never configured (the common
 * NC error); untracked landed cost/inventory (Port-of-Wilmington logistics); a MESSY EQUITY SECTION
 * that obscures the FRANCHISE-TAX base (CD-405/CD-401S); misclassified owner comp (draws vs. wages
 * so the S-corp / Taxed PTE position is supportable); and unreconciled accounts. State income tax
 * is a FLAT 3.99% (2026, still phasing down, S.L. 2023-134). The NC-distinct headline vs GA: the
 * corporate income tax is being PHASED OUT TO ZERO (2.00% in 2026 → zero by 2030, S.L. 2021-180 /
 * G.S. 105-130.3C) BUT the FRANCHISE TAX survives it — $1.50 per $1,000 of tax base, $200 minimum,
 * $500 cap on the first $1,000,000, holding companies capped at $150,000. Taxed PTE election
 * (G.S. 105-154.1) at the entity level is the SALT-cap advisory hook. PRICING: NC-FACTS gives
 * "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively (no fabricated dollar
 * ranges). provider = #organization; areaServed = State North Carolina (NO street address, NO
 * LocalBusiness, NO PostalAddress/geo/hasMap — areaServed-only); reviewedBy #david-westgate on
 * WebPage. ROUTING (NC core state, 6 pages): NC cross-links limited to the pillar + siblings
 * (quickbooks-accountant, bookkeeping-services, quickbooks-setup); everything else routes to an
 * existing GLOBAL page. HONESTY (R5): no invented reviews/stats/clients/outcomes; outcomes are
 * representative capability-level statements; firm-level review byline (no founder name).
 * Independent firm — does NOT file NC/federal/the corporate income tax/the franchise tax/the
 * individual income tax/the sales-tax return/the Taxed PTE election; not a registered agent;
 * coordinates with the client's CPA/EA and the NC Dept of Revenue. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to North Carolina businesses across all 100 counties from our Delaware headquarters. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What North Carolina QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for North Carolina businesses, correcting a <a href=\"/accounting/sales-tax-compliance/\">sales-tax</a> setup that charges one statewide rate because the county and transit add-ons that push the combined rate to 6.75&ndash;7.50% by county were never configured, untangling <strong>misclassified owner compensation</strong> so the S-corp or Taxed PTE position is supportable, and cleaning a <strong>messy equity section</strong> so the balance sheet is franchise-tax-ready for the CD-405/CD-401S.",
    "The work is diagnostic before it is corrective. A messy North Carolina file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, a sales-tax setup charging one statewide rate instead of the correct combined rate by county, landed cost and inventory buried in a single account, owner compensation booked as a draw or an expense so the S-corp or Taxed PTE position can&rsquo;t be supported, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post &mdash; leaving an equity section that isn&rsquo;t franchise-tax-ready. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a sales-tax item pointed at the wrong county, an owner draw posted as wages &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 100 North Carolina counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file North Carolina taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "QuickBooks charges one sales-tax rate for the whole state.", body: "North Carolina sales tax is where generic out-of-state bookkeeping goes wrong. The state rate is <strong>4.75%</strong>, but counties add a <strong>2.00% or 2.25% local rate</strong> and four counties add a <strong>0.50% transit rate</strong>, so the combined rate runs about <strong>6.75% to 7.50%</strong> and varies by county &mdash; and Mecklenburg (Charlotte) rises to <strong>8.25% on July 1, 2026</strong>. A file that charges a single statewide rate is wrong for most destinations. We rebuild the <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> by county so the correct combined rate applies by location, and scope multi-state nexus where it&rsquo;s triggered." },
    { title: "Owner compensation is misclassified.", body: "Owner pay booked as a draw when it should be wages &mdash; or run as wages with no reasonable-compensation basis &mdash; quietly breaks the file for an <strong>S-corp</strong> or a <strong>pass-through entity</strong> decision. We separate owner draws, distributions, and W-2 wages cleanly and keep the distributive-share detail straight, so the books support the position your CPA takes and the <strong>Taxed PTE election</strong> can be evaluated on real numbers." },
    { title: "The equity section isn&rsquo;t franchise-tax-ready.", body: "North Carolina keeps a <strong>corporate franchise tax</strong> &mdash; $1.50 per $1,000 of the tax base, a $200 minimum, a $500 cap on the first $1,000,000, holding companies capped at $150,000 &mdash; that survives even as the corporate income tax phases out to zero by 2030, filed on the <strong>CD-405/CD-401S</strong>, so a messy equity section and an opening-balance-equity catch-all make it impossible to compute cleanly. And for distributors near the Port of Wilmington, landed cost and inventory buried in one account hide the value the balance sheet should show. We clean the equity section, untangle landed cost and inventory, and keep the books franchise-tax-ready." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: North Carolina QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for North Carolina) a sales-tax setup charging one statewide rate instead of the correct combined rate by county (4.75% state plus county and transit, ~6.75&ndash;7.50%), untracked landed cost and inventory, a messy equity section kept franchise-tax-ready for the CD-405/CD-401S, misclassified owner compensation, and Taxed PTE-election readiness at the flat 3.99% rate across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of sales-tax counties you sell into, whether the franchise tax applies or you should evaluate the Taxed PTE election, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to North Carolina businesses across all 100 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, sales-tax-by-county correction, owner-compensation cleanup, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What North Carolina QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "Sales-tax rate-by-county correction", body: "North Carolina <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> rebuilt by <strong>county</strong> &mdash; correcting a file that charged a single <strong>statewide rate</strong> instead of the correct combined rate (4.75% state plus the county local rate of 2.00% or 2.25% and a 0.50% transit rate in four counties, commonly <strong>6.75&ndash;7.50%</strong>, with Mecklenburg rising to 8.25% in July 2026) &mdash; with the prior periods reconciled and the nexus footprint documented. Because the combined rate is set per county, we confirm current rates against the North Carolina Dept of Revenue rate chart. We do the tie-out; your CPA files." },
    { num: "06", title: "Owner compensation, franchise tax &amp; Taxed PTE tie-out", body: "Misclassified owner pay separated into <strong>draws, distributions, and W-2 wages</strong> so the <strong>S-corp</strong> or <strong>pass-through entity</strong> position is supportable, with the distributive-share detail kept clean for the <strong>Taxed PTE election</strong>. The <strong>equity section</strong> and balance sheet cleaned and kept <strong>franchise-tax-ready</strong> for the corporate franchise tax on the <strong>CD-405/CD-401S</strong> ($1.50 per $1,000 of tax base, $200 minimum, $500 cap on the first $1,000,000, holding companies capped at $150,000) &mdash; which survives even as the corporate income tax phases out to zero by 2030. Reconciled to filed returns; the CPA makes the election and files." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts, landed cost &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity, untangling landed cost and inventory buried in a single account, and keeping the owner-equity and distributive-share detail clean for a growing pass-through&rsquo;s Taxed PTE-election evaluation. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Sales-tax items rebuilt by county to the correct combined rate, owner compensation reclassified for the S-corp/Taxed PTE position, landed cost and inventory untangled, and the equity section cleaned franchise-tax-ready for the CD-405/CD-401S. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>Sales tax:</strong> from a single statewide rate charged on everything to the combined rate configured by county (4.75% state plus county and transit, ~6.75&ndash;7.50%) and reconciled &mdash; reducing notice risk.",
    "<strong>Owner compensation:</strong> from draws, distributions, and wages tangled together to a clean split that supports the S-corp or pass-through entity position and the Taxed PTE election.",
    "<strong>Equity &amp; franchise tax:</strong> from a messy equity section and landed cost buried in one account to a clean balance sheet kept franchise-tax-ready for the CD-405/CD-401S, with inventory value visible.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. NC-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a sales-tax-rate-by-county fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=north-carolina&amp;state=north-carolina&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, sales-tax-by-county correction, owner-compensation cleanup, franchise-tax-ready equity, landed-cost and inventory untangling, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=north-carolina&amp;state=north-carolina&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-county sales-tax files, multi-entity QuickBooks Enterprise and multi-state nexus files for North Carolina distributors, logistics firms, and manufacturers, and post-corruption restoration with full statement validation.", href: "/contact/?intent=north-carolina&amp;state=north-carolina&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of sales-tax counties you sell into, whether the franchise tax applies or you should evaluate the Taxed PTE election, your multi-state footprint, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 100 North Carolina counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "North Carolina bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, county sales-tax sub-reconciliation by location, owner-compensation checks, and a franchise-tax-ready balance sheet.", href: "/find-an-accountant/north-carolina/bookkeeping-services/", cta: "North Carolina bookkeeping &rarr;" },
    { title: "North Carolina QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, county sales-tax items by location (Charlotte, Raleigh), and state payroll withholding &mdash; is often the better path.", href: "/find-an-accountant/north-carolina/quickbooks-setup/", cta: "North Carolina setup &rarr;" },
    { title: "Sales tax compliance", body: "North Carolina sales-tax setup at the 4.75% state rate plus the county and transit rates (combined ~6.75&ndash;7.50% by county) and the multi-state nexus review that keeps your filings and books in agreement across the Virginia, South Carolina, and Georgia lines.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, the county sales tax by location (4.75% state plus county and transit, ~6.75&ndash;7.50%), owner-compensation cleanup, a franchise-tax-ready equity section for the CD-405/CD-401S, and Taxed PTE-election readiness at the flat 3.99% rate &middot; North Carolina, federal, the corporate income tax, the franchise tax, the individual income tax, and sales-tax filing coordinated with your CPA/EA and the North Carolina Dept of Revenue" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (NC cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in North Carolina?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For North Carolina businesses, cleanup also corrects a sales-tax setup that charges a single statewide rate because the county and transit add-ons that push the combined rate to roughly 6.75&ndash;7.50% by county were never configured, untangles misclassified owner compensation so the S-corp or pass-through entity position is supportable, and cleans a messy equity section so the balance sheet is franchise-tax-ready for the CD-405/CD-401S &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, sales-tax-by-county correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in North Carolina?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many sales-tax counties you sell into, whether the franchise tax applies or you should evaluate the Taxed PTE election, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does North Carolina sales tax get mis-configured in QuickBooks so often?", a: "Because the income tax is the easy part &mdash; a flat 3.99% for 2026 &mdash; and the complexity is the sales tax. North Carolina&rsquo;s state rate is 4.75%, but counties add a 2.00% or 2.25% local rate and four counties add a 0.50% transit rate, so the combined rate varies by county, commonly 6.75% to 7.50%, with Mecklenburg (Charlotte) rising to 8.25% on July 1, 2026. Generic out-of-state bookkeeping commonly charges one statewide rate, which is wrong for most destinations. Cleanup rebuilds the sales-tax items by county so the correct combined rate applies by location, and reconciles the prior periods. We do the tie-out; your CPA files. Confirm current rates against the North Carolina Dept of Revenue rate chart." },
    { q: "Will cleanup fix misclassified owner compensation and a messy equity section?", a: "Yes. Owner pay tangled across draws, distributions, and wages quietly breaks the file for an S-corp or a pass-through entity decision, so we separate it cleanly and keep the distributive-share detail straight, ready for the Taxed PTE election. North Carolina also keeps a corporate franchise tax &mdash; $1.50 per $1,000 of the tax base, a $200 minimum, a $500 cap on the first $1,000,000, holding companies capped at $150,000 &mdash; that survives even as the corporate income tax phases out to zero by 2030, filed on the CD-405/CD-401S, so we clean the equity section and balance sheet and keep them franchise-tax-ready. We reconcile to the filed returns; your CPA makes the election and files." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to North Carolina businesses across all 100 counties." },
    { q: "Will my North Carolina CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, the sales-tax items rebuilt by county to the correct combined rate, owner compensation split cleanly for the S-corp or Taxed PTE position, and the equity section kept franchise-tax-ready for the CD-405/CD-401S. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/north-carolina/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"North Carolina QuickBooks Cleanup","description":"QuickBooks file cleanup for North Carolina businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, the county sales tax configured by location (4.75% state plus county and transit, combined ~6.75-7.50%), untracked landed cost and inventory, misclassified owner compensation, a franchise-tax-ready equity section for the CD-405/CD-401S, and Taxed PTE-election readiness at the flat 3.99% rate. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-north-carolina-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nc-svc-qbcleanup-summary","#nc-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"North Carolina","item":"https://techbrot.com/find-an-accountant/north-carolina/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"North Carolina QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for North Carolina businesses — file repair, reconciliation rebuild, undeposited-funds clearing, the county sales tax configured by location (4.75% state plus county and transit, combined ~6.75-7.50%), untracked landed cost and inventory, misclassified owner-compensation cleanup, a franchise-tax-ready equity section for the CD-405/CD-401S, and Taxed PTE-election readiness at the flat 3.99% rate, delivered by a Certified ProAdvisor served remotely across all 100 counties. Independent Certified QuickBooks ProAdvisor firm; does not file North Carolina, federal, the corporate income tax, the franchise tax, the individual income tax, the sales and use tax return, or the Taxed pass-through entity (PTE) election — coordinates with the client's CPA, EA, and the North Carolina Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"North Carolina","sameAs":"https://en.wikipedia.org/wiki/North_Carolina"},
          "audience":{"@type":"BusinessAudience","audienceType":"North Carolina small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
