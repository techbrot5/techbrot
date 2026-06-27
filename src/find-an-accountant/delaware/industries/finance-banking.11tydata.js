/* /find-an-accountant/delaware/industries/finance-banking/ — t-location INDUSTRY child.
 * Mirrors NY industries/construction.11tydata.js. Content arrays + eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service, FAQPage). FAQPage from the same `faq` array.
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md ONLY. Finance angle: Wilmington credit-card/
 * banking corridor — fintechs, lenders, RIAs/advisers, fund administrators/SPVs; intercompany;
 * audit-ready reporting; franchise-tax reserve.
 *
 * HONESTY (R5, HARD): this is BOOKKEEPING and management reporting, NOT bank regulatory filing.
 * TechBrot is not a bank, broker-dealer, RIA compliance filer, or auditor — it keeps the books and
 * coordinates with the client's CPA, auditor, and counsel, who file/audit. Does NOT file Delaware
 * returns or the franchise tax. No invented reviews/stats/clients. No founder name; David Westgate
 * only as reviewedBy #david-westgate. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Delaware finance &amp; banking accounting, plainly.",
  summary: [
    "Wilmington is the country&rsquo;s <strong>credit-card and banking corridor</strong> &mdash; the reason a large share of U.S. card issuers and lenders are domiciled in Delaware &mdash; and around it sits a dense layer of <strong>fintechs, specialty lenders, RIAs and investment advisers, and fund administrators and SPVs</strong>. What these businesses share is structural complexity: multiple entities, intercompany flows, investor or lender reporting, and a low tolerance for books that don&rsquo;t tie out. They need <strong>clean intercompany structure</strong>, accurate <strong>management reporting</strong>, and books that are <strong>audit-ready</strong> when the CPA, auditor, or an LP comes asking.",
    "Here is the firm line, stated plainly: <strong>this is bookkeeping and management reporting &mdash; not bank regulatory filing</strong>. TechBrot is not a bank, broker-dealer, RIA compliance filer, or auditor, and we do not prepare call reports, Form ADV, regulatory capital filings, or audited financial statements. What we do is keep the underlying books clean and consistent in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file &mdash; per entity, with intercompany reconciled &mdash; so your CPA, your auditor, and your compliance counsel have a reliable foundation to file and audit from.",
    "The Delaware tax layer still applies: every entity owes the annual <strong>franchise tax</strong> (a flat $300 for an LLC; $175&ndash;$200,000 for a corporation by the authorized-shares or assumed-par-value method) that has to be reserved for, and there is no sales tax but a <strong>gross receipts tax</strong> on certain in-state activity. <strong>TechBrot</strong> sets up per-entity books, intercompany structure, the franchise-tax reserve, and audit-ready reporting, keeps it accurate monthly, and coordinates with your CPA, auditor, and counsel, who file. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  secAiH: "Delaware finance accounting, in five questions.",
  aiSummary: [
    { q: "Who do you serve in Delaware finance and banking?", a: "<strong>Fintechs, specialty lenders, RIAs and advisers, and fund administrators and SPVs</strong> in Wilmington&rsquo;s banking corridor &mdash; businesses with multiple entities, intercompany flows, and investor or lender reporting that need clean, audit-ready books." },
    { q: "Do you handle bank regulatory filings?", a: "No &mdash; and this matters. <strong>This is bookkeeping and management reporting, not bank regulatory filing.</strong> We don&rsquo;t prepare call reports, Form ADV, regulatory capital filings, or audited statements. We keep the books clean and coordinate with your CPA, auditor, and compliance counsel, who file and audit." },
    { q: "Can you produce audit-ready books?", a: "Yes &mdash; <strong>per-entity books with intercompany reconciled, clean supporting schedules, and consistent monthly reporting</strong>, so when your CPA, auditor, or an LP comes asking, the foundation ties out. We prepare the books to be audited; we don&rsquo;t issue the audit opinion." },
    { q: "Do you handle intercompany and fund structures?", a: "Yes &mdash; <strong>multi-entity and SPV structures with intercompany due-to/due-from accounts reconciled</strong> and a consolidation approach your CPA can work from. We keep the books; fund administration, valuations, and regulatory work stay with your specialists." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by entity count, reporting cadence, and complexity. Monthly bookkeeping starts at <strong>$400/mo</strong>, with fractional CFO from $1,500/mo where deeper reporting is needed. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],
  secChallengesH: "Three places Delaware finance-entity books break.",
  secChallengesLede: "Finance entities look fine until an auditor or LP asks for support. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Intercompany doesn&rsquo;t tie", title: "Multi-entity flows unreconciled.", body: "Capital moves between the management company, funds, and SPVs, but intercompany balances aren&rsquo;t reconciled &mdash; so consolidation doesn&rsquo;t net and no entity has clean standalone books. The fix is matched due-to/due-from accounts reconciled every period and a documented allocation method, so each entity stands on its own and the group ties out. If intercompany doesn&rsquo;t net to zero, this is your starting point." },
    { signal: "Not audit-ready", title: "No support behind the numbers.", body: "The financials exist but the schedules behind them don&rsquo;t &mdash; so when an auditor, CPA, or LP asks for support, it&rsquo;s a fire drill. The fix is audit-ready books: clean reconciliations, supporting schedules, and consistent monthly close, so the foundation is always ready. We prepare the books to be audited; your auditor issues the opinion." },
    { signal: "Reserves &amp; entity gaps", title: "Franchise tax &amp; entity sprawl.", body: "Each Delaware entity owes the annual franchise tax, and finance structures spawn entities fast &mdash; so reserves go untracked and some entities have no real books at all. The fix is a franchise-tax reserve per entity and a clean set of books for every entity in the structure, so nothing is forgotten and your CPA and counsel can file on time." },
  ],
  secHandleH: "Delaware finance accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your entity structure and reporting needs, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Per-entity", title: "Per-entity books", body: "Clean standalone books for the management company, funds, and SPVs &mdash; so each entity&rsquo;s financials are real and ready for your CPA and auditor.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; Intercompany", title: "Intercompany structure", body: "Matched due-to/due-from accounts and a documented allocation method, reconciled every period so the group consolidates cleanly without double-counting.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Audit-ready", title: "Audit-ready reporting", body: "Clean reconciliations, supporting schedules, and consistent monthly close, so the books tie out when the CPA, auditor, or an LP asks.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping &rarr;" },
    { num: "04 &middot; Franchise reserve", title: "Per-entity franchise reserve", body: "The annual franchise tax tracked and reserved for each entity, with the lower corporate method confirmed &mdash; filed by your agent or CPA.", href: "/find-an-accountant/delaware/franchise-tax-help/", cta: "Delaware franchise tax help &rarr;" },
    { num: "05 &middot; Reporting", title: "Management &amp; CFO reporting", body: "Investor and lender-ready management reporting and, where needed, fractional CFO depth &mdash; forecasting and board packages built on clean books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
    { num: "06 &middot; Cleanup", title: "Finance-entity cleanup", body: "Reconcile intercompany, rebuild per-entity books, set franchise-tax reserves, and reconcile to an audit-ready baseline across the structure.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
  ],
  secIntegrationsTag: "What we configure",
  secIntegrationsH: "Built for multi-entity finance structures.",
  integrations: [
    "QuickBooks Online &mdash; a file or class structure per entity (management co, funds, SPVs)",
    "Intercompany due-to/due-from accounts reconciled every period",
    "Consolidated, audit-ready reporting your CPA and auditor can work from",
    "Per-entity franchise-tax reserve accounts (LLC $300; corp $175&ndash;$200,000)",
    "Bill.com / Ramp &mdash; entity-coded AP and expense capture",
    "Capital-call and distribution tracking reconciled to the books (admin stays with your fund administrator)",
    "Lender and investor reporting packages on a consistent monthly cadence",
    "Gross-receipts tracking where an entity has in-state Delaware activity",
  ],
  integrationsNote: "Running a fund-admin platform, loan-management system, or portfolio tool? We reconcile to it &mdash; we keep the books, your specialists keep the regulated functions. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From scattered entities to audit-ready books.",
  secProcessLede: "Every Delaware finance engagement follows the same four-phase rhythm &mdash; books accurate first, audit-readiness second, reporting third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your entity structure, intercompany flows, reporting cadence, and where the books need to be audit-ready. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Build per-entity books and intercompany structure, plus a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to reconcile and set each franchise-tax reserve." },
    { phase: "Phase 3", title: "Monthly close", body: "Per-entity monthly reconciliation, intercompany netting, supporting schedules, and consistent management reporting &mdash; built to be audited." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Investor, lender, and board reporting and, where needed, <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> forecasting and analysis on clean books." },
  ],
  secAdvisoryH: "Clean books are the start. Being audit- and investor-ready is the point.",
  advisoryBody: [
    "Once every entity has clean books and intercompany ties out, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;can we show them to anyone, any time?&rdquo; Whether an LP, lender, auditor, or acquirer asks, the answer should be yes without a scramble &mdash; consistent close, support behind every number, reporting that holds up. That readiness is what lets a Delaware finance business raise, borrow, and scale.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor, and fractional CFO depth where you need it, turning clean books into investor and lender reporting, forecasting, and board packages &mdash; while your CPA, auditor, and compliance counsel handle filing, audit, and regulatory work. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Delaware finance and banking-corridor engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm in Middletown, and reviewed for technical accuracy on per-entity books, intercompany structure, audit-readiness, and the franchise-tax reserve (<a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">DE Division of Corporations</a>; <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Division of Revenue</a>). This is bookkeeping and management reporting, not bank regulatory filing &mdash; TechBrot keeps the books and coordinates with your CPA, auditor, and counsel, who file and audit.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Per-entity books, intercompany structure, audit-ready reporting, franchise-tax reserve &middot; filing, audit, and regulatory work coordinated with your CPA, auditor, and counsel" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Bookkeeping, not bank regulatory filing" },
  ],
  secRelatedH: "Related Delaware services &amp; industries.",
  related: [
    { title: "Holding Companies", body: "Intercompany and per-entity books for the holding-company and SPV structures finance runs on.", href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/", cta: "Holding companies &rarr;" },
    { title: "Fractional CFO", body: "Investor, lender, and board reporting and forecasting on clean books &mdash; scoped to need.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
    { title: "Franchise Tax Help", body: "The franchise-tax reserve tracked per entity and the lower corporate method confirmed &mdash; filed by your agent or CPA.", href: "/find-an-accountant/delaware/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
    { title: "All Delaware industries", body: "See how TechBrot tailors accounting to the way your industry runs in Delaware.", href: "/find-an-accountant/delaware/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Do you handle bank or regulatory filings for Delaware finance firms?", a: "No &mdash; and we&rsquo;re explicit about it. This is bookkeeping and management reporting, not bank regulatory filing. TechBrot is not a bank, broker-dealer, RIA compliance filer, or auditor, and we don&rsquo;t prepare call reports, Form ADV, regulatory capital filings, or audited financial statements. What we do is keep the underlying books clean, consistent, and audit-ready in your own QuickBooks file, so your CPA, auditor, and compliance counsel have a reliable foundation to file and audit from." },
    { q: "Who in Delaware finance do you actually serve?", a: "Fintechs, specialty lenders, RIAs and investment advisers, and fund administrators and SPVs &mdash; the businesses clustered around Wilmington&rsquo;s credit-card and banking corridor. What they share is structural complexity: multiple entities, intercompany flows, and investor or lender reporting that demands books which tie out. We keep those books; your regulated functions stay with your specialists." },
    { q: "Can you make our books audit-ready?", a: "Yes &mdash; that&rsquo;s a core reason finance entities come to us. We maintain per-entity books with intercompany reconciled, clean supporting schedules, and a consistent monthly close, so when your CPA, auditor, or an LP asks for support, the numbers tie out without a fire drill. To be clear on the line: we prepare the books to be audited; your independent auditor issues the audit opinion." },
    { q: "How do you handle intercompany and fund structures in QuickBooks?", a: "We set up clean books for each entity &mdash; management company, funds, SPVs &mdash; with matched intercompany due-to/due-from accounts reconciled every period and a documented allocation method, plus a consolidation approach your CPA can work from. Capital calls and distributions are reconciled to the books; the fund administration, valuations, and any regulated reporting stay with your fund administrator and counsel." },
    { q: "Does my Delaware finance entity owe the franchise tax and gross receipts tax?", a: "Every Delaware entity owes the annual franchise tax &mdash; a flat $300 for an LLC, or $175 to $200,000 for a corporation by the authorized-shares or assumed-par-value method &mdash; which we track and reserve for in the books, with the lower method confirmed; your agent or CPA files it. There&rsquo;s no Delaware sales tax, but certain in-state activity can be subject to the gross receipts tax, which we track by activity where it applies." },
    { q: "Our entities are scattered and not audit-ready. Where do we start in Delaware?", a: "With a cleanup. We reconcile intercompany, rebuild clean per-entity books, set each entity&rsquo;s franchise-tax reserve, and reconcile to an audit-ready baseline across the structure &mdash; then move you onto a consistent monthly close with management reporting. Most finance entities come to us ahead of a raise, an audit, or a lender request; it&rsquo;s the normal starting point. Prefer to talk first? Call (877) 751-5575 and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/finance-banking/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Finance & Banking Accounting","description":"Bookkeeping and audit-ready management reporting for Delaware finance businesses — fintechs, lenders, RIAs, and fund administrators in Wilmington's banking corridor — with intercompany structure and a franchise-tax reserve, set up in QuickBooks by a Certified ProAdvisor. Bookkeeping, not bank regulatory filing.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-industries-finance-banking.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-ind-finance-summary","#de-ind-finance-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/delaware/industries/"},
          {"@type":"ListItem","position":5,"name":"Finance & Banking"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Finance & Banking Accounting","serviceType":"Finance-entity bookkeeping and audit-ready reporting","description":"Per-entity books, intercompany structure, audit-ready reporting, and the franchise-tax reserve for Delaware fintechs, lenders, RIAs, and fund administrators, delivered in QuickBooks by a Certified ProAdvisor. Bookkeeping and management reporting, not bank regulatory filing; independent firm — coordinates with the client's CPA, auditor, and counsel, who file and audit.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware fintechs, specialty lenders, RIAs and investment advisers, and fund administrators and SPVs in Wilmington's banking corridor"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
