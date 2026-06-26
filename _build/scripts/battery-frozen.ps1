# Frozen-copy verification battery -- dodges the Windows layout-v2 read-race
# (run_battery.py intermittently false-fails ~39 pre-existing t-prose /accounting/*
# pages against the LIVE _site during the 2-min parse). Runs the FULL battery
# (flip-gate mode) against a frozen snapshot of _site instead.
#
# Assumes _site is already built (run npx @11ty/eleventy or npm run build first).
# Usage: powershell -File _build/scripts/battery-frozen.ps1
Set-Location (Join-Path $PSScriptRoot "..\..")
$env:PYTHONIOENCODING = "utf-8"

if (-not (Test-Path "_site")) { Write-Error "_site not found - build first."; exit 1 }

# fresh frozen snapshot
if (Test-Path "_site-frozen") { Remove-Item -Recurse -Force "_site-frozen" }
Copy-Item -Recurse -Force "_site" "_site-frozen"

# stale battery logs can confuse a re-read; clear if present
if (Test-Path "logs") { Remove-Item -Recurse -Force "logs" }

$env:TB_OUTDIR = "_site-frozen"
python _build\battery\run_battery.py
$code = $LASTEXITCODE
Remove-Item Env:\TB_OUTDIR

# leave _site-frozen in place for inspection on failure; clean on success
if ($code -eq 0 -and (Test-Path "_site-frozen")) { Remove-Item -Recurse -Force "_site-frozen" }
exit $code
