/* /accounting/industries/franchise/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN
 * CONTRACT: tmp/contract-acctind-franchise.txt (42 headings, 7 FAQ) is the ONLY
 * authority for headings + FAQ. Old HTML accounting/industries/franchise/index.html
 * read for BODY PROSE only. REFERENCE pattern: src/accounting/industries/construction
 * .njk + .11tydata.js (exact t-mofu accounting-industry shape + full schema) and
 * src/quickbooks/online.njk. NATIONAL scope.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns the footer / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: contract carries 7 verbatim Q/A — emitted exactly, NO dedup, append-only. The
 * baseline body's advisory Q/A substance ("the next unit is the point") is preserved as
 * section prose in the advisory block (no gutting), not duplicated into the FAQ array.
 * FAQPage + QAPage emitted from the same arrays — single source of truth.
 *
 * SCHEMA: WebPage, BreadcrumbList, Service, ItemList (deliverables), FAQPage (all 7
 * verbatim, NO dedup), QAPage (from the 5-question ai-summary). QAPage + ItemList NOT
 * dropped.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc. or any franchise-management platform; bookkeeping/ProAdvisor
 * scope — does NOT file income taxes, draft FDDs, or render audit/Item 19 opinions;
 * coordinates with the client's franchise attorney, CPA/EA, and audit firm. No <strong>
 * in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Franchise accounting, plainly." (from baseline TL;DR body, national scope)
  definition: [
    "Franchise economics break generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> at two levels. <strong>Franchisees</strong> face precise FDD-defined royalty calculations (typically 4&ndash;8% of gross sales, where &ldquo;gross sales&rdquo; means something different in every FDD), <strong>advertising fund contributions</strong> (typically 1&ndash;4% of sales) separate from royalty, a <strong>brand-mandated chart of accounts</strong> most franchisors require for benchmarking, multi-unit P&amp;L plus consolidation plus same-store-sales tracking, and eventual <strong>royalty audits</strong> with interest at 12&ndash;18% on underpayments. <strong>Franchisors</strong> face <strong>ASC 606 franchise revenue recognition</strong> (initial fees now typically ratable over the franchise term, not recognized at signing), <strong>ad fund administration</strong> as agency funds held in trust (not franchisor revenue), <strong>Item 19 FPR</strong> support requiring systematic franchisee data, and multi-state franchise registration coordination.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who handle both sides: extracting precise gross-sales definitions from FDDs, configuring brand-mandated CoAs in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, producing weekly/monthly royalty and ad-fund reports, handling multi-unit consolidation with same-store-sales, supporting franchisor ASC 606 recognition, aggregating franchisee data for Item 19 support, and producing royalty-audit-ready documentation. For franchise operators ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into unit-expansion, brand-acquisition, and system-growth decisions. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc. and zero commission on any franchise-management platform. We coordinate with your franchise attorney on FDD matters, your CPA on tax filing, and your audit firm on audit work; we don&rsquo;t draft FDDs or render audit opinions ourselves.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Franchise accounting, in five questions.) Source of QAPage schema.
  aiSummary: [
    { q: "Why is franchise accounting different?", a: "Franchising creates complexity nowhere else has: precise <strong>FDD-defined royalty</strong> calculations (4&ndash;8% of gross sales), <strong>ad fund</strong> contributions (1&ndash;4%), <strong>brand-mandated CoA</strong>, <strong>multi-unit consolidation with same-store-sales</strong>, and for franchisors, <strong>ASC 606 franchise revenue recognition</strong>." },
    { q: "How do royalties work?", a: "Calculated against an <strong>FDD-defined gross sales basis</strong> that varies by brand &mdash; some include sales tax, some exclude refunds, third-party delivery treated differently across FDDs. Reported weekly or monthly to the franchisor via portal (FranConnect, Naranga, brand systems). Underreporting compounds at 12&ndash;18% interest toward royalty audit." },
    { q: "Do you support brand-mandated CoA and multi-unit?", a: "Yes. Brand CoA configured at onboarding (QSR, fitness, and hospitality systems mandate specific structures). <strong>Multi-unit</strong> with unit-level P&amp;L, consolidated reporting, <strong>same-store-sales</strong> tracking, and area-developer rollups. Typically requires <a href=\"/quickbooks/online/\">QuickBooks Enterprise</a> at 5+ units." },
    { q: "For franchisors: ASC 606, Item 19, ad fund?", a: "<strong>ASC 606</strong>: initial fees ratable over the franchise term (10&ndash;20 years), royalties as franchisees report sales. <strong>Item 19 FPR</strong>: systematic franchisee data aggregated to system-average metrics. <strong>Ad fund</strong>: agency funds held in trust, not franchisor revenue." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by side (franchisee or franchisor), unit count, royalty-calculation complexity, brand-mandated CoA requirements, and reporting cadence. No hourly billing. Most engagements include initial <a href=\"/quickbooks/file-review/?intent=file-review\">file review</a> and cleanup to align historical books to FDD requirements. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places franchise operations lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places franchise operations lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Royalty is approximated", title: "Wrong gross-sales definition, audit exposure.", body: "The franchisee reports royalty on a rough &ldquo;gross sales&rdquo; number that doesn&rsquo;t match the FDD&rsquo;s definition &mdash; sales tax in when it should be out, refunds not deducted, third-party delivery reported net when the FDD requires gross, gift-card mechanics handled inconsistently. Each report adds small errors that compound across years, until the franchisor royalty audit lands the bill with 12&ndash;18% interest. The fix: extract the precise FDD gross-sales definition, configure POS reconciliation and the CoA to produce exactly that number, and keep documentation behind every reported figure. Royalty audits are common at renewal, transfer, or exit." },
    { signal: "Brand CoA is improvised", title: "Generic QuickBooks setup breaks benchmarking.", body: "The franchisor mandates a specific chart of accounts so franchisees benchmark against each other and the system average; the books run a generic QuickBooks CoA because that&rsquo;s how they were set up. Result: P&amp;Ls don&rsquo;t map to the franchisor portal, benchmarking is broken, royalty audits get harder, and the eventual sale is complicated by books that don&rsquo;t match buyer expectations. The fix: configure QuickBooks to the brand-mandated CoA at onboarding, maintain it as the franchisor updates the standard, and produce monthly P&amp;Ls in portal-ready format." },
    { signal: "Multi-unit is unhandled", title: "No unit-level P&amp;L, no same-store-sales.", body: "Multi-unit franchisees consolidating revenue across 5, 10, or 50 locations without unit-level reporting can&rsquo;t answer the questions that matter: which units are profitable, which trail system benchmarks, where labor is creeping, whether same-store-sales is actually growing or new openings are masking soft underlying performance. The fix: a CoA with Class or Location tracking per unit, unit-level P&amp;L monthly, consolidated reporting with allocated overhead, and same-store-sales calculated correctly (units open 13+ months in the comparison, new units excluded). Typically requires QuickBooks Enterprise past 5 units." },
  ],

  // WHO WE SERVE — both sides of the franchise relationship (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: Both sides of the franchise relationship. + 6 H3s)
  audiences: [
    { title: "Single-unit franchisees", body: "Owner-operated single-location franchisees. Royalty and ad-fund reporting, brand-mandated CoA, weekly/monthly franchisor-portal submission, and food/labor/occupancy benchmarking against system averages. The reference case for franchisee accounting." },
    { title: "Multi-unit franchisees", body: "Franchisees operating 2&ndash;50+ units in a single brand. Unit-level P&amp;L, same-store-sales tracking, consolidated multi-unit reporting, area-development obligations, and per-unit royalty reporting. Typically QuickBooks Enterprise from 5+ units." },
    { title: "Multi-brand franchisees", body: "Franchisees operating multiple brands (for example Subway plus Dunkin&rsquo; plus Anytime Fitness). Brand-level rollup, separate CoAs per brand, consolidated portfolio reporting, brand-specific royalty calculations, often a holding-company structure with operating sub-entities." },
    { title: "Area developers &amp; master franchisees", body: "Operators with sub-franchisee relationships inside a defined territory or country. Sub-franchisee royalty pass-through, ad-fund administration, area-level reporting, and the more complex revenue recognition for sub-franchise fees received." },
    { title: "Emerging franchisors", body: "New franchise systems with 1&ndash;50 franchisees, recently registered, building system infrastructure. ASC 606 initial-fee recognition setup, the ASU 2021-02 emerging-franchisor practical expedient, ad-fund trust accounting, and franchisee-data collection for benchmarking and future Item 19 support." },
    { title: "Established franchisors", body: "Multi-state franchise systems with 50+ franchisees. Mature ASC 606 application, Item 19 FPR data infrastructure, franchise-registration state coordination, system-wide P&amp;L aggregation, and sometimes audit-ready financials for PE diligence or IPO prep." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Franchise accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Royalty", title: "Royalty calculation &amp; reporting", body: "FDD-defined gross sales calculated precisely, royalty and ad-fund reports submitted on the franchisor&rsquo;s required cadence and portal, audit-grade documentation maintained behind every reported number.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "02 &middot; Brand CoA", title: "Brand-mandated CoA setup", body: "QuickBooks configured to match the franchisor&rsquo;s required chart of accounts at onboarding, maintained as the franchisor updates the standard, with P&amp;Ls produced in portal-ready format.", href: "/quickbooks/setup/" },
    { num: "03 &middot; Multi-unit", title: "Multi-unit &amp; same-store-sales", body: "Unit-level P&amp;L with Class or Location tracking, consolidated reporting with overhead allocation, and same-store-sales calculated correctly on a 13-month base.", href: "/quickbooks/online/" },
    { num: "04 &middot; ASC 606", title: "Franchise revenue recognition", body: "Initial franchise fees recognized ratably over the franchise term (or the ASU 2021-02 practical expedient for emerging franchisors), royalty as franchisees report sales, and ad fund as agency funds in trust.", href: "/accounting/bookkeeping/" },
    { num: "05 &middot; Cleanup", title: "Royalty-audit prep cleanup", body: "Reconcile historical royalty reports to FDD-defined gross sales, identify and remediate underreporting, and prepare documentation for a franchisor audit or system exit.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { num: "06 &middot; Advisory", title: "Unit growth &amp; system advisory", body: "Unit-expansion modeling, area-development planning, franchise-portfolio benchmarking, and system-growth strategy for franchisors &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/" },
  ],

  // INTEGRATIONS — franchise tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to your franchise stack.)
  integrations: [
    "FranConnect &mdash; franchise management and royalty reporting portal",
    "Naranga &mdash; franchise operations and royalty submission",
    "Restaurant365 &mdash; QSR accounting reconciled to QuickBooks",
    "Toast &mdash; POS sales feeding royalty-bearing gross sales",
    "Square &mdash; POS reconciliation for single-unit franchisees",
    "Clover &mdash; POS data tied to the brand-mandated CoA",
    "Gusto &mdash; multi-unit crew payroll",
    "Bill.com &mdash; multi-unit accounts payable",
  ],
  integrationsNote: "Different stack? If your franchise-management or POS system exports clean data, we can work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From improvised CoA to audit-ready royalty reporting. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your side (franchisee or franchisor), unit count, brand-mandated requirements, current bookkeeping state, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "FDD review &amp; setup", body: "Extract the precise FDD-defined gross-sales definition, configure the brand-mandated <a href=\"/quickbooks/setup/\">chart of accounts</a>, set up royalty and ad-fund calculations, plus a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> of prior-period royalty exposure where needed." },
    { num: "Phase 3", name: "Weekly/monthly royalty &amp; reporting", body: "Books reconciled with POS, royalty and ad-fund reports produced on franchisor cadence, unit-level P&amp;L for multi-unit operators, same-store-sales calculated, and brand-portal submissions handled." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with unit-level P&amp;L, system-benchmark variance, and same-store-sales, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on unit expansion, brand acquisition, and portfolio strategy." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the
  // baseline "the next unit is the point" advisory Q/A substance (no gutting).
  // (H2: Clean royalty reporting is the start. The next unit is the point.)
  advisoryBody: [
    "Once royalty is precise, the brand CoA is locked, and unit-level P&amp;L is real, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Which units to refresh, when to open the next location, whether to acquire an underperforming franchisee&rsquo;s territory, when to add a second brand, how to structure financing for area development &mdash; the decisions that actually move a franchise operation.",
    "That&rsquo;s where <strong>franchise advisory</strong> comes in: a fractional CFO who knows your unit economics turning them into expansion modeling, acquisition diligence, brand-portfolio strategy, and eventual exit planning. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the franchise multiple at exit &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim, answers preserved; enrichment append-only).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: Franchise accounting questions.)
  faq: [
    { q: "Why is franchise accounting different from regular bookkeeping?", a: "Franchising creates accounting complexity that exists nowhere else. Franchisees pay royalties (typically 4-8% of gross sales) and advertising fund contributions (typically 1-4% of sales) calculated against an FDD-defined gross sales basis that varies by brand &mdash; some include sales tax in gross, some exclude refunds, some treat gift card redemptions differently than gift card sales, and getting these definitions wrong creates royalty underpayment exposure that compounds toward eventual royalty audit. Most franchisors mandate a specific chart of accounts so they can benchmark franchisees against each other; running a generic CoA breaks benchmarking and creates audit findings. Multi-unit franchisees need unit-level P&amp;L plus consolidated reporting plus <a href=\"/accounting/advisory/kpi-reporting/\">same-store-sales tracking</a>. Franchisors face ASC 606 changes that fundamentally restructured how initial franchise fees recognize (most now ratable over the franchise term rather than at signing) and require Item 19 financial performance representations supported by systematic data. Generic bookkeeping handles none of this." },
    { q: "How do you calculate and report royalties to my franchisor?", a: "Royalty calculation requires precisely matching your FDD's definition of 'gross sales' or 'royalty-bearing sales' &mdash; the term varies by brand. Common variations: gross sales may include or exclude sales tax (typically excludes); refunds and chargebacks may be deducted from gross sales (typically yes); gift card sales may be excluded from gross sales but gift card redemptions included (or sometimes both included); employee meal discounts may be deducted (varies); third-party delivery service sales (DoorDash, UberEats) may be reported at gross or net of platform commission depending on the FDD. We extract the precise gross-sales definition from your FDD, configure the chart of accounts and POS reconciliation to produce that exact number weekly or monthly (whatever cadence the FDD requires), submit royalty reports to the franchisor on the required portal (FranConnect, Naranga, or franchisor-specific systems), and maintain documentation supporting every reported number for eventual royalty audit. Underreporting compounds at typical FDD interest rates of 12-18% annually." },
    { q: "How do advertising fund contributions work?", a: "Advertising fund contributions are separate from royalty &mdash; typically 1-4% of gross sales paid to a national or regional ad fund administered by the franchisor. Some franchisors also require additional local marketing spend (typically 1-3% of sales) for in-market advertising, which the franchisee documents and the franchisor audits. The ad fund itself is typically held by the franchisor in trust for franchisee benefit and used for system-wide marketing &mdash; for the franchisor, ad fund contributions are not revenue (they're agency funds requiring separate trust accounting). For the franchisee, ad fund contributions are an expense. We configure ad fund accounts in the chart of accounts, calculate and report contributions on the franchisor's required cadence, track local marketing spend against the FDD-required percentage, and maintain documentation that an ad fund audit would require." },
    { q: "Do you support brand-mandated chart of accounts?", a: "Yes. Many franchisors &mdash; particularly in QSR (Subway, McDonald's, Dunkin', Domino's), fitness (Anytime Fitness, Orangetheory, F45), and hospitality (Hilton, Marriott, IHG) &mdash; mandate a specific chart of accounts so they can benchmark franchisees against each other and the system average. This is typically called the 'system chart of accounts' or 'brand chart of accounts.' Running a generic QuickBooks CoA defeats franchisor benchmarking, creates royalty-audit issues when the franchisor can't easily verify your numbers, and complicates the eventual sale of your franchise (buyers expect the books to match the system standard). We configure QuickBooks to match your franchisor's required CoA at engagement onboarding, maintain it consistently as the franchisor updates the standard, and produce monthly P&amp;Ls in the format the franchisor's reporting portal expects." },
    { q: "Do you handle multi-unit franchisee operations?", a: "Yes. Multi-unit franchisees need three things generic bookkeeping doesn't provide: unit-level P&amp;L for each location (revenue, COGS, labor, occupancy, contribution margin, EBITDA), consolidated multi-unit reporting at the franchisee entity level with overhead allocated cleanly, and same-store-sales (SSS) comparison &mdash; the key franchise growth metric measuring sales growth at units open for at least one year, with units closed or new units excluded from the comparison. Multi-unit franchisees with 5+ locations almost always need QuickBooks Enterprise with <a href=\"/quickbooks/online/features/classes/\">class tracking</a> by unit, or a dedicated multi-unit franchise accounting platform feeding QuickBooks. Area developers and multi-brand franchisees add additional complexity (brand-level rollup across multiple franchisor systems). We configure the structure to support whatever your franchise portfolio looks like &mdash; single brand multi-unit, multi-brand multi-unit, or area developer with sub-franchisees." },
    { q: "What about ASC 606 franchise revenue recognition for franchisors?", a: "ASC 606 fundamentally changed franchisor revenue recognition. Under prior guidance (ASC 952), franchisors typically recognized the initial franchise fee at signing or when the franchisee opened. Under ASC 606, most initial franchise fees represent advance payment for ongoing services (brand, system support, ongoing training) and recognize ratably over the franchise term &mdash; often 10-20 years. FASB issued ASU 2021-02 which provides emerging franchisors with a practical expedient to recognize specific pre-opening services (site selection, training, opening assistance) at the point those services are delivered, separately from the longer-tail brand-and-system component. Royalty revenue recognizes as the franchisee reports sales (royalties are sales-based variable consideration under ASC 606). Ad fund contributions are typically not the franchisor's revenue &mdash; they're agency funds. For franchisors, getting ASC 606 right matters for any future audit, fundraise, or M&amp;A event. We configure franchisor revenue recognition to match the ASC 606 framework, in coordination with your audit firm if you have one." },
    { q: "Can you support Item 19 financial performance representations?", a: "Yes. Item 19 of the FDD allows franchisors to make financial performance representations (sometimes called 'earnings claims') about historical or projected franchisee financial performance. Item 19 is optional &mdash; franchisors don't have to make any FPR &mdash; but franchisors that don't make Item 19 representations tend to underperform in franchise sales because prospective franchisees want to see actual numbers. Item 19 representations require a reasonable basis and substantiation: the underlying franchisee financial data must be systematic, current, and supportable. For franchisors with 50+ franchisees, this typically means receiving standardized monthly P&amp;Ls from franchisees (via brand-mandated CoA reporting), aggregating into system-average performance metrics, and producing the Item 19 calculation. We support the data infrastructure side &mdash; collecting franchisee data systematically and producing the aggregated performance metrics &mdash; while the actual Item 19 drafting, materiality assessment, and FDD inclusion remain with your franchise attorney." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Royalty-exposed cleanup", body: "Reconcile historical royalty reports to FDD-defined gross sales, identify and remediate underreporting, and prepare for a franchisor audit.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { title: "QuickBooks Enterprise", body: "Multi-unit franchisees need Class/Location tracking, advanced reporting, and the platform headroom for portfolio operations.", href: "/quickbooks/online/" },
    { title: "Fractional CFO &amp; advisory", body: "Unit-expansion modeling, brand-acquisition diligence, system-growth strategy, and eventual exit planning.", href: "/accounting/advisory/fractional-cfo/" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; restaurant, retail, healthcare, real estate, legal, nonprofit, and more.", href: "/accounting/industries/" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Royalty calculation, ad fund, brand CoA, multi-unit consolidation, ASC 606 (operational), Item 19 data infrastructure &middot; FDD legal drafting, franchise registration, income-tax filing, audit, and Item 19 attorney sign-off coordinated with your franchise attorney, CPA/EA, or auditor" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any franchise-management platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/franchise/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/franchise-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-franchise-definition","#acctind-franchise-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Franchise","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Franchise Accounting","serviceType":"Specialist accounting and bookkeeping for franchisees and franchisors","description":"Specialist accounting for U.S. franchisees (single-unit, multi-unit, area developers) and franchisors (emerging and established): royalty calculation and reporting against the FDD-defined gross sales basis, advertising fund contributions, brand-mandated chart of accounts, multi-unit consolidation with same-store-sales, royalty-audit preparation, ASC 606 franchise revenue recognition, and Item 19 financial-performance-representation data support, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes, draft FDDs, or render audit opinions — coordinates with the client's franchise attorney, CPA or EA, and audit firm.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. franchisees and franchisors — QSR, fitness, hospitality, services, retail"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Franchise accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What franchise accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Franchise accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
