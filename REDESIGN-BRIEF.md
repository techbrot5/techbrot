# REDESIGN-BRIEF.md — the pre-cutover design reset (creative + technical source of truth)
Owner: founder · Strategy by strategy-Claude · **RECONCILED with the as-built system 2026-06-15 (Deliverable 4, Code/Claude)** · **NOW THE CANONICAL CREATIVE TRUTH (founder ruling 2026-06-15; DESIGN-DIRECTION.md retired to legacy)** · Status: NEAR-FINAL — only the §13.4 triage WORDING awaits founder word-level sign-off; on sign-off it is FINAL and goes to Claude Design
Pairs with: ARCHITECTURE-TRUTH.md (what the site is) · PAGE-TYPE-REGISTRY.md (per-type sections) · DESIGN-DIRECTION.md (the founder's direction, which this expands)
Consumed by: **Claude Design** (creative — generates the visual system + options) → **Code** (implements the approved system in 11ty)

> READ FIRST: This brief expands DESIGN-DIRECTION.md into an implementable spec. It does NOT replace
> ARCHITECTURE-TRUTH (URLs/tiers) or the REGISTRY (per-type sections) — it adds the LOOK, FEEL, MOTION,
> COMPONENTS, and TECHNICAL RULES. Where this and DESIGN-DIRECTION agree, both stand; where this is more
> specific, this wins for execution. Nothing here may break the §0 non-negotiables (URL/content/honesty/
> founder-name-zero/performance). The redesign RESTYLES; it never guts equity.
>
> **⟳ RECONCILED 2026-06-15 (Deliverable 4).** §0–§12 are the founder's strategy (verbatim). **§13 is the
> as-built reconciliation layer** (Code/Claude): the gap-analysis checklist, the exact EXISTS-vs-NET-NEW
> component map (real class names), the 3 approved component-kit changes, the forms-ruling registry/
> placement-map delta, the honest-triage compliance spec (⚠ founder sign-off), and the grounded proving set.
> Inline `[→ §13.x]` pointers in §7/§9 link the strategy to the technical reconciliation. **DOC-SYSTEM (✅ RULED
> 2026-06-15):** this brief is now the canonical CREATIVE truth; DESIGN-DIRECTION.md is retired to legacy
> (its direction is absorbed + expanded here) — see §13.7. **FOUNDER RULINGS FOLDED IN 2026-06-15:** the 3
> component changes RATIFIED (§13.2) · honest-triage approach APPROVED with PROPOSED WORDING pending word-level
> sign-off (§13.4 — the last blocker to FINAL) · conversion-form page TYPE added (§13.8) · proving set FINAL,
> one-per-type (§13.6).

═══════════════════════════════════════════════════════════════
§0 — THE ONE GOAL (everything below serves this)
═══════════════════════════════════════════════════════════════
**The site exists to generate CALLS** from high-intent business owners who need QuickBooks/bookkeeping/
advisory help, and to be the **#1-cited, #1-ranked firm in the accounting + QuickBooks niche** across AI
answer engines and Google. Every design decision is judged against: *does this drive a qualified call, or
strengthen the ranking/trust/citation signal that produces calls?* If a choice is only "pretty," it loses.

**Primary conversion = a CALL.** Forms are deliberately minimized (see §7 — the forms ruling is STRICT).
The design must make calling feel like the obvious, premium, low-friction next step on every money page.

═══════════════════════════════════════════════════════════════
§1 — WHAT MAKES THIS THE #1 FIRM IN THE NICHE (the rationale every component must earn against)
═══════════════════════════════════════════════════════════════
The redesign must visibly, structurally express each of these — this is the checklist Design + Code prove
the design against, point by point:

1. **Authority on sight.** The above-the-fold of every money page must look like the most credible,
   most expert accounting/QB firm in the category — editorial, magazine-grade, not a SaaS template.
   Premium is the trust signal: a business owner deciding who touches their books judges competence by
   the surface in the first 2 seconds.
2. **Expertise made visible.** Real QuickBooks/accounting depth (the citable specifics already in the
   content — user ceilings, tax mechanics, cert tiers) presented as confident, well-structured editorial
   — diagrams, data figures, decision tools — not walls of text. Expertise you can SEE.
3. **AI-citation engineered.** Clean semantic structure, rich schema (already built), speakable summaries,
   defined entities/frameworks, answer-shaped sections — so AI engines lift TechBrot as the answer. The
   design must preserve and visually support the ai-summary / Q&A / definition blocks.
4. **Trust without fabrication.** The honesty discipline (§ non-negotiables) is a feature, not a
   constraint: real credentials, real reviews (2 Clutch), honest-triage, "where competitors win" fairness.
   The design signals trustworthiness through restraint and precision, never fake badges/stats.
5. **Conversion clarity.** One obvious action everywhere: CALL. No competing CTAs, no form friction, no
   funnel leakage on conversion pages. The path from "I have a problem" to "I'm on the phone" is short,
   premium, and frictionless.
6. **Performance as luxury.** Fast IS premium. Sub-second feel, CLS 0, lightest-weight HTML, assets that
   earn their bytes. A heavy site reads as amateur; a fast, rich site reads as elite.
7. **Mobile-first excellence.** Most high-intent local searches are mobile. The mobile experience is the
   PRIMARY experience — the tap-to-call, the editorial hero, the readable depth must be best-in-class on a
   phone first, desktop second.
8. **Coherent system.** Distinct hero per page type (unmistakable, owned) + a shared premium mid-body kit
   (coherent, systematic). Looks bespoke per page, behaves like one disciplined system.

═══════════════════════════════════════════════════════════════
§2 — AESTHETIC DIRECTION (founder-set: EDITORIAL & RICH, magazine-grade, serif-led)
═══════════════════════════════════════════════════════════════
**Direction: editorial & rich.** Think the most premium long-form business/finance publication crossed
with a top-tier firm's identity — serif-led, bold confident layouts, generous space, strong typographic
hierarchy, real visual moments. NOT minimal-SaaS, NOT cream-paper-terracotta default, NOT generic fintech.

**Palette (founder-set direction; Design proposes exact hexes as OPTIONS to pick from):**
- Foundation: COLD + LIGHT — cool near-white / cool greys (replaces the warm #FBFAF7 paper). Crisp,
  premium, editorial. NOT cream, NOT cozy.
- Ink: a near-black with a cool undertone for text (editorial contrast).
- Accent: re-judged for the cold base — Design proposes (the old oxblood/cobalt re-evaluated; likely a
  deep, confident editorial accent — ink-blue, deep teal, or a restrained jewel tone — that reads premium
  and authoritative on cool-white, NOT a bright SaaS gradient).
- Tier surfaces: hub / guide / bofu / location surfaces re-derived on the cold base as subtle tonal shifts.
- AA contrast mandatory on every token. Design delivers 2-3 full palette OPTIONS for founder pick.

**Typography (founder-set: RICHEST pairing; Design proposes options):**
- Display: a characterful, premium DISPLAY SERIF (editorial, distinctive — the personality of the brand).
  Used with restraint at large sizes for heroes + section heads.
- Body: a high-quality, highly-readable text face (could be a refined serif for true editorial feel, or a
  premium grotesque/sans for contrast — Design proposes the pairing).
- Utility/data: a precise face for captions, data figures, labels, code/numbers.
- Fluid type scale, intentional weights/widths, strong hierarchy. Equity headings preserved, restyled.
- Design delivers 2-3 PAIRING OPTIONS with the heroes mocked, founder picks.

**The SIGNATURE (the one thing the site is remembered by):** Design proposes — but the brief's intent is
an editorial "expertise made visible" signature: e.g. a recurring data/diagram visual language (live SVG
financial diagrams, a distinctive way numbers/stats are set, a signature hero composition) that says
"these people know accounting cold." Spend the boldness HERE; keep everything else disciplined.

═══════════════════════════════════════════════════════════════
§3 — RESPONSIVE / MOBILE-FIRST (the primary experience)
═══════════════════════════════════════════════════════════════
- **Mobile-first, fully responsive.** Design and build mobile FIRST, enhance up. The phone is the primary
  surface (high-intent local search). Breakpoints at minimum: 360 / 390 / 768 / 1024 / 1440.
- **Tap-to-call is the mobile hero action** — prominent, sticky where appropriate (see §7), thumb-reachable.
- Editorial richness must DEGRADE GRACEFULLY: heavy hero visuals/3D become lighter or static on mobile;
  multi-column editorial becomes single-column readable; data figures reflow, never overflow (the battery
  checks 360/390/768 — zero horizontal overflow is a hard gate).
- Type scale fluid and readable on small screens; tap targets ≥24px (WCAG 2.2 — fixes the queued footer
  finding); no hover-only interactions (everything works on touch).

═══════════════════════════════════════════════════════════════
§4 — NAVIGATION (mega-menu + per-type navbars)
═══════════════════════════════════════════════════════════════
- **Primary nav = MEGA-MENU**: multi-column, content-rich, surfaces the silo architecture visually
  (accounting / find-an-accountant / quickbooks / vs / resources). Premium editorial treatment — not a
  generic dropdown. On mobile: a full-screen or drawer mega-menu, fast, thumb-friendly.
- **Per-type navbars (local layer under the global mega-menu):**
  - t-guide (articles/guides/glossary): sticky in-page TOC nav.
  - t-location (state pillars): state/locale nav + the call action.
  - t-bofu (conversion): MINIMAL / no secondary nav — avoid funnel leakage; the action is CALL.
  - t-hub: routing nav surfacing children.
  - t-mofu: standard global + breadcrumb.
- Persistent, accessible CALL affordance in the nav on every page (tap-to-call on mobile).
- Footer: editorial, organized by silo; WCAG 2.2 target-size fixed; firm/ProAdvisor-team identity (no
  founder name in visible content); legal links; the trust/credential row.

═══════════════════════════════════════════════════════════════
§5 — ASSETS: 3D / LIVE-SVG / GRAPHS / ICONS / IMAGERY (where they EARN ranking + calls)
═══════════════════════════════════════════════════════════════
Founder-set: RICH motion + assets where ATF/money pages earn it; subtle elsewhere. Every asset justifies
its bytes against the performance budget.

- **Live SVG diagrams** (the workhorse — preferred over raster): explanatory accounting/QB process
  diagrams, reconciliation flows, decision trees, before/after cleanup visuals, funnel/timeline figures.
  Lightweight, crisp at any DPI, animatable, themeable via CSS vars. THIS is the core "expertise visible"
  asset class.
- **Animated graphs / data figures**: real data only (honesty — no fabricated stats). Tasteful
  scroll-triggered draw-on for charts where the page has genuine numbers (e.g. tax rates, deadlines,
  comparison data). CLS 0 — reserve space, animate within it.
- **3D / rich hero focal pieces**: reserved for ATF moments on the highest-value money pages + the home/
  pillar heroes where the bytes are earned. Mobile gets a lighter static or reduced version. Never
  decoration — a focal "wow" that signals premium on the pages that bring clients.
- **Custom icon system**: ONE cohesive, premium, custom-drawn icon set (geometric, optically balanced,
  consistent stroke) — NOT a generic icon pack. Used for service categories, trust signals, nav.
- **Imagery**: via the sharp pipeline ({% photo %}: AVIF/WebP/JPEG, explicit dims). Honest imagery only —
  no fake team photos, no stock-cliché "diverse team high-fiving." Prefer abstract/editorial/diagrammatic
  over fake-human stock. Real credential/cert visuals where genuine.
- **OG / social images**: a per-page OG image SYSTEM (templated, on-brand, auto-generated per page) — on
  EVERY important money/client page (money pages, pillars, hubs, key guides). Editorial OG treatment that
  reinforces authority when shared/surfaced. (Build: an OG image template per type, populated per page.)

═══════════════════════════════════════════════════════════════
§6 — MOTION / ANIMATION / JS (rich where it earns it; CLS 0 always)
═══════════════════════════════════════════════════════════════
Founder-set: RICH (3D, scroll-driven, animated graphs) where ATF/money pages earn it; subtle/fast
elsewhere. Discipline: motion serves comprehension or premium-feel, never noise. `prefers-reduced-motion`
fully respected (everything works + looks right with motion off). CLS 0 is non-negotiable — animate within
reserved space.

- **Page-load**: a brief, premium hero entrance on money/pillar pages (orchestrated, fast — one moment,
  not scattered effects). Subtle/none on utility pages.
- **Scroll-triggered reveals**: editorial section reveals, draw-on for SVG diagrams + graphs, on long
  money/guide pages. IntersectionObserver, lightweight, once-only, reduced-motion-aware.
- **Micro-interactions**: refined hover/focus/tap states on CALL actions, cards, nav — tactile, premium,
  fast (≤200ms). Tap-friendly (no hover-dependent reveals on mobile).
- **JS philosophy: minimal, vanilla, lightweight.** No heavy framework for the marketing site. Vanilla JS
  / tiny modules for: mega-menu, sticky TOC, scroll reveals, call-tracking events (GA4), accordion FAQ,
  mobile nav, any interactive tool/calculator. Progressive enhancement — content + calls work with JS off.
- **3D**: only where reserved (§5); lazy-loaded, mobile-reduced, never blocks LCP.

═══════════════════════════════════════════════════════════════
§7 — THE FORMS RULING (STRICT — founder-locked, propagate everywhere)
═══════════════════════════════════════════════════════════════
**The aim is CALLS. Forms are deliberately minimized. This OVERRIDES any earlier "intake-form on t-bofu"
spec — t-bofu pages now convert via CALL, not a form.**

- **BIG form (full intake): ONLY on `/contact/` and `/file-review/`.** These two pages carry the
  substantial multi-field form. Nowhere else.
- **State pillars (t-location): ONE small form at the BOTTOM, 4-5 inputs max** (name, email, phone,
  business/need — short). Bottom of page only. Secondary to the call action.
- **EVERY OTHER PAGE: NO FORM.** Money pages, hubs, mofu, bofu, guides, industries, services, vs,
  locations-children — none get a form. Their conversion action is **CALL** (tap-to-call mobile, prominent
  call CTA + number desktop), optionally routing to /contact/ or /file-review/ for those who prefer.
- This must propagate into the REGISTRY (any "intake-form" section on non-exempt types is replaced by a
  CALL conversion block) and the component kit (the call-breakout / call-band becomes the primary
  conversion component, not the form).
- **Call conversion block** (the replacement for forms on money pages): prominent phone number,
  tap-to-call, a one-line "what happens when you call" reassurance, hours/response expectation, the trust
  micro-signals (ProAdvisor cert, independent firm). Premium, frictionless, on every money page.
- GA4: `phone_click` is the PRIMARY conversion event; `lead_submit` only on the 3 form surfaces.
- **[→ §13.3]** for the exact registry / PLACEMENT-MAP propagation (where `intake-form` is removed and
  `call-breakout` takes over, per type). **[→ §13.4]** for the honest-triage compliance spec (⚠ the Sheet-7
  Intuit-intent qualification the form used to do moves to the disclosure banner + triage intro + call-breakout
  copy — COMPLIANCE-CRITICAL, founder sign-off required).

═══════════════════════════════════════════════════════════════
§8 — HERO SYSTEM (unique per TYPE — the §5 DESIGN-DIRECTION mandate, specified)
═══════════════════════════════════════════════════════════════
Each page TYPE gets its OWN hero treatment (distinct, owned, unmistakable). Design proposes the look per
type; the brief sets intent + the conversion action. ALL heroes: editorial, mobile-first, CLS 0, the CALL
action present (except where a type genuinely shouldn't push it).

- **Home (t-hub)**: the flagship — best-in-niche ATF, the signature visual, the authority thesis, primary
  CALL + routing into silos.
- **Silo hubs (t-hub)**: editorial routing hero — what this silo solves, visual routing to children, CALL.
- **t-mofu (product/comparison)**: confident product/comparison hero — the value + a visual (vs-table tease
  or diagram), file-review/CALL primary.
- **t-bofu (conversion/money)**: chrome-minimal, high-conversion hero — the problem + the outcome + CALL,
  no nav distraction, no form (call block follows).
- **t-guide (reference/long-form)**: editorial article hero — title, byline (firm/ProAdvisor-team),
  reviewed-by, reading context, sticky TOC begins.
- **t-guide (error/problem)**: focused problem hero — the error/symptom up top, the fix path, CALL for help.
- **t-location (state pillar)**: the location hero — state identity, local credibility, the call + (bottom)
  the one small form. (NOTE: location CHILDREN are NOT pillars — they get the lighter conversion/mofu hero
  per their re-tier, NOT the pillar hero. This fixes the A4 clone issue.)
- **Not-yet-built types** (built post-cutover, but designed NOW so the system is complete):
  - **Blog (t-guide article)**: editorial article hero, author=firm, category, reading time.
  - **Glossary (t-guide compact)**: definition-first hero, the term + speakable definition + related.
  - **Tools/calculators (t-mofu tool)**: the tool ATF — interactive panel + result, hands off to CALL/
    file-review (no separate form).
  - **Case studies (t-mofu proof)**: REAL engagements only — outcome-forward editorial hero, CALL.
  - **Switch pages (t-bofu)**: "switching from {competitor}" — the migration promise + CALL, no form.
  - **Support silo (t-bofu + honest-triage)**: triage hero — disclosure above fold, qualify intent, CALL.
  - **Reviews listing (t-mofu)**: the 2 real Clutch reviews, no AggregateRating until 5+, CALL.
  - **Research/datasets (t-guide)**: data-forward editorial hero, real data, stat-cite (max 2/page).

═══════════════════════════════════════════════════════════════
§9 — SHARED MID-BODY COMPONENT LIBRARY (one premium kit, restyled; below every hero)
═══════════════════════════════════════════════════════════════
Below the unique hero, all types compose from ONE shared, premium, editorial component kit. This is the
existing cobalt vocabulary RESTYLED to the new editorial system (not rebuilt from scratch — same semantic
components, new premium skin). Design styles each; Code implements as the reusable class system. Forms
ruling (§7) applies — the intake-form component is restricted to the 3 exempt surfaces.

The kit (each: editorial styling, mobile-first, CLS 0, AA, themeable via tokens):
- **call-breakout / call-band** — PRIMARY conversion component (replaces forms on money pages); tap-to-call.
- **vs-table / vs-scroll** — comparison tables (pricing/comparison ALWAYS uses this, never proof-strip cards).
- **buyer-card** — routing/decision cards (hubs, "which is right for you").
- **proof-strip** — trust/credential signals (real only; no fabricated stats).
- **fix-steps / process-diagram** — step/flow visuals (live SVG; HowTo schema).
- **byline-block / meta-reviewed** — author=firm/ProAdvisor-team, reviewed-by (E-E-A-T; David Westgate in
  Person schema only, never visible-content name).
- **guide-grid / toc** — long-form navigation, sticky TOC.
- **ai-summary--ruled** — the speakable/AI-citation summary block (preserve — core to citation goal).
- **pull-quote / editorial-break** — editorial rhythm devices.
- **stat / data-figure** — animated graphs, real data, stat-cite max 2/page.
- **diagram-figure** — the live-SVG expertise diagrams (the signature asset class).
- **trust-row / checks-list / disclosure** — credentials, honest-triage disclosure banners.
- **error-badge** — error/problem pages.
- **intake-form** — RESTRICTED: /contact/, /file-review/ (full) + state-pillar (small, bottom) ONLY.
- **stack-8 / grid-2/3** — layout primitives.
RULE (carried): pricing/comparison = vs-table never proof-strip cards (nowrap → mobile overflow). CTAs =
canonical lexicon only. No two adjacent sections identical (editorial rhythm).

**[→ §13.1]** for the exact EXISTS-vs-NET-NEW status of every component above (real class names + what's a
restyle vs net-new build). **[→ §13.2]** for the 3 approved component-kit changes (call-breakout → PRIMARY,
the net-new minimal state-pillar form, the PLACEMENT-MAP rewrite).

═══════════════════════════════════════════════════════════════
§10 — TECHNICAL / PERFORMANCE / SEO CONTRACT (Code's hard rules)
═══════════════════════════════════════════════════════════════
- **Lightest-weight HTML**: semantic, minimal DOM, no wrapper-soup. Most powerful design from the least
  markup. Editorial richness via CSS + SVG, not div-nesting.
- **CSS**: ONE bundled site.min.css, byte gate (re-set for the new system from the current 59,392 B — set a
  new sane ceiling and hold it; reuse the component kit to stay lean). Token-driven (CSS custom properties)
  so palette/type swap cleanly.
- **Performance floor (hard gates)**: CLS 0 · Lighthouse ≥95 (target 100) · LCP fast · a11y AA incl. WCAG
  2.2 target-size · zero horizontal overflow 360/390/768. The battery enforces these every change.
- **Schema preserved + enhanced**: all existing JSON-LD (WebPage/CollectionPage/Breadcrumb/Service/
  ItemList/FAQPage/QAPage/Article/Person/Org) carries through the restyle untouched; the design supports
  (never hides) the speakable/ai-summary/Q&A blocks.
- **OG image system**: per-type templated OG, populated per page, on every money/client page (§5).
- **Fail-closed env**: production output only when ENVIRONMENT=production; else noindex + X-Robots-Tag.
- **Equity untouched**: every heading/FAQ/schema/intent preserved (restyle, never guts). Battery's
  content-equity check vs baseline.json stays GREEN.
- **GA4**: phone_click primary; lead_submit on the 3 form surfaces; key interaction events.
- **Progressive enhancement**: content + CALL work with JS off; motion/3D/graphs are enhancement.

═══════════════════════════════════════════════════════════════
§11 — NON-NEGOTIABLES (carried from ARCHITECTURE-TRUTH §0 — the redesign may NOT break these)
═══════════════════════════════════════════════════════════════
- URL byte-identity (every live slug preserved).
- Content equity preserved (restyle never guts headings/FAQ/schema/intent).
- Honesty: no fabricated reviews/stats/team/case-studies/certs; 2 real Clutch reviews; no AggregateRating
  until 5+; honest-triage on support/speak; never imply Intuit affiliation; ProAdvisor = held cert.
- Founder-name-zero: firm / "Certified ProAdvisor team" in visible content; David Westgate in Person
  schema only.
- Performance floor (CLS 0 / LH ≥95 / AA / WCAG 2.2 target-size).
- Fail-closed env.
- Westgate FS separation (methods flow; content/IP/coined terms never cross).

═══════════════════════════════════════════════════════════════
§12 — PROCESS (Brief → Design → Code, gated; founder picks the look)
═══════════════════════════════════════════════════════════════
1. **Founder approves this brief** (refine first).
2. **Claude Design generates the VISUAL SYSTEM as OPTIONS**: 2-3 palette options, 2-3 type pairings, the
   signature concept, and the PROVING-SET heroes mocked (home + one money page + one guide + one location).
   Founder PICKS the look. (This is where taste is decided — visually, not in words.)
3. **Design completes the system** on the picked direction: every hero type + the shared kit styled +
   tokens + mega-menu + the call-conversion components + the OG template.
4. **Code implements** the approved system in 11ty: tokens → CSS → components → per-type layouts →
   re-skin all pages → the §7 forms propagation + §2 re-tiering folded in → battery GREEN.
5. **Re-pattern all pages on preview**, founder sign-off, → **CUTOVER (last)**.
6. Then build-new growth types on the now-complete system.

THE PROVING SET (design + build these FIRST to validate the whole system before mass re-skin):
home (t-hub) · one t-bofu money page · one t-mofu product · one t-guide long-form · the NY pillar
(t-location) · one location child (proves the non-pillar hero). Nail these → the rest inherits.
**[→ §13.6]** for the grounded proving set with the exact real URLs to use.

═══════════════════════════════════════════════════════════════
§13 — AS-BUILT RECONCILIATION LAYER (Deliverable 4 · Code/Claude · grounded in the real repo)
═══════════════════════════════════════════════════════════════
This layer grounds §0–§12 (strategy) in what is ACTUALLY built. Sources verified this turn: the 5 layouts
(`src/_includes/layouts/t-*.njk`), the handoff `PLACEMENT-MAP.md` (component→tier matrix), `PAGE-TYPE-REGISTRY.md`
(per-type section lists), the CSS kit (`src/assets/css/00…09`), and the form partials
(`src/_includes/partials/intake-form.njk`, `call-bar.njk`). The redesign RESTYLES the existing semantic
components (same classes, new editorial skin) and ADDS the net-new ones below. Nothing here guts equity.

─────────────────────────────────────────────
§13.1 — AS-BUILT COMPONENT MAP (the §9 kit: EXISTS vs NET-NEW, real class names)
─────────────────────────────────────────────
**STATUS KEY:** EXISTS = built, real class, restyle only · PROMOTE = exists but role/prominence changes ·
NET-NEW = must be built in the redesign.

| §9 kit item | Status | Real class(es) today | Redesign action |
|---|---|---|---|
| call-breakout / call-band | **PROMOTE** | `.call-breakout` `__title` `__sub` (compact 2-line box + 1 btn; error silo only) | → PRIMARY money-page conversion block (CHANGE 1, §13.2) |
| vs-table / vs-scroll | EXISTS | `.vs-table` `.vs-scroll` `.verdict` `.choose-grid` | restyle (editorial) |
| buyer-card | EXISTS | `.buyer-card` | restyle |
| proof-strip | EXISTS | `.proof-strip` `.proof-strip--dark` | restyle (real signals only) |
| fix-steps / process-diagram | EXISTS | `.fix-steps` `.process-diagram` `.flow` `.flow__step` | restyle + upgrade to live-SVG (§5) |
| byline-block / meta-reviewed | EXISTS | `.byline-block` `.meta-reviewed` | restyle (firm/ProAdvisor-team only) |
| guide-grid / toc | EXISTS | `.guide-grid` `.toc` `.toc__label` | restyle (sticky TOC = the t-guide navbar, §4) |
| ai-summary--ruled (quick-5) | EXISTS | `.ai-summary--ruled` `.ai-summary__question` | restyle; preserve speakable/AI-citation |
| pull-quote | EXISTS | `.pull-quote` | restyle |
| editorial-break | **NET-NEW** | — | new editorial rhythm device (§9) |
| stat / data-figure | PARTIAL | `.stat-row` `.stat__value` `.stat__delta` (static) | restyle + **NET-NEW animated graphs** (real data, CLS 0) |
| diagram-figure (signature live-SVG) | PARTIAL→NET-NEW | `.diagram-figure` (light) | the §2 SIGNATURE live-SVG diagram system is largely NET-NEW |
| trust-row / checks-list / disclosure | EXISTS | `.trust-row` `.checks-list` `.disclosure` | restyle |
| error-badge | EXISTS | `.error-badge` | restyle |
| intake-form | **EXISTS + RESTRICT + NET-NEW variant** | `.intake-form` `.intake-grid` `.intake-field` `.intake-group` `.intake-checkbox` (24-key shared partial) | restrict to 3 surfaces; add minimal variant (CHANGE 2, §13.2) |
| stack-8 / grid-2/3 | EXISTS | `.stack-8` `.grid-2` `.grid-3` | keep |
| Heroes | PARTIAL→NET-NEW | `hero--hub` `hero--location` `hero--compact` `hero--rule` + `hero__motif` (4 variants) | §8 wants a UNIQUE hero per TYPE (~10) → most are NET-NEW |
| call-bar (sticky mobile) | EXISTS | `.call-bar` `.has-call-bar` (`call-bar.njk`) | restyle; the per-type "persistent call affordance" (§4) |
| custom icon system | **NET-NEW** | only `src/_includes/icons/*.svg` (phone etc.) | §5 cohesive custom icon set |
| OG image system | **NET-NEW** | base.njk has og:title/desc/type only; **NO `og:image`**, twitter `summary` (not large) | §5/§10 per-type templated OG image |

─────────────────────────────────────────────
§13.2 — THE 3 COMPONENT-KIT CHANGES (APPROVED — recommended; founder ratifies)
─────────────────────────────────────────────
**CHANGE 1 — `call-breakout` → PRIMARY conversion block.** Today `.call-breakout` is a compact secondary
"stuck? book a diagnostic" box (serif-20 title + sub + one button), used only on error pages. The forms
ruling makes it THE conversion component on every money page. Spec: a full-width, prominent variant
(`.call-breakout--primary` or a new `.call-band`) carrying — large tap-to-call phone number (`tel:` +
`phone_click` GA4) · a one-line "what happens when you call" · response/hours expectation · trust micro-row
(ProAdvisor cert · independent firm). Premium, frictionless, mobile-first. Keeps the existing compact
`.call-breakout` for the error-silo inline use. **VERDICT: approve.**

**CHANGE 2 — NET-NEW minimal state-pillar form variant.** The state PILLAR keeps ONE small form at the
bottom (4–5 inputs). The current `intake-form.njk` is the 24-key contract (10 service checkboxes + 4 selects
+ textarea + 12 hidden-meta) — too heavy. Spec: a minimal mode (name · email · phone · one need/service ·
optional state) reusing the `.intake-*` classes + the `data-form="contact-discovery"` JS hook + honeypot +
core hidden-meta, but dropping the checkbox grid + selects. Implement as a parameterized `intakeMinimal: true`
mode of the shared partial (one source of truth) rather than a fork. **VERDICT: approve.**

**CHANGE 3 — PLACEMENT-MAP rewrite (forms ruling).** The handoff `PLACEMENT-MAP.md` currently maps
`intake-form` to t-bofu (full) + t-location (state) and `call-breakout` to the problem-silo. It must be
rewritten (delta in §13.3). **VERDICT: approve.** *NOT yet edited on disk — propagates on approval of this
brief (or in the Code phase) to avoid rework if you refine.*

**✅ ALL 3 RATIFIED (founder 2026-06-15):** call-breakout → primary money-page conversion block · minimal
state-pillar form as a MODE of the shared partial (not a fork) · placement-map rewrite. Locked for the Code phase.

─────────────────────────────────────────────
§13.3 — FORMS RULING: REGISTRY + PLACEMENT-MAP DELTA (the exact propagation)
─────────────────────────────────────────────
**Where `intake-form` is REMOVED → replaced by the §13.2 CHANGE-1 call block:**
| Type / pages | Was (registry/placement-map) | Becomes |
|---|---|---|
| t-bofu money pages (payroll-mgmt, bookkeeping ×3, sales-tax, fractional-cfo, qb cleanup/migration/payroll/setup, accounting services) | `intake-form` before FAQ | **call block** (no form) |
| state SERVICE / honest-triage children (NY 17, re-tiered t-bofu) | `intake-form` | **call block** (triage: §13.4) |
| switch pages (net-new, 4) | `intake-form` | **call block** |
| support silo (net-new, ~20, honest-triage) | `intake-form` | **call block** (triage: §13.4) |
| tool/calculator pages | `tool-cta` → file-review | unchanged (hands off to CALL/file-review) |

**Where `intake-form` STAYS:** `/contact/` + `/quickbooks/file-review/` (full 24-key) · state PILLARS
`/find-an-accountant/{state}/` (the §13.2 CHANGE-2 minimal variant, bottom only).

**PLACEMENT-MAP.md line edits (on approval):** line 15 sticky call-bar (keep) · line 21 problem-pattern
`call-breakout` → also "PRIMARY on all money tiers" · line 27 trust-row "before form" → "before call block" ·
**line 29 intake-form** → "`/contact/` + `/file-review/` (full) · state PILLAR (minimal); NOT on t-bofu" ·
line 30 phone-cta (keep, now everywhere). **REGISTRY edits:** the t-bofu, state-child-service, switch,
support/speak section lists swap `intake-form` → call block; state-pillar `intake-form` → minimal form.

─────────────────────────────────────────────
§13.4 — HONEST-TRIAGE COMPLIANCE (⚠ COMPLIANCE-CRITICAL — FOUNDER SIGN-OFF REQUIRED)
─────────────────────────────────────────────
**The problem:** today the honest-triage pages (`/quickbooks/speak-to-a-quickbooks-expert/`, the 4 NY triage
children — business-tax-problems, state-tax-notice-help, urgent-bookkeeping, speak-to-a-proadvisor — and the
future ~20-page support silo) use the **intake-form to qualify Intuit billing/account intent AWAY** (a
mandatory Sheet-7 compliance mechanism). The strict no-form ruling removes that form. The Intuit-intent
qualification must NOT be lost — it moves to THREE non-form surfaces:

- **(a) Above-the-fold disclosure banner** (`.disclosure`, already a component): states the firm is
  **independent — NOT Intuit / not affiliated with Intuit**, and routes Intuit-billing/account/subscription
  issues to **Intuit directly** (with the path), BEFORE any call CTA. Renders above the fold on every triage
  page. *(e.g. "TechBrot is an independent Certified QuickBooks ProAdvisor firm — not Intuit. For QuickBooks
  billing, subscription, or account-login issues, contact Intuit directly. We help with the books, cleanup,
  and setup work inside QuickBooks.")*
- **(b) Triage intro copy** (the hero/intro section): re-qualifies in prose — what we DO handle vs what to
  take to Intuit / a licensed CPA-EA-attorney — so a mis-intent visitor self-selects out before calling.
- **(c) Call-block copy** (the §13.2 CHANGE-1 block on triage pages): the "what happens when you call" line
  carries the qualifier — *"If your issue is Intuit billing or account access, we'll point you to Intuit;
  for QuickBooks cleanup/setup/bookkeeping, a Certified ProAdvisor helps on the call."*

**Standing triage rules unchanged:** disclosure above the fold · never "official" · never imply Intuit
affiliation · never overclaim resolution/representation (the licensed CPA/EA/attorney does that).

**APPROACH APPROVED (founder 2026-06-15).** **PROPOSED WORDING — pending founder word-level sign-off (the
LAST blocker to brief-final):**
- **(a) Disclosure banner** (`.disclosure`, above the fold, before any call CTA): *"TechBrot is an independent
  firm of Certified QuickBooks ProAdvisors — we are not Intuit, and we are not affiliated with Intuit. For
  QuickBooks billing, subscription, payment, or account-login problems, contact Intuit directly. We help with
  the bookkeeping, cleanup, setup, and accounting work inside your QuickBooks file."*
- **(b) Triage intro copy** (hero/intro prose): *"Talk to a Certified QuickBooks ProAdvisor. We're an
  independent accounting firm — not Intuit, and not Intuit support. If you need help with your QuickBooks
  billing, subscription, or login, Intuit handles that directly. If your books are behind, broken, or set up
  wrong — cleanup, catch-up, migration, or a fresh setup — that's our work, and a Certified ProAdvisor walks
  through it with you on the call. For income-tax filing or a dispute with a tax authority, we coordinate with
  your CPA, EA, or attorney — we don't file or represent."*
- **(c) Call-block copy** (primary conversion block on triage pages): TITLE *"Speak to a Certified
  ProAdvisor"* · WHAT-HAPPENS *"Call and a Certified QuickBooks ProAdvisor — not a call center — talks through
  your situation and the fixed-fee scope before any work begins. Typical response the same business day."* ·
  QUALIFIER *"If your question is about Intuit billing or account access, we'll point you to Intuit. For
  QuickBooks cleanup, setup, migration, or bookkeeping, we can help on the call."* · TRUST MICRO-ROW
  *"Independent firm · 4× Certified ProAdvisor · fixed-fee scope first."*

─────────────────────────────────────────────
§13.5 — GAP ANALYSIS: "THE REDESIGN MUST COVER" CHECKLIST (grounded)
─────────────────────────────────────────────
**A. Conversion / components (net-new or promote):**
- [ ] call-conversion block (PRIMARY) — CHANGE 1 (net-new variant of `.call-breakout`).
- [ ] minimal state-pillar form — CHANGE 2 (net-new mode of `intake-form.njk`).
- [ ] live-SVG diagram system (the §2 SIGNATURE) — largely net-new; the "expertise visible" asset class.
- [ ] animated data-figures / graphs — net-new (real data only; CLS 0).
- [ ] custom icon set — net-new (only a few raw SVGs today).
- [ ] editorial-break device — net-new (§9 rhythm).

**B. Structure / navigation / UX (net-new — confirmed absent today):**
- [ ] MEGA-MENU primary nav — net-new (nav/chrome is minimal/TODO; no canonical nav exists). Mobile drawer mega-menu.
- [ ] per-type navbars — net-new (t-guide sticky-TOC nav, t-location locale+call nav, t-bofu minimal/no-nav, t-hub routing).
- [ ] UNIQUE hero per TYPE — 4 hero variants exist (`hub/location/compact/rule`); §8 needs ~10 distinct → mostly net-new.
- [ ] mid-body CTAs on long types — net-new pattern (no section list has a mid-body CTA today).
- [ ] 3D / live-SVG / scroll-motion slots — net-new (only `hero__motif` + `07-motion.css` exist).
- [ ] footer rebuild + WCAG 2.2 target-size fix (the queued mailto/tel <24px finding) — net-new/fix.
- [ ] persistent accessible CALL affordance in nav (every page, tap-to-call mobile) — extends `call-bar`.

**C. SEO / social / schema:**
- [ ] OG image system (per-type templated, per-page) — net-new (no `og:image` today; twitter `summary`→`summary_large_image`).
- [x] JSON-LD schema (WebPage/Collection/Breadcrumb/Service/ItemList/FAQPage/QAPage/Article/Person/Org) — EXISTS, carries through untouched.
- [x] speakable / ai-summary / Q&A / definition blocks — EXIST; the design must visually SUPPORT (never hide) them.

**D. Not-yet-built page TYPES (designed NOW so the system is complete; built post-cutover) — section specs in REGISTRY Part 2:**
- [ ] glossary (~45, t-guide compact) · tools/calculators (~9, t-mofu tool — `tool-panel`/`tool-result`/`tool-cta` net-new) ·
  guides (~16, t-guide; 3 go-remote-blocker priority) · case studies (~12, t-mofu proof; REAL only) ·
  switch (4, t-bofu; no form) · support silo (~20, t-bofu + honest-triage §13.4) · reviews listing (t-mofu;
  2 Clutch, no AggregateRating <5) · blog (t-guide article) · research/dataset children (t-guide; `stat-cite` max 2/page) ·
  more states' children + more accounting industries (on the NY / industry templates).

**E. Performance / build:**
- [ ] re-set the CSS byte gate for the new system (was 59,392 B) — set a new sane ceiling, hold it.
- [ ] token-driven palette/type swap (CSS custom properties) so the cold-light system swaps cleanly.
- [ ] battery gates carry over: CLS 0 · LH ≥95 · overflow 360/390/768 · WCAG 2.2 target-size · equity GREEN vs baseline.json.

**F. Folded into the redesign (already decided, executed in the reset, BEFORE cutover):**
- [ ] forms-ruling propagation (§13.3) · the §2 tier RE-TIERING (NY ~17 conversion children → t-bofu; accounting
  BOFU services → t-bofu — FINAL-MIGRATION-REPORT Sections A/D) · honest-triage compliance re-spec (§13.4).

─────────────────────────────────────────────
§13.6 — THE PROVING SET (FINAL — founder ruling 2026-06-15: ONE page per TIER/TYPE)
─────────────────────────────────────────────
Every distinct hero + the full kit is proven on a REAL page before mass re-skin of the 148. Each TYPE → an
exact real URL (all built today):
| # | TYPE (tier) | Exact URL | Proves |
|---|---|---|---|
| 1 | home (t-hub) | `/` | flagship ATF + the signature visual + silo routing |
| 2 | silo hub (t-hub) | `/quickbooks/` | routing hero + buyer-card + flow + pull-quote (alt: `/accounting/`) |
| 3 | product (t-mofu) | `/quickbooks/online/` | product hero + vs-table + buyer-card + byline-block |
| 4 | comparison (t-mofu) | `/vs/techbrot-vs-bench/` | comparison hero + vs-table + verdict + "where they win" fairness (Bench-shutdown honesty) |
| 5 | conversion/money (t-bofu) | `/accounting/bookkeeping/cleanup-bookkeeping/` | money hero + proof-strip + **the no-form CALL block** |
| 6 | honest-triage (t-bofu) | `/quickbooks/speak-to-a-quickbooks-expert/` | triage hero + **§13.4 compliance (banner+intro+call-block), no form** |
| 7 | long-form (t-guide) | `/quickbooks/faq/` | article hero + guide-grid + sticky TOC + byline + meta-reviewed |
| 8 | error/problem (t-guide) | `/quickbooks/help/error-codes/h202/` | problem hero + error-badge + fix-steps + inline call-breakout |
| 9 | state PILLAR (t-location) | `/find-an-accountant/new-york/` | pillar hero (state contour motif) + **minimal bottom form (CHANGE 2)** + sticky call-bar |
| 10 | location CHILD (non-pillar) | `/find-an-accountant/new-york/cities/manhattan/` | the LIGHTER location-child hero (fixes the A4 clone issue) |
| 11 | conversion-form page (§13.8) | `/contact/` **and** `/quickbooks/file-review/` | the premium full-form TYPE — hero + form-as-centerpiece + conversion support |

**Not-yet-built TYPES — Design MOCKS a representative hero (no real URL yet) so the system is complete before
any are built post-cutover:** tool/calculator (t-mofu tool — interactive panel hero) · glossary (t-guide
compact — definition-first hero) · case study (t-mofu proof — outcome-forward hero, REAL only) · switch
(t-bofu — "switching from {competitor}", no form). *(Blog ≈ the t-guide article hero (#7); research/dataset ≈
t-guide with a `dataset-header` variant — mock only if Design judges the hero materially different.)*

─────────────────────────────────────────────
§13.7 — DOC-SYSTEM RECONCILIATION (founder ruling needed)
─────────────────────────────────────────────
The canonical doc set (BUILD-TRACKER §"CANONICAL DOC SYSTEM") names **DESIGN-DIRECTION.md** as the CREATIVE
truth. This brief now expands it into the implementable creative+technical spec — they overlap on one role.
**Recommendation:** promote **REDESIGN-BRIEF.md to the canonical CREATIVE-truth slot** (most specific,
implementable, reconciled with as-built); retire **DESIGN-DIRECTION.md to legacy/historical** (its direction
is absorbed + expanded here). **✅ RULED (founder 2026-06-15): YES.** REDESIGN-BRIEF.md is now the canonical
CREATIVE truth; DESIGN-DIRECTION.md → legacy. **APPLIED this turn:** BUILD-TRACKER canonical-doc-system block
+ ARCHITECTURE-TRUTH §10 doc map updated; DESIGN-DIRECTION.md carries a legacy/superseded banner.

─────────────────────────────────────────────
§13.8 — CONVERSION-FORM PAGE TYPE (`/contact/` + `/file-review/`) — founder ruling 2026-06-15
─────────────────────────────────────────────
**RULING:** `/contact/` and `/quickbooks/file-review/` are NOT bare forms — they are **full premium
conversion pages**, their own page TYPE, and the most important conversion destinations (everything funnels
here or to a CALL). Today the REGISTRY tags them "standalone form / legal — EXCLUDED from the design-fidelity
gate (own patterns)"; this ELEVATES them to a designed, gated, premium type. **Tier:** own type (form-centric;
chrome present but conversion-focused). **Section spec (designed like the money moment they are):**
- **Own designed hero** — premium, type-specific (contact = "book the discovery call"; file-review = "the free
  QuickBooks file review" offer framing). Editorial, mobile-first, CLS 0.
- **The form as CENTERPIECE** — the full 24-key `intake-form` (the only two full-form surfaces), but WRAPPED
  in conversion support, not naked:
  - trust / credential signals (4× Certified ProAdvisor · independent firm · the 2 real Clutch reviews).
  - **"what happens after you submit / when you'll hear back"** (set the response expectation — same/1 business day).
  - ProAdvisor credibility + why-us micro-content.
  - **"or call now" secondary** (tap-to-call) — the call path always available alongside the form.
  - independence signals (independent firm; honest-triage disclosure where relevant on file-review).
- GA4: `lead_submit` (the form) + `phone_click` (the "or call" secondary).
**REGISTRY:** add this TYPE with the section list above; **remove `/contact/` + `/file-review/` from the
design-fidelity gate exclusion** (they now follow a designed pattern). *Registry edit deferred to brief-final /
Code phase per "specs only."*
