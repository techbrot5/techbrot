/* /blog/ hub schema (round 87). Blog + BreadcrumbList + ItemList of published
 * posts (real URLs only, newest first). Copy lives in index.njk front-matter. */
module.exports = {
  eleventyComputed: {
    pageGraph: (data) => {
      const posts = (data.collections && data.collections.post) || [];
      const ordered = posts.slice().reverse();
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["CollectionPage", "Blog"],
            "@id": "https://techbrot.com/blog/#webpage",
            url: "https://techbrot.com/blog/",
            name: "The TechBrot Blog",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#blog-hub-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/blog/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://techbrot.com/blog/" },
            ],
          },
          {
            "@type": "ItemList",
            "@id": "https://techbrot.com/blog/#posts",
            name: "TechBrot blog posts",
            itemListElement: ordered.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: "https://techbrot.com" + p.url,
            })),
          },
        ],
      };
    },
  },
};
