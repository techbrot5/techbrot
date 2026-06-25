/* /find-an-accountant/delaware/cities/wilmington/ — t-location CITY page (lighter than
 * the DE pillar). Data shape mirrors the NY buffalo child + the DE pillar: JSON front-matter
 * in the .njk; this file supplies content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage · BreadcrumbList · Service · FAQPage).
 *
 * LOCAL ANGLE (genuine): Wilmington is Delaware's LARGEST city and its financial/banking/
 * credit-card and corporate-law corridor (DGCL + Court of Chancery) — and the ONLY Delaware
 * city with a local tax: a 1.25% earned-income (wage) tax + 1.25% net-profits tax. That is the
 * materially-distinct fact that makes this page different from every other DE city page. The
 * statewide Delaware rules (no sales tax → gross receipts tax on the seller; annual franchise
 * tax) apply on top, the same as everywhere in DE.
 *
 * HONESTY (R5): no invented figures (DE-FACTS + City of Wilmington only); no reviews on this
 * page (the 2 real Clutch reviews live on the pillar); no AggregateRating. No founder name in
 * visible content. Independent firm — does NOT file DE returns or the franchise tax/annual
 * report; not a registered agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Wilmington businesses</strong> across New Castle County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Wilmington is the one Delaware city with a <strong>local tax</strong>: a <strong>1.25% earned-income (wage) tax</strong> on residents and on non-residents who work in the city, plus a <strong>1.25% net-profits tax</strong> on sole proprietors and partnerships operating in city limits. On top of that sit the statewide rules &mdash; <strong>no sales tax</strong>, a <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tax</a> on the seller, and the annual <a href=\"/find-an-accountant/delaware/franchise-tax-help/\">franchise tax</a>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/delaware/pricing/\">written scope</a> (from $400/mo monthly; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> from our nearby Middletown office.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Wilmington bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Wilmington businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Wilmington and New Castle County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks from a nearby Middletown office, for Wilmington&rsquo;s finance, professional-services, and corporate economy." },
    { q: "Is there a Wilmington city tax?", a: "<strong>Yes &mdash; the only one in Delaware.</strong> Wilmington levies a 1.25% earned-income (wage) tax on residents and on non-residents who work in the city, plus a 1.25% net-profits tax on sole-proprietor and partnership net profit within city limits. We build it into payroll and owner-comp in QuickBooks." },
    { q: "Does Wilmington have a sales tax?", a: "<strong>No &mdash; Delaware has no sales tax anywhere.</strong> Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% by activity). There is nothing to collect from customers; QuickBooks tracks receipts by activity so the return reconciles." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
    { q: "Do you handle the Delaware franchise tax for a Wilmington entity?", a: "We <strong>track and reserve</strong> for it in the books and confirm the lower-tax method &mdash; but we do not file it. The franchise tax and annual report are filed by your registered agent or CPA ($300 flat for LLCs/LPs; $175&ndash;$200,000 for corporations). We make sure it&rsquo;s never a surprise." },
  ],

  // LOCAL CONTEXT — the un-clonable band. (H2: Why Wilmington books have their own rhythm.)
  localLead: "Wilmington is Delaware&rsquo;s largest city and its financial and corporate-law engine &mdash; and the only Delaware city where the books carry a local tax layer on top of the statewide rules.",
  localBody: [
    "Wilmington grew into a banking and credit-card center after Delaware&rsquo;s financial-services reforms, and it remains the home of the corporate-law economy that the <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Delaware General Corporation Law</a> and the Court of Chancery built &mdash; banks, fund administrators, law and professional-services firms, and the DuPont/Chemours chemical legacy. For a business&rsquo;s books, the defining local fact is the <strong>1.25% city wage and net-profits tax</strong>: it applies to residents and to non-residents who work in the city, and to sole-proprietor and partnership net profit earned within city limits. Payroll and owner-comp in QuickBooks have to account for it for Wilmington workers, or the numbers and the city return drift apart.",
    "Everything else is statewide Delaware: there is <strong>no sales tax to collect</strong>, but a <strong>gross receipts tax</strong> falls on the seller (0.0945%&ndash;1.9914% by business activity, after a monthly or quarterly exclusion), and every Delaware entity owes the annual <strong>franchise tax</strong>. Wilmington&rsquo;s concentration of holding companies and out-of-state-owned entities also means multi-entity and intercompany bookkeeping is routine here &mdash; clean books per entity, a franchise-tax reserve for each, and a clear hand-off to the CPA.",
    "That&rsquo;s where software-only bookkeeping struggles. When the Wilmington wage tax isn&rsquo;t set up, payroll is wrong. When gross receipts aren&rsquo;t tracked by activity, the return doesn&rsquo;t reconcile. When a holding company&rsquo;s entities are commingled in one file, no statement can be trusted. TechBrot keeps a named bookkeeper on your file who knows the Wilmington and Delaware specifics &mdash; and builds them into the monthly close, handed to your CPA <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Wilmington / New Castle County coverage.
  areas: [
    { name: "Downtown / Riverfront", note: "Banks, law &amp; professional-services firms, fund administrators" },
    { name: "Trolley Square / Highlands", note: "Restaurants, retail, small professional practices" },
    { name: "Brandywine / North Wilmington", note: "Healthcare, nonprofits, services" },
    { name: "Prices Corner / Elsmere", note: "Retail, trades, distribution" },
    { name: "Greenville / Centreville", note: "Wealth, advisory, holding companies" },
    { name: "New Castle / corridor", note: "Logistics, manufacturing, cross-county services" },
  ],

  // TAX FACTS — proof-strip grid-3. The local + statewide tax band (DE-FACTS only).
  taxEyebrow: "The Wilmington tax facts we build into your books",
  taxFacts: [
    { fig: "1.25%", desc: "Wilmington wage &amp; net-profits tax &mdash; on residents and non-residents who work in the city, and on sole-proprietor/partnership net profit in city limits. The only city tax in Delaware; we set it up in payroll and owner-comp." },
    { fig: "0%", desc: "Sales tax &mdash; Delaware has none, in Wilmington or anywhere. Instead a gross receipts tax (0.0945%&ndash;1.9914% by activity) falls on the seller; QuickBooks tracks receipts by activity so the return reconciles." },
    { fig: "$300", desc: "Annual franchise tax for an LLC/LP (flat, due June 1); corporations pay from $175 (due March 1). Every Delaware entity owes it &mdash; we track and reserve for it; your registered agent or CPA files." },
  ],
  taxNote: "Always confirm current rates against the <a href=\"https://www.wilmingtonde.gov/residents/earned-income-tax-and-net-profits-tax\" rel=\"noopener nofollow\">City of Wilmington</a> and the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Revenue</a>.",

  // INDUSTRIES — Wilmington verticals, each links to a DE industry page.
  industries: [
    { name: "Finance &amp; Banking", href: "/find-an-accountant/delaware/industries/finance-banking/" },
    { name: "Professional Services", href: "/find-an-accountant/delaware/industries/professional-services/" },
    { name: "Incorporation &amp; Holding Cos", href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/" },
    { name: "Real Estate", href: "/find-an-accountant/delaware/industries/real-estate/" },
    { name: "E-commerce &amp; Retail", href: "/find-an-accountant/delaware/industries/ecommerce/" },
  ],

  // VALUE STACK — 4 services (real H3s). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with gross receipts tracked and the Wilmington wage tax handled in payroll. <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">Delaware monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books, or a commingled multi-entity file? We get it CPA-ready, then keep it clean. <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">Delaware cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with gross-receipts tracking from day one. <a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">DE QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Gross-receipts &amp; franchise-tax ready", body: "Books structured so your gross-receipts return reconciles and the franchise-tax reserve is set. <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">DE gross receipts help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a finance-and-corporate economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your gross-receipts activity category is right, your Wilmington wage tax reconciles, and each entity in a holding structure stands on its own books. That judgment is what a named Wilmington bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Wilmington &amp; New Castle County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Wilmington file every month &mdash; the judgment behind a clean close, from the 1.25% city wage tax to gross-receipts tracking and holding-company books.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Wilmington situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema (same array). (H2: Wilmington bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Wilmington business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Wilmington and New Castle County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; from our nearby Middletown office, with full fluency in the Wilmington and Delaware specifics, from the 1.25% city wage tax to gross-receipts tracking, that out-of-state firms often miss." },
    { q: "Is there a Wilmington city tax I need to handle?", a: "Yes &mdash; and it&rsquo;s the only city tax in Delaware. The City of Wilmington levies a 1.25% earned-income (wage) tax on residents and on non-residents who work in the city, plus a 1.25% net-profits tax on sole proprietors and partnerships operating within city limits. If you have Wilmington workers or operate in the city, payroll and owner-comp in QuickBooks must account for it &mdash; we set that up so it reconciles." },
    { q: "Does Wilmington have a sales tax?", a: "No &mdash; Delaware imposes no state or local sales tax, in Wilmington or anywhere. Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% depending on business activity, after a monthly or quarterly exclusion amount). There&rsquo;s nothing to collect from customers, but QuickBooks needs to track receipts by activity so the right rate applies and the return reconciles to the books." },
    { q: "How much does a Wilmington bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you &mdash; no surprises." },
    { q: "Do you file my Delaware or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, handle the Wilmington wage tax, track gross receipts and the franchise-tax reserve, and hand clean, CPA-ready financials to your accountant, who files your Delaware and federal returns. We&rsquo;re not a registered agent and don&rsquo;t file the franchise tax or annual report. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent Certified QuickBooks ProAdvisor firm with its office in nearby Middletown, serving Wilmington and New Castle County businesses. The Wilmington 1.25% wage and net-profits tax reflects City of Wilmington rules, and Delaware gross-receipts and franchise-tax facts reflect DE Division of Revenue and Division of Corporations rules current as of the date below; all are reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA and registered agent, who file.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs City of Wilmington &amp; DE Division of Revenue/Corporations &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/cities/wilmington/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Wilmington DE Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Wilmington, DE businesses. The 1.25% city wage & net-profits tax handled, gross receipts tracked, CPA-ready books, fixed-fee. Serving New Castle County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/wilmington-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-city-wilmington-in-brief-text","#de-city-wilmington-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/delaware/cities/"},
          {"@type":"ListItem","position":5,"name":"Wilmington"}]},
        {"@type":"Service","@id":url+"#service","name":"Wilmington Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Wilmington and New Castle County businesses, with the 1.25% Wilmington wage and net-profits tax handled, gross receipts tracked by activity, and the franchise-tax reserve set. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax/annual report — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Wilmington","sameAs":"https://en.wikipedia.org/wiki/Wilmington,_Delaware"},
          {"@type":"AdministrativeArea","name":"New Castle County, Delaware"},
          {"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, professional-services firms, finance and banking firms, and holding companies"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
