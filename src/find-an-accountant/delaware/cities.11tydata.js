/* /find-an-accountant/delaware/cities/ — t-location HUB (Delaware cities index; lists/
 * routes to the 6 DE city pages). LIGHTER than the delaware.njk pillar. Data shape mirrors
 * the NY cities hub (new-york/cities.11tydata.js) and the delaware pillar: JSON front-matter
 * lives in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph
 * emitting the schema @graph (WebPage · BreadcrumbList · ItemList of the city pages · FAQPage).
 *
 * HONEST THROUGH-LINE: your city doesn't change the service — it changes the tax/economy.
 * Delaware's tax structure (no sales tax → gross receipts tax on the seller; the annual
 * franchise tax every entity owes) is STATEWIDE and identical in all 3 counties. The one
 * real local-tax difference is Wilmington's 1.25% city wage + net-profits tax — no other
 * Delaware city levies it. What otherwise differs city to city is the local economy.
 *
 * HONESTY (R5): no invented figures (only DE-FACTS); no reviews rendered on the hub (only the
 * 2 real Clutch reviews would be permitted, and they live on the pillar); no AggregateRating.
 * No founder/personal name in visible content — firm byline only. Independent firm; does NOT
 * file Delaware returns or the franchise tax/annual report; coordinates with the client's CPA
 * and registered agent. Office: 651 N Broad St, Suite 201, Middletown, DE 19709. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // COVERAGE, PLAINLY — real-H2 section carrying the one-paragraph summary. (H2: Delaware coverage, plainly.)
  coverage: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping across all of Delaware</strong> &mdash; dedicated pages for <a href=\"/find-an-accountant/delaware/cities/wilmington/\">Wilmington</a>, <a href=\"/find-an-accountant/delaware/cities/dover/\">Dover</a>, <a href=\"/find-an-accountant/delaware/cities/newark/\">Newark</a>, <a href=\"/find-an-accountant/delaware/cities/middletown/\">Middletown</a> (our home office), <a href=\"/find-an-accountant/delaware/cities/smyrna/\">Smyrna</a>, and <a href=\"/find-an-accountant/delaware/cities/bear/\">Bear</a>, plus full service in all three counties. Because the work happens in your cloud <a href=\"/quickbooks/online/\">QuickBooks</a> file, your city doesn&rsquo;t change the service &mdash; but your local economy and one city tax can change the details. Delaware has <strong>no sales tax anywhere</strong>; instead a <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tax</a> falls on the seller, every Delaware entity owes an annual franchise tax, and <strong>only Wilmington adds a 1.25% city wage and net-profits tax</strong>. We bring the right local context wherever you are, fixed-fee, by a named ProAdvisor. We deliver the books; your CPA files. Not affiliated with Intuit Inc.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware coverage, in five questions.)
  aiSummary: [
    { q: "Which Delaware cities does TechBrot serve?", a: "<strong>All three Delaware counties</strong> &mdash; every city and town &mdash; delivered remotely from our Middletown office. Dedicated pages for Wilmington, Dover, Newark, Middletown, Smyrna, and Bear; the same service and named ProAdvisor statewide." },
    { q: "Do I need a bookkeeper in my exact Delaware city?", a: "<strong>Not physically</strong> &mdash; the work is in your cloud QuickBooks file. What matters is Delaware tax fluency: no sales tax to collect, a gross receipts tax on the seller, the annual franchise tax, and Wilmington&rsquo;s 1.25% city wage and net-profits tax." },
    { q: "Does my Delaware city change my taxes?", a: "<strong>Mostly no.</strong> Delaware&rsquo;s tax structure &mdash; no sales tax, gross receipts tax on the seller, and the franchise tax &mdash; is statewide and identical in New Castle, Kent, and Sussex. The one exception is <strong>Wilmington&rsquo;s 1.25% wage and net-profits tax</strong>." },
    { q: "Is Wilmington different from the rest of Delaware?", a: "<strong>For tax, yes.</strong> Only Wilmington levies a 1.25% city wage and net-profits tax. Everywhere else, just the statewide Delaware rules apply &mdash; what differs city to city is the local economy, not the tax." },
    { q: "How do I start in my Delaware city?", a: "Book a free discovery call. We review your QuickBooks file and your city&rsquo;s tax specifics, then send a written fixed-fee proposal within 3 business days." },
  ],

  // FEATURED CITIES — 6 dedicated-page markets (buyer-card grid). Each H3 links to its city page.
  // (H2: Cities with dedicated pages. + 6 H3s)
  featured: [
    { num: "01", eyebrow: "New Castle County", heading: "Wilmington bookkeeping", href: "/find-an-accountant/delaware/cities/wilmington/", body: "Delaware&rsquo;s largest city and finance/corporate corridor &mdash; and the one city with a <strong>1.25% wage and net-profits tax</strong> to handle on top of the statewide rules.", area: "New Castle County", cta: "Wilmington &rarr;" },
    { num: "02", eyebrow: "Kent County", heading: "Dover bookkeeping", href: "/find-an-accountant/delaware/cities/dover/", body: "The state capital &mdash; government, Dover AFB, Delaware State University, and healthcare. No city wage tax; the statewide Delaware structure applies.", area: "Kent County", cta: "Dover &rarr;" },
    { num: "03", eyebrow: "New Castle County", heading: "Newark bookkeeping", href: "/find-an-accountant/delaware/cities/newark/", body: "The University of Delaware town &mdash; student economy, STAR-Campus research, retail, and professional services. No city income tax.", area: "New Castle County", cta: "Newark &rarr;" },
    { num: "04", eyebrow: "New Castle County", heading: "Middletown bookkeeping", href: "/find-an-accountant/delaware/cities/middletown/", body: "TechBrot&rsquo;s home office &mdash; Delaware&rsquo;s fastest-growing town, US-301 logistics and warehousing, retail, and heavy new construction. No city wage tax.", area: "New Castle County", cta: "Middletown &rarr;" },
    { num: "05", eyebrow: "Kent County", heading: "Smyrna bookkeeping", href: "/find-an-accountant/delaware/cities/smyrna/", body: "On the New Castle/Kent line &mdash; a fast-growing bedroom and retail community of small businesses. No city wage tax.", area: "Kent County", cta: "Smyrna &rarr;" },
    { num: "06", eyebrow: "New Castle County", heading: "Bear bookkeeping", href: "/find-an-accountant/delaware/cities/bear/", body: "An unincorporated New Castle County suburb southeast of Wilmington &mdash; retail, services, and residential small business. No city tax.", area: "New Castle County", cta: "Bear &rarr;" },
  ],

  // WHY LOCATION — context prose. (H2: Your city doesn't change the service — it changes the tax.)
  why: [
    "The bookkeeping itself happens in your QuickBooks file, so it travels &mdash; a named ProAdvisor delivers the same monthly close whether you&rsquo;re in Wilmington or Smyrna. What mostly changes across Delaware is the local economy, not the tax. <strong>No sales tax</strong>, a <strong>gross receipts tax</strong> levied on the seller, and the annual <strong>franchise tax</strong> every Delaware entity owes apply the same in all three counties.",
    "The one real local-tax difference is <strong>Wilmington&rsquo;s 1.25% wage and net-profits tax</strong> &mdash; no other Delaware city levies it. Otherwise a Dover government contractor, a Newark business near the University of Delaware, a Middletown distribution warehouse, and a Bear retailer all work under the same Delaware rules; what differs is the mix of industries and how the books are built around them. That local judgment &mdash; knowing which Delaware rule applies to a business in <em>your</em> city &mdash; is where the value lives.",
    "<a href=\"/find-an-accountant/delaware/\">Back to the Delaware overview &rarr;</a>",
  ],

  // COUNTIES — towns served without a dedicated page (non-link chips) + county context.
  // (H2: We serve these too — and everywhere between.)
  servedTowns: [
    { name: "New Castle", county: "New Castle County" },
    { name: "Glasgow", county: "New Castle County" },
    { name: "Hockessin", county: "New Castle County" },
    { name: "Camden", county: "Kent County" },
    { name: "Milford", county: "Kent / Sussex" },
    { name: "Seaford", county: "Sussex County" },
    { name: "Georgetown", county: "Sussex County" },
    { name: "Lewes", county: "Sussex County" },
    { name: "Rehoboth Beach", county: "Sussex County" },
  ],
  countyProse: "Beyond the dedicated city pages, TechBrot serves businesses in all three Delaware counties &mdash; <strong>New Castle</strong> (Wilmington, Newark, Middletown, Bear, New Castle, Glasgow, Hockessin &mdash; the corporate corridor), <strong>Kent</strong> (Dover, the state capital, plus Smyrna and Camden), and <strong>Sussex</strong> (Seaford, Georgetown, Lewes, Milford, and the Rehoboth coast). Remote, fixed-fee service reaches every town in between; our office is in Middletown.",
  moreNote: "Don&rsquo;t see your town? All three Delaware counties are served via remote engagement delivery &mdash; same fixed fee, same named ProAdvisor. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=city-index&amp;funnel_stage=MOFU\">Talk to us &rarr;</a>",

  // FAQ — 6 Q/A, answer-first. visible faq = FAQPage schema (same array). (H2: Delaware coverage questions.)
  faq: [
    { q: "Which Delaware cities does TechBrot serve?", a: "TechBrot serves businesses across all three Delaware counties &mdash; every city and town &mdash; delivered remotely on QuickBooks from our Middletown office. We have dedicated pages for the largest markets (Wilmington, Dover, Newark, Middletown, Smyrna, and Bear), but the service, cadence, and named ProAdvisor are the same wherever your business sits in Delaware." },
    { q: "Do I need a bookkeeper in my specific Delaware city?", a: "Not physically &mdash; the work happens in your QuickBooks file, which is cloud-based, so your city doesn&rsquo;t change the service. What matters is Delaware tax fluency: no sales tax to collect, the gross receipts tax that falls on the seller, the annual franchise tax, and Wilmington&rsquo;s 1.25% city tax. We bring that regardless of which Delaware city you&rsquo;re in." },
    { q: "Does the Delaware city I&rsquo;m in change my taxes?", a: "Mostly no. Delaware&rsquo;s core tax structure is statewide and identical in New Castle, Kent, and Sussex &mdash; no sales tax anywhere, a gross receipts tax on the seller (0.0945%&ndash;1.9914% by business activity), and the annual franchise tax every Delaware entity owes. The one local exception is Wilmington&rsquo;s 1.25% wage and net-profits tax. We track the rules specific to where your business operates." },
    { q: "Is Wilmington different from the rest of Delaware?", a: "For tax, yes. Wilmington is the only Delaware city that levies a local tax &mdash; a 1.25% earned-income (wage) tax on residents and on non-residents who work in the city, plus a 1.25% net-profits tax on sole proprietors and partnerships operating within city limits. Dover, Newark, Middletown, Smyrna, and Bear have no city income tax; only the statewide Delaware rules apply there." },
    { q: "How do I get started in my Delaware city?", a: "Book a free discovery call, or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will pick up. We review your QuickBooks file and your situation &mdash; including the tax specifics of your Delaware city &mdash; and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope, wherever in Delaware you are." },
    { q: "What if my Delaware town doesn&rsquo;t have a dedicated page yet?", a: "You&rsquo;re still fully covered. The dedicated pages exist for the largest Delaware markets, but coverage is statewide &mdash; all three counties, every city and town. If your town isn&rsquo;t listed &mdash; a Sussex coastal business in Lewes or Rehoboth, a Kent County shop in Camden, a New Castle County office in Hockessin &mdash; the service, fixed-fee model, and named ProAdvisor are identical; the discovery call covers the tax specifics of your exact location." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, NO founder name. (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor certifications &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, gross-receipts-tax tracking, franchise-tax reserve, advisory &middot; Delaware return filing coordinated with your CPA or EA" },
    { label: "Delaware presence", detail: "Office in Middletown, New Castle County &middot; all 3 counties served &middot; New Castle, Kent, Sussex" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; not a registered agent &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — 4 next-step cards. (H2: Where to go next. + 4 H3s)
  related: [
    { name: "Delaware QuickBooks Accountant", href: "/find-an-accountant/delaware/quickbooks-accountant/", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, gross receipts tax, and franchise-tax reserve statewide.", cta: "QuickBooks accountant &rarr;" },
    { name: "Delaware Bookkeeping Services", href: "/find-an-accountant/delaware/bookkeeping-services/", body: "Monthly bookkeeping, cleanup, and catch-up by a named Certified ProAdvisor.", cta: "Bookkeeping services &rarr;" },
    { name: "Delaware Gross Receipts Tax Help", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", body: "Activity-based gross-receipts tracking set up so the right rate and exclusion apply and the return reconciles.", cta: "Gross receipts help &rarr;" },
    { name: "Delaware Pricing", href: "/find-an-accountant/delaware/pricing/", body: "Fixed-fee ranges across every service &mdash; written scope before any work.", cta: "See pricing &rarr;" },
  ],

  // ITEMLIST for schema — the 6 dedicated DE city pages.
  cityList: [
    { name: "Wilmington DE Bookkeeping & QuickBooks · TechBrot", url: "https://techbrot.com/find-an-accountant/delaware/cities/wilmington/" },
    { name: "Dover DE Bookkeeping & QuickBooks Accountant · TechBrot", url: "https://techbrot.com/find-an-accountant/delaware/cities/dover/" },
    { name: "Newark DE QuickBooks Bookkeeper & Accountant · TechBrot", url: "https://techbrot.com/find-an-accountant/delaware/cities/newark/" },
    { name: "Middletown DE Bookkeeping & QuickBooks · TechBrot", url: "https://techbrot.com/find-an-accountant/delaware/cities/middletown/" },
    { name: "Smyrna DE Bookkeeping & QuickBooks Accountant · TechBrot", url: "https://techbrot.com/find-an-accountant/delaware/cities/smyrna/" },
    { name: "Bear DE Bookkeeping & QuickBooks Accountant · TechBrot", url: "https://techbrot.com/find-an-accountant/delaware/cities/bear/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/cities/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Cities We Serve","description":"Certified QuickBooks ProAdvisor bookkeeping for businesses across Delaware — Wilmington, Dover, Newark, Middletown, Smyrna, Bear, and all three counties, delivered remotely and fixed-fee from a Middletown office. No sales tax; gross receipts tax instead.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-cities.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-cities-in-brief-text","#de-cities-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":url+"#citylist","name":"Delaware cities served","itemListElement":data.cityList.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":c.name,"url":c.url};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
