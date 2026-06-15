/* /accounting/industries/retail/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-retail.txt (42 headings, 7 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/retail/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/accounting/industries/
 * construction.njk + .11tydata.js (proven t-mofu cobalt) for structure + the FULL
 * schema set (WebPage, BreadcrumbList, Service, ItemList, FAQPage, QAPage).
 * Inventory/COGS angle modeled on src/accounting/industries/ecommerce.11tydata.js.
 * NATIONAL scope — POS reconciliation, inventory shrinkage/markdowns, gift-card
 * deferred revenue, multi-location P&L, omnichannel, multi-jurisdiction sales tax.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: the baseline body carried EXACTLY 7 Q/A and the contract freezes all 7 — they
 * render as the visible faq__list and emit FAQPage from the same array (NO dedup, NO
 * appended FAQ — the gate's 6+ minimum is already satisfied verbatim). The baseline
 * also carried an "advice vs bookkeeping" theme in its advisory mission-block; that
 * prose is PRESERVED as section content in the advisory block (no gutting), not
 * duplicated into the FAQ array. FAQPage + QAPage emitted from the same arrays.
 *
 * T3 no collapse: single-store vs. multi-location omnichannel comparison rendered as
 * vs-scroll + vs-table under its own frozen H2.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc.; bookkeeping/ProAdvisor scope — does NOT file income
 * taxes, coordinates with the client's CPA/EA. No <strong> in the dark hero subheading.
 * The 1–2% shrinkage figure is a generic industry norm carried verbatim from baseline,
 * framed as "typically" — not a TechBrot client outcome. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Retail accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "Retail books layer multiple complications onto basic <a href=\"/accounting/bookkeeping/\">bookkeeping</a>. Every sale flows through a <strong>point-of-sale system</strong> (Square, Clover, Lightspeed, Shopify POS) that produces daily Z-reports requiring reconciliation to deposits and the general ledger. <strong>Inventory</strong> must be tracked with cycle counts and inevitable <strong>shrinkage</strong> (theft, damage, mis-counts) recognized as a GAAP expense &mdash; typically 1&ndash;2% of revenue. <strong>Gift cards and store credit</strong> are deferred revenue liabilities until redeemed. <strong>Markdowns and promotional pricing</strong> distort gross margin unless tracked properly. <strong>Multi-location</strong> retailers need location-level P&amp;L; <strong>omnichannel</strong> retailers need stores plus Shopify plus Amazon all feeding one inventory ledger.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who handle every piece of retail accounting reality in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file &mdash; daily POS reconciliation, perpetual inventory with shrinkage recognition, gift-card deferred revenue, vendor chargebacks, location-level P&amp;L, omnichannel reconciliation, and <a href=\"/accounting/sales-tax-compliance/\">multi-state sales tax</a> across both physical-presence states and ship-to states. For retailers ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into pricing, location, and assortment decisions. We deliver the books and keep the by-state data your CPA needs; your CPA or EA files income taxes. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., zero commission on any POS, inventory, or payment platform.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Retail accounting, in five questions.)
  aiSummary: [
    { q: "Why is retail accounting different?", a: "Every sale flows through a <strong>POS system</strong> that produces daily Z-reports requiring reconciliation. <strong>Inventory shrinkage</strong> (typically 1&ndash;2% of revenue) must be measured and recognized. <strong>Gift cards</strong> are deferred revenue liabilities until redeemed. <strong>Multi-location and omnichannel</strong> add location-level and channel-level P&amp;L complexity standard bookkeeping can&rsquo;t handle." },
    { q: "Do you reconcile Square, Clover, Lightspeed, Shopify POS?", a: "Yes. Daily Z-reports posted to QuickBooks with gross sales, taxes, tips, refunds, gift-card activity, and tender breakdown reconciled to deposits and credit-card settlements. Variance is flagged for investigation. Integrated through native connectors or middleware (Bookkeep, Synder, A2X for retail)." },
    { q: "How do you handle inventory and shrinkage?", a: "Perpetual inventory tracking plus scheduled cycle counts. Shrinkage variance is posted to a dedicated expense account and reported as a percentage of sales monthly. <strong>You can&rsquo;t manage what you don&rsquo;t measure</strong> &mdash; knowing shrinkage rate is the first step to controlling it." },
    { q: "Do you handle gift cards, multi-location, and omnichannel?", a: "Yes. <strong>Gift cards</strong> as deferred-revenue liability with breakage recognition. <strong>Multi-location</strong> with location-level P&amp;L on QuickBooks Enterprise Class/Location tracking. <strong>Omnichannel</strong> with stores + Shopify + Amazon feeding one inventory ledger &mdash; the digital channels detailed on our <a href=\"/accounting/industries/ecommerce/\">ecommerce accounting</a> page." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by location count, channel count, SKU complexity, and transaction volume. No hourly billing. Most retail engagements include initial <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to reconcile prior POS-to-books drift. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places retailers lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places retailers lose the numbers. + 3 H3s)
  challenges: [
    { signal: "POS doesn&rsquo;t reconcile", title: "Z-reports, deposits, and books all disagree.", body: "Daily POS Z-reports show one number for gross sales, the bank shows another for deposits, and the books show a third for revenue &mdash; none fully reconciling. Card batches settle on different days than they post, cash-drawer variance gets ignored, and month-end revenue is a guess. The fix is daily reconciliation: every Z-report posted next business day, card batches matched to processor deposits net of fees, cash matched to bank deposits, every variance explained. If books don&rsquo;t reconcile to POS within a few dollars daily, monthly revenue is approximate &mdash; and so is everything built on it." },
    { signal: "Inventory and margin are invisible", title: "Shrinkage and markdowns aren&rsquo;t tracked.", body: "Without perpetual inventory and scheduled cycle counts, <strong>shrinkage</strong> goes unmeasured &mdash; quietly eroding gross margin while no one sees it. Without markdown tracking, margin reports include only invoiced prices and miss the discounting that actually happened, so reported gross margin runs consistently higher than reality. The fix is perpetual inventory in QuickBooks (or Enterprise for multi-location), scheduled cycle counts, shrinkage posted monthly as a real expense, and markdowns tracked separately. Shrinkage of 1&ndash;2% of revenue is normal; 3%+ is an operational problem &mdash; you can&rsquo;t know which you have until you measure it." },
    { signal: "Locations and channels can&rsquo;t be compared", title: "No location-level or channel-level P&amp;L.", body: "Total chain revenue and total chain gross margin say nothing about which location, channel, or category is actually pulling its weight. Without location-level and channel-level P&amp;L, expansion, closure, and assortment decisions are made on intuition, not evidence. The fix is a chart of accounts with Class or Location tracking for every location and channel, occupancy and shared overhead allocated correctly, and monthly P&amp;L produced at the location and channel level &mdash; not just consolidated. Most multi-location retailers discover on first honest reporting that one or two locations subsidize the rest." },
  ],

  // SUBVERTICALS — "Retail in every shape." (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Retail in every shape. + 6 H3s)
  subverticals: [
    { title: "Single-store independents", body: "Boutiques, specialty shops, neighborhood retail. One POS, manageable SKU count, often owner-operated. The cleanest retail engagement: daily POS reconciliation, monthly inventory, gross-margin reporting that finally tells the owner what&rsquo;s working." },
    { title: "Multi-location retail chains", body: "Multi-store regional and national retailers. Location-level P&amp;L, inter-location transfers, occupancy allocation, consolidated reporting. Typically requires <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> with Class or Location tracking." },
    { title: "Omnichannel retailers", body: "Physical store(s) + Shopify + Amazon + wholesale. One inventory feeding multiple channels with channel-level margin and shared-cost allocation. See <a href=\"/accounting/industries/ecommerce/\">ecommerce accounting</a> for the digital-channel reconciliation detail." },
    { title: "Specialty &amp; high-touch retail", body: "Jewelry, art, antiques, luxury goods, specialty hardware. Higher-ticket transactions, consignment accounting, layaway and customer deposits, often serial-number or unique-item inventory tracking." },
    { title: "Food &amp; beverage retail", body: "Grocery, convenience, specialty food, beverage retail. Higher shrinkage rates, expiration tracking, lottery and tobacco accounting where applicable, vendor allowances and slotting fees, often Toast or specialized POS." },
    { title: "Apparel &amp; seasonal retail", body: "Clothing, footwear, seasonal goods. Markdown-heavy with frequent promotional pricing, end-of-season inventory write-downs, return rates above general retail, often style/color/size matrix inventory." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Retail accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; POS", title: "Daily POS reconciliation", body: "Z-reports posted daily with gross sales, tax, tips, refunds, gift cards, and tender breakdown reconciled to deposits and credit-card settlements &mdash; every variance flagged and explained.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Inventory", title: "Inventory, shrinkage &amp; markdowns", body: "Perpetual inventory with scheduled cycle counts, shrinkage variance recognized monthly as a real expense, and markdowns tracked separately so realized gross margin is visible.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Liabilities", title: "Gift cards &amp; deferred revenue", body: "Gift cards, store credit, and customer deposits tracked as deferred-revenue liabilities with breakage recognition per state escheatment rules &mdash; not booked as immediate revenue.", href: "/accounting/chart-of-accounts-setup/", cta: "Chart of accounts setup &rarr;" },
    { num: "04 &middot; Structure", title: "Multi-location &amp; omnichannel", body: "Location-level P&amp;L, channel-level margin, and shared-cost allocation, often on <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> with Class or Location tracking and a connected inventory source of truth.", href: "/quickbooks/enterprise/", cta: "QuickBooks Enterprise &rarr;" },
    { num: "05 &middot; Tax", title: "Multi-jurisdiction sales tax", body: "Physical-presence nexus at every store location plus ship-to economic nexus for online sales, with monthly or quarterly filing in every required state.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "06 &middot; Advisory", title: "Pricing &amp; location advisory", body: "Assortment strategy, location performance analysis, markdown cadence, and inventory-turnover targets &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — retail tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to where your retail runs.)
  integrations: [
    "Square &mdash; daily Z-reports posted as sales summaries",
    "Clover &mdash; tender breakdown reconciled to deposits",
    "Lightspeed Retail &mdash; inventory and POS feeding QuickBooks",
    "Shopify POS &mdash; in-store and online tied to one ledger",
    "Toast &mdash; retail-hospitality crossover reconciliation",
    "Vend &mdash; POS sales and inventory synced",
    "Bookkeep / Synder / A2X &mdash; clean daily summaries to QuickBooks",
    "Cin7 / Brightpearl &mdash; multi-channel inventory source of truth",
    "Avalara / TaxJar &mdash; multi-jurisdiction sales-tax automation",
    "Gusto &mdash; retail and multi-location payroll",
  ],
  integrationsNote: "Different stack? If it has a QuickBooks integration or exports clean data, we work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON TABLE — single-store vs. multi-location omnichannel (vs-scroll + vs-table, T3 no collapse).
  // (H2: Single-store retail vs. multi-location omnichannel retail.)
  comparisonRows: [
    { need: "POS reconciliation", single: "One POS, one daily Z-report", multi: "Multiple POS systems per location plus online channels reconciled separately and consolidated" },
    { need: "Inventory tracking", single: "One location, one count cycle", multi: "Multi-location inventory with inter-location transfers and channel allocation" },
    { need: "P&amp;L reporting", single: "Single P&amp;L", multi: "Location-level and channel-level P&amp;L plus consolidated; shared overhead allocated" },
    { need: "Sales tax", single: "One state, one rate, one filing", multi: "Physical-presence nexus per location plus ship-to economic nexus; multi-state filings" },
    { need: "Platform fit", single: "QuickBooks Online Plus or Advanced", multi: "QuickBooks Enterprise with Class/Location tracking, often plus dedicated inventory management" },
    { need: "Gift cards", single: "Single liability account, redeemable at one store", multi: "Cross-location redeemable with inter-location settlement tracking" },
    { need: "Reporting cadence", single: "Monthly P&amp;L plus inventory and shrinkage", multi: "Weekly location flash + monthly channel margin + quarterly assortment review" },
  ],
  comparisonNote: "Most retailers start on the left and grow into the right. The accounting transition usually happens around the second location or first ecommerce channel &mdash; ahead of the operational transition, not behind it.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From cash drawer chaos to real retail economics. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your location count, channel mix, POS platform, SKU complexity, current bookkeeping state, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to reconcile prior POS-to-books drift, rebuild inventory, and post missing shrinkage &mdash; plus the right <a href=\"/accounting/chart-of-accounts-setup/\">chart-of-accounts setup</a> for retail." },
    { num: "Phase 3", name: "Daily &amp; monthly reconciliation", body: "Daily POS posting and reconciliation, monthly inventory cycle counts with shrinkage recognition, and location- and channel-level P&amp;L maintained." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with location and channel P&amp;L, inventory turnover, and shrinkage trends, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on assortment, pricing, and location decisions." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the
  // baseline advisory mission-block (assortment/location/pricing judgment) — no gutting.
  // (H2: Reconciled registers are the start. Knowing what to stock is the point.)
  advisoryBody: [
    "Once POS reconciles cleanly, inventory and shrinkage are visible, and location-level margin is real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do about them?&rdquo; Which locations to expand, which to close, which products to mark down, which to discontinue, when to launch the ecommerce channel, how to think about omnichannel cannibalization &mdash; the decisions that actually move a retail business.",
    "That&rsquo;s where <strong>retail advisory</strong> comes in: a Certified ProAdvisor who knows your unit economics turning them into assortment, pricing, location, and channel decisions. Accurate books come first; then that judgment turns them into decisions. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Ecommerce accounting", body: "For the digital-channel side of omnichannel retail: Shopify, Amazon, and Stripe reconciliation, inventory by SKU and channel, and multi-state nexus monitoring.", href: "/accounting/industries/ecommerce/", cta: "Ecommerce industry &rarr;" },
    { title: "QuickBooks Enterprise", body: "Multi-location and omnichannel retailers need advanced inventory, Class/Location tracking, and FIFO costing &mdash; the platform built for retail at scale.", href: "/quickbooks/enterprise/", cta: "Explore Enterprise &rarr;" },
    { title: "Sales tax compliance", body: "Physical-presence nexus per location plus ship-to economic nexus, with multi-jurisdiction registration and filing handled.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; ecommerce, construction, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "POS reconciliation, inventory/shrinkage, gift-card deferred revenue, multi-location P&amp;L, sales tax &middot; income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment append-only).
  // The baseline body carried exactly these 7 — visible faq__list = FAQPage schema (same array,
  // NO dedup, NO appended FAQ; the 6+ gate is already satisfied verbatim).
  // (H2: Retail accounting questions.)
  faq: [
    { q: "Why is retail accounting harder than regular bookkeeping?", a: "Retail accounting layers multiple complications onto basic bookkeeping. Every sale flows through a point-of-sale system (Square, Clover, Lightspeed, Shopify POS) that produces daily Z-reports with sales, taxes, tips, refunds, gift card activity, and tender breakdowns &mdash; all of which must reconcile to cash deposits, credit card settlements, and the general ledger. Inventory must be tracked with cycle counts and the inevitable shrinkage (theft, damage, mis-counts) recognized as an expense. Markdowns and promotional pricing distort gross margin unless tracked properly. Gift cards and store credit create deferred revenue liabilities until redeemed. Vendor chargebacks, co-op advertising allowances, and seasonal returns create accounting events generic bookkeepers miss. Multi-location retailers need location-level P&amp;L with occupancy and overhead allocation. Omnichannel retailers add ecommerce-style channel reconciliation on top of all of it. Generic bookkeeping handles maybe two of these; retail-specialist accounting handles all of them." },
    { q: "Do you reconcile POS systems (Square, Clover, Lightspeed, Shopify POS) to QuickBooks?", a: "Yes. Daily POS reconciliation is the operational backbone of retail bookkeeping. Each day&rsquo;s Z-report from your POS &mdash; gross sales, sales tax collected, tips, refunds, gift card sales, gift card redemptions, payment tender breakdown (cash, card, gift, store credit) &mdash; is posted to QuickBooks as a daily sales summary. Credit card batches are matched against payment processor deposits net of fees. Cash deposits are matched against bank deposits with any variance flagged for investigation. The result: every dollar of POS activity reconciles to either a deposit, a receivable, or an explainable variance. We integrate with Square, Clover, Lightspeed Retail, Shopify POS, Toast (for retail-hospitality crossover), Vend, and most other major POS systems either through native QuickBooks integrations or through middleware like Bookkeep, Synder, or A2X for retail." },
    { q: "How do you handle inventory and shrinkage?", a: "Retail inventory accounting requires two ongoing processes: perpetual inventory tracking (real-time inventory levels updated as sales happen) and periodic physical counts that reconcile perpetual records to actual on-hand stock. The variance between perpetual and physical &mdash; shrinkage &mdash; must be recognized as an expense under U.S. GAAP, not ignored. Shrinkage typically runs 1-2% of revenue for retailers, sometimes higher in certain categories. We configure inventory tracking in QuickBooks (or QuickBooks Enterprise for multi-location), schedule cycle counts, post shrinkage variances to a dedicated expense account, and report shrinkage as a percentage of sales monthly. Knowing shrinkage rate is the first step to managing it &mdash; retailers can&rsquo;t fix what they can&rsquo;t measure." },
    { q: "How do gift cards and store credit work in retail accounting?", a: "Gift cards and store credit are deferred revenue liabilities, not revenue. When a customer pays $100 for a gift card, you have $100 in cash but you haven&rsquo;t yet delivered any goods or services &mdash; that obligation sits as a liability on the balance sheet. Revenue recognizes only when the gift card is redeemed for merchandise. Unredeemed gift card balances (called &lsquo;breakage&rsquo;) eventually convert to revenue per company policy and state escheatment law &mdash; typically after 2-5 years depending on the state. Generic bookkeeping often treats gift card sales as immediate revenue, which overstates current revenue, understates liabilities, and creates messy reconciliations when gift cards are eventually redeemed. We configure gift card accounting correctly from day one, track outstanding gift card liability, and handle breakage recognition per applicable state rules." },
    { q: "Do you handle multi-location retail accounting?", a: "Yes. Multi-location retail requires location-level P&amp;L (each store&rsquo;s revenue, COGS, occupancy, labor, and contribution margin), inter-location inventory transfers, location-specific sales tax (each physical location creates immediate tax obligation in its state), and consolidated reporting across the chain. Most multi-location retailers eventually need QuickBooks Enterprise with Class tracking or Locations tracking, or a dedicated retail-management system feeding QuickBooks. We configure the chart of accounts and reporting structure so each location&rsquo;s true profitability is visible monthly &mdash; not just total chain revenue. Location-level P&amp;L is the single most useful tool for retail operators making expansion, closure, or remodel decisions." },
    { q: "What about omnichannel retailers selling in-store and online?", a: "Most modern retailers are omnichannel &mdash; physical store(s) plus Shopify, plus Amazon, plus wholesale, plus pop-up events. Each channel has its own reconciliation pattern: in-store via POS, Shopify and Amazon via the multi-channel reconciliation we cover in detail on our <a href=\"/accounting/industries/ecommerce/\">ecommerce accounting page</a>, wholesale via traditional invoicing. The accounting complexity is in making one unified inventory ledger feed all channels accurately, allocating shared costs (warehouse, fulfillment labor, returns processing) across channels, and producing channel-level margin reporting so you can see which channels actually earn their place. Omnichannel retailers typically benefit from QuickBooks Enterprise with channel-level Class tracking plus an inventory management system (Cin7, Lightspeed, Brightpearl) that connects all sales channels to one inventory source of truth." },
    { q: "How does sales tax work for retailers with physical locations?", a: "Retailers with physical store locations have immediate physical-presence nexus in every state where they operate a store &mdash; sales tax is owed on every transaction at that location&rsquo;s rate (state plus county plus city plus special-district where applicable). For omnichannel retailers also shipping online, ship-to nexus rules apply on top of physical-presence nexus. The combination produces complex multi-jurisdiction filing obligations: monthly or quarterly sales tax returns in every state with physical presence, plus additional states crossed via economic nexus thresholds. We handle the operational compliance through our <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance service</a>, often paired with Avalara or TaxJar for high-volume retailers. Coordination with your CPA on income-tax nexus, apportionment, and complex multi-state tax positions remains your CPA&rsquo;s scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/retail/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/retail-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-retail-definition","#acctind-retail-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Retail","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Retail Accounting & Bookkeeping","serviceType":"Retail accounting and QuickBooks bookkeeping","description":"Daily POS reconciliation (Square, Clover, Lightspeed, Shopify POS, Toast), inventory and shrinkage tracking, markdown accounting, gift cards as deferred revenue, multi-location and channel-level P&L, omnichannel reconciliation, and multi-jurisdiction sales tax for U.S. retailers, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. retailers — single-store, multi-location, and omnichannel operations"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Retail accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What retail accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Retail accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
