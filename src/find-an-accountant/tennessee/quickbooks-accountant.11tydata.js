/* /find-an-accountant/tennessee/quickbooks-accountant/ — TN SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Arizona child
 * (arizona/quickbooks-accountant.*) for structure and routing, and the areaServed-only / no-address
 * framing, with Tennessee content per _build/strategy/TN-FACTS.md. JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * TN LOCALIZATION (the deliberate TN differentiation — do NOT import AZ's TPT/prime-contracting hook):
 * Arizona's TRANSACTION PRIVILEGE TAX (TPT, 5.6% + the prime-contracting 65% rule) and its flat 2.5%
 * income tax → Tennessee has NO individual income tax at all (the Hall tax on investment income was
 * fully repealed for tax years beginning Jan 1, 2021), so payroll carries NO state income-tax
 * withholding. Tennessee's defining taxes live at the business level: the FRANCHISE & EXCISE (F&E)
 * tax — a 6.5% EXCISE on net earnings plus a 0.25% FRANCHISE tax on net worth ($0.25 per $100, a $100
 * minimum; net-worth-only since the 2024 property-measure/Schedule G repeal), filed together on the
 * FAE 170; the BUSINESS TAX — a separate GROSS-RECEIPTS tax (a state business tax + a city business
 * tax) owed once a business grosses $100,000 in a jurisdiction, rates varying by classification; and a
 * HIGH COMBINED SALES TAX — a 7% STATE rate plus a local option up to 2.75% (multiples of 0.25), every
 * locality has one, so the combined rate commonly lands near 9.25–9.75% (among the highest in the US;
 * specific combined local rates framed qualitatively — link the DOR local-sales-tax source). Arizona's
 * 15 Maricopa-centric counties → 95 Tennessee counties across 3 Grand Divisions; metros Nashville
 * (Davidson; healthcare-management — HCA — music, finance), Memphis (Shelby; logistics — FedEx),
 * Knoxville (Knox; UT, Oak Ridge), Chattanooga (Hamilton; VW, "Gig City" tech), Clarksville, Murfreesboro,
 * Franklin, Tri-Cities. PRICING anchored to TN-FACTS canonical "from" figures (monthly $400, cleanup
 * $1,200, setup $750). provider = #organization; areaServed = State Tennessee (NO PostalAddress / geo /
 * LocalBusiness — Tennessee is an areaServed-only state; all states are areaServed-only (no street address));
 * reviewedBy #david-westgate.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate only as
 * reviewedBy @id). Independent firm — does NOT file Tennessee or federal returns, the F&E (FAE 170) return,
 * the business-tax return, or the sales-tax return; not a registered agent; coordinates with the client's
 * CPA/EA and the Tennessee Dept of Revenue. The no-individual-income-tax (Hall repealed 2021), the 6.5%
 * excise, the 0.25% franchise ($100 min), the $100,000 business-tax threshold, and the 7% state sales tax +
 * 2.75% local max are VERIFIED and stated; specific combined local sales-tax rates framed qualitatively.
 *
 * ROUTING (core state, only 6 TN pages exist): links go ONLY to the 5 TN siblings + pillar or to GLOBAL pages
 * that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/, QBO
 * /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/tennessee/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "A <strong>Tennessee QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/accounting/sales-tax-compliance/\">sales tax charged at the correct combined rate by location (7% state plus a local option up to 2.75%)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Tennessee realities like <strong>no individual income tax (the Hall tax was repealed in 2021), so payroll has no state withholding</strong>, the <strong>Franchise &amp; Excise (F&amp;E) tax &mdash; a 6.5% excise on net earnings plus a 0.25% franchise tax on net worth</strong>, the <strong>business (gross-receipts) tax at $100,000 across state and city</strong>, and the <strong>high combined sales tax</strong> that has to be charged and reconciled by location. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 95 Tennessee counties, from Nashville&rsquo;s healthcare-management and music economy to Memphis&rsquo;s logistics hub, Knoxville, Chattanooga, Clarksville, Murfreesboro, Franklin, and the Tri-Cities.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Tennessee QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Tennessee QuickBooks accountant?", a: "<strong>A Tennessee QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Tennessee business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the sales tax at the correct combined rate by location (7% state plus a local option up to 2.75%), keeping the books Franchise &amp; Excise (F&amp;E)-ready (a 6.5% excise on net earnings plus a 0.25% franchise tax on net worth), tracking the business (gross-receipts) tax at the $100,000 threshold, and running payroll with no state income-tax withholding because Tennessee has none &mdash; with fluency in Tennessee&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 95 counties." },
    { q: "What does it cost in Tennessee?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Tennessee and federal returns, the Franchise &amp; Excise (FAE 170) return, the business (gross-receipts) tax return, and the sales-tax return. Most Tennessee businesses use both." },
    { q: "Does Tennessee have a state income tax, and how does that affect payroll?", a: "No &mdash; Tennessee has <strong>no individual income tax</strong>. The old Hall income tax, which applied only to certain interest and dividend income and never to wages, was fully repealed for tax years beginning January 1, 2021. So Tennessee employers <strong>do not withhold state income tax</strong>: payroll is federal income tax, FICA, and state unemployment only. We configure <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> for the no-withholding reality and keep any multi-state staff correct." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/tennessee/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/tennessee/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/tennessee/bookkeeping-services/", cta: "Tennessee bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, a single sales-tax rate that missed the local layers, a tangled equity section that won&rsquo;t support the franchise-tax net-worth base, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/tennessee/quickbooks-cleanup/", cta: "Tennessee QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the sales-tax items for the combined rate by location, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/tennessee/quickbooks-setup/", cta: "Tennessee QuickBooks setup &rarr;" },
    { num: "04", title: "Sales tax &amp; business-tax tracking", body: "Tennessee&rsquo;s combined sales tax is among the highest in the country &mdash; a <strong>7%</strong> state rate plus a local option <strong>up to 2.75%</strong>, every locality has one, so the combined rate varies by location. Generic setups charge one statewide rate &mdash; wrong. We configure the QuickBooks sales-tax items so the correct combined rate applies by destination, reconcile them so the filings tie out, track the <strong>business (gross-receipts) tax</strong> by jurisdiction so the <strong>$100,000</strong> threshold is visible, and scope multi-state nexus for sellers crossing the state line. You or your CPA file.", href: "/accounting/sales-tax-compliance/", cta: "Sales-tax compliance &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; and because Tennessee has <strong>no individual income tax</strong>, there is <strong>no state income-tax withholding</strong> to manage (payroll is federal, FICA, and state unemployment only), with any <strong>multi-state</strong> staff set per work state &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the sales-tax detail kept filing-ready by location and the balance sheet kept F&amp;E-ready (a clean net-worth base for the franchise tax and net earnings for the excise) &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // TN FACTS — three Tennessee tax realities built into the books. (H2: Three Tennessee facts… + 3 H3s)
  facts: [
    { fig: "No income tax", title: "No individual income tax &mdash; no state withholding", body: "Tennessee has <strong>no individual income tax</strong>. The old <strong>Hall income tax</strong>, which applied only to certain interest and dividend income and never to wages, was <strong>fully repealed for tax years beginning January 1, 2021</strong>. The practical effect on the books is clean: there is <strong>no state income-tax withholding</strong> on payroll &mdash; QuickBooks Payroll handles federal income tax, FICA, and state unemployment only. That&rsquo;s simpler than the municipal-tax states (Ohio) or city-tax states (Michigan), and we set payroll up so Tennessee and any multi-state staff are withheld correctly." },
    { fig: "F&amp;E", title: "The Franchise &amp; Excise tax &mdash; the real business tax", body: "Tennessee&rsquo;s business-level tax is the <strong>Franchise &amp; Excise (F&amp;E)</strong> tax, filed together on the FAE 170: a flat <strong>6.5% excise</strong> on net earnings plus a <strong>0.25% franchise</strong> tax on net worth ($0.25 per $100, a <strong>$100 minimum</strong>). For tax years ending on or after January 1, 2024, the old property measure (the &ldquo;minimum measure,&rdquo; Schedule G) was repealed, so the franchise tax is now computed on <strong>net worth only</strong>. Because the franchise side keys off net worth, the equity section and balance sheet have to be clean. We keep the net-worth and net-earnings figures reconciled so the FAE 170 is straightforward for your CPA, who files it." },
    { fig: "7% + 2.75%", title: "One of the highest combined sales taxes", body: "Tennessee&rsquo;s <strong>state sales-tax rate is 7%</strong>, and counties and cities add a <strong>local option up to 2.75%</strong> (in multiples of 0.25%). Every Tennessee locality has a local rate, so the <strong>combined rate commonly lands near 9.25&ndash;9.75%</strong> &mdash; among the highest in the country &mdash; and getting the right combined rate by location is the recurring sales-tax work. Separately, the <strong>business (gross-receipts) tax</strong> kicks in once you gross <strong>$100,000</strong> in a jurisdiction (a state and a city tax). We configure QuickBooks for the correct combined sales-tax rate by destination, sub-reconcile it monthly, and track the gross receipts so the business-tax obligation is visible." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The combined sales tax (7% state + local up to 2.75%) by location, the business (gross-receipts) tax tracked by jurisdiction, and F&amp;E-ready net-worth/net-earnings figures set up in QuickBooks",
    "Payroll coordination (no Tennessee state withholding) &amp; year-end CPA handoff",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Tennessee &amp; federal income-tax returns",
    "Files the Franchise &amp; Excise (FAE 170) return; represents you before the Tennessee Department of Revenue",
    "Files the business (gross-receipts) tax &amp; the sales-tax return; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Tennessee situation &mdash; volume, accounts, where your combined sales-tax rates land by location, whether you cross the $100,000 business-tax threshold, how your F&amp;E net-worth figure should be kept clean, where your multi-state footprint runs, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the sales-tax items for the combined rate by location, the gross-receipts tracking for the business tax, the equity section for the franchise-tax net-worth base, and broken reconciliations to a <a href=\"/find-an-accountant/tennessee/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the sales tax current at the combined rate by location, payroll run with no state withholding, the books kept F&amp;E-ready, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you when you&rsquo;ve crossed the $100,000 business-tax threshold in a new county, which combined sales-tax rate applies to a sale in a different city, or whether your equity section will support the franchise-tax net-worth base on the FAE 170. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Tennessee books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Tennessee, or will any bookkeeper do?", a: "For a Tennessee business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Tennessee&rsquo;s specific rules &mdash; the high combined sales tax charged correctly by location (7% state plus a local option up to 2.75%), the business (gross-receipts) tax at the $100,000 threshold, the Franchise &amp; Excise (F&amp;E) net-worth and net-earnings tie-out, and the no-state-income-tax-withholding payroll reality (Tennessee has no individual income tax). TechBrot pairs ProAdvisor-level QuickBooks work with that Tennessee context, delivered as a fixed-fee engagement." },
    { q: "What does a Tennessee QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the sales tax charged correctly at the combined rate by location and the balance sheet F&amp;E-ready so the returns are accurate; track gross receipts so the $100,000 business-tax threshold stays visible; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Tennessee?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Tennessee CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Tennessee and federal returns, the Franchise &amp; Excise (FAE 170) return, the business (gross-receipts) tax return, and the sales-tax return, and represents you before the Tennessee Department of Revenue. Most Tennessee businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How do the F&amp;E tax and the high sales tax affect my QuickBooks setup?", a: "Two things drive the Tennessee setup. The <strong>Franchise &amp; Excise (F&amp;E)</strong> tax keys off net earnings (a 6.5% excise) and net worth (a 0.25% franchise tax, $100 minimum, net-worth-only since 2024), so we keep the equity section and balance sheet clean enough to support the FAE 170 base. The <strong>sales tax</strong> is among the highest in the country &mdash; a 7% state rate plus a local option up to 2.75%, varying by location &mdash; so we configure the QuickBooks sales-tax items for the correct combined rate by destination and sub-reconcile the liability monthly. We also track gross receipts so the $100,000 business-tax threshold is visible. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "Yes &mdash; the most common Tennessee engagement is a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the sales-tax items for the combined rate by location, the gross-receipts tracking, and a clean equity section for the franchise-tax base &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Tennessee discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 95 Tennessee counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the Franchise &amp; Excise (FAE 170) return, the business (gross-receipts) tax return &amp; the sales-tax return coordinated with your CPA/EA and the Tennessee Department of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/tennessee/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Tennessee QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Tennessee businesses across all 95 counties — bookkeeping, QuickBooks setup and cleanup, payroll with no state income-tax withholding (Tennessee has no individual income tax), the sales tax charged at the correct combined rate by location (7% state plus up to 2.75% local), Franchise & Excise (F&E) readiness (6.5% excise on net earnings plus 0.25% franchise on net worth), and business (gross-receipts) tax tracking at the $100,000 threshold, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/tennessee-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#tn-svc-qbaccountant-summary","#tn-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Tennessee","item":"https://techbrot.com/find-an-accountant/tennessee/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Tennessee QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Tennessee businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll with no state income-tax withholding (Tennessee has no individual income tax following the 2021 Hall repeal), the sales tax tracked at the correct combined rate by location (7% state plus up to 2.75% local), Franchise & Excise (F&E) readiness (6.5% excise on net earnings plus 0.25% franchise on net worth, $100 minimum), and business (gross-receipts) tax tracking at the $100,000 threshold, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Tennessee or federal returns, the F&E (FAE 170) return, the business-tax return, or the sales-tax return — coordinates with the client's CPA, EA, and the Tennessee Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Tennessee","sameAs":"https://en.wikipedia.org/wiki/Tennessee"},
          "audience":{"@type":"BusinessAudience","name":"Tennessee small and midsize businesses, healthcare and health-services operators, logistics and distribution firms, automotive and EV manufacturers, real estate operators, professional and financial-services firms, and restaurants and hospitality"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Tennessee QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sales Tax & Business Tax Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
