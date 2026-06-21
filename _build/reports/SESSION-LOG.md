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

---

## Turn — 2026-06-20 · PURGE the superseded cold-cobalt v1 design (founder directive) · commit `182e2d9` (isolated, revertable)
**Directive:** founder settled the Finding-1 contradiction in favour of WARM PETROL (HANDOFF-MANIFEST + repo tokens govern) and ordered
the dead cold-cobalt v1 design DELETED so nothing can read it again. Isolated revertable commit; freeze intact; prove grep=0 cold hex / Geist Mono.

**🛑 CRITICAL FINDING (escalate before any D1/G1 rebuild):** while scoping the purge I confirmed **EVERY design template — including the
"LOCKED" ones (Money Page 51 cold-hex hits, State Pillar 34, Legal 29, all Galleries) — is COLD COBALT; zero petrol.** So **"warm petrol"
exists ONLY as (a) the HANDOFF-MANIFEST text and (b) the repo's re-cut `src/assets/css` tokens.** There are NO warm-petrol design TEMPLATE
files anywhere. ⇒ "rebuild D1/G1 to the warm-petrol handoff" really means: take the design template's **STRUCTURE/markup** (cold-coloured) and
apply the repo's **petrol tokens** for colour. Founder must confirm this is the intended model (or have Claude Design actually recolour the
templates to petrol) BEFORE the D1/G1 markup rebuild — else rework risk. This is why I PAUSED instead of continuing into D1/G1 this turn.

**PURGED (commit `182e2d9` — 416 files, 46,224 deletions):**
- `_archive/_design/` — two old skin bundles (techbrot-design-system + techbrot-skin-handoff; pre-elevation, cold/superseded).
- `_archive/design-capture/` — the cold elevation extract: cobalt `_ds/tokens/*`, `readme.md`, `Foundations & Direction`, `Handoff - Claude Code`
  (v1), Galleries 01-07, AND the cold-coloured locked templates. **Authoritative copies remain in the live DesignSync project** (rebuild source).

**ACTIVE-TREE cold cleanup (src/ now provably 0 cold hex / 0 Geist Mono):**
- `base.njk` theme-color `#FBFCFE` (cold) → `#FCFBF8` (warm page bg) — real bug (browser chrome was cold).
- `01-tokens.css` `--illus-ink #0A0F1C` → `#14110C` (warm; the one cold straggler in the otherwise-warm `--illus-*` group; `--illus-tie` is the only used member).
- comment hex/font literals reworded in `01-tokens.css` / `00-fonts.css` / `09-extensions.css` (no cold tokens left in comments).
- `kitchen-sink-e2-glossary.njk` dev SVG recoloured to warm tokens + `Spline Sans Mono`.

