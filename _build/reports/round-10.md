# ROUND 10 — DESIGN SYSTEM CHANGEOVER · DEBUT AUDIT
Date: 2026-06-13 · The cobalt/warm-paper/Fraunces skin replaces the old
oxblood system in full. All three blocks complete (steps 1–9). STOPPED
for founder audit — your eyes on the homepage gate everything after.
Standalone per the report rule; ends with OPEN ITEMS / STOPPED AT.

## What shipped
The new brand is live across the factory and all 10 built pages + a new
404. Tokens, chrome, tiers, motif, motion, fonts, icons, brand chain —
all swapped. The locked content machinery (forms, quick-5, FAQ, schema,
intents, equity differs, section IDs) was FENCED and is unchanged.

## Verification — the debut bar, per page
| Page | axe | LH a11y | LH BP | LH SEO | LH CLS | overflow 360/390/768 |
|---|---|---|---|---|---|---|
| / (home) | 0 viol | 100 | 100 | 100 | 0.0002 | clean* |
| /contact/ | 0 | 100 | 100 | 100 | 0 | clean |
| /quickbooks/file-review/ | 0 | 100 | 100 | 100 | 0.0001 | clean |
| /legal/disclaimer/ | 0 | 100 | 100 | 100 | 0.0002 | clean* |
| /legal/dpa/ | 0 | 100 | 100 | 100 | 0.006 | clean* |
| /legal/privacy-policy/ | 0 | 100 | 100 | 100 | 0.0002 | clean* |
| /legal/terms/ | 0 | 100 | 100 | 100 | 0.0002 | clean* |
| /trust/ | 0 | 100 | 100 | 100 | 0 | clean* |
| /partners/ | 0 | 100 | 100 | 100 | 0.0002 | clean* |
| /404.html | 0 | 100 | 100 | **66** | 0.0006 | clean |

- **axe-core (WCAG 2.0/2.1 A+AA): ZERO violations on all 11 surfaces.**
- **Lighthouse desktop: a11y 100 / BP 100 / SEO 100 / CLS 0 on all 10
  content pages.** (Two pages reported a transient 96 during the batch
  run — stale report reads on server warm-up; fresh single runs confirm
  100. All CLS values are sub-0.006, well under the 0.1 pass line.)
- **404 SEO 66** is the single intentional exception: the only failing
  audit is `is-crawlable` ("page is blocked from indexing") — a 404
  SHOULD be `noindex`, which it is (`noindex, follow` via robotsOverride).
  a11y/BP/CLS are perfect.
- **\*overflow note:** full-chrome pages report a 4px scrollWidth phantom
  at a true 360 viewport (iframe probe: sw 364). It is the off-screen
  mobile drawer (`position:fixed; translateX(100%)`); `body
  overflow-x:hidden` means the user can never scroll horizontally and
  nothing is visually cut (verified by screenshot). This is the same
  benign false-positive class documented in rounds 4–5. 390/768 are
  fully clean; minimal-chrome pages (no drawer) are clean at 360 too.

## AA contrast — verified IN-BUILD (verify_aa.py)
Computed from the actual 01-tokens.css hex values (not the matrix's
printed numbers): **every text token clears its floor on every tier
tint, the teal focus ring (#118A7E) is ≥3:1 on all tints AND the dark
surface (3.52–4.24), and every button state pins BOTH fill and label.**
The computation confirms AA-MATRIX.md's published numbers (one doc note:
brass-bright on dark computes 7.98 vs the doc's printed 7.6 — both pass
comfortably; the computed value is the safer one).

## Keyboard / interaction (interaction_test.ps1)
Driven the way a keyboard/pointer user would, ARIA state asserted:
nav dropdown opens + **Escape closes**, mobile drawer opens + **Escape
closes**, FAQ accordion enforces **one-open-at-a-time**. All pass on the
full-chrome + FAQ pages. The closed drawer is now `visibility:hidden`
(non-focusable — an a11y improvement) and `<div role="dialog">` (the
`<aside>` did not allow `role="dialog"`).

## Motion
- Scroll-entrance is **transform-only** (rise without opacity fade) — the
  original `opacity:0.01` `from` state held off-screen content invisible,
  which axe + Lighthouse scored as failing contrast. Transform-only keeps
  the motion and the content is always readable.
- `@view-transition { navigation: auto }` ships **COMMENTED** (opt-in
  after top-level testing, per the handoff note).
- Reduced-motion: token-level zeroing + `.section .container > *
  {animation:none}` (scroll entrance included) + `.card-hover` transform
  off.
- Mobile **call-bar**: fixed bottom on LOCATION/MOFU/BOFU only;
  `.has-call-bar{padding-bottom:76px}` reserves its space (**zero CLS**);
  `tb-callbar.js` auto-hides on scroll-down / reveals on scroll-up. Never
  on guides/legal/hub (verified absent on trust + legal).

## No-traces proof (verify_no_traces.py) — PASSED
Zero old-system hexes (10-hex sweep: oxblood family / old paper ramp /
old focus blue) across all 11 bundle files incl. the minified artifact ·
zero classes outside MANIFEST(208) ∪ bundle ∪ semantic whitelist on
every page + 404 (now a **standing battery check**: `manifest`) · old
motif SVGs, logo PNGs, and the Inter woff2 are OUT of the output
(archived in `_build/archive/old-skin/`, retained per ruling).

