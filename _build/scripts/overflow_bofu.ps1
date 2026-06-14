# Overflow probe (360/390/768) across the 9 re-patterned t-bofu pages.
# Prereq: _site-prod served on 8125. Page-by-page with kill_probe between
# launches (founder Chrome-leak rule).
Set-Location (Join-Path $PSScriptRoot "..\..")
$pages = @(
  "/accounting/advisory/fractional-cfo/",
  "/accounting/bookkeeping/catch-up-bookkeeping/",
  "/accounting/bookkeeping/cleanup-bookkeeping/",
  "/accounting/bookkeeping/monthly-bookkeeping/",
  "/accounting/sales-tax-compliance/",
  "/quickbooks/cleanup/",
  "/quickbooks/migration/",
  "/quickbooks/payroll/",
  "/quickbooks/setup/"
)
foreach ($p in $pages) {
  $line = powershell -File "_build\scripts\overflow_probe.ps1" $p |
    Select-String "OVERFLOW-RESULTS" | ForEach-Object { $_.Line.Trim() }
  Write-Output ("$p  $line")
  powershell -File "_build\scripts\kill_probe.ps1" | Out-Null
}
