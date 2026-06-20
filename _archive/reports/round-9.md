# ROUND 9 REPORT — CSS deep trim (TODO 17) + round-8 audit rulings
Date: 2026-06-13 · Session 1 round 9 · **BUILD HALTED after this report
by founder order — design system changeover next (new brand, spec to
follow); the about-silo + /pricing/ batch is CANCELLED pending the
changeover.** Standalone per the report rule; ends with OPEN ITEMS /
STOPPED AT.

## Scope executed
1. Round-8 audit rulings applied (partner-apply intent key + CTA split,
   topical-pages ceiling exemption class, retirements/rewordings logged
   as approved).
2. CSS deep trim per founder order — source <75 KB and minified
   headroom ≥2 KB, with ZERO visual or behavioral change as the pass
   condition.
3. Zero-drift verification harness built and run (computed-style
   fingerprinting), full battery, overflow spot-probes, Lighthouse ×3.

## 1 · Rulings applied
- **`partner-apply` intent key** added (additive, `_added`-marked).
  /partners/ CTA split per ruling: every "Start the Application" CTA
  (hero, process section, application-cta section, cta-band, and the
  FAQ "Submit the application" link) → `/contact/?intent=partner-apply`;
  "Ask a Question First" (×2) stays `?intent=partner-question`.
- **Topical-pages ceiling exemption** logged (tracker ruling 18):
  pages whose baseline topic IS independence (e.g. /trust/) are exempt
  from the two-mention ceiling, parallel to the support-silo exception.
- Trust quick-5 rewordings, partners FAQPage retirements, and the two
  anchor retargets recorded as APPROVED/SIGNED OFF (tracker ruling 17).

## 2 · The trim — results
| Target | Required | Achieved |
|---|---|---|
| Minified artifact | ≤57,344 B (headroom ≥2 KB) | **56,092 B — headroom 3,300 B** ✓ |
| Source bundle | <75 KB (76,800 B) | **74,975 B** ✓ |

**Per-file source savings:**
| File | Before | After | Saved | How |
|---|---|---|---|---|
| 03-components.css | 27,339 | 22,205 | 5,134 | extract_css.py DROP_TOKENS_03 (unused rules) + banner-only comments |
| 07-extensions.css | 23,921 | 19,174 | 4,747 | comment collapse + removal of `.initials-mark` (dead since round-7 photo) and `.section-motif*` (never composed) |
| 05-kit.css | 6,969 | 5,005 | 1,964 | `.disclosure` + `.hero--editorial` de-curated (return via the extractor when the support silo / editorial pages build) |
| 06-chrome.css | 12,711 | 11,514 | 1,197 | comment collapse + LF endings |
| 00-fonts.css | 2,149 | 1,520 | 629 | comment collapse + LF endings |
| 01-tokens.css | 6,255 | 6,255 | 0 | **LOCKED — untouched** |
| 02-base.css | 9,302 | 9,302 | 0 | **LOCKED — untouched** |
| **TOTAL** | **88,646** | **74,975** | **13,671** | |

Minified delta: 59,313 → 56,092 B (−3,221 B), entirely from the
unused-rule removals (comments and line endings don't survive
minification).