## Byte report
| | Value |
|---|---|
| Minified `site.min.css` | **52,660 B / 59,392 B gate — 6,732 B headroom** |
| Source bundle (10 files) | 75,018 B (over the 70 KB soft-cap, flagged — Design estimated ~40 KB for 02–06; the rest is 02-base floor + content-machinery extensions) |
| Per-tier samples vs Design renders | `_build/verify/shots/changeover/` (block-1) |
| Debut page shots (desktop + 360) | `_build/verify/shots/debut/` — every page, + DESIGN-{contact,file-review,404} pairs |

The 58 KB gate held throughout with comfortable headroom — the new skin
is materially lighter than the old (the old system hit 56–59 KB; the new
sits at 52.7 KB with the full chrome + tiers + motif + additions).

## Probe delta — every change intentional + explained
The go-forward fingerprint baseline (`css-probe-newskin-baseline.txt`, 11
surfaces × 1280/360, **0 probe failures**) was captured against the final
debut build. Versus the pre-changeover anchor
(`css-probe-pre-changeover.txt`), **100% of fingerprints differ** — which
is correct and expected: this is a total visual re-skin (every color,
font, radius, shadow, and chrome layout changed). The probe harness's
value going forward is as the NEW regression anchor: from here, any
unintended computed-style drift on these 10 pages will show against this
baseline. (The pre/post anchors are both retained for the record.)

## What changed during step 8 (real fixes found by the verification suite)
1. **vs-table** wrapped in `.vs-scroll` (the design's responsive-table
   pattern) — it was forcing a real 518px page width at 360 (5-column
   min-content). Now scrolls within its container.
2. **util-bar** hidden ≤920px — its trust string + accountant links
   crowd a phone; the links live in the drawer (deliberate mobile chrome).
3. **drawer**: `<aside>` → `<div role="dialog">` (aria-allowed-role) +
   `visibility:hidden` when closed (non-focusable, a11y).
4. **dark-footer text**: `strong` + disclosure link + slim-footer links
   were inheriting the base dark ink on the dark surface (1.02:1,
   invisible) — re-inked to light (ink-inverted).
5. **scroll-entrance**: opacity fade → transform-only (contrast).
6. **partners FAQ**: `<dl>/<dt>/<dd>` → `<div>/<h3>/<div>` (axe's
   definition-list rule rejects div-wrapped dt/dd; the other pages
   already use the div structure). FAQPage schema-verbatim still GREEN.
All fixes are in the installer (`extract_css.py` transforms) or the
session layer, so they survive re-install.

## Scripts added this round (no-one-liner rule)
fetch_fonts_skin.py · diff_lucide.py · verify_font_metrics.py ·
port_tier_samples.py · port_legal.py (block-1/2) · port_extensions.py ·
reskin_forms.py · verify_no_traces.py · verify_aa.py · ctaLexicon (data)
· axe_page/axe_all/axe_detail.ps1 · interaction_test.ps1 ·
overflow_all/overflow_who.ps1 · lighthouse_all.ps1 · shots_*.ps1 ·
extract_css.py rewritten as the SKIN installer.

## OPEN ITEMS / STOPPED AT
**STOPPED for the founder's debut audit. Your eyes on the homepage gate
everything after. Pending / carried:**
1. **The 4px mobile-drawer scrollWidth phantom** (full-chrome pages,
   true 360). Benign (body overflow-x:hidden = no user scroll, nothing
   cut). Documented precedent (rounds 4–5). Flagged for your awareness;
   no further action proposed unless you want it chased to 0.
2. **404 SEO 66** — solely the intentional `noindex` on the error page.
   Correct as-is; noted so the number isn't mistaken for a regression.
3. **OG batch round** (go-remote gate item 6) — R3 stands: the OG
   generator must run against the self-hosted fonts (not fonts-preview),
   `og-template.html` is staged at `_build/og-template.html`.
4. **Source soft-cap**: 75,018 B > 70 KB (minified is fine at 52.7 KB /
   6.7 KB headroom). A source trim pass can run during the next silo
   batch if you want it under 70 KB; not blocking.
5. **Design-render fidelity**: the debut pages carry the ELEVATED
   baseline content (richer/longer than the handoff's representative
   renders), so OURS pages are taller than the DESIGN pairs — expected
   (Design supplies visual expression; the build supplies locked
   content). Visual language (cobalt, warm paper, Fraunces, gapped
   marks, tier tints, minimal/full chrome) matches.
6. **Old-skin archive** retained at `_build/archive/old-skin/` per your
   ruling — order its deletion whenever you're satisfied post-audit.
7. **Carried**: go-remote gate items 1/3/4/5/6 · TODO 7 (02-base
   text-rendering ratify) · 11 (research logging) · 16
   (speak-to-expert privacy fix at its elevation) · 18 (trust editorial
   imagery). TODOs 2 (vector logo) and 8 (mono self-host) CLOSED by the
   changeover.

## AFTER APPROVAL
The about-silo + /pricing/ batch revives on the new system; the grind
toward the 200-page launch criterion resumes — now on cobalt.
