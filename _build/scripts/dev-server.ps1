# Dev server — eleventy --serve (preview build: noindex, no analytics).
# Usage: powershell -File _build/scripts/dev-server.ps1
Set-Location (Join-Path $PSScriptRoot "..\..")
npx @11ty/eleventy --serve --port=8080
