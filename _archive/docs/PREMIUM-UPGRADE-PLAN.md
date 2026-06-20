# PREMIUM-UPGRADE-PLAN.md — upgrade the current cobalt CSS to top-0.01%-in-niche, with Code
Owner: founder · Author: Code/Claude · Created 2026-06-16 · Status: DRAFT — review, then execute in GATED steps.

**DECISION (founder 2026-06-16):** we are **upgrading the CURRENT cobalt CSS system to premium with Code** —
NOT a separate Claude Design redesign. This doc is the **build/implementation truth**: the honest audit + the
upgrade plan + per-type design + the component/visual inventory + the gated execution sequence. It OPERATIONALIZES
the creative rulings in **REDESIGN-BRIEF.md** (the look/feel/goal — cold-light, ink-blue, signature diagrams,
fit-to-purpose, forms ruling, honesty) against the real `src/assets/css` system. Where REDESIGN-BRIEF sets the
WHAT, this sets the HOW. Build nothing until the founder approves; then one part at a time, founder reviews each.
**Relationship to canonical docs:** REDESIGN-BRIEF.md = CREATIVE truth · this = EXECUTION/BUILD truth ·
ARCHITECTURE-TRUTH = URLs/tiers · PAGE-TYPE-REGISTRY = type→sections · BUILD-TRACKER = operational status.
REDESIGN-BRIEF §12 "Design generates options" is SUPERSEDED for execution by this Code-upgrade path.

═══════════════════════════════════════════════════════════════
§1 — HONEST AUDIT OF THE CURRENT SYSTEM (what's strong · what's lacking)
═══════════════════════════════════════════════════════════════
**Architecture (STRONG — keep):** 10 ordered CSS layers (`00-fonts`→`09-extensions`) bundled to ONE
`site.min.css` by a first-class Eleventy template (`src/assets/css/site.min.css.11ty.js`, esbuild-minified,
58 KB hard gate). Token-driven, class-based, one source → every page inherits. Battery gates css-drift (zero
hardcoded hex / undeclared custom props), css-bytes, design-fidelity. **This foundation already scales to
2000+ pages** — the gaps below are in the VISUAL LAYER and the SECTION-LAYOUT vocabulary, not the architecture.

**Tokens (STRONG structure, WRONG palette + thin visual tokens):**
- HAVE: full type scale (`fs-11…68`), line-height/letter-spacing/weight scales, spacing (`space-1…40`), 3
  containers, radius scale (`xs…pill`), 4-step elevation, motion durations (4) + easings (3 incl. spring),
  z-index scale, AA-verified color ramp, 3 tier surfaces, dark-mode + reduced-motion scaffolds.
- LACK: **palette is WARM** (cream `#FBFAF7` + cobalt `#2B4FD6`) — the brief wants **cold/light + confident
  ink-blue**; this is a token-VALUE re-cut (names preserved). · No **visual-system tokens**: diagram color
  roles (debit/credit/positive/negative/neutral/grid), diagram stroke widths, illustration palette, **icon-size
  scale**, **content-measure** tokens, motion **stagger/scroll** tokens, surface tokens beyond the 3 tints
  (elevated card · sunken well · dark feature band · accent callout), a cooler crisp **elevation** re-cut +
  one "feature/3D-look" depth token. (Closes the §10 "tokens beyond color" gap.)

**Components (GOOD kit, missing the premium visual layer):**
- HAVE: `buyer-card · vs-table/vs-scroll · proof-strip · intake-form · process-diagram · fix-steps ·
  call-breakout · byline-block · meta-reviewed · guide-grid/toc · pull-quote · ai-summary--ruled · trust-row ·
  checks-list · stat-row/stat__delta · flow · error-badge · disclosure · call-bar · tldr/in-brief`.
- LACK: the **signature live-SVG accounting-diagram system** (the heart — none exists) · a **custom SVG icon
  system** (only raw `icons/*.svg` like phone) · **CallBand as PRIMARY** conversion (today `call-breakout` is a
  compact secondary box) · **mid-body lead-magnet** block (free file-review offer, no form) · **premium card /
  text-box / eyebrow** variants (current cards are basic) · **3D-look feature** visuals · designed
  **empty/utility states** · listing (`post-card/filter/pagination`), tool (`tool-panel/result`), research
  (`dataset-header`) families. (Most catalogued already in REDESIGN-BRIEF §13.1/§13.1b.)

