/* Shared data for every blog post in src/blog/posts/ (round 87, NEW type).
 * Each post .md sets: title (SEO), headline (visible H1), description, deck,
 * category (slug — also a tag), datePublished/dateModified (+ display strings),
 * faq[], optional aiSummary[], optional relatedPosts[], ctaBand. This file
 * centralizes the layout, the computed permalink/breadcrumb/categoryLabel/slug,
 * and the schema graph (BlogPosting + BreadcrumbList + FAQPage). Author/publisher
 * are the firm (founder-name-zero); no fabricated stats or authors. */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→").replace(/&middot;/g, "·").replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

module.exports = {
  layout: "layouts/t-article.njk",
  chrome: "full",
  callBar: true,
  pageTier: "guide",
  tierClass: "section--tier-guide",
  bodyClass: "page--mofu",
  eleventyComputed: {
    permalink: (data) => `/blog/${data.page.fileSlug}/`,
    slug: (data) => `blog-${data.page.fileSlug}`,
    categoryLabel: (data) => {
      const c = (data.blogCategories || []).find((x) => x.slug === data.category);
      return c ? c.label : "Blog";
    },
    breadcrumb: (data) => {
      const c = (data.blogCategories || []).find((x) => x.slug === data.category);
      return [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: c ? c.label : "Blog", href: `/blog/category/${data.category}/` },
        { name: data.headline ? stripTags(data.headline) : data.title },
      ];
    },
    pageGraph: (data) => {
      const url = `https://techbrot.com/blog/${data.page.fileSlug}/`;
      const c = (data.blogCategories || []).find((x) => x.slug === data.category);
      const graph = [
        {
          "@type": "BlogPosting",
          "@id": url + "#article",
          headline: stripTags(data.headline || data.title),
          description: data.description,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          articleSection: c ? c.label : "Blog",
          inLanguage: "en-US",
          mainEntityOfPage: { "@id": url + "#webpage" },
          author: { "@id": "https://techbrot.com/#organization" },
          publisher: { "@id": "https://techbrot.com/#organization" },
          isPartOf: { "@id": "https://techbrot.com/#website" },
        },
        {
          "@type": "WebPage",
          "@id": url + "#webpage",
          url: url,
          name: stripTags(data.headline || data.title),
          inLanguage: "en-US",
          isPartOf: { "@id": "https://techbrot.com/#website" },
          publisher: { "@id": "https://techbrot.com/#organization" },
          speakable: { "@type": "SpeakableSpecification", cssSelector: [`#${data.slug || "blog"}-prose`] },
        },
        {
          "@type": "BreadcrumbList",
          "@id": url + "#breadcrumb",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://techbrot.com/blog/" },
            { "@type": "ListItem", position: 3, name: c ? c.label : "Blog", item: `https://techbrot.com/blog/category/${data.category}/` },
            { "@type": "ListItem", position: 4, name: stripTags(data.headline || data.title), item: url },
          ],
        },
      ];
      if (data.faq && data.faq.length) {
        graph.push({
          "@type": "FAQPage",
          "@id": url + "#faq",
          mainEntity: data.faq.map((item) => ({
            "@type": "Question",
            name: stripTags(item.q),
            acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
          })),
        });
      }
      return { "@context": "https://schema.org", "@graph": graph };
    },
  },
};
