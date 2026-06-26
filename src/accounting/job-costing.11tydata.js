/* /accounting/job-costing/ — LIVE baseline accounting service page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acct-jobcost.txt (47 headings, 11 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/job-costing/index.html read
 * for BODY PROSE only. REFERENCE pattern: src/quickbooks/online.njk (proven
 * t-mofu cobalt) for structure + schema; src/accounting/advisory/
 * cash-flow-management.11tydata.js for the FULL schema set (WebPage, BreadcrumbList,
 * Service, ItemList, FAQPage, QAPage). Job-costing angle also in
 * src/accounting/industries/construction.11tydata.js (just built) — cobalt
 * vocabulary + schema copied from there.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar
 * true. Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly
 * brief." NOT rendered here — base chrome owns them / dropped per protocol T2. The
 * 5 quick-answer questions render as NON-heading ai-summary__question (baseline
 * captured them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 * The frozen "Find out which jobs actually make money." H2 is rendered by the
 * layout's ctaBand as final-cta__heading.
 *
 * FAQ: 11 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment
 * append-only). Q1-Q6 substantive, Q7-Q11 schema-only flat variants kept per the
 * append-only contract (NO dedup). visible faq__list = FAQPage schema (same array,
 * NO dedup). The old body also carried a 7th substantive Q/A ("Do you handle
 * certified payroll and AIA billing?") — preserved as scope/section prose (no
 * gutting), not duplicated into the contract FAQ array. FAQPage + QAPage + ItemList
 * emitted from the same arrays — single source of truth.
 *
 * SCHEMA: WebPage, BreadcrumbList, Service (with hasOfferCatalog), ItemList
 * (deliverables), FAQPage (all 11 verbatim, NO dedup), QAPage (from the 5
 * ai-summary questions). QAPage + ItemList NOT dropped.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; no
 * named reviewer in visible content; David Westgate in reviewedBy schema @id only;
 * firm-level authorship; independent firm, not affiliated with Intuit Inc.;
 * operational accounting only — does NOT file income taxes, audit, or set
 * wage-rates; coordinates with CPA/EA and counsel. No <strong> in the dark hero
 * subheading. CTA canonical lexicon: discovery -> /contact/?intent=accounting;
 * file review -> /quickbooks/file-review/?intent=file-review; phone tel. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Job costing, plainly." (from baseline TL;DR body, enriched; no <strong> rule is dark-hero only)
  definition: [
    "<strong>Job costing</strong> is the practice of tracking revenue and cost to each individual job, project, or work order &mdash; instead of only at the company level. <strong>Labor, materials, subcontractors, equipment, and overhead</strong> all get assigned to specific jobs, so each project produces its own P&amp;L and the only question that matters at job close &mdash; <em>did this job make money</em> &mdash; is actually answerable. Contractors, trades, and project-based service firms need it most, but agencies, law and accounting practices, and small manufacturers running custom work all benefit from the same discipline.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> set up cost-code structure, payroll and burden allocation, item-list mapping, and class/location tracking inside your own <a href=\"/quickbooks/online/\">QuickBooks</a> file; handle change orders, retainage, and AIA billing where relevant; produce <strong>WIP schedules</strong> and job-profitability reports; and run it inside recurring <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Operational accounting only &mdash; income-tax filing, audit, and legal stay with your CPA and counsel. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — "Job costing, in five questions." NON-heading questions (baseline captured as <dt>).
  aiSummary: [
    { q: "What is job costing?", a: "Tracking <strong>revenue and cost to each individual job</strong> &mdash; labor, materials, subs, equipment, overhead &mdash; so each project produces its own P&amp;L. The discipline that lets a business answer &ldquo;did this job make money&rdquo; at close." },
    { q: "Who needs it?", a: "<strong>Construction GCs, subs, and trades</strong> most; also engineering, architecture, agencies, consultancies, law and accounting practices billing on matters, and small manufacturers running custom work. Anyone whose company-wide P&amp;L hides job-level truth." },
    { q: "How does it work in QuickBooks?", a: "Customers and sub-customers (or Projects in QBO), item-based transactions mapped to revenue and cost accounts, class or location for extra dimensions, and payroll integration for labor allocation. Set up correctly, every transaction lands against its job automatically." },
    { q: "What is WIP reporting?", a: "<strong>Work-in-progress</strong>: earned revenue versus billings on in-process jobs, with the variance recognized as <strong>over- or under-billing</strong> on the balance sheet. Essential for accurate financials, lender reporting, and bonding." },
    { q: "What does it cost?", a: "Setup inside a QuickBooks setup or cleanup engagement, scoped to the business. Ongoing job-costing bookkeeping included in monthly bookkeeping ($400&ndash;$2,500+/mo with complexity), priced higher for active job volume, AIA, or certified payroll. No hourly billing." },
  ],

  // SIGNALS — "If any of these sound familiar, the company-wide P&L is lying to you." (grid-3 buyer-cards). 6 frozen H3s verbatim.
  signals: [
    { opener: "You know jobs vary in profitability &mdash; you just can&rsquo;t see by how much.", body: "Everyone has &ldquo;great jobs&rdquo; and &ldquo;bad jobs.&rdquo; If you can&rsquo;t name the dollar margin on each, you&rsquo;re estimating &mdash; and the estimates are usually generous." },
    { opener: "Labor isn&rsquo;t allocated to jobs.", body: "If payroll is one company-wide expense line, the biggest cost driver in your P&amp;L isn&rsquo;t tied to any project. Labor allocation is where most job-costing setups break down first." },
    { opener: "Change orders aren&rsquo;t tracked separately.", body: "If change orders blend into the original contract, you can&rsquo;t see scope creep, can&rsquo;t see margin impact, and can&rsquo;t learn anything from one job to the next." },
    { opener: "Year-end margin surprises you.", body: "If &ldquo;we had a great year&rdquo; and &ldquo;we barely broke even&rdquo; both feel plausible until the CPA tells you, the books aren&rsquo;t producing a real-time read." },
    { opener: "A lender or bonding company wants WIP.", body: "Sureties and lenders for construction expect a real WIP schedule. &ldquo;We&rsquo;ll get back to you&rdquo; signals weakness; clean WIP signals credibility." },
    { opener: "Estimating doesn&rsquo;t learn from actuals.", body: "If you can&rsquo;t compare estimated cost to actual cost by job, every new bid is a fresh guess. Job costing closes that loop." },
  ],

  // DELIVERABLES — "What job costing actually delivers." (grid-3 stack-8). 6 frozen H3s verbatim.
  deliverables: [
    { num: "01", name: "Cost-code structure", body: "An industry-appropriate cost-code structure &mdash; CSI divisions for construction, project phases for services, work-order routings for manufacturing &mdash; built into the <a href=\"/accounting/chart-of-accounts-setup/\">chart of accounts</a> and item list. Labor, materials, subs, equipment, and overhead each get a defined home, so every transaction has somewhere true to land." },
    { num: "02", name: "Labor &amp; burden allocation", body: "Payroll integration so labor lands on the right jobs, with burden (payroll taxes, benefits, workers&rsquo; comp) allocated &mdash; so reported labor cost reflects reality, not just wages. Labor is the largest and most-mis-tracked cost driver on most jobs; getting it allocated is where job costing earns its keep first." },
    { num: "03", name: "Materials, subs &amp; equipment", body: "Materials, subcontractor invoices, and equipment cost coded to jobs at bill entry &mdash; not assigned weeks later when the trail has gone cold. Committed costs and open purchase orders are visible against the job before the bill even arrives, so the cost picture is current, not retrospective." },
    { num: "04", name: "Change orders &amp; retainage", body: "Change orders tracked separately against original contract value; retainage held back on both sides of receivables and payables, so the balance sheet reflects real exposure. Approved change orders flow into the contract value and surface in WIP and profitability &mdash; the single most common place margin quietly goes missing." },
    { num: "05", name: "WIP &amp; AIA billing", body: "Work-in-progress schedules showing earned vs billed, over/under recognition on the balance sheet under percentage-of-completion, and AIA-style progress billing (G702/G703) workflows for contractors that need them. WIP is what lenders and sureties ask for &mdash; and what keeps over-billing from masquerading as profit." },
    { num: "06", name: "Job-profitability reporting", body: "Monthly reports showing margin by job and phase, estimated vs actual cost, top and bottom performers, and the patterns across jobs that change how you bid. The point of the whole exercise: a number you can act on, not a spreadsheet that sits unread." },
  ],

  // AUDIENCES — "Built for project businesses — in all their flavors." (grid-3 stack-8). 6 frozen H3s verbatim.
  audiences: [
    { num: "01", name: "General contractors &amp; subs", body: "The classic users. Cost-code structure, certified payroll where required, AIA billing, WIP, retainage &mdash; the full stack. See <a href=\"/accounting/industries/construction/\">construction accounting</a>." },
    { num: "02", name: "Trades &amp; specialty contractors", body: "Electrical, mechanical, plumbing, HVAC, roofing &mdash; same project-by-project economics, often with service-and-project hybrid models. Job costing distinguishes one from the other so the service truck doesn&rsquo;t subsidize the loss-making install." },
    { num: "03", name: "Architecture, engineering &amp; design", body: "Hourly-billed and fixed-fee project work where labor is the dominant cost. Project profitability and utilization both depend on job-level cost tracking &mdash; without it, the fixed-fee jobs that overrun are invisible until year-end." },
    { num: "04", name: "Agencies &amp; consultancies", body: "Marketing agencies, dev shops, management consultancies &mdash; project margin and utilization are the only numbers that matter. Job costing makes both visible, and turns &ldquo;we&rsquo;re busy&rdquo; into &ldquo;we&rsquo;re busy on the profitable work.&rdquo;" },
    { num: "05", name: "Professional services on matters", body: "Law firms, accounting practices, and other professional services billing by matter or engagement &mdash; matter-level cost and realization is the same discipline by a different name. Which matters carry margin, and which write-downs repeat, become answerable." },
    { num: "06", name: "Small custom manufacturers", body: "Custom or made-to-order manufacturing where each work order has its own materials, labor, and overhead. Job costing replaces standard-costing assumptions with actuals &mdash; so the quote that loses money in production stops repeating." },
  ],

  // PROCESS — "From setup to reports you actually use." (process-diagram). 4 frozen H3s verbatim.
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your job types, billing model, cost structure, payroll setup, and whether AIA billing, certified payroll, or retainage apply. No pitch." },
    { num: "Phase 2", name: "Setup", body: "Cost-code structure, item-list, payroll allocation, class or location tracking, WIP method &mdash; designed and built. Where existing books need restructure, that&rsquo;s included or scoped as <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>." },
    { num: "Phase 3", name: "Recurring job-costing bookkeeping", body: "Every transaction coded to its job. Labor, materials, subs, overhead. Change orders, retainage, AIA billing maintained. WIP updated monthly. All inside <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>." },
    { num: "Phase 4", name: "Reporting &amp; review", body: "A monthly package with job-profitability, WIP, estimated-vs-actual, and segment views &mdash; the reports that turn into pricing and bidding decisions, not a binder nobody opens." },
  ],

  // HONEST SCOPE — "What we do, don't, and who we coordinate with." (grid-3 stack-8). 3 frozen H3s verbatim.
  // Preserves the baseline "Do you handle certified payroll and AIA billing?" Q/A substance (no gutting) in the "We do" cell.
  scope: [
    { name: "We do", body: "Job-costing setup in QuickBooks. Cost-code structure. Payroll and burden allocation. Materials, subs, and equipment tracking. Change orders, retainage, AIA-style progress billing (G702/G703). WIP schedules and over/under recognition. Monthly job-profitability and estimated-vs-actual reporting. Certified payroll bookkeeping, in coordination with payroll counsel where required." },
    { name: "We don&rsquo;t", body: "File income tax returns or represent before the IRS. Provide tax-position or legal advice. Issue formal audit, review, or compilation reports. Provide construction-law or surety-bond counsel. Set prevailing-wage rates or interpret labor law &mdash; we book the numbers; your counsel sets the rates." },
    { name: "We coordinate with", body: "Your CPA or EA for tax. Your construction or labor counsel on prevailing-wage and certified-payroll rules. Your surety, banker, and bonding company on WIP and lender requirements. Your estimator and project managers on cost coding and change-order workflow." },
  ],

  // BRIDGE / ADVISORY — "Job-level numbers change how you bid — if anyone reads them." Body carried as section prose.
  bridgeBody: [
    "Job-profitability reports surface patterns: which job types make money, which clients are worth more time, where estimates consistently miss, when scope creep is killing margin. Acting on those patterns &mdash; in bidding, pricing, staffing, and which work to chase &mdash; is where the discipline turns from accounting into strategy.",
    "Most TechBrot clients pair job-costing bookkeeping with monthly performance review &mdash; the working session that turns job reports into decisions. For larger contractors and agencies, a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> takes job costing as one piece of a broader strategic-finance seat. As automation handles the routine, this interpretation layer is where the real value now lives. <a href=\"/accounting/advisory/\">Explore advisory &rarr;</a>",
  ],

  // FAQ — 11 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment append-only).
  // Q1-Q6 substantive; Q7-Q11 schema-only flat variants kept per append-only contract (NO dedup).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  faq: [
    { q: "What is job costing?", a: "Job costing is the practice of tracking revenue and cost to each individual job, project, or work order &mdash; instead of only at the company level. Labor, materials, subcontractors, equipment, and overhead are all assigned to specific jobs, so each one produces its own profit-and-loss view. Job costing is what lets a business answer the only question that matters at project close: did this job make money, and how much?" },
    { q: "Who needs job costing?", a: "Any business that earns revenue and incurs cost on discrete projects. The classic users are construction general contractors, subcontractors, and trades, plus engineering and architecture firms. The same logic applies to project-based service firms &mdash; agencies, consultancies, law and accounting practices billing on matters &mdash; and to small manufacturers running custom work orders. If the company-wide P&amp;L hides whether individual jobs make money, job costing is the answer." },
    { q: "How does job costing work in QuickBooks?", a: "In QuickBooks, job costing uses customers and sub-customers (or projects in QuickBooks Online), item-based transactions mapped to revenue and cost accounts, and class or location tracking for additional dimensions. Labor is allocated through payroll integration; materials and subcontractor costs are coded to the job at invoice or bill entry; overhead is allocated by a defined method. Set up correctly, every transaction lands against its job automatically, and <a href=\"/accounting/profitability-analysis/\">job-profitability reports</a> run themselves." },
    { q: "What is WIP (work-in-progress) reporting?", a: "Work-in-progress reporting is the schedule contractors use to show earned revenue versus billings on jobs in process &mdash; what&rsquo;s been earned (under percentage-of-completion or another method) versus what&rsquo;s been billed. The variance is recognized as either over-billing (a liability) or under-billing (an asset) on the balance sheet, so revenue is matched to the period work was actually performed. WIP is essential for accurate financials, lender reporting, and surety bonding." },
    { q: "How are change orders handled?", a: "Change orders alter the original scope and contract value mid-job. In a proper job-costing setup, each change order is tracked separately against the original contract &mdash; added to the contract value once approved, with associated cost coded to the job, and surfaced in WIP and profitability reports. Mishandled change orders are one of the most common reasons construction P&amp;Ls misstate margin and surprise owners at job close." },
    { q: "What does job costing cost?", a: "Job costing setup &mdash; cost-code structure, item-list configuration, payroll allocation, and WIP method &mdash; is typically delivered inside a <a href=\"/quickbooks/setup/\">QuickBooks setup</a> or <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> engagement, scoped to the business. Ongoing job-costing bookkeeping is included in <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> engagements ($400 to $2,500+/mo with complexity adjustments), priced higher for businesses with active job volume, AIA billing, or certified payroll. No hourly billing. To scope job costing for your business, call a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],

  // RELATED — "Related services." (stack-8 linked). 4 frozen H3s verbatim.
  related: [
    { title: "Construction accounting", href: "/accounting/industries/construction/", body: "The industry job costing was built for &mdash; with the full scope of WIP, retainage, AIA, and certified payroll." },
    { title: "Chart of accounts setup", href: "/accounting/chart-of-accounts-setup/", body: "The structural foundation job costing builds on top of &mdash; cost-code structure starts here." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "The recurring engagement job costing runs inside of &mdash; every transaction coded to its job, WIP updated monthly." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/", body: "Where job-costing structure gets built when starting fresh &mdash; item list, classes, and payroll allocation configured right." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name in visible content).
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Cost-code, labor/burden, materials, subs, change orders, retainage, WIP, AIA billing, profitability reporting &middot; not tax, audit, legal, or wage-rate determination" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; setup inside QuickBooks setup/cleanup; recurring inside monthly bookkeeping" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/job-costing/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/job-costing-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-jobcost-definition","#acct-jobcost-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Job Costing","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Job Costing Setup & Bookkeeping","serviceType":"Job costing accounting services","description":"Job costing setup and monthly bookkeeping in QuickBooks for U.S. contractors, trades, project-based service firms, and small manufacturers — including cost-code structure, labor and burden allocation, materials and subcontractor tracking, change-order handling, work-in-progress (WIP) reporting, and job-profitability statements. Delivered by Certified ProAdvisors. Operational accounting only; income-tax filing, audit, assurance, and legal advice stay with licensed professionals.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. general contractors, subcontractors, trades, project-based service firms, agencies, and small manufacturers"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Job costing deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What job costing delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Job costing — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
