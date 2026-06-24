/* /resources/guides/ — ACCOUNTING & QUICKBOOKS GUIDES HUB (t-hub).
 * Routes to all 13 guide pages, grouped by topic. CollectionPage + ItemList
 * (all 13) + BreadcrumbList + FAQPage + speakable. HONESTY: independent firm,
 * not Intuit; guides genuinely useful and accurate; founder-name-zero (David
 * only in #david-westgate); canonical pricing only (Intuit/market figures
 * described and dated, never guessed). */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/resources/guides/";

const guideGroups = [
  {
    id: "getting-started",
    eyebrow: "Getting started",
    heading: "The fundamentals.",
    lede: "Where to begin if the books are new or never been set up right.",
    guides: [
      { title: "Bookkeeping basics", body: "What bookkeeping actually is, the core terms, and the monthly cycle every small business runs &mdash; explained plainly, with no accounting degree required.", href: "/resources/guides/bookkeeping-basics/", cta: "Bookkeeping basics &rarr;" },
      { title: "Small business accounting 101", body: "How accounting works end to end &mdash; cash vs. accrual, the three core reports, and how the pieces fit together so the numbers actually mean something.", href: "/resources/guides/small-business-accounting-101/", cta: "Accounting 101 &rarr;" },
      { title: "New business financial setup", body: "The financial foundation for a brand-new business &mdash; bank accounts, chart of accounts, QuickBooks, and the habits that keep the books clean from day one.", href: "/resources/guides/new-business-financial-setup/", cta: "New business setup &rarr;" },
    ],
  },
  {
    id: "hiring",
    eyebrow: "Hiring help",
    heading: "When to bring someone in.",
    lede: "How to tell what role you need, and what to look for.",
    guides: [
      { title: "Hiring a bookkeeper", body: "When a business needs a bookkeeper, what the role really covers, what to ask, and how to tell a good fit from a costly one before you hand over the books.", href: "/resources/guides/hiring-a-bookkeeper/", cta: "Hiring a bookkeeper &rarr;" },
      { title: "Hiring an accountant", body: "Bookkeeper, accountant, CPA, EA &mdash; who does what, when you need each, and how to hire the right one instead of paying for the wrong title.", href: "/resources/guides/hiring-an-accountant/", cta: "Hiring an accountant &rarr;" },
      { title: "When to hire a fractional CFO", body: "What a fractional CFO actually does, the signs a business is ready for one, and how it differs from bookkeeping or accounting &mdash; without overpaying for a role you don&rsquo;t need yet.", href: "/resources/guides/when-to-hire-a-fractional-cfo/", cta: "Fractional CFO &rarr;" },
    ],
  },
  {
    id: "quickbooks",
    eyebrow: "QuickBooks",
    heading: "Getting QuickBooks right.",
    lede: "Cleanup, cost, and the service that actually fits.",
    guides: [
      { title: "QuickBooks cleanup guide", body: "How a QuickBooks cleanup works, when a file needs one, and what a real cleanup involves &mdash; from a Certified ProAdvisor firm that does them. Independent, not Intuit.", href: "/resources/guides/quickbooks-cleanup-guide/", cta: "QuickBooks cleanup &rarr;" },
      { title: "QuickBooks pricing 2026", body: "What QuickBooks Online actually costs in 2026 &mdash; plans, add-ons, and the real total &mdash; described and dated from Intuit&rsquo;s published figures, not guessed.", href: "/resources/guides/quickbooks-pricing-2026/", cta: "QuickBooks pricing &rarr;" },
      { title: "Cleanup vs. monthly bookkeeping", body: "The difference between a one-time cleanup and ongoing monthly bookkeeping &mdash; which one your file needs first, and why most businesses need both in order.", href: "/resources/guides/cleanup-vs-monthly-bookkeeping/", cta: "Cleanup vs. monthly &rarr;" },
    ],
  },
  {
    id: "money-compliance",
    eyebrow: "Money &amp; compliance",
    heading: "Costs, payroll, and tax.",
    lede: "What things cost and what you&rsquo;re obligated to do.",
    guides: [
      { title: "Bookkeeping rates 2026", body: "What bookkeeping actually costs in 2026 &mdash; hourly, monthly, and flat-fee models &mdash; with our own canonical pricing and how to read a quote so you don&rsquo;t overpay.", href: "/resources/guides/bookkeeping-rates-2026/", cta: "Bookkeeping rates &rarr;" },
      { title: "Payroll setup guide", body: "How to set up payroll correctly &mdash; employees vs. contractors, withholding, tax filings, and where setup goes wrong &mdash; so the team gets paid and the filings stay clean.", href: "/resources/guides/payroll-setup-guide/", cta: "Payroll setup &rarr;" },
      { title: "Sales tax compliance guide", body: "How sales tax works for small business &mdash; nexus, registration, collection, and filing &mdash; in plain English, so you collect and remit what you actually owe.", href: "/resources/guides/sales-tax-compliance-guide/", cta: "Sales tax compliance &rarr;" },
    ],
  },
  {
    id: "trends",
    eyebrow: "Trends",
    heading: "Where accounting is going.",
    lede: "What&rsquo;s actually changing &mdash; and what isn&rsquo;t.",
    guides: [
      { title: "AI in accounting 2026", body: "Where AI genuinely helps in bookkeeping and accounting in 2026, where it falls short, and what it means for small businesses &mdash; honest, not hype.", href: "/resources/guides/ai-in-accounting-2026/", cta: "AI in accounting &rarr;" },
    ],
  },
];

