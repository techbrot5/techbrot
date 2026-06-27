/* /accounting/industries/fitness/ — LIVE baseline industry page migrated to cobalt
 * t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-fitness.txt (42 headings, 7 FAQ) is the ONLY authority for
 * headings + FAQ. Old HTML accounting/industries/fitness/index.html read for BODY
 * PROSE only. REFERENCE pattern: src/accounting/industries/construction.njk +
 * .11tydata.js (proven t-mofu cobalt) for structure + the FULL schema set (WebPage,
 * BreadcrumbList, Service, ItemList, FAQPage, QAPage); src/quickbooks/online.njk for
 * cobalt vocabulary. NATIONAL scope.
 *
 * PROTOCOL: t-mofu, tierClass section--tier-guide, bodyClass page--mofu, callBar true.
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base chrome owns them / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 *
 * FAQ: contract carries 7 verbatim Q/A — all 7 rendered, NO dedup. The old body also
 * carried section prose Q/A substance (challenge "Honest read" notes, advisory block,
 * "what does it cost") preserved as section content, never gutted, not duplicated into
 * the FAQ array. FAQPage emits all 7; QAPage emits from the 5-question ai-summary.
 *
 * HONESTY (R5/R9): no fabricated stats/outcomes/reviews; no AggregateRating; firm-level
 * authorship; David Westgate in reviewedBy schema @id only; independent firm, not
 * affiliated with Intuit Inc., nor with any studio-management platform or franchise
 * system; bookkeeping/ProAdvisor scope — does NOT file income taxes, render W-2/1099
 * classification opinions, audit, or assure; coordinates with the client's CPA/EA/
 * attorney. No <strong> in the dark hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — "Fitness accounting, plainly." (from baseline TL;DR body, enriched; national scope)
  definition: [
    "Fitness breaks generic <a href=\"/accounting/bookkeeping/\">bookkeeping</a> at four points. <strong>Membership revenue</strong> must recognize under ASC 606 over the service period &mdash; month-to-month memberships earn ratably; <strong>annual prepaid memberships</strong> create 12-month deferred revenue liabilities. <strong>Class packages</strong> (10-class packs, unlimited monthly plans paid annually) and <strong>personal training packages</strong> are deferred revenue recognized per visit or session, with <strong>breakage revenue</strong> at expiration. <strong>Studio management platforms</strong> (MindBody, Mariana Tek, Glofox, ClubReady, Zen Planner, ABC Fitness Solutions) are the operational source of truth requiring summary-level reconciliation to <a href=\"/quickbooks/online/\">QuickBooks</a>. <strong>Member-level economics</strong> &mdash; LTV, CAC, churn rate, retention by cohort &mdash; are the fundamental business metrics most operators don&rsquo;t measure.",
    "<strong>Class instructor compensation</strong> spans per-class pay, attendance bonuses, retail commission, and personal training revenue splits, with W-2 vs 1099 classification heavily scrutinized. <strong>Boutique franchisees</strong> (OrangeTheory, F45, CycleBar, Club Pilates) add the full FDD royalty and ad-fund complexity layered on top. <strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who configure membership and package revenue recognition correctly under ASC 606, reconcile studio management platforms monthly, calculate LTV/CAC from real cohort data, handle instructor compensation across all models, and for franchisees, layer in the franchise compliance covered on our <a href=\"/accounting/industries/franchise/\">franchise accounting page</a>. For operators ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns them into pricing, marketing-investment, retention, and expansion decisions. We deliver the books in your own QuickBooks file and coordinate with your CPA on tax filing; we don&rsquo;t file taxes ourselves. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., zero commission on any platform or franchise system.",
  ],

  // AI SUMMARY — five-question block. NON-heading questions (baseline captured as <dt>).
  // (H2: Fitness accounting, in five questions.)
  aiSummary: [
    { q: "Why is fitness accounting different?", a: "Four issues: <strong>ASC 606 membership revenue</strong> recognized over the service period, <strong>package deferred revenue</strong> with breakage at expiration, <strong>studio management platform</strong> reconciliation (MindBody, Mariana Tek, Glofox), and <strong>member economics</strong> (LTV, CAC, churn). Plus a franchise overlay for boutique franchisees." },
    { q: "How does membership revenue recognize?", a: "Month-to-month: ratably as collected. <strong>Annual prepaid</strong>: $1,200 upfront creates a 12-month deferred revenue liability, recognized $100/month. Founding-member, family plans, and frozen memberships each have specific handling under ASC 606." },
    { q: "How do class &amp; PT packages work?", a: "<strong>Deferred revenue at sale</strong>, recognized per class or session attended, with <strong>breakage at expiration</strong> under no-refund policies. A 10-class pack at $200 earns $20 per attended class; unused classes at expiration become breakage revenue." },
    { q: "What are LTV and CAC for fitness?", a: "<strong>LTV</strong>: average monthly revenue per member &times; average tenure in months. <strong>CAC</strong>: total sales + marketing / net new members. <strong>LTV/CAC 3:1 is healthy</strong>, below 1.5:1 unsustainable. <strong>Churn</strong> runs 3&ndash;5% monthly for budget gyms, 1.5&ndash;3% boutique." },
    { q: "What does it cost?", a: "A fixed monthly fee against a written scope &mdash; driven by location count, membership volume, studio management platform, and franchise overlay if applicable. No hourly billing. Most fitness engagements include initial <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to restate membership and package revenue recognition. We do not file income taxes; we coordinate with your CPA or EA." },
  ],

  // CHALLENGES — three places fitness operators lose the numbers (grid-3 buyer-cards).
  // 3 frozen H3s verbatim. "Honest read" substance from the old body preserved here.
  // (H2: Three places fitness operators lose the numbers. + 3 H3s)
  challenges: [
    { signal: "Memberships &amp; packages booked as revenue", title: "Cash treated as immediate revenue, ASC 606 ignored.", body: "The studio sells a $1,200 annual membership in March and books $1,200 of revenue in March &mdash; but the obligation is 12 months of access, so revenue earns ratably as access is provided. March revenue is overstated, the deferred revenue liability is invisible, and the studio looks more profitable than cash flow supports. The fix: membership and package revenue posted to deferred revenue at sale, recognized ratably or per use, breakage at expiration, deferred revenue waterfall monthly. Fast-growing studios look much more profitable than they are when this is wrong &mdash; and acquirers and lenders catch it immediately." },
    { signal: "No member-level economics", title: "LTV, CAC, churn unmeasured.", body: "The operator runs campaigns, adds and loses members, and watches revenue grow without knowing the unit economics. Are new members worth what they cost to acquire? Is churn worsening? Which cohort retains best? Without LTV, CAC, and churn measured monthly, marketing spend is decided on intuition. The fix: member economics calculated monthly from platform and marketing-spend data, retention curves by cohort, an LTV/CAC dashboard in the regular package. Most operators discover on first honest reporting that they pay more to acquire a member than the member is worth &mdash; especially after the intro promotion is netted in." },
    { signal: "Multi-location or franchise complexity", title: "Studios commingled, royalty informal.", body: "Multi-studio operators consolidate revenue without per-studio P&amp;L; boutique franchisees report royalty against approximated rather than FDD-defined gross sales. Studio-level performance differences stay invisible, royalty underreporting compounds toward audit exposure, and brand benchmarking is impossible. The fix: Class or Location tracking by studio, per-studio P&amp;L monthly, and for franchisees FDD-defined gross sales with the brand-mandated CoA &mdash; full franchise compliance per our <a href=\"/accounting/industries/franchise/\">franchise accounting framework</a>. Franchisors do royalty audits at renewal or transfer; clean reporting prevents painful multi-year exposure." },
  ],

  // SUB-VERTICALS — "Fitness across every format." (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Fitness across every format. + 6 H3s)
  formats: [
    { name: "Independent gyms", body: "Single-location traditional gyms with monthly memberships, annual prepaid options, and personal training add-ons. The reference case for membership-based fitness accounting &mdash; usually on MindBody or ABC Fitness Solutions." },
    { name: "Boutique studios", body: "Yoga, Pilates, barre, indoor cycling, HIIT, rowing, hot yoga. Higher per-class pricing, class-package economics, instructor-led with strong personality-driven retention. Heavy MindBody / Mariana Tek user base." },
    { name: "Personal training studios", body: "One-on-one and small-group personal training, often higher ticket ($100&ndash;$200+ per session). Package-heavy revenue, trainer compensation a large operating expense, often hybrid W-2/1099 structures requiring legal review." },
    { name: "Multi-location operators", body: "Operators of 2&ndash;10 locations, often expanding regionally. Per-studio P&amp;L, consolidated reporting, shared-cost allocation, often a hybrid platform (MindBody for some studios, Mariana Tek for others as systems modernize)." },
    { name: "Boutique fitness franchisees", body: "OrangeTheory, F45, CycleBar, Burn Boot Camp, StretchLab, Club Pilates, Pure Barre, Stretch Zone, and many others. A franchise compliance layer on top of fitness operations &mdash; the full <a href=\"/accounting/industries/franchise/\">franchise accounting</a> framework applies." },
    { name: "Specialty &amp; emerging formats", body: "Martial arts and BJJ schools, dance studios, swim schools, kids&rsquo; fitness, wellness studios (cryotherapy, IV therapy, recovery), and hybrid fitness/wellness. Distinctive economics, often emerging franchise systems." },
  ],

  // DELIVERABLES / WHAT WE HANDLE — the six services (grid-3 stack-8). 6 frozen H3s verbatim.
  // (H2: Fitness accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Memberships", title: "ASC 606 membership recognition", body: "Membership revenue posted to deferred revenue at sale, recognized ratably over the service period, with the deferred revenue waterfall produced monthly.", href: "/accounting/chart-of-accounts-setup/" },
    { num: "02 &middot; Packages", title: "Class &amp; PT package accounting", body: "Class and personal-training packages as deferred revenue, recognized per class or session attended, breakage revenue at expiration, package-liability schedule maintained.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "03 &middot; Platform", title: "Studio platform reconciliation", body: "MindBody, Mariana Tek, Glofox, ClubReady, Zen Planner, and ABC Fitness Solutions reconciled monthly to QuickBooks via summary journal entries with a full audit trail.", href: "/accounting/bookkeeping/" },
    { num: "04 &middot; Member economics", title: "LTV, CAC, churn dashboard", body: "LTV and CAC calculated monthly from member and marketing-spend data, retention curves by cohort, churn trended, and the LTV/CAC ratio surfaced as a headline KPI.", href: "/accounting/advisory/fractional-cfo/" },
    { num: "05 &middot; Compensation", title: "Instructor &amp; trainer compensation", body: "Per-class pay, attendance bonuses, retail commission, and PT session splits handled accurately, with W-2/1099 classification coordinated with your attorney or CPA.", href: "/accounting/payroll-management/" },
    { num: "06 &middot; Franchise", title: "Boutique franchise compliance", body: "For franchisees of OrangeTheory, F45, CycleBar, Club Pilates, and others: royalty and ad-fund reporting, brand-mandated CoA, and multi-unit consolidation &mdash; the full franchise framework layered on fitness ops.", href: "/accounting/industries/franchise/" },
  ],

  // INTEGRATIONS — fitness tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to your fitness stack.)
  integrations: [
    "MindBody &mdash; dominant in yoga, Pilates, boutique fitness, wellness",
    "Mariana Tek &mdash; boutique-focused, summary revenue to QuickBooks",
    "Glofox &mdash; fitness studio management synced to the ledger",
    "ClubReady &mdash; multi-location chains and franchise systems",
    "Zen Planner &mdash; martial arts and boutique fitness",
    "ABC Fitness Solutions &mdash; large gyms and chains",
    "Mindbody POS, Stripe &amp; Square &mdash; payment and retail reconciliation",
    "Gusto, ADP &amp; Paychex &mdash; instructor and trainer payroll",
  ],
  integrationsNote: "Different stack? If your studio management platform exports clean data, we can work with it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // VS TABLE — independent single-studio vs multi-location/franchise (vs-scroll + vs-table, no collapse T3).
  // (H2: Independent studio vs. multi-location or franchise studio accounting.)
  vsTable: [
    { cap: "Entity structure", solo: "Single LLC or S-corp", multi: "Holding company + operating subs, often one entity per studio for liability isolation" },
    { cap: "Revenue recognition", solo: "Single deferred revenue waterfall", multi: "Per-studio deferred revenue + consolidated; cross-studio membership transferability tracked" },
    { cap: "P&amp;L reporting", solo: "Single studio P&amp;L", multi: "Per-studio P&amp;L + consolidated, shared overhead allocated" },
    { cap: "Royalty &amp; ad fund", solo: "Not applicable", multi: "FDD-defined royalty (typically 7&ndash;9%) + ad fund (~2% national + ~2% local), reported monthly to franchisor" },
    { cap: "Chart of accounts", solo: "Fitness-optimized custom CoA", multi: "Brand-mandated CoA for franchisor benchmarking" },
    { cap: "Platform", solo: "QuickBooks Online Plus + MindBody/Mariana Tek", multi: "QuickBooks Enterprise + brand-required platform (often ClubReady or franchisor-specific)" },
    { cap: "KPI reporting", solo: "LTV, CAC, churn for the studio", multi: "Per-studio LTV/CAC/churn + same-store-sales + brand-benchmark comparison" },
  ],
  vsNote: "Most multi-location fitness operators and franchisees start on the left and grow into the right. The accounting transition needs to happen at studio 2 &mdash; before commingled data, franchisor-reporting drift, or member-transfer ambiguity creates problems that are painful to untangle later.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s verbatim.
  // (H2: From membership mess to real LTV. + 4 H3s)
  process: [
    { num: "Phase 1", name: "Discovery", body: "A 30-minute call to map your format, location count, studio management platform, membership and package volume, franchise overlay if applicable, and where the books are breaking. No pitch." },
    { num: "Phase 2", name: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to restate membership and package revenue recognition under ASC 606, plus the right <a href=\"/accounting/chart-of-accounts-setup/\">chart-of-accounts setup</a> for fitness economics (and a brand-mandated CoA for franchisees)." },
    { num: "Phase 3", name: "Monthly platform reconciliation &amp; reporting", body: "Books reconciled monthly with the studio management platform, membership and package recognition posted, instructor compensation reconciled, member economics calculated, and royalty/ad-fund reported for franchisees." },
    { num: "Phase 4", name: "Reporting &amp; advisory", body: "A monthly financial package with the deferred revenue waterfall, LTV/CAC dashboard, churn trends, per-studio P&amp;L for multi-location, plus <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> on pricing, marketing investment, retention strategy, and expansion modeling." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose (old mission-block, no gutting).
  // (H2: LTV against CAC is the start. The next studio is the point.)
  advisoryBody: [
    "Once memberships and packages are on ASC 606, the studio management platform reconciles cleanly, LTV/CAC is real, and per-studio P&amp;L is visible, the question changes from &ldquo;are the books right?&rdquo; to &ldquo;what do we do with this clarity?&rdquo; How much to spend on member acquisition, when to raise prices, which retention initiatives actually pay off, whether to open a second studio, when to add personal-training revenue, how to structure a sale &mdash; the decisions that actually move a fitness business.",
    "That&rsquo;s where <strong>fitness advisory</strong> comes in: a fractional CFO who knows your member economics turning them into marketing-investment limits, pricing optimization, expansion modeling, and exit preparation. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the multiple at sale &mdash; now lives. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 contract Q/A VERBATIM (questions verbatim, answers preserved). NO dedup.
  // visible faq__list = FAQPage schema (same array). (H2: Fitness accounting questions.)
  faq: [
    { q: "Why is fitness accounting different from regular bookkeeping?", a: "Fitness operations layer multiple complications onto generic service-business bookkeeping. Membership revenue under ASC 606 must recognize over the service period, not when collected &mdash; month-to-month memberships earn ratably each month; annual prepaid memberships create 12-month <a href=\"/glossary/deferred-revenue/\">deferred revenue</a> liabilities. Class packages (10-class packs, unlimited monthly plans paid annually) and personal training packages create deferred revenue recognized as classes or sessions are consumed, with breakage revenue when packages expire under no-refund policies. Studio management platforms (MindBody, Mariana Tek, Glofox, ClubReady, Zen Planner, ABC Fitness Solutions) are the operational source of truth for memberships, class attendance, and payments, requiring summary-level reconciliation to QuickBooks. Member-level economics &mdash; LTV, CAC, churn rate, retention curves &mdash; are the fundamental business metrics, none of which appear in a standard P&amp;L. Boutique franchisees add the full FDD/royalty/ad-fund complexity layered on top. Generic bookkeeping handles none of this." },
    { q: "How do you handle membership revenue recognition under ASC 606?", a: "Membership revenue must recognize over the service period, not when collected. Month-to-month memberships are the simplest case &mdash; cash collected in March recognizes as March revenue. Annual prepaid memberships are where most fitness operators get it wrong: $1,200 collected upfront for a 12-month membership creates a $1,200 deferred revenue liability, recognized as $100/month over 12 months. Founding-member discounts, family plans with differential pricing, and frozen memberships (paused contracts) each require specific handling. Loyalty discounts and referral credits adjust the revenue per period, not the cash collection. We configure the chart of accounts with deferred revenue accounts for each membership type, reconcile MindBody/Mariana Tek/Glofox monthly to post the correct recognition entries, and produce the deferred revenue waterfall showing future earnings already secured." },
    { q: "How do class packages and personal training packages work?", a: "Class packages (10-class pack for $200, 20-class pack for $360) and personal training packages (10 sessions for $1,200, 20 sessions for $2,200) are deferred revenue at sale &mdash; cash collected, no service yet delivered. Revenue recognizes as classes are attended or sessions are completed, with the per-unit value calculated as total package price divided by sessions in the package. Most packages have expiration policies (typically 6&ndash;12 months); unused classes after expiration create breakage revenue recognized at expiration (assuming the no-refund policy is enforced &mdash; state consumer protection laws vary). The breakage calculation: track expiration dates by package, post breakage revenue monthly as packages expire unused, maintain customer-level package history for refund disputes. Generic bookkeeping books the full package as immediate revenue, overstating current revenue and understating the future obligation. We configure package accounting correctly and produce the package-liability schedule monthly." },
    { q: "Do you integrate with MindBody, Mariana Tek, Glofox, and other studio management platforms?", a: "Yes. Studio management platforms are the operational source of truth: member management, class scheduling, package sales, point-of-sale, attendance tracking, payment processing. The integration to QuickBooks is typically through summary-level journal entries &mdash; daily or monthly revenue summaries posted with appropriate splits between membership revenue, package sales (deferred), retail, late fees, and other revenue types. We work with MindBody (dominant in yoga, Pilates, boutique fitness, wellness), Mariana Tek (boutique-focused, increasingly popular), Glofox (fitness studios), ClubReady (multi-location chains), Zen Planner (martial arts and boutique fitness), ABC Fitness Solutions (large gyms and chains), Mindbody POS, and others. The reconciliation discipline matters: payment processing splits, refunds and chargebacks, gift card sales and redemptions, retail vs service revenue separation. Done right, the platform and QuickBooks tell the same story; done wrong, you have two systems disagreeing on revenue every month." },
    { q: "What about LTV, CAC, and member-level economics?", a: "Member-level economics are the fundamental fitness business metrics &mdash; and the ones most operators don&rsquo;t measure. Lifetime Value (LTV) is average monthly revenue per member multiplied by average member tenure in months. Customer Acquisition Cost (CAC) is total sales and marketing spend divided by net new members acquired. The LTV/CAC ratio determines whether the operation is healthy &mdash; healthy fitness operations target 3:1 or higher; below 1.5:1 means the operation is buying members for more than they&rsquo;re worth. Monthly churn rate (typically 3&ndash;5% for budget gyms, 1.5&ndash;3% for boutique) compounds dramatically &mdash; 4% monthly churn means losing nearly 40% of members per year that must be replaced. We configure the reporting to calculate these metrics monthly from membership and marketing spend data, surface retention curves by cohort, and produce the LTV/CAC dashboard that determines whether marketing investment is paying off." },
    { q: "How do you handle class instructor and personal trainer compensation?", a: "Class instructors and personal trainers are compensated through multiple models: per-class pay (flat rate per class taught, typically $25&ndash;$75+), attendance bonuses (incentive payment when class attendance exceeds threshold), retail commission (% of supplement or apparel sales they drive), personal training session payment (typically 50&ndash;70% of session revenue to trainer), and base salary plus per-class for some senior instructors. W-2 vs 1099 classification has been heavily scrutinized in fitness &mdash; instructors who teach scheduled classes at the studio under studio direction typically fail the 1099 independent contractor test. We configure compensation tracking that captures every model accurately, integrate with payroll provider (Gusto, ADP, Paychex) for <a href=\"/accounting/payroll-management/\">W-2 payroll</a>, and coordinate with your attorney or CPA on the W-2 vs 1099 classification determination. Misclassification creates real exposure &mdash; California&rsquo;s AB5 and similar state laws are aggressive in this area." },
    { q: "We&rsquo;re a boutique fitness franchisee (OrangeTheory, F45, CycleBar, Club Pilates). How does that change things?", a: "Boutique fitness franchisees layer the full franchise complexity (covered in detail on our <a href=\"/accounting/industries/franchise/\">franchise accounting page</a>) on top of fitness-specific operational accounting. The fitness side: membership revenue recognition, package accounting, MindBody/Mariana Tek/Glofox integration, instructor compensation, LTV/CAC. The franchise side: royalty calculation against FDD-defined gross sales (typically 7&ndash;9% for boutique fitness), ad fund contributions (typically 2% national + 2% local), brand-mandated chart of accounts (most boutique fitness franchisors require their specific CoA for system benchmarking), multi-unit consolidation if you operate multiple studios, and same-store-sales tracking. We handle both layers &mdash; franchise compliance side and fitness operational side &mdash; in one engagement, with monthly royalty/ad-fund reporting on the franchisor&rsquo;s required cadence and the full fitness KPI set alongside." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the ProAdvisor team.)
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "ASC 606 membership/package recognition, platform reconciliation, LTV/CAC, instructor comp, franchise overlay &middot; income-tax filing, W-2/1099 classification opinions, audit and assurance coordinated with your CPA, EA, attorney, or auditor" },
    { value: "Engagement", label: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc., any studio management platform, or any fitness franchise system &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // RELATED — services & industries (stack-8). 4 frozen H3s verbatim.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Franchise accounting", body: "For boutique fitness franchisees (OrangeTheory, F45, CycleBar, Club Pilates, Pure Barre, StretchLab): royalty, ad fund, brand CoA, and multi-unit consolidation.", href: "/accounting/industries/franchise/" },
    { title: "Membership-revenue cleanup", body: "Restate prior-period membership and package revenue from cash-basis to ASC 606 deferred recognition, and rebuild the deferred revenue waterfall.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { title: "Fractional CFO &amp; advisory", body: "Pricing optimization, marketing-investment limits, retention strategy, and expansion modeling for fitness operators.", href: "/accounting/advisory/fractional-cfo/" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; construction, real estate, restaurant, healthcare, legal, nonprofit, and more.", href: "/accounting/industries/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/fitness/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/accounting-industries-fitness.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-fitness-definition","#acctind-fitness-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Fitness","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Fitness Studio & Gym Accounting","serviceType":"Specialist accounting and bookkeeping for fitness operations","description":"Membership revenue recognition under ASC 606, class and personal-training package deferred revenue with breakage, studio management platform reconciliation (MindBody, Mariana Tek, Glofox, ClubReady, Zen Planner, ABC Fitness Solutions), LTV/CAC and churn reporting, instructor compensation, and boutique franchise overlay for U.S. gyms, studios, and franchisees, delivered in QuickBooks by Certified ProAdvisors. Independent Certified QuickBooks ProAdvisor firm; does not file income taxes, render W-2/1099 classification opinions, audit, or assure — coordinates with the client's CPA, EA, attorney, or auditor.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. gyms, boutique studios, personal training, and fitness franchisees"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Fitness accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What fitness accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Fitness accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
