/* /find-an-accountant/indiana/virtual-bookkeeper/ — t-money IN SERVICE child. NEW page.
 * Structure mirrors the proven NY/DE virtual-bookkeeper child: JSON front-matter in the .njk;
 * this file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * INDIANA LOCALIZATION (per IN-FACTS): DE gross-receipts / franchise / out-of-state-owner case →
 * Indiana flat 7% statewide sales tax (no local) + county Local Income Tax (LIT) payroll withholding
 * by employee county of residence; distributed / multi-county Indiana workforces (a natural fit for
 * fully remote bookkeeping); all 92 counties; NO street address. Pricing uses ONLY the canonical IN
 * figure (monthly from $400/mo).
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes; the four proof cards are
 * representative claims, not fabricated outcomes. No review-card, no AggregateRating. No
 * founder/personal name in visible content. Never quotes a specific county LIT %. Independent firm —
 * does NOT file IN returns; coordinates with the client's CPA, who files. provider = #organization;
 * areaServed = State Indiana; reviewedBy #david-westgate. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "A <strong>virtual bookkeeper</strong> does everything an in-house one does &mdash; categorization, <a href=\"/find-an-accountant/indiana/quickbooks-reconciliation/\">reconciliation</a>, monthly statements, <a href=\"/find-an-accountant/indiana/sales-tax-help/\">sales-tax tracking</a> &mdash; delivered remotely through cloud <a href=\"/quickbooks/online/\">QuickBooks Online</a>. With <strong>TechBrot</strong>, a named Certified QuickBooks ProAdvisor works your file securely online, with full Indiana fluency &mdash; the flat 7% sales tax and county local-income-tax (LIT) payroll withholding &mdash; fixed-fee from $400/mo. Your data stays in your own QuickBooks account; you keep ownership and control.",
    "It&rsquo;s the same expertise and continuity as an employee, without payroll taxes, benefits, software seats, or turnover. <strong>Location doesn&rsquo;t limit the work</strong>; QuickBooks expertise and Indiana knowledge do, and those travel fine over the cloud. We serve businesses across all 92 counties &mdash; from Indianapolis and the Hamilton County suburbs to Fort Wayne, Evansville, South Bend, and the Region &mdash; without an on-site visit, and the remote model fits the many Indiana businesses with <strong>distributed or multi-county workforces</strong>, where county-LIT withholding has to be set up per employee. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Indiana returns.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Virtual bookkeeping in Indiana, in five questions.)
  aiSummary: [
    { q: "What is a virtual bookkeeper?", a: "A virtual bookkeeper does everything an in-house bookkeeper does, delivered remotely through cloud QuickBooks. For an Indiana business &mdash; including one with staff spread across several counties &mdash; a named Certified ProAdvisor works your file securely online: same continuity, no on-site hire." },
    { q: "Is it as good as a local bookkeeper?", a: "For most Indiana businesses, <strong>better</strong> &mdash; the work is identical (it&rsquo;s all in QuickBooks), but you get ProAdvisor expertise and Indiana sales-tax and county-LIT fluency without paying for a local hire." },
    { q: "What does it cost?", a: "<strong>From $400/mo</strong>, fixed-fee against a written scope &mdash; typically well below the loaded cost of a part-time in-house bookkeeper, with no payroll taxes, benefits, or turnover." },
    { q: "Is my data secure?", a: "Yes &mdash; your data lives in <strong>your own QuickBooks Online account</strong>; we work inside it with appropriate access, and documents are exchanged through secure channels. You retain ownership and control of the file at all times." },
    { q: "One bookkeeper or a rotating team?", a: "<strong>One named bookkeeper</strong> stays on your file &mdash; the same person learns your business and catches anomalies early, exactly like a good in-house hire. Not a rotating pool." },
  ],

  // PROOF — "Virtual, without the trade-offs." Four representative trade-off cards (R5).
  // (H2: Virtual, without the trade-offs.)
  proof: [
    { signal: "No employer overhead", title: "No payroll taxes, benefits, or seats.", body: "A virtual engagement carries none of the loaded cost of an in-house hire &mdash; no payroll taxes, no benefits, no extra software seats, no turnover to manage. You pay a fixed monthly fee against a written scope, and nothing else." },
    { signal: "One named person", title: "The same ProAdvisor every month.", body: "One named Certified QuickBooks ProAdvisor stays on your file &mdash; not a rotating pool. The continuity is the point: the same person learns how your Indiana business runs and catches anomalies early." },
    { signal: "Your file, your control", title: "100% cloud-delivered on QuickBooks Online.", body: "The work happens entirely inside your own QuickBooks Online account, which you own and control. We work in it with appropriate access; documents move through secure channels. No custody of your files." },
    { signal: "Every county, every site", title: "All 92 counties, and every work location.", body: "We serve businesses across all 92 Indiana counties without ever needing to be on-site &mdash; and we keep the books for operations with staff and locations spread across several counties, setting up county-LIT withholding per employee. Location doesn&rsquo;t limit the work." },
  ],

  // WHAT WE HANDLE — the four services (lift cards). Each links to its IN child.
  // (H2: Everything, delivered remotely.)
  handle: [
    { num: "01", title: "Monthly reconciliation &amp; statements", body: "Every account reconciled and a clean P&amp;L, balance sheet, and cash-flow statement each month &mdash; in your cloud QuickBooks, reviewed together on a video call so the numbers actually mean something.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "02", title: "Sales tax &amp; county-LIT payroll", body: "Indiana&rsquo;s flat 7% sales tax tracked remotely in QuickBooks so your return reconciles, with county local-income-tax (LIT) withholding set up in payroll by each employee&rsquo;s county of residence for your CPA to file from.", href: "/find-an-accountant/indiana/sales-tax-help/", cta: "Indiana sales tax help &rarr;" },
    { num: "03", title: "Cleanup &amp; catch-up", body: "Behind, or commingled across locations? We get the file CPA-ready remotely &mdash; reclassify, reconcile, fix prior periods, separate locations &mdash; then keep it clean month after month. No on-site visit required at any point.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana bookkeeping cleanup &rarr;" },
    { num: "04", title: "Secure document flow", body: "Receipts captured straight to QuickBooks, bank and credit-card feeds wired in, and documents exchanged through secure channels &mdash; access limited to your named bookkeeper and oversight. You keep the QuickBooks file.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A bank feed imports transactions; it doesn&rsquo;t notice a slow-paying customer, a thinning margin, or a new hire in a different county whose LIT withholding was never updated. A named virtual bookkeeper does &mdash; remotely, every month, on a video review call where we walk the numbers together instead of mailing a PDF and disappearing.",
    "Once the books are clean and current, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell us to do?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns a clean ledger into cash-flow forecasting and decisions. As automation handles the routine data entry, this judgment layer is where the value sits. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Indiana-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Indiana virtual bookkeeper questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What is a virtual bookkeeper and how does it work in Indiana?", a: "A virtual bookkeeper does everything an in-house bookkeeper does &mdash; categorizing transactions, reconciling accounts, producing statements, tracking sales tax &mdash; but delivers it remotely through cloud QuickBooks. For an Indiana business, that means a named Certified QuickBooks ProAdvisor works your file securely online, with no need for anyone on-site. You get the same continuity and expertise without the overhead of an employee &mdash; and if your team is spread across several counties, the remote model handles county-LIT withholding for each of them." },
    { q: "Is a virtual bookkeeper as good as a local one in Indiana?", a: "For most Indiana businesses, better &mdash; because the work is identical (it all happens in QuickBooks regardless of location), but a virtual model gives you access to a Certified ProAdvisor and Indiana tax fluency without paying for a local hire. What matters isn&rsquo;t the bookkeeper&rsquo;s zip code; it&rsquo;s their QuickBooks expertise and their grasp of the flat 7% sales tax, county-LIT payroll, and your industry. Those travel fine over the cloud." },
    { q: "How much does a virtual bookkeeper cost in Indiana?", a: "Virtual bookkeeping with TechBrot starts at $400/mo, fixed-fee against a written scope, set by transaction volume and number of accounts and payroll counties. That&rsquo;s typically well below the loaded cost of a part-time in-house bookkeeper, with no payroll taxes, benefits, software seats, or turnover to manage." },
    { q: "How do you keep my financial data secure?", a: "Your data lives in your own QuickBooks Online account; we work inside it with appropriate access, not by taking custody of your files. Documents are exchanged through secure channels, and access is limited to your named bookkeeper and oversight. You retain ownership and control of the QuickBooks file at all times." },
    { q: "Will I have one consistent bookkeeper or a rotating team?", a: "One named bookkeeper stays on your file month after month &mdash; not a rotating pool. That continuity is the whole point: the same person learns how your Indiana business runs, catches anomalies early, and keeps your books consistent, exactly as a good in-house hire would." },
    { q: "Can a virtual bookkeeper handle Indiana sales tax and county-LIT payroll?", a: "Yes &mdash; location doesn&rsquo;t limit that at all. We track the flat 7% sales tax in QuickBooks so your return reconciles, and we set up county local-income-tax (LIT) withholding by each employee&rsquo;s county of residence so payroll is correct for your CPA to file from. The expertise is in the work, not the proximity. We keep the books; we do not file the returns." },
    { q: "How do we get started with virtual bookkeeping?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file remotely, determine whether you need cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named bookkeeper begins as soon as you approve." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Remote monthly bookkeeping, reconciliation, 7% sales-tax tracking, county-LIT payroll, cleanup &amp; catch-up &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own cloud QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/virtual-bookkeeper/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Virtual Bookkeeper","description":"Remote bookkeeping for Indiana businesses delivered by a named Certified QuickBooks ProAdvisor through cloud QuickBooks — the same expertise and continuity as in-house, without the overhead, and built for distributed and multi-county Indiana workforces.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana-virtual-bookkeeper.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-virtual-summary","#in-svc-virtual-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Virtual Bookkeeper"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Virtual Bookkeeping","serviceType":"Remote bookkeeping services","description":"Remote monthly bookkeeping, reconciliation, flat 7% sales-tax tracking, county-LIT payroll withholding, and QuickBooks management for Indiana businesses, delivered by a named ProAdvisor through cloud QuickBooks. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana small and midsize businesses, including those with distributed or multi-county workforces"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
