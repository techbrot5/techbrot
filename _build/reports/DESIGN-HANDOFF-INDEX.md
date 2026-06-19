# TechBrot — Design Re-Architecture hand-off package
**Delivered:** 2026-06-19 · **From:** Code · **Phase:** pre-flip complete visual redesign (NOT a reskin).

This folder is the complete package for the redesign. Read in this order:

1. **`DESIGN-CONTRACT.md`** — the binding FREE-vs-FROZEN rules. Read FIRST.
   - FREE: all visuals, layout, new/removed/replaced components, per-type distinct UX (hubs ≠ money ≠
     guides ≠ locations), distinct AI-summary + final-CTA treatments per type.
   - FROZEN: every URL · all content/copy · headings + their question-form wording · the FAQ as a Q&A
     block whose visible text matches FAQPage schema verbatim · TL;DR/speakable selectable text ·
     valid heading hierarchy · the JSON-LD graph. Code re-attaches schema to your new design.
2. **`SECTION-SIGNATURE-MAP.md`** — the 25 page-type families: each family's ordered section list, its
   richest representative, how many live pages inherit it, and per-type AI-summary/final-CTA notes.
   This tells you "one redesign of type X covers N live pages."
3. **`kitchen-sink/`** — 25 reference pages, ONE per family. Each is the UNION of every section variant
   that type uses, in canonical order, with real composite content, on the CURRENT component system
   (your "before"). Open these to see the complete component inventory for each type. Each page opens
   with a dashed devlabel box stating its family, live-page count, and sub-shapes covered.
4. **`KITCHEN-SINK-SPEC.md`** — how the reference pages were assembled (for traceability).
5. **`live-urls-v5.txt`** — all 586 live URLs (the full surface the redesign re-skins in place).

## The 25 kitchen-sink references (file → family → live pages it represents)
- `kitchen-sink-a1-home` — Home (1)
- `kitchen-sink-b1-silo-hub` — Silo home hub (4: /quickbooks/, /accounting/, /accounting/services/, /accounting/bookkeeping/)
- `kitchen-sink-b2-cardgrid-hub` — Card-grid sub-hub / index (11)
- `kitchen-sink-b3-listing-hub` — Light listing hub (12: glossary/blog/tools/frameworks indexes) · DARK final-CTA (hub convention)
- `kitchen-sink-b4-location-subhub` — Location sub-hub, cities/industries (10)
- `kitchen-sink-b5-location-national-hub` — Location national hub (1; only page with the state-router)
- `kitchen-sink-c1-comparison-hub` — Comparison hub (2)
- `kitchen-sink-c2-comparison` — Comparison page (21: role/structure + competitor + product sub-shapes)
- `kitchen-sink-d1-money` — Service / money page, card+diagram (66) · includes BOTH conversion seams (intake-form + call-block)
- `kitchen-sink-d2-prose` — Prose template, informational + help/error (177 — the largest family)
- `kitchen-sink-d3-state-pillar` — State pillar (5; the densest type, ~29 sections)
- `kitchen-sink-d4-city-child` — City child (55)
- `kitchen-sink-d5-state-service` — State service child (68)
- `kitchen-sink-d6-industry-child` — Industry child (32)
- `kitchen-sink-d7-location-triage` — Location triage / honest-triage (17; disclosure-above-fold discipline)
- `kitchen-sink-e1-guide` — Long-form FAQ/guide with TOC sidebar (7)
- `kitchen-sink-e2-glossary` — Glossary entry (46)
- `kitchen-sink-e3-framework` — Framework / coined-concept page (4)
- `kitchen-sink-e4-blog` — Blog article (8)
- `kitchen-sink-e5-tool` — Tool / calculator (9; three JS-island flavors)
- `kitchen-sink-e6-research` — Research flagship (1)
- `kitchen-sink-f1-form` — Conversion form endpoint (2: /contact/, /quickbooks/file-review/)
- `kitchen-sink-f2-pricing` — Pricing page (11)
- `kitchen-sink-g1-legal` — Legal document (4; no hero, no CTA)
- `kitchen-sink-g2-editorial` — Editorial / trust standalone (6: about/trust/partners/reviews)

## Two realities to design around
1. **Two body languages today** — 177 prose pages (D2) vs 66 card/service pages (D1). The single
   biggest re-architecture lever; decide deliberately whether to keep them distinct or unify.
2. **Location children**: CA/TX/FL/IL are partial-generated/consistent; NY is hand-authored per page.
   Design the TYPE once; Code re-aligns NY to your design.

## Notes on the reference files
- Each `kitchen-sink/*.html` is **self-contained**: the production `site.min.css` is inlined, so the
  page renders standalone. **Fonts fall back to system** (the brand faces — Fraunces / Inter / JetBrains
  Mono — are defined in the project's `tokens/fonts.css`; the inlined CSS references them by absolute
  path, which won't resolve here). Treat type rendering as approximate; structure/spacing/color are true.
- These pages are intentionally LONGER than any single live page (they show every variant at once).
- No JSON-LD is included in the reference bodies — schema is re-attached by Code post-redesign.
