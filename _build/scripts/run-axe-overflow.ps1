# ============================================================================
# Turnkey axe-core (a11y) + responsive-overflow probe -- ISOLATED.
#   pwsh _build/scripts/run-axe-overflow.ps1 [ -PathList "/a/,/b/" ]
#
# ISOLATION (founder standing rules):
#  - Builds to _site-probe (TB_OUTDIR) and serves on :8181 -- NEVER the founder's
#    _site or the persistent dev server on :8080. No collision with founder viewing.
#  - Uses puppeteer's OWN bundled Chromium (browser.close() cleans it up). Any
#    leftover isolated screenshot Chrome is stopped via kill_probe.ps1, which
#    matches ONLY PIDs carrying tb-probe-profile. NEVER kills Chrome by image name.
#  - Optional -PathList = comma-separated paths for a per-family probe; else
#    _build/probe/probe-urls.txt.
# Exit 1 if any serious/critical a11y violation OR any overflow is found.
# ============================================================================
param([string]$PathList = "")
$ErrorActionPreference = "Continue"
$root = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
Set-Location $root
$port = 8181

# 1. Deps (puppeteer bundles its own Chromium ~150MB on first install)
if (-not (Test-Path (Join-Path $root "node_modules\puppeteer"))) {
  Write-Host "Installing puppeteer + axe-core (one-time, downloads Chromium)..." -ForegroundColor Cyan
  npm install --no-save puppeteer axe-core
  if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed." -ForegroundColor Red; exit 1 }
}

# 2. Build to the ISOLATED outdir (never the founder's _site / :8080)
Write-Host "Building _site-probe (isolated)..." -ForegroundColor Cyan
$env:TB_OUTDIR = "_site-probe"
cmd /c "npx eleventy >NUL 2>&1"
if ($LASTEXITCODE -ne 0) { Write-Host "eleventy build failed (exit $LASTEXITCODE)." -ForegroundColor Red; exit 1 }

# 3. Serve _site-probe on the probe-only port (never :8080)
Write-Host "Serving _site-probe on http://localhost:$port (probe-only) ..." -ForegroundColor Cyan
$server = Start-Process -FilePath "python" -ArgumentList "-m","http.server",$port,"--directory","_site-probe" -PassThru -WindowStyle Hidden
$ready = $false
for ($i = 0; $i -lt 25; $i++) {
  try { Invoke-WebRequest "http://localhost:$port/" -UseBasicParsing -TimeoutSec 2 | Out-Null; $ready = $true; break }
  catch { Start-Sleep -Milliseconds 400 }
}
if (-not $ready) {
  Write-Host "Probe server did not come up on :$port." -ForegroundColor Red
  if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force }
  exit 1
}

# 4. Probe (always stop the probe server + isolated chrome afterward)
$code = 1
try {
  if ($PathList) { node "_build/probe/axe-overflow.mjs" "http://localhost:$port" $PathList }
  else { node "_build/probe/axe-overflow.mjs" "http://localhost:$port" }
  $code = $LASTEXITCODE
} finally {
  if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force }
  & (Join-Path $PSScriptRoot "kill_probe.ps1") | Out-Null
}

Write-Host ""
if ($code -eq 0) { Write-Host "PROBE GREEN - no serious a11y violations, no overflow." -ForegroundColor Green }
else { Write-Host "PROBE found issues - see _build/verify/axe-overflow-report.json" -ForegroundColor Yellow }
exit $code
