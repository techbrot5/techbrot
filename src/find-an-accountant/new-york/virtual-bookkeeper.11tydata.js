/* /find-an-accountant/new-york/virtual-bookkeeper/ — t-location NY SERVICE child
 * (cobalt). Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-virtual.txt) — the
 * ONLY authority for the 18 headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/virtual-bookkeeper/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors construction.11tydata.js:
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array
 * the visible faq__list renders from — single source of truth.
 *
 * PROTOCOL (MIGRATION-PROTOCOL — content-to-goal, visual-floor):
 *  T2 headings frozen — every contract H1/H2/H3 appears verbatim at its exact level;
 *      "The monthly brief." (newsletter) and the four footer chrome H2s
 *      (Accounting/QuickBooks/Company/Network) are intentionally NOT rendered here —
 *      global chrome/newsletter own them.
 *  T3 no collapse. T4 FAQ = 8 contract Q/A, verbatim/flat/append-only, single array
 *      feeding both faq__list and FAQPage. T6 content-to-goal: real NY virtual /
 *      remote-bookkeeping content (fully remote statewide service, cloud QuickBooks
 *      Online, secure document workflow, video review calls, one named ProAdvisor,
 *      NYC + upstate without an on-site visit, fixed-fee, the books/CPA boundary).
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this child renders NO review-card and NO AggregateRating. The baseline
 * named-reviewer line (David Westgate) is reframed to a firm-level review byline —
 * no founder/personal name in visible content. Independent Certified QuickBooks
 * ProAdvisor firm — does NOT file NY taxes; coordinates with the client's CPA, who
 * files. CTAs use the canonical lexicon only. NYC/UBT/sales-tax facts reflect NYS
 * DTF / NYC DOF guidance, verified June 2026. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>virtual bookkeeper</strong> does everything an in-house one does &mdash; categorization, <a href=\"/find-an-accountant/new-york/quickbooks-reconciliation/\">reconciliation</a>, monthly statements, <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC sales tax</a> &mdash; delivered remotely through cloud <a href=\"/quickbooks/online/\">QuickBooks Online</a>. With <strong>TechBrot</strong>, a named Certified QuickBooks ProAdvisor works your file securely online, with full New York tax fluency, fixed-fee at <a href=\"/find-an-accountant/new-york/pricing/\">$400&ndash;$2,500+/mo</a>. Your data stays in your own QuickBooks account &mdash; you keep ownership and control.",
    "It&rsquo;s the same expertise and continuity as an employee, without payroll taxes, benefits, software seats, or turnover. <strong>Location doesn&rsquo;t limit the work</strong>; QuickBooks expertise and New York knowledge do, and those travel fine over the cloud. We serve businesses across all of New York &mdash; from NYC and the boroughs to Albany, Buffalo, Rochester, and the upstate counties &mdash; without an on-site visit. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: Virtual bookkeeping in New York, in five questions.)
  aiSummary: [
    { q: "What is a virtual bookkeeper?", a: "A virtual bookkeeper does everything an in-house bookkeeper does, delivered remotely through cloud QuickBooks. For a New York business, a named Certified ProAdvisor works your file securely online &mdash; same continuity, no on-site hire." },
    { q: "Is it as good as a local bookkeeper?", a: "For most New York businesses, <strong>better</strong> &mdash; the work is identical (it&rsquo;s all in QuickBooks), but you get ProAdvisor expertise and NYC tax fluency without paying for a local hire. The bookkeeper&rsquo;s location doesn&rsquo;t matter; their expertise does." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong>, fixed-fee &mdash; typically well below the loaded cost of a part-time in-house bookkeeper, with no payroll taxes, benefits, or turnover. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "Is my data secure?", a: "Yes &mdash; your data lives in <strong>your own QuickBooks Online account</strong>; we work inside it with appropriate access, and documents are exchanged through secure channels. You retain ownership and control of the file at all times." },
    { q: "One bookkeeper or a rotating team?", a: "<strong>One named bookkeeper</strong> stays on your file &mdash; the same person learns your business and catches anomalies early, exactly like a good in-house hire. Not a rotating pool." },
  ],

  // PROOF — "Virtual, without the trade-offs." Cobalt rule: grid + buyer-card (NOT
  // proof-strip__item). Four trade-off cards reframed from baseline proof figures to
  // representative claims (R5 — no fabricated outcomes). (H2: Virtual, without the trade-offs.)
  proof: [
    { signal: "No employer overhead", title: "No payroll taxes, benefits, or seats.", body: "A virtual engagement carries none of the loaded cost of an in-house hire &mdash; no payroll taxes, no benefits, no extra software seats, no turnover to manage. You pay a fixed monthly fee against a written scope, and nothing else." },
    { signal: "One named person", title: "The same ProAdvisor every month.", body: "One named Certified QuickBooks ProAdvisor stays on your file &mdash; not a rotating pool. The continuity is the point: the same person learns how your New York business runs and catches anomalies early." },
    { signal: "Your file, your control", title: "100% cloud-delivered on QuickBooks Online.", body: "The work happens entirely inside your own QuickBooks Online account, which you own and control. We work in it with appropriate access; documents move through secure channels. No custody of your files." },
    { signal: "NYC to upstate", title: "Every New York region, no on-site visit.", body: "We serve businesses statewide &mdash; NYC and the boroughs through to Albany, Buffalo, Rochester, and the upstate counties &mdash; without ever needing to be on-site. Location doesn&rsquo;t limit the work." },
  ],

  // WHAT WE HANDLE — the four services (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Everything, delivered remotely. + 4 H3s)
  handle: [
    { num: "01", title: "Monthly reconciliation &amp; statements", body: "Every account reconciled and a clean P&amp;L, balance sheet, and cash-flow statement each month &mdash; in your cloud QuickBooks, reviewed together on a video call so the numbers actually mean something.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "NYC &amp; NY sales tax tracking", body: "Destination-based NYC and New York State sales tax tracked remotely in QuickBooks so your quarterly return reconciles, with books kept structured for the NYC Unincorporated Business Tax your CPA files.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "03", title: "Cleanup &amp; catch-up", body: "Behind? We get the file CPA-ready remotely &mdash; reclassify, reconcile, fix prior periods &mdash; then keep it clean month after month. No on-site visit required at any point.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
    { num: "04", title: "Secure document flow", body: "Receipts captured straight to QuickBooks, bank and credit-card feeds wired in, and documents exchanged through secure channels &mdash; access limited to your named bookkeeper and oversight. You keep the QuickBooks file.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "A bank feed imports transactions; it doesn&rsquo;t notice a slow-paying customer or a thinning margin. A named virtual bookkeeper does &mdash; remotely, every month, on a video review call where we walk the numbers together instead of mailing a PDF and disappearing.",
    "Once the books are clean and current, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell us to do?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns a clean ledger into cash-flow forecasting and decisions. As automation handles the routine data entry, this judgment layer is where the value sits. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York virtual bookkeeper questions.)
  faq: [
    { q: "What is a virtual bookkeeper and how does it work in New York?", a: "A virtual bookkeeper does everything an in-house bookkeeper does &mdash; categorizing transactions, reconciling accounts, producing statements, tracking sales tax &mdash; but delivers it remotely through cloud QuickBooks. For a New York business, that means a named Certified QuickBooks ProAdvisor works your file securely online, with no need for anyone on-site. You get the same continuity and expertise without the overhead of an employee." },
    { q: "Is a virtual bookkeeper as good as a local one in New York?", a: "For most New York businesses, better &mdash; because the work is identical (it all happens in QuickBooks regardless of location), but a virtual model gives you access to a Certified ProAdvisor and New York tax fluency without paying for a local hire. What matters isn&rsquo;t the bookkeeper&rsquo;s zip code; it&rsquo;s their QuickBooks expertise and their grasp of NYC sales tax, the UBT, and your industry. Those travel fine over the cloud." },
    { q: "How much does a virtual bookkeeper cost in New York?", a: "Virtual bookkeeping with TechBrot runs $400&ndash;$2,500+/mo, fixed-fee against a written scope, set by transaction volume and number of accounts. That&rsquo;s typically well below the loaded cost of a part-time in-house bookkeeper, with no payroll taxes, benefits, software seats, or turnover to manage." },
    { q: "How do you keep my financial data secure?", a: "Your data lives in your own QuickBooks Online account; we work inside it with appropriate access, not by taking custody of your files. Documents are exchanged through secure channels, and access is limited to your named bookkeeper and oversight. You retain ownership and control of the QuickBooks file at all times." },
    { q: "Will I have one consistent bookkeeper or a rotating team?", a: "One named bookkeeper stays on your file month after month &mdash; not a rotating pool. That continuity is the whole point: the same person learns how your New York business runs, catches anomalies early, and keeps your books consistent, exactly as a good in-house hire would." },
    { q: "Do you work in QuickBooks Online or Desktop?", a: "Primarily QuickBooks Online, which is built for remote collaboration and is the default for most New York small businesses. We also support hosted QuickBooks Desktop where a business needs it, and we handle the migration if you&rsquo;re moving from Desktop to Online." },
    { q: "Can a virtual bookkeeper handle NYC sales tax and the UBT?", a: "Yes &mdash; location doesn&rsquo;t limit that at all. We track destination-based NYC and New York State sales tax in QuickBooks and keep your books structured so your CPA can file the NYC Unincorporated Business Tax accurately. The expertise is in the work, not the proximity." },
    { q: "How do we get started with virtual bookkeeping?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file remotely, determine whether you need cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named bookkeeper begins as soon as you approve." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name; baseline named
  // reviewer reframed to firm-level). (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Remote monthly bookkeeping, reconciliation, NYC/NY sales-tax tracking, cleanup &amp; catch-up &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own cloud QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/virtual-bookkeeper/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Virtual Bookkeeper","description":"Remote bookkeeping for New York businesses delivered by a named Certified QuickBooks ProAdvisor through cloud QuickBooks — the same expertise and continuity as in-house, without the overhead.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-virtual-bookkeeper.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-virtual-summary","#ny-svc-virtual-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Virtual Bookkeeper"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Virtual Bookkeeping","serviceType":"Remote bookkeeping services","description":"Remote monthly bookkeeping, reconciliation, and QuickBooks management for New York businesses statewide, delivered by a named ProAdvisor through cloud QuickBooks. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
