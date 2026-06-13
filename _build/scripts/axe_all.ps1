# axe-core a11y sweep across every built page + 404. Prereq: _site on 8090
# with axe.min.js copied in.
Set-Location (Join-Path $PSScriptRoot "..\..")
$pages = @("/", "/contact/", "/quickbooks/file-review/",
  "/legal/disclaimer/", "/legal/dpa/", "/legal/privacy-policy/",
  "/legal/terms/", "/trust/", "/partners/", "/404.html")
foreach ($p in $pages) {
  powershell -File "_build\scripts\axe_page.ps1" -Path $p
}
