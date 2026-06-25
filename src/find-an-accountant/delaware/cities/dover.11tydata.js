/* /find-an-accountant/delaware/cities/dover/ — t-location CITY page. Mirrors the buffalo
 * child + DE pillar shape. LOCAL ANGLE (genuine): Dover is Delaware's STATE CAPITAL (Kent
 * County) — state government, Dover Air Force Base, Delaware State University, Bayhealth
 * healthcare, and agriculture services anchor the economy. NO city wage tax: only the
 * statewide Delaware rules (no sales tax → gross receipts tax on the seller; annual franchise
 * tax) apply. Through-line: the city changes the economy, not the tax.
 *
 * HONESTY (R5): DE-FACTS figures only; no reviews on this page; no AggregateRating; no founder
 * name in visible content. Independent firm — does NOT file DE returns or the franchise tax/
 * annual report; not a registered agent; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY (H2: The short version.)
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Dover businesses</strong> across Kent County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. As <strong>Delaware&rsquo;s state capital</strong>, Dover&rsquo;s economy runs on government, Dover Air Force Base, Delaware State University, and Bayhealth healthcare &mdash; a steady base of government contractors, professional services, and agriculture-adjacent businesses. Dover has <strong>no city wage tax</strong>; only the statewide Delaware rules apply &mdash; <strong>no sales tax</strong>, a <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tax</a> on the seller, and the annual <a href=\"/find-an-accountant/delaware/franchise-tax-help/\">franchise tax</a>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/delaware/pricing/\">written scope</a> (from $400/mo; cleanup from $1,200). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> from our Middletown office.",

  // AI SUMMARY (H2: Dover bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Dover businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Dover and Kent County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks from our nearby Middletown office, for the state capital&rsquo;s government-contractor, professional-services, healthcare, and agriculture-adjacent economy." },
    { q: "Does Dover have a city wage tax?", a: "<strong>No.</strong> Wilmington is the only Delaware city with a local wage and net-profits tax. Dover businesses deal only with the statewide Delaware rules &mdash; no sales tax, the gross receipts tax on the seller, and the annual franchise tax." },
    { q: "Does Dover have a sales tax?", a: "<strong>No &mdash; Delaware has no sales tax anywhere.</strong> Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% by activity). QuickBooks tracks receipts by activity so the right rate applies and the return reconciles." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong> for monthly bookkeeping; <strong>from $1,200</strong> for one-time cleanup; QuickBooks setup <strong>from $750</strong>. Fixed-fee against a written scope, never hourly &mdash; priced after a free discovery call." },
    { q: "Can you handle a Dover government contractor&rsquo;s books?", a: "Yes. We keep clean job- and contract-level books for government-contracting and professional-services firms, track gross receipts by activity, and produce CPA-ready statements &mdash; coordinating with your CPA, who files the Delaware and federal returns." },
  ],

  // LOCAL CONTEXT (H2: Why Dover books have their own rhythm.)
  localLead: "Dover is the seat of Delaware&rsquo;s state government &mdash; and a Kent County economy built on the public sector, the military, the university, and healthcare, not on a downstate tax quirk.",
  localBody: [
    "As the state capital, Dover&rsquo;s business base leans on <strong>state government, Dover Air Force Base, Delaware State University, and Bayhealth</strong>, surrounded by government contractors, professional-services firms, retail, and agriculture-services businesses tied to central Delaware&rsquo;s farm economy. For the books, what matters is matching that mix &mdash; contract- and grant-tracked revenue, clean owner-comp, and gross receipts categorized correctly &mdash; not a city tax, because Dover has none.",
    "Every tax rule a Dover business meets is statewide Delaware: there is <strong>no sales tax to collect</strong>, but a <strong>gross receipts tax</strong> falls on the seller (0.0945%&ndash;1.9914% by activity, after a monthly or quarterly exclusion), and every Delaware entity owes the annual <strong>franchise tax</strong>. Unlike Wilmington, Dover adds no 1.25% city wage tax &mdash; a genuinely simpler payroll picture, which we keep that way.",
    "Software-only bookkeeping still struggles here when gross receipts aren&rsquo;t tracked by activity, when a contractor&rsquo;s jobs aren&rsquo;t kept separate, or when the franchise-tax reserve is forgotten until it&rsquo;s due. TechBrot keeps a named bookkeeper on your file who understands a Dover business and builds that into the monthly close, handed to your CPA <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">CPA-ready</a>.",
  ],

  // AREAS — Dover / Kent County coverage.
  areas: [
    { name: "Downtown Dover", note: "Government services, professional firms, retail" },
    { name: "Dover AFB area", note: "Contractors, logistics, services" },
    { name: "Delaware State University", note: "Education-adjacent, nonprofits, services" },
    { name: "Camden / Wyoming", note: "Retail, trades, small business" },
    { name: "Route 13 corridor", note: "Retail, auto, distribution" },
    { name: "Kent County / ag belt", note: "Agriculture services, equipment, family business" },
  ],

  // TAX FACTS — proof-strip grid-3 (DE-FACTS only).
  taxEyebrow: "The Dover tax facts we build into your books",
  taxFacts: [
    { fig: "$0", desc: "City wage tax &mdash; Dover levies none. Only Wilmington has a city wage and net-profits tax; in Dover, payroll and owner-comp follow the statewide rules, with no extra municipal layer." },
    { fig: "0%", desc: "Sales tax &mdash; Delaware has none. Instead a gross receipts tax (0.0945%&ndash;1.9914% by activity) falls on the seller; QuickBooks tracks receipts by activity so the return reconciles to the books." },
    { fig: "$300", desc: "Annual franchise tax for an LLC/LP (flat, due June 1); corporations pay from $175 (due March 1). Every Delaware entity owes it &mdash; we track and reserve for it; your registered agent or CPA files." },
  ],
  taxNote: "Always confirm current rates against the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Revenue</a> and the <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Corporations</a>.",

  // INDUSTRIES — Dover verticals, each links to a DE industry page.
  industries: [
    { name: "Professional Services", href: "/find-an-accountant/delaware/industries/professional-services/" },
    { name: "Construction", href: "/find-an-accountant/delaware/industries/construction/" },
    { name: "Real Estate", href: "/find-an-accountant/delaware/industries/real-estate/" },
    { name: "E-commerce &amp; Retail", href: "/find-an-accountant/delaware/industries/ecommerce/" },
  ],

  // VALUE STACK (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with gross receipts tracked by activity. <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">Delaware monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">Delaware cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop, with gross-receipts tracking from day one. <a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">DE QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Gross-receipts &amp; franchise-tax ready", body: "Books structured so your gross-receipts return reconciles and the franchise-tax reserve is set. <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">DE gross receipts help &rarr;</a>" },
  ],

  // ADVISORY (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a government-and-services economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing a contract&rsquo;s margins are holding, your gross-receipts activity category is right, and cash will cover the franchise-tax reserve when it&rsquo;s due. That judgment is what a named Dover bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Dover &amp; Kent County",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Dover file every month &mdash; the judgment behind a clean close, from gross-receipts tracking to contract-level reporting.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Dover situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 5 Q/A, answer-first. visible = FAQPage schema. (H2: Dover bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Dover business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Dover and Kent County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; from our nearby Middletown office, with full fluency in the Delaware rules, from gross-receipts tracking to the franchise-tax reserve, that out-of-state firms often miss." },
    { q: "Does Dover have a city wage tax like Wilmington?", a: "No. Wilmington is the only Delaware city that levies a local wage and net-profits tax. A Dover business deals only with the statewide Delaware rules &mdash; no sales tax, the gross receipts tax on the seller, and standard Delaware and federal income taxes &mdash; with no extra municipal tax layer. Your payroll picture is simpler than a comparable Wilmington business&rsquo;s, and we keep it that way." },
    { q: "Does Delaware have a sales tax?", a: "No &mdash; Delaware imposes no state or local sales tax. Instead, businesses owe a gross receipts tax on their own total receipts (0.0945%&ndash;1.9914% depending on business activity, after a monthly or quarterly exclusion amount). There&rsquo;s nothing to collect from customers, but QuickBooks needs to track receipts by activity so the right rate applies and the gross-receipts return reconciles to the books." },
    { q: "How much does a Dover bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Monthly bookkeeping starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200, with final pricing set by transaction volume, entity count, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Do you file my Delaware or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, track gross receipts and the franchise-tax reserve, and hand clean, CPA-ready financials to your accountant, who files your Delaware and federal returns. We&rsquo;re not a registered agent and don&rsquo;t file the franchise tax or annual report. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent Certified QuickBooks ProAdvisor firm with its office in nearby Middletown, serving Dover and Kent County businesses. Delaware gross-receipts and franchise-tax facts reflect DE Division of Revenue and Division of Corporations rules current as of the date below and are reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA and registered agent, who file.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs DE Division of Revenue/Corporations &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/cities/dover/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Dover DE Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Dover, DE businesses — Delaware's state capital. Gross receipts tracked, no city wage tax, CPA-ready books, fixed-fee. Serving Kent County.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/dover-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-city-dover-in-brief-text","#de-city-dover-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/delaware/cities/"},
          {"@type":"ListItem","position":5,"name":"Dover"}]},
        {"@type":"Service","@id":url+"#service","name":"Dover Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Dover and Kent County businesses, with gross receipts tracked by activity and the franchise-tax reserve set. No city wage tax in Dover. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax/annual report — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Dover","sameAs":"https://en.wikipedia.org/wiki/Dover,_Delaware"},
          {"@type":"AdministrativeArea","name":"Kent County, Delaware"},
          {"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, government contractors, professional-services firms, and agriculture-services businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
