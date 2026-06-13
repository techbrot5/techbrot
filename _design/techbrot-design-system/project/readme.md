# TechBrot Design System

**TechBrot** is an independent U.S. Certified QuickBooks ProAdvisor accounting & advisory firm. It is not Intuit, and not a franchise — an independent firm (with a vetted operator network) selling bookkeeping, cleanup/catch-up, payroll, sales-tax compliance, QuickBooks setup/migration/support, and fractional-CFO advisory to small-business owners.

Brand thesis: **"Automation handles the data entry. We handle the judgment."** Design mandate: **editorial-enterprise · premium · trust-led · precision-engineered · timeless.** No gradients, no SaaS aesthetics, no template feel, no stock imagery, restrained radii (never pill on cards/buttons), generous space.

## Sources

- **Codebase** (read-only mount, File System Access): `css/` — the locked production stylesheet set for the techbrot.com reskin:
  - `css/01-tokens.css` — design tokens (LOCKED foundation)
  - `css/02-base.css` — reset, root typography, container/section system (LOCKED foundation)
  - `css/03-components.css` — full component vocabulary (buttons, hero, cards, tables, forms, FAQ…)
  - `css/04-pages.css` — page-scoped pattern**\
    Readme**s (hub pages, vs pages, contact, trust, pricing…) All four are copied verbatim into this project's `css/` directory and shipped via `styles.css`.
- **Live site**: https://techbrot.com — an old Bootstrap build mid-reskin. Reference for **content, structure, and tone only** — NOT visual direction.
- Site nav/footer were intentionally removed from `03-components.css` ("being rebuilt from scratch as premium mega-nav / premium footer") — there is **no canonical header or footer design yet**. Do not invent one; keep page chrome minimal until it lands.

## Hard rules

1. **Never hardcode a hex. Never invent a token.** Use only the custom properties declared in `css/01-tokens.css`.
2. `01-tokens.css` and `02-base.css` are **locked**. Extend by composing existing tokens/classes, not by editing the foundation.
3. Fraunces (`--font-serif`) for display, Inter (`--font-sans`) for body, JetBrains Mono (`--font-mono`) for meta/IDs. Headings are `font-weight: 400` serif — never bold the serif display.
4. Accent is `--color-accent` `#841E1E` (oxblood). It is a **signal, not a paint**: hairline rules, 2–4px markers, eyebrows, hover color. Never large filled areas except table header cells and small marks.
5. Radii: `--radius-sm` (4px) on cards/inputs/buttons. `--radius-pill` exists **only** for location/integration pills and the hero eyebrow chip — never on cards or buttons.
6. No gradients, no emoji, no stock photography, no drawn SVG illustration.
7. Trademark disclaimer (`.final-cta__disclaimer`) is **mandatory** on every QuickBooks-related page and in the footer: TechBrot is independent; QuickBooks/Intuit marks belong to Intuit.

---

## CONTENT FUNDAMENTALS

**Voice**: a senior accountant who respects your time. Candid, scope-honest, judgment-led. Confident without hype; precise without jargon. The brand sells *judgment*, so the copy demonstrates judgment — it qualifies claims, names limits, and tells some buyers to go elsewhere.

- **Person**: "we" (the firm) speaking to "you" (the owner). Direct address everywhere: "your books", "your close".
- **Casing**: sentence case for all headings and buttons. UPPERCASE is reserved for eyebrows/labels (`--ls-wide` tracking, 12–13px sans).
- **Headlines**: plain declarative sentences in Fraunces, often two short sentences. Pattern: *fact, then stance* — "Automation handles the data entry. We handle the judgment."
- **Eyebrows**: terse topic labels — "WHAT WE DO", "HOW IT WORKS", "INDEPENDENT DISCLOSURE".
- **Scope honesty is a brand feature**: dedicated "what we don't do" blocks (`.scope-grid`), urgency tiers with honest response times, vs-tables that concede rows to competitors (`data-winner="them"` exists and is used).
- **Numbers are load-bearing**: specific fees, dates, deadlines, response windows. Always `font-variant-numeric: tabular-nums`. Vague marketing numbers are off-brand.
- **Buyer signals in italic serif**: cards often open with an italic Fraunces sentence describing the reader's situation ("Your books are eight months behind…") before the heading.
- **No emoji. No exclamation marks.** Arrows (→) are the only decorative glyph, used as link affordances.
- **Compliance copy is part of the voice**: independence/trademark disclosures are written in full sentences, small but never hidden.
- **CTAs**: calm imperatives — "Speak to an expert", "Get a quote", "See how it works". Never "Get started 🚀", never urgency theatrics.

