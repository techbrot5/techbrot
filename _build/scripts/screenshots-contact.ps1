# Contact-elevation round screenshots via headless Chrome against the prod
# artifact server (8125). --screenshot needs an ABSOLUTE path.
Set-Location (Join-Path $PSScriptRoot "..\..")
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots"
New-Item -ItemType Directory -Force $shots | Out-Null

& $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,9500 --screenshot="$shots\contact-desktop-full.png" "http://localhost:8125/contact/" | Out-Null
& $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,1400 --screenshot="$shots\contact-hero-desktop.png" "http://localhost:8125/contact/" | Out-Null
& $chrome --headless --disable-gpu --hide-scrollbars --window-size=360,6200 --screenshot="$shots\contact-mobile-360.png" "http://localhost:8125/contact/" | Out-Null
& $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,9500 --screenshot="$shots\home-team-photo-desktop.png" "http://localhost:8125/" | Out-Null

Get-ChildItem $shots | ForEach-Object { "{0}  {1}b" -f $_.Name, $_.Length }
