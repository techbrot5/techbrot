/* /find-an-accountant/virginia/quickbooks-accountant/ — VA SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Maryland child
 * (maryland/quickbooks-accountant.*) for structure and routing, and the areaServed-only /
 * no-address framing, with Virginia content per _build/strategy/VA-FACTS.md. JSON front-matter
 * lives in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * VA LOCALIZATION (the key differentiation): unlike Maryland (county "piggyback" LOCAL income tax)
 * or Pennsylvania (Act 32 EIT), VIRGINIA HAS NO LOCAL INCOME TAX. The VA-distinct hook is the LOCAL
 * BUSINESS taxes — the BPOL (Business, Professional & Occupational License) gross-receipts tax, set
 * by each city/county and varying by business classification, with a SEPARATE BPOL per jurisdiction
 * so gross receipts must be tracked by locality in QuickBooks; plus local BTPP and Machinery & Tools
 * (asset-based) taxes. NO piggyback/MW507/local-income-withholding angle. Other VA realities woven
 * in: the variable REGIONAL sales tax (5.3% most of VA / 6.0% Northern Virginia, Hampton Roads,
 * Richmond / 7.0% Historic Triangle; reduced 1% groceries); the MD/PA/WV/KY/DC reciprocity (Form
 * VA-4); the graduated state income tax (2/3/5/5.75%, top 5.75% from $17,000); the flat 6% corporate
 * rate; the data-center sales/use-tax exemption (Loudoun's Data Center Alley); and the elective
 * 5.75% PTET (available through TY2025 — confirm 2026 status; advisory hook). PRICING anchored to
 * VA-FACTS canonical "from" figures (monthly $400, cleanup $1,200, setup $750). provider =
 * #organization; areaServed = State Virginia (NO PostalAddress / geo / LocalBusiness — Virginia is
 * an areaServed-only state; remote-served across the Mid-Atlantic); reviewedBy #david-westgate. HONESTY
 * (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate only as
 * reviewedBy @id). Independent firm — does NOT file Virginia or federal returns, the corporate
 * income tax, the state income tax, the payroll-withholding filings, the sales-tax return, the BPOL
 * or local business-tax returns, or the PTET return; not a registered agent; coordinates with the
 * client's CPA/EA, the Virginia Department of Taxation, and the locality. Specific locality BPOL
 * rates and sales-tax regions framed qualitatively; the 7.75%-over-$1M bracket is a 2026 PROPOSAL,
 * NOT law; the PTET is flagged "confirm 2026 status."
 *
 * ROUTING (core state, only 6 VA pages exist): links go ONLY to the 4 VA siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/virginia/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Virginia QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and <strong>tracking gross receipts by locality for the BPOL business-license tax</strong>, and producing CPA-ready monthly statements &mdash; while staying aware of Virginia realities like the <strong>graduated state income tax (a top 5.75% that starts at just $17,000) with no local income tax</strong>, the <strong>MD/PA/WV/KY/DC reciprocity (Form VA-4)</strong>, the <strong>variable regional <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> (5.3% / 6.0% / 7.0%)</strong>, and the <strong>PTET election</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across Virginia&rsquo;s counties and independent cities, from Northern Virginia and Data Center Alley to Richmond, Hampton Roads, and Roanoke.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Virginia QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Virginia QuickBooks accountant?", a: "<strong>A Virginia QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Virginia business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, tracking gross receipts by locality for the BPOL business-license tax, configuring the variable regional sales tax (5.3% / 6.0% / 7.0%), handling MD/PA/WV/KY/DC reciprocity, and producing CPA-ready statements &mdash; with fluency in Virginia&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across the Commonwealth&rsquo;s counties and independent cities." },
    { q: "What does it cost in Virginia?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Virginia and federal returns, the corporate income tax, the state income tax, the sales-tax return, and the BPOL and local business-tax returns. Most Virginia businesses use both." },
    { q: "Do you handle BPOL gross-receipts tracking and MD/PA/WV/KY/DC reciprocity?", a: "Yes &mdash; the BPOL gross-receipts business tax is the genuine Virginia complexity. Most cities and counties levy it on <strong>gross receipts</strong>, the rate varies by locality and business classification, and a company in <strong>multiple jurisdictions generally needs a separate BPOL for each</strong> &mdash; so we set QuickBooks up to <strong>track gross receipts by locality</strong> and keep the BTPP and Machinery &amp; Tools asset detail ready. We also configure the MD/PA/WV/KY/DC reciprocity (Form VA-4) so cross-border staff are withheld for their home state. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/virginia/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/virginia/bookkeeping-services/", cta: "Virginia bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, gross receipts not tracked by locality for BPOL, a single sales-tax rate charged across regions, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/virginia/quickbooks-cleanup/", cta: "Virginia QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, gross-receipts tracking by locality for BPOL, the variable regional sales tax, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/virginia/quickbooks-setup/", cta: "Virginia QuickBooks setup &rarr;" },
    { num: "04", title: "BPOL gross receipts &amp; regional sales tax", body: "Virginia&rsquo;s local burden is on the business side, not payroll &mdash; most cities and counties levy a <strong>BPOL tax on gross receipts</strong>, the rate set by locality and business classification, and a business in several jurisdictions generally needs a <strong>separate BPOL each</strong>. We track gross receipts by locality, keep the BTPP and Machinery &amp; Tools asset detail locality-ready, and configure the variable regional sales tax (5.3% / 6.0% / 7.0%) so the right rate is charged by location. You or your CPA file.", href: "/accounting/sales-tax-compliance/", cta: "Sales-tax compliance &rarr;" },
    { num: "05", title: "Payroll coordination &amp; reciprocity", body: "QuickBooks Payroll run and reconciled into the books &mdash; Virginia has <strong>no local income tax</strong>, so state withholding is the picture, plus the MD/PA/WV/KY/DC reciprocity (Form VA-4) so cross-border staff in the DC region are withheld for their home state, and the multi-state setup many Northern Virginia federal-contracting employers need.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the by-locality BPOL gross-receipts detail, the regional sales-tax detail, and the pass-through detail kept filing-ready and the books PTET-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // VA FACTS — three Virginia tax realities built into the books. (H2: Three Virginia facts… + 3 H3s)
  facts: [
    { fig: "BPOL", title: "The local business-license tax on gross receipts", body: "Virginia has no state business license, but <strong>most cities and counties levy a BPOL tax on a business&rsquo;s gross receipts</strong> &mdash; the rate set by each locality and varying by business classification (contractor, retail, professional services, and so on). A business operating in several Virginia jurisdictions generally needs a <strong>separate BPOL for each</strong>, so gross receipts have to be tracked by location in QuickBooks. Localities also levy Business Tangible Personal Property (BTPP) and, for some, Machinery &amp; Tools taxes &mdash; asset-based, not payroll. We track receipts by jurisdiction and keep the asset detail ready; confirm current rates with your locality&rsquo;s commissioner of the revenue." },
    { fig: "5.3&ndash;7.0%", title: "A variable regional sales tax", body: "Virginia&rsquo;s sales and use tax is <strong>not a single rate</strong>: 5.3% in most of the state (4.3% state + 1.0% local), <strong>6.0% in Northern Virginia, Hampton Roads, and the Richmond region</strong>, and <strong>7.0% in the Historic Triangle</strong> (Williamsburg, James City County, York County). Food for home consumption and essential personal hygiene products are taxed at a reduced 1%. Because the rate depends on where the sale is sourced, we configure the QuickBooks sales-tax items so the correct regional rate is charged by location &mdash; a common cleanup is a business charging one rate everywhere. Loudoun&rsquo;s Data Center Alley clients also get the data-center sales/use-tax exemption set up." },
    { fig: "MD/PA/WV/KY/DC", title: "Reciprocity changes who you withhold for", body: "Virginia has <strong>no local income tax</strong>, so income-tax withholding is state-only &mdash; graduated to a top 5.75% that begins at just $17,000. Virginia also has reciprocal agreements with <strong>Maryland, Pennsylvania, West Virginia, Kentucky, and DC</strong>: a resident of those jurisdictions who works in Virginia with limited presence (generally 183 days or fewer, no Virginia home, wage income only) is exempt from Virginia withholding and is withheld for their home state instead; they file Form VA-4. We set QuickBooks Payroll per employee so the DC-region cross-border workforce is withheld for the correct state." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "Gross receipts tracked by locality for BPOL, the BTPP/Machinery &amp; Tools asset detail, MD/PA/WV/KY/DC reciprocity &amp; the variable regional sales tax (5.3% / 6.0% / 7.0%) set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept PTET-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Virginia &amp; federal income-tax returns, the corporate income tax &amp; the state income tax",
    "Files the BPOL &amp; local business-tax returns, the sales-tax return &amp; the payroll-withholding filings; represents you before the Virginia Department of Taxation",
    "Makes the PTET election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Virginia situation &mdash; volume, accounts, which localities you owe BPOL in, which sales-tax region you sell into, whether MD/PA/WV/KY/DC reciprocity applies to your staff, whether the PTET election is in play, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, gross-receipts tracking by locality for BPOL, the regional sales-tax sourcing, the reciprocity setup, and broken reconciliations to a <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, gross receipts current by locality for BPOL, cross-border withholding correct under reciprocity, sales tax sourced right across the 5.3% / 6.0% / 7.0% regions, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you that expanding into a second county just added a BPOL filing and a new gross-receipts tracking requirement, that your data-center equipment may qualify for the sales/use-tax exemption, or that your growing pass-through should weigh the PTET election this year (available through 2025 &mdash; confirm its 2026 status with Virginia Tax). As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Virginia books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Virginia, or will any bookkeeper do?", a: "For a Virginia business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Virginia&rsquo;s specific rules &mdash; the local BPOL gross-receipts business tax tracked by jurisdiction, the variable regional sales tax (5.3% / 6.0% / 7.0%), the MD/PA/WV/KY/DC reciprocity, and the PTET election for growing pass-throughs. TechBrot pairs ProAdvisor-level QuickBooks work with that Virginia context, delivered as a fixed-fee engagement." },
    { q: "What does a Virginia QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep gross receipts tracked by locality for BPOL and the regional sales tax sourced correctly so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Virginia?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Virginia CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Virginia and federal returns, the corporate income tax, the state income tax, the sales-tax return, and the BPOL and local business-tax returns, and represents you before the Virginia Department of Taxation. Most Virginia businesses use both: TechBrot runs the books, your CPA files." },
    { q: "What is the BPOL tax, and how does it affect my QuickBooks?", a: "Virginia has no state business license, but most cities and counties levy a Business, Professional &amp; Occupational License (BPOL) tax on your gross receipts &mdash; the rate set by each locality and varying by business classification. A business operating in multiple jurisdictions generally needs a separate BPOL for each, so gross receipts have to be tracked by location, and localities also levy Business Tangible Personal Property and Machinery &amp; Tools taxes on assets. We build the by-locality gross-receipts tracking into QuickBooks and keep the asset detail ready so each BPOL and BTPP filing is clean; you or your CPA file with the locality. The rates are set jurisdiction by jurisdiction, so we confirm them against your locality&rsquo;s commissioner of the revenue." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Virginia engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the by-locality BPOL gross-receipts tracking and the regional sales-tax sourcing &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Virginia discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving Virginia&rsquo;s counties and independent cities remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; corporate income tax, state income tax, BPOL &amp; local business taxes, payroll-withholding &amp; sales-tax filing coordinated with your CPA/EA, the Virginia Department of Taxation &amp; your locality" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/virginia/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Virginia QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Virginia businesses across the Commonwealth's counties and independent cities — bookkeeping, QuickBooks setup and cleanup, payroll, and the local BPOL gross-receipts business tax tracked by locality, the variable regional sales tax (5.3% / 6.0% / 7.0%), and MD/PA/WV/KY/DC reciprocity (Form VA-4), delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Virginia's graduated 2%–5.75% income tax with no local add-on, the BPOL and local business taxes, the regional sales tax, and the PTET election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/virginia-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#va-svc-qbaccountant-summary","#va-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Virginia","item":"https://techbrot.com/find-an-accountant/virginia/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Virginia QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Virginia businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination, gross-receipts tracking by locality for the BPOL business-license tax, the variable regional sales tax (5.3% / 6.0% / 7.0%), and MD/PA/WV/KY/DC reciprocity (Form VA-4), delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Virginia or federal returns, the corporate income tax, the state income tax, the payroll-withholding filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return — coordinates with the client's CPA, EA, the Virginia Department of Taxation, and the locality.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Virginia","sameAs":"https://en.wikipedia.org/wiki/Virginia"},
          "audience":{"@type":"BusinessAudience","name":"Virginia small and midsize businesses, federal contractors and professional-services firms, IT, SaaS and data-center companies, healthcare practices, manufacturers, construction firms, and real estate operators"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Virginia QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"BPOL Gross-Receipts & Local Business Tax Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
