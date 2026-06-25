/* /find-an-accountant/indiana/cities/carmel/ — t-location CITY page. JSON front-matter in
 * the .njk; this file supplies content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage · BreadcrumbList · Service [areaServed = City] · FAQPage).
 *
 * LOCAL ANGLE (genuine): Carmel is an affluent, fast-growing Indianapolis suburb in Hamilton County —
 * a dense corporate-HQ and professional-services base (finance, insurance, tech), nationally known for
 * roundabouts and an arts district, with high household incomes and heavy small-business formation.
 * Hamilton County is one of Indiana's wealthiest, fastest-growing counties. IN-distinct tax thread:
 * the HAMILTON COUNTY local income tax (LIT) — SHARED with neighboring Fishers (cross-linked).
 * NEVER quote a county % — framed qualitatively + DOR county-rate page linked.
 *
 * HONESTY (R5): IN-FACTS figures only; NO street address (areaServed-only); no reviews; no
 * AggregateRating; no founder name in visible content. Independent firm — does NOT file IN returns
 * as agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Carmel businesses</strong> across Hamilton County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. The Indiana-specific wrinkle is the <strong>Hamilton County local income tax (LIT)</strong>: every county levies its own LIT on top of the flat 2.95% state rate, set by your <strong>county of residence on January 1</strong> and withheld through <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Form WH-4</a> &mdash; Carmel and neighboring <a href=\"/find-an-accountant/indiana/cities/fishers/\">Fishers</a> share the same Hamilton County rate. Sales tax is a clean statewide 7% with <strong>no local add-ons</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (from $400/mo monthly; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Carmel bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Carmel businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Carmel and Hamilton County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, for the suburb&rsquo;s corporate-HQ, finance, insurance, and professional-services economy." },
    { q: "What is the Hamilton County local income tax?", a: "<strong>A county income tax (LIT) on top of Indiana&rsquo;s flat 2.95% state rate.</strong> Hamilton County sets its own rate; it&rsquo;s determined by your county of residence on January 1, withheld via Form WH-4, and the same for residents and nonresidents. Carmel and Fishers share the same Hamilton County rate &mdash; we apply the correct current rate in payroll." },
    { q: "Do Carmel and Fishers have the same county tax?", a: "<strong>Yes &mdash; both are in Hamilton County, so they share the same LIT rate.</strong> What differs between the two cities is the local business mix, not the county income tax. See our <a href=\"/find-an-accountant/indiana/cities/fishers/\">Fishers page</a> for that market." },
    { q: "Does Carmel have a local sales tax?", a: "<strong>No &mdash; Indiana&rsquo;s 7% sales tax is statewide with no county or city add-ons.</strong> One clean rate simplifies QuickBooks setup, but the 7% still applies to taxable goods and services and must be configured and remitted." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
  ],

  // LOCAL CONTEXT — the un-clonable band. (H2: Why Carmel books have their own rhythm.)
  localLead: "Carmel is an affluent, fast-growing Indianapolis suburb in Hamilton County &mdash; a corporate-HQ and professional-services hub with high household incomes &mdash; and a business&rsquo;s books here carry the Hamilton County local income tax on top of the statewide rules.",
  localBody: [
    "Carmel built one of Indiana&rsquo;s densest concentrations of corporate headquarters, finance and insurance firms, technology companies, and professional-services practices, wrapped around a celebrated arts district and an unusually high rate of small-business formation. For a professional-services firm that means utilization and realization tracking, work-in-progress, partner draws, and multi-entity books; for a finance or insurance operation it means clean revenue recognition and reconciliations. The bookkeeping has to reflect a high-income service economy, where the value is in the numbers being decision-grade, not just categorized.",
    "The defining Indiana tax fact is the <strong>Hamilton County local income tax (LIT)</strong>. Every Indiana county levies its own LIT rate on top of the flat 2.95% state income tax, set by the employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; withheld through <strong>Form WH-4</strong>, the same rate for residents and nonresidents. Carmel and neighboring <a href=\"/find-an-accountant/indiana/cities/fishers/\">Fishers</a> are both in Hamilton County, so they share the same county rate &mdash; but employees who live in Marion or other surrounding counties carry a different rate, so payroll has to map each person&rsquo;s county code. Sales tax is the simple part: a clean 7% statewide, with no city or county add-ons.",
    "That&rsquo;s where software-only bookkeeping struggles. When the county LIT isn&rsquo;t mapped per employee, payroll is wrong. When a professional firm&rsquo;s WIP and partner economics aren&rsquo;t kept clean, distributions get made on bad numbers. TechBrot keeps a named bookkeeper on your file who knows the Hamilton County and Carmel specifics &mdash; and builds them into the monthly close, handed to your CPA <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Carmel / Hamilton County coverage.
  areas: [
    { name: "City Center / Midtown", note: "Corporate HQ, finance, professional services" },
    { name: "Arts &amp; Design District", note: "Galleries, restaurants, small business" },
    { name: "Old Meridian / US-31 corridor", note: "Insurance, tech, office parks" },
    { name: "West Carmel / Village of WestClay", note: "Professional practices, retail, services" },
    { name: "Fishers", note: "Shared Hamilton County LIT &mdash; sister suburb" },
    { name: "Marion County line", note: "Cross-county commuters &mdash; different LIT codes" },
  ],

  // TAX FACTS — proof-strip grid-3. State + county LIT band (IN-FACTS only; LIT qualitative).
  taxEyebrow: "The Indiana tax facts we build into your books",
  taxFacts: [
    { fig: "2.95%", desc: "Indiana&rsquo;s flat state income tax for 2026 (no brackets), scheduled to fall to 2.90% in 2027. The county local income tax (LIT) is added on top." },
    { fig: "Hamilton LIT", desc: "Hamilton County levies its own local income tax (LIT) on top of the state rate &mdash; set by your county of residence on January 1, withheld via Form WH-4, same rate for residents and nonresidents. Carmel and Fishers share this rate; we apply the correct current county rate in payroll." },
    { fig: "7%", desc: "Indiana sales tax &mdash; a flat 7% statewide, with no county or city add-ons. One clean rate to configure in QuickBooks; it still applies to taxable goods and services and must be remitted." },
  ],
  taxNote: "County LIT rates vary by county and change periodically &mdash; we apply the current rate from the <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Indiana DOR county tax rates</a> page rather than a fixed figure. Always confirm current rates against the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>.",

  // INDUSTRIES — Carmel verticals (professional-services routes to global; rest IN industry pages).
  industries: [
    { name: "Professional Services", href: "/accounting/industries/professional-services/" },
    { name: "Real Estate", href: "/find-an-accountant/indiana/industries/real-estate/" },
    { name: "Construction", href: "/find-an-accountant/indiana/industries/construction/" },
    { name: "Healthcare", href: "/find-an-accountant/indiana/industries/healthcare/" },
  ],

  // VALUE STACK — 4 services (real H3s). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with Hamilton County LIT handled in payroll and 7% sales tax tracked. <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Indiana monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books, or a fast-growing professional firm that outran its bookkeeping? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">Indiana cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with county-LIT codes and sales tax right from day one. <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">IN QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "County-LIT &amp; sales-tax ready", body: "Payroll mapped to each employee&rsquo;s county rate &mdash; Hamilton, Marion, or beyond &mdash; and a 7% sales-tax setup that reconciles. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">IN county income tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2.
  advisoryBody: "In a high-income professional economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your realization holds, your county-LIT withholding is right across Hamilton and Marion residents, and your partner distributions sit on clean numbers. That judgment is what a named Carmel bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Carmel &amp; Hamilton County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Carmel file every month &mdash; the judgment behind a clean close, from Hamilton County LIT to professional-services WIP and partner economics.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Carmel situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema (same array). (H2: Carmel bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Carmel business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Carmel and Hamilton County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with full fluency in the Hamilton County specifics, from the local income tax (LIT) withholding to professional-services WIP and partner economics, that generic firms often miss." },
    { q: "What is the Hamilton County local income tax (LIT) I need to handle?", a: "Every Indiana county levies a local income tax (LIT) on top of the flat 2.95% state income tax, and Hamilton County is no exception. The rate is set by the employee&rsquo;s county of residence on January 1 (or, for an out-of-state resident, the principal Indiana work county), withheld through Form WH-4, and is the same for residents and nonresidents. Carmel and neighboring Fishers are both in Hamilton County and share the rate, but staff who live in Marion or other counties carry a different rate &mdash; we map each person&rsquo;s county code so payroll reconciles." },
    { q: "Do Carmel and Fishers have the same county income tax?", a: "Yes. Both Carmel and Fishers sit in Hamilton County, so they share the same county local income tax (LIT) rate. What differs between the two cities is the local business mix &mdash; Carmel leans corporate-HQ and professional services, Fishers leans tech and entrepreneurship &mdash; not the county tax. If your business straddles both, the bookkeeping and withholding are handled the same way." },
    { q: "How much does a Carmel bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you &mdash; no surprises." },
    { q: "Do you file my Indiana or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, set up the Hamilton County LIT withholding, track 7% sales tax and the business-personal-property posture, and hand clean, CPA-ready financials to your accountant, who files your Indiana and federal returns. We don&rsquo;t file the county LIT, sales-tax, or business-personal-property returns as agent. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Carmel and Hamilton County businesses remotely. Indiana tax facts &mdash; the flat 2.95% state income tax, the 7% statewide sales tax with no local add-ons, and the Hamilton County local income tax (LIT) shared by Carmel and Fishers &mdash; reflect Indiana Department of Revenue rules current as of the date below and are reviewed periodically against the DOR county-rate list. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs Indiana Department of Revenue &middot; County LIT applied from the current DOR rate list, not a fixed figure &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cities/carmel/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Carmel QuickBooks Accountant & Bookkeeper · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Carmel, IN businesses. Hamilton County local income tax (LIT) handled, 7% sales tax tracked, CPA-ready books, fixed-fee. Serving Hamilton County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/carmel-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-city-carmel-in-brief-text","#in-city-carmel-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/indiana/cities/"},
          {"@type":"ListItem","position":5,"name":"Carmel"}]},
        {"@type":"Service","@id":url+"#service","name":"Carmel Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Carmel and Hamilton County businesses, with the Hamilton County local income tax (LIT) handled in payroll, 7% sales tax tracked, and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns or the county LIT/sales-tax/business-personal-property returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Carmel","sameAs":"https://en.wikipedia.org/wiki/Carmel,_Indiana"},
          {"@type":"AdministrativeArea","name":"Hamilton County, Indiana"},
          {"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, corporate headquarters, finance and insurance firms, and professional-services practices"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
