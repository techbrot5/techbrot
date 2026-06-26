/* /find-an-accountant/washington/quickbooks-accountant/ — WA SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Tennessee child
 * (tennessee/quickbooks-accountant.*) for structure and routing, and the areaServed-only / no-address
 * framing, with Washington content per _build/strategy/WA-FACTS.md. JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * WA LOCALIZATION (the deliberate WA differentiation — do NOT import TN's F&E/business-tax hook):
 * Tennessee's FRANCHISE & EXCISE (F&E) tax → Washington's defining business tax is the BUSINESS &
 * OCCUPATION (B&O) tax — a GROSS-RECEIPTS tax on the value of products or gross income, levied BY
 * CLASSIFICATION with NO deduction for the cost of doing business (retailing 0.471%, wholesaling and
 * manufacturing 0.484%, a tiered SERVICE rate of 1.5% then 1.75% and a higher top tier), PLUS a
 * separate CITY B&O many cities (Seattle, Tacoma, Bellevue, Everett) levy on top — owed regardless of
 * profit; it is NOT an income tax. Washington has NO individual AND no corporate income tax, so payroll
 * carries NO state income-tax withholding — but two payroll premiums apply: PAID FAMILY & MEDICAL LEAVE
 * (PFML, 1.13% for 2026) and WA CARES (0.58% of wages, employee-paid). A HIGH COMBINED SALES/USE TAX —
 * a 6.5% STATE rate plus local, commonly near 8.5–10.5% by location, DESTINATION-based (use tax mirrors
 * it, notably near the no-sales-tax Oregon border; specific combined local rates framed qualitatively —
 * link the DOR rate lookup). And a 7% CAPITAL-GAINS TAX on owners' long-term gains above a standard
 * deduction ($278,000 for 2025), plus an additional 2.9% over $1M (real estate, retirement, and
 * business-use assets exempt) — advisory/coordination only. Tennessee's 95 counties → 39 Washington
 * counties; metros Seattle (King; cloud/tech), Spokane (Eastern-WA hub), Tacoma (port/logistics),
 * Vancouver (Clark; Oregon-border), Bellevue (King; tech), Everett (Snohomish; Boeing aerospace), Kent
 * (King; warehousing). PRICING anchored to WA-FACTS canonical "from" figures (monthly $400, cleanup
 * $1,200, setup $750). provider = #organization; areaServed = State Washington (NO PostalAddress / geo /
 * LocalBusiness — Washington is an areaServed-only state; the DE HQ is the only real-address state);
 * reviewedBy #david-westgate. NOTE sameAs target is Washington_(state), not Washington.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate only as
 * reviewedBy @id). Independent firm — does NOT file Washington or federal returns, the B&O / Combined Excise
 * Tax Return, the sales-tax return, the capital-gains tax, or any city B&O return; not a registered agent;
 * coordinates with the client's CPA/EA and the Washington Dept of Revenue. The no-income-tax, the B&O rates
 * (retailing 0.471%, wholesaling/manufacturing 0.484%, service tiered 1.5%/1.75%/top), the 6.5% state sales
 * tax, the 7% capital-gains tax (+2.9% over $1M, $278k 2025 deduction), PFML 1.13% (2026), and WA Cares 0.58%
 * are VERIFIED and stated; specific combined local sales-tax rates, city B&O rates, and the exact service-B&O
 * top tier framed qualitatively. Do NOT call the B&O an income tax.
 *
 * ROUTING (core state, only 6 WA pages exist): links go ONLY to the 5 WA siblings + pillar or to GLOBAL pages
 * that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/, QBO
 * /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/washington/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Washington QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/accounting/sales-tax-compliance/\">sales tax charged at the correct combined rate by location (a 6.5% state rate plus local, destination-based)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Washington realities like the <strong>Business &amp; Occupation (B&amp;O) tax &mdash; a gross-receipts tax by classification with no deduction for costs, plus city B&amp;O</strong>, the <strong>high combined sales/use tax</strong>, the <strong>7% capital-gains tax on owners</strong>, and <strong>no individual income tax, so payroll has no state withholding (but PFML and WA Cares apply)</strong>. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 39 Washington counties, from Seattle&rsquo;s cloud and tech economy to Spokane, Tacoma, Vancouver, Bellevue, Everett, and Kent.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Washington QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Washington QuickBooks accountant?", a: "<strong>A Washington QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Washington business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the sales tax at the correct combined rate by location (a 6.5% state rate plus local, destination-based), tracking gross receipts by Business &amp; Occupation (B&amp;O) classification (and by city where a local B&amp;O applies), keeping clean cost-basis records for the 7% capital-gains tax owners may owe, and running payroll with no state income-tax withholding because Washington has none (though PFML and WA Cares apply) &mdash; with fluency in Washington&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 39 counties." },
    { q: "What does it cost in Washington?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Washington and federal returns, the B&amp;O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax, and any city B&amp;O return. Most Washington businesses use both." },
    { q: "Does Washington have a state income tax, and how does that affect payroll?", a: "No &mdash; Washington has <strong>no individual income tax</strong> (and no corporate income tax). So Washington employers <strong>do not withhold state income tax</strong>: payroll is federal income tax, FICA, and state unemployment &mdash; plus Washington&rsquo;s two payroll premiums, Paid Family &amp; Medical Leave (1.13% in 2026, split employer/employee) and WA Cares (0.58% of wages, employee-paid). We configure <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> for the no-withholding reality with PFML and WA Cares set up, and keep any multi-state staff correct." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/washington/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/washington/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/washington/bookkeeping-services/", cta: "Washington bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, a single sales-tax rate that missed the local layers, gross receipts not split by B&amp;O classification, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/washington/quickbooks-cleanup/", cta: "Washington QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the sales-tax items for the combined rate by location, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/washington/quickbooks-setup/", cta: "Washington QuickBooks setup &rarr;" },
    { num: "04", title: "Sales tax &amp; B&amp;O tracking", body: "Washington&rsquo;s combined sales/use tax is among the highest in the country &mdash; a <strong>6.5%</strong> state rate plus local, so the combined rate commonly lands near <strong>8.5&ndash;10.5%</strong> by location and is destination-based. And the <strong>Business &amp; Occupation (B&amp;O) tax</strong> is a gross-receipts tax levied by classification with <strong>no deduction</strong> for costs &mdash; retailing 0.471%, wholesaling and manufacturing 0.484%, and a tiered service rate (1.5%, then 1.75%, higher at the top) &mdash; with many cities (Seattle, Tacoma, Bellevue, Everett) adding their own <strong>city B&amp;O</strong> on top. Generic setups charge one statewide rate and ignore B&amp;O &mdash; wrong. We configure the QuickBooks sales-tax items so the correct combined rate applies by destination, track gross receipts by B&amp;O classification (and by city where a local B&amp;O applies), and reconcile them so the filings tie out. You or your CPA file.", href: "/accounting/sales-tax-compliance/", cta: "Sales-tax compliance &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; and because Washington has <strong>no individual income tax</strong>, there is <strong>no state income-tax withholding</strong> to manage, but we configure the two Washington payroll premiums &mdash; <strong>Paid Family &amp; Medical Leave</strong> (1.13% in 2026) and <strong>WA Cares</strong> (0.58%, employee-paid) &mdash; alongside federal, FICA, and state unemployment, with any <strong>multi-state</strong> staff set per work state &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the sales-tax detail kept filing-ready by location and the gross receipts kept tracked by B&amp;O classification &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // WA FACTS — three Washington tax realities built into the books. (H2: Three Washington facts… + 3 H3s)
  facts: [
    { fig: "No income tax", title: "No individual income tax &mdash; no state withholding", body: "Washington has <strong>no individual income tax</strong> &mdash; and no corporate income tax either. The practical effect on the books is clean: there is <strong>no state income-tax withholding</strong> on payroll &mdash; QuickBooks Payroll handles federal income tax, FICA, and state unemployment, plus Washington&rsquo;s two payroll premiums (<strong>Paid Family &amp; Medical Leave</strong> at 1.13% for 2026 and <strong>WA Cares</strong> at 0.58%, employee-paid). But &ldquo;no income tax&rdquo; is not &ldquo;low tax&rdquo; &mdash; Washington raises revenue through the B&amp;O tax, a high combined sales/use tax, and a capital-gains tax. We set payroll up so Washington and any multi-state staff are withheld correctly." },
    { fig: "B&amp;O", title: "The B&amp;O gross-receipts tax &mdash; the real business tax", body: "Washington&rsquo;s defining business tax is the <strong>Business &amp; Occupation (B&amp;O)</strong> tax &mdash; a <strong>gross-receipts</strong> tax on the value of products or gross income of the business, levied <strong>by classification</strong> with <strong>no deduction</strong> for labor, materials, rent, or any other cost, so even a low-margin or break-even business owes it. Verified rates: <strong>retailing 0.471%</strong>, <strong>wholesaling and manufacturing 0.484%</strong>, and a <strong>tiered service rate</strong> &mdash; 1.5% under $1M of prior-year taxable income, 1.75% from $1M to under $5M, and a higher top tier above that. On top of the state B&amp;O, many cities (Seattle, Tacoma, Bellevue, Everett) levy their own <strong>city B&amp;O</strong>. We configure QuickBooks to track gross receipts by classification (and by city where it applies) and reconcile the figures; the business or its CPA files the Combined Excise Tax Return." },
    { fig: "6.5% + local", title: "One of the highest combined sales taxes &mdash; plus a capital-gains tax", body: "Washington&rsquo;s <strong>state sales-tax rate is 6.5%</strong>, and local jurisdictions add their own, so the <strong>combined rate commonly lands near 8.5&ndash;10.5%</strong> by location &mdash; among the highest in the country &mdash; and it&rsquo;s <strong>destination-based</strong>, so getting the right combined rate by location is the recurring sales-tax work (use tax mirrors it on untaxed purchases, notably near the Oregon border). Separately, Washington imposes a <strong>7% tax on long-term capital gains</strong> above a standard deduction (<strong>$278,000 for 2025</strong>), plus an <strong>additional 2.9%</strong> on gains over $1M; it&rsquo;s an individual tax on owners (real estate, retirement assets, and assets used in a business are exempt). We configure QuickBooks for the correct combined sales-tax rate by destination, sub-reconcile it monthly, and keep clean cost-basis records so your CPA can determine any capital-gains tax." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The combined sales/use tax (6.5% state + local) by location, gross receipts tracked by B&amp;O classification (and by city where a local B&amp;O applies), and clean cost-basis records for the capital-gains tax set up in QuickBooks",
    "Payroll coordination (no Washington state withholding; PFML &amp; WA Cares configured) &amp; year-end CPA handoff",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Washington &amp; federal income-tax returns",
    "Files the B&amp;O / Combined Excise Tax Return; represents you before the Washington Department of Revenue",
    "Files the sales-tax return, the capital-gains tax &amp; any city B&amp;O return; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Washington situation &mdash; volume, accounts, where your combined sales-tax rates land by location, which B&amp;O classifications and any city B&amp;O apply to your revenue, whether owners may owe the capital-gains tax, where your multi-state footprint runs, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the sales-tax items for the combined rate by location, the gross-receipts tracking by B&amp;O classification, the records behind any city B&amp;O, and broken reconciliations to a <a href=\"/find-an-accountant/washington/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the sales tax current at the combined rate by location, payroll run with no state withholding (PFML and WA Cares configured), the gross receipts tracked by B&amp;O classification, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you which B&amp;O classification a new revenue stream falls under, whether a city B&amp;O now applies, which combined sales-tax rate applies to a sale in a different city, or whether an owner&rsquo;s sale will trigger the 7% capital-gains tax. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Washington books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Washington, or will any bookkeeper do?", a: "For a Washington business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Washington&rsquo;s specific rules &mdash; the high combined sales tax charged correctly by location (a 6.5% state rate plus local), gross receipts tracked by Business &amp; Occupation (B&amp;O) classification and any city B&amp;O, the capital-gains tax kept advisory in the records, and the no-state-income-tax-withholding payroll reality with PFML and WA Cares configured (Washington has no individual income tax). TechBrot pairs ProAdvisor-level QuickBooks work with that Washington context, delivered as a fixed-fee engagement." },
    { q: "What does a Washington QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the sales tax charged correctly at the combined rate by location and the gross receipts tracked by B&amp;O classification so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Washington?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Washington CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Washington and federal returns, the B&amp;O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax, and any city B&amp;O return, and represents you before the Washington Department of Revenue. Most Washington businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How do the B&amp;O tax and the high sales tax affect my QuickBooks setup?", a: "Two things drive the Washington setup. The <strong>Business &amp; Occupation (B&amp;O)</strong> tax is a gross-receipts tax levied by classification with no deduction for costs (retailing 0.471%, wholesaling and manufacturing 0.484%, a tiered service rate of 1.5%, then 1.75%, and higher at the top), plus a city B&amp;O in many cities, so we track gross receipts by classification and by city. The <strong>sales/use tax</strong> is among the highest in the country &mdash; a 6.5% state rate plus local, commonly near 8.5&ndash;10.5% and destination-based &mdash; so we configure the QuickBooks sales-tax items for the correct combined rate by destination and sub-reconcile the liability monthly. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "Yes &mdash; the most common Washington engagement is a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the sales-tax items for the combined rate by location and the gross-receipts tracking by B&amp;O classification &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Washington discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 39 Washington counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the B&amp;O / Combined Excise Tax Return, the sales-tax return &amp; the capital-gains tax coordinated with your CPA/EA and the Washington Department of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/washington/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Washington QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Washington businesses across all 39 counties — bookkeeping, QuickBooks setup and cleanup, payroll with no state income-tax withholding (Washington has no individual income tax) but PFML and WA Cares configured, the sales tax charged at the correct combined rate by location (6.5% state plus local), Business & Occupation (B&O) gross-receipts tracking by classification plus city B&O, and clean cost-basis records for the 7% capital-gains tax, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/washington-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#wa-svc-qbaccountant-summary","#wa-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Washington","item":"https://techbrot.com/find-an-accountant/washington/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Washington QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Washington businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll with no state income-tax withholding (Washington has no individual income tax) but PFML (1.13% for 2026) and WA Cares (0.58%, employee-paid) configured, the sales tax tracked at the correct combined rate by location (6.5% state plus local, destination-based), Business & Occupation (B&O) gross-receipts tracking by classification (retailing 0.471%, wholesaling and manufacturing 0.484%, tiered service rate) plus city B&O, and clean cost-basis records for the 7% capital-gains tax, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Washington or federal returns, the B&O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax, or any city B&O return — coordinates with the client's CPA, EA, and the Washington Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Washington","sameAs":"https://en.wikipedia.org/wiki/Washington_(state)"},
          "audience":{"@type":"BusinessAudience","name":"Washington small and midsize businesses, technology and cloud companies, aerospace and manufacturing firms, e-commerce and retail sellers, maritime and logistics operators, agriculture and food producers, healthcare and life-sciences firms, and professional and financial-services firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Washington QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sales Tax & B&O Tax Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
