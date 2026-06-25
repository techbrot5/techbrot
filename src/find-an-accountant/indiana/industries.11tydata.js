/* /find-an-accountant/indiana/industries/ — t-location HUB (Indiana industries index; lists/
 * routes to the 6 IN industry pages). Mirrors the proven NY/DE industries hubs
 * (find-an-accountant/new-york/industries.11tydata.js, delaware/industries.11tydata.js).
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (CollectionPage · BreadcrumbList ·
 * ItemList of the 6 IN industry pages · FAQPage).
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md (the ONLY authority for IN numbers).
 * No figure invented. County LIT rates qualitative only — never a specific county %.
 *
 * HONESTY (R5): NO street address anywhere (IN is an areaServed-only anchor — no
 * LocalBusiness/PostalAddress/geo); no invented reviews, stats, clients, or outcomes; no
 * AggregateRating; no review-card on the hub. No founder/personal name in visible content —
 * firm byline only; David Westgate appears only as reviewedBy #david-westgate in schema.
 * Independent firm; not affiliated with Intuit Inc.; does NOT file Indiana returns, the county
 * LIT return, the sales-tax return, or the business-personal-property return — keeps the books
 * and coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // INDUSTRY ACCOUNTING, PLAINLY — one-paragraph summary (links to the 6 IN industry pages + IN services).
  coverage: "Industry-specific accounting means configuring the books around how a business actually earns and spends &mdash; and in Indiana that means two things at once: how your industry runs, and how Indiana taxes it. <a href=\"/find-an-accountant/indiana/industries/manufacturing/\">Manufacturers</a> &mdash; this is the most manufacturing-intensive state in the country &mdash; live on job costing, standard-vs-actual cost, and inventory/WIP, with the new $2M business-personal-property exemption to track; <a href=\"/find-an-accountant/indiana/industries/logistics-distribution/\">logistics and distribution operators</a> on the Crossroads of America run per-lane profitability, fleet depreciation, multi-state nexus, and IFTA coordination; <a href=\"/find-an-accountant/indiana/industries/agriculture/\">farms</a> choose cash or accrual and track enterprise-level crop and livestock margins; <a href=\"/find-an-accountant/indiana/industries/construction/\">builders</a> riding Central-Indiana growth live on job costing, WIP, and retainage; <a href=\"/find-an-accountant/indiana/industries/real-estate/\">real estate operators</a> keep entity-per-property books with the LIT-by-owner-residency wrinkle; and <a href=\"/find-an-accountant/indiana/industries/healthcare/\">medical practices</a> reconcile payers and run multi-provider payroll with county LIT withholding. Income is a flat <strong>2.95%</strong> (2026) and sales a clean <strong>7% statewide with no local add-ons</strong>, but <strong>all 92 counties levy their own local income tax (LIT)</strong> on top. <strong>TechBrot</strong> is a firm of <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> who build each engagement around those realities &mdash; fixed-fee, in your own QuickBooks file. We deliver the books; your CPA files. Not affiliated with Intuit Inc.",

  // AI SUMMARY — 5 entity-dense Q&As.
  aiSummary: [
    { q: "Why does industry-specific accounting matter in Indiana?", a: "Every industry breaks its books in a different place &mdash; and <strong>Indiana adds its own layer: a flat 2.95% income tax (2026), a clean 7% sales tax with no local add-ons, the new $2M business-personal-property exemption, and a county local income tax (LIT) in all 92 counties</strong>. Generic bookkeeping misses the number that runs your business; we configure QuickBooks around your industry with the Indiana rules built in." },
    { q: "Which industries do you serve in Indiana?", a: "Dedicated Indiana expertise for <strong>manufacturing, logistics and distribution, agriculture, construction, real estate, and healthcare</strong> &mdash; the sectors that define the Indiana economy &mdash; one standard, a named Certified ProAdvisor, fixed-fee. Other sectors route to our global industry pages, scoped for Indiana on the call." },
    { q: "Do you handle Indiana-specific industry rules?", a: "Yes &mdash; <strong>the 92-county LIT withholding matrix, the $2M business-personal-property exemption posture (Form 102/103), multi-state sales-tax nexus for shippers, IFTA coordination for carriers, and the clean 7% sales-tax setup</strong>. Built into the books; your CPA files." },
    { q: "Who delivers the work?", a: "A <strong>Certified QuickBooks ProAdvisor</strong> with one named point of accountability, in your own QuickBooks file &mdash; the same person month to month, serving all 92 Indiana counties remotely." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; no hourly billing. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750; cleanup from $1,200. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],

  // FEATURED INDUSTRIES — 6 dedicated-page industries (rel-card grid). Each links to its IN industry page.
  featured: [
    { num: "01", eyebrow: "Manufacturing", heading: "Indiana manufacturing accounting", href: "/find-an-accountant/indiana/industries/manufacturing/", body: "Job costing, standard-vs-actual cost, inventory and WIP, and multi-plant books for the most manufacturing-intensive state in the country &mdash; with the $2M business-personal-property exemption tracked.", focus: "Job costing &amp; inventory/WIP", cta: "Manufacturing &rarr;" },
    { num: "02", eyebrow: "Logistics &amp; Distribution", heading: "Indiana logistics &amp; distribution accounting", href: "/find-an-accountant/indiana/industries/logistics-distribution/", body: "Per-lane and per-customer profitability, fleet depreciation, owner-operator 1099s, multi-state nexus, and IFTA coordination on the Crossroads of America and the FedEx Indianapolis hub corridor.", focus: "Per-lane profit &amp; nexus", cta: "Logistics &amp; Distribution &rarr;" },
    { num: "03", eyebrow: "Agriculture", heading: "Indiana agriculture accounting", href: "/find-an-accountant/indiana/industries/agriculture/", body: "Cash-vs-accrual choice, crop and livestock enterprise accounting, Section 179, government-program and co-op payments, and family-farm succession books for a top-tier ag state.", focus: "Enterprise &amp; cash-vs-accrual", cta: "Agriculture &rarr;" },
    { num: "04", eyebrow: "Construction", heading: "Indiana construction accounting", href: "/find-an-accountant/indiana/industries/construction/", body: "Job costing, WIP, retainage, AIA billing, and certified payroll for builders riding Central-Indiana growth &mdash; with CPA-ready job profitability you can bid from.", focus: "Job costing &amp; WIP", cta: "Construction &rarr;" },
    { num: "05", eyebrow: "Real Estate", heading: "Indiana real estate accounting", href: "/find-an-accountant/indiana/industries/real-estate/", body: "Entity-per-property books, owner draws, 1031 coordination, and short-term-rental tracking across the Indy metro and college towns &mdash; with the LIT-by-owner-residency wrinkle handled.", focus: "Per-property books", cta: "Real Estate &rarr;" },
    { num: "06", eyebrow: "Healthcare", heading: "Indiana healthcare accounting", href: "/find-an-accountant/indiana/industries/healthcare/", body: "Insurance-payer reconciliation, billed-vs-collected tracking, HIPAA-aware data handling, and multi-provider payroll with county LIT withholding for practices and clinics.", focus: "Payer reconciliation", cta: "Healthcare &rarr;" },
  ],

  // WHY INDUSTRY — context block.
  why: [
    "Most bookkeepers treat every business the same: categorize, reconcile, produce a P&amp;L. That&rsquo;s fine until you need the thing your industry actually turns on &mdash; whether a single manufacturing job ran over standard cost, the profit on a freight lane, or which property cleared its mortgage. Those numbers don&rsquo;t appear by accident; the books have to be built to surface them.",
    "In Indiana there&rsquo;s a second layer. Two of the major taxes are refreshingly simple &mdash; income is a <strong>flat 2.95%</strong> for 2026 (no brackets) and sales a <strong>flat 7% statewide with no county or city add-ons</strong> &mdash; which makes QuickBooks setup cleaner than in layered-tax states. The genuine Indiana complexity is elsewhere: <strong>all 92 counties levy their own local income tax (LIT)</strong>, set by the taxpayer&rsquo;s county of residence on January 1 and withheld through Form WH-4; the <strong>business-personal-property exemption</strong> jumped to <strong>$2,000,000</strong> for 2026, but still has to be declared on Form 102/103; and Indiana&rsquo;s manufacturing and logistics base means <strong>multi-state nexus</strong> wherever goods ship. We configure QuickBooks around both &mdash; how your industry runs, and how Indiana taxes it. As automation commoditizes routine entry, that combined judgment is where the value now lives.",
    "<a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">See Indiana QuickBooks &amp; bookkeeping &rarr;</a>",
  ],

  // MORE INDUSTRIES — Indiana-relevant sectors routed to the GLOBAL industry pages (no dedicated IN page yet).
  moreIndustries: [
    { href: "/accounting/industries/restaurant/", name: "Indiana restaurants &amp; hospitality", angle: "Daily POS reconciliation, prime cost, tips, and the clean 7% sales tax &mdash; for the Indianapolis, Bloomington, and college-town hospitality scene. Scoped for Indiana on the call." },
    { href: "/accounting/industries/professional-services/", name: "Indiana professional services", angle: "Agencies, consultancies, and firms in the Carmel and Fishers corporate corridor &mdash; project profitability, utilization, owner comp, and county-LIT withholding by staff residence. Scoped for Indiana on the call." },
    { href: "/accounting/industries/ecommerce/", name: "Indiana ecommerce &amp; retail", angle: "Multi-state sales-tax nexus wherever you ship, marketplace-facilitator reconciliation, and COGS by SKU &mdash; with Indiana&rsquo;s single 7% rate at home. Scoped for Indiana on the call." },
    { href: "/accounting/industries/nonprofit/", name: "Indiana nonprofits", angle: "Fund accounting, board-ready reporting, and grant tracking for Indiana nonprofits &mdash; with multi-provider payroll and county-LIT withholding handled. Scoped for Indiana on the call." },
  ],
  moreNote: "Don&rsquo;t see your industry with a dedicated Indiana page? Every engagement runs under the same standard &mdash; a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file &mdash; whether or not your industry has an Indiana page yet. The links above route to our global industry pages, scoped for Indiana on the call. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry-index&amp;funnel_stage=MOFU\">Talk to us &rarr;</a>",

  // FAQ — 6 Q/A, answer-first, Indiana-specific. visible faq__list = FAQPage schema (same array). 1 call-intent (#5).
  faq: [
    { q: "Why does industry-specific accounting matter for an Indiana business?", a: "Every industry breaks its books in a different place &mdash; job costing and inventory for manufacturers, per-lane profit for carriers, enterprise margins for farms, entity-per-property books for real estate, payer reconciliation for medical practices. Indiana adds its own layer on top: a flat 2.95% income tax and a clean 7% sales tax with no local add-ons, but a county local income tax (LIT) in all 92 counties, the new $2M business-personal-property exemption to declare, and multi-state nexus for shippers. Generic bookkeeping misses the number that runs your business; we configure QuickBooks around how your industry actually operates, with Indiana&rsquo;s specifics built in." },
    { q: "Which industries does TechBrot serve in Indiana?", a: "Dedicated Indiana expertise for manufacturing, logistics and distribution, agriculture, construction, real estate, and healthcare &mdash; the sectors most concentrated in the Indiana economy &mdash; plus restaurants, professional services, ecommerce, and nonprofits through our global industry pages, scoped for Indiana. Every engagement runs under one standard: a named Certified QuickBooks ProAdvisor, fixed-fee, in your own QuickBooks file." },
    { q: "Do you handle the Indiana-specific rules for my industry?", a: "Yes &mdash; that&rsquo;s the point of an industry page. We set up the 92-county LIT withholding so the right county rate applies per employee, track the business-personal-property posture against the $2M exemption (Form 102/103), configure the clean 7% sales tax, manage multi-state nexus where goods move, and coordinate IFTA for carriers. We build the Indiana rules into the books, then coordinate with your CPA for filing." },
    { q: "How does the county local income tax (LIT) affect my industry?", a: "All 92 Indiana counties levy their own LIT on top of the flat 2.95% state rate, set by each employee&rsquo;s county of residence on January 1 and withheld through Form WH-4 &mdash; the same rate for residents and nonresidents. For multi-site manufacturers, distribution operators with drivers across counties, construction crews, and multi-provider medical practices, that means payroll has to map each person&rsquo;s county code. We apply the current county rate from the Indiana DOR list rather than quoting a fixed figure, so payroll and the county return stay reconciled." },
    { q: "Who delivers industry accounting in Indiana, and how do I start?", a: "A Certified QuickBooks ProAdvisor with one named point of accountability, working in your own QuickBooks file across all 92 Indiana counties remotely &mdash; the same person month to month, so the industry-specific structure stays consistent. Prefer to talk it through first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a ProAdvisor will scope it with you, or book a free discovery call and we&rsquo;ll send a written fixed-fee proposal within 3 business days." },
    { q: "What does industry-specific accounting cost in Indiana?", a: "A fixed monthly fee against a written scope &mdash; no hourly billing &mdash; driven by your industry, transaction volume, number of entities or sites, and complexity. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, all priced after a free discovery call. TechBrot keeps the books; your CPA files. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, NO founder name.
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor certifications &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Indiana scope", detail: "Industry-specific bookkeeping, QuickBooks setup, county-LIT withholding, business-personal-property posture, sales-tax and multi-state nexus tracking &middot; income-tax filing coordinated with your CPA or EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; all 92 counties served remotely" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Does not file Indiana returns" },
  ],

  // RELATED — 4 next-step cards.
  related: [
    { name: "Indiana QuickBooks Accountant", href: "/find-an-accountant/indiana/quickbooks-accountant/", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, county-LIT withholding, and sales tax statewide.", cta: "QuickBooks accountant &rarr;" },
    { name: "Indiana Cleanup Bookkeeping", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", body: "The usual starting point for a messy, multi-site, or industry-specific file.", cta: "Explore cleanup &rarr;" },
    { name: "Indiana Cities", href: "/find-an-accountant/indiana/cities/", body: "Industry expertise with city-by-city local depth across all 92 counties.", cta: "By city &rarr;" },
    { name: "Indiana Pricing", href: "/find-an-accountant/indiana/pricing/", body: "Fixed-fee ranges across every service &mdash; written scope before any work.", cta: "See pricing &rarr;" },
  ],

  // ITEMLIST for schema — the 6 dedicated IN industry pages.
  industryList: [
    { name: "Indiana Manufacturing Accounting", url: "https://techbrot.com/find-an-accountant/indiana/industries/manufacturing/" },
    { name: "Indiana Logistics & Distribution Accounting", url: "https://techbrot.com/find-an-accountant/indiana/industries/logistics-distribution/" },
    { name: "Indiana Agriculture Accounting", url: "https://techbrot.com/find-an-accountant/indiana/industries/agriculture/" },
    { name: "Indiana Construction Accounting", url: "https://techbrot.com/find-an-accountant/indiana/industries/construction/" },
    { name: "Indiana Real Estate Accounting", url: "https://techbrot.com/find-an-accountant/indiana/industries/real-estate/" },
    { name: "Indiana Healthcare Accounting", url: "https://techbrot.com/find-an-accountant/indiana/industries/healthcare/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"CollectionPage","@id":url+"#webpage","url":url,"name":"Indiana Industry Accounting & Bookkeeping","description":"Industry-specific accounting and bookkeeping for Indiana businesses — manufacturing, logistics and distribution, agriculture, construction, real estate, and healthcare — configured around how each industry runs, with Indiana rules (flat 2.95% income tax, clean 7% sales tax, the 92-county local income tax, and the $2M business-personal-property exemption) built in.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-industries-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-industries-in-brief-text","#in-industries-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":url+"#industrylist","name":"Indiana industries served","itemListElement":data.industryList.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":c.name,"url":c.url};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
