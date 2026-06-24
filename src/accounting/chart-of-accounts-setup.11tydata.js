/* /accounting/chart-of-accounts-setup/ — LIVE baseline accounting service page
 * migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-coa.txt (47 headings,
 * 11 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/chart-of-accounts-setup/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure; src/accounting/advisory/cash-flow-management.11tydata.js for the
 * full schema graph (WebPage + BreadcrumbList + Service + ItemList + FAQPage +
 * QAPage). t-mofu, tierClass section--tier-guide, bodyClass page--mofu.
 * CTA intents: accounting (canonical) + file-review. In-body service links use
 * each service's canonical intent (quickbooks-setup, cleanup, monthly).
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly
 * brief." NOT rendered here — base-layout chrome / dropped per protocol T2.
 * The 5 quick-answer questions render as NON-heading ai-summary__question (the
 * baseline captured them as <dt>, NOT <hN>) to keep the frozen heading
 * inventory exact. FAQ: 11 contract Q/A verbatim (Q1-Q6 substantive, Q7-Q11
 * schema-only flat variants — append-only, NO dedup). The old HTML "historical
 * data" Q/A is NOT in the contract's 11; preserved as body content (no gutting),
 * never in the frozen faq array. Honesty R5/R9: no fabricated stats/outcomes/
 * reviews; David Westgate in reviewedBy schema @id only; firm-level authorship;
 * independent firm, not affiliated with Intuit Inc. No <strong> in dark hero. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Chart of accounts, plainly." — definition prose (from old TL;DR body, enriched; no <strong> rule applies to dark hero only)
  definition: [
    "The <strong>chart of accounts</strong> is the complete list of every account used to record transactions &mdash; revenue, expense, asset, liability, equity. It defines the structure of the books and decides what reports can ever be produced. <strong>QuickBooks&rsquo;s default chart of accounts is generic</strong>; almost every business needs an industry-appropriate version &mdash; e-commerce sellers need platform-fee, sales-tax-collected, inventory, and COGS structure; restaurants need prime cost; law firms need trust accounts; multi-location operators need <strong>classes and locations</strong> so a single P&amp;L can break out by segment without exploding into thousands of accounts.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> design the chart from a proven industry template adjusted to how your business actually operates, build the parent-and-sub structure, set up <strong>class and location tracking</strong>, align the item list, and produce a structure your <a href=\"/accounting/financial-statements/\">financial statements</a>, <a href=\"/accounting/advisory/kpi-reporting/?intent=advisory\">KPI reports</a>, and CPA can all work with. Delivered as fixed-fee project work or inside a broader <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">QuickBooks setup</a> engagement. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Chart of accounts, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "What is a chart of accounts?", a: "The complete list of every account used to record financial transactions &mdash; every category of <strong>revenue, expense, asset, liability, and equity</strong>. It defines the structure of the books and controls what reports can ever be produced." },
    { q: "Why does it matter?", a: "Because <strong>the chart of accounts is the reporting structure</strong>. Every report &mdash; P&amp;L, balance sheet, cash flow, KPI dashboard &mdash; inherits from it. Get it right once and the books work; get it wrong and every report fights against the structure forever." },
    { q: "Accounts vs classes vs locations?", a: "<strong>Accounts</strong>: what kind of money. <strong>Classes / Tags</strong>: whose money &mdash; which department, product line, project, segment. <strong>Locations</strong>: where the money is. Using all three together produces multi-dimensional reporting without exploding into thousands of redundant accounts." },
    { q: "Do I need a custom chart?", a: "Most businesses need an <strong>industry-appropriate</strong> one, not a fully custom one. QuickBooks default is generic. The right approach: proven industry template, adjusted to how your business operates &mdash; not the untouched default, and not a thousand-account custom no one maintains." },
    { q: "When restructure?", a: "When the business has changed since setup, reports don&rsquo;t answer what leadership asks, the chart has bloated through ad-hoc additions, or you&rsquo;re preparing for a sale, audit, fundraising, or new CPA. Fixed-fee project work, no hourly billing." },
  ],
  // "What lives in a chart of accounts." — 5 account types + 2 dimensions (anatomy). Headings VERBATIM per contract.
  anatomy: [
    { num: "01", name: "Assets", body: "What the business owns &mdash; cash, accounts receivable, inventory, fixed assets, prepaid expenses. The balance-sheet side that proves what&rsquo;s actually there. Numbered in the 1000s by convention, so summary reports and the balance sheet stay in a predictable order." },
    { num: "02", name: "Liabilities", body: "What the business owes &mdash; accounts payable, loans, lines of credit, payroll liabilities, deposits held, deferred revenue. The other balance-sheet side that decides solvency. Sales tax collected and payroll withholdings belong here, not in revenue or expense." },
    { num: "03", name: "Equity", body: "Owner&rsquo;s stake &mdash; contributions, distributions, retained earnings. Often the most misclassified accounts in DIY files; an owner draw booked as expense gets both the profit and the balance sheet wrong fast, and complicates the tax return." },
    { num: "04", name: "Revenue", body: "How the business makes money &mdash; broken out by line, product type, or service category, depending on what you need to see. The single most under-designed area in default charts: one &ldquo;Sales&rdquo; line can&rsquo;t show product-versus-service margin." },
    { num: "05", name: "Expenses (incl. COGS)", body: "Cost of goods sold separated from operating expenses, expenses grouped how you actually spend &mdash; not how a generic template assumes you do. Whether COGS is split out from overhead decides whether your gross margin on the P&amp;L is real or fiction." },
    { num: "06", name: "Classes &amp; locations", body: "The reporting <em>dimensions</em> that sit alongside accounts &mdash; product line, department, location, project. What lets one chart produce a dozen useful views without inflating account count. Accounts answer <em>what kind of money</em>; classes and locations answer <em>whose</em> and <em>where</em>." },
  ],
  // "If any of these sound familiar, the structure is fighting you." — 6 signals (buyer-card). H3 headings VERBATIM.
  signals: [
    { opener: "Your P&amp;L doesn&rsquo;t break out revenue the way you sell.", body: "If you sell products and services but your revenue is one line, you can&rsquo;t see gross margin by line. The chart, not the bookkeeping, is the problem &mdash; and no amount of re-categorizing fixes a structure that was never split." },
    { opener: "Expense categories don&rsquo;t match how you spend.", body: "Generic templates lump real categories together &mdash; ad spend hidden inside &ldquo;marketing,&rdquo; software inside &ldquo;office expense.&rdquo; You can&rsquo;t manage what the chart hides, and a budget against vague categories is a budget against nothing." },
    { opener: "You can&rsquo;t see a P&amp;L by location, product, or segment.", body: "Without classes or locations configured properly, every report is company-wide only. The reason most multi-location businesses are flying half-blind &mdash; the data is in the file, but the structure never lets it out." },
    { opener: "The chart has hundreds of ad-hoc accounts.", body: "Every &ldquo;just add an account for this&rdquo; over years adds up. A bloated chart is harder to maintain consistently and produces messier reports than a tight one &mdash; two accounts for the same thing means every report is split in half." },
    { opener: "Owner draws and contributions are misclassified.", body: "Owner movement booked as income or expense instead of equity is one of the most common mistakes &mdash; it quietly distorts profit and the balance sheet, and complicates the tax return. An equity section that was never set up correctly is a structure problem, not a data-entry one." },
    { opener: "You&rsquo;re preparing for a sale, audit, or new CPA.", body: "External parties test the chart fast. A clean, industry-appropriate structure signals credibility; a sprawling, inconsistent one signals risk before anyone looks at the numbers. Diligence and audits go faster against a chart that maps cleanly to the financial statements." },
  ],
  // "What chart of accounts setup actually delivers." — 6 deliverables (stack-8 + num). H3 headings VERBATIM.
  deliverables: [
    { num: "01", name: "Industry-appropriate template", body: "Start from a proven template for your industry &mdash; e-commerce, construction, restaurant, real estate, legal, healthcare, professional services &mdash; not the generic QuickBooks default. The template already knows the accounts your industry needs and the ones it doesn&rsquo;t." },
    { num: "02", name: "Custom adjustment to your business", body: "The template is the starting point. We adjust to how you actually sell, spend, and report &mdash; not a one-size-fits-all bolt-in. Revenue is split the way you sell; expenses are grouped the way you spend; the accounts you&rsquo;ll never use are removed." },
    { num: "03", name: "Parent-and-sub account structure", body: "Account hierarchies that let summary reports collapse cleanly and detail reports expand without breaking either view &mdash; the structural backbone of clean reporting. A consistent numbering scheme keeps new accounts landing in the right place years later." },
    { num: "04", name: "Classes, tags &amp; locations", body: "Reporting dimensions configured so multi-segment, multi-location, or project-based reporting is built in from day one &mdash; not bolted on later. The difference between a P&amp;L by location next month and a chart rebuild next year." },
    { num: "05", name: "Item-list alignment", body: "Products and services in the item list mapped to the right revenue, COGS, and tax accounts &mdash; so transactions post correctly the first time, every time. A perfect chart still produces wrong reports if the items behind invoices point at the wrong accounts." },
    { num: "06", name: "Opening balances &amp; migration", body: "For new files, accurate opening balances set up with documentation. For restructures, existing transactions remapped to the new structure cleanly, accounts merged or retired, and prior-period reports kept working where the changes allow." },
  ],
  // "From discovery to a chart you can build on." — 4-phase process (process-diagram). H3 headings VERBATIM.
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to understand your industry, how you sell and spend, what reports you need, and whether segments, locations, or projects belong as dimensions. No pitch &mdash; just the scope the chart has to support." },
    { num: "Phase 2", name: "Design", body: "Industry-appropriate template selected and adjusted to your business. Parent-and-sub structure, classes, locations, item-list mapping, and account numbering. You review and approve the design before anything ships into the live file." },
    { num: "Phase 3", name: "Implementation", body: "For new files, the structure is built and opening balances loaded. For restructures, existing transactions are remapped, accounts merged or retired, and the file moved to the new structure cleanly &mdash; without losing historical data." },
    { num: "Phase 4", name: "Test &amp; handoff", body: "Reports run against the new structure and reviewed with you &mdash; P&amp;L, balance sheet, and the segment views you asked for. Documentation delivered. Where useful, we transition into <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> on the structure we just built." },
  ],
  // "What setup is, isn't, and what comes next." — honest scope (3 cards). H3 headings VERBATIM.
  scope: [
    { name: "Setup is", body: "Designing and implementing the chart of accounts: industry-appropriate structure, parent-and-sub design, classes and locations, item-list mapping, opening balances, and restructure of existing files where needed. A one-time fixed-fee project against written scope." },
    { name: "Setup isn&rsquo;t", body: "Ongoing bookkeeping &mdash; that&rsquo;s <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>. Fixing months of bad transactions &mdash; that&rsquo;s <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a>. Tax-position advice &mdash; that&rsquo;s your CPA. Audit or compilation work &mdash; those are licensed CPA engagements." },
    { name: "What comes after", body: "A correctly structured file deserves clean ongoing work. Most clients transition setup into <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> with us, or hand the file back to their internal team with documentation and training so the structure stays intact." },
  ],
  // Preserved old body Q/A NOT in the contract's 11 FAQ (no gutting). Rendered as body content, never in the frozen faq array.
  preservedQA: [
    { q: "Can you restructure without losing my historical data?", a: "Yes &mdash; that&rsquo;s the whole point of a restructure rather than a rebuild. Historical transactions are remapped to the new structure, accounts merged or retired cleanly, and prior-period reports continue to work where the structural changes allow. Where prior-period categorization itself was wrong, that&rsquo;s <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> territory, often paired with restructure in the same engagement." },
  ],
  // "Related services." — 4 related (stack-8 linked). H3 headings VERBATIM.
  related: [
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "The broader file setup the chart of accounts lives inside of &mdash; banking, payroll, sales tax, integrations, and the close calendar." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "Where a broken file gets rebuilt &mdash; often alongside a chart restructure when prior-period categorization was wrong, not just the structure." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The recurring engagement a clean chart of accounts makes possible &mdash; real reconciliation and a monthly close on a structure that holds." },
    { title: "Financial statements", href: "/accounting/financial-statements/", body: "What the chart of accounts ultimately exists to produce &mdash; a P&amp;L and balance sheet that break down the way your business actually runs." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row)
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Chart design, restructure, class &amp; location setup, item-list mapping &mdash; not tax filing, audit, or compilation" },
    { value: "Fixed-fee", label: "Written scope before work &middot; standalone project or inside a full QuickBooks setup" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 11 contract Q/A, verbatim questions, answers preserved (append-only enrichment).
  // Q1-Q6 substantive; Q7-Q11 schema-only flat variants kept per append-only contract (NO dedup).
  faq: [
    { q: "What is a chart of accounts?", a: "A chart of accounts is the complete list of every account used to record financial transactions &mdash; every category of revenue, expense, asset, liability, and equity the business will ever post against. It defines the structure of the books, controls what reports can be produced, and determines what questions the financial statements can answer. A well-designed chart of accounts makes accurate books easier to maintain and meaningful reports possible; a poor one creates ongoing recategorization work and reports that don&rsquo;t tell you what you need to know." },
    { q: "Why does the chart of accounts matter so much?", a: "Because the chart of accounts is the reporting structure. If revenue isn&rsquo;t broken out the way you sell, you can&rsquo;t see product or service profitability. If expenses aren&rsquo;t grouped how you spend, you can&rsquo;t see where money goes. If you have multiple locations, segments, or entities, structure decides whether you can ever see them separately. Every report &mdash; P&amp;L, balance sheet, cash flow, KPI dashboard &mdash; inherits from the chart of accounts. Get it right once at setup and the books work; get it wrong and every report fights against the structure forever." },
    { q: "Do I need a custom chart of accounts?", a: "Most businesses need an industry-appropriate chart of accounts, not a fully custom one. QuickBooks&rsquo;s default chart of accounts is generic &mdash; adequate for a basic service business, inadequate for almost everything else. An e-commerce seller needs accounts for platform fees, sales tax collected, and inventory and COGS structure. A restaurant needs prime cost tracking. A law firm needs trust accounting. The right approach is a proven industry template adjusted to how your specific business operates &mdash; not a default file kept untouched, and not a thousand-account custom structure no one maintains." },
    { q: "What&rsquo;s the difference between accounts, classes, and locations in QuickBooks?", a: "Accounts answer &lsquo;what kind of money is this&rsquo; &mdash; revenue type, expense category, asset, liability, equity. Classes (and Tags in QuickBooks Online) answer &lsquo;whose money is this&rsquo; &mdash; which department, product line, project, or service segment a transaction belongs to. Locations answer &lsquo;where is this&rsquo; &mdash; which physical location or business unit. Using all three together produces multi-dimensional reporting: a P&amp;L by location, a margin report by product line, a department-level budget &mdash; without exploding the chart of accounts into thousands of redundant accounts." },
    { q: "When do I need to restructure my chart of accounts?", a: "Common restructure triggers: the business has changed since setup (added locations, products, segments); reports don&rsquo;t answer the questions leadership asks; the chart has grown to hundreds of accounts through ad-hoc additions; categorization rules are inconsistent or have been changed without renaming; financial statements look fine but don&rsquo;t break down the way you need; you&rsquo;re preparing for a sale, audit, fundraising, or new CPA. A restructure is a fixed-fee project &mdash; sometimes inside a broader cleanup, often standalone." },
    { q: "What does chart of accounts setup cost?", a: "Chart of accounts setup is typically delivered as part of a broader QuickBooks setup engagement, with pricing scoped to the size and complexity of the business &mdash; number of segments or locations, industry-specific structure needed, and whether existing transactions need to be remapped to the new structure. Standalone chart of accounts restructure is quoted as fixed-fee project work against a written scope. No hourly billing." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/chart-of-accounts-setup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-coa-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Chart of Accounts Setup","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Chart of Accounts Setup","serviceType":"Chart of accounts setup and restructure","description":"Design and implementation of an industry-appropriate chart of accounts in QuickBooks, including parent-and-sub account structure, class and location tracking, item-list alignment, opening balance setup, and reporting structure built to match how the business actually operates. Delivered by Certified QuickBooks ProAdvisors as fixed-fee project work or inside a broader QuickBooks setup engagement.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, new entities, and businesses migrating or restructuring QuickBooks"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Chart of accounts setup deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What chart of accounts setup delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Chart of accounts — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
