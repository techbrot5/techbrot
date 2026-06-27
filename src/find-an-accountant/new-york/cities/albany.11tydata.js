/* /find-an-accountant/new-york/cities/albany/ — t-location CITY page (NY child).
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-albany.txt) — the ONLY authority for the headings + the 8 FAQ — and the
 * live baseline old HTML (find-an-accountant/new-york/cities/albany/index.html, body read)
 * for BODY PROSE only. Structure + cobalt vocabulary follow the PROVEN t-location pillar
 * (new-york.njk / new-york.11tydata.js); a city page is LIGHTER than the pillar:
 * local intro · service routing · intake · FAQ.
 *
 * T6 content-to-goal: the REAL Albany/Capital-Region local content is preserved and
 * enriched — NY state-government hub, Capital Region, Albany County, the 8% combined
 * sales tax (4% NYS + 4% Albany County), no NYC UBT/CRT, grant/fund accounting, Tech
 * Valley. NOT a mad-lib swap of the NYC page.
 *
 * HONESTY (R5): no specific-client results asserted; no AggregateRating. Reviews = ONLY
 * the 2 real Clutch reviews (Heidi Schubert, Barbara Best). No founder/personal name in
 * visible content. Independent firm — does NOT file NY/NYC taxes; coordinates with the
 * client's CPA. Footer chrome H2s (Accounting/QuickBooks/Company/Network) are layout
 * chrome, not rendered here; "The monthly brief." (newsletter) intentionally dropped. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // IN-BRIEF / TL;DR — carried by the layout in-brief block. (H2 in body: The short version.)
  // Preserves the baseline TL;DR prose verbatim, enrichment append-only.
  tldr: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Albany businesses</strong> across the Capital Region &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Albany&rsquo;s combined sales tax is <strong>8%</strong> (4% New York State + 4% Albany County) &mdash; there is no separate city sales tax, and unlike New York City, there is <strong>no Unincorporated Business Tax or Commercial Rent Tax</strong>. We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror QAPage schema). Baseline copy preserved,
  // enrichment append-only. (H2: Albany bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Albany businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across Albany and the Capital Region</strong> &mdash; a named bookkeeper per file, working remotely on QuickBooks, with government contractors, healthcare, nonprofits, and professional-services firms." },
    { q: "What is the Albany sales tax rate?", a: "<strong>8% combined</strong> &mdash; 4% New York State plus 4% Albany County. There is no separate Albany city sales tax. It is destination-based and filed on one NYS Web File return." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly." },
    { q: "Does Albany have the NYC business taxes?", a: "<strong>No.</strong> The Unincorporated Business Tax and Commercial Rent Tax are New York City&ndash;only. Albany businesses deal with the 8% sales tax and standard New York State and federal taxes &mdash; a simpler tax layer than NYC." },
    { q: "Do you work with government contractors and nonprofits?", a: "Yes &mdash; the Capital Region&rsquo;s economy runs on state government, which means grant-funded nonprofits and government contractors with specific reporting needs. We keep grant tracking and fund accounting clean in QuickBooks." },
  ],

  // LOCAL CONTEXT — the un-clonable band. Real Albany/Capital-Region prose preserved
  // verbatim from the baseline. (H2: Why Capital Region books have their own character.)
  localLead: "Albany isn&rsquo;t New York City &mdash; it&rsquo;s the state capital, and its economy is shaped by government, the institutions around it, and a growing Tech Valley corridor, with its own bookkeeping wrinkles that generic, software-only bookkeeping tends to miss.",
  localBody: [
    "As the seat of New York State government, Albany&rsquo;s economy is anchored by the public sector &mdash; and that ripples through the books of the businesses around it. Grant-funded nonprofits need fund accounting and grant-by-grant tracking, not a single lump P&amp;L. Government contractors and professional-services firms serving state agencies need clean records for compliance and audit. The University at Albany, the SUNY system, and the Capital Region&rsquo;s hospitals add research- and healthcare-adjacent businesses, while the broader Tech Valley corridor &mdash; nanotech and advanced manufacturing stretching toward Saratoga &mdash; brings R&amp;D-heavy firms. Add Capital Region retail and restaurants collecting the 8% rate, and the bookkeeping has to flex across fund accounting, compliance, and standard commerce.",
    "That&rsquo;s where software-only bookkeeping struggles. When a nonprofit&rsquo;s grants aren&rsquo;t tracked separately, reporting to funders breaks. When a government contractor&rsquo;s books aren&rsquo;t audit-clean, a compliance review becomes a crisis. When sales tax isn&rsquo;t reconciled against the 8% Albany County rate, the quarterly return drifts. TechBrot keeps a named bookkeeper on your file who understands a Capital Region organization &mdash; often grant- or contract-funded &mdash; keeps books differently, and builds that into the monthly close.",
    "The result: books that reflect how an Albany business or nonprofit actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the sales tax and income returns, and reporting to funders, is fast and accurate.",
  ],

  // AREAS — Capital Region coverage. (H2: Albany areas we serve.) Baseline preserved.
  areas: [
    { name: "Downtown Albany", note: "Government contractors, professional services, nonprofits" },
    { name: "University / uptown", note: "Research-adjacent firms, healthcare, education" },
    { name: "Colonie / Guilderland", note: "Retail, professional services, trades" },
    { name: "Troy / Rensselaer", note: "Tech, manufacturing, small business" },
    { name: "Schenectady", note: "Manufacturing, healthcare, retail" },
    { name: "Saratoga / Tech Valley", note: "R&amp;D, advanced manufacturing, hospitality" },
  ],

  // TAX CARD — single local fact, 3 cells (grid-3, NOT stat-row — stat-row overflows at 768).
  // (H2: Albany sales tax, at a glance.) Baseline facts preserved.
  taxEyebrow: "The Albany tax fact we build into your books",
  tax: [
    { fig: "8%", desc: "Combined sales tax in Albany &mdash; 4% New York State plus 4% Albany County. No separate city sales tax. Tracked and reconciled in QuickBooks for an accurate quarterly NYS return." },
    { fig: "1", desc: "Web File return &mdash; New York centralizes filing, so however many jurisdictions you sell into, you file one NYS sales-tax return. Destination-based: you charge the rate where the customer takes delivery." },
    { fig: "$110", desc: "Clothing &amp; footwear under $110 per item are exempt from the 4% state rate statewide; Albany County&rsquo;s local share may still apply. We flag taxable-vs-exempt so the books are right." },
  ],

  // INDUSTRIES — Albany verticals, each links to the NY industry page. (H2: Industry-specific
  // bookkeeping for Albany businesses.) Baseline chips preserved.
  industriesLede: "Each links to our dedicated New York industry page, with the local wrinkles built in.",
  industries: [
    { name: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/" },
    { name: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/" },
    { name: "Construction", href: "/find-an-accountant/new-york/industries/construction/" },
    { name: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/" },
    { name: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/" },
    { name: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/" },
  ],

  // VALUE STACK — 4 services, each a real H3. (H2: Complete bookkeeping, locally aware.
  // + H3: Monthly bookkeeping · Cleanup & catch-up · QuickBooks management · Sales-tax-ready books)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with Albany sales tax tracked. <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">New York monthly bookkeeping &rarr;</a>" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Behind on the books? We get the file CPA-ready, then keep it clean. <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">New York cleanup &rarr;</a>" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop. <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">NY QuickBooks accountant &rarr;</a>" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your quarterly NYS sales-tax return reconciles cleanly. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax help &rarr;</a>" },
  ],

  // ADVISORY — standing brand line is the H2. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "In a government-anchored economy, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your grants reconcile to funder reports, your contract work is audit-clean, or cash will cover payroll between grant disbursements. That judgment is what a named Albany bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (R5)
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team. — carries the expert-review band;
  //  reviews render above it as proof.) review-card with __fact/__role only.
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // EXPERT REVIEW — firm-level, no founder name. trust-row credential cells. (under H2:
  // Reviewed by the TechBrot Certified ProAdvisor team.) Baseline copy preserved.
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving Albany and Albany County businesses. The Albany combined sales-tax rate (8% = 4% New York State + 4% Albany County) reflects New York State Department of Taxation and Finance rates current as of the date below and is reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Lead Certified QuickBooks ProAdvisor &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYS Dept of Taxation &amp; Finance &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  // INTAKE — dual-path call + shared intake-form partial. (H2: Albany bookkeeping questions.
  // — that is the FAQ H2; intake uses its own non-contract framing kept minimal.)
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // FAQ — 8 Q/A VERBATIM from the contract. visible = FAQPage schema. Enrichment append-only.
  // (H2: Albany bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Albany business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across Albany and the Capital Region. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Capital Region realities, from the 8% Albany County sales tax to grant and fund accounting, that a generic bookkeeper often misses." },
    { q: "What is the Albany sales tax rate?", a: "Albany&rsquo;s combined sales tax is 8% &mdash; 4% New York State plus 4% Albany County. There is no separate Albany city sales tax. New York is destination-based, so you charge the rate where your customer takes delivery, and you file one NYS Web File sales-tax return regardless of how many jurisdictions you sell into. We track it in QuickBooks so your quarterly return reconciles to the books." },
    { q: "Does Albany have the NYC Unincorporated Business Tax or Commercial Rent Tax?", a: "No &mdash; and that&rsquo;s a meaningful simplification. The Unincorporated Business Tax (UBT) and Commercial Rent Tax (CRT) are New York City&ndash;only taxes. An Albany business deals with the 8% combined sales tax plus standard New York State and federal income taxes, with no separate city-level business tax to track. Your books are simpler than a comparable NYC business&rsquo;s &mdash; we keep them that way." },
    { q: "How much does an Albany bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. We scope transparently before any work begins, so there are no surprises." },
    { q: "Do you work with grant-funded nonprofits and government contractors?", a: "Yes &mdash; this is central to the Capital Region. State government anchors the local economy, which means many grant-funded nonprofits and government contractors with specific reporting and compliance needs. We keep grant-by-grant tracking, fund accounting, and audit-ready records clean in QuickBooks, so your reporting to funders and any compliance review goes smoothly. We handle the bookkeeping; your CPA advises on filings and audits." },
    { q: "Can you clean up a messy Albany QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Albany businesses and nonprofits fall behind in their books for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you work with Capital Region healthcare, nonprofits, and professional services?", a: "Yes &mdash; those are core Capital Region verticals, alongside government contracting and Tech Valley R&amp;D firms. Each has specific needs: nonprofits need fund accounting and grant tracking, healthcare practices need insurance-receipt and payroll reconciliation, and professional-services firms need clean books for partner reporting. See our New York industry pages for the detail." },
    { q: "How do we get started in Albany?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Albany situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/albany/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Albany Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Albany, NY businesses. Albany County 8% sales tax tracked, CPA-ready books, fixed-fee. Serving the Capital Region remotely.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-albany.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-albany-in-brief-text","#ny-albany-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"Albany"}]},
        {"@type":"Service","@id":url+"#service","name":"Albany Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Albany and Capital Region businesses, with Albany County 8% sales tax tracked and CPA-ready statements produced monthly. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or federal tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"City","name":"Albany","sameAs":"https://en.wikipedia.org/wiki/Albany,_New_York"},
          {"@type":"AdministrativeArea","name":"Albany County, New York"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses, Capital Region nonprofits, government contractors, healthcare practices, and professional-services firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"Albany bookkeeping — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
