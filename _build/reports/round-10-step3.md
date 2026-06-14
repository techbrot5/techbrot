# ROUND 10 · STEP-3 STOP REPORT — skin transplant + tier-layout conversion
Date: 2026-06-13 · Design-system changeover, block 1 of 3 (steps 1–3).
STOPPED per the sequence; steps 4–6 await this audit. Standalone per the
report rule; ends with OPEN ITEMS / STOPPED AT.

## Step 1 — probe anchor
Pre-changeover computed-style anchor archived:
`_build/verify/css-probe-pre-changeover.txt` — 20 fingerprints (10 pages ×
1280/360). Its file-review@1280 cell carries the STABLE hash `2a94e234`
(confirmed by consecutive re-probes; round-9's batch file held one
unreproducible noisy cell there).

## Handoff fetch + inventory
Fetched from the supplied URL (233 KB gzip → 1.1 MB tree). **Inventory
COMPLETE — nothing missing**: 7 SKIN css files, tier-common (responsive
spec), 5 tier renders, pages/ (file-review, contact, 404 + .m360 copies),
motif trio + MOTIF-SPEC, full brand chain (favicons, PWA set, webmanifest,
logos, LOGO-SPECS, BRAND-CHAIN), 8 icons, AA-MATRIX, CLASS-MANIFEST (208),
PLACEMENT-MAP, og-template. `skin-tokens-draft.css` present and EXCLUDED
(R2); `fonts-preview.css` present and never shipped.

## Step 2 — transplant
**Install** (`_build/extract_css.py` rewritten as the SKIN installer; old
extractor + old skin archived in `_build/archive/old-skin/` — no git, so
archived not deleted; the shipping bundle carries none of it):
| Bundle file | Source | Bytes |
|---|---|---|
| 00-fonts.css | 00-fonts.SKIN + build-time metric fixes | 3,218 |
| 01-tokens.css | 01-tokens.SKIN (only token source, R2) | 7,959 |
| 02-base.css | KEPT (locked structural floor) | 9,302 |
| 03-conversion.css | 02-conversion.SKIN · R1 | 19,260 |
| 04-chrome.css | 03-chrome.SKIN · R1 | 8,337 |
| 05-tiers.css | tier-common PORTED (fallback @font-face deduped) · R1 | 7,493 |
| 06-motif-rules.css | 05-motif-rules.SKIN · R1 + cascade fix | 1,556 |
| 07-motion.css | 04-motion.SKIN (@view-transition COMMENTED) | 2,976 |
| 08-additions.css | 06-additions.SKIN · R1 | 13,362 |
| 09-extensions.css | session file (empty at install) | 317 |

**R1 applied + verified**: every `#2B4FD6`→`var(--accent)`,
`#3D63E8`→`var(--color-accent-soft)`; the installer hard-fails if either
hex survives. Marks confirmed RENDERING at full resolution (BOFU hero
gapped rule + quick-5 aligned underscores —
`shots/changeover/_bofu-marks-zoom.png`). One cascade defect found and
fixed during install: 03-chrome ships a gradient footer-disclosure mark
while 06-motif-rules overrides the same `::before` with the border-built
version — without also clearing the background, the gradient paints the
mark's 4px gap. The installer adds `background:none` to the override.

**Fonts**: publicsans-var + ibmplexmono-400/500/600 latin woff2 fetched
(26.8 KB + 3×~15 KB); Fraunces pair carried over. **Metric overrides
re-verified against the real binaries** (capsize method; both fonts set
USE_TYPO_METRICS): declared values were off and are corrected at install —
Fraunces ascent 92→97.8, descent 24→25.5, size-adjust 105.5→106.8;
Public Sans ascent 97→95, descent 26→22.5, size-adjust 100.8→102.9.
Final CLS arbiter remains Lighthouse in step 8.

**Icons**: all 8 diffed against the official lucide repo by parsed
geometry. 5 match exactly; **3 real drifts** — menu (rows 6/12/18 vs
official 5/12/19), phone, star — replaced with official geometry inside
the handoff styling frame (20px, stroke 1.75), per the order.

