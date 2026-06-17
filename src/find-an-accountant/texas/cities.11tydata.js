/* /find-an-accountant/texas/cities/ — TX CITIES HUB (t-location hub).
 * Routes to the 6 TX city children + remote-everywhere. CollectionPage + ItemList +
 * BreadcrumbList + FAQPage + speakable. HONESTY: real; founder-name-zero; not Intuit. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/texas/cities/";

const cities = [
  { name: "Houston", note: "The U.S. energy capital &mdash; oil &amp; gas (joint-interest billing, royalties, severance tax), the Port of Houston, and the Texas Medical Center.", href: "/find-an-accountant/texas/cities/houston/" },
  { name: "Dallas", note: "Corporate HQs, finance, and tech &mdash; multi-entity structures, BPP on a heavy footprint, and the Texas margin tax.", href: "/find-an-accountant/texas/cities/dallas/" },
  { name: "Austin", note: "The tech and SaaS capital &mdash; deferred revenue and MRR/ARR, equity comp, and the Hotel Occupancy Tax for hospitality.", href: "/find-an-accountant/texas/cities/austin/" },
  { name: "San Antonio", note: "Military, healthcare, and tourism &mdash; government-contract awareness, the Hotel Occupancy Tax, and multi-location hospitality.", href: "/find-an-accountant/texas/cities/san-antonio/" },
  { name: "Fort Worth", note: "Logistics, energy, and the Barnett Shale &mdash; distribution and warehousing, severance awareness, and job-costed trades.", href: "/find-an-accountant/texas/cities/fort-worth/" },
  { name: "El Paso", note: "The largest U.S. border city &mdash; cross-border U.S.-Mexico trade (multi-currency, customs, duty), maquiladora-linked manufacturing, and the Fort Bliss economy.", href: "/find-an-accountant/texas/cities/el-paso/" },
];

const faq = [
  { q: "Which Texas cities do you serve?", a: "We have dedicated bookkeepers and city pages for the major metros &mdash; Houston, Dallas, Austin, San Antonio, Fort Worth, and El Paso &mdash; each built around that city&rsquo;s actual economy. We also serve every other city in all 254 Texas counties remotely on QuickBooks, with the same named bookkeeper and standard." },
  { q: "What if my city isn&rsquo;t listed?", a: "We still serve you &mdash; delivered remotely on QuickBooks across all 254 Texas counties. Texas has no state income tax and no city income or gross-receipts taxes, so your books are shaped by your industry and the Texas stack (the franchise/margin tax, 8.25% sales tax, business personal property rendition), which we build into your file the same way. Tell us where you are and we&rsquo;ll route you." },
  { q: "Does my Texas city change how my books are kept?", a: "Less than in some states &mdash; Texas cities don&rsquo;t levy their own income or gross-receipts business taxes the way California cities do. What changes city to city is the economy and the local sales-tax components: Houston runs on energy, Austin on tech, El Paso on cross-border trade. We build the right industry accounting and the correct combined sales-tax rate by location into your books." },
  { q: "Is the service remote or in person?", a: "Remote-first &mdash; bookkeeping, cleanup, and QuickBooks work are delivered in your own QuickBooks Online or hosted Desktop file with a named ProAdvisor and scheduled calls. Remote delivery is exactly why we can serve all 254 counties to the same standard." },
  { q: "Do you file my Texas taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the franchise (margin) tax and sales tax. We are not affiliated with Intuit Inc." },
  { q: "How do I get started in my Texas city?", a: "Book a free discovery call or get a free file review. A Certified ProAdvisor reviews your QuickBooks file and your city&rsquo;s situation, and sends a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
];

module.exports = {
  summary: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping across Texas</strong> &mdash; with dedicated, genuinely localized pages for the state&rsquo;s major metros and remote service in all 254 counties. Texas is the structural opposite of high-tax states: there&rsquo;s <strong>no state income tax</strong> and Texas cities don&rsquo;t levy their own income or gross-receipts business taxes &mdash; so what makes each metro&rsquo;s books distinct is its <em>economy</em>. Houston runs on energy and the port, Dallas on corporate and finance, Austin on tech and SaaS, San Antonio on military and tourism, Fort Worth on logistics and the Barnett Shale, and El Paso on cross-border trade. We build the right industry accounting and the Texas stack (the franchise/margin tax, 8.25% sales tax by location, business personal property rendition) into your books, by a named bookkeeper on the same file every month. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  cities,
  citiesNote: "Don&rsquo;t see your city? We serve all 254 Texas counties remotely on QuickBooks &mdash; <a href=\"/contact/?intent=texas&amp;state=texas&amp;source_type=cities-hub&amp;funnel_stage=MOFU\">tell us where you are &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Texas Cities We Serve — Bookkeeping & QuickBooks","description":"Certified QuickBooks ProAdvisor bookkeeping across Texas's major metros and all 254 counties, each built around the city's actual economy, with the franchise (margin) tax and 8.25% sales tax handled.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#tx-cities-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Texas","item":ORIGIN+"/find-an-accountant/texas/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":URL+"#cities","name":"Texas cities served","itemListElement":cities.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.name),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
