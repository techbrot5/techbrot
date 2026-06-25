/* /accounting/bookkeeping/catch-up-bookkeeping/ (round-16 elevation). Sources:
 * baseline.json (40 headings, 12 FAQ — 7 substantive + 5 schema-only dupes) +
 * accounting/bookkeeping/catch-up-bookkeeping/index.html (full copy). t-bofu.
 * Citable / COINED: "HISTORICAL ACCOUNTING DEBT" — the accumulated liability of
 * un-entered, unreconciled periods that grows in complexity and cost like
 * compounding interest; the longer the backlog sits, the more it costs to clear.
 * Priced per month of backlog ($300–$650/mo); typical total engagement
 * $2,000–$20,000+. Visual: catch-up-vs-cleanup decision (vs-table). quick-5
 * additive, zero overlap with FAQ. Authorship firm-level; founder schema-only.
 * CTA: bookkeeping BOFU — NO "Speak to a ProAdvisor". */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  debt: {
    body: "A backlog isn’t static — it’s a liability that compounds. Each month you don’t enter and reconcile, the missing transactions get harder to reconstruct, source documents get harder to retrieve, and the eventual engagement gets larger. We call this <strong>historical accounting debt</strong>: like an unpaid balance accruing interest, the principal is the months of backlog and the interest is the rising complexity of clearing them. Catch-up pays it down &mdash; methodically, oldest period first &mdash; until your books are current and you’re back on a clean monthly footing.",
  },
  signals: [
    { opener: "You stopped doing bookkeeping six months ago — or longer.", body: "Bookkeeping is the easiest thing to deprioritize when the business gets busy. Backlogs compound quickly. Catch-up brings everything current in one engagement." },
    { opener: "Tax season is approaching and the books are nowhere near ready.", body: "Pre-tax catch-ups are routine. Book the diagnostic by early February to file on time. Multi-year backlogs may require an extension — we’ll tell you which path fits." },
    { opener: "Your books are structurally fine but transactions are missing.", body: "Different from cleanup. If the chart of accounts works and prior periods were done correctly, catch-up just fills the gap. No restructuring needed." },
    { opener: "You started using QuickBooks but never finished entering historical data.", body: "Common after switching software. Catch-up backfills the missing periods using bank statements and payroll records so the file is complete." },
    { opener: "A lender or buyer needs current financials by a deadline.", body: "SBA applications, lines of credit, and business sales require current books. Catch-up engagements are routinely scoped to a specific lender or buyer deadline." },
    { opener: "You want to start monthly bookkeeping from a known-current state.", body: "Monthly engagements start from a current baseline. Catch-up gets you to that baseline, then the same operator continues with monthly — seamless transition." },
  ],
  // quick-5 — distinct from FAQ (what is / how long / how much / vs cleanup / before tax season / before monthly / who)
  "override:aiSummary": [
    { q: "Is catch-up fixed-fee or priced by the hour?", a: "<strong>Fixed fee, priced per month of backlog</strong> — never hourly. The diagnostic quantifies the backlog and produces the deliverables, timeline, and total price in writing before any work begins." },
    { q: "What is “historical accounting debt”?", a: "The <strong>accumulated liability of un-entered, unreconciled periods</strong>. Like an unpaid balance accruing interest, the principal is the months of backlog and the interest is the rising complexity of clearing them — the longer it sits, the more it costs. Catch-up pays it down, oldest period first." },
    { q: "Do you catch up inside my own QuickBooks file?", a: "Yes. Your operator works as an authorized accountant-user inside <strong>your own QuickBooks file</strong>, backfilling the missing periods from bank, credit-card, and payroll statements. Your data stays yours and the audit trail is visible to you." },
    { q: "How is the price actually calculated?", a: "<strong>Per month of backlog.</strong> A 12-month standard catch-up at $400/mo is a $4,800 fixed fee. Rates run roughly $300–$650/mo of backlog by complexity; typical total engagements land between <strong>$2,000 and $20,000+</strong>." },
    { q: "What happens the moment catch-up is finished?", a: "You have current, CPA-ready books and a clean baseline. Continue with the <strong>same named operator</strong> on monthly bookkeeping to stay current, or hand the file to your existing accountant. No lock-in." },
  ],
  deliverables: [
    { num: "01", name: "Missed transaction entry", body: "Every transaction for the backlog period entered from bank, credit-card, and payroll statements. No gaps left in the file." },
    { num: "02", name: "Period-by-period reconciliation", body: "Each prior period reconciled against actual statements, month by month, account by account." },
    { num: "03", name: "Payroll & sales tax verification", body: "Payroll liabilities reconciled to filed returns. Sales-tax accruals verified across multi-state filings if applicable." },
    { num: "04", name: "Categorization at entry", body: "Transactions categorized correctly as they’re entered. Bank rules configured to prevent backlog regression." },
    { num: "05", name: "Current-month statements", body: "Reconstructed P&L, balance sheet, and cash flow through the current month, suitable for tax filing or lender review." },
    { num: "06", name: "Handoff documentation", body: "Written summary of what was caught up, periods covered, and recommendations for staying current going forward." },
  ],
  process: [
    { num: "01", name: "Backlog Diagnostic", body: "A 30-minute call. The operator quantifies the backlog — months behind, transactions outstanding, accounts to reconcile. Written fixed-fee scope within 3 business days.", when: "Typical: 3 business days" },
    { num: "02", name: "Transaction Entry & Reconciliation", body: "Missed transactions entered. Each period reconciled. Payroll and sales tax verified. The work happens here.", when: "Typical: 2–8 weeks" },
    { num: "03", name: "Statements Through Current Month", body: "Reconstructed financial statements produced. Platform-level quality review before delivery.", when: "Typical: 3–5 business days" },
    { num: "04", name: "Transition to Ongoing", body: "Catch-up delivered. Continue with the same operator on monthly bookkeeping, or hand off to your existing accountant.", when: "Optional: monthly engagement" },
  ],
  // "Which one do you actually need?" — catch-up vs cleanup decision (catch-up = favorable column)
  decide: [
    { dim: "Starting state", us: "Books behind but structured correctly", other: "Books messy, miscategorized, or wrong" },
    { dim: "Primary work", us: "Enter missed transactions, reconcile periods", other: "Correct errors, fix categorization, rebuild" },
    { dim: "Typical timeline", us: "2–10 weeks", other: "2–8 weeks (more for multi-year)" },
    { dim: "Typical pricing", us: "$300–$500+ per month of backlog", other: "$1,500–$15,000+ fixed scope" },
    { dim: "Often paired with", us: "Transition to monthly", other: "Catch-up + transition to monthly" },
  ],
  tiers: [
    { name: "Short catch-up", price: "$300/mo", per: " of backlog", forWhom: "3–6 months behind, small business, simple payroll or none.", bullets: ["Missed transactions entered", "Each period reconciled", "Statements through current month", "Handoff documentation"], cta: "Scope a short catch-up", note: "" },
    { name: "Standard catch-up", price: "$350–$450/mo", per: " of backlog", forWhom: "12–24 months behind, payroll, multiple bank and credit accounts, sales tax.", bullets: ["Full backlog entry & reconciliation", "Payroll & sales tax verification", "Bank rules & categorization", "Statements through current month", "CPA-ready output"], cta: "Scope a standard catch-up", note: "Most common" },
    { name: "Multi-year catch-up", price: "$450–$650/mo", per: " of backlog", forWhom: "2+ years behind, multi-entity, inventory, multi-state sales tax, complex payroll.", bullets: ["Multi-year historical entry", "Multi-entity reconciliation", "Inventory & COGS verification", "Multi-state tax accruals", "Statement set per year"], cta: "Scope a multi-year catch-up", note: "" },
  ],
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review on every engagement" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  nextSteps: [
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "If the books are messy or wrong (not just behind), cleanup is the deeper engagement. Often paired with catch-up." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "After catch-up, ongoing monthly bookkeeping keeps the books current. Same operator continues seamlessly." },
    { title: "Multi-year historical cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "3+ years of backlog combined with errors. Methodical reconstruction at scale." },
    { title: "Payroll management", href: "/accounting/payroll-management/?intent=payroll", body: "If payroll caused the backlog, we can take payroll management on going forward as part of monthly." },
  ],
  // de-dup 2026-06-25: override the dir-data generic 11-FAQ block (it lives on
  // the /accounting/bookkeeping/ hub, which owns it) so this page ships ONLY its
  // 7 page-specific questions. `override:` = eleventy array-replace, not concat.
  "override:faq": [
    { q: "What is catch-up bookkeeping?", a: "Catch-up bookkeeping is a project-based engagement that brings backlogged books current. It includes entering missed transactions, completing bank and credit-card reconciliations for prior periods, verifying payroll and sales tax entries, and producing reliable financial statements through the current month." },
    { q: "How long does catch-up bookkeeping take?", a: "Most catch-up engagements take 2 to 10 weeks. A 3-to-6-month backlog typically takes 2–3 weeks. A 12-to-24-month backlog takes 4–6 weeks. Multi-year catch-ups can take 8–10 weeks depending on volume and complexity." },
    { q: "How much does catch-up bookkeeping cost?", a: "Catch-up is priced per month of backlog and complexity. Typical pricing ranges from $300 per month of backlog for small businesses to $500+ per month for businesses with payroll, inventory, or multi-state sales tax. A 12-month standard catch-up at $400/mo is a $4,800 fixed fee. Every engagement is fixed-fee against a written scope." },
    { q: "What is the difference between catch-up and cleanup bookkeeping?", a: "Catch-up brings behind-but-structured books up to date — entering missed transactions, completing reconciliations through the current month. Cleanup is deeper — it corrects errors, fixes categorization, and reconstructs accurate records from a messy state. Many engagements combine both." },
    { q: "Can I catch up my books before tax season?", a: "Yes. Pre-tax-season catch-up is one of the most common engagements. Book a discovery call (or call <a href=\"tel:+18777515575\">(877) 751-5575</a>) by early February for most single-year catch-ups to complete in time for March 15 or April 15 deadlines. Multi-year catch-ups may require an extension." },
    { q: "Do I need to catch up before switching to monthly bookkeeping?", a: "Yes. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">Monthly bookkeeping</a> starts from a known-current state. Catch-up brings your books to that state. Most clients transition directly from catch-up to monthly with the same operator." },
    { q: "Who actually performs the catch-up work?", a: "A vetted local TechBrot operator — an independent accounting practice running under TechBrot’s brand, standards, and infrastructure. Every operator is a Certified QuickBooks ProAdvisor, credentialed, insured, and onboarded against a defined quality standard." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/bookkeeping/catch-up-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#catch-up-bookkeeping-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Bookkeeping","item":"https://techbrot.com/accounting/bookkeeping/"},
          {"@type":"ListItem","position":4,"name":"Catch-up bookkeeping","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Catch-up bookkeeping services","serviceType":"Project-based bookkeeping backlog catch-up","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Catch-up engagement tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+stripTags(t.per)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From first call to current books","description":"How a TechBrot catch-up bookkeeping engagement runs, from backlog diagnostic to transition.","step":data.process.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What catch-up bookkeeping delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
