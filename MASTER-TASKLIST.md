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

## TASK 2 — TITLE/DESC REWRITE  ✅ COMPLETE
- ✅ Final residual: the 5 silo HUB index pages (/accounting/, /accounting/industries/, /glossary/, /quickbooks/, /vs/) were excluded by the cluster subagent scopes — authored keyword-led ≤60 titles + value-led ≤160 descs directly. Sitewide over-length now 0/0.
- ✅ META-STRATEGY.md recorded · ✅ `meta-unique` battery gate added (enforces unique titles+descs sitewide; catches bulk-stamping).
- ✅ titles keyword-LED ≤60 + ✅ descs value+keyword ≤160 — sitewide over-length 0/0 (waves 1-4 + 5 hubs).
- Per page-type, authored not bulk-stamped, battery+commit per wave.
- ✅ WAVE 3 DONE: quickbooks/help+support 57 · quickbooks/online 42 · glossary 46 = 145.
- ✅ WAVE 4 DONE (4 parallel subagents, 340 pages, spot-checked + gated): find-an-accountant 174 (per-state tax facts, phone-on-near-me, honesty on triage) · quickbooks-remaining 65 · accounting+standalones 38 · resources/vs/switch/pricing/tools/frameworks/blog 63.
- TOTAL T2: ~517 page meta rewrites (w1 6 + w2 26 + w3 145 + w4 340). Sitewide: 0 dup titles, 0 dup descs, 0 hygiene fails.
- STRAGGLERS (data-file-driven, not per-page editable): blog/category.njk (paginated, meta from category data). Verify count after build; address if material.

## TASK 3 — DAVID BLOCK + EEAT  ✅ done (commit pending --fast confirm)
- ✅ Authored David operator block → /about/ (`#about-operator`, "the network, named") + /partners/ (`#partners-operator`, "proof — an operator already running it"). Contextual per page, not boilerplate. Photo + name + role + real bio (40yr, Westgate Financial Services TX partner practice, verifiable Intuit credential). Verified visible on both built pages.
- ✅ reviewedBy `#david-westgate` added to both pages' WebPage/AboutPage schema nodes (verified). /trust/ UNTOUCHED (stays team-voice, founder-name-zero — deliberate).
- ✅ EEAT-STRATEGY.md recorded (reviewedBy scoped not blanket; one real operator named where contextual; no fabrication; entity corroboration by consistent accurate mention not link volume; one westgatefs link only, in /partners/).
- ✅ Carry-forward: blog/category.njk meta straggler fixed (description was blurb + appended boilerplate+phone → over 160; now just the value-led blurb, all 8 categories ≤160, no phone per MOFU rule).

## TASK 4 — FAQ AUTHORING (per page-type, money-first)  🔵 in-progress
- ✅ RESOLUTION: founder ruled OPTION C (recorded in FAQ-STRATEGY.md, commit f82cb27): phone woven into an EXISTING FAQ answer (equity-safe — answers aren't equity-checked); dedicated call-intent QUESTION only where cap room + no baseline removal. Never reword/remove a baseline FAQ question.
- ✅ MONEY WAVE DONE (Option C, commit 219ca41): all 31 t-money pages — phone in one existing answer (30) or an added call-intent Q on under-cap proadvisor-near-me (1); answer-first/minimal-brand rewrites + silo links (7 pages). Questions byte-identical to baseline; content-equity run to COMPLETION + read = 0 failures. (Earlier non-Option-C attempt reverted fb09341+040a5dd — see history.)
- ⬜ remaining clusters (Option C): prose · pillars · location children · comparison · /faq/ hubs (EXEMPT) + t-hub FAQ ADDITIONS (under cap → add Qs) + silo links throughout.
- Per FAQ-STRATEGY.md. PROCESS: content-equity to completion + read before commit; FULL battery (faq-schema/overlap/flat) before flip (--fast skips them).

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
