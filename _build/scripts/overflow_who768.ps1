# Precise overflow diagnosis at 768: lists every element whose right edge
# exceeds 768, excluding position:fixed, sorted by right edge. Isolated probe
# profile (founder standing rule). Prereq: _site-prod on 8125.
param([string]$Path = "/")
Set-Location (Join-Path $PSScriptRoot "..\..")
$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<script>
const f = document.createElement("iframe");
f.src = "PAGEPATH";
f.style.cssText = "width:768px;height:1600px;border:0";
f.onload = () => setTimeout(() => {
  const win = f.contentWindow, doc = f.contentDocument;
  const bad = [];
  for (const el of doc.querySelectorAll("*")) {
    const cs = win.getComputedStyle(el);
    if (cs.position === "fixed") continue;
    const cn = String(el.className);
    if (/drawer|site-header|site-footer|util-bar|call-bar/.test(cn)) continue;
    const r = el.getBoundingClientRect();
    if (r.right > 768.5 && r.right < 1200 && r.width > 0) {
      bad.push({ t: el.tagName + "." + (cn.split(" ").slice(0,2).join(".")||""),
                 w: Math.round(r.width), right: Math.round(r.right), ov: cs.overflowX });
    }
  }
  bad.sort((a,b) => b.right - a.right);
  document.getElementById("out").textContent = "WHO:" + JSON.stringify(bad.slice(0,12));
}, 1300);
document.body.appendChild(f);
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path)
Set-Content -Path "_site-prod\dev-who768.html" -Value $probe -Encoding ascii
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
& $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --virtual-time-budget=12000 --dump-dom "http://localhost:8125/dev-who768.html" 2>$null |
  Select-String "WHO:" | ForEach-Object { $_.Line.Trim() }
Remove-Item "_site-prod\dev-who768.html" -Force
