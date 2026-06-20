# TechBrot — Rolling Session Log
_Standing rule (founder 2026-06-20): append a complete, stand-alone summary of EVERY turn here —
newest at the BOTTOM, with a turn header + timestamp. This is the single file the founder uploads to
the strategy chat, so each entry must be self-contained (what was done · decisions · flags · COUNT line).
Milestone `round-NN.md` reports continue in addition._

---

## Prior context (pre-log, condensed — full detail in round reports + BUILD-TRACKER resume anchor)
- **Phase:** GROWTH complete (586 live pages, noindex preview, never flipped) → **DESIGN RE-ARCHITECTURE** (pre-flip).
- **Design prep done:** SECTION-SIGNATURE-MAP (25 families) · 25 kitchen-sink reference pages under `/dev/` ·
  DESIGN-CONTRACT (FREE/FROZEN) · handed off to Claude Design project "TechBrot Design System Elevation".
- **v5 sync:** `techbrot-blueprint-v5.xlsx` = strategic truth; ARCHITECTURE-TRUTH + BUILD-TRACKER reconciled to it.
- **Turn 1 (design impl, read+plan):** connected to the design project; 23/23 templates readable (25 families);
  produced + got approval for the implementation plan (Phase 0 foundation → G1+D1 proof → family-by-family).

---

## Turn — 2026-06-20 · Pre-implementation repo cleanup (isolated commit)
**Goal:** clean the working tree before any src/ implementation — archive stale, hard-delete dead, keep active.
Founder-approved buckets + 3 flag answers + new standing rules (rolling session log; build-plan GO).

**Did:**
- Verified Flag 2: root `assets/` holds only `assets/people/david-westgate.jpg`, referenced live by
  `src/index.njk` `{% photo %}` (eleventy-img source) → **KEPT** (not archived).
- Ran `_build/scripts/cleanup_archive.sh` (scripted per no-inline-multistep rule; reversible):
  - **ARCHIVED → `/_archive/`** (git-tracked): ~73 historical `round-*.md` (kept `round-01-design-impl.md`);
    superseded `_build/reports` docs (FINAL-MIGRATION-REPORT, MIGRATION-PROTOCOL, RESKIN-HANDOFF, cloudflare-fix,
    **PAGE-TYPE-REGISTRY** [Flag 1]); root design docs (REDESIGN-BRIEF, PREMIUM-UPGRADE-PLAN); old design system
    (`_design/`, `_build/design-capture/`, `_build/archive/old-skin`); ~28 dead one-off scripts + `design_audit.py` [Flag 3].
  - **HARD-DELETED** (🔴 regenerable/dead): untracked `_build/reports/_*.txt` scratch · `_build/design-handoff/`
    (delivered, regenerable) · tracked design-transfer bins (`design-handoff-v2.bin`, `design-payload.bin`,
    `design-headers.txt`) · `_build/verify/` (gitignored artifacts) · `_build/tmp/` · `_build/serve.log`.
  - **KEPT** [Flag 3]: `extract_css.py`, `fetch_fonts*` (Phase-0 useful).
- Guardrail held: **nothing in `src/`, `baseline.json`, battery, capture data, or any old-live freeze-source
  removed/archived** — stays until after flip + redirect map.
- Started this rolling SESSION-LOG.md (standing rule).

**Decisions / flags:** Flag1 PAGE-TYPE-REGISTRY → ARCHIVE (Template Registry + SECTION-SIGNATURE-MAP own structure now).
Flag2 root assets/ → KEEP (live photo source). Flag3 → keep extract_css/fetch_fonts, archive design_audit.
Build plan APPROVED (form-handler scaffold yes; B4/B5 map-by-file; Phase-0 whole-look-on-noindex OK; commit-per-batch +
spot-check first page of each template). Next: Phase 0 (capture shared system) → G1+D1 proof → **PAUSE for founder spot-check**.

**COUNT:** cleanup commit (isolated) · src/ files changed = 0 · archived buckets = 6 · hard-deleted = 🔴 bucket only ·
working tree after = live `src/` + active `_build/` (baseline/battery/data/scripts/reports-current) + governing docs +
`/_archive/` + generated `_site*`. Next turn = Phase 0 foundation.
