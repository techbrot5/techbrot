/* /find-an-accountant/delaware/industries/ — t-location HUB (DE industries index; lists/
 * routes to the 6 DE industry pages). Mirrors the proven NY industries hub
 * (find-an-accountant/new-york/industries.11tydata.js). JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage · BreadcrumbList · ItemList of the 6 DE industry pages · FAQPage).
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md (the ONLY authority for DE numbers) +
 * the DE pillar (find-an-accountant/delaware.11tydata.js). No figure invented beyond DE-FACTS.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review proof is
 * the 2 real Clutch reviews (carried on the DE pillar, not duplicated here) — this hub renders
 * NO review-card and NO AggregateRating. No founder/personal name in visible content — firm
 * byline only; David Westgate appears only as reviewedBy #david-westgate in schema. Independent
 * firm; not affiliated with Intuit Inc.; NOT a registered agent; does NOT file DE returns or the
 * franchise tax/annual report — keeps the books and coordinates with the client's CPA and
 * registered agent, who file.
 *
 * LAYOUT NOTE: industry children use t-location to match the actual NY industry exemplars
 * (DE-FACTS line 93 says "t-money" but the NY industry pages it points to use t-location). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // INDUSTRY ACCOUNTING, PLAINLY — one-paragraph summary (links to the 6 DE industry pages + DE services).
  coverage: "Industry-specific accounting means configuring the books around how a business actually earns and spends &mdash; and in Delaware that means two things at once: how your industry runs, and how Delaware taxes it. <a href=\"/find-an-accountant/delaware/industries/incorporation-holding-companies/\">Holding companies</a> need intercompany books, separate ledgers per entity, and a franchise-tax reserve; <a href=\"/find-an-accountant/delaware/industries/ecommerce/\">ecommerce sellers</a> collect no sales tax but owe the gross receipts tax and face multi-state nexus wherever they ship; <a href=\"/find-an-accountant/delaware/industries/professional-services/\">agencies and firms</a> track gross receipts by activity and Wilmington&rsquo;s net-profits tax; <a href=\"/find-an-accountant/delaware/industries/real-estate/\">real estate operators</a> keep entity-per-property books from New Castle to the Sussex coast; <a href=\"/find-an-accountant/delaware/industries/construction/\">builders</a> live on job costing, WIP, and retainage; and <a href=\"/find-an-accountant/delaware/industries/finance-banking/\">Wilmington&rsquo;s finance corridor</a> needs clean intercompany, audit-ready reporting. <strong>TechBrot</strong> is a firm of <a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> who build each engagement around those realities &mdash; fixed-fee, in your own QuickBooks file, from our Middletown office. We keep the books and coordinate with your CPA and registered agent, who file. Not affiliated with Intuit Inc.",

  // AI SUMMARY — 5 entity-dense Q&As.
  aiSummary: [
    { q: "Why does industry-specific accounting matter in Delaware?", a: "Every industry breaks its books in a different place &mdash; and <strong>Delaware adds its own layer: no sales tax, the gross receipts tax on the seller, the annual franchise-tax reserve, and Wilmington&rsquo;s 1.25% wage and net-profits tax</strong>. Generic bookkeeping misses the number that runs your business; we configure QuickBooks around your industry with the Delaware rules built in." },
    { q: "Which industries do you serve in Delaware?", a: "Dedicated Delaware expertise for <strong>incorporation and holding companies, ecommerce, professional services, real estate, construction, and finance and banking</strong> &mdash; one standard, a named Certified ProAdvisor, fixed-fee, from our Middletown office. Other sectors route to our global industry pages, scoped for Delaware on the call." },
    { q: "Do you handle Delaware-specific industry rules?", a: "Yes &mdash; <strong>gross-receipts tracking by business activity, the franchise-tax reserve every Delaware entity owes, intercompany books for holding companies, and Wilmington&rsquo;s wage and net-profits tax</strong>. Built into the books; your CPA and registered agent file." },
    { q: "Who delivers the work?", a: "A <strong>Certified QuickBooks ProAdvisor</strong> with one named point of accountability, in your own QuickBooks file &mdash; the same person month to month, working from the Middletown office across New Castle, Kent, and Sussex." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; no hourly billing. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750; cleanup from $1,200. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],

  // FEATURED INDUSTRIES — 6 dedicated-page industries (rel-card grid). Each links to its DE industry page.
  featured: [
    { num: "01", eyebrow: "Holding Companies", heading: "Delaware holding company accounting", href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/", body: "Intercompany books, separate ledgers per entity, and a franchise-tax reserve for the holding companies and registered entities Delaware is known for &mdash; including out-of-state owners.", focus: "Intercompany &amp; per-entity books", cta: "Holding Companies &rarr;" },
    { num: "02", eyebrow: "Ecommerce", heading: "Delaware ecommerce accounting", href: "/find-an-accountant/delaware/industries/ecommerce/", body: "No sales tax to collect, but gross-receipts tracking on the seller, multi-channel revenue, COGS, and multi-state nexus wherever you ship.", focus: "Gross receipts &amp; nexus", cta: "Ecommerce &rarr;" },
    { num: "03", eyebrow: "Professional Services", heading: "Delaware professional services accounting", href: "/find-an-accountant/delaware/industries/professional-services/", body: "Agencies, consultancies, and firms &mdash; gross receipts by activity, Wilmington net-profits tax, owner-comp, and project profitability.", focus: "GRT by activity", cta: "Professional Services &rarr;" },
    { num: "04", eyebrow: "Real Estate", heading: "Delaware real estate accounting", href: "/find-an-accountant/delaware/industries/real-estate/", body: "Operators and investors from New Castle to the Sussex coast &mdash; entity-per-property books, owner draws, and gross receipts on rental and commission income.", focus: "Per-property books", cta: "Real Estate &rarr;" },
    { num: "05", eyebrow: "Construction", heading: "Delaware construction accounting", href: "/find-an-accountant/delaware/industries/construction/", body: "Job costing, WIP, and retainage for builders riding Delaware&rsquo;s Middletown and Sussex growth &mdash; with gross receipts by contract activity and CPA-ready job profitability.", focus: "Job costing &amp; WIP", cta: "Construction &rarr;" },
    { num: "06", eyebrow: "Finance &amp; Banking", heading: "Delaware finance &amp; banking accounting", href: "/find-an-accountant/delaware/industries/finance-banking/", body: "Wilmington&rsquo;s credit-card and banking corridor &mdash; clean books for fintechs, lenders, advisers, and fund entities, with intercompany structure and audit-ready reporting.", focus: "Intercompany &amp; audit-ready", cta: "Finance &amp; Banking &rarr;" },
  ],

  // WHY INDUSTRY — context block.
  why: [
    "Most bookkeepers treat every business the same: categorize, reconcile, produce a P&amp;L. That&rsquo;s fine until you need the thing your industry actually turns on &mdash; job profitability on a build, profit per property, whether a holding company&rsquo;s intercompany entries reconcile cleanly. Those numbers don&rsquo;t appear by accident; the books have to be built to surface them.",
    "In Delaware there&rsquo;s a second layer, and it surprises owners and out-of-state bookkeepers alike: there is <strong>no sales tax to collect</strong>, but the state levies a <strong>gross receipts tax on the seller</strong> &mdash; 0.0945%&ndash;1.9914% by business activity &mdash; so QuickBooks has to track receipts by activity category. Every Delaware entity also owes an annual <strong>franchise tax</strong> (a flat $300 for LLCs/LPs, $175&ndash;$200,000 for corporations) that has to be reserved for in the books, and businesses inside Wilmington owe the city&rsquo;s <strong>1.25% wage and net-profits tax</strong>. We configure QuickBooks around both &mdash; how your industry runs, and how Delaware taxes it. As automation commoditizes routine entry, that combined judgment is where the value now lives.",
    "<a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">See Delaware QuickBooks &amp; bookkeeping &rarr;</a>",
  ],

  // MORE INDUSTRIES — Delaware-relevant sectors routed to the GLOBAL industry pages (no dedicated DE page yet).
  moreIndustries: [
    { href: "/accounting/industries/manufacturing/", name: "Delaware manufacturing &amp; poultry", angle: "Sussex County&rsquo;s agriculture, poultry, and manufacturing base &mdash; inventory and COGS, QuickBooks Enterprise, and gross receipts by activity. Scoped for Delaware on the call." },
    { href: "/accounting/industries/restaurant/", name: "Delaware restaurants &amp; hospitality", angle: "Coastal Rehoboth, Lewes, and Dewey hospitality &mdash; daily POS reconciliation, prime cost, tips, and gross receipts &mdash; with seasonal cash discipline. Scoped for Delaware on the call." },
    { href: "/accounting/industries/healthcare/", name: "Delaware healthcare &amp; practices", angle: "Dover and Bayhealth-area practices &mdash; insurance reconciliation, billed-vs-collected tracking, and per-provider books. Scoped for Delaware on the call." },
    { href: "/accounting/industries/nonprofit/", name: "Delaware nonprofits", angle: "Fund accounting, board-ready reporting, and grant tracking for Delaware nonprofits &mdash; with the franchise-tax exemption confirmed in the books. Scoped for Delaware on the call." },
  ],
  moreNote: "Don&rsquo;t see your industry with a dedicated Delaware page? Every engagement runs under the same standard &mdash; a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file &mdash; whether or not your industry has a Delaware page yet. The links above route to our global industry pages, scoped for Delaware on the call. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry-index&amp;funnel_stage=MOFU\">Talk to us &rarr;</a>",

  // FAQ — 6 Q/A, answer-first, Delaware-specific. visible faq__list = FAQPage schema (same array).
  faq: [
    { q: "Why does industry-specific accounting matter for a Delaware business?", a: "Every industry breaks its books in a different place &mdash; job costing for construction, per-property profit for real estate, intercompany structure for holding companies, gross receipts by activity for agencies. Delaware adds its own layer on top: no sales tax to collect, but a gross receipts tax on the seller, an annual franchise-tax reserve every entity owes, and Wilmington&rsquo;s 1.25% wage and net-profits tax. Generic bookkeeping misses the number that runs your business; we configure QuickBooks around how your industry actually operates, with Delaware&rsquo;s specifics built in." },
    { q: "Which industries does TechBrot serve in Delaware?", a: "Dedicated Delaware expertise for incorporation and holding companies, ecommerce, professional services, real estate, construction, and finance and banking &mdash; the sectors most concentrated in the Delaware economy &mdash; plus manufacturing, hospitality, healthcare, and nonprofits through our global industry pages. Every engagement runs under one standard: a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file, from our Middletown office." },
    { q: "Do you handle the Delaware-specific rules for my industry?", a: "Yes &mdash; that&rsquo;s the point of an industry page. We configure gross-receipts tracking by business activity, set up the franchise-tax reserve every Delaware entity owes, build intercompany structure for holding companies, and account for Wilmington&rsquo;s wage and net-profits tax where it applies. We build the Delaware rules into the books, then coordinate with your CPA and registered agent for filing." },
    { q: "Does Delaware really have no sales tax for my industry?", a: "Correct &mdash; Delaware imposes no state or local sales tax, so there is nothing to collect from customers and no sales-tax return. In its place is the gross receipts tax, levied on your own total receipts (0.0945%&ndash;1.9914% by business activity, after a monthly or quarterly exclusion amount), filed with the Division of Revenue. The bookkeeping consequence is real: QuickBooks has to track receipts by activity category so the right rate applies and the return reconciles. Out-of-state bookkeepers who assume Delaware works like a sales-tax state get this wrong." },
    { q: "Who delivers industry accounting in Delaware, and where?", a: "A Certified QuickBooks ProAdvisor with one named point of accountability, working in your own QuickBooks file from our office at 651 N Broad St in Middletown &mdash; serving New Castle, Kent, and Sussex counties directly and remotely. The same person stays on your file month to month, so the industry-specific structure stays consistent. Prefer to talk it through first? Call (877) 751-5575 and a ProAdvisor will scope it with you." },
    { q: "What does industry-specific accounting cost in Delaware?", a: "A fixed monthly fee against a written scope &mdash; no hourly billing &mdash; driven by your industry, transaction volume, number of entities, and complexity. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, all priced after a free discovery call. TechBrot keeps the books; your CPA and registered agent file. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, NO founder name.
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor certifications &mdash; Online (L2), Desktop, Enterprise, Payroll &middot; verifiable on Intuit&rsquo;s public directory" },
    { label: "Delaware scope", detail: "Industry-specific bookkeeping, QuickBooks setup, gross-receipts tracking by activity, franchise-tax reserve, Wilmington wage tax &middot; income-tax and franchise filing coordinated with your CPA and registered agent" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file from the Middletown office" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // RELATED — 4 next-step cards.
  related: [
    { name: "Delaware QuickBooks Accountant", href: "/find-an-accountant/delaware/quickbooks-accountant/", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, gross-receipts tracking, and Delaware compliance statewide.", cta: "QuickBooks accountant &rarr;" },
    { name: "Delaware Cleanup Bookkeeping", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", body: "The usual starting point for a messy, multi-entity, or industry-specific file.", cta: "Explore cleanup &rarr;" },
    { name: "Delaware Cities", href: "/find-an-accountant/delaware/cities/", body: "Industry expertise with city-by-city local depth &mdash; including Wilmington&rsquo;s city tax.", cta: "By city &rarr;" },
    { name: "Delaware Pricing", href: "/find-an-accountant/delaware/pricing/", body: "Fixed-fee ranges across every service &mdash; written scope before any work.", cta: "See pricing &rarr;" },
  ],

  // ITEMLIST for schema — the 6 dedicated DE industry pages.
  industryList: [
    { name: "Delaware Holding Company Accounting", url: "https://techbrot.com/find-an-accountant/delaware/industries/incorporation-holding-companies/" },
    { name: "Delaware Ecommerce Accounting", url: "https://techbrot.com/find-an-accountant/delaware/industries/ecommerce/" },
    { name: "Delaware Professional Services Accounting", url: "https://techbrot.com/find-an-accountant/delaware/industries/professional-services/" },
    { name: "Delaware Real Estate Accounting", url: "https://techbrot.com/find-an-accountant/delaware/industries/real-estate/" },
    { name: "Delaware Construction Accounting", url: "https://techbrot.com/find-an-accountant/delaware/industries/construction/" },
    { name: "Delaware Finance & Banking Accounting", url: "https://techbrot.com/find-an-accountant/delaware/industries/finance-banking/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Industry Accounting & Bookkeeping","description":"Industry-specific accounting and bookkeeping for Delaware businesses — holding companies, ecommerce, professional services, real estate, construction, and finance and banking — configured around how each industry runs, with Delaware rules (no sales tax, the gross receipts tax, the franchise-tax reserve, Wilmington's wage tax) built in.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-industries-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-industries-in-brief-text","#de-industries-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":url+"#industrylist","name":"Delaware industries served","itemListElement":data.industryList.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":c.name,"url":c.url};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
