/* /find-an-accountant/indiana/bookkeeping-services/ — t-money IN SERVICE child (overview
 * of the IN bookkeeping service). NEW page (no baseline equity contract — Indiana set built
 * fresh). Structure mirrors the proven DE/NY bookkeeping-services child: JSON front-matter in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage mainEntity is generated
 * from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * INDIANA LOCALIZATION (per IN-FACTS): DE gross-receipts/franchise/Wilmington-wage/3-counties/
 * Middletown-office → IN flat 2.95% state income tax; each of the 92 counties levies its own
 * local income tax (LIT) on top, withheld by work county on Form WH-4 (never quote a specific
 * county %); flat 7% statewide sales tax with NO local add-ons (still configured/remitted in
 * QuickBooks); business personal-property exemption raised to $2,000,000 for 2026 (declared on
 * Form 102/103). Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200).
 * No fabricated IN-specific dollar tiers.
 *
 * NO ADDRESS (CRITICAL): Indiana is an areaServed-only anchor — NO street address, NO local
 * office, NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the NY child
 * ("served remotely across all 92 Indiana counties"). Review prose defers to the Indiana
 * Department of Revenue and DLGF.
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content. Independent firm — NOT a CPA firm and NOT a registered agent; does NOT file Indiana
 * returns, the county income tax return, the sales-tax return, or the business personal-property
 * return; coordinates with the client's CPA, EA, and county assessor. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Indiana bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county income tax withholding tracked by work county</a>, Indiana&rsquo;s flat 7% <a href=\"/find-an-accountant/indiana/sales-tax-help/\">sales tax</a> configured, and CPA-ready <a href=\"/accounting/financial-statements/\">financial statements</a> produced monthly by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a <a href=\"/find-an-accountant/indiana/pricing/\">written scope</a> (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 92 Indiana counties, Indianapolis to the Region.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Indiana bookkeeping services?", a: "<strong>Indiana bookkeeping services are the ongoing recording, reconciling, and reporting of an Indiana business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, county income tax (LIT) withholding tracked by work county, Indiana&rsquo;s flat 7% sales-tax setup, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Indiana?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, and complexity &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Indiana businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files &mdash; then ongoing <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Indiana business actually runs &mdash; in one county or shipping across state lines." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Indiana owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "92 counties", label: "Served remotely across all 92 Indiana counties &mdash; Indianapolis, Fort Wayne, Evansville, South Bend, and the Region &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Indiana business &mdash; with county income-tax withholding categories and a sales-tax liability account &mdash; so your reports are meaningful and tax prep is painless.", href: "/accounting/chart-of-accounts-setup/", cta: "Chart of accounts setup &rarr;" },
    { num: "03", title: "County income tax &amp; sales tax setup", body: "Indiana keeps it clean on the surface &mdash; one flat 7% statewide sales tax, no local add-ons &mdash; but it still must be configured, collected, and remitted in QuickBooks. And all 92 counties levy their own local income tax (LIT), withheld by the employee&rsquo;s work county on Form WH-4. We set both up so withholding and the return reconcile to the books. You or your CPA file with the Indiana Department of Revenue.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "Indiana county income tax help &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with county income-tax withholding clean and your business personal-property asset detail tracked assessor-ready &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana bookkeeping cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "County income tax (LIT) withholding tracked by work county",
    "Indiana 7% sales-tax setup, tracking &amp; prep",
    "Business personal-property asset detail kept assessor-ready",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Indiana &amp; federal income-tax returns",
    "Files the county income tax &amp; business personal-property returns (Form 102/103)",
    "Represents you before the tax authorities",
    "Formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Indiana situation &mdash; volume, accounts, number of entities, county income-tax withholding, sales-tax exposure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, county income-tax withholding set, Indiana sales tax tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, which county&rsquo;s local income tax rate applies to a new hire, or that your business personal property is nearing the $2,000,000 exemption line. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Indiana books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Indiana-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Indiana bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Indiana bookkeeping services actually include?", a: "Monthly bookkeeping for an Indiana business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; tracking county income tax (LIT) withholding by work county; configuring the flat 7% Indiana sales tax; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Indiana?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, and complexity &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Indiana business?", a: "Most Indiana businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing and tax strategy. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle Indiana county income tax and sales tax in the books?", a: "All 92 Indiana counties levy their own local income tax (LIT) on top of the flat 2.95% state rate, and each county sets its own rate. The rate that applies is determined by the employee&rsquo;s county of residence on January 1 (or principal Indiana work county), set on Form WH-4 &mdash; so we track withholding by work county inside QuickBooks. Sales tax is simpler: one flat 7% statewide rate with no local add-ons, configured on taxable goods and services so the return reconciles to the books. We prepare the numbers; you or your CPA file with the Indiana Department of Revenue." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Indiana business runs, whether it operates in one county or ships across state lines." },
    { q: "How do we start Indiana bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation, determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax, county income tax &amp; business personal-property filing coordinated with your CPA/EA and county assessor" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Bookkeeping Services","description":"Fixed-fee bookkeeping services for Indiana businesses across all 92 counties — monthly bookkeeping, cleanup, catch-up, county income tax (LIT) withholding tracking, and Indiana 7% sales-tax setup, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-bkkg-summary","#in-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, county income tax (LIT) withholding tracking, and Indiana 7% sales-tax setup for Indiana businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns, the county income tax return, or the business personal-property return — coordinates with the client's CPA, EA, or county assessor.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","name":"Indiana small and midsize businesses, manufacturers, and logistics and distribution shippers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Indiana Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
