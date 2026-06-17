/* /glossary/ — glossary index / DefinedTermSet landing (growth phase, 2026-06-17).
 * The `terms` array grows as the glossary type fans out. CollectionPage +
 * DefinedTermSet + BreadcrumbList; global Org/WebSite injected by base.njk. */

const terms = [
  {
    term: "Bank reconciliation",
    href: "/glossary/bank-reconciliation/",
    blurb: "Matching your books to your bank statement for the period so the balances agree &mdash; the core accuracy control in bookkeeping.",
    id: "https://techbrot.com/glossary/bank-reconciliation/#term",
  },
];

module.exports = {
  terms,
  eleventyComputed: {
    pageGraph: () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://techbrot.com/glossary/#webpage",
          "url": "https://techbrot.com/glossary/",
          "name": "Accounting & QuickBooks Glossary",
          "description": "Plain-English definitions of the accounting and QuickBooks terms that come up in real engagements.",
          "isPartOf": { "@id": "https://techbrot.com/#website" },
          "about": { "@id": "https://techbrot.com/glossary/#set" },
          "publisher": { "@id": "https://techbrot.com/#organization" },
          "inLanguage": "en-US",
          "breadcrumb": { "@id": "https://techbrot.com/glossary/#breadcrumb" },
        },
        {
          "@type": "DefinedTermSet",
          "@id": "https://techbrot.com/glossary/#set",
          "name": "TechBrot Accounting & QuickBooks Glossary",
          "url": "https://techbrot.com/glossary/",
          "hasDefinedTerm": terms.map((t) => ({ "@id": t.id })),
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://techbrot.com/glossary/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techbrot.com/" },
            { "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://techbrot.com/glossary/" },
          ],
        },
      ],
    }),
  },
};
