/* /find-an-accountant/delaware/quickbooks-setup/ — DE SERVICE child (QB spoke), t-money.
 * Mirrors the proven NY exemplar (new-york/quickbooks-setup.*) with Delaware content per
 * DE-FACTS.md. JSON front-matter lives in the .njk; this file supplies the content arrays +
 * an eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage mainEntity
 * is generated from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * DE LOCALIZATION: NO sales tax — a gross receipts tax on the SELLER tracked by business activity
 * (0.0945%–1.9914%, monthly/quarterly exclusion); annual franchise tax reserve; Wilmington 1.25%
 * wage tax; holding-company / out-of-state-owner structures. provider = #organization; areaServed
 * = State Delaware; reviewedBy #david-westgate on the WebPage. HONESTY (R5): no invented reviews,
 * stats, clients, or outcomes; firm-level review byline only (no founder/personal name; David
 * Westgate survives only as reviewedBy @id). Independent firm — not affiliated with Intuit Inc.;
 * does NOT file Delaware returns or the franchise tax/annual report; not a registered agent;
 * coordinates with the client's CPA, EA, and registered agent, who file. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 summary right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>QuickBooks setup</strong> is what keeps a Delaware business&rsquo;s books accurate from the start. We select the right edition (<a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop), build an industry-specific <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">chart of accounts</a>, configure <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts-tax tracking</a> from day one &mdash; by business-activity category so the right rate (<strong>0.0945%&ndash;1.9914%</strong>) and the monthly or quarterly exclusion apply &mdash; connect your bank and credit-card feeds, enter opening balances, set up products/services and users/permissions, and establish the reconciliation and reporting routines. Fixed-fee from <strong>$750</strong> against a written scope.",
    "Done right at the start, you avoid the <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> most businesses need a year in. <strong>TechBrot</strong> is not a CPA firm &mdash; we set up and run the books, track and reserve for the annual <strong>franchise tax</strong>, and coordinate with your CPA and registered agent, who file your Delaware and federal returns and the franchise tax. Independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.; does not file Delaware taxes.",
  ],

  // FIVE QUESTIONS — entity-dense AI-summary block. (H2: QuickBooks Setup in Delaware, in five questions.)
  aiSummary: [
    { q: "What is a QuickBooks setup?", a: "Configuring your accounting file correctly from the start &mdash; the right edition, an industry-specific chart of accounts, connected bank and card feeds, opening balances, products/services, users and permissions, and reporting routines. For a Delaware business, <strong>gross-receipts-tax tracking by activity from day one</strong> is the part that matters most: there&rsquo;s no sales tax to collect, but the receipts tax on the seller has to be tracked correctly." },
    { q: "QuickBooks Online or Desktop?", a: "For most Delaware small businesses &mdash; and the many holding companies and out-of-state-owned entities run remotely &mdash; <strong>QuickBooks Online</strong> is the fit: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy Sussex agriculture, manufacturing, or larger construction operations. We recommend honestly, not by default." },
    { q: "What does it cost?", a: "From <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, and migration needs &mdash; multi-entity and holding-company structures sit higher. Quoted firmly against a written scope before any work starts. No hourly billing." },
    { q: "Do you set up the Delaware gross receipts tax?", a: "Yes &mdash; gross-receipts tracking configured by <strong>business-activity category</strong> from day one (0.0945%&ndash;1.9914% by activity, after the monthly or quarterly exclusion), so your Delaware return reconciles to the books from the first period. There&rsquo;s no sales tax to collect in Delaware, but the receipts tax on the seller still has to be right." },
    { q: "What happens after setup?", a: "Most Delaware businesses roll into <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> so the file stays as clean as the day it was built &mdash; the surest way to avoid a future cleanup. You can also run the configured file yourself." },
  ],

  // HOW WE HANDLE — the five setup steps (grid-3 buyer-cards). (H2: How we handle quickbooks setup… + 5 H3s)
  handle: [
    { num: "01", title: "Right QuickBooks edition selected", body: "We assess Online vs Desktop against how you actually operate &mdash; transaction volume, inventory, industry add-ons, how many people touch the file, whether it&rsquo;s a holding company run from out of state, and whether you&rsquo;re migrating from another system &mdash; then create the file on the edition that fits, not the one we default to." },
    { num: "02", title: "Industry-specific chart of accounts", body: "A chart of accounts built for your Delaware industry rather than the generic QuickBooks template &mdash; income and COGS accounts that match how you earn, expense accounts your CPA can map to the return, and a structure that keeps <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts</a> allocation and any per-entity reporting clean later. Products/services and customer/vendor lists are set up alongside." },
    { num: "03", title: "Gross-receipts-tax tracking", body: "Income tracked by <strong>business-activity category</strong> from day one &mdash; so the correct gross-receipts rate (<strong>0.0945%&ndash;1.9914%</strong>) and the monthly or quarterly exclusion apply, and the return to the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Delaware Division of Revenue</a> reconciles to the books from the first period. Delaware has no sales tax to collect, so this is configured the right way, not as a sales-tax state." },
    { num: "04", title: "Bank &amp; card feeds connected", body: "All bank and credit-card accounts linked and importing cleanly, opening balances entered and reconciled to a known statement date, and bank rules set so categorization starts right instead of needing a cleanup later. Payroll items &mdash; including <strong>Wilmington&rsquo;s 1.25% wage tax</strong> for Wilmington workers &mdash; and a QuickBooks Payroll connection are scoped here when you need them." },
    { num: "05", title: "Reconciliation &amp; reporting routines", body: "The monthly reconciliation and reporting cadence established, with users and permissions assigned so the right people see the right data, so the file stays accurate after handoff &mdash; and you roll straight into <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> if you want it kept that way." },
  ],

  // SCOPE SPLIT — honest books/CPA boundary. (H2: What we do — and what your CPA does. + H3 TechBrot + H3 Your CPA)
  scope: [
    { title: "TechBrot", items: [
      "Right QuickBooks edition selected and the file created",
      "Industry-specific chart of accounts, products/services, customers/vendors",
      "Gross-receipts tracking by business activity configured",
      "Bank &amp; card feeds connected, opening balances reconciled",
      "Payroll items (incl. Wilmington wage tax) and users/permissions set up",
      "Franchise-tax reserve tracked; reconciliation &amp; reporting routines established",
    ] },
    { title: "Your CPA", items: [
      "Files Delaware State &amp; federal income-tax returns",
      "Files the annual franchise tax &amp; annual report (with your registered agent)",
      "Tax planning &amp; advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Setup software can generate a chart of accounts; it can&rsquo;t tell you which Delaware gross-receipts activity category your revenue falls under, how to build the tracking so the receipts return reconciles, or how to structure the file so a holding company&rsquo;s franchise-tax reserve and per-entity books are clean a year from now. That judgment &mdash; building the file for how your Delaware business really runs, in-state or owned from afar &mdash; is what a Certified ProAdvisor setup adds on top of the automation.",
  ],

  // FAQ — 7 Q/A (DE-FACTS cap 5–7), answer-first, Delaware-specific. visible faq__list = FAQPage (same array).
  // 1 call-intent FAQ with the phone woven into an answer (cost question).
  faq: [
    { q: "Why does QuickBooks setup matter for a Delaware business?", a: "A clean QuickBooks setup is the difference between books that stay accurate and books that need a costly cleanup in a year. For a Delaware business specifically, setup means configuring gross-receipts tracking by business activity from day one &mdash; so the right rate and exclusion apply &mdash; building a chart of accounts that fits your industry, reserving for the annual franchise tax, and structuring the file so your CPA can file cleanly. Get it right at the start and everything downstream is faster." },
    { q: "What&rsquo;s included in a QuickBooks setup?", a: "Selecting the right QuickBooks edition (Online vs Desktop) for your business, building an industry-specific chart of accounts, configuring gross-receipts-tax tracking by activity, connecting bank and credit-card feeds, setting up your products/services and customers/vendors, and establishing the reconciliation and reporting routines. If you&rsquo;re moving from another system, data migration is scoped alongside." },
    { q: "How much does QuickBooks setup cost in Delaware?", a: "Setup starts at <strong>$750</strong> as a one-time fixed fee, scoped up by entity complexity, number of accounts, and whether you&rsquo;re migrating from another system. Simple single-entity setups land near the low end; multi-entity or holding-company structures sit higher. We quote a firm number against a written scope before starting &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "For most Delaware small businesses &mdash; and the holding companies and out-of-state-owned entities run remotely &mdash; QuickBooks Online: cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop or Enterprise (now subscription, often hosted) still suits some inventory-heavy or industry-specific operations. As Certified ProAdvisors we&rsquo;ll recommend the right fit for your business honestly, rather than defaulting to one." },
    { q: "Can you set up gross-receipts-tax tracking?", a: "Yes &mdash; and it&rsquo;s the most important part of a Delaware setup. Delaware has no sales tax to collect, but it levies a gross receipts tax on the seller (0.0945%&ndash;1.9914% by activity, after a monthly or quarterly exclusion). We configure QuickBooks to track income by business-activity category so the right rate applies and your Delaware return reconciles to the books from the very first period rather than being reconstructed later." },
    { q: "Do you set up payroll, including the Wilmington wage tax?", a: "We can configure QuickBooks Payroll as part of setup or add it later, including the <strong>1.25% Wilmington earned-income (wage) tax</strong> for businesses with workers in the city, and the multi-state setup many Delaware entities need for remote or out-of-state staff. Payroll is scoped separately from the core bookkeeping setup but integrates into the same file." },
    { q: "What happens after setup?", a: "Most Delaware businesses roll straight into monthly bookkeeping so the file stays as clean as the day it was built. You can also take the configured file and run it yourself &mdash; but ongoing monthly service is what prevents the drift that leads to a future cleanup." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks setup, chart of accounts, gross-receipts items by activity, feeds, payroll items (incl. Wilmington wage tax) &middot; income-tax &amp; franchise-tax filing coordinated with your CPA/EA and registered agent" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/quickbooks-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware QuickBooks setup","description":"QuickBooks setup for Delaware businesses — right edition, clean chart of accounts, and gross-receipts-tax tracking by activity configured from day one. Fixed-fee, all three counties, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-quickbooks-setup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-qbsetup-summary","#de-svc-qbsetup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware QuickBooks Setup Service","serviceType":"QuickBooks setup service","description":"QuickBooks setup for Delaware businesses — right edition, industry chart of accounts, gross-receipts-tax tracking by activity, bank and card feeds, opening balances, payroll items (including Wilmington wage tax), and reconciliation routines, delivered fixed-fee in your own QuickBooks file by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and midsize businesses, holding companies, and out-of-state-owned Delaware entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"750","description":"From $750; one-time fixed fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
