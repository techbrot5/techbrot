/* /vs/techbrot-vs-bookkeeper360/ — t-mofu competitor comparison (round 90, vs Wave B).
 * Clone of the techbrot-vs-1-800-accountant shape; borrows the 14-dimension
 * vs-table + 3-column verdict pattern from techbrot-vs-bench. HONESTY (v4 GROUP-3
 * rules): fair read, ProAdvisor preference disclosed, competitor named where it's
 * the better fit, NO fabricated competitor pricing (deferred to vendor — Bookkeeper360
 * publishes tiered plans + add-ons but figures change), competitor described from
 * public info as of review date. No fabricated stats/reviews/clients; the only reviews
 * are the 2 real Clutch (not added here); not-Intuit; founder-name-zero. TechBrot does
 * NOT file taxes — stated plainly. Canonical TechBrot pricing only (per /pricing/).
 *
 * vs-table HONEST WINNER TALLY (per-row "Better fit" marker, only template classes —
 * winner carried as text inside vs-table__concede; no invented win classes):
 *   us = 5, them = 4, depends = 5  (14 rows, NOT a sweep). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  context: [
    "Bookkeeper360 is a remote bookkeeping firm that delivers monthly bookkeeping through tiered subscription plans, paired with its own app and a stack of add-on services &mdash; payroll, tax, HR, and fractional CFO advisory &mdash; and it supports both QuickBooks Online and Xero. TechBrot is an independent firm of Certified QuickBooks ProAdvisors that delivers deep bookkeeping in your own QuickBooks file and coordinates with your CPA for tax filing.",
    "We describe Bookkeeper360 from publicly available information as of the review date. Bookkeeper360 does publish pricing, but plan tiers and add-on fees change &mdash; so we describe the structure qualitatively and deliberately do not republish their dollar figures, because a stale price is worse than none. Verify current plans, tiers, and add-on prices with Bookkeeper360 directly. We earn no referral or affiliate revenue from this comparison in either direction.",
  ],
  summary: [
    "The core difference is scope and shape. <strong>Bookkeeper360</strong> bundles bookkeeping into tiered monthly plans and surrounds it with add-ons &mdash; payroll, business tax, HR, and fractional CFO advisory &mdash; all delivered through its own app, with support for QuickBooks Online <em>or</em> Xero. That appeals to owners who want bookkeeping plus several adjacent services from a single vendor, or who run their books on Xero. <strong>TechBrot</strong> takes the opposite shape: we go deep on the bookkeeping inside your own QuickBooks file, with a named Certified ProAdvisor, fixed-fee written scopes, and a clean handoff to whatever CPA you choose &mdash; but we do not file taxes ourselves, and we are QuickBooks-native rather than multi-platform.",
    "Which is better depends on what you value. If you want one provider for books plus payroll, HR, tax, and CFO-style advisory, or you&rsquo;re committed to Xero, Bookkeeper360&rsquo;s bundled model is built for that. If you want bookkeeping done deeply in a QuickBooks file you fully own, one named operator who knows your business, transparent fixed fees, and the freedom to pick your own tax pro and advisors, TechBrot is built for that. Both are legitimate firms; they&rsquo;re just different trades between breadth-of-services and depth-of-bookkeeping.",
  ],
  aiSummary: [
    { q: "What is the main difference between TechBrot and Bookkeeper360?", a: "Bookkeeper360 is a <strong>tiered bookkeeping subscription</strong> with an app and a stack of add-ons (payroll, tax, HR, fractional CFO) that supports QuickBooks Online or Xero. TechBrot is an independent <strong>QuickBooks ProAdvisor bookkeeping firm</strong> that works deep in your own QuickBooks file with a named operator and coordinates with your CPA for tax. Broad multi-service bundle vs deep QuickBooks-native bookkeeping is the choice." },
    { q: "Does TechBrot offer payroll, HR, and CFO advisory like Bookkeeper360?", a: "Not as a bundled stack. TechBrot focuses on deep bookkeeping and QuickBooks work in your own file; we coordinate with specialists for tax and can advise within the books, but we don&rsquo;t package payroll, HR, and fractional CFO services the way Bookkeeper360 does. If you want all of those from one vendor, that&rsquo;s a genuine point in their favor." },
    { q: "Which is cheaper?", a: "We don&rsquo;t republish Bookkeeper360&rsquo;s pricing because their plan tiers and add-on fees change &mdash; verify current pricing with Bookkeeper360. TechBrot prices each engagement as a written fixed fee (monthly bookkeeping $400&ndash;$2,500+/month) with no hourly billing. Compare on what&rsquo;s actually included and how it&rsquo;s billed, since a tiered subscription with optional add-ons and a dedicated fixed-fee bookkeeping engagement cover different scopes." },
    { q: "Does TechBrot support Xero like Bookkeeper360?", a: "No. TechBrot is QuickBooks-native &mdash; we work inside your own QuickBooks Online, Desktop, Enterprise, or Payroll file. Bookkeeper360 supports both QuickBooks Online and Xero. If you run your books on Xero and intend to stay there, Bookkeeper360 fits that; if you&rsquo;re on QuickBooks or migrating to it, that&rsquo;s squarely TechBrot&rsquo;s focus." },
    { q: "When is Bookkeeper360 the better choice?", a: "When you want bookkeeping bundled with payroll, HR, tax, or fractional CFO advisory from one vendor, when you prefer working through their app, or when you run your books on Xero. If a multi-service subscription is how you want to buy, their model is designed for it &mdash; and we&rsquo;ll say so honestly." },
  ],
  vsTable: [
    { cap: "Core model", tb: "Independent QuickBooks ProAdvisor bookkeeping firm", them: "Tiered bookkeeping subscription + add-on stack", winLabel: "Depends on your needs", win: "depends" },
    { cap: "Bookkeeping depth", tb: "Specialist focus — deep books, cleanup, QuickBooks", them: "Solid bookkeeping within a broader bundle", winLabel: "TechBrot", win: "us" },
    { cap: "Breadth of services", tb: "Bookkeeping + QuickBooks; CPA coordinated", them: "Books + payroll, tax, HR, fractional CFO add-ons", winLabel: "Bookkeeper360", win: "them" },
    { cap: "Software", tb: "Works inside your own QuickBooks file", them: "QuickBooks Online or Xero, via their app", winLabel: "Depends (QB vs Xero)", win: "depends" },
    { cap: "Files your taxes?", tb: "No — coordinates with your CPA", them: "Tax filing offered as an add-on", winLabel: "Bookkeeper360", win: "them" },
    { cap: "Payroll &amp; HR", tb: "Coordinates with your payroll provider", them: "Payroll and HR available as add-ons", winLabel: "Bookkeeper360", win: "them" },
    { cap: "Who does the work", tb: "Named Certified ProAdvisor operator", them: "Assigned team via the platform", winLabel: "TechBrot", win: "us" },
    { cap: "Accountability &amp; continuity", tb: "One named operator who learns your business", them: "Team-based; confirm your point of contact", winLabel: "TechBrot", win: "us" },
    { cap: "File ownership", tb: "You own your QuickBooks file fully", them: "Confirm data/file portability before committing", winLabel: "TechBrot", win: "us" },
    { cap: "Pricing model", tb: "Written fixed-fee scope, no hourly", them: "Subscription tiers + add-ons (verify current)", winLabel: "Depends on buying style", win: "depends" },
    { cap: "Advisory / CFO", tb: "Books-level advisory; specialists coordinated", them: "Fractional CFO advisory as an add-on", winLabel: "Bookkeeper360", win: "them" },
    { cap: "Choice of tax pro", tb: "Bring or pick any CPA you want", them: "Tax handled within their bundle", winLabel: "TechBrot", win: "us" },
    { cap: "Best for", tb: "Owners wanting deep books in their own QB file", them: "Owners wanting books + adjacent services bundled", winLabel: "Depends on priorities", win: "depends" },
    { cap: "Independence", tb: "Independent — no affiliation with Intuit", them: "Independent firm; verify current offering", winLabel: "Even — both independent", win: "depends" },
  ],
  verdict: [
    { eyebrow: "Choose TechBrot when", name: "You want deep books you own.", body: "You want bookkeeping done well inside your own QuickBooks file, a named operator who learns your business, transparent fixed fees, and the freedom to choose your own CPA and advisors. You value file ownership and portability over a multi-service bundle, you&rsquo;re on QuickBooks (or migrating to it), and you&rsquo;d rather have a specialist on the books than a platform team." },
    { eyebrow: "Choose Bookkeeper360 when", name: "You want a multi-service bundle.", body: "You specifically want bookkeeping alongside <em>payroll, HR, tax filing, or fractional CFO advisory</em> from one vendor, you like working through their app, or you run your books on <strong>Xero</strong> and intend to stay there. If a tiered subscription with adjacent add-ons is how you want to buy, their model is built for it &mdash; and that&rsquo;s a genuine strength." },
    { eyebrow: "Neither, when", name: "You only need one piece.", body: "If you only need a tax return filed once a year, a standalone CPA may be simpler than either model. If your books are a one-time mess, a fixed-fee cleanup (which TechBrot does) may be all you need before committing to anything ongoing. And if you need a full outsourced controller or audit-ready GAAP financials, you&rsquo;re likely looking at a dedicated accounting firm." },
  ],
  faq: [
    { q: "Is TechBrot a multi-service firm like Bookkeeper360?", a: "No, and that&rsquo;s deliberate. Bookkeeper360 bundles bookkeeping with payroll, tax, HR, and fractional CFO advisory as add-ons. TechBrot is a focused bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we go deep on the books in your own QuickBooks file and coordinate with specialists (including your CPA) for the rest. If you want all of those services from one vendor under one login, that&rsquo;s a real point in Bookkeeper360&rsquo;s favor." },
    { q: "Does TechBrot file my business taxes?", a: "No. TechBrot keeps your books accurate and CPA-ready and coordinates with your tax preparer, but we don&rsquo;t file federal or state tax returns or represent you before the IRS &mdash; your CPA or EA does that. Bookkeeper360 offers tax filing as an add-on within its bundle. If having taxes filed by the same provider matters to you, that&rsquo;s a point for the bundled model." },
    { q: "How does pricing compare?", a: "We can&rsquo;t give an apples-to-apples number, and we won&rsquo;t republish Bookkeeper360&rsquo;s pricing because their plan tiers and add-on fees change &mdash; verify current pricing with Bookkeeper360 directly. TechBrot bookkeeping is a written fixed fee ($400&ndash;$2,500+/month depending on volume and complexity), with no hourly billing and the scope agreed before any work. Compare what&rsquo;s actually included, since a tiered subscription with optional add-ons and a dedicated bookkeeping engagement aren&rsquo;t the same scope." },
    { q: "Does TechBrot support Xero, or only QuickBooks?", a: "Only QuickBooks. TechBrot is QuickBooks-native &mdash; our operators are Certified ProAdvisors who work inside your own QuickBooks Online, Desktop, Enterprise, or Payroll file. Bookkeeper360 supports both QuickBooks Online and Xero. If you run your books on Xero and plan to stay there, Bookkeeper360 fits that; if you&rsquo;re on QuickBooks or want to migrate to it, that&rsquo;s exactly what a ProAdvisor does." },
    { q: "Will I own my QuickBooks file with TechBrot?", a: "Yes. We work inside your own QuickBooks file, so your complete history is always yours and travels with you if you ever leave. With any app-based or bundled service, ask specifically how your data and file portability work before you commit &mdash; especially if bookkeeping is delivered through the provider&rsquo;s own platform &mdash; so you&rsquo;re never locked in." },
    { q: "Can TechBrot work alongside my existing CPA and payroll provider?", a: "Yes &mdash; that&rsquo;s the model. We do the monthly bookkeeping and hand clean, reconciled, CPA-ready books to whatever tax professional you use, and we coordinate with your existing payroll provider rather than replacing it. If you don&rsquo;t have a CPA, we can recommend one in your state. Where Bookkeeper360 bundles those services in-house, TechBrot keeps your books at the center and lets you choose the surrounding providers." },
    { q: "Is TechBrot affiliated with Bookkeeper360 or Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm, not affiliated with Bookkeeper360 or Intuit, and we earn no referral or affiliate revenue from this comparison. We hold active Intuit certifications and use QuickBooks; QuickBooks and Intuit are registered trademarks of Intuit Inc. Bookkeeper360 details are described from publicly available information as of the review date &mdash; verify current specifics with the provider." },
  ],
  related: [
    { title: "TechBrot vs Bench Accounting", href: "/vs/techbrot-vs-bench/", body: "How TechBrot compares to Bench&rsquo;s bookkeeping subscription model, including Bench&rsquo;s December 2024 shutdown." },
    { title: "TechBrot vs Bookkeeper.com", href: "/vs/techbrot-vs-bookkeeper-com/", body: "Another bundled online bookkeeping-and-tax service compared against an independent ProAdvisor firm." },
    { title: "TechBrot vs 1-800Accountant", href: "/vs/techbrot-vs-1-800-accountant/", body: "A national bundled tax-and-books service compared against an independent QuickBooks ProAdvisor firm." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons — the same honest read each time." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/techbrot-vs-bookkeeper360/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vsbk360-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"TechBrot vs Bookkeeper360","item":url}]},
        {"@type":"ItemList","@id":url+"#dimensions","name":"TechBrot vs Bookkeeper360 comparison dimensions","itemListElement":data.vsTable.map(function(r,i){return {"@type":"ListItem","position":i+1,"name":stripTags(r.cap)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
