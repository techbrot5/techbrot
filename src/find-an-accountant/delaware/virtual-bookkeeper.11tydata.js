/* /find-an-accountant/delaware/virtual-bookkeeper/ — t-money DE SERVICE child. NEW page
 * (no baseline equity contract — Delaware set built fresh). Structure mirrors the proven NY
 * virtual-bookkeeper child: JSON front-matter in the .njk; this file supplies the content
 * arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * DELAWARE LOCALIZATION (per DE-FACTS): NY UBT/NYC-sales-tax/statewide → DE no sales tax;
 * gross receipts tax on the seller tracked by activity; annual franchise-tax reserve; the
 * out-of-state-owner / holding-company case (a natural fit for fully remote bookkeeping);
 * New Castle, Kent, Sussex; Middletown office. Pricing uses ONLY canonical DE figures
 * (monthly from $400/mo) — no fabricated upper ranges.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes; the four proof cards are
 * representative claims, not fabricated outcomes. No review-card, no AggregateRating. No
 * founder/personal name in visible content. Independent firm — NOT a registered agent; does
 * NOT file DE returns or the franchise tax; coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>virtual bookkeeper</strong> does everything an in-house one does &mdash; categorization, <a href=\"/find-an-accountant/delaware/quickbooks-reconciliation/\">reconciliation</a>, monthly statements, <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts tracking</a> &mdash; delivered remotely through cloud <a href=\"/quickbooks/online/\">QuickBooks Online</a>. With <strong>TechBrot</strong>, a named Certified QuickBooks ProAdvisor works your file securely online, with full Delaware fluency &mdash; the gross receipts tax by activity and the annual franchise-tax reserve &mdash; fixed-fee from <a href=\"/find-an-accountant/delaware/pricing/\">$400/mo</a>. Your data stays in your own QuickBooks account; you keep ownership and control.",
    "It&rsquo;s the same expertise and continuity as an employee, without payroll taxes, benefits, software seats, or turnover. <strong>Location doesn&rsquo;t limit the work</strong>; QuickBooks expertise and Delaware knowledge do, and those travel fine over the cloud. We serve businesses across all three counties &mdash; New Castle, Kent, and Sussex &mdash; without an on-site visit, and we keep the books for the many <strong>Delaware entities owned and run from out of state</strong>, for whom remote is the only model that makes sense. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware returns.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Virtual bookkeeping in Delaware, in five questions.)
  aiSummary: [
    { q: "What is a virtual bookkeeper?", a: "A virtual bookkeeper does everything an in-house bookkeeper does, delivered remotely through cloud QuickBooks. For a Delaware business &mdash; or an out-of-state owner of a Delaware entity &mdash; a named Certified ProAdvisor works your file securely online: same continuity, no on-site hire." },
    { q: "Is it as good as a local bookkeeper?", a: "For most Delaware businesses, <strong>better</strong> &mdash; the work is identical (it&rsquo;s all in QuickBooks), but you get ProAdvisor expertise and Delaware gross-receipts and franchise-tax fluency without paying for a local hire. And because so many Delaware entities are run from elsewhere, remote is often the only practical model." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong>, fixed-fee against a written scope &mdash; typically well below the loaded cost of a part-time in-house bookkeeper, with no payroll taxes, benefits, or turnover. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
    { q: "Is my data secure?", a: "Yes &mdash; your data lives in <strong>your own QuickBooks Online account</strong>; we work inside it with appropriate access, and documents are exchanged through secure channels. You retain ownership and control of the file at all times." },
    { q: "One bookkeeper or a rotating team?", a: "<strong>One named bookkeeper</strong> stays on your file &mdash; the same person learns your business and catches anomalies early, exactly like a good in-house hire. Not a rotating pool." },
  ],

  // PROOF — "Virtual, without the trade-offs." Four representative trade-off cards (R5).
  // (H2: Virtual, without the trade-offs.)
  proof: [
    { signal: "No employer overhead", title: "No payroll taxes, benefits, or seats.", body: "A virtual engagement carries none of the loaded cost of an in-house hire &mdash; no payroll taxes, no benefits, no extra software seats, no turnover to manage. You pay a fixed monthly fee against a written scope, and nothing else." },
    { signal: "One named person", title: "The same ProAdvisor every month.", body: "One named Certified QuickBooks ProAdvisor stays on your file &mdash; not a rotating pool. The continuity is the point: the same person learns how your Delaware business runs and catches anomalies early." },
    { signal: "Your file, your control", title: "100% cloud-delivered on QuickBooks Online.", body: "The work happens entirely inside your own QuickBooks Online account, which you own and control. We work in it with appropriate access; documents move through secure channels. No custody of your files." },
    { signal: "Owned from anywhere", title: "Every Delaware county, and every out-of-state owner.", body: "We serve businesses across New Castle, Kent, and Sussex without ever needing to be on-site &mdash; and we keep the books for the many Delaware entities owned and operated entirely from another state. Location doesn&rsquo;t limit the work." },
  ],

  // WHAT WE HANDLE — the four services (lift cards). Each links to its DE child.
  // (H2: Everything, delivered remotely.)
  handle: [
    { num: "01", title: "Monthly reconciliation &amp; statements", body: "Every account reconciled and a clean P&amp;L, balance sheet, and cash-flow statement each month &mdash; in your cloud QuickBooks, reviewed together on a video call so the numbers actually mean something.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "02", title: "Gross receipts tax tracking", body: "Delaware&rsquo;s gross receipts tax on the seller tracked remotely in QuickBooks by business activity so your monthly or quarterly return reconciles, with the annual franchise-tax reserve kept current for your CPA or registered agent to file.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "03", title: "Cleanup &amp; catch-up", body: "Behind, or commingled across entities? We get the file CPA-ready remotely &mdash; reclassify, reconcile, fix prior periods, separate entities &mdash; then keep it clean month after month. No on-site visit required at any point.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware bookkeeping cleanup &rarr;" },
    { num: "04", title: "Secure document flow", body: "Receipts captured straight to QuickBooks, bank and credit-card feeds wired in, and documents exchanged through secure channels &mdash; access limited to your named bookkeeper and oversight. You keep the QuickBooks file.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping &rarr;" },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A bank feed imports transactions; it doesn&rsquo;t notice a slow-paying customer, a thinning margin, or a franchise-tax reserve falling behind. A named virtual bookkeeper does &mdash; remotely, every month, on a video review call where we walk the numbers together instead of mailing a PDF and disappearing.",
    "Once the books are clean and current, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell us to do?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns a clean ledger into cash-flow forecasting and decisions. As automation handles the routine data entry, this judgment layer is where the value sits. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Delaware-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Delaware virtual bookkeeper questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What is a virtual bookkeeper and how does it work in Delaware?", a: "A virtual bookkeeper does everything an in-house bookkeeper does &mdash; categorizing transactions, reconciling accounts, producing statements, tracking gross receipts &mdash; but delivers it remotely through cloud QuickBooks. For a Delaware business, that means a named Certified QuickBooks ProAdvisor works your file securely online, with no need for anyone on-site. You get the same continuity and expertise without the overhead of an employee &mdash; and if your Delaware entity is run from out of state, remote is the natural fit." },
    { q: "Is a virtual bookkeeper as good as a local one in Delaware?", a: "For most Delaware businesses, better &mdash; because the work is identical (it all happens in QuickBooks regardless of location), but a virtual model gives you access to a Certified ProAdvisor and Delaware tax fluency without paying for a local hire. What matters isn&rsquo;t the bookkeeper&rsquo;s zip code; it&rsquo;s their QuickBooks expertise and their grasp of the gross receipts tax, the franchise-tax reserve, and your industry. Those travel fine over the cloud." },
    { q: "How much does a virtual bookkeeper cost in Delaware?", a: "Virtual bookkeeping with TechBrot starts at $400/mo, fixed-fee against a written scope, set by transaction volume and number of accounts and entities. That&rsquo;s typically well below the loaded cost of a part-time in-house bookkeeper, with no payroll taxes, benefits, software seats, or turnover to manage." },
    { q: "How do you keep my financial data secure?", a: "Your data lives in your own QuickBooks Online account; we work inside it with appropriate access, not by taking custody of your files. Documents are exchanged through secure channels, and access is limited to your named bookkeeper and oversight. You retain ownership and control of the QuickBooks file at all times." },
    { q: "Will I have one consistent bookkeeper or a rotating team?", a: "One named bookkeeper stays on your file month after month &mdash; not a rotating pool. That continuity is the whole point: the same person learns how your Delaware business runs, catches anomalies early, and keeps your books consistent, exactly as a good in-house hire would." },
    { q: "Can a virtual bookkeeper handle the Delaware gross receipts tax and the franchise-tax reserve?", a: "Yes &mdash; location doesn&rsquo;t limit that at all. We track the gross receipts tax by business activity in QuickBooks so your return reconciles, and we keep the annual franchise-tax reserve current so your CPA or registered agent can file it without a surprise. The expertise is in the work, not the proximity. We keep the books; we do not file the returns or the franchise tax." },
    { q: "How do we get started with virtual bookkeeping?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file remotely, determine whether you need cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named bookkeeper begins as soon as you approve." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Remote monthly bookkeeping, reconciliation, gross-receipts-tax tracking, franchise-tax reserve, cleanup &amp; catch-up &middot; income-tax &amp; franchise-tax filing coordinated with your CPA/EA and registered agent" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own cloud QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/virtual-bookkeeper/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Virtual Bookkeeper","description":"Remote bookkeeping for Delaware businesses delivered by a named Certified QuickBooks ProAdvisor through cloud QuickBooks — the same expertise and continuity as in-house, without the overhead, and built for out-of-state owners of Delaware entities.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-virtual-bookkeeper-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-virtual-summary","#de-svc-virtual-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Virtual Bookkeeper"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Virtual Bookkeeping","serviceType":"Remote bookkeeping services","description":"Remote monthly bookkeeping, reconciliation, gross-receipts-tax tracking, and QuickBooks management for Delaware businesses and out-of-state owners of Delaware entities, delivered by a named ProAdvisor through cloud QuickBooks. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, or registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and midsize businesses and out-of-state owners of Delaware entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
