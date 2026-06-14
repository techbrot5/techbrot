# axe-core a11y sweep across the 7 re-patterned error-code pages.
# Prereq: _site served on 8090 AND _site/axe.min.js exists. Page-by-page with
# kill_probe between launches (founder Chrome-leak rule).
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
  powershell -File "_build\scripts\axe_page.ps1" -Path $p
  powershell -File "_build\scripts\kill_probe.ps1" | Out-Null
}
