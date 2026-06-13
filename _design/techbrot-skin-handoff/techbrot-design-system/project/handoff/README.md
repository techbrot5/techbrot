# TechBrot new-skin handoff — implementation package

Self-sufficient package for the coding agent re-skinning the live 11ty build.
No chat context required: everything referenced here is in this folder.
The locked architecture (tier sequences, Q/A rules, form contract, battery)
lives in the build repo — this package supplies its NEW VISUAL EXPRESSION.

## Drop-in CSS (the skin)
| File | Replaces | Notes |
|---|---|---|
| `00-fonts.SKIN.css` | `00-fonts.css` | Self-hosted woff2 specs: Fraunces var (n+i), Public Sans var, IBM Plex Mono 400/500/600. File list + base.njk preload swap in the header comment. Re-verify metric overrides with fontaine. |
| `01-tokens.SKIN.css` | `01-tokens.css` | Complete re-skin under the enforced names. Cobalt accent `#2B4FD6`, teal focus `#118A7E`, 4-step warm paper ramp, tier tokens preserved. New names ONLY: `--color-critical`, `--color-brass`, `--serif-*-axes`, `--rule-aligned(-sm)`. |
| `02-conversion.SKIN.css` | additions to 07-extensions | Buttons (every state pins fill AND label — see AA-MATRIX.md), cta-band (left-aligned, tier classes), trust-row, review-card, FAQ accordion, quick-5 aligned underscore, phone-cta, disclosure, buyer-card, vs-table, intake form, two-tier link rule. |
| `03-chrome.SKIN.css` | 06-chrome restatement | util-bar, sticky header + dropdown, drawer, dark footer (aligned-segment disclosure), minimal BOFU variants. tb-nav.js behavior contract unchanged. |
| `04-motion.SKIN.css` | new layer | Scroll entrance (CSS-only `animation-timeline: view()`), hover micro-states. `@view-transition` ships COMMENTED — opt-in after top-level-window testing (iframe contexts log benign skipped-transition rejections). |
| `05-motif-rules.SKIN.css` | new layer | The gapped-rule marks (hero rule, pull-quote, quick-5 underscore, disclosure segments), **border-built** (solid borders flanking a transparent gap) — gradients (var-based or classic-stop) were dropped by some CSS processors/capture engines. Hex synced to `--color-accent`; re-tokenize if the css-drift gate allows. Load after 02/tier-common. |
| `06-additions.SKIN.css` | new layer (Stage 2C) | Mobile sticky **call-bar** (auto-hide/reveal, safe-area, `.has-call-bar` space reservation = zero CLS; NOTE: supersedes the "sticky header is the only fixed element" rule by founder order) · proof-strip (light/dark) · breadcrumb · sticky TOC · byline/meta-reviewed · post-card/filter-chips/pagination · calculator family (radio-tiles, stepper, result, CTA handoff) · research dress (stat-cite, fig-caption, dataset-header) · verdict/choose blocks · problem-page pattern · `.rule-mark` real-element gapped mark. |
| `tier-common.css` | layout reference | The tier renders' shared layout — doubles as the RESPONSIVE SPEC (every @media states what stacks/clamps/scrolls). Port rules into the build's layer structure; don't ship as-is. |
| `fonts-preview.css` | — | Google-CDN fonts for viewing these renders only. DO NOT SHIP. |

## Rendered truth
- `tiers/` — the five tier templates restated: t-hub (incl. rich-feel stat/pull-quote/diagram pass), t-mofu, t-guide, t-bofu, t-location (NY reference).
- `pages/` — the two money surfaces as full compositions: `file-review.html`, `contact.html`, plus `404.html` (+ generated `.m360` copies). Form markup carries the locked 24-key contract: field names, services values + order, data-meta hidden set with HTML defaults, honeypot, submit labels.
- `og-template.html` — 1200×630 batch-generator template (swap kicker/title, screenshot; contract in `brand/BRAND-CHAIN.md`).

## Motif system (`motif/`)
`MOTIF-SPEC.md` is the grammar. `motif-align-full.svg` (hub/location hero slot,
560×720, currentColor), `motif-align-single.svg` (cta-band punctuation),
`motif-align-ny.svg` (LOCATION grade — the contour ledger; per-state generation
rule in the SVG header: 16 rows · h24 · pitch 40 · one anchor channel · echo
layer +12/+14 at 12%). Hairline (BOFU) intensity is CSS: `--rule-aligned`.

## Brand chain (`brand/`)
Logo SVGs (light/dark, monogram/horizontal) + `LOGO-SPECS.md` (geometry, clear
space, minimums) + favicon/PWA PNG set + `site.webmanifest` +
`BRAND-CHAIN.md` (base.njk head changes, schema ImageObject updates, OG batch
contract).

## Icons (`icons/`)
8 vendored Lucide copies, stroke 1.75, currentColor, inline-only (never CDN).
⚠ Diff against the official lucide repo before cutover — see `icons/README.md`.

## Verification artifacts
`AA-MATRIX.md` — full computed contrast matrix incl. button states per
surface. `CLASS-MANIFEST.md` — every class the system ships (208, generated
from these CSS sources; powers the dead-class grep). `PLACEMENT-MAP.md` —
component→tier assembly rules. css-drift: the SKIN files contain zero
hardcoded hex outside 01-tokens (rgba tints + the border-built motif marks
noted in-file). Byte cost: 02+03+04+05+06 ≈ 40 KB source pre-minify —
curate per round against the 58 KB minified gate as usual.

## Known placeholders (marked in red mono in renders)
Review-card quotes (founder-supplied Clutch text lands at build) · NAP +
phone (site.json) · OG title/kicker per page.
