# Precise overflow diagnosis at 360: lists every element whose right edge
# exceeds 360, EXCLUDING position:fixed (off-screen drawer noise), sorted
# by right edge. Prereq: _site-prod on 8125.
param([string]$Path = "/")
Set-Location (Join-Path $PSScriptRoot "..\..")
$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<script>
const f = document.createElement("iframe");
f.src = "PAGEPATH";
f.style.cssText = "width:360px;height:1200px;border:0";
f.onload = () => setTimeout(() => {
  const win = f.contentWindow, doc = f.contentDocument;
  const bad = [];
  for (const el of doc.querySelectorAll("*")) {
    const cs = win.getComputedStyle(el);
    if (cs.position === "fixed") continue;
    const r = el.getBoundingClientRect();
    if (r.right > 360.5 && r.width > 0) {
      bad.push({ t: el.tagName + "." + (String(el.className).split(" ")[0]||""),
                 w: Math.round(r.width), right: Math.round(r.right),
                 ov: cs.overflowX });
    }
  }
  bad.sort((a,b) => b.right - a.right);
  document.getElementById("out").textContent = "WHO:" + JSON.stringify(bad.slice(0,12));
}, 1200);
document.body.appendChild(f);
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path)
Set-Content -Path "_site-prod\dev-who.html" -Value $probe -Encoding ascii
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
& $chrome --headless=new --disable-gpu --virtual-time-budget=10000 --dump-dom "http://localhost:8125/dev-who.html" 2>$null |
  Select-String "WHO:" | ForEach-Object { $_.Line.Trim() }
Remove-Item "_site-prod\dev-who.html" -Force
