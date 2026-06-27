/* /find-an-accountant/delaware/ — t-location PILLAR. Delaware ANCHOR state: TechBrot Inc. is a
 * Delaware C-corporation whose REGISTERED corporate address is in Middletown, DE (651 N Broad St,
 * Suite 201, 19709 — the address in the global #organization node). This is the incorporation/
 * registered address ONLY — NOT a physical office, storefront, or place work is conducted. All
 * Delaware work is delivered 100% remotely, same as every other state pillar (Service + areaServed,
 * remote-served). Do NOT claim a physical office, "actual office", or physical "local presence" —
 * that overclaims a presence TechBrot does not have and breaches the honesty contract §8. Routing
 * to vetted local PARTNER operators for genuine in-person needs is honest and stays. Data-file shape mirrors the proven NY pillar
 * (find-an-accountant/new-york.11tydata.js): JSON front-matter in the .njk; this file supplies
 * the content arrays + an eleventyComputed pageGraph emitting the schema @graph.
 *
 * DELAWARE FACTS (verified 2026-06-25 against DE Division of Revenue + Division of Corporations):
 *  · NO state or local sales tax (0% everywhere).
 *  · Gross Receipts Tax instead — 0.0945%–1.9914% by business activity (petroleum higher),
 *    on the SELLER, monthly/quarterly, with monthly/quarterly exclusion amounts.
 *  · Corporate income tax 8.7% (three-factor apportionment); personal income tax 2.2%–6.6%.
 *  · Annual franchise tax: LLC/LP/GP flat $300 (due June 1); corporations $175 min (authorized
 *    shares) / $400 min (assumed par value), max $200,000 ($250,000 large corporate filer), due March 1.
 *  · Wilmington city wage tax + net-profits tax: 1.25% (residents, non-residents working in the
 *    city, and sole-prop/partnership net profits in city limits).
 *  · Incorporation capital: 66.7% of Fortune 500 incorporated in DE; 2.1M+ active legal entities;
 *    81.4% of U.S. IPOs choose DE; DGCL + Court of Chancery.
 *  · 3 counties: New Castle (Wilmington, Newark, Middletown, Bear), Kent (Dover [capital], Smyrna),
 *    Sussex (Seaford, Georgetown, Lewes, beaches).
 *
 * HONESTY: TechBrot is NOT a registered agent and does NOT file the DE franchise tax / annual report
 * or any DE/federal return — it tracks and reserves for them in the books and coordinates with the
 * client's CPA/EA and registered agent, who file. The incorporation-capital framing is honest: most of
 * the 2.1M DE entities are formed by out-of-state owners and never operate in DE — TechBrot serves
 * OPERATING Delaware businesses AND out-of-state owners who need real bookkeeping for their DE entity.
 * Reviews are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented DE reviewers,
 * no AggregateRating. No founder/personal name in visible content; David Westgate appears only as the
 * named lead ProAdvisor/operator (the standing-rule exception). Independent firm — not affiliated with
 * Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section after the in-brief. (H2: TechBrot in Delaware, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Delaware bookkeeping, QuickBooks setup, cleanup, migration, gross-receipts-tax tracking, and fractional CFO engagements to Delaware businesses <strong>remotely</strong> &mdash; serving <strong>all three counties</strong>, from Wilmington and Newark to Dover, Smyrna, and the Sussex coast. Delaware&rsquo;s tax structure is genuinely unlike its neighbors: <strong>no sales tax at all</strong>, replaced by a <strong>gross receipts tax</strong> levied on the seller and tracked by business activity; an <strong>annual franchise tax</strong> every Delaware entity owes; <strong>Wilmington&rsquo;s 1.25% city wage and net-profits tax</strong>; and an <strong>8.7% corporate income tax</strong> on top. As the incorporation capital of the U.S. &mdash; <strong>66.7% of the Fortune 500 and 2.1 million-plus entities</strong> are registered here &mdash; Delaware is also full of holding-company and out-of-state-owner structures that need real bookkeeping behind the registered-agent address. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot, remotely</strong>; <strong>curated local partner practices</strong> where in-person presence or local CPA hand-off matters. Honest scope: we do not file Delaware returns or the franchise-tax/annual report &mdash; we keep the books and coordinate with your CPA and registered agent.",

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
    { value: "DE", label: "Delaware-incorporated &mdash; New Castle, Kent &amp; Sussex counties served remotely" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "0%", label: "Sales tax &mdash; Delaware imposes no state or local sales tax; the gross receipts tax on sellers stands in its place" },
    { figure: "0.0945&ndash;1.9914%", label: "Gross receipts tax range &mdash; by business activity, levied on the seller&rsquo;s total receipts (after a monthly/quarterly exclusion), filed monthly or quarterly" },
    { figure: "8.7%", label: "Delaware corporate income tax &mdash; on federal taxable income apportioned to Delaware; paid in addition to gross receipts tax" },
    { figure: "$300", label: "Annual LLC/LP franchise tax &mdash; flat, due June 1; corporations pay $175&ndash;$200,000 by the share or assumed-par method, due March 1" },
    { figure: "1.25%", label: "Wilmington city wage &amp; net-profits tax &mdash; on earned income and on sole-proprietor/partnership net profits within city limits" },
    { figure: "66.7%", label: "Of the Fortune 500 incorporated in Delaware &mdash; 2.1M+ active entities; the holding-company and out-of-state-owner work that comes with it" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Delaware, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Delaware businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, gross-receipts-tax tracking, and fractional CFO engagements to Delaware businesses remotely.</strong> Coverage spans all three counties &mdash; New Castle (Wilmington, Newark, Middletown, Bear), Kent (Dover, Smyrna), and Sussex (Seaford, Georgetown, Lewes, and the coast) &mdash; direct from TechBrot, with partner practices where in-person presence helps." },
    { q: "Does Delaware have a sales tax, and how does that change my bookkeeping?", a: "<strong>No. Delaware has no state or local sales tax.</strong> Instead it levies a <strong>gross receipts tax on the seller</strong> &mdash; 0.0945% to 1.9914% depending on your business activity &mdash; on total receipts, after a monthly or quarterly exclusion amount, filed monthly or quarterly. There is no sales tax to collect from customers, but QuickBooks must be set up to track gross receipts by business-activity category so the right rate is applied and the return reconciles to the books. Out-of-state bookkeepers who assume Delaware works like a sales-tax state get this wrong." },
    { q: "What is the Delaware franchise tax and do you handle it?", a: "The <strong>Delaware franchise tax</strong> is an annual tax every Delaware entity owes for the privilege of being incorporated or formed here &mdash; <strong>a flat $300 for LLCs, LPs, and GPs (due June 1)</strong>, and <strong>$175 to $200,000 for corporations</strong> by the authorized-shares or assumed-par-value method (due March 1). <strong>TechBrot does not file the franchise tax or annual report</strong> &mdash; your registered agent or CPA files it. What we do is make sure the liability is tracked and reserved for in QuickBooks so it is never a surprise, and that the corporate method that produces the lower tax is the one being used." },
    { q: "What QuickBooks versions does TechBrot support for Delaware businesses?", a: "All current QuickBooks versions: <strong>QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll</strong>. QuickBooks Online suits most Delaware small businesses and the many holding companies and out-of-state-owned entities run remotely; QuickBooks Enterprise is common in Sussex agriculture and manufacturing and larger construction firms. We configure gross-receipts tracking and multi-entity structures as standard engagement components." },
    { q: "Can you do the books for a Delaware company that operates from another state?", a: "Yes &mdash; that is one of the most common Delaware engagements. Because <strong>66.7% of the Fortune 500 and millions of smaller entities are incorporated in Delaware while operating elsewhere</strong>, many Delaware companies are owned and run from out of state. We keep the books for the Delaware entity, handle holding-company and intercompany structure, track the franchise-tax reserve and any Delaware gross receipts where there is in-state activity, and coordinate with your home-state CPA on multi-state nexus and filings." },
  ],

  // STATE GLOSSARY — the DE terms that matter. (H2: The Delaware terms that matter…)
  stateTerms: [
    { term: "Gross Receipts Tax", def: "<p>Delaware&rsquo;s tax in place of a sales tax &mdash; levied on the <strong>seller&rsquo;s total gross receipts</strong>, not collected from the customer. Rates run <strong>0.0945%&ndash;1.9914%</strong> by business activity, after a monthly or quarterly exclusion amount, filed monthly or quarterly with the Division of Revenue. QuickBooks should track receipts by activity so the right rate and exclusion apply.</p>" },
    { term: "No Sales Tax", def: "<p>Delaware imposes <strong>no state or local sales tax</strong> &mdash; 0% in every county and city. There is nothing to collect from customers and no sales-tax return; the gross receipts tax on the seller is the trade-off. A frequent point of confusion for owners and bookkeepers used to sales-tax states.</p>" },
    { term: "Franchise Tax", def: "<p>An annual tax for the privilege of being a Delaware entity &mdash; <strong>flat $300 for LLCs/LPs/GPs (June 1)</strong> and <strong>$175&ndash;$200,000 for corporations (March 1)</strong> by the authorized-shares or assumed-par-value method. Filed by the registered agent or CPA; tracked and reserved for in the books.</p>" },
    { term: "Annual Report (DE)", def: "<p>Delaware corporations file an annual report with the <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Division of Corporations</a> alongside the franchise tax (March 1). It reports directors, officers, and the registered agent. LLCs/LPs pay the $300 tax but do not file an annual report.</p>" },
    { term: "Wilmington Wage Tax", def: "<p>The City of Wilmington levies a <strong>1.25% earned-income (wage) tax</strong> on residents and on non-residents who work in the city, plus a <strong>1.25% net-profits tax</strong> on sole proprietors and partnerships operating within city limits. Payroll and owner-comp setup in QuickBooks has to account for it for Wilmington workers.</p>" },
    { term: "Registered Agent", def: "<p>Every Delaware entity must maintain a <strong>registered agent</strong> with a Delaware address to receive legal and state notices. The agent is <em>not</em> the bookkeeper &mdash; thousands of Delaware entities have an agent and an address but no one keeping the books. TechBrot is the bookkeeping behind the agent, not a registered-agent service.</p>" },
    { term: "DGCL &amp; Court of Chancery", def: "<p>The <strong>Delaware General Corporation Law</strong> and the <strong>Court of Chancery</strong> &mdash; the body of corporate law and the specialized business court that make Delaware the incorporation capital. Why so many companies are Delaware entities; the reason multi-state and holding-company bookkeeping is a routine Delaware need.</p>" },
    { term: "Holding Company", def: "<p>A common Delaware structure &mdash; a parent entity that owns other entities or assets, often formed in Delaware while operating from elsewhere. Requires clean <strong>intercompany</strong> bookkeeping, separate books per entity, and careful allocation so each entity&rsquo;s financials and any in-state gross receipts are right.</p>" },
  ],

  // DELIVER — direct vs partner practices (r-2 buyer cards). (H2: What we deliver in Delaware.)
  delivery: [
    { eyebrow: "Direct service", heading: "TechBrot delivers it &mdash; remotely.", lede: "Most Delaware engagements are delivered directly by TechBrot&rsquo;s Certified ProAdvisor team, remotely, in your own QuickBooks file.", list: [
      "Monthly bookkeeping, cleanup, and catch-up",
      "QuickBooks setup, cleanup, migration, and training",
      "Gross-receipts-tax tracking and franchise-tax reserve",
      "Holding-company and multi-entity bookkeeping",
      "Payroll setup incl. Wilmington wage-tax handling",
    ], href: "/contact/?intent=delaware&state=delaware&source_type=location&funnel_stage=BOFU", cta: "Book the discovery call &rarr;" },
    { eyebrow: "Partner practices", heading: "A vetted Delaware operator &mdash; where it helps.", lede: "When in-person presence in New Castle, Kent, or Sussex, registered-agent coordination, or a local CPA hand-off matters, an engagement can route to a vetted Delaware practice under the same standard.", list: [
      "Same Certified ProAdvisor credential bar",
      "Same fixed-fee, written-scope model",
      "Local presence and CPA coordination",
      "Your file, your data &mdash; always",
    ], href: "/partners/", cta: "About partner practices &rarr;" },
  ],

  // CONTEXT — why DE is different (r-2). (H2: What makes Delaware accounting different.)
  context: [
    { category: "The tax structure", heading: "No sales tax &mdash; a gross receipts tax instead.", body: [
      "Delaware is one of a handful of states with <strong>no sales tax at all</strong>. In its place is a <strong>gross receipts tax</strong> on the seller: 0.0945%&ndash;1.9914% by business activity, on total receipts after a monthly or quarterly exclusion, filed with the Division of Revenue. You don&rsquo;t charge customers tax &mdash; you owe a percentage of what you take in.",
      "The bookkeeping consequence is real: QuickBooks has to track receipts <strong>by business activity</strong> so the correct rate and exclusion apply, and so the gross-receipts return reconciles to the books. Bookkeepers who treat Delaware like a sales-tax state &mdash; or ignore the receipts tax entirely &mdash; create exactly the problem we get called to clean up.",
    ] },
    { category: "The incorporation capital", heading: "Millions of entities &mdash; most run from elsewhere.", body: [
      "<strong>66.7% of the Fortune 500</strong> and more than <strong>2.1 million legal entities</strong> are incorporated in Delaware, the vast majority operating from other states. That creates a steady need for holding-company books, intercompany allocations, separate ledgers per entity, and a <strong>franchise-tax reserve</strong> every entity owes annually.",
      "TechBrot is the bookkeeping behind the registered-agent address &mdash; not a registered agent itself. We keep operating Delaware companies&rsquo; books and we keep the books for out-of-state owners&rsquo; Delaware entities, coordinating with their home-state CPA on multi-state nexus and filings.",
    ] },
  ],

  // SCENARIOS — honestly-labeled composites (r-3). (H2: What a Delaware engagement actually looks like.)
  scenariosNote: "Composite scenarios, illustrative of common Delaware engagements &mdash; not specific clients. Figures are representative of the kind of work involved, not guaranteed outcomes.",
  scenarios: [
    { tag: "Composite &middot; Wilmington services firm", heading: "Gross-receipts tracking set up right.", body: [
      "A Wilmington professional-services firm had QuickBooks configured as if Delaware had a sales tax &mdash; no gross-receipts tracking, no activity categories, and the owner unsure what was actually owed.",
      "We rebuilt the file to track receipts by activity, applied the correct rate and monthly exclusion, set the franchise-tax reserve, and accounted for the 1.25% Wilmington net-profits tax &mdash; so the receipts return reconciles to the books each period.",
    ], href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { tag: "Composite &middot; Out-of-state-owned DE holding co", heading: "Holding-company books, cleanly separated.", body: [
      "A founder in another state held three businesses under a Delaware holding company with everything commingled in one QuickBooks file and no intercompany discipline.",
      "We split the entities into clean books, built the intercompany structure, set each entity&rsquo;s franchise-tax reserve, and produced CPA-ready statements per entity &mdash; coordinating with the owner&rsquo;s home-state CPA on multi-state filings.",
    ], href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
    { tag: "Composite &middot; Sussex coastal business", heading: "Seasonal books, kept current year-round.", body: [
      "A seasonal Sussex County business near the coast fell months behind every off-season, then scrambled before tax handoff &mdash; with gross-receipts filings slipping.",
      "We moved them to monthly bookkeeping with a catch-up sprint first, automated the receipts categorization, and kept the gross-receipts and payroll cadence on schedule through the season and after it.",
    ], href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
  ],

  // OUTCOMES — representative figures (r-3). Explicitly illustrative (R5).
  outcomesNote: "Representative of the type and scale of Delaware engagements TechBrot runs &mdash; illustrative, not specific-client results or guarantees.",
  outcomes: [
    { figure: "12 mo.", detail: "of commingled holding-company records split into clean per-entity books, CPA-ready.", meta: "Representative &middot; DE holding-company cleanup" },
    { figure: "3", detail: "entities reconciled and put on a single monthly cadence with separate franchise-tax reserves.", meta: "Representative &middot; multi-entity DE structure" },
    { figure: "$0", detail: "in missed gross-receipts periods after rebuilding activity-based tracking in QuickBooks.", meta: "Representative &middot; Wilmington services firm" },
  ],

  // ADVISORY — standing brand line is the H2; body is section prose.
  advisoryBody: "<p>Software can generate a chart of accounts; it can&rsquo;t tell you which Delaware gross-receipts activity category your revenue falls under, how to reserve for a franchise tax that varies by calculation method, or how to structure a holding company&rsquo;s books so each entity stands on its own. That judgment &mdash; building the books for how a Delaware business actually runs, in-state or owned from afar &mdash; is what a Certified ProAdvisor adds on top of the automation.</p>",

  // INDUSTRIES — r-3, 6 DE industries (founder-approved set). Each links to its DE industry page.
  industries: [
    { num: "01", name: "Incorporation &amp; Holding Companies", href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/", body: "Intercompany structure, per-entity books, and franchise-tax reserves for the holding companies and registered entities Delaware is known for." },
    { num: "02", name: "E-commerce &amp; Retail", href: "/find-an-accountant/delaware/industries/ecommerce/", body: "No sales tax to collect, but gross-receipts tracking, multi-channel revenue, and multi-state nexus where you ship &mdash; configured in QuickBooks." },
    { num: "03", name: "Professional Services", href: "/find-an-accountant/delaware/industries/professional-services/", body: "Agencies, consultancies, and firms &mdash; gross-receipts by activity, Wilmington net-profits tax, and clean owner-comp and reporting." },
    { num: "04", name: "Real Estate", href: "/find-an-accountant/delaware/industries/real-estate/", body: "Operators and investors across New Castle to the Sussex coast &mdash; entity-per-property books, draws, and gross-receipts on rental and service income." },
    { num: "05", name: "Construction", href: "/find-an-accountant/delaware/industries/construction/", body: "Job costing, WIP, and retainage for Delaware builders &mdash; with gross-receipts tracking by contract activity and CPA-ready job profitability." },
    { num: "06", name: "Finance &amp; Banking", href: "/find-an-accountant/delaware/industries/finance-banking/", body: "Wilmington&rsquo;s credit-card and banking corridor &mdash; clean books for fintechs, lenders, advisers, and fund entities, with intercompany structure and audit-ready reporting." },
  ],

  // SERVICES — buyer-card routing (r-3). Names link to the DE service children.
  services: [
    { eyebrow: "Bookkeeping", name: "Monthly Bookkeeping", href: "/find-an-accountant/delaware/monthly-bookkeeping/", body: "Ongoing books kept current &mdash; reconciliation, gross-receipts tracking, and reporting on a monthly cadence.", starting: "$400/mo", cadence: "Monthly", cta: "Delaware monthly bookkeeping &rarr;" },
    { eyebrow: "Bookkeeping", name: "Cleanup Bookkeeping", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", body: "Behind or messy books brought current and reconciled &mdash; including commingled multi-entity files.", starting: "$1,200", cadence: "One-time", cta: "Delaware cleanup &rarr;" },
    { eyebrow: "QuickBooks", name: "QuickBooks Setup", href: "/find-an-accountant/delaware/quickbooks-setup/", body: "The right edition, an industry chart of accounts, and gross-receipts tracking configured from day one.", starting: "$750", cadence: "One-time", cta: "Delaware QuickBooks setup &rarr;" },
    { eyebrow: "QuickBooks", name: "QuickBooks Cleanup", href: "/find-an-accountant/delaware/quickbooks-cleanup/", body: "A diagnostic and rebuild of a broken QuickBooks file &mdash; reconciled, recategorized, and CPA-ready.", starting: "$1,200", cadence: "One-time", cta: "Delaware QuickBooks cleanup &rarr;" },
    { eyebrow: "Tax compliance", name: "Gross Receipts Tax Help", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", body: "Activity-based gross-receipts tracking set up so the right rate and exclusion apply and the return reconciles.", starting: "$500", cadence: "Setup + monthly", cta: "Delaware gross receipts help &rarr;" },
    { eyebrow: "Compliance", name: "Franchise Tax Help", href: "/find-an-accountant/delaware/franchise-tax-help/", body: "Franchise-tax reserve tracked in the books and the lower-tax method confirmed &mdash; filed by your agent or CPA.", starting: "$300", cadence: "Annual support", cta: "Delaware franchise tax help &rarr;" },
  ],
  servicesNote: "Every Delaware service has a dedicated page with fixed-fee scopes and engagement detail. Services without a dedicated Delaware page &mdash; <a href=\"/quickbooks/payroll/\">payroll</a>, <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a>, and <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> &mdash; route to the global service pages, scoped for Delaware on the call.",

  // ECOSYSTEM — cluster directory (r-3), links to every DE page.
  ecosystem: [
    { eyebrow: "Services", heading: "Delaware services", lede: "Money pages for each Delaware service.", links: [
      { label: "QuickBooks Accountant", href: "/find-an-accountant/delaware/quickbooks-accountant/" },
      { label: "Small Business Accountant", href: "/find-an-accountant/delaware/small-business-accountant/" },
      { label: "Bookkeeping Services", href: "/find-an-accountant/delaware/bookkeeping-services/" },
      { label: "Virtual Bookkeeper", href: "/find-an-accountant/delaware/virtual-bookkeeper/" },
      { label: "Monthly Bookkeeping", href: "/find-an-accountant/delaware/monthly-bookkeeping/" },
      { label: "Cleanup Bookkeeping", href: "/find-an-accountant/delaware/cleanup-bookkeeping/" },
    ] },
    { eyebrow: "QuickBooks &amp; tax", heading: "QuickBooks &amp; Delaware tax", lede: "QuickBooks work and the Delaware-specific tax pages.", links: [
      { label: "QuickBooks Setup", href: "/find-an-accountant/delaware/quickbooks-setup/" },
      { label: "QuickBooks Cleanup", href: "/find-an-accountant/delaware/quickbooks-cleanup/" },
      { label: "QuickBooks Reconciliation", href: "/find-an-accountant/delaware/quickbooks-reconciliation/" },
      { label: "QuickBooks Migration", href: "/find-an-accountant/delaware/quickbooks-migration/" },
      { label: "QuickBooks Training", href: "/find-an-accountant/delaware/quickbooks-training/" },
      { label: "QuickBooks Error Fixes", href: "/find-an-accountant/delaware/quickbooks-error-fixes/" },
      { label: "Gross Receipts Tax Help", href: "/find-an-accountant/delaware/gross-receipts-tax-help/" },
      { label: "Franchise Tax Help", href: "/find-an-accountant/delaware/franchise-tax-help/" },
    ] },
    { eyebrow: "Places &amp; sectors", heading: "Cities, industries &amp; help", lede: "City pages, industry pages, and honest-triage help.", links: [
      { label: "Cities we serve", href: "/find-an-accountant/delaware/cities/" },
      { label: "Industries we serve", href: "/find-an-accountant/delaware/industries/" },
      { label: "Delaware pricing", href: "/find-an-accountant/delaware/pricing/" },
      { label: "Speak to a ProAdvisor", href: "/find-an-accountant/delaware/speak-to-a-proadvisor/" },
      { label: "Urgent Bookkeeping", href: "/find-an-accountant/delaware/urgent-bookkeeping/" },
      { label: "State Tax Notice Help", href: "/find-an-accountant/delaware/state-tax-notice-help/" },
      { label: "Business Tax Problems", href: "/find-an-accountant/delaware/business-tax-problems/" },
    ] },
  ],

  // PRICING — fixed-fee ranges (cmp table). Canonical figures only.
  pricing: [
    { svc: "Monthly Bookkeeping", href: "/find-an-accountant/delaware/monthly-bookkeeping/", range: "From $400/mo", cadence: "Monthly", notes: "Reconciliation, gross-receipts tracking, reporting" },
    { svc: "Cleanup / Catch-up", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind &amp; entity count" },
    { svc: "QuickBooks Setup", href: "/find-an-accountant/delaware/quickbooks-setup/", range: "From $750", cadence: "One-time", notes: "Edition, chart of accounts, gross-receipts setup" },
    { svc: "QuickBooks Cleanup", href: "/find-an-accountant/delaware/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Diagnostic, rebuild, reconcile, CPA-ready" },
    { svc: "Gross Receipts Tax Help", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", range: "From $500", cadence: "Setup + monthly", notes: "Activity-based tracking; return reconciles to books" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Monthly", notes: "Forecasting, reporting, advisory &mdash; scoped to need" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Every Delaware engagement is priced as a fixed fee against a written scope after the discovery call. TechBrot does not file Delaware returns or the franchise-tax/annual report; it keeps the books and coordinates with your CPA and registered agent.",

  // CITY DIRECTORY — 6 DE cities (each a dedicated page) + counties.
  cities: [
    { name: "Wilmington", href: "/find-an-accountant/delaware/cities/wilmington/", county: "New Castle County" },
    { name: "Dover", href: "/find-an-accountant/delaware/cities/dover/", county: "Kent County" },
    { name: "Newark", href: "/find-an-accountant/delaware/cities/newark/", county: "New Castle County" },
    { name: "Middletown", href: "/find-an-accountant/delaware/cities/middletown/", county: "New Castle County" },
    { name: "Smyrna", href: "/find-an-accountant/delaware/cities/smyrna/", county: "Kent County" },
    { name: "Bear", href: "/find-an-accountant/delaware/cities/bear/", county: "New Castle County" },
  ],
  countyProse: "TechBrot serves all three Delaware counties &mdash; <strong>New Castle</strong> (Wilmington, Newark, Middletown, Bear, the corporate corridor), <strong>Kent</strong> (Dover, the state capital, and Smyrna), and <strong>Sussex</strong> (Seaford, Georgetown, Lewes, Milford, and the coastal economy). Remote, fixed-fee service reaches every town in between.",
  citiesNote: "Each city page covers the local economy and any city-specific tax &mdash; most notably Wilmington&rsquo;s 1.25% wage and net-profits tax. The service is the same statewide; the tax detail is local.",

  // INTAKE — dual path. teamDavid is the named-operator exception.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across construction, professional services, and nonprofits &mdash; the judgment behind every Delaware engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers your call directly, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (DE-localized).
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Delaware tax fluency", detail: "Gross-receipts tax by activity, franchise-tax methods, Wilmington wage tax, and Division of Revenue coordination." },
    { num: "03", term: "Multi-entity &amp; industry depth", detail: "Holding-company and intercompany structure, job costing for construction, fund accounting for nonprofits." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (DE-localized).
  why: [
    { num: "01", name: "A real Delaware firm &mdash; not a mailbox", body: "<p>Most &ldquo;Delaware&rdquo; bookkeeping is a registered-agent address with no one keeping the books. TechBrot is a <strong>Delaware-incorporated Certified ProAdvisor firm</strong> with genuine operational depth on DE-specific taxes &mdash; gross receipts tax, the franchise-tax reserve, and Wilmington wage tax &mdash; serving New Castle, Kent, and Sussex remotely. Real ProAdvisor bookkeeping behind the entity, not a mailbox.</p>" },
    { num: "02", name: "Gross-receipts depth", body: "<p>We configure QuickBooks to track receipts <strong>by activity</strong> so the right rate and exclusion apply and the return reconciles &mdash; the part out-of-state bookkeepers, expecting a sales tax, routinely get wrong.</p>" },
    { num: "03", name: "Holding-company fluency", body: "<p>Delaware&rsquo;s incorporation economy means multi-entity and out-of-state-owner books are routine here. We separate entities cleanly, build intercompany structure, and reserve each entity&rsquo;s franchise tax.</p>" },
    { num: "04", name: "Real credentials, honest scope", body: "<p>Active Certified ProAdvisor credentials, fixed-fee written scopes, and a clear line: we keep the books and coordinate with your CPA and registered agent, who file. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a></p>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews (verbatim).
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Professional Services &middot; Verified Clutch review" },
  ],

  // COMPARISON — vs-table (DE-localized).
  comparison: [
    { dim: "Delaware tax depth", us: "Gross-receipts-by-activity, franchise-tax reserve, Wilmington wage tax configured in QuickBooks", cpa: "Files the returns; usually not in the books day-to-day", remote: "Often assumes a sales-tax state &mdash; gets Delaware wrong" },
    { dim: "Local presence", us: "Remote, all 3 DE counties &middot; DE-incorporated", cpa: "Local, in-person", remote: "None &mdash; offshore or anywhere" },
    { dim: "Multi-entity / holding co", us: "Clean per-entity books + intercompany structure", cpa: "Varies", remote: "Rarely" },
    { dim: "Pricing", us: "Fixed-fee, written scope before work", cpa: "Often hourly", remote: "Tiered, but thin on Delaware specifics" },
    { dim: "Who files", us: "Coordinates with your CPA &amp; agent &mdash; honest scope", cpa: "Files DE &amp; federal returns", remote: "Usually doesn&rsquo;t file" },
  ],
  comparisonVerdict: "<strong>The honest answer:</strong> most Delaware businesses use TechBrot <em>and</em> a CPA together &mdash; TechBrot keeps the books, tracks gross receipts and the franchise-tax reserve, and hands clean financials to the CPA, who files the Delaware and federal returns.",
  comparisonRelated: "Comparing options? See <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> and <a href=\"/vs/\">how TechBrot compares</a>.",

  // AUTHORITY — .gov sources.
  authority: [
    { name: "Delaware Division of Revenue", href: "https://revenue.delaware.gov/", detail: "Gross receipts tax rates and exclusions, business licenses, corporate and personal income tax, and filing requirements. The authority for every Delaware gross-receipts figure on this page." },
    { name: "Delaware Division of Corporations", href: "https://corp.delaware.gov/", detail: "Franchise tax and annual report instructions, calculation methods, due dates, and entity statistics. The authority for the franchise-tax and incorporation figures here." },
    { name: "City of Wilmington — Earned Income &amp; Net Profits Tax", href: "https://www.wilmingtonde.gov/residents/earned-income-tax-and-net-profits-tax", detail: "The 1.25% Wilmington wage and net-profits tax &mdash; who owes it, rates, and forms." },
    { name: "IRS — Small Business &amp; Self-Employed", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Federal employer, payroll, and information-return requirements that apply to Delaware businesses alongside state obligations." },
  ],

  // FAQ — 7 Q/A, answer-first, Delaware-specific. visible faq__list = FAQPage (same array).
  // Option C call-intent: phone woven into an existing answer (cost question), no baseline removal.
  faq: [
    { q: "Does Delaware have a sales tax?", a: "No. Delaware imposes no state or local sales tax &mdash; 0% everywhere. Instead, businesses pay a <strong>gross receipts tax</strong> on their own total receipts (0.0945%&ndash;1.9914% by activity, after an exclusion amount), filed monthly or quarterly with the Division of Revenue. You don&rsquo;t collect tax from customers, but QuickBooks needs to track receipts by business activity so the right rate applies and the return reconciles to the books." },
    { q: "What is the Delaware gross receipts tax and how is it handled in QuickBooks?", a: "It&rsquo;s a tax on the seller&rsquo;s total gross receipts, regardless of source &mdash; Delaware&rsquo;s substitute for a sales tax. The rate depends on your business activity (0.0945%&ndash;1.9914%), and a monthly or quarterly exclusion amount reduces the taxable base. In QuickBooks we configure income tracking by activity category so the correct rate and exclusion apply, and so the gross-receipts return ties out to the books each period rather than being reconstructed later." },
    { q: "Do you handle the Delaware franchise tax and annual report?", a: "We track and reserve for the franchise tax in your books and confirm the calculation method that produces the lower corporate tax &mdash; but we do not file it. The <strong>franchise tax and annual report are filed by your registered agent or CPA</strong> ($300 flat for LLCs/LPs by June 1; $175&ndash;$200,000 for corporations by March 1). Our job is to make sure the liability is never a surprise and the books support the filing." },
    { q: "How much does bookkeeping cost for a Delaware business?", a: "Monthly bookkeeping starts at <strong>$400/month</strong>, QuickBooks setup at <strong>$750</strong>, and cleanup at <strong>$1,200</strong> &mdash; all fixed-fee against a written scope, priced after a free discovery call. Final pricing depends on transaction volume, number of entities, and how far behind the books are. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Can you keep the books for a Delaware company that operates from another state?", a: "Yes &mdash; it&rsquo;s one of our most common engagements. Because most Delaware entities are owned and run from elsewhere, we keep the books for the Delaware entity, handle holding-company and intercompany structure, track the franchise-tax reserve and any in-state gross receipts, and coordinate with your home-state CPA on multi-state nexus and filings." },
    { q: "Is there a city tax I need to handle in Wilmington?", a: "Yes. The City of Wilmington levies a <strong>1.25% earned-income (wage) tax</strong> on residents and on non-residents who work in the city, plus a 1.25% net-profits tax on sole proprietors and partnerships operating within city limits. If you have Wilmington workers or operate in the city, payroll and owner-comp in QuickBooks must account for it &mdash; we set that up." },
    { q: "Do you file my Delaware or federal taxes?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate, track gross receipts and the franchise-tax reserve, and hand clean, CPA-ready financials to your accountant, who files your Delaware and federal returns. We coordinate directly with your CPA or EA. Independent firm; not affiliated with Intuit Inc." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; Middletown, DE &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Delaware practice", detail: "All 3 counties served &middot; New Castle, Kent, Sussex &middot; Gross-receipts tax, franchise-tax reserve, Wilmington wage tax, holding-company &amp; multi-entity books" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Delaware statutory references reviewed against DE Division of Revenue and Division of Corporations primary sources &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 3 neighbors + the out-of-state-owner case.
  related: [
    { name: "Pennsylvania", body: "Delaware businesses operating up into the Philadelphia corridor &mdash; PA local PSD-code payroll, multi-state nexus, and cross-border sales where PA sales tax applies.", cta: "ProAdvisors in Pennsylvania &rarr;" },
    { name: "Maryland", body: "Businesses spanning the DE&ndash;MD line, especially on the Eastern Shore and Sussex&ndash;MD coast &mdash; Maryland sales tax, multi-state payroll, and nexus scoping.", cta: "ProAdvisors in Maryland &rarr;" },
    { name: "New Jersey", body: "Delaware entities with New Jersey operations across the Delaware River &mdash; NJ income-tax withholding, multi-state sales tax, and intercompany structure.", cta: "ProAdvisors in New Jersey &rarr;" },
  ],
  relatedNote: "Many Delaware entities are owned and operated entirely from out of state &mdash; multi-state engagement scoping is part of every applicable Delaware engagement. More state pages are rolling out; multi-state engagements route through TechBrot direct service in the meantime.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and Delaware compliance for Delaware businesses across New Castle, Kent, and Sussex counties — built around the gross receipts tax, no sales tax, the annual franchise tax, and the Wilmington wage tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-in-brief-text","#de-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and Delaware gross receipts tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, gross-receipts-tax tracking, and franchise-tax reserve for Delaware businesses across New Castle, Kent, and Sussex counties. Delivered remotely to Delaware businesses, with partner practices in Delaware. Independent Certified QuickBooks ProAdvisor firm; does not file federal or Delaware tax returns or the franchise tax/annual report — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","containsPlace":[
          {"@type":"City","name":"Wilmington"},{"@type":"City","name":"Dover"},{"@type":"City","name":"Newark"},{"@type":"City","name":"Middletown"},{"@type":"City","name":"Smyrna"},{"@type":"City","name":"Bear"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and mid-sized businesses, holding companies and out-of-state-owned Delaware entities, professional-services firms, e-commerce and retail, real estate operators, construction firms, and finance and banking firms"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Delaware accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Delaware Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Delaware QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Delaware QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Delaware Gross Receipts Tax Help"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Delaware Franchise Tax Help"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Delaware — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
