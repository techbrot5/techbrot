/* /find-an-accountant/texas/industries/ — TX INDUSTRIES HUB (t-hub).
 * Routes to the 6 TX state-weighted industry children. CollectionPage + ItemList + BreadcrumbList
 * + FAQPage + speakable. HONESTY: real; founder-name-zero; not Intuit; non-weighted industries
 * route to the global /accounting/industries/* per v4. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/texas/industries/";

const industries = [
  { title: "Construction", body: "Job costing, WIP, AIA billing, retainage, the Texas lump-sum vs separated sales-tax contract rules, margin-tax COGS, and subcontractor 1099s.", href: "/find-an-accountant/texas/industries/construction/", cta: "Construction accounting &rarr;" },
  { title: "Manufacturing", body: "Inventory and standard costing, the Texas manufacturing machinery &amp; equipment sales-tax exemption, clean COGS for the margin tax, and equipment on the BPP rendition.", href: "/find-an-accountant/texas/industries/manufacturing/", cta: "Manufacturing accounting &rarr;" },
  { title: "Real Estate", body: "Multi-entity ledgers, broker and property-management trust records, heavy Texas property tax, 1031 documentation, and agent commissions &mdash; records only, never holding funds.", href: "/find-an-accountant/texas/industries/real-estate/", cta: "Real estate accounting &rarr;" },
  { title: "Trucking &amp; Transportation", body: "Cost per mile, IFTA fuel-tax records, IRP apportioned registration, owner-operator 1099s, the federal HVUT, and trucks on the BPP rendition.", href: "/find-an-accountant/texas/industries/trucking/", cta: "Trucking accounting &rarr;" },
  { title: "Healthcare", body: "Insurance-AR and reimbursement reconciliation, provider payroll, the PLLC margin tax, and equipment on the BPP rendition &mdash; from financial data only, no PHI.", href: "/find-an-accountant/texas/industries/healthcare/", cta: "Healthcare accounting &rarr;" },
  { title: "Professional Services", body: "Project and matter profitability, IOLTA trust-record keeping for law firms, partner draws, and the margin-tax compensation deduction &mdash; records only, never holding funds.", href: "/find-an-accountant/texas/industries/professional-services/", cta: "Professional services &rarr;" },
];

const faq = [
  { q: "What industries do you serve in Texas?", a: "We build dedicated, Texas-specific books for six state-weighted verticals: construction, manufacturing, real estate, trucking and transportation, healthcare, and professional services (consultancies, agencies, and law firms). Each is built around that industry&rsquo;s Texas tax rules &mdash; not a keyword swap. Industries not listed are served through our global industry pages, with the Texas specifics applied to your file." },
  { q: "Why does my industry need Texas-specific accounting?", a: "Because Texas&rsquo;s rules hit each industry differently: the lump-sum vs separated sales-tax contract treatment for construction, the machinery exemption for manufacturing, heavy property tax and trust accounting for real estate, IFTA and IRP for trucking, insurance-AR reconciliation for healthcare, and the franchise (margin) tax compensation deduction for professional firms &mdash; on top of no state income tax and the BPP rendition for everyone. A generic setup misses these, and fixing them later is a cleanup." },
  { q: "What if my industry isn&rsquo;t one of the six?", a: "We still serve you &mdash; through our global <a href=\"/accounting/industries/\">industry pages</a> &mdash; with the Texas specifics (the franchise/margin tax, 8.25% sales tax by location, the BPP rendition) applied to your file. The six listed here are the verticals where Texas creates genuinely distinct requirements; everywhere else, the Texas stack still gets built in." },
  { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named Certified ProAdvisor on the same file every month, connected to the tools your industry runs on." },
  { q: "Do you hold client or trust funds for real estate or law firms?", a: "No. For real estate brokers/property managers and for law firms, we keep the trust-account records and reconciliations accurate, but we never hold, control, or disburse client or escrow funds &mdash; those stay with you and your bank. We keep the books and records behind them right." },
  { q: "Do you file my Texas taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files. We are not affiliated with Intuit Inc." },
];

module.exports = {
  summary: "Texas&rsquo;s tax rules shape every industry&rsquo;s books differently &mdash; so TechBrot builds <strong>industry-specific accounting for Texas businesses</strong> around what your vertical actually needs. Six Texas-weighted industries each get a dedicated page built on the real requirements (construction sales-tax contracts, the manufacturing exemption, real-estate trust records, IFTA for trucking, insurance-AR for healthcare, the margin-tax compensation deduction for professional firms); everything else is served through our <a href=\"/accounting/industries/\">global industry pages</a> with the Texas stack applied. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  industries,
  industriesNote: "Don&rsquo;t see your industry? E-commerce, agencies, restaurants, nonprofits, and others are served via our <a href=\"/accounting/industries/\">global industry pages</a> &mdash; with the Texas specifics built into your file. <a href=\"/contact/?intent=texas&amp;state=texas&amp;source_type=industry-hub&amp;funnel_stage=MOFU\">Tell us what you do &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Texas Industry-Specific Accounting","description":"Industry-specific accounting for Texas businesses across six state-weighted verticals — construction, manufacturing, real estate, trucking, healthcare, and professional services.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#tx-industries-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Texas","item":ORIGIN+"/find-an-accountant/texas/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":URL+"#industries","name":"Texas industry accounting","itemListElement":industries.map(function(i,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(i.title),"url":ORIGIN+i.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
