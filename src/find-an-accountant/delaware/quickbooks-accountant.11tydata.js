/* /find-an-accountant/delaware/quickbooks-accountant/ — DE SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the proven NY exemplar
 * (new-york/quickbooks-accountant.*) with Delaware content per DE-FACTS.md. JSON front-matter in
 * the .njk; this file supplies content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * DE LOCALIZATION: NY's NYC 8.875% sales tax / UBT / $500K nexus → Delaware's 0% sales tax + gross
 * receipts tax on the seller, the annual $300 franchise tax, and the Wilmington 1.25% wage tax.
 * PRICING anchored to DE-FACTS canonical "from" figures (monthly $400, cleanup $1,200, setup $750);
 * NY upper-bound ranges intentionally dropped (not in DE-FACTS). provider = #organization;
 * areaServed = State Delaware; reviewedBy #david-westgate. HONESTY (R5): no invented reviews/stats;
 * firm-level review byline (no founder name; David Westgate only as reviewedBy @id). Independent
 * firm — does NOT file Delaware returns or the franchise tax; not a registered agent. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.)
  summary: "A <strong>Delaware QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts tracking</a> by activity, and producing CPA-ready monthly statements &mdash; while staying aware of Delaware realities like the <strong>gross receipts tax</strong> on the seller (there&rsquo;s no sales tax to collect), the annual <strong>franchise tax</strong> every entity owes, and Wilmington&rsquo;s 1.25% wage tax. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/find-an-accountant/delaware/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA and registered agent, who file. Serving all three counties, Wilmington to the Sussex coast.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is a Delaware QuickBooks accountant?", a: "<strong>A Delaware QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages a Delaware business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, tracking gross receipts by activity, reserving for the franchise tax, and producing CPA-ready statements &mdash; with fluency in Delaware&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all three counties." },
    { q: "What does it cost in Delaware?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA, EA, or registered agent, who file your Delaware and federal returns and the franchise tax. Most Delaware businesses use both." },
    { q: "Do you cover out-of-state-owned Delaware entities?", a: "Yes &mdash; it&rsquo;s one of the most common Delaware engagements. We keep the books for the Delaware entity, handle holding-company and intercompany structure across all <strong>three counties</strong> (New Castle, Kent, Sussex), and coordinate with your home-state CPA. Delivered remotely on QuickBooks Online or hosted Desktop." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/delaware/quickbooks-cleanup/", cta: "Delaware QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a Desktop-to-Online migration done without breaking your history &mdash; chart of accounts, gross-receipts items, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "04", title: "Gross receipts tax tracking", body: "Receipts tracked by business activity in QuickBooks so your Delaware return reconciles to the books &mdash; no sales tax to collect, but the seller-side gross receipts tax (0.0945%&ndash;1.9914% by activity) tracked right. We prepare the numbers; you or your CPA file with the Division of Revenue.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts tax help &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including Wilmington&rsquo;s 1.25% wage tax and the multi-state setup many Delaware entities need for remote or out-of-state staff &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/accounting/payroll-management/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the franchise-tax reserve tracked &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // DE FACTS — three Delaware tax realities built into the books. (H2: Three Delaware facts… + 3 H3s)
  facts: [
    { fig: "0%", title: "No sales tax &mdash; gross receipts instead", body: "Delaware has no sales tax to collect; in its place is a gross receipts tax on the seller (0.0945%&ndash;1.9914% by business activity, after a monthly or quarterly exclusion). We set up gross-receipts tracking by activity so the right rate applies and the return reconciles." },
    { fig: "$300", title: "Annual franchise tax", body: "Every Delaware entity owes it &mdash; flat $300 for LLCs/LPs/GPs (due June 1); $175&ndash;$200,000 for corporations (due March 1). We track and reserve for it in the books; your registered agent or CPA files it. TechBrot does not file the franchise tax." },
    { fig: "1.25%", title: "Wilmington wage &amp; net-profits tax", body: "Wilmington levies 1.25% on earned income and on sole-proprietor/partnership net profits within the city. If you have Wilmington workers or operations, payroll and owner-comp in QuickBooks must account for it &mdash; we set that up." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "Gross-receipts tracking by activity and monthly/quarterly prep",
    "Payroll coordination (incl. Wilmington wage tax) &amp; year-end CPA handoff",
    "CPA-ready financial statements every month, franchise-tax reserve tracked",
  ],
  scopeDont: [
    "Files your Delaware &amp; federal income-tax returns",
    "Files the franchise tax &amp; annual report (with your registered agent); represents you before tax authorities",
    "Provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Delaware situation &mdash; volume, accounts, gross-receipts activity, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, gross-receipts tracking, and broken reconciliations to a <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, gross receipts tracked, franchise-tax reserve current, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you your gross-receipts activity mix is changing what you owe, that your franchise-tax reserve is short, or that your cash will tighten before a quarterly receipts payment. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Delaware books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (DE-FACTS cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Delaware, or will any bookkeeper do?", a: "For a Delaware business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Delaware&rsquo;s specific rules &mdash; the gross receipts tax on the seller (there&rsquo;s no sales tax to collect), the annual franchise tax every entity owes, Wilmington&rsquo;s 1.25% wage tax, and the holding-company and out-of-state-owner structures Delaware is full of. TechBrot pairs ProAdvisor-level QuickBooks work with that Delaware context, delivered as a fixed-fee engagement." },
    { q: "What does a Delaware QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; track gross receipts by activity so the return is accurate; reserve for the franchise tax; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Delaware?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot a Delaware CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA, EA, or registered agent &mdash; who files your Delaware and federal returns, the franchise tax, and the annual report, and represents you before the tax authorities. Most Delaware businesses use both: TechBrot runs the books, your CPA files." },
    { q: "Do you work with Delaware companies operated from out of state?", a: "Yes &mdash; it&rsquo;s one of the most common Delaware engagements. Because most Delaware entities are owned and run from elsewhere, we keep the books for the Delaware entity, handle holding-company and intercompany structure, track the franchise-tax reserve and any in-state gross receipts, and coordinate with your home-state CPA. We serve all three counties &mdash; New Castle, Kent, and Sussex &mdash; remotely on QuickBooks Online or hosted Desktop." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Delaware engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including separating commingled holding-company entities &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Delaware discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; office in Middletown, DE" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax &amp; franchise-tax filing coordinated with your CPA/EA and registered agent" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Delaware businesses across all three counties — bookkeeping, QuickBooks setup and cleanup, payroll, and gross-receipts tracking, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file. Built around Delaware's gross receipts tax, the annual franchise tax, and the Wilmington wage tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-qbaccountant-summary","#de-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Delaware businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination, and gross-receipts tracking, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","name":"Delaware small and midsize businesses, holding companies, and out-of-state-owned Delaware entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Delaware QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Gross Receipts Tax Tracking"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
