/* /find-an-accountant/new-york/cities/yonkers/ — t-location CITY CHILD (cobalt
 * t-location tier; mirrors the proven brooklyn.njk city pattern). Sources: FROZEN
 * EQUITY CONTRACT (contract-ny-yonkers.txt) — the ONLY authority for the headings +
 * the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/cities/yonkers/index.html, body read) for body prose.
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array the
 * visible faq__list renders from — single source of truth (T4: append-only, verbatim).
 *
 * REAL YONKERS CONTENT (T6 content-to-goal): Yonkers is a Westchester County city just
 * north of NYC — NOT a NYC borough. It matches NYC's 8.875% combined sales tax (the
 * highest in Westchester; most of the county is 8.375%) because it layers a 0.5% city
 * sales tax on the 8.375% base. It carries NONE of NYC's business taxes — no UBT, no
 * Commercial Rent Tax. The genuine Yonkers owner/payroll wrinkle is the Yonkers
 * RESIDENT income-tax surcharge (a percentage add-on to NY State tax for Yonkers
 * residents) plus a nonresident earnings tax on wages earned in Yonkers — framed
 * QUALITATIVELY here (no precise rate asserted; the baseline does not state one).
 *
 * HONESTY (R5): no invented reviews, stats, or clients. The only review proof is the 2
 * real Clutch reviews (carried on the NY pillar, not duplicated here) — this city child
 * renders NO review-card and NO AggregateRating. Yonkers tax figures (8.875% combined
 * sales tax; no NYC UBT/CRT) verified Jun 2026 vs NY State DTF. No founder/personal name
 * in visible content (firm-level review byline only). Independent firm — does NOT file
 * NY/NYC taxes; coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full Yonkers summary prose).
  // (H2: The short version.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Yonkers businesses</strong> across Westchester County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Yonkers carries an <strong>8.875% combined sales tax</strong> &mdash; the same rate as New York City and the highest in Westchester (4% state + 4% county + 0.375% MCTD + a 0.5% city tax). But because Yonkers is in <strong>Westchester, not a NYC borough</strong>, there is <strong>no Unincorporated Business Tax and no Commercial Rent Tax</strong>. We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> &mdash; $400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+. Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: Yonkers bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Yonkers businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Yonkers and lower Westchester</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, with retail, healthcare, professional services, and trades." },
    { q: "What is the Yonkers sales tax rate?", a: "<strong>8.875% combined</strong> &mdash; 4% state + 4% Westchester County + 0.375% MCTD + a 0.5% Yonkers city tax. That&rsquo;s the same as NYC and the highest rate in Westchester; most other Westchester cities are 8.375%." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly." },
    { q: "Does Yonkers have the NYC business taxes?", a: "<strong>No.</strong> Yonkers matches NYC&rsquo;s 8.875% sales tax, but it&rsquo;s in Westchester &mdash; not a NYC borough &mdash; so there&rsquo;s <strong>no Unincorporated Business Tax and no Commercial Rent Tax</strong>. Just the sales tax plus standard state and federal taxes." },
    { q: "Why is the Yonkers rate higher than the rest of Westchester?", a: "Yonkers adds a 0.5% city sales tax on top of the 8.375% most of Westchester charges, bringing it to 8.875%. We track the correct rate in QuickBooks so your return reconciles." },
  ],

  // LOCAL CONTEXT — the un-clonable band (body prose from the live baseline; final para
  // APPENDS the genuine Yonkers resident-surcharge / nonresident earnings-tax wrinkle,
  // framed qualitatively — no precise rate asserted). (H2: Why Yonkers books have their
  // own character.)
  localContext: [
    "Yonkers sits in an unusual spot &mdash; a Westchester city that charges New York City&rsquo;s 8.875% sales tax but carries none of the city&rsquo;s business taxes &mdash; and getting that distinction right is exactly where bookkeeping earns its keep.",
    "As New York State&rsquo;s fourth-largest city and the gateway between the Bronx and Westchester, Yonkers has a dense, diverse business base &mdash; retail and restaurants along South Broadway and Central Avenue, a large healthcare presence, professional-services firms, contractors and trades, and the commercial activity around the redeveloped waterfront and Ridge Hill. What makes its books distinctive is the tax position: Yonkers is the only Westchester city that matches NYC&rsquo;s 8.875% combined rate &mdash; most of the county is 8.375% &mdash; because it layers a 0.5% city sales tax on top. Charge the wrong one and you&rsquo;re either short-remitting or overcharging customers.",
    "At the same time, Yonkers businesses get a real simplification that NYC businesses don&rsquo;t: because the city is in Westchester rather than a borough, there is no Unincorporated Business Tax and no Commercial Rent Tax. A Yonkers business owner who assumes &ldquo;effectively NYC rates&rdquo; on the sales-tax side but worries about the UBT is half right and half wrong &mdash; and that&rsquo;s exactly the kind of thing a bookkeeper who knows the jurisdiction keeps straight. When the 8.875% rate isn&rsquo;t reconciled correctly, the quarterly return drifts; when an owner over-worries about city taxes that don&rsquo;t apply, they waste money and attention.",
    "There&rsquo;s one more Yonkers wrinkle that sits on the payroll side, not the sales-tax side: Yonkers is one of the few New York places with its own resident income-tax surcharge &mdash; a percentage add-on to New York State income tax for people who live in Yonkers &mdash; plus a smaller earnings tax on wages earned in the city by nonresidents. It doesn&rsquo;t change what your business sells, but it does affect owner-draw and payroll withholding for any owners or staff who live in Yonkers, so the payroll setup has to flag Yonkers residency correctly. We make sure that distinction is built in rather than discovered at filing time.",
    "The result: books that reflect how a Yonkers business actually operates &mdash; the right sales-tax rate, none of the NYC business taxes that don&rsquo;t apply, and Yonkers residency handled correctly in payroll &mdash; reconciled every month and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a>, so filing the sales tax and income returns is fast and accurate.",
  ],

  // AREAS — across Yonkers & lower Westchester (verbatim names/notes from the live grid).
  // (H2: Yonkers areas we serve.)
  areas: [
    { name: "Downtown / Getty Square", note: "Retail, professional services, government-adjacent" },
    { name: "South Broadway", note: "Retail corridors, restaurants, neighborhood business" },
    { name: "Central Avenue", note: "Retail, auto, commercial services" },
    { name: "Yonkers waterfront", note: "Hospitality, redevelopment, professional services" },
    { name: "Ridge Hill / north Yonkers", note: "Retail, healthcare, services" },
    { name: "Lower Westchester", note: "Trades, healthcare, small business" },
  ],

  // TAX STACK — grid-3 + stack-8 cards (cobalt). Figures from the live tax card.
  // (H2: Yonkers sales tax, at a glance.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax in Yonkers &mdash; 4% New York State + 4% Westchester County + 0.375% MCTD + a 0.5% Yonkers city tax. The same rate as NYC and the highest in Westchester (most of the county is 8.375%). Tracked and reconciled in QuickBooks for an accurate quarterly NYS return." },
    { figure: "1", desc: "Web File return &mdash; New York centralizes filing, so however many jurisdictions you sell into, you file one NYS sales-tax return. Destination-based: you charge the rate where the customer takes delivery." },
    { figure: "$110", desc: "Clothing &amp; footwear under $110 per item are exempt from the 4% state rate statewide; Westchester County&rsquo;s local share may still apply. We flag taxable-vs-exempt so the books are right." },
  ],
  taxNote: "Yonkers tax figures are educational and current as of the review date, verified against the New York State Department of Taxation and Finance. Yonkers carries no NYC Unincorporated Business Tax and no Commercial Rent Tax (both are NYC-only). TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file NY State or NYC tax returns.",

  // INDUSTRIES — Yonkers verticals (checks-list). Links to the NY industry pages, each
  // with a one-line Yonkers-specific local wrinkle.
  // (H2: Industry-specific bookkeeping for Yonkers businesses.)
  industries: [
    { label: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/", note: "POS deposits reconciled against the 8.875% rate, tipped-employee payroll, food vs. alcohol sales tax" },
    { label: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", note: "Yonkers medical, dental, and specialty practices &mdash; insurance-receipt reconciliation and multi-provider payroll" },
    { label: "Construction", href: "/find-an-accountant/new-york/industries/construction/", note: "contractors and trades &mdash; job costing, WIP schedules, retainage, and prevailing-wage payroll" },
    { label: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", note: "Westchester investors, brokerages, and property managers &mdash; multi-entity ledgers and trust accounting" },
    { label: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", note: "IOLTA trust accounting in a separate QuickBooks ledger and NY Rules of Professional Conduct compliance" },
    { label: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/", note: "CHAR500-ready workpapers, functional expense allocation, and grant revenue recognition" },
  ],

  // SERVICES — value stack (grid-2 buyer-cards). The 4 frozen H3s, verbatim.
  // (H2: Complete bookkeeping, locally aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with Yonkers sales tax tracked.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books? We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your quarterly NYS sales-tax return reconciles cleanly at the correct 8.875% Yonkers rate.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NY sales tax help &rarr;" },
  ],

  // ADVISORY — mission block. STANDING brand line is the H2.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "For a Yonkers business, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s charging the right 8.875% sales-tax rate, not over-worrying about NYC taxes that don&rsquo;t apply, handling Yonkers residency correctly in payroll, and knowing your real margins. That judgment is what a named Yonkers bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NY State Dept of Taxation &amp; Finance &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: Yonkers bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Yonkers business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Yonkers and lower Westchester. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Yonkers tax position, including the 8.875% rate and the absence of NYC business taxes, that a generic bookkeeper often gets wrong." },
    { q: "What is the Yonkers sales tax rate?", a: "Yonkers&rsquo; combined sales tax is 8.875% &mdash; 4% New York State, 4% Westchester County, 0.375% MCTD, and a 0.5% Yonkers city tax. That matches New York City&rsquo;s rate and is the highest in Westchester; most other Westchester municipalities are 8.375%. New York is destination-based, so you charge the rate where your customer takes delivery, and you file one NYS Web File return. We track the correct rate in QuickBooks so your quarterly return reconciles." },
    { q: "Does Yonkers have the NYC Unincorporated Business Tax or Commercial Rent Tax?", a: "No &mdash; and this is the key Yonkers distinction. Even though Yonkers matches NYC&rsquo;s 8.875% sales-tax rate, it is a Westchester city, not a NYC borough, so the Unincorporated Business Tax (UBT) and Commercial Rent Tax (CRT) &mdash; both NYC-only &mdash; do not apply. A Yonkers business deals with the 8.875% sales tax plus standard New York State and federal income taxes, with no separate city-level business tax." },
    { q: "Why is the Yonkers sales tax rate higher than the rest of Westchester?", a: "Yonkers adds a 0.5% municipal sales tax on top of the 8.375% rate that applies across most of Westchester County (4% state + 4% county + 0.375% MCTD), bringing the Yonkers total to 8.875%. It&rsquo;s a small difference that&rsquo;s easy to get wrong &mdash; charging 8.375% in Yonkers means short-remitting, while charging 8.875% elsewhere in Westchester means overcharging customers. We make sure the right rate is applied and reconciled." },
    { q: "How much does a Yonkers bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. We scope transparently before any work begins, so there are no surprises." },
    { q: "Can you clean up a messy Yonkers QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Yonkers businesses fall behind in their books for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you work with Yonkers retail, healthcare, and contractors?", a: "Yes &mdash; those are core Yonkers verticals, alongside professional services and nonprofits. Each has specific needs: contractors need job costing, healthcare practices need insurance-receipt and payroll reconciliation, and retailers need deposits reconciled against the correct 8.875% rate. See our New York industry pages for the detail." },
    { q: "How do we get started in Yonkers?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Yonkers situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/yonkers/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Yonkers Bookkeeper & QuickBooks Accountant","description":"QuickBooks ProAdvisor bookkeeping for Yonkers, NY businesses. 8.875% sales tax tracked, no NYC UBT or Commercial Rent Tax. Fixed-fee, CPA-ready. Westchester County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-yonkers.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-yonkers-summary","#ny-yonkers-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"Yonkers"}]},
        {"@type":"Service","@id":url+"#service","name":"Yonkers Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Yonkers and Westchester County businesses, with the city's 8.875% sales tax tracked and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Yonkers","sameAs":"https://en.wikipedia.org/wiki/Yonkers,_New_York"},
          {"@type":"AdministrativeArea","name":"Westchester County, New York"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Yonkers and Westchester businesses — retail, restaurants, healthcare, construction, real estate, professional services, legal, and nonprofits"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
