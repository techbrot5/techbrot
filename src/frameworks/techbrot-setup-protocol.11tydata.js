/* /frameworks/techbrot-setup-protocol/ — fan-out of the coined-framework
 * DefinedTerm page type (proof: compounding-reconciliation-drift).
 *
 * "TechBrot Setup Protocol" is TechBrot's NAMED, ORDERED METHODOLOGY for
 * setting up a QuickBooks file correctly the first time — owned IP, a coined
 * framework, NOT a statistic, study, dataset, or guarantee, and NOT an
 * Intuit-official or certified procedure. The protocol's value is its SEQUENCE:
 * each stage depends on the one before, so the file is built right rather than
 * retrofitted. ZERO numbers are invented (the protocol stages are the one
 * allowed numbered/process system). It is the canonical home of a term tied to
 * /quickbooks/setup/ and the setup money pages.
 *
 * Schema mirrors the proof exactly:
 *  (a) shared DefinedTermSet — @id .../frameworks/#set,
 *      name "TechBrot Accounting & QuickBooks Frameworks", url /frameworks/;
 *  (b) inLanguage + datePublished/dateModified = 2026-06-19 on the DefinedTerm.
 * Graph: WebPage + DefinedTerm + BreadcrumbList + FAQPage. t-guide layout.
 * Founder-name-zero. Not affiliated with Intuit Inc. No Review/AggregateRating.
 * Canonical pricing only (setup $750–$5,000+; ref /pricing/). QB subscription
 * billed by Intuit separately — no Intuit prices quoted. */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&amp;/g, "&").replace(/&middot;/g, "·")
    .replace(/&nbsp;/g, " ").replace(/&rarr;/g, "→").replace(/<\/?em>/g, "").replace(/\s+/g, " ").trim();
}

const URL = "https://techbrot.com/frameworks/techbrot-setup-protocol/";
const SET_URL = "https://techbrot.com/frameworks/";

const TERM_NAME = "TechBrot Setup Protocol";

// The canonical DefinedTerm description — precise, sequence-first, no numbers.
const TERM_DESCRIPTION =
  "The TechBrot Setup Protocol is TechBrot's named, ordered methodology for setting up a QuickBooks file correctly the first time. It is a defined sequence in which each step depends on the one before — company and fiscal-year configuration, then a chart of accounts designed for the business, then opening balances as of a clean start date, then bank and credit-card connections, then products and services, then sales-tax setup, then users and permissions, then preferences and workflows — with each stage validated before the next begins. The order is the value, because the costliest things to fix after the fact are the chart of accounts and the opening balances, so building them right up front produces a file that does not need cleanup later. It is a coined framework TechBrot follows — not a statistic, a study, or an Intuit-official procedure.";

