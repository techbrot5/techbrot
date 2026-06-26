/* /vs/cpa-vs-ea/ — t-mofu definitional comparison (round 88, vs Wave B).
 * Uses partials/vs-compare-body.njk. TechBrot is NEITHER side (no usSide) — it's
 * the bookkeeping layer beneath both. HONESTY: general info not tax advice; no
 * fabricated stats; not-Intuit; founder-name-zero. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  bylineName: "By the Certified QuickBooks ProAdvisor team",
  bylineReview: "Reviewed by a Certified QuickBooks ProAdvisor &middot; independent bookkeeping firm &mdash; we work with both CPAs and EAs",
  summary: [
    "Both a <strong>CPA</strong> and an <strong>EA</strong> are credentialed tax professionals who can prepare your returns and represent you before the IRS &mdash; so for many small businesses, either can handle tax filing. The difference is scope and licensing. A <strong>CPA</strong> is licensed by a state board and can also perform audits, provide attestation, and produce GAAP financials. An <strong>EA</strong> (Enrolled Agent) is licensed federally by the IRS, specializes specifically in taxation, and has unlimited representation rights in all 50 states &mdash; but cannot perform audits or attestation.",
    "Put simply: for tax preparation and IRS matters, an EA is a focused specialist and a CPA is a broader generalist who can also do audit and assurance work. Neither &lsquo;wins&rsquo; &mdash; it depends on what you need. <strong>TechBrot is neither</strong>; we&rsquo;re the independent bookkeeping firm that keeps your records accurate and ready, and coordinates cleanly with whichever you use. This page is general information, not tax advice. Not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What's the difference between a CPA and an EA?", a: "A <strong>CPA</strong> is state-licensed and broad &mdash; tax, audits, attestation, GAAP financials, and IRS representation. An <strong>EA</strong> is federally licensed by the IRS, specialized in taxation, with unlimited IRS representation rights in all states but no audit or attestation authority. Both can prepare taxes and represent you before the IRS." },
    { q: "Can both a CPA and an EA file my taxes?", a: "Yes. Both are fully credentialed to prepare and file federal and state tax returns and to represent you before the IRS. For straightforward tax filing, either is qualified. The CPA additionally can perform audits and attestation; the EA is a dedicated tax specialist." },
    { q: "Is a CPA better than an EA?", a: "Not inherently &mdash; it depends on need. For pure tax work and IRS representation, an EA is a focused specialist (and often more affordable). For audits, assurance, GAAP financials, or broader financial advisory alongside tax, a CPA&rsquo;s wider license matters. Many businesses use one or the other; some use both for different needs." },
    { q: "Which is cheaper, a CPA or an EA?", a: "EAs are often more affordable for tax preparation and IRS representation because their practice is tax-focused, while CPAs command premium rates reflecting their broader license. But fees vary widely by firm, region, and complexity, so compare specific quotes rather than assuming. Clean books lower the bill either way." },
    { q: "Does TechBrot replace a CPA or EA?", a: "No. TechBrot is a bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we keep your books accurate and tax-ready and coordinate with your CPA or EA, but we don&rsquo;t file returns or represent you before the IRS. We&rsquo;re the layer beneath both: clean records make whichever tax pro you choose faster and cheaper." },
  ],
  sides: [
    { eyebrow: "CPA", name: "State-licensed, broad scope.", body: "A Certified Public Accountant is licensed by a state board after education, the Uniform CPA Exam, experience, and ongoing CPE. Authorized for the full range: tax preparation and planning, <strong>audits and attestation</strong>, GAAP-compliant financials, IRS representation, and broad financial advisory. The widest accounting license in the U.S. &mdash; the right choice when you need audit/assurance work or financial scope beyond tax." },
    { eyebrow: "EA", name: "Federally licensed tax specialist.", body: "An Enrolled Agent is licensed directly by the IRS &mdash; the highest credential the IRS issues &mdash; by passing the three-part Special Enrollment Examination (or through IRS experience) plus CPE. Specializes in taxation, with <strong>unlimited rights to represent taxpayers before the IRS in all 50 states</strong>. Cannot perform audits or attestation. The right choice when your need is squarely tax preparation, planning, and IRS representation." },
  ],
  vsTable: [
    { cap: "Licensed by", left: "State board of accountancy", right: "Federal — the IRS" },
    { cap: "Specialty", left: "Broad accounting + tax", right: "Taxation specifically" },
    { cap: "Files tax returns", left: "Yes", right: "Yes" },
    { cap: "IRS representation", left: "Yes", right: "Yes — unlimited, all 50 states" },
    { cap: "Performs audits", left: "Yes (licensed CPAs)", right: "No" },
    { cap: "Attestation / GAAP", left: "Yes", right: "No" },
    { cap: "Multi-state practice", left: "License is state-based", right: "Federal — practices in all states" },
    { cap: "Typical cost", left: "Premium per-engagement / hourly", right: "Often more affordable for tax work" },
    { cap: "Exam", left: "Uniform CPA Exam", right: "Special Enrollment Examination" },
    { cap: "Best for", left: "Audits, assurance, broad financial scope", right: "Tax prep, planning, IRS representation" },
    { cap: "Where TechBrot fits", left: "We keep books ready; CPA files", right: "We keep books ready; EA files" },
  ],
  decision: [
    { eyebrow: "An EA is often enough", name: "If your need is purely tax.", body: "For tax preparation, planning, and IRS representation &mdash; including notices, audits-by-correspondence, and back-tax issues &mdash; an EA is a fully qualified specialist, frequently at a lower cost. If you don&rsquo;t need audits or assurance work, an EA may be all you need on the tax side." },
    { eyebrow: "A CPA when scope is broader", name: "If you need audit or assurance.", body: "Choose a CPA when you need audited or reviewed financials, attestation for a lender or investor, GAAP-compliant statements, or broad financial advisory alongside tax. The CPA&rsquo;s wider license covers things an EA legally can&rsquo;t." },
    { eyebrow: "Either way", name: "Clean books come first.", body: "Whichever you choose, their work is only as good as the books underneath it &mdash; and both charge more to fix bookkeeping than to use clean records. That&rsquo;s the layer TechBrot provides: accurate, reconciled, ready-to-file books that make your CPA or EA faster and cheaper." },
  ],
  fit: [
    "TechBrot isn&rsquo;t a CPA or an EA &mdash; we don&rsquo;t prepare tax returns or represent you before the IRS. We&rsquo;re the independent <strong>bookkeeping layer that sits beneath both</strong>: we keep your books accurate, reconciled, and tax-ready, so whichever tax professional you use spends their time on tax work, not cleaning up your records.",
    "We deliver <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a>, <a href=\"/quickbooks/\">QuickBooks ProAdvisor services</a>, <a href=\"/accounting/payroll-management/\">payroll</a>, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a> &mdash; and a clean year-end handoff to your CPA or EA, included on recurring engagements.",
    "If you don&rsquo;t have a tax professional yet, we can point you toward a CPA or EA in your state depending on what you need. We do the books; they file. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  fitSpec: [
    { value: "Bookkeeping", label: "the layer TechBrot delivers — accurate, reconciled, tax-ready books" },
    { value: "Your CPA or EA", label: "files the returns and represents you — we coordinate with either" },
    { value: "Clean handoff", label: "year-end CPA/EA-ready package, included on recurring engagements" },
    { value: "Independent", label: "ProAdvisor firm — not a CPA or EA firm; not affiliated with Intuit Inc." },
  ],
  faq: [
    { q: "Can an EA represent me before the IRS like a CPA?", a: "Yes &mdash; an Enrolled Agent has unlimited rights to represent taxpayers before the IRS in all 50 states, the same representation authority as a CPA. The EA credential is granted directly by the IRS specifically for this. The difference is that a CPA can also perform audits and attestation, which an EA cannot." },
    { q: "Is an EA as qualified as a CPA for taxes?", a: "For tax preparation, planning, and IRS representation, yes &mdash; EAs are tax specialists and fully qualified for that work, often at a lower cost. A CPA&rsquo;s advantage is breadth: audits, assurance, GAAP financials, and wider financial advisory. If your need is purely tax, an EA is frequently the efficient choice." },
    { q: "Do I need a CPA or an EA?", a: "If your need is tax filing, planning, or IRS issues, an EA may be all you need. If you also need audited or reviewed financials, attestation for a lender, or broad financial advisory, a CPA&rsquo;s license is required. This is general guidance, not tax advice &mdash; the right answer depends on your specific situation." },
    { q: "Which costs less?", a: "EAs are often more affordable for tax work because their practice is tax-focused, while CPAs typically charge premium rates for a broader license. But fees vary by firm, region, and complexity, so get specific quotes. Either way, clean, reconciled books reduce the hours they bill." },
    { q: "Does TechBrot file taxes or represent me before the IRS?", a: "No. TechBrot is a bookkeeping and Certified QuickBooks ProAdvisor firm. We keep your books accurate and tax-ready and coordinate with your CPA or EA, but we don&rsquo;t prepare tax returns or represent you before the IRS &mdash; that&rsquo;s exactly what a CPA or EA is for. We make their job smaller." },
    { q: "Can a CPA or EA also do my bookkeeping?", a: "Some do, but it&rsquo;s usually not cost-efficient &mdash; you&rsquo;re paying tax-professional rates for operational data work. The common, economical setup is a dedicated bookkeeper (like TechBrot, with <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>) for the books and a CPA or EA engaged for tax and representation. Clean books from a bookkeeper make the tax pro&rsquo;s work faster and cheaper &mdash; to set that up, call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],
  related: [
    { title: "Bookkeeper vs CPA", href: "/vs/bookkeeper-vs-cpa/", body: "How the bookkeeping role differs from a CPA &mdash; and why you need both." },
    { title: "Bookkeeper vs accountant", href: "/vs/bookkeeper-vs-accountant/", body: "The broader records-vs-interprets distinction behind all of this." },
    { title: "Get your books ready for tax season", href: "/blog/get-your-books-ready-for-tax-season/", body: "How clean books make your CPA or EA&rsquo;s job faster and cheaper." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons — the same honest read each time." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/cpa-vs-ea/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-cpaea-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"CPA vs EA","item":url}]},
        {"@type":"ItemList","@id":url+"#dimensions","name":"CPA vs EA comparison dimensions","itemListElement":data.vsTable.map(function(r,i){return {"@type":"ListItem","position":i+1,"name":stripTags(r.cap)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
