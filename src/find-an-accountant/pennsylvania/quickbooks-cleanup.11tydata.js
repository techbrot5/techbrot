/* /find-an-accountant/pennsylvania/quickbooks-cleanup/ — PA SERVICE child (QB spoke), t-money.
 * Mirrors the proven IN child (indiana/quickbooks-cleanup.*) with Pennsylvania content per
 * PA-FACTS.md. JSON front-matter lives in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * PA LOCALIZATION (the genuine "generic out-of-state bookkeeping gets it wrong" angle): IN's
 * county-LIT → PA's Act 32 local Earned Income Tax withholding by PSD code under the "higher-of"
 * rule + the Local Services Tax (up to $52/yr at the worksite); IN's flat 7% sales tax → PA's
 * split-rate 6% / 7% Allegheny (Pittsburgh) / 8% Philadelphia, sourced by where the sale lands;
 * PLUS Philadelphia's separate city taxes (Wage 3.74%/3.43%, NPT, BIRT 5.71% + 1.410 mills,
 * $100k exclusion gone TY2025+) that a messy file is usually missing. Rates framed per PA-FACTS:
 * municipal EIT never quoted as a specific %; Philadelphia rates "current as of review date."
 * PRICING: PA-FACTS gives "QuickBooks Cleanup from $1,200"; higher tiers written qualitatively
 * (no fabricated dollar ranges). provider = #organization; areaServed = State Pennsylvania (NO
 * street address, NO LocalBusiness, NO PostalAddress/geo/hasMap — areaServed-only); reviewedBy
 * #david-westgate on WebPage. ROUTING (PA core state, 6 pages): PA cross-links limited to the
 * pillar + 4 siblings (quickbooks-accountant, small-business-accountant, bookkeeping-services,
 * quickbooks-setup); everything else routes to an existing GLOBAL page. HONESTY (R5): no invented
 * reviews/stats/clients/outcomes; outcomes are representative capability-level statements; firm-
 * level review byline (no founder name). Independent firm — does NOT file Pennsylvania/federal/
 * local EIT/LST/Philadelphia/sales-tax returns; not a registered agent; coordinates with the
 * client's CPA/EA and the TCD collector / City of Philadelphia. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 as a real heading. (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to Pennsylvania businesses across all 67 counties from our Delaware headquarters minutes across the line. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 cleanup TL;DR. (H2: What Pennsylvania QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for Pennsylvania businesses, correcting <a href=\"/quickbooks/payroll/\">Act 32 local Earned Income Tax</a> withholding set to the wrong PSD code, re-sourcing <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> charged at 6% where Allegheny County&rsquo;s 7% or Philadelphia&rsquo;s 8% applies, and adding the Philadelphia Wage/NPT/BIRT tracking a messy file is usually missing.",
    "The work is diagnostic before it is corrective. A messy Pennsylvania file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, payroll withholding local EIT at one flat rate for everyone instead of by each employee&rsquo;s PSD code, a sales-tax payable that no longer matches the filings, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period, a payroll item ignoring the &ldquo;higher-of&rdquo; rule, a Pittsburgh or Philadelphia sale taxed at 6% &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll, served remotely across all 67 Pennsylvania counties. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> (broader financial reconstruction across prior periods) and <a href=\"/quickbooks/migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Pennsylvania taxes.",
  ],

  // SIGNALS — six file-level issues that need a ProAdvisor. (H2: If you've hit any of these… + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Local EIT or LST is withheld at the wrong rate.", body: "Pennsylvania payroll is where generic out-of-state bookkeeping goes wrong. <a href=\"/find-an-accountant/pennsylvania/quickbooks-accountant/\">Act 32 local Earned Income Tax</a> has to be withheld by each employee&rsquo;s <strong>PSD code</strong> under the &ldquo;higher-of&rdquo; rule &mdash; not one flat rate for everyone &mdash; and the <strong>Local Services Tax</strong> withheld at the worksite. A file with stale PSD codes or a single blanket EIT rate is a common and costly fix; we rebuild it per employee." },
    { title: "Sales tax is mis-sourced, or Philadelphia city taxes aren&rsquo;t tracked.", body: "Pennsylvania sales tax is <strong>6% statewide, 7% in Allegheny County, 8% in Philadelphia</strong> &mdash; a file charging 6% on a Pittsburgh or Philadelphia sale is wrong. So is a Philadelphia business with no <strong>Wage Tax, Net Profits Tax, or BIRT</strong> tracking in the books. We correct the <a href=\"/accounting/sales-tax-compliance/\">sales-tax sourcing</a> and add the city-tax tracking before it becomes a notice." },
    { title: "Undeposited funds has months or years of old balances.", body: "An undeposited-funds account that won&rsquo;t clear is one of the most common file-quality issues. Cleanup investigates each original deposit against the bank, matches the open receipts, and resolves the stranded items properly instead of writing them off blind." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Pennsylvania QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for Pennsylvania) Act 32 EIT/LST withholding by PSD code, split-rate sales-tax sourcing, and Philadelphia Wage/NPT/BIRT tracking across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour &mdash; <strong>from $1,200</strong>, fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic. The final fee depends on the issues found, the months involved, the number of PSD codes withheld for, Philadelphia city-tax exposure, and the number of entities." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to Pennsylvania businesses across all 67 counties. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds, PSD-code EIT correction, or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — eight workstreams. (H2: What Pennsylvania QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "Act 32 EIT &amp; LST withholding correction", body: "<a href=\"/quickbooks/payroll/\">Act 32 local Earned Income Tax</a> reset to withhold by each employee&rsquo;s <strong>PSD code</strong> under the &ldquo;higher-of&rdquo; rule (resident total rate vs. work-location non-resident rate), the <strong>Local Services Tax</strong> configured pro-rata at the worksite, and the combined quarterly figures reconciled &mdash; key if you&rsquo;re behind or were noticed. We do the tie-out; your CPA files. Confirm municipal rates on the PA DCED lookup." },
    { num: "06", title: "Sales-tax sourcing &amp; Philadelphia city-tax tie-out", body: "<a href=\"/accounting/sales-tax-compliance/\">Sales tax</a> re-sourced across the <strong>6% / 7% Allegheny / 8% Philadelphia</strong> split so the right rate is charged by location, and Philadelphia <strong>Wage Tax, Net Profits Tax, and BIRT</strong> tracking added to the books and kept filing-ready (rates current as of the review date). Reconciled to filed returns." },
    { num: "07", title: "File corruption, errors &amp; multi-user", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair. Multi-user configuration and hosting diagnosed, permissions audited, post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity and keeping the gross-receipts and net-income detail clean for a Philadelphia firm&rsquo;s BIRT/NPT position. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four phases. (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. Act 32 EIT/LST withholding correction by PSD code, sales-tax sourcing across the 6% / 7% / 8% split, and Philadelphia city-tax tie-out. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative capability-level statements. (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>Act 32 EIT &amp; LST:</strong> from one flat local rate withheld for everyone to EIT withheld by each employee&rsquo;s PSD code under the &ldquo;higher-of&rdquo; rule, with the LST set at the worksite &mdash; reducing notice risk.",
    "<strong>Sales tax &amp; Philadelphia:</strong> from 6% charged on Pittsburgh or Philadelphia sales and no city-tax tracking to sales tax sourced at the correct 7% / 8% rate and Wage/NPT/BIRT kept filing-ready.",
    "<strong>File integrity:</strong> from errors, corruption warnings, and lockouts to a clean, validated file verified after repair.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers. PA-FACTS gives only "from $1,200"; higher tiers qualitative.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>From $1,200</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a wrong-PSD-code EIT fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=pennsylvania&amp;state=pennsylvania&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, Act 32 EIT/LST correction, sales-tax sourcing, Philadelphia city-tax tie-out, bank rules, and chart-of-accounts review across 12&ndash;24 months. Priced against the diagnostic.", href: "/contact/?intent=pennsylvania&amp;state=pennsylvania&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>Fixed-fee by scope</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-municipality payroll with many PSD codes, multi-entity QuickBooks Enterprise and multi-state nexus files for Pennsylvania shippers and manufacturers, and post-corruption restoration with full statement validation.", href: "/contact/?intent=pennsylvania&amp;state=pennsylvania&amp;source_type=state-money&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the standard and complex tiers are quoted as fixed fees against the diagnostic, by the issues found, the months involved, the number of PSD codes withheld for, Philadelphia city-tax exposure, and the number of entities. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level. (vestigial under t-money; layout reads operatorSpec — kept for parity)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 67 Pennsylvania counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement. (H2: File cleanup is often part… + 4 H3s)
  related: [
    { title: "Catch-up bookkeeping", body: "If the file issues are paired with months of behind or inaccurate books, catch-up bookkeeping is the broader reconstruction across prior periods, often combined with file cleanup.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { title: "Pennsylvania bookkeeping services", body: "Once the file is clean, recurring fixed-fee monthly close keeps it that way &mdash; reconciliation, Act 32 EIT review, and sales-tax sub-reconciliation across the 6% / 7% / 8% split.", href: "/find-an-accountant/pennsylvania/bookkeeping-services/", cta: "Pennsylvania bookkeeping &rarr;" },
    { title: "Pennsylvania QuickBooks setup", body: "If the file is too far gone to repair, a clean rebuild &mdash; chart of accounts, Act 32 EIT payroll config by PSD code, and the 6% / 7% / 8% sales-tax setup &mdash; is often the better path.", href: "/find-an-accountant/pennsylvania/quickbooks-setup/", cta: "Pennsylvania setup &rarr;" },
    { title: "Sales tax compliance", body: "Split-rate Pennsylvania sales-tax setup (6% / 7% Allegheny / 8% Philadelphia) and the multi-state nexus review that keeps your filings and books in agreement.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, Act 32 EIT/LST withholding by PSD code, 6% / 7% / 8% sales-tax sourcing, Philadelphia Wage/NPT/BIRT tie-out &middot; EIT, LST, Philadelphia city-tax, and sales-tax filing coordinated with your CPA/EA, the TCD collector, and the City of Philadelphia" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A (PA cap 5–7). visible faq__list = FAQPage schema (same array). 2 call-intent (phone).
  faq: [
    { q: "What is QuickBooks file cleanup in Pennsylvania?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For Pennsylvania businesses, cleanup also corrects Act 32 local Earned Income Tax withholding set to the wrong PSD code, re-sources sales tax charged at 6% where Allegheny County&rsquo;s 7% or Philadelphia&rsquo;s 8% applies, and adds Philadelphia Wage/NPT/BIRT tracking &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild, PSD-code EIT correction, and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in Pennsylvania?", a: "Cleanup is priced by scope, not by hour, and starts at <strong>$1,200</strong> as a fixed fee against a written scope. The final number depends on the issues found, the number of months involved, how many PSD codes you withhold for, Philadelphia city-tax exposure, and how many entities are in the file. We quote it within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Pennsylvania payroll get mis-configured in QuickBooks so often?", a: "Because Pennsylvania&rsquo;s flat 3.07% state income tax is the easy part &mdash; the complexity is the Act 32 local Earned Income Tax. It has to be withheld by each employee&rsquo;s PSD code (a six-digit code for their residence and work location) under the &ldquo;higher-of&rdquo; rule, plus the Local Services Tax at the worksite. Generic out-of-state bookkeeping commonly withholds one flat rate for everyone, which is wrong all year. Cleanup resets the withholding per employee and reconciles the combined quarterly figures. We do the tie-out; your CPA files." },
    { q: "Will cleanup fix my Philadelphia city taxes and sales-tax rate?", a: "Yes. We re-source sales tax across the 6% statewide / 7% Allegheny County / 8% Philadelphia split so the right rate is charged by location, and for Philadelphia businesses we add Wage Tax, Net Profits Tax, and BIRT tracking to the books so the gross-receipts and net-income detail is filing-ready. Philadelphia rates change each July 1, so we set them current as of the review date and point you to the City of Philadelphia to confirm." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to Pennsylvania businesses across all 67 counties." },
    { q: "Will my Pennsylvania CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, with Act 32 EIT and the LST withheld by PSD code, sales tax sourced at the correct 6% / 7% / 8% rate, and Philadelphia city taxes tracked. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files. Questions first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/pennsylvania/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Pennsylvania QuickBooks Cleanup","description":"QuickBooks file cleanup for Pennsylvania businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, Act 32 EIT withholding by PSD code, 6% / 7% / 8% sales-tax sourcing, and Philadelphia Wage/NPT/BIRT tie-out. Fixed-fee from $1,200, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/pennsylvania-quickbooks-cleanup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pa-svc-qbcleanup-summary","#pa-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Pennsylvania","item":"https://techbrot.com/find-an-accountant/pennsylvania/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"Pennsylvania QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for Pennsylvania businesses — file repair, reconciliation rebuild, undeposited-funds clearing, Act 32 local Earned Income Tax withholding by PSD code, 6% / 7% / 8% sales-tax sourcing, and Philadelphia Wage/NPT/BIRT tie-out, delivered by a Certified ProAdvisor served remotely across all 67 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Pennsylvania, federal, local EIT, Local Services Tax, Philadelphia city-tax, or sales-tax returns — coordinates with the client's CPA, EA, the TCD collector, and the City of Philadelphia.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Pennsylvania","sameAs":"https://en.wikipedia.org/wiki/Pennsylvania"},
          "audience":{"@type":"BusinessAudience","audienceType":"Pennsylvania small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":{"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Cleanup from $1,200, fixed-fee against a written scope; standard and complex tiers quoted at the diagnostic.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
