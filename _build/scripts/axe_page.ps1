# axe-core a11y sweep for one built page. Loads the page in a same-origin
# iframe, injects axe-core INTO the iframe's realm, runs WCAG 2.0/2.1 A+AA
# rules there, prints the violation summary. Prereq: 8090 serves _site AND
# _site/axe.min.js exists.
# Usage: powershell -File _build/scripts/axe_page.ps1 -Path /
param([string]$Path = "/")
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><head></head><body>
<div id="out">pending</div>
<iframe id="f" src="PAGEPATH" style="width:1280px;height:2400px;border:0"></iframe>
<script>
const f = document.getElementById("f");
f.onload = async () => {
  try { await f.contentWindow.document.fonts.ready; } catch(e) {}
  await new Promise(r => setTimeout(r, 800));
  try {
    // inject axe into the iframe's own realm
    const idoc = f.contentDocument;
    await new Promise((res, rej) => {
      const sc = idoc.createElement("script");
      sc.src = "/axe.min.js";
      sc.onload = res; sc.onerror = rej;
      idoc.head.appendChild(sc);
    });
    const res = await f.contentWindow.axe.run(idoc, {
      runOnly: { type: "tag", values: ["wcag2a","wcag2aa","wcag21a","wcag21aa"] }
    });
    const v = res.violations.map(x => ({
      id: x.id, impact: x.impact, n: x.nodes.length,
      t: x.nodes[0] && String(x.nodes[0].target) }));
    document.getElementById("out").textContent =
      "AXE-RESULT:" + JSON.stringify({ violations: v, passes: res.passes.length });
  } catch (e) {
    document.getElementById("out").textContent = "AXE-RESULT:{\"error\":\"" + (e.message||e) + "\"}";
  }
};
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path)
Set-Content -Path "_site\dev-axe-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

$line = & $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --virtual-time-budget=25000 --dump-dom "http://localhost:8090/dev-axe-probe.html" 2>$null |
  Select-String "AXE-RESULT:" | Select-Object -First 1

Remove-Item "_site\dev-axe-probe.html" -Force
if (-not $line) { Write-Output "$Path : AXE PROBE FAILED"; exit 1 }
$json = ($line.Line -replace '^.*?AXE-RESULT:', '') -replace '</div>.*$', ''
Write-Output ("$Path : $json")
