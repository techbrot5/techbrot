/* /find-an-accountant/maryland/ — t-state-pillar PILLAR. Maryland is a CORE state built to the 6-essentials
 * depth (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. MD is an areaServed-ONLY state:
 * TechBrot serves Maryland remotely from the Delaware HQ, so this pillar carries NO street address, NO
 * PostalAddress, NO geo, NO LocalBusiness node, and NO hasMap (DE is the ONLY real-address state). Service +
 * areaServed (State of Maryland + named metros) only; provider = #organization. Mirrors the PA/NJ core-state
 * exemplars: OMITS `ecosystem`; `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the MD
 * children; `cities` name+county with NO href; pricing rows -> 5 children + global.
 *
 * MARYLAND FACTS (verified 2026-06-26 against the Comptroller of Maryland + MD General Assembly BRFA 2025 —
 * see _build/strategy/MD-FACTS.md):
 *  · State individual income tax — GRADUATED, 2% up to a top 6.50% (BRFA 2025 raised the top from 5.75% and added
 *    new 6.25% and 6.50% high-income brackets; single/joint thresholds differ — middle brackets framed qualitatively).
 *  · Capital gains surtax (new 2025) — 2% on net capital gains for taxpayers with federal AGI over $300,000 (a 2026
 *    bill to raise it to 3% is PENDING, not law).
 *  · County "piggyback" Local Income Tax — all 23 counties + Baltimore City levy a local income tax (~2.25%–3.20%,
 *    some now graduated by income), collected on the state return, withheld by the employer based on the employee's
 *    county of residence (Form MW507). RATES framed qualitatively, never a specific county %.
 *  · Reciprocity — DC/PA/VA residents (with <=183 days in MD) and WV residents (regardless) are exempt from MD
 *    withholding via Form MW507/MW507M (ties to the PA and Virginia anchors).
 *  · Corporate income tax — 8.25% flat.
 *  · Pass-Through Entity (PTE) tax — elective SALT-cap workaround; 7.5% on resident/individual members, 8.25% on
 *    nonresident entity members (advisory hook).
 *  · Sales & use tax — 6% statewide, no general local; PLUS a NEW 3% tax on data/IT services (NAICS 518/519/5415) and
 *    software publishing incl. business-use SaaS (NAICS 5132), effective July 1, 2025 (SaaS to consumers stays 6%;
 *    MPU certificates apportion). Genuinely new — confirm taxability against Comptroller TB-56 + the client's CPA.
 *  · Geography — 23 counties + Baltimore City; split between the Baltimore metro and the DC suburbs (Montgomery /
 *    Prince George's); federal-contracting, biotech/life-sciences, IT/cyber, healthcare, and Port-of-Baltimore logistics.
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with
 * Intuit. It does NOT file MD or federal returns, the corporate income tax, the state or local income tax, the
 * payroll-withholding filings, the sales-tax return (incl. the new 3% IT/data tax), or the PTE return as agent; it
 * keeps the books and coordinates with the client's CPA/EA and the Comptroller of Maryland. Reviews are ONLY the 2
 * real Clutch reviews (Heidi Schubert, Barbara Best) — no invented reviewers, no AggregateRating. Outcomes/scenarios
 * are explicitly representative composites — never real-client claims. No founder/personal name in visible content;
 * David Westgate appears only as the named lead ProAdvisor/operator. State middle brackets and specific county local
 * rates are framed qualitatively; the capital-gains surtax is 2% (the proposed 3% is not law); the 3% IT/data tax is
 * new — readers are pointed to TB-56 and their CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in Maryland, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Maryland bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to Maryland businesses across <strong>all 23 counties and Baltimore City</strong> &mdash; from the Baltimore metro and the Port to the DC-suburban corridor in Montgomery and Prince George&rsquo;s, plus Annapolis, Columbia, and Frederick. Our Delaware headquarters anchors the Mid-Atlantic. Maryland&rsquo;s state income tax is <strong>graduated &mdash; from 2% up to a 6.50% top rate</strong> after the 2025 budget added new high-income brackets (and a 2% surtax on large capital gains) &mdash; but the operational work lives in the layers around it. <strong>Every one of the 23 counties and Baltimore City levies its own &ldquo;piggyback&rdquo; local income tax</strong>, withheld by each employee&rsquo;s county of residence on <strong>Form MW507</strong>; Maryland has <strong>reciprocity with DC, Pennsylvania, Virginia, and West Virginia</strong>, so cross-border workers are withheld for their home state; and a <strong>new 3% sales tax on data and IT services</strong> (including business-use SaaS) now sits alongside the 6% standard rate. The <strong>corporate rate is 8.25%</strong>, and growing pass-throughs weigh the <strong>PTE election</strong>. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Maryland returns, the local income tax, the payroll filings, or the sales-tax return &mdash; we keep the books and coordinate with your CPA and the Comptroller.",

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
    { value: "24", label: "Maryland local taxing jurisdictions served &mdash; 23 counties + Baltimore City" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "2&ndash;6.50%", label: "Graduated Maryland state income tax &mdash; the 2025 budget raised the top rate to 6.50% and added new high-income brackets" },
    { figure: "23 + 1", label: "Local taxing jurisdictions &mdash; all 23 counties and Baltimore City levy a &ldquo;piggyback&rdquo; local income tax, withheld by the employee&rsquo;s county of residence" },
    { figure: "3%", label: "New sales tax on data and IT services (including business-use SaaS), effective July 1, 2025 &mdash; alongside the 6% standard rate" },
    { figure: "8.25%", label: "Flat Maryland corporate income tax &mdash; separate from the local-tax withholding obligation on employees" },
    { figure: "DC/PA/VA/WV", label: "Reciprocity &mdash; residents of these jurisdictions are exempt from Maryland withholding on Maryland wages via Form MW507" },
    { figure: "2%", label: "Capital-gains surtax added in 2025 for taxpayers with federal AGI over $300,000 &mdash; on top of the regular income tax" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Maryland, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Maryland businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to Maryland businesses across all 23 counties and Baltimore City.</strong> Coverage spans the Baltimore metro and the Port, the DC-suburban corridor in Montgomery and Prince George&rsquo;s counties, the I-270 biotech corridor, Annapolis, Columbia, and Frederick. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Maryland&rsquo;s county &ldquo;piggyback&rdquo; local income tax work for payroll?", a: "On top of the graduated state income tax, <strong>all 23 Maryland counties and Baltimore City levy their own local income tax</strong> &mdash; currently in the range of about 2.25% to 3.20%, and some counties now use graduated local brackets. The rate that applies is set by each employee&rsquo;s <strong>county (or Baltimore City) of residence</strong>, established on <strong>Form MW507</strong>, and the local tax is collected on the state return. QuickBooks Payroll has to apply the correct local rate per employee by county of residence &mdash; confirm current rates against the Comptroller&rsquo;s local-rate list." },
    { q: "Does Maryland have reciprocity with neighboring states?", a: "Yes. <strong>Maryland has reciprocal income-tax agreements with DC, Pennsylvania, Virginia, and West Virginia.</strong> Residents of DC, Pennsylvania, and Virginia who did not keep a Maryland home for more than 183 days &mdash; and West Virginia residents regardless of time in Maryland &mdash; are <strong>exempt from Maryland withholding</strong> on Maryland wages; they file <strong>Form MW507/MW507M</strong>, and the employer withholds for the home state instead. We configure QuickBooks Payroll per employee so cross-border staff are withheld correctly." },
    { q: "What is Maryland&rsquo;s new 3% tax on IT and data services?", a: "Effective <strong>July 1, 2025</strong>, Maryland applies a <strong>3% sales and use tax to data and information-technology services and to software publishing &mdash; including business-use SaaS</strong> (the 3% applies where no higher rate already does). SaaS sold to individual consumers stays at the 6% standard rate. It is genuinely new and still being interpreted, so we configure the QuickBooks sales-tax items for the 3% IT/data rate versus the 6% rate and keep the books reconciled &mdash; and we point you and your CPA to the Comptroller&rsquo;s guidance (Technical Bulletin 56) on what&rsquo;s taxable." },
    { q: "Does TechBrot file Maryland taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Maryland or federal returns, the corporate income tax, the state or local income tax, the payroll-withholding filings, the sales-tax return, or the pass-through entity (PTE) return, and we do not represent clients before the Comptroller of Maryland</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure the piggyback local tax, reciprocity, and the 3% IT/data tax, and coordinate with your existing Maryland CPA or EA, who files." },
  ],

  // STATE GLOSSARY — the MD terms that matter. (H2: The Maryland terms that matter…)
  stateTerms: [
    { term: "County &ldquo;Piggyback&rdquo; Local Income Tax", def: "<p>Every one of Maryland&rsquo;s <strong>23 counties and Baltimore City levies a local income tax</strong> on top of the state tax &mdash; currently about <strong>2.25% to 3.20%</strong>, with some counties now graduated by income. It is <strong>collected on the state return</strong> and <strong>withheld by the employer based on the employee&rsquo;s county of residence</strong>. Confirm the current rate on the <a href=\"https://www.marylandtaxes.gov/business/income/withholding/index.php\" rel=\"noopener nofollow\">Comptroller&rsquo;s local-rate list</a>.</p>" },
    { term: "Form MW507", def: "<p>The <strong>Maryland employee&rsquo;s withholding exemption certificate.</strong> MW507 establishes the employee&rsquo;s <strong>county (or Baltimore City) of residence</strong> for local-tax withholding, and (with MW507M) claims the <strong>reciprocity exemption</strong> for a DC, PA, VA, or WV resident. QuickBooks Payroll has to reflect the MW507 county per employee.</p>" },
    { term: "Reciprocity (DC / PA / VA / WV)", def: "<p>Maryland has <strong>reciprocal income-tax agreements</strong> with <strong>DC, Pennsylvania, Virginia, and West Virginia</strong>. A resident of those jurisdictions working in Maryland is <strong>exempt from Maryland withholding</strong> (DC/PA/VA with no Maryland abode over 183 days; WV regardless), and is withheld for their home state instead. Essential for the DC-metro cross-border workforce. <a href=\"/find-an-accountant/maryland/quickbooks-accountant/\">Maryland payroll setup &rarr;</a></p>" },
    { term: "Graduated State Income Tax (2025 brackets)", def: "<p>Maryland&rsquo;s state income tax is <strong>graduated &mdash; from 2% to a 6.50% top rate</strong>. The <strong>2025 budget (BRFA)</strong> raised the top from 5.75% and added new high-income brackets (6.25% and 6.50%). Single- and joint-filer thresholds differ; confirm the current schedule on the <a href=\"https://www.marylandtaxes.gov/individual/income/tax-info/tax-rates.php\" rel=\"noopener nofollow\">Comptroller rate schedule</a>.</p>" },
    { term: "Capital-Gains Surtax (2%)", def: "<p>The 2025 budget added a <strong>2% surtax on net capital gains</strong> for taxpayers with <strong>federal AGI over $300,000</strong>, on top of the regular income tax. (A 2026 bill to raise it to 3% is proposed, not law.) Relevant for owners planning a sale or large gain &mdash; a coordination item with the CPA.</p>" },
    { term: "Sales Tax &amp; the New 3% IT/Data Tax", def: "<p>Maryland&rsquo;s sales tax is <strong>6% statewide with no general local add-on</strong>. Effective <strong>July 1, 2025</strong>, a <strong>3% rate applies to data and IT services and to software publishing, including business-use SaaS</strong> (consumer SaaS stays at 6%). The QuickBooks sales-tax items have to distinguish the 3% IT/data rate from the 6% rate. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance help &rarr;</a></p>" },
    { term: "Pass-Through Entity (PTE) Tax", def: "<p>Maryland lets a pass-through entity (partnership, S corp, multi-member LLC) <strong>elect to pay tax at the entity level</strong> as a SALT-cap workaround, so members may deduct the Maryland tax federally and receive a credit. The PTE tax is <strong>7.5% on resident/individual members</strong> and 8.25% on nonresident entity members. We keep the books PTE-ready; your CPA makes the election and files.</p>" },
    { term: "Multiple Points of Use (MPU)", def: "<p>For digital purchases used both inside and outside Maryland, a buyer can use a <strong>Multiple Points of Use (MPU) Certificate</strong> to apportion the sales/use tax &mdash; relevant for the new 3% IT/data-services tax when software is used across multiple states. We track the apportionment basis in the books.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in Maryland. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from neighboring Delaware.", lede: "Most Maryland engagements &mdash; bookkeeping, QuickBooks work, payroll, the piggyback local tax, reciprocity, and sales-tax tracking &mdash; are delivered directly by TechBrot&rsquo;s lead practice, headquartered in the Mid-Atlantic. <a href=\"/find-an-accountant/maryland/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Maryland payroll &mdash; county piggyback local tax by county of residence", "DC/PA/VA/WV reciprocity (MW507) configured per employee", "Sales-tax setup incl. the 3% IT/data rate vs the 6% rate", "Remote delivery, secure, encrypted access"], cta: "Browse Maryland services &rarr;", href: "#md-services" },
    { eyebrow: "02 &middot; Curated Maryland partners", heading: "Trusted local Maryland partners.", lede: "When in-person presence in the Baltimore metro or the DC-suburban corridor matters, or local CPA hand-off, engagements can route to a vetted Maryland accounting practice running under TechBrot&rsquo;s standards.", list: ["Maryland-based independent practice", "County piggyback local-tax and MW507 fluency", "DC/PA/VA/WV reciprocity coordination", "Local CPA and EA hand-off", "Comptroller of Maryland and IRS audit-support coordination", "Federal-contracting, biotech, and IT industry depth", "Same platform standards as direct delivery"], cta: "See Maryland partner status &rarr;", href: "#md-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Maryland or federal returns, the corporate income tax, the state or local income tax, the payroll-withholding filings, the sales-tax return, or the PTE return. For Comptroller of Maryland filings, audit representation, and tax strategy, we coordinate with your existing Maryland CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Maryland accounting different. + 4 H3s)
  context: [
    { category: "County Local Income Tax", heading: "The piggyback local tax is where Maryland payroll goes wrong.", body: ["Maryland&rsquo;s graduated state income tax is only the start. <strong>All 23 counties and Baltimore City levy their own local income tax</strong> &mdash; roughly 2.25% to 3.20%, with some counties now graduated &mdash; set by each employee&rsquo;s <strong>county of residence</strong> on Form MW507 and collected on the state return.", "Get the county wrong and the local withholding is wrong all year. We configure QuickBooks Payroll per employee by county of residence and update it when MW507s change or rates reset. <a href=\"/find-an-accountant/maryland/quickbooks-accountant/\">Maryland QuickBooks ProAdvisor &rarr;</a>"] },
    { category: "Cross-Border Reciprocity", heading: "Four reciprocal neighbors change who you withhold for.", body: ["Maryland sits at the center of the DC region and has <strong>reciprocal agreements with DC, Pennsylvania, Virginia, and West Virginia</strong>. A resident of those jurisdictions working in Maryland is <strong>exempt from Maryland withholding</strong> and withheld for their home state instead.", "For the DC-metro cross-border workforce, getting the MW507/MW507M on file and QuickBooks Payroll set per employee is essential &mdash; a common cleanup is staff over-withheld for Maryland who should have been exempt."] },
    { category: "The New 3% IT/Data Tax", heading: "Maryland just put a 3% tax on IT and data services.", body: ["Effective <strong>July 1, 2025</strong>, Maryland applies a <strong>3% sales tax to data and IT services and to software publishing, including business-use SaaS</strong> &mdash; alongside the unchanged 6% standard rate. It is genuinely new and still being interpreted.", "For Maryland&rsquo;s large IT, software, and cyber sector, the QuickBooks sales-tax setup now has to distinguish the 3% IT/data rate from the 6% rate and handle Multiple-Points-of-Use apportionment. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "A Federal-Region Economy", heading: "Contractors, biotech, and the Port of Baltimore.", body: ["Maryland straddles the <strong>DC metro</strong> (federal agencies, government contractors, the I-270 biotech corridor, cybersecurity around Fort Meade) and the <strong>Baltimore metro</strong> (Johns Hopkins, finance, the Port).", "That mix means government-contract job costing, R&amp;D and grant tracking, multi-state nexus, and &mdash; for growing pass-throughs &mdash; the <strong>PTE election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "Maryland operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which counties you withhold for, whether reciprocity applies to your staff, and whether the new 3% IT/data tax hits your sales.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a Maryland engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; DC-metro government contractor", heading: "A Montgomery County contractor withholding the wrong county for staff who live across the line.", body: ["<strong>Situation.</strong> A government-contracting firm in Montgomery County had employees living in several Maryland counties and in Virginia and DC, but withheld one local rate for everyone and had never applied reciprocity for the cross-border staff.", "<strong>What we did.</strong> Re-collected <a href=\"/find-an-accountant/maryland/quickbooks-accountant/\">MW507 forms</a>, set each employee&rsquo;s county of residence in QuickBooks Payroll for the piggyback local tax, and applied the DC/VA reciprocity exemption so the out-of-state staff were withheld for their home state.", "<strong>Outcome.</strong> Local tax withheld correctly per county; cross-border staff withheld for the right state; a clean reconciliation for the CPA."] },
    { tag: "Composite &middot; Maryland SaaS / IT firm", heading: "A software firm unsure whether the new 3% tax hit its product.", body: ["<strong>Situation.</strong> A Maryland software company sold business-use SaaS and IT services and had no idea its product became taxable at 3% on July 1, 2025 &mdash; its QuickBooks sales-tax items still treated everything as exempt.", "<strong>What we did.</strong> Reconfigured the <a href=\"/find-an-accountant/maryland/quickbooks-setup/\">QuickBooks sales-tax items</a> for the 3% IT/data rate versus the 6% standard rate, set up Multiple-Points-of-Use tracking for multi-state customers, and gave the CPA a clean basis to confirm taxability under the Comptroller&rsquo;s bulletin.", "<strong>Outcome.</strong> The 3% tax charged and tracked correctly; MPU apportionment documented; no surprise exposure."] },
    { tag: "Composite &middot; Baltimore services firm", heading: "A Baltimore firm with messy books and an open PTE question.", body: ["<strong>Situation.</strong> A Baltimore professional-services pass-through had a disorganized QuickBooks file and owners who had heard about the Maryland PTE election but had no clean numbers to evaluate it.", "<strong>What we did.</strong> Rebuilt the file to a <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">CPA-ready standard</a>, corrected the county piggyback withholding, and prepared the distributive-share detail so the firm&rsquo;s CPA could evaluate and make the PTE election.", "<strong>Outcome.</strong> Books clean and reconciled; local withholding correct; a documented basis for the CPA&rsquo;s PTE decision."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Maryland engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; the piggyback local tax, DC/PA/VA/WV reciprocity, the new 3% IT/data tax, the PTE election &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Maryland outcomes.)
  outcomes: [
    { figure: "24 jurisdictions", detail: "of county and Baltimore City piggyback withholding set correctly by employee county of residence", meta: "Representative &middot; DC-metro payroll cleanup" },
    { figure: "MW507", detail: "reciprocity exemptions applied so cross-border staff were withheld for their home state", meta: "Representative &middot; DC/VA/WV reciprocity" },
    { figure: "3%", detail: "IT/data-services sales tax configured in QuickBooks against the 6% standard rate", meta: "Representative &middot; SaaS sales-tax setup" },
    { figure: "PTE", detail: "distributive-share detail prepared so the CPA could evaluate the election", meta: "Representative &middot; advisory coordination" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Maryland &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that a new hire&rsquo;s MW507 just changed which county &mdash; or state &mdash; you withhold for, whether your SaaS product is now caught by the 3% IT-services tax, or whether your pass-through should make the PTE election this year. For Maryland businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Maryland-specific tax-position work (including PTE coordination) with your CPA. By application. Best fit: Maryland contractors, biotech and IT firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no MD industry pages).
  // (H2: Industry-specific accounting for Maryland's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Professional &amp; Gov-Contracting", href: "/accounting/industries/professional-services/", body: "The DC-metro federal-contracting base &mdash; consultancies, agencies, and prime/sub contractors. <strong>Project and contract job costing</strong>, indirect-rate and grant tracking, multi-county payroll with reciprocity, and CPA-ready financials." },
    { num: "02", name: "Healthcare &amp; Life Sciences", href: "/accounting/industries/healthcare/", body: "The Johns Hopkins ecosystem and the I-270 biotech corridor. <strong>Insurance-payer reconciliation</strong>, R&amp;D and grant accounting, HIPAA-aware data handling, and multi-provider payroll across Maryland&rsquo;s local-tax jurisdictions." },
    { num: "03", name: "IT, SaaS &amp; Software", href: "/accounting/industries/saas/", body: "Maryland&rsquo;s software, IT-services, and cyber sector &mdash; now directly affected by the <strong>new 3% data/IT-services tax</strong>. <strong>Revenue recognition</strong>, the 3% vs 6% sales-tax setup, MPU apportionment, and multi-state nexus." },
    { num: "04", name: "Manufacturing", href: "/accounting/industries/manufacturing/", body: "Biotech, pharma, and advanced manufacturing. <strong>Job costing</strong>, standard vs. actual cost, inventory and WIP, R&amp;D credit coordination, and multi-state nexus for shippers." },
    { num: "05", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the Baltimore and DC-suburban growth markets. <strong>Job costing, WIP, and retainage</strong>, certified payroll on public work, subcontractor 1099s, and CPA-ready job profitability." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the metros. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and the county piggyback-tax wrinkle tied to owner residency." },
  ],
  industriesNote: "Maryland industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Maryland&rsquo;s tax stack. Don&rsquo;t see your sector &mdash; logistics, e-commerce, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core MD money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Maryland QuickBooks Accountant", href: "/find-an-accountant/maryland/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Maryland businesses. Covers QBO, Desktop, Enterprise, and Payroll, with the county piggyback tax and DC/PA/VA/WV reciprocity fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Maryland ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Maryland Small Business Accountant", href: "/find-an-accountant/maryland/small-business-accountant/", body: "Operational accounting for Maryland small businesses &mdash; clean books, local-tax and reciprocity compliance, and CPA-ready statements, with the new 3% IT/data-tax details handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Maryland Bookkeeping Services", href: "/find-an-accountant/maryland/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Maryland businesses. Bank reconciliation, piggyback local-tax review, sales-tax sub-reconciliation incl. the 3% IT/data rate, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Maryland bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Maryland QuickBooks Cleanup", href: "/find-an-accountant/maryland/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong-county piggyback withholding, missing reciprocity setup, IT/data sales tax untracked, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Maryland cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Maryland QuickBooks Setup", href: "/find-an-accountant/maryland/quickbooks-setup/", body: "Professional QuickBooks implementation for Maryland businesses &mdash; chart of accounts for your industry, county piggyback payroll configuration, reciprocity, and the 3% vs 6% sales-tax setup. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Maryland setup &rarr;" },
  ],
  servicesNote: "Other Maryland engagements route to our national service pages, configured for Maryland: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (piggyback + reciprocity)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance (3% IT/data)</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (PTE)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to MD children + global pages (no MD pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Maryland engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/maryland/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, piggyback local-tax review, sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and county/entity complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/maryland/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, piggyback payroll config, 3% vs 6% sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/maryland/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong-county piggyback withholding and untracked IT/data tax are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "6% standard &middot; new 3% IT/data rate &middot; MPU apportionment &middot; multi-state nexus" },
    { svc: "Local-tax + reciprocity payroll setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "County piggyback by MW507 county of residence &middot; DC/PA/VA/WV reciprocity" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "Piggyback local tax per employee by county; reciprocity for cross-border staff" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Maryland-aware strategic finance; PTE and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of counties and reciprocity states you withhold for, sales-tax footprint (including the new 3% IT/data tax), industry specifics, and multi-state activity. TechBrot does not file Maryland returns, the local income tax, or the sales-tax return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Maryland businesses statewide. + 2 H3s)
  cities: [
    { name: "Baltimore", county: "Baltimore City" },
    { name: "Columbia", county: "Howard County" },
    { name: "Silver Spring", county: "Montgomery County" },
    { name: "Rockville", county: "Montgomery County" },
    { name: "Bethesda", county: "Montgomery County" },
    { name: "Annapolis", county: "Anne Arundel County" },
    { name: "Frederick", county: "Frederick County" },
    { name: "Gaithersburg", county: "Montgomery County" },
  ],
  countyProse: "TechBrot serves all 23 Maryland counties and Baltimore City &mdash; <strong>Montgomery</strong> (Bethesda, Rockville, Silver Spring, Gaithersburg) and <strong>Prince George&rsquo;s</strong> in the DC suburbs; <strong>Baltimore City</strong> and <strong>Baltimore</strong>, <strong>Anne Arundel</strong> (Annapolis), and <strong>Howard</strong> (Columbia) in the central corridor; <strong>Frederick</strong> and <strong>Carroll</strong> to the northwest; <strong>Harford</strong> and <strong>Cecil</strong> toward the Delaware line; and the <strong>Eastern Shore</strong> counties around Salisbury &mdash; plus every county in between. Remote, fixed-fee service reaches the whole state; each county sets its own piggyback local rate, which we confirm against the Comptroller&rsquo;s list.",
  citiesNote: "Don&rsquo;t see your city? All 23 Maryland counties and Baltimore City are served via remote engagement delivery. <a href=\"/contact/?intent=maryland&state=maryland&source_type=location&funnel_stage=MOFU\">Start a Maryland conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every Maryland engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (MD-localized). (H2: Trusted Maryland partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Maryland tax fluency", detail: "The county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity, the new 3% IT/data-services tax, and PTE coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Government-contract and grant job costing, biotech R&amp;D, SaaS revenue recognition, and multi-state nexus for the DC region." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (MD-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Maryland operational depth", body: "The county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity, the new 3% IT/data-services tax, and the PTE election. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-county, multi-state, reciprocity-heavy Maryland engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Maryland business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Maryland businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Maryland CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Maryland / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "County piggyback local-tax setup", us: "<strong>Per employee by MW507 county</strong>", cpa: "Usually; varies by firm", remote: "Often one rate for everyone &mdash; wrong", winner: "us" },
    { dim: "DC/PA/VA/WV reciprocity", us: "<strong>Per employee, withheld correctly</strong>", cpa: "Usually; varies by firm", remote: "Often missed for cross-border staff", winner: "us" },
    { dim: "New 3% IT/data sales tax", us: "<strong>Configured vs the 6% rate, with MPU</strong>", cpa: "Varies; not their primary focus", remote: "Rarely handled &mdash; it&rsquo;s brand new", winner: "us" },
    { dim: "PTE election readiness", us: "<strong>Books kept PTE-ready for the CPA</strong>", cpa: "Makes the election and files", remote: "Not handled", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Comptroller / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Comptroller of Maryland filings, the income-tax and PTE returns, and representation, use a licensed Maryland CPA or EA. For QuickBooks operations, bookkeeping, the county piggyback local-tax setup, reciprocity, and the new 3% IT/data-tax tracking &mdash; TechBrot is built for that. Most Maryland clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Maryland official sources (from MD-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Comptroller of Maryland", href: "https://www.marylandtaxes.gov/", detail: "Authoritative source for the state income tax, the corporate income tax, sales and use tax, and employer withholding." },
    { name: "Comptroller of Maryland &mdash; Income Tax Rates &amp; Brackets", href: "https://www.marylandtaxes.gov/individual/income/tax-info/tax-rates.php", detail: "The official graduated state rate schedule (2% to a 6.50% top rate after the 2025 changes) and the county local income-tax rate range." },
    { name: "Comptroller of Maryland &mdash; Employer Withholding", href: "https://www.marylandtaxes.gov/business/income/withholding/index.php", detail: "The local income-tax withholding tables and the reciprocity rules (DC/PA/VA/WV, Form MW507/MW507M) &mdash; the authority for county and cross-border withholding." },
    { name: "Comptroller of Maryland &mdash; Technical Bulletin 56 (Data/IT Services Tax)", href: "https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/technical-bulletins/tb-56.pdf", detail: "Guidance on the new 3% sales tax on data, IT, and software-publishing services effective July 1, 2025." },
    { name: "Comptroller of Maryland &mdash; Technical Bulletin 6 (Pass-Through Entities)", href: "https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/technical-bulletins/tb-it6.pdf", detail: "The pass-through entity (PTE) tax and the election &mdash; the authority for PTE coordination." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Maryland-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Maryland QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Maryland businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to Maryland businesses statewide &mdash; remote-first from our Delaware headquarters. All 23 counties and Baltimore City covered, from the Baltimore metro and the Port to the DC-suburban corridor in Montgomery and Prince George&rsquo;s counties, plus Annapolis, Columbia, and Frederick. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Maryland&rsquo;s county piggyback local income tax work for payroll?", a: "On top of the graduated state income tax, all 23 Maryland counties and Baltimore City levy their own local income tax &mdash; currently about 2.25% to 3.20%, and some counties now use graduated local brackets. The rate is set by each employee&rsquo;s county (or Baltimore City) of residence, established on Form MW507, and the local tax is collected on the state return. QuickBooks Payroll has to apply the right local rate per employee by county; we set that up and reconcile it. Confirm current rates against the Comptroller&rsquo;s local-rate list." },
    { q: "Does Maryland have tax reciprocity with neighboring states?", a: "Yes &mdash; Maryland has reciprocal agreements with DC, Pennsylvania, Virginia, and West Virginia. Residents of DC, Pennsylvania, and Virginia who didn&rsquo;t keep a Maryland home for more than 183 days, and West Virginia residents regardless of time in Maryland, are exempt from Maryland withholding on Maryland wages; they file Form MW507/MW507M and are withheld for their home state. For the DC-metro cross-border workforce, we configure QuickBooks Payroll per employee so the exemption is applied correctly." },
    { q: "What is Maryland&rsquo;s new 3% tax on IT and data services?", a: "Effective July 1, 2025, Maryland applies a 3% sales and use tax to data and information-technology services and to software publishing &mdash; including business-use SaaS (the 3% applies where no higher rate already does). SaaS sold to individual consumers stays at the 6% standard rate. It&rsquo;s genuinely new, so we configure the QuickBooks sales-tax items for the 3% IT/data rate versus the 6% rate, set up Multiple-Points-of-Use apportionment for multi-state customers, and point you and your CPA to the Comptroller&rsquo;s Technical Bulletin 56 on taxability." },
    { q: "What is Maryland&rsquo;s corporate income tax rate?", a: "Maryland&rsquo;s corporate income tax is a flat 8.25% on Maryland-apportioned net income. It&rsquo;s separate from the local income-tax withholding obligation on employees and from the sales tax. For multi-state corporations, clean Maryland apportionment matters, and that&rsquo;s something we keep the books ready for so your CPA can file accurately." },
    { q: "What is the Maryland PTE election, and should my business make it?", a: "Maryland lets a pass-through entity (partnership, S corp, multi-member LLC) elect to pay tax at the entity level as a SALT-cap workaround, so members can deduct the Maryland tax federally and receive a credit (the PTE tax is 7.5% on resident/individual members). Whether to elect it is a CPA decision, but it needs clean books to evaluate. We keep the books PTE-ready and prepare the distributive-share detail; your CPA makes the election and files." },
    { q: "Does TechBrot file Maryland state or local tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Maryland or federal returns, the corporate income tax, the state or local income tax, the payroll-withholding filings, the sales-tax return, or the PTE return, and we do not represent clients before the Comptroller of Maryland. We deliver clean, CPA-ready bookkeeping, configure the piggyback local tax, reciprocity, and the 3% IT/data tax, and coordinate with your Maryland CPA or EA, who files." },
    { q: "How does a Maryland engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Maryland operational context &mdash; which counties and reciprocity states you withhold for, whether the new 3% IT/data tax hits your sales, whether the PTE election is in play &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Maryland bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; local-tax and reciprocity payroll setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the counties and reciprocity states you withhold for, your sales-tax footprint, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Maryland practice", detail: "All 23 counties + Baltimore City served remotely &middot; Baltimore, Columbia, the Montgomery County DC suburbs, Annapolis, Frederick &middot; Industries handled on the national pages, configured for MD" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Maryland statutory references reviewed against Comptroller of Maryland primary sources &middot; State middle brackets and specific county local rates framed qualitatively and never quoted as fixed figures &middot; The 2025 budget changes (new brackets, the 2% capital-gains surtax, the 3% IT/data tax) reflected and re-checked &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — Pennsylvania + Delaware exist (link); Virginia + West Virginia coming soon (no href -> hub). (H2: Multi-state Maryland businesses. + H3s)
  related: [
    { name: "Pennsylvania", href: "/find-an-accountant/pennsylvania/", body: "Maryland businesses with cross-border staff under the MD&ndash;PA reciprocal agreement, or operations north toward the Pennsylvania line &mdash; Act 32 local EIT, Philadelphia city taxes, and reciprocity scoped alongside your Maryland books.", cta: "ProAdvisors in Pennsylvania &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "Maryland businesses with a Delaware entity or operations across the Eastern Shore line &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your Maryland books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "Virginia", body: "Maryland businesses operating across the Potomac into Northern Virginia under the MD&ndash;VA reciprocal agreement &mdash; Virginia multi-state payroll, sales tax, and reciprocity scoping.", cta: "Virginia &mdash; coming soon &rarr;" },
    { name: "Washington, DC &amp; West Virginia", body: "Maryland businesses with staff or operations in DC or West Virginia, both reciprocal jurisdictions &mdash; cross-border payroll handled under the reciprocal agreements.", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/maryland/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Maryland QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for Maryland businesses across all 23 counties and Baltimore City — from Baltimore and the Port to the DC-suburban corridor in Montgomery and Prince George's counties. Built around the county piggyback local income tax (Form MW507), DC/PA/VA/WV reciprocity, the graduated state income tax with its 2025 brackets, and the new 3% sales tax on data and IT services.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/maryland-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#md-in-brief-text","#md-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Maryland"}]},
        {"@type":"Service","@id":url+"#service","name":"Maryland QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, local income tax, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with the county piggyback local income tax (Form MW507) and DC/PA/VA/WV reciprocity, and 6% sales tax compliance with the new 3% data/IT-services rate for Maryland businesses across all 23 counties and Baltimore City. Delivered remotely by TechBrot from its Delaware headquarters. Independent Certified QuickBooks ProAdvisor firm; does not file Maryland or federal returns, the corporate income tax, the state or local income tax, the payroll filings, the sales-tax return, or the PTE return — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Maryland","sameAs":"https://en.wikipedia.org/wiki/Maryland","containsPlace":[
          {"@type":"City","name":"Baltimore"},{"@type":"City","name":"Columbia"},{"@type":"City","name":"Silver Spring"},{"@type":"City","name":"Rockville"},{"@type":"City","name":"Bethesda"},{"@type":"City","name":"Annapolis"},{"@type":"City","name":"Frederick"},{"@type":"City","name":"Gaithersburg"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Maryland small and mid-sized businesses, government contractors and professional-services firms, healthcare and life-sciences companies, IT and SaaS firms, manufacturers, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Maryland accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Maryland QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Maryland Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Maryland Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Maryland QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Maryland QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Maryland — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
