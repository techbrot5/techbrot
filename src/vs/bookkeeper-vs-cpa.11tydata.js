/* /vs/bookkeeper-vs-cpa/ — t-mofu definitional comparison (round 88, vs Wave B).
 * Uses partials/vs-compare-body.njk. HONESTY: TechBrot is the bookkeeper side,
 * explicit; recommends a CPA where that's what's needed; no fabricated
 * stats/reviews; not-Intuit; founder-name-zero; no AggregateRating. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  bylineName: "By the Certified QuickBooks ProAdvisor team",
  bylineReview: "Reviewed by a Certified QuickBooks ProAdvisor &middot; independent firm &mdash; the bookkeeping side, honestly stated",
  summary: [
    "A <strong>bookkeeper</strong> keeps the operational record: recording and categorizing every transaction, reconciling bank and credit-card accounts, managing payables and receivables, and producing the monthly financial statements your business runs on. A <strong>CPA</strong> &mdash; a Certified Public Accountant, state-licensed &mdash; interprets that record and does the things only a license permits: filing tax returns, performing audits, producing GAAP-compliant or audit-ready financials, and representing you before the IRS.",
    "<strong>Most U.S. small businesses need both</strong>, at different cadences. Bookkeeping is continuous monthly work; a CPA is engaged for tax filing, audits, financing, or strategic decisions. Neither &lsquo;wins.&rsquo; TechBrot is the bookkeeping side &mdash; an independent bookkeeping and Certified QuickBooks ProAdvisor firm, not a CPA firm. We keep the books clean and CPA-ready and coordinate with your CPA; if you need one, we&rsquo;ll point you to one. Not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What's the difference between a bookkeeper and a CPA?", a: "A <strong>bookkeeper</strong> records, categorizes, and reconciles transactions and produces monthly financial statements. A <strong>CPA</strong> is a state-licensed accountant who files tax returns, performs audits, produces GAAP financials, and represents clients before the IRS &mdash; work a bookkeeper isn&rsquo;t licensed to do. The bookkeeper produces the records; the CPA interprets and certifies them." },
    { q: "Can a bookkeeper do what a CPA does?", a: "No, not the licensed parts. A bookkeeper generally cannot file business tax returns, perform audits, or represent you before the IRS &mdash; those require a CPA (or, for IRS representation, an EA). A bookkeeper can do everything operational that feeds those activities, which is most of the month-to-month work." },
    { q: "What does the CPA license actually authorize?", a: "A CPA license is issued by a state board and requires education, the Uniform CPA Exam, experience, and ongoing continuing education. It authorizes the CPA to perform audits and attestations and to represent taxpayers before the IRS &mdash; the most rigorous accounting credential in the U.S. Bookkeeping, by contrast, is not a licensed profession." },
    { q: "Do I need a bookkeeper or a CPA first?", a: "Usually a bookkeeper first, because the CPA&rsquo;s work depends on accurate books. If the records are wrong, the tax return and any advice inherit the error &mdash; and CPAs charge far more to clean up bookkeeping than a bookkeeper does to keep it right. Get clean monthly books in place, then engage a CPA for tax and high-stakes work." },
    { q: "How much does each cost?", a: "Bookkeepers typically charge a monthly retainer ($300&ndash;$2,500+/month for U.S. small businesses, scaling with volume and complexity). CPAs charge per engagement or hourly: business tax returns commonly run $500&ndash;$3,000+ and advisory $150&ndash;$500+/hour. The bookkeeper is an ongoing operational cost; the CPA is event-driven." },
  ],
  sides: [
    { eyebrow: "The bookkeeper", name: "Records, categorizes, reconciles.", body: "Handles the operational layer every month: recording transactions, categorizing to the right accounts, reconciling bank and credit-card statements, managing AP/AR, tracking payroll and sales-tax entries, and producing P&amp;L, balance-sheet, and cash-flow statements. <strong>Engagement:</strong> ongoing monthly retainer &mdash; the value compounds as the bookkeeper learns your business and catches errors early. Not a licensed profession; credentials like Certified QuickBooks ProAdvisor are voluntary signals." },
    { eyebrow: "The CPA", name: "Files, audits, represents.", body: "A state-licensed accountant who interprets the books and produces high-stakes outcomes: preparing and filing federal and state tax returns, tax planning, performing audits, producing GAAP or audit-ready financials, and representing clients before the IRS. <strong>Engagement:</strong> typically per-engagement or hourly &mdash; tax season, audits, transactions &mdash; though some businesses retain a CPA for ongoing strategic advisory." },
  ],
  vsTable: [
    { cap: "Primary work", left: "Recording, categorizing, reconciling", right: "Filing taxes, auditing, advising" },
    { cap: "Cadence", left: "Ongoing monthly", right: "Per engagement / annual / hourly" },
    { cap: "Files tax returns", left: "Generally no", right: "Yes" },
    { cap: "IRS representation", left: "No", right: "Yes" },
    { cap: "Performs audits", left: "No", right: "Yes (licensed CPAs)" },
    { cap: "Licensing", left: "Unlicensed; voluntary credentials", right: "State CPA license required" },
    { cap: "Typical pricing", left: "$300&ndash;$2,500+ /month", right: "$150&ndash;$500+/hr; $500&ndash;$3,000+/return" },
    { cap: "Output", left: "Monthly statements, reconciled books", right: "Tax returns, audits, GAAP financials" },
    { cap: "Software", left: "QuickBooks, Xero directly", right: "Tax-prep software (Lacerte, ProSeries, Drake)" },
    { cap: "When you engage", left: "Continuously", right: "Tax season, audits, IRS issues, transactions" },
    { cap: "Where TechBrot fits", left: "Bookkeeping engagements delivered here", right: "Coordinated with your existing CPA" },
  ],
  decision: [
    { eyebrow: "You need a bookkeeper", name: "If you’re running operations.", body: "Monthly transactions need categorizing, the books are behind or unreconciled, you want monthly statements to make decisions, or your CPA needs clean records to file efficiently. This is the ongoing operational layer &mdash; and it&rsquo;s where TechBrot works." },
    { eyebrow: "You need a CPA", name: "If you’re filing or facing the IRS.", body: "It&rsquo;s tax season, you have an IRS notice or audit, you&rsquo;re evaluating entity structure, raising capital, or selling, or you need audit-ready financials. We don&rsquo;t file taxes ourselves &mdash; if you don&rsquo;t have a CPA, we can recommend one in your state." },
    { eyebrow: "Most need both", name: "Continuously, in parallel.", body: "The bookkeeper handles the monthly close; the CPA handles annual filing and strategic work; the two coordinate so the bookkeeper produces what the CPA uses. That&rsquo;s the recommended structure for most U.S. small businesses, and how TechBrot engagements are designed to work alongside your CPA." },
  ],
  fit: [
    "To be direct: TechBrot is on the <strong>bookkeeping side</strong>, not the CPA side. We deliver <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a>, <a href=\"/quickbooks/\">QuickBooks ProAdvisor services</a>, <a href=\"/accounting/payroll-management/\">payroll</a>, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a>. We do <strong>not</strong> prepare tax returns, perform audits, or represent clients before the IRS. We are a bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a CPA firm.",
    "What we do is deliver the bookkeeping side at a higher standard than most small businesses encounter: vetted Certified ProAdvisors, named operators, fixed-fee scopes, and clean records your CPA can file from without rework.",
    "If you don&rsquo;t have a CPA, your operator can recommend one in your state; if you already have one, we coordinate directly. We do the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  fitSpec: [
    { value: "Bookkeeper", label: "the side TechBrot delivers — monthly books, cleanup, catch-up, QuickBooks, payroll, sales tax" },
    { value: "Your CPA", label: "files returns, audits, represents, advises on tax — we coordinate, not replace" },
    { value: "Certified", label: "QuickBooks ProAdvisor team — named operators, platform-level quality review" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc.; not a CPA firm" },
  ],
  faq: [
    { q: "Is a bookkeeper cheaper than a CPA?", a: "For the work they each do, generally yes &mdash; bookkeepers charge an ongoing monthly retainer ($300&ndash;$2,500+) while CPAs charge premium per-engagement or hourly rates. But they&rsquo;re not substitutes: paying a CPA to do bookkeeping is expensive, and skipping the bookkeeper usually means the CPA cleans up books at CPA rates. The cost-efficient setup is a bookkeeper for monthly work and a CPA for tax and high-stakes work." },
    { q: "Can a bookkeeper file my business taxes?", a: "Generally not. Business tax filings are prepared by a CPA, an EA (Enrolled Agent), or a licensed tax preparer. A bookkeeper produces the records the tax preparer files from. Some bookkeepers also hold CPA or EA credentials and can do both, but the roles are functionally distinct &mdash; TechBrot is on the bookkeeping side and coordinates with your CPA." },
    { q: "Do I need a CPA if I have a good bookkeeper?", a: "For tax filing and anything requiring a license &mdash; audits, IRS representation, attestations &mdash; yes. A great bookkeeper keeps your records accurate and your CPA&rsquo;s job small, but a bookkeeper can&rsquo;t legally do the licensed work. Most businesses keep both: bookkeeper monthly, CPA for tax and strategic needs." },
    { q: "What credential does a bookkeeper have vs a CPA?", a: "Bookkeeping is unlicensed in the U.S.; common voluntary credentials are Certified QuickBooks ProAdvisor (Intuit), Certified Bookkeeper (AIPB), and Certified Public Bookkeeper (NACPB). A CPA holds a state license requiring education, the CPA exam, experience, and continuing education &mdash; the most rigorous U.S. accounting credential." },
    { q: "When should I hire a bookkeeper vs a CPA?", a: "Hire a bookkeeper when you have ongoing transactions to keep accurate &mdash; which is continuously. Engage a CPA for specific outcomes: annual tax filing, an audit, financing, an IRS issue, or strategic tax planning. The bookkeeper is a standing relationship; the CPA is engaged when a licensed outcome is required. TechBrot covers the bookkeeping side with <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> and coordinates with your CPA; to talk through which you need, call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Where does TechBrot fit — bookkeeper or CPA?", a: "The bookkeeper side. We deliver monthly bookkeeping, cleanup, catch-up, QuickBooks expertise, payroll, and sales-tax compliance, and we coordinate with your CPA for tax filing and licensed work &mdash; we don&rsquo;t file returns ourselves. The model gives you a real bookkeeping partner and a clean handoff to your tax preparer." },
  ],
  related: [
    { title: "Bookkeeper vs accountant", href: "/vs/bookkeeper-vs-accountant/", body: "The broader version of this comparison &mdash; bookkeeper vs the full accounting role." },
    { title: "CPA vs EA", href: "/vs/cpa-vs-ea/", body: "If you need the tax side, how a CPA and an Enrolled Agent differ." },
    { title: "Bookkeeping vs accounting", href: "/blog/bookkeeping-vs-accounting/", body: "A plain-English explainer of the two disciplines and why you need both." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons — the same honest read each time." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/bookkeeper-vs-cpa/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-bkcpa-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"Bookkeeper vs CPA","item":url}]},
        {"@type":"ItemList","@id":url+"#dimensions","name":"Bookkeeper vs CPA comparison dimensions","itemListElement":data.vsTable.map(function(r,i){return {"@type":"ListItem","position":i+1,"name":stripTags(r.cap)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
