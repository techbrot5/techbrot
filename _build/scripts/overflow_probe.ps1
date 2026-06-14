# Overflow probe: same-origin iframes at 360/390/768 measure the homepage's
# scrollWidth at each width; headless Chrome dumps the resulting DOM.
# Usage: powershell -File _build/scripts/overflow_probe.ps1 [path-under-server]
param([string]$Path = "/")
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<script>
const widths = [360, 390, 768];
const results = {};
let done = 0;
for (const w of widths) {
  const f = document.createElement("iframe");
  f.src = "PAGEPATH";
  f.style.cssText = "width:" + w + "px;height:900px;border:0";
  f.onload = () => {
    setTimeout(() => {
      const d = f.contentDocument.documentElement;
      results[w] = { vw: f.contentWindow.innerWidth, sw: d.scrollWidth,
                     overflow: d.scrollWidth > f.contentWindow.innerWidth };
      if (++done === widths.length) {
        document.getElementById("out").textContent =
          "OVERFLOW-RESULTS:" + JSON.stringify(results);
      }
    }, 1200);
  };
  document.body.appendChild(f);
}
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path)
Set-Content -Path "_site-prod\dev-overflow-probe.html" -Value $probe -Encoding ascii

$chrome = (Get-Command chrome -ErrorAction SilentlyContinue).Source
if (-not $chrome) { $chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe" }
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

& $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --virtual-time-budget=10000 --dump-dom "http://localhost:8125/dev-overflow-probe.html" 2>$null |
  Select-String "OVERFLOW-RESULTS" | ForEach-Object { $_.Line.Trim() }

Remove-Item "_site-prod\dev-overflow-probe.html" -Force
