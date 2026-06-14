/* /find-an-accountant/new-york/quickbooks-accountant/ — t-location NY SERVICE child
 * (the "money umbrella" NY QuickBooks-accountant service page — NOT an industry page).
 * Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-qbaccountant.txt) — the ONLY authority
 * for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/quickbooks-accountant/index.html, full body read) for body
 * prose/section content. Data-file shape mirrors bookkeeping-services.11tydata.js: JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). The FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders from — single source of truth.
 *
 * MIGRATION-PROTOCOL (content-to-goal, visual-floor):
 *   T2 — every contract H1/H2/H3 rendered verbatim at its exact level (&mdash;/&rsquo;/&amp;);
 *        entities kept; footer chrome (Accounting/QuickBooks/Company/Network) + the
 *        newsletter ("The monthly brief.") intentionally NOT rendered — global chrome owns
 *        them. No <br>, qualifiers, or reordering.
 *   T3 — no collapse: every contract heading carries real content.
 *   T4 — 8 contract Q/A as faq__list AND FAQPage from the same array; verbatim/flat;
 *        enrichment is append-only (never reword/remove the original answer).
 *   T6 — content-to-goal: real NY QuickBooks-accountant specificity — a Certified
 *        QuickBooks ProAdvisor managing the client's QBO/Desktop file (categorization,
 *        reconciliation, sales-tax items, reporting), NY-aware (NYC 8.875% combined,
 *        sales-tax-ready books, UBT awareness), in the client's own file, fixed-fee, with
 *        the books/CPA boundary. Routes to the deeper NY service pages (monthly-bookkeeping,
 *        cleanup, quickbooks-setup/-migration, sales-tax-help) where the contract links them.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. No AggregateRating, no
 * review-card (the 2 real Clutch reviews live on the NY pillar and are not duplicated here).
 * The baseline named-reviewer line ("Lead Certified QuickBooks ProAdvisor · 40+ years…") and
 * the baseline hero "40+ yrs / 62 counties" stat aside are reframed to firm-level scope. No
 * founder/personal name in visible content (firm-level review byline only; David Westgate
 * appears only in reviewedBy schema @id). Independent firm — does NOT file NY/NYC taxes;
 * coordinates with the client's CPA, who files. NYC 8.875% combined rate, NYC UBT, and the
 * economic-nexus threshold reflect current NY DTF / NYC DOF guidance. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "A <strong>New York QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and sales-tax items, and producing CPA-ready monthly statements &mdash; while staying aware of New York realities like <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC sales tax</a> (8.875% combined in the city) and the <strong>Unincorporated Business Tax</strong> that quietly hits sole proprietors and partnerships. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+; setup $750&ndash;$5,000+). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving all 62 counties, NYC to upstate.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a New York QuickBooks accountant?", a: "<strong>A New York QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a New York business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, tracking NYC sales tax, and producing CPA-ready statements &mdash; with fluency in New York&rsquo;s specific tax rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 62 counties." },
    { q: "What does it cost in New York?", a: "Monthly bookkeeping runs <strong>$400&ndash;$2,500+/mo</strong>; one-time QuickBooks cleanup <strong>$1,500&ndash;$15,000+</strong>; setup <strong>$750&ndash;$5,000+</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your New York and federal returns. Most New York businesses use both." },
    { q: "Do you cover upstate and Long Island?", a: "Yes &mdash; all <strong>62 New York counties</strong>: the five boroughs, Long Island, the Hudson Valley, the Capital Region, and Western New York. Delivered remotely on QuickBooks Online or hosted Desktop." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — the six services a named ProAdvisor handles (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: Everything your books need, handled by one expert. + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations &mdash; then keep it clean.", href: "/find-an-accountant/new-york/quickbooks-cleanup/", cta: "New York QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a Desktop-to-Online migration done without breaking your history &mdash; chart of accounts, items, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "04", title: "NYC sales tax tracking", body: "Destination-based sales tax tracked in QuickBooks so your quarterly New York return reconciles to the books &mdash; including the 8.875% NYC combined rate. We prepare the numbers; you or your CPA file through NYS Web File.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books, multi-state aware for New York businesses with remote or out-of-state staff &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/accounting/payroll-management/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // NY FACTS — three NY tax realities built into the books (grid-3 buyer-cards; figure = buyer-card__opener).
  // (H2: Three New York facts that change how your books are kept.)
  facts: [
    { fig: "8.875%", title: "NYC combined sales tax", body: "4% state + 4.5% city + 0.375% MCTD. Destination-based &mdash; the rate follows your customer&rsquo;s location across all 62 counties, so we set sales-tax items up to track it correctly in QuickBooks." },
    { fig: "4%", title: "NYC Unincorporated Business Tax", body: "The UBT hits sole proprietors, partnerships, and LLCs operating in the city &mdash; separate from your personal return. Most owners find out via a notice; we keep the books UBT-aware so your CPA has what they need." },
    { fig: "$500K", title: "Economic-nexus threshold", body: "Over $500K in New York receipts AND 100+ transactions triggers a NY sales-tax collection obligation. We track both in the books so you know before you cross it, not after." },
  ],

  // SCOPE — honest do/don't split (grid-2; checks-list inside each col). 2 frozen H3s verbatim.
  // (H2: What we do — and what we don't. + h3 What TechBrot does / h3 What your CPA does)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "NYC &amp; NY State sales tax tracking and quarterly prep",
    "Payroll coordination and year-end CPA handoff",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your New York &amp; federal income-tax returns",
    "Files the NYC UBT return; represents you before tax authorities",
    "Provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled (grid-2 stack-8). 4 frozen H3s verbatim.
  // (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your New York situation &mdash; volume, accounts, sales-tax exposure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, sales-tax items, and broken reconciliations to a <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, sales tax tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you your NYC UBT exposure is climbing, that your margins are slipping, or that your cash will tighten before a quarterly sales-tax payment. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your New York books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a New York <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York QuickBooks accountant questions.)
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in New York, or will any bookkeeper do?", a: "For a New York business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in New York&rsquo;s specific rules &mdash; NYC&rsquo;s 8.875% combined sales tax, the Unincorporated Business Tax that hits sole proprietors and partnerships, and destination-based sourcing across 62 counties. TechBrot pairs ProAdvisor-level QuickBooks work with that New York context, delivered as a fixed-fee engagement." },
    { q: "What does a New York QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; track NYC sales tax so your quarterly return is accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in New York?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts. One-time QuickBooks cleanup runs $1,500&ndash;$15,000+, and setup $750&ndash;$5,000+. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices." },
    { q: "Is TechBrot a New York CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your New York and federal returns and represents you before the tax authorities. Most New York businesses use both: TechBrot runs the books, your CPA files." },
    { q: "Do you work with businesses outside New York City — upstate and Long Island?", a: "Yes. We serve businesses in all 62 New York counties &mdash; the five boroughs, Long Island, the Hudson Valley, the Capital Region, and Western New York. The work is delivered remotely on QuickBooks Online, or on hosted QuickBooks Desktop, so your location within New York doesn&rsquo;t change the service or the cadence." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common New York engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard, and roll straight into a monthly cadence so the file never drifts again." },
    { q: "What's the difference between QuickBooks Online and Desktop for a New York business?", a: "QuickBooks Online is cloud-based, accessible anywhere, and the default for most New York small businesses. QuickBooks Desktop (now subscription, often hosted) still suits some inventory-heavy or industry-specific operations. As ProAdvisors we work in both and will tell you honestly which fits your business &mdash; and handle the migration if Desktop is being sunset for your edition." },
    { q: "How do we get started?", a: "Book a free New York discovery call. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; baseline named-reviewer line reframed to firm-level).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax and UBT filing coordinated with your CPA/EA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for New York businesses across all 62 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and NYC sales tax tracking, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around NYC's 8.875% combined sales tax, the Unincorporated Business Tax, and destination-based sourcing.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-qbaccountant-summary","#ny-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for New York businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination, and NYC sales tax tracking, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","name":"New York small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New York QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"NYC Sales Tax Compliance"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
