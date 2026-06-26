/* /accounting/industries/short-term-rentals/ — NEW high-fee industry page built on the
 * proven real-estate.njk t-mofu pattern. DISTINCT ANGLE from /accounting/industries/
 * real-estate/ (the long-term / owner hub — linked, NOT restated): this page is
 * short-term-rental-specific — per-listing P&L, platform PAYOUT RECONCILIATION (gross
 * nightly + cleaning + service fees + taxes withheld vs the net deposit), lodging /
 * occupancy / transient tax recording, cleaning & turnover cost tracking, and
 * channel-manager / PMS (Guesty / Hostaway) → QuickBooks. t-mofu, tierClass
 * section--tier-guide, bodyClass page--mofu. CTA intent: accounting / file-review
 * (canonical lexicon). Section id prefix str-.
 *
 * HONESTY (R4/R5/R9): TAX BOUNDARY is absolute. Schedule C vs Schedule E,
 * material-participation, substantial-services, cost-segregation, and depreciation are
 * EXPLAINED for literacy but the DETERMINATION is DEFERRED to the client's CPA — "your
 * CPA decides the tax classification; we keep the books that support it." Lodging /
 * occupancy / transient tax: we RECORD it correctly (whether the platform collected &
 * remitted, or the host owes it); whether a given platform remits, and the host's own
 * filing / registration, is determined with the CPA and the state/local taxing
 * authority. We keep books + reconcile; we do NOT file income taxes. No fabricated
 * stats / clients / reviews; representative scenarios labeled; no AggregateRating /
 * Review schema. Canonical pricing ONLY (reference /pricing/) — no invented STR prices.
 * Founder-name-zero in visible content (David Westgate only in WebPage.reviewedBy
 * schema @id for E-E-A-T). Independent firm — not affiliated with Intuit Inc., Airbnb,
 * Inc., VRBO, or any booking platform.
 *
 * pageGraph: WebPage + BreadcrumbList + Service ("Short-Term Rental Accounting",
 * provider #organization, areaServed United States) + ItemList (6 deliverables) +
 * FAQPage (all FAQ) + QAPage (from ai-summary). speakable → #str-ai-summary. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // "Short-term rental accounting, plainly." — definition prose, STR-specific.
  definition: [
    "A short-term rental runs on <strong>payouts, not bookings</strong>. The nightly rate a guest sees is never what hits your bank: Airbnb, VRBO, and Booking.com each subtract a host service fee, route the cleaning fee, sometimes withhold and remit occupancy tax, and split a multi-night stay across check-in and check-out timing &mdash; so the <strong>net deposit is smaller than the gross and arrives on its own schedule</strong>. If your books simply record the deposit as revenue, your income is understated, your platform fees are invisible, your cleaning cost is buried, and you cannot tell which listing actually earns.",
    "Short-term rental accounting fixes that by reconciling each payout <strong>gross-to-net, per listing</strong>: gross nightly revenue, plus cleaning and pet or extra-guest fees, less the platform&rsquo;s service fee, less any tax the platform collected and remitted on your behalf, equals the deposit. Built on top of that is a real <strong>per-listing profit and loss</strong> that carries cleaning and turnover cost, supplies, utilities, software, and management &mdash; the numbers that tell you which property to keep, raise, or let go. Lodging, occupancy, and transient-occupancy tax has to be <strong>recorded correctly whether the platform remitted it or you still owe it</strong>.",
    "<strong>TechBrot</strong>&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> set this up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, reconcile every platform payout, connect your channel manager or PMS, track turnover cost, and keep it accurate monthly &mdash; so your CPA inherits clean, classification-ready books. We keep the books and the records; <strong>your CPA decides whether the activity is reported on Schedule C or Schedule E</strong> and sets depreciation. This page is short-term-rental-specific; for owner-held, long-term, and portfolio work, see <a href=\"/accounting/industries/real-estate/\">real estate accounting</a>. Independent firm &mdash; not affiliated with Intuit Inc., Airbnb, or any booking platform.",
  ],

  // "Short-term rental accounting, in five questions." — NON-heading quick answers (<dt>).
  aiSummary: [
    { q: "Why is short-term rental bookkeeping harder?", a: "Because the platform&rsquo;s <strong>net deposit is not your revenue</strong>. Airbnb, VRBO, and Booking.com each subtract a service fee, route the cleaning fee, sometimes withhold occupancy tax, and split stays across timing &mdash; so every payout has to be reconciled gross-to-net, per listing, or your income is understated and your fees and cleaning cost disappear." },
    { q: "Do you reconcile Airbnb, VRBO, and Booking.com payouts?", a: "Yes. We tie each platform payout back to gross nightly revenue, cleaning and extra fees, the host service fee deducted, and any tax the platform collected &mdash; so the deposit matches the books and nothing is lost between gross and net. We reconcile a single listing or a portfolio across several platforms." },
    { q: "Do you handle occupancy and lodging tax?", a: "We <strong>record it correctly</strong> &mdash; whether the platform already collected and remitted it on your behalf, or you still owe it directly &mdash; so the liability and the remittance are clear in your books. Which platforms remit, and your own registration and filing obligations, are determined with your CPA and the state or local taxing authority." },
    { q: "Is my Airbnb income Schedule C or Schedule E?", a: "That is a <strong>tax-classification decision your CPA makes</strong>, not us. It turns on whether you provide substantial services and on material participation &mdash; concepts we&rsquo;ll keep your books clean enough to support, but the determination and the filing belong to your CPA or EA. TechBrot does not file income taxes." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong>, driven by the number of listings, how many platforms and channel tools are in play, occupancy-tax handling, and reporting needs. No hourly billing. See <a href=\"/pricing/\">pricing</a>; intensive multi-property advisory is part of a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement." },
  ],

  // "Three places hosts lose the numbers." — 3 H3s (grid-3 buyer-cards). STR-specific.
  challenges: [
    { signal: "The deposit is treated as revenue", title: "Net payout booked as gross income.", body: "The bank deposit gets recorded as the sale, so the platform service fee, the cleaning fee, and any tax withheld vanish &mdash; income is understated and your real cost of hosting is invisible. <strong>The fix:</strong> reconcile every payout gross-to-net, so gross nightly revenue, fees collected, service fees deducted, and tax remitted all appear in the books and the deposit ties out." },
    { signal: "Per-listing profit is invisible", title: "Everything lumped across listings.", body: "Bookings, cleaning, supplies, and utilities land in one bucket with no listing dimension, so you can&rsquo;t tell which unit carries the others and which one barely breaks even after turnover. <strong>The fix:</strong> a per-listing P&amp;L in QuickBooks &mdash; revenue, cleaning, turnover, supplies, and management assigned to each listing &mdash; so every property has a real number behind it." },
    { signal: "Occupancy tax is a guess", title: "Lodging tax recorded wrong &mdash; or not at all.", body: "Some platforms collect and remit occupancy tax for you and some don&rsquo;t, so the same payout can mean &lsquo;already handled&rsquo; or &lsquo;you still owe it&rsquo; &mdash; and the books rarely show which. <strong>The fix:</strong> record lodging, occupancy, and transient-occupancy tax correctly per payout, distinguishing platform-remitted from host-owed, with the liability visible. Your registration and filing are confirmed with your CPA and the taxing authority." },
  ],

  // "Short-term rental accounting, done by an expert." — 6 H3s (grid-3). Also ItemList deliverables.
  handle: [
    { num: "01 &middot; Payout reconciliation", title: "Platform payout reconciliation", body: "Every Airbnb, VRBO, and Booking.com payout reconciled gross-to-net &mdash; gross nightly revenue, cleaning and extra-guest fees, the host service fee deducted, and any tax the platform remitted &mdash; so each deposit ties out and nothing is lost between booking and bank.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "02 &middot; Per-listing P&amp;L", title: "Per-listing profit &amp; loss", body: "Revenue, cleaning, turnover, supplies, utilities, software, and management tracked to each listing in QuickBooks using Classes or sub-customers &mdash; so every property carries its own monthly P&amp;L, reportable by listing or across the whole portfolio.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03 &middot; Lodging &amp; occupancy tax", title: "Occupancy &amp; lodging tax recording", body: "Lodging, occupancy, and transient-occupancy tax recorded correctly per payout &mdash; distinguishing what a platform already collected and remitted from what you still owe &mdash; so the liability is clear. Registration and filing are determined with your CPA and the taxing authority.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Turnover cost", title: "Cleaning &amp; turnover cost tracking", body: "Cleaning fees collected vs. cleaning cost paid, plus supplies, restocking, linens, and maintenance between guests, tracked per listing &mdash; so the margin you actually keep on a stay is real, not the headline nightly rate.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "05 &middot; Setup &amp; integrations", title: "QuickBooks setup &amp; channel-manager sync", body: "A short-term-rental chart of accounts, per-listing structure, and the right apps connecting your channel manager or PMS &mdash; Guesty, Hostaway, OwnerRez, Hospitable &mdash; into QuickBooks cleanly, so bookings, fees, and payouts flow into one ledger.", href: "/quickbooks/setup/", cta: "QuickBooks setup &rarr;" },
    { num: "06 &middot; Cleanup &amp; advisory", title: "Cleanup &amp; portfolio advisory", body: "Untangle deposits booked as gross, rebuild per-listing history, and reconcile to a known-good baseline &mdash; then, as you scale, fractional CFO advisory on pricing, occupancy, and which listings to keep, built on real per-listing numbers.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
  ],

  // PAYOUT ANATOMY — content-to-goal comparison (vs-scroll + vs-table). STR specificity.
  anatomy: [
    { cap: "Revenue recognition", str: "Reconciled gross-to-net: gross nightly + fees, less service fee, less tax remitted", std: "Net bank deposit booked as the sale" },
    { cap: "Platform service fees", str: "Broken out per payout, per platform, as a real cost line", std: "Buried inside the deposit, never seen" },
    { cap: "Cleaning fees", str: "Fee collected tracked against cleaning cost paid, per listing", std: "Netted into income, margin hidden" },
    { cap: "Occupancy / lodging tax", str: "Recorded per payout; platform-remitted vs. host-owed kept distinct", std: "Ignored or lumped into revenue" },
    { cap: "Profit reporting", str: "P&amp;L by individual listing and across the portfolio", std: "One company-wide income number" },
    { cap: "Turnover cost", str: "Supplies, linens, restocking, and maintenance tracked between guests", std: "Blended into general expenses" },
    { cap: "Channel / PMS data", str: "Guesty / Hostaway / OwnerRez reconciled into QuickBooks", std: "Lives in a disconnected second system" },
    { cap: "Tax classification", str: "Books kept clean enough to support Schedule C or E &mdash; CPA decides which", std: "No structure for either treatment" },
  ],
  anatomyNote: "We keep the books and reconcile the payouts; the tax line stays with your advisors. <strong>Whether your activity is reported on Schedule C or Schedule E, and how it&rsquo;s depreciated, is your CPA&rsquo;s call</strong> &mdash; we keep the records that support it. Whether a given platform remits occupancy tax, and your own registration and filing, is confirmed with your CPA and the state or local taxing authority. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // INTEGRATIONS — STR platforms & channel tools reconciled with QuickBooks (checks-list).
  integrations: [
    "QuickBooks Online &mdash; the per-listing ledger everything reconciles into",
    "Airbnb &mdash; payouts reconciled gross-to-net per listing",
    "VRBO &mdash; bookings and payouts tied back to gross and fees",
    "Booking.com &mdash; reservations and remittances reconciled",
    "Guesty &mdash; channel-manager and PMS data into the books",
    "Hostaway &mdash; multi-channel bookings synced to per-listing P&amp;L",
    "OwnerRez &mdash; reservations, fees, and payouts reconciled",
    "Hospitable &amp; Lodgify &mdash; small-host channel data into QuickBooks",
  ],
  integrationsNote: "On a different stack? If it tracks reservations and pays out to a bank account, we can reconcile it &mdash; bookings, fees, and payouts flow into clean per-listing books instead of living in two disconnected systems. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — 4 H3s (grid-2 buyer-cards). STR-specific.
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your listings, the platforms and channel tools you use, how payouts arrive, and how occupancy tax is currently handled &mdash; and where the books stop reconciling. No pitch." },
    { phase: "Phase 2", title: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to undo deposits booked as gross and rebuild per-listing history, plus QuickBooks setup with a short-term-rental chart of accounts and channel-manager sync." },
    { phase: "Phase 3", title: "Monthly reconciliation", body: "Every platform payout reconciled gross-to-net and every account tied to the bank monthly, with cleaning, turnover cost, and occupancy-tax recording kept current per listing." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "A monthly package with per-listing P&amp;L and a portfolio view, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on pricing, occupancy, and which listings to keep or add as you grow." },
  ],

  // ADVISORY — standing brand line is the H2; body as section prose.
  advisoryBody: [
    "Once every payout reconciles and your per-listing numbers are real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do next?&rdquo; Which listing earns its keep after cleaning and turnover, whether a market still supports your nightly rate, when occupancy says it&rsquo;s time to drop a property or add one, how much you can safely draw between seasons &mdash; the decisions that actually move a short-term rental business.",
    "That&rsquo;s where <strong>short-term rental advisory</strong> comes in: a Certified ProAdvisor who knows your listings turning the numbers into pricing, occupancy, and portfolio decisions. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. Tax classification and filing stay with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name in visible content).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Platform payout reconciliation, per-listing P&amp;L, lodging/occupancy-tax recording &middot; Schedule C-vs-E classification and depreciation decided by your CPA or EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc., Airbnb, or any booking platform" },
  ],

  // RELATED — 4 H3s (grid-2 buyer-cards).
  related: [
    { title: "Real estate accounting", body: "Owner-held, long-term, and multi-entity property accounting &mdash; per-property tracking, deposits and owner funds, depreciation, and basis for landlords and investors.", href: "/accounting/industries/real-estate/", cta: "Real estate accounting &rarr;" },
    { title: "Monthly bookkeeping", body: "Per-listing books reconciled to every payout, every month &mdash; the clean, classification-ready foundation your CPA files from.", href: "/accounting/bookkeeping/", cta: "Explore bookkeeping &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean per-listing books into pricing, occupancy, and portfolio decisions &mdash; the judgment layer beyond the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, ecommerce, construction, restaurant, healthcare, law, nonprofit.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // FAQ — 6+ distinct Q/A. visible faq__list = FAQPage schema (same array, NO dedup).
  faq: [
    { q: "Why is short-term rental accounting different from regular bookkeeping?", a: "Because the platform&rsquo;s net deposit is not your revenue. Airbnb, VRBO, and Booking.com each subtract a host service fee, route the cleaning fee, sometimes withhold and remit occupancy tax, and split multi-night stays across timing — so every payout has to be reconciled gross-to-net, per listing. Standard bookkeeping that records the bank deposit as the sale understates income, hides your platform fees and cleaning cost, and can&rsquo;t tell you which listing actually earns." },
    { q: "Do you reconcile Airbnb, VRBO, and Booking.com payouts?", a: "Yes. We tie each platform payout back to its parts — gross nightly revenue, cleaning and extra-guest fees collected, the host service fee deducted, and any tax the platform collected and remitted — so the deposit matches the books and nothing is lost between the booking and the bank. We reconcile a single listing or a portfolio spread across several platforms." },
    { q: "How do you handle occupancy, lodging, and transient-occupancy tax?", a: "We <a href=\"/accounting/sales-tax-compliance/\">record it correctly</a> in your books — distinguishing what a platform already collected and remitted on your behalf from what you still owe directly — so the liability and the remittance are clear. Which platforms remit varies by jurisdiction and platform, and your own registration and filing obligations are determined with your CPA and the relevant state or local taxing authority. We keep the records; we do not file your tax returns." },
    { q: "Is my Airbnb income reported on Schedule C or Schedule E?", a: "That is a tax-classification decision your CPA or EA makes, not us. It generally turns on whether you provide substantial services to guests and on whether you materially participate — concepts we&rsquo;ll explain at a literacy level and keep your books clean enough to support either treatment. But the determination and the filing belong to your CPA. TechBrot keeps the books that support the classification; it does not file income taxes." },
    { q: "Do you track cleaning and turnover costs per listing?", a: "Yes. We track the cleaning fee collected against the cleaning cost actually paid, plus supplies, linens, restocking, and between-guest maintenance, assigned to each listing — so you see the margin you really keep on a stay rather than the headline nightly rate. That per-listing turnover picture is what makes pricing and keep-or-drop decisions real." },
    { q: "Do you work with Guesty, Hostaway, and other channel managers?", a: "Yes. We reconcile channel managers and property-management systems such as Guesty, Hostaway, OwnerRez, Hospitable, and Lodgify to QuickBooks, so bookings, fees, and payouts flow into clean per-listing books instead of living in a disconnected second system. If your tool tracks reservations and pays out to a bank account, we can usually reconcile it." },
    { q: "What does short-term rental bookkeeping cost?", a: "Pricing depends on the number of listings, how many platforms and channel tools are involved, whether occupancy-tax recording is needed, and your reporting needs. Short-term rental engagements are quoted as a fixed monthly fee against a written scope with no hourly billing — see our pricing page for how that works. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "Is this different from your real estate accounting page?", a: "Yes. This page is short-term-rental-specific — payout reconciliation, per-listing P&amp;L, cleaning and turnover cost, occupancy tax, and channel-manager integration. Owner-held, long-term, and multi-entity property work — security deposits, owner draws, mortgage splits, depreciation, and 1031 basis — lives on our <a href=\"/accounting/industries/real-estate/\">real estate accounting page</a>. Many hosts need both, and we keep one clean set of books across them." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/short-term-rentals/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Short-Term Rental Accounting & Airbnb Bookkeeping","description":"Short-term rental accounting and Airbnb bookkeeping — per-listing profit and loss, platform payout reconciliation, lodging and occupancy tax recording, cleaning and turnover cost tracking, and channel-manager integration by Certified ProAdvisors for U.S. vacation-rental hosts and operators.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/short-term-rental-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#str-ai-summary"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Short-Term Rentals","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Short-Term Rental Accounting","serviceType":"Short-term rental accounting and Airbnb bookkeeping","description":"Per-listing profit and loss, platform payout reconciliation (Airbnb, VRBO, Booking.com gross-to-net), lodging and occupancy tax recording, cleaning and turnover cost tracking, and channel-manager and PMS integration for U.S. short-term and vacation rental hosts and operators, delivered by Certified QuickBooks ProAdvisors. Independent firm; does not file income taxes — the client's CPA or EA decides Schedule C vs. Schedule E classification and depreciation, and the client's CPA and the relevant taxing authority determine occupancy-tax registration and filing.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. short-term and vacation rental hosts, Airbnb and VRBO operators, and property managers"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Short-term rental accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What short-term rental accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Short-term rental accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
