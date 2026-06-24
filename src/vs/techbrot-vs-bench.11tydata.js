/* /vs/techbrot-vs-bench/ — t-mofu COMPARISON page (MIGRATION-PROTOCOL:
 * content-to-goal, visual-floor). T1 AUTHORITY for headings + the 6 FAQ is the
 * FROZEN EQUITY CONTRACT (contract-vs-bench.txt) — NOT the old HTML. The old HTML
 * (vs/techbrot-vs-bench/index.html) is read ONLY for body PROSE.
 *
 * CURRENCY/HONESTY (today 2026-06): Bench Accounting ABRUPTLY SHUT DOWN Dec 27
 * 2024 (platform inaccessible immediately; data-download deadline Mar 7 2025) ->
 * acquired by Employer.com Dec 30 2024 -> Canadian bankruptcy Jan 2025 (Vancouver-
 * based; debts >$65M) -> relaunched Jan 2025 under the Bench brand as an
 * Employer.com subsidiary. The baseline HTML already carried the corrected
 * timeline, so body prose ported here KEEPS that truth. Genuine angle: former
 * Bench customers needing a stable home / a firm that won't disappear overnight.
 * No claim Bench operates normally; no disparagement; no fabricated acquisition
 * detail beyond the known facts. Independent firm — not affiliated with Intuit
 * Inc. or Bench/Employer.com.
 *
 * T3 NO COLLAPSE: the 14-dimension baseline comparison renders as the tier's
 * vs-scroll + vs-table (vsTable[]) — its tier signature — using short row labels.
 * The contract H3s (3 verdict profiles, 4 migration steps, 4 related) stay REAL
 * <h3> in their own sections (verdict buyer-cards, migration process-diagram,
 * related stack-8). T4 FAQ: exactly the 6 contract Q/A, verbatim, one array
 * (faq[]) -> visible accordion + FAQPage schema. COBALT VOCABULARY ONLY. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "The honest summary." — one-paragraph plain read (TL;DR prose, ported verbatim
  // from baseline; already reflects the corrected currency).
  summary: [
    "<strong>Bench</strong> built a centralized remote bookkeeping subscription using its own proprietary software, with a flat-fee model and a focus on simplicity for very small businesses. It worked well for solo operators and micro-businesses who wanted a hands-off, low-cost monthly bookkeeping service and didn&rsquo;t need to use QuickBooks. <strong>TechBrot</strong> is structured differently: an independent firm of Certified QuickBooks ProAdvisors who deliver work in the client&rsquo;s own QuickBooks file, with named operator accountability and platform-level quality standards, backed by a vetted operator network for continuity and scale. The two services fit fundamentally different buyers. Bench was right for businesses prioritizing low cost and simple subscription bookkeeping with no QuickBooks involvement. TechBrot is right for businesses that need professional bookkeeping, expect to use QuickBooks, and want a named, credentialed operator behind the work &mdash; with continuity that doesn&rsquo;t depend on one company staying solvent. After Bench&rsquo;s abrupt December 2024 shutdown, Employer.com acquisition, and Canadian bankruptcy, that difference matters more than it used to.",
  ],
  // "Bench’s status, as of this writing." — currency disclosure prose. Ported
  // verbatim from baseline (which already carried the corrected timeline).
  benchStatus: [
    "Bench Accounting abruptly shut down on December 27, 2024, telling its roughly 12,000 customers the platform would be inaccessible effective immediately and giving them until March 7, 2025 to download their data. Three days later, on December 30, 2024, Bench announced it was being acquired by Employer.com, a San Francisco HR-tech company. Bench &mdash; a Vancouver-based business &mdash; then filed for bankruptcy in Canada in January 2025 and resumed operations that month under the Bench brand as an Employer.com subsidiary. Service exists again under new ownership, but many former customers experienced data-access disruptions, lost continuity, or chose to migrate away during the transition. This comparison covers Bench&rsquo;s stated service model and pricing as publicly documented; the current operation, now integrated into a payroll-focused company, differs from pre-shutdown Bench. If you&rsquo;re a former Bench customer looking for an alternative, <a href=\"/contact/?intent=bench-alternative\">a TechBrot ProAdvisor can help with file migration</a> and ongoing bookkeeping.",
  ],
  // quick-5 — "in five questions." Short questions deliberately NOT identical to
  // any FAQ question, to clear the faq-overlap check. Ported from baseline prose.
  aiSummary: [
    { q: "What&rsquo;s the core difference?", a: "<strong>TechBrot</strong> is a firm of vetted <strong>Certified QuickBooks ProAdvisors</strong> who work in the client&rsquo;s own QuickBooks file. <strong>Bench</strong> was a centralized remote bookkeeping subscription using its own proprietary software, not QuickBooks. The service models, software stacks, and accountability structures are categorically different." },
    { q: "Does TechBrot use QuickBooks like Bench did?", a: "No &mdash; the opposite. TechBrot operators work <strong>in the client&rsquo;s existing QuickBooks file</strong> (Online, Desktop, Enterprise, or Payroll). Bench used its proprietary software, which meant clients didn&rsquo;t have QuickBooks files and couldn&rsquo;t easily switch providers. The QuickBooks-native model is a deliberate TechBrot choice for portability, CPA compatibility, and lender-readiness." },
    { q: "How does pricing compare?", a: "Bench published flat monthly tiers starting around $299/month for very small businesses, with higher tiers for more complex needs. TechBrot prices each engagement as a fixed monthly fee against a written scope, typically $400&ndash;$2,500+/month based on transaction volume, payroll, sales tax, and complexity. Bench was generally cheaper for the simplest engagements; TechBrot is more flexible across complexity levels and includes professional ProAdvisor expertise." },
    { q: "Who does the actual work?", a: "Bench used internal centralized teams &mdash; clients did not have a named, credentialed individual responsible for their books. TechBrot delivers through a named Certified ProAdvisor under TechBrot&rsquo;s brand, standards, and platform infrastructure, with a vetted operator network providing continuity behind the named lead." },
    { q: "I&rsquo;m a former Bench customer &mdash; what now?", a: "If you&rsquo;re leaving Bench (or recovering from the December 2024 shutdown), you typically need three things: data export from Bench, migration into a new system, and ongoing bookkeeping going forward. TechBrot operators handle all three &mdash; including <a href=\"/quickbooks/migration/\">migration into QuickBooks</a>, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup of the migrated data</a>, and <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">ongoing monthly bookkeeping</a>. Engagements are fixed-fee with a named operator." },
  ],
  // vs-table — the 14-dimension baseline comparison rendered as the tier-signature
  // vs-scroll + vs-table. "us" = TechBrot column. concede text = neutral/them cells.
  vsTable: [
    { cap: "Service model", tb: "Vetted Certified ProAdvisor firm &amp; network", bench: "Centralized remote team subscription" },
    { cap: "Accounting software", tb: "QuickBooks Online, Desktop, Enterprise, Payroll (your file)", bench: "Proprietary Bench software (not QuickBooks)" },
    { cap: "Who does the work", tb: "Named Certified ProAdvisor", bench: "Internal team, not individually credentialed publicly" },
    { cap: "Time-zone alignment", tb: "U.S.-based operators in your time zone", bench: "Centralized remote team" },
    { cap: "Entry-level pricing", tb: "$400&ndash;$700/month Essentials tier", bench: "~$299/month starting tier (as published)" },
    { cap: "Complex-engagement pricing", tb: "$700&ndash;$2,500+/month scoped to complexity", bench: "Tier upgrades; less flexible scoping" },
    { cap: "Pricing structure", tb: "Fixed monthly fee against written scope", bench: "Tiered subscription, less custom scoping" },
    { cap: "QuickBooks expertise", tb: "Certified ProAdvisor across full stack", bench: "Not a QuickBooks service" },
    { cap: "CPA / lender readiness", tb: "CPA-ready QuickBooks files, documented adjustments", bench: "Bench-format reports; some CPAs require re-keying" },
    { cap: "Provider continuity", tb: "Network handles transition; file portable", bench: "Shut down Dec 2024; data access was disrupted" },
    { cap: "Data ownership &amp; portability", tb: "Your QuickBooks file, your data, full export anytime", bench: "Proprietary format; export limited to reports" },
    { cap: "Cleanup &amp; catch-up", tb: "Dedicated cleanup &amp; catch-up engagements, fixed-fee", bench: "Historical bookkeeping add-on; less flexible" },
    { cap: "Tax preparation included", tb: "No &mdash; CPA-coordinated separately", bench: "Bench Tax was offered as an add-on pre-shutdown" },
    { cap: "Self-service software access", tb: "QuickBooks login under your account", bench: "Bench dashboard for reports &amp; messaging" },
  ],
  // 3 verdict profiles — buyer-cards. H3 openers VERBATIM from contract.
  // (contract h3s: "You want a real Certified ProAdvisor on your books." /
  //  "You wanted the cheapest possible monthly bookkeeping subscription." /
  //  "You actually need tax-focused or full-firm services.")
  verdict: [
    { eyebrow: "Choose TechBrot if", name: "You want a real Certified ProAdvisor on your books.", body: "You want or already use <strong>QuickBooks Online, Desktop, or Enterprise</strong>; you need a <strong>named, credentialed operator</strong> behind the work; you want <strong>CPA-ready and lender-ready financials</strong> without rework; you&rsquo;re <strong>migrating away from Bench</strong> after the December 2024 shutdown; you need <strong>cleanup, catch-up, or multi-year historical</strong> work; you have <strong>payroll, multi-state sales tax, inventory, or multi-entity</strong> complexity; or you value <strong>data portability and provider continuity</strong> with a U.S.-based operator in your time zone." },
    { eyebrow: "Bench was the right fit if", name: "You wanted the cheapest possible monthly bookkeeping subscription.", body: "You were a <strong>solo operator or very small business</strong> with simple books, didn&rsquo;t need or want to use QuickBooks, wanted <strong>flat-fee subscription pricing</strong> at entry-level cost, didn&rsquo;t need a named individual responsible for your books, were comfortable with proprietary software and reporting, and had no payroll, sales tax, or multi-entity complexity. <strong>Worth noting:</strong> Bench&rsquo;s abrupt December 2024 shutdown and subsequent Canadian bankruptcy changed the calculus for new customers &mdash; even at the lower entry price, provider continuity is now part of the value equation." },
    { eyebrow: "Neither fits if", name: "You actually need tax-focused or full-firm services.", body: "You need a <strong>CPA firm that handles tax filings</strong> as the primary engagement, you&rsquo;re a <strong>venture-backed startup</strong> needing fundraising-specific accounting, you need <strong>audit-ready GAAP financials</strong> for an upcoming audit, you need <strong>international entity accounting</strong> across multiple countries, or you need a <strong>full outsourced accounting department</strong> with controller functions. For these, you&rsquo;re likely looking at a CPA firm, an outsourced controller, or a service like Pilot (for VC-backed startups) &mdash; and we&rsquo;re happy to point you toward the right fit." },
  ],
  // 4 migration steps — process-diagram. H3 names VERBATIM from contract.
  migration: [
    { num: "01", when: "Typical 1&ndash;3 business days", name: "Export from Bench", body: "An operator helps you export the available data from your Bench account &mdash; reports, transaction history, supporting documents &mdash; now accessed through the Employer.com / Bench portal. We work with what&rsquo;s available, even when a full export isn&rsquo;t possible." },
    { num: "02", when: "Typical 2&ndash;6 weeks", name: "Migrate into QuickBooks", body: "A <a href=\"/quickbooks/migration/\">QuickBooks migration</a> engagement &mdash; setting up the file, rebuilding the chart of accounts, importing transaction history, and reconciling against bank and credit-card statements." },
    { num: "03", when: "Typical 2&ndash;4 weeks", name: "Cleanup the gaps", body: "If Bench data is incomplete, gaps in transaction history are filled. A <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup engagement</a> reconstructs accurate records and produces CPA-ready statements." },
    { num: "04", when: "Ongoing", name: "Transition to monthly", body: "Once the file is clean and current, <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> begins with the same operator. No context loss, no rotating team." },
  ],
  // page-review prose + trust-row — "Reviewed by the TechBrot Certified ProAdvisor team."
  reviewProse: [
    "This comparison is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm. The factual claims about Bench &mdash; the December 27, 2024 shutdown, the December 30, 2024 Employer.com acquisition, the January 2025 Canadian bankruptcy and relaunch, the approximate customer count, and the data-download timeline &mdash; were verified against primary reporting as of the review date. Bench&rsquo;s service model and pricing are described as publicly documented; the current operation under Employer.com may differ. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files.",
  ],
  reviewSpec: [
    { value: "Active", label: "Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Verified", label: "Bench timeline checked against primary reporting &middot; pricing as publicly documented" },
    { value: "Coordinated", label: "income-tax filing handled with your CPA/EA, who files" },
    { value: "Independent", label: "firm &mdash; not affiliated with Bench, Employer.com, or Intuit Inc." },
  ],
  // 4 related comparisons — stack-8. H3 names VERBATIM from contract.
  related: [
    { title: "TechBrot vs Pilot", href: "/vs/techbrot-vs-pilot/", body: "Pilot serves venture-backed startups with fundraising and audit-specific accounting. Different buyer, different model." },
    { title: "TechBrot vs QuickBooks Live", href: "/vs/techbrot-vs-quickbooks-live/", body: "Intuit&rsquo;s own bookkeeping service inside QuickBooks Online. Narrower scope, scripted operations." },
    { title: "In-house vs outsourced", href: "/vs/", body: "When to hire an internal bookkeeper, when to outsource. Trade-offs by business size, complexity, and stage." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons against alternatives. Written with the same honest read each time." },
  ],
  // 6 FAQ — VERBATIM QUESTIONS from the frozen contract; ANSWERS preserved verbatim
  // from the contract (the contract answers already reflect the corrected currency,
  // so NO answer was reworded — see report for the flag detail).
  faq: [
    { q: "Is Bench still operating?", a: "Bench abruptly shut down on December 27, 2024, telling customers the platform would no longer be accessible effective immediately, and giving them until March 7, 2025 to download their data. Three days later, on December 30, 2024, it announced it was being acquired by Employer.com, a San Francisco HR-tech company. Bench then filed for bankruptcy in Canada in January 2025 (Bench was Vancouver-based), revealing debts of over $65 million, and resumed operations that month under the Bench brand as an Employer.com subsidiary. So Bench exists again, but under new ownership and integrated into a payroll-focused company &mdash; a different operation from the pre-shutdown Bench. Access to historical Bench data is now managed through the Employer.com / Bench portal." },
    { q: "Why does the QuickBooks vs proprietary-software distinction matter?", a: "Three reasons. First, portability &mdash; QuickBooks files transfer cleanly between providers, while proprietary formats don&rsquo;t. Second, CPA compatibility &mdash; most U.S. tax preparers work directly from QuickBooks files, whereas non-QuickBooks reports often require re-keying. Third, continuity &mdash; if your bookkeeping provider goes out of business, a QuickBooks file is recoverable and another professional can pick it up. Bench&rsquo;s December 2024 shutdown, which locked roughly 12,000 small businesses out of their books right before tax season, made the continuity argument concrete." },
    { q: "Is TechBrot really more expensive than Bench?", a: "At the entry level, Bench&rsquo;s roughly $299/month starting tier was cheaper than TechBrot&rsquo;s $400&ndash;$700/month Essentials tier. What you got at that price was meaningfully different &mdash; Bench used proprietary software with internal-team support; TechBrot uses your own QuickBooks file with a named Certified ProAdvisor. For businesses that need a professional ProAdvisor working in QuickBooks, TechBrot&rsquo;s pricing is competitive. For businesses that genuinely needed only basic bookkeeping with no QuickBooks involvement, Bench&rsquo;s entry tier was cheaper." },
    { q: "Can TechBrot handle the same things Bench did?", a: "For ongoing monthly bookkeeping, yes &mdash; with significantly more depth on cleanup, catch-up, payroll, sales tax, and multi-entity work. For Bench&rsquo;s tax-preparation add-on, TechBrot doesn&rsquo;t prepare taxes directly &mdash; operators coordinate with your CPA or recommend one. Compared with Bench&rsquo;s hands-off subscription experience, TechBrot is more substantive (a named operator, your real QuickBooks file, written scopes) but less of a pure set-and-forget subscription." },
    { q: "What other Bench alternatives should I consider?", a: "Several, depending on your needs. Pilot, for venture-backed startups with audit and fundraising-specific needs. QuickBooks Live, if you want Intuit&rsquo;s own bookkeeping service inside QuickBooks Online. Local CPA firms, if you want tax and bookkeeping under one roof. Solo bookkeepers, if you want the lowest cost and don&rsquo;t need continuity guarantees. We maintain comparison pages for each, written with the same honest read." },
    { q: "How long does it take to switch from Bench to TechBrot?", a: "Typically three to eight weeks total. The discovery call happens in week one. Export and migration into QuickBooks runs two to six weeks depending on history. Any cleanup needed runs two to four weeks. Then monthly bookkeeping begins. We can compress this if you have a hard deadline &mdash; tax filing, a lender review, fundraising &mdash; but the work itself isn&rsquo;t fast; it&rsquo;s methodical." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/techbrot-vs-bench/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-bench-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"TechBrot vs Bench","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
