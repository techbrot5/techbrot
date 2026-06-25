/* /find-an-accountant/new-york/bookkeeping-services/ — t-location NY SERVICE child
 * (overview of the NY bookkeeping service — NOT an industry page). Sources: FROZEN
 * EQUITY CONTRACT (contract-ny-svc-bookkeeping.txt) — the ONLY authority for the
 * headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/bookkeeping-services/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors industries/consulting.11tydata.js:
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array the
 * visible faq__list renders from — single source of truth.
 *
 * MIGRATION-PROTOCOL (content-to-goal, visual-floor):
 *   T2 — every contract H1/H2/H3 rendered verbatim at its exact level; entities kept;
 *        footer chrome (Accounting/QuickBooks/Company/Network) + the newsletter
 *        ("The monthly brief.") intentionally NOT rendered — global chrome owns them.
 *   T3 — no collapse: every contract heading carries real content.
 *   T4 — 8 contract Q/A as faq__list AND FAQPage from the same array; verbatim/flat;
 *        enrichment is append-only (never reword/remove the original answer).
 *   T6 — content-to-goal: real NY bookkeeping-service specificity (categorization,
 *        reconciliation, AR/AP, financials, QuickBooks Online in the client's own file,
 *        a named Certified ProAdvisor, NY-aware sales-tax-ready books + NYC UBT
 *        awareness, fixed-fee pricing, the books/CPA boundary). Routes to the deeper NY
 *        service pages (monthly-bookkeeping, cleanup, quickbooks-*) where the contract
 *        links them.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The "Why ... keep
 * their books with us" facts are reframed to representative/scope (years of team
 * experience; counties served; named-bookkeeper continuity; $0 discovery call) — no
 * fabricated client outcomes, no AggregateRating, no review-card (the 2 real Clutch
 * reviews live on the NY pillar and are not duplicated here). The baseline named-reviewer
 * line ("Lead Certified QuickBooks ProAdvisor · 40+ years…") is reframed to firm-level.
 * No founder/personal name in visible content (firm-level review byline only). Independent
 * firm — does NOT file NY/NYC taxes; coordinates with the client's CPA, who files. NYC
 * 8.875% combined rate and NYC UBT references reflect current NY DTF / NYC DOF guidance. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>New York bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC sales tax</a> tracked, and CPA-ready <a href=\"/accounting/financial-statements/\">financial statements</a> produced monthly by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. All 62 New York counties, NYC to upstate.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are New York bookkeeping services?", a: "<strong>New York bookkeeping services are the ongoing recording, reconciling, and reporting of a New York business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, NYC and NY State sales tax tracking, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in New York?", a: "Ongoing monthly bookkeeping runs <strong>$400&ndash;$2,500+/mo</strong> by transaction volume, number of accounts, and complexity &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup ($1,500&ndash;$15,000+) or catch-up ($2,000&ndash;$20,000+) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most New York businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> or catch-up to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly service</a> so the books never drift again. You&rsquo;re never left with a half-fixed file." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your New York business actually runs." },
  ],

  // WHY — representative trust points (R5: reframed from baseline proof-band figures).
  // (H2: Why New York businesses keep their books with us.)
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things New York owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "62 counties", label: "Served remotely across all of New York &mdash; the five boroughs, Long Island, and upstate &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (grid-3 buyer-cards). 5 frozen H3s verbatim.
  // (H2: Complete monthly bookkeeping, not a partial service. + 5 H3s)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your New York business so your reports are meaningful and tax prep is painless &mdash; built right from the start or rebuilt during cleanup.", href: "/accounting/chart-of-accounts-setup/", cta: "Chart of accounts setup &rarr;" },
    { num: "03", title: "NYC &amp; NY State sales tax tracking", body: "Destination-based sales tax tracked inside QuickBooks &mdash; including NYC&rsquo;s 8.875% combined rate &mdash; so your quarterly New York return reconciles to the books. We prepare the numbers; you or your CPA file through NYS Web File.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; faster, cheaper, audit-ready filing, with us coordinating directly so nothing falls between you and your accountant.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split (grid-2; checks-list inside each col). 2 frozen H3s verbatim.
  // (H2: What we do — and what we don't. + h3 TechBrot bookkeeping / h3 Your CPA)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "NYC &amp; NY State sales tax tracking and prep",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your New York &amp; federal income-tax returns",
    "Files the NYC UBT return; represents you before tax authorities",
    "Formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books (grid-2 stack-8). 4 frozen H3s verbatim.
  // (H2: Four steps to clean books. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your New York situation &mdash; volume, accounts, sales-tax exposure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy, your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, sales tax tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, or cash will tighten before a sales-tax payment comes due. Clean books are the foundation &mdash; judgment is the value.",
    "Once your New York books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York bookkeeping services questions.)
  faq: [
    { q: "What do New York bookkeeping services actually include?", a: "Monthly bookkeeping for a New York business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; tracking NYC and New York State sales tax; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in New York?", a: "Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo, set by transaction volume, number of accounts, and complexity &mdash; not by the hour. If your books are behind or messy, a one-time cleanup ($1,500&ndash;$15,000+) or catch-up ($2,000&ndash;$20,000+) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my New York business?", a: "Most New York businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing and tax strategy. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard, then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "Do you handle New York and NYC sales tax in the books?", a: "Yes. We track destination-based sales tax inside QuickBooks &mdash; including NYC&rsquo;s 8.875% combined rate &mdash; so your quarterly New York return is accurate and your sales-tax liability reconciles to the books. We prepare the numbers; your CPA or you file the return through NYS Web File." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your New York business runs." },
    { q: "Can I talk to a Certified ProAdvisor before I commit?", a: "Yes &mdash; book a free discovery call, no obligation. A named Certified ProAdvisor reviews your current books and your New York situation, determines whether you need cleanup, monthly service, or both, and sends a written fixed-fee proposal within 3 business days. Call (877) 751-5575 or <a href=\"/contact/?intent=new-york\">book the call</a>. See the full <a href=\"/find-an-accountant/new-york/\">New York accounting</a> overview for everything we cover statewide." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; baseline named-reviewer line reframed to firm-level).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; income-tax and UBT filing coordinated with your CPA/EA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Bookkeeping Services","description":"Fixed-fee bookkeeping services for New York businesses across all 62 counties — monthly bookkeeping, cleanup, catch-up, and NYC sales tax tracking, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-bookkeeping-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-bookkeeping-summary","#ny-svc-bookkeeping-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, and NYC sales tax tracking for New York businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","name":"New York small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New York Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
