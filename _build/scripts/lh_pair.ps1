# Full Lighthouse pair (mobile + desktop) against the prod artifact on 8125.
Set-Location (Join-Path $PSScriptRoot "..\..")
$env:PYTHONIOENCODING = "utf-8"

npx lighthouse http://localhost:8125/ --quiet `
  "--chrome-flags=--headless=new --user-data-dir=C:\tb-probe-profile" `
  "--blocked-url-patterns=*googletagmanager*" `
  --output=json --output=html "--output-path=_build\verify\lighthouse-mobile.json"

npx lighthouse http://localhost:8125/ --quiet --preset=desktop `
  "--chrome-flags=--headless=new --user-data-dir=C:\tb-probe-profile" `
  "--blocked-url-patterns=*googletagmanager*" `
  --output=json --output=html "--output-path=_build\verify\lighthouse-desktop.json"

python _build\scripts\verify_round4_summary.py
