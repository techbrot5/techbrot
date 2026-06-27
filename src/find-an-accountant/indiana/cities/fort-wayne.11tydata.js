/* /find-an-accountant/indiana/cities/fort-wayne/ — t-location CITY page. JSON front-matter in
 * the .njk; this file supplies content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage · BreadcrumbList · Service [areaServed = City] · FAQPage).
 *
 * LOCAL ANGLE (genuine): Fort Wayne is Indiana's 2nd-largest city and the Northeast Indiana
 * regional hub — advanced and defense manufacturing (BAE Systems, Raytheon), an insurance legacy
 * (Lincoln Financial roots), healthcare (Parkview, Lutheran), and distribution/logistics, with a
 * growing downtown small-business base. IN-distinct tax thread: the ALLEN COUNTY local income tax
 * (LIT), set by county of residence on Jan 1, withheld via Form WH-4, same rate resident/nonresident.
 * NEVER quote a county % — framed qualitatively + DOR county-rate page linked.
 *
 * HONESTY (R5): IN-FACTS figures only; NO street address (areaServed-only); no reviews; no
 * AggregateRating; no founder name in visible content. Independent firm — does NOT file IN returns
 * as agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Wayne businesses</strong> across Allen County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. The Indiana-specific wrinkle is the <strong>Allen County local income tax (LIT)</strong>: every county levies its own LIT on top of the flat 2.95% state rate, set by your <strong>county of residence on January 1</strong> and withheld through <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Form WH-4</a>. Sales tax is a clean statewide 7% with <strong>no local add-ons</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (from $400/mo monthly; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Fort Wayne bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Fort Wayne businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Fort Wayne and Allen County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, for Northeast Indiana&rsquo;s manufacturing, insurance, and healthcare economy." },
    { q: "What is the Allen County local income tax?", a: "<strong>A county income tax (LIT) on top of Indiana&rsquo;s flat 2.95% state rate.</strong> Allen County sets its own rate; it&rsquo;s determined by your county of residence on January 1, withheld via Form WH-4, and the same for residents and nonresidents. We apply the correct current rate in payroll." },
    { q: "Does Fort Wayne have a local sales tax?", a: "<strong>No &mdash; Indiana&rsquo;s 7% sales tax is statewide with no county or city add-ons.</strong> One clean rate simplifies QuickBooks setup, but the 7% still applies to taxable goods and services and must be configured and remitted." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
    { q: "Do you handle manufacturing job costing?", a: "Yes &mdash; a core Fort Wayne need. We keep job costing, standard-vs-actual cost, inventory and WIP, and the business-personal-property posture clean for manufacturers, and hand CPA-ready books to your accountant for the R&amp;D-credit work." },
  ],

  // LOCAL CONTEXT — the un-clonable band. (H2: Why Fort Wayne books have their own rhythm.)
  localLead: "Fort Wayne is Indiana&rsquo;s second-largest city and the anchor of Northeast Indiana &mdash; a manufacturing, insurance, and healthcare economy &mdash; and a business&rsquo;s books here carry the Allen County local income tax on top of the statewide rules.",
  localBody: [
    "Fort Wayne built its base on making and insuring things. Advanced and defense manufacturing &mdash; with names like BAE Systems and Raytheon in the regional supply chain &mdash; sits alongside an insurance legacy rooted in Lincoln Financial, major healthcare systems in Parkview and Lutheran, and a distribution and logistics network, all feeding a growing downtown small-business base. For a manufacturer that means job costing, standard-vs-actual cost, inventory and WIP, and a watchful eye on the business-personal-property posture; for an insurance or professional-services firm it means clean revenue recognition and multi-entity books. The bookkeeping has to reflect a make-and-service economy, not a generic retail one.",
    "The defining Indiana tax fact is the <strong>Allen County local income tax (LIT)</strong>. Every Indiana county levies its own LIT rate on top of the flat 2.95% state income tax, and the rate that applies is set by the employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; withheld through <strong>Form WH-4</strong>, the same rate for residents and nonresidents. With staff commuting in from surrounding Northeast Indiana counties, payroll has to carry the right county code per employee, and a new WH-4 when someone moves or changes work county. Sales tax is the simple part: a clean 7% statewide, with no city or county add-ons.",
    "That&rsquo;s where software-only bookkeeping struggles. When the county LIT isn&rsquo;t mapped per employee, payroll is wrong. When a manufacturer&rsquo;s inventory and job costs aren&rsquo;t kept clean, pricing decisions get made on bad numbers. TechBrot keeps a named bookkeeper on your file who knows the Allen County and Indiana specifics &mdash; and builds them into the monthly close, handed to your CPA <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Fort Wayne / Allen County coverage.
  areas: [
    { name: "Downtown / Electric Works", note: "Professional services, startups, insurance, conventions" },
    { name: "Northwest / industrial parks", note: "Advanced &amp; defense manufacturing, distribution" },
    { name: "Aboite / Southwest", note: "Healthcare, professional practices, retail" },
    { name: "New Haven", note: "Logistics, trades, small business" },
    { name: "North Anthony / St. Joe", note: "Restaurants, retail, services" },
    { name: "Northeast Indiana region", note: "Commuter counties &mdash; cross-county LIT" },
  ],

  // TAX FACTS — proof-strip grid-3. State + county LIT band (IN-FACTS only; LIT qualitative).
  taxEyebrow: "The Indiana tax facts we build into your books",
  taxFacts: [
    { fig: "2.95%", desc: "Indiana&rsquo;s flat state income tax for 2026 (no brackets), scheduled to fall to 2.90% in 2027. The county local income tax (LIT) is added on top." },
    { fig: "Allen LIT", desc: "Allen County levies its own local income tax (LIT) on top of the state rate &mdash; set by your county of residence on January 1, withheld via Form WH-4, same rate for residents and nonresidents. We apply the correct current county rate in payroll." },
    { fig: "7%", desc: "Indiana sales tax &mdash; a flat 7% statewide, with no county or city add-ons. One clean rate to configure in QuickBooks; it still applies to taxable goods and services and must be remitted." },
  ],
  taxNote: "County LIT rates vary by county and change periodically &mdash; we apply the current rate from the <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Indiana DOR county tax rates</a> page rather than a fixed figure. Always confirm current rates against the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>.",

  // INDUSTRIES — Fort Wayne verticals (IN industry pages; professional-services routes to global).
  industries: [
    { name: "Manufacturing", href: "/find-an-accountant/indiana/industries/manufacturing/" },
    { name: "Healthcare", href: "/find-an-accountant/indiana/industries/healthcare/" },
    { name: "Logistics &amp; Distribution", href: "/find-an-accountant/indiana/industries/logistics-distribution/" },
    { name: "Construction", href: "/find-an-accountant/indiana/industries/construction/" },
    { name: "Professional Services", href: "/accounting/industries/professional-services/" },
  ],

  // VALUE STACK — 4 services (real H3s). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with Allen County LIT handled in payroll and 7% sales tax tracked. <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Indiana monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books, or a manufacturer with messy job costs? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">Indiana cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with county-LIT codes and sales tax right from day one. <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">IN QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "County-LIT &amp; sales-tax ready", body: "Payroll mapped to each employee&rsquo;s county rate and a 7% sales-tax setup that reconciles. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">IN county income tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2.
  advisoryBody: "In a manufacturing-and-insurance economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your job costs are accurate, your county-LIT withholding is right across commuter counties, and your inventory and personal-property posture won&rsquo;t surprise you. That judgment is what a named Fort Wayne bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Fort Wayne &amp; Allen County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Fort Wayne file every month &mdash; the judgment behind a clean close, from Allen County LIT withholding to manufacturing job costing.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Fort Wayne situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema (same array). (H2: Fort Wayne bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Fort Wayne business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Fort Wayne and Allen County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with full fluency in the Indiana specifics, from Allen County&rsquo;s local income tax (LIT) withholding to manufacturing job costing, that generic firms often miss." },
    { q: "What is the Allen County local income tax (LIT) I need to handle?", a: "Every Indiana county levies a local income tax (LIT) on top of the flat 2.95% state income tax, and Allen County is no exception. The rate is set by the employee&rsquo;s county of residence on January 1 (or, for an out-of-state resident, the principal Indiana work county), withheld through Form WH-4, and is the same for residents and nonresidents. With staff commuting from surrounding counties, payroll has to map the right county code per employee, which we set up so it reconciles." },
    { q: "Does Fort Wayne have a local sales tax?", a: "No. Indiana&rsquo;s sales tax is a flat 7% statewide, with no county or city add-ons anywhere &mdash; Fort Wayne included. That makes QuickBooks sales-tax setup simpler than in states with layered local rates, but the 7% still applies to taxable goods and services and has to be configured and remitted. We set it up so your return reconciles to the books." },
    { q: "How much does a Fort Wayne bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you &mdash; no surprises." },
    { q: "Do you file my Indiana or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, set up the Allen County LIT withholding, track 7% sales tax and the business-personal-property posture, and hand clean, CPA-ready financials to your accountant, who files your Indiana and federal returns. We don&rsquo;t file the county LIT, sales-tax, or business-personal-property returns as agent. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Fort Wayne and Allen County businesses remotely. Indiana tax facts &mdash; the flat 2.95% state income tax, the 7% statewide sales tax with no local add-ons, and the Allen County local income tax (LIT) &mdash; reflect Indiana Department of Revenue rules current as of the date below and are reviewed periodically against the DOR county-rate list. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs Indiana Department of Revenue &middot; County LIT applied from the current DOR rate list, not a fixed figure &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cities/fort-wayne/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Fort Wayne QuickBooks Accountant & Bookkeeper · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Fort Wayne, IN businesses. Allen County local income tax (LIT) handled, 7% sales tax tracked, CPA-ready books, fixed-fee. Serving Allen County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-cities-fort-wayne.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-city-fort-wayne-in-brief-text","#in-city-fort-wayne-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/indiana/cities/"},
          {"@type":"ListItem","position":5,"name":"Fort Wayne"}]},
        {"@type":"Service","@id":url+"#service","name":"Fort Wayne Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Fort Wayne and Allen County businesses, with the Allen County local income tax (LIT) handled in payroll, 7% sales tax tracked, and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns or the county LIT/sales-tax/business-personal-property returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Fort Wayne","sameAs":"https://en.wikipedia.org/wiki/Fort_Wayne,_Indiana"},
          {"@type":"AdministrativeArea","name":"Allen County, Indiana"},
          {"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, manufacturers, insurance and professional-services firms, and healthcare practices"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
