/* /accounting/industries/construction/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-construction.txt (34 headings, 5 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/construction/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/quickbooks/online.njk (proven
 * t-mofu cobalt) for structure + schema; src/accounting/advisory/cash-flow-management
 * .11tydata.js for the FULL schema set (WebPage, BreadcrumbList, Service, ItemList,
 * FAQPage, QAPage). Industry-accounting substance reused from the NY analog
 * (src/find-an-accountant/new-york/industries/construction.njk) but NATIONAL scope —
 * NY-specific tax (Article 8 / ST-124 / NYC 8.875%) dropped, generalized to
 * certified/prevailing-wage payroll, AIA progress billing, multi-state crews.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: baseline contract carries 5 verbatim Q/A; the gate wants 6+, so ONE genuine
 * construction-accounting FAQ is appended (Q6 "My job costing is a mess. Where do we
 * start?" — drawn from the real baseline body, clearly real) and FLAGGED in the report.
 * The baseline body also carried a 7th Q/A ("Do you offer advice, or just bookkeeping?")
 * — preserved as section prose in the advisory block (no gutting), not duplicated into
 * the FAQ array. FAQPage + QAPage emitted from the same arrays — single source of truth.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc.; bookkeeping/ProAdvisor scope — does NOT file income
 * taxes, coordinates with the client's CPA/EA. No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Construction accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "Construction runs on <strong>projects, not periods</strong> &mdash; so company-wide books that only show total income and expense can&rsquo;t tell you whether a single job made or lost money. Real construction accounting needs <strong>job costing</strong> (labor, materials, equipment, and subcontractors tracked per project and cost code), <strong>work-in-progress (WIP)</strong> schedules showing over- and under-billing, <strong>retainage</strong> tracked on both receivables and payables, <strong>change-order</strong> discipline, and often <strong>certified payroll</strong> and <a href=\"/accounting/sales-tax-compliance/\">multi-state tax</a>. Whether you recognize revenue on <strong>percentage-of-completion</strong> or <strong>completed-contract</strong> changes how every one of those lines reads on your financials.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who set this up correctly in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keep it accurate monthly, and turn it into job-level profitability you can bid and grow from. We handle <strong>AIA-style progress billing</strong> (G702/G703), retainage on both sides of the ledger, equipment costing, and <strong>certified payroll</strong> for prevailing-wage and public work &mdash; with multi-state payroll for crews crossing state lines. For contractors scaling up, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> adds cash-flow and bonding insight on top. We deliver the books; your CPA or EA files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Construction accounting, in five questions.)
  aiSummary: [
    { q: "Why is construction accounting different?", a: "It runs on <strong>projects, not periods</strong>. Revenue and cost track per job &mdash; often by <strong>percentage-of-completion</strong> &mdash; with retainage, change orders, and certified payroll that standard bookkeeping can&rsquo;t handle. Company-wide income and expense can&rsquo;t tell you which job made money." },
    { q: "Do you set up job costing in QuickBooks?", a: "Yes. Labor, materials, equipment, and subcontractor costs tracked to each <strong>project and cost code</strong> &mdash; real job-level profit you can bid from, not a company-wide guess." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes. <strong>WIP schedules</strong> showing earned revenue vs. billings (over/under billing), and <strong>retainage receivable and payable</strong> tracked separately for an accurate balance sheet and cash position." },
    { q: "Do you handle certified payroll and AIA billing?", a: "We support <strong>certified payroll</strong> for prevailing-wage and public work and <strong>AIA-style progress billing</strong> (G702/G703). Complex union or multi-state prevailing-wage cases are scoped openly on the discovery call." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by active jobs, payroll complexity, and whether certified payroll or AIA billing is required. No hourly billing. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places contractors lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places contractors lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Job profit is invisible", title: "No real job costing.", body: "Costs land in company-wide buckets, not on jobs. You know the business made money this year &mdash; you don&rsquo;t know <em>which</em> jobs made it and which quietly bled, so you bid the next one blind. The fix is job costing by project and cost code &mdash; labor, materials, equipment, subs &mdash; so every job shows true profit. If you can&rsquo;t pull profit on a single completed job in under a minute, this is your starting point." },
    { signal: "Billing &amp; cash are off", title: "No WIP or retainage tracking.", body: "Without a WIP schedule you can&rsquo;t see over- or under-billing &mdash; so cash looks healthy while you&rsquo;ve borrowed against unearned revenue. Retainage held on both sides distorts the balance sheet further. The fix is WIP schedules (earned vs. billed) and retainage tracked separately on receivables and payables. Over-billing feels like profit until the job finishes; WIP shows reality before it bites." },
    { signal: "Compliance is at risk", title: "Certified payroll &amp; AIA gaps.", body: "Public and prevailing-wage projects require certified payroll reporting; GCs expect AIA-format progress billing (G702/G703). Get either wrong and payments stall or penalties land. The fix is certified payroll reporting and AIA-style progress billing handled within your QuickBooks workflow &mdash; with complex union or multi-state prevailing-wage cases scoped openly on the call." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Construction accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Job costing", title: "Job costing setup &amp; maintenance", body: "Labor, materials, equipment, and subcontractors tracked to each project and cost code &mdash; real job-level profitability you can bid from.", href: "/quickbooks/setup/", cta: "QuickBooks setup &rarr;" },
    { num: "02 &middot; WIP", title: "WIP &amp; over/under billing", body: "Work-in-progress schedules showing earned revenue versus billings, so cash and profit reflect reality mid-project &mdash; on percentage-of-completion or completed-contract.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03 &middot; Retainage", title: "Retainage tracking", body: "Retainage receivable and payable tracked separately, with AIA-style progress billing and lien-waiver discipline, so your balance sheet and cash position stay accurate.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Payroll", title: "Certified payroll", body: "Certified payroll reporting for prevailing-wage and public projects (Davis-Bacon and state prevailing wage), plus multi-state crew payroll handled correctly across state lines.", href: "/accounting/payroll-management/", cta: "Payroll management &rarr;" },
    { num: "05 &middot; Cleanup", title: "Job-cost cleanup", body: "Rebuild job costing from messy books, reclassify costs to the right projects and cost codes, and reconcile to a known-good baseline before monthly bookkeeping begins.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Advisory", title: "Cash flow &amp; bonding advisory", body: "Job-cost data turned into cash-flow forecasting, bonding-ready financials, and bid-margin strategy as you grow &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — construction tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you build.)
  integrations: [
    "QuickBooks Enterprise &mdash; contractor edition, common on larger GCs",
    "Buildertrend &mdash; job management synced to job-cost ledgers",
    "Procore &mdash; project financials reconciled to QuickBooks",
    "Knowify &mdash; AIA billing and change orders",
    "Hammr &mdash; certified-payroll-aware time tracking",
    "CompanyCam &mdash; job documentation tied to cost codes",
    "Gusto &mdash; multi-state crew payroll",
    "QuickBooks Time (TSheets) &mdash; field time to job costing",
  ],
  integrationsNote: "Using different job-management software? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From guesswork to job-level profit. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your jobs, crew, payroll requirements, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Job-cost setup &amp; cleanup", body: "Configure job costing and cost codes, plus a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to reclassify past costs to the right projects where needed." },
    { num: "Phase 3", name: "Monthly close &amp; WIP", body: "Monthly reconciliation with job-cost reporting, WIP schedules, retainage tracking, and certified payroll where required." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "Job-profitability reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and bonding advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the
  // baseline "Do you offer advice, or just bookkeeping?" Q/A substance (no gutting).
  // (H2: Accurate job costs are the start. Winning bids is the point.)
  advisoryBody: [
    "Once every job shows real profit and your WIP is clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;how do we bid the next one better?&rdquo; Which job types actually carry margin, when to chase bonded work, how cash flows across overlapping projects, what overhead each job should really absorb &mdash; the decisions that separate contractors who grow from those who stall.",
    "That&rsquo;s where <strong>construction advisory</strong> comes in: a Certified ProAdvisor who knows your job-cost data turning it into bid strategy, cash-flow forecasting, and bonding-ready financials. Accurate job costs come first; then that judgment turns them into decisions. As automation handles routine entry, this advisory layer is where contractors find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Payroll management", body: "Certified payroll and multi-state crew payroll handled correctly &mdash; prevailing-wage schedules and reporting GCs and agencies require.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "Bookkeeping cleanup", body: "Rebuild job costing and reclassify costs to the right projects, then reconcile to a CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn job-cost data into bid margin, cash flow across overlapping jobs, and bonding-ready financials as you scale.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Job costing, WIP, retainage, AIA billing, certified payroll &middot; income-tax filing coordinated with your CPA/EA" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 5 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment append-only)
  // + 1 appended genuine construction FAQ (Q6, drawn from the real baseline body — FLAGGED).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: Construction accounting questions.)
  faq: [
    { q: "Why is construction accounting different from regular bookkeeping?", a: "Construction runs on projects, not periods. Revenue and cost must be tracked per job, often recognized by percentage-of-completion, with retainage held back on both receivables and payables, change orders altering scope mid-project, and certified payroll required on public work. Standard bookkeeping that only tracks company-wide income and expense cannot tell you whether an individual job made or lost money." },
    { q: "Do you set up job costing in QuickBooks?", a: "Yes. We configure <a href=\"/accounting/job-costing/\">job costing</a> in QuickBooks so labor, materials, equipment, and subcontractor costs are tracked to each project and cost code, giving you real job-level profitability instead of a company-wide guess." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes. We maintain work-in-progress (WIP) schedules showing earned revenue versus billings (over/under billing) and track retainage receivable and payable separately so your balance sheet and cash position are accurate." },
    { q: "Do you handle certified payroll and AIA billing?", a: "We support <a href=\"/accounting/payroll-management/\">certified payroll</a> reporting for prevailing-wage and public projects and AIA-style progress billing (G702/G703) workflows. Complex union or multi-state prevailing-wage situations are scoped on the discovery call." },
    { q: "What does construction bookkeeping cost?", a: "Pricing depends on number of active jobs, payroll complexity, whether certified payroll or AIA billing is required, and reporting needs. Construction engagements are quoted as a fixed monthly fee against a written scope with no hourly billing. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "My job costing is a mess. Where do we start?", a: "With a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>. We reclassify past costs to the correct jobs and cost codes, rebuild job costing, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with WIP and retainage. Most contractors come to us mid-mess; it&rsquo;s the normal starting point." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/construction/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/construction-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-construction-definition","#acctind-construction-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Construction","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Construction Accounting & Bookkeeping","serviceType":"Construction accounting and QuickBooks bookkeeping","description":"Job costing, work-in-progress (WIP) reporting, retainage tracking, AIA progress billing, and certified payroll for U.S. construction contractors, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. general contractors, subcontractors, and trades"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Construction accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What construction accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Construction accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
