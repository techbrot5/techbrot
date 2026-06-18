/* /accounting/tax/ — TAX HUB (honest-triage, t-hub). Routes to the tax-adjacent
 * things TechBrot HONESTLY does (1099s, year-end CPA package, sales tax) plus the
 * things we only COORDINATE on (IRS resolution, tax planning, ProAdvisor team).
 * CollectionPage + ItemList + BreadcrumbList + FAQPage + speakable.
 * ⚠ HONESTY: TechBrot is NOT a CPA firm and NOT a tax-prep firm — we do not
 * prepare/file returns, give tax advice, or represent before the IRS; the CPA/EA
 * does. Disclosed above the fold (hero subheading + inBrief). Never "official";
 * not Intuit; founder-name-zero (David only in #david-westgate); canonical pricing
 * only. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/accounting/tax/";

const routeGroups = [
  {
    id: "what-we-do",
    eyebrow: "What we actually do",
    heading: "The bookkeeping side of tax season.",
    lede: "Tax-adjacent work that is genuinely bookkeeping &mdash; not tax preparation, advice, or filing returns.",
    cards: [
      { title: "1099 preparation &amp; filing", body: "We collect W-9s, identify reportable vendors, and prepare and e-file your 1099-NEC and 1099-MISC information returns &mdash; these are information returns, not your income-tax return.", href: "/accounting/1099-preparation/", cta: "1099 preparation &rarr;" },
      { title: "Year-end review &amp; CPA handoff", body: "We reconcile, clean, and close the books for the year, then build the organized handoff package your CPA needs &mdash; so their work is faster, cheaper, and based on accurate numbers.", href: "/accounting/year-end-review/", cta: "Year-end CPA handoff &rarr;" },
      { title: "Sales tax compliance", body: "Nexus tracking, registration, and accurate sales-tax filing inside your bookkeeping &mdash; the transactional sales-tax work, kept current month to month. (Not income-tax filing.)", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    ],
  },
  {
    id: "coordinate",
    eyebrow: "What we coordinate (your CPA does)",
    heading: "Where we route you honestly.",
    lede: "These need a licensed CPA, EA, or tax attorney. We help on the books side and coordinate &mdash; we do not file returns, advise, or represent you.",
    cards: [
      { title: "IRS problem resolution", body: "If the IRS is asking questions, we help by fixing the underlying books and assembling records &mdash; but a CPA, EA, or tax attorney is who represents you before the IRS. Here's how that split works.", href: "/accounting/tax/irs-problem-resolution/", cta: "How we help with IRS issues &rarr;" },
      { title: "Tax planning", body: "Tax strategy is your CPA's call, not ours. What we do is keep the books accurate and timely so your CPA can actually plan &mdash; we coordinate with them; we do not give tax advice.", href: "/accounting/advisory/tax-planning/", cta: "How we coordinate planning &rarr;" },
      { title: "Speak to our ProAdvisor team", body: "Not sure what's bookkeeping and what's a CPA question? Talk to a named Certified ProAdvisor. We'll tell you honestly what we handle and where you need your CPA or EA.", href: "/accounting/speak-to-an-accountant/", cta: "Speak to our team &rarr;" },
    ],
  },
];

// Flatten all routing cards in declared order for the ItemList.
const allCards = routeGroups.reduce(function (acc, g) { return acc.concat(g.cards); }, []);

const faq = [
  { q: "Does TechBrot prepare or file my tax return?", a: "No. We are not a CPA firm and not a tax-preparation firm &mdash; we do not prepare or file income-tax returns. That is the work of a licensed CPA, EA, or tax attorney. What we do is keep your books accurate and tax-ready all year, prepare and file your 1099 information returns, and build the year-end handoff package your CPA needs. We keep the books tax-ready and coordinate; your CPA files and advises." },
  { q: "What tax-related things DO you do?", a: "The bookkeeping side of tax season: we prepare and e-file your 1099-NEC and 1099-MISC information returns, run a <a href=\"/accounting/year-end-review/\">year-end review</a> and build the organized CPA handoff package, handle <a href=\"/accounting/sales-tax-compliance/\">sales tax compliance</a> (nexus, registration, filing), and keep the books clean enough that your CPA can actually plan. None of that is preparing your income-tax return, giving tax advice, or filing for you &mdash; that stays with your CPA or EA." },
  { q: "Can you represent me before the IRS?", a: "No. Representing you before the IRS requires a licensed CPA, EA, or tax attorney &mdash; not a bookkeeping firm. Where we help is the books: we fix the underlying records, reconcile what's wrong, assemble the documentation your representative asks for, and coordinate with them so they can do their job. The representation itself is theirs, not ours." },
  { q: "Do you give tax advice?", a: "No. We do not give tax advice or tax strategy &mdash; that is your CPA's or EA's role, and giving it without that license would be both wrong and unhelpful. We coordinate with your CPA: we keep the books accurate and timely so the advice they give is based on real numbers, and we make sure nothing on the bookkeeping side trips up their plan." },
  { q: "Do I still need a CPA?", a: "Yes &mdash; for filing your income-tax return, tax advice and strategy, and any IRS representation, you need a CPA, EA, or tax attorney. We don't replace them and never claim to. What we do is make their job easier and usually cheaper: tax-ready books, prepared 1099s, and a clean year-end handoff package mean they spend less time fixing records and more time on your actual return and planning." },
  { q: "Are you affiliated with the IRS or Intuit?", a: "No to both. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; we are not the IRS, not a government agency, not a CPA firm, and not Intuit or Intuit's official support. We never present ourselves as official anything. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
];

module.exports = {
  summary: "Tax season has two halves, and TechBrot only does one of them. We are an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; <strong>not a CPA firm and not a tax-preparation firm</strong>. We do <strong>not</strong> prepare or file your income-tax return, give tax advice, or represent you before the IRS; that is the work of a <strong>CPA, EA, or tax attorney</strong>. What we do is the bookkeeping half: keep the books accurate and tax-ready year-round, prepare and file your <a href=\"/accounting/1099-preparation/\">1099 information returns</a>, build the <a href=\"/accounting/year-end-review/\">year-end CPA handoff package</a>, handle <a href=\"/accounting/sales-tax-compliance/\">sales tax compliance</a>, and coordinate directly with your CPA or EA so their job is faster and cheaper. We keep the books tax-ready and coordinate; your CPA files and advises. Independent firm &mdash; <strong>not Intuit</strong>.",
  routeGroups,
  relatedNote: "This page sits inside our <a href=\"/accounting/\">accounting &amp; bookkeeping services</a>. The two pieces we do directly &mdash; <a href=\"/accounting/1099-preparation/\">1099 preparation</a> and the <a href=\"/accounting/year-end-review/\">year-end review &amp; CPA handoff</a> &mdash; are where tax season actually touches your books. Everything else here routes you to the right professional: your CPA, EA, or tax attorney files and advises; we keep the books tax-ready and coordinate.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Tax-Ready Books & CPA Coordination (Not Tax Prep)","description":"TechBrot is an independent QuickBooks ProAdvisor bookkeeping firm — not a CPA or tax-prep firm. We keep books tax-ready, prepare and file 1099s, build the year-end CPA handoff package, and coordinate with your CPA or EA, who files and advises.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#tax-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":ORIGIN+"/accounting/"},
          {"@type":"ListItem","position":3,"name":"Tax"}]},
        {"@type":"ItemList","@id":URL+"#routes","name":"Tax-adjacent services and coordination","numberOfItems":allCards.length,"itemListElement":allCards.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.title),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
