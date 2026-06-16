# TechBrot Design System

> **The ledger, made visible.**
> A spacious, modern, fintech-sleek design system for TechBrot — an independent U.S.
> Certified QuickBooks ProAdvisor accounting & advisory firm. Built to look like the
> #1 firm in the niche and stay timeless to 2035.

---

## 1 · Company & product context

**TechBrot** is an **independent accounting & advisory firm** staffed by **Certified
QuickBooks ProAdvisors**. It is **not Intuit** and **not affiliated with Intuit**. The
work is QuickBooks-centric: bookkeeping, cleanups & catch-up, migrations, setup, sales
tax, payroll management, and fractional-CFO/advisory — sold as **fixed-fee scope**.

**The one goal:** generate **CALLS** from high-intent business owners, and be the
**#1-cited, #1-ranked** firm across AI answer engines (ChatGPT / Claude / Perplexity /
Gemini) and Google. Every design decision is judged against: *does this drive a
qualified call, or strengthen the trust/citation signal that produces calls?*

**The product surface is a marketing website** (static, 11ty in production) of ~148
pages across silos: `accounting/` · `find-an-accountant/` (state pillars + city
children) · `quickbooks/` · `vs/` (comparisons) · `resources/` (guides, glossary,
tools, blog) · `legal/` · `contact/` + `file-review/`. There is no logged-in app.

### The AI-era UX thesis (load-bearing)
Most high-value visitors arrive **already knowing the answer** — they came to
**validate the source**, not to learn. So the design's first job is to **prove
expertise in ~2 seconds**: credentials, real specifics, and above all the **signature
diagram language**. Optimize the first screen for *source-validation*, then make
calling the obvious, low-friction next step.

### Sources / provenance
- **`uploads/REDESIGN-BRIEF.md`** — the canonical creative + technical source of truth
  (founder + strategy). This system was built against it. *(Stored in the project; the
  reader may not have access — key rules are summarized throughout this README.)*
- A **CORRECTED direction** (founder, supplied with the build request) **supersedes** the
  brief's §2 "editorial / magazine / serif-led" framing: the system is **spacious,
  modern, fintech-sleek** (the Stripe / Linear / Mercury / Vercel register), **not** a
  dense editorial magazine. That correction is what this system implements.
- No codebase or Figma was attached; class names referenced in the brief
  (`.vs-table`, `.call-breakout`, `.intake-form`, …) informed the component set.

---

## 2 · Content fundamentals (how TechBrot writes)

**Voice:** a **senior advisor** — a calm, precise expert. Confident, plain-spoken,
warm, **never salesy**. The register is Stripe's clarity crossed with a top advisory
firm's authority. We reduce a stressed owner's anxiety *before* asking for the call.

| Dimension | Rule | Example |
|---|---|---|
| **Person** | "We" (the firm) + "you/your" (the owner). Never "I". Founder name **never** appears in visible content (David Westgate lives in `Person` schema only). | "We help with the work inside your QuickBooks file." |
| **Tone** | Calm, declarative, specific. State what we do and don't do. No hype words ("revolutionary", "best-in-class"), no exclamation points. | "If your books are behind, broken, or set up wrong — that's our work." |
| **Casing** | Sentence case everywhere — headings, buttons, labels. UPPERCASE only for short tracked **eyebrows**. | Button: "Talk to a ProAdvisor", not "TALK TO A PROADVISOR". |
| **Eyebrows must encode something TRUE** | An eyebrow is a real classifier, never decoration. | "Certified QuickBooks ProAdvisor", "Fixed-fee scope", "Independent firm". |
| **Numbers** | Real figures only, set in **mono, tabular**. Spell out vague claims you can't prove. | "$148,204.00" in Geist Mono; never "thousands of clients". |
| **CTAs** | One canonical action: **CALL**. Lexicon: "Talk to a ProAdvisor", "Call now", "Get a free file review". No competing CTAs on money pages. | — |
| **Honesty** | See HARD RULES below — the single most important content rule. | — |
| **Emoji** | **Never.** Not in product, not in UI. | — |

### HARD RULES — trust is the primary asset (never violate)
- **Never fabricate** stats, client counts, ratings, badges, testimonials, team photos,
  office imagery, or urgency. One faked element destroys the trust the whole site earns.
- **Real signals ONLY:** independent firm · Certified QuickBooks ProAdvisor(s) · **2 real
  Clutch reviews (Heidi Schubert, Barbara Best)**. Everything else is marked
  **`[PLACEHOLDER]`** in this system (phone number, address, counts, etc.).
- **No `AggregateRating`** until there are 5+ reviews.
- **Honest triage:** on support/QuickBooks-expert pages, state plainly we are independent
  / not Intuit, and route Intuit billing/login/account issues **to Intuit**.