**Layout system (THE core scalability gap — why pages look same-y):** the ENTIRE section vocabulary today is
`.section` + `.container` + `.grid-2`/`.grid-3`. Every section is "section → container → a 2- or 3-card grid."
There is **no library of distinct SECTION LAYOUTS**, so pages repeat the same rhythm. This is the #1 thing to
fix for premium feel AND for non-repetitive scale to 2000 pages.

**Motion (works, but templated):** scroll entrance is ONE uniform `tb-rise` (8px translateY) on every section's
children — the exact "uniform fade-up = AI-generated" tell the brief bans. View-transition scaffold + hover
micro-states exist. LACK: section-AWARE reveals, **draw-on for SVG diagrams**, orchestrated hero entrance,
stagger, scroll-progress.

**Nav / chrome (minimal/TODO):** no canonical mega-menu; footer is basic. The brief wants a premium **mid-mega**
nav + mobile footer accordion. Net-new.

**Build pipeline (must LOCK):** the `src/assets/css/*.css` headers say "INSTALLED from handoff by
`extract_css.py`." `npm run build` does NOT re-extract (safe), but `build-prod.ps1`'s `extract_css` step WOULD
clobber hand-edits (documented). For Code to own the upgrade, **`src/assets/css` becomes the authoritative
source; `extract_css.py`/`build-prod.ps1` extract step is retired; headers updated.** (Step 0.)

═══════════════════════════════════════════════════════════════
§2 — THE UPGRADE PLAN (what to add / restructure — token-driven, scalable, maintainable)
═══════════════════════════════════════════════════════════════
**A. TOKENS — re-cut + extend (one system, names preserved where enforced):**
- **Palette → cold/light + ink-blue:** re-cut `--color-paper*` to cool near-white / cool greys; `--color-ink*`
  to a cool near-black; `--color-accent*` to a confident **ink-blue** (re-judged from cobalt). Re-derive the 3
  tier surfaces on the cold base. Every text token re-verified ≥4.5:1 AA (re-run the AA matrix). Crisp, cooler
  elevation re-cut (Stripe/Linear register) + one `--elevation-feature` depth for "3D-look" focal pieces.
- **New token groups (NEW-CONCEPT):** `--diagram-*` (color roles + stroke widths) · `--illus-*` (illustration
  palette) · `--icon-{sm,md,lg}` · `--measure-{prose,wide}` (content width) · `--surface-{raised,well,feature,
  callout}` · `--motion-stagger` + scroll tokens. All token-only so the css-drift gate stays GREEN.

**B. THE SECTION-LAYOUT SYSTEM (the anti-monotony engine — biggest lever):** build a LIBRARY of named section
layouts as Nunjucks macros/partials + CSS classes, each pairing a structure + surface + rhythm so consecutive
sections differ by construction:
- `section--split` (text + visual 2-col, L/R **alternating**) · `section--feature` (full-bleed tonal/dark band)
  · `section--asymmetric` (1/3 + 2/3) · `section--editorial` (centered narrow measure, text-led) ·
  `section--stat-band` · `section--diagram-feature` (the signature diagram, full-width) · `section--zigzag`
  (alternating image/text rows) · `section--callout` (accent-tinted) · `section--grid` (cards) · `section--faq`.
- **Pages declare a SEQUENCE of section types in data** (`.11tydata.js`); a layout macro renders the matching
  distinct layout. → no two adjacent the same, by construction; 2000 pages compose varied pages from ONE macro
  library (maintainable: change the macro, every page updates).

**C. COMPONENT LIBRARY — expand to premium (restyle existing + add net-new):** CallBand (primary) · mid-body
lead-magnet · premium cards/text-boxes/eyebrows · refined FAQ accordion · the signature diagram family (§5) ·
custom icon set (§5) · utility states (§5) · listing/tool/research families (post-cutover types). Existing kit
restyled to the cold/ink-blue system.

**D. MOTION — richen + make section-aware:** replace the uniform `tb-rise` with per-section reveals (a stat
band counts up · a diagram draws on · a quote fades · a feature scales in), orchestrated hero entrance on
money/pillar ATF, stagger, scroll-progress where earned. CLS 0 (animate within reserved space); fully
`prefers-reduced-motion`-gated (token-zeroed already).

**E. BUILD-PIPELINE FLIP (Step 0):** `src/assets/css` authoritative; retire `extract_css.py` from all build
paths; update the 10 file headers; never run `build-prod.ps1`'s extract. Re-set the CSS byte gate for the new
system (raise from 58 KB to a sane new ceiling and hold it; the diagram/icon SVGs live as files/inline, not CSS).

