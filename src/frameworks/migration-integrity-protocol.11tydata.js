/* /frameworks/migration-integrity-protocol/ — fan-out of the approved
 * coined-framework DefinedTerm proof (/frameworks/compounding-reconciliation-drift/).
 *
 * "Migration Integrity Protocol" is TechBrot's NAMED VERIFICATION METHOD for
 * accounting-software migrations — a coined methodology, owned IP, NOT a
 * statistic, study, or dataset. The destination QuickBooks file is PROVEN to
 * tie back to the source (balances, A/R, A/P, key totals) before sign-off,
 * rather than assumed from a raw import. ZERO numbers are invented. It is the
 * canonical home of a method referenced from the /quickbooks/migration/ silo.
 *
 * Schema mirrors the proof DefinedTerm pattern:
 *  (a) the shared DefinedTermSet — @id .../frameworks/#set,
 *      name "TechBrot Accounting & QuickBooks Frameworks", url /frameworks/;
 *  (b) inLanguage + datePublished/dateModified = 2026-06-19 on the DefinedTerm.
 * Graph: WebPage + DefinedTerm + BreadcrumbList + FAQPage. t-guide layout.
 * Founder-name-zero. Not affiliated with Intuit Inc. (nor any source vendor).
 * No Review/AggregateRating. Canonical pricing only (migration $2,500–$10,000+;
 * ref /pricing/). The verification sequence is the one allowed numbered system. */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&amp;/g, "&").replace(/&middot;/g, "·")
    .replace(/&nbsp;/g, " ").replace(/&rarr;/g, "→").replace(/<\/?em>/g, "").replace(/\s+/g, " ").trim();
}

const URL = "https://techbrot.com/frameworks/migration-integrity-protocol/";
const SET_URL = "https://techbrot.com/frameworks/";

const TERM_NAME = "Migration Integrity Protocol";

// The canonical DefinedTerm description — precise, method-first, no numbers.
const TERM_DESCRIPTION =
  "The Migration Integrity Protocol is TechBrot's named verification method for accounting-software migrations: the destination QuickBooks file is proven to match the source system before sign-off, rather than assumed from a raw import. The source baseline — trial balance, A/R and A/P aging, bank balances, and key totals — is documented first; data is then mapped and imported; the new file is reconciled back against that baseline, account by account; every discrepancy is resolved before sign-off; and the first post-migration period is verified. \"Integrity\" means the migrated file provably ties to the source. A raw conversion tool moves data but does not verify it — which is why Intuit recommends a ProAdvisor verify data after any third-party conversion. It is a coined framework TechBrot follows, not a statistic or study.";

