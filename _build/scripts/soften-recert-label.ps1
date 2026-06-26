# Honesty sweep part 2 — soften error-code re-certification stat label.
# Exact-string replace in src/quickbooks/help/error-codes/*.11tydata.js ONLY.
# label: "Intuit re-certification — verifiable on the public ProAdvisor directory"  ->  "Annual Intuit re-certification"
# Preserves UTF-8 without BOM. Reports per-file hit count.

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)  # repo root
$dir  = Join-Path $root 'src\quickbooks\help\error-codes'

$old = 'label: "Intuit re-certification ' + [char]0x2014 + ' verifiable on the public ProAdvisor directory"'
$new = 'label: "Annual Intuit re-certification"'

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$total = 0
$files = 0

Get-ChildItem -Path $dir -Filter '*.11tydata.js' -File | ForEach-Object {
    $path = $_.FullName
    $text = [System.IO.File]::ReadAllText($path)
    $count = ([regex]::Matches($text, [regex]::Escape($old))).Count
    if ($count -gt 0) {
        $text = $text.Replace($old, $new)
        [System.IO.File]::WriteAllText($path, $text, $utf8NoBom)
        $files++
        $total += $count
        Write-Output ("{0}: {1}" -f $_.Name, $count)
    }
}

Write-Output ("FILES CHANGED: {0}" -f $files)
Write-Output ("LABELS SOFTENED: {0}" -f $total)
