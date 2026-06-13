/* ============================================================================
   TechBrot · intent-map.js — DATA LAYER for contact intent routing
   ----------------------------------------------------------------------------
   This is the ONLY file that grows as the site scales (new states, services,
   FAQ hubs). The engine (contact-intents.js) never changes.

   TWO data structures:
   1. INTENT_MAP  — base intent definitions (headline / lede / service / cta).
                    Each key matches a ?intent= value passed by a page CTA.
   2. LOOKUPS     — display-name tables for composable location/industry
                    enrichment (state, city, industry). Lets ONE base intent
                    serve all 50 states x all cities x all industries via
                    interpolation, instead of hand-writing thousands of entries.

   Loaded BEFORE contact-intents.js, only on the contact page.
   Exposes: window.TB_INTENT_MAP, window.TB_LOOKUPS

   ORGANIZED BY SILO:
     · Bookkeeping (hub, monthly + tiers, catch-up + tiers, cleanup + tiers)
     · QuickBooks core (setup, migration, speak-expert)
     · QuickBooks file cleanup tiers
     · QuickBooks migration cluster
     · QuickBooks product advisory (QBO / QBD / QBE / plan-selection)
     · QuickBooks errors
     · QuickBooks payroll
     · Operations (payroll, sales tax)
     · Advisory (hub + cash-flow / budgeting / KPI / performance / strategy / CFO + tiers)
     · Comparison / competitor migration
     · Partners
     · FAQ hubs
   ============================================================================ */

