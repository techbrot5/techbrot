/* /find-an-accountant/illinois/industries/ — IL INDUSTRIES HUB (t-hub).
 * Routes to the 6 IL state-weighted industry children. CollectionPage + ItemList + BreadcrumbList
 * + FAQPage + speakable. HONESTY: real; founder-name-zero; not Intuit; non-weighted industries
 * route to the global /accounting/industries/* per v4. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/illinois/industries/";

const industries = [
  { title: "Manufacturing", body: "The Illinois Manufacturing Machinery &amp; Equipment (MM&amp;E) sales/use-tax exemption, inventory/WIP and job costing, the PPRT on entity income, and multi-state sales and nexus.", href: "/find-an-accountant/illinois/industries/manufacturing/", cta: "Manufacturing accounting &rarr;" },
  { title: "Healthcare", body: "Insurance-AR and reimbursement reconciliation, provider payroll, and the medical-corp/PLLC entity tax (the PPRT plus the 9.5% C-corp rate or the PTE election) &mdash; from the books only, no PHI.", href: "/find-an-accountant/illinois/industries/healthcare/", cta: "Healthcare accounting &rarr;" },
  { title: "Agency", body: "Project and retainer profitability, 1099 contractors, pass-through PPRT plus the PTE election, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax on the SaaS marketing, creative, and digital agencies run on.", href: "/find-an-accountant/illinois/industries/agency/", cta: "Agency accounting &rarr;" },
  { title: "Restaurant", body: "High-volume POS reconciliation, tipped payroll and the FICA tip credit, and food/prepared-food sales tax at Chicago&rsquo;s 10.25% combined rate plus Chicago&rsquo;s additional dining taxes.", href: "/find-an-accountant/illinois/industries/restaurant/", cta: "Restaurant accounting &rarr;" },
  { title: "Professional Services", body: "Matter and project profitability, IOLTA trust-record keeping for Illinois law firms (Lawyers Trust Fund of Illinois) &mdash; records only, never holding funds &mdash; partner draws, and pass-through PPRT plus the PTE election.", href: "/find-an-accountant/illinois/industries/professional-services/", cta: "Professional services &rarr;" },
  { title: "Trucking &amp; Logistics", body: "IFTA fuel-tax and IRP mileage reporting, owner-operator 1099-vs-employee handling, multi-state nexus from Illinois&rsquo;s intermodal hub, and the PPRT.", href: "/find-an-accountant/illinois/industries/trucking/", cta: "Trucking accounting &rarr;" },
];

const faq = [
  { q: "What industries do you serve in Illinois?", a: "We build dedicated, Illinois-specific books for six state-weighted verticals: manufacturing, healthcare, agencies (marketing, creative, and digital), restaurants, professional services (consultancies and law firms), and trucking and logistics. Each is built around that industry&rsquo;s Illinois tax rules &mdash; not a keyword swap. Industries not listed are served through our global industry pages, with the Illinois specifics applied to your file." },
  { q: "Why does my industry need Illinois-specific accounting?", a: "Because Illinois&rsquo;s rules hit each industry differently: the Manufacturing Machinery &amp; Equipment exemption for manufacturers, the FICA tip credit and Chicago&rsquo;s 10.25% sales tax for restaurants, Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax for agencies, IOLTA trust records for law firms, and IFTA/IRP reporting for trucking &mdash; on top of the flat 4.95% income tax, the PPRT (the entity-level replacement tax that even pass-throughs owe), and the permanent PTE election. A generic setup misses these, and fixing them later is a cleanup." },
  { q: "What if my industry isn&rsquo;t one of the six?", a: "We still serve you &mdash; through our global <a href=\"/accounting/industries/\">industry pages</a> &mdash; with the Illinois specifics (the flat 4.95% income tax, the PPRT, the PTE election, and Chicago&rsquo;s sales and cloud taxes where they apply) built into your file. The six listed here are the verticals where Illinois creates genuinely distinct requirements; everywhere else, the Illinois stack still gets built in." },
  { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named Certified ProAdvisor on the same file every month, connected to the tools your industry runs on." },
  { q: "Do you hold client or trust funds for law firms?", a: "No. For Illinois law firms we keep the IOLTA trust records and reconciliations accurate against the Lawyers Trust Fund of Illinois rules, but we never hold, control, or disburse client or trust funds &mdash; those stay with you and your bank. We keep the books and records behind them right." },
  { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files. We are not affiliated with Intuit Inc." },
];

module.exports = {
  summary: "Illinois&rsquo;s tax rules shape every industry&rsquo;s books differently &mdash; so TechBrot builds <strong>industry-specific accounting for Illinois businesses</strong> around what your vertical actually needs. Six Illinois-weighted industries each get a dedicated page built on the real requirements (the manufacturing MM&amp;E exemption, the restaurant FICA tip credit and Chicago&rsquo;s 10.25% sales tax, the agency cloud tax, law-firm IOLTA trust records, and trucking IFTA reporting); everything else is served through our <a href=\"/accounting/industries/\">global industry pages</a> with the Illinois stack applied. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  industries,
  industriesNote: "Don&rsquo;t see your industry? E-commerce, nonprofits, real estate, construction, and others are served via our <a href=\"/accounting/industries/\">global industry pages</a> &mdash; with the Illinois specifics built into your file. <a href=\"/contact/?intent=illinois&amp;state=illinois&amp;source_type=industry-hub&amp;funnel_stage=MOFU\">Tell us what you do &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Illinois Industry-Specific Accounting","description":"Industry-specific accounting for Illinois businesses across six state-weighted verticals — manufacturing, healthcare, agencies, restaurants, professional services, and trucking.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#il-industries-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Illinois","item":ORIGIN+"/find-an-accountant/illinois/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":URL+"#industries","name":"Illinois industry accounting","itemListElement":industries.map(function(i,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(i.title),"url":ORIGIN+i.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
