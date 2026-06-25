/* /find-an-accountant/delaware/pricing/ — t-prose DELAWARE PRICING page (the Delaware
 * services pricing page WITH fixed-fee starting ranges). Data-file shape mirrors the proven
 * NY exemplar (find-an-accountant/new-york/pricing.11tydata.js): JSON front-matter lives in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service+OfferCatalog, FAQPage). The FAQPage mainEntity
 * is generated from the same `faq` array the visible faq block renders from — single source.
 *
 * PRICING (canonical — DE-FACTS.md only; do NOT invent figures): monthly bookkeeping from
 * $400/mo · cleanup/catch-up from $1,200 · QuickBooks setup from $750 · QuickBooks cleanup from
 * $1,200 · gross-receipts-tax help from $500 · franchise-tax help from $300 · fractional CFO
 * (global) from $1,500/mo. All fixed-fee against a written scope after a free discovery call.
 * Single "From $X" figures only — no fabricated upper bounds.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. No review-card and no
 * AggregateRating on this page (the 2 real Clutch reviews live on the DE pillar, not duplicated).
 * No founder/personal name in visible content (firm-level review byline only); David Westgate
 * appears only as `reviewedBy` `#david-westgate` in schema. Independent Certified QuickBooks
 * ProAdvisor firm — not affiliated with Intuit Inc.; NOT a registered agent; does NOT file
 * Delaware returns or the franchise tax / annual report. Tracks gross receipts (no sales tax in
 * DE), reserves for the franchise tax, configures the Wilmington 1.25% wage tax, and coordinates
 * with the client's CPA and registered agent, who file. provider = global #organization node;
 * areaServed = State Delaware. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // TLDR — real-H2 section carrying the one-paragraph prose. (H2: How TechBrot Delaware pricing works.)
  // Canonical DE fixed-fee figures only.
  tldr: [
    "<strong>Every TechBrot engagement is fixed-fee with a written scope agreed before any work begins &mdash; no hourly billing.</strong> Delaware starting ranges: <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> from $400/mo; <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup / catch-up</a> from $1,200; <a href=\"/find-an-accountant/delaware/quickbooks-setup/\">QuickBooks setup</a> from $750; <a href=\"/find-an-accountant/delaware/quickbooks-cleanup/\">QuickBooks cleanup</a> from $1,200; <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts-tax help</a> from $500; <a href=\"/find-an-accountant/delaware/franchise-tax-help/\">franchise-tax help</a> from $300; fractional CFO from $1,500/mo.",
    "Where you land depends on real factors &mdash; transaction volume, number of accounts and entities, history depth, file complexity, and Delaware specifics like gross-receipts tracking by business activity, the franchise-tax reserve, Wilmington&rsquo;s 1.25% wage tax, and holding-company structure. The <strong>30-minute discovery call is free</strong>; your exact fixed fee is delivered in writing within 3 business days. <strong>No long-term lock-in</strong> on recurring engagements.",
    "Tax filing isn&rsquo;t included &mdash; your CPA files your returns and your registered agent or CPA files the franchise tax and annual report &mdash; but <strong>year-end CPA handoff is included free</strong> in recurring engagements. TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a CPA firm and not a registered agent; not affiliated with Intuit Inc.; it does not file Delaware returns.",
  ],

  // AI SUMMARY — five entity-dense Q&As (rendered by t-prose from sec.aiH). Every figure canonical.
  // (H2: Delaware pricing, in five questions.)
  aiSummary: [
    { q: "How does TechBrot price services in Delaware?", a: "<strong>Fixed-fee with a written scope before any work begins. No hourly billing.</strong> Delaware starting ranges: monthly bookkeeping from $400/mo; cleanup/catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; gross-receipts-tax help from $500; franchise-tax help from $300; fractional CFO from $1,500/mo. Your exact fixed fee follows a free discovery call, in writing within 3 business days." },
    { q: "Why no hourly billing?", a: "Hourly billing penalizes you for the provider&rsquo;s inefficiency and creates unpredictable invoices. <strong>TechBrot fixes the fee against a written scope</strong> so the total cost is known before work starts. Scope changes are re-quoted in writing &mdash; never a surprise invoice." },
    { q: "What sets the price within a range?", a: "<strong>Transaction volume, number of accounts, entities, history depth, and file complexity</strong> &mdash; plus Delaware specifics like gross-receipts tracking by business activity, the franchise-tax reserve, Wilmington wage-tax setup, and holding-company or multi-entity structure. The discovery call surfaces these; the written scope reflects them." },
    { q: "Free call? Any contracts?", a: "<strong>Free, 30 minutes, no obligation.</strong> Written fixed-fee scope within 3 business days. <strong>No long-term lock-in</strong> on recurring Delaware engagements &mdash; they run month to month against the written scope." },
    { q: "Does it include tax filing?", a: "No. <strong>TechBrot delivers CPA-ready books; your CPA files your returns, and your registered agent or CPA files the Delaware franchise tax and annual report.</strong> Year-end CPA handoff is included free in recurring engagements. We don&rsquo;t file returns or represent clients before tax authorities, and we&rsquo;re not a registered agent." },
  ],

  // ENGAGEMENT SHAPES — three pricing models (r-3 dc-cards). 3 H3s.
  // (H2: Every Delaware engagement fits one of three shapes. + 3 H3s)
  shapes: [
    { tag: "Recurring", title: "Monthly retainer", body: "Ongoing work billed as a fixed monthly fee. Same-shape deliverables every month. No long-term lock-in &mdash; runs month to month against the written scope.", examples: "<strong>For:</strong> monthly bookkeeping, gross-receipts tracking, payroll incl. Wilmington wage tax." },
    { tag: "One-time", title: "Fixed-fee project", body: "Defined-scope work delivered in weeks, with a written fixed fee and set start and completion dates. Often transitions into a recurring engagement after.", examples: "<strong>For:</strong> cleanup, catch-up, QuickBooks setup, QuickBooks cleanup, migration." },
    { tag: "Coordinated", title: "CPA &amp; agent-paired", body: "We run the books; your CPA files and your registered agent files the franchise tax. Scoped so they fit cleanly &mdash; including gross-receipts-ready books and a tracked franchise-tax reserve handed off at year-end.", examples: "<strong>For:</strong> Delaware entities with an existing CPA or registered agent who need the bookkeeping side." },
  ],

  // FULL PRICING — every DE service + starting range (vs-table → .cmp). Canonical DE figures only.
  // (H2: Every Delaware service, every range.)
  ranges: [
    { type: "Recurring fixed-fee close", service: "Monthly Bookkeeping", fee: "From $400/month", cadence: "Monthly", href: "/find-an-accountant/delaware/monthly-bookkeeping/" },
    { type: "One-time structural fix", service: "Cleanup / Catch-up Bookkeeping", fee: "From $1,200", cadence: "One-time", href: "/find-an-accountant/delaware/cleanup-bookkeeping/" },
    { type: "New implementation", service: "QuickBooks Setup", fee: "From $750", cadence: "One-time", href: "/find-an-accountant/delaware/quickbooks-setup/" },
    { type: "QB-specific structural fix", service: "QuickBooks Cleanup", fee: "From $1,200", cadence: "One-time", href: "/find-an-accountant/delaware/quickbooks-cleanup/" },
    { type: "Activity-based receipts tracking", service: "Gross Receipts Tax Help", fee: "From $500", cadence: "Setup + monthly", href: "/find-an-accountant/delaware/gross-receipts-tax-help/" },
    { type: "Annual reserve &amp; method support", service: "Franchise Tax Help", fee: "From $300", cadence: "Annual support", href: "/find-an-accountant/delaware/franchise-tax-help/" },
    { type: "Forecasting, reporting, advisory", service: "Fractional CFO", fee: "From $1,500/month", cadence: "Monthly", href: "/accounting/advisory/fractional-cfo/" },
  ],
  rangesNote: "All engagements: <strong>fixed fee, written scope before work begins, no hourly billing.</strong> Figures are indicative starting points, not quotes. Delaware and federal tax-return filing, and the franchise-tax / annual report, are handled by your CPA and registered agent and billed separately. Specific quotes follow the free discovery call within 3 business days.",

  // WHY FIXED-FEE — standing brand line is the H2; body carried as section prose.
  // (H2: Why we don't bill by the hour.)
  whyBody: [
    "Hourly billing has a structural problem: <strong>it penalizes you for the provider&rsquo;s inefficiency.</strong> The slower they work, the more you pay. The invoice is unpredictable, and you can&rsquo;t budget around it. Worse, it makes you hesitate to call your own accountant &mdash; because every question starts a meter.",
    "TechBrot prices every Delaware engagement as a <strong>fixed fee against a written scope</strong>. You know the total cost before any work begins. Call as often as you need within the engagement &mdash; no meter. If the work genuinely expands beyond the agreed scope, the fee is <strong>re-quoted and re-approved in writing</strong> before anything proceeds. You are never surprised by an invoice.",
    "This works because the work is delivered by Certified ProAdvisors efficient enough to price confidently &mdash; including the Delaware specifics, from gross-receipts tracking by activity to the franchise-tax reserve and Wilmington&rsquo;s wage tax. The fixed fee is a statement of competence: <strong>we know how long good work takes, so we can quote it.</strong>",
  ],

  // INCLUDES — six standards every fixed fee carries (r-3 dc-cards). 6 H3s.
  // (H2: Every fixed fee includes these. + 6 H3s)
  includes: [
    { title: "Free discovery call", body: "A <strong>30-minute call</strong> before anything is quoted. Free, no obligation, no sales push." },
    { title: "Written fixed-fee scope", body: "<strong>Within 3 business days</strong> of the call. The scope is the agreement &mdash; no hourly billing, no creep." },
    { title: "Certified ProAdvisor delivery", body: "Delivered by a <strong>Certified QuickBooks ProAdvisor</strong> with active Intuit certifications." },
    { title: "Named-operator continuity", body: "A <strong>named ProAdvisor owns your account</strong> end-to-end. No rotation, no re-explaining." },
    { title: "Direct file access", body: "We work <strong>inside your own QuickBooks file</strong>. Your data, your audit trail, never a parallel system." },
    { title: "CPA-ready handoff", body: "Recurring engagements include <strong>year-end CPA handoff at no extra cost</strong> &mdash; gross-receipts- and franchise-tax-reserve-ready." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Delaware pricing maintained by the TechBrot ProAdvisor team.)
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Office in Middletown, DE &middot; Independent ProAdvisor firm" },
    { label: "Model", detail: "Fixed-fee &middot; Written scope before work &middot; No hourly billing" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // RELATED — where to go next (r-2 dc-cards). 4 H3s. Cross-links DE service pages.
  related: [
    { title: "Delaware QuickBooks Accountant", body: "The umbrella service page &mdash; bookkeeping, QuickBooks, gross-receipts tracking, and franchise-tax reserve for Delaware businesses.", href: "/find-an-accountant/delaware/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "Delaware Bookkeeping Services", body: "Monthly bookkeeping, cleanup, and catch-up &mdash; the recurring backbone, by a named bookkeeper.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { title: "Delaware Gross Receipts Tax Help", body: "No sales tax in Delaware &mdash; the gross receipts tax on the seller, tracked by business activity so the return reconciles.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
    { title: "Get a Quote", body: "Talk to a Certified ProAdvisor and get a written fixed-fee scope within 3 business days.", href: "/contact/?intent=delaware&state=delaware&source_type=pricing&funnel_stage=BOFU", cta: "Book the discovery call &rarr;" },
  ],

  // FAQ — 7 Q/A, answer-first, Delaware-specific. visible faq block = FAQPage schema (same array).
  // Option C call-intent: phone woven into the cost answer (no baseline to reword — new page).
  // (H2: Questions about cost.)
  faq: [
    { q: "How does TechBrot price its services in Delaware?", a: "Fixed-fee with a written scope before any work begins &mdash; no hourly billing. Delaware monthly bookkeeping from $400/mo; cleanup/catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; gross-receipts-tax help from $500; franchise-tax help from $300; fractional CFO from $1,500/mo. Your exact fixed fee is quoted within 3 business days of a free discovery call &mdash; book one or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "Why doesn&rsquo;t TechBrot bill hourly?", a: "Hourly billing penalizes you for the provider&rsquo;s inefficiency and makes invoices unpredictable. TechBrot fixes the fee against a written scope, so the total is known up front. Scope changes are re-quoted and re-approved in writing &mdash; never a surprise invoice." },
    { q: "What determines where I land in a Delaware price range?", a: "Recurring work: transaction volume, number of accounts, entities, history depth. Cleanup/catch-up: months or years involved, severity of issues. Delaware adds factors too &mdash; gross-receipts tracking by business activity, the franchise-tax reserve, Wilmington wage-tax setup, and holding-company or multi-entity structure. The discovery call surfaces these; the written scope reflects them." },
    { q: "Is the discovery call free? Any contracts?", a: "Free, 30 minutes, no obligation. Written fixed-fee scope within 3 business days. No long-term lock-in on recurring engagements &mdash; they run month to month against the written scope." },
    { q: "Do you handle Delaware gross receipts and the franchise tax in pricing?", a: "Gross-receipts tax help is scoped as its own line (from $500) or built into monthly bookkeeping &mdash; Delaware has no sales tax, so QuickBooks tracks the seller&rsquo;s receipts by business activity so the right rate and exclusion apply. Franchise-tax help (from $300) tracks and reserves for the annual franchise tax and confirms the lower-tax method. We do not file either &mdash; your registered agent or CPA files; we keep the books that support the filing." },
    { q: "Does the price include filing my Delaware taxes?", a: "No. TechBrot delivers operational accounting and CPA-ready books; your CPA or EA files your Delaware and federal returns, and your registered agent or CPA files the franchise tax and annual report. Year-end CPA handoff is included free in recurring engagements. TechBrot does not file returns, is not a registered agent, and does not represent clients before the tax authorities." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. Independent Certified QuickBooks ProAdvisor firm. Active Intuit certifications, but not owned, employed, or operated by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/pricing/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Bookkeeping & QuickBooks Pricing","description":"Fixed-fee pricing for Delaware businesses across New Castle, Kent, and Sussex counties — monthly bookkeeping, cleanup and catch-up, QuickBooks setup and cleanup, gross-receipts-tax help, franchise-tax help, and fractional CFO, each scoped in writing before work begins. No hourly billing.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-pricing-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-pricing-tldr","#de-pricing-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Pricing"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping, QuickBooks, and Delaware gross-receipts and franchise-tax support","description":"Fixed-fee bookkeeping, cleanup, catch-up, QuickBooks setup and cleanup, gross-receipts-tax tracking, franchise-tax reserve support, and fractional CFO for Delaware businesses. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax / annual report — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Delaware Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"400","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Cleanup / Catch-up Bookkeeping"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"750","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Gross Receipts Tax Help"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"500","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Franchise Tax Help"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"300","priceCurrency":"USD"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"},"priceSpecification":{"@type":"PriceSpecification","minPrice":"1500","priceCurrency":"USD"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
