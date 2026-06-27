/* /find-an-accountant/delaware/industries/ecommerce/ — t-location INDUSTRY child. Mirrors
 * NY industries/construction.11tydata.js. Content arrays + eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service, FAQPage). FAQPage from the same `faq` array.
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md ONLY. Delaware draw: NO sales tax to
 * collect; BUT gross receipts tax on the SELLER (0.0945%–1.9914% by activity, after a
 * monthly/quarterly exclusion); multi-state nexus = OTHER states' sales tax where the seller
 * ships and has nexus. No figure invented beyond DE-FACTS.
 *
 * HONESTY (R5): TechBrot delivers the books; does NOT file Delaware or other states' returns —
 * coordinates with the client's CPA. No invented reviews/stats/clients. No founder name in
 * visible content; David Westgate only as reviewedBy #david-westgate. Independent firm; not
 * affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Delaware ecommerce accounting, plainly.",
  summary: [
    "Ecommerce books live or die on two things: <strong>clean revenue across every channel</strong> and <strong>accurate COGS</strong>. Shopify, Amazon, Etsy, and your own site each report deposits differently &mdash; net of fees, refunds, chargebacks, and reserves &mdash; so the deposit that hits the bank is never the sale. Real ecommerce accounting reconciles gross sales, fees, refunds, and payouts per channel, tracks <strong>inventory and cost of goods sold</strong>, and gives you margin you can actually trust.",
    "Delaware adds a genuinely different tax picture. There is <strong>no state or local sales tax</strong> &mdash; nothing to collect from customers and no sales-tax return &mdash; which is a real draw for sellers and fulfillment operations. But two things still apply. First, Delaware levies a <strong>gross receipts tax on the seller</strong>: 0.0945%&ndash;1.9914% by business activity, on your total receipts after a monthly or quarterly exclusion amount, filed with the Division of Revenue. Second, when you <strong>ship into other states</strong> where you have economic or physical nexus, <em>those</em> states&rsquo; sales-tax rules apply &mdash; so QuickBooks has to track destination revenue and flag where registration may be required.",
    "The common mistake is assuming &ldquo;no sales tax in Delaware&rdquo; means no tax obligations at all. <strong>TechBrot</strong> sets up multi-channel reconciliation, COGS, gross-receipts tracking by activity, and out-of-state nexus monitoring in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and hands clean numbers to your CPA, who files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware or other states&rsquo; returns.",
  ],
  secAiH: "Delaware ecommerce accounting, in five questions.",
  aiSummary: [
    { q: "Does a Delaware ecommerce seller collect sales tax?", a: "<strong>Not in Delaware &mdash; there is no state or local sales tax</strong>, so nothing is collected from customers in-state. But the seller still owes Delaware&rsquo;s <strong>gross receipts tax</strong> on its own receipts, and owes sales tax in <em>other</em> states wherever it ships and has nexus." },
    { q: "What is the Delaware gross receipts tax for ecommerce?", a: "A tax on the <strong>seller&rsquo;s total gross receipts</strong> &mdash; 0.0945%&ndash;1.9914% by business activity, after a monthly or quarterly exclusion &mdash; filed with the Division of Revenue. We configure QuickBooks to track receipts by activity so the right rate and exclusion apply and the return reconciles." },
    { q: "Do you handle multi-state sales-tax nexus?", a: "We <strong>track destination revenue by state and flag where economic nexus is forming</strong> so you know where registration may be required. We handle the books and the data; your CPA or a sales-tax specialist handles the filings and registrations." },
    { q: "Can you reconcile Shopify, Amazon, and Stripe payouts?", a: "Yes &mdash; we reconcile <strong>gross sales, platform fees, refunds, chargebacks, and reserves per channel</strong> to the actual bank payout, and track inventory and COGS &mdash; so margin by channel and SKU is real, not a guess." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by channels, transaction volume, and inventory complexity. Monthly bookkeeping starts at <strong>$400/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],
  secChallengesH: "Three places Delaware ecommerce books break.",
  secChallengesLede: "Sellers look profitable until the channels don&rsquo;t reconcile. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Deposits aren&rsquo;t sales", title: "Channel payouts booked as revenue.", body: "The deposit from Shopify or Amazon is net of fees, refunds, chargebacks, and reserves &mdash; so booking the payout as revenue understates sales and hides your real fee load. The fix is per-channel reconciliation: gross sales, fees, refunds, and payouts split out and tied to the bank, so margin by channel is true. If you can&rsquo;t see platform fees as their own line, this is your starting point." },
    { signal: "Margin is a guess", title: "No real COGS or inventory.", body: "Without inventory and cost of goods sold tracked properly, your P&amp;L shows a margin that isn&rsquo;t real &mdash; and you can&rsquo;t tell which products actually make money. The fix is COGS and inventory tracked in QuickBooks (or reconciled from your inventory app), so gross margin by SKU is something you can price and reorder from." },
    { signal: "Tax assumptions are wrong", title: "The no-sales-tax trap.", body: "&ldquo;Delaware has no sales tax&rdquo; is true in-state &mdash; but the seller still owes the gross receipts tax on its own receipts, and owes sales tax in other states where it ships and has nexus. Assuming zero obligations is how assessments and back-registrations happen. The fix is gross-receipts tracking by activity plus destination-revenue tracking that flags where out-of-state nexus is forming." },
  ],
  secHandleH: "Delaware ecommerce accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your channels and catalog, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Channels", title: "Multi-channel reconciliation", body: "Shopify, Amazon, Etsy, and your own site reconciled to actual payouts &mdash; gross sales, fees, refunds, and reserves split out so revenue and margin are real.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; COGS", title: "Inventory &amp; COGS", body: "Cost of goods sold and inventory tracked in QuickBooks or reconciled from your inventory app, so gross margin by product is something you can price from.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Gross receipts", title: "Delaware gross receipts", body: "Receipts tracked by business activity so the right Delaware gross-receipts rate and exclusion apply and the return reconciles to the books.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "04 &middot; Nexus", title: "Multi-state nexus tracking", body: "Destination revenue tracked by state with economic-nexus thresholds flagged, so you know where registration may be required &mdash; data your CPA can act on.", href: "/find-an-accountant/delaware/quickbooks-accountant/", cta: "Delaware QuickBooks accountant &rarr;" },
    { num: "05 &middot; Reporting", title: "Margin &amp; cash reporting", body: "Monthly reporting on channel margin, COGS, and cash &mdash; the numbers you need to reorder, price, and scale without guessing.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping &rarr;" },
    { num: "06 &middot; Cleanup", title: "Ecommerce cleanup", body: "Rebuild miscategorized payouts, fix COGS and inventory, untangle refunds and chargebacks, and reconcile to a known-good baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you sell.",
  integrations: [
    "Shopify &mdash; orders, fees, and payouts reconciled to QuickBooks",
    "Amazon Seller Central &mdash; settlement reports split to gross, fees, and reserves",
    "Stripe &amp; PayPal &mdash; processor fees and payouts matched to the bank",
    "A2X &mdash; channel settlement to clean journal entries",
    "QuickBooks Commerce / inventory apps &mdash; COGS and stock reconciled",
    "Etsy, Walmart, and your own checkout &mdash; multi-channel revenue unified",
    "Gross-receipts tracking by business activity (Division of Revenue)",
    "Destination-revenue tracking to flag multi-state nexus",
  ],
  integrationsNote: "Selling on a channel or stack not listed? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From tangled payouts to channel-level profit.",
  secProcessLede: "Every Delaware ecommerce engagement follows the same four-phase rhythm &mdash; books accurate first, margin visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your channels, catalog, COGS method, and where you ship &mdash; plus any gross-receipts or nexus exposure. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure channel reconciliation, COGS, and gross-receipts tracking, plus a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to fix past payouts and inventory where needed." },
    { phase: "Phase 3", title: "Monthly close", body: "Monthly reconciliation across channels, COGS and inventory updated, gross-receipts cadence kept, and destination revenue tracked for nexus." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Channel-margin and cash reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">inventory and cash-flow advisory</a>." },
  ],
  secAdvisoryH: "Clean channels are the start. Knowing which product makes money is the point.",
  advisoryBody: [
    "Once every channel reconciles and COGS is real, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;where&rsquo;s the margin?&rdquo; Which SKUs carry profit after fees and shipping, when ad spend stops paying back, how much cash is tied up in inventory, which channel deserves the next dollar &mdash; the decisions that separate sellers who scale from those who stall.",
    "That&rsquo;s where ecommerce advisory comes in: a Certified ProAdvisor who knows your channel and COGS data turning it into margin, inventory, and cash-flow strategy. As automation handles routine entry, this judgment layer is the edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Delaware ecommerce and retail engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm in Middletown, and reviewed for technical accuracy on multi-channel reconciliation, COGS, the Delaware gross receipts tax, and multi-state sales-tax nexus (<a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">DE Division of Revenue</a>). TechBrot delivers the books and coordinates with your CPA, who files Delaware and other states&rsquo; returns.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Multi-channel reconciliation, COGS, gross-receipts tracking, multi-state nexus monitoring &middot; income-tax and sales-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],
  secRelatedH: "Related Delaware services &amp; industries.",
  related: [
    { title: "Gross Receipts Tax Help", body: "Activity-based gross-receipts tracking set up so the right rate and exclusion apply and the return reconciles.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
    { title: "QuickBooks Setup", body: "The right edition, an ecommerce chart of accounts, channel reconciliation, and COGS configured from day one.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Explore setup &rarr;" },
    { title: "Amazon &amp; Shopify sellers", body: "Global marketplace and Shopify accounting playbooks &mdash; scoped for Delaware on the call.", href: "/accounting/industries/ecommerce/", cta: "Ecommerce accounting &rarr;" },
    { title: "All Delaware industries", body: "See how TechBrot tailors accounting to the way your industry runs in Delaware.", href: "/find-an-accountant/delaware/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Do I collect sales tax as a Delaware ecommerce seller?", a: "Not in Delaware &mdash; the state imposes no sales tax, so you collect nothing from customers in-state and file no Delaware sales-tax return. That is a genuine advantage. But two obligations remain: Delaware&rsquo;s gross receipts tax on your own total receipts, and sales tax in other states wherever you ship and have economic or physical nexus. We track both in QuickBooks so nothing is missed." },
    { q: "What is the Delaware gross receipts tax and how is it handled in QuickBooks?", a: "It&rsquo;s a tax on your total gross receipts as the seller &mdash; Delaware&rsquo;s substitute for a sales tax &mdash; at 0.0945% to 1.9914% depending on your business activity, after a monthly or quarterly exclusion amount that reduces the taxable base. We configure income tracking by activity category in QuickBooks so the correct rate and exclusion apply and the gross-receipts return ties out to the books each period rather than being reconstructed later." },
    { q: "How do you handle multi-state sales-tax nexus?", a: "Every state where you ship has its own economic-nexus threshold (commonly a dollar or transaction count over a year). We track your destination revenue by state in QuickBooks and flag when you cross a threshold, so you know where registration may be required before it becomes a problem. We provide the data and the books; your CPA or a sales-tax specialist handles the registrations and filings." },
    { q: "Can you reconcile Shopify, Amazon, and Stripe to my bank?", a: "Yes &mdash; that&rsquo;s core to ecommerce bookkeeping. Each platform pays out net of fees, refunds, chargebacks, and reserves, so we split every settlement into gross sales, platform fees, refunds, and the actual payout, then tie it to the bank. With A2X or similar where it helps, the result is clean revenue and a true fee load by channel &mdash; not a deposit booked as a sale." },
    { q: "Do you track inventory and cost of goods sold?", a: "Yes. We set up COGS and inventory in QuickBooks, or reconcile from your inventory or 3PL system, so your gross margin reflects real product cost &mdash; including landed cost where it matters. That&rsquo;s what lets you see which SKUs actually make money after fees and shipping, and price and reorder with confidence rather than guessing from a top-line number." },
    { q: "My ecommerce books are a mess across channels. Where do we start in Delaware?", a: "With a cleanup. We rebuild miscategorized payouts, fix COGS and inventory, untangle refunds and chargebacks, set up gross-receipts tracking, and reconcile to a known-good baseline &mdash; then move you onto accurate monthly bookkeeping with channel-margin reporting. Most sellers come to us mid-mess; it&rsquo;s the normal starting point. Prefer to talk first? Call (877) 751-5575 and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/ecommerce/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Ecommerce Accounting","description":"Ecommerce accounting for Delaware sellers — multi-channel reconciliation, COGS, the gross receipts tax on the seller, and multi-state sales-tax nexus, set up in QuickBooks by a Certified ProAdvisor. No Delaware sales tax to collect.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-industries-ecommerce.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-ind-ecommerce-summary","#de-ind-ecommerce-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/delaware/industries/"},
          {"@type":"ListItem","position":5,"name":"Ecommerce"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Ecommerce Accounting","serviceType":"Ecommerce and retail bookkeeping","description":"Multi-channel reconciliation, COGS and inventory, Delaware gross-receipts tracking, and multi-state sales-tax nexus monitoring for Delaware ecommerce and retail sellers, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Delaware or other states' returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware ecommerce sellers, multi-channel retailers, Amazon and Shopify sellers, and fulfillment businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