window.TB_INTENT_MAP = {

    /* ========================================================================
       STATE-PILLAR FALLBACKS  (generic, location-aware)
       ------------------------------------------------------------------------
       Used by the contact engine for ANY ?intent=<state> or
       ?intent=<state>-advisory where <state> is a known TB_LOOKUPS.state slug.
       The engine appends a location sentence ("Serving businesses in New York.")
       via locationPhrase(), so one template serves all 50 states — no per-state
       entries needed. Keys are namespaced with __ so they never collide with a
       real CTA intent slug.
       ===================================================================== */

    '__state_pillar__': {
      headline: 'Tell us about your {state} books.<br>We&rsquo;ll handle the rest.',
      lede: 'A Certified QuickBooks ProAdvisor reviews where your {state} books are, recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so &mdash; and point you toward who is.',
      service: 'not-sure',
      cta: 'Book the Discovery Call'
    },

    '__state_advisory__': {
      headline: 'Advisory for {state} businesses<br>ready to move beyond the books.',
      lede: 'Fractional CFO and advisory for {state} businesses &mdash; forecasting, board reporting, capital-event readiness, and KPI design, coordinated with your CPA. A Certified ProAdvisor reviews your situation and tells you honestly whether advisory is the right next step.',
      service: 'fractional-cfo',
      cta: 'Discuss Advisory'
    },

    /* ========================================================================
       BOOKKEEPING SILO
       ===================================================================== */

    /* Hub */
    'bookkeeping': {
      headline: 'Let&rsquo;s see what your books actually need.',
      lede: 'You came from our bookkeeping services. A Certified ProAdvisor reviews your file, determines which engagement fits &mdash; monthly, cleanup, catch-up, or multi-year historical &mdash; and produces a written fixed-fee scope within 3 business days. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so.',
      service: 'monthly-bookkeeping',
      cta: 'Book the Bookkeeping Review'
    },

    /* Monthly bookkeeping — short alias + tiers (page uses ?intent=monthly) */
    'monthly': {
      headline: 'Books closed every month, on time.',
      lede: 'You came from our monthly bookkeeping page. A Certified ProAdvisor reviews your file, scopes the right tier, and tells you what monthly bookkeeping will cost &mdash; in writing &mdash; before any work begins. Fixed monthly fee, financial package by the 15th.',
      service: 'monthly-bookkeeping',
      cta: 'Start Monthly Bookkeeping'
    },
    'monthly-bookkeeping': {
      headline: 'Monthly bookkeeping,<br>scoped properly.',
      lede: 'You came from the monthly bookkeeping page. We&rsquo;ll review what your monthly close needs and scope a recurring engagement &mdash; fixed monthly fee, written scope.',
      service: 'monthly-bookkeeping'
    },
    'monthly-essentials': {
      headline: 'Scope an Essentials monthly engagement.',
      lede: 'You came from the Essentials tier ($400&ndash;$700/mo) &mdash; simple books, 1&ndash;2 accounts, light transaction volume, simple or no payroll. A Certified ProAdvisor confirms fit and delivers a written fixed-fee scope before any work begins.',
      service: 'monthly-bookkeeping',
      cta: 'Start Monthly Bookkeeping'
    },
    'monthly-standard': {
      headline: 'Scope a Standard monthly engagement.',
      lede: 'You came from the Standard tier ($700&ndash;$1,400/mo) &mdash; active small business, multiple accounts, payroll, and sales tax. A Certified ProAdvisor scopes the engagement in writing, including AP/AR upkeep and a quarterly business review.',
      service: 'monthly-bookkeeping',
      cta: 'Start Monthly Bookkeeping'
    },
    'monthly-complex': {
      headline: 'Scope a Complex monthly engagement.',
      lede: 'You came from the Complex tier ($1,400&ndash;$2,500+/mo) &mdash; multi-entity, inventory, high volume, multi-state sales tax, or lender/investor reporting. A Certified ProAdvisor scopes the engagement in writing, including consolidation and a monthly KPI dashboard.',
      service: 'monthly-bookkeeping',
      cta: 'Start Monthly Bookkeeping'
    },

    /* Catch-up — base + tiers */
    'catch-up': {
      headline: 'Months or years behind?<br>That&rsquo;s a catch-up engagement.',
      lede: 'You came from the catch-up page. We&rsquo;ll scope the historical work needed, deliver a fixed fee, and get you current with CPA-ready books.',
      service: 'catch-up'
    },
    'catch-up-short': {
      headline: 'Scope a short catch-up.',
      lede: 'You came from the Short catch-up tier ($300/mo of backlog) &mdash; for books 3&ndash;6 months behind, small business, simple or no payroll. A Certified ProAdvisor quantifies the backlog and delivers a written fixed-fee scope within 3 business days.',
      service: 'catch-up',
      cta: 'Book the Catch-Up Review'
    },
    'catch-up-standard': {
      headline: 'Scope a standard catch-up.',
      lede: 'You came from the Standard catch-up tier ($350&ndash;$450/mo of backlog) &mdash; for books 12&ndash;24 months behind, with payroll, multiple accounts, and sales tax. A Certified ProAdvisor quantifies the backlog and delivers a written fixed-fee scope within 3 business days. CPA-ready output.',
      service: 'catch-up',
      cta: 'Book the Catch-Up Review'
    },
    'catch-up-multi': {
      headline: 'Scope a multi-year catch-up.',
      lede: 'You came from the Multi-year catch-up tier ($450&ndash;$650/mo of backlog) &mdash; for books 2+ years behind, multi-entity, inventory, multi-state sales tax, or complex payroll. A Certified ProAdvisor quantifies the backlog and delivers a written fixed-fee scope within 3 business days.',
      service: 'catch-up',
      cta: 'Book the Catch-Up Review'
    },

    /* Bookkeeping cleanup — base + tiers.
       NOTE: distinct from QuickBooks FILE cleanup tiers (qb-cleanup-*) below. */
    'cleanup': {
      headline: 'Cleanup is the right place to start.',
      lede: 'You came from the cleanup page. We&rsquo;ll review where your books are, scope the cleanup fixed-fee, and tell you what current-state looks like. Written scope within 3 business days.',
      service: 'cleanup'
    },
    'cleanup-single': {
      headline: 'Scope a single-year cleanup.',
      lede: 'You came from the Single-year cleanup tier ($1,500&ndash;$3,500) &mdash; smaller business, one year, 2&ndash;3 bank accounts, simple or no payroll. A Certified ProAdvisor reviews the file and delivers a written fixed-fee scope before any work begins.',
      service: 'cleanup',
      cta: 'Book the Cleanup Review'
    },
    'cleanup-standard': {
      headline: 'Scope a standard cleanup.',
      lede: 'You came from the Standard cleanup tier ($3,500&ndash;$8,000) &mdash; active business, 12&ndash;24 months, payroll, multiple accounts, sales tax. A Certified ProAdvisor reviews the file and delivers a written fixed-fee scope, including chart-of-accounts restructure and CPA-ready statements.',
      service: 'cleanup',
      cta: 'Book the Cleanup Review'
    },
    'cleanup-multi': {
      headline: 'Scope a multi-year cleanup.',
      lede: 'You came from the Multi-year cleanup tier ($8,000&ndash;$15,000+) &mdash; 2+ years behind, multi-entity, inventory, multi-state sales tax, complex payroll. A Certified ProAdvisor reviews the file and delivers a written fixed-fee scope before any work begins.',
      service: 'cleanup',
      cta: 'Book the Cleanup Review'
    },
    'financial-statements-prep': {
      headline: 'Get all three statements, every month.',
      lede: 'You came from our financial statements page. A Certified ProAdvisor reviews where your books stand, what your statements should look like, and whether monthly preparation &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days. CPA-ready output.',
      service: 'monthly-bookkeeping',
      cta: 'Book the Discovery Call'
    },
    'month-end-close': {
      headline: 'Close the books on a calendar &mdash; every month.',
      lede: 'You came from our month-end close page. A Certified ProAdvisor reviews how your books close today, what a real published-calendar cadence would look like, and whether a recurring close &mdash; or catch-up first &mdash; is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'monthly-bookkeeping',
      cta: 'Book the Discovery Call'
    },
    'reconciliation': {
      headline: 'Get books that reconcile &mdash; every month.',
      lede: 'You came from our reconciliation services page. A Certified ProAdvisor reviews where your reconciliation stands, what catch-up or cleanup work might be needed, and whether a recurring monthly cadence is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'monthly-bookkeeping',
      cta: 'Book the Discovery Call'
    },

    /* ========================================================================
       QUICKBOOKS CORE
       ===================================================================== */
    'quickbooks-setup': {
      headline: 'Setting up QuickBooks?<br>Let&rsquo;s do it right.',
      lede: 'You came from the QuickBooks setup page. Setup decisions made now affect years of bookkeeping. We&rsquo;ll scope the setup, deliver written fees, and get you started.',
      service: 'qb-setup'
    },
    'quickbooks-migration': {
      headline: 'Migrating QuickBooks?<br>Before the rush.',
      lede: 'You came from the migration hub. Whether moving from Desktop to Online or from another platform &mdash; we&rsquo;ll scope the migration, replace integrations, and reconcile clean.',
      service: 'qb-migration'
    },
    'quickbooks-speak-expert': {
      headline: 'You came from the QuickBooks expert line.',
      lede: 'A Certified ProAdvisor is on the line. Phone preferred for active emergencies &mdash; form preferred for scoping.',
      service: 'qb-help'
    },
'coa-setup': {
      headline: 'Get a chart of accounts your reports can stand on.',
      lede: 'You came from our chart of accounts setup page. A Certified ProAdvisor reviews your industry, how you sell and spend, what reports you need, and whether a new setup or a restructure is the right next step &mdash; written fixed-fee scope within 3 business days.',
      service: 'qb-setup',
      cta: 'Book the Discovery Call'
    },
    /* ========================================================================
       QUICKBOOKS FILE CLEANUP TIERS (distinct from bookkeeping cleanup above)
       ===================================================================== */
    'qb-cleanup': {
      headline: 'QuickBooks file cleanup,<br>scoped properly.',
      lede: 'You came from the QuickBooks cleanup page. We&rsquo;ll diagnose the file, scope the fix in writing, and get the file usable again. Fixed-fee, no hourly billing.',
      service: 'qb-cleanup'
    },
    'qb-cleanup-focused': {
      headline: 'Focused QuickBooks cleanup.',
      lede: 'A single-issue file cleanup &mdash; bank feed repair, reconciliation rebuild, file corruption, or multi-user fix. Diagnostic first, written fixed-fee scope follows.',
      service: 'qb-cleanup'
    },
    'qb-cleanup-standard': {
      headline: 'Standard QuickBooks cleanup.',
      lede: 'A multi-issue file cleanup across reconciliation, undeposited funds, duplicates, and bank rules. Diagnostic first, written fixed-fee scope follows.',
      service: 'qb-cleanup'
    },
    'qb-cleanup-complex': {
      headline: 'Complex QuickBooks rebuild.',
      lede: 'A multi-year file rebuild with data integrity recovery. Diagnostic first; we&rsquo;ll tell you honestly if a clean restart is faster than rebuilding.',
      service: 'qb-cleanup'
    },

    /* ========================================================================
       QUICKBOOKS MIGRATION CLUSTER
       ===================================================================== */
    'qb-migration-d2o': {
      headline: 'Migrating Desktop to Online?<br>Let&rsquo;s scope it properly.',
      lede: 'You came from the Desktop-to-Online migration page. We&rsquo;ll review your Desktop file, tell you what will and won&rsquo;t transfer, and produce a written fixed-fee scope within 3 business days. No pitch &mdash; if staying on Desktop is genuinely right for you, we&rsquo;ll say so.',
      service: 'qb-migration'
    },
    'qb-migration-standard': {
      headline: 'Standard Desktop-to-Online migration.',
      lede: 'Single-entity, reasonably clean Desktop file, standard integrations. Assessment first, written fixed-fee scope within 3 business days.',
      service: 'qb-migration'
    },
    'qb-migration-complex': {
      headline: 'Complex Desktop-to-Online migration.',
      lede: 'Multi-entity, large files, heavy integrations, or full workflow rebuild and team training. Assessment first, written fixed-fee scope follows.',
      service: 'qb-migration'
    },
    'qb-migration-balances': {
      headline: 'Balances wrong after your migration?<br>We&rsquo;ll find the gap.',
      lede: 'You came from the post-conversion balance repair page. A ProAdvisor will compare your converted file against the Desktop baseline, isolate which accounts are off and why, and scope the fix in writing. Wrong balances get prioritized &mdash; diagnostic usually within a day or two.',
      service: 'qb-migration'
    },
    'qb-migration-cleanup': {
      headline: 'Migration left your file a mess?<br>Cleanup starts here.',
      lede: 'You came from the migration cleanup page. We&rsquo;ll diagnose what came across wrong &mdash; balances, lists, AR/AP, integrations, workflows &mdash; and scope the cleanup in writing. We&rsquo;ll also tell you honestly if a fresh re-migration is the better path.',
      service: 'qb-migration'
    },
    'qb-migration-to-qb': {
      headline: 'Migrating to QuickBooks?<br>Arrive with books that tie.',
      lede: 'You came from the &ldquo;other software to QuickBooks&rdquo; migration page. A ProAdvisor will review your current software, recommend how much history to bring, and scope the migration in writing. If staying on your current platform is right for you, we&rsquo;ll say so.',
      service: 'qb-migration'
    },
    'qb-migration-to-qb-standard': {
      headline: 'Standard migration to QuickBooks.',
      lede: 'Single-entity, opening balances plus current-year detail from a clean source file. Source assessment first, written fixed-fee scope follows.',
      service: 'qb-migration'
    },
    'qb-migration-to-qb-complex': {
      headline: 'Complex migration to QuickBooks.',
      lede: 'Multi-year history, multiple entities, inventory, or extensive integrations. Source assessment first, written fixed-fee scope follows.',
      service: 'qb-migration'
    },

    /* ========================================================================
       QUICKBOOKS PRODUCT ADVISORY
       ===================================================================== */
    'qbo-advisory': {
      headline: 'QuickBooks Online advisory.<br>Honest read, no commission.',
      lede: 'You came from the QuickBooks Online hub. A Certified ProAdvisor will review your situation, recommend the right plan tier (or the right alternative product if QBO isn&rsquo;t the call), and scope any setup, migration, or cleanup work in writing &mdash; within 3 business days.',
      service: 'qb-advisory'
    },
    'qbo-plan-selection': {
      headline: 'Which QuickBooks Online plan?<br>Let&rsquo;s sort it.',
      lede: 'You came from the QuickBooks Online hub. A complimentary plan-selection call with a Certified ProAdvisor &mdash; honest read on which tier fits your business, no commission, no upsell incentive.',
      service: 'qb-plan-selection'
    },
    'qbd-advisory': {
      headline: 'QuickBooks Desktop:<br>stay or migrate?',
      lede: 'You came from the QuickBooks Desktop hub. A Certified ProAdvisor will review your Desktop file, your year-version status, your CPA situation, and your integration stack &mdash; then tell you plainly whether staying or migrating is the right call right now, and scope either path in writing within 3 business days.',
      service: 'qb-advisory'
    },
    'qbe-advisory': {
      headline: 'QuickBooks Enterprise:<br>does it actually fit?',
      lede: 'You came from the QuickBooks Enterprise hub. A Certified ProAdvisor will review your operations, user count, inventory complexity, and growth trajectory &mdash; then tell you plainly whether Enterprise is the right product, which industry edition and tier fit, or whether QBO is sufficient or NetSuite is the better next step. Written scope within 3 business days.',
      service: 'qb-advisory'
    },
    'qwp-advisory': {
      headline: 'Free plan-selection call.<br>No commission, no upsell.',
      lede: 'You came from the QuickBooks plan-selection page. A Certified ProAdvisor will walk your specific situation against the full QuickBooks product line in 30 minutes &mdash; concurrent users, inventory needs, industry workflows, CPA preference &mdash; and recommend the right product and tier. We earn nothing from your QuickBooks subscription regardless of which one you pick, so the honest answer might be &ldquo;pick Simple Start, you don&rsquo;t need more.&rdquo;',
      service: 'qb-plan-selection'
    },

    /* ========================================================================
       QUICKBOOKS ERRORS
       ===================================================================== */
    'qb-error': {
      headline: 'QuickBooks throwing an error?<br>Let&rsquo;s diagnose it.',
      lede: 'You came from the QuickBooks error-codes reference. A Certified ProAdvisor will review the error, the surrounding context, and the file itself &mdash; usually within a day &mdash; then scope the fix in writing. Fixed-fee, no hourly billing. If the honest answer is &ldquo;you can fix this yourself in five minutes,&rdquo; that&rsquo;s exactly what you&rsquo;ll hear.',
      service: 'qb-cleanup'
    },
    'qb-error-h202': {
      headline: 'QuickBooks Error H202.<br>Let&rsquo;s resolve it.',
      lede: 'You came from the H202 reference page. A Certified ProAdvisor will diagnose the actual root cause &mdash; past the surface configuration steps you may have already tried &mdash; and scope the fix in writing. Fixed-fee, typically $1,200&ndash;$3,000 for focused H202 resolution. Usually scheduled within a day.',
      service: 'qb-cleanup'
    },
    'qb-error-6000': {
      headline: 'QuickBooks 6000-series error.<br>Let&rsquo;s diagnose it.',
      lede: 'You came from the 6000-series reference. A Certified ProAdvisor identifies whether you&rsquo;re dealing with a file-access issue (often self-fixable), a multi-user conflict, or actual file damage that needs repair before continued use worsens the corruption. 30-minute diagnostic, usually within a day. Fixed-fee scope after the call &mdash; typically $1,200&ndash;$3,000 for focused repair, $3,000&ndash;$7,500 for broader cleanup.',
      service: 'qb-cleanup'
    },
    'qb-unrecoverable': {
      headline: 'QuickBooks unrecoverable error.<br>Repair before damage becomes permanent.',
      lede: 'You came from the unrecoverable error reference. A Certified ProAdvisor assesses the integrity state of the file, attempts professional repair beyond Tool Hub, and &mdash; when direct repair isn&rsquo;t viable &mdash; extracts your data into a clean file. Fixed-fee scope before any work begins. Typically $2,500&ndash;$5,000, 3&ndash;7 business days. Severe cases requiring full rebuild-from-extract scope $5,000&ndash;$10,000+.',
      service: 'qb-cleanup'
    },
    'qb-error-ps038': {
      headline: 'QuickBooks Error PS038.<br>Paychecks stuck? Let&rsquo;s clear them.',
      lede: 'You came from the PS038 reference. A Certified Payroll ProAdvisor diagnoses whether the issue is stuck paychecks, subscription validation, or deeper payroll-component damage &mdash; and clears the queue before your payroll deadline. Same-day response for deadline-urgent cases. Fixed-fee scope, typically $800&ndash;$2,500 for focused PS038 resolution.',
      service: 'qb-cleanup'
    },
    'qb-error-3371': {
      headline: 'QuickBooks Error 3371.<br>Get the durable fix.',
      lede: 'You came from the 3371 reference. A Certified ProAdvisor diagnoses why the error keeps coming back &mdash; antivirus interference, user profile damage, registry corruption, or system-level cause &mdash; and applies a fix that holds across restarts and Windows updates. 30-minute diagnostic, usually within a day. Fixed-fee scope, typically $500&ndash;$1,500 &mdash; among our most well-bounded engagements.',
      service: 'qb-cleanup'
    },
    'qb-error-15240': {
      headline: 'QuickBooks Error 15240.<br>Get the deeper diagnostic.',
      lede: 'You came from the 15240 reference. A Certified ProAdvisor diagnoses the component-level cause when standard fixes didn&rsquo;t resolve it &mdash; corrupted Internet Explorer installation, .NET Framework issues, or specific QuickBooks installation damage. 30-minute diagnostic, usually within a day. Fixed-fee scope, typically $500&ndash;$1,500.',
      service: 'qb-cleanup'
    },
    'qb-error-c-series': {
      headline: 'QuickBooks C-series error.<br>Catch it before it progresses.',
      lede: 'You came from the C-series reference. A Certified ProAdvisor diagnoses the specific corruption pattern and applies repair &mdash; typically in place on the existing file at this stage, before damage progresses to unrecoverable. 30-minute diagnostic, usually within a day. Fixed-fee scope, typically $2,500&ndash;$5,000 for focused repair; $5,000&ndash;$10,000+ for full rebuild-from-extract.',
      service: 'qb-cleanup'
    },

    /* ========================================================================
       QUICKBOOKS PAYROLL
       ===================================================================== */
    'qb-payroll-vs-gusto': {
      headline: 'QuickBooks Payroll or Gusto?<br>Get the honest comparison.',
      lede: 'You came from the QuickBooks Payroll vs Gusto comparison. A Certified Payroll ProAdvisor walks your team size, employee/contractor mix, multi-state needs, HR requirements, and existing accounting platform against both providers &mdash; and recommends the one that genuinely fits. If neither is right, we&rsquo;ll route you to ADP, Paychex, Rippling, or a specialized industry provider instead. Complimentary 30-minute call, no commission on any provider.',
      service: 'qb-plan-selection'
    },
    'qb-payroll-setup': {
      headline: 'QuickBooks Payroll setup.<br>Done right from day one.',
      lede: 'You came from the QuickBooks Payroll setup page. A Certified Payroll ProAdvisor reviews your team size, states, benefits complexity, timing, and existing accounting setup &mdash; then scopes the setup engagement in writing. Fixed-fee, no hourly billing. Standard small-business setup typically $1,500&ndash;$3,000; multi-state or mid-year $3,000&ndash;$6,000; complex multi-entity $6,000+. If QuickBooks Payroll isn&rsquo;t actually the right provider for your situation, we&rsquo;ll say so plainly.',
      service: 'qb-payroll'
    },
    'qb-payroll-multi-state': {
      headline: 'Multi-state payroll in QuickBooks.<br>Done right, coordinated with your CPA.',
      lede: 'You came from the multi-state payroll page. A Certified Payroll ProAdvisor reviews your current state mix, employee locations, growth trajectory, and existing QuickBooks Payroll setup &mdash; then scopes either a one-time multi-state engagement or an ongoing monthly retainer. Setup engagements typically $3,000&ndash;$10,000 depending on state count and complexity; ongoing monthly retainer $750&ndash;$2,500/month. We handle operations and QuickBooks Payroll configuration; your CPA handles tax-opinion matters.',
      service: 'qb-payroll'
    },
    'qb-payroll-year-end': {
      headline: 'Year-end payroll in QuickBooks.<br>Done right before the deadlines.',
      lede: 'You came from the year-end payroll page. A Certified Payroll ProAdvisor reviews your employee count, year-end adjustments needed, multi-state factor, and prior-year status &mdash; then scopes the year-end engagement in writing. Fixed-fee, deadline-driven. Standard year-end typically $1,500&ndash;$3,500; mid-tier with significant adjustments $3,500&ndash;$7,500; complex including W-2c cleanup $7,500+. We handle payroll-side year-end; coordinated with your CPA on business income tax filing.',
      service: 'qb-payroll'
    },
    'qb-consulting': {
      headline: 'QuickBooks consulting.<br>A ProAdvisor embedded in your workflow.',
      lede: 'You came from the QuickBooks consulting page. A Certified ProAdvisor reviews your current QuickBooks product, integration stack, business complexity, and the specific problems you&rsquo;re seeing &mdash; then scopes a consulting retainer matched to your actual needs. Initial configuration audit at engagement start. Monthly retainer typically $500&ndash;$1,500/month for QBO; $1,500&ndash;$3,500/month for advanced or Enterprise. No hourly billing outside the retainer.',
      service: 'qb-consulting'
    },

    /* ========================================================================
       OPERATIONS (payroll, sales tax)
       ===================================================================== */
    'payroll': {
      headline: 'Payroll, run right.<br>Every cycle.',
      lede: 'You came from the payroll management page. We&rsquo;ll review your current setup, scope the right tier, and integrate cleanly with QuickBooks bookkeeping.',
      service: 'payroll'
    },
    'payroll-essentials': {
      headline: 'Scope an Essentials payroll engagement.',
      lede: 'You came from the Essentials tier ($150&ndash;$300/mo) &mdash; simple single-state payroll, under 10 employees, standard benefits. A Certified Payroll ProAdvisor confirms fit and delivers a written fixed-fee scope within 3 business days.',
      service: 'payroll',
      cta: 'Book a Payroll Review'
    },
    'payroll-standard': {
      headline: 'Scope a Standard payroll engagement.',
      lede: 'You came from the Standard tier ($300&ndash;$600/mo) &mdash; multi-state (2&ndash;5 states), 10&ndash;50 employees, contractors, benefits deductions. A Certified Payroll ProAdvisor scopes the engagement in writing, including multi-state compliance and state agency notice response.',
      service: 'payroll',
      cta: 'Book a Payroll Review'
    },
    'payroll-complex': {
      headline: 'Scope a Complex payroll engagement.',
      lede: 'You came from the Complex tier ($600&ndash;$800+/mo) &mdash; 50+ employees, 6+ states, multi-entity, equity compensation, or union/prevailing-wage. A Certified Payroll ProAdvisor scopes the engagement in writing, including multi-entity coordination and year-end audit support.',
      service: 'payroll',
      cta: 'Book a Payroll Review'
    },
'sales-tax': {
      headline: 'Multi-state sales tax,<br>handled cleanly.',
      lede: 'You came from the sales tax compliance page. We&rsquo;ll review your nexus exposure, map where you stand, and scope the ongoing compliance work.',
      service: 'sales-tax'
    },
    'sales-tax-nexus-review': {
      headline: 'Nexus review starts here.',
      lede: 'A nexus review tells you where you have sales tax exposure today. We&rsquo;ll deliver a state-by-state map within 1&ndash;2 weeks of the diagnostic call.',
      service: 'sales-tax'
    },
    'sales-tax-simple': {
      headline: 'Scope a Simple sales tax engagement.',
      lede: 'You came from the Simple tier ($250&ndash;$500/mo) &mdash; 1&ndash;3 state compliance, single revenue stream, no marketplace complexity. A Certified ProAdvisor confirms fit and delivers a written fixed-fee scope within 3 business days.',
      service: 'sales-tax',
      cta: 'Book a Nexus Review'
    },
    'sales-tax-standard': {
      headline: 'Scope a Standard sales tax engagement.',
      lede: 'You came from the Standard tier ($500&ndash;$1,000/mo) &mdash; 4&ndash;15 state compliance, multi-channel e-commerce, marketplace plus direct sales, or growing SaaS. A Certified ProAdvisor scopes the engagement in writing, including platform integration and quarterly nexus review.',
      service: 'sales-tax',
      cta: 'Book a Nexus Review'
    },
    'sales-tax-complex': {
      headline: 'Scope a Complex sales tax engagement.',
      lede: 'You came from the Complex tier ($1,000&ndash;$1,500+/mo) &mdash; 15+ states, multi-stream businesses, full SaaS taxability mapping, B2B exemption certificate work, or industry-specific compliance. A Certified ProAdvisor scopes the engagement in writing, including FBA physical-nexus management.',
      service: 'sales-tax',
      cta: 'Book a Nexus Review'
    },

    /* ========================================================================
       ADVISORY SILO
       ===================================================================== */
    'advisory': {
      headline: 'Turn your numbers into decisions.',
      lede: 'You came from our advisory work. A Certified ProAdvisor reviews where you are, the decisions in front of you, and whether advisory &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days, built on books that are already correct.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'budgeting': {
      headline: 'Get a plan you&rsquo;ll actually use.',
      lede: 'You came from our budgeting &amp; forecasting work. A Certified ProAdvisor reviews where you are, the decisions ahead, and whether a driver-based budget &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'performance-review': {
      headline: 'Make the numbers turn into action.',
      lede: 'You came from our business performance review work. A Certified ProAdvisor reviews what decisions you want a recurring read to support, what cadence fits, and whether a review &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'cash-flow': {
      headline: 'Know your cash before it surprises you.',
      lede: 'You came from our cash flow management work. A Certified ProAdvisor reviews your cash cycle, the decisions ahead, and whether a rolling 13-week forecast &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'financial-strategy': {
      headline: 'Make the big call on real numbers.',
      lede: 'You came from our financial strategy work. A Certified ProAdvisor reviews the decision in front of you, what your books can already tell us, and whether a strategy project &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'kpi-reporting': {
      headline: 'See the few numbers that actually matter.',
      lede: 'You came from our KPI &amp; management reporting work. A Certified ProAdvisor reviews the decisions you make, the numbers you&rsquo;re missing, and whether KPI reporting &mdash; or accurate books first &mdash; is the right next step. Written fixed-fee scope within 3 business days.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'fractional-cfo': {
      headline: 'Apply for a fractional CFO engagement.',
      lede: 'You came from the fractional CFO page. Engagements are by application and limited per quarter. The diagnostic call evaluates fit, scope, and timing.',
      service: 'fractional-cfo'
    },
    'fractional-cfo-strategic': {
      headline: 'Apply for a Strategic CFO engagement.',
      lede: 'You came from the Strategic tier ($3,000&ndash;$5,000/mo). Send a brief application &mdash; business stage, revenue, current finance function, and what you&rsquo;re looking for. A senior operator assesses fit on a 45-minute diagnostic, and we produce a written engagement scope within 5 business days. By application; limited engagements per quarter.',
      service: 'fractional-cfo',
      cta: 'Submit the Application'
    },
    'fractional-cfo-active': {
      headline: 'Apply for an Active CFO engagement.',
      lede: 'You came from the Active tier ($5,000&ndash;$7,000/mo) &mdash; our most common engagement profile. Send a brief application and a senior operator assesses fit on a 45-minute diagnostic. Written engagement scope within 5 business days: tier, deliverables, cadence, retainer, named CFO operator. By application; limited engagements per quarter.',
      service: 'fractional-cfo',
      cta: 'Submit the Application'
    },
    'fractional-cfo-intensive': {
      headline: 'Apply for an Intensive CFO engagement.',
      lede: 'You came from the Intensive tier ($7,000&ndash;$8,000+/mo) &mdash; active fundraising, M&amp;A, transformation, or high-complexity multi-entity operations. Send a brief application and a senior operator assesses fit and timing on a 45-minute diagnostic. Written engagement scope within 5 business days. By application; limited engagements per quarter.',
      service: 'fractional-cfo',
      cta: 'Submit the Application'
    },
    'job-costing': {
      headline: 'Find out which jobs actually make money.',
      lede: 'You came from our job costing page. A Certified ProAdvisor reviews your job types, billing model, current setup, and whether WIP, AIA billing, or certified payroll apply &mdash; then scopes the right next step in writing within 3 business days. Setup inside QuickBooks setup; ongoing inside monthly bookkeeping.',
      service: 'qb-setup',
      cta: 'Book the Discovery Call'
    },

    /* ========================================================================
       COMPARISON / COMPETITOR MIGRATION
       ===================================================================== */
    'bench-migration': {
      headline: 'Migrating from Bench?<br>We handle the full path.',
      lede: 'You came from the TechBrot vs Bench page. We handle Bench data export, migration into QuickBooks, cleanup of gaps, and the ongoing bookkeeping after.',
      service: 'qb-migration'
    },
    'bench-alternative': {
      headline: 'Looking for a Bench alternative?<br>Let&rsquo;s talk.',
      lede: 'You came from the TechBrot vs Bench page. We&rsquo;ll review what you need and produce a written fixed-fee scope &mdash; including the migration path if you&rsquo;re still on Bench.',
      service: 'monthly-bookkeeping'
    },
    'bookkeeping-vs-accounting': {
      headline: 'Not sure if you need a bookkeeper<br>or an accountant?',
      lede: 'You came from our comparison page. Most U.S. small businesses need both. We&rsquo;ll review what you need on the bookkeeping side &mdash; and recommend a CPA if that&rsquo;s what you actually need.',
      service: 'not-sure'
    },
    'comparison': {
      headline: 'Comparing options?<br>Let&rsquo;s talk through it.',
      lede: 'You came from one of our comparison pages. We&rsquo;ll give you the same honest read in conversation &mdash; and tell you when TechBrot isn&rsquo;t the right fit.',
      service: 'not-sure'
    },
    'comparison-question': {
      headline: 'Comparison question?',
      lede: 'Tell us what you&rsquo;re comparing TechBrot against. We&rsquo;ll give you the same honest read in conversation that our comparison pages do.',
      service: 'not-sure'
    },
    'comparison-request': {
      headline: 'Want us to add a comparison?',
      lede: 'Tell us what you&rsquo;d like to see compared. We prioritize based on how often the question shows up in discovery calls.',
      service: null
    },
    'qb-to-xero': {
      headline: 'Considering Xero?<br>Get the honest read first.',
      lede: 'You came from the QuickBooks-to-Xero page. As an independent Certified ProAdvisor firm with no commercial relationship with Xero, we&rsquo;ll assess your situation honestly &mdash; recommend the call that genuinely fits, and run the migration cleanly if Xero is the right answer. If staying on QuickBooks is right, we&rsquo;ll say so.',
      service: 'qb-migration'
    },
    'qb-to-xero-standard': {
      headline: 'Standard QuickBooks-to-Xero migration.',
      lede: 'Single-entity, standard integrations, opening balances plus current-year detail. Honest fit assessment first, written fixed-fee scope follows if switching is right.',
      service: 'qb-migration'
    },
    'qb-to-xero-complex': {
      headline: 'Complex QuickBooks-to-Xero migration.',
      lede: 'Multi-currency, multiple entities, inventory, or extensive integration rebuild. Honest fit assessment first, written fixed-fee scope follows if switching is right.',
      service: 'qb-migration'
    },

    /* ========================================================================
       PARTNERS
       ===================================================================== */
    'partner-question': {
      headline: 'Question about partnering with TechBrot?',
      lede: 'For full partner applications, the <a href="/partners/">partner page</a> is the right path. For specific questions before applying, this form gets routed to the network team.',
      service: null
    },

    /* ========================================================================
       FAQ HUB INTENTS
       ===================================================================== */
    'accounting-faq': {
      headline: 'You came from the Accounting FAQ.',
      lede: 'You had a question the FAQ started to answer &mdash; let&rsquo;s finish it on a call. A Certified ProAdvisor reviews your situation, recommends the right engagement, and delivers a written fixed-fee scope within 3 business days.',
      service: 'not-sure',
      cta: 'Book the Discovery Call'
    },
    'bookkeeping-faq': {
      headline: 'You came from the Bookkeeping FAQ.',
      lede: 'Whether it&rsquo;s monthly bookkeeping, cleanup, or catch-up &mdash; we&rsquo;ll scope it properly. A Certified ProAdvisor reviews where your books stand and delivers a written fixed-fee scope within 3 business days.',
      service: 'monthly-bookkeeping',
      cta: 'Book the Discovery Call'
    },
    'advisory-faq': {
      headline: 'You came from the Advisory FAQ.',
      lede: 'Fractional CFO and advisory work is by application &mdash; we&rsquo;ll assess fit on a call. A Certified ProAdvisor reviews your goals, current financials, and whether advisory is the right next step.',
      service: 'fractional-cfo',
      cta: 'Book the Discovery Call'
    },
    'industries-faq': {
      headline: 'You came from the Industries FAQ.',
      lede: 'Industry-specific accounting starts with understanding your business. A Certified ProAdvisor identifies your industry fit, assesses where your books stand, and scopes the right engagement &mdash; written, fixed-fee, within 3 business days.',
      service: 'not-sure',
      cta: 'Book the Discovery Call'
    },
    'partners-faq': {
      headline: 'You came from the Operator Network FAQ.',
      lede: 'Interested in joining the vetted operator network? Tell us about your practice &mdash; credentials, industry depth, geographic coverage, and current client mix. We&rsquo;ll respond within 3 business days with next steps.',
      service: 'not-sure',
      cta: 'Apply to the Network'
    },
    'qb-payroll-faq': {
      headline: 'You came from the QuickBooks Payroll FAQ.',
      lede: 'Setup, multi-state, year-end, or a payroll problem &mdash; a Certified Payroll ProAdvisor reviews your situation and scopes the right engagement in writing. Fixed-fee, no hourly billing.',
      service: 'payroll',
      cta: 'Book the Discovery Call'
    },
    'find-accountant-faq': {
      headline: 'You came from the Find-an-Accountant FAQ.',
      lede: 'Let&rsquo;s match you to the right ProAdvisor. A 30-minute discovery call identifies your industry, state-specific needs, and the right engagement type &mdash; with a written fixed-fee scope within 3 business days. If we&rsquo;re not the right fit, we&rsquo;ll say so.',
      service: 'not-sure',
      cta: 'Book the Discovery Call'
    }

  };

