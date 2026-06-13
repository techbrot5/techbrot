# Capture the mobile drawer OPEN at a given width (it's translateX(100%) +
# visibility:hidden until data-open). Loads the page in an iframe, forces the
# drawer open + visible with transitions off, then screenshots. Round-15 FIX 3.
# Prereq: static server on the given port serving the build.
# Usage: powershell -File _build/scripts/shot_drawer.ps1 -Path / -Out r15/drawer-360.png -Port 8090 -Width 360
param(
  [string]$Path = "/",
  [string]$Out = "drawer.png",
  [int]$Port = 8090,
  [string]$Root = "_site",
  [int]$Width = 360
)
Set-Location (Join-Path $PSScriptRoot "..\..")
$probe = @'
<!DOCTYPE html><html><head><style>html,body{margin:0}</style></head><body>
<iframe id="f" src="PAGEPATH" style="width:WIDTHpx;height:780px;border:0"></iframe>
<script>
const f = document.getElementById("f");
f.onload = async () => {
  const doc = f.contentDocument;
  try { await f.contentWindow.document.fonts.ready; } catch(e) {}
  const d = doc.getElementById("site-drawer");
  if (d) {
    d.style.transition = "none";
    d.setAttribute("data-open", "true");
    const btn = doc.querySelector(".nav__hamburger");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }
  await new Promise(r => setTimeout(r, 500));
};
</script>
</body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path).Replace("WIDTH", "$Width")
Set-Content -Path "$Root\dev-drawer-probe.html" -Value $probe -Encoding ascii
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots"
& $chrome --headless --disable-gpu --hide-scrollbars --window-size="$Width,820" --virtual-time-budget=8000 --screenshot="$shots\$Out" "http://localhost:$Port/dev-drawer-probe.html" | Out-Null
Remove-Item "$Root\dev-drawer-probe.html" -Force
Write-Output "saved $shots\$Out"
