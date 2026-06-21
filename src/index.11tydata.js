/* Homepage data: state pills (ONLY URLs that exist in repo or locked queue —
 * battery-verified, no dangling links) + per-page JSON-LD @graph (Sheet 4):
 * WebPage (speakable: TL;DR + in-brief) + Breadcrumb + ItemList + FAQPage
 * (the five AI-summary Q/As — ruling A). Global entities referenced by @id
 * only. NO AggregateRating (under 5 reviews — rule stands). */
const fs = require("fs");
const path = require("path");

const queue = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "_build", "build-new-queue.json"), "utf8")
);

const REPO_STATES = ["california", "florida", "illinois", "new-york", "texas"];
const queueStates = queue.urls
  .filter((u) => /^\/find-an-accountant\/[a-z-]+\/$/.test(u))
  .map((u) => u.split("/")[2]);
const slugs = [...new Set([...REPO_STATES, ...queueStates])].sort();
const titleCase = (s) =>
  s.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

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
    .replace(/&amp;/g, "&")
    .trim();
}

module.exports = {
  states: slugs.map((slug) => ({ slug, name: titleCase(slug) })),
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
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".speakable"],
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home" },
            ],
          },
          {
            "@type": "ItemList",
            "@id": `${url}#silos`,
            name: "TechBrot service areas",
            itemListElement: data.silos.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.name,
              url: data.site.url + s.url,
            })),
          },
          {
            // FAQPage carries the bottom FAQ ACCORDION verbatim (ruling:
            // exact rendered text, phone included). The quick-5 block stays
            // OUT — one FAQPage per page, no duplicate-question schema.
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: data.faq.map((item) => ({
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
