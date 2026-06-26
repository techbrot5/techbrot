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

## TASK 5 — LOCATION EXPANSION (the spine — PLAN FIRST)  🔵 in-progress
- ✅ **PLAN RULED (founder 2026-06-25):** 12 core (PA·NJ·MD·VA·OH·MI·GA·NC·AZ·TN·WA·CO; MA deferred) · 6 pages/state · pre-flip build OK · national-hub capstone in T5 · DE-only real-address LocalBusiness/map-pack · DE 6 / IN 8 cities. Full spec: `_build/strategy/LOCATION-SEO-STRATEGY.md`.
- ✅ **DE ANCHOR DONE (pattern approved + full state built, battery green):** pillar + 33 children = **34 pages**. Pillar `delaware.njk`/`.11tydata.js` (NEW real-address LocalBusiness/map-pack node, DE-only). Children: 6 cities+hub · 6 industries+hub (finance-banking swapped for nonprofit) · 14 services (incl. DE-specific gross-receipts-tax-help + franchise-tax-help) · 4 triage · pricing — fanned out via 7 subagents from `_build/strategy/DE-FACTS.md`, fact-checked vs DE Div. of Revenue + Div. of Corporations. Registered via new reusable `_build/scripts/register_state.py` (URLs→queue + state intents). Battery GREEN (frozen-copy workaround for the layout-v2 read-race). Commit per state. **Founder TODO: real Google Business Profile for the Middletown address → map pack.**
- ✅ **IN ANCHOR DONE (2026-06-26, FULL battery green):** pillar + 35 children = **36 pages** (cities-hub+8 · industries-hub+6 · 14 services incl. IN-distinct sales-tax-help + county-income-tax-help · 4 triage · pricing). Built from `_build/strategy/IN-FACTS.md` (fact-checked vs Indiana DOR + DLGF + Tax Foundation 2026; per-county LIT rates QUALITATIVE) via 7 subagents, data-files-only. **areaServed-only, NO street address** (verified). register_state.py registered 36 URLs + indiana/-advisory intents.
- ✅ **PILLAR SUMMARY-SWAP (founder, all pillars):** `t-state-pillar.njk` — IN-BRIEF leads, dense "summarized" drops below; position-only, equity-safe.
- ✅ **HONESTY FIX (founder):** "Verifiable on Intuit's public ProAdvisor directory" softened across the find-an-accountant silo (couldn't confirm individual operator listing); Clutch "5.0 · 2 verified reviews" REAL → kept. 🚩 ~50 sitewide occurrences outside the silo flagged for a separate sweep.
- ✅ **MA RULED IN (founder, 2026-06-26):** MA is the 13th core state, **pre-flip build** (supersedes earlier "MA deferred"). **13 core + DE + IN + 5 existing = 20 states total at flip.** LOCATION-SEO-STRATEGY.md #1 + build order updated (Wave E = MA, after WA·CO).
- ✅ **PA DONE (2026-06-26, FULL battery green, pushed):** Pennsylvania core state = 6 pages (pillar + 5 essentials). **Established the CORE-STATE PATTERN** (exemplar for the remaining 12): pillar omits `ecosystem`, industries→global, cities no-href, pricing→children+global; areaServed-only. Built from `PA-FACTS.md` (PA DOR/DCED/Philadelphia, cited). PA-distinct hook = Act 32 EIT/PSD + Philadelphia city taxes + split 6/7/8% sales tax. New reusable `battery-frozen.ps1`. Bug caught+fixed (escaped `\"` href in cleanup.njk body). register_state.py pennsylvania ran.
- ✅ **NJ DONE (2026-06-26, FULL battery green, pushed):** New Jersey core state = 6 pages on the PA exemplar. From `NJ-FACTS.md` (NJ Div. of Taxation + NJ DOL, cited). NJ-distinct hook = the UI/TDI/FLI/WF payroll stack (two wage bases) + PA–NJ reciprocity (NJ-165) + Newark/JC payroll taxes + UEZ/Salem half-rate + BAIT. register_state.py new-jersey ran. 0 escaped-quote bugs, 0 dead links.
- ✅ **MD DONE (2026-06-26, FULL battery green, pushed):** Maryland core state = 6 pages on the PA/NJ exemplar. From `MD-FACTS.md` (Comptroller of Maryland + BRFA 2025, cited). MD-distinct hook = county "piggyback" local income tax (MW507) + DC/PA/VA/WV reciprocity + the NEW 3% data/IT-services sales tax + PTE election. register_state.py maryland ran. 0 escaped-quote bugs, 0 dead links. **Halfway: 10/20 states.**
- ✅ **VA DONE (2026-06-26, FULL battery green, pushed) — WAVE A (Mid-Atlantic PA·NJ·MD·VA) COMPLETE:** Virginia core state = 6 pages on the MD/NJ exemplar. From `VA-FACTS.md` (Virginia Dept of Taxation, cited). VA-distinct hook = local BPOL gross-receipts business tax (by locality) + variable regional sales tax (5.3/6.0/7.0%) + MD/PA/WV/KY/DC reciprocity + NO local income tax (deliberate differentiation from MD/PA/NJ payroll-local-tax). register_state.py virginia ran. 0 escaped-quote bugs, 0 dead links.
- ✅ **OH DONE (2026-06-26, FULL battery green, pushed) — WAVE B (Midwest) STARTED:** Ohio core state = 6 pages on the MD/PA exemplar. From `OH-FACTS.md` (Ohio Dept of Taxation + ORC + HB96, cited). OH-distinct hook = the municipal income tax (649 cities + 199 school districts, work-location, 20-day rule, RITA/CCA) + the CAT (no corporate income tax) + county sales tax + IT 4NR reciprocity. register_state.py ohio ran. 0 escaped-quote bugs, 0 dead links.
- 🔵 **NEXT (autonomous, Wave B finishes with MI):** 8 core states MI·GA·NC·AZ·TN·WA·CO·MA (each: STATE-FACTS.md fact-checked vs that state's revenue dept FIRST → pillar + 5 essentials on the **PA/NJ/MD/VA/OH core-state exemplar**, route absent→global, Service+areaServed NO address, reviewedBy David on service children → battery on frozen copy → commit; checkpoint between states). Wave order: MI → GA·NC·AZ·TN → WA·CO → MA. Then national-hub capstone (drops the /find-an-accountant/ 301) → remaining T4 FAQ clusters → T6 flip gates.
- ⬜ (superseded) FIRST DELIVERABLE: full LOCATION PLAN for founder review (state list 10-15, tier assignment, exact pages per tier, counts, routing, schema per type) — from `techbrot-blueprint-v5.xlsx`. HARD-STOP for founder ruling before building.
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

## ASSIGNED TO ME (founder 2026-06-26)
- 🔵 **HONESTY SWEEP (sitewide, outside location silo):** the ~50 "verifiable on Intuit['s public ProAdvisor directory]"
  occurrences in /quickbooks/*, glossary, /trust/, error-codes — soften to honest generic framing exactly like the
  location silo ("the directory lists active ProAdvisors for verification"), reusing `_build/scripts/soften_proadvisor_verify.py`.
  Do as its own commit during the autonomous run (after PA proof or at a natural checkpoint). Founder keeps DE-GBP himself.

## FOUNDER DECISIONS PENDING
- TASK 5 LOCATION PLAN — ✅ ruled + MA-in (2026-06-26). No location decisions open.
- (T6) orphan-page internal-linking proposal + the 16 unbuilt-state homepage links.

## DONE EARLIER THIS SESSION (context)
TASK-4 phone-in-meta 52 pp · entity-escape meta fix 217 fields · mojibake repair 1069/90 ·
pre-publish audit A-E (+ meta-hygiene battery gate, PRE-PUBLISH-AUDIT.md) · title-rewrite wave 1 (6).
