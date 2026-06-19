/* /accounting/industries/ hub (migration round). Sources: FROZEN contract
 * contract-acct-ind-hub.txt (25 headings, 5 FAQ — the ONLY heading/FAQ
 * authority) + accounting/industries/index.html (BODY PROSE only). t-hub
 * (dark hero + motif). Equity carried VERBATIM: H1, the "Industry accounting,
 * plainly" definition, quick-5 (in five questions), the 6 deep-dive industry
 * cards under "Where we go deep." (ItemList → real baseline industry URLs),
 * the "Generic bookkeeping misses the number..." mission block, "We work
 * across these too." overflow grid, 5 FAQ, "Reviewed by the ProAdvisor team."
 * review, 4 "Related services." cards. Footer chrome (Accounting/QuickBooks/
 * Company/Network) NOT rendered — global chrome owns it. "The monthly brief."
 * newsletter DROPPED. Content-to-goal: each deep-dive card carries its genuine
 * industry angle (the number that runs it) + routes to its real page; one
 * appended FAQ (#6, FLAGGED) on the cleanup starting-point — real enrichment.
 * Authorship firm-level (ProAdvisor team); founder schema-only; 2 Clutch not
 * carried (reference doesn't carry reviews). CTA: HUB — Explore Services
 * primary + Book the discovery call (intent=accounting, matching accounting.njk
 * hub intent). Not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — verbatim from baseline ai-summary (distinct from the 5 FAQ)
  aiSummary: [
    { q: "Why does industry-specific accounting matter?", a: "Every industry breaks its books in a different place &mdash; netted payouts, job costing, trust accounts, prime cost, collections. Generic bookkeeping misses the number that actually runs each business. We configure QuickBooks and the books around how your industry operates." },
    { q: "What industries does TechBrot serve?", a: "Dedicated expertise for <strong>e-commerce, construction, real estate, legal, restaurants, and healthcare</strong>, plus professional services, SaaS, nonprofits, dental, manufacturing, trucking, retail, and more &mdash; all under one operating standard." },
    { q: "Do you serve industries not listed?", a: "Yes. Accurate books, QuickBooks setup, reconciliation, payroll, sales tax, and advisory apply to nearly any business. A 30-minute discovery call maps your specific needs." },
    { q: "Who delivers the work?", a: "A Certified QuickBooks ProAdvisor &mdash; directly or through a vetted local operator under TechBrot&rsquo;s standards &mdash; with one named point of accountability, in your own QuickBooks file." },
    { q: "What does it cost?", a: "A fixed monthly fee against a written scope &mdash; no hourly billing. Monthly bookkeeping typically $400&ndash;$2,500+/mo with complexity adjustments." },
  ],
  // "Where we go deep." — the 6 deep-dive industries, each h3 VERBATIM from the
  // contract; ItemList routes to these real baseline industry URLs.
  industries: [
    { area: "01 · E-commerce", name: "E-commerce accounting", body: "Multi-channel reconciliation, inventory and COGS, and multi-state sales-tax nexus for Shopify, Amazon, and Stripe sellers.", focus: "Netted payouts &amp; nexus", href: "/accounting/industries/ecommerce/" },
    { area: "02 · Construction", name: "Construction accounting", body: "Job costing, work-in-progress reporting, retainage, AIA progress billing, and certified payroll for contractors and trades.", focus: "Job costing &amp; WIP", href: "/accounting/industries/construction/" },
    { area: "03 · Real estate", name: "Real estate accounting", body: "Per-property and per-unit books, security-deposit and owner-fund handling, depreciation, and property-software reconciliation.", focus: "Per-property profit", href: "/accounting/industries/real-estate/" },
    { area: "04 · Legal", name: "Law firm accounting", body: "IOLTA and client trust accounting, three-way reconciliation, earned-vs-unearned retainers, and matter-level books.", focus: "Trust reconciliation", href: "/accounting/industries/legal/" },
    { area: "05 · Restaurant", name: "Restaurant accounting", body: "Daily POS reconciliation, prime cost and COGS, tip and payroll handling, sales tax, and multi-location books.", focus: "Prime cost", href: "/accounting/industries/restaurant/" },
    { area: "06 · Healthcare", name: "Healthcare accounting", body: "Insurance revenue reconciliation, billed-vs-collected tracking, per-provider books, payroll, and patient refunds.", focus: "Billed vs collected", href: "/accounting/industries/healthcare/" },
  ],
  // "We work across these too." — overflow industries, rendered as a vs-table
  // (NEVER cards): the industry, the number that runs it, its real page.
  moreCols: ["What the books turn on", "Industry page"],
  more: [
    { dim: "Professional services", turns: "Utilization &amp; project margin", page: "Professional services", href: "/accounting/industries/professional-services/" },
    { dim: "SaaS &amp; software", turns: "MRR, deferred revenue &amp; churn", page: "SaaS", href: "/accounting/industries/saas/" },
    { dim: "Nonprofit", turns: "Fund &amp; grant restrictions", page: "Nonprofit", href: "/accounting/industries/nonprofit/" },
    { dim: "Dental", turns: "Production vs collection", page: "Dental", href: "/accounting/industries/dental/" },
    { dim: "Manufacturing", turns: "Inventory &amp; cost of goods", page: "Manufacturing", href: "/accounting/industries/manufacturing/" },
    { dim: "Trucking &amp; logistics", turns: "Cost per mile &amp; settlements", page: "Trucking", href: "/accounting/industries/trucking/" },
    { dim: "Retail", turns: "Margin, shrink &amp; sales tax", page: "Retail", href: "/accounting/industries/retail/" },
    { dim: "Agencies", turns: "Billable hours &amp; pass-throughs", page: "Agency", href: "/accounting/industries/agency/" },
    { dim: "Franchise", turns: "Royalties &amp; multi-unit rollups", page: "Franchise", href: "/accounting/industries/franchise/" },
    { dim: "Home services", turns: "Job profitability &amp; crews", page: "Home services", href: "/accounting/industries/home-services/" },
    { dim: "Auto repair", turns: "Parts, labor &amp; RO margin", page: "Auto repair", href: "/accounting/industries/auto-repair/" },
    { dim: "Fitness &amp; wellness", turns: "Memberships &amp; deferred revenue", page: "Fitness", href: "/accounting/industries/fitness/" },
    { dim: "Landscaping", turns: "Crew &amp; equipment job costing", page: "Landscaping", href: "/accounting/industries/landscaping/" },
    { dim: "Property management", turns: "Trust/deposit ledgers &amp; owner statements", page: "Property management", href: "/accounting/industries/property-management/" },
    { dim: "Short-term rentals", turns: "Per-listing P&amp;L &amp; platform payouts", page: "Short-term rentals", href: "/accounting/industries/short-term-rentals/" },
    { dim: "Amazon sellers", turns: "Settlement reconciliation &amp; FBA COGS", page: "Amazon sellers", href: "/accounting/industries/amazon-sellers/" },
    { dim: "Shopify sellers", turns: "Payout reconciliation &amp; sales tax", page: "Shopify sellers", href: "/accounting/industries/shopify-sellers/" },
    { dim: "Law firm trust / IOLTA", turns: "Three-way trust reconciliation", page: "Law firm trust accounting", href: "/accounting/industries/law-firm-trust-accounting/" },
    { dim: "Specialty trades", turns: "Per-ticket margin &amp; service agreements", page: "Specialty trades", href: "/accounting/industries/specialty-trades/" },
  ],
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll · verifiable on Intuit&rsquo;s directory" },
    { value: "Scope", label: "Industry-specific bookkeeping, QuickBooks setup, payroll, sales tax, advisory · income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work · delivered in your own QuickBooks file" },
    { value: "Independence", label: "Not affiliated with Intuit Inc. · QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // "Related services." — 4 cards, h3 names VERBATIM from contract
  related: [
    { title: "Service catalog", href: "/accounting/services/?intent=accounting", body: "Every engagement type with scope, pricing, and the decision framework." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "The usual starting point for a messy, industry-specific file." },
    { title: "Fractional CFO &amp; advisory", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "Turn clean industry books into the decisions that drive growth." },
    { title: "Find an accountant", href: "/find-an-accountant/", body: "Industry expertise with state-by-state operational depth." },
  ],
  // 5 contract FAQ (verbatim Q + preserved A) + ONE appended industries-coverage
  // FAQ (#6, FLAGGED) as content-to-goal enrichment, mirroring the baseline's
  // own 6th HTML FAQ on the cleanup starting point.
  faq: [
    { q: "Why does industry-specific accounting matter?", a: "Every industry breaks its books in a different place. E-commerce nets payouts and triggers sales-tax nexus, construction needs job costing and WIP, real estate tracks per-property and security deposits, law firms run trust accounting, restaurants live on prime cost, and healthcare collects far less than it bills. Generic bookkeeping that treats every business the same misses the number that actually runs each one. TechBrot configures QuickBooks and the books around how your industry operates." },
    { q: "What industries does TechBrot serve?", a: "TechBrot serves U.S. small and mid-sized businesses across many industries, with dedicated expertise pages for e-commerce, construction, real estate, legal, restaurants, and healthcare, plus professional services, SaaS, nonprofits, dental, manufacturing, trucking, retail, and more. The same operating standard and Certified ProAdvisor delivery applies across all of them." },
    { q: "Do you serve industries not listed here?", a: "Yes. The underlying work &mdash; accurate books, correct QuickBooks setup, reconciliation, payroll, sales tax, and advisory &mdash; applies to nearly any business. If your industry isn&rsquo;t listed, a 30-minute discovery call maps your specific accounting needs and how we&rsquo;d handle them." },
    { q: "Who delivers industry accounting engagements?", a: "Every engagement is delivered by a Certified QuickBooks ProAdvisor &mdash; either directly by TechBrot&rsquo;s lead practice or by a vetted local operator working under TechBrot&rsquo;s brand, standards, and platform &mdash; with one named point of accountability and work done in your own QuickBooks file." },
    { q: "What does industry-specific accounting cost?", a: "Pricing depends on your industry, transaction volume, complexity, and the services in scope, and is always quoted as a fixed monthly fee against a written scope with no hourly billing. Monthly bookkeeping typically ranges from $400 to $2,500+ per month with complexity adjustments. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "My industry books are already a mess. Where do we start?", a: "With a cleanup. We reclassify what&rsquo;s mis-booked, rebuild the industry-specific structure your books need, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping. Most clients come to us mid-mess; it&rsquo;s the normal starting point, and it&rsquo;s how the industry-specific structure gets built in correctly the first time." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage","CollectionPage"],"@id":url+"#webpage","url":url,"name":"Industry-Specific Accounting & QuickBooks Bookkeeping","description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-ind-hub-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Industry-Specific Accounting & Bookkeeping","serviceType":"Industry-specialized accounting and QuickBooks bookkeeping","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses across industries"},"provider":{"@id":"https://techbrot.com/#organization"}},
        {"@type":"ItemList","@id":url+"#industry-list","name":"Industries TechBrot serves","itemListElement":data.industries.map(function(s,i){return {"@type":"ListItem","position":i+1,"name":stripTags(s.name),"url":"https://techbrot.com"+s.href};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
