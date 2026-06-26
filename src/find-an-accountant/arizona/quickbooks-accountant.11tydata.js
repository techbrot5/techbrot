/* /find-an-accountant/arizona/quickbooks-accountant/ — AZ SERVICE child (the "money umbrella"
 * QuickBooks-accountant service page), t-money. Mirrors the same-named Georgia child
 * (georgia/quickbooks-accountant.*) for structure and routing, and the areaServed-only / no-address
 * framing, with Arizona content per _build/strategy/AZ-FACTS.md. JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph (WebPage,
 * BreadcrumbList, Service with OfferCatalog, FAQPage).
 *
 * AZ LOCALIZATION (the deliberate AZ differentiation — do NOT import GA's local-option-sales-tax/net-worth-tax hook):
 * Georgia's county LOCAL-OPTION SALES TAX (LOST/SPLOST/ELOST/TSPLOST, 4% state + ~7–8% combined) and its
 * corporate NET WORTH TAX → Arizona has NO conventional sales tax and NO net worth/franchise tax. Arizona's
 * defining tax is the TRANSACTION PRIVILEGE TAX (TPT) — NOT a sales tax: a tax on the SELLER'S privilege of
 * doing business, legally owed by the vendor, levied BY BUSINESS CLASSIFICATION (retail, contracting,
 * restaurant, commercial lease, etc.), with a 5.6% STATE rate plus county and city layers (most city TPT
 * reported through ADOR's centralized AZTaxes.gov portal; each city sets its own rate). The famous AZ
 * construction quirk is PRIME CONTRACTING: the TPT base is 65% of gross receipts (the other 35% a materials
 * deduction), the prime contractor — not the subs — owes it, and MRRA work is taxed differently. Georgia's
 * flat 4.99% IIT → Arizona FLAT 2.5% income tax (since 2023; 2.5% for 2026 — the LOWEST flat income-tax rate
 * of any U.S. state). Georgia's flat 4.99% corporate + net worth tax → Arizona FLAT 4.9% corporate income
 * tax (no net worth/franchise tax); PTE election at 2.5% (SALT-cap workaround). Georgia's no-reciprocity
 * state-only withholding → Arizona NO local/city income tax (cities levy TPT, not income tax) → STATE-ONLY
 * withholding, the nonresident 60-DAY rule, and residents of CALIFORNIA, INDIANA, OREGON, VIRGINIA may claim
 * exemption (Form 140NR + credit). Georgia's 159 counties → 15 Arizona counties (Maricopa-centric); metros
 * Phoenix (Maricopa; semiconductors TSMC, finance), Tucson (Pima; aerospace/defense Raytheon, U of A), Mesa,
 * Chandler (Intel), Scottsdale, Gilbert, Tempe (ASU), Flagstaff (Coconino). PRICING anchored to AZ-FACTS
 * canonical "from" figures (monthly $400, cleanup $1,200, setup $750). provider = #organization; areaServed =
 * State Arizona (NO PostalAddress / geo / LocalBusiness — Arizona is an areaServed-only state; the DE HQ is
 * the only real-address state); reviewedBy #david-westgate.
 * HONESTY (R5): no invented reviews/stats; firm-level review byline (no founder name; David Westgate only as
 * reviewedBy @id). Independent firm — does NOT file Arizona or federal returns, the corporate income tax, the
 * individual income tax, the Transaction Privilege Tax (TPT) return, or the PTE election; not a registered
 * agent; coordinates with the client's CPA/EA and the Arizona Dept of Revenue. The flat 2.5% income tax, the
 * 4.9% corporate rate, the PTE 2.5%, the 5.6% state TPT, and the prime-contracting 65% base are VERIFIED and
 * stated; specific city/county TPT rates framed qualitatively (link the ADOR rate table). TPT is NEVER called
 * a sales tax.
 *
 * ROUTING (core state, only 6 AZ pages exist): links go ONLY to the 5 AZ siblings + pillar or to GLOBAL pages
 * that exist — payroll /quickbooks/payroll/, migration /quickbooks/migration/, monthly
 * /accounting/bookkeeping/monthly-bookkeeping/, catch-up /accounting/bookkeeping/catch-up-bookkeeping/,
 * sales tax /accounting/sales-tax-compliance/, fractional CFO /accounting/advisory/fractional-cfo/, QBO
 * /quickbooks/online/, file review /quickbooks/file-review/, pricing /pricing/, bookkeeper-vs
 * /vs/bookkeeper-vs-accountant/. NO link to any non-existent /find-an-accountant/arizona/<x>/. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 right after the in-brief. (H2: The short version.) Matches the .njk inBrief.text.
  summary: "An <strong>Arizona QuickBooks accountant</strong> from TechBrot is a Certified QuickBooks ProAdvisor who keeps your books clean in <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop &mdash; categorizing and reconciling every account, maintaining the chart of accounts and the <a href=\"/accounting/sales-tax-compliance/\">Transaction Privilege Tax (TPT) tracked by business classification and location (5.6% state plus county and city layers)</a>, and producing CPA-ready monthly statements &mdash; while staying aware of Arizona realities like the <strong>flat 2.5% state income tax (the lowest flat rate in the country)</strong>, the <strong>Transaction Privilege Tax &mdash; a tax on the seller&rsquo;s privilege of doing business, not a sales tax</strong>, the <strong>prime-contracting rule that taxes construction on 65% of gross receipts</strong>, the <strong>state-only withholding with the 60-day rule and the California/Indiana/Oregon/Virginia exemption</strong>, the <strong>flat 4.9% corporate income tax</strong>, and the <strong>pass-through entity (PTE) election at 2.5%</strong> for growing pass-throughs. Work is delivered by a named ProAdvisor on the same file every month, fixed-fee against a <a href=\"/pricing/\">written scope</a> (monthly bookkeeping from $400/mo; cleanup from $1,200; setup from $750). TechBrot is <strong>not a CPA firm</strong> &mdash; we run the books and coordinate with your CPA, who files. Serving QuickBooks users across all 15 Arizona counties, from metro Phoenix&rsquo;s semiconductor and construction boom to Tucson&rsquo;s aerospace base, Mesa, Chandler, Scottsdale, Gilbert, Tempe, and Flagstaff.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Arizona QuickBooks accountant, in five questions.)
  aiSummary: [
    { q: "What is an Arizona QuickBooks accountant?", a: "<strong>An Arizona QuickBooks accountant is a Certified QuickBooks ProAdvisor who manages an Arizona business&rsquo;s books inside QuickBooks</strong> &mdash; reconciling accounts, configuring the Transaction Privilege Tax (TPT) by business classification and location (5.6% state plus county and city layers), handling the prime-contracting 65% base for construction, keeping the pass-through entity (PTE) election ready, and applying state-only withholding with the 60-day rule &mdash; with fluency in Arizona&rsquo;s specific rules. TechBrot delivers this fixed-fee, by a named ProAdvisor, in your own file across all 15 counties." },
    { q: "What does it cost in Arizona?", a: "Monthly bookkeeping runs <strong>from $400/mo</strong>; one-time QuickBooks cleanup <strong>from $1,200</strong>; setup <strong>from $750</strong>. All fixed-fee against a written scope &mdash; never hourly, no surprise invoices. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We run the books and coordinate with your CPA or EA, who files your Arizona and federal returns, the 4.9% corporate income tax, the Transaction Privilege Tax (TPT) return, and the pass-through entity (PTE) election. Most Arizona businesses use both." },
    { q: "Do you handle the Transaction Privilege Tax and Arizona withholding?", a: "Yes &mdash; the TPT is the genuine Arizona complexity, and it is <strong>not a sales tax</strong>: it&rsquo;s a tax on the <strong>seller&rsquo;s privilege of doing business</strong>, owed by the vendor and levied <strong>by business classification</strong>, with a 5.6% state rate plus county and city layers (most city TPT reported through the state&rsquo;s centralized AZTaxes.gov portal), and for construction the <strong>prime-contracting rule taxes 65% of gross receipts</strong>. Arizona also has <strong>no local income tax</strong>, so withholding is state-only &mdash; with a 60-day rule for nonresidents and an exemption for California, Indiana, Oregon, and Virginia residents &mdash; so we configure <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> accordingly. We build it in; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file?", a: "Yes &mdash; the most common engagement is a one-time <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">cleanup</a> to a CPA-ready standard, then ongoing <a href=\"/find-an-accountant/arizona/bookkeeping-services/\">monthly bookkeeping</a> so the file never drifts again." },
  ],

  // VALUE STACK — six services a named ProAdvisor handles. (H2: Everything your books need… + 6 H3s)
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized and reconciled, a clean chart of accounts maintained, and monthly statements you can actually read &mdash; in your own QuickBooks file.", href: "/find-an-accountant/arizona/bookkeeping-services/", cta: "Arizona bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks cleanup &amp; catch-up", body: "Behind or messy? We fix the file to a CPA-ready standard &mdash; undeposited funds, miscategorizations, broken reconciliations, the wrong TPT business classification, contractor files taxing the full receipts instead of the prime-contracting 65% base, commingled entities &mdash; then keep it clean.", href: "/find-an-accountant/arizona/quickbooks-cleanup/", cta: "Arizona QuickBooks cleanup &rarr;" },
    { num: "03", title: "QuickBooks setup &amp; migration", body: "A new file built right, or a <a href=\"/quickbooks/migration/\">Desktop-to-Online migration</a> done without breaking your history &mdash; chart of accounts, the TPT items by business classification and location, and bank feeds configured by a ProAdvisor.", href: "/find-an-accountant/arizona/quickbooks-setup/", cta: "Arizona QuickBooks setup &rarr;" },
    { num: "04", title: "Transaction Privilege Tax (TPT) setup", body: "Arizona&rsquo;s TPT is where QuickBooks goes wrong &mdash; it&rsquo;s <strong>not a sales tax</strong> but a tax on the <strong>seller&rsquo;s privilege of doing business</strong>, levied <strong>by business classification</strong> with a <strong>5.6%</strong> state rate plus county and city layers (most city TPT reported through the centralized AZTaxes.gov portal). Generic setups charge one statewide rate &mdash; wrong. We configure the QuickBooks TPT items so the correct combined rate applies by classification and location, apply the <strong>prime-contracting 65% base</strong> for construction, reconcile them so the filings tie out, and scope multi-state nexus for sellers crossing the California, Nevada, or New Mexico lines. You or your CPA file.", href: "/accounting/sales-tax-compliance/", cta: "Sales-tax compliance &rarr;" },
    { num: "05", title: "Payroll coordination", body: "QuickBooks Payroll run and reconciled into the books &mdash; including <strong>state-only</strong> Arizona withholding (cities levy TPT, not income tax), the <strong>60-day rule</strong> for nonresidents, and the <strong>California/Indiana/Oregon/Virginia exemption</strong> many Arizona remote-staff employers need &mdash; so wages, taxes, and liabilities reconcile every month.", href: "/quickbooks/payroll/", cta: "Payroll overview &rarr;" },
    { num: "06", title: "Year-end CPA handoff", body: "Clean, reconciled, documented books delivered to your CPA at year-end &mdash; with the TPT detail kept filing-ready by classification and the balance sheet kept PTE-ready &mdash; so your return is faster, cheaper, and audit-ready. We coordinate with them directly so nothing falls through." },
  ],

  // AZ FACTS — three Arizona tax realities built into the books. (H2: Three Arizona facts… + 3 H3s)
  facts: [
    { fig: "TPT", title: "The Transaction Privilege Tax &mdash; not a sales tax", body: "Arizona&rsquo;s defining indirect tax is the <strong>Transaction Privilege Tax (TPT)</strong> &mdash; <strong>not a sales tax</strong> but a tax on the <strong>seller&rsquo;s privilege of doing business</strong>, legally owed by the vendor (who usually passes it through). It&rsquo;s levied <strong>by business classification</strong> &mdash; retail, contracting, restaurant, commercial lease, and more &mdash; with a <strong>5.6%</strong> state rate plus county and city layers, so the combined rate varies by activity and location. Most city TPT is reported through the Arizona Department of Revenue&rsquo;s centralized AZTaxes.gov portal, though each city sets its own rate. Because the rate and base depend on classification, generic setups that charge one statewide rate are wrong. We configure the QuickBooks TPT items so the right combined rate applies. Confirm current rates against the ADOR TPT rate table." },
    { fig: "65%", title: "Prime contracting &mdash; construction&rsquo;s 65% base", body: "For construction, Arizona&rsquo;s <strong>prime contracting</strong> classification taxes <strong>65% of the gross receipts</strong> &mdash; the other 35% is treated as a standard deduction for materials &mdash; and the <strong>prime contractor</strong>, not the subcontractors, generally owes the TPT. Maintenance, repair, replacement, and alteration (<strong>MRRA</strong>) work is taxed differently, at the point of materials purchase. It&rsquo;s one of the most distinctive things in Arizona accounting and a frequent source of errors, so the equity, job-costing, and revenue accounts have to be clean to compute it. We keep contractor books prime-contracting-ready so the filing is straightforward for your CPA." },
    { fig: "2.5% flat", title: "The lowest flat income tax &mdash; but the 60-day rule", body: "Arizona&rsquo;s individual income tax is a <strong>flat 2.5%</strong> &mdash; in place since 2023 and the <strong>lowest flat income-tax rate of any U.S. state</strong> &mdash; and the corporate rate is a flat 4.9%. There is <strong>no local or city income tax</strong> (cities levy TPT instead), so payroll withholding is state-only &mdash; but a nonresident working in Arizona is generally withheld once they&rsquo;ve worked here <strong>60 days</strong>, while residents of <strong>California, Indiana, Oregon, or Virginia</strong> can claim exemption (Form 140NR + a credit). We configure QuickBooks Payroll so multi-state and remote staff are withheld correctly, and keep the books PTE-ready (the elective pass-through entity tax at 2.5%) for growing pass-throughs." },
  ],

  // SCOPE — honest do/don't split. (H2: What we do — and what we don't. + 2 H3s)
  scopeDo: [
    "Monthly bookkeeping &amp; reconciliation in QuickBooks",
    "QuickBooks cleanup, catch-up, setup &amp; migration",
    "The Transaction Privilege Tax (TPT) by business classification &amp; location, the prime-contracting 65% base, state-only withholding &amp; the flat 2.5% rate set up in QuickBooks",
    "Payroll coordination &amp; year-end CPA handoff, books kept PTE-ready",
    "CPA-ready financial statements every month",
  ],
  scopeDont: [
    "Files your Arizona &amp; federal income-tax returns &amp; the 4.9% corporate income tax",
    "Files the Transaction Privilege Tax (TPT) return; represents you before the Arizona Department of Revenue",
    "Makes the pass-through entity (PTE) election &amp; provides formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps from messy to handled. (H2: Four steps from messy to handled. + 4 H3s)
  process: [
    { phase: "Step 1", title: "Discovery call", body: "A free call to review your QuickBooks file and your Arizona situation &mdash; volume, accounts, which TPT classifications you fall under, whether prime contracting applies, where your multi-state withholding runs (the 60-day rule and the CA/IN/OR/VA exemption), whether the PTE election fits, entity structure, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly, or both &mdash; with the price in writing before any work begins." },
    { phase: "Step 3", title: "Cleanup &amp; setup", body: "Your named ProAdvisor gets the file CPA-ready and reconciled &mdash; fixing categorization, the TPT items by classification and location, the prime-contracting 65% base for contractors, the state-only withholding setup, and broken reconciliations to a <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">known-good</a> baseline." },
    { phase: "Step 4", title: "Monthly cadence", body: "Same operator, same file, every month &mdash; reconciled accounts, the TPT current by classification and location, Arizona-source wages withheld correctly under the 60-day and exemption rules, the books kept PTE-ready, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Software can categorize a transaction. It can&rsquo;t tell you which Transaction Privilege Tax classification a new revenue line falls under, whether your construction work is prime contracting or MRRA, or whether your S-corp should make the pass-through entity (PTE) election at 2.5% this year. As bookkeeping commoditizes, that judgment is where the value moves.",
    "Once your Arizona books are clean and reconciled, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> engagement adds once your books are clean. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A (cap 5–7). visible faq__list = FAQPage (same array). 2 call-intent (phone).
  faq: [
    { q: "Do I need a QuickBooks ProAdvisor in Arizona, or will any bookkeeper do?", a: "For an Arizona business, a Certified QuickBooks ProAdvisor brings two things a general bookkeeper often can&rsquo;t: verified QuickBooks expertise and fluency in Arizona&rsquo;s specific rules &mdash; the Transaction Privilege Tax (TPT) charged by business classification and location (5.6% state plus county and city layers), the prime-contracting 65% base for construction, state-only withholding with the 60-day rule and the CA/IN/OR/VA exemption, the flat 2.5% income tax, the 4.9% corporate rate, and the pass-through entity (PTE) election. TechBrot pairs ProAdvisor-level QuickBooks work with that Arizona context, delivered as a fixed-fee engagement." },
    { q: "What does an Arizona QuickBooks accountant actually do month to month?", a: "Each month: categorize and reconcile every bank, credit-card, and merchant account; maintain a clean chart of accounts; keep the Transaction Privilege Tax charged correctly by classification and location and the balance sheet PTE-ready so the returns are accurate; produce a profit &amp; loss, balance sheet, and cash-flow statement; and hand your CPA clean, year-end-ready books. The work is done by a named ProAdvisor on the same file every month &mdash; not rotated staff." },
    { q: "How much does a QuickBooks accountant cost in Arizona?", a: "TechBrot quotes fixed monthly fees against a written scope, not hourly. Ongoing monthly bookkeeping runs from $400/mo depending on transaction volume and accounts. One-time QuickBooks cleanup starts at $1,200, and setup at $750. You get the scope and price in writing before any work begins &mdash; no metered clock, no surprise invoices. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to scope it." },
    { q: "Is TechBrot an Arizona CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We deliver bookkeeping, QuickBooks work, payroll, and operational accounting, and we coordinate with your CPA or EA &mdash; who files your Arizona and federal returns, the 4.9% corporate income tax, the Transaction Privilege Tax (TPT) return, and the pass-through entity (PTE) election, and represents you before the Arizona Department of Revenue. Most Arizona businesses use both: TechBrot runs the books, your CPA files." },
    { q: "How do the Transaction Privilege Tax and Arizona withholding affect my setup?", a: "Arizona&rsquo;s TPT is the genuine indirect-tax complexity, and it&rsquo;s not a sales tax: it&rsquo;s a tax on the seller&rsquo;s privilege of doing business, owed by the vendor and levied by business classification (retail, contracting, restaurant, commercial lease, and more), with a 5.6% state rate plus county and city layers, so the combined rate varies by activity and location and most city TPT is reported through the centralized AZTaxes.gov portal. For construction, the prime-contracting rule taxes 65% of the gross receipts. Separately, Arizona has no local income tax, so withholding is state-only &mdash; but a nonresident working in Arizona is generally withheld after 60 days, while residents of California, Indiana, Oregon, or Virginia can claim exemption. We build the per-classification TPT and the correct state withholding into QuickBooks so the right amounts apply and the filings reconcile; you or your CPA file." },
    { q: "Can you fix a messy QuickBooks file and then keep it clean?", a: "That&rsquo;s the most common Arizona engagement: a one-time cleanup or catch-up to get the file accurate and reconciled, then ongoing monthly bookkeeping to keep it that way. We scope the cleanup first, fix it to a CPA-ready standard &mdash; including the TPT classifications and locations, the prime-contracting 65% base for contractors, and the state withholding setup &mdash; and roll straight into a monthly cadence so the file never drifts again." },
    { q: "How do we get started?", a: "Book a free Arizona discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. If it&rsquo;s a fit, a named ProAdvisor starts on your file; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; areaServed-only, no office address).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience &middot; serving all 15 Arizona counties remotely" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; no fabricated data" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the 4.9% corporate income tax, the Transaction Privilege Tax (TPT) return &amp; the pass-through entity (PTE) election coordinated with your CPA/EA and the Arizona Department of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/arizona/quickbooks-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Arizona QuickBooks Accountant & ProAdvisor","description":"Certified QuickBooks ProAdvisor and accountant for Arizona businesses across all 15 counties — bookkeeping, QuickBooks setup and cleanup, payroll, and the Transaction Privilege Tax (TPT) tracked by business classification and location (5.6% state plus county and city layers, with the prime-contracting 65% base for construction), the flat 2.5% income tax (the lowest in the country), the flat 4.9% corporate rate, state-only withholding with the 60-day rule and the CA/IN/OR/VA exemption, and pass-through entity (PTE) readiness, delivered fixed-fee by a named ProAdvisor in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/arizona-quickbooks-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#az-svc-qbaccountant-summary","#az-svc-qbaccountant-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Arizona","item":"https://techbrot.com/find-an-accountant/arizona/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Arizona QuickBooks Accountant & ProAdvisor Services","serviceType":"QuickBooks ProAdvisor and bookkeeping services","description":"Certified QuickBooks ProAdvisor and bookkeeping services for Arizona businesses — monthly bookkeeping, QuickBooks setup and cleanup, payroll coordination with state-only withholding (the 60-day nonresident rule and the CA/IN/OR/VA exemption), the Transaction Privilege Tax (TPT) tracked by business classification and location (5.6% state plus county and city layers, with the prime-contracting 65% base for construction), the flat 2.5% income tax (the lowest in the country), the flat 4.9% corporate rate, and pass-through entity (PTE) readiness, delivered fixed-fee in the client's own QuickBooks file by a named ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Arizona or federal returns, the corporate income tax, the individual income tax, the Transaction Privilege Tax (TPT) return, or the pass-through entity (PTE) election — coordinates with the client's CPA, EA, and the Arizona Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Arizona","sameAs":"https://en.wikipedia.org/wiki/Arizona"},
          "audience":{"@type":"BusinessAudience","name":"Arizona small and midsize businesses, construction and contracting firms, semiconductor and advanced manufacturers, aerospace and defense suppliers, real estate operators, professional and financial-services firms, and healthcare practices"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Arizona QuickBooks & Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Transaction Privilege Tax (TPT) & State Withholding Setup"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
