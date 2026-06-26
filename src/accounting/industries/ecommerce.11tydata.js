/* /accounting/industries/ecommerce/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-ecommerce.txt (34 headings, 5 FAQ) is the ONLY
 * authority for headings + FAQ. This URL is the CORRECT home for the "E-commerce
 * accounting that survives multi-channel reality" set (the same content was wrongly
 * pasted into /accounting/services/virtual-accounting/ — that was the defect; this
 * ecommerce page is built normally from its own contract). Old HTML
 * accounting/industries/ecommerce/index.html read for BODY PROSE only. REFERENCE
 * pattern: src/accounting/industries/construction.njk + .11tydata.js (proven t-mofu
 * cobalt) for structure + the FULL schema set (WebPage, BreadcrumbList, Service,
 * ItemList, FAQPage, QAPage). Content angle reused from the NY analog
 * (src/find-an-accountant/new-york/industries/ecommerce.njk) but NATIONAL scope —
 * NY-specific tax (NY $500k/100-txn threshold, NYC 8.875% destination rate) dropped,
 * generalized to post-Wayfair economic nexus + marketplace-facilitator collection.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact. The final-CTA
 * H2 ("Get e-commerce books you can trust.") is emitted by the t-mofu ctaBand.
 *
 * FAQ: baseline contract carries 5 verbatim Q/A; the gate wants 6+, so ONE genuine
 * e-commerce-accounting FAQ is appended (Q6 "My channel books are already a mess.
 * Where do we start?" — drawn from the real baseline body, clearly real) and FLAGGED
 * in the report. The baseline body also carried a 7th Q/A ("Do you offer advice, or
 * just bookkeeping?") — preserved as section prose in the advisory block (no gutting),
 * not duplicated into the FAQ array. FAQPage + QAPage emitted from the same arrays.
 *
 * T3 no collapse: netted-payout decomposition rendered as vs-scroll + vs-table (no
 * new heading — embedded in the definition section to keep heading inventory exact).
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc.; bookkeeping/ProAdvisor scope — does NOT file income
 * taxes, coordinates with the client's CPA/EA. No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "E-commerce accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "E-commerce books break in ways ordinary bookkeeping doesn&rsquo;t. A single platform payout bundles <strong>gross sales, processor fees, refunds, and collected sales tax</strong> into one deposit, while <a href=\"/accounting/bookkeeping/\">accurate books</a> need each split apart. Add <strong>inventory and cost of goods sold</strong> by SKU and channel, <strong>landed cost</strong>, returns and chargebacks, multi-channel <strong>revenue recognition</strong>, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax nexus</a> across many states, and most generic bookkeepers &mdash; and most automation &mdash; get it wrong.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who reconcile every channel and processor to your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, track inventory and margin correctly, monitor multi-state sales-tax exposure (post-<em>Wayfair</em> economic nexus and marketplace-facilitator collection), and turn it into financials you can price and grow from. We deliver the books and keep the by-state data your CPA needs; your CPA or EA confirms nexus and files income taxes. For sellers ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> adds the judgment layer on top. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // PAYOUT-DECOMPOSITION TABLE — vs-scroll + vs-table (T3 no collapse). NO heading; embedded
  // in the definition section so the frozen heading inventory stays exact. Shows what a single
  // netted platform payout actually contains, and where each piece must land in QuickBooks.
  payoutRows: [
    { line: "Gross product sales", net: "Buried inside the deposit", clean: "Booked as revenue, gross" },
    { line: "Platform &amp; processor fees", net: "Silently subtracted", clean: "Booked as an expense, visible on the P&amp;L" },
    { line: "Refunds &amp; chargebacks", net: "Netted against sales", clean: "Booked as contra-revenue, tracked separately" },
    { line: "Collected sales tax", net: "Mixed into the payout", clean: "Booked as a liability, not income" },
    { line: "Marketplace-facilitator tax", net: "Already remitted by the platform", clean: "Recorded so it is not double-counted or double-filed" },
    { line: "Reserves &amp; holdbacks", net: "Deposit looks short", clean: "Tracked as a receivable until released" },
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: E-commerce accounting, in five questions.)
  aiSummary: [
    { q: "Why is e-commerce bookkeeping harder?", a: "One platform payout bundles <strong>gross sales, processor fees, refunds, and collected sales tax</strong> into a single deposit. Accurate books require splitting each apart &mdash; plus inventory, COGS, returns, chargebacks, and multi-state sales tax." },
    { q: "Do you reconcile Shopify, Amazon, and Stripe to QuickBooks?", a: "Yes. Each channel and processor is reconciled to your QuickBooks file, separating gross revenue, fees, refunds, and tax &mdash; not netted into one lump number." },
    { q: "Can you track inventory and COGS?", a: "Yes. We set up and maintain <strong>inventory and cost of goods sold</strong> in QuickBooks &mdash; by SKU and channel, including <strong>landed cost</strong> &mdash; so gross margin reflects reality." },
    { q: "Do you handle multi-state sales tax for online sellers?", a: "We monitor <strong>economic nexus</strong> across states (post-<em>Wayfair</em>), account for marketplace-facilitator collection, and provide <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a>. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by order volume, number of channels, inventory complexity, and sales-tax footprint. No hourly billing." },
  ],

  // CHALLENGES — three places sellers lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places sellers lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Revenue is wrong", title: "Netted payouts hide your real sales.", body: "Shopify Payments, Amazon, and Stripe deposit <em>net</em> of fees, refunds, and reserves. Booked as one number, revenue is understated and thousands in fees vanish from your P&amp;L. The fix is channel-level reconciliation that separates gross revenue, fees, refunds, and tax &mdash; every payout, every month. If you&rsquo;ve never split a payout apart, your margins are currently fiction. It&rsquo;s fixable." },
    { signal: "Margin is invisible", title: "No inventory or COGS tracking.", body: "Without real inventory and cost-of-goods tracking, gross margin is a guess. You can&rsquo;t price confidently, time restocks, or know which SKUs actually make money. The fix is inventory and COGS maintained in QuickBooks &mdash; by SKU and channel, including landed cost &mdash; so margin is real and decision-ready. Inventory-heavy sellers often need accrual basis to see the truth; we&rsquo;ll tell you if cash basis is hiding it." },
    { signal: "Tax exposure is silent", title: "Multi-state nexus you can&rsquo;t see.", body: "Economic nexus is triggered by sales volume in states you&rsquo;ve never visited, and FBA inventory can create physical nexus on its own. Most sellers discover obligations late &mdash; with penalties and back-tax attached. The fix is ongoing <a href=\"/accounting/sales-tax-compliance/\">nexus monitoring and sales-tax compliance</a> so obligations are met on time, not found in an audit. We monitor and file sales tax; income-tax filing stays with your CPA or EA." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: E-commerce accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Reconciliation", title: "Channel &amp; processor reconciliation", body: "Shopify, Amazon, Stripe, and PayPal reconciled to QuickBooks &mdash; gross revenue, fees, refunds, and tax separated correctly every month, not netted into one deposit.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Margin", title: "Inventory &amp; COGS tracking", body: "COGS and inventory maintained in QuickBooks by SKU and channel so gross margin is accurate and decision-ready, including landed cost where relevant.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Tax", title: "Sales-tax nexus monitoring", body: "State-by-state economic-nexus exposure tracked, with marketplace-facilitator collection accounted for and compliance filing so obligations are met &mdash; not discovered in an audit.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "04 &middot; Cleanup", title: "Channel-mess cleanup", body: "Untangle netted payouts, rebuild inventory and COGS, and reconcile each channel to a known-good baseline before monthly bookkeeping begins.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "05 &middot; Setup", title: "QuickBooks setup &amp; integrations", body: "An e-commerce chart of accounts and correct QuickBooks setup, with the right connector apps wiring your platforms into the file cleanly.", href: "/quickbooks/setup/", cta: "QuickBooks setup &rarr;" },
    { num: "06 &middot; Advisory", title: "Growth advisory", body: "As you scale, fractional CFO advisory on cash flow, pricing, and inventory financing &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — selling/processor platforms reconciled with QuickBooks (checks-list).
  // (H2: Connected to where you sell.)
  integrations: [
    "Shopify &mdash; payouts decomposed into revenue, fees, refunds, and tax",
    "Amazon Seller / FBA &mdash; settlement reports reconciled, FBA nexus flagged",
    "Stripe &mdash; gross charges, fees, and refunds split correctly",
    "PayPal &mdash; mixed payouts separated from sales channels",
    "WooCommerce &mdash; order and payout data tied to the QuickBooks file",
    "eBay &amp; Etsy &mdash; marketplace payouts and facilitator tax reconciled",
    "Walmart Marketplace &mdash; settlements mapped to revenue and fees",
    "A2X / connector apps &mdash; clean summaries posted to QuickBooks",
  ],
  integrationsNote: "Selling somewhere else? If it pays out to a bank account, we can reconcile it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From messy payouts to clean margins. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your channels, processors, order volume, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to untangle netted payouts and inventory, plus correct QuickBooks setup for e-commerce." },
    { num: "Phase 3", name: "Monthly reconciliation", body: "Every channel and processor reconciled monthly, with COGS and multi-state sales-tax exposure maintained." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with channel-level margin and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and growth advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the
  // baseline "Do you offer advice, or just bookkeeping?" Q/A substance (no gutting).
  // (H2: Clean books are the start. Decisions are the point.)
  advisoryBody: [
    "Once your channels reconcile and your margins are real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do about them?&rdquo; Which SKUs to scale, when inventory financing makes sense, how pricing holds up against rising ad costs and platform fees &mdash; the decisions that actually move an e-commerce business.",
    "That&rsquo;s where <strong>e-commerce advisory</strong> comes in: a Certified ProAdvisor who knows your numbers turning them into cash-flow, pricing, and growth decisions. Accurate books come first; then that judgment turns them into decisions. As automation commoditizes basic bookkeeping, this advisory layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "Untangle netted payouts and rebuild accurate inventory and margins, then reconcile to a CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Sales tax compliance", body: "Multi-state economic-nexus monitoring and filing for online sellers, with marketplace-facilitator collection accounted for.", href: "/accounting/sales-tax-compliance/", cta: "Explore sales tax &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean e-commerce books into pricing, cash-flow, and growth decisions as you scale.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Multi-channel reconciliation, inventory/COGS, sales-tax nexus &middot; income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 5 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment append-only)
  // + 1 appended genuine e-commerce FAQ (Q6, drawn from the real baseline body — FLAGGED).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: E-commerce accounting questions.)
  faq: [
    { q: "Why is e-commerce bookkeeping harder than regular bookkeeping?", a: "E-commerce mixes multiple sales channels, payment processors that net out fees before deposit, inventory and <a href=\"/glossary/cost-of-goods-sold/\">cost of goods sold</a>, returns and chargebacks, and sales-tax obligations across many states. A single Shopify or Amazon deposit can bundle gross sales, fees, refunds, and taxes that must be split apart to keep books accurate." },
    { q: "Do you reconcile Shopify, Amazon, and Stripe to QuickBooks?", a: "Yes. TechBrot reconciles each sales channel and payment processor to your QuickBooks file, separating gross revenue, platform fees, refunds, and sales tax so your income and margins are accurate rather than netted into a single lump deposit." },
    { q: "Can you track inventory and cost of goods sold?", a: "Yes. We set up and maintain <a href=\"/quickbooks/online/features/inventory/\">inventory</a> and COGS tracking in QuickBooks so gross margin reflects reality, including landed cost where relevant. This is essential for pricing decisions and accurate profit reporting." },
    { q: "Do you handle multi-state sales tax for online sellers?", a: "We monitor economic nexus across states, advise on where you have filing obligations, and provide <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a> through our dedicated service. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "What does e-commerce bookkeeping cost?", a: "Pricing depends on order volume, number of sales channels, inventory complexity, and sales-tax footprint. Most e-commerce engagements fall in the monthly bookkeeping range with complexity adjustments, quoted as a fixed monthly fee against a written scope with no hourly billing." },
    { q: "My channel books are already a mess. Where do we start?", a: "With a cleanup. We untangle netted payouts, rebuild inventory and COGS, and reconcile each channel to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with ongoing sales-tax monitoring. Most sellers come to us mid-mess; it&rsquo;s the normal starting point &mdash; call the ProAdvisor team at <a href=\"tel:+18777515575\">(877) 751-5575</a> to map the cleanup." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/ecommerce/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/ecommerce-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-ecommerce-definition","#acctind-ecommerce-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"E-commerce","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"E-commerce Accounting & Bookkeeping","serviceType":"E-commerce accounting and QuickBooks bookkeeping","description":"Multi-channel revenue reconciliation, inventory and COGS tracking, sales-tax nexus monitoring, and platform integration (Shopify, Amazon, Stripe, PayPal) for U.S. e-commerce sellers, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. e-commerce sellers on Shopify, Amazon, and Stripe"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"E-commerce accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What e-commerce accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"E-commerce accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
