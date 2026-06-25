/* /find-an-accountant/illinois/quickbooks-training/ — IL SERVICE CHILD (QB spoke).
 * t-bofu · partials/state-service-body.njk. IL-localized, TRAINING angle. Facts band = the real IL
 * stack re-angled to what we teach an in-house bookkeeper: recording combined sales tax by jurisdiction,
 * keeping IL net income clean for the PPRT, and tracking Chicago's 15% lease/"cloud" tax separately.
 * HONESTY: deferred to the Illinois Dept of Revenue (IDOR) + Chicago Dept of Finance + CPA/EA;
 * founder-name-zero; not Intuit; does not file IL returns or elect PTE. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "Train your team to keep IL net income clean", body: "Illinois imposes an entity-level <strong>Personal Property Replacement Tax</strong> on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong> &mdash; and even pass-throughs owe it at the entity level. We train your team to categorize cleanly and keep Illinois net income supportable in QuickBooks, so the PPRT figure your CPA computes and files holds up." },
  { fig: "10.25%", title: "Train invoicing to carry the combined rate by jurisdiction", body: "Illinois sales tax is <strong>6.25% state</strong> plus county and home-rule add-ons &mdash; <strong>up to 10.25% in Chicago</strong> (Cook County + city) &mdash; and it&rsquo;s destination-based. The day-to-day mistake is applying the wrong rate at invoice time, so we train your team to let QuickBooks carry the correct <strong>combined rate by jurisdiction</strong>, right at entry, so the ST-1 ties." },
  { fig: "Cloud tax", title: "Train your team to track Chicago&rsquo;s cloud tax separately", body: "Illinois doesn&rsquo;t tax SaaS &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. We train providers with Chicago customers to record that liability <strong>separately from sales tax</strong> in QuickBooks, because it&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot trains teams and maintains QuickBooks files and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-training/",
  slug: "il-svc-qbtraining",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Training · TechBrot",
  description: "QuickBooks training for Illinois teams — invoice combined sales tax by jurisdiction (10.25% Chicago), keep net income clean for the PPRT, track the cloud tax.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Training" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; QuickBooks Training",
    heading: "QuickBooks training for your Illinois team, done your way.",
    subheading: "A Certified QuickBooks ProAdvisor trains your team on the things that matter in Illinois &mdash; invoicing the combined sales tax by jurisdiction (up to 10.25% in Chicago), keeping Illinois net income clean for the PPRT, and tracking Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax separately &mdash; live and role-specific, in your own file. Fixed-fee, all 102 counties.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Live &middot; role-specific &middot; your own file"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks training for Illinois business teams</strong> &mdash; a Certified ProAdvisor trains your staff, live and role-specific, on invoicing the combined sales tax by jurisdiction (up to 10.25% in Chicago), keeping Illinois net income clean for the <strong>PPRT</strong>, and tracking Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax separately, in your own QuickBooks file. Fixed-fee, all 102 counties. The full Illinois training summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Want your Illinois team confident in QuickBooks?",
    lede: "Book a free discovery call. We&rsquo;ll scope the training to your team&rsquo;s roles and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks training, in five questions.",
    valueEyebrow: "What Illinois training covers",
    valueHeading: "Your team, confident on the Illinois specifics.",
    valueLede: "We train on the day-to-day actions that keep an Illinois file clean &mdash; tailored to each role.",
    factsEyebrow: "What we make sure your team gets right",
    factsHeading: "Three Illinois habits good training builds in.",
    factsLede: "Most Illinois file problems start at data entry &mdash; training fixes them at the source.",
    faqHeading: "Illinois QuickBooks training questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks training for Illinois business teams</strong> &mdash; a Certified QuickBooks ProAdvisor trains your staff live and role-specific, in your own file, on the things that matter in Illinois: invoicing the <strong>combined sales tax by jurisdiction</strong> (up to 10.25% in Chicago), keeping Illinois net income clean so the <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> (PPRT) is supportable &mdash; even pass-throughs owe it &mdash; and tracking Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax (15% as of January 2026) <strong>separately from sales tax</strong>. Most Illinois file problems start at data entry, so training fixes them at the source. Fixed-fee against a written scope, scoped to your team&rsquo;s roles. Independent firm &mdash; not affiliated with Intuit Inc.",
  aiSummary: [
    { q: "What does Illinois QuickBooks training cover?", a: "<strong>Invoicing the combined sales tax by jurisdiction (up to 10.25% in Chicago), keeping Illinois net income clean for the PPRT, tracking Chicago&rsquo;s 15% cloud tax separately, and the day-to-day workflows for each role</strong> &mdash; live, in your own QuickBooks file, by a Certified ProAdvisor." },
    { q: "Who is the training for?", a: "Whoever touches the books &mdash; owners, office managers, bookkeepers, and AR/AP staff. We tailor each session to the role, so an invoicing clerk learns the combined sales-tax rate by jurisdiction and a bookkeeper learns to keep Illinois net income clean for the PPRT." },
    { q: "Is it live or recorded?", a: "Live and interactive, in your own QuickBooks file, so your team practices on real workflows rather than a generic demo. We can record the sessions for onboarding new staff later." },
    { q: "What does training cost?", a: "Fixed-fee against a written scope, scoped to the number of people and sessions. Exact fee in writing within 3 business days of a free discovery call." },
    { q: "Can you train and keep the books?", a: "Yes &mdash; many Illinois businesses pair training with <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a>, where we keep the file clean and the team handles day-to-day entry confidently." },
  ],
  value: [
    { num: "01", title: "Sales tax at invoice time", body: "Train AR staff to let QuickBooks apply the correct combined rate by jurisdiction (up to 10.25% in Chicago) so invoices are right at entry &mdash; the most common day-to-day fix.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "02", title: "Clean books for the PPRT", body: "Train your team to categorize cleanly and keep Illinois net income supportable, so the PPRT your CPA computes and files holds up.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "03", title: "Chicago cloud tax, tracked apart", body: "Train providers with Chicago customers to record the 15% lease/cloud tax separately from sales tax, so the City liability is never buried.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Role-specific workflows", body: "Sessions tailored by role &mdash; owner dashboards, AR/AP, payroll entry &mdash; so each person learns exactly their part.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "05", title: "Reporting your team can read", body: "Train owners and managers to pull and read the reports that matter, so the books drive decisions, not just compliance.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "06", title: "Onboarding-ready recordings", body: "Sessions recorded in your own file so new hires can be brought up to speed without starting from scratch.", href: "/find-an-accountant/illinois/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Train staff to invoice the combined sales tax by jurisdiction (up to 10.25% in Chicago) at entry",
    "Train the team to categorize cleanly and keep Illinois net income supportable for the PPRT",
    "Train providers to track Chicago&rsquo;s 15% lease/cloud tax separately from sales tax",
    "Tailor sessions by role &mdash; owner, AR/AP, bookkeeper, payroll",
    "Train owners and managers to read the reports that matter",
    "Record sessions in your own file for onboarding",
  ],
  scopeDont: [
    "File the Illinois sales tax (ST-1), the PPRT, or income tax",
    "File or elect the PTE, or file Chicago city taxes (lease/cloud)",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free scoping call", body: "A Certified ProAdvisor reviews your team&rsquo;s roles and the file to scope the training." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days, by number of people and sessions." },
    { phase: "Step 3", title: "Live, role-specific sessions", body: "We train each role live in your own file on the Illinois-specific workflows, with practice on real data." },
    { phase: "Step 4", title: "Recordings &amp; follow-up", body: "Sessions recorded for onboarding, with follow-up support &mdash; or paired with monthly bookkeeping." },
  ],
  advisoryBody: [
    "Most Illinois QuickBooks problems aren&rsquo;t the software &mdash; they&rsquo;re data entry: the wrong combined rate on a Chicago invoice, Illinois net income left messy so the PPRT is hard to support, the Chicago cloud tax buried inside sales tax instead of tracked apart. Training fixes those at the source, so the file stays clean between closes.",
    "Pair training with <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> and your team handles day-to-day entry confidently while a ProAdvisor keeps the close and the Illinois figures clean for your CPA.",
  ],
  faq: [
    { q: "What does Illinois QuickBooks training cover?", a: "A Certified ProAdvisor trains your team, live and role-specific in your own file, on invoicing the combined sales tax by jurisdiction (up to 10.25% in Chicago), keeping Illinois net income clean so the PPRT is supportable, tracking Chicago&rsquo;s 15% lease/cloud tax separately, and the day-to-day workflows for each role. The focus is the Illinois-specific habits that keep a file clean." },
    { q: "Who should attend the training?", a: "Anyone who touches the books &mdash; owners, office managers, bookkeepers, and AR/AP staff. We tailor each session to the role: an invoicing clerk learns the combined sales-tax rate by jurisdiction, a bookkeeper learns to keep Illinois net income clean for the PPRT, and an owner learns to read the reports that matter." },
    { q: "Is the training live or pre-recorded?", a: "Live and interactive, in your own QuickBooks file, so your team practices on real workflows rather than a generic demo. We can record the live sessions so you can onboard new staff with them later without paying for the training again." },
    { q: "How much does Illinois QuickBooks training cost?", a: "Fixed-fee against a written scope, never hourly &mdash; scoped to the number of people and sessions. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Can you train my team and also keep the books?", a: "Yes &mdash; many Illinois businesses pair training with monthly bookkeeping, so your team handles day-to-day entry confidently while a named ProAdvisor keeps the monthly close and the Illinois figures clean. Training-only is also fine." },
    { q: "How do you teach my team to handle the Chicago cloud tax in QuickBooks?", a: "We train providers with Chicago customers to record the Personal Property Lease Transaction Tax (the &ldquo;cloud tax,&rdquo; 15% as of January 2026) as a separate liability from Illinois sales tax, because it&rsquo;s a City of Chicago tax administered by the Department of Finance, not a state tax. Your team learns where it posts and how to keep it apart so the City liability is always visible; your CPA and the City handle the filing." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we train your team and keep the books CPA-ready and coordinate with your CPA, who files the income tax, the PPRT, sales tax, and any PTE election, and handles Chicago city taxes. We do not file Illinois returns or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-training/",
    name: "Illinois QuickBooks Training",
    description: "QuickBooks training for Illinois business teams by a Certified ProAdvisor — live, role-specific sessions on invoicing the combined sales tax by jurisdiction (up to 10.25% in Chicago), keeping Illinois net income clean for the PPRT, and tracking Chicago's 15% lease/cloud tax separately. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks Training Services",
    serviceType: "QuickBooks training and staff enablement",
    serviceDesc: "Live, role-specific QuickBooks training for Illinois business teams — invoicing the combined sales tax by jurisdiction (up to 10.25% in Chicago), keeping Illinois net income clean for the Personal Property Replacement Tax, tracking Chicago's 15% lease/cloud tax separately from sales tax, and reporting, in the client's own file. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois business owners and staff learning QuickBooks across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};
