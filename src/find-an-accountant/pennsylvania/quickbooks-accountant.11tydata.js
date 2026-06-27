/* /find-an-accountant/pennsylvania/quickbooks-accountant/ — PA SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Indiana child
 * (indiana/quickbooks-accountant.*) for structure and the New York child for the areaServed-only /
 * no-address framing, with Pennsylvania content per _build/strategy/PA-FACTS.md. JSON front-matter
 * lives in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * PA LOCALIZATION: IN's flat 2.95% state income tax + 92-county LIT / 7% flat sales tax / $2M
 * personal-property exemption → Pennsylvania's flat 3.07% state income tax with the Act 32 local
 * Earned Income Tax (EIT) levied by municipalities and school districts on top (the genuine
 * QuickBooks-setup complexity — withheld by PSD code under the "higher-of" rule), the Local Services
 * Tax (LST) at the worksite, the 6% / 7% Allegheny / 8% Philadelphia split-rate sales tax (setup
 * hinges on sourcing), and Philadelphia's separate Wage/NPT/BIRT city taxes. PRICING anchored to
 * PA-FACTS canonical "from" figures (monthly $400, cleanup $1,200, setup $750). provider =
 * #organization; areaServed = State Pennsylvania (NO PostalAddress / geo / LocalBusiness —
 * Pennsylvania is an areaServed-only anchor; the firm sits minutes across the line); reviewedBy
 * #david-westgate. HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder
 * name; David Westgate only as reviewedBy @id). Independent firm — does NOT file Pennsylvania
 * returns, the local EIT return, the LST, Philadelphia's Wage/NPT/BIRT, or the sales-tax return; not
 * a registered agent; coordinates with the client's CPA/EA and the TCD collector / City of
 * Philadelphia. Municipal EIT rates never quoted as a specific %; Philadelphia rates treated as
 * current-as-of-review (they change each July 1).
 *
 * ROUTING (core state, only 6 PA pages exist): links go ONLY to the 4 PA siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, sales
 * tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/, QBO
 * /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/pennsylvania/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.)
  summary: "A <strong>Pennsylvania QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and <a href=\"/quickbooks/payroll/\">Act 32 local Earned Income Tax (EIT) withholding</a> by PSD code, and producing CPA-ready monthly statements &mdash; while staying aware of Pennsylvania realities like the flat <strong>3.07% state income tax</strong> with a <strong>local Earned Income Tax</strong> levied by municipalities and school districts on top, the <strong>6% / 7% / 8% <a href=\"/accounting/sales-tax-compliance/\">sales tax</a></strong> that hinges on where each sale is sourced, and Philadelphia&rsquo;s entirely separate city taxes. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 67 Pennsylvania counties, Philadelphia to Pittsburgh.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Pennsylvania QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Pennsylvania QuickBooks accountant?", a: "<strong>A Pennsylvania QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Pennsylvania business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring Act 32 local EIT withholding by PSD code, tracking the 6% / 7% / 8% sales tax, and producing CPA-ready statements &mdash; with fluency in Pennsylvania&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 67 counties." },
    { q: "What does it cost in Pennsylvania?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA, EA, or the local tax collector, who file your Pennsylvania and federal returns. Most Pennsylvania businesses use both." },
    { q: "Do you handle the Act 32 local Earned Income Tax (EIT)?", a: "Yes &mdash; the Act 32 local EIT is the genuine Pennsylvania complexity. Municipalities and school districts each levy their own EIT on top of the flat 3.07% state rate, withheld by PSD code under the &ldquo;higher-of&rdquo; rule. We build it into <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a>; you or your CPA file the combined quarterly return." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/pennsylvania/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/pennsylvania/bookkeeping-services/", cta: "Pennsylvania bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, wrong-PSD-code EIT withholding, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/pennsylvania/quickbooks-cleanup/", cta: "Pennsylvania QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, Act 32 EIT withholding items by PSD code, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/pennsylvania/quickbooks-setup/", cta: "Pennsylvania QuickBooks setup &rarr;" },
    { num: "04", title: "Act 32 local EIT &amp; LST withholding", body: "Pennsylvania municipalities and school districts each levy their own local Earned Income Tax on top of the flat 3.07% state rate, withheld by PSD code under the &ldquo;higher-of&rdquo; rule, plus the Local Services Tax at the worksite. We build the EIT and LST withholding into QuickBooks Payroll so the right rate applies and the combined quarterly return reconciles. You or your CPA file.", href: "/quickbooks/payroll/", cta: "Payroll &amp; local-tax setup &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including per-PSD-code EIT withholding and the multi-state setup many Pennsylvania logistics and manufacturing employers need for cross-border staff &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the Act 32 EIT, Philadelphia city-tax, and sales-tax detail kept filing-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // PA FACTS — three Pennsylvania tax realities built into the books. (H2: Three Pennsylvania facts… + 3 H3s)
  facts: [
    { fig: "3.07%", title: "Flat state income tax &mdash; plus Act 32 local EIT", body: "Pennsylvania taxes personal income at a flat 3.07% with no brackets, but municipalities and school districts levy their own local Earned Income Tax (EIT) on top &mdash; each sets its own rate, collected through Act 32 Tax Collection Districts. Withholding is driven by PSD codes for each employee&rsquo;s residence and work location under the &ldquo;higher-of&rdquo; rule. We build the EIT withholding into QuickBooks Payroll so the right rate is applied. We never quote a specific municipal rate &mdash; confirm it on the PA DCED lookup." },
    { fig: "6 / 7 / 8%", title: "Split-rate sales tax by location", body: "Pennsylvania&rsquo;s sales tax is 6% statewide, 7% in Allegheny County (Pittsburgh), and 8% in Philadelphia &mdash; so which rate applies depends on where the sale is sourced. QuickBooks has to be set up to charge the right rate by location, especially for businesses selling into the two metros or shipping across the state. We configure the sales-tax items so the return reconciles to the books." },
    { fig: "Philly", title: "Philadelphia runs its own tax world", body: "A Philadelphia business sits outside Act 32 entirely &mdash; it may owe the Wage Tax on compensation, the Net Profits Tax on unincorporated profits, and the Business Income &amp; Receipts Tax (BIRT). These city rates change each July 1, and the BIRT&rsquo;s $100,000 gross-receipts exclusion is gone as of tax year 2025. We keep the books Wage/NPT/BIRT-ready; your CPA files." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "Act 32 local EIT withholding by PSD code, the LST &amp; 6% / 7% / 8% sales-tax tracking set up in QuickBooks",
    "Payroll coordination (incl. per-PSD-code EIT withholding) &amp; year-end CPA handoff",
    "CPA-ready financial statements every month, Philadelphia Wage/NPT/BIRT detail kept filing-ready",
  ],
  scopeDont: [
    "Files your Pennsylvania &amp; federal income-tax returns",
    "Files the local EIT return, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT &amp; sales-tax returns; represents you before tax authorities",
    "Provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Pennsylvania situation &mdash; volume, accounts, which PSD codes you withhold for, whether Philadelphia city taxes apply, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, Act 32 EIT withholding by PSD code, sales-tax sourcing, and broken reconciliations to a <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, EIT and LST withholding current, sales tax sourced right, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you a new hire&rsquo;s PSD code just changed your EIT withholding, that your Philadelphia activity now triggers BIRT, or that shipping into Pittsburgh just changed the sales-tax rate you should charge. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Pennsylvania books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Pennsylvania, or will any bookkeeper do?", a: "For a Pennsylvania business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Pennsylvania&rsquo;s specific rules &mdash; the flat 3.07% state income tax with a local Earned Income Tax (EIT) levied by municipalities and school districts on top, the 6% / 7% / 8% split-rate sales tax, and Philadelphia&rsquo;s separate Wage, Net Profits, and BIRT taxes. TechBrot pairs ProAdvisor-level QuickBooks work with that Pennsylvania context, delivered as a fixed-fee engagement." },
    { q: "What does a Pennsylvania QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the Act 32 EIT withholding and 6% / 7% / 8% sales tax tracked so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Pennsylvania?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Pennsylvania CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA, EA, or the local tax collector &mdash; who files your Pennsylvania and federal returns, the local EIT return, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT returns, and the sales-tax return, and represents you before the tax authorities. Most Pennsylvania businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How does the Act 32 local Earned Income Tax (EIT) affect my Pennsylvania payroll?", a: "Pennsylvania municipalities and school districts each levy their own local Earned Income Tax on top of the flat 3.07% state rate, and the rate that applies is driven by PSD codes &mdash; the six-digit codes for each employee&rsquo;s residence and work location, certified on a Residency Certification Form. Under the &ldquo;higher-of&rdquo; rule, for a PA-resident employee you withhold the higher of their resident total EIT rate or the work-location non-resident rate, plus the Local Services Tax at the worksite. We build that into QuickBooks Payroll so the correct rate is withheld and the combined quarterly return reconciles; you or your CPA file. We never quote a specific municipal rate &mdash; those come from the PA DCED lookup." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Pennsylvania engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the Act 32 EIT withholding by PSD code and the 6% / 7% / 8% sales-tax sourcing &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Pennsylvania discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 67 Pennsylvania counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; local EIT, LST, Philadelphia city-tax &amp; sales-tax filing coordinated with your CPA/EA and the local tax collector" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/pennsylvania/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Pennsylvania QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Pennsylvania businesses across all 67 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and Act 32 local Earned Income Tax (EIT) withholding by PSD code and 6% / 7% / 8% sales-tax tracking, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Pennsylvania's flat 3.07% income tax, the Act 32 local EIT, the split-rate sales tax, and Philadelphia's separate Wage/NPT/BIRT taxes.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-pennsylvania-quickbooks-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pa-svc-qbaccountant-summary","#pa-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Pennsylvania","item":"https://techbrot.com/find-an-accountant/pennsylvania/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Pennsylvania QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Pennsylvania businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination, and Act 32 local Earned Income Tax (EIT) withholding by PSD code and 6% / 7% / 8% sales-tax tracking, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Pennsylvania returns, the local EIT return, the Local Services Tax, Philadelphia's city-tax returns, or the sales-tax return — coordinates with the client's CPA, EA, and the local tax collector.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Pennsylvania","sameAs":"https://en.wikipedia.org/wiki/Pennsylvania"},
          "audience":{"@type":"BusinessAudience","name":"Pennsylvania small and midsize businesses, manufacturers, and logistics and distribution operators"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Pennsylvania QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Act 32 Local Earned Income Tax (EIT) Withholding Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
