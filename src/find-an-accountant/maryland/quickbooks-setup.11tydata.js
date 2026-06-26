/* /find-an-accountant/maryland/quickbooks-setup/ — MD SERVICE child (QB spoke), t-money.
 * Mirrors the proven PA/NJ/IN/NY/DE exemplars (quickbooks-setup.*) with Maryland content per MD-FACTS.md.
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders — single source of truth.
 *
 * MD LOCALIZATION: New Jersey's UI/TDI/FLI/WF payroll stack + 6.625% sales tax → Maryland's county
 * "piggyback" LOCAL income tax, withheld per employee by MW507 county of residence across all 23 counties
 * + Baltimore City; the DC/PA/VA/WV income-tax RECIPROCITY (Form MW507/MW507M) for cross-border staff; the
 * 6% standard SALES tax with the NEW 3% data/IT-services + business-use-SaaS rate (eff 7/1/2025) and MPU
 * apportionment. Graduated state income tax (2%–6.50%, 2025 brackets), corporate 8.25%, and the PTE
 * election as advisory context only. provider = #organization; areaServed = State Maryland; reviewedBy
 * #david-westgate on the WebPage. NO street address, NO LocalBusiness (MD is areaServed-only; the DE HQ is
 * the only real-address state). HONESTY (R5): firm-level review byline only (no founder name); independent
 * firm — not affiliated with Intuit Inc.; does NOT file Maryland/federal/corporate/income/local-income/
 * payroll-withholding/sales-tax(incl. the 3% IT/data tax)/PTE returns; not a registered agent; state
 * middle brackets and specific county local rates framed qualitatively, never quoted as fixed figures; the
 * capital-gains surtax is 2% (the proposed 3% is not law); the 3% IT/data tax is genuinely new — readers
 * are pointed to Technical Bulletin 56 and their CPA; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 summary right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>QuickBooks setup</strong> is what keeps a Maryland business&rsquo;s books accurate from the start. We select the right edition (<a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop), build an industry-specific <a href=\"/find-an-accountant/maryland/bookkeeping-services/\">chart of accounts</a>, configure <a href=\"/accounting/sales-tax-compliance/\">Maryland sales-tax tracking</a> from day one &mdash; <strong>6% statewide, plus the new 3% rate on data and IT services and business-use SaaS</strong>, with Multiple-Points-of-Use apportionment where software is used across states &mdash; set up the county <strong>&ldquo;piggyback&rdquo; local income tax</strong> in <a href=\"/quickbooks/payroll/\">payroll</a> per employee by <strong>MW507 county of residence</strong> across all 23 counties and Baltimore City, apply <strong>DC/PA/VA/WV reciprocity</strong> per employee so cross-border staff are withheld for their home state, connect your bank and credit-card feeds, enter opening balances, set up products/services and users/permissions, and establish the reconciliation and reporting routines. Fixed-fee from <strong>$750</strong> against a written scope.",
    "Done right at the start, you avoid the <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">cleanup</a> most businesses need a year in. <strong>TechBrot</strong> is not a CPA firm &mdash; we set up and run the books, configure the Maryland specifics, and coordinate with your CPA, who files your Maryland, local, payroll, and federal returns. Independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.; does not file Maryland taxes.",
  ],

  // FIVE QUESTIONS — entity-dense AI-summary block. (H2: QuickBooks Setup in Maryland, in five questions.)
  aiSummary: [
    { q: "What is a QuickBooks setup?", a: "Configuring your accounting file correctly from the start &mdash; the right edition, an industry-specific chart of accounts, connected bank and card feeds, opening balances, products/services, users and permissions, and reporting routines. For a Maryland business, the parts that matter most are the <strong>county &ldquo;piggyback&rdquo; local income tax set per employee by MW507 county of residence</strong>, <strong>DC/PA/VA/WV reciprocity</strong> for cross-border staff, and <strong>6% sales-tax tracking with the new 3% data/IT-services rate</strong> configured from day one." },
    { q: "QuickBooks Online or Desktop?", a: "For most Maryland small businesses, <strong>QuickBooks Online</strong> is the fit: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy Maryland biotech/pharma, manufacturing, and logistics operations around the Port of Baltimore. We recommend honestly, not by default." },
    { q: "What does it cost?", a: "From <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, employee count and how many counties and reciprocity states you withhold for, sales-tax footprint (including the new 3% IT/data rate), and migration needs. Quoted firmly against a written scope before any work starts. No hourly billing." },
    { q: "Do you set up the county local tax and Maryland sales tax?", a: "Yes &mdash; payroll configured for the county <strong>&ldquo;piggyback&rdquo; local income tax</strong> per employee by <strong>MW507 county of residence</strong> across all 23 counties and Baltimore City, with <strong>DC/PA/VA/WV reciprocity</strong> set so cross-border staff are withheld for their home state. Sales tax is configured for the <strong>6% standard rate</strong> with the <strong>new 3% rate on data and IT services and business-use SaaS</strong>, plus Multiple-Points-of-Use apportionment. County local rates and the state brackets can change, so we confirm current figures against the Comptroller of Maryland rather than guess." },
    { q: "What happens after setup?", a: "Most Maryland businesses roll into <a href=\"/find-an-accountant/maryland/bookkeeping-services/\">monthly bookkeeping</a> so the file stays as clean as the day it was built &mdash; the surest way to avoid a future cleanup, and the way county-rate and MW507 changes get applied as they happen. You can also run the configured file yourself." },
  ],

  // HOW WE HANDLE — the five setup steps. (H2: How we handle quickbooks setup… + 5 H3s)
  handle: [
    { num: "01", title: "Right QuickBooks edition selected", body: "We assess Online vs Desktop against how you actually operate &mdash; transaction volume, inventory, industry add-ons, how many people touch the file, multi-site or multi-location structure, and whether you&rsquo;re migrating from another system &mdash; then create the file on the edition that fits, not the one we default to." },
    { num: "02", title: "Industry-specific chart of accounts", body: "A chart of accounts built for your Maryland industry rather than the generic QuickBooks template &mdash; income and COGS accounts that match how you earn, expense accounts your CPA can map to the return, and a structure that keeps job costing, grant tracking, or per-location reporting clean for government-contracting, biotech and life-sciences, IT/SaaS, and professional-services operators. Products/services and customer/vendor lists are set up alongside." },
    { num: "03", title: "County piggyback local tax &amp; DC/PA/VA/WV reciprocity", body: "The Maryland payroll detail most setups get wrong, configured in QuickBooks Payroll &mdash; the county <strong>&ldquo;piggyback&rdquo; local income tax</strong> set per employee by <strong>MW507 county of residence</strong> across all 23 counties and Baltimore City (some counties now use graduated local brackets), on top of the graduated 2%&ndash;6.50% state withholding. For cross-border staff we apply <strong>DC/PA/VA/WV reciprocity</strong> &mdash; a DC, Pennsylvania, Virginia, or West Virginia resident with a <strong>Form MW507/MW507M</strong> on file has Maryland withholding turned off and is withheld for their home state instead." },
    { num: "04", title: "Sales tax (6% / new 3% IT-data) &amp; feeds", body: "Sales tax configured for Maryland&rsquo;s <strong>6% standard rate</strong>, with the <strong>new 3% rate</strong> applied to <strong>data and information-technology services and software publishing, including business-use SaaS</strong>, effective July 1, 2025 (the 3% applies only where no higher rate already does; consumer SaaS stays at 6%), plus <strong>Multiple-Points-of-Use</strong> apportionment where software is used across states. Taxable goods and exempt items (and resale/exemption certificates) are mapped so the return to the <a href=\"https://www.marylandtaxes.gov/\" rel=\"noopener nofollow\">Comptroller of Maryland</a> reconciles to the books &mdash; and we point you and your CPA to Technical Bulletin 56 for taxability. All bank and credit-card accounts are linked and importing cleanly, opening balances entered and reconciled to a known statement date, and bank rules set so categorization starts right." },
    { num: "05", title: "Reconciliation &amp; reporting routines", body: "The monthly reconciliation and reporting cadence established, with users and permissions assigned so the right people see the right data, so the file stays accurate after handoff &mdash; and you roll straight into <a href=\"/find-an-accountant/maryland/bookkeeping-services/\">monthly bookkeeping</a> if you want it kept that way, including applying county-rate resets and MW507 changes as they happen." },
  ],

  // SCOPE SPLIT — honest books/CPA boundary. (H2: What we do — and what your CPA does. + H3 TechBrot + H3 Your CPA)
  scope: [
    { title: "TechBrot", items: [
      "Right QuickBooks edition selected and the file created",
      "Industry-specific chart of accounts, products/services, customers/vendors",
      "County piggyback local income tax &mdash; per employee by MW507 county of residence, all 23 counties + Baltimore City",
      "DC/PA/VA/WV reciprocity (Form MW507/MW507M) set per employee for cross-border staff",
      "Sales tax at 6% standard plus the new 3% data/IT-services rate, with MPU apportionment, sourced and mapped",
      "Bank &amp; card feeds connected, opening balances reconciled; reconciliation &amp; reporting routines established",
    ] },
    { title: "Your CPA", items: [
      "Files Maryland State &amp; federal income-tax returns, the 8.25% corporate income tax, and the local income tax on the state return",
      "Files the payroll-withholding filings and the sales-tax return (including the new 3% IT/data tax)",
      "Tax planning &amp; advice, including the PTE election for growing pass-throughs",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Setup software can generate a chart of accounts; it can&rsquo;t tell you which county&rsquo;s piggyback rate a new hire&rsquo;s MW507 just set, whether a Pennsylvania-, Virginia-, DC-, or West Virginia-resident employee needs reciprocity so you stop withholding Maryland tax, whether your SaaS product is now caught by the new 3% data/IT-services tax instead of staying exempt, how to apportion that tax with a Multiple-Points-of-Use certificate, or whether a growing pass-through should be kept PTE-ready for its CPA. That judgment &mdash; building the file for how your Maryland business really runs &mdash; is what a Certified ProAdvisor setup adds on top of the automation.",
  ],

  // FAQ — 7 Q/A (MD-FACTS cap 5–7), answer-first, Maryland-specific. visible faq__list = FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in (cost + start questions).
  faq: [
    { q: "Why does QuickBooks setup matter for a Maryland business?", a: "A clean QuickBooks setup is the difference between books that stay accurate and books that need a costly cleanup in a year. For a Maryland business specifically, setup means configuring the county &ldquo;piggyback&rdquo; local income tax per employee by MW507 county of residence across all 23 counties and Baltimore City, applying DC/PA/VA/WV reciprocity so cross-border staff are withheld for the right state, configuring sales tax at 6% with the new 3% rate on data and IT services and business-use SaaS, building a chart of accounts that fits your industry, and structuring the file so your CPA can file cleanly. Get it right at the start and everything downstream is faster." },
    { q: "What&rsquo;s included in a QuickBooks setup?", a: "Selecting the right QuickBooks edition (Online vs Desktop) for your business, building an industry-specific chart of accounts, configuring the county piggyback local income tax per employee by MW507 county of residence with DC/PA/VA/WV reciprocity, setting up sales-tax tracking at 6% with the new 3% IT/data-services rate and Multiple-Points-of-Use apportionment, connecting bank and credit-card feeds, setting up your products/services and customers/vendors, and establishing the reconciliation and reporting routines. If you&rsquo;re moving from another system, data migration is scoped alongside." },
    { q: "How much does QuickBooks setup cost in Maryland?", a: "Setup starts at <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, employee count and how many counties and reciprocity states you withhold for, your sales-tax footprint (including the new 3% IT/data rate), and whether you&rsquo;re migrating from another system. Simple single-county setups land near the low end; multi-county payroll with reciprocity or a SaaS sales-tax footprint sits higher. We quote a firm number against a written scope before starting &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "For most Maryland small businesses, QuickBooks Online: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy biotech/pharma, manufacturing, or Port-of-Baltimore logistics operations. As Certified ProAdvisors we&rsquo;ll recommend the right fit for your business honestly, rather than defaulting to one." },
    { q: "Can you set up the county piggyback local tax and DC/PA/VA/WV reciprocity?", a: "Yes &mdash; it&rsquo;s the Maryland payroll detail most setups get wrong. Beyond the graduated 2%&ndash;6.50% state withholding, <strong>all 23 counties and Baltimore City levy their own &ldquo;piggyback&rdquo; local income tax</strong> &mdash; currently roughly 2.25% to 3.20%, and some counties now use graduated local brackets &mdash; set by each employee&rsquo;s <strong>county of residence on Form MW507</strong> and collected on the state return. We configure the correct local rate per employee in QuickBooks Payroll, and we apply <strong>DC/PA/VA/WV reciprocity</strong> so a resident of those jurisdictions (with a Form MW507/MW507M on file) has Maryland withholding off and is withheld for their home state. County rates reset and MW507s change, so we confirm current figures against the Comptroller of Maryland." },
    { q: "Can you set up Maryland sales tax, including the new 3% IT tax, in QuickBooks?", a: "Yes. Maryland is <strong>6% statewide with no general local sales tax</strong>, but effective <strong>July 1, 2025</strong> a <strong>new 3% rate</strong> applies to <strong>data and information-technology services and software publishing, including business-use SaaS</strong> (the 3% applies only where no higher rate already does; SaaS sold to individual consumers stays at 6%). We configure QuickBooks to charge the correct rate, map taxable goods and exempt items with resale certificates, and set up <strong>Multiple-Points-of-Use</strong> apportionment for software used across states &mdash; so your return reconciles to the books from the first period. The 3% tax is genuinely new and still being interpreted, so we point you and your CPA to the Comptroller&rsquo;s Technical Bulletin 56 to confirm taxability." },
    { q: "What happens after setup, and how do I start?", a: "Most Maryland businesses roll straight into monthly bookkeeping so the file stays as clean as the day it was built &mdash; that&rsquo;s also how county-rate resets and MW507 changes get applied as they happen. You can also take the configured file and run it yourself. To start, book a free discovery call and we&rsquo;ll send a written fixed-fee scope within 3 business days, or call a Certified ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a> &mdash; not a call center &mdash; to scope it now." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks setup, chart of accounts, county piggyback local tax by MW507 county of residence, DC/PA/VA/WV reciprocity, 6% / 3% IT-data sales-tax items, feeds &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/maryland/quickbooks-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Maryland QuickBooks setup","description":"QuickBooks setup for Maryland businesses — right edition, clean chart of accounts, the county piggyback local income tax by MW507 county of residence, DC/PA/VA/WV reciprocity, and 6% / new 3% IT-data sales-tax tracking configured from day one. Fixed-fee, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/maryland-quickbooks-setup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#md-svc-qbsetup-summary","#md-svc-qbsetup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Maryland","item":"https://techbrot.com/find-an-accountant/maryland/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup"}]},
        {"@type":"Service","@id":url+"#service","name":"Maryland QuickBooks Setup Service","serviceType":"QuickBooks setup service","description":"QuickBooks setup for Maryland businesses — right edition, industry chart of accounts, the county piggyback local income tax configured per employee by MW507 county of residence across all 23 counties and Baltimore City, DC/PA/VA/WV reciprocity for cross-border staff, 6% sales-tax tracking with the new 3% data/IT-services rate and Multiple-Points-of-Use apportionment, bank and card feeds, opening balances, and reconciliation routines, delivered fixed-fee in your own QuickBooks file by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Maryland, local, or federal returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Maryland","sameAs":"https://en.wikipedia.org/wiki/Maryland"},
          "audience":{"@type":"BusinessAudience","audienceType":"Maryland small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"750","description":"From $750; one-time fixed fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
