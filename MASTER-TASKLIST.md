# MASTER-TASKLIST.md — TechBrot (founder master task set, 2026-06-25)
_Goal: top-0.01% rank + near-me dominance + calls/convert. Locations = the spine.
Status per task: ⬜ pending · 🔵 in-progress · ✅ done. Update every turn with the
commit. Also update SESSION-LOG.md + BUILD-TRACKER.md + the `_build/strategy/` docs._

Execution order: T1 form → T2 title/desc → T3 David → T4 FAQ → T5 locations
(PLAN-FIRST, founder review, then build) → T6 cleanup/flip.

Standing rules live in `_build/strategy/`: FAQ-STRATEGY.md ✅ · PRE-PUBLISH-AUDIT.md ✅
· META-STRATEGY.md ⬜ · LOCATION-SEO-STRATEGY.md ⬜ · FORM-STRATEGY.md ⬜ · EEAT-STRATEGY.md ⬜
(each = rule + reasoning, portable to other projects e.g. Westgate).

---

## TASK 1 — FORM TRIM  ✅ done (commit pending battery confirm)
Remove 4 VISIBLE inputs; keep hidden auto-capture where derivable. Both full + minimal forms.
- ✅ Removed from VIEW (both forms): Months behind, QuickBooks version/status, "How did you find us?" (lead_source), "Did an AI tool recommend us?" (ai_recommended) + "Which AI tool?" (ai_tool).
- ✅ Auto-capture HIDDEN: lead_source + ai_tool + ai_recommended via `tb-forms.js deriveAttribution()` from `?lead_source=`/`?ai_tool=` + referrer host (chatgpt/claude/perplexity/gemini/copilot→ai-assistant+tool+yes; search-engine→search; external→referral). Honest/best-effort.
- ✅ MINIMAL form → name+email+convincing_page(opt)+message(opt)+consent. FULL form (contact/file-review) → **KEEPS its richer qualification (company/phone/services/revenue/industry/timeline) minus the 4 named + AI selects — founder CONFIRMED 2026-06-25.**
- ✅ Contract: collect() skips absent fields; endpoint appends-by-key → no endpoint change. Verified visible/hidden field sets on the BUILT pages.
- ✅ FORM-STRATEGY.md recorded.
- (also optimized the slow `meta-hygiene` battery check → title/desc-only — TASK 6 item, done early since it blocked.)

## TASK 2 — TITLE/DESC REWRITE  🔵 in-progress
- ✅ META-STRATEGY.md recorded · ✅ `meta-unique` battery gate added (enforces unique titles+descs sitewide; catches bulk-stamping).
- 🔵 titles → keyword-LED ≤60. DONE: w1 6 high-intent · w2 industries 26 · w3 qb/help+support 57 + qb/online 42 + glossary 46. ≈124 done; ~115 titles left.
- 🔵 descs → value+keyword led ≤160. DONE: 52 high-intent (TASK-4) · w2 industries 26 · w3 145 (help/online/glossary). ≈223 done; ~262 descs left.
- Per page-type, authored not bulk-stamped, battery+commit per wave.
- ✅ WAVE 3 DONE (3 parallel subagents, verified): quickbooks/help+support 57 · quickbooks/online 42 · glossary 46 = 145 pages.
- Remaining: find-an-accountant state landings (~16t/163d — dedicated wave, ties to T5, phone-on-near-me) · vs · guides · qb cleanup/compare/payroll/migration/enterprise · accounting advisory/services · switch · pricing · tools · blog · long-tail descs.

## TASK 3 — DAVID BLOCK + EEAT  ⬜ pending
- ⬜ Authored David operator block → /about/ + /partners/ (+ reviewedBy there). /trust/ stays team-voice.
- ⬜ Record EEAT-STRATEGY.md (reviewedBy scoped to genuine-review pages only; real operator named where contextual; no fabrication).

## TASK 4 — FAQ AUTHORING (per page-type, money-first)  ⬜ pending
- ⬜ (was TASK 2) answer-first rewrite + 1-2 call-intent FAQs w/ phone (REPLACE weakest at cap, never exceed).
- ⬜ (was TASK 3) t-hub FAQ additions (hubs under cap → ADD).
- ⬜ (was TASK 5) silo interlinks in answers (relevant, schema-safe).
- Per FAQ-STRATEGY.md. Report-before-change on cuts beyond approved de-dup.

## TASK 5 — LOCATION EXPANSION (the spine — PLAN FIRST)  ⬜ pending
- ⬜ **FIRST DELIVERABLE: full LOCATION PLAN for founder review** (state list 10-15, tier assignment, exact pages per tier, counts, routing, schema per type) — from `techbrot-blueprint-v5.xlsx`. HARD-STOP for founder ruling before building.
- ⬜ TIER 1 anchor (full build): Middletown DE (real address — richest near-me asset) · Indianapolis/Indiana.
- ⬜ TIER 2 core (~10-13: pillar + near-me/ProAdvisor + QB cleanup/setup/bookkeeping + LocalBusiness/areaServed; route sub-services/industries to global; 2-3 metros max).
- ⬜ TIER 3 later (data-driven, post-flip).
- ⬜ Record LOCATION-SEO-STRATEGY.md (tier by real relevance; anchor full; core pillar+essentials+route; children data-driven; LocalBusiness+areaServed+address; map-pack only where physical, organic+AI everywhere).
- Build state-by-state after founder rules; battery+commit per state.

## TASK 6 — CLEANUP + FLIP GATES  ⬜ pending
- ✅ Optimize the slow `meta-hygiene` battery check (title/desc only) — done in T1.
- ✅ `--fast` battery mode added (mid-wave cadence: url-set/css/content-equity/layout-v2/old-kit/meta-hygiene/meta-unique; skips heavy full-HTML scans). Standing rule in PRE-PUBLISH-AUDIT.md: --fast = provisional green; one FULL run required before flip.
- ⬜ Orphan pages (33) + 16 homepage→unbuilt-state 301-hops: list by type, propose internal links, founder rules. (State hops resolve as TASK 5 builds states.)
- ⬜ FLIP GATES (confirm at flip): Cloudflare ENVIRONMENT=production · robots.txt flip + sitemap reference · live axe/overflow (founder machine) · final noindex-leak check · baseline-vs-prod recrawl (no 404s).

---

## FOUNDER DECISIONS PENDING
- TASK 5 LOCATION PLAN — must be reviewed + ruled before any state build.
- (T6) orphan-page internal-linking proposal + the 16 unbuilt-state homepage links.

## DONE EARLIER THIS SESSION (context)
TASK-4 phone-in-meta 52 pp · entity-escape meta fix 217 fields · mojibake repair 1069/90 ·
pre-publish audit A-E (+ meta-hygiene battery gate, PRE-PUBLISH-AUDIT.md) · title-rewrite wave 1 (6).