- **Never imply Intuit affiliation. Never say "official".** Tax controversy → coordinate
  with the client's CPA / EA / attorney; we don't file or represent.

### Real facts (verified from the live site — use these, never invent)
- **Entity:** TechBrot Inc. · founded 2023 · independent Certified QuickBooks ProAdvisor firm.
- **Phone:** (877) 751-5575 → `tel:+18777515575` (`phone_click` is the primary GA4 event).
- **Email:** info@techbrot.com / support@techbrot.com · **Address:** 651 N Broad St, Suite 201, Middletown, DE 19709.
- **Positioning line:** *"Automation handles the data entry. We handle the judgment."*
- **The 2 verified Clutch reviews** (5.0, 2 reviews; Quality / Schedule / Willing-to-refer all 5.0):
  - **Heidi Schubert** — Owner, Beverage Connection, Denver, CO: *"They took something that felt overwhelming to me as a first-year business owner and made it simple."*
  - **Barbara Best** — CEO, Barbara B., Business services, CA: *"What stood out the most was TechBrot Inc's attention to detail."*
- **Pricing (fixed monthly, set in writing first):** Essentials $400–$700/mo · Standard $700–$1,400/mo · Complex $1,400–$2,500+/mo.
- **Engagement model:** free discovery call → written fixed-fee scope within 3 business days → onboarding → delivery & review → CPA-ready handoff.
- **David Westgate** (Westgate Financial Services, TX) is a real network operator — by the brief he appears in `Person` schema only, not visible content.

### Source-site reference
The prior live site (`uploads/index.html`, `index-ec687620.html`, `site.min.css`) used a
warm-cream / Fraunces-serif identity; the **corrected direction moved us to cold/light +
Geist**. What carried forward and was **upgraded**: the firm's own **ledger-stack hero
motif** and **"automation drifts / judgment compounds" reconciliation chart** — now the
themeable `LedgerMotif` and `JudgmentChart` components + `assets/illustrations/*.svg`.

---

## 3 · Visual foundations

The richness comes from **the signature diagrams set in space** — *not* from density.
Restraint is the premium signal. Each section does one thing with air around it.

