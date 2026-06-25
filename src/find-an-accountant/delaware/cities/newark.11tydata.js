/* /find-an-accountant/delaware/cities/newark/ — t-location CITY page. LOCAL ANGLE (genuine):
 * Newark (New Castle County) is the University of Delaware town — a student economy, the
 * STAR-Campus research/biotech corridor, retail, and professional services. NO city income
 * tax: only the statewide Delaware rules (no sales tax → gross receipts tax on the seller;
 * annual franchise tax) apply. Through-line: the city changes the economy, not the tax.
 *
 * HONESTY (R5): DE-FACTS figures only; no reviews on this page; no AggregateRating; no founder
 * name in visible content. Independent firm — does NOT file DE returns or the franchise tax/
 * annual report; not a registered agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Newark businesses</strong> across New Castle County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Newark is the <strong>University of Delaware</strong> town &mdash; a student economy, the STAR-Campus research and biotech corridor, retail along Main Street, and professional services. Newark has <strong>no city income tax</strong>; only the statewide Delaware rules apply &mdash; <strong>no sales tax</strong>, a <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tax</a> on the seller, and the annual <a href=\"/find-an-accountant/delaware/franchise-tax-help/\">franchise tax</a>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/delaware/pricing/\">written scope</a> (from $400/mo; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> from our nearby Middletown office.",

  // AI SUMMARY (H2: Newark bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Newark businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Newark and New Castle County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks from our nearby Middletown office, for Newark&rsquo;s student-economy retail, STAR-Campus research and biotech, and professional-services businesses." },
    { q: "Does Newark have a city income tax?", a: "<strong>No.</strong> Wilmington is the only Delaware city with a local wage and net-profits tax. Newark businesses deal only with the statewide Delaware rules &mdash; no sales tax, the gross receipts tax on the seller, and the annual franchise tax." },
    { q: "Does Newark have a sales tax?", a: "<strong>No &mdash; Delaware has no sales tax anywhere.</strong> Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% by activity). QuickBooks tracks receipts by activity so the right rate applies and the return reconciles." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
    { q: "Can you handle a seasonal, student-driven Newark business?", a: "Yes &mdash; it&rsquo;s common near the University of Delaware. We keep the books current through the academic-year peaks and summer lulls, track gross receipts by activity, and produce CPA-ready statements so the return reconciles whatever the season." },
  ],

  // LOCAL CONTEXT (H2: Why Newark books have their own rhythm.)
  localLead: "Newark runs on the University of Delaware &mdash; a student economy with academic-year peaks, a research-and-biotech corridor, and a Main Street of retail and services, none of it carrying a city tax.",
  localBody: [
    "The University of Delaware and its <strong>STAR Campus</strong> shape Newark&rsquo;s economy &mdash; student-driven retail, food and hospitality, professional and tech services, and a growing research/biotech presence, plus retail and distribution along the I-95 corridor. For the books, the wrinkle is seasonality and mix: revenue that swings with the academic calendar, payroll that flexes with it, and grant- or project-funded research businesses that need clean, category-level tracking. That&rsquo;s an operating rhythm, not a tax rule &mdash; because Newark has no city income tax.",
    "Every tax rule a Newark business meets is statewide Delaware: there is <strong>no sales tax to collect</strong>, but a <strong>gross receipts tax</strong> falls on the seller (0.0945%&ndash;1.9914% by activity, after a monthly or quarterly exclusion), and every Delaware entity owes the annual <strong>franchise tax</strong>. Unlike Wilmington, Newark adds no 1.25% city wage tax &mdash; the payroll picture is simpler, and we keep it that way.",
    "Software-only bookkeeping struggles when a seasonal business&rsquo;s books aren&rsquo;t kept current between peaks, when gross receipts aren&rsquo;t tracked by activity, or when a research entity&rsquo;s project costs blur together. TechBrot keeps a named bookkeeper on your file who understands the Newark rhythm and builds it into the monthly close, handed to your CPA <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Newark / western New Castle County coverage.
  areas: [
    { name: "Main Street / Downtown Newark", note: "Retail, restaurants, student-economy services" },
    { name: "University of Delaware / STAR Campus", note: "Research, biotech, education-adjacent" },
    { name: "Newark / Ogletown", note: "Professional services, healthcare, tech" },
    { name: "Pencader / I-95 corridor", note: "Distribution, logistics, light industrial" },
    { name: "Bear-adjacent / Glasgow", note: "Retail, trades, residential small business" },
    { name: "Christiana / Stanton", note: "Retail, healthcare, services" },
  ],

  // TAX FACTS — proof-strip grid-3 (DE-FACTS only).
  taxEyebrow: "The Newark tax facts we build into your books",
  taxFacts: [
    { fig: "$0", desc: "City income tax &mdash; Newark levies none. Only Wilmington has a city wage and net-profits tax; in Newark, payroll and owner-comp follow the statewide rules, with no extra municipal layer." },
    { fig: "0%", desc: "Sales tax &mdash; Delaware has none. Instead a gross receipts tax (0.0945%&ndash;1.9914% by activity) falls on the seller; QuickBooks tracks receipts by activity so the return reconciles to the books." },
    { fig: "$300", desc: "Annual franchise tax for an LLC/LP (flat, due June 1); corporations pay from $175 (due March 1). Every Delaware entity owes it &mdash; we track and reserve for it; your registered agent or CPA files." },
  ],
  taxNote: "Always confirm current rates against the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Revenue</a> and the <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Corporations</a>.",

  // INDUSTRIES — Newark verticals, each links to a DE industry page.
  industries: [
    { name: "Professional Services", href: "/find-an-accountant/delaware/industries/professional-services/" },
    { name: "E-commerce &amp; Retail", href: "/find-an-accountant/delaware/industries/ecommerce/" },
    { name: "Real Estate", href: "/find-an-accountant/delaware/industries/real-estate/" },
    { name: "Incorporation &amp; Holding Cos", href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/" },
  ],

  // VALUE STACK (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with gross receipts tracked by activity and seasonality handled. <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">Delaware monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books after a busy semester? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">Delaware cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with gross-receipts tracking from day one. <a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">DE QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Gross-receipts &amp; franchise-tax ready", body: "Books structured so your gross-receipts return reconciles and the franchise-tax reserve is set. <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">DE gross receipts help &rarr;</a>" },
  ],

  // ADVISORY (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a seasonal, student-driven economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing cash will carry you through the summer lull, your gross-receipts activity category is right, and a research project&rsquo;s costs are tracked cleanly. That judgment is what a named Newark bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Newark &amp; New Castle County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Newark file every month &mdash; the judgment behind a clean close, from seasonal cash flow to gross-receipts tracking.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Newark situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema. (H2: Newark bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Newark business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Newark and New Castle County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; from our nearby Middletown office, with full fluency in the Delaware rules, from gross-receipts tracking to the franchise-tax reserve, and the seasonal swings of a University of Delaware economy." },
    { q: "Does Newark have a city income tax like Wilmington?", a: "No. Wilmington is the only Delaware city that levies a local wage and net-profits tax. A Newark business deals only with the statewide Delaware rules &mdash; no sales tax, the gross receipts tax on the seller, and standard Delaware and federal income taxes &mdash; with no extra municipal tax layer. We keep that simpler payroll picture clean." },
    { q: "Does Delaware have a sales tax?", a: "No &mdash; Delaware imposes no state or local sales tax. Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% depending on business activity, after a monthly or quarterly exclusion amount). There&rsquo;s nothing to collect from customers, but QuickBooks needs to track receipts by activity so the right rate applies and the gross-receipts return reconciles to the books." },
    { q: "How much does a Newark bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Do you file my Delaware or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, track gross receipts and the franchise-tax reserve, and hand clean, CPA-ready financials to your accountant, who files your Delaware and federal returns. We&rsquo;re not a registered agent and don&rsquo;t file the franchise tax or annual report. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent Certified QuickBooks ProAdvisor firm with its office in nearby Middletown, serving Newark and New Castle County businesses. Delaware gross-receipts and franchise-tax facts reflect DE Division of Revenue and Division of Corporations rules current as of the date below and are reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA and registered agent, who file.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs DE Division of Revenue/Corporations &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/cities/newark/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Newark DE Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Newark, DE businesses — the University of Delaware town. Gross receipts tracked, no city income tax, CPA-ready books, fixed-fee. Serving New Castle County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/newark-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-city-newark-in-brief-text","#de-city-newark-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/delaware/cities/"},
          {"@type":"ListItem","position":5,"name":"Newark"}]},
        {"@type":"Service","@id":url+"#service","name":"Newark Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Newark and New Castle County businesses, with gross receipts tracked by activity and the franchise-tax reserve set. No city income tax in Newark. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax/annual report — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Newark","sameAs":"https://en.wikipedia.org/wiki/Newark,_Delaware"},
          {"@type":"AdministrativeArea","name":"New Castle County, Delaware"},
          {"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, student-economy retail and hospitality, research and biotech, and professional-services firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
