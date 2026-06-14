# axe-core a11y sweep across the 9 re-patterned t-bofu pages.
# Prereq: _site served on 8090 AND _site/axe.min.js exists. Page-by-page with
# kill_probe between launches (founder Chrome-leak rule).
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
  powershell -File "_build\scripts\axe_page.ps1" -Path $p
  powershell -File "_build\scripts\kill_probe.ps1" | Out-Null
}
