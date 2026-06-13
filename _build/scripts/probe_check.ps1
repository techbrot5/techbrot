# Probe a given set of pages at one width, killing stray chrome between each
# launch (works around the headless=new leak that stalls css_probe_all). Use
# for targeted zero-drift spot-checks on CSS-touching rounds.
# Prereq: static server on 8090 serving _site.
# Usage: powershell -File _build/scripts/probe_check.ps1 -Pages "/","/trust/" -Width 1280
param(
  [string[]]$Pages = @("/"),
  [int]$Width = 1280
)
Set-Location (Join-Path $PSScriptRoot "..\..")
foreach ($p in $Pages) {
  $line = powershell -ExecutionPolicy Bypass -File "_build\scripts\css_probe.ps1" -Path $p -Width $Width
  if (-not $line) { $line = "STYLE-HASH:$p|$Width|PROBE-EMPTY|0" }
  Write-Output $line
  powershell -ExecutionPolicy Bypass -File "_build\scripts\kill_probe.ps1" | Out-Null
}
