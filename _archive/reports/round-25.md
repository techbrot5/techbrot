# Round 25 — find-an-accountant PHASE 1: NY pillar (t-location PROVING page)
Date: 2026-06-15 · Branch: preview-11ty · own review (not a batch) · per R1.
The t-location tier was NEW + unproven. This page proves it. Verdict in §5.

---

## 1. WHAT I DID
Built `/find-an-accountant/new-york/` — the New York pillar — as the first t-location page,
migrated from the 2,580-line baseline under the MIGRATION-PROTOCOL (content-to-goal, visual-floor).
Files: `src/find-an-accountant/new-york.njk` + `.11tydata.js`. Plus location-tier infrastructure
(intents, manifest whitelist, equity-exception) and R5/R6 in BUILD-TRACKER. Commit `0821835`.

## 2. PREVIEW URL
**https://techbrot-preview.pages.dev/find-an-accountant/new-york/**
What to check: (a) the **honesty reframe** — "Representative New York outcomes." (formerly "Recent
New York results.") now reads as explicitly illustrative, no real-client claim; (b) the genuine NY
depth (NYC UBT, 8.875% breakdown, IOLTA, CHAR500, ASC 606 — not a mad-lib); (c) the dark
hero--location + NY contour motif; (d) reviews = only the 2 real Clutch reviews; (e) no individual
name as author (firm byline; David Westgate only in the operator/reviewer card).

## 3. WHAT I THOUGHT / DECISIONS
- **Honesty (your ruling b / R5):** the 4 NY outcome figures couldn't be substantiated as real, so
  the section is reframed to representative/illustrative — operational substance (the patterns,
  problems, work) kept; the "real engagement outcomes, anonymized by client request" claim dropped.
  Composite-scenarios kept their existing honest "composite, anonymized, patterns real" framing.
- **t-location is real, not a swap-the-name template:** the page carries deep, genuinely-NY content
  (5 boroughs vs upstate, UBT, MTA surcharge, RITA/PSD locals, AB5, CHAR500, IOLTA). That depth is
  the template-quality bar — CA/TX/FL/IL inherit the *structure + rigor*, with their own real state
  tax content (CA AB5/district; TX/FL no-state-income-tax; IL replacement/Chicago lease).
- **Tier-establishing reconciliations I had to make (first page of a new tier):** the build agent
  over-invented classes (state-glossary, team-card__*, review-card__author/context/stars,
  section--dark) and CTA labels — I reconciled them to the cobalt vocabulary (stack-8 / byline-block
  / review-card / section--alt) and the canonical CTA lexicon, so the tier uses the shared kit.
- **State intents:** added `new-york` + `new-york-advisory` (the `__state_pillar__`/`__state_advisory__`
  pattern filled for NY). The battery's intent check is static; I left an in-file note to make it
  state-slug-aware (so 50 states don't need 100 hand-added intents) when the location silo scales
  post-redesign. Whitelisted `page--location` (tier bodyClass, like page--mofu).

## 4. VERIFICATION
| check | result |
|---|---|
| content-equity | **GREEN — 72 baseline headings · 17 FAQ · 30 schema types** all accounted (justified: the reframed "Recent New York results." + "The monthly brief.") |
| tier / design-fidelity | t-location · PASS (hero__motif + proof-strip + buyer-card + byline-block) |
| axe | **0 violations** (fixed 2: a dark-hero `<strong>` contrast + a misused `<dl>` proof-strip in the buyer-cards) |
| overflow 360/390/768 | **clean** (fixed a real 768 overflow: the "by the numbers"/outcomes `stat-row` had too many items → switched to wrapping `grid-3`) |
| CLS / a11y / BP / SEO | **0 / 100 / 100 / 100** |
| CSS bytes | 55,933 / 59,392 B — PASS (zero new CSS) |
Honesty: no fabricated specifics; reviews = the 2 real Clutch; no founder/personal name in visible content.

## 5. t-LOCATION VERDICT
**TIER VALIDATED for post-redesign state build-out.** The t-location layout (dark hero--location +
per-state hero__motif, breadcrumb, in-brief, sticky call-bar, cta-band) + the cobalt mid-body kit
(proof-strip, buyer-card routing, intake-form state variant, byline-block, meta-reviewed, stack-8,
grid) compose into a genuinely strong, deeply-local, gate-passing page. The tier works.
**Two notes carried forward (not blockers):**
1. **State-intent scaling** — generalize the battery's intent check to recognize `<state>` /
   `<state>-advisory` via the `__state_pillar__` lookups, rather than per-state intent keys, when the
   location silo scales (post-redesign).
2. **Location CTA lexicon** — I normalized the "Call directly" button from "Call (877) 751-5575" to
   the sanctioned "Speak to a ProAdvisor" to pass the lexicon. If you'd prefer location call-buttons
   to show the actual number (good local UX), that's a one-line lexicon addition — your call.

## 6. OPEN ITEMS / NEXT / STOP
- **STOPPED — own review of the NY pillar.** Per spec, the 39-page NY tree + the 4 state landings
  wait until you sign off the t-location pattern here.
- On sign-off (PHASE 2): NY children in ~5-page protocol waves (cities → industries → service
  children) + the CA/TX/FL/IL landings on this proven pattern (real per-state tax content).
- Deploy order reminder: find-an-accountant deploys after QB silo 1 (6 pages left: 5 migration
  children + speak-to-expert solo) + vs (5) + partners (1). Accounting silo LAST.
- HELD: #4 research-log N=0 · #5 tiers decided on preview · #2 footer WCAG queued.
