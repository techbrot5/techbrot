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
  "delaware": "/find-an-accountant/delaware/",
  "indiana": "/find-an-accountant/indiana/",
  "pennsylvania": "/find-an-accountant/pennsylvania/",
  "new-jersey": "/find-an-accountant/new-jersey/",
  "maryland": "/find-an-accountant/maryland/",
  "virginia": "/find-an-accountant/virginia/",
  "ohio": "/find-an-accountant/ohio/",
  "michigan": "/find-an-accountant/michigan/",
  "georgia": "/find-an-accountant/georgia/",
  "north-carolina": "/find-an-accountant/north-carolina/",
  "arizona": "/find-an-accountant/arizona/",
  "tennessee": "/find-an-accountant/tennessee/",
  "washington": "/find-an-accountant/washington/",
  "colorado": "/find-an-accountant/colorado/",
  "massachusetts": "/find-an-accountant/massachusetts/",
};
const US_STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
const allStates = US_STATES.map(function(name){
  const slug = name.toLowerCase().replace(/ /g,"-");
  return { name: name, built: !!builtOut[slug], href: builtOut[slug] || ("/contact/?intent=find-an-accountant&state=" + slug) };
});

// Built-out states as premium routing cards (the local-tax hook is the card substance).
// 20 states with dedicated pages: NY (full tree), the 4 original landings, the firm anchor,
// and the 14 core states (pillar + 5 essentials each). Every card's note is the REAL local-tax
// hook from that state's verified FACTS base — no template copy.
const states = [
  { name: "New York", href: "/find-an-accountant/new-york/", tag: "Full build-out", note: "The complete tree &mdash; pillar, cities, industries &amp; services across all 62 counties. Built around NYC&rsquo;s 8.875% sales tax, the 4% Unincorporated Business Tax, and the Commercial Rent Tax." },
  { name: "California", href: "/find-an-accountant/california/", tag: "State landing", note: "The San Francisco Gross Receipts Tax, California&rsquo;s $800 minimum franchise tax (FTB), CDTFA sales tax, and AB5 worker classification. SF city page live." },
  { name: "Texas", href: "/find-an-accountant/texas/", tag: "State landing", note: "No state income tax, the Texas franchise (margin) tax, and state &amp; local sales tax &mdash; for a fast-growth, no-personal-income-tax economy." },
  { name: "Florida", href: "/find-an-accountant/florida/", tag: "State landing", note: "No state income tax, Florida sales &amp; use tax, and the realities of a tourism- and service-heavy small-business base." },
  { name: "Illinois", href: "/find-an-accountant/illinois/", tag: "State landing", note: "Illinois&rsquo; flat state income tax, Chicago&rsquo;s added local taxes, and Illinois sales-tax sourcing rules." },
  { name: "Delaware", href: "/find-an-accountant/delaware/", tag: "Headquarters", note: "Our home state &mdash; the gross receipts tax by business activity, the annual franchise tax, and no sales tax, for the incorporation capital and its holding-company base." },
  { name: "Arizona", href: "/find-an-accountant/arizona/", tag: "Core state", note: "The flat 2.5% income tax (the lowest in the country) and the Transaction Privilege Tax (TPT) &mdash; a privilege tax on the seller by business classification, with the prime-contracting 65% rule for construction." },
  { name: "Colorado", href: "/find-an-accountant/colorado/", tag: "Core state", note: "The flat 4.40% income tax and the home-rule self-collecting city sales tax &mdash; ~70 cities filing separately or through the SUTS portal &mdash; plus the retail delivery fee." },
  { name: "Georgia", href: "/find-an-accountant/georgia/", tag: "Core state", note: "The flat income tax, the county local-option sales tax (LOST/SPLOST/ELOST/TSPLOST), and the corporate net worth tax, for the Atlanta logistics and film economy." },
  { name: "Indiana", href: "/find-an-accountant/indiana/", tag: "Core state", note: "The 92-county local income tax (LIT) withheld by county of residence, the flat state income tax, and the flat 7% sales tax." },
  { name: "Maryland", href: "/find-an-accountant/maryland/", tag: "Core state", note: "The county &ldquo;piggyback&rdquo; local income tax by county of residence, DC/PA/VA/WV reciprocity, and the new 3% sales tax on data and IT services." },
  { name: "Massachusetts", href: "/find-an-accountant/massachusetts/", tag: "Core state", note: "The 5% flat income tax plus the 4% &ldquo;millionaires&rdquo; surtax over ~$1.1M, the corporate excise, and a flat 6.25% sales tax (no local add-on), for the Boston and Cambridge biotech economy." },
  { name: "Michigan", href: "/find-an-accountant/michigan/", tag: "Core state", note: "The flat 4.25% income tax, the city income tax across 24 CITA cities (Detroit at 2.4%/1.2%), the 6% Corporate Income Tax, and a flat 6% sales tax." },
  { name: "New Jersey", href: "/find-an-accountant/new-jersey/", tag: "Core state", note: "The UI/TDI/FLI/WF payroll stack across two wage bases, PA&ndash;NJ reciprocity, Newark and Jersey City payroll taxes, and the 6.625% sales tax." },
  { name: "North Carolina", href: "/find-an-accountant/north-carolina/", tag: "Core state", note: "The flat income tax, the corporate income tax phasing out to zero by 2030, the franchise tax that survives it, and the county-variable sales tax." },
  { name: "Ohio", href: "/find-an-accountant/ohio/", tag: "Core state", note: "The municipal income tax withheld by work location (RITA/CCA and the 20-day rule), the Commercial Activity Tax, and the county sales-tax rate." },
  { name: "Pennsylvania", href: "/find-an-accountant/pennsylvania/", tag: "Core state", note: "Act 32 local Earned Income Tax by PSD code under the &ldquo;higher-of&rdquo; rule, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT taxes, and the 6%/7%/8% sales-tax split." },
  { name: "Tennessee", href: "/find-an-accountant/tennessee/", tag: "Core state", note: "No individual income tax (the Hall tax was repealed in 2021), the Franchise &amp; Excise (F&amp;E) business tax, the business gross-receipts tax, and one of the highest combined sales taxes in the country." },
  { name: "Virginia", href: "/find-an-accountant/virginia/", tag: "Core state", note: "The local BPOL gross-receipts business tax tracked by jurisdiction, the variable regional sales tax, and MD/PA/WV/KY/DC reciprocity." },
  { name: "Washington", href: "/find-an-accountant/washington/", tag: "Core state", note: "No income tax but the Business &amp; Occupation (B&amp;O) gross-receipts tax by classification (plus city B&amp;O), a high combined sales tax, and the 7% capital-gains tax, for the Seattle tech and Boeing economy." },
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
  { name: "A Certified QuickBooks ProAdvisor on your file", body: "Not a generic bookkeeper &mdash; a Certified ProAdvisor team with a named operator on the same file every month. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors." },
  { name: "Real local tax fluency, never a template", body: "Each state page answers what&rsquo;s actually different there &mdash; the SF Gross Receipts Tax, the NYC UBT, the Texas margin tax &mdash; built into how your books are kept." },
  { name: "Fixed-fee, written scope first", body: "Every engagement is quoted as a fixed fee against a written scope before any work begins &mdash; no hourly billing, no surprises." },
  { name: "Remote-first, so location never limits you", body: "Delivered on QuickBooks Online or hosted Desktop. Your city or state changes the tax context, never the service, the cadence, or the named operator." },
];

