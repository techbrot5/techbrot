/* /quickbooks/help/error-codes/ — error-codes HUB (round-21 clean elevation;
 * the parent of the error-child cluster, resolves h202's hub link). t-guide tier
 * (reference; no call-bar). Sources: baseline.json (63 headings / 7 FAQ /
 * CollectionPage+BreadcrumbList+ItemList+FAQPage) + old root HTML (full copy read).
 * Every baseline heading carried as a real <hN>; codes WITHOUT a dedicated page
 * (H505/H101/H303/6190/6000-77/6000-301/PS036/PS077/80070057/15215) render as
 * heading text only (no link) so equity is preserved with zero preview 404s; the
 * 6000 sub-variants link to the complete error-6000-series page. Honest-triage:
 * disclosure above the fold; first FAQ is the "official?" question; never
 * "official" near the offer; provider always #organization. Conversion seam in
 * tldr / families lede / operator / ctaBand. SHORT stat-row values (768 lesson).
 * CTA: guide tier — file-review primary, book-call secondary, phone tertiary.
 * Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "6", label: "error-code families documented in this reference" },
  ],
  credentials: [
    "Every error reference here is written by Certified QuickBooks ProAdvisors who&rsquo;ve resolved these codes in real client files &mdash; not general support staff reading scripts.",
    "Active certifications across Desktop, Enterprise, Online (Level 2), and Payroll, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Independent, operational help &mdash; we earn nothing from your QuickBooks subscription, so the fix we recommend is the one that resolves your error.",
  ],
  // quick-5 — distinct from the FAQ (zero question overlap enforced by battery)
  aiSummary: [
    { q: "What are the most common QuickBooks errors?", a: "Six families: <strong>H-series</strong> (multi-user/network), <strong>6000-series</strong> (file access/integrity), <strong>PS-series</strong> (payroll subscription), <strong>3371 and 80000-series</strong> (license/path), <strong>15000-series</strong> (payroll updates), and <strong>unrecoverable / C-series</strong> (corruption). Most-searched individual codes: <strong>H202, 6000-77, PS038, 3371, 15240</strong>." },
    { q: "Are these Desktop or Online errors?", a: "These codes apply almost entirely to <strong>QuickBooks Desktop, Premier, Mac, and Enterprise</strong>. QuickBooks Online uses descriptive text messages, not numbered codes &mdash; QBO errors are handled through different diagnostic approaches (browser, integrations, bank feeds)." },
    { q: "Can I fix a QuickBooks error myself?", a: "<strong>Sometimes.</strong> First-occurrence H-series, basic 6000-series, and most 15000-series errors often resolve with the <strong>QuickBooks Tool Hub</strong>, firewall checks, and the documented self-fix steps on each code&rsquo;s page. Recurring errors, file corruption, and unrecoverable errors typically need a ProAdvisor." },
    { q: "When does an error need a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it, the error <strong>recurs after a fix</strong>, multiple errors appear together, you&rsquo;re seeing <strong>file-corruption signals</strong>, or the error is blocking <strong>payroll, month-end, or AR/AP work</strong>. A ProAdvisor diagnostic typically scopes within a day." },
    { q: "Should I call Intuit or a ProAdvisor?", a: "<strong>Intuit</strong>: billing, license validation, basic installation, payroll subscription verification. <strong>ProAdvisor</strong>: file repair, multi-user networking, recurring errors past Intuit&rsquo;s first-line fix, time-critical work, errors requiring bookkeeping judgment. The two complement each other." },
  ],
  // The six families — grid-3 review-card. Heading text is the baseline H3 verbatim.
  families: [
    { codes: "H101 · H202 · H303 · H505", name: "H-series &middot; Multi-user &amp; network", body: "Multi-user mode breaks; workstations can&rsquo;t connect to the company file on the host. Caused by Database Server Manager configuration, hosting settings, firewalls, or path changes." },
    { codes: "6000-77 · 6000-301 · 6189 · 6190 · 6147", name: "6000-series &middot; File access &amp; integrity", body: "File access, permission, or corruption errors. The file is locked, in use, damaged, or in a path QuickBooks can&rsquo;t reach correctly." },
    { codes: "PS032 · PS036 · PS038 · PS077 · PS107", name: "PS-series &middot; Payroll", body: "Payroll-specific errors: subscription validation, tax-table downloads, paycheck processing. Often tied to payroll service status more than to the file itself." },
    { codes: "3371 · 80070057 · 3000s", name: "3000- &amp; 80000-series &middot; License &amp; path", body: "License validation, product registration, and file-path or qbregistration.dat errors. Often resolved with QuickBooks Tool Hub or reinstallation." },
    { codes: "15215 · 15240 · 15243 · 15276", name: "15000-series &middot; Updates &amp; maintenance", body: "Payroll and product update errors &mdash; downloads failing, SSL/certificate issues, security settings interfering. Usually resolvable without file work." },
    { codes: "Unrecoverable · C=224 · C=43 · C=51", name: "Unrecoverable &amp; C-series &middot; Critical", body: "File corruption or critical software faults. The most serious category &mdash; typically require ProAdvisor intervention rather than self-fix." },
  ],
  // H-series — only H202 has a dedicated page; the rest are heading text only.
  hSeries: [
    { name: "Error H202", href: "/quickbooks/help/error-codes/h202/", body: "The most common H-series error. Workstation can&rsquo;t communicate with the server hosting the file &mdash; typically Database Server Manager not running, hosting misconfigured, or a firewall blocking. Resolution requires touching both host and workstation. Full self-fix and HowTo on the dedicated page." },
    { name: "Error H505", body: "Workstation thinks the company file is on another workstation, but that machine isn&rsquo;t set up to host. Similar root cause to H202, but specifically a hosting-configuration issue. Resolution involves verifying which machine should host." },
    { name: "Error H101", body: "QuickBooks needs additional configuration to switch to multi-user mode. Often a sign of a fresh installation or a new workstation that wasn&rsquo;t fully set up for multi-user. Resolution involves Database Server Manager configuration." },
    { name: "Error H303", body: "Similar pattern to H202 and H505 &mdash; multi-user mode breakdown between workstation and host. The same diagnostic approach (Database Server Manager, hosting settings, firewall, path) applies." },
  ],
  // 6000-series — all variants point to the complete 6000-series reference page.
  sixThousand: [
    { name: "Error 6190 &amp; -816", href: "/quickbooks/help/error-codes/error-6000-series/", body: "Single-user file open in multi-user mode, or the transaction log (.TLG) out of sync with the company file (.QBW). Often resolved by renaming .TLG and .ND files; persistent occurrences point to file-integrity issues." },
    { name: "Error 6000-77", href: "/quickbooks/help/error-codes/error-6000-series/", body: "QuickBooks can&rsquo;t access the file path &mdash; usually a mapped network drive or external storage. Often resolved by moving the file local or using UNC paths instead of mapped drives. Permission issues are the second common cause." },
    { name: "Error 6000-301", href: "/quickbooks/help/error-codes/error-6000-series/", body: "File-damage variant of the 6000-series. The file has integrity issues needing repair via QuickBooks File Doctor or, more commonly, a ProAdvisor-level rebuild. Self-fix works only for surface-level damage." },
    { name: "Complete 6000-series reference", href: "/quickbooks/help/error-codes/error-6000-series/", body: "All 6000-variants in one place: 6000-77, 6000-80, 6000-83, 6000-301, 6000-832, 6147, 6189, 6190, and the patterns connecting them &mdash; the page to bookmark if you&rsquo;re seeing multiple 6000-variants." },
  ],
  // PS-series — only PS038 has a dedicated page.
  psSeries: [
    { name: "Error PS038", href: "/quickbooks/help/error-codes/ps038/", body: "Paychecks stuck in &ldquo;Online to Send&rdquo; status &mdash; typically created while offline, then unable to sync. Resolution involves identifying the stuck paychecks and re-sending them, sometimes with payroll-service support to clear the queue. Full HowTo on the dedicated page." },
    { name: "Error PS036", body: "Payroll subscription validation failure &mdash; QuickBooks can&rsquo;t confirm the payroll subscription is active. Common after billing changes, expired cards, or subscription transitions. First step: verify subscription status with Intuit directly." },
    { name: "Error PS077", body: "Tax-table download fails. Causes range from an outdated QuickBooks version to incomplete billing information to security settings (still relevant for some QB versions). Usually resolvable without ProAdvisor involvement." },
    { name: "PS032 &amp; PS107", body: "Variants in the PS family covering tax-table validation and paycheck-creation issues. Often share root causes with PS036 and PS077 &mdash; verify subscription and tax-table status first." },
  ],
  // 3000-/80000-series — only 3371 has a dedicated page.
  install: [
    { name: "Error 3371", href: "/quickbooks/help/error-codes/3371/", body: "License validation failure &mdash; QuickBooks can&rsquo;t validate the product license file (qbregistration.dat). Common after Windows updates, drive changes, or QB reinstalls. Typically resolved via Tool Hub or by recreating qbregistration.dat. Full self-fix on the dedicated page." },
    { name: "Error 80070057", body: "Wrong file extension, file-path issue, or permission problem when opening a company file. Often appears after moving files between locations or when antivirus quarantines QB files. Resolution: verify the file extension, move the file local, check permissions." },
  ],
  // 15000-series — only 15240 has a dedicated page.
  updates: [
    { name: "Error 15240", href: "/quickbooks/help/error-codes/15240/", body: "Payroll update fails to download or install. Common causes: SSL/security settings, incorrect system time/date, or antivirus blocking the download. Resolution: verify settings, the system clock, and run as administrator. Full HowTo on the dedicated page." },
    { name: "Error 15215", body: "Update server unavailable &mdash; QuickBooks can&rsquo;t verify the digital signature on an update file. Usually a conflicting application blocking QB&rsquo;s connection, or security settings. Resolution: identify and pause the conflicting app, verify settings." },
  ],
  // Critical — both Unrecoverable and C-series have dedicated pages.
  critical: [
    { name: "Unrecoverable Error", href: "/quickbooks/help/error-codes/unrecoverable-error/", body: "The most serious. QuickBooks crashes with a code like &ldquo;00000 14775&rdquo; or similar, indicating file damage or a critical software fault. Continuing to use the file without repair typically worsens the corruption. <strong>Stop, back up the file, and book a diagnostic.</strong>" },
    { name: "C-series errors", href: "/quickbooks/help/error-codes/c-series/", body: "<strong>C=224, C=43, C=51, others.</strong> Internal QuickBooks runtime errors &mdash; usually file corruption surfacing in specific operations (reports, reconciliation, multi-user). Persistent C-errors indicate the file needs a structural rebuild, not surface-level repair." },
    { name: "Multiple errors at once", body: "If you&rsquo;re seeing several different codes in the same week, the surface symptoms usually mask a single deeper file-integrity problem. The honest move: stop fixing each error individually and bring in a ProAdvisor for a comprehensive <a href=\"/quickbooks/cleanup/\">file cleanup</a>." },
  ],
  // Six signals — grid-3 review-card with rank labels.
  signals: [
    { rank: "Signal 01", name: "Self-fix didn&rsquo;t resolve it", body: "You ran QuickBooks Tool Hub, followed the documented steps for your code, and the error persists &mdash; the signal the underlying cause is past the documented surface fix. A ProAdvisor&rsquo;s diagnostic is appropriate." },
    { rank: "Signal 02", name: "The error keeps coming back", body: "The fix worked, then within days the error returned. Recurring errors indicate the root cause wasn&rsquo;t addressed &mdash; only the symptom was masked. A diagnostic finds the actual cause." },
    { rank: "Signal 03", name: "Multiple errors at once", body: "You&rsquo;re seeing more than one different error in the same week. That pattern almost always points to broader file-integrity problems rather than coincidentally separate issues." },
    { rank: "Signal 04", name: "File corruption signals", body: "Unrecoverable errors, C-series errors, persistent 6000-series with damage variants. The file itself needs repair, not just configuration adjustments &mdash; <a href=\"/quickbooks/cleanup/\">QuickBooks file cleanup</a> is the right engagement." },
    { rank: "Signal 05", name: "It&rsquo;s blocking critical work", body: "Payroll is stuck, month-end can&rsquo;t close, AR collections are paused. When time matters more than cost, bringing in a ProAdvisor immediately beats continuing to troubleshoot." },
    { rank: "Signal 06", name: "You don&rsquo;t have time to troubleshoot", body: "Self-fix takes hours. If your time is worth more than the diagnostic fee, paying a ProAdvisor to resolve it in an hour while you focus on the business is the obviously correct call. It&rsquo;s how most engagements start." },
  ],
  // Diagnostic process — the one numbered process-diagram on the page.
  process: [
    { name: "30-minute diagnostic call", body: "A Certified ProAdvisor reviews the error, the surrounding context (when it started, what triggered it, what self-fix you tried), and the file itself. Usually scheduled within a day or two." },
    { name: "Root cause identified", body: "We tell you what&rsquo;s actually causing the error &mdash; not just the surface symptom. That&rsquo;s the diagnostic&rsquo;s real value: distinguishing a one-off network issue from a file-corruption pattern that&rsquo;s about to get worse." },
    { name: "Written fixed-fee scope", body: "A fixed-fee engagement scope in writing &mdash; what we&rsquo;ll do, what it covers, what it costs, how long it takes. No hourly billing, no scope creep. You decide whether to proceed." },
    { name: "Resolution &amp; verification", body: "We resolve the error and verify it&rsquo;s gone &mdash; including reproducing the conditions that triggered it. Documented before/after for your records and your CPA. A broader <a href=\"/quickbooks/cleanup/\">file cleanup</a> when more than one error needs work." },
    { name: "Prevention guidance", body: "A written summary of what caused the error and how to prevent recurrence &mdash; configuration changes, workflow adjustments, or operational practices. Stopping the next error is part of the engagement." },
    { name: "Ongoing support if needed", body: "If the pattern suggests you&rsquo;d benefit from <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">ongoing monthly bookkeeping</a> with the same ProAdvisor team, we&rsquo;ll say so &mdash; or decline the upsell if it&rsquo;s not the right fit. No pressure either way." },
  ],
  operatorSpec: [
    { value: "ProAdvisor", label: "certified across Desktop, Enterprise, Online L2, Payroll" },
    { value: "Diagnostic", label: "30-minute call, usually scheduled within a day" },
    { value: "Fixed-fee", label: "written scope before any work begins" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  // FAQ — 7 Q/A carried VERBATIM from the baseline (FAQPage schema mirrors these).
  faq: [
    { q: "What are the most common QuickBooks error codes?", a: "The most common QuickBooks errors fall into six families. <strong>H-series errors</strong> (H101, H202, H303, H505) indicate multi-user mode and network connectivity problems where one workstation can&rsquo;t connect to the company file on another machine. <strong>6000-series errors</strong> (6000-77, 6000-301, 6189, 6190) indicate file access, permission, or corruption issues &mdash; typically when the file is in use, locked, or damaged. <strong>PS-series errors</strong> (PS032, PS036, PS038, PS077, PS107) are payroll-specific errors related to payroll service subscriptions, tax tables, or paycheck processing. <strong>3000-series errors and Error 3371</strong> relate to license validation and the QuickBooks installation. <strong>15000-series errors</strong> (15215, 15240, 15243, 15276) relate to payroll updates and maintenance releases. <strong>Unrecoverable errors and C-series errors</strong> indicate file corruption or critical software faults." },
    { q: "What does QuickBooks Error H202 mean?", a: "<a href=\"/quickbooks/help/error-codes/h202/\">Error H202</a> means QuickBooks is configured for multi-user mode but a workstation cannot communicate with the server hosting the company file. The most common causes are: the QuickBooks Database Server Manager isn&rsquo;t running on the host machine, the hosting setting is configured incorrectly on one or more workstations, a firewall is blocking QuickBooks network communication, or the company file is being accessed via a path that has changed. Resolving H202 requires diagnosing where in that chain the breakdown is &mdash; and in most cases requires hands-on access to both the host and the workstation showing the error." },
    { q: "How do I fix QuickBooks errors myself?", a: "Some QuickBooks errors have documented self-fix steps that resolve them in the majority of cases &mdash; particularly first-occurrence H-series errors, basic 6000-series file access errors, and most 15000-series update errors. These typically involve running the QuickBooks Tool Hub utility, verifying the hosting configuration, checking firewall and antivirus settings, and reinstalling components. Other errors &mdash; file corruption, multi-user errors that recur after self-fix, payroll subscription errors, unrecoverable errors &mdash; usually require a ProAdvisor&rsquo;s intervention because they indicate underlying file or configuration issues that documented steps don&rsquo;t address. The honest test: try the documented self-fix on the error&rsquo;s dedicated page once; if it doesn&rsquo;t resolve or the error returns, that&rsquo;s the signal to bring in a Certified ProAdvisor." },
    { q: "When do I need a ProAdvisor for a QuickBooks error?", a: "A Certified ProAdvisor&rsquo;s help is genuinely warranted when: (1) the documented self-fix steps on Intuit or our error-code page don&rsquo;t resolve the error, (2) the error recurs within days of a self-fix, (3) the error involves file corruption (most C-series and unrecoverable errors), (4) you&rsquo;re seeing multiple errors at once (which usually indicates a broader file integrity problem rather than a single isolated issue), (5) the error is blocking critical work (payroll runs, month-end close, AR collections), or (6) you simply don&rsquo;t have time to troubleshoot. Most error-driven engagements are scoped as fixed-fee <a href=\"/quickbooks/cleanup/\">file cleanup</a>, ranging from focused single-issue repair ($1,200&ndash;$3,000) to broader multi-issue cleanup ($3,000&ndash;$7,500) depending on what the diagnostic reveals." },
    { q: "Are QuickBooks error codes the same in QuickBooks Online and Desktop?", a: "No, the error systems differ significantly. <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a> uses the established error-code system (H-series, 6000-series, PS-series, etc.) documented across this reference. <a href=\"/quickbooks/online/\">QuickBooks Online</a> is a cloud platform and generates different types of errors &mdash; typically web-form validation errors, bank-feed sync errors, and integration errors rather than installation or file-access codes. When QBO shows errors, they&rsquo;re usually descriptive text messages rather than numbered codes. The error codes documented here apply almost entirely to QuickBooks Desktop (Pro, Premier, Mac) and QuickBooks Enterprise; QBO errors are handled through separate diagnostic approaches." },
    { q: "Why do QuickBooks errors keep coming back?", a: "When QuickBooks errors recur after self-fix attempts, the underlying cause is usually deeper than the surface-level symptom. Common patterns: (1) Multi-user/H-series errors recur when hosting is misconfigured at the network level &mdash; not just the workstation level &mdash; so each session re-introduces the conflict; (2) 6000-series errors recur when the company file has integrity issues that re-surface after each rebuild; (3) PS payroll errors recur when the payroll service subscription or tax table has a deeper validation problem the self-fix doesn&rsquo;t address; (4) Unrecoverable errors typically point to file corruption that worsens with each open-and-close cycle without proper repair. Recurring errors are the strongest signal that a ProAdvisor&rsquo;s diagnostic is needed &mdash; surface fixes have reached their limit." },
    { q: "Should I call Intuit support or a ProAdvisor for an error?", a: "Both are appropriate for different cases. <strong>Intuit product support</strong> is the right call for: subscription and billing issues, license-validation errors (Error 3371), basic installation errors, payroll subscription verification (PS-series errors that turn out to be subscription-related), and product-side bugs. <strong>A Certified ProAdvisor</strong> is the right call for: errors requiring hands-on file repair (most 6000-series and unrecoverable errors), multi-user/networking errors that need on-site diagnosis (H-series), errors that recur after Intuit&rsquo;s first-line fixes, errors blocking time-critical work where Intuit&rsquo;s queue time isn&rsquo;t acceptable, and any error where the resolution requires bookkeeping judgment (e.g., file integrity repair after data damage). The two channels complement each other rather than competing." },
  ],
  related: [
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/", body: "When the error is symptomatic of broader file-integrity issues, file cleanup is the engagement that fixes the underlying cause &mdash; not just the surface code." },
    { title: "Post-migration cleanup", href: "/quickbooks/migration/migration-cleanup/", body: "If errors started after a recent migration, the cleanup engagement designed specifically for post-conversion repair." },
    { title: "QuickBooks help center", href: "/quickbooks/help/", body: "Beyond error codes &mdash; the broader QuickBooks reference library covering workflows, reconciliation, and operational best practices." },
    { title: "Move to QuickBooks Online", href: "/quickbooks/migration/desktop-to-online/", body: "If you&rsquo;re seeing recurring Desktop errors and wondering whether QBO would be more stable, the honest migration assessment." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/";
      const codes=[
        ["QuickBooks Error H202","h202/"],
        ["QuickBooks Error 6000-series","error-6000-series/"],
        ["QuickBooks Error PS038","ps038/"],
        ["QuickBooks Error 3371","3371/"],
        ["QuickBooks Error 15240","15240/"],
        ["QuickBooks Unrecoverable Error","unrecoverable-error/"],
        ["QuickBooks C-series Errors","c-series/"],
      ];
      return {"@context":"https://schema.org","@graph":[
        {"@type":"CollectionPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qec-in-brief-text","#qec-tldr-body"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":url}]},
        {"@type":"ItemList","@id":url+"#error-list","name":"Common QuickBooks Error Codes","itemListElement":codes.map(function(c,i){return {"@type":"ListItem","position":i+1,"name":c[0],"url":url+c[1]};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
