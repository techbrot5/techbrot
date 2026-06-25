/* /find-an-accountant/new-york/quickbooks-setup/ — t-location NY SERVICE child
 * (cobalt). Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-qbsetup.txt) — the
 * ONLY authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/quickbooks-setup/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors the proven NY child
 * industries/construction.11tydata.js: JSON front-matter lives in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders
 * from — single source of truth (8 contract Q/A, verbatim, append-only).
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page.
 * The only review proof remains the 2 real Clutch reviews (carried on the NY
 * pillar, not duplicated here) — this service child renders NO review-card and
 * NO AggregateRating. The baseline "Reviewer · 40+ years" named-reviewer line is
 * reframed to firm-level (Certified QuickBooks ProAdvisor team). New York facts
 * (destination-based NYC 8.875% combined sales tax; NYC UBT filed by the client's
 * CPA; multi-state payroll) reflect NY DTF guidance. No founder/personal name in
 * visible content (firm-level review byline only). Independent firm — not
 * affiliated with Intuit Inc.; does NOT file NY State/NYC tax returns; coordinates
 * with the client's CPA, who files. CTAs use the canonical lexicon only. Footer
 * chrome (Accounting/QuickBooks/Company/Network) and the newsletter ("The monthly
 * brief.") are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 summary right after the in-brief. (H2: The short version.)
  // Baseline TL;DR prose, enriched; NYC 8.875% destination-based sales tax + books/CPA boundary.
  summary: [
    "A <strong>QuickBooks setup</strong> is what keeps a New York business&rsquo;s books accurate from the start. We select the right edition (<a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop), build an industry-specific <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">chart of accounts</a>, configure <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC/NY sales-tax tracking</a> from day one &mdash; including the destination-based <strong>8.875% NYC combined rate</strong> &mdash; connect your bank and credit-card feeds, enter opening balances, set up products/services and users/permissions, and establish the reconciliation and reporting routines. Fixed-fee from <strong>$750</strong> against a written scope.",
    "Done right at the start, you avoid the <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> most businesses need a year in. <strong>TechBrot</strong> is not a CPA firm &mdash; we set up and run the books and coordinate with your CPA, who files your New York and federal returns and the <strong>NYC UBT</strong>. Independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.; does not file New York taxes.",
  ],

  // FIVE QUESTIONS — entity-dense AI-summary block (mirrors the baseline five-question block).
  // (H2: QuickBooks Setup in New York, in five questions.)
  aiSummary: [
    { q: "What is a QuickBooks setup?", a: "Configuring your accounting file correctly from the start &mdash; the right edition, an industry-specific chart of accounts, sales-tax items, connected bank and card feeds, opening balances, products/services, users and permissions, and reporting routines. For a New York business, destination-based <strong>NYC/NY sales-tax setup from day one</strong> is the part that matters most." },
    { q: "QuickBooks Online or Desktop?", a: "For most New York small businesses, <strong>QuickBooks Online</strong> &mdash; cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop (now subscription, often hosted) still suits some inventory-heavy or industry-specific operations. We recommend honestly, not by default." },
    { q: "What does it cost?", a: "<strong>$750&ndash;$5,000+</strong> as a one-time fixed fee, by entity complexity, number of accounts, and migration needs. Quoted firmly against a written scope before any work starts. No hourly billing." },
    { q: "Do you set up NYC sales tax?", a: "Yes &mdash; destination-based NYC/NY sales tax configured from day one, including the <strong>8.875% NYC combined rate</strong>, so your quarterly New York return reconciles to the books from the very first period." },
    { q: "What happens after setup?", a: "Most New York businesses roll into <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> so the file stays as clean as the day it was built &mdash; the surest way to avoid a future cleanup. You can also run the configured file yourself." },
  ],

  // HOW WE HANDLE — the five frozen setup steps (grid-3 buyer-cards). 5 frozen H3s VERBATIM.
  // (H2: How we handle quickbooks setup for New York businesses. + 5 H3s)
  // Body prose elevated to REAL NY QuickBooks-setup specificity (NOT a mad-lib).
  handle: [
    { num: "01", title: "Right QuickBooks edition selected", body: "We assess Online vs Desktop against how you actually operate &mdash; transaction volume, inventory, industry add-ons, how many people touch the file, and whether you&rsquo;re migrating from another system &mdash; then create the file (new QBO company or a fresh Desktop file) on the edition that fits, not the one we default to." },
    { num: "02", title: "Industry-specific chart of accounts", body: "A chart of accounts built for your New York industry rather than the generic QuickBooks template &mdash; income and COGS accounts that match how you earn, expense accounts your CPA can map to the return, and a structure that keeps <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC UBT</a> allocation clean later. Products/services and customer/vendor lists are set up alongside." },
    { num: "03", title: "NYC &amp; NY sales-tax tracking", body: "Destination-based sales-tax items and rate codes configured from day one &mdash; including the <strong>8.875% NYC combined rate</strong> (4% NY State + 4.5% NYC + 0.375% MCTD) and the upstate rates that apply where you ship or perform work &mdash; so your quarterly return to the NY Department of Taxation and Finance reconciles to the books from the first period." },
    { num: "04", title: "Bank &amp; card feeds connected", body: "All bank and credit-card accounts linked and importing cleanly, opening balances entered and reconciled to a known statement date, and bank rules set so categorization starts right instead of needing a cleanup later. Payroll items and a QuickBooks Payroll connection are scoped here when you need them." },
    { num: "05", title: "Reconciliation &amp; reporting routines", body: "The monthly reconciliation and reporting cadence established, with users and permissions assigned so the right people see the right data, so the file stays accurate after handoff &mdash; and you roll straight into <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> if you want it kept that way." },
  ],

  // SCOPE SPLIT — honest books/CPA boundary (grid-2 buyer-cards). 2 frozen H3s VERBATIM.
  // (H2: What we do — and what your CPA does. + H3 TechBrot + H3 Your CPA)
  scope: [
    { title: "TechBrot", items: [
      "Right QuickBooks edition selected and the file created",
      "Industry-specific chart of accounts, products/services, customers/vendors",
      "NYC &amp; NY sales-tax items and rates configured",
      "Bank &amp; card feeds connected, opening balances reconciled",
      "Payroll items and users/permissions set up",
      "Reconciliation &amp; reporting routines established",
    ] },
    { title: "Your CPA", items: [
      "Files New York State &amp; federal income-tax returns",
      "Files the NYC UBT return",
      "Tax planning &amp; advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Setup software can generate a chart of accounts; it can&rsquo;t tell you which accounts your New York industry actually needs, how to build the sales-tax items so a destination-based NYC return reconciles, or how to structure the file so UBT allocation is clean a year from now. That judgment &mdash; building the file for how your business really runs &mdash; is what a Certified ProAdvisor setup adds on top of the automation.",
  ],

  // FAQ — 8 Q/A VERBATIM from the contract (append-only). visible faq__list = FAQPage (same array).
  // (H2: QuickBooks Setup questions.)
  faq: [
    { q: "Why does QuickBooks setup matter for a New York business?", a: "A clean QuickBooks setup is the difference between books that stay accurate and books that need a costly cleanup in a year. For a New York business specifically, setup means configuring sales-tax tracking for destination-based NYC and NY State rates from day one, building a chart of accounts that fits your industry, and structuring the file so your CPA can file the NYC UBT and your returns cleanly. Get it right at the start and everything downstream is faster." },
    { q: "What&rsquo;s included in a QuickBooks setup?", a: "Selecting the right QuickBooks edition (Online vs Desktop) for your business, building an industry-specific chart of accounts, configuring NYC/NY sales-tax items and rates, connecting bank and credit-card feeds, setting up your products/services and customers/vendors, and establishing the reconciliation and reporting routines. If you&rsquo;re moving from another system, data migration is scoped alongside." },
    { q: "How much does QuickBooks setup cost in New York?", a: "Setup runs $750&ndash;$5,000+ as a one-time fixed fee, depending on entity complexity, number of accounts, and whether you&rsquo;re migrating from another system. Simple single-entity setups land near the low end; multi-entity or migration-heavy setups higher. We quote a firm number against a written scope before starting &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "For most New York small businesses, QuickBooks Online &mdash; it&rsquo;s cloud-based, collaborative, and the platform Intuit is investing in. QuickBooks Desktop (now subscription, often hosted) still suits some inventory-heavy or industry-specific operations. As Certified ProAdvisors we&rsquo;ll recommend the right fit for your business honestly, rather than defaulting to one." },
    { q: "Can you set up sales tax tracking for NYC?", a: "Yes &mdash; and it&rsquo;s one of the most important parts of a New York setup. We configure QuickBooks to track destination-based sales tax, including NYC&rsquo;s 8.875% combined rate, so your quarterly New York return reconciles to the books from the very first period rather than being reconstructed later." },
    { q: "Do you set up payroll in QuickBooks too?", a: "We can configure QuickBooks Payroll as part of setup or add it later, including the multi-state setup many New York businesses need for remote staff. Payroll is scoped separately from the core bookkeeping setup but integrates into the same file." },
    { q: "How long does QuickBooks setup take?", a: "A straightforward single-entity setup is typically completed within one to two weeks of receiving your information; migrations or multi-entity structures take longer. We give you a timeline with the written scope so you know exactly when the file will be ready." },
    { q: "What happens after setup?", a: "Most New York businesses roll straight into monthly bookkeeping so the file stays as clean as the day it was built. You can also take the configured file and run it yourself &mdash; but ongoing monthly service is what prevents the drift that leads to a future cleanup." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name). Baseline "40+ years" reviewer
  // line reframed to firm-level Certified QuickBooks ProAdvisor team (R5).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks setup, chart of accounts, NYC/NY sales-tax items, feeds, payroll items &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/quickbooks-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks setup","description":"QuickBooks setup for New York businesses — right edition, clean chart of accounts, NYC sales tax configured from day one. Fixed-fee, all 62 counties. Call (877) 751-5575.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-quickbooks-setup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-qbsetup-summary","#ny-svc-qbsetup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks Setup Service","serviceType":"QuickBooks setup service","description":"QuickBooks setup for New York businesses — right edition, industry chart of accounts, NYC/NY sales-tax items, bank and card feeds, opening balances, payroll items, and reconciliation routines, delivered fixed-fee in your own QuickBooks file by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"750","description":"From $750; one-time fixed fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
