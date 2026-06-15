/* /partners/faq/ — t-guide CollectionPage + FAQPage elevation (MIGRATION-PROTOCOL,
 * content-to-goal / visual-floor). FROZEN-CONTRACT source:
 * jobs/2d3a1fa3/tmp/contract-partnersfaq.txt is the ONLY authority for the 25
 * headings + 7 FAQ. Old partners/faq/index.html read for BODY PROSE only.
 *
 * Pattern carried VERBATIM from the proven t-guide FAQ (src/quickbooks/faq.njk +
 * .11tydata.js): guide-grid (sticky toc + article.prose) · byline-block ·
 * pull-quote · meta-reviewed. The 7 cluster H2s become article <h2> sections,
 * each carrying its real partner-program prose (how the network works, who it's
 * for, what each side provides, compensation, application/vetting, engagement
 * mechanics, independence/exit). The 7 contract FAQ render as a faq__list AND
 * regenerate the FAQPage from the SAME array (schema == rendered, verbatim/flat).
 *
 * Vocabulary + intents matched to the /partners/ hub: primary CTA
 * /contact/?intent=partner-apply, secondary /contact/?intent=partner-question.
 * CTA lexicon: "Book the discovery call" (primary) -> partner-apply intent (the
 * hub's primary application intent); "Speak to a ProAdvisor" (tel). HONESTY:
 * independent firm, not affiliated with Intuit Inc.; no fabricated partner
 * counts/testimonials/stats; David Westgate only in reviewedBy schema @id. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&middot;/g, "·")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

// The 7 cluster H2 sections — heading VERBATIM from the contract, prose carried
// from the old HTML kb-cluster bodies (BODY PROSE only). Each section's first
// item question/answer doubles as the cluster's anchor entry in the popular strip.
const clusters = [
  {
    id: "cluster-who",
    heading: "Who the network is for.",
    lede: "Eligibility, who fits, who doesn&rsquo;t, and how the network relates to TechBrot&rsquo;s lead practice.",
    items: [
      {
        anchor: "pfaq-who",
        q: "Who is the TechBrot operator network for?",
        a: "<p>The network is built for <strong>Certified QuickBooks ProAdvisors, Enrolled Agents, CPAs</strong> (operational/bookkeeping work only &mdash; not tax filing engagements), and <strong>experienced independent bookkeepers</strong> with 5+ years of operational experience who want to focus on client work without running a full firm.</p><p>The ideal fit: a credentialed practitioner with 1&ndash;15 active clients, capacity to take on more, strong technical work product, and frustration with the operational overhead of marketing, lead generation, billing, contracts, and brand-building. The network handles that overhead so operators focus on delivery.</p><p>Not the right fit: practitioners without ProAdvisor certification or equivalent experience, generalists without operational accounting depth, practitioners primarily focused on tax-filing work, or solo bookkeepers without business operating discipline.</p>",
      },
      {
        anchor: "pfaq-who-leadpractice",
        q: "How is the network different from TechBrot&rsquo;s lead practice?",
        a: "<p>TechBrot operates two delivery modes under one firm standard. <strong>Lead practice</strong>: TechBrot&rsquo;s own Certified ProAdvisors deliver directly &mdash; common for QuickBooks-heavy engagements like <a href=\"/quickbooks/cleanup/\">cleanup</a>, <a href=\"/quickbooks/migration/\">migration</a>, and platform work. <strong>Vetted operator network</strong>: curated independent local ProAdvisors deliver under TechBrot&rsquo;s brand, standards, platform, and engagement model &mdash; matched to the client&rsquo;s state, industry, and engagement type.</p><p>Both modes operate under one engagement standard: fixed-fee, written scope, named ProAdvisor accountability, work performed in the client&rsquo;s own QuickBooks file, TechBrot quality review on deliverables. The network is the second-priority proof in our positioning &mdash; TechBrot leads as the expertise-first firm, the network provides scale, local presence, and continuity. See <a href=\"/about/network/\">/about/network/</a> for the full network model from the client perspective.</p>",
      },
      {
        anchor: "pfaq-who-cpa",
        q: "What if I&rsquo;m a CPA &mdash; can I still join?",
        a: "<p>Yes &mdash; for operational accounting work only. CPAs with active QuickBooks ProAdvisor certification or equivalent operational depth are welcome in the network for bookkeeping, cleanup, monthly close, payroll, sales tax compliance, and advisory engagements. <strong>The network does not deliver tax filing engagements</strong> &mdash; TechBrot&rsquo;s scope is operational, and tax filing stays with the client&rsquo;s CPA or EA.</p><p>If you&rsquo;re primarily a tax CPA looking to expand into operational work, the network can fit. If you&rsquo;re primarily looking for tax-engagement lead flow, the network isn&rsquo;t the right channel &mdash; TechBrot specifically positions away from tax filing work (see <a href=\"/legal/disclaimer/\">/legal/disclaimer/</a>). The honest answer at the discovery interview will identify whether the fit works for both sides.</p>",
      },
      {
        anchor: "pfaq-who-us",
        q: "Do I need to be a U.S. resident or U.S.-based practitioner?",
        a: "<p>Yes. TechBrot serves U.S. small and mid-market businesses, and the network requires operators who are U.S.-based, U.S.-credentialed (active U.S. Certified QuickBooks ProAdvisor, U.S.-licensed EA or CPA, or equivalent U.S. operational experience), and authorized to work in the United States. State-specific knowledge matters for payroll, sales tax, and regulatory work &mdash; operators need real U.S. domain depth, not just QuickBooks fluency.</p><p>Geographic distribution within the U.S. is intentional: the network is built to provide local-state coverage across all 50 states, with operators matched to clients in their state or adjacent states where state-specific knowledge applies. Operators outside the U.S. are not eligible regardless of QuickBooks proficiency &mdash; the work requires U.S. tax, payroll, and regulatory fluency that doesn&rsquo;t transfer cleanly from outside the country.</p>",
      },
    ],
  },
  {
    id: "cluster-techbrot-provides",
    heading: "What TechBrot provides.",
    lede: "Lead flow, brand, platform, quality review, operational support, and the technology stack that lets operators focus on the work.",
    items: [
      {
        anchor: "pfaq-provides",
        q: "What does TechBrot provide operators?",
        a: "<p>Six core areas:</p><ol><li><strong>Lead flow</strong> &mdash; qualified inbound leads from TechBrot&rsquo;s marketing, SEO, and AI-search positioning, matched to operator geography and industry expertise.</li><li><strong>Brand and trust positioning</strong> &mdash; operators work under TechBrot Inc., not their own brand, with the credentialing, content, and reputation built around the firm.</li><li><strong>Platform and process infrastructure</strong> &mdash; engagement model, written scope templates, fixed-fee pricing framework, client communication standards, document management systems, technology stack.</li><li><strong>Quality assurance and second-set-of-eyes</strong> &mdash; TechBrot reviews deliverables before they reach clients, providing operational feedback and catching errors.</li><li><strong>Operational support</strong> &mdash; billing, contracts, client onboarding, conflict resolution, escalation handling.</li><li><strong>Community and continuing education</strong> &mdash; peer network with other vetted operators, internal CE on QuickBooks updates, industry-specific training.</li></ol><p>Operators focus on client work; TechBrot handles everything around it.</p>",
      },
      {
        anchor: "pfaq-provides-leadflow",
        q: "How does lead flow actually work?",
        a: "<p>Leads come through TechBrot&rsquo;s inbound channels: organic search (Google + AI search engines), direct inquiries from the website, referrals from existing clients, and content-driven inquiries from the FAQ hubs, industry pages, and editorial content. Leads go through a discovery call with TechBrot first &mdash; we qualify fit, scope the engagement, identify industry and geographic match, then route to the operator whose specific combination fits best.</p><p><strong>Operators don&rsquo;t do their own marketing, lead generation, or sales work under the TechBrot brand</strong>. They receive matched, qualified leads with engagement scope already drafted. Lead volume varies by operator depth (industry specialization, state coverage, engagement types served) and by TechBrot&rsquo;s overall pipeline at the time. We don&rsquo;t guarantee a specific lead volume &mdash; the honest read is that operators in high-demand industries or underserved states see more matches; operators in saturated combinations see fewer.</p>",
      },
      {
        anchor: "pfaq-provides-stack",
        q: "What technology stack do operators work in?",
        a: "<p>Operators work in client QuickBooks files via QuickBooks Online Accountant (QBOA) access &mdash; same as TechBrot&rsquo;s lead practice. Core platforms: <a href=\"/quickbooks/online/\">QuickBooks Online</a>, <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a>, and <a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> across all three product lines. Operators access client files using their own QBOA account, with all client work performed in the client&rsquo;s own QuickBooks file (not on TechBrot infrastructure).</p><p>Operational tooling: TechBrot provides shared document management (Box and SharePoint with permission-controlled client folders), client communication channels (email + Slack workspace where applicable), engagement management (project tracking, deliverable handoff, quality review workflow), and time tracking for internal reporting (operators don&rsquo;t bill clients by hours, but internal time tracking helps engagement scoping accuracy over time). Industry-specific platform access (ServiceTitan, MindBody, Shopify, etc.) is established by the client, with operator access granted at engagement start. See the integration platforms list at <a href=\"/accounting/industries/faq/\">the Industries FAQ</a>.</p>",
      },
      {
        anchor: "pfaq-provides-review",
        q: "Does TechBrot review my work before it reaches clients?",
        a: "<p>Yes &mdash; quality review is part of how the network maintains the TechBrot engagement standard across operators. Deliverables that reach clients (monthly financial packages, cleanup completion reports, advisory dashboards, written scope documents, year-end packages) go through TechBrot quality review before delivery. Review focuses on: reconciliation completeness, GAAP compliance where required, CoA integrity, KPI accuracy, communication clarity, and brand standards.</p><p>Review is positioned as <strong>operational support, not gatekeeping</strong> &mdash; experienced operators rarely have substantive issues caught at review; less-experienced operators or new-to-the-network operators benefit from the second-set-of-eyes during ramp-up. As operators establish track record, review intensity reduces (initial engagements reviewed deliverable-by-deliverable; established operators reviewed at sampled cadence). The review process protects the client, the brand, and the operator from preventable errors. Operators receive direct feedback to improve over time.</p>",
      },
    ],
  },
  {
    id: "cluster-operators-provide",
    heading: "What operators provide.",
    lede: "Work quality standards, communication discipline, certification maintenance, capacity expectations, and the operating culture the network requires.",
    items: [
      {
        anchor: "pfaq-operators-quality",
        q: "What work-quality standards does TechBrot expect?",
        a: "<p>Five concrete standards. <strong>(1) Disciplined monthly close</strong> &mdash; clients&rsquo; books close on the defined calendar (typically 5&ndash;10 business days from period end), with full reconciliation, accruals posted, and prior period locked. See <a href=\"/accounting/month-end-close/\">/accounting/month-end-close/</a>. <strong>(2) GAAP compliance where required</strong> &mdash; deferred revenue under ASC 606, leases under ASC 842, fund accounting under ASC 958 for nonprofits, percentage-of-completion for construction, depending on client industry. <strong>(3) Industry-specific CoA and KPI handling</strong> &mdash; operators are expected to know their assigned industries deeply enough to design and maintain industry-appropriate structures.</p><p><strong>(4) Clean documentation</strong> &mdash; every judgment call, journal entry, and engagement adjustment documented in the file or shared workspace. The work should be picked up by another operator if needed without losing context. <strong>(5) Client communication</strong> &mdash; monthly review calls happen on schedule, async messages get responded to within one business day, escalations get raised early rather than concealed. Operators who consistently meet these standards stay in the network and receive priority on new matches; operators who don&rsquo;t exit the network.</p>",
      },
      {
        anchor: "pfaq-operators-comms",
        q: "What communication standards do operators follow with clients?",
        a: "<p>Communication cadence and tone follow the TechBrot engagement standard. <strong>Monthly review call</strong>: 30&ndash;45 minutes when the prior month closes, structured agenda covering financial statements, KPI commentary, decisions needed, forward-looking items. Operators run this call directly with the client. <strong>Async messaging</strong>: same-day response on urgent items, one-business-day response on standard items, via the channels established at engagement start (email, Slack, or shared workspace).</p><p><strong>Tone</strong>: enterprise-professional, plain English (no jargon dump on clients), honest about scope and limitations (never bluff on expertise outside the operator&rsquo;s depth), and direct about issues found (cleanup needs, GAAP questions, judgment calls). Operators sign client communications as themselves with TechBrot firm attribution &mdash; never as an anonymous &ldquo;account manager&rdquo; or under a generic team name. Clients know their named ProAdvisor and have direct access during business hours.</p>",
      },
      {
        anchor: "pfaq-operators-cert",
        q: "Do operators have to maintain active ProAdvisor certification?",
        a: "<p>Yes &mdash; active certification is a continuous requirement, not a one-time qualification. Operators must maintain active Certified QuickBooks ProAdvisor status (or equivalent credentials &mdash; active EA license, active CPA license with operational accounting focus) for the duration of their network engagement. Annual recertification on the QuickBooks product lines they serve is required; lapsed certifications trigger network suspension until current.</p><p>Active certification is visible in Intuit&rsquo;s public Find a ProAdvisor directory; TechBrot verifies status periodically. Operators are also expected to keep current on QuickBooks platform changes (Online, Desktop, Enterprise version updates), regulatory changes affecting client industries (state payroll changes, sales tax nexus updates, GAAP standard changes), and integration platform updates relevant to their assigned clients. TechBrot provides internal CE resources to support this; operators are responsible for using them.</p>",
      },
      {
        anchor: "pfaq-operators-time",
        q: "What time commitment does the network require?",
        a: "<p>There&rsquo;s no fixed minimum or maximum &mdash; commitment scales with the client work an operator takes. A typical network operator carries <strong>3&ndash;10 active client engagements through TechBrot</strong>, representing roughly 15&ndash;35 hours per week depending on engagement mix (cleanup and catch-up projects are more intensive; established monthly bookkeeping retainers are lighter once stabilized). Many operators run the network engagements as their primary practice; others maintain a smaller outside book of long-term clients.</p><p>What the network requires regardless of volume: <strong>defined availability</strong> (operators commit to specific working hours so client expectations can be set honestly), <strong>predictable responsiveness</strong> within those hours, <strong>capacity discipline</strong> (operators don&rsquo;t take matches they can&rsquo;t actually deliver against), and <strong>honest communication about capacity changes</strong> (illness, family commitments, capacity shifts &mdash; operators raise these early so re-matching can happen cleanly). The network model works because operators run their practice professionally; it breaks when operators over-commit or under-communicate.</p>",
      },
    ],
  },
  {
    id: "cluster-compensation",
    heading: "Compensation model.",
    lede: "How operators are paid, the fee-split structure, payment cadence, and what operators don&rsquo;t pay for.",
    items: [
      {
        anchor: "pfaq-comp",
        q: "How are operators compensated?",
        a: "<p>Operators are compensated on a <strong>fee-split model</strong> &mdash; operators receive a defined percentage of client engagement fees, TechBrot retains the remainder for the infrastructure, lead generation, quality assurance, brand, and operational overhead the network depends on. Specific splits are set at onboarding based on engagement type, operator experience, and lead source. The model is transparent: every engagement has a written fee schedule that both operator and TechBrot reference.</p><p>Payment cadence: <strong>monthly, in arrears, based on client payments received in the prior month</strong>. Operators don&rsquo;t carry payment risk on clients &mdash; TechBrot handles collection and operator payments are tied to actual revenue collected, not invoiced. <strong>No equity, no buy-in, no per-client fees from operators</strong> &mdash; the relationship is straightforwardly compensation for delivered work.</p>",
      },
      {
        anchor: "pfaq-comp-splits",
        q: "What are the actual fee splits?",
        a: "<p>Specific splits are set at onboarding and documented in writing &mdash; they vary by engagement type, operator experience and tenure in the network, and lead source. Rather than publish a single rate that wouldn&rsquo;t apply uniformly, TechBrot discusses the actual splits during the interview stage so operators understand the economics before committing.</p><p>The general structure: <strong>operator share is larger on engagements where operator depth provides the differentiating value</strong> (industry-specialist work, advisory and fractional CFO engagements, complex cleanups) and <strong>TechBrot share is larger on engagements where TechBrot infrastructure provides the differentiating value</strong> (lead-flow-heavy engagements, standardized monthly bookkeeping, work on TechBrot-developed playbooks). Across the operator&rsquo;s portfolio, the blended split typically results in operator economics that are competitive with running an independent practice &mdash; without the marketing, sales, and operational overhead. Specific numbers are shared at the application interview to allow honest evaluation before commitment.</p>",
      },
      {
        anchor: "pfaq-comp-paid",
        q: "When and how are operators paid?",
        a: "<p>Operators are paid <strong>monthly, in arrears</strong>, on a defined date each month (typically the 15th of the month following client collection). Payments cover the operator&rsquo;s share of client engagement fees collected in the prior month, with a detailed statement showing engagement-by-engagement breakdown. Payments are issued via ACH to the operator&rsquo;s designated business account.</p><p>Operators contract with TechBrot as independent contractors (1099-NEC at year-end), not as employees. This means: operators handle their own self-employment tax, can deduct their own business expenses, set their own work hours within engagement requirements, and aren&rsquo;t covered by TechBrot for benefits, insurance, or workers&rsquo; compensation. Operators with their own LLC or S-Corp can structure compensation accordingly. TechBrot provides year-end 1099-NEC for tax reporting. This structure is standard for professional network arrangements and is documented in writing at onboarding.</p>",
      },
      {
        anchor: "pfaq-comp-costs",
        q: "What costs do operators bear themselves?",
        a: "<p>Operators are responsible for: <strong>their own QuickBooks ProAdvisor membership and annual certification fees</strong> (paid directly to Intuit), <strong>their own continuing education</strong> beyond what TechBrot provides internally, <strong>their own professional liability insurance / E&amp;O coverage</strong> (required as a condition of network membership; minimum coverage levels documented at onboarding), <strong>their own QuickBooks Online Accountant access</strong> (free from Intuit but maintained by the operator), <strong>their own home-office or workspace</strong> (operators work remotely; TechBrot doesn&rsquo;t provide office space), and <strong>their own equipment and connectivity</strong> (computer, internet, phone).</p><p>TechBrot covers: the platforms and tooling operators use to deliver client work (document management, communication systems, time tracking, quality review workflow), the lead generation engine, the brand and marketing, the website and content, and the operational support staff. The split is intentional: operators run as independent practitioners under the TechBrot brand; TechBrot doesn&rsquo;t employ them or carry their employment overhead.</p>",
      },
    ],
  },
  {
    id: "cluster-application",
    heading: "Application &amp; vetting.",
    lede: "The application process, vetting bar, timeline, and what TechBrot actually evaluates before extending an offer.",
    items: [
      {
        anchor: "pfaq-apply",
        q: "What is the application process and how long does vetting take?",
        a: "<p>The application process has three stages over typically <strong>3&ndash;5 weeks</strong>.</p><p><strong>Stage 1 &mdash; application</strong> (15 minutes): operator submits credentials (active ProAdvisor certification verified via Intuit directory, prior engagement experience, geographic and industry depth, references).</p><p><strong>Stage 2 &mdash; work sample review</strong> (1&ndash;2 weeks): operator provides redacted sample deliverables (a cleanup report, a monthly close package, or an industry-specific engagement). TechBrot reviews for technical quality, communication standards, and engagement model alignment.</p><p><strong>Stage 3 &mdash; interview and reference checks</strong> (1&ndash;2 weeks): video interview covering technical depth, communication style, professional judgment, and fit with TechBrot&rsquo;s standards. Reference checks with prior clients or professional contacts.</p><p>Onboarding follows acceptance, typically 1&ndash;2 weeks for platform setup, brand training, and first-client assignment. Total timeline from application to first engagement: <strong>typically 5&ndash;8 weeks</strong>.</p>",
      },
      {
        anchor: "pfaq-apply-evaluate",
        q: "What does TechBrot actually evaluate during vetting?",
        a: "<p>Five dimensions, in roughly this order of weight. <strong>(1) Technical work quality</strong> &mdash; demonstrated through the work sample. Does the operator&rsquo;s deliverable meet TechBrot&rsquo;s standard for reconciliation discipline, CoA design, GAAP application, and reporting clarity? <strong>(2) Industry and engagement type depth</strong> &mdash; what industries can the operator actually serve well? What engagement types (monthly, cleanup, catch-up, advisory)? Realistic self-assessment matters more than maximum claimed coverage.</p><p><strong>(3) Communication and judgment</strong> &mdash; demonstrated through the interview. Does the operator communicate clearly with clients? Handle scope honestly? Raise issues early? Refuse work outside their depth? <strong>(4) Professional discipline</strong> &mdash; reliability, calendar management, follow-through on commitments. Evaluated via references. <strong>(5) Fit with TechBrot&rsquo;s engagement model</strong> &mdash; some operators prefer hourly billing, custom pricing per client, or other models that don&rsquo;t align with TechBrot&rsquo;s fixed-fee discipline. The vetting identifies misalignment honestly before onboarding rather than after.</p>",
      },
      {
        anchor: "pfaq-apply-everyone",
        q: "Does TechBrot accept everyone who applies?",
        a: "<p>No. The vetting process meaningfully filters &mdash; the network exists to maintain the TechBrot engagement standard across operators, and accepting operators who can&rsquo;t deliver that standard would compromise the brand for everyone. Common reasons applications don&rsquo;t advance: <strong>technical work quality below the network bar</strong> (reconciliation gaps, CoA design issues, GAAP errors in the work sample), <strong>communication style misalignment</strong> (jargon-heavy, evasive on limitations, defensive in interview), <strong>insufficient operational experience</strong> (under 5 years of independent practice, or experience entirely in tax-focused work without operational depth), <strong>misalignment with the engagement model</strong> (preference for hourly billing, resistance to written scope discipline, reluctance to accept quality review).</p><p>Operators not accepted receive specific feedback so the application can succeed later if circumstances change. Some operators reapply after gaining additional experience; some find the network model genuinely isn&rsquo;t the right fit and pursue other paths. The vetting is honest, not adversarial &mdash; the goal is genuine fit identification, not arbitrary gatekeeping.</p>",
      },
      {
        anchor: "pfaq-apply-newer",
        q: "Can I apply if I&rsquo;m newer to independent practice but credentialed?",
        a: "<p>The 5+ years of operational experience standard isn&rsquo;t a strict cutoff &mdash; it&rsquo;s the typical floor where operators have built enough engagement depth to handle TechBrot&rsquo;s engagement model independently. Practitioners with less independent experience but substantial relevant background (5+ years at an accounting firm in operational accounting roles, recent ProAdvisor certification with strong prior industry experience, former controller transitioning to fractional advisory work) are evaluated on the substance, not the years.</p><p>What doesn&rsquo;t work: newly certified ProAdvisors without underlying accounting experience, generalist bookkeepers without operational depth, practitioners primarily looking for hands-on training rather than active practice. The network expects operators who can deliver client work independently from day one &mdash; with TechBrot providing the brand and platform, not the technical training. Earlier-stage practitioners benefit more from working at an accounting firm in employed roles before transitioning to a network like this.</p>",
      },
    ],
  },
  {
    id: "cluster-engagement",
    heading: "Engagement mechanics.",
    lede: "How client matching works, geographic coverage, conflicts, and what happens when a match isn&rsquo;t right.",
    items: [
      {
        anchor: "pfaq-engagement-matching",
        q: "How does client matching work?",
        a: "<p>Client matching uses three primary factors. <strong>Geographic match</strong>: operators are matched to clients in their state or adjacent states where state-specific knowledge (tax, payroll, regulatory) matters &mdash; though all work is virtual, geographic alignment improves continuity and state-specific accuracy. <strong>Industry match</strong>: operators with depth in specific industries (<a href=\"/accounting/industries/construction/\">construction</a>, <a href=\"/accounting/industries/saas/\">SaaS</a>, <a href=\"/accounting/industries/restaurant/\">restaurants</a>, etc.) are matched to clients in those industries. <strong>Engagement type match</strong>: cleanup specialists get cleanup engagements, monthly bookkeeping operators get monthly retainers, advisory-qualified operators get <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> or advisory work.</p><p>The discovery call with the client identifies their fit; TechBrot matches to the operator whose specific combination fits best. <strong>Operators can decline matches that don&rsquo;t fit</strong> (industry outside their depth, capacity issues, conflict of interest), and we re-match. No quotas, no penalty for declining genuinely poor fits. The goal is engagements both sides commit to honestly &mdash; mismatched engagements fail and damage everyone&rsquo;s reputation.</p>",
      },
      {
        anchor: "pfaq-engagement-coverage",
        q: "What if I&rsquo;m the only operator in my state? What if there are several?",
        a: "<p>Both situations exist across the network. In <strong>states where coverage is thin</strong> (currently many states beyond the top metros), operators receive matches across their state for both adjacent and home-state work. As state coverage builds, matches become more locally focused. <strong>In states with multiple operators</strong> (currently several top metros), matches are distributed based on industry depth, engagement type fit, and capacity &mdash; not first-come-first-served. Two operators in California can serve different industries (one SaaS-focused, one construction-focused) and rarely compete for the same lead.</p><p>The network is actively expanding state coverage through the 50-state buildout plan &mdash; we&rsquo;re intentionally onboarding operators in underserved states first to support TechBrot&rsquo;s state-level SEO and AI-search expansion. Operators in priority states (CA, TX, FL, NY, IL plus 20 next-tier states) see disproportionate lead flow during the buildout phase. Operators in lower-priority states still receive matches but volume varies more with overall pipeline.</p>",
      },
      {
        anchor: "pfaq-engagement-conflict",
        q: "What happens if I have a conflict of interest with a matched client?",
        a: "<p>Conflicts of interest are flagged and handled transparently. Standard conflicts: prior business relationship with the client (operator previously served them as an employee, contractor, or independent), family relationship, equity ownership in a competing business, current engagement that creates conflicting fiduciary duties. Operators are expected to flag conflicts immediately when a match is offered &mdash; both upfront (during the operator&rsquo;s industry/state profile setup) and at match-time (when specific client information is shared).</p><p>Flagged conflicts trigger re-match to a different operator. Operators are never penalized for flagging conflicts &mdash; the alternative (proceeding with a conflict, having it surface during the engagement) damages the client relationship, the operator&rsquo;s reputation, and the brand. Some conflicts are obvious (prior employer); some are subtle (family member of a key competitor). When in doubt, flag and discuss. TechBrot also tracks operator and client information to identify potential conflicts proactively before match offers.</p>",
      },
    ],
  },
  {
    id: "cluster-independence",
    heading: "Operating independence &amp; exit.",
    lede: "What operators can do outside the network, non-solicit terms, and how exit actually works on both sides.",
    items: [
      {
        anchor: "pfaq-independence-outside",
        q: "Can I continue to serve my own clients outside the network?",
        a: "<p>Yes &mdash; operators retain full independence to serve clients outside the TechBrot network. The network engagement covers work done through TechBrot (where TechBrot is the client-facing brand and TechBrot&rsquo;s engagement model applies); it does not restrict the operator&rsquo;s outside practice.</p><p>The standard agreement includes a narrow non-solicit clause: <strong>operators don&rsquo;t actively recruit TechBrot clients away from the network during or for 12 months after the engagement</strong>, and don&rsquo;t use TechBrot&rsquo;s proprietary processes, templates, or client lists outside the network. Outside that, operators run their own practice freely. Many operators maintain a smaller independent book of long-term clients while taking new growth through TechBrot &mdash; the model is designed to be additive, not exclusive.</p>",
      },
      {
        anchor: "pfaq-independence-exit",
        q: "What are the exit terms if I decide to leave the network?",
        a: "<p>Exit is structured to protect clients from disruption while letting operators leave on reasonable timelines. <strong>Standard notice period: 60 days</strong> &mdash; operators give 60 days&rsquo; notice, during which existing engagements are transitioned to other operators (or back to TechBrot lead practice). <strong>Client transition</strong>: TechBrot handles client communication, operator change introductions, and knowledge transfer to the receiving operator. The departing operator participates in the transition to ensure continuity.</p><p><strong>Final compensation</strong>: operators receive payment for work completed through the exit date, with the standard monthly payment cycle applying to final amounts. <strong>Non-solicit terms apply for 12 months post-exit</strong> as described above &mdash; operators don&rsquo;t actively recruit TechBrot clients away during that window. There&rsquo;s no exit fee, no buyout, no penalty for leaving. The relationship is professional, the exit is clean. Operators have left and rejoined the network later when their practice circumstances changed; the network is designed to accommodate that.</p>",
      },
      {
        anchor: "pfaq-independence-apply",
        q: "How do I apply?",
        a: "<p>Submit the application through the <a href=\"/partners/\">partners page</a> or contact us directly with your credentials, geographic coverage, industry depth, and a brief summary of your current practice. The application form covers the basics; the substantive vetting happens in stages 2 and 3 (work sample review and interview).</p><p>Before applying, honest self-assessment helps: do you have active ProAdvisor or equivalent credentials? Do you have 5+ years of operational accounting experience? Do you have at least one industry where you have genuine depth (not surface familiarity)? Are you comfortable with fixed-fee pricing, written scope discipline, and quality review on your deliverables? Do you want to focus on client work rather than build your own brand? If the answers are yes, the application is worth submitting. If the answers are mixed, the discovery interview will identify whether the network is the right fit at this point in your practice.</p>",
      },
    ],
  },
];

// The 6 popular-strip anchors (contract H2 "Six questions ProAdvisors ask first."),
// pointing into the cluster sections above. Verbatim questions.
const popular = [
  { qid: "Q.01", cluster: "Who", anchor: "pfaq-who", q: "Who is the TechBrot operator network for?" },
  { qid: "Q.05", cluster: "What we provide", anchor: "pfaq-provides", q: "What does TechBrot provide operators?" },
  { qid: "Q.13", cluster: "Compensation", anchor: "pfaq-comp", q: "How are operators compensated?" },
  { qid: "Q.17", cluster: "Application", anchor: "pfaq-apply", q: "What is the application process and how long does vetting take?" },
  { qid: "Q.21", cluster: "Engagement", anchor: "pfaq-engagement-matching", q: "How does client matching work?" },
  { qid: "Q.24", cluster: "Independence", anchor: "pfaq-independence-outside", q: "Can I continue to serve my own clients outside the network?" },
];

// The 7 contract FAQ — verbatim questions, flat prose answers (the verbatim
// answers from the contract). Rendered as a faq__list AND the FAQPage schema.
// Append-only enrichment is allowed; here the answers carry the contract text.
const faq = [
  {
    q: "Who is the TechBrot operator network for?",
    a: "The network is built for Certified QuickBooks ProAdvisors, Enrolled Agents, CPAs (operational/bookkeeping work only &mdash; not tax filing engagements), and experienced independent bookkeepers with 5+ years of operational experience who want to focus on client work without running a full firm. The ideal fit: a credentialed practitioner with 1-15 active clients, capacity to take on more, strong technical work product, and frustration with the operational overhead of marketing, lead generation, billing, contracts, and brand-building. The network handles that overhead so operators focus on delivery. Not the right fit: practitioners without ProAdvisor certification or equivalent experience, generalists without operational accounting depth, practitioners primarily focused on tax-filing work, or solo bookkeepers without business operating discipline.",
  },
  {
    q: "How is the network different from TechBrot&rsquo;s lead practice?",
    a: "TechBrot operates two delivery modes under one firm standard. Lead practice: TechBrot&rsquo;s own Certified ProAdvisors deliver directly &mdash; common for QuickBooks-heavy engagements like cleanup, migration, and platform work. Vetted operator network: curated independent local ProAdvisors deliver under TechBrot&rsquo;s brand, standards, platform, and engagement model &mdash; matched to the client&rsquo;s state, industry, and engagement type. Both modes operate under one engagement standard: fixed-fee, written scope, named ProAdvisor accountability, work performed in the client&rsquo;s own QuickBooks file, TechBrot quality review on deliverables. The network is the second-priority proof in our positioning &mdash; TechBrot leads as the expertise-first firm, the network provides scale, local presence, and continuity.",
  },
  {
    q: "What does TechBrot provide operators?",
    a: "Six core areas. (1) Lead flow &mdash; qualified inbound leads from TechBrot&rsquo;s marketing, SEO, and AI-search positioning, matched to operator geography and industry expertise. (2) Brand and trust positioning &mdash; operators work under TechBrot Inc., not their own brand, with the credentialing, content, and reputation built around the firm. (3) Platform and process infrastructure &mdash; engagement model, written scope templates, fixed-fee pricing framework, client communication standards, document management systems, technology stack. (4) Quality assurance and second-set-of-eyes &mdash; TechBrot reviews deliverables before they reach clients, providing operational feedback and catching errors. (5) Operational support &mdash; billing, contracts, client onboarding, conflict resolution, escalation handling. (6) Community and continuing education &mdash; peer network with other vetted operators, internal CE on QuickBooks updates, industry-specific training. Operators focus on client work; TechBrot handles everything around it.",
  },
  {
    q: "How are operators compensated?",
    a: "Operators are compensated on a fee-split model &mdash; operators receive a defined percentage of client engagement fees, TechBrot retains the remainder for the infrastructure, lead generation, quality assurance, brand, and operational overhead the network depends on. Specific splits are set at onboarding based on engagement type, operator experience, and lead source. The model is transparent: every engagement has a written fee schedule that both operator and TechBrot reference. Payment cadence: monthly, in arrears, based on client payments received in the prior month. Operators don&rsquo;t carry payment risk on clients &mdash; TechBrot handles collection and operator payments are tied to actual revenue collected, not invoiced. No equity, no buy-in, no per-client fees from operators &mdash; the relationship is straightforwardly compensation for delivered work.",
  },
  {
    q: "What is the application process and how long does vetting take?",
    a: "The application process has three stages over typically 3-5 weeks. Stage 1 &mdash; application (15 minutes): operator submits credentials (active ProAdvisor certification verified via Intuit directory, prior engagement experience, geographic and industry depth, references). Stage 2 &mdash; work sample review (1-2 weeks): operator provides redacted sample deliverables (a cleanup report, a monthly close package, or an industry-specific engagement). TechBrot reviews for technical quality, communication standards, and engagement model alignment. Stage 3 &mdash; interview and reference checks (1-2 weeks): video interview covering technical depth, communication style, professional judgment, and fit with TechBrot&rsquo;s standards. Reference checks with prior clients or professional contacts. Onboarding follows acceptance, typically 1-2 weeks for platform setup, brand training, and first-client assignment. Total timeline from application to first engagement: typically 5-8 weeks.",
  },
  {
    q: "How does client matching work?",
    a: "Client matching uses three primary factors. Geographic match: operators are matched to clients in their state or adjacent states where state-specific knowledge (tax, payroll, regulatory) matters &mdash; though all work is virtual, geographic alignment improves continuity and state-specific accuracy. Industry match: operators with depth in specific industries (construction, SaaS, restaurants, etc.) are matched to clients in those industries. Engagement type match: cleanup specialists get cleanup engagements, monthly bookkeeping operators get monthly retainers, advisory-qualified operators get fractional CFO or advisory work. The discovery call with the client identifies their fit; TechBrot matches to the operator whose specific combination fits best. Operators can decline matches that don&rsquo;t fit (industry outside their depth, capacity issues, conflict of interest), and we re-match. No quotas, no penalty for declining genuinely poor fits.",
  },
  {
    q: "Can I continue to serve my own clients outside the network?",
    a: "Yes &mdash; operators retain full independence to serve clients outside the TechBrot network. The network engagement covers work done through TechBrot (where TechBrot is the client-facing brand and TechBrot&rsquo;s engagement model applies); it does not restrict the operator&rsquo;s outside practice. The standard agreement includes a narrow non-solicit clause: operators don&rsquo;t actively recruit TechBrot clients away from the network during or for 12 months after the engagement, and don&rsquo;t use TechBrot&rsquo;s proprietary processes, templates, or client lists outside the network. Outside that, operators run their own practice freely. Many operators maintain a smaller independent book of long-term clients while taking new growth through TechBrot &mdash; the model is designed to be additive, not exclusive.",
  },
];

// "Learn more about the firm and the engagement model." — the 8 contract H3 cards.
const related = [
  { cluster: "Partners", title: "Partners Hub", href: "/partners/", body: "The main partner-facing page covering the network model, what TechBrot provides operators, and the application process." },
  { cluster: "About", title: "About TechBrot", href: "/about/", body: "The firm story &mdash; positioning, structure, methodology, and the team behind the lead practice." },
  { cluster: "About", title: "The Operator Network", href: "/about/network/", body: "The client-facing view of the network &mdash; how vetted local ProAdvisors deliver under TechBrot&rsquo;s brand and standards." },
  { cluster: "About", title: "Engagement Methodology", href: "/about/methodology/", body: "The engagement model operators deliver against &mdash; fixed-fee, written scope, named ProAdvisor, monthly close discipline." },
  { cluster: "Trust", title: "Trust &amp; Standards", href: "/trust/", body: "The firm&rsquo;s standards for client work &mdash; the bar operators commit to maintaining." },
  { cluster: "Pricing", title: "Pricing Reference", href: "/pricing/", body: "Canonical pricing across all engagement types &mdash; the framework operators deliver fixed-fee work within." },
  { cluster: "FAQ", title: "Accounting FAQ", href: "/accounting/faq/", body: "The broader client-facing accounting FAQ &mdash; understanding what clients ask helps operators understand the engagement landscape." },
  { cluster: "FAQ", title: "Industries FAQ", href: "/accounting/industries/faq/", body: "The 17 industries TechBrot serves and the industry-specific patterns network operators are matched against." },
];

module.exports = {
  popular: popular,
  clusters: clusters,
  faq: faq,
  related: related,
  eleventyComputed: {
    pageGraph(data) {
      const url = "https://techbrot.com/partners/faq/";
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["CollectionPage", "WebPage"],
            "@id": url + "#webpage",
            url: url,
            name: data.title,
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Certified QuickBooks ProAdvisors, Enrolled Agents, and experienced bookkeepers considering network partnership",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#partners-faq-in-brief-text"],
            },
            reviewedBy: { "@id": "https://techbrot.com/#david-westgate" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": url + "#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Partners", item: "https://techbrot.com/partners/" },
              { "@type": "ListItem", position: 3, name: "FAQ", item: url },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": url + "#faq",
            mainEntity: data.faq.map(function (item) {
              return {
                "@type": "Question",
                name: stripTags(item.q),
                acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
              };
            }),
          },
        ],
      };
    },
  },
};
