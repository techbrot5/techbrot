/* /accounting/bookkeeping/ HUB (MIGRATION-PROTOCOL). FROZEN CONTRACT:
 * contract-acct-bk-hub.txt — 30 headings + 11 FAQ (the ONLY authority for
 * headings + FAQ). Old accounting/bookkeeping/index.html used for BODY PROSE
 * only. t-hub tier (dark hero + motif), cobalt vocabulary matched to
 * src/accounting.njk + src/accounting/advisory.njk. ItemList routes to the
 * BUILT baseline children (monthly / cleanup / catch-up) — the engagement
 * router. FAQ is 11 contract Q/A, verbatim, flat, append-only; FAQPage built
 * from the same array. Authorship firm-level; founder (David Westgate) in
 * reviewedBy @id only. Independent ProAdvisor firm — not affiliated with
 * Intuit Inc.
 *
 * NOTE ON "Multi-year historical cleanup": its H3 is a FROZEN contract heading
 * and is rendered, but /accounting/bookkeeping/historical-cleanup/ is NOT a
 * baseline URL (no folder; not in the routing list) — so that engagement card
 * carries no dead link; it routes to the diagnostic call instead. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}
module.exports = {
  // ── ENGAGEMENT ROUTER — "Four engagements. Pick the one that fits." (4 tiles)
  // The first three route to BUILT baseline children. Historical cleanup has no
  // baseline URL, so it routes to the diagnostic (no dead link).
  engagements: [
    {
      area: "01 · Recurring", name: "Monthly bookkeeping",
      body: "Ongoing monthly close, real reconciliations, financial package by the 15th, named operator &mdash; the same shape every month. For books that are current and accurate and need a partner to keep them that way.",
      forWho: "Businesses ready for ongoing partnership", cadence: "Monthly, recurring", fee: "$400&ndash;$2,500+/month",
      href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", cta: "Explore monthly bookkeeping",
    },
    {
      area: "02 · Project", name: "Bookkeeping cleanup",
      body: "Reconstruct accurate books from a messy state &mdash; fix categorizations, run real bank and credit-card reconciliations, correct prior-period errors, produce CPA-ready statements. The most common starting engagement.",
      forWho: "Messy, miscategorized, or unreconciled books", cadence: "2&ndash;8 weeks, fixed fee", fee: "$1,500&ndash;$15,000+ fixed fee",
      href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", cta: "Explore bookkeeping cleanup",
    },
    {
      area: "03 · Project", name: "Catch-up bookkeeping",
      body: "Bring backlogged books current &mdash; missed transactions entered, every prior period reconciled against actual statements, statements rebuilt through the current month. For books that are behind but otherwise structured correctly.",
      forWho: "Behind-but-structured books, 3+ months", cadence: "2&ndash;10 weeks, fixed fee", fee: "$300&ndash;$500+/month of backlog",
      href: "/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up", cta: "Explore catch-up bookkeeping",
    },
    {
      area: "04 · Specialized", name: "Multi-year historical cleanup",
      body: "3+ years of books reconstructed at scale &mdash; for business sales, SBA applications, IRS issues, or complex tax filings that require deep, accurate history. Scoped per year against a written fixed fee.",
      forWho: "Multi-year backlog, often with errors", cadence: "6&ndash;16 weeks, fixed scope", fee: "$8,000&ndash;$30,000+ fixed scope",
      href: "/contact/?intent=bookkeeping", cta: "Scope a historical cleanup",
    },
  ],
  // ── "Match your situation to the right engagement." (decision matrix → vs-table)
  routing: {
    cols: ["Start with", "Then"],
    rows: [
      { dim: "Books are current and accurate; you need ongoing partnership", start: "<a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">Monthly bookkeeping</a>", then: "Continue indefinitely with the same operator" },
      { dim: "Behind on books, but they&rsquo;re otherwise structured correctly", start: "<a href=\"/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up\">Catch-up bookkeeping</a>", then: "Transition to monthly with the same operator" },
      { dim: "Messy books &mdash; miscategorized or unreconciled periods", start: "<a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">Bookkeeping cleanup</a>", then: "Transition to monthly with the same operator" },
      { dim: "Behind AND messy &mdash; both at once", start: "Cleanup + catch-up, combined", then: "Transition to monthly with the same operator" },
      { dim: "3+ years of books to rebuild for a sale, lender, or the IRS", start: "Multi-year historical cleanup", then: "Optional transition to monthly" },
      { dim: "Not sure which fits", start: "<a href=\"/contact/?intent=bookkeeping\">Book the diagnostic call</a>", then: "Written fixed-fee scope within 3 business days" },
    ],
  },
  // ── "TechBrot bookkeeping, in five questions." (quick-5; additive, zero
  //    overlap with the 11 FAQ below)
  aiSummary: [
    { q: "What bookkeeping services does TechBrot offer?", a: "Four engagement types: <strong>monthly bookkeeping</strong> (ongoing recurring close), <strong>bookkeeping cleanup</strong> (fixing messy or inaccurate books), <strong>catch-up bookkeeping</strong> (bringing backlogged books current), and <strong>multi-year historical cleanup</strong> (rebuilding 3+ years). Every engagement is fixed-fee against a written scope, delivered by a named local Certified QuickBooks ProAdvisor." },
    { q: "Who is TechBrot bookkeeping for?", a: "U.S. small and mid-sized businesses that need a serious, accountable bookkeeping partner &mdash; e-commerce operators, real estate investors, construction firms, restaurants, professional services practices, SaaS startups, and any owner whose books need ongoing management, cleanup, or catch-up." },
    { q: "How much does TechBrot bookkeeping cost?", a: "Monthly bookkeeping: $400&ndash;$2,500+/month. Cleanup: $1,500&ndash;$15,000+ fixed fee. Catch-up: $300&ndash;$500+/month of backlog. Multi-year historical cleanup: $8,000&ndash;$30,000+ fixed scope. Pricing depends on transaction volume, accounts, payroll, sales tax, and complexity. <strong>Every engagement is fixed-fee</strong> &mdash; no hourly billing." },
    { q: "Who actually does the work?", a: "A <strong>vetted local TechBrot operator</strong> &mdash; an independent accounting practice running under TechBrot&rsquo;s brand, standards, and infrastructure. Every operator is a Certified QuickBooks ProAdvisor, credentialed, insured, and onboarded against a defined quality standard." },
    { q: "Does TechBrot use my existing QuickBooks file?", a: "Yes. Operators work in your existing QuickBooks file &mdash; Online, Desktop, Enterprise, or Payroll. <strong>No proprietary software, no forced migration. Your file, your data, your access.</strong> TechBrot is an independent Certified ProAdvisor firm and is not affiliated with Intuit Inc." },
  ],
  // ── "Operator accountability, platform standards." (6 → process-diagram)
  standards: [
    { name: "Named local operator", body: "You know exactly who is closing your books, how to reach them, and what credentials they hold &mdash; not a rotating offshore team or an anonymous queue." },
    { name: "Certified ProAdvisors", body: "Every operator is a Certified QuickBooks ProAdvisor across Online (Level&nbsp;2), Desktop, Enterprise, and Payroll. Real credentials, verifiable on Intuit&rsquo;s directory &mdash; not generic remote bookkeepers." },
    { name: "Fixed-fee scopes", body: "Every engagement is priced in writing before work begins. No hourly billing surprises, no scope creep, no surprise invoices." },
    { name: "Your QuickBooks file", body: "Operators work as an authorized accountant-user inside your existing QuickBooks file. No proprietary software, no forced migration, no vendor lock-in." },
    { name: "Platform quality review", body: "Every engagement is reviewed at the platform level against a defined operating standard. Quality is not self-policed by the individual operator." },
    { name: "Continuity guaranteed", body: "If the operator relationship ever needs to transition, the platform handles handoff without losing file context. You&rsquo;re never stuck with one bookkeeper." },
  ],
  // ── "Bookkeeping that understands your industry." (industry routing tiles)
  industries: [
    { label: "E-commerce", href: "/accounting/industries/ecommerce/" },
    { label: "Real Estate", href: "/accounting/industries/real-estate/" },
    { label: "Construction", href: "/accounting/industries/construction/" },
    { label: "Restaurants", href: "/accounting/industries/restaurant/" },
    { label: "Healthcare", href: "/accounting/industries/healthcare/" },
    { label: "Law Firms", href: "/accounting/industries/legal/" },
    { label: "SaaS", href: "/accounting/industries/saas/" },
    { label: "Professional Services", href: "/accounting/industries/professional-services/" },
    { label: "All Industries &rarr;", href: "/accounting/industries/" },
  ],
  // ── "A named, credentialed local operator." (operator credential rows)
  operator: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (Level&nbsp;2), Desktop, Enterprise, Payroll" },
    { label: "Vetting", detail: "Credentialed, insured, onboarded against a defined quality standard" },
    { label: "Accountability", detail: "Named operator, backed by platform-level quality review" },
    { label: "Independence", detail: "Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],
  // ── "Bookkeeping is often part of a larger engagement." (4 adjacent services)
  adjacent: [
    { name: "Payroll management", href: "/accounting/payroll-management/", body: "Payroll often layers into monthly bookkeeping &mdash; setup, processing, multi-state tax filing, and compliance, run inside the same engagement." },
    { name: "Sales tax compliance", href: "/accounting/sales-tax-compliance/", body: "Multi-state sales tax registration, filing, and post-Wayfair nexus advisory &mdash; a common add-on to monthly bookkeeping." },
    { name: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", body: "When monthly bookkeeping isn&rsquo;t enough &mdash; cash-flow planning, KPI reporting, and board-ready financials built on books that are already correct." },
    { name: "QuickBooks ProAdvisor help", href: "/quickbooks/help/", body: "Independent ProAdvisor help when QuickBooks itself is the problem &mdash; file issues, reconciliation problems, plan selection, and migration." },
  ],
  // ── 11 FAQ — VERBATIM from contract-acct-bk-hub.txt (append-only).
  //    Q1 is the lead QAPage entity; all 11 feed the FAQPage node.
  faq: [
    { q: "What bookkeeping services does TechBrot offer?", a: "TechBrot offers four bookkeeping engagement types: monthly bookkeeping (ongoing recurring close), bookkeeping cleanup (fixing messy or inaccurate books), catch-up bookkeeping (bringing backlogged books current), and multi-year historical cleanup (rebuilding 3+ years of books). Every engagement is fixed-fee against a written scope, delivered by a named local Certified QuickBooks ProAdvisor." },
    { q: "Who is TechBrot bookkeeping for?", a: "U.S. small and mid-sized businesses that need a serious, accountable bookkeeping partner &mdash; e-commerce operators, real estate investors, construction firms, restaurants, professional services practices, SaaS startups, and any owner whose books need ongoing management, cleanup, or catch-up." },
    { q: "How much does TechBrot bookkeeping cost?", a: "Monthly bookkeeping: $400&ndash;$2,500+/month. Cleanup engagements: $1,500&ndash;$15,000+ fixed fee. Catch-up engagements: $300&ndash;$500+/month of backlog. Multi-year historical cleanup: $8,000&ndash;$30,000+ fixed scope. Pricing depends on transaction volume, accounts, payroll, sales tax, and complexity. Every engagement is fixed-fee." },
    { q: "Who actually does the work?", a: "A vetted local TechBrot operator &mdash; an independent accounting practice running under TechBrot&rsquo;s brand, standards, and infrastructure. Every operator is a Certified QuickBooks ProAdvisor, credentialed, insured, and onboarded against a defined quality standard." },
    { q: "Does TechBrot use my existing QuickBooks file?", a: "Yes. TechBrot operators work in your existing QuickBooks file &mdash; Online, Desktop, Enterprise, or Payroll. No proprietary software, no forced migration. Your file, your data, your access. TechBrot is an independent Certified ProAdvisor firm and is not affiliated with Intuit Inc." },
    { q: "What is bookkeeping, and what does a bookkeeper actually do?", a: "Bookkeeping is the systematic recording, categorization, and reconciliation of every financial transaction a business makes. A professional bookkeeper enters transactions, categorizes them to the correct accounts, reconciles bank and credit card statements against the books, verifies payroll and sales tax entries, and produces reliable financial statements &mdash; profit and loss, balance sheet, and cash flow. Bookkeeping records and categorizes transactions; accounting interprets them &mdash; producing tax strategy, business advisory, and audit-ready financials. QuickBooks is the software; a bookkeeper is the professional who uses it correctly. Most businesses that try to use QuickBooks without a bookkeeper end up needing cleanup within 12 to 18 months." },
    { q: "Which bookkeeping engagement is right for my business?", a: "It depends on the current state of your books. Monthly bookkeeping for books that are current and accurate &mdash; recurring engagement, named operator, monthly close, financial package by the 15th. Catch-up bookkeeping for books that are behind but otherwise structured correctly &mdash; brings backlog current then transitions to monthly. Bookkeeping cleanup for messy, miscategorized, or inaccurate books &mdash; reconstructs accurate books from a messy state then transitions to monthly. Multi-year historical cleanup for 3+ years behind, often required for business sales or SBA applications." },
    { q: "How much does bookkeeping cost?", a: "Bookkeeping cost depends on engagement type, transaction volume, accounts, payroll, sales tax, and complexity. Every TechBrot bookkeeping engagement is priced as a fixed fee against a written scope, no hourly billing. Monthly bookkeeping: $400-$700/month Essentials, $700-$1,400/month Standard, $1,400-$2,500+/month Complex. Cleanup: $1,500-$3,500 single-year, $3,500-$8,000 standard, $8,000-$15,000+ multi-year. Catch-up: $300-$500+ per month of backlog. Multi-year historical cleanup: $8,000-$30,000+ fixed scope." },
    { q: "How does TechBrot deliver bookkeeping differently?", a: "TechBrot delivers bookkeeping through a curated network of vetted local Certified QuickBooks ProAdvisors. Each operator runs an independent accounting practice under TechBrot&rsquo;s brand, standards, and infrastructure &mdash; not an anonymous offshore team and not a centralized remote subscription. Bench uses proprietary software and offshore teams; Pilot serves venture-backed startups with a centralized team; QuickBooks Live is Intuit&rsquo;s own service, scoped narrowly. TechBrot: independent local operators, your existing QuickBooks file, platform-level quality standards. If you need to transition operators, the platform handles handoff without losing file context." },
    { q: "What QuickBooks products does TechBrot work with?", a: "TechBrot operators are Certified ProAdvisors across the full QuickBooks stack: QuickBooks Online (Level 2), QuickBooks Desktop, QuickBooks Enterprise, and QuickBooks Payroll. Operators work in your existing QuickBooks file &mdash; no proprietary software, no forced migration. TechBrot engagements produce CPA-ready, lender-ready financial statements reconciled to source documents with documented adjustments. Many engagements are referred by CPAs." },
    { q: "How do I get started?", a: "Book a 30-minute diagnostic call. TechBrot reviews your file, determines which engagement fits, and produces a written fixed-fee scope within 3 business days. No pitch, no obligation. If TechBrot isn&rsquo;t the right fit, the team will say so." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/bookkeeping/";
      // ItemList routes to the BUILT baseline children (real URLs only).
      const children=[
        { url:"https://techbrot.com/accounting/bookkeeping/monthly-bookkeeping/", name:"Monthly Bookkeeping" },
        { url:"https://techbrot.com/accounting/bookkeeping/cleanup-bookkeeping/", name:"Bookkeeping Cleanup" },
        { url:"https://techbrot.com/accounting/bookkeeping/catch-up-bookkeeping/", name:"Catch-Up Bookkeeping" },
      ];
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage","CollectionPage"],"@id":url+"#webpage","url":url,"name":"Bookkeeping Services for U.S. Small Businesses","description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#bookkeeping-in-brief-text","#bookkeeping-ai-summary"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Bookkeeping","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Bookkeeping services","serviceType":"Monthly bookkeeping, bookkeeping cleanup, catch-up bookkeeping, multi-year historical cleanup","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"TechBrot bookkeeping services","itemListElement":data.engagements.map(function(e){return {"@type":"Offer","name":stripTags(e.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(e.fee)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"ItemList","@id":url+"#service-list","name":"Bookkeeping services offered by TechBrot","itemListOrder":"https://schema.org/ItemListOrderAscending","numberOfItems":children.length,"itemListElement":children.map(function(c,i){return {"@type":"ListItem","position":i+1,"url":c.url,"name":c.name};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"TechBrot bookkeeping — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
