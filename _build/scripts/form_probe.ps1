# Form payload contract probe for /quickbooks/file-review/ (preview build,
# where tb-forms.js logs the would-send payload instead of POSTing).
# Two probes in one run:
#   default  - no URL params: HTML defaults must survive (intent=file-review,
#              source_type=bofu-conversion, funnel_stage=BOFU), source_page
#              falls back to document.referrer (live-engine semantic).
#   override - ?intent=cleanup&state=texas: URL params win, engine
#              auto-checks the mapped service per intents.json.
# Writes _build/verify/form-payload-file-review.json.
# Prereq: battery.ps1 (or npm run build) produced _site, and a static
# server is on 8090 (npx serve -l 8090 _site).
Set-Location (Join-Path $PSScriptRoot "..\..")

$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<script>
const cases = {
  "default":  "/quickbooks/file-review/",
  "override": "/quickbooks/file-review/?intent=cleanup&state=texas"
};
const results = {};
let done = 0, total = Object.keys(cases).length;
for (const [key, url] of Object.entries(cases)) {
  const f = document.createElement("iframe");
  f.src = url;
  f.style.cssText = "width:1100px;height:900px;border:0";
  f.onload = () => {
    setTimeout(() => {
      const d = f.contentDocument;
      const form = d.querySelector("form");
      d.getElementById("fr-name").value = "TEST Battery Run";
      d.getElementById("fr-company").value = "Battery Inc.";
      d.getElementById("fr-email").value = "battery@test.local";
      const consent = d.querySelector('input[name="consent"]');
      consent.checked = true;
      const sink = d.createElement("div");
      sink.setAttribute("data-payload-log", "");
      sink.hidden = true;
      d.body.appendChild(sink);
      if (form.requestSubmit) form.requestSubmit();
      else form.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
      setTimeout(() => {
        try { results[key] = JSON.parse(sink.textContent); }
        catch (e) { results[key] = "PROBE-FAILED: " + sink.textContent; }
        if (++done === total) {
          document.getElementById("out").textContent =
            "PAYLOAD-RESULTS:" + JSON.stringify(results);
        }
      }, 600);
    }, 1500);
  };
  document.body.appendChild(f);
}
</script></body></html>
'@
Set-Content -Path "_site\dev-form-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

$line = & $chrome --headless=new --user-data-dir=C:\tb-probe-profile --disable-gpu --virtual-time-budget=15000 --dump-dom "http://localhost:8090/dev-form-probe.html" 2>$null |
  Select-String "PAYLOAD-RESULTS:\{" | Select-Object -First 1

Remove-Item "_site\dev-form-probe.html" -Force

if (-not $line) { Write-Output "PROBE FAILED - no payload line captured"; exit 1 }
$json = ($line.Line -replace '^.*?PAYLOAD-RESULTS:', '') -replace '</div>.*$', ''
$pretty = $json | ConvertFrom-Json | ConvertTo-Json -Depth 6
Set-Content -Path "_build\verify\form-payload-file-review.json" -Value $pretty -Encoding utf8
Write-Output $pretty