═══════════════════════════════════════════════════════════════
§3 — SECTION VARIETY (hard rule + gate)
═══════════════════════════════════════════════════════════════
**RULE:** no two same-looking sections, no repeated UX, on a single page; the system composes into visibly
DIFFERENT section layouts (§2B). **GATE (extends design-fidelity battery #12):**
- **#12a** ≤1 numbered system per page (process-diagram/fix-steps/numbered flow).
- **#12b** NO two ADJACENT sections share the same `section--*` layout signature — now **fully automatable**
  because §2B gives every section a named layout class; the battery reads the ordered `section--*` sequence per
  built page and FAILs adjacent duplicates.
- **#12c** variety floor (≥N distinct layouts on long pages) — battery reports the sequence; design-review confirms.
- **#12d** hero/treatment fits the job (legal/utility ≠ marketing hero; no uniform t-hub hero).

═══════════════════════════════════════════════════════════════
§4 — PAGE TYPES + NAV
═══════════════════════════════════════════════════════════════
**Every TYPE gets its OWN hero treatment (no uniform hero); fit-to-purpose (REDESIGN-BRIEF §8).** The full
type list (all 142 built pages map to one; growth types designed too):
| TYPE | hero treatment |
|---|---|
| home (t-hub) | flagship ATF + signature diagram + authority thesis + CALL |
| silo/sub-hub (t-hub) | editorial routing hero + visual routing |
| product/consideration (t-mofu) | confident value hero + vs-table/diagram tease; file-review/CALL |
| comparison (t-mofu) | comparison hero + vs-table + verdict (fair) |
| conversion/money (t-bofu) | chrome-minimal problem→outcome hero + CallBand; no form |
| honest-triage (t-bofu) | triage hero + disclosure ATF + CallBand; no form (REDESIGN-BRIEF §13.4 copy) |
| reference/long-form (t-guide) | article hero + byline + sticky TOC |
| error/problem (t-guide) | focused problem hero + error-badge + fix path |
| legal-doc (`/legal/*`) | **clean authoritative DOCUMENT header — NO marketing hero**, TOC, readability, minimal motion |
| conversion-form (`/contact/`,`/file-review/`) | premium hero + the full form as centerpiece + "or call" |
| `/pricing/` (own TYPE) | t-bofu-style fixed-fee-transparency hero → CallBand; hub + 5 children |
| state pillar (t-location) | location hero + small bottom form + sticky call-bar |
| location child (city/industry/service) | lighter location/conversion hero (NOT the pillar hero) |
| research/dataset (t-guide) | data-forward hero + dataset-header |
| + growth: glossary · tools · case-study · switch · blog · reviews-listing · support | per REDESIGN-BRIEF §13.6/§8 |

**NAV — premium "mid-mega" (founder 2026-06-16):**
- Primary nav = a **contained MID-MEGA panel** within the full nav bar (~50% width, NOT full-bleed) — a premium
  multi-column panel anchored under its trigger, surfacing the silo (accounting / quickbooks / vs / resources).
- **`find-an-accountant` = a DIRECT LINK** (no dropdown).
- Persistent CALL affordance (tap-to-call mobile). Per-type local nav: t-guide sticky TOC · t-bofu minimal/no-nav.
- **Footer: light**, editorial, silo-organized; **mobile = ACCORDION** (collapsed, tap-expand; `<details>`/ARIA;
  tap targets ≥24px — closes the WCAG 2.2 finding). Breadcrumb below hero, `BreadcrumbList` schema, every page.

═══════════════════════════════════════════════════════════════
§5 — THE PREMIUM VISUAL LAYER (the heart of the upgrade)
═══════════════════════════════════════════════════════════════
Same structure, ELEVATED with images, SVG icons, live-SVG diagrams/graphs, 3D-look visuals — premium through
**space + craft + the diagrams**, NOT density (Stripe/Linear/Mercury register).
- **SIGNATURE — "Ledger Made Visible" live-SVG accounting-diagram language:** T-account / ledger visuals,
  reconciliation flows, cleanup before/after, decision trees, migration flows, data figures — ONE coherent
  visual grammar (stroke/geometry/color-role tokens from §2A), reusable as 20–30 patterns. This IS the ownable
  signature (REDESIGN-BRIEF §2/§13.11) + the AI-era source-validation cue + "expertise made visible." Animatable
  (draw-on, §2D), themeable via CSS vars, CLS 0.
- **Custom SVG icon system:** one cohesive set (geometric, optically balanced, consistent stroke) for service
  categories / trust signals / nav — not a generic pack.
- **Premium components:** eyebrows · premium cards + text-boxes · refined FAQ accordion · **CallBand (PRIMARY
  conversion)** with tap-to-call + "what happens when you call" + response/hours + trust micro-row · the
  **mid-body lead-magnet** (free file-review offer, **no form** — routes to /file-review/ or CALL).
- **Palette/feel:** cold/light foundation + confident **ink-blue** accent; spacious, modern, fintech-sleek.
- **Motion:** rich where money/ATF earns it (hero entrance, scroll-reveal diagrams, micro-interactions); CLS 0;
  `prefers-reduced-motion` respected.

═══════════════════════════════════════════════════════════════
§6 — SCALABILITY + MAINTAINABILITY (so 300→2000+ pages inherit it)
═══════════════════════════════════════════════════════════════
- **One token-driven system** — all visuals reference tokens; swap palette/type centrally; css-drift gate
  forbids hardcoded values. **One bundled `site.min.css`** (re-set byte gate).
- **Macro/partial-driven sections + heroes** — the §2B section-layout library + per-type hero partials mean a
  page = front-matter (type + ordered section sequence) + data arrays. New states/guides/blogs inherit every
  pattern with zero new CSS. Change a macro → all pages update.
- **The signature diagrams + icons** are a reusable library (parameterized), not per-page art.
- **Battery gates** (equity · drift · bytes · section-variety · fidelity · overflow · axe) run every change, so
  scale never silently degrades.

═══════════════════════════════════════════════════════════════
§7 — GATED EXECUTION (one part at a time; founder reviews each; prove on the proving set FIRST)
═══════════════════════════════════════════════════════════════
Build NOTHING until this plan is approved. Then, each step → build → battery GREEN → push → **founder reviews on
preview → GO** before the next:
- **Step 0 — pipeline lock + byte-gate re-set** (retire extract clobber; `src/assets/css` authoritative).
- **Step 1 — token re-cut** (cold/light + ink-blue + new visual tokens; AA matrix re-verified). Prove on 2 pages.
- **Step 2 — section-layout system + the variety gate** (the engine).
- **Step 3 — signature diagram system + custom icon set** (the visual heart).
- **Step 4 — component library** (CallBand primary · lead-magnet · premium cards/eyebrows/FAQ · utility states).
- **Step 5 — nav (mid-mega) + footer (light + mobile accordion) + breadcrumb slotting.**
- **Step 6 — motion upgrade** (section-aware reveals · hero entrance · diagram draw-on).
- **Step 7 — per-type heroes** (unique per type; legal/utility simple).
- **Step 8 — THE PROVING SET (~11 page types, REDESIGN-BRIEF §13.6):** build each to full premium fidelity →
  founder sign-off on the whole system → **only then** mass-apply across the remaining pages **wave-by-wave**
  (battery gating every commit, per the standing migration discipline).
Each step is also where REDESIGN-BRIEF's folded-in rulings execute (forms propagation §13.3 · tier re-tiering ·
honest-triage compliance §13.4). At Step 8 the captured system IS the locked design-system source (Code-owns-
implementation rule).

═══════════════════════════════════════════════════════════════
§8 — HARD RULES CARRIED (non-negotiable through the upgrade)
═══════════════════════════════════════════════════════════════
- **Trust is the primary asset — real only.** No fabricated stats/counters/badges/reviews/team-photos/urgency.
  Independent firm; Certified ProAdvisor; the **2 real Clutch reviews = Heidi Schubert + Barbara Best**; any
  additional review slots are `[PLACEHOLDER]` until real; no AggregateRating until 5+.
- **Forms only on `/contact/`, `/file-review/`, and state pillars** (small). **Everything else converts by
  CALL** (CallBand). GA4 `phone_click` primary.
- **URL byte-identity + content equity preserved** (restyle never guts headings/FAQ/schema/intent;
  content-equity battery vs `baseline.json` stays GREEN).
- **Mobile-first · CLS 0 · Lighthouse ≥95 (target 100) · WCAG AA (incl. 2.2 target-size) · lightest-weight,
  semantic HTML.** Fail-closed env (noindex unless ENVIRONMENT=production).
- Founder-name-zero (firm / "Certified ProAdvisor team"; David Westgate in Person schema only).
