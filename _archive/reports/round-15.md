# ROUND 15 — nav fixes + full responsiveness audit

═══════════════════════════════════════════════════════════════════════
## 📱 DEV SERVER LIVE — view on your phone: http://192.168.1.8:8080/
(eleventy --serve, 0.0.0.0:8080, live-reload — STILL RUNNING, not killed.)
═══════════════════════════════════════════════════════════════════════

Date: 2026-06-14. Scope: nav/chrome only (no pages/content). Design tokens
only + one tb-nav.js fix. All 6 fixes applied + verified; battery + axe green;
gate holds. Verified at TRUE 360/390 via iframe capture (not window-size).

## FIX 1 — phone icon + FULL number at all widths ✅
Reverted the round-13 number-hide. The phone link shows icon + the full
"(877) 751-5575" at 360/390/480/768/desktop. To fit narrow widths the number
TIGHTENS at ≤480 (design tokens only): `font-size:var(--fs-13)` +
`letter-spacing:var(--ls-tight)` on `.site-header__phone`, and the header gaps
compress (`.site-header .container` gap → `--space-3`, `.site-header__actions`
gap → `--space-2`). The orphaned `site-header__phone-num` class was removed
from the span (no longer needed). Verified true 360 (`shots/r15/hdr-360.png`):
logo + phone-icon + full number + hamburger all visible, no clip, no h-scroll.

## FIX 2 — header actions flush right ✅
`.site-header .container` gained `justify-content:space-between` → logo hard
left, `.site-header__actions` hard right (desktop's `nav margin-right:auto`
still works; mobile now pushes actions to the edge). Verified at 360 / 1280
(`hdr-360.png`, `hdr-home-1280.png`) + 768/390 + pricing/methodology/partners
360 — consistent (single global header partial).

## FIX 3 — drawer head logo/close alignment ✅
`.drawer__head` gained `width:100%` (already had `display:flex;
justify-content:space-between; align-items:center`). Captured open at 360
(`shots/r15/drawer-360.png`): logo hard-left, X hard-right, nothing centered.

## FIX 4 — nav dropdown + drawer mutual exclusion (tb-nav.js) ✅
Desktop dropdowns already closed others via `closeAllMenus(t)` (kept). Added
`closeOtherPanels(t)` to the drawer accordions so only one `drawer__panel` is
open at a time. Zero new CSS. **Functional test** (`nav_test.ps1`): after two
different desktop nav clicks → **1** dropdown open (`aria-expanded=true` count
1); after two drawer clicks → **1** panel open. axe ZERO violations.

## FIX 5 — quick-5 question headings +5px ✅
`.ai-summary__question` font-size `var(--fs-15)` (15px) → `var(--fs-20)` (20px,
+5px / +0.31rem — nearest scale token). Captured at 360 + 1280
(`shots/r15/quick5-360.png`, `quick5-1280.png`): larger serif question
headings, wrap cleanly in the narrow column at 360, gapped underscore intact,
no overflow.

## FIX 6 — FULL HORIZONTAL OVERFLOW AUDIT — ALL PASS ✅
Probe at true 360/390/768 on every built page (prod artifact). **Zero
horizontal scroll on every page at every width.** The prior benign 4px
off-screen-drawer phantom (sw 364 at 360) is now GONE on every page —
FIX 1/3's header + drawer changes resolved it.

| Page | 360 | 390 | 768 | result |
|---|---|---|---|---|
| / | 360 | 375 | 753 | PASS |
| /contact/ | 345 | 375 | 753 | PASS |
| /quickbooks/file-review/ | 360 | 375 | 753 | PASS |
| /pricing/ | 360 | 375 | 753 | PASS |
| /about/ | 360 | 375 | 753 | PASS |
| /about/methodology/ | 345 | 375 | 753 | PASS |
| /about/network/ | 345 | 375 | 753 | PASS |
| /trust/ | 345 | 375 | 753 | PASS |
| /partners/ | 360 | 375 | 753 | PASS |
| /legal/disclaimer/ | 345 | 375 | 753 | PASS |
| /legal/dpa/ | 345 | 375 | 753 | PASS |
| /legal/privacy-policy/ | 345 | 375 | 753 | PASS |
| /legal/terms/ | 345 | 375 | 753 | PASS |
| /404.html | 345 | 375 | 753 | PASS |

(sw = scrollWidth; all ≤ viewport at every width → no left/right movement.)

## VERIFICATION (all fixes combined)
- **Battery ALL GREEN** (css-drift token-only · faq-flat · cta-lexicon ·
  manifest · content-equity ×all · founder-zero).
- **axe ZERO violations** (home, about, pricing).
- **Gate holds:** minified 53,773 B / 59,392 B (round-14 was 53,611; +162 B
  from the ≤480 phone block, drawer width, and fs-20 — well under gate).
- **Zero-drift:** element counts STABLE (home 782, terms 378, partners 676 —
  unchanged → no structural regression). Hashes shifted only from the intended
  global changes: header `space-between` (every page) + quick-5 `fs-20` and the
  ≤480 phone rules (content pages). A legal page (no quick-5) changed only from
  the header — confirming the header is the sole global driver there.
- **Captures:** `shots/r15/` — hdr-360/390, hdr-home-768/1280,
  hdr-pricing/methodology/partners-360, quick5-360/1280, drawer-360.
- **Dev server still running** at http://192.168.1.8:8080/ (LAN). New scripts:
  `shot_drawer.ps1`, `nav_test.ps1`.

## FILES TOUCHED
- `src/assets/css/04-chrome.css` — header space-between (FIX 2), ≤480 phone +
  gap rules / reverted number-hide (FIX 1), drawer__head width:100% (FIX 3).
- `src/assets/css/03-conversion.css` — ai-summary__question fs-20 (FIX 5).
- `src/assets/js/tb-nav.js` — drawer panel mutual exclusion (FIX 4).
- `src/_includes/partials/site-header.njk` — removed orphan phone-num class.

## OPEN ITEMS / STOPPED AT
1. **Nothing blocking.** All 6 nav/responsiveness fixes are done + verified;
   battery + axe green; overflow clean on all 14 pages; gate holds.
2. **Dev server is LEFT RUNNING** at **http://192.168.1.8:8080/** for your
   phone check (live-reload on). Only headless probe chrome was killed
   (kill_probe.ps1) between probes — the dev server and its node process were
   never touched.
3. Carry-over (unchanged): Cloudflare preview push still pending your GitHub
   access (round-14); CSS source over the 70 KB soft-cap (flagged, non-block).
STOPPED. Check on phone; I'll wait for your word before further work.
