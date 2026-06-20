# TechBrot Design System

**TechBrot — Accounting Technology Advisory.** TechBrot helps small businesses, entrepreneurs, and growing companies improve their accounting systems, bookkeeping operations, financial workflows, and business processes. QuickBooks is the primary acquisition channel today, but the brand is deliberately **platform-agnostic**: it must remain relevant across accounting, payroll, finance, ecommerce, and operational systems — even if QuickBooks disappears tomorrow.

**Positioning:** the most trusted accounting technology authority. Peer set is Notion, Linear, Stripe, Anthropic, Ramp, Mercury — *not* bookkeeping or CPA firms. Premium editorial design, exceptional readability, AI-search visibility, conversion-focused UX.

**Sources:** no codebase, Figma, or existing brand assets were provided. This system was designed from scratch per the founding brief (June 2026). The brief's constraints: typography-led, Fraunces headings, light-first, no bookkeeping clichés, no stock photos, no bright accounting-green, SVG-only illustration, semantic HTML, minimal JS.

---

## CONTENT FUNDAMENTALS

**Voice:** a calm senior advisor, not a vendor. Confident declaratives; no hype, no exclamation marks, no emoji — ever. Authority comes from specificity ("Close your books in 5 days, not 25"), never from superlatives ("world-class", "revolutionary" are banned).

**Person:** "you/your" for the reader, "we" for TechBrot. Never "users" or "clients" in site copy — "your business", "your books", "your team".

**Casing:** Sentence case everywhere — headings, buttons, nav, labels. The only uppercase is the eyebrow/overline style (`.tb-eyebrow`). Never title case, never all-caps headlines.

**Headlines:** short, declarative, editorial. Pattern: plain statement of value or finding. *"Your books should close themselves."* / *"What a clean month-end actually looks like."* Questions allowed in article titles, never in CTAs.

**CTAs:** verb-first, specific, low-pressure: "Book a systems review", "Read the framework", "See the methodology". Banned: "Get started!", "Learn more", "Unlock", "Supercharge".

**Numbers:** figures are content. Always tabular, always specific, always sourced. "247 QuickBooks files audited" beats "hundreds of clients".

**Platform-agnostic rule:** QuickBooks is named as one system among many. Write "your accounting system (QuickBooks, Xero, NetSuite…)" not "your QuickBooks". Category terms ("accounting technology", "financial operations") carry the SEO/AI-search weight.

---

## VISUAL FOUNDATIONS

**Color.** Warm paper (`#FBFAF7`) pages, white cards, warm ink (`#1A1915`) text — never pure black/white pairs. One accent: **cobalt** (`#2B4FD6`) for links and interactive states. **Brass** (`#8A6321`) is an editorial garnish only — eyebrows, diagram secondaries, highlighted figures. Semantic green/amber/red are muted and rare. No gradients anywhere. Dark is an *inverted section* treatment (footer, occasional band) on `#181711`, not a full theme.

**Type.** Typography IS the design. Fraunces (variable; `opsz` 90 + SOFT 0/WONK 0 at display sizes, `opsz` 40 at heading sizes) for h1–h4; Public Sans for body/UI; IBM Plex Mono for figures, code, and data labels. Article body is 18px/1.65 on a 680px measure. Display tracking −0.022em. Hierarchy comes from size + the serif/sans contrast, not from color or weight piles.

**Spacing & rhythm.** 4px grid. Sections breathe at 96–128px. Generous whitespace is the principal layout material; density is reserved for tables and diagrams. Container 1120px.

**Backgrounds.** Flat paper. No textures, patterns, gradients, or hero imagery. Visual interest comes from type scale, hairline rules, and SVG diagrams. Occasional inverted ink band for contrast.

**Borders & cards.** Hairlines (`#E7E4DB`, 1px) do most separation work. Cards: white, 1px hairline, 10px radius, shadow only on hover/raise. No colored left-border accent cards.

**Shadows.** Warm-tinted, layered, faint (`--shadow-xs/sm/md/lg`). Default state of most things is *flat*; elevation signals interactivity or overlay.

**Radii.** 6px inputs/buttons, 10px cards, 16px feature panels, full only for avatars and badges. Calm, not bubbly.

