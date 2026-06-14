# Dump the FULL computed property list of one element (HEAD) so two runs
# can be diffed property-by-property to find the non-deterministic one.
# Usage: powershell -File _build/scripts/css_probe_props.ps1 -Out props1.txt
param([string]$Out = "_build\verify\css-props.txt")
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><body>
<pre id="out">pending</pre>
<script>
const f = document.createElement("iframe");
f.src = "/";
f.style.cssText = "width:1280px;height:900px;border:0";
f.onload = async () => {
  const win = f.contentWindow, doc = f.contentDocument;
  try { await win.document.fonts.ready; } catch (e) {}
  await new Promise(r => setTimeout(r, 700));
  const el = doc.querySelector("head");
  const cs = win.getComputedStyle(el);
  const lines = [];
  for (let i = 0; i < cs.length; i++) {
    const p = cs[i];
    lines.push(p + "=" + cs.getPropertyValue(p));
  }
  document.getElementById("out").textContent = "PROPS-RESULT:" + lines.join(";");
};
document.body.appendChild(f);
</script></body></html>
'@
Set-Content -Path "_site\dev-css-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

$line = & $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --virtual-time-budget=30000 --dump-dom "http://localhost:8090/dev-css-probe.html" 2>$null |
  Select-String "PROPS-RESULT:" | Select-Object -First 1

Remove-Item "_site\dev-css-probe.html" -Force
if (-not $line) { Write-Output "PROBE FAILED"; exit 1 }
$payload = ($line.Line -replace '^.*?PROPS-RESULT:', '') -replace '</pre>.*$', ''
$payload.Split(";") | Set-Content -Path $Out -Encoding ascii
Write-Output "saved $Out"
