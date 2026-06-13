# Round-4 verification: prod build, overflow at 360/390/768 via headless
# Chrome screen emulation (Lighthouse content-width audit), then full
# accessibility/BP/SEO + CLS runs (mobile + desktop).
# Usage: powershell -File _build/scripts/verify_round4.ps1
Set-Location (Join-Path $PSScriptRoot "..\..")
$env:PYTHONIOENCODING = "utf-8"

python _build\extract_css.py
npm run build:prod
if ($LASTEXITCODE -ne 0) { exit 1 }

foreach ($w in 360, 390, 768) {
  npx lighthouse http://localhost:8125/ --quiet `
    "--only-audits=content-width,viewport" `
    "--screenEmulation.width=$w" "--screenEmulation.height=900" `
    "--screenEmulation.mobile" "--screenEmulation.deviceScaleFactor=2" `
    "--chrome-flags=--headless=new" `
    "--blocked-url-patterns=*googletagmanager*" `
    --output=json "--output-path=_build\verify\overflow-$w.json"
}

npx lighthouse http://localhost:8125/ --quiet `
  "--chrome-flags=--headless=new" `
  "--blocked-url-patterns=*googletagmanager*" `
  --output=json --output=html "--output-path=_build\verify\lighthouse-mobile.json"

npx lighthouse http://localhost:8125/ --quiet --preset=desktop `
  "--chrome-flags=--headless=new" `
  "--blocked-url-patterns=*googletagmanager*" `
  --output=json --output=html "--output-path=_build\verify\lighthouse-desktop.json"

python _build\scripts\verify_round4_summary.py