## VISUAL FOUNDATIONS

**Color.** Warm paper field (`--color-paper` #FAFAF7) with warm-paper alternation (`--bg-section-alt` #F3F1EB) and a deeper paper (#ECEAE2) for table heads. Near-black ink ramp (#0B0B0B → #8B8B85) does almost all the work. Oxblood `#841E1E` is the lone chromatic note. One near-black dark surface (`--color-surface-dark` #111110) for the final-CTA band and integrations band — at most 1–2 dark bands per page. Functional colors: focus blue #0F4FCC (focus rings only), success green, warning amber. Tinted accent fills are always `rgba(132,30,30,0.04)` — whisper-quiet.

**Type.** Fraunces (optical sizing 9..144) at regular weight for every heading; tight leading (`--lh-tight` 1.05) and negative tracking (`--ls-tight` −0.02em) at display sizes. Italic Fraunces = human aside (buyer signals, honesty notes, hints). Inter for everything else; medium/semibold for UI emphasis, never the serif. JetBrains Mono appears in the kb-\* knowledge-base family for question IDs and meta labels. Scale runs --fs-12…--fs-68 with hero display at `clamp(2.5rem, 6vw, 4.5rem)`.

**Space.** 4px-base scale to `--space-40` (10rem). Sections breathe: 4rem mobile / 6rem desktop block padding; heroes up to 8rem. Content max 1240px (`--container-max`), prose 820px. Generous space is a stated brand value — when in doubt, add space, not boxes.

**Borders & cards.** The system is drawn with **1px hairlines** (`--border-hairline` #DDD9CC), not shadows. Cards: paper bg, 1px hairline, 4px radius, flat. Hover: border darkens to ink, `translateY(-2px)`, sometimes `--shadow-md`. Shadows exist (xs→lg, very soft, ink-tinted) but are reserved for hover lift and overlays. Accent borders: 2–4px `border-inline-start` oxblood marks featured/disclosure blocks (vs-status, expert-review, contact promise). Top-edge accent: 32–48px × 2–3px oxblood bar (`.cadence__phase::before`, `.diagnostic-card::before`). Tiny oxblood dots (4–8px circles) as markers.

**Backgrounds.** Flat paper colors only. Alternating `.section--alt` warm bands create rhythm; full-width 16:6 photographic "editorial breaks" are the only imagery slots. No patterns, no textures, no gradients, no blur/transparency chrome (the one transparency family is the inverted-ink rgba ramp on dark surfaces).

**Motion.** Fast and damped: 120/200/360/600ms with `--ease-out: cubic-bezier(0.16,1,0.3,1)`. Color/border transitions at 200ms; card lifts at 360ms. FAQ panels animate `grid-template-rows` at 420ms. `prefers-reduced-motion` zeroes all durations (built into tokens). No bounces in practice (`--ease-spring` exists, unused), no parallax, no scroll-triggered theatrics, no infinite loops.

**Hover states.** Text → oxblood. Card borders → ink + small lift. Pills/tiles invert to solid ink with paper text. Text-button underline scales from 60% → 100% width. Press: `translateY(1px)` on buttons.

**Focus.** 2px `--color-focus` blue outline, 3px offset — distinct from the brand accent on purpose. Selection is inverted ink.

**Imagery.** When used at all: real, warm-toned, documentary (workspaces, ledgers, hands) in editorial-break slots with 4px radius. Never stock-smiling-people, never illustration. Team portraits fall back to typographic initials placeholders, not avatars.

**Layout.** Single-column editorial heroes (max 880px, left-aligned); 2/3/4-column hairline card grids; sticky sidebars (contact trust column, kb quickjump) under a 72px header height token. Comparison tables are full-bleed grids with hairline rows; the "us" column gets an oxblood left rule and 4% tint.

## ICONOGRAPHY

The brand is deliberately **almost icon-free** — typography and hairlines do the signaling.

- **Unicode arrows `→`** are the primary "icon": link affordances (`.service-card__list a::before`, `.service-card__cta::after`), animated 3–4px translate on hover.
- **CSS-drawn marks**: plus/minus disclosure indicators built from `background: linear-gradient(currentColor…)` strips (FAQ) or `::before/::after` bars (kb-item); checkbox checkmarks from rotated borders; oxblood dots and dashes from plain divs. No icon font.
- **One embedded SVG**: a 12px chevron data-URI in `.intake-field__select`. Contact methods/signals reserve a small `__icon` slot (oxblood, \~16px) for inline SVG strokes.
- **If real icons are required** (contact methods, trust signals): use **Lucide** at `stroke-width: 1.5`, 16–20px, `currentColor` (oxblood or ink). CDN: `https://unpkg.com/lucide-static@latest/icons/<name>.svg` — copy the inline SVG, don't hotlink. This is a *substitution policy*, not a sighted pattern — the codebase ships no icon set. **FLAG: no proprietary icon assets exist.**
- **No emoji, ever.**
- **Logo**: the official mark is an italic serif lowercase "t" supplied by the founder — `assets/logo-t-black.png` (paper surfaces) and `assets/logo-t-white.png` (dark surfaces). Pair with the Fraunces `TechBrot` wordmark (`Brot` in oxblood). Never recolor, tile, or box the mark. Vector source not yet supplied — PNGs are 200×240.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global CSS entry — imports fonts → tokens → base → components → pages |
| `css/00-fonts.css` | Google Fonts import (Fraunces, Inter, JetBrains Mono) — no local binaries yet |
| `css/01-tokens.css` | **LOCKED** design tokens |
| `css/02-base.css` | **LOCKED** reset, typography defaults, container/section system |
| `css/03-components.css` | Full production component CSS (BEM: `.btn`, `.service-card`, `.vs-table`, `.intake-*`, `.faq__*`, `.kb-*`…) |
| `css/04-pages.css` | Page-scoped patterns (`page--home`, hub pages, trust, pricing, methodology…) |
| `css/05-kit.css` | Brief-§5 kit: in-brief, pull, framework, figure, stat, cta-band, trust-row, phone-cta, disclosure, card-grid, breadcrumb, toc, related, hero tiers |
| `guidelines/` | Foundation specimen cards + token specimen board (Design System tab) |
| `components/core/` | `Button`, `Eyebrow`, `SectionHeader` |
| `components/cards/` | `ServiceCard`, `GuideCard`, `BuyerCard` |
| `components/editorial/` | `InBrief`, `PullQuote`, `Framework`, `Stat` |
| `components/conversion/` | `CtaBand`, `TrustRow`, `PhoneCta`, `Disclosure` |
| `components/navigation/` | `Breadcrumb`, `Toc`, `Related` |
| `components/disclosure/` | `Faq` |
| `ui_kits/website/` | The five tier templates: `Hub`, `Service` (MOFU), `Contact` (BOFU), `Guide`, `Location` + overview `index.html` |
| `templates/t-hub/ … t-location/` | The same five tiers packaged as copyable starting templates (each self-contained with `ds-base.js`) |
| `assets/` | `logo-t-black.png` / `logo-t-white.png` (official italic-t mark), `motif-ledger-full.svg`, `motif-ledger-single.svg` |
| `uploads/techbrot-design-brief.md` | The founder's full design brief — mandate, §5 kit, §6 tier sequences, §7 motif spec |
| `SKILL.md` | Agent-skill entry point |

### The five page tiers (brief §6 — fixed sequences)

Every new page must follow one of the five tier skeletons in `ui_kits/website/`: **T-HUB** (dark hero, full-grade ledger motif), **T-MOFU** (paper hero, restrained motif, max one figure), **T-BOFU** (compact hero, no imagery, trust-row above fold), **T-GUIDE** (editorial hero, sticky toc, 820px prose), **T-LOCATION** (dark hero + state motif, operator section). Same tier → same skeleton; vary expression, never the foundations.

### Component CSS quick-reference (already styled in `03-components.css`)

`.btn` (`--primary/--ghost/--text/--inverted`, `--sm/--md/--lg`) · `.hero` · `.proof-strip` · `.tldr` · `.ai-summary` · `.service-card` · `.buyer-card` · `.process-step` · `.pillar` · `.why-network` · `.location-pill` · `.industry-tile` · `.guide-card` · `.authority__item` · `.faq__*` · `.final-cta` · `.vs-hero` · `.vs-status` · `.vs-table` · `.vs-verdict` · `.delivery-mode` · `.scope-grid` · `.signal-card` · `.cadence` · `.deliverables-grid` · `.editorial-break` · `.expert-review` · `.urgency-tier` · `.diagnostic-card` · `.intake-form` system · `.contact-*` suite · `.kb-*` knowledge-base family · `.comparison-table` · `.integration-pill` · **kit (05-kit.css):** `.in-brief` · `.pull` · `.framework` · `.figure` · `.stat` · `.section--cta-band` · `.trust-row` · `.phone-cta` · `.disclosure` · `.card`/`.card-grid` · `.breadcrumb` · `.toc` · `.related` · `.hero--hub/--service/--compact/--editorial`

When building anything new: find the nearest existing pattern above and reuse its classes before writing new CSS.
