# ROUND 10 · STEP-6 STOP REPORT — page re-skin · no-traces · CTA lexicon
Date: 2026-06-13 · Design-system changeover, block 2 of 3 (steps 4–6).
STOPPED per the sequence; block 3 (steps 7–9, re-baseline + full
verification + debut audit) awaits this audit. Standalone per the report
rule; ends with OPEN ITEMS / STOPPED AT.

## Step-3 audit rulings applied first
1. `section--cta-band--light` whitelisted in the manifest check; recorded
   as a known upstream manifest omission.
2. `.section--alt` defined in 09-extensions on `--bg-section-alt`; class
   name kept across the 10 pages.
3. Metric corrections, icon replacements, cascade fix RATIFIED — the
   corrected metric values are canonical and baked into the installer so
   a future handoff refresh cannot regress them.

## Step 4 — the 10 pages on the new system (re-skin, not re-elevation)
A class-gap scan (99 old classes) split the work three ways:
- **Narrow ports → 09-extensions** (token-only; the skin guarantee recuts
  them to cobalt/new radii automatically): legal-doc system,
  process-diagram (connector hairlines dropped for the gate), nested-FAQ
  children + faq__more, review-card fact lines, team-card + photo,
  stack-8/link-wrap/tldr__heading/buyer-card__heading utilities, 404
  nf-* styles. 09-extensions: 9,778 B source.
- **Markup swaps onto new vocabulary** (content and links byte-identical):
  `tldr__eyebrow`→`tldr__label`, quick-5 container→`ai-summary`,
  `card-grid--two`→`grid-2`, home services/guides → review-card shells in
  `grid-3`, industries/states tiles+pills → `link-wrap` +
  `link-standalone`, judgment figure → plain `figure` (real SVG kept),
  **home compare table → a real `<table class="vs-table">`** with
  `mark-yes/no` + sr-only texts and `vs-table__concede` for the honest
  concessions.
- **The two money pages rebuilt on their render shells**
  (`reskin_forms.py`): the handoff renders are SHELLS — their
  `name="services"`, casual option values, and missing trackers were NOT
  adopted. The locked 24-key contract is preserved exactly: `services[]`
  names + locked values, full option sets (7 revenue / 11 industry /
  6 qb_status / 4 timeline), required flags, data-meta hidden defaults
  (file-review BOFU set · contact all-empty live semantic), referring
  trackers, honeypot. Contact's visible labels/legends/notes stay
  VERBATIM (baseline equity); file-review follows its render's condensed
  labels. **Real Clutch quotes (Heidi Schubert, Barbara Best) + site.json
  NAP replaced every marked placeholder**; review cards take the new
  `__name/__role/__verified` shape with the work/outcome fact lines kept.

**Form probes on the new shells — ALL GREEN**: file-review default
(intent=file-review · BOFU meta · source_page referrer fallback) +
override (cleanup/texas/services auto-check); contact default-empty +
`quickbooks-setup-standard` CTA swap ("Scope the Setup") + texas
state-lookup path. 24 keys + services array in every payload.

**Equity differs returned IDENTICAL dispositions**: contact 13 headings /
0 FAQ / 24 schema types (removal: monthly-brief; chrome-relocated:
footer columns) · legal 16–18/0/22 · partners 42/7/26 (same 5 signed-off
schema retirements) · trust 39/6/26.

**Gate discipline**: the first port pass hit the 58 KB gate (fail-closed
at 60,032 B). Resolution per the old system's own precedent — narrow the
ports, curate 08-additions to consumed sections (call-bar, proof-strip,
breadcrumb, rule-mark kept; calculator/research/editorial/verdict/
problem/TOC/byline families documented-dropped until their pages build).
One stray handoff hex (`#FFFFFF` inverted-primary hover) tokenized to
`var(--bg-card)`; the css-drift checker is now comment-aware (hex in
documentation comments no longer false-positives).

## Step 5 — NO-TRACES PROOF (verify_no_traces.py) — PASSED
- **Zero old-system hexes** (10-hex sweep: oxblood family, old paper
  ramp, old focus blue, old eyebrow grey) across all bundle sources AND
  the minified artifact.
