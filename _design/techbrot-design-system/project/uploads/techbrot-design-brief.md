# TECHBROT — DESIGN SYSTEM BRIEF (for Claude Design)

**Build against the two attached files — `01-tokens.css` and `02-base.css`. They are
the live, locked foundation. Use only the existing CSS variable names. Never hardcode a
hex, never invent a token. If a value is genuinely missing, add it to 01-tokens.css by
name — don't inline it.**

---

## 1 · WHAT TECHBROT IS

An independent U.S. Certified QuickBooks ProAdvisor accounting & advisory firm.
Positioning: expertise-first — *"Automation handles the data entry. We handle the
judgment."* Premium, editorial-enterprise, trust-led. Audience: small-to-mid business
owners with broken, behind, or messy QuickBooks files who need an expert, not software.

The design must *feel* like judgment — considered, precise, unhurried, never decorated
for its own sake. Competitors look like SaaS startups or template mills. TechBrot looks
like a practice with a 20-year reputation and a modern engine. That contrast is the moat.

## 2 · THE MANDATE

Futuristic-premium, editorial-enterprise. Precision-engineered, not sci-fi. Timeless
over trendy, premium over flashy, minimal over cluttered. The trust signal comes from
**discipline**: tight type scale, generous space, one accent used sparingly (<5% of any
page's surface), structure you can feel.

BANS: generic gradients, startup-SaaS aesthetics, template feel, generic icon packs,
stock photography, toy-like rounded components, unnecessary animation, cartoonish UI.

## 3 · WHAT'S LOCKED (from the attached CSS — do not change)

```
ACCENT   --color-accent #841E1E  (oxblood — KEEP)
         --color-accent-deep #6B1818  (hover / text-weight accent)
INK      --color-ink #0B0B0B → -soft → -mute → -faint
PAPER    --color-paper #FAFAF7 → -warm → -deep → -edge   (primary ground; warm, never pure white)
DARK     --color-surface-dark #111110 / -2  (editorial bands + footer)
DISPLAY  --font-serif  (Fraunces, opsz 9–144) — headings, in-brief, pull quotes
BODY     --font-sans   (Inter) — body, UI, captions   ← KEEP, do not swap
TYPE     --fs-12 … --fs-68   SPACE --space-1 … --space-40   (full live scale — complete)
RADII    --radius-xs 2px … --radius-lg 8px (restrained). NEVER --radius-pill on cards/buttons.
RHYTHM   .section padding-block --space-16 → --space-24 @960
WIDTHS   --container-max 1240 · --container-narrow 820 (editorial measure) · --container-wide 1440
```
Tokens are AA-clean at the token level already — keep it that way; axe-core gates sitewide.

## 4 · THE ONLY EDITS TO THE FOUNDATION

- Delete the `CONTAINER OVERRIDE` block at the bottom of 02-base.css (Bootstrap
  neutralizer — dead once 11ty replaces Bootstrap). The clean `.container` at the top stays.
- Fonts move from Google-Fonts `<link>` to self-hosted woff2, subset + preloaded
  (same families/weights — perf only).
- `--color-accent-soft #B85050` reads slightly pinkish against the oxblood — avoid it
  in new work; flag for removal if vestigial.

## 5 · COMPONENT KIT (v1 — extend the existing `.section__` / `.prose` BEM, no parallel namespace)

EDITORIAL   in-brief (quotable AI-citation opener, Fraunces --fs-20/22, under H1, ≤56ch)
            · pull (pull-quote / framework definition) · framework (DefinedTerm card:
            term + definition + firm attribution) · figure (img + caption, the ONLY
            sanctioned image treatment)
CONVERSION  btn / btn--primary (oxblood, --radius-sm, never pill) · btn--ghost (hairline)
            · cta-band (formalize the existing .section--final-cta dark block)
            · trust-row (real Clutch reviews + ProAdvisor badge — never fabricated)
            · phone-cta (reads "Talk to a Certified ProAdvisor" — never "support line")
NAV/CARDS   card · card-grid (2/3/6 col off the space scale) · breadcrumb (schema-backed)
            · toc (sticky, guides) · related (internal-link cluster)
AUTHORITY   stat (single proprietary number, Fraunces display) · table (comparison/benchmark)
            · faq (FAQPage accordion) · disclosure ("We are not Intuit" banner — locked pattern)

All compose from existing tokens. No new color/space/type values needed.

## 6 · THE FIVE TIER TEMPLATES — fixed sequence + fixed image rule per tier
(Same tier → same skeleton → guaranteed sibling consistency. Hubs look like hubs; BOFU like BOFU.)

T-HUB        silo landings (/accounting/, /quickbooks/, /vs/, state pillars)
  hero--hub (display SVG) → in-brief → section header+intro → card-grid (children)
  → framework (if silo owns a coined term) → trust-row → cta-band
  IMAGE: hero SVG only, no photos.

T-MOFU       service spokes (bookkeeping, advisory, QB services)
  hero--service (mid SVG) → in-brief → problem framing → ONE figure/pull if it earns place
  → service detail → faq → related → cta-band
  IMAGE: max one figure, only if clarifying.

T-BOFU       conversion (/contact/, /pricing/, /switch/*, /quickbooks/speak-to-a-quickbooks-expert/)
  hero--compact (no big SVG) → in-brief (value prop) → trust-row HIGH (proof above fold)
  → offer/process → faq (objections) → cta-band
  IMAGE: none — speed to action.

T-GUIDE      editorial (/resources/guides/*, /resources/research/*, error-code articles)
  hero--editorial (Fraunces-forward) → toc (sticky) → in-brief → long-form in
  container--narrow (820px) with pull/stat/table woven → framework → faq → related → soft cta-band
  IMAGE: figure + stat freely — these are the citation assets.

T-LOCATION   state/city (NY children + the 4 sprint states)
  hero--location (state-map SVG motif) → in-brief (state-specific) → tax/nexus framing
  → card-grid (cities/services) → trust-row → operator section (David Westgate) → cta-band
  IMAGE: SVG state motif; no stock. NY is the proven reference — match all states to it.

## 7 · INLINE-SVG HERO MOTIF

"Structured ledger geometry" — thin --color-accent strokes on --color-surface-dark or
paper, forming abstract ledger / column / reconciliation structures. Extends the logo's
ledger-bowl "B" geometry to hero scale. NEVER literal charts or dollar signs (SaaS cliché).
Inline SVG, currentColor/var-driven so it themes with tokens, explicit width+height for
CLS 0, decorative ones aria-hidden.
INTENSITY: full-grade on HUB + LOCATION · restrained single-element on MOFU + GUIDE
· hairline accent on BOFU.

## 8 · DARK BANDS, LOGO, IMAGERY

DARK BANDS (--surface-dark): deliberate punctuation, not default — hero tiles on
HUB/LOCATION, the cta-band block, footer. Warm paper is the primary surface.
LOGO: Fraunces wordmark; oxblood "B" from ledger-bowl geometry on dark rounded-square
tile. NO founder/personal name anywhere visible — firm name or "Certified ProAdvisor
team" only. David Westgate is the single named individual permitted (operator section).
IMAGERY: inline-SVG heroes only. No stock, no icon packs, no literal data-viz clichés.

## 9 · BUILD GATES

CSS source ≤55KB · ONE site.min.css · load order:
01-tokens → 02-base → 03-components → 04-tiers → 05-location → 06-chrome (Bootstrap eliminated)
Fonts self-hosted woff2, subset, preloaded, font-display: swap.
a11y AA at token level (already true) · axe-core sitewide gate.
SVG inline, var-driven, explicit dimensions.

## 10 · DELIVER IN THIS ORDER (for approval)

1. TOKEN SPECIMEN BOARD — color roles, Fraunces+Inter type scale, space rhythm — one board.
   Approve the *feel* before any layout.
2. FIVE TIER MOCKUPS — one per tier (HUB, MOFU, BOFU, GUIDE, LOCATION), each built ONLY
   from the §5 kit, each showing its §7 hero variant. Check: do the five read as one
   firm's system.
3. THE SVG HERO MOTIF at full grade (HUB/LOCATION), so the visual language is locked
   before it propagates.

VARY expression (hero intensity, one or two cta-band treatments) — NEVER the foundations.
Readers of this spec: the founder (visual approval) + Claude Code (build). Make it
buildable, not just beautiful.