**Palette — cold / light.** Cool near-white page (`--surface-page` #FBFCFE), white
cards, cool-grey hairlines, a cool near-black ink for text (`--c-ink-950` #0A0F1C).
**Accent: cobalt** (`--accent` #2B4FD6, hover #1D3EB8) — the firm's signature blue,
vivid and authoritative on the very-light base. `--accent-bright` (#3D63E8) for emphasis;
a **teal focus ring** (#118A7E) keeps focus states distinct from cobalt links. Semantic
hues (green = reconciled/tie-out, red = out-of-balance, amber = needs-review) plus a
**brass** garnish belong to the **ledger diagrams**. Tier-coded section tints
(`--surface-tier-hub/guide/bofu`) are cool and very light. Every token is **AA**.

**Type — modern, sleek.** **Geist** (variable grotesque) for everything — display and
body — tightened with negative tracking at large sizes; **Geist Mono** for figures,
labels, and the numbers inside diagrams. No serif: the diagrams carry the personality,
the type stays disciplined. Fluid display scale (`--display-sm/md/lg`) for heroes.

**Spacing & layout.** 4px base grid; generous `--section-y` rhythm (clamp 4–8rem).
Reading measure `--width-prose` 680px; content column 1080px; wide 1240px. Few elements
per screen — whitespace is the luxury.

**Backgrounds.** Cool near-white flat fields, occasional `--surface-subtle` tonal
sections and full **ink** (`--surface-ink`) moments for contrast. **No gradients**, no
photographic hero washes, no textures. The visual interest is diagrammatic, drawn in
crisp SVG on clean fields.

**Corners & cards.** Moderate radii — cards on `--radius-lg` (14px), panels on 20px,
controls on 10px. Cards = white surface + a **hairline + soft cool shadow**
(`--shadow-card`: a 1px ring plus a low, blue-grey drop). Never heavy drop shadows,
never colored left-border accent strips.

**Borders.** 1px cool-grey hairlines do most structural work (`--border-subtle`/
`--border-default`). Diagram rules are slightly heavier (`--rule` 1.5px).

**Shadows.** Soft, low-spread, cool-tinted (blue-grey, not black). Layered xs→xl plus a
`--shadow-card` ring+drop and a `--shadow-pop` for menus/dialogs. Inputs get an inset
hairline. Premium through subtlety.

**Transparency / blur.** Used sparingly: a `backdrop-blur` sticky header over the cool
page, and overlay scrims for dialogs/mega-menu. Not a decorative motif.

**Motion.** Calm, fast, purposeful (`--ease-out` cubic-bezier(.16,1,.3,1); durations
120–560ms). Hero entrance and **scroll-reveal that draws the diagrams on** are the
signature motion moments — earned on money/ATF pages. Micro-interactions ≤200ms.
Subtle/none on legal & utility. **`prefers-reduced-motion` fully respected** (tokens
collapse to 0ms). CLS 0 — animate within reserved space.

**Hover / press states.** Hover = a step **darker** accent (`--accent-hover`) or a
hairline-to-strong border shift + a touch of `--shadow-md`; never opacity fades on solid
fills. Press = `--accent-press` + a subtle `transform: translateY(1px)` / `scale(.99)`.
Links underline on hover. All states work on touch (no hover-only reveals).

**Imagery vibe.** Diagrammatic and abstract over photographic. If photography is ever
used it is cool-toned and restrained. **No stock "diverse team high-fiving", no fake
offices** (HARD RULE). Real credential/cert visuals only.

---

## 4 · The signature — "The Ledger, Made Visible"

The one **ownable** visual: a proprietary **accounting-diagram language**, drawn in live
SVG, themeable via the ledger-role tokens (`--ledger-rule/-debit/-credit/-tie/-flag`).
It is "expertise made visible" and the instant source-validation cue for AI-era
visitors. The vocabulary:

- **T-account figure** — debit/credit columns on a ruled T, mono figures, a green
  **tie-out tick** when balanced (the same tick in the logo).
- **Reconciliation flow** — book balance → adjustments → bank balance, reconciled.
- **Decision tree** — "which is right for you" branching logic.
- **Before/after cleanup** — an out-of-balance ledger resolving to balanced.
- **Data figure** — a single real number with a labeled, drawn-on bar/line.

These are the **star**, set in space — not crowded. The logo (**the "Tie-Out" mark**) is
this language distilled: the brand "T" *is* a T-account, with the reconciliation tick in
the credit cell.

---

## 5 · Iconography

- **System:** **Lucide** (CDN — `lucide@latest`), a clean, geometric, consistent-stroke
  open-source line set that matches the fintech-sleek register. **This is a substitution**
  — the brief calls for a bespoke custom icon set; Lucide is the closest high-quality
  stand-in until custom icons are commissioned. *(Flagged for the user.)*
- **Stroke:** brand stroke is **1.75** (`--icon-stroke`), lighter than Lucide's default
  2 — apply via the `.tb-icon` helper. Sizes: 16 / 20 (default) / 24 / 32.
- **Usage:** functional only — nav, service categories, trust signals, inline affordances
  (phone, arrow-right, check, shield-check, file-text, calculator). Never decorative.
- **Emoji / unicode as icons:** **never.**
- **The diagrams are not icons** — they are the SVG signature language (§4), drawn at
  figure scale, not icon scale.

---

## 6 · Index / manifest

**Root**
- `styles.css` — global entry (import this one file). `@import` lines only.
- `tokens/` — `fonts · colors · typography · spacing · radius · shadow · motion · icon · base`
- `assets/logo/` — real brand: `techbrot-logo.svg` (+ `-dark`), `techbrot-monogram.svg` (+ `-dark`), `techbrot-icon.svg`, favicons/app icons. The "Tie-Out" T-account mark (`techbrot-mark*`) remains as a signature motif.
- `readme.md` (this file) · `SKILL.md` (Agent-Skill wrapper)

**Foundation cards** (`guidelines/`) — specimen cards for the Design System tab
(Colors, Type, Spacing, Brand).

**Components** (`components/<group>/`)
- `core/` — Button, IconButton, Eyebrow, Badge, Tag, Card
- `forms/` — Input, Textarea, Select, Checkbox, Radio, Switch
- `ledger/` — **TAccount, ReconciliationFlow, DecisionTree, DataFigure, JudgmentChart,
  LedgerMotif, LedgerStack (3D focal), StateMap (NY map)** (the signature)
- `content/` — VsTable, BuyerCard, ProofStrip, FixSteps, BylineBlock, GuideTOC,
  AiSummary, PullQuote, TrustRow, ChecksList, DisclosureBanner, FaqAccordion,
  CallBand, LeadMagnet, ErrorBadge, ReviewCard

**UI kit** (`ui_kits/marketing-site/`) — interactive recreation of the marketing site
with every per-type hero (home, **hub/silo**, money/bofu, product/mofu, **comparison**,
guide, state pillar, location child, error/404, legal, contact, file-review). Heroes are
**light**; dark is reserved for CTA bands / lead-magnet moments. The NY pillar carries the
`StateMap` + a real NY tax graph.

See sections 2–5 for the rules every component is built against.
