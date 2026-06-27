/* /find-an-accountant/indiana/cities/hammond/ — t-location CITY page. JSON front-matter in
 * the .njk; this file supplies content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage · BreadcrumbList · Service [areaServed = City] · FAQPage).
 *
 * LOCAL ANGLE (genuine): Hammond is Northwest Indiana — "The Region" — part of the Chicago metropolitan
 * area and the Calumet industrial corridor: heavy industry and steel legacy, oil refining nearby (BP
 * Whiting), logistics/rail, and small business serving the Chicago-adjacent market; Purdue University
 * Northwest is here. Lake County's economy and labor market are tightly linked to Chicago. IN-distinct
 * tax thread: the LAKE COUNTY local income tax (LIT), with genuine Illinois multi-state nexus. NEVER
 * quote a county % — framed qualitatively + DOR county-rate page linked.
 *
 * HONESTY (R5): IN-FACTS figures only; NO street address (areaServed-only); no reviews; no
 * AggregateRating; no founder name in visible content. Independent firm — does NOT file IN returns
 * as agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Hammond businesses</strong> across Lake County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. The Indiana-specific wrinkle is the <strong>Lake County local income tax (LIT)</strong>: every county levies its own LIT on top of the flat 2.95% state rate, set by your <strong>county of residence on January 1</strong> and withheld through <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Form WH-4</a>. As a Chicago-metro border city, Hammond businesses also watch Illinois multi-state nexus. Indiana sales tax is a clean statewide 7% with <strong>no local add-ons</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (from $400/mo monthly; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Hammond bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Hammond businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Hammond and Lake County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, for Northwest Indiana&rsquo;s heavy-industry, logistics, and Chicago-adjacent small-business economy." },
    { q: "What is the Lake County local income tax?", a: "<strong>A county income tax (LIT) on top of Indiana&rsquo;s flat 2.95% state rate.</strong> Lake County sets its own rate; it&rsquo;s determined by your county of residence on January 1, withheld via Form WH-4, and the same for residents and nonresidents. We apply the correct current rate in payroll." },
    { q: "Does being next to Chicago affect my books?", a: "<strong>Yes.</strong> Hammond sits on the Illinois line in the Chicago metro, so businesses often have Illinois customers, vendors, or workers &mdash; which can create Illinois sales-tax nexus and cross-state payroll questions. We track where sales and work happen so the exposure is visible; your CPA advises on Illinois filings." },
    { q: "Does Hammond have a local sales tax?", a: "<strong>No &mdash; Indiana&rsquo;s 7% sales tax is statewide with no county or city add-ons</strong> (unlike Cook County, Illinois next door). One clean Indiana rate simplifies setup, but the 7% still applies to taxable goods and services and must be configured and remitted." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
  ],

  // LOCAL CONTEXT — the un-clonable band. (H2: Why Hammond books have their own rhythm.)
  localLead: "Hammond is the heart of Northwest Indiana &mdash; &ldquo;The Region,&rdquo; part of the Chicago metro and the Calumet industrial corridor &mdash; and a business&rsquo;s books here carry the Lake County local income tax plus genuine Illinois cross-border exposure.",
  localBody: [
    "Hammond&rsquo;s economy was forged in steel and refining and now mixes heavy industry, rail and truck logistics, and a deep base of small businesses serving a labor market that crosses the Illinois line into Chicago &mdash; with oil refining nearby at BP Whiting and Purdue University Northwest in town. For a manufacturer or industrial supplier that means inventory, job costing, equipment depreciation, and the business-personal-property posture; for a logistics operator it means per-lane profitability and fleet costs; for a retailer or service business it means handling Indiana and Illinois customers cleanly. The bookkeeping has to reflect a Chicago-adjacent industrial economy, not an isolated one.",
    "The defining Indiana tax fact is the <strong>Lake County local income tax (LIT)</strong>. Every Indiana county levies its own LIT rate on top of the flat 2.95% state income tax, set by the employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; withheld through <strong>Form WH-4</strong>, the same rate for residents and nonresidents. Because The Region&rsquo;s workforce includes Illinois residents and people who cross county lines, residency drives the Indiana rate, and out-of-state residents whose principal Indiana work county is Lake pay that rate. Indiana sales tax is the simple part: a clean 7% statewide, with no city or county add-ons &mdash; a notable contrast with Cook County&rsquo;s layered rates next door &mdash; though selling into Illinois can create nexus there.",
    "That&rsquo;s where software-only bookkeeping struggles. When the county LIT isn&rsquo;t mapped to residency, payroll is wrong. When Indiana and Illinois sales aren&rsquo;t separated by destination, multi-state nexus surprises follow. TechBrot keeps a named bookkeeper on your file who knows the Lake County and Chicago-metro specifics &mdash; and builds them into the monthly close, handed to your CPA <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Hammond / Lake County coverage.
  areas: [
    { name: "Downtown / Hohman Avenue", note: "Retail, professional services, small business" },
    { name: "Calumet / industrial corridor", note: "Heavy industry, steel, refining suppliers" },
    { name: "Woodmar / Hessville", note: "Retail, trades, services" },
    { name: "Robertsdale / state line", note: "Chicago-adjacent business &mdash; Illinois nexus" },
    { name: "Purdue Northwest area", note: "University-adjacent services, startups" },
    { name: "Lake County &mdash; Gary, Munster, Whiting", note: "Cross-county LIT &amp; The Region" },
  ],

  // TAX FACTS — proof-strip grid-3. State + county LIT band (IN-FACTS only; LIT qualitative).
  taxEyebrow: "The Indiana tax facts we build into your books",
  taxFacts: [
    { fig: "2.95%", desc: "Indiana&rsquo;s flat state income tax for 2026 (no brackets), scheduled to fall to 2.90% in 2027. The county local income tax (LIT) is added on top." },
    { fig: "Lake LIT", desc: "Lake County levies its own local income tax (LIT) on top of the state rate &mdash; set by your county of residence on January 1, withheld via Form WH-4, same rate for residents and nonresidents. We apply the correct current county rate in payroll, even across the Illinois-resident workforce." },
    { fig: "7%", desc: "Indiana sales tax &mdash; a flat 7% statewide, with no county or city add-ons (a contrast with Cook County, IL next door). Selling into Illinois can still create nexus there." },
  ],
  taxNote: "County LIT rates vary by county and change periodically &mdash; we apply the current rate from the <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Indiana DOR county tax rates</a> page rather than a fixed figure. Always confirm current rates against the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>.",

  // INDUSTRIES — Hammond verticals (IN industry pages).
  industries: [
    { name: "Manufacturing", href: "/find-an-accountant/indiana/industries/manufacturing/" },
    { name: "Logistics &amp; Distribution", href: "/find-an-accountant/indiana/industries/logistics-distribution/" },
    { name: "Construction", href: "/find-an-accountant/indiana/industries/construction/" },
    { name: "Real Estate", href: "/find-an-accountant/indiana/industries/real-estate/" },
  ],

  // VALUE STACK — 4 services (real H3s). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with Lake County LIT handled in payroll and 7% sales tax tracked. <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Indiana monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books, or an industrial business with tangled Indiana/Illinois activity? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">Indiana cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with county-LIT codes and sales tax right from day one. <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">IN QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "County-LIT &amp; sales-tax ready", body: "Payroll mapped to each employee&rsquo;s county rate and a 7% sales-tax setup that separates Indiana and Illinois destinations. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">IN county income tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2.
  advisoryBody: "In a Chicago-adjacent industrial economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your job costs are accurate, your county-LIT withholding follows residency, and your Illinois nexus is tracked before it becomes a notice. That judgment is what a named Hammond bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Hammond &amp; Lake County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Hammond file every month &mdash; the judgment behind a clean close, from Lake County LIT to Illinois cross-border nexus and industrial job costing.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Hammond situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p CT", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema (same array). (H2: Hammond bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Hammond business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Hammond and Lake County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with full fluency in the Northwest Indiana specifics, from Lake County&rsquo;s local income tax (LIT) to Illinois cross-border nexus, that generic firms often miss." },
    { q: "What is the Lake County local income tax (LIT) I need to handle?", a: "Every Indiana county levies a local income tax (LIT) on top of the flat 2.95% state income tax, and Lake County is no exception. The rate is set by the employee&rsquo;s county of residence on January 1 (or, for an out-of-state resident, the principal Indiana work county), withheld through Form WH-4, and is the same for residents and nonresidents. Because The Region&rsquo;s workforce includes Illinois residents, residency drives the Indiana county rate &mdash; we map the right code per employee so payroll reconciles." },
    { q: "Does being on the Chicago border affect my sales tax?", a: "It can. Indiana&rsquo;s sales tax is a flat 7% statewide with no local add-ons &mdash; simpler than Cook County, Illinois next door &mdash; but when a Hammond business sells taxable goods into Illinois it may create economic nexus there, triggering registration and filing. We track sales by destination in QuickBooks so any Illinois exposure surfaces early; your CPA advises on the out-of-state filings." },
    { q: "How much does a Hammond bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you &mdash; no surprises." },
    { q: "Do you file my Indiana or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, set up the Lake County LIT withholding, track 7% sales tax and Illinois nexus, and hand clean, CPA-ready financials to your accountant, who files your Indiana and federal returns. We don&rsquo;t file the county LIT, sales-tax, or business-personal-property returns as agent. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Hammond and Lake County businesses remotely. Indiana tax facts &mdash; the flat 2.95% state income tax, the 7% statewide sales tax with no local add-ons, and the Lake County local income tax (LIT) &mdash; reflect Indiana Department of Revenue rules current as of the date below and are reviewed periodically against the DOR county-rate list. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs Indiana Department of Revenue &middot; County LIT applied from the current DOR rate list, not a fixed figure &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/cities/hammond/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Hammond QuickBooks Accountant & Bookkeeper · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Hammond, IN businesses. Lake County local income tax (LIT) handled, 7% sales tax and Illinois nexus tracked, CPA-ready books, fixed-fee.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-cities-hammond.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-city-hammond-in-brief-text","#in-city-hammond-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/indiana/cities/"},
          {"@type":"ListItem","position":5,"name":"Hammond"}]},
        {"@type":"Service","@id":url+"#service","name":"Hammond Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Hammond and Lake County businesses, with the Lake County local income tax (LIT) handled in payroll, 7% sales tax and Illinois nexus tracked, and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns or the county LIT/sales-tax/business-personal-property returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Hammond","sameAs":"https://en.wikipedia.org/wiki/Hammond,_Indiana"},
          {"@type":"AdministrativeArea","name":"Lake County, Indiana"},
          {"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, industrial manufacturers, logistics and distribution firms, and Chicago-adjacent service businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
