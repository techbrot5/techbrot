/* /find-an-accountant/new-york/small-business-accountant/ — t-location SERVICE child
 * (cobalt). Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-smallbiz.txt) — the ONLY
 * authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/small-business-accountant/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors the proven NY child
 * (industries/construction.11tydata.js): JSON front-matter lives in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema @graph
 * (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders from — single source of truth (T4).
 *
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. T2 contract headings frozen verbatim at
 * exact level; T3 no collapse; T4 8 contract Q/A append-only (enrichment APPENDS, never
 * rewords/removes the original answer); T6 real NY small-business-accounting content (entity-
 * aware LLC/S-corp/partnership bookkeeping, NY sales-tax-ready books, NYC UBT awareness for
 * unincorporated firms, owner-ready financials + advisory, CPA coordination at tax time,
 * fixed-fee).
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent
 * Certified QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: we do NOT
 * file NY/federal income-tax returns and do NOT represent before tax authorities; the client's
 * CPA/EA files. "Accountant" framed as accounting/bookkeeping support, not tax filing. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — NO review-card, NO AggregateRating. The baseline's named-reviewer credential line is
 * reframed to firm-level (Certified QuickBooks ProAdvisor team). No founder/personal name in
 * visible content. Footer chrome (Accounting/QuickBooks/Company/Network) and the newsletter
 * ("The monthly brief.") are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  // Source: baseline tldr__body, enriched with entity-aware + NYC UBT specificity.
  summary: [
    "Most New York small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">QuickBooks setup and cleanup</a>, payroll coordination, and <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC &amp; NY sales-tax tracking</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo; cleanup from $1,500).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them. If you&rsquo;re an unincorporated New York firm, we keep the books aware of the <strong>NYC Unincorporated Business Tax (UBT)</strong> so the numbers your CPA needs at filing are already in place. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns or represent you before the tax authorities. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 62 New York counties, most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most New York small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>$400&ndash;$2,500+/mo</strong>, cleanup from <strong>$1,500</strong>, fixed-fee against a written scope. CPA tax-return prep is billed separately by them. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, and sales-tax tracking from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most NY small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (grid-3 buyer-cards). 5 frozen H3s verbatim.
  // (H2: The financial backbone, built and maintained. + 5 H3s)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and NYC/NY sales-tax tracking configured from the start.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "04 &middot; Sales tax", title: "NYC &amp; NY sales tax tracking", body: "New York&rsquo;s destination-based sales tax tracked in your books &mdash; including the NYC 8.875% combined rate &mdash; so your quarterly return reconciles instead of guessing at filing time.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; UBT-aware for unincorporated firms &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/new-york/", cta: "New York overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (grid-2 buyer-cards). 2 frozen H3s verbatim.
  // (H2: What we do — and what your CPA does. + 2 H3s: TechBrot / Your CPA)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "NYC &amp; NY sales-tax tracking",
      "Payroll coordination",
      "Year-end handoff to your CPA",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files NY &amp; federal income-tax returns",
      "Files the NYC UBT return; represents you before the tax authorities",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a New York founder their margins are slipping, their owner draws are outrunning profit, or their NYC UBT exposure is rising. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name; baseline reviewer line
  // reframed to firm-level per R5).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, NYC/NY sales-tax tracking, payroll coordination &middot; income-tax filing &amp; representation coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract (append-only enrichment). visible faq__list =
  // FAQPage schema (same array). (H2: New York small business accounting questions.)
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my New York small business?", a: "Most New York small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in New York?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll, tracking NYC and New York State sales tax, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in New York?", a: "For the bookkeeping and QuickBooks work TechBrot provides, ongoing monthly service runs $400&ndash;$2,500+/mo depending on volume and complexity, with one-time cleanup from $1,500. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. We quote fixed fees against a written scope before any work begins." },
    { q: "I&rsquo;m just starting a business in New York — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and a system to track NYC/NY sales tax from day one if you sell taxable goods or services. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common New York engagements. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready, then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, and operational accounting, and we coordinate with your CPA or EA, who files your New York and federal returns and represents you before the tax authorities. Most New York small businesses use both." },
    { q: "Which New York businesses do you work with?", a: "Small and midsize businesses across all 62 counties and most industries &mdash; including construction, real estate, legal, restaurants, healthcare, and nonprofits, each of which has its own New York wrinkles. Whether you&rsquo;re a sole proprietor facing the NYC UBT or a growing LLC with multi-state payroll, the bookkeeping is built around your situation." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for New York small businesses across all 62 counties, coordinated with your CPA — the day-to-day financial backbone for new and growing New York businesses.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-smallbiz-summary","#ny-svc-smallbiz-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, and payroll coordination for New York small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file NY State, NYC, or federal tax returns and does not represent before tax authorities — coordinates with the client's CPA or EA, who files.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","name":"New York small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
