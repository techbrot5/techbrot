# Round-8 batch verification: overflow probes at 360/390/768 for all six
# elevated pages, then screenshots (desktop full + mobile-360 per page).
# Prereq: build-prod.ps1 ran, static server on 8125 (npx serve -l 8125 _site-prod).
Set-Location (Join-Path $PSScriptRoot "..\..")

$pages = @(
  @{ Path = "/legal/disclaimer/";     Slug = "legal-disclaimer" },
  @{ Path = "/legal/dpa/";            Slug = "legal-dpa" },
  @{ Path = "/legal/privacy-policy/"; Slug = "legal-privacy" },
  @{ Path = "/legal/terms/";          Slug = "legal-terms" },
  @{ Path = "/trust/";                Slug = "trust" },
  @{ Path = "/partners/";             Slug = "partners" }
)

Write-Output "== OVERFLOW PROBES =="
foreach ($p in $pages) {
  Write-Output ("-- " + $p.Path)
  powershell -File "_build\scripts\overflow_probe.ps1" $p.Path |
    Select-String "OVERFLOW-RESULTS" | ForEach-Object { $_.Line.Trim() }
}

Write-Output "== SCREENSHOTS =="
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots"
New-Item -ItemType Directory -Force $shots | Out-Null
foreach ($p in $pages) {
  $url = "http://localhost:8125" + $p.Path
  & $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=1280,9500 --screenshot="$shots\$($p.Slug)-desktop-full.png" $url | Out-Null
  & $chrome --headless --user-data-dir=C:\tb-probe-profile --disable-gpu --hide-scrollbars --window-size=360,7000 --screenshot="$shots\$($p.Slug)-mobile-360.png" $url | Out-Null
  Write-Output ("shot: " + $p.Slug)
}
Get-ChildItem $shots -Filter "*-360.png" | ForEach-Object { "{0}  {1}b" -f $_.Name, $_.Length }
