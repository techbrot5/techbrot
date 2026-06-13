# Overflow probe (360/390/768) across every built page + 404.
# Prereq: _site-prod served on 8125.
Set-Location (Join-Path $PSScriptRoot "..\..")
$pages = @("/", "/contact/", "/quickbooks/file-review/",
  "/legal/disclaimer/", "/legal/dpa/", "/legal/privacy-policy/",
  "/legal/terms/", "/trust/", "/partners/", "/404.html")
foreach ($p in $pages) {
  $line = powershell -File "_build\scripts\overflow_probe.ps1" $p |
    Select-String "OVERFLOW-RESULTS" | ForEach-Object { $_.Line.Trim() }
  Write-Output ("$p  $line")
}
