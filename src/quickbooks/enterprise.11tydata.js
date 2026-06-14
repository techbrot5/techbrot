/* /quickbooks/enterprise/ — t-mofu PRODUCT page (mirrors the desktop.njk pattern,
 * the approved product proving page). Source: old root HTML
 * quickbooks/enterprise/index.html (full body read) — title/meta/8-FAQ/schema
 * (CollectionPage+BreadcrumbList+ItemList of 6 industry editions+FAQPage). Product
 * positioning is HONEST: Enterprise is the mid-market Desktop product Intuit still
 * actively develops; six industry editions; who genuinely fits; who is over-served
 * (-> QBO) or has outgrown it (-> NetSuite/Sage Intacct); tier structure; no specific
 * $ figures (per the source FAQ); how TechBrot helps. The ItemList equity (6 industry
 * editions) is preserved BOTH as the visible stack-8 editions grid and in the
 * FAQPage/ItemList schema graph. CTA TIER (founder ruling — t-mofu products):
 * file-review PRIMARY; discovery-call secondary (intent=quickbooks); phone tertiary.
 * Source body used intent=qbe-advisory CTAs; remapped to file-review-primary +
 * intent=quickbooks per the migration brief (qbe-advisory not in intents.json).
 * Firm-level authorship — no personal name in visible content. Components stay
 * in-manifest: byline-block, buyer-card, stack-8, faq accordion, meta-reviewed.
 * NOTE: the source FAQ Q/A text (8 Q&As) is preserved VERBATIM from the FAQPage
 * JSON-LD; the visible accordion answers carried inline links in the source but the
 * schema text is plain — both reproduced faithfully (links in visible, plain in schema
 * via stripTags). The "The monthly brief." newsletter band is intentionally dropped
 * (handled centrally). The visible H2/H3 set matches baseline.json verbatim. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "40", label: "Simultaneous user maximum — the deepest Desktop tier Intuit still develops" },
    { value: "6", label: "Industry-specific editions — Manufacturing & Wholesale, Contractor, Retail, Nonprofit, Professional Services, Accountant" },
    { value: "0", label: "affiliate or referral commission on Enterprise or any QuickBooks subscription" },
  ],
  credentials: [
    "Every TechBrot operator holds active Certified QuickBooks Enterprise ProAdvisor credentials, plus Desktop, Online (Level 2), and Payroll &mdash; meaning we can support your Enterprise file fluently and assess whether stepping up to NetSuite or Sage Intacct is the right call when you outgrow it. Verification available on request.",
    "We earn nothing from your Enterprise subscription &mdash; no Intuit referral fees, no affiliate revenue, no commission &mdash; so the recommendation reflects what fits your business, not what pays us.",
    "One firm handles the full Enterprise lifecycle &mdash; honest fit assessment, edition and tier selection, <a href=\"/quickbooks/setup/\">setup</a>, <a href=\"/quickbooks/cleanup/\">file cleanup</a>, ongoing bookkeeping and controllership, and a clean handoff when you outgrow it.",
  ],
  // tl;dr / definition — prose (preserves the tldr equity).
  definition: [
    "QuickBooks Enterprise is Intuit&rsquo;s mid-market accounting software &mdash; a substantially more capable version of <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a> for larger small businesses and lower mid-market companies that have outgrown Pro and Premier but aren&rsquo;t large or complex enough for full ERP systems like NetSuite or Sage Intacct. It supports <strong>up to 40 simultaneous users</strong>, offers <strong>advanced inventory</strong> features (FIFO costing, serial and lot tracking, bin location tracking, multi-warehouse), <strong>advanced reporting</strong>, and <strong>six industry-specific editions</strong>: Manufacturing &amp; Wholesale, Contractor, Retail, Nonprofit, Professional Services, and Accountant. Pricing scales by user count and subscription tier &mdash; Intuit currently structures Enterprise with multiple tier levels offering different bundles of included features (payroll, hosting, advanced inventory, CRM integration).",
    "Critically, <strong>Enterprise is the Desktop product Intuit is still actively developing</strong> and selling to new US customers &mdash; the &ldquo;Desktop wind-down&rdquo; narrative applies much less directly here than to Pro or Premier. The honest read: most US small businesses are over-served by Enterprise and better fit by <a href=\"/quickbooks/online/\">QuickBooks Online Plus or Advanced</a>; some genuinely need it; a smaller group has outgrown it and should look at NetSuite or Sage Intacct. TechBrot ProAdvisors hold active Enterprise certifications and handle Enterprise file work, industry-edition setup, and honest fit assessments &mdash; including telling you when Enterprise <em>isn&rsquo;t</em> the answer. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., no commissions.",
  ],
  // quick-5 ai-summary — preserved verbatim from source.
  aiSummary: [
    { q: "What is QuickBooks Enterprise?", a: "Intuit&rsquo;s <strong>mid-market accounting software</strong> &mdash; a substantially more capable Desktop product than Pro/Premier. <strong>Up to 40 users</strong>, advanced inventory (FIFO, serial/lot, bin, multi-warehouse), advanced reporting, six industry editions. The Desktop product Intuit is <strong>still actively developing</strong>." },
    { q: "Who fits Enterprise?", a: "Mid-market US businesses: <strong>$5&ndash;50M revenue, 10&ndash;40 users, real inventory complexity</strong> (multi-warehouse, serial/lot, manufacturing), or industry-specific workflows in manufacturing, distribution, construction, retail, nonprofit. Without these, Enterprise is usually over-spec &mdash; QBO Plus or Advanced fits better." },
    { q: "Enterprise vs Pro/Premier?", a: "Enterprise supports <strong>far more users</strong> (40 vs 3/5), handles much larger files, and adds advanced inventory, advanced reporting, custom user roles, advanced pricing, ODBC database access &mdash; capabilities that don&rsquo;t exist in Pro/Premier. Pro/Premier are also being phased to existing-subscriber-only; Enterprise still sells to new customers." },
    { q: "Enterprise vs QuickBooks Online?", a: "Enterprise: locally installed, <strong>deeper inventory and industry-specific depth</strong>, more advanced reporting. QBO: cloud-native, larger app ecosystem, automatic updates. Most US small businesses fit QBO Plus or Advanced; Enterprise is the right call when you need <em>real</em> inventory or industry depth." },
    { q: "When to move beyond Enterprise?", a: "When you need <strong>true multi-entity consolidation, large-scale manufacturing or supply chain, cloud-native multi-location concurrency, or audit/SOC controls</strong>. Common signals: 40+ users, multi-entity rollups, demand planning, public-company readiness. <strong>NetSuite, Sage Intacct, or Microsoft Dynamics fits better &mdash; we&rsquo;ll say so honestly.</strong>" },
  ],
  // six industry editions — stack-8 grid (preserves the ItemList equity, 6 editions).
  editions: [
    { tier: "01 · Most common", name: "Manufacturing &amp; Wholesale", body: "The flagship Enterprise edition. Assembly builds, work orders, bill of materials, advanced inventory across multiple warehouses, FIFO costing, serial and lot tracking, sales orders, and back-order management. <strong>Fits:</strong> manufacturers, distributors, wholesalers." },
    { tier: "02 · Construction", name: "Contractor", body: "Built for general contractors, subcontractors, and construction firms. Job costing with detailed labor and materials breakdown, change orders, progress invoicing, AIA-format invoicing, certified payroll reporting. <strong>Fits:</strong> GCs, subcontractors, construction." },
    { tier: "03 · Retail", name: "Retail", body: "Retail-specific inventory management, sales reporting by item and location, multi-store consolidation, and integration paths into common retail POS systems for product-driven retail operations. <strong>Fits:</strong> multi-store retail, specialty retail." },
    { tier: "04 · Nonprofit", name: "Nonprofit", body: "Fund accounting, donor management, program-and-grant tracking, restricted-fund reporting, Form 990 categorization. Tuned for the accounting realities of 501(c)(3) organizations. <strong>Fits:</strong> nonprofits, foundations, associations." },
    { tier: "05 · Services", name: "Professional Services", body: "Time tracking by employee and project, project profitability reporting, billable expense pass-through, mileage tracking, and client-and-engagement billing for professional services firms. <strong>Fits:</strong> consulting, law, architecture, engineering." },
    { tier: "06 · Accountant", name: "Accountant", body: "Built for accounting firms managing multiple client files. Toggle between client editions in one application, client data review tools, batch processing, and accountant-specific reporting. <strong>Fits:</strong> accounting firms, multi-client bookkeepers." },
  ],
  // who Enterprise fits — stack-8 signal grid.
  fit: [
    { name: "Manufacturers with real assembly builds.", body: "If you build products from raw materials or components, with bill-of-materials accounting and work-order tracking, Enterprise&rsquo;s manufacturing features (assemblies, BOM costing, work orders) are genuinely deeper than anything in QBO or Pro/Premier." },
    { name: "Distributors and wholesalers with serious inventory.", body: "Multi-warehouse stock, FIFO costing, serial and lot tracking, bin locations, advanced pricing rules per customer or quantity. Inventory complexity is the single most common reason businesses genuinely need Enterprise." },
    { name: "Contractors doing real job costing.", body: "Detailed job costing with labor, materials, and equipment categories, change orders, progress invoicing, AIA-format billing, certified payroll. Construction businesses with $5M+ annual revenue typically need the Contractor edition&rsquo;s depth." },
    { name: "Teams of 10&ndash;40 concurrent users.", body: "When your user count exceeds what QBO Plus (5 users) or Advanced (25 users) supports affordably, or when you need richer user-role customization, Enterprise&rsquo;s 40-user ceiling and custom role permissions become the right architecture." },
    { name: "Companies needing ODBC database access.", body: "Enterprise&rsquo;s ODBC connectivity lets you pull data directly into Excel, Power BI, or other BI tools for custom reporting that goes beyond QuickBooks&rsquo; built-in reports. A real differentiator for analytics-heavy operations." },
    { name: "Nonprofits with real fund accounting needs.", body: "Larger nonprofits managing restricted funds, grants, and programs need genuine fund accounting &mdash; not workarounds in QBO. The Nonprofit edition handles this with appropriate depth and Form 990 categorization built in." },
  ],
  // when Enterprise isn't the right call — stack-8 scope grid.
  notFit: [
    { name: "Over-served &rarr; look at QBO instead", body: "If you don&rsquo;t genuinely need advanced inventory, industry-specific edition depth, 10+ users, or ODBC database access, Enterprise is over-spec and over-priced for your needs. <a href=\"/quickbooks/online/\">QuickBooks Online Plus or Advanced</a> typically fits better &mdash; cloud-native, lower cost, and easier to scale. Common signals you&rsquo;re here: service business under $5M, no inventory complexity, fewer than 10 users, your CPA works in QBO." },
    { name: "Outgrown &rarr; look at NetSuite or Sage Intacct", body: "If you need true multi-entity consolidation, large-scale manufacturing complexity, demand planning, advanced supply-chain management, cloud-native multi-location concurrency, or audit/SOC controls, Enterprise has hit its ceiling. <strong>NetSuite, Sage Intacct, or Microsoft Dynamics 365 Business Central</strong> are typically the right next step. Common signals: 40+ users, multi-entity rollups, public-company readiness, IPO timeline." },
    { name: "The diagnostic decides", body: "Most businesses can self-assess roughly &mdash; but the edges are genuinely hard to read without a ProAdvisor. The fit assessment maps your specific operations, user count, inventory complexity, and growth trajectory against Enterprise&rsquo;s capabilities and ceiling, and recommends the platform that <em>actually fits</em>, not the one we earn from. (We earn nothing from any of them.)" },
  ],
  // tier structure — stack-8 numbered grid.
  tiers: [
    { num: "01", name: "Base / entry tier", body: "Core Enterprise: all the foundational mid-market features, industry edition, advanced inventory, advanced reporting, custom user roles. Payroll and Salesforce CRM integration generally <em>not</em> included at this tier." },
    { num: "02", name: "Mid tier &mdash; payroll included", body: "Everything in base, plus integrated payroll. The right tier for businesses running payroll inside Enterprise rather than through Gusto, ADP, or another standalone payroll provider." },
    { num: "03", name: "Hosting-included tier", body: "Everything in mid tier, plus hosted access &mdash; Enterprise runs on Intuit-managed cloud infrastructure rather than your local servers. Effectively makes Enterprise cloud-accessible without third-party hosting providers." },
    { num: "04", name: "Top tier &mdash; CRM &amp; assisted payroll", body: "The full bundle: hosting, advanced inventory features, Salesforce CRM integration, assisted payroll service. Designed for the largest Enterprise users with complex operations needing the whole stack integrated." },
    { num: "05", name: "Pricing scales by user", body: "Within each tier, pricing scales meaningfully with simultaneous user count. A 5-user license costs significantly less than a 30-user license &mdash; right-sizing the user count to actual concurrent need is a real cost lever." },
    { num: "06", name: "The honest read", body: "Most businesses don&rsquo;t need the top tier. The combination of base + payroll + your own hosting (or no hosting) often fits operationally and costs less. A ProAdvisor can tell you which tier you actually need before subscribing." },
  ],
  // how TechBrot helps — stack-8 numbered grid with service links.
  services: [
    { num: "01", name: "Honest fit assessment", body: "Before subscribing, we tell you whether Enterprise is the right answer at all &mdash; or whether QBO Plus/Advanced fits your needs more cheaply, or whether you should be looking at NetSuite or Sage Intacct instead." },
    { num: "02", name: "Edition &amp; tier selection", body: "Once Enterprise is right, picking the industry edition and subscription tier correctly the first time saves real money &mdash; both in subscription cost and in setup rework. We map your needs to the right configuration." },
    { num: "03", name: "<a href=\"/quickbooks/setup/\">Setup &amp; onboarding</a>", body: "Industry-specific chart of accounts, advanced inventory configuration, multi-warehouse setup, user-role definitions, integrations &mdash; the Enterprise-grade setup that prevents years of operational friction." },
    { num: "04", name: "<a href=\"/quickbooks/cleanup/\">File cleanup &amp; repair</a>", body: "Enterprise files are larger and more complex than Pro/Premier &mdash; when they develop problems (multi-user issues, hosting setup, advanced inventory imbalances) the cleanup requires Enterprise-specific expertise." },
    { num: "05", name: "Ongoing bookkeeping &amp; controllership", body: "Monthly close, reconciliation, financial reporting, and controller-level oversight in your Enterprise file. <a href=\"/accounting/services/controller-services/\">Controller services</a> for Enterprise businesses needing more than transactional bookkeeping." },
    { num: "06", name: "When you outgrow it", body: "When Enterprise hits its ceiling and NetSuite, Sage Intacct, or Dynamics is the right next step, we&rsquo;ll say so plainly &mdash; and coordinate with your ERP implementation partner on the data handoff. We don&rsquo;t do ERP implementations ourselves, but we make sure the QuickBooks-side handoff is clean." },
  ],
  // buyer-card routing — t-mofu signature; "fits" vs "over-served" vs "file work".
  routing: [
    { opener: "&ldquo;We think Enterprise fits us.&rdquo;", body: "Real inventory complexity, an industry-specific edition need, or a team of 10&ndash;40 users &mdash; an honest fit read confirms whether Enterprise is right and which industry edition and tier match your operations.", cta: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review" },
    { opener: "&ldquo;We might be over-spec for Enterprise.&rdquo;", body: "Service business under $5M, no inventory complexity, fewer than 10 users, a QBO-fluent CPA &mdash; <a href=\"/quickbooks/online/\">QuickBooks Online</a> Plus or Advanced often fits better, cloud-native and at lower cost.", cta: "QuickBooks Online", href: "/quickbooks/online/" },
    { opener: "&ldquo;Our Enterprise file is a mess.&rdquo;", body: "Enterprise files are larger and more complex than Pro/Premier &mdash; multi-user issues, hosting setup, advanced inventory imbalances. File cleanup reconciles every account and documents what changed.", cta: "QuickBooks cleanup", href: "/quickbooks/cleanup/" },
  ],
  operatorSpec: [
    { value: "Ent + Desktop", label: "Enterprise, Desktop, Online (L2), and Payroll ProAdvisor certifications" },
    { value: "Zero", label: "commission — no Enterprise or QBO referral revenue" },
    { value: "Named", label: "ProAdvisor + platform-level quality review" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  // FAQ — 8 Q&As preserved VERBATIM from the source FAQPage JSON-LD. Visible answers
  // carry the source's inline cross-links; schema text is plain via stripTags.
  faq: [
    { q: "What is QuickBooks Enterprise?", a: "QuickBooks Enterprise is Intuit&rsquo;s mid-market accounting software &mdash; a substantially more capable version of QuickBooks Desktop built for larger small businesses and lower mid-market companies that have outgrown Pro and Premier but aren&rsquo;t ready for full ERP systems like NetSuite or Sage Intacct. It supports up to 40 simultaneous users, offers advanced inventory features (FIFO costing, serial and lot tracking, bin location tracking, multi-warehouse), advanced reporting, and industry-specific editions for Manufacturing &amp; Wholesale, Contractor, Retail, Nonprofit, Professional Services, and Accountant use cases. It&rsquo;s sold on annual subscription pricing with multiple tier levels and is the QuickBooks Desktop product Intuit is still actively developing and selling to new US customers." },
    { q: "Who should use QuickBooks Enterprise?", a: "QuickBooks Enterprise fits businesses that have outgrown QuickBooks Pro, Premier, or Online Plus but aren&rsquo;t large or complex enough to need a full ERP system. Typical Enterprise users are mid-market US businesses with $5&ndash;50 million in annual revenue, 10&ndash;40 users needing concurrent access, real inventory complexity (multi-warehouse, serial or lot tracking, FIFO costing, manufacturing assemblies), or industry-specific workflows in manufacturing, distribution, construction, retail, or nonprofit operations. Businesses without these characteristics are typically over-served by Enterprise and better fit by <a href=\"/quickbooks/online/\">QuickBooks Online Plus or Advanced</a>." },
    { q: "What&rsquo;s the difference between QuickBooks Enterprise and QuickBooks Pro or Premier?", a: "QuickBooks Enterprise supports significantly more users (up to 40 vs Pro&rsquo;s 3 or Premier&rsquo;s 5), handles much larger data files, and includes advanced inventory and reporting features that don&rsquo;t exist in Pro or Premier. Pro is general small-business accounting; Premier adds industry editions and forecasting; Enterprise adds advanced inventory (FIFO, bins, serial/lot, multi-warehouse), advanced reporting (custom report writer, ODBC database access), advanced pricing rules, user-role customization, and dedicated customer support. <a href=\"/quickbooks/desktop/\">Pro and Premier</a> are also being phased down to existing-subscriber-only, while Enterprise continues to receive new development and new-customer sales." },
    { q: "What&rsquo;s the difference between QuickBooks Enterprise and QuickBooks Online?", a: "QuickBooks Enterprise is locally installed mid-market accounting software, while <a href=\"/quickbooks/online/\">QuickBooks Online</a> is cloud-based accounting for small businesses. Enterprise offers significantly deeper inventory (FIFO costing, multi-warehouse, serial and lot tracking, bin locations), more advanced reporting, and industry-specific feature depth that QuickBooks Online doesn&rsquo;t match &mdash; even at its Advanced tier. Online offers cloud access, multi-user concurrency without local hosting setup, automatic updates, and a much larger native app ecosystem. The right choice depends on whether your business genuinely needs Enterprise&rsquo;s depth: most don&rsquo;t, and QBO Plus or Advanced is sufficient; some absolutely do, and Enterprise is the right answer." },
    { q: "What are the QuickBooks Enterprise industry editions?", a: "QuickBooks Enterprise is sold in six industry-specific editions, each tuned with chart-of-accounts templates, reports, and workflow features for that industry. Manufacturing &amp; Wholesale handles assemblies, work orders, and inventory costing. Contractor handles job costing, change orders, and progress invoicing. Retail handles point-of-sale integration and inventory management for retail operations. Nonprofit handles fund accounting, donor management, and Form 990 reporting. Professional Services handles time tracking, project profitability, and billable expense workflows. Accountant is for firms managing multiple client books. You can switch editions later, but starting in the right one saves rework on the chart of accounts and reports." },
    { q: "How much does QuickBooks Enterprise cost?", a: "QuickBooks Enterprise is sold on annual subscription pricing set by Intuit, with multiple tier levels (typically named Silver, Gold, Platinum, and Diamond) offering different bundles of included features &mdash; payroll integration, hosting, advanced inventory, and Salesforce CRM integration are tier-dependent. Pricing scales meaningfully with user count and tier and is significantly higher than Pro/Premier &mdash; typically in the low thousands per year at the entry tier and substantially more for higher tiers and user counts. Because pricing changes annually and varies widely by configuration, we don&rsquo;t publish specific dollar figures; check Intuit directly or ask a ProAdvisor for a read on which tier fits before subscribing." },
    { q: "Is QuickBooks Enterprise being discontinued like other Desktop products?", a: "No. While Intuit has restricted new sales of <a href=\"/quickbooks/desktop/\">QuickBooks Pro Plus and Premier Plus</a> to existing subscribers only, QuickBooks Enterprise remains actively sold to new customers and continues to receive ongoing development and new feature investment. Intuit treats Enterprise as a distinct mid-market product rather than part of the consumer-Desktop product line being wound down. The &ldquo;QuickBooks Desktop sunset&rdquo; narrative applies much less directly to Enterprise &mdash; businesses on Enterprise have more runway and less migration pressure than those on Pro or Premier." },
    { q: "When should I move from QuickBooks Enterprise to NetSuite, Sage Intacct, or another ERP?", a: "QuickBooks Enterprise hits real limits at certain points: when you need true multi-entity consolidation with intercompany eliminations, when your inventory complexity exceeds Enterprise&rsquo;s capabilities (large-scale manufacturing, demand planning, advanced supply chain), when you need cloud-native multi-location concurrent access without hosting workarounds, or when your operations require process automation and audit controls that Enterprise doesn&rsquo;t provide. Common signals: 40+ users, multi-entity rollups, manufacturing complexity beyond assembly builds, or compliance requirements (SOC, public-company readiness). When you hit those, NetSuite, Sage Intacct, or Microsoft Dynamics typically fits better &mdash; and as an independent firm, we&rsquo;ll say so honestly rather than push Enterprise where it no longer fits." },
  ],
  related: [
    { title: "QuickBooks Online", href: "/quickbooks/online/", body: "The cloud-based default for most US small businesses &mdash; if you don&rsquo;t need Enterprise&rsquo;s depth, Plus or Advanced typically fits better and costs less." },
    { title: "QuickBooks Desktop", href: "/quickbooks/desktop/", body: "Pro, Premier, and Mac &mdash; the smaller Desktop products Intuit is winding down, with restricted new sales but continued support for existing subscribers." },
    { title: "QuickBooks Payroll", href: "/quickbooks/payroll/", body: "Payroll integrated with Enterprise &mdash; included in some Enterprise subscription tiers, available standalone, or replaceable with Gusto, Rippling, or ADP." },
    { title: "Plan selector", href: "/quickbooks/which-plan-is-right/", body: "Complimentary advisory across the QuickBooks product line &mdash; Online, Desktop, Enterprise &mdash; no commission, honest answer." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/enterprise/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbe-ai-summary","#qbent-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Enterprise","item":url}]},
        {"@type":"ItemList","@id":url+"#edition-list","name":"QuickBooks Enterprise Industry Editions","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Manufacturing & Wholesale"},
          {"@type":"ListItem","position":2,"name":"Contractor"},
          {"@type":"ListItem","position":3,"name":"Retail"},
          {"@type":"ListItem","position":4,"name":"Nonprofit"},
          {"@type":"ListItem","position":5,"name":"Professional Services"},
          {"@type":"ListItem","position":6,"name":"Accountant"}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
