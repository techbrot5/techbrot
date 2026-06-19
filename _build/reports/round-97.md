# Round 97 — Frameworks hub PROOF (Compounding Reconciliation Drift) + capture-loop setup

**Phase:** GROWTH (flip held). **NEW TYPE — PROOF ONLY; STOP for founder glance before fan-out.** **Battery:** GREEN.

## WHAT I DID
### A) Framework proof page (the type-definer)
- **/frameworks/compounding-reconciliation-drift/** (t-guide, slug fw-crd) — the first TechBrot coined-framework DefinedTerm page. Defines the concept cleanly (how small un-caught reconciliation gaps compound period-over-period in QuickBooks, non-linearly, like interest on a debt), why it happens, how it shows up, how it's diagnosed, how a cleanup reverses it, and how the monthly close prevents it. 8 FAQ.
- **DefinedTerm in a NEW DefinedTermSet** — `@id .../frameworks/#set`, "TechBrot Accounting & QuickBooks Frameworks" — the owned-IP citation asset. WebPage + DefinedTerm + BreadcrumbList + FAQPage.
- Ties to the money pages that already use the term (/quickbooks/cleanup/, /accounting/bookkeeping/cleanup-bookkeeping/, /quickbooks/reconciliation/why-reconciliation-fails/, /pricing/) — links, doesn't restate.

### B) Proof/review capture loop (founder ask — capture now, publish nothing)
- `CAPTURE-TEMPLATES.md` §7 **Engagement Results** (for future /results/ + /case-studies/) + §8 **Reviews & the post-engagement review-request loop**.
- `_build/data/engagement-results.json` (collecting, N≥5 substantiable + publish_ok gate) + `_build/data/reviews-pipeline.json` (review-request loop; AggregateRating OFF until N≥5 real; 2 real Clutch noted to migrate as REV-0001/0002).
- Confirmed the existing research pipeline (6 datasets + intake lead-source/AI capture) intact + honest at N=0/collecting. **Zero fabrication; nothing publishes until real + substantiable.**

## DECISIONS / HONESTY
- The framework is a **named diagnostic CONCEPT / coined lens — NOT a statistic or study.** ZERO invented numbers; "compounding/non-linear" is a described mechanism, never a measured figure. Framing throughout: "a framework we use to describe/diagnose this pattern." This is real owned IP, not dressed-up jargon — it explains *why* neglected files get disproportionately harder to fix.
- Canonical pricing only (cleanup $1,500–$15,000+ → /pricing/). Founder-name-zero; not-Intuit; no AggregateRating/Review schema. Valid intents (file-review, cleanup).
- Breadcrumb "Frameworks" is NON-linked text for the proof (hub ships in fan-out).
- ⚑ FLAG (for fan-out, not blocking): the cleanup money pages still carry their own inline DefinedTerm node for this term — in the fan-out pass, point those at this page's `#term` @id so there's ONE canonical DefinedTerm per framework.

## VERIFICATION
- BATTERY GREEN (clean rebuild). url-set 582 · faq-min-6 (8) · faq-schema-verbatim PASS · founder-zero · variety-12a ≤1 · css 80,259B/83,968B.
- **1 fix iteration:** faq-schema-verbatim failed (idx 5,7) — the data file copied the glossary `stripTags` (tags→space), which inserts a phantom space before punctuation when a closing tag abuts it (`</a>.`, `</em>;`). Switched to the money-page pattern (tags→empty). LESSON: framework/glossary clones must use tags→"" stripTags when FAQ answers contain inline tags adjacent to punctuation.
- equity n/a (net-new).

## COUNT
COUNT: total pages live = 577 (orientation `*.html` non-dev; round-96 576 + 1) · re-skinned (142) + growth = 435 · pages added THIS turn = [/frameworks/compounding-reconciliation-drift/] · remaining in cluster = STOP (proof; fan-out = 3 frameworks + hub on founder GO) · next = founder glance

## ⏸ STOP — FOUNDER GLANCE (new-type proof)
PREVIEW: https://techbrot-preview.pages.dev/frameworks/compounding-reconciliation-drift/
On GO, fan out in ONE turn: Historical Accounting Debt (catch-up) · TechBrot Setup Protocol (setup) · Migration Integrity Protocol (migration) + the /frameworks/ hub (DefinedTermSet, links all 4) + repoint the money-page inline DefinedTerms to the canonical framework pages.

## SIDE DELIVERABLES THIS TURN (no build)
- Capture loop set up (above) — running now, costs calendar time, publishes nothing.
- FLIP-GATE checklist delivered to founder (11 items; critical path = LIVE axe/overflow probes on ~430 growth pages [founder's machine] · real form handler · Intuit badge artwork [founder supplies]).
- HELD: guarantee page (real terms only) · scheduler (flip infra, parked).
