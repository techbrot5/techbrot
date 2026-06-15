# DESIGN-DIRECTION.md — creative brief for the PRE-CUTOVER design reset
Owner: founder · Status: DIRECTION SET, not yet implemented · Implemented by: Design (Claude Design)
Created: 2026-06-14 · Reconciled 2026-06-15 (Deliverable 0): sequence corrected to **redesign BEFORE
cutover** per the founder ruling — see §9.

This is the standalone creative brief for the **design reset**. Path B migration is COMPLETE (139/139
baselines, cutover parity). **SEQUENCE RULING (founder 2026-06-15): the redesign now happens on PREVIEW,
BEFORE cutover — cutover is the LAST step, and nothing goes live until the redesign is done and
founder-signed-off.** (This reverses the earlier "cut over first, re-pattern live" plan.) The current
cobalt system is the *migration floor* — every page is built to floor on it now and **re-patterned onto
this new system on preview, then cut over**. This brief governs that reset. It is the creative truth; the
PAGE-TYPE-REGISTRY.md is the structural truth (which page is which type + its sections). Design consumes
BOTH: this for look/feel, the registry for per-type composition.

Do not implement from this yet — the redesign is gated behind the post-migration deliverables (0 reconcile
docs · 1 redesign review queue · 2 ARCHITECTURE-TRUTH · 4 gap analysis · 3 delete old folders), each with a
founder gate. It is recorded so the reset covers every direction the founder has set, and so nothing in
the migration hardened a choice this brief will override.

═══════════════════════════════════════════════════════════════
1. PALETTE — colder + lighter (replace the warm base)
═══════════════════════════════════════════════════════════════
- REPLACE the warm paper base (current `#FBFAF7` / warm-paper) with a **colder, lighter**
  foundation — cool near-white / cool greys, not cream. The site should read crisp and
  premium, not warm and cozy.
- Keep an accent system, but re-judge the oxblood/cobalt against the colder base (Design to
  propose the new accent that reads premium on cool-white).
- Tier surfaces (current hub-mist / guide-warm / bofu-deep) get re-derived on the cold base.
- Maintain WCAG AA contrast on the new palette; re-check every token.

═══════════════════════════════════════════════════════════════
2. TYPOGRAPHY — richest fonts
═══════════════════════════════════════════════════════════════
- Move to the **richest font pairing** the brand can carry (premium display serif +
  high-quality text face). Current Fraunces/Inter/JetBrains is the floor; the reset upgrades
  to a best-in-class pairing. Design to propose; founder approves.
- Keep a fluid type scale; preserve heading hierarchy (equity headings stay, restyled).

═══════════════════════════════════════════════════════════════
3. NAVIGATION — mega-menu primary nav + per-type navbars
═══════════════════════════════════════════════════════════════
- **Primary nav = mega-menu** (multi-column, content-rich; the silo architecture surfaced
  visually). This replaces the current minimal chrome (nav/footer were always tracked TODO).
- **Per-type navbars**: page TYPES get tailored nav treatments (e.g. a t-guide article gets a
  sticky in-page TOC nav; a t-location page gets state/locale nav; conversion t-bofu keeps
  minimal/no-nav to avoid funnel leakage). The mega-menu is the global primary; per-type
  navbars are the local layer.

═══════════════════════════════════════════════════════════════
4. ASSETS — 3D / SVG / imagery where they earn it
═══════════════════════════════════════════════════════════════
- Introduce **3D, SVG, and image assets** where they **aid ranking + users** (hero focal
  pieces, explanatory diagrams, trust/credential visuals) — not decoration for its own sake.
- Every asset must justify its weight against the performance budget (CLS 0, LCP). Prefer
  SVG/lightweight; reserve 3D/raster for above-the-fold focal moments that earn the bytes.
- Use the sharp image pipeline ({% photo %}: AVIF/WebP/JPEG, explicit dims) for raster.

═══════════════════════════════════════════════════════════════
5. ABOVE-THE-FOLD — best-in-niche
═══════════════════════════════════════════════════════════════
- The ATF on every type must be **best-in-niche** — visually the strongest accounting/QB
  firm site in the category. The hero is where the premium signal lands.
- **Unique hero per type** (see §6): each page TYPE gets a distinct hero treatment, not one
  hero reused everywhere.

═══════════════════════════════════════════════════════════════
6. COMPONENT STRATEGY — unique hero per type + shared mid-body library
═══════════════════════════════════════════════════════════════
- **Unique hero per TYPE**: silo-hub, t-mofu product/comparison, t-bofu conversion, t-guide
  reference, t-guide error/problem, t-location, research, guide, glossary, tool, blog,
  case-study, switch, support — each gets its own hero design.
- **Shared mid-body component library**: below the hero, types compose from ONE shared,
  premium component kit (vs-table, buyer-card, proof-strip, fix-steps, call-breakout,
  byline-block, meta-reviewed, guide-grid/toc, pull-quote, stat block, intake-form, flow,
  diagram-figure, etc. — the registry's component vocabulary, restyled). Unique top, shared
  middle = distinct-but-coherent.

═══════════════════════════════════════════════════════════════
7. CONVERSION — mid-body CTAs on long types
═══════════════════════════════════════════════════════════════
- **Mid-body CTAs** on long page types (guides, research, long t-mofu/t-guide) — not just the
  hero + foot cta-band. Long scroll-depth pages get an in-content conversion moment.
- CTA tier rules still apply (file-review-primary on t-mofu products; intake-form on t-bofu;
  honest-triage on support). CTA lexicon stays canonical.

═══════════════════════════════════════════════════════════════
8. NON-NEGOTIABLES CARRIED INTO THE RESET (do not let the redesign break these)
═══════════════════════════════════════════════════════════════
- URL byte-identity (every live slug preserved).
- Content equity (every heading/FAQ/schema/intent preserved — the reset RESTYLES, never guts).
- Honesty discipline (no fabricated reviews/stats/team; 2 real Clutch reviews only; no
  AggregateRating until 5+; honest-triage on support; never imply Intuit affiliation).
- No founder/personal name in visible content (firm / "Certified ProAdvisor team"; David
  Westgate only in operator section; founder in global Person schema only).
- Fail-closed env (production output only when ENVIRONMENT=production; else noindex).
- Performance floor: CLS 0, Lighthouse ≥95 target, a11y AA (incl. WCAG 2.2 target-size —
  fixes the queued footer finding).
- CSS budget discipline (a bundled min.css with a byte gate; re-set the gate for the new system).

═══════════════════════════════════════════════════════════════
9. SEQUENCE  (CORRECTED 2026-06-15 — redesign BEFORE cutover; cutover LAST)
═══════════════════════════════════════════════════════════════
Migration (build-to-floor on current cobalt) → all-139 parity ✅ DONE → **gated post-migration
deliverables** (0 reconcile docs · 1 redesign review queue + A4 hero check · 2 ARCHITECTURE-TRUTH · 4 gap
analysis · 3 verify+delete old Bootstrap folders), each one-at-a-time with a founder GO →
**THIS design reset on PREVIEW** (new system from Claude Design implementing this brief, re-skinning by
TYPE per the registry; includes the re-tiering pass from FINAL-MIGRATION-REPORT Sections A + D) →
re-pattern all pages on preview → founder sign-off → **CUTOVER (LAST step — site goes live on the new
build)** → resume build-new in small batches.
**Nothing goes live until the redesign is done and signed off.** (Earlier drafts said "cutover → reset →
re-pattern live"; that is SUPERSEDED — the redesign happens on preview before cutover.)
