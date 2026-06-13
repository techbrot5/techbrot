# Lighthouse desktop across every built page + 404; prints a11y/BP/SEO/CLS
# per page. Prereq: _site-prod served on 8125.
Set-Location (Join-Path $PSScriptRoot "..\..")
$pages = @(
  @("/","home"), @("/contact/","contact"), @("/quickbooks/file-review/","file-review"),
  @("/legal/disclaimer/","legal-disclaimer"), @("/legal/dpa/","legal-dpa"),
  @("/legal/privacy-policy/","legal-privacy"), @("/legal/terms/","legal-terms"),
  @("/trust/","trust"), @("/partners/","partners"), @("/404.html","notfound")
)
foreach ($p in $pages) {
  $out = "_build\verify\lighthouse-$($p[1])-desktop"
  npx lighthouse ("http://localhost:8125" + $p[0]) --quiet `
    "--chrome-flags=--headless=new" "--blocked-url-patterns=*googletagmanager*" `
    --preset=desktop --output=json "--output-path=$out.json" 2>$null | Out-Null
  $j = Get-Content "$out.report.json" -Raw 2>$null
  if (-not $j) { $j = Get-Content "$out.json" -Raw 2>$null }
  $r = $j | ConvertFrom-Json
  $a = [math]::Round($r.categories.accessibility.score * 100)
  $b = [math]::Round($r.categories.'best-practices'.score * 100)
  $s = [math]::Round($r.categories.seo.score * 100)
  $cls = $r.audits.'cumulative-layout-shift'.numericValue
  Write-Output ("{0,-18} a11y={1} BP={2} SEO={3} CLS={4}" -f $p[1], $a, $b, $s, $cls)
}
