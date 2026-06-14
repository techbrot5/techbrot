# Computed-style fingerprint for one page at one viewport width.
# Hashes getComputedStyle of EVERY element (+ ::before/::after) after
# fonts are ready - identical hash before/after a CSS trim proves the
# trim changed nothing the page can render.
# Usage: powershell -File _build/scripts/css_probe.ps1 -Path / -Width 1280
# Prereq: static server on 8090 serving _site (npx serve -l 8090 _site).
param(
  [string]$Path = "/",
  [int]$Width = 1280
)
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<script>
const f = document.createElement("iframe");
f.src = "PAGEPATH";
f.style.cssText = "width:WIDTHpx;height:900px;border:0";
f.onload = async () => {
  const win = f.contentWindow, doc = f.contentDocument;
  try { await win.document.fonts.ready; } catch (e) {}
  await new Promise(r => setTimeout(r, 1100));
  let h = 0x811c9dc5, count = 0;
  const mix = (s) => {
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 0x01000193) >>> 0;
    }
  };
  for (const el of doc.querySelectorAll("*")) {
    for (const pseudo of [null, "::before", "::after"]) {
      const cs = win.getComputedStyle(el, pseudo);
      // Chrome enumerates custom properties in nondeterministic order —
      // sort before hashing so identical styles hash identically
      const props = [];
      for (let i = 0; i < cs.length; i++) {
        const p = cs[i];
        props.push(p + ":" + cs.getPropertyValue(p) + ";");
      }
      props.sort();
      for (const s of props) mix(s);
    }
    count++;
  }
  document.getElementById("out").textContent =
    "STYLE-HASH:PAGEPATH|WIDTH|" + h.toString(16) + "|" + count;
};
document.body.appendChild(f);
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path).Replace("WIDTH", "$Width")
Set-Content -Path "_site\dev-css-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

& $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --virtual-time-budget=30000 --dump-dom "http://localhost:8090/dev-css-probe.html" 2>$null |
  Select-String "STYLE-HASH:" | Select-Object -First 1 | ForEach-Object { ($_.Line -replace '^.*STYLE-HASH:', 'STYLE-HASH:') -replace '</div>.*$', '' }

Remove-Item "_site\dev-css-probe.html" -Force
