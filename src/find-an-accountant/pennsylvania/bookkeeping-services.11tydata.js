/* /find-an-accountant/pennsylvania/bookkeeping-services/ — t-money PA SERVICE child (overview
 * of the PA bookkeeping service). NEW page (no baseline equity contract — Pennsylvania set built
 * fresh, PA is the FIRST core state). Structure mirrors the proven DE/NY/IN bookkeeping-services
 * child: JSON front-matter in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders — single source.
 *
 * PENNSYLVANIA LOCALIZATION (per PA-FACTS): IN county-LIT/flat-7%-sales/$2M-personal-property →
 * PA flat 3.07% state income tax; Act 32 local Earned Income Tax (EIT) levied by municipalities +
 * school districts, withheld by PSD code under the "higher-of" rule (never quote a specific
 * municipal %); Local Services Tax (LST) up to $52/yr where levied; Philadelphia's separate
 * Wage/NPT/BIRT taxes (city-administered, rates change each July 1 — "current as of review date");
 * sales tax 6% state + 1% Allegheny (7% Pittsburgh) + 2% Philadelphia (8%), sourced by location.
 * Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200). No fabricated
 * PA-specific dollar tiers.
 *
 * NO ADDRESS (CRITICAL): Pennsylvania is an areaServed-only anchor — NO street address, NO local
 * office, NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the IN child
 * ("served remotely across all 67 Pennsylvania counties"). Review prose defers to the PA Dept of
 * Revenue, PA DCED, and the City of Philadelphia.
 *
 * ROUTING (PA core state, 6 pages): link ONLY to existing pages — the 4 PA siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the PA pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent PA child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content. Independent firm — NOT a CPA firm and NOT a registered agent; does NOT file Pennsylvania
 * returns, the local EIT or LST, Philadelphia's city-tax returns, or the sales-tax return;
 * coordinates with the client's CPA, EA, and the TCD collector or City of Philadelphia. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Pennsylvania bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, <a href=\"/quickbooks/payroll/\">Act 32 local EIT withholding reviewed by PSD code</a>, Pennsylvania&rsquo;s <a href=\"/accounting/sales-tax-compliance/\">6% / 7% / 8% sales tax</a> sub-reconciled by location, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 67 Pennsylvania counties, Philadelphia to Pittsburgh to Erie.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Pennsylvania bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Pennsylvania bookkeeping services?", a: "<strong>Pennsylvania bookkeeping services are the ongoing recording, reconciling, and reporting of a Pennsylvania business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, Act 32 local Earned Income Tax (EIT) withholding reviewed by PSD code, sales-tax sub-reconciliation across the 6% / 7% / 8% split, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Pennsylvania?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee and PSD-code count, and Philadelphia city-tax exposure &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Pennsylvania businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files and wrong-PSD-code EIT withholding &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Pennsylvania business actually runs &mdash; in one municipality, across multiple PSD codes, or selling into Pittsburgh and Philadelphia." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Pennsylvania owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "67 counties", label: "Served remotely across all 67 Pennsylvania counties &mdash; Philadelphia, Pittsburgh, the Lehigh Valley, Harrisburg, Lancaster, Erie, and Scranton &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/pennsylvania/small-business-accountant/", cta: "Pennsylvania small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Pennsylvania business &mdash; with Act 32 local EIT and Local Services Tax liability accounts, Philadelphia city-tax tracking where it applies, and a sales-tax liability account &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/pennsylvania/quickbooks-setup/", cta: "Pennsylvania QuickBooks setup &rarr;" },
    { num: "03", title: "Act 32 EIT &amp; sales-tax review", body: "Pennsylvania&rsquo;s flat 3.07% state income tax is the easy part. Underneath it, municipalities and school districts levy a local Earned Income Tax (EIT), withheld by PSD code under the &ldquo;higher-of&rdquo; rule, plus the Local Services Tax at the worksite. Sales tax runs 6% statewide, 7% in Allegheny County, and 8% in Philadelphia, sourced by location. We review withholding and sub-reconcile the sales-tax liability so it ties to the books. You or your CPA file with the PA Department of Revenue and the TCD collector.", href: "/quickbooks/payroll/", cta: "Payroll &amp; Act 32 EIT &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/find-an-accountant/pennsylvania/quickbooks-accountant/", cta: "Pennsylvania QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with Act 32 EIT withholding clean, the Local Services Tax reconciled, and Philadelphia Wage/NPT/BIRT detail kept filing-ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/pennsylvania/quickbooks-cleanup/", cta: "Pennsylvania QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Act 32 local EIT withholding reviewed by PSD code (&ldquo;higher-of&rdquo; rule)",
    "Local Services Tax and Philadelphia Wage/NPT/BIRT tracking",
    "Sales-tax sub-reconciliation across the 6% / 7% / 8% split",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Pennsylvania &amp; federal income-tax returns",
    "Files the local EIT, the Local Services Tax &amp; Philadelphia&rsquo;s Wage/NPT/BIRT returns",
    "Files the sales-tax return &amp; represents you before the tax authorities",
    "Formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Pennsylvania situation &mdash; volume, accounts, number of entities, which PSD codes you withhold for, whether Philadelphia city taxes are in play, sales-tax sourcing, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, or withholding EIT at the wrong PSD code &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, Act 32 EIT withholding reviewed, sales tax sub-reconciled across the 6% / 7% / 8% split, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that a new hire&rsquo;s PSD code just changed your EIT withholding, that your Philadelphia activity now triggers BIRT, or that shipping into Pittsburgh just changed the sales-tax rate you should charge. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Pennsylvania books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Pennsylvania-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Pennsylvania bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Pennsylvania bookkeeping services actually include?", a: "Monthly bookkeeping for a Pennsylvania business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; reviewing Act 32 local Earned Income Tax (EIT) withholding by PSD code and the Local Services Tax; sub-reconciling sales tax across the 6% / 7% / 8% split; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Pennsylvania?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee and PSD-code count, and Philadelphia city-tax exposure &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Pennsylvania business?", a: "Most Pennsylvania businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing and tax strategy. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file and correcting EIT withheld at the wrong PSD code &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle Pennsylvania local taxes and sales tax in the books?", a: "On top of the flat 3.07% state income tax, Pennsylvania municipalities and school districts levy a local Earned Income Tax (EIT) under Act 32, and each sets its own rate. Withholding is driven by PSD codes for each employee&rsquo;s residence and work location under the &ldquo;higher-of&rdquo; rule, plus the Local Services Tax at the worksite &mdash; so we review withholding by PSD code inside QuickBooks (we never quote a specific municipal rate; confirm it on the PA DCED lookup). Philadelphia businesses also run the Wage, Net Profits, and BIRT taxes, which we keep filing-ready. Sales tax is 6% statewide, 7% in Allegheny County, and 8% in Philadelphia, sourced by location and sub-reconciled so the return ties to the books. We prepare the numbers; you or your CPA file." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Pennsylvania business runs, whether it operates in one municipality, across multiple PSD codes, or selling into Pittsburgh and Philadelphia." },
    { q: "How do we start Pennsylvania bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which PSD codes you withhold for, whether Philadelphia city taxes apply, how sales tax should be sourced &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax, local EIT, Local Services Tax, Philadelphia city-tax &amp; sales-tax filing coordinated with your CPA/EA and the TCD collector or City of Philadelphia" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/pennsylvania/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Pennsylvania Bookkeeping Services","description":"Fixed-fee bookkeeping services for Pennsylvania businesses across all 67 counties — monthly bookkeeping, cleanup, catch-up, Act 32 local Earned Income Tax (EIT) withholding review by PSD code, and 6% / 7% / 8% sales-tax sub-reconciliation, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-pennsylvania-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pa-svc-bkkg-summary","#pa-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Pennsylvania","item":"https://techbrot.com/find-an-accountant/pennsylvania/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Pennsylvania Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, Act 32 local Earned Income Tax (EIT) withholding review by PSD code, and 6% / 7% / 8% sales-tax sub-reconciliation for Pennsylvania businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Pennsylvania returns, the local EIT or Local Services Tax, Philadelphia's city-tax returns, or the sales-tax return — coordinates with the client's CPA, EA, or the TCD collector or City of Philadelphia.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Pennsylvania","sameAs":"https://en.wikipedia.org/wiki/Pennsylvania"},
          "audience":{"@type":"BusinessAudience","name":"Pennsylvania small and midsize businesses, manufacturers, and logistics and distribution shippers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Pennsylvania Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
