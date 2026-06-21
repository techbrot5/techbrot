# Accurate component page-usage census: tokenize every class="..." attribute per page,
# count how many built pages actually USE each component class (no substring/content false hits).
$pages = Get-ChildItem "_site-probe" -Recurse -Filter "index.html" -File | Where-Object { $_.FullName -notmatch '\\dev\\' }
$targets = @(
  'hero-split','hero__eyebrow','section__eyebrow','kicker-mark',
  'vs-table','cmp','review-card','review-card__fact','review-card__link',
  'route','rcard','rcard__icon','rcard__sub','buyer-card',
  'stat-row','trust-row','statband','stat__v',
  'process-step','process-diagram','steps','step__n',
  'tldr','tldr-box','checks-list','link-wrap','link-standalone',
  'states','state','final-cta','cta-band__monogram','final-cta__reassure',
  'byline-block','byline','team-card','ai-summary','in-brief','qa-grid','proof-rating','diagram-figure'
)
$tally = @{}; foreach($t in $targets){ $tally[$t] = 0 }
$rx = [regex]'class="([^"]*)"'
foreach($p in $pages){
  $txt = [System.IO.File]::ReadAllText($p.FullName)
  $set = @{}
  foreach($m in $rx.Matches($txt)){
    foreach($tok in ($m.Groups[1].Value -split '\s+')){ if($tok){ $set[$tok] = 1 } }
  }
  foreach($t in $targets){ if($set.ContainsKey($t)){ $tally[$t]++ } }
}
"total pages: $($pages.Count)"
foreach($t in $targets){ "{0,-22} {1,4}" -f $t, $tally[$t] }
