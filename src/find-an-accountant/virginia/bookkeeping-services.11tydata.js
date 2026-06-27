/* /find-an-accountant/virginia/bookkeeping-services/ — t-money VA SERVICE child (overview
 * of the VA bookkeeping service). NEW page (no baseline equity contract — Virginia set built
 * fresh as a core state). Structure mirrors the proven DE/NY/IN/PA/NJ/MD bookkeeping-services child:
 * JSON front-matter in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders — single source.
 *
 * VIRGINIA LOCALIZATION (per VA-FACTS, verified 2026-06-26 against the Virginia Dept of Taxation):
 * the VA-distinct hook is the LOCAL BUSINESS tax, NOT a local income tax. Virginia has NO county or
 * city income tax (contrast with MD's county "piggyback" / PA's Act 32). Instead, most cities and
 * counties levy a BPOL (Business, Professional & Occupational License) tax on GROSS RECEIPTS — rate
 * set by each locality and business classification (framed qualitatively, never a specific %), with a
 * separate license per jurisdiction, so gross receipts must be tracked by locality; plus local BTPP
 * and Machinery & Tools asset taxes. Sales tax is VARIABLE by region: 5.3% general, 6.0% in Northern
 * Virginia / Hampton Roads / Richmond, 7.0% in the Historic Triangle, reduced 1% on groceries — so
 * QuickBooks must charge the right regional rate by location. Reciprocity with MD/PA/WV/KY/DC (Form
 * VA-4). Corporate income tax 6% flat; PTET 5.75% elective (advisory hook, confirm 2026 status).
 * Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200). No fabricated
 * VA-specific dollar tiers. The 7.75%-over-$1M income bracket is a 2026 PROPOSAL, not current law.
 *
 * NO ADDRESS (CRITICAL): Virginia is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the PA/NJ/MD child ("served
 * remotely across Virginia's counties and independent cities"). Review prose defers to the Virginia
 * Department of Taxation and the locality's commissioner of the revenue for BPOL.
 *
 * ROUTING (VA core state, 6 pages): link ONLY to existing pages — the 4 VA siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the VA pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent VA child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; localities served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT affiliated with Intuit, NOT a CPA firm, NOT a registered agent; does NOT file Virginia returns,
 * the state or corporate income tax, the payroll-withholding filings, the sales-tax return, the BPOL
 * or local business-tax returns, or the PTET return; coordinates with the client's CPA, EA, the
 * Virginia Dept of Taxation, and the locality. Specific locality BPOL rates and sales-tax regions are
 * framed qualitatively; the PTET is flagged to confirm 2026 status. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Virginia bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">gross receipts tracked by locality for the BPOL business-license tax</a>, Virginia&rsquo;s <a href=\"/accounting/sales-tax-compliance/\">variable regional sales tax</a> sub-reconciled across the 5.3%, 6.0%, and 7.0% rates, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across Virginia&rsquo;s counties and independent cities, from Northern Virginia and Data Center Alley to Richmond, Hampton Roads, and Roanoke.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Virginia bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Virginia bookkeeping services?", a: "<strong>Virginia bookkeeping services are the ongoing recording, reconciling, and reporting of a Virginia business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, gross receipts tracked by locality for the BPOL business-license tax, sales-tax sub-reconciliation across the variable 5.3%, 6.0%, and 7.0% regional rates, MD/PA/WV/KY/DC reciprocity, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Virginia?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of localities you owe BPOL in, and your sales-tax footprint across Virginia&rsquo;s regions &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Virginia businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the PTET election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, gross receipts never tracked by locality for BPOL, and a single sales-tax rate charged across the 5.3%, 6.0%, and 7.0% regions &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Virginia business actually runs &mdash; in one locality, across several with separate BPOL filings, or selling into more than one regional sales-tax rate." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Virginia owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "Counties + cities", label: "Served remotely across Virginia&rsquo;s counties and independent cities &mdash; Northern Virginia, Richmond, Hampton Roads, Roanoke, and Charlottesville &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/virginia/small-business-accountant/", cta: "Virginia small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Virginia business &mdash; with gross-receipts-by-locality tracking for the BPOL business tax, a sales-tax liability account that separates the 5.3%, 6.0%, and 7.0% regional rates, and PTE-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/virginia/quickbooks-setup/", cta: "Virginia QuickBooks setup &rarr;" },
    { num: "03", title: "BPOL gross-receipts &amp; regional sales-tax review", body: "Virginia has no local income tax, so payroll income-tax withholding is the easy part. The local complexity is on the business side: most cities and counties levy a BPOL tax on gross receipts, set by each locality and business classification, and a business in several jurisdictions needs a separate license each &mdash; so gross receipts have to be tracked by location, alongside the local BTPP and Machinery &amp; Tools asset taxes. Sales tax is variable &mdash; 5.3% in most of the state, 6.0% in Northern Virginia, Hampton Roads, and Richmond, and 7.0% in the Historic Triangle. We track gross receipts by locality and sub-reconcile the regional sales-tax liability so it ties to the books. You or your CPA file with the locality and Virginia Tax.", href: "/accounting/sales-tax-compliance/", cta: "Regional sales-tax help &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/find-an-accountant/virginia/quickbooks-accountant/", cta: "Virginia QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with gross receipts reconciled by locality for BPOL, the variable regional sales tax tied out, and the pass-through detail kept PTE-ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/virginia/quickbooks-cleanup/", cta: "Virginia QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Gross-receipts-by-locality tracking for the BPOL business tax",
    "BTPP &amp; Machinery &amp; Tools asset detail kept locality-ready",
    "Sales-tax sub-reconciliation across the 5.3% / 6.0% / 7.0% regional rates",
    "MD/PA/WV/KY/DC reciprocity (Form VA-4) tracking for cross-border staff",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Virginia &amp; federal income-tax returns",
    "Files the state or corporate income tax &amp; the payroll-withholding filings",
    "Files the sales-tax return, the BPOL or local business-tax returns &amp; represents you before Virginia Tax",
    "Formal tax planning, opinions &amp; the PTET election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Virginia situation &mdash; volume, accounts, number of entities, which localities you owe BPOL in, which sales-tax region(s) you sell into, whether MD/PA/WV/KY/DC reciprocity applies to your staff, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with gross receipts never tracked by locality for BPOL or a single sales-tax rate charged across regions &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, gross receipts tracked by locality for BPOL, the variable regional sales tax sub-reconciled, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that expanding into a second county just added a BPOL filing, that your data-center equipment may qualify for the sales/use-tax exemption, or that your pass-through should weigh the PTET election this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Virginia books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Virginia-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Virginia bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Virginia bookkeeping services actually include?", a: "Monthly bookkeeping for a Virginia business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; tracking gross receipts by locality for the BPOL business-license tax and keeping the BTPP and Machinery &amp; Tools asset detail locality-ready; sub-reconciling sales tax across the variable 5.3%, 6.0%, and 7.0% regional rates; reviewing MD/PA/WV/KY/DC reciprocity for cross-border staff (Form VA-4); producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Virginia?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of localities you owe BPOL in, and your sales-tax footprint across Virginia&rsquo;s regions &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Virginia business?", a: "Most Virginia businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the PTET election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, building gross-receipts-by-locality tracking where BPOL was never broken out by jurisdiction, fixing a single sales-tax rate charged across the 5.3%, 6.0%, and 7.0% regions, and correcting reciprocity for cross-border staff who were over-withheld for Virginia &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Virginia BPOL tax and the variable regional sales tax in the books?", a: "On the local side, Virginia has no state business license, but most cities and counties levy a Business, Professional &amp; Occupational License (BPOL) tax on a business&rsquo;s gross receipts &mdash; at a rate set by each locality and business classification (we never quote a specific locality rate; confirm current figures with the locality&rsquo;s commissioner of the revenue). A business operating in several jurisdictions generally needs a separate BPOL for each, so gross receipts have to be tracked by location, and localities also levy Business Tangible Personal Property and Machinery &amp; Tools taxes on assets. On sales tax, Virginia is variable by region &mdash; 5.3% in most of the state, 6.0% in Northern Virginia, Hampton Roads, and the Richmond region, and 7.0% in the Historic Triangle, with a reduced 1% on groceries; we configure the QuickBooks sales-tax items so the right regional rate applies by location. We prepare the numbers; you or your CPA file with the locality and Virginia Tax." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Virginia business runs, whether it operates in one locality, owes BPOL across several jurisdictions, employs cross-border MD/PA/WV/KY/DC staff, or sells into more than one regional sales-tax rate." },
    { q: "How do we start Virginia bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which localities you owe BPOL in, which sales-tax region you sell into, whether MD/PA/WV/KY/DC reciprocity applies to your staff &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the state and corporate income tax, the payroll-withholding filings, the sales-tax return, and the BPOL or local business-tax returns coordinated with your CPA/EA, the Virginia Department of Taxation, and your locality" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/virginia/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Virginia Bookkeeping Services","description":"Fixed-fee bookkeeping services for Virginia businesses across the Commonwealth's counties and independent cities — monthly bookkeeping, cleanup, catch-up, gross-receipts tracking by locality for the BPOL business-license tax, BTPP and Machinery & Tools detail, MD/PA/WV/KY/DC reciprocity, and sales-tax sub-reconciliation across the variable 5.3%, 6.0%, and 7.0% regional rates, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-virginia-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#va-svc-bkkg-summary","#va-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Virginia","item":"https://techbrot.com/find-an-accountant/virginia/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Virginia Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, gross-receipts tracking by locality for the BPOL business-license tax, BTPP and Machinery & Tools detail, MD/PA/WV/KY/DC reciprocity, and sales-tax sub-reconciliation across the variable 5.3%, 6.0%, and 7.0% regional rates for Virginia businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Virginia returns, the state or corporate income tax, the payroll-withholding filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return — coordinates with the client's CPA, EA, the Virginia Department of Taxation, or the locality.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Virginia","sameAs":"https://en.wikipedia.org/wiki/Virginia"},
          "audience":{"@type":"BusinessAudience","name":"Virginia small and midsize businesses, federal contractors and professional-services firms, IT, SaaS, and data-center companies, healthcare practices, manufacturers, and construction firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Virginia Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
