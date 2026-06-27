/* /find-an-accountant/new-york/cities/brooklyn/ — t-location CITY CHILD (first NY
 * city child; lighter than the new-york.njk pillar). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-brooklyn.txt) — the ONLY authority for the headings + the 8 FAQ — and
 * the live baseline old HTML (find-an-accountant/new-york/cities/brooklyn/index.html,
 * full body read) for body prose/section content. Data-file shape mirrors
 * new-york.11tydata.js: JSON front-matter lives in the .njk; this file supplies the
 * content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, or clients on this page. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this city child renders NO review-card and NO AggregateRating. Brooklyn tax
 * figures (8.875% sales tax; 4% UBT after $95K, credit ≤$3,400; NO Commercial Rent Tax
 * — Manhattan-only south of 96th St) verified Jun 2026 vs NYC DoF + NY DTF. No
 * founder/personal name in visible content (firm-level review byline only). Independent
 * firm — does NOT file NY/NYC taxes; coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full Brooklyn summary prose
  // moved out of the in-brief, which keeps only a brief lead-in). (H2: The short version.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Brooklyn businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Brooklyn businesses pay NYC&rsquo;s <strong>8.875% combined sales tax</strong> and, if unincorporated, the <strong>4% Unincorporated Business Tax</strong> (after a $95,000 gross-income threshold, with a credit that fully offsets UBT of $3,400 or less) &mdash; but the <strong>Commercial Rent Tax does not apply in Brooklyn</strong> (it&rsquo;s Manhattan-only, south of 96th Street). We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> &mdash; $400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+. Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: Brooklyn bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Brooklyn businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Brooklyn</strong> &mdash; from DUMBO and Downtown tech to Sunset Park makers and neighborhood storefronts &mdash; with a named bookkeeper per file and fluency in the NYC taxes that affect Brooklyn businesses." },
    { q: "What taxes affect a Brooklyn business?", a: "The <strong>8.875% NYC combined sales tax</strong> and, for unincorporated businesses, the <strong>4% UBT</strong>. The <strong>Commercial Rent Tax does not apply in Brooklyn</strong> &mdash; it&rsquo;s limited to Manhattan south of 96th Street, so a Brooklyn business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Brooklyn businesses with high transaction volume or inventory are scoped transparently before any work begins." },
    { q: "Do Brooklyn businesses owe Commercial Rent Tax?", a: "<strong>No.</strong> The CRT applies only to commercial tenants in Manhattan south of 96th Street. A Brooklyn business &mdash; in DUMBO, Williamsburg, Sunset Park, anywhere in the borough &mdash; does not owe it." },
    { q: "Do you work with creative studios and makers?", a: "Yes &mdash; Brooklyn&rsquo;s creative, design, food-production, and small-manufacturing businesses are core to the borough. We keep project-based and inventory-based books clean so the numbers hold up, and structured so the UBT and sales tax are fast for your CPA to file." },
  ],

  // LOCAL CONTEXT — the un-clonable band (verbatim body prose from the live baseline).
  // (H2: Why Brooklyn books have their own character.)
  localContext: [
    "Brooklyn shares New York City&rsquo;s taxes but not its business profile &mdash; it&rsquo;s a borough of creative studios, food and product makers, tech startups, and dense neighborhood commerce, and the books have to reflect that.",
    "Brooklyn is now one of the country&rsquo;s leading hubs of the creative and innovation economy. The DUMBO&ndash;Downtown Brooklyn&ndash;Navy Yard tech triangle is home to over a thousand innovation firms; Williamsburg and Greenpoint run on design studios, agencies, and indie brands; and the Sunset Park waterfront &mdash; Industry City, the Brooklyn Army Terminal, Bush Terminal &mdash; has become a dense corridor of food production, small manufacturing, and craft makers. Add the borough&rsquo;s restaurants, retail, and fast-growing storefronts in Bensonhurst, Borough Park, and Flatbush, and the bookkeeping spans project-based creative work, inventory-heavy makers, and high-volume neighborhood commerce.",
    "That mix is what generic, software-only bookkeeping handles badly. A design studio needs project profitability tracked, not just transactions categorized. A food or product maker needs clean inventory and cost-of-goods, or margins are a guess. A restaurant needs POS deposits reconciled against the 8.875% sales-tax rate. And every unincorporated Brooklyn business needs its books structured for the UBT &mdash; a tax most owners don&rsquo;t know they owe until a notice arrives. TechBrot keeps a named bookkeeper on your file who knows a Brooklyn maker keeps books differently than a Manhattan law firm.",
    "The result: books that reflect how a Brooklyn business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the UBT and sales tax is fast and accurate, and the Commercial Rent Tax you don&rsquo;t owe never enters the picture.",
  ],

  // AREAS — across the borough (verbatim names/notes from the live area grid).
  // (H2: Brooklyn areas we serve.)
  areas: [
    { name: "DUMBO / Downtown Brooklyn", note: "Tech, creative offices, professional services" },
    { name: "Williamsburg / Greenpoint", note: "Design studios, agencies, indie brands, hospitality" },
    { name: "Sunset Park / Industry City", note: "Food production, makers, small manufacturing" },
    { name: "Park Slope / Cobble Hill", note: "Professional services, medical, retail" },
    { name: "Bushwick / Bed-Stuy", note: "Creative, food &amp; beverage, startups" },
    { name: "Bensonhurst / Flatbush", note: "Neighborhood retail, restaurants, trades" },
  ],

  // TAX STACK — proof-strip grid-3 (NOT stat-row). Figures verbatim from the live tax card.
  // (H2: Brooklyn's tax stack, at a glance.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax &mdash; the citywide NYC rate (4% state + 4.5% city + 0.375% MCTD), the same across all five boroughs. Tracked and reconciled in QuickBooks for an accurate quarterly return." },
    { figure: "4%", desc: "Unincorporated Business Tax on sole proprietors, partnerships &amp; LLCs doing business in NYC &mdash; applies once gross income tops $95,000; a credit fully offsets it when UBT owed is $3,400 or less. Filed on NYC-202/204 by your CPA." },
    { figure: "$0", desc: "Commercial Rent Tax in Brooklyn &mdash; the CRT applies only to Manhattan south of 96th Street, so Brooklyn tenants don&rsquo;t owe it. One less NYC tax to track than a Manhattan business." },
  ],
  taxNote: "Brooklyn tax figures are educational and current as of the review date, verified against the NYC Department of Finance and NY DTF. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file NY State or NYC tax returns.",

  // INDUSTRIES — Brooklyn verticals (lighter chips-list). Links to the NY industry pages,
  // each with a one-line Brooklyn-specific local wrinkle.
  // (H2: Industry-specific bookkeeping for Brooklyn businesses.)
  industries: [
    { label: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/", note: "POS deposits reconciled against the 8.875% rate, tipped-employee payroll, food vs. alcohol sales tax" },
    { label: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", note: "borough investors, brokerages, and property managers &mdash; multi-entity ledgers and trust accounting" },
    { label: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", note: "Brooklyn medical, dental, and specialty practices &mdash; payer reconciliation, multi-provider payroll" },
    { label: "Construction", href: "/find-an-accountant/new-york/industries/construction/", note: "contractors and trades &mdash; job costing, WIP schedules, retainage, and prevailing-wage payroll" },
    { label: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", note: "IOLTA trust accounting in a separate QuickBooks ledger and NY Rules of Professional Conduct compliance" },
    { label: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/", note: "CHAR500-ready workpapers, functional expense allocation, and grant revenue recognition" },
  ],

  // SERVICES — value stack (grid-2 buyer-cards). The 4 frozen H3s, verbatim.
  // (H2: Complete bookkeeping, Brooklyn-aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with NYC sales tax tracked.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "High-volume Brooklyn books fall behind fast. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "04", title: "UBT &amp; sales-tax-ready books", body: "Books structured so your CPA can file the NYC UBT and quarterly sales tax accurately.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
  ],

  // ADVISORY — mission block. STANDING brand line is the H2.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "For a Brooklyn maker or studio, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing which product line or client project actually makes money, whether your cost-of-goods is creeping, or if cash will cover the next production run. That judgment is what a named Brooklyn bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYC Dept of Finance &amp; NY DTF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: Brooklyn bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Brooklyn business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Brooklyn &mdash; DUMBO and Downtown tech, Williamsburg and Greenpoint creative, Sunset Park makers, and neighborhood businesses borough-wide. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month, with full fluency in the NYC taxes that affect Brooklyn businesses." },
    { q: "What taxes does a Brooklyn business pay?", a: "A Brooklyn business pays New York City&rsquo;s 8.875% combined sales tax (the same rate across all five boroughs) and, if it&rsquo;s unincorporated &mdash; a sole proprietor, partnership, or LLC &mdash; the 4% Unincorporated Business Tax once gross income tops $95,000. Importantly, the Commercial Rent Tax does not apply in Brooklyn; it&rsquo;s limited to Manhattan south of 96th Street. So a Brooklyn business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "Do Brooklyn businesses owe the Commercial Rent Tax?", a: "No. The NYC Commercial Rent Tax applies only to commercial tenants located in Manhattan south of the center line of 96th Street. Businesses in Brooklyn &mdash; along with Queens, the Bronx, and Staten Island &mdash; are not subject to it. If you&rsquo;re relocating from Manhattan to Brooklyn, that&rsquo;s one NYC tax that drops off entirely." },
    { q: "Do I owe the NYC Unincorporated Business Tax (UBT) in Brooklyn?", a: "Possibly &mdash; it depends on size and structure. The UBT is a 4% NYC tax on net business income for sole proprietors, single-member LLCs, partnerships, and multi-member LLCs doing business in the city, including Brooklyn. It only kicks in once gross income exceeds $95,000, and there&rsquo;s a credit that fully offsets the UBT when the tax owed is $3,400 or less (partial up to $5,400) &mdash; so many smaller Brooklyn businesses owe little or nothing. We keep the books structured so the real number is clear for your CPA to file on the NYC-202 or NYC-204." },
    { q: "How much does a Brooklyn bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Brooklyn businesses with high transaction volume or inventory are scoped transparently before any work begins." },
    { q: "Can you clean up a messy Brooklyn QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Brooklyn businesses fall behind for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean as you scale." },
    { q: "Do you work with Brooklyn creative studios, makers, and restaurants?", a: "Yes &mdash; those are core Brooklyn verticals, alongside real estate, healthcare, and nonprofits. Each has specific needs: creative studios need project-level profitability, food and product makers need clean inventory and cost-of-goods, and restaurants need POS and sales-tax reconciliation. See our New York industry pages for the detail." },
    { q: "How do we get started in Brooklyn?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Brooklyn situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/brooklyn/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Brooklyn Bookkeeper & QuickBooks Accountant","description":"QuickBooks ProAdvisor bookkeeping for Brooklyn businesses — DUMBO to Sunset Park. 8.875% sales tax & UBT tracked, no Commercial Rent Tax. Fixed-fee, CPA-ready.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-brooklyn.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-brooklyn-summary","#ny-brooklyn-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"New York City","item":"https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/"},
          {"@type":"ListItem","position":6,"name":"Brooklyn"}]},
        {"@type":"Service","@id":url+"#service","name":"Brooklyn Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Brooklyn businesses across the borough's creative, maker, and tech economy, with NYC sales tax and UBT tracked and CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"AdministrativeArea","name":"Brooklyn, New York","sameAs":"https://en.wikipedia.org/wiki/Brooklyn"},
          {"@type":"City","name":"New York City","sameAs":"https://en.wikipedia.org/wiki/New_York_City"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Brooklyn businesses — creative studios, food and product makers, tech startups, restaurants, real estate, healthcare, legal, and nonprofits"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
