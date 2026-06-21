# render_shot.ps1 — headless-Chrome screenshot of a served page (so Code can SEE the render).
# Screenshot path works on this machine even though --dump-dom returns 0-length DOM.
# Dedicated --user-data-dir + kill-after avoids the probe leak (memory: chrome-headless-leak).
# Usage: pwsh render_shot.ps1 -url "http://localhost:8080/..." -name d1 -w 1280 -h 9000
param([Parameter(Mandatory=$true)][string]$url, [Parameter(Mandatory=$true)][string]$name, [int]$w=1280, [int]$h=9000)
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path $PSScriptRoot "..\verify\shots"
New-Item -ItemType Directory -Force $shots | Out-Null
$out = Join-Path $shots "$name.png"
if (Test-Path $out) { Remove-Item $out -Force }
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size="$w,$h" --screenshot="$out" $url 2>$null | Out-Null
# NEVER kill chrome by image name (would close the founder's personal browser).
# kill_probe.ps1 stops ONLY PIDs whose command line carries tb-probe-profile.
& (Join-Path $PSScriptRoot "kill_probe.ps1") | Out-Null
if (Test-Path $out) { "OK $name = " + (Get-Item $out).Length + "b ($w x $h)" } else { "FAIL $name" }
