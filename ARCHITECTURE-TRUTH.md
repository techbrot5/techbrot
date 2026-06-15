# ARCHITECTURE-TRUTH.md — source-of-truth architecture
Status: DRAFT for founder review (post-migration Deliverable 2) · Created 2026-06-15 (as TECHBROT-BLUEPRINT-V5.md)
· Renamed to ARCHITECTURE-TRUTH.md 2026-06-15. Supersedes techbrot-blueprint-v3.xlsx + the v4 working references
(now legacy/historical). This is the canonical ARCHITECTURE truth for the post-migration → redesign → growth
phases. It consolidates and points to the other governing docs (see §10); where they disagree, ARCHITECTURE-TRUTH
+ the latest founder ruling win.

DO NOT let anything depend on this until the founder has reviewed and approved it (founder instruction).

═══════════════════════════════════════════════════════════════
§0 — IDENTITY + NON-NEGOTIABLES (the locked frame)
═══════════════════════════════════════════════════════════════
**What it is:** techbrot.com — independent U.S. Certified QuickBooks ProAdvisor accounting & advisory firm.
Stack: 11ty (Nunjucks) → GitHub PRIVATE → Cloudflare Pages. Independent firm — NOT Intuit, does not file
taxes / audit / represent before tax authorities (coordinates with the client's CPA/EA/attorney).

**RISK HIERARCHY (locked, governs every decision):**
1. **URLs** — byte-identical. Every live slug is preserved forever; new pages are additive only.
2. **CONTENT** — enriched, never gutted. Existing headings, definitions, FAQ answers, schema nodes, intent
   coverage carry ranking equity. Elevate around them; wholesale rewrite only with a page audit + founder
   sign-off. The frozen equity contract is `_build/baseline/baseline.json` (139 pages) + the differ in
   `_build/battery/equity-exceptions.json`.
3. **DESIGN** — fully replaceable. The current cobalt system is the migration FLOOR; the redesign re-skins.

**NON-NEGOTIABLES carried into every phase:**
- Honesty discipline (§8): no fabricated reviews/stats/team/case-studies/certs; 2 real Clutch reviews only
  (Heidi Schubert; Barbara Best); NO AggregateRating until 5+ real; honest-triage on support/speak pages;
  never imply Intuit affiliation; "Certified QuickBooks ProAdvisor" is a held certification, not affiliation.
- No founder/personal name in visible content — firm / "Certified ProAdvisor team"; David Westgate only in
  global Person schema (`#david-westgate`, reviewedBy @id) for E-E-A-T; David Westgate is the only named
  operator permitted.
- Fail-closed env: production output ONLY when ENVIRONMENT=production; else noindex meta + X-Robots-Tag.
- Performance floor: CLS 0 · Lighthouse ≥95 target · a11y AA (incl. WCAG 2.2 target-size).
- CSS budget: ONE bundled site.min.css, byte gate (currently 55,933 B used / 59,392 B gate); re-set the
  gate for the new design system.
- Westgate Financial Services is a SEPARATE entity — factory methods flow freely; content/IP/coined terms
  never cross.

═══════════════════════════════════════════════════════════════
§1 — URL + SILO ARCHITECTURE (the contract) — 139 pages, ALL BUILT ✅
═══════════════════════════════════════════════════════════════
Path B migration COMPLETE 2026-06-15: 139/139 baselines built on the cobalt floor, 0 missing, cutover
parity. By top-level silo:

| Silo | Pages | Notes |
|---|---|---|
| `/accounting/` | 47 | hub + advisory(hub+5+faq) + bookkeeping(hub+3+faq) + services(hub+3) + 5 standalones + 19 industries(+hub+faq) + faq |
| `/find-an-accountant/` | 43 | NY full tree (pillar + 38 children) + CA/TX/FL/IL landings |
| `/quickbooks/` | 32 | hub + 8 product/consideration (cleanup·consulting·desktop·enterprise·online·proadvisor-team·setup·which-plan-is-right) + migration(hub+5) + payroll(hub+5) + help(hub) + error-codes(hub+7) + speak-to-expert (honest-triage) + faq |
| `/vs/` | 5 | hub + bookkeeper-vs-accountant + techbrot-vs-bench/pilot/quickbooks-live |
| `/legal/` | 4 | disclaimer, dpa, privacy, terms (t-guide legal-doc) |
| `/about/` | 3 | about (hub) + methodology + network |
| `/partners/` | 2 | partners (hub) + faq |
| `/contact/` `/pricing/` `/trust/` | 1 each | intake form · pricing · trust |

**Home (index):** the founder deleted the ORIGINAL Bootstrap home; a NEW home ALREADY EXISTS and is live on
the cobalt floor (`src/index.njk`, t-hub, permalink `/`). It is NOT part of the 139 equity baseline (net-new),
and the redesign RE-SKINS it — it is not rebuilt from scratch.

**`/find-an-accountant/` bare national landing — RULING (founder, 2026-06-15):** intentionally removed for
quality; NOT a gap to restore now. Rebuilt FRESH post-redesign as a proper net-new t-hub national landing on the
new system. State pillars (CA/FL/IL/NY/TX) top the silo until then. **CUTOVER NOTE:** this URL is currently LIVE
(HTTP 200) on production techbrot.com (a "50-state coverage" landing) but is ABSENT from baseline.json — so a
temporary 301 (`/find-an-accountant/` → `/accounting/`, recommended; founder to confirm target) MUST be staged
at cutover so it does not 404 between cutover and the post-redesign rebuild; remove the 301 when the real landing
ships (see §9).

**Net-new live pages OUTSIDE the 139 equity baseline:** home (`/`) · `/resources/research/` (N=0 research hub) ·
`/quickbooks/file-review/`. The 139 count in the table = the FROZEN equity baseline only; the live build also
serves these 3 net-new pages.

State strategy detail in §3.

═══════════════════════════════════════════════════════════════
§2 — PAGE-TYPE + TIER SYSTEM (tiers now DECIDED)
═══════════════════════════════════════════════════════════════
Every page is one TYPE; each TYPE maps to one tier/layout + an ordered section list + a component set. The
authoritative type→sections spec is `_build/reports/PAGE-TYPE-REGISTRY.md`. **DECIDED tier rulings (founder,
2026-06-15) — these are final, not proposals:**

| Tier (layout) | For | Hero / signature |
|---|---|---|
| **t-hub** | routing/overview HUBS (silo & sub-silo indexes) | hub hero + motif; ItemList/CollectionPage; buyer-card routing |
| **t-mofu** | consideration / product / comparison | compact hero; vs-table; file-review-PRIMARY CTA (ruling 2) |
| **t-bofu** | conversion / money pages + honest-triage | compact hero (chrome-minimal); proof-strip; intake-form; FAQ |
| **t-guide** | reference / FAQ / long-form / error-problem / legal | toc/guide-grid; byline-block; meta-reviewed; FAQPage/HowTo |
| **t-location** | STATE PILLAR ONLY (state landing) | hero--location + state-contour motif + sticky call-bar |

**Re-tiering (as-built ≠ final, executed in the redesign):** build-to-floor used one proven tier per silo,
so some conversion pages shipped on the wrong tier. Founder-approved re-tier (FINAL-MIGRATION-REPORT queue):
- NY service children (13) + NY honest-triage children (4) → **t-bofu** [CONFIRMED].
- Accounting services children (controller/outsourced/virtual-accounting, 3) → **t-bofu** [CONFIRMED].
- Accounting standalones (CoA-setup, financial-statements, month-end-close, reconciliation, job-costing, 5)
  → **t-bofu PROVISIONAL** (founder confirms when rendered in the redesign).
- NY cities (12) + NY industries (9) → REVIEW in the redesign (lighter location-child hero / t-mofu).
- A4 finding: the t-location layout renders the full location hero UNCONDITIONALLY, so all 38 NY children
  currently clone the pillar hero + sticky call-bar — which is why the conversion children must move to
  t-bofu. The redesign owns the execution.
The design-fidelity battery gate (#12) asserts each page carries ≥1 rich component its tier permits.

═══════════════════════════════════════════════════════════════
§3 — STATE STRATEGY (find-an-accountant)
═══════════════════════════════════════════════════════════════
- **NY = the full built-out template** (pillar + 38 children: cities-hub+11 cities, industries-hub+8
  industries, 13 services, 4 honest-triage). NY is the content/quality bar for every future state.
- **CA / TX / FL / IL = landing pages only** (no children yet) — real per-state tax content, t-location,
  neutral motif. Shipped now (NO redirects; real pages at cutover).
- **Other states' children = POST-REDESIGN build** (additive, on the re-tiered new system; NY tree is the
  source template). t-location stays PILLAR-ONLY; state cities/industries use the lighter location-child
  treatment, state services use t-bofu.

═══════════════════════════════════════════════════════════════
§4 — DESIGN SYSTEM (migration floor → redesign)
═══════════════════════════════════════════════════════════════
Current = the cobalt MIGRATION FLOOR (warm-paper/Fraunces/cobalt; ONE site.min.css). The redesign replaces
it per `DESIGN-DIRECTION.md` (the creative truth): colder/lighter palette · richest font pairing ·
mega-menu primary nav + per-type navbars · 3D/SVG/imagery where it earns ranking+UX · best-in-niche ATF ·
UNIQUE hero per TYPE + a SHARED mid-body component library · mid-body CTAs on long types. The redesign
re-skins by TYPE per the registry and performs the §2 re-tiering. **The redesign happens ON PREVIEW, BEFORE
cutover** (see §5).

═══════════════════════════════════════════════════════════════
§5 — BUILD SEQUENCE + GOVERNANCE
═══════════════════════════════════════════════════════════════
**Migration (build-to-floor) ✅ DONE → 139 parity ✅** → **gated post-migration deliverables** (one at a
time, founder GO at each): 0 reconcile docs ✅ · 1 redesign review queue + A4 ✅ · **2 ARCHITECTURE-TRUTH (THIS
doc)** · 4 gap analysis · 3 verify+delete old Bootstrap folders → **REDESIGN on preview** (new system per
§4; includes re-tiering) → re-pattern all pages on preview → founder sign-off → **CUTOVER (LAST step — go
live)** → resume **build-new growth** (§7) in small batches.

**POST-MIGRATION GOVERNING RULE (founder, 2026-06-15):** step-by-step + GATED, NOT autonomous (the R7
migration autonomy is retired). After each deliverable: STOP, report, wait for GO. Commit+push after every
unit of work (power-loss safety); keep the living docs current. **Nothing goes live until the redesign is
done and signed off.**

═══════════════════════════════════════════════════════════════
§6 — FACTORY / BUILD METHOD (proven on the migration)
═══════════════════════════════════════════════════════════════
- Page = `<path>.njk` (JSON front-matter: layout, permalink, slug, hero, ctaBand, callBar…) + paired
  `.11tydata.js` (content arrays + `eleventyComputed.pageGraph` emitting the JSON-LD @graph via
  `dump|safe`). Layouts in `src/_includes/layouts/`.
- **MIGRATION-PROTOCOL** (drift-hardened): inject the FROZEN equity contract via
  `_build/scripts/equity_contract.py <url>` (the ONLY authority for headings + FAQ; old HTML = prose only);
  headings verbatim/exact-level; no collapse; FAQ verbatim+flat from one array (faq__list + FAQPage);
  content-to-goal (full, citable-specific) / visual-floor; mandatory pre-return self-check.
- **Verification battery** (`_build/battery/run_battery.py`) EVERY change: url-set · links (baseline∪built)
  · intents (intents.json) · founder-name-zero · css-drift · css-bytes · faq-min-6/overlap/verbatim/flat ·
  content-equity (vs baseline.json + exceptions) · cta-lexicon · manifest · design-fidelity per-tier (#12).
  Plus probes: overflow 360/390/768 · axe-core a11y. GREEN required before commit.
- **Schema pattern:** carry the full baseline node set — WebPage/CollectionPage · BreadcrumbList · Service
  (+OfferCatalog) · ItemList · FAQPage (all FAQ, no dedup) · QAPage (from the 5-question ai-summary) ·
  Article/Thing where the baseline had them. Global Org/Person/Brand/WebSite live in the base head by @id.
- **Cobalt component vocabulary** (carries into the redesign as the restyled kit): buyer-card · vs-scroll/
  vs-table · proof-strip · intake-form (shared partial) · process-diagram · fix-steps · call-breakout ·
  byline-block · meta-reviewed · guide-grid/toc · pull-quote · ai-summary--ruled · trust-row · checks-list ·
  stack-8 · grid-2/3 · hero__motif · error-badge · disclosure. RULE: pricing/comparison = vs-table, never
  proof-strip__item cards (nowrap → mobile overflow). CTAs: canonical lexicon only.

═══════════════════════════════════════════════════════════════
§7 — GROWTH BACKLOG (build-new, AFTER cutover) — from v3/v4 Sheets 1/7/8 + registry Part 2
═══════════════════════════════════════════════════════════════
Migration restored the 139 ranking-equity baselines. GROWTH is additive build-new on the new system, in
small batches, after cutover. NOT-yet-built TYPES + indicative scope (targets re-confirmed before each
batch — do not hard-lock counts here):
- **Glossary** (~45) — t-guide compact; definition/speakable/related.
- **Tools / calculators** (~9) — t-mofu tool variant; tool-panel/result; always hands off to file-review.
- **Guides** (~16, 3 are go-remote-blocker priority) — t-guide; toc/guide-grid.
- **Research / datasets** (1 built) — t-guide research dress; stat-cite (max 2/page), real data only.
- **Case studies** (~12) — t-mofu proof; REAL engagements only, no fabrication (honesty §8).
- **Switch pages** (4) — t-bofu conversion; /switch/from-{competitor}/.
- **Support silo** (~20) — t-bofu + honest-triage (Sheet-7 mandatory).
- **Reviews listing** — t-mofu; verified Clutch only; no AggregateRating until 5+.
- **Blog silo** — t-guide article.
- **More states** (find-an-accountant) + **more industries** (accounting) — on the NY/industry templates.
The growth gate is funnel/intent coverage + honesty, NOT a page-count target ("200" was never a target).

═══════════════════════════════════════════════════════════════
§8 — HONESTY + COMPLIANCE CONTRACT (absolute)
═══════════════════════════════════════════════════════════════
- No fabricated reviews/stats/team/case-studies/certifications/imagery. The 2 real Clutch reviews are the
  only review proof. No AggregateRating until 5+ real.
- Location/state outcome figures are explicitly REPRESENTATIVE/ILLUSTRATIVE, never claimed real-client
  results (R5).
- Honest-triage (support/speak/tax-problem/notice/urgent pages): disclosure banner above the fold; never
  "official"; intake qualifies Intuit billing/account intent AWAY; never implies Intuit affiliation; never
  overclaims resolution/representation (the licensed CPA/EA/attorney does that).
- Independent firm; does not file taxes / audit / attest / represent. Sales-tax prep is in bookkeeper scope;
  income-tax + controversy is the CPA/EA.
- Competitor comparisons are FAIR ("where they win"); no fabricated competitor stats; current status
  (Bench shut down Dec-2024; QB-Live restructured 2024).

═══════════════════════════════════════════════════════════════
§9 — OPEN ITEMS / TODOs (carry into the redesign + growth)
═══════════════════════════════════════════════════════════════
- **`/find-an-accountant/` bare national landing** — deferred NET-NEW build, post-redesign (founder ruling
  2026-06-15: removed for quality; state pillars top the silo until then). **301 STAGED ✅** — `src/redirects.njk`
  emits `/_redirects` with `/find-an-accountant/  /accounting/  301` (commit `939fffa`; target `/accounting/`
  founder-confirmed — national + topical, chosen over the NY pillar to avoid a national→single-state
  geo-mismatch). **REMOVE this rule when the real national landing ships.**
- **Baseline-coverage gap (flagged, OPEN):** `/find-an-accountant/` is live on prod yet absent from baseline.json
  (the round-24-phase0 record wrongly called it "not built"). **Before cutover, re-verify the 139 baseline ==
  the full live-prod URL set** — there may be other uncaptured live orphans that would 404 at cutover.
- **Old Bootstrap per-route folders DELETED ✅** (Deliverable 3, commit `2393e16`) — 10 root folders / 139 files
  removed; the live site builds from `src/` only. Removes the repo-root-serving fallback risk before cutover.
- Nav + footer chrome — no canonical design yet (the mega-menu + per-type navbars land in the redesign, §4).
- Vector logo — pending.
- Re-tier provisionals — the 5 accounting standalones (t-bofu provisional, confirm in redesign); NY cities/
  industries (review in redesign).
- Honest-triage meta_descriptions — reframed ✅ (done).
- Pilot published pricing (supply a verified figure) + re-verify QuickBooks Live current status pre-cutover.
- Footer WCAG 2.2 target-size finding (footer mailto/tel links under 24px) — fix in the redesign.
- Research-log seed (N=0).

═══════════════════════════════════════════════════════════════
§10 — DOCUMENT MAP (the LOCKED canonical doc set — one file per role, no overlap)
═══════════════════════════════════════════════════════════════
**STANDING RULE:** when something changes, UPDATE the owning file below — never spawn a new overlapping doc. If
two docs ever disagree, **THIS (ARCHITECTURE-TRUTH) + the latest founder ruling win**, and reconcile immediately.

**Canonical (authoritative, update-don't-spawn):**
1. **BUILD-TRACKER.md** — OPERATIONAL truth (current status, resume anchor, governing rules). **Read first.**
2. **THIS (ARCHITECTURE-TRUTH.md)** — ARCHITECTURE truth (URLs/silo, tiers, state strategy, sequence, growth).
3. **_build/reports/PAGE-TYPE-REGISTRY.md** — STRUCTURAL truth (type → tier → ordered sections → components).
4. **DESIGN-DIRECTION.md** — CREATIVE truth (the redesign aesthetic: palette/type/nav/assets/hero/components).
5. **_build/baseline/baseline.json + _build/battery/equity-exceptions.json** — FROZEN machine contract
   (139-page content-equity + justified differ exceptions). NOT hand-edited.

**Legacy / archive (superseded; kept for history; NOT authoritative):** techbrot-blueprint-v4.xlsx,
techbrot-blueprint-v3.xlsx, techbrot-design-brief.md, the round-NN reports, and
_build/reports/FINAL-MIGRATION-REPORT.md (its live job — the re-tier queue — folds into the redesign).
Anything in this group is SUPERSEDED by ARCHITECTURE-TRUTH + DESIGN-DIRECTION where they disagree.
