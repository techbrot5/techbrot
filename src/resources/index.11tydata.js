/* /resources/ — FREE RESOURCES HUB (t-hub).
 * Routes to the four resource types: guides, checklists, glossary, research.
 * CollectionPage + ItemList (all 4) + BreadcrumbList + FAQPage + speakable.
 * HONESTY: independent firm, not Intuit; everything free + genuinely useful,
 * nothing gated; founder-name-zero (David only in #david-westgate); canonical
 * pricing only. */
const { stripTags } = require("../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/resources/";

const resourceGroups = [
  {
    id: "library",
    eyebrow: "The library",
    heading: "Four ways we help, all free.",
    lede: "Plain-English explanations, practical tools, and our own numbers — no form, no fluff.",
    resources: [
      { title: "Guides", body: "Plain-English guides to accounting and QuickBooks &mdash; how the books actually work, what each task means, and where it&rsquo;s worth getting help. Written by Certified ProAdvisors.", href: "/resources/guides/", cta: "Browse the guides &rarr;" },
      { title: "Checklists", body: "Practical, do-this-now checklists &mdash; month-end close, year-end prep, new-business setup, QuickBooks cleanup &mdash; so nothing slips through the cracks.", href: "/resources/checklists/", cta: "Browse the checklists &rarr;" },
      { title: "Glossary", body: "A plain-English glossary of accounting and QuickBooks terms &mdash; what each one means, why it matters, and how it shows up in your books, defined without the jargon.", href: "/glossary/", cta: "Open the glossary &rarr;" },
      { title: "Research &amp; data", body: "Our original research and data &mdash; numbers we&rsquo;ve gathered and analyzed ourselves, not recycled stats, on what small-business accounting actually looks like.", href: "/resources/research/", cta: "See the research &rarr;" },
    ],
  },
];

// Flatten all resources in declared order for the ItemList.
const allResources = resourceGroups.reduce(function (acc, g) { return acc.concat(g.resources); }, []);

const faq = [
  { q: "Are these resources free?", a: "Yes &mdash; every resource here is completely free. There&rsquo;s nothing gated behind a form, no email wall, and no &ldquo;download&rdquo; that turns into a sales call. We write these because clear, accurate information helps people keep better books, and that&rsquo;s good for everyone. Use them with no obligation. Independent firm, not Intuit." },
  { q: "Who writes them?", a: "Our Certified QuickBooks ProAdvisor team. Everything here is written and reviewed by Certified ProAdvisors at TechBrot, an independent accounting firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. We explain accounting and QuickBooks accurately and in plain English, drawn from the work we do in real client files." },
  { q: "Do you have a glossary?", a: "Yes. Our <a href=\"/glossary/\">plain-English glossary</a> defines the accounting and QuickBooks terms you actually run into &mdash; what each one means, why it matters, and how it shows up in your books &mdash; without the jargon. It&rsquo;s free and you can browse it any time." },
  { q: "Where&rsquo;s your original data?", a: "In our <a href=\"/resources/research/\">research and data hub</a>. That&rsquo;s where we publish original research &mdash; numbers we&rsquo;ve gathered and analyzed ourselves about how small-business accounting and QuickBooks usage actually work &mdash; rather than recycling stats from elsewhere." },
  { q: "Are you Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. These resources explain QuickBooks accurately; Intuit makes the software." },
  { q: "Can you help with my actual books, not just the reading?", a: "Yes. The resources are the free, do-it-yourself layer; when you want hands-on help, a Certified ProAdvisor can take it from there. The honest first step is a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> &mdash; we look at your real QuickBooks file and tell you, in plain English, what&rsquo;s working and what needs cleanup, with no obligation. From there any work is quoted as a written fixed fee." },
];

module.exports = {
  summary: "This is our free resource library &mdash; everything we&rsquo;ve published to help you understand your books, in one place. There are four parts: plain-English <a href=\"/resources/guides/\">guides</a> to accounting and QuickBooks, practical <a href=\"/resources/checklists/\">checklists</a> for the work that has to get done, a plain-English <a href=\"/glossary/\">glossary</a> of the terms you actually run into, and our <a href=\"/resources/research/\">original research and data</a>. Everything is <strong>free and genuinely useful</strong> &mdash; written by Certified ProAdvisors, with nothing gated behind a form. As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong> &mdash; we publish these because clear, accurate information is good for everyone, whether or not you ever hire us.",
  resourceGroups,
  relatedNote: "Looking for a specific term? Jump straight to the <a href=\"/glossary/\">glossary</a>. Want the numbers behind how small businesses really keep their books? See our <a href=\"/resources/research/\">research and data</a>. And when you&rsquo;re ready for help with your own file, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly where setup or cleanup will help.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Free Accounting & QuickBooks Resources","description":"Free, genuinely useful accounting & QuickBooks resources from Certified ProAdvisors — plain-English guides, practical checklists, a glossary, and original data. Independent firm, not Intuit.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#resources-hub-summary"]}},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Resources"}]},
        {"@type":"ItemList","@id":URL+"#resources","name":"TechBrot free resources","numberOfItems":allResources.length,"itemListElement":allResources.map(function(r,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(r.title),"url":ORIGIN+r.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
