/* /quickbooks/help/error-codes/6073/ (error-code child — clones the round-20
 * H202 / 6123 proving pattern, founder-approved). t-guide tier (reference).
 * Citable: the FIVE causes in order of likelihood + the SIX-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold; first FAQ = "Is this
 * Intuit's official support?" → No, plainly; never "official" near our offer;
 * Intuit login/billing → Intuit (learn-support, rel noopener nofollow); phone =
 * "Speak to a ProAdvisor" (canonical lexicon); provider always #organization.
 * CTA: error-code = QB-specific — file-review primary, phone secondary,
 * book-call tertiary; intent=qb-error. Authorship firm-level; founder schema-only
 * (#david-westgate reviewedBy). Accurate Error 6073, -816 (file locked / in use)
 * content; no fabricated Intuit internals or phone/hours. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "Error 6073 is a Desktop/Enterprise company-file locking error &mdash; resolving it takes fluency in single- and multi-user hosting, network paths, file permissions, and stale-lock recovery.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience to diagnose Error 6073 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs other codes)
  aiSummary: [
    { q: "What is QuickBooks Error 6073?", a: "A QuickBooks <strong>company-file locking error</strong> (usually shown as &ldquo;Error 6073, -816&rdquo;): QuickBooks Desktop can&rsquo;t open the company file because it&rsquo;s locked or already in use. It commonly appears when the file is open on another computer in single-user mode, opened by another user, hosted on more than one computer, or stored on a read-only or synced network location. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 6073?", a: "Five causes account for the large majority: (1) the file is already open elsewhere in single-user mode; (2) more than one computer is set to host the file; (3) the file is read-only or sits in a shared/synced (Dropbox/OneDrive) folder; (4) a prior session didn&rsquo;t close cleanly and left a lock behind; (5) a Linux/server hosting or permission issue." },
    { q: "Can I fix Error 6073 myself?", a: "Often yes, in order of likelihood: make sure no one else has the file open and close it everywhere; switch to multi-user mode or ensure only ONE computer hosts the file; run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); move the file out of a synced folder (Dropbox/OneDrive) to a normal local or server path; check read-only permissions on the file and folder; restart the host computer. Confirming the file is closed everywhere and that one computer hosts it clears Error 6073 in many cases." },
    { q: "When does Error 6073 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it, the multi-user hosting won&rsquo;t stay stable, or the file lives on a synced/cloud folder that keeps re-locking it &mdash; a signal the hosting or storage setup needs to be corrected properly rather than reset each time." },
    { q: "How is Error 6073 related to other QuickBooks file errors?", a: "Like the 6000-series and the H-series multi-user errors, Error 6073 is about access to the company file. <strong>6073, -816</strong> is specifically a <em>locked / in-use</em> error tied to single-user vs multi-user state, conflicting hosting, read-only or synced storage, or a stale lock. Multi-user hosting codes such as H202 share the same diagnostic approach: fix who hosts the file and how it&rsquo;s reached, then open it." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "The file is already open elsewhere in single-user mode", body: "The most common cause. When the company file is open in single-user mode on another computer &mdash; or by another user &mdash; QuickBooks refuses everyone else exclusive access and reports Error 6073, -816. Single-user mode permits exactly one open session, so a second attempt is locked out." },
    { rank: "Cause 02", name: "Multiple computers are set to host the file", body: "If more than one computer has hosting (multi-user access) turned on for the same file, they compete to control it and the lock conflicts. Only one machine &mdash; the host or server &mdash; should host the company file. A workstation mistakenly set to host is a frequent trigger for 6073." },
    { rank: "Cause 03", name: "The file is read-only or in a shared/synced folder", body: "A company file stored in a Dropbox, OneDrive, or other synced folder &mdash; or on a read-only network share &mdash; gets locked by the sync client or denied write access. QuickBooks needs exclusive read/write access to a stable path, which synced and read-only locations can&rsquo;t reliably provide." },
    { rank: "Cause 04", name: "A prior session left a lock behind", body: "If QuickBooks or the computer crashed, or a session closed abnormally, the company file can be left flagged as still in use. The stale lock makes QuickBooks treat the file as open by someone else even when no one is in it, producing Error 6073, -816." },
    { rank: "Cause 05", name: "Linux/server hosting or permission issue", body: "When the file is hosted on a Linux server or a server share, a hosting-service or file-permission problem on that host can block the exclusive access QuickBooks needs. The account QuickBooks runs under, or the server&rsquo;s hosting configuration, denies the lock and 6073 results." },
  ],
  // Six ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Make sure no one else has the file open &mdash; and close it everywhere", body: "Confirm the company file isn&rsquo;t open on any other computer or by any other user, and close it everywhere it&rsquo;s open. If you can&rsquo;t verify who has it, close QuickBooks on every machine that uses the file, then reopen it from one computer. In single-user mode only one session is allowed at a time." },
    { name: "Switch to multi-user mode (or ensure only ONE computer hosts)", body: "If several people need the file at once, switch to multi-user mode so concurrent access is supported. Then check hosting: only the host computer or server should have hosting (multi-user access) turned on. Turn hosting OFF on every workstation so a single machine controls the file." },
    { name: "Run QuickBooks Tool Hub (Quick Fix my File, then File Doctor)", body: "Open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix my File, then run QuickBooks File Doctor. This repairs hosting and file-access settings automatically and can clear a stale lock. Run it on the computer that stores the file when possible." },
    { name: "Move the file out of a synced folder to a normal path", body: "If the company file lives in Dropbox, OneDrive, or another synced folder, move it to a normal local folder (or a proper server share) and open it from there. Synced clients lock files as they upload, which collides with the exclusive access QuickBooks needs." },
    { name: "Check read-only permissions", body: "Right-click the company file and its folder and confirm the file is not marked read-only and that the Windows account QuickBooks runs under has full read/write permission. A read-only attribute or a folder-permission gap denies the lock QuickBooks needs to open the file." },
    { name: "Restart the host, then escalate", body: "Restart the host computer (and the server, if the file is server-hosted) to clear any lingering lock or stalled hosting service, then reopen the file from one machine. If Error 6073 persists after that &mdash; or the hosting won&rsquo;t stay stable &mdash; stop and book a diagnostic. A Certified ProAdvisor corrects the hosting or storage setup against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all six steps", body: "You&rsquo;ve worked the ordered fix and Error 6073 still locks the file. The cause is past the documented surface &mdash; usually a hosting conflict, a stuck lock, or a storage path that keeps denying exclusive access." },
    { name: "Multi-user hosting won&rsquo;t stabilize", body: "You set one host and turn hosting off on the workstations, but the file keeps locking or hosting reverts. A configuration or server-side problem is re-claiming the file and needs to be corrected properly rather than reset each day." },
    { name: "The file is on a synced/cloud folder that keeps locking", body: "The company file sits on Dropbox, OneDrive, or a similar synced location and re-locks even after you move it &mdash; a sign the storage setup needs to be re-architected so QuickBooks has a stable, exclusive path." },
  ],
  related: [
    { title: "The 6000-series company-file errors", href: "/quickbooks/help/error-codes/6000/", body: "Error 6073 is a company-file access error in the same family as the 6000-series &mdash; all cases where QuickBooks can&rsquo;t open or access the file. See the 6000-series reference for related codes and the shared diagnostic approach." },
    { title: "Error H202 (multi-user)", href: "/quickbooks/help/error-codes/h202/", body: "When the lock turns out to be a multi-user hosting problem rather than a single open session, Error H202 covers the network and hosting setup that lets multiple computers reach the file safely." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 6073 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 6073?", a: "A company-file locking error, usually shown as &ldquo;Error 6073, -816&rdquo;: QuickBooks Desktop can&rsquo;t open the company file because it&rsquo;s locked or already in use. It commonly appears when the file is open on another computer in single-user mode, opened by another user, hosted on more than one computer, or stored on a read-only or synced location. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 6073?", a: "Five common causes: (1) the file is already open elsewhere in single-user mode; (2) more than one computer is set to host the file; (3) the file is read-only or sits in a shared/synced (Dropbox/OneDrive) folder; (4) a prior session didn&rsquo;t close cleanly and left a lock behind; (5) a Linux/server hosting or permission issue." },
    { q: "Can I fix QuickBooks Error 6073 myself?", a: "Often, yes &mdash; in this order: make sure no one else has the file open and close it everywhere; switch to multi-user mode or ensure only ONE computer hosts the file; run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); move the file out of a synced folder (Dropbox/OneDrive) to a normal local or server path; check read-only permissions; restart the host. Confirming the file is closed everywhere and that one computer hosts it resolves Error 6073 in many cases." },
    { q: "When does Error 6073 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it; the multi-user hosting won&rsquo;t stay stable; or the file is on a synced/cloud folder that keeps re-locking it. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "Why does the file keep locking on Dropbox or OneDrive?", a: "Sync clients like Dropbox and OneDrive lock files while they upload and download, which collides with the exclusive read/write access QuickBooks needs for a company file. Move the .QBW file out of any synced folder to a normal local folder or a proper server share, and open it from there. If it still re-locks, the storage setup should be re-architected by a ProAdvisor." },
    { q: "Does Error 6073 appear in QuickBooks Online?", a: "No. Error 6073 is exclusive to QuickBooks Desktop and Enterprise &mdash; it&rsquo;s a company-file locking error tied to how Desktop opens a .QBW file locally or over a network in single- or multi-user mode. QuickBooks Online is browser-based and has no company-file or locking errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/6073/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#6073-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 6073","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 6073: Why the File Is Locked & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 6073","description":"Resolve QuickBooks Error 6073, -816 (company file locked or in use) with six ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks File Doctor"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#6073-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 6073 resolution","serviceType":"QuickBooks company-file locking error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 6073 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};
