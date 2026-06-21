# ============================================================================
# Turnkey axe-core (a11y) + responsive-overflow probe.
# RUN ON A MACHINE WITH REAL CHROME / JS EXECUTION (the founder's machine).
#
#   pwsh _build/scripts/run-axe-overflow.ps1        # or: powershell -File ...
#
# Steps: install puppeteer + axe-core (one-time) -> build _site -> serve it ->
# probe every URL in _build/probe/probe-urls.txt (axe desktop + overflow at
# 360/390/768) -> write _build/verify/axe-overflow-report.json + a summary.
# Exit 1 if any serious/critical a11y violation OR any overflow is found.
# ============================================================================
$ErrorActionPreference = "Stop"
$root = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
Set-Location $root
$port = 8181

# 1. Deps (puppeteer bundles its own Chromium ~150MB on first install)
if (-not (Test-Path (Join-Path $root "node_modules\puppeteer"))) {
  Write-Host "Installing puppeteer + axe-core (one-time, downloads Chromium)..." -ForegroundColor Cyan
  npm install --no-save puppeteer axe-core
  if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed." -ForegroundColor Red; exit 1 }
}

# 2. Build _site
Write-Host "Building _site..." -ForegroundColor Cyan
npx eleventy | Out-Null

# 3. Serve _site (background static server) + wait until it answers
Write-Host "Serving _site on http://localhost:$port ..." -ForegroundColor Cyan
$server = Start-Process -FilePath "python" -ArgumentList "-m","http.server",$port,"--directory","_site" -PassThru -WindowStyle Hidden
$ready = $false
for ($i = 0; $i -lt 25; $i++) {
  try { Invoke-WebRequest "http://localhost:$port/" -UseBasicParsing -TimeoutSec 2 | Out-Null; $ready = $true; break }
  catch { Start-Sleep -Milliseconds 400 }
}
if (-not $ready) {
  Write-Host "Static server did not come up on :$port." -ForegroundColor Red
  if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force }
  exit 1
}

# 4. Probe (always stop the server afterward)
$code = 1
try {
  node "_build/probe/axe-overflow.mjs" "http://localhost:$port"
  $code = $LASTEXITCODE
} finally {
  if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force }
}

Write-Host ""
if ($code -eq 0) { Write-Host "PROBE GREEN - no serious a11y violations, no overflow." -ForegroundColor Green }
else { Write-Host "PROBE found issues - see _build/verify/axe-overflow-report.json" -ForegroundColor Yellow }
exit $code
