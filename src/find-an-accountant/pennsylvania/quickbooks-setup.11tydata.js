/* /find-an-accountant/pennsylvania/quickbooks-setup/ — PA SERVICE child (QB spoke), t-money.
 * Mirrors the proven IN/NY/DE exemplars (quickbooks-setup.*) with Pennsylvania content per PA-FACTS.md.
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders — single source of truth.
 *
 * PA LOCALIZATION: Indiana flat-7%-sales-tax + county-LIT → Pennsylvania's split SALES tax (6% state /
 * 7% Allegheny-Pittsburgh / 8% Philadelphia), sourced by where each sale lands; Act 32 local Earned
 * Income Tax (EIT) PAYROLL withholding by PSD code under the "higher-of" rule, the Local Services Tax
 * (LST) at the worksite, and Philadelphia's separate Wage/NPT/BIRT for Philly businesses. CNIT 7.49%
 * (2026) context only. provider = #organization; areaServed = State Pennsylvania; reviewedBy
 * #david-westgate on the WebPage. NO street address, NO LocalBusiness (PA is areaServed-only; the DE
 * HQ is the only real-address state). HONESTY (R5): firm-level review byline only (no founder name);
 * independent firm — not affiliated with Intuit Inc.; does NOT file Pennsylvania/federal/local-EIT/LST/
 * Philadelphia/sales-tax returns; not a registered agent; never quotes a specific municipal EIT rate;
 * Philadelphia city rates framed "current as of the review date"; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 summary right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>QuickBooks setup</strong> is what keeps a Pennsylvania business&rsquo;s books accurate from the start. We select the right edition (<a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop), build an industry-specific <a href=\"/find-an-accountant/pennsylvania/bookkeeping-services/\">chart of accounts</a>, configure <a href=\"/accounting/sales-tax-compliance/\">Pennsylvania sales-tax tracking</a> from day one &mdash; <strong>6% statewide, 7% in Allegheny County (Pittsburgh), and 8% in Philadelphia</strong>, sourced by where each sale lands &mdash; set up <a href=\"/quickbooks/payroll/\">Act 32 local Earned Income Tax (EIT) withholding</a> in payroll by PSD code under the &ldquo;higher-of&rdquo; rule, add the Local Services Tax at the worksite and Philadelphia&rsquo;s Wage/NPT/BIRT tracking where it applies, connect your bank and credit-card feeds, enter opening balances, set up products/services and users/permissions, and establish the reconciliation and reporting routines. Fixed-fee from <strong>$750</strong> against a written scope.",
    "Done right at the start, you avoid the <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">cleanup</a> most businesses need a year in. <strong>TechBrot</strong> is not a CPA firm &mdash; we set up and run the books, configure the Pennsylvania specifics, and coordinate with your CPA, who files your Pennsylvania, local, and federal returns. Independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.; does not file Pennsylvania taxes.",
  ],

  // FIVE QUESTIONS — entity-dense AI-summary block. (H2: QuickBooks Setup in Pennsylvania, in five questions.)
  aiSummary: [
    { q: "What is a QuickBooks setup?", a: "Configuring your accounting file correctly from the start &mdash; the right edition, an industry-specific chart of accounts, connected bank and card feeds, opening balances, products/services, users and permissions, and reporting routines. For a Pennsylvania business, the parts that matter most are <strong>sales-tax tracking across the 6% / 7% / 8% split</strong> and <strong>Act 32 local EIT payroll withholding by PSD code</strong> configured from day one." },
    { q: "QuickBooks Online or Desktop?", a: "For most Pennsylvania small businesses, <strong>QuickBooks Online</strong> is the fit: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy Pennsylvania manufacturing, logistics/distribution, and agriculture operations. We recommend honestly, not by default." },
    { q: "What does it cost?", a: "From <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, how many PSD codes you withhold for, Philadelphia city-tax exposure, and migration needs. Quoted firmly against a written scope before any work starts. No hourly billing." },
    { q: "Do you set up Pennsylvania sales tax and Act 32 EIT?", a: "Yes &mdash; sales tax configured for Pennsylvania&rsquo;s <strong>6% state / 7% Allegheny / 8% Philadelphia</strong> split, with taxable-vs-exempt items mapped and the rate sourced by where each sale lands, and <strong>Act 32 local Earned Income Tax (EIT)</strong> withholding set up in payroll by each employee&rsquo;s <strong>PSD code</strong> under the &ldquo;higher-of&rdquo; rule, alongside the Local Services Tax. Each municipality sets its own EIT rate, so the right rate is pulled from the current PA DCED lookup rather than guessed." },
    { q: "What happens after setup?", a: "Most Pennsylvania businesses roll into <a href=\"/find-an-accountant/pennsylvania/bookkeeping-services/\">monthly bookkeeping</a> so the file stays as clean as the day it was built &mdash; the surest way to avoid a future cleanup. You can also run the configured file yourself." },
  ],

  // HOW WE HANDLE — the five setup steps. (H2: How we handle quickbooks setup… + 5 H3s)
  handle: [
    { num: "01", title: "Right QuickBooks edition selected", body: "We assess Online vs Desktop against how you actually operate &mdash; transaction volume, inventory, industry add-ons, how many people touch the file, multi-site or multi-location structure, and whether you&rsquo;re migrating from another system &mdash; then create the file on the edition that fits, not the one we default to." },
    { num: "02", title: "Industry-specific chart of accounts", body: "A chart of accounts built for your Pennsylvania industry rather than the generic QuickBooks template &mdash; income and COGS accounts that match how you earn, expense accounts your CPA can map to the return, and a structure that keeps job costing, inventory, or per-location reporting clean for manufacturing, logistics, construction, and ag operators. Products/services and customer/vendor lists are set up alongside." },
    { num: "03", title: "Pennsylvania sales-tax tracking (6 / 7 / 8%)", body: "Sales tax configured for Pennsylvania&rsquo;s <strong>6% state rate, plus the 1% Allegheny County add-on (7%, Pittsburgh) and the 2% Philadelphia add-on (8%)</strong> &mdash; sourced by where each sale lands, with taxable goods and exempt items (and resale/exemption certificates) mapped so the return to the <a href=\"https://www.pa.gov/agencies/revenue/\" rel=\"noopener nofollow\">Pennsylvania Department of Revenue</a> reconciles to the books. Use-tax handling on out-of-state purchases is set up where it applies." },
    { num: "04", title: "Bank, card &amp; Act 32 EIT payroll", body: "All bank and credit-card accounts linked and importing cleanly, opening balances entered and reconciled to a known statement date, and bank rules set so categorization starts right. Payroll items are scoped here when you need them &mdash; including <strong>Act 32 local EIT withholding by PSD code</strong> under the &ldquo;higher-of&rdquo; rule, the <strong>Local Services Tax</strong> at the worksite, and <strong>Philadelphia&rsquo;s Wage Tax</strong> for Philly employers." },
    { num: "05", title: "Reconciliation &amp; reporting routines", body: "The monthly reconciliation and reporting cadence established, with users and permissions assigned so the right people see the right data, so the file stays accurate after handoff &mdash; and you roll straight into <a href=\"/find-an-accountant/pennsylvania/bookkeeping-services/\">monthly bookkeeping</a> if you want it kept that way." },
  ],

  // SCOPE SPLIT — honest books/CPA boundary. (H2: What we do — and what your CPA does. + H3 TechBrot + H3 Your CPA)
  scope: [
    { title: "TechBrot", items: [
      "Right QuickBooks edition selected and the file created",
      "Industry-specific chart of accounts, products/services, customers/vendors",
      "Pennsylvania 6% / 7% / 8% sales-tax tracking, taxable/exempt items sourced by location",
      "Act 32 local EIT payroll withholding by PSD code under the &ldquo;higher-of&rdquo; rule, plus the LST",
      "Bank &amp; card feeds connected, opening balances reconciled",
      "Philadelphia Wage/NPT/BIRT detail tracked where it applies; reconciliation &amp; reporting routines established",
    ] },
    { title: "Your CPA", items: [
      "Files Pennsylvania State &amp; federal income-tax returns",
      "Files the local EIT, Local Services Tax, sales-tax, and Philadelphia Wage/NPT/BIRT returns",
      "Tax planning &amp; advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Setup software can generate a chart of accounts; it can&rsquo;t tell you which PSD code and EIT rate apply to a new hire who lives one municipality over, whether the &ldquo;higher-of&rdquo; rule changes what you withhold, how to source sales tax so the return reconciles across the 6% / 7% / 8% split, or whether a Philadelphia client&rsquo;s activity now triggers BIRT. That judgment &mdash; building the file for how your Pennsylvania business really runs &mdash; is what a Certified ProAdvisor setup adds on top of the automation.",
  ],

  // FAQ — 7 Q/A (PA-FACTS cap 5–7), answer-first, Pennsylvania-specific. visible faq__list = FAQPage (same array).
  // 1 call-intent FAQ with the phone woven into an answer (cost question).
  faq: [
    { q: "Why does QuickBooks setup matter for a Pennsylvania business?", a: "A clean QuickBooks setup is the difference between books that stay accurate and books that need a costly cleanup in a year. For a Pennsylvania business specifically, setup means configuring sales tax across the 6% / 7% / 8% split sourced by location, setting up Act 32 local Earned Income Tax (EIT) withholding in payroll by each employee&rsquo;s PSD code under the &ldquo;higher-of&rdquo; rule, adding the Local Services Tax and any Philadelphia city taxes, building a chart of accounts that fits your industry, and structuring the file so your CPA can file cleanly. Get it right at the start and everything downstream is faster." },
    { q: "What&rsquo;s included in a QuickBooks setup?", a: "Selecting the right QuickBooks edition (Online vs Desktop) for your business, building an industry-specific chart of accounts, configuring Pennsylvania sales-tax tracking across the 6% / 7% / 8% split, setting up Act 32 EIT payroll withholding by PSD code plus the Local Services Tax, connecting bank and credit-card feeds, setting up your products/services and customers/vendors, and establishing the reconciliation and reporting routines. If you&rsquo;re moving from another system, data migration is scoped alongside." },
    { q: "How much does QuickBooks setup cost in Pennsylvania?", a: "Setup starts at <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, how many PSD codes you withhold for, Philadelphia city-tax exposure, and whether you&rsquo;re migrating from another system. Simple single-municipality setups land near the low end; multi-municipality or Philadelphia-inclusive operations sit higher. We quote a firm number against a written scope before starting &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "For most Pennsylvania small businesses, QuickBooks Online: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy manufacturing, logistics, or agriculture operations. As Certified ProAdvisors we&rsquo;ll recommend the right fit for your business honestly, rather than defaulting to one." },
    { q: "Can you set up Pennsylvania sales tax in QuickBooks?", a: "Yes. Pennsylvania is <strong>6% statewide, with a 1% Allegheny County add-on (7% in Pittsburgh) and a 2% Philadelphia add-on (8%)</strong>, so the right rate depends on where each sale is sourced. We configure QuickBooks to charge the correct rate by location, map taxable goods and exempt items with resale certificates, and handle use tax on out-of-state purchases where it applies &mdash; so your return reconciles to the books from the first period. A common error we fix is charging 6% on a Pittsburgh or Philadelphia sale that should be 7% or 8%." },
    { q: "Can you set up payroll with Act 32 local EIT withholding?", a: "Yes &mdash; it&rsquo;s the Pennsylvania payroll detail most setups get wrong. On top of the flat 3.07% state income tax, municipalities and school districts levy a local Earned Income Tax (EIT), each at its own rate. Withholding is driven by the <strong>PSD code</strong> for each employee&rsquo;s residence and work location, under the <strong>&ldquo;higher-of&rdquo; rule</strong>: for a PA-resident employee you withhold the higher of their resident total rate or the work-location non-resident rate. We configure QuickBooks Payroll by PSD code, add the Local Services Tax at the worksite, and set up Philadelphia&rsquo;s Wage Tax where it applies. We never guess a municipal rate &mdash; we pull the current figure from the PA DCED lookup." },
    { q: "What happens after setup?", a: "Most Pennsylvania businesses roll straight into monthly bookkeeping so the file stays as clean as the day it was built. You can also take the configured file and run it yourself &mdash; but ongoing monthly service is what prevents the drift that leads to a future cleanup." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks setup, chart of accounts, Pennsylvania 6% / 7% / 8% sales-tax items, Act 32 EIT payroll withholding by PSD code, feeds &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/pennsylvania/quickbooks-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Pennsylvania QuickBooks setup","description":"QuickBooks setup for Pennsylvania businesses — right edition, clean chart of accounts, 6% / 7% / 8% sales-tax tracking sourced by location, and Act 32 local EIT payroll withholding by PSD code configured from day one. Fixed-fee, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/pennsylvania-quickbooks-setup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pa-svc-qbsetup-summary","#pa-svc-qbsetup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Pennsylvania","item":"https://techbrot.com/find-an-accountant/pennsylvania/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup"}]},
        {"@type":"Service","@id":url+"#service","name":"Pennsylvania QuickBooks Setup Service","serviceType":"QuickBooks setup service","description":"QuickBooks setup for Pennsylvania businesses — right edition, industry chart of accounts, 6% / 7% / 8% sales-tax tracking sourced by location, Act 32 local Earned Income Tax payroll withholding by PSD code, the Local Services Tax, Philadelphia city-tax tracking, bank and card feeds, opening balances, and reconciliation routines, delivered fixed-fee in your own QuickBooks file by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Pennsylvania or local returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Pennsylvania","sameAs":"https://en.wikipedia.org/wiki/Pennsylvania"},
          "audience":{"@type":"BusinessAudience","audienceType":"Pennsylvania small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"750","description":"From $750; one-time fixed fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
