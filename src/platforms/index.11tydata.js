/* /platforms/ — PLATFORMS HUB (bespoke t-hub). The de-risk layer: TechBrot is an
 * accounting-technology advisory firm; QuickBooks is the platform we're certified
 * on TODAY. Other platforms append to this page ONLY when a real certification or
 * partnership lands. CollectionPage + BreadcrumbList + ItemList + FAQPage +
 * speakable. HONESTY (absolute): independent firm, not Intuit; ZERO fabricated
 * certifications/partnerships — no Xero/Gusto/Bill/Ramp/etc. listed as platform
 * pages until the credential is real; founder-name-zero (David only in
 * #david-westgate); canonical pricing/refs only. */
const { stripTags } = require("../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/platforms/";

const platformGroups = [
  {
    id: "certified-today",
    eyebrow: "Certified today",
    heading: "The platform we're certified on now.",
    lede: "One real credential, not a logo wall. This is the platform our team is genuinely certified on.",
    platforms: [
      { title: "QuickBooks", body: "Our primary, certified platform. TechBrot is a <strong>Certified QuickBooks ProAdvisor</strong> firm &mdash; QuickBooks Online and Desktop &mdash; and this is the credential we actually hold and work in every day. We don&rsquo;t sell QuickBooks; we configure, clean up, and optimize it in <em>your</em> file. Independent firm, not Intuit.", href: "/platforms/quickbooks/", cta: "QuickBooks at TechBrot &rarr;" },
    ],
  },
  {
    id: "coming-as-real",
    eyebrow: "Added only when real",
    heading: "More platforms, only when the credential is.",
    lede: "We list a platform here the day a real certification or partnership lands — and not one day sooner.",
    platforms: [
      { title: "Other platforms?", body: "We&rsquo;re asked about Xero, Gusto, Bill, Ramp, and similar tools. We are <strong>not certified or partnered on them today</strong>, so they get no platform page here &mdash; listing a credential we don&rsquo;t hold would be dishonest. When a real certification or partnership lands, the platform appears on this page with the same depth as QuickBooks. Until then, this space stays honest and empty." },
      { title: "Not sure which software fits?", body: "Being certified on QuickBooks doesn&rsquo;t mean QuickBooks is right for everyone. We&rsquo;re platform-led advisory &mdash; if a different tool genuinely suits your business better, we&rsquo;ll tell you. See our independent take on <a href=\"/accounting-systems/\">which accounting software fits</a> before you commit.", href: "/accounting-systems/", cta: "Compare accounting systems &rarr;" },
    ],
  },
];

// Flatten the platforms that are actual destination pages (have an href) for the
// ItemList — honesty: only real certified/destination platforms enter the schema.
const allPlatforms = platformGroups
  .reduce(function (acc, g) { return acc.concat(g.platforms); }, [])
  .filter(function (p) { return !!p.href; });

const faq = [
  { q: "What platforms is TechBrot certified on?", a: "QuickBooks. TechBrot is an independent <strong>Certified QuickBooks ProAdvisor</strong> firm &mdash; QuickBooks Online and Desktop &mdash; and that is the platform certification we hold today. We don&rsquo;t maintain a wall of vendor logos we aren&rsquo;t actually credentialed on; this page lists the platforms we genuinely work in, and right now that is QuickBooks." },
  { q: "Do you support Xero or other accounting software?", a: "We&rsquo;re QuickBooks-certified today, so QuickBooks is where we do credentialed platform work. We&rsquo;re happy to talk through other tools &mdash; Xero, Gusto, Bill, Ramp, and the rest &mdash; but we will only add a platform <em>page</em> to this hub when we hold a real certification or partnership on it. We never claim a credential we don&rsquo;t have. If you want an honest read on which tool fits, see <a href=\"/accounting-systems/\">which accounting software fits</a>." },
  { q: "Are you Intuit?", a: "No. TechBrot is an independent accounting-technology advisory firm and a Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. We work in the platform; Intuit makes it." },
  { q: "Why list platforms separately?", a: "Because we&rsquo;re platform-led advisory, not tied to one vendor forever. Separating platforms from our service pages keeps us honest about what we&rsquo;re actually certified on today versus what we may add later, and it makes room to grow the list the right way &mdash; one real credential at a time &mdash; rather than implying capabilities we don&rsquo;t have." },
  { q: "Will you tell me if another platform fits me better?", a: "Yes. Being certified on QuickBooks doesn&rsquo;t make it the right answer for every business, and we&rsquo;ll say so plainly when it isn&rsquo;t. We give an honest fit recommendation &mdash; even when that means a tool we aren&rsquo;t credentialed on. Start with our independent comparison of <a href=\"/accounting-systems/\">which accounting software fits</a>." },
  { q: "Are you adding more platforms?", a: "Only when the credential is real. We&rsquo;ll add a platform to this hub &mdash; with the same depth as QuickBooks &mdash; on the day a genuine certification or partnership lands, and never before. There are no fabricated certifications or partnerships on this site, and there never will be." },
  { q: "Do I have to use QuickBooks to work with TechBrot?", a: "QuickBooks is where we do certified platform work, so most engagements run inside <a href=\"/quickbooks/\">QuickBooks</a> &mdash; that&rsquo;s the credential we actually hold, and our bookkeeping and <a href=\"/accounting/\">accounting services</a> are built around it. If you&rsquo;re on a different tool, we&rsquo;ll give you an honest read on whether to stay put or switch rather than forcing a move. We won&rsquo;t pretend to do credentialed platform work on software we aren&rsquo;t certified on." },
  { q: "Can you migrate my books from another platform into QuickBooks?", a: "Yes. If you decide QuickBooks is the right fit, we handle the move so your history, balances, and lists come across cleanly instead of arriving as a mess to clean up later. See <a href=\"/quickbooks/migration/\">QuickBooks migration</a> for how we bring books across from another platform, or call (877) 751-5575 to plan the switch. Migration is fixed-fee against a written scope agreed before any data moves." },
];

module.exports = {
  summary: "TechBrot is an independent <strong>accounting-technology advisory firm</strong> &mdash; <strong>not Intuit</strong>. We&rsquo;re platform-led: the right software should serve your books, not lock you in. <strong>QuickBooks is the platform we&rsquo;re certified on today</strong>, through the Certified QuickBooks ProAdvisor program, and it&rsquo;s the only platform with a real credential behind it right now. We&rsquo;ll add other platforms to this page &mdash; Xero, Gusto, and others people ask about &mdash; <em>only</em> when a genuine certification or partnership lands. We will never list a credential we don&rsquo;t hold. And because being certified on QuickBooks doesn&rsquo;t make it right for everyone, if another tool genuinely fits you better, we&rsquo;ll tell you &mdash; start with <a href=\"/accounting-systems/\">which accounting software fits</a>.",
  platformGroups,
  relatedNote: "Want the detail? See <a href=\"/quickbooks/\">our QuickBooks practice</a> for what we do on the platform we&rsquo;re certified on today, and <a href=\"/accounting-systems/\">accounting systems we work with</a> for an honest, platform-neutral read on which tool fits your business. When you&rsquo;re ready, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly how your current platform is set up.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Platforms We're Certified On","description":"TechBrot is an independent accounting-technology advisory firm — not Intuit. QuickBooks is the platform we're certified on today; additional platforms are added only when the certification or partnership is real. No fabricated credentials.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#platforms-hub-summary"]}},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Platforms"}]},
        {"@type":"ItemList","@id":URL+"#platforms","name":"Platforms TechBrot is certified on","numberOfItems":allPlatforms.length,"itemListElement":allPlatforms.map(function(p,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(p.title),"url":ORIGIN+p.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
