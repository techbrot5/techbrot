/* /accounting/industries/agency/ — LIVE baseline industry page migrated to cobalt
 * t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-agency.txt (42 headings, 7 FAQ) is the ONLY authority for
 * headings + FAQ. Old HTML accounting/industries/agency/index.html read for BODY
 * PROSE only. REFERENCE pattern: src/accounting/industries/construction.njk +
 * .11tydata.js (the exact t-mofu accounting-industry shape + full schema) and
 * src/quickbooks/online.njk. Content angle reused from the NY analog
 * (src/find-an-accountant/new-york/industries/consulting.njk) but NATIONAL scope —
 * NY-specific tax (UBT / nexus / NY taxable services) dropped; agency-specific
 * substance (ASC 606 gross-vs-net, pass-through media, AGI/AGI-per-FTE, retainer
 * recognition, freelancer/1099, multi-currency) carried from the real baseline body.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * T2 headings frozen — every contract H1/H2/H3 appears verbatim at its exact level;
 * entities preserved. Footer-chrome H2s (The monthly brief / Accounting / QuickBooks /
 * Company / Network) are NOT rendered here (base chrome owns them / "The monthly brief."
 * dropped per protocol). The 5 quick-answer questions render as NON-heading
 * ai-summary__question (baseline captured them as <dt>, NOT <hN>). T3 no collapse —
 * the gross-vs-net comparison renders as vs-scroll + vs-table.
 *
 * FAQ (T4): 7 contract Q/A render verbatim/flat as faq__list AND feed FAQPage from the
 * SAME array — single source of truth, NO dedup. Enrichment append-only; original answers
 * preserved word-for-word. The baseline body also carried no extra in-body Q/A beyond the
 * 7 FAQ; the gross-vs-net body prose (comparison + advisory) is preserved as section
 * content (no gutting).
 *
 * SCHEMA: WebPage, BreadcrumbList, Service, ItemList (deliverables), FAQPage (all 7
 * verbatim, NO dedup), QAPage (from the 5-question ai-summary) — modelled on
 * construction.11tydata.js. QAPage and ItemList are NOT dropped.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc. (or any agency-management/payment platform); bookkeeping/
 * ProAdvisor scope — does NOT file income taxes, coordinates with the client's CPA/EA.
 * No <strong> in the dark hero subheading. CTA labels: canonical lexicon only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&times;/g,"×").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Agency accounting, plainly." (from baseline TL;DR body, national scope).
  definition: [
    "Agencies break generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> at the most fundamental layer: <strong>what counts as revenue</strong>. Under <strong>ASC 606&rsquo;s principal-vs-agent analysis</strong>, an agency buying media or production for a client typically operates as an <em>agent</em> &mdash; revenue is the fee earned (net), not the gross amount flowing through. Reporting gross overstates revenue by 5&ndash;10&times; for media-heavy agencies and breaks every benchmark. <strong>Retainer revenue</strong> must recognize ratably over the service period; annual retainers paid upfront create deferred-revenue liabilities. <strong>Pass-through costs</strong> (media spend, production, reimbursables) flow through dedicated accounts, not revenue and COGS.",
    "<strong>Agency gross income (AGI)</strong> &mdash; revenue net of pass-throughs &mdash; is the industry-standard size and growth metric, with <strong>AGI per FTE</strong> ($150K&ndash;$300K healthy range) measuring productivity. <strong>Freelancer management</strong> at agency scale ($500K&ndash;$5M+ annually) needs W-9 discipline, project allocation, and clean 1099-NEC generation, and <strong>multi-currency</strong> matters for international clients and freelancers. <strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who perform the ASC 606 analysis at engagement onboarding, configure the chart of accounts for agency economics in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, integrate your project-management and time-tracking stack, and produce monthly packages with AGI, utilization, realization, and project P&amp;L. For agencies ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into pricing, hiring, and acquisition-readiness decisions. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Agency accounting, in five questions.)
  aiSummary: [
    { q: "Why is agency accounting different?", a: "Three structural issues: <strong>ASC 606 gross-vs-net</strong> revenue presentation (most agencies should report net of pass-throughs), <strong>retainer revenue recognition</strong> (ratable over the service period), and <strong>project profitability</strong> by client and engagement with separation between billable, reimbursable, and pass-through costs." },
    { q: "What is gross-vs-net revenue for agencies?", a: "Under <strong>ASC 606 principal-vs-agent analysis</strong>, agencies that don&rsquo;t control media or production inventory before delivery typically present revenue <strong>net</strong> (the fee earned), not gross (the full pass-through amount). Reporting gross overstates revenue 5&ndash;10&times; for media-heavy agencies and breaks every benchmark." },
    { q: "What is agency gross income (AGI)?", a: "Revenue net of pass-through costs &mdash; the agency&rsquo;s actual economic contribution. The <strong>industry-standard size metric</strong> used by Adweek, AdAge, 4A&rsquo;s, RECMA, and M&amp;A advisors. <strong>AGI per FTE</strong> ($150K&ndash;$300K healthy range) is the primary productivity metric." },
    { q: "Do you handle freelancers, 1099s, and multi-currency?", a: "Yes. Freelancer management at agency scale ($500K&ndash;$5M+) with W-9 discipline, project allocation, and 1099-NEC generation. <strong>Multi-currency</strong> for international clients (EUR, GBP, CAD) and freelancers with FX gain/loss recognition. Pair QuickBooks with Wise or Payoneer for actual international payments." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by AGI size, client count, project volume, media-spend pass-through volume, freelancer scale, and multi-currency complexity. No hourly billing. Most agency engagements include an initial cleanup to restate gross-vs-net. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places agencies lose the numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places agencies lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Gross-vs-net is wrong", title: "Pass-through media booked as revenue.", body: "An agency buying $1M of media and billing $1.15M reports $1.15M of revenue and $1M of COGS. ASC 606&rsquo;s principal-vs-agent test usually says otherwise &mdash; the agency operates as an agent (no inventory risk, limited pricing discretion, doesn&rsquo;t control the media before delivery), so revenue is the $150K fee, not the $1.15M gross. The fix is the ASC 606 analysis at onboarding (engagement by engagement) and a chart of accounts with pass-through accounts separate from revenue, plus restated prior periods if migrating gross-to-net. Most agencies should present net; the rare exceptions involve true principal positioning." },
    { signal: "Project margin is invisible", title: "No client-level or engagement-level P&amp;L.", body: "Generic bookkeeping shows total agency revenue and total expenses with no separation by client or project. You can&rsquo;t see which clients are profitable, which projects bled labor, which retainers are underwater &mdash; so pricing, staffing, and client-firing decisions run on intuition. The fix is Class or Customer tracking for every client and project, time tracking integrated to QuickBooks so labor cost allocates correctly, and project-level P&amp;L produced monthly with utilization, realization, and gross margin by engagement. Most agencies discover on first honest reporting that one or two large clients are losing money." },
    { signal: "Freelancer &amp; FX complexity is unmanaged", title: "1099 sprawl and currency exposure.", body: "Agencies routinely run $500K&ndash;$5M+ annually in freelancer spend with no W-9 discipline, no project coding, and a January 1099 scramble. International clients generate EUR/GBP/CAD receivables booked at random rates; international freelancers paid in local currency create untracked FX exposure. The fix is a W-9 library on every active freelancer (W-8 for international), Bill.com or Ramp configured with project codes, multi-currency QuickBooks with FX gain/loss recognized monthly, and year-end 1099-NEC generation as a non-event. Clean freelancer management removes one of the easiest places to create IRS exposure unintentionally." },
  ],

  // SUB-VERTICALS — "Agencies in every flavor." (signal-grid → grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Agencies in every flavor. + 6 H3s)
  subverticals: [
    { title: "Marketing &amp; full-service agencies", body: "Integrated agencies running strategy, creative, and media. High pass-through (media spend dominant), AGI typically 10&ndash;20% of gross billings, AGI per FTE the primary productivity metric. The reference case for net revenue presentation." },
    { title: "Creative &amp; brand agencies", body: "Branding, design, identity, content production. Lower pass-through (production costs only, not media), AGI typically 70&ndash;90% of revenue. Project-based work with strong margin requires accurate WIP and project-P&amp;L tracking." },
    { title: "PR &amp; communications", body: "Public relations, corporate communications, executive positioning. Retainer-heavy revenue, minimal pass-through, utilization-driven profitability. Strong overlap with our <a href=\"/accounting/industries/professional-services/\">professional services</a> framework, with agency-specific KPI emphasis." },
    { title: "Digital &amp; performance agencies", body: "Paid media, SEO, programmatic, growth marketing. Heavy media-spend pass-through (clearly net presentation), often with performance-fee elements (revenue tied to client results) requiring careful ASC 606 variable-consideration analysis." },
    { title: "Specialty &amp; boutique agencies", body: "Influencer marketing, social-first, B2B demand-gen, account-based marketing, PR boutiques, video production studios. Distinctive workflows, often founder-led and growing toward acquisition &mdash; so the accounting needs to support exit-readiness from early." },
    { title: "Agency networks &amp; holding companies", body: "Multi-agency networks, holding-company structures, M&amp;A roll-ups. Intercompany elimination, sister-agency referrals and revenue-share, consolidated reporting plus brand-level P&amp;L. Typically requires <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> or a dedicated agency-management platform." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Agency accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Revenue", title: "ASC 606 gross-vs-net analysis", body: "Principal-vs-agent analysis at engagement onboarding, retainer recognition over the service period, and pass-through accounts configured correctly &mdash; so revenue is what you actually earn.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02 &middot; Metrics", title: "AGI, AGI per FTE, labor multiplier", body: "Agency gross income reported monthly as the primary size metric, AGI per FTE ($150K&ndash;$300K healthy range), the labor multiplier, and gross margin by service line.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "03 &middot; Project P&amp;L", title: "Client &amp; project profitability", body: "Time tracking integrated to QuickBooks, project-level P&amp;L by engagement and client, utilization and realization by team member, and retainer-vs-overage reporting.", href: "/accounting/chart-of-accounts-setup/", cta: "Chart of accounts setup &rarr;" },
    { num: "04 &middot; Freelancers", title: "1099 &amp; freelancer management", body: "A W-9 library, project-coded freelancer payments through Bill.com or Ramp, and year-end 1099-NEC generation as a non-event &mdash; not a January scramble.", href: "/quickbooks/payroll/year-end/", cta: "Year-end payroll &rarr;" },
    { num: "05 &middot; Multi-currency", title: "FX &amp; international clients", body: "Multi-currency QuickBooks for international client receivables and freelancer payables, FX gain/loss recognized monthly, and Wise or Payoneer integration for actual payments.", href: "/accounting/bookkeeping/", cta: "Bookkeeping &rarr;" },
    { num: "06 &middot; Advisory", title: "Agency growth advisory", body: "Pricing strategy, retainer-vs-project mix optimization, account-team staffing models, M&amp;A readiness, and valuation preparation &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],

  // INTEGRATIONS — agency stack reconciled with QuickBooks (checks-list).
  // (H2: Connected to your agency stack.)
  integrations: [
    "Harvest &amp; Toggl Track &mdash; time tracking reconciled to billable utilization",
    "Productive, Mavenlink &amp; Kantata &mdash; PSA platforms mapped to project P&amp;L",
    "Float &amp; Forecast &mdash; resourcing and capacity planning",
    "Asana, Monday &amp; ClickUp &mdash; project management synced to engagements",
    "HubSpot &amp; Salesforce &mdash; CRM and pipeline mapped to client and service line",
    "Bill.com &amp; Ramp &mdash; project-coded freelancer and vendor payments",
    "Wise &amp; Payoneer &mdash; international client and freelancer payments with cleaner FX",
  ],
  integrationsNote: "Different stack? If it has a QuickBooks integration or exports clean data, we work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From gross-inflated books to AGI you can defend. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your agency type, AGI size, pass-through mix, retainer-vs-project ratio, freelancer scale, multi-currency exposure, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "ASC 606 analysis &amp; cleanup", body: "Principal-vs-agent analysis for each active engagement type, a <a href=\"/quickbooks/file-review/?intent=file-review\">file review</a> and cleanup to restate prior periods if migrating gross-to-net, plus the right <a href=\"/accounting/chart-of-accounts-setup/\">chart-of-accounts setup</a> for agency economics." },
    { num: "Phase 3", name: "Monthly reconciliation &amp; reporting", body: "Books reconciled monthly with retainer recognition, pass-through accounting, project P&amp;L, freelancer allocation, multi-currency FX recognition, and the full agency KPI set." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with AGI, AGI per FTE, labor multiplier, client P&amp;L, and project margin, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on pricing, hiring, retainer-mix optimization, and M&amp;A readiness." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose (no gutting).
  // (H2: Real AGI is the start. The next acquisition offer is the point.)
  advisoryBody: [
    "Once gross-vs-net is right, retainer recognition is clean, project margin is visible, and AGI per FTE is benchmarkable, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; Which clients to fire, which service lines to expand, when to add senior talent vs. juniors, how to structure retainers to improve utilization, whether to bolt on a specialty agency, when an acquisition offer is fair &mdash; the decisions that actually move an agency.",
    "That&rsquo;s where <strong>agency advisory</strong> comes in: a fractional CFO who knows your AGI and unit economics turning them into pricing strategy, team-structure decisions, M&amp;A readiness, and valuation modeling. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the multiple at exit &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "ASC 606 principal-vs-agent (operational), pass-throughs, retainer recognition, AGI, project P&amp;L, freelancer management, multi-currency &middot; income-tax filing, IRS representation, and international tax opinions coordinated with your CPA/EA/attorney" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. or any agency-management or payment platform &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Gross-to-net cleanup", body: "Restate prior periods from gross to net presentation, rebuild pass-through accounts, and reconstruct AGI history.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Professional services accounting", body: "For consulting practices, law firms, and accounting firms with similar time-and-margin economics but different revenue structures.", href: "/accounting/industries/professional-services/", cta: "Professional services &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Pricing strategy, retainer-mix optimization, M&amp;A readiness, and valuation preparation for agency owners.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim; answers preserved word-for-word).
  // visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: Agency accounting questions.)
  faq: [
    { q: "Why is agency accounting different from regular bookkeeping?", a: "Agencies layer multiple complications onto generic service-business bookkeeping. The biggest single issue is the gross-vs-net revenue question for pass-through media spend, third-party production costs, and reimbursable expenses &mdash; agencies that buy $1M of media for a client typically present revenue net of the media ($150K fee), not gross ($1.15M), under ASC 606&rsquo;s principal-vs-agent analysis. Most generic bookkeepers get this wrong, distorting revenue by an order of magnitude. Beyond gross-vs-net, agencies need retainer revenue recognized ratably over the service period, <a href=\"/accounting/job-costing/\">project profitability</a> tracked by engagement and client with separation between billable hours and reimbursable costs, agency gross income (revenue net of pass-throughs) calculated as the primary size and growth metric, and freelancer and 1099 contractor management at agency scale. Multi-currency exposure for international clients and freelancers adds another layer. Generic bookkeeping handles maybe two of these; agency-specialist accounting handles all of them." },
    { q: "What is the gross-vs-net revenue question and which applies to my agency?", a: "ASC 606 requires entities to determine whether they&rsquo;re the principal (controlling the goods or services before transferring them to the customer) or the agent (arranging for another party to provide them). Principals report revenue gross (the full amount billed). Agents report revenue net (only the fee or commission earned). For agencies, the determining factors include: does the agency take inventory risk on media or production purchases (typically no), does the agency have discretion in pricing (typically limited), does the agency control the media or service before delivery (typically no, the inventory or service belongs to the supplier until placed). The conclusion for most agencies on pass-through media spend, third-party production costs, and reimbursable expenses: net presentation. The agency&rsquo;s revenue is the fee or commission, not the gross spend. Getting this wrong overstates revenue by 5-10x for media-heavy agencies, breaks every margin and benchmark calculation, and creates real issues during fundraising or M&amp;A due diligence. We perform the ASC 606 principal-vs-agent analysis at engagement onboarding and configure the books to match." },
    { q: "Do you handle retainer revenue recognition correctly?", a: "Yes. Monthly retainers are recognized ratably over the service period &mdash; cash collected this month for this month&rsquo;s services becomes revenue this month. Annual retainers paid upfront (common for high-trust client relationships) create deferred revenue liabilities recognized monthly over the contract term, similar to SaaS subscription accounting. Project-based engagements within retainer structures require careful tracking of which work is covered by retainer fee versus additional billable hours. We configure retainer accounting in QuickBooks alongside the agency&rsquo;s project management or time-tracking system (Harvest, Productive, Mavenlink, Float, Forecast), produce monthly retainer-vs-overage reporting, and ensure retainer revenue is recognized correctly under ASC 606 for any agency producing GAAP financials (required for fundraising, audit, or acquisition)." },
    { q: "How do you handle pass-through media spend and reimbursable costs?", a: "Pass-through costs (media spend, third-party production, reimbursable expenses) are tracked separately from agency revenue in the chart of accounts. When the agency pays the supplier and bills the client, both sides flow through pass-through accounts rather than revenue and COGS &mdash; the agency neither earns revenue on the pass-through nor incurs an expense from it (assuming net presentation under ASC 606). What the agency earns is the markup, agency fee, or commission, which is the only piece that hits revenue. This structure surfaces the real economics: agency gross income (revenue net of pass-throughs), gross margin on agency services, and the labor multiplier (revenue divided by direct labor cost). For agencies that operate as principals on some engagements and agents on others, the chart of accounts handles both correctly with clear separation." },
    { q: "What is agency gross income (AGI) and why does it matter?", a: "Agency gross income (AGI) is revenue net of pass-through costs &mdash; the agency&rsquo;s actual economic contribution. For a media-heavy agency, AGI might be 10-20% of gross billings; for a pure consulting or strategy agency with no pass-throughs, AGI equals revenue. AGI is the industry-standard size and growth metric used by industry research (Adweek, AdAge, RECMA, COMvergence), benchmarking services (Society of Digital Agencies, 4A&rsquo;s, PRSA), M&amp;A advisors, and investors. AGI per FTE (full-time equivalent employee) is the primary productivity metric &mdash; healthy agencies operate in the $150K-$300K AGI per FTE range depending on agency type and seniority mix. Reporting on gross billings inflates apparent size and makes the agency look less productive than it actually is; reporting on AGI shows the real economic engine. We configure the books so AGI is the headline number monthly, alongside gross billings as a secondary metric." },
    { q: "How do you handle freelancers, contractors, and 1099 management?", a: "Agencies routinely manage $500K to $5M+ annually in freelancer and contractor spend across designers, copywriters, developers, photographers, videographers, voiceover talent, and specialty consultants. Done right: every freelancer onboarded with a current W-9 (or W-8 for international contractors), project-coded so freelancer spend allocates to client and engagement P&amp;L, paid through Bill.com, Ramp, or direct payment with proper reconciliation, and 1099-NEC issued at year-end to every U.S. contractor paid $600 or more. Done wrong (and we see this constantly): freelancer payments scattered across credit cards, personal payment apps, and direct deposits without project coding, missing W-9s, and a January scramble to issue 1099s. We configure the freelancer payment workflow, maintain the W-9 library, allocate spend to projects, and coordinate with payroll provider for 1099-NEC generation at year-end." },
    { q: "Can you handle multi-currency for international client and freelancer relationships?", a: "Yes. International clients paying in EUR, GBP, CAD, AUD, or other currencies create multi-currency receivables; international freelancers paid in local currency create multi-currency payables. We configure QuickBooks for multi-currency (available in QuickBooks Online Essentials and above, and QuickBooks Desktop), set up the relevant foreign currency accounts, post invoices and bills in the original transaction currency, and recognize FX gain/loss as exchange rates move between transaction date and settlement date. For agencies with significant international exposure, we recommend pairing QuickBooks with Wise (formerly TransferWise), Payoneer, or Mercury for actual international payments &mdash; these handle FX conversion with much better rates than traditional bank wires and integrate cleanly with QuickBooks. Coordination with your CPA on any international tax treatment (transfer pricing for sister entities, foreign tax credits, sales tax in jurisdictions like UK VAT) remains your CPA&rsquo;s scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/agency/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/agency-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-agency-definition","#acctind-agency-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Agency","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Agency Accounting","serviceType":"Specialist accounting and bookkeeping for marketing, creative, PR, and digital agencies","description":"Specialist accounting for U.S. marketing, creative, PR, and digital agencies — ASC 606 gross-vs-net revenue presentation, pass-through media spend, retainer recognition, reimbursable cost handling, project profitability, agency gross income (AGI), AGI per FTE, labor multiplier, utilization/realization, freelancer management, multi-currency, and integration with agency operations platforms. Delivered fixed-fee in QuickBooks by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes, provide IRS representation, audit, or assurance — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. marketing, creative, PR, digital, and integrated communications agencies"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Agency accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What agency accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Agency accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
