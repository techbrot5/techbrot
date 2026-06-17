/* /find-an-accountant/california/cities/ — CA CITIES HUB (t-location hub).
 * Routes to the 11 CA city children + remote-everywhere. CollectionPage + ItemList +
 * BreadcrumbList + FAQPage + speakable. HONESTY: real; founder-name-zero; not Intuit. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/california/cities/";

const cities = [
  { name: "Los Angeles", note: "The LA City Business Tax on gross receipts (BTRC) and Measure ULA, plus entertainment and production accounting.", href: "/find-an-accountant/california/cities/los-angeles/" },
  { name: "San Francisco", note: "The SF Gross Receipts Tax (levied on receipts, not profit), the $800 franchise tax, and CDTFA sales tax.", href: "/find-an-accountant/california/cities/san-francisco/" },
  { name: "San Diego", note: "An employee-based Business Tax Certificate (no gross-receipts tax) and defense, biotech, and craft-beer accounting.", href: "/find-an-accountant/california/cities/san-diego/" },
  { name: "San Jose", note: "San Jose&rsquo;s per-employee business tax and Silicon Valley hardware, SaaS, and equity-comp accounting.", href: "/find-an-accountant/california/cities/san-jose/" },
  { name: "Sacramento", note: "The Business Operations Tax and state-capital government, nonprofit, and association accounting.", href: "/find-an-accountant/california/cities/sacramento/" },
  { name: "Oakland", note: "Oakland&rsquo;s progressive Measure T gross-receipts tax, Port logistics, and cannabis &sect;280E accounting.", href: "/find-an-accountant/california/cities/oakland/" },
  { name: "Fresno", note: "California&rsquo;s farm-equipment and diesel sales-tax exemptions and agriculture, food-processing, and seasonal-labor accounting.", href: "/find-an-accountant/california/cities/fresno/" },
  { name: "Long Beach", note: "Long Beach&rsquo;s own city business tax (not LA&rsquo;s) and Port of Long Beach logistics and import/export.", href: "/find-an-accountant/california/cities/long-beach/" },
  { name: "Anaheim", note: "Orange County&rsquo;s lower sales-tax rate and tourism, hospitality, and high-volume hotel/restaurant accounting.", href: "/find-an-accountant/california/cities/anaheim/" },
  { name: "Riverside", note: "Inland Empire logistics and warehousing &mdash; inventory and COGS at scale and multi-state sales-tax nexus.", href: "/find-an-accountant/california/cities/riverside/" },
  { name: "Bakersfield", note: "Kern County oil &amp; gas (joint-interest billing, royalties) and Central Valley agriculture accounting.", href: "/find-an-accountant/california/cities/bakersfield/" },
];

const faq = [
  { q: "Which California cities do you serve?", a: "We have dedicated bookkeepers and city pages for the major metros &mdash; Los Angeles, San Francisco, San Diego, San Jose, Sacramento, Oakland, Fresno, Long Beach, Anaheim, Riverside, and Bakersfield &mdash; each built around that city&rsquo;s actual business taxes. We also serve every other city in all 58 California counties remotely on QuickBooks, with the same named bookkeeper and standard." },
  { q: "What if my city isn&rsquo;t listed?", a: "We still serve you &mdash; delivered remotely on QuickBooks across all 58 California counties. Your city&rsquo;s tax context (any local business tax) and California&rsquo;s stack (the $800 franchise tax, CDTFA district sales tax, AB5) get built into your file the same way. Tell us where you are and we&rsquo;ll route you." },
  { q: "Does my California city change how my books are kept?", a: "It can. Several California cities levy their own business taxes &mdash; San Francisco and Oakland tax gross receipts, Los Angeles has the LABT, San Jose taxes per employee, San Diego uses an employee-based certificate. We build the right city tax into your books on top of California&rsquo;s statewide stack." },
  { q: "Is the service remote or in person?", a: "Remote-first &mdash; bookkeeping, cleanup, and QuickBooks work are delivered in your own QuickBooks Online or hosted Desktop file with a named ProAdvisor and scheduled calls. Remote delivery is exactly why we can serve all 58 counties to the same standard." },
  { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files. We are not affiliated with Intuit Inc." },
  { q: "How do I get started in my California city?", a: "Book a free discovery call or get a free file review. A Certified ProAdvisor reviews your QuickBooks file and your city&rsquo;s situation, and sends a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
];

module.exports = {
  summary: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping across California</strong> &mdash; with dedicated, genuinely localized pages for the state&rsquo;s major metros and remote service in all 58 counties. California is unusual in how much its <em>cities</em> tax business: San Francisco and Oakland tax gross receipts, Los Angeles runs the LABT, San Jose taxes per employee, San Diego uses an employee-based certificate. We build the right city tax into your books on top of California&rsquo;s statewide stack (the $800 franchise tax, CDTFA district sales tax, AB5), by a named bookkeeper on the same file every month. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  cities,
  citiesNote: "Don&rsquo;t see your city? We serve all 58 California counties remotely on QuickBooks &mdash; <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=cities-hub&amp;funnel_stage=MOFU\">tell us where you are &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"California Cities We Serve — Bookkeeping & QuickBooks","description":"Certified QuickBooks ProAdvisor bookkeeping across California's major metros and all 58 counties, each built around the city's actual business taxes.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#ca-cities-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-17"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"California","item":ORIGIN+"/find-an-accountant/california/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":URL+"#cities","name":"California cities served","itemListElement":cities.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.name),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
