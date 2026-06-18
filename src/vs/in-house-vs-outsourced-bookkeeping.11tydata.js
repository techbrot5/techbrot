/* /vs/in-house-vs-outsourced-bookkeeping/ — t-mofu definitional comparison (round 88,
 * vs Wave B). Uses partials/vs-compare-body.njk. usSide=right (outsourced =
 * TechBrot's side). HONESTY: outsourced is our side and disclosed; in-house named
 * as the better fit where it genuinely is; pricing uses only the canonical TechBrot
 * monthly range; no fabricated salary stats (ranges framed as illustrative/varies);
 * not-Intuit; founder-name-zero. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  bylineName: "By the Certified QuickBooks ProAdvisor team",
  bylineReview: "Reviewed by a Certified QuickBooks ProAdvisor &middot; we&rsquo;re the outsourced option &mdash; an honest read, including when in-house wins",
  summary: [
    "Hiring an <strong>in-house bookkeeper</strong> gives you a dedicated employee under your direct control, on your schedule, who knows only your business. The catch is the <strong>fully-loaded cost</strong>: salary is just the start &mdash; add payroll taxes, benefits, bookkeeping software, training, the management time to supervise them, and the cost and disruption of turnover. And one generalist hire rarely brings deep expertise across bookkeeping, payroll, multi-state sales tax, and cleanup all at once.",
    "<strong>Outsourced bookkeeping</strong> trades some direct control for a lower all-in cost, a team with broader expertise, built-in coverage when someone&rsquo;s out, and zero hiring, benefits, or turnover burden. For most U.S. small businesses, outsourcing wins on total cost and expertise &mdash; until headcount, transaction volume, and complexity grow enough that a dedicated in-house finance function (often a controller plus staff) genuinely pays off. TechBrot is the outsourced option; we&rsquo;ll tell you honestly when you&rsquo;ve reached the point where in-house makes more sense. Not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "Is it cheaper to outsource bookkeeping or hire in-house?", a: "For most small businesses, outsourcing is cheaper on a <strong>fully-loaded</strong> basis. An in-house bookkeeper&rsquo;s real cost is salary plus payroll taxes, benefits, software, training, and management time &mdash; well above the base salary. Outsourced bookkeeping is a single fixed fee with none of that overhead. In-house starts to win only at higher volume and complexity." },
    { q: "What's the real cost of an in-house bookkeeper?", a: "Far more than salary. You also pay employer payroll taxes, benefits, software licenses, onboarding and training, and the management time to supervise the role &mdash; plus the cost and disruption when they leave. A fully-loaded cost is the honest comparison point against an outsourced fixed fee, not the salary alone." },
    { q: "When does in-house bookkeeping make sense?", a: "When transaction volume and complexity are high enough to keep a dedicated person genuinely busy, when you need someone physically on-site daily, when finance is becoming a core internal function (often a controller leading staff), or when tight, real-time control over the books matters more than total cost. Past a certain size, in-house is the right call." },
    { q: "What do you give up by outsourcing?", a: "Some direct, real-time control and the on-site presence of an employee. A good outsourced firm offsets this with a named operator, regular reporting, and responsiveness &mdash; but if you need someone at a desk in your office every day or instant ad-hoc control, in-house has the edge. It&rsquo;s a control-for-cost-and-expertise trade." },
    { q: "Does outsourcing mean less expertise?", a: "Usually the opposite. One in-house hire has one person&rsquo;s skill set; a firm brings a bench across bookkeeping, payroll, sales tax, cleanup, and industries, with quality review. You typically get broader expertise outsourced than a single generalist salary can buy &mdash; which is much of the value." },
  ],
  sides: [
    { eyebrow: "In-house", name: "Dedicated and controlled.", body: "A bookkeeper on your payroll &mdash; fully under your direction, on your schedule, on-site if you want, focused only on your business. <strong>The real cost:</strong> salary plus payroll taxes, benefits, software, training, and management time, plus turnover risk when they leave. And one hire rarely covers bookkeeping, payroll, sales tax, and cleanup expertise all at once. Right when finance is becoming a core internal function and volume keeps a person busy." },
    { eyebrow: "Outsourced", name: "Lower all-in, broader bench.", body: "A firm or service that handles your books for a fixed fee &mdash; no payroll taxes, benefits, software, training, or turnover to manage. <strong>The trade:</strong> less direct, real-time control and no on-site employee, offset by a named operator, a bench of expertise across payroll/sales-tax/cleanup, built-in coverage, and quality review. Right for most small businesses on total cost and expertise, until in-house scale is reached." },
  ],
  vsTable: [
    { cap: "All-in cost", left: "Salary + taxes + benefits + software + training", right: "Single fixed fee, no overhead" },
    { cap: "Direct control", left: "High — your employee", right: "Moderate — named operator + reporting" },
    { cap: "On-site presence", left: "Yes, if you want", right: "Remote" },
    { cap: "Breadth of expertise", left: "One person&rsquo;s skill set", right: "Team bench: payroll, sales tax, cleanup" },
    { cap: "Coverage when out", left: "You&rsquo;re exposed", right: "Team covers" },
    { cap: "Turnover risk", left: "Yours to absorb and re-hire", right: "Handled by the firm" },
    { cap: "Quality review", left: "Depends on your oversight", right: "Built-in QA" },
    { cap: "Management overhead", left: "You supervise the role", right: "Managed for you" },
    { cap: "Scales by", left: "Hiring more staff", right: "Adjusting the engagement" },
    { cap: "Best for", left: "Higher volume / core finance function", right: "Most small + growing businesses" },
    { cap: "Where TechBrot fits", left: "We&rsquo;ll say when in-house wins", right: "This is the outsourced model TechBrot runs" },
  ],
  decision: [
    { eyebrow: "Outsourcing fits", name: "Most small & growing businesses.", body: "You want clean books without the cost and management of an employee, you value a bench of expertise over a single generalist, and total cost matters. For the majority of U.S. small businesses, outsourcing delivers more expertise for less all-in cost &mdash; which is where TechBrot works." },
    { eyebrow: "In-house fits", name: "At scale or for tight control.", body: "Your transaction volume and complexity keep a dedicated person genuinely busy, you need someone on-site daily, or finance is becoming a core internal function with a controller and staff. Past a certain size, a dedicated in-house team is the right structure &mdash; and we&rsquo;ll tell you when you&rsquo;re there." },
    { eyebrow: "Compare honestly", name: "Fully-loaded, not salary.", body: "The fair comparison is an outsourced fixed fee against the <strong>fully-loaded</strong> cost of an employee &mdash; salary plus taxes, benefits, software, training, and management time &mdash; not the salary alone. Run that number before you hire; it often changes the decision." },
  ],
  fit: [
    "TechBrot is the <strong>outsourced</strong> option, so this comparison has a side &mdash; and we&rsquo;ll be straight about that. What outsourcing to a firm buys most small businesses is more expertise for a lower all-in cost than a single hire: a named Certified ProAdvisor operator, a bench across payroll, sales tax, and cleanup, built-in coverage, and quality review &mdash; with none of the payroll-tax, benefits, software, training, or turnover burden of an employee.",
    "We deliver <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> ($400&ndash;$2,500+/month, written fixed fee), plus <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a>, <a href=\"/quickbooks/\">QuickBooks ProAdvisor services</a>, <a href=\"/accounting/payroll-management/\">payroll</a>, and <a href=\"/accounting/sales-tax-compliance/\">sales-tax compliance</a> &mdash; the range a single in-house hire rarely covers alone.",
    "And the honest part: once your volume and complexity justify a dedicated in-house finance function, in-house genuinely becomes the better structure &mdash; and we&rsquo;ll tell you that rather than hold an engagement you&rsquo;ve outgrown. Many businesses also run a hybrid: in-house staff for day-to-day, a firm for oversight, cleanup, or specialized work. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  fitSpec: [
    { value: "Outsourced", label: "the model TechBrot delivers — fixed fee, no employee overhead" },
    { value: "Bench", label: "payroll, sales tax, cleanup, industry expertise — broader than one hire" },
    { value: "No turnover", label: "coverage and continuity handled by the firm, not your problem" },
    { value: "Honest", label: "we&rsquo;ll tell you when in-house fits you better; independent, not Intuit" },
  ],
  faq: [
    { q: "Is outsourced bookkeeping cheaper than hiring in-house?", a: "On a fully-loaded basis, usually yes for small businesses. An in-house bookkeeper costs salary plus employer payroll taxes, benefits, software, training, and management time &mdash; well above the base salary. Outsourced bookkeeping is a single fixed fee with none of that overhead. In-house becomes competitive only at higher volume and complexity." },
    { q: "What's the true cost of an in-house bookkeeper?", a: "Salary is only part of it. Add employer payroll taxes, benefits, software licenses, onboarding and training, and the management time to supervise the role &mdash; plus the cost and disruption when they leave. Compare that fully-loaded number against an outsourced fixed fee; the salary alone understates the real cost of hiring." },
    { q: "What do I lose by outsourcing my bookkeeping?", a: "Mainly some direct, real-time control and the on-site presence of an employee. A good firm offsets that with a named operator, regular reporting, and responsiveness. If you specifically need someone at a desk in your office daily or want instant hands-on control of the books, in-house has the edge &mdash; for most others, the trade favors outsourcing." },
    { q: "When should I bring bookkeeping in-house?", a: "When transaction volume and complexity keep a dedicated person genuinely busy, when finance is becoming a core internal function (often led by a controller), or when on-site, real-time control outweighs total cost. Past that threshold, in-house is the right structure &mdash; and a good outsourced partner will tell you when you&rsquo;ve reached it." },
    { q: "Can I do a hybrid of both?", a: "Yes, and many growing businesses do &mdash; in-house staff handle day-to-day entry while a firm provides oversight, monthly review, cleanup, or specialized payroll and sales-tax work. It&rsquo;s a common middle path that keeps internal control while adding expertise and a second set of eyes. We can scope an engagement to fit a hybrid setup." },
    { q: "Is TechBrot in-house or outsourced?", a: "TechBrot is the outsourced option &mdash; an independent Certified QuickBooks ProAdvisor firm that handles your books for a written fixed fee, with no employee overhead for you. We&rsquo;re upfront that this comparison has a side because of that, and we&rsquo;ll genuinely tell you when your scale makes an in-house team the better call. Not affiliated with Intuit Inc." },
  ],
  related: [
    { title: "Bookkeeping firm vs freelancer", href: "/vs/bookkeeping-firm-vs-freelancer/", body: "If you&rsquo;re outsourcing, the next question: a firm or a solo freelancer?" },
    { title: "Outsourced bookkeeping", href: "/accounting/outsourced-bookkeeping/", body: "What an outsourced engagement actually includes and how it&rsquo;s scoped." },
    { title: "Bookkeeper vs accountant", href: "/vs/bookkeeper-vs-accountant/", body: "The role distinction underneath every hiring decision here." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons — the same honest read each time." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/in-house-vs-outsourced-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-inout-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"In-House vs Outsourced Bookkeeping","item":url}]},
        {"@type":"ItemList","@id":url+"#dimensions","name":"In-house vs outsourced bookkeeping comparison dimensions","itemListElement":data.vsTable.map(function(r,i){return {"@type":"ListItem","position":i+1,"name":stripTags(r.cap)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