/* ----------------------------------------------------------------------------
   LOOKUPS — display names for composable enrichment.
   Add a state/city/industry here once; every page that passes it as a URL
   param (?state=, ?city=, ?industry=) gets a correctly-phrased message.
   Keys are URL-slug form; values are human display form.
   ---------------------------------------------------------------------------- */
window.TB_LOOKUPS = {

  state: {
    'new-york': 'New York',
    'california': 'California',
    'texas': 'Texas',
    'florida': 'Florida',
    'illinois': 'Illinois'
    /* add states here as they launch — engine handles the rest */
  },

  /* Cities only need entries for pages that exist; unknown slugs fall back to
     a title-cased version of the slug automatically (see engine). */
  city: {
    'new-york-city': 'New York City',
    'brooklyn': 'Brooklyn',
    'queens': 'Queens',
    'bronx': 'the Bronx',
    'staten-island': 'Staten Island',
    'buffalo': 'Buffalo',
    'rochester': 'Rochester',
    'syracuse': 'Syracuse',
    'albany': 'Albany',
    'yonkers': 'Yonkers'
  },

  industry: {
    'construction': 'construction',
    'real-estate': 'real estate',
    'legal': 'law firm',
    'restaurant': 'restaurant',
    'healthcare': 'healthcare',
    'nonprofit': 'nonprofit',
    'ecommerce': 'e-commerce',
    'saas': 'SaaS',
    'agency': 'agency',
    'manufacturing': 'manufacturing',
    'professional-services': 'professional services',
    'trucking': 'trucking',
    'dental': 'dental practice',
    'home-services': 'home services'
  }
};