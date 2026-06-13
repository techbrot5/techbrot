# Edge probe: measures the rendered left edge (getBoundingClientRect().left)
# and computed padding-left of the header container vs body containers, to
# diagnose header/body left-edge alignment. Round-11 task (a) diagnostic.
# Prereq: static server on 8090 serving _site (python -m http.server 8090).
# Usage: powershell -File _build/scripts/edge_probe.ps1 -Path /partners/ -Width 1280
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
  await new Promise(r => setTimeout(r, 600));
  const rep = [];
  const measure = (label, el) => {
    if (!el) { rep.push(label + "=ABSENT"); return; }
    const r = el.getBoundingClientRect();
    const cs = win.getComputedStyle(el);
    rep.push(label + "{left:" + r.left.toFixed(1) +
             ",padL:" + cs.paddingLeft +
             ",padR:" + cs.paddingRight +
             ",mw:" + cs.maxWidth +
             ",w:" + r.width.toFixed(1) + "}");
  };
  measure("header.container", doc.querySelector(".site-header .container"));
  // logo image left edge (what the eye actually tracks at top-left)
  measure("header.logo-img", doc.querySelector(".site-header__logo img"));
  // first body section container that is NOT inside the header/util-bar
  const bodyContainers = [...doc.querySelectorAll(".section .container")];
  const fullBody = bodyContainers.find(c => !c.classList.contains("container--narrow"));
  const narrowBody = bodyContainers.find(c => c.classList.contains("container--narrow"));
  measure("body.container(full)", fullBody);
  measure("body.container(narrow)", narrowBody);
  // the text the eye actually compares to the logo
  measure("hero.heading", doc.querySelector(".hero__heading, .hero h1"));
  measure("first.section__heading", doc.querySelector(".section__heading"));
  // first heading that lives inside a narrow container
  const narrowHeading = narrowBody ? narrowBody.querySelector(".section__heading, h2, h3") : null;
  measure("narrow.heading", narrowHeading);
  document.getElementById("out").textContent =
    "EDGE:PAGEPATH|WIDTH|" + rep.join(" ");
};
document.body.appendChild(f);
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path).Replace("WIDTH", "$Width")
Set-Content -Path "_site\dev-edge-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }

& $chrome --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=30000 --dump-dom "http://localhost:8090/dev-edge-probe.html" 2>$null |
  Select-String "EDGE:" | Select-Object -First 1 | ForEach-Object { ($_.Line -replace '^.*EDGE:', 'EDGE:') -replace '</div>.*$', '' }

Remove-Item "_site\dev-edge-probe.html" -Force