// FAQ — 6+ distinct questions; verbatim match to the visible accordion.
const FAQ = [
  {
    q: "Is the Migration Integrity Protocol a statistic or a study?",
    a: "No. It is a <strong>named verification method</strong> &mdash; a framework the Certified QuickBooks ProAdvisor team at TechBrot follows on accounting-software migrations. It is not a dataset, a survey, or a measured rate. &ldquo;Integrity&rdquo; describes a standard the migrated file has to meet &mdash; provably tying back to the source &mdash; not a number we claim to have measured.",
  },
  {
    q: "What does it mean for a migrated file to have integrity?",
    a: "It means the destination QuickBooks file provably matches the system you came from. Balances, accounts receivable, accounts payable, and the key totals that drive the financials are reconciled <em>against the source</em> &mdash; not assumed from a raw import and not trusted just because a conversion tool reported success. A file has integrity only once it has been checked against the source and ties.",
  },
  {
    q: "Why isn't running a conversion tool enough on its own?",
    a: "Because a conversion tool moves data; it does not prove the result is correct. Lists can map to the wrong accounts, opening balances can land in the wrong place, and history can duplicate or truncate &mdash; while the tool still reports success. Intuit itself recommends that a QuickBooks ProAdvisor verify the data after any third-party conversion, precisely because a conversion completing is not the same as a conversion being right.",
  },
  {
    q: "What actually transfers in a migration, and what doesn't?",
    a: "Chart of accounts, customer and vendor lists, item lists, and open balances usually map across, but each has to be checked rather than assumed. Detailed history, prior reconciliations, attachments, and custom reports are often rebuilt rather than imported intact. Some platform-specific records and integrations do not transfer at all and have to be re-established. We are honest about which is which before any work begins &mdash; no migration is truly &ldquo;lossless&rdquo; or &ldquo;seamless.&rdquo;",
  },
  {
    q: "What happens to integrations like payments, e-commerce, and payroll?",
    a: "Third-party integrations and app connections rarely carry over from the source system. Re-establishing and testing them on the QuickBooks side &mdash; payment processors, e-commerce, payroll, reporting tools &mdash; is part of a complete migration under the protocol, verified in the first post-migration period rather than left to surface as a problem later.",
  },
  {
    q: "How does the protocol prove the new file is correct?",
    a: "By documenting the source baseline first, then reconciling the destination back to it. A Certified ProAdvisor captures the source trial balance, A/R and A/P aging, and bank balances as of cutover, maps and imports the data, then checks the new QuickBooks file account by account until it agrees. Every discrepancy is resolved before sign-off, and the first full period is reconciled to confirm the file holds going forward.",
  },
  {
    q: "What goes wrong if a migration skips verification?",
    a: "The common failure is a file that looks migrated but is quietly wrong &mdash; opening balances that never tied, A/R or A/P that doesn&rsquo;t match what is owed, history that duplicated or dropped. None of it announces itself; it surfaces later as books that won&rsquo;t reconcile, by which point it has compounded into a <a href=\"/quickbooks/migration/migration-cleanup/\">migration cleanup</a> on top of the move. The protocol exists so the proving happens at cutover, when it is cheapest.",
  },
  {
    q: "How much does a verified migration cost?",
    a: "TechBrot migration engagements are scoped against the actual source file, the data volume, and the integrations involved, ranging roughly $2,500&ndash;$10,000+ depending on the platform and complexity; see <a href=\"/pricing/\">pricing</a> for how scope maps to fee. A <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> or a discovery call is where scoping starts &mdash; we tell you what will transfer and what won&rsquo;t before any work begins.",
  },
];

module.exports = {
  layout: "layouts/t-prose.njk",
  permalink: "/frameworks/migration-integrity-protocol/",
  slug: "fw-mip",
  tierClass: "section--tier-guide",
  bodyClass: "page--mofu",
  // AI summary authored IN THE BODY at the frozen speakable id #mip-ai-summary
  // (pageGraph cssSelector uses the short prefix, not the slug).
  metaReviewed: "2026-06-19",
  byline: {
    name: "By the Certified QuickBooks ProAdvisor team",
    meta: "A TechBrot coined framework &middot; independent firm, not affiliated with Intuit Inc.",
  },
  sec: {
    faqH: "Migration Integrity Protocol questions.",
  },
  title: "Migration Integrity Protocol · QuickBooks Framework",
  description:
    "Migration Integrity Protocol — TechBrot's coined framework for proving a migrated QuickBooks file ties back to the source before sign-off.",
  published: "2026-06-19",
  updated: "2026-06-19",
  hero: {
    eyebrow: "Framework &middot; A TechBrot verification method",
    heading: "Migration Integrity Protocol",
    subheading:
      "Our named method for proving a migrated QuickBooks file ties back to the source &mdash; balances, A/R, A/P, and key totals reconciled against the system you came from, not assumed from a raw import.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Frameworks" }, // NON-LINKED — /frameworks/ hub ships in the fan-out.
    { name: "Migration Integrity Protocol" },
  ],
  inBrief: {
    text:
      "<strong>The Migration Integrity Protocol</strong> is TechBrot&rsquo;s coined verification method for accounting-software migrations: the destination QuickBooks file is proven to match the source &mdash; balances, A/R, A/P, and key totals reconciled against the system you came from &mdash; before sign-off, rather than assumed from a raw import. Document the source baseline, map and import, reconcile destination to source, resolve every discrepancy, then verify the first period.",
    source:
      "A named methodology maintained by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. or any source vendor. It is a framework, not a statistic or study.",
  },
  faq: FAQ,
  ctaBand: {
    eyebrow: "From framework to a file that ties",
    heading: "Get a migration that is proven, not assumed.",
    lede:
      "Whether you are moving from Desktop to Online or from another platform, a free file review or discovery call tells you what will transfer, what has to be rebuilt, and what won&rsquo;t come across &mdash; with a written, fixed-fee scope before any work begins. Independent firm; not Intuit.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=quickbooks-migration", class: "btn--ghost" },
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
            "cssSelector": ["#mip-def-body", "#mip-ai-summary"],
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
