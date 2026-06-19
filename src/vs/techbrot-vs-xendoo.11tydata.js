/* /vs/techbrot-vs-xendoo/ — t-mofu competitor comparison (vs Wave C).
 * Clone of the techbrot-vs-1-800-accountant shape. HONESTY (v4 GROUP-3 rules):
 * fair read, ProAdvisor preference disclosed, competitor named where it's the
 * better fit, NO fabricated competitor pricing (deferred to vendor), competitor
 * described from public info as of review date. No fabricated stats/reviews;
 * not-Intuit, not-Xendoo; founder-name-zero. TechBrot does NOT file taxes —
 * stated plainly. 14-dimension vs-table carries an explicit per-row winner
 * marker in the "Edge" column (honest mix: TechBrot / Xendoo / Depends). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  context: [
    "Xendoo is an online bookkeeping service that delivers monthly bookkeeping through flat-rate subscription plans on its own app and dashboard, with a dedicated bookkeeping team and optional add-ons for tax filing and CFO-style advisory. It supports both QuickBooks Online and Xero, and is known for catch-up bookkeeping and flat-rate simplicity. TechBrot is an independent firm of Certified QuickBooks ProAdvisors that delivers deep bookkeeping inside your own QuickBooks file, with a named operator and fixed-fee written scopes, and coordinates with your CPA for tax filing.",
    "We describe Xendoo from publicly available information as of the review date, and we deliberately do not republish their pricing &mdash; they set and change it, and a stale price is worse than none. Verify current plans and prices with Xendoo directly. We earn no referral or affiliate revenue from this comparison in either direction.",
  ],
  summary: [
    "The core difference is packaging and ownership. <strong>Xendoo</strong> bundles bookkeeping into flat monthly plans delivered through its own app, with a dedicated team and optional tax filing and CFO advisory layered on top &mdash; a turnkey, predictable, books-in-an-app experience for owners who want one provider and one flat bill. <strong>TechBrot</strong> takes a different shape: we go deep on the bookkeeping inside your own QuickBooks file, with a named Certified ProAdvisor, fixed-fee written scopes, and a clean handoff to whatever CPA you choose &mdash; but we do not file taxes ourselves.",
    "Which is better depends on what you value. If flat-rate simplicity, a polished dashboard, and the option to add tax filing and advisory from the same provider matter most, Xendoo&rsquo;s model is built for that &mdash; and its catch-up bookkeeping is a genuine strength. If you want bookkeeping done deeply in a file you fully own, a named operator who learns your business, transparent fixed fees scoped to your complexity, and the freedom to pick your own tax pro, TechBrot is built for that. Both are legitimate; they&rsquo;re just different trades.",
  ],
  aiSummary: [
    { q: "What is the main difference between TechBrot and Xendoo?", a: "Xendoo is a <strong>flat-rate online bookkeeping service</strong> delivered through its own app, with a dedicated team and optional tax filing and CFO advisory bundled in. TechBrot is an independent <strong>QuickBooks ProAdvisor bookkeeping firm</strong> that works in your own QuickBooks file with a named operator and coordinates with your CPA for tax &mdash; it does not file taxes itself. Flat-rate books-in-an-app vs deep-bookkeeping-plus-your-own-CPA is the choice." },
    { q: "Does TechBrot file business taxes like Xendoo can?", a: "No. TechBrot delivers operational bookkeeping and keeps your file CPA-ready; tax filing and IRS representation are handled by your CPA or EA. Xendoo offers tax filing as part of its bundled plans or add-ons. If having your taxes filed by the same provider that keeps your books is a priority, that&rsquo;s a point for Xendoo&rsquo;s bundled model." },
    { q: "Which is cheaper?", a: "We don&rsquo;t publish Xendoo&rsquo;s pricing because they set and change it &mdash; verify current plans with Xendoo. TechBrot prices each engagement as a written fixed fee (monthly bookkeeping typically $400&ndash;$2,500+/month) with no hourly billing. Compare on what&rsquo;s included and how it&rsquo;s billed, not a single headline number, since a flat plan tied to monthly expenses and a scoped bookkeeping engagement cover different work." },
    { q: "Whose software do you work in?", a: "TechBrot works inside <strong>your own QuickBooks file</strong>, so your complete history stays with you. Xendoo delivers through its own app and dashboard while supporting QuickBooks Online and Xero on the back end. If you want to work natively in QuickBooks and own the file outright, that favors TechBrot; if you prefer a single purpose-built dashboard, that favors Xendoo." },
    { q: "When is Xendoo the better choice?", a: "When you want flat-rate monthly bookkeeping in a polished app, the option to bundle tax filing and CFO advisory from one provider, and a turnkey experience over working inside your own QuickBooks file &mdash; or when you need fast catch-up bookkeeping at a predictable flat rate. If that&rsquo;s the priority, Xendoo&rsquo;s model is designed for it, and we&rsquo;ll say so honestly." },
  ],
  // 14-dimension vs-table. edge = explicit per-row winner marker (honest mix:
  // "TechBrot" / "Xendoo" / "Depends"). No fabricated competitor pricing.
  vsTable: [
    { cap: "Core model", tb: "Independent QuickBooks ProAdvisor bookkeeping firm", them: "Flat-rate online bookkeeping service on its own app", edge: "Depends" },
    { cap: "Files your taxes?", tb: "No &mdash; coordinates with your CPA", them: "Yes &mdash; tax filing offered in plans/add-ons", edge: "Xendoo" },
    { cap: "Software you work in", tb: "Your own QuickBooks file (Online, Desktop, Enterprise)", them: "Xendoo app/dashboard; QuickBooks Online + Xero supported", edge: "Depends" },
    { cap: "Who does the work", tb: "Named Certified ProAdvisor operator", them: "Dedicated bookkeeping team", edge: "TechBrot" },
    { cap: "Continuity", tb: "Named operator; network backs continuity", them: "Team-based; named contact may rotate", edge: "TechBrot" },
    { cap: "File ownership &amp; portability", tb: "You own your QuickBooks file fully, export anytime", them: "Books live in supported software; confirm export terms", edge: "TechBrot" },
    { cap: "Pricing model", tb: "Written fixed-fee scope, no hourly", them: "Flat monthly plans (verify current with Xendoo)", edge: "Depends" },
    { cap: "Pricing transparency", tb: "Quoted as a written fixed fee before work begins", them: "Published flat tiers; predictable for standard scopes", edge: "Depends" },
    { cap: "Bookkeeping depth &amp; complexity", tb: "Specialist depth &mdash; cleanup, payroll, sales tax, multi-entity", them: "Strong on standard monthly books and catch-up", edge: "TechBrot" },
    { cap: "Catch-up / cleanup", tb: "Dedicated fixed-fee cleanup &amp; catch-up engagements", them: "Catch-up bookkeeping is a published strength", edge: "Depends" },
    { cap: "Advisory / CFO services", tb: "Operational books; advisory coordinated as scoped", them: "CFO-style advisory available as an add-on", edge: "Xendoo" },
    { cap: "Dashboard / app experience", tb: "QuickBooks reporting in your own file", them: "Purpose-built app and dashboard", edge: "Xendoo" },
    { cap: "Choice of tax pro", tb: "Bring or pick any CPA you want", them: "Tax handled in-house within the bundle", edge: "Depends" },
    { cap: "Independence", tb: "Independent &mdash; no affiliation with Intuit", them: "Independent service; verify current offering", edge: "Depends" },
  ],
  verdict: [
    { eyebrow: "Choose TechBrot when", name: "You want deep books you own.", body: "You want bookkeeping done well inside your own QuickBooks file, a named operator who learns your business, transparent fixed fees scoped to your complexity, and the freedom to choose your own CPA. You value file ownership and portability, you have payroll, sales tax, inventory, or multi-entity complexity, and you&rsquo;d rather have a specialist on the books than a flat-rate app." },
    { eyebrow: "Choose Xendoo when", name: "You want flat-rate books in an app.", body: "You want predictable flat monthly pricing, a polished dashboard, and the option to bundle tax filing and CFO-style advisory from one provider &mdash; and you&rsquo;re comfortable having your books live in their app rather than working inside your own QuickBooks file. If turnkey simplicity or fast catch-up bookkeeping at a flat rate is the goal, Xendoo&rsquo;s model is built for it." },
    { eyebrow: "Neither, when", name: "You only need one piece.", body: "If you only need a tax return filed once a year, a standalone CPA may be simpler than either ongoing service. If your books are a one-time mess, a fixed-fee cleanup (which both firms offer) may be all you need before deciding on anything recurring. And if you need full controller or audit-ready GAAP work, you&rsquo;re likely looking at a CPA firm or outsourced controller instead." },
  ],
  faq: [
    { q: "Is TechBrot a tax preparer like Xendoo?", a: "No. TechBrot is a bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate and CPA-ready and coordinate with your tax preparer, but we don&rsquo;t file federal or state tax returns or represent you before the IRS. Xendoo offers tax filing within its plans or as an add-on. If you want tax filing bundled with bookkeeping in one provider, that&rsquo;s a genuine point in Xendoo&rsquo;s favor." },
    { q: "How does pricing compare?", a: "We can&rsquo;t give an apples-to-apples number, and we won&rsquo;t republish Xendoo&rsquo;s pricing because they set and change it &mdash; verify current plans with Xendoo. TechBrot bookkeeping is a written fixed fee (typically $400&ndash;$2,500+/month depending on volume and complexity), with no hourly billing and the scope agreed before any work. Compare what&rsquo;s actually included, since a flat plan tied to monthly expenses and a scoped bookkeeping engagement aren&rsquo;t the same work. See <a href=\"/pricing/\">our pricing</a> for how TechBrot scopes a fee." },
    { q: "Do I work in QuickBooks with each service?", a: "With TechBrot, yes &mdash; we work inside your own QuickBooks file (Online, Desktop, or Enterprise), so your complete history is always yours and travels with you if you ever leave. Xendoo delivers through its own app and dashboard while supporting QuickBooks Online and Xero on the back end. If working natively in QuickBooks and owning the file outright matters to you, ask Xendoo specifically how file access and data portability work before you commit." },
    { q: "Which is better for catch-up or cleanup bookkeeping?", a: "Both handle it, and it&rsquo;s a published strength for Xendoo, delivered at a flat rate through its app. TechBrot scopes cleanup and catch-up as dedicated fixed-fee engagements inside your own QuickBooks file, which tends to fit better when the backlog is large, messy, or spans payroll, sales tax, or multiple entities. For a straightforward catch-up, either can work; for a complex reconstruction, the ProAdvisor depth usually shows." },
    { q: "Can TechBrot work alongside my existing CPA?", a: "Yes &mdash; that&rsquo;s the model. We do the monthly bookkeeping and hand clean, reconciled, CPA-ready books to whatever tax professional you use, with a year-end handoff included on recurring engagements. Xendoo tends to keep tax in-house within its bundle. If you already have a CPA you trust, TechBrot&rsquo;s coordinate-with-your-CPA approach lets you keep them; if you don&rsquo;t have one, we can recommend one in your state." },
    { q: "Which is better for a brand-new business?", a: "It depends on whether you want flat-rate books with optional tax in one app (Xendoo&rsquo;s strength) or a clean QuickBooks setup with deep bookkeeping and your own choice of tax pro (TechBrot&rsquo;s strength). For a new business, getting QuickBooks set up correctly from day one matters a lot &mdash; that&rsquo;s squarely what a ProAdvisor does &mdash; but if you value a single predictable bill and a turnkey app over file ownership, Xendoo may suit you better." },
    { q: "Is TechBrot affiliated with Xendoo or Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm, not affiliated with Xendoo or Intuit, and we earn no referral or affiliate revenue from this comparison. We hold active Intuit certifications and use QuickBooks; QuickBooks and Intuit are registered trademarks of Intuit Inc. Xendoo details are described from publicly available information as of the review date." },
  ],
  related: [
    { title: "TechBrot vs Bench Accounting", href: "/vs/techbrot-vs-bench/", body: "How TechBrot compares to Bench&rsquo;s flat-fee bookkeeping subscription, including Bench&rsquo;s December 2024 shutdown." },
    { title: "TechBrot vs Bookkeeper.com", href: "/vs/techbrot-vs-bookkeeper-com/", body: "Another bundled online bookkeeping-and-tax service compared against an independent ProAdvisor firm." },
    { title: "TechBrot vs 1-800Accountant", href: "/vs/techbrot-vs-1-800-accountant/", body: "A national service that bundles tax filing with bookkeeping, compared against deep QuickBooks-native books." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons &mdash; the same honest read each time." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/techbrot-vs-xendoo/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-xendoo-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"TechBrot vs Xendoo","item":url}]},
        {"@type":"ItemList","@id":url+"#dimensions","name":"TechBrot vs Xendoo comparison dimensions","itemListElement":data.vsTable.map(function(r,i){return {"@type":"ListItem","position":i+1,"name":stripTags(r.cap)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
