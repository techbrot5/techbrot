# ROUND 11 — POLISH PASS (header align · FAQ flatten · within-page variety)

Date: 2026-06-13 · New session/model (Opus 4.8 1M) driving the factory.
Scope: the three queued polish items only — NO new pages. This round proves
the new session drives the factory cleanly before the elevation grind
resumes. STOP after for founder audit.

Constraints honored: design-system tokens/motion only (no ad-hoc styles) ·
content machinery FENCED (intents, schema, form contract, section IDs
untouched) · 58 KB minified gate held · zero-drift probed vs the round-10
newskin baseline.

---

## (a) HEADER ALIGNMENT — VERIFIED ALREADY ALIGNED · NO CHANGE

The round-10 queue note said the chrome container was "inset differently
from the page/body container at BOTH mobile and desktop." I diagnosed
before editing (new diagnostic: `_build/scripts/edge_probe.ps1` — measures
rendered `getBoundingClientRect().left` + computed padding of the header
container, logo, hero heading, and full/narrow body containers).

**Finding — the header is NOT misaligned.** Header content edge is
pixel-identical to the hero heading and every full-width body container at
every width:

| Viewport | Header edge | Hero heading | Full-width section | Narrow reading-column |
|---|---|---|---|---|
| 360 | 20 | 20 | 20 | 20 |
| 480 | 20 | 20 | 20 | 20 |
| 768 | 34 | 34 | 34 | 34 |
| 900 | 34 | 34 | 34 | 74 |
| 1280 | 54 | 54 | 54 | 264 |

(padding resolves 1.25rem mobile / 2rem desktop because `html` is 16px
≤480 and 17px above — header and body share the canonical responsive
`.container` from 05-tiers.)

- The `04-chrome` L11 `.container` override (`padding:0
  var(--container-padding-lg)`, always 2rem, no mobile step) is **dead** —
  the later, canonical `.container` in 05-tiers wins for every `.container`
  including the header. Left untouched per founder ruling ("no change").
- The only element inset differently is the **centered narrow
  reading-column** (`.container--narrow`, 820 px) on prose sections (TL;DR,
  FAQ, quick-5), and only above ~900 px — intentional reading width.
  **Founder confirmed (2026-06-13): intentional and correct, leave it.**

Ruling applied: task (a) closed as "verified already aligned, no change."
Zero CSS touched → minified bundle byte-identical to round 10 (52,660 B).

---

## (b) FAQ FLATTEN — /partners/ 6+13 NESTED → 19 FLAT · + standing battery check

Standardized /partners/ to the /contact/ FAQ shape: flat question → prose
answer, NO bullet lists in answers, NO nested child Q/As. The round-8
nested accordion (6 parents + 13 children) is **flattened to 19 flat Q/A
pairs in document order** (each former parent immediately followed by its
former children). Every parent AND child question/answer survives verbatim
as its own flat pair — zero equity lost.

- `src/partners.11tydata.js`: `faq` array re-leveled from 6 nested objects
  (`children:[…]`) to 19 flat `{q,a}` — text verbatim.
- `src/partners.njk`: FAQ section markup matched to /contact/ — removed the
  `section--faq-nested` + `faq__list--nested` modifiers and the
  `{% if item.children %}` `<ul class="faq__children">` block. Accordion
  shape now identical to /contact/ (the richer per-item a11y attrs
  role=region / aria-labelledby were kept — axe-clean, no regression).
- FAQPage schema regenerates from `data.faq.map(...)` → now **19 Q/A
  verbatim** (was 6 parents only). `faq-schema-verbatim` GREEN at 19.

**NEW STANDING BATTERY CHECK `faq-flat`** (run_battery.py check 11): on
every page carrying a `.faq__list`, fails if any nested-FAQ token appears
(`faq__children` / `faq__child` / `faq__child-question` / `faq__list--nested`
/ `section--faq-nested`) or if any `<ul>/<ol>` sits inside a `faq__answer`.
Result: **4 FAQ pages (contact, file-review, trust, partners) all flat.**
The other three were already flat — partners was the only nested page.

