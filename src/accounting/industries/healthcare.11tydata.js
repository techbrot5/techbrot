/* /accounting/industries/healthcare/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor).
 * FROZEN CONTRACT: tmp/contract-acctind-healthcare.txt (34 headings, 7 FAQ) is the
 * ONLY authority for headings + FAQ. Old HTML accounting/industries/healthcare/
 * index.html read for BODY PROSE only. REFERENCE pattern: src/quickbooks/online.njk
 * + src/accounting/advisory/cash-flow-management.11tydata.js (proven t-mofu cobalt)
 * for structure/schema. Industry CONTENT/angle reused from the NY analog
 * (src/find-an-accountant/new-york/industries/healthcare.njk) — substance kept,
 * scope made NATIONAL, NY-specific tax/CPM/PC-PLLC-required framing dropped or
 * generalized (PC/PLLC offered nationally as common professional-entity structure,
 * not a NY mandate).
 *
 * SCHEMA (T4/critical): pageGraph emits WebPage, BreadcrumbList, Service,
 * ItemList (deliverables = the six `handle` services), FAQPage (all 7 contract
 * Q/A VERBATIM, NO dedup — single source of truth with the visible faq__list),
 * and QAPage (built from the 5-question aiSummary; modeled on
 * cash-flow-management.11tydata.js). QAPage + ItemList are NOT dropped.
 *
 * HONESTY (R5/R9): no fabricated stats, outcomes, reviews, or clients. No
 * AggregateRating. No review-card here — the 2 real Clutch reviews live on their
 * own proof surface and are NOT duplicated. Review byline is firm-level only; no
 * founder/personal name in visible content. David Westgate appears only in the
 * WebPage.reviewedBy schema @id (global Person, E-E-A-T). Independent firm — not
 * affiliated with Intuit Inc.; bookkeeping/ProAdvisor scope only — does NOT file
 * income taxes, provide medical billing/coding, give legal advice, set up
 * entities, or certify HIPAA compliance; coordinates with the client's CPA,
 * billing company, and counsel. Footer chrome (Accounting/QuickBooks/Company/
 * Network) + newsletter ("The monthly brief.") intentionally NOT rendered —
 * global chrome / dropped per protocol T2. The 5 quick-answer questions render as
 * NON-heading ai-summary__question to keep the frozen heading inventory exact.
 * FAQ append-only: each contract answer preserved verbatim; enrichment may append. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — plain-terms prose (from old TL;DR body, enriched). (H2: Healthcare accounting, plainly.)
  definition: [
    "Healthcare books break in ways ordinary bookkeeping doesn&rsquo;t: a practice almost never collects what it bills, so <strong>gross charges, insurance contractual adjustments, write-offs, patient responsibility, and net collections</strong> are all different numbers &mdash; and revenue is only real once it&rsquo;s in the bank. A claim is billed at the practice&rsquo;s standard rate, the payer allows a lower <em>contracted</em> amount, the difference is a contractual write-off (not a loss to chase), part is the patient&rsquo;s responsibility, and only the deposit that lands is collected revenue. Record the lump deposit as income and the whole picture &mdash; your real collection rate, which payers underpay, what&rsquo;s still outstanding &mdash; disappears.",
    "Add <strong>per-provider and per-location performance</strong>, payroll for clinical and administrative staff, <strong>patient credit balances that must be refunded</strong> rather than absorbed, and the need to keep protected health information out of the accounting records, and generic bookkeeping that only tracks company-wide income and expense falls short. <a href=\"/quickbooks/proadvisor-team/\">TechBrot&rsquo;s Certified QuickBooks ProAdvisors</a> reconcile payer deposits to your own <a href=\"/quickbooks/online/\">QuickBooks</a> file from financial summaries, track <a href=\"/accounting/bookkeeping/\">billed-versus-collected revenue</a> by provider and location, handle payroll and refunds, and deliver financials your CPA can file from. We are not a medical billing or coding company, and accounting never requires PHI. For practices ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> adds the judgment layer on top. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block; NON-heading questions).
  // QAPage is built from THIS array. (H2: Healthcare accounting, in five questions.)
  aiSummary: [
    { q: "Why is healthcare bookkeeping harder?", a: "Practices rarely collect what they bill. <strong>Gross charges, contractual adjustments, write-offs, patient responsibility, and net collections</strong> are all different numbers, and revenue is only real once collected &mdash; plus per-provider and per-location performance, clinical payroll, and patient credit balances that have to be refunded. Bookkeeping that records only the deposit misses all of it." },
    { q: "Do you reconcile insurance and payer deposits?", a: "Yes. Payer deposits are reconciled to your QuickBooks file from remittance and deposit summaries, separating gross charges, contractual adjustments, patient payments, and net collections &mdash; so you see <strong>billed versus collected</strong>, not one lump deposit. We work from financial summaries, never PHI." },
    { q: "Can you track per-provider or per-location profit?", a: "Yes. We configure QuickBooks &mdash; typically with <strong>Classes or location tracking</strong> &mdash; so each provider and location has its own profit and loss alongside a consolidated practice view, which is what compensation, hiring, and payer-mix decisions actually need." },
    { q: "How do you handle HIPAA and patient data?", a: "Accounting doesn&rsquo;t require protected health information. We work from financial summaries &mdash; deposit reports and remittance totals &mdash; and keep PHI out of the books. We are not a medical billing or coding company and do not certify HIPAA compliance; that stays with your practice and its counsel." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by the number of providers and locations, payer and payroll complexity, and reporting needs. No hourly billing. TechBrot does not file income taxes; we coordinate with your CPA or EA. See <a href=\"/pricing/\">pricing</a>." },
  ],

  // CHALLENGES — three places practices lose the numbers (grid-3 buyer-cards). 3 frozen H3s VERBATIM.
  // (H2: Three places practices lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Revenue is overstated", title: "Billed treated as collected.", body: "Gross charges get booked as income while contractual adjustments and write-offs are ignored, so revenue looks far larger than what hits the bank and you can&rsquo;t see your real collection rate. The fix is payer deposits reconciled to QuickBooks with gross charges, adjustments, patient payments, and net collections separated &mdash; revenue recognized on what&rsquo;s actually collected. If your books show charges rather than collections, your profit is fiction and your taxes may be overstated. Fixable from financial summaries, no PHI required." },
    { signal: "Provider margin is invisible", title: "No per-provider or location view.", body: "Income and cost sit in one practice-wide ledger, so you can&rsquo;t tell which providers, locations, or service lines carry the practice &mdash; or how the payer mix affects each. The fix is provider- and location-level tracking in QuickBooks, using Classes or location tracking, so profitability and payer mix are visible and decision-ready. Compensation and hiring decisions made without per-provider numbers are guesses; real data changes them." },
    { signal: "Refunds &amp; data are exposed", title: "Credit balances and PHI mishandled.", body: "Patient overpayments get booked as income instead of refundable liabilities, and protected health information ends up in accounting records where it shouldn&rsquo;t be &mdash; both create real exposure. The fix is patient credit balances booked as liabilities so refunds are tracked, and a clean process that keeps <a href=\"/accounting/bookkeeping/\">the books</a> built from financial summaries, never PHI. We keep the records and the data handling right; HIPAA-compliance certification and income-tax filing stay with your counsel and CPA, and we coordinate cleanly." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s VERBATIM.
  // ItemList schema (deliverables) is built from THIS array.
  // (H2: Healthcare accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01", title: "Payer deposit reconciliation", body: "Payer and patient deposits reconciled to QuickBooks from remittance and deposit summaries &mdash; gross charges, contractual adjustments, patient payments, and net collections separated &mdash; so billed-versus-collected and your true collection rate are visible.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Per-provider &amp; location books", body: "Income and cost tracked by provider and location with QuickBooks Classes or location tracking, so each has a real P&amp;L alongside a consolidated view of the whole practice &mdash; the visibility behind compensation and growth decisions.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03", title: "Payroll &amp; provider compensation", body: "Payroll for clinical and administrative staff integrated with the books, with provider-compensation tracking and clean W-2-versus-1099 treatment where per-diem or locum providers work alongside employed clinicians.", href: "/accounting/payroll-management/", cta: "Payroll management &rarr;" },
    { num: "04", title: "Practice-book cleanup", body: "Behind or built on charges-as-income? We reclassify to collection-based revenue, rebuild patient credit balances as liabilities, and reconcile each account to a known-good baseline &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "05", title: "QuickBooks setup for practices", body: "A healthcare chart of accounts, provider and location structure, and the right connections from your practice-management, billing, and payment systems into QuickBooks &mdash; built so payer deposits reconcile from day one.", href: "/quickbooks/setup/", cta: "QuickBooks setup &rarr;" },
    { num: "06", title: "Practice advisory", body: "As the practice grows, fractional CFO advisory on provider profitability, payer mix, staffing against revenue, and cash flow &mdash; the judgment layer above the books, where the value now lives.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — practice systems reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you run the practice.)
  integrations: [
    "QuickBooks Online &mdash; the practice ledger payer deposits reconcile into",
    "athenahealth &mdash; deposits and adjustments exported to QuickBooks",
    "Tebra (Kareo) &mdash; practice-management payments matched to deposits",
    "SimplePractice &mdash; behavioral-health billing reconciled",
    "Jane &mdash; clinic deposits and patient payments reconciled",
    "DrChrono &mdash; EHR and billing reconciled to the books",
    "AdvancedMD &mdash; remittance and deposit summaries to QuickBooks",
    "Stripe &amp; Square &mdash; patient copays and card payments",
  ],
  integrationsNote: "On a different EHR or practice-management system? We reconcile from <strong>financial summaries</strong> &mdash; deposit and remittance reports &mdash; not protected health information, so if your system exports deposits and adjustments to QuickBooks we can build the workflow around it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s VERBATIM.
  // (H2: From billed-not-banked to collection-based books. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your providers, locations, billing and payment systems, payer mix, and where the books are breaking. No pitch." },
    { phase: "Phase 2", title: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to move from charges to collection-based revenue, plus QuickBooks setup with provider and location structure and reconciliation workflows." },
    { phase: "Phase 3", title: "Monthly reconciliation", body: "Payer deposits and accounts reconciled monthly, with per-provider performance, payroll, and patient refunds maintained and contractual adjustments separated from real revenue." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "A monthly package with per-provider and per-location margin and collection-rate reporting, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> as the practice grows." },
  ],

  // BILLED-VS-COLLECTED — load-bearing specificity table (vs-scroll + vs-table, no collapse per T3).
  // Preserves the baseline contractual-adjustment / collection-based-revenue substance as section content.
  billedCollected: [
    { figure: "Gross charge", what: "The practice&rsquo;s standard billed rate for the service, before any payer contract applies.", books: "A reference figure, not revenue &mdash; never the number that should hit your income." },
    { figure: "Contractual adjustment", what: "The difference between the gross charge and the rate the payer has contracted to allow.", books: "A write-off against the charge, separated out &mdash; not a bad debt to chase and not a loss." },
    { figure: "Allowed amount", what: "What the payer contract actually permits for the service &mdash; charge minus the contractual adjustment.", books: "The basis for what should ultimately be collected between payer and patient." },
    { figure: "Patient responsibility", what: "Copay, coinsurance, or deductible the patient owes out of the allowed amount.", books: "Receivable from the patient until paid; tracked separately from payer A/R." },
    { figure: "Net collections", what: "The deposits that actually land &mdash; payer remittances plus patient payments.", books: "The only figure that is real revenue. Credit balances booked as refundable liabilities, not income." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Clean books are the start. A stronger practice is the point.)
  advisoryBody: [
    "Once payer deposits reconcile and your collection-based numbers are real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do about them?&rdquo; Which providers and service lines to grow, how the payer mix is shaping margin, whether a provider or location is carrying the practice or dragging it, when to add staff or space, how to structure compensation &mdash; the decisions that separate practices that thrive from those that just stay full.",
    "That&rsquo;s where <strong>healthcare advisory</strong> comes in: a Certified ProAdvisor who knows your numbers turning them into provider-profitability, payer-mix, and growth decisions through cash-flow forecasting and fractional CFO work. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Payer reconciliation, collection-based revenue, per-provider books, payroll, patient refunds &middot; built from financial summaries, not PHI &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a medical billing, coding, or HIPAA-certification company" },
  ],

  // RELATED — services & industries (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "Move from charges-as-income to clean, collection-based books, with patient credit balances rebuilt as refundable liabilities.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Payroll management", body: "Payroll for clinical and administrative staff integrated with your books, with clean W-2-versus-1099 treatment for per-diem and locum providers.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean practice books into provider, payer-mix, and growth decisions through forecasting and senior-finance advisory.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; from collections to job costing to trust accounting.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract (questions verbatim; answers preserved verbatim,
  // append-only enrichment). visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: Healthcare accounting questions.)
  faq: [
    { q: "Why is healthcare accounting different from regular bookkeeping?", a: "Healthcare practices rarely collect what they bill. Gross charges, insurance contractual adjustments, write-offs, patient responsibility, and actual payer deposits are all different numbers, and revenue is only real once it is collected. Add per-provider and per-location performance, payroll for clinical staff, patient credit balances that must be refunded, and the need to keep protected health information out of the accounting records, and standard bookkeeping that only tracks company-wide income and expense falls short." },
    { q: "Do you reconcile insurance and payer deposits to QuickBooks?", a: "Yes. We reconcile payer deposits to your QuickBooks file using remittance and deposit summaries, separating gross charges, contractual adjustments and write-offs, patient payments, and net collections, so you can see billed versus collected instead of one lump deposit. We work from financial summaries and do not require protected health information." },
    { q: "Can you track profitability per provider or per location?", a: "Yes. We configure QuickBooks so income and expense are tracked by provider and by location, typically using Classes or location tracking, giving you a real per-provider and per-location profit and loss alongside a consolidated view of the practice." },
    { q: "Do you handle payroll, provider compensation, and patient refunds?", a: "We integrate <a href=\"/accounting/payroll-management/\">payroll</a> for clinical and administrative staff, support provider-compensation tracking, and book patient credit balances as liabilities so overpayments are refunded rather than absorbed. TechBrot does not file income taxes and does not provide medical billing, coding, or legal compliance services; we coordinate with your CPA, billing company, and counsel as needed." },
    { q: "How do you handle HIPAA and patient data?", a: "Accounting does not require protected health information. We work from financial summaries such as deposit reports and remittance totals, and keep PHI out of the books. We are not a medical billing or coding company and do not certify HIPAA compliance; your practice and its counsel retain that responsibility." },
    { q: "What does healthcare bookkeeping cost?", a: "Pricing depends on the number of providers and locations, payer and payroll complexity, and reporting needs. Healthcare engagements are quoted as a fixed monthly fee against a written scope with no hourly billing. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "Do you offer advice, or just bookkeeping?", a: "Both. Accurate, collection-based books come first; then a Certified ProAdvisor can turn them into decisions — provider and service-line profitability, payer-mix analysis, staffing against revenue, and cash-flow planning — through <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO advisory</a>. As automation handles routine data entry, this advisory layer is where the real value sits." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/healthcare/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Healthcare & Medical Practice Accounting","description":"Expert healthcare and medical practice accounting on QuickBooks — insurance revenue reconciliation, billed-vs-collected tracking, per-provider and per-location books, payroll, and patient refund handling by Certified ProAdvisors for medical, dental, and behavioral health practices.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15","inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/accounting-industries-healthcare.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-healthcare-in-brief-text","#acctind-healthcare-ai-summary-list"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Healthcare"}]},
        {"@type":"Service","@id":url+"#service","name":"Healthcare & Medical Practice Accounting","serviceType":"Healthcare and medical practice accounting and QuickBooks bookkeeping","description":"Insurance and payer revenue reconciliation (billed versus collected, contractual adjustments), per-provider and per-location bookkeeping, payroll and provider compensation, and patient refund and credit-balance tracking for U.S. medical, dental, and behavioral health practices, delivered by Certified QuickBooks ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; bookkeeping scope only — does not file income taxes, provide medical billing or coding, give legal advice, or certify HIPAA compliance — coordinates with the client's CPA or EA, billing company, and counsel.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. medical, dental, behavioral health, and allied practices"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Healthcare accounting deliverables","itemListElement":data.handle.map(function(s){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(s.title),"description":stripTags(s.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What healthcare accounting delivers","itemListElement":data.handle.map(function(s,i){return {"@type":"ListItem","position":i+1,"name":stripTags(s.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Healthcare accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
