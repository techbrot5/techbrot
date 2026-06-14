# Screenshot a page scrolled to a #fragment via a same-origin iframe probe
# (headless --screenshot always captures from the top of the window).
# Usage: powershell -File _build/scripts/shot_anchor.ps1 -Path / -Anchor home-team -Out home-team-card.png
# -Port/-Root default to the prod artifact (8125/_site-prod); pass
# -Port 8090 -Root _site to shoot the live preview build.
param(
  [string]$Path = "/",
  [string]$Anchor = "",
  [string]$Out = "anchor-shot.png",
  [int]$Port = 8125,
  [string]$Root = "_site-prod",
  [int]$Width = 1280
)
Set-Location (Join-Path $PSScriptRoot "..\..")

# Deterministic scroll: the site sets scroll-behavior:smooth, so a bare
# src="#anchor" capture lands mid-animation. Load, force instant scroll, then
# scrollIntoView the target, settle, and hold the position for the capture.
$probe = @'
<!DOCTYPE html><html><head><style>html,body{margin:0}</style></head><body>
<iframe id="f" src="PAGEPATH" style="width:WIDTHpx;height:880px;border:0"></iframe>
<script>
const f = document.getElementById("f");
f.onload = async () => {
  const doc = f.contentDocument, win = f.contentWindow;
  try { await win.document.fonts.ready; } catch(e) {}
  doc.documentElement.style.scrollBehavior = "auto";
  const el = doc.getElementById("ANCHOR");
  if (el) el.scrollIntoView({ block: "start", behavior: "auto" });
  await new Promise(r => setTimeout(r, 700));
  if (el) el.scrollIntoView({ block: "start", behavior: "auto" });
};
</script>
</body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path).Replace("ANCHOR", $Anchor).Replace("WIDTH", "$Width")
Set-Content -Path "$Root\dev-anchor-probe.html" -Value $probe -Encoding ascii

$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots"
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size="$Width,900" --virtual-time-budget=8000 --screenshot="$shots\$Out" "http://localhost:$Port/dev-anchor-probe.html" | Out-Null

Remove-Item "$Root\dev-anchor-probe.html" -Force
Write-Output "saved $shots\$Out"
