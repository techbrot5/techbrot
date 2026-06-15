/* /accounting/industries/faq/ — t-guide CollectionPage + FAQPage elevation
 * (MIGRATION-PROTOCOL, content-to-goal / visual-floor). FROZEN-CONTRACT source:
 * jobs/2d3a1fa3/tmp/contract-acct-ind-faq.txt is the ONLY authority for the 25
 * headings + 7 FAQ. Old accounting/industries/faq/index.html read for BODY PROSE
 * only.
 *
 * Pattern carried VERBATIM from the proven t-guide FAQ (src/partners/faq.njk +
 * .11tydata.js and src/quickbooks/faq.njk): guide-grid (sticky toc +
 * article.prose) · byline-block · pull-quote · meta-reviewed. The 7 cluster H2s
 * become article <h2> sections, each carrying REAL industry-accounting-FAQ prose
 * (why industry matters, choosing your fit, cross-industry patterns, the 17
 * industries we cover, switching/new ventures, technology by industry, engagement
 * & next steps) that routes to the industry pages and holds the books/CPA boundary.
 * The 7 contract FAQ render as a faq__list AND regenerate the FAQPage from the SAME
 * array (schema == rendered, verbatim/flat, append-only).
 *
 * Vocabulary + intents matched to the /accounting/industries/ hub (parent) and the
 * proven cobalt FAQ. CTA lexicon: "Book the discovery call" -> /contact/?intent=
 * accounting; "Get the free file review" -> /quickbooks/file-review/?intent=
 * file-review; "Speak to a ProAdvisor" (tel). HONESTY (R5/R9): independent firm,
 * not affiliated with Intuit Inc.; no fabricated stats/outcomes/reviews; David
 * Westgate only in reviewedBy schema @id; no personal name in visible content. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&middot;/g, "·")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

// The 7 cluster H2 sections — heading VERBATIM from the contract, prose carried
// and elevated from the old HTML kb-cluster bodies (BODY PROSE only) into real
// industry-accounting answers. Each section's first item anchors the popular strip.
const clusters = [
  {
    id: "cluster-why",
    heading: "Why industry matters.",
    lede: "What industry-specific accounting actually means, where it shows up in the books, and when specialization is essential vs when a competent generalist will do.",
    items: [
      {
        anchor: "indfaq-why",
        q: "Why does industry-specific accounting matter?",
        a: "<p>Industries have distinctive accounting patterns that generic bookkeeping completely misses. Revenue recognition varies wildly: <a href=\"/accounting/industries/saas/\">SaaS</a> deferred revenue under ASC 606, <a href=\"/accounting/industries/construction/\">construction</a> percentage-of-completion, agencies gross vs net (principal vs agent), fitness memberships as deferred revenue, nonprofits restricted vs unrestricted under ASC 958. Operational economics differ too: restaurants need prime cost, manufacturers need BOM costing, <a href=\"/accounting/industries/home-services/\">home services</a> need revenue per truck per day, <a href=\"/accounting/industries/legal/\">law firms</a> need IOLTA trust accounting.</p><p>Generic accountants handle the universal layer (bookkeeping, financial statements) but miss the industry layer (industry-specific KPIs, industry-specific chart of accounts, industry-specific GAAP requirements). The result is books that pass a generic audit but don&rsquo;t produce the operational insights the business actually needs. That gap &mdash; between books that are technically correct and books that tell you the one number running your business &mdash; is exactly what industry specialization closes.</p>",
      },
      {
        anchor: "indfaq-why-shows-up",
        q: "Where does it actually show up in the books?",
        a: "<p>In five concrete places. <strong>(1) Chart of accounts design</strong> &mdash; an industry-specific CoA structure that surfaces the right operational categories rather than a generic SMB template. <strong>(2) Integration setup</strong> &mdash; connecting QuickBooks to the operational source-of-truth platform (ServiceTitan for HVAC, MindBody for fitness, Toast or Square for restaurants, Shopify and Amazon for <a href=\"/accounting/industries/ecommerce/\">ecommerce</a>). <strong>(3) Revenue recognition</strong> &mdash; ASC 606 implementation tailored to the industry&rsquo;s revenue pattern.</p><p><strong>(4) KPI reporting</strong> &mdash; the industry-specific metrics (revenue per truck per day, utilization, prime cost, MRR) calculated and reported every month. <strong>(5) Advisory framing</strong> &mdash; the engagement anticipates the industry&rsquo;s specific challenges rather than treating it generically. Generic bookkeepers handle steps 1 and 2 superficially and skip 3, 4, and 5 entirely. The difference is visible in the monthly package: industry-specialist books surface what&rsquo;s actually happening in the business; generic books surface accounting categories.</p>",
      },
      {
        anchor: "indfaq-why-essential",
        q: "When is industry specialization essential vs when is generic accounting fine?",
        a: "<p>Specialization is essential when the business carries distinctive revenue recognition (SaaS, construction, fitness, nonprofit, franchise), distinctive operational economics (restaurant prime cost, agency utilization, home-services RPTD), distinctive GAAP (nonprofit ASC 958, construction percentage-of-completion, leases under ASC 842), distinctive regulation (legal IOLTA, healthcare HIPAA-aware bookkeeping, multi-state franchise FDD reporting), or operational platforms (FSM, POS, PMS, AMS) that drive the financial data.</p><p>It matters less when the business is small ($300K&ndash;$1M revenue) with simple service operations, single-state, no inventory, no deferred revenue, a generic QuickBooks setup, and minimal complexity. At that scale a competent generalist handles the work well, and we&rsquo;ll tell you so. As businesses grow into complexity, the industry layer compounds &mdash; which is the honest reason to ask the question before you commit to a configuration you&rsquo;ll outgrow.</p>",
      },
    ],
  },
  {
    id: "cluster-fit",
    heading: "Choosing the right industry fit.",
    lede: "Multi-industry businesses, sub-vertical positioning, holding-company structures, and when industry classification matters less than it seems.",
    items: [
      {
        anchor: "indfaq-fit",
        q: "What if my business doesn&rsquo;t fit cleanly into one industry?",
        a: "<p>Multi-industry businesses are common &mdash; agencies with a productized SaaS arm, retailers with an ecommerce channel, restaurants with catering plus retail products, construction firms with a property-management line. We handle these through Class or Department tracking in QuickBooks, with a chart-of-accounts structure that lets each business line report separately while still rolling up to a consolidated view.</p><p>Pricing reflects complexity but generally scales sub-linearly &mdash; a business spanning two industries doesn&rsquo;t pay double a single-industry engagement; it pays a complexity premium, typically in the range of 30&ndash;50% above the dominant-industry baseline. The discovery call identifies the dominant model (usually the line driving 60%+ of revenue or complexity), maps the secondary lines, and scopes the engagement to handle both without forcing the business into a category that doesn&rsquo;t fit.</p>",
      },
      {
        anchor: "indfaq-fit-subvertical",
        q: "How do I know which sub-vertical I belong to?",
        a: "<p>Most industries split into sub-verticals that change the books materially. <a href=\"/accounting/industries/home-services/\">Home services</a> covers HVAC, plumbing, and electrical &mdash; each with different service-agreement structures. <a href=\"/accounting/industries/legal/\">Law firms</a> split between hourly, contingency, and flat-fee work, which changes how WIP and trust accounting are handled. <a href=\"/accounting/industries/ecommerce/\">Ecommerce</a> splits between marketplace-only, direct-to-consumer, and wholesale, which changes nexus and channel reconciliation.</p><p>You don&rsquo;t need to self-diagnose the sub-vertical precisely &mdash; that&rsquo;s what the discovery call is for. What helps is knowing how you actually earn: do you bill by the hour, by the project, by subscription, by transaction, by membership? That answer points to the revenue-recognition pattern, and the pattern points to the right configuration far more reliably than the industry label alone.</p>",
      },
      {
        anchor: "indfaq-fit-overkill",
        q: "When does industry classification matter less than it seems?",
        a: "<p>For a small, single-state service business with straightforward cash-basis-style operations &mdash; one revenue stream, no inventory, no deferred revenue, no trust funds &mdash; the industry label is mostly cosmetic. The books look broadly the same whether you call it &ldquo;consulting&rdquo; or &ldquo;professional services,&rdquo; and a clean generic setup serves you well.</p><p>Classification starts to matter the moment one of the complexity triggers appears: inventory, multi-state sales-tax nexus, deferred revenue, job costing, trust accounting, or a GAAP requirement tied to your sector. Until then, the honest answer is that paying a premium for industry specialization you don&rsquo;t yet need is wasted money. We&rsquo;d rather set you up correctly for where you are than oversell a configuration for where you might be.</p>",
      },
    ],
  },
  {
    id: "cluster-patterns",
    heading: "Cross-industry patterns.",
    lede: "The accounting patterns that recur across multiple industries &mdash; deferred revenue, project accounting, inventory, multi-state operations, integration discipline &mdash; and what they actually require.",
    items: [
      {
        anchor: "indfaq-patterns-deferred",
        q: "Which patterns recur across multiple industries?",
        a: "<p>A handful of patterns show up again and again, and recognizing yours is often more useful than fixing on an industry name. <strong>Deferred revenue</strong> appears in SaaS subscriptions, fitness memberships, service agreements in home services, and prepaid retainers &mdash; all governed by ASC 606. <strong>Project accounting</strong> (job costing, WIP, percentage-of-completion) recurs in construction, agencies, and any project-margin business. <strong>Inventory and COGS</strong> recur across ecommerce, retail, restaurants, and manufacturing.</p><p><strong>Multi-state operations</strong> create sales-tax nexus and multi-state payroll obligations in any business that sells or hires across state lines. <strong>Integration discipline</strong> &mdash; connecting QuickBooks to the operational platform that holds the real transaction data &mdash; recurs everywhere the source of truth lives outside the general ledger. Once you know which patterns you carry, the configuration follows; the industry page just documents how that pattern typically presents in your sector.</p>",
      },
      {
        anchor: "indfaq-patterns-multistate",
        q: "How does multi-state operation change the books?",
        a: "<p>Selling or hiring across state lines introduces two obligations that single-state businesses never see. <strong>Sales-tax nexus</strong>: once you cross a state&rsquo;s economic-nexus threshold (revenue or transaction count), you may be required to register, collect, and remit sales tax there &mdash; common for ecommerce and SaaS, and the rules differ state by state. <strong>Multi-state payroll</strong>: employees working in multiple states create withholding and unemployment-insurance obligations in each, which the payroll configuration has to track.</p><p>Both are configuration problems, not afterthoughts &mdash; getting them right means setting up the right tax agencies, the right items, and the right reporting from the start. We build the books to surface nexus exposure and keep multi-state payroll clean. Filing and registration that cross into tax-return territory we coordinate with your CPA or EA; the bookkeeping side &mdash; tracking, accruing, and reporting &mdash; stays with us.</p>",
      },
    ],
  },
  {
    id: "cluster-coverage",
    heading: "The 17 industries we cover.",
    lede: "The full coverage map, what&rsquo;s distinctive about each industry cluster, what fits where, and explicitly what we don&rsquo;t serve.",
    items: [
      {
        anchor: "indfaq-coverage",
        q: "Which industries does TechBrot serve?",
        a: "<p>TechBrot serves 17 industries across U.S. small and mid-market businesses, with a dedicated industry page and specialist depth in each: agencies (marketing, advertising, PR), <a href=\"/accounting/industries/construction/\">construction</a>, dental practices, <a href=\"/accounting/industries/ecommerce/\">ecommerce</a>, fitness studios, franchise operations, healthcare practices, <a href=\"/accounting/industries/home-services/\">home services</a> (HVAC, plumbing, electrical), <a href=\"/accounting/industries/legal/\">law firms</a>, manufacturing, nonprofits, professional services, real estate, restaurants, retail, <a href=\"/accounting/industries/saas/\">SaaS</a>, and trucking.</p><p>Each industry has its own service page with industry-specific challenges, sub-vertical breakdowns, integration platforms, KPI frameworks, and FAQ content. Industry experience matters because each one carries specific QuickBooks configurations, chart-of-accounts structures, and operational workflows that don&rsquo;t translate cleanly across sectors. The <a href=\"/accounting/industries/\">Industries hub</a> is the front door to all 17.</p>",
      },
      {
        anchor: "indfaq-coverage-not",
        q: "What industries do you not serve well?",
        a: "<p>We&rsquo;re explicit about coverage limits. Industries we don&rsquo;t serve well: cannabis (separate legal scope, banking restrictions, state-by-state regulatory complexity we don&rsquo;t specialize in), oil &amp; gas operations (specialty depletion accounting, working-interest economics), insurance-carrier accounting (heavily regulated, separate from the agency side, which we do cover), financial services with a regulatory overlay (broker-dealers, registered investment advisors, mortgage originators), agriculture and farming (commodity hedging, crop insurance, USDA programs), and businesses operating internationally with material foreign-currency or transfer-pricing complexity.</p><p>When industry fit isn&rsquo;t a match, we say so on the discovery call and recommend specialists better positioned to serve. Honest scope is the moat &mdash; we&rsquo;d rather decline an engagement than deliver mediocre work outside our depth.</p>",
      },
    ],
  },
  {
    id: "cluster-switching",
    heading: "Switching industries &amp; new ventures.",
    lede: "Business pivots, parallel ventures, holding-company structures, and what to do when industry classification changes over time.",
    items: [
      {
        anchor: "indfaq-switching",
        q: "What happens to the books when I pivot or start a parallel venture?",
        a: "<p>A pivot or a new venture changes the configuration, not the relationship. If the business model itself shifts &mdash; an agency productizing into SaaS, a retailer adding an ecommerce channel &mdash; the chart of accounts, revenue recognition, and KPI set are re-scoped to match the new model, and prior periods stay intact so the history reads cleanly. We don&rsquo;t rebuild from scratch; we extend the structure already in place.</p><p>A genuinely separate venture is usually a separate QuickBooks file (or a separate entity if you&rsquo;ve incorporated it that way), kept distinct for clean books and a clean eventual sale or financing event. The discovery conversation maps whether the new line belongs inside the existing file as a Class or Department, or as its own entity &mdash; a decision that affects taxes, so we make it alongside your CPA rather than around them.</p>",
      },
      {
        anchor: "indfaq-switching-holdco",
        q: "How do you handle holding-company and multi-entity structures?",
        a: "<p>Multi-entity structures &mdash; a holding company over several operating entities, or a group of related LLCs &mdash; are handled with a separate QuickBooks file per entity and a consolidation approach that rolls them into a group view. Each operating entity keeps books appropriate to its own industry; the holding layer consolidates for owner-level and lender-level reporting.</p><p>The work that recurs across the group is intercompany discipline: clean intercompany accounts, consistent chart-of-accounts mapping so consolidation actually nets, and clear ownership of which entity bears which cost. We scope the structure on the discovery call, build each entity correctly for its own industry, and keep the consolidation reliable. Entity-level tax filing and the choice of structure are coordinated with your CPA &mdash; we deliver the books each entity and the group run on.</p>",
      },
    ],
  },
  {
    id: "cluster-tech",
    heading: "Technology by industry.",
    lede: "Which QuickBooks plan fits which industry, the industry-specific integration platforms we work with, and how the technology stack actually comes together.",
    items: [
      {
        anchor: "indfaq-tech",
        q: "Which QuickBooks plan and integrations fit my industry?",
        a: "<p>The plan follows the complexity, not the industry label. Most small and mid-market businesses run on <a href=\"/quickbooks/online/\">QuickBooks Online</a>; inventory-heavy manufacturers, large construction firms, and high-transaction operations often need <a href=\"/quickbooks/enterprise/\">Enterprise</a> for advanced inventory, class tracking, and user limits. We size the plan during scoping rather than defaulting to the most expensive tier &mdash; over-buying QuickBooks is as common a mistake as under-buying it.</p><p>The integration is where the industry shows up: field-service platforms (ServiceTitan, Housecall Pro) for home services, MindBody for fitness, Toast or Square for restaurants, Shopify and Amazon for ecommerce, AMS platforms for nonprofits. The operational platform holds the real transaction data; QuickBooks is the system of record it feeds. Getting that connection right &mdash; clean mapping, no double-counting, reconcilable totals &mdash; is most of what industry-specific setup actually is. Unsure where your file stands today? A <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> tells you.</p>",
      },
      {
        anchor: "indfaq-tech-platforms",
        q: "Do you work in our existing operational platform, or do we have to switch?",
        a: "<p>We work in the platform you already run. The goal is to connect your existing field-service, POS, ecommerce, or membership system to QuickBooks cleanly &mdash; not to make you re-platform. In most engagements the operational system stays exactly as it is, and the accounting work is building and maintaining the bridge so the numbers reconcile.</p><p>We&rsquo;ll flag a platform change only when the existing tool genuinely can&rsquo;t produce reconcilable data &mdash; and even then it&rsquo;s a recommendation with the trade-offs laid out, never a requirement to start. The integration discipline is the same across platforms: map the data once, reconcile totals every month, and keep QuickBooks as the auditable system of record. If your industry runs on a platform we haven&rsquo;t named, the discovery call confirms whether it integrates the way we need it to.</p>",
      },
    ],
  },
  {
    id: "cluster-engagement",
    heading: "Engagement &amp; next steps.",
    lede: "How industry-aware engagements actually start, what the discovery process identifies, and the path from first call to ongoing work.",
    items: [
      {
        anchor: "indfaq-engagement",
        q: "How do I get started?",
        a: "<p>Book a 30-minute <a href=\"/contact/?intent=accounting\">discovery call</a>. The call identifies your dominant industry fit (or multi-industry structure if applicable), assesses where your books currently stand (cleanup needed? catch-up? generic books to convert to industry-specialist?), maps the right engagement type (monthly bookkeeping with an industry overlay, a cleanup project, an advisory engagement), and answers your questions.</p><p>Within 3 business days of the call we deliver a written scope with fixed-fee pricing &mdash; no surprises, no hourly billing. If your industry isn&rsquo;t on our coverage list, we&rsquo;ll say so and route you to specialists who fit better. The discovery call is complimentary; the scope is non-binding; engagement starts only when you commit in writing.</p>",
      },
      {
        anchor: "indfaq-engagement-boundary",
        q: "Where do the books end and the CPA begin?",
        a: "<p>We deliver the books; your CPA or EA files the taxes. TechBrot performs QuickBooks and bookkeeping work &mdash; setup, cleanup, monthly close, reconciliation, industry-specific configuration, KPI reporting, and advisory &mdash; and produces the financial statements and supporting detail your tax preparer files from. We don&rsquo;t do income-tax filing, IRS representation, audit, or assurance.</p><p>That boundary is deliberate and it works in your favor: clean, industry-correct books make your CPA&rsquo;s job faster and your return more accurate, and we coordinate directly with them on anything that touches the line &mdash; entity structure, multi-state nexus, depreciation methods. If you don&rsquo;t yet have a CPA, we can point you toward one. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc.</p>",
      },
    ],
  },
];

// The 6 popular-strip anchors (contract H2 "Six questions answered most often."),
// pointing into the cluster sections above. Verbatim questions.
const popular = [
  { qid: "Q.01", cluster: "Why", anchor: "indfaq-why", q: "Why does industry-specific accounting matter?" },
  { qid: "Q.03", cluster: "Why", anchor: "indfaq-why-essential", q: "When is industry specialization essential vs when is generic accounting fine?" },
  { qid: "Q.04", cluster: "Fit", anchor: "indfaq-fit", q: "What if my business doesn&rsquo;t fit cleanly into one industry?" },
  { qid: "Q.07", cluster: "Coverage", anchor: "indfaq-coverage", q: "Which industries does TechBrot serve?" },
  { qid: "Q.08", cluster: "Coverage", anchor: "indfaq-coverage-not", q: "What industries do you not serve well?" },
  { qid: "Q.13", cluster: "Engagement", anchor: "indfaq-engagement", q: "How do I get started?" },
];

// The 7 contract FAQ — questions VERBATIM, answers preserved VERBATIM from the
// contract (flat prose, no markup), append-only. Rendered as a faq__list AND
// regenerated into the FAQPage schema from this SAME array (schema == rendered).
const faq = [
  {
    q: "Why does industry-specific accounting matter?",
    a: "Industries have distinctive accounting patterns that generic bookkeeping completely misses. Revenue recognition varies wildly: SaaS deferred revenue under ASC 606, construction percentage-of-completion, agencies gross vs net (principal vs agent), fitness memberships as deferred revenue, nonprofits restricted vs unrestricted under ASC 958. Operational economics differ: restaurants need prime cost, manufacturers need BOM costing, home services need revenue per truck per day, law firms need IOLTA trust accounting. Generic accountants handle the universal layer (bookkeeping, financial statements) but miss the industry layer (industry-specific KPIs, industry-specific CoA, industry-specific GAAP requirements). The result: books that pass a generic audit but don't produce the operational insights the business actually needs. Industry specialization separates competent operators from generalists.",
  },
  {
    q: "When is industry specialization essential vs when is generic accounting fine?",
    a: "Industry specialization is essential when: the industry has distinctive revenue recognition (SaaS, construction, fitness, nonprofit, franchise), distinctive operational economics (restaurant prime cost, agency utilization, home services RPTD, trucking IFTA), distinctive GAAP requirements (nonprofit ASC 958, construction percentage-of-completion, leases under ASC 842), distinctive regulatory requirements (legal IOLTA, healthcare HIPAA-aware bookkeeping, multi-state franchise FDD reporting), or distinctive operational platforms (FSM, POS, PMS, AMS systems that drive the financial data). Industry specialization is less critical when the business is small ($300K-$1M revenue) with simple service operations, single-state, no inventory, no deferred revenue, generic SMB QuickBooks setup, and minimal complexity. At that scale, a competent generalist bookkeeper handles the work well. As businesses grow into complexity, the industry layer compounds in importance.",
  },
  {
    q: "How does industry-specific accounting actually show up in the engagement?",
    a: "Industry specialization shows up in five concrete places. (1) Chart of accounts design — industry-specific CoA structure that surfaces the right operational categories. (2) Integration setup — connecting QuickBooks to the operational source-of-truth platforms (ServiceTitan for HVAC, MindBody for fitness, Toast or Square for restaurants, Shopify and Amazon for ecommerce). (3) Revenue recognition methodology — ASC 606 implementation tailored to the industry's revenue patterns. (4) KPI dashboards — industry-specific metrics (RPTD, utilization, prime cost, MRR, etc.) calculated and reported monthly. (5) FAQ depth in proposals and advisory — the engagement structure anticipates the industry's specific challenges rather than treating it generically. Generic bookkeepers handle steps 1 and 2 superficially and skip 3, 4, and 5 entirely. The difference is visible in monthly reporting: industry-specialist books surface what's actually happening in the business; generic books surface accounting categories.",
  },
  {
    q: "What if my business doesn't fit cleanly into one industry?",
    a: "Multi-industry businesses are common — agencies with productized SaaS arms, retailers with ecommerce channels, restaurants with catering plus retail products, construction firms with property management. We handle these through Class or Department tracking in QuickBooks, with a chart-of-accounts structure that lets each business line report separately while still rolling up to a consolidated view. Pricing reflects complexity but generally scales sub-linearly — a business spanning two industries doesn't pay double a single-industry engagement; it pays a complexity premium roughly 30-50% above the dominant-industry baseline. The discovery call identifies the dominant model (typically the one driving 60%+ of revenue or complexity), maps the secondary lines, and scopes the engagement to handle both without forcing the business into a category that doesn't fit.",
  },
  {
    q: "Which industries does TechBrot serve?",
    a: "TechBrot serves 17 industries across U.S. small and mid-market businesses, with dedicated industry pages and specialist depth in each: agencies (marketing, advertising, PR), construction, dental practices, ecommerce, fitness studios, franchise operations, healthcare practices, home services (HVAC, plumbing, electrical), law firms, manufacturing, nonprofits, professional services, real estate, restaurants, retail, SaaS, and trucking. Each industry has its own service page with industry-specific challenges, sub-vertical breakdowns, integration platforms, KPI frameworks, and FAQ content. Industry experience matters because each industry has specific QuickBooks configurations, chart-of-accounts structures, and operational workflows that don't translate cleanly across sectors.",
  },
  {
    q: "What industries do you not serve well?",
    a: "We're explicit about coverage limits. Industries we don't serve well: cannabis (separate legal scope, banking restrictions, state-by-state regulatory complexity we don't specialize in), oil & gas operations (specialty depletion accounting, working-interest economics), insurance carrier accounting (heavily regulated, separate from agency-side which we do cover), financial services with regulatory overlay (broker-dealers, registered investment advisors, mortgage originators), agriculture and farming operations (commodity hedging, crop insurance, USDA programs), and businesses operating internationally with material foreign-currency or transfer-pricing complexity. When industry fit isn't a match, we say so on the discovery call and recommend specialists better positioned to serve. Honest scope is the moat — we'd rather decline an engagement than deliver mediocre work outside our depth.",
  },
  {
    q: "How do I get started?",
    a: "Book a 30-minute discovery call. The call identifies your dominant industry fit (or multi-industry structure if applicable), assesses where your books currently stand (cleanup needed? catch-up? generic books to convert to industry-specialist?), maps the right engagement type (monthly bookkeeping with industry overlay, cleanup project, advisory engagement), and answers your questions. Within 3 business days of the call, we deliver a written scope with fixed-fee pricing — no surprises, no hourly billing. If your industry isn't on our coverage list, we'll say so and route to specialists who fit better. The discovery call is complimentary; the scope is non-binding; engagement starts only when you commit in writing.",
  },
];

// "Explore the 17 industries we cover." — the 8 contract H3 cards (verbatim H3 text),
// carried from the old HTML kb-related grid.
const related = [
  { cluster: "Industries", title: "Industries Hub", href: "/accounting/industries/", body: "Navigation hub for all 17 industry pages &mdash; agency, construction, dental, ecommerce, fitness, franchise, healthcare, home services, legal, manufacturing, nonprofit, professional services, real estate, restaurant, retail, SaaS, trucking." },
  { cluster: "Project-based", title: "Agency Accounting", href: "/accounting/industries/agency/", body: "Marketing, advertising, PR. Utilization, AGI per FTE, project margin, gross vs net revenue under ASC 606." },
  { cluster: "Project-based", title: "Construction Accounting", href: "/accounting/industries/construction/", body: "WIP, percentage-of-completion, job costing, retention, lien waivers, multi-state payroll, certified payroll." },
  { cluster: "Subscription", title: "SaaS Accounting", href: "/accounting/industries/saas/", body: "ASC 606 deferred revenue, MRR/ARR, CAC/LTV, gross retention, multi-state SaaS taxability, R&amp;D capitalization." },
  { cluster: "Inventory", title: "Ecommerce Accounting", href: "/accounting/industries/ecommerce/", body: "Shopify, Amazon, Stripe. Multi-channel reconciliation, COGS, inventory, sales tax nexus across states." },
  { cluster: "Dispatched", title: "Home Services Accounting", href: "/accounting/industries/home-services/", body: "HVAC, plumbing, electrical. Revenue per truck per day, service agreements as deferred revenue, FSM platform integration." },
  { cluster: "Regulated", title: "Law Firm Accounting", href: "/accounting/industries/legal/", body: "IOLTA trust accounting, three-way reconciliation, matter-level profitability, WIP for hourly and contingency work." },
  { cluster: "FAQ", title: "Accounting FAQ", href: "/accounting/faq/", body: "The broader accounting FAQ &mdash; fundamentals, bookkeeping, payroll, advisory, engagement model. 42 questions across 7 clusters." },
];

module.exports = {
  popular: popular,
  clusters: clusters,
  faq: faq,
  related: related,
  eleventyComputed: {
    pageGraph(data) {
      const url = "https://techbrot.com/accounting/industries/faq/";
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["CollectionPage", "WebPage"],
            "@id": url + "#webpage",
            url: url,
            name: data.title,
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "U.S. small and mid-market businesses seeking industry-specific accounting and QuickBooks bookkeeping",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#acct-ind-faq-in-brief-text"],
            },
            reviewedBy: { "@id": "https://techbrot.com/#david-westgate" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": url + "#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Accounting", item: "https://techbrot.com/accounting/" },
              { "@type": "ListItem", position: 3, name: "Industries", item: "https://techbrot.com/accounting/industries/" },
              { "@type": "ListItem", position: 4, name: "FAQ", item: url },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": url + "#faq",
            mainEntity: data.faq.map(function (item) {
              return {
                "@type": "Question",
                name: stripTags(item.q),
                acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
              };
            }),
          },
        ],
      };
    },
  },
};
