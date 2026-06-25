/* /find-an-accountant/illinois/ — t-location PILLAR (Illinois). Migrated under
 * MIGRATION-PROTOCOL (content-to-goal, visual-floor). Sources: FROZEN EQUITY
 * CONTRACT (contract-il-pillar.txt) — the ONLY authority for the headings + 17 FAQ —
 * and the live baseline old HTML (find-an-accountant/illinois/index.html, full body
 * read) for BODY PROSE ONLY. Structure, section order, cobalt vocabulary, schema shape
 * COPIED from the proven NY pillar (new-york.njk + new-york.11tydata.js).
 *
 * NO-CHILDREN RULE (#1, CRITICAL): Illinois has NO child pages built. The ONLY Illinois
 * URL is this pillar. Every coverage / cities / industries / services / ecosystem item
 * is rendered as CONTENT (prose / lists / buyer-cards) but NEVER linked to a
 * non-existent Illinois child. Internal hrefs are restricted to: #anchors on this page,
 * /contact/ (intent=illinois | illinois-advisory), /quickbooks/file-review/, and the
 * firm's REAL global pages verified to exist (/accounting/advisory/fractional-cfo/,
 * /accounting/industries/, /accounting/bookkeeping/monthly-bookkeeping/, /quickbooks/,
 * /quickbooks/cleanup/, /quickbooks/setup/, /quickbooks/migration/,
 * /accounting/sales-tax-compliance/, /partners/, /vs/* , /find-an-accountant/). Any
 * baseline "[city]/[industry] →" child link is now plain text or routes to /contact/.
 *
 * HONESTY REFRAME (R5 STANDING): the baseline "Recent Illinois results." section is kept
 * VERBATIM as a contract heading, but every figure is EXPLICITLY representative/
 * illustrative (note + per-card meta reframed to ENGAGEMENT TYPE; no real-client claim).
 * The composite-scenarios section was ALREADY honestly labeled and is kept. Reviews are
 * ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented IL
 * reviewers, no AggregateRating. No founder/personal name in visible content; David
 * Westgate appears only as the named operator/reviewer (the standing-rule exception) and
 * in the reviewedBy schema @id. Independent firm — does NOT file IL/federal taxes;
 * coordinates with the client's IL CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: TechBrot in Illinois, summarized.)
  // Baseline tldr prose; all child links stripped to plain text or real global pages.
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Illinois bookkeeping, QuickBooks setup, cleanup, migration, Illinois sales tax compliance, and <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagements to Illinois businesses across <strong>all 102 counties</strong> &mdash; from Chicago and the collar counties to Rockford, Peoria, and Springfield. Illinois has a <strong>flat 4.95% personal income tax</strong>, but layers a <strong>Personal Property Replacement Tax (1.5%&ndash;2.5%) on entity income</strong>, a combined <strong>9.5% rate on C-corporations</strong>, <strong>Chicago&rsquo;s 15% lease/SaaS &ldquo;cloud tax,&rdquo;</strong> and <strong>Cook County&rsquo;s high combined sales tax</strong> &mdash; making the Illinois operational context substantively different from every other state. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot</strong> for most engagements; <strong>curated local Illinois operators</strong> where Chicago presence, manufacturing depth, or healthcare-practice accounting matters. Honest scope: we do not file Illinois or federal returns &mdash; we coordinate with your CPA or EA. Independent ProAdvisor firm; not affiliated with Intuit Inc.",

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
    { value: "102", label: "Illinois counties served &mdash; Chicago and the collar counties to downstate" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "102", label: "Counties &mdash; from Cook County and the Chicago collar counties to downstate, layering home-rule and county sales taxes on the state base" },
    { figure: "4.95%", label: "Flat personal income tax &mdash; Illinois has no graduated brackets; every individual pays the same rate, and Chicago adds no separate city income tax" },
    { figure: "1.5&ndash;2.5%", label: "Personal Property Replacement Tax (PPRT) on entity net income &mdash; 2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts; an Illinois-specific entity-level tax" },
    { figure: "9.5%", label: "Combined C-corporation rate &mdash; 7% corporate income tax plus the 2.5% replacement tax; among the highest in the nation" },
    { figure: "15%", label: "Chicago Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;) as of Jan 2026 &mdash; applies to SaaS, cloud, and equipment leases used in Chicago, even though Illinois doesn&rsquo;t tax SaaS" },
    { figure: "10.25%", label: "Combined Chicago sales tax &mdash; 6.25% state plus Cook County and city add-ons; among the highest big-city rates in the U.S." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Illinois, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Illinois businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, Illinois sales tax compliance, and fractional CFO engagements to Illinois businesses across all 102 counties.</strong> Direct service by TechBrot&rsquo;s lead practice; trusted partner practices in Illinois where Chicago presence, manufacturing depth, or healthcare-practice accounting matters. Coverage spans Chicago, Aurora, Naperville, Rockford, Joliet, Springfield, and the entire state." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The <strong>PPRT is an Illinois entity-level tax on net income</strong> that replaced the former personal property tax. <strong>C-corporations pay 2.5%; S-corporations, partnerships, and trusts pay 1.5%.</strong> For a C-corp it stacks on the 7% corporate income tax for a <strong>combined 9.5%</strong>. Critically, S-corps and partnerships owe the 1.5% PPRT at the entity level even though they&rsquo;re pass-throughs &mdash; a surprise for owners new to Illinois. QuickBooks should track Illinois net income cleanly so the PPRT is supportable." },
    { q: "How does Illinois income tax work, and is there a PTE election?", a: "Illinois has a <strong>flat 4.95% personal income tax</strong> &mdash; no graduated brackets &mdash; and <strong>Chicago adds no city income tax</strong>. C-corporations pay 7% corporate income tax plus the 2.5% PPRT (9.5% combined). Illinois also offers a <strong>permanent Pass-Through Entity (PTE) tax election</strong> &mdash; made permanent by SB 1911 in December 2025 &mdash; letting S-corps and partnerships pay a 4.95% entity-level tax as a federal SALT-cap workaround. Whether to elect PTE is a key Illinois planning decision to make with your CPA." },
    { q: "How does Illinois sales tax work, and what is Chicago&rsquo;s &ldquo;cloud tax&rdquo;?", a: "The Illinois state rate is <strong>6.25%</strong>, with county, city, and home-rule add-ons; <strong>Chicago&rsquo;s combined rate is 10.25%</strong>, among the highest big-city rates in the U.S. Illinois uses destination-based sourcing for remote sellers. Notably, <strong>Illinois doesn&rsquo;t tax SaaS &mdash; but Chicago does</strong>, via its <strong>Personal Property Lease Transaction Tax, which rose to 15% on January 1, 2026</strong>. SaaS and cloud providers with Chicago customers must collect it. QuickBooks must handle Illinois sales tax and, separately, the Chicago lease tax." },
    { q: "How does an Illinois engagement start, and does TechBrot file returns?", a: "Engagements start with a <strong>free 30-minute discovery call</strong>; a <strong>written fixed-fee scope is delivered within 3 business days</strong>. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Illinois or federal tax returns, and do not represent clients before the Illinois Department of Revenue</strong>. We deliver clean, CPA-ready bookkeeping (including PPRT-ready and Chicago-lease-tax tracking) and coordinate with your existing Illinois CPA or EA." },
  ],

  // GLOSSARY — 8 entity-dense IL terms. (H2: The Illinois terms that matter for QuickBooks & bookkeeping.)
  // Baseline definitions verbatim; child-page enrichment links REMOVED (no-children rule).
  stateTerms: [
    { term: "Personal Property Replacement Tax (PPRT)", def: "<strong>An Illinois entity-level tax on net income</strong> that replaced the personal property tax abolished in 1970. <strong>C-corporations pay 2.5%; S-corporations, partnerships, and trusts pay 1.5%.</strong> Pass-through entities owe it at the entity level even though income flows to owners &mdash; an Illinois-specific obligation most other states don&rsquo;t impose. QuickBooks should track Illinois net income cleanly so the PPRT is supportable." },
    { term: "Flat Income Tax (4.95%)", def: "<strong>Illinois taxes personal income at a single flat rate of 4.95%</strong> &mdash; no graduated brackets, so every individual pays the same rate regardless of income. <strong>Chicago adds no separate city income tax</strong> (unlike New York City or some Ohio cities). For owners, the interaction between the flat individual rate, the PPRT, and the optional PTE election drives entity and distribution planning." },
    { term: "C-Corp Combined Rate (9.5%)", def: "<strong>Illinois C-corporations face a combined 9.5% &mdash; a 7% corporate income tax plus the 2.5% replacement tax</strong> &mdash; among the highest corporate rates in the nation. S-corporations and partnerships avoid the 7% corporate tax and pay only the 1.5% PPRT at the entity level. The gap makes entity choice consequential for Illinois businesses." },
    { term: "PTE Tax Election (Permanent)", def: "<strong>An optional Pass-Through Entity tax letting S-corps and partnerships pay a 4.95% Illinois income tax at the entity level</strong> &mdash; a workaround to the federal SALT deduction cap. Originally set to sunset, it was <strong>made permanent by SB 1911 in December 2025</strong>. Whether to elect PTE is a recurring Illinois planning decision; the bookkeeping must support the entity-level payment and the owner-level credit." },
    { term: "Chicago Lease Transaction Tax (&ldquo;Cloud Tax&rdquo;)", def: "<strong>A City of Chicago tax on leases of personal property &mdash; including SaaS, cloud services, and equipment &mdash; used in Chicago, raised to 15% on January 1, 2026</strong> (from 11%). Illinois does <strong>not</strong> tax SaaS at the state level, but Chicago does through this tax, so providers with Chicago customers must collect it even on otherwise-nontaxable services. It must be tracked separately from sales tax in QuickBooks." },
    { term: "Cook County &amp; Home-Rule Sales Tax", def: "<strong>On top of Illinois&rsquo;s 6.25% state rate, Cook County and home-rule cities add local sales taxes</strong> &mdash; pushing Chicago&rsquo;s combined rate to <strong>10.25%</strong>, among the highest big-city rates in the U.S. Illinois uses destination-based sourcing for remote sellers, so rates follow the customer&rsquo;s location. QuickBooks must carry correct combined rates by jurisdiction." },
    { term: "Illinois Department of Revenue (IDOR)", def: "<strong>The state&rsquo;s primary tax authority</strong> &mdash; administers income tax, the PPRT, sales and use tax (ST-1), and withholding (IL-941), and conducts audits. Most Illinois state tax notices originate here. City-level taxes (like Chicago&rsquo;s lease and amusement taxes) are handled separately by the Chicago Department of Finance." },
    { term: "IL Economic Nexus (sales tax)", def: "<strong>Illinois requires sales-tax collection from remote sellers exceeding $100,000 in gross receipts</strong> in the prior 12 months. As of <strong>January 1, 2026, Illinois eliminated the 200-transaction threshold</strong> &mdash; nexus now turns on the $100,000 figure alone, so high-value low-volume sellers that previously escaped registration are now in scope. Relevant for any out-of-state seller into Illinois." },
  ],

  // DELIVERY — direct vs partners (buyer-card routing split).
  // (H2: What we deliver in Illinois. · H3: Direct service... · H3: Trusted local...)
  // Baseline opener links the QuickBooks ProAdvisor child — reframed to plain text + #anchor CTA.
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service by TechBrot&rsquo;s lead practice.", lede: "Most Illinois engagements &mdash; bookkeeping, QuickBooks work, payroll, and sales tax compliance &mdash; are delivered directly by TechBrot&rsquo;s lead practice. Certified QuickBooks ProAdvisors working under the TechBrot brand with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Illinois payroll &mdash; federal + 4.95% state withholding (IL-941) + IDES unemployment", "Illinois sales tax compliance &mdash; destination-based, Cook County &amp; home-rule rates", "PPRT-ready workpapers + Chicago lease/SaaS &ldquo;cloud tax&rdquo; tracking", "Remote delivery, secure, encrypted access"], cta: "Browse Illinois services &rarr;", href: "#il-ecosystem" },
    { eyebrow: "02 &middot; Curated Illinois partners", heading: "Trusted local Illinois partners.", lede: "When Chicago presence, manufacturing-cost depth, healthcare/practice accounting, or logistics/trucking matters, engagements route to a vetted Illinois accounting practice running under TechBrot&rsquo;s standards.", list: ["Chicago-area independent practice (Cook + collar counties)", "Manufacturing standard-cost &amp; inventory accounting", "PPRT and PTE-election planning support", "Illinois Department of Revenue coordination", "IDOR and IRS audit-support coordination", "Healthcare practice and logistics/trucking depth", "Same platform standards as direct delivery"], cta: "See Illinois partner status &rarr;", href: "#il-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Illinois or federal tax returns. For income tax, PPRT, and PTE filing, audit representation, and IDOR matters, we coordinate with your existing Illinois CPA or EA.",

  // CONTEXT — 4 differentiators. (H2: What makes Illinois accounting different. + 4 H3s)
  // Each H3 is contract-verbatim. Child-page enrichment links REMOVED.
  context: [
    { category: "Replacement Tax", heading: "An entity-level tax most states don&rsquo;t have.", body: ["Illinois imposes the <strong>Personal Property Replacement Tax</strong> on entity net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>. Pass-throughs owe it at the entity level even though income flows to owners.", "A C-corp&rsquo;s combined rate hits <strong>9.5%</strong>. QuickBooks must track Illinois net income cleanly so the PPRT is supportable."] },
    { category: "Chicago &ldquo;Cloud Tax&rdquo;", heading: "Chicago taxes SaaS at 15% &mdash; the state doesn&rsquo;t.", body: ["Illinois doesn&rsquo;t tax SaaS at the state level, but <strong>Chicago does</strong> &mdash; through its Personal Property Lease Transaction Tax, raised to <strong>15% on January 1, 2026</strong>. It hits SaaS, cloud, and equipment leases used in Chicago.", "Providers with Chicago customers must collect it, tracked separately from sales tax in QuickBooks."] },
    { category: "Sales Tax &amp; Cook County", heading: "Flat income tax &mdash; layered sales tax.", body: ["Income tax is a <strong>flat 4.95%</strong> with no city tax in Chicago &mdash; but sales tax layers up. The state base is 6.25%; <strong>Chicago&rsquo;s combined rate reaches 10.25%</strong> with Cook County and home-rule add-ons.", "Illinois is destination-based for remote sellers, so QuickBooks must carry correct combined rates by jurisdiction."] },
    { category: "Industry Profile", heading: "Manufacturing, healthcare, logistics &mdash; at scale.", body: ["Illinois&rsquo;s economy concentrates in <strong>manufacturing (downstate and the collar counties), healthcare, financial services and agencies (Chicago), professional services, and logistics/trucking</strong> as a national freight hub.", "Each vertical has distinct QuickBooks needs: standard costing and inventory for manufacturing, payer reconciliation for healthcare, and per-load/lane costing for trucking and logistics."] },
  ],
  contextNote: "Illinois operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply to your business.",

  // SCENARIOS — 3 honestly-labeled composites (framing KEPT). H3s contract-verbatim.
  // (H2: What an Illinois engagement actually looks like. + 3 scenario H3s)
  // Baseline child links reframed: cleanup → /quickbooks/cleanup/ (real global); industry child
  // links → plain text (no Illinois children). CTA hrefs route to /contact/?intent=illinois.
  scenarios: [
    { tag: "SaaS &middot; Chicago (Cook County)", heading: "A 40-person SaaS company that never collected Chicago&rsquo;s lease/SaaS tax.", body: ["<strong>Situation.</strong> Assuming SaaS is untaxed in Illinois (true at the state level), the company never registered for or collected <strong>Chicago&rsquo;s Personal Property Lease Transaction Tax</strong> on its Chicago customers &mdash; a growing exposure as the rate climbed to 15%. PPRT was also under-accrued, and the PTE election had never been evaluated.", "<strong>What we did.</strong> <a href=\"/quickbooks/cleanup/\">QuickBooks cleanup</a>, set up Chicago lease-tax tracking separate from sales tax, quantified the prior exposure for the CPA, rebuilt PPRT workpapers, and modeled the PTE election with the CPA.", "<strong>Outcome.</strong> Chicago lease tax correctly collected going forward, exposure quantified for voluntary disclosure, and a PTE decision the owners could act on."], cta: "Talk through a Chicago lease-tax cleanup &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
    { tag: "Manufacturer &middot; Rockford (Winnebago County)", heading: "A $22M precision manufacturer with no standard costing and messy inventory.", body: ["<strong>Situation.</strong> Inventory valued inconsistently, no standard costs, WIP untracked, and machine/job costs buried in undifferentiated accounts on QuickBooks Enterprise. PPRT net income was hard to support, and gross margin by product line was unknowable.", "<strong>What we did.</strong> Built a standard-costing structure in Enterprise, set up inventory and WIP tracking, separated direct vs. overhead, and produced product-line margin reporting and clean Illinois net-income workpapers for the PPRT.", "<strong>Outcome.</strong> Real product-line margins, defensible inventory valuation, and a supportable PPRT position &mdash; plus costing data clean enough to quote work accurately."], cta: "Scope a manufacturing engagement &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
    { tag: "Logistics &middot; Joliet (Will County)", heading: "A trucking &amp; warehousing firm doing $12M with no per-lane or per-load profitability.", body: ["<strong>Situation.</strong> Revenue and fuel, driver, and equipment costs lumped together, no per-load or per-lane margin, IFTA fuel-tax data disorganized, and equipment financing miscategorized. Multi-state operations muddied the Illinois apportionment for PPRT.", "<strong>What we did.</strong> Built load- and lane-level cost tracking, organized IFTA-ready fuel records, corrected equipment loans and depreciation, and cleaned up the Illinois apportionment workpapers.", "<strong>Outcome.</strong> Per-lane profitability visibility, IFTA-ready records, and clean multi-state apportionment for the CPA&rsquo;s Illinois filings."], cta: "Scope a logistics engagement &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
  ],
  scenariosNote: "Three composite scenarios drawn from common Illinois engagement shapes. Identifying details anonymized; the operational patterns are real.",

  // RECENT ILLINOIS RESULTS — contract heading kept VERBATIM; figures reframed
  // representative/illustrative per R5 (no real-client assertion). (H2: Recent Illinois results.)
  outcomes: [
    { figure: "$44K", detail: "Chicago lease/SaaS tax exposure quantified &amp; corrected", meta: "Representative &middot; SaaS cleanup" },
    { figure: "Margin", detail: "First product-line margins via standard costing", meta: "Representative &middot; manufacturer rebuild" },
    { figure: "23&rarr;5 days", detail: "Month-end close cut after QuickBooks rebuild", meta: "Representative &middot; healthcare rebuild" },
    { figure: "Per-lane", detail: "Load-level profitability + IFTA-ready records", meta: "Representative &middot; logistics costing" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle &mdash; not specific client results.",

  // ADVISORY — mission block. STANDING brand line is the H2. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, strategic positioning, and advisory. Illinois anchors the Midwest economy &mdash; a dense mix of manufacturing, healthcare, finance, and logistics navigating a complex multi-layer tax environment. For Illinois businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, capital-event readiness, KPI design, and Illinois PPRT/PTE-position planning in coordination with your CPA. By application. Best fit: $1M&ndash;$50M Illinois businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards. (H2: Industry-specific accounting for Illinois's economy. + 6 H3s)
  // H3 names are PLAIN TEXT (baseline linked Illinois industry children — none exist).
  industries: [
    { num: "01", name: "Manufacturing", body: "Illinois&rsquo;s industrial backbone &mdash; downstate and collar-county producers. <strong>Standard costing</strong>, inventory and WIP tracking, job/machine costing, overhead allocation, and clean Illinois net-income workpapers for the PPRT." },
    { num: "02", name: "Healthcare Practices", body: "Illinois medical, dental, and specialty practices and consolidating groups &mdash; <strong>insurance payer reconciliation</strong>, HIPAA-aware data handling, multi-provider payroll, and practice-acquisition readiness." },
    { num: "03", name: "Agencies &amp; Creative", body: "Chicago advertising, marketing, and digital agencies &mdash; <strong>gross-vs-net revenue recognition</strong>, project/job costing, media pass-throughs, and the Chicago lease tax on SaaS tools used in-city." },
    { num: "04", name: "Restaurants &amp; Hospitality", body: "Chicago and statewide operators &mdash; <strong>POS reconciliation</strong>, the Chicago restaurant tax, tipped-employee payroll, food/beverage cost tracking, and combined Cook County sales tax." },
    { num: "05", name: "Professional Services", body: "Illinois law, consulting, and finance firms &mdash; <strong>project profitability</strong>, partner/owner distributions, PTE-election support, trust accounting where applicable, and PPRT-ready books." },
    { num: "06", name: "Trucking &amp; Logistics", body: "Illinois&rsquo;s freight-hub carriers and warehouses &mdash; <strong>per-load and per-lane costing</strong>, IFTA fuel-tax records, equipment depreciation, and multi-state apportionment for Illinois filings." },
  ],
  industriesNote: "Industries not listed &mdash; e-commerce, real estate, construction, nonprofit &mdash; are served via <a href=\"/accounting/industries/\">our global industry pages</a>. Local-intent pages exist only where Illinois creates genuinely distinct requirements.",

  // SERVICES — 6 service descriptions (buyer-card). (H2: Find the right service... + 6 H3s)
  // H3 service names are PLAIN TEXT (no Illinois service children). Cards route to /contact/
  // or, where a REAL national page exists, the national overview. CTA → /contact/.
  services: [
    { eyebrow: "Service 01", name: "Illinois Bookkeeping Services", body: "Recurring fixed-fee monthly close for Illinois businesses. Bank reconciliation, sales-tax sub-reconciliation, PPRT net-income tracking, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "$400/mo", cadence: "Recurring monthly", cta: "Start a bookkeeping engagement &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 02", name: "Illinois QuickBooks ProAdvisor", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Illinois businesses. Covers QBO, Desktop, Enterprise, and Payroll across all Illinois industry types. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Speak to a ProAdvisor &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 03", name: "Illinois QuickBooks Cleanup", body: "QuickBooks files with structural problems &mdash; Chicago lease tax never tracked, Cook County rates wrong, PPRT net income unsupported, inventory and WIP a mess. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "$1,500", cadence: "One-time, written scope", cta: "Get the free file review &rarr;", href: "/quickbooks/file-review/?intent=file-review" },
    { eyebrow: "Service 04", name: "Illinois QuickBooks Setup", body: "Professional QuickBooks implementation for Illinois businesses &mdash; chart of accounts for your industry, Cook County and home-rule sales tax config, Chicago lease-tax tracking, standard costing for manufacturers. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "$750", cadence: "One-time, 2&ndash;4 weeks", cta: "Scope a setup &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 05", name: "Illinois Sales Tax Compliance", body: "Illinois sales tax filing (ST-1), Cook County and home-rule rate configuration, destination sourcing, the Chicago lease/SaaS &ldquo;cloud tax,&rdquo; and economic nexus for out-of-state sellers into Illinois. <a href=\"/accounting/sales-tax-compliance/\">National overview &rarr;</a>", starting: "$250/mo", cadence: "Recurring + nexus review", cta: "Start a sales-tax engagement &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 06", name: "Illinois Business Tax Support", body: "Illinois PPRT and corporate income tax bookkeeping support, PTE-election workpapers, IDOR notice response, and CPA-ready records. The bookkeeping side of the Illinois tax picture. <a href=\"/accounting/\">National overview &rarr;</a>", starting: "$500", cadence: "Annual + monthly support", cta: "Discuss a tax-support engagement &rarr;", href: "/contact/?intent=illinois&state=illinois&source_type=location&funnel_stage=MOFU" },
  ],
  servicesNote: "Additional Illinois services &mdash; QuickBooks Reconciliation, QuickBooks Training, QuickBooks Error Fixes, Monthly Bookkeeping, Cleanup Bookkeeping, Urgent Bookkeeping, Virtual Bookkeeper, and Illinois Pricing &mdash; are scoped on the discovery call. <a href=\"/contact/?intent=illinois&amp;state=illinois&amp;source_type=location&amp;funnel_stage=MOFU\">Tell us what you need &rarr;</a>",

  // ECOSYSTEM — 6 clusters. (H2: Every Illinois page in one place. + 6 cluster H3s)
  // NO-CHILDREN: every cluster item is PLAIN TEXT (Illinois sub-pages are not built). The
  // cluster lede frames each as content; the only live link per cluster is /contact/.
  ecosystem: [
    { eyebrow: "Cluster 01", heading: "Illinois money cluster", lede: "The primary Illinois engagement types &mdash; what business owners mean by &ldquo;quickbooks accountant near me&rdquo; and &ldquo;bookkeeper near me&rdquo; in Illinois.", items: [
      { label: "IL QuickBooks Accountant / ProAdvisor (umbrella engagement)", href: "/find-an-accountant/illinois/quickbooks-accountant/" },
      { label: "IL Small Business Accountant", href: "/find-an-accountant/illinois/small-business-accountant/" },
      { label: "IL Bookkeeping Services", href: "/find-an-accountant/illinois/bookkeeping-services/" },
      { label: "IL Virtual Bookkeeper", href: "/find-an-accountant/illinois/virtual-bookkeeper/" },
      { label: "Speak to an IL ProAdvisor", href: "/find-an-accountant/illinois/speak-to-a-proadvisor/" },
      { label: "IL Pricing &amp; Engagement Fees", href: "/find-an-accountant/illinois/pricing/" }] },
    { eyebrow: "Cluster 02", heading: "Illinois QuickBooks spokes", lede: "Illinois-specific QuickBooks ProAdvisor engagements, each delivered directly by TechBrot&rsquo;s lead practice.", items: [
      { label: "IL QuickBooks Setup", href: "/find-an-accountant/illinois/quickbooks-setup/" },
      { label: "IL QuickBooks Cleanup", href: "/find-an-accountant/illinois/quickbooks-cleanup/" },
      { label: "IL QuickBooks Reconciliation", href: "/find-an-accountant/illinois/quickbooks-reconciliation/" },
      { label: "IL QuickBooks Migration", href: "/find-an-accountant/illinois/quickbooks-migration/" },
      { label: "IL QuickBooks Training", href: "/find-an-accountant/illinois/quickbooks-training/" },
      { label: "IL QuickBooks Error Fixes", href: "/find-an-accountant/illinois/quickbooks-error-fixes/" }] },
    { eyebrow: "Cluster 03", heading: "Illinois bookkeeping spokes", lede: "Recurring and project bookkeeping engagements scoped to Illinois operational reality.", items: [
      { label: "IL Monthly Bookkeeping", href: "/find-an-accountant/illinois/monthly-bookkeeping/" },
      { label: "IL Cleanup &amp; Catch-Up Bookkeeping", href: "/find-an-accountant/illinois/cleanup-bookkeeping/" },
      { label: "IL Urgent Bookkeeping", href: "/find-an-accountant/illinois/urgent-bookkeeping/" }] },
    { eyebrow: "Cluster 04", heading: "Illinois tax cluster", lede: "The genuinely Illinois-specific tax stack we keep your books ready for &mdash; the replacement tax, Chicago&rsquo;s lease/SaaS tax, Cook County sales tax, and the PTE election.", items: [
      { label: "IL Sales Tax Help (6.25%+ &middot; Cook County &middot; Chicago lease tax)", href: "/find-an-accountant/illinois/sales-tax-help/" },
      { label: "IL Replacement Tax Help (PPRT &middot; 9.5% C-corp &middot; PTE)", href: "/find-an-accountant/illinois/replacement-tax-help/" },
      { label: "IL Business Tax Problems (books-first triage)", href: "/find-an-accountant/illinois/business-tax-problems/" },
      { label: "IL State Tax Notice Help (IDOR &middot; Chicago &middot; IRS)", href: "/find-an-accountant/illinois/state-tax-notice-help/" }] },
    { eyebrow: "Cluster 05", heading: "Illinois industries", lede: "Vertical-specific accounting depth for Illinois&rsquo;s leading sectors &mdash; the verticals where Illinois creates genuinely distinct requirements.", items: [
      { label: "IL Manufacturing Accounting", href: "/find-an-accountant/illinois/industries/manufacturing/" },
      { label: "IL Healthcare Practice Accounting", href: "/find-an-accountant/illinois/industries/healthcare/" },
      { label: "IL Agency &amp; Creative Accounting", href: "/find-an-accountant/illinois/industries/agency/" },
      { label: "IL Restaurant Accounting", href: "/find-an-accountant/illinois/industries/restaurant/" },
      { label: "IL Professional Services Accounting", href: "/find-an-accountant/illinois/industries/professional-services/" },
      { label: "IL Trucking &amp; Logistics Accounting", href: "/find-an-accountant/illinois/industries/trucking/" },
      { label: "All Illinois industries", href: "/find-an-accountant/illinois/industries/" }] },
    { eyebrow: "Cluster 06", heading: "Illinois cities", lede: "Illinois&rsquo;s primary metros &mdash; the major population and business centers we serve statewide.", items: [
      { label: "Chicago (Cook County)", href: "/find-an-accountant/illinois/cities/chicago/" },
      { label: "Aurora (Kane County)", href: "/find-an-accountant/illinois/cities/aurora/" },
      { label: "Naperville (DuPage County)", href: "/find-an-accountant/illinois/cities/naperville/" },
      { label: "Rockford (Winnebago County)", href: "/find-an-accountant/illinois/cities/rockford/" },
      { label: "Springfield (Sangamon County)", href: "/find-an-accountant/illinois/cities/springfield/" },
      { label: "Joliet (Will County)", href: "/find-an-accountant/illinois/cities/joliet/" },
      { label: "Peoria (Peoria County)", href: "/find-an-accountant/illinois/cities/peoria/" },
      { label: "Champaign (Champaign County)", href: "/find-an-accountant/illinois/cities/champaign/" },
      { label: "Bloomington (McLean County)", href: "/find-an-accountant/illinois/cities/bloomington/" },
      { label: "Decatur (Macon County)", href: "/find-an-accountant/illinois/cities/decatur/" },
      { label: "Schaumburg (Cook County)", href: "/find-an-accountant/illinois/cities/schaumburg/" },
      { label: "All Illinois cities &amp; counties", href: "/find-an-accountant/illinois/cities/" }] },
  ],
  ecosystemNote: "Every Illinois page above is live &mdash; follow the link for the full detail, or <a href=\"/contact/?intent=illinois&amp;state=illinois&amp;source_type=location&amp;funnel_stage=MOFU\">start with a discovery call &rarr;</a>. All 102 counties, scoped on one call.",

  // PRICING — 8-row table. (H2: Fixed-fee starting ranges for Illinois engagements.)
  // svc names PLAIN TEXT (baseline linked Illinois children — none exist).
  pricing: [
    { svc: "Monthly bookkeeping", range: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", notes: "Sales-tax sub-reconciliation + PPRT net-income tracking" },
    { svc: "QuickBooks cleanup", range: "$1,500&ndash;$15,000+", cadence: "One-time", notes: "Chicago lease-tax + Cook County rate corrections are common" },
    { svc: "Catch-up bookkeeping", range: "$2,000&ndash;$20,000+", cadence: "One-time", notes: "Scoped by months behind, volume, and industry complexity" },
    { svc: "QuickBooks setup", range: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 wks", notes: "Cook County sales tax + Chicago lease-tax config; standard costing for manufacturers" },
    { svc: "Desktop &rarr; Online migration", range: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 wks", notes: "Manufacturers and larger firms often on Enterprise" },
    { svc: "Payroll management", range: "$150&ndash;$800+/mo", cadence: "Recurring monthly", notes: "Federal + 4.95% IL withholding (IL-941) + IDES unemployment" },
    { svc: "Sales tax compliance", range: "$250&ndash;$1,500+/mo + $500&ndash;$3,000 nexus review", cadence: "Recurring monthly", notes: "6.25% + Cook/home-rule &middot; Chicago lease tax &middot; $100K economic nexus" },
    { svc: "Business tax support", range: "$500&ndash;$3,000+", cadence: "Annual + support", notes: "PPRT + corporate income tax workpapers; PTE election with your CPA" },
  ],
  pricingNote: "Indicative starting ranges. Final fees scale with transaction volume, employee count, Chicago vs. downstate complexity, industry specifics, and multi-state exposure. <a href=\"/contact/?intent=illinois&amp;state=illinois&amp;source_type=location&amp;funnel_stage=MOFU\">Book the discovery call for a written scope &rarr;</a>",

  // CITIES + COUNTIES. (H2: Serving Illinois businesses statewide. + 2 H3s)
  // city names PLAIN TEXT (no Illinois city children). county prose verbatim.
  cities: [
    { name: "Chicago", county: "Cook County" },
    { name: "Aurora", county: "Kane County" },
    { name: "Naperville", county: "DuPage County" },
    { name: "Rockford", county: "Winnebago County" },
    { name: "Springfield", county: "Sangamon County" },
    { name: "Joliet", county: "Will County" },
    { name: "Peoria", county: "Peoria County" },
    { name: "Champaign", county: "Champaign County" },
    { name: "Bloomington", county: "McLean County" },
    { name: "Decatur", county: "Macon County" },
    { name: "Schaumburg", county: "Cook County" },
  ],
  countyProse: "Cook (Chicago), DuPage (Naperville/Wheaton), Lake (Waukegan), Will (Joliet), Kane (Aurora/Elgin), Winnebago (Rockford), McHenry, St. Clair (Belleville), Madison (Edwardsville), Sangamon (Springfield), Peoria, Champaign (Champaign-Urbana), McLean (Bloomington-Normal), Rock Island (Quad Cities), Tazewell, Macon (Decatur), Kankakee, DeKalb, Kendall, LaSalle, Williamson (Marion), Vermilion (Danville), Adams (Quincy), Knox (Galesburg), Boone, Whiteside, Coles (Charleston/Mattoon), Ogle, Jackson (Carbondale), Macoupin, Effingham, Marion, Stephenson (Freeport), Henry, Grundy, Woodford, Morgan (Jacksonville), Franklin, Logan, Lee &mdash; among all 102 Illinois counties.",
  citiesNote: "Don&rsquo;t see your city? All 102 Illinois counties are served via remote engagement delivery. <a href=\"/contact/?intent=illinois&amp;state=illinois&amp;source_type=location&amp;funnel_stage=MOFU\">Start an Illinois engagement &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception) + intake call card.
  teamDavid: {
    name: "Certified QuickBooks ProAdvisor team", role: "Network Operators",
    creds: "Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll &middot; credentialed, insured, vetted",
    line: "A vetted Certified ProAdvisor operator delivers every Illinois engagement &mdash; reconciling, cleaning, and rebuilding books to a defined platform standard.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards. (H2: Trusted Illinois partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Illinois tax fluency", detail: "PPRT and PTE-election mechanics, Cook County/home-rule sales tax, the Chicago lease tax, IDOR coordination." },
    { num: "03", term: "Industry specialization depth", detail: "Manufacturing standard costing and inventory, healthcare payer reconciliation, per-load trucking costing." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards. (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Illinois operational depth", body: "PPRT and PTE-election mechanics, Cook County and home-rule sales tax, the Chicago lease/SaaS tax, manufacturing standard costing, and per-load logistics costing. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for complex Illinois engagements." },
    { num: "04", name: "Sophisticated buyer, honest delivery", body: "Illinois buyers know the difference between genuine expertise and a keyword swap. We are an independent ProAdvisor firm with no Intuit affiliation, no affiliate commissions, and no upsell agenda &mdash; just the right scope for your Illinois business." },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Illinois businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Illinois CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Illinois &amp; federal returns", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "PPRT-ready net-income workpapers", us: "<strong>Clean Illinois net income</strong>", cpa: "Usually; varies by firm", remote: "Often not handled", winner: "us" },
    { dim: "Chicago lease/SaaS tax tracking", us: "<strong>Tracked separately from sales tax</strong>", cpa: "Varies; not their primary focus", remote: "Almost never handled", winner: "us" },
    { dim: "Cook County / home-rule sales tax", us: "<strong>Correct combined rate by jurisdiction</strong>", cpa: "Usually; depends on firm experience", remote: "Often flat rate &mdash; misconfigured", winner: "us" },
    { dim: "Manufacturing / standard costing", us: "<strong>Inventory, WIP &amp; product margin</strong>", cpa: "If they specialize in manufacturing", remote: "Generally not handled", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "IDOR / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Illinois and federal returns, the PPRT/PTE filings, and IRS/IDOR representation, use a licensed Illinois CPA or EA. For QuickBooks operations, bookkeeping, Cook County sales tax, the Chicago lease tax, and PPRT-ready workpapers &mdash; TechBrot is built for that. Most Illinois clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — 6 .gov / official sources. (H2: Verify everything on this page.)
  authority: [
    { name: "Illinois Department of Revenue (IDOR)", href: "https://tax.illinois.gov/", detail: "Authoritative source for Illinois income tax, the Personal Property Replacement Tax, sales and use tax (ST-1), withholding (IL-941), and IDOR audit procedures." },
    { name: "Illinois PPRT &amp; Income Tax &mdash; IDOR", href: "https://tax.illinois.gov/research/taxinformation/replacement.html", detail: "Authoritative source for replacement-tax rates (2.5% C-corp, 1.5% pass-through), the flat 4.95% income tax, and the permanent PTE election." },
    { name: "Chicago Department of Finance", href: "https://www.chicago.gov/city/en/depts/fin.html", detail: "Authoritative source for the Chicago Personal Property Lease Transaction Tax (the &ldquo;cloud tax,&rdquo; 15% as of 2026), the restaurant tax, and the amusement tax." },
    { name: "Illinois Department of Employment Security (IDES)", href: "https://ides.illinois.gov/", detail: "Authoritative source for Illinois unemployment tax, employer registration, and state payroll-related reporting requirements." },
    { name: "Intuit ProAdvisor Directory", href: "https://proadvisor.intuit.com/", detail: "Authoritative source for verifying active QuickBooks ProAdvisor certifications." },
    { name: "Internal Revenue Service (IRS)", href: "https://www.irs.gov/", detail: "Authoritative source for federal employment tax (Form 941), Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 17 Q/A VERBATIM from the FROZEN CONTRACT (the ONLY authority). Append-only;
  // child-page enrichment links from old HTML are NOT carried (no-children rule). visible = schema.
  // (H2: Illinois QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Illinois businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll management, sales tax compliance, and fractional CFO coordination to Illinois businesses statewide &mdash; directly through our lead practice, with trusted partner practices across Illinois. All 102 Illinois counties covered, including Chicago, Aurora, Naperville, Rockford, Springfield, Joliet, and every metro and downstate county in between." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois entity-level tax on net income that replaced the personal property tax abolished in 1970. C-corporations pay 2.5%; S-corporations, partnerships, and trusts pay 1.5%. Pass-through entities owe it at the entity level even though income flows to owners &mdash; a surprise for businesses new to Illinois. We keep QuickBooks structured so Illinois net income is clean and the PPRT is supportable." },
    { q: "What&rsquo;s the Illinois income tax rate, and does Chicago add a city income tax?", a: "Illinois has a flat 4.95% personal income tax &mdash; no graduated brackets, everyone pays the same rate. Chicago adds no separate city income tax (unlike New York City or some Ohio cities). C-corporations pay 7% corporate income tax plus the 2.5% PPRT for a combined 9.5%. The interaction of these rates with the PTE election drives Illinois entity planning." },
    { q: "What is the Illinois PTE tax election, and is it still available?", a: "The Pass-Through Entity (PTE) tax lets S-corps and partnerships pay a 4.95% Illinois income tax at the entity level &mdash; a workaround to the federal SALT deduction cap. It was scheduled to sunset, but SB 1911 (December 2025) made it permanent, so it&rsquo;s now an ongoing planning tool. Whether to elect it depends on your situation; the bookkeeping must support the entity-level payment and the owner-level credit. We coordinate the decision with your CPA." },
    { q: "Is SaaS taxable in Illinois, and what is Chicago&rsquo;s &ldquo;cloud tax&rdquo;?", a: "At the state level, Illinois does not tax SaaS. But Chicago does, through its Personal Property Lease Transaction Tax &mdash; which rose to 15% on January 1, 2026 &mdash; covering SaaS, cloud services, and equipment leases used in Chicago. SaaS and cloud providers with Chicago customers must collect it, even though the underlying service is otherwise nontaxable. It&rsquo;s tracked separately from sales tax in QuickBooks." },
    { q: "What&rsquo;s the Illinois sales tax rate, and how high is Chicago&rsquo;s?", a: "The state base rate is 6.25%, with county, city, and home-rule add-ons on top. Chicago&rsquo;s combined rate is 10.25% &mdash; among the highest big-city rates in the U.S. &mdash; driven by Cook County and city taxes. Illinois uses destination-based sourcing for remote sellers, so the rate follows the customer&rsquo;s location. QuickBooks must carry correct combined rates by jurisdiction." },
    { q: "What QuickBooks versions does TechBrot support for Illinois businesses?", a: "All current versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QuickBooks Enterprise is common among Illinois manufacturers and distributors for inventory and standard costing; QBO is dominant across Chicago agencies, healthcare, and professional services." },
    { q: "Does TechBrot file Illinois or federal tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Illinois or federal tax returns, and do not represent clients before the Illinois Department of Revenue. We deliver clean, CPA-ready bookkeeping including PPRT-ready net-income workpapers and Chicago lease-tax tracking, and coordinate with your CPA or EA who files. The standard model: TechBrot handles QuickBooks operations; your Illinois CPA handles filing." },
    { q: "How does an Illinois engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Illinois operational context (industry, Chicago vs. downstate footprint, lease-tax exposure, multi-state activity), recommend the right engagement structure, and deliver a written fixed-fee scope within 3 business days. Same-day diagnostic for emergencies." },
    { q: "Do Illinois manufacturers have special QuickBooks requirements?", a: "Yes &mdash; primarily standard costing, inventory and WIP tracking, and overhead allocation in QuickBooks Enterprise, plus clean Illinois net-income workpapers for the PPRT. Illinois&rsquo;s manufacturing base (downstate and the collar counties) needs product-line margin visibility and defensible inventory valuation. Getting costing right is the core of every Illinois manufacturing engagement." },
    { q: "How much does Illinois bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; Desktop&rarr;Online migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; business tax support $500&ndash;$3,000+; fractional CFO $3,000&ndash;$8,000+/mo." },
    { q: "Can I use my Illinois CPA for taxes and TechBrot for bookkeeping?", a: "Yes &mdash; that&rsquo;s the standard model. TechBrot handles operational bookkeeping, QuickBooks configuration, and Illinois-specific compliance (Cook County sales tax, the Chicago lease tax, PPRT-ready workpapers); your Illinois CPA handles Illinois and federal returns, the PTE election, and IDOR/IRS representation. Year-end CPA handoff is included in every recurring Illinois engagement. Most of our Illinois clients operate this way." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Illinois practice", detail: "All 102 counties served &middot; Chicago, the collar counties, and downstate &middot; Industries: manufacturing, healthcare, agencies, restaurant, professional services, trucking/logistics" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "IL statutory references reviewed against IDOR and Chicago Department of Finance primary sources &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. (H2: Multi-state Illinois businesses. + 4 H3s)
  // Baseline linked /find-an-accountant/indiana/ (a sibling state child) — reframed to the
  // built /find-an-accountant/ hub (real global page); no Illinois children.
  related: [
    { name: "Indiana", body: "Chicago-area businesses with Indiana operations across the state line &mdash; Indiana&rsquo;s county-level income taxes (LIT), cross-border payroll, and multi-state sales tax along the I-80/I-94 corridor.", cta: "Find an accountant &rarr;" },
    { name: "Wisconsin", body: "Northern Illinois businesses with WI operations &mdash; Wisconsin income tax, manufacturing-and-agriculture credits, cross-border payroll, and multi-state nexus considerations.", cta: "Find an accountant &rarr;" },
    { name: "Missouri", body: "Metro-East and downstate businesses near St. Louis with MO operations &mdash; Missouri income tax, the St. Louis earnings tax, and multi-state apportionment across the river.", cta: "Find an accountant &rarr;" },
    { name: "Iowa", body: "Western Illinois businesses with IA operations near the Quad Cities &mdash; Iowa income tax, cross-border payroll, and multi-state sales tax for regional distributors.", cta: "Find an accountant &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/illinois/";
      // QAPage mainEntity from the first 5 aiSummary items (matches the visible 5-question block).
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Illinois QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and Illinois sales tax compliance for Illinois businesses across all 102 counties — from Chicago and the collar counties to Rockford, Peoria, and Springfield. Built around the Personal Property Replacement Tax, the flat 4.95% income tax, Chicago's 15% lease/SaaS tax, and Cook County's high combined sales tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/illinois-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#il-in-brief-text","#il-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Illinois"}]},
        {"@type":"Service","@id":url+"#service","name":"Illinois QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, and Illinois sales tax compliance for Illinois businesses across all 102 counties. Delivered directly by TechBrot's lead practice, with trusted partner practices in Illinois. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois or federal tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Illinois","containsPlace":[
          {"@type":"City","name":"Chicago"},{"@type":"City","name":"Aurora"},{"@type":"City","name":"Naperville"},{"@type":"City","name":"Rockford"},{"@type":"City","name":"Springfield"},{"@type":"City","name":"Joliet"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Illinois small and mid-sized businesses, Chicago agencies and professional-services firms, manufacturers, healthcare practices, restaurants, and trucking and logistics operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Illinois accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Illinois Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Illinois QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Illinois QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Illinois QuickBooks Migration"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Illinois Sales Tax Compliance"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Illinois — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
