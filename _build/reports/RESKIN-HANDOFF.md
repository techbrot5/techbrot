# RESKIN HANDOFF — component-level reskin to the refined design system
*Prepared round 98 (2026-06-19). For Claude Design. Pre-flip, noindex preview. This is a RESTYLE at the token/CSS-layer level — content, URLs, schema, and DOM structure stay UNTOUCHED; every page inherits via the shared layers. Same method as the first skin.*

## 0. READINESS VERDICT — ✅ READY (one prep item)
The site is in a clean, stable state to reskin. Proven by the standing battery gates (current run, 581 pages):
- **`css-drift` PASS — zero hardcoded hex, zero undeclared custom properties in the bundle.** Every color/space/type value resolves to a token. A token re-cut propagates site-wide; nothing is hand-painted.
- **`manifest` PASS — every built class is in the manifest∪bundle.** No orphan one-off styles that would survive outside the shared layers.
- **`css-bytes` PASS — 80,259B / 83,968B** minified (source 117,389B). Headroom exists but it's tight; the reskin should re-cut, not pile on.
- Styling is fully centralized in **10 ordered CSS layers** (below) bundled to one `site.min.css`. There is no page-level `<style>` of substance except the documented t-guide template-scoped `article`/`guide-grid`.

**⚠ THE ONE PREP ITEM — regenerate the class manifest before handoff.** `CLASS-MANIFEST.md` (208 classes) is dated **2026-06-13** and predates the entire growth phase. The live CSS now ships **~318 class selectors**. The ~110 new ones are real growth components living in the shared layers (`08-additions.css`, `09-extensions.css`) — **token-based and battery-clean, NOT orphans** — but Design must reskin against the CURRENT set, not the stale 208, or it will miss: `call-block*` (the CALL conversion block), `calc*` (tool/calculator islands), `deliver-card`, `diagram-feature*`/`diagram-figure` (signature SVG diagrams), `disclosure--warn`/`__body`/`__icon` (honest-triage banner), `hero--split`, `container--wide`, `post-card*` (blog), `faq__child*`. §3 below is the current grouped inventory; treat it as the source of truth and regenerate CLASS-MANIFEST.md from the live CSS as step 1.

**Nothing else fights a clean reskin.** No inline styles, no per-page color overrides, no competing component systems. The first skin already proved the layer model holds.

## 1. RESKIN METHOD (equity-safe — same as skin #1)
- Touch **only** `src/assets/css/*.css` (tokens + component layers). Do NOT touch `.njk` content, front-matter, `.11tydata.js`, schema, or URLs.
- Re-cut **`01-tokens.css`** for the refined palette/type/space/motion (the global lever), then adjust component layers (`03`–`09`) where the new system changes a component's look — never its class names or DOM.
- New nav/footer/colors/direction (already built in Design) apply via `04-chrome.css` (header/nav/footer/drawer/call-bar) + `01-tokens.css`. Chrome markup is shared across all pages via `base.njk` — restyle in CSS, don't re-author.
- Gate every step on the existing battery: `css-drift` (no new hardcoded hex), `css-bytes` (≤83,968B min), `manifest` (no new orphan classes — if Design adds a component, add its class to the manifest), `design-fidelity` (per-tier handoff component present), axe/overflow. Equity stays GREEN automatically (content untouched).

## 2. CSS LAYER ARCHITECTURE (the shared system — bundle order)
| Layer | Owns | Reskin touch |
|---|---|---|
| `00-fonts.css` (3) | @font-face (self-hosted woff2) | swap if type system changes |
| `01-tokens.css` (1 class; all `:root` vars) | **color, type scale, spacing, motion tokens** | **PRIMARY LEVER — re-cut here** |
| `02-base.css` (22) | resets, base elements, `.prose`, `.container`, `.section` | light |
| `03-conversion.css` (77) | CTAs (`btn*`), forms (`intake-*`), `faq*`, `ai-summary*`, `vs-table*`, `proof-strip*`, `trust-row*`, `final-cta*`, `review-card*`, tier-section bands | medium |
| `04-chrome.css` (45) | **header, nav, drawer, footer, call-bar, util-bar** (the new nav/footer land here) | **high** |
| `05-tiers.css` (43) | tier heroes (`hero--hub/location/compact`), `grid-2/3`, `flow*`, `stat-row*`, `tldr*`, `in-brief*` | medium |
| `06-motif-rules.css` (9) | "Alignment Field" motif, ruled headings, pull-quote | per motif direction |
| `07-motion.css` (8) | transitions, `card-hover`, scroll states | light |
| `08-additions.css` (21) | growth components (byline-block, call-bar, breakout, stat-cite, toc, pagination, post-card, radio-tiles, fix-steps…) | medium |
| `09-extensions.css` (156) | **the big growth layer**: `call-block*`, `calc*` (tools), `deliver-card*`, `diagram-feature*`/`diagram-figure`, `disclosure*` (triage), `hero--split`, link-underline system, `.lnk-arrow`, etc. | **high — most growth components live here** |

