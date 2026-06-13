# Production build — re-extract curated CSS, clean output, build to _site-prod.
# Usage: powershell -File _build/scripts/build-prod.ps1
Set-Location (Join-Path $PSScriptRoot "..\..")
$env:PYTHONIOENCODING = "utf-8"
python _build\extract_css.py
if ($LASTEXITCODE -ne 0) { exit 1 }
npm run build:prod
exit $LASTEXITCODE
