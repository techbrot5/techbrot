# Run the computed-style probe over ALL built pages at 1280 and 360 and
# write the fingerprint set to a file for before/after trim comparison.
# Usage: powershell -File _build/scripts/css_probe_all.ps1 -Out _build/verify/css-probe-before.txt
param([string]$Out = "_build\verify\css-probe.txt")
Set-Location (Join-Path $PSScriptRoot "..\..")

$pages = @("/", "/contact/", "/quickbooks/file-review/",
  "/legal/disclaimer/", "/legal/dpa/", "/legal/privacy-policy/",
  "/legal/terms/", "/trust/", "/partners/", "/404.html",
  "/dev/form-test/")

$results = @()
foreach ($p in $pages) {
  foreach ($w in 1280, 360) {
    $line = powershell -File "_build\scripts\css_probe.ps1" -Path $p -Width $w
    if (-not $line) { $line = "STYLE-HASH:$p|$w|PROBE-FAILED|0" }
    $results += $line
    Write-Output $line
  }
}
Set-Content -Path $Out -Value ($results -join "`n") -Encoding ascii
Write-Output "saved -> $Out"
