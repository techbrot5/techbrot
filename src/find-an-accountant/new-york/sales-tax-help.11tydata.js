/* /find-an-accountant/new-york/sales-tax-help/ — t-location NY SERVICE child
 * (state-specific sales-tax help page — NOT an industry page). Sources: FROZEN
 * EQUITY CONTRACT (contract-ny-svc-salestax.txt) — the ONLY authority for the
 * headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/sales-tax-help/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors bookkeeping-services.11tydata.js:
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array the
 * visible faq__list renders from — single source of truth.
 *
 * MIGRATION-PROTOCOL (content-to-goal, visual-floor):
 *   T2 — every contract H1/H2/H3 rendered verbatim at its exact level; entities kept;
 *        footer chrome (Accounting/QuickBooks/Company/Network) + the newsletter
 *        ("The monthly brief.") intentionally NOT rendered — global chrome owns them.
 *   T3 — no collapse: every contract heading carries real content.
 *   T4 — 8 contract Q/A as faq__list AND FAQPage from the same array; verbatim/flat;
 *        enrichment is append-only (never reword/remove the original answer).
 *   T6 — content-to-goal: real NY sales-tax specificity — NYS DTF registration
 *        (Certificate of Authority / Form DTF-17), the 8.875% NYC combined rate
 *        (4% state + 4.5% city + 0.375% MCTD) + destination-based rates statewide,
 *        post-Wayfair economic nexus ($500K + 100 txn), taxable vs exempt (the $110
 *        clothing exemption, prepared food, SaaS), filing-period setup
 *        (monthly/quarterly/annual), NYS Web File, and keeping the sales-tax-liability
 *        account reconciled and filing-ready. Routes to the NY pillar/service pages
 *        where the contract links them.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. No AggregateRating,
 * no review-card (the 2 real Clutch reviews live on the NY pillar and are not duplicated
 * here). The baseline named-reviewer line ("David Westgate · 40+ years…") is reframed to
 * firm-level. No founder/personal name in visible content (firm-level review byline only).
 * SCOPE HONESTY: preparing sales-tax returns and keeping books filing-ready is legitimate
 * bookkeeper/ProAdvisor scope — the page FOLLOWS the baseline framing of what the firm does
 * (tracks destination-based sales tax in QuickBooks, reconciles the liability, prepares
 * CPA-ready quarterly figures). Boundary kept: the firm does NOT file the sales-tax return
 * (filed via NYS Web File by the client or CPA), does NOT handle income-tax returns, and
 * does NOT represent the client in a tax controversy/audit — that is the CPA/representative.
 * Independent firm — not affiliated with Intuit Inc. NY sales-tax facts reflect current
 * NYS DTF guidance. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>New York sales tax is destination-based</strong>: the rate follows your customer&rsquo;s delivery location, topping out at <strong>8.875% in New York City</strong> (4% state + 4.5% city + 0.375% MCTD), with county rates that vary statewide (Buffalo is 8.75%). You must register for a <strong>Certificate of Authority</strong> (Form DTF-17, through New York Business Express) before making any taxable sale, and you collect once you hit nexus &mdash; physical, or economic at <strong>more than $500,000 in receipts AND more than 100 transactions</strong> over the prior four sales-tax quarters. Most businesses file <strong>quarterly, due the 20th</strong> after each quarter, and must file even with zero sales. New York also taxes <strong>prewritten software, SaaS, and certain services</strong> that other states exempt, while exempting clothing and footwear under $110 per item. TechBrot tracks all of this in <a href=\"/quickbooks/online/\">QuickBooks</a>, reconciles your sales-tax liability to the books, and prepares CPA-ready quarterly figures. We don&rsquo;t file the return or represent you &mdash; you or your CPA file via <strong>NYS Web File</strong>, and we keep the numbers right. All 62 New York counties, NYC to upstate.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York sales tax, in five questions.)
  aiSummary: [
    { q: "What is the NYC sales tax rate?", a: "<strong>The New York City combined sales tax rate is 8.875%</strong> &mdash; 4% New York State, 4.5% NYC local, and a 0.375% Metropolitan Commuter Transportation District (MCTD) surcharge. New York is destination-based, so the rate is set by the customer&rsquo;s delivery location and varies by county statewide (for example, Buffalo is 8.75%)." },
    { q: "When must a business collect NY sales tax?", a: "Once it has nexus &mdash; physical (an office, employee, or inventory in New York) or <strong>economic: more than $500,000 in receipts AND more than 100 transactions</strong> delivered into New York over the prior four sales-tax quarters. Both conditions must be met for economic nexus, and you register for a Certificate of Authority before collecting." },
    { q: "Do I need a Certificate of Authority?", a: "Yes &mdash; you must register on <strong>Form DTF-17</strong> through New York Business Express and hold a Certificate of Authority <strong>before</strong> making any taxable sales. Collecting without one, or selling taxable goods unregistered, carries penalties." },
    { q: "Is SaaS taxable in New York?", a: "<strong>Yes.</strong> New York taxes prewritten/canned software and SaaS as tangible personal property, plus most digital products such as e-books and music. This surprises many tech and service businesses &mdash; getting taxability right in the books is exactly the New York-specific call we build into your bookkeeping." },
    { q: "What if I&rsquo;m behind on sales tax?", a: "New York treats collected sales tax as money <strong>held in trust</strong>, so it escalates faster than income tax. Options: an Installment Payment Agreement, the Voluntary Disclosure and Compliance program, or an Offer in Compromise for genuine hardship. Reconcile the books and act before a Notice and Demand becomes a warrant &mdash; representation itself is your CPA&rsquo;s or attorney&rsquo;s role." },
  ],

  // WHY IT TRIPS BUSINESSES UP — body prose carried verbatim from baseline + the three reasons as grid-3 buyer-cards.
  // (H2: Why New York sales tax trips up so many businesses)
  whyBody: [
    "New York is one of the harder states to get right, for three reasons. First, it&rsquo;s <strong>destination-based across a patchwork of jurisdictions</strong> &mdash; the rate depends on where your customer is, not where you are, so a single business can owe dozens of different combined rates. Second, New York <strong>taxes things other states exempt</strong> &mdash; SaaS, prewritten software, and certain services (such as repairs, installation, maintenance, and information services) &mdash; so out-of-state sellers under-collect without realizing it. Third, the state treats collected sales tax as <strong>money held in trust</strong>, which means it pursues sales-tax problems faster and harder than income-tax ones.",
    "Destination-based sourcing means the sales tax rate is determined by the buyer&rsquo;s delivery location, not the seller&rsquo;s. A New York business shipping statewide must charge the correct combined rate for each customer&rsquo;s jurisdiction &mdash; which is why accurate, automated tracking in <a href=\"/quickbooks/online/\">QuickBooks</a> matters more here than in origin-based states.",
    "None of this is a reason to fear selling in New York &mdash; it&rsquo;s a reason to have it tracked properly. When your books categorize taxable vs. exempt sales correctly and reconcile sales-tax liability every month, the quarterly return becomes a non-event instead of a scramble.",
  ],
  whyCards: [
    { signal: "Many rates, one business", title: "Destination-based across jurisdictions.", body: "The rate follows the customer&rsquo;s delivery location, so a single statewide seller can owe dozens of combined rates &mdash; 8.875% into NYC, 8.75% into Buffalo, lower upstate. Origin-state habits under- or over-collect here. The fix is destination-based rates tracked per sale in QuickBooks, reconciled monthly." },
    { signal: "Taxes what others exempt", title: "SaaS, software &amp; certain services.", body: "New York taxes prewritten software, SaaS, and services such as repairs, installation, maintenance, data processing, and information services &mdash; categories many other states exempt. Out-of-state sellers under-collect without realizing it. The fix is correct taxable-vs-exempt categorization built into your chart of accounts." },
    { signal: "Held in trust", title: "Sales tax escalates fast.", body: "New York treats collected sales tax as money held in trust, so it pursues sales-tax problems faster and harder than income-tax ones &mdash; a missed &lsquo;zero return&rsquo; still triggers penalties, and unpaid trust funds can become a personal-liability warrant. The fix is a sales-tax-liability account reconciled every month and figures ready to file on time." },
  ],

  // SCOPE — honest do/don't split (grid-2; checks-list inside each col). 2 frozen H3s verbatim.
  // (H2: How we help with New York sales tax. + h3 TechBrot handles / h3 You or your CPA handle)
  scopeDo: [
    "Destination-based sales tax tracked correctly in QuickBooks",
    "Taxable vs. exempt categorization (incl. SaaS, services, the $110 clothing exemption)",
    "Filing-period setup (monthly / quarterly / annual) matched to your volume",
    "Monthly reconciliation of sales-tax liability to the books",
    "CPA-ready quarterly figures, prepared for NYS Web File every period",
    "Flagging when you approach the $500K / 100-transaction economic nexus",
  ],
  scopeDont: [
    "Filing the sales-tax return via NYS Web File",
    "Registering for the Certificate of Authority (we guide; you/CPA file Form DTF-17)",
    "Filing New York or federal income-tax returns",
    "Representation in a sales-tax audit or before the Tax Department",
    "Formal tax opinions &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "A tax engine can apply a rate; it can&rsquo;t tell you that you&rsquo;re three months from crossing economic nexus, or that a new product line is taxable when you&rsquo;ve been treating it as exempt. That judgment &mdash; knowing which New York rule applies to your specific business &mdash; is what turns sales-tax tracking from a liability into a non-issue.",
    "Once your sales-tax liability reconciles every month and your filing period matches your volume, the question shifts from &ldquo;will the return reconcile?&rdquo; to &ldquo;what do the numbers tell me to do next?&rdquo; That&rsquo;s where reconciled books become real decisions &mdash; cash-flow timing around quarterly payments, margin on taxable vs. exempt lines, and when to plan for nexus in new states. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York sales tax questions.)
  faq: [
    { q: "What is the sales tax rate in New York City?", a: "The New York City combined sales tax rate is 8.875% &mdash; 4% New York State, 4.5% NYC local, and a 0.375% Metropolitan Commuter Transportation District (MCTD) surcharge. New York is destination-based, so the rate follows your customer&rsquo;s delivery location: a sale into NYC is 8.875%, while Buffalo is 8.75%. Rates vary by county across the state&rsquo;s jurisdictions." },
    { q: "When does a business have to collect New York sales tax?", a: "You must register for a Certificate of Authority and collect New York sales tax once you have nexus &mdash; physical (an office, employee, or inventory in New York) or economic. New York&rsquo;s economic-nexus threshold is more than $500,000 in gross receipts AND more than 100 transactions delivered into the state over the prior four sales-tax quarters; both conditions must be met. Once registered, you collect at the destination rate." },
    { q: "What is a Certificate of Authority and do I need one?", a: "A Certificate of Authority (applied for on Form DTF-17 through New York Business Express) is the registration that legally lets you collect New York sales tax. You must have it before making any taxable sales &mdash; collecting without one, or selling taxable goods without registering, exposes you to penalties. We help confirm whether you need one and that your QuickBooks is set up to collect correctly." },
    { q: "How often do I file New York sales tax returns?", a: "Most New York businesses file quarterly, with returns due the 20th of the month after each quarter (March 20, June 20, September 20, December 20). High-volume filers (over $300,000 in a quarter) move to monthly; very small filers may file annually. Critically, you must file a return even with zero taxable sales &mdash; a missed &lsquo;zero return&rsquo; still triggers penalties." },
    { q: "Is SaaS or software taxable in New York?", a: "Yes. New York generally taxes prewritten/canned software and Software-as-a-Service (SaaS) as the sale of tangible personal property, along with most digital products such as e-books and music. This catches many tech and service businesses by surprise. Getting taxability right in your books is exactly the kind of New York-specific call we build into your bookkeeping." },
    { q: "What&rsquo;s taxable and what&rsquo;s exempt in New York?", a: "Most tangible goods are taxable. Notable exemptions include clothing and footwear under $110 per item (exempt from both state and NYC tax), most unprepared grocery food, and sales for resale with a valid resale certificate (Form ST-120). Most services are not taxable in New York, but certain categories are &mdash; repairs, installation, maintenance, data processing, and information services among them &mdash; where they aren&rsquo;t in other states, which is why New York sales tax trips up out-of-state sellers." },
    { q: "What happens if I&rsquo;m behind on New York sales tax?", a: "New York treats collected sales tax as money held in trust, so sales-tax problems escalate faster than income-tax ones. Options exist: an Installment Payment Agreement (IPA), the Voluntary Disclosure and Compliance program (which can waive penalties and avoid criminal exposure for unregistered businesses that come forward), and, for genuine hardship, an Offer in Compromise. The right move is to get the books reconciled and act before a Notice and Demand turns into a warrant &mdash; book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> to get the numbers straight." },
    { q: "Does TechBrot file my New York sales tax return?", a: "We handle the bookkeeping side: tracking destination-based sales tax in QuickBooks, reconciling your sales-tax liability to the books, and preparing accurate figures each quarter. The return itself is filed through New York State Web File &mdash; by you or your CPA. We make sure the numbers are right and CPA-ready; we don&rsquo;t file the return or represent you before the Tax Department." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; baseline named-reviewer line reframed to firm-level).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYS Dept of Taxation &amp; Finance &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Out of scope", detail: "No sales-tax or income-tax filing &middot; no representation before the Tax Department &middot; coordinated with your CPA/EA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/sales-tax-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Sales Tax Help for Businesses","description":"New York sales tax help for businesses — the 8.875% NYC combined rate, destination-based sourcing, the $500K economic-nexus threshold, Certificate of Authority registration, quarterly filing, and SaaS taxability — tracked accurately in QuickBooks and reconciled to the books by a named Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-sales-tax-help.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-salestax-summary","#ny-svc-salestax-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Sales Tax Help"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Sales Tax Support","serviceType":"Sales tax compliance bookkeeping support","description":"Destination-based New York sales tax tracking in QuickBooks, liability reconciliation, and quarterly figure preparation for New York businesses. TechBrot prepares CPA-ready numbers; the return is filed via NYS Web File by the client or CPA. Independent Certified QuickBooks ProAdvisor firm; does not file NY sales-tax or income-tax returns and does not represent clients before the Tax Department.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","name":"New York businesses collecting sales tax"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Sales-tax tracking within fixed-fee monthly bookkeeping from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
