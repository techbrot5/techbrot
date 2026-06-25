/* /find-an-accountant/delaware/industries/incorporation-holding-companies/ — t-location
 * INDUSTRY child. Mirrors NY industries/construction.11tydata.js: JSON front-matter in the
 * .njk; this file supplies content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service, FAQPage). FAQPage mainEntity built from the same `faq` array the
 * visible faq__list renders — single source of truth.
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md ONLY. Franchise tax: LLC/LP/GP flat $300
 * (due June 1, no annual report); corporations $175 min (authorized shares) / $400 min (assumed
 * par value), max $200,000 ($250,000 large corporate filer), due March 1 with annual report.
 *
 * HONESTY (R5): TechBrot is NOT a registered agent and does NOT file the DE franchise tax or
 * annual report — it tracks and reserves for them in the books, confirms the lower corporate
 * method, and coordinates with the client's CPA and registered agent, who file. No invented
 * reviews/stats/clients. No founder name in visible content; David Westgate only as reviewedBy
 * #david-westgate. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Delaware holding company accounting, plainly.",
  summary: [
    "A holding company is a parent entity that owns other entities or assets &mdash; and Delaware is where most of them are formed, thanks to the <strong>DGCL</strong> and the <strong>Court of Chancery</strong>. <strong>66.7% of the Fortune 500</strong> and more than <strong>2.1 million legal entities</strong> are registered here, the vast majority owned and operated from out of state. The accounting consequence is specific: each entity needs <strong>its own clean set of books</strong>, intercompany transactions (loans, management fees, expense allocations) have to net out cleanly with matched <strong>due-to/due-from</strong> accounts, and consolidated reporting has to roll the entities up without double-counting.",
    "Every Delaware entity also owes an annual <strong>franchise tax</strong> for the privilege of existing here &mdash; a flat <strong>$300 for LLCs, LPs, and GPs (due June 1, no annual report)</strong>, and <strong>$175 to $200,000 for corporations</strong> by the authorized-shares or assumed-par-value method (due March 1, with an annual report; the entity picks the lower method). Late filing carries a $200 penalty plus 1.5% monthly interest. That liability has to be <strong>reserved for in QuickBooks</strong> so it is never a surprise. Where an entity has real in-state activity, it may also owe the <strong>gross receipts tax</strong> on its Delaware receipts.",
    "Here is the honest line: <strong>TechBrot is not a registered agent, and we do not file the franchise tax or annual report</strong> &mdash; your registered agent or CPA files those. What we do is keep the real books behind the registered-agent address: separate ledgers per entity in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, disciplined intercompany structure, the franchise-tax reserve tracked and the lower corporate method confirmed, and CPA-ready statements per entity &mdash; coordinating with your home-state CPA on multi-state nexus and filings. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  secAiH: "Delaware holding company accounting, in five questions.",
  aiSummary: [
    { q: "Why is Delaware holding-company accounting different?", a: "It runs on <strong>multiple entities, not one</strong> &mdash; each needs its own books, with intercompany loans and allocations reconciled cleanly and a <strong>franchise-tax reserve</strong> per entity. Most Delaware entities are owned from out of state, so multi-state nexus and CPA coordination are routine." },
    { q: "Are you a registered agent?", a: "No. <strong>TechBrot is a bookkeeping and Certified QuickBooks ProAdvisor firm, not a registered agent</strong>, and we don&rsquo;t file the franchise tax or annual report. We keep the real books behind the registered-agent address and coordinate with your agent and CPA, who file." },
    { q: "Do you handle the Delaware franchise tax?", a: "We <strong>track and reserve for it in QuickBooks and confirm the lower corporate method</strong> (authorized-shares vs. assumed-par-value) &mdash; flat $300 for LLCs/LPs by June 1, $175&ndash;$200,000 for corporations by March 1. Your registered agent or CPA files it; we make sure the books support the filing and it&rsquo;s never a surprise." },
    { q: "Can you do the books for a Delaware company run from another state?", a: "Yes &mdash; it&rsquo;s one of our most common engagements. We keep the Delaware entity&rsquo;s books, build intercompany structure, track the franchise-tax reserve and any in-state gross receipts, and coordinate with your <strong>home-state CPA</strong> on multi-state nexus and filings." },
    { q: "How do you set up multiple entities in QuickBooks?", a: "Depending on structure, we use <strong>separate company files per entity</strong> or classes/locations within one file, with intercompany due-to/due-from accounts and a consolidation approach your CPA can file from &mdash; so each entity stands on its own and the group rolls up cleanly." },
  ],
  secChallengesH: "Three places Delaware holding-company books break.",
  secChallengesLede: "Multi-entity structures look fine until you need entity-level truth. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Entities are commingled", title: "One file for several entities.", body: "Multiple entities run through a single QuickBooks file with no clean separation, so no entity has financials that stand on their own &mdash; and your CPA can&rsquo;t file from them. The fix is separate books per entity (separate files or disciplined classes/locations) so each entity&rsquo;s P&amp;L and balance sheet are real. If you can&rsquo;t pull a single entity&rsquo;s statements in under a minute, this is your starting point." },
    { signal: "Intercompany doesn&rsquo;t net", title: "Intercompany loans &amp; allocations are a mess.", body: "Loans between entities, management fees, and shared-expense allocations are booked inconsistently, so intercompany balances don&rsquo;t net to zero across the group and consolidation double-counts. The fix is matched due-to/due-from accounts and a documented allocation method, reconciled every period &mdash; so the consolidated picture is true and audit-ready." },
    { signal: "Franchise tax is a surprise", title: "No franchise-tax reserve.", body: "Every Delaware entity owes the annual franchise tax &mdash; flat $300 for LLCs/LPs, $175&ndash;$200,000 for corporations &mdash; but it&rsquo;s often unbudgeted until the notice lands, and corporations frequently pay on the wrong (higher) method. The fix is a reserve tracked per entity in QuickBooks and the lower authorized-shares vs. assumed-par-value method confirmed, so it&rsquo;s funded and filed on time by your agent or CPA." },
  ],
  secHandleH: "Delaware holding company accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your entity structure, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Per-entity books", title: "Separate books per entity", body: "Clean, standalone ledgers for each Delaware entity &mdash; separate files or disciplined classes/locations &mdash; so every entity&rsquo;s financials are real and CPA-ready.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; Intercompany", title: "Intercompany structure", body: "Matched due-to/due-from accounts, documented management-fee and expense allocations, and intercompany balances reconciled to net cleanly across the group.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Franchise reserve", title: "Franchise-tax reserve", body: "The annual franchise tax tracked and reserved per entity, with the lower corporate method (authorized-shares vs. assumed-par-value) confirmed &mdash; filed by your agent or CPA.", href: "/find-an-accountant/delaware/franchise-tax-help/", cta: "Delaware franchise tax help &rarr;" },
    { num: "04 &middot; Gross receipts", title: "In-state gross receipts", body: "Where an entity has real Delaware activity, gross-receipts tracking by business activity so the right rate and exclusion apply and the return reconciles to the books.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "05 &middot; Multi-state", title: "Multi-state coordination", body: "For out-of-state owners, we keep the Delaware entity&rsquo;s books and coordinate with your home-state CPA on nexus, apportionment, and where other states&rsquo; taxes apply.", href: "/find-an-accountant/delaware/quickbooks-accountant/", cta: "Delaware QuickBooks accountant &rarr;" },
    { num: "06 &middot; Cleanup", title: "Multi-entity cleanup", body: "Split a commingled file into clean per-entity books, rebuild intercompany structure, set each franchise-tax reserve, and reconcile to a CPA-ready baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
  ],
  secIntegrationsTag: "What we configure",
  secIntegrationsH: "Built for multi-entity structures.",
  integrations: [
    "QuickBooks Online &mdash; classes and locations per entity, or separate company files",
    "Intercompany due-to/due-from accounts reconciled every period",
    "Consolidated reporting your CPA can file from",
    "Per-entity franchise-tax reserve accounts (LLC/LP $300; corp $175&ndash;$200,000)",
    "Documented management-fee and shared-expense allocation method",
    "Bill.com / Ramp &mdash; entity-coded AP and expense capture",
    "Document vault for registered-agent and franchise filings (we track, not file)",
    "Gross-receipts tracking where an entity has in-state Delaware activity",
  ],
  integrationsNote: "Running a more complex stack, an SPV structure, or a fund vehicle? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From one commingled file to clean per-entity books.",
  secProcessLede: "Every Delaware holding-company engagement follows the same four-phase rhythm &mdash; entities separated first, structure second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your entity structure, where the books are commingled, your franchise-tax exposure, and home-state filing needs. No pitch." },
    { phase: "Phase 2", title: "Separation &amp; cleanup", body: "Split the entities into clean books, rebuild intercompany structure, and run a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to reconcile each entity to a known-good baseline." },
    { phase: "Phase 3", title: "Monthly close &amp; reserves", body: "Per-entity monthly reconciliation, intercompany netting, and the franchise-tax reserve tracked for each entity with the lower method confirmed." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Consolidated, CPA-ready statements and, as the group grows, <a href=\"/accounting/advisory/fractional-cfo/\">structure and cash-flow advisory</a> across entities." },
  ],
  secAdvisoryH: "Clean entities are the start. A structure your CPA can file from is the point.",
  advisoryBody: [
    "Once every entity has real books and intercompany nets cleanly, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;is the structure working?&rdquo; Which entity should carry which costs, how cash moves between them, whether the franchise-tax method is optimal, where multi-state nexus is forming &mdash; the decisions that keep a Delaware holding structure clean as it grows.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your entity-level data, working alongside your CPA and registered agent. We keep the books and surface the questions; your CPA and agent handle the filings and legal structure. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Delaware holding-company and multi-entity engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm in Middletown, and reviewed for technical accuracy on per-entity books, intercompany structure, and the annual franchise tax (<a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">DE Division of Corporations</a>). TechBrot is not a registered agent and does not file the franchise tax or annual report &mdash; it keeps the books and coordinates with your CPA and registered agent, who file.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Per-entity books, intercompany structure, franchise-tax reserve, in-state gross receipts &middot; franchise and income-tax filing coordinated with your CPA and registered agent" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],
  secRelatedH: "Related Delaware services &amp; industries.",
  related: [
    { title: "Franchise Tax Help", body: "The franchise-tax reserve tracked and the lower corporate method confirmed &mdash; filed by your agent or CPA.", href: "/find-an-accountant/delaware/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
    { title: "Cleanup Bookkeeping", body: "Split a commingled multi-entity file into clean per-entity books, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Finance &amp; Banking", body: "For fund admins, SPVs, and lenders in Wilmington&rsquo;s corridor &mdash; intercompany and audit-ready reporting.", href: "/find-an-accountant/delaware/industries/finance-banking/", cta: "Finance &amp; banking &rarr;" },
    { title: "All Delaware industries", body: "See how TechBrot tailors accounting to the way your industry runs in Delaware.", href: "/find-an-accountant/delaware/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Are you a registered agent for my Delaware entity?", a: "No. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a registered agent. Every Delaware entity must maintain a registered agent with a Delaware address to receive legal and state notices; that is a separate service. What we do is keep the real books behind that address: separate ledgers per entity, intercompany structure, and the franchise-tax reserve. We coordinate with your registered agent and CPA, who handle the filings." },
    { q: "Do you file the Delaware franchise tax and annual report?", a: "No &mdash; your registered agent or CPA files those. We track and reserve for the franchise tax in QuickBooks and confirm the calculation method that produces the lower corporate tax. It&rsquo;s a flat $300 for LLCs, LPs, and GPs (due June 1, no annual report) and $175 to $200,000 for corporations by the authorized-shares or assumed-par-value method (due March 1, with an annual report). Our job is to make sure the liability is funded in the books and the filing is supported, so it&rsquo;s never a surprise." },
    { q: "How do you set up multiple entities in QuickBooks?", a: "It depends on the structure. For cleanly separate operating entities we typically use separate QuickBooks company files; for a tighter group we may use classes and locations within one file. Either way we build intercompany due-to/due-from accounts, a documented allocation method for shared costs and management fees, and a consolidation approach your CPA can file from &mdash; so each entity stands on its own and the group rolls up without double-counting." },
    { q: "Can you keep the books for a Delaware company that operates from another state?", a: "Yes &mdash; that&rsquo;s one of our most common engagements. Because most Delaware entities are owned and run from elsewhere, we keep the books for the Delaware entity, handle holding-company and intercompany structure, track the franchise-tax reserve and any in-state Delaware gross receipts, and coordinate with your home-state CPA on multi-state nexus, apportionment, and filings. You get clean Delaware-entity books wherever you operate from." },
    { q: "Does my Delaware holding company owe the gross receipts tax?", a: "Only on Delaware-source gross receipts &mdash; that is, where the entity has real in-state activity selling goods or services. A pure holding entity with no Delaware operations generally has no gross receipts to report, but every Delaware entity still owes the annual franchise tax. Where there is in-state activity, we set up gross-receipts tracking by business activity in QuickBooks so the right rate and exclusion apply and the return reconciles to the books." },
    { q: "My entities are all in one file and it&rsquo;s a mess. Where do we start in Delaware?", a: "With a cleanup. We split the commingled file into clean per-entity books, rebuild the intercompany structure so balances net correctly, set each entity&rsquo;s franchise-tax reserve, and reconcile everything to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with consolidated reporting. Most multi-entity owners come to us mid-mess; it&rsquo;s the normal starting point. Want to talk it through first? Call (877) 751-5575 and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/incorporation-holding-companies/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Holding Company Accounting","description":"Holding-company and multi-entity accounting for Delaware entities — per-entity books, intercompany structure, and the franchise-tax reserve, set up in QuickBooks by a Certified ProAdvisor. Not a registered agent; does not file the franchise tax or annual report.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-holding-companies-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-ind-holding-summary","#de-ind-holding-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/delaware/industries/"},
          {"@type":"ListItem","position":5,"name":"Holding Companies"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Holding Company Accounting","serviceType":"Holding-company and multi-entity bookkeeping","description":"Per-entity books, intercompany structure, franchise-tax reserve, and in-state gross-receipts tracking for Delaware holding companies and registered entities, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; not a registered agent; does not file the Delaware franchise tax or annual report — coordinates with the client's CPA and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware holding companies, registered entities, SPVs, and out-of-state owners of Delaware entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
