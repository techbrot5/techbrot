# Functional check for nav mutual exclusion (R15 FIX 4). Loads a page in an
# iframe, lets tb-nav.js run, then: clicks two different desktop nav triggers
# and counts open dropdowns; opens the drawer, clicks two drawer triggers and
# counts open panels. Expect 1 open in each case. Prereq: server on $Port.
# Usage: powershell -File _build/scripts/nav_test.ps1 -Path / -Port 8090
param([string]$Path = "/", [int]$Port = 8090, [string]$Root = "_site")
Set-Location (Join-Path $PSScriptRoot "..\..")
$probe = @'
<!DOCTYPE html><html><body><div id="out">pending</div>
<iframe id="f" src="PAGEPATH" style="width:1280px;height:900px;border:0"></iframe>
<script>
const f = document.getElementById("f");
f.onload = async () => {
  const doc = f.contentDocument, win = f.contentWindow;
  await new Promise(r => setTimeout(r, 600));
  const trig = [...doc.querySelectorAll('.nav__trigger')];
  let res = {};
  if (trig.length >= 2) {
    trig[0].click(); await new Promise(r=>setTimeout(r,50));
    trig[1].click(); await new Promise(r=>setTimeout(r,50));
    res.dropdownsOpenAfterTwoClicks = doc.querySelectorAll('.nav__dropdown[data-open="true"]').length;
    res.trigExpandedTrue = doc.querySelectorAll('.nav__trigger[aria-expanded="true"]').length;
  }
  // drawer
  const ham = doc.querySelector('.nav__hamburger');
  if (ham) { ham.click(); await new Promise(r=>setTimeout(r,50)); }
  const dtrig = [...doc.querySelectorAll('.drawer__trigger')];
  if (dtrig.length >= 2) {
    dtrig[0].click(); await new Promise(r=>setTimeout(r,50));
    dtrig[1].click(); await new Promise(r=>setTimeout(r,50));
    res.panelsOpenAfterTwoClicks = doc.querySelectorAll('.drawer__panel[data-open="true"]').length;
  }
  document.getElementById("out").textContent = "NAVTEST:" + JSON.stringify(res);
};
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path)
Set-Content -Path "$Root\dev-nav-test.html" -Value $probe -Encoding ascii
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --virtual-time-budget=30000 --dump-dom "http://localhost:$Port/dev-nav-test.html" 2>$null |
  Select-String "NAVTEST:" | Select-Object -First 1 | ForEach-Object { ($_.Line -replace '^.*NAVTEST:', 'NAVTEST:') -replace '</div>.*$', '' }
Remove-Item "$Root\dev-nav-test.html" -Force
