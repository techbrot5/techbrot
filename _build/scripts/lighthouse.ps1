# Lighthouse against the production artifact server (port 8125, _site-prod).
# Usage:
#   powershell -File _build/scripts/lighthouse.ps1            # mobile preset
#   powershell -File _build/scripts/lighthouse.ps1 desktop    # desktop preset
# Prereq: build-prod.ps1 ran, and a static server is on 8125
#   (npx serve -l 8125 _site-prod). gtag is blocked at audit level so no
#   analytics fires from the production-built page during local audits.
param([string]$Preset = "mobile")
Set-Location (Join-Path $PSScriptRoot "..\..")
$out = "_build\verify\lighthouse-$Preset.json"
$lhArgs = @(
  "lighthouse", "http://localhost:8125/", "--quiet",
  "--chrome-flags=--headless=new",
  "--blocked-url-patterns=*googletagmanager*",
  "--output=json", "--output=html",
  "--output-path=$out"
)
if ($Preset -eq "desktop") { $lhArgs += "--preset=desktop" }
npx @lhArgs
$env:PYTHONIOENCODING = "utf-8"
python _build\scripts\lh_summary.py ($out -replace "\.json$", ".report.json")
