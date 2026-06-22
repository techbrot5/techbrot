# CORRECT, structure-agnostic C2 conversion: in-place restyle of each techbrot-vs inline table to
# .cmp. Captures whatever is INSIDE each cell (concede span or bare text) and re-emits it verbatim
# -- so each page's own data keys + markup are preserved exactly. Only adds: cmp table class,
# us class on col 1 (TechBrot), and data-col by column position (TechBrot / competitor / Edge).
# Guard: aborts a file if the {{ r.x }} key count changes. No dot-marks (content-safe).
$enc = New-Object System.Text.UTF8Encoding($false)
$files = @(
  "src/vs/techbrot-vs-pilot.njk", "src/vs/techbrot-vs-bench.njk", "src/vs/techbrot-vs-quickbooks-live.njk",
  "src/vs/techbrot-vs-1-800-accountant.njk", "src/vs/techbrot-vs-bookkeeper-com.njk", "src/vs/techbrot-vs-bookkeeper360.njk",
  "src/vs/techbrot-vs-xendoo.njk"
)
# Row template: row-header th + col-1 td (us) + col-2 td (competitor) + optional col-3 td (edge).
$rowRx = [regex]'(?s)<tr>\s*<th scope="row">(.*?)</th>\s*<td[^>]*>(.*?)</td>\s*<td[^>]*>(.*?)</td>(?:\s*<td[^>]*>(.*?)</td>)?\s*</tr>'
foreach ($f in $files) {
  $full = (Resolve-Path $f).Path
  $c = [System.IO.File]::ReadAllText($full, $enc)
  if ($c -notmatch '<table class="vs-table">') { "NO-VSTABLE $f"; continue }
  $cm = [regex]::Match($c, '(?s)class="vs-table__us">TechBrot</th>\s*<th scope="col">([^<]+)</th>')
  if (-not $cm.Success) { "NO-COMP $f"; continue }
  $script:comp = $cm.Groups[1].Value.Trim()
  $before = ([regex]::Matches($c, '\{\{ r\.\w+')).Count
  $eval = {
    param($m)
    $rh = $m.Groups[1].Value; $us = $m.Groups[2].Value; $them = $m.Groups[3].Value
    $o = '<tr>' + "`n            " + '<th scope="row">' + $rh + '</th>' + "`n            " +
         '<td class="us" data-col="TechBrot">' + $us + '</td>' + "`n            " +
         '<td data-col="' + $script:comp + '">' + $them + '</td>'
    if ($m.Groups[4].Success) { $o += "`n            " + '<td data-col="Edge">' + $m.Groups[4].Value + '</td>' }
    $o += "`n          </tr>"
    $o
  }
  $c = $c.Replace('<table class="vs-table">', '<table class="cmp" data-viz="comparison-table" data-viz-state="FINAL">')
  $c = $rowRx.Replace($c, $eval, 1)
  $c = $c.Replace('class="vs-table__us"', 'class="us"')
  $after = ([regex]::Matches($c, '\{\{ r\.\w+')).Count
  $dc = ([regex]::Matches($c, 'data-col=')).Count
  if ($before -ne $after) { "KEY-COUNT-CHANGED ($before->$after) ABORT $f"; continue }
  [System.IO.File]::WriteAllText($full, $c, $enc)
  "OK $f  (comp=$($script:comp); keys=$after; data-col=$dc)"
}
