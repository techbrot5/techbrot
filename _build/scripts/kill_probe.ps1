# Cleanup: terminate any lingering probe/screenshot chrome instances and the
# css_probe child powershell processes (used between probe runs when stray
# headless chrome instances accumulate and contend on the static server).
# Usage: powershell -File _build/scripts/kill_probe.ps1
$probePs = Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" |
  Where-Object { $_.CommandLine -like '*css_probe*' -or $_.CommandLine -like '*edge_probe*' -or $_.CommandLine -like '*shot_anchor*' }
foreach ($p in $probePs) {
  try { Stop-Process -Id $p.ProcessId -Force -ErrorAction Stop } catch {}
}
try { Get-Process chrome -ErrorAction Stop | Stop-Process -Force -ErrorAction SilentlyContinue } catch {}
Start-Sleep -Seconds 2
$chrome = (Get-Process chrome -ErrorAction SilentlyContinue | Measure-Object).Count
$ps = (Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" | Where-Object { $_.CommandLine -like '*css_probe*' } | Measure-Object).Count
Write-Output "chrome=$chrome probe-powershell=$ps"
