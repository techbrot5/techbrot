# ROUND 21 — DESIGN-FIDELITY + RANK/UX AUDIT (at the /online/ STOP)

**Audit only. Nothing rebuilt.** Run before asking for t-mofu approval, per founder
instruction. Method: each page's actual section structure compared against its
handoff tier template (`handoff/tiers/<tier>.html`) + the authoritative
`handoff/PLACEMENT-MAP.md` (the component→tier assembly contract). No self-
justification — where the build diverges, it's stated plainly.

## GROUND TRUTH — what the handoff tier templates actually specify
The handoff is **richer and more tier-specific than what shipped.** Per template +
PLACEMENT-MAP, each tier has signature components:
- **T-HUB:** dark `hero__motif` (ledger-geometry SVG) · tldr · quick-5 · **buyer-card
  routing** ("Where are you, actually?") · a **judgment block** = `stat-row`
  (+`stat__delta`) + **`pull-quote`** + **`flow`** SVG diagram · trust-row · faq ·
  `cta-band__motif`.
- **T-MOFU:** compact hero (+ motif row or `hero--rule`) · tldr · quick-5 ·
  **`vs-table`** (+verdict/choose-grid) · **buyer-card routing** · **problem pattern
  (`error-badge`/`fix-steps`/`call-breakout`) for the error silo** · **`byline-block`
  + `meta-reviewed`** · faq · cta-band. Review-cards: **never** (verified quotes only).
- **T-GUIDE:** compact hero · tldr · quick-5 · **sticky `toc`/`guide-grid`** ·
  **`article.prose` long-form** (h2 sections) with **`byline-block`** at top, a
  **`pull-quote`**, and **`meta-reviewed`** at foot · faq. Review-cards: **never**.
- **T-BOFU:** `hero--rule` · tldr · quick-5 · numbered `checks-list` · trust-row +
  **one verified `review-card` quote** · **full `intake-form` (24-key)** · faq ·
  `cta-band` bofu tint.
- **review-card** in the handoff is a **verified-review-quote** component
  (`review-card__quote` blockquote + `__byline`/`__verified`), PLACEMENT-MAP-restricted
  to "verified quotes only, max 2," BOFU (opt on hub). NOT a generic content card.

## PART 1 — STRUCTURAL FIDELITY (5 pages)

### / (HOME · t-hub) — the control
**IMPLEMENTS the handoff.** Uses the signature t-hub components: `buyer-card` ×6
routing, real `vs-table` (compare), **verified** `review-card` quotes (with
`__quote`/`__byline`/`__verified`), a diagram `figure`, tldr, quick-5, process-diagram,
trust-row. Minor deltas only: judgment block uses `figure-judgment.svg` + review-card
rather than the handoff's `flow`+`pull-quote`+`stat__delta`. **Verdict: implements the
template.** This confirms the founder's read — home is the benchmark.

### /quickbooks/ (HUB · t-hub) — PASSES, generic
Has the dark hero motif (layout) ✓, stat-row, checks-list, prose, ai-summary, trust-row,
faq. **Diverges:** NO `buyer-card` routing (the t-hub signature, present on home, absent
here) · NO `flow` diagram · NO `pull-quote` · NO `stat__delta`. Engagements/products
render as **generic `review-card` + grid-2/3 `stack-8`** instead. **Verdict: passes
battery with generic/improvised structure — does NOT implement the t-hub template at
home's level.**

### /accounting/payroll-management/ (t-bofu) — PASSES, partial
Best of the elevation pages: uses `hero--rule` ✓, `pull-quote` ✓, `buyer-card` (signals)
✓. **Diverges:** NO `intake-form` — the defining t-bofu component (the page ends faq→
cta-band; the 24-key contract form lives only on /contact/) · NO `proof-strip` · pricing
tiers use **generic `review-card`** (not verified quotes) · checks-list lacks the
numbered `num` treatment. **Verdict: passes; closer than the others but the BOFU form —
the conversion centerpiece — is absent.**

### /quickbooks/help/error-codes/h202/ (t-guide; = the approved proving page + the whole new cluster)
**Diverges substantially.** Built as a **sequence of card-grid sections** (disclosure ·
stat-row · prose · quick-5 · grid-2 `review-card` causes · `process-diagram` fix · grid-3
signals · prose+trust-row operator · faq · stack-8 related). The handoff t-guide is an
**`article.prose` long-form with a sticky `toc`/`guide-grid`, a `byline-block` at top, a
`pull-quote`, and `meta-reviewed` dates at foot** — NONE of which are present. Separately,
PLACEMENT-MAP designates the **error/symptom silo (~40 pages) for the t-mofu problem
pattern (`error-badge`/`fix-steps`/`call-breakout`)** — also not used. `review-card` used
generically (map says never on guide). **Verdict: passes battery; implements NEITHER the
t-guide article structure NOR the problem-pattern. This pattern was set by h202 (approved)
and propagated to all 6 children + the hub this round.**

