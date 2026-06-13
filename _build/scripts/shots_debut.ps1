# DEBUT screenshots (step 9): every built page desktop (1280) + mobile
# (360), from the prod artifact on 8125. Design-render pairs (where one
# exists) come from the handoff project on 8091.
# Prereq: build-prod ran; serve _site-prod on 8125; serve handoff
# project on 8091.
Set-Location (Join-Path $PSScriptRoot "..\..")
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$shots = Join-Path (Get-Location) "_build\verify\shots\debut"
New-Item -ItemType Directory -Force $shots | Out-Null

# slug -> built path
$pages = @(
  @{ slug = "home";            path = "/" },
  @{ slug = "contact";         path = "/contact/" },
  @{ slug = "file-review";     path = "/quickbooks/file-review/" },
  @{ slug = "legal-disclaimer"; path = "/legal/disclaimer/" },
  @{ slug = "legal-dpa";       path = "/legal/dpa/" },
  @{ slug = "legal-privacy";   path = "/legal/privacy-policy/" },
  @{ slug = "legal-terms";     path = "/legal/terms/" },
  @{ slug = "trust";           path = "/trust/" },
  @{ slug = "partners";        path = "/partners/" },
  @{ slug = "notfound";        path = "/404.html" }
)
foreach ($p in $pages) {
  $url = "http://localhost:8125" + $p.path
  & $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,9500 --screenshot="$shots\$($p.slug)-desktop.png" $url | Out-Null
  & $chrome --headless --disable-gpu --hide-scrollbars --window-size=360,7000 --screenshot="$shots\$($p.slug)-m360.png" $url | Out-Null
  Write-Output ("shot: " + $p.slug)
}

# Design-render pairs (handoff)
$pairs = @(
  @{ slug = "DESIGN-contact";     url = "http://localhost:8091/handoff/pages/contact.html" },
  @{ slug = "DESIGN-file-review"; url = "http://localhost:8091/handoff/pages/file-review.html" },
  @{ slug = "DESIGN-404";         url = "http://localhost:8091/handoff/pages/404.html" }
)
foreach ($p in $pairs) {
  & $chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,9500 --screenshot="$shots\$($p.slug)-desktop.png" $p.url | Out-Null
  Write-Output ("design: " + $p.slug)
}
Get-ChildItem $shots | Measure-Object | ForEach-Object { "total shots: $($_.Count)" }
