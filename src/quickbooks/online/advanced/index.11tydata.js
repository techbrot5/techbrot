/* /quickbooks/online/advanced/ — QUICKBOOKS ONLINE ADVANCED HUB (t-hub).
 * Routes to all 10 Advanced capability pages, grouped by what they're for.
 * CollectionPage + ItemList (all 10) + BreadcrumbList + FAQPage + speakable.
 * HONESTY: independent firm, not Intuit; we don't oversell Advanced (many are
 * fine on Plus); no invented Advanced pricing (defer to Intuit, frame by
 * capability/fit); rev-rec + fixed assets coordinate with the CPA for GAAP/tax;
 * we configure features in the client's own file; founder-name-zero (David only
 * in #david-westgate); canonical pricing/plan refs only. */
const { stripTags } = require("../../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/quickbooks/online/advanced/";

const capabilityGroups = [
  {
    id: "reporting",
    eyebrow: "Reporting &amp; analysis",
    heading: "Seeing more than Plus can show you.",
    lede: "The reporting depth that is the most common reason to move up to Advanced.",
    capabilities: [
      { title: "Custom report builder", body: "Build reports beyond QBO&rsquo;s standard set &mdash; pick the fields, group and subtotal, filter, and visualize with custom charts. The headline reason most businesses consider Advanced; worth it only if the canned reports genuinely don&rsquo;t answer your question.", href: "/quickbooks/online/advanced/custom-report-builder/", cta: "Custom report builder &rarr;" },
      { title: "Spreadsheet Sync", body: "Push and pull QBO data to and from Excel and build reports there, then write changes back &mdash; useful if your team lives in spreadsheets, redundant if QBO&rsquo;s own reports already do the job.", href: "/quickbooks/online/advanced/spreadsheet-sync/", cta: "Spreadsheet Sync &rarr;" },
      { title: "Performance center", body: "A customizable dashboard of charts and KPIs built on your QBO data &mdash; a quick read on where the business stands. Only as useful as the underlying data is clean.", href: "/quickbooks/online/advanced/performance-center/", cta: "Performance center &rarr;" },
    ],
  },
  {
    id: "scale",
    eyebrow: "Volume &amp; efficiency",
    heading: "Doing more, faster.",
    lede: "Capabilities that pay off when transaction or task volume has outgrown Plus.",
    capabilities: [
      { title: "Batch transactions", body: "Enter, edit, or send invoices, bills, and expenses in bulk instead of one at a time &mdash; a real time-saver at high volume, and largely irrelevant at low volume.", href: "/quickbooks/online/advanced/batch-transactions/", cta: "Batch transactions &rarr;" },
      { title: "Workflow automation", body: "Trigger reminders, approvals, and routine actions automatically by rule &mdash; reduces manual chasing, but bad rules automate mistakes, so they need setting up with care.", href: "/quickbooks/online/advanced/workflow-automation/", cta: "Workflow automation &rarr;" },
      { title: "Employee expense management", body: "Let employees submit expenses for review and approval inside QBO &mdash; useful once you have a team spending company money, overkill for an owner-operator.", href: "/quickbooks/online/advanced/employee-expense-management/", cta: "Expense management &rarr;" },
    ],
  },
  {
    id: "controls",
    eyebrow: "Users, controls &amp; protection",
    heading: "Tighter control of the file.",
    lede: "More users, finer permissions, and a safety net &mdash; the case for Advanced when more people touch the books.",
    capabilities: [
      { title: "Custom user roles", body: "Define exactly what each user can see and do, beyond QBO&rsquo;s standard roles &mdash; the reason to move up when several people work in the file and you need real separation of duties.", href: "/quickbooks/online/advanced/custom-user-roles/", cta: "Custom user roles &rarr;" },
      { title: "Online backup &amp; restore", body: "Automatic backups of your QBO company with point-in-time restore &mdash; a safety net against bad imports or deletions. Reassuring, but not a substitute for careful bookkeeping.", href: "/quickbooks/online/advanced/online-backup-restore/", cta: "Backup &amp; restore &rarr;" },
    ],
  },
  {
    id: "accounting",
    eyebrow: "Advanced accounting",
    heading: "GAAP-grade accounting features.",
    lede: "Powerful, and the two that most need professional judgment &mdash; we coordinate these with your CPA for GAAP and tax.",
    capabilities: [
      { title: "Revenue recognition", body: "Recognize revenue over time per a schedule rather than all at once &mdash; relevant for subscriptions, contracts, and deferred revenue. The rules are GAAP territory, so we set this up in coordination with your CPA.", href: "/quickbooks/online/advanced/revenue-recognition/", cta: "Revenue recognition &rarr;" },
      { title: "Fixed asset accounting", body: "Track fixed assets and depreciation inside QBO instead of a side spreadsheet &mdash; the depreciation method and schedule have tax and GAAP consequences, so we coordinate this with your CPA.", href: "/quickbooks/online/advanced/fixed-asset-accounting/", cta: "Fixed asset accounting &rarr;" },
    ],
  },
];

// Flatten all 10 capabilities in declared order for the ItemList.
const allCapabilities = capabilityGroups.reduce(function (acc, g) { return acc.concat(g.capabilities); }, []);

const faq = [
  { q: "What is QuickBooks Online Advanced?", a: "QuickBooks Online Advanced is the top tier of QuickBooks Online &mdash; above Simple Start, Essentials, and Plus. It includes everything in Plus and adds capabilities aimed at larger or more complex businesses: a custom report builder, Spreadsheet Sync, workflow automation, custom user roles, batch transactions, revenue recognition, fixed asset accounting, employee expense management, online backup &amp; restore, and a performance center. Those 10 capabilities are exactly what you&rsquo;re paying the extra for, and each has a plain-English page on this hub." },
  { q: "Do I need Advanced or is Plus enough?", a: "Honestly, many businesses are fine on Plus. Advanced is worth moving up to only when you&rsquo;ve genuinely outgrown Plus in one of four ways: transaction volume (batch entry, automation), number of users (custom roles, expense approvals), reporting depth (the custom report builder, Spreadsheet Sync, performance center), or accounting complexity (revenue recognition, fixed assets). If none of those describe you, Plus is likely the right call. We walk through the trade-offs on <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a>, and we&rsquo;ll confirm the fit against your real file." },
  { q: "Is Advanced worth the cost?", a: "Only if you&rsquo;ll actually use these capabilities. Advanced costs meaningfully more than Plus, so the value comes from real use &mdash; if the custom report builder, batch transactions, custom roles, or the accounting features solve a problem you have today, it pays for itself; if they don&rsquo;t, you&rsquo;re paying for shelf-ware. We don&rsquo;t set Advanced pricing &mdash; Intuit does &mdash; so we don&rsquo;t quote a figure here; we assess fit by capability and tell you straight whether the upgrade earns its keep for your business." },
  { q: "Are you Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. We explain QuickBooks Online Advanced accurately and configure it in your file; Intuit makes the software and sets feature and pricing availability." },
  { q: "Do you set up Advanced features for me?", a: "Yes &mdash; in your own QuickBooks Online Advanced file, with a named Certified ProAdvisor. We configure the capabilities your business actually needs &mdash; the custom report builder, workflow automation, custom roles, batch entry, expense management, backup, and the rest &mdash; and fix the ones that were set up wrong. Revenue recognition and fixed asset accounting touch GAAP and tax, so we set those up in coordination with your CPA or EA, who files." },
  { q: "Should I upgrade to Advanced just for the reports?", a: "Sometimes &mdash; but check the standard reports first. The custom report builder and performance center are the most common reasons people move up, yet QBO&rsquo;s built-in reports and Plus-level customization already answer most questions once the file is clean. We look at the reports you actually need against what you can already get on Plus, and only recommend Advanced when the gap is real. Start with a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a>." },
];

module.exports = {
  summary: "QuickBooks Online Advanced is the highest QBO tier, and these 10 capabilities are what you&rsquo;re paying the extra for over <a href=\"/quickbooks/which-plan-is-right/\">Plus</a>: the <strong>custom report builder</strong>, <strong>Spreadsheet Sync</strong>, <strong>workflow automation</strong>, <strong>custom user roles</strong>, <strong>batch transactions</strong>, <strong>revenue recognition</strong>, <strong>fixed asset accounting</strong>, <strong>employee expense management</strong>, <strong>online backup &amp; restore</strong>, and the <strong>performance center</strong>. This hub explains what each one does and &mdash; just as importantly &mdash; whether you actually need it. We won&rsquo;t oversell Advanced: it earns its price only if your volume, users, reporting, or controls have outgrown Plus, and many businesses are perfectly served by Plus. As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong> &mdash; we don&rsquo;t set Advanced pricing and we don&rsquo;t guess at it; we assess fit by capability and, when Advanced is the right call, configure the features in <em>your</em> file. Revenue recognition and fixed asset accounting touch GAAP and tax, so we coordinate those with your CPA.",
  capabilityGroups,
  relatedNote: "Not sure Advanced is the right tier? Start with <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a> to compare Advanced against Plus and the lower tiers, or step back to the <a href=\"/quickbooks/online/\">QuickBooks Online overview</a> for how the product fits together. For the capabilities shared across every plan, see all 20 <a href=\"/quickbooks/online/features/\">QuickBooks Online features</a>. When you&rsquo;re ready, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows whether Advanced earns its cost for your file &mdash; or whether Plus is plenty.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"QuickBooks Online Advanced: Capabilities & Whether You Need It","description":"What QuickBooks Online Advanced adds over Plus — custom report builder, Spreadsheet Sync, workflow automation, custom roles, batch transactions, revenue recognition, fixed assets, expense management, backup, and the performance center — and an honest read on whether you need it, from an independent firm.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbo-advanced-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":ORIGIN+"/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Online","item":ORIGIN+"/quickbooks/online/"},
          {"@type":"ListItem","position":4,"name":"Advanced"}]},
        {"@type":"ItemList","@id":URL+"#capabilities","name":"QuickBooks Online Advanced capabilities","numberOfItems":allCapabilities.length,"itemListElement":allCapabilities.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.title),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
