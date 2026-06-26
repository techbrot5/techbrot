/* /accounting/ hub (round-16 elevation). Sources: baseline.json (/accounting/
 * — 30 headings, 5 FAQ) + accounting/index.html (full copy). t-hub (dark hero
 * + motif). Equity carried: H1, summary tldr, the 6-area service layer with
 * fee ranges, the bookkeeping-vs-accounting distinction, the two delivery
 * modes, the four differentiators, the do/don't/coordinate scope, 5 FAQ.
 * Citable: the three fixed-fee ENGAGEMENT SHAPES (recurring monthly / fixed-fee
 * project / senior retainer) + canonical price ranges. quick-5 additive, zero
 * overlap with the FAQ. Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();}
module.exports = {
  services: [
    { area: "01", name: "Bookkeeping", body: "Monthly, cleanup, and catch-up bookkeeping. Bank reconciliation, transaction categorization, monthly financial statements, CPA-ready year-end handoff.", fee: "$400&ndash;$20,000+", eng: "Recurring + one-time", cta: "Bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", intent: "monthly" },
    { area: "02", name: "QuickBooks Services", body: "Setup, cleanup, migration, and ongoing expertise across QBO Level&nbsp;2, Desktop, Enterprise, and Payroll. Independent ProAdvisor firm.", fee: "$750&ndash;$15,000+", eng: "One-time or recurring", cta: "QuickBooks services", href: "/quickbooks/", intent: "quickbooks" },
    { area: "03", name: "Payroll Management", body: "Multi-state payroll with state and local jurisdiction tax. Quarterly 941, year-end W-2/1099, multi-state employee handling.", fee: "$150&ndash;$800+/mo", eng: "Recurring monthly", cta: "Payroll management", href: "/accounting/payroll-management/", intent: "payroll" },
    { area: "04", name: "Sales Tax Compliance", body: "Multi-state nexus, post-Wayfair compliance, exemption certificates, monthly filings, audit support. QuickBooks-integrated.", fee: "$250&ndash;$1,500+/mo", eng: "Recurring + setup", cta: "Sales tax compliance", href: "/accounting/sales-tax-compliance/", intent: "sales-tax" },
    { area: "05", name: "Fractional CFO", body: "Strategic finance for $1M&ndash;$50M businesses. Forecasting, board reporting, fundraising support, capital-event readiness. By application.", fee: "$3,000&ndash;$8,000+/mo", eng: "Monthly, by application", cta: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", intent: "fractional-cfo" },
    { area: "06", name: "Full Service Catalog", body: "All seven engagement types with the decision framework, pricing-at-a-glance, and engagement standards in one view.", fee: "All service tracks", eng: "Choosing your engagement", cta: "Service catalog", href: "/accounting/services/", intent: "" },
  ],
  // two delivery modes rendered as a decision comparison (vs-table)
  modesCompare: {
    cols: ["Direct — lead practice", "Vetted local operator"],
    rows: [
      { dim: "Best when", us: "Most engagements; QuickBooks-heavy work", other: "In-state presence or industry specialization matters" },
      { dim: "Coverage", us: "All 50 states, remote", other: "Operator&rsquo;s state &amp; time zone" },
      { dim: "Delivered by", us: "TechBrot&rsquo;s Certified ProAdvisors", other: "Vetted independent practice, same standards" },
      { dim: "Continuity", us: "Named-ProAdvisor continuity", other: "Platform continuity + ongoing quality review" },
      { dim: "CPA coordination", us: "Direct with your CPA", other: "In-state CPA coordination" },
    ],
  },
  differentiators: [
    { name: "Certified ProAdvisor depth", body: "Active Intuit certifications across all four core QuickBooks platforms — QBO Level 2, Desktop, Enterprise, Payroll — plus bookkeeping certification. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { name: "Fixed-fee, written scope", body: "Every engagement scoped and priced in writing before work begins. No hourly billing. No scope creep. No surprise invoices." },
    { name: "CPA-ready, always", body: "Books delivered CPA-ready. Year-end handoff to your tax professional included in recurring engagements — no rework, no reconciliation gaps." },
    { name: "Honest scope", body: "We deliver operational accounting and coordinate with your CPA for tax. We say what we don&rsquo;t do as clearly as what we do." },
  ],
  doDont: [
    { name: "We do", body: "Bookkeeping (monthly, cleanup, catch-up). QuickBooks setup, cleanup, migration. Payroll management. Multi-state sales tax compliance. Fractional CFO. CPA-ready year-end handoff. State and local jurisdiction tax operational configuration." },
    { name: "We don&rsquo;t", body: "File federal or state tax returns. Represent clients before the IRS or state agencies. Provide Intuit&rsquo;s software-level technical support. Operate as a marketplace listing every accountant." },
    { name: "We coordinate with", body: "Your existing CPA or EA for tax filings. Your tax counsel for audit defense. Sales tax counsel for state-specific tax-position work. We refer to licensed practitioners when scope requires it." },
  ],
  aiSummary: [
    { q: "Is TechBrot&rsquo;s accounting fixed-fee or hourly?", a: "<strong>Fixed-fee, always</strong> — every engagement is scoped and priced in writing before any work begins. No hourly billing, no scope creep, no surprise invoices. Scope changes are re-quoted and re-approved in writing." },
    { q: "Who actually delivers the accounting work?", a: "<strong>Certified Intuit QuickBooks ProAdvisors</strong> — active across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll, plus bookkeeping certification. Delivered directly by the lead practice or a vetted local operator under the same standards." },
    { q: "What engagement shapes does TechBrot offer?", a: "<strong>Three fixed-fee shapes</strong>: a recurring monthly retainer (bookkeeping, payroll, sales tax), a one-time fixed-fee project (cleanup, catch-up, QuickBooks setup/migration), and a senior retainer by application (fractional CFO). Every shape is a written scope before work begins." },
    { q: "Does TechBrot cover my state?", a: "<strong>All 50 states</strong>, delivered remotely with encrypted access. Where in-state presence or industry specialization matters, the engagement routes to a vetted local practice with state-specific operational depth, under the same platform standards." },
    { q: "How fast do I get a quote?", a: "A <strong>written fixed-fee scope within 3 business days</strong> of a free 30-minute discovery call — the exact engagement and the exact fee, in writing, before you commit to anything." },
  ],
  faq: [
    { q: "What&rsquo;s the difference between bookkeeping and accounting?", a: "Bookkeeping is the operational recording of transactions — categorizing, reconciling, monthly statements. Accounting is the broader discipline including bookkeeping plus analysis, reporting, tax preparation, and strategy. TechBrot delivers the operational layer (bookkeeping, QuickBooks, payroll, sales tax) plus fractional CFO strategy; your CPA handles tax filing." },
    { q: "What accounting services does TechBrot offer?", a: "Monthly bookkeeping, cleanup bookkeeping, catch-up bookkeeping, QuickBooks setup/cleanup/migration, payroll management, multi-state sales tax compliance, and fractional CFO. All fixed-fee, written scope, Certified ProAdvisor delivery." },
    { q: "Does TechBrot replace my accountant or CPA?", a: "No. TechBrot delivers operational accounting and CPA-ready books; your CPA or EA handles tax filing, audit, and IRS representation. Most businesses use both. We coordinate with your CPA directly, and refer you to one if you don&rsquo;t have one." },
    { q: "How much do TechBrot&rsquo;s accounting services cost?", a: "Fixed-fee, no hourly billing. Monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; fractional CFO $3,000&ndash;$8,000+/mo. The discovery call is free." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and use QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Do you work inside my existing QuickBooks file?", a: "Yes. TechBrot works as an authorized accountant-user inside your own QuickBooks file &mdash; your data stays yours, the audit trail is visible to you, and access is revocable at any time. No forced migration to proprietary software, no parallel system." },
    { q: "What size businesses does TechBrot work with?", a: "U.S. small and mid-sized businesses. Bookkeeping, QuickBooks, payroll, and sales tax engagements suit owner-operated businesses through established mid-market firms; fractional CFO is scoped for roughly $1M&ndash;$50M businesses and is accepted by application." },
    { q: "Do I need an accountant if I already have a bookkeeper?", a: "Often yes &mdash; they do different jobs. A bookkeeper records and reconciles transactions; accounting adds analysis, reporting, and getting the books ready for tax. Many owners keep both: solid <a href=\"/accounting/bookkeeping/\">bookkeeping</a> for the day-to-day, plus accounting and advisory for the bigger picture. TechBrot delivers both the operational books and fractional-CFO-level advisory, then coordinates with your CPA for filing." },
    { q: "When should I hire an accountant for my business?", a: "When the bookkeeping starts eating your time, when you can&rsquo;t tell which parts of the business actually make money, or when growth, payroll, financing, or multi-state sales tax adds complexity a spreadsheet can&rsquo;t track. A simple test: if money decisions feel like guesses, you&rsquo;re past due. TechBrot can start with monthly bookkeeping or a cleanup and add <a href=\"/accounting/advisory/\">advisory</a> as the business grows." },
    { q: "How do I get started with TechBrot, and how long does it take?", a: "Start with a free 30-minute discovery call &mdash; call (877) 751-5575 or book online. We map your current books, scope the work, and send a written fixed-fee quote, usually within 3 business days; once you approve it we get authorized-user access to your QuickBooks file and begin. Recurring <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> starts at $400/mo." },
  ],
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage","CollectionPage"],"@id":"https://techbrot.com/accounting/#webpage","url":"https://techbrot.com/accounting/","name":"Accounting & Bookkeeping for U.S. Small Businesses","description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#accounting-tldr-body"]}},
        {"@type":"BreadcrumbList","@id":"https://techbrot.com/accounting/#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"}]},
        {"@type":"Service","@id":"https://techbrot.com/accounting/#service","name":"Operational accounting & bookkeeping services","serviceType":"Bookkeeping, QuickBooks, payroll, sales tax, and fractional CFO","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"TechBrot accounting services","itemListElement":data.services.filter(function(s){return s.area!=="06";}).map(function(s){return {"@type":"Offer","name":stripTags(s.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(s.fee)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"FAQPage","@id":"https://techbrot.com/accounting/#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
