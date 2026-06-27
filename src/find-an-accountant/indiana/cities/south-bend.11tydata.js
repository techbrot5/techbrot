/* /find-an-accountant/indiana/cities/south-bend/ — t-location CITY page. JSON front-matter in
 * the .njk; this file supplies content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage · BreadcrumbList · Service [areaServed = City] · FAQPage).
 *
 * LOCAL ANGLE (genuine): South Bend is the Michiana hub on the Michigan line — home of the
 * University of Notre Dame — with a post-Studebaker reinvention into healthcare (Beacon), education,
 * tech/startups (Notre Dame's Renaissance District / startup scene), and advanced manufacturing,
 * with RV/marine industry nearby in Elkhart. IN-distinct tax thread: the ST. JOSEPH COUNTY local
 * income tax (LIT). NEVER quote a county % — framed qualitatively + DOR county-rate page linked.
 *
 * HONESTY (R5): IN-FACTS figures only; NO street address (areaServed-only); no reviews; no
 * AggregateRating; no founder name in visible content. Independent firm — does NOT file IN returns
 * as agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for South Bend businesses</strong> across St. Joseph County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. The Indiana-specific wrinkle is the <strong>St. Joseph County local income tax (LIT)</strong>: every county levies its own LIT on top of the flat 2.95% state rate, set by your <strong>county of residence on January 1</strong> and withheld through <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Form WH-4</a>. Sales tax is a clean statewide 7% with <strong>no local add-ons</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (from $400/mo monthly; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: South Bend bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for South Bend businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across South Bend and St. Joseph County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, for Michiana&rsquo;s healthcare, education, tech-startup, and advanced-manufacturing economy." },
    { q: "What is the St. Joseph County local income tax?", a: "<strong>A county income tax (LIT) on top of Indiana&rsquo;s flat 2.95% state rate.</strong> St. Joseph County sets its own rate; it&rsquo;s determined by your county of residence on January 1, withheld via Form WH-4, and the same for residents and nonresidents. We apply the correct current rate in payroll." },
    { q: "Do you work with startups and university-adjacent businesses?", a: "Yes &mdash; South Bend&rsquo;s Renaissance District and Notre Dame ecosystem produce a steady stream of startups. We set up clean QuickBooks from day one, track runway and grant/SAFE funding, and keep books investor- and CPA-ready as you scale." },
    { q: "Does South Bend have a local sales tax?", a: "<strong>No &mdash; Indiana&rsquo;s 7% sales tax is statewide with no county or city add-ons.</strong> One clean rate simplifies QuickBooks setup, but the 7% still applies to taxable goods and services and must be configured and remitted." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
  ],

  // LOCAL CONTEXT — the un-clonable band. (H2: Why South Bend books have their own rhythm.)
  localLead: "South Bend is the Michiana hub on the Michigan line, home of Notre Dame &mdash; a city that reinvented a Studebaker past into healthcare, education, tech startups, and advanced manufacturing &mdash; and a business&rsquo;s books here carry the St. Joseph County local income tax on top of the statewide rules.",
  localBody: [
    "South Bend&rsquo;s economy turned a manufacturing legacy into a knowledge-and-care economy. Beacon Health anchors a large healthcare base, Notre Dame and the surrounding institutions drive education and a growing startup scene out of the Renaissance District, advanced manufacturing persists, and the RV and marine industry sits just east in Elkhart. For a healthcare practice that means payer reconciliation and multi-provider payroll; for a startup it means clean books, runway tracking, and grant or SAFE/convertible-note accounting; for a manufacturer it means inventory and job costing. The bookkeeping has to reflect that mix, not a generic template.",
    "The defining Indiana tax fact is the <strong>St. Joseph County local income tax (LIT)</strong>. Every Indiana county levies its own LIT rate on top of the flat 2.95% state income tax, set by the employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; withheld through <strong>Form WH-4</strong>, the same rate for residents and nonresidents. With a Michiana labor market that includes Michigan residents, residency drives the Indiana county rate, and a new WH-4 is needed when someone moves or changes work county. Sales tax is the simple part: a clean 7% statewide, with no city or county add-ons.",
    "That&rsquo;s where software-only bookkeeping struggles. When the county LIT isn&rsquo;t mapped to residency, payroll is wrong. When a startup&rsquo;s funding events aren&rsquo;t booked correctly, the cap table and the books diverge. TechBrot keeps a named bookkeeper on your file who knows the St. Joseph County and Michiana specifics &mdash; and builds them into the monthly close, handed to your CPA <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — South Bend / St. Joseph County coverage.
  areas: [
    { name: "Downtown / East Bank", note: "Professional services, hospitality, startups" },
    { name: "Notre Dame / Renaissance District", note: "University-adjacent, tech startups, research" },
    { name: "Mishawaka", note: "Retail, restaurants, services &mdash; cross-county LIT" },
    { name: "Granger", note: "Healthcare, professional practices, suburban small business" },
    { name: "Southwest / industrial", note: "Advanced manufacturing, distribution, trades" },
    { name: "Elkhart corridor", note: "RV/marine suppliers &mdash; inventory &amp; job costing" },
  ],

  // TAX FACTS — proof-strip grid-3. State + county LIT band (IN-FACTS only; LIT qualitative).
  taxEyebrow: "The Indiana tax facts we build into your books",
  taxFacts: [
    { fig: "2.95%", desc: "Indiana&rsquo;s flat state income tax for 2026 (no brackets), scheduled to fall to 2.90% in 2027. The county local income tax (LIT) is added on top." },
    { fig: "St. Joseph LIT", desc: "St. Joseph County levies its own local income tax (LIT) on top of the state rate &mdash; set by your county of residence on January 1, withheld via Form WH-4, same rate for residents and nonresidents. We apply the correct current county rate in payroll." },
    { fig: "7%", desc: "Indiana sales tax &mdash; a flat 7% statewide, with no county or city add-ons. One clean rate to configure in QuickBooks; it still applies to taxable goods and services and must be remitted." },
  ],
  taxNote: "County LIT rates vary by county and change periodically &mdash; we apply the current rate from the <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Indiana DOR county tax rates</a> page rather than a fixed figure. Always confirm current rates against the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>.",

  // INDUSTRIES — South Bend verticals (IN industry pages; professional-services routes to global).
  industries: [
    { name: "Healthcare", href: "/find-an-accountant/indiana/industries/healthcare/" },
    { name: "Manufacturing", href: "/find-an-accountant/indiana/industries/manufacturing/" },
    { name: "Real Estate", href: "/find-an-accountant/indiana/industries/real-estate/" },
    { name: "Professional Services", href: "/accounting/industries/professional-services/" },
    { name: "Construction", href: "/find-an-accountant/indiana/industries/construction/" },
  ],

  // VALUE STACK — 4 services (real H3s). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with St. Joseph County LIT handled in payroll and 7% sales tax tracked. <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Indiana monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books, or a startup that scaled past its bookkeeping? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">Indiana cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with county-LIT codes and sales tax right from day one. <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">IN QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "County-LIT &amp; sales-tax ready", body: "Payroll mapped to each employee&rsquo;s county rate and a 7% sales-tax setup that reconciles. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">IN county income tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2.
  advisoryBody: "In a healthcare-education-and-startup economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your runway is real, your county-LIT withholding follows residency, and your payer or grant reconciliations hold. That judgment is what a named South Bend bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "South Bend &amp; St. Joseph County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your South Bend file every month &mdash; the judgment behind a clean close, from St. Joseph County LIT to startup runway and payer reconciliation.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your South Bend situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema (same array). (H2: South Bend bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my South Bend business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across South Bend and St. Joseph County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with full fluency in the Michiana specifics, from St. Joseph County&rsquo;s local income tax (LIT) to startup and healthcare bookkeeping, that generic firms often miss." },
    { q: "What is the St. Joseph County local income tax (LIT) I need to handle?", a: "Every Indiana county levies a local income tax (LIT) on top of the flat 2.95% state income tax, and St. Joseph County is no exception. The rate is set by the employee&rsquo;s county of residence on January 1 (or, for an out-of-state resident, the principal Indiana work county), withheld through Form WH-4, and is the same for residents and nonresidents. With a Michiana labor market that includes Michigan residents, residency drives the Indiana county rate &mdash; we map the right code per employee so it reconciles." },
    { q: "Does South Bend have a local sales tax?", a: "No. Indiana&rsquo;s sales tax is a flat 7% statewide, with no county or city add-ons anywhere &mdash; South Bend included. That makes QuickBooks sales-tax setup simpler than in states with layered local rates, but the 7% still applies to taxable goods and services and has to be configured and remitted. We set it up so your return reconciles to the books." },
    { q: "How much does a South Bend bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you &mdash; no surprises." },
    { q: "Do you file my Indiana or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, set up the St. Joseph County LIT withholding, track 7% sales tax and the business-personal-property posture, and hand clean, CPA-ready financials to your accountant, who files your Indiana and federal returns. We don&rsquo;t file the county LIT, sales-tax, or business-personal-property returns as agent. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving South Bend and St. Joseph County businesses remotely. Indiana tax facts &mdash; the flat 2.95% state income tax, the 7% statewide sales tax with no local add-ons, and the St. Joseph County local income tax (LIT) &mdash; reflect Indiana Department of Revenue rules current as of the date below and are reviewed periodically against the DOR county-rate list. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs Indiana Department of Revenue &middot; County LIT applied from the current DOR rate list, not a fixed figure &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cities/south-bend/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"South Bend QuickBooks Accountant & Bookkeeper · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for South Bend, IN businesses. St. Joseph County local income tax (LIT) handled, 7% sales tax tracked, CPA-ready books, fixed-fee. Serving St. Joseph County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-cities-south-bend.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-city-south-bend-in-brief-text","#in-city-south-bend-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/indiana/cities/"},
          {"@type":"ListItem","position":5,"name":"South Bend"}]},
        {"@type":"Service","@id":url+"#service","name":"South Bend Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for South Bend and St. Joseph County businesses, with the St. Joseph County local income tax (LIT) handled in payroll, 7% sales tax tracked, and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns or the county LIT/sales-tax/business-personal-property returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"South Bend","sameAs":"https://en.wikipedia.org/wiki/South_Bend,_Indiana"},
          {"@type":"AdministrativeArea","name":"St. Joseph County, Indiana"},
          {"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, healthcare practices, university-adjacent startups, and manufacturers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
