# Verification battery — preview build then full battery (every round).
# Usage: powershell -File _build/scripts/battery.ps1
Set-Location (Join-Path $PSScriptRoot "..\..")
$env:PYTHONIOENCODING = "utf-8"
npm run build
if ($LASTEXITCODE -ne 0) { exit 1 }
python _build\battery\run_battery.py
exit $LASTEXITCODE
