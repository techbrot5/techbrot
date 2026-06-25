/* /find-an-accountant/indiana/cities/evansville/ — t-location CITY page. JSON front-matter in
 * the .njk; this file supplies content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage · BreadcrumbList · Service [areaServed = City] · FAQPage).
 *
 * LOCAL ANGLE (genuine): Evansville is the Southwest Indiana / Ohio River regional hub for the
 * Indiana-Kentucky-Illinois tri-state — manufacturing (Toyota assembly nearby in Gibson County,
 * Berry Global HQ, plastics/aluminum), healthcare (Deaconess, Ascension St. Vincent), river
 * logistics, and the University of Evansville/USI. IN-distinct tax thread: the VANDERBURGH COUNTY
 * local income tax (LIT), plus genuine multi-state nexus for tri-state shippers. NEVER quote a
 * county % — framed qualitatively + DOR county-rate page linked.
 *
 * HONESTY (R5): IN-FACTS figures only; NO street address (areaServed-only); no reviews; no
 * AggregateRating; no founder name in visible content. Independent firm — does NOT file IN returns
 * as agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Evansville businesses</strong> across Vanderburgh County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. The Indiana-specific wrinkle is the <strong>Vanderburgh County local income tax (LIT)</strong>: every county levies its own LIT on top of the flat 2.95% state rate, set by your <strong>county of residence on January 1</strong> and withheld through <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Form WH-4</a>. As an Ohio River tri-state hub, Evansville businesses also watch multi-state nexus across Kentucky and Illinois. Indiana sales tax is a clean statewide 7% with <strong>no local add-ons</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (from $400/mo monthly; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Evansville bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Evansville businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Evansville and Vanderburgh County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, for the tri-state&rsquo;s manufacturing, river-logistics, and healthcare economy." },
    { q: "What is the Vanderburgh County local income tax?", a: "<strong>A county income tax (LIT) on top of Indiana&rsquo;s flat 2.95% state rate.</strong> Vanderburgh County sets its own rate; it&rsquo;s determined by your county of residence on January 1, withheld via Form WH-4, and the same for residents and nonresidents. We apply the correct current rate in payroll." },
    { q: "Does the Indiana-Kentucky-Illinois border affect my books?", a: "<strong>It can.</strong> Evansville sits at a tri-state corner, so manufacturers and distributors that ship into Kentucky or Illinois may create sales-tax nexus in those states. We track where goods move so multi-state exposure surfaces early, and your CPA advises on the filings." },
    { q: "Does Evansville have a local sales tax?", a: "<strong>No &mdash; Indiana&rsquo;s 7% sales tax is statewide with no county or city add-ons.</strong> One clean rate simplifies QuickBooks setup, but the 7% still applies to taxable goods and services and must be configured and remitted." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
  ],

  // LOCAL CONTEXT — the un-clonable band. (H2: Why Evansville books have their own rhythm.)
  localLead: "Evansville is the Southwest Indiana hub of the Ohio River tri-state &mdash; a manufacturing, river-logistics, and healthcare economy at the Indiana-Kentucky-Illinois corner &mdash; and a business&rsquo;s books here carry the Vanderburgh County local income tax plus genuine multi-state exposure.",
  localBody: [
    "Evansville makes and moves things along the river. Manufacturing anchors the regional economy &mdash; Toyota&rsquo;s assembly plant nearby in Gibson County, Berry Global&rsquo;s headquarters, and a base of plastics and aluminum producers &mdash; alongside major healthcare systems in Deaconess and Ascension St. Vincent, river and rail logistics, and the University of Evansville and USI. For a manufacturer or distributor that means inventory and job costing, fleet and equipment depreciation, and a careful read on where goods are shipped; for a healthcare practice it means payer reconciliation and multi-provider payroll. The bookkeeping has to reflect a make-and-ship tri-state economy.",
    "The defining Indiana tax fact is the <strong>Vanderburgh County local income tax (LIT)</strong>. Every Indiana county levies its own LIT rate on top of the flat 2.95% state income tax, set by the employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; withheld through <strong>Form WH-4</strong>, the same rate for residents and nonresidents. Because the labor market reaches across the river into Kentucky and Illinois, residency drives the rate, and out-of-state residents whose principal Indiana work county is Vanderburgh pay that rate. Indiana sales tax is the simple part: a clean 7% statewide, with no city or county add-ons &mdash; though shipping into Kentucky or Illinois can create nexus there.",
    "That&rsquo;s where software-only bookkeeping struggles. When the county LIT isn&rsquo;t mapped to residency, payroll is wrong. When tri-state sales aren&rsquo;t tracked by destination, multi-state nexus surprises follow. TechBrot keeps a named bookkeeper on your file who knows the Vanderburgh County and tri-state specifics &mdash; and builds them into the monthly close, handed to your CPA <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Evansville / Vanderburgh County coverage.
  areas: [
    { name: "Downtown / riverfront", note: "Professional services, healthcare, hospitality" },
    { name: "East Side / Eastland", note: "Retail, restaurants, medical practices" },
    { name: "West Side / industrial", note: "Manufacturing, plastics, aluminum, distribution" },
    { name: "North Park / Darmstadt", note: "Trades, logistics, small business" },
    { name: "Newburgh / Warrick County", note: "Suburban services, retail, cross-county LIT" },
    { name: "Tri-state corridor", note: "KY/IL shippers &mdash; multi-state nexus" },
  ],

  // TAX FACTS — proof-strip grid-3. State + county LIT band (IN-FACTS only; LIT qualitative).
  taxEyebrow: "The Indiana tax facts we build into your books",
  taxFacts: [
    { fig: "2.95%", desc: "Indiana&rsquo;s flat state income tax for 2026 (no brackets), scheduled to fall to 2.90% in 2027. The county local income tax (LIT) is added on top." },
    { fig: "Vanderburgh LIT", desc: "Vanderburgh County levies its own local income tax (LIT) on top of the state rate &mdash; set by your county of residence on January 1, withheld via Form WH-4, same rate for residents and nonresidents. We apply the correct current county rate in payroll." },
    { fig: "7%", desc: "Indiana sales tax &mdash; a flat 7% statewide, with no county or city add-ons. One clean rate to configure in QuickBooks; tri-state shipping can still create nexus in Kentucky or Illinois." },
  ],
  taxNote: "County LIT rates vary by county and change periodically &mdash; we apply the current rate from the <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Indiana DOR county tax rates</a> page rather than a fixed figure. Always confirm current rates against the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>.",

  // INDUSTRIES — Evansville verticals (IN industry pages).
  industries: [
    { name: "Manufacturing", href: "/find-an-accountant/indiana/industries/manufacturing/" },
    { name: "Healthcare", href: "/find-an-accountant/indiana/industries/healthcare/" },
    { name: "Logistics &amp; Distribution", href: "/find-an-accountant/indiana/industries/logistics-distribution/" },
    { name: "Real Estate", href: "/find-an-accountant/indiana/industries/real-estate/" },
    { name: "Construction", href: "/find-an-accountant/indiana/industries/construction/" },
  ],

  // VALUE STACK — 4 services (real H3s). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with Vanderburgh County LIT handled in payroll and 7% sales tax tracked. <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Indiana monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books, or a tri-state shipper with tangled nexus? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">Indiana cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with county-LIT codes and sales tax right from day one. <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">IN QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "County-LIT &amp; sales-tax ready", body: "Payroll mapped to each employee&rsquo;s county rate and a 7% sales-tax setup that tracks tri-state destinations. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">IN county income tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2.
  advisoryBody: "In a make-and-ship tri-state economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your job costs are accurate, your county-LIT withholding follows residency, and your Kentucky/Illinois nexus is tracked before it becomes a notice. That judgment is what a named Evansville bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Evansville &amp; Vanderburgh County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Evansville file every month &mdash; the judgment behind a clean close, from Vanderburgh County LIT to tri-state multi-state nexus.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Evansville situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema (same array). (H2: Evansville bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Evansville business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Evansville and Vanderburgh County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with full fluency in the Southwest Indiana specifics, from Vanderburgh County&rsquo;s local income tax (LIT) to tri-state multi-state nexus, that generic firms often miss." },
    { q: "What is the Vanderburgh County local income tax (LIT) I need to handle?", a: "Every Indiana county levies a local income tax (LIT) on top of the flat 2.95% state income tax, and Vanderburgh County is no exception. The rate is set by the employee&rsquo;s county of residence on January 1 (or, for an out-of-state resident, the principal Indiana work county), withheld through Form WH-4, and is the same for residents and nonresidents. Because the tri-state labor market crosses into Kentucky and Illinois, residency drives the rate &mdash; we map the right county code per employee so it reconciles." },
    { q: "Does shipping into Kentucky or Illinois affect my sales tax?", a: "It can. Indiana&rsquo;s sales tax is a flat 7% statewide with no local add-ons, but when an Evansville business ships taxable goods into Kentucky or Illinois it may create economic nexus in those states, triggering registration and filing there. We track sales by destination in QuickBooks so any multi-state exposure surfaces early; your CPA advises on the out-of-state filings." },
    { q: "How much does an Evansville bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you &mdash; no surprises." },
    { q: "Do you file my Indiana or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, set up the Vanderburgh County LIT withholding, track 7% sales tax and multi-state nexus, and hand clean, CPA-ready financials to your accountant, who files your Indiana and federal returns. We don&rsquo;t file the county LIT, sales-tax, or business-personal-property returns as agent. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Evansville and Vanderburgh County businesses remotely. Indiana tax facts &mdash; the flat 2.95% state income tax, the 7% statewide sales tax with no local add-ons, and the Vanderburgh County local income tax (LIT) &mdash; reflect Indiana Department of Revenue rules current as of the date below and are reviewed periodically against the DOR county-rate list. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs Indiana Department of Revenue &middot; County LIT applied from the current DOR rate list, not a fixed figure &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cities/evansville/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Evansville QuickBooks Accountant & Bookkeeper · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Evansville, IN businesses. Vanderburgh County local income tax (LIT) handled, 7% sales tax and tri-state nexus tracked, CPA-ready books, fixed-fee.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/evansville-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-city-evansville-in-brief-text","#in-city-evansville-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/indiana/cities/"},
          {"@type":"ListItem","position":5,"name":"Evansville"}]},
        {"@type":"Service","@id":url+"#service","name":"Evansville Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Evansville and Vanderburgh County businesses, with the Vanderburgh County local income tax (LIT) handled in payroll, 7% sales tax and tri-state nexus tracked, and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns or the county LIT/sales-tax/business-personal-property returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Evansville","sameAs":"https://en.wikipedia.org/wiki/Evansville,_Indiana"},
          {"@type":"AdministrativeArea","name":"Vanderburgh County, Indiana"},
          {"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, manufacturers, distributors, and healthcare practices"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
