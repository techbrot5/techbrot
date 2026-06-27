/* /find-an-accountant/new-york/industries/consulting/ — t-location INDUSTRY CHILD
 * (deeper than a city child; 34-heading contract). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-consulting.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/consulting/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * cities/brooklyn.11tydata.js + new-york.11tydata.js: JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting
 * the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity
 * is generated from the same `faq` array the visible faq__list renders from — single
 * source of truth.
 *
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. T2 headings frozen — every contract
 * H1/H2/H3 appears verbatim at its exact level; entities preserved; the five footer-chrome
 * H2s (The monthly brief / Accounting / QuickBooks / Company / Network) are NOT rendered
 * (chrome, not page content). T3 no collapse. T4 the 8 contract FAQ render verbatim/flat
 * and feed FAQPage from one array (enrichment append-only — original answers preserved
 * word-for-word; the old in-body cleanup hyperlink in A8 is dropped to keep the answer
 * verbatim per contract). T6 content-to-goal: real NY consulting/professional-services
 * substance — NYC UBT on unincorporated firms, partner/member reporting & guaranteed
 * payments, project profitability, utilization/realization, 1099 contractor classification,
 * multi-state nexus for remote consultants, retainer vs. project revenue recognition.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. No
 * founder/personal name in visible content (firm-level review byline only; the old page's
 * "David Westgate" reviewer line is reframed to the firm team per the standing rule for
 * visible content). Independent firm — does NOT file NY/NYC taxes and does NOT determine
 * nexus; coordinates with the client's CPA, who files and confirms taxability. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (the full consulting summary prose).
  // (H2: The short version.)
  summarized: "<strong>Consulting accounting</strong> in New York is about project and client profitability, not just clean books. The work that matters: tracking <strong>billable utilization</strong> and effective rates, recognizing <strong>retainer and milestone revenue</strong> in the right period (deferred revenue, not cash-in), separating <strong>pass-through expenses from marked-up costs</strong>, and handling the New York wrinkles a consultancy runs into &mdash; the <strong>NYC Unincorporated Business Tax</strong> on sole proprietors, partnerships, and LLCs, partner and member reporting with guaranteed payments, and the <strong>multi-state nexus</strong> a NY firm creates the moment it serves out-of-state clients with remote staff. A named Certified ProAdvisor builds your <a href=\"/quickbooks/online/\">QuickBooks</a> file to report profit by client and project, runs <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly close</a>, and tracks <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC sales tax</a> on the consulting services that are taxable in New York. Fixed-fee at <a href=\"/find-an-accountant/new-york/pricing/\">$400&ndash;$2,500+/mo</a>, all 62 counties. Independent firm &mdash; we do the books; your CPA files.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block; the
  // questions stay shorter/punchier than the 8 FAQ — this is the quick-answer block).
  // (H2: New York consulting accounting, in five questions.)
  aiSummary: [
    { q: "What&rsquo;s different about accounting for a consulting firm?", a: "<strong>Profit lives in utilization and project margin, not the bank balance.</strong> Consulting accounting tracks billable rates and realization, recognizes retainer and milestone revenue in the right period, and separates pass-through costs from marked-up ones &mdash; so you see which clients and projects actually make money." },
    { q: "Do New York consultants charge sales tax?", a: "<strong>It depends on the service.</strong> Pure management or strategy consulting is generally not taxable in New York, but adjacent services &mdash; certain information services, prewritten software, some staffing &mdash; can be. We set QuickBooks to tax what&rsquo;s taxable and leave the rest, so your quarterly return reconciles. Your CPA confirms taxability." },
    { q: "What about clients in other states?", a: "<strong>That&rsquo;s where nexus appears.</strong> A NY consultancy serving out-of-state clients &mdash; or with remote staff living elsewhere &mdash; can trigger income- and sales-tax nexus in those states. We track revenue and payroll by state so the data your CPA needs to manage multi-state exposure is there, not reconstructed later." },
    { q: "Do I owe the NYC Unincorporated Business Tax?", a: "<strong>If you&rsquo;re unincorporated and operating in NYC, likely yes.</strong> The UBT is a 4% NYC tax on the net income of sole proprietors, partnerships, and LLCs doing business in the five boroughs &mdash; one of the most-mishandled areas for growing professional-services firms. We keep the books structured so your CPA can file it accurately." },
    { q: "Can you report profit by client and project?", a: "<strong>Yes &mdash; that&rsquo;s the core of it.</strong> Using QuickBooks classes, projects, and tags, a named Certified ProAdvisor structures the file so you can pull profitability by client, project, or service line, not just a company-wide P&amp;L." },
  ],

  // CHALLENGES — three places the numbers slip (stack-8 cards). The 3 frozen H3s, verbatim;
  // problem/fix/honesty prose lifted from the live urgency-tiers band, enriched with the
  // UBT/partner-reporting + classification specifics the migration brief calls for.
  // (H2: Three places New York consultancies lose the real numbers. + 3 H3s)
  challenges: [
    { signal: "Client profit is invisible",
      heading: "No project or client costing.",
      problem: "<strong>The problem:</strong> Revenue and labor land in company-wide totals, not against clients or projects. You know the firm was profitable this year &mdash; you don&rsquo;t know <em>which engagements</em> earned it and which ran over budget on your team&rsquo;s time. Utilization and realization stay invisible, and you price the next proposal blind.",
      fix: "<strong>The fix:</strong> Profit tracked by client and project using QuickBooks classes, projects, and tags &mdash; billable time and direct costs mapped to each engagement, so margin, utilization, and realization are reportable per client and per service line.",
      honesty: "<strong>Honest read:</strong> If you can&rsquo;t pull margin on a single completed engagement in under a minute, this is your starting point." },
    { signal: "Revenue is booked wrong",
      heading: "Retainers and milestones recognized as cash-in.",
      problem: "<strong>The problem:</strong> A six-month retainer paid up front isn&rsquo;t six months of profit today &mdash; it&rsquo;s deferred revenue earned over the term. Book it as cash-in and the P&amp;L swings wildly, margins look unreal, and a mid-year exit, raise, or due-diligence review gets messy. Mixed retainer-and-project shops feel this worst.",
      fix: "<strong>The fix:</strong> Retainer and milestone revenue recognized across the period it&rsquo;s earned, with deferred revenue carried on the balance sheet and a schedule that reconciles every month &mdash; the same discipline that holds up in diligence.",
      honesty: "<strong>Honest read:</strong> If a big invoice makes one month look spectacular and the next look broke, your revenue timing is off." },
    { signal: "NY, UBT &amp; multi-state risk",
      heading: "No handle on nexus or taxable services.",
      problem: "<strong>The problem:</strong> The moment a NY consultancy serves out-of-state clients or hires remote staff elsewhere, it can create income- and sales-tax nexus in those states. Not all consulting is sales-tax-free in New York &mdash; some information and staffing services are taxable. And unincorporated firms owe the NYC UBT, which partners and members routinely overlook until a notice arrives.",
      fix: "<strong>The fix:</strong> QuickBooks set to tax the services that are taxable in NY, with by-state revenue and payroll data for your CPA to manage multi-state exposure &mdash; and NYC-sourced income tracked so the UBT on the NYC-202 or NYC-204 is clean to file.",
      honesty: "<strong>Honest read:</strong> If you bill clients in three states, have remote staff, or have never looked at the UBT, the exposure is already accruing." },
  ],

  // WHAT'S INCLUDED — 6 buyer-cards. The 6 frozen H3s, verbatim. Bodies lifted from the
  // live hub-service-grid, enriched with the real consulting specifics (guaranteed payments,
  // AB5-style classification, multi-state) the migration brief calls for.
  // (H2: New York consulting accounting, done by an expert. + 6 H3s)
  included: [
    { num: "01 &middot; Client &amp; project profit", title: "Profit by client &amp; project", body: "Classes, projects, and tags configured so every client and engagement shows true margin &mdash; with utilization and realization reportable per service line. The reporting you price proposals from.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { num: "02 &middot; Revenue recognition", title: "Retainer &amp; milestone revenue", body: "Deferred revenue tracked and recognized across the period it&rsquo;s earned, so monthly profit reflects work delivered &mdash; not when the invoice cleared. Clean enough for a raise, sale, or due-diligence review.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03 &middot; Pass-through costs", title: "Pass-through vs. marked-up", body: "Reimbursable client costs separated from marked-up expenses, so margin is real and client invoicing is clean &mdash; and so the books read as principal-vs-agent revenue, not inflated gross.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Sales tax on services", title: "NY taxable-service tracking", body: "QuickBooks set to charge NY sales tax on the consulting services that are taxable &mdash; certain information services, prewritten software, some staffing &mdash; and leave the rest, so your quarterly return reconciles to the books.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05 &middot; Multi-state &amp; nexus data", title: "By-state revenue &amp; payroll", body: "Revenue and payroll tracked by state so your CPA can manage income- and sales-tax nexus from remote staff and out-of-state clients &mdash; the exposure a growing NY consultancy creates first and notices last.", href: "/find-an-accountant/new-york/state-tax-notice-help/", cta: "State notices &rarr;" },
    { num: "06 &middot; Contractor vs. employee", title: "1099 &amp; payroll handling", body: "Subcontractors and W-2 staff tracked and paid correctly, with the worker-classification care New York enforces closely &mdash; 1099 vs. employee, partner and member draws, and guaranteed payments booked the right way.", href: "/accounting/payroll-management/", cta: "Payroll &rarr;" },
  ],

  // TOOLS — integrations rendered as a checks-list (cobalt vocab; no integration-grid).
  // Names verbatim from the live integration-grid.
  // (H2: Connected to how you run the practice.)
  tools: [
    "<strong>QuickBooks Online</strong> &mdash; the system of record your file lives in",
    "<strong>Harvest</strong> and <strong>Toggl</strong> &mdash; time-tracking exports reconciled to billable utilization",
    "<strong>HubSpot</strong> &mdash; CRM and pipeline data mapped to client and service line",
    "<strong>Bill.com</strong> &mdash; AP and vendor payments synced into the books",
    "<strong>Stripe</strong> &mdash; client payments, retainers, and deposits reconciled to deferred revenue",
    "<strong>Expensify</strong> &mdash; reimbursable pass-through costs separated from marked-up expenses",
    "<strong>Gusto</strong> &mdash; payroll with by-state withholding for remote and multi-state staff",
  ],
  toolsNote: "Using different time-tracking or PSA software? If it exports to QuickBooks, we can work with it &mdash; we build the workflow around your stack rather than asking you to switch. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase cadence rendered as stack-8 (cobalt vocab; no cadence component).
  // The 4 frozen H3s, verbatim; phase prose from the live cadence band.
  // (H2: From flat P&L to client-level profit. + 4 H3s)
  process: [
    { phase: "Phase 1", heading: "Discovery", body: "A 30-minute call to map your service lines, retainer and project mix, where clients are based, where your team works from, and where the books stop telling you the truth. No pitch." },
    { phase: "Phase 2", heading: "Structure &amp; cleanup", body: "Configure client and project classes, revenue-recognition handling, and NYC-sourced income tracking for the UBT, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to reclassify past revenue and costs to the right engagements." },
    { phase: "Phase 3", heading: "Monthly close &amp; reporting", body: "Monthly reconciliation with client- and project-profitability reporting, deferred-revenue schedules, and by-state revenue and payroll tracking for multi-state nexus." },
    { phase: "Phase 4", heading: "Reporting &amp; advisory", body: "Profitability and utilization reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">pricing and cash-flow advisory</a>." },
  ],

  // ADVISORY — mission block. STANDING brand line ("Automation handles the data entry. We
  // handle the judgment.") is kept inside the body prose; the H2 is the contract heading.
  // (H2: Accurate client margins are the start. Pricing the work is the point.)
  advisoryBody: [
    "Once every client and project shows real profit and your revenue is recognized cleanly, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what should we charge, and who should we fire?&rdquo; Which service lines carry margin, which clients quietly cost more than they pay, when to raise rates, how cash flows across overlapping retainers, how partner and member draws square against real profit &mdash; the decisions that separate New York consultancies that scale from those that just stay busy.",
    "That&rsquo;s where <strong>advisory</strong> comes in: a Certified ProAdvisor who knows your client-profitability data turning it into pricing strategy, utilization targets, and cash-flow forecasting. <strong>Automation handles the data entry. We handle the judgment.</strong> As automation takes over routine entry, this judgment layer is where consultancies find their edge.",
    "<a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — grid-2 buyer-cards. The 4 frozen H3s, verbatim. Links/bodies from the live
  // related-grid.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "Monthly bookkeeping", href: "/find-an-accountant/new-york/monthly-bookkeeping/", body: "Client- and project-level monthly close that keeps consulting margins visible.", cta: "Explore monthly &rarr;" },
    { title: "NY sales tax help", href: "/find-an-accountant/new-york/sales-tax-help/", body: "Which consulting services are taxable in New York, tracked correctly in QuickBooks.", cta: "Sales tax help &rarr;" },
    { title: "State tax notice help", href: "/find-an-accountant/new-york/state-tax-notice-help/", body: "Multi-state nexus from out-of-state clients and remote staff, with the data your CPA needs.", cta: "State notices &rarr;" },
    { title: "All NY industries", href: "/find-an-accountant/new-york/industries/", body: "See how TechBrot tailors accounting to the way your industry runs in New York.", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name; reframed from the old
  // page's named-reviewer line per the standing rule for visible content).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope &middot; Client retains QuickBooks ownership &middot; Taxability confirmed by your CPA &middot; No tax-filing, nexus-determination, or representation claims (out of scope) &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // Original answers preserved word-for-word (the old in-body cleanup link in A8 is dropped
  // so the answer text matches the contract verbatim).
  // (H2: New York consulting accounting questions.)
  faq: [
    { q: "What makes accounting for a New York consulting firm different?", a: "Consulting profit lives in utilization and project margin, not the bank balance. Good consulting accounting tracks billable rates and project costs so you can see which clients and engagements actually make money, recognizes retainer and milestone revenue in the period it&rsquo;s earned rather than when cash arrives, and separates reimbursable pass-through costs from marked-up ones. For a New York firm it also means handling sales tax on the consulting services that are taxable here and tracking the multi-state exposure that out-of-state clients and remote staff create." },
    { q: "Do consultants have to charge sales tax in New York?", a: "It depends on the service. Pure management or strategy consulting is generally not subject to New York sales tax, but several adjacent services are &mdash; certain information services, prewritten software, and some staffing arrangements, for example. The risk is treating everything as non-taxable when part of what you sell is taxable. We configure QuickBooks to charge sales tax on the taxable services and leave the rest, so your quarterly New York return reconciles to the books. Your CPA confirms taxability for your specific offering and files the return." },
    { q: "I have clients in other states &mdash; does that create a tax problem?", a: "It can. Serving clients in other states, or employing remote staff who live elsewhere, can create income-tax and sales-tax nexus in those states &mdash; meaning you may have filing obligations beyond New York. It&rsquo;s one of the most common things growing consultancies overlook. We don&rsquo;t determine your nexus position (your CPA does that), but we structure QuickBooks to track revenue and payroll by state, so the data your CPA needs to assess and manage multi-state exposure is there rather than reconstructed under pressure later." },
    { q: "How much does consulting bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York consultancy runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by transaction volume, number of accounts, and how much project- and client-level reporting you need &mdash; a solo advisor on retainers is at the lower end, a multi-consultant firm with project accounting and deferred revenue higher. We quote a firm number after reviewing your file." },
    { q: "Can you show profit by client and by project?", a: "Yes &mdash; it&rsquo;s the core of consulting accounting. Using QuickBooks classes, projects, and tags, we structure your file so you can pull a profit-and-loss filtered by client, project, or service line rather than only a company-wide view. That&rsquo;s what lets you see which engagements carry margin, which clients cost more time than they pay for, and where to focus or raise rates." },
    { q: "How do you handle retainers and upfront payments?", a: "A retainer or milestone paid up front is deferred revenue &mdash; earned over the period you deliver the work, not profit on the day it lands. We book it to a deferred-revenue liability and recognize it across the engagement, so your monthly profit reflects work actually delivered. Without that, one big invoice makes a month look spectacular and the next look broke, and your margins never read true. Clean revenue recognition also matters if you ever raise capital, sell, or face due diligence." },
    { q: "Do you work with my time-tracking and invoicing tools?", a: "Yes. We work alongside the tools consultancies use &mdash; Harvest, Toggl, HubSpot, Bill.com, Stripe, Expensify, Gusto, and others &mdash; reconciling what they export into QuickBooks. If your time-tracking or PSA platform exports to QuickBooks, we can build the workflow around it rather than asking you to switch. We work in your own QuickBooks file, which you continue to own." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file remotely, map your service lines and client mix, determine whether you need a cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We do the books; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/consulting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York consulting accounting","description":"Consulting & professional-services accounting for New York firms — profit by client and project, retainer revenue recognition, NY taxable-service tracking, multi-state nexus data. From $400/mo. Call (877) 751-5575.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-industries-consulting.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-consulting-summary","#ny-ind-consulting-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-14"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Consulting"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Consulting Accounting Service","serviceType":"Consulting and professional-services bookkeeping","description":"Bookkeeping and QuickBooks accounting for New York consulting and professional-services firms — client/project profitability, retainer and milestone revenue recognition, NYC UBT-ready books, NY taxable-service tracking, and multi-state nexus data — delivered by a Certified QuickBooks ProAdvisor. Independent firm; does not file NY State or NYC tax returns and does not determine nexus — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},"audience":{"@type":"BusinessAudience","name":"New York consultancies, agencies, professional-services firms, and independent advisors"},"offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
