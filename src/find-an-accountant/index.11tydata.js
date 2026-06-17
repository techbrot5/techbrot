/* /find-an-accountant/ — national routing HUB (rebuilt fresh + re-composed with the
 * elevated component system, growth phase 2026-06-17). The flagship 50-state routing
 * template: a data-driven state router (selector + premium routing-card grid), the
 * premium numbered process for the value prop, deliver-card feature cards for the
 * network, and a by-NEED silo-routing grid (QuickBooks → /quickbooks/, bookkeeping &
 * accounting → /accounting/, state → state pages) so the hub routes to the RIGHT silo,
 * never dead-ends. allStates is computed from a built-out map so the grid + selector
 * scale cleanly as states ship continuously.
 *
 * HONESTY: real network model (direct remote delivery + selectively vetted partners),
 * no fabricated counts/office network; firm-level voice (founder-name-zero); independent
 * firm, not Intuit; coordinates with the client's CPA/EA, who files. Per-state tax hooks
 * are real and brief; the per-state pages carry the detail. */

function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

// Built-out states route to their own page; every other state routes to contact with
// the state prefilled. Add a slug here as each state pillar/landing ships.
const builtOut = {
  "new-york": "/find-an-accountant/new-york/",
  "california": "/find-an-accountant/california/",
  "texas": "/find-an-accountant/texas/",
  "florida": "/find-an-accountant/florida/",
  "illinois": "/find-an-accountant/illinois/",
};
const US_STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
const allStates = US_STATES.map(function(name){
  const slug = name.toLowerCase().replace(/ /g,"-");
  return { name: name, built: !!builtOut[slug], href: builtOut[slug] || ("/contact/?intent=find-an-accountant&state=" + slug) };
});

// Built-out states as premium routing cards (the local-tax hook is the card substance).
const states = [
  { name: "New York", href: "/find-an-accountant/new-york/", tag: "Full build-out", note: "The complete tree &mdash; pillar, cities, industries &amp; services across all 62 counties. Built around NYC&rsquo;s 8.875% sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax." },
  { name: "California", href: "/find-an-accountant/california/", tag: "State landing", note: "The San Francisco Gross Receipts Tax, California&rsquo;s $800 minimum franchise tax (FTB), CDTFA sales tax, and AB5 worker classification. SF city page live." },
  { name: "Texas", href: "/find-an-accountant/texas/", tag: "State landing", note: "No state income tax, the Texas franchise (margin) tax, and state &amp; local sales tax &mdash; for a fast-growth, no-personal-income-tax economy." },
  { name: "Florida", href: "/find-an-accountant/florida/", tag: "State landing", note: "No state income tax, Florida sales &amp; use tax, and the realities of a tourism- and service-heavy small-business base." },
  { name: "Illinois", href: "/find-an-accountant/illinois/", tag: "State landing", note: "Illinois&rsquo; flat state income tax, Chicago&rsquo;s added local taxes, and Illinois sales-tax sourcing rules." },
];

// BY NEED — route to the right silo (not a dead-end).
const needs = [
  { name: "QuickBooks help", href: "/quickbooks/", opener: "QuickBooks silo", body: "Setup, cleanup, migration, error codes, and payroll &mdash; the work inside your QuickBooks file, by Certified ProAdvisors.", cta: "QuickBooks services &rarr;" },
  { name: "Bookkeeping &amp; cleanup", href: "/accounting/bookkeeping/", opener: "Accounting silo", body: "Monthly bookkeeping, catch-up, and cleanup brought to a CPA-ready standard and kept there.", cta: "Bookkeeping services &rarr;" },
  { name: "Accounting &amp; advisory", href: "/accounting/", opener: "Accounting silo", body: "Operational accounting, sales-tax-ready books, and fractional-CFO advisory once the books are clean.", cta: "Accounting &amp; advisory &rarr;" },
  { name: "Free file review", href: "/quickbooks/file-review/", opener: "Start here", body: "Not sure where to start? A Certified ProAdvisor reviews your file and tells you exactly where you stand &mdash; free.", cta: "Get the free file review &rarr;" },
];

