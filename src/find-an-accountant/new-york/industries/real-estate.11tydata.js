/* /find-an-accountant/new-york/industries/real-estate/ — t-location INDUSTRY child
 * (deeper than a city child — large contract heading set). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-realestate.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/real-estate/
 * index.html, full body read) for BODY PROSE/section content only. Data-file shape mirrors
 * industries/construction.11tydata.js: JSON front-matter lives in the .njk; this file supplies
 * the content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. "Real outcomes"
 * framing reframed to representative ranges. No founder/personal name in visible content
 * (firm-level review byline only; the baseline's named "David Westgate · 40+ years" reviewer
 * line is intentionally NOT carried — firm-level byline only). New York real-estate facts
 * (1031/Section 1031 deferring federal + NY state gains; 45/180-day windows; Qualified
 * Intermediary; same-taxpayer rule; TCJA 2017 narrowing 1031 to real property; nonresident
 * Form IT-2663 withholding; NYC RPIE income-producing-property filing; Commercial Rent Tax
 * for Manhattan tenants south of 96th St; NY separate security-deposit account rule) reflect
 * NY DTF / NYC Dept. of Finance guidance. Independent firm — does NOT file NY/NYC taxes or
 * RPIE; maintains the books — the CPA/owner files and the Qualified Intermediary runs any
 * exchange. Footer chrome (Accounting/QuickBooks/Company/Network) and the newsletter
 * ("The monthly brief.") are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "Real estate runs on <strong>properties and entities, not a single ledger</strong> &mdash; a portfolio P&amp;L can show the business made money while hiding which building earned it after debt service, capex, and management. Real investor accounting needs a clean <strong>per-property and per-entity profit-and-loss</strong> (QuickBooks classes plus genuine entity separation), accurate <strong>depreciation and adjusted basis</strong> on every asset, and records kept clean enough to survive a <strong>1031 exchange</strong>, where a small error carries a large tax consequence.",
    "New York layers its own rules on top. New York follows <strong>federal Section 1031</strong>, so a properly structured like-kind exchange defers both federal <em>and</em> New York State capital gains &mdash; but nonresidents selling NY property generally file <strong>Form IT-2663</strong> for withholding at closing, and the exchange itself is unforgiving: <strong>45 days</strong> to identify replacement property, <strong>180 days</strong> to close, a <strong>Qualified Intermediary</strong> who must hold the proceeds, and the same-taxpayer rule (title can sit in an LLC). Income-producing NYC property triggers an annual <strong>RPIE</strong> (Real Property Income &amp; Expense) filing, and commercial tenants in <strong>Manhattan south of 96th Street</strong> can owe the <strong>Commercial Rent Tax</strong> &mdash; both of which depend on per-property income data your books have to produce.",
    "There&rsquo;s a structure wrinkle too: many investors hold each building in its own <strong>LLC</strong>, which only protects them if the books respect each entity&rsquo;s separation rather than commingling everything, and New York requires tenant <strong>security deposits to sit in separate accounts</strong> rather than in operating cash. <strong>TechBrot</strong> sets all of this up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, reconciles your property-management platform into it, keeps it accurate monthly, and turns it into per-property profit and exchange-ready basis. We deliver the books; your CPA files and your Qualified Intermediary runs any exchange. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY/NYC taxes or RPIE.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York real estate accounting, in five questions.)
  aiSummary: [
    { q: "What&rsquo;s different about accounting for real estate?", a: "<strong>Per-property and per-entity reporting.</strong> A portfolio P&amp;L hides which buildings make money. Real estate accounting tracks each property separately, follows adjusted <strong>basis and depreciation</strong>, and keeps records clean enough for a <strong>1031 exchange</strong> &mdash; where small errors carry large tax consequences." },
    { q: "Does a 1031 exchange defer New York state tax too?", a: "<strong>Yes.</strong> New York follows <strong>federal Section 1031</strong>, so a properly structured exchange defers both federal and New York State capital gains. The one NY-specific step: nonresidents selling New York property generally must file <strong>Form IT-2663</strong> for withholding at closing." },
    { q: "What are the key 1031 deadlines?", a: "<strong>45 days to identify replacement property, 180 days to close</strong> (or your tax-filing date, if earlier). A <strong>Qualified Intermediary</strong> must hold the sale proceeds &mdash; if you take receipt of the funds, the exchange fails. We keep the books and basis records; your QI and CPA run the exchange." },
    { q: "What NYC filings touch the books?", a: "Income-producing NYC property generally owes an annual <strong>RPIE</strong> (Real Property Income &amp; Expense) filing, and commercial tenants <strong>south of 96th Street in Manhattan</strong> can owe the <strong>Commercial Rent Tax</strong> &mdash; both driven by per-property income your books must produce. We maintain that data; the owner or CPA files." },
    { q: "Can you report P&amp;L by property and by entity?", a: "<strong>Yes &mdash; that&rsquo;s the core of it.</strong> A named Certified ProAdvisor structures QuickBooks with classes and entity separation so you can pull profit by individual property, by entity, or across the portfolio, with depreciation tracked correctly on each." },
  ],

  // CHALLENGES — three places investors lose the real numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places New York investors lose the real numbers. + 3 H3s)
  challenges: [
    { signal: "Big tax dollars at stake", title: "Books aren&rsquo;t 1031- or basis-ready.", body: "A 1031 exchange has hard deadlines &mdash; 45 days to identify, 180 to close &mdash; and requires accurate basis and depreciation records and a Qualified Intermediary holding the funds. If your books don&rsquo;t track adjusted basis cleanly, or you stumble on the mechanics, you can lose the deferral. With NYC combined capital gains stacked on federal, that&rsquo;s six figures on a large gain. <strong>The fix:</strong> per-property basis and depreciation tracked year-round, organized so your CPA and QI can execute without reconstructing numbers under deadline." },
    { signal: "Property profit is hidden", title: "No per-property or per-entity P&amp;L.", body: "When everything rolls into one set of books, a strong building masks a weak one. You see portfolio cash flow but not which property actually earns its keep after debt service, capital expense, and management &mdash; so you can&rsquo;t tell what to hold, refinance, or sell. <strong>The fix:</strong> a separate P&amp;L for each property and each entity, using QuickBooks classes and clean entity separation, so portfolio decisions rest on real per-asset numbers rather than a blended figure." },
    { signal: "Entity &amp; NY closing rules", title: "Entity books and NY closing rules blur.", body: "Many investors hold each property in its own LLC for liability protection, but if the books don&rsquo;t respect those entity lines &mdash; or commingle tenant security deposits New York requires kept in separate accounts &mdash; the structure&rsquo;s value erodes. New York closings add transfer taxes and, for nonresident sellers, Form IT-2663 withholding. <strong>The fix:</strong> books that respect each entity&rsquo;s separation, with deposit, transfer-tax, and nonresident-withholding entries handled correctly &mdash; structure set by your attorney, bookkeeping kept clean by us." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: New York real estate accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Per-property P&amp;L", title: "Profit by property &amp; entity", body: "A clean P&amp;L for each property and entity using QuickBooks classes and entity separation, so you can see what every asset earns after debt service and capex &mdash; for one LLC or a portfolio across several.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "02 &middot; Depreciation &amp; basis", title: "Depreciation &amp; adjusted basis", body: "Basis and depreciation tracked accurately on each property &mdash; with cost-segregation coordination where it applies &mdash; so your tax position is current and a 1031 exchange has the records it needs.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "03 &middot; 1031 recordkeeping", title: "Exchange-ready books", body: "Records organized so your CPA and Qualified Intermediary can execute a 1031 exchange cleanly &mdash; basis, documented improvements, and clean proceeds tracking all in place, kept year-round, not reconstructed under deadline.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "04 &middot; Rent &amp; CAM", title: "Rent roll &amp; CAM reconciliation", body: "Rent roll, tenant security deposits (held in the separate accounts New York requires), and common-charge / CAM reconciliations tracked, plus NYC RPIE income-and-expense data kept ready for the owner&rsquo;s annual filing.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "05 &middot; NY closing entries", title: "Closing-entry support", body: "New York transfer taxes and nonresident Form IT-2663 withholding reflected correctly in the books at acquisition and sale, plus Commercial Rent Tax data for commercial tenants south of 96th Street in Manhattan.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York tax help &rarr;" },
    { num: "06 &middot; Cleanup &amp; catch-up", title: "Back-books &amp; reconstruction", body: "Behind across multiple properties or entities? We rebuild the books CPA-ready &mdash; reconstructing basis and depreciation, separating commingled property records &mdash; then keep them clean monthly.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
  ],

  // INTEGRATIONS — property tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you manage property.)
  integrations: [
    "QuickBooks Online &mdash; the per-property and per-entity ledger",
    "AppFolio &mdash; property management synced to per-property books",
    "Buildium &mdash; rent roll and tenant ledgers reconciled to QuickBooks",
    "Rent Manager &mdash; lease and CAM data into the books",
    "Stessa &mdash; single-family and small-portfolio tracking",
    "Bill.com &mdash; vendor and property-expense payables",
    "Stripe &mdash; online rent and fee collection reconciled",
    "Gusto &mdash; payroll for on-site or management staff",
  ],
  integrationsNote: "Using a different property-management platform? If it exports to QuickBooks, we can build the workflow around it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: From portfolio guesswork to per-property clarity. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your properties, entity structure, financing, any planned acquisitions or sales, and where the books fall short. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure per-property and per-entity tracking and depreciation, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to reconstruct basis and separate commingled property records." },
    { phase: "Phase 3", title: "Monthly close &amp; reporting", body: "Monthly reconciliation, rent-roll and common-charge / CAM tracking, depreciation, and per-property and portfolio reporting kept current, exchange-ready, and RPIE-ready." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Per-property performance reporting and, as the portfolio grows, <a href=\"/accounting/advisory/fractional-cfo/\">acquisition, refinance, and cash-flow advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Per-property clarity is the start. Building the portfolio is the point.)
  advisoryBody: [
    "Once each property&rsquo;s numbers are clean, basis and depreciation are tracked, and your books are exchange-ready, the question shifts from &ldquo;what did each property do?&rdquo; to &ldquo;what do we do next?&rdquo; Which assets to hold, refinance, or 1031 into something larger, how leverage looks across the portfolio, when cash flow supports the next acquisition, how to time a sale around the tax &mdash; the decisions that separate New York investors who compound from those who plateau.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your portfolio&rsquo;s numbers turning them into acquisition analysis, refinance timing, and cash-flow forecasting. As automation handles routine data entry, this judgment layer is where investors find their edge. Exchange execution and tax strategy stay with your Qualified Intermediary and your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "Monthly bookkeeping", body: "Per-property close, rent roll, common-charge / CAM, and depreciation kept current every month &mdash; with NYC RPIE data ready for the owner&rsquo;s annual filing.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Explore monthly &rarr;" },
    { title: "Bookkeeping cleanup", body: "Reconstruct adjusted basis and separate commingled property and entity records, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Acquisition, refinance, and cash-flow analysis built on clean per-property numbers &mdash; the judgment layer beyond the books.", href: "/accounting/advisory/fractional-cfo/", cta: "Explore advisory &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your industry runs in New York &mdash; legal/IOLTA, construction, restaurant, healthcare, nonprofit.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name; baseline's named reviewer line dropped).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Per-property &amp; per-entity P&amp;L, depreciation/basis, 1031 recordkeeping, rent roll &amp; CAM &middot; tax filing, RPIE, and exchange execution coordinated with your CPA and Qualified Intermediary" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York real estate accounting questions.)
  faq: [
    { q: "What makes accounting for real estate different?", a: "Two things drive it: per-property visibility and the tax position. A portfolio-level P&amp;L tells you the business made money but hides which property earned it after debt service, capital expenditures, and management &mdash; so real estate books track each property, and often each entity, separately. And because so much of an investor&rsquo;s return is tax-driven, the books also have to follow adjusted basis and depreciation carefully and stay clean enough to support a 1031 exchange, where errors carry large consequences. Generalist bookkeeping rarely does either well." },
    { q: "Does a 1031 exchange defer New York state tax, or just federal?", a: "Both. New York follows federal Section 1031, so a properly structured like-kind exchange of investment property defers both federal and New York state capital gains &mdash; if you don&rsquo;t report the gain to the IRS, you don&rsquo;t report it to New York. The one New York-specific requirement is at closing: nonresidents selling New York property generally must file Form IT-2663, which addresses state withholding on the sale. We keep the books and basis records that support the exchange; your CPA handles the tax filing and your Qualified Intermediary handles the exchange mechanics." },
    { q: "What are the main 1031 exchange deadlines and rules?", a: "The headline rules: you have 45 calendar days from the sale of the relinquished property to identify replacement property (commonly up to three properties under the three-property rule), and 180 days total &mdash; or your tax-filing date, if earlier &mdash; to complete the purchase. A Qualified Intermediary must hold the sale proceeds; if you take receipt or control of the funds, the exchange fails. The same-taxpayer rule means the title holder must be consistent, though that can be an LLC. The Tax Cuts and Jobs Act of 2017 narrowed 1031 to real property only. We don&rsquo;t run the exchange &mdash; your QI and CPA do &mdash; but we keep the basis and records that make it executable." },
    { q: "How much tax is actually at stake in a New York exchange?", a: "Enough to matter a great deal in New York City. An NYC investor selling without an exchange can face capital gains across three authorities &mdash; federal, New York State, and New York City &mdash; with combined state and city rates reaching into the double digits on top of a federal rate approaching the high thirties. On a large gain, that combined bill can run into the hundreds of thousands of dollars, which a properly structured 1031 exchange defers. That&rsquo;s exactly why the records behind the exchange &mdash; accurate basis, documented improvements, clean proceeds tracking &mdash; have to be right, and why we keep them that way year-round rather than reconstructing them under deadline pressure." },
    { q: "Can you report profit by property and by entity?", a: "Yes &mdash; it&rsquo;s the heart of investor accounting. Using QuickBooks classes and clean entity separation, we structure your file so you can pull a P&amp;L for any single property, for an entity that holds several, or for the whole portfolio. That&rsquo;s what lets you see which assets earn their keep after financing and capex, which to refinance or sell, and how the portfolio actually performs &mdash; rather than a blended number that hides your weakest property behind your strongest." },
    { q: "I hold each property in its own LLC &mdash; does that complicate the books?", a: "It&rsquo;s common and sensible for liability protection, but it does require the books to respect each entity&rsquo;s separation rather than commingling everything &mdash; otherwise the structure&rsquo;s protection weakens and tax prep gets tangled. We keep each entity&rsquo;s records distinct while still letting you see the consolidated portfolio. Note that forming the entities and structuring ownership is a legal matter for your attorney; our role is keeping accurate books inside whatever structure you and your attorney establish, including the New York transfer-tax and nonresident-withholding entries that come up at closing." },
    { q: "How much does real estate bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York real-estate investor runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by the number of properties and entities, transaction and rent-roll volume, and whether you need CAM reconciliation or detailed per-property reporting &mdash; a single rental in one LLC is at the lower end; a multi-property portfolio across several entities higher. We quote a firm number after reviewing your books." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file remotely, map your properties and entities, determine whether you need a cleanup first &mdash; including basis reconstruction &mdash; or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We do the books; your CPA files and your Qualified Intermediary runs any exchange." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/real-estate/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Real Estate Accounting","description":"Real estate accounting for New York investors — per-property and per-entity P&L, depreciation and adjusted basis, 1031-exchange-ready books, entity tracking, and NYC RPIE/IT-2663 support, set up in your own QuickBooks file by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-industries-real-estate.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-realestate-summary","#ny-ind-realestate-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Real Estate"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Real Estate Accounting","serviceType":"Real estate investor bookkeeping","description":"Per-property and per-entity P&L, depreciation and adjusted basis tracking, 1031-exchange-ready recordkeeping, rent roll and CAM reconciliation, and NY closing-entry support for New York real-estate investors, delivered in QuickBooks by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns or RPIE — coordinates with the client's CPA and Qualified Intermediary.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York real-estate investors, landlords, operators, and property holders"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
