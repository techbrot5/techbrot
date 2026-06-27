/* /find-an-accountant/new-york/cities/bronx/ — t-location CITY page (NYC borough:
 * Bronx County). MIGRATION-PROTOCOL: content-to-goal, visual-floor. Sources: the
 * FROZEN EQUITY CONTRACT (contract-ny-bronx.txt) — the ONLY authority for the
 * headings + 8 FAQ — and the live baseline old HTML (find-an-accountant/new-york/
 * cities/bronx/index.html, full body read) for body prose. A city page is LIGHTER
 * than the new-york.* pillar: it reuses the pillar's cobalt vocabulary + structure
 * but carries only the contract sections, not the full state-pillar ecosystem.
 *
 * HONESTY (R5): no fabricated reviews, stats, clients. NO AggregateRating. No
 * personal name in visible content (firm-level "Certified ProAdvisor team" review;
 * David Westgate appears only in the global Person schema, not on this page).
 * Independent firm — does NOT file NY/NYC taxes; coordinates with the client's CPA.
 * Local specificity (Hunts Point food distribution, Bronx County, NYC 8.875% sales
 * tax, 4% UBT $95K floor / $3,400 credit, NO Commercial Rent Tax) is genuine and
 * verified vs NYC DOF / NY DTF — not a mad-lib. CTA lexicon canonical; intent=new-york.
 *
 * Front-matter (layout/permalink/slug/hero/inBrief/ctaBand) lives in bronx.njk;
 * this file supplies the content arrays + the eleventyComputed pageGraph (@graph). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // TL;DR — real H2. (H2: The short version.)
  tldr: "TechBrot provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Bronx businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Bronx businesses pay NYC&rsquo;s <strong>8.875% combined sales tax</strong> and, if unincorporated, the <strong>4% Unincorporated Business Tax</strong> (after a $95,000 gross-income threshold, with a credit that fully offsets UBT of $3,400 or less) &mdash; but the <strong>Commercial Rent Tax does not apply in the Bronx</strong> (it&rsquo;s Manhattan-only, south of 96th Street). We keep your books <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> and coordinate with your CPA, who files. Fixed-fee against a <a href=\"/find-an-accountant/new-york/pricing/\">written scope</a> ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on QuickBooks Online.",

  // AI SUMMARY — 5 entity-dense Q&As (mirrors the visible 5-question block + #qa schema).
  // (H2: The Bronx bookkeeping, in five questions.)
  aiSummary: [
    { q: "Who provides bookkeeping for Bronx businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping across the Bronx</strong> &mdash; from Hunts Point distributors and wholesalers to Fordham retail and neighborhood services &mdash; with a named bookkeeper per file and fluency in NYC taxes." },
    { q: "What taxes affect a Bronx business?", a: "The <strong>8.875% NYC combined sales tax</strong> and, for unincorporated businesses, the <strong>4% UBT</strong>. The <strong>Commercial Rent Tax does not apply in the Bronx</strong> &mdash; it&rsquo;s limited to Manhattan south of 96th Street." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly." },
    { q: "Do Bronx businesses owe Commercial Rent Tax?", a: "<strong>No.</strong> The CRT applies only to commercial tenants in Manhattan south of 96th Street. A Bronx business &mdash; in Hunts Point, Fordham, anywhere in the borough &mdash; does not owe it." },
    { q: "Do you work with food distributors and wholesalers?", a: "Yes &mdash; the Bronx is home to Hunts Point, the country&rsquo;s largest food distribution hub. We keep inventory-heavy, high-volume wholesale and distribution books clean so margins and cost-of-goods are accurate." },
  ],

  // LOCAL CONTEXT — the un-clonable band (real Bronx economy). (H2: Why Bronx books have their own character.)
  localLead: "The Bronx shares New York City&rsquo;s taxes but not its business profile &mdash; it&rsquo;s a borough of food distribution and wholesale at national scale, fast-growing neighborhood commerce, and a major healthcare presence, and the books have to reflect that.",
  localBody: [
    "The Bronx anchors one of the most important pieces of infrastructure in American food: the Hunts Point Food Distribution Center, the largest food distribution hub in the country by volume &mdash; a 329-acre campus of more than 150 wholesalers, distributors, and manufacturers moving billions of pounds of produce, meat, and fish a year. That makes inventory-heavy, high-volume wholesale and distribution a defining part of the borough&rsquo;s economy, alongside a fast-growing small-business base in Mott Haven, Fordham, and the South Bronx, and a large healthcare and nonprofit sector. The bookkeeping spans cost-of-goods-driven distributors, neighborhood retail, and grant- and insurance-funded organizations.",
    "That mix is what generic, software-only bookkeeping handles badly. A food distributor or wholesaler lives and dies on inventory accuracy and cost-of-goods &mdash; get those wrong and the margin is a fiction. A high-volume operation needs deposits reconciled against the 8.875% sales-tax rate so the quarterly return is right. A growing neighborhood business needs clean books to qualify for a loan. And every unincorporated Bronx business needs its books structured for the UBT &mdash; a tax most owners don&rsquo;t know they owe until a notice arrives. TechBrot keeps a named bookkeeper on your file who knows a Bronx distributor keeps books differently than a Manhattan office.",
    "The result: books that reflect how a Bronx business actually operates, reconciled every month, and handed to your CPA <a href=\"/find-an-accountant/new-york/bookkeeping-services/\">CPA-ready</a> &mdash; so filing the UBT and sales tax is fast and accurate, and the Commercial Rent Tax you don&rsquo;t owe never enters the picture.",
  ],

  // AREA GRID — real Bronx neighborhoods. (H2: The Bronx areas we serve.)
  areas: [
    { name: "Hunts Point", note: "Food distribution, wholesale, manufacturing, logistics" },
    { name: "Mott Haven / South Bronx", note: "Fast-growing retail, food, small business" },
    { name: "Fordham / Belmont", note: "Retail corridors, restaurants, services" },
    { name: "Riverdale", note: "Professional services, medical, retail" },
    { name: "Throgs Neck / Morris Park", note: "Healthcare, trades, neighborhood business" },
    { name: "Bronx-wide", note: "Nonprofits, healthcare, construction" },
  ],

  // TAX STACK — proof-strip grid-3 (NOT stat-row). (H2: The Bronx's tax stack, at a glance.)
  taxStack: [
    { figure: "8.875%", desc: "Combined sales tax &mdash; the citywide NYC rate (4% state + 4.5% city + 0.375% MCTD surcharge), the same across all five boroughs. Tracked and reconciled in QuickBooks for an accurate quarterly return." },
    { figure: "4%", desc: "Unincorporated Business Tax on sole proprietors, partnerships &amp; LLCs doing business in NYC &mdash; applies once gross income tops $95,000; a credit fully offsets it when UBT owed is $3,400 or less. Filed on NYC-202/204 by your CPA." },
    { figure: "$0", desc: "Commercial Rent Tax in the Bronx &mdash; the CRT applies only to Manhattan south of 96th Street, so Bronx tenants don&rsquo;t owe it. One less NYC tax to track than a Manhattan business." },
  ],

  // LOCAL INDUSTRIES — grid-3 buyer-cards into NY industry pages, real Bronx wrinkles.
  // (H2: Industry-specific bookkeeping for The Bronx businesses.)
  industries: [
    { eyebrow: "Vertical 01", name: "Restaurants", href: "/find-an-accountant/new-york/industries/restaurant/", body: "Fordham, Belmont, and South Bronx restaurants and food businesses &mdash; POS deposits reconciled against the 8.875% rate, tipped-employee payroll, food vs. alcohol sales-tax differentiation, weekly close cadence.", cta: "NY restaurant accounting &rarr;" },
    { eyebrow: "Vertical 02", name: "Healthcare", href: "/find-an-accountant/new-york/industries/healthcare/", body: "The Bronx&rsquo;s large medical, dental, and specialty presence &mdash; insurance payer reconciliation, multi-provider payroll with NYC withholding, and HIPAA-aware data handling.", cta: "NY healthcare accounting &rarr;" },
    { eyebrow: "Vertical 03", name: "Construction", href: "/find-an-accountant/new-york/industries/construction/", body: "Bronx contractors and trades &mdash; job costing, WIP schedules, retainage tracking, subcontractor 1099s, and NYC prevailing-wage payroll where it applies.", cta: "NY construction accounting &rarr;" },
    { eyebrow: "Vertical 04", name: "Real Estate", href: "/find-an-accountant/new-york/industries/real-estate/", body: "Bronx investors, brokerages, and property managers &mdash; multi-entity ledgers, trust accounting, and the documentation a borough property portfolio needs to stay clean.", cta: "NY real estate accounting &rarr;" },
    { eyebrow: "Vertical 05", name: "Nonprofits", href: "/find-an-accountant/new-york/industries/nonprofit/", body: "The Bronx&rsquo;s grant- and insurance-funded organizations &mdash; CHAR500-ready workpapers, functional expense allocation, GAAP-basis financials, and grant revenue recognition for your CPA&rsquo;s 990.", cta: "NY nonprofit accounting &rarr;" },
    { eyebrow: "Vertical 06", name: "Law Firms", href: "/find-an-accountant/new-york/industries/legal/", body: "Bronx legal practices &mdash; IOLTA trust accounting in a separate QuickBooks ledger, partner-draw classification, and NY Rules of Professional Conduct compliance.", cta: "NY law firm accounting &rarr;" },
  ],

  // SERVICE VALUE STACK — grid-2 buyer-cards. The 4 frozen H3s, verbatim.
  // (H2: Complete bookkeeping, The Bronx-aware. + 4 H3s)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, clean chart of accounts, and monthly statements &mdash; with NYC sales tax tracked.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "High-volume Bronx books fall behind fast. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or Desktop.", href: "/find-an-accountant/new-york/quickbooks-accountant/", cta: "NY QuickBooks accountant &rarr;" },
    { num: "04", title: "UBT &amp; sales-tax-ready books", body: "Books structured so your CPA can file the NYC UBT and quarterly sales tax accurately.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "NYC sales tax help &rarr;" },
  ],

  // ADVISORY — standing brand line. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "For a Bronx distributor or wholesaler, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your true cost-of-goods, which products actually carry margin, or whether cash will cover the next inventory buy. That judgment is what a named Bronx bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // FAQ — 8 Q/A VERBATIM from the contract. Visible faq__list = FAQPage schema (same array).
  // (H2: The Bronx bookkeeping questions.)
  faq: [
    { q: "Do you have a bookkeeper for my Bronx business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for businesses across the Bronx &mdash; Hunts Point distributors and wholesalers, Mott Haven and Fordham retail, Riverdale professional services, and neighborhoods borough-wide. Work is delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month, with full fluency in the NYC taxes that affect Bronx businesses." },
    { q: "What taxes does a Bronx business pay?", a: "A Bronx business pays New York City&rsquo;s 8.875% combined sales tax (the same rate across all five boroughs) and, if it&rsquo;s unincorporated &mdash; a sole proprietor, partnership, or LLC &mdash; the 4% Unincorporated Business Tax once gross income tops $95,000. The Commercial Rent Tax does not apply in the Bronx; it&rsquo;s limited to Manhattan south of 96th Street. So a Bronx business tracks one fewer NYC tax than a comparable Manhattan one." },
    { q: "Do Bronx businesses owe the Commercial Rent Tax?", a: "No. The NYC Commercial Rent Tax applies only to commercial tenants located in Manhattan south of the center line of 96th Street. Businesses in the Bronx &mdash; along with Brooklyn, Queens, and Staten Island &mdash; are not subject to it. A Bronx lease never triggers the CRT." },
    { q: "Do I owe the NYC Unincorporated Business Tax (UBT) in the Bronx?", a: "Possibly &mdash; it depends on size and structure. The UBT is a 4% NYC tax on net business income for sole proprietors, single-member LLCs, partnerships, and multi-member LLCs doing business in the city, including the Bronx. It only kicks in once gross income exceeds $95,000, and there&rsquo;s a credit that fully offsets the UBT when the tax owed is $3,400 or less (partial up to $5,400) &mdash; so many smaller Bronx businesses owe little or nothing. We keep the books structured so the real number is clear for your CPA to file on the NYC-202 or NYC-204." },
    { q: "How much does a Bronx bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Bronx distributors and wholesalers with high transaction volume or inventory are scoped transparently before any work begins." },
    { q: "Do you work with Hunts Point food distributors and wholesalers?", a: "Yes &mdash; the Bronx is home to Hunts Point, the largest food distribution hub in the country, so inventory-heavy wholesale and distribution work is core to what we do here. We keep inventory, cost-of-goods, and high-volume transaction reconciliation clean in QuickBooks so margins are accurate and the books hold up to lender or vendor scrutiny." },
    { q: "Can you clean up a messy Bronx QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common engagements. Bronx businesses fall behind for the usual reasons &mdash; growth, turnover, wearing too many hats. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean as you scale." },
    { q: "How do we get started in the Bronx?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Bronx situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level, NO founder name. (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewBody: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor firm serving the Bronx and the wider New York City market. The Bronx tax figures (8.875% combined sales tax; 4% UBT after the $95,000 gross-income threshold, with a credit fully offsetting UBT of $3,400 or less; and no Commercial Rent Tax, which applies only to Manhattan south of 96th Street) reflect NYC Department of Finance and NY State Department of Taxation &amp; Finance rules current as of the date below and are reviewed periodically. TechBrot provides bookkeeping and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; 40+ years operational accounting experience" },
    { label: "Standards", detail: "Verified vs NYC Dept of Finance &amp; NY DTF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/cities/bronx/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"The Bronx Bookkeeper & QuickBooks Accountant · TechBrot","description":"QuickBooks ProAdvisor bookkeeping for Bronx businesses — Hunts Point to Fordham. 8.875% sales tax & UBT tracked, no Commercial Rent Tax. Fixed-fee, CPA-ready.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-cities-bronx.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nybx-ai-summary","#nybx-tldr-body"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Cities","item":"https://techbrot.com/find-an-accountant/new-york/cities/"},
          {"@type":"ListItem","position":5,"name":"New York City","item":"https://techbrot.com/find-an-accountant/new-york/cities/new-york-city/"},
          {"@type":"ListItem","position":6,"name":"The Bronx"}]},
        {"@type":"Service","@id":url+"#service","name":"The Bronx Bookkeeping & QuickBooks Services","serviceType":"Bookkeeping and QuickBooks ProAdvisor services","description":"Monthly bookkeeping, cleanup, and QuickBooks management for Bronx businesses across the borough's food-distribution, wholesale, healthcare, and neighborhood economy, with NYC sales tax and UBT tracked and CPA-ready statements monthly.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"AdministrativeArea","name":"The Bronx, New York","sameAs":"https://en.wikipedia.org/wiki/The_Bronx"},
          {"@type":"City","name":"New York City","sameAs":"https://en.wikipedia.org/wiki/New_York_City"}],
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
