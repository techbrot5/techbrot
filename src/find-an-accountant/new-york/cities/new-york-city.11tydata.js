/* /find-an-accountant/new-york/cities/new-york-city/ — t-location CITY-WIDE page
 * (the five-borough parent of the NY city children; sits above brooklyn.njk et al.
 * in the breadcrumb). Sources: FROZEN EQUITY CONTRACT (contract-ny-nyc.txt) — the
 * ONLY authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/cities/new-york-city/index.html, body read) for body
 * prose/section content. Data-file shape mirrors brooklyn.11tydata.js: JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array
 * the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, or clients on this page. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, NOT duplicated
 * here) — this city-wide page renders NO review-card and NO AggregateRating. NYC tax
 * figures (8.875% combined sales tax = 4% state + 4.5% city + 0.375% MTA/MCTD; 4% UBT
 * after $95K gross, credit fully offsets UBT ≤$3,400, partial to $5,400, $5,000
 * exemption phasing out above $100,000; Commercial Rent Tax = Manhattan south of 96th
 * St, $250,000+ annual rent) verified Jun 2026 vs NYC DoF + NY DTF. No founder/personal
 * name in visible content (firm-level review byline only). Independent firm — does NOT
 * file NY/NYC taxes; coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full NYC summary prose).
  // (H2: The short version.) Preserved verbatim from the live baseline tldr__body.
  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for New York City businesses</strong> across all five boroughs &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management, by a named bookkeeper on the same file every month. What sets NYC apart is the tax layer: the <strong>8.875% combined sales tax</strong>, the <strong>4% Unincorporated Business Tax</strong> on unincorporated businesses, and the <strong>Commercial Rent Tax</strong> for Manhattan tenants south of 96th Street paying $250,000+ in rent. We build awareness of all three into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop &mdash; your borough doesn&rsquo;t change the service. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block,
  // preserved verbatim). (H2: New York City bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for NYC businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across all five NYC boroughs</strong> &mdash; Manhattan, Brooklyn, Queens, the Bronx, and Staten Island &mdash; with a named bookkeeper per file and fluency in NYC-specific taxes." },
    { q: "What NYC taxes affect my books?", a: "The <strong>8.875% combined sales tax</strong>, the <strong>4% Unincorporated Business Tax (UBT)</strong> on sole proprietors/partnerships/LLCs, and the <strong>Commercial Rent Tax</strong> for Manhattan tenants below 96th Street paying $250,000+ annual rent." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. NYC businesses often run higher transaction volumes, which we scope transparently before any work begins." },
    { q: "Which boroughs do you serve?", a: "<strong>All five</strong> &mdash; Manhattan, Brooklyn, Queens, the Bronx, and Staten Island &mdash; delivered remotely on QuickBooks, so your borough doesn&rsquo;t change the service or cadence." },
    { q: "Do I owe the NYC UBT?", a: "Maybe &mdash; it depends on size. The UBT is <strong>4% on net income allocated to NYC</strong>, but it only applies once <strong>gross income tops $95,000</strong>, and a credit fully offsets the tax when the UBT liability is $3,400 or less (partial up to $5,400). So many smaller sole proprietors and partnerships owe little or nothing. We keep the books clear so the real figure &mdash; not a guess &mdash; is there for your CPA." },
  ],

  // LOCAL CONTEXT — the un-clonable band (verbatim body prose from the live baseline).
  // (H2: Why New York City books are different.)
  localContext: [
    "No U.S. city stacks taxes on a small business the way New York City does &mdash; and <em>that</em>, not the software, is what makes NYC bookkeeping its own discipline.",
    "A Manhattan consulting partnership can face federal tax, New York State tax, NYC personal income tax, <strong>and</strong> the 4% Unincorporated Business Tax on the same dollar &mdash; a layering no other city imposes. A SoHo retailer collects 8.875% sales tax while watching whether their lease crosses the $250,000 Commercial Rent Tax threshold. A Brooklyn restaurant reconciles high-volume POS deposits against that same sales-tax rate. A Queens contractor juggles job costing across boroughs. The bookkeeping has to hold all of it.",
    "That&rsquo;s why generic, software-only bookkeeping struggles here. When your books don&rsquo;t track the UBT base correctly, you find out via a <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">notice</a> months later. When sales tax isn&rsquo;t reconciled, the quarterly return drifts. When a lease crosses a CRT threshold and no one&rsquo;s watching, it&rsquo;s a surprise liability. TechBrot keeps a named bookkeeper on your file who knows these are the things that matter in this city &mdash; and builds them into the monthly close, not the year-end scramble.",
    "The result: books that reflect how a New York City business actually runs, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the UBT, the sales tax, and the income returns is fast and accurate.",
  ],

  // AREAS — across the five boroughs (verbatim names/notes from the live area grid).
  // (H2: New York City areas we serve.)
  areas: [
    { name: "Manhattan", note: "Agencies, professional services, retail, CRT-zone tenants" },
    { name: "Brooklyn", note: "Restaurants, retail, creative &amp; ecommerce" },
    { name: "Queens", note: "Contractors, home services, restaurants" },
    { name: "The Bronx", note: "Healthcare, nonprofits, trades" },
    { name: "Staten Island", note: "Professional services, construction, retail" },
    { name: "NYC Metro", note: "Surrounding counties &amp; remote-first businesses" },
  ],

  // TAX STACK — grid-3 + stack-8 (NOT proof-strip__item). The three NYC taxes,
  // figures/desc preserved verbatim from the live tax card.
  // (H2: New York City's tax stack, at a glance.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax &mdash; the highest rate in New York State (4% state + 4.5% city + 0.375% MTA/MCTD), the same across all five boroughs. Tracked and reconciled in QuickBooks for an accurate quarterly return." },
    { figure: "4%", desc: "Unincorporated Business Tax on sole proprietors, partnerships &amp; LLCs doing business in NYC &mdash; applies once gross income tops $95,000; a credit can fully offset it when UBT owed is $3,400 or less (partial up to $5,400). Filed on NYC-202/204 by your CPA." },
    { figure: "3.9%", desc: "Effective Commercial Rent Tax (6% on 65% of base rent) for Manhattan tenants south of 96th St paying $250K+ rent. Small-business credit may exempt under $5M income / $500K rent. Does not apply outside Manhattan." },
  ],
  taxNote: "NYC tax figures are educational and current as of the review date, verified against the NYC Department of Finance and NY DTF. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file NY State or NYC tax returns.",

  // INDUSTRIES — NYC verticals (lighter chips-list -> checks-list). Links to the NY
  // industry pages, each with a one-line NYC-specific local wrinkle.
  // (H2: Industry-specific bookkeeping for NYC businesses.)
  industries: [
    { label: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/", note: "POS deposits reconciled against the 8.875% rate, tipped-employee payroll, food vs. alcohol sales tax" },
    { label: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", note: "investors, brokerages, and property managers &mdash; multi-entity ledgers, trust accounting, CRT awareness" },
    { label: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", note: "IOLTA trust accounting in a separate QuickBooks ledger; partnership books structured for the UBT" },
    { label: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", note: "medical, dental, and specialty practices &mdash; payer reconciliation and multi-provider payroll" },
    { label: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/", note: "CHAR500-ready workpapers, functional expense allocation, and grant revenue recognition" },
    { label: "Construction", href: "/find-an-accountant/new-york/industries/construction/", note: "contractors and trades &mdash; job costing across boroughs, WIP schedules, retainage, prevailing-wage payroll" },
  ],

  // SERVICES — value stack (grid-2 buyer-cards). The 4 frozen H3s, verbatim, with the
  // live body prose preserved.
  // (H2: Complete bookkeeping, NYC-aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with NYC sales tax tracked.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "High-volume NYC books fall behind fast. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "04", title: "UBT &amp; sales-tax-ready books", body: "Books structured so your CPA can file the NYC UBT and quarterly sales tax accurately.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
  ],

  // ADVISORY — mission block. STANDING brand line is the H2. Body preserved verbatim.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a city that taxes the same dollar four ways, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your UBT base is climbing, your lease is nearing the CRT threshold, or your margins are thinning. That judgment is what a named NYC bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYC Dept of Finance &amp; NY DTF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York City bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my New York City business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across all five boroughs &mdash; Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month, with full fluency in the NYC-specific taxes that catch city businesses off guard." },
    { q: "What NYC-specific taxes affect my bookkeeping?", a: "Three big ones. The 8.875% combined sales tax (the highest in the state). The Unincorporated Business Tax (UBT) &mdash; a 4% NYC tax on sole proprietors, partnerships, and LLCs that&rsquo;s separate from your personal return. And, for Manhattan tenants south of 96th Street paying $250,000+ in annual rent, the Commercial Rent Tax. We build awareness of all three into how your books are kept." },
    { q: "How much does a NYC bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. NYC businesses often run higher transaction volumes, which we scope transparently before any work begins." },
    { q: "Which boroughs do you serve?", a: "All five &mdash; Manhattan, Brooklyn, Queens, the Bronx, and Staten Island &mdash; plus the surrounding metro. Because the work is delivered remotely on QuickBooks, your borough doesn&rsquo;t change the service, the cadence, or the named bookkeeper assigned to your file." },
    { q: "Do I owe NYC Unincorporated Business Tax (UBT)?", a: "It depends on size, not just structure. The UBT is a 4% NYC tax on net business income allocated to the city for sole proprietors, single-member LLCs, partnerships, and multi-member LLCs &mdash; but it only kicks in once gross income exceeds $95,000, and there is a $5,000 income exemption (phasing out above $100,000) plus a tax credit that fully offsets the UBT when the tax owed is $3,400 or less (partial credit up to $5,400). The upshot: many smaller unincorporated businesses owe little or no UBT, while larger ones clearly do. Most owners first hear about it via a notice. We keep the books structured so the real number is clear and your CPA can file the NYC-202 or NYC-204 accurately." },
    { q: "Can you clean up a messy NYC QuickBooks file?", a: "Yes &mdash; it&rsquo;s the most common NYC engagement. High transaction volume and rapid growth tend to leave city businesses behind in their books. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean as you scale." },
    { q: "Do you work with NYC restaurants, agencies, and professional services?", a: "Yes &mdash; those are among the most common NYC verticals we serve, alongside real estate, healthcare, and nonprofits. Each has city-specific wrinkles: restaurants need POS and sales-tax reconciliation, agencies need gross-vs-net revenue handling, and professional-services partnerships need clean books for UBT. See our New York pages for construction, real estate, legal, restaurant, healthcare, and nonprofit." },
    { q: "How do we get started in NYC?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your NYC situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York City Bookkeeper & QuickBooks Accountant","description":"Certified QuickBooks ProAdvisor bookkeeping for New York City businesses across all five boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — fluent in NYC's 8.875% sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax. Fixed-fee, named bookkeeper.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-new-york-city.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-nyc-summary","#ny-nyc-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"New York City"}]},
        {"@type":"Service","@id":url+"#service","name":"New York City Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, QuickBooks management, and NYC tax-aware bookkeeping for businesses across the five boroughs of New York City, with the 8.875% sales tax, the 4% UBT, and the Commercial Rent Tax tracked and CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"New York City","sameAs":"https://en.wikipedia.org/wiki/New_York_City"},
          {"@type":"City","name":"Manhattan","sameAs":"https://en.wikipedia.org/wiki/Manhattan"},
          {"@type":"City","name":"Brooklyn","sameAs":"https://en.wikipedia.org/wiki/Brooklyn"},
          {"@type":"City","name":"Queens","sameAs":"https://en.wikipedia.org/wiki/Queens"},
          {"@type":"City","name":"The Bronx","sameAs":"https://en.wikipedia.org/wiki/The_Bronx"},
          {"@type":"City","name":"Staten Island","sameAs":"https://en.wikipedia.org/wiki/Staten_Island"}],
          "audience":{"@type":"BusinessAudience","audienceType":"New York City small and midsize businesses across the five boroughs — restaurants, agencies, professional services, real estate, healthcare, legal, construction, and nonprofits"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
