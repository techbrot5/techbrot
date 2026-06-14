/* /find-an-accountant/new-york/cities/manhattan/ — t-location CITY CHILD (the CRT-zone
 * borough; the genuine Manhattan differentiator carries the page). Sources: FROZEN EQUITY
 * CONTRACT (contract-ny-manhattan.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/cities/manhattan/index.html,
 * full body read) for body prose/section content. Data-file shape mirrors
 * brooklyn.11tydata.js: JSON front-matter lives in the .njk; this file supplies the
 * content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList(6), Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * CONTENT-TO-GOAL (T6): the REAL Manhattan content preserved + enriched — New York County;
 * the 8.875% sales tax; the 4% UBT; and the genuine Manhattan differentiator, the
 * COMMERCIAL RENT TAX (CRT), which applies ONLY to commercial tenants in Manhattan south
 * of 96th St (effective ~3.9% on base rent, $250K threshold, full small-business credit
 * under $5M income / $500K rent). Real sectors: financial services, agencies (ASC 606
 * gross-vs-net), law firms (IOLTA). All CRT/UBT/sales-tax facts web-verified Jun 2026
 * (NYC.gov DoF, CR-Q instructions). Not a mad-lib — bespoke to the borough.
 *
 * HONESTY (R5): no invented reviews, stats, or clients on this page. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this city child renders NO review-card and NO AggregateRating. No
 * founder/personal name in visible content (firm-level review byline only); David
 * Westgate appears ONLY as reviewedBy @id in schema. Independent firm — does NOT file
 * NY/NYC taxes (including CRT/UBT); coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full Manhattan summary prose
  // moved out of the in-brief, which keeps only a brief lead-in). (H2: The short version.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Manhattan businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Manhattan (New York County) carries all three NYC business taxes: the <strong>8.875% combined sales tax</strong>, the <strong>4% Unincorporated Business Tax</strong> (for unincorporated businesses, after a $95,000 gross-income threshold), and &mdash; uniquely &mdash; the <strong>Commercial Rent Tax</strong>, which applies only to commercial tenants in <strong>Manhattan south of 96th Street</strong> (an effective ~3.9% on base rent at $250,000+ a year, with a full small-business credit below $5M income and $500K rent). The other four boroughs don&rsquo;t owe CRT; Manhattan does. We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> &mdash; $400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+. Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: Manhattan bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Manhattan businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Manhattan</strong> &mdash; the Financial District, Midtown, the Upper East and West Sides &mdash; with a named bookkeeper per file and fluency in all three NYC taxes that hit Manhattan." },
    { q: "What taxes affect a Manhattan business?", a: "The <strong>8.875% sales tax</strong>, the <strong>4% UBT</strong> for unincorporated businesses, and the <strong>Commercial Rent Tax</strong> &mdash; the one NYC tax that applies <strong>only</strong> in Manhattan south of 96th Street (effective ~3.9% on base rent at $250K+)." },
    { q: "Does my Manhattan business owe Commercial Rent Tax?", a: "Only if you&rsquo;re a commercial tenant <strong>south of 96th Street paying $250,000+ in annual base rent</strong>. A small-business credit fully exempts businesses with income under $5M and rent under $500K. We track base rent so your CPA can file it accurately." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Manhattan businesses with CRT exposure or higher transaction volume are scoped transparently before any work begins." },
    { q: "Do you work with finance, tech, and professional services?", a: "Yes &mdash; core Manhattan verticals. Tech startups on Midtown or Downtown leases often have CRT exposure; finance and professional-services firms need clean partner reporting, and agencies need ASC 606 gross-vs-net handled. We build all of it into the monthly close." },
  ],

  // LOCAL CONTEXT — the un-clonable band (verbatim body prose from the live baseline).
  // (H2: Why Manhattan books carry an extra layer.)
  localContext: [
    "Manhattan shares the citywide sales tax and UBT with the other boroughs &mdash; but it&rsquo;s the one borough still inside the Commercial Rent Tax zone, and that single fact changes how a Manhattan business&rsquo;s books have to be kept.",
    "Manhattan is the densest commercial market in the country &mdash; finance and professional services, a deep tech and startup base, media and advertising, hospitality, retail, and medical practices, stacked into the highest commercial rents in the city. Most of that activity happens south of 96th Street, which is precisely the zone where the Commercial Rent Tax still applies. So on top of the 8.875% sales tax and the 4% UBT that every borough deals with, a Manhattan tenant paying serious rent has a third NYC tax in play &mdash; one that&rsquo;s assessed on base rent, owed regardless of whether the business turned a profit, and easy to overlook until a notice arrives.",
    "That third layer is exactly what generic, software-only bookkeeping misses. A tech startup that just signed a Midtown lease after a raise can cross the CRT threshold without realizing it. A growing professional-services firm needs base rent tracked cleanly so its CPA can claim the right credit instead of overpaying. An agency billing media buys needs ASC 606 gross-vs-net treatment right, or revenue is off by multiples. A retailer needs deposits reconciled against the 8.875% rate at the same time. And every unincorporated Manhattan business still has the UBT to structure for. TechBrot keeps a named bookkeeper on your file who knows a Manhattan business carries one more tax than a business across the river in Brooklyn.",
    "The result: books that reflect how a Manhattan business actually operates &mdash; sales tax, UBT, and the base-rent records the CRT turns on &mdash; reconciled every month and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a>, so every NYC filing is fast, accurate, and claims every credit you&rsquo;re owed.",
  ],

  // AREAS — across the borough; each name a real H3 (no demotion). Verbatim from the live area grid.
  // (H2: Manhattan businesses we keep clean. + 6 H3s)
  areas: [
    { name: "Financial District &amp; Downtown", note: "Finance, legal, tech &mdash; high-rent leases squarely in the CRT zone" },
    { name: "Midtown", note: "Corporate offices, professional services, media, hospitality" },
    { name: "Flatiron / Chelsea / NoMad", note: "Tech startups, agencies, showrooms, restaurants" },
    { name: "SoHo / Tribeca / Village", note: "Retail, creative firms, hospitality, medical" },
    { name: "Upper East &amp; West Sides", note: "Medical practices, professional services, neighborhood retail" },
    { name: "Above 96th / Upper Manhattan", note: "Harlem, Washington Heights &mdash; outside the CRT zone, sales tax &amp; UBT still apply" },
  ],

  // TAX STACK — plain grid-3 + stack-8 (NOT proof-strip). Manhattan is CRT-POSITIVE: the
  // 3rd cell is the headline (3.9% effective), not a $0 footnote. Figures verbatim from the live tax card.
  // (H2: Manhattan's tax stack — three layers, not two.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax &mdash; the citywide NYC rate (4% state + 4.5% city + 0.375% MCTD), the same across all five boroughs. Tracked and reconciled in QuickBooks for an accurate quarterly return." },
    { figure: "4%", desc: "Unincorporated Business Tax on sole proprietors, partnerships &amp; LLCs doing business in NYC &mdash; applies once gross income tops $95,000; a credit fully offsets it when UBT owed is $3,400 or less. Filed on NYC-202/204 by your CPA." },
    { figure: "3.9%", desc: "<strong>Commercial Rent Tax &mdash; Manhattan only, south of 96th Street.</strong> Effective ~3.9% on base rent (6% on 65% after a 35% reduction), at $250,000+ annual base rent. Full small-business credit under $5M income &amp; $500K rent. The one NYC tax the other boroughs don&rsquo;t have." },
  ],
  taxNote: "Manhattan tax figures are educational and current as of the review date, verified against the NYC Department of Finance and NY DTF. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file NY State or NYC tax returns (including the CRT and UBT).",

  // CRT EXPLAINER — bespoke Manhattan section; each step a real H3 (no demotion).
  // Verbatim from the live CRT value-stack. (H2: The Commercial Rent Tax, explained. + 4 H3s)
  crtLede: "It&rsquo;s the one NYC tax that exists in only one place. If you rent commercial space in Manhattan south of 96th Street, here&rsquo;s what determines whether you owe it &mdash; and what we track so your CPA can file it right.",
  crt: [
    { title: "Where it applies", body: "Only commercial tenants in Manhattan <strong>south of the center line of 96th Street</strong>. Brooklyn, Queens, the Bronx, Staten Island, and Manhattan above 96th are all exempt &mdash; the CRT was repealed everywhere else decades ago." },
    { title: "What the rate really is", body: "The statutory rate is <strong>6% of base rent</strong>, but a <strong>35% reduction</strong> means it&rsquo;s assessed on 65% of rent &mdash; an <strong>effective rate of about 3.9%</strong>. It&rsquo;s based on base rent, so it&rsquo;s owed whether or not the business is profitable." },
    { title: "The thresholds &amp; credits", body: "It applies at <strong>$250,000+ in annualized base rent</strong> (a return is required once gross rent tops $200,000). A <strong>small-business credit fully exempts</strong> tenants with total income of $5M or less and rent no more than $500K; rents between $250K&ndash;$300K get a sliding-scale partial credit." },
    { title: "What we do about it", body: "We track your base rent (and any subtenant income that reduces it) cleanly in QuickBooks, flag when you&rsquo;re approaching the threshold, and hand your CPA the records to file the CR-Q and claim every credit you qualify for. <strong>We track; your CPA files.</strong>" },
  ],
  crtNote: "The CRT is filed by your CPA on NYC form CR-Q (quarterly) and the annual return; TechBrot is a bookkeeping and QuickBooks ProAdvisor firm and does not file tax returns or represent clients before the tax authorities.",

  // INDUSTRIES — Manhattan verticals (lighter chips-list). Links to the NY industry pages,
  // each with a one-line Manhattan-specific local wrinkle. Real sectors per the contract.
  // (H2: Built for Manhattan's core sectors.)
  industries: [
    { label: "Financial Services", href: "/find-an-accountant/new-york/industries/consulting/", note: "funds, advisors, and finance firms &mdash; clean partner reporting and the books structured for the UBT" },
    { label: "Agencies &amp; Media", href: "/find-an-accountant/new-york/sales-tax-help/", note: "ASC 606 gross-vs-net revenue recognition on media buys, plus 8.875% sales tax on taxable services" },
    { label: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", note: "IOLTA trust accounting in a separate QuickBooks ledger and NY Rules of Professional Conduct compliance" },
    { label: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", note: "investors, brokerages, and property managers &mdash; multi-entity ledgers and base-rent records for CRT" },
    { label: "Restaurants &amp; Hospitality", href: "/find-an-accountant/new-york/industries/restaurant/", note: "POS deposits reconciled against the 8.875% rate, tipped-employee payroll, food vs. alcohol sales tax" },
    { label: "Medical &amp; Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", note: "Manhattan medical, dental, and specialty practices &mdash; payer reconciliation, multi-provider payroll" },
  ],

  // SERVICES — value stack (grid-2 buyer-cards). The 4 frozen H3s, verbatim.
  // (H2: Everything your Manhattan books need, one expert. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every account categorized and reconciled, a clean chart of accounts, and monthly CPA-ready statements.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "NY monthly bookkeeping &rarr;" },
    { num: "02", title: "CRT base-rent tracking", body: "Base rent and subtenant offsets tracked so your CPA can file the CR-Q and claim the right credit &mdash; the Manhattan-specific layer.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "03", title: "Sales tax &amp; UBT structuring", body: "8.875% reconciled for the quarterly return; books structured so the UBT number is clear for filing.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
    { num: "04", title: "Cleanup &amp; year-end handoff", body: "Behind or messy? We get the file CPA-ready, then keep it clean and hand it to your CPA at year-end.", href: "/find-an-accountant/new-york/quickbooks-cleanup/", cta: "NY QuickBooks cleanup &rarr;" },
  ],

  // ADVISORY — mission block. STANDING brand line is the H2.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "Software can import a transaction, but it can&rsquo;t tell you a new Midtown lease just pushed you over the Commercial Rent Tax threshold, that a credit could wipe out the bill, or that your UBT exposure is climbing. In the most expensive commercial market in the country, that judgment is the difference between overpaying NYC taxes and claiming every credit you&rsquo;re owed &mdash; and it&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO engagement</a> extends once your books are clean.",

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYC Dept of Finance &amp; NY DTF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: Manhattan bookkeeping questions.)
  faq: [
    { q: "Do you provide bookkeeping for Manhattan businesses?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Manhattan &mdash; from the Financial District and Midtown to the Upper East and West Sides. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month, with full fluency in the three NYC taxes that hit Manhattan businesses: the 8.875% sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax." },
    { q: "What is the Manhattan sales tax rate?", a: "8.875% combined &mdash; 4% New York State, 4.5% New York City, and 0.375% MCTD. It is the same rate across all five boroughs, including Manhattan. New York is destination-based, so you charge the rate where your customer takes delivery, and you file one NYS Web File sales-tax return. We track it in QuickBooks so your quarterly return reconciles to the books." },
    { q: "What is the NYC Commercial Rent Tax and does my Manhattan business owe it?", a: "The Commercial Rent Tax (CRT) applies only to commercial tenants in Manhattan south of the center line of 96th Street &mdash; it is the one part of New York City where this tax still exists. The statutory rate is 6% of base rent, but a 35% reduction means it applies to 65% of rent, for an effective rate of about 3.9%. It kicks in at $250,000 or more in annualized base rent (a return is required once gross rent exceeds $200,000). A small-business credit fully exempts tenants with total income of $5 million or less who pay no more than $500,000 in annual rent, and a sliding-scale credit partially offsets rents between $250,000 and $300,000. We track base rent in QuickBooks so your CPA can determine and file the CRT accurately." },
    { q: "Why does Manhattan have the Commercial Rent Tax when the other boroughs don&rsquo;t?", a: "The CRT was a citywide tax decades ago but has been repealed everywhere except Manhattan south of 96th Street. Businesses in Brooklyn, Queens, the Bronx, and Staten Island do not owe it, and neither do businesses in Manhattan north of 96th Street. So a Manhattan business below 96th Street tracks one more NYC tax than a comparable business in any other borough &mdash; which is exactly why getting the base-rent records right matters here." },
    { q: "Do I owe the NYC Unincorporated Business Tax (UBT) in Manhattan?", a: "Possibly &mdash; it depends on size and structure. The UBT is a 4% NYC tax on net business income for sole proprietors, single-member LLCs, partnerships, and multi-member LLCs doing business in the city, including Manhattan. It applies once gross income exceeds $95,000, and a credit fully offsets the UBT when the tax owed is $3,400 or less (partial up to $5,400), so many smaller Manhattan businesses owe little or nothing. We keep the books structured so the real number is clear for your CPA to file on the NYC-202 or NYC-204." },
    { q: "How much does a Manhattan bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Manhattan businesses with CRT exposure or higher transaction volume are scoped transparently before any work begins." },
    { q: "Can you clean up a messy Manhattan QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Manhattan businesses fall behind for the usual reasons: growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including reconciling base-rent records for CRT and sales-tax accruals &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you work with Manhattan professional services, tech, and retail?", a: "Yes &mdash; those are core Manhattan verticals, alongside finance, media, hospitality, and medical practices. Each has specific needs: professional-services and finance firms need clean partner reporting, tech startups need investor-ready books and often have CRT exposure on Midtown or Downtown leases, and retailers need deposits reconciled against the 8.875% rate. See our New York industry pages for the detail." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/manhattan/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Manhattan QuickBooks Bookkeeping · TechBrot","description":"Certified QuickBooks ProAdvisor bookkeeping for Manhattan businesses: the 8.875% combined sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax — which applies only in Manhattan south of 96th Street — tracked and reconciled to a CPA-ready standard.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/manhattan-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-manhattan-summary","#ny-manhattan-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"New York City","item":"https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/"},
          {"@type":"ListItem","position":6,"name":"Manhattan"}]},
        {"@type":"Service","@id":url+"#service","name":"Manhattan Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Manhattan businesses, with the 8.875% NYC sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax (applicable only in Manhattan south of 96th Street) tracked and reconciled, and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns (including the CRT and UBT) — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"AdministrativeArea","name":"Manhattan (New York County), New York","sameAs":"https://en.wikipedia.org/wiki/Manhattan"},
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Manhattan businesses — financial services, agencies and media, law firms, real estate, restaurants and hospitality, healthcare, and professional services"},
          "offers":[
            {"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping — typical range $400–$2,500+/mo, fixed-fee against a written scope."},
            {"@type":"Offer","priceCurrency":"USD","price":"1500","description":"One-time QuickBooks/bookkeeping cleanup — typical range $1,500–$15,000+, fixed-fee against a written scope."}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
