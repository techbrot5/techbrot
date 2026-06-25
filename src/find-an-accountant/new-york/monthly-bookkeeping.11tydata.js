/* /find-an-accountant/new-york/monthly-bookkeeping/ — t-location NY SERVICE page
 * (recurring-engagement spoke under the NY bookkeeping hub; 37 contract headings — large
 * page, all kept). Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-monthly.txt) — the
 * ONLY authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/monthly-bookkeeping/index.html, full body read) for body
 * prose/section content. Data-file shape mirrors industries/construction.11tydata.js: JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). The FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders from — single source of truth.
 *
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. T2 headings frozen (every contract
 * H1/H2/H3 verbatim, exact level); footer chrome (Accounting/QuickBooks/Company/Network)
 * and the newsletter ("The monthly brief.") are intentionally NOT rendered here — global
 * chrome owns them. T3 no collapse. T4 FAQ: 8 contract Q/A verbatim/flat/append-only.
 * COBALT VOCABULARY ONLY: stack-8, buyer-card, grid-2/grid-3, byline-block, meta-reviewed,
 * faq__list, ai-summary--ruled, checks-list, trust-row, section--alt.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review proof
 * remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated here) — this
 * service page renders NO review-card and NO AggregateRating. The baseline "David Westgate"
 * reviewer line is reframed to firm-level (no personal name in visible content; firm-level
 * review byline only). Independent firm — does NOT file NY taxes; tracks/verifies NY & NYC
 * sales tax (NYC 8.875% combined, verified Jun 2026 vs NY DTF / NYC DOF) and coordinates
 * with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "<strong>New York monthly bookkeeping</strong> is a recurring engagement where a named Certified QuickBooks ProAdvisor closes your books every month &mdash; reconciling every bank and credit-card account against the actual statements, categorizing transactions, keeping <strong>AP and AR</strong> current, verifying payroll and <a href=\"/find-an-accountant/new-york/sales-tax-help/\">New York sales tax</a>, and delivering a monthly financial package: <a href=\"/accounting/financial-statements/\">P&amp;L, balance sheet, and cash flow statement</a>. For New York businesses the close package lands by the <strong>15th of the following month</strong>.",
    "It&rsquo;s the ongoing engagement that follows <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> or catch-up &mdash; or the right starting point if your books are already current. Everything runs in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> file, kept management-ready, not just tax-ready. Each month the same person stays on your file, so context is never lost.",
    "Every engagement is a <strong>fixed monthly fee against a written scope</strong> ($400&ndash;$2,500+/mo by complexity), never hourly. It&rsquo;s part of TechBrot&rsquo;s broader <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">New York bookkeeping services</a>. We do the books and coordinate with your CPA, who files &mdash; TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a CPA firm; not affiliated with Intuit Inc.; does not file New York tax returns.",
  ],

  // CADENCE — what every month looks like (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: What every month actually looks like. + 4 H3s)
  cadence: [
    { phase: "Days 1&ndash;5", title: "Source documents flow in", body: "Bank feeds sync. Statements drop. Payroll runs reconcile. Receipts and supporting documents arrive through the secure portal &mdash; so the month&rsquo;s raw data is complete before the close work begins." },
    { phase: "Days 6&ndash;10", title: "Categorization &amp; reconciliation", body: "Your ProAdvisor categorizes transactions, reconciles every bank and credit-card account against the actual statements, investigates anomalies, and escalates anything that needs your input before it can be closed." },
    { phase: "Days 11&ndash;14", title: "Close, review, statements", body: "Month closed. Quality review against the operating standard. P&amp;L, balance sheet, and cash flow statement generated, with variances and plain-English commentary prepared alongside them." },
    { phase: "Day 15", title: "Financial package delivered", body: "The monthly close package is delivered to you &mdash; reviewable in the portal, downloadable, and ready to share with your CPA, board, or lender. Same shape every month, on the same date." },
  ],

  // DELIVERABLES — what you get every month (grid-2 buyer-cards carrying the two columns).
  // 2 frozen H3s verbatim. (H2: What you get, every month. + 2 H3s)
  deliverables: [
    { col: "Included in every engagement", items: [
      "Bank account reconciliation",
      "Credit card reconciliation",
      "Transaction categorization",
      "Bank rules maintenance",
      "Undeposited funds clearing",
      "Monthly P&amp;L statement",
      "Monthly balance sheet",
      "Monthly cash flow statement",
      "Variance commentary",
      "Named ProAdvisor point of contact",
    ] },
    { col: "Layered on as scope requires", items: [
      "Accounts payable management",
      "Accounts receivable management",
      "Payroll processing &amp; verification",
      "New York sales tax tracking &amp; verification",
      "1099 preparation",
      "Multi-entity consolidation",
      "Inventory &amp; COGS tracking",
      "Quarterly business reviews",
      "Year-end CPA handoff package",
      "KPI &amp; lender reporting",
    ] },
  ],
  deliverablesNote: "Sales tax is tracked and verified in the books and reconciled for filing; your CPA (or you) files the return through NYS Web File. TechBrot does not file tax returns.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York monthly bookkeeping, in five questions.)
  aiSummary: [
    { q: "What is monthly bookkeeping?", a: "A recurring engagement where a named <strong>Certified QuickBooks ProAdvisor</strong> closes your books every month &mdash; reconciling accounts against real statements, categorizing transactions, verifying payroll and NY sales tax, and delivering a monthly package: <strong>P&amp;L, balance sheet, cash flow</strong>." },
    { q: "What does it cost in New York?", a: "By scope, not by hour: <strong>$400&ndash;$700/mo</strong> Essentials, <strong>$700&ndash;$1,400/mo</strong> Standard, <strong>$1,400&ndash;$2,500+/mo</strong> Complex. A fixed monthly fee against a written scope, always. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "What&rsquo;s included?", a: "Bank and credit-card reconciliations, categorization, AP/AR upkeep, payroll and <strong>NY sales-tax verification</strong>, monthly close, and the financial package. Larger engagements add quarterly reviews, multi-entity consolidation, and year-end prep." },
    { q: "When is the package delivered?", a: "<strong>By the 15th</strong> of the following month &mdash; January books close, the January package lands by February 15. Complex multi-entity or inventory engagements may close by the 20th. The timeline is set in your written scope." },
    { q: "Do I need cleanup or catch-up first?", a: "Monthly starts from a current state. Behind-but-structured books need catch-up; messy books need <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> first. Most clients move straight from cleanup or catch-up to monthly with the same ProAdvisor." },
  ],

  // SIGNALS — who monthly is for (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: If any of these sound familiar, the answer is yes. + 6 H3s)
  signals: [
    { signal: "Past DIY", title: "Your business is past the DIY-bookkeeping stage.", body: "Self-managing the books worked when the business was small. Now the time, the errors, and the missed insights cost more than a professional bookkeeper would &mdash; and the books quietly slip behind." },
    { signal: "Real-time numbers", title: "You need monthly numbers, not just year-end ones.", body: "If you&rsquo;re only seeing financials at tax time, you&rsquo;re flying blind 11 months a year. A monthly close gives you real numbers to make decisions on while they still matter." },
    { signal: "CPA-ready", title: "Your CPA needs clean books to file efficiently.", body: "CPAs charge significantly more when they have to clean up your books at tax time. Monthly bookkeeping delivers a reconciled year-end package they can file directly from." },
    { signal: "Post-cleanup", title: "You just finished cleanup or catch-up.", body: "The natural next step. Monthly keeps the books in the state <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> just delivered &mdash; the same ProAdvisor continues without context loss." },
    { signal: "Watched numbers", title: "A lender, board, or investor is watching the numbers.", body: "SBA loans, lines of credit, investors, and boards all need timely monthly financials. A monthly close is what makes that reporting credible and on time." },
    { signal: "Unreliable bookkeeper", title: "Your current bookkeeper is unreliable or non-responsive.", body: "No named contact, late or missing deliverables, no one who knows your file. A named Certified ProAdvisor and a package by the 15th fix all three." },
  ],
  signalsCta: { label: "Book the discovery call", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-money&amp;funnel_stage=MOFU" },

  // PRICING — three tiers (grid-3 buyer-cards). 3 frozen H3s verbatim. Canonical figures only.
  // (H2: Fixed monthly fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Essentials", range: "$400&ndash;$700/month", fit: "For: simple books, 1&ndash;2 bank accounts, under 100 transactions/month, no payroll or simple payroll, no sales tax.", includes: ["Monthly reconciliation &amp; categorization", "Monthly P&amp;L, balance sheet, cash flow", "Named ProAdvisor", "Year-end CPA handoff package"], cta: "Scope an Essentials engagement &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard", range: "$700&ndash;$1,400/month", fit: "For: active New York businesses, multiple bank and credit accounts, 100&ndash;500 transactions/month, payroll, NY sales tax.", includes: ["Everything in Essentials", "Payroll &amp; NY sales-tax verification", "AP / AR upkeep", "1099 preparation", "Variance commentary", "Quarterly business review"], cta: "Scope a Standard engagement &rarr;" },
    { tier: "Tier 03", title: "Complex", range: "$1,400&ndash;$2,500+/month", fit: "For: multi-entity, inventory, 500+ transactions/month, multi-state sales tax, complex payroll, lender/investor reporting.", includes: ["Everything in Standard", "Multi-entity consolidation", "Inventory &amp; COGS tracking", "Multi-state sales tax", "Investor / lender reporting", "Monthly KPI dashboard"], cta: "Scope a Complex engagement &rarr;" },
  ],
  pricingNote: "Final pricing is determined by the diagnostic. Most engagements include a one-time onboarding fee covering setup, file review, and first-month verification. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a> for full detail.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "A bank feed can import a transaction, but it can&rsquo;t tell you whether margins are slipping, whether a New York sales-tax accrual will survive an audit, or whether cash will cover next month&rsquo;s payroll. A monthly close turns raw data into numbers you can run the business on &mdash; the judgment layer is where the value is.",
    "When monthly bookkeeping isn&rsquo;t enough, <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> builds forecasting, KPIs, and board-ready reporting on top of the clean monthly base. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // OPERATOR — who closes the books (firm-level; no founder/personal name). Body as prose.
  // (H2: A named, credentialed Certified ProAdvisor — the same one, every month.)
  operatorBody: [
    "Every TechBrot monthly engagement is closed by a vetted Certified QuickBooks ProAdvisor working under TechBrot&rsquo;s brand, standards, and infrastructure. You&rsquo;ll know exactly who is closing your books, how to reach them, and what credentials they hold &mdash; and the same person stays on your file month to month, so context is never lost.",
    "Quality review by the Certified QuickBooks ProAdvisor team backs every monthly close against TechBrot&rsquo;s published operating standards. The result is a close you can set your calendar by. See <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">New York bookkeeping services</a> or our <a href=\"/trust/\">trust &amp; methodology</a>.",
  ],
  operatorCreds: [
    { label: "Certification", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping &amp; QuickBooks work &middot; New York sales tax tracked/verified &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed monthly fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — NY services (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Monthly is usually the destination after another engagement. + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "If the books are messy or wrong, cleanup comes first &mdash; then transition to monthly with the same ProAdvisor, without losing context.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "NY cleanup &rarr;" },
    { title: "New York bookkeeping services", body: "The full picture &mdash; the hub for every TechBrot bookkeeping service in New York, of which monthly is the recurring core.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "NY bookkeeping hub &rarr;" },
    { title: "New York sales tax help", body: "NYC&rsquo;s 8.875% combined rate, destination-based filing, and reconciling accruals each month &mdash; verified as part of the monthly close.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Fractional CFO", body: "When monthly bookkeeping isn&rsquo;t enough &mdash; forecasting, KPI reporting, and board-ready financials on top of the clean monthly base.", href: "/accounting/advisory/fractional-cfo/", cta: "CFO support &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Monthly close, reconciliation, financial statements &middot; NY sales tax tracked/verified &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed monthly fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York monthly bookkeeping questions.)
  faq: [
    { q: "What is monthly bookkeeping for a New York business?", a: "Monthly bookkeeping is a recurring engagement where a Certified QuickBooks ProAdvisor closes the books every month &mdash; reconciling bank and credit-card accounts against actual statements, categorizing transactions, verifying payroll and New York sales-tax entries, and delivering a monthly financial package: P&amp;L, balance sheet, and cash flow statement. For New York businesses the close package arrives by the 15th of the following month." },
    { q: "How much does monthly bookkeeping cost in New York?", a: "Pricing depends on transaction volume, account count, payroll, New York sales tax, and entity complexity. Typical New York engagements run $400&ndash;$700/month for Essentials, $700&ndash;$1,400/month for Standard, and $1,400&ndash;$2,500+/month for Complex. Every TechBrot engagement is a fixed monthly fee against a written scope, never hourly. See the pricing section for tier details." },
    { q: "When do I receive my monthly financial package?", a: "By the 15th of the following month. For example, January books close and the January financial package is delivered by February 15. Complex multi-entity or inventory engagements may close by the 20th. The timeline is set in your written scope." },
    { q: "Do I need cleanup or catch-up before starting monthly?", a: "Monthly bookkeeping starts from a known-current state. Books that are behind but structured need catch-up first; messy or inaccurate books need cleanup first. Most New York clients transition directly from cleanup or catch-up to monthly with the same bookkeeper, without losing context." },
    { q: "How do you handle New York and NYC sales tax in a monthly engagement?", a: "Each month we track and verify your sales-tax liability in the books &mdash; including NYC&rsquo;s 8.875% combined rate where it applies and destination-based rates for businesses selling across New York &mdash; and reconcile it so your return is accurate. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm; we prepare the numbers and coordinate with your CPA, who files. We do not file tax returns." },
    { q: "Can I talk to a Certified ProAdvisor before signing up?", a: "Yes &mdash; book a free discovery call, no obligation. A named Certified QuickBooks ProAdvisor confirms the right tier, walks through what each monthly close includes, and quotes a fixed monthly fee in writing before anything begins. Call (877) 751-5575 or <a href=\"/contact/?intent=new-york\">book the call</a>. If the books need work first, the same ProAdvisor can run <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">New York cleanup</a> or catch-up, then transition to monthly." },
    { q: "Will my CPA be able to file from the monthly package?", a: "Yes. Monthly close produces CPA-ready financial statements reconciled to source documents, plus a year-end package designed to hand directly to your CPA. Because the books are closed every month, your CPA isn&rsquo;t cleaning up at tax time &mdash; they file from numbers that are already reconciled. TechBrot coordinates the handoff; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/monthly-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Monthly Bookkeeping","description":"Recurring monthly bookkeeping for New York businesses: full monthly close, bank and credit-card reconciliation, transaction categorization, payroll and New York sales-tax verification, and a monthly financial package (P&L, balance sheet, cash flow) delivered by the 15th.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/ny-monthly-bookkeeping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-monthly-summary","#ny-svc-monthly-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Monthly Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Monthly Bookkeeping","serviceType":"Recurring monthly bookkeeping and financial close","description":"Recurring monthly bookkeeping for New York businesses: bank and credit-card reconciliation against actual statements, transaction categorization, AP and AR upkeep, payroll and New York sales-tax verification, monthly close, and a monthly financial package (P&L, balance sheet, cash flow) delivered by the 15th of the following month. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market New York businesses"},
          "offers":[
            {"@type":"Offer","priceCurrency":"USD","price":"400","description":"Essentials — $400–$700/month. Simple books, 1–2 bank accounts, under 100 transactions/month. Fixed monthly fee against a written scope.","url":url},
            {"@type":"Offer","priceCurrency":"USD","price":"700","description":"Standard — $700–$1,400/month. Active businesses, multiple accounts, payroll, New York sales tax. Fixed monthly fee against a written scope.","url":url},
            {"@type":"Offer","priceCurrency":"USD","price":"1400","description":"Complex — $1,400–$2,500+/month. Multi-entity, inventory, multi-state sales tax, lender or investor reporting. Fixed monthly fee against a written scope.","url":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
