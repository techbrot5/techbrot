/* /pricing/cleanup/ — per-service PRICE-DETAIL for cleanup + catch-up.
 * tier: t-bofu · chrome: full (decision/reference page that routes out to the
 * cleanup service, its tiers, and the catch-up service — keeps the mega-nav).
 * INTENT: "bookkeeping cleanup cost / catch-up bookkeeping cost / quickbooks
 * cleanup cost". DISTINCT ANGLE vs /pricing/ (which carries the whole table):
 * this page is ONLY the cleanup/catch-up price detail — why forensic work is
 * priced for untangling not data entry, what drives the figure, and the tiers.
 * It LINKS to /pricing/, /quickbooks/cleanup/ (+ focused/standard/complex),
 * /accounting/bookkeeping/cleanup-bookkeeping/ + catch-up-bookkeeping/ — it
 * does NOT restate them.
 * CANONICAL FIGURES ONLY (Sheet 0): Cleanup $1,500–$15,000+ · Catch-up
 * $2,000–$20,000+. Tier figures are the canonical ranges as published on the
 * live cleanup tier pages: Focused $1,200–$3,000 · Standard $3,000–$7,500 ·
 * Complex $7,500–$15,000+. No invented numbers/averages/stats; no fabricated
 * reviews/case-studies; no AggregateRating/Review schema. Fixed-fee, written
 * scope, no hourly. Founder-name-zero (firm / "Certified ProAdvisor team").
 * Not affiliated with Intuit. Tax filing not included.
 * Coined frameworks referenced in prose (TechBrot's own) and surfaced as
 * DefinedTerm nodes: "Compounding Reconciliation Drift" (cleanup) and
 * "Historical Accounting Debt" (catch-up).
 * aiSummary: the 5 most AI-citable cleanup/catch-up pricing facts — ZERO
 * overlap with the FAQ objection set. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→").replace(/&middot;/g, "·")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();
}

module.exports = {
  // What moves the figure within the range.
  drivers: [
    { name: "How far behind", body: "How many months &mdash; or years &mdash; of activity are unrecorded or unreconciled. Each additional period is another month to reconstruct and reconcile in sequence, so depth of history is the single largest lever on a catch-up fee and a major one on cleanup." },
    { name: "Severity of the issues", body: "A single drifted reconciliation in otherwise-current books is one thing; a chart of accounts that needs rebuilding, undeposited-funds pileups, miscategorized history flowing into filed reports, or a corrupted file is another. Tangle, not transaction count, sets the tier." },
    { name: "Accounts &amp; entities", body: "Each bank and credit account is its own reconciliation; each entity is its own set of books. A multi-account, multi-entity file takes more tracing and more proving-out than a single-account sole proprietorship at the same depth." },
    { name: "State of the source records", body: "Whether statements, receipts, and prior filings are available and organized &mdash; or have to be retrieved and pieced together. Reconstructing from gaps is slower and more forensic than working from complete records, and the scope reflects it." },
  ],
  // Cleanup tiers — canonical figures as published on the live tier pages.
  tiers: [
    { tier: "Focused cleanup", href: "/quickbooks/cleanup/focused/", fits: "One contained issue in otherwise-current books &mdash; a single drifted reconciliation, a bad bank-feed import, one period miscategorized.", range: "$1,200&ndash;$3,000" },
    { tier: "Standard cleanup", href: "/quickbooks/cleanup/standard/", fits: "Several stacked issues, or books several months to about a year behind &mdash; the most common cleanup tier.", range: "$3,000&ndash;$7,500" },
    { tier: "Complex cleanup", href: "/quickbooks/cleanup/complex/", fits: "Multi-year backlog, a corrupted or restructured file, or multiple entities to consolidate &mdash; scoped in phases.", range: "$7,500&ndash;$15,000+" },
    { tier: "Catch-up bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/", fits: "Months or years of books never recorded &mdash; reconstructed period by period from source documents.", range: "$2,000&ndash;$20,000+" },
  ],
  // What every cleanup/catch-up fixed fee includes (parallel list, not a sequence).
  includes: [
    { name: "Free file review first", body: "The diagnostic comes before the price. We read the actual condition of your file, then quote &mdash; you never get a number on a problem we haven&rsquo;t looked at." },
    { name: "One written fixed fee", body: "The whole project is a single fixed fee against a written scope, agreed before any work begins &mdash; no hourly billing and no surprise invoice mid-untangling." },
    { name: "CPA-ready result", body: "The endpoint is books your CPA can file from &mdash; reconciled, categorized, and proven to tie out. Tax filing itself is your CPA&rsquo;s, not ours." },
    { name: "Certified ProAdvisor delivery", body: "Forensic correction and reconstruction handled by a Certified Intuit ProAdvisor &mdash; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { name: "Work inside your own file", body: "We correct your existing QuickBooks file &mdash; your data, your audit trail &mdash; never a parallel rebuild you can&rsquo;t reconcile against." },
    { name: "A clean handoff to monthly", body: "Once the books are current, the project can transition straight into recurring monthly bookkeeping so they never drift again. No obligation to continue." },
  ],
  nextCards: [
    { name: "All pricing & ranges", body: "The full canonical fixed-fee table across every service &mdash; bookkeeping, setup, migration, payroll, sales tax, and CFO.", cta: "Back to Pricing", href: "/pricing/" },
    { name: "QuickBooks cleanup service", body: "The cleanup service itself &mdash; what we fix, how the three tiers work, and what CPA-ready means for your file.", cta: "QuickBooks Cleanup", href: "/quickbooks/cleanup/" },
    { name: "Catch-up bookkeeping", body: "Months or years behind? How we reconstruct unrecorded periods from source documents, in order, to current.", cta: "Catch-Up Bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/" },
    { name: "Start with the file review", body: "The free diagnostic that reads your file and produces the exact fixed fee in writing within 3 business days.", cta: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review" },
  ],
  aiSummary: [
    { q: "How much does a QuickBooks / bookkeeping cleanup cost?", a: "<strong>$1,500&ndash;$15,000+</strong> as a one-time fixed fee against a written scope &mdash; no hourly billing. The figure reflects how far behind and how tangled the books are. Cleanup scopes into three tiers: <strong>focused $1,200&ndash;$3,000</strong>, <strong>standard $3,000&ndash;$7,500</strong>, <strong>complex $7,500&ndash;$15,000+</strong>. Your exact fee is quoted in writing within 3 business days of a free file review." },
    { q: "How much does catch-up bookkeeping cost?", a: "<strong>$2,000&ndash;$20,000+</strong> as a one-time fixed fee. Catch-up records books that were never done &mdash; the cost is driven mostly by how many months or years are behind, because each period is reconstructed from source documents in sequence. The free file review produces the exact written figure." },
    { q: "Why is cleanup priced higher than data entry?", a: "Because it isn&rsquo;t data entry. Cleanup is forensic work &mdash; tracing where the numbers went wrong, deciding what&rsquo;s recoverable, rebuilding the trail, and proving it ties out. Errors compound the longer they sit, so the cost reflects untangling, not transaction count." },
    { q: "How fast do I get the cleanup price?", a: "<strong>Within 3 business days</strong> of a free file review. The file review is the diagnostic &mdash; it reads the actual state of your books and is what makes a written fixed fee possible. No-obligation, no hourly meter." },
    { q: "Is cleanup a one-time fee or ongoing?", a: "A <strong>one-time fixed-fee project</strong> with set start and completion. It often transitions into recurring monthly bookkeeping afterward so the books stay current &mdash; but that&rsquo;s optional and quoted separately." },
  ],
  faq: [
    { q: "How much does a bookkeeping or QuickBooks cleanup cost?", a: "A cleanup is a one-time fixed fee of <strong>$1,500&ndash;$15,000+</strong>, scoped in writing before any work begins. It splits into three tiers &mdash; focused ($1,200&ndash;$3,000) for one contained issue, standard ($3,000&ndash;$7,500) for several stacked issues or books months behind, and complex ($7,500&ndash;$15,000+) for multi-year, structural, or multi-entity messes. The free file review tells you honestly which tier your file needs and produces your exact figure within 3 business days." },
    { q: "How much does catch-up bookkeeping cost?", a: "Catch-up is a one-time fixed fee of <strong>$2,000&ndash;$20,000+</strong>. Because catch-up reconstructs periods that were never recorded, the figure is driven mainly by how many months or years are behind &mdash; each period is rebuilt from source documents in order. The free file review confirms the depth and the condition of the records, then the written scope states the exact fee." },
    { q: "Why isn&rsquo;t cleanup priced by the hour or per transaction?", a: "Because the work isn&rsquo;t transcription &mdash; it&rsquo;s diagnosis and reconstruction. By the time a file needs cleanup, errors have compounded: a drifted reconciliation has thrown off every month since, miscategorized history has flowed into filed reports. Untangling that is forensic, so we price the whole project as one fixed fee against a written scope. Hourly billing would penalize you for the difficulty of the mess; a fixed fee puts the risk on us." },
    { q: "What determines where my cleanup or catch-up falls in the range?", a: "Four things: how far behind the books are (months versus years), how severe the issues are (one drifted reconciliation versus a rebuilt chart of accounts or a corrupted file), how many bank/credit accounts and entities are involved, and the state of the source records. The free file review surfaces all four and the written scope reflects them &mdash; which is why we look before we quote." },
    { q: "What&rsquo;s the difference between cleanup and catch-up pricing?", a: "<a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">Cleanup</a> ($1,500&ndash;$15,000+) fixes books that exist but are wrong &mdash; the work is correction. <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-up</a> ($2,000&ndash;$20,000+) records books that were never done &mdash; the work is reconstruction. Many files need both, and when they do the file review scopes them as one project with a single fixed fee, sequenced so the foundation is sound before the backlog is built on top of it." },
    { q: "How fast do I get an exact cleanup quote, and how?", a: "Within 3 business days of a free file review. The file review is the diagnostic &mdash; it reads the actual condition of your QuickBooks file, which is what makes an honest fixed fee possible. You can&rsquo;t price an untangling you haven&rsquo;t looked at, so the review always comes first; then the exact number arrives in writing, with no hourly billing. Prefer to talk it through first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Is cleanup a one-time project or an ongoing engagement?", a: "It&rsquo;s a one-time fixed-fee project with defined start and completion dates. Once the books are current and CPA-ready, the project can transition straight into recurring monthly bookkeeping so they never drift back &mdash; but that&rsquo;s optional, quoted separately, and runs month to month with no long-term lock-in." },
    { q: "Does the cleanup fee include filing my taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a tax-filing one &mdash; cleanup and catch-up get your books CPA-ready, and your CPA or EA files the return. We&rsquo;re also independent of Intuit: we hold active Intuit certifications and use QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/pricing/cleanup/#webpage",
            url: "https://techbrot.com/pricing/cleanup/",
            name: "Bookkeeping Cleanup & Catch-Up Pricing",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#pcl-tldr-body", "#pcl-ai-summary"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/pricing/cleanup/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://techbrot.com/pricing/" },
              { "@type": "ListItem", position: 3, name: "Cleanup & Catch-Up", item: "https://techbrot.com/pricing/cleanup/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/pricing/cleanup/#service",
            name: "Bookkeeping Cleanup & Catch-Up Pricing",
            serviceType: "QuickBooks cleanup and catch-up bookkeeping",
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", audienceType: "U.S. small and mid-sized businesses with behind or tangled books" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "OfferCatalog",
              name: "Cleanup & catch-up fixed-fee pricing",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "QuickBooks / bookkeeping cleanup",
                  category: "One-time forensic cleanup project",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: stripTags("$1,500&ndash;$15,000+ &mdash; one-time fixed fee, written scope before work begins, no hourly billing"),
                  },
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Catch-up bookkeeping",
                  category: "One-time historical reconstruction project",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: stripTags("$2,000&ndash;$20,000+ &mdash; one-time fixed fee, written scope before work begins, no hourly billing"),
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            },
          },
          { "@id": "https://techbrot.com/frameworks/compounding-reconciliation-drift/#term" },
          { "@id": "https://techbrot.com/frameworks/historical-accounting-debt/#term" },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/pricing/cleanup/#faq",
            mainEntity: data.faq.map((item) => ({
              "@type": "Question",
              name: stripTags(item.q),
              acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
            })),
          },
        ],
      };
    },
  },
};
