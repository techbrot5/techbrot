/* /find-an-accountant/arizona/ — t-state-pillar PILLAR. Arizona is a CORE state built to the 6-essentials depth
 * (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. AZ is an areaServed-ONLY state: TechBrot serves
 * Arizona remotely from the Delaware HQ, so this pillar carries NO street address, NO PostalAddress, NO geo, NO
 * LocalBusiness node, and NO hasMap (DE is the ONLY real-address state). Service + areaServed (State of Arizona + named
 * metros) only; provider = #organization. Mirrors the PA/NJ/MD/VA/OH/MI/GA/NC core-state exemplars: OMITS `ecosystem`;
 * `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the AZ children; `cities` name+county with NO
 * href; pricing rows -> 5 children + global. Arizona continues WAVE C (Sunbelt).
 *
 * ARIZONA FACTS (verified 2026-06-26 against the Arizona Dept of Revenue — see _build/strategy/AZ-FACTS.md):
 *  · State individual income tax — a FLAT 2.5% rate (since 2023; 2.5% for 2026) — the LOWEST flat income-tax rate of any
 *    U.S. state.
 *  · Corporate income tax — a flat 4.9%. PTE election available at 2.5% (matches the individual rate; SALT-cap workaround).
 *  · Transaction Privilege Tax (TPT) — THE AZ-distinct hook (NOT an ordinary sales tax): a tax on the SELLER'S privilege
 *    of doing business, owed by the vendor, levied BY BUSINESS CLASSIFICATION. State rate 5.6% + county + city layers
 *    (most city TPT reported through ADOR's centralized AZTaxes.gov portal; each city sets its own rate). PRIME
 *    CONTRACTING: the TPT base is 65% of gross receipts (the famous AZ construction quirk; the prime contractor owes it,
 *    not the subs; MRRA work taxed differently). Specific city/county rates framed qualitatively — link the ADOR rate table.
 *  · NO local/city income tax — Arizona cities levy TPT, not income tax; payroll withholding is STATE-ONLY.
 *  · Nonresident withholding — the 60-day rule (withhold once a nonresident has worked in AZ 60 days) + residents of
 *    California, Indiana, Oregon, or Virginia may claim exemption (Form 140NR + credit).
 *  · Geography — 15 counties (Maricopa-centric); Phoenix (Maricopa; semiconductors TSMC, finance, aerospace), Tucson
 *    (Pima; aerospace/defense Raytheon, the University of Arizona), Mesa/Chandler (Intel)/Scottsdale/Gilbert/Tempe (ASU)
 *    all Maricopa, Flagstaff (Coconino; tourism/university).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with Intuit.
 * It does NOT file AZ or federal returns, the corporate income tax, the individual income tax, the TPT return, or the PTE
 * election as agent; it keeps the books and coordinates with the client's CPA/EA and the Arizona Dept of Revenue. Reviews
 * are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented reviewers, no AggregateRating.
 * Outcomes/scenarios are explicitly representative composites — never real-client claims. No founder/personal name in
 * visible content; David Westgate appears only as the named lead ProAdvisor/operator. The flat 2.5% income tax, the 4.9%
 * corporate rate, the PTE 2.5%, the 5.6% state TPT, the prime-contracting 65% base, the 60-day rule, and the CA/IN/OR/VA
 * exemption are VERIFIED and stated; specific city/county TPT rates framed qualitatively. TPT is NEVER called a sales tax. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in Arizona, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Arizona bookkeeping, QuickBooks setup, cleanup, payroll, and TPT tracking to Arizona businesses across <strong>all 15 counties</strong> &mdash; from the Phoenix metro&rsquo;s semiconductor and construction boom to Tucson&rsquo;s aerospace base, Mesa, Chandler, Scottsdale, Gilbert, Tempe, and Flagstaff. Arizona&rsquo;s income tax is a <strong>flat 2.5%</strong> &mdash; the lowest flat rate in the country &mdash; so the operational work lives elsewhere. The defining Arizona tax is the <strong>Transaction Privilege Tax (TPT)</strong>: not an ordinary sales tax but a tax on the <strong>seller&rsquo;s privilege of doing business</strong>, owed by the vendor and levied <strong>by business classification</strong>, with a <strong>5.6% state rate plus county and city layers</strong> (most city TPT reported through the state&rsquo;s centralized portal). For construction, the <strong>prime-contracting rule</strong> taxes <strong>65% of the gross receipts</strong>. Arizona has <strong>no local income tax</strong>, so withholding is state-only, with a <strong>60-day rule</strong> for nonresidents and an exemption for <strong>California, Indiana, Oregon, and Virginia</strong> residents. The corporate income tax is a flat <strong>4.9%</strong>, with an elective <strong>PTE</strong> at 2.5% as a SALT-cap workaround. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Arizona returns, the corporate or individual income tax, or the TPT return &mdash; we keep the books and coordinate with your CPA and the Arizona Department of Revenue.",

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
    { value: "15", label: "Arizona counties served &mdash; the Phoenix metro, Tucson, and the whole state" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "2.5% flat", label: "Arizona individual income-tax rate &mdash; a flat 2.5%, the lowest flat income-tax rate of any U.S. state" },
    { figure: "TPT", label: "The Transaction Privilege Tax &mdash; a tax on the seller&rsquo;s privilege of doing business by classification, not an ordinary sales tax" },
    { figure: "5.6% + local", label: "State TPT rate plus county and city layers &mdash; the combined rate varies by business classification and location" },
    { figure: "65%", label: "Prime-contracting TPT base &mdash; construction is taxed on 65% of gross receipts, with the prime contractor owing the tax" },
    { figure: "4.9%", label: "Flat Arizona corporate income tax &mdash; with an elective pass-through entity (PTE) tax at 2.5%" },
    { figure: "CA/IN/OR/VA", label: "Withholding exemption &mdash; residents of these states can claim exemption from Arizona withholding (60-day rule otherwise)" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Arizona, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Arizona businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, TPT tracking, and fractional CFO coordination to Arizona businesses across all 15 counties.</strong> Coverage spans the Phoenix metro&rsquo;s semiconductor and construction boom &mdash; Phoenix, Mesa, Chandler, Scottsdale, Gilbert, Tempe &mdash; plus Tucson and Flagstaff. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is Arizona&rsquo;s income tax rate?", a: "<strong>A flat 2.5% &mdash; the lowest flat income-tax rate of any U.S. state.</strong> Arizona has levied a flat 2.5% individual income tax since 2023, and 2.5% applies for 2026. The corporate income tax is a flat 4.9%, with an elective pass-through entity (PTE) tax at 2.5% as a SALT-cap workaround. Because Arizona has <strong>no local income tax</strong>, payroll withholding is state-only &mdash; with a 60-day rule for nonresidents and an exemption for California, Indiana, Oregon, and Virginia residents." },
    { q: "What is the Arizona Transaction Privilege Tax (TPT), and is it a sales tax?", a: "<strong>The TPT is not a true sales tax &mdash; it&rsquo;s a tax on the seller&rsquo;s privilege of doing business in Arizona, legally owed by the vendor</strong> (who usually passes it through). It&rsquo;s levied <strong>by business classification</strong> (retail, contracting, restaurant, commercial lease, and more), with a <strong>5.6% state rate plus county and city rates</strong>, so the combined rate varies by activity and location. Most city TPT is reported through the Arizona Department of Revenue&rsquo;s centralized portal, though each city sets its own rate. We configure QuickBooks to charge and track TPT by the right classification and location." },
    { q: "How does the prime-contracting rule work for Arizona construction?", a: "Under the <strong>prime contracting classification</strong>, an Arizona construction project is taxed on <strong>65% of the gross receipts</strong> &mdash; the other 35% is treated as a standard deduction for materials &mdash; and the <strong>prime contractor</strong>, not the subcontractors, generally owes the TPT. Maintenance, repair, replacement, and alteration (MRRA) work is taxed differently, at the point of materials purchase. It&rsquo;s one of the most distinctive things in Arizona accounting, and getting the QuickBooks setup right for contractors is a core engagement." },
    { q: "Does TechBrot file Arizona taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Arizona or federal returns, the corporate income tax, the individual income tax, the Transaction Privilege Tax return, or the PTE election, and we do not represent clients before the Arizona Department of Revenue</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure the TPT tracking by classification and location and the state withholding, and coordinate with your existing Arizona CPA or EA and the Department of Revenue, who file." },
  ],

  // STATE GLOSSARY — the AZ terms that matter. (H2: The Arizona terms that matter…)
  stateTerms: [
    { term: "Transaction Privilege Tax (TPT)", def: "<p>Arizona&rsquo;s defining tax: <strong>not a sales tax</strong> but a tax on the <strong>seller&rsquo;s privilege of doing business</strong>, owed by the vendor and levied <strong>by business classification</strong>. State rate <strong>5.6%</strong> plus county and city layers, so the combined rate varies by activity and location. Configuring QuickBooks to charge and track TPT by classification is the core Arizona engagement. <a href=\"https://azdor.gov/business/transaction-privilege-tax/tax-rate-table\" rel=\"noopener nofollow\">ADOR TPT rate table &rarr;</a></p>" },
    { term: "Prime Contracting (the 65% Rule)", def: "<p>For construction, the <strong>prime contracting classification</strong> taxes <strong>65% of the gross receipts</strong> (the other 35% is a standard materials deduction), and the <strong>prime contractor owes the TPT</strong>, not the subs. MRRA (maintenance/repair/replacement/alteration) work is taxed differently. Getting the QuickBooks setup right for contractors is a distinctive Arizona engagement. <a href=\"https://azdor.gov/transaction-privilege-tax/contracting-guidelines\" rel=\"noopener nofollow\">ADOR contracting guidelines &rarr;</a></p>" },
    { term: "Flat 2.5% Income Tax", def: "<p>Arizona&rsquo;s individual income tax is a <strong>single flat 2.5% rate</strong> &mdash; in place since 2023 and the <strong>lowest flat income-tax rate of any U.S. state</strong>. Confirm the current rate with the <a href=\"https://azdor.gov/forms/individual-income-tax-highlights\" rel=\"noopener nofollow\">Arizona Dept of Revenue</a>.</p>" },
    { term: "City TPT &amp; the ADOR Portal", def: "<p>Arizona cities levy their own TPT (each sets its own rate), but <strong>most city TPT is reported and paid through the Arizona Department of Revenue&rsquo;s centralized AZTaxes.gov portal</strong> &mdash; one return for state, county, and city. We set QuickBooks up so the right combined rate applies by location and the reporting ties out.</p>" },
    { term: "No Local Income Tax &amp; the 60-Day Rule", def: "<p>Arizona cities levy TPT, <strong>not income tax</strong>, so payroll income-tax withholding is <strong>state-only</strong>. For a nonresident, withholding generally begins once they&rsquo;ve <strong>worked in Arizona for 60 days</strong> &mdash; and residents of <strong>California, Indiana, Oregon, or Virginia</strong> can claim exemption (Form 140NR + a credit for tax paid to their home state). We configure QuickBooks Payroll accordingly.</p>" },
    { term: "Corporate Tax &amp; the PTE Election", def: "<p>Arizona&rsquo;s corporate income tax is a flat <strong>4.9%</strong>. A partnership or S-corp can make the <strong>elective pass-through entity (PTE) tax</strong> at <strong>2.5%</strong> &mdash; paying Arizona tax at the entity level so owners can deduct it federally (a SALT-cap workaround). The CPA makes the election and files; we keep the books PTE-ready.</p>" },
    { term: "Semiconductors &amp; the Phoenix Boom", def: "<p>Metro Phoenix is a national <strong>semiconductor and construction hub</strong> &mdash; TSMC&rsquo;s multi-fab campus, Intel in Chandler, and the build-out around them. For manufacturers and contractors, that means <strong>job costing, inventory, WIP, and the prime-contracting TPT</strong>, handled on our national industry pages.</p>" },
    { term: "Aerospace &amp; Defense (Tucson)", def: "<p>Tucson anchors Arizona&rsquo;s <strong>aerospace and defense</strong> sector &mdash; Raytheon and a deep supplier base &mdash; alongside the University of Arizona. For these contractors, <strong>government-contract cost accounting and project tracking</strong> matter, kept clean and CPA-ready.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in Arizona. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from TechBrot&rsquo;s lead practice.", lede: "Most Arizona engagements &mdash; bookkeeping, QuickBooks work, payroll, and the TPT setup by classification and location &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/arizona/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "TPT configured by business classification and location", "Prime-contracting (65%) setup for construction", "State-only withholding with the 60-day and CA/IN/OR/VA rules", "Remote delivery, secure, encrypted access"], cta: "Browse Arizona services &rarr;", href: "#az-services" },
    { eyebrow: "02 &middot; Curated Arizona partners", heading: "Trusted local Arizona partners.", lede: "When in-person presence in the Phoenix, Tucson, or Scottsdale metros matters, or local CPA hand-off, engagements can route to a vetted Arizona accounting practice running under TechBrot&rsquo;s standards.", list: ["Arizona-based independent practice", "TPT classification and prime-contracting fluency", "PTE election and entity coordination", "Local CPA and EA hand-off", "Arizona Dept of Revenue and IRS audit-support coordination", "Semiconductor, construction, and aerospace industry depth", "Same platform standards as direct delivery"], cta: "See Arizona partner status &rarr;", href: "#az-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Arizona or federal returns, the corporate income tax, the individual income tax, or the Transaction Privilege Tax return. For Arizona Department of Revenue filings, audit representation, and tax strategy, we coordinate with your existing Arizona CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Arizona accounting different. + 4 H3s)
  context: [
    { category: "The Transaction Privilege Tax", heading: "It&rsquo;s a privilege tax on the seller &mdash; not a sales tax.", body: ["Arizona&rsquo;s flat 2.5% income tax is the lowest in the country, so the complexity is the TPT. It&rsquo;s a tax on the <strong>seller&rsquo;s privilege of doing business</strong>, owed by the vendor and levied <strong>by business classification</strong> &mdash; with a 5.6% state rate plus county and city layers.", "Because the rate and base depend on the activity and location, QuickBooks has to be set up to charge and track TPT by the right classification. We configure it and reconcile it so the AZTaxes.gov reporting ties out. <a href=\"/find-an-accountant/arizona/quickbooks-setup/\">Arizona QuickBooks setup &rarr;</a>"] },
    { category: "Prime Contracting (Construction)", heading: "Construction is taxed on 65% of gross receipts.", body: ["For construction, Arizona&rsquo;s <strong>prime contracting</strong> rule taxes <strong>65% of the gross receipts</strong> (the other 35% is a materials deduction), and the <strong>prime contractor owes the TPT</strong>, not the subs &mdash; while MRRA work is taxed at the materials purchase instead.", "It&rsquo;s one of the most distinctive things in Arizona accounting, and a frequent source of errors. We set up contractor files to handle the 65% base, MRRA vs. modification work, and the project-level tracking. <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">Contractor cleanup &rarr;</a>"] },
    { category: "Flat 2.5% Income Tax &amp; State-Only Withholding", heading: "The lowest flat rate in the country.", body: ["Arizona&rsquo;s <strong>flat 2.5%</strong> individual income tax is the lowest flat rate of any state, and there&rsquo;s <strong>no local income tax</strong>, so payroll withholding is state-only &mdash; simpler than Ohio or Michigan.", "For nonresidents, withholding generally begins after <strong>60 days</strong>, and residents of <strong>California, Indiana, Oregon, or Virginia</strong> can claim exemption. We configure QuickBooks Payroll so cross-border staff are withheld correctly. <a href=\"/quickbooks/payroll/\">Payroll &rarr;</a>"] },
    { category: "A Semiconductor &amp; Construction Economy", heading: "Phoenix&rsquo;s boom and Tucson&rsquo;s aerospace base.", body: ["Arizona is a national <strong>semiconductor and construction hub</strong> &mdash; TSMC and Intel in the Phoenix corridor and the build-out around them &mdash; with deep aerospace and defense (Tucson), healthcare, and tourism.", "That mix means job costing and the prime-contracting TPT for builders, inventory and WIP for manufacturers, and &mdash; for growing pass-throughs &mdash; the <strong>PTE election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "Arizona operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which TPT classifications you fall under, whether prime contracting applies, where your multi-state withholding runs, and whether the PTE election fits.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What an Arizona engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Phoenix contractor", heading: "A builder taxing the wrong base on its projects.", body: ["<strong>Situation.</strong> A Phoenix-area construction company was reporting TPT on its full contract receipts, hadn&rsquo;t applied the prime-contracting <strong>65% base</strong>, and was mixing MRRA work in with new construction.", "<strong>What we did.</strong> Rebuilt the <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">QuickBooks file</a> to apply the 65% prime-contracting base, separated MRRA from modification work, and set the TPT items up by jurisdiction.", "<strong>Outcome.</strong> TPT calculated on the correct base; MRRA handled separately; clean AZTaxes.gov reporting for the CPA."] },
    { tag: "Composite &middot; Scottsdale retailer", heading: "A multi-city seller charging one TPT rate.", body: ["<strong>Situation.</strong> A Scottsdale retailer selling across several Maricopa cities charged a single TPT rate, didn&rsquo;t account for the city layers, and was unsure how the centralized portal reporting worked.", "<strong>What we did.</strong> Configured the <a href=\"/find-an-accountant/arizona/quickbooks-setup/\">QuickBooks TPT items</a> by business classification and location so the right combined rate applied, and reconciled the city, county, and state portions for the AZTaxes.gov return.", "<strong>Outcome.</strong> The correct combined TPT charged by location; the portal reporting reconciled; no notice exposure."] },
    { tag: "Composite &middot; Remote-team employer", heading: "An employer with California-resident remote staff.", body: ["<strong>Situation.</strong> A Tempe company had hired remote employees in California and elsewhere, and was unsure whether to withhold Arizona tax given the 60-day rule and the California exemption.", "<strong>What we did.</strong> Mapped each employee&rsquo;s residency and work days, applied the <a href=\"/find-an-accountant/arizona/small-business-accountant/\">60-day rule and the CA/IN/OR/VA exemption</a> in QuickBooks Payroll, and documented the positions.", "<strong>Outcome.</strong> Withholding correct per employee; the California-resident exemption applied; no surprise notices."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Arizona engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; TPT by classification, the prime-contracting 65% rule, multi-state withholding with the 60-day and CA/IN/OR/VA rules &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Arizona outcomes.)
  outcomes: [
    { figure: "65%", detail: "prime-contracting TPT base applied correctly, fixing a full-receipts setup for a contractor", meta: "Representative &middot; Phoenix contractor" },
    { figure: "TPT", detail: "items configured by business classification and location so the right combined rate applied", meta: "Representative &middot; multi-city retailer" },
    { figure: "60-day", detail: "nonresident withholding set with the CA/IN/OR/VA exemption applied per employee", meta: "Representative &middot; remote-team employer" },
    { figure: "2.5%", detail: "books kept PTE-ready so the entity-level election could be evaluated cleanly", meta: "Representative &middot; pass-through review" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Arizona &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you which TPT classification a new revenue line falls under, whether your construction work is prime contracting or MRRA, or whether your pass-through should make the PTE election this year. For Arizona businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Arizona-specific tax-position work (including TPT and PTE coordination) with your CPA. By application. Best fit: Arizona contractors, manufacturers, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no AZ industry pages).
  // (H2: Industry-specific accounting for Arizona's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Construction", href: "/accounting/industries/construction/", body: "Arizona&rsquo;s construction boom runs on the prime-contracting TPT. <strong>Job costing, WIP, and retainage</strong>, the prime-contracting 65% base, MRRA vs. modification work, certified payroll, and CPA-ready job profitability." },
    { num: "02", name: "Manufacturing &amp; Semiconductors", href: "/accounting/industries/manufacturing/", body: "TSMC and Intel anchor the Phoenix corridor. <strong>Job and standard costing</strong>, inventory and WIP, multi-plant reporting, the TPT classification for sales, and clean books for capital-intensive operations." },
    { num: "03", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the fast-growing metros. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and the commercial-lease TPT classification where it applies." },
    { num: "04", name: "Professional &amp; Financial Services", href: "/accounting/industries/professional-services/", body: "Phoenix back-office and finance, plus agencies and consultancies statewide. <strong>Project profitability</strong>, owner compensation, the TPT footprint for taxable services, and PTE planning." },
    { num: "05", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Banner Health and a large practice base across the metros. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll." },
    { num: "06", name: "Logistics &amp; Distribution", href: "/accounting/industries/trucking/", body: "Phoenix and Tucson as Southwest distribution hubs. <strong>Per-lane and per-customer profitability</strong>, fleet depreciation, owner-operator 1099s, and multi-state nexus." },
  ],
  industriesNote: "Arizona industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Arizona&rsquo;s TPT and prime-contracting stack. Don&rsquo;t see your sector &mdash; restaurants, e-commerce, SaaS, nonprofits, hospitality? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core AZ money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Arizona QuickBooks Accountant", href: "/find-an-accountant/arizona/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Arizona businesses. Covers QBO, Desktop, Enterprise, and Payroll, with TPT and prime-contracting fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Arizona ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Arizona Small Business Accountant", href: "/find-an-accountant/arizona/small-business-accountant/", body: "Operational accounting for Arizona small businesses &mdash; clean books, TPT compliance by classification, and CPA-ready statements, with multi-state withholding handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Arizona Bookkeeping Services", href: "/find-an-accountant/arizona/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Arizona businesses. Bank reconciliation, TPT sub-reconciliation by classification, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Arizona bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Arizona QuickBooks Cleanup", href: "/find-an-accountant/arizona/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong TPT classification, full-receipts contractor setups missing the 65% base, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Arizona cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Arizona QuickBooks Setup", href: "/find-an-accountant/arizona/quickbooks-setup/", body: "Professional QuickBooks implementation for Arizona businesses &mdash; chart of accounts for your industry, TPT items by classification and location, and state payroll withholding. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Arizona setup &rarr;" },
  ],
  servicesNote: "Other Arizona engagements route to our national service pages, configured for Arizona: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (multi-state)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">TPT / Sales Tax Compliance</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (TPT/PTE)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to AZ children + global pages (no AZ pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Arizona engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/arizona/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, TPT sub-reconciliation by classification, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and TPT/prime-contracting complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/arizona/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, TPT items by classification and location, state payroll withholding" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/arizona/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong TPT classification and full-receipts contractor setups are common fixes" },
    { svc: "TPT / sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "TPT by classification (5.6% state + county/city) &middot; prime contracting &middot; multi-state nexus" },
    { svc: "Payroll setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "State-only withholding &middot; the 60-day rule &middot; the CA/IN/OR/VA exemption" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "Arizona and multi-state withholding per employee; 60-day and exemption rules" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Arizona-aware strategic finance; TPT, prime contracting, PTE, and multi-state planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of TPT classifications and jurisdictions you report, whether prime contracting applies, your multi-state footprint, industry specifics, and how far behind the books are. TechBrot does not file Arizona returns, the corporate or individual income tax, or the TPT return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Arizona businesses statewide. + 2 H3s)
  cities: [
    { name: "Phoenix", county: "Maricopa County" },
    { name: "Tucson", county: "Pima County" },
    { name: "Mesa", county: "Maricopa County" },
    { name: "Chandler", county: "Maricopa County" },
    { name: "Scottsdale", county: "Maricopa County" },
    { name: "Gilbert", county: "Maricopa County" },
    { name: "Tempe", county: "Maricopa County" },
    { name: "Flagstaff", county: "Coconino County" },
  ],
  countyProse: "TechBrot serves all 15 Arizona counties &mdash; <strong>Maricopa</strong> anchoring the Phoenix metro (Phoenix, Mesa, Chandler, Scottsdale, Gilbert, Tempe) and its semiconductor and construction boom; <strong>Pima</strong> (Tucson) leading aerospace and defense; <strong>Coconino</strong> (Flagstaff) and the northern tourism corridor; <strong>Yuma</strong> for agriculture; and the rural counties across the state. Remote, fixed-fee service reaches all 15 counties; each city and county sets its own TPT rate by business classification, which we confirm before charging.",
  citiesNote: "Don&rsquo;t see your city? All 15 Arizona counties are served via remote engagement delivery. <a href=\"/contact/?intent=arizona&state=arizona&source_type=location&funnel_stage=MOFU\">Start an Arizona conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across construction, manufacturing, and professional services &mdash; the judgment behind every Arizona engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (AZ-localized). (H2: Trusted Arizona partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Arizona tax fluency", detail: "TPT by business classification, the prime-contracting 65% rule, the city/county portal reporting, state-only withholding with the 60-day and CA/IN/OR/VA rules, and PTE coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Job costing and the prime-contracting TPT for construction, inventory and WIP for semiconductors and manufacturing, and multi-state nexus across the Southwest." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (AZ-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Arizona operational depth", body: "The flat 2.5% income tax, the Transaction Privilege Tax by business classification, the prime-contracting 65% rule for construction, and the 60-day nonresident withholding rule. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-classification, TPT-heavy Arizona engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Arizona business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Arizona businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Arizona CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Arizona / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "TPT by business classification", us: "<strong>Configured by classification + location</strong>", cpa: "Varies; not their primary focus", remote: "Often one rate &mdash; wrong", winner: "us" },
    { dim: "Prime-contracting (65%) setup", us: "<strong>Built for contractors, MRRA handled</strong>", cpa: "Files it; not in the books daily", remote: "Rarely handled", winner: "us" },
    { dim: "Multi-state withholding (60-day rule)", us: "<strong>Set per work state correctly</strong>", cpa: "Usually; varies by firm", remote: "Often wrong assumptions", winner: "us" },
    { dim: "PTE / entity-choice readiness", us: "<strong>Books kept PTE-ready</strong>", cpa: "Makes the election; files", remote: "Rarely considered", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Arizona DOR / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Arizona Department of Revenue filings, the corporate income tax, the TPT return, the PTE election, and representation, use a licensed Arizona CPA or EA. For QuickBooks operations, bookkeeping, TPT setup by classification and location, the prime-contracting 65% rule, and multi-state withholding &mdash; TechBrot is built for that. Most Arizona clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Arizona official sources (from AZ-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Arizona Department of Revenue", href: "https://azdor.gov/", detail: "Authoritative source for the individual and corporate income tax, the Transaction Privilege Tax, and employer withholding." },
    { name: "Arizona Dept of Revenue &mdash; Individual Income Tax Highlights", href: "https://azdor.gov/forms/individual-income-tax-highlights", detail: "The flat 2.5% individual income-tax rate &mdash; the lowest flat rate of any U.S. state." },
    { name: "Arizona Dept of Revenue &mdash; Transaction Privilege Tax", href: "https://azdor.gov/business/transaction-privilege-tax", detail: "The TPT &mdash; a tax on the privilege of doing business, by classification, with state, county, and city layers." },
    { name: "Arizona Dept of Revenue &mdash; TPT Tax Rate Table", href: "https://azdor.gov/business/transaction-privilege-tax/tax-rate-table", detail: "The authority for the combined TPT rate by business classification, city, and county." },
    { name: "Arizona Dept of Revenue &mdash; Contracting Guidelines", href: "https://azdor.gov/transaction-privilege-tax/contracting-guidelines", detail: "The prime-contracting 65% rule, MRRA, and modification contracting for construction." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Arizona-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Arizona QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Arizona businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and TPT tracking to Arizona businesses statewide &mdash; remote-first from our Delaware headquarters. All 15 counties covered, from the Phoenix metro&rsquo;s semiconductor and construction boom to Tucson, Mesa, Chandler, Scottsdale, Gilbert, Tempe, and Flagstaff. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is Arizona&rsquo;s income tax rate?", a: "A flat 2.5% &mdash; the lowest flat income-tax rate of any U.S. state. Arizona has levied a flat 2.5% individual income tax since 2023, and 2.5% applies for 2026. The corporate income tax is a flat 4.9%, with an elective pass-through entity (PTE) tax at 2.5% as a SALT-cap workaround. Because Arizona has no local income tax, payroll withholding is state-only." },
    { q: "What is the Arizona Transaction Privilege Tax (TPT), and is it a sales tax?", a: "It&rsquo;s not a true sales tax &mdash; the TPT is a tax on the seller&rsquo;s privilege of doing business in Arizona, legally owed by the vendor (who usually passes it through to the customer). It&rsquo;s levied by business classification (retail, contracting, restaurant, commercial lease, and more), with a 5.6% state rate plus county and city rates, so the combined rate varies by activity and location. Most city TPT is reported through the Arizona Department of Revenue&rsquo;s centralized portal, though each city sets its own rate. We configure QuickBooks to charge and track TPT by the right classification and location." },
    { q: "How does the prime-contracting rule work for Arizona construction?", a: "Under the prime contracting classification, an Arizona construction project is taxed on 65% of the gross receipts &mdash; the other 35% is treated as a standard deduction for materials &mdash; and the prime contractor, not the subcontractors, generally owes the TPT. Maintenance, repair, replacement, and alteration (MRRA) work is taxed differently, at the point of materials purchase. It&rsquo;s one of the most distinctive things in Arizona accounting, and getting the QuickBooks setup right for contractors &mdash; the 65% base, MRRA vs. modification work, project tracking &mdash; is a core engagement." },
    { q: "Do I have to withhold Arizona tax for out-of-state remote employees?", a: "It depends. Arizona generally requires withholding on a nonresident&rsquo;s Arizona-source wages once they&rsquo;ve worked in Arizona for 60 days (with a short-term exception for qualifying employers). But residents of California, Indiana, Oregon, or Virginia can claim an exemption from Arizona withholding (they file Arizona Form 140NR and take a credit against Arizona tax for tax paid to their home state). We configure QuickBooks Payroll so each employee is withheld correctly under the 60-day rule and the exemption." },
    { q: "Does Arizona have a local or city income tax?", a: "No. Arizona cities levy the Transaction Privilege Tax (TPT), not an income tax, so payroll income-tax withholding is state-only &mdash; simpler than Ohio or Michigan on the income-tax side. The complexity is on the TPT side instead: the right business classification and the right combined city/county/state rate by location. We handle both the state-only payroll withholding and the TPT setup." },
    { q: "Does TechBrot file Arizona tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Arizona or federal returns, the corporate income tax, the individual income tax, the Transaction Privilege Tax return, or the PTE election, and we do not represent clients before the Arizona Department of Revenue. We deliver clean, CPA-ready bookkeeping, configure the TPT tracking by classification and location and the state withholding, and coordinate with your Arizona CPA or EA and the Department of Revenue, who file." },
    { q: "How does an Arizona engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Arizona operational context &mdash; which TPT classifications you fall under, whether prime contracting applies, where your multi-state withholding runs, whether the PTE election fits &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Arizona bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; TPT/sales-tax help from $250/mo; payroll setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the number of TPT classifications and jurisdictions you report, whether prime contracting applies, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Arizona practice", detail: "All 15 counties served remotely &middot; Phoenix, Tucson, Mesa, Chandler, Scottsdale, Gilbert, Tempe, Flagstaff &middot; Industries handled on the national pages, configured for AZ" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Arizona statutory references reviewed against Arizona Department of Revenue primary sources &middot; The flat 2.5% income tax, the 4.9% corporate rate, the 5.6% state TPT, and the prime-contracting 65% base are stated as verified &middot; Specific city/county TPT rates framed qualitatively and verified against the ADOR rate table &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — California + Texas + Delaware exist (link); NV/NM/CO coming soon (no href -> hub). (H2: Multi-state Arizona businesses. + H3s)
  related: [
    { name: "California", href: "/find-an-accountant/california/", body: "Arizona businesses with California operations or staff to the west &mdash; California-resident employees are exempt from Arizona withholding, and California&rsquo;s own income tax, sales tax, and nexus rules are scoped alongside your Arizona books.", cta: "ProAdvisors in California &rarr;" },
    { name: "Texas", href: "/find-an-accountant/texas/", body: "Arizona businesses expanding into Texas &mdash; Texas&rsquo;s no personal income tax, its franchise (margin) tax, and the multi-state nexus questions, scoped with your Arizona books.", cta: "ProAdvisors in Texas &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "Arizona businesses with a Delaware entity or Mid-Atlantic operations &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your Arizona books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "Nevada, New Mexico &amp; Colorado", body: "Arizona businesses expanding into their Southwest neighbors &mdash; Nevada&rsquo;s no-income-tax-but-Commerce-Tax regime, New Mexico&rsquo;s gross receipts tax, and Colorado&rsquo;s home-rule sales tax &mdash; with cross-border payroll and tax nexus scoped as those state pages come online.", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/arizona/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Arizona QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and TPT compliance for Arizona businesses across all 15 counties — from the Phoenix metro's semiconductor and construction boom to Tucson, Mesa, Chandler, Scottsdale, Gilbert, Tempe, and Flagstaff. Built around the flat 2.5% income tax (the lowest in the country) and the Transaction Privilege Tax (TPT) — a privilege tax on the seller by business classification, with state, county, and city layers and the prime-contracting 65% rule for construction.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/arizona-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#az-in-brief-text","#az-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Arizona"}]},
        {"@type":"Service","@id":url+"#service","name":"Arizona QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and Transaction Privilege Tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with Arizona state withholding (no local income tax; the 60-day nonresident rule and the CA/IN/OR/VA exemption), and Transaction Privilege Tax (TPT) tracking by business classification (5.6% state plus county and city, with the prime-contracting 65% base for construction) for Arizona businesses across all 15 counties. Delivered remotely by TechBrot. Independent Certified QuickBooks ProAdvisor firm; does not file Arizona or federal returns, the corporate income tax, the individual income tax, the TPT return, or the PTE election — coordinates with the client's CPA or EA and the Arizona Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Arizona","sameAs":"https://en.wikipedia.org/wiki/Arizona","containsPlace":[
          {"@type":"City","name":"Phoenix"},{"@type":"City","name":"Tucson"},{"@type":"City","name":"Mesa"},{"@type":"City","name":"Chandler"},{"@type":"City","name":"Scottsdale"},{"@type":"City","name":"Gilbert"},{"@type":"City","name":"Tempe"},{"@type":"City","name":"Flagstaff"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Arizona small and mid-sized businesses, construction and contracting firms, semiconductor and advanced manufacturers, aerospace and defense suppliers, real estate operators, professional and financial-services firms, and healthcare practices"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Arizona accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Arizona QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Arizona Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Arizona Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Arizona QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Arizona QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Arizona — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
