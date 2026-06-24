/* /accounting-systems/ — ACCOUNTING SYSTEMS ADVISORY HUB (bespoke t-hub).
 * Platform-AGNOSTIC advisory silo: own the buyer BEFORE platform choice. Routes
 * to which-accounting-software, app-stack, migration-planning, and platforms.
 * CollectionPage + ItemList + BreadcrumbList + FAQPage + speakable. HONESTY:
 * independent firm, not Intuit; vendor-neutral, fit-first advice (we're
 * QuickBooks-certified and disclose it, and name when another platform fits
 * better); NO fabricated competitor pricing; founder-name-zero (David only in
 * #david-westgate); canonical pricing/CTA labels only. */
const { stripTags } = require("../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/accounting-systems/";

const featureGroups = [
  {
    id: "choose",
    eyebrow: "Choose the system",
    heading: "Get the fit right first.",
    lede: "The platform-agnostic decisions that come before any software commitment.",
    features: [
      { title: "Which accounting software", body: "The fit-first decision: which accounting platform actually matches how your business works, bills, and reports. We&rsquo;re QuickBooks-certified and we say so &mdash; but this is a vendor-neutral walk-through, and where another platform fits you better, we name it.", href: "/which-accounting-software/", cta: "Which accounting software &rarr;" },
      { title: "Your app stack", body: "The connected tools beyond core accounting &mdash; billing, payments, payroll, expense capture, inventory, reporting &mdash; and how they should integrate so data flows cleanly instead of being re-keyed. The right stack is built around your business, not bolted on.", href: "/app-stack/", cta: "Build your app stack &rarr;" },
    ],
  },
  {
    id: "run",
    eyebrow: "Run the system",
    heading: "Move and operate it cleanly.",
    lede: "Switching platforms, or standing one up, without breaking the books.",
    features: [
      { title: "Systems migration planning", body: "Moving from one accounting platform to another &mdash; or off spreadsheets &mdash; is where data gets lost and balances break. We plan the migration so history, balances, and reporting survive the move intact.", href: "/accounting-systems/migration-planning/", cta: "Plan a migration &rarr;" },
      { title: "Platforms we're certified on", body: "Where we hold certifications and run files day to day. We disclose exactly what we&rsquo;re certified on so you know where our hands-on depth is &mdash; and so the fit-first recommendation is transparent, not a sales pitch.", href: "/platforms/", cta: "See our platforms &rarr;" },
    ],
  },
];

// Flatten all decisions in declared order for the ItemList.
const allFeatures = featureGroups.reduce(function (acc, g) { return acc.concat(g.features); }, []);

const faq = [
  { q: "What is accounting-systems advisory?", a: "It&rsquo;s help with the system, not just the software. Most firms start from a tool; we start from how your business actually works &mdash; how you bill, get paid, pay vendors, track inventory or projects, and report &mdash; then help you choose the accounting platform and the connected <a href=\"/app-stack/\">app stack</a> that fit, and run them month to month. The goal is one clean system where data flows instead of being re-keyed. We&rsquo;re an independent firm, not Intuit." },
  { q: "Aren't you just going to recommend QuickBooks?", a: "We&rsquo;ll be straight with you: we prefer QuickBooks for most small businesses, we&rsquo;re a Certified QuickBooks ProAdvisor team, and we disclose that up front. But the advice is fit-first, not vendor-locked. We start from your business, not the brand &mdash; and where another platform genuinely fits you better, we say so and tell you why. You can see exactly what we&rsquo;re certified on under <a href=\"/platforms/\">platforms we&rsquo;re certified on</a> so the recommendation is transparent." },
  { q: "Do you implement what you recommend?", a: "Yes. We don&rsquo;t hand you a recommendation and walk away &mdash; we set up the platform and app stack we recommend, configure them around your workflows, and then run the books in your own file month to month with a named Certified ProAdvisor. Advice and implementation come from the same team, so nothing gets lost between the plan and the doing." },
  { q: "What's an app stack?", a: "Your app stack is the set of connected tools that surround your core accounting platform &mdash; things like online payments, payroll, expense and receipt capture, billing or invoicing apps, inventory, time tracking, and reporting. The stack matters as much as the accounting platform itself: when the tools integrate properly, data flows in automatically and stays accurate; when they don&rsquo;t, someone re-keys everything by hand and errors creep in. See <a href=\"/app-stack/\">your app stack</a> for how we build it." },
  { q: "Can you help migrate systems?", a: "Yes &mdash; and migration is exactly where doing it without a plan goes wrong. Moving between accounting platforms (or off spreadsheets) is where history, balances, and reporting break if it&rsquo;s rushed. We plan the migration so your data survives the move intact and the books stay reconciled on the other side. See <a href=\"/accounting-systems/migration-planning/\">systems migration planning</a> for how we approach it." },
  { q: "Are you Intuit?", a: "No. TechBrot is an independent accounting-technology advisory firm and Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. We&rsquo;re QuickBooks-certified and disclose it, but our platform advice is vendor-neutral and fit-first." },
];

module.exports = {
  summary: "Most accounting problems start before the software does &mdash; with the wrong system for the business. This is the platform-agnostic silo: we help you get the <em>system</em> right first, then run it. That means four decisions &mdash; <a href=\"/which-accounting-software/\">which accounting software</a> fits how you work, what belongs in your <a href=\"/app-stack/\">app stack</a> of connected tools, how to <a href=\"/accounting-systems/migration-planning/\">migrate</a> without breaking the books, and the <a href=\"/platforms/\">platforms we&rsquo;re certified on</a>. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong> &mdash; and we say so. We prefer QuickBooks for most small businesses and disclose that, but the advice is <strong>fit-first</strong>: where another platform fits your business better, we name it. Advice and implementation come from the same team.",
  featureGroups,
  relatedNote: "Already leaning toward QuickBooks? Compare the options side by side on <a href=\"/quickbooks/compare/\">QuickBooks comparisons</a>, and see exactly where our hands-on depth is under <a href=\"/platforms/\">platforms we&rsquo;re certified on</a>. When you&rsquo;re ready, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows how your current system is set up &mdash; and where the fit is wrong &mdash; before you change anything.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Accounting Systems Advisory: Choose & Run the Right Stack","description":"Platform-agnostic accounting-systems advisory from an independent Certified QuickBooks ProAdvisor firm — choosing the accounting platform and app stack that fit your business, fit-first, then running them.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#accounting-systems-hub-summary"]}},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Accounting Systems"}]},
        {"@type":"ItemList","@id":URL+"#decisions","name":"Accounting-systems decisions","numberOfItems":allFeatures.length,"itemListElement":allFeatures.map(function(f,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(f.title),"url":ORIGIN+f.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
