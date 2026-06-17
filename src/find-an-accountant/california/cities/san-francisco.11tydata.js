/* /find-an-accountant/california/cities/san-francisco/ — CA STATE-CHILD PROOF
 * (growth phase, 2026-06-17). t-location, lighter city-child hero (heroLight).
 * GENUINELY localized: real San Francisco + California specifics, not a name-swapped
 * template. The un-clonable hook is the SF Gross Receipts Tax (a tax on GROSS
 * RECEIPTS, not net income — you can owe it at a loss), layered on California's $800
 * minimum franchise tax (FTB, owed regardless of profit), CDTFA sales/use tax, and
 * AB5 worker classification. A find-replace of "California"->"Texas" would read
 * false at every line (TX has no state income tax, no $800 franchise-on-existence,
 * no SF-style city gross-receipts tax, no AB5).
 *
 * HONESTY: real, current-as-of-review tax facts only; SF GRT rates/thresholds and
 * CA franchise/LLC-fee specifics are described structurally and deferred to the CA
 * FTB, the CDTFA, the SF Office of the Treasurer & Tax Collector, and the client's
 * CPA/EA — TechBrot keeps the books and coordinates; it does not file CA/SF returns.
 * No fabricated stats, counts, or clients. Firm-level review byline (founder-name-
 * zero); the 2 real Clutch reviews live on the pillar, not duplicated here. Pricing
 * = the firm's standard fixed-fee ranges. */

