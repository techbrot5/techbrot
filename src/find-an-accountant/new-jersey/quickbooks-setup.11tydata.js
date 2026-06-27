/* /find-an-accountant/new-jersey/quickbooks-setup/ — NJ SERVICE child (QB spoke), t-money.
 * Mirrors the proven PA/IN/NY/DE exemplars (quickbooks-setup.*) with New Jersey content per NJ-FACTS.md.
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders — single source of truth.
 *
 * NJ LOCALIZATION: Pennsylvania's Act 32 EIT + 6/7/8% split → New Jersey's multi-fund PAYROLL stack
 * (UI/TDI/FLI/WF, employer + employee, across two 2026 wage bases — $44,800 and $171,100; employee
 * TDI 0.19% / FLI 0.23%), the PA–NJ income-tax reciprocity (Form NJ-165) for cross-border staff, the
 * Newark and Jersey City EMPLOYER payroll taxes, and the 6.625% statewide SALES tax with its UEZ/Salem
 * half-rate (3.3125%). Graduated GIT (1.4%–10.75%), CBT 9%, and BAIT as advisory context only.
 * provider = #organization; areaServed = State New Jersey; reviewedBy #david-westgate on the WebPage.
 * NO street address, NO LocalBusiness (NJ is areaServed-only; all states are areaServed-only (no street address)).
 * HONESTY (R5): firm-level review byline only (no founder name); independent firm — not affiliated with
 * Intuit Inc.; does NOT file New Jersey/federal/CBT/GIT/payroll(UI/TDI/FLI)/sales-tax/Newark/Jersey City
 * returns; not a registered agent; GIT middle brackets, experience-rated employer UI/TDI rates, and the
 * Newark/Jersey City payroll-tax rates framed qualitatively, never quoted as fixed figures; coordinates
 * with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 summary right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>QuickBooks setup</strong> is what keeps a New Jersey business&rsquo;s books accurate from the start. We select the right edition (<a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop), build an industry-specific <a href=\"/find-an-accountant/new-jersey/bookkeeping-services/\">chart of accounts</a>, configure <a href=\"/accounting/sales-tax-compliance/\">New Jersey sales-tax tracking</a> from day one &mdash; <strong>6.625% statewide, or the 3.3125% half-rate on qualifying Urban Enterprise Zone and Salem County sales</strong>, sourced by where each sale lands &mdash; set up the <a href=\"/quickbooks/payroll/\">NJ payroll-contribution stack</a> in payroll (UI, TDI, FLI, and WF, with both employer and employee contributions across the two 2026 wage bases), apply <strong>PA&ndash;NJ reciprocity</strong> per employee for cross-border staff with a Form NJ-165 on file, add the <strong>Newark and Jersey City employer payroll taxes</strong> where they apply, connect your bank and credit-card feeds, enter opening balances, set up products/services and users/permissions, and establish the reconciliation and reporting routines. Fixed-fee from <strong>$750</strong> against a written scope.",
    "Done right at the start, you avoid the <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">cleanup</a> most businesses need a year in. <strong>TechBrot</strong> is not a CPA firm &mdash; we set up and run the books, configure the New Jersey specifics, and coordinate with your CPA, who files your New Jersey, payroll, and federal returns. Independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.; does not file New Jersey taxes.",
  ],

  // FIVE QUESTIONS — entity-dense AI-summary block. (H2: QuickBooks Setup in New Jersey, in five questions.)
  aiSummary: [
    { q: "What is a QuickBooks setup?", a: "Configuring your accounting file correctly from the start &mdash; the right edition, an industry-specific chart of accounts, connected bank and card feeds, opening balances, products/services, users and permissions, and reporting routines. For a New Jersey business, the parts that matter most are the <strong>UI/TDI/FLI/WF payroll-contribution stack across two wage bases</strong>, <strong>PA&ndash;NJ reciprocity (Form NJ-165)</strong> for cross-border staff, and <strong>6.625% sales-tax tracking with the UEZ/Salem half-rate</strong> configured from day one." },
    { q: "QuickBooks Online or Desktop?", a: "For most New Jersey small businesses, <strong>QuickBooks Online</strong> is the fit: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy New Jersey pharma/manufacturing, logistics/distribution, and warehousing operations. We recommend honestly, not by default." },
    { q: "What does it cost?", a: "From <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, employee count and how many payroll funds you run, cross-border (PA&ndash;NJ) and Newark/Jersey City exposure, and migration needs. Quoted firmly against a written scope before any work starts. No hourly billing." },
    { q: "Do you set up the NJ payroll stack and sales tax?", a: "Yes &mdash; payroll configured for New Jersey&rsquo;s <strong>UI, TDI, FLI, and WF</strong> funds with both employer and employee contributions across the <strong>two 2026 wage bases ($44,800 and $171,100)</strong>, PA&ndash;NJ reciprocity set per employee where an NJ-165 is on file, and the Newark/Jersey City employer payroll taxes tracked where they apply. Sales tax is configured for <strong>6.625%</strong> with the <strong>3.3125% half-rate</strong> in a UEZ or Salem County, sourced by where each sale lands. The wage bases and rates reset each January, so we confirm current figures with the NJ Department of Labor rather than guess." },
    { q: "What happens after setup?", a: "Most New Jersey businesses roll into <a href=\"/find-an-accountant/new-jersey/bookkeeping-services/\">monthly bookkeeping</a> so the file stays as clean as the day it was built &mdash; the surest way to avoid a future cleanup, and the way the January payroll-rate changes get applied each year. You can also run the configured file yourself." },
  ],

  // HOW WE HANDLE — the five setup steps. (H2: How we handle quickbooks setup… + 5 H3s)
  handle: [
    { num: "01", title: "Right QuickBooks edition selected", body: "We assess Online vs Desktop against how you actually operate &mdash; transaction volume, inventory, industry add-ons, how many people touch the file, multi-site or multi-location structure, and whether you&rsquo;re migrating from another system &mdash; then create the file on the edition that fits, not the one we default to." },
    { num: "02", title: "Industry-specific chart of accounts", body: "A chart of accounts built for your New Jersey industry rather than the generic QuickBooks template &mdash; income and COGS accounts that match how you earn, expense accounts your CPA can map to the return, and a structure that keeps job costing, inventory, or per-location reporting clean for pharma/manufacturing, logistics and warehousing, construction, and professional-services operators. Products/services and customer/vendor lists are set up alongside." },
    { num: "03", title: "NJ payroll stack &amp; PA&ndash;NJ reciprocity", body: "The New Jersey payroll-contribution stack configured in QuickBooks Payroll &mdash; <strong>UI, TDI, FLI, and WF</strong>, with both employer and employee contributions across the <strong>two 2026 wage bases ($44,800 and $171,100; employee TDI 0.19%, FLI 0.23%)</strong>, plus graduated GIT withholding. For cross-border staff we set <strong>PA&ndash;NJ reciprocity</strong> per employee &mdash; a Pennsylvania resident with a <strong>Form NJ-165</strong> on file has NJ withholding turned off and PA withholding on &mdash; and we track the <strong>Newark and Jersey City employer payroll taxes</strong> where they apply." },
    { num: "04", title: "Sales tax (6.625% / 3.3125%) &amp; feeds", body: "Sales tax configured for New Jersey&rsquo;s <strong>6.625% statewide rate</strong>, with the <strong>3.3125% half-rate</strong> applied to qualifying <strong>Urban Enterprise Zone</strong> and <strong>Salem County</strong> sales (the two don&rsquo;t stack), sourced by where each sale lands and with taxable goods and exempt items (and resale/exemption certificates) mapped so the return to the <a href=\"https://www.nj.gov/treasury/taxation/\" rel=\"noopener nofollow\">New Jersey Division of Taxation</a> reconciles to the books. All bank and credit-card accounts are linked and importing cleanly, opening balances entered and reconciled to a known statement date, and bank rules set so categorization starts right." },
    { num: "05", title: "Reconciliation &amp; reporting routines", body: "The monthly reconciliation and reporting cadence established, with users and permissions assigned so the right people see the right data, so the file stays accurate after handoff &mdash; and you roll straight into <a href=\"/find-an-accountant/new-jersey/bookkeeping-services/\">monthly bookkeeping</a> if you want it kept that way, including the January payroll-rate refresh." },
  ],

  // SCOPE SPLIT — honest books/CPA boundary. (H2: What we do — and what your CPA does. + H3 TechBrot + H3 Your CPA)
  scope: [
    { title: "TechBrot", items: [
      "Right QuickBooks edition selected and the file created",
      "Industry-specific chart of accounts, products/services, customers/vendors",
      "NJ payroll stack &mdash; UI/TDI/FLI/WF, employer + employee, across both 2026 wage bases",
      "PA&ndash;NJ reciprocity (Form NJ-165) per employee; Newark/Jersey City employer payroll taxes tracked",
      "Sales tax at 6.625% (or the 3.3125% UEZ/Salem half-rate), taxable/exempt items sourced by location",
      "Bank &amp; card feeds connected, opening balances reconciled; reconciliation &amp; reporting routines established",
    ] },
    { title: "Your CPA", items: [
      "Files New Jersey State &amp; federal income-tax returns, the Corporation Business Tax and gross income tax",
      "Files the UI/TDI/FLI payroll filings, the sales-tax return, and the Newark/Jersey City payroll-tax returns",
      "Tax planning &amp; advice, including the BAIT election for growing pass-throughs",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Setup software can generate a chart of accounts; it can&rsquo;t tell you which wage base a new hire&rsquo;s TDI and FLI contributions cap out at, whether a Pennsylvania-resident driver needs an NJ-165 so you stop withholding New Jersey tax, when a Jersey City non-resident employee triggers the city payroll tax, how to source sales tax so a UEZ business charges 3.3125% instead of the full 6.625%, or whether a growing pass-through should be kept BAIT-ready for its CPA. That judgment &mdash; building the file for how your New Jersey business really runs &mdash; is what a Certified ProAdvisor setup adds on top of the automation.",
  ],

  // FAQ — 7 Q/A (NJ-FACTS cap 5–7), answer-first, New Jersey-specific. visible faq__list = FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in (cost + start questions).
  faq: [
    { q: "Why does QuickBooks setup matter for a New Jersey business?", a: "A clean QuickBooks setup is the difference between books that stay accurate and books that need a costly cleanup in a year. For a New Jersey business specifically, setup means configuring the UI/TDI/FLI/WF payroll-contribution stack across both 2026 wage bases, setting up PA&ndash;NJ reciprocity per employee so cross-border staff with a Form NJ-165 are withheld for the right state, tracking the Newark and Jersey City employer payroll taxes where they apply, configuring sales tax at 6.625% (or the 3.3125% UEZ/Salem half-rate) sourced by location, building a chart of accounts that fits your industry, and structuring the file so your CPA can file cleanly. Get it right at the start and everything downstream is faster." },
    { q: "What&rsquo;s included in a QuickBooks setup?", a: "Selecting the right QuickBooks edition (Online vs Desktop) for your business, building an industry-specific chart of accounts, configuring the New Jersey payroll stack (UI, TDI, FLI, and WF across both wage bases) with PA&ndash;NJ reciprocity and the Newark/Jersey City payroll taxes where they apply, setting up sales-tax tracking at 6.625% with the UEZ/Salem half-rate, connecting bank and credit-card feeds, setting up your products/services and customers/vendors, and establishing the reconciliation and reporting routines. If you&rsquo;re moving from another system, data migration is scoped alongside." },
    { q: "How much does QuickBooks setup cost in New Jersey?", a: "Setup starts at <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, employee count and how many payroll funds you run, cross-border (PA&ndash;NJ) and Newark/Jersey City exposure, and whether you&rsquo;re migrating from another system. Simple single-state setups land near the low end; multi-fund payroll with reciprocity or city payroll taxes sits higher. We quote a firm number against a written scope before starting &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "For most New Jersey small businesses, QuickBooks Online: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy pharma/manufacturing, logistics, or warehousing operations. As Certified ProAdvisors we&rsquo;ll recommend the right fit for your business honestly, rather than defaulting to one." },
    { q: "Can you set up the NJ payroll stack and PA&ndash;NJ reciprocity?", a: "Yes &mdash; it&rsquo;s the New Jersey payroll detail most setups get wrong. Beyond graduated income-tax withholding, New Jersey funds <strong>Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF)</strong> through payroll, with <strong>both employer and employee contributions across two wage bases</strong> &mdash; $44,800 and, for employee TDI and FLI, $171,100 in 2026 (employee rates 0.19% TDI, 0.23% FLI; employer UI and TDI are experience-rated). We configure each fund in QuickBooks Payroll, set <strong>PA&ndash;NJ reciprocity</strong> per employee so a Pennsylvania resident with a <strong>Form NJ-165</strong> on file has NJ withholding off and PA on, and track the <strong>Newark and Jersey City employer payroll taxes</strong> where they apply. The bases and rates reset each January, so we confirm current figures with the NJ Department of Labor." },
    { q: "Can you set up New Jersey sales tax in QuickBooks?", a: "Yes. New Jersey is <strong>6.625% statewide with no general local add-on</strong>, but qualifying sales by certified businesses in an <strong>Urban Enterprise Zone (UEZ)</strong> and certain sales by businesses in <strong>Salem County</strong> are taxed at <strong>half the rate &mdash; 3.3125%</strong> (the two benefits don&rsquo;t stack). We configure QuickBooks to charge the correct rate by location, map taxable goods and exempt items with resale certificates, and handle use tax on out-of-state purchases where it applies &mdash; so your return reconciles to the books from the first period. A common error we fix is a UEZ business charging the full 6.625% by mistake. If you sell across the NY or PA line, we also scope multi-state nexus." },
    { q: "What happens after setup, and how do I start?", a: "Most New Jersey businesses roll straight into monthly bookkeeping so the file stays as clean as the day it was built &mdash; that&rsquo;s also how the January payroll-rate changes get applied each year. You can also take the configured file and run it yourself. To start, book a free discovery call and we&rsquo;ll send a written fixed-fee scope within 3 business days, or call a Certified ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a> &mdash; not a call center &mdash; to scope it now." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks setup, chart of accounts, NJ UI/TDI/FLI/WF payroll across both wage bases, PA&ndash;NJ reciprocity, 6.625% / 3.3125% sales-tax items, feeds &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-jersey/quickbooks-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New Jersey QuickBooks setup","description":"QuickBooks setup for New Jersey businesses — right edition, clean chart of accounts, the UI/TDI/FLI/WF payroll stack across two wage bases, PA–NJ reciprocity (Form NJ-165), and 6.625% / 3.3125% sales-tax tracking configured from day one. Fixed-fee, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-jersey-quickbooks-setup.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nj-svc-qbsetup-summary","#nj-svc-qbsetup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New Jersey","item":"https://techbrot.com/find-an-accountant/new-jersey/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup"}]},
        {"@type":"Service","@id":url+"#service","name":"New Jersey QuickBooks Setup Service","serviceType":"QuickBooks setup service","description":"QuickBooks setup for New Jersey businesses — right edition, industry chart of accounts, the UI/TDI/FLI/WF payroll-contribution stack across two wage bases, PA–NJ reciprocity (Form NJ-165) for cross-border staff, the Newark and Jersey City employer payroll taxes, 6.625% sales-tax tracking with the UEZ/Salem 3.3125% half-rate, bank and card feeds, opening balances, and reconciliation routines, delivered fixed-fee in your own QuickBooks file by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file New Jersey or local returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New Jersey","sameAs":"https://en.wikipedia.org/wiki/New_Jersey"},
          "audience":{"@type":"BusinessAudience","audienceType":"New Jersey small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"750","description":"From $750; one-time fixed fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
