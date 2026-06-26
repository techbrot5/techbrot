/* /find-an-accountant/ohio/quickbooks-accountant/ — OH SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Maryland child
 * (maryland/quickbooks-accountant.*) for structure and routing, and the areaServed-only /
 * no-address framing, with Ohio content per _build/strategy/OH-FACTS.md. JSON front-matter
 * lives in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * OH LOCALIZATION: Maryland's county "piggyback" local tax (MW507) + DC/PA/VA/WV reciprocity +
 * 3% IT/data sales tax → Ohio's MUNICIPAL INCOME TAX, the most complex local payroll tax in the
 * US: 649 municipalities + 199 school districts levy income taxes, withheld by WORK LOCATION
 * (rates ~1%-3%, major cities ~2.5%); the 20-day occasional-entrant rule; collected by RITA / CCA /
 * self-administered cities that read the rules differently; school-district income tax is a separate
 * residence-based layer. Ohio has NO corporate income tax — the Commercial Activity Tax (CAT), a
 * gross-receipts tax, replaced it (2026 exclusion $6,000,000; under = no CAT; 0.26% above). The
 * IN/PA/MI/KY/WV reciprocity (Form IT 4NR; STATE tax only — the Ohio municipal tax STILL applies;
 * doesn't shield 20%+ owners under IT 4738). Sales tax 5.75% state + county (combined 6.5%-8.0%).
 * State income tax is low (under 3%, first $26,050 exempt) on a legislated path to ZERO by 2030
 * (HB96 — framed qualitatively, no fixed 2026 rate). The IT 4738 PTET is the SALT-cap advisory hook.
 * PRICING anchored to OH-FACTS canonical "from" figures (monthly $400, cleanup $1,200, setup $750).
 * provider = #organization; areaServed = State Ohio (NO PostalAddress / geo / LocalBusiness — Ohio is
 * an areaServed-only state; the DE HQ is the only real-address state); reviewedBy #david-westgate.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate
 * only as reviewedBy @id). Independent firm — does NOT file Ohio returns, the CAT, the state income
 * tax, the municipal or school-district income-tax filings, the sales-tax return, or the IT 4738 PTE
 * return; not a registered agent; coordinates with the client's CPA/EA, the Ohio Dept of Taxation, and
 * RITA/CCA. State income-tax rate and specific municipal/county rates framed qualitatively.
 *
 * ROUTING (core state, only 6 OH pages exist): links go ONLY to the 4 OH siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/ohio/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Ohio QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/quickbooks/payroll/\">municipal income tax withheld by work location (RITA, CCA, and the 20-day rule)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Ohio realities like the <strong>state income tax that is low and on a legislated path to zero by 2030 (the first $26,050 exempt)</strong>, the <strong>Commercial Activity Tax in place of a corporate income tax</strong>, the <strong>IN/PA/MI/KY/WV reciprocity</strong> (state tax only &mdash; the municipal tax still applies), the <strong>county-variable <a href=\"/accounting/sales-tax-compliance/\">sales tax</a></strong> (5.75% state plus a county rate), and the <strong>IT 4738 PTE election</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 88 Ohio counties, from the Columbus, Cleveland, and Cincinnati 3-C corridor to Toledo, Akron, Dayton, Canton, and Youngstown.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Ohio QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is an Ohio QuickBooks accountant?", a: "<strong>An Ohio QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages an Ohio business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the municipal income tax by each employee&rsquo;s work location (RITA, CCA, and the 20-day rule) plus the residence-based school-district layer, tracking the Commercial Activity Tax and the county-variable sales tax, and producing CPA-ready statements &mdash; with fluency in Ohio&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 88 counties." },
    { q: "What does it cost in Ohio?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Ohio and federal returns, the Commercial Activity Tax, the municipal and school-district income-tax filings, and the sales-tax return. Most Ohio businesses use both." },
    { q: "Do you handle the municipal income tax and IN/PA/MI/KY/WV reciprocity?", a: "Yes &mdash; the municipal income tax is the genuine Ohio complexity, the most intricate local payroll tax in the country. <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> has to withhold for the right city by <strong>work location</strong> &mdash; 649 municipalities and 199 school districts levy income taxes, and RITA, CCA, and self-administered cities read the 20-day occasional-entrant rule differently. We also configure the IN/PA/MI/KY/WV reciprocity (Form IT 4NR) so cross-border staff are exempt from Ohio <strong>state</strong> tax, while the Ohio <strong>municipal</strong> tax is still withheld where the work is performed. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/ohio/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/ohio/bookkeeping-services/", cta: "Ohio bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, wrong-city municipal withholding, missing school-district setup, untracked CAT gross receipts, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/ohio/quickbooks-cleanup/", cta: "Ohio QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the municipal-tax payroll setup by work location (RITA/CCA), and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/ohio/quickbooks-setup/", cta: "Ohio QuickBooks setup &rarr;" },
    { num: "04", title: "Municipal income tax &amp; IN/PA/MI/KY/WV reciprocity", body: "Ohio&rsquo;s municipal income tax is where payroll goes wrong &mdash; 649 municipalities and 199 school districts levy income taxes, an employer generally withholds for the <strong>city where the work is performed</strong> (rates run about 1% to 3%; major cities are around 2.5%), and the 20-day occasional-entrant rule is read differently by RITA, CCA, and self-administered cities. We set the correct city per employee in QuickBooks Payroll, add the residence-based school-district layer, apply the IN/PA/MI/KY/WV reciprocity (Form IT 4NR) so cross-border staff are exempt from Ohio state tax &mdash; while the municipal tax stays in place &mdash; and reconcile it so the filings tie out. You or your CPA file.", href: "/quickbooks/payroll/", cta: "Payroll &amp; OH-tax setup &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including the per-city municipal income tax by work location, the school-district layer, the reciprocity setup for cross-border staff, and the multi-state setup many Ohio manufacturers and logistics firms need &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the municipal-tax, CAT gross-receipts, and county sales-tax detail kept filing-ready and the books PTE-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // OH FACTS — three Ohio tax realities built into the books. (H2: Three Ohio facts… + 3 H3s)
  facts: [
    { fig: "649 + 199", title: "The municipal income tax", body: "Ohio has the most intricate local income-tax regime in the country: <strong>649 municipalities and 199 school districts</strong> levy income taxes. An employer generally withholds the municipal tax for the <strong>city where the work is performed</strong> (rates run about 1% to 3%; the major cities are around 2.5%), the <strong>20-day occasional-entrant rule</strong> governs when withholding begins, and collection is split among <strong>RITA, CCA, and self-administered</strong> cities that read the rules differently &mdash; with the school-district tax adding a separate residence-based layer. We set the correct city per employee in QuickBooks Payroll and update it when work locations change. Confirm current rates with RITA or the city." },
    { fig: "$6M", title: "No corporate income tax &mdash; the CAT", body: "Ohio levies <strong>no corporate income tax</strong>; it was replaced by the <strong>Commercial Activity Tax (CAT)</strong>, a tax on gross receipts. For 2026 the exclusion is <strong>$6 million</strong> &mdash; a business with Ohio taxable gross receipts under $6 million owes no CAT, and after the recent reforms most small businesses are exempt &mdash; with a 0.26% rate above the exclusion. The gross-receipts figure still has to be tracked correctly to know where you stand, so we keep the books CAT-ready and measured against the exclusion." },
    { fig: "6.5&ndash;8.0%", title: "A county-by-county sales tax", body: "Ohio&rsquo;s sales and use tax is <strong>5.75% at the state level, plus a county (and sometimes transit) rate</strong>, so the combined rate runs from about <strong>6.5% to 8.0%</strong> depending on the county &mdash; the 8.0% top is in Cuyahoga County (around Cleveland) and Franklin County (around Columbus). Because the rate is set at the county level, we configure the QuickBooks sales-tax items to charge the correct combined rate by location, and scope multi-state nexus for businesses selling across the Indiana, Pennsylvania, or Michigan lines." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The municipal income tax by work location (RITA/CCA, the 20-day rule), the school-district layer, IN/PA/MI/KY/WV reciprocity (Form IT 4NR) &amp; the county sales-tax rate set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept CAT- and PTE-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Ohio &amp; federal income-tax returns &amp; the Commercial Activity Tax (CAT)",
    "Files the municipal &amp; school-district income-tax filings, the sales-tax return &amp; the IT 4738 PTE return; represents you before the Ohio Department of Taxation, RITA, or CCA",
    "Makes the IT 4738 PTE election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Ohio situation &mdash; volume, accounts, which cities and school districts you withhold for, whether IN/PA/MI/KY/WV reciprocity applies to your staff, whether your gross receipts cross the $6M CAT threshold, which county sales-tax rate applies, whether the IT 4738 PTE election is in play, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the per-city municipal withholding by work location, the school-district layer, the reciprocity setup, the county sales-tax sourcing, the CAT gross-receipts tracking, and broken reconciliations to a <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the municipal tax current by work location, cross-border withholding correct under reciprocity, county sales tax sourced right, the CAT kept ready against the $6M exclusion, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you a hybrid employee just crossed the 20-day threshold in another city &mdash; changing which municipality you withhold for &mdash; that your gross receipts are about to cross the $6 million CAT line, or that your growing pass-through should weigh the IT 4738 PTE election this year. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Ohio books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Ohio, or will any bookkeeper do?", a: "For an Ohio business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Ohio&rsquo;s specific rules &mdash; the municipal income tax withheld by work location across 649 cities and 199 school districts (RITA, CCA, and the 20-day rule), the Commercial Activity Tax in place of a corporate income tax, the IN/PA/MI/KY/WV reciprocity, and the county-variable sales tax. TechBrot pairs ProAdvisor-level QuickBooks work with that Ohio context, delivered as a fixed-fee engagement." },
    { q: "What does an Ohio QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the municipal income tax, the county sales tax, and the CAT gross receipts tracked so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Ohio?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot an Ohio CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Ohio and federal returns, the Commercial Activity Tax, the municipal and school-district income-tax filings, the sales-tax return, and the IT 4738 PTE return, and represents you before the Ohio Department of Taxation. Most Ohio businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How does the municipal income tax and IN/PA/MI/KY/WV reciprocity affect my payroll?", a: "Ohio has the most complex local payroll tax in the country: 649 municipalities and 199 school districts levy income taxes, an employer generally withholds the municipal tax for the city where the work is performed (about 1% to 3%, major cities around 2.5%), the 20-day occasional-entrant rule governs when withholding begins, and RITA, CCA, and self-administered cities read it differently. Separately, Ohio has reciprocity with Indiana, Pennsylvania, Michigan, Kentucky, and West Virginia, so a qualifying resident of those states working in Ohio files Form IT 4NR and is exempt from Ohio state withholding &mdash; but the municipal tax still applies where the work is performed. We build the per-city municipal tax, the school-district layer, and the per-employee reciprocity into QuickBooks Payroll so the right amounts are withheld and the filings reconcile; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Ohio engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the per-city municipal withholding, the school-district setup, and the CAT gross-receipts tracking &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Ohio discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 88 Ohio counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the Commercial Activity Tax, the municipal &amp; school-district income tax, the sales-tax return &amp; the IT 4738 PTE return coordinated with your CPA/EA, the Ohio Department of Taxation, and RITA/CCA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/ohio/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Ohio QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Ohio businesses across all 88 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and the municipal income tax withheld by work location (RITA, CCA, and the 20-day rule across 649 municipalities and 199 school districts), IN/PA/MI/KY/WV reciprocity (Form IT 4NR), Commercial Activity Tax (CAT) gross-receipts tracking, and county-variable sales tax, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Ohio's municipal income tax, the CAT in place of a corporate income tax, the county sales tax, and the IT 4738 PTE election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/ohio-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#oh-svc-qbaccountant-summary","#oh-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Ohio","item":"https://techbrot.com/find-an-accountant/ohio/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Ohio QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Ohio businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination across the municipal income tax withheld by work location (RITA, CCA, the 20-day rule, and 199 school districts), IN/PA/MI/KY/WV reciprocity (Form IT 4NR), Commercial Activity Tax (CAT) gross-receipts tracking, and county-variable sales tax, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Ohio or federal returns, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the IT 4738 PTE return — coordinates with the client's CPA, EA, the Ohio Department of Taxation, and RITA/CCA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Ohio","sameAs":"https://en.wikipedia.org/wiki/Ohio"},
          "audience":{"@type":"BusinessAudience","name":"Ohio small and midsize businesses, manufacturers and logistics operators, healthcare practices, professional and financial-services firms, and construction and real estate companies"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Ohio QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Municipal Income Tax (RITA/CCA) & IN/PA/MI/KY/WV Reciprocity Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
