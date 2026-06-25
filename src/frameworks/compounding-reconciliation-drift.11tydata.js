/* /frameworks/compounding-reconciliation-drift/ — PROOF page for a NEW type:
 * the TechBrot coined-framework DefinedTerm page (type-definer).
 *
 * "Compounding Reconciliation Drift" is TechBrot's NAMED DIAGNOSTIC CONCEPT —
 * a coined lens, owned IP, NOT a statistic, study, or dataset. The compounding
 * is a DESCRIBED qualitative dynamic; ZERO numbers are invented. It is the
 * canonical home of a term already referenced on /quickbooks/cleanup/,
 * /accounting/bookkeeping/cleanup-bookkeeping/, and /pricing/cleanup/.
 *
 * Schema mirrors the glossary DefinedTerm pattern with two differences:
 *  (a) a NEW DefinedTermSet — @id .../frameworks/#set,
 *      name "TechBrot Accounting & QuickBooks Frameworks", url /frameworks/;
 *  (b) inLanguage + datePublished/dateModified = 2026-06-19 on the DefinedTerm.
 * Graph: WebPage + DefinedTerm + BreadcrumbList + FAQPage. t-guide layout.
 * Founder-name-zero. Not affiliated with Intuit Inc. No Review/AggregateRating.
 * Canonical pricing only (cleanup $1,500–$15,000+; ref /pricing/). */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&amp;/g, "&").replace(/&middot;/g, "·")
    .replace(/&nbsp;/g, " ").replace(/&rarr;/g, "→").replace(/<\/?em>/g, "").replace(/\s+/g, " ").trim();
}

const URL = "https://techbrot.com/frameworks/compounding-reconciliation-drift/";
const SET_URL = "https://techbrot.com/frameworks/";

const TERM_NAME = "Compounding Reconciliation Drift";

// The canonical DefinedTerm description — precise, mechanism-first, no numbers.
const TERM_DESCRIPTION =
  "Compounding Reconciliation Drift is TechBrot's named diagnostic concept for how small, un-caught reconciliation gaps in QuickBooks compound over time. Each period a discrepancy goes unreconciled — an unmatched deposit, a duplicate transaction, an Undeposited Funds item that never clears, a bank balance that won't tie — it carries forward into the next period's opening balances and interacts with new errors, so the books drift further from reality and the effort and cost to correct grow non-linearly the longer it goes unaddressed, like compounding interest on a debt. It is a coined framework TechBrot uses to describe and diagnose this pattern, not a statistic or study.";

// FAQ — 6+ distinct questions; verbatim match to the visible accordion.
const FAQ = [
  {
    q: "Is Compounding Reconciliation Drift a statistic or a study?",
    a: "No. It is a <strong>named diagnostic concept</strong> &mdash; a framework the Certified QuickBooks ProAdvisor team at TechBrot uses to describe a pattern we see repeatedly in real QuickBooks files. It is not a dataset, a survey, or a measured rate. The &ldquo;compounding&rdquo; is a described dynamic, the way one period&rsquo;s unresolved gap feeds the next, not a number we claim to have measured.",
  },
  {
    q: "Why do reconciliation gaps compound instead of staying the same size?",
    a: "Because a QuickBooks file is cumulative. An unreconciled discrepancy doesn&rsquo;t sit in isolation &mdash; it becomes part of the opening balance the next period is built on. The next month&rsquo;s reconciliation now starts from a wrong baseline, so new entries get matched against bad numbers, and the error surface grows. A forced or skipped reconciliation often buries the original gap rather than resolving it, so it keeps interacting with everything entered afterward.",
  },
  {
    q: "How does the drift actually show up in QuickBooks?",
    a: "Common symptoms include a Reconciliation Discrepancies report that keeps growing, a bank balance that won&rsquo;t tie to the statement, an Undeposited Funds balance that never clears, duplicate transactions from re-linked bank feeds, a swollen Opening Balance Equity account, and prior reconciliations that have been changed or undone. Individually each looks minor; together they are the signature of drift that has been carried forward.",
  },
  {
    q: "How do you diagnose how far a file has drifted?",
    a: "A Certified ProAdvisor traces each reconciliation backward to the last period the book balance genuinely tied to the bank statement, then identifies where the chain broke and how the gap propagated forward. We look at discrepancy reports, the Undeposited Funds and Opening Balance Equity accounts, bank-feed duplicates, and changed reconciliations. A <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> is where that diagnosis starts.",
  },
  {
    q: "Can the drift be reversed once it has compounded?",
    a: "Yes &mdash; but the work is to <em>unwind</em> it rather than patch the latest month. A <a href=\"/quickbooks/cleanup/\">QuickBooks file cleanup</a> rebuilds each reconciliation period by period back to a clean, tied baseline, resolving the gaps in the order they were introduced. Because the engagement is fixed-fee against a written scope, the cost is known before work begins.",
  },
  {
    q: "Why does waiting make a cleanup more expensive?",
    a: "Because the effort to correct grows with how long the drift has run, not just with how many transactions exist. Every additional period built on a bad baseline is another period that has to be re-examined and re-tied, and the interactions multiply. This is why TechBrot cleanup engagements range broadly &mdash; roughly $1,500&ndash;$15,000+ depending on how far the file has drifted; see <a href=\"/pricing/\">pricing</a>. Catching it at the monthly close keeps a file out of cleanup territory entirely.",
  },
  {
    q: "How does a monthly close prevent the drift from starting?",
    a: "A real monthly close reconciles every account against its statement before the period is signed off, so any discrepancy is caught and resolved while it is still a single, isolated item &mdash; before it can carry into the next period&rsquo;s baseline. The compounding only happens when reconciliations are skipped, forced, or done against the wrong source. Consistent reconciliation is the prevention; cleanup is the cure once prevention lapsed.",
  },
  {
    q: "Is this the same thing as messy or behind books?",
    a: "Related, but more specific. Behind or messy books describe a <em>state</em>; Compounding Reconciliation Drift describes the <em>mechanism</em> &mdash; the period-over-period propagation that explains <em>why</em> neglected QuickBooks files get disproportionately harder and costlier to fix the longer they sit. It is the lens TechBrot uses to scope cleanup work honestly.",
  },
];

