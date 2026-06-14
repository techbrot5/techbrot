/* /quickbooks/consulting/ — t-mofu SERVICE page (mirrors the desktop.njk t-mofu
 * pattern). Source: old root HTML quickbooks/consulting/index.html (full body read)
 * — title/meta/canonical/6-FAQ/schema (WebPage + BreadcrumbList + Service + FAQPage).
 * Positioning is HONEST: ongoing Certified ProAdvisor advisory retainer (NOT support,
 * NOT training, NOT one-time projects). EQUITY: every baseline H2/H3 preserved
 * VERBATIM — credentials strip, tl;dr, quick-5, configuration-drift signal grid (6),
 * six-advisory-areas grid (6), pricing tiers (3), consulting-vs-others scope grid (3),
 * operator block, 6-item FAQ, related grid (4), final CTA. The footer "The monthly
 * brief." h2 is central chrome — dropped, not a page removal. Pricing $ figures
 * ($500–$1,500 / $1,500–$3,500) carried VERBATIM from the source FAQPage schema (they
 * are baseline equity in the FAQ answer text, so the visible FAQ must match) — these
 * are the source's own published ranges, not fabricated. CTA TIER (founder ruling 2 —
 * t-mofu): file-review PRIMARY; discovery-call secondary (intent=quickbooks, the only
 * existing intent); phone tertiary. The source's intent=qb-consulting is NOT carried
 * (intent doesn't exist); all routing uses intent=quickbooks or intent=file-review.
 * quick-5 q1 ("What is QuickBooks consulting?") overlaps no FAQ question verbatim
 * (FAQ q1 is "What does QuickBooks consulting actually include?"). Firm-level
 * authorship — no personal name in visible content. Components in-manifest:
 * byline-block, buyer-card, stack-8, faq accordion, meta-reviewed, ai-summary,
 * vs-table (consulting-vs-others, a genuine comparison). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // credentials strip — preserves "Certified QuickBooks ProAdvisor credentials" equity.
  credStats: [
    { value: "4", label: "QuickBooks certifications held — Online (Level 2), Desktop, Enterprise, Payroll" },
    { value: "Monthly", label: "advisory retainer — no hourly billing, scope reviewed quarterly" },
    { value: "0", label: "commission or affiliate revenue on QuickBooks subscriptions" },
  ],
  credentials: [
    "Consulting engagements are delivered by ProAdvisors holding active certifications across the full QuickBooks product line &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The depth matters: workflow optimization and configuration advisory require platform fluency across all products, not specialization in one. Verification available on request.",
    "We earn nothing from your QuickBooks subscription &mdash; no Intuit affiliate revenue, no commissions &mdash; so the configuration advice reflects what&rsquo;s right for your workflow, not what keeps you on a more expensive plan.",
    "One ProAdvisor stays embedded in your QuickBooks workflow &mdash; the retainer value compounds over time as the ProAdvisor builds context on your specific configuration and the business it runs.",
  ],
  // quick-5 — five-question AI summary. q1 distinct from FAQ q1 verbatim.
  aiSummary: [
    { q: "What is QuickBooks consulting?", a: "<strong>Ongoing Certified ProAdvisor advisory retainer.</strong> Not support tickets, not training, not one-time projects. A ProAdvisor embedded in your QuickBooks workflow to optimize configuration, troubleshoot integrations, build custom reports, and answer questions with expert judgment. <strong>Evolves as the business grows.</strong>" },
    { q: "What does it cover?", a: "<strong>Workflow optimization</strong>; <strong>configuration audits</strong> (drift, ad-hoc changes, accumulated inefficiencies); <strong>integration troubleshooting</strong> (Shopify, Stripe, Bill.com, Gusto, industry-specific); <strong>custom reporting</strong> (class reports, location P&amp;Ls, KPI dashboards); <strong>payroll configuration advisory</strong>; <strong>direct ProAdvisor access</strong> for QuickBooks questions." },
    { q: "Consulting vs support vs training?", a: "<strong>Support</strong>: Intuit answers &ldquo;how does this button work.&rdquo; <strong>Training</strong>: teaches you or your team to use QuickBooks. <strong>Consulting</strong>: expert judgment on whether your configuration actually serves the business &mdash; proactive, strategic, embedded. Different in kind, not degree." },
    { q: "Pricing?", a: "Monthly retainer. <strong>QuickBooks Online, simpler businesses</strong>: $500&ndash;$1,500/month. <strong>Enterprise or high integration complexity</strong>: $1,500&ndash;$3,500/month. No hourly billing. Initial configuration audit at engagement start. Minimum engagement period applies." },
    { q: "Who needs it?", a: "Growing businesses whose <strong>configuration hasn&rsquo;t kept pace</strong>; <strong>QuickBooks Enterprise</strong> users; businesses with <strong>significant integrations</strong>; businesses with an internal bookkeeper who needs <strong>expert configuration backup</strong>; businesses <strong>preparing for audit, sale, or fundraising</strong>." },
  ],
  // configuration-drift signal grid — stack-8 (NOT review-card). 6 signals verbatim.
  drift: [
    { name: "Reports stopped answering the right questions", body: "The P&amp;L you built at setup doesn&rsquo;t reflect how the business sells today. New products, new locations, new services &mdash; none of them mapped into reporting dimensions when added. The reports exist; they just don&rsquo;t answer what leadership asks anymore." },
    { name: "Ad-hoc accounts have accumulated", body: "&ldquo;Just add an account for this&rdquo; &mdash; repeated over years &mdash; produces a chart with hundreds of partially-used accounts, inconsistent categorization rules, and reports that are technically complete but operationally useless. The chart is fighting the bookkeeping." },
    { name: "Integrations are unreliable", body: "Shopify stopped syncing correctly after an update. Bill.com payments double-post occasionally. Gusto&rsquo;s journal entries land in the wrong accounts. Each integration is mostly working &mdash; but the &ldquo;mostly&rdquo; creates month-end cleanup that shouldn&rsquo;t exist." },
    { name: "New users changed things without realizing it", body: "A new bookkeeper added accounts, changed a rule, remapped some items. Individually each change seemed reasonable. Cumulatively they broke the consistency the system depended on. No one has a clear picture of the current state." },
    { name: "QuickBooks Enterprise is being used as QuickBooks Online", body: "Enterprise has advanced inventory, advanced pricing, serial/lot number tracking, custom fields, enhanced reporting. Most Enterprise subscribers use 20% of what they&rsquo;re paying for. The configuration hasn&rsquo;t been built to leverage the product." },
    { name: "A new CPA found problems", body: "The most common consulting engagement trigger: new CPA or CFO reviews the QuickBooks file and identifies structural problems &mdash; wrong equity treatment, inconsistent COGS methodology, payroll items posting to wrong accounts, bank reconciliation drift. The configuration needs expert repair and ongoing oversight." },
  ],
  // six advisory areas — stack-8 numbered grid. Verbatim headings + prose.
  covers: [
    { num: "01", name: "Workflow optimization", body: "Mapping how the business actually operates against how QuickBooks is configured &mdash; identifying where the software adds friction instead of reducing it, where manual steps exist that QuickBooks could automate, where the workflow is fighting the tool. <strong>The most common consulting deliverable</strong> for established businesses." },
    { num: "02", name: "Configuration audits", body: "Systematic review of the current QuickBooks configuration: chart of accounts, item list, payroll items, tax setup, bank feed rules, recurring transactions, user permissions, integration mapping. Identifies accumulated drift, ad-hoc changes that broke consistency, and configuration gaps against what the business needs. <strong>Typically the first work in a new consulting engagement.</strong>" },
    { num: "03", name: "Integration management", body: "QuickBooks integrations with connected apps: Shopify, Stripe, PayPal, Square, Bill.com, Gusto, HubSpot, Salesforce, industry-specific platforms. When syncs drift, duplicates appear, or journal entries land in wrong accounts, the consulting engagement is what resolves it &mdash; at the integration-architecture level, not as a one-time support ticket." },
    { num: "04", name: "Custom reporting", body: "Building and maintaining the reports leadership actually uses: class-based P&amp;Ls, location breakouts, job-cost reports, project profitability, custom KPI dashboards inside QuickBooks, memorized report sets for monthly reviews. <strong>Reports built once and maintained</strong> rather than recreated monthly." },
    { num: "05", name: "Payroll configuration advisory", body: "<em>Not payroll processing</em> &mdash; that&rsquo;s a separate <a href=\"/quickbooks/payroll/\">payroll engagement</a>. But ongoing advisory on payroll configuration: payroll item mapping, QuickBooks Payroll integration with the general ledger, payroll liability account maintenance, workers&rsquo; comp integration, payroll-CoA mapping drift. The configuration layer that makes payroll processing work correctly." },
    { num: "06", name: "Direct ProAdvisor access", body: "QuickBooks questions answered with expert judgment as they arise &mdash; not routed to Intuit support, not searched in community forums, not escalated internally. A Certified ProAdvisor who knows your specific configuration gives a specific answer. <strong>The retainer value that compounds over time as the ProAdvisor builds context on the business.</strong>" },
  ],
  // pricing tiers — stack-8 grid. $ figures carried verbatim (baseline FAQ equity).
  pricing: [
    { tier: "QuickBooks Online · Standard", price: "$500&ndash;$1,500", cadence: "Per month, monthly retainer", fit: "QuickBooks Online businesses with straightforward operations, 1&ndash;3 integrations, under ~25 employees, no significant multi-entity or multi-location complexity.", includes: [
      "Initial configuration audit",
      "Monthly workflow review and optimization",
      "Integration troubleshooting (up to 3 apps)",
      "Custom report build and maintenance",
      "Direct ProAdvisor access for QuickBooks questions",
      "Quarterly configuration health check",
    ] },
    { tier: "Most common · QBO advanced or Desktop", price: "$1,500&ndash;$3,500", cadence: "Per month, monthly retainer", fit: "QuickBooks Online Advanced, QuickBooks Desktop, or QuickBooks Enterprise businesses; 3+ integrations; multi-location or multi-entity; 25&ndash;100 employees; or businesses with significant configuration complexity.", includes: [
      "Everything in standard, plus:",
      "Multi-location and multi-entity configuration advisory",
      "Integration management across 3+ connected apps",
      "Advanced reporting (class, location, project P&amp;Ls)",
      "QuickBooks Desktop or Enterprise feature optimization",
      "Payroll configuration advisory",
      "Monthly configuration integrity review",
    ] },
    { tier: "Enterprise · High complexity", price: "Custom", cadence: "Monthly retainer, scoped per engagement", fit: "QuickBooks Enterprise with advanced inventory, advanced pricing, or job-costing; multi-entity architecture; 100+ employees; or businesses with deeply integrated operational systems requiring ProAdvisor oversight across multiple functions.", includes: [
      "Everything in advanced, plus:",
      "Advanced inventory configuration advisory",
      "Advanced pricing and job-costing optimization",
      "Custom field and template architecture",
      "Multi-entity consolidation reporting",
      "Deep integration architecture advisory",
      "Dedicated senior ProAdvisor assignment",
    ] },
  ],
  // consulting-vs-other-engagements — vs-table (a genuine comparison of engagement types).
  vsTable: [
    { cap: "You have a one-time error or problem &rarr; error reference", consult: "no", other: "For a one-time error or specific problem (H202, 6000-series, PS038), the <a href=\"/quickbooks/help/error-codes/\">error code reference</a> is a bounded diagnostic, not ongoing consulting." },
    { cap: "You need initial QuickBooks setup &rarr; setup engagement", consult: "no", other: "For initial QuickBooks setup or platform migration, <a href=\"/quickbooks/setup/\">QuickBooks setup</a> is a one-time fixed-fee project; setup comes first, consulting follows." },
    { cap: "You need payroll processing &rarr; payroll engagement", consult: "no", other: "For payroll processing (running pay runs, fixing payroll errors), <a href=\"/quickbooks/payroll/\">QuickBooks Payroll services</a> is the fit; consulting covers payroll <em>configuration advisory</em> only." },
    { cap: "Ongoing workflow optimization &amp; configuration advisory", consult: "yes", other: "This engagement" },
    { cap: "Integration architecture &amp; custom reporting, maintained over time", consult: "yes", other: "This engagement" },
    { cap: "Direct ProAdvisor access for questions as they arise", consult: "yes", other: "This engagement" },
  ],
  // buyer-card routing — t-mofu signature. file-review primary, intent=quickbooks/file-review only.
  routing: [
    { opener: "&ldquo;Our QuickBooks configuration has drifted.&rdquo;", body: "Reports stopped answering the right questions, ad-hoc accounts accumulated, a new CPA found problems &mdash; a configuration audit establishes baseline and an ongoing retainer keeps it sound.", cta: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review" },
    { opener: "&ldquo;We have a one-time error to fix.&rdquo;", body: "A specific QuickBooks error (H202, 6000-series, PS038, 3371, 15240, C-series) is a bounded diagnostic, not ongoing consulting &mdash; start with the error reference or a focused fix.", cta: "QuickBooks error codes", href: "/quickbooks/help/error-codes/" },
    { opener: "&ldquo;We need initial QuickBooks setup.&rdquo;", body: "Setting up QuickBooks for the first time or migrating to a new platform is a one-time fixed-fee project &mdash; setup comes first; consulting is the ongoing advisory that follows.", cta: "QuickBooks setup", href: "/quickbooks/setup/" },
  ],
  operatorSpec: [
    { value: "Full line", label: "QBO L2, Desktop, Enterprise, Payroll ProAdvisor certifications" },
    { value: "Monthly", label: "advisory retainer — minimum period, no hourly billing outside retainer" },
    { value: "Zero", label: "commission — not affiliated with Intuit Inc., no subscription revenue" },
    { value: "Named", label: "ProAdvisor + platform-level quality review" },
  ],
  // FAQ — 6 Q/A VERBATIM from source FAQPage schema. Order preserved.
  faq: [
    { q: "What does QuickBooks consulting actually include?", a: "QuickBooks consulting at TechBrot is an ongoing advisory retainer &mdash; not a one-time project and not support tickets. The engagement covers workflow optimization (identifying where QuickBooks is adding friction rather than reducing it), configuration audits (reviewing current setup for accumulated errors, drift, and inefficiencies), integration troubleshooting (when connected apps stop syncing correctly), custom reporting setup (building and maintaining the reports the business actually needs), payroll configuration support (not payroll processing, but setup and ongoing configuration guidance), and direct ProAdvisor access for QuickBooks questions as they arise. The engagement evolves as the business grows &mdash; new entities, new integrations, new reporting needs, new users." },
    { q: "What&rsquo;s the difference between QuickBooks consulting and QuickBooks support?", a: "Intuit&rsquo;s QuickBooks support (chat, phone, community forums) answers questions about how the software works &mdash; feature explanations, error messages, basic how-to questions. A Certified ProAdvisor consulting engagement is different in kind: it&rsquo;s an ongoing advisory relationship where someone with deep QuickBooks expertise is embedded in your workflow, proactively identifies configuration problems before they compound, optimizes how QuickBooks integrates with your operations, and gives recommendations based on how your specific business works rather than generic feature guidance. Support answers &ldquo;how does this button work&rdquo;; consulting answers &ldquo;is your QuickBooks configuration actually serving your business.&rdquo;" },
    { q: "How is QuickBooks consulting priced?", a: "TechBrot QuickBooks consulting is delivered as a monthly advisory retainer. Retainer pricing varies based on QuickBooks product (<a href=\"/quickbooks/online/\">Online</a> vs <a href=\"/quickbooks/desktop/\">Desktop</a> vs <a href=\"/quickbooks/enterprise/\">Enterprise</a>), business complexity, integration count, and the scope of ongoing advisory needed. Typical retainers start in the $500&ndash;$1,500 per month range for simpler QuickBooks Online businesses; businesses on QuickBooks Enterprise or with significant integration complexity typically scope $1,500&ndash;$3,500 per month. Retainers are billed monthly with a minimum engagement period; there is no hourly billing. An initial configuration audit is typically conducted at engagement start to establish baseline and identify priority optimization areas." },
    { q: "Is this the same as QuickBooks training?", a: "No &mdash; training and consulting are different. QuickBooks training teaches you or your team how to use the software: how to enter transactions, run reports, manage payroll runs, navigate the interface. Training is appropriate when the team needs to build QuickBooks proficiency. Consulting is appropriate when a Certified ProAdvisor&rsquo;s judgment is the value &mdash; not because you don&rsquo;t know how to use QuickBooks, but because the configuration, workflow design, integration architecture, and ongoing optimization decisions benefit from expert advisory rather than internal trial-and-error. Many consulting engagements include some training as a component, but the primary value is advisory judgment, not software instruction." },
    { q: "Who needs QuickBooks consulting?", a: "Businesses that typically benefit most from ongoing QuickBooks consulting: growing businesses whose QuickBooks configuration hasn&rsquo;t kept pace with the business (new products, new locations, new entities added but configuration not updated); businesses using <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> where the configuration complexity is meaningfully higher than Online or Desktop; businesses with significant app integrations (Shopify, Stripe, Bill.com, Gusto, industry-specific software) where sync issues arise and integration architecture matters; businesses whose internal bookkeeper or controller manages day-to-day QuickBooks but needs expert backup for configuration decisions; and businesses preparing for audit, sale, or fundraising where QuickBooks data quality and configuration soundness matter for due diligence." },
    { q: "What&rsquo;s the difference between QuickBooks consulting and monthly bookkeeping?", a: "Monthly bookkeeping is transactional work: categorizing transactions, reconciling accounts, producing monthly financial statements. The work is execution-focused and produces the accounting record. QuickBooks consulting is advisory work: optimizing the configuration that bookkeeping runs on, troubleshooting integrations, designing reports, and evolving the setup as the business changes. The two are complementary: consulting without bookkeeping is configuration advice on a file someone else maintains; bookkeeping without consulting means the configuration underlying the work may degrade over time without expert oversight. Some businesses run both through TechBrot as a combined engagement; others run consulting alongside an internal bookkeeper or a separate bookkeeping service." },
  ],
  // related — "Other QuickBooks engagements" verbatim headings.
  related: [
    { title: "QuickBooks Setup", href: "/quickbooks/setup/", body: "The one-time fixed-fee setup engagement that consulting typically follows. If you haven&rsquo;t set up QuickBooks correctly yet, start here." },
    { title: "QuickBooks Cleanup", href: "/quickbooks/cleanup/", body: "If the existing QuickBooks file has significant accumulated errors before consulting begins, cleanup typically precedes the consulting retainer." },
    { title: "QuickBooks Payroll", href: "/quickbooks/payroll/", body: "Payroll processing, setup, multi-state, and year-end &mdash; the operational payroll engagement that sits alongside or within the consulting retainer." },
    { title: "Error codes", href: "/quickbooks/help/error-codes/", body: "For one-time QuickBooks errors, the reference library covers H-series, 6000-series, PS038, 3371, 15240, unrecoverable, and C-series." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/consulting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage"],"@id":url+"#webpage","url":url,"name":"QuickBooks Consulting: Certified ProAdvisor Advisory","description":"Ongoing QuickBooks consulting by Certified ProAdvisors — workflow optimization, configuration audits, integration troubleshooting, custom reporting, and ongoing advisory as the business grows. Monthly retainer engagement with no hourly billing. Delivered by independent Certified ProAdvisors with no commission on QuickBooks subscriptions.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbcon-ai-summary","#qbcon-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Consulting","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Consulting","serviceType":"Ongoing QuickBooks advisory and workflow optimization","description":"Ongoing Certified ProAdvisor consulting for U.S. businesses running QuickBooks Online, Desktop, or Enterprise. Covers workflow optimization, configuration audits, integration troubleshooting, custom reporting setup, configuration evolution as the business grows, and direct ProAdvisor access for QuickBooks questions as they arise. Delivered as a monthly advisory retainer. Does not include income-tax filing, IRS representation, audit, or assurance. Coordinates with the client's CPA/EA where tax matters arise.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. businesses seeking ongoing QuickBooks advisory and optimization"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
