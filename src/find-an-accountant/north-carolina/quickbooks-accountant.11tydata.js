/* /find-an-accountant/north-carolina/quickbooks-accountant/ — NC SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Georgia child
 * (georgia/quickbooks-accountant.*) for structure and routing, and the areaServed-only / no-address
 * framing, with North Carolina content per _build/strategy/NC-FACTS.md. JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * NC LOCALIZATION (the deliberate NC differentiation — NC and GA share the no-local-income-tax /
 * no-reciprocity / county-variable-sales-tax shape, but NC's distinct headline differs):
 * Georgia's flat 4.99% income tax → North Carolina FLAT 3.99% income tax for 2026 (down from 4.25% in
 * 2025; still phasing down via revenue triggers under S.L. 2023-134; the lowest flat rate in the
 * Southeast set). Georgia's flat 4.99% corporate income tax + corporate NET WORTH TAX → North Carolina
 * corporate income tax being PHASED OUT TO ZERO (the NC-distinct headline; NC is the only state
 * eliminating it) — 2.00% for 2026, reaching 0% by 2030 (S.L. 2021-180 / G.S. 105-130.3C) — BUT the
 * FRANCHISE TAX survives it (the NC hook, vs GA's net worth tax): $1.50 per $1,000 of tax base, $200
 * minimum, $500 max on the first $1,000,000, holding companies capped at $150,000, filed on the
 * CD-405/CD-401S. Georgia's PTE election (HB 149) → North Carolina Taxed PTE election (G.S. 105-154.1)
 * at the entity level (SALT-cap workaround). Georgia's 4% state + LOST/SPLOST/ELOST/TSPLOST → North
 * Carolina 4.75% STATE sales tax + county (2.00%/2.25%) + transit (0.50% in four counties), so the
 * COMBINED rate runs 6.75% (most), 7.00%, 7.25% (Mecklenburg/Wake), 7.50% (Durham/Orange) — Mecklenburg
 * (Charlotte) rises to 8.25% on July 1, 2026 — county-variable; QuickBooks must charge the right
 * combined rate by location. SAME as GA: no local/city income tax (state-only withholding) AND no
 * reciprocity with any state (all NC-source wages withheld for NC). Georgia's 159 counties → 100 North
 * Carolina counties; metros Charlotte (Mecklenburg; #2 US banking/fintech), Raleigh (Wake; Research
 * Triangle), Greensboro (Guilford; the Triad), Durham (Durham; RTP biotech), Winston-Salem (Forsyth),
 * Fayetteville (Cumberland), Wilmington (New Hanover), Asheville (Buncombe). PRICING anchored to
 * NC-FACTS canonical "from" figures (monthly $400, cleanup $1,200, setup $750). provider = #organization;
 * areaServed = State North Carolina (NO PostalAddress / geo / LocalBusiness — North Carolina is an
 * areaServed-only state; the DE HQ is the only real-address state); reviewedBy #david-westgate.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate
 * only as reviewedBy @id). Independent firm — does NOT file North Carolina or federal returns, the
 * corporate income tax, the franchise tax, the individual income tax, the sales/use-tax return, or the
 * Taxed PTE election; not a registered agent; coordinates with the client's CPA/EA and the North
 * Carolina Dept of Revenue. The flat 3.99% income tax (2026), the 2.00% corporate rate phasing to ZERO
 * by 2030, the franchise-tax $1.50/$1,000/$200/$500/$150,000 figures, and the 4.75% state sales tax are
 * VERIFIED and stated; combined county sales-tax rates framed qualitatively (6.75–7.50%).
 *
 * ROUTING (core state, only 6 NC pages exist): links go ONLY to the 5 NC siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/north-carolina/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>North Carolina QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/accounting/sales-tax-compliance/\">county-variable sales tax charged by location (4.75% state plus county and transit rates, combined 6.75&ndash;7.50%)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of North Carolina realities like the <strong>flat 3.99% state income tax for 2026 (still on a legislated path downward)</strong>, the <strong>corporate income tax being phased out to zero by 2030 (2.00% for 2026)</strong> while the <strong>franchise tax survives it ($1.50 per $1,000 of tax base, $200 minimum, $500 max on the first $1,000,000)</strong>, the <strong>state-only withholding with no reciprocity</strong> (all North Carolina-source wages are withheld for the state), and the <strong>Taxed pass-through entity (PTE) election</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 100 North Carolina counties, from Charlotte&rsquo;s banking and fintech corridor to the Research Triangle, the Triad, Wilmington, Fayetteville, and Asheville.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: North Carolina QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a North Carolina QuickBooks accountant?", a: "<strong>A North Carolina QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a North Carolina business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the county-variable sales tax by location (4.75% state plus county and transit rates), keeping the franchise tax and the Taxed pass-through entity (PTE) election ready, and applying state-only withholding with no reciprocity &mdash; with fluency in North Carolina&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 100 counties." },
    { q: "What does it cost in North Carolina?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your North Carolina and federal returns, the corporate income tax, the franchise tax, the sales and use tax return, and the Taxed pass-through entity (PTE) election. Most North Carolina businesses use both." },
    { q: "Do you handle the county sales tax and North Carolina withholding?", a: "Yes &mdash; the county-variable sales tax is the genuine North Carolina complexity. The state rate is 4.75%, but each county adds a local rate (2.00% or 2.25%) and four counties add a 0.50% transit rate &mdash; so the combined rate runs <strong>6.75% to 7.50%</strong> by county, and Mecklenburg (Charlotte) rises to 8.25% on July 1, 2026, so <a href=\"/quickbooks/online/\">QuickBooks</a> has to charge the right combined rate by location. North Carolina also has <strong>no local income tax but no reciprocity</strong>, so all North Carolina-source wages are withheld for the state &mdash; we configure <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> so multi-state and remote staff are withheld correctly. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/north-carolina/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/north-carolina/bookkeeping-services/", cta: "North Carolina bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, wrong county sales-tax rates, a messy equity section that obscures the franchise-tax base, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/north-carolina/quickbooks-cleanup/", cta: "North Carolina QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the county sales-tax items by location, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/north-carolina/quickbooks-setup/", cta: "North Carolina QuickBooks setup &rarr;" },
    { num: "04", title: "County sales tax setup", body: "North Carolina&rsquo;s county-variable sales tax is where QuickBooks goes wrong &mdash; the state rate is <strong>4.75%</strong>, but each county adds a local rate (<strong>2.00% or 2.25%</strong>) and four counties add a <strong>0.50% transit rate</strong>, so the <strong>combined rate runs 6.75% to 7.50%</strong> by county and Mecklenburg (Charlotte) rises to 8.25% on July 1, 2026. Generic setups charge one statewide rate &mdash; wrong. We configure the QuickBooks sales-tax items so the correct combined rate applies by location, reconcile them so the filings tie out, and scope multi-state nexus for sellers crossing the Virginia, South Carolina, or Georgia lines. You or your CPA file.", href: "/accounting/sales-tax-compliance/", cta: "Sales-tax compliance &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including state-only North Carolina withholding with <strong>no reciprocity</strong> (all North Carolina-source wages are withheld for the state) and the multi-state setup many North Carolina logistics and remote-staff employers need &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the county sales-tax detail kept filing-ready and the balance sheet kept franchise-tax- and Taxed-PTE-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // NC FACTS — three North Carolina tax realities built into the books. (H2: Three North Carolina facts… + 3 H3s)
  facts: [
    { fig: "6.75&ndash;7.50%", title: "The county-variable sales tax", body: "North Carolina&rsquo;s defining indirect tax: the state rate is <strong>4.75%</strong>, but each county adds a <strong>local rate</strong> of <strong>2.00% or 2.25%</strong>, and four counties add a <strong>0.50% transit rate</strong>, so the <strong>combined rate varies by county</strong> &mdash; commonly <strong>6.75% to 7.50%</strong>, and Mecklenburg (Charlotte) rises to <strong>8.25%</strong> on July 1, 2026. Because the rate is set per county, generic setups that charge one statewide rate are wrong. We configure the QuickBooks sales-tax items so the right combined rate applies by location. Confirm current county rates against the North Carolina Department of Revenue rate chart." },
    { fig: "$1.50 / $1,000", title: "A surviving franchise tax", body: "Even as the corporate income tax is phased out to zero, North Carolina <strong>keeps its franchise tax</strong> &mdash; a net-worth-style annual business tax on corporations. C corporations pay <strong>$1.50 per $1,000 of the tax base</strong>, with a <strong>$200 minimum</strong> and a <strong>$500 maximum on the first $1,000,000</strong>; holding companies are capped at <strong>$150,000</strong>. It&rsquo;s filed with the corporate return (CD-405/CD-401S), so the equity section and balance sheet have to be clean to compute it. We keep the books franchise-tax-ready so the filing is straightforward for your CPA." },
    { fig: "2.00% &rarr; 0%", title: "A vanishing corporate income tax &mdash; but no reciprocity", body: "North Carolina is the only state <strong>phasing out its corporate income tax</strong> &mdash; <strong>2.00% for 2026</strong>, on a legislated path to <strong>zero by 2030</strong> &mdash; while the individual income tax is a <strong>flat 3.99% for 2026</strong> (down from 4.25%, still stepping down). There is <strong>no local or city income tax</strong>, so payroll withholding is state-only &mdash; but North Carolina has <strong>no reciprocity</strong> with any state, so a nonresident working in North Carolina is generally withheld for the state on the North Carolina-source wages. We configure QuickBooks Payroll so multi-state and remote staff are withheld correctly, and keep the books Taxed-PTE-ready for growing pass-throughs." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The county-variable sales tax by location (4.75% state plus county/transit), state-only withholding with no reciprocity &amp; the flat 3.99% rate set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept franchise-tax- and Taxed-PTE-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your North Carolina &amp; federal income-tax returns &amp; the corporate income tax",
    "Files the franchise tax (CD-405/CD-401S) &amp; the sales &amp; use tax return; represents you before the North Carolina Department of Revenue",
    "Makes the Taxed pass-through entity (PTE) election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your North Carolina situation &mdash; volume, accounts, which county sales-tax rates you charge, whether the franchise tax applies, where your multi-state withholding runs (North Carolina has no reciprocity), whether the Taxed PTE election fits, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the county sales-tax items by location, the state-only withholding setup, a clean equity section for the franchise tax, and broken reconciliations to a <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the county sales tax current by location, North Carolina-source wages withheld correctly with no reciprocity assumptions, the books kept franchise-tax- and Taxed-PTE-ready, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you that you just triggered sales-tax nexus in three more North Carolina counties, where your net worth puts you on the franchise-tax schedule as the corporate income tax phases out, or whether your S-corp should make the Taxed pass-through entity (PTE) election this year. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your North Carolina books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in North Carolina, or will any bookkeeper do?", a: "For a North Carolina business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in North Carolina&rsquo;s specific rules &mdash; the county-variable sales tax charged by location (4.75% state plus county and transit, combined 6.75&ndash;7.50%), the franchise tax that survives the corporate-income-tax phase-out, state-only withholding with no reciprocity, the flat 3.99% income tax, and the Taxed pass-through entity (PTE) election. TechBrot pairs ProAdvisor-level QuickBooks work with that North Carolina context, delivered as a fixed-fee engagement." },
    { q: "What does a North Carolina QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the county sales tax charged correctly by location and the balance sheet franchise-tax-ready so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in North Carolina?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a North Carolina CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your North Carolina and federal returns, the corporate income tax, the franchise tax (CD-405/CD-401S), the sales and use tax return, and the Taxed pass-through entity (PTE) election, and represents you before the North Carolina Department of Revenue. Most North Carolina businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How do the county sales tax and North Carolina withholding affect my setup?", a: "North Carolina&rsquo;s county-variable sales tax is the genuine indirect-tax complexity: the state rate is 4.75%, but each county adds a local rate (2.00% or 2.25%) and four counties add a 0.50% transit rate, so the combined rate runs from 6.75% to 7.50% by county &mdash; and Mecklenburg (Charlotte) rises to 8.25% on July 1, 2026 &mdash; so QuickBooks has to charge the correct combined rate by location. Separately, North Carolina has no local income tax, so withholding is state-only &mdash; but it also has no reciprocity with any state, so a nonresident working in North Carolina is generally withheld for the state on the North Carolina-source wages. We build the per-location sales tax and the correct state withholding into QuickBooks so the right amounts apply and the filings reconcile; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common North Carolina engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the county sales-tax rates, the state withholding setup, and a clean equity section for the franchise tax &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free North Carolina discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 100 North Carolina counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the corporate income tax, the franchise tax (CD-405/CD-401S), the sales &amp; use tax return &amp; the Taxed pass-through entity (PTE) election coordinated with your CPA/EA and the North Carolina Department of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/north-carolina/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"North Carolina QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for North Carolina businesses across all 100 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and the county-variable sales tax charged by location (4.75% state plus county and transit, combined 6.75-7.50%), the corporate income tax phasing out to zero by 2030 (2.00% for 2026), the surviving franchise tax ($1.50 per $1,000 of tax base, $200 minimum, $500 maximum on the first $1,000,000), state-only withholding with no reciprocity, and Taxed pass-through entity (PTE) readiness, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around North Carolina's county-variable sales tax, the flat 3.99% income tax, the vanishing corporate income tax, the surviving franchise tax, and the Taxed PTE election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/north-carolina-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nc-svc-qbaccountant-summary","#nc-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"North Carolina","item":"https://techbrot.com/find-an-accountant/north-carolina/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"North Carolina QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for North Carolina businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination with state-only withholding and no reciprocity (all North Carolina-source wages withheld for the state), the county-variable sales tax charged by location (4.75% state plus county and transit, combined 6.75-7.50%), franchise tax readiness ($1.50 per $1,000 of tax base, $200 minimum, $500 maximum on the first $1,000,000) as the corporate income tax phases out to zero by 2030, the flat 3.99% income tax, and Taxed pass-through entity (PTE) readiness, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file North Carolina or federal returns, the corporate income tax, the franchise tax, the individual income tax, the sales and use tax return, or the Taxed pass-through entity (PTE) election — coordinates with the client's CPA, EA, and the North Carolina Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"North Carolina","sameAs":"https://en.wikipedia.org/wiki/North_Carolina"},
          "audience":{"@type":"BusinessAudience","name":"North Carolina small and midsize businesses, banking and fintech firms, technology and biotech companies, manufacturers, logistics and distribution operators, healthcare practices, construction firms, and real estate companies"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"North Carolina QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"County-Variable Sales Tax & State Withholding Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
