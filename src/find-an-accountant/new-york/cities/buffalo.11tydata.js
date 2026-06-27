/* /find-an-accountant/new-york/cities/buffalo/ — t-location CITY page (lighter than
 * the NY pillar). Sources: FROZEN EQUITY CONTRACT (contract-ny-buffalo.txt) — the ONLY
 * authority for the H1/H2/H3 headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/cities/buffalo/index.html, full body read) for body prose.
 * Data shape mirrors new-york.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies content arrays + an eleventyComputed pageGraph emitting the schema @graph.
 *
 * CONTENT-TO-GOAL (T6): the genuine local angle is preserved — Erie County, Western New
 * York, upstate manufacturing, the international/cross-border (USD/CAD) corridor, Buffalo
 * Niagara Medical Campus — and the materially-different tax contrast vs NYC (8.75% Erie
 * County sales tax; NO NYC UBT/CRT/8.875%). Not a mad-lib clone of the pillar.
 *
 * HONESTY (R5): NO reviews on this city page (the 2 real Clutch reviews live on the
 * pillar; no AggregateRating anywhere). No representative-outcome figures invented.
 * No founder/personal name in visible content. Independent firm — does NOT file NY/NYC
 * taxes; coordinates with the client's CPA. Sales-tax facts web-verified vs NYS DTF.
 *
 * COBALT VOCABULARY ONLY: stack-8, grid-2/grid-3, proof-strip (grid-3), checks-list,
 * buyer-card, byline-block, meta-reviewed, faq__list, intake-form partial, section--alt,
 * section__heading/__eyebrow/__lede. Footer-chrome H2s (Accounting/QuickBooks/Company/
 * Network) and "The monthly brief." are NOT rendered (layout/footer owns chrome). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  // Verbatim-preserved from the baseline TL;DR; links kept.
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Buffalo businesses</strong> across Erie County &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Buffalo&rsquo;s combined sales tax is <strong>8.75%</strong> (4% New York State + 4.75% Erie County) &mdash; there is no separate city sales tax, and unlike New York City, there is <strong>no Unincorporated Business Tax or Commercial Rent Tax</strong> to track. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As (baseline verbatim, append-only enrichment).
  // (H2: Buffalo bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Buffalo businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Buffalo and Erie County</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, with Western New York businesses from healthcare to manufacturing to cross-border trade." },
    { q: "What is the Buffalo sales tax rate?", a: "<strong>8.75% combined</strong> &mdash; 4% New York State plus 4.75% Erie County. There is no separate Buffalo city sales tax. It is destination-based and filed on one NYS Web File return." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly." },
    { q: "Does Buffalo have the NYC business taxes?", a: "<strong>No.</strong> The Unincorporated Business Tax and Commercial Rent Tax are New York City&ndash;only. Buffalo businesses deal with the 8.75% sales tax and standard New York State and federal taxes &mdash; a simpler tax layer than NYC." },
    { q: "Do you handle cross-border Canadian transactions?", a: "Yes &mdash; it&rsquo;s common for Buffalo businesses. We keep USD/CAD transactions, currency conversion, and cross-border vendor payments clean in QuickBooks so the books and your CPA&rsquo;s filings stay accurate." },
  ],

  // LOCAL CONTEXT — the un-clonable band (baseline prose verbatim).
  // (H2: Why Buffalo books have their own rhythm.)
  localLead: "Buffalo isn&rsquo;t New York City &mdash; and for a business&rsquo;s books, that&rsquo;s mostly good news: a simpler tax layer, but its own Western New York wrinkles that generic, software-only bookkeeping tends to miss.",
  localBody: [
    "A Buffalo business escapes the NYC tax stack entirely &mdash; no Unincorporated Business Tax, no Commercial Rent Tax &mdash; but it lives 20 minutes from an international border. Importers, distributors, and manufacturers along the Niagara corridor routinely transact in both USD and CAD, pay Canadian vendors, and need currency conversion handled correctly in the books or margins blur. An Erie County retailer collects the 8.75% combined rate; a Hamburg contractor job-costs across town lines; a Buffalo Niagara Medical Campus practice reconciles insurance receipts against payroll. The bookkeeping has to reflect a goods-and-trade economy, not a Manhattan service economy.",
    "That&rsquo;s where software-only bookkeeping struggles. When cross-border transactions aren&rsquo;t reconciled to the right exchange basis, the P&amp;L drifts. When sales tax isn&rsquo;t tracked against the 8.75% Erie County rate, the quarterly return doesn&rsquo;t reconcile. When a manufacturer&rsquo;s inventory and job costs aren&rsquo;t kept clean, pricing decisions get made on bad numbers. TechBrot keeps a named bookkeeper on your file who understands a Western New York business runs differently from a downstate one &mdash; and builds that into the monthly close.",
    "The result: books that reflect how a Buffalo business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the sales tax and income returns is fast and accurate.",
  ],

  // AREAS — Erie County / Western NY coverage (baseline verbatim).
  // (H2: Buffalo areas we serve.)
  areas: [
    { name: "Downtown / Buffalo", note: "Professional services, agencies, hospitality" },
    { name: "Buffalo Niagara Medical Campus", note: "Healthcare practices, life sciences, nonprofits" },
    { name: "Amherst / Williamsville", note: "Professional services, tech, retail" },
    { name: "Cheektowaga / Lancaster", note: "Distribution, trades, retail" },
    { name: "Hamburg / Orchard Park", note: "Construction, home services, restaurants" },
    { name: "Niagara corridor", note: "Importers, manufacturers, cross-border trade" },
  ],

  // TAX FACTS — proof-strip grid-3 (baseline verbatim). The one local tax band.
  // (H2: Buffalo sales tax, at a glance.)
  taxEyebrow: "The Buffalo tax fact we build into your books",
  taxFacts: [
    { fig: "8.75%", desc: "Combined sales tax in Buffalo &mdash; 4% New York State plus 4.75% Erie County. No separate city sales tax. Tracked and reconciled in QuickBooks for an accurate quarterly NYS return." },
    { fig: "1", desc: "Web File return &mdash; New York centralizes filing, so however many jurisdictions you sell into, you file one NYS sales-tax return. Destination-based: you charge the rate where the customer takes delivery." },
    { fig: "$110", desc: "Clothing &amp; footwear under $110 per item are exempt from the 4% state rate statewide; Erie County&rsquo;s local share may still apply. We flag taxable-vs-exempt so the books are right." },
  ],

  // INDUSTRIES — Buffalo verticals, each links to a NY industry page (baseline verbatim).
  // (H2: Industry-specific bookkeeping for Buffalo businesses.)
  industries: [
    { name: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/" },
    { name: "Construction", href: "/find-an-accountant/new-york/industries/construction/" },
    { name: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/" },
    { name: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/" },
    { name: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/" },
    { name: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/" },
  ],

  // VALUE STACK — 4 services (the 4 contract H3s, verbatim). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with Buffalo sales tax tracked. <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">New York monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">New York cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop. <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">NY QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your quarterly NYS sales-tax return reconciles cleanly. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2 (baseline body verbatim).
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a goods-and-trade economy, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your cross-border margins are holding, your manufacturing job costs are accurate, or cash will tighten before a sales-tax payment. That judgment is what a named Buffalo bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline cards (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Buffalo &amp; Western New York",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Buffalo file every month &mdash; the judgment behind a clean close, from the 8.75% Erie County rate to cross-border USD/CAD reconciliation.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Buffalo situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 8 contract Q/A VERBATIM. visible = FAQPage schema (same array). Append-only.
  // (H2: Buffalo bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Buffalo business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Buffalo and Erie County. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with full fluency in the Western New York realities, from the 8.75% Erie County sales tax to cross-border transactions, that downstate firms often miss." },
    { q: "What is the Buffalo sales tax rate?", a: "Buffalo&rsquo;s combined sales tax is 8.75% &mdash; 4% New York State plus 4.75% Erie County. There is no separate Buffalo city sales tax. New York is destination-based, so you charge the rate where your customer takes delivery, and you file one NYS Web File sales-tax return regardless of how many jurisdictions you sell into. We track it in QuickBooks so your quarterly return reconciles to the books." },
    { q: "Does Buffalo have the NYC Unincorporated Business Tax or Commercial Rent Tax?", a: "No &mdash; and that&rsquo;s a meaningful simplification. The Unincorporated Business Tax (UBT) and Commercial Rent Tax (CRT) are New York City&ndash;only taxes. A Buffalo business deals with the 8.75% combined sales tax plus standard New York State and federal income taxes, with no separate city-level business tax to track. Your books are simpler than a comparable NYC business&rsquo;s &mdash; we keep them that way." },
    { q: "How much does a Buffalo bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. We scope transparently before any work begins, so there are no surprises." },
    { q: "Can you handle cross-border USD/CAD transactions?", a: "Yes &mdash; this is common for Buffalo businesses given the international border. We keep USD and CAD transactions, currency conversion, and payments to Canadian vendors clean and correctly reconciled in QuickBooks, so your margins are accurate and your CPA has clean books for cross-border tax treatment. We handle the bookkeeping; your CPA advises on any cross-border tax questions." },
    { q: "Can you clean up a messy Buffalo QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Buffalo businesses fall behind in their books for the same reasons everyone does &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you work with Buffalo healthcare, manufacturing, and construction businesses?", a: "Yes &mdash; those are core Western New York verticals, alongside professional services, real estate, and nonprofits. Each has specific needs: healthcare practices need insurance-receipt and payroll reconciliation, manufacturers need clean inventory and job costing, and construction needs job-level tracking across town lines. See our New York industry pages for the detail." },
    { q: "How do we get started in Buffalo?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Buffalo situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name (baseline verbatim).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Buffalo and Erie County businesses. The Buffalo combined sales-tax rate (8.75% = 4% New York State + 4.75% Erie County) reflects New York State Department of Taxation and Finance rates current as of the date below and is reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYS Dept of Taxation &amp; Finance &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/buffalo/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Buffalo Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Buffalo, NY businesses. Erie County 8.75% sales tax tracked, CPA-ready books, fixed-fee. Serving Buffalo & Western New York remotely.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-buffalo.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-buffalo-in-brief-text","#ny-buffalo-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"Buffalo"}]},
        {"@type":"Service","@id":url+"#service","name":"Buffalo Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Buffalo and Erie County businesses, with Erie County 8.75% sales tax tracked and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Buffalo","sameAs":"https://en.wikipedia.org/wiki/Buffalo,_New_York"},
          {"@type":"AdministrativeArea","name":"Erie County, New York"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