// WHAT YOU GET — rendered as the premium numbered process (the ONE numbered system).
const valueProps = [
  { name: "A Certified QuickBooks ProAdvisor on your file", body: "Not a generic bookkeeper &mdash; a Certified ProAdvisor team with a named operator on the same file every month. Credentials verifiable on Intuit&rsquo;s public directory." },
  { name: "Real local tax fluency, never a template", body: "Each state page answers what&rsquo;s actually different there &mdash; the SF Gross Receipts Tax, the NYC UBT, the Texas margin tax &mdash; built into how your books are kept." },
  { name: "Fixed-fee, written scope first", body: "Every engagement is quoted as a fixed fee against a written scope before any work begins &mdash; no hourly billing, no surprises." },
  { name: "Remote-first, so location never limits you", body: "Delivered on QuickBooks Online or hosted Desktop. Your city or state changes the tax context, never the service, the cadence, or the named operator." },
];

// NETWORK — deliver-card feature cards (not a wall of text).
const network = [
  { title: "Delivered directly, remotely", body: "Most engagements are handled by the TechBrot team on your existing QuickBooks file &mdash; which is why we serve businesses in every state without needing an office on your block." },
  { title: "Vetted partner practices", body: "Where in-state presence genuinely adds value &mdash; deep local tax depth, trust accounting, in-person coordination &mdash; work routes to a vetted partner practice held to the same standard: Certified ProAdvisor credentials, fixed-fee written scope, a named operator. We don&rsquo;t list accountants we can&rsquo;t stand behind." },
  { title: "Every state, rolling out by depth", body: "New York is the full template; California, Texas, Florida, and Illinois have state pages with children rolling out; every other state is served remotely now. <a href=\"/contact/?intent=find-an-accountant\">Tell us where you are</a> and we&rsquo;ll route you." },
];

const faq = [
  { q: "Do you have an accountant near me?", a: "TechBrot is a remote-first firm of Certified QuickBooks ProAdvisors serving businesses in every state on their existing QuickBooks file. For states with dedicated pages &mdash; New York, California, Texas, Florida, and Illinois &mdash; the local tax context is built in; everywhere else we serve you remotely. Because the work is delivered on QuickBooks, you get the same named operator and cadence whether or not there&rsquo;s an office on your block." },
  { q: "Which states do you serve?", a: "All of them, remotely. New York has the full build-out (pillar, cities, industries, services). California, Texas, Florida, and Illinois have state landing pages with children rolling out. Every other state is served remotely today &mdash; the QuickBooks file is the same wherever you are." },
  { q: "Is the service remote, or do you meet in person?", a: "Remote-first. Bookkeeping, cleanup, setup, and advisory are delivered on QuickBooks Online or hosted Desktop, with calls and a named operator. Where in-person or deep local presence genuinely matters, an engagement can route to a vetted partner practice that meets the same standard." },
  { q: "How does the partner-practice network work?", a: "Most engagements are delivered directly by the TechBrot team. Where in-state presence adds real value, work can route to a vetted partner practice held to the same bar &mdash; Certified ProAdvisor credentials, fixed-fee written scope, and a named operator. We only route to practices we can stand behind; we don&rsquo;t publish a directory of accountants we haven&rsquo;t vetted." },
  { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping typically runs $400&ndash;$2,500+/mo by transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the scope and fee in writing within 3 business days of a free discovery call." },
  { q: "Are you a CPA firm? Do you file my taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm that does the operational accounting inside your QuickBooks file &mdash; bookkeeping, cleanup, setup, payroll, sales-tax-ready books, and advisory &mdash; and keeps it CPA-ready. Tax filing, audit, and representation are done by your CPA or EA, whom we coordinate with. Not affiliated with Intuit Inc." },
];

module.exports = {
  states, allStates, needs, valueProps, network, faq,
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
