# Changeover step-3 sample pairs: OUR converted-layout sample vs the
# Design render, per tier. Prereq: 8090 serves _site, 8091 serves the
# handoff project dir (npx serve -l 8091 <...>/project).
Set-Location (Join-Path $PSScriptRoot "..\..")
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots\changeover"
New-Item -ItemType Directory -Force $shots | Out-Null

foreach ($t in "t-hub", "t-mofu", "t-guide", "t-bofu", "t-location") {
  & $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,5200 --screenshot="$shots\$t-OURS.png" "http://localhost:8090/dev/sample-$t/" | Out-Null
  & $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,5200 --screenshot="$shots\$t-DESIGN.png" "http://localhost:8091/handoff/tiers/$t.html" | Out-Null
  Write-Output "pair: $t"
}
Get-ChildItem $shots | ForEach-Object { "{0}  {1}b" -f $_.Name, $_.Length }
