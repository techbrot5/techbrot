/* /find-an-accountant/indiana/industries/real-estate/ — t-money INDUSTRY child. Content arrays +
 * eleventyComputed pageGraph (WebPage reviewedBy #david-westgate, BreadcrumbList, Service [provider
 * #organization · areaServed State Indiana · audience BusinessAudience], FAQPage).
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md ONLY. Real-estate angle: investors/operators,
 * brokerages, property managers across the Indy metro and college towns (Bloomington/West Lafayette
 * rentals) — entity-per-property books, owner draws, 1031 coordination, short-term-rental tracking,
 * and the LIT-by-county wrinkle for owner residency. County LIT qualitative only.
 *
 * HONESTY (R5): NO street address (areaServed-only). TechBrot keeps the books; does NOT file Indiana
 * returns or the county LIT/sales-tax returns as agent; 1031 is coordinated with the client's CPA/QI,
 * never executed by TechBrot. No invented reviews/stats/clients/outcomes; no AggregateRating. No founder
 * name; David Westgate only as reviewedBy #david-westgate. Independent firm; not affiliated with Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Indiana real estate accounting, plainly.",
  summary: [
    "Real estate books live or die on one question generic bookkeeping rarely answers: <strong>which property actually makes money</strong>. Real estate accounting needs <strong>entity-per-property or per-property class tracking</strong> (so each building&rsquo;s income, expenses, mortgage, and cash flow are separable), clean <strong>owner draws and distributions</strong>, <strong>basis and depreciation</strong> per property, and &mdash; for trades up &mdash; <strong>1031 exchange</strong> coordination. Operators, brokerages, and property managers each break the books in a different place, from commission income to trust/owner funds.",
    "Indiana&rsquo;s context spans the <strong>Indianapolis metro</strong> and the <strong>college-town rental markets</strong> (Bloomington for IU, West Lafayette for Purdue), where student housing and short-term rentals are a real business. <strong>Short-term-rental</strong> revenue from Airbnb and VRBO has to be reconciled by channel and property. The genuine Indiana tax wrinkle is the <strong>county local income tax (LIT)</strong>: because LIT is set by the <strong>owner&rsquo;s county of residence on January 1</strong>, an out-of-county or out-of-state owner&rsquo;s rental income carries a different county-rate treatment than a local owner&rsquo;s &mdash; and property-manager payroll carries each staffer&rsquo;s county rate. Sales tax is a clean 7% statewide with no local add-ons.",
    "<strong>TechBrot</strong> sets up entity-per-property books, owner-draw discipline, depreciation, and short-term-rental reconciliation in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and turns it into per-property profit and a clean basis trail. We deliver the books and coordinate 1031 timing with your CPA and qualified intermediary; your CPA files. We do not execute the exchange or file Indiana returns as agent. Independent firm &mdash; not affiliated with Intuit Inc. Confirm LIT-by-residency detail with the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>.",
  ],
  secAiH: "Indiana real estate accounting, in five questions.",
  aiSummary: [
    { q: "Why is Indiana real estate accounting different?", a: "It runs on <strong>per-property profit</strong> &mdash; entity-per-property books, owner draws, basis and depreciation, and 1031 coordination. Indiana adds the <strong>county LIT-by-owner-residency</strong> wrinkle and short-term-rental reconciliation across the Indy metro and IU/Purdue college-town markets that standard bookkeeping misses." },
    { q: "Do you keep separate books per property?", a: "Yes &mdash; <strong>entity-per-property or per-property class tracking</strong> so each building&rsquo;s income, expenses, mortgage, and cash flow are separable, and you can see which property carries the portfolio instead of a blended bottom line." },
    { q: "How does the county LIT affect property owners?", a: "Indiana&rsquo;s county local income tax is set by the <strong>owner&rsquo;s county of residence on January 1</strong> &mdash; so an out-of-county or out-of-state owner&rsquo;s rental income is treated under a different county rate than a local owner&rsquo;s. We apply the correct current rate from the DOR list and map property-manager payroll by staff residence." },
    { q: "Can you handle short-term rentals and 1031 exchanges?", a: "Yes &mdash; <strong>Airbnb/VRBO revenue reconciled by channel and property</strong>, and <strong>1031 exchange timing and basis</strong> tracked in the books and coordinated with your CPA and qualified intermediary. We keep the records; your CPA files and the QI executes the exchange." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by properties, entities, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750. No hourly billing. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],
  secChallengesH: "Three places Indiana real estate loses the numbers.",
  secChallengesLede: "Portfolios that look fine on a blended P&amp;L hide trouble when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Property profit is blended", title: "No per-property books.", body: "When every property&rsquo;s income and expense lands in one combined ledger, you can&rsquo;t see which building carries the portfolio and which bleeds once the mortgage and capex are counted. The fix is entity-per-property or per-property class tracking, so each property&rsquo;s NOI, cash flow, and basis are separable and you make hold/sell/refi decisions on real numbers." },
    { signal: "Owner funds &amp; STR blur", title: "Draws &amp; channel revenue messy.", body: "Owner draws mixed with operating cash, and short-term-rental income dumped in one bucket instead of reconciled by channel and property, make both the books and the tax picture unreliable. The fix is clean owner-draw discipline and Airbnb/VRBO reconciliation by channel and property, so distributions and revenue are accurate and defensible." },
    { signal: "Indiana tax is missed", title: "LIT-by-residency &amp; basis gaps.", body: "Because county LIT is set by the owner&rsquo;s county of residence, an out-of-county or out-of-state owner&rsquo;s treatment differs &mdash; easy to get wrong &mdash; and a sloppy basis/depreciation trail wrecks a future 1031 or sale. The fix is correct LIT-by-residency handling, property-manager payroll mapped by county, and a clean basis and depreciation record per property." },
  ],
  secHandleH: "Indiana real estate accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your portfolio and entities, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Per-property", title: "Entity-per-property books", body: "Each property&rsquo;s income, expense, mortgage, and cash flow tracked separately &mdash; by entity or class &mdash; so you see per-property NOI and which building actually pays.", href: "/find-an-accountant/indiana/quickbooks-setup/", cta: "Indiana QuickBooks setup &rarr;" },
    { num: "02 &middot; Owner draws", title: "Owner draws &amp; monthly close", body: "Clean owner-draw and distribution discipline and a monthly close with per-property statements your lender and partners can read.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "03 &middot; STR", title: "Short-term-rental reconciliation", body: "Airbnb and VRBO revenue reconciled by channel and property, with fees, payouts, and occupancy tracked so STR income is accurate.", href: "/find-an-accountant/indiana/quickbooks-reconciliation/", cta: "Indiana reconciliation &rarr;" },
    { num: "04 &middot; 1031 &amp; basis", title: "1031 &amp; basis tracking", body: "Basis and depreciation tracked per property and 1031-exchange timing recorded, coordinated with your CPA and qualified intermediary &mdash; we keep the records; the QI executes.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
    { num: "05 &middot; County LIT", title: "LIT-by-residency &amp; PM payroll", body: "County LIT handled by the owner&rsquo;s county of residence, and property-manager payroll mapped to each staffer&rsquo;s county rate via Form WH-4, from the current DOR list.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "06 &middot; Cleanup", title: "Portfolio cleanup", body: "Separate commingled property books, rebuild per-property tracking, fix owner draws and basis, and reconcile to a CPA- and lender-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you operate property.",
  integrations: [
    "QuickBooks Online &amp; Desktop &mdash; the ledger of record",
    "AppFolio / Buildium &mdash; property-management data reconciled to QuickBooks",
    "Stessa / Baselane &mdash; rental tracking synced to the books",
    "Airbnb / VRBO &mdash; channel revenue, fees, and payouts reconciled",
    "DoorLoop / Rentec &mdash; tenant ledgers and owner statements",
    "QuickBooks Time / Gusto &mdash; property-manager payroll with county-LIT codes",
    "Per-property basis &amp; depreciation schedules (1031 coordinated with your CPA/QI)",
  ],
  integrationsNote: "Using different property-management software? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From a blended P&amp;L to per-property profit.",
  secProcessLede: "Every Indiana real estate engagement follows the same four-phase rhythm &mdash; books accurate first, per-property visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your properties, entities, how you hold and distribute, your short-term-rental and 1031 picture, and owner residency. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure entity-per-property tracking, owner-draw discipline, and basis schedules, plus a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> to separate commingled property books where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; reconciliation", body: "Monthly reconciliation with per-property statements, short-term-rental channel reconciliation, basis tracking, and county-LIT payroll cadence." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Per-property NOI and portfolio reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">acquisition, refi, and 1031 advisory</a> alongside your CPA." },
  ],
  secAdvisoryH: "Accurate per-property numbers are the start. Building the portfolio is the point.",
  advisoryBody: [
    "Once each property shows real NOI and your basis trail is clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what&rsquo;s the next move?&rdquo; Which property to hold, sell, or 1031, when a refinance pencils out, how cash flows across the portfolio, whether a college-town short-term rental beats a long-term lease &mdash; the decisions that separate Indiana operators who compound from those who stall.",
    "That&rsquo;s where real estate advisory comes in: a Certified ProAdvisor who knows your per-property data turning it into acquisition, refi, and exchange strategy alongside your CPA. As automation handles routine entry, this judgment layer is where operators find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Indiana real estate engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm serving Indiana investors, operators, brokerages, and property managers remotely across all 92 counties, and reviewed for technical accuracy on entity-per-property books, owner draws, basis and 1031 coordination, short-term-rental reconciliation, and county LIT by owner residency (<a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>). TechBrot keeps the books CPA-ready and coordinates with your CPA and qualified intermediary, who file and execute; it does not file Indiana returns or execute the 1031 exchange as agent.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Entity-per-property books, owner draws, basis/depreciation, STR reconciliation, county-LIT payroll &middot; 1031 and income-tax filing coordinated with your CPA/QI" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Does not file Indiana returns or execute 1031 exchanges" },
  ],
  related: [
    { title: "Indiana County Income Tax Help", body: "County LIT handled by owner residency and property-manager payroll mapped so the right county rate applies and reconciles.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { title: "Indiana Bookkeeping Cleanup", body: "Separate commingled property books, rebuild per-property tracking, then reconcile to a CPA- and lender-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Real estate accounting (national overview)", body: "How TechBrot builds books for investors and operators nationally &mdash; scoped for Indiana on the call.", href: "/accounting/industries/real-estate/", cta: "National overview &rarr;" },
    { title: "All Indiana industries", body: "See how TechBrot tailors accounting to the way your industry runs in Indiana.", href: "/find-an-accountant/indiana/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is real estate accounting different in Indiana?", a: "Real estate runs on per-property profit &mdash; entity-per-property books, owner draws, basis and depreciation, and 1031 coordination &mdash; that a blended ledger can&rsquo;t show. Indiana adds its own wrinkle: the county local income tax is set by the owner&rsquo;s county of residence on January 1, so an out-of-county or out-of-state owner&rsquo;s rental income is treated under a different county rate than a local owner&rsquo;s. Add the IU and Purdue college-town short-term-rental markets, and the books need real structure. We build all of that into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Do you keep separate books for each property in Indiana?", a: "Yes. We configure entity-per-property or per-property class tracking so each building&rsquo;s income, expenses, mortgage, and cash flow are separable, giving you real per-property NOI instead of a blended bottom line. That&rsquo;s what lets you make hold, sell, refinance, or 1031 decisions on actual numbers, whether you own across the Indy metro or in the Bloomington and West Lafayette rental markets." },
    { q: "How does the county income tax work for Indiana property owners?", a: "Indiana&rsquo;s county local income tax (LIT) is set by the taxpayer&rsquo;s county of residence on January 1, so the treatment of rental income depends on where the owner lives &mdash; an out-of-county or out-of-state owner is handled differently from a local one. We apply the correct current rate from the Indiana DOR list rather than a fixed figure, and we map any property-manager payroll to each staffer&rsquo;s county rate via Form WH-4 so payroll reconciles." },
    { q: "Can you handle short-term rentals and 1031 exchanges?", a: "Yes. We reconcile Airbnb and VRBO revenue by channel and property &mdash; fees, payouts, and occupancy &mdash; so short-term-rental income is accurate, and we track basis and depreciation per property and record 1031-exchange timing, coordinated with your CPA and qualified intermediary. We keep the records and the books; your CPA files and the qualified intermediary executes the exchange. We don&rsquo;t execute the 1031 or file Indiana returns as agent." },
    { q: "Do you work with property managers and brokerages in Indiana?", a: "Yes. For property managers we keep owner funds and operating cash clean and produce per-owner and per-property statements; for brokerages we track commission income, agent splits, and 1099s. Both carry the county-LIT payroll wrinkle for staff living across different counties, which we map from the current DOR rate list so payroll reconciles to the county return." },
    { q: "My property books are commingled. Where do we start in Indiana?", a: "With a cleanup. We separate commingled property books, rebuild per-property tracking, fix owner draws and the basis and depreciation trail, reconcile short-term-rental channels, and reconcile to a CPA- and lender-ready baseline &mdash; then move into a monthly close with per-property reporting. Prefer to talk first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/real-estate/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Real Estate Accounting","description":"Real estate accounting for Indiana investors, operators, brokerages, and property managers — entity-per-property books, owner draws, basis and 1031 coordination, short-term-rental reconciliation, and county-LIT-by-residency handling, set up in QuickBooks by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-industries-real-estate.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-ind-real-estate-summary","#in-ind-real-estate-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/indiana/industries/"},
          {"@type":"ListItem","position":5,"name":"Real Estate"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Real Estate Accounting","serviceType":"Real estate bookkeeping and per-property accounting","description":"Entity-per-property books, owner draws, basis and 1031 coordination, short-term-rental reconciliation, and county-LIT-by-residency handling for Indiana investors, operators, brokerages, and property managers, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Indiana returns or execute 1031 exchanges — coordinates with the client's CPA and qualified intermediary.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana real estate investors, operators, brokerages, property managers, and short-term-rental hosts across the Indy metro and the Bloomington and West Lafayette college-town markets"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