function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY (H2: The short version.)
  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for San Francisco businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. What sets San Francisco apart is a tax stack almost no other U.S. city imposes: the <strong>San Francisco Gross Receipts Tax</strong>, which taxes your <em>gross receipts</em> rather than your profit, sits on top of California&rsquo;s <strong>$800 minimum annual franchise tax</strong> (owed to the FTB whether or not you make money), the state&rsquo;s <strong>7.25% base sales/use tax</strong> administered by the CDTFA (about <strong>8.625% in the city</strong>), and California&rsquo;s strict <strong>AB5</strong> worker-classification rules. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California or San Francisco taxes.",

  // AI SUMMARY (H2: San Francisco bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for San Francisco businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Francisco and Bay Area businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the San Francisco Gross Receipts Tax and California&rsquo;s FTB and CDTFA tax structure." },
    { q: "What San Francisco and California taxes affect my books?", a: "The <strong>San Francisco Gross Receipts Tax</strong> (levied on gross receipts, not net income), California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (7.25% state base, about 8.625% in San Francisco), and <strong>AB5</strong> worker classification." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Fast-scaling SF businesses often run high transaction volumes, which we scope transparently before any work begins." },
    { q: "Do I owe the San Francisco Gross Receipts Tax?", a: "It depends on your gross receipts, not your profit. The smallest businesses fall under a <strong>small-business exemption</strong>, but above it the city taxes gross receipts at rates that vary by business activity &mdash; which means a startup operating at a loss can still owe it. Larger firms can also face the Homelessness Gross Receipts Tax and the Overpaid Executive Tax. We keep the books so the real figure is clear; the SF Treasurer&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Which areas do you serve?", a: "<strong>All of San Francisco</strong> &mdash; SoMa, the Financial District, the Mission, Mission Bay, Union Square, the Sunset and Richmond &mdash; plus the wider Bay Area, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  // LOCAL CONTEXT (H2: Why San Francisco books are different.)
  localContext: [
    "Most cities tax what a business <em>earns</em>. San Francisco taxes what it <em>takes in</em> &mdash; and that single difference is what makes bookkeeping here its own discipline.",
    "The <strong>San Francisco Gross Receipts Tax</strong> is levied on gross receipts, not net income, so a venture-funded startup burning cash at a loss can still owe the city tax &mdash; the opposite of how founders expect tax to work. Stacked on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> every LLC and corporation owes the Franchise Tax Board regardless of profit, an additional income-based <strong>LLC fee</strong>, the nation&rsquo;s highest base <strong>sales/use tax</strong> (7.25%, administered by the CDTFA, not the IRS), and <strong>AB5</strong>, whose strict ABC test reclassifies many &ldquo;contractors&rdquo; as employees. No other state-and-city pair layers tax quite like this.",
    "That is why out-of-state, software-only bookkeeping struggles here. If your books don&rsquo;t separate gross receipts the way the city classifies business activity, the Gross Receipts Tax becomes a guess. If sales tax isn&rsquo;t reconciled to the CDTFA return, it drifts. If a &ldquo;contractor&rdquo; should have been a W-2 employee under <a href=\"/glossary/1099-vs-w2/\">AB5</a>, you find out the expensive way. TechBrot keeps a named bookkeeper on your file who knows these are the things that matter in this city &mdash; built into the monthly close, not the year-end scramble.",
    "The result: books that reflect how a San Francisco business actually runs &mdash; gross receipts tracked, sales tax reconciled, contractor vs. employee handled cleanly &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>, so filing the GRT, the franchise tax, and the income returns is fast and accurate.",
  ],

  // AREAS (H2: San Francisco areas we serve.)
  areas: [
    { name: "SoMa &amp; Financial District", note: "Tech, agencies, finance &amp; professional services" },
    { name: "Mission &amp; Mission Bay", note: "Startups, biotech, restaurants &amp; creative" },
    { name: "Union Square &amp; Downtown", note: "Retail, hospitality &amp; storefront business" },
    { name: "Sunset &amp; Richmond", note: "Small business, healthcare &amp; professional services" },
    { name: "Bay Area metro", note: "Peninsula, East Bay &amp; South Bay, remote-first" },
    { name: "All of San Francisco", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  // TAX STACK (H2: San Francisco's tax stack, at a glance.)
  taxStack: [
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based LLC fee (roughly $900 to $11,790 by total income). Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "8.625%", desc: "San Francisco combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base (the highest in the U.S.) plus the city district rate, administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "GRT", desc: "San Francisco Gross Receipts Tax &mdash; the city taxes gross receipts (not net income), at rates that vary by business activity, with a small-business exemption for the smallest firms. Larger businesses can also face the Homelessness Gross Receipts Tax and the Overpaid Executive Tax. Because it&rsquo;s on receipts, it can apply even in a loss year." },
  ],
  taxNote: "San Francisco and California tax figures are educational and current as of the review date, verified against the California Franchise Tax Board, the CDTFA, and the San Francisco Office of the Treasurer &amp; Tax Collector. Rates, thresholds, and exemptions change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or San Francisco tax returns or provide legal or tax advice.",

  // INDUSTRIES (H2: Industry-specific bookkeeping for San Francisco businesses.)
  industries: [
    { label: "Tech &amp; SaaS startups", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition for subscriptions, burn-rate and runway reporting, equity-comp and R&amp;D coordination with your CPA" },
    { label: "Professional services &amp; agencies", href: "/accounting/industries/professional-services/", note: "project profitability, gross-vs-net revenue, and books structured for the gross-receipts classification" },
    { label: "Restaurants &amp; hospitality", href: "/accounting/industries/restaurant/", note: "high-volume POS deposits reconciled to the CDTFA sales-tax return, tipped-employee payroll" },
    { label: "E-commerce &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> beyond California" },
    { label: "Nonprofits", href: "/accounting/industries/nonprofit/", note: "functional-expense allocation, grant revenue recognition, and CA Attorney General / RRF-1 ready workpapers" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  // SERVICES (H2: Complete bookkeeping, San Francisco-aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with gross receipts and CDTFA sales tax tracked.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Fast-scaling SF books fall behind quickly. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax- &amp; GRT-ready books", body: "Books structured so your CPA can file the CDTFA sales tax and the SF Gross Receipts Tax accurately.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // ADVISORY (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a city that taxes your gross receipts and a state that bills $800 before you&rsquo;ve made a dollar, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your gross-receipts classification is right, your runway against burn is real, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named San Francisco bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs CA FTB, CDTFA &amp; SF Treasurer &amp; Tax Collector &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ (H2: San Francisco bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my San Francisco business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Francisco and the wider Bay Area, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the San Francisco Gross Receipts Tax and California&rsquo;s FTB and CDTFA tax structure." },
    { q: "What San Francisco and California taxes affect my bookkeeping?", a: "Several that out-of-state bookkeepers miss. The San Francisco Gross Receipts Tax is levied on gross receipts rather than net income. California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at a 7.25% state base (about 8.625% in the city). And AB5&rsquo;s ABC test governs whether a worker is a contractor or an employee. We build awareness of all of it into how your books are kept." },
    { q: "Do I owe the San Francisco Gross Receipts Tax?", a: "It depends on your gross receipts, not your profit. The smallest businesses fall under a small-business exemption, but above that threshold the city taxes gross receipts at rates that vary by business activity &mdash; so a company operating at a loss can still owe it. Larger businesses may also face the Homelessness Gross Receipts Tax and the Overpaid Executive Tax. We keep the books structured so the real figure is clear; the San Francisco Office of the Treasurer & Tax Collector&rsquo;s rules and your CPA determine what&rsquo;s actually due." },
    { q: "What is California's $800 franchise tax?", a: "It&rsquo;s a minimum annual tax the California Franchise Tax Board charges most LLCs, corporations, LPs, and LLPs simply for being registered to do business in the state &mdash; owed whether or not the business is profitable. LLCs also owe an additional fee based on total income. We track it in your books so it&rsquo;s planned for, not a surprise; your CPA files it. Specific amounts and any first-year rules should be confirmed with your CPA or the FTB." },
    { q: "How much does a San Francisco bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Fast-scaling SF businesses often run high transaction volumes, which we scope transparently before any work begins." },
    { q: "Can you clean up a messy San Francisco QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common SF engagements, especially for fast-growing startups whose books fell behind during a scale-up or a funding round. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean &mdash; including the gross-receipts detail the city tax depends on." },
    { q: "Do you work with San Francisco tech and SaaS startups?", a: "Yes &mdash; it&rsquo;s a core SF vertical. SaaS and subscription businesses need deferred-revenue recognition done correctly, runway and burn-rate reporting that founders and investors can trust, and clean books for equity-compensation and R&amp;D matters that your CPA handles at tax time. We keep the books to that standard and coordinate with your CPA and, where useful, extend into fractional-CFO advisory." },
    { q: "How do we get started in San Francisco?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your San Francisco situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/california/cities/san-francisco/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"San Francisco Bookkeeper & QuickBooks Accountant","description":"Certified QuickBooks ProAdvisor bookkeeping for San Francisco businesses — fluent in the San Francisco Gross Receipts Tax, California's $800 minimum franchise tax (FTB), CDTFA sales tax (about 8.625%), and AB5 worker classification. Fixed-fee, named bookkeeper.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#sf-summary","#sf-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-17"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"California","item":"https://techbrot.com/find-an-accountant/california/"},
          {"@type":"ListItem","position":4,"name":"San Francisco"}]},
        {"@type":"Service","@id":url+"#service","name":"San Francisco Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, QuickBooks management, and San Francisco tax-aware bookkeeping — with the SF Gross Receipts Tax, California's $800 franchise tax, and CDTFA sales tax tracked and CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or San Francisco tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"San Francisco","sameAs":"https://en.wikipedia.org/wiki/San_Francisco"},
          {"@type":"Place","name":"San Francisco Bay Area","sameAs":"https://en.wikipedia.org/wiki/San_Francisco_Bay_Area"}],
          "audience":{"@type":"BusinessAudience","audienceType":"San Francisco and Bay Area small and midsize businesses — tech and SaaS startups, professional services and agencies, restaurants and hospitality, e-commerce and retail, nonprofits, and real estate"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
