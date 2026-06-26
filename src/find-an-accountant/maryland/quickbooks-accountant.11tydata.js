/* /find-an-accountant/maryland/quickbooks-accountant/ — MD SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named New Jersey child
 * (new-jersey/quickbooks-accountant.*) for structure and routing, and the areaServed-only /
 * no-address framing, with Maryland content per _build/strategy/MD-FACTS.md. JSON front-matter
 * lives in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * MD LOCALIZATION: NJ's UI/TDI/FLI/WF payroll stack + PA–NJ reciprocity / 6.625% sales tax →
 * Maryland's county "piggyback" LOCAL income tax — all 23 counties + Baltimore City levy a local
 * income tax (~2.25%–3.20%, some now graduated), collected on the state return and WITHHELD BY THE
 * EMPLOYEE'S COUNTY OF RESIDENCE on Form MW507 (the genuine QuickBooks complexity); the DC/PA/VA/WV
 * reciprocity (MW507/MW507M; DC/PA/VA need <=183 days, WV regardless); the NEW 3% sales tax on
 * data/IT services + business-use SaaS effective July 1, 2025 (alongside the unchanged 6% standard;
 * consumer SaaS stays 6%; MPU certificates); the graduated 2%–6.50% state income tax (new 2025
 * brackets) + 2% capital-gains surtax (>$300k federal AGI); the 8.25% corporate rate; and the
 * elective PTE tax (SALT-cap workaround, advisory hook). PRICING anchored to MD-FACTS canonical
 * "from" figures (monthly $400, cleanup $1,200, setup $750). provider = #organization; areaServed =
 * State Maryland (NO PostalAddress / geo / LocalBusiness — Maryland is an areaServed-only state; DE
 * HQ anchors the Mid-Atlantic); reviewedBy #david-westgate. HONESTY (R5): no invented reviews/stats;
 * firm-level review byline (no founder name; David Westgate only as reviewedBy @id). Independent
 * firm — does NOT file Maryland returns, the corporate income tax, the state or local income tax,
 * the payroll-withholding filings, the PTE return, or the sales-tax return; not a registered agent;
 * coordinates with the client's CPA/EA and the Comptroller of Maryland. State middle brackets and
 * specific county local rates framed qualitatively; the capital-gains surtax is 2% (the proposed 3%
 * is NOT law); the 3% IT/data tax is new — readers pointed to TB-56 and their CPA.
 *
 * ROUTING (core state, only 6 MD pages exist): links go ONLY to the 4 MD siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/maryland/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Maryland QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/quickbooks/payroll/\">county &ldquo;piggyback&rdquo; local income tax withheld by county of residence (Form MW507)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Maryland realities like the <strong>graduated state income tax (2% up to a 6.50% top rate after the 2025 brackets)</strong>, the <strong>DC/PA/VA/WV reciprocity</strong>, the <strong>new 3% <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> on data and IT services</strong> (including business-use SaaS) alongside the 6% standard rate, and the <strong>PTE election</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 23 Maryland counties and Baltimore City, the Baltimore metro to the DC suburbs.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Maryland QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Maryland QuickBooks accountant?", a: "<strong>A Maryland QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Maryland business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the county &ldquo;piggyback&rdquo; local income tax by each employee&rsquo;s county of residence (Form MW507), handling DC/PA/VA/WV reciprocity, tracking the 6% sales tax and the new 3% rate on data and IT services, and producing CPA-ready statements &mdash; with fluency in Maryland&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 23 counties and Baltimore City." },
    { q: "What does it cost in Maryland?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Maryland and federal returns, the corporate income tax, the state and local income tax, and the payroll filings. Most Maryland businesses use both." },
    { q: "Do you handle the county piggyback local tax and DC/PA/VA/WV reciprocity?", a: "Yes &mdash; the county piggyback local income tax is the genuine Maryland complexity. <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> has to apply the correct local rate per employee by <strong>county of residence</strong> &mdash; all 23 counties and Baltimore City levy their own rate (roughly 2.25% to 3.20%, some now graduated), set on Form MW507 and collected on the state return. We also configure DC/PA/VA/WV reciprocity (MW507/MW507M) so cross-border staff are withheld for their home state. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/maryland/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/maryland/bookkeeping-services/", cta: "Maryland bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, wrong-county piggyback withholding, untracked 3% IT/data sales tax, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/maryland/quickbooks-cleanup/", cta: "Maryland QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the county piggyback local-tax payroll setup by county of residence, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/maryland/quickbooks-setup/", cta: "Maryland QuickBooks setup &rarr;" },
    { num: "04", title: "Piggyback local tax &amp; DC/PA/VA/WV reciprocity", body: "Maryland&rsquo;s county piggyback local income tax is where payroll goes wrong &mdash; all 23 counties and Baltimore City levy their own local rate (roughly 2.25% to 3.20%, some now graduated), set by each employee&rsquo;s <strong>county of residence</strong> on Form MW507 and collected on the state return. We set the correct county per employee in QuickBooks Payroll, apply the DC/PA/VA/WV reciprocity exemption (MW507/MW507M) so cross-border staff are withheld for their home state, and reconcile it so the filings tie out. You or your CPA file.", href: "/quickbooks/payroll/", cta: "Payroll &amp; MD-tax setup &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including the per-county piggyback local tax, the reciprocity setup for the DC-metro cross-border workforce, and the multi-state setup many Maryland federal-contracting and biotech employers need &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the local-tax, sales-tax, and pass-through detail kept filing-ready and the books PTE-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // MD FACTS — three Maryland tax realities built into the books. (H2: Three Maryland facts… + 3 H3s)
  facts: [
    { fig: "23 + 1", title: "The county piggyback local income tax", body: "On top of the graduated state income tax, all 23 Maryland counties and Baltimore City levy their own local income tax &mdash; currently in the range of about 2.25% to 3.20%, and some counties now use graduated local brackets. The rate that applies is set by each employee&rsquo;s <strong>county (or Baltimore City) of residence</strong>, established on Form MW507, and the local tax is collected on the state return. We set the correct county per employee in QuickBooks Payroll and update it when MW507s change or rates reset. Confirm current rates against the Comptroller&rsquo;s local-rate list." },
    { fig: "DC/PA/VA/WV", title: "Reciprocity changes who you withhold for", body: "Maryland has reciprocal agreements with DC, Pennsylvania, Virginia, and West Virginia. Residents of DC, Pennsylvania, and Virginia who did not keep a Maryland home for more than 183 days &mdash; and West Virginia residents regardless of time in Maryland &mdash; are exempt from Maryland withholding on Maryland wages; they file Form MW507/MW507M and are withheld for their home state instead. We set QuickBooks Payroll per employee so the DC-metro cross-border workforce is withheld for the correct state." },
    { fig: "3%", title: "A new 3% tax on data and IT services", body: "Effective July 1, 2025, Maryland applies a 3% sales and use tax to data and information-technology services and to software publishing &mdash; including business-use SaaS (the 3% applies where no higher rate already does). SaaS sold to individual consumers stays at the 6% standard rate. It is genuinely new, so we configure the QuickBooks sales-tax items for the 3% IT/data rate versus the 6% rate, set up Multiple-Points-of-Use apportionment for multi-state customers, and point you and your CPA to the Comptroller&rsquo;s Technical Bulletin 56 on taxability." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity &amp; the 3% / 6% sales-tax split set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept PTE-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Maryland &amp; federal income-tax returns, the corporate income tax &amp; the state or local income tax",
    "Files the payroll-withholding filings, the sales-tax return (incl. the new 3% IT/data tax) &amp; the PTE return; represents you before the Comptroller of Maryland",
    "Makes the PTE election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Maryland situation &mdash; volume, accounts, which counties you withhold for, whether DC/PA/VA/WV reciprocity applies to your staff, whether the new 3% IT/data tax hits your sales, whether the PTE election is in play, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the per-county piggyback local-tax withholding, the reciprocity setup, the 3% vs 6% sales-tax sourcing, and broken reconciliations to a <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the piggyback local tax current by county of residence, cross-border withholding correct under reciprocity, sales tax sourced right between the 3% and 6% rates, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you a new hire&rsquo;s MW507 just changed which county &mdash; or state &mdash; you withhold for, that your SaaS product is now caught by the new 3% IT/data-services tax, or that your growing pass-through should weigh the PTE election this year. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Maryland books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Maryland, or will any bookkeeper do?", a: "For a Maryland business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Maryland&rsquo;s specific rules &mdash; the county piggyback local income tax withheld by county of residence on Form MW507, the DC/PA/VA/WV reciprocity, the new 3% sales tax on data and IT services alongside the 6% rate, and the PTE election for growing pass-throughs. TechBrot pairs ProAdvisor-level QuickBooks work with that Maryland context, delivered as a fixed-fee engagement." },
    { q: "What does a Maryland QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the county piggyback local tax and the 3% / 6% sales tax tracked so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Maryland?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Maryland CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Maryland and federal returns, the corporate income tax, the state and local income tax, the payroll-withholding filings, the PTE return, and the sales-tax return, and represents you before the Comptroller of Maryland. Most Maryland businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How does the county piggyback local tax and DC/PA/VA/WV reciprocity affect my payroll?", a: "Beyond graduated state income-tax withholding, all 23 Maryland counties and Baltimore City levy their own local income tax &mdash; currently about 2.25% to 3.20%, with some counties now graduated &mdash; set by each employee&rsquo;s county of residence on Form MW507 and collected on the state return. On top of that, Maryland has reciprocity with DC, Pennsylvania, Virginia, and West Virginia, so a qualifying resident of those jurisdictions working in Maryland files MW507/MW507M and is withheld for their home state instead. We build the per-county local tax and the per-employee reciprocity into QuickBooks Payroll so the right amounts are withheld and the returns reconcile; you or your CPA file. The county rates reset annually, which we re-check then." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Maryland engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the per-county piggyback withholding and the 3% / 6% sales-tax sourcing &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Maryland discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 23 Maryland counties and Baltimore City remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; corporate income tax, state &amp; local income tax, payroll-withholding, PTE &amp; sales-tax filing coordinated with your CPA/EA and the Comptroller of Maryland" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/maryland/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Maryland QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Maryland businesses across all 23 counties and Baltimore City — bookkeeping, QuickBooks setup and cleanup, payroll, and the county piggyback local income tax (Form MW507) withheld by county of residence, DC/PA/VA/WV reciprocity, and 6% / new 3% data-and-IT-services sales-tax tracking, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Maryland's graduated 2%–6.50% income tax, the county piggyback local tax, the new 3% IT/data tax, and the PTE election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/maryland-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#md-svc-qbaccountant-summary","#md-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Maryland","item":"https://techbrot.com/find-an-accountant/maryland/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Maryland QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Maryland businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination across the county piggyback local income tax (Form MW507) by county of residence, DC/PA/VA/WV reciprocity, and 6% / new 3% data-and-IT-services sales-tax tracking, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Maryland returns, the corporate income tax, the state or local income tax, the payroll-withholding filings, the PTE return, or the sales-tax return — coordinates with the client's CPA, EA, and the Comptroller of Maryland.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Maryland","sameAs":"https://en.wikipedia.org/wiki/Maryland"},
          "audience":{"@type":"BusinessAudience","name":"Maryland small and midsize businesses, government contractors and professional-services firms, healthcare and life-sciences companies, and IT and SaaS firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Maryland QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"County Piggyback Local Income Tax (Form MW507) & DC/PA/VA/WV Reciprocity Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
