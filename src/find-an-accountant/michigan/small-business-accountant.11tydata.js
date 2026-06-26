/* /find-an-accountant/michigan/small-business-accountant/ — t-money MI SERVICE child. NEW page.
 * Structure mirrors the proven OH/MD/PA/NJ small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * MICHIGAN LOCALIZATION (per MI-FACTS.md — the ONLY source for MI figures): Ohio's municipal income
 * tax (649 cities / 199 school districts / RITA/CCA / 20-day rule) / CAT / county-variable sales tax /
 * IN-PA-MI-KY-WV reciprocity stack replaced with Michigan — a FLAT 4.25% individual income tax (confirmed
 * for the 2026 tax year; the clean contrast to OH's phase-out); a REAL 6% Corporate Income Tax on
 * C-corporations (the opposite of OH, which has none and uses the CAT gross-receipts tax) with the elective
 * Flow-Through Entity tax at 4.25% (a SALT-cap workaround; CPA files Form 5772); the city income tax —
 * Michigan's distinct hook: 24 cities under the City Income Tax Act, withheld by WORK LOCATION for
 * nonresidents (Detroit 2.4% resident / 1.2% nonresident, administered by the Michigan Dept of Treasury;
 * Grand Rapids & Saginaw 1.5%/0.75%; Highland Park 2%/1%; the other ~20 at the CITA base 1%/0.5%, kept
 * qualitative; Flint joins Treasury admin 2027) — FAR SIMPLER than OH (24 cities, NO school districts,
 * NO 20-day rule); IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) for STATE wage income only — the city tax
 * still applies, and it does NOT cover independent contractors or non-wage income; and a FLAT 6% sales and
 * use tax with NO local add-on anywhere in the state. Metros Detroit/Grand Rapids/Warren/Ann Arbor/Lansing/
 * Flint/Kalamazoo/Troy; all 83 counties; auto industry + West Michigan; NO street address (areaServed-only —
 * DE is the only real-address state). Pricing uses ONLY canonical MI figures (monthly from $400/mo; cleanup
 * from $1,200; setup from $750).
 *
 * ROUTING (MI is a CORE state — 6 essentials only): cross-links go ONLY to the 5 MI siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/michigan/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file MI/federal
 * income-tax returns, the Corporate Income Tax, the individual income tax, the city income-tax filings,
 * the sales-tax return, or the flow-through entity (Form 5772) return, and does NOT represent before tax
 * authorities; the client's CPA/EA files. No founder/personal name in visible content. The flat 4.25% rate
 * and Detroit's 2.4%/1.2% city rate are VERIFIED and stated; non-Detroit individual city rates beyond the
 * named tiers are framed qualitatively. provider = #organization; areaServed = State Michigan; reviewedBy
 * #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Michigan small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/michigan/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/michigan/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">flat 6% sales-tax tracking</a>, and the <a href=\"/quickbooks/payroll/\">city income tax withheld by work location across 24 cities (Detroit at 2.4%/1.2%)</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>FTE-ready</strong> for pass-throughs weighing Michigan&rsquo;s flow-through entity election at the 4.25% rate. If you run a <strong>manufacturing, logistics, construction, or professional-services operation</strong>, we keep job-costing, inventory, and per-location books clean; if you have <strong>employees</strong>, we configure the <strong>city income tax</strong> by each employee&rsquo;s <strong>work location</strong> (Detroit at 2.4% resident / 1.2% nonresident, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%), set up <strong>IL/IN/KY/MN/OH/WI reciprocity</strong> (Form MI-W4) so cross-border staff are withheld for their home state, and track the <strong>flat 6% sales tax</strong> with no local add-on. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales-tax return, or the flow-through entity (Form 5772) return, and we don&rsquo;t represent you before the Michigan Department of Treasury. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 83 Michigan counties &mdash; from metro Detroit and the automotive supplier base to the Grand Rapids and West Michigan corridor, Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Michigan small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Michigan small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, flat 6% sales-tax tracking, and the city income tax set by each employee&rsquo;s work location (Detroit at 2.4%/1.2%, Grand Rapids and Saginaw at 1.5%/0.75%) &mdash; with IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) for cross-border staff &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the city income tax by work location, the resident/nonresident positions, IL/IN/KY/MN/OH/WI reciprocity, and CIT and FTE readiness for the entity-level election." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Michigan small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its MI cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the flat 6% Michigan sales tax and the city income-tax withholding by work location (Detroit, Grand Rapids, and more) configured from the start.", href: "/find-an-accountant/michigan/quickbooks-setup/", cta: "Michigan QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/michigan/bookkeeping-services/", cta: "Michigan bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/michigan/quickbooks-cleanup/", cta: "Michigan cleanup &rarr;" },
    { num: "04 &middot; MI payroll &amp; tax", title: "City tax, reciprocity &amp; sales tax", body: "The city income tax configured by each employee&rsquo;s work location (Detroit at 2.4% resident / 1.2% nonresident, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%), IL/IN/KY/MN/OH/WI reciprocity set per employee (Form MI-W4), and the flat 6% sales tax tracked, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "MI payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; FTE-ready for pass-throughs weighing the 4.25% flow-through entity election, with the 6% CIT apportionment and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/michigan/", cta: "Michigan overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Flat 6% sales-tax tracking, no local add-on",
      "City income tax by work location (Detroit 2.4%/1.2%, Grand Rapids and more)",
      "IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) for cross-border staff",
      "Job costing, inventory &amp; per-location books &middot; CIT- and FTE-ready",
      "Year-end handoff to your CPA &mdash; FTE-ready",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Michigan &amp; federal income-tax returns",
      "Files the Corporate Income Tax, the individual income tax &amp; the sales-tax return",
      "Files the city income-tax filings &amp; the flow-through entity (Form 5772) return",
      "Makes the FTE election; represents you before the Michigan Department of Treasury",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Michigan founder their margins are slipping, their owner draws are outrunning profit, that a hybrid hire just shifted their predominant place of employment into Detroit &mdash; changing which city you withhold for &mdash; that they&rsquo;ve crossed nexus into the 6% Corporate Income Tax, or that their pass-through should weigh the 4.25% flow-through entity election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, flat 6% sales-tax tracking, the city income tax by work location (Detroit 2.4%/1.2%), IL/IN/KY/MN/OH/WI reciprocity, CIT- and FTE-ready books, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Michigan-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Michigan small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Michigan small business?", a: "Most Michigan small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Michigan?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including the city income tax withheld by each employee&rsquo;s work location across the 24 City Income Tax Act cities &mdash; Detroit at 2.4%/1.2% &mdash; and IL/IN/KY/MN/OH/WI reciprocity on Form MI-W4), tracking the flat 6% sales tax, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Michigan?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Michigan — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Michigan sales-tax tracking (the flat 6% statewide rate, no local add-on) along with the city income tax set by each employee&rsquo;s work location &mdash; Detroit at 2.4%/1.2%, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5% &mdash; with IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) for cross-border staff, from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Michigan engagements, especially for metro-Detroit professional-services firms, West Michigan manufacturers weighing the FTE election, and logistics operators riding cross-border growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong-city withholding and untracked CIT apportionment &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and city income-tax tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Michigan, federal, Corporate Income Tax, individual income, city, payroll, and sales-tax returns and the flow-through entity (Form 5772) return, and represents you before the Michigan Department of Treasury. Most Michigan small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/michigan/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Michigan Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Michigan small businesses across all 83 counties, coordinated with your CPA — the day-to-day financial backbone, with flat 6% sales-tax tracking and the city income tax withheld by work location across 24 cities (Detroit at 2.4%/1.2%), the flat 4.25% income tax, a real 6% Corporate Income Tax on C-corporations, and IL/IN/KY/MN/OH/WI reciprocity for cross-border staff.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/michigan-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#mi-svc-smb-summary","#mi-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Michigan","item":"https://techbrot.com/find-an-accountant/michigan/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Michigan Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, flat 6% sales-tax tracking, the city income tax withheld by work location (24 City Income Tax Act cities, Detroit at 2.4%/1.2%), 6% Corporate Income Tax and flow-through entity readiness, and IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) for Michigan small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Michigan or federal tax returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales-tax return, or the flow-through entity (Form 5772) return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Michigan","sameAs":"https://en.wikipedia.org/wiki/Michigan"},
          "audience":{"@type":"BusinessAudience","name":"Michigan small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
