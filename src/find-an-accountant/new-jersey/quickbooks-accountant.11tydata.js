/* /find-an-accountant/new-jersey/quickbooks-accountant/ — NJ SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Pennsylvania child
 * (pennsylvania/quickbooks-accountant.*) for structure and routing, and the New York child for the
 * areaServed-only / no-address framing, with New Jersey content per _build/strategy/NJ-FACTS.md.
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph (WebPage, BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * NJ LOCALIZATION: PA's flat 3.07% income tax + Act 32 local EIT / 6-7-8% sales tax → New Jersey's
 * GRADUATED gross income tax (1.4% to 10.75% over $1M, middle brackets qualitative), the NJ
 * payroll-contribution stack (UI/TDI/FLI/WF, employer + employee, across TWO 2026 wage bases —
 * $44,800 and $171,100; 2026 employee TDI 0.19%, FLI 0.23%; employer UI/TDI experience-rated) — the
 * genuine QuickBooks complexity, the PA–NJ reciprocity (Form NJ-165; covers wages only, NOT
 * Philadelphia/local), the Newark & Jersey City EMPLOYER payroll taxes (~1%), the 6.625% sales tax
 * with the 3.3125% UEZ/Salem half-rate, the 9% CBT + 2.5% Corporate Transit Fee (>$10M, 2024-2028),
 * and the BAIT elective pass-through SALT-cap workaround (advisory hook). PRICING anchored to
 * NJ-FACTS canonical "from" figures (monthly $400, cleanup $1,200, setup $750). provider =
 * #organization; areaServed = State New Jersey (NO PostalAddress / geo / LocalBusiness — New Jersey
 * is an areaServed-only anchor; remote-served across the Mid-Atlantic); reviewedBy #david-westgate. HONESTY
 * (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate only as
 * reviewedBy @id). Independent firm — does NOT file New Jersey returns, the CBT, the GIT, the
 * UI/TDI/FLI payroll filings, the Newark/Jersey City payroll-tax returns, or the sales-tax return;
 * not a registered agent; coordinates with the client's CPA/EA, the NJ DOL, and the city. GIT middle
 * brackets, experience-rated employer UI/TDI rates, and Newark/Jersey City rates framed qualitatively;
 * wage bases / 2026 employee rates reset each January.
 *
 * ROUTING (core state, only 6 NJ pages exist): links go ONLY to the 4 NJ siblings + pillar or to
 * GLOBAL pages that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/,
 * QBO /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/new-jersey/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>New Jersey QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/quickbooks/payroll/\">New Jersey payroll-contribution stack (UI, TDI, FLI, and WF)</a> across both 2026 wage bases, and producing CPA-ready monthly statements &mdash; while staying aware of New Jersey realities like the <strong>graduated income tax (1.4% to 10.75% on income over $1 million)</strong>, the <strong>PA&ndash;NJ reciprocal agreement (Form NJ-165)</strong>, the <strong>6.625% <a href=\"/accounting/sales-tax-compliance/\">sales tax</a></strong> with its 3.3125% UEZ and Salem County half-rate, and the Newark and Jersey City employer payroll taxes. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 21 New Jersey counties, Newark to Camden.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: New Jersey QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a New Jersey QuickBooks accountant?", a: "<strong>A New Jersey QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a New Jersey business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the UI/TDI/FLI/WF payroll stack across both 2026 wage bases, handling PA&ndash;NJ reciprocity, tracking the 6.625% sales tax and its UEZ/Salem half-rate, and producing CPA-ready statements &mdash; with fluency in New Jersey&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 21 counties." },
    { q: "What does it cost in New Jersey?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your New Jersey and federal returns, the Corporation Business Tax, the gross income tax, and the payroll filings. Most New Jersey businesses use both." },
    { q: "Do you handle the New Jersey payroll stack and PA&ndash;NJ reciprocity?", a: "Yes &mdash; the multi-fund payroll stack is the genuine New Jersey complexity. <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> has to carry UI, TDI, FLI, and WF with both employer and employee contributions across two 2026 wage bases ($44,800 and $171,100; employee TDI 0.19%, FLI 0.23%), plus per-employee PA&ndash;NJ reciprocity (Form NJ-165) so a Pennsylvania resident is withheld for PA, not NJ. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/new-jersey/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/new-jersey/bookkeeping-services/", cta: "New Jersey bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, mis-set payroll funds and wage bases, full-rate sales tax in a UEZ, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/new-jersey/quickbooks-cleanup/", cta: "New Jersey QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the UI/TDI/FLI/WF payroll items across both wage bases, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/new-jersey/quickbooks-setup/", cta: "New Jersey QuickBooks setup &rarr;" },
    { num: "04", title: "NJ payroll stack &amp; PA&ndash;NJ reciprocity", body: "New Jersey runs a multi-fund payroll system &mdash; Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) &mdash; with both employer and employee contributions across two 2026 wage bases ($44,800 and $171,100; employee TDI 0.19%, FLI 0.23%; employer UI and TDI experience-rated). We build each fund into QuickBooks Payroll, set per-employee PA&ndash;NJ reciprocity (Form NJ-165) so cross-border staff are withheld correctly, and reconcile it so the quarterly filings tie out. You or your CPA file.", href: "/quickbooks/payroll/", cta: "Payroll &amp; NJ-tax setup &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including the UI/TDI/FLI/WF stack, the Newark and Jersey City employer payroll taxes where they apply, and the multi-state setup many New Jersey logistics and pharma employers need for cross-border staff &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the payroll-fund, sales-tax, and pass-through detail kept filing-ready and the books BAIT-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // NJ FACTS — three New Jersey tax realities built into the books. (H2: Three New Jersey facts… + 3 H3s)
  facts: [
    { fig: "2 bases", title: "The UI/TDI/FLI/WF stack across two wage bases", body: "New Jersey funds four payroll programs &mdash; Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) &mdash; with both employer and employee contributions across two separate 2026 wage bases: $44,800 (employer UI/TDI/WF and employee UI/WF) and $171,100 (employee TDI and FLI). The 2026 employee rates are 0.19% (TDI) and 0.23% (FLI); employer UI and TDI are experience-rated and vary by employer. We configure each fund in QuickBooks Payroll and update it when the January rates reset. Confirm current figures with the NJ Department of Labor." },
    { fig: "PA&ndash;NJ", title: "Reciprocity changes who you withhold for", body: "Under the PA&ndash;NJ reciprocal agreement, a Pennsylvania resident working in New Jersey files Form NJ-165 and is not subject to NJ income tax &mdash; you withhold for Pennsylvania instead (and the reverse for a NJ resident in PA). It covers wages only and does not waive local taxes like the Philadelphia Wage Tax. We set QuickBooks Payroll per employee so cross-border staff are withheld for the correct state." },
    { fig: "6.625%", title: "Sales tax &mdash; or 3.3125% in a UEZ or Salem County", body: "New Jersey&rsquo;s sales tax is 6.625% statewide with no general local add-on, but qualifying sales by certified businesses in an Urban Enterprise Zone (UEZ), and certain sales in Salem County, are taxed at half the rate &mdash; 3.3125% (the two don&rsquo;t stack). QuickBooks has to apply the right rate by location, and a common cleanup is a UEZ business charging the full 6.625% by mistake. We configure the sales-tax items so the return reconciles to the books." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The UI/TDI/FLI/WF payroll stack across both wage bases, PA&ndash;NJ reciprocity (NJ-165) &amp; 6.625% / 3.3125% sales-tax tracking set up in QuickBooks",
    "Payroll coordination (incl. Newark/Jersey City employer payroll taxes) &amp; year-end CPA handoff",
    "CPA-ready financial statements every month, books kept BAIT-ready",
  ],
  scopeDont: [
    "Files your New Jersey &amp; federal income-tax returns, the Corporation Business Tax &amp; the gross income tax",
    "Files the UI/TDI/FLI payroll filings, the sales-tax return &amp; the Newark/Jersey City payroll-tax returns; represents you before tax authorities",
    "Makes the BAIT election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your New Jersey situation &mdash; volume, accounts, which payroll funds and wage bases you hit, whether PA&ndash;NJ reciprocity or the Newark/Jersey City payroll taxes apply, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the UI/TDI/FLI/WF payroll funds across both wage bases, reciprocity setup, sales-tax sourcing, and broken reconciliations to a <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the payroll stack current across both bases, cross-border withholding correct under reciprocity, sales tax sourced right, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you a new hire&rsquo;s NJ-165 just changed which state you withhold for, that your growing pass-through should weigh the BAIT election this year, or that shipping into New York just created a sales-tax obligation. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your New Jersey books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in New Jersey, or will any bookkeeper do?", a: "For a New Jersey business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in New Jersey&rsquo;s specific rules &mdash; the multi-fund UI/TDI/FLI/WF payroll stack across two wage bases, the PA&ndash;NJ reciprocal agreement and Form NJ-165, the 6.625% sales tax with its 3.3125% UEZ and Salem County half-rate, and the Newark and Jersey City employer payroll taxes. TechBrot pairs ProAdvisor-level QuickBooks work with that New Jersey context, delivered as a fixed-fee engagement." },
    { q: "What does a New Jersey QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the UI/TDI/FLI/WF payroll funds and the 6.625% / 3.3125% sales tax tracked so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in New Jersey?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a New Jersey CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your New Jersey and federal returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, the Newark or Jersey City payroll-tax returns, and the sales-tax return, and represents you before the tax authorities. Most New Jersey businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How does the New Jersey payroll stack and PA&ndash;NJ reciprocity affect my payroll?", a: "Beyond graduated income-tax withholding, New Jersey funds four payroll programs &mdash; Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) &mdash; with both employer and employee contributions across two 2026 wage bases ($44,800 and, for employee TDI and FLI, $171,100). The 2026 employee rates are 0.19% (TDI) and 0.23% (FLI); employer UI and TDI are experience-rated and vary by employer. On top of that, a Pennsylvania resident working in New Jersey files Form NJ-165 so you withhold for Pennsylvania, not New Jersey. We build the funds and the per-employee reciprocity into QuickBooks Payroll so the right amounts are withheld and the quarterly returns reconcile; you or your CPA file. The wage bases and employee rates reset each January, which we re-check then." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common New Jersey engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the UI/TDI/FLI/WF payroll funds across both wage bases and the 6.625% / 3.3125% sales-tax sourcing &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free New Jersey discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 21 New Jersey counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; CBT, gross income tax, UI/TDI/FLI payroll, Newark/Jersey City payroll-tax &amp; sales-tax filing coordinated with your CPA/EA, the NJ DOL, and the city" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-jersey/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New Jersey QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for New Jersey businesses across all 21 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and the NJ UI/TDI/FLI/WF payroll-contribution stack across two wage bases, PA–NJ reciprocity (Form NJ-165), and 6.625% / 3.3125% sales-tax tracking, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around New Jersey's graduated 1.4%–10.75% income tax, the multi-fund payroll stack, the UEZ/Salem half-rate sales tax, and the Newark/Jersey City employer payroll taxes.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-jersey-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nj-svc-qbaccountant-summary","#nj-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New Jersey","item":"https://techbrot.com/find-an-accountant/new-jersey/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"New Jersey QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for New Jersey businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination across the NJ UI/TDI/FLI/WF contribution stack and two wage bases, PA–NJ reciprocity (Form NJ-165), and 6.625% / 3.3125% sales-tax tracking, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file New Jersey returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, the Newark/Jersey City payroll-tax returns, or the sales-tax return — coordinates with the client's CPA, EA, the NJ Department of Labor, and the city.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New Jersey","sameAs":"https://en.wikipedia.org/wiki/New_Jersey"},
          "audience":{"@type":"BusinessAudience","name":"New Jersey small and midsize businesses, pharmaceutical and manufacturing firms, and logistics and distribution operators"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New Jersey QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"NJ Payroll-Contribution Stack (UI/TDI/FLI/WF) & PA–NJ Reciprocity Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
