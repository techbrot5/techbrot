/* /find-an-accountant/indiana/industries/logistics-distribution/ — t-money INDUSTRY child.
 * Content arrays + eleventyComputed pageGraph (WebPage reviewedBy #david-westgate, BreadcrumbList,
 * Service [provider #organization · areaServed State Indiana · audience BusinessAudience], FAQPage).
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md ONLY. Logistics angle: Indiana = the Crossroads
 * of America, the most interstate-highway-dense state; trucking/freight, 3PL warehousing, fulfillment,
 * and the FedEx Indianapolis hub corridor (IND, FedEx's second-largest national hub). Per-lane and
 * per-customer profitability, fuel and equipment, driver/owner-operator 1099s, fleet depreciation,
 * multi-state sales-tax nexus where goods move, and IFTA coordination. County LIT qualitative only.
 *
 * HONESTY (R5): NO street address (areaServed-only). TechBrot keeps the books; does NOT file Indiana
 * returns, the county LIT/sales-tax returns, or the IFTA return as agent — coordinates with the
 * client's CPA. No invented reviews/stats/clients/outcomes; no AggregateRating. No founder name;
 * David Westgate only as reviewedBy #david-westgate. Independent firm; not affiliated with Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Indiana logistics &amp; distribution accounting, plainly.",
  summary: [
    "Indiana is the <strong>Crossroads of America</strong> &mdash; the most interstate-highway-dense state and a national logistics core, anchored by the <strong>FedEx hub at Indianapolis</strong> (FedEx&rsquo;s second-largest national hub) and vast warehousing. Carriers, 3PLs, and fulfillment operators don&rsquo;t run on company-wide revenue; they run on the <strong>profit of each lane, customer, and truck</strong>. Real logistics accounting needs <strong>per-lane and per-customer profitability</strong>, fuel and equipment cost tracked against revenue, <strong>fleet depreciation</strong>, and clean <strong>driver and owner-operator 1099</strong> handling.",
    "Indiana&rsquo;s tax layer is specific to a state where goods move. Sales tax is a clean <strong>7% statewide with no local add-ons</strong>, but the moment freight and product cross state lines you face <strong>multi-state sales-tax nexus</strong> &mdash; other states&rsquo; rules where you deliver or warehouse &mdash; and motor carriers owe <strong>IFTA</strong> (the International Fuel Tax Agreement) that has to be reconciled to fuel and mileage records. Payroll carries the <strong>county local income tax (LIT)</strong> of each driver&rsquo;s and dock worker&rsquo;s county of residence, set on January 1 and withheld through Form WH-4.",
    "<strong>TechBrot</strong> sets up per-lane profitability, fleet depreciation, fuel and IFTA-ready records, and multi-state nexus tracking in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and turns it into the per-lane and per-truck profit you bid from. We prepare the records and coordinate the IFTA and nexus posture; we deliver the books and your CPA files. We do not file the IFTA, sales-tax, or county returns as agent. Independent firm &mdash; not affiliated with Intuit Inc. Confirm registration and nexus detail with the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>.",
  ],
  secAiH: "Indiana logistics accounting, in five questions.",
  aiSummary: [
    { q: "Why is Indiana logistics accounting different?", a: "It runs on <strong>per-lane and per-customer profit, not company-wide revenue</strong> &mdash; with fuel, equipment, fleet depreciation, and owner-operator 1099s. On the Crossroads of America, goods move across state lines, so you add <strong>multi-state sales-tax nexus and IFTA coordination</strong> that standard bookkeeping can&rsquo;t handle." },
    { q: "Can you track per-lane and per-customer profitability?", a: "Yes &mdash; revenue and cost (fuel, driver pay, maintenance, tolls) tracked to each <strong>lane, customer, and truck</strong>, so you know which freight actually pays instead of guessing from a company-wide P&amp;L. Common for carriers and 3PLs in the FedEx Indianapolis hub corridor." },
    { q: "How do you handle multi-state nexus and IFTA?", a: "We track where you deliver and warehouse so <strong>multi-state sales-tax nexus</strong> is visible, and keep fuel and mileage records reconciled for <strong>IFTA</strong> reporting. We prepare the records and coordinate the posture with your CPA; we don&rsquo;t file the IFTA or sales-tax returns as agent." },
    { q: "Do you handle drivers, owner-operators, and fleet depreciation?", a: "Yes &mdash; <strong>W-2 driver payroll with county-LIT withholding, owner-operator and contractor 1099s, and fleet depreciation</strong> on tractors, trailers, and equipment, so labor cost and asset cost are both accurate." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by fleet size, lanes, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750. No hourly billing. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],
  secChallengesH: "Three places Indiana carriers lose the numbers.",
  secChallengesLede: "Busy-looking fleets bleed margin when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Lane profit is invisible", title: "No per-lane or per-truck costing.", body: "Revenue and cost land in one company-wide bucket, so you can&rsquo;t see which lanes, customers, or trucks make money and which run at a loss once fuel and maintenance are counted. The fix is per-lane and per-customer profitability with fuel, driver pay, tolls, and maintenance tracked to each unit &mdash; so you bid and accept freight from real margin, not a hunch." },
    { signal: "Multi-state tax is missed", title: "Nexus &amp; IFTA gaps.", body: "Goods crossing state lines create sales-tax nexus in other states, and motor carriers owe IFTA reconciled to fuel and mileage &mdash; both easy to miss when you&rsquo;re focused on dispatch. Mishandle them and you face back assessments. The fix is nexus visibility by delivery and warehouse footprint plus IFTA-ready fuel and mileage records inside your QuickBooks workflow." },
    { signal: "Labor &amp; assets blur", title: "1099, payroll &amp; depreciation gaps.", body: "Owner-operators misclassified, driver county-LIT withholding wrong, and fleet depreciation not set means both labor cost and asset cost are off &mdash; and so is taxable income. The fix is clean W-2 vs. 1099 treatment, county-LIT codes mapped per driver, and a fixed-asset schedule for tractors, trailers, and equipment so the books reflect reality." },
  ],
  secHandleH: "Indiana logistics accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your lanes and fleet, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Per-lane profit", title: "Per-lane &amp; per-customer profitability", body: "Revenue and cost &mdash; fuel, driver pay, tolls, maintenance &mdash; tracked to each lane, customer, and truck, so you know which freight actually pays.", href: "/find-an-accountant/indiana/quickbooks-setup/", cta: "Indiana QuickBooks setup &rarr;" },
    { num: "02 &middot; Fleet", title: "Fleet &amp; equipment depreciation", body: "A fixed-asset schedule for tractors, trailers, forklifts, and equipment, with depreciation set so asset cost and taxable income are accurate.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "03 &middot; Fuel &amp; IFTA", title: "Fuel &amp; IFTA-ready records", body: "Fuel and mileage records reconciled and kept IFTA-ready, so the quarterly fuel-tax filing ties to the books. We prepare the records; we don&rsquo;t file the IFTA return as agent.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
    { num: "04 &middot; County LIT", title: "Driver payroll &amp; county LIT", body: "W-2 driver and dock payroll mapped to each worker&rsquo;s county-of-residence LIT rate, withheld via Form WH-4, plus clean owner-operator and contractor 1099 handling.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "05 &middot; Nexus", title: "Multi-state sales-tax nexus", body: "Delivery and warehouse footprint tracked so multi-state nexus is visible, with Indiana&rsquo;s clean 7% rate configured at home. We coordinate the posture; your CPA files.", href: "/find-an-accountant/indiana/sales-tax-help/", cta: "Indiana sales tax help &rarr;" },
    { num: "06 &middot; Cleanup", title: "Logistics cleanup", body: "Rebuild per-lane costing from messy books, reclassify fuel and maintenance, fix 1099 and depreciation, and reconcile to a known-good baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you move freight.",
  integrations: [
    "QuickBooks Online &amp; Enterprise &mdash; the ledger of record",
    "Motive (KeepTruckin) / Samsara &mdash; ELD mileage and fuel to the books",
    "TruckingOffice / Rigbooks &mdash; dispatch and settlements reconciled to QuickBooks",
    "ProTransport / Axon &mdash; TMS financials synced",
    "Fuel-card feeds (Comdata, EFS) &mdash; fuel cost by truck",
    "QuickBooks Time &mdash; dock and driver hours to payroll",
    "Gusto / ADP &mdash; driver payroll with county-LIT codes",
    "IFTA-ready fuel and mileage records (Indiana DOR coordination)",
  ],
  integrationsNote: "Running a different TMS or ELD? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From a company-wide P&amp;L to per-lane profit.",
  secProcessLede: "Every Indiana logistics engagement follows the same four-phase rhythm &mdash; books accurate first, lane profit visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your lanes, fleet, customers, how you pay drivers, and your nexus and IFTA footprint. No pitch." },
    { phase: "Phase 2", title: "Costing setup &amp; cleanup", body: "Configure per-lane and per-truck costing and the fixed-asset schedule, plus a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> to reclassify fuel, maintenance, and 1099s where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; IFTA", body: "Monthly reconciliation with per-lane reporting, fleet depreciation, IFTA-ready fuel and mileage records, and county-LIT payroll cadence." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Per-lane profitability reporting and, as you grow, <a href=\"/accounting/advisory/fractional-cfo/\">rate, capacity, and cash-flow advisory</a>." },
  ],
  secAdvisoryH: "Accurate lane cost is the start. Bidding profitable freight is the point.",
  advisoryBody: [
    "Once every lane and truck shows real profit, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;which freight should we chase, and at what rate?&rdquo; Which lanes carry margin, when fuel surcharges need adjusting, how deadhead and detention erode a load, whether adding a truck pencils out &mdash; the decisions that separate Indiana carriers who grow from those who run hard for nothing.",
    "That&rsquo;s where logistics advisory comes in: a Certified ProAdvisor who knows your lane data turning it into rate strategy, capacity planning, and cash-flow forecasting. As automation handles routine entry, this judgment layer is where carriers find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Indiana logistics and distribution engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm serving Indiana carriers, 3PLs, and fulfillment operators remotely across all 92 counties, and reviewed for technical accuracy on per-lane costing, fleet depreciation, multi-state sales-tax nexus, IFTA-ready records, and county LIT (<a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>). TechBrot keeps the books CPA-ready and coordinates with your CPA, who files; it does not file the IFTA, sales-tax, or county LIT returns as agent.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Per-lane costing, fleet depreciation, fuel/IFTA-ready records, nexus tracking, driver payroll &amp; 1099s &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Does not file Indiana, IFTA, or sales-tax returns" },
  ],
  related: [
    { title: "Indiana Sales Tax Help", body: "The clean 7% Indiana setup configured and multi-state nexus tracked where your goods move, so returns reconcile.", href: "/find-an-accountant/indiana/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Indiana County Income Tax Help", body: "The 92-county LIT withholding matrix set up so each driver&rsquo;s county rate applies and payroll reconciles.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { title: "Trucking accounting (national overview)", body: "How TechBrot builds books for carriers and 3PLs nationally &mdash; scoped for Indiana on the call.", href: "/accounting/industries/trucking/", cta: "National overview &rarr;" },
    { title: "All Indiana industries", body: "See how TechBrot tailors accounting to the way your industry runs in Indiana.", href: "/find-an-accountant/indiana/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is logistics and distribution accounting different in Indiana?", a: "Carriers, 3PLs, and fulfillment operators run on the profit of each lane, customer, and truck &mdash; not a company-wide P&amp;L &mdash; with fuel, equipment, fleet depreciation, and owner-operator 1099s that standard bookkeeping can&rsquo;t handle. Indiana is the Crossroads of America, so goods cross state lines constantly, adding multi-state sales-tax nexus and IFTA fuel-tax coordination. We build per-lane profitability, depreciation, IFTA-ready records, and nexus tracking into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Can you track per-lane and per-customer profitability in QuickBooks?", a: "Yes. We configure costing so revenue and cost &mdash; fuel, driver pay, tolls, maintenance &mdash; track to each lane, customer, and truck, giving you real per-unit profitability instead of a company-wide average. For carriers and 3PLs in the FedEx Indianapolis hub corridor, that&rsquo;s what lets you bid and accept freight from real margin and drop the lanes that quietly lose money." },
    { q: "How do you handle multi-state sales-tax nexus for Indiana shippers?", a: "Indiana&rsquo;s own sales tax is a clean 7% with no local add-ons, but once you deliver or warehouse goods in other states you can create sales-tax nexus there under their rules. We track your delivery and warehouse footprint so nexus is visible, configure the Indiana rate at home, and coordinate the multi-state posture with your CPA. We prepare the records; we don&rsquo;t file the out-of-state or sales-tax returns as agent." },
    { q: "Do you handle IFTA and fuel-tax records?", a: "Yes &mdash; we keep fuel and mileage records reconciled and IFTA-ready so the quarterly International Fuel Tax Agreement filing ties to the books, and we coordinate the posture with your CPA. We prepare the records and the reconciliation; we do not file the IFTA return as agent. That keeps fuel cost accurate per truck and the filing defensible." },
    { q: "How do you handle drivers, owner-operators, and county income tax?", a: "We run clean W-2 driver and dock payroll with the correct county local income tax (LIT) withheld for each worker&rsquo;s county of residence on January 1 via Form WH-4, and handle owner-operator and contractor 1099s correctly so classification holds up. Fleet depreciation on tractors, trailers, and equipment is set so asset cost and taxable income are right. Full payroll runs through our global payroll service; your CPA files income taxes." },
    { q: "My logistics books are a mess. Where do we start in Indiana?", a: "With a cleanup. We reclassify fuel, maintenance, and lane costs, rebuild per-lane and per-truck costing, fix 1099 and depreciation treatment, reconcile IFTA-ready fuel and mileage records, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with per-lane reporting. Prefer to talk first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/logistics-distribution/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Logistics & Distribution Accounting","description":"Logistics and distribution accounting for Indiana carriers, 3PLs, and fulfillment operators — per-lane and per-customer profitability, fleet depreciation, owner-operator 1099s, multi-state sales-tax nexus, and IFTA-ready records, set up in QuickBooks by a Certified ProAdvisor on the Crossroads of America.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-industries-logistics-distribution.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-ind-logistics-summary","#in-ind-logistics-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/indiana/industries/"},
          {"@type":"ListItem","position":5,"name":"Logistics & Distribution"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Logistics & Distribution Accounting","serviceType":"Logistics and trucking bookkeeping and per-lane costing","description":"Per-lane and per-customer profitability, fleet depreciation, owner-operator 1099s, multi-state sales-tax nexus, IFTA-ready fuel and mileage records, and county-LIT driver payroll for Indiana carriers, 3PLs, and fulfillment operators, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Indiana, IFTA, or sales-tax returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana trucking, freight, 3PL warehousing, and fulfillment operators on the Crossroads of America and the FedEx Indianapolis hub corridor"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
