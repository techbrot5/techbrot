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

---

## Turn — 2026-06-20 · Phase 0 foundation, Step 1–2 (fonts + tokens) · commit `c7fe356`
**Goal:** begin capturing the locked design's shared foundation (everything inherits it). This turn = the
irreducible base (fonts + tokens). Holds the fidelity bar (clean token rebuild, pixel-faithful to the
*rendered* design; freeze never bent — flag collisions) the founder set mid-build.

**Key finding:** `src/assets/css` was NOT old Bootstrap — it was a *prior, superseded* elevation (cold
"Ledger Ink #1E3A70" + Geist Mono, 2026-06-16). The locked system is **warm Petrol #0E4A50 + Spline Sans Mono**.
Phase 0 re-cuts this existing tokenized layer system to the new values (token names preserved → component
layers inherit; css-drift stays green).

**Did:**
- **Fonts (`00-fonts.css`):** self-hosted **Spline Sans Mono** (var 400–600, fetched from fontsource/jsDelivr →
  `spline-sans-mono-var-latin.woff2`); retired Geist Mono / Public Sans / IBM Plex Mono (5 woff2 `git rm`).
  Fraunces + Geist kept. Metric fallbacks updated.
- **Tokens (`01-tokens.css`):** re-cut every value to WARM/PETROL. **Split the two accent ROLES** (the old
  system had one): Petrol `#0E4A50` (brand/links/marks) vs **NEW `--cta` Burnt Clay `#BE5240`** (CTA fills only,
  never links) vs tie-out green `#157A52` (verification only). Warm surfaces, 74px header, two-step section
  rhythm (64 content / 96 flagship / 72 mobile), diagram/illus/surface/measure/icon groups all warm.
- Verified: clean build GREEN (exit 0); bundle carries petrol values, **zero stale cold hex** (`#1E3A70`/
  `Geist Mono`/`#FBFCFE` = 0); CSS 80,633B / gate 83,968B.

**Decisions / flags:**
- ⚠ **Font discrepancy flagged + resolved:** Handoff token table says `--font-mono = Geist Mono`, but
  HANDOFF-MANIFEST (governs) + all locked templates specify **Spline Sans Mono** → used Spline Sans Mono.
- Old `figure-*.svg` diagram partials + dev kitchen-sink pages still carry `Geist Mono`/cold hex → **rebuilt in
  Phase-0 Step 4 (diagrams)**; until then a few diagram numbers fall back to system mono (WIP, not shipped-blocking).

**Phase 0 remaining (next turns, before the proof):** Step 3 chrome (mega-nav + light footer + call-bar +
`tb-nav.js`) · component CTA-repoint to `--cta` + section layouts (02–09) to the locked look · Step 4 diagrams
(4 signature) + 24 icons · Step 5 import real Intuit badges · Step 6 reset gates. **THEN** G1 + D1 proof →
⛔ PAUSE for founder spot-check (no fan-out).

**COUNT:** Phase-0 progress = Step 1–2 of 6 done · commit `c7fe356` · src files changed = 8 (2 css recut, 1 font
add, 5 font rm) · build GREEN 611 pages · CSS 80,633B/83,968B · NOT a foundation-complete; continuing next turn.

---

## Turn — 2026-06-20 · Phase 0 foundation, Step 3 (chrome) · commit `96351d6`
**Goal:** re-skin the sitewide chrome (mega-nav · footer · call-bar · nav JS) to the locked Gallery-04 look.
Holds the fidelity bar (clean token rebuild; pixel-faithful to the *rendered* design; freeze untouched).

**Finding:** the existing chrome was already a full mid-mega + light-footer system, fully tokenized — so the
prior token re-cut already moved its palette to warm/petrol. Remaining work = the **structural design deltas**
only. `tb-nav.js` already implements the exact behavior contract (one-open · Esc · outside-close · focus-return ·
scroll-lock · drawer accordion) → KEPT as-is.

