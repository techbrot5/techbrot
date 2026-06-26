/* /accounting/industries/saas/ — LIVE baseline industry page migrated to cobalt
 * t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-saas.txt (42 headings, 7 FAQ) is the ONLY authority for
 * headings + FAQ. Old HTML accounting/industries/saas/index.html read for BODY
 * PROSE only. REFERENCE pattern: src/accounting/industries/construction.njk +
 * .11tydata.js + src/quickbooks/online.njk (proven t-mofu cobalt) for structure,
 * vocabulary, and the FULL schema set (WebPage, BreadcrumbList, Service, ItemList,
 * FAQPage, QAPage). NATIONAL scope.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: baseline contract carries 7 verbatim Q/A; ALL 7 render in the faq__list and
 * FAQPage from the SAME array — NO dedup, append-only (protocol T4). Questions verbatim;
 * answers preserved verbatim (in-body multi-state link re-added inside A5; fractional CFO
 * link re-added inside A7 — link enrichment only, no reword). FAQPage + QAPage emitted
 * from their source arrays — single source of truth.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc. or any billing platform; bookkeeping/ProAdvisor scope —
 * does NOT file income taxes / render nexus or audit opinions, coordinates with the
 * client's CPA/EA/auditor. No <strong> in the dark hero subheading.
 *
 * CTA LEXICON (canonical only): "Book the discovery call" -> /contact/?intent=accounting;
 * "Get the free file review" -> /quickbooks/file-review/?intent=file-review;
 * "Speak to a ProAdvisor" (tel). NO btn--text / __price / __cadence / non-lexicon labels. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&times;/g,"×").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "SaaS accounting, plainly." (from baseline TL;DR body, preserved + national scope)
  definition: [
    "SaaS companies collect cash on annual or multi-year contracts upfront but <strong>earn revenue ratably over the contract term</strong>. Generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> treats that cash as revenue when received, which produces a distorted P&amp;L, a missing deferred-revenue liability, broken unit economics, and a financial picture that won&rsquo;t survive investor due diligence or a future audit. <strong>ASC 606</strong> &mdash; the U.S. revenue-recognition standard issued by FASB &mdash; requires ratable monthly recognition with <strong>deferred revenue</strong> carried as a balance-sheet liability that converts to recognized revenue month by month as the service is delivered.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure <a href=\"/quickbooks/online/\">QuickBooks</a> alongside your billing system (Stripe Billing, Chargebee, Recurly, Maxio) so revenue is recognized correctly, <strong>MRR and ARR</strong> are tracked with new/expansion/contraction/churn movement, <strong>CAC and LTV</strong> are calculable from the books, and the monthly financial package is genuinely investor-ready. For SaaS companies fundraising, scaling, or preparing for acquisition, <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO advisory</a> turns the numbers into board-grade decisions. We deliver the books in your own QuickBooks file and coordinate with your CPA on tax filing; we do not file income taxes or render audit opinions ourselves. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: SaaS accounting, in five questions.)
  aiSummary: [
    { q: "Why is SaaS accounting different?", a: "SaaS collects cash upfront and earns revenue <strong>monthly over the contract term</strong>. <strong>ASC 606</strong> requires ratable recognition with <strong>deferred revenue</strong> as a balance-sheet liability. Cash-basis bookkeeping breaks SaaS economics; ASC 606-correct books are the baseline for any fundraise, audit, or acquisition." },
    { q: "What is ASC 606?", a: "The U.S. revenue-recognition standard (FASB). Five-step model: identify the contract, identify performance obligations, determine the transaction price, allocate the price, recognize revenue as obligations are satisfied. For typical SaaS subscriptions: <strong>ratable monthly recognition</strong>. Required for all SaaS companies producing U.S. GAAP financials." },
    { q: "Do you track MRR, ARR, and movement?", a: "Yes. MRR/ARR reconciled to recognized revenue, with monthly movement reporting separating <strong>new MRR, expansion MRR, contraction MRR, and churn MRR</strong> &mdash; the number every investor asks about first." },
    { q: "What about CAC, LTV, and unit economics?", a: "Configured to surface monthly: <strong>CAC</strong> (fully-loaded acquisition cost per customer), <strong>LTV</strong> (gross-margin-weighted lifetime revenue), <strong>LTV/CAC ratio</strong> (3:1 minimum, 4:1+ at later stages), <strong>gross dollar retention</strong>, <strong>net revenue retention</strong>, <strong>burn</strong>, <strong>runway</strong>, and the <strong>rule of 40</strong>." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by ARR, billing complexity, multi-entity setup, and reporting cadence. No hourly billing. SaaS engagements typically scope alongside <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO advisory</a> once past $1M ARR. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places SaaS companies lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places SaaS companies lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Revenue is misrecognized", title: "Cash treated as revenue, not deferred.", body: "Annual contracts collected upfront get booked as revenue in the month received &mdash; a $120K annual deal collected in January shows as $120K of January revenue instead of $10K per month. The P&amp;L lumps revenue, the deferred-revenue liability is missing entirely, and every SaaS metric calculated from it (MRR growth, gross margin, retention) is wrong. The fix is ASC 606-compliant recognition: cash collected upfront becomes deferred revenue on the balance sheet and recognizes monthly, reconciled to your billing system at the contract level. If you can&rsquo;t produce a deferred-revenue waterfall, the books won&rsquo;t survive Series A diligence &mdash; and that&rsquo;s fixable in a single cleanup." },
    { signal: "Unit economics are invisible", title: "CAC, LTV, retention not surfaced.", body: "Without a chart of accounts structured for SaaS, the books can&rsquo;t produce CAC, LTV, gross margin by product line, gross dollar retention, or net revenue retention. Founders maintain parallel spreadsheets that drift from reality, board meetings include the &ldquo;which number is right&rdquo; debate, and investors lose confidence in management&rsquo;s financial sophistication. The fix is a SaaS-economics chart of accounts, billing reconciled, and a monthly KPI package generated from the books rather than separate spreadsheets. Investors don&rsquo;t expect perfect numbers &mdash; they expect numbers from one source of truth that reconcile cleanly." },
    { signal: "Structure complexity is unhandled", title: "Multi-entity, multi-state, international.", body: "SaaS companies scale into complexity fast: a Delaware C-corp parent plus operating sub, remote employees in 15+ states, an international subsidiary in the UK or Canada, intercompany transactions, and multi-state sales-tax nexus once revenue passes state thresholds. The fix is multi-entity bookkeeping with clean intercompany elimination, <a href=\"/quickbooks/payroll/multi-state/\">multi-state payroll</a> configured for every state with employees, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax nexus monitoring</a> as the customer base grows. We handle the operational side; international tax structure, transfer pricing, and nexus opinions belong to a CPA or international tax specialist &mdash; we coordinate cleanly." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: SaaS accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Revenue", title: "ASC 606 revenue recognition", body: "Subscription, usage-based, hybrid, and multi-element arrangements recognized ratably. Deferred revenue maintained as a balance-sheet liability, reconciled to your billing system at the contract level.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Metrics", title: "MRR, ARR &amp; movement reporting", body: "MRR and ARR reconciled to recognized revenue, with monthly movement separated into new, expansion, contraction, and churn &mdash; the number investors ask about first.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Unit economics", title: "CAC, LTV &amp; retention", body: "Chart of accounts structured so CAC, LTV, gross margin, gross dollar retention, and net revenue retention are calculable monthly from the books &mdash; not from a drifting spreadsheet.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04 &middot; Structure", title: "Multi-entity &amp; multi-state", body: "Delaware parent plus operating sub, international subsidiaries, intercompany elimination, and multi-state payroll for remote teams &mdash; the structure SaaS companies grow into.", href: "/quickbooks/payroll/multi-state/", cta: "Multi-state payroll &rarr;" },
    { num: "05 &middot; Cleanup", title: "Cash-to-accrual cleanup", body: "Convert cash-basis SaaS books to ASC 606-compliant accrual: rebuild deferred revenue, restate prior periods, and produce diligence-ready financials before monthly bookkeeping begins.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Advisory", title: "Fractional CFO &amp; board reporting", body: "Board decks, fundraise prep, unit-economics modeling, runway and burn analysis, and pricing strategy &mdash; the judgment layer above accurate books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — SaaS stack reconciled with QuickBooks (checks-list).
  // (H2: Connected to your SaaS stack.)
  integrations: [
    "Stripe Billing &mdash; subscription billing reconciled to recognized revenue",
    "Chargebee &mdash; recurring billing and MRR movement",
    "Recurly &mdash; subscription management synced to the ledger",
    "Maxio (SaaSOptics / Chargify) &mdash; ASC 606 revenue schedules",
    "Stripe &mdash; payments and payout reconciliation",
    "HubSpot &amp; Salesforce &mdash; CRM pipeline tied to CAC reporting",
    "Gusto, Rippling &amp; Deel &mdash; multi-state and international payroll",
    "Bill.com, Ramp, Brex &amp; Mercury &mdash; spend, AP, and banking feeds",
  ],
  integrationsNote: "Different stack? If it has a QuickBooks integration or exports clean data, we work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON — cash-basis vs ASC 606 SaaS books (vs-scroll + vs-table, no collapse T3).
  // (H2: Cash-basis SaaS books vs. ASC 606 SaaS books.)
  comparison: [
    { cap: "Revenue when annual contract is collected", left: "$120K booked as revenue in month received", us: "$10K/month ratable + $110K deferred-revenue liability" },
    { cap: "Balance sheet", left: "Missing deferred revenue entirely", us: "Deferred-revenue waterfall tracked by contract" },
    { cap: "MRR and ARR", left: "Lumpy, derived from collections; doesn&rsquo;t reconcile to revenue", us: "Smooth, reconciled to recognized revenue, with new/expansion/contraction/churn movement" },
    { cap: "Gross margin", left: "Distorted by collection timing", us: "True monthly gross margin by product line and cohort" },
    { cap: "Unit economics (CAC, LTV)", left: "Calculated from spreadsheets that drift from books", us: "Calculated from the books &mdash; one source of truth" },
    { cap: "Retention metrics", left: "Not surfaced from books", us: "Gross dollar retention and net revenue retention reported monthly" },
    { cap: "Diligence readiness", left: "Won&rsquo;t survive a Series A data room", us: "Survives diligence and audit; matches what investors expect" },
  ],

  // SUB-VERTICALS — SaaS at every stage and shape (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: SaaS at every stage and shape. + 6 H3s)
  subverticals: [
    { title: "Pure subscription SaaS", body: "Monthly or annual recurring subscriptions, single-tier or tiered pricing. The cleanest ASC 606 application &mdash; ratable monthly recognition over the contract term. The reference case for SaaS bookkeeping." },
    { title: "Usage-based &amp; hybrid SaaS", body: "Pay-as-you-go pricing, usage tiers, and hybrid subscription-plus-usage models. Revenue recognized as usage occurs, with complex contract-level ASC 606 analysis. Common in API-first and infrastructure SaaS." },
    { title: "B2B enterprise SaaS", body: "Long sales cycles, multi-year contracts, professional services bundled with software, custom MSAs and order forms. Multi-element arrangements under ASC 606. Higher ACV, fewer customers, deeper diligence." },
    { title: "Vertical &amp; bottom-up SaaS", body: "Industry-specific SaaS (legal tech, fintech, healthtech, construction tech), often with bottom-up adoption and a land-and-expand motion. Expansion MRR tracking matters as much as new MRR." },
    { title: "Marketplace &amp; transactional", body: "Two-sided marketplaces, transactional SaaS with take rates, and payment-facilitator setups. Gross vs. net revenue presentation analysis under ASC 606, often combined with payment-processor reconciliation." },
    { title: "Bootstrapped &amp; profitable SaaS", body: "Profitable, not raising, focused on cash flow and owner distributions. ASC 606 still applies, but priorities shift: tax efficiency, owner-compensation strategy, and capital-allocation advisory replace fundraise readiness." },
  ],

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From cash-basis confusion to diligence-ready financials. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your stage, billing model, contract types, entity structure, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cash-to-accrual cleanup</a> to convert prior periods to ASC 606, plus the right chart-of-accounts setup for SaaS unit economics." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; reporting", body: "Books reconciled monthly with ASC 606 revenue recognition, the deferred-revenue waterfall, MRR movement, and the SaaS KPI package generated from the books." },
    { num: "Phase 4", name: "Board reporting &amp; advisory", body: "An investor-ready monthly financial package, plus <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO advisory</a> on fundraise prep, unit economics, pricing, and runway." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose (preserved from baseline).
  // (H2: Clean numbers are the start. The next raise is the point.)
  advisoryBody: [
    "Once ASC 606 is correct and the SaaS KPIs flow from the books rather than spreadsheets, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do about them?&rdquo; Whether to raise now or in six months, where unit economics actually justify scaling spend, how to model the next pricing change, when international expansion makes financial sense &mdash; the decisions that actually move a SaaS business.",
    "That&rsquo;s where <strong>SaaS advisory</strong> comes in: a fractional CFO who knows your numbers turning them into board decks, fundraise materials, pricing models, and runway scenarios. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Cash-to-accrual cleanup", body: "Convert cash-basis SaaS books to ASC 606-compliant accrual with deferred revenue rebuilt and prior periods restated.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Multi-state payroll", body: "For remote SaaS teams with employees across 10+ states &mdash; registration, withholding, and SUI handled correctly as the operational backbone.", href: "/quickbooks/payroll/multi-state/", cta: "Explore multi-state &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Board decks, fundraise prep, unit-economics modeling, and runway analysis built on top of accurate SaaS books.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "ASC 606 revenue recognition (operational), MRR/ARR, unit economics, multi-entity &middot; income-tax filing, audit &amp; assurance coordinated with your CPA, EA, or auditor" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any billing platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — all 7 contract Q/A VERBATIM (questions verbatim; answers preserved, in-body links
  // re-added inside A5 + A7 — enrichment only, no reword). visible faq__list = FAQPage schema
  // (same array, NO dedup, all 7). (H2: SaaS accounting questions.)
  faq: [
    { q: "Why is SaaS accounting different from regular bookkeeping?", a: "SaaS companies collect cash upfront on annual or multi-year contracts but earn revenue ratably over the contract term. Under ASC 606, the U.S. revenue-recognition standard, that cash collected today becomes <a href=\"/glossary/deferred-revenue/\">deferred revenue</a> (a liability) and converts to recognized revenue month by month as the service is delivered. Generic bookkeeping treats cash as revenue when received &mdash; which means a SaaS company with $1.2M in annual contracts collected in January looks like it did $1.2M of January revenue. ASC 606-correct books show $100K of January revenue and $1.1M of deferred revenue on the balance sheet. The difference matters enormously for unit economics, board reporting, investor due diligence, and any future fundraise or acquisition." },
    { q: "What is ASC 606 and does it apply to my SaaS company?", a: "ASC 606 is the U.S. revenue-recognition standard issued by FASB. It applies to all entities that enter contracts with customers, which means every SaaS company is subject to it for U.S. GAAP financials. The standard&rsquo;s five-step model &mdash; identify the contract, identify the performance obligations, determine the transaction price, allocate the price to obligations, and recognize revenue as obligations are satisfied &mdash; applies to SaaS contracts and produces ratable monthly recognition for typical subscription arrangements. ASC 606 also handles usage-based pricing, hybrid (subscription + usage) arrangements, professional services bundled with software, set-up fees, and multi-element contracts. For SaaS companies fundraising, pursuing acquisition, or audited, ASC 606-compliant <a href=\"/quickbooks/online/advanced/revenue-recognition/\">revenue recognition</a> is not optional &mdash; it&rsquo;s the baseline expectation." },
    { q: "Can you track MRR, ARR, and revenue movement?", a: "Yes. We configure QuickBooks alongside your billing system (Stripe Billing, Chargebee, Recurly, Maxio, or others) so MRR and ARR are tracked correctly and reconciled to recognized revenue. Movement reporting separates the four components of MRR change: new MRR (from new customers), expansion MRR (upgrades from existing customers), contraction MRR (downgrades), and churn MRR (cancellations). The net movement plus starting MRR equals ending MRR, and ending MRR &times; 12 equals ARR. Done correctly, monthly MRR reporting answers the question every SaaS investor asks first: is the business growing, and is the growth coming from new customers or existing customer expansion?" },
    { q: "What about CAC, LTV, and unit economics?", a: "We configure the chart of accounts and reporting structure so customer acquisition cost (CAC), lifetime value (LTV), and the LTV-to-CAC ratio are calculable monthly from the books. CAC is the fully-loaded cost of acquiring a customer (sales and marketing spend divided by new customers in the period). LTV is the gross-margin-weighted average revenue from a customer over their expected tenure. The LTV/CAC ratio is a key SaaS health metric &mdash; 3:1 is the conventional minimum, and investors look for 4:1+ at later stages. Books that can&rsquo;t surface these numbers force founders to maintain separate spreadsheet calculations that drift from reality. ASC 606-correct, gross-margin-aware books eliminate the spreadsheet drift." },
    { q: "Do you handle multi-state nexus for remote SaaS teams?", a: "Yes. Remote-first SaaS teams typically have employees in 10+ states by Series A, which creates multi-state payroll registration obligations (state withholding, SUI) and may create state income-tax nexus and economic nexus for sales-tax purposes. We handle the operational side: multi-state payroll registration coordination, payroll configured for every state where an employee works, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax nexus monitoring</a> as the customer base grows. Tax filing and nexus opinions coordinate with your CPA &mdash; we don&rsquo;t render nexus opinions ourselves. See our <a href=\"/quickbooks/payroll/multi-state/\">multi-state payroll page</a> for the full scope on the payroll side." },
    { q: "Can you produce investor-ready financials?", a: "Yes. Investor-ready means three things in practice: (1) ASC 606-compliant revenue recognition that survives diligence; (2) monthly financial packages with the SaaS-specific KPIs investors ask about &mdash; MRR/ARR with movement breakdown, gross margin (with COGS clearly defined for SaaS), CAC, LTV, net revenue retention, gross dollar retention, burn rate, runway, and the rule of 40; (3) clean books across multiple entities if applicable, with intercompany eliminations done correctly. The output is a financial package a partner at a top-tier fund can read in 10 minutes and trust. Coordination with your CPA on tax filing and your auditor on any audit work is part of how we operate." },
    { q: "When should a SaaS company hire a fractional CFO?", a: "Most SaaS companies need fractional CFO support somewhere between $1M and $10M ARR &mdash; earlier if fundraising actively, later if bootstrapped with simple unit economics. The clearest triggers: preparing for a Series A or B raise (investors expect financial sophistication beyond bookkeeping), board reporting becoming a recurring stress event, planning international or multi-entity expansion, considering an acquisition or being acquired, or scaling sales spend and needing to model payback periods. We offer <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO advisory</a> as a separate engagement layered on top of accurate SaaS bookkeeping &mdash; the books come first, the advisory builds on them. To gauge whether your stage warrants it, talk to the ProAdvisor team at <a href=\"tel:+18777515575\">(877) 751-5575</a>. See our fractional CFO page for the full scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/saas/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/saas-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-saas-definition","#acctind-saas-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"SaaS","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"SaaS Accounting","serviceType":"Specialist accounting and bookkeeping for SaaS companies","description":"Specialist accounting for U.S. SaaS startups and scaled software companies. Covers ASC 606 revenue recognition (subscription, usage-based, hybrid, multi-element), deferred revenue, MRR and ARR with movement analysis, CAC and LTV, gross margin reporting, multi-entity structures, multi-state nexus from remote teams, and investor-ready monthly financial packages. Delivered fixed-fee in your own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not include income-tax filing, IRS representation, audit, or assurance — coordinates with the client's CPA, EA, or auditor.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. SaaS startups and scaled software companies — seed to growth stage"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"SaaS accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What SaaS accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"SaaS accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
