/* /quickbooks/help/error-codes/6150/ (error-code child — clones the founder-approved
 * 6123 pattern). t-guide tier (reference; no call-bar).
 * Citable: the FIVE causes in order of likelihood + the ordered self-fix (HowTo).
 * Sheet-7 honest-triage: disclosure above the fold; first FAQ = "Is this Intuit's
 * official support?" → No, plainly; never "official" near our offer; phone =
 * "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in copy;
 * provider always #organization. CTA: error-code = QB-specific — free file review
 * primary, phone secondary. Authorship firm-level; founder schema-only
 * (#david-westgate reviewedBy). intent=qb-error.
 * Accurate Error 6150, -1006 content; no fabricated Intuit internals. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "Error 6150 is a Desktop/Enterprise company-file error &mdash; resolving it takes fluency in file-integrity repair, backup restores, file-type handling, and data recovery.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience to diagnose Error 6150 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 6000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 6150?", a: "A QuickBooks <strong>company-file error</strong> (a 6000-series code, usually shown as &ldquo;Error 6150, -1006&rdquo;): QuickBooks Desktop can&rsquo;t open or create the company file because the file is damaged, is the wrong file type, or can&rsquo;t be accessed. It often appears after malware or antivirus quarantined or damaged the .QBW file, or when a backup or portable file is opened the wrong way. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 6150?", a: "Five causes account for the large majority: (1) a damaged company (.QBW) file; (2) trying to open a backup (.QBB) or portable (.QBM) file directly as if it were a .QBW; (3) malware or antivirus that damaged or quarantined the file; (4) an incomplete file creation; (5) a damaged QuickBooks installation." },
    { q: "Can I fix Error 6150 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); restore from a recent clean backup (.QBB) the correct way (File &rarr; Open or Restore Company); run a malware/antivirus scan and restore the file from quarantine; repair the QuickBooks installation; recreate the file if it was newly created. Tool Hub alone clears Error 6150 in many cases." },
    { q: "When does Error 6150 need a ProAdvisor?", a: "When the file is genuinely damaged, you have no clean backup, malware was involved, or self-fix doesn&rsquo;t resolve it &mdash; a signal the company file itself needs professional repair or data recovery rather than another retry." },
    { q: "How is Error 6150 related to other 6000-series codes?", a: "The 6000-series are all company-file errors &mdash; QuickBooks can&rsquo;t open, create, or access the file. <strong>6150, -1006</strong> specifically means the file is damaged, is the wrong type, or can&rsquo;t be accessed. Codes like 6000, 6000 77, 6000 83, and 6123 share the same diagnostic approach: repair or restore the file, then verify access." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Damaged company (.QBW) file", body: "The most common cause. The working company file itself has integrity damage, so QuickBooks can&rsquo;t open it &mdash; Error 6150, -1006. Damage can build up over time, after an improper shutdown, or after a power loss while the file was in use." },
    { rank: "Cause 02", name: "Opening a backup or portable file as a .QBW", body: "Trying to open a backup (.QBB) or portable company (.QBM) file directly &mdash; as if it were a working .QBW &mdash; produces Error 6150. Those files aren&rsquo;t company files yet; they have to be restored properly through File &rarr; Open or Restore Company before QuickBooks can use them." },
    { rank: "Cause 03", name: "Malware or antivirus damaged or quarantined the file", body: "Malware can corrupt the company file, and antivirus can quarantine or partially block it &mdash; either of which leaves QuickBooks unable to open or create the file. This often appears suddenly, right after an infection or an aggressive security scan." },
    { rank: "Cause 04", name: "Incomplete file creation", body: "If QuickBooks was interrupted while creating a new company file &mdash; a crash, a forced close, or a power loss mid-creation &mdash; the resulting file can be incomplete and unusable, surfacing as Error 6150 the first time you try to open it." },
    { rank: "Cause 05", name: "Damaged QuickBooks installation", body: "A corrupted or incomplete QuickBooks installation can leave the program unable to open or build any company file correctly. When the file itself is fine but every file triggers the error, the install is the likely culprit and needs repair." },
  ],
  // Five ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks Tool Hub (Quick Fix My File, then File Doctor)", body: "Open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix My File, then run QuickBooks File Doctor. This alone resolves Error 6150 in many cases by repairing common company-file damage automatically. Run it on the computer that stores the file when possible." },
    { name: "Restore from a recent clean backup, the correct way", body: "Don&rsquo;t open a backup (.QBB) or portable (.QBM) file directly. Use File &rarr; Open or Restore Company &rarr; Restore a backup copy, point to a known-good backup created before the error began, and let QuickBooks rebuild a fresh .QBW. This recovers cleanly from a damaged working file." },
    { name: "Run a malware/antivirus scan and restore from quarantine", body: "Run a full malware and antivirus scan. If your security software has quarantined the company file, restore it from quarantine and add the QuickBooks file folder as an exception so it isn&rsquo;t re-blocked. If malware damaged the file, restore from a clean backup instead." },
    { name: "Repair the QuickBooks installation", body: "If the file is fine elsewhere but the program still can&rsquo;t open it, repair the QuickBooks installation through Windows (Programs and Features &rarr; QuickBooks &rarr; Repair), or use the QuickBooks Install Diagnostic Tool in Tool Hub. This fixes a damaged program that can&rsquo;t open or build any file." },
    { name: "Recreate the file if it was newly created, then escalate", body: "If Error 6150 appeared on a brand-new file that never finished creating, create the company file again from scratch. If the error persists on an existing file after every step &mdash; or the file is genuinely damaged with no clean backup &mdash; stop. Continued retries can make recovery harder. A Certified ProAdvisor diagnostic identifies the underlying cause and recovers the file against a written scope." },
  ],
  proSignals: [
    { name: "The file is genuinely damaged", body: "The self-fix steps and File Doctor don&rsquo;t hold, and the company (.QBW) file itself is damaged. This is a file-integrity or data-recovery situation, not something more retries will fix." },
    { name: "You have no clean backup", body: "There&rsquo;s no known-good backup to restore from, so a clean rebuild isn&rsquo;t an option. Recovering data directly from a damaged file is specialist work &mdash; the wrong move here can cost transactions." },
    { name: "Malware was involved", body: "Error 6150 followed a malware infection or an antivirus quarantine. The file may be corrupted in ways that surface steps can&rsquo;t see &mdash; the moment to have the file assessed and recovered properly." },
  ],
  related: [
    { title: "Error 6000 (the 6000-series)", href: "/quickbooks/help/error-codes/6000/", body: "Error 6150 is one of the 6000-series &mdash; all company-file errors where QuickBooks can&rsquo;t open, create, or access the file. See the 6000-series reference for the shared diagnostic approach." },
    { title: "Error 6123", href: "/quickbooks/help/error-codes/6123/", body: "Error 6123, 0 is the broken-connection sibling of 6150 &mdash; QuickBooks reaches for the company file and the connection fails. Same diagnostic family: repair the connection, then the file." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 6150 resolution or data recovery" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 6150?", a: "A company-file error, usually shown as &ldquo;Error 6150, -1006&rdquo;: QuickBooks Desktop can&rsquo;t open or create the company file because the file is damaged, is the wrong file type, or can&rsquo;t be accessed. It commonly appears after malware or antivirus quarantined or damaged the .QBW file, or when a backup or portable file is opened the wrong way. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 6150?", a: "Five common causes: (1) a damaged company (.QBW) file; (2) trying to open a backup (.QBB) or portable (.QBM) file directly as if it were a .QBW; (3) malware or antivirus that damaged or quarantined the file; (4) an incomplete file creation; (5) a damaged QuickBooks installation." },
    { q: "Can I fix QuickBooks Error 6150 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); <a href=\"/quickbooks/help/backup-restore/\">restore from a recent clean backup</a> (.QBB) the correct way through File &rarr; Open or Restore Company; run a malware/antivirus scan and restore the file from quarantine; repair the QuickBooks installation; recreate the file if it was newly created. Tool Hub alone resolves Error 6150 in many cases." },
    { q: "When does Error 6150 require a ProAdvisor?", a: "When the company file is genuinely damaged; you have no clean backup to restore from; malware was involved; or self-fix didn&rsquo;t resolve it. Typical focused resolution or <a href=\"/quickbooks/help/data-recovery/\">data recovery</a> is a $1,200–$3,000 fixed-fee scope, after a free file review &mdash; call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Why does Error 6150 happen when I open a backup file?", a: "Because backup (.QBB) and portable (.QBM) files aren&rsquo;t working company files &mdash; they can&rsquo;t be opened directly. You have to restore them first: File &rarr; Open or Restore Company &rarr; Restore a backup copy, which builds a fresh .QBW. Double-clicking or force-opening these files as a .QBW is a common trigger for Error 6150, -1006." },
    { q: "Does Error 6150 appear in QuickBooks Online?", a: "No. Error 6150 is exclusive to QuickBooks Desktop and Enterprise &mdash; it&rsquo;s a company-file error tied to how Desktop opens or creates a .QBW file. QuickBooks Online is browser-based and has no company-file or 6000-series errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/6150/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#6150-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 6150","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 6150: Causes & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 6150","description":"Resolve QuickBooks Error 6150, -1006 with ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks File Doctor"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#6150-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 6150 resolution","serviceType":"QuickBooks company-file error diagnosis, repair, and data recovery","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 6150 resolution or data recovery"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
