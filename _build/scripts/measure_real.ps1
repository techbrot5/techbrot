# Measure documentElement.scrollWidth + widest in-flow element on the REAL
# page (not an iframe) at a true 360 viewport via headless Chrome.
param([string]$Path = "/")
Set-Location (Join-Path $PSScriptRoot "..\..")
$js = @'
(() => {
  const d = document.documentElement;
  const out = { sw: d.scrollWidth, cw: d.clientWidth, ww: window.innerWidth };
  let widest = null, max = 0;
  for (const el of document.querySelectorAll("*")) {
    const cs = getComputedStyle(el);
    if (cs.position === "fixed") continue;
    const r = el.getBoundingClientRect();
    if (r.right > max) { max = r.right; widest =
      el.tagName + "." + (String(el.className).split(" ")[0]||"") + " w=" + Math.round(r.width); }
  }
  out.widest = widest; out.maxRight = Math.round(max);
  return JSON.stringify(out);
})()
'@ -replace "`r?`n", " "
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
& $chrome --headless=new --disable-gpu --hide-scrollbars --window-size=360,1200 --virtual-time-budget=6000 --run-all-compositor-stages-before-draw "--dump-dom" "javascript:void(0)" 2>$null | Out-Null
# dump-dom can't run arbitrary JS easily; use a harness page instead
$probe = "<!DOCTYPE html><html><body><script>window.location.replace('PAGE');</script></body></html>"
# simpler: inject via a tiny evaluate using --headless screenshot won't return JS.
Write-Output "use eval harness"
