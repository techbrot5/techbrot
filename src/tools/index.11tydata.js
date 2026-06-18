/* /tools/ — free tools & calculators hub (round 83, NEW type). t-hub.
 * Schema only here; copy lives in index.njk front-matter. CollectionPage +
 * BreadcrumbList + ItemList (live tools, real URLs only) + FAQPage. Honesty:
 * the ItemList carries ONLY published tools, never the in-development roadmap
 * (no schema for pages that don't exist). */

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
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": "https://techbrot.com/tools/#webpage",
            url: "https://techbrot.com/tools/",
            name: "Free Accounting & QuickBooks Tools & Calculators",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#tools-hub-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
            ],
          },
          {
            "@type": "ItemList",
            "@id": "https://techbrot.com/tools/#tools",
            name: "TechBrot free tools",
            itemListElement: (data.tools || []).map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: stripTags(t.name),
              url: "https://techbrot.com" + t.href,
            })),
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/#faq",
            mainEntity: (data.faq || []).map((item) => ({
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
