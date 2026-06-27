/* /find-an-accountant/indiana/industries/agriculture/ — t-money INDUSTRY child. Content arrays +
 * eleventyComputed pageGraph (WebPage reviewedBy #david-westgate, BreadcrumbList, Service [provider
 * #organization · areaServed State Indiana · audience BusinessAudience], FAQPage).
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md ONLY. Agriculture angle: Indiana is a top-tier ag
 * state (corn, soybeans, hogs, eggs, poultry, dairy). Cash-vs-accrual choice, crop/livestock enterprise
 * accounting, government-program and co-op payments, equipment depreciation (Section 179 — named only,
 * no dollar limit invented), farmland entity structure, and family-farm succession bookkeeping.
 *
 * ROUTING NOTE: agriculture has NO global /accounting/industries/agriculture/ page — related links route
 * to the IN industries hub AND the global industries hub (/accounting/industries/) for related verticals.
 * County LIT qualitative only; sales-tax/ag-exemption specifics confirmed with the DOR (no figure invented).
 *
 * HONESTY (R5): NO street address (areaServed-only). TechBrot keeps the books; does NOT file Indiana
 * returns, the county LIT/sales-tax returns, or the personal-property return as agent — coordinates with
 * the client's CPA. No invented reviews/stats/clients/outcomes; no AggregateRating. No founder name;
 * David Westgate only as reviewedBy #david-westgate. Independent firm; not affiliated with Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Indiana agriculture accounting, plainly.",
  summary: [
    "Indiana is a <strong>top-tier agricultural state</strong> &mdash; corn, soybeans, hogs, eggs, poultry, and dairy. Farm books don&rsquo;t look like a typical small business: the first decision is <strong>cash vs. accrual</strong> (many farms keep cash books for tax but need accrual-adjusted numbers to see real profit), and the books have to track <strong>enterprise by enterprise</strong> &mdash; corn separate from beans, the hog operation separate from the row crops &mdash; so you know which actually pays.",
    "Beyond that, farm accounting has its own moving parts: <strong>government-program and co-op payments</strong> (patronage, deferred grain, program receipts) that have to be recorded correctly; <strong>equipment depreciation</strong>, where <strong>Section 179</strong> and bonus treatment make a real difference on big-iron purchases; <strong>farmland and entity structure</strong> across the family operation; and <strong>succession bookkeeping</strong> as the farm passes to the next generation. Indiana&rsquo;s tax layer is mostly clean &mdash; a flat 2.95% income tax and a single 7% sales tax with no local add-ons &mdash; and any agricultural sales-tax exemption is kept documented and confirmed with the Indiana DOR. Farm payroll carries the <strong>county local income tax (LIT)</strong> of each worker&rsquo;s county of residence.",
    "<strong>TechBrot</strong> sets up a real farm chart of accounts, enterprise tracking, depreciation, and program/co-op recording in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate, and produces accrual-adjusted numbers your lender and CPA can use. We deliver the books; your CPA files the Schedule F and returns. We do not file Indiana returns as agent. Independent firm &mdash; not affiliated with Intuit Inc. Confirm program and exemption detail with your CPA and the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>.",
  ],
  secAiH: "Indiana agriculture accounting, in five questions.",
  aiSummary: [
    { q: "Why is Indiana farm accounting different?", a: "It runs on <strong>cash-vs-accrual choices and enterprise tracking</strong> &mdash; corn, beans, hogs, and dairy each accounted separately &mdash; plus government-program and co-op payments and big-iron depreciation. A top-tier ag state, Indiana farms need books a generic bookkeeper isn&rsquo;t built for." },
    { q: "Do you handle cash vs. accrual for farms?", a: "Yes &mdash; many Indiana farms keep <strong>cash books for tax</strong> but need <strong>accrual-adjusted numbers</strong> (for inventory, prepaid inputs, and deferred grain) to see real profit and satisfy lenders. We set up both views so the tax return and the management picture agree." },
    { q: "Can you track each crop and livestock enterprise separately?", a: "Yes &mdash; <strong>enterprise accounting</strong> splits revenue and cost by operation, so you know whether the row crops, the hog barn, or the dairy actually carries the farm instead of guessing from one combined bottom line." },
    { q: "How do you handle equipment and Section 179?", a: "We maintain a <strong>fixed-asset and depreciation schedule</strong> for machinery, with Section 179 and bonus depreciation coordinated with your CPA so big-iron purchases are timed and recorded correctly &mdash; we keep the detail; your CPA makes the election." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by enterprises, entities, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750. No hourly billing. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],
  secChallengesH: "Three places Indiana farms lose the numbers.",
  secChallengesLede: "Hard-working operations make decisions on bad numbers when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Real profit is hidden", title: "Cash books, no accrual view.", body: "Cash-basis books are fine for the tax return, but they hide real profit &mdash; prepaid inputs, grain in the bin, and growing livestock all sit off the picture. You can have a great cash year and a shrinking operation. The fix is keeping the cash books for tax while producing accrual-adjusted numbers for management and the lender, so you see what the farm actually earned." },
    { signal: "Enterprise mix is blurred", title: "No enterprise accounting.", body: "When corn, beans, the hog operation, and custom work all land in one combined P&amp;L, you can&rsquo;t tell which enterprise carries the farm and which quietly loses money. The fix is enterprise accounting &mdash; revenue and cost split by operation &mdash; so input, rent, and equipment decisions are made on real per-enterprise margin." },
    { signal: "Payments &amp; iron misrecorded", title: "Program, co-op &amp; depreciation gaps.", body: "Patronage dividends, deferred grain, and government-program receipts recorded wrong &mdash; and big-iron purchases not depreciated or 179&rsquo;d on time &mdash; distort both the books and the tax outcome. The fix is correct recording of program and co-op payments and a clean depreciation schedule, coordinated with your CPA so the elections land where they should." },
  ],
  secHandleH: "Indiana farm accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your enterprises and entities, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Cash vs accrual", title: "Farm chart of accounts &amp; cash-vs-accrual", body: "A real farm chart of accounts and the cash-for-tax / accrual-for-management views set up so the return and the lender numbers agree.", href: "/find-an-accountant/indiana/quickbooks-setup/", cta: "Indiana QuickBooks setup &rarr;" },
    { num: "02 &middot; Enterprise", title: "Crop &amp; livestock enterprise accounting", body: "Revenue and cost split by enterprise &mdash; corn, beans, hogs, dairy, custom work &mdash; so you know which operation actually pays.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "03 &middot; Depreciation", title: "Equipment depreciation &amp; Section 179", body: "A fixed-asset and depreciation schedule for machinery, with Section 179 and bonus treatment coordinated with your CPA so big-iron purchases are timed and recorded right.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
    { num: "04 &middot; Payments", title: "Program &amp; co-op payment tracking", body: "Government-program receipts, patronage dividends, and deferred grain recorded correctly so income and the tax picture are accurate.", href: "/find-an-accountant/indiana/quickbooks-reconciliation/", cta: "Indiana reconciliation &rarr;" },
    { num: "05 &middot; County LIT", title: "Farm payroll &amp; county LIT", body: "Seasonal and full-time farm labor run with each worker&rsquo;s county-of-residence LIT rate withheld via Form WH-4, with full payroll through our global service.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "06 &middot; Succession", title: "Cleanup &amp; succession-ready books", body: "Untangle commingled family-farm books, separate entities, fix depreciation and program coding, and reconcile to a succession- and lender-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you farm.",
  integrations: [
    "QuickBooks Online &amp; Desktop &mdash; the ledger of record",
    "Farm Credit / AgriBank lender reporting reconciled to the books",
    "Granular / Conservis &mdash; field and enterprise data to the ledger",
    "Co-op and elevator statements (patronage, deferred grain) recorded",
    "Equipment finance and lease schedules tracked",
    "QuickBooks Time / Gusto &mdash; seasonal farm payroll with county-LIT codes",
    "Fixed-asset &amp; depreciation schedule (Section 179 coordinated with your CPA)",
    "Agricultural sales-tax exemption documentation (Indiana DOR-confirmed)",
  ],
  integrationsNote: "Using different farm-management software? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From cash books to a real profit picture.",
  secProcessLede: "Every Indiana farm engagement follows the same four-phase rhythm &mdash; books accurate first, enterprise visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your enterprises, entities, how you sell grain and livestock, your program and co-op picture, and your lender&rsquo;s reporting needs. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure the farm chart of accounts, enterprise tracking, and depreciation, plus a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> to untangle commingled or behind books where needed." },
    { phase: "Phase 3", title: "Ongoing close", body: "Regular reconciliation with enterprise reporting, program and co-op recording, depreciation, and county-LIT payroll &mdash; cash for tax, accrual-adjusted for management." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Per-enterprise profitability and lender-ready financials, and as the operation transitions, <a href=\"/accounting/advisory/fractional-cfo/\">succession and cash-flow advisory</a>." },
  ],
  secAdvisoryH: "Accurate enterprise numbers are the start. Keeping the farm in the family is the point.",
  advisoryBody: [
    "Once each enterprise shows real profit and your accrual-adjusted numbers are clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell us to do?&rdquo; Which enterprises to expand or cut, when to buy or lease equipment, how to time grain sales and program income, how to structure the operation so it passes cleanly to the next generation &mdash; the decisions that keep an Indiana farm viable across generations.",
    "That&rsquo;s where farm advisory comes in: a Certified ProAdvisor who knows your enterprise and lender data turning it into input decisions, equipment timing, and succession planning alongside your CPA. As automation handles routine entry, this judgment layer is where farms find their footing. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Indiana agriculture engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm serving Indiana farms remotely across all 92 counties, and reviewed for technical accuracy on cash-vs-accrual books, crop and livestock enterprise accounting, program and co-op payments, equipment depreciation, and county LIT (<a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>). TechBrot keeps the books CPA-ready and coordinates with your CPA, who files the Schedule F and returns; it does not file Indiana returns as agent.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Cash/accrual farm books, enterprise accounting, depreciation, program/co-op recording, county-LIT payroll &middot; Schedule F &amp; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Does not file Indiana returns" },
  ],
  related: [
    { title: "Indiana County Income Tax Help", body: "The 92-county LIT withholding matrix set up so each farm worker&rsquo;s county rate applies and payroll reconciles.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { title: "Indiana Bookkeeping Cleanup", body: "Untangle commingled family-farm books, separate entities, and reconcile to a succession- and lender-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "All industries (national overview)", body: "Browse how TechBrot tailors accounting to related verticals nationally &mdash; scoped for Indiana on the call.", href: "/accounting/industries/", cta: "National industries hub &rarr;" },
    { title: "All Indiana industries", body: "See how TechBrot tailors accounting to the way your industry runs in Indiana.", href: "/find-an-accountant/indiana/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is farm accounting different in Indiana?", a: "Farm books don&rsquo;t look like a typical small business. The first choice is cash vs. accrual &mdash; many Indiana farms keep cash books for the tax return but need accrual-adjusted numbers (for inventory, prepaid inputs, and deferred grain) to see real profit. On top of that, the books track each enterprise separately, record government-program and co-op payments correctly, and handle big-iron depreciation. As a top-tier ag state, Indiana farms need books built for agriculture, not a generic chart of accounts. We build all of that into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Do you handle cash vs. accrual for Indiana farms?", a: "Yes. We keep your cash-basis books for the tax return while producing accrual-adjusted numbers for management and your lender &mdash; reflecting grain in the bin, prepaid inputs, and growing livestock &mdash; so a great cash year doesn&rsquo;t hide a shrinking operation. Your CPA files the Schedule F; we make sure the underlying books support both the tax and the management picture." },
    { q: "Can you track each crop and livestock enterprise separately?", a: "Yes. Enterprise accounting splits revenue and cost by operation &mdash; corn, soybeans, the hog barn, dairy, custom work &mdash; so you know which enterprise actually carries the farm instead of guessing from one combined bottom line. That&rsquo;s what lets you make input, rent, and equipment decisions on real per-enterprise margin." },
    { q: "How do you handle equipment depreciation and Section 179?", a: "We maintain a fixed-asset and depreciation schedule for your machinery and coordinate Section 179 and bonus depreciation with your CPA, so big-iron purchases are timed and recorded correctly. We keep the asset detail and the schedule; your CPA makes the depreciation elections on the return. That keeps both the books and the tax outcome clean." },
    { q: "Do you record government-program and co-op payments?", a: "Yes &mdash; patronage dividends, deferred-grain settlements, and government-program receipts are recorded correctly in the books so income and the tax picture are accurate. These are easy to misrecord with a generic chart of accounts, which throws off both the financials and the return. We code them to the right accounts and reconcile to the co-op and elevator statements." },
    { q: "Our family-farm books are a mess. Where do we start in Indiana?", a: "With a cleanup. We untangle commingled family-farm books, separate the entities, fix depreciation and program coding, and reconcile to a succession- and lender-ready baseline &mdash; then move into an ongoing close with enterprise reporting. Many Indiana farms come to us mid-transition; it&rsquo;s the normal starting point. Prefer to talk first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/agriculture/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Agriculture Accounting","description":"Farm accounting for Indiana ag operations — cash-vs-accrual books, crop and livestock enterprise accounting, equipment depreciation and Section 179 coordination, and government-program and co-op payment tracking, set up in QuickBooks by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-industries-agriculture.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-ind-agriculture-summary","#in-ind-agriculture-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/indiana/industries/"},
          {"@type":"ListItem","position":5,"name":"Agriculture"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Agriculture Accounting","serviceType":"Farm and agriculture bookkeeping","description":"Cash-vs-accrual farm books, crop and livestock enterprise accounting, equipment depreciation and Section 179 coordination, government-program and co-op payment tracking, and county-LIT farm payroll for Indiana farms, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Indiana returns or the Schedule F — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana farms and ag operations — corn, soybean, hog, egg, poultry, and dairy producers, and family-farm entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
