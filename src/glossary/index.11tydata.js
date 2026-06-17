/* /glossary/ — glossary index / DefinedTermSet landing (growth phase, 2026-06-17).
 * Reads the shared `glossary` global data (src/_data/glossary.js) — ONE source for
 * both the index grid and the paginated entries. CollectionPage + DefinedTermSet +
 * BreadcrumbList; global Org/WebSite injected by base.njk. */

module.exports = {
  eleventyComputed: {
    pageGraph: (data) => ({
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
          "hasDefinedTerm": (data.glossary || []).map((t) => ({
            "@id": "https://techbrot.com/glossary/" + t.slug + "/#term",
          })),
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
