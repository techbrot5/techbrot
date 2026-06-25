/* /find-an-accountant/delaware/cleanup-bookkeeping/ — t-money DE SERVICE child (the BROADER
 * books-cleanup / catch-up service — reconciliation, categorization, multi-year and multi-entity
 * reconstruction — DISTINCT from the QuickBooks-FILE cleanup sibling). NEW page (no baseline
 * equity contract — Delaware set built fresh). Structure mirrors the proven NY cleanup-bookkeeping
 * child: JSON front-matter in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service with 3
 * Offers, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * DELAWARE LOCALIZATION (per DE-FACTS): NY sales-tax/NYS-returns/62-counties → DE gross receipts
 * tax reconciled to filed Division of Revenue returns; franchise-tax reserve; commingled
 * multi-entity / holding-company separation; New Castle, Kent, Sussex; Middletown office.
 * PRICING (rule 10 + DE-FACTS): ONLY the canonical "from $1,200" figure is stated. The NY tier
 * dollar ranges ($1,500–$3,500 / $3,500–$8,000 / $8,000–$15,000+) are NY-specific and NOT in
 * DE-FACTS, so they are NOT reproduced — higher Delaware tiers are scoped qualitatively. The
 * "2–8 weeks" engagement-duration language is a generic operational descriptor (not a DE tax or
 * price figure) and is retained.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes; the before/after outcomes are
 * representative, capability-level statements, not claimed real-client results. No review-card,
 * no AggregateRating. No founder/personal name in visible content. Independent firm — NOT a
 * registered agent; does NOT file DE/federal returns or the franchise tax; coordinates with the
 * client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 section carrying the cleanup TL;DR prose.
  // (H2: The short version.)
  summary: [
    "A <strong>Delaware bookkeeping cleanup</strong> is a project-based engagement that reconstructs accurate financial records from a messy or unreconciled state &mdash; real <strong>bank and credit-card reconciliation</strong> against actual statements, categorization corrections, clearing undeposited funds, fixing duplicate or missing transactions, correcting prior-period errors, separating commingled entities, verifying payroll and <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts</a> entries, setting the franchise-tax reserve, and producing CPA-ready <a href=\"/accounting/financial-statements/\">financial statements</a>. Most cleanups take 2&ndash;8 weeks, priced fixed-fee against a written scope (from $1,200 by complexity).",
    "The work is methodical before it is fast. A messy set of books usually announces itself the same way: a reconciliation that hasn&rsquo;t balanced in months, an <strong>undeposited-funds</strong> account carrying receipts that never cleared, A/R and A/P that no longer match what customers and vendors actually owe, a gross-receipts liability that drifts from the filed Delaware returns, several entities run through one commingled file, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its source &mdash; an unmatched deposit, a transaction coded to the wrong period, a duplicate bank feed &mdash; and rebuild from documents, not from a forced balancing entry.",
    "Cleanup is distinct from <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">QuickBooks file cleanup</a> (which fixes the file itself &mdash; broken feeds, corruption) and from ongoing <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">monthly bookkeeping</a> (which keeps clean books clean). Many Delaware engagements combine cleanup with <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a> &mdash; correct the existing periods, then enter the missing months &mdash; before transitioning to a monthly handoff. We run the books and coordinate with your CPA, who files. Independent firm &mdash; not affiliated with Intuit Inc.; not a registered agent; does not file Delaware returns or the franchise tax. All three Delaware counties, Wilmington to the Sussex coast.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware bookkeeping cleanup, in five questions.)
  aiSummary: [
    { q: "What is bookkeeping cleanup?", a: "<strong>Bookkeeping cleanup reconstructs accurate financial records from a messy or unreconciled state</strong> &mdash; reconciliation against real bank and credit-card statements, categorization fixes, clearing undeposited funds, resolving duplicates and gaps, A/R and A/P cleanup, separating commingled entities, correcting prior periods, verifying payroll and gross receipts, setting the franchise-tax reserve, and producing CPA-ready statements. It is broader than QuickBooks file cleanup." },
    { q: "How long does it take?", a: "Most cleanups take <strong>2&ndash;8 weeks</strong>. A single-year cleanup with 2&ndash;3 accounts runs a few weeks; a multi-year or multi-entity cleanup with payroll or inventory can take longer. The timeline is fixed in writing before work starts." },
    { q: "What does it cost in Delaware?", a: "Priced by scope, not by hour: cleanup starts at <strong>$1,200</strong>, with the fee set by months behind, account count, payroll, number of entities, and complexity. Fixed-fee against a written scope, always. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
    { q: "Cleanup or QuickBooks cleanup &mdash; which do I need?", a: "<strong>Cleanup fixes the books; <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes the file.</strong> Broken feeds and file errors are QuickBooks cleanup; bad reconciliations and miscategorized history are bookkeeping cleanup. Many engagements need both." },
    { q: "Will my CPA accept the cleaned-up books?", a: "Yes &mdash; cleanup produces <strong>CPA-ready, lender-ready statements</strong> reconciled to source documents with documented adjustments, designed to hand straight to your CPA or lender. We do the books; your CPA files." },
  ],

  // SIGNALS — the six situations where cleanup is the right starting point (lift cards). 6 H3s.
  // (H2: If any of these sound familiar, the answer is yes.)
  signals: [
    { title: "You haven&rsquo;t reconciled in months &mdash; or years.", body: "Bank feeds drift over time. Without real reconciliation against actual statements, the books quietly diverge from reality. Cleanup brings them back into agreement, line by line, period by period." },
    { title: "Your CPA flagged the books before tax season.", body: "A common path. Your CPA needs reliable numbers to file accurately. Cleanup produces statements the tax preparer can work from without rework &mdash; books filed-from, not fixed-during." },
    { title: "A lender or buyer asked for clean financials.", body: "SBA loans, lines of credit, business sales, and capital raises all require reconciled books. Cleanups are routinely scoped to a specific lender or buyer deadline." },
    { title: "Your previous bookkeeper left things in disarray.", body: "Miscategorized transactions, duplicate entries, broken bank rules, undeposited funds open for months, A/R and A/P that no longer tie. Cleanup unwinds the mistakes and rebuilds correctly." },
    { title: "Several entities are commingled in one file.", body: "Delaware&rsquo;s incorporation economy means holding companies and out-of-state owners often run multiple entities through a single QuickBooks file. Cleanup separates them into clean per-entity books with proper intercompany structure." },
    { title: "You ran the books yourself and need a professional reset.", body: "Many Delaware owners start with their own books, run for a year or two, then realize the structure isn&rsquo;t holding. Cleanup gives you a clean foundation and a real chart of accounts to grow into." },
  ],

  // WHAT'S INCLUDED — the eight workstreams (deliver--3 lattice). 8 H3s.
  // (H2: What a Delaware cleanup actually delivers.)
  includes: [
    { num: "01", title: "Bank &amp; credit card reconciliation", body: "Every account reconciled against actual bank and credit-card statements, line by line, period by period. No &ldquo;reconciliation&rdquo; against live bank feeds alone &mdash; the statement is the source of truth." },
    { num: "02", title: "Transaction categorization", body: "Every transaction reviewed and categorized to the correct account. Uncategorized expenses cleared. Bank rules rebuilt to prevent the miscoding from regenerating." },
    { num: "03", title: "Undeposited funds &amp; clearing accounts", body: "Old undeposited funds investigated against bank deposits and open receipts matched, cleared, or documented. Clearing-account balances reconciled to zero or to a justified open total." },
    { num: "04", title: "Duplicate, missing &amp; commingled resolution", body: "Duplicates identified across bank feeds, manual entries, and connected apps, then removed. Missing transactions reconstructed from source documents. Where multiple entities are commingled in one file, they&rsquo;re separated into clean per-entity books." },
    { num: "05", title: "Prior-period error correction", body: "Identified errors in closed periods corrected with documented journal entries &mdash; including A/R and A/P cleanup and clearing what landed in opening-balance equity. Adjustments mapped clearly for your tax preparer." },
    { num: "06", title: "Payroll, gross receipts &amp; franchise-tax reserve", body: "Payroll liabilities reconciled to filed returns. Gross-receipts accruals verified against your filed Delaware returns by business activity, and the annual franchise-tax reserve set. Discrepancies escalated and resolved. We prepare the numbers; your CPA or registered agent files." },
    { num: "07", title: "Chart of accounts review", body: "Chart of accounts evaluated against your Delaware business model &mdash; gross-receipts activity categories and a franchise-tax reserve account added where missing, redundant accounts merged. <a href=\"/accounting/chart-of-accounts-setup/\">CoA setup &rarr;</a>" },
    { num: "08", title: "Financial statements &amp; documentation", body: "Reconstructed P&amp;L, balance sheet, and cash-flow statements &mdash; per entity where you run more than one. Written summary of every adjustment made, signed off by the ProAdvisor &mdash; 1099-ready vendor records included where relevant." },
  ],

  // PROCESS — four-phase engagement rhythm (process-grid). 4 H3s.
  // (H2: From first call to clean books.)
  process: [
    { phase: "Phase 1", title: "Diagnostic &amp; scope", body: "A 30-minute call to review your file, statements, and payroll records. Within 3 business days you receive a written fixed-fee scope &mdash; deliverables, timeline, pricing, the standard we&rsquo;re holding to. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Reconciliation &amp; correction", body: "Real reconciliation against actual statements. Categorization, undeposited funds, duplicates, A/R and A/P cleanup, entity separation, prior-period corrections, payroll and gross-receipts verification, franchise-tax reserve. The work happens here.", meta: "Typical: 2&ndash;6 weeks" },
    { phase: "Phase 3", title: "Statements &amp; review", body: "Reconstructed financial statements produced. Quality review against the operating standard before delivery. Every adjustment documented for your records and for your CPA.", meta: "Typical: 3&ndash;5 business days" },
    { phase: "Phase 4", title: "Handoff &amp; ongoing", body: "Clean books delivered with a written summary of corrections. Continue with the same bookkeeper on <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">monthly bookkeeping</a>, or hand off to your existing CPA.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — representative, capability-level statements (R5; checks-list).
  // (H2: What changes when the books are clean.)
  outcomes: [
    "<strong>Bank reconciliation:</strong> from months behind and drifting from statements to every account reconciled, every period, against actual statements.",
    "<strong>Categorization:</strong> from uncategorized and miscoded transactions to every transaction in the right account, bank rules rebuilt.",
    "<strong>Entity separation:</strong> from several businesses commingled in one file to clean per-entity books with proper intercompany structure.",
    "<strong>Gross receipts:</strong> from a liability that doesn&rsquo;t match what was filed to accruals reconciled to your Delaware returns by activity, reducing notice risk.",
    "<strong>Franchise-tax reserve:</strong> from an unbudgeted annual surprise to a reserve tracked in the books so your CPA or agent files without scramble.",
    "<strong>Financial statements:</strong> from unreliable numbers you can&rsquo;t share to CPA-ready P&amp;L, balance sheet, and cash-flow statements.",
    "<strong>Lender / buyer readiness:</strong> from financials that can&rsquo;t survive due diligence to statements that stand up to a lender or buyer review.",
  ],

  // PRICING — three fixed-fee scope tiers (ptier r-3). Canonical DE figure (from $1,200) only;
  // higher tiers scoped qualitatively. 3 H3s.
  // (H2: Fixed fee, written scope, no hourly billing.)
  pricing: [
    { tier: "Tier 01", title: "Single-year cleanup", range: "From $1,200", fit: "smaller Delaware businesses &mdash; 1 year, single entity, 2&ndash;3 bank accounts, no payroll or simple payroll.", includes: ["12 months of reconciliation", "Categorization &amp; bank rules", "P&amp;L, balance sheet, cash flow", "Written summary of adjustments"], href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a single-year cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "Fixed-fee &middot; scoped to months behind", fit: "active Delaware businesses &mdash; 12&ndash;24 months, payroll, multiple bank and credit accounts, gross receipts by activity.", includes: ["12&ndash;24 months of reconciliation", "Categorization, bank rules, undeposited funds", "Payroll &amp; gross-receipts verification", "Franchise-tax reserve set", "Chart of accounts restructure", "CPA-ready financial statements"], href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Multi-year / multi-entity cleanup", range: "Fixed-fee &middot; custom scope", fit: "Delaware businesses 2+ years behind, or holding companies with several commingled entities, inventory, or complex payroll.", includes: ["Multi-year historical reconstruction", "Multi-entity / holding-company separation", "Intercompany structure rebuilt", "Inventory &amp; COGS verification", "Full statement set per entity, per year"], href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a multi-year cleanup &rarr;" },
  ],
  pricingNote: "Cleanup starts at $1,200; the Standard and Multi-year tiers are priced as a fixed fee against the written scope determined by the diagnostic &mdash; by months behind, account count, payroll, number of entities, and complexity. If your cleanup also requires QuickBooks file repair &mdash; broken feeds, corruption, version conflicts &mdash; see <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">QuickBooks file cleanup</a>; the engagements pair seamlessly.",

  // ADVISORY LINE — judgment-over-automation framing.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisory: "Bank feeds can import a transaction; they can&rsquo;t tell you which prior-period entry is wrong, why a clearing account never zeroes, which entity a payment really belongs to, or that a gross-receipts accrual won&rsquo;t survive a Delaware review. Reconstructing clean books is judgment work, not data entry. Once your Delaware books are solid, ongoing <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">monthly bookkeeping</a> keeps them that way and <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns them into decisions.",

  // OPERATOR — expertise-first framing, firm-level (R5: named-reviewer line reframed).
  operatorBody: [
    "Every TechBrot cleanup is delivered by a vetted Certified QuickBooks ProAdvisor working under TechBrot&rsquo;s brand, standards, and infrastructure &mdash; the expert who does the work stays on your books from diagnostic to handoff. You&rsquo;ll know exactly who is working on your books, how to reach them, and what credentials they hold.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and if continuity is ever a question, the team handles the transition without losing the file context. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "Active Intuit QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All three Delaware counties &mdash; New Castle, Kent, Sussex &mdash; delivered remotely and from Middletown" },
    { label: "Accountability", detail: "Named ProAdvisor on your books from diagnostic to handoff &middot; every adjustment documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc. &middot; not a registered agent" },
  ],

  // RELATED — cleanup as part of a larger DE engagement (rel cards). 4 H3s.
  // (H2: Cleanup is often part of a larger Delaware engagement.)
  related: [
    { title: "QuickBooks file cleanup", body: "Broken bank feeds, file corruption, list and version problems. Fixes the QuickBooks file itself &mdash; often paired with bookkeeping cleanup.", href: "/find-an-accountant/delaware/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { title: "Monthly bookkeeping", body: "Once the books are clean, ongoing monthly bookkeeping keeps them that way. Real monthly close, real reconciliations, named bookkeeper.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware bookkeeping &rarr;" },
    { title: "Gross receipts tax help", body: "Delaware&rsquo;s gross receipts tax by activity and reconciling accruals to your filed Division of Revenue returns &mdash; verified as part of cleanup.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
    { title: "Behind on Delaware taxes?", body: "When a books problem has become a tax problem, cleanup establishes the true numbers so your CPA or attorney can resolve it.", href: "/find-an-accountant/delaware/business-tax-problems/", cta: "Tax problem help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Standards", detail: "Fixed-fee, written scope &middot; no tax-filing or representation claims (out of scope) &middot; DE facts reviewed periodically &middot; no fabricated data" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; not a registered agent &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Delaware-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Delaware bookkeeping cleanup questions.) 1 call-intent answer (#3).
  faq: [
    { q: "What is bookkeeping cleanup for a Delaware business?", a: "Bookkeeping cleanup is a project-based engagement that reconstructs accurate financial records from a messy or unreconciled state. For a Delaware business it typically includes real bank and credit-card reconciliation against actual statements, categorization corrections, clearing undeposited funds, fixing duplicate and missing transactions, separating commingled entities, correcting prior-period errors, verifying payroll and gross-receipts entries, setting the franchise-tax reserve, and producing CPA-ready financial statements. It is distinct from QuickBooks file cleanup, which fixes the file itself." },
    { q: "How long does bookkeeping cleanup take in Delaware?", a: "Most cleanup engagements take 2 to 8 weeks. A single-year cleanup for a small Delaware business with 2 to 3 bank accounts typically takes a few weeks. Multi-year or multi-entity cleanups involving payroll, inventory, or several commingled entities take longer. The timeline is fixed in a written scope before any work begins." },
    { q: "How much does bookkeeping cleanup cost in Delaware?", a: "Cleanup is priced by scope, not by the hour, starting at $1,200. The fee is set by months behind, account count, payroll, number of entities, and complexity &mdash; a single-year single-entity cleanup sits at the lower end; multi-year or multi-entity holding-company reconstructions run higher. Every cleanup is fixed-fee against a written scope &mdash; for a quote, book a free diagnostic or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. See the <a href=\"#de-svc-cleanup-pricing\">pricing scope section</a> above for tier details." },
    { q: "What&rsquo;s the difference between cleanup bookkeeping and QuickBooks cleanup?", a: "Cleanup bookkeeping fixes the books &mdash; reconciliation, categorization, prior-period corrections, entity separation, and CPA-ready statements regardless of platform. <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes the QuickBooks file itself &mdash; broken bank feeds, file corruption, list and version problems. Many Delaware engagements involve both: repair the file, then reconstruct the books on top of it." },
    { q: "What&rsquo;s the difference between cleanup and catch-up bookkeeping?", a: "Catch-up bookkeeping brings behind-but-structured books up to date by entering missed transactions and completing reconciliations through the current month. Cleanup is deeper: it corrects errors, fixes categorization, resolves reconciliation discrepancies, separates commingled entities, and reconstructs accurate records from a messy state. Many Delaware engagements combine both &mdash; clean up the existing periods, catch up the missing months, then transition to monthly bookkeeping." },
    { q: "Can Delaware books be fixed if they haven&rsquo;t been reconciled in years?", a: "Yes. Multi-year cleanups are one of the most common engagements &mdash; including holding companies where several entities have been run through one file for years. Even when a file hasn&rsquo;t been reconciled in three or more years, an experienced Certified ProAdvisor can reconstruct accurate books using bank statements, payroll records, and source documents. The process is methodical and the outcome is reliable financial statements you and your CPA can file from." },
    { q: "Will my CPA accept Delaware books cleaned up by TechBrot?", a: "Yes. TechBrot cleanup produces CPA-ready, lender-ready financial statements &mdash; reconciled to source documents with documented adjustments &mdash; designed to be handed directly to a tax preparer, lender, or buyer without rework. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm and coordinates with your CPA, who files; we do not file tax returns or the franchise tax." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/cleanup-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Bookkeeping Cleanup","description":"Bookkeeping cleanup for Delaware businesses — reconciliation, categorization fixes, commingled multi-entity separation, multi-year reconstruction, and CPA-ready financial statements. Fixed-fee, all three counties.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-cleanup-bookkeeping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-cleanup-summary","#de-svc-cleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Cleanup Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Bookkeeping Cleanup","serviceType":"Bookkeeping cleanup and reconciliation","description":"Project-based bookkeeping cleanup for Delaware businesses: real bank and credit-card reconciliation, categorization corrections, clearing undeposited funds, duplicate and missing transaction resolution, commingled multi-entity separation, prior-period error correction, A/R and A/P cleanup, payroll and gross-receipts verification, franchise-tax reserve, and CPA-ready financial statements. Independent Certified QuickBooks ProAdvisor and bookkeeping firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, or registered agent, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and mid-sized businesses, holding companies, and out-of-state-owned entities with messy, unreconciled, commingled, or backlogged books"},
          "offers":[
            {"@type":"Offer","name":"Single-year cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Single-year, single-entity cleanup — from $1,200, fixed-fee against written scope.","url":url},
            {"@type":"Offer","name":"Standard cleanup","priceCurrency":"USD","description":"Standard 12–24 month cleanup — fixed-fee against written scope, scoped to months behind and complexity.","url":url},
            {"@type":"Offer","name":"Multi-year / multi-entity cleanup","priceCurrency":"USD","description":"Multi-year or multi-entity holding-company cleanup — fixed-fee against written scope, custom-scoped.","url":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
