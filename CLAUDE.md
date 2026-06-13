# CLAUDE.md — TechBrot Build Contract
Claude Code: read this fully before any action, every session. Then read
BUILD-TRACKER.md (living truth — it overrides the blueprint between
revisions). If BUILD-TRACKER.md doesn't exist yet, creating it is part of
Session 1.

## WHAT THIS PROJECT IS
techbrot.com — independent U.S. Certified QuickBooks ProAdvisor accounting
& advisory firm. Migrating from Bootstrap Studio static HTML (this repo's
current per-route folders) to 11ty (Nunjucks) → GitHub PRIVATE → Cloudflare
Pages. This is a REDESIGN + CONTENT-ELEVATION rebuild, NOT a pixel-parity
port. The approved design system comes from Claude Design (fetch command
supplied in chat) — implement that design; do not invent visual direction.

## RISK HIERARCHY (locked)
1. URLs — byte-identical. Every live slug in this repo is preserved
   forever. Not one changes. New pages are additive only.
2. CONTENT — enriched, never gutted. Existing headings, definitions, FAQ
   answers, schema, intent coverage carry 6 months of ranking equity.
   Elevate around them. Wholesale rewrite only when a page audit proves
   content weak AND the founder signs off.
3. DESIGN — fully new, from the Claude Design system. Free to change.

## CURRENT REPO STATE (read before restructuring)
- Per-route folders of static HTML: about/ accounting/ assets/ contact/
  find-an-accountant/ legal/ partners/ pricing/ quickbooks/ trust/ vs/
- home (index) was DELETED INTENTIONALLY by the founder — record as a
  decision in the baseline, not a regression. New home builds fresh on
  T-HUB from the design system.
- find-an-accountant/ is NOT in the known sitemap — treat as a live
  orphan: include in baseline, flag in the reconciliation report.
- Old CSS/JS does NOT port. The design system arrives via Claude Design.

## TARGET STRUCTURE (11ty)
- src/ for templates/content · _includes/layouts/ for base.njk + the five
  tier layouts (t-hub, t-mofu, t-bofu, t-guide, t-location) · _data/
  site.json (NAP, phone, emails, socials — edit once, sitewide)
- Existing HTML pages become 11ty pages whose OUTPUT URLS ARE IDENTICAL
  to their current folder paths. Verify output URL set == baseline URL
  set before any commit that touches routing.
- css from the Design handoff, bundled to ONE site.min.css, source budget
  ≤55KB, reported every round as a build gate.
- Fail-closed environments: production output ONLY when
  ENVIRONMENT='production' explicitly set; anything else = noindex meta +
  X-Robots-Tag header + no analytics. Prove with preview headers.
- sharp image pipeline ({% photo %}: AVIF/WebP/JPEG, explicit dims).
- JSON-LD always via dump|safe.
- NAV/FOOTER: no canonical design exists yet — keep chrome minimal,
  tracked as TODO in BUILD-TRACKER.md. Do not invent one.

## SOURCE OF TRUTH FILES (in repo root)
- techbrot-blueprint-v3.xlsx — architecture. Sheets 0–5 URL/silo/state
  contract · Sheet 6 factory (parity framing SUPERSEDED by this file's
  risk hierarchy) · Sheet 7 growth + support-silo honest-triage rules ·
  Sheet 8 v3 growth audit (add/cut lists + build priority).
- techbrot-design-brief.md — mandate, component kit, the five tier
  sequences, ledger-geometry motif spec.
- The Claude Design system (fetched via the supplied command) — the
  rendered design truth: tokens, components, five tier templates, logo.

## STANDING OPERATING RULES (proven on the sister build — absolute)
1. SPEC → BUILD → AUDIT loop. The founder pastes specs from Claude chat;
   you build; you report; the report is audited before anything advances.
   Nothing mass-produces until a template/pattern is approved on real
   pages by the founder.
2. BUILD-TRACKER.md is living truth and overrides the blueprint between
   revisions. Open every session by reading it. Update it every round.
   Commit+push per VERIFIED round only — once the domain is live, every
   push is production.
3. Verification battery EVERY round, no exceptions: content-equity differ
   vs _build/baseline/baseline.json (headings/FAQ/schema-node presence)
   where porting · overflow audit at 360/390/768 · a11y sweep (axe-core)
   · anchor + entity + kit greps · founder-name-zero in visible content ·
   intent-key duplicate check · CSS byte report vs budget.
4. Honesty discipline is absolute: no fabricated reviews, stats, team
   members, case studies, certifications, or imagery. The 2 real Clutch
   reviews are the only review proof. No AggregateRating until 5+ real.
   Support/emergency pages follow Sheet 7 honest-triage rules: disclosure
   banner above the fold, never "official", intake qualifies Intuit
   billing/account intent away. Nothing ever implies Intuit affiliation.
5. Content elevation, never gutting (risk hierarchy #2). The baseline is
   the equity contract; any baseline heading/definition/FAQ/schema node
   missing from a rebuilt page is a REMOVAL requiring explicit founder
   sign-off in the report.
6. Bug reports mid-stream: diagnose root cause first, fix at component/
   token level, never mask symptoms. Batch small corrections into single
   rounds.
7. Push back when the founder is wrong. Flag risks before they ship. If
   a request conflicts with these rules or the blueprint, say so BEFORE
   executing.
8. Westgate is a separate entity. Factory knowledge (build methods,
   verification patterns) flows freely; content, frameworks, coined
   terms, and IP never cross in either direction.
9. No founder/personal name in visible content or bylines — firm name or
   "Certified ProAdvisor team". Founder exists only in global Person
   schema for E-E-A-T. David Westgate is the only named individual
   permitted (operator section).
10. Canonical pricing figures only (blueprint Sheet 0). One intent = one
    page — check the intent map before creating anything.

## SESSION 1 SCOPE (do these in order; STOP after each part for audit)
PART A — BASELINE (the URL + content-equity contract)
  Crawl this repo's folders as URL authority. Cross-check against
  sitemap.xml. For every page capture: url, title, meta_description,
  canonical, robots, ordered H1–H3, all JSON-LD (parsed + entity-typed),
  FAQ Q/A set, internal hrefs (sorted), word_count. Write
  _build/baseline/baseline.json — FROZEN after this session. Reconcile
  three buckets vs blueprint Sheet 5: folder+sitemap / folder-only
  (orphans — find-an-accountant/ expected here) / sheet-only (never
  built → build-new backlog). Note home as intentionally absent.
  REPORT totals, per-silo counts, buckets, 3 sample records. STOP.
PART B — DESIGN FETCH + FOUNDATION CHECK
  Run the supplied Claude Design fetch command. Read its readme. Verify
  tokens arrived intact (accent #841E1E oxblood, Fraunces/Inter/JetBrains
  Mono, the fs-12…fs-68 scale, space-1…space-40). Grep components for
  hardcoded hex or undeclared custom properties (must be zero). REPORT
  the design inventory + any drift. STOP.
PART C — FACTORY SKELETON (no real page ports)
  11ty scaffold per TARGET STRUCTURE above. Env safety proven (preview
  headers shown). CSS bundled + byte report. Battery scripts stood up in
  _build/. The five tier layouts built from the Design system; ONE sample
  page per tier rendered; Lighthouse ≥95 all categories, CLS 0. Create
  BUILD-TRACKER.md. Commit+push. REPORT tree, scores, budgets, TODOs
  (nav/footer, vector logo pending, research-layer logging start). STOP.

Real page elevation begins Session 2 (legal + standalone pages first —
simplest schema, the proving ground), only after Session 1 parts are
audited and approved.
