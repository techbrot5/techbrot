/* /find-an-accountant/new-york/pricing/ — t-location NY PRICING page (live baseline
 * port; the NY services pricing page WITH pricing tiers). Sources: FROZEN EQUITY
 * CONTRACT (contract-ny-svc-pricing.txt) — the ONLY authority for the headings + the
 * 7 FAQ — and the live baseline old HTML (find-an-accountant/new-york/pricing/index.html,
 * full body read) for body prose/section content. Data-file shape mirrors
 * monthly-bookkeeping.11tydata.js: JSON front-matter lives in the .njk; this file supplies
 * the content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service+OfferCatalog, FAQPage). The FAQPage mainEntity is generated from
 * the same `faq` array the visible faq__list renders from — single source of truth.
 *
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. T2 headings frozen (every contract
 * H1/H2/H3 verbatim, exact level); footer chrome (Accounting/QuickBooks/Company/Network)
 * and the newsletter ("The monthly brief.") are intentionally NOT rendered here — global
 * chrome owns them. T3 no collapse. T4 FAQ: 7 contract Q/A verbatim/flat/append-only.
 * T6 content-to-goal: REAL NY pricing — every canonical fixed-fee figure carried VERBATIM
 * from the baseline (pricing is LOCKED — not one dollar figure altered). COBALT VOCABULARY
 * ONLY: stack-8, buyer-card, grid-2/grid-3, byline-block, meta-reviewed, faq__list,
 * ai-summary--ruled, checks-list, trust-row, section--alt. Pricing tiers use the EXACT
 * monthly-bookkeeping markup: buyer-card__opener + buyer-card__heading + buyer-card__body
 * with <strong> for the range (NO buyer-card__price / __cadence — those classes do not exist).
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. No review-card and no
 * AggregateRating on this page (the 2 real Clutch reviews live on the NY pillar, not
 * duplicated here). The baseline "David Westgate" reviewer reference is reframed to
 * firm-level (no personal name in visible content; firm-level review byline only).
 * Independent firm — does NOT file NY taxes; tracks/verifies NY & NYC sales tax
 * (NYC 8.875% combined; 4% NYC UBT) and coordinates with the client's CPA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // TLDR — real-H2 section carrying the one-paragraph prose. (H2: How TechBrot New York pricing works.)
  // Canonical fixed-fee figures carried VERBATIM from the baseline.
  tldr: [
    "<strong>Every TechBrot engagement is fixed-fee with a written scope agreed before any work begins &mdash; no hourly billing.</strong> New York ranges: <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> $400&ndash;$2,500+/mo; <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; <a href=\"/find-an-accountant/new-york/quickbooks-setup/\">QuickBooks setup</a> $750&ndash;$5,000+; <a href=\"/find-an-accountant/new-york/quickbooks-migration/\">migration</a> $2,500&ndash;$10,000+; <a href=\"/find-an-accountant/new-york/sales-tax-help/\">sales-tax tracking</a> $250&ndash;$1,500+/mo; payroll $150&ndash;$800+/mo.",
    "Where you land depends on real factors &mdash; transaction volume, accounts and entities, history depth, file complexity, and New York specifics like NYC sales-tax complexity and UBT allocation. The <strong>30-minute discovery call is free</strong>; your exact fixed fee is delivered in writing within 3 business days. <strong>No long-term lock-in</strong> on recurring engagements.",
    "Tax filing isn&rsquo;t included &mdash; your CPA files your returns and the NYC UBT &mdash; but <strong>year-end CPA handoff is included free</strong> in recurring engagements. TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a CPA firm; not affiliated with Intuit Inc.; it does not file New York tax returns.",
  ],

  // AI SUMMARY — five entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York pricing, in five questions.) Every dollar figure verbatim.
  aiSummary: [
    { q: "How does TechBrot price services in New York?", a: "<strong>Fixed-fee with written scope before any work begins. No hourly billing.</strong> Monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QB setup $750&ndash;$5,000+; migration $2,500&ndash;$10,000+; sales tax $250&ndash;$1,500+/mo; payroll $150&ndash;$800+/mo. Exact fee within 3 business days of a free call." },
    { q: "Why no hourly billing?", a: "Hourly billing penalizes you for the provider&rsquo;s inefficiency and creates unpredictable invoices. <strong>TechBrot fixes the fee against a written scope</strong> so total cost is known before work starts. Scope changes are re-quoted in writing &mdash; never a surprise invoice." },
    { q: "What sets the price within a range?", a: "<strong>Transaction volume, accounts, entities, payroll complexity, history depth</strong> &mdash; plus New York specifics like NYC sales-tax complexity and UBT allocation. The discovery call surfaces these; the written scope reflects them." },
    { q: "Free call? Any contracts?", a: "<strong>Free, 30 minutes, no obligation.</strong> Written fixed-fee scope within 3 business days. <strong>No long-term lock-in</strong> on recurring engagements &mdash; they run month to month." },
    { q: "Does it include tax filing?", a: "No. <strong>TechBrot delivers CPA-ready books; your CPA files your returns and the NYC UBT.</strong> Year-end CPA handoff included free in recurring engagements. We don&rsquo;t file returns or represent clients before tax authorities." },
  ],

  // ENGAGEMENT SHAPES — three pricing models (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Every New York engagement fits one of three shapes. + 3 H3s)
  shapes: [
    { tag: "Recurring", title: "Monthly retainer", body: "Ongoing work billed as a fixed monthly fee. Same-shape deliverables every month. No long-term lock-in &mdash; runs month to month against the written scope.", examples: "<strong>For:</strong> monthly bookkeeping, payroll, sales-tax compliance." },
    { tag: "One-time", title: "Fixed-fee project", body: "Defined-scope work delivered in weeks, with a written fixed fee and set start and completion dates. Often transitions into a recurring engagement after.", examples: "<strong>For:</strong> cleanup, catch-up, QuickBooks setup, migration." },
    { tag: "Coordinated", title: "CPA-paired", body: "We run the books; your CPA files. Scoped so the two fit cleanly &mdash; including NYC UBT-ready and sales-tax-ready books handed off at year-end.", examples: "<strong>For:</strong> businesses with an existing CPA who need the bookkeeping side." },
  ],

  // FULL PRICING — every NY service + range (grid-3 buyer-cards). Range in buyer-card__body
  // <strong>. EVERY dollar figure carried VERBATIM from the baseline pricing table.
  // (H2: Every New York service, every range.)
  ranges: [
    { type: "Recurring fixed-fee close", service: "Monthly Bookkeeping", fee: "$400&ndash;$2,500+/month", cadence: "Monthly", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "View monthly bookkeeping &rarr;" },
    { type: "One-time structural fix", service: "Cleanup Bookkeeping", fee: "$1,500&ndash;$15,000+", cadence: "One-time, 2&ndash;8 wks", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "View cleanup &rarr;" },
    { type: "Historical bookkeeping", service: "Catch-up Bookkeeping", fee: "$2,000&ndash;$20,000+", cadence: "One-time, 4&ndash;12 wks", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "View catch-up &rarr;" },
    { type: "New implementation", service: "QuickBooks Setup", fee: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 wks", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "View QuickBooks setup &rarr;" },
    { type: "QB-specific structural fix", service: "QuickBooks Cleanup", fee: "$1,500&ndash;$15,000+", cadence: "One-time, 2&ndash;8 wks", href: "/find-an-accountant/new-york/quickbooks-cleanup/", cta: "View QuickBooks cleanup &rarr;" },
    { type: "Desktop &rarr; Online, platform switch", service: "QuickBooks Migration", fee: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 wks", href: "/find-an-accountant/new-york/quickbooks-migration/", cta: "View migration &rarr;" },
    { type: "File corruption, error resolution", service: "Emergency QB Fix", fee: "$500&ndash;$2,500", cadence: "One-time, same-day diag", href: "/find-an-accountant/new-york/quickbooks-cleanup/", cta: "View emergency fix &rarr;" },
    { type: "NYC/NY destination-based tracking", service: "Sales Tax Tracking", fee: "$250&ndash;$1,500+/month", cadence: "Monthly + setup", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "View sales tax tracking &rarr;" },
    { type: "Multi-state recurring payroll", service: "Payroll Management", fee: "$150&ndash;$800+/month", cadence: "Monthly", href: "/accounting/payroll-management/", cta: "View payroll &rarr;" },
  ],
  rangesNote: "All engagements: <strong>fixed fee, written scope before work begins, no hourly billing.</strong> Tax-return and NYC UBT filing are handled by your CPA and billed separately. Specific quotes follow the free discovery call within 3 business days.",

  // WHY FIXED-FEE — standing brand line is the H2; body carried as section prose.
  // (H2: Why we don't bill by the hour.)
  whyBody: [
    "Hourly billing has a structural problem: <strong>it penalizes you for the provider&rsquo;s inefficiency.</strong> The slower they work, the more you pay. The invoice is unpredictable, and you can&rsquo;t budget around it. Worse, it makes you hesitate to call your own accountant &mdash; because every question starts a meter.",
    "TechBrot prices every New York engagement as a <strong>fixed fee against a written scope</strong>. You know the total cost before any work begins. Call as often as you need within the engagement &mdash; no meter. If the work genuinely expands beyond the agreed scope, the fee is <strong>re-quoted and re-approved in writing</strong> before anything proceeds. You are never surprised by an invoice.",
    "This works because the work is delivered by Certified ProAdvisors efficient enough to price confidently &mdash; including the New York specifics, from NYC sales tax to UBT-ready books. The fixed fee is a statement of competence: <strong>we know how long good work takes, so we can quote it.</strong>",
  ],

  // INCLUDES — six standards every fixed fee carries (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: Every fixed fee includes these. + 6 H3s)
  includes: [
    { number: "01", title: "Free discovery call", body: "A <strong>30-minute call</strong> before anything is quoted. Free, no obligation, no sales push." },
    { number: "02", title: "Written fixed-fee scope", body: "<strong>Within 3 business days</strong> of the call. The scope is the agreement &mdash; no hourly billing, no creep." },
    { number: "03", title: "Certified ProAdvisor delivery", body: "Delivered by a <strong>Certified QuickBooks ProAdvisor</strong> with active Intuit certifications." },
    { number: "04", title: "Named-operator continuity", body: "A <strong>named ProAdvisor owns your account</strong> end-to-end. No rotation, no re-explaining." },
    { number: "05", title: "Direct file access", body: "We work <strong>inside your own QuickBooks file</strong>. Your data, your audit trail, never a parallel system." },
    { number: "06", title: "CPA-ready handoff", body: "Recurring engagements include <strong>year-end CPA handoff at no extra cost</strong> &mdash; UBT- and sales-tax-ready." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: New York pricing maintained by the TechBrot ProAdvisor team.)
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; Independent ProAdvisor firm" },
    { label: "Model", detail: "Fixed-fee &middot; Written scope before work &middot; No hourly billing" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — where to go next (grid-2 buyer-cards). 4 frozen H3s verbatim. (H2: Where to go next. + 4 H3s)
  // H3 "Get a Quote" kept verbatim; CTA uses canonical lexicon ("Book the discovery call").
  related: [
    { title: "New York QuickBooks Accountant", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, payroll, and NYC sales tax for New York businesses.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "New York Bookkeeping Services", body: "Monthly bookkeeping, cleanup, and catch-up &mdash; the recurring backbone, by a named bookkeeper.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { title: "New York Sales Tax Help", body: "The 8.875% NYC rate, economic nexus, and quarterly filing &mdash; tracked accurately in your books.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Get a Quote", body: "Talk to a Certified ProAdvisor and get a written fixed-fee scope within 3 business days.", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-money&amp;funnel_stage=BOFU", cta: "Book the discovery call &rarr;" },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: Questions about cost.)
  faq: [
    { q: "How does TechBrot price its services in New York?", a: "Fixed-fee with a written scope before any work begins &mdash; no hourly billing. New York monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; migration $2,500&ndash;$10,000+; sales-tax tracking $250&ndash;$1,500+/mo; payroll $150&ndash;$800+/mo. Your exact fixed fee is quoted within 3 business days of a free discovery call." },
    { q: "Why doesn&rsquo;t TechBrot bill hourly?", a: "Hourly billing penalizes you for the provider&rsquo;s inefficiency and makes invoices unpredictable. TechBrot fixes the fee against a written scope, so the total is known up front. Scope changes are re-quoted and re-approved in writing &mdash; never a surprise invoice." },
    { q: "What determines where I land in a New York price range?", a: "Recurring work: transaction volume, number of accounts, payroll complexity, entities. <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">Cleanup/catch-up</a>: months or years involved, severity of issues. New York adds factors too &mdash; NYC sales-tax complexity, UBT allocation for partnerships. The discovery call surfaces these; the written scope reflects them." },
    { q: "Is the discovery call free? Any contracts?", a: "Free, 30 minutes, no obligation &mdash; book it or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. Written fixed-fee scope within 3 business days. No long-term lock-in on recurring engagements &mdash; they run month to month against the written scope." },
    { q: "Does the price include filing my New York taxes?", a: "No. TechBrot delivers operational accounting and CPA-ready books; your CPA or EA files your returns and the NYC UBT. Year-end CPA handoff is included free in recurring engagements. TechBrot does not file returns or represent clients before the tax authorities." },
    { q: "Do you handle NYC sales tax and the UBT in pricing?", a: "<a href=\"/find-an-accountant/new-york/sales-tax-help/\">Sales-tax tracking</a> is scoped as its own line ($250&ndash;$1,500+/mo) or built into monthly bookkeeping. We track destination-based NYC sales tax (8.875% in the city) and structure books so your CPA can file the 4% UBT &mdash; but the filing itself is your CPA&rsquo;s, billed separately." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. Independent Certified QuickBooks ProAdvisor firm. Active Intuit certifications, but not owned, employed, or operated by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/pricing/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Bookkeeping & QuickBooks Pricing","description":"Fixed-fee pricing for New York businesses across all 62 counties — monthly bookkeeping, cleanup, catch-up, QuickBooks setup and migration, sales-tax tracking, and payroll, each scoped in writing before work begins. No hourly billing.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-pricing-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-pricing-tldr","#ny-svc-pricing-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Pricing"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks services","description":"Fixed-fee bookkeeping, cleanup, catch-up, QuickBooks setup/migration, sales-tax tracking, and payroll for New York businesses. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New York Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"400","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Cleanup Bookkeeping"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"1500","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-up Bookkeeping"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"2000","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"750","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Migration"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"2500","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sales Tax Compliance"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"250","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"150","priceCurrency":"USD"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
