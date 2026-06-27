/* /find-an-accountant/maryland/quickbooks-cleanup/ — MD SERVICE child (QB spoke), t-money.
 * Mirrors the proven NJ child (new-jersey/quickbooks-cleanup.*) with Maryland content per
 * MD-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * MD LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): NJ's
 * UI/TDI/FLI/WF payroll stack → MD's county "piggyback" local income tax, levied by all 23 counties
 * + Baltimore City and withheld by each employee's COUNTY OF RESIDENCE on Form MW507 — a file that
 * applies one local rate to everyone (or carries a stale MW507 county) withholds the wrong local tax
 * all year; MD reciprocity with DC/PA/VA/WV (Form MW507/MW507M) means cross-border residents are
 * exempt from MD withholding and are over-withheld when a file keeps withholding MD; NJ's UEZ split-
 * rate sales tax → MD's NEW 3% tax on data/IT services and business-use SaaS (effective 7/1/2025,
 * vs the unchanged 6% standard rate, with Multiple-Points-of-Use apportionment) that a messy file
 * still treats as exempt. Rates framed per MD-FACTS: graduated state brackets (2%–6.50%) and specific
 * county local rates (~2.25%–3.20%) are framed QUALITATIVELY, never quoted as a fixed county figure;
 * the cap-gains surtax is 2% (the proposed 3% is NOT law); the 3% IT/data-services rate IS a stated
 * fact and may be used, with readers pointed to Comptroller Technical Bulletin 56 + their CPA.
 * PRICING: MD-FACTS gives "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively (no
 * fabricated dollar ranges). provider = #organization; areaServed = State Maryland (NO street
 * address, NO LocalBusiness, NO PostalAddress/geo/hasMap — areaServed-only); reviewedBy
 * #david-westgate on WebPage. ROUTING (MD core state, 6 pages): MD cross-links limited to the
 * pillar + 4 siblings (quickbooks-accountant, small-business-accountant, bookkeeping-services,
 * quickbooks-setup); everything else routes to an existing GLOBAL page. HONESTY (R5): no invented
 * reviews/stats/clients/outcomes; outcomes are representative capability-level statements; firm-
 * level review byline (no founder name). Independent firm — does NOT file Maryland/federal/corporate
 * income tax/state or local income tax/payroll-withholding/sales-tax (incl. the 3% IT/data tax)/PTE
 * returns; not a registered agent; coordinates with the client's CPA/EA and the Comptroller of
 * Maryland. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Maryland businesses across all 23 counties and Baltimore City from our Delaware headquarters next door. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Maryland QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Maryland businesses, correcting <a href=\"/quickbooks/payroll/\">payroll</a> that withholds the wrong county&rsquo;s piggyback local income tax because the MW507 county of residence is wrong, switching cross-border staff to home-state withholding under the DC/PA/VA/WV reciprocal agreements (Form MW507/MW507M), and re-sourcing <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> where the new 3% data and IT-services rate is untracked because the items still treat business-use SaaS as exempt.",
    "The work is diagnostic before it is corrective. A messy Maryland file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, payroll applying one county&rsquo;s local rate to everyone instead of each employee&rsquo;s county of residence, a sales-tax payable that no longer matches the filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a payroll item carrying the wrong MW507 county, a SaaS or IT-services sale still treated as exempt after the 3% rate took effect &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 23 Maryland counties and Baltimore City. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Maryland taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Payroll is withholding the wrong county&rsquo;s piggyback local tax.", body: "Maryland payroll is where generic out-of-state bookkeeping goes wrong. Every one of the <a href=\"/find-an-accountant/maryland/quickbooks-accountant/\">23 counties and Baltimore City</a> levies its own piggyback local income tax, withheld by each employee&rsquo;s <strong>county of residence on Form MW507</strong>. A file that applies one local rate to everyone, or carries a stale MW507 county, withholds the wrong local tax all year &mdash; a common and costly fix. We rebuild the county-by-residence withholding per employee and reconcile it." },
    { title: "Cross-border staff are over-withheld for Maryland.", body: "Under Maryland&rsquo;s reciprocity with <strong>DC, Pennsylvania, Virginia, and West Virginia</strong>, a resident of those jurisdictions working in Maryland is exempt from Maryland withholding (DC/PA/VA with no Maryland abode over 183 days; West Virginia regardless) once <strong>Form MW507/MW507M</strong> is on file &mdash; a file still withholding Maryland tax over-withholds cross-border staff all year. We collect the exemption forms, switch the withholding per employee, and tie it to the filed returns." },
    { title: "The new 3% IT/data sales tax is untracked.", body: "Effective <strong>July 1, 2025</strong>, Maryland taxes data and IT services and business-use SaaS at <strong>3%</strong> &mdash; alongside the unchanged 6% standard rate. A file that still treats SaaS and IT services as exempt is undercollecting, and qualifying versus standard-rate sales need separating. We configure the <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> for the 3% IT/data rate versus the 6% rate, set up Multiple-Points-of-Use apportionment, and point you and your CPA to the Comptroller&rsquo;s Technical Bulletin 56." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Maryland QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Maryland) the county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity (Form MW507/MW507M), and the new 3% IT/data-services sales-tax sourcing across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of counties and reciprocity states you withhold for, your sales-tax exposure including the new 3% IT/data rate, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Maryland businesses across all 23 counties and Baltimore City. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, piggyback local-tax correction, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Maryland QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "County piggyback local-tax correction", body: "The Maryland <a href=\"/quickbooks/payroll/\">county piggyback local income tax</a> rebuilt per employee by <strong>county of residence on Form MW507</strong> &mdash; correcting a file that applied one local rate to everyone or carried a stale county &mdash; with the local withholding reconciled to the state return. We do the tie-out; your CPA files. Confirm current county rates against the Comptroller&rsquo;s local-rate list." },
    { num: "06", title: "Reciprocity &amp; 3% IT/data sales-tax tie-out", body: "Cross-border staff switched to home-state withholding under Maryland&rsquo;s <strong>DC/PA/VA/WV reciprocity</strong> once <strong>Form MW507/MW507M</strong> is on file, and the QuickBooks sales-tax items reconfigured for the <strong>new 3% data and IT-services rate</strong> (effective July 1, 2025) versus the 6% standard rate where business-use SaaS or IT services were treated as exempt, with Multiple-Points-of-Use apportionment set up. Reconciled to filed returns; confirm taxability against Comptroller Technical Bulletin 56 and your CPA." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the distributive-share detail clean for a growing pass-through&rsquo;s PTE-election evaluation. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. County piggyback local-tax correction by MW507 county of residence, DC/PA/VA/WV reciprocity withholding, and 3% IT/data sales-tax sourcing against the 6% standard rate. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>County piggyback tax:</strong> from one local rate applied to everyone (or a stale MW507 county) to the piggyback tax rebuilt per employee by county of residence and reconciled &mdash; reducing notice risk.",
    "<strong>Reciprocity:</strong> from DC/PA/VA/WV-resident staff over-withheld for Maryland to MW507/MW507M reciprocity withholding switched per employee and tied to the filed returns.",
    "<strong>Sales tax:</strong> from business-use SaaS and IT services treated as exempt to the new 3% IT/data rate configured against the 6% standard rate, with Multiple-Points-of-Use apportionment documented and reconciled.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. MD-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a wrong-county piggyback withholding fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=maryland&amp;state=maryland&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, county piggyback correction, DC/PA/VA/WV reciprocity, 3% IT/data sales-tax sourcing, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=maryland&amp;state=maryland&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-county piggyback payroll with cross-border MW507/MW507M reciprocity staff, multi-entity QuickBooks Enterprise and multi-state nexus files for Maryland contractors and IT firms, and post-corruption restoration with full statement validation.", href: "/contact/?intent=maryland&amp;state=maryland&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of counties and reciprocity states you withhold for, sales-tax exposure including the new 3% IT/data rate, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 23 Maryland counties and Baltimore City, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "Maryland bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, county piggyback local-tax review, and sales-tax sub-reconciliation including the new 3% IT/data rate.", href: "/find-an-accountant/maryland/bookkeeping-services/", cta: "Maryland bookkeeping &rarr;" },
    { title: "Maryland QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, the county piggyback payroll configuration by MW507 county, DC/PA/VA/WV reciprocity, and the 3% versus 6% sales-tax setup &mdash; is often the better path.", href: "/find-an-accountant/maryland/quickbooks-setup/", cta: "Maryland setup &rarr;" },
    { title: "Sales tax compliance", body: "Maryland sales-tax setup (6% standard, the new 3% data/IT-services rate, Multiple-Points-of-Use apportionment) and the multi-state nexus review that keeps your filings and books in agreement across the DC, Virginia, and Pennsylvania lines.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, the county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity (Form MW507/MW507M), 3% IT/data versus 6% sales-tax sourcing &middot; Maryland, federal, payroll, local, and sales-tax filing coordinated with your CPA/EA and the Comptroller of Maryland" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (MD cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Maryland?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Maryland businesses, cleanup also corrects payroll that withholds the wrong county&rsquo;s piggyback local income tax because the MW507 county of residence is wrong, switches cross-border staff to home-state withholding under the DC/PA/VA/WV reciprocal agreements (Form MW507/MW507M), and re-sources sales tax where the new 3% data and IT-services rate is untracked because business-use SaaS was treated as exempt &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, county piggyback local-tax correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Maryland?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many counties and reciprocity states you withhold for, your sales-tax exposure including the new 3% IT/data rate, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Maryland payroll get mis-configured in QuickBooks so often?", a: "Because graduated state income-tax withholding is the easy part &mdash; the complexity is the county piggyback local income tax. All 23 Maryland counties and Baltimore City levy their own local income tax (currently in the range of about 2.25% to 3.20%, and some counties now use graduated local brackets), and the rate that applies is set by each employee&rsquo;s county of residence on Form MW507, then collected on the state return. Generic out-of-state bookkeeping commonly applies one local rate to everyone or carries a stale MW507 county, which is wrong all year. Cleanup rebuilds the county-by-residence withholding per employee and reconciles it. We do the tie-out; your CPA files. Confirm current county rates against the Comptroller&rsquo;s local-rate list." },
    { q: "Will cleanup fix cross-border over-withholding and the new 3% IT/data sales tax?", a: "Yes. Under Maryland&rsquo;s reciprocity with DC, Pennsylvania, Virginia, and West Virginia, a resident of those jurisdictions working in Maryland is exempt from Maryland withholding once Form MW507/MW507M is on file &mdash; we collect the forms and switch the withholding per employee so cross-border staff stop being over-withheld for Maryland. We also reconfigure the sales-tax items so business-use SaaS and IT services are charged the new 3% data/IT rate (effective July 1, 2025) instead of being treated as exempt, set up Multiple-Points-of-Use apportionment, and point you and your CPA to the Comptroller&rsquo;s Technical Bulletin 56 on taxability." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Maryland businesses across all 23 counties and Baltimore City." },
    { q: "Will my Maryland CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, the county piggyback local tax rebuilt per employee by MW507 county of residence, DC/PA/VA/WV reciprocity withholding switched per employee, and sales tax sourced at the correct 3% IT/data versus 6% standard rate. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/maryland/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Maryland QuickBooks Cleanup","description":"QuickBooks file cleanup for Maryland businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, the county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity (Form MW507/MW507M), and the new 3% IT/data-services versus 6% sales-tax sourcing. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-maryland-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#md-svc-qbcleanup-summary","#md-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Maryland","item":"https://techbrot.com/find-an-accountant/maryland/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Maryland QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Maryland businesses — file repair, reconciliation rebuild, undeposited-funds clearing, the county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity (Form MW507/MW507M), and the new 3% IT/data-services versus 6% sales-tax sourcing, delivered by a Certified ProAdvisor served remotely across all 23 counties and Baltimore City. Independent Certified QuickBooks ProAdvisor firm; does not file Maryland, federal, corporate income tax, the state or local income tax, payroll-withholding, the sales-tax return (including the new 3% IT/data tax), or the PTE return — coordinates with the client's CPA, EA, and the Comptroller of Maryland.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Maryland","sameAs":"https://en.wikipedia.org/wiki/Maryland"},
          "audience":{"@type":"BusinessAudience","audienceType":"Maryland small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
