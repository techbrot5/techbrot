/* /find-an-accountant/new-york/cities/ — t-location HUB (NY cities index; lists/routes
 * to the NY city pages). LIGHTER than the new-york.njk pillar. Sources: FROZEN EQUITY
 * CONTRACT (contract-ny-cities.txt) — the ONLY authority for the headings + 5 FAQ — and
 * the live baseline old HTML (find-an-accountant/new-york/cities/index.html, full body
 * read) for body prose/city list. Data-file shape mirrors new-york.11tydata.js: JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage · BreadcrumbList ·
 * ItemList of the city pages · FAQPage).
 *
 * COBALT VOCABULARY ONLY (pillar classes; nothing invented): stack-8, buyer-card,
 * grid-2/grid-3, proof-strip (NOT stat-row), faq__list, byline-block, meta-reviewed,
 * section--alt. T6 content-to-goal: the real NY-cities content is preserved + enriched —
 * 5 boroughs vs upstate, county names, NYC UBT/8.875% for NYC boroughs, upstate
 * differences — and every listed city links to its baseline page.
 *
 * HONESTY (R5): no "real outcomes"/specific-client results asserted; no reviews rendered
 * (the contract carries none — only the 2 real Clutch reviews would be permitted, and the
 * lighter hub doesn't need them). No founder/personal name in visible content — firm
 * byline only ("TechBrot Certified ProAdvisor team"). Independent firm; does NOT file
 * NY/NYC taxes; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // COVERAGE, PLAINLY — real-H2 section carrying the one-paragraph summary moved out of the
  // in-brief (which keeps a brief lead-in). (H2: New York coverage, plainly.)
  coverage: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping across all of New York</strong> &mdash; dedicated pages for <a href=\"/find-an-accountant/new-york/cities/new-york-city/\">New York City</a> and the five boroughs, plus <a href=\"/find-an-accountant/new-york/cities/buffalo/\">Buffalo</a>, <a href=\"/find-an-accountant/new-york/cities/rochester/\">Rochester</a>, <a href=\"/find-an-accountant/new-york/cities/albany/\">Albany</a>, Yonkers, and Syracuse, and full service in all 62 counties. Because the work happens in your cloud <a href=\"/quickbooks/online/\">QuickBooks</a> file, your city doesn&rsquo;t change the service &mdash; but it can change your <strong>taxes</strong>: sales tax is destination-based (8.875% in NYC, 8.75% in Buffalo), and NYC adds the <a href=\"/find-an-accountant/new-york/sales-tax-help/\">Unincorporated Business Tax</a> and Commercial Rent Tax. We bring the right local context wherever you are, fixed-fee, by a named ProAdvisor. We deliver the books; your CPA files. Not affiliated with Intuit Inc.",

  // AI SUMMARY — the 5 entity-dense Q&As (verbatim from baseline). (H2: New York coverage, in five questions.)
  aiSummary: [
    { q: "Which New York cities does TechBrot serve?", a: "<strong>All 62 New York counties</strong> &mdash; every city and town &mdash; delivered remotely. Dedicated pages for NYC and the five boroughs, Buffalo, Rochester, Albany, Yonkers, and Syracuse; same service and named ProAdvisor statewide." },
    { q: "Do I need a bookkeeper in my exact city?", a: "<strong>Not physically</strong> &mdash; the work is in your cloud QuickBooks file. What matters is New York tax fluency: NYC&rsquo;s 8.875% and UBT downstate, 8.75% in Buffalo, destination-based sourcing statewide." },
    { q: "Does my city change my taxes?", a: "<strong>It can.</strong> Sales tax varies by jurisdiction (8.875% NYC, 8.75% Buffalo); NYC adds the UBT and, for some Manhattan tenants, the Commercial Rent Tax. We track the rules where you operate." },
    { q: "Is upstate different from NYC?", a: "<strong>Delivery is identical; tax context differs.</strong> Upstate businesses don&rsquo;t face the NYC UBT or Commercial Rent Tax; NYC businesses do. Our city pages reflect those local realities." },
    { q: "How do I start in my city?", a: "Book a free discovery call. We review your file and your city&rsquo;s tax specifics, then send a written fixed-fee proposal within 3 business days." },
  ],

  // FEATURED CITIES — 6 dedicated-page markets (buyer-card grid). Each H3 verbatim from the
  // contract; each links to its baseline city page. (H2: Cities with dedicated pages. + 6 H3s)
  featured: [
    { num: "01", eyebrow: "New York City", heading: "New York City bookkeeping", href: "/find-an-accountant/new-york/cities/new-york-city/", body: "Five-borough coverage; NYC sales tax (8.875%), the Unincorporated Business Tax &amp; the Commercial Rent Tax.", area: "All five boroughs", cta: "New York City &rarr;" },
    { num: "02", eyebrow: "Brooklyn", heading: "Brooklyn bookkeeping", href: "/find-an-accountant/new-york/cities/brooklyn/", body: "Restaurants, retail, creative &amp; ecommerce across Brooklyn &mdash; downstate NYC rates and UBT exposure.", area: "Kings County", cta: "Brooklyn &rarr;" },
    { num: "03", eyebrow: "Buffalo", heading: "Buffalo bookkeeping", href: "/find-an-accountant/new-york/cities/buffalo/", body: "Western New York&rsquo;s largest market &mdash; 8.75% combined sales tax, no NYC UBT or Commercial Rent Tax.", area: "Erie County", cta: "Buffalo &rarr;" },
    { num: "04", eyebrow: "Rochester", heading: "Rochester bookkeeping", href: "/find-an-accountant/new-york/cities/rochester/", body: "Finger Lakes hub &mdash; manufacturing, healthcare, and professional services on the upstate rate base.", area: "Monroe County", cta: "Rochester &rarr;" },
    { num: "05", eyebrow: "Albany", heading: "Albany bookkeeping", href: "/find-an-accountant/new-york/cities/albany/", body: "The Capital Region &mdash; government-adjacent and professional firms; upstate tax context, no UBT.", area: "Albany County", cta: "Albany &rarr;" },
    { num: "06", eyebrow: "Yonkers", heading: "Yonkers bookkeeping", href: "/find-an-accountant/new-york/cities/yonkers/", body: "NYC-adjacent Westchester businesses on downstate rates &mdash; inside the MTA Commuter District.", area: "Westchester County", cta: "Yonkers &rarr;" },
  ],

  // WHY LOCATION — context block (mission-block prose carried verbatim, enriched).
  // (H2: Your city doesn't change the service — it changes the tax.)
  why: [
    "The bookkeeping itself happens in your QuickBooks file, so it travels &mdash; a named ProAdvisor delivers the same monthly close whether you&rsquo;re in Manhattan or Plattsburgh. What changes across New York is the tax landscape underneath it. Sales tax is destination-based and varies by jurisdiction; New York City layers on the Unincorporated Business Tax and, for some Manhattan tenants, the Commercial Rent Tax; upstate markets carry none of that but have their own combined rates.",
    "That&rsquo;s why our city pages aren&rsquo;t interchangeable templates &mdash; each reflects the real rules and industries of the place. As routine bookkeeping commoditizes, that local judgment is exactly where the value lives: knowing which New York rule applies to a business in <em>your</em> city, and building the books around it.",
    "<a href=\"/find-an-accountant/new-york/\">Back to the New York overview &rarr;</a>",
  ],

  // MORE CITIES — additional dedicated pages + a routing link. Boroughs + Syracuse.
  // (H2: We serve these too — and everywhere between.)
  moreCities: [
    { href: "/find-an-accountant/new-york/cities/queens/", name: "Queens", county: "Queens County" },
    { href: "/find-an-accountant/new-york/cities/bronx/", name: "The Bronx", county: "Bronx County" },
    { href: "/find-an-accountant/new-york/cities/staten-island/", name: "Staten Island", county: "Richmond County" },
    { href: "/find-an-accountant/new-york/cities/syracuse/", name: "Syracuse", county: "Onondaga County" },
  ],
  // County context — preserved local detail (5 boroughs + a representative upstate sample).
  countyProse: "Beyond the dedicated city pages, TechBrot serves businesses in every New York county &mdash; the five NYC boroughs (New York/Manhattan, Kings/Brooklyn, Queens, Bronx, Richmond/Staten Island), the downstate suburbs (Nassau, Suffolk, Westchester, Rockland, Putnam &mdash; inside the MTA Commuter District), and across upstate: Erie (Buffalo), Monroe (Rochester), Onondaga (Syracuse), Albany, Oneida, Broome, Dutchess, Orange, Ulster, Saratoga, Rensselaer, Schenectady, Tompkins, Niagara, Chautauqua, Jefferson, St. Lawrence, and the rest of the 62. Downstate carries NYC&rsquo;s 8.875% rate, the UBT, and the MTA surcharge; upstate counties run their own combined rates and skip the NYC city-tax layer entirely.",
  moreNote: "Don&rsquo;t see your city? All 62 New York counties are served via remote engagement delivery, same fixed fee and named ProAdvisor. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=city-index&amp;funnel_stage=MOFU\">Talk to us &rarr;</a>",

  // FAQ — 5 Q/A VERBATIM from the contract. visible = FAQPage schema. Enrichment append-only.
  // (H2: New York coverage questions.)
  faq: [
    { q: "Which New York cities does TechBrot serve?", a: "TechBrot serves businesses across all 62 New York counties &mdash; every city and town in the state &mdash; delivered remotely on QuickBooks. We have dedicated pages for the largest markets (New York City and all five boroughs, Buffalo, Rochester, Albany, Yonkers, Syracuse), but the service, cadence, and named ProAdvisor are the same wherever your business sits in New York." },
    { q: "Do I need a bookkeeper in my specific New York city?", a: "Not physically &mdash; the work happens in your QuickBooks file, which is cloud-based, so your city doesn&rsquo;t change the service. What matters is New York tax fluency: NYC&rsquo;s 8.875% sales tax and UBT downstate, the 8.75% rate in Buffalo, destination-based sourcing statewide. We bring that regardless of which New York city you&rsquo;re in." },
    { q: "Does the New York city I&rsquo;m in change my taxes?", a: "It can. Sales tax is destination-based and varies by jurisdiction &mdash; 8.875% in NYC, 8.75% in Buffalo, different combined rates by county. NYC adds the Unincorporated Business Tax and, for some Manhattan tenants, the Commercial Rent Tax. We track the rates and rules specific to where your business and customers are." },
    { q: "Is service different in upstate New York versus NYC?", a: "The delivery is identical &mdash; remote, fixed-fee, named ProAdvisor &mdash; but the tax context differs. Upstate businesses don&rsquo;t face the NYC UBT or Commercial Rent Tax, while NYC businesses do. Our city pages reflect those local realities so the books are built for where you actually operate." },
    { q: "How do I get started in my New York city?", a: "Book a free discovery call. We review your QuickBooks file and your situation &mdash; including the tax specifics of your New York city &mdash; and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope, wherever in New York you are." },
    { q: "What if my New York city doesn&rsquo;t have a dedicated page yet?", a: "You&rsquo;re still fully covered. The dedicated pages exist for the largest New York markets, but coverage is statewide &mdash; all 62 counties, every city and town. If your city isn&rsquo;t listed, the service, fixed-fee model, and named ProAdvisor are identical; the discovery call covers the tax specifics of your exact location, whether that&rsquo;s a Hudson Valley town, the North Country, or a Finger Lakes county." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, NO founder name. (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor certifications" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, payroll, sales-tax tracking, advisory &middot; income-tax filing coordinated with your CPA or EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — 4 next-step cards. Each H3 verbatim from the contract. (H2: Where to go next. + 4 H3s)
  related: [
    { name: "New York QuickBooks Accountant", href: "/find-an-accountant/new-york/quickbooks-accountant/", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, payroll, and NYC sales tax statewide.", cta: "QuickBooks accountant &rarr;" },
    { name: "New York Bookkeeping Services", href: "/find-an-accountant/new-york/bookkeeping-services/", body: "Monthly bookkeeping, cleanup, and catch-up by a named bookkeeper.", cta: "Bookkeeping services &rarr;" },
    { name: "New York Sales Tax Help", href: "/find-an-accountant/new-york/sales-tax-help/", body: "Destination-based rates, economic nexus, and quarterly filing &mdash; tracked in your books.", cta: "Sales tax help &rarr;" },
    { name: "New York Pricing", href: "/find-an-accountant/new-york/pricing/", body: "Fixed-fee ranges across every service &mdash; written scope before any work.", cta: "See pricing &rarr;" },
  ],

  // ITEMLIST for schema — the 10 dedicated NY city pages (matches baseline ItemList order).
  cityList: [
    { name: "New York City Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/" },
    { name: "Brooklyn Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/brooklyn/" },
    { name: "Buffalo Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/buffalo/" },
    { name: "Rochester Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/rochester/" },
    { name: "Albany Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/albany/" },
    { name: "Yonkers Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/yonkers/" },
    { name: "Queens Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/queens/" },
    { name: "The Bronx Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/bronx/" },
    { name: "Staten Island Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/staten-island/" },
    { name: "Syracuse Bookkeeper & QuickBooks Accountant", url: "https://techbrot.com/find-an-accountant/new-york/cities/syracuse/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Cities We Serve","description":"Certified QuickBooks ProAdvisor bookkeeping for businesses across New York — New York City and all five boroughs, Buffalo, Rochester, Albany, Yonkers, Syracuse, and all 62 counties, delivered remotely and fixed-fee.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-cities-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-cities-in-brief-text","#ny-cities-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":url+"#citylist","name":"New York cities served","itemListElement":data.cityList.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":c.name,"url":c.url};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
