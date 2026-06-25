/* /find-an-accountant/indiana/sales-tax-help/ — t-money IN SERVICE child (state-specific
 * sales-tax help — a money/compliance page, NOT an industry page). Structure mirrors the same-named
 * NY exemplar (find-an-accountant/new-york/sales-tax-help.*); JSON front-matter lives in the .njk;
 * this file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is built from the same `faq` array the visible faq
 * renders — single source of truth.
 *
 * IN FIGURES USED (IN-FACTS.md — the ONLY source): flat 7% statewide sales tax; NO local sales tax
 * anywhere (contrast NY's layered local rates); use tax on untaxed out-of-state purchases; economic
 * nexus for remote sellers (threshold framed qualitatively — the specific dollar figure is NOT in
 * IN-FACTS, so it is NOT quoted; the DOR is linked for the current figure); Registered Retail
 * Merchant Certificate registration; Sales Tax Help priced from $250/mo. NOTE: Indiana does NOT tax
 * SaaS — unlike NY — so no SaaS-taxability claim is made.
 *
 * HONESTY: TechBrot does NOT file the Indiana sales-tax return (or any IN/federal return) and does
 * NOT represent clients before the Department of Revenue — it configures and maintains the tracking
 * in QuickBooks, reconciles the liability, and prepares CPA-ready figures; the business or its CPA
 * files. No invented reviews/stats/clients/outcomes; no AggregateRating. No founder/personal name in
 * visible content (firm-level review byline). provider = #organization; areaServed = State Indiana;
 * the WebPage carries reviewedBy #david-westgate. NO PostalAddress/LocalBusiness. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Indiana sales tax is a single flat 7% statewide rate</strong> &mdash; and, unusually, there is <strong>no local sales tax anywhere in the state</strong>: no county or city add-ons to track, unlike the layered rates in states such as New York. That clean structure makes Indiana one of the simpler states to configure in QuickBooks, but the 7% still has to be applied correctly to taxable goods and services, with exempt sales (resale, manufacturing inputs, agricultural production) handled and exemption certificates kept on file. Two things catch businesses out: <strong>use tax</strong> &mdash; the matching 7% owed on out-of-state and online purchases where no Indiana sales tax was charged &mdash; and <strong>economic nexus</strong>, which requires a remote seller to register for an Indiana Registered Retail Merchant Certificate and collect the 7% once its Indiana sales cross the state threshold (check the current figure with the Department of Revenue). TechBrot tracks all of this in <a href=\"/quickbooks/online/\">QuickBooks</a>, reconciles your sales-tax liability to the books, and prepares CPA-ready figures from $250/mo. We don&rsquo;t file the return or represent you &mdash; you or your CPA file with the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>, and we keep the numbers right. All 92 Indiana counties.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana sales tax, in five questions.)
  aiSummary: [
    { q: "What is the Indiana sales tax rate?", a: "<strong>A flat 7% statewide</strong> &mdash; and there is <strong>no local sales tax</strong> anywhere in Indiana, so no county or city add-ons to track. The same 7% applies in Indianapolis, Fort Wayne, Evansville, and every other jurisdiction, which makes QuickBooks setup simpler than in layered-rate states." },
    { q: "What is Indiana use tax?", a: "The companion to sales tax: <strong>7% owed on out-of-state or online purchases</strong> where no Indiana sales tax was collected at the time of sale. Businesses commonly miss it on equipment, supplies, and software bought from out-of-state vendors &mdash; we flag and track it in the books so it&rsquo;s accrued, not forgotten." },
    { q: "When must a remote seller collect Indiana sales tax?", a: "Once it crosses Indiana&rsquo;s <strong>economic-nexus threshold</strong> (a set level of sales into the state), a remote seller must register for an Indiana Registered Retail Merchant Certificate and collect and remit the 7%. We monitor your Indiana sales so you know when you&rsquo;re approaching it; confirm the current threshold with the Department of Revenue." },
    { q: "What&rsquo;s taxable and what&rsquo;s exempt in Indiana?", a: "Most tangible personal property is taxable at 7%. Notable exemptions include sales for resale, <strong>manufacturing machinery and inputs</strong>, and items used directly in agricultural production &mdash; all requiring a valid exemption certificate. Getting taxable-vs-exempt categorization right in the chart of accounts is exactly what we build into your bookkeeping." },
    { q: "Does TechBrot file my Indiana sales-tax return?", a: "<strong>No.</strong> We keep the books filing-ready &mdash; tracking the 7% and use tax, categorizing taxable vs exempt, and reconciling the liability &mdash; and prepare CPA-ready figures. <strong>You or your CPA file the return with the Department of Revenue.</strong> We do not file Indiana returns or represent clients before the DOR." },
  ],

  // WHY IT TRIPS BUSINESSES UP — body prose + the three reasons as grid-3 lift cards.
  // (H2: Why Indiana sales tax still trips up so many businesses)
  whyBody: [
    "Indiana&rsquo;s sales tax is structurally simple &mdash; <strong>one flat 7% rate, no local add-ons</strong> &mdash; yet businesses still get it wrong for three reasons. First, owners who moved from or also sell into layered-rate states <strong>over-engineer the setup</strong>, building county and city rates that don&rsquo;t exist in Indiana, or under-collect by assuming Indiana works like a destination-based state. Second, <strong>use tax</strong> quietly accrues on out-of-state and online purchases where no Indiana tax was charged, and it&rsquo;s routinely forgotten until an audit. Third, <strong>economic nexus</strong> pulls remote sellers into Indiana&rsquo;s system the moment their in-state sales cross the threshold, and out-of-state sellers often don&rsquo;t notice until they&rsquo;re already behind.",
    "Because the rate is the same everywhere in Indiana, the job isn&rsquo;t chasing jurisdictions &mdash; it&rsquo;s applying the 7% to the right transactions, handling exemptions with proper certificates, and accruing use tax where it belongs. That&rsquo;s a bookkeeping-discipline problem, not a rate-lookup problem.",
    "None of this is a reason to fear selling in Indiana &mdash; it&rsquo;s a reason to have it tracked properly. When your books categorize taxable vs. exempt sales correctly, accrue use tax, and reconcile sales-tax liability every month, the return becomes a non-event instead of a scramble.",
  ],
  whyCards: [
    { signal: "One rate, no local layers", title: "Flat 7%, statewide.", body: "Indiana has a single 7% sales-tax rate with no county or city add-ons anywhere &mdash; simpler than layered-rate states, but only if QuickBooks is configured for it. Owners from destination-based states often build rates that don&rsquo;t exist or mis-source sales. The fix is one clean 7% rate applied to taxable items, reconciled monthly." },
    { signal: "The tax you forget", title: "Use tax on out-of-state buys.", body: "Indiana levies a matching 7% use tax on goods bought from out-of-state or online vendors that didn&rsquo;t charge Indiana sales tax &mdash; equipment, supplies, software. It&rsquo;s routinely missed until an audit. The fix is flagging untaxed purchases in the books and accruing the use tax every period so it&rsquo;s never a surprise." },
    { signal: "Reaches remote sellers", title: "Economic nexus for online sales.", body: "A remote seller must register for an Indiana Registered Retail Merchant Certificate and collect the 7% once its Indiana sales cross the state&rsquo;s economic-nexus threshold &mdash; and out-of-state sellers often under-collect without realizing it. The fix is monitoring your Indiana sales so you register and collect on time; confirm the current threshold with the DOR." },
  ],

  // SCOPE — honest do/don't split (grid-2; checklist inside each col).
  // (H2: How we help with Indiana sales tax.)
  scopeDo: [
    "The flat 7% sales tax tracked correctly in QuickBooks (no phantom local rates)",
    "Taxable vs. exempt categorization (resale, manufacturing inputs, agricultural production)",
    "Use tax accrued on untaxed out-of-state and online purchases",
    "Monthly reconciliation of sales-tax liability to the books",
    "CPA-ready figures prepared for the Department of Revenue return each period",
    "Monitoring your Indiana sales so you know when you approach economic nexus",
  ],
  scopeDont: [
    "Filing the sales-tax return (Form ST-103) with the Department of Revenue",
    "Registering for the Registered Retail Merchant Certificate (we guide; you/CPA register)",
    "Filing Indiana or federal income-tax returns",
    "Representation in a sales-tax audit or before the Department of Revenue",
    "Formal tax opinions &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A tax engine can apply a rate; it can&rsquo;t tell you that a run of out-of-state equipment purchases just created a use-tax liability, or that your online sales into Indiana are about to cross economic nexus. That judgment &mdash; knowing which Indiana rule applies to your specific business &mdash; is what turns sales-tax tracking from a liability into a non-issue.",
    "Once your sales-tax liability reconciles every month and use tax is accrued where it belongs, the question shifts from &ldquo;will the return reconcile?&rdquo; to &ldquo;what do the numbers tell me to do next?&rdquo; That&rsquo;s where reconciled books become real decisions &mdash; cash-flow timing around remittances, margin on taxable vs. exempt lines, and when to plan for nexus in new states. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, answer-first, Indiana-specific. visible faq = FAQPage schema (same array).
  // 1 call-intent answer carries the phone (cost question). (H2: Indiana sales tax questions.)
  faq: [
    { q: "What is the sales tax rate in Indiana?", a: "Indiana has a single flat 7% statewide sales tax, and &mdash; unusually &mdash; no local sales tax anywhere in the state. The same 7% applies in Indianapolis, Fort Wayne, Evansville, and every other county and city, with no add-ons to track. That makes Indiana simpler to configure in QuickBooks than layered-rate states, but the 7% still has to be applied correctly to taxable goods and services." },
    { q: "What is Indiana use tax and why does it matter?", a: "Use tax is the companion to sales tax: a matching 7% owed on goods you buy from out-of-state or online vendors that didn&rsquo;t charge Indiana sales tax &mdash; equipment, supplies, software, furniture. It&rsquo;s one of the most commonly missed Indiana obligations because nothing prompts you at purchase. We flag untaxed purchases in your books and accrue the use tax each period so it&rsquo;s recorded rather than discovered in an audit." },
    { q: "When does a remote or online seller have to collect Indiana sales tax?", a: "Once it has nexus &mdash; physical (an office, employees, or inventory in Indiana) or economic. A remote seller crosses economic nexus when its sales into Indiana reach the state&rsquo;s threshold, at which point it must register for an Indiana Registered Retail Merchant Certificate and collect and remit the 7%. We monitor your Indiana sales so you know when you&rsquo;re approaching it; confirm the current threshold with the Indiana Department of Revenue." },
    { q: "How much does Indiana sales tax help cost?", a: "It starts at <strong>$250/mo</strong> &mdash; setup of correct 7% and use-tax tracking plus ongoing monthly support &mdash; fixed-fee against a written scope and priced after a free discovery call. Final pricing depends on transaction volume, exemption complexity, and whether your books need cleanup first. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "What&rsquo;s taxable and what&rsquo;s exempt in Indiana?", a: "Most tangible personal property is taxable at 7%. Common exemptions include sales for resale, machinery and inputs used directly in manufacturing, and items used directly in agricultural production &mdash; each requiring a valid exemption certificate kept on file. Most services are not taxable in Indiana. Getting taxable-vs-exempt categorization right in the chart of accounts, and keeping exemption certificates, is exactly the kind of Indiana-specific call we build into your bookkeeping." },
    { q: "Do you set up Indiana sales tax correctly in QuickBooks?", a: "Yes. Because Indiana is a clean flat 7% with no local rates, the key is configuring QuickBooks to apply the single rate to taxable items, map exempt sales and resale/exemption certificates, accrue use tax on untaxed purchases, and reconcile the sales-tax liability monthly &mdash; rather than importing the phantom county and city rates that owners from layered-rate states often add by mistake. We set it up so your return reconciles to the books from the first period." },
    { q: "Does TechBrot file my Indiana sales tax return?", a: "No. We handle the bookkeeping side: tracking the 7% sales and use tax in QuickBooks, reconciling your sales-tax liability to the books, and preparing accurate figures each period. The return itself (Form ST-103) is filed with the Indiana Department of Revenue &mdash; by you or your CPA. We make sure the numbers are right and CPA-ready; we don&rsquo;t file the return or represent you before the Department of Revenue." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; serving all 92 Indiana counties remotely" },
    { label: "Standards", detail: "Verified vs the Indiana Department of Revenue &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Out of scope", detail: "No sales-tax or income-tax filing &middot; no representation before the Department of Revenue &middot; coordinated with your CPA/EA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — sibling IN pages (around the engagement).
  related: [
    { href: "/find-an-accountant/indiana/county-income-tax-help/", title: "Indiana county income tax help", body: "The 92-county local income tax (LIT) &mdash; withholding set up in QuickBooks Payroll by each employee&rsquo;s county of residence, so payroll and filings reconcile. Filed by you or your CPA." },
    { href: "/find-an-accountant/indiana/quickbooks-setup/", title: "Indiana QuickBooks setup", body: "The flat 7% sales tax and county-LIT payroll configured from day one &mdash; the right edition, an industry chart of accounts, and clean books from the start." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/sales-tax-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Sales Tax Help for Businesses","description":"Indiana sales tax help for businesses — the flat 7% statewide rate with no local sales tax, use tax on out-of-state purchases, economic nexus for remote sellers, and taxable-vs-exempt categorization — tracked accurately in QuickBooks and reconciled to the books by a named Certified ProAdvisor. Does not file the Indiana return; coordinates with the client's CPA.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-sales-tax-help-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-salestax-summary","#in-svc-salestax-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Sales Tax Help"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Sales Tax Support","serviceType":"Sales tax compliance bookkeeping support","description":"Flat 7% Indiana sales-and-use-tax tracking in QuickBooks, taxable-vs-exempt categorization, use-tax accrual, liability reconciliation, and CPA-ready figure preparation for Indiana businesses. TechBrot prepares the numbers; the return is filed with the Department of Revenue by the client or CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana sales-tax or income-tax returns and does not represent clients before the Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","name":"Indiana businesses collecting sales and use tax"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"250","description":"Sales-and-use-tax tracking from $250/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
