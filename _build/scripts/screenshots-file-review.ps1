# File-review round screenshots via headless Chrome against the prod
# artifact server (8125). NOTE: --screenshot must get an ABSOLUTE path —
# Chrome resolves relative paths against its own working directory.
Set-Location (Join-Path $PSScriptRoot "..\..")
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots"
New-Item -ItemType Directory -Force $shots | Out-Null

& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,9000 --screenshot="$shots\file-review-desktop-full.png" "http://localhost:8125/quickbooks/file-review/" | Out-Null
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,1400 --screenshot="$shots\file-review-hero-desktop.png" "http://localhost:8125/quickbooks/file-review/" | Out-Null
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=360,5200 --screenshot="$shots\file-review-mobile-360.png" "http://localhost:8125/quickbooks/file-review/" | Out-Null
& $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,3000 --screenshot="$shots\home-quick5-fixed-desktop.png" "http://localhost:8125/" | Out-Null

Get-ChildItem $shots | ForEach-Object { "{0}  {1}b" -f $_.Name, $_.Length }
