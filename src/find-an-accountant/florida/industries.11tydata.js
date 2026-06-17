/* /find-an-accountant/florida/industries/ — FL INDUSTRIES HUB (t-hub).
 * Routes to the 6 FL state-weighted industry children. CollectionPage + ItemList + BreadcrumbList
 * + FAQPage + speakable. HONESTY: real; founder-name-zero; not Intuit; non-weighted industries
 * route to the global /accounting/industries/* per v4. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/florida/industries/";

const industries = [
  { title: "Hospitality", body: "The county Tourist Development Tax (bed tax) on lodging, high-volume POS reconciliation, tipped payroll, and food-vs-alcohol sales tax for hotels, vacation rentals, and restaurants.", href: "/find-an-accountant/florida/industries/hospitality/", cta: "Hospitality accounting &rarr;" },
  { title: "Real Estate", body: "Multi-entity ledgers, broker and property-management trust records, the Tourist Development Tax on short-term rentals, property tax, and 1031 &mdash; records only, never holding funds.", href: "/find-an-accountant/florida/industries/real-estate/", cta: "Real estate accounting &rarr;" },
  { title: "Marine &amp; Boating", body: "The Florida vessel sales-tax cap, boat-dealer inventory, marina slip/fuel/storage/repair revenue, yacht-brokerage trust records, and use-tax handling.", href: "/find-an-accountant/florida/industries/marine/", cta: "Marine accounting &rarr;" },
  { title: "Construction", body: "Job costing, WIP, AIA billing, retainage, the Florida real-property-improvement sales-tax rule, DBPR- and bonding-ready books, and subcontractor 1099s.", href: "/find-an-accountant/florida/industries/construction/", cta: "Construction accounting &rarr;" },
  { title: "Healthcare", body: "Insurance-AR and reimbursement reconciliation, provider payroll, the PA/PLLC corporate tax, and equipment on the TPP return &mdash; from financial data only, no PHI.", href: "/find-an-accountant/florida/industries/healthcare/", cta: "Healthcare accounting &rarr;" },
  { title: "Professional Services", body: "Project and matter profitability, Florida Bar IOLTA trust-record keeping for law firms, partner draws, and the PA corporate tax &mdash; records only, never holding funds.", href: "/find-an-accountant/florida/industries/professional-services/", cta: "Professional services &rarr;" },
];

const faq = [
  { q: "What industries do you serve in Florida?", a: "We build dedicated, Florida-specific books for six state-weighted verticals: hospitality (hotels, vacation rentals, restaurants), real estate, marine and boating, construction, healthcare, and professional services (consultancies, agencies, and law firms). Each is built around that industry&rsquo;s Florida tax rules &mdash; not a keyword swap. Industries not listed are served through our global industry pages, with the Florida specifics applied to your file." },
  { q: "Why does my industry need Florida-specific accounting?", a: "Because Florida&rsquo;s rules hit each industry differently: the county Tourist Development Tax for hospitality and short-term rentals, the vessel sales-tax cap for marine, the real-property-improvement rule for construction, trust accounting for real estate and law firms, and the 5.5% corporate tax for professional firms &mdash; on top of 6% + county surtax sales tax, the commercial-rent tax, and the TPP return for everyone. A generic setup misses these, and fixing them later is a cleanup." },
  { q: "What if my industry isn&rsquo;t one of the six?", a: "We still serve you &mdash; through our global <a href=\"/accounting/industries/\">industry pages</a> &mdash; with the Florida specifics (the 5.5% corporate tax, 6% + county surtax sales tax, the commercial-rent tax, the TPP return) applied to your file. The six listed here are the verticals where Florida creates genuinely distinct requirements; everywhere else, the Florida stack still gets built in." },
  { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named Certified ProAdvisor on the same file every month, connected to the tools your industry runs on." },
  { q: "Do you hold client or trust funds for real estate, marine, or law firms?", a: "No. For real estate brokers/property managers, yacht brokers, and law firms, we keep the trust/escrow records and reconciliations accurate, but we never hold, control, or disburse client or escrow funds &mdash; those stay with you and your bank. We keep the books and records behind them right." },
  { q: "Do you file my Florida taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files. We are not affiliated with Intuit Inc." },
];

module.exports = {
  summary: "Florida&rsquo;s tax rules shape every industry&rsquo;s books differently &mdash; so TechBrot builds <strong>industry-specific accounting for Florida businesses</strong> around what your vertical actually needs. Six Florida-weighted industries each get a dedicated page built on the real requirements (the hospitality bed tax, the marine vessel tax cap, the construction real-property rule, real-estate and law-firm trust records, the professional-firm corporate tax); everything else is served through our <a href=\"/accounting/industries/\">global industry pages</a> with the Florida stack applied. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  industries,
  industriesNote: "Don&rsquo;t see your industry? E-commerce, agencies, manufacturing, nonprofits, and others are served via our <a href=\"/accounting/industries/\">global industry pages</a> &mdash; with the Florida specifics built into your file. <a href=\"/contact/?intent=florida&amp;state=florida&amp;source_type=industry-hub&amp;funnel_stage=MOFU\">Tell us what you do &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Florida Industry-Specific Accounting","description":"Industry-specific accounting for Florida businesses across six state-weighted verticals — hospitality, real estate, marine, construction, healthcare, and professional services.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#fl-industries-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Florida","item":ORIGIN+"/find-an-accountant/florida/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":URL+"#industries","name":"Florida industry accounting","itemListElement":industries.map(function(i,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(i.title),"url":ORIGIN+i.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
