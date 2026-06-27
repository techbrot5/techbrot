/* /find-an-accountant/delaware/gross-receipts-tax-help/ — t-money DE SERVICE child
 * (Delaware-specific gross-receipts-tax help — a money/compliance page, NOT an industry
 * page). Authority for every DE figure on this page: _build/strategy/DE-FACTS.md (the ONLY
 * source for DE numbers) + the DE pillar (find-an-accountant/delaware.*) GRT framing, kept
 * consistent. Structure mirrors the same-named NY exemplar
 * (find-an-accountant/new-york/sales-tax-help.11tydata.js): JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is built
 * from the same `faq` array the visible faq renders from — single source of truth.
 *
 * DE FIGURES USED (DE-FACTS.md): no state or local sales tax (0%); gross receipts tax on the
 * SELLER at 0.0945%–1.9914% by business activity (petroleum higher); monthly/quarterly
 * exclusion amount reduces the taxable base; filed monthly or quarterly with the Division of
 * Revenue; QuickBooks must track receipts by business-activity category; DE corporate income
 * tax 8.7% (owed in ADDITION to GRT); Gross Receipts Tax Help priced from $500 (setup + monthly).
 *
 * HONESTY (HONESTY CONTRACT, DE-FACTS §): TechBrot does NOT file the Delaware gross-receipts
 * return (or any DE/federal return) and does NOT represent clients before the Division of
 * Revenue — it configures and maintains the activity-based tracking in QuickBooks, reconciles
 * the gross-receipts liability to the books, and prepares CPA-ready figures; the business files
 * its own GRT return or its CPA files it. No invented reviews/stats/clients/outcomes; no
 * AggregateRating; the 2 real Clutch reviews live on the DE pillar and are not duplicated here.
 * No founder/personal name in visible content (firm-level review byline). Independent firm —
 * not affiliated with Intuit Inc. Schema: provider = #organization (no LocalBusiness node ships on any state —
 * areaServed-only); areaServed = State Delaware; the WebPage
 * carries reviewedBy #david-westgate (the standing-rule operator exception). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Delaware has no sales tax</strong> &mdash; nothing to collect from customers, no sales-tax return. In its place is the <strong>gross receipts tax</strong>, levied on the <strong>seller&rsquo;s own total receipts</strong> at <strong>0.0945% to 1.9914% depending on business activity</strong> (a few activities such as petroleum run higher), after a <strong>monthly or quarterly exclusion amount</strong> that reduces the taxable base, filed <strong>monthly or quarterly</strong> with the Delaware Division of Revenue. The bookkeeping job is specific: QuickBooks has to track receipts <strong>by business-activity category</strong> so the correct rate and exclusion apply and the gross-receipts return reconciles to the books each period. TechBrot configures and maintains that tracking in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file from our Middletown office &mdash; we don&rsquo;t file the return or represent you; you or your CPA file it with the Division of Revenue, and we keep the numbers right. Served across New Castle, Kent, and Sussex counties, from $500.",

  // AI SUMMARY — 5 entity-dense Q&As (dossier block). (H2: Delaware gross receipts tax, in five questions.)
  aiSummary: [
    { q: "Does Delaware have a sales tax?", a: "<strong>No. Delaware imposes no state or local sales tax &mdash; 0% in every county and city.</strong> There is nothing to collect from customers and no sales-tax return. Instead, Delaware levies a gross receipts tax on the seller&rsquo;s own total receipts, so a business owes a percentage of what it takes in rather than charging tax at checkout." },
    { q: "What is the Delaware gross receipts tax rate?", a: "It runs <strong>0.0945% to 1.9914% depending on your business activity</strong> (a few activities, such as petroleum, are higher), applied to total gross receipts after a <strong>monthly or quarterly exclusion amount</strong> that reduces the taxable base. The Division of Revenue assigns the rate by activity category, so the rate you owe depends on what your business actually does." },
    { q: "How is the gross receipts tax tracked in QuickBooks?", a: "By <strong>business-activity category</strong>. We configure income tracking in QuickBooks so receipts land in the right activity, the correct rate and exclusion apply, and the gross-receipts return reconciles to the books each period rather than being reconstructed later. Out-of-state bookkeepers who assume Delaware works like a sales-tax state get this wrong." },
    { q: "Does TechBrot file my Delaware gross receipts tax return?", a: "<strong>No.</strong> We keep the books filing-ready &mdash; tracking receipts by activity, applying the rate and exclusion, and reconciling the liability &mdash; and prepare CPA-ready figures. <strong>You or your CPA file the gross-receipts return with the Division of Revenue.</strong> We do not file Delaware returns or represent clients before the Division of Revenue." },
    { q: "Do I still owe Delaware corporate income tax as well?", a: "Yes. Delaware businesses pay the <strong>gross receipts tax and the 8.7% corporate income tax</strong> &mdash; the gross receipts tax is not a substitute for income tax, only for a sales tax. We track gross receipts and keep the books clean for the income-tax return your CPA files." },
  ],

  // WHY IT TRIPS BUSINESSES UP — body prose + three reasons as grid-3 lift cards.
  // (H2: Why the gross receipts tax trips up so many Delaware businesses)
  whyBody: [
    "The Delaware gross receipts tax catches businesses out for three reasons. First, it falls on the <strong>seller, not the buyer</strong> &mdash; there is no tax line to add at checkout, so owners used to sales-tax states either set up collection that shouldn&rsquo;t exist or forget the receipts tax they actually owe. Second, the rate is <strong>tied to your business activity</strong> &mdash; 0.0945% to 1.9914% by category &mdash; and a business with more than one activity can owe more than one rate. Third, there is a <strong>monthly or quarterly exclusion amount</strong> and a filing cadence to match, so the return only reconciles if the books are built around it.",
    "Because there is no sales tax in Delaware, there is nothing to collect from customers and no sales-tax return &mdash; a relief that quietly hides the obligation that replaced it. The gross receipts tax is owed on what you take in, regardless of whether you ever charged anyone tax.",
    "None of this is a reason to fear doing business in Delaware &mdash; it&rsquo;s a reason to have it tracked properly. When QuickBooks categorizes receipts by activity and applies the right exclusion every period, the gross-receipts return becomes a non-event instead of a scramble.",
  ],
  whyCards: [
    { signal: "Tax on you, not your customer", title: "It&rsquo;s on the seller&rsquo;s receipts.", body: "Delaware&rsquo;s gross receipts tax is levied on your own total receipts, not collected from the customer like a sales tax. There&rsquo;s no line item at checkout &mdash; you owe a percentage of what you take in. The fix is treating it as a liability on your receipts in QuickBooks, accrued every period, not a pass-through." },
    { signal: "Rate follows your activity", title: "0.0945%&ndash;1.9914% by category.", body: "The rate the Division of Revenue assigns depends on your business activity, and a business doing more than one thing can owe more than one rate. The fix is tracking receipts by activity category in the chart of accounts so the correct rate and exclusion apply to each stream." },
    { signal: "Exclusion &amp; cadence", title: "Monthly or quarterly, with an exclusion.", body: "A monthly or quarterly exclusion amount reduces the taxable base before tax, and you file monthly or quarterly on schedule. The fix is a gross-receipts workflow in the books that applies the exclusion and reconciles the liability each period so the return ties out." },
  ],

  // SCOPE — honest do/don't split (grid-2; checklist inside each col).
  // (H2: How we help with the Delaware gross receipts tax.)
  scopeDo: [
    "Receipts tracked by business-activity category in QuickBooks",
    "Correct activity rate (0.0945%&ndash;1.9914%) and the monthly/quarterly exclusion applied to the books",
    "Filing cadence (monthly or quarterly) matched to your receipts",
    "Monthly reconciliation of the gross-receipts liability to actual receipts",
    "CPA-ready gross-receipts figures prepared for the Division of Revenue return each period",
    "Confirming no sales tax is being wrongly collected, and flagging where multiple activity categories apply",
  ],
  scopeDont: [
    "Filing the gross-receipts return with the Division of Revenue (you/your CPA file)",
    "Obtaining or renewing your Delaware business license",
    "Filing the Delaware 8.7% corporate income-tax return or federal returns",
    "Representation before the Division of Revenue",
    "Formal tax opinions &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Software can post income to a chart of accounts; it can&rsquo;t tell you which Delaware gross-receipts activity category a new revenue stream falls under, or that splitting two activities changes the rate you owe. That judgment &mdash; matching how your business actually earns to how Delaware taxes it &mdash; is what turns gross-receipts tracking from a liability into a non-issue.",
    "Once receipts reconcile by activity every month and the exclusion is applied on the right cadence, the question shifts from &ldquo;will the return reconcile?&rdquo; to &ldquo;what do the numbers tell me to do next?&rdquo; That&rsquo;s where clean books become real decisions &mdash; margin by activity, the cost of the receipts tax built into pricing, and where the 8.7% corporate income tax lands on top. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, answer-first, Delaware-specific. visible faq = FAQPage schema (same array).
  // 1 call-intent answer carries the phone (cost question). (H2: Delaware gross receipts tax questions.)
  faq: [
    { q: "Does Delaware have a sales tax?", a: "No. Delaware imposes no state or local sales tax &mdash; 0% everywhere. Instead, businesses pay a <strong>gross receipts tax</strong> on their own total receipts (0.0945%&ndash;1.9914% by activity, after a monthly or quarterly exclusion amount), filed monthly or quarterly with the Division of Revenue. You don&rsquo;t collect tax from customers, but QuickBooks needs to track receipts by business activity so the right rate applies and the return reconciles to the books." },
    { q: "What is the Delaware gross receipts tax and who owes it?", a: "It&rsquo;s a tax on the <strong>seller&rsquo;s total gross receipts</strong> &mdash; Delaware&rsquo;s substitute for a sales tax &mdash; owed by the business, not collected from the customer. The rate depends on your business activity (0.0945%&ndash;1.9914%; a few activities such as petroleum are higher), and a monthly or quarterly exclusion amount reduces the taxable base before the tax is applied." },
    { q: "How is the gross receipts tax handled in QuickBooks?", a: "We configure income tracking <strong>by activity category</strong> so receipts land in the right bucket, the correct rate and exclusion apply, and the gross-receipts return ties out to the books each period. If your business has more than one activity, we separate the streams so each is taxed at its own rate rather than lumped together." },
    { q: "How much does Delaware gross receipts tax help cost?", a: "It starts at <strong>$500</strong> &mdash; a one-time setup of activity-based tracking plus ongoing monthly support &mdash; fixed-fee against a written scope and priced after a free discovery call. Final pricing depends on transaction volume, the number of activity categories, and whether your books need cleanup first. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Does TechBrot file my gross receipts tax return?", a: "No. We handle the bookkeeping side &mdash; tracking receipts by activity, applying the rate and exclusion, and reconciling the gross-receipts liability &mdash; and prepare CPA-ready figures each period. The return itself is filed with the Division of Revenue by you or your CPA. We make sure the numbers are right and filing-ready; we don&rsquo;t file the return or represent you before the Division of Revenue." },
    { q: "Do I still owe Delaware corporate income tax on top of the gross receipts tax?", a: "Yes. Delaware businesses pay both &mdash; the gross receipts tax on receipts and the <strong>8.7% corporate income tax</strong> on apportioned taxable income. The gross receipts tax stands in for a sales tax, not for income tax. We keep the books clean for both, and your CPA files the income-tax return." },
    { q: "I have more than one business activity. Does that change my gross receipts tax?", a: "It can. The rate is assigned by activity, so a business with multiple activities may owe more than one rate. We track receipts by activity category in QuickBooks so each stream is taxed correctly and the exclusion is applied where it belongs &mdash; rather than everything defaulting to a single rate that may be wrong." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; Middletown, DE office &middot; New Castle, Kent &amp; Sussex counties" },
    { label: "Standards", detail: "Verified vs the DE Division of Revenue &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Out of scope", detail: "No gross-receipts, income-tax, or federal filing &middot; no representation before the Division of Revenue &middot; coordinated with your CPA/EA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — sibling DE pages (around the engagement).
  related: [
    { href: "/find-an-accountant/delaware/franchise-tax-help/", title: "Delaware franchise tax help", body: "The annual franchise tax every Delaware entity owes &mdash; tracked and reserved in your books, with the lower-tax method confirmed. Filed by your agent or CPA." },
    { href: "/find-an-accountant/delaware/quickbooks-setup/", title: "Delaware QuickBooks setup", body: "Activity-based gross-receipts tracking configured from day one &mdash; the right edition, an industry chart of accounts, and clean books from the start." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/gross-receipts-tax-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Gross Receipts Tax Help for Businesses","description":"Delaware gross receipts tax help for businesses — the 0.0945%–1.9914% activity-based rate range, the monthly/quarterly exclusion amount, no sales tax to collect, and monthly/quarterly filing — tracked by activity category in QuickBooks and reconciled to the books from TechBrot's Middletown office. Does not file the Delaware return; coordinates with the client's CPA.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-gross-receipts-tax-help.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-grosstax-summary","#de-svc-grosstax-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Gross Receipts Tax Help"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Gross Receipts Tax Support","serviceType":"Gross receipts tax compliance bookkeeping support","description":"Activity-based Delaware gross receipts tax tracking in QuickBooks, exclusion and rate application, liability reconciliation, and CPA-ready figure preparation for Delaware businesses. TechBrot prepares the numbers; the gross-receipts return is filed with the Division of Revenue by the client or CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware or federal returns and does not represent clients before the Division of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","name":"Delaware businesses filing the gross receipts tax"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"500","description":"Gross-receipts tracking setup plus monthly support from $500 against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
