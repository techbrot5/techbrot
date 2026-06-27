/* /find-an-accountant/delaware/industries/construction/ — t-location INDUSTRY child. Mirrors
 * NY industries/construction.11tydata.js. Content arrays + eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service, FAQPage). FAQPage from the same `faq` array.
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md ONLY. Construction angle: job costing, WIP,
 * retainage; gross receipts by CONTRACT activity (DE has a contractor gross-receipts classification
 * — kept qualitative, pointed at Division of Revenue, no rate invented beyond the 0.0945%–1.9914%
 * range); Middletown (US-301 corridor) and Sussex growth. NO certified-payroll / prevailing-wage
 * framing here (that's a NY-specific exemplar detail, not a DE-FACTS item).
 *
 * HONESTY (R5): TechBrot delivers the books; does NOT file Delaware returns — coordinates with the
 * client's CPA. No invented reviews/stats/clients. No founder name; David Westgate only as
 * reviewedBy #david-westgate. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Delaware construction accounting, plainly.",
  summary: [
    "Construction runs on <strong>projects, not periods</strong> &mdash; company-wide books can&rsquo;t tell you whether a single job made or lost money. Real construction accounting needs <strong>job costing</strong> (labor, materials, equipment, and subcontractors tracked per project and cost code), <strong>WIP schedules</strong> showing earned revenue versus billings, <strong>retainage</strong> tracked on both receivables and payables, and <strong>change-order</strong> discipline. Whether you recognize revenue on <strong>percentage-of-completion</strong> or <strong>completed-contract</strong> changes how every one of those lines reads.",
    "Delaware&rsquo;s context is a builder&rsquo;s market. <strong>Middletown</strong> &mdash; TechBrot&rsquo;s home town and one of the state&rsquo;s fastest-growing, anchored by the US-301 corridor and heavy new-construction and warehouse development &mdash; and <strong>Sussex County</strong>&rsquo;s coastal and residential growth keep general contractors, trades, and home builders busy. The tax layer is specific: there is <strong>no sales tax</strong> on materials, but Delaware levies a <strong>gross receipts tax on the contractor</strong> &mdash; by contract activity, in the 0.0945%&ndash;1.9914% range, after a monthly or quarterly exclusion &mdash; so QuickBooks has to track receipts by activity, not assume a sales-tax workflow that doesn&rsquo;t exist here.",
    "<strong>TechBrot</strong> sets up job costing, WIP, retainage, and gross-receipts tracking by contract activity in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and turns it into job-level profit you can bid from. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware returns. Confirm contractor gross-receipts and licensing detail with the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Division of Revenue</a>.",
  ],
  secAiH: "Delaware construction accounting, in five questions.",
  aiSummary: [
    { q: "Why is Delaware construction accounting different?", a: "It runs on <strong>projects, not periods</strong> &mdash; per-job revenue and cost, often percentage-of-completion, with retainage and change orders. Delaware adds a <strong>gross receipts tax on the contractor by contract activity</strong> (there&rsquo;s no sales tax on materials) that standard bookkeeping can&rsquo;t handle." },
    { q: "Do you set up job costing in QuickBooks?", a: "Yes &mdash; labor, materials, equipment, and subcontractors tracked to each <strong>project and cost code</strong>, so you can bid from real job-level profit instead of a company-wide guess. Common for builders in the Middletown and Sussex growth corridors." },
    { q: "How does Delaware tax construction materials?", a: "Delaware has <strong>no sales tax</strong>, so there&rsquo;s nothing to collect on materials &mdash; but the contractor owes the <strong>gross receipts tax</strong> on contract receipts by activity. We track receipts by activity in QuickBooks; confirm the contractor classification with the Division of Revenue." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes &mdash; <strong>work-in-progress schedules</strong> showing earned revenue versus billings (over/under billing) and <strong>retainage</strong> tracked separately on receivables and payables, so your balance sheet and cash position stay accurate mid-project." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by active jobs, payroll, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],
  secChallengesH: "Three places Delaware contractors lose the numbers.",
  secChallengesLede: "Profitable-looking builders go under when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Job profit is invisible", title: "No real job costing.", body: "Costs land in company-wide buckets, not on jobs. You know the business made money this year &mdash; you don&rsquo;t know <em>which</em> jobs made it and which quietly bled, so you bid the next one blind. The fix is job costing by project and cost code &mdash; labor, materials, equipment, subs &mdash; so every job shows true profit. If you can&rsquo;t pull profit on a single completed job in under a minute, this is your starting point." },
    { signal: "Billing &amp; cash are off", title: "No WIP or retainage tracking.", body: "Without a WIP schedule you can&rsquo;t see over- or under-billing &mdash; so cash looks healthy while you&rsquo;ve borrowed against unearned revenue. Retainage held on both sides distorts the balance sheet further. The fix is WIP schedules (earned vs. billed) and retainage tracked separately on receivables and payables. Over-billing feels like profit until the job finishes; WIP shows reality before it bites." },
    { signal: "Delaware tax is missed", title: "Gross-receipts gaps.", body: "Contractors used to sales-tax states assume materials are taxed and miss what Delaware actually does: no sales tax, but a gross receipts tax on the contractor by contract activity. Mishandle it and the receipts return won&rsquo;t reconcile and the liability goes unreserved. The fix is gross-receipts tracking by activity inside your QuickBooks workflow so the right rate and exclusion apply and the return ties to the books." },
  ],
  secHandleH: "Delaware construction accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your jobs and crew, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Job costing", title: "Job costing setup &amp; maintenance", body: "Labor, materials, equipment, and subcontractors tracked to each project and cost code &mdash; real job-level profitability you can bid from.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; WIP", title: "WIP &amp; over/under billing", body: "Work-in-progress schedules showing earned revenue versus billings, so cash and profit reflect reality mid-project &mdash; on percentage-of-completion or completed-contract.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Retainage", title: "Retainage tracking", body: "Retainage receivable and payable tracked separately, with AIA-style progress billing and lien-waiver discipline, so your balance sheet and cash position stay accurate.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping &rarr;" },
    { num: "04 &middot; Gross receipts", title: "Gross receipts by activity", body: "Contract receipts tracked by Delaware business activity so the right gross-receipts rate and exclusion apply and the return reconciles to the books.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "05 &middot; Payroll-ready", title: "Payroll-ready books", body: "Crew labor coded to jobs and payroll-ready books maintained, with full payroll handled through our global payroll service where you need it.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06 &middot; Cleanup", title: "Job-cost cleanup", body: "Rebuild job costing from messy books, reclassify costs to the right projects and cost codes, fix gross-receipts coding, and reconcile to a known-good baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you build.",
  integrations: [
    "QuickBooks Enterprise &mdash; contractor edition, common on larger DE GCs",
    "Buildertrend &mdash; job management synced to job-cost ledgers",
    "Procore &mdash; project financials reconciled to QuickBooks",
    "Knowify &mdash; AIA billing and change orders",
    "CompanyCam &mdash; job documentation tied to cost codes",
    "QuickBooks Time &mdash; field time to job costing",
    "Gusto &mdash; crew payroll coded to jobs",
    "Gross-receipts tracking by contract activity (Division of Revenue)",
  ],
  integrationsNote: "Using different job-management software? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From guesswork to job-level profit.",
  secProcessLede: "Every Delaware construction engagement follows the same four-phase rhythm &mdash; books accurate first, profit visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your jobs, crew, how you bill, and where the books are breaking &mdash; plus your gross-receipts picture. No pitch." },
    { phase: "Phase 2", title: "Job-cost setup &amp; cleanup", body: "Configure job costing and cost codes, plus a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to reclassify past costs and fix gross-receipts coding where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; WIP", body: "Monthly reconciliation with job-cost reporting, WIP schedules, retainage tracking, and gross-receipts cadence by contract activity." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Job-profitability reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and bonding advisory</a>." },
  ],
  secAdvisoryH: "Accurate job costs are the start. Winning bids is the point.",
  advisoryBody: [
    "Once every job shows real profit and your WIP is clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;how do we bid the next one better?&rdquo; Which job types carry margin, when to chase bigger work, how cash flows across overlapping projects, what overhead each job should absorb &mdash; the decisions that separate Delaware builders who grow from those who stall.",
    "That&rsquo;s where construction advisory comes in: a Certified ProAdvisor who knows your job-cost data turning it into bid strategy, cash-flow forecasting, and bonding-ready financials. As automation handles routine entry, this judgment layer is where contractors find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Delaware construction engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm with its office in Middletown, and reviewed for technical accuracy on job costing, WIP, retainage, and the Delaware gross receipts tax by contract activity (<a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">DE Division of Revenue</a>). TechBrot delivers the books and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Job costing, WIP, retainage, gross-receipts tracking by activity, payroll-ready books &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],
  secRelatedH: "Related Delaware services &amp; industries.",
  related: [
    { title: "Gross Receipts Tax Help", body: "Contract receipts tracked by activity so the right Delaware rate and exclusion apply and the return reconciles.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
    { title: "Bookkeeping Cleanup", body: "Rebuild job costing and reclassify costs to the right Delaware projects, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Specialty trades playbook", body: "How TechBrot builds books for trades and home-services contractors &mdash; scoped for Delaware on the call.", href: "/accounting/industries/specialty-trades/", cta: "Specialty trades &rarr;" },
    { title: "All Delaware industries", body: "See how TechBrot tailors accounting to the way your industry runs in Delaware.", href: "/find-an-accountant/delaware/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is construction accounting different in Delaware?", a: "Construction runs on projects, not periods &mdash; revenue and cost track per job, often by percentage-of-completion, with retainage, change orders, and WIP that standard bookkeeping can&rsquo;t handle. Delaware adds its own layer: no sales tax on materials, but a gross receipts tax on the contractor by contract activity. We build job costing, WIP, retainage, and gross-receipts tracking into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Do you set up job costing in QuickBooks for Delaware builders?", a: "Yes. We configure job costing so labor, materials, equipment, and subcontractor costs track to each project and cost code &mdash; giving you real job-level profitability instead of a company-wide guess. For builders in the Middletown US-301 corridor and the Sussex growth market, that&rsquo;s what lets you bid the next job from real margin and see which work actually pays." },
    { q: "How does Delaware tax construction materials and contracts?", a: "Delaware has no sales tax, so there&rsquo;s nothing to collect on materials &mdash; a real difference from neighboring states. Instead, the contractor owes the gross receipts tax on contract receipts, levied by business activity in the 0.0945% to 1.9914% range after a monthly or quarterly exclusion. We track receipts by activity in QuickBooks so the right rate and exclusion apply and the return reconciles; confirm your specific contractor classification with the Division of Revenue." },
    { q: "Can you produce WIP schedules and handle retainage?", a: "Yes. We maintain work-in-progress schedules showing earned revenue versus billings (over/under billing) and track retainage receivable and payable separately, so your balance sheet and cash position stay accurate mid-project. Over-billing feels like profit until the job finishes &mdash; a clean WIP schedule shows reality before it bites, which matters most when several jobs overlap." },
    { q: "Do you handle construction payroll in Delaware?", a: "We keep your crew labor coded to jobs and your books payroll-ready, and full payroll runs through our global payroll service, scoped for Delaware. We handle the bookkeeping and job-cost mechanics; your CPA files income taxes. If your work involves any prevailing-wage or certified-payroll requirement on a specific project, we scope that openly on the discovery call." },
    { q: "My job costing is a mess. Where do we start in Delaware?", a: "With a cleanup. We reclassify past costs to the correct jobs and cost codes, rebuild job costing, fix any gross-receipts miscoding, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with WIP and retainage. Most Delaware builders come to us mid-mess; it&rsquo;s the normal starting point. Prefer to talk first? Call (877) 751-5575 and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/construction/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Construction Accounting","description":"Construction accounting for Delaware contractors — job costing, WIP, retainage, and gross-receipts tracking by contract activity, set up in QuickBooks by a Certified ProAdvisor for the Middletown and Sussex growth corridors.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-industries-construction.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-ind-construction-summary","#de-ind-construction-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/delaware/industries/"},
          {"@type":"ListItem","position":5,"name":"Construction"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Construction Accounting","serviceType":"Construction bookkeeping and job costing","description":"Job costing, WIP, retainage, and gross-receipts tracking by contract activity for Delaware contractors, trades, and home builders, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Delaware returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware general contractors, subcontractors, specialty trades, and home builders in the Middletown and Sussex growth corridors"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