**Levers used:** `css_audit.py` proved every dropped rule's classes
appear on NO built page and in NO JS (JS-injected classes like the
form success panel are whitelisted; the kit `.disclosure` was verified
distinct from the footer's `site-footer__disclosure`). Unused-rule
drops for 03/05 live in `extract_css.py` (DROP_TOKENS lists) so prod
regeneration reproduces the trimmed output byte-for-byte; session
files were trimmed by `trim_session_css.py`. All comments collapsed to
≤48-char one-line pointers (section banners kept; design commentary
recoverable from the `_design` handoff). Line endings normalized to LF
(CRLF was costing ~1 B per line of on-disk size).

**Left on the table (locked files):** ~870 B of unused rules
(`.prose`, `.container--wide`, `.section--final-cta` variants…) and
~6.1 KB of comments in 01-tokens/02-base — available if ever needed,
but requires a TODO 7-class ratification to touch locked files.

## 3 · Zero-drift proof (pass condition)
New standing harness: `css_probe.ps1` / `css_probe_all.ps1` hash
`getComputedStyle` of **every element (+ ::before/::after)** on every
built page at 1280 px and 360 px — 10 pages × 2 viewports = 20
fingerprints. Two non-determinism sources were diagnosed and fixed
during construction (Chrome enumerates custom properties in
nondeterministic order → properties sorted before hashing; fonts
awaited via `document.fonts.ready`). Probe determinism was verified
with back-to-back identical runs before the baseline was trusted.

**Result: 20/20 post-trim fingerprints IDENTICAL to the pre-trim
baseline** (`_build/verify/css-probe-before.txt` vs
`css-probe-after.txt`). One outlier appeared on
/quickbooks/file-review/@1280 during the batch capture and was
unreproducible — two consecutive re-probes returned the baseline hash
exactly; recorded as probe noise, not drift.

## 4 · Verification battery (trimmed bundle)
| Check | Result |
|---|---|
| Battery (33 checks, 10 preview pages) | ✅ ALL GREEN |
| css-bytes | ✅ 56,092 B / 59,392 B gate · source 74,975 B (over the 70 KB soft-cap, flagged as designed) |
| links / intents (incl. new partner-apply) | ✅ 889 hrefs resolve; all CTA intents registered |
| content-equity ×7 | ✅ GREEN, unchanged dispositions |
| Overflow spot-probes (home / file-review / trust) | ✅ 349/379/753 — identical to pre-trim |
| Lighthouse desktop home | a11y 100 · BP 100 · SEO 100 · CLS 0 · perf 49 host-limited |
| Lighthouse desktop file-review | a11y 100 · BP 100 · SEO 100 · CLS 0 · perf 52 host-limited |
| Lighthouse desktop trust | a11y 100 · BP 100 · SEO 100 · CLS 0 · perf 64 host-limited |
| (perf note) | benchmarkIndex 120–166 — local perf uncalibrated; go-remote gate item 4 stands |
| Prod build from clean | ✅ 9 pages, dev/* excluded, env fail-closed intact |

## 5 · Scripts added (no-one-liner rule)
css_audit.py (unused-selector prover) · css_probe.ps1 / css_probe_all.ps1
(zero-drift fingerprint harness) · css_probe_diag.ps1 /
css_probe_props.ps1 (probe-noise diagnosis) · trim_session_css.py ·
extract_css.py round-9 trim logic (DROP_TOKENS + banner-only comments +
LF output).
**The probe harness is the regression-proof tool for the upcoming
design-system changeover** — fingerprint the old system, swap, and
every intentional change is visible against a known-identical baseline.

## OPEN ITEMS / STOPPED AT
**BUILD FULLY HALTED per founder order (tracker rulings 19–20).** No
further page batches; the about-silo + /pricing/ batch is CANCELLED.
Next session begins with the DESIGN SYSTEM CHANGEOVER spec (new brand).
Standing items carried forward, exactly as flagged:
1. **Design changeover prep available:** the css_probe harness gives a
   20-fingerprint baseline of the current system; recommend
   fingerprinting immediately before the swap as the comparison anchor.
2. **Go-remote gate** items 1 (Cloudflare preview headers), 3 (live
   form POST TEST-MIGRATION-2026), 4 (calibrated Lighthouse ≥95
   mobile), 5 (clean prod build — continuously proven), 6 (OG-image
   batch round) — all open.
3. **TODO 2** vector logo · **TODO 7** 02-base text-rendering edit
   ratification (also unlocks ~7 KB of further source trim) · **TODO 8**
   JetBrains Mono self-host · **TODO 11** research-layer logging start ·
   **TODO 16** /quickbooks/speak-to-a-quickbooks-expert/ privacy
   dead-link fix at its elevation · **TODO 18** trust editorial imagery
   (founder photography) · **TODO 19** closed by ruling 18 this round.
4. **T-GUIDE trio + cleanup tiers + remaining silos**: paused; resume
   on the new design system.
5. CSS state at halt: minified 56,092 B / 59,392 B gate (3,300 B
   headroom) · source 74,975 B · skin guarantee + zero-drift proven.
   NOTE for the changeover: the 58 KB gate was ratified "ceiling
   through cutover" FOR THIS design system — whether it carries to the
   new system is a founder call for the changeover spec.
