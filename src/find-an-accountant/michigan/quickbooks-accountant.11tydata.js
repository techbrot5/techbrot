/* /find-an-accountant/michigan/quickbooks-accountant/ — MI SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Ohio child
 * (ohio/quickbooks-accountant.*) for structure and routing, and the areaServed-only / no-address
 * framing, with Michigan content per _build/strategy/MI-FACTS.md. JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * MI LOCALIZATION: Ohio's MUNICIPAL INCOME TAX (649 cities + 199 school districts, RITA/CCA, the
 * 20-day rule) → Michigan's CITY INCOME TAX, the MI-distinct hook but FAR SIMPLER: 24 cities levy
 * one under the City Income Tax Act (CITA, 1964 PA 284), withheld by WORK LOCATION for nonresidents
 * — Detroit 2.4% resident / 1.2% nonresident (administered by MI Treasury; Flint joins Treasury
 * admin Jan 1 2027); Grand Rapids & Saginaw 1.5%/0.75%; Highland Park 2%/1%; the other ~20 cities at
 * the CITA base 1%/0.5% (non-Detroit individual rates framed qualitatively). NO school-district
 * layer, NO 20-day rule. Ohio's "no corporate income tax / the CAT" → Michigan levies a REAL 6%
 * Corporate Income Tax (CIT) on C-corps (the opposite of Ohio); flow-throughs aren't subject — they
 * can elect the Flow-Through Entity (FTE) tax at the 4.25% rate (SALT-cap workaround, 3-yr MTO
 * election, CPA files Form 5772). Ohio's phasing-to-zero income tax → Michigan FLAT 4.25% individual
 * income tax, confirmed for 2026 — stable, not graduated. Ohio's county-variable 6.5–8.0% sales tax
 * → Michigan FLAT 6% sales & use tax statewide, NO local add-on permitted anywhere. Ohio's
 * IN/PA/MI/KY/WV reciprocity (IT 4NR) → Michigan reciprocity with IL/IN/KY/MN/OH/WI (Form MI-W4),
 * STATE wage income only — does NOT cover the city income tax, independent contractors, or non-wage
 * income. PRICING anchored to MI-FACTS canonical "from" figures (monthly $400, cleanup $1,200,
 * setup $750). provider = #organization; areaServed = State Michigan (NO PostalAddress / geo /
 * LocalBusiness — Michigan is an areaServed-only state; all states are areaServed-only (no street address));
 * reviewedBy #david-westgate.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate
 * only as reviewedBy @id). Independent firm — does NOT file Michigan or federal returns, the CIT, the
 * individual income tax, the city income-tax filings, the sales/use-tax return, or the FTE (Form
 * 5772) return; not a registered agent; coordinates with the client's CPA/EA, the Michigan Dept of
 * Treasury, and the city. The flat 4.25% IIT, Detroit 2.4%/1.2%, the 6% CIT, and the 6% sales tax are
 * VERIFIED and stated; specific non-Detroit city rates framed qualitatively.
 *
 * ROUTING (core state, only 6 MI pages exist): links go ONLY to the 4 MI siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/michigan/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Michigan QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/quickbooks/payroll/\">city income tax withheld by work location (Detroit at 2.4%/1.2%, Grand Rapids and Saginaw at 1.5%/0.75%)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Michigan realities like the <strong>flat 4.25% state income tax (confirmed for the 2026 tax year)</strong>, the <strong>real 6% Corporate Income Tax on C-corporations that Ohio doesn&rsquo;t have</strong>, the <strong>IL/IN/KY/MN/OH/WI reciprocity</strong> (state tax only &mdash; the city tax still applies), the <strong>flat 6% <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> with no local add-on anywhere</strong>, and the <strong>flow-through entity (FTE) election</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 83 Michigan counties, from metro Detroit and the automotive supplier base to Grand Rapids, Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Michigan QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Michigan QuickBooks accountant?", a: "<strong>A Michigan QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Michigan business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the city income tax by each employee&rsquo;s work location (Detroit, Grand Rapids, and more), keeping the 6% Corporate Income Tax and the flow-through entity election ready, and tracking the flat 6% sales tax &mdash; with fluency in Michigan&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 83 counties." },
    { q: "What does it cost in Michigan?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Michigan and federal returns, the 6% Corporate Income Tax, the city income-tax filings, the sales and use tax return, and the flow-through entity (Form 5772) return. Most Michigan businesses use both." },
    { q: "Do you handle the city income tax and IL/IN/KY/MN/OH/WI reciprocity?", a: "Yes &mdash; the city income tax is the genuine Michigan complexity. <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> has to withhold for the right city by <strong>work location</strong> &mdash; 24 cities levy a tax under the City Income Tax Act, Detroit is the highest at 2.4% resident / 1.2% nonresident, and Detroit&rsquo;s tax is administered by the Michigan Department of Treasury. It&rsquo;s far simpler than Ohio&rsquo;s system &mdash; no school-district layer, no 20-day rule. We also configure the IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) so cross-border staff are exempt from Michigan <strong>state</strong> tax, while the <strong>city</strong> tax is still withheld where the work is performed. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/michigan/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/michigan/bookkeeping-services/", cta: "Michigan bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, wrong-city income-tax withholding, untracked CIT apportionment, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/michigan/quickbooks-cleanup/", cta: "Michigan QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the city-tax payroll setup by work location (Detroit, Grand Rapids), and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/michigan/quickbooks-setup/", cta: "Michigan QuickBooks setup &rarr;" },
    { num: "04", title: "City income tax &amp; IL/IN/KY/MN/OH/WI reciprocity", body: "Michigan&rsquo;s city income tax is where payroll goes wrong &mdash; 24 cities levy one under the City Income Tax Act, an employer generally withholds for the <strong>city where the work is performed</strong> (Detroit at 2.4% resident / 1.2% nonresident, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%), and Detroit is administered by the Michigan Department of Treasury (Flint joins in 2027). We set the correct city per employee in QuickBooks Payroll, apply the IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) so cross-border staff are exempt from Michigan state tax &mdash; while the city tax stays in place &mdash; and reconcile it so the filings tie out. You or your CPA file.", href: "/quickbooks/payroll/", cta: "Payroll &amp; MI-tax setup &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including the per-city income tax by work location, the reciprocity setup for cross-border staff, and the multi-state setup many Michigan manufacturers and logistics firms need &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the city-tax, CIT apportionment, and flat 6% sales-tax detail kept filing-ready and the books FTE-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // MI FACTS — three Michigan tax realities built into the books. (H2: Three Michigan facts… + 3 H3s)
  facts: [
    { fig: "24", title: "The city income tax", body: "Michigan&rsquo;s defining local tax: <strong>24 cities levy a city income tax</strong> under the City Income Tax Act. An employer generally withholds the city tax for the <strong>city where the work is performed</strong> (for nonresidents) &mdash; <strong>Detroit</strong> is the highest at <strong>2.4% resident / 1.2% nonresident</strong>, <strong>Grand Rapids</strong> and <strong>Saginaw</strong> are 1.5%/0.75%, <strong>Highland Park</strong> is 2%/1%, and most of the rest are 1%/0.5%. Detroit&rsquo;s tax is administered by the Michigan Department of Treasury (Flint joins Treasury administration in 2027); the rest self-administer. It&rsquo;s far simpler than Ohio &mdash; no school-district layer, no 20-day rule &mdash; but generic payroll still defaults everyone to one city. We set the correct city per employee in QuickBooks Payroll. Confirm current rates with the city." },
    { fig: "6%", title: "A real Corporate Income Tax &mdash; unlike Ohio", body: "Michigan levies a <strong>6% Corporate Income Tax (CIT)</strong> on C-corporations and entities taxed as corporations federally, on the apportioned tax base &mdash; a genuine corporate income tax, the opposite of Ohio, which has none and uses a gross-receipts tax (the CAT) instead. Flow-through entities like partnerships and S-corps aren&rsquo;t subject to the CIT; their income flows to the owners, or they can make the elective <strong>flow-through entity (FTE) tax</strong> election at the 4.25% rate as a SALT-cap workaround. We keep the books CIT- and FTE-ready so the filing decision and the election are clean for your CPA." },
    { fig: "6% flat", title: "One sales-tax rate, statewide", body: "Michigan&rsquo;s sales and use tax is a <strong>flat 6% statewide</strong>, and <strong>no city, county, or local unit may add to it</strong> &mdash; so unlike Ohio&rsquo;s county-variable combined rate, every Michigan sale is 6%, everywhere. The matching <strong>use tax is 6%</strong> on out-of-state purchases and items brought into the state. The rate is simple; the work is taxability and multi-state nexus, so we configure the QuickBooks sales-tax items correctly and scope nexus for businesses selling across the Ohio, Indiana, or Wisconsin lines." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The city income tax by work location (Detroit, Grand Rapids), IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) &amp; the flat 6% sales-tax rate set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept CIT- and FTE-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Michigan &amp; federal income-tax returns &amp; the 6% Corporate Income Tax (CIT)",
    "Files the city income-tax filings, the sales &amp; use tax return &amp; the flow-through entity (Form 5772) return; represents you before the Michigan Department of Treasury or the city",
    "Makes the flow-through entity (FTE) election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Michigan situation &mdash; volume, accounts, which cities you withhold for, whether IL/IN/KY/MN/OH/WI reciprocity applies to your staff, whether you owe the 6% CIT or should consider the FTE election, your flat 6% sales-tax footprint, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the per-city income-tax withholding by work location, the reciprocity setup, the flat 6% sales-tax items, the CIT apportionment tracking, and broken reconciliations to a <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the city tax current by work location, cross-border withholding correct under reciprocity, sales tax at the single statewide rate, the books kept CIT- and FTE-ready, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you a hybrid employee just shifted their predominant place of employment into Detroit &mdash; changing which city you withhold for &mdash; that your S-corp should weigh the flow-through entity election at 4.25% this year, or how the 6% Corporate Income Tax interacts with your apportionment. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Michigan books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Michigan, or will any bookkeeper do?", a: "For a Michigan business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Michigan&rsquo;s specific rules &mdash; the city income tax withheld by work location across 24 cities (Detroit at 2.4%/1.2%), the real 6% Corporate Income Tax that Ohio doesn&rsquo;t have, the flow-through entity election, the IL/IN/KY/MN/OH/WI reciprocity, and the flat 6% sales tax with no local add-on. TechBrot pairs ProAdvisor-level QuickBooks work with that Michigan context, delivered as a fixed-fee engagement." },
    { q: "What does a Michigan QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the city income tax, the flat 6% sales tax, and the CIT apportionment tracked so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Michigan?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Michigan CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Michigan and federal returns, the 6% Corporate Income Tax, the city income-tax filings, the sales and use tax return, and the flow-through entity (Form 5772) return, and represents you before the Michigan Department of Treasury. Most Michigan businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How does the city income tax and IL/IN/KY/MN/OH/WI reciprocity affect my payroll?", a: "Michigan&rsquo;s city income tax is the genuine local complexity: 24 cities levy one under the City Income Tax Act, an employer generally withholds for the city where the work is performed (Detroit at 2.4% resident / 1.2% nonresident, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%), and Detroit&rsquo;s tax is administered by the Michigan Department of Treasury. It&rsquo;s far simpler than Ohio &mdash; no school districts, no 20-day rule. Separately, Michigan has reciprocity with Illinois, Indiana, Kentucky, Minnesota, Ohio, and Wisconsin, so a qualifying resident of those states working in Michigan files Form MI-W4 and is exempt from Michigan state withholding &mdash; but the city tax still applies where the work is performed, and reciprocity doesn&rsquo;t cover independent contractors or non-wage income. We build the per-city tax and the per-employee reciprocity into QuickBooks Payroll so the right amounts are withheld and the filings reconcile; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Michigan engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the per-city income-tax withholding, the reciprocity setup, and the CIT apportionment tracking &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Michigan discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 83 Michigan counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the 6% Corporate Income Tax, the city income-tax filings, the sales &amp; use tax return &amp; the flow-through entity (Form 5772) return coordinated with your CPA/EA, the Michigan Department of Treasury, and the city" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/michigan/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Michigan QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Michigan businesses across all 83 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and the city income tax withheld by work location (24 City Income Tax Act cities, Detroit at 2.4%/1.2%), IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4), the 6% Corporate Income Tax and flow-through entity (FTE) readiness, and the flat 6% sales tax, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Michigan's city income tax, the real 6% CIT (unlike Ohio's CAT), the flat 6% sales tax, and the FTE election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-michigan-quickbooks-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#mi-svc-qbaccountant-summary","#mi-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Michigan","item":"https://techbrot.com/find-an-accountant/michigan/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Michigan QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Michigan businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination across the city income tax withheld by work location (24 City Income Tax Act cities, Detroit at 2.4%/1.2%), IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4), the 6% Corporate Income Tax and flow-through entity (FTE) readiness, and the flat 6% sales tax, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Michigan or federal returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales and use tax return, or the flow-through entity (Form 5772) return — coordinates with the client's CPA, EA, the Michigan Department of Treasury, and the city.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Michigan","sameAs":"https://en.wikipedia.org/wiki/Michigan"},
          "audience":{"@type":"BusinessAudience","name":"Michigan small and midsize businesses, manufacturers and automotive suppliers, logistics and trucking operators, healthcare practices, professional and financial-services firms, and construction and real estate companies"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Michigan QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"City Income Tax (CITA) & IL/IN/KY/MN/OH/WI Reciprocity Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
