/* /find-an-accountant/delaware/monthly-bookkeeping/ — t-money DE SERVICE child (recurring
 * engagement). NEW page (no baseline equity contract — Delaware set built fresh). Structure
 * mirrors the proven NY monthly-bookkeeping child: JSON front-matter in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema @graph
 * (WebPage, BreadcrumbList, Service with Offers, FAQPage). FAQPage mainEntity is generated
 * from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * DELAWARE LOCALIZATION (per DE-FACTS): NY sales-tax/NYS-Web-File/62-counties → DE no sales
 * tax; gross receipts tax on the seller tracked by activity; annual franchise-tax reserve;
 * holding-company / out-of-state-owner monthly cadence; New Castle, Kent, Sussex; Middletown.
 * PRICING (rule 10 + DE-FACTS): ONLY the canonical "from $400/mo" figure is stated. The NY
 * tier dollar ranges ($400–$700 / $700–$1,400 / $1,400–$2,500+) are NY-specific and NOT in
 * DE-FACTS, so they are NOT reproduced — higher Delaware tiers are scoped qualitatively
 * ("scoped to volume" / "custom scope"). This is a deliberate, honesty-driven deviation from
 * the NY tier presentation.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes; no review-card, no
 * AggregateRating. No founder/personal name in visible content. Independent firm — NOT a CPA
 * firm and NOT a registered agent; does NOT file DE returns or the franchise tax; tracks and
 * verifies gross receipts and the franchise-tax reserve and coordinates with the client's CPA,
 * who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "<strong>Delaware monthly bookkeeping</strong> is a recurring engagement where a named Certified QuickBooks ProAdvisor closes your books every month &mdash; reconciling every bank and credit-card account against the actual statements, categorizing transactions, keeping <strong>AP and AR</strong> current, verifying payroll and <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tracked by activity</a>, setting the franchise-tax reserve, and delivering a monthly financial package: <a href=\"/accounting/financial-statements/\">P&amp;L, balance sheet, and cash flow statement</a>. For Delaware businesses the close package lands by the <strong>15th of the following month</strong>.",
    "It&rsquo;s the ongoing engagement that follows <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> or catch-up &mdash; or the right starting point if your books are already current. Everything runs in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> file, kept management-ready, not just tax-ready. Each month the same person stays on your file, so context is never lost &mdash; including for holding companies and Delaware entities owned from out of state.",
    "Every engagement is a <strong>fixed monthly fee against a written scope</strong> (from $400/mo by complexity), never hourly. It&rsquo;s part of TechBrot&rsquo;s broader <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">Delaware bookkeeping services</a>. We do the books and coordinate with your CPA, who files &mdash; TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a CPA firm and not a registered agent; not affiliated with Intuit Inc.; does not file Delaware returns or the franchise tax.",
  ],

  // CADENCE — what every month looks like (process-grid). 4 H3s.
  // (H2: What every month actually looks like.)
  cadence: [
    { phase: "Days 1&ndash;5", title: "Source documents flow in", body: "Bank feeds sync. Statements drop. Payroll runs reconcile. Receipts and supporting documents arrive through the secure portal &mdash; so the month&rsquo;s raw data is complete before the close work begins." },
    { phase: "Days 6&ndash;10", title: "Categorization &amp; reconciliation", body: "Your ProAdvisor categorizes transactions, reconciles every bank and credit-card account against the actual statements, investigates anomalies, and escalates anything that needs your input before it can be closed." },
    { phase: "Days 11&ndash;14", title: "Close, review, statements", body: "Month closed. Gross receipts verified by activity and the franchise-tax reserve checked. Quality review against the operating standard. P&amp;L, balance sheet, and cash flow statement generated, with variances and plain-English commentary prepared alongside them." },
    { phase: "Day 15", title: "Financial package delivered", body: "The monthly close package is delivered to you &mdash; reviewable in the portal, downloadable, and ready to share with your CPA, board, or lender. Same shape every month, on the same date." },
  ],

  // DELIVERABLES — what you get every month (two columns). 2 H3s.
  // (H2: What you get, every month.)
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
      "Gross receipts tracking &amp; verification by activity",
      "Franchise-tax reserve tracking",
      "1099 preparation",
      "Multi-entity / holding-company consolidation",
      "Inventory &amp; COGS tracking",
      "Quarterly business reviews",
      "Year-end CPA handoff package",
    ] },
  ],
  deliverablesNote: "Gross receipts are tracked and verified in the books by business activity and reconciled for filing; the franchise-tax reserve is tracked and confirmed. You or your CPA file the gross-receipts return with the Division of Revenue, and your CPA or registered agent files the franchise tax. TechBrot does not file tax returns or the franchise tax.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware monthly bookkeeping, in five questions.)
  aiSummary: [
    { q: "What is monthly bookkeeping?", a: "A recurring engagement where a named <strong>Certified QuickBooks ProAdvisor</strong> closes your books every month &mdash; reconciling accounts against real statements, categorizing transactions, verifying payroll and gross receipts by activity, setting the franchise-tax reserve, and delivering a monthly package: <strong>P&amp;L, balance sheet, cash flow</strong>." },
    { q: "What does it cost in Delaware?", a: "By scope, not by hour: <strong>from $400/mo</strong>, set by transaction volume, number of accounts and entities, payroll, and complexity. A fixed monthly fee against a written scope, always. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
    { q: "What&rsquo;s included?", a: "Bank and credit-card reconciliations, categorization, AP/AR upkeep, payroll and <strong>gross-receipts verification by activity</strong>, the franchise-tax reserve, monthly close, and the financial package. Larger engagements add quarterly reviews, multi-entity / holding-company consolidation, and year-end prep." },
    { q: "When is the package delivered?", a: "<strong>By the 15th</strong> of the following month &mdash; January books close, the January package lands by February 15. Complex multi-entity or inventory engagements may close by the 20th. The timeline is set in your written scope." },
    { q: "Do I need cleanup or catch-up first?", a: "Monthly starts from a current state. Behind-but-structured books need catch-up; messy or commingled books need <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> first. Most clients move straight from cleanup or catch-up to monthly with the same ProAdvisor." },
  ],

  // SIGNALS — who monthly is for (lift cards). 6 H3s.
  // (H2: If any of these sound familiar, the answer is yes.)
  signals: [
    { signal: "Past DIY", title: "Your business is past the DIY-bookkeeping stage.", body: "Self-managing the books worked when the business was small. Now the time, the errors, and the missed insights cost more than a professional bookkeeper would &mdash; and the books quietly slip behind." },
    { signal: "Real-time numbers", title: "You need monthly numbers, not just year-end ones.", body: "If you&rsquo;re only seeing financials at tax time, you&rsquo;re flying blind 11 months a year. A monthly close gives you real numbers to make decisions on while they still matter." },
    { signal: "CPA-ready", title: "Your CPA needs clean books to file efficiently.", body: "CPAs charge significantly more when they have to clean up your books at tax time. Monthly bookkeeping delivers a reconciled year-end package they can file directly from." },
    { signal: "Post-cleanup", title: "You just finished cleanup or catch-up.", body: "The natural next step. Monthly keeps the books in the state <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> just delivered &mdash; the same ProAdvisor continues without context loss." },
    { signal: "Watched numbers", title: "A lender, board, or investor is watching the numbers.", body: "SBA loans, lines of credit, investors, and boards all need timely monthly financials. A monthly close is what makes that reporting credible and on time." },
    { signal: "Owned from afar", title: "Your Delaware entity is run from another state.", body: "Holding companies and out-of-state owners need a single, reliable monthly cadence on the Delaware entity&rsquo;s books &mdash; with the franchise-tax reserve and any in-state gross receipts kept current, coordinated with the home-state CPA." },
  ],
  signalsCta: { label: "Book the discovery call", href: "/contact/?intent=delaware&amp;state=delaware&amp;source_type=state-money&amp;funnel_stage=MOFU" },

  // PRICING — three tiers (ptier r-3). Canonical DE figure ($400/mo) only; higher tiers
  // scoped qualitatively (no fabricated DE dollar ranges). 3 H3s.
  // (H2: Fixed monthly fee, written scope, no hourly billing.)
  pricing: [
    { tier: "Tier 01", title: "Essentials", range: "From $400/month", fit: "For: simple books, 1&ndash;2 bank accounts, single entity, low transaction volume, no payroll or simple payroll.", includes: ["Monthly reconciliation &amp; categorization", "Monthly P&amp;L, balance sheet, cash flow", "Named ProAdvisor", "Year-end CPA handoff package"], cta: "Scope an Essentials engagement &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard", range: "Fixed-fee &middot; scoped to volume", fit: "For: active Delaware businesses, multiple bank and credit accounts, payroll, gross receipts tracked by activity.", includes: ["Everything in Essentials", "Payroll &amp; gross-receipts verification", "Franchise-tax reserve tracking", "AP / AR upkeep", "1099 preparation", "Quarterly business review"], cta: "Scope a Standard engagement &rarr;" },
    { tier: "Tier 03", title: "Complex", range: "Fixed-fee &middot; custom scope", fit: "For: multi-entity and holding-company structures, inventory, multi-state activity, complex payroll, lender/investor reporting.", includes: ["Everything in Standard", "Multi-entity / holding-company consolidation", "Inventory &amp; COGS tracking", "Multi-state activity reconciliation", "Investor / lender reporting", "Monthly KPI dashboard"], cta: "Scope a Complex engagement &rarr;" },
  ],
  pricingNote: "Monthly bookkeeping starts at $400/mo; the Standard and Complex tiers are priced as a fixed fee against the written scope determined by the diagnostic &mdash; by transaction volume, number of entities, payroll, and complexity, never hourly. Most engagements include a one-time onboarding fee covering setup, file review, and first-month verification. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a> for full detail.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A bank feed can import a transaction, but it can&rsquo;t tell you whether margins are slipping, which gross-receipts activity category your revenue belongs in, whether the franchise-tax reserve will cover the bill, or whether cash will cover next month&rsquo;s payroll. A monthly close turns raw data into numbers you can run the business on &mdash; the judgment layer is where the value is.",
    "When monthly bookkeeping isn&rsquo;t enough, <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> builds forecasting, KPIs, and board-ready reporting on top of the clean monthly base. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // OPERATOR — who closes the books (firm-level; no founder/personal name). Body as prose.
  // (H2 lives in front-matter sec.operatorH.)
  operatorBody: [
    "Every TechBrot monthly engagement is closed by a vetted Certified QuickBooks ProAdvisor working under TechBrot&rsquo;s brand, standards, and infrastructure. You&rsquo;ll know exactly who is closing your books, how to reach them, and what credentials they hold &mdash; and the same person stays on your file month to month, so context is never lost.",
    "Quality review by the Certified QuickBooks ProAdvisor team backs every monthly close against TechBrot&rsquo;s published operating standards. The result is a close you can set your calendar by. See <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">Delaware bookkeeping services</a> or our <a href=\"/trust/\">trust &amp; methodology</a>.",
  ],
  operatorCreds: [
    { label: "Certification", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping &amp; QuickBooks work &middot; gross receipts tracked/verified &middot; franchise-tax reserve set &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed monthly fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // RELATED — DE services (rel cards). 4 H3s.
  // (H2: Monthly is usually the destination after another engagement.)
  related: [
    { title: "Bookkeeping cleanup", body: "If the books are messy, wrong, or commingled across entities, cleanup comes first &mdash; then transition to monthly with the same ProAdvisor, without losing context.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
    { title: "Delaware bookkeeping services", body: "The full picture &mdash; the hub for every TechBrot bookkeeping service in Delaware, of which monthly is the recurring core.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping hub &rarr;" },
    { title: "Gross receipts tax help", body: "Delaware&rsquo;s gross receipts tax on the seller, tracked by business activity and reconciled to the books &mdash; verified as part of the monthly close.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
    { title: "Fractional CFO", body: "When monthly bookkeeping isn&rsquo;t enough &mdash; forecasting, KPI reporting, and board-ready financials on top of the clean monthly base.", href: "/accounting/advisory/fractional-cfo/", cta: "CFO support &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Monthly close, reconciliation, financial statements &middot; gross receipts tracked/verified &middot; franchise-tax reserve set &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed monthly fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // FAQ — 7 Q/A, Delaware-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Delaware monthly bookkeeping questions.) 1 call-intent answer (#2).
  faq: [
    { q: "What is monthly bookkeeping for a Delaware business?", a: "Monthly bookkeeping is a recurring engagement where a Certified QuickBooks ProAdvisor closes the books every month &mdash; reconciling bank and credit-card accounts against actual statements, categorizing transactions, verifying payroll and gross-receipts entries by activity, setting the franchise-tax reserve, and delivering a monthly financial package: P&amp;L, balance sheet, and cash flow statement. For Delaware businesses the close package arrives by the 15th of the following month." },
    { q: "How much does monthly bookkeeping cost in Delaware?", a: "Monthly bookkeeping starts at $400/mo. Final pricing depends on transaction volume, number of accounts and entities, payroll, gross-receipts activity, and complexity &mdash; every engagement is a fixed monthly fee against a written scope, never hourly. For a quote, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>. See the pricing section for tier details." },
    { q: "What does monthly bookkeeping include?", a: "Standard monthly bookkeeping includes bank and credit-card reconciliations, transaction categorization, AP and AR upkeep, payroll and gross-receipts verification by activity, the franchise-tax reserve, monthly close, and a monthly financial package &mdash; P&amp;L, balance sheet, and cash flow statement. Larger engagements add quarterly business reviews, multi-entity or holding-company consolidation, and year-end preparation." },
    { q: "When do I receive my monthly financial package?", a: "By the 15th of the following month. For example, January books close and the January financial package is delivered by February 15. Complex multi-entity or inventory engagements may close by the 20th. The timeline is set in your written scope." },
    { q: "Do I need cleanup or catch-up before starting monthly?", a: "Monthly bookkeeping starts from a known-current state. Books that are behind but structured need catch-up first; messy, inaccurate, or commingled multi-entity books need cleanup first. Most Delaware clients transition directly from cleanup or catch-up to monthly with the same bookkeeper, without losing context." },
    { q: "How do you handle the Delaware gross receipts tax and franchise tax in a monthly engagement?", a: "Each month we track and verify your gross receipts in the books by business activity &mdash; so the right rate and exclusion apply and the return reconciles &mdash; and we keep the annual franchise-tax reserve current so it&rsquo;s never a surprise. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm; we prepare the numbers and coordinate with your CPA and registered agent, who file. We do not file tax returns or the franchise tax." },
    { q: "Who actually closes my Delaware books each month?", a: "A named Certified QuickBooks ProAdvisor on your file every month, working under TechBrot&rsquo;s brand, standards, and infrastructure. You have a named point of contact you can reach, and the same person stays on your file month to month, so context is never lost &mdash; including for entities run from out of state." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/monthly-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Monthly Bookkeeping","description":"Recurring monthly bookkeeping for Delaware businesses: full monthly close, bank and credit-card reconciliation, transaction categorization, payroll and gross-receipts verification by activity, the franchise-tax reserve, and a monthly financial package (P&L, balance sheet, cash flow) delivered by the 15th.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-monthly-bookkeeping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-monthly-summary","#de-svc-monthly-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Monthly Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Monthly Bookkeeping","serviceType":"Recurring monthly bookkeeping and financial close","description":"Recurring monthly bookkeeping for Delaware businesses: bank and credit-card reconciliation against actual statements, transaction categorization, AP and AR upkeep, payroll and gross-receipts verification by activity, the annual franchise-tax reserve, monthly close, and a monthly financial package (P&L, balance sheet, cash flow) delivered by the 15th of the following month. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, or registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Delaware businesses, holding companies, and out-of-state-owned Delaware entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/month, fixed monthly fee against a written scope; higher tiers scoped to volume and complexity.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
