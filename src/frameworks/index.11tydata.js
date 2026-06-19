/* /frameworks/ — TechBrot coined-frameworks hub / DefinedTermSet landing.
 * The four frameworks are TechBrot's named diagnostic concepts + methodologies
 * (owned IP, citation assets). CollectionPage + DefinedTermSet (hasDefinedTerm
 * -> each framework page's #term @id, the ONE canonical node per term) +
 * BreadcrumbList; global Org/WebSite injected by base.njk. */

const FRAMEWORKS = [
  {
    term: "Compounding Reconciliation Drift",
    slug: "compounding-reconciliation-drift",
    tie: "Cleanup",
    blurb: "How small, un-caught reconciliation gaps in QuickBooks compound period-over-period &mdash; why a neglected file gets non-linearly harder and costlier to fix the longer it sits.",
  },
  {
    term: "Historical Accounting Debt",
    slug: "historical-accounting-debt",
    tie: "Catch-up",
    blurb: "The accumulating &ldquo;debt&rdquo; a business takes on when bookkeeping falls behind &mdash; lost context, missing documents, aged bank feeds &mdash; and why catch-up gets harder to pay down over time.",
  },
  {
    term: "TechBrot Setup Protocol",
    slug: "techbrot-setup-protocol",
    tie: "Setup",
    blurb: "The ordered methodology for setting up a QuickBooks file correctly the first time &mdash; the dependency sequence that builds a file right rather than retrofitting it later.",
  },
  {
    term: "Migration Integrity Protocol",
    slug: "migration-integrity-protocol",
    tie: "Migration",
    blurb: "The verification method that proves a migrated QuickBooks file ties to its source &mdash; balances, A/R, A/P, and totals reconciled against the old system before sign-off, not assumed from a raw import.",
  },
];

module.exports = {
  frameworks: FRAMEWORKS,
  eleventyComputed: {
    pageGraph: (data) => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://techbrot.com/frameworks/#webpage",
          "url": "https://techbrot.com/frameworks/",
          "name": "TechBrot Accounting & QuickBooks Frameworks",
          "description": "The named diagnostic concepts and methodologies TechBrot uses to describe and scope bookkeeping, cleanup, setup, and migration work.",
          "isPartOf": { "@id": "https://techbrot.com/#website" },
          "about": { "@id": "https://techbrot.com/frameworks/#set" },
          "publisher": { "@id": "https://techbrot.com/#organization" },
          "inLanguage": "en-US",
          "breadcrumb": { "@id": "https://techbrot.com/frameworks/#breadcrumb" },
        },
        {
          "@type": "DefinedTermSet",
          "@id": "https://techbrot.com/frameworks/#set",
          "name": "TechBrot Accounting & QuickBooks Frameworks",
          "url": "https://techbrot.com/frameworks/",
          "hasDefinedTerm": FRAMEWORKS.map((f) => ({
            "@id": "https://techbrot.com/frameworks/" + f.slug + "/#term",
          })),
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://techbrot.com/frameworks/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techbrot.com/" },
            { "@type": "ListItem", "position": 2, "name": "Frameworks", "item": "https://techbrot.com/frameworks/" },
          ],
        },
      ],
    }),
  },
};
