# Mechanical asset/render check across EVERY page. Builds an isolated _site-probe,
# serves it on :8182 (probe-only, never the founder's :8080), runs asset-render-check.mjs
# (Puppeteer's own Chromium), then cleans up. Chrome-safe (kill_probe at the end).
param([switch]$NoBuild, [switch]$Clean, [string]$PathList = "")
$ErrorActionPreference = "Continue"
if ($Clean -and (Test-Path "_site-probe")) {
  Write-Host "Clean: removing _site-probe (forces image regen from source, no cache)..."
  Remove-Item -Recurse -Force "_site-probe"
}
if (-not $NoBuild) {
  Write-Host "Building _site-probe (isolated)..."
  $env:ENVIRONMENT = $null
  $env:TB_OUTDIR = "_site-probe"
  cmd /c "npx eleventy >NUL 2>&1"
}
Write-Host "Serving _site-probe on http://localhost:8182 (probe-only)..."
$server = Start-Process python -ArgumentList "-m", "http.server", "8182", "--directory", "_site-probe" -PassThru -WindowStyle Hidden
$ready = $false
for ($i = 0; $i -lt 25; $i++) { try { Invoke-WebRequest "http://localhost:8182/" -UseBasicParsing -TimeoutSec 2 | Out-Null; $ready = $true; break } catch { Start-Sleep -Milliseconds 400 } }
try {
  if ($ready) { node "_build/probe/asset-render-check.mjs" "http://localhost:8182" "_site-probe" "$PathList" }
  else { Write-Host "probe server failed to start" }
} finally {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
  & (Join-Path $PSScriptRoot "kill_probe.ps1") | Out-Null
}