**Motion.** Quiet and fast: 120–200ms fades and ≤4px translates, `--ease-out`. No bounces, no parallax, no scroll-jacking, no infinite loops. Honors `prefers-reduced-motion`.

**Hover:** darken (ink buttons lighten one step, links go full cobalt, cards raise to `--shadow-sm` + border-strong). **Press:** translateY(0.5px), one step darker. No scale-shrink.

**Transparency & blur:** none, except an optional `rgba(251,250,247,.85)` + blur sticky header.

**Imagery:** no stock photography. The visual layer is the SVG diagram system (see `components/diagrams/`): hairline boxes, mono labels, cobalt for the highlighted path, brass for secondary emphasis, paper fills. Diagrams explain — workflows, comparisons, decision trees, frameworks — never decorate.

---

## ICONOGRAPHY

- **Icon set:** [Lucide](https://lucide.dev) **vendored inline** — never CDN. The 8-icon production set lives in `assets/icons/` (stroke 1.75, 24 viewBox, currentColor, sized 16/20/24); diff against the official lucide repo before cutover (see `assets/icons/README.md`). Stroke style matches the hairline-and-ink system.
- **Usage:** icons are functional only — nav affordances, input affixes, list markers in comparison tables. Never decorative icon grids, never icon-per-paragraph.
- **No emoji. No unicode-dingbat icons.** Arrows in text use real glyphs (→) sparingly in links/CTAs.
- **Logo assets** live in `assets/logo/` (see `assets/logo/SPECS.md` for geometry, clear space, minimum sizes, light/dark rules).

---

## INDEX

| Path | What |
|---|---|
| `styles.css` | Global CSS entry — imports everything under `tokens/` |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css` |
| `assets/logo/` | Full logo system (SVG) + `SPECS.md` production specifications |
| `guidelines/` | Foundation specimen cards (Design System tab) + `accessibility.md`, `implementation.md` (Bootstrap Studio & Claude Code guides) |
| `components/core/` | `Button`, `Badge`, `Avatar`, `Logo` |
| `components/forms/` | `Field`, `Input`, `Select`, `Checkbox`, `Switch` |
| `components/content/` | `Card`, `Callout`, `Stat`, `DataTable` |
| `components/navigation/` | `Navbar`, `Footer` |
| `components/diagrams/` | `ProcessFlow`, `ComparisonGrid`, `DecisionTree`, `BarChart` — the SVG illustration & chart system |
| `ui_kits/website/` | `HomeScreen`, `ArticleScreen`, `ServicesScreen` — `index.html` is the interactive site (nav switches screens) |
| `SKILL.md` | Agent-skill entry point |
| `handoff/` | **Live-build re-skin** (Stage 2): `00-fonts.SKIN.css` (self-hosted woff2 specs), `01-tokens.SKIN.css` (complete re-skin under the build's enforced token names — cobalt accent, teal focus, new paper ramp, AA-computed), `02-conversion.SKIN.css` + `03-chrome.SKIN.css` (conversion family + site chrome), `04-motion.SKIN.css` (scroll entrance, view transitions, hover micro-states) |
| `guidelines/tiers/` | **The five tier templates restated** — t-hub / t-mofu / t-guide / t-bofu / t-location (NY reference) at desktop + generated 360/390 mobile proofs; `tier-common.css` doubles as the responsive spec |
| `assets/motif/` | The Alignment Field motif — `motif-align-full.svg` (hero), `motif-align-single.svg` (punctuation); spec in `guidelines/motif-spec.md` |
| `assets/icons/` | Vendored inline Lucide set (stroke 1.75) — see its README flag |
| `assets/brand/` | Favicon/PWA set (generated PNGs), `site.webmanifest`, `BRAND-CHAIN.md` |
| `assets/og/` | OG-card template (1200×630) for the batch generator |

Every component ships as `<Name>.jsx` + `<Name>.d.ts` (props contract) + `<Name>.prompt.md` (usage). All are reachable at runtime via `window.TechBrotDesignSystem_de93db`.

**Fonts:** the live-build skin self-hosts woff2 (specs + metric fallbacks in `handoff/00-fonts.SKIN.css`; preload swap documented in `assets/brand/BRAND-CHAIN.md`). This design-system project's own specimen cards still load Google Fonts via `tokens/fonts.css` / `handoff/fonts-preview.css` — preview convenience only, never shipped.
