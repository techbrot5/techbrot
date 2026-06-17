/* /find-an-accountant/california/industries/ — CA INDUSTRIES HUB (t-hub).
 * Routes to the 6 CA state-weighted industry children. CollectionPage + ItemList + BreadcrumbList
 * + FAQPage + speakable. HONESTY: real; founder-name-zero; not Intuit; non-weighted industries
 * route to the global /accounting/industries/* per v4. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/california/industries/";

const industries = [
  { title: "E-commerce", body: "Multi-channel reconciliation, CDTFA district sales tax by ship-to location, economic nexus, and inventory/COGS by SKU and channel.", href: "/find-an-accountant/california/industries/ecommerce/", cta: "E-commerce accounting &rarr;" },
  { title: "Agencies, SaaS &amp; Production", body: "ASC 606 gross-vs-net on pass-through media, deferred revenue and MRR/ARR, project profitability, and AB5 freelancer tracking.", href: "/find-an-accountant/california/industries/agency/", cta: "Agency &amp; SaaS accounting &rarr;" },
  { title: "Restaurants &amp; Hospitality", body: "High-volume POS reconciliation, tipped payroll with California&rsquo;s uncapped SDI, food-vs-alcohol sales tax, and multi-location roll-ups.", href: "/find-an-accountant/california/industries/restaurant/", cta: "Restaurant accounting &rarr;" },
  { title: "Real Estate", body: "Multi-entity ledgers, broker and property-management trust records, Prop 13 basis and 1031 documentation, and agent commissions.", href: "/find-an-accountant/california/industries/real-estate/", cta: "Real estate accounting &rarr;" },
  { title: "Professional Services", body: "Project and matter profitability, IOLTA client-trust records for law firms, partner draws, and AB5 contractor analysis.", href: "/find-an-accountant/california/industries/professional-services/", cta: "Professional services &rarr;" },
  { title: "Construction", body: "Job costing, WIP, AIA billing and retainage, California prevailing-wage and certified payroll, CSLB-aware books, and subcontractor AB5.", href: "/find-an-accountant/california/industries/construction/", cta: "Construction accounting &rarr;" },
];

const faq = [
  { q: "What industries do you serve in California?", a: "We build dedicated, California-specific books for six state-weighted verticals: e-commerce, agencies &amp; SaaS, restaurants and hospitality, real estate, professional services (consultancies and law firms), and construction. Each is built around that industry&rsquo;s California tax and labor rules &mdash; not a keyword swap. Industries not listed are served through our global industry pages, with the California specifics applied to your file." },
  { q: "Why does my industry need California-specific accounting?", a: "Because California&rsquo;s rules hit each industry differently: district sales tax sourced by ship-to for sellers, ASC 606 principal-vs-agent for agencies, uncapped SDI and tipped payroll for restaurants, trust accounting for real estate and law firms, prevailing wage and certified payroll for construction, and AB5 across all of them. A generic setup misses these, and fixing them later is a cleanup." },
  { q: "What if my industry isn&rsquo;t one of the six?", a: "We still serve you &mdash; through our global <a href=\"/accounting/industries/\">industry pages</a> &mdash; with the California specifics ($800 franchise tax, CDTFA district sales tax, AB5) applied to your file. The six listed here are the verticals where California creates genuinely distinct requirements; everywhere else, the California stack still gets built in." },
  { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named Certified ProAdvisor on the same file every month, connected to the tools your industry runs on." },
  { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files. We are not affiliated with Intuit Inc." },
  { q: "Do you serve businesses outside the big California metros?", a: "Yes &mdash; all 58 California counties, delivered remotely on QuickBooks. Your industry and your California requirements drive the books; your location changes the tax context but not the service." },
];

module.exports = {
  summary: "California&rsquo;s tax and labor rules shape every industry&rsquo;s books differently &mdash; so TechBrot builds <strong>industry-specific accounting for California businesses</strong> around what your vertical actually needs. Six California-weighted industries each get a dedicated page built on the real requirements (district sales tax, ASC 606, tipped payroll, trust accounting, prevailing wage, AB5); everything else is served through our <a href=\"/accounting/industries/\">global industry pages</a> with the California stack applied. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  industries,
  industriesNote: "Don&rsquo;t see your industry? Healthcare, nonprofit, manufacturing, trucking, and others are served via our <a href=\"/accounting/industries/\">global industry pages</a> &mdash; with the California specifics built into your file. <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=industry-hub&amp;funnel_stage=MOFU\">Tell us what you do &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"California Industry-Specific Accounting","description":"Industry-specific accounting for California businesses across six state-weighted verticals — e-commerce, agencies & SaaS, restaurants, real estate, professional services, and construction.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#ca-industries-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-17"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"California","item":ORIGIN+"/find-an-accountant/california/"},
          {"@type":"ListItem","position":4,"name":"Industries"}]},
        {"@type":"ItemList","@id":URL+"#industries","name":"California industry accounting","itemListElement":industries.map(function(i,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(i.title),"url":ORIGIN+i.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