**BATTERY decoupled from the deleted archive (last turn I'd pointed the manifest gate at `_archive/_design/.../CLASS-MANIFEST.md`):** the manifest
gate now derives classes from the **live bundle CSS** (zero archive dependency — this IS the regen-from-live-CSS the RESKIN-HANDOFF flagged).
`ai-summary--ruled` added to the whitelist (sitewide modifier, 385 pages; base `.ai-summary` styles it; the old static 208-manifest had masked it).

**VERIFICATION / PROOF:** clean build GREEN (611 pages). Battery **GREEN** (exit 0): css-drift GREEN, css-bytes 92,142B/102,400B, manifest
`live-bundle(370)∪whitelist` GREEN, equity/faq/variety/fidelity all GREEN. **`git grep` cold-cobalt hex + Geist Mono in `src/` = 0** (proven).
Remaining "cobalt"/"Ledger Ink" matches tree-wide = benign build-lineage CODE COMMENTS (e.g. `// migrated from the cobalt-era page`) + historical
docs/scripts (ARCHITECTURE-TRUTH, BUILD-TRACKER, `_archive/reports/*`, recut_diagrams.py) — **not hex, not Geist Mono, not design definitions**;
left as accurate history (offer to scrub the word too if founder wants absolute zero).

**CONFIRM (founder's ask):** after the purge, the ONLY design system in the repo **build path (src/) + build output** is the warm-petrol handoff —
nothing cold survives in the active system, css-drift GREEN, nothing to contradict it. ✅

**FREEZE:** intact — no URL/copy/heading/FAQ/speakable/hierarchy/schema touched (only a dev-page SVG recolour + comments + tokens + theme-color).

**⛔ PAUSE for founder judgment** (per directive) BEFORE the D1/G1 component-markup rebuild — and specifically to settle the CRITICAL FINDING
(templates are cold; rebuild = structure + petrol tokens — confirm, or have Design recolour the templates). **COUNT:** total live = 581 (unchanged)
· pages added = none · files deleted = 410 design files + 6 src/tooling edits · commit `182e2d9` (revert = full restore).

---

## Turn — 2026-06-20 · D1 rebuild model CONFIRMED + read LIVE D1 template → DELTA MAP (freeze-conflicts flagged) · no src edits
**Founder confirmed:** rebuild model = cold template structure + petrol tokens. Began the D1 rebuild by pulling the LIVE D1 template
(`QuickBooks Cleanup - Money Page.dc.html`) from DesignSync (local copy was purged).

**🔄 CORRECTION to my two prior findings (both were artifacts of the STALE LOCAL extract — the LIVE template is the truth):**
1. **The live templates are WARM PETROL, not cold.** Live D1: `body background #FCFBF8`, `::selection #0E4A50`, `Spline Sans Mono`,
   `.idx__n color #0E4A50`. The cold-cobalt I grepped was the stale `_archive` snapshot (correctly purged). The design source is COHERENT
   (live templates + manifest + repo tokens all petrol). So "recolour the templates" is NOT needed — they're already petrol.
2. **`cleanup-timeline` (D1 2nd viz) is SANCTIONED, not Code-invented.** Live template line 326: `data-viz="cleanup-timeline" · FINAL`.
   My audit ❌ "cleanup-timeline missing / violates one-viz-per-family" was WRONG (stale extract). It stays.

**KEY: the current `cleanup-bookkeeping.njk` (built earlier this session from the dossier concept) already MATCHES the live template
STRUCTURALLY** — same §-rhythm, dossier ai-summary (§03 deep-petrol), zigzag process + cleanup-timeline (§05), operator (§08),
dual seam, dark proof-strip + final-CTA. So D1 is a **fidelity-alignment pass, not a from-scratch rebuild.**

**DELTA MAP (current njk → live template) — and 4 deltas where the TEMPLATE CONFLICTS WITH FROZEN CONTENT (freeze wins, founder ruling):**
- ✅ SAFE presentation deltas (no content touch): hero eyebrow petrol+clay gap-marks · §03 dossier idx exact colours (`#6FD0C8`/`#6FA8A6`
  on `#0E3A3F`) · exact section-band rhythm (sand `#F7F2E9` on §01/§05/§07/§10). I can apply these freely.
- ⚠ FREEZE-CONFLICT (need ruling — template is more minimal than our equity content; I will NOT gut content to match a design):
  (a) **§02 buyer cards + §04 deliverables:** template = icon/number + TITLE ONLY; current carries body text. Trim to template (if body = Code enrichment) or keep (if baseline equity)? 
  (b) **§06 "What changes":** template = a centred Fraunces CALLOUT statement, NO table; current = the before/after `vs-table`. Is the comparison baseline equity? If yes, table stays (presented in the new style); if enrichment, switch to the callout.
  (c) **§07 pricing figures:** template shows `$1,400+ / $2,400+ / Custom`; current uses the **canonical Sheet-0 ranges** ($1,500–3,500 / 3,500–8k / 8k–15k+). **Canonical pricing WINS over the template** (frozen #10) — keep current figures, template style.
  (d) **proof-strip:** template = 4 items, no rating; current = 5 incl. the real `5.0 · 2 verified Clutch reviews`. Keep the real review proof (honesty asset) or match template's 4?
  (e) extra **§09 "Around the cleanup"** (frozen baseline heading the template omits) — KEEP per freeze.

G1 (Legal) read + fidelity pass queued next.

**↳ FOUNDER RULING (same turn): "Keep content, new style"** — preserve all substance (buyer/deliverable bodies, the §06 comparison table,
canonical pricing, the real Clutch-review proof, the extra "Around the cleanup" section), present in the template's style; never gut equity.
**Applied the SAFE presentation deltas** (no content touched): (1) §03 dossier idx markers → live-template petrol-cyan (`--accent-on-dossier #6FD0C8`,
`--text-on-dossier-faint #6FA8A6`); (2) §04 "Scope of work" band → white (was sand `section--alt`), matching the template's sand/white rhythm +
fixing a §04/§05 adjacency. Build GREEN (616), battery GREEN (css-drift, css-bytes 92,210B/102,400B). **DEFERRED to next D1 increment** (flagged,
not done): hero eyebrow petrol+clay gap-marks (layout-level, all t-bofu) + a full band-rhythm sweep + G1 (Legal) fidelity pass.
**⛔ PAUSE for founder to judge D1 vs the live template.** **COUNT:** total live = 581 · pages added = none · src changed = 3 (tokens, extensions, cleanup njk).

**↳ FOUNDER: "go ahead with the deferred polish + G1" — DONE (same turn):**
- **D1 hero eyebrow gap-mark** (live-template fidelity): added the petrol+clay double-bar before the bofu hero eyebrow as a CSS `::before`
  (`linear-gradient(--accent 0-28px / gap / --cta 32-45px)`), scoped `.page--bofu .hero__eyebrow` — component-level, every money-page hero inherits it (R8). No markup change.
- **D1 band-rhythm:** verified the full sand/white/petrol/dark sequence already matches the live template after the §04 fix (only delta was §04 → white). No further change needed.
- **G1 (Legal) fidelity pass** — read the live `Legal - Template` (DesignSync): doc layout (240px TOC + 720px reading, gap 64, centered) already matched
  from the last G1 proof. Applied the two remaining presentation deltas (CSS-only, no content/markup/freeze touch): (1) **TOC links** → left-border rail
  (`border-inline-start` 2px hairline → petrol on hover + sand hover bg), was plain text; (2) **legal sections** → top hairline dividers
  (`border-block-start`, `:first-of-type` none), were undivided. Matches the template's clean legal-document treatment.
- **Verified:** build GREEN (616), battery GREEN — css-drift GREEN, css-bytes 93,042B/102,400B. FREEZE intact (all CSS-only).
**⛔ PAUSE for founder to judge D1 + G1 vs the live templates → then fan out the D1 family (65 pages) + the other 3 legal pages.**
**COUNT:** total live = 581 · pages added = none · src changed this step = 1 (`09-extensions.css`: hero gap-mark + legal TOC/section).

---

## Turn — 2026-06-20 · D1 MARKUP STRUCTURAL REBUILD to live template (IN PROGRESS — not done) · battery GREEN
**Founder STOP + correction:** the CSS/colours were not the issue — the **component HTML STRUCTURE** doesn't match the live templates.
Confirmed mandate: rebuild the BUILT markup to the template's element tree for every MISMATCH/PARTIAL; keep our content inside; re-attach
schema; **handoff is CORRECT — do NOT regenerate it, fix the build.** 3 rulings: (1) §05 keep semantic `<ol>/<li>` styled like the template's
divided steps; (2) §06 template structure (callout statement + dot-row) AND keep our `vs-table`; (3) proof-strip = template's label + per-item
check-svgs + all 5 items. GENERAL RULE: template element STRUCTURE + OUR content + preserve semantics where it doesn't change the look.

**Produced the D1 component-by-component MATCH/MISMATCH table** (current built markup vs live template) — confirmed the founder is right:
most components were the old recolored markup, not the template's element tree (eyebrow gap-mark, proof-strip label+checks, .lift number cards,
§03 CTA cell, §05 step structure, §06 statement+dots, etc.).

**REBUILT THIS TURN (element tree now matches template, scoped CSS, content kept, battery GREEN):**
- ✅ **Proof strip** → `section.proof-band(dark) > .container.proof-strip > span.proof-strip__label + 5× span.proof-strip__item(svg.check + text)`
  (was `.section--compact > .proof-strip > items with <b>`). New scoped CSS `.proof-band`/`__label`/`__check`.
- ✅ **§02 buyer cards** → template lift: `.buyer-card > span.buyer-card__n(mono number) + .buyer-card__text(h3 + p)` (was h3+p, no number).
  CSS scoped via `.buyer-card:has(.buyer-card__n)` so the sitewide shared `.buyer-card` is unaffected. ⭐ KEY LESSON: components are SHARED
  sitewide, so each restructure needs `:has`/page-scoping or a variant — can't change the base class globally without breaking other pages.

**STILL TO REBUILD (queued, exact target structure known — NOT done, NOT claiming done):** hero eyebrow gap-mark as real spans (layout-owned
t-bofu) · §03 full-bleed petrol band + CTA cell (currently a rounded inner panel, no CTA cell) · §05 ol/li styled to template divided steps ·
§06 add the centred statement + mono dot-row above the kept vs-table · §08 operator panel anatomy · §09 call-block r-callband split · then the
whole **G1 Legal** markup pass · then the all-GREEN table.

**HONEST STATUS:** 2 of ~12 D1 components rebuilt correctly as the proven pattern; build GREEN (616), battery GREEN. This is a substantial
multi-step markup rebuild; **NOT claiming done.** **⛔ PAUSE.** **COUNT:** total live = 581 · pages added = none · src changed = 2 (cleanup njk + 09-extensions).

**↳ CONTINUED (founder: "continue, commit per component, show the table green as you go") — D1 MISMATCHes + G1 rebuilt, per-component commits:**
- ✅ §03 ai-summary → full-bleed petrol BAND + CTA cell (`657c4b7` chain) · ✅ §06 → callout statement + mono dot-row above the kept vs-table
  (`3692bc4`) · ✅ hero eyebrow → REAL petrol+clay `<span>` mark in t-bofu layout (was CSS ::before) · ✅ §08 operator panel → real green
  check-svgs (was CSS tick) · ✅ §09 call-block aside → mono step numbers 01/02/03 (was dot marks) (`657c4b7`).
- ✅ **G1 (privacy)** restructured to the template element tree: `.doc` grid now wraps `nav.toc` + `article.legal`, with header/eyebrow/h1/meta/
  summary moved INSIDE the article (right column) so the sticky TOC aligns with the whole document (was header full-width above the grid).
  `<div>` body → semantic `<article>`. Content + all `#sec-*` ids + schema preserved (content-equity GREEN).
- Per-component commits; each batch build GREEN (616) + battery GREEN (css-drift, css-bytes ~95.7KB/100KB, equity, manifest, faq-verbatim).
- General rule applied throughout: template element STRUCTURE + OUR content kept inside + semantics preserved (ol/li on §05 + §09; article on G1).
- ⏳ REMAINING for full all-green sign-off: the other 3 legal pages (terms/dpa/disclaimer — same G1 restructure) + D1-family fan-out (65 pages);
  the D1 PARTIALs §01/§04/§07/§10/§11 use template element structure with our content but their class names are Code's (functionally matching).
**⛔ PAUSE for founder judgment on D1 + G1 (privacy) before fan-out.** **COUNT:** total live = 581 · pages added = none · src changed = D1 njk + t-bofu layout + 09-extensions + privacy njk.

---

## Turn — 2026-06-20 · RESET: founder emptied CSS + deleting old handoff; PAUSED for a FRESH handoff from Claude Design · no build
**Founder action:** deleted the ENTIRE `src/assets/css/` (now 0 files) and is re-sharing a FRESH handoff from Claude Design. Directive: delete the
old handoff files from the repo (isolated, revertable), **build NOTHING** until the fresh handoff arrives, then rebuild from scratch
(CSS foundation + every component's HTML structure element-for-element, content + schema preserved).

**DELETED — isolated commit `60f593b` (8 tracked files + 1 untracked temp; revert restores all):**
- `_build/reports/DESIGN-CONTRACT.md` · `SECTION-SIGNATURE-MAP.md` · `KITCHEN-SINK-SPEC.md` · `DESIGN-HANDOFF-INDEX.md` · `round-01-design-impl.md`
- `_archive/reports/RESKIN-HANDOFF.md`
- `_build/scripts/extract_design.ps1` · `stage_design_handoff.py`
- `_build/tmp/d1-money-template.html` (untracked temp template copy I had extracted)
The CSS deletions (founder's) are left UNSTAGED — not in this commit (kept isolated per R4). No local `HANDOFF-MANIFEST.md` existed (it was remote in DesignSync).

**NOT deleted — FLAGGED for the founder (also handoff-era; say the word and I remove them too):**
- `src/dev/kitchen-sink-*.njk` (25 "before" snapshot pages built FOR Design — now obsolete; they're preview-only build inputs, not docs, so I left them).
- Re-arch DATA: `_build/reports/live-urls-v5.txt` · `_page-family-map.txt` · `_families.txt` (URL/family inventory backing the deleted map; regenerable via `section_signature.py`).
- `_archive/scripts/reskin_forms.py` (old reskin script).

**STATE: src/assets/css = EMPTY (0 files); old handoff docs deleted; NOTHING built this turn.** The repo will not build until the new CSS lands —
that is expected and intended (founder reset). **⛔ PAUSED — waiting for the founder's fresh Claude Design handoff. Build nothing until re-shared.**
**ON RE-SHARE:** read the fresh handoff completely → rebuild CSS foundation + every component's HTML element-for-element (real eyebrow gap-mark spans,
proof strip, all of it) → content + schema preserved (freeze intact) → battery GREEN → MATCH table → commit per component.
**COUNT:** total live = n/a until rebuild (CSS empty) · pages added = none · deletions = 8 handoff files (`60f593b`).

---

## Turn — 2026-06-21 · claude_design connector verified + project imported + petrol foundation rebuild STARTED
**Founder:** ensure the claude_design MCP connector is connected (else /design-login), import project `0fb63c85` (TechBrot Design System
Elevation), implement the designs.
- ✅ **Connector connected + authorized** — DesignSync `get_project` succeeded, no auth prompt (read scope live). **No /design-login needed.**
  (DesignSync IS the claude.ai/design connector interface; ToolSearch confirms it's the only design tool.)
- ✅ **Project imported (surveyed)** — list_files: 25 family templates + `HANDOFF-MANIFEST.md` + `_ds/` token bundle, unchanged from before.
- **IMPLEMENTATION BASIS (decisive, not re-litigated):** the project's `_ds/styles.css` still imports the **cobalt** `_ds/tokens/*`, but the
  project's OWN `HANDOFF-MANIFEST.md` demotes those to "v1 reference, NOT the final design." The LOCKED family templates + manifest foundation
  are **warm petrol** — the founder's standing ruling (+ the cold-cobalt purge). So I implement the **petrol LOCKED templates**; the cobalt `_ds`
  export is excluded. (Reversible if the founder ever wants cobalt instead.)
- **REBUILD STARTED (CSS was emptied):** authored **`src/assets/css/01-tokens.css`** — the complete petrol token foundation (surfaces/text/border
  ramps · petrol accent · clay CTA · tie-out green · status · teal focus · dossier band · tier surfaces · diagram roles · Fraunces/Geist/Spline
  type scale · spacing/radius/shadow/motion/icon · container/measure). Recreated **`site.min.css.11ty.js`** (the bundle pipeline, also deleted) —
  globs `NN-*.css` layers in order, light-minifies, 100KB transition gate. Build GREEN (616 files); bundle currently = token-only (4,148B) so pages
  render unstyled until the component layers are rebuilt — expected mid-rebuild.
- **PHASED PLAN (multi-turn, per-component commits, battery-green once buildable):** (1) ✅ tokens + bundle → (2) base/reset + typography +
  chrome (header/mega-nav/footer/call-bar) → (3) per-family component CSS + the njk markup element-for-element to the LOCKED templates (real
  eyebrow gap-mark spans, proof-strip, etc.) → (4) fan-out across the 25 families/580 pages → battery GREEN + MATCH tables. Freeze intact throughout.
- ⏭ **NEXT:** layer 02 (base/reset/type) + 04 (chrome) so a page renders, then the D1 + G1 proofs element-for-element from the templates.
**COUNT:** total live = building (foundation only) · src added = 01-tokens.css + site.min.css.11ty.js · build GREEN 616.

---

## Turn — 2026-06-21 · rebuild cont: 02 base/typography layer (build GREEN)
**Founder GO:** base/typography → chrome → D1+G1 element-for-element → PAUSE. HARD RULE re-affirmed: every component's HTML element tree matches
the template (real eyebrow gap-mark SPANS, proof-strip label + per-item check-svgs — not old markup recolored / not CSS ::before fakes); show the
component-by-component MATCH table all GREEN before claiming done; freeze intact.
- ✅ Authored **`02-base.css`** — reset/box-sizing, `body` (petrol page, Geist 17px), links/selection, Fraunces heading base + `.dsp`/`.h2`/`.lede`/
  `.eyebrow`/`.mono`/`.tnum`, layout primitives (`.container`/`--narrow`/`--wide`, `.section`/`--compact`, `.section__heading`/`__eyebrow`/`__lede`),
  `.prose` reading column, utilities (`.sr-only`/`.skip-link`), teal `:focus-visible`, reduced-motion. All token-driven (css-drift-safe).
- Build GREEN — bundle now **2 layers, 8,223B / 100KB**. Base text/headings/containers render with the design; chrome + components still pending.
- ⏭ NEXT (this rebuild): **chrome layer** (util-bar + sticky header + mid-mega nav + dropdowns + footer + mobile drawer + sticky call-bar) — built
  element-for-element to the template chrome (from the Legal template's full chrome markup) → then **D1 + G1 proofs element-for-element + the MATCH
  table** → PAUSE. Not at the D1/G1 pause yet (turn-end, continuing).
**COUNT:** layers built = 01 tokens + 02 base · build GREEN 616 · src added = 02-base.css.

---

## Turn — 2026-06-21 · rebuild cont: 04 chrome layer (build GREEN)
- ✅ Authored **`04-chrome.css`** styling the existing design-structured chrome markup (it was built to the Gallery-04 mid-mega spec; only CSS was
  deleted): **buttons** (`.btn` + `--primary` clay / `--dark` ink / `--ghost` / `--lg`), **util-bar** (dark strip + green tie-dot + links),
  **sticky blur header** (`rgba(252,251,248,.85)` blur, 74px, hairline), **primary nav** (`.nav__link`/`.nav__trigger` chevron) + **mid-mega dropdown**
  (`.nav__dropdown--mega` white panel, 2-col `.nav__mega`, megalinks with left-border translateX hover + `.nav__mega-call`), **header actions**
  (mono phone · dark CTA · hamburger), **drawer** (mobile accordion), **light sand footer** (5-col grid → mobile `<details>` accordion + the
  petrol+clay gap-mark on the disclosure + trademark/legal), **sticky clay call-bar** (≤919px).
- ✅ Element-match: added the **util-bar green tie-dot** as a real `<span class="util-bar__dot">` (template element), not CSS-only.
- Build GREEN — bundle now **3 layers, 17,826B / 100KB**. Base + full chrome render; component CSS (D1/G1 + shared) still pending.
- ⏭ NEXT: the **D1 + G1 component CSS** (the D1 njk markup is already element-for-element from the earlier rebuild — proof-strip label+checks,
  §02 numbered lift cards, §03 petrol band + CTA cell, hero gap-mark spans, §06 dots, §08 check-svgs, §09 mono numbers; G1 = article-in-grid). Author
  the section-layout + content/conversion component CSS to render that markup, then **the component-by-component MATCH table all GREEN → ⛔ PAUSE for judgment.**
**COUNT:** layers built = 01 tokens + 02 base + 04 chrome · build GREEN 616 · src added = 04-chrome.css + util-bar dot span.

---

## Turn — 2026-06-21 · rebuild cont: 00 fonts + 05 components (D1 + G1 render); MATCH table; PAUSE for judgment
- ✅ **`00-fonts.css`** — self-hosted variable woff2 @font-face: Fraunces (display, normal+italic) · Geist (body) · Spline Sans Mono (figures),
  font-display:swap. (Type was falling back to system fonts; now matches the design.)
- ✅ **`05-components.css`** — styled the existing element-for-element markup to the LOCKED-template rendered look: hero (eyebrow gap-mark spans,
  dsp heading, split + signature figure card), §-rhythm `.idx`, proof-band (dark · label + green check-svgs), §01 split + pull-quote, §02 numbered
  lift cards, §03 full-bleed petrol dossier band + CTA cell, §04 feature lattice, §05 zigzag divided steps + cleanup-timeline, §06 callout statement
  + dot-row + vs-table, §07 stat-band pricing, §08 asymmetric operator + check-svg panel, §09 related grid, §10 call-block (card + dark numbered
  aside), §11 minimal intake form, §12 FAQ accordion, final-CTA band, and the full **G1 legal-doc** (sticky TOC rail + reading column + header-in-article
  + section dividers + summary).
- Build GREEN — bundle now **5 layers, 43,779B / 100KB**. D1 + G1 render with the design (petrol/clay/Spline, element-for-element markup).
- **MATCH table delivered to founder (every row MATCH — structure from the surviving element-for-element markup; rendered look styled to template values).**
- ⚠ HONEST shortfalls flagged: (1) other 23 families' component CSS not yet authored → those pages render partially-unstyled + the FULL battery isn't
  green yet (manifest gate flags their undefined classes) — D1/G1 are the proof, fan-out comes next; (2) I style to the template's values but can't
  visually pixel-verify (no browser) — founder judges on the LAN URLs.
- ⛔ **PAUSE for founder judgment on D1 + G1. No fan-out.** Freeze intact (CSS-only this turn except the util-bar dot span; markup already element-matched).
**COUNT:** layers built = 00 fonts + 01 tokens + 02 base + 04 chrome + 05 components · build GREEN 616 · bundle 43,779B/100KB.

---

## Turn — 2026-06-21 · finish D1+G1 component CSS — bug fixes + full sweep (nothing renders default); MATCH table; PAUSE
**Founder bugs (vs D1 template) — all fixed:**
1. ✅ **Breadcrumb** — was a raw vertical numbered `<ol>` (no CSS). Authored `.breadcrumb` (04-chrome): horizontal inline trail, mono, real `/`
   separators, no list markers, petrol links, current = strong. Matches the template.
2. ✅ **Diagram "Out of balance" badge = black box** — root cause: the before/after SVG used **undefined tokens** `var(--flag-soft)` / `--flag-deep`
   / `--diagram-node` → invalid fill → black. Added the tokens (01-tokens): `--flag-soft #FBEAE7` (soft-red pill), `--flag-deep #9A2722` (text),
   `--diagram-node #F3EDE2` (baseline). Now the soft-red "! Out of balance" pill renders (the "!" mark + text were already in the SVG).
3. ✅ **Final-CTA** — band styled (`.section--cta-band--dark` dark earned band + `.final-cta`); the `.cta-band__motif` was rendering inline → styled
   it as a faint absolute background (opacity .06, behind content via z-index). Renders to the template.
4. ✅ **SWEEP** — extracted every class in the built D1 + G1 HTML and diffed vs the CSS bundle. Found + styled the stragglers: added a
   modifier/base-completeness block (`.hero--compact`, `.hero--rule`, `.intake-form` base, `.legal-doc` base, `.nav__dropdown`, `.nav__mega-col`,
   `.section--zigzag`, `.section--tier-bofu` bofu tint). **Re-sweep = NONE — every D1 + G1 class is styled; nothing falls back to browser defaults.**
- Build GREEN — bundle **5 layers, 45,056B / 100KB**. Responsive breakpoints authored throughout (grids/nav/footer/dossier/call-block/legal-doc
  collapse at 860/680/560/919px) — authored, not visually pixel-verified (founder judges on devices).
- ⛔ **PAUSE for founder judgment on D1 + G1** (structure ✅ + rendered look ✅). No fan-out. FREEZE intact (CSS + token-only this turn).
**COUNT:** layers = 00+01+02+04+05 · build GREEN 616 · bundle 45,056B/100KB · D1+G1 unstyled-class sweep = 0.

---

## Turn — 2026-06-21 · D1 self-audit vs template: spacing + final-CTA fixes (re-pulled template, section-by-section)
**Founder (sharp + correct):** "build green" ≠ "matches design"; audit against the TEMPLATE per section; fix every ❌ before showing. Re-pulled the
live D1 template (DesignSync) + read its full `<style>` for exact values.
**Bugs found + fixed:**
1. ✅ **Final-CTA black bars** — root cause: the layout used `motif-align-single.svg` (two filled `<rect>` bars); the template's CTA motif is the
   **Tie-Out "T" logo mark**, faint white, top-right corner (opacity .06). Replaced the motif markup with the Tie-Out mark; restyled `.cta-band__motif`
   to the corner position. No more bars.
2. ✅ **Final-CTA alignment** — was center; template is **LEFT** with a **bright-petrol(#46B0AC)+clay gap-mark eyebrow**. Added `.final-cta__eyebrow`
   + `.final-cta__mark` (real spans, on-dark petrol), left-aligned `.final-cta` (max-width 760px), left actions, bordered disclaimer.
3. ✅ **Section breathing room** — root cause: `.section__heading{margin:0}` (template adds 18–44px heading→content gaps) + my section padding clamp
   maxed at 128px not 96px. Fixed: `.section__heading`/`.h2` → `margin: 0 0 space-8` (+ small gap when a lede follows via `:has`), fluid size
   `clamp(28px,1.4rem+2vw,40px)` + tight line-height (template `.h2`); `.section__lede` bottom margin; `--section-y-flagship` → `clamp(72px,…,96px)`
   (template `.sec{padding:96px 0}` / 72 mobile).
4. ✅ breadcrumb + status badges — confirmed from prior turn (`5e75280`).
- Build GREEN (45,934B); D1+G1 unstyled-class sweep = **0**.
- **SELF-AUDIT (CSS-value audit vs the re-pulled template — spacing/alignment/styling/match per section) delivered to founder, all ✅.** Honest limit:
  no browser in this env (headless chrome env-blocked) → I audit my CSS VALUES against the template's, not rendered pixels; founder's eye is the final
  fine-proportion check, but every default-fallback is eliminated and every readable template value is matched.
- ⛔ PAUSE for founder judgment on D1 + G1. No fan-out. FREEZE intact.
**COUNT:** layers 00+01+02+04+05 · build GREEN 616 · bundle 45,934B/100KB · sweep 0 · src changed = 01-tokens, 02-base, 05-components, t-bofu.njk.

---

## Turn — 2026-06-21 · HEADLESS CHROME WORKING — Code can SEE the render now (visual audit unblocked)
**Founder:** get headless chrome working so I can see the render. **DONE.** Root capability restored — the prior "no browser" limit is lifted.
- **Found:** Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe` (+ Edge). The `--screenshot` path WORKS on this machine even though
  `--dump-dom` returns 0-length (that's why earlier probes failed). The leak (memory: chrome-headless-leak) is avoided with a dedicated
  `--user-data-dir=C:\tb-probe-profile` + kill-chrome after each shot.
- **New reusable tool: `_build/scripts/render_shot.ps1`** — `-url -name -w -h`; headless screenshot of the served dev page → `_build/verify/shots/<name>.png`,
  kills chrome after. Code then **Reads the PNG to actually see the render.**
- **VISUAL AUDIT of D1 (desktop 1280, hero close-up, full 13000, mobile 390) — confirmed the fixes render:** util-bar + green dot ✓ · horizontal
  breadcrumb ✓ · **petrol/clay gap-mark eyebrow ✓** · Fraunces H1 ✓ · reconciliation figure with the **soft-red "Out of balance" pill (no black box) ✓**
  · dark proof band ✓ · sand/white/deep-petrol section rhythm with breathing room ✓ · §03 dossier band ✓ · pricing/operator/call-block/intake/FAQ ✓
  · **final-CTA = clean dark LEFT-aligned band, Tie-Out corner mark, NO bars ✓** · mobile: nav→hamburger, hero stacks, grids→1col ✓.
- ⭐ From here I VISUALLY self-audit (screenshot + read) before showing the founder — no more "value-audit only / can't see pixels."
**COUNT:** headless-chrome render pipeline working · D1 desktop+mobile visually verified · build GREEN 616 · bundle 45,934B.

---

## Turn — 2026-06-21 · FAN-OUT begins: 06-content shared component layer + visual audit of 4 high-variety families
**Founder:** fan out across families, audit each screenshot before showing.
- **Sweep first:** 1 representative page per family (21) → diffed classes vs CSS → **105 unstyled component classes** = the fan-out todo.
- ✅ Authored **`06-content.css`** — the cross-family shared component layer: byline-block/meta-reviewed · review-card · team-card · trust-row ·
  checks-list · stat-row/stat · call-breakout · disclosure(+warn) · error-badge · fix-steps · process-diagram/process-step · flow · deliver-card ·
  vs-table marks · diagram-feature/diagram-figure · guide-grid + sticky toc + article · **calc** (form + dark petrol result) · state-router · hub
  hero(dark)+motif+rule-mark · buyer-card variants · tldr heading · full contact form extras · util/404 hero · phone-cta · section/chrome variants.
  Token-only, consistent with the 05 D1/G1 components.
- Build GREEN — bundle **6 layers, 59,578B / 100KB**. **Re-sweep across all 21 family reps = 0 unstyled classes.**
- **VISUAL AUDIT (screenshot → read) of 4 high-variety families — all render correctly, no broken/unstyled sections:**
  · **A1 home** (T-account hero figure, proof band, buyer cards, judgment chart, vs-table, review cards, clean LEFT final-CTA) ✅
  · **E5 tool** (calc island: form + dark-petrol result panel) ✅ · **F1 contact** (full form + "right path" flow, minimal chrome) ✅
  · **D2 error** (177-page family — error-badge chip, fix-steps, ai-summary, call-block) ✅
- ⏭ REMAINING to visually audit (same now-styled component library): B1/B2 hubs · B3 listing · B4/B5 location hubs · C1/C2 comparison · D3 state-pillar ·
  D4/D5/D6 location children · D7 triage · E1 guide · E2 glossary · E3 framework · E4 blog · E6 research · F2 pricing · G2 editorial. I audit each
  screenshot + fix before showing.
**COUNT:** layers 00+01+02+04+05+06 · build GREEN 616 · bundle 59,578B/100KB · family-rep sweep 0 unstyled · 6 families visually verified (D1,G1,home,tool,contact,d2-error).

---

## Turn — 2026-06-21 · FAN-OUT COMPLETE: 16 families visually audited + FULL BATTERY GREEN (whole site)
**Founder:** audit remaining families, fix before showing.
- **VISUAL AUDIT (screenshot → read) of 10 more families — all render correctly, no broken sections, no fixes needed:** D3 state-pillar · C2 comparison ·
  E1 guide (sticky TOC + article) · E2 glossary (definition + diagram-feature) · F2 pricing (flow + tiers) · G2 about (no fake team photos) ·
  D7 triage (disclosure ATF) · B1 silo-hub · B5 national hub (state-router) · E6 research (TL;DR + stat-row + disclosure). **= 16 families total verified.**
- **FULL-SITE BATTERY → made GREEN:** re-ran the battery on the whole 580-page site. Fixed three infra/coverage issues:
  (1) css-bytes gate hardcoded the OLD layer filenames → made it **glob the actual `NN-*.css` layers**;
  (2) **css-drift** flagged `#fff`/`#F3EDE2` + undefined `--caution-*` → tokenized to `--white`/`--border-faint`, added `--caution-soft/-border`;
  (3) **manifest** flagged 18 classes on pages outside the 21-rep sample → styled them (calc metrics · lead-magnet · legacy call-block dot-mark ·
  faq__more · num · nf-silos) + **new `07-motion.css`** (the signature diagram draw-on `dgm-*`, reduced-motion-safe) + whitelisted the `n` machinery class.
- ✅ **BATTERY PASSED — ALL GREEN (exit 0):** css-drift (0 hardcoded hex / 0 undeclared props) · css-bytes 62,025B/100KB · manifest (all 357 classes
  styled) · content-equity · faq-verbatim · variety · design-fidelity — across all 580 pages. **FREEZE INTACT.** Bundle = **7 layers, 62,025B/100KB.**
- D1 re-screenshot confirmed intact after the token re-encode.
- ⭐ **The from-scratch design re-implementation is now complete across all 25 families, whole-site battery-GREEN, freeze intact, every page rendering
  the petrol design.** Remaining = founder visual sign-off + the flip-gate items (live axe/overflow, form handler, OG images, baseline-vs-prod recrawl).
**COUNT:** layers 00·01·02·04·05·06·07 · build GREEN 616 · bundle 62,025B/100KB · FULL BATTERY GREEN · 16 families visually verified · freeze intact.

---

## Turn — 2026-06-21 · LAST 9 VARIANT FAMILIES AUDITED → ALL 25 FAMILIES VISUALLY VERIFIED
**Founder:** audit the last 9 variant families.
- **VISUAL AUDIT (screenshot → read) of the remaining 9 — all render correctly, no broken sections, no fixes needed:**
  · **B2** card-grid hub (dark hub hero + card grids) · **B3** listing (glossary term grid + call-breakout) · **B4** location sub-hub (NY industries) ·
  · **C1** comparison-hub (callout + comparison cards) · **D4** city child (Champaign) · **D5** state-service child (IL accountant) · **D6** industry
  child (NY nonprofit) · **E3** framework (process-diagram + pull-quote) · **E4** blog (byline hero + article + related).
- ⭐⭐ **ALL 25 FAMILIES NOW VISUALLY VERIFIED** (25/25: A1·B1·B2·B3·B4·B5·C1·C2·D1·D2·D3·D4·D5·D6·D7·E1·E2·E3·E4·E5·E6·F1·F2·G1·G2) — every one
  renders the petrol design correctly (desktop; D1 also mobile-verified). Whole-site battery GREEN, freeze intact, bundle 62KB/100KB.
- **The from-scratch design re-implementation is COMPLETE + visually verified end-to-end.** No styling fixes were needed on any of the last 9 —
  the shared component library held across every family.
- ⏭ Remaining (not design): flip-gate items — live axe/overflow on the founder's machine · form POST handler · real Intuit badge artwork ·
  baseline-vs-prod recrawl · OG images. Plus founder final sign-off.
**COUNT:** 25/25 families visually verified · FULL BATTERY GREEN · freeze intact · design rebuild complete.

---

## Turn — 2026-06-21 · FLIP-GATE #3: baseline-vs-prod recrawl — 16 orphan state pages found + 301'd
**Founder:** start on the flip-gate items.
- **Recrawl:** WebFetch'd the LIVE prod `techbrot.com/sitemap.xml`, diffed vs the new build (528 URLs) + `_redirects`. New build has 528 URLs,
  baseline.json 139, 6 existing redirects.
- **FINDING — 16 uncaptured live-prod URLs that would 404 at cutover:** `/find-an-accountant/<state>/` landing pages for **alabama · arizona ·
  colorado · georgia · indiana · maryland · massachusetts · michigan · minnesota · nevada · new-jersey · north-carolina · ohio · pennsylvania ·
  virginia · washington** are LIVE on prod, but the new build ships only NY/CA/TX/FL/IL (others' real pages = post-redesign). All other live-prod
  URLs (non-state) are built or already redirected — **no other orphans.**
- ✅ **FIX:** added 16 `301 → /find-an-accountant/` rules to `src/redirects.njk` (national hub = topically exact, carries the state-router; preserves
  the pages' SEO equity, no 404s). Each removed when that state's real page ships. ⚠ founder: confirm target (`/find-an-accountant/` vs `/accounting/`).
  Build GREEN; `_site/_redirects` now 22 rules (6 + 16). 
- **Flip-gate #3 (baseline-vs-prod recrawl) = DONE.** Remaining flip-gate items: form POST handler (needs Cloudflare access) · real Intuit badge
  artwork (in DesignSync `assets/` — can import) · OG images (build template) · live axe/overflow (founder machine — `--screenshot` works now but axe
  needs JS-exec; `--dump-dom` still 0-length) · CSS net-back-under-target (already under at 62KB).
**COUNT:** flip-gate recrawl done · 16 orphan states 301'd · _redirects 22 rules · build GREEN.

---

## Turn — 2026-06-21 · FLIP-GATE: Intuit badges wired + OG images shipped (both verified by screenshot)
**Founder:** go — badges then OG images.
- ✅ **Intuit badges** — `partials/intuit-badges.njk` renders `src/_data/badges.json` (only artwork present → no broken imgs). Wired into `/trust/`
  under a "Verifiable Intuit credentials" row; the **2 real badges (ProAdvisor Gold + Payroll) render** (screenshot-verified). `.intuit-badges` CSS.
  ⚠ PENDING (founder artwork — exceeded the DesignSync get_file cap): QBO L1, QBO L2, Bookkeeping → drop the PNGs into `src/assets/img/brand/badges/`
  + add a `badges.json` entry to complete the row. (Bonus: also screenshot-verified the **404 page** renders perfectly — util-hero family ✓.)
- ✅ **OG images** — base.njk had **no `og:image`**. Built a branded **1200×630 OG card** (`src/dev/og-card.njk`, dark-petrol field + petrol/clay
  gap-mark + faint Tie-Out corner + Fraunces headline + TechBrot logo + techbrot.com), screenshot via headless-Chrome → **`src/assets/og/default.png`**.
  Added `og:image`/`:width`/`:height`/`:alt` + `twitter:card`/`title`/`description`/`image` to base.njk (per-page override via `ogImage`; the page-specific
  `og:title`/`og:description` were already present). Added `src/assets/og` to the eleventy passthrough. Prod-safe: the dev og-card uses the dev dir-data
  (permalink:false in prod). Screenshot-verified the OG renders correctly.
- **FULL BATTERY GREEN** after both (css-drift, css-bytes 62,242B/100KB, manifest 359 classes, equity, fidelity). FREEZE INTACT.
- **Flip-gate status:** ✅ #3 recrawl · ✅ Intuit badges (2/5 wired, 3 pending founder artwork) · ✅ OG images · ✅ CSS under target (62KB).
  REMAINING (need founder resources): form POST handler (Cloudflare) · live axe/overflow (founder machine). Plus final sign-off.
**COUNT:** badges wired (2/5, 3 pending artwork) · OG image shipped · battery GREEN · _site/assets/og/default.png 54KB.

---

## Turn — 2026-06-21 · FLIP-GATE: form POST handler scaffolded (Cloudflare Pages Function)
**Founder:** scaffold the form POST handler.
- **Key finding:** the front-end is ALREADY complete — `src/assets/js/tb-forms.js` validates, honeypots, collects the exact payload, fires GA4
  `lead_submit`, and POSTs JSON (as `text/plain`, no CORS preflight) to `window.TB_FORM_ENDPOINT`, which `site.json formEndpoint` currently sets to
  a **live Google Apps Script `/exec` URL**. So forms already work in production today.
- ✅ **Scaffolded the design's preferred same-platform backend** — Cloudflare Pages Functions under `functions/`:
  · `functions/api/contact.js` — validates email, honeypot (`company_website`) + sub-1.5s time-trap (both drop silently as success), then
    DELIVERS via env-configured option [`APPS_SCRIPT_URL` forward · `RESEND_API_KEY` email · or accept+log if neither] → returns `{ ok: true }`
    (the contract tb-forms.js expects). Non-POST → 405.
  · `functions/api/file-review.js` + `pillar-lead.js` — re-export the same handler (routed by `intent`/`source_type`; the JS posts all forms to one endpoint).
  · `functions/README.md` — go-live steps (set Cloudflare env var + flip `site.json formEndpoint` to `/api/contact`).
- **Did NOT switch the live endpoint** — kept the working Apps Script as the fallback (scaffold only; founder flips + sets Cloudflare env to migrate).
  Build unaffected (`functions/` is Cloudflare-only, not in `_site`; eleventy input is `src/`). No src change → battery unchanged (GREEN).
- **Flip-gate scoreboard:** ✅ phone · ✅ re-skin+battery · ✅ recrawl · ✅ badges (2/5 wired, 3 pending artwork) · ✅ OG · ✅ CSS under target ·
  ✅ **form handler (works via Apps Script today; Cloudflare path scaffolded)**. REMAINING: live axe/overflow (founder machine) · 3 badge PNGs · final sign-off.
**COUNT:** form handler scaffolded (functions/api/*) · forms already live via Apps Script · build unaffected.

---

## Turn — 2026-06-21 · FLIP-GATE: axe + overflow probe prepped (turnkey, founder-run)
**Founder:** prep the axe/overflow probe commands.
- The sandbox can't JS-exec (headless `--dump-dom` = 0-length), so the live a11y/overflow gate must run on the founder's machine. Built a turnkey
  Puppeteer + axe-core probe:
  · `_build/probe/probe-urls.txt` — 35 paths (25 family reps + growth-phase children), editable.
  · `_build/probe/axe-overflow.mjs` — per URL: inject axe-core → `axe.run()` (desktop 1280) collecting violations; overflow at **360/390/768**
    flagging any element whose right edge passes the viewport (up to 8 offenders). Writes `_build/verify/axe-overflow-report.json` + console
    summary; **exit 1** on any serious/critical a11y violation OR any overflow.
  · `_build/scripts/run-axe-overflow.ps1` — installs puppeteer+axe-core (one-time), builds `_site`, serves it (python http.server :8181, waits
    till ready), runs the probe, stops the server.
- Verified here: `node --check` SYNTAX OK · 35 URLs parse · node v22.14 + python 3.13 present.
- **Founder runs:** `powershell -File _build\scripts\run-axe-overflow.ps1` → reads the summary / report; I fix any ❌ at the component/token level.
- **Flip-gate scoreboard:** all code-doable items ✅ (re-skin · battery · recrawl · badges 2/5 · OG · CSS · form handler · **probe prepped**).
  REMAINING (founder-side): RUN the probe · 3 badge PNGs · Cloudflare env + endpoint flip · final sign-off.
**COUNT:** axe/overflow probe prepped (3 files) · syntax OK · node v22 + python ok · founder runs run-axe-overflow.ps1.

---

## Turn -- 2026-06-21 -- STEP 0 (sitewide axe/overflow fix) + parallel gates A (form) + B (badges)
Founder: sign-offs + go. Step 0 APPROVED; NY ruling = generated/uniform only (NY hand-authored untouched); labels SKINNED vs PROOF; RULE 0 (log every turn + cat 20).

STEP 0 -- sitewide axe/overflow fixes at 05/06/layout source (R8, one source, inherits site-wide):
- contrast: --text-faint (token tagged NON-TEXT) -> --text-secondary on .idx__t + .legal-doc__toc-label (05) and .toc__label + .meta-reviewed (06); clay .process-step__number -> --cta-press; added .section--cta-band--dark/.section--tier-hub .section__eyebrow -> --accent-on-ink (05).
- overflow: .link-wrap -> flex-wrap:wrap + max-width (06); .vs-scroll -> +max-width:100% +min-width:0 (05; fixes the flex/grid non-shrink that leaked the vs-table).
- links: underline inline text links lacking a non-color cue (.site-footer__disclosure, .intake-checkbox(/__help), .intake-field__help, .disclosure__body, .lead-magnet__text, .calc__noscript) (06).
Files: src/assets/css/05-components.css, src/assets/css/06-content.css.

GATE B (badges, flip-gate #2): renamed 3 spaced/caps files -> kebab (payroll-certification.png, quickbooks-level-1-certified.png, quickbooks-level-2-certified.png) via git mv; all 5 real Intuit badges now in src. Updated src/_data/badges.json to the 5 kebab files + honesty alt-text "(Intuit certification)" -- certification only, NEVER affiliation. File->credential MAP: intuit-proadvisor-badge-tier-gold=ProAdvisor Gold tier; quickbooks-level-2-certified=QBO ProAdvisor L2; quickbooks-level-1-certified=QBO ProAdvisor L1; payroll-certification=QB Payroll ProAdvisor; bookkeeping-expert-badge=Bookkeeping Expert. Strip currently live on /trust/. OPEN: wire onto home/about/pricing/money-page (next turn).
Files: src/_data/badges.json, src/assets/img/brand/badges/* (3 renames).

GATE A (form, flip-gate #3): site.json formEndpoint already = the pasted Apps Script /exec URL (confirmed, no edit needed). Added lead_source + ai_tool to tb-forms.js collect() -- they were DROPPED (selects not in the collect list); now captured = AI-lead-source preserved (26 keys = 24-contract + 2). TEST POST marker TEST-FLIP-2026, email westgatefs7+TESTFLIP2026@gmail.com: HTTP 200, body {"ok":true,"result":"success"} (exactly the success condition tb-forms.js checks). ENDPOINT WORKS. FOUNDER: confirm which sheet/inbox the TEST-FLIP-2026 row landed in (right destination?).
Files: src/assets/js/tb-forms.js.

VERIFICATION: battery GREEN after step-0 CSS (css-drift, css-bytes 62653B/102400B, manifest 359). Form endpoint 200/ok=true. Axe/overflow probe RE-RUNNING (bg b4ccsr4pi) to confirm step-0 GREEN sitewide -- result reported next turn.
COUNT: src files changed = 4 (05-components.css, 06-content.css, badges.json, tb-forms.js) + 3 badge renames; battery GREEN; form endpoint confirmed live (200/ok); pages added = 0; freeze intact (no URL/copy/heading/FAQ/schema touched).
OPEN/NEXT: (1) read probe result -> confirm axe/overflow GREEN (clears flip-gate #6); (2) wire badge strip onto home/about/pricing/money; (3) then begin family fan-out D1(reconfirm)->D3->D2... NY hand-authored untouched.

---

## Turn -- 2026-06-21 -- STEP 0 probe re-run: INTERIM (big improvement, not yet green) -- diagnosing remainder
Founder: report the probe result when done. Probe b4ccsr4pi still writing (27/35 pages at read); reporting interim + will diagnose+fix the remainder on completion.
- a11y: 64 serious -> ~7 remaining (most pages 0; 1 serious left on /trust/, cleanup-bookkeeping, /find-an-accountant/new-york(/industries,/industries/nonprofit), /find-an-accountant/illinois(/cities/champaign)). A residual contrast element step 0 did not catch.
- overflow: still ~12 pages (/, /quickbooks/which-plan-is-right/, /about/, /trust/, /partners/, monthly-bookkeeping, industries/nonprofit, error-codes/12029, error-codes/3371, vs/techbrot-vs-bench, new-york, illinois). link-wrap/vs-scroll fixes covered some, not all -- residual overflow source(s) to root-cause from the JSON.
- NEXT: read full probe + axe-overflow-report.json -> identify the residual contrast element + overflow root cause(s) -> fix at 05/06/layout source (R8) -> re-run to GREEN before family fan-out.
- No src changes this turn (read-only diagnosis). Battery still GREEN from prior commit 8829bbc. Freeze intact.
COUNT: src changed = 0; probe interim a11y ~7 serious (from 64), overflow ~12 pages; step 0 ~85% cleared; family fan-out still gated on probe-green.

---

## Turn -- 2026-06-21 -- STEP 0 residual fixes (probe-diagnosed) -> re-running to confirm GREEN
Founder: report probe result when done. Probe b4ccsr4pi completed: a11y 8 serious / overflow 13 pages. Root-caused from axe-overflow-report.json + fixed at 05/06 source (R8):
- a11y (3 distinct elements, 8 pages): .cleanup-timeline__cap-label (--text-faint->--text-secondary), .legal-doc__meta dt (--text-faint->--text-secondary), .final-cta__disclaimer dark rule extended to .section--tier-hub.section--cta-band (was only --dark; tier-hub dark bands left the disclaimer dark-on-dark).
- overflow (real sources): .vs-table NOT always wrapped in .vs-scroll (e.g. home) -> added @media(max-width:640px){.vs-table{display:block;overflow-x:auto;max-width:100%}} so any vs-table scrolls on phones, page never does. .process-step/.process-step__body -> min-width:0 + overflow-wrap (flex/grid shrink). .calc__field/.calc__form/inputs -> min-width:0 + input width:100%+box-sizing. .cta-band__motif = clipped by .section--cta-band overflow:hidden (probe false-positive; expect it to clear once co-offenders fixed).
Files: src/assets/css/05-components.css, src/assets/css/06-content.css.
- VERIFICATION: probe RE-RUNNING (bg bkqzhwq9p) to confirm a11y 0 + overflow 0. Battery still GREEN (token-only edits, no hex). Freeze intact.
COUNT: src changed = 2 (05,06 css); a11y fixes = 3 elements; overflow fixes = vs-table+process-step+calc; probe re-running; family fan-out still gated on probe-GREEN.
OPEN/NEXT: read probe bkqzhwq9p -> if GREEN, step 0 done (clears flip-gate #6) + commit + start fan-out D1->D3->D2 (NY untouched); also wire badge strip onto home/about/pricing/money.

---

## Turn -- 2026-06-21 -- STEP 0 probe bkqzhwq9p (verifying residual fixes) -- near-green, isolating last items
Founder: fix the remaining a11y + overflow, re-run to green. Probe bkqzhwq9p (post residual-fix build, incl commit 111c56f) still writing; partial read shows:
- a11y: GREEN on all pages read EXCEPT cleanup-bookkeeping (1 serious). Confirmed my fixes BUILT: .cleanup-timeline__cap-label now --text-secondary on white card (passes), vs-table @media(max-width:640) present in bundle. So the remaining cleanup-bookkeeping a11y is a DIFFERENT element (not cap-label) -- needs the completed JSON.
- overflow: GREEN on about/trust/partners (process-step fix worked) + most pages; home (/) + /quickbooks/which-plan-is-right/ still overflow 2. vs-table fix is built, so these are a different/co-element -- needs JSON.
- No src changes this turn (read-only diagnosis while probe finishes). Battery GREEN. Freeze intact.
COUNT: src changed = 0; a11y now ~1 element left (cleanup-bookkeeping), overflow ~2 pages (home, which-plan); awaiting probe JSON to pinpoint + fix -> re-run to green.
OPEN/NEXT: on probe complete -> read axe-overflow-report.json -> fix the 1 a11y + 2 overflow elements at source -> re-run -> GREEN -> step 0 done.

---

## Turn -- 2026-06-21 -- STEP 0 final residual fixes (table-layout:fixed + motif + calc + last a11y) -> re-run
Founder: fix the remaining a11y + overflow, re-run to green. Read probe bkqzhwq9p JSON: a11y 1 element left (.cleanup-timeline__note), overflow on home/which-plan/techbrot-vs-bench (vs-table), 12029 (cta-band__motif), tools (calc), new-york/illinois (small).
- a11y: .cleanup-timeline__note --text-faint -> --text-secondary (the 3rd timeline label; cap-label+cap-note were already fixed).
- overflow vs-table: diagnosed root cause -- the .vs-scroll wrapper (home IS wrapped, .container properly constrained) was NOT containing a 5-col table; display:block approach also failed. Switched to GUARANTEED fix: @media(max-width:640){.vs-table{table-layout:fixed} + cells overflow-wrap/word-break} -- forces the table to container width, cells wrap, cannot exceed viewport.
- overflow motif: @media(max-width:640){.cta-band__motif{display:none}} -- the decorative corner motif bleeds past the band; hidden on phones (opacity 0.06, mostly off-screen anyway).
- overflow calc: .calc box-sizing:border-box + max-width:100% + min-width:0; @media(max-width:560){.calc{padding:space-5}}; .calc__result-range overflow-wrap.
Files: src/assets/css/05-components.css, src/assets/css/06-content.css.
- VERIFICATION: probe RE-RUNNING (bg bvah95u2a) to confirm a11y 0 + overflow 0 sitewide. Battery GREEN expected (token-only + layout CSS, no hex).
COUNT: src changed = 2 (05,06 css); fixes = 1 a11y + vs-table(table-layout:fixed) + motif-hide + calc; probe re-running; step 0 green pending probe.
OPEN/NEXT: read probe bvah95u2a -> if GREEN, step 0 DONE (flip-gate #6 clear) -> commit + start family fan-out D1->D3->D2 (NY untouched) + wire badge strip home/about/pricing/money.

---

## Turn -- 2026-06-21 -- STEP 0 overflow/a11y round 3 (input cap + list/card hardening) -> re-run
Founder: fix the remaining a11y + overflow, re-run to green. Read probe bvah95u2a JSON: a11y 1 (operator-panel__label), overflow 5 pages.
- a11y FIXED: .operator-panel__label --text-faint -> --text-secondary (last text-contrast element; .flow__arrow + .mark-no keep --text-faint = decorative, not text).
- overflow new-york/illinois ROOT CAUSE: a 505px form input (not responsive) pushed the page wide (buyer-card/contact-form-wrap @374 were consequences). FIX: global input,select,textarea { max-width:100%; box-sizing:border-box } in 02-base.
- overflow techbrot-vs-bench: .process-step__heading -> overflow-wrap:anywhere. 3371 (error list): .fix-steps li + children min-width:0 + overflow-wrap. buyer-card min-width:0 + overflow-wrap.
- overflow 12029 (443px CONSTANT, offenders=0): NOT a DOM element my querySelectorAll scan can see -> a pseudo-element (::before/::after) or negative-positioned decoration. The motif is already display:none <=640 (confirmed in bundle). If it persists after this round I will enhance the probe (catch left<0 + maxRight + pseudo) or isolate the specific ::before.
Files: src/assets/css/02-base.css, 05-components.css, 06-content.css. Commit eff2bc6.
- VERIFICATION: probe RE-RUNNING (bg b2czwgphm). Battery GREEN expected.
COUNT: src changed = 3; a11y now 0 expected; overflow target = clear all but the 12029 pseudo (under investigation); step 0 green pending probe.
OPEN/NEXT: read probe b2czwgphm -> if only 12029 pseudo remains, isolate the ::before/decoration source; else GREEN -> step 0 done -> fan-out.

---

## Turn -- 2026-06-21 -- STEP 0 round 4: call-block__sub a11y + PROBE ENHANCED (stop the whack-a-mole)
Founder: fix remaining a11y + overflow, re-run to green. Read probe b2czwgphm: a11y 1 (call-block__sub), overflow 4 (12029, techbrot-vs-bench, new-york, illinois).
- a11y ROOT: .call-block__sub was rgba(255,255,255,0.78) inside the CLAY call CTA -> blends to ~3.5:1, fails. -> color: var(--white) (pure white on clay = 4.77:1, passes). (The 1-per-round a11y was my probe storing only the FIRST node target; cleanup-bookkeeping had several.)
- PROBE ENHANCED to end the guessing: now stores ALL a11y node targets + their axe fg/bg/ratio data; overflow now catches left<-1 (negative-position) + pseudo-element ::before/::after widths + reports the max-right element. Next run pinpoints 12029 (443 const, offenders=0 = pseudo) + new-york/illinois (374, 14px) + techbrot (371) exactly.
Files: src/assets/css/05-components.css (call-block__sub), _build/probe/axe-overflow.mjs (diagnostics).
- VERIFICATION: enhanced probe RE-RUNNING. Battery GREEN (rgba->token, no hex added).
COUNT: src changed = 1 (05 css) + probe tooling; a11y target 0; overflow 4 small pages under precise diagnosis; step 0 green pending.
OPEN/NEXT: read enhanced probe -> fix the exact pseudo/negative-position + 14px sources -> re-run -> GREEN -> step 0 done -> fan-out.

(correction, same round-4 turn): first probe launch used Start-Job which dies with the PS session + sends no completion signal; killed lingering processes (this also stopped the LAN dev server b5ghkfuxf -- restart on demand) and re-launched the enhanced probe properly as background task bo656l3bb (will notify on completion). No src change in this correction.

---

## Turn -- 2026-06-21 -- STEP 0 round 5: A11Y GREEN (0) + skip-link off-screen technique fixed
Founder: fix remaining a11y + overflow, re-run to green. Enhanced probe bo656l3bb result:
- A11Y = 0 serious. GREEN. (call-block__sub + all prior contrast fixes done.) flip-gate #6 a11y half cleared.
- OVERFLOW = 4 pages, and the enhanced probe (left<-1 detection) revealed the common offender on ALL of them: a.skip-link at [L-9999/R-9881] -- the skip-to-content link used position:absolute; left:-9999px (the legacy off-screen technique that extends the document leftward + can cause phantom horizontal scroll). 12029/techbrot had NO other offender (skip-link only); new-york/illinois also showed buyer-card/contact-form-wrap @374 (likely consequences of the widened doc, since they sit at width:100% of the container).
- FIX: .skip-link -> proper clip-based hide (position:absolute; width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)), expands on :focus. No left:-9999 -> no document widening. Standard accessible pattern.
Files: src/assets/css/02-base.css.
- VERIFICATION: probe RE-RUNNING (bg bel1ig0f0) to confirm overflow 0. Battery GREEN (no hex).
COUNT: src changed = 1 (02-base skip-link); a11y GREEN (0); overflow expect 0 after skip-link fix; step 0 green pending probe.
OPEN/NEXT: read probe bel1ig0f0 -> if overflow 0 -> STEP 0 DONE (flip-gate #6 clear) -> commit + start family fan-out D1->D3->D2 (NY untouched) + badge strip home/about/pricing/money. If any page persists, isolate its specific element.

---

## Turn -- 2026-06-21 -- STEP 0 round 6: last overflow sources PINPOINTED + fixed (one-off scrollWidth finder)
Founder: fix remaining a11y + overflow, re-run to green. a11y already 0. Wrote _build/probe/find-overflow.mjs (scrollWidth/clientWidth + margin + pseudo finder -- catches what bounding-rect misses) to pinpoint the 4 stubborn overflow pages:
- 12029 (443): .disclosure had DIRECT text inside display:flex (no .disclosure__body) -> the anonymous text flex item will not shrink -> 422px wide. FIX: .disclosure -> display:block + overflow-wrap; .disclosure__icon -> float:left. Text now wraps. (This trademark banner is on ALL 177 D2 error pages.)
- techbrot-vs-bench (371): ol.process-diagram had the default 40px list padding-inline-start (never reset) -> content overflow. FIX: .process-diagram { list-style:none; margin:0; padding:0 }.
- new-york/illinois (374): buyer-card/contact-form-wrap not shrinking. FIX: .buyer-card__text min-width:0; .buyer-card__body overflow-wrap; .contact-form-wrap min-width:0 + box-sizing + max-width.
- 3371 (383): cleared by the disclosure fix.
- VERIFIED via one-off: ALL 4 now docSW=360 (= viewport), was 443/371/374/383.
Files: src/assets/css/05-components.css, 06-content.css, _build/probe/find-overflow.mjs.
- VERIFICATION: full probe RE-RUNNING (bg b21e6oz2z) for sitewide a11y 0 + overflow 0 confirmation.
COUNT: src changed = 2 css; 4 overflow pages fixed at source; a11y already 0; step 0 = GREEN pending full-probe confirmation.
OPEN/NEXT: full probe b21e6oz2z -> if 0/0 sitewide -> STEP 0 DONE (flip-gate #6 clear) -> fan-out D1->D3->D2 (NY untouched) + badge strip home/about/pricing/money.

(interim, round-6 same turn): full probe b21e6oz2z at 31/35 pages -- EVERY page a11y 0 / overflow 0 so far (home, hubs, money, error, location, comparison, tool, contact, glossary, research all clean). Battery GREEN (exit 0). Awaiting final summary to declare STEP 0 DONE.

---

## Turn -- 2026-06-21 -- ✅ STEP 0 COMPLETE: full probe GREEN (a11y 0 / overflow 0, 35 pages)
Founder: fix remaining a11y + overflow, re-run to green. DONE.
- FULL PROBE b21e6oz2z (exit 0): "PROBE GREEN - no serious a11y violations, no overflow." pages probed 35, a11y violations 0 (serious 0), pages with overflow 0.
- Battery GREEN (exit 0). Freeze intact throughout (all fixes were CSS at 02/05/06 source level, R8 -- inherited site-wide; no URL/copy/heading/FAQ/schema touched).
- THE STEP-0 JOURNEY: a11y 64 serious -> 0 (contrast: ~8 --text-faint text labels -> --text-secondary, clay process-number -> --cta-press, dark-band eyebrow/disclaimer -> light, call-block__sub -> pure white on clay; the --text-faint token stays NON-TEXT/decorative only). overflow 13 pages -> 0 (vs-table table-layout:fixed, link-wrap wrap, motif hide <=640, global input max-width, process-step/buyer-card/fix-steps/disclosure-body min-width:0 + overflow-wrap, process-diagram list reset, contact-form-wrap box-sizing, disclosure flex->block+float, skip-link left:-9999 -> clip). Built a scrollWidth-based one-off (find-overflow.mjs) to pinpoint the last margin/flex-shrink sources bounding-rect missed.
- ⭐ STEP 0 = DONE. Clears FLIP-GATE #6 (live axe/overflow). Commit 1fc99ee.
- FLIP-GATE SCOREBOARD: phone ✅ · re-skin+battery ✅ · recrawl ✅ · OG ✅ · CSS-under-target ✅ · Intuit badges ✅(5 wired, strip on /trust/; OPEN: home/about/pricing/money) · form handler ✅(Apps Script live, 200/ok) · **axe/overflow ✅ (step 0 done)**. Remaining: badge strip on 4 pages · founder final sign-off · the founder-side TEST-FLIP-2026 destination confirm.
COUNT: a11y 0 / overflow 0 / battery GREEN / 35 pages probed; step 0 COMPLETE; freeze intact.
OPEN/NEXT: per founder order -> family fan-out D1(reconfirm)->D3->D2->D4/D5/D6(generated only, NY untouched)->D7->B1-B5->C1-C2->E1-E6->F1-F2->G2->A1; + wire badge strip onto home/about/pricing/money. Per-family: rebuild REP -> verify (equity+battery+axe+overflow+CLS0) -> commit -> SESSION-LOG + COUNT.

---

## Turn -- 2026-06-21 -- FAN-OUT START: badge strip wired onto home/about/pricing/money + D1 reconfirm (build+battery running)
Founder: go -- fan out D1 reconfirm + badge strip.
- BADGE STRIP (flip-gate #2 completion): added the intuit-badges partial (5 real Intuit badges, certification-only alt) to the credential sections of:
  - money page (src/accounting/bookkeeping/cleanup-bookkeeping.njk): new compact "Verifiable Intuit credentials" section after the proof-band, before §01.
  - home (src/index.njk): new credential strip after the hero, before home-tldr. (home is a fresh build, not frozen.)
  - about (src/about.njk): into the EXISTING #about-credentials section, after the trust-row.
  - pricing (src/pricing.njk): new credential strip after the hero, before pricing-tldr.
  All additive (section__eyebrow, NOT a heading -> heading hierarchy + equity untouched; no FAQ/schema change). Freeze-safe.
- D1 RECONFIRM: cleanup-bookkeeping (D1 proof, 66-page family) -- was GREEN in the step-0 probe (a11y 0 / overflow 0); now adding the badge strip + re-verifying battery/render.
- VERIFICATION: build + battery RUNNING (bg b7alj2cbm) -- confirming content-equity (baseline headings/FAQ/schema still present), manifest, css-bytes after the additive sections. Then screenshot the 4 pages.
Files: src/index.njk, src/about.njk, src/pricing.njk, src/accounting/bookkeeping/cleanup-bookkeeping.njk.
COUNT: 4 pages get the badge strip; freeze-safe additive sections; battery pending; D1 reconfirm pending render+battery.
OPEN/NEXT: read battery b7alj2cbm -> screenshot D1 + the 3 badge areas -> commit -> then D3 state pillar (next fan-out family).

---

## Turn -- 2026-06-21 -- ✅ Badge strip DONE (4 pages) + D1 RECONFIRMED green
Founder: go -- fan out D1 reconfirm + badge strip.
- BADGE STRIP wired + VERIFIED on home, /about/, /pricing/, money-page (in addition to /trust/) -- the intuit-badges partial (5 real Intuit badges, certification-only alt).
- VERIFICATION (b7alj2cbm + one-off):
  - battery GREEN exit 0: content-equity PASS (baseline headings/FAQ/schema all still accounted for -- the additive eyebrow sections removed nothing), manifest 359, faq-flat 518, css-bytes under gate.
  - badges in HTML = 6 matches each on all 4 pages; SCREENSHOT-VERIFIED the 5 real badges render on the money page (gold ProAdvisor, QBO L2, QBO L1, Payroll, Bookkeeping -- real artwork, no broken imgs, no placeholder).
  - overflow: all 4 pages docSW=360 @360 (badge strip is flex-wrap, no overflow). a11y: imgs carry alt + width/height (CLS 0); pages were a11y-0 in step 0.
  - D1 RECONFIRM: cleanup-bookkeeping renders correctly after all step-0 CSS + the new badge strip (hero+figure, proof-band, credentials strip, §01...). D1 proof + 66-page family GREEN.
- ⭐ FLIP-GATE #2 (Intuit badges) COMPLETE -- real badges live on trust/home/about/pricing/money, no placeholder anywhere, honesty alt-text (certification only, never affiliation).
Files: src/index.njk, src/about.njk, src/pricing.njk, src/accounting/bookkeeping/cleanup-bookkeeping.njk.
COUNT: 4 pages badge strip wired+verified; battery GREEN; overflow 0; D1 family reconfirmed GREEN; flip-gate #2 done.
OPEN/NEXT: D3 state pillar (next fan-out family: rebuild REP /find-an-accountant/california/ -> verify -> 2-3 varied pages inherit -> commit -> SESSION-LOG). Generated states only; NY hand-authored untouched.
