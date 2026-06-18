/* /quickbooks/compare/ — QUICKBOOKS COMPARISON HUB (t-hub).
 * Routes to all 7 comparison pages (built this wave), grouped: QuickBooks vs
 * five alternatives (Xero, Wave, Sage, FreshBooks, Zoho Books) + QuickBooks vs
 * itself (Online vs Desktop, QBO plans). CollectionPage + ItemList (all 7) +
 * BreadcrumbList + FAQPage + speakable. HONESTY: independent Certified
 * QuickBooks ProAdvisor firm with a DISCLOSED preference for QuickBooks; the
 * comparisons aim to be FAIR and name when a competitor fits better; NOT Intuit,
 * NOT affiliated with Xero/Wave/Sage/FreshBooks/Zoho; NO fabricated competitor
 * pricing anywhere; canonical TechBrot pricing only; founder-name-zero (David
 * only in #david-westgate JSON-LD). */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/quickbooks/compare/";

const compareGroups = [
  {
    id: "vs-alternatives",
    eyebrow: "QuickBooks vs alternatives",
    heading: "QuickBooks against the other tools.",
    lede: "Five honest, side-by-side reads. We prefer QuickBooks and we say so &mdash; but where one of these fits your business better, we name it.",
    cards: [
      { title: "QuickBooks vs Xero", body: "The closest head-to-head. Xero is a genuinely strong double-entry cloud platform with clean multi-currency &mdash; we tell you the kinds of businesses where it&rsquo;s the better call, and where QuickBooks&rsquo; ecosystem and ProAdvisor depth win.", href: "/quickbooks/compare/quickbooks-vs-xero/", cta: "QuickBooks vs Xero &rarr;" },
      { title: "QuickBooks vs Wave", body: "Wave is free, and for a true solo side-hustle that can be the right answer &mdash; we say so plainly. We&rsquo;re honest about where Wave runs out of room as you grow and what you give up at the free tier.", href: "/quickbooks/compare/quickbooks-vs-wave/", cta: "QuickBooks vs Wave &rarr;" },
      { title: "QuickBooks vs Sage", body: "Sage is a broad family of products, from small-business cloud to mid-market ERP. We compare like-for-like and flag the cases where a Sage product genuinely outfits a more complex or industry-specific operation.", href: "/quickbooks/compare/quickbooks-vs-sage/", cta: "QuickBooks vs Sage &rarr;" },
      { title: "QuickBooks vs FreshBooks", body: "FreshBooks is built around invoicing and is a delight for freelancers and client-services solos &mdash; we&rsquo;ll tell you when that focus is exactly right, and where its lighter accounting depth becomes a ceiling.", href: "/quickbooks/compare/quickbooks-vs-freshbooks/", cta: "QuickBooks vs FreshBooks &rarr;" },
      { title: "QuickBooks vs Zoho Books", body: "Zoho Books is capable and shines inside the wider Zoho suite. We&rsquo;re straight about when that ecosystem pull makes Zoho the smarter fit, and where QuickBooks&rsquo; accountant network gives you more support.", href: "/quickbooks/compare/quickbooks-vs-zoho-books/", cta: "QuickBooks vs Zoho Books &rarr;" },
    ],
  },
  {
    id: "vs-itself",
    eyebrow: "QuickBooks vs itself",
    heading: "Choosing within QuickBooks.",
    lede: "Already on QuickBooks, or set on it? These two reads help you pick the right product and the right tier.",
    cards: [
      { title: "QuickBooks Online vs Desktop", body: "Not a slam dunk for the cloud in every case. We lay out who Desktop still genuinely suits &mdash; and why, for most businesses today, Online is the path we recommend &mdash; without pretending the trade-offs don&rsquo;t exist.", href: "/quickbooks/compare/online-vs-desktop/", cta: "Online vs Desktop &rarr;" },
      { title: "QuickBooks Online plans compared", body: "Simple Start, Essentials, Plus, and Advanced, by capability &mdash; what each tier actually includes so you don&rsquo;t overpay for features you won&rsquo;t use or under-buy and hit a wall. No fabricated prices; pricing is set by Intuit.", href: "/quickbooks/compare/online-plans/", cta: "QBO plans compared &rarr;" },
    ],
  },
];

// Flatten all 7 comparison cards in declared order for the ItemList.
const allCompares = compareGroups.reduce(function (acc, g) { return acc.concat(g.cards); }, []);

