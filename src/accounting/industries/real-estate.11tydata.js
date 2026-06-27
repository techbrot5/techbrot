/* /accounting/industries/real-estate/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor).
 * FROZEN CONTRACT: tmp/contract-acctind-realestate.txt (34 headings, 7 FAQ) is the
 * ONLY authority for headings + FAQ. Old HTML accounting/industries/real-estate/
 * index.html read for BODY PROSE only. REFERENCE pattern: src/quickbooks/online.njk
 * (proven t-mofu cobalt) for structure/schema; cash-flow-management.11tydata.js for
 * the QAPage/ItemList/FAQPage schema model. Industry CONTENT/angle reused from
 * src/find-an-accountant/new-york/industries/real-estate.njk (NY analog) — substance
 * carried, scope made NATIONAL, NY-specific tax (1031 NY-state deferral, IT-2663,
 * NYC RPIE, Commercial Rent Tax, NY separate-deposit rule) DROPPED. t-mofu, tierClass
 * section--tier-guide, bodyClass page--mofu. CTA intent: accounting / file-review
 * (canonical lexicon).
 *
 * PROTOCOL NOTES: T2 the 34 frozen headings render verbatim at exact level; the 5
 * footer-chrome H2s (Accounting/QuickBooks/Company/Network) + the newsletter
 * "The monthly brief." are intentionally NOT rendered here — base-layout chrome owns
 * them / dropped per protocol. The 5 quick-answer questions render as NON-heading
 * ai-summary__question (<dt>) — they are NOT in the frozen heading inventory. T3 no
 * collapse: the book-anatomy comparison is a vs-scroll + vs-table. T4 FAQ: 7 contract
 * Q/A verbatim as faq__list AND FAQPage from the same array (no dedup). Schema set:
 * WebPage, BreadcrumbList, Service, ItemList (the 6 deliverables), FAQPage (all 7),
 * QAPage (from the 5-question ai-summary).
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews/clients; representative ranges
 * only; no AggregateRating; firm-level authorship (no founder/personal name in visible
 * content — David Westgate appears only in the WebPage.reviewedBy schema @id for
 * E-E-A-T). Independent firm — not affiliated with Intuit Inc.; bookkeeping/ProAdvisor
 * scope; does not file income taxes — coordinates with the client's CPA or EA. No
 * <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // "Real estate accounting, plainly." — definition prose (from old TL;DR body, enriched, NATIONAL).
  definition: [
    "Real estate runs on <strong>properties, not periods</strong>. A company-wide ledger can show the business made money while hiding which building earned it after debt service, capital expense, and management &mdash; and which one quietly loses money every month. Real property accounting needs a clean <strong>per-property and often per-unit profit and loss</strong> (built in QuickBooks with Classes or sub-customers), <strong>security deposits and owner funds booked as liabilities</strong> rather than income, mortgage payments split into <strong>principal, interest, and escrow</strong>, and improvements <strong>capitalized and depreciated</strong> rather than expensed.",
    "Get any of it wrong and your per-property profit is fiction and your tax basis is off. Many investors also hold each building in its own <strong>LLC</strong> &mdash; which only protects them if the books respect each entity&rsquo;s separation instead of commingling everything &mdash; and depreciation, cost segregation, and 1031-exchange recordkeeping all depend on a fixed-asset and basis schedule kept accurate year-round, not reconstructed under deadline.",
    "<strong>TechBrot</strong>&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> set this up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, reconcile your property-management software into it, handle deposits, owner draws, depreciation, and fixed assets correctly, keep it accurate monthly, and deliver clean financials your CPA can file from. For owners ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> adds the judgment layer on top. Independent firm &mdash; not affiliated with Intuit Inc.; does not file income taxes, and coordinates with your CPA or EA.",
  ],

  // "Real estate accounting, in five questions." — NON-heading quick answers (rendered as <dt>).
  aiSummary: [
    { q: "Why is real estate bookkeeping harder?", a: "Income and cost must be tracked <strong>per property and per unit</strong>; security deposits and owner funds are <strong>liabilities, not income</strong>; mortgage payments split into principal, interest, and escrow; and improvements must be capitalized and depreciated, not expensed &mdash; so a single company-wide ledger can&rsquo;t tell you whether an individual property is making money." },
    { q: "Do you track income and expenses per property?", a: "Yes. We configure QuickBooks &mdash; typically with <strong>Classes or sub-customers</strong> &mdash; so each property and unit has its own profit and loss, not one company-wide number, for a single rental or a portfolio across several entities." },
    { q: "Can you handle security deposits and owner draws?", a: "Yes. Deposits and owner funds are booked as <strong>liabilities</strong>, kept off the income statement, with owner distributions tracked and trust or escrow balances reconciled to the bank. Trust-account licensing rules are confirmed with your broker or attorney; we keep the records and reconciliation behind them." },
    { q: "Do you handle depreciation and mortgages?", a: "We split mortgage payments into <strong>principal, interest, and escrow</strong>, capitalize improvements onto a fixed-asset and depreciation schedule, separate repairs from improvements, and keep exchange-ready basis records &mdash; coordinating cost segregation and method with your CPA. TechBrot does not file income taxes." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong>, driven by the number of properties and units, owner-fund or trust handling, the property software in use, and reporting needs. No hourly billing. Intensive portfolio advisory is part of a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement." },
  ],

  // "Three places owners lose the numbers." — 3 frozen H3s verbatim (grid-3 buyer-cards).
  challenges: [
    { signal: "Per-property profit is invisible", title: "Everything booked company-wide.", body: "Rent and expenses land in one ledger with no property or unit dimension. You see total income, but not which building carries the portfolio and which one quietly loses money every month &mdash; so hold, refinance, and sell decisions run on feel. <strong>The fix:</strong> per-property and per-unit tracking in QuickBooks, with income, expenses, and capital costs assigned to each property so every one has a real P&amp;L." },
    { signal: "Deposits &amp; owner funds are wrong", title: "Liabilities booked as income.", body: "Security deposits hit income, owner funds get commingled, and distributions aren&rsquo;t tracked &mdash; so revenue is overstated, the balance sheet is wrong, and trust or escrow balances don&rsquo;t reconcile. <strong>The fix:</strong> deposits and owner funds booked as liabilities, owner draws tracked cleanly, and trust/escrow balances reconciled to the bank every month. Trust-account licensing stays with your broker or attorney." },
    { signal: "Basis &amp; depreciation are silent", title: "Improvements expensed, mortgages misbooked.", body: "Whole mortgage payments booked as expense, improvements expensed instead of capitalized, repairs and capital costs blended together &mdash; so your basis is wrong and your CPA inherits a mess at tax time, and a 1031 exchange has no clean records to stand on. <strong>The fix:</strong> mortgages split into principal, interest, and escrow; improvements capitalized onto a fixed-asset and depreciation schedule; repairs kept separate from capital costs, year-round." },
  ],

  // "Real estate accounting, done by an expert." — 6 frozen H3s verbatim (grid-3 buyer-cards). Also the ItemList deliverables.
  handle: [
    { num: "01 &middot; Per-property books", title: "Property &amp; unit-level bookkeeping", body: "Income, expenses, and capital costs tracked to each property and unit in QuickBooks &mdash; using Classes or sub-customers &mdash; so every property carries its own monthly P&amp;L, reportable by property, by entity, or across the whole portfolio.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Deposits &amp; owners", title: "Deposits, owner funds &amp; reconciliation", body: "Security deposits and owner funds booked as liabilities and kept off the income statement, owner distributions tracked correctly, and property-management trust or escrow balances reconciled to the bank every month.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Assets &amp; debt", title: "Depreciation &amp; mortgage tracking", body: "Mortgages split into principal, interest, and escrow; improvements capitalized and depreciated; repairs kept separate from capital costs; and cost-segregation and 1031-exchange basis records kept exchange-ready &mdash; with method and tax treatment coordinated with your CPA.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Cleanup", title: "Property-book cleanup", body: "Untangle commingled funds, reclassify mis-booked deposits and improvements, reconstruct adjusted basis, and reconcile each property and entity to a known-good baseline &mdash; then keep it clean monthly.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "05 &middot; Setup", title: "QuickBooks setup &amp; integrations", body: "A real-estate chart of accounts, property and unit structure, entity separation, and the right apps connecting your property-management software to QuickBooks cleanly &mdash; rent, fees, and disbursements flowing into one ledger.", href: "/quickbooks/setup/", cta: "QuickBooks setup &rarr;" },
    { num: "06 &middot; Advisory", title: "Portfolio advisory", body: "As you grow, fractional CFO advisory on acquisition analysis, refinancing, cash flow, and owner distributions &mdash; the judgment layer above the books, built on real per-property numbers.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // BOOK ANATOMY — content-to-goal comparison table (vs-scroll + vs-table). National, real specificity.
  anatomy: [
    { cap: "Profit reporting", re: "P&amp;L by individual property and unit, by entity, and across the portfolio", std: "One company-wide income statement" },
    { cap: "Security deposits", re: "Booked as a liability, kept off income, reconciled to the bank", std: "Often hit income and overstate revenue" },
    { cap: "Owner funds &amp; draws", re: "Tracked as distributions; trust / escrow reconciled monthly", std: "Commingled with operating cash" },
    { cap: "Mortgage payments", re: "Split into principal, interest, and escrow", std: "Whole payment booked as one expense" },
    { cap: "Improvements", re: "Capitalized onto a fixed-asset and depreciation schedule", std: "Expensed in the month paid" },
    { cap: "Repairs vs. capital", re: "Separated, so basis and deductions are correct", std: "Blended together" },
    { cap: "1031 / cost segregation", re: "Adjusted basis and improvements tracked year-round, exchange-ready", std: "Reconstructed under deadline, if at all" },
    { cap: "Entity separation", re: "Each LLC&rsquo;s records kept distinct, consolidated when needed", std: "Everything in one set of books" },
    { cap: "Property software", re: "AppFolio / Buildium / Yardi reconciled into QuickBooks", std: "Lives in a disconnected second system" },
  ],
  anatomyNote: "We keep the books and the asset records correct. Depreciation method, cost-segregation studies, and final tax treatment stay with your CPA or EA &mdash; we maintain the per-property data and reconciliation behind them, and your Qualified Intermediary runs any 1031 exchange. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // INTEGRATIONS — property tools reconciled with QuickBooks (checks-list). National platform set.
  integrations: [
    "QuickBooks Online &mdash; the per-property and per-entity ledger",
    "AppFolio &mdash; property management synced to per-property books",
    "Buildium &mdash; rent roll and tenant ledgers reconciled to QuickBooks",
    "Yardi &mdash; commercial and multifamily data into the books",
    "DoorLoop &mdash; rent, fees, and disbursements reconciled",
    "Rent Manager &mdash; lease and CAM data into the books",
    "Stessa &mdash; single-family and small-portfolio tracking",
    "Avail &amp; TenantCloud &mdash; small-landlord rent collection reconciled",
  ],
  integrationsNote: "On different software? If it tracks rent and pays out to a bank account, we can reconcile it &mdash; rent, fees, and disbursements flow into clean per-property books instead of living in two disconnected systems. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — 4 frozen H3s verbatim (grid-2 buyer-cards).
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your properties, units, software, entity structure, and owner-fund setup &mdash; and where the books are breaking. No pitch." },
    { phase: "Phase 2", title: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to reclassify deposits and improvements and reconstruct basis, plus QuickBooks setup with per-property and per-entity structure." },
    { phase: "Phase 3", title: "Monthly reconciliation", body: "Every property and account reconciled monthly, with deposits, owner funds, mortgages, depreciation, rent roll, and common-charge / CAM all maintained and current." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "A monthly package with per-property P&amp;L and portfolio view, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on acquisition, refinancing, and cash flow as you grow." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Once each property reconciles and your per-property numbers are real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do next?&rdquo; Which property to refinance, whether the next acquisition pencils out, how much owners can safely draw, when to 1031 into something larger, when a unit&rsquo;s returns no longer justify holding it &mdash; the decisions that actually move a real estate business.",
    "That&rsquo;s where <strong>real estate advisory</strong> comes in: a Certified ProAdvisor who knows your portfolio turning the numbers into acquisition, financing, and cash-flow decisions. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. Exchange execution and tax strategy stay with your Qualified Intermediary and your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name in visible content).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Per-property &amp; per-unit bookkeeping, deposit/owner-fund handling, depreciation &amp; basis &middot; income-tax filing and depreciation method coordinated with your CPA or EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — 4 frozen H3s verbatim (grid-2 buyer-cards).
  related: [
    { title: "Bookkeeping cleanup", body: "Untangle commingled funds, reconstruct adjusted basis, and rebuild accurate per-property books to a CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Payroll management", body: "Payroll for property-management staff and on-site teams, integrated with your books.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean property books into acquisition, financing, and cash-flow decisions &mdash; the judgment layer beyond the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; ecommerce, construction, restaurant, healthcare, law, nonprofit.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract (questions verbatim; answers preserved, append-only).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  faq: [
    { q: "Why is real estate accounting different from regular bookkeeping?", a: "Real estate runs on properties, not just periods. Income and expense must be tracked per property and often per unit, security deposits and owner funds are liabilities rather than income, mortgage payments split across principal, interest, and escrow, and improvements must be capitalized and depreciated rather than expensed. Standard bookkeeping that only tracks company-wide income and expense cannot tell you whether an individual property is actually making money." },
    { q: "Do you track income and expenses per property?", a: "Yes. We configure QuickBooks so income, expenses, and capital costs are tracked to each property and unit, typically using Classes or sub-customers, giving you a real per-property profit and loss instead of one company-wide number." },
    { q: "Can you handle security deposits, owner draws, and trust funds?", a: "Yes. We book security deposits and owner funds as liabilities, keep them off the income statement, track owner distributions correctly, and reconcile <a href=\"/accounting/industries/property-management/\">property-management</a> trust or escrow balances so your records match the bank. State trust-account licensing rules are confirmed with your broker or attorney; we maintain the books and reconciliation behind them." },
    { q: "Do you handle depreciation, mortgages, and capital improvements?", a: "Yes. We split mortgage payments into principal, interest, and escrow, capitalize improvements onto a fixed-asset and <a href=\"/glossary/depreciation/\">depreciation</a> schedule, and separate repairs from improvements so your basis and deductions are correct. TechBrot does not file income taxes; we coordinate with your CPA or EA on depreciation method and tax treatment." },
    { q: "Do you work with AppFolio, Buildium, and other property software?", a: "Yes. We reconcile property-management and investor platforms such as AppFolio, Buildium, Yardi, DoorLoop, Rent Manager, and Stessa to QuickBooks, so rent, fees, and disbursements flow into clean per-property books rather than living in two disconnected systems." },
    { q: "What does real estate bookkeeping cost?", a: "Pricing depends on the number of properties and units, whether you manage owner funds or trust accounts, the property software in use, and reporting needs. Real estate engagements are quoted as a fixed monthly fee against a written scope with no hourly billing. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "Do you offer advice, or just bookkeeping?", a: "Both. Accurate per-property books come first; then a Certified ProAdvisor can turn them into decisions — acquisition analysis, refinancing and cash-flow planning, owner-distribution strategy, and portfolio-level reporting — through <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO advisory</a>. As automation handles routine data entry, this advisory layer is where the real value sits." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/real-estate/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Real Estate Accounting & QuickBooks Bookkeeping","description":"Expert real estate accounting and QuickBooks bookkeeping — per-property and per-unit tracking, security-deposit and owner-fund handling, depreciation and basis, and property-software integration by Certified ProAdvisors for U.S. landlords, investors, and property managers.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/accounting-industries-real-estate.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-realestate-in-brief-text","#acctind-realestate-ai-summary-list"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Real Estate","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Real Estate Accounting & Bookkeeping","serviceType":"Real estate accounting and QuickBooks bookkeeping","description":"Per-property and per-unit bookkeeping, security-deposit and owner-fund tracking, fixed-asset and depreciation handling, 1031-exchange and cost-segregation recordkeeping, and property-management software integration for U.S. landlords, real estate investors, brokerages, and property managers, delivered by Certified QuickBooks ProAdvisors. Independent firm; does not file income taxes — coordinates with the client's CPA, EA, and Qualified Intermediary.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. landlords, real estate investors, brokerages, and property managers"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Real estate accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What real estate accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Real estate accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
