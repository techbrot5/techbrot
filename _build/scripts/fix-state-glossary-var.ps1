# D3 bug fix: the page-local `glossary` array on the 5 state pillars collides with
# the global _data/glossary.js (46 generic terms), so the pillars rendered 46 empty
# definitions instead of their own 8 state-specific terms. Rename the page-local
# variable to `stateTerms` (data key + njk loop) to dodge the collision.
#
# Uses [System.IO.File] with UTF8-no-BOM so the · em-dashes / smart-quotes / box
# comments are preserved exactly (PS 5.1 Get/Set-Content mangles them). Idempotent.
Set-Location (Join-Path $PSScriptRoot "..\..")
$enc = New-Object System.Text.UTF8Encoding($false)   # UTF-8, no BOM
$states = "new-york","california","texas","florida","illinois"
foreach ($s in $states) {
  foreach ($pair in @(
    @("src/find-an-accountant/$s.11tydata.js", '  glossary: [',          '  stateTerms: ['),
    @("src/find-an-accountant/$s.njk",         '{%- for g in glossary %}', '{%- for g in stateTerms %}')
  )) {
    $path = (Resolve-Path $pair[0]).Path
    $text = [System.IO.File]::ReadAllText($path, $enc)
    $new  = $text.Replace($pair[1], $pair[2])
    if ($new -ne $text) {
      [System.IO.File]::WriteAllText($path, $new, $enc)
      Write-Host "fixed $($pair[0])"
    } else {
      Write-Host "no-op $($pair[0])"
    }
  }
}
