/* /find-an-accountant/georgia/quickbooks-accountant/ — GA SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Michigan child
 * (michigan/quickbooks-accountant.*) for structure and routing, and the areaServed-only / no-address
 * framing, with Georgia content per _build/strategy/GA-FACTS.md. JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * GA LOCALIZATION (the deliberate GA differentiation — do NOT import MI's city-tax/reciprocity hook):
 * Michigan's CITY INCOME TAX (24 CITA cities, Detroit 2.4/1.2, withheld by work location) and its
 * IL/IN/KY/MN/OH/WI reciprocity → Georgia has NO local/city income tax at all (payroll income-tax
 * withholding is STATE-ONLY) AND NO income-tax reciprocity with any state, so ALL Georgia-source
 * wages are withheld for Georgia (the multi-state/remote-employer trap). Michigan's flat 4.25% IIT →
 * Georgia FLAT 4.99% income tax for 2026 (HB 463 lowered it from 5.19%; HB 1437 (2022) made GA flat;
 * larger 2026 standard deduction $32k MFJ / $16k single; legislated path to further cuts). Michigan's
 * 6% Corporate Income Tax → Georgia FLAT 4.99% corporate income tax PLUS the corporate NET WORTH TAX
 * (franchise-style: $0 if net worth ≤ $100,000 but still files, graduated to a MAX $5,000 over $22M,
 * filed with the corporate return Form 600 — the GA-distinct business tax / the hook). Michigan's FTE
 * (Form 5772) → Georgia PTE election (HB 149) at the entity level (4.99%, SALT-cap workaround).
 * Michigan's flat 6% sales tax with no local add-on → Georgia 4% STATE sales tax PLUS county
 * local-option add-ons (LOST/SPLOST/ELOST/TSPLOST, Atlanta MOST), so the COMBINED rate varies by
 * jurisdiction (~7–8%) and changes quarterly — QuickBooks must charge the right combined rate by
 * location. Michigan's 83 counties → 159 Georgia counties; metros Atlanta (Fulton; fintech/logistics/
 * film), Savannah (Chatham; the Port), Augusta (Richmond), Columbus (Muscogee), Macon (Bibb), Athens
 * (Clarke), Marietta (Cobb), Alpharetta (Fulton). PRICING anchored to GA-FACTS canonical "from"
 * figures (monthly $400, cleanup $1,200, setup $750). provider = #organization; areaServed = State
 * Georgia (NO PostalAddress / geo / LocalBusiness — Georgia is an areaServed-only state; the firm is
 * areaServed-only (no street address) like every state); reviewedBy #david-westgate.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate
 * only as reviewedBy @id). Independent firm — does NOT file Georgia or federal returns, the corporate
 * income tax, the net worth tax, the individual income tax, the sales/use-tax return, or the PTE
 * election; not a registered agent; coordinates with the client's CPA/EA and the Georgia Dept of
 * Revenue. The flat 4.99% income & corporate rate (2026), the 4% state sales tax, and the net-worth-tax
 * $100k/$5,000/$22M thresholds are VERIFIED and stated; combined county sales-tax rates framed
 * qualitatively (~7–8%).
 *
 * ROUTING (core state, only 6 GA pages exist): links go ONLY to the 5 GA siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/georgia/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Georgia QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/accounting/sales-tax-compliance/\">county local-option sales tax charged by location (4% state plus LOST/SPLOST/ELOST/TSPLOST, combined ~7&ndash;8%)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Georgia realities like the <strong>flat 4.99% state income tax for 2026 (on a legislated path to further reductions)</strong>, the <strong>corporate net worth tax that&rsquo;s separate from income tax ($0 under $100,000 of net worth, capped at $5,000 over $22 million)</strong>, the <strong>state-only withholding with no reciprocity</strong> (all Georgia-source wages are withheld for Georgia), the <strong>flat 4.99% corporate income tax</strong>, and the <strong>pass-through entity (PTE) election</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 159 Georgia counties, from metro Atlanta&rsquo;s fintech, logistics, and film economy to the Port of Savannah, Augusta, Columbus, Macon, Athens, and Marietta.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Georgia QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Georgia QuickBooks accountant?", a: "<strong>A Georgia QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Georgia business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the county local-option sales tax by location (4% state plus LOST/SPLOST/ELOST/TSPLOST), keeping the corporate net worth tax and the pass-through entity (PTE) election ready, and applying state-only withholding with no reciprocity &mdash; with fluency in Georgia&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 159 counties." },
    { q: "What does it cost in Georgia?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Georgia and federal returns, the 4.99% corporate income tax, the corporate net worth tax, the sales and use tax return, and the pass-through entity (PTE) election. Most Georgia businesses use both." },
    { q: "Do you handle the local-option sales tax and Georgia withholding?", a: "Yes &mdash; the local-option sales tax is the genuine Georgia complexity. The state rate is 4%, but counties add local options &mdash; <strong>LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST</strong> &mdash; so the combined rate varies by jurisdiction (commonly 7&ndash;8%) and changes quarterly, and <a href=\"/quickbooks/online/\">QuickBooks</a> has to charge the right combined rate by location. Georgia also has <strong>no local income tax but no reciprocity</strong>, so all Georgia-source wages are withheld for Georgia &mdash; we configure <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> so multi-state and remote staff are withheld correctly. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/georgia/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/georgia/bookkeeping-services/", cta: "Georgia bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, wrong sales-tax jurisdictions, a messy equity section that complicates the net worth tax, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/georgia/quickbooks-cleanup/", cta: "Georgia QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the local-option sales-tax items by jurisdiction (LOST/SPLOST/ELOST/TSPLOST), and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/georgia/quickbooks-setup/", cta: "Georgia QuickBooks setup &rarr;" },
    { num: "04", title: "Local-option sales tax setup", body: "Georgia&rsquo;s local-option sales tax is where QuickBooks goes wrong &mdash; the state rate is <strong>4%</strong>, but counties add local options (<strong>LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST</strong>), so the <strong>combined rate varies by jurisdiction</strong> (commonly 7&ndash;8%) and changes quarterly. Generic setups charge one statewide rate &mdash; wrong. We configure the QuickBooks sales-tax items so the correct combined rate applies by location, reconcile them so the filings tie out, and scope multi-state nexus for sellers crossing the Florida, Alabama, or Tennessee lines. You or your CPA file.", href: "/accounting/sales-tax-compliance/", cta: "Sales-tax compliance &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including state-only Georgia withholding with <strong>no reciprocity</strong> (all Georgia-source wages are withheld for Georgia) and the multi-state setup many Georgia logistics and remote-staff employers need &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the local-option sales-tax detail kept filing-ready and the balance sheet kept net-worth-tax- and PTE-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // GA FACTS — three Georgia tax realities built into the books. (H2: Three Georgia facts… + 3 H3s)
  facts: [
    { fig: "7&ndash;8%", title: "The local-option sales tax", body: "Georgia&rsquo;s defining indirect tax: the state rate is <strong>4%</strong>, but counties add <strong>local options</strong> &mdash; <strong>LOST</strong> (Local Option), <strong>SPLOST</strong> (Special Purpose), <strong>ELOST/ESPLOST</strong> (Education), <strong>TSPLOST</strong> (Transportation), and Atlanta&rsquo;s <strong>MOST</strong> &mdash; each generally 1%, so the <strong>combined rate varies by jurisdiction</strong>, commonly <strong>7% to 8%</strong>, and it changes quarterly. Because the rate is set per location, generic setups that charge one statewide rate are wrong. We configure the QuickBooks sales-tax items so the right combined rate applies by location. Confirm current jurisdiction rates against the Georgia Department of Revenue rate chart." },
    { fig: "$5,000", title: "A corporate net worth tax", body: "Separately from income tax, Georgia levies a <strong>corporate net worth tax</strong> &mdash; a franchise-style tax on corporations doing business in the state. A corporation with <strong>net worth of $100,000 or less owes $0</strong> (but must still file), and the tax is graduated up to a <strong>maximum of $5,000</strong> for net worth over $22 million. It&rsquo;s filed together with the corporate income-tax return (Form 600), so the equity section and balance sheet have to be clean to compute it. We keep the books net-worth-tax-ready so the filing is straightforward for your CPA." },
    { fig: "4.99% flat", title: "A flat income tax &mdash; but no reciprocity", body: "Georgia&rsquo;s individual income tax is a <strong>flat 4.99% for 2026</strong> (HB 1437 made it flat; HB 463 lowered it from 5.19%, on a legislated path to further reductions), and the corporate rate matches at 4.99%. There is <strong>no local or city income tax</strong>, so payroll withholding is state-only &mdash; but Georgia has <strong>no reciprocity</strong> with any state, so a nonresident working in Georgia is generally withheld for Georgia on the Georgia-source wages. We configure QuickBooks Payroll so multi-state and remote staff are withheld correctly, and keep the books PTE-ready for growing pass-throughs." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The county local-option sales tax by jurisdiction (LOST/SPLOST/ELOST/TSPLOST), state-only withholding with no reciprocity &amp; the flat 4.99% rate set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept net-worth-tax- and PTE-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Georgia &amp; federal income-tax returns &amp; the 4.99% corporate income tax",
    "Files the corporate net worth tax (Form 600) &amp; the sales &amp; use tax return; represents you before the Georgia Department of Revenue",
    "Makes the pass-through entity (PTE) election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Georgia situation &mdash; volume, accounts, which sales-tax jurisdictions you sell into, whether the corporate net worth tax applies, where your multi-state withholding runs (Georgia has no reciprocity), whether the PTE election fits, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the local-option sales-tax items by jurisdiction, the state-only withholding setup, a clean equity section for the net worth tax, and broken reconciliations to a <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the local-option sales tax current by jurisdiction, Georgia-source wages withheld correctly with no reciprocity assumptions, the books kept net-worth-tax- and PTE-ready, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you that you just triggered sales-tax nexus in three more Georgia jurisdictions, where your net worth puts you on the franchise-tax schedule, or whether your S-corp should make the pass-through entity (PTE) election at 4.99% this year. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Georgia books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Georgia, or will any bookkeeper do?", a: "For a Georgia business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Georgia&rsquo;s specific rules &mdash; the county local-option sales tax charged by location (4% state plus LOST/SPLOST/ELOST/TSPLOST, combined ~7&ndash;8%), the corporate net worth tax, state-only withholding with no reciprocity, the flat 4.99% income and corporate rate, and the pass-through entity (PTE) election. TechBrot pairs ProAdvisor-level QuickBooks work with that Georgia context, delivered as a fixed-fee engagement." },
    { q: "What does a Georgia QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the local-option sales tax charged correctly by jurisdiction and the balance sheet net-worth-tax-ready so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Georgia?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Georgia CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Georgia and federal returns, the 4.99% corporate income tax, the corporate net worth tax (Form 600), the sales and use tax return, and the pass-through entity (PTE) election, and represents you before the Georgia Department of Revenue. Most Georgia businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How do the local-option sales tax and Georgia withholding affect my setup?", a: "Georgia&rsquo;s local-option sales tax is the genuine indirect-tax complexity: the state rate is 4%, but counties add local options (LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST), so the combined rate varies by jurisdiction &mdash; commonly 7% to 8% &mdash; and changes quarterly, so QuickBooks has to charge the correct combined rate by location. Separately, Georgia has no local income tax, so withholding is state-only &mdash; but it also has no reciprocity with any state, so a nonresident working in Georgia is generally withheld for Georgia on the Georgia-source wages. We build the per-jurisdiction sales tax and the correct state withholding into QuickBooks so the right amounts apply and the filings reconcile; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Georgia engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the local-option sales-tax jurisdictions, the state withholding setup, and a clean equity section for the net worth tax &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Georgia discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 159 Georgia counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the 4.99% corporate income tax, the corporate net worth tax (Form 600), the sales &amp; use tax return &amp; the pass-through entity (PTE) election coordinated with your CPA/EA and the Georgia Department of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/georgia/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Georgia QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Georgia businesses across all 159 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and the county local-option sales tax charged by location (4% state plus LOST/SPLOST/ELOST/TSPLOST, combined ~7-8%), the corporate net worth tax ($0 under $100,000, $5,000 maximum over $22 million), state-only withholding with no reciprocity, and pass-through entity (PTE) readiness, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Georgia's local-option sales tax, the flat 4.99% income and corporate rate, the corporate net worth tax, and the PTE election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/georgia-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ga-svc-qbaccountant-summary","#ga-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Georgia","item":"https://techbrot.com/find-an-accountant/georgia/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Georgia QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Georgia businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination with state-only withholding and no reciprocity (all Georgia-source wages withheld for Georgia), the county local-option sales tax charged by location (4% state plus LOST/SPLOST/ELOST/TSPLOST, combined ~7-8%), corporate net worth tax readiness ($0 under $100,000, $5,000 maximum over $22 million), the flat 4.99% income and corporate rate, and pass-through entity (PTE) readiness, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Georgia or federal returns, the corporate income tax, the net worth tax, the individual income tax, the sales and use tax return, or the pass-through entity (PTE) election — coordinates with the client's CPA, EA, and the Georgia Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Georgia","sameAs":"https://en.wikipedia.org/wiki/Georgia_(U.S._state)"},
          "audience":{"@type":"BusinessAudience","name":"Georgia small and midsize businesses, logistics and distribution operators, manufacturers, fintech and professional-services firms, film and production companies, healthcare practices, and construction and real estate companies"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Georgia QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Local-Option Sales Tax (LOST/SPLOST/ELOST/TSPLOST) & State Withholding Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
