# Convert the TechBrot-vs-competitor C2 pages from inline vs-table to the shared .cmp partial.
# Extracts the competitor (3rd thead th) + caption from each inline table, replaces the block
# with the set+include. UTF-8-safe (System.IO.File).
$enc = New-Object System.Text.UTF8Encoding($false)
$files = @(
  "src/vs/techbrot-vs-pilot.njk", "src/vs/techbrot-vs-bench.njk", "src/vs/techbrot-vs-quickbooks-live.njk",
  "src/vs/techbrot-vs-1-800-accountant.njk", "src/vs/techbrot-vs-bookkeeper-com.njk", "src/vs/techbrot-vs-bookkeeper360.njk"
)
$blockRx = [regex]'(?s)<div class="vs-scroll">\s*<table class="vs-table">.*?</table>\s*</div>'
foreach ($f in $files) {
  if (-not (Test-Path $f)) { "MISSING $f"; continue }
  $full = (Resolve-Path $f).Path
  $c = [System.IO.File]::ReadAllText($full, $enc)
  $m = $blockRx.Match($c)
  if (-not $m.Success) { "NO-BLOCK $f"; continue }
  $block = $m.Value
  $comp = [regex]::Match($block, '(?s)vs-table__us">TechBrot</th>\s*<th scope="col">([^<]+)</th>').Groups[1].Value.Trim()
  $cap = [regex]::Match($block, '<caption class="sr-only">(.*?)</caption>').Groups[1].Value
  if (-not $comp) { "NO-COMP $f"; continue }
  if ($cap -match '"') { "CAPTION-HAS-QUOTE (manual) $f"; continue }
  $repl = '    {%- set cmpCompetitor = "' + $comp + '" %}' + "`n" + '    {%- set cmpCaption = "' + $cap + '" %}' + "`n" + '    {% include "partials/comparison-table.njk" %}'
  $new = $c.Replace($block, $repl)
  [System.IO.File]::WriteAllText($full, $new, $enc)
  "OK $f  (competitor=$comp)"
}
