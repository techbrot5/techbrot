/* /find-an-accountant/new-york/cities/staten-island/ — t-location CITY CHILD (NY
 * city child; lighter than the new-york.njk pillar). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-statenisland.txt) — the ONLY authority for the headings + the 8 FAQ — and
 * the live baseline old HTML (find-an-accountant/new-york/cities/staten-island/index.html,
 * full body read) for body prose/section content. Data-file shape mirrors
 * brooklyn.11tydata.js: JSON front-matter lives in the .njk; this file supplies the
 * content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, or clients on this page. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this city child renders NO review-card and NO AggregateRating. Staten Island
 * tax figures (8.875% sales tax; 4% UBT after $95K, credit ≤$3,400; NO Commercial Rent
 * Tax — Manhattan-only south of 96th St, so it does NOT apply on Staten Island) verified
 * Jun 2026 vs NYC DoF + NY DTF. No founder/personal name in visible content (firm-level
 * review byline only). Independent firm — does NOT file NY/NYC taxes; coordinates with
 * the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full Staten Island summary
  // prose moved out of the in-brief, which keeps only a brief lead-in). (H2: The short version.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Staten Island businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Staten Island businesses pay NYC&rsquo;s <strong>8.875% combined sales tax</strong> and, if unincorporated, the <strong>4% Unincorporated Business Tax</strong> (after a $95,000 gross-income threshold, with a credit that fully offsets UBT of $3,400 or less) &mdash; but the <strong>Commercial Rent Tax does not apply on Staten Island</strong> (it&rsquo;s Manhattan-only, south of 96th Street). We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> &mdash; $400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+. Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: Staten Island bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Staten Island businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Staten Island</strong> &mdash; construction and trades, family-owned businesses, healthcare, professional services, and neighborhood retail from St. George to the South Shore &mdash; with a named bookkeeper per file and fluency in the NYC taxes that affect Staten Island businesses." },
    { q: "What taxes affect a Staten Island business?", a: "The <strong>8.875% NYC combined sales tax</strong> and, for unincorporated businesses, the <strong>4% UBT</strong>. The <strong>Commercial Rent Tax does not apply on Staten Island</strong> &mdash; it&rsquo;s limited to Manhattan south of 96th Street, so a Staten Island business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Contractors with job-costing needs are scoped transparently before any work begins." },
    { q: "Do Staten Island businesses owe Commercial Rent Tax?", a: "<strong>No.</strong> The CRT applies only to commercial tenants in Manhattan south of 96th Street. A Staten Island business &mdash; in St. George, Mid-Island, the South Shore, anywhere in the borough &mdash; does not owe it. A Staten Island lease never triggers the CRT." },
    { q: "Do you work with contractors and the trades?", a: "Yes &mdash; construction and the trades are central to Staten Island&rsquo;s economy, so job costing is core to what we do here. We track costs job by job, keep contractor books clean, and produce the lender- or bonding-ready records contracting work demands, all structured so the UBT and sales tax are fast for your CPA to file." },
  ],

  // LOCAL CONTEXT — the un-clonable band (verbatim/enriched body prose from the live
  // baseline). Real Staten Island: Richmond County, NYC's most suburban borough;
  // construction/trades density, family business, healthcare, neighborhood retail; NO CRT.
  // (H2: Why Staten Island books have their own character.)
  localContext: [
    "Staten Island shares New York City&rsquo;s taxes but stands apart as its most suburban borough &mdash; a base of construction and the trades, family-owned businesses, healthcare, and neighborhood retail, and the books have to reflect that.",
    "Staten Island is the city&rsquo;s most suburban borough &mdash; Richmond County &mdash; and its business base looks the part: a strong concentration of construction firms and the trades, family-owned small businesses, a sizable healthcare sector, professional-services practices, and neighborhood retail along commercial corridors from St. George to the South Shore. Construction and contracting in particular define a large share of the borough&rsquo;s small-business activity &mdash; work that lives or dies on accurate job costing. The bookkeeping spans project-based contractors, owner-operated service businesses, and standard retail collecting the 8.875% rate.",
    "That profile is exactly what generic, software-only bookkeeping serves poorly. A contractor needs costs tracked job by job &mdash; not lumped together &mdash; or there&rsquo;s no way to know which work actually made money, and no clean file when a lender or bonding company asks. A family business needs books solid enough to qualify for financing or plan a succession. A retailer needs deposits reconciled against the 8.875% sales-tax rate so the quarterly return is right. And every unincorporated Staten Island business needs its books structured for the UBT &mdash; a tax many owners first hear about via a notice. TechBrot keeps a named bookkeeper on your file who understands a Staten Island contractor keeps books differently than a Manhattan office.",
    "The result: books that reflect how a Staten Island business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the UBT and sales tax is fast and accurate, and the Commercial Rent Tax you don&rsquo;t owe never enters the picture.",
  ],

  // AREAS — across the borough (verbatim names/notes from the live area grid).
  // (H2: Staten Island areas we serve.)
  areas: [
    { name: "St. George / North Shore", note: "Professional services, retail, ferry-corridor business" },
    { name: "Mid-Island", note: "Construction, trades, healthcare, retail" },
    { name: "South Shore", note: "Family-owned business, services, retail" },
    { name: "Hylan Boulevard corridor", note: "Retail, restaurants, neighborhood commerce" },
    { name: "Industrial / West Shore", note: "Contractors, logistics, light industry" },
    { name: "Borough-wide", note: "Construction, healthcare, nonprofits" },
  ],

  // TAX STACK — grid-3 + stack-8 (figures verbatim from the live tax card).
  // (H2: Staten Island's tax stack, at a glance.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax &mdash; the citywide NYC rate (4% state + 4.5% city + 0.375% MCTD), the same across all five boroughs. Tracked and reconciled in QuickBooks for an accurate quarterly return." },
    { figure: "4%", desc: "Unincorporated Business Tax on sole proprietors, partnerships &amp; LLCs doing business in NYC &mdash; applies once gross income tops $95,000; a credit fully offsets it when UBT owed is $3,400 or less. Filed on NYC-202/204 by your CPA." },
    { figure: "$0", desc: "Commercial Rent Tax on Staten Island &mdash; the CRT applies only to Manhattan south of 96th Street, so Staten Island tenants don&rsquo;t owe it. One less NYC tax to track than a Manhattan business." },
  ],
  taxNote: "Staten Island tax figures are educational and current as of the review date, verified against the NYC Department of Finance and NY DTF. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file NY State or NYC tax returns.",

  // INDUSTRIES — Staten Island verticals (checks-list). Links to the NY industry pages,
  // each with a one-line Staten Island-specific local wrinkle.
  // (H2: Industry-specific bookkeeping for Staten Island businesses.)
  industries: [
    { label: "Construction", href: "/find-an-accountant/new-york/industries/construction/", note: "contractors and the trades &mdash; job costing, WIP schedules, retainage, and lender- or bonding-ready records, the borough&rsquo;s core vertical" },
    { label: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", note: "Staten Island medical, dental, and specialty practices &mdash; payer reconciliation, multi-provider payroll" },
    { label: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/", note: "Hylan Boulevard and neighborhood dining &mdash; POS deposits reconciled against the 8.875% rate, tipped-employee payroll" },
    { label: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", note: "borough investors, brokerages, and property managers &mdash; multi-entity ledgers and trust accounting" },
    { label: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", note: "IOLTA trust accounting in a separate QuickBooks ledger and NY Rules of Professional Conduct compliance" },
    { label: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/", note: "CHAR500-ready workpapers, functional expense allocation, and grant revenue recognition" },
  ],

  // SERVICES — value stack (grid-2 buyer-cards). The 4 frozen H3s, verbatim.
  // (H2: Complete bookkeeping, Staten Island-aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with NYC sales tax tracked.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Staten Island books fall behind fast. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "04", title: "UBT &amp; sales-tax-ready books", body: "Books structured so your CPA can file the NYC UBT and quarterly sales tax accurately.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
  ],

  // ADVISORY — mission block. STANDING brand line is the H2.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "For a Staten Island contractor or family business, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing which jobs actually made money, whether the file will pass a bonding or lender review, or how the business hands to the next generation. That judgment is what a named Staten Island bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYC Dept of Finance &amp; NY DTF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: Staten Island bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Staten Island business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Staten Island &mdash; North Shore professional services, Mid-Island and South Shore family businesses, contractors and trades borough-wide. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month, with full fluency in the NYC taxes that affect Staten Island businesses." },
    { q: "What taxes does a Staten Island business pay?", a: "A Staten Island business pays New York City&rsquo;s 8.875% combined sales tax (the same rate across all five boroughs) and, if it&rsquo;s unincorporated &mdash; a sole proprietor, partnership, or LLC &mdash; the 4% Unincorporated Business Tax once gross income tops $95,000. The Commercial Rent Tax does not apply on Staten Island; it&rsquo;s limited to Manhattan south of 96th Street. So a Staten Island business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "Do Staten Island businesses owe the Commercial Rent Tax?", a: "No. The NYC Commercial Rent Tax applies only to commercial tenants located in Manhattan south of the center line of 96th Street. Businesses on Staten Island &mdash; along with Brooklyn, Queens, and the Bronx &mdash; are not subject to it. A Staten Island lease never triggers the CRT." },
    { q: "Do I owe the NYC Unincorporated Business Tax (UBT) on Staten Island?", a: "Possibly &mdash; it depends on size and structure. The UBT is a 4% NYC tax on net business income for sole proprietors, single-member LLCs, partnerships, and multi-member LLCs doing business in the city, including Staten Island. It only kicks in once gross income exceeds $95,000, and there&rsquo;s a credit that fully offsets the UBT when the tax owed is $3,400 or less (partial up to $5,400) &mdash; so many smaller Staten Island businesses owe little or nothing. We keep the books structured so the real number is clear for your CPA to file on the NYC-202 or NYC-204." },
    { q: "How much does a Staten Island bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Contractors with job-costing needs are scoped transparently before any work begins." },
    { q: "Do you work with Staten Island contractors and the trades?", a: "Yes &mdash; construction and the trades are central to Staten Island&rsquo;s economy, so job costing is core to what we do here. We track costs job by job, keep contractor books clean, and produce the lender- or bonding-ready records that contracting work demands &mdash; so each job&rsquo;s profitability is clear and the file holds up to scrutiny." },
    { q: "Can you clean up a messy Staten Island QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Staten Island businesses fall behind for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started on Staten Island?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Staten Island situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/staten-island/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Staten Island Bookkeeper & QuickBooks Accountant","description":"QuickBooks ProAdvisor bookkeeping for Staten Island businesses. 8.875% sales tax & UBT tracked, no Commercial Rent Tax. Fixed-fee, CPA-ready, borough-wide.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/staten-island-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-statenisland-summary","#ny-statenisland-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"New York City","item":"https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/"},
          {"@type":"ListItem","position":6,"name":"Staten Island"}]},
        {"@type":"Service","@id":url+"#service","name":"Staten Island Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Staten Island businesses across the borough's construction, trades, healthcare, professional-services, and retail economy, with NYC sales tax and UBT tracked and CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"AdministrativeArea","name":"Staten Island, New York","sameAs":"https://en.wikipedia.org/wiki/Staten_Island"},
          {"@type":"City","name":"New York City","sameAs":"https://en.wikipedia.org/wiki/New_York_City"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Staten Island businesses — construction and trades, family-owned firms, healthcare, professional services, real estate, restaurants, legal, and nonprofits"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
