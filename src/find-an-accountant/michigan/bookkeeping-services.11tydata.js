/* /find-an-accountant/michigan/bookkeeping-services/ — t-money MI SERVICE child (overview
 * of the MI bookkeeping service). NEW page (no baseline equity contract — Michigan set built
 * fresh as a core state). Structure mirrors the proven OH (and DE/NY/IN/PA/NJ/MD/VA) bookkeeping-services
 * child: JSON front-matter in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * MICHIGAN LOCALIZATION (per MI-FACTS, verified 2026-06-26 against the Michigan Dept of Treasury): the
 * city income tax — the genuinely MI-distinct hook, the direct analog to Ohio's municipal tax but FAR
 * simpler — 24 cities levy a city income tax under the City Income Tax Act (CITA, 1964 PA 284), withheld
 * by WORK LOCATION for nonresidents (Detroit 2.4% resident / 1.2% nonresident; Grand Rapids and Saginaw
 * 1.5%/0.75%; Highland Park 2%/1%; the rest at the CITA base 1%/0.5% — non-Detroit individual rates framed
 * qualitatively), with NO school-district layer and NO 20-day rule. Detroit is administered by the Michigan
 * Dept of Treasury; Flint joins Treasury administration Jan 1 2027; the rest self-administer. A flat 4.25%
 * individual income tax (confirmed for 2026); a real 6% Corporate Income Tax on C-corporations (unlike OH,
 * which has no corporate income tax and uses the gross-receipts CAT), with the elective flow-through entity
 * (FTE) tax at 4.25% (Form 5772) as the SALT-cap workaround; a flat 6% sales and use tax with NO local
 * add-on anywhere in the state (constitutionally constrained — unlike OH's county-variable combined rate);
 * and reciprocity with IL/IN/KY/MN/OH/WI (Form MI-W4) covering STATE wage income only — the city income tax
 * still applies, and it does not cover independent contractors or non-wage income. Pricing uses ONLY
 * canonical figures (monthly from $400/mo; cleanup from $1,200). No fabricated MI-specific dollar tiers.
 *
 * NO ADDRESS (CRITICAL): Michigan is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the OH child ("served remotely
 * across all 83 Michigan counties"). Review prose defers to the Michigan Department of Treasury and the city.
 *
 * ROUTING (MI core state, 6 pages): link ONLY to existing pages — the 4 MI siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the MI pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent MI child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Michigan or federal returns, the
 * Corporate Income Tax, the individual income tax, the city income-tax filings, the sales-tax return,
 * or the FTE (Form 5772) return; coordinates with the client's CPA, EA, the Michigan Dept of Treasury,
 * and the city. State income-tax rate stated as flat 4.25% (verified); Detroit's 2.4%/1.2% stated
 * (verified); non-Detroit individual city rates framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Michigan bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/quickbooks/payroll/\">city income tax reviewed by work location (Detroit, Grand Rapids, and more)</a>, Michigan&rsquo;s <a href=\"/accounting/sales-tax-compliance/\">flat 6% sales tax</a> sub-reconciled with no local add-on, the <strong>6% Corporate Income Tax</strong> and the flow-through entity election kept ready, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 83 Michigan counties, from metro Detroit and the West Michigan corridor to Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Michigan bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Michigan bookkeeping services?", a: "<strong>Michigan bookkeeping services are the ongoing recording, reconciling, and reporting of a Michigan business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, a review of the city income tax by work location (Detroit, Grand Rapids, and the other City Income Tax Act cities) and IL/IN/KY/MN/OH/WI reciprocity, 6% Corporate Income Tax and flow-through entity readiness, flat 6% sales-tax sub-reconciliation with no local add-on, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Michigan?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of cities you withhold for, whether you owe the 6% Corporate Income Tax or elect the flow-through entity tax, and your sales-tax footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Michigan businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the flow-through entity election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, wrong-city tax withholding, misclassified owner compensation, untracked CIT apportionment, and a single sales-tax setup that missed multi-state nexus &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Michigan business actually runs &mdash; in one city, with hybrid staff crossing into Detroit&rsquo;s predominant-place-of-employment line, with cross-border IL/IN/KY/MN/OH/WI staff, or weighing the flow-through entity election." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Michigan owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "83 counties", label: "Served remotely across all 83 Michigan counties &mdash; from metro Detroit and the West Michigan corridor to Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/michigan/small-business-accountant/", cta: "Michigan small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Michigan business &mdash; with the city income-tax liability tracking by work-location city (Detroit, Grand Rapids, and more), a sales-tax liability account at the flat 6% statewide rate with no local add-on, 6% Corporate Income Tax apportionment visibility, and flow-through-entity-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/michigan/quickbooks-setup/", cta: "Michigan QuickBooks setup &rarr;" },
    { num: "03", title: "City-tax &amp; sales-tax review", body: "Michigan&rsquo;s flat 4.25% income tax and flat 6% sales tax are the easy part. Underneath them, 24 cities levy a city income tax under the City Income Tax Act, withheld by where the work is performed &mdash; Detroit at 2.4%/1.2%, Grand Rapids and Saginaw at 1.5%/0.75%, Highland Park at 2%/1%, and the rest at the 1%/0.5% base (we confirm a non-Detroit city&rsquo;s current rate before withholding) &mdash; with no school-district layer and no 20-day rule. Reciprocity with IL/IN/KY/MN/OH/WI (Form MI-W4) covers state wages only &mdash; the city tax still applies. Sales tax is a flat 6% statewide with no local add-on. We review the city-withholding configuration and sub-reconcile the sales-tax liability so it ties to the books. You or your CPA file with the Michigan Department of Treasury or the city.", href: "/quickbooks/payroll/", cta: "Payroll &amp; the city tax &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/find-an-accountant/michigan/quickbooks-accountant/", cta: "Michigan QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the city withholding reconciled by work location, the flat 6% sales tax tracked, the 6% Corporate Income Tax apportionment measured, and the flow-through entity detail kept ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/michigan/quickbooks-cleanup/", cta: "Michigan QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "City income-tax review by work location (Detroit, Grand Rapids, and more)",
    "IL/IN/KY/MN/OH/WI reciprocity (Form MI-W4) tracking",
    "6% Corporate Income Tax apportionment &amp; FTE-readiness tracking",
    "Flat 6% sales-tax sub-reconciliation with no local add-on",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Michigan &amp; federal income-tax returns",
    "Files the Corporate Income Tax &amp; the individual income tax",
    "Files the city income-tax filings &amp; the sales-tax return",
    "Represents you before the Michigan Department of Treasury or a city",
    "Formal tax planning, opinions &amp; the flow-through entity (Form 5772) election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Michigan situation &mdash; volume, accounts, number of entities, which cities you withhold for, whether the predominant-place-of-employment rule or IL/IN/KY/MN/OH/WI reciprocity applies to your staff, whether you owe the 6% CIT or should weigh the flow-through entity election, your sales-tax footprint, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with city tax withheld for the wrong city, misclassified owner compensation, or untracked CIT apportionment &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the city income tax reviewed by work location, the flat 6% sales tax sub-reconciled, the CIT and FTE position tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that a hybrid employee just shifted their predominant place of employment into Detroit &mdash; or that a Form MI-W4 just changed which state you withhold for &mdash; that your C-corp&rsquo;s apportioned 6% Corporate Income Tax just moved, or that your pass-through should weigh the flow-through entity election at 4.25% this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Michigan books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Michigan-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Michigan bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Michigan bookkeeping services actually include?", a: "Monthly bookkeeping for a Michigan business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; reviewing the city income tax by work location (Detroit, Grand Rapids, and the other City Income Tax Act cities) and IL/IN/KY/MN/OH/WI reciprocity; tracking the 6% Corporate Income Tax apportionment and flow-through entity readiness; sub-reconciling the flat 6% sales tax with no local add-on; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Michigan?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of cities you withhold for, whether you owe the 6% CIT or elect the flow-through entity tax, and your sales-tax footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Michigan business?", a: "Most Michigan businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the flow-through entity election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, correcting city tax withheld for the wrong city, fixing misclassified owner compensation, applying reciprocity for cross-border IL/IN/KY/MN/OH/WI staff, and tracking the 6% CIT apportionment that was never measured &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Michigan city income tax and the CIT in the books?", a: "Michigan&rsquo;s state income tax is a flat 4.25% and its sales tax a flat 6%, so the operational complexity is the local layer: 24 cities levy a city income tax under the City Income Tax Act, and an employer generally withholds the city tax for the city where the work is performed (Detroit is the highest at 2.4% resident / 1.2% nonresident; Grand Rapids and Saginaw are 1.5%/0.75%; Highland Park is 2%/1%; the rest are 1%/0.5% &mdash; we never quote a specific non-Detroit city rate and confirm it with the city before withholding). It&rsquo;s far simpler than Ohio&rsquo;s system &mdash; no school districts, no 20-day rule &mdash; but generic payroll still defaults everyone to one city. A reciprocal-state resident under reciprocity (Form MI-W4) can be exempt from Michigan state tax while the city tax still applies. On the business side, Michigan levies a real 6% Corporate Income Tax on C-corporations, with an elective flow-through entity tax at 4.25% for pass-throughs, so we keep the books CIT- and FTE-ready. We prepare the numbers; you or your CPA file with the Michigan Department of Treasury or the city." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Michigan business runs, whether it operates in one city, employs hybrid staff crossing into Detroit&rsquo;s predominant-place-of-employment line, has cross-border IL/IN/KY/MN/OH/WI staff, or is weighing the flow-through entity election." },
    { q: "How do we start Michigan bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which cities you withhold for, whether reciprocity applies, whether you owe the 6% CIT or should weigh the flow-through entity election, your sales-tax footprint &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales-tax return &amp; the flow-through entity (Form 5772) return coordinated with your CPA/EA, the Michigan Dept of Treasury, and the city" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/michigan/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Michigan Bookkeeping Services","description":"Fixed-fee bookkeeping services for Michigan businesses across all 83 counties — monthly bookkeeping, cleanup, catch-up, city income-tax review by work location (Detroit 2.4%/1.2%, Grand Rapids, and the other City Income Tax Act cities), IL/IN/KY/MN/OH/WI reciprocity, 6% Corporate Income Tax and flow-through entity readiness, and flat 6% sales-tax sub-reconciliation with no local add-on, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/michigan-bookkeeping-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#mi-svc-bkkg-summary","#mi-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Michigan","item":"https://techbrot.com/find-an-accountant/michigan/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Michigan Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, city income-tax review by work location (24 City Income Tax Act cities, Detroit at 2.4%/1.2%, Grand Rapids and Saginaw at 1.5%/0.75%), IL/IN/KY/MN/OH/WI reciprocity, 6% Corporate Income Tax and flow-through entity readiness, and flat 6% sales-tax sub-reconciliation with no local add-on for Michigan businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Michigan returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales-tax return, or the flow-through entity (Form 5772) return — coordinates with the client's CPA, EA, the Michigan Department of Treasury, or the city.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Michigan","sameAs":"https://en.wikipedia.org/wiki/Michigan"},
          "audience":{"@type":"BusinessAudience","name":"Michigan small and midsize businesses, manufacturers and automotive suppliers, logistics and trucking operators, healthcare practices, and professional and financial-services firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Michigan Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
