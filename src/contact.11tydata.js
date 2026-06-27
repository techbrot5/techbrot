/* /contact/ page data: per-page JSON-LD @graph.
 * BASELINE EQUITY: the live page shipped ContactPage (#webpage) +
 * BreadcrumbList (#breadcrumb) — both reproduced with their baseline
 * values verbatim: name "Contact TechBrot", the live description, the
 * #contact-promise speakable selector, primaryImageOfPage contact-og.png
 * (asset does not exist locally yet — TODO 9 ties to it), and
 * mainEntity = global Organization. ADDITIVE: FAQPage carrying the new
 * bottom accordion verbatim (battery `faq-schema-verbatim` enforces). */

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
    .replace(/&nbsp;/g, " ")
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
            "@type": "ContactPage",
            "@id": `${url}#webpage`,
            url,
            name: "Contact TechBrot",
            description:
              "Discovery call booking and contact form for TechBrot, an independent U.S. accounting platform delivering bookkeeping, QuickBooks ProAdvisor services, payroll, sales tax compliance, and fractional CFO engagements.",
            isPartOf: { "@id": `${data.site.url}/#website` },
            about: { "@id": `${data.site.url}/#organization` },
            publisher: { "@id": `${data.site.url}/#organization` },
            inLanguage: "en-US",
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: `${data.site.url}/assets/og/cards/contact.png`,
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#contact-promise"],
            },
            mainEntity: { "@id": `${data.site.url}/#organization` },
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
                name: "Contact",
                item: url,
              },
            ],
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
