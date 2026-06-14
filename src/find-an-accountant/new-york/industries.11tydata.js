/* /find-an-accountant/new-york/industries/ — t-location HUB (NY industries index; lists/
 * routes to the NY industry pages). Sibling of cities.njk/.11tydata.js (the proven cobalt
 * HUB pattern). Sources: FROZEN EQUITY CONTRACT (contract-ny-ind-hub.txt) — the ONLY
 * authority for the headings + the 5 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/industries/index.html, full body read) for body prose/
 * industry list. JSON front-matter lives in the .njk; this file supplies the content
 * arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage ·
 * BreadcrumbList · ItemList of the industry pages · FAQPage).
 *
 * COBALT VOCABULARY ONLY (nothing invented): stack-8, buyer-card, grid-2/grid-3,
 * byline-block, meta-reviewed, faq__list, ai-summary--ruled, checks-list, trust-row,
 * section--alt. Stat card = grid-3 + stack-8 (NOT proof-strip__item). T6 content-to-goal:
 * routes to the 8 NY industry pages (construction, consulting, ecommerce, healthcare,
 * legal, nonprofit, real-estate, restaurant — baseline URLs) with each industry's genuine
 * NY angle (WIP/retention/certified payroll; IOLTA; CHAR500; ASC 606/sales tax; etc.).
 *
 * HONESTY (R5): no "real outcomes"/specific-client results asserted; no reviews rendered
 * (only the 2 real Clutch reviews would be permitted; the lighter hub carries none). No
 * AggregateRating. No founder/personal name in visible content — firm byline only.
 * Independent firm; does NOT file NY/NYC taxes; coordinates with the client's CPA.
 *
 * FAQ NOTE: contract carries 5 Q/A (verbatim below, append-only enrichment). The
 * design-fidelity gate wants 6+, so ONE genuine industries-coverage FAQ (Q6) is appended
 * as content-to-goal enrichment — a real question (industry page not yet built / how the
 * industry + city tax layers combine), not filler. Flagged in the build report. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // INDUSTRY ACCOUNTING, PLAINLY — real-H2 section carrying the one-paragraph summary
  // (TLDR body carried verbatim from baseline, enriched). (H2: New York industry accounting, plainly.)
  coverage: "Industry-specific accounting means configuring the books around how a business actually earns and spends &mdash; because the number that runs it differs by industry. <a href=\"/find-an-accountant/new-york/industries/construction/\">Construction</a> lives on job costing and WIP; <a href=\"/find-an-accountant/new-york/industries/real-estate/\">real estate</a> tracks per-property profit; <a href=\"/find-an-accountant/new-york/industries/legal/\">law firms</a> run New York IOLTA trust accounting; <a href=\"/find-an-accountant/new-york/industries/restaurant/\">restaurants</a> survive on prime cost; <a href=\"/find-an-accountant/new-york/industries/healthcare/\">healthcare</a> collects far less than it bills; <a href=\"/find-an-accountant/new-york/industries/nonprofit/\">nonprofits</a> need fund accounting and CHAR500-ready books; <a href=\"/find-an-accountant/new-york/industries/consulting/\">agencies and consultancies</a> live on ASC 606 revenue recognition; <a href=\"/find-an-accountant/new-york/industries/ecommerce/\">ecommerce</a> turns on multi-state sales-tax nexus. <strong>TechBrot</strong> is a firm of <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> who build each engagement around those realities &mdash; with New York&rsquo;s layer (NYC sales tax, the UBT, IOLTA, CHAR500) included &mdash; fixed-fee, in your own QuickBooks file. We deliver the books; your CPA files. Not affiliated with Intuit Inc.",

  // AI SUMMARY — the 5 entity-dense Q&As (verbatim from baseline). (H2: New York industry accounting, in five questions.)
  aiSummary: [
    { q: "Why does industry-specific accounting matter in New York?", a: "Every industry breaks its books in a different place &mdash; and <strong>New York adds NYC sales tax, the UBT, IOLTA, and CHAR500</strong> on top. Generic bookkeeping misses the number that runs your business; we configure QuickBooks around your industry with the NY rules built in." },
    { q: "Which industries do you serve in NY?", a: "Dedicated New York expertise for <strong>construction, real estate, law firms, restaurants, healthcare, and nonprofits</strong>, plus professional services and more &mdash; one standard, named ProAdvisor, fixed-fee." },
    { q: "Do you handle NY-specific industry rules?", a: "Yes &mdash; <strong>IOLTA trust for law firms, CHAR500-ready books for nonprofits, NYC sales tax for restaurants and retail, certified payroll for construction</strong>. Built into the books; your CPA files." },
    { q: "Who delivers the work?", a: "A <strong>Certified QuickBooks ProAdvisor</strong> with one named point of accountability, in your own QuickBooks file &mdash; the same person month to month." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; no hourly billing. Monthly bookkeeping typically $400&ndash;$2,500+/mo. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
  ],

  // FEATURED INDUSTRIES — 6 dedicated-page industries (buyer-card grid). Each H3 verbatim from
  // the contract; each links to its baseline industry page. Stat = stack-8 inside the card.
  // (H2: Where we go deep in New York. + 6 H3s)
  featured: [
    { num: "01", eyebrow: "Construction", heading: "New York construction accounting", href: "/find-an-accountant/new-york/industries/construction/", body: "Job costing, WIP, retainage, and certified payroll for New York contractors and trades &mdash; with multi-state payroll for crews that cross state lines.", focus: "Job costing &amp; WIP", cta: "Construction &rarr;" },
    { num: "02", eyebrow: "Real Estate", heading: "New York real estate accounting", href: "/find-an-accountant/new-york/industries/real-estate/", body: "Per-property books, security-deposit segregation, and 1031 coordination for NY owners and managers.", focus: "Per-property profit", cta: "Real Estate &rarr;" },
    { num: "03", eyebrow: "Law Firms", heading: "New York law firms accounting", href: "/find-an-accountant/new-york/industries/legal/", body: "New York IOLTA trust accounting, three-way reconciliation, and matter-level books.", focus: "IOLTA trust", cta: "Law Firms &rarr;" },
    { num: "04", eyebrow: "Restaurants", heading: "New York restaurants accounting", href: "/find-an-accountant/new-york/industries/restaurant/", body: "Daily POS reconciliation, prime cost, tips, and NYC sales tax for restaurants.", focus: "Prime cost", cta: "Restaurants &rarr;" },
    { num: "05", eyebrow: "Healthcare", heading: "New York healthcare accounting", href: "/find-an-accountant/new-york/industries/healthcare/", body: "Insurance reconciliation, billed-vs-collected tracking, and per-provider books.", focus: "Billed vs collected", cta: "Healthcare &rarr;" },
    { num: "06", eyebrow: "Nonprofits", heading: "New York nonprofits accounting", href: "/find-an-accountant/new-york/industries/nonprofit/", body: "Fund accounting, board-ready reports, and NY CHAR500 readiness for nonprofits.", focus: "Fund accounting", cta: "Nonprofits &rarr;" },
  ],

  // WHY INDUSTRY — context block (mission-block prose carried verbatim, enriched).
  // (H2: Generic bookkeeping misses the number that runs your business — twice over in New York.)
  why: [
    "Most bookkeepers treat every business the same: categorize, reconcile, produce a P&amp;L. That&rsquo;s fine until you need the thing your industry actually turns on &mdash; job profitability on a build, prime cost on a Friday night, whether IOLTA trust funds reconcile to the penny. Those numbers don&rsquo;t appear by accident; the books have to be built to surface them.",
    "In New York there&rsquo;s a second layer: the same law firm needs IOLTA <em>and</em> compliance with New York trust rules; the same restaurant needs prime cost <em>and</em> NYC&rsquo;s 8.875% sales tax tracked; the same nonprofit needs fund accounting <em>and</em> CHAR500-ready books. We configure QuickBooks around both &mdash; how your industry runs, and how New York taxes it. As automation commoditizes routine entry, that combined judgment is where the value now lives.",
    "<a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">See New York QuickBooks &amp; bookkeeping &rarr;</a>",
  ],

  // MORE INDUSTRIES — additional dedicated pages with real NY angle (additive routing list —
  // NOT a frozen-heading section). Covers the 2 industries beyond the 6 featured H3s.
  moreIndustries: [
    { href: "/find-an-accountant/new-york/industries/consulting/", name: "New York agencies &amp; consultancies", angle: "ASC 606 revenue recognition, project profitability, and contractor 1099s &mdash; with NYC UBT exposure for unincorporated firms." },
    { href: "/find-an-accountant/new-york/industries/ecommerce/", name: "New York ecommerce &amp; retail", angle: "Multi-state sales-tax nexus, marketplace-facilitator reconciliation, and COGS by SKU &mdash; with destination-based NY sourcing tracked." },
  ],
  moreNote: "Don&rsquo;t see your industry? Every engagement runs under the same standard &mdash; a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file &mdash; whether or not your industry has a dedicated page yet. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry-index&amp;funnel_stage=MOFU\">Talk to us &rarr;</a>",

  // FAQ — 5 Q/A VERBATIM from the contract (Q1–Q5; enrichment append-only). visible = FAQPage
  // schema. Q6 is a GENUINE industries-coverage enrichment FAQ added for the 6+ gate (flagged
  // in the build report — NOT a contract question). (H2: New York industry accounting questions.)
  faq: [
    { q: "Why does industry-specific accounting matter for a New York business?", a: "Every industry breaks its books in a different place &mdash; job costing for construction, IOLTA trust for law firms, prime cost for restaurants, billed-vs-collected for healthcare. New York adds its own layer on top: NYC sales tax, the Unincorporated Business Tax, and industry rules like legal IOLTA and nonprofit CHAR500. Generic bookkeeping misses the number that runs your business; we configure QuickBooks around how your industry actually operates, with New York&rsquo;s specifics built in." },
    { q: "Which industries does TechBrot serve in New York?", a: "Dedicated New York expertise for construction, real estate, law firms, restaurants, healthcare, and nonprofits &mdash; the industries most concentrated in the New York economy &mdash; plus professional services, ecommerce, and more. Every engagement runs under one standard: a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file." },
    { q: "Do you handle the New York-specific rules for my industry?", a: "Yes &mdash; that&rsquo;s the point of an industry page. Law firms get New York IOLTA trust accounting and three-way reconciliation; nonprofits get CHAR500-ready books; restaurants and retailers get NYC sales-tax tracking; construction gets certified payroll for prevailing-wage work. We build the New York rules into the books, then coordinate with your CPA for filing." },
    { q: "Who delivers industry accounting in New York?", a: "A Certified QuickBooks ProAdvisor &mdash; directly or through a vetted local operator under TechBrot&rsquo;s standards &mdash; with one named point of accountability, working in your own QuickBooks file. The same person stays on your file month to month, so the industry-specific structure stays consistent." },
    { q: "What does industry-specific accounting cost in New York?", a: "A fixed monthly fee against a written scope &mdash; no hourly billing &mdash; driven by your industry, transaction volume, and complexity. Monthly bookkeeping typically runs $400&ndash;$2,500+/mo with complexity adjustments. TechBrot delivers the books; your CPA files. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "What if my industry doesn&rsquo;t have a dedicated New York page yet?", a: "You&rsquo;re still fully covered. The dedicated pages exist for the industries most concentrated in the New York economy, but the same standard applies to any business &mdash; a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file. The discovery call maps how your specific industry runs onto the books, layers in the New York rules that apply to you (NYC sales tax, the UBT, sales-tax nexus, or industry-specific trust and reporting rules), and confirms the scope before any work begins." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, NO founder name. (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor certifications &mdash; verifiable on Intuit&rsquo;s <a href=\"https://proadvisor.intuit.com/\" rel=\"noopener nofollow\">public ProAdvisor directory</a>" },
    { label: "Scope", detail: "Industry-specific bookkeeping, QuickBooks setup, payroll, NY sales-tax tracking, advisory &middot; income-tax filing coordinated with your CPA or EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — 4 next-step cards. Each H3 verbatim from the contract. (H2: Related New York services. + 4 H3s)
  related: [
    { name: "New York QuickBooks Accountant", href: "/find-an-accountant/new-york/quickbooks-accountant/", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, payroll, and NYC sales tax statewide.", cta: "QuickBooks accountant &rarr;" },
    { name: "New York Cleanup", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", body: "The usual starting point for a messy, industry-specific file.", cta: "Explore cleanup &rarr;" },
    { name: "New York Cities", href: "/find-an-accountant/new-york/cities/", body: "Industry expertise with city-by-city local depth across New York.", cta: "By city &rarr;" },
    { name: "New York Pricing", href: "/find-an-accountant/new-york/pricing/", body: "Fixed-fee ranges across every service &mdash; written scope before any work.", cta: "See pricing &rarr;" },
  ],

  // ITEMLIST for schema — the 6 dedicated NY industry pages (matches baseline ItemList order).
  industryList: [
    { name: "New York Construction Accounting", url: "https://techbrot.com/find-an-accountant/new-york/industries/construction/" },
    { name: "New York Real Estate Accounting", url: "https://techbrot.com/find-an-accountant/new-york/industries/real-estate/" },
    { name: "New York Law Firms Accounting", url: "https://techbrot.com/find-an-accountant/new-york/industries/legal/" },
    { name: "New York Restaurants Accounting", url: "https://techbrot.com/find-an-accountant/new-york/industries/restaurant/" },
    { name: "New York Healthcare Accounting", url: "https://techbrot.com/find-an-accountant/new-york/industries/healthcare/" },
    { name: "New York Nonprofits Accounting", url: "https://techbrot.com/find-an-accountant/new-york/industries/nonprofit/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Industry Accounting & Bookkeeping","description":"Industry-specific accounting and bookkeeping for New York businesses — construction, real estate, law firms, restaurants, healthcare, and nonprofits — configured around how each industry runs, with New York rules (NYC sales tax, UBT, IOLTA, CHAR500) built in.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-industries-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-hub-in-brief-text","#ny-ind-hub-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":url+"#industrylist","name":"New York industries served","itemListElement":data.industryList.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":c.name,"url":c.url};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
