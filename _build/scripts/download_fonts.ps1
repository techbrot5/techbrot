$ErrorActionPreference = 'Stop'
$dest = "C:\Users\MR KHAN\Documents\Github\TechBrot\src\assets\fonts"
$targets = @(
  @{ url = "https://cdn.jsdelivr.net/npm/@fontsource-variable/geist@latest/files/geist-latin-wght-normal.woff2"; out = "geist-var-latin.woff2" },
  @{ url = "https://cdn.jsdelivr.net/npm/@fontsource-variable/geist-mono@latest/files/geist-mono-latin-wght-normal.woff2"; out = "geist-mono-var-latin.woff2" }
)
foreach ($t in $targets) {
  $path = Join-Path $dest $t.out
  Invoke-WebRequest -Uri $t.url -OutFile $path -UseBasicParsing
  $sz = (Get-Item $path).Length
  Write-Output ("{0}  {1} bytes" -f $t.out, $sz)
}
