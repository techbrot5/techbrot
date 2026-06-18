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

  {
    slug: "accounts-receivable",
    term: "Accounts receivable",
    title: "Accounts Receivable (AR) — Definition & Why It Matters · TechBrot",
    description: "Accounts receivable (AR): the money customers owe you for work delivered but not yet paid. What it is, how it sits on the balance sheet, and why aging AR is a cash-flow early-warning. By Certified QuickBooks ProAdvisors.",
    shortDef: "The money your customers owe you for goods or services already delivered but not yet paid &mdash; an asset on your balance sheet until the cash arrives.",
    blurb: "Money customers owe you for work already delivered &mdash; an asset until it&rsquo;s collected.",
    definition: [
      "<strong>Accounts receivable</strong> (AR) is the total amount your customers owe you for goods or services you have already delivered or invoiced but not yet been paid for. It is recorded as a current asset on the balance sheet, because it represents cash you expect to collect.",
      "On accrual-basis books, revenue is recorded when you invoice (earn) it &mdash; which creates the receivable &mdash; and the receivable clears when the customer pays. AR is tracked per customer and per invoice, and grouped by how overdue it is in an &ldquo;aging&rdquo; report.",
    ],
    why: {
      heading: "AR aging is a cash-flow early-warning.",
      paras: [
        "A growing or aging accounts-receivable balance is one of the earliest signals of a cash problem: the business is profitable on paper but the money is stuck in unpaid invoices. The AR aging report &mdash; current, 1&ndash;30, 31&ndash;60, 61&ndash;90, 90+ days &mdash; tells you exactly which customers are slow and how much cash is tied up.",
        "Accurate AR depends on accurate books: if invoices and payments aren&rsquo;t recorded and matched correctly, the aging report lies. That&rsquo;s why AR clean-up &mdash; matching payments to invoices, writing off truly uncollectible balances &mdash; is a common part of a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>.",
      ],
    },
    how: null,
    clarify: {
      heading: "Accounts receivable vs. accounts payable.",
      paras: [
        "They are mirror images. <strong>Accounts receivable</strong> is money owed <em>to</em> you (an asset). <a href=\"/glossary/accounts-payable/\">Accounts payable</a> is money <em>you</em> owe others (a liability). One customer&rsquo;s receivable is its vendor&rsquo;s payable.",
      ],
    },
    related: [
      { href: "/glossary/accounts-payable/", title: "Accounts payable", blurb: "The mirror of AR &mdash; money you owe vendors." },
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where AR sits as a current asset." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Invoices and payments recorded and matched so the AR aging report is true." },
    ],
    call: { title: "Is your AR aging report trustworthy?", sub: "A Certified ProAdvisor checks whether payments are matched to invoices and what&rsquo;s really collectible &mdash; with a written fixed-fee scope to clean it up." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "accounts-payable",
    term: "Accounts payable",
    title: "Accounts Payable (AP) — Definition & Why It Matters · TechBrot",
    description: "Accounts payable (AP): the money your business owes vendors for bills received but not yet paid. What it is, how it sits on the balance sheet, and why managing AP protects cash and credit. By Certified QuickBooks ProAdvisors.",
    shortDef: "The money your business owes vendors and suppliers for bills received but not yet paid &mdash; a liability on your balance sheet until you settle it.",
    blurb: "Money you owe vendors for bills received but not yet paid &mdash; a liability until settled.",
    definition: [
      "<strong>Accounts payable</strong> (AP) is the total your business owes its vendors and suppliers for goods or services received and invoiced but not yet paid. It is recorded as a current liability on the balance sheet.",
      "On accrual-basis books, an expense and the payable are recorded when you receive the bill (incur the cost); the payable clears when you pay it. AP is tracked per vendor and per bill, and aged the same way receivables are.",
    ],
    why: {
      heading: "Managing AP protects cash and relationships.",
      paras: [
        "Accounts payable is a lever on cash flow: paying too early drains cash you may need; paying too late risks late fees, lost early-payment discounts, and strained vendor relationships. A clean AP aging report lets you time payments deliberately instead of reacting.",
        "It is also a common source of book errors &mdash; bills entered twice, payments not matched to bills, or expenses recorded on payment instead of on receipt &mdash; all of which distort both the expense reports and the liability balance until corrected in a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/accounts-receivable/", title: "Accounts receivable", blurb: "The mirror of AP &mdash; money owed to you." },
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where AP sits as a current liability." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Bills and payments recorded correctly so AP and your expenses are both right." },
    ],
    call: { title: "Vendor balances that don&rsquo;t look right?", sub: "A Certified ProAdvisor finds duplicate bills, unmatched payments, and timing errors in your AP &mdash; scoped in writing, fixed-fee." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "trial-balance",
    term: "Trial balance",
    title: "Trial Balance — Definition & Role in Closing the Books · TechBrot",
    description: "Trial balance: a report listing every account's ending balance to confirm total debits equal total credits. What it is, what it does and doesn't catch, and how it fits the month-end close. By Certified QuickBooks ProAdvisors.",
    shortDef: "A report listing the ending balance of every account so you can confirm total debits equal total credits &mdash; the first check that the books are internally consistent.",
    blurb: "A list of every account&rsquo;s balance confirming total debits equal total credits &mdash; the books&rsquo; internal-consistency check.",
    definition: [
      "A <strong>trial balance</strong> is a report that lists the ending balance of every account in the <a href=\"/glossary/general-ledger/\">general ledger</a> at a point in time, with debits in one column and credits in the other. Because the books are kept on <a href=\"/glossary/double-entry-accounting/\">double entry</a>, the two columns must total to the same number.",
      "It is the first thing an accountant runs when closing a period: if the columns don&rsquo;t match, something is structurally wrong and must be found before the financial statements mean anything.",
    ],
    why: {
      heading: "What it catches &mdash; and what it doesn&rsquo;t.",
      paras: [
        "A balanced trial balance proves the books are <em>internally consistent</em> &mdash; every entry had equal debits and credits. That is necessary but not sufficient: a trial balance can balance perfectly and still be wrong if a transaction was posted to the wrong account, recorded at the wrong (but equal) amount, or missed entirely.",
        "That is why a real <a href=\"/glossary/month-end-close/\">month-end close</a> goes beyond the trial balance to reconciliation and review &mdash; the trial balance confirms the math holds, reconciliation confirms it matches reality.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/month-end-close/", title: "Month-end close", blurb: "The routine the trial balance kicks off." },
      { href: "/glossary/general-ledger/", title: "General ledger", blurb: "The record the trial balance summarizes." },
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "The check that the balanced books also match the bank." },
    ],
    call: { title: "Books that won&rsquo;t balance at close?", sub: "A Certified ProAdvisor finds why the trial balance is off and corrects the underlying entries &mdash; written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "profit-and-loss-statement",
    term: "Profit and loss statement",
    title: "Profit and Loss Statement (P&L) — Definition & How to Read It · TechBrot",
    description: "The profit and loss statement (P&L / income statement): revenue minus expenses over a period, showing whether you made money. What it includes, how to read it, and how it differs from cash. By Certified QuickBooks ProAdvisors.",
    shortDef: "The report that shows revenue minus expenses over a period of time &mdash; whether the business made or lost money, and where the money came from and went.",
    blurb: "Revenue minus expenses over a period &mdash; whether you made money, and where it came from and went.",
    definition: [
      "The <strong>profit and loss statement</strong> (P&amp;L), also called the income statement, reports your revenue, your expenses, and the resulting profit or loss over a period of time &mdash; a month, a quarter, a year. In simple form: revenue &minus; cost of goods sold = gross profit; gross profit &minus; operating expenses = net profit.",
      "Unlike the <a href=\"/glossary/balance-sheet/\">balance sheet</a>, which is a snapshot at a single moment, the P&amp;L covers a span of time and resets each period.",
    ],
    why: {
      heading: "It only tells the truth if the books do.",
      paras: [
        "The P&amp;L is the report owners read most &mdash; but it is only as accurate as the bookkeeping under it. Miscategorized expenses, revenue recorded in the wrong period, or personal spending mixed into the business all distort it directly. A P&amp;L built on unreconciled books is a confident-looking guess.",
        "It also depends on which <a href=\"/glossary/accrual-vs-cash-basis-accounting/\">basis</a> you read it on: the same period can show a different profit on cash vs. accrual. Reading the P&amp;L on the right basis, with categories that map to how you actually run the business, is what makes it a decision tool rather than a tax artifact.",
      ],
    },
    how: null,
    clarify: {
      heading: "Profit is not cash.",
      paras: [
        "A profitable P&amp;L does not mean money in the bank. Profit can be tied up in unpaid <a href=\"/glossary/accounts-receivable/\">receivables</a>, inventory, or loan principal that never touches the P&amp;L. This is the single most common surprise for owners &mdash; and the reason the P&amp;L is read alongside the balance sheet and cash, not alone.",
      ],
    },
    related: [
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "The snapshot the P&L is read alongside." },
      { href: "/glossary/accrual-vs-cash-basis-accounting/", title: "Accrual vs. cash basis", blurb: "Which basis you read the P&L on changes the number." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Turning an accurate P&L into decisions, not just a report." },
    ],
    call: { title: "Does your P&amp;L match reality?", sub: "A Certified ProAdvisor checks whether your categories and basis make the P&amp;L a real decision tool &mdash; or whether a cleanup is needed first. Written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "balance-sheet",
    term: "Balance sheet",
    title: "Balance Sheet — Definition & How to Read It · TechBrot",
    description: "The balance sheet: a snapshot of what a business owns, owes, and is worth at a single moment. What it includes, why assets = liabilities + equity, and what it reveals that the P&L can't. By Certified QuickBooks ProAdvisors.",
    shortDef: "A snapshot, at a single moment, of what the business owns (assets), owes (liabilities), and is worth to its owners (equity) &mdash; where assets always equal liabilities plus equity.",
    blurb: "A point-in-time snapshot of what you own, owe, and are worth &mdash; assets = liabilities + equity.",
    definition: [
      "The <strong>balance sheet</strong> reports, at a single point in time, what a business owns (<strong>assets</strong>), what it owes (<strong>liabilities</strong>), and the difference between them, which belongs to the owners (<strong>equity</strong>). It is governed by the accounting equation: assets = liabilities + equity, which is always true on properly kept books.",
      "Where the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a> covers a span of time, the balance sheet is a snapshot &mdash; the financial position on one date.",
    ],
    why: {
      heading: "What the balance sheet reveals.",
      paras: [
        "The balance sheet answers questions the P&amp;L can&rsquo;t: how much cash you actually have, how much customers owe you (<a href=\"/glossary/accounts-receivable/\">AR</a>), how much you owe others (<a href=\"/glossary/accounts-payable/\">AP</a>) and to lenders, and what the business is worth on the books. Lenders and buyers read it first.",
        "A balance sheet that doesn&rsquo;t balance, or that carries stale balances &mdash; an old uncleared loan, negative cash, an AR balance for a customer who paid years ago &mdash; is the clearest sign the books need a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>. Real bookkeeping keeps every balance-sheet account reconciled, not just the bank.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "The over-time report the balance sheet complements." },
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "Reconciliation keeps balance-sheet accounts true, not just cash." },
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "Stale or unbalanced balance-sheet accounts are the classic cleanup finding." },
    ],
    call: { title: "Stale balances on your balance sheet?", sub: "A Certified ProAdvisor reconciles every balance-sheet account &mdash; not just the bank &mdash; and scopes the cleanup in writing, fixed-fee." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "fractional-cfo",
    term: "Fractional CFO",
    title: "Fractional CFO — What It Is & When You Need One · TechBrot",
    description: "A fractional CFO: senior financial leadership on a part-time, fixed-fee basis — forecasting, cash strategy, and decision support without a full-time hire. What it is, what it isn't, and when it fits. By Certified QuickBooks ProAdvisors.",
    shortDef: "Senior financial leadership &mdash; forecasting, cash strategy, KPIs, and decision support &mdash; on a part-time, fixed-fee basis, for businesses that need CFO judgment but not a full-time CFO salary.",
    blurb: "Senior financial leadership part-time &mdash; the forecasting and judgment a full-time CFO gives, without the full-time cost.",
    definition: [
      "A <strong>fractional CFO</strong> is an experienced financial executive who works with a business part-time &mdash; a fraction of a full-time role &mdash; providing the forward-looking financial leadership a Chief Financial Officer would, without the cost of a full-time hire. The work is forward-looking: cash-flow forecasting, budgeting, pricing and margin analysis, scenario planning, KPI reporting, and financial decision support.",
      "It is distinct from bookkeeping, which records what already happened, and from tax, which a CPA or EA handles. A fractional CFO uses the books to help decide what happens next.",
    ],
    why: {
      heading: "When a fractional CFO fits.",
      paras: [
        "Most small businesses don&rsquo;t need &mdash; or can&rsquo;t justify &mdash; a full-time CFO, but they do hit decisions where bookkeeping alone isn&rsquo;t enough: a growth inflection, a cash crunch, a financing round, a pricing overhaul, a possible sale. A fractional CFO supplies the senior judgment for those moments on a fixed monthly fee.",
        "It only works on a foundation of accurate, closed books &mdash; forecasting on unreconciled data is guesswork. That is why advisory sits on top of solid <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>: automation handles the data entry; the fractional CFO handles the judgment.",
      ],
    },
    how: null,
    clarify: {
      heading: "Fractional CFO vs. bookkeeper vs. controller.",
      paras: [
        "A <strong>bookkeeper</strong> records and reconciles transactions. A <strong>controller</strong> owns the accuracy of the books and the close. A <strong>fractional CFO</strong> is forward-looking &mdash; strategy, forecasting, and decisions. Many small businesses need the first two consistently and the third at key moments.",
      ],
    },
    related: [
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Forward-looking financial leadership on a fixed fee." },
      { href: "/accounting/bookkeeping/monthly-bookkeeping/", title: "Monthly bookkeeping", blurb: "The accurate, closed books advisory has to sit on." },
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "One of the reports a fractional CFO reads forward, not just back." },
    ],
    call: { title: "Facing a decision the books alone can&rsquo;t answer?", sub: "A Certified ProAdvisor talks through whether fractional-CFO advisory fits your situation &mdash; honest about when you need it and when you don&rsquo;t." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "sales-tax-nexus",
    term: "Sales tax nexus",
    title: "Sales Tax Nexus — Definition, Economic Nexus & Why It Matters · TechBrot",
    description: "Sales tax nexus: the connection to a state that requires you to collect and remit its sales tax. Physical vs. economic nexus, the post-Wayfair thresholds, and why it's a top compliance risk. By Certified QuickBooks ProAdvisors.",
    shortDef: "The connection between your business and a state that legally obligates you to register, collect, and remit that state&rsquo;s sales tax &mdash; created by physical presence or, since 2018, by economic activity alone.",
    blurb: "The connection to a state that requires you to collect its sales tax &mdash; physical or, post-Wayfair, economic.",
    definition: [
      "<strong>Sales tax nexus</strong> is the legal connection between a business and a state that requires the business to register for, collect, and remit that state&rsquo;s sales tax. Without nexus in a state, you generally have no obligation to collect its sales tax; with nexus, you do.",
      "Nexus comes in two main forms. <strong>Physical nexus</strong> is created by a physical presence &mdash; an office, employees, inventory (including inventory held in a marketplace&rsquo;s warehouse), or sometimes traveling sales staff. <strong>Economic nexus</strong>, established by the U.S. Supreme Court&rsquo;s 2018 <em>South Dakota v. Wayfair</em> decision, is created by sales volume alone &mdash; exceeding a state&rsquo;s dollar or transaction threshold even with no physical presence there.",
    ],
    why: {
      heading: "Why nexus is a top compliance risk.",
      paras: [
        "Since <em>Wayfair</em>, a business selling online can trigger sales-tax obligations in dozens of states without ever setting foot in them &mdash; each state setting its own threshold (commonly $100,000 in sales or 200 transactions, though specifics vary and change). Many growing businesses cross these thresholds without realizing it, and unremitted sales tax plus penalties can accumulate quietly into a serious liability.",
        "Determining where you have nexus, registering, configuring QuickBooks to charge the right rates, and filing on each state&rsquo;s schedule is operational work TechBrot does in your books. The legal determination of nexus and any tax filings or controversy are confirmed with your CPA, EA, or a sales-tax specialist &mdash; we keep the books and the collection right; the licensed professional advises and files where required.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/accounting/sales-tax-compliance/", title: "Sales tax services", blurb: "Sales tax set up, collected, and reconciled in your books." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Sales-tax liability tracked and reconciled every month." },
      { href: "/accounting/industries/ecommerce/", title: "E-commerce accounting", blurb: "Where multi-state economic nexus bites hardest." },
    ],
    call: { title: "Selling into multiple states?", sub: "A Certified ProAdvisor reviews where your sales may be creating nexus and gets your books and collection right &mdash; coordinating with your CPA on the filings. Written fixed-fee scope." },
    faq: [
      { q: "What is sales tax nexus?", a: "Sales tax nexus is the connection between your business and a state that legally requires you to register, collect, and remit that state&rsquo;s sales tax. It is created either by physical presence in the state or, since 2018, by economic activity above the state&rsquo;s threshold." },
      { q: "What is the difference between physical and economic nexus?", a: "Physical nexus comes from a physical presence &mdash; an office, employees, or inventory in the state. Economic nexus comes from sales volume alone: exceeding a state&rsquo;s dollar or transaction threshold even with no physical presence there. A business can have both, in different states." },
      { q: "What did South Dakota v. Wayfair change?", a: "The 2018 Supreme Court decision in South Dakota v. Wayfair allowed states to require out-of-state sellers to collect sales tax based on economic activity alone, ending the prior rule that required a physical presence. It is why online sellers now face sales-tax obligations in many states at once." },
      { q: "What are typical economic nexus thresholds?", a: "Thresholds are set per state and commonly sit around $100,000 in sales or 200 transactions into the state in a year, but the exact dollar amount, whether transactions count, and the measurement period vary by state and change over time. Each state must be checked individually." },
      { q: "Does selling on Amazon or another marketplace create nexus?", a: "It can. Inventory stored in a marketplace&rsquo;s warehouse in a state can create physical nexus, and your sales can count toward economic nexus. Many states now have marketplace-facilitator laws that shift collection to the marketplace, but your registration and filing obligations still need to be assessed." },
      { q: "Does TechBrot determine my nexus or file my sales tax returns?", a: "TechBrot does the operational work &mdash; reviewing where sales may be creating nexus, configuring QuickBooks to collect the right rates, and reconciling the sales-tax liability in your books. The legal nexus determination and any required filings are confirmed with your CPA, EA, or a sales-tax specialist. We are an independent firm and do not provide legal or tax advice." },
    ],
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "bookkeeping-vs-accounting",
    term: "Bookkeeping vs. accounting",
    title: "Bookkeeping vs. Accounting — The Difference · TechBrot",
    description: "Bookkeeping records and reconciles transactions; accounting interprets, reports, and advises on them. The difference, where they overlap, and who you actually need. By Certified QuickBooks ProAdvisors.",
    shortDef: "Bookkeeping is the disciplined recording and reconciling of transactions; accounting is the broader work of interpreting, reporting, and advising on them. One produces the records; the other turns them into meaning.",
    blurb: "Bookkeeping records and reconciles; accounting interprets and advises &mdash; what each is, and who you need.",
    definition: [
      "<strong>Bookkeeping</strong> is the systematic, ongoing work of recording and reconciling a business&rsquo;s financial transactions &mdash; categorizing income and expenses, reconciling accounts, and keeping the books accurate and current. <strong>Accounting</strong> is the broader discipline that sits on top of it: interpreting that data, producing and analyzing financial statements, and advising on decisions, compliance, and strategy.",
      "Put simply, bookkeeping produces the records; accounting turns them into meaning. Good accounting is impossible without good bookkeeping underneath it.",
    ],
    why: {
      heading: "Why the distinction matters when you hire.",
      paras: [
        "The terms get used interchangeably, but they describe different work and different price points. Most small businesses need consistent bookkeeping every month and accounting judgment at specific moments &mdash; not a CPA doing data entry, and not a bookkeeper making tax-strategy calls.",
        "TechBrot does the bookkeeping and the operational accounting &mdash; accurate books, real monthly close, and <a href=\"/accounting/advisory/\">advisory</a> on top &mdash; and coordinates with your CPA or EA, who owns tax filing and audit. Matching the work to the right provider is how you avoid overpaying for the wrong thing.",
      ],
    },
    how: null,
    clarify: {
      heading: "Where the CPA line falls.",
      paras: [
        "Bookkeeping and operational accounting (the work in your books) is what a ProAdvisor firm like TechBrot does. Tax preparation, filing, audit, and IRS representation are regulated work that a CPA or EA does. Most businesses need both, working together &mdash; see <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs. accountant</a> for the full comparison.",
      ],
    },
    related: [
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "The recording-and-reconciling half, done right every month." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "The interpret-and-advise half, on a fixed fee." },
      { href: "/vs/bookkeeper-vs-accountant/", title: "Bookkeeper vs. accountant", blurb: "The full side-by-side, including where the CPA line falls." },
    ],
    call: { title: "Not sure which one you actually need?", sub: "A Certified ProAdvisor talks through where your books stand and whether you need bookkeeping, advisory, or to loop in a CPA &mdash; honestly, no upsell." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "cost-of-goods-sold",
    term: "Cost of goods sold",
    title: "Cost of Goods Sold (COGS) — Definition & Why Margin Depends on It · TechBrot",
    description: "Cost of goods sold (COGS): the direct cost of what you sold, subtracted from revenue to get gross profit. What counts, what doesn't, and why miscategorizing it hides your true margin. By Certified QuickBooks ProAdvisors.",
    shortDef: "The direct cost of producing the goods or services you actually sold &mdash; subtracted from revenue to get gross profit. What belongs in COGS, and what doesn&rsquo;t, decides whether your margin is real.",
    blurb: "The direct cost of what you sold &mdash; and getting it right is the difference between knowing your margin and guessing.",
    definition: [
      "<strong>Cost of goods sold</strong> (COGS) is the direct cost of producing the goods or delivering the services a business sold during a period &mdash; materials, direct labor, and other costs tied directly to the sale. It is subtracted from revenue to calculate <strong>gross profit</strong>, the first real profitability line on the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a>.",
      "The defining test is &ldquo;direct&rdquo;: a cost belongs in COGS if it rises and falls with what you sell. Rent, software, and admin salaries are operating expenses, not COGS, because you&rsquo;d pay them whether or not you made a sale.",
    ],
    why: {
      heading: "Miscategorized COGS hides your margin.",
      paras: [
        "Gross margin (gross profit &divide; revenue) is one of the most important numbers a business watches &mdash; and it&rsquo;s only meaningful if COGS is drawn in the right place consistently. Lumping operating expenses into COGS, or scattering true direct costs into overhead, makes the margin look better or worse than it is and breaks period-to-period comparison.",
        "Getting the COGS line right &mdash; and consistent &mdash; is a frequent <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> correction and depends on a <a href=\"/glossary/chart-of-accounts/\">chart of accounts</a> built for how the business actually earns.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "Where COGS produces gross profit." },
      { href: "/glossary/chart-of-accounts/", title: "Chart of accounts", blurb: "A COA that puts direct costs in COGS and overhead in operating expenses." },
      { href: "/accounting/industries/", title: "Industry-specific accounting", blurb: "What counts as COGS differs by industry &mdash; a contractor, a manufacturer, and an agency draw the line differently." },
    ],
    call: { title: "Is your gross margin telling the truth?", sub: "A Certified ProAdvisor checks whether your COGS is drawn correctly and consistently &mdash; with a written fixed-fee scope to fix it if not." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "cash-flow-statement",
    term: "Cash flow statement",
    title: "Cash Flow Statement — Definition & Why Profit Isn't Cash · TechBrot",
    description: "The cash flow statement: the third core financial statement, showing actual cash in and out across operating, investing, and financing activities. What it reveals that the P&L can't. By Certified QuickBooks ProAdvisors.",
    shortDef: "The third core financial statement &mdash; it tracks the actual cash that moved in and out over a period, across operating, investing, and financing activities, and explains the gap between profit and the bank balance.",
    blurb: "Actual cash in and out over a period &mdash; the statement that explains &lsquo;profitable but broke.&rsquo;",
    definition: [
      "The <strong>cash flow statement</strong> (or statement of cash flows) is the third core financial statement, alongside the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a> and the <a href=\"/glossary/balance-sheet/\">balance sheet</a>. It reports the actual cash that moved into and out of the business over a period, grouped into three activities: operating (the core business), investing (buying or selling assets), and financing (loans, owner contributions, distributions).",
      "Where the P&amp;L can show profit on accrual timing, the cash flow statement shows what actually hit the bank &mdash; reconciling net income to the real change in cash.",
    ],
    why: {
      heading: "It explains &lsquo;profitable but broke.&rsquo;",
      paras: [
        "Many businesses are surprised to be profitable on the P&amp;L yet short on cash. The cash flow statement is where that gap becomes visible: profit tied up in unpaid <a href=\"/glossary/accounts-receivable/\">receivables</a>, inventory, loan principal repayments, or owner draws &mdash; none of which show on the P&amp;L the way they hit the bank.",
        "Lenders and investors read it closely, and it is the foundation of cash-flow forecasting &mdash; core <a href=\"/accounting/advisory/\">advisory and fractional-CFO</a> work. It only works on accurate, reconciled books.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "Profit on accrual timing &mdash; which the cash flow statement reconciles to real cash." },
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where the cash, receivables, and debt that drive cash flow live." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Cash-flow forecasting built on the statement of cash flows." },
    ],
    call: { title: "Profitable on paper but cash is tight?", sub: "A Certified ProAdvisor reads your cash flow against your P&amp;L to find where the money actually goes &mdash; and what to do about it." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "depreciation",
    term: "Depreciation",
    title: "Depreciation — Definition & How It Affects Your Books · TechBrot",
    description: "Depreciation: spreading the cost of a long-lived asset over its useful life instead of expensing it at once. What it is, why it's a non-cash expense, and where book and tax depreciation differ. By Certified QuickBooks ProAdvisors.",
    shortDef: "The accounting method that spreads the cost of a long-lived asset across the years it&rsquo;s used, rather than expensing it all in the year of purchase &mdash; a non-cash expense that lowers profit without touching cash.",
    blurb: "Spreading an asset&rsquo;s cost over its useful life &mdash; a non-cash expense that lowers profit, not cash.",
    definition: [
      "<strong>Depreciation</strong> is the accounting method of allocating the cost of a tangible long-lived asset &mdash; equipment, vehicles, machinery &mdash; over the years it is expected to be used, instead of recording the whole cost as an expense in the year you bought it. Each period takes a portion as a depreciation expense.",
      "It is a <strong>non-cash</strong> expense: it reduces reported profit and the asset&rsquo;s book value (via accumulated depreciation on the <a href=\"/glossary/balance-sheet/\">balance sheet</a>), but no cash leaves the business when it is recorded &mdash; the cash left when you bought the asset.",
    ],
    why: {
      heading: "Where it shows up &mdash; and where the CPA takes over.",
      paras: [
        "Depreciation matters because it affects both profit (a recurring expense on the P&amp;L) and the balance sheet (asset value declining over time). Booked correctly, it keeps both statements honest; ignored, it overstates both profit and asset value.",
        "Importantly, <strong>book depreciation and tax depreciation are not the same</strong>. The tax rules &mdash; Section 179 expensing, bonus depreciation, MACRS schedules &mdash; are the domain of your CPA or EA, who sets the tax method and amounts. TechBrot records depreciation in your books to match what your tax professional directs; we keep the books right, they make the tax call.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where accumulated depreciation reduces asset value." },
      { href: "/glossary/journal-entry/", title: "Journal entry", blurb: "Depreciation is typically recorded as a recurring adjusting journal entry." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Depreciation booked in coordination with your CPA&rsquo;s tax schedule." },
    ],
    call: { title: "Fixed assets not on the books correctly?", sub: "A Certified ProAdvisor sets up asset and depreciation tracking in your books to match your CPA&rsquo;s schedule &mdash; written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "certified-quickbooks-proadvisor",
    term: "Certified QuickBooks ProAdvisor",
    title: "Certified QuickBooks ProAdvisor — What It Is (and Isn't) · TechBrot",
    description: "A Certified QuickBooks ProAdvisor: an accountant or bookkeeper who passed Intuit's QuickBooks certification. What the credential means, what it doesn't (it's not Intuit affiliation, not a CPA), and how to verify it. By Certified QuickBooks ProAdvisors.",
    shortDef: "An accountant or bookkeeper who has completed Intuit&rsquo;s training and passed its certification exams on a QuickBooks product. It signals product fluency &mdash; not Intuit affiliation, and not a CPA license.",
    blurb: "What the ProAdvisor credential means &mdash; and what it doesn&rsquo;t (it&rsquo;s not Intuit affiliation, not a CPA).",
    definition: [
      "A <strong>Certified QuickBooks ProAdvisor</strong> is an accountant or bookkeeper who has completed Intuit&rsquo;s ProAdvisor training and passed its certification exam on a specific QuickBooks product &mdash; Online, Desktop, Enterprise, or Payroll. Certifications require annual recertification to stay current.",
      "The credential signals genuine, tested fluency in the software. It does <strong>not</strong> mean the holder is employed by, affiliated with, or endorsed by Intuit, and it is not a CPA license or authorization to file taxes. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification a firm holds from Intuit &mdash; nothing more, and nothing less.",
    ],
    why: {
      heading: "What it tells you about a firm &mdash; and what it doesn&rsquo;t.",
      paras: [
        "Certification confirms product knowledge, but it doesn&rsquo;t guarantee firm-level depth, real engagement experience, or business judgment &mdash; those come from a track record, not an exam. A strong ProAdvisor firm pairs the certification with operational experience, honest scope boundaries (bookkeeping and operational accounting, not tax filing), and an aligned engagement model.",
        "TechBrot is an independent firm of Certified QuickBooks ProAdvisors &mdash; certified across QuickBooks Online, Desktop, Enterprise, and Payroll, verifiable on Intuit&rsquo;s public directory, and not affiliated with Intuit. See the <a href=\"/quickbooks/proadvisor-team/\">ProAdvisor team</a> and <a href=\"/about/\">about</a>.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/quickbooks/proadvisor-team/", title: "The ProAdvisor team", blurb: "TechBrot&rsquo;s certifications and how the work is staffed." },
      { href: "/about/", title: "About TechBrot", blurb: "An independent ProAdvisor firm &mdash; not Intuit." },
      { href: "/vs/bookkeeper-vs-accountant/", title: "Bookkeeper vs. accountant", blurb: "Where a ProAdvisor sits relative to a CPA." },
    ],
    call: { title: "Want to verify a ProAdvisor&rsquo;s credentials?", sub: "Active ProAdvisors are listed on Intuit&rsquo;s public Find-a-ProAdvisor directory. A Certified ProAdvisor at TechBrot can walk you through verifying any firm&rsquo;s certifications, including ours." },
    faq: [
      { q: "What is a Certified QuickBooks ProAdvisor?", a: "A Certified QuickBooks ProAdvisor is an accountant or bookkeeper who has completed Intuit&rsquo;s training and passed its certification exam on a QuickBooks product (Online, Desktop, Enterprise, or Payroll), with annual recertification. It signals tested fluency in the software." },
      { q: "Does being a ProAdvisor mean a firm is affiliated with Intuit?", a: "No. The ProAdvisor credential is a certification a firm holds from Intuit &mdash; it does not mean the firm is employed by, affiliated with, sponsored by, or endorsed by Intuit. TechBrot is an independent firm and is not affiliated with Intuit Inc." },
      { q: "Is a Certified QuickBooks ProAdvisor the same as a CPA?", a: "No. A ProAdvisor is certified by Intuit on QuickBooks products; a CPA is licensed by a state board to provide tax filing, audit, and attestation. They cover different work, and many businesses need both. ProAdvisor certification alone does not authorize tax filing." },
      { q: "Can a ProAdvisor file my business tax return?", a: "Not on the basis of the ProAdvisor credential alone. Filing business tax returns is regulated work requiring a CPA or EA. TechBrot keeps CPA-ready books and coordinates with your CPA or EA, who files." },
      { q: "How do I verify a ProAdvisor&rsquo;s certification?", a: "Active ProAdvisors appear on Intuit&rsquo;s public Find-a-ProAdvisor directory with their certification levels, firm, and contact details. Certifications that aren&rsquo;t current won&rsquo;t appear. A firm that can&rsquo;t or won&rsquo;t provide verification is a negative signal." },
      { q: "What QuickBooks products can a ProAdvisor be certified in?", a: "Intuit offers separate certifications for QuickBooks Online, QuickBooks Desktop, QuickBooks Enterprise, and QuickBooks Payroll. A firm may hold one or several; TechBrot&rsquo;s team is certified across all four core products." },
    ],
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "retained-earnings",
    term: "Retained earnings",
    title: "Retained Earnings — Definition & Where It Comes From · TechBrot",
    description: "Retained earnings: the cumulative profit a business has kept rather than distributed to owners. What it is, how QuickBooks rolls income into it at year-end, and why a wrong balance signals a cleanup. By Certified QuickBooks ProAdvisors.",
    shortDef: "The cumulative net profit a business has kept &mdash; not paid out to owners &mdash; since it began. An equity account on the balance sheet that each year&rsquo;s profit rolls into.",
    blurb: "Cumulative profit the business has kept &mdash; an equity account each year&rsquo;s net income rolls into.",
    definition: [
      "<strong>Retained earnings</strong> is the running total of all the net profit a business has earned and kept &mdash; rather than distributed to its owners &mdash; since it started. It is an equity account on the <a href=\"/glossary/balance-sheet/\">balance sheet</a>, part of what the business is worth to its owners.",
      "At the end of each fiscal year, the period&rsquo;s net income (from the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a>) closes into retained earnings, and the P&amp;L resets to zero for the new year. QuickBooks does this roll-forward automatically.",
    ],
    why: {
      heading: "A wrong retained-earnings balance is a red flag.",
      paras: [
        "Because retained earnings accumulates every year&rsquo;s result, errors compound there: a prior-period correction posted to the wrong place, owner draws miscategorized as expenses, or a botched year-end close can leave retained earnings wrong &mdash; and since it carries forward forever, the error follows the books indefinitely until found.",
        "An unexplained or moving retained-earnings balance is a classic signal the books need a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, because it usually means prior periods weren&rsquo;t closed cleanly.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where retained earnings sits, in equity." },
      { href: "/glossary/month-end-close/", title: "Month-end close", blurb: "Clean closes are what keep retained earnings correct over time." },
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "A wrong retained-earnings balance is a frequent cleanup finding." },
    ],
    call: { title: "Retained earnings that don&rsquo;t make sense?", sub: "A Certified ProAdvisor traces the balance back through your closes and corrections to find why it&rsquo;s off &mdash; written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "deferred-revenue",
    term: "Deferred revenue",
    title: "Deferred Revenue — Definition & Why It's a Liability · TechBrot",
    description: "Deferred revenue (unearned revenue): money collected before the work is delivered. Why it's a liability, not income, until earned — and why recording it wrong overstates profit. By Certified QuickBooks ProAdvisors.",
    shortDef: "Money you&rsquo;ve been paid before you&rsquo;ve delivered the work &mdash; a liability, not revenue, until it&rsquo;s earned. Recognized as income only as you deliver.",
    blurb: "Money collected before the work is delivered &mdash; a liability until earned, not income on receipt.",
    definition: [
      "<strong>Deferred revenue</strong> (also called unearned revenue) is money a business has collected for goods or services it has not yet delivered. Under <a href=\"/glossary/accrual-vs-cash-basis-accounting/\">accrual accounting</a>, it is recorded as a <em>liability</em> &mdash; an obligation to deliver &mdash; not as revenue. It becomes revenue only as the work is performed.",
      "It is common wherever customers pay up front: annual subscriptions, retainers, prepaid services, deposits, and memberships.",
    ],
    why: {
      heading: "Booking it as income overstates profit.",
      paras: [
        "If a year&rsquo;s prepaid subscription is recorded as revenue the day it&rsquo;s collected, that month looks far more profitable than it is and the following eleven months look worse &mdash; and the business may owe tax on income it hasn&rsquo;t truly earned. Recognizing deferred revenue correctly, over the delivery period, keeps each period honest.",
        "Handling deferred revenue properly &mdash; recording the liability and recognizing it on schedule &mdash; is part of accurate accrual <a href=\"/accounting/bookkeeping/\">bookkeeping</a> and a common correction in a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> for subscription and service businesses.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/accrual-vs-cash-basis-accounting/", title: "Accrual vs. cash basis", blurb: "Deferred revenue only exists on accrual-basis books." },
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where deferred revenue sits as a current liability." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Prepayments recorded and recognized on schedule, period by period." },
    ],
    call: { title: "Collecting payment up front?", sub: "A Certified ProAdvisor sets up deferred-revenue tracking so your monthly profit reflects what you&rsquo;ve actually earned &mdash; written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "opening-balance",
    term: "Opening balance",
    title: "Opening Balance — Definition & Why It Matters in QuickBooks · TechBrot",
    description: "Opening balance: the starting balance of an account when it's first entered into the books or at the start of a period. Why wrong opening balances break migrations and trigger cleanups. By Certified QuickBooks ProAdvisors.",
    shortDef: "The balance of an account at the moment it&rsquo;s first entered into the books &mdash; or at the start of a new period. Everything that follows is built on it, so if it&rsquo;s wrong, everything after inherits the error.",
    blurb: "An account&rsquo;s starting balance &mdash; the foundation everything else is built on, and a top cause of wrong books after a migration.",
    definition: [
      "An <strong>opening balance</strong> is the starting balance of an account at the point it is first set up in the books, or carried into the start of a new accounting period. When you add a bank account, a loan, or a credit card to QuickBooks, its opening balance is what was in it on the start date.",
      "Opening balances are the foundation the rest of the ledger is built on: every subsequent transaction adjusts the balance up or down from that starting point.",
    ],
    why: {
      heading: "Wrong opening balances break the whole file.",
      paras: [
        "Because everything builds on them, an incorrect opening balance throws off every period that follows &mdash; the account never reconciles, and the error is easy to miss because the day-to-day transactions all look fine. It is one of the most common reasons <a href=\"/quickbooks/migration/balances-wrong-after-conversion/\">balances come out wrong after a QuickBooks migration</a> and a frequent <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> finding.",
        "Getting opening balances right &mdash; entered against a real, reconciled starting point &mdash; is foundational work in any <a href=\"/quickbooks/setup/\">setup</a> or migration; skipping it is what turns a quick conversion into months of unexplained discrepancies.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/quickbooks/migration/balances-wrong-after-conversion/", title: "Balances wrong after migration", blurb: "Bad opening balances are a leading cause." },
      { href: "/quickbooks/setup/", title: "QuickBooks setup", blurb: "Opening balances entered against a real, reconciled starting point." },
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "An account can&rsquo;t reconcile if its opening balance is wrong." },
    ],
    call: { title: "An account that never reconciles?", sub: "A Certified ProAdvisor checks whether the opening balance is the culprit and corrects it against your real starting point &mdash; written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "1099-vs-w2",
    term: "1099 vs. W-2",
    title: "1099 vs. W-2 — Contractor vs. Employee Classification · TechBrot",
    description: "1099 vs. W-2: the difference between an independent contractor and an employee — withholding, taxes, control, and the real penalties for misclassification. By Certified QuickBooks ProAdvisors.",
    shortDef: "The two ways a worker is classified for tax and payroll: a W-2 employee (you withhold and pay employer taxes) versus a 1099 independent contractor (no withholding; they pay their own). Getting it wrong carries real penalties.",
    blurb: "Employee vs. independent contractor &mdash; the classification that drives withholding, taxes, and real compliance risk.",
    definition: [
      "<strong>1099 vs. W-2</strong> refers to how a worker is classified. A <strong>W-2 employee</strong> has income tax, Social Security, and Medicare withheld from each paycheck; the employer pays its share of payroll taxes and controls how, when, and where the work is done. A <strong>1099 independent contractor</strong> is paid without withholding, pays their own self-employment tax, and controls their own work &mdash; they run their own business.",
      "The names come from the tax forms: a W-2 reports employee wages; a Form 1099-NEC reports payments to a contractor.",
    ],
    why: {
      heading: "Misclassification is a real, expensive risk.",
      paras: [
        "Classifying a worker as a 1099 contractor when they function as an employee can trigger back payroll taxes, penalties, and interest &mdash; and the IRS and state agencies apply their own tests (such as California&rsquo;s AB5 ABC test) that don&rsquo;t care what the agreement calls the worker. The substance of the relationship decides it, not the label.",
        "The classification <em>determination</em> is a legal and tax matter for your CPA, EA, or employment counsel. What TechBrot does is set up payroll and contractor payments correctly in QuickBooks once the classification is decided, track the 1099s, and produce the year-end forms &mdash; see <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a>.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/quickbooks/payroll/", title: "QuickBooks Payroll", blurb: "Employees and contractors set up and paid correctly." },
      { href: "/quickbooks/payroll/faq/", title: "Payroll FAQ", blurb: "Multi-state, year-end W-2/1099, and contractor questions answered." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Contractor payments tracked for clean year-end 1099s." },
    ],
    call: { title: "Unsure how to classify a worker?", sub: "A Certified ProAdvisor sets up payroll and 1099 tracking correctly once the classification is made &mdash; and flags when you should get your CPA or EA to confirm the call. We don&rsquo;t provide legal advice." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "journal-entry",
    term: "Journal entry",
    title: "Journal Entry — Definition & Adjusting Entries · TechBrot",
    description: "A journal entry: the foundational double-entry record of a transaction — debits and credits to specific accounts. What it is, why adjusting entries close the books, and where QuickBooks posts them automatically. By Certified QuickBooks ProAdvisors.",
    shortDef: "The foundational record of a transaction in double-entry accounting &mdash; equal debits and credits to specific accounts, dated and described. QuickBooks posts most automatically; manual ones handle the rest.",
    blurb: "The double-entry record of a transaction &mdash; debits and credits; manual adjusting entries close the books.",
    definition: [
      "A <strong>journal entry</strong> is the basic unit of <a href=\"/glossary/double-entry-accounting/\">double-entry accounting</a>: a record of a transaction as equal debits and credits to specific accounts, with a date and description. Every transaction in the books is, underneath, a journal entry.",
      "In QuickBooks, most journal entries are posted automatically behind familiar forms &mdash; an invoice, a bill, a payment each create the entries for you. <strong>Manual journal entries</strong> handle what the forms don&rsquo;t: adjusting entries for accruals, <a href=\"/glossary/depreciation/\">depreciation</a>, reclassifications, and corrections.",
    ],
    why: {
      heading: "Adjusting entries are how a period is really closed.",
      paras: [
        "A clean <a href=\"/glossary/month-end-close/\">month-end close</a> almost always involves adjusting journal entries &mdash; recording depreciation, recognizing <a href=\"/glossary/deferred-revenue/\">deferred revenue</a>, accruing expenses &mdash; so the period&rsquo;s statements reflect reality, not just what cleared the bank.",
        "Manual journal entries are powerful and easy to misuse: an entry to the wrong account, or one that should have been a normal transaction, is a common <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> finding. They&rsquo;re a tool for adjustments, not a workaround for proper bookkeeping.",
      ],
    },
    how: {
      paras: [
        "Every journal entry has at least one debit and one credit, equal in total &mdash; the same balanced structure the whole ledger runs on. A single account&rsquo;s debits and credits over a period are clearest as a T-account, which ties out when the period reconciles.",
      ],
      diagram: "figure-taccount",
    },
    clarify: null,
    related: [
      { href: "/glossary/double-entry-accounting/", title: "Double-entry accounting", blurb: "The debit-and-credit logic every journal entry follows." },
      { href: "/glossary/general-ledger/", title: "General ledger", blurb: "Where every journal entry lands and accumulates." },
      { href: "/glossary/month-end-close/", title: "Month-end close", blurb: "Where adjusting journal entries finalize the period." },
    ],
    call: { title: "Journal entries you&rsquo;re not sure about?", sub: "A Certified ProAdvisor reviews how entries are being used, corrects misused ones, and sets up the adjusting entries your close needs &mdash; written fixed-fee scope." },
    faq: null,
    published: "2026-06-17", updated: "2026-06-17",
  },

  {
    slug: "accrued-expenses",
    term: "Accrued expenses",
    title: "Accrued Expenses — Definition & Why They Matter · TechBrot",
    description: "Accrued expenses: costs your business has incurred but not yet paid or been billed for &mdash; wages earned, interest accrued. What they are, how adjusting entries record them, and why accrual books need them. By Certified QuickBooks ProAdvisors.",
    shortDef: "Costs your business has already incurred but not yet paid or been invoiced for &mdash; recorded as a liability through adjusting entries so the period&rsquo;s expenses match the period that earned them.",
    blurb: "Costs incurred but not yet paid or billed &mdash; a liability recorded by adjusting entries on accrual books.",
    definition: [
      "<strong>Accrued expenses</strong> are costs a business has already incurred but has not yet paid &mdash; and often has not yet received a bill for. Common examples are wages employees have earned but that haven&rsquo;t been paid out, interest that has accumulated on a loan, or utilities used before the statement arrives. On accrual-basis books they are recorded as a current liability, because the obligation exists even though no cash has moved.",
      "They are recorded through <strong>adjusting entries</strong> at the end of a period: an expense is posted to the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a> and a matching liability to the <a href=\"/glossary/balance-sheet/\">balance sheet</a>. When the bill is later paid, the liability clears. This keeps each period&rsquo;s expenses matched to the period that actually consumed them.",
    ],
    why: {
      heading: "Why accruals make the period honest.",
      paras: [
        "Without accruals, a month can look more profitable than it really was simply because a bill hasn&rsquo;t arrived yet. Accruing the cost when it&rsquo;s incurred &mdash; not when it&rsquo;s paid &mdash; is the heart of <a href=\"/glossary/accrual-vs-cash-basis-accounting/\">accrual-basis accounting</a> and what makes period-to-period comparison trustworthy.",
        "Missing or stale accruals are a common finding in a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>: an accrued liability that was booked and never reversed, or a recurring cost that was never accrued at all, quietly distorts both the expense reports and the liability balance until it&rsquo;s corrected.",
      ],
    },
    how: null,
    clarify: {
      heading: "Accrued expenses vs. accounts payable.",
      paras: [
        "They&rsquo;re close but not the same. <a href=\"/glossary/accounts-payable/\">Accounts payable</a> is money you owe against a bill you have actually received from a vendor. An <strong>accrued expense</strong> is a cost you&rsquo;ve incurred but for which no bill has arrived yet &mdash; so you estimate and record it to keep the period accurate. Once the invoice comes in, the accrual is typically reversed and the amount moves to accounts payable.",
      ],
    },
    related: [
      { href: "/glossary/accounts-payable/", title: "Accounts payable", blurb: "The related liability &mdash; money owed against a bill you&rsquo;ve actually received." },
      { href: "/glossary/accrual-vs-cash-basis-accounting/", title: "Accrual vs. cash basis", blurb: "Accruals only exist on the accrual basis &mdash; the method that records costs when incurred." },
      { href: "/accounting/bookkeeping/monthly-bookkeeping/", title: "Monthly bookkeeping", blurb: "Recurring accruals posted as part of a real month-end close, so each period is complete." },
    ],
    call: { title: "Expenses landing in the wrong month?", sub: "A Certified ProAdvisor reviews how accruals are handled in your books and corrects what&rsquo;s off &mdash; written, fixed-fee scope. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "prepaid-expenses",
    term: "Prepaid expenses",
    title: "Prepaid Expenses — Definition & Why They&rsquo;re an Asset · TechBrot",
    description: "Prepaid expenses: payments made in advance for a future benefit &mdash; insurance, rent, annual software. Why they&rsquo;re recorded as an asset and expensed over time, not all at once. By Certified QuickBooks ProAdvisors.",
    shortDef: "Payments made in advance for a benefit you&rsquo;ll receive later &mdash; insurance, rent, an annual subscription &mdash; recorded as a current asset and expensed over the period the payment actually covers.",
    blurb: "Payments made in advance &mdash; recorded as an asset, then expensed over the period they cover.",
    definition: [
      "<strong>Prepaid expenses</strong> are payments a business makes in advance for goods or services it will receive in a future period &mdash; annual insurance premiums, rent paid ahead, a yearly software subscription. Because the benefit is still to come, the payment is recorded as a current <strong>asset</strong> on the <a href=\"/glossary/balance-sheet/\">balance sheet</a> rather than an immediate expense.",
      "As each month of the covered period passes, a portion is moved from the prepaid asset to expense on the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a>. A twelve-month policy paid up front, for example, is expensed one-twelfth at a time, so each month carries only the cost it actually used.",
    ],
    why: {
      heading: "Why timing the expense matters.",
      paras: [
        "Booking a full year&rsquo;s insurance or software as a single expense in the month it&rsquo;s paid overstates that month&rsquo;s costs and understates the eleven that follow &mdash; making the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a> lurch around for no real operating reason. Spreading it correctly keeps each period comparable and the margins meaningful.",
        "Prepaids are a routine part of a real <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">month-end close</a>, and a frequent <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> correction &mdash; either large advance payments expensed all at once, or a prepaid asset that was set up and never amortized down as the period elapsed.",
      ],
    },
    how: null,
    clarify: {
      heading: "Prepaid expense vs. a regular expense.",
      paras: [
        "The difference is timing, not category. A <strong>regular expense</strong> is recorded when the cost is incurred and consumed in the same period. A <strong>prepaid expense</strong> is paid now for a benefit spread across future periods, so it sits as an asset and converts to expense gradually. The cash leaves your account at the same moment either way &mdash; what differs is when the cost hits your reports.",
      ],
    },
    related: [
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where a prepaid sits as a current asset until it&rsquo;s used up." },
      { href: "/glossary/accrual-vs-cash-basis-accounting/", title: "Accrual vs. cash basis", blurb: "Prepaids matter on the accrual basis, which records cost when the benefit is consumed." },
      { href: "/accounting/bookkeeping/monthly-bookkeeping/", title: "Monthly bookkeeping", blurb: "Prepaids amortized down each month as part of a real close, so reports stay even." },
    ],
    call: { title: "Big annual payments distorting your months?", sub: "A Certified ProAdvisor checks whether prepaids are recorded and amortized correctly and scopes the fix in writing &mdash; fixed-fee. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "fixed-assets",
    term: "Fixed assets",
    title: "Fixed Assets — Definition, Capitalization & Depreciation · TechBrot",
    description: "Fixed assets: long-lived tangible property a business uses to operate &mdash; equipment, vehicles, furniture, buildings. Why they&rsquo;re capitalized on the balance sheet and depreciated over time, not expensed at purchase. By Certified QuickBooks ProAdvisors.",
    shortDef: "Long-lived tangible property a business owns and uses to operate &mdash; equipment, vehicles, furniture, buildings &mdash; recorded on the balance sheet and depreciated over its useful life rather than expensed when bought.",
    blurb: "Long-lived tangible property &mdash; equipment, vehicles, buildings &mdash; capitalized and depreciated, not expensed at purchase.",
    definition: [
      "<strong>Fixed assets</strong> are the long-lived, tangible items a business owns and uses to run its operations rather than to sell &mdash; equipment, vehicles, furniture, computers, machinery, and buildings. Also called property, plant, and equipment, they are expected to provide value for more than a single year.",
      "Because the benefit is spread over years, a fixed asset is <strong>capitalized</strong>: it&rsquo;s recorded as an asset on the <a href=\"/glossary/balance-sheet/\">balance sheet</a> at its cost, not written off as an expense the moment it&rsquo;s bought. Its cost is then moved to expense gradually through <a href=\"/glossary/depreciation/\">depreciation</a> over the asset&rsquo;s useful life.",
    ],
    why: {
      heading: "Why capitalizing them keeps the books true.",
      paras: [
        "Expensing a $30,000 vehicle in the month it&rsquo;s purchased would crater that month&rsquo;s profit and overstate it forever after &mdash; while leaving an asset the business clearly still owns nowhere on the balance sheet. Capitalizing and depreciating it matches the cost to the years the asset is actually used, so both the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a> and the balance sheet tell the truth.",
        "A fixed-asset register that ties to the balance sheet &mdash; what&rsquo;s owned, its cost, and accumulated depreciation &mdash; is part of solid <a href=\"/accounting/bookkeeping/\">bookkeeping</a>. Assets expensed instead of capitalized, or depreciation never recorded, are common <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> findings. Depreciation method and tax treatment are confirmed with your CPA or EA.",
      ],
    },
    how: null,
    clarify: {
      heading: "Fixed assets vs. current assets vs. expenses.",
      paras: [
        "<strong>Current assets</strong> &mdash; cash, <a href=\"/glossary/accounts-receivable/\">receivables</a>, inventory &mdash; are expected to convert to cash within a year. <strong>Fixed assets</strong> are kept and used for years. And a small or short-lived purchase is simply an <strong>expense</strong>, written off at once: businesses set a capitalization threshold (for example, items over a few hundred or thousand dollars) below which it isn&rsquo;t worth tracking as an asset.",
      ],
    },
    related: [
      { href: "/glossary/depreciation/", title: "Depreciation", blurb: "How a fixed asset&rsquo;s cost is moved to expense over its useful life." },
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where fixed assets are carried, net of accumulated depreciation." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "A fixed-asset register kept accurate and tied to the balance sheet." },
    ],
    call: { title: "Equipment expensed when it should be on the books?", sub: "A Certified ProAdvisor reviews how your fixed assets are recorded and depreciated and scopes any correction in writing &mdash; fixed-fee, coordinating with your CPA on tax treatment. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "operating-expenses",
    term: "Operating expenses",
    title: "Operating Expenses (OpEx) — Definition & Why They&rsquo;re Below Gross Profit · TechBrot",
    description: "Operating expenses (OpEx): the ongoing costs of running a business that aren&rsquo;t tied directly to a sale &mdash; rent, utilities, admin salaries, software, marketing. What counts, and why they sit below gross profit on the P&L. By Certified QuickBooks ProAdvisors.",
    shortDef: "The ongoing costs of running the business that aren&rsquo;t tied directly to producing a sale &mdash; rent, utilities, admin salaries, software, marketing &mdash; reported below gross profit on the profit and loss statement.",
    blurb: "The ongoing costs of running the business not tied to a sale &mdash; below gross profit on the P&L.",
    definition: [
      "<strong>Operating expenses</strong> (OpEx) are the ongoing costs a business incurs to keep running that are not tied directly to producing any one sale &mdash; rent, utilities, administrative salaries, software subscriptions, insurance, office costs, and marketing. They are the overhead of being in business, paid whether or not a particular sale is made.",
      "On the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a> they sit below gross profit: revenue minus <a href=\"/glossary/cost-of-goods-sold/\">cost of goods sold</a> gives gross profit, and gross profit minus operating expenses gives operating profit. That ordering separates how profitably you make the product from how efficiently you run the company around it.",
    ],
    why: {
      heading: "Why the OpEx line drives real decisions.",
      paras: [
        "Operating expenses are where most owners actually have control month to month, so a clean, well-structured OpEx section is what makes the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a> a management tool rather than a tax artifact &mdash; you can see where money goes and what to adjust. That depends on a <a href=\"/glossary/chart-of-accounts/\">chart of accounts</a> built for how the business actually operates.",
        "Expenses scattered across overlapping accounts, personal spending mixed in, or direct costs misfiled as overhead all blur the picture &mdash; common <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> corrections that, once fixed, make the operating section comparable period to period.",
      ],
    },
    how: null,
    clarify: {
      heading: "Operating expenses vs. cost of goods sold.",
      paras: [
        "The line between them is direct vs. indirect. <a href=\"/glossary/cost-of-goods-sold/\">Cost of goods sold</a> is the <em>direct</em> cost of what you sold &mdash; it rises and falls with sales. <strong>Operating expenses</strong> are <em>indirect</em> &mdash; you&rsquo;d pay the rent and the admin salaries whether or not you made a sale this month. Drawing that line consistently is what makes gross margin and operating margin both mean something.",
      ],
    },
    related: [
      { href: "/glossary/cost-of-goods-sold/", title: "Cost of goods sold", blurb: "The direct costs above the line &mdash; the other side of the OpEx distinction." },
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "Where operating expenses sit, below gross profit." },
      { href: "/accounting/financial-statements/", title: "Financial statements", blurb: "Reports structured so the operating section actually guides decisions." },
    ],
    call: { title: "Can&rsquo;t see where the money really goes?", sub: "A Certified ProAdvisor reviews how your operating expenses are categorized and whether the P&amp;L is helping or hiding the picture &mdash; written, fixed-fee scope. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

{
    slug: "owners-equity",
    term: "Owner&rsquo;s equity",
    title: "Owner&rsquo;s Equity — Definition & Where It Sits on the Balance Sheet · TechBrot",
    description: "Owner's equity: the owner's residual claim on the business — assets minus liabilities. What it is, how it appears for sole props, partnerships, and corporations, and how it differs from retained earnings. By Certified QuickBooks ProAdvisors.",
    shortDef: "The owner&rsquo;s residual claim on the business &mdash; what&rsquo;s left when you subtract everything the business owes (liabilities) from everything it owns (assets). It is the equity section of the balance sheet.",
    blurb: "The owner&rsquo;s residual claim on the business &mdash; assets minus liabilities, the equity section of the balance sheet.",
    definition: [
      "<strong>Owner&rsquo;s equity</strong> is the owner&rsquo;s residual claim on a business: what remains after you subtract everything the business owes (its liabilities) from everything it owns (its assets). It is the third side of the accounting equation &mdash; assets = liabilities + equity &mdash; and the section of the <a href=\"/glossary/balance-sheet/\">balance sheet</a> that represents the owners&rsquo; stake in the company.",
      "What it&rsquo;s called depends on how the business is structured. In a sole proprietorship or partnership it appears as owner&rsquo;s capital or partners&rsquo; capital. In a corporation it is shareholders&rsquo; equity &mdash; typically common stock plus <a href=\"/glossary/retained-earnings/\">retained earnings</a>. The concept is the same in every case: the portion of the business that belongs to its owners.",
    ],
    why: {
      heading: "What owner&rsquo;s equity tells you.",
      paras: [
        "Owner&rsquo;s equity is the book value of the business to its owners &mdash; what would be left for them, on the books, if every asset were turned to cash and every debt paid. It rises when the business earns profit or the owner contributes capital, and falls when the business loses money or the owner takes money out. Watched over time, it is one of the clearest signals of whether a business is building value or drawing it down.",
        "Like every balance-sheet figure, it is only as trustworthy as the bookkeeping underneath it. Owner contributions and draws posted to the wrong accounts, profit that never closed into equity, or stale balances all distort it &mdash; which is why reconciling the equity accounts, not just the bank, is part of a real <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>.",
      ],
    },
    how: null,
    clarify: {
      heading: "Owner&rsquo;s equity vs. retained earnings.",
      paras: [
        "They&rsquo;re related but not the same. <strong>Owner&rsquo;s equity</strong> is the whole owners&rsquo; stake &mdash; capital contributed plus accumulated profit, less anything taken out. <a href=\"/glossary/retained-earnings/\">Retained earnings</a> is one component of it: the cumulative profit a business has kept rather than distributed. Equity is the total; retained earnings is the portion built up from profits over time.",
      ],
    },
    related: [
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where owner&rsquo;s equity sits &mdash; the third side of assets = liabilities + equity." },
      { href: "/glossary/retained-earnings/", title: "Retained earnings", blurb: "The accumulated-profit component of equity, kept rather than distributed." },
      { href: "/accounting/financial-statements/", title: "Financial statements", blurb: "The balance sheet your equity is read from, prepared so it ties out." },
    ],
    call: { title: "Does your balance sheet&rsquo;s equity make sense?", sub: "A Certified ProAdvisor reconciles your equity accounts &mdash; contributions, draws, and retained earnings &mdash; and scopes any cleanup in writing, fixed-fee. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "owners-draw",
    term: "Owner&rsquo;s draw",
    title: "Owner&rsquo;s Draw — Definition & How It Differs From Salary · TechBrot",
    description: "Owner's draw: money an owner takes out of an unincorporated business for personal use. What it is, why it isn't a deductible expense or payroll, and how it differs from an S-corp salary. By Certified QuickBooks ProAdvisors.",
    shortDef: "Money an owner takes out of an unincorporated business &mdash; a sole proprietorship, partnership, or LLC &mdash; for personal use. It reduces owner&rsquo;s equity and is not a tax-deductible business expense.",
    blurb: "Money an owner takes out of an unincorporated business for personal use &mdash; it reduces equity, and it isn&rsquo;t payroll or a deductible expense.",
    definition: [
      "An <strong>owner&rsquo;s draw</strong> is money an owner takes out of an unincorporated business &mdash; a sole proprietorship, partnership, or LLC &mdash; for personal use. Rather than being paid a wage, the owner simply withdraws funds the business has earned. Each draw reduces <a href=\"/glossary/owners-equity/\">owner&rsquo;s equity</a> on the balance sheet, because it lowers the owner&rsquo;s remaining stake in the business.",
      "Critically, a draw is not a business expense. It does not appear on the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a>, it is not tax-deductible, and it is not payroll &mdash; no wages are recorded and no payroll taxes are withheld on it. A draw moves money the business already owns into the owner&rsquo;s hands; it doesn&rsquo;t change the business&rsquo;s profit.",
    ],
    why: {
      heading: "Why drawing money correctly keeps your books honest.",
      paras: [
        "Recording draws in the right place matters because miscategorizing them quietly distorts the picture. Posted as an expense, a draw understates profit and overstates costs &mdash; the P&amp;L lies and the tax figures built on it follow. Personal spending run straight through the business and never reclassified as a draw is one of the most common reasons a set of books needs a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>.",
        "Kept correctly, draws flow to an equity account where they belong, the P&amp;L stays clean, and the balance sheet shows the owner&rsquo;s true remaining stake &mdash; the foundation any <a href=\"/accounting/advisory/\">advisory</a> conversation about how much you can safely take out has to rest on.",
      ],
    },
    how: null,
    clarify: {
      heading: "Owner&rsquo;s draw vs. salary &mdash; a tax decision for your CPA.",
      paras: [
        "Owners of sole proprietorships, partnerships, and most LLCs take draws, not a salary. Owners of an S corporation are different: the IRS requires them to pay themselves a reasonable W-2 salary through payroll, and they may take additional distributions on top. Which structure you should use, and how to split pay between salary and distributions, is a tax matter with real consequences &mdash; we keep the bookkeeping correct for whatever you choose, but the salary-versus-draw decision is confirmed with your CPA or EA.",
      ],
    },
    related: [
      { href: "/glossary/owners-equity/", title: "Owner&rsquo;s equity", blurb: "The account a draw reduces &mdash; the owner&rsquo;s stake in the business." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Draws and personal spending recorded to equity so your P&L stays clean." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "How much you can safely take out &mdash; read off books that are actually right." },
    ],
    call: { title: "Personal spending tangled into the business?", sub: "A Certified ProAdvisor sorts draws from real expenses so your books and P&amp;L are right &mdash; fixed-fee, in writing. The salary-vs-draw tax call stays with your CPA." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "working-capital",
    term: "Working capital",
    title: "Working Capital — Definition & Why Liquidity Matters · TechBrot",
    description: "Working capital: current assets minus current liabilities — the short-term cushion that funds day-to-day operations. What it is, why positive working capital matters, and how it reads on the balance sheet. By Certified QuickBooks ProAdvisors.",
    shortDef: "Current assets minus current liabilities &mdash; the short-term liquidity cushion that funds day-to-day operations. Positive working capital means the business can cover what it owes in the near term.",
    blurb: "Current assets minus current liabilities &mdash; the short-term cushion that funds day-to-day operations.",
    definition: [
      "<strong>Working capital</strong> is current assets minus current liabilities &mdash; the cash and near-cash a business has available to fund its day-to-day operations after accounting for what it owes in the near term. Current assets include cash, <a href=\"/glossary/accounts-receivable/\">accounts receivable</a>, and inventory; current liabilities include <a href=\"/glossary/accounts-payable/\">accounts payable</a> and other obligations due within a year.",
      "It is read straight off the <a href=\"/glossary/balance-sheet/\">balance sheet</a>. Positive working capital means current assets exceed current liabilities &mdash; the business can cover its short-term obligations from short-term resources. Negative working capital means the opposite, and is a warning that near-term bills may outrun near-term cash.",
    ],
    why: {
      heading: "Working capital is a liquidity measure, not a profit measure.",
      paras: [
        "A business can be profitable and still run short of working capital &mdash; profit tied up in unpaid receivables or inventory isn&rsquo;t cash you can use to make payroll. Working capital is the question lenders, investors, and owners ask about survival in the next few months: can the business pay what it owes as it comes due? It is one of the most-watched signals of short-term financial health.",
        "It is only meaningful if the books are accurate. An AR balance for invoices already paid, payables entered twice, or inventory that&rsquo;s wrong all skew the figure &mdash; which is why reconciled current accounts matter, and why interpreting working capital and managing it is a core <a href=\"/accounting/advisory/\">advisory</a> conversation.",
      ],
    },
    how: null,
    clarify: null,
    related: [
      { href: "/glossary/accounts-receivable/", title: "Accounts receivable", blurb: "A current asset &mdash; cash owed to you that feeds working capital once collected." },
      { href: "/glossary/accounts-payable/", title: "Accounts payable", blurb: "A current liability &mdash; the near-term bills working capital has to cover." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Reading and managing liquidity &mdash; can the business pay what&rsquo;s due as it comes due?" },
    ],
    call: { title: "Profitable but always short on cash?", sub: "A Certified ProAdvisor reconciles your current accounts and reads your real working capital with you &mdash; fixed-fee, in writing. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "gross-margin",
    term: "Gross margin",
    title: "Gross Margin — Definition & How It Differs From Markup · TechBrot",
    description: "Gross margin: gross profit as a percentage of revenue — how much of each sales dollar is left after the cost of goods sold. What it measures, why it matters, and how it differs from markup. By Certified QuickBooks ProAdvisors.",
    shortDef: "Gross profit as a percentage of revenue &mdash; gross profit &divide; revenue &mdash; showing how much of each sales dollar is left after the cost of what you sold.",
    blurb: "Gross profit as a percentage of revenue &mdash; how much of each sales dollar is left after COGS.",
    definition: [
      "<strong>Gross margin</strong> is gross profit expressed as a percentage of revenue: gross profit &divide; revenue. Gross profit is revenue minus <a href=\"/glossary/cost-of-goods-sold/\">cost of goods sold</a>, so gross margin tells you how much of every sales dollar is left after paying the direct cost of what you sold &mdash; the money available to cover operating expenses and produce a profit.",
      "It appears at the top of the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a>, just below revenue and COGS. A business with $100,000 in revenue and $60,000 in COGS has $40,000 in gross profit and a 40% gross margin &mdash; 40 cents of every sales dollar survives the direct cost of the sale.",
    ],
    why: {
      heading: "Why gross margin is the number to watch.",
      paras: [
        "Gross margin is one of the most revealing figures a business has: it shows whether the core product or service is fundamentally profitable before overhead, and it&rsquo;s the lever pricing and cost decisions move directly. A slipping gross margin &mdash; rising costs not passed through, or discounting that ate into the line &mdash; is an early warning that no amount of revenue growth fixes.",
        "It is only trustworthy if COGS is drawn correctly and consistently. Lumping operating expenses into COGS or scattering direct costs into overhead makes the margin look better or worse than it is and breaks period-to-period comparison &mdash; which is why a correct COGS line, and reading margin on accurate <a href=\"/accounting/financial-statements/\">financial statements</a>, comes first.",
      ],
    },
    how: null,
    clarify: {
      heading: "Gross margin vs. markup.",
      paras: [
        "They&rsquo;re easy to confuse and they aren&rsquo;t the same. <strong>Gross margin</strong> is gross profit as a percentage of the <em>selling price</em>; <strong>markup</strong> is the same profit as a percentage of the <em>cost</em>. A product that costs $60 and sells for $100 carries a 40% margin (40 &divide; 100) but a 67% markup (40 &divide; 60). Using one figure when you mean the other is a common pricing mistake &mdash; the same dollars, two different percentages.",
      ],
    },
    related: [
      { href: "/glossary/cost-of-goods-sold/", title: "Cost of goods sold", blurb: "The direct cost subtracted from revenue to get the gross profit margin is built on." },
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "Where gross margin appears &mdash; just below revenue and COGS." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Turning margin into pricing and cost decisions, not just a percentage on a report." },
    ],
    call: { title: "Is your gross margin telling the truth?", sub: "A Certified ProAdvisor checks that your COGS is drawn correctly so your margin is real &mdash; with a written fixed-fee scope to fix it if not. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

{
    slug: "write-off",
    term: "Write-off",
    title: "Write-Off — Definition & What It Really Means in the Books · TechBrot",
    description: "A write-off: removing an amount from the books that's no longer collectible or has no value — most often a bad-debt or obsolete-inventory write-off. What it means in bookkeeping, and why it isn't the same as a tax deduction. By Certified QuickBooks ProAdvisors.",
    shortDef: "Removing from the books an amount that&rsquo;s no longer collectible or has no remaining value &mdash; most often an uncollectible receivable or obsolete inventory &mdash; and recording the loss as an expense.",
    blurb: "Removing an uncollectible or worthless amount from the books and recording the loss &mdash; not the same as a tax deduction.",
    definition: [
      "A <strong>write-off</strong> is the accounting act of removing an amount from the books because it is no longer collectible or no longer has any value, and recording the corresponding loss as an expense. The two most common cases are a <strong>bad-debt write-off</strong> &mdash; an <a href=\"/glossary/accounts-receivable/\">accounts-receivable</a> balance a customer will never pay, removed from receivables and booked as bad-debt expense &mdash; and an <strong>inventory write-off</strong>, where stock that is obsolete, damaged, or unsellable is removed from inventory and expensed.",
      "Writing something off doesn&rsquo;t make the loss happen; it records a loss that has already happened. The point is to stop the books from carrying an asset &mdash; a receivable or inventory item &mdash; that is no longer worth what it says, so the financial statements reflect reality.",
    ],
    why: {
      heading: "An overstated asset is a misleading balance sheet.",
      paras: [
        "Until an uncollectible receivable or worthless inventory item is written off, it sits on the balance sheet as an asset the business doesn&rsquo;t really have. That inflates what the company appears to own, distorts ratios a lender reads, and quietly props up profit on the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a> that was never real. Recording the write-off corrects both at once.",
        "Identifying what should be written off &mdash; receivables long past collection, inventory that will never sell &mdash; is a routine part of a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, because stale balances are exactly the kind of thing that accumulates when the books drift. The judgment of <em>when</em> a balance is truly uncollectible is real work, not a formality.",
      ],
    },
    how: null,
    clarify: {
      heading: "A write-off is not the same as a tax deduction.",
      paras: [
        "In everyday speech &ldquo;write it off&rdquo; is used loosely to mean &ldquo;deduct it on my taxes&rdquo; &mdash; but those are two different things. A <strong>bookkeeping write-off</strong> removes book value from your accounting records and records a loss in your books. Whether, when, and how that loss is deductible on a tax return is a separate question governed by tax rules, and it is confirmed with your CPA or EA &mdash; not assumed from the bookkeeping entry. TechBrot records the write-off correctly in your books; the tax treatment is your CPA&rsquo;s call.",
      ],
    },
    related: [
      { href: "/glossary/accounts-receivable/", title: "Accounts receivable", blurb: "Where a bad-debt write-off removes an uncollectible customer balance." },
      { href: "/accounting/bookkeeping/cleanup-bookkeeping/", title: "Bookkeeping cleanup", blurb: "Stale, uncollectible balances are a classic cleanup finding &mdash; written off so the books reflect reality." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Receivables and inventory kept current, with write-offs recorded correctly when value is gone." },
    ],
    call: { title: "Carrying balances you&rsquo;ll never collect?", sub: "A Certified ProAdvisor reviews what&rsquo;s really collectible, records the write-offs correctly, and coordinates the tax treatment with your CPA &mdash; fixed-fee, independent firm." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "net-income",
    term: "Net income",
    title: "Net Income — Definition & Why It's the Bottom Line · TechBrot",
    description: "Net income: revenue minus all expenses — COGS, operating expenses, interest, and taxes — over a period. The final profit on the P&L, why it's called the bottom line, and why it isn't the same as cash. By Certified QuickBooks ProAdvisors.",
    shortDef: "The bottom line &mdash; revenue minus every expense (cost of goods sold, operating expenses, interest, and taxes) over a period. The final profit figure on the profit and loss statement.",
    blurb: "Revenue minus all expenses over a period &mdash; the final profit on the P&L, and not the same as cash.",
    definition: [
      "<strong>Net income</strong> is what&rsquo;s left after every expense is subtracted from revenue over a period &mdash; cost of goods sold, operating expenses, interest, and taxes. It is the last line of the <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a>, which is why it&rsquo;s called &ldquo;the bottom line,&rdquo; and it is also known as net profit or net earnings.",
      "Net income flows onward into the rest of the books: it increases <a href=\"/glossary/retained-earnings/\">retained earnings</a> in the equity section of the <a href=\"/glossary/balance-sheet/\">balance sheet</a>, tying the period&rsquo;s profit to the cumulative value the business has kept over its lifetime.",
    ],
    why: {
      heading: "The number everyone reads &mdash; only as true as the books.",
      paras: [
        "Net income is the figure owners, lenders, and buyers look at first to judge whether a business actually makes money. But it is the end of a long chain: every miscategorized expense, every revenue recorded in the wrong period, and every personal cost mixed into the business changes it directly. A confident net-income number on unreconciled books is a confident guess.",
        "Because so much rolls up into it, net income is also where bookkeeping errors become visible &mdash; an implausible bottom line is often the first sign a file needs a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> before the number can be trusted or acted on.",
      ],
    },
    how: null,
    clarify: {
      heading: "Net income is not cash.",
      paras: [
        "A business can show strong net income and still be short on cash &mdash; and the reverse. Profit can be tied up in unpaid <a href=\"/glossary/accounts-receivable/\">receivables</a> or inventory, while loan principal and owner draws drain cash without ever touching net income. That is why the bottom line is read alongside the <a href=\"/glossary/cash-flow-statement/\">cash flow statement</a>, not on its own. Net income answers &ldquo;did we make money?&rdquo;; the cash flow statement answers &ldquo;where did the cash go?&rdquo;",
      ],
    },
    related: [
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "The report net income is the bottom line of." },
      { href: "/glossary/cash-flow-statement/", title: "Cash flow statement", blurb: "Why a profitable bottom line still isn&rsquo;t cash in the bank." },
      { href: "/glossary/retained-earnings/", title: "Retained earnings", blurb: "Where net income flows into equity, period after period." },
    ],
    call: { title: "Does your bottom line ring true?", sub: "A Certified ProAdvisor checks whether your net income is built on reconciled, correctly categorized books &mdash; or whether a cleanup is needed first. Written fixed-fee scope; independent firm." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "amortization",
    term: "Amortization",
    title: "Amortization — Definition & How It Differs from Depreciation · TechBrot",
    description: "Amortization: spreading the cost of an intangible asset, or a loan's principal, over time. What it means for patents, goodwill, and software, how loan amortization works, and how it differs from depreciation. By Certified QuickBooks ProAdvisors.",
    shortDef: "Spreading a cost over time &mdash; either the cost of an intangible asset across its useful life (the intangible analog of depreciation), or a loan&rsquo;s principal across the schedule by which it&rsquo;s repaid.",
    blurb: "Spreading the cost of an intangible asset, or a loan&rsquo;s principal, over time &mdash; depreciation&rsquo;s intangible counterpart.",
    definition: [
      "<strong>Amortization</strong> has two closely related meanings, both about spreading a cost over time. In the asset sense, it is the gradual expensing of an <strong>intangible asset</strong> &mdash; something with value but no physical form, such as a patent, goodwill, or purchased software &mdash; across its useful life, the same way <a href=\"/glossary/depreciation/\">depreciation</a> spreads the cost of a physical asset.",
      "In the loan sense, amortization is the schedule by which a loan&rsquo;s <strong>principal</strong> is paid down over its term. An amortization schedule shows how each payment splits between interest and principal, with the principal portion growing as the balance shrinks &mdash; which is why early payments are mostly interest and later ones mostly principal.",
    ],
    why: {
      heading: "Why spreading the cost matters.",
      paras: [
        "Expensing a long-lived intangible all at once would distort a single period&rsquo;s profit and understate the asset&rsquo;s value in every period after. Amortization matches the cost to the periods that benefit from it, so the <a href=\"/glossary/profit-and-loss-statement/\">P&amp;L</a> and the <a href=\"/glossary/balance-sheet/\">balance sheet</a> both stay closer to economic reality.",
        "On the loan side, splitting each payment between interest (an expense) and principal (a reduction of a liability) is what keeps a loan recorded correctly &mdash; a frequent <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> finding is a loan where every payment was booked entirely to expense, leaving the liability balance wrong for years.",
      ],
    },
    how: null,
    clarify: {
      heading: "Amortization vs. depreciation.",
      paras: [
        "They are the same idea applied to different assets. <strong>Amortization</strong> spreads the cost of <em>intangible</em> assets &mdash; patents, goodwill, software. <a href=\"/glossary/depreciation/\">Depreciation</a> spreads the cost of <em>tangible</em>, physical assets &mdash; equipment, vehicles, buildings. The accounting mechanics are parallel; the distinction is simply whether you can touch the asset. How either is calculated for a tax return follows separate tax rules confirmed with your CPA or EA.",
      ],
    },
    related: [
      { href: "/glossary/depreciation/", title: "Depreciation", blurb: "The tangible-asset counterpart &mdash; same idea, physical assets." },
      { href: "/glossary/balance-sheet/", title: "Balance sheet", blurb: "Where intangible assets and loan principal both sit, and shrink as they amortize." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Intangible assets and loans recorded and amortized correctly, month after month." },
    ],
    call: { title: "Loans or intangibles recorded right?", sub: "A Certified ProAdvisor checks whether your loans and intangible assets are amortized correctly in the books, and coordinates the tax treatment with your CPA &mdash; fixed-fee, independent firm." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

{
    slug: "undeposited-funds",
    term: "Undeposited Funds",
    title: "Undeposited Funds — What the Account Is For & Why It Piles Up · TechBrot",
    description: "Undeposited Funds: the default QuickBooks holding account where received payments sit until you group them into a deposit that matches the bank. What it's for, why it piles up, and how to fix it. By Certified QuickBooks ProAdvisors.",
    shortDef: "A default QuickBooks holding account where customer payments sit after they&rsquo;re received but before they&rsquo;re grouped into a bank deposit &mdash; so the deposit in your books matches the single deposit slip the bank actually shows.",
    blurb: "The default QuickBooks holding account where received payments wait until you group them into a deposit that matches the bank &mdash; and a classic place errors pile up.",
    definition: [
      "<strong>Undeposited Funds</strong> is a default account QuickBooks creates to hold customer payments after you&rsquo;ve recorded receiving them but before you&rsquo;ve recorded depositing them at the bank. When you receive several payments and take them to the bank together, the bank records one combined deposit; Undeposited Funds lets you do the same in QuickBooks &mdash; hold the individual payments, then group them into a single deposit entry that matches the real-world deposit slip.",
      "Used as intended, it is the bridge between recording a payment and recording a deposit, and it is what makes the deposit in your books line up cleanly with the lump sum that shows on the <a href=\"/glossary/bank-reconciliation/\">bank statement</a>.",
    ],
    why: {
      heading: "Why it piles up &mdash; and why that&rsquo;s a problem.",
      paras: [
        "Payments left in Undeposited Funds and never grouped into a deposit are one of the most common QuickBooks bookkeeping errors and a frequent <a href=\"/quickbooks/cleanup/\">cleanup</a> finding. When payments are recorded as received but the deposit step is skipped, they stack up in the holding account indefinitely &mdash; inflating that account, leaving the bank account understated, and making the books impossible to reconcile because the deposits in QuickBooks never match the deposits at the bank.",
        "The fix is the discipline behind the account: every payment received is grouped into a deposit that mirrors what actually hit the bank, so Undeposited Funds clears to zero between deposits and reconciliation stays clean.",
      ],
      quote: "Undeposited Funds isn&rsquo;t a place money lives. It&rsquo;s a waiting room &mdash; and a full waiting room means the deposits never got made in the books.",
    },
    how: {
      paras: [
        "The intended flow is two steps: record the payment to Undeposited Funds when it comes in, then, when you make the actual bank deposit, group the payments that went in together into one deposit entry. That grouped entry &mdash; not the individual payments &mdash; is what posts to the bank account and matches the single line on the statement, so the account reconciles instead of fighting you.",
      ],
    },
    clarify: {
      heading: "Undeposited Funds vs. depositing straight to the bank.",
      paras: [
        "You don&rsquo;t always need it. If a payment is deposited on its own, recording it directly to the bank account is fine. Undeposited Funds earns its place when multiple payments are deposited <em>together</em> &mdash; it lets one combined deposit in QuickBooks match the one combined deposit the bank shows. The error is leaving payments parked there, not using the account at all.",
      ],
    },
    related: [
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "Deposits that don&rsquo;t match the bank are why a file won&rsquo;t reconcile &mdash; misused Undeposited Funds is a top cause." },
      { href: "/quickbooks/cleanup/", title: "QuickBooks cleanup", blurb: "Payments piled up in Undeposited Funds are a classic cleanup finding &mdash; cleared and matched to real deposits." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Ongoing bookkeeping that records, groups, and deposits payments correctly so the account clears every month." },
    ],
    call: { title: "Payments piling up in Undeposited Funds?", sub: "A Certified ProAdvisor clears the holding account, matches deposits to the bank, and gets the file reconciling again &mdash; fixed-fee, in writing. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "class-tracking",
    term: "Class tracking",
    title: "Class Tracking in QuickBooks — What It Is & When to Use It · TechBrot",
    description: "Class tracking: the QuickBooks feature for tagging transactions to a segment — location, department, program, or property — so you can run a P&L by class. What it does, when it helps, and why consistency is everything. By Certified QuickBooks ProAdvisors.",
    shortDef: "A QuickBooks feature that lets you tag each transaction to a segment of the business &mdash; a location, department, program, or property &mdash; so you can run a profit and loss statement for that segment, not just the company as a whole.",
    blurb: "The QuickBooks feature for tagging transactions to a segment &mdash; location, department, program &mdash; so you can run a P&L by class. Powerful, but only if applied consistently.",
    definition: [
      "<strong>Class tracking</strong> is a QuickBooks feature (Classes) that lets you attach a label to each transaction marking which part of the business it belongs to &mdash; a location, a department, a program, a property, a revenue line. Because the label rides on the transaction, you can then run a <a href=\"/glossary/profit-and-loss-statement/\">profit and loss statement</a> broken out by class and see how each segment is doing on its own.",
      "It is a second dimension layered over the <a href=\"/glossary/chart-of-accounts/\">chart of accounts</a>: the account says <em>what</em> the transaction is (rent, sales, payroll); the class says <em>which part of the business</em> it belongs to. Together they answer questions a single company-wide P&amp;L can&rsquo;t.",
    ],
    why: {
      heading: "Powerful for segmented businesses &mdash; if it&rsquo;s consistent.",
      paras: [
        "For a business that runs multiple locations, programs, or properties, class tracking turns one blended P&amp;L into a per-segment view: which store is actually profitable, which program covers its costs, which property is dragging. That visibility is hard to get any other way without separate company files.",
        "But it only works if every relevant transaction is classed, every time. Half-classed books are worse than unclassed ones: an &ldquo;unclassified&rdquo; bucket quietly absorbs transactions, and the per-class reports mislead because the totals don&rsquo;t add up to the whole. Setting up classes deliberately is part of a proper <a href=\"/quickbooks/setup/\">setup</a>, and inconsistent classing is a recurring cleanup correction.",
      ],
    },
    how: {
      paras: [
        "Class tracking is turned on in settings, a short list of classes is defined to match how the business is actually segmented, and from then on each transaction is tagged as it&rsquo;s entered. The payoff is the P&amp;L by class report &mdash; one column per segment &mdash; which is only as trustworthy as the consistency of the tagging behind it.",
      ],
    },
    clarify: {
      heading: "Classes vs. the chart of accounts.",
      paras: [
        "They&rsquo;re easy to confuse. The <strong>chart of accounts</strong> categorizes <em>what kind</em> of transaction it is; <strong>classes</strong> categorize <em>which part of the business</em> it belongs to. You don&rsquo;t create a new account for each location &mdash; you use one set of accounts and one class per location, so the P&amp;L can slice either way.",
      ],
    },
    related: [
      { href: "/quickbooks/setup/", title: "QuickBooks setup", blurb: "Classes set up deliberately from the start &mdash; matched to how the business is actually segmented." },
      { href: "/accounting/industries/", title: "Industry-specific accounting", blurb: "Multi-location, multi-program, and property businesses are where class tracking earns its keep." },
      { href: "/glossary/profit-and-loss-statement/", title: "Profit and loss statement", blurb: "The P&L by class is the report class tracking exists to produce." },
    ],
    call: { title: "Want a P&amp;L by location or program?", sub: "A Certified ProAdvisor sets up class tracking to match how your business really runs &mdash; and fixes inconsistent classing if it&rsquo;s already in place. Fixed-fee, in writing. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "bank-feeds",
    term: "Bank feeds",
    title: "Bank Feeds in QuickBooks — What They Do & Their Limits · TechBrot",
    description: "Bank feeds: the QuickBooks feature that imports transactions automatically from a connected bank or card into the For Review queue. What they do, why they speed bookkeeping, and why a feed is not a finished reconciliation. By Certified QuickBooks ProAdvisors.",
    shortDef: "The QuickBooks feature that imports transactions automatically from a connected bank or credit-card account into a For Review queue, where each one is categorized and matched &mdash; speeding bookkeeping, but not replacing reconciliation.",
    blurb: "The QuickBooks feature that auto-imports transactions from a connected bank or card into the For Review queue. Speeds bookkeeping &mdash; but matching the feed is not a finished reconciliation.",
    definition: [
      "<strong>Bank feeds</strong> are a QuickBooks feature that connects to your bank or credit-card account and imports transactions automatically into a <strong>For Review</strong> queue. Instead of typing each transaction in by hand, you review what came in, confirm or set its category, and either match it to a transaction already in the books or add it as a new one.",
      "The feed is a data-entry accelerator: it pulls the raw activity in quickly and accurately, and rules can pre-categorize recurring transactions. What it does not do is decide that the activity is complete and correct &mdash; that is still a person&rsquo;s job.",
    ],
    why: {
      heading: "A feed is not a reconciliation.",
      paras: [
        "This is the single most important and most misunderstood point about bank feeds: clearing the For Review queue is not the same as reconciling the account. The feed shows what the bank <em>sent</em>; it doesn&rsquo;t prove the account matches the bank&rsquo;s ending balance for the period. Transactions can be miscategorized, matched to the wrong entry, duplicated, or missing if the feed dropped them &mdash; and the queue will still look empty.",
        "A completed <a href=\"/glossary/bank-reconciliation/\">bank reconciliation</a> is the separate step that confirms the full set of transactions ties to the statement and the account closes to the right balance. Bank feeds make the data entry faster; reconciliation is what makes the books true. Feeds also break &mdash; connections drop and imports stall &mdash; which is its own <a href=\"/quickbooks/help/bank-feeds-not-working/\">troubleshooting</a> problem.",
      ],
    },
    how: {
      paras: [
        "Each imported transaction lands in For Review, where you confirm its category and either match it to an existing entry (an invoice payment, a recorded bill) or add it as new. Once reviewed it moves into the register &mdash; ready to be reconciled, but not reconciled by the act of being reviewed.",
      ],
    },
    clarify: {
      heading: "For Review queue vs. the reconcile screen.",
      paras: [
        "Two different screens, two different jobs. The <strong>For Review</strong> queue is where imported transactions get categorized and matched &mdash; it&rsquo;s about getting each transaction <em>into</em> the books correctly. The <strong>reconcile</strong> screen is where you prove the books match the statement for the period. You can empty the queue and still be unreconciled.",
      ],
    },
    related: [
      { href: "/glossary/bank-reconciliation/", title: "Bank reconciliation", blurb: "The step bank feeds don&rsquo;t replace &mdash; proving the account matches the statement and closes to the right balance." },
      { href: "/quickbooks/help/bank-feeds-not-working/", title: "Bank feeds not working", blurb: "When the connection drops or transactions stop importing &mdash; how the feed gets restored." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Feeds reviewed correctly and every account reconciled each month &mdash; not just a cleared queue." },
    ],
    call: { title: "Relying on the feed and skipping the reconcile?", sub: "A Certified ProAdvisor reviews how your feeds are categorized and reconciles the accounts properly &mdash; so the books are true, not just tidy. Fixed-fee, in writing. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "audit-trail",
    term: "Audit trail",
    title: "QuickBooks Audit Trail (Audit Log) — What It Records & Why · TechBrot",
    description: "The QuickBooks audit trail: a built-in, unalterable log of every change to the file — who entered, edited, or deleted a transaction and when. What it records, where to find it, and why it's essential for accountability and cleanup. By Certified QuickBooks ProAdvisors.",
    shortDef: "QuickBooks&rsquo; built-in, unalterable log of every change made to the company file &mdash; who entered, edited, or deleted each transaction, what changed, and when &mdash; so nothing in the books is anonymous or untraceable.",
    blurb: "QuickBooks&rsquo; built-in, unalterable log of every change to the file &mdash; who did what, and when. Essential for accountability and for finding what changed.",
    definition: [
      "The <strong>audit trail</strong> is QuickBooks&rsquo; built-in record of every change made to the company file: each time a transaction is entered, edited, or deleted, QuickBooks logs who did it, when, and what the values were before and after. It is maintained automatically and cannot be turned off or altered by users, which is what makes it trustworthy as a record.",
      "In QuickBooks Online it is the <strong>Audit Log</strong>; in QuickBooks Desktop it is the <strong>Audit Trail</strong> report. Same idea in both: a complete, time-stamped history of activity in the file, attributed to the user who performed each action.",
    ],
    why: {
      heading: "Why the audit trail matters.",
      paras: [
        "The audit trail is accountability built into the books. When a balance changes unexpectedly, an invoice that was there last week is gone, or a number doesn&rsquo;t match what someone remembers, the log answers exactly what happened, when, and who did it &mdash; turning a mystery into a fact. That makes it indispensable for catching errors, investigating discrepancies, and detecting tampering or fraud.",
        "It is also a core tool in forensic and <a href=\"/quickbooks/cleanup/\">cleanup</a> work. Before a file can be trusted, you often need to know how it got into its current state &mdash; the audit trail shows the deletions and after-the-fact edits that explain why the books drifted, so the corrections fix the real cause rather than the symptom.",
      ],
      quote: "Nothing in a QuickBooks file is truly anonymous. The audit trail remembers who entered it, who changed it, and exactly when &mdash; even after the transaction itself is gone.",
    },
    how: {
      paras: [
        "The audit trail records automatically &mdash; there&rsquo;s nothing to switch on. To use it, you open the Audit Log (QBO) or run the Audit Trail report (Desktop) and filter by user, date, or transaction to see the full before-and-after history of what changed. The value isn&rsquo;t in producing the log; it&rsquo;s in reading it to reconstruct what actually happened in the file.",
      ],
    },
    clarify: null,
    related: [
      { href: "/quickbooks/cleanup/", title: "QuickBooks cleanup", blurb: "The audit trail shows how a file drifted &mdash; the deletions and edits cleanup work has to trace back and correct." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Accountable books where every change is attributable &mdash; and discrepancies are traceable, not guesswork." },
      { href: "/glossary/journal-entry/", title: "Journal entry", blurb: "After-the-fact entries and edits are exactly what the audit trail captures, before and after." },
    ],
    call: { title: "Numbers changed and no one knows how?", sub: "A Certified ProAdvisor reads the audit trail, finds what changed and when, and scopes the correction in writing &mdash; fixed-fee. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "memorized-transaction",
    term: "Memorized transaction",
    title: "Memorized / Recurring Transactions in QuickBooks — What They Are · TechBrot",
    description: "Memorized transactions (recurring transactions): saved templates QuickBooks uses to create repeating transactions on a schedule — recurring invoices, bills, journal entries. What they do, why they save time, and why stale templates cause errors. By Certified QuickBooks ProAdvisors.",
    shortDef: "A saved transaction template QuickBooks uses to create a repeating transaction automatically on a schedule &mdash; a recurring invoice, bill, or journal entry &mdash; so the same routine entry doesn&rsquo;t have to be built by hand every time.",
    blurb: "A saved template QuickBooks uses to create repeating transactions on a schedule &mdash; recurring invoices, bills, journal entries. Saves time; stale templates post wrong amounts.",
    definition: [
      "A <strong>memorized transaction</strong> is a saved template QuickBooks uses to generate a transaction that repeats on a schedule &mdash; a monthly invoice to the same client, a recurring rent bill, a standing <a href=\"/glossary/journal-entry\">journal entry</a>. You define the transaction once, set how often it should recur, and QuickBooks creates it automatically (or reminds you to) each cycle.",
      "QuickBooks Desktop calls these <strong>memorized transactions</strong>; QuickBooks Online calls them <strong>recurring transactions</strong>. The mechanism is the same in both: one saved template driving many identical or near-identical entries over time.",
    ],
    why: {
      heading: "Time-saving &mdash; until the template goes stale.",
      paras: [
        "For anything that repeats, memorized transactions remove the manual work and the risk of forgetting: the recurring invoice goes out, the standing bill posts, the monthly accrual entry lands &mdash; consistently, on schedule, in the same form every time. That consistency is part of what makes a <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> routine reliable.",
        "The risk is the flip side of that automation: a template that&rsquo;s out of date keeps posting anyway. A rent amount that changed, a client who&rsquo;s no longer active, an account that was renamed &mdash; the memorized transaction will keep creating the old version until someone updates or stops it, quietly entering wrong amounts every cycle. Reviewing memorized transactions is part of keeping a clean file, and stale ones are a recurring cleanup finding.",
      ],
    },
    how: {
      paras: [
        "You build the transaction once, then save it as memorized (Desktop) or recurring (QBO) with a schedule and an action &mdash; post automatically, or prompt you to confirm. From then on QuickBooks creates each instance on schedule. The maintenance, not the setup, is where care is needed: when the underlying details change, the template has to change with them.",
      ],
    },
    clarify: {
      heading: "Same feature, two names.",
      paras: [
        "If you move between QuickBooks Desktop and QuickBooks Online, the terminology shifts but the concept doesn&rsquo;t. <strong>Memorized transaction</strong> (Desktop) and <strong>recurring transaction</strong> (Online) refer to the same thing: a saved template that drives scheduled, repeating entries.",
      ],
    },
    related: [
      { href: "/quickbooks/setup/", title: "QuickBooks setup", blurb: "Recurring transactions set up correctly from the start &mdash; the right templates, schedules, and amounts." },
      { href: "/accounting/bookkeeping/monthly-bookkeeping/", title: "Monthly bookkeeping", blurb: "Recurring entries that post reliably each cycle &mdash; and get reviewed so stale templates don&rsquo;t post wrong amounts." },
      { href: "/quickbooks/cleanup/", title: "QuickBooks cleanup", blurb: "Stale memorized transactions quietly posting outdated amounts are a recurring cleanup finding." },
    ],
    call: { title: "Recurring entries posting the wrong amounts?", sub: "A Certified ProAdvisor reviews your memorized and recurring transactions, fixes the stale ones, and gets them posting correctly &mdash; fixed-fee, in writing. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

{
    slug: "w-9-form",
    term: "Form W-9",
    title: "Form W-9 — What It Is & Why You Collect It Before You Pay · TechBrot",
    description: "Form W-9: the IRS form a business collects from a vendor or contractor to get their legal name, address, and taxpayer ID so it can issue a 1099 at year end. What it is, when to collect it, and how it differs from a 1099. By Certified QuickBooks ProAdvisors.",
    shortDef: "The IRS form a business collects <em>from</em> a vendor or contractor &mdash; capturing their legal name, address, and taxpayer ID (TIN, SSN, or EIN) &mdash; so the business can issue a 1099 at year end. Collect it before you pay.",
    blurb: "The form you collect from a contractor to get their taxpayer ID &mdash; so you can issue a 1099 at year end. Educational only.",
    definition: [
      "<strong>Form W-9</strong> (&ldquo;Request for Taxpayer Identification Number and Certification&rdquo;) is the IRS form a business collects <em>from</em> a vendor or independent contractor before paying them. The contractor fills it out with their legal name, business name if any, address, and taxpayer identification number &mdash; an SSN for an individual or an <a href=\"/glossary/ein/\">EIN</a> for a business &mdash; and signs it. The business keeps the W-9 on file; it is not sent to the IRS.",
      "The W-9 exists so the payer has the verified information it needs to issue a <a href=\"/glossary/1099-nec/\">Form 1099</a> after year end. Without a completed W-9, a business can be left chasing a contractor for a taxpayer ID at the worst possible time &mdash; or facing backup-withholding rules. This page is educational; whether a payment requires a W-9 or a 1099, and any related tax obligation, is confirmed with your CPA or EA.",
    ],
    why: {
      heading: "Collect it before you pay &mdash; not at year end.",
      paras: [
        "Missing W-9s are one of the most common cleanup gaps we find. The form is easy to get when a contractor wants to be paid and hard to get once the work is done and the invoice is settled. Making a signed W-9 a condition of the first payment means that, twelve months later, the information needed to issue a 1099 is already on file &mdash; instead of becoming a January scramble.",
        "What TechBrot does is operational: we help track which vendors in your QuickBooks file are 1099-eligible and which are still missing a W-9, so the year-end 1099 run isn&rsquo;t derailed by gaps &mdash; see <a href=\"/quickbooks/help/1099-errors/\">1099 errors in QuickBooks</a>. Collecting the form, and any decision about a worker&rsquo;s tax treatment, stays with you and your CPA or EA.",
      ],
      quote: "The W-9 is cheap insurance: a two-minute form at the start that prevents a year-end emergency you can&rsquo;t fully fix.",
    },
    how: null,
    clarify: {
      heading: "W-9 vs. 1099 &mdash; which way does it flow?",
      paras: [
        "They&rsquo;re two ends of the same process, and they&rsquo;re easy to confuse. You <strong>collect a W-9</strong> from the people you pay &mdash; it flows <em>in</em> to you. You <strong>issue a 1099</strong> to those same people after year end &mdash; it flows <em>out</em> from you, using the information the W-9 provided. The W-9 is the input; the <a href=\"/glossary/1099-nec/\">1099-NEC</a> is the output.",
      ],
    },
    related: [
      { href: "/glossary/1099-nec/", title: "Form 1099-NEC", blurb: "The year-end information return the W-9 makes possible &mdash; the output to the W-9&rsquo;s input." },
      { href: "/glossary/1099-vs-w2/", title: "1099 vs. W-2", blurb: "Whether a worker is a contractor (W-9 then 1099) or an employee (W-4 then W-2) &mdash; the classification behind it." },
      { href: "/quickbooks/help/1099-errors/", title: "1099 errors in QuickBooks", blurb: "Missing W-9s and bad vendor data are the root of most year-end 1099 errors &mdash; how we get the data right." },
    ],
    call: { title: "Year-end 1099s held up by missing W-9s?", sub: "A Certified ProAdvisor reviews your QuickBooks vendors, flags who&rsquo;s 1099-eligible and missing a W-9, and gets the books and vendor data right &mdash; fixed-fee, in writing. Your CPA files; we&rsquo;re an independent firm, not Intuit. Educational only &mdash; not tax advice." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "1099-nec",
    term: "Form 1099-NEC",
    title: "Form 1099-NEC — Nonemployee Compensation Explained · TechBrot",
    description: "Form 1099-NEC: the IRS information return businesses file to report nonemployee compensation — generally $600 or more paid to an independent contractor in a year. What it reports, the $600 threshold, and why card payments go on a 1099-K instead. By Certified QuickBooks ProAdvisors.",
    shortDef: "The IRS information return a business files to report <strong>nonemployee compensation</strong> &mdash; generally $600 or more paid to an independent contractor during the year. Reintroduced in 2020, split back out from the 1099-MISC.",
    blurb: "The form that reports $600+ paid to a contractor in a year &mdash; we get the QuickBooks data right; your CPA files. Educational only.",
    definition: [
      "<strong>Form 1099-NEC</strong> (&ldquo;Nonemployee Compensation&rdquo;) is the IRS information return a business uses to report payments made to independent contractors and other nonemployees &mdash; generally $600 or more paid to a given payee over the course of the year. The contractor gets a copy and reports the income; the IRS gets a copy to match against that contractor&rsquo;s return.",
      "The form was reintroduced for the 2020 tax year, splitting nonemployee compensation back out of <a href=\"/glossary/1099-vs-w2/\">Form 1099-MISC</a>, where it had lived in &ldquo;Box 7&rdquo; for decades. This page is educational; the $600 figure is the well-established general threshold, but whether a specific payment is reportable, and the filing itself, are confirmed with your CPA or EA.",
    ],
    why: {
      heading: "Get the vendor data right, and the filing follows.",
      paras: [
        "A correct 1099-NEC run depends entirely on clean books: the right vendors flagged as 1099-eligible, a <a href=\"/glossary/w-9-form/\">W-9</a> on file for each, and the amounts paid totaled accurately by payee. When any of that is missing or wrong, the year-end run produces errors &mdash; wrong totals, missing payees, duplicate filings &mdash; that take real work to unwind under deadline.",
        "What TechBrot does is the operational half: getting your QuickBooks vendor data, eligibility flags, and amounts right so the numbers behind each 1099 are accurate &mdash; see <a href=\"/quickbooks/help/1099-errors/\">1099 errors in QuickBooks</a>. The filing itself runs through Intuit&rsquo;s 1099 e-file service or your CPA. We keep the records right; the licensed professional advises and files.",
      ],
    },
    how: null,
    clarify: {
      heading: "1099-NEC vs. 1099-MISC vs. 1099-K.",
      paras: [
        "<strong>1099-NEC</strong> reports nonemployee compensation &mdash; what you pay contractors for their services. <strong>1099-MISC</strong> reports other miscellaneous payments &mdash; rent, royalties, prizes, certain legal payments &mdash; that are <em>not</em> compensation for services. And critically: payments you make by credit card or through a third-party processor are reported on a <strong>1099-K</strong> by the processor, <em>not</em> on your 1099-NEC &mdash; reporting them on both would double-count the contractor&rsquo;s income.",
      ],
    },
    related: [
      { href: "/glossary/w-9-form/", title: "Form W-9", blurb: "The form you collect from a contractor up front &mdash; the source of the name and taxpayer ID a 1099-NEC needs." },
      { href: "/glossary/1099-vs-w2/", title: "1099 vs. W-2", blurb: "Whether a worker gets a 1099-NEC (contractor) or a W-2 (employee) &mdash; the classification that decides which form applies." },
      { href: "/quickbooks/help/1099-errors/", title: "1099 errors in QuickBooks", blurb: "Wrong amounts, missing payees, card payments double-counted &mdash; the common 1099 errors and how we fix the data." },
    ],
    call: { title: "1099-NEC season coming up?", sub: "A Certified ProAdvisor gets your QuickBooks vendor data, eligibility flags, and amounts right so the 1099 run is clean &mdash; fixed-fee, in writing. Your CPA files; we&rsquo;re an independent firm, not Intuit. Educational only &mdash; not tax advice." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "ein",
    term: "Employer Identification Number (EIN)",
    title: "EIN (Employer Identification Number) — What It Is & When You Need One · TechBrot",
    description: "Employer Identification Number (EIN): the IRS-issued nine-digit federal tax ID for a business — like an SSN for the entity. What it is, when you need one to hire, file, or open a bank account, and how it differs from a state tax ID. By Certified QuickBooks ProAdvisors.",
    shortDef: "The IRS-issued nine-digit federal tax ID for a business &mdash; effectively an SSN for the entity. It identifies the business on federal returns, payroll filings, and bank accounts. Issued by the IRS, free of charge.",
    blurb: "The IRS&rsquo;s nine-digit federal tax ID for a business &mdash; like an SSN for the entity. Educational only; the IRS issues it.",
    definition: [
      "An <strong>Employer Identification Number</strong> (EIN), also called a Federal Tax Identification Number, is the nine-digit number the IRS issues to identify a business for federal tax purposes &mdash; in effect, a Social Security number for the entity rather than a person. It appears on the business&rsquo;s federal returns, payroll filings, and the forms its banks and vendors keep on file.",
      "A business generally needs an EIN to hire employees, file business tax returns, open a business bank account, and often to form an entity such as an LLC or corporation. The IRS issues an EIN directly, free of charge. This page is educational; whether your business needs one, and any entity or tax question around it, belongs with the IRS and your CPA or EA &mdash; not with us.",
    ],
    why: {
      heading: "Where the EIN shows up in your books.",
      paras: [
        "The EIN is the thread that ties a business&rsquo;s financial records together: it&rsquo;s on the business bank accounts you reconcile, the payroll tax filings, and the W-9 the business hands to its own customers. Keeping payroll and the books set up under the correct EIN &mdash; especially after an entity change &mdash; is what keeps filings and records consistent.",
        "What TechBrot does is operational: making sure the EIN is recorded correctly in QuickBooks and that payroll and the books are configured to it &mdash; see <a href=\"/accounting/payroll-management/\">payroll management</a>. Obtaining the EIN, and any entity or tax decision behind it, is handled directly with the IRS and your CPA or EA.",
      ],
    },
    how: null,
    clarify: {
      heading: "EIN (federal) vs. a state tax ID.",
      paras: [
        "They&rsquo;re different numbers from different authorities. The <strong>EIN</strong> is federal, issued once by the IRS, and identifies the business to the federal government. A <strong>state tax or registration ID</strong> is issued separately by a state &mdash; for state payroll withholding, sales tax, or business registration &mdash; and a business operating in several states may hold more than one. Having an EIN does not give you a state ID, and vice versa.",
      ],
    },
    related: [
      { href: "/accounting/payroll-management/", title: "Payroll management", blurb: "Payroll runs under the business&rsquo;s EIN &mdash; we keep the setup and filings consistent with it." },
      { href: "/glossary/w-9-form/", title: "Form W-9", blurb: "An incorporated contractor reports its EIN on the W-9 you collect &mdash; the same kind of federal tax ID, for their entity." },
      { href: "/glossary/1099-nec/", title: "Form 1099-NEC", blurb: "A payee&rsquo;s EIN or SSN is the taxpayer ID that appears on the 1099 you issue." },
    ],
    call: { title: "Payroll or books not lined up to the right EIN?", sub: "A Certified ProAdvisor confirms your EIN is recorded correctly in QuickBooks and that payroll and the books are configured to it &mdash; fixed-fee, in writing. The IRS issues the EIN; your CPA advises. Independent firm, not Intuit. Educational only &mdash; not tax advice." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

{
    slug: "estimated-taxes",
    term: "Estimated taxes",
    title: "Estimated Taxes — Quarterly Payments & Why Accurate Books Matter · TechBrot",
    description: "Estimated taxes: the quarterly payments individuals and businesses make on income not subject to withholding, because the U.S. tax system is pay-as-you-go. What they are, why underpaying triggers penalties, and why accurate books make the estimate reliable. Educational only &mdash; your CPA or EA calculates and files. By Certified QuickBooks ProAdvisors.",
    shortDef: "Periodic payments &mdash; generally quarterly &mdash; that individuals and businesses make through the year on income that isn&rsquo;t subject to withholding, because the U.S. tax system is pay-as-you-go.",
    blurb: "Quarterly payments on income that isn&rsquo;t withheld &mdash; the pay-as-you-go system. Your CPA calculates them; accurate books make the estimate reliable.",
    definition: [
      "<strong>Estimated taxes</strong> are periodic payments individuals and businesses make to the IRS &mdash; and usually their state &mdash; through the year on income that isn&rsquo;t subject to withholding. The U.S. tax system is <em>pay-as-you-go</em>: tax is meant to be paid as income is earned, not in a single lump at filing. Employees meet that through paycheck withholding; the self-employed, business owners, and anyone with significant untaxed income (profit distributions, interest, gains) generally meet it by making estimated payments instead.",
      "They are generally paid quarterly, on a schedule the IRS sets each year. Underpaying &mdash; paying too little, or too late &mdash; can trigger an IRS underpayment penalty even if the full balance is settled at filing, which is why estimating accurately through the year matters.",
    ],
    why: {
      heading: "Accurate books are what make the estimate reliable.",
      paras: [
        "An estimate is only as good as the numbers behind it. If the books are behind, unreconciled, or miscategorized, the income figure your CPA or EA works from is a guess &mdash; and a guess that&rsquo;s too low invites a penalty, while one that&rsquo;s too high ties up cash you needed. Current, reconciled books let the person calculating your estimate work from real profit, not a hopeful number.",
        "TechBrot keeps the books accurate and current so your CPA or EA can calculate your estimated payments from real figures, and so a quarterly profit picture is there when the decision is due. We do the bookkeeping; the licensed tax professional does the math and the filing. See our <a href=\"/accounting/bookkeeping/\">bookkeeping</a> and <a href=\"/accounting/advisory/\">advisory</a> work for how the foundation is kept.",
      ],
      quote: "We don&rsquo;t calculate your estimated taxes &mdash; your CPA does. We make sure the books they calculate from are true.",
    },
    how: null,
    clarify: {
      heading: "Estimated taxes vs. payroll-tax deposits.",
      paras: [
        "They are easy to confuse but flow in different directions. <strong>Estimated taxes</strong> are paid by <em>you</em> (or your business) to the IRS and state on your own untaxed income. <a href=\"/glossary/payroll-liabilities/\">Payroll-tax deposits</a> are made by an <em>employer</em> remitting tax that was withheld from <em>employees&rsquo;</em> wages, on the employees&rsquo; behalf. One covers the owner&rsquo;s income; the other is the employer passing along money it held in trust.",
        "This page is educational only. The amount you owe, the safe-harbor rules that protect against penalties, and the actual filing are your CPA&rsquo;s or EA&rsquo;s &mdash; TechBrot is an independent ProAdvisor firm and does not calculate, advise on, or file taxes.",
      ],
    },
    related: [
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Current, reconciled books are what let your CPA estimate from real income, not a guess." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "A quarterly profit picture, so the cash for an estimated payment is never a surprise." },
      { href: "/glossary/payroll-liabilities/", title: "Payroll liabilities", blurb: "The other tax owed through the year &mdash; employer-remitted, not the owner&rsquo;s estimated payment." },
    ],
    call: { title: "Books too far behind to estimate from?", sub: "A Certified ProAdvisor brings your books current and reconciled so your CPA can calculate estimated taxes from real numbers &mdash; written fixed-fee scope. We keep the books accurate; your CPA files. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "payroll-liabilities",
    term: "Payroll liabilities",
    title: "Payroll Liabilities — Definition & Why They Must Be Remitted On Time · TechBrot",
    description: "Payroll liabilities: amounts a business has withheld from employees or owes as an employer but not yet remitted &mdash; income-tax withholding, Social Security and Medicare, unemployment, and benefit withholdings. What they are, why trust-fund taxes must be remitted on time, and how they&rsquo;re kept reconciled in QuickBooks. By Certified QuickBooks ProAdvisors.",
    shortDef: "Amounts a business has withheld from employees, or owes as an employer, but not yet remitted to the agencies &mdash; a liability on the balance sheet until it&rsquo;s paid.",
    blurb: "What you&rsquo;ve withheld from employees or owe as an employer but haven&rsquo;t yet remitted &mdash; a liability until it&rsquo;s paid, and the trust-fund portion is serious.",
    definition: [
      "<strong>Payroll liabilities</strong> are the amounts a business has either withheld from employees&rsquo; pay or incurred as an employer, but has not yet remitted to the taxing agencies and benefit providers. They include employee income-tax withholding, Social Security and Medicare (both the employee and the employer halves), federal and state unemployment, and any benefit withholdings such as health-insurance premiums or retirement contributions.",
      "Each of these sits as a <em>liability</em> on the balance sheet from the moment payroll is run until the money is actually paid to the agency. The amounts withheld from employees are <strong>trust-fund taxes</strong> &mdash; money the business holds on the employees&rsquo; behalf &mdash; and they must be remitted on time; the agencies treat trust-fund obligations seriously.",
    ],
    why: {
      heading: "A liability until it&rsquo;s paid &mdash; and the books have to show it.",
      paras: [
        "Between running payroll and paying the agencies, the withheld and accrued amounts are real obligations sitting on the books. If they aren&rsquo;t recorded and reconciled correctly, the balance sheet understates what the business owes and the cash that looks available isn&rsquo;t really yours &mdash; it&rsquo;s the employees&rsquo; tax, held in trust. Misstated payroll liabilities are a common source of confusion and of <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> work.",
        "TechBrot keeps payroll liabilities recorded and reconciled in QuickBooks so the balance always reflects what&rsquo;s genuinely owed. The actual filing and remittance run through your payroll service &mdash; Intuit&rsquo;s payroll product or another provider &mdash; or your CPA; we make sure the books match what was filed and paid. See <a href=\"/accounting/payroll-management/\">payroll management</a> and <a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> for how that fits together.",
      ],
    },
    how: null,
    clarify: {
      heading: "Recorded and reconciled vs. filed and remitted.",
      paras: [
        "There are two different jobs here. <strong>Recording and reconciling</strong> payroll liabilities in QuickBooks &mdash; making sure the books show the right amount owed and that it clears when paid &mdash; is the bookkeeping work TechBrot does. <strong>Filing the returns and remitting the money</strong> to the IRS and state agencies is handled by your payroll service (Intuit payroll or another provider) or your CPA.",
        "When the books and the payroll filings disagree &mdash; a deposit not recorded, a liability that won&rsquo;t clear &mdash; that&rsquo;s reconcilable bookkeeping work; see <a href=\"/quickbooks/help/payroll-tax-error/\">payroll-tax errors in QuickBooks</a>. TechBrot is an independent firm and not affiliated with Intuit.",
      ],
    },
    related: [
      { href: "/quickbooks/payroll/", title: "QuickBooks Payroll", blurb: "Where payroll liabilities are tracked &mdash; kept recorded and reconciled against what was filed." },
      { href: "/accounting/payroll-management/", title: "Payroll management", blurb: "Payroll run and reconciled in the books; filing and remittance via your provider or CPA." },
      { href: "/quickbooks/help/payroll-tax-error/", title: "Payroll-tax errors in QuickBooks", blurb: "When a payroll liability won&rsquo;t clear or the books don&rsquo;t match the filing." },
    ],
    call: { title: "Payroll liabilities that won&rsquo;t reconcile?", sub: "A Certified ProAdvisor gets your payroll liabilities recorded and reconciled in QuickBooks so the books match what was filed &mdash; written fixed-fee scope. Filing and remittance run through your payroll service or CPA. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },

  {
    slug: "fiscal-year",
    term: "Fiscal year",
    title: "Fiscal Year — Definition & How It Differs From a Calendar Year · TechBrot",
    description: "Fiscal year: the 12-month period a business uses for accounting and tax reporting &mdash; often the calendar year, but it can be any 12-month span. What it is, how it differs from the calendar year, and why the choice affects when books close and returns are due. The election is confirmed with your CPA. By Certified QuickBooks ProAdvisors.",
    shortDef: "The 12-month period a business uses for accounting and tax reporting &mdash; often the calendar year (January through December), but it can be any 12-month span a business chooses.",
    blurb: "The 12-month period a business reports on &mdash; often the calendar year, but not always. It sets when the books close and returns come due.",
    definition: [
      "A <strong>fiscal year</strong> is the 12-month period a business uses for its accounting and tax reporting. For many businesses it is the <strong>calendar year</strong> &mdash; January 1 through December 31 &mdash; but it doesn&rsquo;t have to be. A fiscal year can be any 12-month span: a retailer might end its year on January 31, after the holiday rush has fully settled, so the busiest season falls inside one clean reporting period.",
      "The fiscal year sets the rhythm of the books: it determines when the year-end <a href=\"/glossary/month-end-close/\">close</a> happens, when annual financial statements are produced, and when tax returns come due. Once chosen, it&rsquo;s the frame every annual report is built in.",
    ],
    why: {
      heading: "Why the choice shapes your reporting.",
      paras: [
        "Picking a fiscal year that matches how the business actually operates makes the numbers easier to read: a seasonal business that ends its year right after its peak gets a cleaner picture of a full cycle than one split awkwardly across two calendar years. The choice also fixes your deadlines &mdash; when the books must be closed and when returns are due &mdash; so it shapes the whole annual workload.",
        "TechBrot keeps your books and closes aligned to whatever fiscal year you&rsquo;re on, so each period ties out and the year-end package is ready on schedule. The actual fiscal-year (tax-year) election &mdash; whether you may use a non-calendar year, and how to elect or change it &mdash; is a tax matter confirmed with your CPA or EA.",
      ],
    },
    how: null,
    clarify: {
      heading: "Fiscal year vs. calendar year.",
      paras: [
        "A <strong>calendar year</strong> always runs January 1 to December 31. A <strong>fiscal year</strong> is any 12-month reporting period a business uses &mdash; which <em>may</em> be the calendar year, or may end on a different date (a fiscal year ending January 31, June 30, and so on). Every calendar year is a fiscal year; not every fiscal year is the calendar year.",
        "Which one you may use, and the fiscal-year or tax-year election, is confirmed with your CPA &mdash; TechBrot is an independent ProAdvisor firm and does not advise on or file the tax-year election. We keep the books accurate on whichever year you&rsquo;re on.",
      ],
    },
    related: [
      { href: "/glossary/month-end-close/", title: "Month-end close", blurb: "The monthly discipline that rolls up into the fiscal year-end close." },
      { href: "/accounting/bookkeeping/", title: "Bookkeeping services", blurb: "Books kept and closed in step with your fiscal year, year-end package ready on schedule." },
      { href: "/accounting/advisory/", title: "Advisory & fractional CFO", blurb: "Reading a full fiscal year against how the business actually cycles." },
    ],
    call: { title: "Year-end books that aren&rsquo;t ready on time?", sub: "A Certified ProAdvisor keeps your books closed and reconciled on your fiscal-year schedule, so the year-end package is ready &mdash; written fixed-fee scope. The tax-year election is confirmed with your CPA; we keep the books accurate. Independent firm; not Intuit." },
    faq: null,
    published: "2026-06-18", updated: "2026-06-18",
  },
];