- **Zero classes outside MANIFEST(208) ∪ 09-extensions-defined ∪
  semantic whitelist** across every built page + 404.
- **Old assets out of the output**: motif-ledger SVGs, logo-t PNGs,
  inter-var woff2 — archived (`_build/archive/old-skin/` — localhost-only
  mode has no git; archive is the recovery path). `figure-judgment.svg`
  kept deliberately: it is a content diagram, not motif chrome;
  currentColor recuts it to cobalt.
- **404 built** from `pages/404.html` → `/404.html`: minimal chrome, the
  gapped rule-mark, real silo links + NAP + phone, `noindex` via the new
  `robotsOverride` head support.
- **Brand schema**: `Organization.logo` + `Brand.logo` →
  ImageObject `/assets/img/brand/icon-512.png` (512×512) per
  BRAND-CHAIN.md. (Favicons/webmanifest/preloads landed in block 1.)

## Step 6 — CTA LEXICON (src/_data/ctaLexicon.json + standing battery check)
**Canonical registry:**
| Role | Text |
|---|---|
| primary | Book the discovery call |
| file_review | Get the free file review |
| phone | Speak to a ProAdvisor |
| soft | Read the methodology · See how it works |
| problem | Get the file diagnosed |

**Sanctioned (role-annotated in the registry):** "Send the Discovery
Brief" (baseline-equity form submit) · "Start the Application" / "Ask a
Question First" (round-9 partner rulings) · "Explore Services" (catalog
nav) · "The Four Trust Pillars" (in-page anchor) · "Back to the
homepage" (404). **Machinery:** intents.json per-intent `cta` values
(runtime submit swaps) are fenced and auto-sanctioned.

**Existing CTA text that needed mapping (applied; hrefs/intents
untouched):**
| Was | Now |
|---|---|
| home hero "Speak to a ProAdvisor" (→/contact/) | Book the discovery call |
| home hero "Get your file reviewed" | Get the free file review |
| file-review "Submit your file for review" (hero+band) | Get the free file review |
| file-review submit "Submit for free review" | Get the free file review |
| all "Call (877) 751-5575" ghost buttons (×4) | Speak to a ProAdvisor |
| contact "Send the Discovery Brief" (hero+band scroll CTAs) | Book the discovery call |

Battery check `cta-lexicon` is standing: scans every rendered
button/anchor-button incl. /404.html — 10 distinct labels, all green.

## State at this STOP
- **Battery ALL GREEN** (35 checks: url-set · links 901 · intents ·
  founder-zero · css-drift · css-bytes · quick-5/FAQ ×5 pages ·
  content-equity ×7 · cta-lexicon).
- **CSS: minified 52,121 B / 59,392 B — 7,271 B headroom** · source
  74,466 B (soft-cap flagged as designed).
- Re-skinned home verified visually full-page; both forms probe-certified.

## OPEN ITEMS / STOPPED AT
**STOPPED after step 6 per the sequence. Block 3 awaits: step 7
(re-baseline: AA in-build vs AA-MATRIX, css-drift re-point, new probe
fingerprints, manifest grep → standing battery check, gate headroom
report) · step 8 (full verification ×10 + 404: axe, keyboard,
Lighthouse, call-bar zero-CLS, reduced-motion) · step 9 (debut audit
report with screenshot pairs).**
1. The manifest grep currently runs as `verify_no_traces.py`; step 7
   formalizes it as a standing battery check (per your step-7 spec).
2. 08-additions curation list (KEEP_ADDITIONS) is the re-entry point for
   calculator/research/editorial families when those pages build.
3. The lexicon's "Get the file diagnosed" (problem role) has no consumer
   yet — first problem-silo page will use it.
4. Old-skin archive retained at `_build/archive/old-skin/` (no git);
   founder may order its deletion after the debut audit.
5. R3 (OG generator on self-hosted fonts) remains queued for the OG
   batch round (gate item 6).
6. Carried: go-remote gate 1/3/4/5/6 · TODOs 2 (vector logo — note the
   new brand chain may supersede), 7, 8 (IBM Plex Mono now self-hosted —
   TODO 8 effectively CLOSED by the changeover), 11, 16, 18.
