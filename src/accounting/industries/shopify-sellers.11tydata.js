/* /accounting/industries/shopify-sellers/ — NEW high-fee vertical built on the proven
 * t-mofu ecommerce pattern (src/accounting/industries/ecommerce.njk + .11tydata.js).
 * DISTINCT ANGLE from the general /accounting/industries/ecommerce/ hub (linked, not
 * restated) and from the /accounting/industries/amazon-sellers/ sibling (linked): this
 * page is Shopify-SPECIFIC — Shopify Payments payout reconciliation (gross order value
 * vs net payout: processing fees, refunds, chargebacks, reserves, gift-card liability),
 * multi-channel (Shopify + POS + Shop Pay + PayPal), app-stack and inventory/COGS, and
 * the Shopify sales-tax nuance: a seller's OWN Shopify store is NOT a marketplace
 * facilitator, so the seller is generally responsible for remitting its own sales tax.
 * Shopify Tax helps CALCULATE; nexus, registration, and filing are determined with the
 * client's CPA or state authority. Shopify admin → QuickBooks via summarized journal
 * entries.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Section id prefix shop-. The 5 quick-answer questions render as NON-heading
 * ai-summary__question. The final-CTA H2 ("Get Shopify books that match the bank.") is
 * emitted by the t-mofu ctaBand. speakable → #shop-ai-summary.
 *
 * HONESTY (R4/R5/R9): no fabricated stats/clients/reviews; no AggregateRating/Review
 * schema; firm-level authorship (no founder name in visible content); David Westgate in
 * reviewedBy schema @id only; independent firm — NOT affiliated with Intuit Inc. OR
 * Shopify Inc. Bookkeeping/ProAdvisor scope — does NOT file the client's sales or income
 * taxes; nexus/registration/filing deferred to the client's CPA or state authority.
 * Canonical pricing ONLY (reference /pricing/) — no invented Shopify-specific prices.
 * Representative scenarios labeled. No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Shopify accounting, plainly." (Shopify-specific payout reality)
  definition: [
    "Shopify accounting goes wrong at one specific seam: the gross sales in your Shopify admin almost never equal the <strong>Shopify Payments payout</strong> that lands in your bank. Each payout is netted &mdash; processing fees, refunds, and chargebacks are subtracted, and Shopify can hold a reserve &mdash; so the deposit is smaller, irregular, and bundles several things at once. On top of that, <strong>collected sales tax</strong> and <strong>unredeemed gift cards</strong> are liabilities, not income, even though they move through the same gross order value. Booked as a single deposit, revenue is understated, fees disappear, and your liabilities are wrong.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who reconcile <strong>gross order value to each net payout</strong>, posting summarized journal entries from your Shopify admin into your own <a href=\"/quickbooks/online/\">QuickBooks</a> file &mdash; revenue gross, fees as expense, refunds and chargebacks as contra-revenue, sales tax and gift cards as liabilities, reserves as receivables. We fold in <strong>Shopify POS, Shop Pay, and third-party processors like PayPal</strong>, maintain inventory and COGS by SKU, and keep clean by-state sales-tax records. This is the Shopify-specific layer on top of our general <a href=\"/accounting/industries/ecommerce/\">e-commerce accounting</a>; for sellers on the other big channel, see <a href=\"/accounting/industries/amazon-sellers/\">Amazon seller accounting</a>. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc. or Shopify Inc.",
  ],

  // PAYOUT-DECOMPOSITION TABLE — vs-scroll + vs-table (T3 no collapse). NO heading; embedded
  // in the definition section. Shows what a single Shopify Payments payout actually contains.
  payoutRows: [
    { line: "Gross order value", net: "Never matches the deposit", clean: "Booked as revenue, gross" },
    { line: "Shopify Payments processing fees", net: "Silently subtracted from the payout", clean: "Booked as an expense, visible on the P&amp;L" },
    { line: "Refunds &amp; chargebacks", net: "Netted against sales", clean: "Booked as contra-revenue, tracked separately" },
    { line: "Collected sales tax", net: "Mixed into gross order value", clean: "Booked as a liability you generally remit, not income" },
    { line: "Gift cards sold vs redeemed", net: "Treated like a normal sale", clean: "Booked as a liability until the card is redeemed" },
    { line: "Shopify reserves &amp; holdbacks", net: "Deposit looks short", clean: "Tracked as a receivable until released" },
  ],

  // AI SUMMARY — five-question block. NON-heading questions.
  // (H2: Shopify accounting, in five questions.)
  aiSummary: [
    { q: "Why doesn&rsquo;t my Shopify payout match my sales?", a: "Because a <strong>Shopify Payments payout is netted</strong> &mdash; processing fees, refunds, chargebacks, and held reserves are subtracted before the deposit. Accurate books reconcile <strong>gross order value to the net payout</strong>, booking each piece where it belongs instead of recording one lump deposit." },
    { q: "How does Shopify data get into QuickBooks?", a: "We post <strong>summarized journal entries</strong> from your Shopify admin into your own QuickBooks file &mdash; revenue gross, fees as expense, refunds and chargebacks as contra-revenue, sales tax and gift cards as liabilities &mdash; and reconcile each entry to the matching bank deposit." },
    { q: "Do you handle Shopify POS, Shop Pay, and PayPal too?", a: "Yes. <strong>Shopify POS, Shop Pay, and third-party processors like PayPal</strong> each settle differently. We reconcile every channel and processor so your total revenue and fees are correct, not double-counted across them." },
    { q: "Who is responsible for Shopify sales tax?", a: "On your <strong>own Shopify store you are generally the responsible party</strong> &mdash; unlike a marketplace facilitator, Shopify does not remit your sales tax for you. <a href=\"/accounting/sales-tax-compliance/\">Shopify Tax</a> helps calculate it; we keep the by-state records and reconcile what was collected. Your CPA or state authority determines nexus, registration, and filing." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by order volume, number of channels and processors, inventory complexity, and sales-tax footprint. See <a href=\"/pricing/\">pricing</a>. No hourly billing." },
  ],

  // CHALLENGES — three places Shopify books drift (grid-3 buyer-cards). 3 H3s.
  challenges: [
    { signal: "The deposit doesn&rsquo;t match", title: "Net payouts hide your real revenue.", body: "Shopify Payments deposits <em>net</em> of fees, refunds, and reserves, so a single payout never equals your gross order value. Booked as one number, revenue is understated and processing fees vanish from your P&amp;L. The fix is <strong>payout-level reconciliation</strong> that ties gross order value to each net deposit, separating revenue, fees, refunds, and tax &mdash; every payout, every month. If you&rsquo;ve never reconciled a payout, your margins are currently fiction. It&rsquo;s fixable." },
    { signal: "Liabilities look like income", title: "Sales tax and gift cards booked wrong.", body: "Collected sales tax and gift-card sales flow through gross order value, but neither is revenue &mdash; tax is money you generally remit, and a gift card is a liability until it&rsquo;s redeemed. Booked as income, your revenue is inflated and your obligations are invisible. The fix is booking both as <strong>liabilities</strong>, with clean by-state sales-tax records and gift-card balances tracked to redemption. We keep the records; your CPA or state authority makes the nexus and filing call." },
    { signal: "Channels don&rsquo;t add up", title: "POS, Shop Pay, and PayPal double-counted.", body: "Once you add <strong>Shopify POS</strong>, <strong>Shop Pay</strong>, or <strong>PayPal</strong>, the same order can appear to settle twice, or a channel&rsquo;s fees can go unbooked entirely. Totals stop tying out. The fix is reconciling every channel and processor to a single source of truth in QuickBooks, so revenue is counted once and every fee lands on the P&amp;L &mdash; the foundation for accurate <a href=\"/accounting/bookkeeping/\">monthly bookkeeping</a>." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 H3s.
  handle: [
    { num: "01 &middot; Reconciliation", title: "Shopify Payments payout reconciliation", body: "Gross order value tied to each net Shopify Payments payout &mdash; processing fees, refunds, chargebacks, and reserves separated correctly, every deposit, never netted into one number.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Liabilities", title: "Sales-tax &amp; gift-card liability", body: "Collected sales tax and unredeemed gift cards booked as liabilities &mdash; not income &mdash; with clean by-state records and gift-card balances tracked to redemption.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "03 &middot; Channels", title: "Multi-channel &amp; processor reconciliation", body: "Shopify POS, Shop Pay, and third-party processors like PayPal reconciled alongside Shopify Payments, so revenue is counted once and every fee hits the P&amp;L.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Margin", title: "Inventory &amp; COGS tracking", body: "COGS and inventory maintained in QuickBooks by SKU and channel, including landed cost where relevant, so gross margin on your Shopify catalog is accurate and decision-ready.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "05 &middot; Setup", title: "QuickBooks setup &amp; the app stack", body: "A Shopify-ready chart of accounts and correct QuickBooks setup, with the right connector apps posting clean summarized journal entries from your Shopify admin into the file.", href: "/quickbooks/setup/", cta: "QuickBooks setup &rarr;" },
    { num: "06 &middot; Cleanup", title: "Shopify books cleanup", body: "Untangle netted payouts, correct sales tax and gift cards booked as income, and reconcile each channel to a known-good baseline before monthly bookkeeping begins.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
  ],

  // INTEGRATIONS — Shopify channels & processors reconciled with QuickBooks (checks-list).
  // (H2: Connected to every way Shopify pays out.)
  integrations: [
    "Shopify Payments &mdash; payouts reconciled gross order value to net deposit",
    "Shop Pay &mdash; accelerated-checkout orders tied back to the right payout",
    "Shopify POS &mdash; in-person sales reconciled alongside online orders",
    "PayPal &mdash; mixed payouts separated from Shopify Payments deposits",
    "Other gateways (e.g. Stripe-backed) &mdash; fees and refunds split correctly",
    "Shopify Tax &mdash; collected tax reconciled and kept as by-state records",
    "Gift cards &mdash; sold vs redeemed tracked as a liability to redemption",
    "Connector apps (e.g. A2X) &mdash; summarized journal entries posted to QuickBooks",
  ],
  integrationsNote: "Run more than one store, or sell on another channel alongside Shopify? If it pays out to a bank account, we can reconcile it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 H3s.
  // (H2: From netted payouts to matched deposits.)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your Shopify setup &mdash; channels, processors, order volume, gift cards, and where the books drift from the deposits. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to untangle netted payouts and correct mis-booked tax and gift cards, plus the right QuickBooks setup and connector apps for Shopify." },
    { num: "Phase 3", name: "Monthly reconciliation", body: "Every Shopify Payments payout reconciled gross-to-net, all channels and processors tied out, with COGS and by-state sales-tax records maintained." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with channel-level margin and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and growth advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Clean books are the start. Decisions are the point.)
  advisoryBody: [
    "Once every Shopify payout reconciles and your margins are real, the question changes from &ldquo;do the books match the bank?&rdquo; to &ldquo;what do we do about them?&rdquo; Which products to scale, when a discount or free-shipping threshold actually pays for itself, how margin holds up against rising ad costs and processing fees &mdash; the decisions that move a Shopify business.",
    "That&rsquo;s where <strong>advisory</strong> comes in: a Certified ProAdvisor who knows your numbers turning them into cash-flow, pricing, and growth decisions. Accurate books come first; then that judgment turns them into decisions. As automation commoditizes basic bookkeeping, this advisory layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 H3s.
  // (H2: Related services & industries.)
  related: [
    { title: "E-commerce accounting", body: "The general multi-channel hub behind this page &mdash; payout decomposition, inventory and COGS, and multi-state sales-tax exposure across every platform.", href: "/accounting/industries/ecommerce/", cta: "E-commerce accounting &rarr;" },
    { title: "Amazon seller accounting", body: "Selling on Amazon as well? Settlement-report reconciliation, FBA nexus, and marketplace-facilitator collection &mdash; the sibling vertical to this Shopify page.", href: "/accounting/industries/amazon-sellers/", cta: "Amazon seller accounting &rarr;" },
    { title: "Monthly bookkeeping", body: "Once payouts reconcile, ongoing monthly bookkeeping in your own QuickBooks file keeps revenue, fees, and liabilities accurate every period.", href: "/accounting/bookkeeping/", cta: "Explore bookkeeping &rarr;" },
    { title: "Pricing", body: "Fixed monthly fees against a written scope, driven by order volume, channels, inventory, and sales-tax footprint &mdash; no hourly billing.", href: "/pricing/", cta: "See pricing &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Shopify payout reconciliation, multi-channel &amp; processor, inventory/COGS, by-state sales-tax records &middot; nexus &amp; filing with your CPA/state authority" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or Shopify Inc. &middot; QuickBooks and Shopify are trademarks of their respective owners" },
  ],

  // FAQ — 6 distinct Shopify-specific Q/A. visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: Shopify accounting questions.)
  faq: [
    { q: "Why doesn&rsquo;t my Shopify Payments payout match my Shopify sales?", a: "Because the payout is netted before it reaches your bank. Shopify subtracts processing fees, refunds, and chargebacks, and may hold a reserve, so the deposit is smaller and irregular. Accurate books reconcile gross order value to each net payout, booking revenue gross, fees as expense, refunds and chargebacks as contra-revenue, and reserves as a receivable until released." },
    { q: "How do you get Shopify data into QuickBooks?", a: "We post summarized journal entries from your Shopify admin into your own QuickBooks file &mdash; typically per payout or per period &mdash; rather than importing every individual order. Each entry separates revenue, fees, refunds, sales tax, and gift cards, and is reconciled to the matching bank deposit. Where a <a href=\"/quickbooks/online/integrations/shopify/\">connector app</a> such as A2X fits your volume, we use it to generate clean summaries." },
    { q: "Who is responsible for collecting and remitting Shopify sales tax?", a: "On your own Shopify store, you generally are. Unlike a marketplace facilitator, Shopify does not remit sales tax on your behalf for your own store &mdash; Shopify Tax helps calculate it, but the seller is generally the responsible party. TechBrot keeps the <a href=\"/accounting/sales-tax-compliance/\">by-state records</a> and reconciles what was collected; whether you have nexus, where to register, and when to file are determined with your CPA or the relevant state authority. We do not file your taxes or make the nexus call." },
    { q: "Do you reconcile Shopify POS, Shop Pay, and PayPal too?", a: "Yes. Each settles differently &mdash; Shopify POS for in-person sales, Shop Pay through Shopify Payments, and third-party processors like PayPal on their own schedule. We reconcile every channel and processor so total revenue is counted once and every fee lands on the P&amp;L, with no double-counting across them." },
    { q: "How do you handle gift cards and chargebacks on the books?", a: "A gift card is a liability when sold and only becomes revenue when redeemed, so we book the sale to a gift-card liability account and recognize revenue on redemption. Chargebacks and refunds are booked as contra-revenue and tracked separately rather than quietly netted against sales, so both your revenue and your dispute exposure stay visible." },
    { q: "My Shopify books are already a mess. Where do we start?", a: "With a cleanup. We untangle netted payouts, correct sales tax or gift cards that were booked as income, reconcile each channel to a known-good baseline, then transition into accurate monthly bookkeeping. This is a representative path, not a promised outcome &mdash; most Shopify sellers come to us mid-mess, and it is the normal starting point. See <a href=\"/pricing/\">pricing</a> for how scope is set." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/shopify-sellers/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/shopify-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#shop-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Shopify Sellers","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Shopify Accounting","serviceType":"Shopify accounting and QuickBooks bookkeeping","description":"Shopify Payments payout reconciliation (gross order value to net payout), multi-channel and processor reconciliation (Shopify POS, Shop Pay, PayPal), sales-tax and gift-card liability records, and inventory/COGS tracking for U.S. Shopify sellers, delivered in QuickBooks by Certified ProAdvisors. Independent firm — not affiliated with Intuit Inc. or Shopify Inc.; does not file the client's sales or income taxes — nexus, registration, and filing are determined with the client's CPA or state authority.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. Shopify sellers using Shopify Payments, Shop Pay, POS, and third-party processors"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Shopify accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What Shopify accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Shopify accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
