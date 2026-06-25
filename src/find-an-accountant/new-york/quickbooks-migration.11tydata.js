/* /find-an-accountant/new-york/quickbooks-migration/ — t-location NY SERVICE child
 * (LARGE — 43 contract headings, none collapsed). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-svc-qbmigration.txt) — the ONLY authority for the headings + the 7
 * FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/quickbooks-migration/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors the just-built sibling
 * quickbooks-cleanup.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage, BreadcrumbList, Service with 3 Offers, FAQPage). The FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders
 * from — single source of truth.
 *
 * FACTS (web-verified, baseline-frozen): QB Desktop new-subscription stop-sell
 * Sept 30 2024; Desktop 2023 support ended May 31 2026; Desktop 2024 support ends
 * Sept 30 2027; Enterprise exempt. Bench shut Dec 27 2024, relaunched under new
 * ownership (Employer.com) after a Jan 2025 Canadian bankruptcy.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this service child renders NO review-card and NO AggregateRating. The
 * baseline named-reviewer line ("David Westgate · 40+ years…") is reframed to a
 * firm-level review byline (no personal name in visible content); David Westgate
 * survives ONLY as the reviewedBy @id in schema. Independent firm — does NOT file
 * NY State or NYC tax returns; coordinates with the client's CPA, who files; not
 * affiliated with Intuit Inc. Footer chrome (Accounting/QuickBooks/Company/Network)
 * and the newsletter ("The monthly brief.") are intentionally NOT rendered here —
 * global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section carrying the migration TL;DR prose (baseline tldr body, enriched).
  // (H2: What New York QuickBooks migration actually is.)
  summary: [
    "<strong>Professional QuickBooks migration</strong> moves your accounting from <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a> to <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; or from Wave, Xero, FreshBooks, Sage, or Bench into QuickBooks &mdash; cleanly and completely. It is <strong>data conversion</strong>, <strong>chart-of-accounts restructuring</strong> for Online&rsquo;s different structure, <strong>historical reconciliation</strong>, <strong>integration replacement</strong> (Desktop integrations rarely transfer directly), <strong>payroll-history migration</strong>, <strong>opening-balance verification</strong> tied to a conversion date, <strong>NYC/NY sales-tax reconfiguration</strong>, a <strong>documented handoff</strong>, training, and <strong>CPA coordination</strong>.",
    "The work begins with a pre-migration audit, not a file dump. We map what carries forward cleanly &mdash; lists, balances, open transactions &mdash; and what has to be rebuilt: Desktop-only integrations, custom reports, advanced inventory, class and location structures Online models differently. Every migrated file is then validated against the old one: trial balance to trial balance, A/R and A/P aging, bank and credit-card balances as of the cutover, and sales-tax liability tied to a date &mdash; so the new file proves out before anyone relies on it.",
    "Intuit&rsquo;s Desktop sunset &mdash; new-subscription stop-sell in September 2024, support ending version by version through September 2027 &mdash; is why most New York businesses still on Desktop are migrating now. Fixed-fee engagements run $2,500&ndash;$10,000+ by history depth and complexity, completed in 3&ndash;8 weeks. Many continue directly into <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> in the new file. We do the migration; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // URGENCY — the Intuit Desktop sunset timeline (grid-3 buyer-cards, dated openers).
  // 4 frozen H3s VERBATIM. (H2: What's actually happening — and why timing matters. + 4 H3s)
  sunsetLede: "Migrating before a forced sunset is far easier than migrating during one. Businesses that wait for the last quarter end up with rushed migrations, lost integrations, and avoidable cleanup afterward.",
  sunset: [
    { date: "Sep 30, 2024", title: "New Desktop subscriptions discontinued.", body: "Intuit stopped selling new QuickBooks Desktop Pro Plus, Premier Plus, and Mac Plus subscriptions to U.S. customers. Existing subscribers can still renew &mdash; but the door to new Desktop is closed. Enterprise is the exception." },
    { date: "May 31, 2026", title: "Desktop 2023 support ended.", body: "QuickBooks Desktop 2023 lost all support &mdash; payroll tax tables, bank feeds, and security updates stopped. Each Desktop version gets roughly three years of support from release, then its connected features go dark." },
    { date: "2026 &mdash; now", title: "Desktop 2024 still supported.", body: "If you&rsquo;re on Desktop 2024 &mdash; the last non-Enterprise release &mdash; you still have support and bank feeds. Migration capacity at most ProAdvisor firms is currently manageable. This is the calm before the rush." },
    { date: "Sep 30, 2027", title: "Desktop 2024 support ends.", body: "Intuit ends support for Desktop 2024 &mdash; payroll tables freeze, bank feeds disconnect, security patches stop. Industry migration capacity tightens dramatically. Cost to migrate doesn&rsquo;t fall with time; the risk of waiting does the opposite." },
  ],
  sunsetNote: "If you&rsquo;re still on QuickBooks Desktop, the question isn&rsquo;t whether to migrate &mdash; it&rsquo;s whether to do it on your schedule or during the industry rush. The diagnostic call is free. (Enterprise customers are exempt from the Desktop sunset; Intuit continues to sell and support Enterprise separately.)",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York QuickBooks migration, in five questions.)
  aiSummary: [
    { q: "Why migrate from Desktop to Online?", a: "Intuit is phasing out Desktop. <strong>New-subscription stop-sell was September 30, 2024</strong>; Desktop 2023 lost support May 31, 2026; <strong>Desktop 2024 loses support September 30, 2027</strong>, after which payroll tables, bank feeds, and security updates stop. Enterprise is exempt. For New York businesses on Desktop, it&rsquo;s a question of timing, not necessity." },
    { q: "What does it cost?", a: "Fixed one-time, typically <strong>$2,500&ndash;$10,000+</strong>. Simple $2,500&ndash;$4,500; standard $4,500&ndash;$7,500; complex/Enterprise $7,500&ndash;$10,000+. Fixed-fee against a written scope, quoted within 3 business days of a free diagnostic." },
    { q: "Can&rsquo;t I just use Intuit&rsquo;s free tool?", a: "It handles the data transfer but <strong>doesn&rsquo;t review accuracy, redesign the chart of accounts, replace Desktop integrations, or reconcile history</strong>. Most migrations we do exist because the free tool ran but the result wasn&rsquo;t usable." },
    { q: "How long does it take?", a: "<strong>3&ndash;8 weeks.</strong> Simple ~3 weeks; standard 4&ndash;6; complex 6&ndash;8. The timeline is fixed in the written scope before work begins." },
    { q: "Can I migrate off Wave, Xero, or Bench?", a: "Yes. <strong>Bench shut down Dec 27, 2024 and relaunched under new ownership</strong> after a Jan 2025 Canadian bankruptcy &mdash; off-Bench migration to QuickBooks Online is a regular engagement. Cross-platform rebuilds the chart of accounts from scratch, so it runs higher." },
  ],

  // SIGNALS — the six "if any apply, the answer is yes" cards (grid-3 buyer-cards).
  // 6 frozen H3s VERBATIM. (H2: If any of these apply, the answer is yes. + 6 H3s)
  signalsLede: "Migration is rarely optional once any of these signals show up. The question is when, not whether.",
  signals: [
    { title: "You&rsquo;re running QuickBooks Desktop Pro or Premier.", body: "Intuit&rsquo;s sunset roadmap applies to you. Migration is a question of timing, not necessity &mdash; moving now is materially easier than moving during the 2027 rush." },
    { title: "You&rsquo;re on Wave, Xero, FreshBooks, or Bench.", body: "Cross-platform migration to QuickBooks Online improves CPA compatibility, lender-readiness, and integrations. Former Bench clients &mdash; after its Dec 2024 shutdown and relaunch &mdash; are a frequent case." },
    { title: "You&rsquo;ve outgrown your current QBO tier.", body: "Moving from QBO Simple Start to Plus, or Plus to Advanced, isn&rsquo;t plug-and-play. New features need configuration; old data structures often need restructuring." },
    { title: "Your New York CPA can&rsquo;t work in your current platform.", body: "Most U.S. CPAs work primarily in QuickBooks Online. If your accountant is asking you to migrate, the business case is already made." },
    { title: "You&rsquo;re facing an audit, capital raise, or business sale.", body: "Buyers, investors, and auditors read your books on a modern, cloud-accessible platform. A Desktop file is friction; a poorly migrated QBO file is worse." },
    { title: "Your Desktop integrations are degrading.", body: "Bank feeds breaking, payment-processor issues, payroll warnings. Intuit&rsquo;s third-party ecosystem is moving to QBO; the Desktop ecosystem is shrinking." },
  ],

  // PHASES — the four-phase migration methodology (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: Every migration runs four phases. + 4 H3s)
  phasesLede: "Migration is where Intuit&rsquo;s free tool stops and professional work starts. Every TechBrot migration follows the same four-phase sequence &mdash; audit first, convert and restructure second, replace and reconfigure third, then verify and hand off.",
  phases: [
    { phase: "Phase 1", title: "Migration Diagnostic &amp; Pre-Audit", body: "30-minute call. Review your current platform, years of history, transaction volume, integrations, and structural issues. A pre-migration audit identifies what transfers cleanly and what needs rework. Written fixed-fee scope within 3 business days.", meta: "Typical: Week 1" },
    { phase: "Phase 2", title: "Data Conversion &amp; Restructure", body: "Data converted from Desktop, or rebuilt from scratch for non-QuickBooks sources. Chart of accounts restructured for QBO. Opening balances verified to the conversion date. Customer and vendor records cleaned. Historical transactions reconciled to statements.", meta: "Typical: Weeks 2&ndash;4" },
    { phase: "Phase 3", title: "Integration Replacement &amp; Configuration", body: "Desktop integrations replaced with QBO-compatible equivalents. Bank feeds reconnected. Payroll history and YTD migrated. NYC/NY sales tax reconfigured for QBO&rsquo;s destination-based model. Third-party tools reconnected. Test transactions verified.", meta: "Typical: Weeks 4&ndash;6" },
    { phase: "Phase 4", title: "Verification, Training &amp; CPA Handoff", body: "First-month transactions in QBO reconciled to confirm accuracy. Training on QBO interface differences with recorded video. Documented migration summary. CPA coordination for the file transition. Optional continuation into monthly bookkeeping.", meta: "Typical: Weeks 6&ndash;8" },
  ],

  // DELIVERABLES — what a migration engagement actually delivers (two checks-lists,
  // each under a real H3 — T3: no table demotion). 2 frozen H3s VERBATIM.
  // (H2: What you actually get from a migration engagement. + 2 H3s)
  deliverablesLede: "Every TechBrot migration delivers these workstreams. Complex configuration layers on as scope requires.",
  deliverablesAlways: {
    // (H3: Every migration includes)
    title: "Every migration includes",
    items: [
      "Pre-migration file audit",
      "Data conversion (Intuit tool or manual rebuild)",
      "Chart of accounts review &amp; restructuring",
      "Opening-balance verification tied to a conversion date",
      "Customer &amp; vendor record cleanup",
      "Historical transaction reconciliation",
      "Bank &amp; credit-card feed reconnection",
      "NYC/NY sales-tax reconfiguration",
      "First-month post-migration reconciliation",
      "Training session with recorded video",
      "Documented migration summary",
      "CPA-coordinated handoff",
      "30-day post-migration support window",
    ],
  },
  deliverablesScope: {
    // (H3: Handled when scope requires)
    title: "Handled when scope requires",
    items: [
      "Multi-year history migration",
      "Payroll history &amp; YTD migration",
      "Inventory data migration &amp; valuation",
      "Job costing &amp; project history",
      "Class &amp; location tracking rebuild",
      "Multi-entity consolidation rebuild",
      "Payment-processor integration replacement",
      "E-commerce integration replacement",
      "Time-tracking integration replacement",
      "Custom report template recreation",
      "User permissions &amp; access setup",
      "Cross-platform migration (Wave, Xero, Bench, etc.)",
    ],
  },

  // PRICING — three fixed-fee scope tiers (grid-3 buyer-cards). 3 frozen H3s VERBATIM.
  // Cobalt: range carried in buyer-card__body + <strong>, NEVER a __price/__cadence class.
  // (H2: Fixed-fee migration, written scope, no surprises. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Simple Migration", range: "<strong>$2,500&ndash;$4,500</strong>", fit: "Single-entity Desktop-to-Online, under 3 years of history, few integrations, no inventory, no payroll history.", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a Simple migration &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard Migration", range: "<strong>$4,500&ndash;$7,500</strong>", fit: "Multi-year history (3&ndash;7 years), 3&ndash;6 integrations, payroll-history migration, inventory, multi-state sales tax, or cross-platform (Wave/Xero/Bench).", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a Standard migration &rarr;" },
    { tier: "Tier 03", title: "Complex Migration", range: "<strong>$7,500&ndash;$10,000+</strong>", fit: "Multi-entity, multi-location, industry-specific operations (construction, manufacturing, restaurants), Enterprise migrations, 6+ integrations, custom report rebuild.", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a Complex migration &rarr;" },
  ],
  pricingNote: "QuickBooks Online and Enterprise subscriptions pass through at Intuit list pricing. Final pricing is set by the diagnostic. Optional continuation into <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> runs $400&ndash;$2,500/month depending on complexity.",

  // INTUIT TOOL — honest framing on the free tool (real-H2 prose section).
  // (H2: What Intuit's migration tool does — and doesn't do.)
  tool: [
    "Intuit provides a free automated tool that moves data from QuickBooks Desktop to QuickBooks Online. It&rsquo;s a real tool and it works for what it does &mdash; the technical data transfer.",
    "What it doesn&rsquo;t do: review the migration for accuracy, redesign your chart of accounts for QBO&rsquo;s different structure, replace Desktop-specific integrations (most have no direct QBO equivalent), reconcile historical data, handle features that exist in Desktop but not QBO (advanced inventory, certain industry features), or coordinate with your CPA on the transition.",
    "<strong>Most migrations TechBrot delivers exist because the Intuit tool ran but the result wasn&rsquo;t usable for the business.</strong> Bank feeds broken, integrations missing, chart of accounts unusable in the new structure, opening balances off, historical reports inaccessible. The free tool moves data. Professional migration delivers a working QuickBooks Online file &mdash; one validated against the old file before you rely on it.",
  ],

  // ADVISORY — what migration is actually for (real-H2 prose section).
  // (H2: Migration is the modernization. The capabilities are what matter.)
  advisory: [
    "Migration as a forced reaction to Intuit&rsquo;s sunset is the wrong frame. Migration as deliberate modernization &mdash; positioning the business for the next decade of accounting work &mdash; is the right one.",
    "A well-migrated QuickBooks Online file enables what Desktop couldn&rsquo;t: <strong>cloud access</strong> for distributed teams, <strong>real-time CPA collaboration</strong> instead of file-handoff cycles, <strong>modern integrations</strong> with payment processors and e-commerce, <strong>AI-assisted bookkeeping</strong> that compounds efficiency, <strong>better lender and investor positioning</strong>, and the foundation for advisory &mdash; cash-flow forecasting, scenario planning, margin analysis &mdash; that requires data your CPA can actually access.",
    "Most TechBrot migrations transition into <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\"><strong>monthly bookkeeping</strong></a> with the same ProAdvisor, and many continue into payroll, sales-tax compliance, and eventually advisory. As automation handles routine entry, that judgment layer is where the value lives. <strong>The migration is the modernization moment</strong> &mdash; done right, it unlocks the next decade.",
  ],

  // OPERATOR — expertise-first framing, firm-level (R5: named-reviewer line reframed).
  // (H2: A named Certified ProAdvisor — Desktop and Online.)
  operatorBody: [
    "Every TechBrot migration is delivered by a Certified QuickBooks ProAdvisor fluent in both QuickBooks Desktop and Online. Migration is one of the few engagement types where Desktop expertise is still essential &mdash; and the named ProAdvisor who runs your migration stays on it from diagnostic to handoff, so nothing about your file gets lost in translation.",
    "Quality review backs every migration against TechBrot&rsquo;s published standards, and the same ProAdvisor can continue with <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> in the new system if you want the relationship to continue. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certifications", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "Desktop &amp; Online migration specialists &middot; all 62 New York counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; 30-day post-migration support window" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — what migration commonly pairs with (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: What migration commonly pairs with. + 4 H3s)
  related: [
    { title: "Monthly bookkeeping", body: "The natural continuation. Same ProAdvisor, no rework, monthly close runs cleanly in the new platform.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "QuickBooks setup", body: "When migrating from a non-QuickBooks platform, setup runs alongside migration to build the new file correctly from scratch.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "Setup &rarr;" },
    { title: "QuickBooks cleanup", body: "If your existing file has structural issues, cleanup before migration prevents bad data carrying forward.", href: "/find-an-accountant/new-york/quickbooks-cleanup/", cta: "Cleanup &rarr;" },
    { title: "NY sales tax help", body: "Destination-based NYC/NY rates configured correctly in your new QuickBooks Online file.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (R5: no founder/personal name; baseline
  // "David Westgate · 40+ years" reviewer line reframed to firm-level).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Desktop-to-Online &amp; cross-platform migration &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: What people ask before booking a New York migration.)
  faq: [
    { q: "Why is everyone migrating from QuickBooks Desktop to Online?", a: "Intuit is phasing out QuickBooks Desktop in stages. It stopped selling new Desktop Pro Plus, Premier Plus, and Mac Plus subscriptions to U.S. customers on September 30, 2024; existing subscribers can still renew. Support then ends by version &mdash; Desktop 2023 lost support on May 31, 2026, and Desktop 2024 (the last non-Enterprise release) loses support on September 30, 2027, after which payroll tax tables, bank feeds, and security updates stop. Enterprise is the exception and continues separately. For New York businesses still on Desktop, migration is a question of timing, not necessity &mdash; moving on your schedule beats moving during the industry rush." },
    { q: "How much does QuickBooks Desktop to Online migration cost?", a: "A fixed one-time engagement, typically $2,500&ndash;$10,000+. Simple migrations (single-entity, under 3 years history, few integrations): $2,500&ndash;$4,500. Standard migrations (multi-year history, 3&ndash;6 integrations, payroll): $4,500&ndash;$7,500. Complex migrations (multi-entity, multi-state, inventory-heavy, Enterprise): $7,500&ndash;$10,000+. Every engagement is fixed-fee against a written scope, quoted within 3 business days of a free diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Can I just use Intuit&rsquo;s free migration tool?", a: "Intuit&rsquo;s free tool handles the technical data transfer, but it doesn&rsquo;t review the result for accuracy, redesign your chart of accounts for Online&rsquo;s structure, replace Desktop-specific integrations, reconcile historical data, or handle features that exist in Desktop but not Online. Most migrations TechBrot delivers exist because the Intuit tool ran but the result wasn&rsquo;t usable &mdash; broken bank feeds, missing integrations, an unusable chart of accounts. The free tool moves data; professional migration delivers a working file." },
    { q: "How long does QuickBooks migration take?", a: "3 to 8 weeks. Simple Desktop-to-Online: about 3 weeks. Standard: 4&ndash;6 weeks. Complex multi-entity or industry-specific: 6&ndash;8 weeks. Timing assumes prompt file access and reasonable availability for review sessions. The timeline is fixed in the written scope before work begins." },
    { q: "Can I migrate from non-QuickBooks platforms?", a: "Yes. We migrate from Wave, FreshBooks, Xero, Sage, and others to QuickBooks Online. If you were a Bench client, note that Bench shut down on December 27, 2024 and later relaunched under new ownership (Employer.com) after a Canadian bankruptcy filing &mdash; cross-platform migration off Bench to QuickBooks Online is an engagement we handle regularly. Cross-platform migrations rebuild the chart of accounts from scratch, enter opening balances, and replicate historical transactions, so they typically run on the higher end of pricing." },
    { q: "What does professional QuickBooks migration include?", a: "Pre-migration file audit, data conversion, chart-of-accounts restructuring, historical reconciliation, integration replacement, payroll-history migration, customer and vendor cleanup, opening-balance verification, sales-tax reconfiguration (including NYC/NY rates), first-month post-migration reconciliation, training with recorded video, a documented summary, and CPA coordination. We do the migration; your CPA files." },
    { q: "QuickBooks Enterprise or QuickBooks Online for my New York business?", a: "Product selection is part of the diagnostic. QBO Plus or Advanced fits most New York small businesses. Enterprise fits operations needing Desktop-level features &mdash; advanced inventory, industry editions (contractor, manufacturing, nonprofit), or multi-location accounting &mdash; and is the one Desktop line Intuit continues to sell and support. We recommend Enterprise only when QBO genuinely won&rsquo;t fit." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/quickbooks-migration/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks Migration","description":"Professional QuickBooks Desktop-to-Online migration for New York businesses — data conversion, integration replacement, historical reconciliation, NYC/NY sales-tax setup, and CPA-coordinated handoff. Fixed-fee, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-quickbooks-migration-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-qbmigration-summary","#ny-svc-qbmigration-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Migration"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks Migration","serviceType":"QuickBooks Desktop-to-Online migration","description":"Professional QuickBooks migration for New York businesses — Desktop-to-Online and cross-platform, with data conversion, chart-of-accounts restructuring, historical reconciliation, integration replacement, and CPA-coordinated handoff, by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; not affiliated with Intuit Inc.; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and mid-sized businesses migrating to QuickBooks Online from Desktop or another accounting platform"},
          "offers":[
            {"@type":"Offer","name":"Simple migration","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"2500","priceCurrency":"USD"},"description":"Single-entity Desktop-to-Online from $2,500, fixed-fee.","url":url},
            {"@type":"Offer","name":"Standard migration","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"4500","priceCurrency":"USD"},"description":"Multi-year, multi-integration migration from $4,500, fixed-fee.","url":url},
            {"@type":"Offer","name":"Complex migration","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"7500","priceCurrency":"USD"},"description":"Multi-entity / Enterprise migration from $7,500, fixed-fee.","url":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
