# Overflow offender hunt at 360px — lists elements extending past the viewport.
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<script>
const f = document.createElement("iframe");
f.src = "/";
f.style.cssText = "width:360px;height:900px;border:0";
f.onload = () => {
  setTimeout(() => {
    const win = f.contentWindow, doc = f.contentDocument;
    const vw = win.innerWidth;
    const bad = [];
    for (const el of doc.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 && r.width > 0) {
        bad.push(el.tagName + "." + String(el.className.baseVal !== undefined ? "svg" : el.className).split(" ")[0] + " w=" + Math.round(r.width) + " right=" + Math.round(r.right));
      }
      if (bad.length > 14) break;
    }
    document.getElementById("out").textContent = "OFFENDERS:" + JSON.stringify(bad);
  }, 1500);
};
document.body.appendChild(f);
</script></body></html>
'@
Set-Content -Path "_site-prod\dev-overflow-probe2.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

& $chrome --headless=new --disable-gpu --virtual-time-budget=10000 --dump-dom "http://localhost:8125/dev-overflow-probe2.html" 2>$null |
  Select-String "OFFENDERS" | ForEach-Object { $_.Line.Trim() }

Remove-Item "_site-prod\dev-overflow-probe2.html" -Force