const faq = [
  { q: "Aren&rsquo;t you biased toward QuickBooks?", a: "Yes &mdash; and we disclose it. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm, so QuickBooks is what we specialize in and what we prefer. We&rsquo;re upfront about that rather than pretending to be neutral. But preference isn&rsquo;t the same as dishonesty: these comparisons are written to be fair, with each competitor&rsquo;s real strengths described accurately, and we name the cases where another tool is genuinely the better fit for your business. We are not affiliated with Xero, Wave, Sage, FreshBooks, or Zoho." },
  { q: "Which accounting software is best?", a: "There isn&rsquo;t one answer &mdash; it depends on fit. The &ldquo;best&rdquo; software is the one that matches how your business actually works: your size, industry, whether you carry inventory or run projects, whether you need an accountant network, and how you want to grow. A free invoicing-first tool can be perfect for a solo freelancer and completely wrong for a growing product company. That&rsquo;s why each comparison is framed around fit, not a universal winner. If you want a straight read on your situation, start with a free file review." },
  { q: "Can you help me switch or migrate?", a: "Yes. If you decide QuickBooks is the right fit &mdash; or you&rsquo;re moving between QuickBooks products &mdash; we handle the migration so your history, balances, and lists come across cleanly instead of arriving as a mess to clean up later. See <a href=\"/quickbooks/migration/\">QuickBooks migration</a> for how we move books from another platform, and book a discovery call when you&rsquo;re ready to plan the switch." },
  { q: "Are you affiliated with these companies or with Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor. We are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. We are also not affiliated with, sponsored by, or endorsed by Xero, Wave, Sage, FreshBooks, or Zoho. QuickBooks and Intuit are registered trademarks of Intuit Inc., and the other product names are trademarks of their respective owners; we name them only to compare honestly." },
  { q: "Do you only work in QuickBooks?", a: "Yes &mdash; QuickBooks is our specialization. We&rsquo;re Certified QuickBooks ProAdvisors and we keep our depth there on purpose, because that focus is what lets us configure, clean up, and maintain QuickBooks files well. These comparisons exist so you can make an informed, honest choice before committing &mdash; and if QuickBooks turns out to be the right fit, you&rsquo;ll have a named ProAdvisor running your file." },
  { q: "Do these comparisons quote competitor prices?", a: "No. Software pricing and packaging change often, and we won&rsquo;t publish numbers we can&rsquo;t stand behind. Our comparisons are framed around capability and fit, not price tags. For our own work we quote only our canonical TechBrot pricing; for any vendor&rsquo;s current plan pricing, check that vendor directly. No fabricated stats or prices appear anywhere on these pages." },
];

module.exports = {
  summary: "Choosing accounting software is a <strong>fit decision, not a winner-takes-all</strong>. As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong>, and not affiliated with Xero, Wave, Sage, FreshBooks, or Zoho &mdash; we have a clear preference for QuickBooks, and we disclose it. But these seven comparisons are written to be <strong>fair</strong>: each competitor&rsquo;s real strengths are described accurately, and where another tool is genuinely the better fit for your business, we tell you. Five reads put QuickBooks head-to-head against the alternatives (Xero, Wave, Sage, FreshBooks, Zoho Books); two more help you choose <em>within</em> QuickBooks (Online vs Desktop, and the QBO plans compared). No competitor prices are quoted anywhere. Already set on switching? We can help you <a href=\"/quickbooks/migration/\">migrate to QuickBooks</a>; not sure which tier fits, see <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a>.",
  compareGroups,
  relatedNote: "New to QuickBooks itself? Start with the <a href=\"/quickbooks/\">QuickBooks overview</a> for how it all fits together. If you&rsquo;ve decided to move, <a href=\"/quickbooks/migration/\">QuickBooks migration</a> covers how we bring your books across cleanly, and <a href=\"/quickbooks/which-plan-is-right/\">which QuickBooks plan is right</a> helps you land on the correct tier. When you want a straight, no-pitch read on your own situation, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> tells you whether QuickBooks fits &mdash; and we&rsquo;ll say so if it doesn&rsquo;t.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"QuickBooks Comparisons: Fair Software Comparisons by ProAdvisors","description":"QuickBooks vs Xero, Wave, Sage, FreshBooks, and Zoho Books, plus Online vs Desktop and the QBO plans compared — fair, fit-first comparisons by an independent Certified QuickBooks ProAdvisor firm with a disclosed preference for QuickBooks. Not Intuit; not affiliated with these companies.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-compare-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":ORIGIN+"/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Compare"}]},
        {"@type":"ItemList","@id":URL+"#comparisons","name":"QuickBooks comparisons","numberOfItems":allCompares.length,"itemListElement":allCompares.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.title),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
