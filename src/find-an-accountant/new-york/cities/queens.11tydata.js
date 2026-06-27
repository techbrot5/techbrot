/* /find-an-accountant/new-york/cities/queens/ — t-location CITY CHILD (NY city
 * child; lighter than the new-york.njk pillar). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-queens.txt) — the ONLY authority for the headings + the 8 FAQ — and
 * the live baseline old HTML (find-an-accountant/new-york/cities/queens/index.html,
 * full body read) for body prose/section content. Data-file shape mirrors
 * brooklyn.11tydata.js: JSON front-matter lives in the .njk; this file supplies the
 * content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * CONTENT-TO-GOAL (T6): the REAL Queens specifics from the baseline are preserved and
 * enriched — Queens County (NYC borough); the most diverse county in the US; ~34,400
 * small businesses; immigrant- and family-owned density (Flushing, Jackson Heights,
 * Elmhurst, Corona); the Long Island City corridor (tech/creative + manufacturing);
 * JFK + LaGuardia and the air-cargo/logistics economy around them; lowest storefront
 * vacancy of the major boroughs. Real specificity, not a mad-lib.
 *
 * HONESTY (R5): no invented reviews, stats, or clients on this page. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this city child renders NO review-card and NO AggregateRating. Queens tax
 * figures (8.875% sales tax; 4% UBT after $95K, credit ≤$3,400; NO Commercial Rent Tax
 * — Manhattan-only south of 96th St) verified Jun 2026 vs NYC DoF + NY DTF. No
 * founder/personal name in visible content (firm-level review byline only). Independent
 * firm — does NOT file NY/NYC taxes; coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full Queens summary prose
  // moved out of the in-brief, which keeps only a brief lead-in). (H2: The short version.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Queens businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Queens businesses pay NYC&rsquo;s <strong>8.875% combined sales tax</strong> and, if unincorporated, the <strong>4% Unincorporated Business Tax</strong> (after a $95,000 gross-income threshold, with a credit that fully offsets UBT of $3,400 or less) &mdash; but the <strong>Commercial Rent Tax does not apply in Queens</strong> (it&rsquo;s Manhattan-only, south of 96th Street). We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> &mdash; $400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+. Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: Queens bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Queens businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Queens</strong> &mdash; from Long Island City to Flushing, Astoria to Jamaica &mdash; with a named bookkeeper per file and fluency in the NYC taxes that affect Queens businesses." },
    { q: "What taxes affect a Queens business?", a: "The <strong>8.875% NYC combined sales tax</strong> and, for unincorporated businesses, the <strong>4% UBT</strong>. The <strong>Commercial Rent Tax does not apply in Queens</strong> &mdash; it&rsquo;s limited to Manhattan south of 96th Street, so a Queens business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Queens businesses are scoped transparently before any work begins." },
    { q: "Do Queens businesses owe Commercial Rent Tax?", a: "<strong>No.</strong> The CRT applies only to commercial tenants in Manhattan south of 96th Street. A Queens business &mdash; in LIC, Flushing, Astoria, anywhere in the borough &mdash; does not owe it." },
    { q: "Do you work with immigrant- and family-owned businesses?", a: "Yes &mdash; Queens is the most diverse county in the United States, and family- and immigrant-owned firms are the backbone of its economy. We keep clear, CPA-ready books so the business is set up to grow and to borrow." },
  ],

  // LOCAL CONTEXT — the un-clonable band (Queens-specific body prose from the live
  // baseline, preserved and enriched: diversity, ~34,400 small businesses, LIC corridor,
  // JFK/LaGuardia air-cargo + logistics, low storefront vacancy).
  // (H2: Why Queens books have their own character.)
  localContext: [
    "Queens shares New York City&rsquo;s taxes but stands apart as the city&rsquo;s most diverse small-business borough &mdash; a dense mix of immigrant- and family-owned firms, a fast-growing Long Island City corridor, and neighborhood commercial districts that operate in dozens of languages.",
    "Queens County is, by most counts, the most ethnically diverse county in the United States, and it shows in the books. The borough is home to roughly 34,400 small businesses &mdash; third among the boroughs &mdash; and they look different from anywhere else in the city. Greater Flushing has the largest Chinese, Korean, Taiwanese, and Thai business communities in NYC, with more than half the area&rsquo;s population foreign-born; Jackson Heights, Elmhurst, and Corona run on Latin American and South Asian family enterprise; and Long Island City has become a magnet for tech, creative, and commercial tenants while keeping a real manufacturing base. Astoria, Jamaica, and Forest Hills anchor dense neighborhood commerce, and Queens has the lowest storefront vacancy of the major boroughs &mdash; these are working main streets.",
    "Queens is also where the city&rsquo;s air economy lives. JFK and LaGuardia sit inside the borough, and the freight-forwarders, customs brokers, ground-handling and air-cargo operators, logistics and warehousing firms, and the hospitality businesses that ring both airports carry their own bookkeeping wrinkles &mdash; high transaction volume, accrued-vs-billed timing, multi-currency vendors, and 1099 contractor sprawl. Long Island City&rsquo;s makers and small manufacturers add inventory and cost-of-goods on top.",
    "That profile is exactly what generic, software-only bookkeeping serves poorly. A family-owned restaurant or retailer needs clean books to qualify for a loan or a lease &mdash; not a shoebox of receipts. A multilingual, cash-and-card business needs deposits reconciled against the 8.875% sales-tax rate so the quarterly return is right. An LIC startup or maker needs investor-ready statements and clean inventory. A logistics or air-cargo firm near JFK needs its receivables and contractor payments tracked accurately. And every unincorporated Queens business needs its books structured for the UBT &mdash; a tax many owners first hear about via a notice. TechBrot keeps a named bookkeeper on your file who understands a Queens family business is built differently than a Manhattan corporate office.",
    "The result: books that reflect how a Queens business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the UBT and sales tax is fast and accurate, and the Commercial Rent Tax you don&rsquo;t owe never enters the picture.",
  ],

  // AREAS — across the borough (verbatim names/notes from the live area grid).
  // (H2: Queens areas we serve.)
  areas: [
    { name: "Long Island City", note: "Tech, creative, commercial, professional services, and small manufacturing" },
    { name: "Astoria", note: "Restaurants, hospitality, retail, small business" },
    { name: "Flushing", note: "Multilingual retail, restaurants, professional services" },
    { name: "Jackson Heights / Elmhurst", note: "Family-owned retail, food, immigrant enterprise" },
    { name: "Jamaica", note: "Retail, services, nonprofits, trades &mdash; and the JFK logistics corridor" },
    { name: "Forest Hills / Bayside", note: "Professional services, medical, retail" },
  ],

  // TAX STACK — grid-3 + stack-8 stat cards. Figures verbatim from the live tax card.
  // (H2: Queens's tax stack, at a glance.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax &mdash; the citywide NYC rate (4% state + 4.5% city + 0.375% MCTD), the same across all five boroughs. Tracked and reconciled in QuickBooks for an accurate quarterly return." },
    { figure: "4%", desc: "Unincorporated Business Tax on sole proprietors, partnerships &amp; LLCs doing business in NYC &mdash; applies once gross income tops $95,000; a credit fully offsets it when UBT owed is $3,400 or less. Filed on NYC-202/204 by your CPA." },
    { figure: "$0", desc: "Commercial Rent Tax in Queens &mdash; the CRT applies only to Manhattan south of 96th Street, so Queens tenants don&rsquo;t owe it. One less NYC tax to track than a Manhattan business." },
  ],
  taxNote: "Queens tax figures are educational and current as of the review date, verified against the NYC Department of Finance and NY DTF. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file NY State or NYC tax returns.",

  // INDUSTRIES — Queens verticals (checks-list). Links to the NY industry pages,
  // each with a one-line Queens-specific local wrinkle.
  // (H2: Industry-specific bookkeeping for Queens businesses.)
  industries: [
    { label: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/", note: "cash-and-card POS deposits reconciled against the 8.875% rate, tipped-employee payroll, food vs. alcohol sales tax" },
    { label: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", note: "borough investors, brokerages, and property managers &mdash; multi-entity ledgers and trust accounting" },
    { label: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", note: "Queens medical, dental, and specialty practices &mdash; payer reconciliation, multi-provider payroll" },
    { label: "Construction", href: "/find-an-accountant/new-york/industries/construction/", note: "contractors and trades &mdash; job costing, WIP schedules, retainage, and prevailing-wage payroll" },
    { label: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", note: "IOLTA trust accounting in a separate QuickBooks ledger and NY Rules of Professional Conduct compliance" },
    { label: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/", note: "CHAR500-ready workpapers, functional expense allocation, and grant revenue recognition" },
  ],

  // SERVICES — value stack (grid-2 buyer-cards). The 4 frozen H3s, verbatim.
  // (H2: Complete bookkeeping, Queens-aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with NYC sales tax tracked.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "High-volume Queens books fall behind fast. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "04", title: "UBT &amp; sales-tax-ready books", body: "Books structured so your CPA can file the NYC UBT and quarterly sales tax accurately.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
  ],

  // ADVISORY — mission block. STANDING brand line is the H2.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "For a Queens family business, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s having books clean enough to qualify for a loan, a lease, or the next location, and knowing your real margins across a cash-and-card operation. For an LIC maker or a logistics firm near JFK, it&rsquo;s knowing which product line or contract actually makes money. That judgment is what a named Queens bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYC Dept of Finance &amp; NY DTF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: Queens bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Queens business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Queens &mdash; Long Island City, Astoria, Flushing, Jackson Heights, Jamaica, and neighborhoods borough-wide. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month, with full fluency in the NYC taxes that affect Queens businesses." },
    { q: "What taxes does a Queens business pay?", a: "A Queens business pays New York City&rsquo;s 8.875% combined sales tax (the same rate across all five boroughs) and, if it&rsquo;s unincorporated &mdash; a sole proprietor, partnership, or LLC &mdash; the 4% Unincorporated Business Tax once gross income tops $95,000. The Commercial Rent Tax does not apply in Queens; it&rsquo;s limited to Manhattan south of 96th Street. So a Queens business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "Do Queens businesses owe the Commercial Rent Tax?", a: "No. The NYC Commercial Rent Tax applies only to commercial tenants in Manhattan south of the center line of 96th Street. Businesses in Queens &mdash; along with Brooklyn, the Bronx, and Staten Island &mdash; are not subject to it. A Queens lease never triggers the CRT." },
    { q: "Do I owe the NYC Unincorporated Business Tax (UBT) in Queens?", a: "Possibly &mdash; it depends on size and structure. The UBT is a 4% NYC tax on net business income for sole proprietors, single-member LLCs, partnerships, and multi-member LLCs doing business in the city, including Queens. It only kicks in once gross income exceeds $95,000, and there&rsquo;s a credit that fully offsets the UBT when the tax owed is $3,400 or less (partial up to $5,400) &mdash; so many smaller Queens businesses owe little or nothing. We keep the books structured so the real number is clear for your CPA to file on the NYC-202 or NYC-204." },
    { q: "How much does a Queens bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. We scope transparently before any work begins, so there are no surprises." },
    { q: "Can you clean up a messy Queens QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Queens businesses fall behind for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean. Clean books also matter when a family business applies for a loan or a new lease." },
    { q: "Do you work with immigrant- and family-owned Queens businesses?", a: "Yes &mdash; family- and immigrant-owned businesses are the backbone of Queens, across restaurants, retail, services, and trades. We keep clear, CPA-ready books &mdash; often the difference in qualifying for financing or a lease &mdash; and reconcile cash-and-card operations against the 8.875% sales-tax rate so the quarterly return is right. See our New York industry pages for the detail." },
    { q: "How do we get started in Queens?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Queens situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/queens/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Queens Bookkeeper & QuickBooks Accountant","description":"QuickBooks ProAdvisor bookkeeping for Queens businesses — LIC to Flushing. 8.875% sales tax & UBT tracked, no Commercial Rent Tax. Fixed-fee, CPA-ready.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-queens.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-queens-summary","#ny-queens-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"New York City","item":"https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/"},
          {"@type":"ListItem","position":6,"name":"Queens"}]},
        {"@type":"Service","@id":url+"#service","name":"Queens Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Queens businesses across the borough's diverse, immigrant-led small-business economy and the JFK/LaGuardia logistics corridor, with NYC sales tax and UBT tracked and CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"AdministrativeArea","name":"Queens, New York","sameAs":"https://en.wikipedia.org/wiki/Queens"},
          {"@type":"City","name":"New York City","sameAs":"https://en.wikipedia.org/wiki/New_York_City"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Queens businesses — immigrant- and family-owned firms, restaurants, retail, LIC tech and makers, real estate, healthcare, legal, nonprofits, and the JFK/LaGuardia logistics economy"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
