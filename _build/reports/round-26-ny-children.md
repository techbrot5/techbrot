# Round 26 — find-an-accountant PHASE 2: NY children (autonomous waves, R7)
Date: 2026-06-15 · running report, one section per wave · per R1.
38 NY children across ~8 waves of ~5, t-location, full protocol, equity GREEN required.
Two hard stops only: an unfixable equity failure, or a genuine honesty doubt R5 doesn't cover.

---

## WAVE 1 — cities-hub + 4 cities · DONE · commit `9056d8a`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| Cities hub | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/ | statewide coverage (62 counties) + routing to the dedicated city pages |
| Albany | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/albany/ | Capital Region, state-govt economy, 8% (4% NYS + 4% Albany County), NO NYC UBT, $110 clothing exemption |
| Bronx | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/bronx/ | Bronx County, 8.875% (4%+4.5%+0.375% MTA), 4% UBT ($95K floor), Hunts Point food center, CRT is Manhattan-only |
| Brooklyn | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/brooklyn/ | Kings County, 8.875% + 4% UBT, DUMBO/Williamsburg creative economy, CRT doesn't apply |
| Buffalo | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/buffalo/ | Erie County 8.75% (4%+4.75%), upstate (NO NYC UBT/CRT/8.875%), Niagara USD/CAD cross-border |

**Decisions/judgment calls (audit trail):**
- The cobalt-vocabulary instruction (reference the pillar, use only cobalt classes) worked — **zero
  class/CTA/intent drift** this wave (vs the pillar's 27 reconciliations). The contract injection +
  the established tier vocabulary is paying off.
- **Cities-hub 6th FAQ:** the baseline cities-hub has only 5 FAQ; the faq-min-6 gate requires 6+. I
  added one genuine coverage FAQ ("What if my New York city doesn't have a dedicated page yet?" →
  statewide-coverage answer). This is legitimate content-to-goal enrichment, not fabrication.
- **Buffalo overflow fix:** the agent combined `grid-3` with `proof-strip`/`proof-strip__item` on the
  tax section, which constrains item width so a long `<p>` hit 1273px (overflow at every viewport).
  Stripped to clean `grid-3` + `stack-8` (matching the other cities) → clean.
- **Honesty (R5):** no city page asserts unsubstantiated "real outcomes"; the 2 real Clutch reviews
  live only on the pillar (not duplicated/fabricated per-city); no personal name in visible content
  (David Westgate only in `reviewedBy` schema @id). No honesty doubt arose → no hard stop.
- **Minor sibling inconsistencies** (cosmetic, flagged not fixed): CTA query params vary slightly
  (`state=`/`city=`/`source_type=` extras); eyebrows differ ("Quick answers" vs "For AI engines");
  one agent added a non-contract intake H2 ("Two ways to start"). All additive/harmless; the design
  reset normalizes skin anyway.

**Verification (all 5):** content-equity GREEN (headings + FAQ verbatim; justified: newsletter) ·
t-location · design-fidelity PASS (hero__motif) · axe 0 · overflow clean 360/390/768 · CLS 0 (buffalo
rep) · a11y/BP/SEO 100 · CSS 55,933 B.

**NEXT:** wave 2 — cities manhattan, new-york-city, queens, rochester, staten-island (continuing, no stop).
