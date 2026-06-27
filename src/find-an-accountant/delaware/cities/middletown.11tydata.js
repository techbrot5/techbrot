/* /find-an-accountant/delaware/cities/middletown/ — t-location CITY page. LOCAL ANGLE
 * (genuine + distinctive): Middletown (New Castle County) is TechBrot's HOME OFFICE
 * (651 N Broad St, Suite 201, 19709) — and Delaware's fastest-growing town: US-301
 * logistics/distribution warehouses, retail, heavy new construction, a bedroom community.
 * NO city wage tax: only the statewide Delaware rules (no sales tax → gross receipts tax on
 * the seller; annual franchise tax) apply. The page may state the home-office fact plainly.
 *
 * HONESTY (R5): DE-FACTS figures only; no reviews on this page (Clutch reviews live on the
 * pillar); no AggregateRating; no founder name in visible content. Independent firm — does NOT
 * file DE returns or the franchise tax/annual report; not a registered agent; coordinates with
 * the client's CPA. The Middletown address is the REAL TechBrot office (per DE-FACTS + the
 * global #organization node) — the only place a street address is asserted off the pillar. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY (H2: The short version.)
  summarized: "Middletown is home for TechBrot &mdash; our office is at <strong>651 N Broad St, Suite 201</strong>, right here in town. We provide <strong>Certified QuickBooks ProAdvisor bookkeeping for Middletown businesses</strong> and the greater MOT area &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Middletown is <strong>Delaware&rsquo;s fastest-growing town</strong>, built on US-301 logistics, distribution warehouses, retail, and heavy new construction. There&rsquo;s <strong>no city wage tax</strong>; only the statewide Delaware rules apply &mdash; <strong>no sales tax</strong>, a <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tax</a> on the seller, and the annual <a href=\"/find-an-accountant/delaware/franchise-tax-help/\">franchise tax</a>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/delaware/pricing/\">written scope</a> (from $400/mo; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY (H2: Middletown bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Middletown businesses?", a: "<strong>TechBrot &mdash; Middletown is our home office, at 651 N Broad St, Suite 201.</strong> We provide Certified QuickBooks ProAdvisor bookkeeping across Middletown and the MOT area, a named bookkeeper per file, for the town&rsquo;s logistics, construction, retail, and small-business economy." },
    { q: "Does Middletown have a city wage tax?", a: "<strong>No.</strong> Wilmington is the only Delaware city with a local wage and net-profits tax. Middletown businesses deal only with the statewide Delaware rules &mdash; no sales tax, the gross receipts tax on the seller, and the annual franchise tax." },
    { q: "Does Middletown have a sales tax?", a: "<strong>No &mdash; Delaware has no sales tax anywhere.</strong> Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% by activity). QuickBooks tracks receipts by activity so the right rate applies and the return reconciles." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
    { q: "Can you handle a Middletown construction or warehouse business?", a: "Yes &mdash; they&rsquo;re core to a fast-growing town. We keep job-costing and WIP clean for builders, inventory and receipts clean for distribution, track gross receipts by activity, and produce CPA-ready statements for your CPA to file." },
  ],

  // LOCAL CONTEXT (H2: Why Middletown books have their own rhythm.)
  localLead: "Middletown is home &mdash; TechBrot&rsquo;s office is here &mdash; and it&rsquo;s Delaware&rsquo;s fastest-growing town, a place where the books move at the speed of new construction and US-301 freight.",
  localBody: [
    "Once a quiet crossroads, Middletown and the greater <strong>MOT (Middletown-Odessa-Townsend)</strong> area have boomed: the <strong>US-301</strong> toll corridor brought logistics and distribution warehouses, new housing brought retail and home services, and the build-out itself keeps construction firms busy. For the books, growth is the wrinkle &mdash; <strong>job costing and WIP</strong> for builders, <strong>inventory and COGS</strong> for distribution, and revenue ramping faster than a one-person back office can keep up with. That&rsquo;s an operating reality, not a tax quirk, because Middletown has no city tax.",
    "Every tax rule a Middletown business meets is statewide Delaware: there is <strong>no sales tax to collect</strong>, but a <strong>gross receipts tax</strong> falls on the seller (0.0945%&ndash;1.9914% by activity, after a monthly or quarterly exclusion), and every Delaware entity owes the annual <strong>franchise tax</strong>. Unlike Wilmington, Middletown adds no 1.25% city wage tax.",
    "Software-only bookkeeping struggles when a builder&rsquo;s jobs aren&rsquo;t costed, when a warehouse&rsquo;s inventory drifts from the books, or when fast growth outruns the monthly close. Being based in Middletown, TechBrot keeps a named bookkeeper on your file who knows the local economy first-hand and builds it into the close, handed to your CPA <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Middletown / MOT area coverage.
  areas: [
    { name: "Downtown Middletown", note: "Retail, restaurants, professional services" },
    { name: "US-301 corridor", note: "Logistics, distribution, warehousing" },
    { name: "Westown / Bunker Hill", note: "New construction, home services, retail" },
    { name: "Odessa / Townsend", note: "Small business, trades, residential" },
    { name: "MOT growth area", note: "Builders, developers, contractors" },
    { name: "Southern New Castle County", note: "Distribution, retail, services" },
  ],

  // TAX FACTS — proof-strip grid-3 (DE-FACTS only).
  taxEyebrow: "The Middletown tax facts we build into your books",
  taxFacts: [
    { fig: "$0", desc: "City wage tax &mdash; Middletown levies none. Only Wilmington has a city wage and net-profits tax; in Middletown, payroll and owner-comp follow the statewide rules, with no extra municipal layer." },
    { fig: "0%", desc: "Sales tax &mdash; Delaware has none. Instead a gross receipts tax (0.0945%&ndash;1.9914% by activity) falls on the seller; QuickBooks tracks receipts by activity so the return reconciles to the books." },
    { fig: "$300", desc: "Annual franchise tax for an LLC/LP (flat, due June 1); corporations pay from $175 (due March 1). Every Delaware entity owes it &mdash; we track and reserve for it; your registered agent or CPA files." },
  ],
  taxNote: "Always confirm current rates against the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Revenue</a> and the <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Corporations</a>.",

  // INDUSTRIES — Middletown verticals, each links to a DE industry page.
  industries: [
    { name: "Construction", href: "/find-an-accountant/delaware/industries/construction/" },
    { name: "Real Estate", href: "/find-an-accountant/delaware/industries/real-estate/" },
    { name: "E-commerce &amp; Retail", href: "/find-an-accountant/delaware/industries/ecommerce/" },
    { name: "Professional Services", href: "/find-an-accountant/delaware/industries/professional-services/" },
  ],

  // VALUE STACK (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with gross receipts tracked and job costs kept current. <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">Delaware monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Outgrown your back office? We get the file CPA-ready, then keep it clean as you scale. <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">Delaware cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with gross-receipts tracking from day one. <a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">DE QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Gross-receipts &amp; franchise-tax ready", body: "Books structured so your gross-receipts return reconciles and the franchise-tax reserve is set. <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">DE gross receipts help &rarr;</a>" },
  ],

  // ADVISORY (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a fast-growing, build-driven economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing a job&rsquo;s margins are holding, cash will cover the next payroll through a growth spurt, and your gross-receipts activity category is right. That judgment is what a named Middletown bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Middletown &amp; the MOT area",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Middletown file every month &mdash; the judgment behind a clean close, from job costing to gross-receipts tracking, run from our office right here in town.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Middletown situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema. (H2: Middletown bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Middletown business?", a: "Yes &mdash; Middletown is our home office, at 651 N Broad St, Suite 201. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Middletown and the MOT area, by a named bookkeeper on the same file every month, working in QuickBooks Online or hosted Desktop, with full fluency in the Delaware rules and the local logistics, construction, and retail economy." },
    { q: "Does Middletown have a city wage tax like Wilmington?", a: "No. Wilmington is the only Delaware city that levies a local wage and net-profits tax. A Middletown business deals only with the statewide Delaware rules &mdash; no sales tax, the gross receipts tax on the seller, and standard Delaware and federal income taxes &mdash; with no extra municipal tax layer. We keep that simpler payroll picture clean." },
    { q: "Does Delaware have a sales tax?", a: "No &mdash; Delaware imposes no state or local sales tax. Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% depending on business activity, after a monthly or quarterly exclusion amount). There&rsquo;s nothing to collect from customers, but QuickBooks needs to track receipts by activity so the right rate applies and the gross-receipts return reconciles to the books." },
    { q: "How much does a Middletown bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor right here in Middletown will scope it with you." },
    { q: "Do you file my Delaware or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, track gross receipts and the franchise-tax reserve, and hand clean, CPA-ready financials to your accountant, who files your Delaware and federal returns. We&rsquo;re not a registered agent and don&rsquo;t file the franchise tax or annual report. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent Certified QuickBooks ProAdvisor firm headquartered in Middletown (651 N Broad St, Suite 201), serving Middletown and the MOT area. Delaware gross-receipts and franchise-tax facts reflect DE Division of Revenue and Division of Corporations rules current as of the date below and are reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA and registered agent, who file.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience &middot; Middletown, DE office" },
    { label: "Standards", detail: "Verified vs DE Division of Revenue/Corporations &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/cities/middletown/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Middletown DE Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Middletown, DE businesses — TechBrot's home office. Gross receipts tracked, no city wage tax, CPA-ready books, fixed-fee. Serving the MOT area.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-cities-middletown.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-city-middletown-in-brief-text","#de-city-middletown-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/delaware/cities/"},
          {"@type":"ListItem","position":5,"name":"Middletown"}]},
        {"@type":"Service","@id":url+"#service","name":"Middletown Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Middletown and the MOT area, delivered from TechBrot's home office, with gross receipts tracked by activity and the franchise-tax reserve set. No city wage tax in Middletown. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax/annual report — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Middletown","sameAs":"https://en.wikipedia.org/wiki/Middletown,_Delaware"},
          {"@type":"AdministrativeArea","name":"New Castle County, Delaware"},
          {"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, construction and contracting firms, logistics and distribution, and retail"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
