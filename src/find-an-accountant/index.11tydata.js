/* /find-an-accountant/ — national routing HUB (rebuilt fresh, growth phase 2026-06-17).
 * Founder ruling: the old bare landing was deleted for quality; this is the proper
 * t-hub landing — parent of the state pillars (NY full tree + CA/TX/FL/IL landings)
 * and the find-an-accountant silo. Its job is to ROUTE. The interim 301
 * (/find-an-accountant/ -> /accounting/) is removed in src/redirects.njk so this URL
 * resolves to itself.
 *
 * HONESTY: the network model is stated truthfully per ARCHITECTURE-TRUTH — TechBrot is
 * an independent Certified QuickBooks ProAdvisor firm delivering remotely nationwide,
 * with selectively vetted partner practices where in-state presence adds value. NO
 * fabricated counts ("X accountants in Y cities"), no fake office network, no invented
 * stats/reviews. Remote-first is stated plainly (your location doesn't change the
 * service). Firm-level voice (founder-name-zero). Independent firm; not Intuit; does
 * not file state taxes — coordinates with the client's CPA/EA. Per-state tax hooks are
 * real and brief; the per-state pages carry the detail. */

function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

const states = [
  { name: "New York", href: "/find-an-accountant/new-york/", tag: "Full build-out", note: "The complete tree &mdash; pillar, cities, industries &amp; services across all 62 counties. Built around NYC&rsquo;s 8.875% sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax." },
  { name: "California", href: "/find-an-accountant/california/", tag: "State landing", note: "The San Francisco Gross Receipts Tax, California&rsquo;s $800 minimum franchise tax (FTB), CDTFA sales tax, and AB5 worker classification. SF city page live." },
  { name: "Texas", href: "/find-an-accountant/texas/", tag: "State landing", note: "No state income tax, the Texas franchise (margin) tax, and state &amp; local sales tax &mdash; for a fast-growth, no-personal-income-tax economy." },
  { name: "Florida", href: "/find-an-accountant/florida/", tag: "State landing", note: "No state income tax, Florida sales &amp; use tax, and the realities of a tourism- and service-heavy small-business base." },
  { name: "Illinois", href: "/find-an-accountant/illinois/", tag: "State landing", note: "Illinois&rsquo; flat state income tax, Chicago&rsquo;s added local taxes, and Illinois sales-tax sourcing rules." },
];

module.exports = {
  states,

  // VALUE PROP (H2: What you get, in any state.)
  valueProps: [
    { num: "01", title: "A Certified QuickBooks ProAdvisor on your file", body: "Not a generic bookkeeper &mdash; a Certified QuickBooks ProAdvisor team, with a named operator on the same file every month. Credentials verifiable on Intuit&rsquo;s public directory." },
    { num: "02", title: "Real local tax fluency, not a template", body: "Each state page answers what&rsquo;s actually different there &mdash; the SF Gross Receipts Tax, the NYC UBT, the Texas margin tax &mdash; built into how your books are kept, not bolted on at year-end." },
    { num: "03", title: "Fixed-fee, written scope first", body: "Every engagement is quoted as a fixed fee against a written scope before any work begins &mdash; no hourly billing, no surprises." },
    { num: "04", title: "Remote-first, so location never limits you", body: "Work is delivered on QuickBooks Online or hosted Desktop. Your city or state changes the tax context, never the service, the cadence, or the named operator." },
  ],

  // NETWORK (H2: How the network works.)
  network: [
    "TechBrot is an independent firm of Certified QuickBooks ProAdvisors. Most engagements are delivered directly by the TechBrot team, remotely, on your existing QuickBooks file &mdash; which is why we serve businesses in every state without needing an office on your block.",
    "Where in-state presence genuinely adds value &mdash; deep local tax depth, trust accounting, or in-person coordination &mdash; an engagement can route to a <strong>vetted partner practice</strong> that meets the same standard TechBrot delivers directly: Certified ProAdvisor credentials, fixed-fee written scope, and a named operator on the file. We don&rsquo;t list accountants we can&rsquo;t stand behind.",
    "New York is built out as the full template &mdash; pillar, cities, industries, and services. California, Texas, Florida, and Illinois have state landing pages today, with their city and industry children rolling out on the same model. Every other state is served remotely now; <a href=\"/contact/\">tell us where you are</a> and we&rsquo;ll route you.",
  ],
  networkNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc. It provides bookkeeping and operational accounting and coordinates with your CPA or EA, who files tax returns and represents you before tax authorities.",

  // FAQ (H2: Find-an-accountant questions.)
  faq: [
    { q: "Do you have an accountant near me?", a: "TechBrot is a remote-first firm of Certified QuickBooks ProAdvisors serving businesses in every state on their existing QuickBooks file. For states with dedicated pages &mdash; New York, California, Texas, Florida, and Illinois &mdash; the local tax context is built into the page; everywhere else we serve you remotely. Because the work is delivered on QuickBooks, you get the same named operator and cadence whether or not there&rsquo;s an office on your block." },
    { q: "Which states do you serve?", a: "All of them, remotely. New York has the full build-out (pillar, cities, industries, services). California, Texas, Florida, and Illinois have state landing pages with children rolling out. Every other state is served remotely today &mdash; the QuickBooks file is the same wherever you are." },
    { q: "Is the service remote, or do you meet in person?", a: "Remote-first. Bookkeeping, cleanup, setup, and advisory are delivered on QuickBooks Online or hosted Desktop, with calls and a named operator. Where in-person or deep local presence genuinely matters, an engagement can route to a vetted partner practice that meets the same standard." },
    { q: "How does the partner-practice network work?", a: "Most engagements are delivered directly by the TechBrot team. Where in-state presence adds real value, work can route to a vetted partner practice held to the same bar &mdash; Certified ProAdvisor credentials, fixed-fee written scope, and a named operator. We only route to practices we can stand behind; we don&rsquo;t publish a directory of accountants we haven&rsquo;t vetted." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping typically runs $400&ndash;$2,500+/mo by transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the scope and fee in writing within 3 business days of a free discovery call." },
    { q: "Are you a CPA firm? Do you file my taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm that does the operational accounting inside your QuickBooks file &mdash; bookkeeping, cleanup, setup, payroll, sales-tax-ready books, and advisory &mdash; and keeps it CPA-ready. Tax filing, audit, and representation are done by your CPA or EA, whom we coordinate with. Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":"Find a Certified QuickBooks ProAdvisor & Accountant","description":"Find a Certified QuickBooks ProAdvisor for your business — remote-first bookkeeping, cleanup, setup, and advisory in every state, with dedicated pages for New York, California, Texas, Florida, and Illinois. Fixed-fee, named operator. Independent firm; not affiliated with Intuit Inc.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#faa-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant"}]},
        {"@type":"ItemList","@id":url+"#states","name":"States served — find an accountant","itemListElement":data.states.map(function(s,idx){return {"@type":"ListItem","position":idx+1,"name":s.name,"url":"https://techbrot.com"+s.href};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