Equity (battery `content-equity` /partners/): 42 baseline headings · 26
schema types accounted; the 5 round-8 schema-only retired questions stay
JUSTIFIED in equity-exceptions.json (unchanged). Differ GREEN.

---

## (c) WITHIN-PAGE SECTION VARIETY — /partners/ application process → FLOW

`/partners/` repeated the numbered `.process-diagram` component. The
application process (#partners-process) is the page's SECOND sequential
instance, so it now takes a different design-system treatment:

- **`.flow`** (design-system component, already in the bundle 05-tiers +
  CLASS-MANIFEST — zero new CSS): a connected horizontal journey strip,
  `1 · Apply` (accent) → `2 · Fit Call` → `3 · Verification` →
  `4 · Onboarding`, each phase's timing in the mono `flow__sub`, arrow
  connectors (the design's inline SVG arrow), stacks vertically on mobile.
  Marked `role="img"` + descriptive `aria-label` (the flow is the visual
  overview; the cards carry the read content).
- **`grid-2` of `review-card`s** below it: the per-phase detail — keeps the
  baseline H3 headings (Apply / Fit Call / Verification / Onboarding) and
  the full descriptions, with the timing emphasis retained. Content +
  equity preserved; visually distinct from the numbered grid used by
  #partners-benefits.

All classes are design-system (`.flow*`, `grid-2`, `review-card`) — manifest
check GREEN, zero new CSS, gate untouched.

**FOLLOW-UP (founder ruling at the round-11 audit, 2026-06-13):**
#partners-principles — a PARALLEL list of six operating principles, not a
sequence — converted from the numbered `.process-diagram` to a **`grid-3`
of `review-card`s** (baseline H3 headings + bodies preserved). This removes
the LAST numbered-grid repeat on the page. /partners/ now reads with three
distinct treatments for its three list/sequence sections:
- #partners-benefits → numbered `.process-diagram` (1 remaining instance)
- #partners-process → `.flow` strip + `grid-2` detail cards
- #partners-principles → `grid-3` cards
Zero new CSS (`grid-3`/`review-card` in-bundle + manifest). Re-verified:
battery GREEN (process-diagram count on /partners/ = 1) · axe ZERO
violations · overflow 364/375/753 (unchanged) · zero-drift probe
/partners/ `1e73d530`@1280 / `a042b7ed`@360 (676 elems — only /partners/
changed; home re-confirmed `e20c9459` identical) · gate 52,660 B unchanged.

---

## VERIFICATION

| Check | Result |
|---|---|
| Battery — ALL GREEN | url-set · links (1271 hrefs/15 pages) · intents · founder-zero · css-drift · css-bytes · ai-summary-5 · faq-min-6 · faq-overlap · faq-schema-verbatim · content-equity ×7 · cta-lexicon · manifest · **faq-flat (NEW)** |
| faq-schema-verbatim /partners/ | **19 Q/A** match accordion verbatim (was 6) |
| content-equity /partners/ | 42 baseline headings · 26 schema types accounted; 5 round-8 schema-only retirements stay JUSTIFIED (unchanged) |
| faq-flat (NEW standing check) | 4 FAQ pages (contact, file-review, trust, partners) — all flat, zero nested markup, zero lists in answers |
| Zero-drift probe vs round-10 newskin baseline | **home `e20c9459` · contact `769f3784` · trust `8fe6833d` — BYTE-IDENTICAL** (unchanged pages). **/partners/ `2e7779ac`→`ea0c7be6` @1280, `487e8394`→`b94bb52d` @360 (644→682 elems) — the ONLY change, intended (FAQ flatten + process flow).** Matches the deterministic expectation: zero CSS touched, only partners.njk/data edited |
| Overflow /partners/ 360/390/768 | 364 / 375 / 753 — 390+768 clean; the 4 px at 360 is the documented benign off-screen-drawer phantom (overflow_who: every >360 element is a `drawer__*` child at right:670; `body overflow-x:hidden` → nothing cut). My flow/cards add ZERO overflow |
| Lighthouse desktop /partners/ | **a11y 100 · BP 100 · SEO 100 · CLS 0** · LCP 1.88s · 17 failing audits ALL performance-only (host-limited, go-remote gate item 4 — consistent with every prior round) |
| axe-core /partners/ | **ZERO violations** (25 passes) — FAQ flatten + role=img flow + cards all clean |
| CSS minified gate | 52,660 B / 59,392 B (6,732 B headroom) — **byte-identical to round 10** (zero CSS touched). Source 75,018 B (over 70 KB soft-cap — flagged, unchanged) |
| Visual (/partners/ desktop + 360) | flow strip + 2-col card grid + 19-item flat FAQ render correctly — `_build/verify/shots/r11/` |

---

## FILES TOUCHED

- `src/partners.11tydata.js` — faq array re-leveled 6-nested → 19-flat (verbatim); comments updated.
- `src/partners.njk` — FAQ section flattened to /contact/ shape; #partners-process → `.flow` strip + `grid-2` review-cards.
- `_build/battery/run_battery.py` — NEW standing check 11 `faq-flat`.
- Factory tooling (not shipped): NEW `_build/scripts/edge_probe.ps1` (header/body edge diagnostic) · NEW `_build/scripts/kill_probe.ps1` (chrome/probe cleanup) · `shot_anchor.ps1` gained `-Port`/`-Root` (shoot the preview build).
- ZERO CSS files touched. ZERO content machinery touched (intents, schema contract, form contract, section IDs intact).

---

## OPEN ITEMS / STOPPED AT

1. **RESOLVED (founder ruling at audit, 2026-06-13):** #partners-principles
   varied → `grid-3` cards (see (c) FOLLOW-UP above). /partners/ now has
   exactly ONE numbered `.process-diagram` (benefits); no repeat. Re-verified
   green. Within-page variety for /partners/ is complete.
2. **Dead nested-FAQ CSS** now that nested FAQ is forbidden sitewide:
   `.faq__children`, `.faq__child`, `.faq__child-question`,
   `.faq__answer > p + .faq__children` in 09-extensions are permanently
   unused (only /partners/ ever used them). LEFT IN PLACE this round
   (zero-drift safety; the gate has 6.7 KB headroom). Candidate for the next
   source-trim pass. `faq__list--nested`/`section--faq-nested` likewise
   linger (harmlessly) in the battery MANIFEST_WHITELIST.
3. **04-chrome L11 `.container` override is dead** (verified in task a —
   overridden by the canonical 05-tiers `.container`; always 2rem, no mobile
   step). Left UNTOUCHED per founder "no change." A future cleanup could
   delete it with zero visual effect (proven). Not done this round.
4. **Factory note — `--headless=new` chrome process leak on this machine:**
   the full `css_probe_all.ps1` run (22 launches) accumulated stray chrome
   processes and stalled. Zero-drift was instead verified via targeted
   single-page probes (3 unchanged pages match baseline byte-for-byte +
   partners differs as intended), with `kill_probe.ps1` between launches.
   For future CSS-touching rounds, run the probe page-by-page with cleanup,
   or investigate the headless-exit leak.
5. **Unchanged carry-overs (not regressions):** source over 70 KB soft-cap
   (75,018 B — no CSS touched) · Lighthouse perf host-limited (go-remote gate
   item 4) · the 4 px full-chrome drawer phantom at true 360.

STOPPED AT: round-11 complete and fully verified — awaiting founder audit.
Next block (after audit): the about-silo + /pricing/ elevation batch revives.
