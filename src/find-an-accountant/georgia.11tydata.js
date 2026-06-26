/* /find-an-accountant/georgia/ — t-state-pillar PILLAR. Georgia is a CORE state built to the 6-essentials depth
 * (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. GA is an areaServed-ONLY state:
 * TechBrot serves Georgia remotely from the Delaware HQ, so this pillar carries NO street address, NO PostalAddress,
 * NO geo, NO LocalBusiness node, and NO hasMap (DE is the ONLY real-address state). Service + areaServed (State of
 * Georgia + named metros) only; provider = #organization. Mirrors the PA/NJ/MD/VA/OH/MI core-state exemplars: OMITS
 * `ecosystem`; `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the GA children; `cities`
 * name+county with NO href; pricing rows -> 5 children + global. Georgia STARTS WAVE C (Sunbelt) — the SE anchor.
 *
 * GEORGIA FACTS (verified 2026-06-26 against the Georgia Dept of Revenue + Office of the Governor — see _build/strategy/GA-FACTS.md):
 *  · State individual income tax — a FLAT 4.99% rate for 2026 (HB 463 lowered it from 5.19%; HB 1437 (2022) made GA
 *    flat; HB 111 (2025) accelerated). Standard deduction rose 2026 ($32k MFJ / $16k single). Path to further
 *    reductions. The clean contrast to the graduated NJ/MD/VA ladders and to OH's phase-out-to-zero.
 *  · Corporate income tax — a FLAT 4.99% rate for 2026 (tracks the individual rate). PLUS the corporate NET WORTH TAX,
 *    a franchise-style tax: $0 if net worth <= $100,000 (still must file), graduated up to a MAX of $5,000 for net
 *    worth over $22 million; filed with the income-tax return (Form 600). The net-worth tax is the GA-distinct business
 *    tax — the hook.
 *  · Sales & use tax — 4% STATE + LOCAL options (LOST/SPLOST/ELOST/TSPLOST; Atlanta MOST), set per jurisdiction, so the
 *    COMBINED rate varies (~7%-8%). QuickBooks must apply the correct combined rate by location.
 *  · NO local/city income tax (clean contrast to OH municipal + MI city tax) AND NO income-tax reciprocity with any
 *    state — a nonresident working in GA is generally subject to GA withholding on GA-source wages (no shortcut). This
 *    matters for multi-state/remote employers.
 *  · PTE election (HB 149) — partnership/S-corp may elect to pay GA tax at the entity level (4.99%) as a SALT-cap
 *    workaround; advisory hook.
 *  · Geography — 159 counties (2nd-most of any state); Atlanta (Fulton; Fortune 500, fintech "Transaction Alley," film,
 *    Hartsfield-Jackson), Savannah (Chatham; the Port, Hyundai Metaplant), Augusta (Richmond; cyber/medical), Columbus
 *    (Muscogee; insurance/Fort Moore), Macon (Bibb), Athens (Clarke; UGA), Marietta (Cobb; aerospace), Alpharetta
 *    (Fulton; tech corridor).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with Intuit.
 * It does NOT file GA or federal returns, the corporate income tax, the net worth tax, the individual income tax, the
 * sales-tax return, or the PTE election as agent; it keeps the books and coordinates with the client's CPA/EA and the
 * Georgia Dept of Revenue. Reviews are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented
 * reviewers, no AggregateRating. Outcomes/scenarios are explicitly representative composites — never real-client claims.
 * No founder/personal name in visible content; David Westgate appears only as the named lead ProAdvisor/operator. The
 * flat 4.99% income tax (2026), the 4.99% corporate rate, the 4% state sales tax, and the net-worth-tax $100k/$5,000/$22M
 * figures are VERIFIED and stated; combined jurisdiction sales-tax rates are framed qualitatively (~7-8%). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in Georgia, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Georgia bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to Georgia businesses across <strong>all 159 counties</strong> &mdash; from metro Atlanta&rsquo;s fintech, logistics, and film economy to the Port of Savannah, Augusta, Columbus, Macon, Athens, and Marietta. Georgia&rsquo;s income tax is now a <strong>flat 4.99% for 2026</strong> &mdash; simple, on a legislated path to further reductions &mdash; so the operational work lives elsewhere. Sales tax is the real complexity: <strong>4% at the state level plus county local-option add-ons</strong> (LOST, SPLOST, ELOST, TSPLOST, and Atlanta&rsquo;s MOST), so the <strong>combined rate varies by jurisdiction</strong>, commonly <strong>7% to 8%</strong>. Georgia also levies a <strong>corporate net worth tax</strong> &mdash; $0 under $100,000 of net worth, capped at $5,000 over $22 million &mdash; alongside the flat <strong>4.99% corporate income tax</strong>, with an elective <strong>pass-through entity (PTE) tax</strong> as a SALT-cap workaround. Crucially, Georgia has <strong>no local income tax but no reciprocity</strong>: all Georgia-source wages are withheld for the state. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Georgia returns, the corporate income or net worth tax, the individual income tax, or the sales-tax return &mdash; we keep the books and coordinate with your CPA and the Georgia Department of Revenue.",

  // PROADVISOR CREDENTIAL STRIP. (H2: Certified QuickBooks ProAdvisor credentials)
  credLede: "Every TechBrot operator holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
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
    { value: "159", label: "Georgia counties served &mdash; metro Atlanta to the coast and South Georgia" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "4.99%", label: "Flat Georgia income-tax rate for 2026 &mdash; HB 463 lowered it from 5.19%; on a legislated path to further reductions" },
    { figure: "4% + local", label: "Sales tax &mdash; 4% state plus county local-option add-ons (LOST/SPLOST/ELOST/TSPLOST), so the combined rate varies by jurisdiction (~7&ndash;8%)" },
    { figure: "$5,000", label: "Maximum corporate net worth tax &mdash; $0 under $100,000 of net worth, capped at $5,000 over $22 million" },
    { figure: "4.99%", label: "Flat Georgia corporate income tax for 2026 &mdash; tracks the individual rate; PTE election available at the same rate" },
    { figure: "No local tax", label: "No local or city income tax &mdash; but no reciprocity either, so all Georgia-source wages are withheld for the state" },
    { figure: "159", label: "Georgia counties &mdash; the second-most of any U.S. state; all served remotely, fixed-fee" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Georgia, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Georgia businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to Georgia businesses across all 159 counties.</strong> Coverage spans metro Atlanta&rsquo;s fintech, logistics, and film economy plus the Port of Savannah, Augusta, Columbus, Macon, Athens, and Marietta. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is Georgia&rsquo;s income tax rate, and is it flat?", a: "<strong>Yes &mdash; Georgia is now a flat 4.99% for 2026.</strong> HB 1437 (2022) converted Georgia from graduated brackets to a flat tax, and HB 463 lowered the rate to <strong>4.99% effective Jan 1, 2026</strong> (from 5.19% in 2025), with provisions for further annual reductions and a larger standard deduction. The corporate income tax is also a flat 4.99%. Because the rate is flat and there is <strong>no local income tax</strong>, Georgia payroll withholding is state-only &mdash; but Georgia has <strong>no reciprocity</strong>, so all Georgia-source wages are withheld for the state, which matters for multi-state and remote employers. We configure QuickBooks Payroll accordingly." },
    { q: "How does Georgia&rsquo;s sales tax work?", a: "Georgia&rsquo;s sales and use tax is <strong>4% at the state level, plus county local-option taxes</strong> &mdash; LOST (Local Option), SPLOST (Special Purpose), ELOST/ESPLOST (Education), TSPLOST (Transportation), and Atlanta&rsquo;s MOST &mdash; each 1%, so the <strong>combined rate varies by jurisdiction</strong>, commonly <strong>7% to 8%</strong>. Because the rate is set per jurisdiction and changes quarterly, QuickBooks has to apply the correct combined rate by location. We configure the sales-tax items by jurisdiction and scope multi-state nexus for businesses selling across the Florida, Alabama, or Tennessee lines." },
    { q: "Does Georgia have a corporate net worth tax?", a: "<strong>Yes.</strong> Separately from the 4.99% corporate income tax, Georgia levies a <strong>corporate net worth tax</strong> &mdash; a franchise-style tax on corporations doing business in the state. A corporation with <strong>net worth of $100,000 or less owes $0</strong> (but still files), and the tax is graduated up to a <strong>maximum of $5,000</strong> for net worth over $22 million. It&rsquo;s filed with the income-tax return (Form 600), so we keep the equity section and balance sheet clean and net-worth-tax-ready for your CPA." },
    { q: "Does TechBrot file Georgia taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Georgia or federal returns, the corporate income tax, the net worth tax, the individual income tax, the sales and use tax return, or the pass-through entity election, and we do not represent clients before the Georgia Department of Revenue</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure the local-option sales-tax tracking and state withholding, and coordinate with your existing Georgia CPA or EA and the Department of Revenue, who file." },
  ],

  // STATE GLOSSARY — the GA terms that matter. (H2: The Georgia terms that matter…)
  stateTerms: [
    { term: "Flat 4.99% Income Tax", def: "<p>Georgia&rsquo;s individual income tax is now a <strong>single flat 4.99% rate for 2026</strong> &mdash; HB 1437 (2022) made it flat and HB 463 lowered it from 5.19%, with a legislated path to further reductions and a larger standard deduction. The corporate rate matches at 4.99%. Confirm the current rate with the <a href=\"https://dor.georgia.gov/tax-tables-georgia-tax-rate-schedule\" rel=\"noopener nofollow\">Georgia Dept of Revenue</a>.</p>" },
    { term: "Local-Option Sales Tax (LOST/SPLOST/ELOST/TSPLOST)", def: "<p>Georgia&rsquo;s defining indirect tax: <strong>4% state plus county local-option add-ons</strong> &mdash; LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST, each 1% &mdash; so the <strong>combined rate varies by jurisdiction</strong> (~7&ndash;8%) and changes quarterly. Configuring QuickBooks to charge the right combined rate by location is the core Georgia sales-tax engagement. <a href=\"/find-an-accountant/georgia/quickbooks-setup/\">Georgia sales-tax setup &rarr;</a></p>" },
    { term: "Corporate Net Worth Tax", def: "<p>A Georgia <strong>franchise-style tax</strong> separate from income tax: <strong>$0 if net worth is $100,000 or less</strong> (you still file), graduated up to a <strong>$5,000 maximum</strong> for net worth over $22 million. Filed with the corporate return (Form 600). We keep the equity and balance sheet net-worth-tax-ready. <a href=\"https://dor.georgia.gov/taxes/corporate-income-and-net-worth-tax\" rel=\"noopener nofollow\">Georgia net worth tax &rarr;</a></p>" },
    { term: "No Local Income Tax, No Reciprocity", def: "<p>Georgia has <strong>no local or city income tax</strong> &mdash; payroll income-tax withholding is state-only (unlike Ohio&rsquo;s municipal tax or Michigan&rsquo;s city tax). But Georgia also has <strong>no income-tax reciprocity</strong> with any state, so a nonresident working in Georgia is generally subject to <strong>Georgia withholding on Georgia-source wages</strong>. We configure QuickBooks Payroll so multi-state and remote staff are withheld correctly.</p>" },
    { term: "PTE Election (HB 149)", def: "<p>Georgia&rsquo;s <strong>elective pass-through entity tax</strong> lets a partnership or S-corp pay Georgia income tax at the entity level (4.99%) so owners can deduct the state tax federally &mdash; a SALT-cap workaround. The CPA makes the election and files; we keep the books PTE-ready.</p>" },
    { term: "Port of Savannah &amp; Logistics", def: "<p>Georgia is a <strong>logistics powerhouse</strong> &mdash; the fast-growing Port of Savannah and Hartsfield-Jackson, the world&rsquo;s busiest airport. For distributors, 3PLs, and importers, that means <strong>landed-cost and inventory tracking</strong>, multi-state sales-tax nexus, and per-customer or per-lane profitability, handled on our national industry pages.</p>" },
    { term: "Transaction Alley (Atlanta Fintech)", def: "<p>Metro Atlanta processes a large share of U.S. card payments &mdash; the fintech corridor known as <strong>&ldquo;Transaction Alley.&rdquo;</strong> For payments, SaaS, and agency businesses, that means <strong>deferred-revenue and processor-reconciliation</strong> work and clean ARR/MRR reporting, with the books kept investor- and PTE-ready.</p>" },
    { term: "Georgia Film Tax Credit", def: "<p>Georgia&rsquo;s film and TV industry (&ldquo;Y&rsquo;allywood&rdquo;) runs on the <strong>Georgia film tax credit</strong>. Production companies and the vendors that serve them need <strong>project-based cost tracking</strong> and clean books to support the credit &mdash; the credit itself is claimed by your CPA; we keep the production accounting clean.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in Georgia. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from TechBrot&rsquo;s lead practice.", lede: "Most Georgia engagements &mdash; bookkeeping, QuickBooks work, payroll, the local-option sales-tax setup, and net-worth-tax-ready books &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/georgia/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Local-option sales tax configured by jurisdiction (combined ~7&ndash;8%)", "State withholding on all Georgia-source wages (no reciprocity)", "Corporate net-worth-tax-ready balance sheet and PTE readiness", "Remote delivery, secure, encrypted access"], cta: "Browse Georgia services &rarr;", href: "#ga-services" },
    { eyebrow: "02 &middot; Curated Georgia partners", heading: "Trusted local Georgia partners.", lede: "When in-person presence in the Atlanta, Savannah, or Augusta metros matters, or local CPA hand-off, engagements can route to a vetted Georgia accounting practice running under TechBrot&rsquo;s standards.", list: ["Georgia-based independent practice", "Local-option sales-tax (LOST/SPLOST/TSPLOST) fluency", "Corporate net worth tax and PTE coordination", "Local CPA and EA hand-off", "Georgia Dept of Revenue and IRS audit-support coordination", "Logistics, fintech, film, and manufacturing industry depth", "Same platform standards as direct delivery"], cta: "See Georgia partner status &rarr;", href: "#ga-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Georgia or federal returns, the corporate income tax, the net worth tax, the individual income tax, or the sales and use tax return. For Georgia Department of Revenue filings, audit representation, and tax strategy, we coordinate with your existing Georgia CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Georgia accounting different. + 4 H3s)
  context: [
    { category: "Local-Option Sales Tax", heading: "The combined rate changes by jurisdiction.", body: ["Georgia&rsquo;s flat 4.99% income tax is simple, so the complexity is the sales tax. The state rate is <strong>4%</strong>, but counties add <strong>local-option taxes</strong> &mdash; LOST, SPLOST, ELOST, TSPLOST, and Atlanta&rsquo;s MOST &mdash; so the combined rate runs about <strong>7% to 8%</strong> depending on the jurisdiction.", "Because the rate is set locally and changes quarterly, QuickBooks has to charge the correct combined rate by location. We configure the sales-tax items by jurisdiction and reconcile them. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "The Corporate Net Worth Tax", heading: "Georgia taxes net worth, not just income.", body: ["Beyond the 4.99% corporate income tax, Georgia levies a <strong>corporate net worth tax</strong> &mdash; a franchise-style tax. A corporation with net worth of <strong>$100,000 or less owes $0</strong> (but files), and it&rsquo;s capped at a <strong>$5,000 maximum</strong> over $22 million.", "It&rsquo;s filed with the income-tax return, so the equity section and balance sheet have to be clean to compute it. We keep the books net-worth-tax-ready so the filing is straightforward for your CPA."] },
    { category: "No Local Tax, No Reciprocity", heading: "State-only withholding &mdash; on all Georgia wages.", body: ["Georgia has <strong>no local or city income tax</strong>, so payroll withholding is state-only &mdash; simpler than Ohio or Michigan. But Georgia has <strong>no reciprocity</strong> with any state, so a nonresident working in Georgia is generally withheld for Georgia on the Georgia-source wages.", "For multi-state and remote employers that&rsquo;s a real setup: we configure QuickBooks Payroll so Georgia-source wages are withheld for Georgia and the other states&rsquo; rules are applied where they belong. <a href=\"/quickbooks/payroll/\">Payroll &rarr;</a>"] },
    { category: "A Logistics, Fintech &amp; Film Economy", heading: "Atlanta and the Port of Savannah.", body: ["Georgia is a <strong>logistics powerhouse</strong> &mdash; the Port of Savannah and Hartsfield-Jackson &mdash; with deep fintech (Atlanta&rsquo;s &ldquo;Transaction Alley&rdquo;), a major film industry, automotive manufacturing (Kia, Hyundai), and a large agriculture base.", "That mix means landed-cost and inventory tracking for distributors, processor reconciliation for fintech, project costing for film and construction, and &mdash; for growing pass-throughs &mdash; the <strong>PTE election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "Georgia operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which jurisdictions you charge sales tax in, whether the net worth tax bites, where your multi-state withholding runs, and whether the PTE election fits.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a Georgia engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Atlanta ecommerce seller", heading: "A seller charging one sales-tax rate statewide.", body: ["<strong>Situation.</strong> An Atlanta-area ecommerce business shipping across Georgia charged a single sales-tax rate for the whole state, hadn&rsquo;t accounted for the county local-option add-ons (LOST/SPLOST/TSPLOST), and had a growing notice risk.", "<strong>What we did.</strong> Configured the <a href=\"/find-an-accountant/georgia/quickbooks-setup/\">QuickBooks sales-tax items</a> by jurisdiction so the correct combined rate applied by destination, reconciled the prior periods, and documented the nexus footprint.", "<strong>Outcome.</strong> The combined rate charged correctly by location; the prior-period exposure quantified for the CPA; clean sales-tax sub-ledgers."] },
    { tag: "Composite &middot; Savannah distributor", heading: "A distributor unsure of its net worth tax and inventory cost.", body: ["<strong>Situation.</strong> A Chatham County distributor near the Port had landed costs buried in one account, couldn&rsquo;t see inventory value cleanly, and didn&rsquo;t know where it stood on the <strong>corporate net worth tax</strong>.", "<strong>What we did.</strong> Rebuilt the <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">QuickBooks file</a> for landed-cost and inventory tracking, cleaned the equity section and balance sheet, and kept the books net-worth-tax-ready.", "<strong>Outcome.</strong> Inventory value visible; the net-worth-tax position clear; a clean basis for the Form 600 filing."] },
    { tag: "Composite &middot; Remote-team employer", heading: "An employer with out-of-state remote staff.", body: ["<strong>Situation.</strong> A metro-Atlanta company had hired remote employees in other states, assumed reciprocity would simplify withholding, and was unsure which state&rsquo;s tax to withhold for whom.", "<strong>What we did.</strong> Mapped each employee&rsquo;s work state, set <a href=\"/find-an-accountant/georgia/small-business-accountant/\">payroll withholding</a> so Georgia-source wages were withheld for Georgia (Georgia has no reciprocity) and the other states&rsquo; rules applied where they belonged.", "<strong>Outcome.</strong> Multi-state withholding correct per employee; no reciprocity assumptions baked in wrong; no surprise notices."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Georgia engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; local-option sales tax by jurisdiction, the net worth tax, multi-state withholding with no reciprocity &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Georgia outcomes.)
  outcomes: [
    { figure: "7&ndash;8%", detail: "combined sales-tax rates configured by jurisdiction, fixing a single-rate statewide setup", meta: "Representative &middot; Atlanta ecommerce" },
    { figure: "$5,000", detail: "corporate net worth tax position measured and the balance sheet kept Form 600-ready", meta: "Representative &middot; Savannah distributor" },
    { figure: "Multi-state", detail: "payroll withholding set per work state with no wrong reciprocity assumptions", meta: "Representative &middot; remote-team employer" },
    { figure: "4.99%", detail: "books kept PTE-ready so the entity-level election could be evaluated cleanly", meta: "Representative &middot; pass-through review" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Georgia &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that you just triggered sales-tax nexus in three more jurisdictions, where your net worth puts you on the franchise-tax schedule, or whether your pass-through should make the PTE election this year. For Georgia businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Georgia-specific tax-position work (including net worth tax and PTE coordination) with your CPA. By application. Best fit: Georgia distributors, fintech and SaaS firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no GA industry pages).
  // (H2: Industry-specific accounting for Georgia's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Logistics &amp; Distribution", href: "/accounting/industries/trucking/", body: "The Port of Savannah and Hartsfield-Jackson make Georgia a logistics hub. <strong>Per-lane and per-customer profitability</strong>, landed cost, fleet depreciation, owner-operator 1099s, and multi-state sales-tax nexus." },
    { num: "02", name: "Manufacturing", href: "/accounting/industries/manufacturing/", body: "Automotive (Kia in West Point, Hyundai near Savannah), aerospace, and food processing. <strong>Job and standard costing</strong>, inventory and WIP, multi-plant reporting, and the net-worth-tax-ready balance sheet." },
    { num: "03", name: "Professional &amp; Financial Services", href: "/accounting/industries/professional-services/", body: "Atlanta fintech &ldquo;Transaction Alley,&rdquo; insurance in Columbus, plus agencies and consultancies statewide. <strong>Project profitability</strong>, processor reconciliation, owner compensation, and PTE planning." },
    { num: "04", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Large hospital systems and practices across the metros, with the Augusta medical corridor. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll." },
    { num: "05", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the fast-growing Atlanta and coastal markets. <strong>Job costing, WIP, and retainage</strong>, certified payroll, and CPA-ready job profitability, with sales-tax sourcing by jurisdiction." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the metros. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and clean books for the net worth tax." },
  ],
  industriesNote: "Georgia industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Georgia&rsquo;s local-option sales tax and net-worth-tax stack. Don&rsquo;t see your sector &mdash; film production, e-commerce, SaaS, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core GA money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Georgia QuickBooks Accountant", href: "/find-an-accountant/georgia/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Georgia businesses. Covers QBO, Desktop, Enterprise, and Payroll, with local-option sales tax and net-worth-tax fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Georgia ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Georgia Small Business Accountant", href: "/find-an-accountant/georgia/small-business-accountant/", body: "Operational accounting for Georgia small businesses &mdash; clean books, local-option sales-tax and net-worth-tax compliance, and CPA-ready statements, with multi-state withholding handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Georgia Bookkeeping Services", href: "/find-an-accountant/georgia/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Georgia businesses. Bank reconciliation, local-option sales-tax sub-reconciliation, net-worth-tax-ready balance sheet, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Georgia bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Georgia QuickBooks Cleanup", href: "/find-an-accountant/georgia/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong sales-tax jurisdictions, untracked landed cost, a messy equity section, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Georgia cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Georgia QuickBooks Setup", href: "/find-an-accountant/georgia/quickbooks-setup/", body: "Professional QuickBooks implementation for Georgia businesses &mdash; chart of accounts for your industry, local-option sales-tax items by jurisdiction, and state payroll withholding. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Georgia setup &rarr;" },
  ],
  servicesNote: "Other Georgia engagements route to our national service pages, configured for Georgia: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (multi-state)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance (local-option)</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (net worth tax/PTE)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to GA children + global pages (no GA pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Georgia engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/georgia/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, local-option sales-tax sub-reconciliation, net-worth-tax-ready balance sheet, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and sales-tax jurisdiction complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/georgia/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, local-option sales-tax items by jurisdiction, state payroll withholding" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/georgia/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong sales-tax jurisdictions and a messy equity section are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "4% state + local options (combined ~7&ndash;8%) &middot; multi-state nexus" },
    { svc: "Payroll setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "State-only withholding &middot; all Georgia-source wages (no reciprocity) &middot; multi-state staff" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "Georgia and multi-state withholding per employee; no reciprocity shortcuts" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Georgia-aware strategic finance; net worth tax, PTE, and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of sales-tax jurisdictions you sell into, whether the net worth tax applies, your multi-state footprint, industry specifics, and how far behind the books are. TechBrot does not file Georgia returns, the corporate income or net worth tax, the individual income tax, or the sales-tax return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Georgia businesses statewide. + 2 H3s)
  cities: [
    { name: "Atlanta", county: "Fulton County" },
    { name: "Savannah", county: "Chatham County" },
    { name: "Augusta", county: "Richmond County" },
    { name: "Columbus", county: "Muscogee County" },
    { name: "Macon", county: "Bibb County" },
    { name: "Athens", county: "Clarke County" },
    { name: "Marietta", county: "Cobb County" },
    { name: "Alpharetta", county: "Fulton County" },
  ],
  countyProse: "TechBrot serves all 159 Georgia counties &mdash; <strong>Fulton</strong> and <strong>Cobb</strong> anchoring metro Atlanta and its tech and aerospace corridors; <strong>Chatham</strong> (Savannah) leading coastal logistics; <strong>Richmond</strong> (Augusta), <strong>Muscogee</strong> (Columbus), <strong>Bibb</strong> (Macon), and <strong>Clarke</strong> (Athens) across the secondary metros; the fast-growing collar counties around Atlanta; and the agricultural counties of South Georgia. Remote, fixed-fee service reaches the whole state; each jurisdiction sets its own combined sales-tax rate, which we confirm before charging.",
  citiesNote: "Don&rsquo;t see your city? All 159 Georgia counties are served via remote engagement delivery. <a href=\"/contact/?intent=georgia&state=georgia&source_type=location&funnel_stage=MOFU\">Start a Georgia conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across distribution, manufacturing, and professional services &mdash; the judgment behind every Georgia engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (GA-localized). (H2: Trusted Georgia partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Georgia tax fluency", detail: "Local-option sales tax by jurisdiction (LOST/SPLOST/ELOST/TSPLOST), the corporate net worth tax, state withholding with no reciprocity, and PTE coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Landed cost and per-lane profitability for logistics, job costing for manufacturing and construction, and multi-state nexus across the Southeast." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (GA-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Georgia operational depth", body: "The flat 4.99% income tax, the county local-option sales tax (4% state plus LOST/SPLOST/ELOST/TSPLOST), the corporate net worth tax, and state withholding on all Georgia-source wages with no reciprocity. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-jurisdiction, sales-tax-heavy Georgia engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Georgia business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Georgia businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Georgia CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Georgia / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "Local-option sales tax by jurisdiction", us: "<strong>Configured by location (~7&ndash;8%)</strong>", cpa: "Varies; not their primary focus", remote: "Often one rate &mdash; wrong", winner: "us" },
    { dim: "Corporate net worth tax readiness", us: "<strong>Balance sheet kept Form 600-ready</strong>", cpa: "Files it; not in the books daily", remote: "Rarely tracked", winner: "us" },
    { dim: "Multi-state withholding (no reciprocity)", us: "<strong>Set per work state correctly</strong>", cpa: "Usually; varies by firm", remote: "Often wrong assumptions", winner: "us" },
    { dim: "PTE election readiness", us: "<strong>Books kept PTE-ready</strong>", cpa: "Makes the election; files", remote: "Rarely considered", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Georgia DOR / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Georgia Department of Revenue filings, the corporate income and net worth tax, the PTE election, and representation, use a licensed Georgia CPA or EA. For QuickBooks operations, bookkeeping, local-option sales-tax setup, net-worth-tax-ready books, and multi-state withholding &mdash; TechBrot is built for that. Most Georgia clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Georgia official sources (from GA-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Georgia Department of Revenue", href: "https://dor.georgia.gov/", detail: "Authoritative source for the individual and corporate income tax, the net worth tax, sales and use tax, and employer withholding." },
    { name: "Georgia Dept of Revenue &mdash; Tax Tables &amp; Rate Schedule", href: "https://dor.georgia.gov/tax-tables-georgia-tax-rate-schedule", detail: "The flat 4.99% individual income-tax rate for 2026 and the standard deduction amounts." },
    { name: "Georgia Dept of Revenue &mdash; Corporate Income and Net Worth Tax", href: "https://dor.georgia.gov/taxes/corporate-income-and-net-worth-tax", detail: "The 4.99% corporate income tax and the net worth tax ($0 under $100,000 net worth, $5,000 maximum over $22 million)." },
    { name: "Georgia Dept of Revenue &mdash; Sales Tax Rates (General)", href: "https://dor.georgia.gov/sales-tax-rates-general", detail: "The 4% state rate and the county local-option add-ons &mdash; the authority for the combined jurisdiction rate, updated quarterly." },
    { name: "Georgia Dept of Revenue &mdash; Important Tax Updates", href: "https://dor.georgia.gov/taxes/important-tax-updates", detail: "Current-year legislative changes, including the income-tax rate step-down and the larger standard deduction." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Georgia-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Georgia QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Georgia businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to Georgia businesses statewide &mdash; remote-first from our Delaware headquarters. All 159 counties covered, from metro Atlanta&rsquo;s fintech, logistics, and film economy to the Port of Savannah, Augusta, Columbus, Macon, Athens, and Marietta. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is Georgia&rsquo;s income tax rate for 2026?", a: "Georgia is now a flat tax: 4.99% for 2026. HB 1437 (2022) converted Georgia from graduated brackets to a flat income tax, and HB 463 lowered the rate to 4.99% effective Jan 1, 2026 (from 5.19% in 2025), with provisions for further annual reductions and a larger standard deduction ($32,000 married-filing-joint, $16,000 single). The corporate income tax is also a flat 4.99%. Because there&rsquo;s no local income tax, Georgia withholding is state-only &mdash; but there&rsquo;s no reciprocity, so all Georgia-source wages are withheld for the state." },
    { q: "How does Georgia&rsquo;s sales tax work, and does it vary?", a: "Yes. Georgia&rsquo;s sales and use tax is 4% at the state level, plus county local-option taxes &mdash; LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST &mdash; so the combined rate varies by jurisdiction, commonly 7% to 8%, and it changes quarterly. QuickBooks has to charge the correct combined rate by location. If you sell across the Florida, Alabama, or Tennessee lines, we also scope where multi-state nexus is triggered." },
    { q: "Does Georgia have a corporate net worth tax?", a: "Yes. Separately from the 4.99% corporate income tax, Georgia levies a corporate net worth tax &mdash; a franchise-style tax. A corporation with net worth of $100,000 or less owes $0 (but still files), and the tax is graduated up to a maximum of $5,000 for net worth over $22 million. It&rsquo;s filed with the corporate income-tax return (Form 600), so the equity section and balance sheet have to be clean. We keep the books net-worth-tax-ready so the filing is straightforward for your CPA." },
    { q: "Does Georgia have local income taxes or reciprocity?", a: "Georgia has no local or city income tax, so payroll income-tax withholding is state-only &mdash; simpler than Ohio or Michigan. But Georgia has no income-tax reciprocity with any state, so a nonresident who works in Georgia is generally subject to Georgia withholding on the Georgia-source wages. For multi-state and remote employers, that means we configure QuickBooks Payroll so Georgia-source wages are withheld for Georgia and the other states&rsquo; rules apply where they belong &mdash; no reciprocity shortcuts." },
    { q: "What is the Georgia PTE election?", a: "It&rsquo;s an elective pass-through entity tax (HB 149) that lets a partnership or S-corp pay Georgia income tax at the entity level (at the flat 4.99% rate), so the owners can deduct the state tax on their federal return &mdash; a workaround for the federal SALT cap. The CPA makes the election and files; we keep the books PTE-ready so the numbers are clean when the decision is made. Whether it&rsquo;s worthwhile depends on your situation, which is a good discovery-call conversation." },
    { q: "Does TechBrot file Georgia tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Georgia or federal returns, the corporate income tax, the net worth tax, the individual income tax, the sales and use tax return, or the pass-through entity election, and we do not represent clients before the Georgia Department of Revenue. We deliver clean, CPA-ready bookkeeping, configure the local-option sales-tax tracking and state withholding, and coordinate with your Georgia CPA or EA and the Department of Revenue, who file." },
    { q: "How does a Georgia engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Georgia operational context &mdash; which sales-tax jurisdictions you sell into, whether the net worth tax applies, where your multi-state withholding runs, whether the PTE election fits &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Georgia bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; payroll setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the number of sales-tax jurisdictions you sell into, the net worth tax, your multi-state footprint, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Georgia practice", detail: "All 159 counties served remotely &middot; Atlanta, Savannah, Augusta, Columbus, Macon, Athens, Marietta, Alpharetta &middot; Industries handled on the national pages, configured for GA" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Georgia statutory references reviewed against Georgia Department of Revenue primary sources &middot; The flat 4.99% income and corporate rate (2026), the 4% state sales tax, and the net-worth-tax thresholds are stated as verified &middot; Combined jurisdiction sales-tax rates framed qualitatively and verified against the DOR rate chart &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — Florida + Delaware exist (link); NC/TN coming soon (no href -> hub). (H2: Multi-state Georgia businesses. + H3s)
  related: [
    { name: "Florida", href: "/find-an-accountant/florida/", body: "Georgia businesses with Florida operations or staff to the south &mdash; Florida&rsquo;s no personal income tax, its 6% sales tax with county surtaxes, and the multi-state nexus questions, scoped alongside your Georgia books.", cta: "ProAdvisors in Florida &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "Georgia businesses with a Delaware entity or Mid-Atlantic operations &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your Georgia books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "North Carolina &amp; Tennessee", body: "Georgia businesses expanding into the Carolinas or Tennessee &mdash; North Carolina&rsquo;s flat income tax and franchise tax, Tennessee&rsquo;s no-income-tax-but-franchise-and-excise regime &mdash; with cross-border payroll and sales-tax nexus scoped as those state pages come online.", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/georgia/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Georgia QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for Georgia businesses across all 159 counties — from metro Atlanta's fintech, logistics, and film economy to the Port of Savannah, Augusta, Columbus, Macon, Athens, and Marietta. Built around the flat 4.99% income tax (2026), the 4% state sales tax plus county local-option add-ons (LOST/SPLOST/ELOST/TSPLOST), the corporate net worth tax, and state withholding on all Georgia-source wages (no reciprocity).","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/georgia-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ga-in-brief-text","#ga-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Georgia"}]},
        {"@type":"Service","@id":url+"#service","name":"Georgia QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with Georgia state withholding (no local income tax, no reciprocity), local-option sales tax (4% state plus LOST/SPLOST/ELOST/TSPLOST, combined ~7-8% by jurisdiction), corporate net worth tax readiness, and PTE election support for Georgia businesses across all 159 counties. Delivered remotely by TechBrot. Independent Certified QuickBooks ProAdvisor firm; does not file Georgia or federal returns, the corporate income tax, the net worth tax, the individual income tax, the sales-tax return, or the PTE election — coordinates with the client's CPA or EA and the Georgia Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Georgia","sameAs":"https://en.wikipedia.org/wiki/Georgia_(U.S._state)","containsPlace":[
          {"@type":"City","name":"Atlanta"},{"@type":"City","name":"Savannah"},{"@type":"City","name":"Augusta"},{"@type":"City","name":"Columbus"},{"@type":"City","name":"Macon"},{"@type":"City","name":"Athens"},{"@type":"City","name":"Marietta"},{"@type":"City","name":"Alpharetta"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Georgia small and mid-sized businesses, logistics and distribution operators, manufacturers, fintech and professional-services firms, film and production companies, healthcare practices, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Georgia accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Georgia QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Georgia Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Georgia Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Georgia QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Georgia QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Georgia — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
