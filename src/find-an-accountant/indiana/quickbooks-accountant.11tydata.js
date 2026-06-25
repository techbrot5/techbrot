/* /find-an-accountant/indiana/quickbooks-accountant/ — IN SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Delaware child
 * (delaware/quickbooks-accountant.*) for structure and the New York child
 * (new-york/quickbooks-accountant.*) for the areaServed-only / no-address framing, with Indiana
 * content per IN-FACTS.md. JSON front-matter lives in the .njk; this file supplies the content
 * arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList, Service with OfferCatalog,
 * FAQPage).
 *
 * IN LOCALIZATION: DE's 0% sales tax + gross receipts tax / $300 franchise tax / Wilmington wage
 * tax → Indiana's flat 2.95% state income tax with a county Local Income Tax (LIT) levied by all
 * 92 counties on top (the genuine QuickBooks-setup complexity), the flat 7% statewide sales tax
 * with no local add-ons, and the $2,000,000 business personal-property exemption (declare on Form
 * 102/103). PRICING anchored to IN-FACTS canonical "from" figures (monthly $400, cleanup $1,200,
 * setup $750). provider = #organization; areaServed = State Indiana (NO PostalAddress / geo /
 * LocalBusiness — Indiana is an areaServed-only anchor); reviewedBy #david-westgate. HONESTY (R5):
 * no invented reviews/stats; firm-level review byline (no founder name; David Westgate only as
 * reviewedBy @id). Independent firm — does NOT file Indiana returns, the county LIT return, the
 * sales-tax return, or the business personal-property return; not a registered agent; coordinates
 * with the client's CPA/EA and county assessor. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.)
  summary: "An <strong>Indiana QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county income tax (LIT) withholding</a> by county, and producing CPA-ready monthly statements &mdash; while staying aware of Indiana realities like the flat <strong>2.95% state income tax</strong> with a <strong>county local income tax</strong> levied by all 92 counties on top, the flat <strong>7% statewide <a href=\"/find-an-accountant/indiana/sales-tax-help/\">sales tax</a></strong> with no local add-ons, and the $2,000,000 business personal-property exemption. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 92 Indiana counties, Indianapolis to Evansville.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is an Indiana QuickBooks accountant?", a: "<strong>An Indiana QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages an Indiana business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, building the 92-county LIT withholding matrix, tracking the 7% sales tax, and producing CPA-ready statements &mdash; with fluency in Indiana&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 92 counties." },
    { q: "What does it cost in Indiana?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA, EA, or county assessor, who file your Indiana and federal returns. Most Indiana businesses use both." },
    { q: "Do you handle the 92-county local income tax?", a: "Yes &mdash; the county LIT withholding matrix is the genuine Indiana complexity. Each of the 92 counties sets its own rate on top of the flat 2.95% state rate, applied by the employee&rsquo;s county of residence on January 1 (Form WH-4). We build it into QuickBooks Payroll; you or your CPA file. See <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county income tax help</a>." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/indiana/quickbooks-cleanup/", cta: "Indiana QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a Desktop-to-Online migration done without breaking your history &mdash; chart of accounts, county LIT withholding items, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/indiana/quickbooks-migration/", cta: "Indiana QuickBooks migration &rarr;" },
    { num: "04", title: "County income tax (LIT) withholding", body: "Indiana&rsquo;s 92 counties each levy their own local income tax on top of the flat 2.95% state rate, set by the employee&rsquo;s county of residence on January 1 and established on Form WH-4. We build the county LIT withholding matrix into QuickBooks Payroll so the right county rate applies and the books reconcile. You or your CPA file.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including per-county LIT withholding and the multi-state setup many Indiana logistics and manufacturing employers need for cross-border staff &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/accounting/payroll-management/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the business personal-property asset detail kept assessor-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // IN FACTS — three Indiana tax realities built into the books. (H2: Three Indiana facts… + 3 H3s)
  facts: [
    { fig: "2.95%", title: "Flat state income tax &mdash; plus county LIT", body: "Indiana taxes income at a flat 2.95% for 2026, but all 92 counties levy their own local income tax (LIT) on top &mdash; each county sets its own rate, applied by the taxpayer&rsquo;s county of residence on January 1 (Form WH-4, with a 30-day nonresident safe harbor). We build the county withholding matrix into the books so the right rate is applied." },
    { fig: "7%", title: "Single statewide sales tax", body: "Indiana charges a flat 7% sales tax with no county or city add-ons anywhere &mdash; a clean single rate that simplifies QuickBooks sales-tax setup, but it still has to be configured, collected, and remitted on taxable sales. We set the sales-tax item up so the return reconciles to the books." },
    { fig: "$2M", title: "Business personal-property exemption", body: "For 2026 the business tangible personal-property exemption rose to $2,000,000 (from $80,000). Under the threshold you owe no tax &mdash; but you must still declare it on Form 102 or 103. We track the asset detail and keep the books assessor-ready; we do not file the county return." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "County LIT withholding matrix &amp; 7% sales-tax tracking set up in QuickBooks",
    "Payroll coordination (incl. per-county LIT withholding) &amp; year-end CPA handoff",
    "CPA-ready financial statements every month, business personal-property asset detail kept assessor-ready",
  ],
  scopeDont: [
    "Files your Indiana &amp; federal income-tax returns",
    "Files the county income-tax (LIT), sales-tax &amp; business personal-property returns; represents you before tax authorities",
    "Provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Indiana situation &mdash; volume, accounts, county LIT withholding, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, county LIT withholding, sales-tax items, and broken reconciliations to a <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, county LIT withholding current, sales tax tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you a new hire&rsquo;s county of residence just changed your LIT withholding, that your multi-state nexus is shifting what you owe other states, or that your cash will tighten before a payroll-tax deposit. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Indiana books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Indiana, or will any bookkeeper do?", a: "For an Indiana business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Indiana&rsquo;s specific rules &mdash; the flat 2.95% state income tax with a county local income tax (LIT) levied by all 92 counties on top, the flat 7% statewide sales tax with no local add-ons, and the $2,000,000 business personal-property exemption you still have to declare. TechBrot pairs ProAdvisor-level QuickBooks work with that Indiana context, delivered as a fixed-fee engagement." },
    { q: "What does an Indiana QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the county LIT withholding matrix and 7% sales tax tracked so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Indiana?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot an Indiana CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA, EA, or county assessor &mdash; who files your Indiana and federal returns, the county income-tax and sales-tax returns, and the business personal-property return, and represents you before the tax authorities. Most Indiana businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How does the 92-county local income tax (LIT) affect my Indiana payroll?", a: "Every Indiana county levies its own local income tax on top of the flat 2.95% state rate, and the rate that applies is set by each employee&rsquo;s county of residence on January 1 &mdash; established on Form WH-4, with a 30-day safe harbor for short-term nonresident work. We build that county withholding matrix into QuickBooks Payroll so the correct county rate is withheld and the books reconcile; you or your CPA file the return. We never quote a specific county rate &mdash; those come from the Indiana DOR county-rate notice." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Indiana engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the county LIT withholding setup and sales-tax items &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Indiana discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 92 Indiana counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax, county LIT, sales-tax &amp; personal-property filing coordinated with your CPA/EA and county assessor" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Indiana businesses across all 92 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and county LIT withholding and 7% sales-tax tracking, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Indiana's flat 2.95% income tax, the 92-county local income tax, and the 7% statewide sales tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-qbaccountant-summary","#in-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Indiana businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination, and county LIT withholding and 7% sales-tax tracking, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns, the county income-tax, sales-tax, or business personal-property return — coordinates with the client's CPA, EA, and county assessor.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","name":"Indiana small and midsize businesses, manufacturers, and logistics and distribution operators"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Indiana QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"County Income Tax (LIT) Withholding Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
