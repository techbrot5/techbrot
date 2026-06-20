$ErrorActionPreference = 'Stop'

$resultsDir = "C:\Users\MR KHAN\.claude\projects\C--Users-MR-KHAN-Documents-Github-TechBrot\e3e1d485-b26e-427d-af39-e9b477c0e80b\tool-results"
$badgesDir  = "C:\Users\MR KHAN\Documents\Github\TechBrot\src\assets\img\brand\badges"

New-Item -ItemType Directory -Force -Path $badgesDir | Out-Null

# map: tool-result file -> output filename (without extension)
$map = @{
  "toolu_01BjLqxMAbPDRsxdGNDVM8Di.txt" = "badge-proadvisor-gold"
  "toolu_01PauqAr87GiFkfbn2je7GAp.txt" = "badge-qb-online-l1"
  "toolu_01G35MhoMsagxAZ26W927hxA.txt" = "badge-qb-online-l2"
  "toolu_01RV3cTHM5LMXjZN4rYntTJB.txt" = "badge-payroll"
  "toolu_01Y8ogSgh73F2PnXEmUp9VVX.txt" = "badge-bookkeeping"
}

foreach ($k in $map.Keys) {
  $src = Join-Path $resultsDir $k
  $name = $map[$k]
  $raw = Get-Content -Raw -Path $src
  $json = $raw | ConvertFrom-Json
  $truncated = $json.truncated
  if ($truncated -eq $true) {
    Write-Output "TRUNCATED: $name ($k)"
    continue
  }
  $content = $json.content
  $b64Path = Join-Path $badgesDir "$name.b64"
  Set-Content -Path $b64Path -Value $content -NoNewline -Encoding ascii
  Write-Output "OK: $name  truncated=$truncated  b64len=$($content.Length)"
}
