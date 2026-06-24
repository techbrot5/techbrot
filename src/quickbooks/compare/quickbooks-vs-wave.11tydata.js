/* /quickbooks/compare/quickbooks-vs-wave/ — t-mofu COMPARISON page. Cloned from
 * vs/techbrot-vs-bench (structure), with the Bench-only "#...-status" disclosure
 * + "#...-migration" process-diagram sections (and their benchStatus[] / migration[]
 * data) DROPPED. Kept: byline, summary, aiSummary, vs-table, verdict (3), faq,
 * review, related.
 *
 * HONESTY/FAIRNESS (today 2026-06): TechBrot is a Certified QuickBooks ProAdvisor
 * firm — we state our QuickBooks preference openly and then give a FAIR read.
 * Wave's genuine, durable, well-documented strength is COST: Wave's core accounting
 * + invoicing is FREE; Wave monetizes paid add-ons (payments, payroll). Best for
 * solopreneurs / freelancers / very small businesses with simple needs and tight
 * budgets. QuickBooks Online's strengths: depth + scalability (inventory, projects,
 * classes, advanced reporting), the large U.S. accountant/ProAdvisor ecosystem, app
 * integrations, and room to grow. We DO NOT invent QBO or Wave paid add-on prices —
 * "Wave core accounting + invoicing is free" is the only pricing fact stated; all
 * other figures are deferred to the vendors. Canonical TechBrot pricing only.
 * Independent firm — not affiliated with Intuit Inc. or Wave Financial Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "The honest summary." — one-paragraph plain read.
  summary: [
    "<strong>We&rsquo;re a Certified QuickBooks ProAdvisor firm, so we have a preference &mdash; and we&rsquo;ll be upfront about it.</strong> That said, this is a fair read. <strong>Wave</strong> earns its place: its core accounting and invoicing are genuinely free, which makes it a legitimately good choice for solopreneurs, freelancers, and very small businesses with simple books and tight budgets. Wave makes its money on paid add-ons such as payments and payroll, so the &ldquo;free&rdquo; tier is durable, not a trap. <strong>QuickBooks Online</strong> is the better fit when you need depth and room to grow &mdash; inventory, projects, classes, advanced reporting &mdash; plus the largest U.S. accountant and ProAdvisor ecosystem and the deepest app-integration library. The honest framing: if you&rsquo;re tiny and simple and watching every dollar, Wave&rsquo;s free tier is a real, defensible answer. If you need scale, professional support, or features Wave doesn&rsquo;t have, QuickBooks Online is worth paying for &mdash; and most growing businesses eventually graduate from Wave to QuickBooks for exactly those reasons.",
  ],
  // quick-5 — "in five questions." Short questions deliberately NOT identical to any
  // FAQ question, to clear the faq-overlap check.
  aiSummary: [
    { q: "What&rsquo;s the core difference?", a: "<strong>QuickBooks Online</strong> is a paid, full-depth accounting platform built to scale with a business and supported by a large U.S. accountant ecosystem. <strong>Wave</strong> is a free-to-start accounting and invoicing tool aimed at solopreneurs and very small businesses, monetized through paid add-ons like payments and payroll. Different depth, different buyer." },
    { q: "Is Wave really free?", a: "Yes &mdash; Wave&rsquo;s core accounting and invoicing are genuinely free, a well-documented and durable fact, not a limited trial. Wave earns revenue on paid add-ons such as payment processing and payroll. For a freelancer or solopreneur with simple books, the free tier can cover real needs without monthly software cost." },
    { q: "When is QuickBooks Online worth paying for?", a: "When you need depth or scale: <strong>inventory, projects, classes, locations, or advanced reporting</strong>; when you want your books in the platform most U.S. accountants and Certified ProAdvisors work in daily; or when you rely on a deep library of app integrations. QuickBooks Online gives a growing business room to grow that a free tool eventually can&rsquo;t." },
    { q: "Who is each one best for?", a: "<strong>Wave</strong> is best for solopreneurs, freelancers, and very small businesses with simple needs and tight budgets. <strong>QuickBooks Online</strong> is best for businesses that need professional support, multi-user roles, more powerful reporting, or features and integrations that a free tool doesn&rsquo;t offer &mdash; and for any business that expects to keep growing." },
    { q: "We&rsquo;re outgrowing Wave &mdash; what now?", a: "It&rsquo;s a common, healthy transition. When a Wave business starts needing inventory, classes, project profitability, tighter reporting, or a professional in the file, that&rsquo;s usually the signal to move to QuickBooks Online. A <a href=\"/quickbooks/migration/\">QuickBooks migration</a> engagement sets up the file and brings your history across; a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> is a good first step." },
  ],
  // vs-table — the comparison rendered as the tier-signature vs-scroll + vs-table.
  // "qbo" = QuickBooks Online column (vs-table__us). "wave" = Wave column.
  vsTable: [
    { cap: "Best fit", qbo: "Small businesses needing depth &amp; room to grow", wave: "Solopreneurs, freelancers, very small businesses" },
    { cap: "Entry cost", qbo: "Paid subscription (tiered &mdash; see Intuit for current pricing)", wave: "Core accounting &amp; invoicing are free" },
    { cap: "How it earns", qbo: "Monthly software subscription", wave: "Free core; paid add-ons (payments, payroll)" },
    { cap: "Accounting depth", qbo: "Full double-entry, deep reporting, customizable", wave: "Solid double-entry for simple books" },
    { cap: "Inventory tracking", qbo: "Built-in on higher tiers", wave: "Not a focus &mdash; manual at best" },
    { cap: "Projects &amp; job costing", qbo: "Project profitability on higher tiers", wave: "Not offered" },
    { cap: "Classes &amp; locations", qbo: "Class &amp; location tracking on higher tiers", wave: "Not offered" },
    { cap: "Advanced reporting", qbo: "Extensive, customizable financial reports", wave: "Core financial reports, limited customization" },
    { cap: "Multi-user roles", qbo: "Multiple users with role-based access", wave: "Limited collaborator access" },
    { cap: "App integrations", qbo: "Large third-party app marketplace", wave: "Narrow integration ecosystem" },
    { cap: "Accountant ecosystem", qbo: "Large U.S. accountant &amp; ProAdvisor base", wave: "Far fewer accountants work in Wave" },
    { cap: "Room to scale", qbo: "Designed to grow with the business", wave: "Best while needs stay simple" },
  ],
  // 3 verdict profiles — buyer-cards.
  verdict: [
    { eyebrow: "Choose QuickBooks Online if", name: "You need depth, scale, or professional support.", body: "You need <strong>inventory, projects, classes, locations, or advanced reporting</strong>; you want your books in the platform <strong>most U.S. accountants and Certified ProAdvisors</strong> work in; you rely on a <strong>deep app-integration ecosystem</strong>; you need <strong>multiple users with role-based access</strong>; or you simply expect to <strong>keep growing</strong> and want software that grows with you. QuickBooks Online is a paid platform &mdash; and for businesses that need this depth, it&rsquo;s worth it." },
    { eyebrow: "Wave is the better fit if", name: "You&rsquo;re tiny, simple, and watching every dollar.", body: "You&rsquo;re a <strong>solopreneur, freelancer, or very small business</strong> with <strong>simple books</strong> and a <strong>tight budget</strong>, you mainly need <strong>clean invoicing and basic accounting</strong>, and you don&rsquo;t need inventory, projects, classes, or advanced reporting. Wave&rsquo;s <strong>core accounting and invoicing are genuinely free</strong> &mdash; a durable, well-documented fact &mdash; so for the smallest, simplest businesses on a budget, it&rsquo;s a legitimately good choice. We&rsquo;ll say so plainly." },
    { eyebrow: "Plan to graduate from Wave when", name: "You start outgrowing what a free tool can do.", body: "You begin needing <strong>inventory, project profitability, class or location tracking, tighter reporting, multi-user roles, or a professional working in your file</strong>; integrations you want aren&rsquo;t available; or a lender or CPA needs cleaner, more complete financials. That&rsquo;s the natural signal to move to <strong>QuickBooks Online</strong>. A <a href=\"/quickbooks/migration/\">migration</a> brings your history across, and a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> tells you whether you&rsquo;re there yet." },
  ],
  // page-review prose + trust-row — "Reviewed by the TechBrot Certified ProAdvisor team."
  reviewProse: [
    "This comparison is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm. We disclose our QuickBooks preference and aim for a fair read of Wave. The one pricing fact stated &mdash; that Wave&rsquo;s core accounting and invoicing are free, with revenue coming from paid add-ons &mdash; is well-documented and durable; we deliberately do not quote specific QuickBooks Online or Wave add-on prices here, deferring those to the vendors&rsquo; current pricing. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files. Independent firm &mdash; not affiliated with Intuit Inc. or Wave Financial Inc.",
  ],
  reviewSpec: [
    { value: "Active", label: "Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Disclosed", label: "ProAdvisor preference stated &middot; Wave assessed fairly" },
    { value: "Vendor-deferred", label: "no invented add-on prices; Wave-core-free is the only figure stated" },
    { value: "Independent", label: "firm &mdash; not affiliated with Intuit Inc. or Wave Financial Inc." },
  ],
  // 3 related comparisons (BUILT-wave) — stack-8.
  related: [
    { title: "QuickBooks Online vs Xero", href: "/quickbooks/compare/quickbooks-vs-xero/", body: "Two full-depth cloud accounting platforms compared. A closer, feature-for-feature read than the Wave comparison." },
    { title: "QuickBooks Online vs FreshBooks", href: "/quickbooks/compare/quickbooks-vs-freshbooks/", body: "FreshBooks leans invoicing-first for service businesses. Where it fits and where QuickBooks Online pulls ahead." },
    { title: "All QuickBooks comparisons", href: "/quickbooks/compare/", body: "The full library of QuickBooks comparisons against the alternatives, written with the same honest read each time." },
  ],
  // 6 FAQ — flat prose answers.
  faq: [
    { q: "Is Wave actually free, or is there a catch?", a: "Wave&rsquo;s core accounting and invoicing are genuinely free &mdash; this is well-documented and durable, not a limited trial that expires. Wave makes its money on paid add-ons such as payment processing and payroll, which you only pay for if you use them. For a solopreneur or freelancer with simple books, the free tier can cover real, everyday needs without a monthly software bill. We&rsquo;re a QuickBooks ProAdvisor firm and we&rsquo;ll still say it plainly: for the smallest, simplest businesses on a budget, free is a real advantage." },
    { q: "Why would I pay for QuickBooks Online when Wave is free?", a: "Because depth and scale are worth paying for once you need them. QuickBooks Online offers inventory, projects, classes and locations, multi-user role-based access, and far more powerful, customizable reporting than a free tool provides. It&rsquo;s also the platform most U.S. accountants and Certified ProAdvisors work in every day, with the deepest library of app integrations. If your business is growing or already complex, those capabilities save time and money that a free tool can&rsquo;t. If your books are genuinely simple, you may not need them yet &mdash; and that&rsquo;s a fair reason to stay on Wave for now." },
    { q: "Who is Wave actually best for?", a: "Solopreneurs, freelancers, side businesses, and very small businesses with simple needs and tight budgets. If you mostly send invoices, track income and expenses, and want clean basic financials without paying for software, Wave is a legitimately good fit. Where Wave runs out of room is depth: it doesn&rsquo;t offer inventory, project profitability, class or location tracking, or advanced reporting, and fewer accountants work inside it. For a simple business, none of that may matter &mdash; which is exactly why Wave works for the buyers it serves." },
    { q: "Will I outgrow Wave, and how will I know?", a: "Many growing businesses do, and the signals are consistent. You start needing inventory tracking, project or job profitability, class or location tracking, tighter or more customizable reporting, multiple users with different permissions, or an integration Wave doesn&rsquo;t support. Or a lender, investor, or CPA needs cleaner, more complete financials than the free tier produces. When several of those show up at once, that&rsquo;s usually the point to move to QuickBooks Online. There&rsquo;s no shame in graduating &mdash; Wave did its job getting you started." },
    { q: "Can TechBrot help me move from Wave to QuickBooks Online?", a: "Yes. We handle the full transition: a QuickBooks migration sets up your new file and brings your history across, a cleanup engagement reconciles and corrects anything that didn&rsquo;t carry over cleanly, and ongoing monthly bookkeeping continues from there with the same operator. A good first step is a free file review &mdash; we&rsquo;ll tell you honestly whether you&rsquo;re actually ready to move or whether staying on Wave a while longer makes more sense for now." },
    { q: "Do you only recommend QuickBooks because you&rsquo;re a ProAdvisor?", a: "We disclose the preference openly, and we hold no reseller or referral incentive that changes the read. Our honest position is that QuickBooks Online is the stronger platform when you need depth, scale, professional support, or integrations &mdash; and that Wave&rsquo;s free tier is a genuinely good choice for the smallest, simplest businesses on a budget. If you&rsquo;re tiny and simple and watching costs, we&rsquo;ll tell you Wave may serve you fine. If you need more than a free tool can do, QuickBooks Online is worth it. Same honest read either way." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/compare/quickbooks-vs-wave/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#cmp-qb-vs-wave-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Compare","item":"https://techbrot.com/quickbooks/compare/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks vs Wave","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
