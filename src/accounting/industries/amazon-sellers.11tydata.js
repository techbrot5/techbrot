/* /accounting/industries/amazon-sellers/ — NEW high-fee industry page (Amazon seller
 * accounting / FBA bookkeeping). Built from src/accounting/industries/ecommerce.njk +
 * .11tydata.js as the template (front-matter keys; section body; arrays + pageGraph →
 * WebPage + BreadcrumbList + Service + FAQPage). DISTINCT ANGLE from /ecommerce/ (the
 * general multi-channel hub — LINKED, not restated): Amazon-specific settlement-report
 * reconciliation (gross sales vs net deposit), reserve balances, FBA inventory + COGS
 * (commingled, multi-warehouse), multi-marketplace, and marketplace-facilitator sales tax.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * slug acctind-amazon, section id prefix amz-. The 5 quick-answer questions render as
 * NON-heading ai-summary__question. The final-CTA H2 is emitted by the t-mofu ctaBand.
 *
 * HONESTY (R4/R5/R9): no fabricated stats/clients/reviews; no AggregateRating/Review schema;
 * firm-level authorship; David Westgate in reviewedBy schema @id only. Independent firm —
 * NOT affiliated with Intuit Inc. and NOT affiliated with Amazon.com, Inc. Sales-tax nuance
 * is careful and accurate: marketplace facilitators (Amazon) generally COLLECT AND REMIT in
 * most states, but that does NOT remove the need to RECORD it correctly; the seller's own
 * nexus/registration/filing obligations are determined with their CPA or the state authority
 * — we keep records and reconcile, we do NOT file the client's income taxes and we do NOT
 * make the nexus determination. Canonical pricing only (defer to /pricing/) — no
 * Amazon-specific invented prices. Representative scenarios labeled as representative. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Amazon seller accounting, plainly." (Amazon-specific; settlement-first framing)
  definition: [
    "Amazon never deposits your sales. Roughly every two weeks it pays a single <strong>settlement</strong> &mdash; a net deposit that has already subtracted referral fees, FBA fulfillment and storage fees, refunds and reimbursements, advertising charges, and a moving <strong>reserve balance</strong>. Book that deposit as one number and your revenue is understated, your fee load is invisible, and your margins are fiction. <a href=\"/accounting/bookkeeping/\">Accurate books</a> require pulling each settlement apart and posting every component to the right account.",
    "On top of the settlement, Amazon accounting carries problems ordinary bookkeeping never sees: <strong>FBA inventory</strong> that is commingled and split across multiple fulfillment-center warehouses, <strong>cost of goods sold</strong> that has to follow units as they sell, and <strong>marketplace-facilitator sales tax</strong> that Amazon collects and remits in most states but that still has to be recorded correctly so it is never counted as your income or filed twice.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who reconcile every settlement to your own <a href=\"/quickbooks/online/\">QuickBooks</a> file using A2X-style summarization, track FBA inventory and COGS, handle reserves, and keep the by-state records your CPA needs. We deliver the books and reconcile; we do <strong>not</strong> file your income taxes and we do <strong>not</strong> make your nexus determination &mdash; registration, nexus, and filing decisions stay with your CPA, EA, or the state authority. This page is Amazon-specific; sellers running multiple channels should also see <a href=\"/accounting/industries/ecommerce/\">e-commerce accounting</a>. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc. or Amazon.com, Inc.",
  ],

  // SETTLEMENT-DECOMPOSITION TABLE — vs-scroll + vs-table (T3 no collapse). NO heading; embedded
  // in the definition section. Shows what a single Amazon settlement actually contains and where
  // each piece must land in QuickBooks. Marketplace-facilitator row is the careful tax nuance.
  settlementRows: [
    { line: "Gross product sales", net: "Buried inside the net deposit", clean: "Booked as revenue, gross" },
    { line: "Referral &amp; FBA fulfillment fees", net: "Already subtracted", clean: "Booked as expenses, visible on the P&amp;L" },
    { line: "FBA storage &amp; long-term storage fees", net: "Silently netted out", clean: "Booked as expenses, tracked separately" },
    { line: "Refunds &amp; FBA reimbursements", net: "Mixed into the deposit", clean: "Booked as contra-revenue and other income, kept distinct" },
    { line: "Advertising (Sponsored Products) charges", net: "Often deducted from the payout", clean: "Booked as advertising expense" },
    { line: "Marketplace-facilitator sales tax", net: "Collected &amp; remitted by Amazon", clean: "Recorded so it is never your income and never filed twice" },
    { line: "Reserve balance / unavailable funds", net: "Deposit looks short", clean: "Tracked as a receivable until Amazon releases it" },
  ],

  // AI SUMMARY — five-question block. NON-heading questions. Amazon-specific.
  aiSummary: [
    { q: "Why is Amazon accounting different from regular bookkeeping?", a: "Amazon pays a single net <strong>settlement</strong> every two weeks that already nets out referral fees, FBA fees, storage, refunds, advertising, and a reserve balance. Each component must be split apart and posted correctly &mdash; the deposit alone tells you almost nothing about your real sales or margin." },
    { q: "Do you reconcile Amazon settlement reports to QuickBooks?", a: "Yes. We reconcile each settlement using <strong>A2X-style summarization</strong> from Seller Central, separating gross sales, referral and FBA fees, storage, refunds, reimbursements, advertising, and tax &mdash; not netted into one lump deposit." },
    { q: "How do you handle FBA inventory and COGS?", a: "We track <strong>FBA inventory and cost of goods sold</strong> in QuickBooks even though units are commingled across multiple fulfillment-center warehouses, so gross margin reflects what each unit actually cost and what Amazon&rsquo;s fees took out of it." },
    { q: "Does Amazon collect sales tax for me, and do I still need to do anything?", a: "Amazon, as a <strong>marketplace facilitator</strong>, collects and remits sales tax on its marketplace sales in most states. That does <strong>not</strong> remove the need to <strong>record</strong> it correctly, and you may still have your own nexus, registration, or filing obligations &mdash; for example from sales off Amazon. We keep the records and reconcile; your CPA or the state authority makes the nexus determination and any filing." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by settlement volume, number of marketplaces, FBA inventory complexity, and cleanup needed. See <a href=\"/pricing/\">pricing</a>. No hourly billing." },
  ],

  // CHALLENGES — three places Amazon sellers lose the numbers (grid-3 buyer-cards). 3 H3s.
  challenges: [
    { signal: "Revenue is wrong", title: "The net deposit hides your real sales.", body: "A two-week settlement lands as one number after referral fees, FBA fees, storage, refunds, ads, and reserves are already gone. Booked as a single deposit, your revenue is understated and thousands in fees disappear from the P&amp;L. The fix is settlement-level reconciliation that separates every component &mdash; every settlement, every period. If you&rsquo;ve never split a settlement apart, your margins are currently a guess. It&rsquo;s fixable." },
    { signal: "Margin is invisible", title: "FBA inventory and COGS aren&rsquo;t tracked.", body: "FBA units sit commingled across multiple fulfillment centers, and Amazon&rsquo;s fee stack eats into every sale. Without real inventory and cost-of-goods tracking, you can&rsquo;t see true gross margin, time restocks, or know which ASINs actually make money after fees. The fix is FBA inventory and COGS maintained in QuickBooks so margin is real and decision-ready. Inventory-heavy sellers often need accrual basis to see the truth; we&rsquo;ll tell you if cash basis is hiding it." },
    { signal: "Tax is mis-recorded", title: "Marketplace-facilitator tax booked wrong.", body: "Amazon collects and remits sales tax on most marketplace sales, but it still flows through your settlements &mdash; and if it&rsquo;s booked as income, or filed again, your numbers are wrong. The fix is recording facilitator tax as a pass-through it never was your income, so it&rsquo;s not double-counted or double-filed. Your own nexus and any non-Amazon filings are determined with your CPA or the state authority; we keep the records, we don&rsquo;t make that call." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 stack-8). 6 H3s.
  handle: [
    { num: "01 &middot; Settlements", title: "Settlement-report reconciliation", body: "Every Amazon settlement reconciled to QuickBooks via A2X-style summarization &mdash; gross sales, referral and FBA fees, storage, refunds, reimbursements, advertising, and tax separated correctly, not netted into one deposit.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Reserves", title: "Reserve &amp; payout handling", body: "Reserve balances and unavailable funds tracked as receivables until Amazon releases them, so a short deposit never looks like lost revenue and your cash position stays accurate.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Inventory", title: "FBA inventory &amp; COGS", body: "FBA inventory and cost of goods sold maintained in QuickBooks across commingled, multi-warehouse stock so gross margin per ASIN is accurate after Amazon&rsquo;s fee load.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Sales tax records", title: "Marketplace-facilitator tax recording", body: "Facilitator tax that Amazon collects and remits recorded correctly as a pass-through &mdash; never your income, never double-filed &mdash; with by-state records kept for your CPA. We don&rsquo;t make the nexus call or file your income taxes.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax records &rarr;" },
    { num: "05 &middot; Cleanup", title: "Amazon-mess cleanup", body: "Untangle netted settlements, rebuild FBA inventory and COGS, and reconcile each marketplace to a known-good baseline before monthly bookkeeping begins.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Advisory", title: "Growth advisory", body: "As you scale across marketplaces, fractional CFO advisory on cash flow, ASIN-level pricing against fees and ad spend, and inventory financing &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — what we reconcile from Seller Central into QuickBooks (checks-list).
  integrations: [
    "Amazon settlement reports &mdash; gross sales, fees, refunds, ads, and tax decomposed",
    "FBA fees &mdash; fulfillment, storage, and long-term storage booked as expenses",
    "FBA reimbursements &mdash; lost/damaged-inventory credits tracked as other income",
    "Reserve balances &mdash; unavailable funds carried as receivables until released",
    "Multi-marketplace activity &mdash; settlements across U.S. marketplaces mapped consistently",
    "Marketplace-facilitator tax &mdash; recorded as a pass-through, not income, never double-filed",
    "Amazon advertising &mdash; Sponsored Products charges booked to advertising expense",
    "A2X / connector apps &mdash; clean settlement summaries posted to QuickBooks",
  ],
  integrationsNote: "Selling on more than Amazon? For Shopify, Stripe, eBay, Etsy, and Walmart together, see <a href=\"/accounting/industries/ecommerce/\">e-commerce accounting</a>, or <a href=\"/contact/?intent=accounting\">ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 H3s.
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your marketplaces, settlement volume, FBA footprint, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to untangle netted settlements and rebuild FBA inventory, plus correct QuickBooks setup with A2X-style summarization." },
    { num: "Phase 3", name: "Monthly reconciliation", body: "Every settlement reconciled, reserves tracked, COGS maintained, and facilitator tax recorded correctly &mdash; with by-state records kept for your CPA." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with ASIN- and marketplace-level margin and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and growth advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Once your settlements reconcile and your margins are real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do about them?&rdquo; Which ASINs to scale, when inventory financing makes sense, how pricing holds up against rising FBA fees and ad costs &mdash; the decisions that actually move an Amazon business.",
    "That&rsquo;s where <strong>Amazon advisory</strong> comes in: a Certified ProAdvisor who knows your numbers turning them into cash-flow, pricing, and growth decisions. Accurate books come first; then that judgment turns them into decisions. As automation commoditizes basic bookkeeping, this advisory layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 6 distinct Amazon-specific Q/A. visible faq__list = FAQPage schema (same array, NO dedup).
  faq: [
    { q: "Why is Amazon seller accounting harder than regular bookkeeping?", a: "Amazon pays a single net settlement roughly every two weeks that already nets out referral fees, FBA fulfillment and storage fees, refunds, reimbursements, advertising, and a moving reserve balance. Each piece has to be split apart and posted to the right account, on top of FBA inventory and <a href=\"/glossary/cost-of-goods-sold/\">COGS</a> across commingled multi-warehouse stock. A raw deposit booked as one number leaves revenue understated and margins unknowable." },
    { q: "Do you reconcile Amazon settlement reports to QuickBooks?", a: "Yes. We reconcile each settlement to your QuickBooks file using A2X-style summarization from Seller Central, separating gross sales, referral and FBA fees, storage, refunds, FBA reimbursements, advertising, and sales tax so your income, fee load, and margins are accurate rather than collapsed into one deposit." },
    { q: "How do you handle FBA inventory and cost of goods sold?", a: "We maintain <a href=\"/quickbooks/online/features/inventory/\">FBA inventory</a> and COGS in QuickBooks even though units are commingled and split across multiple Amazon fulfillment centers. COGS follows units as they sell so gross margin per ASIN reflects real product cost and Amazon&rsquo;s fee load. Inventory-heavy sellers often need accrual basis to see true margin; we&rsquo;ll tell you if cash basis is hiding it." },
    { q: "How are reserve balances and unavailable funds handled?", a: "Amazon often holds back a reserve, so a settlement can deposit less than you actually earned. We track the reserve balance and unavailable funds as a receivable until Amazon releases them, so a short deposit is never mistaken for lost revenue and your cash position stays accurate period to period." },
    { q: "Amazon collects sales tax for me — do I still need anything done?", a: "As a marketplace facilitator, Amazon generally collects and remits sales tax on its marketplace sales in most states. That does not remove the need to record that tax correctly &mdash; it should be booked as a pass-through, never as your income and never filed a second time. Separately, you may still have your own <a href=\"/glossary/sales-tax-nexus/\">nexus</a>, registration, or filing obligations, for example from sales made off Amazon. We keep the records and reconcile; the nexus determination and any filing stay with your CPA, EA, or the state authority." },
    { q: "What does Amazon seller bookkeeping cost, and where do we start?", a: "Pricing depends on settlement volume, number of marketplaces, FBA inventory complexity, and how much cleanup is needed; it&rsquo;s quoted as a fixed monthly fee against a written scope with no hourly billing &mdash; see our <a href=\"/pricing/\">pricing</a> for monthly and cleanup ranges. Most sellers come to us mid-mess, so we usually start with a cleanup to untangle netted settlements and rebuild FBA inventory, then move into accurate monthly bookkeeping. To get a fixed-fee scope for your situation, call us at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Settlement reconciliation, FBA inventory/COGS, reserves, facilitator-tax recording &middot; nexus &amp; income-tax filing stay with your CPA/EA or state authority" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or Amazon.com, Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/amazon-sellers/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/amazon-seller-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#amz-definition","#amz-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Amazon Sellers","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Amazon Seller Accounting","serviceType":"Amazon seller accounting and FBA bookkeeping","description":"Settlement-report reconciliation, FBA inventory and COGS tracking, reserve-balance handling, multi-marketplace bookkeeping, and correct recording of marketplace-facilitator sales tax for U.S. Amazon sellers, delivered in QuickBooks by Certified ProAdvisors. Independent firm; not affiliated with Intuit Inc. or Amazon.com, Inc. Does not file income taxes and does not make nexus determinations — coordinates with the client's CPA, EA, or state authority.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. Amazon sellers using FBA and Seller Central"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Amazon seller accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What Amazon seller accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Amazon seller accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
