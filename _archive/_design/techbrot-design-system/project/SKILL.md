---
name: techbrot-design
description: Use this skill to generate well-branded interfaces and assets for TechBrot, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

TechBrot is an independent U.S. Certified QuickBooks ProAdvisor accounting & advisory firm. The brand is editorial-enterprise, premium, trust-led: warm paper grounds, near-black ink, Fraunces (regular weight) display, Inter body, one oxblood accent (#841E1E via `--color-accent`) used on under 5% of any surface. Hard bans: gradients, SaaS aesthetics, stock imagery, emoji, pill radii on cards/buttons, fabricated trust numbers.

Key files:
- `readme.md` — full design guide: hard rules, content fundamentals (voice), visual foundations, iconography, file index.
- `styles.css` — single global CSS entry (imports fonts → tokens → base → components → pages → kit). Link this one file.
- `css/01-tokens.css` — LOCKED tokens. Never hardcode a hex; never invent a token.
- `css/03-components.css` + `css/05-kit.css` — the full BEM component vocabulary; reuse these classes before writing new CSS.
- `ui_kits/website/` — the five fixed page tiers (HUB / MOFU / BOFU / GUIDE / LOCATION). New pages must follow one of these skeletons.
- `assets/` — logo tile + ledger-geometry hero motifs (inline-SVG, currentColor-driven).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
