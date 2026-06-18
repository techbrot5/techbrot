/* /quickbooks/compare/online-plans/ — t-mofu COMPARISON page. CLONED from
 * vs/techbrot-vs-bench.11tydata.js STRUCTURE, with the Bench-only "status" and
 * "migration" sections (and their data: benchStatus[], migration[]) DROPPED.
 * KEPT: byline, summary, aiSummary, comparison (vs-table), verdict (3 buyer
 * cards), faq, review, related.
 *
 * TOPIC: QuickBooks Online plans compared — a CAPABILITY-by-TIER matrix
 * (Simple Start vs Essentials vs Plus vs Advanced). This page COMPLEMENTS the
 * decision page /quickbooks/which-plan-is-right/ (which recommends a plan); this
 * one lays out the capability grid so a buyer can self-check what each tier
 * includes. INTENT-OVERLAP flagged to the founder in the build report.
 *
 * HONESTY (today 2026-06): NO specific dollar prices for any tier — Intuit
 * changes QBO pricing and tier packaging periodically, so current pricing is
 * deferred to Intuit and the choice is framed by CAPABILITY and FIT, not price.
 * The matrix describes what each tier includes by capability and included user
 * counts (Plus adds inventory/projects/class+location tracking; Advanced adds
 * the premium capabilities — custom report builder, workflow automation, custom
 * user roles, revenue recognition). Independent firm — not affiliated with
 * Intuit Inc. No fabricated stats or prices. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "The honest summary." — one-paragraph plain read framing the choice by
  // capability and fit, not price. No dollar figures (deferred to Intuit).
  summary: [
    "QuickBooks Online ships in four subscription tiers &mdash; <strong>Simple Start, Essentials, Plus, and Advanced</strong> &mdash; and the right one is decided almost entirely by <strong>capability and included users</strong>, not by headline price. Every tier covers the core ledger: income and expense tracking, invoicing, bank and credit-card connections, and standard reports. <strong>Essentials</strong> adds more users and bill (accounts-payable) management. <strong>Plus</strong> is the inflection point for most growing businesses &mdash; it unlocks <strong>inventory, project profitability, and class &amp; location tracking</strong>. <strong>Advanced</strong> layers on the premium operations toolkit: a custom report builder, workflow automation, custom user roles and permissions, and revenue recognition, with the highest included-user count. We don&rsquo;t publish per-tier prices here because Intuit adjusts QuickBooks Online pricing and packaging periodically &mdash; check current pricing with Intuit and pick the tier whose capability ceiling matches how your business actually runs.",
  ],
  // quick-5 — short questions deliberately NOT identical to any FAQ question, to
  // clear the faq-overlap check.
  aiSummary: [
    { q: "What are the four QuickBooks Online plans?", a: "QuickBooks Online comes in four tiers: <strong>Simple Start, Essentials, Plus, and Advanced</strong>. Each tier is a superset of the one below it &mdash; you keep everything from the lower tiers and gain additional capabilities and a higher included-user count as you move up." },
    { q: "What capability separates Plus from Essentials?", a: "<strong>Plus</strong> adds the three capabilities most growing businesses outgrow Essentials for: <strong>inventory tracking</strong>, <strong>project profitability</strong>, and <strong>class and location tracking</strong>. Essentials covers invoicing, bill management, and multiple users, but stops short of those operational tools." },
    { q: "When is Advanced worth stepping up to?", a: "<strong>Advanced</strong> is for larger or more complex operations that need the premium toolkit: a <a href=\"/quickbooks/online/advanced/custom-report-builder/\">custom report builder</a>, <a href=\"/quickbooks/online/advanced/workflow-automation/\">workflow automation</a>, <a href=\"/quickbooks/online/advanced/custom-user-roles/\">custom user roles and permissions</a>, <a href=\"/quickbooks/online/advanced/revenue-recognition/\">revenue recognition</a>, and the highest included-user count. It&rsquo;s a fit when reporting, controls, or team size have outgrown Plus." },
    { q: "Do you list the prices for each tier?", a: "No &mdash; deliberately. Intuit changes QuickBooks Online pricing, promotional discounts, and tier packaging periodically, so any figure we printed would go stale. We frame the decision by <strong>capability and fit</strong> and point you to Intuit for current pricing. A ProAdvisor can help you read current Intuit pricing against your actual needs." },
    { q: "Can I move up a tier later?", a: "Yes. QuickBooks Online lets you upgrade tiers as your needs grow &mdash; your data carries forward. The practical question isn&rsquo;t whether you can move later, it&rsquo;s whether starting one tier too low forces a near-term upgrade. A short <a href=\"/quickbooks/file-review/?intent=file-review\">file review</a> usually settles it." },
  ],
  // vs-table — 4-COLUMN tier matrix. data key rows {cap, ss, ess, plus, adv}.
  // Each cell a short "Yes / No / —" or short capability note. ~12+ rows.
  // No single "us" column — it is all QuickBooks Online.
  vsTable: [
    { cap: "Users included", ss: "1 (+1 accountant)", ess: "Up to 3 (+accountant)", plus: "Up to 5 (+accountant)", adv: "Up to 25 (+accountant)" },
    { cap: "Income &amp; expense tracking", ss: "Yes", ess: "Yes", plus: "Yes", adv: "Yes" },
    { cap: "Invoicing &amp; payments", ss: "Yes", ess: "Yes", plus: "Yes", adv: "Yes" },
    { cap: "Bank &amp; credit-card connections", ss: "Yes", ess: "Yes", plus: "Yes", adv: "Yes" },
    { cap: "Bill (A/P) management", ss: "No", ess: "Yes", plus: "Yes", adv: "Yes" },
    { cap: "Multiple users", ss: "No &mdash; single user", ess: "Yes", plus: "Yes", adv: "Yes" },
    { cap: "Inventory tracking", ss: "No", ess: "No", plus: "Yes", adv: "Yes" },
    { cap: "Project profitability", ss: "No", ess: "No", plus: "Yes", adv: "Yes" },
    { cap: "Class &amp; location tracking", ss: "No", ess: "No", plus: "Yes", adv: "Yes" },
    { cap: "Budgeting", ss: "&mdash;", ess: "&mdash;", plus: "Yes", adv: "Yes" },
    { cap: "Custom report builder", ss: "No", ess: "No", plus: "No", adv: "Yes" },
    { cap: "Workflow automation", ss: "No", ess: "No", plus: "No", adv: "Yes" },
    { cap: "Custom user roles &amp; permissions", ss: "No", ess: "No", plus: "No", adv: "Yes" },
    { cap: "Revenue recognition", ss: "No", ess: "No", plus: "No", adv: "Yes" },
  ],
  // 3 verdict profiles — buyer-cards.
  verdict: [
    { eyebrow: "Where most land", name: "Most small businesses land on Plus.", body: "If you carry <strong>inventory</strong>, run <strong>projects</strong> you need to track profitability on, or want to slice results by <strong>class or location</strong>, Plus is the floor &mdash; and it covers the majority of growing service and product businesses. It also gives you up to five users plus your accountant. Plus is the tier we recommend most often because its capability ceiling matches how most owner-operated and small-team businesses actually run. When in doubt between Essentials and Plus, the inventory/projects/class question usually decides it." },
    { eyebrow: "Stay lighter if", name: "Simple Start or Essentials is enough if&hellip;", body: "<strong>Simple Start</strong> fits a true solo operation that just needs the core ledger &mdash; income and expenses, invoicing, bank feeds, and standard reports &mdash; with one user. <strong>Essentials</strong> is the step up when you need <strong>bill (accounts-payable) management</strong> and <strong>multiple users</strong> (up to three), but you don&rsquo;t track inventory, project profitability, or class/location. If none of the Plus-tier operational tools apply to your business, paying up for them is wasted spend." },
    { eyebrow: "Step up when", name: "Step up to Advanced when&hellip;", body: "Move to <strong>Advanced</strong> when reporting, controls, or team size have outgrown Plus: you need a <strong>custom report builder</strong> for tailored management reporting, <strong>workflow automation</strong> to standardize approvals and reminders, <strong>custom user roles and permissions</strong> for tighter access control, <strong>revenue recognition</strong> for subscription or deferred-revenue businesses, or simply more included users (up to 25). Advanced is the premium operations tier &mdash; right-sized for larger small businesses, not micro-operations." },
  ],
  // page-review prose + trust-row.
  reviewProse: [
    "This comparison is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm &mdash; not affiliated with Intuit Inc. The capability and included-user descriptions reflect QuickBooks Online&rsquo;s published tier structure as of the review date; Intuit adjusts pricing, promotions, and feature packaging periodically, so we deliberately omit per-tier dollar figures and defer current pricing to Intuit. If you want a recommendation rather than a grid, see our decision guide, <a href=\"/quickbooks/which-plan-is-right/\">which plan is right for you</a>. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files.",
  ],
  reviewSpec: [
    { value: "Active", label: "Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Capability-led", label: "tiers compared by feature &amp; included users, not price" },
    { value: "Pricing", label: "current per-tier pricing deferred to Intuit &middot; not published here" },
    { value: "Independent", label: "firm &mdash; not affiliated with Intuit Inc." },
  ],
  // 4 related — stack-8. BUILT-only targets.
  related: [
    { title: "Which QuickBooks Online plan is right for you?", href: "/quickbooks/which-plan-is-right/", body: "The companion decision guide. This page is the capability grid; that one walks your situation to a recommended plan." },
    { title: "QuickBooks Online features", href: "/quickbooks/online/features/", body: "A capability-by-capability tour of what QuickBooks Online does &mdash; invoicing, bank feeds, inventory, projects, reporting, and more." },
    { title: "QuickBooks Online Advanced", href: "/quickbooks/online/advanced/", body: "The premium tier in depth: custom report builder, workflow automation, custom user roles, revenue recognition, and the rest of the Advanced toolkit." },
  ],
  // 6 FAQ — flat prose answers. Questions intentionally distinct from aiSummary.
  faq: [
    { q: "How many QuickBooks Online plans are there, and how do they relate?", a: "There are four: Simple Start, Essentials, Plus, and Advanced. They are cumulative &mdash; each higher tier includes everything in the tiers below it and adds more capabilities plus a higher included-user count. So choosing a tier is really choosing how high a capability ceiling you need, not picking from four unrelated products." },
    { q: "What does Simple Start include, and what does it leave out?", a: "Simple Start covers the core ledger for a single user: income and expense tracking, invoicing and payments, bank and credit-card connections, sales tax, and standard reports. It does not include bill (accounts-payable) management, multiple users, inventory, project profitability, or class and location tracking. It suits a true solo operation with straightforward books." },
    { q: "What do I gain by moving from Essentials to Plus?", a: "Three operational capabilities most often drive the move: inventory tracking, project profitability, and class and location tracking. Plus also raises the included-user count to five (plus your accountant). If your business carries stock, needs to know which jobs are profitable, or wants to report by department, region, or product line, Plus is the tier that supports it." },
    { q: "What makes Advanced different from Plus?", a: "Advanced is the premium operations tier. On top of everything in Plus, it adds a custom report builder for tailored management reporting, workflow automation for approvals and reminders, custom user roles and permissions for finer access control, revenue recognition for deferred or subscription revenue, and the highest included-user count (up to 25). It is sized for larger small businesses with more complex reporting and controls." },
    { q: "Why don&rsquo;t you list the price of each plan?", a: "Because Intuit changes QuickBooks Online pricing, promotional discounts, and tier packaging periodically, any price we printed would risk being out of date and misleading. We frame the decision by capability and fit and point you to Intuit for current, authoritative pricing. A ProAdvisor can help you weigh current Intuit pricing against what your business actually needs." },
    { q: "Can I upgrade or downgrade my plan later?", a: "Yes. QuickBooks Online lets you change tiers as your needs evolve, and your data carries forward when you upgrade. The practical concern is starting a tier too low and being forced into a quick upgrade, or paying for Plus or Advanced capabilities you never use. A brief file review usually clarifies the right starting tier so you don&rsquo;t over- or under-buy." },
    { q: "Is TechBrot affiliated with Intuit or QuickBooks?", a: "No. TechBrot is an independent firm of Certified QuickBooks ProAdvisors &mdash; not affiliated with Intuit Inc. ProAdvisor certification means our team is trained and credentialed on QuickBooks; it does not make us part of Intuit. We give an independent read on which tier fits your business, and we coordinate with your CPA, who files." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/compare/online-plans/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-18","speakable":{"@type":"SpeakableSpecification","cssSelector":["#cmp-online-plans-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Compare","item":"https://techbrot.com/quickbooks/compare/"},
          {"@type":"ListItem","position":4,"name":"Online Plans","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
