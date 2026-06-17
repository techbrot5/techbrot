/* /find-an-accountant/florida/cities/ — FL CITIES HUB (t-location hub).
 * Routes to the 6 FL city children + remote-everywhere. CollectionPage + ItemList +
 * BreadcrumbList + FAQPage + speakable. CORRECTED FL stack (no commercial-rent; services
 * taxability; 5.5% corp; 6%+surtax). HONESTY: real; founder-name-zero; not Intuit. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/find-an-accountant/florida/cities/";

const cities = [
  { name: "Miami", note: "The U.S. gateway to Latin America &mdash; international trade and multi-currency, a finance and fintech hub, luxury and foreign-buyer real estate, and South Beach tourism.", href: "/find-an-accountant/florida/cities/miami/" },
  { name: "Orlando", note: "Theme parks and tourism at scale &mdash; hospitality, conventions and events, the Tourist Development Tax, and high-volume POS and seasonal-labor accounting.", href: "/find-an-accountant/florida/cities/orlando/" },
  { name: "Tampa", note: "Finance, the Port of Tampa, and healthcare &mdash; multi-entity corporate structures, logistics, and the 5.5% corporate tax across a broad metro economy.", href: "/find-an-accountant/florida/cities/tampa/" },
  { name: "Jacksonville", note: "Logistics, the port, insurance, and the military &mdash; distribution and warehousing, reemployment-tax-heavy payroll, and large-employer accounting.", href: "/find-an-accountant/florida/cities/jacksonville/" },
  { name: "Fort Lauderdale", note: "The marine and yachting capital &mdash; boat dealers and brokers, the Florida vessel sales-tax cap, marinas, and luxury real estate.", href: "/find-an-accountant/florida/cities/fort-lauderdale/" },
  { name: "St. Petersburg", note: "Downtown tech and startups, a marine-science cluster, the arts, and Gulf-beach tourism &mdash; deferred-revenue/ARR, grant tracking, and seasonal accounting.", href: "/find-an-accountant/florida/cities/st-petersburg/" },
];

const faq = [
  { q: "Which Florida cities do you serve?", a: "We have dedicated bookkeepers and city pages for the major metros &mdash; Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and St. Petersburg &mdash; each built around that city&rsquo;s actual economy. We also serve every other city in all 67 Florida counties remotely on QuickBooks, with the same named bookkeeper and standard." },
  { q: "What if my city isn&rsquo;t listed?", a: "We still serve you &mdash; delivered remotely on QuickBooks across all 67 Florida counties. Florida has no state personal income tax and no city income or gross-receipts taxes, so your books are shaped by your industry and the Florida stack (the 5.5% corporate tax for C-corps, 6% + county surtax sales tax, the tax on services, the tangible personal property return), which we build into your file the same way. Tell us where you are and we&rsquo;ll route you." },
  { q: "Does my Florida city change how my books are kept?", a: "Less than in some states &mdash; Florida cities don&rsquo;t levy their own income or gross-receipts business taxes. What changes city to city is the economy and the county discretionary surtax on top of the 6% state rate: Miami runs on international trade, Orlando on tourism, Fort Lauderdale on the marine industry, St. Pete on tech. We build the right industry accounting and the correct combined sales-tax rate by county into your books." },
  { q: "Is the service remote or in person?", a: "Remote-first &mdash; bookkeeping, cleanup, and QuickBooks work are delivered in your own QuickBooks Online or hosted Desktop file with a named ProAdvisor and scheduled calls. Remote delivery is exactly why we can serve all 67 counties to the same standard." },
  { q: "Do you file my Florida taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the sales tax, the 5.5% corporate income tax, and the tangible personal property return. We are not affiliated with Intuit Inc." },
  { q: "How do I get started in my Florida city?", a: "Book a free discovery call or get a free file review. A Certified ProAdvisor reviews your QuickBooks file and your city&rsquo;s situation, and sends a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
];

module.exports = {
  summary: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping across Florida</strong> &mdash; with dedicated, genuinely localized pages for the state&rsquo;s major metros and remote service in all 67 counties. Florida has <strong>no state personal income tax</strong> and Florida cities don&rsquo;t levy their own income or gross-receipts business taxes &mdash; so what makes each metro&rsquo;s books distinct is its <em>economy</em>. Miami runs on international trade and finance, Orlando on tourism, Tampa on finance and the port, Jacksonville on logistics and insurance, Fort Lauderdale on the marine industry, and St. Petersburg on tech and marine science. We build the right industry accounting and the Florida stack (the 5.5% corporate tax for C-corps, 6% + county surtax sales tax with the $5,000 single-item cap, the tax on services others exempt, the tangible personal property return) into your books, by a named bookkeeper on the same file every month. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  cities,
  citiesNote: "Don&rsquo;t see your city? We serve all 67 Florida counties remotely on QuickBooks &mdash; <a href=\"/contact/?intent=florida&amp;state=florida&amp;source_type=cities-hub&amp;funnel_stage=MOFU\">tell us where you are &rarr;</a>",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Florida Cities We Serve — Bookkeeping & QuickBooks","description":"Certified QuickBooks ProAdvisor bookkeeping across Florida's major metros and all 67 counties, each built around the city's actual economy, with the 5.5% corporate tax, 6%+surtax sales tax, and tax on services handled.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#fl-cities-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":ORIGIN+"/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Florida","item":ORIGIN+"/find-an-accountant/florida/"},
          {"@type":"ListItem","position":4,"name":"Cities"}]},
        {"@type":"ItemList","@id":URL+"#cities","name":"Florida cities served","itemListElement":cities.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.name),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
