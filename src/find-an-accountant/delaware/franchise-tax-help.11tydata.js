/* /find-an-accountant/delaware/franchise-tax-help/ — t-money DE SERVICE child
 * (Delaware-specific franchise-tax help — a money/compliance page, NOT an industry page).
 * Authority for every DE figure: _build/strategy/DE-FACTS.md (the ONLY source for DE numbers)
 * + the DE pillar (find-an-accountant/delaware.*) franchise-tax framing, kept consistent.
 * Structure mirrors the same-named NY exemplar (find-an-accountant/new-york/sales-tax-help.
 * 11tydata.js): JSON front-matter in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). The FAQPage mainEntity is built from the same `faq` array the visible faq renders
 * from — single source of truth.
 *
 * DE FIGURES USED (DE-FACTS.md): LLC/LP/GP flat $300/yr due June 1 (no annual report);
 * corporations $175 minimum (Authorized Shares method) or $400 minimum (Assumed Par Value
 * method), $200,000 maximum ($250,000 Large Corporate Filer), due March 1 with an annual
 * report; two methods allowed and the entity picks the lower; late penalty $200 + 1.5%/mo
 * interest; DE corporate income tax 8.7% (separate from the franchise tax); Franchise Tax Help
 * priced from $300 (annual support).
 *
 * HONESTY (HONESTY CONTRACT, DE-FACTS §): hard-stop boundary on this page — TechBrot does NOT
 * file the Delaware franchise tax or the annual report and is NOT a registered agent; the
 * registered agent or CPA files. What TechBrot does: tracks & reserves the liability in
 * QuickBooks (accrued so it's funded) and confirms the calculation method that produces the
 * lower corporate tax. No invented reviews/stats/clients/outcomes; no AggregateRating; the 2
 * real Clutch reviews live on the DE pillar and are not duplicated here. No founder/personal
 * name in visible content (firm-level review byline). Independent firm — not affiliated with
 * Intuit Inc. Schema: provider = #organization (the real-address #localbusiness node lives on
 * the DE pillar only); areaServed = State Delaware; WebPage carries reviewedBy #david-westgate
 * (the standing-rule operator exception). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "The <strong>Delaware franchise tax</strong> is an annual tax every Delaware entity owes for the privilege of being formed here &mdash; separate from income tax and from the gross receipts tax. <strong>LLCs, LPs, and GPs pay a flat $300, due June 1</strong>, with no annual report. <strong>Corporations pay a $175 minimum under the Authorized Shares method or a $400 minimum under the Assumed Par Value method &mdash; up to a $200,000 maximum ($250,000 for a Large Corporate Filer) &mdash; due March 1 with an annual report.</strong> A corporation may use whichever of the two methods produces the lower tax, and the gap between them can be enormous. <strong>TechBrot does not file the franchise tax or the annual report, and is not a registered agent</strong> &mdash; your registered agent or CPA files. What we do, from our Middletown office, is <strong>track and reserve the liability</strong> in your <a href=\"/quickbooks/online/\">QuickBooks</a> file so it&rsquo;s never a surprise, and <strong>confirm the method that produces the lower corporate tax</strong>. Served across New Castle, Kent, and Sussex counties, from $300 a year.",

  // AI SUMMARY — 5 entity-dense Q&As (dossier block). (H2: Delaware franchise tax, in five questions.)
  aiSummary: [
    { q: "What is the Delaware franchise tax?", a: "It&rsquo;s an <strong>annual tax every Delaware entity owes for the privilege of being formed in Delaware</strong> &mdash; not a tax on income or sales. Every LLC, LP, GP, and corporation registered in Delaware owes it each year to keep the entity in good standing, whether or not it operates in the state." },
    { q: "How much is the Delaware franchise tax?", a: "<strong>LLCs, LPs, and GPs pay a flat $300, due June 1</strong>, with no annual report. <strong>Corporations pay a $175 minimum (Authorized Shares method) or a $400 minimum (Assumed Par Value method), up to a $200,000 maximum</strong> ($250,000 for a Large Corporate Filer), due March 1 with an annual report. Corporations choose whichever method gives the lower tax." },
    { q: "Does TechBrot file the Delaware franchise tax or annual report?", a: "<strong>No, and TechBrot is not a registered agent.</strong> Your registered agent or CPA files the franchise tax and the annual report. What we do is track and reserve the liability in QuickBooks so the bill is funded when it&rsquo;s due, and confirm the corporate method that produces the lower tax." },
    { q: "Which franchise-tax method should a Delaware corporation use?", a: "Whichever produces the <strong>lower tax</strong>. The default Authorized Shares method can generate a very large bill for a corporation with many authorized shares, while the <strong>Assumed Par Value method</strong> often drops it sharply &mdash; sometimes to the $400 minimum. We confirm which method the books support before the filing." },
    { q: "What happens if the Delaware franchise tax is paid late?", a: "A corporation that misses the March 1 deadline faces a <strong>$200 penalty plus 1.5% interest per month</strong> on the unpaid balance, and the entity can lose good standing. Reserving for it in the books and confirming the lower method ahead of the deadline is how businesses avoid both." },
  ],

  // WHY IT TRIPS BUSINESSES UP — body prose + three reasons as grid-3 lift cards.
  // (H2: Why the franchise tax trips up so many Delaware entities)
  whyBody: [
    "The Delaware franchise tax catches entities out for three reasons. First, the two corporate methods produce <strong>very different bills</strong> &mdash; the default Authorized Shares method can return a five-figure number that the Assumed Par Value method cuts to a few hundred dollars. Second, the <strong>dates and obligations differ by entity type</strong>: LLCs, LPs, and GPs pay a flat $300 by June 1 with no report, while corporations file by March 1 with an annual report. Third, it&rsquo;s a <strong>balance-sheet liability that is nobody&rsquo;s job by default</strong> &mdash; the registered agent files it but doesn&rsquo;t keep your books, so without a reserve the bill lands unplanned.",
    "Because the tax is owed simply for being a Delaware entity, it applies even to companies that never operate in the state &mdash; the millions of holding companies and out-of-state-owned entities formed here owe it every year, often across several entities at once.",
    "None of this is a reason to avoid forming in Delaware &mdash; it&rsquo;s a reason to reserve for the tax and confirm the right method. When the franchise tax is accrued in the books and the lower-tax method is verified, the annual bill is funded and predictable instead of a surprise.",
  ],
  whyCards: [
    { signal: "Two methods, very different bills", title: "Authorized Shares vs Assumed Par Value.", body: "Corporations may compute the tax two ways and pay the lower. The default Authorized Shares method can produce a five-figure bill for a company with many authorized shares; the Assumed Par Value method often drops it sharply, sometimes to the $400 minimum. The fix is confirming which method the books support before filing." },
    { signal: "Dates &amp; reports differ", title: "June 1 vs March 1 &mdash; and a report.", body: "LLCs, LPs, and GPs pay a flat $300 by June 1 with no annual report; corporations pay $175 to $200,000 by March 1 with an annual report. Miss a corporate deadline and a $200 penalty plus 1.5%/month interest accrues, and good standing is at risk. The fix is the right date on the calendar and the reserve ready." },
    { signal: "Reserved, or it&rsquo;s a surprise", title: "Nobody&rsquo;s job by default.", body: "Your registered agent files the tax but doesn&rsquo;t keep your books, so without a reserve the annual bill lands unplanned &mdash; multiplied across every entity in a holding structure. The fix is accruing the franchise tax monthly in QuickBooks so each entity&rsquo;s bill is funded when it&rsquo;s due." },
  ],

  // SCOPE — honest do/don't split (grid-2; checklist inside each col).
  // (H2: How we help with the Delaware franchise tax.)
  scopeDo: [
    "Franchise-tax liability tracked and reserved in QuickBooks, accrued monthly",
    "The lower-tax corporate method (Authorized Shares vs Assumed Par Value) confirmed against the books",
    "Share, par-value, and entity details kept in the books ready for the filing",
    "The reserve reconciled to the actual amount due each year",
    "A separate franchise-tax reserve tracked per entity for holding-company / multi-entity structures",
    "Figures coordinated with your registered agent or CPA, who files",
  ],
  scopeDont: [
    "Filing the franchise tax or paying it on your behalf",
    "Filing the Delaware annual report (your registered agent or CPA files it)",
    "Acting as your registered agent &mdash; TechBrot is not one",
    "Filing the Delaware 8.7% corporate income-tax return or federal returns",
    "Representation before the Division of Corporations",
    "Legal or formal tax opinions &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Software can post a payment once the bill arrives; it can&rsquo;t tell you that your corporation is on the wrong calculation method, or that a holding structure has five separate franchise-tax bills to reserve for. That judgment &mdash; knowing which method the books support and what each entity owes &mdash; is what keeps the franchise tax from becoming an annual surprise.",
    "Once the franchise tax is accrued every month and the lower-tax method is confirmed, the question shifts from &ldquo;what&rsquo;s the bill this year?&rdquo; to &ldquo;is the structure still the right one?&rdquo; That&rsquo;s where clean per-entity books become real decisions &mdash; whether to consolidate dormant entities, how the franchise tax and the 8.7% corporate income tax land together, and what a new entity will cost to carry. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, answer-first, Delaware-specific. visible faq = FAQPage schema (same array).
  // 2 call-intent answers carry the phone (cost + late-payment). (H2: Delaware franchise tax questions.)
  faq: [
    { q: "What is the Delaware franchise tax?", a: "It&rsquo;s an annual tax every Delaware entity owes for the privilege of being formed in Delaware &mdash; not a tax on income or sales. LLCs, LPs, and GPs pay a flat <strong>$300 due June 1</strong> (no annual report); corporations pay <strong>$175 to $200,000 due March 1</strong> with an annual report. It keeps the entity in good standing whether or not it operates in the state." },
    { q: "How much is the franchise tax for an LLC versus a corporation?", a: "An <strong>LLC, LP, or GP pays a flat $300 a year, due June 1</strong>, with no annual report. A <strong>corporation pays a $175 minimum under the Authorized Shares method or a $400 minimum under the Assumed Par Value method, up to a $200,000 maximum</strong> ($250,000 for a Large Corporate Filer), due March 1 with an annual report. Corporations choose whichever method gives the lower tax." },
    { q: "Does TechBrot file my franchise tax or annual report?", a: "No. <strong>TechBrot is not a registered agent and does not file the franchise tax or the annual report</strong> &mdash; your registered agent or CPA files them. We track and reserve the liability in QuickBooks so it&rsquo;s funded when due, keep the share and entity details ready for the filing, and confirm the corporate method that produces the lower tax." },
    { q: "How much does Delaware franchise tax help cost?", a: "It starts at <strong>$300 a year</strong> &mdash; annual support to track and reserve the franchise tax in your books and confirm the lower-tax method &mdash; fixed-fee against a written scope and priced after a free discovery call. Multi-entity and holding-company structures are scoped per entity. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Why did my corporation get a huge franchise-tax bill?", a: "Almost always because it was calculated under the <strong>Authorized Shares method</strong>, the default, which can return a five-figure figure for a corporation with many authorized shares. The <strong>Assumed Par Value method</strong> often produces a far lower number &mdash; sometimes the $400 minimum. We confirm which method the books support so you pay the lower of the two." },
    { q: "What happens if I pay the Delaware franchise tax late?", a: "A corporation that misses the March 1 deadline owes a <strong>$200 penalty plus 1.5% interest per month</strong> on the unpaid balance, and the entity risks losing good standing. If you&rsquo;re behind, get the books reconciled and the reserve confirmed before it compounds &mdash; book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> to get the numbers straight." },
    { q: "Do I owe the franchise tax if my Delaware company operates from another state?", a: "Yes. The franchise tax is owed for being a Delaware entity, <strong>regardless of where you operate</strong> &mdash; which is why the millions of holding companies and out-of-state-owned entities formed in Delaware all owe it each year. We track and reserve each entity&rsquo;s franchise tax in the books and coordinate the figures with your home-state CPA and registered agent." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; Middletown, DE office &middot; New Castle, Kent &amp; Sussex counties" },
    { label: "Standards", detail: "Verified vs the DE Division of Corporations &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Out of scope", detail: "Does not file the franchise tax or annual report &middot; not a registered agent &middot; no representation before the Division of Corporations &middot; coordinated with your agent/CPA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — sibling DE pages (around the engagement).
  related: [
    { href: "/find-an-accountant/delaware/gross-receipts-tax-help/", title: "Delaware gross receipts tax help", body: "Delaware&rsquo;s tax in place of a sales tax &mdash; tracked by activity category in QuickBooks so the right rate and exclusion apply and the return reconciles." },
    { href: "/find-an-accountant/delaware/industries/incorporation-holding-companies/", title: "Holding companies &amp; incorporation", body: "Per-entity books, intercompany structure, and a franchise-tax reserve for the holding companies and registered entities Delaware is known for." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/franchise-tax-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Franchise Tax Help for Businesses","description":"Delaware franchise tax help for businesses — the flat $300 LLC/LP/GP tax due June 1, the $175 Authorized Shares and $400 Assumed Par Value corporate minimums up to $200,000 due March 1 with an annual report, and the two-method election — tracked and reserved in QuickBooks from TechBrot's Middletown office. Does not file the franchise tax or annual report; not a registered agent; coordinates with the client's agent and CPA.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-franchise-summary","#de-svc-franchise-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Franchise Tax Help"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Franchise Tax Support","serviceType":"Franchise tax reserve and method-confirmation bookkeeping support","description":"Delaware franchise-tax liability tracked and reserved in QuickBooks, accrued monthly, with the lower-tax corporate method (Authorized Shares vs Assumed Par Value) confirmed against the books for Delaware entities. TechBrot keeps the books filing-ready and coordinates the figures; the franchise tax and annual report are filed by the client's registered agent or CPA. Independent Certified QuickBooks ProAdvisor firm; does not file the franchise tax or annual report, is not a registered agent, and does not represent clients before the Division of Corporations.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","name":"Delaware entities owing the annual franchise tax"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"300","description":"Annual franchise-tax reserve and method-confirmation support from $300/year against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