**Did:**
- **Two accent ROLES enforced** (the crux): `btn--primary` → **Burnt Clay `--cta`** (the one loud conversion fill —
  final-CTA / call-block / call-bar / drawer call); added **`btn--dark`** (restrained dark ink) for the **header CTA**
  (the design's header button is dark, not loud clay).
- **util-bar:** light → **dark strip** (green dot + "Independent ProAdvisor firm · U.S.-based" left; "Find an Accountant"
  + "For Accountants →" links right).
- **header backdrop** → warm `rgba(252,251,248,.9)` (was a hardcoded cold rgba the token swap couldn't reach).
- **nav uniform pills** (design premium sweep): one weight/color, sand-pill hover the only differentiator; removed the
  old per-link underline-rule.
- **mega panels:** **hub link where the phone was** (founder's pattern) → `/accounting/` · `/quickbooks/`; megalink
  left-border + translateX hover.
- **footer** surface → sand `--surface-subtle` (light editorial `<details>`, already structurally correct).
- Verified: build GREEN (exit 0); bundle carries `btn--primary{--cta}`, `btn--dark`, dark util links, hub-link footers;
  CSS 81,394B / gate 83,968B.

**Decisions / flags:**
- **For-Accountants link:** the design util points to `/for-accountants/` (doesn't exist) → routed to the real **`/partners/`**
  (the firm's accountant-partner program). Flag for founder confirm.
- **Real URLs kept** over the design's env shorthands (`/file-review/`, `/quickbooks/expert/`, `/accounting/sales-tax/`)
  — those would 404; used the real slugs (`/quickbooks/file-review/`, `…/speak-to-a-quickbooks-expert/`, `…/sales-tax-compliance/`).
- **Deferred chrome polish** (not blocking; next pass): SVG caret in triggers (currently a CSS-border caret that rotates) ·
  `.prose a` animated slide-underline craft detail (currently a static petrol underline) · header height 64 vs manifest's 74 (used the
  rendered Gallery's 64-ish via existing token). Will reconcile during the G1/D1 proof.

**Phase 0 remaining:** Step 4 diagrams (4 signature) + 24 icons · Step 5 real Intuit badges · Step 6 reset gates →
THEN G1 + D1 proof → ⛔ PAUSE for founder spot-check.

**COUNT:** Phase-0 = Step 1–3 of 6 done · commits `c7fe356` (fonts/tokens) + `96351d6` (chrome) · src files changed this
turn = 3 (03-conversion, 04-chrome, site-header) · build GREEN 611 pages · CSS 81,394B/83,968B · still not at the G1+D1 pause.

**Founder flag answers (chrome):** (1) `/partners/` for "For Accountants" — CONFIRMED keep. (2) Real-URLs-over-design-shorthands
— CONFIRMED standing practice (always use the real frozen slug, never the design's 404-ing placeholder). (3) Header 64-vs-74 —
defer to proof BUT do a side-by-side height comparison vs the design template at G1/D1 and match the *rendered* design; show founder.

---

## Turn — 2026-06-20 · Phase 0 foundation, Step 4 (diagrams + icons) · commit `65c1585`
**Did:**
- **4 signature diagram partials re-cut** (`figure-taccount` · `figure-reconcile-flow` · `figure-cleanup-beforeafter` ·
  `figure-judgment`): every hardcoded diagram color → `var(--diagram-*)` role token (petrol credit / green tie / warm
  rule+grid+node), `Geist Mono` → `Spline Sans Mono`, swap-friendly `data-viz` + `data-viz-state="FINAL"` on each root
  `<svg>` (inline partials → `var()` resolves in the live DOM). Clears the cold-hex/Geist-Mono debt from the tokens turn.
- **Icons:** the existing 8 (`phone·check·chevron-down·arrow-right·menu·minus·star·x`) are already the design style —
  Lucide-grade **stroke 1.75 + currentColor** — so they auto-inherit the palette. The full 24-icon set is added
  per-component as needed (lean; not pre-building unused icons).
- Verified: build GREEN; home renders `data-viz="taccount-tieout"` + `var(--diagram-credit)`; D1 renders its figure;
  zero `Geist Mono`/cold hex in built figures. Script `_build/scripts/recut_diagrams.py`.

**Flags / notes:** full 24-icon set deferred to per-component (flag if you want all 24 pre-built) · the D1 2nd viz
`cleanup-timeline` (FINAL in the design) is built when D1 is built (the proof) · "numbers mirrored in real text" honesty
gate is per-page (each page's caption/table mirrors its figure numbers) — enforced at family build.

**Phase 0 remaining:** Step 5 import real Intuit badges · Step 6 reset gates → THEN G1 + D1 proof → ⛔ PAUSE for spot-check.

**COUNT:** Phase-0 = Step 1–4 of 6 done · commits `c7fe356`+`96351d6`+`65c1585` · src changed this turn = 4 figure SVGs ·
build GREEN 611 pages · CSS unchanged (SVG only) · still not at the G1+D1 pause; badges + gates next, then proof.

---

## Turn — 2026-06-20 · Phase 0 Step 5–6 (badges + gates) + G1 proof; D1 assessed · commits `b7e0d80`·`2ff70bb`·`00bc913`
**Did:**
- **Badges (Step 5):** 2/5 real Intuit badges imported (`badge-proadvisor-gold` 600², `badge-payroll` 680²) via a subagent
  (isolated the base64 transfer). ⚠ 3 (QBO L1/L2, Bookkeeping) exceed DesignSync's 256 KiB get_file cap → FOUNDER re-export
  smaller or drop into `src/assets/img/brand/badges/`. Desktop/Enterprise stay placeholder.
- **Header height (founder flag 3):** rendered Design nav bar = 64px (Gallery 04 + Legal + D1 + minimal all render 64;
  the manifest's "74" was a number, not the render). Per "rendered wins" → set `--header-height: 64px` (`2ff70bb`).
- **Gates (Step 6):** `run_battery.py` is pure-Python static (no chrome) but VERY slow (6+ min on the 611-page link+equity
  diff). Won't run it repeatedly; will run ONCE at the D1 proof. Foundation changed NO page content → content gates
  (equity/faq/cta-lexicon/variety/fidelity) unaffected by construction; only the class-manifest needs regen for the new
  classes (btn--dark, util-bar__*) — done at the D1 proof.
- **G1 PROOF (legal) ✅ DELIVERED + VERIFIED:** the current legal page ALREADY had the Design's legal structure
  (`legal-doc__layout` 2-col sticky-TOC + numbered `<section>`s + eyebrow/h1/meta + a "short version" summary the Design
  lacks). The token re-cut applied the warm/petrol palette; I tightened the doc to the Design's exact widths (240 TOC +
  720 reading column, centered, 64 gap; `00bc913`). Verified on a clean build: 2-col TOC layout, 12 frozen numbered
  sections, frozen H1 + section headings unchanged, JSON-LD intact, no hero/CTA (correct), petrol links live.
  → reads as the Design's legal template; NOT old-Bootstrap recolored (the structure already matched).
- **D1 ASSESSED (not yet built):** current cleanup-bookkeeping HAS the Design's component vocabulary (proof-strip,
  deliver-card, buyer-card, process-diagram, vs-table, call-block, ai-summary, reconciliation viz) but is **NOT structural**:
  missing the dossier §-rhythm markers (`.idx`), the **intake-form** (Design has dual call-block+intake seam), the
  **cleanup-timeline** 2nd viz, and the Design's section-layout treatments. So D1 = a real structural rebuild (next turn) —
  the founder's "recolor not rebuild" concern is correct for D1.

**PAUSE:** G1 live for spot-check; D1 (the flagship structural rebuild) is the next focused turn, then both judged before any
fan-out. **COUNT:** Phase 0 = Steps 1–5 done + Step 6 deferred-to-proof + G1 proof done · D1 = next · commits this turn 3 ·
build GREEN 616 files · dev server up @ http://192.168.1.7:8080/.

---

## Turn — 2026-06-20 · D1 cleanup-bookkeeping STRUCTURAL REBUILD + battery to full GREEN + css-bytes gate raise · (proof, NOT committed → committed this turn)
**Context:** resumed via `claude -c` mid-stream with the D1 rebuild already in the working tree (uncommitted). Finished it,
fixed 2 battery-infra bugs, applied the founder's css-bytes gate ruling, drove the battery to full GREEN, committed.

**D1 — what the rebuild is (`/accounting/bookkeeping/cleanup-bookkeeping/`, t-bofu money page):** a real STRUCTURAL rebuild
(not a recolor — last turn's assessment that D1 needed rebuilding was correct). Body re-architected to the locked "QuickBooks
Cleanup — Money Page" template: editorial **§-rhythm index markers** (`.idx` §01–§12), the **section-layout engine**
(split / feature / asymmetric / zigzag / callout / stat-band), a **dark dossier ai-summary** (deep-petrol panel, new tokens),
the **cleanup-timeline** 2nd viz (week-by-week, illustrative numbers mirrored verbatim in caption text — honesty gate),
and the **DUAL conversion seam** (primary call-block §10 + minimal intake-form §11). FROZEN held: every heading text/level,
FAQ Q/A verbatim, speakable `#cleanup-bookkeeping-in-brief-text`, the JSON-LD graph. Content-equity GREEN: 42 baseline
headings · 12 FAQ · 31 schema types accounted for (justified removals only: 'The monthly brief.', 'QAPage' per exceptions).
New CSS = `09-extensions.css` +113 lines (token-only, css-drift GREEN), 4 new dossier tokens in `01-tokens.css`
(`--surface-dossier` deep petrol + on-panel text/border roles), new `figure-cleanup-timeline.svg`.

**2 BATTERY-INFRA FIXES (not page changes — both founder-confirmed correct, keep):**
1. **manifest gate path** — read `CLASS-MANIFEST.md` from `_design/…`, which the pre-impl cleanup ARCHIVED → repointed to its
   real `_archive/_design/…` location so the battery runs. The gate's real enforcement is the bundle-CSS class union (so all
   new D1 classes are accounted for regardless). ⚠ **STILL-OPEN founder-gated to-do:** REGENERATE the manifest from live CSS
   (stale 208 vs ~318 live classes) per RESKIN-HANDOFF prep — separate step.
2. **UTF-8 stdout** — battery crashed printing the `∪` glyph under Windows cp1252 → added `sys.stdout.reconfigure(utf-8)` so it
   runs clean on the founder's machine too.

**css-bytes GATE RAISE (founder ruling this turn):** raised to a **~100KB TRANSITION CEILING** in BOTH gates —
`_build/battery/run_battery.py` (`CSS_MIN_GATE = 100*1024`) and `src/assets/css/site.min.css.11ty.js` (`CSS_BUDGET_MIN =
100*1024`). Rationale: the re-architecture layers the richer new system on top of old components still serving 500+
un-converted pages, so the bundle grows mid-transition and nets back down as legacy CSS is deleted family-by-family. **NOT the
final budget.** Added a HARD flip-gate blocker (BUILD-TRACKER cutover gate item 7): "CSS must net back under target before flip"
— run `css_audit.py` trim pass + lower the gate before cutover. Did NOT trim D1's CSS (founder: won't judge a starved page).

**cta-lexicon FIX:** new submit label `'Request a scoped quote'` → reused the existing sanctioned `'Send the Discovery Brief'`
(the live baseline-equity contact-form-submit label) — no new founder ruling needed; the intake form IS a discovery form.

**VERIFICATION — BATTERY FULL GREEN (exit 0, 0 fails):** css-drift GREEN · css-bytes 92,142B / 102,400B gate (source 134,995B,
flagged over the 130KB soft-cap — informational, non-blocking visibility into transition bloat) · manifest GREEN · content-equity
GREEN incl. D1 · cta-lexicon GREEN (16 labels) · design-fidelity 574 pages · variety-12a ≤1 numbered system (D1's one numbered
system = the zigzag process; deliverables→feature-cells, pricing→stat-band both de-numbered) · faq-flat/verbatim GREEN.
Clean build = 616 files. Live axe/overflow on D1 still owed at the LIVE-probe flip-gate (env-blocked here).

**PROOF URLS (LAN dev server, founder judging on PC + phone):**
- D1: http://192.168.1.7:8080/accounting/bookkeeping/cleanup-bookkeeping/ (the structural money-page rebuild)
- G1: http://192.168.1.7:8080/legal/privacy-policy/ (legal-doc layout proof; sibling /legal/terms/)

**COUNT:** total pages live = 581 (unchanged — D1 is a re-architecture of an existing page, not a new URL) · re-skinned (142)
+ growth = 439 · pages added THIS turn = none (D1/G1 are restyle proofs of existing URLs) · Phase-0 = Steps 1–6 done + G1 + D1
proofs delivered · remaining before fan-out = founder spot-check of G1 + D1 vs the design templates · next = on founder GO, fan
out the design system family-by-family (D-family money pages next), each equity-safe + battery-GREEN.

**STOP / PAUSE:** D1 + G1 live for founder judgment on PC + phone. ⛔ Do NOT fan out until the founder signs off both proofs.
Working tree will be clean after this turn's commit; dev server left running for the founder's review.

---

## Turn — 2026-06-20 · DESIGN-HANDOFF COMPONENT-COVERAGE AUDIT (founder pivot: audit BEFORE any CSS rebuild) · NO src edits
**Directive change:** founder first asked to delete `src/assets/css` + rebuild from scratch against the handoff; then (mid-turn)
**superseded that** with: AUDIT whether the design handoff covers EVERY component the 586 live pages use, list gaps to take back to
Claude Design, and PAUSE for review — **no rebuild yet, no src edits.** Did exactly that. Located the authoritative design source
and ran the coverage audit. (Rebuild tasks deferred until gaps closed + foundation settled.)

**Design source located + read (authoritative):** the live Claude Design project **"TechBrot Design System Elevation"**
(`0fb63c85-c201-4bca-9941-d1bda1992d10`) via DesignSync (read scopes live), AND a local extract under
`_archive/design-capture/extracted/techbrot-design-system-elevation/project/` (~12 templates + Galleries 01–07). Read this turn:
`HANDOFF-MANIFEST.md` (governs), `Handoff - Claude Code.dc.html` (v1 impl doc), `readme.md`, `tokens/colors.css` + `fonts.css` +
`typography.css`, `SECTION-SIGNATURE-MAP.md` (the site's per-family component inventory), live `src/assets/css/*` class set.

**🛑 CRITICAL FINDING 1 — the design project contradicts ITSELF on the FOUNDATION (palette/type). Founder must settle with Design.**
Two conflicting directions live in the same project:
- **Cold-cobalt set:** `readme.md` + `tokens/colors.css` + `Foundations & Direction` + `Handoff - Claude Code` (v1) + Galleries —
  accent **cobalt `#2B4FD6`**, cold/light surfaces `#FBFCFE`, **Geist Mono**. readme calls it "the corrected direction (cold/light + Geist)."
- **Warm-petrol set:** **`HANDOFF-MANIFEST.md` (self-declared "single source of truth for Code") + the 23 LOCKED `.dc.html` templates** —
  accent **Petrol `#0E4A50`** + Burnt-Clay CTA `#BE5240`, warm surfaces `#FCFBF8`/`#F7F2E9`, **Spline Sans Mono**. Marked "all 25 LOCKED · Design frozen."
- The MANIFEST explicitly **demotes** the cobalt set to "REFERENCE library (v1) — not the final page design."
- By the project's OWN governance (MANIFEST + LOCKED templates win) → **WARM PETROL is final**, and the repo's current petrol tokens
  are CORRECT, not drift. (I initially mis-read colors.css as proof the petrol was drift; the MANIFEST reverses that.) **This must be
  resolved to ONE locked foundation before any CSS rebuild** — it's a prerequisite, not a component gap.

**🔍 FINDING 2 — COMPONENT COVERAGE AUDIT (the deliverable).** Method: site component union (live CSS classes + SECTION-SIGNATURE-MAP,
25 families) mapped by FUNCTION (Design owns its own class names — grepping site class names against design files returns nothing) to the
design's explicit catalog (readme §6 core/forms/ledger/content + ui_kit heroes + Handoff §2 inventory + Gallery 01–07 + the 25 LOCKED
per-family templates). **~40 components: most ✅ COVERED; gap list below.**
- ✅ COVERED (in catalog): 4 heroes, eyebrow, badge/tag, button, breadcrumb, nav/mega/drawer/footer/sticky call-bar, in-brief intro,
  ai-summary + QAPage quick-5, proof-strip, buyer-card, vs-table, checks-list, pull-quote, review-card, trust-row, byline-block/meta,
  disclosure, error-badge, fix-steps, call-block(CallBand), call-breakout(mid-body CTA), lead-magnet, final-CTA band, faq accordion,
  intake-form + form controls, contact/file-review form (F1), legal-doc (G1), guide-grid/toc/article (E1), diagram-feature, the signature
  diagrams (T-account, reconciliation, before/after, decision-tree/judgment), DataFigure, StateMap, the 10 section layouts, the D1 dossier
  §-rhythm, pricing tiers (F2).
- ❌ MISSING (Code would invent — flag): **cleanup-timeline (2nd money-page viz)** — Code added it THIS session; not in design; violates
  the manifest "one signature viz per family, never scatter multiple" rule (D1 viz = `reconciliation-beforeafter`). Design must sanction a
  2nd D1 viz or it gets dropped at rebuild.
- ⚠ PARTIAL / CONFIRM-WITH-DESIGN (likely covered but unverified, or honesty-sensitive): **team-card/operator-card** (catalog has ReviewCard,
  NO TeamCard; + the no-fake-team-photos honesty rule may mean it's intentionally absent — used on about/trust/home/B1) · **tldr/TL;DR block**
  (distinct vs folded into ai-summary/hero?) · **deliver-card / deliverables-scope grid** (D1; + legacy `.num` mapping) · **flow / path-to-fixed-fee
  step strip** (pricing/cfo) · **state-router** (B5 national-hub state selector — in Location National Hub template?) · **calc islands**
  (band-estimator/formula/selector/sales-tax-lookup + noscript/result/disclaimer states — Tool E5) · **404 / utility-empty / no-results /
  maintenance** (Gallery 07 reference exists but NO locked family template) · (minor) **related-grid**, **stat-row vs stat-band naming**,
  **migration signature diagram** (Handoff §2 names it; no family-viz assigned).
- **CONFIRM (founder Q4):** once the ❌/⚠ items are designed + re-handed-off — AND the Finding-1 foundation is locked to ONE palette/type
  set — **YES, I can build ALL CSS purely from the handoff with zero invented/ad-hoc CSS.** The foundation contradiction is the one true
  blocker; the component gaps are small and mostly "confirm the treatment," not "no treatment exists."
- **Audit confidence/caveat (honest):** ✅ marks = "the design CATALOG names this component" (readme §6 + manifest + Handoff §2), not
  line-verified in all 23 templates. The ⚠ list is deliberately inclusive so Design confirms/fills rather than me inventing later.

**No src edits this turn** (audit only). Tasks: design-source read ✓, site inventory ✓, coverage map ✓. **STOP / PAUSE for founder review of
the coverage map + gap list → founder closes gaps in Claude Design + settles the foundation palette → THEN the CSS rebuild from a complete set.**
**COUNT:** total live = 581 (unchanged) · pages added = none · src files changed = 0 · deliverable = coverage map + gap list (above).
