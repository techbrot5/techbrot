/* /find-an-accountant/new-jersey/bookkeeping-services/ — t-money NJ SERVICE child (overview
 * of the NJ bookkeeping service). NEW page (no baseline equity contract — New Jersey set built
 * fresh as a core state). Structure mirrors the proven DE/NY/IN/PA bookkeeping-services child:
 * JSON front-matter in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders — single source.
 *
 * NEW JERSEY LOCALIZATION (per NJ-FACTS): PA Act 32/flat-3.07%/Philadelphia → NJ graduated gross
 * income tax (1.4% to 10.75% top over $1M — never quote middle brackets); the UI/TDI/FLI/WF
 * payroll-contribution stack with both employer and employee contributions across two 2026 wage
 * bases ($44,800 and $171,100; 2026 employee TDI 0.19%, FLI 0.23%; employer UI/TDI experience-rated,
 * framed qualitatively); the PA–NJ reciprocal agreement and Form NJ-165 (cross-border withholding);
 * Newark's and Jersey City's employer payroll taxes (~1%, qualitative); the 9% Corporation Business
 * Tax; the BAIT election (advisory hook); sales tax 6.625% statewide with the UEZ/Salem 3.3125%
 * half-rate, sourced by location. Pricing uses ONLY canonical figures (monthly from $400/mo;
 * cleanup from $1,200). No fabricated NJ-specific dollar tiers.
 *
 * NO ADDRESS (CRITICAL): New Jersey is an areaServed-only state — NO street address, NO local
 * office, NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the PA child
 * ("served remotely across all 21 New Jersey counties"). Review prose defers to the NJ Division of
 * Taxation and the NJ Department of Labor & Workforce Development.
 *
 * ROUTING (NJ core state, 6 pages): link ONLY to existing pages — the 4 NJ siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the NJ pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent NJ child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content. Independent firm — NOT a CPA firm and NOT a registered agent; does NOT file New Jersey
 * returns, the UI/TDI/FLI payroll filings, the Newark/Jersey City payroll-tax returns, or the
 * sales-tax return; coordinates with the client's CPA, EA, the NJ Department of Labor, and the city. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>New Jersey bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/quickbooks/payroll/\">NJ payroll stack (UI/TDI/FLI/WF) reviewed across both wage bases</a>, New Jersey&rsquo;s <a href=\"/accounting/sales-tax-compliance/\">6.625% sales tax</a> sub-reconciled by location (including the UEZ/Salem 3.3125% half-rate), and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 21 New Jersey counties, Newark to Jersey City to Camden.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: New Jersey bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are New Jersey bookkeeping services?", a: "<strong>New Jersey bookkeeping services are the ongoing recording, reconciling, and reporting of a New Jersey business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, a review of the UI/TDI/FLI/WF payroll-contribution stack across both wage bases, sales-tax sub-reconciliation across the 6.625% rate and the UEZ/Salem 3.3125% half-rate, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in New Jersey?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee and payroll-fund count, and cross-border (PA&ndash;NJ) and city payroll-tax exposure &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most New Jersey businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the BAIT election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, mis-set payroll funds and wage bases, and a UEZ business charging the full 6.625% by mistake &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your New Jersey business actually runs &mdash; in one city, with cross-border PA&ndash;NJ staff, or selling into the New York and Philadelphia metros." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things New Jersey owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "21 counties", label: "Served remotely across all 21 New Jersey counties &mdash; Newark, Jersey City, Paterson, Elizabeth, Edison, Trenton, Camden, and Hoboken &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/new-jersey/small-business-accountant/", cta: "New Jersey small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your New Jersey business &mdash; with the UI/TDI/FLI/WF payroll-fund liability accounts, Newark or Jersey City employer payroll-tax tracking where it applies, and a sales-tax liability account &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/new-jersey/quickbooks-setup/", cta: "New Jersey QuickBooks setup &rarr;" },
    { num: "03", title: "NJ payroll-stack &amp; sales-tax review", body: "New Jersey&rsquo;s graduated income-tax withholding is the easy part. Underneath it, the payroll system funds Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF), with both employer and employee contributions across two 2026 wage bases ($44,800 and $171,100) that reset each January &mdash; plus PA&ndash;NJ reciprocity (Form NJ-165) for cross-border staff. Sales tax runs 6.625% statewide, with a 3.3125% half-rate on qualifying UEZ and Salem County sales, sourced by location. We review withholding and sub-reconcile the sales-tax liability so it ties to the books. You or your CPA file with the NJ Division of Taxation and NJ DOL.", href: "/quickbooks/payroll/", cta: "Payroll &amp; the UI/TDI/FLI stack &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/find-an-accountant/new-jersey/quickbooks-accountant/", cta: "New Jersey QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the UI/TDI/FLI/WF contributions reconciled across both wage bases, the city payroll taxes tracked, and the pass-through detail kept BAIT-ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/new-jersey/quickbooks-cleanup/", cta: "New Jersey QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "UI/TDI/FLI/WF payroll-stack review across both wage bases",
    "PA&ndash;NJ reciprocity (NJ-165) and Newark/Jersey City payroll-tax tracking",
    "Sales-tax sub-reconciliation incl. the UEZ/Salem 3.3125% half-rate",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your New Jersey &amp; federal income-tax returns",
    "Files the UI/TDI/FLI payroll filings &amp; the Newark/Jersey City payroll-tax returns",
    "Files the sales-tax return &amp; represents you before the tax authorities",
    "Formal tax planning, opinions &amp; the BAIT election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your New Jersey situation &mdash; volume, accounts, number of entities, which payroll funds and wage bases you hit, whether PA&ndash;NJ reciprocity or the Newark/Jersey City payroll taxes are in play, sales-tax sourcing, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with payroll funds mis-set or a UEZ business charging the full 6.625% &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the UI/TDI/FLI/WF stack reviewed across both wage bases, sales tax sub-reconciled including the UEZ/Salem 3.3125% half-rate, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that a new hire&rsquo;s NJ-165 just changed which state you withhold for, that your pass-through should weigh the BAIT election this year, or that shipping into New York just created a sales-tax obligation. Clean books are the foundation &mdash; judgment is the value.",
    "Once your New Jersey books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, New Jersey-specific. visible faq__list = FAQPage schema (same array).
  // (H2: New Jersey bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do New Jersey bookkeeping services actually include?", a: "Monthly bookkeeping for a New Jersey business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; reviewing the UI/TDI/FLI/WF payroll-contribution stack across both wage bases and PA&ndash;NJ reciprocity (Form NJ-165); sub-reconciling sales tax across the 6.625% rate and the UEZ/Salem 3.3125% half-rate; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in New Jersey?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee and payroll-fund count, and cross-border (PA&ndash;NJ) and city payroll-tax exposure &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my New Jersey business?", a: "Most New Jersey businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the BAIT election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, correcting mis-set payroll funds and wage bases, and fixing a UEZ business that was charging the full 6.625% &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the New Jersey payroll stack and sales tax in the books?", a: "On top of graduated income-tax withholding, New Jersey funds four payroll programs &mdash; Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) &mdash; with both employer and employee contributions across two 2026 wage bases ($44,800 and, for employee TDI/FLI, $171,100). The 2026 employee rates are 0.19% (TDI) and 0.23% (FLI); employer UI and TDI are experience-rated and reset each January, so we review the configuration in QuickBooks (we never quote an experience-rated employer rate; confirm current figures with the NJ Department of Labor) and set PA&ndash;NJ reciprocity per employee with Form NJ-165. Newark and Jersey City also levy an employer payroll tax we track where it applies. Sales tax is 6.625% statewide, with a 3.3125% half-rate on qualifying UEZ and Salem County sales, sourced by location and sub-reconciled so the return ties to the books. We prepare the numbers; you or your CPA file." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your New Jersey business runs, whether it operates in one city, employs cross-border PA&ndash;NJ staff, or sells into the New York and Philadelphia metros." },
    { q: "How do we start New Jersey bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which payroll funds and wage bases you hit, whether PA&ndash;NJ reciprocity or the Newark/Jersey City payroll taxes apply, how sales tax should be sourced &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax, the UI/TDI/FLI payroll filings, the Newark/Jersey City payroll taxes &amp; sales-tax filing coordinated with your CPA/EA, the NJ Department of Labor, and the city" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-jersey/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New Jersey Bookkeeping Services","description":"Fixed-fee bookkeeping services for New Jersey businesses across all 21 counties — monthly bookkeeping, cleanup, catch-up, UI/TDI/FLI/WF payroll-stack review across both wage bases, PA–NJ reciprocity (Form NJ-165), and 6.625% sales-tax sub-reconciliation with the UEZ/Salem 3.3125% half-rate, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-jersey-bookkeeping-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nj-svc-bkkg-summary","#nj-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New Jersey","item":"https://techbrot.com/find-an-accountant/new-jersey/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"New Jersey Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, UI/TDI/FLI/WF payroll-stack review across both wage bases, PA–NJ reciprocity (Form NJ-165), and 6.625% sales-tax sub-reconciliation with the UEZ/Salem 3.3125% half-rate for New Jersey businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file New Jersey returns, the UI/TDI/FLI payroll filings, the Newark/Jersey City payroll-tax returns, or the sales-tax return — coordinates with the client's CPA, EA, the NJ Department of Labor, or the city.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New Jersey","sameAs":"https://en.wikipedia.org/wiki/New_Jersey"},
          "audience":{"@type":"BusinessAudience","name":"New Jersey small and midsize businesses, pharmaceutical and manufacturing firms, and logistics and distribution shippers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New Jersey Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
