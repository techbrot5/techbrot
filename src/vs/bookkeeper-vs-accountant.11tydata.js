/* /vs/bookkeeper-vs-accountant/ — t-mofu COMPARISON page (MIGRATION-PROTOCOL:
 * content-to-goal, visual-floor). T1 AUTHORITY for headings + FAQ is the FROZEN
 * EQUITY CONTRACT (contract-vs-bkvacct.txt) — NOT the old HTML. The old HTML
 * (vs/bookkeeper-vs-accountant/index.html) is read ONLY for body PROSE.
 *
 * T2 headings frozen (verbatim, exact level). Footer chrome NOT rendered;
 * "The monthly brief." (newsletter H2) dropped per contract. T3 NO COLLAPSE:
 * the 12-dimension comparison stays as a real vs-scroll + vs-table (the tier
 * signature), NOT proof-strip cards. The two role-definition H3s
 * ("Records, categorizes, reconciles." / "Interprets, files, advises.") are
 * real <h3> in a grid-2 stack-8 (the cobalt skin has NO .vs-verdict class —
 * that old component does not port). The 3 decision-guide H3s and 6 credential
 * H3s stay as real <h3> in stack-8 grids. The 4 related-series H3s are real
 * <h3> links in stack-8.
 *
 * T4 FAQ: exactly the 7 contract Q/A, verbatim, one array (faq[]) → visible
 * accordion + FAQPage schema from the SAME array. T6 content-to-goal: enrichment
 * is TRUE/educational (the genuine bookkeeper/ProAdvisor vs accountant/CPA split,
 * when each is needed, where each wins). HONESTY: TechBrot is the BOOKKEEPER
 * side — explicit and fair, recommends a CPA where that's what's needed; no
 * fabricated stats/reviews; no AggregateRating; independent firm, not Intuit;
 * no personal name. COBALT vocabulary only — no invented classes. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // byline-block — firm-level authorship (no personal name in visible content).
  bylineName: "By the Certified QuickBooks ProAdvisor team",
  bylineReview: "Reviewed by a Certified QuickBooks ProAdvisor &middot; independent firm &mdash; the bookkeeping side, honestly stated",

  // "The honest summary." — the one-paragraph definitional read.
  summary: [
    "A <strong>bookkeeper</strong> records and categorizes transactions, reconciles accounts, manages accounts payable and receivable, and produces the operational financial statements your business runs on every month. An <strong>accountant</strong> &mdash; typically a CPA or EA &mdash; interprets that data: preparing and filing tax returns, advising on tax strategy, producing audit-ready financials, and representing you before the tax authorities. The bookkeeper produces what the accountant uses; the accountant interprets what the bookkeeper produces.",
    "<strong>Most U.S. small businesses need both</strong>, at different cadences &mdash; bookkeeping is ongoing monthly work, while accounting is usually engaged for specific outcomes like annual tax filing, an audit, fundraising, or strategic advisory. Neither role &ldquo;wins.&rdquo; TechBrot is on the bookkeeping side: we do the books and coordinate cleanly with your CPA for the rest. We are an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a CPA firm, and not affiliated with Intuit Inc. &mdash; and if what you actually need is a CPA, we&rsquo;ll say so and point you to one.",
  ],

  // "Bookkeeper vs accountant, in five questions." — ai-summary (5 items).
  // Short questions deliberately NOT identical to any of the 7 FAQ questions.
  aiSummary: [
    { q: "What does a bookkeeper actually do?", a: "A <strong>bookkeeper</strong> handles the ongoing operational financial work: recording every transaction, categorizing it to the correct accounts, reconciling bank and credit-card statements, managing accounts payable and receivable, processing payroll entries, tracking sales tax, and producing monthly financial statements (P&amp;L, balance sheet, cash flow). The bookkeeper produces the accurate record that everything else &mdash; tax filing, lending, financial analysis &mdash; depends on." },
    { q: "What does an accountant actually do?", a: "An <strong>accountant</strong> interprets financial data and produces outcomes from it: preparing federal and state tax returns, providing tax strategy and planning, generating audit-ready financials, producing GAAP-compliant statements when required, advising on financial decisions, representing the business before the IRS, and supporting capital raises or business sales. A <strong>CPA</strong> (Certified Public Accountant) is a state-licensed accountant with specific authority to perform audits and represent taxpayers before the IRS." },
    { q: "Do small businesses need both?", a: "Most do. The two roles complement each other rather than competing. A bookkeeper handles operational financial work continuously &mdash; usually monthly. A CPA or accountant is engaged for specific outcomes &mdash; annual tax filing, audit response, fundraising, strategic advisory. The bookkeeper produces clean, reconciled records; the CPA uses those records to file taxes, advise on decisions, and produce required financials." },
    { q: "What credentials does each role require?", a: "Bookkeeping is not a licensed profession in the U.S. Common voluntary credentials include Certified QuickBooks ProAdvisor, Certified Bookkeeper (CB) from AIPB, and Certified Public Bookkeeper (CPB) from NACPB. Accounting requires state licensure for CPAs &mdash; the CPA designation requires education, exam, experience, and ongoing continuing education. EAs (Enrolled Agents) are federally licensed by the IRS to represent taxpayers but are not CPAs." },
    { q: "Which one is more expensive?", a: "Different pricing structures. Bookkeepers typically charge monthly retainer fees ($300&ndash;$2,500+/month for U.S. small businesses, scaling with transaction volume and complexity). Accountants and CPAs charge per engagement or hourly: business tax returns range $500&ndash;$3,000+, advisory work ranges $150&ndash;$500+/hour. Full outsourced accounting services (combining both roles) typically run $1,500&ndash;$5,000+/month. The bookkeeper is an ongoing operational cost; the accountant is an event-driven one." },
  ],

  // "What each role does — in plain language." — two role definitions as REAL <h3>
  // in grid-2 stack-8. H3s VERBATIM from contract. (Cobalt has no verdict component.)
  roles: [
    { eyebrow: "The bookkeeper", name: "Records, categorizes, reconciles.", body: "A bookkeeper handles the operational layer of financial management &mdash; the work that produces reliable records every month: recording every transaction in accounting software, categorizing it to the correct accounts, reconciling bank and credit-card statements monthly, managing accounts payable and receivable, tracking payroll entries and sales-tax accruals, producing monthly P&amp;L, balance-sheet, and cash-flow statements, maintaining the chart of accounts, and coordinating with the CPA for tax filing. <strong>Engagement model:</strong> ongoing monthly retainer &mdash; the value compounds, because the bookkeeper learns your business, catches errors early, and produces the records the rest of your financial life depends on." },
    { eyebrow: "The accountant / CPA", name: "Interprets, files, advises.", body: "An accountant interprets financial data and produces outcomes from it &mdash; tax filings, advisory work, audit-ready financials, representation in front of authorities: preparing federal and state tax returns, providing tax planning and strategy, producing audit-ready or GAAP-compliant financials, representing clients before the IRS (CPAs and EAs), advising on entity structure, multi-state issues, and M&amp;A, supporting capital raises, business sales, and succession, performing audits (CPAs only, in licensed states), and providing expert testimony when needed. <strong>Engagement model:</strong> typically per-engagement or hourly, engaged for specific outcomes &mdash; tax season, audits, transactions &mdash; though some businesses retain a CPA monthly for ongoing advisory." },
  ],

  // "Across the dimensions that actually matter." — vs-scroll + vs-table.
  // T3: this is the comparison and stays a TABLE (NOT proof-strip cards).
  // Definitional comparison — neither role "wins"; both columns carry prose.
  vsTable: [
    { cap: "Primary work", bk: "Recording, categorizing, reconciling transactions", acct: "Interpreting data, filing taxes, advising" },
    { cap: "Engagement cadence", bk: "Ongoing monthly", acct: "Per engagement / annual / hourly" },
    { cap: "Tax-filing authority", bk: "Generally does not file business tax returns", acct: "Files federal and state tax returns" },
    { cap: "IRS representation", bk: "Cannot represent clients before the IRS", acct: "CPAs and EAs can represent before the IRS" },
    { cap: "Audit authority", bk: "Cannot perform audits", acct: "Licensed CPAs can perform audits" },
    { cap: "Required credentials", bk: "None required; CB, CPB, ProAdvisor are voluntary", acct: "State CPA license required for CPA designation" },
    { cap: "Typical pricing", bk: "$300&ndash;$2,500+ per month", acct: "$150&ndash;$500+ per hour; $500&ndash;$3,000+ per return" },
    { cap: "Software typically used", bk: "QuickBooks, Xero, accounting software directly", acct: "Tax-prep software (Lacerte, ProSeries, Drake)" },
    { cap: "Output produced", bk: "Monthly financial statements, reconciled books", acct: "Tax returns, advisory deliverables, GAAP financials" },
    { cap: "Strategic advisory", bk: "Operational guidance; rarely strategic tax advice", acct: "Tax strategy, entity structure, financial planning" },
    { cap: "When you typically engage", bk: "Continuously, monthly", acct: "Tax season, audits, transactions, IRS issues" },
    { cap: "Where TechBrot fits", bk: "Bookkeeping engagements delivered here", acct: "Coordinated with your existing CPA" },
  ],

  // "The bookkeeper produces. The accountant interprets." — prose (how they work together).
  together: [
    "The cleanest way to think about the relationship: <strong>the bookkeeper produces accurate financial records every month; the accountant uses those records to file taxes, advise on decisions, and produce required financials.</strong> Each role&rsquo;s output is the other role&rsquo;s input.",
    "When the two roles are coordinated, the business runs efficiently. The CPA spends tax season actually doing tax strategy &mdash; not cleaning up books. The bookkeeper produces records the CPA can file directly from. The owner gets a clear picture of the business every month and a clean tax filing every year.",
    "When the two roles aren&rsquo;t coordinated &mdash; or when the business tries to skip the bookkeeper and have the CPA do everything &mdash; the costs compound. CPAs charge significantly more to do bookkeeping work, tax filings get delayed, errors propagate, and the owner pays for the same data work twice.",
    "<strong>The right model for most U.S. small businesses is a professional bookkeeper handling monthly operations and a CPA engaged for tax and strategic work.</strong> That&rsquo;s what TechBrot is built to provide &mdash; on the bookkeeping side.",
  ],

  // "A practical decision guide." — 3 decision patterns as REAL <h3> in grid-3 stack-8.
  // H3s VERBATIM from contract.
  decision: [
    { eyebrow: "You need a bookkeeper", name: "If you’re running operations.", body: "You have monthly transactions that need categorizing; your books are behind or unreconciled; you want monthly financial statements to make decisions; you have payroll, sales-tax, or AP/AR activity; your CPA needs clean records to file taxes efficiently; or you&rsquo;re currently doing the books yourself and they keep getting behind. This is the operational, ongoing layer &mdash; and it&rsquo;s where TechBrot works." },
    { eyebrow: "You need an accountant / CPA", name: "If you’re producing tax or strategic outcomes.", body: "It&rsquo;s tax season and you need to file; you&rsquo;re facing an IRS notice, audit, or correspondence; you&rsquo;re evaluating entity structure or restructuring; you&rsquo;re considering a capital raise, sale, or M&amp;A; you need multi-state tax strategy; or you need audit-ready or GAAP-compliant financials. We don&rsquo;t file taxes ourselves &mdash; if you don&rsquo;t have a CPA, we can recommend one in your state." },
    { eyebrow: "Most businesses need both", name: "Continuously, in parallel.", body: "The bookkeeper handles the monthly close and ongoing operations; the CPA handles annual tax filing and strategic advisory; the two roles coordinate &mdash; the bookkeeper produces what the CPA uses &mdash; so the owner gets monthly financial clarity and a clean tax filing, with each role doing what it&rsquo;s priced for. <strong>This is the recommended structure for most U.S. small businesses</strong>, and it&rsquo;s how TechBrot engagements are designed to work alongside your CPA." },
  ],

  // "What each credential actually means." — 6 credential explainers as REAL <h3>
  // in grid-3 stack-8. H3s VERBATIM from contract. (Not the comparison — not a table.)
  credentials: [
    { tag: "CPA", name: "Certified Public Accountant", body: "State-licensed accountant. Requires education, the Uniform CPA Exam, work experience, and ongoing CPE. Authorized to perform audits and represent clients before the IRS. The most rigorous accounting credential in the U.S." },
    { tag: "EA", name: "Enrolled Agent", body: "Federally licensed by the IRS. Specializes in taxation and authorized to represent taxpayers before the IRS in all 50 states. Not the same as a CPA &mdash; cannot perform financial audits." },
    { tag: "CB", name: "Certified Bookkeeper (AIPB)", body: "Voluntary credential from the American Institute of Professional Bookkeepers. Requires exam, experience, and CPE. Signals professional bookkeeping competence; not required to practice." },
    { tag: "CPB", name: "Certified Public Bookkeeper (NACPB)", body: "Voluntary credential from the National Association of Certified Public Bookkeepers. Similar in purpose to CB &mdash; signals professional bookkeeping competence with a credentialing process." },
    { tag: "QB ProAdvisor", name: "Certified QuickBooks ProAdvisor", body: "Issued by Intuit. Verifies proficiency in specific QuickBooks products. Multiple tracks: Online (Level 1 and Level 2), Desktop, Enterprise, and Payroll. <a href=\"/quickbooks/\">TechBrot operators hold all four.</a>" },
    { tag: "No credential", name: "Unlicensed bookkeeper", body: "Bookkeeping is unlicensed in the U.S. Plenty of competent, experienced bookkeepers hold no credential; plenty of credentialed bookkeepers are mediocre. Credentials are a useful signal, not a guarantee &mdash; experience and references matter more." },
  ],

  // "We’re the bookkeeping side. Done well." — prose + trust-row.
  // HONESTY: explicit that TechBrot is the bookkeeper side, not the CPA side.
  fit: [
    "To be direct: TechBrot is on the <strong>bookkeeping side</strong> of this comparison, not the accounting side. We deliver <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a>, <a href=\"/quickbooks/\">QuickBooks ProAdvisor services</a>, <a href=\"/accounting/payroll-management/\">payroll management</a>, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a>. We do <strong>not</strong> prepare federal or state tax returns, perform audits, or represent clients before the IRS. We are a bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a CPA firm.",
    "What we do is deliver the bookkeeping side at a higher standard than most U.S. small businesses encounter: vetted Certified ProAdvisors, named local operators, fixed-fee scopes, platform-level quality review, and clean records your CPA can file from without rework.",
    "If you don&rsquo;t have a CPA, your TechBrot operator can recommend one in your state &mdash; the two services pair cleanly, and we&rsquo;ve designed the engagement model around that handoff. If you already have a CPA you trust, we coordinate with them directly. We do the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  fitSpec: [
    { value: "Bookkeeper", label: "the side TechBrot delivers — monthly books, cleanup, catch-up, QuickBooks, payroll, sales tax" },
    { value: "Your CPA", label: "files the returns and handles audit, representation, and strategic tax — we coordinate, we don’t replace" },
    { value: "Certified", label: "QuickBooks ProAdvisor team — named operators, platform-level quality review" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc.; not a CPA firm" },
  ],

  // 7 FAQ — VERBATIM from the frozen contract (append-only enrichment; none added here).
  faq: [
    { q: "What is the difference between a bookkeeper and an accountant?", a: "A bookkeeper records and categorizes financial transactions, reconciles bank and credit-card accounts, manages accounts payable and receivable, and produces basic financial reports. An accountant interprets that financial data &mdash; preparing tax returns, providing tax strategy, generating audit-ready financials, producing GAAP-compliant statements, and advising on financial decisions. Most U.S. small businesses need both, but at different cadences. Bookkeeping is ongoing monthly work; accounting is typically engaged for specific outcomes like tax filing or financial advisory." },
    { q: "Do I need a bookkeeper, an accountant, or both?", a: "Most U.S. small businesses need both. A bookkeeper handles the ongoing operational work &mdash; monthly transaction categorization, reconciliations, financial statements. A CPA or accountant handles tax filings annually and provides strategic advice when needed. The two roles complement each other: the bookkeeper produces accurate books; the accountant uses those books to file taxes and advise on decisions." },
    { q: "How much does a bookkeeper cost vs an accountant?", a: "Bookkeepers typically charge $300-$2,500+ per month for ongoing services, depending on transaction volume and complexity. Accountants and CPAs charge by engagement or hourly: business tax returns range from $500 to $3,000+, hourly advisory work ranges from $150 to $500+ per hour, and full outsourced accounting services (combining bookkeeping and accounting) range from $1,500 to $5,000+ per month. The split depends heavily on the credentials and the scope of work." },
    { q: "Can a bookkeeper file my taxes?", a: "Generally no, not for business tax returns. In the U.S., business tax filings are typically prepared by a CPA (Certified Public Accountant), an EA (Enrolled Agent), or a licensed tax preparer. Bookkeepers prepare the financial records that the tax preparer uses to file the return. Some bookkeepers also hold CPA or EA credentials and can do both, but the roles are functionally distinct." },
    { q: "What credentials does a bookkeeper need?", a: "Bookkeeping is not a licensed profession in the U.S., so credentials are voluntary but meaningful. Common credentials include Certified QuickBooks ProAdvisor (issued by Intuit), Certified Bookkeeper (CB) from AIPB, Certified Public Bookkeeper (CPB) from NACPB, and active professional liability insurance. Accountants and CPAs require state licensure with continuing education requirements." },
    { q: "When does a small business outgrow a bookkeeper and need a CPA?", a: "Most businesses use both simultaneously rather than outgrowing one for the other. A bookkeeper handles the operational work continuously, and a CPA is engaged when specific outcomes require it: annual tax filing, multi-state tax compliance, audit response, capital raises, mergers and acquisitions, IRS issues, or strategic financial planning. The bookkeeper produces what the CPA needs to do their work." },
    { q: "Where does TechBrot fit — bookkeeper or accountant?", a: "TechBrot operators deliver the bookkeeping side &mdash; monthly bookkeeping, cleanup, catch-up, QuickBooks expertise, payroll, sales tax compliance, and operational financial services. We coordinate with your CPA for tax filing and strategic accounting work but do not file tax returns directly. The model is designed to give clients a real bookkeeping partner and a clean handoff to their tax preparer." },
  ],

  // "More honest comparisons in the same series." — 4 related as REAL <h3> links (stack-8).
  // H3s VERBATIM from contract.
  related: [
    { title: "TechBrot vs Bench Accounting", href: "/vs/techbrot-vs-bench/", body: "Comparison of TechBrot vs Bench&rsquo;s bookkeeping subscription model, including Bench&rsquo;s December 2024 Chapter 7 status." },
    { title: "TechBrot vs Pilot", href: "/vs/techbrot-vs-pilot/", body: "Comparison of TechBrot vs Pilot&rsquo;s VC-startup-focused accounting service. Different buyers, different models." },
    { title: "In-house vs outsourced bookkeeping", href: "/vs/", body: "When to hire an internal bookkeeper, when to outsource. Trade-offs by business size, complexity, and stage." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons &mdash; written with the same honest read each time." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/bookkeeper-vs-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-bkvacct-in-brief-text","#vs-bkvacct-ai-summary"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"Bookkeeper vs Accountant","item":url}]},
        {"@type":"ItemList","@id":url+"#dimensions","name":"Bookkeeper vs Accountant Comparison Dimensions","itemListElement":data.vsTable.map(function(r,i){return {"@type":"ListItem","position":i+1,"name":stripTags(r.cap)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"Article","@id":url+"#article","headline":"Bookkeeper vs Accountant: The Real Difference for U.S. Small Businesses","description":data.description,"about":{"@id":url+"#thing"},"isPartOf":{"@id":url+"#webpage"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US"},
        {"@type":"Thing","@id":url+"#thing","name":"Bookkeeper vs accountant","description":"The distinction between a bookkeeper (records, categorizes, and reconciles financial transactions and produces operational statements) and an accountant or CPA (interprets that data to file taxes, advise, audit, and represent) for U.S. small businesses."}
      ]};
    },
  },
};