module.exports = {
  layout: "layouts/t-prose.njk",
  permalink: "/frameworks/compounding-reconciliation-drift/",
  slug: "fw-crd",
  tierClass: "section--tier-guide",
  bodyClass: "page--mofu",
  // AI summary is authored IN THE BODY at the frozen speakable id #fw-crd-ai-summary
  // (pageGraph cssSelector), not via the t-prose `aiSummary` frontmatter slot which
  // would render #<slug>-ai-summary.
  metaReviewed: "2026-06-19",
  byline: {
    name: "By the Certified QuickBooks ProAdvisor team",
    meta: "A TechBrot coined framework &middot; independent firm, not affiliated with Intuit Inc.",
  },
  sec: {
    faqH: "Compounding Reconciliation Drift questions.",
  },
  title: "Compounding Reconciliation Drift · TechBrot Framework",
  description:
    "Compounding Reconciliation Drift — TechBrot's coined framework for how un-caught QuickBooks reconciliation gaps compound period over period, undone by cleanup.",
  published: "2026-06-19",
  updated: "2026-06-19",
  hero: {
    eyebrow: "Framework &middot; A TechBrot diagnostic lens",
    heading: "Compounding Reconciliation Drift",
    subheading:
      "Our named concept for how small, un-caught reconciliation gaps in QuickBooks compound period over period &mdash; so the books drift further from reality and a fix gets non-linearly harder the longer it waits.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Frameworks" }, // NON-LINKED — /frameworks/ hub ships in the fan-out.
    { name: "Compounding Reconciliation Drift" },
  ],
  inBrief: {
    text:
      "<strong>Compounding Reconciliation Drift</strong> is TechBrot&rsquo;s coined framework for how an un-caught reconciliation gap in QuickBooks &mdash; an unmatched deposit, a duplicate, an Undeposited Funds item that never clears, a balance that won&rsquo;t tie &mdash; carries into the next period&rsquo;s baseline and compounds, so the books drift further from reality and the cost to correct grows non-linearly the longer it goes unaddressed.",
    source:
      "A named diagnostic concept maintained by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. It is a framework, not a statistic or study.",
  },
  faq: FAQ,
  ctaBand: {
    eyebrow: "From framework to a tied file",
    heading: "Find out how far your file has actually drifted.",
    lede:
      "If any of this describes your QuickBooks file, a free file review tells you where the drift started and how far it has carried &mdash; with a written, fixed-fee scope before any work begins. Independent firm; not Intuit.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=cleanup", class: "btn--ghost" },
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
            "cssSelector": ["#fw-crd-def-body", "#fw-crd-ai-summary"],
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
