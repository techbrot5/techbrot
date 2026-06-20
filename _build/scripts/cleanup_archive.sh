#!/usr/bin/env bash
# One-time pre-implementation cleanup (founder-approved 2026-06-20).
# ARCHIVE 🟡 -> /_archive/ (git-tracked, reversible) · HARD-DELETE 🔴 safe bucket only.
# KEEP untouched: src/, baseline.json, battery, data, active scripts, governing docs,
# root assets/ (LIVE source image), techbrot-blueprint-v5.xlsx, current-phase design docs.
set -u
cd "$(dirname "$0")/../.." || exit 1
echo "== repo: $(pwd) =="

arch() {  # arch <src-path> <dest-dir>   (git mv if tracked, else plain mv)
  local src="$1" dest="$2"
  [ -e "$src" ] || { echo "  skip (absent): $src"; return; }
  mkdir -p "$dest"
  if git ls-files --error-unmatch "$src" >/dev/null 2>&1; then
    git mv -k "$src" "$dest"/ && echo "  git mv  $src -> $dest/"
  else
    mv "$src" "$dest"/ && echo "  mv      $src -> $dest/"
  fi
}

echo "== ARCHIVE: round logs -> _archive/reports/ =="
for f in _build/reports/round-*.md; do
  [ "$f" = "_build/reports/round-01-design-impl.md" ] && { echo "  KEEP (current): $f"; continue; }
  arch "$f" _archive/reports
done

echo "== ARCHIVE: superseded _build/reports docs =="
for f in FINAL-MIGRATION-REPORT MIGRATION-PROTOCOL RESKIN-HANDOFF cloudflare-fix PAGE-TYPE-REGISTRY; do
  arch "_build/reports/$f.md" _archive/reports
done

echo "== ARCHIVE: superseded root design docs =="
arch REDESIGN-BRIEF.md _archive/docs
arch PREMIUM-UPGRADE-PLAN.md _archive/docs

echo "== ARCHIVE: old design system + captures =="
arch _design _archive
arch _build/design-capture _archive
arch _build/archive/old-skin _archive
rmdir _build/archive 2>/dev/null && echo "  rmdir empty _build/archive" || true

echo "== ARCHIVE: dead one-off scripts -> _archive/scripts/ =="
DEAD=(fix-fl-commercial-rent.py fix-fl-commercial-rent-2.py fix-fl-commercial-rent-3.py fix-fl-miami-cre.py \
 scout_intents.py scout_round4.py scout_round4b.py scout_round5.py \
 ny_children_elevate.py ny_children_lighten.py ny_retier_bofu.py ny_triage_compact.py \
 port_extensions.py port_legal.py port_tier_samples.py \
 verify_round4.ps1 verify_round4_summary.py verify_round8.ps1 \
 shot_anchor.ps1 shot_drawer.ps1 shots_changeover.ps1 shots_debut.ps1 \
 reskin_forms.py wrap_link_arrows.py trim_session_css.py patch_probe_isolation.py diff_lucide.py splice_glossary.py)
for s in "${DEAD[@]}"; do arch "_build/scripts/$s" _archive/scripts; done
arch _build/design_audit.py _archive/scripts

echo "== HARD DELETE: 🔴 safe bucket (regenerable / dead) =="
for t in _battery-out _blueprint-dump _build-out _built-urls _gap_v4 _sheet7 _signature-clusters; do
  rm -f "_build/reports/$t.txt" && echo "  rm _build/reports/$t.txt"
done
rm -rf _build/design-handoff && echo "  rm -rf _build/design-handoff (untracked staging, regenerable)"
for b in design-handoff-v2.bin design-payload.bin design-headers.txt; do
  git rm -q --ignore-unmatch "_build/$b" >/dev/null 2>&1 && echo "  git rm _build/$b" || rm -f "_build/$b"
done
rm -rf _build/verify && echo "  rm -rf _build/verify (gitignored local artifacts)"
rm -rf _build/tmp && echo "  rm -rf _build/tmp (empty)"
rm -f _build/serve.log 2>/dev/null && echo "  rm _build/serve.log" || true

echo "== DONE =="
