/* /find-an-accountant/north-carolina/ — t-state-pillar PILLAR. North Carolina is a CORE state built to the 6-essentials
 * depth (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. NC is an areaServed-ONLY state: TechBrot serves
 * North Carolina remotely from the Delaware HQ, so this pillar carries NO street address, NO PostalAddress, NO geo, NO
 * LocalBusiness node, and NO hasMap (all states are areaServed-only (no street address)). Service + areaServed (State of North Carolina +
 * named metros) only; provider = #organization. Mirrors the PA/NJ/MD/VA/OH/MI/GA core-state exemplars: OMITS `ecosystem`;
 * `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the NC children; `cities` name+county with NO
 * href; pricing rows -> 5 children + global. North Carolina continues WAVE C (Sunbelt).
 *
 * NORTH CAROLINA FACTS (verified 2026-06-26 against the NC Dept of Revenue — see _build/strategy/NC-FACTS.md):
 *  · State individual income tax — a FLAT 3.99% rate for 2026 (down from 4.25% in 2025; further trigger-based reductions
 *    possible for 2027+ under S.L. 2023-134). The lowest flat rate in our Sunbelt set (below GA's 4.99%).
 *  · Corporate income tax — being PHASED OUT TO ZERO (the NC-distinct headline; NC is the only state eliminating it).
 *    2026 rate 2.00% (2025 was 2.25%); reaches 0% by 2030 (S.L. 2021-180 / G.S. 105-130.3C). Intermediate yearly steps
 *    framed qualitatively; the 2026=2.00% and zero-by-2030 endpoint are stated.
 *  · Franchise tax — the SURVIVING distinct business tax (does NOT phase out): C-corps $1.50 per $1,000 of tax base,
 *    $500 max on the first $1,000,000, $200 minimum; S-corps $200 first $1M + $1.50/$1,000 above; holding companies
 *    capped at $150,000. Filed on CD-405/CD-401S. The franchise tax is the NC hook (vs GA's net worth tax).
 *  · Taxed PTE election (G.S. 105-154.1) — partnership/S-corp may elect to pay NC income tax at the entity level as a
 *    SALT-cap workaround; advisory hook.
 *  · Sales & use tax — 4.75% STATE + 2.00%/2.25% county local + 0.50% transit (4 counties), so combined runs 6.75%
 *    (56 counties), 7.00% (many), 7.25% (Mecklenburg/Wake), 7.50% (Durham/Orange). Eff July 1 2026 Mecklenburg
 *    (Charlotte) adds 1% -> 8.25%. County-variable; QuickBooks must charge the right combined rate by location.
 *  · NO local/city income tax (clean contrast to OH municipal + MI city tax) AND NO income-tax reciprocity with any
 *    state (like GA) — a nonresident working in NC is generally subject to NC withholding on NC-source wages.
 *  · Geography — 100 counties; Charlotte (Mecklenburg; #2 US banking center, fintech), Raleigh (Wake; Research Triangle,
 *    state capital), Greensboro (Guilford; the Triad, manufacturing/logistics), Durham (Durham; RTP biotech/pharma,
 *    Duke), Winston-Salem (Forsyth), Fayetteville (Cumberland; Fort Bragg/Liberty), Wilmington (New Hanover; the Port,
 *    film), Asheville (Buncombe; tourism).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with Intuit.
 * It does NOT file NC or federal returns, the corporate income tax, the franchise tax, the individual income tax, the
 * sales-tax return, or the Taxed PTE election as agent; it keeps the books and coordinates with the client's CPA/EA and
 * the NC Dept of Revenue. Reviews are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented
 * reviewers, no AggregateRating. Outcomes/scenarios are explicitly representative composites — never real-client claims.
 * No founder/personal name in visible content; David Westgate appears only as the named lead ProAdvisor/operator. The
 * flat 3.99% income tax (2026), the 2.00% corporate rate (2026) phasing to ZERO by 2030, the franchise-tax figures, and
 * the 4.75% state sales tax are VERIFIED and stated; combined county sales-tax rates framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in North Carolina, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, North Carolina bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to North Carolina businesses across <strong>all 100 counties</strong> &mdash; from Charlotte&rsquo;s banking and fintech corridor to the Research Triangle&rsquo;s tech and biotech, the Triad&rsquo;s advanced manufacturing, Wilmington, Fayetteville, and Asheville. North Carolina&rsquo;s income tax is now a low <strong>flat 3.99% for 2026</strong> &mdash; still stepping down &mdash; so the operational work lives elsewhere. The headline is the <strong>corporate income tax being phased out entirely</strong>: it&rsquo;s <strong>2.00% for 2026</strong> and reaches <strong>zero by 2030</strong> &mdash; but the <strong>franchise tax survives it</strong> ($1.50 per $1,000 of tax base, $200 minimum, $500 max on the first $1,000,000, holding companies capped at $150,000). Sales tax is <strong>4.75% at the state level plus county and transit rates</strong>, so the combined rate varies by county &mdash; from <strong>6.75% to 7.50%</strong>, with Mecklenburg (Charlotte) rising to 8.25% on July 1, 2026. North Carolina has <strong>no local income tax but no reciprocity</strong>, so all North Carolina-source wages are withheld for the state, with an elective <strong>Taxed PTE</strong> as a SALT-cap workaround. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file North Carolina returns, the corporate income or franchise tax, the individual income tax, or the sales-tax return &mdash; we keep the books and coordinate with your CPA and the North Carolina Department of Revenue.",

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
    { value: "100", label: "North Carolina counties served &mdash; Charlotte and the Triangle to the coast and the mountains" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "3.99%", label: "Flat North Carolina income-tax rate for 2026 &mdash; down from 4.25%; still on a legislated path downward" },
    { figure: "2.00% &rarr; 0%", label: "Corporate income tax for 2026 &mdash; being phased out entirely, reaching zero by 2030" },
    { figure: "$1.50 / $1,000", label: "Franchise tax that survives the phase-out &mdash; $200 minimum, $500 max on the first $1,000,000 of tax base" },
    { figure: "4.75% + local", label: "Sales tax &mdash; 4.75% state plus a county (and sometimes transit) rate, so the combined rate varies (6.75&ndash;7.50%)" },
    { figure: "No local tax", label: "No local or city income tax &mdash; but no reciprocity either, so all North Carolina-source wages are withheld for the state" },
    { figure: "100", label: "North Carolina counties &mdash; all served remotely, fixed-fee" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in North Carolina, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve North Carolina businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to North Carolina businesses across all 100 counties.</strong> Coverage spans Charlotte&rsquo;s banking and fintech corridor, the Research Triangle (Raleigh-Durham), the Triad (Greensboro/Winston-Salem), plus Fayetteville, Wilmington, and Asheville. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is North Carolina&rsquo;s income tax rate, and is it flat?", a: "<strong>Yes &mdash; North Carolina is a flat 3.99% for 2026</strong>, down from 4.25% in 2025, with further trigger-based reductions possible for 2027 and beyond. It&rsquo;s the lowest flat income-tax rate in the Southeast set we serve. Because there&rsquo;s <strong>no local income tax</strong>, North Carolina payroll withholding is state-only &mdash; but North Carolina has <strong>no reciprocity</strong>, so all North Carolina-source wages are withheld for the state, which matters for multi-state and remote employers. We configure QuickBooks Payroll accordingly." },
    { q: "Is North Carolina really eliminating its corporate income tax?", a: "<strong>Yes.</strong> North Carolina is the only state actively phasing out its corporate income tax. The rate is <strong>2.00% for 2026</strong> (down from 2.25% in 2025) and is scheduled to reach <strong>zero by 2030</strong> &mdash; no corporate income tax at all. <strong>But the franchise tax survives it:</strong> a net-worth-style annual business tax of $1.50 per $1,000 of the tax base, with a $200 minimum and a $500 cap on the first $1,000,000 (holding companies capped at $150,000). So &ldquo;no corporate income tax&rdquo; doesn&rsquo;t mean no business tax &mdash; we keep the books franchise-tax-ready for your CPA." },
    { q: "How does North Carolina&rsquo;s sales tax work?", a: "North Carolina&rsquo;s sales and use tax is <strong>4.75% at the state level, plus a county rate of 2.00% or 2.25%</strong>, and four counties add a <strong>0.50% transit rate</strong> &mdash; so the combined rate varies by county: <strong>6.75% in most counties, 7.00% in many, 7.25% in Mecklenburg and Wake, and 7.50% in Durham and Orange</strong>. Effective July 1, 2026, Mecklenburg (Charlotte) adds 1%, taking it to 8.25%. Because the rate is set at the county level, QuickBooks has to apply the correct combined rate by location, and we scope multi-state nexus for businesses selling across the Virginia, South Carolina, or Georgia lines." },
    { q: "Does TechBrot file North Carolina taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file North Carolina or federal returns, the corporate income tax, the franchise tax, the individual income tax, the sales and use tax return, or the Taxed PTE election, and we do not represent clients before the North Carolina Department of Revenue</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure the county sales-tax tracking and state withholding, and coordinate with your existing North Carolina CPA or EA and the Department of Revenue, who file." },
  ],

  // STATE GLOSSARY — the NC terms that matter. (H2: The North Carolina terms that matter…)
  stateTerms: [
    { term: "Corporate Income Tax Phase-Out", def: "<p>North Carolina&rsquo;s defining tax story: the <strong>corporate income tax is being eliminated</strong> &mdash; <strong>2.00% for 2026</strong>, on a legislated path to <strong>zero by 2030</strong>. North Carolina is the only state phasing its corporate income tax out entirely. It changes entity-choice math, but the franchise tax remains. Confirm the current rate with the <a href=\"https://www.ncdor.gov/taxes-forms/corporate-income-franchise-tax/corporate-income-and-franchise-tax-rates\" rel=\"noopener nofollow\">NCDOR</a>.</p>" },
    { term: "Franchise Tax", def: "<p>The business tax that <strong>survives the corporate-income-tax phase-out</strong>: a net-worth-style annual tax of <strong>$1.50 per $1,000 of the tax base</strong>, with a <strong>$200 minimum</strong> and a <strong>$500 cap on the first $1,000,000</strong> (holding companies capped at $150,000). Filed on the CD-405 / CD-401S. We keep the equity and balance sheet franchise-tax-ready. <a href=\"https://www.ncdor.gov/taxes-forms/corporate-income-franchise-tax/corporate-tax-law/franchise-tax\" rel=\"noopener nofollow\">NC franchise tax &rarr;</a></p>" },
    { term: "Flat 3.99% Income Tax", def: "<p>North Carolina&rsquo;s individual income tax is a <strong>single flat 3.99% rate for 2026</strong> &mdash; down from 4.25% in 2025, with further trigger-based reductions possible. It&rsquo;s the lowest flat rate in the Southeast set we serve. Confirm the current rate with the <a href=\"https://www.ncdor.gov/taxes-forms/individual-income-tax/tax-rate-schedules\" rel=\"noopener nofollow\">NCDOR rate schedule</a>.</p>" },
    { term: "County-Variable Sales Tax", def: "<p>North Carolina&rsquo;s sales tax is <strong>4.75% state plus a county rate (2.00% or 2.25%) and a transit rate (0.50% in four counties)</strong>, so the combined rate runs <strong>6.75% to 7.50%</strong> by county &mdash; and <strong>Mecklenburg (Charlotte) rises to 8.25% on July 1, 2026</strong>. Configuring QuickBooks to charge the right combined rate by location is the core NC sales-tax engagement. <a href=\"https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates/current-sales-and-use-tax-rates\" rel=\"noopener nofollow\">NC rates &rarr;</a></p>" },
    { term: "No Local Income Tax, No Reciprocity", def: "<p>North Carolina has <strong>no local or city income tax</strong> &mdash; payroll income-tax withholding is state-only (unlike Ohio&rsquo;s municipal tax or Michigan&rsquo;s city tax). But North Carolina also has <strong>no income-tax reciprocity</strong> with any state, so a nonresident working in North Carolina is generally subject to <strong>North Carolina withholding on North Carolina-source wages</strong>. We configure QuickBooks Payroll so multi-state and remote staff are withheld correctly.</p>" },
    { term: "Taxed PTE Election", def: "<p>North Carolina&rsquo;s <strong>Taxed Pass-Through Entity election</strong> lets a partnership or S-corp pay North Carolina income tax at the entity level so owners can deduct the state tax federally &mdash; a SALT-cap workaround. The CPA makes the election and files; we keep the books Taxed-PTE-ready.</p>" },
    { term: "Charlotte Banking &amp; Fintech", def: "<p>Charlotte is the <strong>second-largest banking center in the U.S.</strong> &mdash; Bank of America&rsquo;s headquarters, Truist, and a major Wells Fargo hub &mdash; with a deep fintech and payments sector. For finance, fintech, and SaaS businesses, that means <strong>processor reconciliation and clean ARR/MRR reporting</strong>, with the books kept investor- and PTE-ready.</p>" },
    { term: "The Research Triangle (RTP)", def: "<p>Raleigh-Durham&rsquo;s <strong>Research Triangle Park</strong> anchors North Carolina&rsquo;s tech, biotech, and pharma economy, alongside Duke, UNC, and NC State. For R&amp;D-heavy and venture-backed businesses, that means <strong>grant and R&amp;D-credit-ready records, deferred revenue, and clean cap-table-adjacent books</strong>, handled on our national industry pages.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in North Carolina. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from TechBrot&rsquo;s lead practice.", lede: "Most North Carolina engagements &mdash; bookkeeping, QuickBooks work, payroll, the county sales-tax setup, and franchise-tax-ready books &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/north-carolina/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "County sales tax configured by location (combined 6.75&ndash;7.50%)", "State withholding on all North Carolina-source wages (no reciprocity)", "Franchise-tax-ready balance sheet and Taxed PTE readiness", "Remote delivery, secure, encrypted access"], cta: "Browse North Carolina services &rarr;", href: "#nc-services" },
    { eyebrow: "02 &middot; Curated North Carolina partners", heading: "Trusted local North Carolina partners.", lede: "When in-person presence in the Charlotte, Raleigh, or Greensboro metros matters, or local CPA hand-off, engagements can route to a vetted North Carolina accounting practice running under TechBrot&rsquo;s standards.", list: ["North Carolina-based independent practice", "County sales-tax and franchise-tax fluency", "Corporate-tax-phase-out and Taxed PTE coordination", "Local CPA and EA hand-off", "NC Dept of Revenue and IRS audit-support coordination", "Banking/fintech, tech/biotech, and manufacturing industry depth", "Same platform standards as direct delivery"], cta: "See North Carolina partner status &rarr;", href: "#nc-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file North Carolina or federal returns, the corporate income tax, the franchise tax, the individual income tax, or the sales and use tax return. For North Carolina Department of Revenue filings, audit representation, and tax strategy, we coordinate with your existing North Carolina CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes North Carolina accounting different. + 4 H3s)
  context: [
    { category: "The Vanishing Corporate Income Tax", heading: "Zero corporate income tax by 2030 &mdash; but not zero business tax.", body: ["North Carolina is the only state <strong>eliminating its corporate income tax</strong> &mdash; 2.00% for 2026, on the way to zero by 2030. That changes entity-choice and tax-planning math for C-corps.", "But the <strong>franchise tax survives</strong>: $1.50 per $1,000 of the tax base, $200 minimum, $500 cap on the first $1,000,000. &ldquo;No corporate income tax&rdquo; doesn&rsquo;t mean no business tax, so we keep the equity and balance sheet franchise-tax-ready for your CPA."] },
    { category: "The Franchise Tax", heading: "A net-worth-style tax that doesn&rsquo;t go away.", body: ["North Carolina&rsquo;s <strong>franchise tax</strong> is an annual business tax on the corporation&rsquo;s tax base &mdash; <strong>$1.50 per $1,000</strong>, with a $200 minimum and a $500 cap on the first $1,000,000, and holding companies capped at $150,000.", "Because it&rsquo;s computed off the tax base (largely net worth), the equity section and balance sheet have to be clean. We keep the books franchise-tax-ready so the CD-405/CD-401S filing is straightforward."] },
    { category: "County-Variable Sales Tax", heading: "4.75% state &mdash; plus a county rate that changes the total.", body: ["North Carolina&rsquo;s sales tax is <strong>4.75% state plus a county (2.00%/2.25%) and sometimes transit (0.50%) rate</strong>, so the combined rate runs <strong>6.75% to 7.50%</strong>, with Mecklenburg (Charlotte) rising to 8.25% in mid-2026.", "Which rate applies depends on the county, so QuickBooks has to be set up to charge the right combined rate by location. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "A Banking, Tech &amp; Manufacturing Economy", heading: "Charlotte, the Research Triangle, and the Triad.", body: ["North Carolina is <strong>banking and fintech</strong> in Charlotte, <strong>tech, biotech, and pharma</strong> in the Research Triangle, and <strong>advanced manufacturing</strong> in the Triad &mdash; with deep logistics, agriculture, and military sectors.", "That mix means processor reconciliation for fintech, R&amp;D-credit-ready records for tech and biotech, job costing for manufacturing, and &mdash; for growing pass-throughs &mdash; the <strong>Taxed PTE election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "North Carolina operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; whether the franchise tax bites, which county sales-tax rate to charge, where your multi-state withholding runs, and whether the Taxed PTE election fits.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a North Carolina engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Charlotte fintech firm", heading: "A firm with processor revenue it couldn&rsquo;t reconcile.", body: ["<strong>Situation.</strong> A Charlotte payments business had gross processor settlements landing in one account, couldn&rsquo;t separate fees from revenue, and its books couldn&rsquo;t support either the franchise tax or an investor conversation.", "<strong>What we did.</strong> Rebuilt the <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">QuickBooks file</a> for processor reconciliation and clean revenue recognition, cleaned the equity section, and kept the books franchise-tax- and Taxed-PTE-ready.", "<strong>Outcome.</strong> Revenue and fees separated cleanly; the franchise-tax base clear; investor- and CPA-ready statements."] },
    { tag: "Composite &middot; Triad manufacturer", heading: "A manufacturer unsure what the corporate-tax phase-out meant.", body: ["<strong>Situation.</strong> A Guilford County manufacturer organized as a C-corp had messy job costing and didn&rsquo;t understand how the <strong>corporate income tax phase-out</strong> and the surviving <strong>franchise tax</strong> affected it.", "<strong>What we did.</strong> Rebuilt the <a href=\"/find-an-accountant/north-carolina/quickbooks-setup/\">QuickBooks file</a> for job costing and inventory, kept the balance sheet franchise-tax-ready, and gave the CPA clean numbers to model the entity-choice question.", "<strong>Outcome.</strong> Job-level margin visible; the franchise-tax position clear; a clean basis for the CPA&rsquo;s planning."] },
    { tag: "Composite &middot; Remote-team employer", heading: "An employer with out-of-state remote staff.", body: ["<strong>Situation.</strong> A Raleigh company had hired remote employees in Virginia and South Carolina, assumed reciprocity would simplify withholding, and was unsure which state&rsquo;s tax to withhold for whom.", "<strong>What we did.</strong> Mapped each employee&rsquo;s work state, set <a href=\"/find-an-accountant/north-carolina/small-business-accountant/\">payroll withholding</a> so North Carolina-source wages were withheld for NC (no reciprocity) and the other states&rsquo; rules applied where they belonged.", "<strong>Outcome.</strong> Multi-state withholding correct per employee; no reciprocity assumptions baked in wrong; no surprise notices."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common North Carolina engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; the corporate-tax phase-out and surviving franchise tax, county sales tax by location, multi-state withholding with no reciprocity &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative North Carolina outcomes.)
  outcomes: [
    { figure: "$1.50/$1,000", detail: "franchise-tax base measured and the balance sheet kept CD-405-ready as the corporate income tax phases out", meta: "Representative &middot; manufacturer review" },
    { figure: "6.75&ndash;7.50%", detail: "county sales-tax rates configured by location, fixing a single-rate statewide setup", meta: "Representative &middot; multi-county seller" },
    { figure: "Multi-state", detail: "payroll withholding set per work state with no wrong reciprocity assumptions", meta: "Representative &middot; remote-team employer" },
    { figure: "Taxed PTE", detail: "books kept ready so the entity-level election could be evaluated cleanly", meta: "Representative &middot; pass-through review" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in North Carolina &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you what the corporate-income-tax phase-out means for your entity choice, where your net worth puts you on the franchise-tax schedule, or whether your pass-through should make the Taxed PTE election this year. For North Carolina businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and North Carolina-specific tax-position work (including franchise tax and Taxed PTE coordination) with your CPA. By application. Best fit: North Carolina fintech and SaaS firms, manufacturers, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no NC industry pages).
  // (H2: Industry-specific accounting for North Carolina's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Finance, Fintech &amp; Professional Services", href: "/accounting/industries/professional-services/", body: "Charlotte is the #2 U.S. banking center, with a deep fintech and payments sector. <strong>Processor reconciliation</strong>, project profitability, owner compensation, the franchise-tax base, and Taxed PTE planning." },
    { num: "02", name: "Technology &amp; Biotech", href: "/accounting/industries/professional-services/", body: "The Research Triangle &mdash; RTP, Duke, UNC, NC State. <strong>R&amp;D-credit-ready records</strong>, deferred revenue, clean ARR/MRR reporting, and investor- and franchise-tax-ready books for venture-backed firms." },
    { num: "03", name: "Manufacturing", href: "/accounting/industries/manufacturing/", body: "Advanced manufacturing across the Triad &mdash; automotive batteries (Toyota near Greensboro), aerospace, and the furniture and textile base. <strong>Job and standard costing</strong>, inventory and WIP, and the franchise-tax balance sheet." },
    { num: "04", name: "Logistics &amp; Distribution", href: "/accounting/industries/trucking/", body: "The Triad inland hub and the Port of Wilmington. <strong>Per-lane and per-customer profitability</strong>, landed cost, fleet depreciation, owner-operator 1099s, and multi-state sales-tax nexus." },
    { num: "05", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Large hospital systems and practices statewide, with the Triangle&rsquo;s medical and pharma corridor. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll." },
    { num: "06", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the fast-growing Charlotte, Triangle, and coastal markets. <strong>Job costing, WIP, and retainage</strong>, certified payroll, and CPA-ready job profitability, with county sales-tax sourcing." },
  ],
  industriesNote: "North Carolina industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for North Carolina&rsquo;s franchise-tax and county-sales-tax stack. Don&rsquo;t see your sector &mdash; agriculture, e-commerce, SaaS, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core NC money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "North Carolina QuickBooks Accountant", href: "/find-an-accountant/north-carolina/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for North Carolina businesses. Covers QBO, Desktop, Enterprise, and Payroll, with franchise-tax and county-sales-tax fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "North Carolina ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "North Carolina Small Business Accountant", href: "/find-an-accountant/north-carolina/small-business-accountant/", body: "Operational accounting for North Carolina small businesses &mdash; clean books, franchise-tax and county-sales-tax compliance, and CPA-ready statements, with multi-state withholding handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "North Carolina Bookkeeping Services", href: "/find-an-accountant/north-carolina/bookkeeping-services/", body: "Recurring fixed-fee monthly close for North Carolina businesses. Bank reconciliation, county sales-tax sub-reconciliation, franchise-tax-ready balance sheet, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "North Carolina bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "North Carolina QuickBooks Cleanup", href: "/find-an-accountant/north-carolina/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong county sales-tax rates, a messy equity section that obscures the franchise-tax base, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "North Carolina cleanup &rarr;" },
    { eyebrow: "Service 05", name: "North Carolina QuickBooks Setup", href: "/find-an-accountant/north-carolina/quickbooks-setup/", body: "Professional QuickBooks implementation for North Carolina businesses &mdash; chart of accounts for your industry, county sales-tax items by location, and state payroll withholding. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "North Carolina setup &rarr;" },
  ],
  servicesNote: "Other North Carolina engagements route to our national service pages, configured for North Carolina: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (multi-state)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance (county)</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (franchise tax/Taxed PTE)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to NC children + global pages (no NC pricing page on a core state).
  // (H2: Fixed-fee starting ranges for North Carolina engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/north-carolina/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, county sales-tax sub-reconciliation, franchise-tax-ready balance sheet, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and entity/franchise-tax complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/north-carolina/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, county sales-tax items by location, state payroll withholding" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/north-carolina/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong county sales-tax rates and a messy equity section are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "4.75% state + county/transit (combined 6.75&ndash;7.50%) &middot; multi-state nexus" },
    { svc: "Payroll setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "State-only withholding &middot; all North Carolina-source wages (no reciprocity) &middot; multi-state staff" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "North Carolina and multi-state withholding per employee; no reciprocity shortcuts" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "NC-aware strategic finance; franchise tax, Taxed PTE, and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of sales-tax counties you sell into, whether the franchise tax applies, your multi-state footprint, industry specifics, and how far behind the books are. TechBrot does not file North Carolina returns, the corporate income or franchise tax, the individual income tax, or the sales-tax return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving North Carolina businesses statewide. + 2 H3s)
  cities: [
    { name: "Charlotte", county: "Mecklenburg County" },
    { name: "Raleigh", county: "Wake County" },
    { name: "Greensboro", county: "Guilford County" },
    { name: "Durham", county: "Durham County" },
    { name: "Winston-Salem", county: "Forsyth County" },
    { name: "Fayetteville", county: "Cumberland County" },
    { name: "Wilmington", county: "New Hanover County" },
    { name: "Asheville", county: "Buncombe County" },
  ],
  countyProse: "TechBrot serves all 100 North Carolina counties &mdash; <strong>Mecklenburg</strong> (Charlotte) anchoring banking and fintech; <strong>Wake</strong> (Raleigh) and <strong>Durham</strong> leading the Research Triangle; <strong>Guilford</strong> (Greensboro) and <strong>Forsyth</strong> (Winston-Salem) across the Triad&rsquo;s manufacturing and logistics; <strong>Cumberland</strong> (Fayetteville), <strong>New Hanover</strong> (Wilmington), and <strong>Buncombe</strong> (Asheville) across the secondary metros; the fast-growing collar counties; and the agricultural and mountain counties beyond. Remote, fixed-fee service reaches the whole state; each county sets its own combined sales-tax rate, which we confirm before charging.",
  citiesNote: "Don&rsquo;t see your city? All 100 North Carolina counties are served via remote engagement delivery. <a href=\"/contact/?intent=north-carolina&state=north-carolina&source_type=location&funnel_stage=MOFU\">Start a North Carolina conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across finance, manufacturing, and professional services &mdash; the judgment behind every North Carolina engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (NC-localized). (H2: Trusted North Carolina partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated North Carolina tax fluency", detail: "The franchise tax, the corporate-income-tax phase-out, county sales tax by location, state withholding with no reciprocity, and Taxed PTE coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Processor reconciliation for fintech, R&amp;D-ready records for tech and biotech, job costing for manufacturing, and multi-state nexus across the Southeast." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (NC-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "North Carolina operational depth", body: "The flat 3.99% income tax, the corporate income tax phasing to zero, the surviving franchise tax ($1.50/$1,000), and the county-variable sales tax. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-county, sales-tax-heavy North Carolina engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your North Carolina business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for North Carolina businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many NC CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files NC / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "Franchise-tax readiness", us: "<strong>Balance sheet kept CD-405-ready</strong>", cpa: "Files it; not in the books daily", remote: "Rarely tracked", winner: "us" },
    { dim: "County sales tax by location", us: "<strong>Configured by county (6.75&ndash;7.50%)</strong>", cpa: "Varies; not their primary focus", remote: "Often one rate &mdash; wrong", winner: "us" },
    { dim: "Multi-state withholding (no reciprocity)", us: "<strong>Set per work state correctly</strong>", cpa: "Usually; varies by firm", remote: "Often wrong assumptions", winner: "us" },
    { dim: "Taxed PTE / entity-choice readiness", us: "<strong>Books kept Taxed-PTE-ready</strong>", cpa: "Makes the election; files", remote: "Rarely considered", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "NC DOR / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for North Carolina Department of Revenue filings, the corporate income and franchise tax, the Taxed PTE election, and representation, use a licensed North Carolina CPA or EA. For QuickBooks operations, bookkeeping, county sales-tax setup, franchise-tax-ready books, and multi-state withholding &mdash; TechBrot is built for that. Most North Carolina clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — North Carolina official sources (from NC-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "North Carolina Department of Revenue", href: "https://www.ncdor.gov/", detail: "Authoritative source for the individual and corporate income tax, the franchise tax, sales and use tax, and employer withholding." },
    { name: "NCDOR &mdash; Individual Income Tax Rate Schedules", href: "https://www.ncdor.gov/taxes-forms/individual-income-tax/tax-rate-schedules", detail: "The flat 3.99% individual income-tax rate for 2026 and the legislated step-down." },
    { name: "NCDOR &mdash; Corporate Income and Franchise Tax Rates", href: "https://www.ncdor.gov/taxes-forms/corporate-income-franchise-tax/corporate-income-and-franchise-tax-rates", detail: "The corporate income-tax phase-out (2.00% for 2026, to zero by 2030) and the franchise-tax rate." },
    { name: "NCDOR &mdash; Franchise Tax", href: "https://www.ncdor.gov/taxes-forms/corporate-income-franchise-tax/corporate-tax-law/franchise-tax", detail: "The franchise tax that survives the corporate-income-tax phase-out &mdash; $1.50 per $1,000, $200 minimum, $500 cap on the first $1,000,000." },
    { name: "NCDOR &mdash; Current Sales and Use Tax Rates", href: "https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates/current-sales-and-use-tax-rates", detail: "The 4.75% state rate plus county and transit rates &mdash; the authority for the combined county rate." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, North Carolina-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: North Carolina QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve North Carolina businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to North Carolina businesses statewide &mdash; remote-first from our Delaware headquarters. All 100 counties covered, from Charlotte&rsquo;s banking and fintech corridor to the Research Triangle, the Triad, Fayetteville, Wilmington, and Asheville. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is North Carolina&rsquo;s income tax rate for 2026?", a: "North Carolina has a flat income tax of 3.99% for 2026, down from 4.25% in 2025, with further trigger-based reductions possible for 2027 and beyond. It&rsquo;s the lowest flat rate in the Southeast set we serve. Because there&rsquo;s no local income tax, North Carolina withholding is state-only &mdash; but there&rsquo;s no reciprocity, so all North Carolina-source wages are withheld for the state, which matters for multi-state and remote employers." },
    { q: "Is North Carolina really getting rid of its corporate income tax?", a: "Yes. North Carolina is the only state phasing out its corporate income tax entirely. The rate is 2.00% for 2026 (down from 2.25% in 2025) and is scheduled to reach zero by 2030. But the franchise tax survives it &mdash; a net-worth-style annual business tax of $1.50 per $1,000 of the tax base, with a $200 minimum and a $500 cap on the first $1,000,000 (holding companies capped at $150,000). So “no corporate income tax” doesn&rsquo;t mean no business tax; we keep the books franchise-tax-ready for your CPA." },
    { q: "What is the North Carolina franchise tax?", a: "It&rsquo;s an annual business tax on a corporation&rsquo;s tax base (largely net worth) that survives the corporate-income-tax phase-out. For C corporations it&rsquo;s $1.50 per $1,000 of the tax base, with a $200 minimum and a $500 cap on the first $1,000,000; S corporations pay $200 on the first $1,000,000 plus $1.50 per $1,000 above that; holding companies are capped at $150,000. It&rsquo;s filed with the corporate return (CD-405/CD-401S), so the equity section and balance sheet have to be clean &mdash; we keep them franchise-tax-ready." },
    { q: "How does North Carolina&rsquo;s sales tax work, and does it vary by county?", a: "Yes. North Carolina&rsquo;s sales and use tax is 4.75% at the state level, plus a county rate of 2.00% or 2.25%, and four counties add a 0.50% transit rate &mdash; so the combined rate runs from 6.75% in most counties to 7.00%, 7.25% in Mecklenburg and Wake, and 7.50% in Durham and Orange. Effective July 1, 2026, Mecklenburg (Charlotte) adds 1%, taking it to 8.25%. QuickBooks has to charge the correct combined rate by location, and we scope multi-state nexus for businesses selling across the Virginia, South Carolina, or Georgia lines." },
    { q: "Does North Carolina have local income taxes or reciprocity?", a: "North Carolina has no local or city income tax, so payroll income-tax withholding is state-only &mdash; simpler than Ohio or Michigan. But North Carolina has no income-tax reciprocity with any state, so a nonresident who works in North Carolina is generally subject to North Carolina withholding on the North Carolina-source wages. For multi-state and remote employers, we configure QuickBooks Payroll so North Carolina-source wages are withheld for NC and the other states&rsquo; rules apply where they belong &mdash; no reciprocity shortcuts." },
    { q: "Does TechBrot file North Carolina tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file North Carolina or federal returns, the corporate income tax, the franchise tax, the individual income tax, the sales and use tax return, or the Taxed PTE election, and we do not represent clients before the North Carolina Department of Revenue. We deliver clean, CPA-ready bookkeeping, configure the county sales-tax tracking and state withholding, and coordinate with your North Carolina CPA or EA and the Department of Revenue, who file." },
    { q: "How does a North Carolina engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your North Carolina operational context &mdash; whether the franchise tax applies, which county sales-tax rate you charge, where your multi-state withholding runs, whether the Taxed PTE election fits &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does North Carolina bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; payroll setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the number of sales-tax counties you sell into, the franchise tax, your multi-state footprint, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "North Carolina practice", detail: "All 100 counties served remotely &middot; Charlotte, Raleigh, Greensboro, Durham, Winston-Salem, Fayetteville, Wilmington, Asheville &middot; Industries handled on the national pages, configured for NC" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "North Carolina statutory references reviewed against North Carolina Department of Revenue primary sources &middot; The flat 3.99% income tax (2026), the 2.00% corporate rate phasing to zero by 2030, and the franchise-tax figures are stated as verified &middot; Combined county sales-tax rates framed qualitatively and verified against the NCDOR rate chart &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — Virginia + Georgia + Delaware exist (link); SC/TN coming soon (no href -> hub). (H2: Multi-state North Carolina businesses. + H3s)
  related: [
    { name: "Virginia", href: "/find-an-accountant/virginia/", body: "North Carolina businesses with Virginia operations or staff to the north &mdash; Virginia&rsquo;s BPOL local gross-receipts tax, the variable regional sales tax, and the multi-state withholding questions, scoped alongside your North Carolina books.", cta: "ProAdvisors in Virginia &rarr;" },
    { name: "Georgia", href: "/find-an-accountant/georgia/", body: "North Carolina businesses with Georgia operations to the south &mdash; Georgia&rsquo;s flat 4.99% income tax, the corporate net worth tax, and the local-option sales tax, scoped with your North Carolina books.", cta: "ProAdvisors in Georgia &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "North Carolina businesses with a Delaware entity or Mid-Atlantic operations &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your North Carolina books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "South Carolina &amp; Tennessee", body: "North Carolina businesses expanding into South Carolina or Tennessee &mdash; South Carolina&rsquo;s graduated income tax, Tennessee&rsquo;s no-income-tax-but-franchise-and-excise regime &mdash; with cross-border payroll and sales-tax nexus scoped as those state pages come online.", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/north-carolina/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"North Carolina QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for North Carolina businesses across all 100 counties — from Charlotte's banking and fintech corridor to the Research Triangle, the Triad, Wilmington, Fayetteville, and Asheville. Built around the flat 3.99% income tax (2026), the corporate income tax phasing out to zero by 2030 (2.00% for 2026), the surviving franchise tax, and the county-variable sales tax (4.75% state plus county and transit).","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/north-carolina-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nc-in-brief-text","#nc-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"North Carolina"}]},
        {"@type":"Service","@id":url+"#service","name":"North Carolina QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with North Carolina state withholding (no local income tax, no reciprocity), county sales tax (4.75% state plus county and transit, combined 6.75-7.50% by county), franchise tax readiness as the corporate income tax phases out to zero by 2030, and Taxed PTE election support for North Carolina businesses across all 100 counties. Delivered remotely by TechBrot. Independent Certified QuickBooks ProAdvisor firm; does not file North Carolina or federal returns, the corporate income tax, the franchise tax, the individual income tax, the sales-tax return, or the Taxed PTE election — coordinates with the client's CPA or EA and the North Carolina Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"North Carolina","sameAs":"https://en.wikipedia.org/wiki/North_Carolina","containsPlace":[
          {"@type":"City","name":"Charlotte"},{"@type":"City","name":"Raleigh"},{"@type":"City","name":"Greensboro"},{"@type":"City","name":"Durham"},{"@type":"City","name":"Winston-Salem"},{"@type":"City","name":"Fayetteville"},{"@type":"City","name":"Wilmington"},{"@type":"City","name":"Asheville"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"North Carolina small and mid-sized businesses, banking and fintech firms, technology and biotech companies, manufacturers, logistics and distribution operators, healthcare practices, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"North Carolina accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"North Carolina QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"North Carolina Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"North Carolina Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"North Carolina QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"North Carolina QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in North Carolina — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
