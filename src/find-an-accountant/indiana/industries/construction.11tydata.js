/* /find-an-accountant/indiana/industries/construction/ — t-money INDUSTRY child. Content arrays +
 * eleventyComputed pageGraph (WebPage reviewedBy #david-westgate, BreadcrumbList, Service [provider
 * #organization · areaServed State Indiana · audience BusinessAudience], FAQPage).
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md ONLY. Construction angle: builders riding
 * Central-Indiana growth (Hamilton County, Indianapolis sprawl) — job costing, WIP, retainage, AIA
 * billing, subcontractor 1099s, prevailing-wage/certified payroll on public work, CPA-ready job
 * profitability. Indiana sales tax is a clean 7% (no local add-ons); county LIT qualitative only.
 *
 * HONESTY (R5): NO street address (areaServed-only). TechBrot keeps the books; does NOT file Indiana
 * returns or the county LIT/sales-tax returns as agent — coordinates with the client's CPA. No invented
 * reviews/stats/clients/outcomes; no AggregateRating. No founder name; David Westgate only as
 * reviewedBy #david-westgate. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Indiana construction accounting, plainly.",
  summary: [
    "Construction runs on <strong>projects, not periods</strong> &mdash; company-wide books can&rsquo;t tell you whether a single job made or lost money. Real construction accounting needs <strong>job costing</strong> (labor, materials, equipment, and subcontractors tracked per project and cost code), <strong>WIP schedules</strong> showing earned revenue versus billings, <strong>retainage</strong> tracked on both receivables and payables, and <strong>change-order</strong> discipline. Whether you recognize revenue on <strong>percentage-of-completion</strong> or <strong>completed-contract</strong> changes how every one of those lines reads.",
    "Indiana&rsquo;s context is a builder&rsquo;s market. <strong>Central Indiana</strong> &mdash; Hamilton County (Carmel, Fishers, Noblesville) and the Indianapolis sprawl &mdash; is among the fastest-growing in the Midwest, keeping general contractors, trades, and home builders busy. The tax layer is mostly clean: sales tax is a flat <strong>7% statewide with no local add-ons</strong>, which simplifies materials handling versus layered-tax states. The genuine Indiana wrinkles are payroll-side: <strong>certified payroll</strong> on public/prevailing-wage work, clean <strong>subcontractor 1099s</strong>, and the <strong>county local income tax (LIT)</strong> withheld for each worker&rsquo;s county of residence (set January 1, via Form WH-4) &mdash; which matters when crews live across the donut counties.",
    "<strong>TechBrot</strong> sets up job costing, WIP, retainage, and county-LIT-ready payroll in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and turns it into job-level profit you can bid from. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Indiana returns. Confirm prevailing-wage and licensing detail with the relevant Indiana agency and your CPA.",
  ],
  secAiH: "Indiana construction accounting, in five questions.",
  aiSummary: [
    { q: "Why is Indiana construction accounting different?", a: "It runs on <strong>projects, not periods</strong> &mdash; per-job revenue and cost, often percentage-of-completion, with retainage and change orders. Indiana adds <strong>certified payroll on public work and county-LIT withholding</strong> for crews living across the donut counties that standard bookkeeping can&rsquo;t handle." },
    { q: "Do you set up job costing in QuickBooks?", a: "Yes &mdash; labor, materials, equipment, and subcontractors tracked to each <strong>project and cost code</strong>, so you can bid from real job-level profit instead of a company-wide guess. Common for builders riding Hamilton County and Indianapolis growth." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes &mdash; <strong>work-in-progress schedules</strong> showing earned revenue versus billings (over/under billing) and <strong>retainage</strong> tracked separately on receivables and payables, so your balance sheet and cash position stay accurate mid-project." },
    { q: "Do you handle certified payroll and county income tax?", a: "Yes &mdash; <strong>certified payroll</strong> for prevailing-wage public work and the <strong>county local income tax (LIT)</strong> mapped per worker&rsquo;s county of residence via Form WH-4, with full payroll through our global service. Subcontractor 1099s handled cleanly." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by active jobs, payroll, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],
  secChallengesH: "Three places Indiana contractors lose the numbers.",
  secChallengesLede: "Profitable-looking builders go under when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Job profit is invisible", title: "No real job costing.", body: "Costs land in company-wide buckets, not on jobs. You know the business made money this year &mdash; you don&rsquo;t know <em>which</em> jobs made it and which quietly bled, so you bid the next one blind. The fix is job costing by project and cost code &mdash; labor, materials, equipment, subs &mdash; so every job shows true profit. If you can&rsquo;t pull profit on a single completed job in under a minute, this is your starting point." },
    { signal: "Billing &amp; cash are off", title: "No WIP or retainage tracking.", body: "Without a WIP schedule you can&rsquo;t see over- or under-billing &mdash; so cash looks healthy while you&rsquo;ve borrowed against unearned revenue. Retainage held on both sides distorts the balance sheet further. The fix is WIP schedules (earned vs. billed) and retainage tracked separately on receivables and payables. Over-billing feels like profit until the job finishes; WIP shows reality before it bites." },
    { signal: "Payroll compliance slips", title: "Certified-payroll &amp; LIT gaps.", body: "Public/prevailing-wage jobs require certified payroll, and Indiana crews living across Hamilton, Marion, and the donut counties each carry a different county-LIT rate. Miss the certified-payroll report and you risk the contract; map the county codes wrong and payroll won&rsquo;t reconcile. The fix is certified-payroll-ready records and county-LIT codes mapped per worker so compliance and the books hold." },
  ],
  secHandleH: "Indiana construction accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your jobs and crew, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Job costing", title: "Job costing setup &amp; maintenance", body: "Labor, materials, equipment, and subcontractors tracked to each project and cost code &mdash; real job-level profitability you can bid from.", href: "/find-an-accountant/indiana/quickbooks-setup/", cta: "Indiana QuickBooks setup &rarr;" },
    { num: "02 &middot; WIP", title: "WIP &amp; over/under billing", body: "Work-in-progress schedules showing earned revenue versus billings, so cash and profit reflect reality mid-project &mdash; on percentage-of-completion or completed-contract.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "03 &middot; Retainage", title: "Retainage &amp; AIA billing", body: "Retainage receivable and payable tracked separately, with AIA-style progress billing and lien-waiver discipline, so your balance sheet and cash position stay accurate.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
    { num: "04 &middot; Certified payroll", title: "Certified payroll &amp; prevailing wage", body: "Certified-payroll-ready records for public/prevailing-wage jobs, with crew labor coded to jobs and full payroll handled through our global payroll service.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "05 &middot; County LIT", title: "Subcontractor 1099s &amp; county LIT", body: "Clean subcontractor 1099 handling and each worker&rsquo;s county-of-residence LIT rate mapped from the DOR list and withheld via Form WH-4, so payroll reconciles.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "06 &middot; Cleanup", title: "Job-cost cleanup", body: "Rebuild job costing from messy books, reclassify costs to the right projects and cost codes, fix retainage and 1099 coding, and reconcile to a known-good baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you build.",
  integrations: [
    "QuickBooks Enterprise &mdash; contractor edition, common on larger Indiana GCs",
    "Buildertrend &mdash; job management synced to job-cost ledgers",
    "Procore &mdash; project financials reconciled to QuickBooks",
    "Knowify &mdash; AIA billing and change orders",
    "CompanyCam &mdash; job documentation tied to cost codes",
    "QuickBooks Time &mdash; field time to job costing",
    "Gusto / ADP &mdash; crew payroll with certified-payroll and county-LIT codes",
    "Certified-payroll-ready records for prevailing-wage public work",
  ],
  integrationsNote: "Using different job-management software? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From guesswork to job-level profit.",
  secProcessLede: "Every Indiana construction engagement follows the same four-phase rhythm &mdash; books accurate first, profit visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your jobs, crew, how you bill, where the books are breaking, and your certified-payroll and county-LIT picture. No pitch." },
    { phase: "Phase 2", title: "Job-cost setup &amp; cleanup", body: "Configure job costing and cost codes, plus a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> to reclassify past costs and fix retainage and 1099 coding where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; WIP", body: "Monthly reconciliation with job-cost reporting, WIP schedules, retainage tracking, certified-payroll-ready records, and county-LIT payroll cadence." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Job-profitability reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and bonding advisory</a>." },
  ],
  secAdvisoryH: "Accurate job costs are the start. Winning bids is the point.",
  advisoryBody: [
    "Once every job shows real profit and your WIP is clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;how do we bid the next one better?&rdquo; Which job types carry margin, when to chase bigger work, how cash flows across overlapping projects, what overhead each job should absorb &mdash; the decisions that separate Indiana builders who grow from those who stall as Central Indiana keeps expanding.",
    "That&rsquo;s where construction advisory comes in: a Certified ProAdvisor who knows your job-cost data turning it into bid strategy, cash-flow forecasting, and bonding-ready financials. As automation handles routine entry, this judgment layer is where contractors find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Indiana construction engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm serving Indiana builders remotely across all 92 counties, and reviewed for technical accuracy on job costing, WIP, retainage, certified payroll, and county LIT (<a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>). TechBrot delivers the books and coordinates with your CPA, who files; it does not file Indiana returns or the county LIT/sales-tax returns as agent.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Job costing, WIP, retainage, certified-payroll-ready records, county-LIT payroll &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Does not file Indiana returns" },
  ],
  related: [
    { title: "Indiana County Income Tax Help", body: "The 92-county LIT withholding matrix set up so each crew member&rsquo;s county rate applies and payroll reconciles.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { title: "Indiana Bookkeeping Cleanup", body: "Rebuild job costing and reclassify costs to the right Indiana projects, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Construction accounting (national overview)", body: "How TechBrot builds books for contractors nationally &mdash; scoped for Indiana on the call.", href: "/accounting/industries/construction/", cta: "National overview &rarr;" },
    { title: "All Indiana industries", body: "See how TechBrot tailors accounting to the way your industry runs in Indiana.", href: "/find-an-accountant/indiana/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is construction accounting different in Indiana?", a: "Construction runs on projects, not periods &mdash; revenue and cost track per job, often by percentage-of-completion, with retainage, change orders, and WIP that standard bookkeeping can&rsquo;t handle. Indiana adds payroll-side wrinkles: certified payroll on prevailing-wage public work and the county local income tax withheld for each worker&rsquo;s county of residence, which matters when crews live across Hamilton, Marion, and the donut counties. We build job costing, WIP, retainage, and county-LIT-ready payroll into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Do you set up job costing in QuickBooks for Indiana builders?", a: "Yes. We configure job costing so labor, materials, equipment, and subcontractor costs track to each project and cost code &mdash; giving you real job-level profitability instead of a company-wide guess. For builders riding Hamilton County and Indianapolis growth, that&rsquo;s what lets you bid the next job from real margin and see which work actually pays." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes. We maintain work-in-progress schedules showing earned revenue versus billings (over/under billing) and track retainage receivable and payable separately, so your balance sheet and cash position stay accurate mid-project. Over-billing feels like profit until the job finishes &mdash; a clean WIP schedule shows reality before it bites, which matters most when several jobs overlap." },
    { q: "Do you handle certified payroll and prevailing wage in Indiana?", a: "Yes. For public/prevailing-wage projects we keep certified-payroll-ready records with crew labor coded to jobs, and we map the county local income tax (LIT) for each worker&rsquo;s county of residence (set January 1, withheld via Form WH-4). Full payroll runs through our global payroll service, and subcontractor 1099s are handled cleanly. We do the bookkeeping and job-cost mechanics; your CPA files income taxes." },
    { q: "How is sales tax on construction materials handled in Indiana?", a: "Indiana&rsquo;s sales tax is a flat 7% statewide with no county or city add-ons, which simplifies materials handling compared with layered-tax states. We configure the single 7% rate in QuickBooks so taxable purchases and any applicable exemptions are coded correctly and the books reconcile. We track and prepare the numbers; you or your CPA file the return with the Indiana DOR." },
    { q: "My job costing is a mess. Where do we start in Indiana?", a: "With a cleanup. We reclassify past costs to the correct jobs and cost codes, rebuild job costing, fix retainage and 1099 coding, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with WIP and retainage. Most Indiana builders come to us mid-mess; it&rsquo;s the normal starting point. Prefer to talk first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/construction/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Construction Accounting","description":"Construction accounting for Indiana contractors — job costing, WIP, retainage, AIA billing, certified payroll, and county-LIT crew payroll, set up in QuickBooks by a Certified ProAdvisor for builders riding Central-Indiana growth.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-industries-construction.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-ind-construction-summary","#in-ind-construction-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/indiana/industries/"},
          {"@type":"ListItem","position":5,"name":"Construction"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Construction Accounting","serviceType":"Construction bookkeeping and job costing","description":"Job costing, WIP, retainage, AIA billing, certified payroll, and county-LIT crew payroll for Indiana general contractors, subcontractors, specialty trades, and home builders, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Indiana returns or the county LIT/sales-tax returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana general contractors, subcontractors, specialty trades, and home builders riding Central-Indiana growth in Hamilton County and the Indianapolis metro"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
