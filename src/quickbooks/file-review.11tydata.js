/* /quickbooks/file-review/ page data: per-page JSON-LD @graph.
 * WebPage (speakable: TL;DR + in-brief) + BreadcrumbList (Home →
 * QuickBooks → File review) + Service (Free QuickBooks File Review,
 * provider = global Organization @id) + FAQPage (the bottom FAQ
 * ACCORDION verbatim; the quick-5 stays OUT — ruling A). Schema text
 * MUST match the rendered accordion after normalize() — battery
 * enforces `faq-schema-verbatim`. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→")
    .replace(/&middot;/g, "·")
    .replace(/&amp;/g, "&")
    .trim();
}

module.exports = {
  eleventyComputed: {
    pageGraph(data) {
      const url = data.site.url + data.page.url;
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: data.title,
            description: data.description,
            inLanguage: "en-US",
            isPartOf: { "@id": `${data.site.url}/#website` },
            about: { "@id": `${data.site.url}/#organization` },
            breadcrumb: { "@id": `${url}#breadcrumb` },
            mainEntity: { "@id": `${url}#service-file-review` },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#file-review-tldr-body", "#file-review-in-brief-text"],
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${data.site.url}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "QuickBooks",
                item: `${data.site.url}/quickbooks/`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "File review",
              },
            ],
          },
          {
            "@type": "Service",
            "@id": `${url}#service-file-review`,
            name: "Free QuickBooks File Review",
            serviceType: "QuickBooks file diagnostic review",
            description:
              "Free QuickBooks file review by a Certified ProAdvisor. Diagnostic across reconciliation, uncategorized and duplicate transactions, Undeposited Funds and Opening Balance Equity, A/R-A/P aging, payroll and sales-tax liability accounts, and file health. Plain-English findings and an optional written fixed-fee scope within 3 business days. No obligation.",
            provider: { "@id": `${data.site.url}/#organization` },
            areaServed: { "@type": "Country", name: "United States" },
            audience: {
              "@type": "BusinessAudience",
              audienceType: "U.S. small and mid-sized businesses using QuickBooks",
            },
            url,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              description:
                "Free diagnostic review of a QuickBooks file by a Certified ProAdvisor; optional fixed-fee scope follows within 3 business days.",
            },
          },
          {
            // FAQPage = bottom accordion VERBATIM; quick-5 stays OUT
            // (ruling A; battery enforces faq-schema-verbatim).
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: data.faq.map((item) => ({
              "@type": "Question",
              name: stripTags(item.q),
              acceptedAnswer: {
                "@type": "Answer",
                text: stripTags(item.a),
              },
            })),
          },
        ],
      };
    },
  },
};
