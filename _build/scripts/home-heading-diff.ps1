# Content-completeness gate: every d5a35c9 home heading must survive the recompose.
function Get-Headings([string]$text) {
  $rx = [regex]'(?s)<h[123][^>]*>(.*?)</h[123]>'
  $rx.Matches($text) | ForEach-Object {
    $t = $_.Groups[1].Value
    $t = [regex]::Replace($t, '<[^>]+>', '')
    $t = $t.Replace('&amp;','&').Replace([char]0x2019,"'").Replace('&rsquo;',"'").Replace('&middot;','-')
    $t = [regex]::Replace($t, '\s+', ' ').Trim()
    if ($t) { $t }
  }
}
$cur  = @(Get-Headings ([System.IO.File]::ReadAllText("$PWD\_site-probe\index.html")))
$base = @(Get-Headings ([System.IO.File]::ReadAllText("$PWD\_build\verify\_home-d5a35c9.njk")))
"d5a35c9 headings: $($base.Count) | current headings: $($cur.Count)"
""
"=== d5a35c9 headings MISSING from current (must be ZERO) ==="
$missing = @($base | Where-Object { $cur -notcontains $_ })
if ($missing.Count -eq 0) { "  NONE - all d5a35c9 headings present" } else { $missing | ForEach-Object { "  MISSING: $_" } }
""
"=== headings NEW in current (template/recompose additions) ==="
$new = @($cur | Where-Object { $base -notcontains $_ })
if ($new.Count -eq 0) { "  none" } else { $new | ForEach-Object { "  NEW: $_" } }