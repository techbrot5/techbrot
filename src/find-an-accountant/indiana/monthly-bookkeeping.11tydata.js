/* /find-an-accountant/indiana/monthly-bookkeeping/ — t-money IN SERVICE child (recurring
 * engagement). NEW page (no baseline equity contract — Indiana set built fresh). Structure
 * mirrors the proven DE/NY monthly-bookkeeping children: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph emitting the schema @graph
 * (WebPage, BreadcrumbList, Service with Offers, FAQPage). FAQPage mainEntity is generated
 * from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * INDIANA LOCALIZATION (per IN-FACTS): DE gross-receipts/franchise-reserve/Wilmington/3
 * counties/Middletown/holding companies → flat 2.95% state income tax; county LIT levied in
 * ALL 92 counties (each sets its own rate — never quote a specific %; county of residence on
 * Jan 1; Form WH-4; 30-day nonresident safe harbor) tracked per employee in payroll; flat 7%
 * statewide sales tax, no local add-ons, reconciled to the periodic Indiana return; business
 * personal-property $2,000,000 exemption for 2026 (under $2M = exempt but must be DECLARED on
 * Form 102/103, asset detail kept assessor-ready); Crossroads-of-America logistics/manufacturing
 * + multi-state nexus for IN shippers; "all 92 Indiana counties".
 * PRICING (rule 10 + IN-FACTS): ONLY the canonical "from $400/mo" figure is stated; higher
 * Indiana tiers are scoped qualitatively (no fabricated IN dollar ranges).
 *
 * NO ADDRESS (CRITICAL — areaServed-only, mirrors the NY child): NO street address, NO local
 * office, NO LocalBusiness/PostalAddress/geo/hasMap node anywhere. Service + areaServed (State
 * of Indiana) only — "served remotely across all 92 Indiana counties".
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes; no review-card, no
 * AggregateRating. No founder/personal name in visible content. Independent firm — NOT a CPA
 * firm and NOT a registered agent; does NOT file Indiana/federal returns, the county LIT, the
 * sales-tax return, or the business personal-property return; tracks the asset detail, the LIT
 * withholding, and the sales tax in the books and coordinates with the client's CPA, EA, and
 * county assessor, who file. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "<strong>Indiana monthly bookkeeping</strong> is a recurring engagement where a named Certified QuickBooks ProAdvisor closes your books every month &mdash; reconciling every bank and credit-card account against the actual statements, categorizing transactions, keeping <strong>AP and AR</strong> current, verifying payroll and <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county LIT withholding by employee county</a>, reconciling the 7% Indiana sales tax, and delivering a monthly financial package: <a href=\"/accounting/financial-statements/\">P&amp;L, balance sheet, and cash flow statement</a>. For Indiana businesses the close package lands by the <strong>15th of the following month</strong>.",
    "It&rsquo;s the ongoing engagement that follows <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> or catch-up &mdash; or the right starting point if your books are already current. Everything runs in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> file, kept management-ready, not just tax-ready. Each month the same person stays on your file, so context is never lost &mdash; including the 92-county LIT withholding matrix for multi-county payrolls and multi-state nexus for Indiana shippers.",
    "Every engagement is a <strong>fixed monthly fee against a written scope</strong> (from $400/mo by complexity), never hourly. It&rsquo;s part of TechBrot&rsquo;s broader <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">Indiana bookkeeping services</a>. We do the books and coordinate with your CPA, who files &mdash; TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a CPA firm and not a registered agent; not affiliated with Intuit Inc.; does not file Indiana returns, the county LIT, sales-tax, or business personal-property returns.",
  ],

  // CADENCE — what every month looks like (process-grid). 4 H3s.
  // (H2: What every month actually looks like.)
  cadence: [
    { phase: "Days 1&ndash;5", title: "Source documents flow in", body: "Bank feeds sync. Statements drop. Payroll runs reconcile. Receipts and supporting documents arrive through the secure portal &mdash; so the month&rsquo;s raw data is complete before the close work begins." },
    { phase: "Days 6&ndash;10", title: "Categorization &amp; reconciliation", body: "Your ProAdvisor categorizes transactions, reconciles every bank and credit-card account against the actual statements, investigates anomalies, and escalates anything that needs your input before it can be closed." },
    { phase: "Days 11&ndash;14", title: "Close, review, statements", body: "Month closed. County LIT withholding verified by employee county and the 7% Indiana sales tax reconciled to the books. Quality review against the operating standard. P&amp;L, balance sheet, and cash flow statement generated, with variances and plain-English commentary prepared alongside them." },
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
      "County LIT withholding tracking by employee county (WH-4)",
      "Indiana 7% sales-tax tracking &amp; reconciliation",
      "Business personal-property asset detail (Form 102/103 assessor-ready)",
      "1099 preparation",
      "Inventory &amp; COGS tracking",
      "Quarterly business reviews",
      "Year-end CPA handoff package",
    ] },
  ],
  deliverablesNote: "County LIT withholding is tracked per employee by county of residence and principal work county from each Form WH-4, so payroll withholds the right county rate; the 7% Indiana sales tax is tracked in the books so the periodic Indiana return reconciles; and business personal-property asset detail is kept assessor-ready (under the $2,000,000 exemption the property is exempt but must still be declared on Form 102/103). You or your CPA file the Indiana sales-tax return with the Department of Revenue, and your CPA, EA, or county assessor handles the LIT and personal-property filings. TechBrot does not file tax returns, the county LIT, or the personal-property return.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana monthly bookkeeping, in five questions.)
  aiSummary: [
    { q: "What is monthly bookkeeping?", a: "A recurring engagement where a named <strong>Certified QuickBooks ProAdvisor</strong> closes your books every month &mdash; reconciling accounts against real statements, categorizing transactions, verifying payroll and county LIT withholding, reconciling the 7% Indiana sales tax, and delivering a monthly package: <strong>P&amp;L, balance sheet, cash flow</strong>." },
    { q: "What does it cost in Indiana?", a: "By scope, not by hour: <strong>from $400/mo</strong>, set by transaction volume, number of accounts and entities, payroll, and complexity. A fixed monthly fee against a written scope, always. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
    { q: "What&rsquo;s included?", a: "Bank and credit-card reconciliations, categorization, AP/AR upkeep, payroll and <strong>county LIT withholding tracking</strong>, the 7% Indiana sales tax reconciled, monthly close, and the financial package. Larger engagements add quarterly reviews, multi-state nexus tracking, and year-end prep." },
    { q: "When is the package delivered?", a: "<strong>By the 15th</strong> of the following month &mdash; January books close, the January package lands by February 15. Complex multi-entity or inventory engagements may close by the 20th. The timeline is set in your written scope." },
    { q: "Do I need cleanup or catch-up first?", a: "Monthly starts from a current state. Behind-but-structured books need catch-up; messy or commingled books need <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> first. Most clients move straight from cleanup or catch-up to monthly with the same ProAdvisor." },
  ],

  // SIGNALS — who monthly is for (lift cards). 6 H3s.
  // (H2: If any of these sound familiar, the answer is yes.)
  signals: [
    { signal: "Past DIY", title: "Your business is past the DIY-bookkeeping stage.", body: "Self-managing the books worked when the business was small. Now the time, the errors, and the missed insights cost more than a professional bookkeeper would &mdash; and the books quietly slip behind." },
    { signal: "Real-time numbers", title: "You need monthly numbers, not just year-end ones.", body: "If you&rsquo;re only seeing financials at tax time, you&rsquo;re flying blind 11 months a year. A monthly close gives you real numbers to make decisions on while they still matter." },
    { signal: "CPA-ready", title: "Your CPA needs clean books to file efficiently.", body: "CPAs charge significantly more when they have to clean up your books at tax time. Monthly bookkeeping delivers a reconciled year-end package they can file directly from." },
    { signal: "Post-cleanup", title: "You just finished cleanup or catch-up.", body: "The natural next step. Monthly keeps the books in the state <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> just delivered &mdash; the same ProAdvisor continues without context loss." },
    { signal: "Watched numbers", title: "A lender, board, or investor is watching the numbers.", body: "SBA loans, lines of credit, investors, and boards all need timely monthly financials. A monthly close is what makes that reporting credible and on time." },
    { signal: "Ships across state lines", title: "Your Indiana business ships or operates across state lines.", body: "Crossroads-of-America logistics, distribution, and manufacturing shippers cross into multi-state nexus where goods move, and multi-county payrolls carry the 92-county LIT withholding matrix &mdash; both kept current each month and coordinated with your CPA." },
  ],
  signalsCta: { label: "Book the discovery call", href: "/contact/?intent=indiana&amp;state=indiana&amp;source_type=state-money&amp;funnel_stage=MOFU" },

  // PRICING — three tiers (ptier r-3). Canonical IN figure ($400/mo) only; higher tiers
  // scoped qualitatively (no fabricated IN dollar ranges). 3 H3s.
  // (H2: Fixed monthly fee, written scope, no hourly billing.)
  pricing: [
    { tier: "Tier 01", title: "Essentials", range: "From $400/month", fit: "For: simple books, 1&ndash;2 bank accounts, single entity, low transaction volume, no payroll or simple payroll.", includes: ["Monthly reconciliation &amp; categorization", "Monthly P&amp;L, balance sheet, cash flow", "Named ProAdvisor", "Year-end CPA handoff package"], cta: "Scope an Essentials engagement &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard", range: "Fixed-fee &middot; scoped to volume", fit: "For: active Indiana businesses, multiple bank and credit accounts, payroll, county LIT withholding, the 7% Indiana sales tax.", includes: ["Everything in Essentials", "Payroll &amp; county LIT withholding tracking", "7% Indiana sales-tax reconciliation", "AP / AR upkeep", "1099 preparation", "Quarterly business review"], cta: "Scope a Standard engagement &rarr;" },
    { tier: "Tier 03", title: "Complex", range: "Fixed-fee &middot; custom scope", fit: "For: multi-entity structures, inventory, multi-state nexus for shippers, complex multi-county payroll, lender/investor reporting.", includes: ["Everything in Standard", "Multi-entity consolidation", "Inventory &amp; COGS tracking", "Multi-state nexus reconciliation", "Investor / lender reporting", "Monthly KPI dashboard"], cta: "Scope a Complex engagement &rarr;" },
  ],
  pricingNote: "Monthly bookkeeping starts at $400/mo; the Standard and Complex tiers are priced as a fixed fee against the written scope determined by the diagnostic &mdash; by transaction volume, number of entities, payroll, and complexity, never hourly. Most engagements include a one-time onboarding fee covering setup, file review, and first-month verification. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a> for full detail.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A bank feed can import a transaction, but it can&rsquo;t tell you whether margins are slipping, which county&rsquo;s LIT rate each employee&rsquo;s withholding should follow, whether the 7% Indiana sales-tax accrual reconciles, or whether shipping into another state has created nexus there. A monthly close turns raw data into numbers you can run the business on &mdash; the judgment layer is where the value is.",
    "When monthly bookkeeping isn&rsquo;t enough, <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> builds forecasting, KPIs, and board-ready reporting on top of the clean monthly base. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // OPERATOR — who closes the books (firm-level; no founder/personal name). Body as prose.
  // (H2 lives in front-matter sec.operatorH.)
  operatorBody: [
    "Every TechBrot monthly engagement is closed by a vetted Certified QuickBooks ProAdvisor working under TechBrot&rsquo;s brand, standards, and infrastructure. You&rsquo;ll know exactly who is closing your books, how to reach them, and what credentials they hold &mdash; and the same person stays on your file month to month, so context is never lost.",
    "Quality review by the Certified QuickBooks ProAdvisor team backs every monthly close against TechBrot&rsquo;s published operating standards. The result is a close you can set your calendar by. See <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">Indiana bookkeeping services</a> or our <a href=\"/trust/\">trust &amp; methodology</a>.",
  ],
  operatorCreds: [
    { label: "Certification", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping &amp; QuickBooks work &middot; county LIT withholding tracked &middot; 7% Indiana sales tax reconciled &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed monthly fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // RELATED — IN services (rel cards). 4 H3s.
  // (H2: Monthly is usually the destination after another engagement.)
  related: [
    { title: "Bookkeeping cleanup", body: "If the books are messy, wrong, or commingled across entities, cleanup comes first &mdash; then transition to monthly with the same ProAdvisor, without losing context.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
    { title: "Indiana bookkeeping services", body: "The full picture &mdash; the hub for every TechBrot bookkeeping service in Indiana, of which monthly is the recurring core.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping hub &rarr;" },
    { title: "County income tax (LIT) help", body: "Indiana&rsquo;s 92-county local income tax, withheld by each employee&rsquo;s county of residence and principal work county from their WH-4 &mdash; tracked and verified as part of the monthly close.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County LIT help &rarr;" },
    { title: "Fractional CFO", body: "When monthly bookkeeping isn&rsquo;t enough &mdash; forecasting, KPI reporting, and board-ready financials on top of the clean monthly base.", href: "/accounting/advisory/fractional-cfo/", cta: "CFO support &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Monthly close, reconciliation, financial statements &middot; county LIT withholding tracked &middot; 7% Indiana sales tax reconciled &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed monthly fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // FAQ — 7 Q/A, Indiana-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Indiana monthly bookkeeping questions.) 1 call-intent answer (#2).
  faq: [
    { q: "What is monthly bookkeeping for an Indiana business?", a: "Monthly bookkeeping is a recurring engagement where a Certified QuickBooks ProAdvisor closes the books every month &mdash; reconciling bank and credit-card accounts against actual statements, categorizing transactions, verifying payroll and county LIT withholding by employee county, reconciling the 7% Indiana sales tax, and delivering a monthly financial package: P&amp;L, balance sheet, and cash flow statement. For Indiana businesses the close package arrives by the 15th of the following month." },
    { q: "How much does monthly bookkeeping cost in Indiana?", a: "Monthly bookkeeping starts at $400/mo. Final pricing depends on transaction volume, number of accounts and entities, payroll, county LIT withholding, sales-tax activity, and complexity &mdash; every engagement is a fixed monthly fee against a written scope, never hourly. For a quote, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>. See the pricing section for tier details." },
    { q: "What does monthly bookkeeping include?", a: "Standard monthly bookkeeping includes bank and credit-card reconciliations, transaction categorization, AP and AR upkeep, payroll and county LIT withholding tracking, the 7% Indiana sales tax reconciled, monthly close, and a monthly financial package &mdash; P&amp;L, balance sheet, and cash flow statement. Larger engagements add quarterly business reviews, multi-state nexus tracking, and year-end preparation." },
    { q: "When do I receive my monthly financial package?", a: "By the 15th of the following month. For example, January books close and the January financial package is delivered by February 15. Complex multi-entity or inventory engagements may close by the 20th. The timeline is set in your written scope." },
    { q: "Do I need cleanup or catch-up before starting monthly?", a: "Monthly bookkeeping starts from a known-current state. Books that are behind but structured need catch-up first; messy, inaccurate, or commingled multi-entity books need cleanup first. Most Indiana clients transition directly from cleanup or catch-up to monthly with the same bookkeeper, without losing context." },
    { q: "How do you handle Indiana sales tax and county income tax (LIT) in a monthly engagement?", a: "Each month we track the 7% Indiana sales tax in the books so the periodic Indiana return reconciles, and we track county LIT withholding per employee by county of residence and principal work county from each Form WH-4 so payroll withholds the right county rate. We also keep business personal-property asset detail assessor-ready &mdash; under the $2,000,000 exemption the property is exempt but must still be declared on Form 102/103. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm; we prepare the numbers and coordinate with your CPA, EA, and county assessor, who file. We do not file tax returns, the county LIT, or the personal-property return." },
    { q: "Who actually closes my Indiana books each month?", a: "A named Certified QuickBooks ProAdvisor on your file every month, working under TechBrot&rsquo;s brand, standards, and infrastructure. You have a named point of contact you can reach, and the same person stays on your file month to month, so context is never lost &mdash; including across multi-county payrolls and multi-state shipping activity." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/monthly-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Monthly Bookkeeping","description":"Recurring monthly bookkeeping for Indiana businesses: full monthly close, bank and credit-card reconciliation, transaction categorization, payroll and county LIT withholding tracking, the 7% Indiana sales tax reconciled, and a monthly financial package (P&L, balance sheet, cash flow) delivered by the 15th.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-monthly-bookkeeping.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-monthly-summary","#in-svc-monthly-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Monthly Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Monthly Bookkeeping","serviceType":"Recurring monthly bookkeeping and financial close","description":"Recurring monthly bookkeeping for Indiana businesses: bank and credit-card reconciliation against actual statements, transaction categorization, AP and AR upkeep, payroll and county LIT withholding tracking, the 7% Indiana sales tax reconciled, monthly close, and a monthly financial package (P&L, balance sheet, cash flow) delivered by the 15th of the following month. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns, the county LIT, sales-tax, or business personal-property returns — coordinates with the client's CPA, EA, or county assessor.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market Indiana businesses, multi-county payrolls, and multi-state Indiana logistics and manufacturing shippers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/month, fixed monthly fee against a written scope; higher tiers scoped to volume and complexity.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