### /quickbooks/online/ (NEW · t-mofu)
**Diverges.** Uses credentials stat-row · prose definition · quick-5 · grid-2 `review-card`
(plans) · grid-3 `stack-8` (fit) · grid-3 `review-card` (not-fit) · grid-3 `stack-8`
(services) · grid-3 `review-card` (ecosystem) · prose+trust-row · faq · stack-8 related.
**The t-mofu signatures are all absent:** NO `vs-table` (a QBO-vs-alternatives /
plan-comparison page is the textbook vs-table case — the handoff t-mofu's centerpiece IS
a vs-table) · NO `buyer-card` routing · NO hero motif/`hero--rule` · NO `byline-block`/
`meta-reviewed`. `review-card` used generically ×3 (map says never on mofu). **Verdict:
passes battery with improvised generic structure — does NOT implement the t-mofu template.**

## PART 2 — HANDOFF UNDER-USE (is the design richer than what shipped?)
Yes, materially. Components the handoff defines that the elevation pages (mofu/guide/bofu/
non-home hub) **do not use at all:** `buyer-card` (routing — only home + payroll-signals),
`vs-table` (only home), `flow` SVG diagram (none), `pull-quote` (only payroll + home-ish),
`toc`/`guide-grid` (none), `byline-block` + `meta-reviewed` (none — yet PLACEMENT-MAP puts
them on every mofu + guide page), `proof-strip` (none), `stat__delta` (none), `intake-form`
on BOFU (none), the problem pattern `error-badge`/`fix-steps`/`call-breakout` (none, on ~40
error pages). The elevation palette collapsed to **~5 primitives** (review-card, stack-8,
grid-2/3, process-diagram, trust-row) where the handoff specifies **~15+ tier-specific
components.** Rough gap: built pages use ≈5 of ≈15 components; home uses ≈10.

## PART 3 — RANK + UX BAR
Content depth is genuinely strong on every page (real citable specifics: the five causes,
qbregistration.dat path, status-code variants, pricing bands, the 4 QBO tiers, honest
"when not QBO"). Accessibility/equity/CLS/gate are all green. **But on the design/UX axis:**
- **Mid-body:** real depth, but delivered as **generic prose in styled card boxes**, not the
  editorial/article/diagram treatments the design intends (no flow diagrams, no pull-quotes,
  no article long-form, no vs-tables, no routing cards).
- **Within-page variety:** I alternated 3–4 primitives (stack-8 / review-card / process-
  diagram) — the battery's "no adjacent-alike" passes, but it's the **same small palette
  recycled**, not the design's richer rhythm.
- **Conversion:** correct CTA tier + a real "this is a books problem we fix" seam are present
  (adequate) — but the design's purpose-built conversion components (buyer-card routing,
  proof-strip, BOFU intake-form) are absent.
- **Mobile:** reads as a clean **stacked template**, not the premium editorial page the
  handoff renders (article + sticky TOC + byline + diagrams).
Per page: **/ = competes at top bar · /accounting/payroll-management/ = passes (partial) ·
/quickbooks/ = passes but generic · /quickbooks/help/error-codes/h202/ (+cluster) = passes
but generic · /quickbooks/online/ = passes but generic.**

## VERDICT (one line)
**The founder's concern is well-founded: home implements the handoff, but the round-16→21
elevation pages (hub/mofu/guide/bofu — including the approved h202 pattern and everything
built this round) PASS the battery while carrying old-HTML section sequencing re-skinned
onto a ~5-primitive generic palette, systematically under-using the design's tier-specific
components — a real, widespread design-fidelity gap that should be closed BEFORE mass-
producing desktop/enterprise and the rest of the QB-remainder.**

## PROPOSED FIX SCOPE (build nothing yet — for founder ruling)
1. **Re-base the elevation pattern on the handoff tier templates** (not h202/research-hub/
   old-HTML). Make the 4 tier renders + PLACEMENT-MAP the structural source of truth.
2. **t-mofu (products + error silo):** add `vs-table` where comparison is the job
   (/online/ plan + alternatives; desktop/enterprise vs QBO), `buyer-card` routing,
   hero motif/`hero--rule`, `byline-block`+`meta-reviewed`. **Decide the error-silo
   pattern:** adopt the purpose-built problem pattern (`error-badge`/`fix-steps`/
   `call-breakout`) — recommended — or the t-guide article; either way add `byline-block`.
3. **t-guide (guides/research):** rebuild to `article.prose` + sticky `toc`/`guide-grid`
   + `byline-block` + `pull-quote` + `meta-reviewed`.
4. **t-hub (QB hub + future hubs):** add `buyer-card` routing + a judgment block
   (`flow`/`pull-quote`/`stat__delta`).
5. **t-bofu:** add the `intake-form` (or ratify route-to-/contact/), `proof-strip`, one
   verified `review-card` quote; reserve `review-card` for verified quotes only.
6. **Affected set:** the 7 error-codes pages + /online/ (re-pattern), and a review pass over
   the ~27 round-16→18 elevated pages for the same gaps. New CSS likely needed for the
   currently-unused components (`buyer-card`/`vs-table`/`flow`/`toc`/`byline-block` etc.) —
   confirm they're in the bundle or port them from the handoff SKIN CSS, re-check the 58KB gate.

**Recommendation:** pause QB-remainder mass-production. Re-prove ONE page per tier against
the handoff template (a real design-fidelity proving page, not a battery-green one), get
founder sign-off, then replicate. The content is already strong — this is a structural/
component re-architecture, not a content rewrite.
