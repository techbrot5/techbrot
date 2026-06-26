# Validates that every .11tydata.js file touched by the honesty sweep still parses
# (require) cleanly as a CommonJS module. Run after edits.
$ErrorActionPreference = "Stop"
$src = "C:\Users\MR KHAN\Documents\Github\TechBrot\src"

$files = @(
  "$src\about\methodology.11tydata.js",
  "$src\accounting\advisory\budgeting-forecasting.11tydata.js",
  "$src\accounting\advisory.11tydata.js",
  "$src\accounting\bookkeeping\bookkeeping.11tydata.js",
  "$src\accounting\industries\restaurant.11tydata.js",
  "$src\accounting\industries.11tydata.js",
  "$src\accounting\services.11tydata.js",
  "$src\accounting.11tydata.js",
  "$src\pricing\cleanup.11tydata.js",
  "$src\pricing.11tydata.js",
  "$src\quickbooks\help.11tydata.js",
  "$src\quickbooks\help\error-codes\index.11tydata.js",
  "$src\quickbooks\migration\balances-wrong-after-conversion.11tydata.js",
  "$src\quickbooks\proadvisor-near-me.11tydata.js",
  "$src\quickbooks\proadvisor-team.11tydata.js",
  "$src\platforms\quickbooks.11tydata.js"
)
# add all error-code data files
Get-ChildItem "$src\quickbooks\help\error-codes\*.11tydata.js" | ForEach-Object { $files += $_.FullName }
$files = $files | Select-Object -Unique

$fail = 0
foreach ($f in $files) {
  $jsPath = $f.Replace('\','/')
  $code = "try{require('$jsPath');process.stdout.write('OK\n');}catch(e){process.stdout.write('FAIL: '+e.message+'\n');process.exit(2);}"
  $out = node -e $code
  if ($LASTEXITCODE -ne 0) { Write-Host "FAIL $f -> $out"; $fail++ }
}
Write-Host "---"
if ($fail -eq 0) { Write-Host "All $($files.Count) data files parse OK" } else { Write-Host "$fail file(s) FAILED" }
