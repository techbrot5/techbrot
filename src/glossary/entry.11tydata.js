/* Per-term computed data for the paginated glossary entries (src/glossary/entry.njk).
 * Everything the t-guide layout + schema need is derived from the pagination item
 * `term`. FAQPage is built from term.faq (verbatim match); DefinedTerm description
 * is the joined definition. Global Org/WebSite injected by base.njk. */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&amp;/g, "&").replace(/&middot;/g, "·")
    .replace(/&em;/g, "").replace(/<\/?em>/g, "").replace(/\s+/g, " ").trim();
}

const BASE = "https://techbrot.com/glossary/";

function buildGraph(term) {
  const url = BASE + term.slug + "/";
  const graph = [
    {
      "@type": "WebPage",
      "@id": url + "#webpage",
      "url": url,
      "name": term.term,
      "description": stripTags(term.definition[0]),
      "isPartOf": { "@id": "https://techbrot.com/#website" },
      "about": { "@id": url + "#term" },
      "publisher": { "@id": "https://techbrot.com/#organization" },
      "inLanguage": "en-US",
      "datePublished": term.published,
      "dateModified": term.updated,
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#gl-" + term.slug + "-def-body"] },
      "breadcrumb": { "@id": url + "#breadcrumb" },
      "mainEntity": { "@id": url + "#term" },
    },
    {
      "@type": "DefinedTerm",
      "@id": url + "#term",
      "name": term.term,
      "description": stripTags(term.definition.join(" ")),
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "@id": BASE + "#set",
        "name": "TechBrot Accounting & QuickBooks Glossary",
        "url": BASE,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": url + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techbrot.com/" },
        { "@type": "ListItem", "position": 2, "name": "Glossary", "item": BASE },
        { "@type": "ListItem", "position": 3, "name": term.term, "item": url },
      ],
    },
  ];
  if (term.faq && term.faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": url + "#faq",
      "mainEntity": term.faq.map((it) => ({
        "@type": "Question",
        "name": stripTags(it.q),
        "acceptedAnswer": { "@type": "Answer", "text": stripTags(it.a) },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

module.exports = {
  eleventyComputed: {
    permalink: (d) => "/glossary/" + d.term.slug + "/",
    slug: (d) => "gl-" + d.term.slug,
    title: (d) => d.term.title,
    description: (d) => d.term.description,
    faq: (d) => d.term.faq || null,
    hero: (d) => ({
      eyebrow: "Glossary &middot; Bookkeeping &amp; QuickBooks term",
      heading: d.term.term,
      subheading: d.term.shortDef,
      actions: [
        { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
        { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
      ],
    }),
    breadcrumb: (d) => [
      { name: "Home", href: "/" },
      { name: "Glossary", href: "/glossary/" },
      { name: d.term.term },
    ],
    inBrief: (d) => ({
      text: d.term.definition[0],
      source: "Maintained by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc.",
    }),
    ctaBand: (d) => ({
      eyebrow: "From definition to done",
      heading: "Put it to work on your own books.",
      lede: "If this term describes something in your own QuickBooks file, a free file review tells you exactly where you stand &mdash; with a written fixed-fee scope. Independent firm; not Intuit.",
      actions: [
        { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
        { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
      ],
    }),
    pageGraph: (d) => buildGraph(d.term),
  },
};
