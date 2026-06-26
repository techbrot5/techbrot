/* /accounting/industries/dental/ — LIVE baseline industry page migrated to cobalt
 * t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-dental.txt (42 headings incl. footer chrome + "The monthly
 * brief."; 7 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/industries/dental/index.html read for BODY PROSE only. REFERENCE pattern:
 * src/accounting/industries/construction.njk + .11tydata.js (proven t-mofu cobalt) for
 * structure + the FULL schema set (WebPage, BreadcrumbList, Service, ItemList, FAQPage,
 * QAPage). Content angle (medical-practice analog) reused from the NY healthcare page
 * (src/find-an-accountant/new-york/industries/healthcare.njk) — payer-AR / provider-comp
 * substance generalised NATIONAL, NY-specific tax (Corporate Practice of Medicine /
 * PC-PLLC / no-NY-sales-tax) dropped. Dental substance is REAL and specific: production
 * vs collection, PPO/insurance adjustments + write-offs, associate-doctor compensation
 * models, lab fees + supplies as COGS, practice-management-to-QuickBooks reconciliation
 * (Dentrix/Eaglesoft/Open Dental), per-location/per-provider profitability, DSO
 * consolidation, the books/CPA boundary.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief." NOT
 * rendered here — base chrome owns them / dropped per protocol T2. The 5 quick-answer
 * questions render as NON-heading ai-summary__question (baseline captured them as <dt>,
 * NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ (T4): all 7 contract Q/A VERBATIM (questions verbatim; answers preserved verbatim,
 * enrichment append-only) as faq__list + FAQPage from the SAME array — NO dedup. Old body
 * Q/A substance (challenge "honest read" notes, advisory "advice vs bookkeeping") preserved
 * as section prose — no gutting.
 *
 * SCHEMA (CRITICAL): WebPage, BreadcrumbList, Service, ItemList (deliverables), FAQPage
 * (all 7 verbatim, NO dedup), QAPage (from the 5-question ai-summary). QAPage + ItemList
 * NOT dropped.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm — not
 * affiliated with Intuit Inc. or any practice-management/patient-financing platform;
 * bookkeeping/ProAdvisor scope — does NOT file income taxes or render W-2/1099 legal
 * opinions, coordinates with the client's CPA/EA/attorney. No <strong> in the dark hero
 * subheading. CTA labels canonical lexicon only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Dental practice accounting, plainly." (from baseline TL;DR body, national scope)
  definition: [
    "Dental practices break generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> in the same places, almost every time. <strong>Production vs collection</strong> &mdash; the gap between dentistry performed at full fee schedule and the dollars actually received &mdash; is real money, typically <strong>8&ndash;15% of production</strong>, that must be measured by provider and procedure category, not lumped into one &ldquo;discounts&rdquo; line. <strong>Insurance adjustments and write-offs</strong> come in distinct flavors (PPO contractual write-offs, insurance payment differences, patient courtesy discounts, bad debt) that need separate accounts for visibility. <strong>Lab fees and dental supplies</strong> are a real cost of services &mdash; lab fees typically 7&ndash;10% of production, supplies 5&ndash;7% &mdash; not overhead. <strong>Associate-doctor compensation</strong> runs on production-based, collection-based, salary-plus-production, or hybrid formulas, with W-2 vs 1099 classification carrying real legal and tax implications.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who reconcile your practice management system (Dentrix, Eaglesoft, Open Dental, or others) to <a href=\"/quickbooks/online/\">QuickBooks</a> monthly, separate every adjustment so the production-collection gap is visible, track lab and supply COGS against benchmark, calculate associate compensation precisely, and produce both single-practice and DSO-grade reporting with location-level P&amp;L and intercompany elimination. For practice owners ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into PPO, fee-schedule, hiring, and expansion decisions. We deliver the books; your CPA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., zero commission on any practice management or patient-financing platform.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Dental practice accounting, in five questions.) — VERBATIM from baseline ai-summary.
  aiSummary: [
    { q: "Why is dental accounting different?", a: "Practices generate <strong>production</strong> at full fee but collect after PPO write-offs, insurance adjustments, patient discounts, and bad debt &mdash; an 8&ndash;15% gap most bookkeeping buries. <strong>Lab fees and supplies</strong> are real COGS. <strong>Associate compensation</strong> runs on production/collection/hybrid models. <strong>DSOs</strong> need location-level P&amp;L." },
    { q: "What is production vs collection?", a: "<strong>Production</strong> = full-fee dentistry performed. <strong>Collection</strong> = what was actually received. <strong>Collection Ratio</strong> = collections / production. Healthy: 90%+; acceptable: 85&ndash;90%; below 85% signals operational issues. Tracked monthly by provider and procedure category." },
    { q: "Do you handle adjustments correctly?", a: "Yes &mdash; classified separately by type: <strong>PPO contractual write-offs</strong> (full fee vs negotiated fee), <strong>insurance payment differences</strong> (paid less than expected), <strong>patient courtesy discounts</strong>, <strong>bad debt write-offs</strong>. Each in its own account so the P&amp;L shows exactly where the gap comes from." },
    { q: "Do you handle associate compensation, lab fees, multi-location DSOs?", a: "Yes. Associate compensation across <strong>production-based, collection-based, salary-plus, hybrid</strong> models &mdash; with W-2 vs 1099 classification coordinated with your attorney/CPA. <strong>Lab fees 7&ndash;10% benchmark, supplies 5&ndash;7%</strong> as separate COGS lines. <strong>DSO consolidation</strong> with intercompany elimination." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by location count, provider count, practice management system, and DSO complexity. No hourly billing. Most dental engagements include initial <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to separate previously-lumped adjustments. We do not file income taxes; we coordinate with your CPA." },
  ],

  // CHALLENGES — three places dental practices lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places dental practices lose the numbers. + 3 H3s) — old body "honest read" preserved in body.
  challenges: [
    { signal: "Production-collection gap is invisible", title: "Every adjustment lumped into &ldquo;discounts.&rdquo;", body: "Production is what the practice did; collection is what it kept. The 8&ndash;15% gap between them &mdash; PPO write-offs, insurance underpayments, patient courtesy discounts, bad debt &mdash; is real money, but most dental bookkeeping lumps it into one &ldquo;Adjustments&rdquo; line. The owner sees collection without context, can&rsquo;t tell which carriers underpay or which provider has a higher write-off rate, and has no lever to pull. The fix is adjustments separated by type, tracked by provider and procedure category, with monthly Collection Ratio. A ratio below 85% is usually recoverable &mdash; but you can&rsquo;t fix what you don&rsquo;t measure." },
    { signal: "Associate compensation is approximate", title: "Wrong formula, wrong classification, real exposure.", body: "Associate compensation calculated approximately &mdash; without proper lab-fee deductions, without supply-cost allocation, on the wrong production-vs-collection basis &mdash; over- or under-pays month after month. Worse, associates classified as 1099 contractors who functionally operate as employees create real IRS exposure and state professional-corporation risk. The fix is compensation calculated precisely from practice-management data with contractual deductions applied correctly, classification reviewed with your attorney or CPA. W-2 vs 1099 is a legal determination, not a bookkeeping preference: we handle the calculation; the legal characterization stays with your attorney or CPA." },
    { signal: "Multi-location complexity is unhandled", title: "No location-level P&amp;L, no DSO consolidation.", body: "Growing practices and DSOs need three things generic bookkeeping doesn&rsquo;t provide: location-level P&amp;L for each office, consolidated reporting with intercompany elimination, and provider-level reporting across locations. Without it, expansion, location-closure, and compensation decisions are made on incomplete information. The fix is a chart of accounts with Class or Location tracking for every office, the management-entity vs operating-entity structure kept clean (common in DSOs for state corporate-practice-of-dentistry compliance), and both reports produced monthly. Most multi-location practices discover one or two locations subsidize the others on the first honest location-level report." },
  ],

  // SUB-VERTICALS — "Dental practices at every size." (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: Dental practices at every size. + 6 H3s)
  subverticals: [
    { title: "Solo-doctor general practices", body: "Owner-doctor offices with one or two operatories. Production vs collection tracking, lab and supply COGS reporting, a simple chart of accounts, and monthly financials with the dental KPI set. The reference case for single-practice accounting." },
    { title: "Multi-doctor general practices", body: "Owner-doctor plus associates, and partner-doctor groups. Provider-level production and collection reporting, associate compensation calculation, partner equity treatment for partnerships, and the full dental KPI set by provider." },
    { title: "Specialty practices", body: "Orthodontics (with treatment-contract revenue recognition), oral surgery (higher lab and implant costs, IV sedation supplies), endodontics, periodontics, prosthodontics, and pediatric dentistry &mdash; specialty-specific KPI benchmarks and procedure-mix economics." },
    { title: "Multi-location group practices", body: "Two-to-ten-location practices with the owner-doctor still active. Location-level P&amp;L, inter-location provider rotation, consolidated reporting, often a single operating entity with multiple DBAs." },
    { title: "Dental service organizations (DSOs)", body: "Ten-plus-location operations: management-entity vs operating-entity structure for state corporate-practice-of-dentistry compliance, intercompany elimination, due-diligence support for acquisitions, and post-acquisition integration. <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> typically required." },
    { title: "Cash-based &amp; fee-for-service practices", body: "Out-of-network practices that don&rsquo;t take PPO contracts. A simpler adjustment structure (no PPO write-offs), often higher per-patient revenue, distinctive marketing-investment economics, and patient-financing reconciliation (CareCredit, LendingClub Patient Solutions)." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Dental practice accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Production &amp; collection", title: "Practice management reconciliation", body: "Monthly production, adjustment, and collection data from Dentrix, Eaglesoft, or Open Dental posted to QuickBooks by provider, location, and procedure category &mdash; with Collection Ratio measured every month.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Adjustments", title: "Adjustment categorization", body: "PPO write-offs, insurance payment differences, patient discounts, and bad debt separated into distinct accounts &mdash; the production-collection gap visible by category, not buried in one line.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03 &middot; COGS", title: "Lab fees &amp; supply tracking", body: "Lab fees and dental supplies tracked as separate COGS lines, reported as a percentage of production monthly, with benchmark comparison (7&ndash;10% labs, 5&ndash;7% supplies).", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Associates", title: "Associate compensation", body: "Associate compensation calculated precisely across production-based, collection-based, salary-plus, and hybrid models &mdash; with W-2 / 1099 classification coordinated with your attorney or CPA.", href: "/accounting/payroll-management/", cta: "Payroll management &rarr;" },
    { num: "05 &middot; Multi-location", title: "DSO consolidation", body: "Location-level P&amp;L for each office, management-entity vs operating-entity structure kept clean, consolidated DSO reporting with intercompany elimination, and due-diligence support.", href: "/quickbooks/enterprise/", cta: "QuickBooks Enterprise &rarr;" },
    { num: "06 &middot; Advisory", title: "Practice growth advisory", body: "Fee-schedule analysis, PPO contract evaluation, location-expansion modeling, associate-to-partner pathway planning, and practice-valuation prep &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — dental stack reconciled with QuickBooks (checks-list).
  // (H2: Connected to your dental stack.)
  integrations: [
    "Dentrix &amp; Dentrix Ascend &mdash; production, adjustment &amp; collection reports reconciled to QuickBooks",
    "Eaglesoft &mdash; provider production and ledger reconciliation",
    "Open Dental &mdash; by-provider, by-procedure data posted as summary journal entries",
    "Carestream PracticeWorks &amp; Curve Dental &mdash; practice-management ledgers tied to the GL",
    "Denticon &mdash; multi-location and DSO production data consolidated",
    "CareCredit, LendingClub Patient Solutions &amp; Sunbit &mdash; patient-financing receivables reconciled",
    "Gusto &amp; ADP &mdash; provider, hygienist, and staff payroll",
    "Bill.com, Ramp &amp; Expensify &mdash; AP, cards, and supply/lab spend",
  ],
  integrationsNote: "Different stack? If your practice management system exports clean data, we work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From buried adjustments to a real KPI dashboard. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your size, location count, provider mix, practice management system, current bookkeeping state, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "Where needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to separate previously-lumped adjustments and rebuild prior-period provider compensation, plus the right chart-of-accounts setup for dental practice economics." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; KPI reporting", body: "Books reconciled monthly against practice management with production, adjustments, and collections by provider and procedure category, lab and supply COGS benchmarked, associate compensation calculated, and the dental KPI dashboard delivered." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with the full dental KPI set, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on PPO contract evaluation, fee-schedule strategy, associate-to-partner pathways, and location-expansion modeling." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the
  // baseline "advice vs bookkeeping" / practice-growth substance (no gutting).
  // (H2: A real KPI dashboard is the start. Practice growth is the point.)
  advisoryBody: [
    "Once production, collection, and adjustments are visible by provider, lab and supply COGS are benchmarked, and associate compensation is calculated precisely, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Which PPO contracts to renegotiate or drop, where the fee schedule should move, when to add an associate, whether to open a second location, how to structure an associate-to-partner pathway &mdash; the decisions that actually move a dental practice toward greater profitability.",
    "That&rsquo;s where <strong>dental advisory</strong> comes in: a fractional CFO who knows your KPIs turning them into PPO strategy, fee analysis, expansion modeling, and practice-valuation prep. Accurate books come first; then that judgment turns them into decisions. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Production-collection reconciliation, adjustments, lab/supply COGS, associate compensation, multi-location DSO &middot; income-tax filing &amp; W-2/1099 classification opinions coordinated with your CPA, EA, or attorney" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any practice-management or patient-financing platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — all 7 contract Q/A VERBATIM (questions verbatim; answers preserved verbatim).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: Dental practice accounting questions.)
  faq: [
    { q: "Why is dental practice accounting different from regular bookkeeping?", a: "Dental practices generate revenue through production (charges at full fee schedule) but collect only a portion of it after insurance adjustments, PPO contract write-offs, patient discounts, and uncollectible accounts. The gap between production and collection &mdash; typically 8-15% of production &mdash; is real money that must be measured, not buried in &lsquo;discounts.&rsquo; Lab fees for outsourced crown, denture, and surgical guide work are a genuine cost of services, not overhead. Associate-doctor compensation runs on production-based, collection-based, or hybrid formulas that must be calculated accurately and classified correctly (often the difference between W-2 employment and 1099 contractor treatment with real tax implications). Multi-location DSOs need chair-level and operatory-level economics. None of this fits into a generic service-business chart of accounts &mdash; running a dental practice on generic bookkeeping means flying blind on the metrics that actually determine practice profitability. To see where your practice stands, speak to a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "What is production vs collection and why does it matter?", a: "Production is the total dollar value of dentistry performed at full fee schedule &mdash; what the practice would have billed if every patient paid full price with no insurance. Collection is what was actually received after insurance adjustments, PPO contracted write-offs, patient discounts, and bad debt. The Collection Ratio (collections divided by production) is one of the most important dental practice KPIs: a healthy ratio is 90% or higher; 85-90% is acceptable; below 85% signals operational issues with insurance verification, treatment planning, financial coordination, or accounts receivable management. We configure the books so production, adjustments, write-offs, and collections are tracked separately by month, by provider, and by procedure category &mdash; making Collection Ratio a measured number reviewed monthly, not an annual surprise." },
    { q: "How do you handle insurance adjustments and write-offs?", a: "Insurance adjustments come in several forms that need different accounting treatment. PPO contractual write-offs (the difference between full fee and the negotiated PPO fee schedule) are immediate adjustments at the time of treatment &mdash; these reduce production to expected collection. Insurance claim payment differences (when the insurer pays less than expected) are adjustments at the time of payment. Patient courtesy discounts, professional courtesy adjustments, and senior discounts are tracked separately for management visibility. Bad debt write-offs (uncollectible patient balances) flow through allowance accounts. Each category gets its own account in the chart of accounts so the monthly P&amp;L shows the practice exactly where the production-collection gap is coming from &mdash; PPO discounts vs insurance payment differences vs patient discounts vs bad debt. Lumping them together is the most common bookkeeping mistake we see in dental files." },
    { q: "Do you handle associate-doctor compensation correctly?", a: "Yes. <a href=\"/accounting/payroll-management/\">Associate compensation</a> in dental practices runs on several models: production-based (associate paid a percentage of their personal production, typically 25-35%), collection-based (paid a percentage of what their production actually collected, typically 30-40%), salary-plus-production (base salary plus production bonus above a threshold), daily-rate (typical for part-time or per-diem coverage), and hybrid arrangements. Calculation accuracy requires pulling production and collection data by provider from the practice management system (Dentrix, Eaglesoft, Open Dental) and applying the contractual formula correctly &mdash; including lab fee deductions, supply cost allocations, and any specific arrangements about who pays for what. Classification matters enormously: associates classified as 1099 independent contractors who functionally operate as employees create real legal and tax exposure. We configure the compensation calculation and classification in coordination with the practice&rsquo;s CPA or attorney on the legal characterization." },
    { q: "What about lab fees, dental supplies, and consumables?", a: "Lab fees for outsourced crown, denture, implant, and surgical guide work are a real cost of services and should appear as a separate COGS line, not buried in supplies or general overhead. Lab fees as a percentage of production is a key dental practice benchmark &mdash; typically 7-10% of total production for general practices, higher for restorative-heavy or implant-focused practices. Dental supplies (consumables &mdash; gloves, anesthetic, restorative materials, impression materials) are similarly a real cost of services and benchmark around 5-7% of production. We configure the chart of accounts so lab fees and supplies are visible as separate line items, calculate them as a percentage of production monthly, and surface when they drift outside healthy ranges &mdash; typically a sign of price changes, inventory shrinkage, or treatment-mix shift." },
    { q: "Do you handle multi-location practices and DSO consolidation?", a: "Yes. Multi-location dental practices and DSOs need three things generic bookkeeping doesn&rsquo;t provide: location-level P&amp;L for each office (revenue, lab/supply COGS, provider compensation, location-specific overhead, contribution to overhead and profit), consolidated DSO-level reporting with intercompany elimination for management services agreements and inter-location transactions, and provider-level reporting that crosses locations for associates who work at multiple offices. We configure the chart of accounts with Class or Location tracking for every office, maintain the management entity vs operating entity structure cleanly (common in DSO setups for state corporate-practice-of-dentistry compliance), and produce both location-level and consolidated reporting monthly. For DSOs growing through acquisition, <a href=\"/accounting/advisory/\">due-diligence support</a> and post-acquisition integration are scoped separately as project engagements." },
    { q: "Which practice management systems do you integrate with?", a: "Dental practice management systems handle the patient-facing side (scheduling, charting, billing, insurance claims). The integration between practice management and QuickBooks requires reconciliation rather than direct sync &mdash; practice management is the source of truth for production, collection, and adjustment data; QuickBooks is the source of truth for the financial general ledger. We work with all major dental practice management systems: Dentrix and Dentrix Ascend, Eaglesoft, Open Dental, Carestream PracticeWorks, Curve Dental, Dovetail, and Denticon (commonly used by DSOs). The reconciliation process: monthly production, adjustment, and collection reports pulled from practice management; posted to QuickBooks as summary journal entries by provider, location, and procedure category; reconciled to bank deposits and merchant settlements. The result: one ledger that ties to practice management daily and supports the full set of dental practice KPIs." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Adjustment-buried cleanup", body: "Separate previously-lumped PPO write-offs, insurance differences, patient discounts, and bad debt &mdash; and rebuild prior-period provider compensation.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "QuickBooks Enterprise", body: "Multi-location and DSO practices need Class/Location tracking, advanced inventory, and consolidated reporting.", href: "/quickbooks/enterprise/", cta: "Explore Enterprise &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "PPO strategy, fee-schedule analysis, expansion modeling, and practice-valuation prep on top of accurate books.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; construction, real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/dental/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/dental-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-dental-definition","#acctind-dental-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Dental","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Dental Practice Accounting","serviceType":"Specialist accounting and QuickBooks bookkeeping for dental practices and DSOs","description":"Production vs collection tracking, insurance adjustments and PPO write-offs, lab fees and supplies as cost of services, associate-doctor compensation across production-based, collection-based, salary-plus, and hybrid models, per-provider and per-location profitability, and multi-location DSO consolidation, delivered in QuickBooks by Certified ProAdvisors for U.S. dental practices. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes or render worker-classification legal opinions — coordinates with the practice's CPA, EA, or attorney.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. dental practices — solo, multi-doctor, group, and dental service organizations"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Dental practice accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What dental practice accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Dental practice accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
