/* /find-an-accountant/delaware/industries/real-estate/ — t-location INDUSTRY child. Mirrors
 * NY industries/construction.11tydata.js. Content arrays + eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service, FAQPage). FAQPage from the same `faq` array.
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md ONLY. Real estate angle: entity-per-property
 * books; owner draws; GRT on rental and commission income; Sussex coast (Rehoboth/Lewes/Dewey)
 * short-term rentals; 1031 coordination. Franchise tax $300/entity (LLC). No sales tax. No figure
 * invented beyond DE-FACTS (no transfer-tax / lodging-tax rate is in DE-FACTS, so those are kept
 * qualitative and pointed at the .gov source).
 *
 * HONESTY (R5): TechBrot delivers the books; does NOT file Delaware returns; coordinates 1031 with
 * the client's CPA/QI. No invented reviews/stats/clients. No founder name; David Westgate only as
 * reviewedBy #david-westgate. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Delaware real estate accounting, plainly.",
  summary: [
    "Real estate runs on <strong>per-property numbers</strong>, not a blended portfolio total. A landlord, flipper, or short-term-rental operator needs to know which property earns and which bleeds &mdash; so the books have to track <strong>income and expense by property</strong>, often with a <strong>separate entity (LLC) per property</strong> for liability and clean financials. Add <strong>owner draws and contributions</strong>, mortgage interest and escrow, capital improvements versus repairs, and depreciation schedules your CPA maintains, and generic bookkeeping falls apart fast.",
    "Delaware&rsquo;s geography shapes the work. In <strong>New Castle and Kent</strong>, the book of business is long-term residential and commercial rentals; on the <strong>Sussex coast</strong> &mdash; Lewes, Rehoboth, Dewey, Bethany &mdash; <strong>short-term and seasonal vacation rentals</strong> dominate, with platform payouts (Airbnb, Vrbo), cleaning and management fees, and sharp seasonal cash swings. Each property entity owes Delaware&rsquo;s annual <strong>franchise tax</strong> (a flat $300 for an LLC, due June 1), which has to be reserved for, and <strong>rental and commission income can be subject to the gross receipts tax</strong> by activity &mdash; there is no sales tax, but the receipts tax still reaches certain real-estate activity.",
    "<strong>TechBrot</strong> sets up entity-per-property books, clean owner draws, gross-receipts tracking where it applies, short-term-rental reconciliation, and the franchise-tax reserve in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and coordinates 1031 exchanges and depreciation with your CPA. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc. Confirm any transfer-tax or local lodging-tax detail with the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Division of Revenue</a>.",
  ],
  secAiH: "Delaware real estate accounting, in five questions.",
  aiSummary: [
    { q: "Why is Delaware real estate accounting different?", a: "It runs on <strong>per-property profit</strong>, usually with an <strong>entity per property</strong>, plus owner draws, mortgage and escrow, and capital-vs-repair coding. Delaware adds a <strong>franchise-tax reserve per entity</strong> and gross receipts on certain rental and commission income &mdash; with Sussex-coast short-term rentals on top." },
    { q: "Do you set up entity-per-property books?", a: "Yes &mdash; <strong>separate books per property or LLC</strong>, so each property&rsquo;s income, expense, and cash are clean and stand on their own, with consolidated reporting across the portfolio when you need it." },
    { q: "Do you handle Sussex-coast short-term rentals?", a: "Yes &mdash; <strong>Airbnb and Vrbo payouts reconciled net of platform, cleaning, and management fees</strong>, with seasonal cash tracked &mdash; for vacation rentals in Lewes, Rehoboth, Dewey, and Bethany. We keep the books current through the season and the off-season." },
    { q: "Does rental income owe Delaware gross receipts tax?", a: "Certain rental and commission activity is subject to Delaware&rsquo;s <strong>gross receipts tax</strong> by activity &mdash; there&rsquo;s no sales tax, but the receipts tax can still apply. We track receipts by activity in QuickBooks; confirm specifics with the Division of Revenue and your CPA." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by property and entity count, short-term-rental volume, and complexity. Monthly bookkeeping starts at <strong>$400/mo</strong>. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],
  secChallengesH: "Three places Delaware real-estate books break.",
  secChallengesLede: "Portfolios look fine until you ask which property earns. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Per-property profit is invisible", title: "Everything in one bucket.", body: "Income and expense for several properties run through one set of books, so you can&rsquo;t tell which property earns and which loses &mdash; and your CPA can&rsquo;t see entity-level results for the LLCs. The fix is books tracked by property (and by entity where each has its own LLC), so profit, cash, and equity per property are real. If you can&rsquo;t pull one property&rsquo;s P&amp;L in under a minute, this is your starting point." },
    { signal: "Owner money is tangled", title: "Draws, contributions &amp; escrow mixed.", body: "Owner draws and contributions, mortgage principal and interest, and escrow for taxes and insurance get miscoded, so profit and cash both read wrong and capital improvements get expensed instead of capitalized. The fix is clean separation of owner money, correct mortgage and escrow treatment, and a capital-vs-repair discipline your CPA can depreciate from." },
    { signal: "Seasonal &amp; tax gaps", title: "Short-term rentals &amp; reserves missed.", body: "Sussex-coast vacation rentals swing hard by season and pay out net of platform and management fees, so revenue and cash are easy to misstate &mdash; and each property entity still owes the annual franchise tax. The fix is short-term-rental reconciliation by property, gross-receipts tracking where it applies, and a franchise-tax reserve per entity so nothing slips off-season." },
  ],
  secHandleH: "Delaware real estate accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your portfolio and entity structure, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Per-property", title: "Entity-per-property books", body: "Clean books by property and by LLC, so each property&rsquo;s income, expense, cash, and equity stand on their own, with portfolio roll-up when you need it.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; Owner money", title: "Owner draws &amp; mortgage", body: "Owner draws and contributions, mortgage principal/interest split, and escrow handled correctly &mdash; with capital improvements separated from repairs for your CPA to depreciate.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Short-term rentals", title: "Sussex-coast STR books", body: "Airbnb and Vrbo payouts reconciled net of platform, cleaning, and management fees, with seasonal cash tracked &mdash; for Lewes, Rehoboth, Dewey, and Bethany rentals.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping &rarr;" },
    { num: "04 &middot; Gross receipts", title: "Gross receipts on rents", body: "Where rental or commission income is subject to Delaware&rsquo;s gross receipts tax, receipts tracked by activity so the right rate and exclusion apply and the return reconciles.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "05 &middot; Franchise reserve", title: "Per-entity franchise reserve", body: "The annual $300 LLC franchise tax tracked and reserved for each property entity &mdash; filed by your agent or CPA, never a June 1 surprise.", href: "/find-an-accountant/delaware/franchise-tax-help/", cta: "Delaware franchise tax help &rarr;" },
    { num: "06 &middot; Cleanup", title: "Portfolio cleanup", body: "Rebuild per-property tracking, reclassify owner money and capital improvements, fix short-term-rental payouts, and reconcile to a CPA-ready baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you own and operate.",
  integrations: [
    "QuickBooks Online &mdash; class or sub-customer per property, or a file per LLC",
    "Airbnb &amp; Vrbo &mdash; payouts reconciled net of platform and management fees",
    "AppFolio / Buildium / RentRedi &mdash; property-management data to QuickBooks",
    "Stessa &mdash; rental performance reconciled to the books",
    "Mortgage and escrow statements &mdash; principal/interest split correctly",
    "Gross-receipts tracking by activity where rental or commission income applies",
    "Per-entity franchise-tax reserve accounts ($300/LLC, due June 1)",
    "Capital-vs-repair coding for your CPA&rsquo;s depreciation schedules",
  ],
  integrationsNote: "Using a property-management platform not listed? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From a blended total to profit per property.",
  secProcessLede: "Every Delaware real-estate engagement follows the same four-phase rhythm &mdash; books accurate first, per-property visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your portfolio, entity structure, how you track rents, and your short-term-rental and franchise-tax picture. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure per-property and per-entity tracking and clean owner money, plus a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to reclassify capital improvements and fix payouts where needed." },
    { phase: "Phase 3", title: "Monthly close", body: "Monthly reconciliation by property, short-term-rental payouts reconciled, gross-receipts cadence where it applies, and the franchise-tax reserve per entity." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Per-property profit and cash reporting, 1031 coordination with your CPA, and as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">acquisition and cash-flow advisory</a>." },
  ],
  secAdvisoryH: "Per-property books are the start. Knowing what to buy next is the point.",
  advisoryBody: [
    "Once every property shows real profit and cash, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what should the portfolio do next?&rdquo; Which property to hold, refinance, or sell, how a 1031 exchange should be timed and structured with your CPA, where the next acquisition&rsquo;s numbers actually work, how seasonal coastal cash funds the off-season &mdash; the decisions that grow a Delaware portfolio.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your per-property data turning it into acquisition, refinance, and cash-flow strategy, alongside your CPA on 1031s and depreciation. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Delaware real-estate engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm in Middletown, and reviewed for technical accuracy on entity-per-property books, short-term-rental reconciliation, the gross receipts tax, and the per-entity franchise-tax reserve (<a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">DE Division of Revenue</a>; <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Division of Corporations</a>). TechBrot delivers the books and coordinates 1031 exchanges and depreciation with your CPA, who files.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Entity-per-property books, owner draws, short-term-rental reconciliation, gross receipts, franchise-tax reserve &middot; 1031 and depreciation coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],
  secRelatedH: "Related Delaware services &amp; industries.",
  related: [
    { title: "Franchise Tax Help", body: "The annual $300 LLC franchise tax tracked and reserved per property entity &mdash; filed by your agent or CPA.", href: "/find-an-accountant/delaware/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
    { title: "Holding Companies", body: "Multi-entity owners with property LLCs under a parent &mdash; intercompany and per-entity books.", href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/", cta: "Holding companies &rarr;" },
    { title: "Short-term rentals playbook", body: "How TechBrot builds books for vacation-rental operators &mdash; scoped for the Sussex coast on the call.", href: "/accounting/industries/short-term-rentals/", cta: "Short-term rentals &rarr;" },
    { title: "All Delaware industries", body: "See how TechBrot tailors accounting to the way your industry runs in Delaware.", href: "/find-an-accountant/delaware/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is real-estate accounting different in Delaware?", a: "Real estate runs on per-property profit, usually with a separate LLC per property for liability and clean financials &mdash; so the books have to track income and expense by property, handle owner draws and mortgage and escrow correctly, and separate capital improvements from repairs for depreciation. Delaware adds a franchise-tax reserve per entity (a flat $300 for an LLC) and gross receipts on certain rental and commission income, with Sussex-coast short-term rentals on top. We build all of that into QuickBooks." },
    { q: "Do you set up entity-per-property books?", a: "Yes. Depending on your structure we use a separate QuickBooks file per LLC, or classes and sub-customers per property within one file, so each property&rsquo;s income, expense, cash, and equity are clean and stand on their own &mdash; with portfolio-level roll-up when you want it. That&rsquo;s what lets you and your CPA see entity-level results and make hold, refinance, or sell decisions from real numbers." },
    { q: "Can you handle Sussex-coast short-term and vacation rentals?", a: "Yes &mdash; that&rsquo;s a core Delaware engagement. Airbnb, Vrbo, and direct-booking payouts come net of platform fees, cleaning, and management costs, so we reconcile each payout back to gross revenue and real expense by property, and track the sharp seasonal cash swings that define Lewes, Rehoboth, Dewey, and Bethany rentals. We keep the books current through peak season and the off-season so nothing slips." },
    { q: "Does Delaware rental income owe gross receipts tax?", a: "There&rsquo;s no Delaware sales tax, but certain rental and commission activity is subject to the gross receipts tax, levied on the recipient by business activity. We set up gross-receipts tracking by activity in QuickBooks where it applies, so the right rate and exclusion are used and the return reconciles to the books. The exact treatment depends on your activity &mdash; we confirm specifics with the Division of Revenue and coordinate with your CPA." },
    { q: "Do you handle 1031 exchanges and depreciation?", a: "We keep the books that a 1031 exchange and depreciation schedules depend on &mdash; clean basis, capital improvements separated from repairs, and accurate per-property records &mdash; and we coordinate directly with your CPA and qualified intermediary on the exchange itself. We don&rsquo;t file your return or act as the QI, but we make sure the bookkeeping supports the strategy so nothing is reconstructed under deadline pressure." },
    { q: "My portfolio books are a mess across properties. Where do we start in Delaware?", a: "With a cleanup. We rebuild per-property and per-entity tracking, reclassify owner draws and capital improvements, fix short-term-rental payouts, set each entity&rsquo;s franchise-tax reserve, and reconcile to a known-good baseline &mdash; then move you onto accurate monthly bookkeeping with per-property reporting. Most owners come to us mid-mess; it&rsquo;s the normal starting point. Prefer to talk first? Call (877) 751-5575 and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/real-estate/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Real Estate Accounting","description":"Real estate accounting for Delaware operators and investors — entity-per-property books, owner draws, short-term-rental reconciliation on the Sussex coast, gross receipts on rents, and a per-entity franchise-tax reserve, set up in QuickBooks by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-real-estate-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-ind-realestate-summary","#de-ind-realestate-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/delaware/industries/"},
          {"@type":"ListItem","position":5,"name":"Real Estate"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Real Estate Accounting","serviceType":"Real estate and rental bookkeeping","description":"Entity-per-property books, owner draws, short-term-rental reconciliation, gross-receipts tracking, and the per-entity franchise-tax reserve for Delaware real estate operators and investors, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Delaware returns — coordinates 1031 exchanges and depreciation with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware landlords, real estate investors, property managers, flippers, and Sussex-coast short-term-rental operators"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
