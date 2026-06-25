/* /find-an-accountant/indiana/cleanup-bookkeeping/ — t-money IN SERVICE child (the BROADER
 * books-cleanup / catch-up service — reconciliation, categorization, multi-year and multi-entity
 * reconstruction — DISTINCT from the QuickBooks-FILE cleanup sibling). NEW page (no baseline
 * equity contract — Indiana set built fresh). Structure mirrors the proven DE/NY cleanup-bookkeeping
 * child: JSON front-matter in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service with 3
 * Offers, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * INDIANA LOCALIZATION (per IN-FACTS): DE gross receipts / franchise-tax reserve / Wilmington /
 * three counties / Middletown office / holding-company owners → IN flat 2.95% state income tax +
 * the 92-county local income tax (LIT) withholding matrix reconciled to filed Indiana returns
 * (Form WH-4, county of residence on Jan 1, 30-day nonresident safe harbor); flat 7% statewide
 * sales tax (no local add-ons) reconciled to filed Indiana returns; business personal-property
 * $2,000,000 exemption for 2026 declared on Form 102/103 (TechBrot keeps the books assessor-ready,
 * does NOT file the county return); Indiana operators running several entities (manufacturing,
 * logistics, real estate) commingled in one file; all 92 counties, Indianapolis to the Ohio River.
 * INDIANA IS areaServed-ONLY — NO street address, NO local office, NO LocalBusiness/PostalAddress/
 * geo/hasMap anywhere; served remotely across all 92 Indiana counties (NY-style framing).
 * PRICING (rule 10 + IN-FACTS): ONLY the canonical "from $1,200" figure is stated. No fabricated
 * Indiana tier dollar ranges — higher tiers are scoped qualitatively. The "2–8 weeks"
 * engagement-duration language is a generic operational descriptor (not an IN tax or price figure)
 * and is retained.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes; the before/after outcomes are
 * representative, capability-level statements, not claimed real-client results. No review-card,
 * no AggregateRating. No founder/personal name in visible content. Independent firm — NOT a
 * registered agent; does NOT file Indiana/federal returns, the county LIT return, the sales-tax
 * return, or the business personal-property return; coordinates with the client's CPA, EA, and
 * county assessor, who file. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 section carrying the cleanup TL;DR prose.
  // (H2: The short version.)
  summary: [
    "An <strong>Indiana bookkeeping cleanup</strong> is a project-based engagement that reconstructs accurate financial records from a messy or unreconciled state &mdash; real <strong>bank and credit-card reconciliation</strong> against actual statements, categorization corrections, clearing undeposited funds, fixing duplicate or missing transactions, correcting prior-period errors, separating commingled entities, verifying payroll and <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county LIT withholding</a> entries, reconciling <a href=\"/find-an-accountant/indiana/sales-tax-help/\">sales tax</a>, keeping business personal property assessor-ready, and producing CPA-ready <a href=\"/accounting/financial-statements/\">financial statements</a>. Most cleanups take 2&ndash;8 weeks, priced fixed-fee against a written scope (from $1,200 by complexity).",
    "The work is methodical before it is fast. A messy set of books usually announces itself the same way: a reconciliation that hasn&rsquo;t balanced in months, an <strong>undeposited-funds</strong> account carrying receipts that never cleared, A/R and A/P that no longer match what customers and vendors actually owe, a sales-tax liability that drifts from the filed Indiana returns, county LIT withholding that doesn&rsquo;t reconcile to what was remitted, several entities run through one commingled file, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its source &mdash; an unmatched deposit, a transaction coded to the wrong period, a duplicate bank feed &mdash; and rebuild from documents, not from a forced balancing entry.",
    "Cleanup is distinct from <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">QuickBooks file cleanup</a> (which fixes the file itself &mdash; broken feeds, corruption) and from ongoing <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">monthly bookkeeping</a> (which keeps clean books clean). Many Indiana engagements combine cleanup with <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a> &mdash; correct the existing periods, then enter the missing months &mdash; before transitioning to a monthly handoff. We run the books and coordinate with your CPA, who files. Independent firm &mdash; not affiliated with Intuit Inc.; not a registered agent; does not file Indiana returns, the county LIT return, the sales-tax return, or the business personal-property return. All 92 Indiana counties, Indianapolis to the Ohio River.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana bookkeeping cleanup, in five questions.)
  aiSummary: [
    { q: "What is bookkeeping cleanup?", a: "<strong>Bookkeeping cleanup reconstructs accurate financial records from a messy or unreconciled state</strong> &mdash; reconciliation against real bank and credit-card statements, categorization fixes, clearing undeposited funds, resolving duplicates and gaps, A/R and A/P cleanup, separating commingled entities, correcting prior periods, verifying payroll and county LIT withholding, reconciling sales tax, and producing CPA-ready statements. It is broader than QuickBooks file cleanup." },
    { q: "How long does it take?", a: "Most cleanups take <strong>2&ndash;8 weeks</strong>. A single-year cleanup with 2&ndash;3 accounts runs a few weeks; a multi-year or multi-entity cleanup with payroll or inventory can take longer. The timeline is fixed in writing before work starts." },
    { q: "What does it cost in Indiana?", a: "Priced by scope, not by hour: cleanup starts at <strong>$1,200</strong>, with the fee set by months behind, account count, payroll, number of entities, and complexity. Fixed-fee against a written scope, always. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
    { q: "Cleanup or QuickBooks cleanup &mdash; which do I need?", a: "<strong>Cleanup fixes the books; <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes the file.</strong> Broken feeds and file errors are QuickBooks cleanup; bad reconciliations and miscategorized history are bookkeeping cleanup. Many engagements need both." },
    { q: "Will my CPA accept the cleaned-up books?", a: "Yes &mdash; cleanup produces <strong>CPA-ready, lender-ready statements</strong> reconciled to source documents with documented adjustments, designed to hand straight to your CPA or lender. We do the books; your CPA files." },
  ],

  // SIGNALS — the six situations where cleanup is the right starting point (lift cards). 6 H3s.
  // (H2: If any of these sound familiar, the answer is yes.)
  signals: [
    { title: "You haven&rsquo;t reconciled in months &mdash; or years.", body: "Bank feeds drift over time. Without real reconciliation against actual statements, the books quietly diverge from reality. Cleanup brings them back into agreement, line by line, period by period." },
    { title: "Your CPA flagged the books before tax season.", body: "A common path. Your CPA needs reliable numbers to file accurately. Cleanup produces statements the tax preparer can work from without rework &mdash; books filed-from, not fixed-during." },
    { title: "A lender or buyer asked for clean financials.", body: "SBA loans, lines of credit, business sales, and capital raises all require reconciled books. Cleanups are routinely scoped to a specific lender or buyer deadline." },
    { title: "Your previous bookkeeper left things in disarray.", body: "Miscategorized transactions, duplicate entries, broken bank rules, undeposited funds open for months, A/R and A/P that no longer tie. Cleanup unwinds the mistakes and rebuilds correctly." },
    { title: "Several entities are commingled in one file.", body: "Indiana operators &mdash; manufacturing, logistics, real estate &mdash; often run several entities through a single QuickBooks file. Cleanup separates them into clean per-entity books with proper intercompany structure." },
    { title: "You ran the books yourself and need a professional reset.", body: "Many Indiana owners start with their own books, run for a year or two, then realize the structure isn&rsquo;t holding. Cleanup gives you a clean foundation and a real chart of accounts to grow into." },
  ],

  // WHAT'S INCLUDED — the eight workstreams (deliver--3 lattice). 8 H3s.
  // (H2: What an Indiana cleanup actually delivers.)
  includes: [
    { num: "01", title: "Bank &amp; credit card reconciliation", body: "Every account reconciled against actual bank and credit-card statements, line by line, period by period. No &ldquo;reconciliation&rdquo; against live bank feeds alone &mdash; the statement is the source of truth." },
    { num: "02", title: "Transaction categorization", body: "Every transaction reviewed and categorized to the correct account. Uncategorized expenses cleared. Bank rules rebuilt to prevent the miscoding from regenerating." },
    { num: "03", title: "Undeposited funds &amp; clearing accounts", body: "Old undeposited funds investigated against bank deposits and open receipts matched, cleared, or documented. Clearing-account balances reconciled to zero or to a justified open total." },
    { num: "04", title: "Duplicate, missing &amp; commingled resolution", body: "Duplicates identified across bank feeds, manual entries, and connected apps, then removed. Missing transactions reconstructed from source documents. Where several Indiana entities are commingled in one file, they&rsquo;re separated into clean per-entity books." },
    { num: "05", title: "Prior-period error correction", body: "Identified errors in closed periods corrected with documented journal entries &mdash; including A/R and A/P cleanup and clearing what landed in opening-balance equity. Adjustments mapped clearly for your tax preparer." },
    { num: "06", title: "Payroll, county LIT &amp; sales-tax verification", body: "Payroll liabilities reconciled to filed returns. County local income tax (LIT) withholding reconciled across the 92-county matrix to your filed Indiana returns &mdash; county of residence on January 1, Form WH-4 on file, the 30-day nonresident safe harbor applied. Flat 7% sales-tax accruals reconciled to your filed Indiana returns. We prepare the numbers; your CPA or EA files." },
    { num: "07", title: "Chart of accounts review", body: "Chart of accounts evaluated against your Indiana business model &mdash; sales-tax liability accounts and county LIT withholding categories added where missing, redundant accounts merged. <a href=\"/accounting/chart-of-accounts-setup/\">CoA setup &rarr;</a>" },
    { num: "08", title: "Financial statements &amp; documentation", body: "Reconstructed P&amp;L, balance sheet, and cash-flow statements &mdash; per entity where you run more than one &mdash; with business personal-property asset detail kept assessor-ready for the Form 102/103 declaration. Written summary of every adjustment made, signed off by the ProAdvisor &mdash; 1099-ready vendor records included where relevant." },
  ],

  // PROCESS — four-phase engagement rhythm (process-grid). 4 H3s.
  // (H2: From first call to clean books.)
  process: [
    { phase: "Phase 1", title: "Diagnostic &amp; scope", body: "A 30-minute call to review your file, statements, and payroll records. Within 3 business days you receive a written fixed-fee scope &mdash; deliverables, timeline, pricing, the standard we&rsquo;re holding to. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Reconciliation &amp; correction", body: "Real reconciliation against actual statements. Categorization, undeposited funds, duplicates, A/R and A/P cleanup, entity separation, prior-period corrections, payroll and county LIT withholding verification, sales-tax reconciliation. The work happens here.", meta: "Typical: 2&ndash;6 weeks" },
    { phase: "Phase 3", title: "Statements &amp; review", body: "Reconstructed financial statements produced. Quality review against the operating standard before delivery. Every adjustment documented for your records and for your CPA.", meta: "Typical: 3&ndash;5 business days" },
    { phase: "Phase 4", title: "Handoff &amp; ongoing", body: "Clean books delivered with a written summary of corrections. Continue with the same bookkeeper on <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a>, or hand off to your existing CPA.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative, capability-level statements (R5; checks-list).
  // (H2: What changes when the books are clean.)
  outcomes: [
    "<strong>Bank reconciliation:</strong> from months behind and drifting from statements to every account reconciled, every period, against actual statements.",
    "<strong>Categorization:</strong> from uncategorized and miscoded transactions to every transaction in the right account, bank rules rebuilt.",
    "<strong>Entity separation:</strong> from several Indiana businesses commingled in one file to clean per-entity books with proper intercompany structure.",
    "<strong>County LIT &amp; sales tax:</strong> from withholding and accruals that don&rsquo;t match what was filed to numbers reconciled to your Indiana returns across the 92-county matrix, reducing notice risk.",
    "<strong>Business personal property:</strong> from scattered, unverifiable asset records to detail kept assessor-ready for the Form 102/103 declaration so your CPA files without scramble.",
    "<strong>Financial statements:</strong> from unreliable numbers you can&rsquo;t share to CPA-ready P&amp;L, balance sheet, and cash-flow statements.",
    "<strong>Lender / buyer readiness:</strong> from financials that can&rsquo;t survive due diligence to statements that stand up to a lender or buyer review.",
  ],

  // PRICING — three fixed-fee scope tiers (ptier r-3). Canonical IN figure (from $1,200) only;
  // higher tiers scoped qualitatively. 3 H3s.
  // (H2: Fixed fee, written scope, no hourly billing.)
  pricing: [
    { tier: "Tier 01", title: "Single-year cleanup", range: "From $1,200", fit: "smaller Indiana businesses &mdash; 1 year, single entity, 2&ndash;3 bank accounts, no payroll or simple payroll.", includes: ["12 months of reconciliation", "Categorization &amp; bank rules", "P&amp;L, balance sheet, cash flow", "Written summary of adjustments"], href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a single-year cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "Fixed-fee &middot; scoped to months behind", fit: "active Indiana businesses &mdash; 12&ndash;24 months, payroll with county LIT withholding, multiple bank and credit accounts, 7% sales tax.", includes: ["12&ndash;24 months of reconciliation", "Categorization, bank rules, undeposited funds", "Payroll, county LIT &amp; sales-tax verification", "Business personal-property asset detail kept assessor-ready", "Chart of accounts restructure", "CPA-ready financial statements"], href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Multi-year / multi-entity cleanup", range: "Fixed-fee &middot; custom scope", fit: "Indiana businesses 2+ years behind, or operators with several commingled entities, inventory, multi-state nexus, or complex payroll.", includes: ["Multi-year historical reconstruction", "Multi-entity separation", "Intercompany structure rebuilt", "Inventory &amp; COGS verification", "Multi-state nexus reconciliation", "Full statement set per entity, per year"], href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a multi-year cleanup &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the Standard and Multi-year tiers are priced as a fixed fee against the written scope determined by the diagnostic &mdash; by months behind, account count, payroll, number of entities, and complexity. If your cleanup also requires QuickBooks file repair &mdash; broken feeds, corruption, version conflicts &mdash; see <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">QuickBooks file cleanup</a>; the engagements pair seamlessly.",

  // ADVISORY LINE — judgment-over-automation framing.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisory: "Bank feeds can import a transaction; they can&rsquo;t tell you which prior-period entry is wrong, why a clearing account never zeroes, which entity a payment really belongs to, which county&rsquo;s LIT rate a payroll record should withhold at, or that a sales-tax accrual won&rsquo;t survive an Indiana review. Reconstructing clean books is judgment work, not data entry. Once your Indiana books are solid, ongoing <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a> keeps them that way and <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns them into decisions.",

  // OPERATOR — expertise-first framing, firm-level (R5: named-reviewer line reframed).
  operatorBody: [
    "Every TechBrot cleanup is delivered by a vetted Certified QuickBooks ProAdvisor working under TechBrot&rsquo;s brand, standards, and infrastructure &mdash; the expert who does the work stays on your books from diagnostic to handoff. You&rsquo;ll know exactly who is working on your books, how to reach them, and what credentials they hold.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and if continuity is ever a question, the team handles the transition without losing the file context. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "Active Intuit QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 92 Indiana counties &mdash; Indianapolis, Fort Wayne, Evansville, South Bend, Carmel/Fishers, Bloomington, Hammond &mdash; served remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your books from diagnostic to handoff &middot; every adjustment documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc. &middot; not a registered agent" },
  ],

  // RELATED — cleanup as part of a larger IN engagement (rel cards). 4 H3s.
  // (H2: Cleanup is often part of a larger Indiana engagement.)
  related: [
    { title: "QuickBooks file cleanup", body: "Broken bank feeds, file corruption, list and version problems. Fixes the QuickBooks file itself &mdash; often paired with bookkeeping cleanup.", href: "/find-an-accountant/indiana/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { title: "Monthly bookkeeping", body: "Once the books are clean, ongoing monthly bookkeeping keeps them that way. Real monthly close, real reconciliations, named bookkeeper.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana bookkeeping &rarr;" },
    { title: "County income tax help", body: "Indiana&rsquo;s 92-county local income tax (LIT) withholding matrix &mdash; county of residence on January 1, Form WH-4, the 30-day safe harbor &mdash; reconciled as part of cleanup.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County LIT help &rarr;" },
    { title: "Behind on Indiana taxes?", body: "When a books problem has become a tax problem, cleanup establishes the true numbers so your CPA or attorney can resolve it.", href: "/find-an-accountant/indiana/business-tax-problems/", cta: "Tax problem help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Standards", detail: "Fixed-fee, written scope &middot; no tax-filing or representation claims (out of scope) &middot; IN facts reviewed periodically &middot; no fabricated data" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; not a registered agent &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Indiana-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Indiana bookkeeping cleanup questions.) 1 call-intent answer (#3).
  faq: [
    { q: "What is bookkeeping cleanup for an Indiana business?", a: "Bookkeeping cleanup is a project-based engagement that reconstructs accurate financial records from a messy or unreconciled state. For an Indiana business it typically includes real bank and credit-card reconciliation against actual statements, categorization corrections, clearing undeposited funds, fixing duplicate and missing transactions, separating commingled entities, correcting prior-period errors, verifying payroll and county LIT withholding, reconciling sales tax, keeping business personal-property detail assessor-ready, and producing CPA-ready financial statements. It is distinct from QuickBooks file cleanup, which fixes the file itself." },
    { q: "How long does bookkeeping cleanup take in Indiana?", a: "Most cleanup engagements take 2 to 8 weeks. A single-year cleanup for a small Indiana business with 2 to 3 bank accounts typically takes a few weeks. Multi-year or multi-entity cleanups involving payroll, inventory, or several commingled entities take longer. The timeline is fixed in a written scope before any work begins." },
    { q: "How much does bookkeeping cleanup cost in Indiana?", a: "Cleanup is priced by scope, not by the hour, starting at $1,200. The fee is set by months behind, account count, payroll, number of entities, and complexity &mdash; a single-year single-entity cleanup sits at the lower end; multi-year or multi-entity reconstructions run higher. Every cleanup is fixed-fee against a written scope &mdash; for a quote, book a free diagnostic or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. See the <a href=\"#in-svc-cleanup-pricing\">pricing scope section</a> above for tier details." },
    { q: "What&rsquo;s the difference between cleanup bookkeeping and QuickBooks cleanup?", a: "Cleanup bookkeeping fixes the books &mdash; reconciliation, categorization, prior-period corrections, entity separation, and CPA-ready statements regardless of platform. <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes the QuickBooks file itself &mdash; broken bank feeds, file corruption, list and version problems. Many Indiana engagements involve both: repair the file, then reconstruct the books on top of it." },
    { q: "What&rsquo;s the difference between cleanup and catch-up bookkeeping?", a: "Catch-up bookkeeping brings behind-but-structured books up to date by entering missed transactions and completing reconciliations through the current month. Cleanup is deeper: it corrects errors, fixes categorization, resolves reconciliation discrepancies, separates commingled entities, and reconstructs accurate records from a messy state. Many Indiana engagements combine both &mdash; clean up the existing periods, catch up the missing months, then transition to monthly bookkeeping." },
    { q: "How do you handle Indiana county income tax (LIT) and sales tax during cleanup?", a: "Cleanup reconciles your payroll county LIT withholding to what was filed across Indiana&rsquo;s 92-county matrix &mdash; LIT is set by county of residence on January 1, established on Form WH-4, with a 30-day safe harbor for short-stay nonresident work &mdash; and reconciles your flat 7% statewide sales-tax accruals to your filed Indiana returns. We prepare accurate numbers and keep the books reconciled; your CPA or EA files the returns. We do not file the Indiana, county LIT, or sales-tax return, and we never quote a specific county rate &mdash; the current per-county rates live with the Indiana Department of Revenue." },
    { q: "Will my CPA accept Indiana books cleaned up by TechBrot?", a: "Yes. TechBrot cleanup produces CPA-ready, lender-ready financial statements &mdash; reconciled to source documents with documented adjustments &mdash; designed to be handed directly to a tax preparer, lender, or buyer without rework. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm and coordinates with your CPA, EA, and county assessor, who file; we do not file tax returns, the county LIT return, the sales-tax return, or the business personal-property return." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cleanup-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Bookkeeping Cleanup","description":"Bookkeeping cleanup for Indiana businesses — reconciliation, categorization fixes, commingled multi-entity separation, county LIT and sales-tax reconciliation, and CPA-ready financial statements. Fixed-fee, all 92 counties.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-cleanup-bookkeeping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-cleanup-summary","#in-svc-cleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cleanup Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Bookkeeping Cleanup","serviceType":"Bookkeeping cleanup and reconciliation","description":"Project-based bookkeeping cleanup for Indiana businesses: real bank and credit-card reconciliation, categorization corrections, clearing undeposited funds, duplicate and missing transaction resolution, commingled multi-entity separation, prior-period error correction, A/R and A/P cleanup, payroll and county LIT withholding verification, flat 7% sales-tax reconciliation, business personal-property asset detail kept assessor-ready, and CPA-ready financial statements. Independent Certified QuickBooks ProAdvisor and bookkeeping firm; does not file Indiana returns, the county LIT return, the sales-tax return, or the business personal-property return — coordinates with the client's CPA, EA, and county assessor, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana small and mid-sized businesses, multi-entity operators in manufacturing, logistics, and real estate with messy, unreconciled, commingled, or backlogged books"},
          "offers":[
            {"@type":"Offer","name":"Single-year cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Single-year, single-entity cleanup — from $1,200, fixed-fee against written scope.","url":url},
            {"@type":"Offer","name":"Standard cleanup","priceCurrency":"USD","description":"Standard 12–24 month cleanup — fixed-fee against written scope, scoped to months behind and complexity.","url":url},
            {"@type":"Offer","name":"Multi-year / multi-entity cleanup","priceCurrency":"USD","description":"Multi-year or multi-entity cleanup — fixed-fee against written scope, custom-scoped.","url":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
