/* /find-an-accountant/florida/ — t-location PILLAR. MIGRATION-PROTOCOL: content-to-goal,
 * visual-floor. Template clone of the proven NY pillar (new-york.njk + .11tydata.js).
 * Sources: FROZEN EQUITY CONTRACT (contract-fl-pillar.txt) — the ONLY authority for the
 * 72 headings + 17 FAQ — and the live baseline old HTML (find-an-accountant/florida/
 * index.html, full body read) for body prose/section content.
 *
 * NO-CHILDREN RULE (#1, CRITICAL): Florida has NO child pages built. The ONLY Florida URL
 * is this pillar. Every coverage/cities/industries/services/ecosystem section renders as
 * CONTENT (prose / lists / buyer-cards) but NEVER links to a non-existent Florida child.
 * Old-HTML "[city]/[industry]/[service] →" links become PLAIN TEXT, or route to
 * /contact/?intent=florida. Internal hrefs are restricted to: #fl-* anchors on this page,
 * /contact/, /quickbooks/file-review/, and the firm's REAL built global pages
 * (/accounting/*, /quickbooks/*, /partners/, /find-an-accountant/, /find-an-accountant/
 * new-york/). /accounting/industries/ and /vs/* are NOT built — NOT linked.
 *
 * HONESTY (R5 STANDING): the old "Recent Florida results." figures are kept but EXPLICITLY
 * marked representative/illustrative — no real-client assertion. Reviews are ONLY the 2 real
 * Clutch reviews (Heidi Schubert, Barbara Best), verbatim; NO AggregateRating. No founder/
 * personal name in visible content; David Westgate appears only as named operator/reviewer
 * (standing-rule exception) and in reviewedBy schema @id. Independent firm — does NOT file
 * Florida or federal returns; coordinates with the client's FL CPA. NEUTRAL motif
 * (motif-align-full.svg), NOT the NY contour. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: TechBrot in Florida, summarized.)
  // De-linked from the baseline TL;DR (child links removed; key terms stay bold).
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Florida bookkeeping, QuickBooks setup, cleanup, migration, Florida sales tax compliance, and fractional CFO engagements to Florida businesses across <strong>all 67 counties</strong> &mdash; from Miami, Fort Lauderdale, and Orlando to Tampa, Jacksonville, and the Gulf Coast. Florida has <strong>no state personal income tax</strong> (only a 5.5% corporate income tax on C-corps), but it <strong>taxes many services that other states exempt</strong>, layers a <strong>county discretionary surtax</strong> on the 6% state sales tax, and as of <strong>October 2025 repealed its commercial-rent tax</strong> &mdash; and the economy concentrates in <strong>hospitality and restaurants, healthcare and dental, real estate, construction, and home services</strong>, making the Florida operational context substantively different from every other state. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot</strong> for most engagements; <strong>curated local Florida operators</strong> where metro presence, hospitality volume, or healthcare-practice depth matters. Honest scope: we do not file Florida or federal returns &mdash; we coordinate with your CPA or EA. Independent ProAdvisor firm; not affiliated with Intuit Inc.",

  // PROADVISOR CREDENTIAL STRIP. (H2: Certified QuickBooks ProAdvisor credentials)
  credLede: "Every TechBrot operator holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. Verifiable on Intuit&rsquo;s public ProAdvisor directory.",
  credBadges: [
    { label: "Online (L2)", name: "QuickBooks Online ProAdvisor (Level 2)" },
    { label: "Desktop", name: "QuickBooks Desktop ProAdvisor" },
    { label: "Enterprise", name: "QuickBooks Enterprise ProAdvisor" },
    { label: "Payroll", name: "QuickBooks Payroll ProAdvisor" },
  ],
  // TRUST ROW — Clutch 5.0/2 is REAL; the rest are factual, not metrics.
  trustRow: [
    { value: "5.0", label: "on Clutch &middot; 2 verified reviews" },
    { value: "4&times;", label: "QuickBooks ProAdvisor certifications &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "67", label: "Florida counties served &mdash; Miami-Dade to the Panhandle" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "67", label: "Counties &mdash; from Miami-Dade and Broward in the southeast to the Panhandle, each layering its own discretionary sales surtax on top of the state rate" },
    { figure: "$0", label: "State personal income tax &mdash; Florida levies none, a major draw for relocating businesses and owners; the trade-off is heavier reliance on sales tax" },
    { figure: "6%", label: "State sales tax rate, plus county discretionary surtax (0.5&ndash;2.5%) for a combined max around 8.5% &mdash; destination-based on where the customer receives the item" },
    { figure: "5.5%", label: "Corporate income tax &mdash; applies to C-corporations only (with a $50,000 exemption); S-corps, LLCs, and partnerships owe no Florida income tax" },
    { figure: "Oct 2025", label: "Commercial-rent (business rent) sales tax repealed &mdash; Florida was the only state to tax commercial leases; landlords and tenants no longer collect or remit it" },
    { figure: "$100K", label: "Sales-tax economic nexus threshold &mdash; taxable Florida sales in the prior calendar year; sales-only (no transaction count), marketplace sales excluded" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Florida, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Florida businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, Florida sales tax compliance, and fractional CFO engagements to Florida businesses across all 67 counties.</strong> Direct service by TechBrot&rsquo;s lead practice; trusted partner practices in Florida where metro presence, hospitality volume, or healthcare-practice depth matters. Coverage spans Miami, Fort Lauderdale, Orlando, Tampa, Jacksonville, St. Petersburg, and the entire state." },
    { q: "Does Florida have a state income tax?", a: "<strong>Florida has no state personal income tax</strong> &mdash; one of the main reasons businesses and owners relocate there. It does levy a <strong>5.5% corporate income tax on C-corporations</strong> (with a $50,000 exemption); <strong>S-corporations, LLCs, and partnerships owe no Florida income tax</strong>. There is no franchise/margin tax. The trade-off for no personal income tax is a heavier reliance on sales tax, including on services many other states exempt." },
    { q: "How does Florida sales tax work, and does it apply to services?", a: "Florida charges a <strong>6% state sales tax</strong> plus a <strong>county discretionary surtax (0.5%&ndash;2.5%)</strong>, for a combined rate up to roughly 8.5%. It is <strong>destination-based</strong> &mdash; the rate follows where the customer receives the item. Florida is notable for <strong>taxing services other states exempt</strong> (commercial cleaning, pest control, certain repairs, security, and more), and the county surtax often applies only to the first $5,000 of a single taxable item. QuickBooks must apply the correct combined rate by county and flag taxable services, or the file will under-collect." },
    { q: "Did Florida repeal the commercial-rent (business rent) tax?", a: "Yes. <strong>Effective October 1, 2025, Florida repealed its sales tax on commercial real-property leases</strong> (the &ldquo;business rent tax&rdquo;) &mdash; Florida had been the only state to impose it. Landlords and tenants no longer collect or remit sales tax on commercial rent for periods on or after that date; rent for periods before October 2025 remains taxable. There is <strong>no automatic refund</strong> &mdash; overpayments must be claimed through the Florida Department of Revenue. QuickBooks and lease invoicing should be updated to stop charging the tax." },
    { q: "How does a Florida engagement start, and does TechBrot file returns?", a: "Engagements start with a <strong>free 30-minute discovery call</strong>; a <strong>written fixed-fee scope is delivered within 3 business days</strong>. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Florida or federal tax returns, and do not represent clients before the Florida Department of Revenue</strong>. We deliver clean, CPA-ready bookkeeping (including sales-tax and surtax reconciliation) and coordinate with your existing Florida CPA or EA." },
  ],

  // GLOSSARY — 8 entity-dense FL terms. (H2: The Florida terms that matter for QuickBooks & bookkeeping.)
  // Child-page deep-links REMOVED (no Florida children); routed to /contact/?intent=florida where the
  // baseline carried a "detail →" link, otherwise dropped.
  stateTerms: [
    { term: "No State Income Tax", def: "<strong>Florida levies no personal state income tax</strong> &mdash; a primary driver of business and resident relocation. Payroll still requires federal withholding, Social Security/Medicare, and Florida reemployment tax (the state&rsquo;s unemployment tax) &mdash; but no state income-tax withholding line. There is also <strong>no franchise or margin tax</strong>. The trade-off is a heavier reliance on sales tax. A frequent point of confusion for businesses relocating from income-tax states." },
    { term: "Florida Corporate Income Tax (5.5%)", def: "<strong>A 5.5% income tax that applies only to C-corporations</strong> (with a $50,000 exemption). <strong>S-corporations, LLCs, and partnerships are not subject to Florida income tax</strong> &mdash; their income passes through to owners, who owe no Florida personal income tax either. Entity choice therefore has an outsized effect on Florida tax exposure, and QuickBooks should be structured to support the corporate return where the C-corp election applies." },
    { term: "Sales Tax on Services", def: "<strong>Florida taxes a number of services that most states exempt</strong> &mdash; including commercial cleaning, nonresidential pest control, certain repairs to tangible property, detective/security services, and commercial laundry. Many owners assume all services are exempt and under-collect. Correctly flagging taxable vs. exempt service lines in QuickBooks is one of the most common Florida corrections we make." },
    { term: "Discretionary Sales Surtax", def: "<strong>A county-level surtax added on top of the 6% state sales tax</strong>, ranging from 0.5% to 2.5% by county (combined rates reach roughly 8.5%). Florida is destination-based, so the rate follows the customer&rsquo;s county. For a single taxable item, the surtax often applies <strong>only to the first $5,000</strong>. QuickBooks must carry correct per-county rates and the $5,000 surtax cap, or multi-county sellers misstate tax." },
    { term: "Commercial-Rent Tax (Repealed 2025)", def: "<strong>Florida was the only state to impose sales tax on commercial real-property leases &mdash; and repealed it effective October 1, 2025.</strong> Landlords and tenants no longer collect or remit sales tax on commercial rent for periods on or after that date; rent for earlier periods remains taxable. There is <strong>no automatic refund</strong> &mdash; overpayments must be claimed through the DOR. Lease invoicing and QuickBooks tax items should be updated to stop charging it." },
    { term: "Communications Services Tax (CST)", def: "<strong>A separate Florida tax on telecommunications, cable, streaming, and certain digital communications services</strong> &mdash; distinct from sales tax, with its own state and local rates. Businesses that resell connectivity, VoIP, or bundled communications can fall under CST without realizing it. Where CST applies, it must be tracked separately from sales tax in QuickBooks." },
    { term: "Hurricane &amp; Casualty Accounting", def: "<strong>Storm-related bookkeeping unique to Florida&rsquo;s exposure</strong> &mdash; recording insurance proceeds, casualty losses, business-interruption recoveries, and repair vs. capital-improvement decisions. Proper treatment affects the federal return and any disaster-relief claims. After major storms, clean records of pre-loss basis and recovery timing are essential. We structure QuickBooks so casualty events are captured correctly when they happen." },
    { term: "FL Economic Nexus (sales tax)", def: "<strong>Florida requires sales-tax collection from remote sellers exceeding $100,000 in taxable Florida sales in the prior calendar year</strong> &mdash; a sales-only threshold with no transaction count. Only <strong>taxable</strong> sales count (exempt items and most SaaS do not), and marketplace-facilitated sales are excluded from a seller&rsquo;s own calculation. Relevant for any out-of-state e-commerce business selling into Florida." },
  ],

  // DELIVERY — direct vs partners (buyer-card routing split).
  // (H2: What we deliver in Florida. · H3: Direct service... · H3: Trusted local...)
  // "Certified QuickBooks ProAdvisors" deep-link de-linked (no FL child); CTAs route to #anchors.
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service by TechBrot&rsquo;s lead practice.", lede: "Most Florida engagements &mdash; bookkeeping, QuickBooks work, payroll, and sales tax compliance &mdash; are delivered directly by TechBrot&rsquo;s lead practice. Certified QuickBooks ProAdvisors working under the TechBrot brand with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Florida payroll &mdash; federal withholding + reemployment tax (no state income tax)", "Florida sales tax compliance &mdash; destination-based, county surtax, taxable services", "Sales-tax &amp; discretionary-surtax reconciliation by county", "Remote delivery, secure, encrypted access"], cta: "Browse Florida services &rarr;", href: "#fl-ecosystem" },
    { eyebrow: "02 &middot; Curated Florida partners", heading: "Trusted local Florida partners.", lede: "When metro presence, high-volume hospitality, healthcare/dental-practice accounting, or multi-location retail matters, engagements route to a vetted Florida accounting practice running under TechBrot&rsquo;s standards.", list: ["Metro-based independent practice (Miami, Orlando, Tampa, Jacksonville)", "Hospitality &amp; restaurant high-volume accounting", "Healthcare &amp; dental practice specialization", "Florida Department of Revenue coordination", "DOR and IRS audit-support coordination", "Multi-location retail and home-services depth", "Same platform standards as direct delivery"], cta: "See Florida partner status &rarr;", href: "#fl-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Florida or federal tax returns. For corporate income tax filing, audit representation, and Florida Department of Revenue matters, we coordinate with your existing Florida CPA or EA.",

  // CONTEXT — 4 differentiators. (H2: What makes Florida accounting different. + 4 H3s)
  context: [
    { category: "No Income Tax", heading: "A magnet &mdash; with a sales-tax trade-off.", body: ["Florida has <strong>no personal state income tax</strong> and <strong>no franchise/margin tax</strong>. Only <strong>C-corporations</strong> pay the 5.5% corporate income tax; S-corps, LLCs, and partnerships owe no Florida income tax.", "The trade-off is heavier reliance on sales tax &mdash; including on services. Entity choice drives Florida tax exposure, so QuickBooks should be structured around it."] },
    { category: "Sales Tax on Services", heading: "Florida taxes services others exempt.", body: ["Unlike most states, Florida taxes a range of <strong>services</strong> &mdash; commercial cleaning, pest control, certain repairs, security, commercial laundry. Owners who assume services are exempt routinely under-collect.", "QuickBooks must flag taxable vs. exempt service lines and apply the right rate, or invoices misstate tax."] },
    { category: "County Surtax", heading: "6% state + county surtax, by location.", body: ["On top of the 6% state rate, each county adds a <strong>discretionary surtax (0.5%&ndash;2.5%)</strong>. Florida is <strong>destination-based</strong>, so the combined rate follows the customer&rsquo;s county &mdash; and the surtax often applies only to the first <strong>$5,000</strong> of a single item.", "Multi-county sellers need correct per-county rates and the surtax cap in QuickBooks."] },
    { category: "Industry &amp; Climate", heading: "Hospitality, healthcare &mdash; and hurricanes.", body: ["Florida&rsquo;s economy concentrates in <strong>hospitality and restaurants, healthcare and dental, real estate, construction, and home services</strong> &mdash; high-volume, multi-location, often seasonal operations.", "Plus a Florida-specific reality: <strong>hurricane and casualty accounting</strong> &mdash; insurance proceeds, casualty losses, and business-interruption recoveries that have to be recorded correctly when storms hit."] },
  ],
  contextNote: "Florida operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply to your business.",

  // SCENARIOS — 3 honestly-labeled composites (framing KEPT verbatim).
  // (H2: What a Florida engagement actually looks like. + 3 scenario H3s)
  // Old child-page CTAs ("FL restaurant accounting →" etc.) → /contact/?intent=florida (no FL child exists).
  scenarios: [
    { tag: "Restaurant Group &middot; Miami (Miami-Dade County)", heading: "A 4-location restaurant group with no POS-to-books reconciliation and surtax errors.", body: ["<strong>Situation.</strong> Each location&rsquo;s POS dumped into one undifferentiated income account. Sales tax collected at a flat rate that ignored the Miami-Dade discretionary surtax, tip reporting inconsistent, and no per-location P&amp;L. Comps and voids weren&rsquo;t tracked, so food cost was unknowable.", "<strong>What we did.</strong> QuickBooks cleanup, built per-location class tracking, reconciled POS to deposits, corrected the combined state+surtax rate, and set up tipped-employee payroll handling.", "<strong>Outcome.</strong> Per-location P&amp;L visibility, correct sales-tax collection going forward, and food-cost and labor percentages the owner could finally manage to."], cta: "Discuss a restaurant engagement &rarr;", href: "/contact/?intent=florida" },
    { tag: "Dental Practice &middot; Orlando (Orange County)", heading: "A 3-provider dental practice with insurance deposits booked as revenue and no production tie-out.", body: ["<strong>Situation.</strong> Insurance and patient deposits recorded straight to income with no link to production or adjustments. Owner couldn&rsquo;t see collections vs. production, write-offs were invisible, and the practice-management system never tied to QuickBooks. Equipment financing was miscategorized.", "<strong>What we did.</strong> Rebuilt the chart of accounts for a dental practice, set up payer-deposit reconciliation, separated production/collection/adjustment, corrected the equipment loans, and established monthly close tied to the PM system.", "<strong>Outcome.</strong> True collections-vs-production reporting, clean financing schedules, and books a CPA and a practice broker could both rely on."], cta: "Discuss a dental engagement &rarr;", href: "/contact/?intent=florida" },
    { tag: "Home Services &middot; Tampa (Hillsborough County)", heading: "An HVAC &amp; repair company under-collecting tax on taxable services after a storm season.", body: ["<strong>Situation.</strong> Treating all service revenue as exempt when several Florida repair services are taxable, no job-level profitability, and a pile of post-hurricane insurance and casualty entries booked as ordinary income. Materials vs. labor weren&rsquo;t separated for tax.", "<strong>What we did.</strong> Reconfigured taxable vs. exempt service items, separated materials and labor, recorded insurance proceeds and casualty losses correctly, and built job costing so each call&rsquo;s margin was visible.", "<strong>Outcome.</strong> Correct sales-tax collection on taxable services, clean storm-related records for the CPA, and per-job margin to price work accurately."], cta: "Discuss a home-services engagement &rarr;", href: "/contact/?intent=florida" },
  ],
  scenariosNote: "Three composite scenarios drawn from common Florida engagement shapes. Identifying details anonymized; the operational patterns are real.",

  // RECENT FLORIDA RESULTS — REFRAMED representative (R5 standing). The baseline section claimed
  // "real engagement outcomes, anonymized by client request"; reframed here as explicitly
  // illustrative, each card meta → ENGAGEMENT TYPE, no specific-client assertion.
  // (H2: Recent Florida results.)
  outcomes: [
    { figure: "$27K", detail: "Uncollected sales tax on taxable services corrected", meta: "Representative &middot; home-services correction" },
    { figure: "4&rarr;1 ledger", detail: "Locations consolidated into per-location P&amp;L", meta: "Representative &middot; restaurant-group rebuild" },
    { figure: "$18K", detail: "Commercial-rent tax overpayment identified post-repeal", meta: "Representative &middot; real-estate repeal cleanup" },
    { figure: "22&rarr;5 days", detail: "Month-end close cut with payer reconciliation", meta: "Representative &middot; dental close" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle &mdash; not specific client results.",

  // ADVISORY — mission block. STANDING brand line is the H2.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, strategic positioning, and advisory. Florida is one of the fastest-growing states in the country, with heavy in-migration, new business formation, and multi-location expansion to navigate. For Florida businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, capital-event readiness, KPI design, and Florida entity-and-sales-tax planning in coordination with your CPA. By application. Best fit: $1M&ndash;$50M Florida businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards. (H2: Industry-specific accounting for Florida's economy. + 6 H3s)
  // Old per-industry child links REMOVED — rendered as plain headings (no FL industry children exist).
  industries: [
    { num: "01", name: "Restaurants &amp; Hospitality", body: "Florida&rsquo;s signature sector &mdash; multi-location operators, bars, and resorts. <strong>POS-to-books reconciliation</strong>, per-location P&amp;L, tipped-employee payroll, food/beverage cost tracking, and combined state-plus-surtax sales tax." },
    { num: "02", name: "Healthcare Practices", body: "Florida medical and specialty practices serving a large aging population &mdash; <strong>insurance payer reconciliation</strong>, HIPAA-aware data handling, multi-provider payroll, and practice-consolidation readiness." },
    { num: "03", name: "Dental Practices", body: "Florida dental groups and DSOs &mdash; <strong>production-vs-collection reporting</strong>, payer-deposit reconciliation, equipment-financing schedules, and practice-management-system tie-out for brokers and lenders." },
    { num: "04", name: "Real Estate &amp; Property", body: "Florida investors, brokerages, and property managers &mdash; <strong>multi-entity ledgers</strong>, trust/escrow accounting, per-property profitability, 1031 documentation, and post-repeal commercial-lease bookkeeping." },
    { num: "05", name: "Construction &amp; Contractors", body: "Florida general and specialty contractors &mdash; <strong>job costing</strong>, WIP schedules, AIA billing, retainage tracking, and hurricane-rebuild casualty accounting across the state&rsquo;s high-growth markets." },
    { num: "06", name: "Home Services", body: "Florida HVAC, plumbing, pest control, and repair companies &mdash; <strong>taxable vs. exempt service flagging</strong>, materials-vs-labor separation, job-level margin, and dispatch/field-software integration with QuickBooks." },
  ],
  industriesNote: "Industries not listed &mdash; e-commerce, retail, professional services, nonprofit &mdash; are served via our global service pages. Local-intent Florida pages are added only where Florida creates genuinely distinct requirements.",

  // SERVICES — 6 money lines (buyer-card routing). (H2: Find the right service... + 6 H3s)
  // Florida money-page deep-links REMOVED (no FL children). Heading is plain text; the only links are
  // to REAL built global service overviews; card CTA routes to /contact/?intent=florida.
  services: [
    { eyebrow: "Service 01", name: "Florida Bookkeeping Services", body: "Recurring fixed-fee monthly close for Florida businesses. Bank reconciliation, sales-tax and county-surtax sub-reconciliation, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "$400/mo", cadence: "Recurring monthly", cta: "Start a Florida engagement &rarr;" },
    { eyebrow: "Service 02", name: "Florida QuickBooks ProAdvisor", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Florida businesses. Covers QBO, Desktop, Enterprise, and Payroll across all Florida industry types. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Start a Florida engagement &rarr;" },
    { eyebrow: "Service 03", name: "Florida QuickBooks Cleanup", body: "QuickBooks files with structural problems &mdash; county surtax misconfigured, taxable services treated as exempt, POS unreconciled, commercial-rent tax still being charged post-repeal. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "$1,500", cadence: "One-time, written scope", cta: "Start a Florida engagement &rarr;" },
    { eyebrow: "Service 04", name: "Florida QuickBooks Setup", body: "Professional QuickBooks implementation for Florida businesses &mdash; chart of accounts for your industry, county-surtax sales tax configuration, taxable-service flagging, per-location class tracking for multi-unit operators. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "$750", cadence: "One-time, 2&ndash;4 weeks", cta: "Start a Florida engagement &rarr;" },
    { eyebrow: "Service 05", name: "Florida Sales Tax Compliance", body: "Florida sales tax filing, county discretionary surtax configuration, taxable-services handling, the $5,000 surtax cap, and economic nexus for out-of-state sellers into Florida. <a href=\"/accounting/sales-tax-compliance/\">National overview &rarr;</a>", starting: "$250/mo", cadence: "Recurring + nexus review", cta: "Start a Florida engagement &rarr;" },
    { eyebrow: "Service 06", name: "Florida Business Tax Support", body: "Florida corporate income tax (C-corp) bookkeeping support, communications services tax tracking, DOR notice response, and CPA-ready workpapers. Bookkeeping side of the Florida tax picture. <a href=\"/accounting/\">National overview &rarr;</a>", starting: "$500", cadence: "Annual + monthly support", cta: "Start a Florida engagement &rarr;" },
  ],
  servicesNote: "Every Florida engagement is scoped on the discovery call. Until dedicated Florida service pages publish, all Florida intake routes through the firm&rsquo;s discovery call &mdash; same fixed-fee written scope, same Certified ProAdvisor delivery.",

  // ECOSYSTEM — 6 clusters. (H2: Every Florida page in one place. + 6 cluster H3s)
  // NO-CHILDREN: the baseline rendered every cluster as a list of FL child links. Florida has NO
  // children, so each cluster is rendered as a PLAIN-TEXT description of the coverage area (no <a>).
  // This preserves the contract H3s and the topical signal without ever linking a non-existent page.
  ecosystem: [
    { eyebrow: "Cluster 01", heading: "Florida money cluster", lede: "The primary Florida demand we serve &mdash; &ldquo;quickbooks accountant near me&rdquo; and &ldquo;bookkeeper near me&rdquo; intent statewide.", items: [{ label: "Florida QuickBooks Accountant / ProAdvisor &mdash; the umbrella engagement", href: "/find-an-accountant/florida/quickbooks-accountant/" }, { label: "Florida Small Business Accountant", href: "/find-an-accountant/florida/small-business-accountant/" }, { label: "Florida Bookkeeping Services", href: "/find-an-accountant/florida/bookkeeping-services/" }, { label: "Florida Virtual Bookkeeper", href: "/find-an-accountant/florida/virtual-bookkeeper/" }, { label: "Speak to a Florida ProAdvisor", href: "/find-an-accountant/florida/speak-to-a-proadvisor/" }, { label: "Florida pricing &amp; engagement fees", href: "/find-an-accountant/florida/pricing/" }] },
    { eyebrow: "Cluster 02", heading: "Florida QuickBooks spokes", lede: "FL-specific QuickBooks ProAdvisor engagements, each scoped on the discovery call.", items: [{ label: "Florida QuickBooks Setup", href: "/find-an-accountant/florida/quickbooks-setup/" }, { label: "Florida QuickBooks Cleanup", href: "/find-an-accountant/florida/quickbooks-cleanup/" }, { label: "Florida QuickBooks Reconciliation", href: "/find-an-accountant/florida/quickbooks-reconciliation/" }, { label: "Florida QuickBooks Migration", href: "/find-an-accountant/florida/quickbooks-migration/" }, { label: "Florida QuickBooks Training", href: "/find-an-accountant/florida/quickbooks-training/" }, { label: "Florida QuickBooks Error Fixes", href: "/find-an-accountant/florida/quickbooks-error-fixes/" }] },
    { eyebrow: "Cluster 03", heading: "Florida bookkeeping spokes", lede: "Recurring and project bookkeeping engagements scoped to Florida operational reality.", items: [{ label: "Florida Monthly Bookkeeping", href: "/find-an-accountant/florida/monthly-bookkeeping/" }, { label: "Florida Cleanup &amp; Catch-Up Bookkeeping", href: "/find-an-accountant/florida/cleanup-bookkeeping/" }, { label: "Florida Urgent Bookkeeping", href: "/find-an-accountant/florida/urgent-bookkeeping/" }] },
    { eyebrow: "Cluster 04", heading: "Florida tax cluster", lede: "The genuinely Florida-specific tax stack &mdash; sales tax on services, county surtax, the commercial-rent repeal, and the corporate income tax.", items: [{ label: "Florida Sales Tax (6% + county surtax &middot; taxable services)", href: "/find-an-accountant/florida/sales-tax-help/" }, { label: "Florida Corporate, Services &amp; TPP Tax (5.5% C-corp)", href: "/find-an-accountant/florida/corporate-tax-help/" }] },
    { eyebrow: "Cluster 05", heading: "Florida industries", lede: "Vertical depth for Florida&rsquo;s leading sectors &mdash; where Florida creates genuinely distinct requirements.", items: [{ label: "Hospitality &amp; Restaurants", href: "/find-an-accountant/florida/industries/hospitality/" }, { label: "Real Estate", href: "/find-an-accountant/florida/industries/real-estate/" }, { label: "Marine &amp; Boating", href: "/find-an-accountant/florida/industries/marine/" }, { label: "Construction", href: "/find-an-accountant/florida/industries/construction/" }, { label: "Healthcare", href: "/find-an-accountant/florida/industries/healthcare/" }, { label: "Professional Services &amp; Law Firms", href: "/find-an-accountant/florida/industries/professional-services/" }, { label: "All Florida industries", href: "/find-an-accountant/florida/industries/" }] },
    { eyebrow: "Cluster 06", heading: "Florida cities", lede: "Florida&rsquo;s primary metros &mdash; the major population and business centers we serve directly.", items: [{ label: "Miami (Miami-Dade County)", href: "/find-an-accountant/florida/cities/miami/" }, { label: "Orlando (Orange County)", href: "/find-an-accountant/florida/cities/orlando/" }, { label: "Tampa (Hillsborough County)", href: "/find-an-accountant/florida/cities/tampa/" }, { label: "Jacksonville (Duval County)", href: "/find-an-accountant/florida/cities/jacksonville/" }, { label: "Fort Lauderdale (Broward County)", href: "/find-an-accountant/florida/cities/fort-lauderdale/" }, { label: "St. Petersburg (Pinellas County)", href: "/find-an-accountant/florida/cities/st-petersburg/" }, { label: "Tallahassee (Leon County)", href: "/find-an-accountant/florida/cities/tallahassee/" }, { label: "West Palm Beach (Palm Beach County)", href: "/find-an-accountant/florida/cities/west-palm-beach/" }, { label: "Fort Myers (Lee County)", href: "/find-an-accountant/florida/cities/fort-myers/" }, { label: "Gainesville (Alachua County)", href: "/find-an-accountant/florida/cities/gainesville/" }, { label: "Lakeland (Polk County)", href: "/find-an-accountant/florida/cities/lakeland/" }, { label: "All Florida cities &amp; counties", href: "/find-an-accountant/florida/cities/" }] },
  ],
  ecosystemNote: "Every Florida page above is live &mdash; follow the link for the full detail, or <a href=\"/contact/?intent=florida&state=florida&source_type=location&funnel_stage=MOFU\">start with a discovery call &rarr;</a>. All 67 counties, scoped on one call.",

  // PRICING — 8-row table. (H2: Fixed-fee starting ranges for Florida engagements.)
  // svc cells are PLAIN TEXT (no FL child links). Canonical figures preserved verbatim.
  pricing: [
    { svc: "Monthly bookkeeping", range: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", notes: "Sales-tax + county-surtax sub-reconciliation" },
    { svc: "QuickBooks cleanup", range: "$1,500&ndash;$15,000+", cadence: "One-time", notes: "Taxable-service + county-surtax corrections are common" },
    { svc: "Catch-up bookkeeping", range: "$2,000&ndash;$20,000+", cadence: "One-time", notes: "Scoped by months behind, volume, and industry complexity" },
    { svc: "QuickBooks setup", range: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 wks", notes: "County-surtax config + per-location class tracking for multi-unit" },
    { svc: "Desktop &rarr; Online migration", range: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 wks", notes: "High QBO adoption; Enterprise common in larger contractors" },
    { svc: "Payroll management", range: "$150&ndash;$800+/mo", cadence: "Recurring monthly", notes: "Federal withholding + FL reemployment tax; no state income tax line" },
    { svc: "Sales tax compliance", range: "$250&ndash;$1,500+/mo + $500&ndash;$3,000 nexus review", cadence: "Recurring monthly", notes: "6% + county surtax &middot; taxable services &middot; $100K economic nexus" },
    { svc: "Business tax support", range: "$500&ndash;$3,000+", cadence: "Annual + support", notes: "C-corp income tax workpapers; CST tracking; DOR notices with your CPA" },
  ],
  pricingNote: "Indicative starting ranges. Final fees scale with transaction volume, employee count, number of locations, industry specifics, and multi-state exposure. Final scope and fee are delivered in writing within 3 business days of the discovery call.",

  // CITIES + COUNTIES. (H2: Serving Florida businesses statewide. + 2 H3s)
  // Old city pills were links to FL city children — rendered here as PLAIN city/county lines (no <a>).
  cities: [
    { name: "Miami", county: "Miami-Dade County" },
    { name: "Orlando", county: "Orange County" },
    { name: "Tampa", county: "Hillsborough County" },
    { name: "Jacksonville", county: "Duval County" },
    { name: "Fort Lauderdale", county: "Broward County" },
    { name: "St. Petersburg", county: "Pinellas County" },
    { name: "Tallahassee", county: "Leon County" },
    { name: "West Palm Beach", county: "Palm Beach County" },
    { name: "Fort Myers", county: "Lee County" },
    { name: "Gainesville", county: "Alachua County" },
    { name: "Lakeland", county: "Polk County" },
  ],
  countyProse: "Miami-Dade (Miami), Broward (Fort Lauderdale), Palm Beach (West Palm Beach), Hillsborough (Tampa), Orange (Orlando), Pinellas (St. Petersburg/Clearwater), Duval (Jacksonville), Lee (Fort Myers), Polk (Lakeland), Brevard (Melbourne), Volusia (Daytona Beach), Pasco, Seminole, Sarasota, Manatee, Collier (Naples), Marion (Ocala), Osceola (Kissimmee), Lake, St. Lucie, Escambia (Pensacola), Leon (Tallahassee), Alachua (Gainesville), Clay, St. Johns (St. Augustine), Okaloosa, Charlotte, Hernando, Bay (Panama City), Martin, Indian River (Vero Beach), Citrus, Sumter, Flagler, Santa Rosa, Highlands, Nassau, Walton, Monroe (Key West), Putnam &mdash; among all 67 Florida counties.",
  citiesNote: "Don&rsquo;t see your city? All 67 Florida counties are served via remote engagement delivery. Start with the discovery call and we&rsquo;ll scope it.",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "Certified QuickBooks ProAdvisor team", role: "Network Operators",
    creds: "Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll &middot; credentialed, insured, vetted",
    line: "A vetted Certified ProAdvisor operator delivers every Florida engagement &mdash; reconciling, cleaning, and rebuilding books to a defined platform standard.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards. (H2: Trusted Florida partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll &mdash; verifiable on Intuit&rsquo;s public directory." },
    { num: "02", term: "Demonstrated Florida tax fluency", detail: "County discretionary surtax, taxable-services rules, the commercial-rent repeal, Florida Department of Revenue coordination." },
    { num: "03", term: "Industry specialization depth", detail: "High-volume hospitality and restaurant accounting, healthcare/dental payer reconciliation, multi-location retail." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards. (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Florida operational depth", body: "County-surtax sales tax, taxable-services flagging, multi-location hospitality, healthcare and dental payer reconciliation, and hurricane/casualty accounting. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Verifiable on Intuit&rsquo;s public ProAdvisor directory." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for complex Florida engagements." },
    { num: "04", name: "Sophisticated buyer, honest delivery", body: "Florida buyers know the difference between genuine expertise and a keyword swap. We are an independent ProAdvisor firm with no Intuit affiliation, no affiliate commissions, and no upsell agenda &mdash; just the right scope for your Florida business." },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Florida businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Florida CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Florida &amp; federal returns", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "County-surtax sales tax config", us: "<strong>Correct rate + $5,000 cap by county</strong>", cpa: "Usually; varies by firm", remote: "Often flat rate &mdash; misconfigured", winner: "us" },
    { dim: "Taxable-services flagging", us: "<strong>Correct taxable vs. exempt per service</strong>", cpa: "Varies; not their primary focus", remote: "Often all-exempt &mdash; under-collects", winner: "us" },
    { dim: "Commercial-rent repeal handling", us: "<strong>Stops the tax; supports refund claims</strong>", cpa: "Usually; depends on firm experience", remote: "Often still charging it", winner: "us" },
    { dim: "Hospitality / multi-location P&amp;L", us: "<strong>Per-location class tracking</strong>", cpa: "If they specialize in hospitality", remote: "Generally not handled", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "DOR / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for federal and Florida corporate returns and IRS/DOR representation, use a licensed Florida CPA or EA. For QuickBooks operations, bookkeeping, county-surtax sales tax, taxable-services handling, and multi-location reporting &mdash; TechBrot is built for that. Most Florida clients use both.",
  comparisonRelated: "Independent firm, fixed-fee scope, your file and your data &mdash; the same standard on every Florida engagement.",

  // AUTHORITY — 6 .gov / official sources. (H2: Verify everything on this page.)
  authority: [
    { name: "Florida Department of Revenue", href: "https://floridarevenue.com/", detail: "Authoritative source for Florida sales and use tax, the discretionary sales surtax, corporate income tax, and Department of Revenue audit procedures." },
    { name: "Florida Sales &amp; Use Tax &mdash; DOR", href: "https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx", detail: "Authoritative source for the 6% state rate, county discretionary surtax rates, taxable services, and the 2025 commercial-rent tax repeal." },
    { name: "Florida Department of Commerce (Reemployment Tax)", href: "https://floridajobs.org/", detail: "Authoritative source for Florida reemployment (unemployment) tax, employer registration, and state payroll-related reporting requirements." },
    { name: "Florida Division of Corporations (Sunbiz)", href: "https://dos.fl.gov/sunbiz/", detail: "Authoritative source for Florida entity formation, the annual report (due by May 1), and good-standing status." },
    { name: "Intuit ProAdvisor Directory", href: "https://proadvisor.intuit.com/", detail: "Authoritative source for verifying active QuickBooks ProAdvisor certifications." },
    { name: "Internal Revenue Service (IRS)", href: "https://www.irs.gov/", detail: "Authoritative source for federal employment tax (Form 941), Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 17 Q/A VERBATIM from the contract. visible = schema. Append-only enrichment; child
  // "detail →" links from the baseline answers are DROPPED (no FL children). (H2: Florida QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Florida businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll management, sales tax compliance, and fractional CFO coordination to Florida businesses statewide &mdash; directly through our lead practice, with trusted partner practices across Florida. All 67 Florida counties covered, including Miami, Fort Lauderdale, Orlando, Tampa, Jacksonville, St. Petersburg, and every metro and rural county in between." },
    { q: "Does Florida have a state income tax?", a: "No. Florida has no state personal income tax &mdash; a primary reason businesses and owners relocate there. It does levy a 5.5% corporate income tax on C-corporations (with a $50,000 exemption); S-corporations, LLCs, and partnerships owe no Florida income tax. There is no franchise or margin tax. The trade-off is heavier reliance on sales tax." },
    { q: "What&rsquo;s the Florida sales tax rate, and how does the county surtax work?", a: "The state rate is 6%, plus a county discretionary surtax of 0.5%&ndash;2.5%, for a combined rate up to roughly 8.5%. Florida is destination-based &mdash; the rate follows where the customer receives the item. For a single taxable item, the surtax often applies only to the first $5,000. QuickBooks must carry correct per-county rates and the surtax cap." },
    { q: "Does Florida charge sales tax on services?", a: "Yes &mdash; on more services than most states. Commercial cleaning, nonresidential pest control, certain repairs to tangible property, detective/security services, and commercial laundry are taxable in Florida. Many owners assume all services are exempt and under-collect. Correctly flagging taxable vs. exempt service lines in QuickBooks is one of the most common Florida corrections we make." },
    { q: "Did Florida really repeal the commercial-rent (business rent) tax?", a: "Yes. Effective October 1, 2025, Florida repealed its sales tax on commercial real-property leases &mdash; it had been the only state to impose it. Landlords and tenants no longer collect or remit sales tax on commercial rent for periods on or after that date; earlier periods remain taxable. There is no automatic refund &mdash; overpayments must be claimed through the Florida DOR. If your books or lease invoices still charge it, that needs correcting." },
    { q: "What QuickBooks versions does TechBrot support for Florida businesses?", a: "All current versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QBO is dominant across Florida&rsquo;s hospitality, home-services, and professional-services businesses. Enterprise shows up in larger contractors and multi-location operators. Per-location class tracking for restaurants and retail is a standard engagement component." },
    { q: "Does TechBrot file Florida or federal tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Florida or federal tax returns, and do not represent clients before the Florida Department of Revenue. We deliver clean, CPA-ready bookkeeping including sales-tax and county-surtax reconciliation and C-corp income-tax workpapers, and coordinate with your CPA or EA who files. The standard model: TechBrot handles QuickBooks operations; your Florida CPA handles filing." },
    { q: "How does a Florida engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Florida operational context (industry, number of locations, county sales-tax footprint, multi-state activity), recommend the right engagement structure, and deliver a written fixed-fee scope within 3 business days. Same-day diagnostic for emergencies." },
    { q: "What is the Communications Services Tax, and does it apply to me?", a: "Florida&rsquo;s Communications Services Tax (CST) is a separate tax on telecommunications, cable, streaming, and certain digital communications &mdash; distinct from sales tax, with its own state and local rates. Businesses that resell connectivity, VoIP, or bundled communications can fall under CST without realizing it. Where it applies, CST must be tracked separately from sales tax in QuickBooks." },
    { q: "How do I handle hurricane insurance proceeds and casualty losses in my books?", a: "Carefully &mdash; it affects your federal return. Insurance proceeds, casualty losses, and business-interruption recoveries each have specific treatment, and repairs must be distinguished from capital improvements. Clean records of pre-loss basis and recovery timing are essential for any disaster-relief claim. We structure QuickBooks so casualty events are captured correctly when they happen, then coordinate the tax treatment with your CPA." },
    { q: "How much does Florida bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; Desktop&rarr;Online migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; business tax support $500&ndash;$3,000+; fractional CFO $3,000&ndash;$8,000+/mo." },
    { q: "Can I use my Florida CPA for taxes and TechBrot for bookkeeping?", a: "Yes &mdash; that&rsquo;s the standard model. TechBrot handles operational bookkeeping, QuickBooks configuration, and Florida-specific compliance (county-surtax sales tax, taxable-services flagging, sales-tax reconciliation); your Florida CPA handles federal and corporate returns and DOR/IRS representation. Year-end CPA handoff is included in every recurring Florida engagement. Most of our Florida clients operate this way." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll &mdash; verifiable on Intuit&rsquo;s public ProAdvisor directory" },
    { label: "Florida practice", detail: "All 67 counties served &middot; Miami, Fort Lauderdale, Orlando, Tampa, Jacksonville, St. Petersburg &middot; Industries: restaurant/hospitality, healthcare, dental, real estate, construction, home services" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Florida statutory references reviewed against Florida Department of Revenue primary sources &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. (H2: Multi-state Florida businesses. + 4 H3s: Georgia, Alabama, New York, Texas)
  // Only New York has a built state page; the rest route to /find-an-accountant/ (in baseline).
  related: [
    { name: "Georgia", body: "North Florida businesses with GA operations &mdash; Georgia income tax withholding (Florida has none), multi-state sales tax, and nexus along the I-95 and I-75 corridors.", cta: "ProAdvisors in Georgia &rarr;", href: "/find-an-accountant/" },
    { name: "Alabama", body: "Panhandle businesses with AL operations &mdash; Alabama income tax and local sales-tax rates, cross-border payroll, and multi-state nexus considerations.", cta: "ProAdvisors in Alabama &rarr;", href: "/find-an-accountant/" },
    { name: "New York", body: "Snowbird and dual-resident owners splitting time between Florida and New York &mdash; residency documentation, multi-state payroll, and the contrast between no-income-tax FL and high-tax NY.", cta: "ProAdvisors in New York &rarr;", href: "/find-an-accountant/new-york/" },
    { name: "Texas", body: "Owners operating in both no-income-tax states &mdash; Florida and Texas &mdash; coordinating multi-state sales tax, the Texas franchise tax, and entity structure across the two.", cta: "ProAdvisors in Texas &rarr;", href: "/find-an-accountant/" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/florida/";
      // QAPage mainEntity from the first 5 aiSummary items (matches the visible 5-question block).
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Florida QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and Florida sales tax compliance for Florida businesses across all 67 counties — from Miami and Fort Lauderdale to Orlando, Tampa, and Jacksonville. Built around no state income tax, the 6% sales tax with county discretionary surtax, sales tax on services that other states exempt, and the 2025 repeal of the commercial-rent tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/florida-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#fl-in-brief-text","#fl-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Florida"}]},
        {"@type":"Service","@id":url+"#service","name":"Florida QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, and Florida sales tax compliance for Florida businesses across all 67 counties. Delivered directly by TechBrot's lead practice, with trusted partner practices in Florida. Independent Certified QuickBooks ProAdvisor firm; does not file Florida or federal tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Florida","containsPlace":[
          {"@type":"City","name":"Miami"},{"@type":"City","name":"Orlando"},{"@type":"City","name":"Tampa"},{"@type":"City","name":"Jacksonville"},{"@type":"City","name":"Fort Lauderdale"},{"@type":"City","name":"St. Petersburg"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Florida small and mid-sized businesses, restaurants and hospitality operators, healthcare and dental practices, real estate operators, construction contractors, and home-services companies"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Florida accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Florida Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Florida QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Florida QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Florida QuickBooks Migration"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Florida Sales Tax Compliance"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Florida — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
