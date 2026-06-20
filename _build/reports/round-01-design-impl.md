# Round 01 — Design Re-Implementation · TURN 1 (READ + PLAN, no src edits)
**Date:** 2026-06-20 · **Branch:** preview-11ty · **Mode:** read-only this turn (awaiting plan approval).

## Connection ✅
- Read the Claude Design project **"TechBrot Design System Elevation"** (`0fb63c85-c201-4bca-9941-d1bda1992d10`)
  via the DesignSync connector (read/write scopes already granted). `get_project` + `list_files` + `get_file` all work.
- Read in full this turn: **HANDOFF-MANIFEST.md** (governs) · **Handoff - Claude Code.dc.html** (v1 impl doc) ·
  **Manifest - Template Registry.dc.html** · **QuickBooks Cleanup - Money Page.dc.html** (D1 flagship, 74.5 KB — readability proof).

## 23/23 templates present + accessible ✅ (none missing)
25 families → 23 template files (Location Child covers D4/D5/D6). All present in `list_files`; `get_file` proven on the D1 flagship.
The remaining 22 will each be read in FULL at the start of their implementation batch (avoids loading all into context now).

| Family | Template file | | Family | Template file |
|---|---|---|---|---|
| A1 Home | Home - Template | | D7 Triage | Honest Triage - Template |
| B1 Silo hub | Hub - Template | | E1 Guide | Guide - Template |
| B2 Card-grid hub | Card-Grid Hub - Template | | E2 Glossary | Glossary - Template |
| B3 Listing hub | Listing Hub - Template | | E3 Framework | Framework - Template |
| B4/B5 Location hubs | Location National Hub + Location Sub-Hub | | E4 Blog | Blog - Template |
| C1 Comparison hub | Comparison Hub - Template | | E5 Tool | Tool - Template |
| C2 Comparison | Comparison - Template | | E6 Research | Research - Template |
| D1 Money (66) | QuickBooks Cleanup - Money Page | | F1 Form | Form - Template |
| D2 Prose (177) | Prose - Template | | F2 Pricing | Pricing - Template |
| D3 State pillar | State Pillar - Template | | G1 Legal | Legal - Template |
| D4/D5/D6 Location child (155) | Location Child - Template | | G2 Editorial | Editorial - Template |

## System captured (the locked foundation)
- **Accent roles (never crossed):** Petrol Ink `#0E4A50` (brand/links/marks; `#46B0AC` on dark) · CTA Burnt Clay
  `#BE5240` (fills only, never links) · tie-out green `#157A52` (verification ticks only).
- **Surfaces:** page `#FCFBF8` · sand `#F7F2E9` · inset `#F1EBDF` · card `#FFF` · the one dark band `#0A0F1C` · hairlines `#ECE5D8/#DED6C9/#CBC2B0`.
- **Type:** Fraunces (display) · Geist (body/UI) · Spline Sans Mono (all figures, tabular) — self-host woff2 400/500/600, no CDN.
- **Chrome:** mid-mega nav (74px, one-open, Esc/outside-close) · light editorial footer (mobile `<details>` accordion) · sticky call-bar ≤919px · find-an-accountant = direct link.
- **Per-family viz** (swap-friendly `data-viz` + `data-viz-state`, flat SVG/CSS, CLS-0, numbers mirrored in real text): 4 signature diagrams + 24 icons + isometric feature.
- **Real Intuit badges** present in the project `assets/` (Gold ProAdvisor, QBO L1/L2, Payroll, Bookkeeping) — resolves flip-gate item #4 for held badges (Desktop/Enterprise still PLACEHOLDER).

## Capture-vs-wire (from the handoff)
- **Capture as-is:** all markup + inline styles → tokens (re-cut the 10 CSS layers); section-layout library → Nunjucks macros + `section--*`; the 4 diagrams + icons (parameterized SVG); vanilla nav JS → `tb-nav.js`; scroll-reveal/draw-on + reduced-motion; all JSON-LD/speakable/QAPage/FAQPage/Breadcrumb/Review; every component + utility state.
- **Wire:** form POST (Cloudflare Pages Functions /api/contact·/api/file-review·/api/pillar-lead) + email + honeypot; origin/intent passing (`?origin=`/referrer → `[data-origin-*]`); GA4 `phone_click`+`lead_submit`; per-page front-matter (type + ordered `sections:` + data); real per-page figures into the viz; OG-image template per type.
- **Equity guardrail:** re-skin EXISTING pages without altering heading text / FAQ content / intent / URLs — Equity-GREEN vs `baseline.json` must hold.

## Flags for founder
1. **B4/B5 label swap:** the design registry codes B4=national hub, B5=sub-hub — the *reverse* of our SECTION-SIGNATURE-MAP. Template FILES + URLs are unambiguous, so I'll map by filename+URL, not the letter. (Cosmetic; no risk.)
2. **Page-count deltas:** design registry approximates some counts (B2=6, B3=9) vs our `_page-family-map.txt` (B2=11, B3=12). I'll use our URL→family map as the authoritative "which URLs," reconciled per batch. Totals = 586 both ways.
3. **Form POST handler is backend** (Cloudflare Pages Functions) — needs your Cloudflare project access/confirmation; also flip-gate #3.
4. **Scope is real:** complete re-architecture across ~586 pages. Proposed cadence: per-family batch, founder spot-check on the first page of each new template before fan-out.

## Dev server
Started `npx @11ty/eleventy --serve --port=8080` (binds 0.0.0.0). **Audit URL (Wi-Fi): http://192.168.1.7:8080/**
(other adapters 192.168.11.1 / 192.168.198.1 are VMware virtual — ignore). Serves the CURRENT (old) site until builds land.

## COUNT
Templates readable: 23/23 · Families covered: 25/25 · Live pages to re-implement: 586 · src/ files edited this turn: 0 · Awaiting: plan approval.