## 3. COMPONENT / CLASS INVENTORY (current, grouped — regenerate manifest to match)
**Chrome (04):** `site-header(--minimal)`, `site-header__logo/actions/cta/phone`, `site-nav`, `nav__link/item/trigger/dropdown/hamburger`, `drawer*` (panel/head/foot/group/link/trigger/close), `site-footer(--minimal/--slim)` + `__grid/col/legal/note/disclosure`, `call-bar(--hidden)/__phone`, `util-bar/__phone`, `skip-link`, `is-scrolled`.
**Conversion / CTA / forms (03):** `btn`,`btn--primary/ghost/inverted/lg`; `intake-form` + `intake-field*`/`intake-group*`/`intake-checkbox*`/`intake-consent`/`intake-grid`; `phone-cta*`; `final-cta*`; `link-standalone`.
**Proof / trust / comparison (03):** `proof-strip(--dark)/__item/__rating`, `trust-row*`, `review-card*`, `vs-scroll`, `vs-table`/`__us`/`__concede`, `mark-yes/no`, `stat-cite*`, `verdict*`.
**Answer / content blocks:** `ai-summary--ruled`/`__item/question/answer`, `faq__list/item/question/trigger/answer` (+ growth `faq__child*`/`faq__more`), `tldr*`, `in-brief*`, `prose`, `pull-quote`, `disclosure(--warn)/__body/__icon`, `byline-block*`, `meta-reviewed`, `breadcrumb`, `toc*`, `pagination`.
**Tier / layout (05 + tier-common):** `hero` + `hero--hub/location/compact/rule/split`, `hero__eyebrow/heading/subheading/actions/motif`, `section(--compact/--alt/--cta-band(--dark))`, `section__eyebrow/heading`, `section--tier-hub/guide/bofu`, `container(--narrow/--wide)`, `grid-2/3`, `flow*` (step/arrow/label/sub), `stat-row`/`stat__value/label/delta`, `checks-list`.
**Signature components (growth, 08/09):** `call-block*` (main/aside/cta/steps/trust/mark/heading/lede/num — the CALL conversion unit), `deliver-card/__tick`, `buyer-card*`, `fix-steps`, `error-badge`, `process-diagram`/`process-step__number` (the ONE numbered system per page), `diagram-figure`/`diagram-feature*` (signature SVGs), `radio-tiles`/`radio-tile*`, `post-card*` (blog), `num`.
**Tool islands (09):** `calc`,`calc__form/field/metric*/result*/noscript` (client-only calculators; CLS-0).
**Motif/motion (06/07):** `cta-band__motif`, `rule-mark(--dark)`, `card-hover`, `pill`, `tile`, `sep`.
*(Full per-layer extraction available via `grep -ohE '\.[a-z][a-zA-Z0-9_-]+' src/assets/css/*.css`. Battery `manifest` check enforces the set.)*

## 4. PAGE-TYPE TEMPLATES (what Design updates against)
`src/_includes/layouts/`:
- **`base.njk`** — head, global schema, chrome (header/nav/drawer/footer/call-bar), env fail-closed, canonical override. All pages extend it.
- **`t-hub.njk`** — silo hubs (e.g. /quickbooks/, /accounting/, /glossary/, /frameworks/). `hero--hub`, ItemList grids.
- **`t-mofu.njk`** — service/explainer pages (most of the QB + accounting silo, /vs/ competitor pages). **Variant: tool** (calculators — adds `calc*` island via `includeCalcJs`).
- **`t-bofu.njk`** — conversion/money pages (pricing, cleanup, file-review, speak-to-expert). **Variant: honest-triage** (support pages — adds `disclosure--warn` ATF banner). Requires a tier-correct handoff component (call-block/intake-form/proof-strip/etc.).
- **`t-guide.njk`** — guides, glossary entries, **frameworks (DefinedTerm)**, resources. `article`/`guide-grid`, `toc`. **Variant: glossary/framework** (DefinedTerm schema).
- **`t-location.njk`** — state pillars + city/industry/service children. `hero--location`, location stats, scenarios. **Variants: city-child, state-service, state-industry, state-triage** (front-matter/section differences, same layout).
- **`t-article.njk`** — blog posts (`post-card*`, byline/dates, BlogPosting schema).

## 5. REFERENCE TARGETS (hand these to Design — they exercise the most components)
### A) BOFU money page — `/accounting/bookkeeping/cleanup-bookkeeping/` (t-bofu)
Section sequence: hero → in-brief → **proof-strip** → definition → signals (buyer-cards) → ai-summary → **deliverables (deliver-card grid)** → **process (process-diagram, the numbered system)** → compare (**vs-table**) → pricing (cards) → operator (**trust-row**) → next → **call-block (CALL conversion)** → faq (accordion) → final-cta band. → Exercises CTAs, proof, ai-summary, deliver-cards, process-diagram, vs-table, pricing, trust-row, call-block, faq, final-cta — the full conversion kit.
### B) Location pillar — `/find-an-accountant/new-york/` (t-location)
Section sequence: breadcrumb → **hero--location** → in-brief → summarized → credentials (**stat-row**) → stats → ai-summary → glossary → delivery → context → scenarios → outcomes → (industry/service grids, vs-table, buyer-cards, FAQ, CTA). → Exercises the location hero, stat-row, scenario/industry grids, vs-table, buyer-cards + full chrome (header/nav/drawer/footer/call-bar).
**Together A+B cover:** all chrome, both conversion-heavy and content-heavy tiers, every high-frequency component. *(Optional 3rd for t-hub coverage: `/quickbooks/` or `/frameworks/`.)*

## 6. GUARDRAILS (carry into the reskin)
- Restyle-only: no content/heading/FAQ/schema/URL changes (equity stays GREEN). New nav/footer = CSS restyle of existing shared chrome markup; if the new nav needs DOM changes, flag them so chrome markup is updated once in `base.njk`, not per page.
- Keep all values tokenized (css-drift stays GREEN). Stay ≤83,968B minified (css-bytes).
- If Design introduces a new component/class, add it to the regenerated manifest (or `manifest` gate fails).
- One numbered system per page (variety-12a), per-tier handoff component (design-fidelity) — both still enforced.
- After the reskin: full battery + the FLIP-GATE live axe/overflow probe run (the ~430 inferred-clean growth pages) on the founder's machine.
