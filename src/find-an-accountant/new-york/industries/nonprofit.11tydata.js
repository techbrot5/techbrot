/* /find-an-accountant/new-york/industries/nonprofit/ — t-location INDUSTRY child
 * (deeper than a city child — full contract heading set). Sources: FROZEN EQUITY
 * CONTRACT (contract-ny-ind-nonprofit.txt) — the ONLY authority for the headings + the
 * 8 FAQ — and the live baseline old HTML (find-an-accountant/new-york/industries/
 * nonprofit/index.html, full body read) for body prose/section content. Data-file shape
 * mirrors industries/construction.11tydata.js: JSON front-matter lives in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph emitting the schema
 * @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated
 * from the same `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. New York
 * nonprofit facts (CHAR500 annual filing to the Attorney General's Charities Bureau; Form
 * 990; audit above $1M / review above $250k thresholds; May 15 calendar-year due date;
 * $25–$750 registration fee) reflect NY Charities Bureau guidance — confirm your tier with
 * the Charities Bureau or your CPA. No founder/personal name in visible content (firm-level
 * review byline only). Independent firm — does NOT file the CHAR500, Form 990, or NY taxes;
 * MAINTAINS the CHAR500-ready workpapers (the bookkeeping side) and coordinates with the
 * client's independent CPA, who performs any required audit or review and files. Footer
 * chrome (Accounting/QuickBooks/Company/Network) and the newsletter ("The monthly brief.")
 * are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  // Body prose carried from the baseline TL;DR, reframed to content-to-goal: we maintain the workpapers; the CPA files.
  summary: [
    "Nonprofit accounting runs on <strong>fund accounting and the annual filing</strong>, not the period-based profit-and-loss a for-profit chart of accounts is built for. The books track <strong>net assets by restriction</strong> &mdash; <strong>unrestricted</strong>, <strong>temporarily restricted</strong> (released as time or purpose conditions are met), and <strong>permanently restricted</strong> &mdash; and split every cost by function across <strong>program services</strong>, <strong>management and general</strong>, and <strong>fundraising</strong>. Grant revenue is recognized on its own logic too: an <strong>unconditional</strong> award is recognized when promised, while a <strong>conditional</strong> grant is deferred until its barrier is overcome. Those structures feed <strong>GAAP-basis statements</strong> &mdash; the statement of financial position, statement of activities, and statement of functional expenses &mdash; that your board, your funders, and your filings all rely on.",
    "New York adds the compliance layer. Charities registered with the Attorney General&rsquo;s <strong>Charities Bureau</strong> must file <strong>Form CHAR500</strong> each year, due four months and fifteen days after fiscal year end &mdash; <strong>May 15</strong> for calendar-year filers, with a single six-month extension generally available &mdash; and the filing includes a complete <strong>IRS Form 990</strong> with schedules, a mission statement, and a registration fee of <strong>$25 to $750</strong> based on gross contributions. The financial-statement requirement scales with size: an <strong>independent CPA audit</strong> is generally required above <strong>$1 million</strong> in gross revenue and support, a <strong>CPA review</strong> above <strong>$250,000</strong> and up to $1 million, and an unaudited report below that &mdash; confirm your tier with the Charities Bureau, since published guidance has varied in the $750,000&ndash;$1 million band.",
    "A named Certified ProAdvisor sets all of this up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file &mdash; fund accounting with classes and tags, functional-expense allocation applied monthly, grant tracking from award through spend &mdash; and keeps the <strong>CHAR500-ready workpapers</strong> clean all year so year-end is a handoff, not a reconstruction. We maintain the books that feed the filing and any required audit; <strong>the independent CPA performs the audit or review and files</strong>. Fixed-fee at <a href=\"/find-an-accountant/new-york/pricing/\">$400&ndash;$2,500+/mo</a>. Independent firm &mdash; not affiliated with Intuit Inc.; does not file the CHAR500, Form 990, or NY taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block; reframed content-to-goal).
  // (H2: New York nonprofit accounting, in five questions.)
  aiSummary: [
    { q: "Why is NY nonprofit accounting different?", a: "It runs on <strong>fund accounting and the annual filing</strong>. Money is tracked by restriction &mdash; <strong>unrestricted vs. temporarily- vs. permanently-restricted net assets</strong> &mdash; and expenses are allocated by function (<strong>program, management and general, fundraising</strong>). In New York the books also have to produce a clean <strong>Form CHAR500</strong> and <strong>IRS Form 990</strong> each year, which a for-profit chart of accounts isn&rsquo;t built for." },
    { q: "What is the CHAR500 and when is it due?", a: "It&rsquo;s New York&rsquo;s annual charities filing to the Attorney General&rsquo;s <strong>Charities Bureau</strong>, due <strong>four months and fifteen days after fiscal year end</strong> &mdash; <strong>May 15</strong> for calendar-year filers &mdash; and it includes a complete <strong>IRS Form 990</strong> with schedules and a mission statement. We maintain the CHAR500-ready workpapers; your independent CPA completes and files it." },
    { q: "Does my nonprofit need an audit?", a: "It depends on revenue. An <strong>independent CPA audit</strong> is generally required above <strong>$1 million</strong> in gross revenue and support; a <strong>CPA review</strong> above <strong>$250,000</strong> and up to $1 million; below that, an unaudited report. The audit or review is performed by an <strong>independent CPA &mdash; deliberately not us</strong> &mdash; and we prepare the reconciled books that feed it. Confirm your tier with the Charities Bureau." },
    { q: "How do you track restricted funds and grants?", a: "With QuickBooks <strong>classes and tags</strong>, net assets are tracked by restriction and each grant is followed from award through spend &mdash; with <strong>conditional</strong> grants deferred until their barrier is met and <strong>unconditional</strong> ones recognized when promised &mdash; so a funder can always see their restricted dollars went where designated and grant reporting is a quick export, not a reconstruction." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by transaction volume, the number of funds and grants, payroll, and reporting complexity. Monthly bookkeeping typically runs <strong>$400&ndash;$2,500+/mo</strong>. The independent CPA&rsquo;s audit or review fee is separate. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
  ],

  // CHALLENGES — three places NY nonprofits lose compliance and funder trust (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places New York nonprofits lose compliance and funder trust. + 3 H3s)
  challenges: [
    { signal: "Status &amp; filing at risk", title: "CHAR500 or 990 not filing-ready.", body: "The CHAR500 is rejected most often for a missing audit, a missing or incomplete Form 990, or fee-calculation errors &mdash; and a late or failed filing can mean penalties and, at the extreme, loss of tax-exempt status. Books that aren&rsquo;t kept to the filing&rsquo;s structure all year make every May 15 a scramble. The fix is GAAP-basis workpapers maintained year-round in the form the CHAR500 and 990 require, so the annual filing is a clean handoff to your CPA, not a reconstruction. If your 990 gets assembled from scratch each spring, you&rsquo;re carrying avoidable filing and status risk." },
    { signal: "Funder trust erodes", title: "Restricted funds aren&rsquo;t tracked separately.", body: "When restricted grant money and unrestricted operating funds blur together, you can&rsquo;t show a funder their dollars were spent as designated &mdash; and you risk spending restricted funds on the wrong purpose. Nothing damages funder confidence faster than not being able to account for a grant. The fix is restricted, temporarily-restricted, and unrestricted net assets tracked separately, with each grant followed from award through spend in QuickBooks. If a funder asked today how their grant was spent, the answer should take minutes, not a week of digging." },
    { signal: "Reporting is incomplete", title: "No functional-expense allocation.", body: "The 990 and most funders expect expenses split by function &mdash; program services, management and general, and fundraising. Without an allocation method built into the books, that split gets estimated at year end, your program-expense ratio is unreliable, and your reporting looks weaker than your work. The fix is a functional-expense allocation built into the chart of accounts and applied monthly, so shared costs like rent and salaries land correctly all year. Funders read your program-expense ratio &mdash; if it&rsquo;s guesswork, you&rsquo;re being judged on a number you can&rsquo;t defend." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: New York nonprofit accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Fund accounting", title: "Restricted vs. unrestricted", body: "Net assets tracked by restriction &mdash; unrestricted, temporarily restricted, and permanently restricted &mdash; so you can always show what&rsquo;s restricted, what&rsquo;s genuinely available, and that designated funds were used as intended.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "02 &middot; Grant tracking", title: "Grant &amp; funder reporting", body: "Each grant followed from award through spend, with conditional awards deferred until their barrier is met, so the reporting funders ask for is ready when they ask for it &mdash; a quick export, not a reconstruction.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "03 &middot; Functional expenses", title: "Program / admin / fundraising", body: "Expenses allocated by function every month &mdash; including shared costs like rent and salaries &mdash; so your program-expense ratio and 990 statement of functional expenses are accurate, not estimated at year end.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "04 &middot; CHAR500 &amp; 990 prep", title: "Filing-ready financials", body: "GAAP-basis year-end financials &mdash; statement of financial position, activities, and functional expenses &mdash; prepared in the form the CHAR500 and Form 990 require, handed cleanly to your CPA for audit or review and filing.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "05 &middot; Audit support", title: "Audit-ready books", body: "Clean, reconciled records and schedules that make your independent CPA&rsquo;s audit or review faster and less costly &mdash; including a cleanup to restate prior periods to restricted/unrestricted and program structure if you&rsquo;re behind.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
    { num: "06 &middot; Payroll &amp; staff", title: "Staff &amp; contractor payroll", body: "Payroll for staff and contractors handled correctly, with wages allocable across programs and grants where your funding requires it &mdash; so functional-expense reporting stays accurate.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
  ],

  // INTEGRATIONS — nonprofit tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you run the organization.)
  integrations: [
    "QuickBooks Online &mdash; classes and tags for fund accounting",
    "Bill.com &mdash; accounts payable with grant and program coding",
    "Donorbox &mdash; donation revenue synced to QuickBooks",
    "Bloomerang &mdash; donor management reconciled to the books",
    "Givebutter &mdash; campaign and event revenue tracking",
    "Stripe &mdash; online donation processing",
    "Gusto &mdash; staff and contractor payroll allocable across programs",
    "Expensify &mdash; program and grant expense capture",
  ],
  integrationsNote: "Using a different donor-management or grant platform? If it exports to QuickBooks, we can build the workflow around it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: From year-end scramble to filing-ready all year. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your funds, grants, programs, fiscal year, and where the books or filings are falling behind. No pitch." },
    { phase: "Phase 2", title: "Fund setup &amp; cleanup", body: "Configure fund accounting, grant tracking, and functional-expense allocation, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to restate prior periods to restricted/unrestricted and program structure." },
    { phase: "Phase 3", title: "Monthly close &amp; reporting", body: "Monthly reconciliation, restricted-fund tracking, functional-expense allocation, and board- and funder-ready reporting kept current all year." },
    { phase: "Phase 4", title: "Filing &amp; advisory", body: "CHAR500- and 990-ready financials handed to your CPA, and as you grow, <a href=\"/accounting/advisory/fractional-cfo/\">budget and cash-flow advisory</a> for the board." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Clean compliance is the floor. Funding the mission is the point.)
  advisoryBody: [
    "Once your funds are tracked, your CHAR500 and 990 are a clean handoff, and your functional expenses are accurate, the question shifts from &ldquo;are we compliant?&rdquo; to &ldquo;are we sustainable?&rdquo; Which programs cost what they should, how much unrestricted reserve the board should hold, where grant funding is concentrated and what happens if one source ends, how to budget against an uneven funding calendar &mdash; the questions that separate New York nonprofits that grow their mission from those that lurch year to year.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your organization&rsquo;s numbers turning them into program budgeting, reserve planning, and cash-flow forecasting for the board. As automation handles routine data entry, this judgment layer is where nonprofits find their footing. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Related New York services & industries. + 4 H3s: Bookkeeping services / Bookkeeping cleanup / Payroll management / All NY industries)
  related: [
    { title: "Bookkeeping services", body: "Fund accounting and restricted-fund tracking kept clean for the board and funders, with functional-expense allocation applied monthly.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "Explore bookkeeping &rarr;" },
    { title: "Bookkeeping cleanup", body: "Restate prior periods to restricted/unrestricted and program structure, then reconcile to an audit-ready baseline before the CPA arrives.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Payroll management", body: "Staff and contractor payroll with wages allocable across programs and grants, so functional-expense reporting stays accurate.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your organization runs in New York &mdash; legal/IOLTA, real estate, restaurant, healthcare, construction.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Fund accounting, restricted-fund tracking, functional-expense allocation, CHAR500/990-ready workpapers &middot; audit/review performed by an independent CPA, who files" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York nonprofit accounting questions.)
  faq: [
    { q: "What makes accounting for a New York nonprofit different?", a: "Two things. First, fund accounting: nonprofits track money by restriction &mdash; restricted versus unrestricted net assets &mdash; and allocate expenses by function (program, management and general, and fundraising), which a for-profit chart of accounts isn&rsquo;t built for. Second, the annual filing: New York charities must produce a clean Form CHAR500 and IRS Form 990 each year. So nonprofit books have to satisfy both your board and funders on one side and the Attorney General&rsquo;s Charities Bureau and the IRS on the other, which is why they&rsquo;re structured differently from the ground up." },
    { q: "What is the CHAR500 and when is it due?", a: "The CHAR500 is New York&rsquo;s annual financial filing for charitable organizations, submitted to the Attorney General&rsquo;s Charities Bureau. It&rsquo;s due four months and fifteen days after your fiscal year end &mdash; May 15 for calendar-year organizations &mdash; and a single six-month extension is generally available if requested before the due date. The filing includes a complete copy of your IRS Form 990 with schedules and a mission statement, and the registration fee ranges from $25 to $750 depending on your gross contributions. We keep the books so the financials that go into it are clean and ready; your CPA completes and files it." },
    { q: "Does my nonprofit need an audit, a review, or neither?", a: "It scales with your gross revenue and support. As a general rule in New York, an independent CPA audit is required above $1 million, a CPA review is required above $250,000 and up to $1 million, and below $250,000 an unaudited financial report is acceptable. Because published guidance has shown some variation in the $750,000&ndash;$1 million band over the years, you should confirm your specific tier with the Charities Bureau or your CPA. Importantly, the audit or review must be performed by an independent CPA &mdash; that&rsquo;s deliberately not us. Our role is preparing accurate, reconciled books so that audit or review is straightforward and less expensive." },
    { q: "Why can&rsquo;t TechBrot do our audit?", a: "Independence. A nonprofit audit or review must be performed by an independent CPA who did not prepare the books being examined &mdash; that separation is the whole point of the engagement. TechBrot is a Certified QuickBooks ProAdvisor bookkeeping firm, not your auditor, so we prepare and maintain the financial records and then hand them to your independent CPA, who performs the audit or review and files. Done well, our work makes their work faster and your audit fee lower, because the records arrive clean and reconciled rather than needing reconstruction." },
    { q: "How do you track restricted funds and grants?", a: "Using QuickBooks classes and tags, we track net assets by restriction and follow each grant and funding source from the moment it&rsquo;s awarded through how it&rsquo;s spent. That means you can always show a funder that their restricted dollars went where designated, see how much unrestricted money is genuinely available, and avoid the serious problem of spending restricted funds on the wrong purpose. It&rsquo;s also what makes grant reporting a quick export rather than a manual reconstruction every time a funder asks." },
    { q: "What is functional-expense allocation and why does it matter?", a: "The Form 990 and most funders expect your expenses split by function: program services, management and general, and fundraising. Functional-expense allocation is the method that assigns each cost &mdash; including shared costs like rent and salaries &mdash; across those categories. We build that allocation into your chart of accounts and apply it monthly, so your statement of functional expenses is accurate year-round and your program-expense ratio (a number funders watch closely) is something you can defend rather than estimate at year end." },
    { q: "How much does nonprofit bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York nonprofit runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by transaction volume, the number of funds and grants you track, payroll, and reporting complexity &mdash; a small all-volunteer charity is at the lower end; a multi-program organization with several restricted grants and functional reporting higher. We quote a firm number after reviewing your books. The independent CPA&rsquo;s audit or review fee is separate and billed by them." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file remotely, map your funds, grants, and programs, determine whether you need a cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We prepare the books; an independent CPA performs any required audit or review, and your CHAR500 and 990 are filed." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/nonprofit/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Nonprofit Accounting","description":"Nonprofit accounting for New York charities — CHAR500 & Form 990 prep, fund accounting, restricted-fund tracking, and functional-expense allocation, maintained in your own QuickBooks file by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-nonprofit-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-nonprofit-summary","#ny-ind-nonprofit-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Nonprofit"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Nonprofit Accounting","serviceType":"Nonprofit and charity bookkeeping","description":"Fund accounting, restricted-fund tracking, functional-expense allocation, and CHAR500/Form 990-ready financials for New York nonprofits, delivered in QuickBooks by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file the CHAR500, Form 990, or NY tax returns and does not perform audits or reviews — maintains the workpapers and coordinates with the client's independent CPA, who performs any required audit or review and files.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York nonprofits, charities, and 501(c)(3) organizations"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
