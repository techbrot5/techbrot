# Diagnostic variant of css_probe: one hash line PER ELEMENT so two runs
# can be diffed to find non-deterministic computed properties.
# Usage: powershell -File _build/scripts/css_probe_diag.ps1 -Path / -Width 1280 -Out run1.txt
param(
  [string]$Path = "/",
  [int]$Width = 1280,
  [string]$Out = "_build\verify\css-diag.txt"
)
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><body>
<pre id="out">pending</pre>
<script>
const f = document.createElement("iframe");
f.src = "PAGEPATH";
f.style.cssText = "width:WIDTHpx;height:900px;border:0";
f.onload = async () => {
  const win = f.contentWindow, doc = f.contentDocument;
  try { await win.document.fonts.ready; } catch (e) {}
  await new Promise(r => setTimeout(r, 700));
  const lines = [];
  let idx = 0;
  for (const el of doc.querySelectorAll("*")) {
    let h = 0x811c9dc5;
    const mix = (s) => {
      for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = (h * 0x01000193) >>> 0;
      }
    };
    for (const pseudo of [null, "::before", "::after"]) {
      const cs = win.getComputedStyle(el, pseudo);
      for (let i = 0; i < cs.length; i++) {
        const p = cs[i];
        mix(p + ":" + cs.getPropertyValue(p) + ";");
      }
    }
    lines.push("EL|" + idx + "|" + el.tagName + "." + String(el.className).split(" ")[0] + "|" + h.toString(16));
    idx++;
  }
  document.getElementById("out").textContent = "DIAG-RESULT:" + lines.join(";");
};
document.body.appendChild(f);
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path).Replace("WIDTH", "$Width")
Set-Content -Path "_site\dev-css-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

$line = & $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --virtual-time-budget=30000 --dump-dom "http://localhost:8090/dev-css-probe.html" 2>$null |
  Select-String "DIAG-RESULT:" | Select-Object -First 1

Remove-Item "_site\dev-css-probe.html" -Force
if (-not $line) { Write-Output "PROBE FAILED"; exit 1 }
$payload = ($line.Line -replace '^.*?DIAG-RESULT:', '') -replace '</pre>.*$', ''
$payload.Split(";") | Set-Content -Path $Out -Encoding ascii
Write-Output "saved $Out"
