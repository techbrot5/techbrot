/* /accounting/industries/restaurant/ — LIVE baseline industry page migrated to
 * cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor).
 * FROZEN CONTRACT: tmp/contract-acctind-restaurant.txt (34 headings, 7 FAQ) is
 * the ONLY authority for headings + FAQ. Old HTML
 * accounting/industries/restaurant/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk + this folder's sibling
 * cash-flow-management.11tydata.js (proven t-mofu cobalt) for structure/schema.
 * Industry CONTENT/angle: src/find-an-accountant/new-york/industries/restaurant.njk
 * (NY analog — substance reused, NATIONAL scope, NY-specific tax dropped).
 * t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly
 * brief." NOT rendered here — base-layout chrome / dropped per protocol T2. The
 * 5 quick-answer questions render as NON-heading ai-summary__question (the
 * baseline captured them as <dt>, NOT <hN>) to keep the frozen heading inventory
 * exact. FAQ: 7 contract Q/A verbatim, append-only (no dedup). SCHEMA: WebPage,
 * BreadcrumbList, Service, ItemList (deliverables), FAQPage (all 7, no dedup),
 * QAPage (from the 5 ai-summary questions). Honesty R5/R9: no fabricated
 * stats/outcomes/reviews; firm-level authorship; no AggregateRating;
 * independent firm, not affiliated with Intuit Inc. No <strong> in dark hero. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Restaurant accounting, plainly." — definition prose (from old TL;DR body, enriched; no <strong> rule applies to dark hero only)
  definition: [
    "Restaurant books break in ways ordinary bookkeeping doesn&rsquo;t. A single day&rsquo;s POS summary bundles <strong>gross sales, comps and discounts, tips, sales tax collected, and card-processing fees</strong> into one deposit, while <a href=\"/accounting/bookkeeping/\">accurate books</a> need every piece split apart. Profitability turns on <strong>prime cost</strong> &mdash; food and beverage cost plus labor as a percentage of sales &mdash; and most generic bookkeepers never track it. Add tips, payroll, sales-tax remittance, inventory, and multiple locations, and the margin for error disappears.",
    "TechBrot is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who reconcile daily POS sales to your own QuickBooks file, track cost of goods sold and prime cost, handle the bookkeeping for tips and sales tax, report per location, and turn it into financials you can run a kitchen from. Accurate, POS-reconciled books come first; for operators ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">fractional CFO advisory</a> adds the judgment layer on top. TechBrot delivers the books and coordinates with your CPA, who files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Restaurant accounting, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "Why is restaurant bookkeeping harder?", a: "A day&rsquo;s POS summary bundles <strong>gross sales, comps, tips, sales tax, and card fees</strong> into one deposit. Accurate books require splitting each apart &mdash; plus tracking <strong>prime cost</strong> (food, beverage, and labor), inventory, tips, and sales tax." },
    { q: "Do you reconcile Toast and Square to QuickBooks?", a: "Yes. Daily POS sales are reconciled to your QuickBooks file, separating gross sales, comps and discounts, tips, sales tax collected, and processing fees &mdash; not netted into one number." },
    { q: "Can you track prime cost and food cost?", a: "Yes. We track COGS and labor to calculate <strong>prime cost as a percentage of sales</strong>, maintain inventory where needed, and split food versus beverage cost &mdash; the single most important number in a restaurant P&amp;L." },
    { q: "Do you handle tips, payroll, and sales tax?", a: "We handle the bookkeeping for tip pooling and allocation, integrate payroll so tipped-wage and tip-credit entries post correctly, and track sales tax for remittance. TechBrot does not file income taxes or advise on labor law; we coordinate with your CPA and payroll counsel." },
    { q: "What does it cost?", a: "A fixed monthly fee against a written scope &mdash; driven by locations, sales volume, POS and payroll complexity, and whether inventory and multi-location reporting are in scope. No hourly billing." },
  ],
  // "Three places restaurants lose the numbers." — 3 challenges (grid-3 buyer-card, h3 headings). Real national restaurant content.
  challenges: [
    { signal: "Sales are recorded wrong", title: "POS deposits hide the real numbers.", body: "Toast, Square, and Clover net deposits after tips, comps, refunds, and processing fees. Booked as one number, sales are misstated, fees disappear, and the sales tax you collected gets buried in revenue instead of sitting as a liability. The fix is a <strong>daily sales summary</strong> that separates gross sales, comps and discounts, tips, sales tax, and fees &mdash; reconciled to the actual deposit. If you&rsquo;ve never split a POS deposit apart, your revenue and your sales-tax liability are both guesses. This is fixable." },
    { signal: "Prime cost is invisible", title: "No food or labor cost tracking.", body: "Without COGS and labor tracked against sales, prime cost is unknown. You can&rsquo;t tell whether food cost is creeping past a healthy 28&ndash;35%, whether labor is running too high, or which menu items actually make money. The fix is COGS and labor tracked to produce <strong>prime cost as a percentage of sales</strong>, with food and beverage broken out by category. Most struggling restaurants don&rsquo;t have a sales problem &mdash; they have a prime-cost problem they can&rsquo;t see." },
    { signal: "Tips &amp; tax are exposed", title: "Tip and sales-tax obligations slipping.", body: "Tip pooling recorded inconsistently, tipped-wage and tip-credit payroll entries off, and sales tax collected but not cleanly tracked for remittance &mdash; each is a compliance headache waiting to surface. The fix is tip allocation booked correctly, payroll integrated so tipped-wage entries post right, and <a href=\"/accounting/sales-tax-compliance/\">sales tax</a> tracked by location for on-time remittance. We keep the books and the records right; labor and tip law, and income-tax filing, stay with your counsel and CPA &mdash; we coordinate cleanly." },
  ],
  // "Restaurant accounting, done by an expert." — 6 services (grid-3, h3 linked). Numbered eyebrow + cta.
  handle: [
    { num: "01 · POS reconciliation", title: "Daily sales reconciliation", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", cta: "Monthly bookkeeping &rarr;", body: "Toast, Square, Clover, and Lightspeed reconciled to QuickBooks &mdash; gross sales, comps, tips, sales tax, and processing fees separated correctly from the daily sales summary, then tied to the bank deposit." },
    { num: "02 · Prime cost", title: "COGS, labor &amp; prime cost", href: "/accounting/bookkeeping/?intent=bookkeeping", cta: "Bookkeeping &rarr;", body: "Food and beverage cost, labor, and inventory tracked to produce prime cost as a percentage of sales &mdash; COGS broken out by category so you can see margin item by item and act on it." },
    { num: "03 · Tips, payroll &amp; tax", title: "Tip handling &amp; sales tax", href: "/accounting/payroll-management/?intent=payroll", cta: "Payroll management &rarr;", body: "Tip pooling and allocation booked, payroll integrated for tipped wages and the tip credit, and sales tax tracked by location for on-time remittance. We do the bookkeeping; your CPA and counsel handle filing and labor law." },
    { num: "04 · Cleanup", title: "Restaurant-book cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", cta: "Bookkeeping cleanup &rarr;", body: "Untangle netted POS deposits, rebuild COGS and prime cost, separate the sales tax buried in revenue, and reconcile each location back to a known-good baseline before monthly work begins." },
    { num: "05 · Setup", title: "QuickBooks &amp; POS setup", href: "/quickbooks/setup/?intent=quickbooks-setup", cta: "QuickBooks setup &rarr;", body: "A restaurant chart of accounts, location and class structure for multi-unit reporting, and the right apps connecting your POS and payroll to QuickBooks cleanly &mdash; so the daily sync runs without manual re-entry." },
    { num: "06 · Advisory", title: "Operations advisory", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", cta: "Fractional CFO &rarr;", body: "As you scale, fractional CFO advisory on menu and item profitability, labor scheduling against the sales curve, location performance, and cash flow &mdash; the judgment layer above the books." },
  ],
  // "Connected to how you run service." — platforms reconciled (checks-list)
  integrations: [
    "<strong>Toast</strong> &mdash; daily sales summary, tips, and fees reconciled to QuickBooks",
    "<strong>Square</strong> &mdash; gross sales, refunds, and processing fees split from net deposits",
    "<strong>Clover</strong> &mdash; sales, comps, and sales tax separated for accurate revenue",
    "<strong>Lightspeed</strong> &mdash; POS sales and inventory cost tied back to the books",
    "<strong>TouchBistro</strong> &mdash; service-level sales detail reconciled per location",
    "<strong>7shifts</strong> &mdash; labor hours and cost mapped against sales for prime cost",
    "<strong>MarginEdge / restaurant inventory tools</strong> &mdash; food cost and COGS feeds reconciled",
    "<strong>DoorDash / Uber Eats</strong> &mdash; third-party delivery payouts, commissions, and fees booked correctly",
  ],
  integrationsNote: "On different software? If it runs your service, manages your labor, or pays out to a bank account, we can reconcile it to QuickBooks. Ask on a discovery call.",
  // "From netted POS deposits to clean prime cost." — 4-phase process (process-diagram)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your concept, locations, POS, payroll, sales volume, and where the books are breaking. No pitch &mdash; just whether monthly reconciliation, a cleanup first, or QuickBooks setup is the right next step." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> to untangle netted POS deposits and rebuild COGS, plus correct QuickBooks setup &mdash; a restaurant chart of accounts and the class or location structure multi-unit reporting needs." },
    { num: "Phase 3", name: "Daily &amp; monthly reconciliation", body: "Daily sales reconciled from the POS summary and the books closed monthly, with prime cost, tips, and sales tax maintained per location &mdash; cash handling and deposits tied out so nothing walks." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly package with per-location prime cost and margin, then <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">advisory</a> as you grow &mdash; menu profitability, labor against sales, and whether the next location is ready." },
  ],
  // "Related services & industries." — 4 related (grid-2 buyer-card, h3). Drops old "All industries" wording? No — heading frozen "All industries".
  related: [
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", cta: "Explore cleanup &rarr;", body: "Untangle netted POS deposits and rebuild accurate COGS and prime cost before monthly work begins." },
    { title: "Payroll management", href: "/accounting/payroll-management/?intent=payroll", cta: "Explore payroll &rarr;", body: "Tipped-wage and tip-credit payroll integrated cleanly with your restaurant books." },
    { title: "Sales tax compliance", href: "/accounting/sales-tax-compliance/?intent=sales-tax", cta: "Explore sales tax &rarr;", body: "Sales tax tracked and remitted, by location, on time &mdash; never buried in revenue." },
    { title: "All industries", href: "/accounting/industries/", cta: "All industries &rarr;", body: "See how TechBrot tailors accounting to the way your industry actually runs." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row). No founder name in visible content.
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "POS reconciliation, prime cost/COGS, tips, sales tax, multi-location &mdash; income-tax filing coordinated with your CPA/EA" },
    { value: "Fixed-fee", label: "Written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 7 contract Q/A, verbatim questions, answers preserved (append-only enrichment). NO dedup.
  faq: [
    { q: "Why is restaurant accounting different from regular bookkeeping?", a: "Restaurants run on daily POS sales and razor-thin margins. A single day&rsquo;s POS summary bundles gross sales, comps and discounts, tips, sales tax collected, and card-processing fees, and each must be split apart. On top of that, profitability turns on prime cost (food and beverage cost plus labor), inventory has to be tracked, tips create payroll and reporting obligations, and sales tax must be remitted. Standard bookkeeping that only tracks company-wide income and expense can&rsquo;t tell you your prime cost or whether a location is actually making money." },
    { q: "Do you reconcile Toast, Square, and other POS systems to QuickBooks?", a: "Yes. Daily sales from POS systems such as Toast, Square, Clover, and Lightspeed are reconciled to QuickBooks, separating gross sales, comps and discounts, tips, sales tax collected, and processing fees, so revenue and deposits are accurate rather than netted into one number." },
    { q: "Can you track prime cost, food cost, and inventory?", a: "Yes. We track cost of goods sold and labor to calculate prime cost as a percentage of sales, maintain inventory where needed, and break out food versus beverage cost so you can see margin by category and act on it. Prime cost is the single most important number in a restaurant P&amp;L." },
    { q: "Do you handle tips, payroll, and sales tax?", a: "We handle the bookkeeping for tip pooling and allocation, integrate payroll so tipped-wage and tip-credit entries post correctly, and track sales tax collected for remittance. TechBrot does not file income taxes and does not provide legal advice on labor or tip law; we coordinate with your CPA, EA, and payroll or labor counsel as needed." },
    { q: "Can you handle multiple locations?", a: "Yes. We track each location separately in QuickBooks, typically using Classes or location tracking, so you get a per-location profit and loss and prime cost alongside a consolidated view of the whole group." },
    { q: "What does restaurant bookkeeping cost?", a: "Pricing depends on number of locations, sales volume, POS and payroll complexity, and whether inventory and multi-location reporting are in scope. Restaurant engagements are quoted as a fixed monthly fee against a written scope with no hourly billing. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "Do you offer advice, or just bookkeeping?", a: "Both. Accurate POS-reconciled books and real prime cost come first; then a Certified ProAdvisor can turn them into decisions &mdash; menu and item profitability, labor scheduling against sales, location performance, and cash-flow planning &mdash; through fractional CFO advisory. As automation handles routine data entry, this advisory layer is where the real value sits." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/restaurant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-restaurant-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Restaurant","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Restaurant Accounting & Bookkeeping","serviceType":"Restaurant accounting and QuickBooks bookkeeping","description":"Daily POS sales reconciliation, prime cost and cost-of-goods tracking, tip handling and payroll integration, sales-tax compliance, and multi-location bookkeeping for U.S. restaurants, bars, and cafes, delivered by Certified QuickBooks ProAdvisors. Coordinates with the client's CPA and EA; does not file income taxes or provide labor-law advice.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. restaurants, bars, cafes, and multi-location food businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Restaurant accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What restaurant accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Restaurant accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
