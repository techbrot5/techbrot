/* /find-an-accountant/california/quickbooks-training/ — CA SERVICE CHILD (QB spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. GENUINELY CA-localized training.
 * HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. We train your team to see it accrued in the books; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and district add-ons push the combined rate past 10.25%. We train your team to apply the correct combined rate by location &mdash; the step most in-house bookkeepers get wrong." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. We train your team to code W-2 and 1099 pay correctly so the exposure stays visible; EDD disputes go to your CPA." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping, QuickBooks work, and training and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/quickbooks-training/",
  slug: "ca-svc-qbtraining",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Training · TechBrot",
  description: "California QuickBooks training by a ProAdvisor — district sales tax entry, AB5 contractor coding and month-end close on your file. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Training" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; QuickBooks Training",
    heading: "California QuickBooks training &mdash; your team, your file, California rules.",
    subheading: "A Certified QuickBooks ProAdvisor trains your California team on your own file &mdash; how to apply CDTFA district sales tax by location, code contractors correctly for AB5, and run a clean month-end close. Live, role-specific, and recorded if you want it. Fixed-fee, all 58 counties.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks training for California teams</strong> &mdash; a Certified ProAdvisor trains your in-house bookkeeper or staff on your own QuickBooks file: applying CDTFA district sales tax by location, coding contractors for AB5, and running a clean month-end close. Live, role-specific, recorded on request. The full California QuickBooks training summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Want your team to run QuickBooks the California way?",
    lede: "Book a free discovery call. We&rsquo;ll scope the training to your team&rsquo;s roles and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks training, in five questions.",
    valueEyebrow: "What California QuickBooks training covers",
    valueHeading: "Train for the California specifics, not generic QuickBooks.",
    valueLede: "Anyone can learn the buttons &mdash; what California teams need is how to handle district sales tax, contractors, and the month-end the right way.",
    factsEyebrow: "California tax realities we train your team on",
    factsHeading: "Three California facts your team has to get right.",
    factsLede: "Generic QuickBooks training skips all three &mdash; they&rsquo;re exactly where in-house bookkeepers create the cleanups we later fix.",
    faqHeading: "California QuickBooks training questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks training for California teams</strong> &mdash; a Certified QuickBooks ProAdvisor trains your in-house bookkeeper or staff on your own file, focused on the California specifics generic training skips: applying <strong>CDTFA district sales tax by location</strong>, coding contractors correctly for <strong>AB5</strong>, accruing the <strong>$800 franchise tax</strong>, and running a clean month-end close. Live and role-specific (owner, bookkeeper, AP/AR), recorded on request, in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop across all 58 counties. Fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc.; we train your team, your CPA files.",
  aiSummary: [
    { q: "What does California QuickBooks training cover?", a: "<strong>How your team applies CDTFA district sales tax by location, codes contractors for AB5, accrues the $800 franchise tax, and runs a clean month-end close</strong> &mdash; on your own QuickBooks file, taught by a Certified ProAdvisor. Generic training skips the California specifics; we focus on them." },
    { q: "Who is it for?", a: "Owners who want to understand their own books, in-house bookkeepers who inherited the file, and AP/AR staff. Training is <strong>role-specific</strong> &mdash; each person learns the part they actually touch." },
    { q: "Is it on my own file or a demo?", a: "<strong>Your own file</strong> &mdash; so the training is real, not a sandbox. We can review the file first and fix any setup issues so your team isn&rsquo;t trained on a broken configuration." },
    { q: "Live or recorded?", a: "Live sessions (remote), recorded on request so your team keeps a reference and new hires can re-watch. We can also leave written SOPs for the California-specific steps." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope by team size and topics. Exact fee in writing within 3 business days of a free discovery call." },
  ],
  value: [
    { num: "01", title: "District sales tax entry", body: "How to apply the correct CDTFA combined rate by customer location &mdash; and why a flat statewide rate breaks the return.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "02", title: "Contractor coding for AB5", body: "How to code W-2 and 1099 pay so the classification position stays clean and the exposure is visible.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "03", title: "Month-end close", body: "A repeatable month-end checklist &mdash; reconciliation, sales-tax tie-out, franchise accrual &mdash; your team can run.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04", title: "Role-specific sessions", body: "Tailored to who does what &mdash; owner, bookkeeper, AP/AR &mdash; so each person learns only what they touch.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "05", title: "On your own file", body: "Real training on your real file (reviewed first), not a demo company, so it transfers immediately.", href: "/find-an-accountant/california/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { num: "06", title: "Recordings &amp; SOPs", body: "Sessions recorded on request and written SOPs for the California-specific steps, so new hires can ramp.", href: "/quickbooks/consulting/", cta: "QuickBooks consulting &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Train your team on your own QuickBooks file",
    "Teach CDTFA district sales-tax entry by location",
    "Teach AB5-correct contractor coding (W-2 vs 1099)",
    "Teach a repeatable California month-end close",
    "Tailor sessions by role and record them on request",
    "Leave written SOPs for the California-specific steps",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file &amp; team review", body: "A Certified ProAdvisor reviews your file and who does what, to scope the right training." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written training plan and fixed fee within 3 business days &mdash; topics, roles, sessions." },
    { phase: "Step 3", title: "Live training", body: "Role-specific live sessions on your own file, recorded on request, with the California specifics front and center." },
    { phase: "Step 4", title: "SOPs &amp; follow-up", body: "Written SOPs and a follow-up session so the team retains it &mdash; or ongoing support if you want a safety net." },
  ],
  advisoryBody: [
    "The cheapest California cleanup is the one that never happens &mdash; a team trained to apply district sales tax by location and code contractors for AB5 doesn&rsquo;t create the messes we&rsquo;re otherwise hired to fix.",
    "When you&rsquo;d rather hand it off entirely, the same named ProAdvisor can run <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> instead &mdash; training and done-for-you are two paths to the same clean books.",
  ],
  faq: [
    { q: "What does California QuickBooks training cover?", a: "How your team applies CDTFA district sales tax by customer location, codes contractors correctly for AB5, accrues the $800 franchise tax, and runs a clean, repeatable month-end close &mdash; on your own QuickBooks file, taught by a Certified ProAdvisor. Generic QuickBooks training skips the California specifics; this focuses on exactly the steps that cause cleanups later." },
    { q: "Who is the training for?", a: "Owners who want to understand their own books, in-house bookkeepers who inherited the file, and AP/AR staff. Sessions are role-specific so each person learns only the part of QuickBooks they actually touch, which keeps the training short and relevant." },
    { q: "Do you train on my own file or a demo?", a: "Your own file &mdash; so the training is real and transfers immediately. We review the file first and fix any setup issues so your team isn&rsquo;t learning on a broken configuration (training on a flat-rate sales-tax setup would just teach the wrong habit)." },
    { q: "Are sessions live or recorded?", a: "Live and remote, and recorded on request so your team keeps a reference and new hires can re-watch. We can also leave written SOPs for the California-specific steps &mdash; district sales tax, contractor coding, the month-end checklist." },
    { q: "How much does California QuickBooks training cost?", a: "Fixed-fee against a written scope, based on team size and the topics you need. You get the exact fee in writing within 3 business days of a free discovery call &mdash; never open-ended hourly billing." },
    { q: "What if training shows the file is set up wrong?", a: "It often does. We&rsquo;ll flag it and scope a quick setup fix or cleanup so your team isn&rsquo;t trained on a broken file &mdash; there&rsquo;s no point teaching good habits on a configuration that undermines them." },
    { q: "Do you also offer done-for-you bookkeeping?", a: "Yes &mdash; if after training you&rsquo;d rather hand it off, the same named ProAdvisor can run monthly bookkeeping. Many California businesses do both: training for the owner to stay literate, done-for-you for the day-to-day." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we train your team and keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We are not affiliated with Intuit Inc." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-training/",
    name: "California QuickBooks Training",
    description: "QuickBooks training for California teams by a Certified ProAdvisor — district sales tax entry by location, AB5 contractor coding, and a clean month-end close, on your own file across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks Training Services",
    serviceType: "QuickBooks training and team enablement",
    serviceDesc: "Role-specific QuickBooks training for California teams on their own file — CDTFA district sales-tax entry by location, AB5 contractor coding, the $800 franchise-tax accrual, and a repeatable month-end close, live and recorded with written SOPs. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize business owners and in-house bookkeeping teams learning QuickBooks",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};
