/* /quickbooks/year-end-close/ — NEW seasonal-BOFU service page.
 * Pattern: src/accounting/month-end-close.{njk,11tydata.js} (t-mofu close
 * SERVICE page). slug "qbyec", section prefix qbyec-. DISTINCT ANGLE: the
 * operational CLOSE-THE-YEAR-IN-QUICKBOOKS engagement — final reconciliations,
 * adjusting entries booked per the CPA's guidance, Undeposited Funds / Opening
 * Balance Equity cleanup, 1099 prep (folds in HERE), set the closing date /
 * lock the prior period, hand off a CPA-ready file. NOT the advisory review
 * (/accounting/year-end-review/), NOT payroll W-2/1099-from-payroll
 * (/quickbooks/payroll/year-end/), NOT the monthly close
 * (/accounting/month-end-close/), NOT the free DIY checklist
 * (/resources/checklists/year-end-checklist/) — all LINKED, not restated.
 * HONESTY R4/R5/R9: we CLOSE the books / prepare a CPA-ready file; we do NOT
 * file income taxes, set tax positions, or represent before the IRS — the
 * client's CPA/EA does. 1099 = we prepare/file information returns as a
 * bookkeeping service where scoped, deferring tax determinations to the CPA.
 * Canonical pricing only — project/seasonal work, fixed-fee after discovery,
 * NO invented year-end price. No fabricated stats/clients/reviews; no
 * AggregateRating/Review schema. Founder-name-zero in visible content (David
 * Westgate in reviewedBy schema @id only). Independent firm, not affiliated
 * with Intuit Inc. Only component classes from month-end-close.njk; <code> not
 * mono. Valid CTA intents: accounting, file-review. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Year-end close, plainly." — definition prose (no <strong> rule applies to dark hero only, not here)
  definition: [
    "The <strong>QuickBooks year-end close</strong> is the operational work of finalizing the books for a completed fiscal or calendar year: <strong>final bank and credit-card reconciliations</strong>, review and posting of <strong>adjusting entries</strong> &mdash; depreciation, accruals, prepaids &mdash; booked per your CPA&rsquo;s guidance, cleanup of stuck accounts like <strong>Undeposited Funds</strong> and <strong>Opening Balance Equity</strong>, <strong>1099 preparation</strong> for your contractors, and finally setting the <strong>closing date</strong> in QuickBooks to lock the prior period so the file can&rsquo;t drift. The output is a clean, reconciled, CPA-ready file handed off for tax filing.",
    "This is the <em>close</em>, not the <a href=\"/accounting/year-end-review/?intent=accounting\">review</a> &mdash; the review asks &ldquo;are the books ready?&rdquo;; the close is the hands-on engagement that gets them there and locks them down. TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> run it inside your own QuickBooks file. We <strong>close the books and prepare a CPA-ready file; we do not file your income taxes, set tax positions, or represent you before the IRS &mdash; your CPA or EA does that</strong>. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Year-end close, in five questions." — quick-answer (NON-heading questions)
  aiSummary: [
    { q: "What is the QuickBooks year-end close?", a: "The operational work of finalizing the books for the year in QuickBooks &mdash; <strong>final reconciliations, adjusting entries booked per your CPA&rsquo;s guidance, cleanup of Undeposited Funds and Opening Balance Equity, 1099 preparation, and setting the closing date</strong> to lock the prior period. The result is a clean, CPA-ready file." },
    { q: "Is this the same as the year-end review?", a: "No. The <a href=\"/accounting/year-end-review/?intent=accounting\">year-end review</a> is the advisory check that asks whether the books are ready and hands off to your CPA. <strong>This page is the operational close</strong> that does the reconciling, adjusting, cleanup, 1099 prep, and period-locking." },
    { q: "Do you file my taxes?", a: "No. We <strong>close the books and prepare a CPA-ready file</strong>; we do not file income taxes, set tax positions, or represent you before the IRS. We book adjustments per your CPA&rsquo;s guidance and hand off a clean file for them to finalize." },
    { q: "Are 1099s included?", a: "Yes &mdash; <strong>1099 preparation for contractors folds into the year-end close</strong>. We verify W-9s and totals and prepare and file the 1099-NEC/1099-MISC information returns as a bookkeeping service where scoped, deferring any tax determination to your CPA. Payroll <a href=\"/quickbooks/payroll/year-end/?intent=accounting\">W-2 and 1099-from-payroll forms</a> live on the payroll year-end page." },
    { q: "What does it cost?", a: "Year-end close is <strong>project / seasonal work, scoped to a fixed fee after a discovery call</strong> &mdash; price depends on transaction volume, accounts, contractor count, and how far the file is from clean. See <a href=\"/pricing/?intent=accounting\">pricing</a> for how engagements are structured; there is no flat year-end price." },
  ],
  // "What the year-end close actually covers." — 6 deliverables (stack-8 + num). 1099 folded in.
  included: [
    { num: "01", name: "Final reconciliations", body: "Every bank and credit-card account reconciled through the last day of the fiscal year, so the closing balances tie to statements before anything is locked. The step everything else depends on." },
    { num: "02", name: "Adjusting entries, per your CPA", body: "Depreciation, accruals, and prepaids reviewed and posted &mdash; booked per your CPA&rsquo;s year-end guidance, or handed off for them to finalize. We record the entries; your CPA owns the tax treatment." },
    { num: "03", name: "Undeposited Funds &amp; OBE cleanup", body: "We clear the two accounts that quietly break a year-end file: <code>Undeposited Funds</code> left holding phantom payments, and <code>Opening Balance Equity</code> that should have netted to zero. Both reconciled to reality before the close." },
    { num: "04", name: "1099 preparation", body: "Contractor payments mapped, W-9s and TINs verified, totals reconciled, and 1099-NEC/1099-MISC information returns prepared and filed where scoped &mdash; as a bookkeeping service, with tax determinations deferred to your CPA." },
    { num: "05", name: "Set the closing date &amp; lock", body: "Once the year ties out, we set the <code>closing date</code> in QuickBooks and apply a password so the prior period is locked &mdash; no accidental edits to filed numbers, a clean audit trail going forward." },
    { num: "06", name: "CPA-ready handoff", body: "A reconciled trial balance, year-end financial statements, and a documented adjustments list packaged for your <a href=\"/accounting/year-end-review/?intent=accounting\">CPA or EA</a> &mdash; so tax season is a filing exercise, not a reconstruction." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signals (buyer-card).
  signals: [
    { opener: "The books were never closed.", body: "Left open all year, the file drifts &mdash; prior months keep changing. A year-end close reconciles, adjusts, and locks the period so the numbers stop moving." },
    { opener: "Your CPA wants a clean file.", body: "If your tax preparer keeps sending back &ldquo;please fix and resend,&rdquo; the file isn&rsquo;t close-ready. We hand off a reconciled, CPA-ready file so they can file, not rebuild." },
    { opener: "1099 deadline is bearing down.", body: "Contractor totals, W-9s, and TINs all have to be right before the late-January filing window. We fold 1099 prep into the close so it&rsquo;s done once, correctly." },
    { opener: "Undeposited Funds won&rsquo;t clear.", body: "If <code>Undeposited Funds</code> or <code>Opening Balance Equity</code> are carrying balances that make no sense, the year won&rsquo;t close cleanly. That cleanup is part of this engagement." },
    { opener: "No one set a closing date.", body: "Without a locked closing date, anyone can edit filed numbers and quietly break last year&rsquo;s tax return. Setting and password-protecting it is the final step of a real close." },
    { opener: "You DIY the year but want a backstop.", body: "Working the <a href=\"/resources/checklists/year-end-checklist/\">free year-end checklist</a> yourself and want a ProAdvisor to finish, verify, and lock it? That&rsquo;s exactly what this engagement does." },
  ],
  // "How the year-end close runs." — the ONE numbered system (process-diagram). 5 phases.
  process: [
    { num: "Step 1", name: "Discovery &amp; scope", body: "A 30-minute discovery call: we look at the file&rsquo;s state, your contractor count, your CPA&rsquo;s requirements, and the deadlines. You get a written fixed-fee scope before any work starts." },
    { num: "Step 2", name: "Final reconciliations", body: "Every bank and credit-card account reconciled through year-end so closing balances tie to statements. Variances investigated and cleared before adjustments." },
    { num: "Step 3", name: "Adjustments &amp; cleanup", body: "Depreciation, accruals, and prepaids posted per your CPA&rsquo;s guidance; <code>Undeposited Funds</code> and <code>Opening Balance Equity</code> cleared; the balance sheet reviewed against expectations." },
    { num: "Step 4", name: "1099 prep &amp; statements", body: "1099-NEC/1099-MISC information returns prepared and filed where scoped; year-end financial statements and a reconciled trial balance produced for the handoff." },
    { num: "Step 5", name: "Lock &amp; hand off", body: "We set and password-protect the <code>closing date</code> to lock the prior period, then deliver the CPA-ready package to you and your CPA for tax filing." },
  ],
  // Scope-boundary table (vs-scroll + vs-table). Distinct-from-adjacent-intents, made explicit.
  boundaryTable: [
    { window: "QuickBooks year-end close", work: "This page", detail: "The operational close &mdash; final reconciliations, adjusting entries, Undeposited Funds / OBE cleanup, 1099 prep, set the closing date, CPA-ready handoff." },
    { window: "Year-end review", work: "<a href=\"/accounting/year-end-review/?intent=accounting\">/accounting/year-end-review/</a>", detail: "The advisory check that asks &ldquo;are the books ready?&rdquo; and coordinates the CPA handoff &mdash; the analysis, not the hands-on close." },
    { window: "Payroll year-end", work: "<a href=\"/quickbooks/payroll/year-end/?intent=accounting\">/quickbooks/payroll/year-end/</a>", detail: "W-2s and 1099-from-payroll forms generated from QuickBooks Payroll. Contractor 1099-NEC folds into this close; payroll forms live there." },
    { window: "Month-end close", work: "<a href=\"/accounting/month-end-close/?intent=accounting\">/accounting/month-end-close/</a>", detail: "The recurring monthly close. Year-end is the annual close built on twelve clean monthly ones &mdash; if the months close, December is short." },
    { window: "Year-end checklist", work: "<a href=\"/resources/checklists/year-end-checklist/\">/resources/checklists/year-end-checklist/</a>", detail: "The free DIY checklist &mdash; the self-serve companion for owners closing the year themselves." },
  ],
  // "Related services." — 4 related (stack-8 linked). The adjacent intents, linked not restated.
  related: [
    { title: "Year-end review", href: "/accounting/year-end-review/?intent=accounting", body: "The advisory &ldquo;are the books ready?&rdquo; check and CPA handoff &mdash; the analysis this operational close delivers on." },
    { title: "Payroll year-end", href: "/quickbooks/payroll/year-end/?intent=accounting", body: "W-2 and 1099-from-payroll forms from QuickBooks Payroll. Contractor 1099-NEC folds into the close; payroll forms live here." },
    { title: "Month-end close", href: "/accounting/month-end-close/?intent=accounting", body: "The recurring monthly close the year-end close is built on &mdash; twelve clean months make a short December." },
    { title: "Year-end checklist", href: "/resources/checklists/year-end-checklist/", body: "The free DIY year-end checklist &mdash; the self-serve companion for owners closing the year themselves." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row).
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Final reconciliations, adjusting entries per the CPA, Undeposited Funds / OBE cleanup, 1099 prep, closing-date lock, CPA-ready handoff &mdash; not tax filing, tax positions, or IRS representation" },
    { value: "Fixed-fee", label: "Project / seasonal work &middot; written scope before work &middot; performed in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 8 distinct, substantive Q/A. Honesty lanes stated plainly.
  faq: [
    { q: "What does the QuickBooks year-end close include?", a: "The operational close of the books for the fiscal or calendar year inside your own QuickBooks file: final bank and credit-card reconciliations through year-end; review and posting of adjusting entries (depreciation, accruals, prepaids) per your CPA&rsquo;s guidance; cleanup of stuck accounts like Undeposited Funds and Opening Balance Equity; 1099 preparation for contractors; setting and password-protecting the closing date to lock the prior period; and a CPA-ready handoff package of reconciled statements and a documented adjustments list." },
    { q: "Do you file my income taxes as part of the close?", a: "No. TechBrot closes the books and prepares a CPA-ready file &mdash; we do not file income taxes, set tax positions, or represent you before the IRS. We book adjustments per your CPA or EA&rsquo;s guidance and hand off a clean, reconciled file for them to finalize and file. The close is bookkeeping and management accounting; the tax return is your licensed tax professional&rsquo;s lane, and keeping that boundary clear is what keeps the work honest." },
    { q: "Are 1099s included in the year-end close?", a: "Yes. Contractor 1099 preparation folds into the year-end close: we map contractor payments, verify W-9s and TINs, reconcile totals, and prepare and file the 1099-NEC/1099-MISC information returns where scoped &mdash; as a bookkeeping service, with any tax determination deferred to your CPA. Note that W-2s and 1099-from-payroll forms generated from QuickBooks Payroll are handled on the <a href=\"/quickbooks/payroll/year-end/?intent=accounting\">payroll year-end</a> page; contractor 1099-NEC is the piece that lives in this close." },
    { q: "How is this different from the year-end review?", a: "The <a href=\"/accounting/year-end-review/?intent=accounting\">year-end review</a> is the advisory engagement that asks &ldquo;are the books ready?&rdquo; &mdash; it analyzes the file, flags what&rsquo;s missing, and coordinates the CPA handoff. This page is the operational <em>close</em>: the hands-on work that reconciles, adjusts, cleans up, prepares 1099s, and locks the period. The review is the diagnosis; the close is the treatment. Many clients do both &mdash; the review identifies the gaps, the close fixes and locks them." },
    { q: "What does setting the closing date in QuickBooks do?", a: "Setting a closing date in QuickBooks (and applying a closing-date password) locks the prior period so transactions on or before that date can&rsquo;t be added, edited, or deleted without the password and an audit-trail flag. It&rsquo;s the step that protects last year&rsquo;s filed numbers from accidental changes and keeps the file in agreement with the tax return. We set it only after the year ties out and your CPA has what they need &mdash; it&rsquo;s the final action of a real close." },
    { q: "Why do Undeposited Funds and Opening Balance Equity matter at year-end?", a: "These are the two accounts that most often quietly break a year-end file. <code>Undeposited Funds</code> holds payments recorded but never grouped into a deposit, so it carries phantom balances that overstate assets. <code>Opening Balance Equity</code> is a setup placeholder that should net to zero once everything is reconciled &mdash; a lingering balance signals an unreconciled opening balance or a miscategorized entry. Clearing both is part of the year-end close &mdash; and core to a standalone <a href=\"/quickbooks/cleanup/\">QuickBooks cleanup</a> when a file is broadly behind &mdash; because a file with stuck balances in either account isn&rsquo;t actually closed." },
    { q: "What does the year-end close cost?", a: "Year-end close is project and seasonal work, scoped to a fixed fee after a discovery call rather than a flat published rate. The price depends on transaction volume, number of accounts, how many contractors need 1099s, and how far the file is from clean &mdash; a file kept current all year closes far faster than one that was never reconciled. See <a href=\"/pricing/?intent=accounting\">pricing</a> for how engagements are structured; you get a written fixed-fee scope before any work begins, with no surprises. To scope yours against the deadlines, speak to a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "My books are months behind. Can you still close the year?", a: "Yes, but the year-end close assumes a substantially reconciled file. If the books are months behind, the first step is <a href=\"/accounting/month-end-close/?intent=accounting\">catching the periods up</a> and reconciling them before the annual close can lock the year. We&rsquo;ll assess the gap on the discovery call and scope the catch-up and close together, so you get a realistic timeline against the 1099 and filing deadlines rather than a rushed, incomplete close." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/year-end-close/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbyec-ai-summary","#qbyec-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Year-End Close","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Year-End Close","serviceType":"QuickBooks year-end close and CPA-ready file preparation","description":"Operational year-end close performed in the client's own QuickBooks file: final bank and credit-card reconciliations, review and posting of adjusting entries (depreciation, accruals, prepaids) per the client's CPA guidance, cleanup of Undeposited Funds and Opening Balance Equity, contractor 1099 preparation and filing of information returns where scoped, setting and password-protecting the closing date to lock the prior period, and a CPA-ready handoff package, performed by Certified ProAdvisors for U.S. small and mid-sized businesses. Bookkeeping and management accounting; the firm does not file income taxes, set tax positions, or represent clients before the IRS — coordinated with the client's CPA or EA for filing.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Year-end close deliverables","itemListElement":data.included.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What the year-end close covers","itemListElement":data.included.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"QuickBooks year-end close — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};