// Flatten all 13 guides in declared order for the ItemList.
const allGuides = guideGroups.reduce(function (acc, g) { return acc.concat(g.guides); }, []);

const faq = [
  { q: "Are the guides free?", a: "Yes &mdash; every guide on this page is free to read, with no signup, no paywall, and no obligation. They exist to be genuinely useful: clear, accurate explanations of how bookkeeping, QuickBooks, hiring, pricing, and compliance actually work for small businesses. If you want help applying any of it to your own books, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> is the place to start." },
  { q: "Who writes the guides?", a: "Our Certified QuickBooks ProAdvisor team &mdash; the same people who do the work for clients. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor; we are not Intuit and not Intuit&rsquo;s official software support. The guides reflect how this work is actually done in practice, not generic copy." },
  { q: "How current are the guides?", a: "Each guide is dated and reviewed for accuracy, and year-specific guides &mdash; like QuickBooks pricing 2026, bookkeeping rates 2026, and AI in accounting 2026 &mdash; are kept current to the year named. Software features, prices, and tax rules change, so we date what we publish and describe figures as of their review date rather than presenting them as permanent." },
  { q: "Do you cover pricing honestly?", a: "Yes. When we quote our own services we use our canonical pricing &mdash; the same figures we&rsquo;d give you directly. For Intuit&rsquo;s prices and broader market rates, we describe and date the figures from published sources rather than guessing or inflating them, and we flag when something is an estimate or a range. We&rsquo;d rather under-promise than mislead." },
  { q: "Will these guides solve my bookkeeping?", a: "They&rsquo;ll help you understand it &mdash; what good books look like, what each role does, what things cost, and where setup goes wrong. But every file is different, and a guide can&rsquo;t see your actual numbers. If your books need real attention, a free file review shows you exactly where you stand and what to do next. No pitch. Independent firm, not Intuit." },
  { q: "Where should I start if I&rsquo;m brand new to this?", a: "Start with <a href=\"/resources/guides/bookkeeping-basics/\">Bookkeeping Basics</a> and <a href=\"/resources/guides/small-business-accounting-101/\">Small Business Accounting 101</a> &mdash; together they cover the mechanics and the owner-level overview. If you&rsquo;re setting up a new business, add <a href=\"/resources/guides/new-business-financial-setup/\">New Business Financial Setup</a>. From there, follow the guide that matches your next decision &mdash; hiring, QuickBooks, pricing, or compliance." },
];

module.exports = {
  summary: "Most small-business owners don&rsquo;t need an accounting degree &mdash; they need clear answers to real questions: what does bookkeeping actually involve, when should I hire help, what does it cost, and how do QuickBooks, payroll, and sales tax actually work? This hub answers those questions with <strong>13 plain-English guides</strong> from our Certified ProAdvisor team, grouped by topic: getting started, hiring help, QuickBooks, money &amp; compliance, and trends. Every guide is <strong>free to read</strong>, dated, and reviewed for accuracy. We use our own <strong>canonical pricing</strong> for our services and describe Intuit and market figures by date rather than guessing. As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong> &mdash; we wrote these to be genuinely useful, whether or not you ever hire us.",
  guideGroups,
  relatedNote: "Looking for a quick definition instead of a full guide? The <a href=\"/glossary/\">accounting &amp; QuickBooks glossary</a> defines the terms these guides use. For everything else &mdash; tools, references, and more &mdash; see the <a href=\"/resources/\">resources hub</a>. When you&rsquo;re ready to apply any of it, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly where your own books stand.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Accounting & QuickBooks Guides","description":"Plain-English accounting and QuickBooks guides from Certified ProAdvisors — how bookkeeping, QuickBooks, hiring, pricing, and compliance actually work for small businesses. Free, dated, and reviewed. Independent firm, not Intuit.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#guides-hub-summary"]}},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Resources","item":ORIGIN+"/resources/"},
          {"@type":"ListItem","position":3,"name":"Guides"}]},
        {"@type":"ItemList","@id":URL+"#guides","name":"Accounting & QuickBooks guides","numberOfItems":allGuides.length,"itemListElement":allGuides.map(function(g,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(g.title),"url":ORIGIN+g.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
