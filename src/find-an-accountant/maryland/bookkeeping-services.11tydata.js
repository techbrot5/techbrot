/* /find-an-accountant/maryland/bookkeeping-services/ — t-money MD SERVICE child (overview
 * of the MD bookkeeping service). NEW page (no baseline equity contract — Maryland set built
 * fresh as a core state). Structure mirrors the proven DE/NY/IN/PA/NJ bookkeeping-services child:
 * JSON front-matter in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders — single source.
 *
 * MARYLAND LOCALIZATION (per MD-FACTS, verified 2026-06-26 against the Comptroller of Maryland +
 * MD General Assembly BRFA 2025): the county "piggyback" local income tax — all 23 counties and
 * Baltimore City levy their own local income tax (~2.25%–3.20%, some now graduated; framed
 * qualitatively, never a specific county %), withheld by each employee's county of residence on
 * Form MW507 and collected on the state return; reciprocity with DC, PA, VA, and WV (Form
 * MW507/MW507M) for cross-border staff; the graduated 2% to 6.50% state income tax (2025 brackets,
 * middle brackets qualitative); the 8.25% corporate income tax; the PTE election (advisory hook);
 * and the 6% sales tax with the NEW 3% data/IT-services rate (NAICS 518/519/5415 + software
 * publishing incl. business-use SaaS, NAICS 5132) effective July 1, 2025 — taxability confirmed
 * against the Comptroller's Technical Bulletin 56 and the client's CPA, with MPU apportionment for
 * multi-state use. Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200).
 * No fabricated MD-specific dollar tiers.
 *
 * NO ADDRESS (CRITICAL): Maryland is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the PA/NJ child ("served
 * remotely across all 23 Maryland counties and Baltimore City"). Review prose defers to the
 * Comptroller of Maryland and its employer-withholding guidance.
 *
 * ROUTING (MD core state, 6 pages): link ONLY to existing pages — the 4 MD siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the MD pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent MD child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Maryland returns, the state or local
 * income tax, the payroll-withholding filings, the sales-tax return (including the new 3% IT/data
 * tax), or the PTE return; coordinates with the client's CPA, EA, and the Comptroller of Maryland.
 * The capital-gains surtax is 2% (the proposed 3% is not law); the new 3% IT/data tax is framed as
 * genuinely new — readers are pointed to Technical Bulletin 56 and their CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Maryland bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/quickbooks/payroll/\">county piggyback local income tax reviewed by each employee&rsquo;s county of residence (Form MW507)</a>, Maryland&rsquo;s <a href=\"/accounting/sales-tax-compliance/\">6% sales tax</a> sub-reconciled including the new 3% IT/data-services rate, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 23 Maryland counties and Baltimore City, the Baltimore metro to the DC suburbs to Annapolis.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Maryland bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Maryland bookkeeping services?", a: "<strong>Maryland bookkeeping services are the ongoing recording, reconciling, and reporting of a Maryland business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, a review of the county piggyback local income tax by each employee&rsquo;s county of residence (Form MW507) and DC/PA/VA/WV reciprocity, sales-tax sub-reconciliation across the 6% rate and the new 3% IT/data-services rate, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Maryland?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of counties and reciprocity states you withhold for, and sales-tax footprint (including the new 3% IT/data tax) &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Maryland businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the PTE election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, wrong-county piggyback withholding, missed reciprocity for cross-border staff, and a software firm that never tracked the new 3% IT/data tax &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Maryland business actually runs &mdash; in one county, with cross-border DC/PA/VA/WV staff, or selling IT and software services now caught by the 3% tax." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Maryland owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "24 jurisdictions", label: "Served remotely across all 23 Maryland counties and Baltimore City &mdash; Baltimore, Columbia, the Montgomery County DC suburbs, Annapolis, and Frederick &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/maryland/small-business-accountant/", cta: "Maryland small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Maryland business &mdash; with the county piggyback local-tax liability tracking by county of residence, a sales-tax liability account that separates the new 3% IT/data rate from the 6% standard rate, and PTE-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/maryland/quickbooks-setup/", cta: "Maryland QuickBooks setup &rarr;" },
    { num: "03", title: "Piggyback local-tax &amp; sales-tax review", body: "Maryland&rsquo;s graduated state income-tax withholding is the easy part. Underneath it, all 23 counties and Baltimore City levy a piggyback local income tax set by each employee&rsquo;s county of residence on Form MW507 and collected on the state return &mdash; plus DC/PA/VA/WV reciprocity (Form MW507/MW507M) for cross-border staff. Sales tax runs 6% statewide, with a new 3% rate on data and IT services and business-use SaaS since July 1, 2025, alongside Multiple-Points-of-Use apportionment. We review the local-tax configuration and sub-reconcile the sales-tax liability so it ties to the books. You or your CPA file with the Comptroller of Maryland.", href: "/quickbooks/payroll/", cta: "Payroll &amp; the piggyback local tax &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/find-an-accountant/maryland/quickbooks-accountant/", cta: "Maryland QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the county piggyback withholding reconciled, the 3% IT/data sales tax tracked against the 6% rate, and the pass-through detail kept PTE-ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/maryland/quickbooks-cleanup/", cta: "Maryland QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "County piggyback local-tax review by MW507 county of residence",
    "DC/PA/VA/WV reciprocity (MW507/MW507M) tracking for cross-border staff",
    "Sales-tax sub-reconciliation incl. the new 3% IT/data rate vs the 6% standard",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Maryland &amp; federal income-tax returns",
    "Files the state or local income tax &amp; the payroll-withholding filings",
    "Files the sales-tax return (incl. the 3% IT/data tax) &amp; represents you before the Comptroller",
    "Formal tax planning, opinions &amp; the PTE election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Maryland situation &mdash; volume, accounts, number of entities, which counties you withhold for, whether DC/PA/VA/WV reciprocity applies to your staff, whether the new 3% IT/data tax hits your sales, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with the piggyback local tax withheld for the wrong county or a software firm not tracking the 3% IT/data tax &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the county piggyback local tax reviewed by county of residence, sales tax sub-reconciled including the 3% IT/data rate, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that a new hire&rsquo;s MW507 just changed which county &mdash; or state &mdash; you withhold for, that your SaaS product is now caught by the 3% IT/data tax, or that your pass-through should weigh the PTE election this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Maryland books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Maryland-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Maryland bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Maryland bookkeeping services actually include?", a: "Monthly bookkeeping for a Maryland business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; reviewing the county piggyback local income tax by each employee&rsquo;s county of residence (Form MW507) and DC/PA/VA/WV reciprocity; sub-reconciling sales tax across the 6% rate and the new 3% IT/data-services rate; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Maryland?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of counties and reciprocity states you withhold for, and your sales-tax footprint (including the new 3% IT/data tax) &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Maryland business?", a: "Most Maryland businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the PTE election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, correcting piggyback local tax withheld for the wrong county, applying reciprocity for cross-border staff who were over-withheld for Maryland, and configuring the new 3% IT/data tax that was never tracked &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Maryland piggyback local tax and the new 3% IT/data sales tax in the books?", a: "On top of the graduated state income tax, all 23 Maryland counties and Baltimore City levy a piggyback local income tax &mdash; currently in the range of about 2.25% to 3.20%, with some counties now graduated by income (we never quote a specific county rate; confirm current figures on the Comptroller&rsquo;s local-rate list). The rate is set by each employee&rsquo;s county of residence on Form MW507 and collected on the state return, and DC, Pennsylvania, Virginia, and West Virginia residents may be exempt under reciprocity (Form MW507/MW507M). We review that configuration in QuickBooks. On sales tax, Maryland runs 6% statewide, with a new 3% rate on data and IT services and business-use SaaS since July 1, 2025; we configure the QuickBooks sales-tax items for the 3% rate versus the 6% standard rate, set up Multiple-Points-of-Use apportionment, and point you and your CPA to the Comptroller&rsquo;s Technical Bulletin 56 on taxability. We prepare the numbers; you or your CPA file." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Maryland business runs, whether it operates in one county, employs cross-border DC/PA/VA/WV staff, or sells IT and software services now caught by the 3% tax." },
    { q: "How do we start Maryland bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which counties you withhold for, whether DC/PA/VA/WV reciprocity applies, whether the new 3% IT/data tax hits your sales &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the state and local income tax, the payroll-withholding filings, the sales-tax return (incl. the 3% IT/data tax) &amp; the PTE return coordinated with your CPA/EA and the Comptroller of Maryland" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/maryland/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Maryland Bookkeeping Services","description":"Fixed-fee bookkeeping services for Maryland businesses across all 23 counties and Baltimore City — monthly bookkeeping, cleanup, catch-up, county piggyback local-tax review by MW507 county of residence, DC/PA/VA/WV reciprocity, and sales-tax sub-reconciliation across the 6% rate and the new 3% IT/data-services rate, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-maryland-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#md-svc-bkkg-summary","#md-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Maryland","item":"https://techbrot.com/find-an-accountant/maryland/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Maryland Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, county piggyback local-tax review by MW507 county of residence, DC/PA/VA/WV reciprocity, and sales-tax sub-reconciliation across the 6% rate and the new 3% IT/data-services rate for Maryland businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Maryland returns, the state or local income tax, the payroll-withholding filings, the sales-tax return (including the new 3% IT/data tax), or the PTE return — coordinates with the client's CPA, EA, or the Comptroller of Maryland.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Maryland","sameAs":"https://en.wikipedia.org/wiki/Maryland"},
          "audience":{"@type":"BusinessAudience","name":"Maryland small and midsize businesses, government contractors and professional-services firms, healthcare and life-sciences companies, and IT, SaaS, and software firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Maryland Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
