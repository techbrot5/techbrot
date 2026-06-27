/* /find-an-accountant/new-york/cities/syracuse/ — t-location CITY page (lighter than
 * the NY pillar). Sources: FROZEN EQUITY CONTRACT (contract-ny-syracuse.txt) — the ONLY
 * authority for the H1/H2/H3 headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/cities/syracuse/index.html, full body read) for body prose.
 * Data shape mirrors buffalo.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies content arrays + an eleventyComputed pageGraph emitting the schema @graph.
 *
 * CONTENT-TO-GOAL (T6): the genuine Central-New-York angle is preserved — Onondaga County,
 * Syracuse University + SUNY Upstate + the region's hospital systems (higher-ed/healthcare
 * economy), I-81/logistics, and the Micron semiconductor investment in nearby Clay — and
 * the materially-different tax contrast vs NYC (8% combined Onondaga County sales tax; NO
 * NYC UBT/CRT/8.875% — upstate is genuinely simpler). Not a mad-lib clone of the pillar.
 *
 * HONESTY (R5): NO reviews on this city page (the 2 real Clutch reviews live on the
 * pillar; no AggregateRating anywhere). No representative-outcome figures invented.
 * No founder/personal name in visible content (David Westgate only in reviewedBy schema
 * @id). Independent firm — does NOT file NY taxes; coordinates with the client's CPA.
 * Sales-tax facts web-verified vs NYS DTF.
 *
 * COBALT VOCABULARY ONLY: stack-8, grid-2/grid-3, checks-list, buyer-card, byline-block,
 * meta-reviewed, faq__list, intake-form partial, section--alt, section__heading/__eyebrow/
 * __lede. grid-3 + stack-8 (NOT proof-strip__item) for tax/area/stat cards. Footer-chrome
 * H2s (Accounting/QuickBooks/Company/Network) and "The monthly brief." are NOT rendered
 * (layout/footer owns chrome). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the layout in-brief. (H2: The short version.)
  // Verbatim-preserved from the baseline TL;DR; links kept.
  summarized: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Syracuse businesses</strong> across Central New York &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Syracuse&rsquo;s combined sales tax is <strong>8%</strong> (4% New York State + 4% Onondaga County) &mdash; there is no separate city sales tax, and unlike New York City, there is <strong>no Unincorporated Business Tax or Commercial Rent Tax</strong>. We keep your books <a href=\"/accounting/financial-statements/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a>.",

  // AI SUMMARY — 5 entity-dense Q&As (baseline verbatim, append-only enrichment).
  // (H2: Syracuse bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Syracuse businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Syracuse and Central New York</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, with healthcare, higher-ed-adjacent firms, contractors, and a growing semiconductor supply chain." },
    { q: "What is the Syracuse sales tax rate?", a: "<strong>8% combined</strong> &mdash; 4% New York State plus 4% Onondaga County. There is no separate Syracuse city sales tax. It is destination-based and filed on one NYS Web File return." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly." },
    { q: "Does Syracuse have the NYC business taxes?", a: "<strong>No.</strong> The Unincorporated Business Tax and Commercial Rent Tax are New York City&ndash;only. Syracuse businesses deal with the 8% sales tax and standard New York State and federal taxes &mdash; a simpler tax layer than NYC." },
    { q: "Are you ready for the region&rsquo;s semiconductor growth?", a: "Yes &mdash; the major chip-fab investment in Onondaga County is expanding the local supplier and contractor base. We keep growth-stage and project-based books clean so expanding Central New York businesses scale on solid numbers." },
  ],

  // LOCAL CONTEXT — the un-clonable band (baseline prose verbatim).
  // (H2: Why Central New York books have their own character.)
  localLead: "Syracuse isn&rsquo;t New York City &mdash; it&rsquo;s the hub of Central New York, anchored by Syracuse University and the region&rsquo;s hospitals, and now on the front edge of a major semiconductor expansion, with its own bookkeeping wrinkles that generic, software-only bookkeeping tends to miss.",
  localBody: [
    "Syracuse&rsquo;s economy runs on its institutions &mdash; Syracuse University, SUNY Upstate, and the region&rsquo;s hospital systems &mdash; surrounded by the professional-services, healthcare, and contractor businesses that serve them. What&rsquo;s changing the picture is the large semiconductor investment in Onondaga County, which is expanding the local supplier, construction, and contractor base and bringing growth-stage firms that need investor- and lender-ready books. Add Central New York retail and restaurants collecting the 8% rate, and the bookkeeping spans university-adjacent services, healthcare reconciliation, and fast-growing project-based contractors.",
    "That mix is what software-only bookkeeping handles badly. A contractor scaling into semiconductor-related work needs clean job costing and a file a lender will trust. A healthcare practice needs insurance receipts reconciled against payroll. A growing supplier needs books ready for the diligence that comes with new contracts. When sales tax isn&rsquo;t reconciled against the 8% Onondaga County rate, the quarterly return drifts. TechBrot keeps a named bookkeeper on your file who understands a Central New York business on a growth curve keeps books differently, and builds that into the monthly close.",
    "The result: books that reflect how a Syracuse business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the sales tax and income returns, and standing up to lender or contract diligence, is fast and accurate.",
  ],

  // AREAS — Onondaga County / Central NY coverage (baseline verbatim).
  // (H2: Syracuse areas we serve.)
  areas: [
    { name: "Downtown Syracuse", note: "Professional services, startups, nonprofits" },
    { name: "University Hill", note: "Healthcare, higher-ed-adjacent firms, research" },
    { name: "Clay / Cicero", note: "Semiconductor supply chain, contractors, retail" },
    { name: "DeWitt / Manlius", note: "Professional services, medical, retail" },
    { name: "Salina / Liverpool", note: "Distribution, trades, small business" },
    { name: "Central NY region", note: "Manufacturing, agriculture, contractors" },
  ],

  // TAX FACTS — grid-3 + stack-8 (baseline verbatim). The one local tax band.
  // (H2: Syracuse sales tax, at a glance.)
  taxEyebrow: "The Syracuse tax fact we build into your books",
  taxFacts: [
    { fig: "8%", desc: "Combined sales tax in Syracuse &mdash; 4% New York State plus 4% Onondaga County. No separate city sales tax. Tracked and reconciled in QuickBooks for an accurate quarterly NYS return." },
    { fig: "1", desc: "Web File return &mdash; New York centralizes filing, so however many jurisdictions you sell into, you file one NYS sales-tax return. Destination-based: you charge the rate where the customer takes delivery." },
    { fig: "$110", desc: "Clothing &amp; footwear under $110 per item are exempt from the 4% state rate statewide; Onondaga County&rsquo;s local share may still apply. We flag taxable-vs-exempt so the books are right." },
  ],

  // INDUSTRIES — Syracuse verticals, each links to a NY industry page (baseline verbatim).
  // (H2: Industry-specific bookkeeping for Syracuse businesses.)
  industries: [
    { name: "Construction", href: "/find-an-accountant/new-york/industries/construction/" },
    { name: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/" },
    { name: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/" },
    { name: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/" },
    { name: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/" },
    { name: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/" },
  ],

  // VALUE STACK — 4 services (the 4 contract H3s, verbatim). (H2: Complete bookkeeping, locally aware.)
  valueStack: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with Syracuse sales tax tracked. <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">New York monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">New York cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop. <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">NY QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your quarterly NYS sales-tax return reconciles cleanly. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2 (baseline body verbatim).
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "For a Central New York business on a growth curve, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your job costs hold as you scale, your books will pass lender or contract diligence, or cash will cover a bigger payroll. That judgment is what a named Syracuse bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // INTAKE TEAM — named-team byline cards (firm-level; NO personal name in visible content).
  teamProAdvisor: {
    name: "Lead Certified QuickBooks ProAdvisor", role: "Syracuse &amp; Central New York",
    creds: "40+ years operational accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "A named ProAdvisor stays on your Syracuse file every month &mdash; the judgment behind a clean close, from the 8% Onondaga County rate to growth-stage job costing for semiconductor-driven work.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Reviews your QuickBooks file and your Syracuse situation, then turns it into a written fixed-fee scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 8 contract Q/A VERBATIM. visible = FAQPage schema (same array). Append-only.
  // (H2: Syracuse bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Syracuse business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Syracuse and Central New York. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Central New York realities, from the 8% Onondaga County sales tax to growth-stage job costing, that a generic bookkeeper often misses." },
    { q: "What is the Syracuse sales tax rate?", a: "Syracuse&rsquo;s combined sales tax is 8% &mdash; 4% New York State plus 4% Onondaga County. There is no separate Syracuse city sales tax. New York is destination-based, so you charge the rate where your customer takes delivery, and you file one NYS Web File sales-tax return regardless of how many jurisdictions you sell into. We track it in QuickBooks so your quarterly return reconciles to the books." },
    { q: "Does Syracuse have the NYC Unincorporated Business Tax or Commercial Rent Tax?", a: "No &mdash; and that&rsquo;s a meaningful simplification. The Unincorporated Business Tax (UBT) and Commercial Rent Tax (CRT) are New York City&ndash;only taxes. A Syracuse business deals with the 8% combined sales tax plus standard New York State and federal income taxes, with no separate city-level business tax to track. Your books are simpler than a comparable NYC business&rsquo;s &mdash; we keep them that way." },
    { q: "How much does a Syracuse bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. We scope transparently before any work begins, so there are no surprises." },
    { q: "Can you support a business growing with the region&rsquo;s semiconductor expansion?", a: "Yes &mdash; this is increasingly common in Central New York. The major semiconductor investment in Onondaga County is expanding the local supplier, construction, and contractor base, and growth brings scrutiny: lenders, new contracts, and partners all want clean, credible books. We keep job costing, growth-stage records, and diligence-ready statements clean in QuickBooks so an expanding business scales on solid numbers. We handle the bookkeeping; your CPA advises on filing and structure." },
    { q: "Can you clean up a messy Syracuse QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Syracuse businesses fall behind in their books for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean as you grow." },
    { q: "Do you work with Central New York healthcare, contractors, and professional services?", a: "Yes &mdash; those are core Central New York verticals, alongside the semiconductor-driven supplier and contractor base. Each has specific needs: contractors need job costing and lender-ready books, healthcare practices need insurance-receipt and payroll reconciliation, and professional-services firms need clean books for partner reporting. See our New York industry pages for the detail." },
    { q: "How do we get started in Syracuse?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Syracuse situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  // EXPERT REVIEW (E-E-A-T) — firm-level, no founder name (baseline verbatim).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Syracuse and Onondaga County businesses. The Syracuse combined sales-tax rate (8% = 4% New York State + 4% Onondaga County) reflects New York State Department of Taxation and Finance rates current as of the date below and is reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYS Dept of Taxation &amp; Finance &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/syracuse/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Syracuse Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Syracuse, NY businesses. Onondaga County 8% sales tax tracked, CPA-ready books, fixed-fee. Serving Central New York remotely.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-syracuse.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-syracuse-in-brief-text","#ny-syracuse-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"Syracuse"}]},
        {"@type":"Service","@id":url+"#service","name":"Syracuse Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Syracuse and Central New York businesses, with Onondaga County 8% sales tax tracked and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Syracuse","sameAs":"https://en.wikipedia.org/wiki/Syracuse,_New_York"},
          {"@type":"AdministrativeArea","name":"Onondaga County, New York"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
