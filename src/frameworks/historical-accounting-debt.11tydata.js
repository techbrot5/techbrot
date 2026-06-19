/* /frameworks/historical-accounting-debt/ — a TechBrot coined-framework
 * DefinedTerm page (type-definer), built on the approved Compounding
 * Reconciliation Drift proof.
 *
 * "Historical Accounting Debt" is TechBrot's NAMED DIAGNOSTIC CONCEPT —
 * a coined lens, owned IP, NOT a statistic, study, or dataset. The
 * compounding is a DESCRIBED qualitative dynamic (lost context as the
 * "interest"); ZERO numbers are invented. It is the canonical home of a
 * term that ties to /accounting/bookkeeping/catch-up-bookkeeping/ (primary),
 * /quickbooks/cleanup/, and /pricing/.
 *
 * Schema mirrors the framework DefinedTerm pattern:
 *  (a) the SHARED DefinedTermSet — @id .../frameworks/#set,
 *      name "TechBrot Accounting & QuickBooks Frameworks", url /frameworks/;
 *  (b) inLanguage + datePublished/dateModified = 2026-06-19 on the DefinedTerm.
 * Graph: WebPage + DefinedTerm + BreadcrumbList + FAQPage. t-guide layout.
 * Founder-name-zero. Not affiliated with Intuit Inc. No Review/AggregateRating.
 * Canonical pricing only (catch-up $2,000–$20,000+; ref /pricing/). */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&amp;/g, "&").replace(/&middot;/g, "·")
    .replace(/&nbsp;/g, " ").replace(/&rarr;/g, "→").replace(/<\/?em>/g, "").replace(/\s+/g, " ").trim();
}

const URL = "https://techbrot.com/frameworks/historical-accounting-debt/";
const SET_URL = "https://techbrot.com/frameworks/";

const TERM_NAME = "Historical Accounting Debt";

// The canonical DefinedTerm description — precise, mechanism-first, no numbers.
const TERM_DESCRIPTION =
  "Historical Accounting Debt is TechBrot's named diagnostic concept for the accumulated, unpaid liability a business takes on when bookkeeping falls behind. Every month of untracked, uncategorized, unreconciled transactions is a liability that compounds — like deferred maintenance or unpaid debt — because the longer it sits, the more surrounding context is lost: memories fade, source documents go missing, bank-feed history ages out, and the people who knew what a transaction was move on. As a result, the catch-up work to pay it down grows harder and more expensive the longer the books are left unattended. It is a coined framework TechBrot uses to describe and diagnose this pattern, not a statistic or study.";

// FAQ — 6+ distinct questions; verbatim match to the visible accordion.
const FAQ = [
  {
    q: "Is Historical Accounting Debt a statistic or a study?",
    a: "No. It is a <strong>named diagnostic concept</strong> &mdash; a framework the Certified QuickBooks ProAdvisor team at TechBrot uses to describe a pattern we see repeatedly in real businesses. It is not a dataset, a survey, or a measured rate. The &ldquo;debt&rdquo; and its &ldquo;compounding&rdquo; are a described dynamic &mdash; the way unrecorded periods get harder to reconstruct &mdash; not a number we claim to have measured.",
  },
  {
    q: "Why does falling behind on bookkeeping compound instead of staying the same?",
    a: "Because the cost to record a transaction depends on context, and context decays. The day a transaction happens, you know exactly what it was. Months later the memory fades, the receipt is gone, the bank feed can no longer pull it automatically, and the person who handled it may have moved on. So a period left unrecorded gets more expensive to reconstruct the longer it waits &mdash; the lost context is the &ldquo;interest&rdquo; on the debt.",
  },
  {
    q: "How does the debt actually show up in a business?",
    a: "Common signs include books that are months or years behind, entire periods with no transactions recorded, no period ever formally closed and tied, a tax or financing deadline looming with no accurate financials ready, bank feeds that can no longer reach back far enough, and nobody left who remembers what the transactions were. Individually each looks manageable; together they are the signature of accrued debt.",
  },
  {
    q: "How do you diagnose how far behind the books are?",
    a: "A Certified ProAdvisor traces the records back to the last period the books were genuinely accurate and closed &mdash; or confirms no such point exists yet &mdash; then assesses how much context can still be recovered: which statements, receipts, and prior returns survive, and whether bank-feed history has aged out. A <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> is where that diagnosis starts.",
  },
  {
    q: "Can the debt be paid down once it has accrued?",
    a: "Yes &mdash; but the work is to <em>reconstruct</em> the missing history rather than just record the current month. <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up\">Catch-up bookkeeping</a> rebuilds each period back to a clean, closed baseline, working from the last accurate point forward to today. Because the engagement is fixed-fee against a written scope, the cost is known before work begins.",
  },
  {
    q: "Why does waiting make catch-up more expensive?",
    a: "Because the cost grows with how long the books have been left, not just with how big the business is. Each additional unrecorded period loses more context &mdash; faded memories, missing receipts, aged-out bank feeds, departed staff &mdash; so more has to be reconstructed from scratch. This is why TechBrot catch-up engagements range broadly &mdash; roughly $2,000&ndash;$20,000+ depending on how far behind the books are; see <a href=\"/pricing/\">pricing</a>. Recording it as it happens keeps a business out of catch-up territory entirely.",
  },
  {
    q: "How does monthly bookkeeping prevent the debt from accruing?",
    a: "Monthly bookkeeping records each transaction while the context is still fresh &mdash; while you remember what it was, the receipt still exists, and the bank feed can still pull it &mdash; so the period is closed before any debt has the chance to build. The compounding only happens when months are skipped. Consistent monthly bookkeeping is the prevention; catch-up is the cure once prevention lapsed.",
  },
  {
    q: "Is this the same thing as behind or messy books?",
    a: "Related, but more specific. Behind or messy books describe a <em>state</em>; Historical Accounting Debt describes the <em>mechanism</em> &mdash; the way lost context makes each unrecorded period costlier to reconstruct, which explains <em>why</em> neglected books get disproportionately harder and more expensive to bring current the longer they sit. It is the lens TechBrot uses to scope catch-up work honestly.",
  },
];

