/* /find-an-accountant/new-york/industries/ecommerce/ — t-location INDUSTRY child
 * (deeper than a city child — 30 contract headings). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-ecommerce.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/ecommerce/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * industries/construction.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema @graph
 * (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. New York
 * e-commerce facts (post-Wayfair economic nexus; NY's $500,000 AND 100-transaction "and"
 * test; marketplace-facilitator collection by Amazon/Etsy/eBay/Walmart; FBA inventory as
 * physical nexus; destination-based NY/NYC 8.875% rate; prewritten-software taxability)
 * reflect NY DTF guidance and the 2018 South Dakota v. Wayfair decision, web-verified.
 * No founder/personal name in visible content (firm-level review byline only; David
 * Westgate appears ONLY in the reviewedBy schema @id). Independent firm — does NOT file
 * NY/NYC taxes; coordinates with the client's CPA, who confirms nexus and files. Footer
 * chrome (Accounting/QuickBooks/Company/Network) and the newsletter ("The monthly brief.")
 * are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "<strong>E-commerce accounting</strong> in New York is defined by three problems most generalist bookkeepers miss. First, <strong>multi-state sales-tax nexus</strong>: since the 2018 <em>South Dakota v. Wayfair</em> Supreme Court ruling, selling enough into a state creates a tax obligation with <strong>no physical presence</strong> &mdash; and storing inventory in an Amazon FBA warehouse creates nexus on its own. Second, <strong>inventory and COGS</strong>: gross margin is meaningless until cost of goods sold is tracked correctly across SKUs and channels. Third, <strong>marketplace reconciliation</strong>: the deposit Amazon or Shopify sends is net of fees, refunds, and reserves &mdash; it is not your revenue.",
    "A named Certified ProAdvisor builds your <a href=\"/quickbooks/online/\">QuickBooks</a> file to handle all three, runs <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly close</a> with channel-level profit, and tracks the by-state data your CPA needs for <a href=\"/find-an-accountant/new-york/sales-tax-help/\">sales-tax</a> compliance &mdash; including New York&rsquo;s own <strong>destination-based</strong> rate, which runs to <strong>8.875%</strong> in New York City. Fixed-fee at <a href=\"/find-an-accountant/new-york/pricing/\">$400&ndash;$2,500+/mo</a>. We do the books; your CPA confirms nexus and files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York e-commerce accounting, in five questions.)
  aiSummary: [
    { q: "What&rsquo;s different about accounting for an e-commerce business?", a: "<strong>Three things generalists miss: multi-state sales-tax nexus, inventory/COGS, and marketplace reconciliation.</strong> The deposit a marketplace sends is net of fees and refunds &mdash; not revenue &mdash; and selling into many states creates tax obligations in each. E-commerce accounting tracks all of it by channel and SKU." },
    { q: "When do I have to collect sales tax in another state?", a: "<strong>When you cross that state&rsquo;s economic-nexus threshold</strong> &mdash; a rule from the 2018 <em>Wayfair</em> decision. New York&rsquo;s is <strong>$500,000 in sales AND more than 100 transactions</strong> in the preceding four quarters; most states use &ldquo;or.&rdquo; Storing inventory in a state (e.g. Amazon FBA) also creates nexus on its own." },
    { q: "Doesn&rsquo;t Amazon collect the sales tax for me?", a: "<strong>On marketplace sales, yes &mdash; but those sales still count toward your nexus threshold.</strong> Under marketplace-facilitator laws, Amazon, Etsy, eBay, and Walmart collect and remit. Direct sales through your own Shopify or website remain your responsibility once you&rsquo;ve crossed the line." },
    { q: "How does NY sales tax work on the sales I do collect?", a: "New York is <strong>destination-based</strong> &mdash; the rate follows where the order ships, and in New York City that combined rate is <strong>8.875%</strong>. We configure QuickBooks so taxable sales, returns, and chargebacks reconcile, and your CPA confirms taxability for your catalog and files." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong>, fixed-fee against a written scope, set by order volume, the number of sales channels you reconcile, and inventory complexity. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
  ],

  // CHALLENGES — three places online sellers lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places New York online sellers lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Tax exposure is accruing", title: "No handle on multi-state nexus.", body: "Since the 2018 <em>Wayfair</em> decision, selling enough into a state creates a sales-tax obligation with no physical presence &mdash; and inventory sitting in an Amazon FBA warehouse creates nexus on its own. Most sellers cross thresholds in several states without noticing, and the back-tax bill compounds quietly until a notice arrives. The fix is revenue and transactions tracked <strong>by state</strong> in QuickBooks, so you can see where you&rsquo;re nearing or past a threshold and register before exposure builds. Sell into 20+ states and never run a nexus review, and the exposure is already there &mdash; the only question is how large." },
    { signal: "Margin is a guess", title: "Inventory &amp; COGS aren&rsquo;t tracked.", body: "Without proper cost of goods sold, your profit-and-loss is fiction. Revenue looks healthy, but you don&rsquo;t know true gross margin by product or channel &mdash; so you scale the SKUs that are quietly losing money after fees and starve the ones that aren&rsquo;t. The fix is inventory and COGS tracked correctly &mdash; <strong>landed cost per unit</strong>, accurate as you sell, with margin visible by product and sales channel. If your &ldquo;profit&rdquo; doesn&rsquo;t account for what each unit cost to acquire and land, you&rsquo;re flying blind on the only number that matters." },
    { signal: "Revenue is overstated", title: "Marketplace payouts booked as revenue.", body: "The deposit a marketplace sends is net of selling fees, refunds, chargebacks, advertising, and reserves &mdash; it is not your revenue. Book the deposit as sales and your gross revenue is understated, your fees are invisible, and your <strong>sales-tax base is wrong</strong>. The fix is each channel&rsquo;s payout broken into its parts &mdash; gross sales, fees, refunds, reserves &mdash; and mapped into QuickBooks so revenue and expenses are both real. If your books record the Amazon deposit as one number, your financials don&rsquo;t reflect what your business actually did." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: New York e-commerce accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Multi-channel reconciliation", title: "Shopify, Amazon &amp; Stripe payouts", body: "Each channel&rsquo;s payouts broken into gross sales, fees, refunds, and reserves &mdash; often via a connector like A2X &mdash; then mapped into QuickBooks so revenue and margin are real, not a net deposit.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Inventory &amp; COGS", title: "Inventory &amp; cost of goods sold", body: "Landed cost per unit and COGS tracked accurately as you sell, so gross margin by product and channel is something you can trust &mdash; kept consistent across FBA and multiple warehouses.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "03 &middot; Sales-tax nexus data", title: "By-state nexus tracking", body: "Revenue and transactions tracked by state &mdash; including marketplace sales that still count toward your threshold &mdash; so you see where you&rsquo;re nearing or past economic nexus before a notice does.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "04 &middot; Channel profitability", title: "Profit by channel &amp; SKU", body: "Classes and tags configured so you can pull profit by sales channel and product line &mdash; the multi-channel revenue recognition that turns a blended P&amp;L into decisions about what to scale.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "05 &middot; NYC &amp; NY sales tax", title: "Home-state filing support", body: "Destination-based New York sales tax &mdash; including New York City&rsquo;s 8.875% rate &mdash; with returns and chargebacks handled, tracked so your home-state return reconciles to the books.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "06 &middot; Cleanup &amp; catch-up", title: "Back-books &amp; migration", body: "Behind, or moving off a spreadsheet or another platform? We rebuild the books CPA-ready &mdash; fixing payouts booked as net revenue and reconstructing inventory and COGS &mdash; then keep them clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
  ],

  // INTEGRATIONS — e-commerce tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you sell.)
  integrations: [
    "Shopify &mdash; payouts split into sales, fees, and refunds",
    "Amazon Seller Central &mdash; FBA and FBM settlement reconciliation",
    "Stripe &mdash; gross charges, fees, and refunds mapped cleanly",
    "PayPal &mdash; mixed checkout and marketplace deposits untangled",
    "A2X &mdash; marketplace-to-QuickBooks settlement connector",
    "WooCommerce &mdash; store orders reconciled to deposits",
    "eBay &mdash; managed-payments settlements booked correctly",
    "Walmart Marketplace &mdash; facilitator-collected sales tracked to nexus",
  ],
  integrationsNote: "Selling on a channel that isn&rsquo;t listed? If it exports to QuickBooks &mdash; directly or through a connector like A2X &mdash; we can build the workflow around it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: From net deposits to channel-level profit. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your sales channels, inventory model, which states you ship into, and where the books stop reflecting reality. No pitch." },
    { phase: "Phase 2", title: "Channel setup &amp; cleanup", body: "Configure channel reconciliation, inventory and COGS, and by-state tracking, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to fix prior payouts booked as net revenue." },
    { phase: "Phase 3", title: "Monthly close &amp; reporting", body: "Monthly reconciliation with channel- and SKU-level profitability, accurate COGS, and by-state revenue tracking so nexus is visible as it approaches." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Margin and channel reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">inventory cash-flow and growth advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Accurate margins are the start. Knowing what to scale is the point.)
  advisoryBody: [
    "Once channel profit is real, COGS is accurate, and your nexus exposure is mapped, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do we scale, and what do we cut?&rdquo; Which products carry margin after fees and ad spend, which channels are worth the tax complexity they create, how much cash is trapped in inventory, when to expand into a new state versus when it just adds compliance burden &mdash; the decisions that separate stores that grow profitably from ones that grow themselves broke.",
    "That&rsquo;s where e-commerce advisory comes in: a Certified ProAdvisor who knows your channel and SKU data turning it into inventory-purchasing strategy, cash-flow forecasting, and margin-led growth decisions. As automation handles routine data entry, this judgment layer is where online sellers find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "NY sales tax help", body: "Economic nexus, marketplace-facilitator rules, and by-state tracking for multi-state sellers &mdash; with New York&rsquo;s destination-based rate applied correctly.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Monthly bookkeeping", body: "Channel reconciliation and SKU-level profit kept current every month, with accurate COGS and by-state revenue tracking.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Explore monthly &rarr;" },
    { title: "Bookkeeping cleanup", body: "Fix prior payouts booked as net revenue and rebuild inventory and COGS, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your industry runs in New York &mdash; construction, legal/IOLTA, real estate, restaurant, healthcare, nonprofit.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Multi-channel reconciliation, inventory &amp; COGS, by-state nexus tracking, NY/NYC sales tax &middot; nexus &amp; income-tax filing confirmed by your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York e-commerce accounting questions.)
  faq: [
    { q: "What makes accounting for an e-commerce business different?", a: "Three things a generalist bookkeeper usually misses. First, multi-state sales-tax nexus &mdash; selling across state lines creates tax obligations in states you&rsquo;ve never set foot in. Second, inventory and cost of goods sold &mdash; your margin is fiction until COGS is tracked correctly per unit and channel. Third, marketplace reconciliation &mdash; the deposit Amazon or Shopify sends is net of fees, refunds, and reserves, so booking it as revenue makes your financials wrong. E-commerce accounting handles all three and reports profit by channel, not just a blended total." },
    { q: "When do I have to collect sales tax in states outside New York?", a: "When you cross a state&rsquo;s economic-nexus threshold &mdash; a standard created by the 2018 South Dakota v. Wayfair Supreme Court decision, which let states require sales-tax collection based on sales volume alone, with no physical presence. Each state sets its own threshold; many use $100,000 in sales or 200 transactions. New York is stricter and unusual: it requires both $500,000 in gross receipts and more than 100 transactions in the preceding four sales-tax quarters &mdash; one of only two states (with Connecticut) using an &ldquo;and&rdquo; test rather than &ldquo;or.&rdquo; Storing inventory in a state, such as in an Amazon FBA warehouse, also creates nexus on its own. We track the data; your CPA confirms your nexus position and files." },
    { q: "Doesn&rsquo;t Amazon or Shopify collect sales tax for me?", a: "For sales through a marketplace, largely yes &mdash; under marketplace-facilitator laws, platforms like Amazon, Etsy, eBay, and Walmart collect and remit sales tax on the sales they facilitate, so you don&rsquo;t collect on those transactions yourself. But two traps remain. First, those marketplace sales still count toward your own nexus threshold &mdash; $400,000 through Amazon plus $150,000 through your own Shopify store into New York still crosses the $500,000 mark. Second, direct-to-consumer sales through your own website or store are your responsibility once you&rsquo;ve crossed the threshold. We track both so nothing falls through the gap." },
    { q: "How do you handle inventory and cost of goods sold?", a: "We track landed cost per unit &mdash; what each item actually costs to acquire and bring to your warehouse, including freight and duties &mdash; and record cost of goods sold accurately as you sell, so gross margin reflects reality. Done right, you can see profitability by product and by channel, which is what tells you which SKUs to scale and which are quietly losing money after fees. For sellers on Amazon FBA or with multiple warehouses, we also keep the inventory picture consistent across locations." },
    { q: "Can you reconcile Shopify, Amazon, and Stripe into QuickBooks?", a: "Yes &mdash; it&rsquo;s the heart of e-commerce bookkeeping. Each channel pays out a net figure that bundles gross sales, selling fees, refunds, chargebacks, advertising, and reserves. We break each payout into its components &mdash; often using a connector like A2X for Amazon and Shopify &mdash; and map them into QuickBooks so your books show true gross revenue, real fees, and accurate margin rather than a single net deposit. That&rsquo;s also what makes your sales-tax base correct." },
    { q: "Are digital products and software taxable in New York?", a: "In New York, prewritten (off-the-shelf) software and downloaded software or video games are generally taxable, and those sales count toward your economic-nexus threshold. Most other electronically delivered content &mdash; e-books, music, streamed video &mdash; is generally not taxable in New York. Because the lines are specific and vary by what exactly you sell, we set QuickBooks to tax what&rsquo;s taxable and flag the rest, and your CPA confirms taxability for your particular catalog before filing." },
    { q: "How much does e-commerce bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York e-commerce business runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by order volume, the number of sales channels you reconcile, and inventory complexity &mdash; a single-channel store with light inventory is at the lower end; a multi-channel seller with FBA, large catalogs, and multi-state tracking is higher. We quote a firm number after reviewing your file." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file and sales channels remotely, map your inventory model and the states you ship into, determine whether you need a cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We do the books; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/ecommerce/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York e-commerce accounting","description":"E-commerce accounting for New York Shopify, Amazon & multi-channel sellers — multi-state sales-tax nexus, inventory & COGS, marketplace reconciliation, set up in your own QuickBooks file by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-industries-ecommerce.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-ecommerce-summary","#ny-ind-ecommerce-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"E-commerce"}]},
        {"@type":"Service","@id":url+"#service","name":"New York E-commerce Accounting Service","serviceType":"E-commerce and online-retail bookkeeping","description":"Bookkeeping and QuickBooks accounting for New York e-commerce sellers — multi-channel reconciliation, inventory and COGS, and multi-state sales-tax nexus tracking — delivered by a Certified QuickBooks ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns and does not determine tax nexus — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York e-commerce sellers — Shopify, Amazon FBA, multi-channel, and DTC brands"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
