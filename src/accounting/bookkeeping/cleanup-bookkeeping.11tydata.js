/* /accounting/bookkeeping/cleanup-bookkeeping/ (round-16 elevation). Sources:
 * baseline.json (42 headings, 12 FAQ — 7 substantive + 5 schema-only dupes) +
 * accounting/bookkeeping/cleanup-bookkeeping/index.html (full copy). t-bofu.
 * Citable / COINED: "COMPOUNDING RECONCILIATION DRIFT" — each unreconciled
 * period inherits and amplifies the prior period's miscategorizations and
 * discrepancies, so the gap between the books and reality compounds month over
 * month; a cleanup unwinds the accumulated drift to a reconciled baseline.
 * Visual: before/after ComparisonGrid (vs-table). Price $1,500–$15,000+.
 * quick-5 additive, zero overlap with FAQ. Authorship firm-level; founder
 * schema-only. CTA: bookkeeping BOFU — NO "Speak to a ProAdvisor". */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // the coined framework — the citable element
  drift: {
    term: "Compounding Reconciliation Drift",
    body: "When accounts go unreconciled, each new period is built on the errors of the last. A miscategorization or unmatched transaction in January is carried into February’s opening balances; March compounds on February; and the gap between the books and the bank widens period over period. We call this <strong>compounding reconciliation drift</strong> &mdash; and it’s why a cleanup doesn’t just fix the latest month. It unwinds the accumulated drift, account by account and period by period, back to a reconciled baseline your CPA, lender, or buyer can rely on.",
  },
  signals: [
    { opener: "You haven’t reconciled in months — or years.", body: "Bank feeds drift over time. Without real reconciliation against actual statements, the books quietly diverge from reality. Cleanup brings them back into agreement, line by line." },
    { opener: "Your CPA flagged the books before tax season.", body: "A common path. The CPA needs reliable numbers to file accurately. Cleanup produces statements the tax preparer can work from without rework." },
    { opener: "A lender or buyer asked for clean financials.", body: "SBA loans, lines of credit, business sales, and capital raises all require reconciled books. Cleanups are routinely scoped to a specific lender or buyer deadline." },
    { opener: "Your previous bookkeeper left things in disarray.", body: "Miscategorized transactions, duplicate entries, broken bank rules, undeposited funds open for months. Cleanup unwinds the mistakes and rebuilds correctly." },
    { opener: "You switched accounting software and the migration left gaps.", body: "Desktop-to-Online migrations and conversions from Xero or Wave frequently produce data-integrity issues. Cleanup verifies and corrects what the migration left behind." },
    { opener: "You ran the books yourself and need a professional reset.", body: "Many owners start with their own books, run a year or two, then realize the structure isn’t holding. Cleanup gives you a clean foundation and a real chart of accounts to grow into." },
  ],
  // quick-5 — distinct from FAQ (what is / how long / how much / fixable-after-years / vs catch-up / who / CPA-accept)
  "override:aiSummary": [
    { q: "Is a cleanup fixed-fee or priced by the hour?", a: "<strong>Fixed fee against a written scope</strong>, never hourly. The diagnostic produces deliverables, timeline, and price in writing before any work begins &mdash; so an open-ended mess doesn’t become an open-ended invoice." },
    { q: "Why do books drift out of reconciliation in the first place?", a: "<strong>Compounding reconciliation drift</strong>: each unreconciled period inherits and amplifies the prior period’s miscategorizations and unmatched transactions, so the gap between the books and the bank widens month over month. A cleanup unwinds that accumulated drift back to a reconciled baseline." },
    { q: "Do you clean up inside my own QuickBooks file?", a: "Yes. Your operator works as an authorized accountant-user inside <strong>your own QuickBooks file</strong> &mdash; Online, Desktop, or Enterprise. Your data stays yours, every adjustment is documented, and access is revocable at any time." },
    { q: "What do I actually receive when the cleanup is done?", a: "Reconciled accounts, a corrected chart of accounts, reconstructed <strong>P&amp;L, balance sheet, and cash flow statements</strong>, and a written summary of every adjustment made &mdash; CPA-ready and lender-ready, designed to be handed off without rework." },
    { q: "Can the same operator keep my books current after cleanup?", a: "Yes. Cleanup is most clients’ entry point; once the books are clean you can continue with the <strong>same named operator</strong> on monthly bookkeeping, or hand the clean file to your existing accountant. No lock-in." },
  ],
  deliverables: [
    { num: "01", name: "Bank & credit card reconciliation", body: "Every account reconciled against actual bank and credit-card statements, line by line, period by period. No “reconciliation” against bank feeds alone." },
    { num: "02", name: "Transaction categorization", body: "Every transaction reviewed and categorized to the correct account. Uncategorized expenses cleared. Bank rules rebuilt to prevent regression." },
    { num: "03", name: "Undeposited funds & clearing accounts", body: "Old undeposited funds investigated and cleared. Clearing-account balances reconciled to zero or to documented open items." },
    { num: "04", name: "Duplicate & missing transaction resolution", body: "Duplicates identified and removed. Missing transactions reconstructed from source documents — statements, receipts, payroll records." },
    { num: "05", name: "Prior-period error correction", body: "Identified errors in closed periods corrected with documented journal entries. Adjustments mapped clearly for your tax preparer." },
    { num: "06", name: "Payroll & sales tax verification", body: "Payroll liabilities reconciled to filed returns. Sales-tax accruals verified against multi-state filings. Discrepancies escalated and resolved." },
    { num: "07", name: "Chart of accounts review", body: "Chart of accounts evaluated against the business model. Structure simplified, redundant accounts merged, missing accounts added." },
    { num: "08", name: "Financial statements & documentation", body: "Reconstructed P&L, balance sheet, and cash flow statements. Written summary of every adjustment made, signed off by the operator." },
  ],
  // "From first call to clean books." — HowTo, 4 steps
  process: [
    { num: "01", name: "Diagnostic & Scope", body: "A 30-minute call to review your file, statements, and payroll records. Within 3 business days you receive a written fixed-fee scope — deliverables, timeline, pricing, the standard we’re holding to.", when: "Typical: 3 business days" },
    { num: "02", name: "Reconciliation & Correction", body: "Real reconciliation against actual statements. Categorization, undeposited funds, duplicates, prior-period corrections, payroll and sales-tax verification. The work happens here.", when: "Typical: 2–6 weeks" },
    { num: "03", name: "Statements & Review", body: "Reconstructed financial statements produced. Platform-level quality review against the operating standard before delivery. Every adjustment documented.", when: "Typical: 3–5 business days" },
    { num: "04", name: "Handoff & Ongoing", body: "Clean books delivered with a written summary of corrections. Continue with the same operator on monthly bookkeeping, or hand off to your existing accountant.", when: "Optional: monthly engagement" },
  ],
  // before/after ComparisonGrid — the drift, resolved
  compare: [
    { dim: "Bank reconciliation", before: "Months behind, drifting from statements", after: "Every account reconciled, every period" },
    { dim: "Categorization", before: "Uncategorized expenses, miscoded transactions", after: "Every transaction in the right account" },
    { dim: "Financial statements", before: "Unreliable, can’t share with CPA or lender", after: "CPA-ready P&L, balance sheet, cash flow" },
    { dim: "Tax filing readiness", before: "Tax season is a fire drill", after: "Books filed-from, not fixed-during" },
    { dim: "Lender / buyer readiness", before: "SBA / lender / due diligence not viable", after: "Statements stand up to lender review" },
    { dim: "Owner confidence", before: "Don’t trust the numbers", after: "Books reflect the business" },
  ],
  tiers: [
    { name: "Single-year cleanup", price: "$1,500–$3,500", per: "", forWhom: "Smaller businesses, 1 year, 2–3 bank accounts, no payroll or simple payroll.", bullets: ["12 months of reconciliation", "Categorization & bank rules", "P&L, balance sheet, cash flow", "Written summary of adjustments"], cta: "Scope a single-year cleanup", note: "" },
    { name: "Standard cleanup", price: "$3,500–$8,000", per: "", forWhom: "Active businesses, 12–24 months, payroll, multiple bank and credit accounts, sales tax.", bullets: ["12–24 months of reconciliation", "Categorization, bank rules, undeposited funds", "Payroll & sales tax verification", "Chart of accounts restructure", "CPA-ready financial statements"], cta: "Scope a standard cleanup", note: "Most common" },
    { name: "Multi-year cleanup", price: "$8,000–$15,000+", per: "", forWhom: "Businesses 2+ years behind, multi-entity, inventory, multi-state sales tax, complex payroll.", bullets: ["Multi-year historical reconstruction", "Multi-entity consolidation", "Inventory & COGS verification", "Multi-state tax reconciliation", "Full statement set per year"], cta: "Scope a multi-year cleanup", note: "" },
  ],
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review on every engagement" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  nextSteps: [
    { title: "Catch-up bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up", body: "Bring backlogged books current. Often paired with cleanup — clean up what exists, catch up what’s missing, then transition to monthly." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Once books are clean, ongoing monthly bookkeeping keeps them that way — real monthly close, real reconciliations, named operator." },
    { title: "QuickBooks file cleanup", href: "/quickbooks/?intent=quickbooks", body: "Specific QuickBooks file issues — broken bank feeds, file size, multi-user mode, version mismatches. ProAdvisor-led resolution." },
    { title: "Multi-year historical cleanup", href: "/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up", body: "3+ years of books, often required before a sale, an SBA application, or an IRS issue. Methodical reconstruction at scale." },
  ],
  // de-dup 2026-06-25: override the dir-data generic 11-FAQ block (hub owns it)
  // so this page ships ONLY its page-specific questions. `override:` = array-replace.
  "override:faq": [
    { q: "What is bookkeeping cleanup?", a: "Bookkeeping cleanup is a project-based engagement to reconstruct accurate financial records from a messy or unreconciled state. It typically includes categorization corrections, real bank and credit-card reconciliations, clearing undeposited funds, fixing duplicate or missing transactions, correcting prior-period errors, verifying payroll and sales tax entries, and producing reliable financial statements suitable for tax filing, lending, or sale of the business." },
    { q: "How long does QuickBooks cleanup take?", a: "Most cleanup engagements take 2 to 8 weeks. Single-year cleanups for small businesses with 2 to 3 bank accounts typically take 2 to 3 weeks. Multi-year cleanups for businesses with payroll, inventory, or multiple entities can take 6 to 10 weeks. The diagnostic call produces a written timeline before work begins." },
    { q: "How much does bookkeeping cleanup cost?", a: "Cleanup is priced by scope, not by hour. Small single-year cleanups typically range from $1,500 to $3,500. Standard 12 to 24 month cleanups fall between $3,500 and $8,000. Multi-year cleanups involving payroll, inventory, or multi-entity structures typically range from $8,000 to $15,000 or more. Every TechBrot cleanup engagement is fixed-fee against a written scope." },
    { q: "Can my books be fixed if they have not been reconciled in years?", a: "Yes. Multi-year cleanups are one of the most common engagements. Even when a QuickBooks file hasn’t been reconciled in 3+ years, an experienced ProAdvisor can reconstruct accurate books using bank statements, payroll records, and source documents. The process is methodical and the outcome is reliable financial statements you can file taxes from." },
    { q: "What is the difference between cleanup and catch-up bookkeeping?", a: "Catch-up bookkeeping brings behind-but-structured books up to date — entering missed transactions, completing reconciliations through the current month. Cleanup is a deeper engagement that corrects errors, fixes categorization, resolves reconciliation discrepancies, and reconstructs accurate records from a messy or unreliable state. Many engagements include both." },
    { q: "Who actually performs the cleanup work?", a: "A vetted local TechBrot operator — an independent accounting practice running under TechBrot’s brand, standards, and infrastructure. Every operator is a Certified QuickBooks ProAdvisor, credentialed, insured, and onboarded against a defined quality standard. You’ll know who is working on your books and how to reach them." },
    { q: "Will my CPA or tax preparer accept books cleaned up by TechBrot?", a: "Yes. TechBrot cleanup engagements produce CPA-ready, lender-ready financial statements — reconciled to source documents with documented adjustments. The deliverable is designed to be handed directly to a tax preparer, lender, or buyer without rework. Many of our cleanup engagements are referred by CPAs whose clients arrived at tax season with unreliable books." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/bookkeeping/cleanup-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#cleanup-bookkeeping-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Bookkeeping","item":"https://techbrot.com/accounting/bookkeeping/"},
          {"@type":"ListItem","position":4,"name":"Cleanup bookkeeping","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Bookkeeping & QuickBooks cleanup services","serviceType":"Project-based bookkeeping cleanup and reconciliation","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Cleanup engagement tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From first call to clean books","description":"How a TechBrot bookkeeping cleanup engagement runs, from diagnostic to handoff.","step":data.process.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What a bookkeeping cleanup delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
