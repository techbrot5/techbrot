# Round 83 — TOOLS/CALCULATORS proof: Bookkeeping Cost Calculator (NEW interactive type)

**STOP-AND-WAIT — NEW-TYPE PROOF GLANCE.** This is the first interactive tool on the
site. Per the build contract, I built ONE proof (plus the minimal hub it needs to be
navigable), ran the full battery GREEN, and am stopping here for your glance before I
fan out the remaining calculators.

---

## 0. CONTEXT CORRECTION (read first)
Your dictated build order's first three items — **(1) /switch/ silo, (2) /resources/
guides+hub+checklists, (3) /accounting-systems/+/platforms/** — and **/reviews/** are
**already built** (rounds 80–82, verified in `_site`). I did NOT rebuild them. The build
correctly resumes at **item 4 (tools/calculators)**, which is what this round delivers.

Remaining-v4 (non-location) genuine count: **~49** (≈37 buildable now + ~12 honesty/data-gated).
The raw machine diff of 166 is inflated by ~117 path-variant duplicates of pages already
built under different slugs. Full breakdown is in my prior message.

---

## 1. WHAT I DID (every file this turn)
**New pages (2):**
- `src/tools/bookkeeping-cost-calculator.njk` + `.11tydata.js` — the proof calculator (t-mofu tool variant).
- `src/tools/index.njk` + `.11tydata.js` — minimal `/tools/` hub (so the calculator breadcrumb has no 404; t-hub, 6 FAQ).

**New asset:**
- `src/assets/js/tb-calc.js` — vanilla-JS calculator island (deterministic, no network, CLS-safe).

**Edited (4):**
- `src/_includes/layouts/base.njk` — load `tb-calc.js` when `includeCalcJs` is set (mirrors the `includeFormJs` gate).
- `src/assets/css/09-extensions.css` — `.calc` component block (token-only; +~1.8KB minified) + a mobile font step-down on the result number.
- `src/_data/ctaLexicon.json` — **+4 sanctioned CTA labels** (see §3, flagged for ratification).
- `_build/build-new-queue.json` — registered `/tools/` + `/tools/bookkeeping-cost-calculator/` (url-set contract).

## 2. PREVIEW URLS
- **https://techbrot-preview.pages.dev/tools/bookkeeping-cost-calculator/**
  → The proof. Change the five dropdowns; the estimate band updates live (no reload, no network). Check: the range NEVER shows a single number, the "estimate not a quote" disclaimer is always visible, and the result hands off to the discovery call. Mobile: the big range number steps down below 480px so the widest string (`$1,800–$2,500+/mo`) doesn't overflow.
- **https://techbrot-preview.pages.dev/tools/**
  → The hub. One live tool card + an honest "in development" list (named, NOT linked — no dead links). 6-FAQ, schema-clean.

## 3. WHAT I THOUGHT / DECISIONS (audit the thinking)
- **Tier = t-mofu (tool variant), per ARCHITECTURE-TRUTH §7.** Hero → calculator → "how it's calculated" (transparency) → AI-summary → related → FAQ → CTA band. Hub = t-hub (signature T-account hero, dark CTA), matching /resources/.
- **Honesty is engineered in, not just stated.** The four bands are **slices of the canonical published range** ($400–$2,500+/mo, == /pricing/ == Sheet 0). The scoring model **cannot produce a number outside that published range** — the top band carries the canonical "+" tail. Output is **always a range, never a point**, and every result + the in-brief + the AI-summary + the FAQ repeat: *estimate from published pricing, not a quote; exact fixed fee confirmed in writing after a free discovery call.* No fabricated precision, no invented figures.
- **Single source of truth for the model.** The same `model` object renders the `<select>`s server-side AND is dumped to `#calc-model` for the JS — server markup and client logic physically cannot drift.
- **Client-only, anonymous, CLS 0.** The calc runs entirely in-browser; nothing is transmitted unless the user books a call. The result area is pre-rendered with default content, so the JS update causes zero layout shift. `<noscript>` falls back to /pricing/ + the discovery call.
- **The five inputs are the exact range-factors named on /pricing/** (transaction volume, accounts, payroll, entities, multi-state sales tax) — so the tool teaches the same model the firm actually prices on.
- **Hub honesty:** the "more tools" roadmap is plain text, deliberately NOT linked (no pages-that-don't-exist), and the ItemList schema carries ONLY the one live tool.
- **Scope decision:** I built the hub alongside the single proof because the calculator's breadcrumb needs a real `/tools/` parent (no-404 floor). The hub is intentionally lean — it fills out as calculators ship.

## 4. ⚑ NEEDS YOUR RATIFICATION — 4 new sanctioned CTA labels
The lexicon gate requires a founder ruling for new CTA text. I added these as the tools-type
needs them; they're flagged `PENDING founder ratification` in `ctaLexicon.json`. Confirm or
swap:
- **"Get your exact fixed fee"** — calculator result → fixed-fee quote (the signature tool→conversion CTA).
- **"See full pricing"** — calculator hero → /pricing/ (parallels the sanctioned "Explore Services").
- **"Skip to the calculator"** — calculator hero in-page anchor (parallels "The Four Trust Pillars").
- **"Open the calculator"** — /tools/ hub → live tool.
(Conversion + phone CTAs use the canonical "Book the discovery call" / "Speak to a ProAdvisor" unchanged.)

## 5. VERIFICATION (battery GREEN)
- **BATTERY PASSED — all checks green.** (`_build/reports/_battery-out.txt`)
- **url-set:** 526 built URLs all within baseline∪queue (the 2 new URLs registered).
- **cta-lexicon:** 16 distinct labels, all canonical/sanctioned/machinery.
- **faq-min-6:** hub carries 6 FAQ; calculator carries 6. ✓
- **variety #12a/#12b:** PASS (≤1 numbered system per page).
- **design-fidelity:** PASS (tier-correct component present).
- **manifest:** all classes within manifest∪bundle∪whitelist (no new undeclared classes; `.calc*` are token-only in 09-extensions).
- **CSS byte gate:** 79,775B minified / 83,968B hard gate ✓ · source 116,790B / 122,880B soft-cap ✓.
- **JSON-LD:** both pages' graphs parse; calc-model JSON parses (5 inputs · 4 bands).
- **Env safety:** preview build renders `noindex, nofollow` (fail-closed) ✓.
- **Honesty:** canonical pricing only; founder-name-zero; not-Intuit disclosure on both pages; no fabricated stats/reviews. ✓
- **CLS:** 0 by construction (reserved result area).
- **Overflow:** mobile step-down added for the widest range string; **LIVE axe/overflow @360/390/768 remains the founder-machine flip-gate** (chrome-leak rule — not run here).

## 6. COUNT
COUNT: total pages live = 520 · re-skinned (142) + growth this phase = 378 · pages added THIS turn = [/tools/, /tools/bookkeeping-cost-calculator/] · remaining in current cluster (tools/calculators) = ~8 calculators (cleanup-cost-estimator, quickbooks-plan-selector, payroll-cost-calculator, sales-tax-rate-lookup, breakeven-calculator, cash-runway-calculator, 1099-deadline-calculator, business-budget-template) · next cluster = blog (NEW type, proof-first, 8 seed posts)
*(Note: measured filesystem count = 520 non-dev pages incl. the 2 new; reconciled the running total to the actual `find` count.)*

## 7. OPEN ITEMS / NEXT / STOP STATE
- **STOPPED for your glance** (NEW-type proof gate). On your OK I fan out the remaining ~8 calculators on this proven pattern, then move to the blog proof (8 seed posts, per your decision).
- **Decisions needing your word:** (a) ratify the 4 CTA labels (§4); (b) confirm the calculator's band model + honesty framing reads right; (c) confirm you're OK that I built the lean hub alongside the single proof.
- The remaining 8 calculators include 2 that need a thought before building: **sales-tax-rate-lookup** (real rates change constantly — I'd build it as "we look it up with you on the call," NOT a live rate database we can't keep accurate) and **quickbooks-plan-selector** (must not quote Intuit plan prices — defer dollar figures to Intuit, recommend on fit). I'll flag each at build time.
