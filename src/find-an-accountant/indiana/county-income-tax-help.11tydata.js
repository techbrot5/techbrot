/* /find-an-accountant/indiana/county-income-tax-help/ — t-money IN SERVICE child, the genuinely
 * Indiana-DISTINCT tax service: the 92-county Local Income Tax (LIT) withholding angle. No same-named
 * exemplar exists; this page mirrors the STRUCTURE of the DE gross-receipts-tax-help child
 * (delaware/gross-receipts-tax-help.*) and writes the IN-specific equivalent. JSON front-matter lives
 * in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service, FAQPage). FAQPage mainEntity is built from the same `faq` array the visible
 * faq renders — single source of truth.
 *
 * IN FIGURES / MECHANICS USED (IN-FACTS.md — the ONLY source): all 92 counties levy a county LIT on
 * top of the flat state income tax; EACH COUNTY SETS ITS OWN RATE — NEVER quote a specific county %
 * (qualitative + link the DOR county-rate page). Verified mechanics: rate determined by county of
 * residence on January 1 (or principal Indiana work county on Jan 1 if the taxpayer resides out of
 * state); SAME rate for residents and nonresidents; Form WH-4 establishes county of residence /
 * principal work county for withholding (new WH-4 if the employee moves or changes work county);
 * 30-day safe harbor (IC 6-3-2-27.5) exempts a nonresident working 30 days or fewer in Indiana.
 * County Income Tax (withholding) Help priced from $300.
 *
 * HONESTY: TechBrot CONFIGURES and MAINTAINS county-LIT withholding in QuickBooks Payroll, reconciles
 * withheld LIT to payroll, and prepares CPA-ready figures — it does NOT file the Indiana withholding
 * or income-tax return and does NOT represent clients before the Department of Revenue; the business
 * or its CPA files. No invented reviews/stats/clients/outcomes; no AggregateRating. No founder/personal
 * name in visible content (firm-level review byline). provider = #organization; areaServed = State
 * Indiana; the WebPage carries reviewedBy #david-westgate. NO PostalAddress/LocalBusiness. Authority
 * links use rel="noopener nofollow". */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "Indiana layers a <strong>county local income tax (LIT)</strong> on top of its flat state income tax, and <strong>all 92 counties levy one</strong> &mdash; each at its own rate, which is why payroll is where Indiana gets genuinely tricky. The rate that applies to an employee is set by their <strong>county of residence on January 1</strong> (or, if they live out of state, their principal Indiana work county on that date), and the <strong>same rate applies whether they&rsquo;re a resident or a nonresident</strong>. <strong>Form WH-4</strong> is how each employee establishes the county QuickBooks should withhold for, and a new WH-4 is required when they move or change work county during the year. A <strong>30-day safe harbor</strong> exempts a nonresident who works 30 days or fewer in Indiana. The bookkeeping job is specific: QuickBooks Payroll has to carry the right county rate for every employee &mdash; pulled from the current <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Department of Revenue county-rate list</a>, never guessed &mdash; and keep multi-county and remote workforces straight. TechBrot configures and maintains that withholding in your own <a href=\"/quickbooks/online/\">QuickBooks</a> from $300; we don&rsquo;t file the withholding return or represent you &mdash; you or your CPA file with the DOR. All 92 counties.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana county income tax, in five questions.)
  aiSummary: [
    { q: "Does Indiana have a county income tax?", a: "<strong>Yes &mdash; all 92 Indiana counties levy a local income tax (LIT)</strong> on top of the flat state income tax, each at its own rate. It&rsquo;s withheld through payroll, so every Indiana employer has to carry the correct county rate for each employee. We never quote a specific county rate; the current per-county figures live on the DOR list." },
    { q: "Which county&rsquo;s rate applies to an employee?", a: "The rate is set by the employee&rsquo;s <strong>county of residence on January 1</strong>. If they live outside Indiana but their principal place of work is an Indiana county on that date, that work county&rsquo;s rate applies instead. The <strong>same rate applies to residents and nonresidents</strong> &mdash; there&rsquo;s no separate nonresident rate." },
    { q: "What is Form WH-4 and when is a new one needed?", a: "<strong>Form WH-4</strong> is how an employee tells you their county of residence and principal work county, which drives county-LIT withholding in QuickBooks. A <strong>new WH-4 is required</strong> when an employee moves or changes work county during the year, so the withholding follows them." },
    { q: "What is the 30-day safe harbor?", a: "Compensation of a <strong>nonresident employee who works 30 days or fewer in Indiana</strong> during the year is exempt from Indiana county LIT (IC 6-3-2-27.5). We flag short-term nonresident workers so withholding isn&rsquo;t applied where the safe harbor removes it." },
    { q: "Does TechBrot file my county-LIT return?", a: "<strong>No.</strong> We configure and maintain the county-LIT withholding in QuickBooks Payroll, reconcile what was withheld to payroll, and prepare CPA-ready figures. <strong>You or your CPA file the withholding return with the Department of Revenue.</strong> We do not file Indiana returns or represent clients before the DOR." },
  ],

  // WHY IT TRIPS BUSINESSES UP — body prose + three reasons as grid-3 lift cards.
  // (H2: Why county income tax trips up so many Indiana employers)
  whyBody: [
    "Indiana&rsquo;s state income tax is famously simple &mdash; one flat rate &mdash; but the <strong>county layer is where employers slip</strong>, for three reasons. First, <strong>every one of the 92 counties sets its own LIT rate</strong>, so an employer with staff living in different counties is running several rates through one payroll, and using last year&rsquo;s figure or the wrong county quietly under- or over-withholds all year. Second, the rate is locked to an employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; not where they work, not where the business sits &mdash; which is counter-intuitive and easy to set up backwards. Third, <strong>nonresidents and mobile workers</strong> add wrinkles: the same county rate applies to them, a principal-work-county rule can apply if they live out of state, and a 30-day safe harbor removes withholding for short Indiana stints.",
    "Because the rate follows the worker&rsquo;s residence and is captured on Form WH-4, the job isn&rsquo;t a one-time setting &mdash; it&rsquo;s keeping each employee&rsquo;s county current as people move and change work locations, and pulling the right rate from the Department of Revenue list every time.",
    "None of this is a reason to fear hiring across Indiana &mdash; it&rsquo;s a reason to have county LIT set up properly in payroll. When QuickBooks Payroll carries the correct county rate for each employee and updates it as WH-4s change, the withholding return reconciles instead of triggering a notice.",
  ],
  whyCards: [
    { signal: "92 counties, 92 rates", title: "Every county sets its own.", body: "All 92 Indiana counties levy a county LIT, each at its own rate, so a single employer can be withholding several different county rates at once. Using a stale figure or the wrong county is the most common Indiana payroll error. The fix is a per-employee county-rate mapping in QuickBooks Payroll, pulled from the current DOR list rather than guessed." },
    { signal: "Residence on January 1", title: "Where they lived, not where they work.", body: "The county rate is set by an employee&rsquo;s county of residence on January 1 &mdash; or their principal Indiana work county if they live out of state &mdash; captured on Form WH-4. It&rsquo;s easy to set up backwards. The fix is reading the WH-4 correctly, and requiring a new one when an employee moves or changes work county mid-year." },
    { signal: "Nonresidents &amp; safe harbor", title: "Same rate, with a 30-day exemption.", body: "Nonresidents pay the same county rate as residents &mdash; there&rsquo;s no separate nonresident rate &mdash; but a nonresident who works 30 days or fewer in Indiana is exempt under the 30-day safe harbor. The fix is tracking residency and Indiana work days so withholding is applied where it&rsquo;s due and skipped where the safe harbor removes it." },
  ],

  // SCOPE — honest do/don't split (grid-2; checklist inside each col).
  // (H2: How we help with Indiana county income tax.)
  scopeDo: [
    "Each employee&rsquo;s county of residence / principal work county captured from Form WH-4",
    "Correct county LIT rate mapped per employee in QuickBooks Payroll (from the current DOR list)",
    "Withholding updated when an employee moves or changes work county (new WH-4)",
    "Multi-county and remote-workforce withholding configured",
    "30-day safe-harbor situations flagged for short-term nonresident workers",
    "Monthly reconciliation of withheld county LIT to payroll, with CPA-ready figures for the return",
  ],
  scopeDont: [
    "Filing the Indiana withholding return (WH-1) or annual reconciliation (WH-3) with the DOR",
    "Filing Indiana or federal income-tax returns",
    "Determining an employee&rsquo;s personal tax residency (employee/their preparer)",
    "Representation before the Department of Revenue",
    "Formal tax opinions &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "Payroll software can withhold a rate; it can&rsquo;t tell you that a new hire&rsquo;s WH-4 lists a different county than last year, that an employee who moved in March needs a fresh WH-4, or that a contractor in for two weeks falls under the 30-day safe harbor. That judgment &mdash; matching each worker&rsquo;s real residency to the right county rate &mdash; is what turns county LIT from a recurring notice risk into a non-issue.",
    "Once each employee&rsquo;s county rate is correct and updates as WH-4s change, the question shifts from &ldquo;will the withholding return reconcile?&rdquo; to &ldquo;what do the numbers tell me to do next?&rdquo; That&rsquo;s where clean payroll books become real decisions &mdash; the true loaded cost of hiring across county lines, and where to base or place a mobile Indiana workforce. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, answer-first, Indiana-specific. visible faq = FAQPage schema (same array).
  // 1 call-intent answer carries the phone (cost question). (H2: Indiana county income tax questions.)
  faq: [
    { q: "Does Indiana have a county income tax, and who has to withhold it?", a: "Yes. All 92 Indiana counties levy a local income tax (LIT) on top of the flat state income tax, each at its own rate, and Indiana employers withhold it through payroll. Every employee&rsquo;s wages are subject to their applicable county rate, so any business with Indiana employees has to carry the correct county rate for each of them in QuickBooks Payroll. We configure that; we never quote a specific county rate &mdash; the current per-county figures come from the Department of Revenue&rsquo;s rate list." },
    { q: "Which county&rsquo;s rate applies to each employee?", a: "The rate is determined by the employee&rsquo;s county of residence on January 1 of the year. If the employee lives outside Indiana but their principal place of work or business is an Indiana county on that date, that work county&rsquo;s rate applies instead. The same rate applies to residents and nonresidents &mdash; there is no separate nonresident rate &mdash; so the whole question is getting each employee&rsquo;s county right, which is exactly what Form WH-4 establishes." },
    { q: "What is Form WH-4 and when does an employee file a new one?", a: "Form WH-4 is the Indiana withholding exemption and county-status certificate &mdash; it&rsquo;s how an employee tells you their county of residence and principal work county, which drives county-LIT withholding in QuickBooks. A new WH-4 is required whenever an employee moves to a different county or changes their principal work county during the year, so the withholding follows their actual situation rather than going stale." },
    { q: "How much does Indiana county income tax help cost?", a: "It starts at <strong>$300</strong> &mdash; a one-time setup of per-employee county-LIT withholding in QuickBooks Payroll plus ongoing monthly support &mdash; fixed-fee against a written scope and priced after a free discovery call. Final pricing depends on headcount, how many counties your workforce spans, and whether your payroll needs cleanup first. Book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "What is the 30-day safe harbor for nonresident workers?", a: "Under Indiana law (IC 6-3-2-27.5), the compensation of a nonresident employee who works 30 days or fewer in Indiana during the year is exempt from Indiana county LIT. It matters for mobile and project-based workers who pass through Indiana briefly. We flag short-term nonresident workers so withholding isn&rsquo;t applied where the safe harbor removes it &mdash; and is applied correctly once someone crosses the threshold." },
    { q: "Can you handle a workforce spread across multiple Indiana counties or working remotely?", a: "Yes &mdash; that&rsquo;s the situation county LIT is hardest in, and where most errors hide. We set up QuickBooks Payroll so each employee carries the county rate tied to their WH-4 county of residence, keep remote and multi-county staff straight, update withholding as people move, and reconcile the withheld county LIT to payroll each period. The result is a withholding return that reconciles instead of drawing a notice." },
    { q: "Do you file my county withholding return?", a: "No. We configure and maintain the county-LIT withholding in QuickBooks Payroll, reconcile what was withheld to payroll, and prepare CPA-ready figures. The Indiana withholding returns (WH-1 and the WH-3 annual reconciliation) are filed with the Department of Revenue by you or your CPA. We make sure the numbers are right and filing-ready; we don&rsquo;t file the return or represent you before the Department of Revenue." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; serving all 92 Indiana counties remotely" },
    { label: "Standards", detail: "Verified vs the Indiana DOR (Bulletin #32, Departmental Notice #1) &middot; reviewed periodically &middot; no specific county rate quoted &middot; no fabricated data" },
    { label: "Out of scope", detail: "No withholding-return or income-tax filing &middot; no representation before the Department of Revenue &middot; coordinated with your CPA/EA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — sibling IN pages (around the engagement).
  related: [
    { href: "/find-an-accountant/indiana/sales-tax-help/", title: "Indiana sales tax help", body: "The flat 7% statewide sales tax with no local add-ons, plus use tax and economic nexus &mdash; tracked in QuickBooks and reconciled to the books. Filed by you or your CPA." },
    { href: "/find-an-accountant/indiana/quickbooks-setup/", title: "Indiana QuickBooks setup", body: "County-LIT payroll withholding and the 7% sales tax configured from day one &mdash; the right edition, an industry chart of accounts, and clean books from the start." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/county-income-tax-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana County Income Tax Help for Businesses","description":"Indiana county local-income-tax (LIT) help for employers — all 92 counties levy a LIT at their own rates, set by county of residence on January 1 and captured on Form WH-4, with a 30-day nonresident safe harbor. Per-employee county withholding configured in QuickBooks Payroll by a named Certified ProAdvisor. Never quotes a specific county rate; does not file the Indiana return; coordinates with the client's CPA.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-county-income-tax-help-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-countytax-summary","#in-svc-countytax-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"County Income Tax Help"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana County Income Tax (LIT) Withholding Support","serviceType":"County local income tax withholding bookkeeping support","description":"Per-employee Indiana county local-income-tax (LIT) withholding configured and maintained in QuickBooks Payroll — county of residence captured from Form WH-4, the correct county rate mapped from the current Department of Revenue list, multi-county and remote workforces handled, the 30-day nonresident safe harbor flagged, and withheld LIT reconciled to payroll. TechBrot prepares CPA-ready figures; the withholding return is filed with the Department of Revenue by the client or CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns and does not represent clients before the Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","name":"Indiana employers withholding county local income tax"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"300","description":"County-LIT withholding setup plus monthly support from $300 against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
