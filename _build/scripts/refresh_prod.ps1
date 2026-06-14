# Refresh _site-prod for local Lighthouse/overflow probing on :8125.
# Steps (per BUILD-TRACKER round-16 note): stop the :8125 server (it locks
# _site-prod -> EBUSY on clean), then `npm run build:prod` (NEVER build-prod.ps1 —
# its extract_css step clobbers hand-edited CSS). Caller restarts the server.
# Does NOT touch the :8080 dev server or any personal browser.
Set-Location (Join-Path $PSScriptRoot "..\..")

# 1. Stop whatever is listening on :8125 (the prod static server) + its npx serve.
$conns = Get-NetTCPConnection -LocalPort 8125 -State Listen -ErrorAction SilentlyContinue
foreach ($c in $conns) {
  try { Stop-Process -Id $c.OwningProcess -Force -ErrorAction Stop; Write-Output "stopped :8125 listener PID $($c.OwningProcess)" } catch {}
}
# npx serve helper processes pointed at _site-prod (not the :8080 eleventy server)
$serveProcs = Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
  Where-Object { $_.CommandLine -like '*serve*' -and $_.CommandLine -like '*_site-prod*' }
foreach ($p in $serveProcs) {
  try { Stop-Process -Id $p.ProcessId -Force -ErrorAction Stop; Write-Output "stopped serve PID $($p.ProcessId)" } catch {}
}
Start-Sleep -Seconds 2

# 2. Rebuild _site-prod (ENVIRONMENT=production; local-only artifact).
Write-Output "building _site-prod ..."
npm run build:prod 2>&1 | Select-Object -Last 4
Write-Output "refresh_prod done"
