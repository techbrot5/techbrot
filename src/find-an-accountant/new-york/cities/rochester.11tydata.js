/* /find-an-accountant/new-york/cities/rochester/ — t-location CITY page (lighter than
 * the NY pillar). Sources: FROZEN EQUITY CONTRACT (contract-ny-rochester.txt) — the ONLY
 * authority for the H1/H2/H3 headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/cities/rochester/index.html, full body read) for body prose.
 * Data shape mirrors buffalo.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies content arrays + an eleventyComputed pageGraph emitting the schema @graph.
 *
 * CONTENT-TO-GOAL (T6): the genuine local angle is preserved — Monroe County, the Finger
 * Lakes, the optics/imaging/photonics legacy (Kodak, Xerox, Bausch & Lomb), the University
 * of Rochester + RIT research base, healthcare, advanced manufacturing — and the materially-
 * different tax contrast vs NYC (8% combined Monroe County sales tax, one of the LOWER NY
 * rates; NO NYC UBT/CRT/8.875%). Real specificity, not a mad-lib clone of the pillar.
 *
 * HONESTY (R5): NO reviews on this city page (the 2 real Clutch reviews live on the
 * pillar; no AggregateRating anywhere). No representative-outcome figures invented.
 * No founder/personal name in visible content. Independent firm — does NOT file NY taxes;
 * coordinates with the client's CPA. Sales-tax facts web-verified vs NYS DTF (8% combined).
 *
 * COBALT VOCABULARY ONLY: stack-8, grid-2/grid-3, checks-list, buyer-card, byline-block,
 * meta-reviewed, faq__list, intake-form partial, section--alt, ai-summary--ruled, trust-row,
 * section__heading/__eyebrow/__lede. Footer-chrome H2s (Accounting/QuickBooks/Company/
 * Network) and "The monthly brief." are NOT rendered (layout/footer owns chrome). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  // Verbatim-preserved from the baseline TL;DR; links kept.
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Rochester businesses</strong> across Monroe County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Rochester&rsquo;s combined sales tax is <strong>8%</strong> (4% New York State + 4% Monroe County) &mdash; one of the lower rates in the state, with no separate city sales tax, and unlike New York City, <strong>no Unincorporated Business Tax or Commercial Rent Tax</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As (baseline verbatim, append-only enrichment).
  // (H2: Rochester bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Rochester businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Rochester and Monroe County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, with Finger Lakes businesses from optics and tech to healthcare to professional services." },
    { q: "What is the Rochester sales tax rate?", a: "<strong>8% combined</strong> &mdash; 4% New York State plus 4% Monroe County &mdash; one of the lower combined rates in New York. No separate Rochester city sales tax. Destination-based, filed on one NYS Web File return." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly." },
    { q: "Does Rochester have the NYC business taxes?", a: "<strong>No.</strong> The Unincorporated Business Tax and Commercial Rent Tax are New York City&ndash;only. Rochester businesses deal with the 8% sales tax and standard New York State and federal taxes &mdash; a simpler, lower tax layer than NYC." },
    { q: "Do you work with tech, optics, and R&amp;D companies?", a: "Yes &mdash; Rochester&rsquo;s optics, photonics, and tech base is core to the local economy. We keep R&amp;D-heavy books, grant tracking, and investor-ready statements clean in QuickBooks so the numbers hold up to scrutiny." },
  ],

  // LOCAL CONTEXT — the un-clonable band (baseline prose verbatim).
  // (H2: Why Rochester books have their own character.)
  localLead: "Rochester isn&rsquo;t New York City &mdash; it&rsquo;s a tech-and-research economy with one of the lower tax layers in the state, and its own Finger Lakes wrinkles that generic, software-only bookkeeping tends to miss.",
  localBody: [
    "Rochester&rsquo;s economy was built on optics, imaging, and precision manufacturing &mdash; the legacy of Kodak, Xerox, and Bausch &amp; Lomb &mdash; and today runs on a dense base of photonics firms, tech startups, and the research engines of the University of Rochester and RIT. That shapes the books: R&amp;D-heavy companies need clean expense tracking for tax credits and grants, startups need investor-ready statements, and a University-adjacent professional-services firm reconciles differently than a Main Street retailer. Add a Monroe County retailer collecting the 8% combined rate and a Finger Lakes hospitality business with seasonal swings, and the bookkeeping has to flex.",
    "This is where software-only bookkeeping struggles. When an R&amp;D company&rsquo;s expenses aren&rsquo;t categorized for credit eligibility, money is left on the table. When grant funds aren&rsquo;t tracked separately, reporting breaks. When sales tax isn&rsquo;t reconciled against the 8% Monroe County rate, the quarterly return drifts. TechBrot keeps a named bookkeeper on your file who understands a Rochester business &mdash; research-driven, often grant- or investor-funded &mdash; keeps books differently, and builds that into the monthly close.",
    "The result: books that reflect how a Rochester business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the sales tax and income returns, and claiming any credits, is fast and accurate.",
  ],

  // AREAS — Monroe County / Finger Lakes coverage (baseline verbatim).
  // (H2: Rochester areas we serve.)
  areas: [
    { name: "Downtown Rochester", note: "Professional services, tech startups, agencies" },
    { name: "University / UofR &amp; RIT area", note: "Research-adjacent firms, healthcare, nonprofits" },
    { name: "Brighton / Pittsford", note: "Professional services, medical, retail" },
    { name: "Henrietta / Greece", note: "Manufacturing, distribution, retail" },
    { name: "Webster / Penfield", note: "Tech, trades, home services" },
    { name: "Finger Lakes region", note: "Hospitality, agriculture, seasonal businesses" },
  ],

  // TAX FACTS — grid-3 + stack-8 (baseline verbatim). The one local tax band.
  // (H2: Rochester sales tax, at a glance.)
  taxEyebrow: "The Rochester tax fact we build into your books",
  taxFacts: [
    { fig: "8%", desc: "Combined sales tax in Rochester &mdash; 4% New York State plus 4% Monroe County, one of the lower combined rates in the state. No separate city sales tax. Tracked and reconciled in QuickBooks for an accurate quarterly NYS return." },
    { fig: "1", desc: "Web File return &mdash; New York centralizes filing, so however many jurisdictions you sell into, you file one NYS sales-tax return. Destination-based: you charge the rate where the customer takes delivery." },
    { fig: "$110", desc: "Clothing &amp; footwear under $110 per item are exempt from the 4% state rate statewide; Monroe County&rsquo;s local share may still apply. We flag taxable-vs-exempt so the books are right." },
  ],

  // INDUSTRIES — Rochester verticals, each links to a NY industry page (baseline verbatim).
  // (H2: Industry-specific bookkeeping for Rochester businesses.)
  industries: [
    { name: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/" },
    { name: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/" },
    { name: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/" },
    { name: "Construction", href: "/find-an-accountant/new-york/industries/construction/" },
    { name: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/" },
    { name: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/" },
  ],

  // VALUE STACK — 4 services (the 4 contract H3s, verbatim). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with Rochester sales tax tracked. <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">New York monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">New York cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop. <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">NY QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your quarterly NYS sales-tax return reconciles cleanly. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2 (baseline body verbatim).
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a research-and-tech economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your R&amp;D spend is captured for credits, your grant reporting reconciles, or your burn rate before the next raise. That judgment is what a named Rochester bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline cards (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Rochester &amp; the Finger Lakes",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Rochester file every month &mdash; the judgment behind a clean close, from the 8% Monroe County rate to R&amp;D and grant-fund tracking.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Rochester situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 8 contract Q/A VERBATIM. visible = FAQPage schema (same array). Append-only.
  // (H2: Rochester bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Rochester business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Rochester and Monroe County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Rochester realities, from the 8% Monroe County sales tax to R&amp;D and grant tracking, that a generic bookkeeper often misses." },
    { q: "What is the Rochester sales tax rate?", a: "Rochester&rsquo;s combined sales tax is 8% &mdash; 4% New York State plus 4% Monroe County &mdash; one of the lower combined rates in New York State. There is no separate Rochester city sales tax. New York is destination-based, so you charge the rate where your customer takes delivery, and you file one NYS Web File sales-tax return regardless of how many jurisdictions you sell into. We track it in QuickBooks so your quarterly return reconciles to the books." },
    { q: "Does Rochester have the NYC Unincorporated Business Tax or Commercial Rent Tax?", a: "No &mdash; and that&rsquo;s a real simplification. The Unincorporated Business Tax (UBT) and Commercial Rent Tax (CRT) are New York City&ndash;only taxes. A Rochester business deals with the 8% combined sales tax plus standard New York State and federal income taxes, with no separate city-level business tax. Combined with one of the state&rsquo;s lower sales-tax rates, the Rochester tax layer is notably lighter than a comparable NYC business&rsquo;s." },
    { q: "How much does a Rochester bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. We scope transparently before any work begins, so there are no surprises." },
    { q: "Do you work with tech, optics, and R&amp;D companies?", a: "Yes &mdash; this is central to Rochester&rsquo;s economy, from photonics and optics firms to University- and RIT-adjacent startups. We keep R&amp;D-heavy expense tracking, grant-fund separation, and investor- or board-ready statements clean in QuickBooks, so your numbers support credit claims and hold up to investor scrutiny. We handle the bookkeeping; your CPA advises on R&amp;D tax credits and filing." },
    { q: "Can you clean up a messy Rochester QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Rochester businesses fall behind in their books for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you work with Rochester healthcare, hospitality, and professional services?", a: "Yes &mdash; those are common Rochester verticals, alongside tech, real estate, and nonprofits. Each has specific needs: healthcare practices need insurance-receipt and payroll reconciliation, hospitality and Finger Lakes seasonal businesses need cash-flow visibility across swings, and professional-services firms need clean books for partner reporting. See our New York industry pages for the detail." },
    { q: "How do we get started in Rochester?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Rochester situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name (baseline verbatim).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Rochester and Monroe County businesses. The Rochester combined sales-tax rate (8% = 4% New York State + 4% Monroe County) reflects New York State Department of Taxation and Finance rates current as of the date below and is reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYS Dept of Taxation &amp; Finance &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/rochester/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Rochester Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Rochester, NY businesses. Monroe County 8% sales tax tracked, CPA-ready books, fixed-fee. Serving Rochester & the Finger Lakes remotely.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/rochester-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-rochester-in-brief-text","#ny-rochester-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"Rochester"}]},
        {"@type":"Service","@id":url+"#service","name":"Rochester Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Rochester and Monroe County businesses, with Monroe County 8% sales tax tracked and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Rochester","sameAs":"https://en.wikipedia.org/wiki/Rochester,_New_York"},
          {"@type":"AdministrativeArea","name":"Monroe County, New York"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
