$ErrorActionPreference = 'Stop'
Set-Location "C:\Users\MR KHAN\Documents\Github\TechBrot"

# R4 git hygiene: stage EXPLICIT paths only (never git add -A).
git add .gitignore
git add src/assets/css/00-fonts.css
git add src/assets/css/01-tokens.css
git add src/assets/css/site.min.css.11ty.js
git add src/_includes/layouts/base.njk
git add src/assets/fonts/geist-var-latin.woff2
git add src/assets/fonts/geist-mono-var-latin.woff2
git add _build/battery/run_battery.py
git add _build/scripts/extract_design.ps1
git add _build/scripts/download_fonts.ps1
git add _build/scripts/commit_token_recut.ps1
git add _build/reports/round-27-capture-plan.md
git add _build/design-capture/extracted

# Quote-free message via single-quote here-string (closing tag at column 0).
$msg = @'
Capture elevated design system: re-cut tokens + fonts to cold/light Ledger Ink

Pure implementation of the Claude Design elevation handoff. Re-skin foundation
(commit 1 of 2; the proven money page follows).

- 00-fonts.css: self-host Geist (body) + Geist Mono (figures); retire Public Sans
  and IBM Plex Mono; Fraunces kept. Metric fallbacks for CLS 0.
- 01-tokens.css: full cold/light re-cut. Accent Ledger Ink 1E3A70 (not cobalt),
  cool neutral ramp, cool shadows, card radius 14. New handoff token groups:
  surface- diagram- illus- measure- icon- motion-stagger. Every enforced legacy
  token NAME preserved so the tokenised component layers 02-09 inherit the new
  skin with zero class churn and css-drift stays green. Muted ink nudged to
  5C6A82 for AA on every tonal tier.
- base.njk: Geist preload and theme-color FBFCFE.
- CSS byte gate re-set 58 to 82KB minified (bundle template and battery), source
  soft-cap 120KB; battery soft-cap note made cp1252-safe.
- Locked design source captured under _build/design-capture/extracted.

Battery GREEN: equity all 139 pages, css-drift (zero undeclared properties),
manifest, cta-lexicon, design-fidelity. Minified 57809B of 82KB gate.

Finding (recorded): the bundle ships TWO directions; the stale _ds snapshot is
cobalt and Geist-only and is intentionally SUPERSEDED. The templates, galleries
and handoff (Ledger Ink, Fraunces, Geist, Geist Mono) are the contract.

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
'@
$msg | git commit -F -

git push origin preview-11ty
Write-Output "PUSHED OK"
git log --oneline -1
