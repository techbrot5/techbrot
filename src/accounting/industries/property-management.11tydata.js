/* /accounting/industries/property-management/ — high-fee industry page on cobalt
 * t-mofu. REFERENCE pattern: src/accounting/industries/real-estate.njk +
 * .11tydata.js (structure, schema model, stripTags). t-mofu, tierClass
 * section--tier-guide, bodyClass page--mofu. CTA intent: accounting / file-review
 * (canonical lexicon).
 *
 * DISTINCT ANGLE: real-estate.njk owns the OWNER / investor side (managing your
 * OWN property). THIS page owns the MANAGER side (managing OTHER people's
 * property): tenant security deposits as trust/liability, monthly owner
 * statements + owner draws + 1099-MISC to owners, management-fee revenue
 * recognition, CAM reconciliation, trust vs operating account separation, and
 * property-management software (AppFolio / Buildium / Rent Manager / Propertyware)
 * reconciled to QuickBooks. We LINK to /accounting/industries/real-estate/ for the
 * owner side rather than restating it.
 *
 * HONESTY (R4/R5/R9) — TRUST-FUND BOUNDARY (founder ruling, absolute): TechBrot
 * keeps records and reconciles ONLY. We never hold, control, sign on, or disburse
 * tenant security deposits, owner funds, or any trust/escrow money. We maintain the
 * deposit/trust LEDGER and reconcile it; the money stays in the manager's own trust
 * account under their control. Broker/property-manager trust-account compliance and
 * any disbursement decision stay with the manager and their attorney; defer trust-
 * account rules to the state real-estate commission / the manager's attorney.
 * Deposits/owner funds are liabilities, not income. We do NOT file income taxes or
 * set depreciation/tax treatment — the client's CPA/EA does. Canonical pricing only
 * (see /pricing/). No fabricated stats/clients/reviews; no AggregateRating/Review
 * schema. Founder-name-zero in visible content (David Westgate only in WebPage
 * .reviewedBy schema @id for E-E-A-T). Independent firm — not affiliated with
 * Intuit Inc. No <strong> in the dark hero subheading. Representative scenarios
 * labeled. Schema set: WebPage, BreadcrumbList, Service, ItemList (6 deliverables),
 * FAQPage (all), QAPage (from the 5-question ai-summary). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // "Property management accounting, plainly." — definition prose (manager-side angle).
  definition: [
    "A property-management company&rsquo;s books are unusual because most of the money moving through them <strong>isn&rsquo;t the company&rsquo;s</strong>. Rent collected belongs to the owners; tenant <strong>security deposits</strong> belong to the tenants and must be returned or applied under state law; only the <strong>management fee</strong> &mdash; usually a percentage of collected rent, plus leasing, renewal, and maintenance-markup fees &mdash; is actually the firm&rsquo;s revenue. Booked correctly, deposits and owner funds sit on the balance sheet as <strong>liabilities</strong>, the trust account reconciles to the penny, and the income statement shows only fee income.",
    "Booked carelessly, deposits hit income, owner money and operating cash commingle, owner statements don&rsquo;t tie to the bank, and a routine state real-estate-commission audit becomes a license problem. On top of that, every owner needs a clean <strong>monthly statement</strong> and a correct <strong>owner draw</strong>, and at year-end each owner who received rent needs accurate <strong>1099-MISC</strong> data. None of that survives if the underlying ledger is wrong.",
    "<strong>TechBrot</strong>&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> keep this ledger correct inside your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, reconcile your property-management software into it, maintain the deposit and owner-fund liability schedules, recognize management-fee revenue properly, produce owner statements and owner-draw records, and prepare 1099-MISC data for your CPA. We keep records and reconcile only &mdash; we never hold, sign on, or disburse trust money. Managing your <em>own</em> portfolio as an owner? See <a href=\"/accounting/industries/real-estate/\">real estate accounting</a> instead. Independent firm &mdash; not affiliated with Intuit Inc.; does not file income taxes, and coordinates with your CPA or EA.",
  ],

  // "Property management accounting, in five questions." — NON-heading quick answers (rendered as <dt>).
  aiSummary: [
    { q: "How is property management accounting different?", a: "Most of the money a manager handles belongs to other people: rent is the owners&rsquo;, security deposits are the tenants&rsquo;, and only the <strong>management fee</strong> is the firm&rsquo;s revenue. Deposits and owner funds must be booked as <strong>liabilities, not income</strong>, kept in a trust account separate from operating cash, and reconciled to the bank every month &mdash; while owners get clean monthly statements and correct draws." },
    { q: "Do you hold or disburse our trust and deposit funds?", a: "No. TechBrot keeps records and reconciles only &mdash; we <strong>never hold, control, sign on, or disburse</strong> tenant deposits, owner funds, or any trust or escrow money. We maintain the deposit and trust <strong>ledger</strong> and reconcile it; the money stays in your own trust account under your control. Trust-account compliance and every disbursement decision stay with you and your attorney." },
    { q: "Can you produce owner statements, draws, and 1099s?", a: "Yes. We produce <strong>monthly owner statements</strong> that tie to the bank, record owner draws and the management fees withheld against them, and prepare year-end <strong>1099-MISC</strong> data for each owner who received rent &mdash; ready for your CPA to file. We keep the records; we do not file income-tax returns." },
    { q: "How do you handle security deposits and CAM?", a: "Security deposits are booked as a <strong>liability per tenant</strong>, kept off income, and reconciled to the trust account. For commercial portfolios we track <strong>CAM</strong> &mdash; common-area maintenance &mdash; charges, owner pass-throughs, and the year-end reconciliation between estimated and actual recoverable expense, so tenant bill-backs and owner books agree." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong>, driven by the number of doors and owners, trust-account complexity, the property software in use, and reporting needs &mdash; within the firm&rsquo;s standard ranges on the <a href=\"/pricing/\">pricing page</a> (monthly bookkeeping <strong>$400&ndash;$2,500+/mo</strong>; a one-time cleanup <strong>$1,500&ndash;$15,000+</strong> depending on scope). No hourly billing. Portfolio-level advisory is a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement." },
  ],

  // "Three places managers put their license at risk." — 3 H3s (grid-3 buyer-cards).
  challenges: [
    { signal: "Deposits booked as income", title: "Other people&rsquo;s money on your P&amp;L.", body: "Tenant security deposits land in income and owner rent gets mixed with fee revenue &mdash; so the firm looks far more profitable than it is, the balance sheet understates what you owe back, and a deposit you must return one day was already &lsquo;spent&rsquo; on paper. <strong>The fix:</strong> deposits and owner funds booked as per-tenant and per-owner liabilities, with only the management fee recognized as revenue." },
    { signal: "Trust &amp; operating commingled", title: "One account doing two jobs.", body: "Owner funds, deposits, and the firm&rsquo;s own cash run through the same account, so the trust balance never cleanly reconciles and a state real-estate-commission audit has nothing solid to stand on. <strong>The fix:</strong> the trust ledger kept fully separate from operating in the books and reconciled to the trust bank account monthly. Trust-account licensing and the actual fund movement stay with you and your attorney &mdash; we keep and reconcile the records behind them." },
    { signal: "Owner statements don&rsquo;t tie out", title: "Statements the bank can&rsquo;t back up.", body: "Owners get statements that don&rsquo;t match deposits, draws, or fees, 1099-MISC numbers are reconstructed at year-end, and CAM reconciliations slip &mdash; so owners lose trust and disputes get expensive. <strong>The fix:</strong> monthly owner statements that reconcile to the bank, owner draws and withheld fees tracked cleanly, CAM reconciled, and 1099-MISC data kept accurate year-round." },
  ],

  // "Property management accounting, done by an expert." — 6 H3s (grid-3 buyer-cards). Also ItemList deliverables.
  handle: [
    { num: "01 &middot; Trust ledger", title: "Deposit &amp; trust-ledger bookkeeping", body: "Tenant security deposits and owner funds booked as liabilities per tenant and per owner, kept off income, with the trust ledger maintained separately from operating cash and reconciled to the trust bank account every month. We keep the records; the funds stay in your account, under your control.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "02 &middot; Owner statements", title: "Owner statements &amp; owner draws", body: "Monthly owner statements that tie to the bank, owner draws recorded against collected rent, and management and leasing fees withheld and recognized correctly &mdash; so every owner sees an accurate, defensible accounting of their property each month.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03 &middot; Fee revenue", title: "Management-fee revenue recognition", body: "Management, leasing, renewal, late, and maintenance-markup fees separated from owner rent and recognized as the firm&rsquo;s revenue when earned &mdash; so your income statement shows true fee income, not pass-through money that was never yours.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; CAM &amp; 1099s", title: "CAM reconciliation &amp; 1099-MISC data", body: "For commercial portfolios, CAM charges, owner pass-throughs, and the year-end estimated-vs-actual reconciliation kept straight; and 1099-MISC data prepared for each owner who received rent &mdash; ready for your CPA to file. We do not file the returns.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "05 &middot; Cleanup &amp; setup", title: "Cleanup, setup &amp; software integration", body: "Untangle commingled trust and operating funds, reclassify mis-booked deposits, and rebuild a property-management chart of accounts &mdash; then connect AppFolio, Buildium, Rent Manager, or Propertyware so rent, fees, and disbursements reconcile into one QuickBooks file.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Advisory", title: "Management-company advisory", body: "As you add doors, fractional CFO advisory on fee structure, owner profitability, staffing, and the cash flow of a growing management book &mdash; the judgment layer above the books, built on accurate fee and trust numbers.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // TRUST BOUNDARY — the founder-ruling lane statement (section prose). Stated plainly.
  boundary: [
    "This is the most important sentence on the page: <strong>TechBrot keeps records and reconciles only. We never hold, control, sign on, or disburse tenant security deposits, owner funds, or any trust or escrow money.</strong> We maintain the deposit and trust <em>ledger</em> in your QuickBooks file and reconcile it to your bank &mdash; the money itself stays in your own trust account, moved only by you.",
    "That means broker and property-manager <strong>trust-account compliance</strong>, and every decision about <em>when and to whom</em> funds are disbursed, stay with you. Trust-account rules vary by state and are set by your state real-estate commission; on any question of what the rules require or whether a specific disbursement is permitted, the authority is the <strong>commission and your attorney</strong> &mdash; not your bookkeeper. We build the records that let you demonstrate compliance; we do not make the compliance decision.",
    "We also stay in the bookkeeping lane on tax: deposits and owner funds are <strong>liabilities, not income</strong>, and TechBrot does not file income-tax returns or set depreciation or tax treatment &mdash; your CPA or EA does, working from the clean records we keep. <a href=\"/contact/?intent=accounting\">Confirm the boundaries on a discovery call &rarr;</a>",
  ],

  // BOOK ANATOMY — content-to-goal comparison table (vs-scroll + vs-table).
  anatomy: [
    { cap: "Tenant deposits", pm: "Booked as a per-tenant liability, off income, reconciled to trust", std: "Often hit income and overstate revenue" },
    { cap: "Owner rent collected", pm: "Held as an owner liability until drawn, never the firm&rsquo;s revenue", std: "Mixed into one income figure" },
    { cap: "Management fees", pm: "Separated and recognized as the firm&rsquo;s fee revenue when earned", std: "Blended with pass-through rent" },
    { cap: "Trust vs operating", pm: "Two distinct ledgers; trust reconciled to its own bank account", std: "One commingled account" },
    { cap: "Owner statements", pm: "Monthly, per owner, reconciled to the bank", std: "Not produced, or built from memory" },
    { cap: "Owner draws", pm: "Recorded against collected rent, net of withheld fees", std: "Untracked transfers" },
    { cap: "CAM (commercial)", pm: "Charges, pass-throughs, and year-end true-up reconciled", std: "Estimated and never reconciled" },
    { cap: "1099-MISC to owners", pm: "Owner rent data kept accurate year-round", std: "Reconstructed under deadline, if at all" },
    { cap: "Property software", pm: "AppFolio / Buildium / Rent Manager reconciled into QuickBooks", std: "Lives in a disconnected second system" },
  ],
  anatomyNote: "We keep the ledger and the reconciliations correct &mdash; the money never moves through us. Trust-account compliance and disbursement decisions stay with you and your attorney, depreciation and tax treatment stay with your CPA or EA, and your owners&rsquo; income-tax filing is theirs. Managing your own buildings as the owner? That&rsquo;s the <a href=\"/accounting/industries/real-estate/\">real estate accounting</a> lane. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // INTEGRATIONS — property-management tools reconciled with QuickBooks (checks-list).
  integrations: [
    "QuickBooks Online &mdash; the trust, owner, and fee ledger",
    "AppFolio &mdash; rent roll, owner ledgers, and trust activity reconciled to QuickBooks",
    "Buildium &mdash; tenant deposits, owner draws, and fees reconciled",
    "Rent Manager &mdash; lease, CAM, and disbursement data into the books",
    "Propertyware &mdash; single-family management portfolios reconciled",
    "Yardi Breeze &mdash; small-to-mid commercial and multifamily data into the books",
    "DoorLoop &mdash; rent, fees, and owner distributions reconciled",
    "Stripe &amp; ACH rent rails &mdash; collections matched to the trust ledger",
  ],
  integrationsNote: "On different management software? If it tracks rent, deposits, and owner disbursements, we can reconcile it &mdash; collections, fees, and draws flow into clean trust and operating books instead of living in two disconnected systems. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — 4 H3s (grid-2 buyer-cards).
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your doors, owners, trust setup, software, and fee structure &mdash; and where the books are breaking. No pitch, and a clear statement of what stays in your hands versus ours." },
    { phase: "Phase 2", title: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to separate trust from operating, reclassify mis-booked deposits, and rebuild a management chart of accounts, plus QuickBooks setup wired to your property software." },
    { phase: "Phase 3", title: "Monthly reconciliation", body: "Trust and operating accounts reconciled monthly, deposits and owner funds maintained as liabilities, management fees recognized, CAM kept current, and the trust ledger tied to the bank." },
    { phase: "Phase 4", title: "Statements &amp; advisory", body: "Monthly owner statements and draw records, year-round 1099-MISC data, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on fee structure and owner profitability as your management book grows." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Once the trust account reconciles and every owner statement ties to the bank, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;is the management company itself a good business?&rdquo; Which owners and properties are actually profitable to manage after the work they create, whether the fee structure covers the labor, how many doors a leasing coordinator can carry, and what the cash flow looks like as you take on the next portfolio &mdash; the decisions that move a management firm, not just its clients&rsquo; buildings.",
    "That&rsquo;s where <strong>management-company advisory</strong> comes in: a Certified ProAdvisor who knows your fee economics turning the numbers into pricing, staffing, and growth decisions. As automation commoditizes routine bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. Trust-account compliance stays with you and your attorney, and tax strategy stays with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name in visible content).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Deposit/owner-fund liability books, trust-ledger reconciliation, owner statements &amp; draws, fee recognition, CAM, 1099-MISC data &middot; records and reconciliation only &mdash; we never hold or disburse trust funds" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — 4 H3s (grid-2 buyer-cards).
  related: [
    { title: "Real estate accounting", body: "Managing your own buildings as an owner or investor? Per-property P&amp;L, depreciation, and owner-side basis live in the real estate lane &mdash; the counterpart to this manager-side page.", href: "/accounting/industries/real-estate/", cta: "Real estate accounting &rarr;" },
    { title: "Bookkeeping cleanup", body: "Separate commingled trust and operating funds, reclassify mis-booked deposits, and rebuild accurate owner-statement-ready books to a CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean fee and trust books into pricing, staffing, and growth decisions for the management company itself &mdash; the judgment layer beyond the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; ecommerce, construction, restaurant, healthcare, law, nonprofit.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // FAQ — 7 Q/A. visible faq__list = FAQPage schema (same array, NO dedup).
  faq: [
    { q: "How is property management accounting different from regular bookkeeping?", a: "A property manager handles money that mostly isn't the firm's: rent belongs to owners, security deposits belong to tenants, and only the management fee is the firm's revenue. Deposits and owner funds must be booked as liabilities rather than income, kept in a trust account separate from operating cash, and reconciled to the bank every month, while each owner receives a statement that ties out. Standard company-wide bookkeeping can't keep those three pools of money straight." },
    { q: "Do you hold, control, or disburse our trust funds and tenant deposits?", a: "No. TechBrot keeps records and reconciles only. We never hold, control, sign on, or disburse tenant security deposits, owner funds, or any trust or escrow money. We maintain the deposit and trust ledger and reconcile it to your bank; the money stays in your own trust account and is moved only by you. Trust-account compliance and every disbursement decision stay with you and your attorney." },
    { q: "How do you handle tenant security deposits?", a: "Security deposits are booked as a liability per tenant, kept off the income statement, and reconciled to the trust account so your records match the bank. They are returned or applied only by you under your state's rules; we keep the ledger that shows what is held for whom. State trust-account licensing rules are confirmed with your state real-estate commission or your attorney." },
    { q: "Can you produce monthly owner statements, owner draws, and 1099-MISC data?", a: "Yes. We produce monthly owner statements that reconcile to the bank, record owner draws against collected rent net of withheld management and leasing fees, and prepare year-end 1099-MISC data for each owner who received rent so it's ready for your CPA to file. TechBrot keeps the records and does not file income-tax returns." },
    { q: "Do you separate management fees from owner rent and handle CAM?", a: "Yes. We separate management, leasing, renewal, late, and maintenance-markup fees from owner rent and recognize them as the firm's fee revenue, so your income statement reflects what you actually earned. For commercial portfolios we track CAM charges, owner pass-throughs, and the year-end estimated-versus-actual reconciliation so tenant bill-backs and owner books agree." },
    { q: "Do you work with AppFolio, Buildium, and other property-management software?", a: "Yes. We reconcile property-management platforms such as AppFolio, Buildium, Rent Manager, Propertyware, Yardi Breeze, and DoorLoop to QuickBooks, so rent, deposits, fees, and owner disbursements flow into clean trust and operating books rather than living in two disconnected systems." },
    { q: "What does property management bookkeeping cost?", a: "Pricing depends on the number of doors and owners, trust-account complexity, the property software in use, and reporting needs, and is quoted as a fixed monthly fee against a written scope with no hourly billing. It falls within the firm's standard ranges on the pricing page — monthly bookkeeping from $400 to $2,500+ per month, and a one-time cleanup from $1,500 to $15,000+ depending on scope. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/property-management/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Property Management Accounting & QuickBooks Bookkeeping","description":"Expert property management accounting and QuickBooks bookkeeping — tenant security deposits as trust liabilities, monthly owner statements and draws, 1099-MISC to owners, management-fee revenue recognition, CAM reconciliation, and AppFolio/Buildium reconciled to QuickBooks by Certified ProAdvisors. Records and reconciliation only; we never hold or disburse trust funds.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/property-management-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-propmgmt-ai-summary","#acctind-propmgmt-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Property Management","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Property Management Accounting","serviceType":"Property management accounting and QuickBooks bookkeeping","description":"Tenant-deposit and owner-fund liability bookkeeping, trust-account ledger reconciliation, monthly owner statements and owner draws, management-fee revenue recognition, CAM reconciliation, 1099-MISC data preparation, and property-management software integration for U.S. property management companies, delivered by Certified QuickBooks ProAdvisors. Records and reconciliation only — TechBrot never holds, controls, signs on, or disburses trust or escrow funds; trust-account compliance and disbursement decisions stay with the manager and their attorney. Independent firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. residential and commercial property management companies"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Property management accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What property management accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Property management accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
