/* /find-an-accountant/new-york/industries/restaurant/ — t-location INDUSTRY child
 * (deeper than a city child). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-restaurant.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/restaurant/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * construction.11tydata.js: JSON front-matter lives in the .njk; this file supplies the
 * content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the same
 * `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. The baseline's
 * named-reviewer line (David Westgate · 40+ years) is reframed to firm-level: no individual
 * appears in visible content; David Westgate remains ONLY in reviewedBy schema @id. New York
 * restaurant facts (2026 tipped-wage rates — NYC/LI/Westchester $11.35 cash + $5.65 tip
 * credit = $17.00, rest of NYS $10.70 + $5.30; 80/20 rule; prepared/heated food taxable
 * across dine-in/takeout/delivery, NYC up to 8.875%; OBBBA tip-reporting W-2 codes) reflect
 * NYS DOL and NY DTF guidance, web-verified Jun 2026. Independent firm — does NOT file NY/NYC
 * taxes; coordinates with the client's CPA, who files. Footer chrome (Accounting/QuickBooks/
 * Company/Network) and the newsletter ("The monthly brief.") are intentionally NOT rendered
 * here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section carrying the TL;DR prose. (H2: The short version.)
  summary: [
    "<strong>Restaurant accounting</strong> in New York lives at the intersection of two unforgiving rules and razor-thin margins. First, <strong>tip-credit payroll</strong>: for 2026, a food-service worker in New York City, Long Island, and Westchester must receive a cash wage of at least <strong>$11.35</strong> with a tip credit of up to <strong>$5.65</strong> &mdash; together meeting the <strong>$17.00</strong> minimum wage &mdash; while the rest of New York State is <strong>$10.70</strong> cash plus a <strong>$5.30</strong> credit. The <strong>80/20 rule</strong> blocks the credit when staff spend more than two hours or 20% of a shift on non-tipped work, and if weekly tips don&rsquo;t reach the minimum you must make up the difference.",
    "Second, <strong>sales tax on prepared food</strong>: prepared and heated food sold for immediate consumption is taxable &mdash; dine-in, takeout, and delivery alike &mdash; with no off-premises exemption, at rates reaching <strong>8.875%</strong> in NYC. The genuine New York wrinkle is the grocery line: an unheated whole loaf sold as-is can be exempt, but the moment it becomes a sandwich or is heated it&rsquo;s fully taxable, so the same kitchen produces both exempt and taxable items and the POS has to know the difference.",
    "Underneath both sits the operating math. A named Certified ProAdvisor reconciles your <a href=\"/quickbooks/online/\">POS</a> (Toast, Square, or Clover) to the bank daily, tracks <strong>food cost</strong> and <strong>prime cost</strong> &mdash; cost of goods plus labor as a percentage of sales &mdash; and keeps payroll and <a href=\"/find-an-accountant/new-york/sales-tax-help/\">sales tax</a> structured to these rules. <strong>TechBrot</strong> sets all of it up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, fixed-fee from <a href=\"/find-an-accountant/new-york/pricing/\">$400&ndash;$2,500+/mo</a>. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York restaurant accounting, in five questions.)
  aiSummary: [
    { q: "What&rsquo;s different about restaurant accounting in New York?", a: "<strong>Thin margins and two strict NY rules: tip-credit payroll and sales tax on prepared food.</strong> The core work is reconciling the <strong>POS to the bank daily</strong>, tracking <strong>food cost and prime cost</strong>, and keeping payroll and sales tax compliant &mdash; where small errors erase an already-slim profit." },
    { q: "What&rsquo;s the New York tip credit for 2026?", a: "In NYC, Long Island, and Westchester a food-service worker gets at least <strong>$11.35 cash</strong> plus up to a <strong>$5.65 tip credit</strong>, meeting the <strong>$17.00</strong> minimum. The rest of New York State is <strong>$10.70 cash plus a $5.30 credit</strong>. If weekly tips don&rsquo;t reach the minimum, the employer makes up the difference, and the <strong>80/20 rule</strong> limits the credit on non-tipped work." },
    { q: "Is takeout and delivery taxable in New York?", a: "<strong>Yes.</strong> Prepared and heated food for immediate consumption is taxable whether dine-in, takeout, or delivered &mdash; at rates reaching <strong>8.875%</strong> in NYC. The wrinkle is the grocery line: a cold whole loaf can be exempt, but the sandwich made from it is taxable. Failing to collect on off-premises orders is a common, costly mistake." },
    { q: "Can you reconcile my POS to QuickBooks?", a: "Yes &mdash; that&rsquo;s the core of it. We map your <strong>Toast, Square, or Clover</strong> gross sales, comps, tips, tax collected, and processor fees into QuickBooks and reconcile against <strong>daily bank deposits</strong>, so your books reflect real sales and your food-cost and prime-cost percentages rest on real numbers, not the net deposit." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by sales volume, number of locations, payroll complexity, and how many delivery and POS channels we reconcile. Monthly bookkeeping typically runs <strong>$400&ndash;$2,500+/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
  ],

  // CHALLENGES — three places NY restaurants lose money (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places New York restaurants lose money and risk penalties. + 3 H3s)
  challenges: [
    { signal: "Wage-law penalties", title: "Tip-credit payroll done wrong.", body: "New York&rsquo;s tip credit is precise: in 2026 a NYC food-service worker needs at least <strong>$11.35 cash</strong> plus up to a <strong>$5.65 tip credit</strong> to reach the $17.00 minimum, and the <strong>80/20 rule</strong> disallows the credit when staff spend more than two hours or 20% of a shift on non-tipped work. Miss the weekly top-up to minimum, or misapply the credit, and you&rsquo;re exposed to wage claims and penalties that dwarf the payroll savings. The fix is payroll structured to current tipped-wage rates, with the credit applied correctly and the weekly minimum checked." },
    { signal: "Sales-tax exposure", title: "Prepared-food sales tax misapplied.", body: "In New York, prepared and heated food for immediate consumption is taxable &mdash; dine-in, takeout, and delivery alike &mdash; at up to <strong>8.875%</strong> in NYC. Operations slip by not collecting on off-premises orders, or by mis-coding the grocery-versus-prepared line (a cold whole loaf isn&rsquo;t taxable; the sandwich made from it is). The gap surfaces in an audit, with interest. The fix is a POS and books set so taxable prepared items are taxed across every channel and your return reconciles to actual sales." },
    { signal: "Profit is invisible", title: "No food cost or prime cost tracking.", body: "Restaurants live and die by <strong>prime cost</strong> &mdash; food and beverage cost plus labor &mdash; yet many operators don&rsquo;t track it with enough precision to act. Without accurate food cost and a POS reconciled to the bank, you can&rsquo;t see margin slipping until the bank balance tells you, by which point a season is lost. The fix is daily POS-to-bank reconciliation and food-cost and prime-cost tracking, so you watch margin in close to real time and adjust menu, portion, or labor before it bites." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: New York restaurant accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; POS reconciliation", title: "Daily POS-to-bank", body: "Toast, Square, or Clover sales, comps, discounts, tips, and processor fees mapped into QuickBooks and reconciled to daily deposits &mdash; so true sales, not the net deposit, drive your numbers.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "02 &middot; Tip-credit payroll", title: "NY hospitality payroll", body: "Payroll structured to New York&rsquo;s current tipped-wage rates, with the tip credit applied correctly, the 80/20 limit respected, and weekly minimum top-ups checked under the NY Hospitality Wage Order.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { num: "03 &middot; Prepared-food sales tax", title: "Sales-tax tracking", body: "Taxable prepared food tracked across dine-in, takeout, and delivery, with the grocery-versus-prepared line coded correctly so your return reconciles &mdash; including the NYC 8.875% rate.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
    { num: "04 &middot; Food &amp; prime cost", title: "Food cost &amp; prime cost", body: "Cost of goods by category and labor tracked so prime cost as a percentage of sales is visible monthly &mdash; the number that decides a restaurant&rsquo;s survival.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "05 &middot; Tip reporting", title: "Tip &amp; W-2 reporting", body: "Cash and charged tips tracked and reported with the payroll and W-2 codes now required, so staff can claim federal tip deductions and your payroll stays compliant.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { num: "06 &middot; Multi-location &amp; cleanup", title: "By-location &amp; back-books", body: "Profit by location for groups, plus cleanup if you&rsquo;re behind &mdash; books rebuilt CPA-ready, then kept clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
  ],

  // INTEGRATIONS — restaurant tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you run service.)
  integrations: [
    "QuickBooks Online &mdash; the system of record your books live in",
    "Toast &mdash; POS sales, comps, tips, and fees mapped to daily deposits",
    "Square &mdash; sales and processor fees reconciled to the bank",
    "Clover &mdash; channel sales and tax collected synced to QuickBooks",
    "7shifts &mdash; scheduling and labor data for prime-cost tracking",
    "Gusto &mdash; tip-credit hospitality payroll",
    "MarginEdge &mdash; invoice and food-cost data tied to COGS by category",
    "DoorDash / Uber Eats &mdash; delivery-channel sales and commission reconciled",
  ],
  integrationsNote: "Running a different POS or scheduling platform? If it exports to QuickBooks, we can build the workflow around it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: From bank-balance guessing to prime-cost control. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your POS, payroll setup, locations, delivery channels, and where the books or sales-tax handling fall short. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure POS-to-QuickBooks mapping, tip-credit payroll, and sales-tax coding, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to fix prior deposits, miscoded tax, and food-cost tracking." },
    { phase: "Phase 3", title: "Monthly close &amp; reporting", body: "Daily POS reconciliation, food- and prime-cost tracking, tip-compliant payroll, sales-tax-ready books, and by-location reporting where you want it." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Prime-cost and location-profitability reporting and, as you grow, <a href=\"/accounting/advisory/fractional-cfo/\">menu-margin and cash-flow advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Controlling prime cost is the start. Building a profitable concept is the point.)
  advisoryBody: [
    "Once your POS reconciles daily, payroll is compliant, and prime cost is visible, the question shifts from &ldquo;did we make money?&rdquo; to &ldquo;how do we make more?&rdquo; Which menu items carry margin and which just carry the menu, whether a third delivery platform is worth its commission, how labor should flex with covers, when a second location&rsquo;s numbers actually support opening &mdash; the decisions that separate New York restaurants that last from those that close in year two.",
    "That&rsquo;s where restaurant advisory comes in: a Certified ProAdvisor who knows your restaurant&rsquo;s numbers turning them into menu-margin analysis, labor modeling, and cash-flow forecasting. As automation handles routine data entry, this judgment layer is where operators find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "Payroll management", body: "Tip-credit payroll structured to New York&rsquo;s hospitality wage rules &mdash; current tipped-wage rates, the 80/20 limit, and weekly minimum top-ups.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "NY sales tax help", body: "Prepared-food taxability across dine-in, takeout, and delivery tracked correctly, with the grocery-versus-prepared line and the NYC 8.875% rate.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Bookkeeping cleanup", body: "Fix miscoded sales tax, prior POS deposits, and food-cost tracking, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your industry runs in New York &mdash; legal/IOLTA, real estate, construction, healthcare, nonprofit.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "POS reconciliation, tip-credit payroll, prepared-food sales tax, food &amp; prime cost &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York restaurant accounting questions.)
  faq: [
    { q: "What makes restaurant accounting different in New York?", a: "Thin margins plus two strict New York rules. Restaurants run on single-digit net margins, so the books have to track food cost and prime cost (food, beverage, and labor) precisely and reconcile the POS to the bank daily. On top of that, New York&rsquo;s tip-credit payroll rules and its sales tax on prepared food are both detailed and heavily enforced, and a mistake in either can wipe out a month&rsquo;s profit or trigger penalties. That combination &mdash; tight margins and two compliance minefields &mdash; is why restaurant books need a specialist, not a generalist." },
    { q: "What is the New York tip credit for food service workers in 2026?", a: "For 2026, a tipped food-service worker in New York City, Long Island, and Westchester County must receive a cash wage of at least $11.35 per hour, with the employer able to take a tip credit of up to $5.65 &mdash; together meeting the $17.00 minimum wage. In the rest of New York State, it&rsquo;s a $10.70 cash wage plus a $5.30 tip credit. Two conditions matter: under the 80/20 rule, you can&rsquo;t take the tip credit for shifts where the worker spends more than two hours or 20% of the shift on non-tipped work, and if a worker&rsquo;s tips don&rsquo;t bring them to the full minimum in a given week, you must make up the difference. We structure payroll to these rules and check the weekly top-up." },
    { q: "Is takeout and delivery food taxable in New York?", a: "Yes. In New York, prepared and heated food sold for immediate consumption is subject to sales tax whether it&rsquo;s eaten on premises, taken out, or delivered &mdash; there&rsquo;s no off-premises exemption for prepared food. Rates reach 8.875% in New York City. A common and costly error is failing to charge sales tax on delivery and takeout orders, or mis-coding the grocery-versus-prepared distinction: an unheated whole loaf of bread sold as-is may be exempt, but the moment it becomes a sandwich or is heated, it&rsquo;s fully taxable. We set your POS and books so the right items are taxed across every channel and your return reconciles." },
    { q: "Can you reconcile my POS system to QuickBooks?", a: "Yes &mdash; it&rsquo;s the foundation of restaurant bookkeeping. Your POS captures gross sales, comps and discounts, tips, tax collected, and processor fees, and pays out a net deposit that doesn&rsquo;t match gross sales. We map all of those components from Toast, Square, Clover, or your system into QuickBooks and reconcile against daily bank deposits, so your books reflect true sales, your tax collected is accurate, and your food-cost and prime-cost percentages are based on real numbers rather than the net deposit." },
    { q: "What is prime cost and why does it matter so much?", a: "Prime cost is your cost of goods sold &mdash; food and beverage &mdash; plus total labor, expressed as a percentage of sales. It&rsquo;s the single most important number in restaurant operations because those two categories are where margin is won or lost, and a few points of drift can turn a profitable restaurant into a losing one. We track food cost and labor so your prime cost is visible every month, which lets you act on menu pricing, portioning, vendor costs, or scheduling before a problem compounds across a season rather than discovering it when the bank balance drops." },
    { q: "How do you handle tip reporting and the new federal rules?", a: "We track cash and charged tips and report them through payroll with the reporting detail now required, so the numbers are correct for both you and your staff. Recent federal law introduced a deduction on qualified tips and added specific W-2 reporting codes for tips and qualified overtime; if those codes are missing, employees can struggle to claim the deduction. We keep your tip reporting structured so your team can take advantage of it and your payroll stays compliant. As always, your CPA confirms the tax treatment and files; we handle the books and payroll records behind it." },
    { q: "How much does restaurant bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York restaurant runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by sales volume, the number of locations, payroll headcount and complexity, and how many delivery and POS channels we reconcile &mdash; a single small cafe is at the lower end; a multi-location operation with heavy payroll and several delivery platforms higher. We quote a firm number after reviewing your books." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file and POS remotely, map your payroll and sales-tax setup, determine whether you need a cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We do the books; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/restaurant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Restaurant Accounting","description":"Restaurant accounting for New York operators — POS reconciliation, NY tip-credit payroll, prepared-food sales tax, and food & prime cost tracking, set up in your own QuickBooks file by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-restaurant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-restaurant-summary","#ny-ind-restaurant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Restaurant"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Restaurant Accounting","serviceType":"Restaurant and hospitality bookkeeping","description":"POS-to-bank reconciliation, tip-credit payroll, prepared-food sales tax, and food/prime-cost tracking for New York restaurants, delivered in QuickBooks by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York restaurants, cafes, bars, and hospitality operators"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
