/* /find-an-accountant/new-york/industries/construction/ — t-location INDUSTRY child
 * (deeper than a city child — 34 contract headings). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-construction.txt) — the ONLY authority for the headings + the 7 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/construction/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * cities/brooklyn.11tydata.js: JSON front-matter lives in the .njk; this file supplies the
 * content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. New York
 * construction facts (certified payroll under NYS Labor Law Article 8; capital-improvement
 * vs. repair distinction and Form ST-124; multi-state tri-state crew payroll) reflect NYS
 * DOL and NY DTF guidance. No founder/personal name in visible content (firm-level review
 * byline only). Independent firm — does NOT file NY taxes; coordinates with the client's
 * CPA, who files. Footer chrome (Accounting/QuickBooks/Company/Network) and the newsletter
 * ("The monthly brief.") are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: New York construction accounting, plainly.)
  summary: [
    "Construction runs on <strong>projects, not periods</strong> &mdash; company-wide books can&rsquo;t tell you whether a single job made or lost money. Real construction accounting needs <strong>job costing</strong> (labor, materials, equipment, and subcontractors tracked per project and cost code), <strong>WIP schedules</strong> showing earned revenue versus billings, <strong>retainage</strong> tracked on both receivables and payables, and <strong>change-order</strong> discipline. Whether you recognize revenue on <strong>percentage-of-completion</strong> or <strong>completed-contract</strong> changes how every one of those lines reads on your financials.",
    "New York adds its own layer. <strong>Certified payroll</strong> under <strong>NYS Labor Law Article 8</strong> is required on public and prevailing-wage work, with the wage schedules and reporting GCs and agencies demand. The <strong>capital-improvement vs. repair</strong> distinction governs <a href=\"/find-an-accountant/new-york/sales-tax-help/\">sales tax</a> on materials and labor &mdash; a permanent improvement to real property is generally non-taxable to the customer with a properly completed <strong>Form ST-124</strong>, while a repair or maintenance job is taxable. AIA-style progress billing, lien waivers tied to each draw, and <strong>multi-state payroll</strong> for crews crossing the NY/NJ/CT line round out the difference.",
    "There&rsquo;s a geography wrinkle too: an <strong>NYC</strong> job carries the city&rsquo;s <strong>8.875% combined sales tax</strong> on taxable materials and a stricter licensing and permitting regime than the same job <strong>upstate</strong>, where the combined rate is lower and the prevailing-wage exposure depends on the funding source. <strong>TechBrot</strong> sets all of this up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and turns it into job-level profit you can bid from. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York construction accounting, in five questions.)
  aiSummary: [
    { q: "Why is NY construction accounting different?", a: "It runs on <strong>projects, not periods</strong> &mdash; per-job revenue and cost, often <strong>percentage-of-completion</strong>, with retainage and change orders. New York adds <strong>certified payroll (NYS Labor Law Article 8)</strong> and the <strong>capital-improvement sales-tax</strong> rule (Form ST-124) that standard bookkeeping can&rsquo;t handle." },
    { q: "Do you set up job costing in QuickBooks?", a: "Yes &mdash; labor, materials, equipment, and subcontractors tracked to each <strong>project and cost code</strong>, with prevailing-wage labor and capital-improvement materials coded correctly from the start, so you can bid from real job-level profit instead of a company-wide guess." },
    { q: "Do you handle NY certified payroll?", a: "Yes &mdash; <strong>certified payroll reporting</strong> for New York public and prevailing-wage projects under <strong>Labor Law Article 8</strong>. Complex union or multi-state prevailing-wage cases &mdash; common on tri-state jobs near NJ and CT &mdash; are scoped openly on the discovery call." },
    { q: "How does NY sales tax work on materials?", a: "New York splits a <strong>capital improvement</strong> (generally non-taxable with a Form ST-124) from a <strong>repair or maintenance</strong> job (taxable). In NYC the taxable rate is <strong>8.875%</strong>. Miscoding it is a common NY assessment trigger &mdash; we track the ST-124 certificates and the taxable/non-taxable split." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by active jobs, payroll complexity, and certified-payroll needs. Monthly bookkeeping typically runs <strong>$400&ndash;$2,500+/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
  ],

  // CHALLENGES — three places contractors lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places New York contractors lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Job profit is invisible", title: "No real job costing.", body: "Costs land in company-wide buckets, not on jobs. You know the business made money this year &mdash; you don&rsquo;t know <em>which</em> jobs made it and which quietly bled, so you bid the next one blind. The fix is job costing by project and cost code &mdash; labor, materials, equipment, subs &mdash; so every job shows true profit. If you can&rsquo;t pull profit on a single completed job in under a minute, this is your starting point." },
    { signal: "Billing &amp; cash are off", title: "No WIP or retainage tracking.", body: "Without a WIP schedule you can&rsquo;t see over- or under-billing &mdash; so cash looks healthy while you&rsquo;ve borrowed against unearned revenue. On New York public work, retainage held on both sides distorts the balance sheet further. The fix is WIP schedules (earned vs. billed) and retainage tracked separately on receivables and payables. Over-billing feels like profit until the job finishes; WIP shows reality before it bites." },
    { signal: "NY compliance is at risk", title: "Certified payroll &amp; sales-tax gaps.", body: "New York public and prevailing-wage projects require certified payroll under <strong>Labor Law Article 8</strong>; the capital-improvement vs. repair line (<strong>Form ST-124</strong>) governs sales tax on materials. Get either wrong and payments stall or assessments land. The fix is certified payroll reporting and correct ST-124 coding handled within your QuickBooks workflow &mdash; with complex union or multi-state prevailing-wage cases scoped openly on the call." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: New York construction accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Job costing", title: "Job costing setup &amp; maintenance", body: "Labor, materials, equipment, and subcontractors tracked to each project and cost code &mdash; real job-level profitability you can bid from.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "02 &middot; WIP", title: "WIP &amp; over/under billing", body: "Work-in-progress schedules showing earned revenue versus billings, so cash and profit reflect reality mid-project &mdash; on percentage-of-completion or completed-contract.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "03 &middot; Retainage", title: "Retainage tracking", body: "Retainage receivable and payable tracked separately, with AIA-style progress billing and lien-waiver discipline, so your balance sheet and cash position stay accurate.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "04 &middot; Certified payroll", title: "NY certified payroll", body: "Certified payroll reporting for NY prevailing-wage and public projects (Davis-Bacon and NYS prevailing wage, Labor Law Article 8), plus multi-state payroll for tri-state crews near NJ and CT.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York payroll-ready books &rarr;" },
    { num: "05 &middot; Sales tax", title: "Capital-improvement sales tax", body: "Capital-improvement vs. repair coding and Form ST-124 certificate tracking so materials and labor are taxed correctly under NY rules &mdash; including the NYC 8.875% rate on taxable materials.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "06 &middot; Cleanup", title: "Job-cost cleanup", body: "Rebuild job costing from messy books, reclassify costs to the right projects and cost codes, fix sales-tax miscoding, and reconcile to a known-good baseline.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
  ],

  // INTEGRATIONS — construction tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you build.)
  integrations: [
    "QuickBooks Enterprise &mdash; contractor edition, common on larger NY GCs",
    "Buildertrend &mdash; job management synced to job-cost ledgers",
    "Procore &mdash; project financials reconciled to QuickBooks",
    "Knowify &mdash; AIA billing and change orders",
    "Hammr &mdash; certified-payroll-aware time tracking",
    "CompanyCam &mdash; job documentation tied to cost codes",
    "Gusto &mdash; multi-state crew payroll",
    "QuickBooks Time (TSheets) &mdash; field time to job costing",
  ],
  integrationsNote: "Using different job-management software? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: From guesswork to job-level profit. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your jobs, crew, NY payroll requirements, and where the books are breaking. No pitch." },
    { phase: "Phase 2", title: "Job-cost setup &amp; cleanup", body: "Configure job costing and cost codes, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to reclassify past costs and fix capital-improvement sales-tax coding where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; WIP", body: "Monthly reconciliation with job-cost reporting, WIP schedules, retainage tracking, and NY certified payroll where required." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Job-profitability reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and bonding advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Accurate job costs are the start. Winning bids is the point.)
  advisoryBody: [
    "Once every job shows real profit and your WIP is clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;how do we bid the next one better?&rdquo; Which job types carry margin, when to chase bonded or public work, how cash flows across overlapping projects, what overhead each job should absorb &mdash; the decisions that separate New York contractors who grow from those who stall.",
    "That&rsquo;s where construction advisory comes in: a Certified ProAdvisor who knows your job-cost data turning it into bid strategy, cash-flow forecasting, and bonding-ready financials. As automation handles routine data entry, this judgment layer is where contractors find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "Payroll management", body: "NY certified payroll and multi-state crew payroll handled correctly &mdash; prevailing-wage schedules, Article 8 reporting, tri-state withholding.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "Bookkeeping cleanup", body: "Rebuild job costing and reclassify costs to the right New York projects, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "NY sales tax help", body: "Capital-improvement vs. repair and Form ST-124 tracked correctly, with the NYC 8.875% rate applied to taxable materials.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your industry runs in New York &mdash; legal/IOLTA, real estate, restaurant, healthcare, nonprofit.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Job costing, WIP, retainage, NY certified payroll, capital-improvement sales tax &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York construction accounting questions.)
  faq: [
    { q: "Why is construction accounting different in New York?", a: "Construction runs on projects, not periods &mdash; revenue and cost track per job, often by percentage-of-completion, with retainage, change orders, and WIP that standard bookkeeping can&rsquo;t handle. New York adds its own layer: certified payroll under NYS Labor Law for public and prevailing-wage work, the capital-improvement vs. repair distinction that governs sales tax on materials and labor (Form ST-124), and multi-state payroll for crews working across the NY/NJ/CT line. We build all of it into your QuickBooks file." },
    { q: "Do you set up job costing in QuickBooks for New York contractors?", a: "Yes. We configure job costing so labor, materials, equipment, and subcontractor costs track to each project and cost code &mdash; giving you real job-level profitability instead of a company-wide guess. For New York contractors that also means structuring jobs so prevailing-wage labor and capital-improvement materials are coded correctly from the start, which matters for both compliance and bidding." },
    { q: "Do you handle New York certified payroll and prevailing wage?", a: "We support certified payroll reporting for New York public and prevailing-wage projects governed by NYS Labor Law Article 8, including the wage schedules and reporting GCs and agencies require. Complex union or multi-state prevailing-wage situations &mdash; common on tri-state jobs &mdash; are scoped openly on the discovery call. We handle the payroll and reporting mechanics; your CPA files income taxes." },
    { q: "How does NYC sales tax work on construction materials?", a: "New York draws a sharp line between a capital improvement (permanently adding value to real property &mdash; generally not taxable to the customer when you have a properly completed Form ST-124 capital improvement certificate) and a repair or maintenance job (taxable). Getting this wrong is a common source of New York sales-tax assessments for contractors. We track materials, the ST-124 certificates, and the taxable/non-taxable split in your books so it reconciles." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes. We maintain work-in-progress schedules showing earned revenue versus billings (over/under billing) and track retainage receivable and payable separately, so your balance sheet and cash position stay accurate. On New York public work, where retainage and progress-billing rules are strict, that accuracy protects both your cash and your compliance." },
    { q: "What does construction bookkeeping cost in New York?", a: "Construction engagements are quoted as a fixed monthly fee against a written scope &mdash; no hourly billing &mdash; driven by active jobs, payroll complexity, whether certified payroll is required, and reporting needs. Monthly bookkeeping typically runs $400&ndash;$2,500+/mo with complexity adjustments. We deliver the books; your CPA files. See New York pricing." },
    { q: "My job costing is a mess. Where do we start in New York?", a: "With a cleanup. We reclassify past costs to the correct jobs and cost codes, rebuild job costing, fix any capital-improvement/sales-tax miscoding, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with WIP, retainage, and certified payroll. Most New York contractors come to us mid-mess; it&rsquo;s the normal starting point." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/construction/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Construction Accounting","description":"Construction accounting for New York contractors — job costing, WIP, retainage, NY certified payroll, and the capital-improvement sales-tax distinction, set up in your own QuickBooks file by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-industries-construction.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-construction-summary","#ny-ind-construction-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Construction"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Construction Accounting","serviceType":"Construction bookkeeping and job costing","description":"Job costing, WIP, retainage, certified payroll, and construction sales-tax handling for New York contractors, delivered in QuickBooks by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York general contractors, subcontractors, specialty trades, and home builders"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
