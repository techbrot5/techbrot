/* /quickbooks/online/features/ — QUICKBOOKS ONLINE FEATURES HUB (t-hub).
 * Routes to all 20 core QBO feature pages, grouped by workflow. CollectionPage +
 * ItemList (all 20) + BreadcrumbList + FAQPage + speakable. HONESTY: independent
 * firm, not Intuit; we configure/optimize features in the client's own file; QBO
 * described accurately; founder-name-zero (David only in #david-westgate);
 * canonical pricing/plan refs only. */
const { stripTags } = require("../../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/quickbooks/online/features/";

const featureGroups = [
  {
    id: "money-in",
    eyebrow: "Money in",
    heading: "Getting paid.",
    lede: "Billing customers and tracking what they owe you.",
    features: [
      { title: "Invoices", body: "Create and send branded invoices, set terms, send recurring invoices, accept online payment, and track each one from sent to viewed to paid &mdash; QBO records the revenue and receivable automatically.", href: "/quickbooks/online/features/invoices/", cta: "QBO invoices &rarr;" },
      { title: "Estimates", body: "Build quotes for customers, track which were accepted, and convert an accepted estimate straight into an invoice without re-keying the line items.", href: "/quickbooks/online/features/estimates/", cta: "QBO estimates &rarr;" },
      { title: "Customers", body: "The customer list that anchors your accounts-receivable &mdash; contact records, billing terms, sub-customers, statements, and the AR aging that shows who owes what.", href: "/quickbooks/online/features/customers/", cta: "QBO customers &rarr;" },
      { title: "Sales tax", body: "QBO&rsquo;s automated sales-tax engine calculates rates by address and tracks what you owe &mdash; but it only works if products, customers, and nexus are set up correctly first.", href: "/quickbooks/online/features/sales-tax/", cta: "QBO sales tax &rarr;" },
    ],
  },
  {
    id: "money-out",
    eyebrow: "Money out",
    heading: "Paying the business.",
    lede: "Tracking what you owe and what you spend.",
    features: [
      { title: "Bills (A/P)", body: "Enter vendor bills, track due dates, and pay them &mdash; QBO records the accounts-payable balance so you see what&rsquo;s owed and when, instead of paying from memory.", href: "/quickbooks/online/features/bills/", cta: "QBO bills &rarr;" },
      { title: "Expenses", body: "Record and categorize what you spend &mdash; cash, card, and check purchases &mdash; with receipts attached, so the books reflect real costs and deductions stay defensible.", href: "/quickbooks/online/features/expenses/", cta: "QBO expenses &rarr;" },
    ],
  },
  {
    id: "banking",
    eyebrow: "Banking",
    heading: "Connecting and matching the bank.",
    lede: "The engine that keeps the books tied to reality.",
    features: [
      { title: "Bank feeds", body: "Connect bank and credit-card accounts so transactions flow into QBO automatically &mdash; the starting point, not the finish line; downloaded transactions still have to be reviewed and matched.", href: "/quickbooks/online/features/bank-feeds/", cta: "QBO bank feeds &rarr;" },
      { title: "Bank rules", body: "Auto-categorize recurring transactions from the bank feed by rule &mdash; a real time-saver, but bad rules quietly miscode the books, so they need setting up with care.", href: "/quickbooks/online/features/bank-rules/", cta: "QBO bank rules &rarr;" },
      { title: "Reconciliation", body: "Match QBO to your bank and credit-card statements every month so the balances are proven, not assumed. The single most important monthly habit &mdash; and the one most often skipped.", href: "/quickbooks/online/features/reconciliation/", cta: "QBO reconciliation &rarr;" },
    ],
  },
  {
    id: "structure",
    eyebrow: "Items &amp; structure",
    heading: "How the file is organized.",
    lede: "The structure everything else is recorded against.",
    features: [
      { title: "Chart of accounts", body: "The backbone of the file &mdash; the list of accounts every transaction is coded to. Get this right and reports work; get it wrong and cleanup is inevitable.", href: "/quickbooks/online/features/chart-of-accounts/", cta: "Chart of accounts &rarr;" },
      { title: "Products &amp; services", body: "The items you sell, mapped to income (and inventory) accounts &mdash; what makes invoices, estimates, and sales-tax automation actually work correctly.", href: "/quickbooks/online/features/products-services/", cta: "Products &amp; services &rarr;" },
      { title: "Inventory", body: "Track stock quantities and value with QBO&rsquo;s FIFO inventory &mdash; available on Plus and Advanced. Useful for product businesses; not a fit for everyone.", href: "/quickbooks/online/features/inventory/", cta: "QBO inventory &rarr;" },
      { title: "Classes", body: "Tag transactions by segment &mdash; location, department, fund, property &mdash; for profit-and-loss by class. Plus and Advanced only, and only useful if applied consistently.", href: "/quickbooks/online/features/classes/", cta: "QBO classes &rarr;" },
      { title: "Custom fields", body: "Add your own fields to forms and records to capture data QBO doesn&rsquo;t track by default. Limited on lower plans; far more flexible on Advanced.", href: "/quickbooks/online/features/custom-fields/", cta: "QBO custom fields &rarr;" },
    ],
  },
  {
    id: "work-projects",
    eyebrow: "Work &amp; projects",
    heading: "Job costing and payroll.",
    lede: "Tracking profitability by job and paying your team.",
    features: [
      { title: "Projects", body: "See income, costs, and profitability per job &mdash; the closest thing QBO has to job costing. Available on Plus and Advanced.", href: "/quickbooks/online/features/projects/", cta: "QBO projects &rarr;" },
      { title: "Time tracking", body: "Log billable and payroll hours against customers and projects &mdash; built in on QBO, with deeper tracking through QuickBooks Time on higher tiers.", href: "/quickbooks/online/features/time-tracking/", cta: "QBO time tracking &rarr;" },
      { title: "Payroll", body: "QuickBooks Payroll is a separate paid add-on from Intuit that runs payroll and files payroll taxes inside QBO. We explain how it works and where setup goes wrong &mdash; we are not Intuit.", href: "/quickbooks/online/features/payroll/", cta: "QBO payroll &rarr;" },
    ],
  },
  {
    id: "planning",
    eyebrow: "Planning &amp; reporting",
    heading: "Seeing where you stand.",
    lede: "Turning the data into decisions.",
    features: [
      { title: "Reports", body: "Profit and loss, balance sheet, AR/AP aging, and more &mdash; QBO&rsquo;s reports are only as accurate as the data feeding them, which is why setup and reconciliation come first.", href: "/quickbooks/online/features/reports/", cta: "QBO reports &rarr;" },
      { title: "Budgeting", body: "Build a budget in QBO and compare actuals against it month by month. Available on Plus and Advanced &mdash; useful once the chart of accounts is clean.", href: "/quickbooks/online/features/budgeting/", cta: "QBO budgeting &rarr;" },
      { title: "Cash flow planner", body: "QBO&rsquo;s forward-looking cash-flow view projects money in and out over the coming weeks &mdash; a planning tool, not a guarantee, and only as good as the underlying data.", href: "/quickbooks/online/features/cash-flow-planner/", cta: "Cash flow planner &rarr;" },
    ],
  },
];

// Flatten all 20 features in declared order for the ItemList.
const allFeatures = featureGroups.reduce(function (acc, g) { return acc.concat(g.features); }, []);

const faq = [
  { q: "What QuickBooks Online features do you help with?", a: "All of the core ones &mdash; the 20 features grouped on this page: invoices, estimates, customers, and sales tax; bills (A/P) and expenses; bank feeds, bank rules, and reconciliation; chart of accounts, products &amp; services, inventory, classes, and custom fields; projects, time tracking, and payroll; and reports, budgeting, and the cash flow planner. As an independent Certified QuickBooks ProAdvisor firm we configure and optimize these features inside your own QBO file so the books stay accurate &mdash; we don&rsquo;t sell QuickBooks." },
  { q: "Do I have all these features?", a: "Not necessarily &mdash; it depends on your QuickBooks Online plan. Simple Start and Essentials cover the core money-in, money-out, banking, and reporting features. Some features need higher tiers: inventory, classes, projects, and budgeting require Plus or Advanced, and custom fields are far more flexible on Advanced. Payroll is a separate paid add-on on any plan. If you&rsquo;re not sure what your plan includes, the file review will tell you." },
  { q: "Are you Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. We explain QuickBooks Online accurately and configure it in your file; Intuit makes the software and sets feature and plan availability." },
  { q: "Which plan do I need?", a: "That depends on which features your business actually uses &mdash; if you need inventory, projects, classes, or budgeting, you&rsquo;ll need Plus or Advanced; if you don&rsquo;t, Simple Start or Essentials may be plenty. We walk through the trade-offs on <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a>, and we&rsquo;ll confirm the right fit for your file during a discovery call." },
  { q: "Do you set these up for me?", a: "Yes &mdash; in your own QuickBooks Online file, with a named Certified ProAdvisor. We configure and optimize the features your business needs, fix the ones that were set up wrong, and keep the file clean month to month. Your data stays in your file; we keep the books CPA-ready and coordinate with your CPA or EA, who files." },
  { q: "Where do I start?", a: "With a free QuickBooks file review. We look at how your QBO file is configured today against the features your business actually needs &mdash; which are set up, which are missing, and which were set up incorrectly &mdash; and show you exactly where setup or cleanup will help. No pitch, no obligation. Independent firm, not Intuit." },
];

module.exports = {
  summary: "QuickBooks Online has dozens of features, but most businesses only need a clear answer to two questions: what does each feature actually do, and do I have it? This hub answers both &mdash; a plain-English page for all <strong>20 core QuickBooks Online features</strong>, grouped by how the work actually flows (money in, money out, banking, structure, work &amp; projects, planning &amp; reporting). Which features you have depends on your plan &mdash; Simple Start, Essentials, Plus, or Advanced &mdash; and some (inventory, classes, projects, budgeting) need Plus or Advanced. As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong> &mdash; we don&rsquo;t sell QuickBooks; we configure and optimize these features in <em>your</em> file so the books stay accurate. Not sure which plan fits? See <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a>.",
  featureGroups,
  relatedNote: "New to QuickBooks Online? Start with the <a href=\"/quickbooks/online/\">QuickBooks Online overview</a> for how the product fits together, then check <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a> to confirm which of these features your plan includes. When you&rsquo;re ready, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly how each feature is set up in your own file.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"QuickBooks Online Features: The Complete ProAdvisor Guide","description":"Every core QuickBooks Online feature explained by Certified ProAdvisors — invoices, bills, bank feeds, reconciliation, inventory, projects, payroll, reports, and more — and how an independent firm sets each up in your file.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbo-features-hub-summary"]}},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":ORIGIN+"/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Online","item":ORIGIN+"/quickbooks/online/"},
          {"@type":"ListItem","position":4,"name":"Features"}]},
        {"@type":"ItemList","@id":URL+"#features","name":"QuickBooks Online features","numberOfItems":allFeatures.length,"itemListElement":allFeatures.map(function(f,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(f.title),"url":ORIGIN+f.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