// NETWORK — deliver-card feature cards (not a wall of text).
const network = [
  { title: "Delivered directly, remotely", body: "Most engagements are handled by the TechBrot team on your existing QuickBooks file &mdash; which is why we serve businesses in every state without needing an office on your block." },
  { title: "Vetted partner practices", body: "Where in-state presence genuinely adds value &mdash; deep local tax depth, trust accounting, in-person coordination &mdash; work routes to a vetted partner practice held to the same standard: Certified ProAdvisor credentials, fixed-fee written scope, a named operator. We don&rsquo;t list accountants we can&rsquo;t stand behind." },
  { title: "Every state, rolling out by depth", body: "<strong>20 states now have dedicated pages</strong> &mdash; New York is the full template (pillar, cities, industries, services), and 19 more carry a state pillar built around what&rsquo;s actually different there. Every other state is served remotely today. <a href=\"/contact/?intent=find-an-accountant\">Tell us where you are</a> and we&rsquo;ll route you." },
];

const faq = [
  { q: "Do you have an accountant near me?", a: "TechBrot is a remote-first firm of Certified QuickBooks ProAdvisors serving businesses in every state on their existing QuickBooks file. Twenty states have dedicated pages &mdash; New York, California, Texas, Florida, Illinois, Delaware, Indiana, Pennsylvania, New Jersey, Maryland, Virginia, Ohio, Michigan, Georgia, North Carolina, Arizona, Tennessee, Washington, Colorado, and Massachusetts &mdash; where the local tax context is built in; everywhere else we serve you remotely. Because the work is delivered on QuickBooks, you get the same named operator and cadence whether or not there&rsquo;s an office on your block." },
  { q: "Which states do you serve?", a: "All of them, remotely. Twenty states have dedicated pages so far &mdash; New York has the full build-out (pillar, cities, industries, services), and 19 more carry a state pillar with its core services, each built around the local taxes and filing realities that actually differ there. Every other state is served remotely today &mdash; the QuickBooks file is the same wherever you are." },
  { q: "Is the service remote, or do you meet in person?", a: "Remote-first. Bookkeeping, cleanup, setup, and advisory are delivered on QuickBooks Online or hosted Desktop, with calls and a named operator. Where in-person or deep local presence genuinely matters, an engagement can route to a vetted partner practice that meets the same standard." },
  { q: "How does the partner-practice network work?", a: "Most engagements are delivered directly by the TechBrot team. Where in-state presence adds real value, work can route to a vetted partner practice held to the same bar &mdash; Certified ProAdvisor credentials, fixed-fee written scope, and a named operator. We only route to practices we can stand behind; we don&rsquo;t publish a directory of accountants we haven&rsquo;t vetted." },
  { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping typically runs $400&ndash;$2,500+/mo by transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the scope and fee in writing within 3 business days of a free discovery call." },
  { q: "Are you a CPA firm? Do you file my taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm that does the operational accounting inside your QuickBooks file &mdash; bookkeeping, cleanup, setup, payroll, sales-tax-ready books, and advisory &mdash; and keeps it CPA-ready. Tax filing, audit, and representation are done by your CPA or EA, whom we coordinate with. Not affiliated with Intuit Inc." },
  { q: "Do you work with my industry?", a: "Almost certainly. We keep the books for service businesses, e-commerce and retail, professional practices, construction and the trades, real estate, agencies, and nonprofits, among others. What actually changes by industry is the chart of accounts, how revenue is recognized, and the sales-tax treatment &mdash; not whether we can help. Tell us your industry on a discovery call and we&rsquo;ll show you exactly how we&rsquo;d structure your <a href=\"/accounting/bookkeeping/\">bookkeeping</a> and keep it CPA-ready." },
  { q: "How do I switch my bookkeeping to you?", a: "It&rsquo;s straightforward, and your data comes with you. We export your history out of your current system (or recover it if a prior provider shut down), migrate it into your own QuickBooks file, clean up any gaps the handover leaves, then keep the monthly books accurate and CPA-ready. Most moves take a few weeks; see how the <a href=\"/quickbooks/migration/\">QuickBooks migration</a> works, and note that your file and data stay yours throughout." },
  { q: "How fast can you start?", a: "Usually within a few days of your free discovery call. After a quick file review we send a fixed-fee scope in writing within 3 business days, and once you approve it a named Certified ProAdvisor begins onboarding right away &mdash; onboarding and any cleanup run in parallel so your monthly books stay on schedule. Want to move now? Call (877) 751-5575 or <a href=\"/contact/\">book a discovery call</a>." },
];

module.exports = {
  states, allStates, needs, valueProps, network, faq,
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":"Find a Certified QuickBooks ProAdvisor & Accountant","description":"Find a Certified QuickBooks ProAdvisor for your business — remote-first bookkeeping, cleanup, setup, and advisory in every state, with dedicated pages for 20 states including New York, California, Texas, Florida, Illinois, Pennsylvania, Ohio, Michigan, Georgia, Arizona, Tennessee, Washington, Colorado, and Massachusetts. Fixed-fee, named operator. Independent firm; not affiliated with Intuit Inc.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#faa-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant"}]},
        {"@type":"ItemList","@id":url+"#states","name":"States served — find an accountant","itemListElement":data.states.map(function(s,idx){return {"@type":"ListItem","position":idx+1,"name":s.name,"url":"https://techbrot.com"+s.href};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
