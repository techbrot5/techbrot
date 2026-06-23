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
    // faq nulled for the LAYOUT slot: the FAQ is rendered in the BODY (per-page
    // paginated term.faq) — NOT via t-prose's `faq` frontmatter. FAQPage schema is
    // still built from term.faq directly in buildGraph(), so structured data is intact.
    faq: () => null,
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
    // inBrief omitted: the definition keeps its OWN frozen id (#gl-<slug>-def-body,
    // the speakable selector) in the body, so a separate TL;DR would duplicate it.
    inBrief: () => null,
    // ctaBand (light final CTA) carries term.call verbatim — title/sub are content
    // equity (RISK #2) and must survive the migration intact. Phone action only.
    ctaBand: (d) => ({
      eyebrow: "Put it to work",
      heading: d.term.call.title,
      lede: d.term.call.sub,
      actions: [
        { label: "Speak to a ProAdvisor", tel: true, class: "btn--primary" },
      ],
    }),
    pageGraph: (d) => buildGraph(d.term),
  },
};
