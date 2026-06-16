$ErrorActionPreference = 'Stop'
$bin = "C:\Users\MR KHAN\.claude\projects\C--Users-MR-KHAN-Documents-Github-TechBrot\eabc7e68-e597-4df8-81e7-c5ea435d21e5\tool-results\webfetch-1781624582602-c0v5sj.bin"
$dest = "C:\Users\MR KHAN\Documents\Github\TechBrot\_build\design-capture"
$work = Join-Path $dest "_incoming"
New-Item -ItemType Directory -Force -Path $work | Out-Null

# 1. gunzip the .bin -> raw (could be tar or single file)
$raw = Join-Path $work "payload.raw"
$in = [System.IO.File]::OpenRead($bin)
$gz = New-Object System.IO.Compression.GzipStream($in, [System.IO.Compression.CompressionMode]::Decompress)
$out = [System.IO.File]::Create($raw)
$gz.CopyTo($out)
$out.Close(); $gz.Close(); $in.Close()

# 2. sniff first bytes
$bytes = [System.IO.File]::ReadAllBytes($raw)
$head = ($bytes[0..7] | ForEach-Object { $_.ToString('x2') }) -join ' '
Write-Output "RAW size: $($bytes.Length)"
Write-Output "HEAD bytes: $head"
# tar files have 'ustar' at offset 257
$ustar = ''
if ($bytes.Length -gt 263) {
  $ustar = [System.Text.Encoding]::ASCII.GetString($bytes[257..261])
}
Write-Output "offset257: '$ustar'"
# zip = PK (50 4b)
$pk = "$($bytes[0].ToString('x2')) $($bytes[1].ToString('x2'))"
Write-Output "first2: $pk"