module.exports = {
  layout: "layouts/t-guide.njk",
  permalink: "/frameworks/historical-accounting-debt/",
  slug: "fw-had",
  tierClass: "section--tier-guide",
  bodyClass: "page--mofu",
  title: "Historical Accounting Debt — TechBrot Framework · TechBrot",
  description:
    "Historical Accounting Debt — TechBrot's coined framework for the unpaid liability that accrues when bookkeeping falls behind, and how catch-up pays it down.",
  published: "2026-06-19",
  updated: "2026-06-19",
  hero: {
    eyebrow: "Framework &middot; A TechBrot diagnostic lens",
    heading: "Historical Accounting Debt",
    subheading:
      "Our named concept for the accumulated, unpaid liability a business takes on when bookkeeping falls behind &mdash; a debt that compounds as context is lost, so catch-up gets harder and more expensive the longer it waits.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Frameworks" }, // NON-LINKED — /frameworks/ hub ships in the fan-out.
    { name: "Historical Accounting Debt" },
  ],
  inBrief: {
    text:
      "<strong>Historical Accounting Debt</strong> is TechBrot&rsquo;s coined framework for the accumulated, unpaid liability a business takes on when bookkeeping falls behind. Every month of untracked, uncategorized, unreconciled transactions compounds &mdash; like deferred maintenance or unpaid debt &mdash; because the longer it sits, the more context is lost (memories fade, documents go missing, bank feeds age out, the people who knew move on), so catch-up work to pay it down gets harder and more expensive over time.",
    source:
      "A named diagnostic concept maintained by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. It is a framework, not a statistic or study.",
  },
  faq: FAQ,
  ctaBand: {
    eyebrow: "From framework to current books",
    heading: "Find out how far behind your books have actually fallen.",
    lede:
      "If any of this describes your books, a free file review tells you how far behind you are and how much context can still be recovered &mdash; with a written, fixed-fee scope before any work begins. Independent firm; not Intuit.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=catch-up", class: "btn--ghost" },
    ],
  },
  eleventyComputed: {
    pageGraph: (d) => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": URL + "#webpage",
          "url": URL,
          "name": d.title,
          "description": d.description,
          "isPartOf": { "@id": "https://techbrot.com/#website" },
          "about": { "@id": URL + "#term" },
          "publisher": { "@id": "https://techbrot.com/#organization" },
          "inLanguage": "en-US",
          "datePublished": "2026-06-19",
          "dateModified": "2026-06-19",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["#had-def-body", "#had-ai-summary"],
          },
          "breadcrumb": { "@id": URL + "#breadcrumb" },
          "mainEntity": { "@id": URL + "#term" },
        },
        {
          "@type": "DefinedTerm",
          "@id": URL + "#term",
          "name": TERM_NAME,
          "description": TERM_DESCRIPTION,
          "inLanguage": "en-US",
          "datePublished": "2026-06-19",
          "dateModified": "2026-06-19",
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "@id": SET_URL + "#set",
            "name": "TechBrot Accounting & QuickBooks Frameworks",
            "url": SET_URL,
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": URL + "#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techbrot.com/" },
            { "@type": "ListItem", "position": 2, "name": "Frameworks", "item": SET_URL },
            { "@type": "ListItem", "position": 3, "name": TERM_NAME, "item": URL },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": URL + "#faq",
          "mainEntity": FAQ.map((it) => ({
            "@type": "Question",
            "name": stripTags(it.q),
            "acceptedAnswer": { "@type": "Answer", "text": stripTags(it.a) },
          })),
        },
      ],
    }),
  },
};
