/* Glossary content — ONE source of truth for the glossary cluster (growth phase,
 * 2026-06-17). Paginated into /glossary/{slug}/ by src/glossary/entry.njk; the
 * /glossary/ index reads the same array. QUALITY OVER COUNT (founder): every term
 * is a real, accurate, substantive definition — real definition + why-it-matters +
 * cluster links; the signature diagram ONLY where it genuinely fits; FAQ only where
 * 6+ real questions exist (else omitted, never padded). Honesty: accurate
 * definitions only, firm-level voice (founder-name-zero), no fabricated counts.
 *
 * Term shape:
 *   slug, term, title, description, shortDef (hero lede),
 *   definition: [paras]  (speakable; DefinedTerm description = joined+stripped),
 *   why: { heading, paras: [..], quote? },
 *   how: { paras: [..], diagram? } | null,   diagram = a partials/figure-*.svg basename
 *   clarify: { heading, paras: [..] } | null,
 *   related: [{ href, title, blurb }],
 *   call: { title, sub },
 *   faq: [{ q, a }] | null,           // 6+ real, or null
 *   blurb (index grid), published, updated
 */

module.exports = [
  {
    slug: "bank-reconciliation",
    term: "Bank reconciliation",
    title: "Bank Reconciliation — Definition, Why It Matters, How It Works · TechBrot",
    description: "Bank reconciliation: what it is, why it's the core control in bookkeeping, and how it works — matching your books to your bank statement so the balances agree. By Certified QuickBooks ProAdvisors.",
    shortDef: "Matching the transactions in your accounting records against your bank statement for the same period &mdash; and resolving every difference &mdash; so your book balance and your bank balance agree.",
    blurb: "Matching your books to your bank statement for the period so the balances agree &mdash; the core accuracy control in bookkeeping.",
    definition: [
      "<strong>Bank reconciliation</strong> is the process of comparing the transactions in your accounting records &mdash; your books &mdash; against the transactions on your bank statement for the same period, then resolving every difference until the two agree. A reconciled account proves that every deposit, payment, and bank fee has been recorded once and correctly, and that any timing differences are explained rather than ignored.",
      "It is performed per account, per period: each bank account and each credit-card account is reconciled against its own statement, usually once a month when the statement closes.",
    ],
    why: {
      heading: "The control everything else rests on.",
      paras: [
        "Until a bank account is reconciled, the numbers in your books are unverified. A missed transaction, a duplicate, a miscategorized payment, or a bank error can sit undetected and distort every report built on top of it &mdash; your profit, your cash position, your tax figures. Reconciled books are the difference between financial statements you can act on, and a CPA can file from, and a best guess.",
        "It is also the first thing a bookkeeper checks when assessing a file. An account that hasn&rsquo;t been reconciled in months is the classic signal that a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> is needed before the books can be trusted &mdash; and it is a routine part of <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>, where every account is reconciled as each statement closes.",
      ],
      quote: "Reconciliation doesn&rsquo;t make the books look right. It makes them <em>be</em> right &mdash; or it tells you exactly where they aren&rsquo;t.",
    },
    how: {
      paras: [
        "A reconciliation works from the bank statement back to your books. You confirm the opening balance matches the prior reconciliation, then mark every transaction that appears in both records as cleared. What&rsquo;s left is the work: post transactions that hit the bank but were never entered &mdash; fees, interest, automatic payments &mdash; remove duplicates, and identify timing differences such as checks written that haven&rsquo;t cleared or deposits still in transit. When every difference is explained, the adjusted book balance equals the bank&rsquo;s ending balance, and the account is reconciled.",
      ],
      diagram: "figure-reconcile-flow",
    },
    clarify: {
      heading: "Book balance vs. bank balance.",
      paras: [
        "They rarely match to the penny on any given day &mdash; and that is normal. The <strong>book balance</strong> reflects everything you have recorded; the <strong>bank balance</strong> reflects only what has actually cleared the bank. The gap between them is the timing differences: outstanding checks and deposits in transit. Reconciliation does not force the two equal &mdash; it explains the gap, line by line, until nothing is unaccounted for.",
      ],
    },
    related: [
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "Months of unreconciled accounts are the most common reason a file needs a cleanup &mdash; reconciliation is the backbone of the work." },
      { href: "/accounting/bookkeeping/monthly-bookkeeping/", title: "Monthly bookkeeping", blurb: "Ongoing bookkeeping reconciles every bank and credit-card account each month, as each statement closes." },
      { href: "/quickbooks/migration/balances-wrong-after-conversion/", title: "Balances wrong after a migration", blurb: "When a QuickBooks conversion leaves the numbers off, re-reconciling against the original balances is how the file is brought back to true." },
      { href: "/accounting/bookkeeping/", title: "All bookkeeping services", blurb: "How reconciliation fits the full monthly close and the financial package your CPA files from." },
    ],
    call: { title: "An account that won&rsquo;t reconcile?", sub: "A Certified ProAdvisor reviews the file, finds exactly where the books and the bank diverge, and scopes the fix in writing &mdash; fixed-fee. Independent firm; not Intuit." },
    faq: [
      { q: "What is bank reconciliation?", a: "Bank reconciliation is the process of comparing the transactions in your accounting records against your bank statement for the same period and resolving every difference, so that your book balance and your bank balance agree. It confirms each deposit, payment, and fee is recorded once and correctly, and that timing differences are accounted for." },
      { q: "How often should you reconcile a bank account?", a: "Monthly &mdash; every bank and credit-card account, as soon as the statement closes. Reconciling monthly keeps errors small and easy to find; letting it lapse for months is how books drift out of trust and a cleanup becomes necessary." },
      { q: "What is the difference between the book balance and the bank balance?", a: "The book balance is everything you have recorded; the bank balance is only what has cleared the bank. The difference between them is timing &mdash; outstanding checks and deposits in transit. Reconciliation explains that gap rather than forcing the two equal." },
      { q: "What happens if you don&rsquo;t reconcile your accounts?", a: "Errors compound silently. A missed, duplicated, or miscategorized transaction distorts every report built on the books &mdash; profit, cash position, and tax figures &mdash; and can hide bank errors or fraud. Unreconciled books cannot be relied on for decisions or filed from with confidence." },
      { q: "Is reconciling the same as categorizing transactions?", a: "No. Categorizing assigns each transaction to the right account; reconciling proves the complete set of transactions matches the bank for the period. You can categorize every transaction and still be unreconciled if something is missing, duplicated, or recorded at the wrong amount." },
      { q: "Does QuickBooks reconcile bank accounts automatically?", a: "No. QuickBooks Online and Desktop both provide a reconcile tool and bank feeds that speed the work, but reconciliation still requires a person to confirm the statement matches, resolve discrepancies, and close the period. Bank-feed matching is not the same as a completed reconciliation." },
    ],
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "chart-of-accounts",
    term: "Chart of accounts",
    title: "Chart of Accounts — Definition, Structure & Why It Matters · TechBrot",
    description: "The chart of accounts (COA): the structured list of every account your books use to record transactions. What it is, how it's organized, and why a well-designed COA makes every report accurate. By Certified QuickBooks ProAdvisors.",
    shortDef: "The structured list of every account your books use to record money &mdash; assets, liabilities, equity, income, and expenses &mdash; the framework every transaction and every report is built on.",
    blurb: "The structured list of every account your books record into &mdash; the framework every report is built on.",
    definition: [
      "The <strong>chart of accounts</strong> (COA) is the organized list of every account your accounting system uses to categorize transactions. Each account belongs to one of five types &mdash; assets, liabilities, equity, income, and expenses &mdash; and every transaction you record posts to one or more of them. It is the framework the entire ledger and every financial statement are built on.",
      "A good chart of accounts is specific enough to answer the questions a business actually asks (which products earn, where money leaks) without being so granular that bookkeeping becomes guesswork about where things go.",
    ],
    why: {
      heading: "Get it wrong and every report inherits the problem.",
      paras: [
        "The chart of accounts is decided once and lived with for years. If it is built badly &mdash; the generic default left untouched, income lumped into one line, expenses scattered across overlapping accounts &mdash; every report that draws on it is harder to read and less trustworthy, and re-categorizing a year of history to fix it is a real project.",
        "This is why <a href=\"/quickbooks/setup/\">QuickBooks setup</a> starts with chart-of-accounts design, and why a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> often begins by rebuilding or consolidating a COA that grew without a plan. Industry matters too &mdash; a contractor, a law firm, and an e-commerce seller each need a different structure.",
      ],
    },
    how: null,
    clarify: {
      heading: "Chart of accounts vs. general ledger.",
      paras: [
        "They&rsquo;re often confused. The <strong>chart of accounts</strong> is the <em>list</em> of accounts &mdash; the categories. The <a href=\"/glossary/general-ledger/\">general ledger</a> is the <em>record of every transaction</em> posted into those accounts. The COA defines the buckets; the ledger is what actually went into each one.",
      ],
    },
    related: [
      { href: "/quickbooks/setup/", title: "QuickBooks setup", blurb: "A correct chart-of-accounts design is the foundation of a setup done right &mdash; before the first transaction is entered." },
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "A messy or generic COA is a common cleanup finding; consolidating it makes every future report clearer." },
      { href: "/accounting/industries/", title: "Industry-specific accounting", blurb: "The right COA structure depends on the industry &mdash; the accounts a contractor needs aren&rsquo;t the accounts a law firm needs." },
    ],
    call: { title: "Working from a generic chart of accounts?", sub: "A Certified ProAdvisor reviews how your books are structured and whether the COA is helping or hiding the picture &mdash; with a written fixed-fee scope to redesign it if needed." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "double-entry-accounting",
    term: "Double-entry accounting",
    title: "Double-Entry Accounting — Debits, Credits & Why It Works · TechBrot",
    description: "Double-entry accounting: every transaction recorded as equal debits and credits so the books always balance. What it is, how debits and credits work, and why it's the foundation of reliable books. By Certified QuickBooks ProAdvisors.",
    shortDef: "The method behind every real accounting system: each transaction is recorded in at least two accounts &mdash; equal debits and credits &mdash; so the books always balance and errors surface.",
    blurb: "Every transaction recorded as equal debits and credits, so the books always balance &mdash; the foundation of reliable accounting.",
    definition: [
      "<strong>Double-entry accounting</strong> is the method underlying every credible accounting system, including QuickBooks. Every transaction is recorded in at least two accounts: one or more debits and one or more credits, equal in total. Because the two sides always match, the accounting equation &mdash; assets = liabilities + equity &mdash; stays in balance after every entry.",
      "Debits and credits are not &ldquo;good&rdquo; and &ldquo;bad&rdquo; or &ldquo;plus&rdquo; and &ldquo;minus&rdquo;; they are the two sides of every transaction. A debit increases assets and expenses and decreases liabilities, equity, and income; a credit does the reverse.",
    ],
    why: {
      heading: "Why it&rsquo;s worth understanding.",
      paras: [
        "Double entry is a built-in error check. If the debits and credits don&rsquo;t agree, something is wrong &mdash; the books literally won&rsquo;t balance. That self-checking property is why every reliable financial statement traces back to it, and why &ldquo;the books don&rsquo;t balance&rdquo; is a fixable, locatable problem rather than a vague one.",
        "QuickBooks hides most of the debits and credits behind forms &mdash; you enter an invoice, it posts the entries &mdash; but the structure is still there underneath, which is why a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> can always trace a wrong balance back to the specific entries that caused it.",
      ],
    },
    how: {
      paras: [
        "The clearest way to see double entry is a T-account: debits on the left, credits on the right, for a single account over a period. When the period is reconciled, the two sides tie to a balance you can trust &mdash; the same logic the whole ledger runs on.",
      ],
      diagram: "figure-taccount",
    },
    clarify: null,
    related: [
      { href: "/glossary/general-ledger/", title: "General ledger", blurb: "The complete record of every double-entry transaction, account by account." },
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "How the cash side of the ledger is proven against the bank each period." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Real bookkeeping is double-entry done correctly and consistently, month after month." },
    ],
    call: { title: "Books that won&rsquo;t balance?", sub: "If the numbers don&rsquo;t tie, double-entry makes the cause locatable &mdash; a Certified ProAdvisor finds the entries behind it and scopes the fix in writing." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "general-ledger",
    term: "General ledger",
    title: "General Ledger — Definition & Role in Your Books · TechBrot",
    description: "The general ledger (GL): the complete record of every transaction posted to every account. What it is, how it relates to the chart of accounts and financial statements, and why it's the source of truth. By Certified QuickBooks ProAdvisors.",
    shortDef: "The complete record of every transaction your business has posted, organized by account &mdash; the source the trial balance and every financial statement are produced from.",
    blurb: "The complete record of every transaction posted to every account &mdash; the books&rsquo; source of truth.",
    definition: [
      "The <strong>general ledger</strong> (GL) is the master record of every transaction a business has posted, organized by account. Where the <a href=\"/glossary/chart-of-accounts/\">chart of accounts</a> is the list of accounts, the general ledger is what actually went into each one &mdash; every debit and credit, dated and described.",
      "Every financial statement &mdash; the profit and loss, the balance sheet &mdash; is produced from the general ledger by summarizing its accounts. It is, in the literal sense, the books.",
    ],
    why: {
      heading: "Why the ledger is where answers live.",
      paras: [
        "When a number on a report looks wrong, the answer is always in the general ledger: you drill from the summary figure into the individual transactions behind it. A clean, well-categorized GL makes that a two-minute lookup; a messy one makes every question an investigation.",
        "This is why <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> work is ultimately ledger work &mdash; correcting the entries so the summaries above them become trustworthy &mdash; and why a reliable monthly close depends on a ledger that ties out.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/chart-of-accounts/", title: "Chart of accounts", blurb: "The list of accounts the ledger posts into." },
      { href: "/glossary/double-entry-accounting/", title: "Double-entry accounting", blurb: "The method that fills the ledger &mdash; equal debits and credits for every transaction." },
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "Cleanup is ledger work: correcting the entries so every report built on them can be trusted." },
    ],
    call: { title: "Can&rsquo;t trust what the reports say?", sub: "A Certified ProAdvisor traces your reports back into the general ledger, finds what&rsquo;s off, and scopes the correction in writing &mdash; fixed-fee." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "accrual-vs-cash-basis-accounting",
    term: "Accrual vs. cash basis accounting",
    title: "Accrual vs. Cash Basis Accounting — The Difference · TechBrot",
    description: "Accrual vs. cash basis accounting: cash records money when it moves; accrual records it when it's earned or owed. The difference, when each is required, and why it changes what your reports say. By Certified QuickBooks ProAdvisors.",
    shortDef: "Two ways to time when transactions hit your books: cash basis records money when it actually moves; accrual records it when it&rsquo;s earned or incurred &mdash; and the two can tell very different stories.",
    blurb: "Cash records money when it moves; accrual records it when earned or owed &mdash; and the choice changes what your reports say.",
    definition: [
      "<strong>Cash basis</strong> accounting records income when money is received and expenses when money is paid. <strong>Accrual basis</strong> records income when it is earned (you delivered the work or shipped the product) and expenses when they are incurred (you received the bill), regardless of when cash actually changes hands.",
      "The same business, on the same transactions, can show a very different profit for a month depending on which basis it uses &mdash; because the two methods disagree about <em>when</em> a transaction belongs to.",
    ],
    why: {
      heading: "Why it matters which one you&rsquo;re on.",
      paras: [
        "Cash basis is simpler and mirrors your bank account, which is why many small businesses start there. Accrual gives a truer picture of profitability and is required for some businesses &mdash; generally those carrying inventory or above the IRS gross-receipts threshold &mdash; and is the basis investors, lenders, and GAAP expect.",
        "QuickBooks can report on either basis from the same data, and switching the report basis changes the numbers without changing a single transaction. Getting the basis right &mdash; and reading reports on the correct one &mdash; is part of <a href=\"/quickbooks/setup/\">setup</a> and a frequent <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> correction. The choice and any change in method is a tax matter your CPA or EA confirms.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Books kept correctly on your chosen basis, reconciled and CPA-ready." },
      { href: "/quickbooks/setup/", title: "QuickBooks setup", blurb: "Setting the correct accounting method and report defaults from day one." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Reading accrual reports for real decisions &mdash; not just what hit the bank this month." },
    ],
    call: { title: "Not sure which basis your reports are on?", sub: "A Certified ProAdvisor confirms how your books are set up and whether you&rsquo;re reading the right basis for the decision in front of you. Tax-method changes are confirmed with your CPA or EA." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "catch-up-bookkeeping",
    term: "Catch-up bookkeeping",
    title: "Catch-Up Bookkeeping — What It Is vs. Cleanup · TechBrot",
    description: "Catch-up bookkeeping: bringing months or years of un-entered books current. What it is, how it differs from cleanup, and when you need it — before a tax deadline, a loan, or a sale. By Certified QuickBooks ProAdvisors.",
    shortDef: "Bringing books that are months or years behind fully up to date &mdash; entering and reconciling the backlog so the file is current and the numbers are real.",
    blurb: "Bringing months or years of un-entered books current &mdash; distinct from cleanup, which fixes books that were kept wrong.",
    definition: [
      "<strong>Catch-up bookkeeping</strong> is the work of bringing a set of books that have fallen behind fully current: entering the unrecorded transactions, reconciling each account for every missed period, and producing financial statements through to today. It is what a business needs when bookkeeping simply stopped &mdash; for a quarter, a year, or several.",
      "It is usually time-pressured: catch-up is most often triggered by a tax-filing deadline, a loan or financing application, due diligence for a sale, or an investor who needs to see real numbers.",
    ],
    why: {
      heading: "Catch-up vs. cleanup &mdash; they&rsquo;re not the same.",
      paras: [
        "<strong>Catch-up</strong> addresses books that weren&rsquo;t <em>done</em> &mdash; the work simply wasn&rsquo;t kept up. <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">Cleanup</a> addresses books that <em>were</em> done but done wrong &mdash; miscategorized, unreconciled, or structurally broken. Many engagements are both: you catch up the missing months and clean up the periods that were entered incorrectly.",
        "Either way the standard is the same: every account reconciled, every transaction categorized, statements that tie out and that a CPA can file from.",
      ],
    },
    how: {
      paras: [
        "Catch-up runs newest-clear-period backward or oldest-forward depending on the deadline, reconciling each period against its statements as it goes &mdash; the same reconciliation discipline as ongoing bookkeeping, applied to the backlog until the file reaches today.",
      ],
      diagram: "figure-cleanup-beforeafter",
    },
    clarify: null,
    related: [
      { href: "/accounting/bookkeeping/catch-up-bookkeeping/", title: "Catch-up bookkeeping service", blurb: "Fixed-fee catch-up scoped to how far behind you are and your deadline." },
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "When the entered periods were also done wrong, cleanup runs alongside the catch-up." },
      { href: "/find-an-accountant/new-york/urgent-bookkeeping/", title: "Urgent bookkeeping", blurb: "Catch-up against a hard date &mdash; triaged for what&rsquo;s achievable in the time you have." },
    ],
    call: { title: "Behind on the books with a deadline coming?", sub: "A Certified ProAdvisor scopes the catch-up against your deadline and tells you honestly what&rsquo;s achievable &mdash; fixed-fee, in writing. We bring the books current; your CPA files." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "month-end-close",
    term: "Month-end close",
    title: "Month-End Close — What It Is & Why It Matters · TechBrot",
    description: "The month-end close: the routine of finalizing a month's books so the numbers are complete and trustworthy. What it includes, why it matters, and how it produces reports you can run a business on. By Certified QuickBooks ProAdvisors.",
    shortDef: "The monthly routine of finalizing the books &mdash; reconciling every account, recording what&rsquo;s missing, and locking the period &mdash; so the month&rsquo;s numbers are complete and can be trusted.",
    blurb: "The monthly routine that finalizes the books so the period&rsquo;s numbers are complete and trustworthy.",
    definition: [
      "The <strong>month-end close</strong> is the disciplined routine of finishing a month&rsquo;s books once the month is over: reconciling every bank and credit-card account, recording any transactions still missing, posting recurring entries, reviewing the categorization, and confirming the financial statements tie out. When the close is done, the month is &ldquo;closed&rdquo; &mdash; complete and not expected to change.",
      "It is the difference between books that are merely entered and books that are <em>finished</em> &mdash; a real close is what turns raw transactions into reports a decision can rest on.",
    ],
    why: {
      heading: "Why a real close matters.",
      paras: [
        "Without a close, numbers drift: a late transaction lands in last month, a reconciliation never gets finalized, and the reports quietly stop matching reality. A consistent monthly close keeps each period final and comparable, so trends mean something and surprises surface early instead of at tax time.",
        "It is the core of <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> and the cadence <a href=\"/accounting/advisory/\">advisory</a> work depends on &mdash; you can&rsquo;t advise on numbers that aren&rsquo;t closed.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/accounting/bookkeeping/monthly-bookkeeping/", title: "Monthly bookkeeping", blurb: "A real month-end close every month, with a financial package delivered on a schedule." },
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "The reconciliation step that anchors every close." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Decisions built on closed, reconciled months &mdash; not mid-month guesses." },
    ],
    call: { title: "Books that never quite get &lsquo;closed&rsquo;?", sub: "A Certified ProAdvisor puts a real monthly close in place &mdash; reconciled, finalized, delivered on a schedule &mdash; on a written fixed fee." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },
];
