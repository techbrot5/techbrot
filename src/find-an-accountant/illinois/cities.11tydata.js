/* /find-an-accountant/illinois/cities/ — IL CITIES HUB (t-location hub).
 * Routes to the 6 IL city children + remote-everywhere. CollectionPage + ItemList +
 * BreadcrumbList + FAQPage + speakable. IL stack: flat 4.95% income tax; PPRT (2.5% C-corp /
 * 1.5% pass-through); 9.5% combined C-corp; 6.25%->10.25% Chicago sales tax (ST-1); Chicago
 * 15% lease/cloud tax; 102 counties; IDOR. In IL the city CAN change the tax picture (esp.
 * Chicago), not just the economy. HONESTY: real; founder-name-zero; not Intuit. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/illinois/cities/";

const cities = [
  { name: "Chicago", note: "Finance, fintech, SaaS and tech, agencies and corporate HQs &mdash; plus Chicago&rsquo;s own taxes: the 10.25% combined sales tax and the 15% lease/&ldquo;cloud&rdquo; tax on software and leased services, on top of the state stack.", href: "/find-an-accountant/illinois/cities/chicago/" },
  { name: "Aurora", note: "Illinois&rsquo;s second-largest city &mdash; manufacturing and the data-center and tech corridor, where the manufacturing machinery and equipment exemption and accurate cost accounting drive the books.", href: "/find-an-accountant/illinois/cities/aurora/" },
  { name: "Naperville", note: "Professional services, tech, and affluent small business in DuPage County &mdash; service-firm accounting, owner compensation, and one of the state&rsquo;s higher property-tax burdens.", href: "/find-an-accountant/illinois/cities/naperville/" },
  { name: "Joliet", note: "Intermodal rail, logistics, and warehousing in Will County &mdash; distribution accounting, fleet and 3PL costing, and multi-state nexus from shipping across state lines.", href: "/find-an-accountant/illinois/cities/joliet/" },
  { name: "Rockford", note: "Aerospace and precision-machining manufacturing plus an air-cargo hub &mdash; job costing, the machinery exemption, and export/contract-manufacturing accounting.", href: "/find-an-accountant/illinois/cities/rockford/" },
  { name: "Springfield", note: "The state capital &mdash; state government and contractors, insurance, healthcare, and central-Illinois agriculture, with government-contract and grant accounting at its center.", href: "/find-an-accountant/illinois/cities/springfield/" },
];

const faq = [
  { q: "Which Illinois cities do you serve?", a: "We have dedicated bookkeepers and city pages for the major metros &mdash; Chicago, Aurora, Naperville, Joliet, Rockford, and Springfield &mdash; each built around that city&rsquo;s actual economy. We also serve every other city in all 102 Illinois counties remotely on QuickBooks, with the same named bookkeeper and standard." },
  { q: "What if my city isn&rsquo;t listed?", a: "We still serve you &mdash; delivered remotely on QuickBooks across all 102 Illinois counties. Your books are shaped by your industry and the Illinois stack (the flat 4.95% income tax, the PPRT at 2.5% for C-corps and 1.5% for pass-throughs, the combined 9.5% C-corp rate, and IDOR sales tax via ST-1), plus any city-level tax where you operate. Tell us where you are and we&rsquo;ll route you." },
  { q: "Does my Illinois city change how my books are kept?", a: "Yes &mdash; more than in many states. Unlike no-income-tax states, Illinois has a flat 4.95% income tax and the statewide PPRT, and a city can add its own taxes on top. Chicago especially: the 15% lease/&ldquo;cloud&rdquo; tax on software and leased services (City of Chicago Dept of Finance) and the 10.25% combined sales tax both change how Chicago books are coded versus the rest of the state. We build the right industry accounting and the correct combined rate by location into your file." },
  { q: "Is the service remote or in person?", a: "Remote-first &mdash; bookkeeping, cleanup, and QuickBooks work are delivered in your own QuickBooks Online or hosted Desktop file with a named ProAdvisor and scheduled calls. Remote delivery is exactly why we can serve all 102 counties to the same standard." },
  { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the flat 4.95% income tax, the PPRT, the IDOR sales tax (ST-1), and any Chicago lease/&ldquo;cloud&rdquo; tax. We are not affiliated with Intuit Inc." },
  { q: "How do I get started in my Illinois city?", a: "Book a free discovery call or get a free file review. A Certified ProAdvisor reviews your QuickBooks file and your city&rsquo;s situation &mdash; including any Chicago lease/cloud and combined sales-tax exposure &mdash; and sends a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
];

module.exports = {
  summary: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping across Illinois</strong> &mdash; with dedicated, genuinely localized pages for the state&rsquo;s major metros and remote service in all 102 counties. Unlike no-income-tax states, Illinois has a <strong>flat 4.95% income tax</strong> and the statewide <strong>PPRT</strong> (2.5% for C-corps, 1.5% for pass-throughs, for a 9.5% combined C-corp rate), and a city can layer its own taxes on top &mdash; so in Illinois the city can change the actual <em>tax picture</em>, not only the economy. Chicago runs on finance, fintech and SaaS and adds its own 10.25% combined sales tax and a 15% lease/&ldquo;cloud&rdquo; tax; Aurora on manufacturing and data centers; Naperville on professional services; Joliet on intermodal logistics; Rockford on aerospace machining; and Springfield on state government and central-Illinois agriculture. We build the right industry accounting and the Illinois stack (the flat 4.95% income tax, the PPRT, the 6.25%&rarr;10.25% sales tax via IDOR&rsquo;s ST-1, and Chicago&rsquo;s lease/cloud tax where it applies) into your books, by a named bookkeeper on the same file every month. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  cities,
  citiesNote: "Don&rsquo;t see your city? We serve all 102 Illinois counties remotely on QuickBooks &mdash; <a href=\"/contact/?intent=illinois&amp;state=illinois&amp;source_type=cities-hub&amp;funnel_stage=MOFU\">tell us where you are &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Illinois Cities We Serve — Bookkeeping & QuickBooks","description":"Certified QuickBooks ProAdvisor bookkeeping across Illinois's major metros and all 102 counties, each built around the city's actual economy, with the flat 4.95% income tax, the PPRT, and Chicago's 10.25% sales tax and 15% lease/cloud tax handled.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#il-cities-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Illinois","item":ORIGIN+"/find-an-accountant/illinois/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":URL+"#cities","name":"Illinois cities served","itemListElement":cities.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.name),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
