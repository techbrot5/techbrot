/* /reviews/ — verified client reviews listing. HONESTY: 2 real Clutch reviews
 * only; NO AggregateRating until 5+ (CLAUDE.md rule 4). No self-serving Review
 * schema markup — the reviews are shown visibly and sourced to Clutch (the
 * third-party platform); schema stays WebPage/CollectionPage + Breadcrumb only,
 * so we never assert a rich-result rating we haven't earned. reviewedBy the
 * global Person node (#david-westgate) for E-E-A-T; founder-name-zero in visible
 * content. Replaces the prior /reviews/ -> /trust/ 301 (founder ruling, round 80). */
module.exports = {
  eleventyComputed: {
    pageGraph(data) {
      const url = "https://techbrot.com/reviews/";
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["CollectionPage", "WebPage"],
            "@id": url + "#webpage",
            "url": url,
            "name": data.title,
            "description": data.description,
            "isPartOf": { "@id": "https://techbrot.com/#website" },
            "about": { "@id": "https://techbrot.com/#organization" },
            "publisher": { "@id": "https://techbrot.com/#organization" },
            "inLanguage": "en-US",
            "reviewedBy": { "@id": "https://techbrot.com/#david-westgate" },
            "lastReviewed": "2026-06-18",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#reviews-summary-text"] }
          },
          {
            "@type": "BreadcrumbList",
            "@id": url + "#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techbrot.com/" },
              { "@type": "ListItem", "position": 2, "name": "Reviews", "item": url }
            ]
          }
        ]
      };
    }
  }
};
