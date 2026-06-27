/* /find-an-accountant/indiana/quickbooks-setup/ — IN SERVICE child (QB spoke), t-money.
 * Mirrors the proven NY/DE exemplars (quickbooks-setup.*) with Indiana content per IN-FACTS.md.
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders — single source of truth.
 *
 * IN LOCALIZATION: DE gross-receipts tracking → Indiana flat 7% statewide SALES tax (no local
 * add-ons) configured for taxable/exempt; county Local Income Tax (LIT) PAYROLL withholding by
 * employee county of residence on Jan 1 (Form WH-4); the $2M business personal-property exemption
 * (Form 102/103) posture. No franchise tax (Indiana has none); no city wage tax. provider =
 * #organization; areaServed = State Indiana; reviewedBy #david-westgate on the WebPage. NO street
 * address, NO LocalBusiness. HONESTY (R5): firm-level review byline only (no founder name);
 * independent firm — not affiliated with Intuit Inc.; does NOT file Indiana returns; never quotes a
 * specific county LIT %; coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 summary right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>QuickBooks setup</strong> is what keeps an Indiana business&rsquo;s books accurate from the start. We select the right edition (<a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop), build an industry-specific <a href=\"/find-an-accountant/indiana/bookkeeping-services/\">chart of accounts</a>, configure <a href=\"/find-an-accountant/indiana/sales-tax-help/\">Indiana sales-tax tracking</a> from day one &mdash; one clean <strong>flat 7% statewide rate</strong> with no county or city add-ons to wrangle &mdash; set up <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county local-income-tax (LIT) withholding</a> in payroll by each employee&rsquo;s county of residence, connect your bank and credit-card feeds, enter opening balances, set up products/services and users/permissions, and establish the reconciliation and reporting routines. Fixed-fee from <strong>$750</strong> against a written scope.",
    "Done right at the start, you avoid the <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> most businesses need a year in. <strong>TechBrot</strong> is not a CPA firm &mdash; we set up and run the books, configure the Indiana specifics, and coordinate with your CPA, who files your Indiana and federal returns. Independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.; does not file Indiana taxes.",
  ],

  // FIVE QUESTIONS — entity-dense AI-summary block. (H2: QuickBooks Setup in Indiana, in five questions.)
  aiSummary: [
    { q: "What is a QuickBooks setup?", a: "Configuring your accounting file correctly from the start &mdash; the right edition, an industry-specific chart of accounts, connected bank and card feeds, opening balances, products/services, users and permissions, and reporting routines. For an Indiana business, the parts that matter most are <strong>sales-tax tracking at the flat 7% rate</strong> and <strong>county-LIT payroll withholding</strong> configured by employee county of residence from day one." },
    { q: "QuickBooks Online or Desktop?", a: "For most Indiana small businesses, <strong>QuickBooks Online</strong> is the fit: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy Indiana manufacturing, logistics/distribution, and agriculture operations. We recommend honestly, not by default." },
    { q: "What does it cost?", a: "From <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, payroll counties, and migration needs. Quoted firmly against a written scope before any work starts. No hourly billing." },
    { q: "Do you set up Indiana sales tax and county LIT?", a: "Yes &mdash; sales tax configured at Indiana&rsquo;s <strong>flat 7% statewide rate</strong> (no local add-ons), with taxable-vs-exempt items mapped, and <strong>county local income tax (LIT)</strong> withholding set up in payroll by each employee&rsquo;s county of residence on January 1 (Form WH-4). Every county sets its own LIT rate, so the right rate is pulled from the current Indiana DOR list rather than guessed." },
    { q: "What happens after setup?", a: "Most Indiana businesses roll into <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a> so the file stays as clean as the day it was built &mdash; the surest way to avoid a future cleanup. You can also run the configured file yourself." },
  ],

  // HOW WE HANDLE — the five setup steps. (H2: How we handle quickbooks setup… + 5 H3s)
  handle: [
    { num: "01", title: "Right QuickBooks edition selected", body: "We assess Online vs Desktop against how you actually operate &mdash; transaction volume, inventory, industry add-ons, how many people touch the file, multi-plant or multi-location structure, and whether you&rsquo;re migrating from another system &mdash; then create the file on the edition that fits, not the one we default to." },
    { num: "02", title: "Industry-specific chart of accounts", body: "A chart of accounts built for your Indiana industry rather than the generic QuickBooks template &mdash; income and COGS accounts that match how you earn, expense accounts your CPA can map to the return, and a structure that keeps job costing, inventory, or per-location reporting clean for manufacturing, construction, and logistics operators. Products/services and customer/vendor lists are set up alongside." },
    { num: "03", title: "Indiana sales-tax tracking", body: "Sales tax configured at Indiana&rsquo;s <strong>flat 7% statewide rate</strong> &mdash; no county or city add-ons, which keeps setup simpler than layered-rate states &mdash; with taxable goods and exempt items (and resale/exemption certificates) mapped so the return to the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a> reconciles to the books. Use-tax handling on out-of-state purchases is set up where it applies." },
    { num: "04", title: "Bank, card &amp; county-LIT payroll", body: "All bank and credit-card accounts linked and importing cleanly, opening balances entered and reconciled to a known statement date, and bank rules set so categorization starts right. Payroll items are scoped here when you need them &mdash; including <strong>county local-income-tax (LIT) withholding</strong> by each employee&rsquo;s county of residence (Form WH-4), and the multi-county setup Indiana&rsquo;s mobile and remote workforces require." },
    { num: "05", title: "Reconciliation &amp; reporting routines", body: "The monthly reconciliation and reporting cadence established, with users and permissions assigned so the right people see the right data, so the file stays accurate after handoff &mdash; and you roll straight into <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a> if you want it kept that way." },
  ],

  // SCOPE SPLIT — honest books/CPA boundary. (H2: What we do — and what your CPA does. + H3 TechBrot + H3 Your CPA)
  scope: [
    { title: "TechBrot", items: [
      "Right QuickBooks edition selected and the file created",
      "Industry-specific chart of accounts, products/services, customers/vendors",
      "Indiana 7% sales-tax tracking, taxable/exempt items configured",
      "County-LIT payroll withholding set up by employee county of residence",
      "Bank &amp; card feeds connected, opening balances reconciled",
      "Business personal-property detail tracked; reconciliation &amp; reporting routines established",
    ] },
    { title: "Your CPA", items: [
      "Files Indiana State &amp; federal income-tax returns",
      "Files the sales-tax and county-income-tax returns",
      "Tax planning &amp; advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Setup software can generate a chart of accounts; it can&rsquo;t tell you which Indiana county-LIT rate applies to a new hire who lives one county over, how to build sales-tax tracking so the return reconciles, or how to structure the file so a multi-plant manufacturer&rsquo;s job costing and business personal-property detail are clean a year from now. That judgment &mdash; building the file for how your Indiana business really runs &mdash; is what a Certified ProAdvisor setup adds on top of the automation.",
  ],

  // FAQ — 7 Q/A (IN-FACTS cap 5–7), answer-first, Indiana-specific. visible faq__list = FAQPage (same array).
  // 1 call-intent FAQ with the phone woven into an answer (cost question).
  faq: [
    { q: "Why does QuickBooks setup matter for an Indiana business?", a: "A clean QuickBooks setup is the difference between books that stay accurate and books that need a costly cleanup in a year. For an Indiana business specifically, setup means configuring the flat 7% sales tax with taxable and exempt items mapped, setting up county local-income-tax (LIT) withholding in payroll by each employee&rsquo;s county of residence, building a chart of accounts that fits your industry, and structuring the file so your CPA can file cleanly. Get it right at the start and everything downstream is faster." },
    { q: "What&rsquo;s included in a QuickBooks setup?", a: "Selecting the right QuickBooks edition (Online vs Desktop) for your business, building an industry-specific chart of accounts, configuring Indiana sales-tax tracking, setting up county-LIT payroll withholding, connecting bank and credit-card feeds, setting up your products/services and customers/vendors, and establishing the reconciliation and reporting routines. If you&rsquo;re moving from another system, data migration is scoped alongside." },
    { q: "How much does QuickBooks setup cost in Indiana?", a: "Setup starts at <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, payroll counties, and whether you&rsquo;re migrating from another system. Simple single-entity setups land near the low end; multi-location or multi-county operations sit higher. We quote a firm number against a written scope before starting &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "For most Indiana small businesses, QuickBooks Online: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy manufacturing, logistics, or agriculture operations. As Certified ProAdvisors we&rsquo;ll recommend the right fit for your business honestly, rather than defaulting to one." },
    { q: "Can you set up Indiana sales tax in QuickBooks?", a: "Yes. Indiana is a clean <strong>flat 7% statewide</strong> sales tax with no county or city add-ons, which makes setup simpler than layered-rate states &mdash; but the rate still has to be applied to taxable goods and services, with exempt items and resale certificates mapped, and use tax handled on out-of-state purchases where it applies. We configure all of it so your return reconciles to the books from the first period." },
    { q: "Can you set up payroll with county local income tax (LIT) withholding?", a: "Yes &mdash; it&rsquo;s the Indiana payroll detail most setups get wrong. All 92 Indiana counties levy a local income tax, each at its own rate, and withholding is driven by an employee&rsquo;s county of residence (or principal work county) on January 1, established on Form WH-4. We configure QuickBooks Payroll to withhold the correct county rate per employee and handle multi-county and remote-workforce situations. We never guess a county rate &mdash; we pull the current figure from the Indiana DOR list." },
    { q: "What happens after setup?", a: "Most Indiana businesses roll straight into monthly bookkeeping so the file stays as clean as the day it was built. You can also take the configured file and run it yourself &mdash; but ongoing monthly service is what prevents the drift that leads to a future cleanup." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks setup, chart of accounts, Indiana 7% sales-tax items, county-LIT payroll withholding, feeds &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/quickbooks-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana QuickBooks setup","description":"QuickBooks setup for Indiana businesses — right edition, clean chart of accounts, flat 7% sales-tax tracking, and county-LIT payroll withholding configured from day one. Fixed-fee, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-quickbooks-setup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-qbsetup-summary","#in-svc-qbsetup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana QuickBooks Setup Service","serviceType":"QuickBooks setup service","description":"QuickBooks setup for Indiana businesses — right edition, industry chart of accounts, flat 7% sales-tax tracking, county local-income-tax payroll withholding, bank and card feeds, opening balances, and reconciliation routines, delivered fixed-fee in your own QuickBooks file by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"750","description":"From $750; one-time fixed fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