// FAQ — 6+ distinct questions; verbatim match to the visible accordion.
const FAQ = [
  {
    q: "What is the TechBrot Setup Protocol?",
    a: "It is our <strong>named, ordered method</strong> for setting up a QuickBooks file correctly the first time. It is owned terminology &mdash; the sequence the Certified QuickBooks ProAdvisor team at TechBrot follows so a file is built right rather than retrofitted. It is a framework we follow, not a statistic, a study, or a guarantee.",
  },
  {
    q: "Is this an official or certified QuickBooks setup procedure?",
    a: "No. The TechBrot Setup Protocol is TechBrot&rsquo;s own coined methodology &mdash; it is not an Intuit-official protocol and not a certification. We are an independent firm and are not affiliated with Intuit Inc. The name refers to the order our ProAdvisor team works in, nothing more.",
  },
  {
    q: "Why does the order of setup steps matter so much?",
    a: "Because the steps are dependent. The entity and fiscal-year settings frame every report, the chart of accounts is the spine every transaction hangs from, and opening balances anchor that chart to a real start date. Build feeds, items, or sales tax before those foundations are right and the later layers inherit the earlier mistake &mdash; so we validate each stage before the next begins.",
  },
  {
    q: "What are the stages of the protocol?",
    a: "In order: company and fiscal-year configuration; a chart of accounts designed for the business; opening balances as of a clean start date; bank and credit-card connections; products, services, and items; sales-tax setup; users and permissions; and finally preferences and workflows. Each one is checked before the next is allowed to start.",
  },
  {
    q: "What goes wrong if QuickBooks is set up out of order?",
    a: "You pre-load a cleanup into a brand-new file. A chart built before the business is understood gets reshaped later, forcing every posted transaction to be re-mapped; opening balances entered against an unfinished chart land in the wrong accounts; feeds connected too early route real money into placeholder accounts. The two most expensive things to fix after the fact are the chart of accounts and the opening balances, which is exactly why they come first.",
  },
  {
    q: "How does following the protocol avoid a cleanup later?",
    a: "Because the foundation is built and validated before anything posts against it. When the chart and opening balances are settled first, reports read correctly, reconciliations tie, and there is nothing to unwind. A file built once in the right order simply works; a <a href=\"/quickbooks/cleanup/\">QuickBooks file cleanup</a> is only needed when a file was built in the wrong order and has already drifted.",
  },
  {
    q: "How much does a QuickBooks setup cost?",
    a: "TechBrot setup engagements are fixed-fee against a written scope, ranging roughly $750&ndash;$5,000+ depending on the complexity of the business and the data being migrated; see <a href=\"/pricing/\">pricing</a> for how scope maps to fee. Your QuickBooks subscription is billed by Intuit separately and is not part of our fee.",
  },
  {
    q: "Is this the same as a setup checklist?",
    a: "Related, but more specific. A <a href=\"/quickbooks/setup/checklist/\">checklist</a> lists what to configure; the TechBrot Setup Protocol defines the <em>order and the dependencies</em> &mdash; why each stage has to come before the next and what breaks when it doesn&rsquo;t. It is the logic the checklist sits underneath.",
  },
];

module.exports = {
  layout: "layouts/t-prose.njk",
  permalink: "/frameworks/techbrot-setup-protocol/",
  slug: "fw-tsp",
  tierClass: "section--tier-guide",
  bodyClass: "page--mofu",
  // AI summary authored IN THE BODY at the frozen speakable id #tsp-ai-summary
  // (pageGraph cssSelector uses the short prefix, not the slug).
  metaReviewed: "2026-06-19",
  byline: {
    name: "By the Certified QuickBooks ProAdvisor team",
    meta: "A TechBrot coined framework &middot; independent firm, not affiliated with Intuit Inc.",
  },
  sec: {
    faqH: "TechBrot Setup Protocol questions.",
  },
  title: "TechBrot Setup Protocol · QuickBooks Setup Framework",
  description:
    "The TechBrot Setup Protocol — our named, ordered method for setting up a QuickBooks file right the first time, so the chart and balances never need cleanup.",
  published: "2026-06-19",
  updated: "2026-06-19",
  hero: {
    eyebrow: "Framework &middot; A TechBrot setup methodology",
    heading: "TechBrot Setup Protocol",
    subheading:
      "Our named, ordered method for setting up a QuickBooks file correctly the first time &mdash; a sequence where each stage depends on the one before, so the file is built right rather than retrofitted later.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Frameworks" }, // NON-LINKED — /frameworks/ hub ships in the fan-out.
    { name: "TechBrot Setup Protocol" },
  ],
  inBrief: {
    text:
      "The <strong>TechBrot Setup Protocol</strong> is TechBrot&rsquo;s coined framework for setting up a QuickBooks file correctly the first time &mdash; an ordered sequence (entity and fiscal year &rarr; a chart of accounts built for the business &rarr; opening balances at a clean start date &rarr; feeds, items, sales tax, users, and workflows) where each stage is validated before the next, so the file is built right rather than retrofitted.",
    source:
      "A named methodology maintained by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc., and not an Intuit-official or certified procedure. It is a framework, not a statistic or study.",
  },
  faq: FAQ,
  ctaBand: {
    eyebrow: "From protocol to a file built right",
    heading: "Have your QuickBooks file set up in the right order.",
    lede:
      "Whether you&rsquo;re starting fresh or fixing a file built out of order, a free file review tells you where it stands &mdash; with a written, fixed-fee scope before any work begins. Independent firm; not Intuit.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=quickbooks-setup", class: "btn--ghost" },
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
            "cssSelector": ["#tsp-def-body", "#tsp-ai-summary"],
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
