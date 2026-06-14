# Round screenshots via headless Chrome (preview MCP capture is broken on
# this machine). NOTE: --screenshot must get an ABSOLUTE path — Chrome
# resolves relative paths against its own working directory.
Set-Location (Join-Path $PSScriptRoot "..\..")
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots"
New-Item -ItemType Directory -Force $shots | Out-Null

& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,9000 --screenshot="$shots\home-desktop-full.png" "http://localhost:8125/" | Out-Null
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,1400 --screenshot="$shots\home-hero-desktop.png" "http://localhost:8125/" | Out-Null
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=360,3200 --screenshot="$shots\home-mobile-360.png" "http://localhost:8125/" | Out-Null
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,1600 --screenshot="$shots\dev-minimal-chrome.png" "http://localhost:8080/dev/form-test/" | Out-Null

Get-ChildItem $shots | ForEach-Object { "{0}  {1}b" -f $_.Name, $_.Length }
