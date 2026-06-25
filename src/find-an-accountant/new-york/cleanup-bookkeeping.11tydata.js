/* /find-an-accountant/new-york/cleanup-bookkeeping/ — t-location NY SERVICE child
 * (a LARGE NY child — 44 contract headings, none collapsed). This is the BROADER
 * books-cleanup / catch-up service — reconciliation, categorization, multi-year
 * reconstruction — DISTINCT from the QuickBooks-FILE cleanup sibling
 * (quickbooks-cleanup), which fixes the file itself. Sources: FROZEN EQUITY
 * CONTRACT (contract-ny-svc-cleanupbk.txt) — the ONLY authority for the headings +
 * the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/cleanup-bookkeeping/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors the proven sibling
 * (quickbooks-cleanup.11tydata.js): JSON front-matter lives in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage, BreadcrumbList, Service with 3 Offers, FAQPage). The FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders
 * from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this service child renders NO review-card and NO AggregateRating. The
 * baseline named-reviewer line ("David Westgate · 40+ years…", which appeared in
 * BOTH the operator block and the expert-review block) is reframed to a firm-level
 * byline (no personal name in visible content). The baseline "Before/after"
 * outcomes TABLE is reframed to representative, capability-level statements
 * (checks-list — T3: no table demotion to a real list, not a collapsed heading).
 * Independent firm — does NOT file NY State or NYC tax returns; coordinates with the
 * client's CPA, who files. Footer chrome (Accounting/QuickBooks/Company/Network) and
 * the newsletter ("The monthly brief.") are intentionally NOT rendered here — global
 * chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 section carrying the cleanup TL;DR prose (baseline tldr body, enriched).
  // (H2: The short version.)
  summary: [
    "A <strong>New York bookkeeping cleanup</strong> is a project-based engagement that reconstructs accurate financial records from a messy or unreconciled state &mdash; real <strong>bank and credit-card reconciliation</strong> against actual statements, categorization corrections, clearing undeposited funds, fixing duplicate or missing transactions, correcting prior-period errors, verifying payroll and <a href=\"/find-an-accountant/new-york/sales-tax-help/\">New York sales tax</a> entries, and producing CPA-ready <a href=\"/accounting/financial-statements/\">financial statements</a>. Most cleanups take 2&ndash;8 weeks, priced fixed-fee against a written scope ($1,500&ndash;$15,000+ by complexity).",
    "The work is methodical before it is fast. A messy set of books usually announces itself the same way: a reconciliation that hasn&rsquo;t balanced in months, an <strong>undeposited-funds</strong> account carrying receipts that never cleared, A/R and A/P that no longer match what customers and vendors actually owe, a sales-tax liability that drifts from the filed New York returns, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its source &mdash; an unmatched deposit, a transaction coded to the wrong period, a duplicate bank feed &mdash; and rebuild from documents, not from a forced balancing entry.",
    "Cleanup is distinct from <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">QuickBooks file cleanup</a> (which fixes the file itself &mdash; broken feeds, corruption) and from ongoing <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">monthly bookkeeping</a> (which keeps clean books clean). Many New York engagements combine cleanup with <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a> &mdash; correct the existing periods, then enter the missing months &mdash; before transitioning to a monthly handoff. We run the books and coordinate with your CPA, who files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes. All 62 New York counties, NYC to upstate.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York bookkeeping cleanup, in five questions.)
  aiSummary: [
    { q: "What is bookkeeping cleanup?", a: "<strong>Bookkeeping cleanup reconstructs accurate financial records from a messy or unreconciled state</strong> &mdash; reconciliation against real bank and credit-card statements, categorization fixes, clearing undeposited funds, resolving duplicates and gaps, A/R and A/P cleanup, correcting prior periods, verifying payroll and NY sales tax, and producing CPA-ready statements. It is broader than QuickBooks file cleanup." },
    { q: "How long does it take?", a: "Most cleanups take <strong>2&ndash;8 weeks</strong>. A single-year cleanup with 2&ndash;3 accounts runs 2&ndash;3 weeks; a multi-year cleanup with payroll, inventory, or multiple entities can take 6&ndash;10. The timeline is fixed in writing before work starts." },
    { q: "What does it cost in New York?", a: "Priced by scope, not by hour: <strong>$1,500&ndash;$3,500</strong> single-year, <strong>$3,500&ndash;$8,000</strong> standard 12&ndash;24 months, <strong>$8,000&ndash;$15,000+</strong> multi-year. Fixed-fee against a written scope, always." },
    { q: "Cleanup or QuickBooks cleanup &mdash; which do I need?", a: "<strong>Cleanup fixes the books; <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes the file.</strong> Broken feeds and file errors are QuickBooks cleanup; bad reconciliations and miscategorized history are bookkeeping cleanup. Many engagements need both." },
    { q: "Will my CPA accept the cleaned-up books?", a: "Yes &mdash; cleanup produces <strong>CPA-ready, lender-ready statements</strong> reconciled to source documents with documented adjustments, designed to hand straight to your CPA or lender. We do the books; your CPA files." },
  ],

  // SIGNALS — the six situations where cleanup is the right starting point (grid-3 buyer-cards).
  // 6 frozen H3s VERBATIM. (H2: If any of these sound familiar, the answer is yes. + 6 H3s)
  signals: [
    { title: "You haven&rsquo;t reconciled in months &mdash; or years.", body: "Bank feeds drift over time. Without real reconciliation against actual statements, the books quietly diverge from reality. Cleanup brings them back into agreement, line by line, period by period." },
    { title: "Your CPA flagged the books before tax season.", body: "A common path. Your CPA needs reliable numbers to file accurately. Cleanup produces statements the tax preparer can work from without rework &mdash; books filed-from, not fixed-during." },
    { title: "A lender or buyer asked for clean financials.", body: "SBA loans, lines of credit, business sales, and capital raises all require reconciled books. Cleanups are routinely scoped to a specific lender or buyer deadline." },
    { title: "Your previous bookkeeper left things in disarray.", body: "Miscategorized transactions, duplicate entries, broken bank rules, undeposited funds open for months, A/R and A/P that no longer tie. Cleanup unwinds the mistakes and rebuilds correctly." },
    { title: "A NY sales-tax notice exposed a books problem.", body: "When the sales-tax liability in the books doesn&rsquo;t match what was filed, a <a href=\"/find-an-accountant/new-york/sales-tax-help/\">notice</a> often follows. Cleanup reconciles the accruals to your filed NYS returns so the numbers line up." },
    { title: "You ran the books yourself and need a professional reset.", body: "Many New York owners start with their own books, run for a year or two, then realize the structure isn&rsquo;t holding. Cleanup gives you a clean foundation and a real chart of accounts to grow into." },
  ],

  // WHAT'S INCLUDED — the eight workstreams (grid-3 buyer-cards). 8 frozen H3s VERBATIM.
  // (H2: What a New York cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank &amp; credit card reconciliation", body: "Every account reconciled against actual bank and credit-card statements, line by line, period by period. No &ldquo;reconciliation&rdquo; against live bank feeds alone &mdash; the statement is the source of truth." },
    { num: "02", title: "Transaction categorization", body: "Every transaction reviewed and categorized to the correct account. Uncategorized expenses cleared. Bank rules rebuilt to prevent the miscoding from regenerating." },
    { num: "03", title: "Undeposited funds &amp; clearing accounts", body: "Old undeposited funds investigated against bank deposits and open receipts matched, cleared, or documented. Clearing-account balances reconciled to zero or to a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transaction resolution", body: "Duplicates identified across bank feeds, manual entries, and connected apps, then removed. Missing transactions reconstructed from source documents &mdash; statements, receipts, payroll records." },
    { num: "05", title: "Prior-period error correction", body: "Identified errors in closed periods corrected with documented journal entries &mdash; including A/R and A/P cleanup and clearing what landed in opening-balance equity. Adjustments mapped clearly for your tax preparer." },
    { num: "06", title: "Payroll &amp; New York sales tax verification", body: "Payroll liabilities reconciled to filed returns. New York and NYC sales-tax accruals verified against your filed NYS returns &mdash; including NYC&rsquo;s 8.875% combined rate where it applies. Discrepancies escalated and resolved. We prepare the numbers; your CPA files." },
    { num: "07", title: "Chart of accounts review", body: "Chart of accounts evaluated against your New York business model. Structure simplified, redundant accounts merged, missing accounts added. <a href=\"/accounting/chart-of-accounts-setup/\">CoA setup &rarr;</a>" },
    { num: "08", title: "Financial statements &amp; documentation", body: "Reconstructed P&amp;L, balance sheet, and cash-flow statements. Written summary of every adjustment made, signed off by the ProAdvisor &mdash; 1099-ready vendor records included where relevant." },
  ],

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: From first call to clean books. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Diagnostic &amp; scope", body: "A 30-minute call to review your file, statements, and payroll records. Within 3 business days you receive a written fixed-fee scope &mdash; deliverables, timeline, pricing, the standard we&rsquo;re holding to. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Reconciliation &amp; correction", body: "Real reconciliation against actual statements. Categorization, undeposited funds, duplicates, A/R and A/P cleanup, prior-period corrections, payroll and New York sales-tax verification. The work happens here.", meta: "Typical: 2&ndash;6 weeks" },
    { phase: "Phase 3", title: "Statements &amp; review", body: "Reconstructed financial statements produced. Quality review against the operating standard before delivery. Every adjustment documented for your records and for your CPA.", meta: "Typical: 3&ndash;5 business days" },
    { phase: "Phase 4", title: "Handoff &amp; ongoing", body: "Clean books delivered with a written summary of corrections. Continue with the same bookkeeper on <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">monthly bookkeeping</a>, or hand off to your existing CPA.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — reframed from the baseline before/after TABLE to representative,
  // capability-level statements (R5: not claimed real-client outcomes; T3: no table demotion).
  // (H2: What changes when the books are clean.)
  outcomes: [
    "<strong>Bank reconciliation:</strong> from months behind and drifting from statements to every account reconciled, every period, against actual statements.",
    "<strong>Categorization:</strong> from uncategorized and miscoded transactions to every transaction in the right account, bank rules rebuilt.",
    "<strong>NY sales tax:</strong> from a payable that doesn&rsquo;t match what was filed to accruals reconciled to your NYS returns, reducing notice risk.",
    "<strong>Financial statements:</strong> from unreliable numbers you can&rsquo;t share to CPA-ready P&amp;L, balance sheet, and cash-flow statements.",
    "<strong>Tax-filing readiness:</strong> from tax season as a fire drill to books you file from, not fix during.",
    "<strong>Lender / buyer readiness:</strong> from financials that can&rsquo;t survive due diligence to statements that stand up to a lender or buyer review.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust to books that reflect the business and decisions you can make on real data.",
  ],

  // PRICING — three fixed-fee scope tiers (grid-3 buyer-cards). 3 frozen H3s VERBATIM.
  // COBALT: buyer-card__body + <strong> for the range (NEVER __price/__cadence). (H2 + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Single-year cleanup", range: "$1,500&ndash;$3,500", fit: "For smaller New York businesses &mdash; 1 year, 2&ndash;3 bank accounts, no payroll or simple payroll.", includes: ["12 months of reconciliation", "Categorization &amp; bank rules", "P&amp;L, balance sheet, cash flow", "Written summary of adjustments"], href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a single-year cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "$3,500&ndash;$8,000", fit: "For active New York businesses &mdash; 12&ndash;24 months, payroll, multiple bank and credit accounts, NY sales tax.", includes: ["12&ndash;24 months of reconciliation", "Categorization, bank rules, undeposited funds", "Payroll &amp; New York sales-tax verification", "Chart of accounts restructure", "CPA-ready financial statements"], href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Multi-year cleanup", range: "$8,000&ndash;$15,000+", fit: "For New York businesses 2+ years behind &mdash; multi-entity, inventory, multi-state sales tax, complex payroll.", includes: ["Multi-year historical reconstruction", "Multi-entity consolidation", "Inventory &amp; COGS verification", "Multi-state tax reconciliation", "Full statement set per year"], href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a multi-year cleanup &rarr;" },
  ],
  pricingNote: "Ranges are typical engagements; final pricing is determined by the diagnostic. If your cleanup also requires QuickBooks file repair &mdash; broken feeds, corruption, version conflicts &mdash; see <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">QuickBooks file cleanup</a>; the engagements pair seamlessly.",

  // ADVISORY LINE — judgment-over-automation framing (baseline mission-block body).
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisory: "Bank feeds can import a transaction; they can&rsquo;t tell you which prior-period entry is wrong, why a clearing account never zeroes, or that a sales-tax accrual won&rsquo;t survive a New York review. Reconstructing clean books is judgment work, not data entry. Once your New York books are solid, ongoing <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">monthly bookkeeping</a> keeps them that way and <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns them into decisions.",

  // OPERATOR — expertise-first framing, firm-level (R5: named-reviewer line reframed).
  // (H2: A named, credentialed Certified ProAdvisor — not an anonymous offshore team.)
  operatorBody: [
    "Every TechBrot cleanup is delivered by a vetted Certified QuickBooks ProAdvisor working under TechBrot&rsquo;s brand, standards, and infrastructure &mdash; the expert who does the work stays on your books from diagnostic to handoff. You&rsquo;ll know exactly who is working on your books, how to reach them, and what credentials they hold.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and if continuity is ever a question, the team handles the transition without losing the file context. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "Active Intuit QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 62 New York counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your books from diagnostic to handoff &middot; every adjustment documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — cleanup as part of a larger NY engagement (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: Cleanup is often part of a larger New York engagement. + 4 H3s)
  related: [
    { title: "QuickBooks file cleanup", body: "Broken bank feeds, file corruption, list and version problems. Fixes the QuickBooks file itself &mdash; often paired with bookkeeping cleanup.", href: "/find-an-accountant/new-york/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { title: "Monthly bookkeeping", body: "Once the books are clean, ongoing monthly bookkeeping keeps them that way. Real monthly close, real reconciliations, named bookkeeper.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { title: "New York sales tax help", body: "NYC&rsquo;s 8.875% rate, destination-based filing, and reconciling accruals to your NYS returns &mdash; verified as part of cleanup.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Behind on NY taxes?", body: "When a books problem has become a tax problem, cleanup establishes the true numbers so your CPA or attorney can resolve it.", href: "/find-an-accountant/new-york/business-tax-problems/", cta: "Tax problem help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (R5: no founder/personal name; baseline
  // "David Westgate · 40+ years" reviewer line — present in both operator and
  // expert-review blocks — reframed to firm-level).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Standards", detail: "Fixed-fee, written scope &middot; no tax-filing or representation claims (out of scope) &middot; NY facts reviewed periodically &middot; no fabricated data" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York bookkeeping cleanup questions.)
  faq: [
    { q: "What is bookkeeping cleanup for a New York business?", a: "Bookkeeping cleanup is a project-based engagement that reconstructs accurate financial records from a messy or unreconciled state. For a New York business it typically includes real bank and credit-card reconciliation against actual statements, categorization corrections, clearing undeposited funds, fixing duplicate and missing transactions, correcting prior-period errors, verifying payroll and New York sales-tax entries, and producing CPA-ready financial statements. It is distinct from QuickBooks file cleanup, which fixes the file itself." },
    { q: "How long does bookkeeping cleanup take in New York?", a: "Most cleanup engagements take 2 to 8 weeks. A single-year cleanup for a small New York business with 2 to 3 bank accounts typically takes 2 to 3 weeks. Multi-year cleanups involving payroll, inventory, or multiple entities can take 6 to 10 weeks. The timeline is fixed in a written scope before any work begins." },
    { q: "How much does bookkeeping cleanup cost in New York?", a: "Cleanup is priced by scope, not by the hour. Small single-year cleanups typically range from $1,500 to $3,500. Standard 12 to 24 month cleanups fall between $3,500 and $8,000. Multi-year cleanups involving payroll, inventory, or multi-entity structures typically range from $8,000 to $15,000 or more. Every TechBrot cleanup is fixed-fee against a written scope. See the <a href=\"#ny-svc-cleanupbk-pricing\">pricing scope section</a> above for tier details." },
    { q: "What&rsquo;s the difference between cleanup bookkeeping and QuickBooks cleanup?", a: "Cleanup bookkeeping fixes the books &mdash; reconciliation, categorization, prior-period corrections, and CPA-ready statements regardless of platform. <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes the QuickBooks file itself &mdash; broken bank feeds, file corruption, list and version problems. Many New York engagements involve both: repair the file, then reconstruct the books on top of it." },
    { q: "Can I talk to a Certified ProAdvisor before committing to a cleanup?", a: "Yes &mdash; start with a free 30-minute diagnostic call, no obligation. A named Certified ProAdvisor reviews your file, statements, and payroll records, explains exactly what the cleanup involves, and sends a written fixed-fee scope within 3 business days. Call (877) 751-5575 or <a href=\"/contact/?intent=new-york\">book the diagnostic</a>. Once the books are clean, the same ProAdvisor can continue with <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">New York monthly bookkeeping</a>." },
    { q: "Can New York books be fixed if they haven&rsquo;t been reconciled in years?", a: "Yes. Multi-year cleanups are one of the most common engagements. Even when a file hasn&rsquo;t been reconciled in three or more years, an experienced Certified ProAdvisor can reconstruct accurate books using bank statements, payroll records, and source documents. The process is methodical and the outcome is reliable financial statements you and your CPA can file from." },
    { q: "Will my CPA accept New York books cleaned up by TechBrot?", a: "Yes. TechBrot cleanup produces CPA-ready, lender-ready financial statements &mdash; reconciled to source documents with documented adjustments &mdash; designed to be handed directly to a tax preparer, lender, or buyer without rework. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm and coordinates with your CPA, who files; we do not file tax returns." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cleanup-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Bookkeeping Cleanup","description":"Bookkeeping cleanup for New York businesses — reconciliation, categorization fixes, multi-year reconstruction, and CPA-ready financial statements. Fixed-fee, all 62 counties.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/ny-cleanup-bookkeeping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-cleanupbk-summary","#ny-svc-cleanupbk-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cleanup Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Bookkeeping Cleanup","serviceType":"Bookkeeping cleanup and reconciliation","description":"Project-based bookkeeping cleanup for New York businesses: real bank and credit-card reconciliation, categorization corrections, clearing undeposited funds, duplicate and missing transaction resolution, prior-period error correction, A/R and A/P cleanup, payroll and NYC/NY sales-tax verification, and CPA-ready financial statements. Independent Certified QuickBooks ProAdvisor and bookkeeping firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA, who files.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and mid-sized businesses with messy, unreconciled, or backlogged books"},
          "offers":[
            {"@type":"Offer","name":"Single-year cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1500","priceCurrency":"USD"},"description":"Single-year cleanup — typical range $1,500–$3,500, fixed-fee against written scope.","url":url},
            {"@type":"Offer","name":"Standard cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"3500","priceCurrency":"USD"},"description":"Standard 12–24 month cleanup — typical range $3,500–$8,000, fixed-fee against written scope.","url":url},
            {"@type":"Offer","name":"Multi-year cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"8000","priceCurrency":"USD"},"description":"Multi-year cleanup — typical range $8,000–$15,000+, fixed-fee against written scope.","url":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