**Brand chain**: head updated per BRAND-CHAIN.md (theme-color #FBFAF7,
SVG favicon = new mark, favicon-32, apple-touch, `/site.webmanifest`
passthrough, preload swap inter→publicsans); logo/monogram SVGs installed;
old PNG marks archived. Schema ImageObject/logo update lands at step 5
with the no-traces pass. **R3** (OG generator against self-hosted fonts)
queued for the OG batch round.

## Step 3 — layout conversion (machinery fenced)
Five tier layouts rebuilt from tiers/ + 03-chrome + tier-common's
responsive spec + PLACEMENT-MAP:
- **t-hub** — dark hero + motif-align-full (currentColor accent-soft),
  inverted hero buttons, light cta-band on hub mist. No call-bar.
- **t-location** — dark hero + **motif-align-ny contour ledger**,
  breadcrumb, call-bar ON, hub tint.
- **t-mofu** — compact paper hero (hero--rule opt-in `heroRule` only when
  no motif row), breadcrumb, call-bar ON, guide tint.
- **t-guide** — compact hero, breadcrumb, **no call-bar**, guide tint.
- **t-bofu** — minimal chrome, compact hero with the gapped-rule
  signature, breadcrumb, call-bar ON, bofu tint.
Chrome partials re-cut to the 03-chrome vocabulary (util-bar · sticky
header with dropdowns + is-scrolled compression · drawer with accordions ·
dark footer with aligned-segment disclosure · minimal variants). The
nav/footer LINK SET is carried verbatim (content equity). tb-nav.js
selectors re-pointed to the new hooks — open/close/Escape/focus behavior
contract unchanged. NEW tb-callbar.js (scroll auto-hide/reveal);
`.has-call-bar` reserves the bar's space so it never shifts layout.
**FENCED, untouched**: tb-forms.js (24-key contract), tb-faq.js, intents
registry, schema graphs, quick-5/FAQ structures, section IDs,
equity-exceptions, battery contracts.
Tier-rule corrections applied while converting: legal pages moved
t-mofu→t-guide (call-bar never on legal); /trust/ callBar:false
(hub-structured standalone, not a conversion tier).

## Factory state (first build on the new skin)
- Build GREEN: 10 real pages + 5 tier samples + form harness.
- **CSS: minified 53,432 B / 59,392 B gate — 5,960 B headroom · source
  73,789 B** (over the 70 KB soft-cap, flagged as designed; the gate
  carries per founder ruling pending any changeover-spec revision).
- Samples on OUR layouts beside the Design renders (render copy
  verbatim, preview-only):
  `_build/verify/shots/changeover/{t-hub,t-mofu,t-guide,t-bofu,t-location}-{OURS,DESIGN}.png`
  plus full-res detail shots `_hub-hero-zoom.png` (motif),
  `_bofu-marks-zoom.png` (R1 marks), `_loc-cta-zoom.png` (light band on
  hub mist + NY intake).
  Side-by-side verdict: section sequences, type voice (Fraunces display
  axes), motif, marks, tints, buttons, and chrome all reproduce the
  renders; ours additionally carry the real site chrome the renders omit.

## OPEN ITEMS / STOPPED AT
**STOPPED after step 3 per the sequence. Steps 4–6 (page re-skin ·
no-traces · CTA lexicon) await this audit.**
1. **CLASS-MANIFEST gap**: the design's own renders use
   `section--cta-band--light` (semantic marker, no rules — light is the
   default) but the 208-class manifest omits it. Step-7 manifest grep
   will whitelist it unless you prefer the manifest regenerated upstream.
2. **`.section--alt` does not exist in the new system** — the 10 built
   pages still reference it (their step-4 re-skin will map it; likely a
   one-line 09-extensions definition on `--bg-section-alt` or per-section
   tier classes — decision lands in step 4 unless you rule now).
3. Old-system traces (old icons in _includes/icons, old motif partials,
   archived CSS, david-photo pipeline classes) are removed/re-pointed at
   **step 5** by design — the mid-state build intentionally still carries
   them.
4. Mid-state honesty: the 10 real pages currently render on the new skin
   with old-class residue (unstyled odds and ends) — expected until
   step 4; the tier SAMPLES are the audit surface for this stop.
5. R3 (OG generator on self-hosted fonts) executes in the OG batch round
   (go-remote gate item 6).
6. Go-remote gate items 1/3/4/5/6 and TODOs 2, 7, 8, 11, 16, 18 carry
   unchanged.
