/* /accounting/industries/nonprofit/ — LIVE baseline industry page migrated to cobalt
 * t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-nonprofit.txt (42 headings, 7 FAQ) is the ONLY authority for
 * headings + FAQ. Old HTML accounting/industries/nonprofit/index.html read for BODY
 * PROSE only. REFERENCE pattern: src/accounting/industries/construction.njk +
 * .11tydata.js (proven t-mofu cobalt) for structure + the FULL schema set (WebPage,
 * BreadcrumbList, Service, ItemList, FAQPage, QAPage); content angle reused from the NY
 * analog (src/find-an-accountant/new-york/industries/nonprofit.njk) but NATIONAL scope —
 * NY-specific tax (CHAR500, Charities Bureau, $400–$2,500/mo NY pricing, state audit
 * tiers) dropped, generalized to FASB ASC 958 fund accounting, federal Uniform Guidance
 * (2 CFR 200) / Single Audit at $750K, and Form 990 coordination.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * (newsletter) NOT rendered here — base chrome owns them / dropped per protocol T2. The
 * "Get nonprofit books that survive the audit." final-CTA H2 is rendered by the layout's
 * ctaBand front-matter, NOT in the body. The 5 quick-answer questions render as NON-heading
 * ai-summary__question (baseline captured them as <dt>, NOT <hN>) to keep the frozen
 * heading inventory exact. Two extra real-baseline sections the construction model lacked
 * are carried verbatim from the contract: "Nonprofits come in many shapes." (signal-grid,
 * 6 H3s) and "For-profit bookkeeping vs. nonprofit fund accounting." (vs-scroll + vs-table,
 * T3 no-collapse).
 *
 * FAQ (T4): the contract carries 7 verbatim Q/A — ALL 7 rendered as faq__list AND emitted
 * to FAQPage from the same array, append-only, NO dedup. The baseline body also carried
 * "advice/mission-impact" prose (the "Audit-ready books are the start. Mission impact is
 * the point." advisory block) — preserved as section prose (no gutting), not duplicated
 * into the FAQ array. FAQPage + QAPage emitted from the same arrays — single source of truth.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; no Clutch
 * reviews carried on the NY analog or old baseline, so this page renders NO review-card and
 * NO AggregateRating; firm-level authorship; David Westgate in reviewedBy schema @id only;
 * independent firm, not affiliated with Intuit Inc.; we MAINTAIN the books/workpapers — we
 * do NOT file Form 990 or render audit opinions (the CPA/EA files the 990; an independent
 * auditor performs any required audit/Single Audit). No <strong> in the dark hero subheading.
 * CTA lexicon ONLY: "Book the discovery call" -> /contact/?intent=accounting; "Get the free
 * file review" -> /quickbooks/file-review/?intent=file-review; "Speak to a ProAdvisor" (tel). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Nonprofit accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "Nonprofits operate under <strong>FASB ASC 958</strong> (formerly SFAS 117), which fundamentally restructures the books compared to for-profit <a href=\"/accounting/bookkeeping/\">bookkeeping</a>. Net assets replace equity, classified as either <strong>without donor restrictions</strong> or <strong>with donor restrictions</strong>. Contributions and grants replace sales revenue. <strong>Functional expense allocation</strong> across Program / Management &amp; General / Fundraising is required on the Statement of Functional Expenses, not optional. <strong>Restricted funds</strong> must be tracked separately and released as donor purposes are satisfied. <strong>Federal grants</strong> require Uniform Guidance (2 CFR 200) compliance, with Single Audits triggered above $750K in federal expenditures, and most nonprofits over state-specific revenue thresholds (typically $500K&ndash;$2M) require an annual financial audit.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure <a href=\"/quickbooks/online/\">QuickBooks</a> for proper fund accounting in your own file, track restricted contributions from receipt through release, allocate functional expense monthly, maintain grant-compliance documentation, and keep <strong>audit-ready, 990-ready books</strong> all year so year-end is a handoff, not a reconstruction. We maintain the books and workpapers and coordinate cleanly with your CPA; <strong>we don&rsquo;t file Form 990 or render audit opinions</strong> &mdash; those remain with your CPA, EA, or independent auditor. For nonprofit leaders ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into program-investment, reserves, and fundraising decisions. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Nonprofit accounting, in five questions.)
  aiSummary: [
    { q: "How is nonprofit accounting different?", a: "Different framework (<strong>FASB ASC 958</strong>), different question. Net assets replace equity, with <strong>restricted vs. unrestricted</strong> classification. <strong>Functional expense allocation</strong> across Program / Management &amp; General / Fundraising is required &mdash; the <strong>Statement of Activities</strong> replaces the Income Statement and a <strong>Statement of Functional Expenses</strong> is mandatory. A for-profit chart of accounts isn&rsquo;t built for any of it." },
    { q: "What is fund accounting and do you set it up?", a: "Yes. Fund accounting tracks resources separately by intended purpose. Net assets fall into two categories &mdash; <strong>without donor restrictions</strong> (any mission use) and <strong>with donor restrictions</strong> (donor-specified purpose or time) &mdash; with internal tracking for each restricted fund (building, scholarship, program, endowment). We configure QuickBooks classes and the chart of accounts to support it and track restricted contributions through release." },
    { q: "Do you handle grant accounting and federal grants?", a: "Yes. We distinguish <strong>conditional vs. unconditional</strong> contributions (different recognition timing) and handle federal <strong>Uniform Guidance (2 CFR 200)</strong> compliance &mdash; allowable-cost rules, indirect-cost recovery (de minimis 10% or negotiated rate), and documentation. A <strong>Single Audit</strong> is triggered above $750K in federal expenditures; we prepare audit-ready books and the audit itself is performed by an independent auditor." },
    { q: "Do you file Form 990?", a: "<strong>No.</strong> Form 990 filing requires CPA or EA credentials. We maintain audit-ready and <strong>990-ready</strong> books, organize the supporting documentation the preparer needs, and coordinate cleanly so the filing happens on schedule (May 15 for calendar-year filers, with an extension to November 15 available). Your CPA or EA files the 990; an independent auditor renders any audit opinion." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by revenue size, grant complexity, restricted-fund count, audit requirement, and Form 990 size (990-N postcard vs. 990-EZ vs. full 990). No hourly billing. We do not file Form 990 or perform audits; we coordinate with your CPA, EA, or independent auditor." },
  ],

  // CHALLENGES — three places nonprofits lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places nonprofits lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Restricted funds are commingled", title: "No separation of donor-restricted resources.", body: "Donors gave for specific purposes &mdash; building fund, scholarship program, youth initiative &mdash; but the books treat everything as one pot, and the Statement of Activities never separates without-donor-restrictions from with-donor-restrictions. When a donor asks how their restricted gift was used, or an auditor asks for restricted-fund activity, the books can&rsquo;t answer. The fix is fund accounting with QuickBooks class tracking per restricted purpose and the standard release-from-restriction entries as purposes are satisfied. Commingling is a real compliance issue, not just untidiness &mdash; it puts donor trust, audit opinions, and 501(c)(3) standing at risk." },
    { signal: "Functional allocation is missing", title: "Program % vs Admin % vs Fundraising % unknown.", body: "Boards, donors, watchdogs (Charity Navigator, GuideStar/Candid), and Form 990 all need expenses split across Program, Management &amp; General, and Fundraising. Generic bookkeeping shows expense by natural category (rent, salaries, supplies) with no functional allocation, so the Statement of Functional Expenses can&rsquo;t be produced and the 990 preparer gets pushback. The fix is an allocation methodology &mdash; direct identification for traceable costs, time studies or reasonable bases for shared costs &mdash; captured monthly. The 70%+ Program ratio donors look for is achievable for most well-run nonprofits, but only if the allocation is captured systematically rather than fabricated annually." },
    { signal: "Grant compliance is informal", title: "Federal grants lack Uniform Guidance documentation.", body: "Federal grants under Uniform Guidance (2 CFR 200) carry allowable-cost rules, indirect-rate considerations, procurement standards, sub-recipient monitoring, and documentation expectations. Many recipients comply informally &mdash; doing the right thing operationally without maintaining the documentation a Single Audit requires &mdash; and findings, questioned costs, and recovered funds follow. The fix is grant-compliance documentation configured from award through closeout, indirect-cost methodology supported with documentation, and Single Audit preparation once federal expenditures exceed the $750K threshold. The Single Audit itself is performed by an independent auditor; clean preparation makes it a non-event." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Nonprofit accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Fund accounting", title: "Restricted vs unrestricted tracking", body: "Net assets classified per FASB ASC 958, restricted contributions tracked from receipt through release, and the Statement of Activities produced with proper two-category presentation.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Functional expense", title: "Program / Admin / Fundraising allocation", body: "Allocation methodology configured and captured monthly, with the Statement of Functional Expenses produced as part of regular reporting &mdash; not fabricated at year end.", href: "/accounting/chart-of-accounts-setup/", cta: "Chart of accounts setup &rarr;" },
    { num: "03 &middot; Grants", title: "Grant accounting &amp; compliance", body: "Conditional vs. unconditional recognition, federal Uniform Guidance (2 CFR 200) compliance documentation, indirect-cost recovery, and Single Audit preparation when federal spend crosses $750K.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "04 &middot; Audit prep", title: "Audit-ready books", body: "Monthly reconciliation discipline, supporting documentation organized, and audit schedules produced. The audit itself is performed by an independent auditor &mdash; we make it run smoothly.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "05 &middot; Cleanup", title: "Commingled-fund cleanup", body: "Untangle commingled restricted funds, rebuild prior-period functional allocation, restate net-asset classifications to ASC 958, and prepare for an audit transition.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Advisory", title: "Reserves &amp; fundraising advisory", body: "Operating-reserves policy, board financial dashboards, fundraising-cost analysis, program-investment ROI, and multi-year planning &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // SUB-VERTICALS — "Nonprofits come in many shapes." (signal-grid). 6 frozen H3s verbatim.
  // Real-baseline section the construction model lacked; carried verbatim from contract + old body.
  // (H2: Nonprofits come in many shapes. + 6 H3s)
  subverticals: [
    { title: "501(c)(3) public charities", body: "Operating charities funded by individual donors, foundations, and corporate giving &mdash; the reference case for nonprofit accounting: fund accounting, functional expense, donor-database integration, audit prep, and 990 coordination." },
    { title: "Federal grant recipients", body: "Nonprofits receiving direct federal awards or pass-through funds. Uniform Guidance (2 CFR 200) compliance, indirect-cost recovery, time-and-effort certifications, and Single Audit preparation when federal expenditures exceed $750K." },
    { title: "Foundations &amp; grantmakers", body: "Private and corporate foundations making grants to other nonprofits. A different reporting model: grant-payable accounting, minimum distribution requirements (5% for private non-operating foundations), and excise-tax considerations coordinated with your CPA." },
    { title: "Faith-based organizations", body: "Churches, religious orders, and faith-based charities. Some are exempt from Form 990 filing (churches and integrated auxiliaries) but still need GAAP-compliant books for board reporting, donor accountability, and bank or lender requirements." },
    { title: "Education &amp; arts nonprofits", body: "Independent schools, after-school programs, arts organizations, and museums. Tuition or earned-program revenue alongside contributions, often endowment accounting, and program-specific restricted-fund tracking." },
    { title: "Healthcare &amp; social-service nonprofits", body: "Community health centers, social-service agencies, and mental-health nonprofits &mdash; often complex payer mixes (Medicaid, Medicare, sliding-scale, grant-funded), program-specific cost reporting, and state-level audit requirements above federal." },
  ],

  // INTEGRATIONS — nonprofit tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to your nonprofit stack.)
  integrations: [
    "QuickBooks Online Plus &amp; Advanced &mdash; classes for fund accounting",
    "QuickBooks Enterprise Nonprofit &mdash; larger organizations",
    "Bloomerang &mdash; donor management reconciled to the books",
    "DonorPerfect &mdash; donation revenue synced to QuickBooks",
    "Salesforce NPSP &mdash; constituent and gift data",
    "Classy &amp; Givebutter &mdash; campaign and event revenue",
    "Bill.com &mdash; accounts payable with grant and program coding",
    "Gusto &mdash; staff and contractor payroll allocable across programs",
    "Ramp &amp; Expensify &mdash; program and grant expense capture",
  ],
  integrationsNote: "Using a different donor-management or grant platform? If it has a QuickBooks integration or exports clean data, we can build the workflow around it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // COMPARISON — for-profit bookkeeping vs nonprofit fund accounting (vs-scroll + vs-table, T3 no-collapse).
  // Real-baseline comparison-table carried verbatim; supports the definition prose.
  // (H2: For-profit bookkeeping vs. nonprofit fund accounting.)
  comparison: [
    { label: "Framework", forprofit: "FASB ASC 205, 220 (general for-profit GAAP)", nonprofit: "<strong>FASB ASC 958</strong> (Not-for-Profit Entities)" },
    { label: "Equity / Net assets", forprofit: "Equity, owner&rsquo;s capital, retained earnings", nonprofit: "<strong>Net assets without donor restrictions</strong> and <strong>net assets with donor restrictions</strong>" },
    { label: "Revenue / Support", forprofit: "Sales revenue from customers", nonprofit: "<strong>Contributions, grants, program service revenue, in-kind contributions</strong>, each tracked separately" },
    { label: "Statement of operations", forprofit: "Income Statement / P&amp;L", nonprofit: "<strong>Statement of Activities</strong> with two-column classification (without / with donor restrictions)" },
    { label: "Expense reporting", forprofit: "By natural category only (rent, salaries, supplies)", nonprofit: "<strong>Statement of Functional Expenses</strong> required &mdash; allocated across Program / Management &amp; General / Fundraising" },
    { label: "Annual filing", forprofit: "Form 1120, 1120-S, or 1065 (filed by CPA)", nonprofit: "<strong>Form 990, 990-EZ, or 990-N</strong> (filed by CPA or EA; public record)" },
    { label: "Audit threshold", forprofit: "Generally not required unless a bank or investor mandates it", nonprofit: "<strong>State-specific thresholds (typically $500K&ndash;$2M revenue)</strong>; Single Audit at $750K federal expenditures" },
  ],
  comparisonNote: "If a generic for-profit bookkeeper is running your nonprofit&rsquo;s books, the statements you produce today probably won&rsquo;t hold up to an audit, a sophisticated donor, or a strong Form 990. Specialist nonprofit bookkeeping is the difference between hoping the audit goes well and knowing it will.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From commingled funds to audit-ready financials. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your size, funding mix, grant complexity, audit requirement, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "Where needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to untangle commingled restricted funds and restate prior periods, plus the right <a href=\"/accounting/chart-of-accounts-setup/\">chart-of-accounts setup</a> for fund accounting and functional allocation." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; reporting", body: "Books reconciled monthly with restricted-fund tracking, functional-expense allocation, grant-compliance documentation, and audit-ready supporting records maintained." },
    { num: "Phase 4", name: "Reporting &amp; audit/990 coordination", body: "A monthly board package with the Statement of Activities and Statement of Functional Expenses, plus clean coordination with your CPA on Form 990 and the independent auditor on the annual audit, and <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on reserves and program investment." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Preserves the baseline
  // mission-impact prose (no gutting).
  // (H2: Audit-ready books are the start. Mission impact is the point.)
  advisoryBody: [
    "Once fund accounting is correct, functional allocation is real, and grant compliance is documented, the question changes from &ldquo;will the audit go well?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Which programs to expand, where the operating reserves should sit, how to model fundraising ROI, when to add staff, whether to pursue that new federal grant &mdash; the decisions that actually move a nonprofit toward greater mission impact.",
    "That&rsquo;s where <strong>nonprofit advisory</strong> comes in: a fractional CFO who knows your fund structure turning the numbers into reserves policy, fundraising strategy, board dashboards, and multi-year planning. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; for both the organization and its mission &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — ALL 7 contract Q/A VERBATIM (questions verbatim, answers preserved; append-only, NO dedup).
  // visible faq__list = FAQPage schema (same array).
  // (H2: Nonprofit accounting questions.)
  faq: [
    { q: "How is nonprofit accounting different from for-profit accounting?", a: "Nonprofit accounting operates under a different framework &mdash; FASB ASC 958 &mdash; and answers a fundamentally different question. For-profit accounting asks &ldquo;did the business make money for its owners?&rdquo; and produces an Income Statement and Statement of Equity. Nonprofit accounting asks &ldquo;did the organization steward restricted resources correctly and how much did mission delivery actually cost?&rdquo; and produces a Statement of Activities (instead of an Income Statement) and a Statement of Functional Expenses (showing every dollar allocated across Program, Management &amp; General, and Fundraising). Net assets replace equity. Contributions and grants replace sales. Restricted vs unrestricted classification replaces simple revenue recognition. Functional expense allocation is required, not optional. The result: a generic for-profit bookkeeper running nonprofit books produces statements that don&rsquo;t match what auditors, boards, donors, and Form 990 all need." },
    { q: "What is fund accounting and do you handle it?", a: "Fund accounting is the framework nonprofits use to track resources separately based on their intended purpose. Under FASB ASC 958 (effective 2018, replacing the older three-category SFAS 117 model), net assets are classified into two categories: without donor restrictions (the nonprofit can use them for any mission-related purpose) and with donor restrictions (donor specified a purpose, time, or both). Within with-donor-restrictions, further internal tracking is needed for each restricted purpose &mdash; building fund, scholarship fund, specific program fund, endowment principal, and so on. We configure QuickBooks (typically <a href=\"/quickbooks/online/\">QuickBooks Online</a> Plus or Advanced, or <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> for larger organizations) with the chart of accounts and <a href=\"/quickbooks/online/features/classes/\">Class structure</a> that supports proper fund accounting, track restricted contributions from receipt through release as purposes are satisfied, and produce the Statement of Activities with the two-category presentation that GAAP requires." },
    { q: "Do you handle grant accounting and federal grants under Uniform Guidance?", a: "Yes. Grant accounting requires distinguishing between conditional and unconditional contributions (different recognition timing), tracking restricted purposes and time periods, and for federal awards complying with the Uniform Guidance (2 CFR 200) cost principles and reporting requirements. Federal grants in particular have specific allowable cost rules, indirect cost rate considerations (the de minimis 10% indirect rate or a negotiated rate), procurement standards, sub-recipient monitoring, and Single Audit thresholds (currently $750,000 in federal expenditures triggering a Single Audit). We handle the operational grant accounting and compliance documentation; the Single Audit itself, when required, is performed by a qualified independent auditor &mdash; we prepare the books to be audit-ready and coordinate with your auditor on the engagement." },
    { q: "What is functional expense allocation and why does it matter?", a: "Functional expense allocation is the requirement that every expense incurred by a nonprofit be classified across three functional categories: Program services (direct mission-delivery costs), Management &amp; General (administrative overhead), and Fundraising (development and donor cultivation costs). The Statement of Functional Expenses presents this allocation and is required by GAAP for all nonprofits. The allocation matters operationally because boards, donors, watchdog organizations (Charity Navigator, GuideStar/Candid), and Form 990 all use Program % as a key indicator of nonprofit health &mdash; most donors look for 70%+ of expenses going to Program. Allocation methods include direct identification (a program staffer&rsquo;s <a href=\"/accounting/payroll-management/\">salary</a> goes 100% to Program), time studies (admin staff who split time across functions), and reasonable allocation bases for shared costs like rent and utilities. We configure the allocation methodology, capture the allocation monthly, and produce the Statement of Functional Expenses as part of the regular reporting package." },
    { q: "Do you file Form 990?", a: "No. Form 990 is the annual information return filed by tax-exempt organizations with the IRS, and its filing requires CPA or EA credentials. We don&rsquo;t file Form 990 ourselves &mdash; we maintain the books in a way that supports clean Form 990 preparation by the organization&rsquo;s CPA or EA. Our role: produce audit-ready and 990-ready financials, organize supporting documentation in the structure the 990 preparer needs, answer operational questions during 990 preparation, and coordinate cleanly with the CPA so the filing happens on schedule (May 15 for calendar-year filers, with extensions to November 15 available). This separation protects the organization (regulated work performed by appropriately credentialed professionals) and us (we don&rsquo;t drift into work outside our competence)." },
    { q: "Do you handle in-kind contributions?", a: "Yes. In-kind contributions &mdash; donated goods, donated services, or donated use of facilities &mdash; must be recognized at fair value when received under GAAP, with corresponding expense or asset recognition. Donated services are recognized only if they create or enhance non-financial assets (like a contractor donating skilled construction work) or if they require specialized skills and would have been purchased if not donated (like a CPA donating audit prep work). Routine volunteer services are not recognized for GAAP purposes even though they&rsquo;re tracked for management purposes. We configure in-kind contribution accounts, work with the organization to value donations correctly, and ensure the in-kind activity flows correctly to both the Statement of Activities and the Statement of Functional Expenses (since in-kind expenses also need functional allocation)." },
    { q: "Are our books audit-ready?", a: "Most nonprofits over a state-specific threshold (typically between $500,000 and $2 million in revenue, depending on the state) are required to obtain an annual financial audit. Federal grant recipients spending more than $750,000 in federal funds require a Single Audit under Uniform Guidance. Audit-ready books mean: every account reconciled monthly, all journal entries supported by documentation, fund-level and functional-expense breakdowns produced from the books rather than spreadsheets, fixed-asset register maintained, grant compliance documented, and all required GAAP statements producible on demand. We maintain books to audit-ready standards throughout the year (not just at year-end), coordinate with the independent auditor on the engagement, and provide the schedules and supporting work the auditor needs. The audit opinion itself is rendered by the auditor; our role is making the audit run smoothly and efficiently." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Fund accounting, functional expense, grant compliance, audit prep &middot; Form 990 filing, IRS representation, and audit opinions coordinated with your CPA, EA, or independent auditor" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Commingled-fund cleanup", body: "Untangle restricted funds, restate net-asset classifications to ASC 958, and prepare for a first audit &mdash; then reconcile to an audit-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Chart of accounts setup", body: "Fund-accounting structure, restricted-fund tracking, and the functional-expense allocation methodology built in from the start.", href: "/accounting/chart-of-accounts-setup/", cta: "Explore CoA &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Reserves policy, fundraising ROI, board dashboards, and multi-year planning for nonprofit leadership.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; construction, real estate, restaurant, healthcare, legal, and more.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/nonprofit/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/nonprofit-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-nonprofit-definition","#acctind-nonprofit-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Nonprofit","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Nonprofit Accounting & Bookkeeping","serviceType":"Specialist accounting and bookkeeping for tax-exempt organizations","description":"Fund accounting under FASB ASC 958, restricted vs. unrestricted net-asset tracking, functional-expense allocation across Program / Management & General / Fundraising, grant accounting and Uniform Guidance (2 CFR 200) compliance, audit-ready books, and Form 990 coordination for U.S. nonprofits, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file Form 990 or perform audits — maintains the books and workpapers and coordinates with the client's CPA, EA, or independent auditor.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. 501(c)(3) public charities, private foundations, and tax-exempt organizations"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Nonprofit accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What nonprofit accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Nonprofit accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
