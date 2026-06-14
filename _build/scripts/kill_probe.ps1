# Cleanup: terminate ONLY the isolated headless probe Chrome and the probe child
# powershell processes. NEVER kills Chrome by image name.
#
# STANDING RULE (founder, round 21): the founder's personal Chrome is OFF-LIMITS,
# always. Every probe launches headless Chrome with a dedicated, isolated profile
# (--user-data-dir=C:\tb-probe-profile). Cleanup matches ONLY processes whose
# command line carries that marker and stops just those PIDs. We do not use
# Get-Process chrome / Stop-Process -Name chrome / taskkill /IM chrome.exe — those
# kill the founder's browser too. (Bug fixed round 21; the old image-name kill was
# closing the founder's tabs and, by sharing the default profile, also stalling
# the probes via the Chrome singleton lock.)
$MARKER = "tb-probe-profile"

# 1. probe child powershell processes (css_probe/edge_probe/shot_anchor runners)
$probePs = Get-CimInstance Win32_Process -Filter "Name='powershell.exe'" |
  Where-Object { $_.CommandLine -like '*css_probe*' -or $_.CommandLine -like '*edge_probe*' -or $_.CommandLine -like '*shot_anchor*' }
foreach ($p in $probePs) {
  try { Stop-Process -Id $p.ProcessId -Force -ErrorAction Stop } catch {}
}

# 2. ONLY the marked probe Chrome — matched on command line, never the image name.
$probeChrome = Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" |
  Where-Object { $_.CommandLine -like "*$MARKER*" }
$killed = 0
foreach ($c in $probeChrome) {
  try { Stop-Process -Id $c.ProcessId -Force -ErrorAction Stop; $killed++ } catch {}
}
Start-Sleep -Seconds 1

$probeLeft = (Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" |
  Where-Object { $_.CommandLine -like "*$MARKER*" } | Measure-Object).Count
$totalChrome = (Get-Process chrome -ErrorAction SilentlyContinue | Measure-Object).Count
$personal = $totalChrome - $probeLeft
Write-Output "probe-chrome-killed=$killed probe-chrome-remaining=$probeLeft personal-chrome-untouched=$personal"
