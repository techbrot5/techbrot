/* /find-an-accountant/indiana/cities/ — t-location HUB (Indiana cities index; lists/
 * routes to the 8 IN city pages). LIGHTER than the indiana.njk pillar. Data shape mirrors
 * the NY/DE cities hubs: JSON front-matter lives in the .njk; this file supplies the content
 * arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage · BreadcrumbList ·
 * ItemList of the city pages · FAQPage).
 *
 * HONEST THROUGH-LINE: your city doesn't change the service — your COUNTY changes the tax.
 * Indiana's state income tax (flat 2.95% in 2026) and sales tax (flat 7%, no local add-ons)
 * are statewide and identical everywhere. The genuinely city-to-city variable is the COUNTY
 * LOCAL INCOME TAX (LIT): all 92 counties levy their own LIT rate, set by the taxpayer's
 * county of residence on Jan 1, withheld via Form WH-4. NEVER quote a specific county %
 * (not verified in IN-FACTS) — frame qualitatively + link the DOR county-rate page.
 *
 * HONESTY (R5): no invented figures (only IN-FACTS); NO street address (areaServed-only — IN
 * is an areaServed anchor, no LocalBusiness/PostalAddress/geo); no reviews rendered on the hub;
 * no AggregateRating. No founder/personal name in visible content — firm byline only.
 * Independent firm; does NOT file Indiana returns; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // COVERAGE, PLAINLY — real-H2 section carrying the one-paragraph summary. (H2: Indiana coverage, plainly.)
  coverage: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping across all of Indiana</strong> &mdash; dedicated pages for <a href=\"/find-an-accountant/indiana/cities/indianapolis/\">Indianapolis</a>, <a href=\"/find-an-accountant/indiana/cities/fort-wayne/\">Fort Wayne</a>, <a href=\"/find-an-accountant/indiana/cities/evansville/\">Evansville</a>, <a href=\"/find-an-accountant/indiana/cities/south-bend/\">South Bend</a>, <a href=\"/find-an-accountant/indiana/cities/carmel/\">Carmel</a>, <a href=\"/find-an-accountant/indiana/cities/fishers/\">Fishers</a>, <a href=\"/find-an-accountant/indiana/cities/bloomington/\">Bloomington</a>, and <a href=\"/find-an-accountant/indiana/cities/hammond/\">Hammond</a>, plus full service in all 92 counties. Because the work happens in your cloud <a href=\"/quickbooks/online/\">QuickBooks</a> file, your city doesn&rsquo;t change the service &mdash; but your county and local economy change the details. Indiana taxes income at a <strong>flat 2.95%</strong> (2026) and sales at a <strong>flat 7% with no local add-ons</strong>, the same everywhere &mdash; but <strong>all 92 counties levy their own local income tax (LIT)</strong>, set by your county of residence on January 1 and withheld through Form WH-4. We bring the right county and local context wherever you are, fixed-fee, by a named ProAdvisor. We deliver the books; your CPA files. Not affiliated with Intuit Inc.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana coverage, in five questions.)
  aiSummary: [
    { q: "Which Indiana cities does TechBrot serve?", a: "<strong>All 92 Indiana counties</strong> &mdash; every city and town &mdash; delivered remotely. Dedicated pages for Indianapolis, Fort Wayne, Evansville, South Bend, Carmel, Fishers, Bloomington, and Hammond; the same service and named ProAdvisor statewide." },
    { q: "Do I need a bookkeeper in my exact Indiana city?", a: "<strong>Not physically</strong> &mdash; the work is in your cloud QuickBooks file. What matters is Indiana fluency: the flat 2.95% state income tax, the flat 7% sales tax with no local add-ons, and your county&rsquo;s local income tax (LIT)." },
    { q: "Does my Indiana city change my taxes?", a: "<strong>Your county does.</strong> The state income tax (2.95%) and sales tax (7%) are statewide and identical everywhere. But all 92 counties set their own local income tax (LIT) rate, determined by your county of residence on January 1 &mdash; that is what changes county to county." },
    { q: "What is the county local income tax (LIT)?", a: "<strong>A county-level income tax every Indiana county levies on top of the 2.95% state rate.</strong> Your rate is set by your county of residence on Jan 1, withheld via Form WH-4, and is the same for residents and nonresidents. We apply the correct county rate in payroll." },
    { q: "How do I start in my Indiana city?", a: "Book a free discovery call. We review your QuickBooks file and your county&rsquo;s LIT specifics, then send a written fixed-fee proposal within 3 business days." },
  ],

  // FEATURED CITIES — 8 dedicated-page markets (rel-card grid). Each H3 links to its city page.
  // (H2: Cities with dedicated pages. + 8 H3s)
  featured: [
    { num: "01", eyebrow: "Marion County", heading: "Indianapolis bookkeeping", href: "/find-an-accountant/indiana/cities/indianapolis/", body: "The state capital and Indiana&rsquo;s largest metro &mdash; the FedEx logistics superhub, Eli Lilly life sciences, insurance, and healthcare, on Marion County&rsquo;s LIT.", area: "Marion County", cta: "Indianapolis &rarr;" },
    { num: "02", eyebrow: "Allen County", heading: "Fort Wayne bookkeeping", href: "/find-an-accountant/indiana/cities/fort-wayne/", body: "Indiana&rsquo;s 2nd-largest city &mdash; advanced and defense manufacturing, insurance legacy, and healthcare, on Allen County&rsquo;s LIT.", area: "Allen County", cta: "Fort Wayne &rarr;" },
    { num: "03", eyebrow: "Vanderburgh County", heading: "Evansville bookkeeping", href: "/find-an-accountant/indiana/cities/evansville/", body: "The Southwest Indiana / Ohio River tri-state hub &mdash; manufacturing, river logistics, and healthcare, on Vanderburgh County&rsquo;s LIT.", area: "Vanderburgh County", cta: "Evansville &rarr;" },
    { num: "04", eyebrow: "St. Joseph County", heading: "South Bend bookkeeping", href: "/find-an-accountant/indiana/cities/south-bend/", body: "The Michiana hub and home of Notre Dame &mdash; healthcare, education, tech startups, and advanced manufacturing, on St. Joseph County&rsquo;s LIT.", area: "St. Joseph County", cta: "South Bend &rarr;" },
    { num: "05", eyebrow: "Hamilton County", heading: "Carmel bookkeeping", href: "/find-an-accountant/indiana/cities/carmel/", body: "An affluent, fast-growing Indy suburb &mdash; dense corporate-HQ, finance, and professional-services base, on Hamilton County&rsquo;s LIT (shared with Fishers).", area: "Hamilton County", cta: "Carmel &rarr;" },
    { num: "06", eyebrow: "Hamilton County", heading: "Fishers bookkeeping", href: "/find-an-accountant/indiana/cities/fishers/", body: "A fast-growing Indy tech hub &mdash; Launch Fishers, IT/software, professional services, and life sciences, on Hamilton County&rsquo;s LIT (shared with Carmel).", area: "Hamilton County", cta: "Fishers &rarr;" },
    { num: "07", eyebrow: "Monroe County", heading: "Bloomington bookkeeping", href: "/find-an-accountant/indiana/cities/bloomington/", body: "Indiana University&rsquo;s flagship town &mdash; a large university economy plus life sciences and med-device manufacturing, on Monroe County&rsquo;s LIT.", area: "Monroe County", cta: "Bloomington &rarr;" },
    { num: "08", eyebrow: "Lake County", heading: "Hammond bookkeeping", href: "/find-an-accountant/indiana/cities/hammond/", body: "Northwest Indiana &mdash; &ldquo;The Region,&rdquo; part of the Chicago metro &mdash; heavy industry, rail logistics, and Chicago-adjacent small business, on Lake County&rsquo;s LIT.", area: "Lake County", cta: "Hammond &rarr;" },
  ],

  // WHY LOCATION — context prose. (H2: Your city doesn't change the service — your county changes the tax.)
  why: [
    "The bookkeeping itself happens in your QuickBooks file, so it travels &mdash; a named ProAdvisor delivers the same monthly close whether you&rsquo;re in Indianapolis or Hammond. Two of Indiana&rsquo;s major taxes are the same everywhere: income is taxed at a <strong>flat 2.95%</strong> for 2026 (no brackets), and sales at a <strong>flat 7% statewide with no county or city add-ons</strong>. That single clean sales-tax rate makes QuickBooks setup simpler than in layered-tax states.",
    "The genuine Indiana wrinkle is the <strong>county local income tax (LIT)</strong>. All 92 counties levy their own LIT rate on top of the state rate, and the rate that applies is set by the taxpayer&rsquo;s <strong>county of residence on January 1</strong> &mdash; withheld through <strong>Form WH-4</strong>, the same rate for residents and nonresidents. So a Marion County employer, a Hamilton County firm in Carmel or Fishers, and a Lake County business in Hammond each withhold a different county rate, and a new WH-4 is needed when an employee moves or changes work county. Get that wrong and payroll and the county return drift apart.",
    "That local judgment &mdash; knowing which county rate applies to each employee, and building the books around <em>your</em> city&rsquo;s real economy &mdash; is where the value lives. <a href=\"/find-an-accountant/indiana/\">Back to the Indiana overview &rarr;</a>",
  ],

  // MORE TOWNS — served without a dedicated page (non-link chips) + county context.
  // (H2: We serve these too — and everywhere between.)
  servedTowns: [
    { name: "Noblesville", county: "Hamilton County" },
    { name: "Greenwood", county: "Johnson County" },
    { name: "Lafayette", county: "Tippecanoe County" },
    { name: "West Lafayette", county: "Tippecanoe County" },
    { name: "Muncie", county: "Delaware County" },
    { name: "Terre Haute", county: "Vigo County" },
    { name: "Kokomo", county: "Howard County" },
    { name: "Anderson", county: "Madison County" },
    { name: "Elkhart", county: "Elkhart County" },
    { name: "Columbus", county: "Bartholomew County" },
    { name: "Gary", county: "Lake County" },
    { name: "Mishawaka", county: "St. Joseph County" },
  ],
  countyProse: "Beyond the dedicated city pages, TechBrot serves businesses in all 92 Indiana counties &mdash; the Central Indiana metro (<strong>Marion</strong> plus the donut counties <strong>Hamilton</strong>, Hendricks, Johnson, Boone, Hancock), the Northeast (<strong>Allen</strong> / Fort Wayne), the Northwest &ldquo;Region&rdquo; (<strong>Lake</strong> and Porter, part of the Chicago metro), North-Central Michiana (<strong>St. Joseph</strong> / South Bend, Elkhart), the Southwest Ohio-River tri-state (<strong>Vanderburgh</strong> / Evansville), and South-Central university country (<strong>Monroe</strong> / Bloomington, Tippecanoe / West Lafayette). Remote, fixed-fee service reaches every county in between &mdash; each with its own local income tax rate we apply.",
  moreNote: "Don&rsquo;t see your town? All 92 Indiana counties are served via remote engagement delivery &mdash; same fixed fee, same named ProAdvisor. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=city-index&amp;funnel_stage=MOFU\">Talk to us &rarr;</a>",

  // FAQ — 6 Q/A, answer-first. visible faq = FAQPage schema (same array). (H2: Indiana coverage questions.)
  faq: [
    { q: "Which Indiana cities does TechBrot serve?", a: "TechBrot serves businesses across all 92 Indiana counties &mdash; every city and town &mdash; delivered remotely on QuickBooks. We have dedicated pages for the largest markets (Indianapolis, Fort Wayne, Evansville, South Bend, Carmel, Fishers, Bloomington, and Hammond), but the service, cadence, and named ProAdvisor are the same wherever your business sits in Indiana." },
    { q: "Do I need a bookkeeper in my specific Indiana city?", a: "Not physically &mdash; the work happens in your QuickBooks file, which is cloud-based, so your city doesn&rsquo;t change the service. What matters is Indiana fluency: the flat 2.95% state income tax, the flat 7% sales tax with no local add-ons, and your county&rsquo;s local income tax (LIT). We bring that regardless of which Indiana city you&rsquo;re in." },
    { q: "Does the Indiana city I&rsquo;m in change my taxes?", a: "Your county does, more than your city. Indiana&rsquo;s state income tax (a flat 2.95% in 2026) and sales tax (a flat 7% statewide, with no county or city add-ons) are identical everywhere. What varies is the county local income tax (LIT): all 92 counties set their own rate, and the rate that applies is determined by your county of residence on January 1. We track the county rate where your employees live and work." },
    { q: "What is the Indiana county local income tax (LIT)?", a: "It&rsquo;s a county-level income tax that every Indiana county levies on top of the 2.95% state rate. The rate is set by the taxpayer&rsquo;s county of residence on January 1 (or, for an out-of-state resident, their principal Indiana work county), withheld through Form WH-4, and is the same for residents and nonresidents. Because each county&rsquo;s rate differs and rates change, we apply the correct current county rate from the Indiana DOR list rather than quoting a fixed figure." },
    { q: "How do I get started in my Indiana city?", a: "Book a free discovery call, or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will pick up. We review your QuickBooks file and your situation &mdash; including your county&rsquo;s LIT withholding &mdash; and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope, wherever in Indiana you are." },
    { q: "What if my Indiana town doesn&rsquo;t have a dedicated page yet?", a: "You&rsquo;re still fully covered. The dedicated pages exist for the largest Indiana markets, but coverage is statewide &mdash; all 92 counties, every city and town. If your town isn&rsquo;t listed &mdash; a Tippecanoe County business in Lafayette, a Vigo County shop in Terre Haute, an Elkhart County manufacturer &mdash; the service, fixed-fee model, and named ProAdvisor are identical; the discovery call covers your county&rsquo;s LIT and the tax specifics of your exact location." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, NO founder name. (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor certifications &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, county-LIT withholding setup, sales-tax tracking, advisory &middot; Indiana return filing coordinated with your CPA or EA" },
    { label: "Indiana coverage", detail: "All 92 counties served remotely &middot; Central, Northeast, Northwest, Michiana, Southwest, and South-Central Indiana" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; does not file Indiana returns &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — 4 next-step cards. (H2: Where to go next. + 4 H3s)
  related: [
    { name: "Indiana QuickBooks Accountant", href: "/find-an-accountant/indiana/quickbooks-accountant/", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, county-LIT withholding, and sales tax statewide.", cta: "QuickBooks accountant &rarr;" },
    { name: "Indiana County Income Tax Help", href: "/find-an-accountant/indiana/county-income-tax-help/", body: "The 92-county LIT withholding matrix set up so the right county rate applies and payroll reconciles.", cta: "County income tax help &rarr;" },
    { name: "Indiana Bookkeeping Services", href: "/find-an-accountant/indiana/bookkeeping-services/", body: "Monthly bookkeeping, cleanup, and catch-up by a named Certified ProAdvisor.", cta: "Bookkeeping services &rarr;" },
    { name: "Indiana Pricing", href: "/find-an-accountant/indiana/pricing/", body: "Fixed-fee ranges across every service &mdash; written scope before any work.", cta: "See pricing &rarr;" },
  ],

  // ITEMLIST for schema — the 8 dedicated IN city pages.
  cityList: [
    { name: "Indianapolis QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/indianapolis/" },
    { name: "Fort Wayne QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/fort-wayne/" },
    { name: "Evansville QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/evansville/" },
    { name: "South Bend QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/south-bend/" },
    { name: "Carmel QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/carmel/" },
    { name: "Fishers QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/fishers/" },
    { name: "Bloomington QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/bloomington/" },
    { name: "Hammond QuickBooks Accountant & Bookkeeper · TechBrot", url: "https://techbrot.com/find-an-accountant/indiana/cities/hammond/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cities/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"CollectionPage","@id":url+"#webpage","url":url,"name":"Indiana Cities We Serve","description":"Certified QuickBooks ProAdvisor bookkeeping for businesses across Indiana — Indianapolis, Fort Wayne, Evansville, South Bend, Carmel, Fishers, Bloomington, Hammond, and all 92 counties, delivered remotely and fixed-fee. Flat 2.95% state income tax, 7% sales tax, and each county's local income tax (LIT).","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-cities.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-cities-in-brief-text","#in-cities-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":url+"#citylist","name":"Indiana cities served","itemListElement":data.cityList.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":c.name,"url":c.url};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
