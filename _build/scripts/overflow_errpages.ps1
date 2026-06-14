# Overflow probe (360/390/768) across the 7 re-patterned error-code pages.
# Prereq: _site-prod served on 8125. Page-by-page with kill_probe between
# launches (founder Chrome-leak rule).
Set-Location (Join-Path $PSScriptRoot "..\..")
$pages = @(
  "/quickbooks/help/error-codes/",
  "/quickbooks/help/error-codes/15240/",
  "/quickbooks/help/error-codes/3371/",
  "/quickbooks/help/error-codes/ps038/",
  "/quickbooks/help/error-codes/c-series/",
  "/quickbooks/help/error-codes/error-6000-series/",
  "/quickbooks/help/error-codes/unrecoverable-error/"
)
foreach ($p in $pages) {
  $line = powershell -File "_build\scripts\overflow_probe.ps1" $p |
    Select-String "OVERFLOW-RESULTS" | ForEach-Object { $_.Line.Trim() }
  Write-Output ("$p  $line")
  powershell -File "_build\scripts\kill_probe.ps1" | Out-Null
}
