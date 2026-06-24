/* /quickbooks/compare/quickbooks-vs-freshbooks/ — t-mofu COMPARISON page.
 * Cloned from src/vs/techbrot-vs-bench.* (structure), with the Bench-only
 * "status" and "migration" sections + data DROPPED. Kept: byline, summary,
 * aiSummary, vs-table, verdict (3), faq, review, related.
 *
 * HONESTY / FAIRNESS (founder rule + risk-hierarchy #4): we are Certified
 * QuickBooks ProAdvisors and prefer QBO — that preference is DISCLOSED openly,
 * not hidden. The comparison is written to be FAIR to FreshBooks:
 *   - FreshBooks BEGAN as invoicing software and LATER added double-entry
 *     accounting (state this accurately). It remains invoicing-first.
 *   - FreshBooks genuine strengths: friendly/polished UX, invoicing,
 *     estimates/proposals, time tracking, client communication; built for
 *     FREELANCERS and service-based solopreneurs / very small service businesses.
 *   - QBO genuine strengths: full double-entry accounting depth, inventory,
 *     projects/classes, scalability, large US accountant/ProAdvisor ecosystem,
 *     broad integrations.
 *   - Honest read: for a solo service provider whose main need is painless
 *     invoicing + time tracking, FreshBooks can be the happier tool; for
 *     businesses needing full accounting depth / inventory / scale with
 *     professional support, QBO is the stronger base.
 * NO fabricated FreshBooks pricing — figures are deferred to FreshBooks. Only
 * canonical TechBrot pricing (blueprint Sheet 0) appears. No fabricated stats,
 * reviews, or claims. Independent firm — not affiliated with Intuit or FreshBooks. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "The honest summary." — one-paragraph plain read with the ProAdvisor
  // preference disclosed and FreshBooks given fair credit.
  summary: [
    "<strong>FreshBooks</strong> began life as invoicing software and later added double-entry accounting, and it shows in the best way: it&rsquo;s invoicing-first, with a friendly, polished interface that freelancers and service-based solopreneurs genuinely enjoy using. Sending invoices, building estimates and proposals, tracking time against clients, and keeping client communication tidy are where it shines. <strong>QuickBooks Online</strong> was built as full double-entry accounting from the start, with inventory, projects and classes, deep customizable reporting, broad third-party integrations, and the large U.S. accountant and ProAdvisor ecosystem standing behind it. The two fit different buyers. We are Certified QuickBooks ProAdvisors, so our preference is QuickBooks &mdash; and we&rsquo;ll say that plainly rather than pretend to be neutral. But the honest read is this: if you&rsquo;re a solo service provider whose main need is painless invoicing and time tracking, FreshBooks can genuinely be the happier, simpler tool. If you need full accounting depth, inventory, multi-dimensional reporting, or you expect to grow and want professional support behind the books, QuickBooks Online is the stronger base &mdash; and the easier one for a ProAdvisor or CPA to work in alongside you.",
  ],
  // quick-5 — "in five questions." Short questions deliberately NOT identical to
  // any FAQ question, to clear the faq-overlap check.
  aiSummary: [
    { q: "What&rsquo;s the core difference?", a: "<strong>FreshBooks</strong> is invoicing-first software built for freelancers and very small service businesses &mdash; it started as invoicing and later added double-entry accounting. <strong>QuickBooks Online</strong> is full double-entry accounting built from the ground up, with inventory, projects, deep reporting, and the large U.S. accountant ecosystem behind it. They aim at different buyers." },
    { q: "Which is better for a freelancer or solo service provider?", a: "Honestly, often FreshBooks. If your main need is painless invoicing, estimates and proposals, time tracking against clients, and tidy client communication &mdash; and you don&rsquo;t need inventory or heavy accounting &mdash; FreshBooks&rsquo; friendly UX makes it the happier tool for many solopreneurs. We&rsquo;re ProAdvisors who prefer QuickBooks, and we&rsquo;ll still say that plainly." },
    { q: "Which is better for accounting depth and growth?", a: "QuickBooks Online. It offers full double-entry accounting, inventory, projects and classes, multi-dimensional and customizable reporting, broad integrations, and a large pool of U.S. accountants and Certified ProAdvisors who can work in your file. If you expect to scale or need professional support behind your books, QBO is the stronger base." },
    { q: "How does pricing compare?", a: "We don&rsquo;t quote FreshBooks pricing here &mdash; check FreshBooks directly for current tiers, since plans and promotions change. Both are subscription software with multiple tiers. Separately, if you want a ProAdvisor to run your QuickBooks books, <strong>TechBrot</strong> prices each engagement as a fixed monthly fee against a written scope, typically $400&ndash;$2,500+/month based on transaction volume, payroll, sales tax, and complexity." },
    { q: "I&rsquo;m on FreshBooks and outgrowing it &mdash; what now?", a: "If you&rsquo;re hitting FreshBooks&rsquo; limits &mdash; needing inventory, deeper reporting, multi-entity, or a CPA who wants to work directly in your file &mdash; that&rsquo;s usually the signal to move to QuickBooks Online. A TechBrot ProAdvisor can handle <a href=\"/quickbooks/migration/\">migration into QuickBooks</a>, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup of the migrated data</a>, and <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">ongoing monthly bookkeeping</a>." },
  ],
  // vs-table — 12-dimension comparison rendered as the tier-signature vs-scroll +
  // vs-table. "qbo" = QuickBooks Online column (vs-table__us). "fb" = FreshBooks.
  // NO fabricated FreshBooks pricing — figures deferred to FreshBooks.
  vsTable: [
    { cap: "Built for", qbo: "Full double-entry accounting from the ground up", fb: "Invoicing-first; freelancers &amp; service solopreneurs" },
    { cap: "Origin", qbo: "Accounting platform from the start", fb: "Started as invoicing; double-entry accounting added later" },
    { cap: "Invoicing &amp; proposals", qbo: "Solid invoicing across the accounting workflow", fb: "Excellent &mdash; polished invoices, estimates &amp; proposals" },
    { cap: "Ease of use (service solo)", qbo: "Capable but heavier; more to learn", fb: "Friendly, simple UX freelancers genuinely enjoy" },
    { cap: "Time tracking", qbo: "Available, integrated into projects/billing", fb: "Strong, built around client &amp; project billing" },
    { cap: "Accounting depth", qbo: "Full double-entry, journal entries, deep ledgers", fb: "Double-entry capable; lighter than QBO overall" },
    { cap: "Inventory", qbo: "Built-in inventory tracking (higher tiers)", fb: "Limited &mdash; not built for inventory businesses" },
    { cap: "Projects &amp; classes", qbo: "Projects, classes, and location tracking", fb: "Project tracking focused on service billing" },
    { cap: "Reporting", qbo: "Deep, customizable, multi-dimensional reports", fb: "Clean core reports; less depth than QBO" },
    { cap: "Integrations", qbo: "Broad third-party app ecosystem", fb: "Good integrations; narrower ecosystem" },
    { cap: "Accountant ecosystem", qbo: "Large U.S. accountant / ProAdvisor network", fb: "Smaller accountant footprint in the U.S." },
    { cap: "Scalability", qbo: "Scales into complex, growing businesses", fb: "Best for solo &amp; very small service businesses" },
  ],
  // 3 verdict profiles — buyer-cards.
  verdict: [
    { eyebrow: "Choose QuickBooks Online if", name: "You need real accounting depth and room to grow.", body: "You want <strong>full double-entry accounting</strong> from the ground up; you need <strong>inventory</strong>, <strong>projects, classes, or location tracking</strong>; you rely on <strong>deep, customizable, multi-dimensional reporting</strong>; you depend on a <strong>broad integration ecosystem</strong>; you want to work with the <strong>large U.S. accountant and Certified ProAdvisor network</strong> &mdash; including a CPA who can open your file directly; or you expect to <strong>scale</strong> and want a base that grows with you and supports professional bookkeeping behind the work." },
    { eyebrow: "FreshBooks is the better fit if", name: "You&rsquo;re a solo, service-based, invoicing-first business.", body: "You&rsquo;re a <strong>freelancer or service-based solopreneur</strong> (or a very small service business), and your main needs are <strong>painless invoicing</strong>, <strong>estimates and proposals</strong>, <strong>time tracking against clients</strong>, and <strong>tidy client communication</strong>. You value a <strong>friendly, polished, simple interface</strong> over deep accounting features, you don&rsquo;t need inventory, and you&rsquo;re not yet juggling complex reporting or multi-entity work. <strong>We&rsquo;ll say it plainly:</strong> for this buyer, FreshBooks is often the happier tool, even though we&rsquo;re ProAdvisors who prefer QuickBooks." },
    { eyebrow: "Switch from FreshBooks to QBO when", name: "You&rsquo;ve outgrown invoicing-first software.", body: "Move to QuickBooks Online when you start to need <strong>real accounting depth</strong> beyond FreshBooks&rsquo; comfort zone &mdash; for example when you need <strong>inventory tracking</strong>, <strong>multi-dimensional or more customizable reporting</strong>, <strong>projects/classes at scale</strong>, <strong>multi-entity</strong> structure, or a <strong>CPA or ProAdvisor working directly in your file</strong>. Growing transaction volume, payroll complexity, and the need for lender- or CPA-ready financials are all signals. A TechBrot ProAdvisor can handle the migration, cleanup, and ongoing bookkeeping so the move doesn&rsquo;t cost you continuity." },
  ],
  // page-review prose + trust-row — "Reviewed by the TechBrot Certified ProAdvisor team."
  reviewProse: [
    "This comparison is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm. We hold a disclosed preference for QuickBooks and have written the comparison to be fair to FreshBooks &mdash; crediting its invoicing-first heritage, its friendly UX for freelancers and service solopreneurs, and the fact that it began as invoicing software and later added double-entry accounting. We have not quoted FreshBooks pricing; for current FreshBooks plans, check FreshBooks directly. The only pricing figures here are TechBrot&rsquo;s canonical ProAdvisor engagement fees. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files.",
  ],
  reviewSpec: [
    { value: "Active", label: "Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Disclosed", label: "ProAdvisor preference for QuickBooks stated openly; FreshBooks credited fairly" },
    { value: "Deferred", label: "FreshBooks pricing not quoted &mdash; check FreshBooks for current plans" },
    { value: "Independent", label: "firm &mdash; not affiliated with FreshBooks or Intuit Inc." },
  ],
  // related comparisons — BUILT-only links (same wave): QBO vs Wave, QBO vs Xero,
  // and the Compare hub.
  related: [
    { title: "QuickBooks Online vs Wave", href: "/quickbooks/compare/quickbooks-vs-wave/", body: "Wave is free accounting software aimed at the smallest businesses. A fair read on where free is enough and where QuickBooks earns its cost." },
    { title: "QuickBooks Online vs Xero", href: "/quickbooks/compare/quickbooks-vs-xero/", body: "Xero is QuickBooks&rsquo; closest full-accounting rival. How the two compare on depth, ecosystem, and U.S. accountant support." },
    { title: "All QuickBooks comparisons", href: "/quickbooks/compare/", body: "The full library of QuickBooks comparisons against alternatives, written with the same honest, disclosed-preference read each time." },
  ],
  // 6 FAQ — flat prose answers (faq[6-7]; six provided), honest + fair.
  faq: [
    { q: "Is FreshBooks a good choice for freelancers?", a: "Yes &mdash; genuinely. FreshBooks began as invoicing software and is built around the freelancer and service-based solopreneur. Its invoicing, estimates and proposals, time tracking, and client communication are excellent, and the interface is friendly and simple to learn. We&rsquo;re Certified QuickBooks ProAdvisors and prefer QuickBooks, but we&rsquo;ll say it plainly: if your main need is painless invoicing and time tracking and you don&rsquo;t need deep accounting or inventory, FreshBooks can be the happier tool for you." },
    { q: "What does QuickBooks Online do that FreshBooks does not?", a: "QuickBooks Online is full double-entry accounting built from the ground up, where FreshBooks started as invoicing and added double-entry accounting later. QBO offers built-in inventory tracking, projects and classes, location tracking, deep and customizable multi-dimensional reporting, and a broad third-party integration ecosystem. It is also backed by the large U.S. accountant and Certified ProAdvisor network, so a professional can open and work in your file directly. For businesses that need accounting depth or expect to scale, those differences matter." },
    { q: "Does FreshBooks really do double-entry accounting?", a: "Yes. FreshBooks added double-entry accounting after its early years as invoicing-first software, so it now supports proper double-entry books. It is, however, lighter overall than QuickBooks Online &mdash; the accounting depth, inventory, and reporting flexibility are not at the same level. For a solo service business that mostly invoices and tracks time, FreshBooks&rsquo; accounting is usually plenty. For more complex needs, QuickBooks Online goes further." },
    { q: "How much do QuickBooks Online and FreshBooks cost?", a: "Both are subscription software with multiple tiers, and pricing and promotions change, so we don&rsquo;t quote FreshBooks figures here &mdash; check FreshBooks directly for current plans, and compare QuickBooks Online&rsquo;s current tiers on Intuit&rsquo;s site. The only pricing we publish is TechBrot&rsquo;s own: if you want a ProAdvisor to run your QuickBooks books, engagements are a fixed monthly fee against a written scope, typically $400&ndash;$2,500+/month based on transaction volume, payroll, sales tax, and complexity." },
    { q: "When should I switch from FreshBooks to QuickBooks Online?", a: "When you outgrow invoicing-first software. The usual signals are needing inventory tracking, deeper or more customizable reporting, projects and classes at scale, multi-entity structure, growing transaction volume or payroll complexity, lender- or CPA-ready financials, or a CPA who wants to work directly in your file. At that point QuickBooks Online&rsquo;s accounting depth and accountant ecosystem make it the stronger base. A TechBrot ProAdvisor can handle the migration, cleanup, and ongoing bookkeeping so you don&rsquo;t lose continuity." },
    { q: "Can TechBrot help me move from FreshBooks to QuickBooks?", a: "Yes. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with FreshBooks or Intuit. If you decide QuickBooks Online is the better base, an operator helps you export your data from FreshBooks, migrate it into a properly structured QuickBooks Online file, clean up any gaps, and then run ongoing monthly bookkeeping with the same named operator. If, after talking it through, FreshBooks is genuinely the better fit for your situation, we&rsquo;ll tell you that honestly." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/compare/quickbooks-vs-freshbooks/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#cmp-qb-vs-freshbooks-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Compare","item":"https://techbrot.com/quickbooks/compare/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks vs FreshBooks","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
