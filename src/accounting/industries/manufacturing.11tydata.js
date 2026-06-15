/* /accounting/industries/manufacturing/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-manufacturing.txt (42 headings, 7 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/manufacturing/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/accounting/industries/construction.njk
 * + .11tydata.js (proven t-mofu cobalt) for structure + the FULL schema set (WebPage,
 * BreadcrumbList, Service, ItemList, FAQPage, QAPage); src/quickbooks/online.njk for the
 * QBO-vs comparison table treatment. NATIONAL scope.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: contract carries 7 verbatim Q/A — ALL 7 render as faq__list AND emit FAQPage
 * from the same array (NO dedup). The baseline body carried no additional FAQ-style Q/A
 * beyond these 7 (the 5 ai-summary items are separate quick-answers, NOT FAQ), so nothing
 * is gutted. FAQPage + QAPage emitted from their own arrays — single source of truth.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc. or any inventory/ERP platform; bookkeeping/ProAdvisor scope
 * — does NOT file income taxes, coordinates with the client's CPA/EA. No <strong> in the
 * dark hero subheading. CTA labels canonical lexicon only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Manufacturing accounting, plainly." (from baseline TL;DR body, national scope)
  definition: [
    "Manufacturers transform raw materials into finished goods through labor and overhead &mdash; and that single fact breaks generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> in five places. <strong>Inventory exists in three stages</strong> (raw materials, work-in-process, finished goods), each valued separately. <strong>Cost of goods sold</strong> includes not just material cost but allocated labor and manufacturing overhead. <strong>Landed cost</strong> (freight, duty, customs, broker fees) must be capitalized into inventory, not expensed. <strong>Bills of material</strong> define how raw materials assemble into finished products. <strong>Multi-location operations</strong> require warehouse-by-warehouse inventory tracking.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure QuickBooks &mdash; usually <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> once you cross the complexity threshold &mdash; for accurate inventory accounting at every stage. We track BOMs and assemblies, allocate landed cost correctly, handle job costing for custom manufacturers, monitor <a href=\"/accounting/sales-tax-compliance/\">sales-tax nexus</a> across ship-to states, and produce monthly financials with true gross margin by SKU and product line. For manufacturers ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into pricing, capacity, and inventory-financing decisions. We deliver the books in your own QuickBooks file; your CPA or EA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., zero commission on any inventory or ERP platform.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Manufacturing accounting, in five questions.) — source of the QAPage schema.
  aiSummary: [
    { q: "Why is manufacturing accounting different?", a: "Manufacturers <strong>transform raw materials into finished goods</strong> through labor and overhead. Inventory exists in <strong>three stages</strong> (raw materials, WIP, finished goods), COGS includes allocated labor and overhead, and <strong>landed cost</strong> capitalizes into inventory. Generic bookkeeping breaks at all three." },
    { q: "Do you track raw materials, WIP, and finished goods separately?", a: "Yes. Each inventory stage valued correctly on the balance sheet, with cost flowing <strong>raw &rarr; WIP &rarr; finished &rarr; COGS</strong> at the moment of sale. Most generic bookkeeping treats inventory as one line, which makes accurate cost reporting impossible." },
    { q: "Do you handle BOM, assemblies, and landed cost?", a: "Yes. <strong>Bill of materials</strong> configured (Enterprise has stronger native BOM support), and <strong>landed cost</strong> (freight, duty, customs, broker fees) capitalized into inventory per U.S. GAAP, not expensed. For multi-level BOMs and complex inventory, QuickBooks Enterprise is typically the right platform." },
    { q: "Should I be on QuickBooks Enterprise?", a: "Most growing manufacturers, yes. Triggers: <strong>multi-location inventory, more than a few hundred SKUs, multi-level BOMs, FIFO costing, serial/lot tracking, or bin locations</strong>. See our <a href=\"/quickbooks/enterprise/\">Enterprise overview</a>. We don&rsquo;t push migration when it doesn&rsquo;t fit; we run honest assessments." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by SKU count, location count, BOM complexity, transaction volume, and Enterprise vs. QBO setup. No hourly billing. Manufacturing engagements typically include initial <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">inventory cleanup</a>. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places manufacturers lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places manufacturers lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Inventory is wrong", title: "One inventory line, three real stages.", body: "Generic bookkeeping shows &ldquo;Inventory&rdquo; as one line on the balance sheet. The reality is three stages &mdash; raw materials, work-in-process, finished goods &mdash; each with different valuation, turnover, and cost flow. Without tracking them separately the balance sheet is wrong, COGS at sale is wrong, and gross margin is fiction. The fix is three-stage inventory accounting with cost flowing correctly from raw materials through WIP into finished goods and finally into COGS at the moment of sale. If your balance sheet shows one inventory number and you don&rsquo;t know how it splits across stages, your gross margin is currently a guess." },
    { signal: "BOM &amp; landed cost are missing", title: "Cost per SKU isn&rsquo;t calculable.", body: "Without accurate bills of material you can&rsquo;t know what each finished SKU actually costs to produce. Without landed-cost capitalization your true product cost is understated and your freight expense overstated. Together, SKU-level margin is invisible &mdash; you can&rsquo;t see which products earn their place and which lose money quietly. The fix is BOMs configured per SKU with current costs, landed cost capitalized across received inventory, and SKU-level margin reporting that reflects real production economics. If you&rsquo;ve never seen profitability by SKU, the spread is almost always wider than founders expect &mdash; some SKUs subsidize others." },
    { signal: "QuickBooks doesn&rsquo;t fit anymore", title: "Outgrown QBO; ready for Enterprise.", body: "QuickBooks Online&rsquo;s inventory module works for simple operations. Once you have multiple warehouses, multi-level BOMs, hundreds of SKUs, lot or serial tracking, or FIFO requirements, QBO starts breaking &mdash; inventory that doesn&rsquo;t reconcile, workarounds that fail, growing manual rework. The fix is an honest assessment of whether the operation has outgrown QBO; if yes, <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> advanced inventory configured correctly. We don&rsquo;t push Enterprise when it doesn&rsquo;t fit &mdash; for some manufacturers a connected inventory app on QBO is enough; for others, dedicated ERP is the answer." },
  ],

  // SUB-VERTICALS — "Manufacturing comes in many shapes." (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Manufacturing comes in many shapes. + 6 H3s)
  subverticals: [
    { title: "Discrete manufacturers", body: "Producing distinct, countable units (electronics, machinery, consumer goods, hardware). Standard cost or actual cost per unit, BOM-driven COGS, FIFO or weighted-average valuation. The reference case for manufacturing accounting in QuickBooks." },
    { title: "Job-shop &amp; custom manufacturers", body: "One-off or short-run custom production (machine shops, metal fabrication, custom signage, custom apparel). Job costing per order rather than standard costing; estimating-to-actual variance reporting; bid calibration against realized margin." },
    { title: "Batch &amp; process manufacturers", body: "Continuous or batch production (food and beverage, chemicals, cosmetics, supplements). Process costing with allocation across batches; yield tracking; expiration and lot tracking; often regulated, requiring serial/lot traceability." },
    { title: "Contract manufacturers", body: "Producing under another brand&rsquo;s specs (private label, white label, OEM). Customer-supplied vs. self-supplied materials, gross-vs-net revenue presentation, and intellectual-property and tooling accounting considerations." },
    { title: "Multi-location manufacturers", body: "Multiple plants, warehouses, or stockrooms. Inter-location inventory transfers, location-specific costing, and consolidated plus by-location P&amp;Ls. Typically requires QuickBooks Enterprise advanced inventory." },
    { title: "DTC &amp; ecommerce manufacturers", body: "Brands manufacturing and selling direct (3PL fulfillment, Amazon FBA, Shopify, retail channels). Combines manufacturing inventory complexity with multi-channel sales reconciliation &mdash; see our <a href=\"/accounting/industries/ecommerce/\">ecommerce accounting</a> page." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Manufacturing accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Inventory", title: "Three-stage inventory accounting", body: "Raw materials, WIP, and finished goods tracked separately with correct cost flow into COGS at sale &mdash; balance-sheet inventory that actually reconciles.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; BOM", title: "Bill of materials &amp; assemblies", body: "BOMs configured per SKU with current costs, multi-level assemblies for sub-component manufacturing, and accurate cost flow on every finished-good sale.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Cost", title: "Landed cost &amp; job costing", body: "Freight, duty, customs, and broker fees capitalized into inventory. Job costing for custom and short-run production with estimate-to-actual variance.", href: "/accounting/chart-of-accounts-setup/", cta: "Chart of accounts setup &rarr;" },
    { num: "04 &middot; Platform", title: "QuickBooks Enterprise setup", body: "For manufacturers that have outgrown QBO: Enterprise advanced inventory, multi-location, FIFO costing, lot/serial tracking, and bin locations.", href: "/quickbooks/enterprise/", cta: "QuickBooks Enterprise &rarr;" },
    { num: "05 &middot; Cleanup", title: "Inventory cleanup &amp; rebuild", body: "For files with broken inventory: physical-count reconciliation, rebuild WIP and finished-goods balances, and restate COGS to actual landed cost.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Advisory", title: "Pricing &amp; capacity advisory", body: "SKU-level pricing strategy, capacity-utilization analysis, inventory-financing modeling, and cash-flow forecasting through production cycles.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — manufacturing stack reconciled with QuickBooks (checks-list).
  // (H2: Connected to your manufacturing stack.)
  integrations: [
    "QuickBooks Enterprise &mdash; advanced inventory for growing manufacturers",
    "Fishbowl &mdash; manufacturing and warehouse inventory synced to QuickBooks",
    "SOS Inventory &mdash; assemblies, BOM, and serial/lot tracking",
    "Cin7 Core (DEAR) &mdash; production and multi-warehouse inventory",
    "Katana &mdash; shop-floor manufacturing and BOM management",
    "MRPeasy &mdash; production planning and material requirements",
    "ShipStation / ShipBob &mdash; fulfillment reconciled to inventory",
    "Bill.com &amp; Ramp &mdash; payables and spend tied to landed cost",
    "Gusto / ADP &mdash; production-labor payroll",
    "Shopify &mdash; DTC sales reconciled to manufacturing inventory",
  ],
  integrationsNote: "Different stack? If it has a QuickBooks integration or exports clean data, we can work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From inventory chaos to true product margin. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your sub-segment, SKU count, location count, BOM complexity, current platform, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Platform &amp; cleanup", body: "If needed, migration to <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a>, plus <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">inventory cleanup</a> with physical-count reconciliation, BOM configuration, and landed-cost rebuild." },
    { num: "Phase 3", name: "Monthly reconciliation", body: "Books reconciled monthly with three-stage inventory, BOM-driven COGS, landed cost capitalized, and SKU-level margin reporting maintained." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with SKU-level margin, production economics, and inventory turnover, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on pricing, capacity, and inventory financing." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Accurate inventory is the start. Pricing the line is the point.)
  advisoryBody: [
    "Once raw materials, WIP, finished goods, BOM, and landed cost are correct, the question changes from &ldquo;is COGS right?&rdquo; to &ldquo;what do we do about it?&rdquo; Which SKUs to price up, which to discontinue, where capacity is constrained, when to invest in tooling, whether inventory financing makes sense for the next production run &mdash; the decisions that actually move a manufacturer.",
    "That&rsquo;s where <strong>manufacturing advisory</strong> comes in: a Certified ProAdvisor who knows your production economics turning them into pricing, capacity, and inventory-financing decisions. Accurate inventory comes first; then that judgment turns it into decisions. As automation commoditizes basic entry, this advisory layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "QuickBooks Enterprise", body: "Advanced inventory, multi-location, FIFO costing, BOM, and lot/serial tracking &mdash; the platform most growing manufacturers need.", href: "/quickbooks/enterprise/", cta: "Explore Enterprise &rarr;" },
    { title: "Inventory cleanup", body: "Physical-count reconciliation, WIP rebuild, and landed-cost restatement to a known-good baseline before monthly bookkeeping begins.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Ecommerce accounting", body: "For manufacturers selling DTC: multi-channel sales reconciliation alongside production accounting and three-stage inventory.", href: "/accounting/industries/ecommerce/", cta: "Ecommerce industry &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; construction, real estate, restaurant, healthcare, ecommerce, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Three-stage inventory, BOM, landed cost, job costing, QB Enterprise setup &middot; income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any inventory/ERP platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — all 7 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment append-only).
  // visible faq__list = FAQPage schema (same array, NO dedup). (H2: Manufacturing accounting questions.)
  faq: [
    { q: "Why is manufacturing accounting harder than regular bookkeeping?", a: "Manufacturers don&rsquo;t just buy and sell &mdash; they transform raw materials into finished goods through labor and overhead. That single fact breaks generic bookkeeping in multiple places. Inventory exists in three states simultaneously (raw materials, work-in-process, finished goods), each valued differently. Cost of goods sold includes not just material cost but allocated labor and manufacturing overhead. Landed cost (freight, duty, customs, broker fees) must be capitalized into inventory rather than expensed. Bills of material define how raw materials assemble into finished products. Multi-location operations require warehouse-by-warehouse inventory tracking. None of this fits into the generic QuickBooks Online chart of accounts that works fine for service businesses. The result: most manufacturers running on generic bookkeeping see distorted COGS, wrong gross margin, missing or inflated inventory on the balance sheet, and an inability to answer &ldquo;which products actually make money&rdquo; at the SKU level." },
    { q: "Do you handle raw materials, WIP, and finished goods inventory?", a: "Yes. Manufacturing inventory accounting requires tracking three distinct stages: raw materials (purchased but not yet consumed), work-in-process (materials and labor committed to production but not yet complete), and finished goods (ready for sale). We configure QuickBooks (or <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> for advanced inventory needs) so all three stages are valued correctly on the balance sheet, with cost flowing from raw materials through WIP into finished goods and ultimately into COGS at the point of sale. Most generic bookkeeping treats inventory as a single line item, which makes accurate cost reporting impossible and the balance sheet inaccurate." },
    { q: "What about bill of materials (BOM) and assemblies?", a: "Bill of materials defines what raw materials and labor go into each finished product. For manufacturers assembling multiple products from shared raw-material inventory, BOM accuracy determines whether COGS is calculated correctly when each finished good is sold. We configure BOMs in QuickBooks (Enterprise has stronger native BOM support; QBO requires careful workarounds or a connected app), maintain them as costs change, and ensure the BOM-driven cost flows into COGS correctly at the moment of sale. For manufacturers with complex multi-level BOMs (sub-assemblies that themselves contain sub-assemblies), QuickBooks Enterprise&rsquo;s advanced inventory module is typically the right platform." },
    { q: "Do you handle landed cost &mdash; freight, duty, customs, broker fees?", a: "Yes. Landed cost is the total cost of getting inventory to your warehouse and ready for sale: the purchase price plus freight, customs duty, broker fees, insurance, and any other costs of acquisition. Under U.S. GAAP, landed cost is capitalized into inventory rather than expensed when incurred &mdash; meaning your true product cost is higher than the invoice price, and your COGS at the time of sale should reflect the full landed cost. Most generic bookkeeping expenses these costs as &ldquo;shipping&rdquo; or &ldquo;freight in&rdquo; on the P&amp;L, which understates inventory on the balance sheet and overstates current-period profit. We configure QuickBooks to capitalize landed cost correctly and allocate it across the inventory it relates to." },
    { q: "Should my manufacturer be on QuickBooks Enterprise?", a: "Probably, once you cross a certain complexity threshold. QuickBooks Online and Desktop Premier handle simple inventory adequately, but most manufacturers eventually need QuickBooks Enterprise&rsquo;s advanced inventory features: multi-location inventory tracking, FIFO costing (in addition to average cost), barcode scanning, serial and lot number tracking, bin location tracking, and stronger BOM/assembly support. The triggers we look for: more than one warehouse or stockroom, more than a few hundred SKUs, multi-level BOMs, customer-required lot or serial tracking (medical devices, food, regulated products), or operations that exceed what QBO&rsquo;s inventory module handles cleanly. See our <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise overview</a> for the detailed assessment." },
    { q: "Do you handle job costing for custom manufacturers?", a: "Yes. Job-shop and custom manufacturers (one-off or short-run production) need job costing rather than standard process costing: each customer order or production batch tracks its own material cost, direct labor, allocated overhead, and final margin. This is distinct from the standard-cost variance analysis used by high-volume process manufacturers. We configure job costing in QuickBooks (with assistance from a connected job-cost app for complex cases), capture direct labor from time-tracking, allocate manufacturing overhead at the job level, and produce job-by-job profitability reporting so estimating, pricing, and quoting can be calibrated against actual realized margins." },
    { q: "What about multi-state sales tax for manufacturers shipping nationally?", a: "Manufacturers shipping products across state lines face the same economic-nexus rules as any other seller, with two complications: sales to resellers for resale are typically exempt with a valid resale certificate, and sales to manufacturers for further processing may be exempt depending on the state. We monitor sales-tax nexus across states where the manufacturer ships, maintain a resale-certificate library so exempt sales are documented, and coordinate with your CPA on state income-tax nexus and any complex multi-state tax positions. See our <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a> page for the full operational scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/manufacturing/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/manufacturing-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-manufacturing-definition","#acctind-manufacturing-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Manufacturing","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Manufacturing Accounting & Bookkeeping","serviceType":"Specialist accounting and bookkeeping for manufacturers","description":"Three-stage inventory accounting (raw materials, WIP, finished goods), bill of materials and assembly accounting, landed-cost capitalization, job costing, multi-location inventory, FIFO/weighted-average costing, sales-tax nexus across ship-to states, and QuickBooks Enterprise advanced-inventory configuration for U.S. manufacturers, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. manufacturers — discrete, job-shop, batch, process; SMB through mid-market"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Manufacturing accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What manufacturing accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Manufacturing accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
