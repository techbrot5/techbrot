# Restructure the concept-vs C2 tables (neutral 2-concept) from inline vs-table to the real .cmp
# markup: table->cmp+data-viz, vs-table__us->us, data-col added per cell (from the thead concept
# names) for mobile transpose. No dot-marks (neutral, no winner). Data keys (r.bk/r.acct...) untouched.
$enc = New-Object System.Text.UTF8Encoding($false)
$files = @(
  "src/vs/bookkeeper-vs-accountant.njk", "src/vs/bench-vs-quickbooks-live.njk", "src/vs/bookkeeper-vs-cpa.njk",
  "src/vs/cpa-vs-ea.njk", "src/vs/bookkeeping-firm-vs-freelancer.njk", "src/vs/in-house-vs-outsourced-bookkeeping.njk",
  "src/vs/local-cpa-vs-online-bookkeeping.njk"
)
foreach ($f in $files) {
  if (-not (Test-Path $f)) { "MISSING $f"; continue }
  $full = (Resolve-Path $f).Path
  $c = [System.IO.File]::ReadAllText($full, $enc)
  if ($c -notmatch 'class="vs-table"') { "NO-VSTABLE $f"; continue }
  $m = [regex]::Match($c, '(?s)class="vs-table__us">([^<]+)</th>\s*<th scope="col">([^<]+)</th>')
  if (-not $m.Success) { "NO-CONCEPTS $f"; continue }
  $c1 = $m.Groups[1].Value.Trim(); $c2 = $m.Groups[2].Value.Trim()
  if ($c1 -match '"' -or $c2 -match '"') { "CONCEPT-HAS-QUOTE (manual) $f"; continue }
  $c = $c.Replace('<table class="vs-table">', '<table class="cmp" data-viz="comparison-table" data-viz-state="FINAL">')
  $c = $c.Replace('class="vs-table__us"', 'class="us"')
  $c = $c.Replace('<td class="us"><span class="vs-table__concede">', '<td class="us" data-col="' + $c1 + '"><span class="vs-table__concede">')
  $c = $c.Replace('<td><span class="vs-table__concede">', '<td data-col="' + $c2 + '"><span class="vs-table__concede">')
  [System.IO.File]::WriteAllText($full, $c, $enc)
  "OK $f  ($c1 | $c2)"
}
