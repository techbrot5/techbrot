/* /find-an-accountant/ohio/quickbooks-cleanup/ — OH SERVICE child (QB spoke), t-money.
 * Mirrors the proven MD child (maryland/quickbooks-cleanup.*) with Ohio content per
 * OH-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * OH LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): MD's
 * county piggyback withholding → OH's MUNICIPAL income tax, levied by 649 cities + 199 school
 * districts and withheld by WORK LOCATION — a file that applies one city's rate to everyone,
 * ignores the 20-day occasional-entrant rule, or points payroll at the wrong RITA/CCA collector
 * withholds the wrong municipal tax all year; the 199 school districts add a residence-based
 * withholding layer a messy file usually skips entirely; MD's 3% IT/data sales tax → OH's
 * Commercial Activity Tax (CAT) gross-receipts tracking against the 2026 $6,000,000 exclusion
 * (no corporate income tax; 0.26% above) and the county-variable sales tax (5.75% state + county,
 * combined 6.5%–8.0%) a file applies as one statewide rate. OH reciprocity (IN/PA/MI/KY/WV, Form
 * IT 4NR) exempts cross-border residents from OH STATE withholding only — the municipal tax still
 * applies. Rates framed per OH-FACTS: the state income-tax rate is QUALITATIVE (low/under 3%/zero
 * by 2030; first $26,050 exempt); specific municipal (~1%–3%) and county (6.5%–8.0%) rates framed
 * qualitatively, never a fixed locality figure; the CAT $6M exclusion + 0.26% ARE stated facts.
 * PRICING: OH-FACTS gives "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively (no
 * fabricated dollar ranges). provider = #organization; areaServed = State Ohio (NO street address,
 * NO LocalBusiness, NO PostalAddress/geo/hasMap — areaServed-only); reviewedBy #david-westgate on
 * WebPage. ROUTING (OH core state, 6 pages): OH cross-links limited to the pillar + 4 siblings
 * (quickbooks-accountant, small-business-accountant, bookkeeping-services, quickbooks-setup);
 * everything else routes to an existing GLOBAL page. HONESTY (R5): no invented reviews/stats/
 * clients/outcomes; outcomes are representative capability-level statements; firm-level review
 * byline (no founder name). Independent firm — does NOT file Ohio/federal/the CAT/state or
 * municipal or school-district income tax/sales-tax/PTE (IT 4738) returns; not a registered agent;
 * coordinates with the client's CPA/EA, the Ohio Dept of Taxation, RITA/CCA, and the municipality. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Ohio businesses across all 88 counties from our Delaware headquarters. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Ohio QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Ohio businesses, correcting <a href=\"/quickbooks/payroll/\">payroll</a> that withholds one city&rsquo;s municipal income tax for everyone because work location, the 20-day rule, and the right RITA or CCA collector were never configured, adding the missing school-district withholding layer, and tracking <strong>CAT gross receipts</strong> against the $6 million exclusion while re-sourcing <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> that applied one rate across counties running 6.5% to 8.0%.",
    "The work is diagnostic before it is corrective. A messy Ohio file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, payroll applying one city&rsquo;s municipal rate to everyone instead of each employee&rsquo;s work location, school-district tax that was never set up, gross receipts nobody has measured against the CAT exclusion, a sales-tax payable that no longer matches the filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a payroll item pointed at the wrong city or the wrong RITA/CCA collector, a county sale charged a single statewide rate &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 88 Ohio counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Ohio taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Payroll withholds one city&rsquo;s municipal tax for everyone.", body: "Ohio payroll is where generic out-of-state bookkeeping goes wrong. Across <a href=\"/find-an-accountant/ohio/quickbooks-accountant/\">649 municipalities and 199 school districts</a>, the municipal income tax is generally withheld by the <strong>city where the work is performed</strong> &mdash; and the <strong>20-day occasional-entrant rule</strong> and the split among <strong>RITA, CCA, and self-administered</strong> cities govern when and where. A file that applies one city&rsquo;s rate to everyone, ignores the 20-day rule, or points at the wrong collector withholds the wrong municipal tax all year. We rebuild work-location withholding per employee and reconcile it." },
    { title: "School-district withholding is missing entirely.", body: "Separately from cities, <strong>199 Ohio school districts</strong> levy a residence-based income tax &mdash; a withholding layer most messy files skip, because it keys to where the employee <em>lives</em>, not where they work. We add the school-district withholding per employee where it applies and reconcile it alongside the municipal tax. We do the tie-out; your CPA files." },
    { title: "CAT gross receipts and the county sales-tax rate are untracked.", body: "Ohio has <strong>no corporate income tax</strong> &mdash; instead the <strong>Commercial Activity Tax (CAT)</strong> applies to gross receipts over the <strong>$6 million</strong> 2026 exclusion (0.26% above it), so a file that never measures Ohio gross receipts can&rsquo;t tell you where you stand. And sales tax is <strong>5.75% state plus a county rate</strong> &mdash; combined 6.5% to 8.0% &mdash; so one statewide rate is wrong by county. We configure the <a href=\"/accounting/sales-tax-compliance/\">sales-tax items</a> by county and keep the gross-receipts detail CAT-ready against the exclusion." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Ohio QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Ohio) the municipal income tax by work location (RITA/CCA, the 20-day rule), the residence-based school-district layer, CAT gross-receipts tracking against the $6 million exclusion, and county-variable sales-tax sourcing across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of cities and school districts you withhold for, whether you cross the CAT threshold, your county sales-tax exposure, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Ohio businesses across all 88 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, municipal work-location tax correction, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Ohio QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "Municipal &amp; school-district withholding correction", body: "The Ohio <a href=\"/quickbooks/payroll/\">municipal income tax</a> rebuilt per employee by <strong>work location</strong> &mdash; correcting a file that applied one city&rsquo;s rate to everyone, ignored the <strong>20-day occasional-entrant rule</strong>, or pointed at the wrong <strong>RITA/CCA</strong> collector &mdash; with the residence-based <strong>school-district</strong> layer added where it applies and the local withholding reconciled. We do the tie-out; your CPA files. Confirm current city rates against RITA or the municipality." },
    { num: "06", title: "CAT gross-receipts &amp; county sales-tax tie-out", body: "Ohio taxable gross receipts measured and kept <strong>CAT-ready</strong> against the <strong>$6 million 2026 exclusion</strong> (no corporate income tax; 0.26% above), and the QuickBooks sales-tax items reconfigured for the correct <strong>combined county rate</strong> (5.75% state plus county, 6.5% to 8.0%) where one statewide rate had been applied. Multi-state nexus scoped across the Indiana, Pennsylvania, and Michigan lines. Reconciled to filed returns; confirm county rates against the Ohio Dept of Taxation." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the distributive-share detail clean for a growing pass-through&rsquo;s IT 4738 PTE-election evaluation. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Municipal income tax rebuilt by work location with the 20-day rule and the right RITA/CCA collector, the school-district layer added, CAT gross-receipts tracking against the $6M exclusion, and county sales-tax sourcing. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>Municipal tax:</strong> from one city&rsquo;s rate applied to everyone (with the 20-day rule and the collector ignored) to work-location withholding rebuilt per employee through the right RITA/CCA collector and reconciled &mdash; reducing notice risk.",
    "<strong>School district:</strong> from a missing residence-based layer to school-district withholding configured per employee where it applies and tied to the local filings.",
    "<strong>CAT &amp; sales tax:</strong> from untracked gross receipts and a single statewide sales rate to gross receipts kept CAT-ready against the $6M exclusion and the correct combined county rate configured by location.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. OH-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a wrong-city municipal withholding fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=ohio&amp;state=ohio&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, municipal work-location correction, the school-district layer, CAT gross-receipts tracking, county sales-tax sourcing, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=ohio&amp;state=ohio&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-city municipal payroll with RITA/CCA collectors and the 20-day rule, multi-entity QuickBooks Enterprise and multi-state nexus files for Ohio manufacturers and logistics firms, and post-corruption restoration with full statement validation.", href: "/contact/?intent=ohio&amp;state=ohio&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of cities and school districts you withhold for, whether you cross the CAT threshold, your county sales-tax footprint, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 88 Ohio counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "Ohio bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, municipal work-location tax review, school-district checks, and CAT and county sales-tax sub-reconciliation.", href: "/find-an-accountant/ohio/bookkeeping-services/", cta: "Ohio bookkeeping &rarr;" },
    { title: "Ohio QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, municipal withholding by work location (RITA/CCA), the school-district layer, and the county sales-tax setup &mdash; is often the better path.", href: "/find-an-accountant/ohio/quickbooks-setup/", cta: "Ohio setup &rarr;" },
    { title: "Sales tax compliance", body: "Ohio sales-tax setup (5.75% state plus a county rate, combined 6.5% to 8.0%) and the multi-state nexus review that keeps your filings and books in agreement across the Indiana, Pennsylvania, and Michigan lines.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, the municipal income tax by work location (RITA/CCA, the 20-day rule), the residence-based school-district layer, CAT gross-receipts tracking against the $6M exclusion, and county-variable sales-tax sourcing &middot; Ohio, federal, the CAT, municipal, school-district, and sales-tax filing coordinated with your CPA/EA, the Ohio Dept of Taxation, and RITA/CCA" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (OH cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Ohio?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Ohio businesses, cleanup also corrects payroll that withholds one city&rsquo;s municipal income tax for everyone because work location, the 20-day rule, and the right RITA or CCA collector were never configured, adds the residence-based school-district withholding layer where it was missing, and tracks CAT gross receipts and the county sales-tax rate the file was ignoring &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, municipal work-location tax correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Ohio?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many cities and school districts you withhold for, whether you cross the $6M CAT threshold, your county sales-tax exposure, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Ohio payroll get mis-configured in QuickBooks so often?", a: "Because the state income tax is the easy part &mdash; the complexity is the municipal income tax. Ohio has 649 municipalities and 199 school districts that levy income taxes, and the municipal tax is generally withheld for the city where the work is performed (rates run about 1% to 3%; major cities around 2.5%), governed by the 20-day occasional-entrant rule and split among RITA, CCA, and self-administered cities that read the rules differently. Generic out-of-state bookkeeping commonly applies one city&rsquo;s rate to everyone, ignores the 20-day rule, or points at the wrong collector, which is wrong all year &mdash; and it usually skips the residence-based school-district layer entirely. Cleanup rebuilds work-location withholding per employee and reconciles it. We do the tie-out; your CPA files. Confirm current city rates against RITA or the municipality." },
    { q: "Will cleanup fix untracked CAT gross receipts and the county sales-tax rate?", a: "Yes. Ohio has no corporate income tax &mdash; instead the Commercial Activity Tax (CAT) applies to gross receipts over the $6 million 2026 exclusion (0.26% above it), so we measure your Ohio taxable gross receipts and keep the detail CAT-ready against the exclusion. We also reconfigure the sales-tax items so each sale is charged the correct combined county rate (5.75% state plus a county and transit rate, combined 6.5% to 8.0%) instead of one statewide rate, scope multi-state nexus across the Indiana, Pennsylvania, and Michigan lines, and reconcile to the filed returns. Confirm current county rates against the Ohio Department of Taxation." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Ohio businesses across all 88 counties." },
    { q: "Will my Ohio CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, the municipal income tax rebuilt per employee by work location through the right RITA/CCA collector, the school-district layer added where it applies, gross receipts kept CAT-ready against the $6M exclusion, and sales tax sourced at the correct combined county rate. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/ohio/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Ohio QuickBooks Cleanup","description":"QuickBooks file cleanup for Ohio businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, the municipal income tax by work location (RITA/CCA, the 20-day rule), the residence-based school-district layer, CAT gross-receipts tracking against the $6M exclusion, and county-variable sales-tax sourcing. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-ohio-quickbooks-cleanup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#oh-svc-qbcleanup-summary","#oh-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Ohio","item":"https://techbrot.com/find-an-accountant/ohio/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Ohio QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Ohio businesses — file repair, reconciliation rebuild, undeposited-funds clearing, the municipal income tax by work location (RITA/CCA, the 20-day rule), the residence-based school-district layer, CAT gross-receipts tracking against the $6M exclusion, and county-variable sales-tax sourcing, delivered by a Certified ProAdvisor served remotely across all 88 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Ohio, federal, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the PTE (IT 4738) return — coordinates with the client's CPA, EA, the Ohio Department of Taxation, and RITA/CCA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Ohio","sameAs":"https://en.wikipedia.org/wiki/Ohio"},
          "audience":{"@type":"BusinessAudience","audienceType":"Ohio small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
