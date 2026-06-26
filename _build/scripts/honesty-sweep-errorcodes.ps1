# honesty-sweep-errorcodes.ps1
# Softens the uniform sentence-ending overclaim tag in the error-code data files
# (and the two non-error-code data files that share the identical tail string).
# Rule 1: ", verifiable on Intuit's public ProAdvisor directory."
#      -> "; Intuit's public ProAdvisor directory lists active ProAdvisors for verification."
# Explicit allow-list only. Never touches src/dev/ or src/find-an-accountant/.

$ErrorActionPreference = "Stop"
$root = "C:\Users\MR KHAN\Documents\Github\TechBrot\src\quickbooks"

$old = ", verifiable on Intuit&rsquo;s public ProAdvisor directory."
$new = "; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification."

$files = @(
  "$root\help\error-codes\12002.11tydata.js",
  "$root\help\error-codes\12007.11tydata.js",
  "$root\help\error-codes\12029.11tydata.js",
  "$root\help\error-codes\15223.11tydata.js",
  "$root\help\error-codes\15240.11tydata.js",
  "$root\help\error-codes\15271.11tydata.js",
  "$root\help\error-codes\3371.11tydata.js",
  "$root\help\error-codes\6000.11tydata.js",
  "$root\help\error-codes\6000-83.11tydata.js",
  "$root\help\error-codes\6000-301.11tydata.js",
  "$root\help\error-codes\6073.11tydata.js",
  "$root\help\error-codes\6123.11tydata.js",
  "$root\help\error-codes\6150.11tydata.js",
  "$root\help\error-codes\9999.11tydata.js",
  "$root\help\error-codes\c-series.11tydata.js",
  "$root\help\error-codes\error-6000-series.11tydata.js",
  "$root\help\error-codes\h101.11tydata.js",
  "$root\help\error-codes\h202.11tydata.js",
  "$root\help\error-codes\h505.11tydata.js",
  "$root\help\error-codes\ps036.11tydata.js",
  "$root\help\error-codes\ps038.11tydata.js",
  "$root\help\error-codes\unrecoverable-error.11tydata.js",
  "$root\help\error-codes\index.11tydata.js",
  "$root\migration\balances-wrong-after-conversion.11tydata.js"
)

$utf8 = New-Object System.Text.UTF8Encoding($false)
$changed = 0
foreach ($f in $files) {
  if (-not (Test-Path $f)) { Write-Host "MISSING: $f"; continue }
  $text = [System.IO.File]::ReadAllText($f, $utf8)
  $count = ([regex]::Matches($text, [regex]::Escape($old))).Count
  if ($count -eq 0) { Write-Host "NO-MATCH: $f"; continue }
  if ($count -gt 1) { Write-Host "MULTI($count): $f"; continue }
  $text = $text.Replace($old, $new)
  [System.IO.File]::WriteAllText($f, $text, $utf8)
  $changed++
  Write-Host "OK: $f"
}
Write-Host "---"
Write-Host "Files changed: $changed of $($files.Count)"
