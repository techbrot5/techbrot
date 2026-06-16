# BUILD-TRACKER.md — living truth (overrides blueprint between revisions)

## ⭐ PERMANENT STANDING RULES (added 2026-06-15 — apply EVERY session, EVERY stop)
**R1 — REPORT AT EVERY STOP.** Before asking the founder for anything (approval, a
decision, review), write a complete, stand-alone, honest report to
`_build/reports/round-NN.md` containing: (1) WHAT YOU DID — every page/file built or
changed this turn; (2) PREVIEW URLS — exact full `https://techbrot-preview.pages.dev/…`
link for every page touched + a one-line note each (what to check / what changed / the
citable specific added); (3) WHAT YOU THOUGHT / DECISIONS — the reasoning behind every
judgment call, tier assignment, content choice, deviation (so the founder + strategy-Claude
audit the thinking, not just the output); (4) VERIFICATION — per page: equity GREEN, axe,
overflow, tier, design-fidelity gate, CSS bytes vs gate; (5) OPEN ITEMS / next / STOP state.
Flag weaknesses, do not defend. **NO approval request without the report + URLs.**
**R2 — MIGRATION BUILD RULE (content-to-goal, visual-floor).** For the 104 migrations:
CONTENT is built to the GOAL — fully enhanced, rich, deep, citable-specific, correct tier,
conversion seam, honest-triage where it applies, every baseline equity element preserved AND
enriched. Content is PERMANENT (survives the design reset unchanged) so it is worth doing
right now; never thin content to save time. VISUAL EXECUTION is floor — current components
used correctly, design-fidelity gate passes, no 404s, no breakage, but no bespoke
current-design polish (the skin is redone in the reset). Citable specifics must be TRUE and
publicly verifiable; honesty discipline is absolute (no fabricated stats/reviews/prices/dates).
**R3 — MIGRATION DRIFT DISCIPLINE (added 2026-06-15, after round-22 wave-1 drift).** Follow
`_build/reports/MIGRATION-PROTOCOL.md` for every migration agent: (T1) INJECT the frozen equity
contract from `equity_contract.py <url>` into the prompt — agents match exact baseline.json
strings, never re-derive headings/FAQ from the old HTML; (T2) headings are frozen strings (exact
level, no reword/`<br>`/qualifier/reorder); (T3) no collapsing a baseline H2/H3 into hero/CTA/
in-brief/table-cell; (T4) FAQ from the contract verbatim, enrichment append-only; (T5) mandatory
pre-return self-check checklist against the contract; (T6) content-to-goal, visual-floor. **WAVE
CAP ~5 pages** (never a full silo). Central battery gate before every commit is the backstop.
Special-case pages get their OWN review, not batch-approval:
`/quickbooks/speak-to-a-quickbooks-expert/` (Sheet-7 honest-triage), team/credentials pages
(founder-name-zero), and the first `find-an-accountant/` t-location page (new tier).
**R4 — GIT HYGIENE (added 2026-06-15).** Stage explicit paths (`git add <path> …`), never
`git add -A`, so an accidental working-tree deletion can't be auto-staged. (Round-23 a stray
`git add -A` staged 9 report deletions; caught + restored.)
**R7 — AUTONOMOUS WAVE RUN (added 2026-06-15; SCOPE EXTENDED to the WHOLE remaining migration —
NY children now, AND QB-remainder, vs, partners, the 4 CA/TX/FL/IL landings, and accounting (39,
LAST)).** Proceed wave-by-wave (~5 pages) WITHOUT waiting for founder approval
between waves — keep moving; if the founder doesn't respond, continue with the best recommended
choice. Each wave: full MIGRATION-PROTOCOL (contract injection, content-to-goal/visual-floor, full
battery + probes before commit, equity GREEN REQUIRED to ship). Log every decision/judgment call
(tier, honesty reframe wording per R5, local-content choices, deviations) in the round report + here.
Report per R1 with URLs after EACH wave (no stop for sign-off). **TWO HARD STOPS — do NOT auto-proceed,
beep + wait:** (1) a page the battery/contract fails on that can't be cleanly fixed to equity-GREEN
(never ship degraded or guess); (2) a genuinely-unclear honesty/no-fabrication judgment R5 doesn't
already cover (never guess on honesty). Otherwise run the full 38 NY children continuously.
**R6 — BEEP AT EVERY STOP (added 2026-06-15, founder preference).** Whenever the turn STOPS for
founder input/review, the LAST action must play an audible alert so the founder knows it's
waiting: `powershell [console]::beep(1000,500)` (fallback `[System.Media.SystemSounds]::Asterisk.Play()`).
**R5 — LOCATION ILLUSTRATIVE-NOT-FABRICATED (added 2026-06-15, standing for EVERY state/location
page).** Illustrative/representative scenarios are fine WHEN LABELED as such ("a representative
cleanup engagement," "the kind of situation we handle"). NEVER assert a specific real client
engagement, or "real engagement outcomes," the firm can't substantiate. Same discipline as #4
research-log N=0 and the 2-real-reviews-only limit — no fabricated specifics anywhere. (NY-pillar
ruling: the 4 "Recent New York results" figures, formerly "real engagement outcomes, anonymized by
client request," are reframed to explicitly representative/illustrative; operational substance —
patterns, problems, work — kept. Reviews on any page = only the 2 real Clutch reviews.)

## ⭐ CANONICAL DOC SYSTEM (founder, 2026-06-15 — LOCKED standing file structure)
ONE file per role, no overlap, **update-don't-spawn**. These are the only authoritative docs:
1. **BUILD-TRACKER.md** — OPERATIONAL truth (status, resume anchor, governing rules). **Read first.**
2. **ARCHITECTURE-TRUTH.md** (was `TECHBROT-BLUEPRINT-V5.md`, renamed 2026-06-15) — ARCHITECTURE truth
   (URLs, tiers, state strategy, sequence, growth).
3. **_build/reports/PAGE-TYPE-REGISTRY.md** — STRUCTURAL truth (type → tier → sections → components).
4. **REDESIGN-BRIEF.md** — CREATIVE truth (the redesign: goal/aesthetic/nav/assets/motion/heroes/components +
   §13 as-built reconciliation). *(Promoted to this slot 2026-06-15; supersedes DESIGN-DIRECTION.md.)*
5. **PREMIUM-UPGRADE-PLAN.md** — EXECUTION/BUILD truth (founder 2026-06-16: upgrade the current CSS to premium
   WITH CODE, not a separate Design round). Honest audit + token re-cut + section-layout engine + visual layer +
   gated build steps. Operationalizes REDESIGN-BRIEF against `src/assets/css`.
6. **_build/baseline/baseline.json + _build/battery/equity-exceptions.json** — FROZEN machine contract
   (not hand-edited).
**Legacy/archive (superseded, NOT authoritative):** **`DESIGN-DIRECTION.md`** — earlier creative direction,
absorbed + expanded by REDESIGN-BRIEF.md and **DELETED 2026-06-16** (founder ruling; git history preserves it);
the v4 blueprint
(`techbrot-blueprint-v4.xlsx`), v3 (`techbrot-blueprint-v3.xlsx`), `techbrot-design-brief.md`, the round-NN
reports, and `_build/reports/FINAL-MIGRATION-REPORT.md` (its live job — the re-tier queue — folds into the
redesign).
**STANDING RULE:** when something changes, UPDATE the owning file above — **never spawn a new overlapping doc.**
If two docs ever disagree, **ARCHITECTURE-TRUTH + the latest founder ruling win**, and reconcile immediately.

## ⭐ CODE-PHASE DESIGN-OWNERSHIP RULE (founder 2026-06-16 — authoritative text in REDESIGN-BRIEF §12)
**Claude Design OWNS the visual design.** At the Design handoff, **Code's FIRST job = CAPTURE the complete
design system into the repo as the locked authoritative source** (tokens: color/type/spacing/motion · every
component's styling · every per-type hero). **Then Code BUILDS all pages by referencing that captured system.**
Code does NOT author/invent CSS or visual design afterward — it implements what Design produced. Minor
adjustments OK; **wholesale CSS/design changes go back through Design, never invented by Code.** Capture
everything at handoff so the build is pure implementation, not redesign-as-you-go.

## ⭐ CODE-PHASE RE-SKIN RULES (founder 2026-06-16 — apply on EVERY page of the re-skin)
**RS1 — STRUCTURAL UPGRADE, NOT RECOLOR.** Where a page uses an OLD/weak cobalt-floor component,
REPLACE it with the BETTER component the HANDOFF already provides. Use **only** handoff
components/structures — never invent or "improve" the design. If a page needs something the handoff
doesn't cover, **STOP and flag** (don't design it). Map old→handoff **consistently** (same old
component always → same handoff upgrade) so the swap is systematic, not page-by-page.
**Old → handoff component map (extend as types are proven):**
- full intake-form (non-baseline) → **call-block** (CALL conversion). Forms stay ONLY on `/contact/`
  + `/file-review/` (full) + state-pillar bottom (minimal 4–5). Everything else converts by CALL.
- legacy `.num` numbered grid (deliverables etc.) → **deliver-card** (non-numbered, brand tie-tick);
  the ONE numbered system per page stays the **process** (premium numbered).
- `.process-diagram` → **premium numbered process** (circle numbers, no grey top rule).
- plain centered hero → **split hero + signature figure** (`heroFigure`) where a signature diagram
  fits the type (t-account home/hub · before/after cleanup/bofu · reconciliation/migration where apt).
- light final CTA → **dark final band** (`ctaBand.dark`) — the ONE earned dark moment.
- review-card misused as pricing → **featured pricing tier** highlight.
- old dropdown nav/footer → **mid-mega nav + light footer accordion** (Gallery 04) — site-wide chrome (PENDING, item 3).
**RS2 — VARIETY GATE (battery `variety-12a`, STANDING).** #12a hard: ≤1 numbered system/page (the 2nd
numbered dataset becomes cards/flow). Pre-elevation debt exempted in `_build/battery/variety-exceptions.json`
(40 pages as of 2026-06-16) — **remove each URL as its TYPE is re-skinned**; the gate then enforces the fix.
#12b adjacency reported (hardens as pages adopt the section--* sequence). Regenerate exceptions:
`python _build/scripts/variety_gen_exceptions.py`; audit: `variety_scan.py`.
**RS3 — RESTYLE/RECOMPOSE ONLY.** Never change heading text, FAQ, intent, URLs, or schema. Equity-GREEN
vs baseline.json on every page. Variety + honesty + forms gates fire on every page.
**RS4 — TYPE WAVES, STOP BETWEEN.** Wave 1 = one real page each of home·hub·guide·state-pillar·contact·
honest-triage → battery GREEN → report URLs → founder spot-check → fan out that type. Wave 2+ =
registry-composed types (product/mofu·comparison·pricing·legal·location-child·file-review). Commit+push per wave.

## ⏳ QUEUED — REPO CLEANUP (founder 2026-06-16; ONLY after re-skin COMPLETE + APPROVED, not during)
Founder has a backup; git history preserves all. **Verify-first → dry-run → list EXACT paths → founder
confirms → delete as its own commit (`clean _build/reports archive`) → confirm clean build → report.**
**DELETE (superseded round logs in `_build/reports/`):** round-7 … round-26-ny-children, round-10-step3,
round-10-step6, round-21-design-audit, round-21-fidelity-replication, round-24-phase0, cloudflare-fix +
any other stale round-NN. **KEEP (LIVE):** PAGE-TYPE-REGISTRY.md, FINAL-MIGRATION-REPORT.md,
MIGRATION-PROTOCOL.md, round-27-capture-plan.md + current-round report, BUILD-TRACKER, ARCHITECTURE-TRUTH,
REDESIGN-BRIEF, baseline.json, equity-exceptions.json. **ALSO propose (don't delete) other now-unneeded
items** (the `_build/design-capture/extracted/` bundle once fully captured, stale scripts, the old bundle if
regenerated) — list + reason, founder confirms. **NEVER touch `/src/`, `_site`, `assets`, config, or any
canonical doc above.**

## ⛳ CUTOVER GATE — FLIP-TO-LIVE PRE-FLIGHT (founder 2026-06-17; flip is NOT just a page count)
Before techbrot.com is pointed at this build, ALL must clear:
1. ✅ **CLEARED — real phone number locked (founder confirmed 2026-06-17).** (877) 751-5575 /
   `tel:+18777515575` is TechBrot's REAL toll-free line — NOT a placeholder. Central token
   `site.phone` in `src/_data/site.json`; chrome (header/footer/nav/drawer/call-bar) + tier
   layouts + the elevated call-block all reference the token. No wrong/old number anywhere
   (the only non-token tel: are contact.njk + tb-forms.js — SAME real number; dev/* samples use a
   fictional 555 number, preview-only/not shipped). Tokenize contact at its proof for single-source.
2. **Real Intuit ProAdvisor badge artwork** in (no stand-ins live).
3. **baseline-vs-live-prod re-crawl** done — `/find-an-accountant/` orphan blind spot + any other
   uncaptured live URL → 301s confirmed so nothing 404s at cutover.
4. **/resources/ interim repoint** resolved or confirmed safe (nav "Resources" → /resources/research/
   until the /resources/ hub ships).
5. **Full re-skin complete + equity-GREEN site-wide + battery green.**

## ⚡ PACE — PER-TYPE PROOF, THEN AUTOMATE FAN-OUT (founder 2026-06-17)
Move fast. Prove ONE page of each remaining type → founder glances fast → then AUTOMATE the fan-out
of that whole type (founder reviews ~one page per type, NOT every page). After a type's proof is
OK'd, fan it out automatically; report URLs in the round block; keep moving toward ~200. State
pillar: prove the **NY pillar + one NY child** specifically (NY is the only built-out state).
Sequence: nav nowrap fix → hub proof → guide → NY pillar + NY child → contact → triage. Commit per step.

## FIND-AN-ACCOUNTANT PHASE (spec 2026-06-15) — deploys AFTER QB silo 1 + vs + partners, BEFORE accounting; accounting silo LAST
Scope: **NY is the only state built out** (pillar + 39-page tree). **CA/TX/FL/IL parked via
temporary 301** (no content build) — scheduled for full build-out POST-REDESIGN on the new
system; redirects removed when the real pages ship. PHASE 0 dependency report:
`_build/reports/round-24-phase0.md`. NY tree = 39 (pillar 1 · cities-hub 1 · cities 11 ·
industries-hub 1 · industries 8 · service-children 17). t-location is a NEW unproven tier →
**prove the NY pillar SOLO first (own review), then children in ~5-page protocol waves.** Every
NY page: equity GREEN + enriched to goal + REAL NY local specificity (NY/NYC tax, not a mad-lib
— NY is the template-quality bar for all future states), correct local schema, t-location
design-fidelity, pillar↔children↔siblings + location↔service-silo interlinking. Report ends with
an explicit t-location verdict. NY in-content links to /accounting/* (5 not-yet-built targets)
will 404 on preview until the accounting silo (last) ships — founder accepts (not severe).

**✅ NY SILO COMPLETE (2026-06-15, round 26) — pillar + all 38 children migrated, committed,
verified.** 8 waves on the proven t-location tier: 12 cities-tier · 9 industries · 13 standard
services · 4 honest-triage services (business-tax-problems, state-tax-notice-help, urgent-bookkeeping,
speak-to-a-proadvisor — founder-approved autonomous Sheet-7 build, disclosure-above-fold,
overclaims reframed). Every page equity GREEN · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.
Full log: `_build/reports/round-26-ny-children.md`. Commits `9056d8a`→`b21f80d`. **OPEN (founder):**
a few frozen baseline meta_descriptions on the honest-triage pages brush the SLA/options line
(urgent "Same-day response, CPA-ready in days"; biztax "see your options") — kept verbatim as SEO
equity, visible pages reframed/honest; founder to decide keep-vs-reframe. **NEXT:** the 4 state
landings CA/TX/FL/IL (real per-state tax content, t-location, no children yet), same R7 autonomy.
NOTE: the FIND-AN-ACCOUNTANT PHASE spec above said CA/TX/FL/IL were "parked via 301" — SUPERSEDED by
the revised spec (no redirects; CA/TX/FL/IL ship as real landing pages now, children post-redesign).

**✅ FIND-AN-ACCOUNTANT SILO COMPLETE (2026-06-15, round 26) — 43/43 baselines migrated.** NY (pillar +
38 children, 8 waves) + CA/TX/FL/IL state landings (landing-only; children post-redesign). All on the
validated t-location tier: equity GREEN · axe 0 · overflow clean 360/390/768 · CSS 55,933 B. Commits
`9056d8a`→`de3df13`. Honest-triage metas reframed per founder (commit `e5e0c21`). **Patterns banked:**
state landing = clone NY pillar + `heroMotif: motif-align-full.svg` (t-location layout now takes a
`heroMotif` override; neutral motif, not a wrong-state contour) + real per-state tax content + NO links
to non-existent children (route to `/contact/?intent=<state>`) + explicit `<state>`/`<state>-advisory`
intents (battery intent check is static). Pricing/comparison tables MUST use `vs-scroll`+`vs-table`, never
`proof-strip__item` buyer-cards (nowrap → mobile overflow; caught + fixed on CA). **NEXT (R7 autonomy):**
QB-remainder (6) → vs (5) → partners (1) → accounting (39, LAST). Deploy order unchanged.

**✅ QB-REMAINDER + VS SILO COMPLETE (2026-06-15, round 26).** QB-remainder (6): 5 migration children
(desktop-to-online, migration-cleanup, other-software-to-qb, quickbooks-to-xero t-bofu, balances-wrong-
after-conversion t-guide HowTo — commit `5739ddd`) + speak-to-a-quickbooks-expert (t-bofu honest-triage,
founder-approved solo, `28cf794`/`f032703`, wired to the existing quickbooks-speak-expert intent). vs silo
(5): hub + bookkeeper-vs-accountant + techbrot-vs-bench/pilot/quickbooks-live (t-mofu, `66f0e42`). All
equity GREEN · axe 0 · overflow clean 360/390/768 · CSS 55,933 B. vs honesty: fair vs-table (where they
win); Bench Dec-2024 shutdown reflected; Pilot unverifiable stats dropped (qualitative); QB-Live 2024
restructure + not-Intuit independence stated, fabricated pricing removed. OPEN (low-risk, founder): Pilot
published pricing + re-verify QB-Live current status before go-live.

## ⛔ POST-MIGRATION GOVERNING RULE (founder, 2026-06-15) — STEP-BY-STEP, GATED, NOT AUTONOMOUS
Migration is COMPLETE (139/139, cutover parity). **The R7 autonomy rule was MIGRATION-ONLY and no longer
applies.** From here, work proceeds ONE DELIVERABLE AT A TIME: after EACH deliverable, STOP, report, and
WAIT for the founder's explicit GO before starting the next. These are high-stakes / low-volume judgment
steps — gated, not autonomous. Do NOT batch or run ahead.

**POST-MIGRATION SEQUENCE (roadmap; execute one-at-a-time with a founder gate at each):**
- **0. Reconcile all governing docs** — bring BUILD-TRACKER, PAGE-TYPE-REGISTRY, DESIGN-DIRECTION,
  FINAL-MIGRATION-REPORT, equity-exceptions current + mutually consistent; flag/resolve contradictions to
  the latest founder rulings. *(in progress this turn, then STOP)*
- **1. Complete the redesign review queue** (+ A4 hero check). ✅ DONE 2026-06-15 · **✅ GO (founder 2026-06-16)** —
  A4 RESOLVED (all 38 NY children clone the pillar's full t-location hero unconditionally → reinforces
  t-bofu re-tier for conversion children); DECISION-READY re-tiering queue at the top of
  FINAL-MIGRATION-REPORT (① 20 high-confidence re-tier · ② 26 review · ③ rest keep). **Queue executes INSIDE the
  redesign phase (before cutover), per plan.**
- **2. ARCHITECTURE-TRUTH** — `ARCHITECTURE-TRUTH.md` (repo root; was `TECHBROT-BLUEPRINT-V5.md`, RENAMED
  2026-06-15). ✅ DRAFTED 2026-06-15, post-review corrections (`226fb74`), **✅ RE-APPROVED (founder 2026-06-16 —
  corrected v5 is good)**. The source-of-truth
  architecture doc (§0 identity/non-negotiables · §1 URL+silo 139 · §2 type/tier DECIDED · §3 state strategy ·
  §4 design · §5 sequence/governance · §6 factory · §7 growth backlog · §8 honesty · §9 opens · §10 doc map).
  Supersedes v4/v3.xlsx + design-brief where they disagree. Nothing depends on it until founder-approved.
- **3. Verify + delete the old Bootstrap-Studio per-route folders.** ✅ DONE 2026-06-15 (pulled forward, founder
  GO). Verified safety (139/139; baseline.json holds equity independent of old HTML; battery reads
  baseline.json + _site + src, never old folders; build input=src only), deleted 10 root folders / 139 files
  (about·accounting·contact·find-an-accountant·legal·partners·pricing·quickbooks·trust·vs) via `git rm`,
  commit `2393e16`. Post-delete: clean build → _site (148 pages) + _redirects intact; battery GREEN (exit 0,
  links 15667 resolve, zero broken refs). `contact/` added to the delete list per founder (I flagged it as the
  one unlisted old folder). Removes the repo-root-serving fallback risk before cutover. src/ untouched;
  recoverable via git + founder backup.
- **4. Gap analysis** (redesign scope + proving set). ✅✅ **COMPLETE — REDESIGN-BRIEF.md is FINAL (founder
  2026-06-16).** All Deliverable-4 specs live in `REDESIGN-BRIEF.md` §13 (reconciled with the as-built system).
  Read the founder's strategy brief (`REDESIGN-BRIEF.md`
  §0–§12) + grounded it: §13.1 as-built component map (EXISTS vs NET-NEW, real classes) · §13.2 the 3 approved
  component-kit changes (call-breakout→PRIMARY · net-new minimal state-pillar form · PLACEMENT-MAP rewrite) ·
  §13.3 forms-ruling registry/placement-map delta · §13.4 honest-triage compliance re-spec (⚠ FOUNDER SIGN-OFF) ·
  §13.5 gap-analysis checklist · §13.6 grounded proving set (real URLs) · §13.7 doc-system flag. **No code/registry
  edits (specs only); the registry/PLACEMENT-MAP propagation is deferred to brief-final / the Code phase.**
  **FOUNDER RULINGS FOLDED IN:** ✅ 3 component changes RATIFIED (§13.2) · ✅ honest-triage wording **SIGNED OFF
  2026-06-16** (§13.4, Sheet-7 compliant) · ✅ doc-system: REDESIGN-BRIEF = canonical CREATIVE truth,
  **DESIGN-DIRECTION.md DELETED** (2026-06-16; git history preserves it) · ✅ `/contact/` + `/file-review/` =
  premium conversion-form page TYPE (§13.8) · ✅ proving set FINAL one-per-type (§13.6) · ✅ **design-quality rules
  folded in 2026-06-16** — section rhythm/anti-monotony (only 1 numbered system/page · no adjacent same-looking
  sections · deliberate variety) woven into §9 + motion §6 + nav/breadcrumb/mobile-footer-accordion §4 + the
  section-rhythm design-fidelity GATE additions §13.9. **No code/registry edits (specs only); registry/PLACEMENT-MAP
  propagation + the §13.9 gate checks land in the Code phase.**
  **⚠ NOTE:** `DESIGN-DIRECTION.md` had earlier been deleted from the working tree (unstaged — R4 explicit-add
  hygiene kept it out of every commit); confirmed by founder + now deleted intentionally as part of the doc-system
  consolidation. **NEXT: the brief is FINAL → founder takes it to Claude Design** (generate the visual system as
  OPTIONS — palette/type/signature + the §13.6 proving pages mocked); NOT Code building yet.
- **→ then the REDESIGN** (separate phase, per REDESIGN-BRIEF.md; includes the re-tiering pass).
- **→ CUTOVER is the LAST step** — nothing goes live until the redesign is done and founder-signed-off.

The latest founder rulings the docs must agree with: hubs route = **t-hub**; conversion children =
**t-bofu**; **t-location only the pillar**; honesty = illustrative-not-fabricated (R5); state strategy =
**NY full + CA/TX/FL/IL landings now, other states' children post-redesign**; **cutover LAST, after the
signed-off redesign**.

**RULING — `/find-an-accountant/` bare national landing (founder, 2026-06-15):** intentionally removed for
quality; **NOT a gap to restore now.** Rebuilt FRESH post-redesign as a proper net-new t-hub national landing.
State pillars (CA/FL/IL/NY/TX) top the silo until then. **CUTOVER CHECK (verified this turn): the URL is LIVE
(HTTP 200) on production techbrot.com today** (a "50-state coverage" landing) but is ABSENT from baseline.json.
→ **301 STAGED ✅ (founder confirmed target `/accounting/`, 2026-06-15):** `src/redirects.njk` emits
`/_redirects` with `/find-an-accountant/  /accounting/  301` (commit `939fffa`); verified the bundle writes
`_site/_redirects` on clean build. National + topical interim target (chosen over the NY pillar to avoid a
national→single-state geo-mismatch). **REMOVE this rule when the real find-an-accountant national landing ships
post-redesign.** **⚠ STILL OPEN — baseline-coverage re-verify:** a live prod URL was missing from the 139
baseline, so **before cutover re-verify baseline == the full live-prod URL set** (possible other uncaptured
live orphans that would 404 at cutover).

### ▶ CURRENT RESUME POINT (recovery anchor — keep current; founder may resume via `claude -c` after power loss)

## 🔵 FRESH-SESSION RESUME (2026-06-17 — founder about to /clear; read THIS first, then round-28-wave1.md)
**MODE: AUTONOMOUS.** Run non-stop: prove a type → battery GREEN → report URL → auto-fan-out that type
→ next. Commit per step, round-report block every turn (every page URL), full detail in
`_build/reports/round-28-wave1.md`. Do NOT wait for OK except the **5 STOP-GATES**: (1) NY pillar + 1 NY
child, (2) honest-triage compliance copy, (3) handoff doesn't cover it, (4) page can't go equity-GREEN
without a content change, (5) any NEW content/structure decision. Battery can't cleanly go green → hard STOP.
GATES every page: variety #12a/#12b · honesty · forms · equity-GREEN · CLS 0 · axe · overflow.

**LAST COMMIT before /clear: (this turn's checkpoint commit — see `git log -1`).** Working tree must be clean.
Dev server: `npm run serve` → http://192.168.1.7:8080/ (data-file edits need a server restart — it caches
data modules; a clean `npx @11ty/eleventy` always reflects them).

**DONE (elevated re-skin):** token+font re-cut · money-page proof (/accounting/bookkeeping/cleanup-bookkeeping/)
· home · global chrome (mid-mega nav + light footer + nowrap) · premium numbered process · variety gate
(variety-12a, 40 legacy exempted in variety-exceptions.json) · **hub proof + FANNED OUT (9 t-hub pages)** ·
visual polish (cold nav, breadcrumb, prose links, related-cards) · **Q&A split** (bookkeeping children 10→5 via
`override:aiSummary`; /vs/ inspected = NOT the bug, 2 intentional blocks) · **endpoint type** (contact +
file-review + 404 share `partials/util-hero.njk`; ai-summary + numbered-process + breadcrumb stripped; form
centerpiece) · **NAV-SCOPE fix** (t-bofu no longer forces chrome:minimal → FULL mega-nav everywhere; MINIMAL
nav ONLY on /contact/ + /file-review/; 16 wrong pages fixed; 404 now full). Phone CLEARED (real 877 number).

**⚑ CONTACT corrections APPLIED this turn (verify on resume):** (a) contact hero is LEFT-aligned
(`heroAlign: left` → `.util-hero--left`); 404/file-review stay centered. (b) the BRIEF/TL;DR block is RETAINED
(#contact-promise "How to reach us & what to expect"); only the 5-Q AI Q&A + numbered process + breadcrumb
were stripped. Form stays centerpiece below the hero.

**✅ GUIDE PROOF DONE (`792ba59`, 2026-06-17) — `/quickbooks/faq/`.** t-guide layout gained an OPT-IN split
article-hero + signature figure (`heroFigure`, DEFAULT OFF — fit-to-purpose). NEW token-only components from
the locked Guide template: `.diagram-feature` (carded in-article diagram; partial `figure-reconcile-flow.svg`
in cluster-fixing) + `.lead-magnet` (one dark mid-article offer; HONEST → real free file review, NOT a
fabricated PDF, per R5). faq: equity GREEN (26h·35faq·26schema) · axe 0/27 · overflow clean 360/390/768 · CLS 0
· CSS 75,939B/83,968B. Full detail: round-28-wave1.md.
**✅ LINK UNDERLINE — single site-wide source (`5c07840`, founder directive 2026-06-17).** All text-link
underlines unified to the buyer-card look (short PARTIAL rule default → FULL on hover/focus; faint ink →
accent, 1.5px). ONE source = the `LINK UNDERLINE — SINGLE SITE-WIDE SOURCE` block in `09-extensions.css`
(background-gradient, works on wrapping prose links — a `::after` pseudo can't). Covers prose/inline,
Explore→ card links, heading-links, footer, breadcrumb, TOC. **NAV kept pill-hover (captured chrome) — JUDGMENT
CALL, awaiting a 5-sec founder confirm.** axe /quickbooks/ 0/28.

**✅ BREADCRUMBS site-wide except /contact/ (`0beee05`).** t-hub + util-hero now render breadcrumbs; 8 hubs +
file-review + 404 covered; contact omits (founder); HOME (`/`) left without (root — single-item crumb is
meaningless; FLAGGED). **✅ NAV underline (`0beee05`):** `.nav__link` adopts the partial→full underline (exact
buyer-card `::after` pseudo; pill dropped on plain links; triggers keep chevron+pill). **✅ GUIDE FAN-OUT,
reference sub-type (`bd23320`):** elevated split hero + T-account figure + trust on the 6 reference FAQ guides
(/accounting/faq, /accounting/advisory/faq, /accounting/bookkeeping/faq, /accounting/industries/faq,
/quickbooks/payroll/faq, /partners/faq). Error/legal/HowTo guides KEEP fit-to-purpose heroes. All equity GREEN,
overflow clean, axe 0, CSS 76,515B/83,968B.

**▶ NEXT — STOP-GATE #1: NY pillar (`/find-an-accountant/new-york/`) + 1 NY child.** t-location is the only
state built out + the template-quality bar → prove the pillar elevated SOLO, founder reviews, THEN fan out the
NY children. Then honest-triage (STOP-GATE #2). Then Wave-2 registry types (product/mofu · comparison · pricing ·
legal · location-child). CUTOVER GATE tracked above; gate #1 (phone) CLEARED. Old→handoff map + RS1–RS4 + PACE govern.
**DEV-SERVER NOTE:** `npm run serve` binds the LAN; this session = http://192.168.1.7:8080/. Probe servers
must be hit via 127.0.0.1 (the scripts' hardcoded `localhost` resolves to IPv6 ::1 while python http.server
binds IPv4 only → empty probes; run chrome against 127.0.0.1:8125/_site-prod + 127.0.0.1:8090/_site).

**🟢 CODE PHASE LIVE — design captured, re-skin underway (2026-06-16).** Founder fetched the Claude
Design "TechBrot Design System Elevation" handoff; we are in PURE IMPLEMENTATION per it (design-ownership
rule). Locked design source: `_build/design-capture/extracted/`. Full plan + execution log:
`_build/reports/round-27-capture-plan.md`.
- **Direction (locked, founder chat):** cold/light · accent **Ledger Ink #1E3A70** · **Fraunces + Geist +
  Geist Mono** · whisper tonal `--surface-subtle #F7FAFD` · 4 signature ledger diagrams · CALL conversion ·
  honesty rules · section-variety engine (#12a–d) · forms ONLY on /contact/ + /file-review/ + minimal pillar.
- **⚠ Recorded finding:** the handoff bundle ships TWO directions; the `_ds/` snapshot (cobalt + Geist-only)
  is an EARLIER iteration, **intentionally SUPERSEDED**. Capture from the templates + galleries + handoff.
- **✅ COMMIT 1 — token + font re-cut (`a2be13b`, pushed):** 00-fonts (Geist + Geist Mono self-hosted, retire
  Public Sans/IBM Plex; Fraunces kept) · 01-tokens (full cold/light re-cut, all enforced names preserved so
  the tokenised 02–09 layers inherit the skin; new groups surface/diagram/illus/measure/icon/motion-stagger;
  muted ink #5C6A82 for AA) · base.njk Geist preload + theme-color · **CSS gate re-set 58→82KB** (battery +
  bundle). **Battery GREEN** (equity 139/139, css-drift, manifest, design-fidelity; min 57,809B/82KB). Every
  existing page now wears the elevated skin (content/equity untouched). Dev server: `http://192.168.1.7:8080/`.
- **✅ COMMIT 2 — PROVEN MONEY PAGE (`73c5d54`, pushed) — STOP at founder review gate.**
  `/accounting/bookkeeping/cleanup-bookkeeping/` re-skinned end-to-end on the elevated system. RESTYLE ONLY:
  `.11tydata.js` untouched (all content + full schema graph preserved); every baseline heading + 12 FAQ +
  intent + URL kept. Captured library applied: t-bofu hero `heroFigure` split + signature before/after diagram
  partial · `ctaBand.dark` (one earned dark band) · premium no-form **call-block** (forms ruling: the
  migration-era intake form — non-baseline heading "Scope your cleanup." — replaced by CALL) · hero trust chips
  · featured pricing tier · draw-on motion. All NEW CSS token-only in `09-extensions.css` (css-drift green).
  **Battery GREEN:** equity 42h/12faq/31 schema · axe 0/28 · overflow none 360/390/768 · CLS 0 · LH a11y/BP/SEO
  100 · CSS 63,522B/82KB. Preview: `http://192.168.1.7:8080/accounting/bookkeeping/cleanup-bookkeeping/`.
  Full report: `_build/reports/round-27-capture-plan.md` (Step 3).
  **⚠ OPEN (founder):** `site.json` ships `+18777515575` which the design chat flagged as not the real founder
  number — confirm the real number (one-line change, propagates site-wide).
  **▶ NEXT (after founder approval of the proven page):** re-skin the rest by type, wave-by-wave, from the
  captured library (build out the remaining section-layout macros + per-type heroes as needed). **No mass apply
  until the founder signs off on this page.**

**As of the 2026-06-16 brief-FINAL commit (latest on `preview-11ty`):** ✅✅ PATH B MIGRATION COMPLETE
(139/139, cutover parity) — gated POST-MIGRATION SEQUENCE, all desk-work deliverables DONE. Deliverable status:
- **D0 reconcile docs ✅** · **D1 redesign review queue + A4 ✅ + ✅ re-tier queue GO (founder 2026-06-16)** —
  executes inside the redesign · **D2 ARCHITECTURE-TRUTH ✅ RE-APPROVED (founder 2026-06-16)** (`226fb74`) ·
  **D3 verify+delete old folders ✅** (`2393e16`) · **D4 gap analysis ✅ COMPLETE — REDESIGN-BRIEF.md RE-CONFIRMED
  FINAL** (founder 2026-06-16; §13 reconciliation; triage wording signed off §13.4; design-quality rules
  §4/§6/§9/§13.9; v4.xlsx source diff done; `/pricing/` type + fit-to-purpose hero rule; **+10 founder additions
  woven in 2026-06-16 — logo · maturity benchmark · anti-trust-killer · illustration library · utility states ·
  conversion psychology · trust architecture · full tokens · AI-era UX · MUST-deliver signature, index §13.11**).
- **301 STAGED ✅** — `src/redirects.njk` → `/find-an-accountant/  /accounting/  301` (`939fffa`); remove when
  the real national landing ships post-redesign.
- **Doc system:** canonical creative truth = REDESIGN-BRIEF.md; **DESIGN-DIRECTION.md DELETED** (`d9c4f94`).
- **⚙ EXECUTION-PATH DECISION (founder 2026-06-16): upgrade the current cobalt CSS to premium WITH CODE** (no
  separate Claude Design round). Plan = **`PREMIUM-UPGRADE-PLAN.md`** (DRAFT, awaiting founder review): honest
  audit (foundation strong; gaps = warm→cold/ink-blue palette re-cut, the SECTION-LAYOUT engine that fixes
  same-looking sections, the signature ledger-diagram + icon system, CallBand-primary, premium components, nav
  mid-mega + footer accordion, section-aware motion; pipeline lock so `src/assets/css` is authoritative). Gated
  8-step build → prove the ~11 proving-set types FIRST → founder sign-off → mass-apply wave-by-wave. **NEXT:
  founder reviews the plan; then execute Step 0.** REDESIGN-BRIEF §12 Design-options path SUPERSEDED by this.
- **After the plan is approved:** execute PREMIUM-UPGRADE-PLAN steps 0→8 (gated), folding in forms propagation
  §13.3 + the §2/A re-tiering + the §13.9/variety gate → prove the ~11 proving-set types → founder sign-off →
  re-pattern the rest wave-by-wave → **CUTOVER (LAST)**. ARCHITECTURE-TRUTH ✅ re-approved + D1 re-tier queue ✅ GO.
  **NOT building yet — plan review is next.**
- **✅ v4.xlsx DIFF DONE (2026-06-16, `_build/scripts/v4_diff.py`):** 427-URL full vision; 96/99 built-global
  match; 330 not-built growth backlog — **NO new page type (NOT design-blocking)**; counts reconciled into
  ARCHITECTURE-TRUTH §7 (support silo corrected ~20→~67). `/pricing/` ruled its own call-converting TYPE
  (REDESIGN-BRIEF §13.10). Code-phase **design-ownership rule** recorded (§12 + standing rule above).
- **⚠ Carry-open (cutover-prep):** re-verify baseline.json == the full live-prod URL set. **THREE uncaptured-live
  orphans found, all 301-STAGED ✅** in `src/redirects.njk` (live 200 + distinct content on prod, not in
  baseline/built): `/find-an-accountant/ → /accounting/` · `/reviews/ → /trust/` (no standalone reviews page
  until 5+ real — honesty) · `/about/team/ → /about/` (no individual team page — founder-name-zero). All 3
  verified emitting. Old host SOFT-404s to home (200), so a bare 200 isn't proof — require distinct content.
  (`/legal/`, qb cleanup-tiers = soft-404, no action.) **Pre-cutover: still do the full baseline-vs-prod re-crawl.**
- **`/pricing/` ✅ LOCKED** as its own call-converting TYPE (REDESIGN-BRIEF §13.10) · **FIT-TO-PURPOSE hero rule
  ✅ added** (§8/§6 + gate §13.9 #12d: each type wears ITS hero; legal = clean authoritative doc, no marketing hero).
- The tier RE-TIERING pass (NY ~17 conversion children → t-bofu, FINAL-MIGRATION-REPORT Section A; accounting
  BOFU services → t-bofu, Section D2) runs INSIDE the redesign phase — BEFORE cutover, not after.

**STANDING (founder, 2026-06-15):** commit+push after EVERY wave (never batch waves uncommitted); keep
BUILD-TRACKER + `_build/reports/FINAL-MIGRATION-REPORT.md` + `round-26-ny-children.md` current so a fresh
session can read them + the last commit and continue from the last committed wave.

### ⚠️ POST-MIGRATION REVIEW (founder-requested 2026-06-15) — TIER RE-CATEGORIZATION
Founder directive: the 38 NY children were ALL built on **t-location** (build-to-floor, one proven tier
for speed). That is architecturally wrong for the **conversion/BOFU** children, which are flat location
clones today but should be **t-bofu** (proof-strip + intake-form + vs-table conversion structure), not
location landings. The pillar `/find-an-accountant/new-york/` is the ONLY page that should carry the
t-location hero (state-contour motif + sticky call-bar location chrome).
- **Verify post-migration:** only the NY PILLAR carries the t-location hero; the cities (11) + cities-hub
  + industries (8) + industries-hub are legitimately location/MOFU and may stay t-location; but the
  SERVICE + HONEST-TRIAGE children are BOFU and likely need re-tiering to t-bofu.
- **Founder-named t-bofu candidates:** cleanup-bookkeeping, monthly-bookkeeping, urgent-bookkeeping,
  business-tax-problems, quickbooks-cleanup.
- **Deliverable:** the FINAL MIGRATION REPORT must list, with full URLs, every NY child that may need
  re-tiering (location-clone → t-bofu), for founder review AFTER migration completes. Do NOT re-tier now
  — finish the migration first; this is a post-cutover-prep cleanup pass.
- **Same care on ACCOUNTING (39):** as each accounting page is migrated, note in the final report any
  industry/service page that is really **BOFU** (conversion: cleanup, catch-up, a specific paid service)
  vs **MOFU** (consideration: hub, overview, comparison) so the tier choice is flagged, not assumed.
This re-tiering pass is tracked here so it is not lost; it runs after the 139-baseline cutover-parity gate.

Updated: 2026-06-14 · NEW PHASE — PATH B MIGRATION. **✅ COMPLETE 2026-06-15 (139/139). This block is
historical planning; the live status is the POST-MIGRATION GOVERNING RULE block above.** Goal (as run):
migrate the 104 remaining baselines to the current cobalt system FAST (build-to-FLOOR, not polish — all get
re-patterned on the new design system in the redesign phase), reach all-139-baselines parity. ~~then
cutover, THEN design reset~~ → **SEQUENCE CORRECTED 2026-06-15: redesign happens BEFORE cutover; cutover is
the LAST step (nothing goes live until the redesign is signed off).** 200 was NOT a target; the gate was
"all 139 baselines migrated" — MET. Floor per page (all met): equity GREEN · axe 0 · overflow clean ·
correct tier + CTA · honest-triage where it applies · design-fidelity per-tier pass.
**MANDATORY: maintain `_build/reports/PAGE-TYPE-REGISTRY.md`** (every page tagged to type/tier
+ exact section list per type, incl. not-yet-built types) — it is the input to the design reset
and must be complete by cutover.
**MIGRATION ORDER (proposed):** silo 1 quickbooks (16) → silo 2 vs (5) → silo 3 accounting
(39) → silo 4 partners (1) → silo 5 find-an-accountant (43, needs t-location). Hubs before
children (no internal 404s); ranking-value weighted; the cross-linked /quickbooks/proadvisor-team/
+ /speak-to-a-quickbooks-expert/ are dependency-priority (already linked from shipped pages →
currently broken on the new build). find-an-accountant last (orphan/lowest indexed + new tier).
**Silo-1 batch-1 = proof page /quickbooks/desktop/ (t-mofu) — DONE + verified.** Migrated from
the 1638-line static baseline: 48 baseline headings + 8 FAQ + 28 schema types all preserved
(content-equity GREEN), CollectionPage/BreadcrumbList/ItemList/FAQPage schema kept, ItemList-of-4
editions carried AS a vs-table, byline-block + buyer-card + meta-reviewed, file-review-primary CTA,
honest QBD-sunset framing. Added `quickbooks-desktop` intent. axe 0 · overflow clean 360/390/768 ·
LH CLS 0, a11y/BP/SEO 100. Recipe + registry entry ("t-mofu product page") established → replicate
the rest of silo 1 on founder sign-off (enterprise/which-plan/proadvisor-team t-mofu next; then
migration+payroll children; speak-to-expert honest-triage). STOP per batch (preview review).
**`DESIGN-DIRECTION.md` created** (standalone creative brief for the post-cutover design reset:
colder/lighter palette, richest fonts, mega-menu + per-type navbars, 3D/SVG/imagery where they
earn it, best-in-niche ATF, mid-body CTAs, unique-hero-per-type + shared-mid-component library).
Registry Part-3 tiers flagged **PROPOSED, not decided** (founder rules tiers on preview; #5 open).
HELD: #4 research-log N=0 · #5 the-9 t-bofu/t-mofu decided on preview · #2 footer WCAG queued.

Updated: 2026-06-14 · ROUND 21 DESIGN-FIDELITY DEBT **FULLY CLEARED** — /about/methodology/
+ /trust/ (the last 2 generic-primitive pages) re-patterned to their tier (both t-mofu).
Each got mofu's by-rule signatures per PLACEMENT-MAP: `byline-block` at the top of the
article (renders "By the Certified QuickBooks ProAdvisor team" — founder-name-zero holds) +
`meta-reviewed` at the foot of the page-review section + one `pull-quote` elevating an
existing thesis line (methodology: "The process is the product…"; trust: "A real review
program is worth more than a hundred fabricated stars."). Also dropped the `review-card`
MISUSE on both (standards/boundaries/navCards on methodology; certifications/scope/related
on trust — review-card is "—" for mofu) to `stack-8`, consistent with the error/hub/bofu
re-patterns. Equity preserved (all baseline headings kept through the conversion;
content-equity GREEN — methodology 34 headings, trust 39). **GATE NOW: 32 content pages pass
per-tier on merit · DEBT LIST EMPTY.** Re-verify: battery GREEN · overflow 2/2 clean
360/390/768 · axe 2/2 zero violations · LH both **CLS 0**, a11y/BP/SEO 100.
**NEXT:** founder review on preview; the QB-remainder (desktop/enterprise/consulting/
proadvisor-team/which-plan) on the approved fidelity patterns; the footer target-size
(WCAG 2.2) chrome fix when the footer is finalized; research-log N=0 pending founder seed.

Updated: 2026-06-14 · ROUND 21 BOFU DEBT CLEARED — the 9 mis-tiered t-bofu pages
re-patterned to BOFU signatures (proof-strip + full intake-form), founder-ordered.
Each of fractional-cfo · catch-up/cleanup/monthly bookkeeping · sales-tax · qb
cleanup/migration/payroll/setup got: (1) a `proof-strip` as the first body section
(firm-level facts — 4&times; Certified ProAdvisor · fixed-fee · 1-business-day · the 2
verified Clutch reviews [only review proof] · one honest per-page specialty line), and
(2) the shared `intake-form.njk` partial in a conversion section before the FAQ, with
per-page params (intent = each page's canonical intent; source_type bofu-conversion;
submit "Send the Discovery Brief"). **Honesty note:** did NOT copy payroll-management's
"checked by default" intake note — the JS only auto-checks a service when the page is
loaded with `?intent=` in the URL (applyIntent reads the query string, not the hidden
default), so a direct visitor sees nothing pre-checked; used truthful non-asserting notes
instead. **(payroll-management's own note should be reconciled — flagged to founder.)**
Existing buyer-card/vs-table/pull-quote left in place (open question whether conversion
pages should route/compare at all, or are really t-mofu — deferred to founder; not
blocking). Equity preserved (structural-add only, zero data-file edits; new H2s are
additive). **Gate now: 30 pass per-tier on merit · 2 DEBT** (only /about/methodology/ +
/trust/). Re-verify: battery GREEN · overflow 9/9 clean 360/390/768 · axe 9/9 zero
violations · LH catch-up+setup **CLS 0**, BP/SEO 100. New probe scripts: overflow_bofu.ps1
· axe_bofu.ps1.
**CHROME TODO (NEW, site-wide — flagged, not fixed):** Lighthouse `target-size` (WCAG 2.2)
fails on EVERY full-footer page — the footer `mailto:info@techbrot.com` + `tel:` links are
spaced/sized under 24px on mobile (a11y 96-97). Pre-existing chrome, not a regression;
fix = footer contact-link tap-target padding when the footer is finalized (footer is
already a tracked chrome TODO). axe missed it (it ran WCAG 2.0/2.1, not 2.2).
**NEXT:** founder reviewing patterns on preview; then /about/methodology/ + /trust/ (last
2 debt), the footer target-size fix, and the QB-remainder.

Updated: 2026-06-14 · ROUND 21 GATE TIGHTENED — design-fidelity #12 is now a REAL
**PER-TIER** assertion (founder-ordered). Was a flat "≥1 rich component anywhere"
check; now each tier layout emits `data-tier` on `<main>` (`pageTier` front-matter on
t-hub/location/mofu/guide/bofu → base.njk), and check #12 hard-fails any content page
that carries NONE of the rich components ITS OWN tier permits per the handoff
PLACEMENT-MAP (✓/opt allowed; "—" components do NOT satisfy a tier). `TIER_ALLOWED` map
transcribed directly from PLACEMENT-MAP.md. **The teeth bit immediately:** it caught **9
t-bofu service pages** (fractional-cfo · catch-up/cleanup/monthly bookkeeping · sales-tax ·
qb cleanup/migration/payroll/setup) elevated round-16→18 with hub/mofu components
(buyer-card/vs-table/pull-quote — all "—" for BOFU) but carrying NONE of BOFU's signatures
(proof-strip/full intake-form/flow). Same finding-class the design audit named: GREEN ≠
implements-the-tier. Recorded as **mis-tiered debt** in design-fidelity-exceptions.json
(fix = the payroll-management pattern: proof-strip under hero + full intake-form; or
reconcile whether they're really t-mofu). **Gate now: 21 pass per-tier on merit · 11 DEBT**
(2 generic-primitive-only [/about/methodology/, /trust/] + the 9 mis-tiered bofu). Battery
GREEN. css-drift/manifest unaffected (data-tier/pageTier add no classes). **A page isn't
"done" until it passes design-fidelity PER-TIER.**
**NEXT:** founder reviewing the 6 error patterns (faq + hub) on preview; then re-pattern the
11 debt pages (9 bofu = proof-strip + intake-form; 2 = add any rich component) + resume the
QB-remainder on the approved fidelity patterns.

Updated: 2026-06-14 · ROUND 21 REPLICATION **COMPLETE** — problem-pattern replicated
to the 6 error children + the error-codes hub (founder-approved off the h202 proving
page). Each page: `error-badge` in the hero eyebrow · `byline-block` (E-E-A-T, renders
"Certified QuickBooks ProAdvisor team" — never a personal name) · the self-fix
`process-diagram` → compact `fix-steps` · misused `review-card` grids (causes/signals/
variants/progression/why-worse/engagement/families) → `stack-8` · `call-breakout` box
before the operator section · `meta-reviewed` at the FAQ foot. The HUB (an index, not a
single-error page) takes byline-block + call-breakout + meta-reviewed + families/signals
→ stack-8; its genuine engagement-process `process-diagram` (Diagnostic→scope→fix→verify)
stays. **Structural re-pattern ONLY — zero data-file edits; every baseline heading + FAQ +
schema preserved** (content-equity GREEN on all 7; only the standing "The monthly brief."
removal + the c-series whitespace artifact, both pre-justified). **DESIGN-FIDELITY GATE: all
7 now pass on merit — debt 9→2** (only /about/methodology/ + /trust/ remain). Re-verify:
battery GREEN · overflow 7/7 clean 360/390/768 · axe 7/7 zero violations (25 passes) · LH
hub+c-series **CLS 0.0**, a11y/BP/SEO 100 (perf = host-throttle noise, benchmarkIndex
180–195). New probe scripts: `overflow_errpages.ps1` · `axe_errpages.ps1`.
**NEXT:** re-pattern /trust/ + /about/methodology/ (add a rich component → clear the last
debt); resume the QB-remainder (desktop/enterprise/consulting/proadvisor-team/which-plan)
on the approved fidelity patterns; research-log still N=0 pending founder seed.

Updated: 2026-06-14 · ROUND 21 FOUNDATION-CORRECTION **COMPLETE** — 5 proving pages
+ rulings + design-fidelity GATE. Pushed for final review before any replication.
**5 PROVING PAGES rebuilt to true handoff fidelity (founder-approved h202 + 4 more):**
h202 error-silo problem-pattern (`7ee1315`) · /online/ t-mofu vs-table+buyer-card
(`9927de5`) · /quickbooks/ t-hub buyer-card+flow+pull-quote (`690426b`) · payroll
t-bofu proof-strip+full intake-form (`75b242d`) · /quickbooks/faq/ t-guide ARTICLE
guide-grid+toc+byline+pull-quote (`<faq commit>`). Each: battery GREEN · axe 0 ·
overflow 360/375/753 · LH a11y/BP/SEO 100 · **CLS ~0**.
- **RULING 1 (`abb31bc`):** shared `_includes/partials/intake-form.njk` — the locked
  24-key contract in ONE place; contact/file-review/payroll `{% include %}` it with
  per-page params; contract verified preserved; payroll upgraded to the FULL form.
- **RULING 2 (`abb31bc`):** /online/ → file-review-primary (Sheet 9; applies to all
  future t-mofu products).
- **RULING 3:** research-log stays N=0 honest until the founder seeds (no fabrication).
- **LOGO CLS FIX v2 (`47205e5`):** the checkpoint-2 fix pinned only height; `width:auto`
  didn't reserve the box pre-decode, so the heaviest page (payroll full form) shifted
  AFTER first paint (CLS 0.155, real — NOT throttle, confirmed at benchmarkIndex 231).
  `.site-header__logo img{width:116px;height:30px}` fully reserves it → 0.0. Hardens
  every page. (Corrects an earlier throttle misattribution.)
- **PART 3 — DESIGN-FIDELITY GATE (`<part3 commit>`, STANDING):** run_battery.py #12.
  Every content page must use ≥1 handoff RICH component (buyer-card/vs-table/flow/
  pull-quote/toc/byline-block/meta-reviewed/intake-form/proof-strip/error-badge/
  fix-steps/call-breakout/stat__delta/diagram-figure/hero__motif) — generic-primitive-
  only pages hard-fail. GREEN ≠ matches-design; this is the gate the battery was missing.
  Result: **23 pages pass on merit · 9 known re-pattern DEBT** (the 6 error children +
  hub → replicate the h202 problem-pattern after sign-off; /trust/ + /about/methodology/
  → add a rich component). Debt tracked in `_build/battery/design-fidelity-exceptions.json`;
  remove each page from the list when re-patterned. **A page isn't "done" until it
  passes design-fidelity.** CSS gate 55,933B / 58KB. Bylines all render "Certified
  QuickBooks ProAdvisor team" (founder-name-zero holds). New: `extract_faq.py` +
  `_build/data/faq-content.json` (the 35 Q/A source). Bench: 8090 axe server killed
  during CLS diagnosis — restart before next axe run.
**NEXT (after founder + strategy-Claude sign-off):** replicate the problem-pattern to the
6 error children + hub; re-pattern /trust/ + /about/methodology/; resume the QB-remainder
(desktop/enterprise/consulting/proadvisor-team/which-plan) on the approved fidelity patterns.

Updated: 2026-06-14 · ROUND 21 CHECKPOINT 3 — FOUNDATION-CORRECTION (design fidelity).
**DESIGN-FIDELITY AUDIT (founder-ordered at the /online/ stop) → systemic gap CONFIRMED.**
Report: `_build/reports/round-21-design-audit.md`. Home implements the handoff; the
round-16→21 elevation pages PASS the battery but carry old-HTML sequencing on ~5
primitives (review-card/stack-8/grid/process-diagram/trust-row), UNDER-USING the
handoff's tier components. **GREEN ≠ matches-the-design.** Founder DECISION: pause
mass-production, re-pattern from the handoff, prove ONE true-fidelity page per tier,
sign off, THEN replicate. Build nothing beyond the 5 proving pages this round.
- **PART 1 DONE (`79f97b9`):** inventory found nearly ALL handoff components already
  in the bundle (buyer-card+vs-table in 03-conversion · flow+pull-quote in 05-tiers ·
  error-badge+fix-steps+call-breakout+proof-strip+stat__delta in 08-additions ·
  intake-form). The gap was under-USE, not absence. Only the t-guide ARTICLE furniture
  was missing (dropped round-10) → ported verbatim to 09-extensions: **toc · guide-grid
  + .article · byline-block · meta-reviewed.** Bytes minified **53,819→55,703 / 58KB**
  (+1,884, headroom 3,689 — no breach). css-drift/manifest GREEN.
- **PROBLEM-PATTERN MARKUP (no handoff render exists; built from 08-additions CSS):**
  `error-badge` = inline mono pill (the code) · `fix-steps` = `<ol class="fix-steps">`
  `<li><span class="n">1</span><div>…</div></li>` (mono number circles, compact —
  distinct from process-diagram) · `call-breakout` = `<div class="call-breakout">`
  `<div><p class="call-breakout__title">…</p><p class="call-breakout__sub">…</p></div>`
  `<a class="btn…">…</a></div>` (the "stuck? book a diagnostic" box before the CTA).
- **PART 2 — 5 PROVING PAGES (founder-confirmed), full handoff fidelity + full re-verify:**
  1. t-hub `/quickbooks/` — buyer-card routing · real vs-table · flow diagram · pull-quote · stat__delta.
  2. t-mofu product `/quickbooks/online/` — vs-table (QBO vs alts + plan compare) · buyer-card · byline-block+meta-reviewed · stop generic review-card.
  3. t-bofu `/accounting/payroll-management/` — **ADD the 24-key intake-form (founder ruling)** · proof-strip · one verified review-card · buyer-card.
  4. error-silo PROBLEM pattern `/quickbooks/help/error-codes/h202/` — error-badge · fix-steps · call-breakout · byline-block (gates the ~40-page error silo).
  5. t-guide ARTICLE `/quickbooks/help/error-codes/` hub — toc/guide-grid · article.prose · byline-block · pull-quote · meta-reviewed.
  EQUITY MUST STAY GREEN on every rebuild (all baseline headings/FAQ preserved). review-card → verified quotes only.
- **PART 3 — add a design-fidelity battery check** (per-tier handoff-component assertion
  per PLACEMENT-MAP) as a STANDING gate alongside equity/axe/overflow. A page isn't
  "done" until design-fidelity passes.
- STOP after the 5 + the check → push → founder/strategy-Claude review each vs the
  handoff → replicate to QB-remainder + re-pattern prior pages ONLY after sign-off.

Updated: 2026-06-14 · ROUND 21 CHECKPOINT 2 — ERROR-CODES CLUSTER COMPLETE.
**ERROR-CODES HUB + 6 CHILDREN DONE+VERIFIED** (t-guide, approved h202 pattern).
Pages **29 → 36** (+7). All battery GREEN · axe 0 · overflow 360/375/753 ·
LH a11y/BP/SEO 100 · CLS ≤0.002. Per-page commits: hub `862c9b3` · 15240 `3c30f39`
· 3371 `c4bb264` · ps038 `baee48c` · c-series `2bc8af9` · 6000-series `7efcad9` ·
unrecoverable `dc96eb4`.
- **Hub** `/quickbooks/help/error-codes/` (63 headings, 7 FAQ, CollectionPage+
  BreadcrumbList+ItemList+FAQPage). Codes without a dedicated page (H505/H101/H303/
  6190/6000-77/6000-301/PS036/PS077/80070057/15215) render as heading text only
  (equity preserved, zero preview 404s); 6000 sub-variants link the error-6000-series
  page. **Resolves h202's hub link.**
- **6 children** each: TechArticle+HowTo+HowToStep+HowToTool+Service+FAQPage+WebPage+
  BreadcrumbList · honest-triage (disclosure above fold, first FAQ "official?"→No
  ADDITIVE, provider #organization) · SHORT stat-row values (768 lesson) · conversion
  seam · the per-code intents (qb-error-{15240,3371,ps038,c-series,6000,unrecoverable}).
  15240 41h · 3371 35h · ps038 33h/8faq · c-series 39h · 6000 41h/8faq · unrecoverable 40h/8faq.
- **⚠ EQUITY ARTIFACT (c-series):** baseline captured one H3 with a tag-strip
  whitespace artifact ("operation , not"); heading present VERBATIM, logged
  type:"artifact" (NOT a removal) in equity-exceptions.json. No founder sign-off
  needed — content is fully there.
**ROOT-CAUSE CSS FIX (global, helps every page):** the hub's first real probe found
**CLS 0.107** (h202 control = 0.001 same host → real, not host-noise). Cause: the
global `img,svg{height:auto}` reset in 02-base let the **header logo SVG** recompute
its height on decode (intrinsic aspect ≠ 116:30); on a heavy page the decode lands
AFTER first paint → header/hero shift. Fix: `.site-header__logo img{height:30px;
width:auto}` in 04-chrome (pins the box; **computed-style-neutral** — logo already
rendered 30px, so zero element drift; +46B bundle). Re-probe **CLS 0.107→0.0**.
CSS gate **53,819B / 58KB**. NEW script `refresh_prod.ps1` (stop :8125 → npm run
build:prod → restart). PROBE NOTE: under extreme host throttle (benchmarkIndex
~90–120, e.g. 3 back-to-back LH runs) font-swap CLS inflates on long pages; re-run
on a settled host (benchmarkIndex ≥170) confirms ~0 — verified on hub + unrecoverable.
**NEXT:** `/quickbooks/online/` (t-mofu product PROVING PAGE) → **STOP** for founder
approval of the product pattern before desktop/enterprise replicate. Then report + push.

Updated: 2026-06-14 · ROUND 20 — QB-silo completion batch (CHECKPOINT 1).
Design reconcile CONFIRMED: handoff = the SAME cobalt #2B4FD6 system the 27 pages
run (no migration). **PART A DONE+VERIFIED:** `/resources/research/` t-hub —
**US QuickBooks Cleanup Benchmarks** (DefinedTerm + Dataset schema); honest **N=0
collecting**, locked 8-field schema at `_build/data/cleanup-benchmarks.json`, NO
fabricated numbers; battery GREEN · axe 0 · overflow 345/375/753. **PART B
proving page DONE+VERIFIED:** `/quickbooks/help/error-codes/h202/` (t-guide, clean
elevation, equity GREEN 36h) — establishes the error-child TechArticle+HowTo
pattern (Sheet-7 honest-triage). **PART C fix 1 DONE:** QB hub body now links
cleanup/help/payroll in-content → payroll orphan RESOLVED (inbound 1→2); zero
in-content orphans. CSS gate 53,773B. Commits `23aebf8` (A) · `485d966` (h202) ·
checkpoint (C+docs). **Pages: 27→29.** Full report: **round-20.md**.
NEXT (gated on founder approval of the 2 proving patterns — research scaffold +
h202 error-page): build error-codes hub + 6 remaining children as a cluster; one
t-mofu product proving page (online) then desktop/enterprise; then consulting
(t-bofu) · proadvisor-team · which-plan · faq; finish PART C (advisory/network +1
inbound) + batch-end overflow/LH/interlink sweep. QB-remainder is ~70k words / 21
substantial pages (3,000–5,350w each) — genuinely multi-session.
**⚠ FOUNDER OWNERS NEEDED:** (1) who logs one anonymized row per cleanup close
(research dataset cannot self-populate — calendar-bound); (2) research-hub CTA
nuance ("Read the methodology" used where Sheet-9 names "Explore Services").
**⚠ PROBE INFRA:** chrome-headless stalled mid-session (documented leak) — axe ran
clean before the stall; overflow/LH calibrated sweep deferred to batch end.

## STANDING RULE — PROBE CHROME ISOLATION (founder, round 21 — HARD RULE)
The founder's personal Chrome is OFF-LIMITS, always. NEVER kill Chrome by image
name (`Get-Process chrome | Stop-Process`, `Stop-Process -Name chrome`, `taskkill
/IM chrome.exe`) — that closes the founder's browser/tabs. Every probe launches
headless Chrome with a dedicated isolated profile **`--user-data-dir=C:\tb-probe-
profile`** (the marker); all 28 chrome-launching scripts in `_build/scripts/`
carry it (patched round 21 via patch_probe_isolation.py). `kill_probe.ps1` now
matches ONLY processes whose command line contains `tb-probe-profile` and stops
just those PIDs — it reports `personal-chrome-untouched=N`. Run kill_probe BETWEEN
probe launches (each launch holds the isolated profile's singleton lock until it
exits; consecutive launches without a kill stall — that was the round-20
"chrome-leak", root-caused round 21: probes were sharing the founder's DEFAULT
profile, which both stalled dumps via the singleton lock AND let the old
image-name kill close the founder's tabs). Bug fixed; both symptoms gone.
INLINE chrome one-offs dump unreliably — use the *script* form (overflow_probe.ps1
etc.); they're reliable with kill_probe between.
DESIGN NOTE (round 21): `.stat-row` becomes `display:flex` with large gaps at
≥768px — `stat__value` is for SHORT numeric metrics only (e.g. "4", "L2", "48hr").
Long word-values ("Enterprise") overflow the container at 768. (Caught + fixed on
h202.)

## STANDING RULE — RESEARCH-LOG CAPTURE (founder, round 21 — owner SET)
**Owner: the FOUNDER logs one anonymized row at each cleanup-engagement close**
(moment of capture = engagement close). Rows go into `_build/data/cleanup-
benchmarks.json` under the LOCKED 8-field schema (engagement_id · state · industry
· months_behind_at_intake · primary_error_types · txn_volume_band · cleanup_hours ·
cost_band). The founder hands raw facts; Claude writes clean rows. **Anonymization/
integrity (HARD — this becomes publicly citable):** engagement_id is an opaque token
(ENG-0001…), NEVER a client name/initials/re-identifying detail; no city granularity
finer than state; bands (txn_volume_band, cost_band) use fixed ranges, never exact
figures; every value REAL from an actual closed engagement (no estimates, no
rounding-to-look-good, no fabricated fills — a blank field stays blank). The live
`/resources/research/` page reads N and publishes NO breakdown statistic until N≥20,
so seeding (<20) updates only the honest live count. **⚠ AWAITING:** the founder's
raw engagement facts to seed the first rows (requested in round-21 report — NOT
invented). Until provided, dataset stays N=0, honest. See [[research scaffold]] (PART A).

## STANDING RULE — HUB-REFRESH-ON-SPOKE-ADD (round 20)
When a spoke ships, update the parent hub BODY **and** ≥1 topical sibling BODY to
link it **in-content** (not just nav). Round-19 found later-built spokes (payroll,
cleanup, help) carried in-content back-link debt because earlier hub/sibling
bodies weren't updated when they shipped. Every new page this batch links into the
hub + siblings on ship; the batch-end interlink audit must show 0 in-content
orphans.

Updated: 2026-06-14 · ROUND 18 — CLOSE: **CF DEPLOY RESOLVED via project
separation.** New Pages project **`techbrot-preview`** (branch preview-11ty,
output `_site`, no ENVIRONMENT=production) is **live + rendering cobalt + noindex
at https://techbrot-preview.pages.dev** — verified: `/`→200, site.min.css→200
text/css, meta noindex + robots.txt Disallow:/. OLD project `techbrot`
(→techbrot.com, old Bootstrap) UNTOUCHED — do NOT modify. The CSS-404/output-dir
saga is CLOSED (7cc89e2 first-class CSS template stays correct). Review model now:
push = deploy = review on the CF URL (not localhost). **27 pages elevated** (R16
+ R17 batches done). Full handoff: **_build/reports/round-18-close.md**.
NEXT SESSION: start the research/original-data logging scaffold (calendar-bound,
NOT STARTED), then California state children off the NY master template.

Updated: 2026-06-14 · ROUND 17 — elevation campaign + Cloudflare CSS fix.
**CF CSS-404 FIXED** (commit 7cc89e2 — see _build/reports/cloudflare-fix.md):
site.min.css was written by a side-effect `eleventy.before` fs.writeFileSync
(outside Eleventy's pipeline → could drop from the CF deploy → unstyled). Moved
to a FIRST-CLASS Eleventy template (src/assets/css/site.min.css.11ty.js) so the
bundle is a tracked output, always in _site, always deployed. Verified via
fresh-clone `npm ci --omit=dev` + `npm run build` + `npx serve _site` →
/assets/css/site.min.css 200 text/css. **UNPUSHED: 7cc89e2 (CSS fix) + baaea7d
(payroll) — founder pushes.** (Problem-1 deps fix 6d30375 already pushed in
ced7855 — that's why pages load; the CSS issue was separate.)
ROUND 17 batch: **COMPLETE — all 7 clean elevations DONE + verified + committed**
(payroll `baaea7d`; sales-tax `0b765da`; advisory hub `026e065`; fractional-cfo
`10458cf`; qb-cleanup `32eff23`; qb-help hub `833bef5`; qb-payroll `0bb09a0`).
**1099-preparation DEFERRED** (build-new — founder ruling). Full battery GREEN
across 33 URLs (2369 hrefs resolve, css gate 53,773B). Every page: equity GREEN ·
axe 0 · overflow PASS · LH 100/100/100 · CLS 0 (qb-payroll 0.006 ≈ 0). CF CSS fix
(7cc89e2) + all round-17 commits UNPUSHED — founder pushes preview-11ty. Dev
server RUNNING http://192.168.1.8:8080/. Report: **round-17.md**.
Elevated total: 25 of 139 + home + file-review. (Counts OLD-baseline pages
elevated to the cobalt standard; the Sheet-5 200-page gate also counts the
already-DONE industry/location/VS/legal sets — see Sheet 5.)

## DEFERRED + RESTORE FLAGS
- **/accounting/1099-preparation/ — DEFERRED (build-new).** No baseline, no root
  HTML; founder ruling round 17 → future dedicated build-new round (with
  /about/team/ + the switch silo).
- **RESTORE when 1099 is built:** the payroll-management cross-sell card "1099
  preparation" (baseline H3) was retargeted to "QuickBooks cleanup" to avoid a
  dead link; logged in equity-exceptions.json (`/accounting/payroll-management/`).
  Repoint it back to /accounting/1099-preparation/ once that page exists.

## SIGN-OFF QUEUE (equity-exceptions.json — 25 flagged removals, all reported)
Standing/founder-ruled (no per-page sign-off): "The monthly brief." newsletter
removals + footer-chrome relocations (Accounting/QuickBooks/Company/Network under
chrome:minimal). **Awaiting explicit founder sign-off:**
- **QAPage → FAQPage** (FAQPage is the correct multi-Q type): monthly-bookkeeping,
  cleanup-bookkeeping, catch-up-bookkeeping (R16) · payroll-management, sales-tax-
  compliance, advisory, fractional-cfo (R17). 7 pages.
- **Schema-only condensed FAQ variants retired** (substance carried verbatim by
  the rendered Q): monthly-bookkeeping ×2 · payroll ×1 · sales-tax ×2 · advisory
  ×2 · fractional-cfo ×4.
- **R16 setup 4-vs-5 phase ruling** — baseline documents 4 setup phases; founder
  asked for 5. Preserved 4 as the TechBrot Setup Protocol; awaiting ruling on
  adding a 5th.
- **R16 carryover:** /about/methodology/ "The Team" card retarget; /partners/ FAQ
  schema-defect fixes (round 8). Still awaiting sign-off.
- **R17:** the 1099 cross-sell removal (restore flag above).

Updated: 2026-06-14 · ROUND 16 — accounting + quickbooks silo elevation batch
**COMPLETE — all 7 pages DONE + FULLY VERIFIED.** Accounting silo (hub + 3
bookkeeping BOFU) + QuickBooks silo (hub + setup + migration). Sitewide phone-CTA
bug fixed + CTA standing rule logged + a build-prod CSS regression caught/fixed.
Awaiting founder audit + 2 rulings (setup 4-vs-5 phases; QAPage→FAQPage sign-off).
Dev server RUNNING at http://192.168.1.8:8080/. Report: **round-16.md**.
Elevated total: 18 of 139 + home + file-review.

## ROUND 16 — accounting + quickbooks silos (IN PROGRESS — multi-turn batch)
Pre-flight: all 7 pages confirmed to have BOTH baseline records AND root HTML
(no gaps). 7 full money/hub elevations at the content bar = multi-turn; built
solo-first as instructed. Full report: round-16.md.
- **/accounting/ (t-hub) — DONE + VERIFIED.** Sources read: baseline (30h/5faq)
  + accounting/index.html. Citable: the three fixed-fee ENGAGEMENT SHAPES
  (recurring monthly / fixed-fee project / senior retainer). Within-page
  variety: tldr · quick-5 · grid-3 service cards · prose distinction · grid-2
  mode cards · numbered process-diagram differentiators · stacked do/don't ·
  FAQ. Verify: content-equity 30/30 + 26 schema · battery GREEN (7 FAQ, +2
  additive to clear faq-min-6) · axe ZERO · overflow 345/375/753 · Lighthouse
  100/100/100 · CLS 0.001 (≈0) · shots r16/accounting-desktop+360.
- **BUG FIX (sitewide) — DONE + VERIFIED.** Unrendered `{{ site.phone.e164 }}`
  shipped literal on 5 pages (front-matter JSON is NOT Nunjucks-rendered) =
  broken phone links. Fixed at layout level via `action.tel` flag (all 5
  tiers). Raw `{{` in output 5→0. CTA STANDING RULE logged + applied; contact
  rebuild rules logged. `accounting` intent key added. Commit f725474.
- **/accounting/bookkeeping/monthly-bookkeeping/ (t-bofu) — DONE + VERIFIED.**
  FIRST t-bofu service page of the batch = the bookkeeping-BOFU PROVING PAGE
  (rule 1: pattern must be founder-approved before cleanup/catch-up reuse it).
  Sources read: baseline (35h/12faq) + old HTML. Citable: 3 pricing tiers
  (Essentials $400–700 / Standard $700–1,400 / Complex $1,400–2,500+) + named
  deliverables + coined "monthly close cadence" (Days 1–5/6–10/11–14/Day 15,
  package by the 15th). Within-page variety (12 patterns): hero · inBrief ·
  prose-definition · process-diagram cadence · grid-2 checks-lists · quick-5 ·
  buyer-card signals · review-card grid-3 tiers · trust-row operator · stacked
  cross-sell · FAQ · band. Verify: content-equity 35h/12faq/29 schema (justified:
  newsletter + 3 footer-chrome + 2 schema-only FAQ variants + QAPage→FAQPage) ·
  battery GREEN · axe ZERO · overflow 360/375/753 · Lighthouse 100/100/100 ·
  CLS 0.0 · shots r16/monthly-pricing-1280 + monthly-cadence-360. CTA: bookkeeping
  BOFU → NO phone in hero (Book the discovery call + Get the free file review).
- **cleanup-bookkeeping (t-bofu) — DONE + VERIFIED.** Coined COMPOUNDING
  RECONCILIATION DRIFT; before/after vs-table; $1,500–$15,000+. 42h/12faq GREEN ·
  axe 0 · overflow 360/375/753 · LH 100/100/100 · CLS 0.0. Commit ffce279.
- **catch-up-bookkeeping (t-bofu) — DONE + VERIFIED.** Coined HISTORICAL
  ACCOUNTING DEBT; catch-up-vs-cleanup vs-table; per-month pricing, total
  $2,000–$20,000+. 40h/12faq GREEN · axe 0 · overflow PASS · LH 100/100/100 · CLS
  0.0. Commit 1955266. (Completes accounting silo.)
- **/quickbooks/ (t-hub) — DONE + VERIFIED.** Citable: full credential stack (QBO
  L2/Desktop/Enterprise/Payroll + Intuit Certified Bookkeeping Professional, 5).
  36h/6faq GREEN · axe 0 · overflow PASS · LH 100/100/100 · CLS 0.0.
- **/quickbooks/setup/ (t-bofu) — DONE + VERIFIED.** Named TechBrot Setup Protocol
  (named output per phase); $750–$5,000+. 43h/8faq GREEN · axe 0 · overflow PASS ·
  LH 100/100/100 · CLS 0.0. QB-BOFU phone tertiary present. ⚠ FLAG: baseline = 4
  phases, founder asked 5 — preserved 4 + named protocol; awaiting founder ruling.
- **/quickbooks/migration/ (t-bofu) — DONE + VERIFIED.** Named Migration Integrity
  Protocol (7-point verification); Intuit-tool vs-table; Desktop sunset timeline;
  $2,500–$10,000+. 42h/7faq GREEN · axe 0 · overflow PASS · LH 100/100/100 · CLS
  0.001. QB-BOFU phone tertiary present.
- **Sign-off pending:** QAPage→FAQPage (monthly/cleanup/catch-up) + 2 schema-only
  FAQ-variant retirements (monthly) + setup 4-vs-5 phase ruling. All logged in
  equity-exceptions.json, reported in round-16.md.
- **Build note:** eleventy --serve does NOT auto-rebuild NEW templates added
  after start — `npm run build` (→_site) for each new page. Lighthouse/overflow
  probe the PROD artifact on 8125 (`_site-prod`); a new page must be in
  `_site-prod` or they hit a 404 (false pass). **⚠ Refresh `_site-prod` with
  `npm run build:prod` ONLY — do NOT run `build-prod.ps1`: its first step
  `extract_css.py` RE-EXTRACTS CSS from the design handoff and REVERTS every
  hand-edited fix in src/assets/css/*.css (round 12–15 gapped-mark content-box,
  ≤480 phone rules, etc.). It clobbered them once this round (caught + restored
  from f725474; the manual CSS fixes live only in the extracted files, not the
  design source).** To rebuild _site-prod: stop the 8125 server (it locks the
  dir → EBUSY on clean), `npm run build:prod`, restart `npx serve -l 8125
  _site-prod`. Dev server (8080) NOT killed.

## CLOUDFLARE DEPLOY CONTRACT (round 16 — fixed the unstyled/no-home preview)
Two preview failures diagnosed: (1) pages rendered unstyled — `site.min.css`
missing; (2) home `/` didn't load. **Root cause:** all build tools
(`@11ty/eleventy`, `@11ty/eleventy-img`, `esbuild`, `cross-env`) were in
`devDependencies`. `site.min.css` is generated at build time by the eleventy
esbuild hook and `index.html` (home) by `src/index.njk` — neither is committed
(`_site/` is gitignored). When Cloudflare's prod environment omits devDependencies
(standard when `NODE_ENV=production`), `eleventy` isn't installed, `npm run build`
fails, no `_site` is produced, and Cloudflare falls back to serving the **repo
root** — which has no home (founder deleted it) and no `site.min.css` (the old
`assets/` only has the legacy Bootstrap CSS). Exactly the two symptoms.
**Fix (commit pending):** moved the four build tools to `dependencies`
(`axe-core` stays devDependency — test-only); regenerated `package-lock.json`
(build tools now `dev=false`). Proven: `npm ls --omit=dev` lists all four; a clean
`npm run build` produces a complete self-contained `_site` (home 72KB +
`site.min.css` 53,773B + all 26 pages + js/fonts); plain `npx serve _site`
(true CF proxy, NOT the dev server) serves `/`→200, `/assets/css/site.min.css`
→200 text/css, every page →200, styled.
**Cloudflare Pages settings (confirm in dashboard):**
- Build command: `npm run build`  ·  Build output directory: `_site`  ·  Root: `/`
- Production env var: `ENVIRONMENT=production` (Production deployment ONLY — flips
  noindex→index + GA4 on). Preview leaves it unset (noindex, fail-closed).
- Do NOT use `build-prod.ps1` anywhere (its `extract_css.py` step clobbers CSS —
  see build-prod note). `npm run build` alone produces the complete site.
- Nothing depends on the eleventy dev server or any separate manual step.

## STANDING RULE — CTA STRATEGY (founder, 2026-06-14, round 16; governs every page)
Per-tier hero/band CTA mapping. Applies to all round-16 pages + every future
page. **Never a phone CTA as a hero CTA on a hub. Never "Speak to a ProAdvisor"
as primary on any page. Never "Explore Services" as primary except a hub hero.**
- **HUB (t-hub):** hero PRIMARY "Explore Services" (deeper into silo) · hero
  SECONDARY "Book the discovery call" (→/contact/?intent=…) · NO phone in hero.
- **BOFU service:** hero PRIMARY "Book the discovery call" · SECONDARY "Get the
  free file review" · TERTIARY (QuickBooks-specific BOFU ONLY — setup, migration,
  help, error-code) "Speak to a ProAdvisor" (tel). NOT on bookkeeping BOFU
  (monthly/cleanup/catch-up).
- **MOFU/GUIDE:** hero PRIMARY "Get the free file review" · SECONDARY "Book the
  discovery call".
- **FINAL CTA BAND (every page incl. hubs):** PRIMARY always "Book the discovery
  call" (visitor is warm). A phone secondary in the band is permitted.
- **Phone-link mechanism:** hero/band actions render phone via `action.tel:true`
  (layouts substitute `tel:{{ site.phone.e164 }}` — single source). NEVER put a
  `{{ }}` var in front-matter JSON href (front matter is NOT Nunjucks-rendered —
  it ships the literal string = broken link). Fixed sitewide round 16.

## CONTACT-PAGE REBUILD RULES — LOGGED (do when /contact/ is rebuilt; NOT yet built)
1. **Intent system:** /contact/ heading, subheading, and form fields respond to
   the `?intent=` URL param — each intent maps to a specific heading, paragraph,
   and pre-selected form options (personalized landing matching the origin page).
   Intent registry lives in `src/_data/intents.json` (battery enforces every CTA
   intent key exists there). `accounting` key added round 16.
2. **CTA pattern above form:** contact hero = primary button ("Book the discovery
   call" scrolls to form anchor) + the 404-style phone block (circular cobalt
   icon + large number + "a ProAdvisor answers"). Form below. Match 404 exactly.
3. **NO sticky elements on /contact/:** suppress all sticky bars / sticky phone /
   sticky nav CTAs — visitor is converting, sticky = friction.

## ROUND 15 — nav fixes + full responsiveness audit DONE + VERIFIED
(phone full-number all widths · flush-right · drawer align · nav/drawer mutual
exclusion · quick-5 +5px · overflow ALL 14 PAGES PASS). Report: round-15.md.

## ROUND 15 — nav/chrome fixes + responsiveness audit (done + verified)
Full report: round-15.md. Scope: nav/chrome only; design tokens + 1 JS fix.
- **FIX1 phone:** R13 number-hide REVERTED — icon + FULL number at all widths;
  at ≤480 tightens (`fs-13` + `ls-tight`) + header gaps compress (space-3/2).
  Orphan `site-header__phone-num` class removed. Verified true 360.
- **FIX2 flush-right:** `.site-header .container` `justify-content:space-between`
  → logo left / actions right (desktop nav margin-right:auto intact). 360+1280.
- **FIX3 drawer head:** `width:100%` added → logo left / X right. Captured 360.
- **FIX4 mutual exclusion (tb-nav.js):** desktop `closeAllMenus` already; ADDED
  drawer `closeOtherPanels`. Functional test: 2 clicks → 1 open (both desktop
  dropdowns + drawer panels). axe ZERO.
- **FIX5 quick-5:** `.ai-summary__question` fs-15→fs-20 (+5px). Captured 360+1280,
  no overflow in narrow column.
- **FIX6 overflow audit:** ALL 14 pages PASS at 360/390/768 (sw ≤360/375/753);
  the prior 4px drawer phantom is GONE (resolved by FIX1/3).
- **Verify:** battery GREEN · axe ZERO (home/about/pricing) · gate 53,773 B ·
  zero-drift element counts STABLE (home 782/terms 378/partners 676), hashes
  shift only from the intended global header + quick-5 changes.
- New scripts: shot_drawer.ps1, nav_test.ps1.

## ROUND 14 — footer brand fix + credential display + nav-CTA verify (PASS);
local git repo on branch `preview-11ty` (commit 1981ef5), FAIL-CLOSED; PUSH
BLOCKED on founder GitHub access. Report: **round-14.md**.

## ROUND 14 — footer · credentials · nav-CTA · preview branch (awaiting push)
Full report: round-14.md. Parts A/B/C done+verified; D = local branch ready,
push is founder's.
- **(A) FOOTER brand language:** site.json `tagline` → "An independent firm of
  Certified QuickBooks ProAdvisors." (only consumer = footer note). Zero-drift:
  home/trust fingerprints IDENTICAL (text-only); bundle byte-identical
  (53,611 B). Battery + axe GREEN.
- **(B) CREDENTIAL display:** "Bookkeeping" added to visible cert lists on
  /about/ + /pricing/ (team aggregate: QBO L2 + Desktop + Payroll + Bookkeeping
  [founder] + Enterprise [David]). No individual named; "Certified QuickBooks
  ProAdvisor team" attribution stays. content-equity GREEN both; axe ZERO.
- **(C) NAV CTA at narrow widths:** PASS — header `.site-header__cta` is hidden
  ≤920px (covers ≤480). Verified true-360 iframe capture (header = logo +
  phone-icon + hamburger only). No change.
- **(D) PREVIEW BRANCH:** repo was NOT git-initialized → did local `git init`,
  branch **`preview-11ty`**, commit **1981ef5** (717 files; .gitignore excludes
  node_modules/_site/_site-prod/_build-verify/.claude). **Fail-closed VERIFIED**
  (preview build = noindex + robots Disallow + no GA4). **PUSH BLOCKED** — no
  remote/creds; founder runs `git remote add origin
  https://github.com/techbrot5/techbrot.git` + `git push -u origin
  preview-11ty`. Expected preview URL: `preview-11ty.techbrot.pages.dev`
  (post-push). **main/techbrot.com UNTOUCHED** (no remote configured).
  🛑 CRITICAL: Cloudflare `ENVIRONMENT=production` must be Production-only,
  NOT Preview, or the preview indexes (harming the old site). Build settings
  (CORRECTED): ONE command `npm run build` (NOT `build:prod` — that hardcodes
  ENVIRONMENT=production via cross-env and would index the preview), output
  `_site`, env var `ENVIRONMENT=production` on the Production env only →
  prod indexes + dev excluded, preview fail-closed automatically.

## ROUND 13 — mobile-nav fix + head migration DONE + VERIFIED; Cloudflare
deploy local-prep done, BLOCKED on founder access. Report: **round-13.md**.

## ROUND 13 — mobile-nav · head migration · deploy-prep (awaiting founder for C)
Round-12 rulings applied (lexicon "Become a Partner", "The Team" retarget,
team excluded, timeline flagged, soft-cap noted). Full report: round-13.md.
- **(A) MOBILE NAV — fixed + verified.** Root cause: header flex row (logo +
  full phone + hamburger) overran true phone widths, clipping the hamburger
  (masked by Chrome `--window-size` clamping — true-360 iframe reproduced it).
  Fix (global, tokens): phone → tappable icon ≤480px (number hidden, link
  keeps aria-label), `.site-header__actions{min-width:0}`,
  `body{scrollbar-gutter:stable}`. Verified true 360/390 (iframe), battery +
  axe green, element counts unchanged.
- **(B) HEAD MIGRATION — done.** Entity graph (schemaGlobal) expertise-first:
  all platform/network language removed from Org/Brand/WebSite/service
  descriptions; **David Westgate removed from `employee`** → Texas operating
  partner (not staff); **founder Person = E-E-A-T anchor only**, creds
  QBO L2/Desktop/Payroll/Bookkeeping (Enterprise dropped from founder, kept
  via David; Advisory NOT claimed), url→/about/. Fonts/preloads verified,
  theme-color #FBFAF7. **Per-page heads: all 13 pages + 404 pass** ≤60 title
  (·TechBrot suffix) / ≤155 desc / phone on high-intent only. Schema + FAQ +
  equity all GREEN post-migration. Tool: head_audit.py.
- **(C) CLOUDFLARE DEPLOY — local prep done, BLOCKED.** NEW /sitemap.xml (13
  URLs) + /robots.txt (FAIL-CLOSED: prod Allow+Sitemap, preview Disallow) +
  .gitignore. Prod env verified (index,follow + GA4 on; fail-closed both
  ways). **Repo is NOT git-initialized + no Cloudflare/GitHub/DNS/GSC access**
  → 8 founder-action blockers listed in round-13.md (git+GitHub, Cloudflare
  Pages project + ENVIRONMENT=production env var, DNS, preview X-Robots-Tag
  header, GA4 live check, PageSpeed, live form TEST-MIGRATION-2026, GSC
  sitemap submit). Build settings: cmd `npm run build:prod`, out `_site-prod`,
  env `ENVIRONMENT=production`.
- **OPEN (sign-off):** credential reconciliation (founder = QBO L2/Desktop/
  Payroll/Bookkeeping; David holds Enterprise) — confirm the Bookkeeping
  program name + David's Enterprise + whether to add "Bookkeeping" to the
  visible /about/ + /pricing/ cert lists. Phone-in-meta on home (kept).

## ROUND 12 **COMPLETE** — STEP 0 mark fixes + extension (all motif marks
gapped) + homepage diagram + the **about-silo + /pricing/ elevation batch
(4 pages) ALL BUILT + VERIFIED**. Reports: round-11.md · **round-12.md**.

## ROUND 12 · STEP 0 — quick-5 underscore + double-border fixes (awaiting check)
Two sitewide CSS mark fixes, design-system tokens only. STOPPED for founder
check BEFORE the page batch. Full report: _build/reports/round-12.md.
- **(A) QUICK-5 UNDERSCORE — fixed + uniform.** Root cause: the mark was
  border-built (`width:3px`+16/7 borders) under the global
  `box-sizing:border-box` reset → the 3px gap COLLAPSED to a solid bar (not
  the Design's 16/3/7 gapped underscore); also gated by `--ruled` and
  duplicated in 03-conversion + 06-motif-rules. Fix (06-motif-rules, single
  source): `box-sizing:content-box` (gap survives) + UNCONDITIONAL
  `.ai-summary__question::after` (every question, every page) + de-duped.
  Border technique kept per the file's documented capture-robustness note;
  renders the Design's gapped underscore exactly. Verified visually
  (shots/r12/fr-quick5.png — all 5 gapped).
- **(B) DOUBLE-BORDER on numbered components — one accent mark.**
  `.process-diagram .process-step::before` was a cobalt accent top-rule +
  grey box-shadow sub-rule + cobalt number (two accent marks). Now a single
  light-GREY hairline (`height:1px; var(--border-hairline)`, box-shadow
  removed); the cobalt number is the lone accent. process-diagram is the
  ONLY numbered component with an accent top-rule (complete application).
  Verified (shots/r12/fr-process.png).
- **Verification:** battery ALL GREEN (css-drift token-only · 52,612 B) ·
  axe home+partners ZERO violations · zero-drift probe — legal ×4 CONTROL
  byte-identical to the r10 baseline (no global regression), home/trust
  CHANGED (intended; element counts unchanged = pure restyle).
- **OPEN (founder ruling):** the SAME box-sizing gap-collapse hits the other
  border-built motif marks (hero--rule, pull-quote, disclosure,
  site-footer__disclosure) — they render as solid bars, not the Design's
  gapped marks. Recommend the same one-line content-box fix; held, out of
  STEP 0 scope. New script: probe_check.ps1.

## ROUND 12 BATCH — PREP LOCKED (founder rulings 2026-06-13, before build)
### Tier ruling (founder, overrides blueprint Sheet 1 MOFU for the parent)
- **/about/ = t-hub** (dark hero + alignment-field motif) — the silo entry /
  trust hub. **/about/methodology/ = t-mofu · /about/network/ = t-mofu**
  (compact hero). /pricing/ = t-bofu (blueprint + founder agree).
- **/about/team/ EXCLUDED from this batch** — no baseline record (build-new
  queue, no repo folder); not an elevation, and the authorship model below
  means no visible team byline/photo. Build fresh in a later round.
### AUTHORSHIP MODEL (founder, 2026-06-13 — STANDING; refines CLAUDE.md rule 9)
- Firm-level credentialed team, **NOT named individuals**. Visible
  reviewer/author on every page = **"Certified QuickBooks ProAdvisor team"**
  — never a personal name (founder-name-zero stands).
- The founder **Person node lives in SCHEMA ONLY** as the off-page E-E-A-T
  credential anchor, referenced by @id — real ProAdvisor credentials: **QBO
  Level 2, Desktop, Enterprise, Payroll, + Advisory when complete**. No
  visible /about/team/ byline, no photo, no visible name.
- **David Westgate** is the named **Texas operating partner ONLY** where that
  relationship is real and already approved — never asserted as a TechBrot
  employee. Build /about/ to this model.
### Batch blueprint contracts (from blueprint v3 Sheet 1/0 — recorded here so
the tracker carries the assignments; the blueprint xlsx remains the master
architecture doc per CLAUDE.md)
| URL | Tier | Silo | Parent | Schema (carry baseline + these) | AI angle |
|---|---|---|---|---|---|
| /pricing/ ✅BUILT+VERIFIED | t-bofu (chrome:full) | Standalone | / | WebPage+Service+OfferCatalog+PriceSpecification | canonical fixed-fee ranges by service |
| /about/ ✅BUILT+VERIFIED | t-hub | About | / | [WebPage,AboutPage]+Org+FAQPage | independent Certified ProAdvisor firm + advisory thesis |
| /about/methodology/ ✅BUILT+VERIFIED | t-mofu | About | /about/ | WebPage+Org+FAQPage+HowTo/HowToStep | 4-phase engagement cadence + standards |
| /about/network/ ✅BUILT+VERIFIED | t-mofu | About | /about/ | WebPage+Org+FAQPage | vetting bar + continuity model · TODO-3 (title/meta/canonical) FIXED |
- **New intent key added:** `pricing` (additive, pricing→quote). New page
  body class `page--mofu` added to the battery manifest whitelist. New
  scripts: extract_live.py (live-content extractor for elevations).
- **Verification (all 4):** content-equity GREEN per page · battery ALL GREEN
  (incl. faq-flat, faq-overlap, faq-schema-verbatim, cta-lexicon, manifest) ·
  axe ZERO violations each · overflow 360/390/768 = 364(benign drawer)/375/753
  · Lighthouse desktop a11y 100 / BP 100 / SEO 100 / CLS 0 (pricing, about,
  methodology spot-checked; network = same t-mofu template) · CSS gate
  53,491 B / 59,392 B · screenshots in _build/verify/shots/r12/.
- Canonical pricing (Sheet 0, identical everywhere): **Monthly $400–$2,500+/mo
  · Cleanup $1,500–$15,000+ · Catch-up $2,000–$20,000+ · QB setup $750–$5,000+**
  (+ migration/payroll/CFO — full line in Sheet 0) · intent-registry ledges
  carry per-tier ranges. NO invented figures.
- /about/network/ missing-canonical (TODO 3) — fix at elevation.
### SOURCE-OF-TRUTH — STANDING RULE (founder 2026-06-13, Option A)
- **blueprint.xlsx remains the MASTER URL/architecture doc** (the full
  139-page map). BUILD-TRACKER carries live build state + each batch's full
  contracts as built. Do NOT port all 139 rows into the tracker.
- **At the START of every batch:** read the target pages' architecture (URL,
  tier, intents, schema, silo parent/children, AI-angle) from blueprint.xlsx,
  confirm against the tracker, FLAG any conflict for a ruling BEFORE building,
  then build and record the contracts in the tracker. Keeps the blueprint
  authoritative and the tracker current without duplicating the whole map.

## ROUND 11 — POLISH PASS **APPROVED** (header-align no-op · FAQ flatten +
faq-flat standing check · within-page variety incl. the #partners-principles
follow-up). New session/model (Opus 4.8 1M) VALIDATED by founder.
Reports: round-10.md (debut) · **round-11.md**

## ROUND 11 — POLISH PASS (APPROVED by founder 2026-06-13)
**Audit ruling:** clean pass, new session/model validated. (c) extended:
#partners-principles (parallel list of 6) → `grid-3` review-cards — removes
the LAST numbered-grid repeat; /partners/ now reads benefits=numbered
`.process-diagram` · process=`.flow`+cards · principles=`grid-3` cards (one
process-diagram total). Re-verified GREEN: battery (process-diagram count
=1) · axe ZERO violations · overflow 364/375/753 · zero-drift probe
/partners/ `1e73d530`@1280 / `a042b7ed`@360 (676 elems; home re-confirmed
`e20c9459` identical) · gate 52,660 B unchanged. Original round-11 record:
Three queued polish items only; NO new pages. Proved the new session drives
the factory cleanly before the elevation grind resumes. Full report:
_build/reports/round-11.md (ends with OPEN ITEMS / STOPPED AT).
- **(a) HEADER ALIGN — VERIFIED ALREADY ALIGNED, NO CHANGE.** New
  diagnostic edge_probe.ps1 measured header.container == hero heading ==
  every full-width body container to the pixel at 360/480/768/900/1280.
  The 04-chrome L11 `.container` override is DEAD (canonical 05-tiers
  `.container` wins). The only inset-differently element is the centered
  narrow reading-column (>900px) — intentional. **FOUNDER CONFIRMED the
  round-10 visual impression was wrong; closed no-change.** Zero CSS
  touched → bundle byte-identical (52,660 B).
- **(b) FAQ FLATTEN + STANDING CHECK.** /partners/ nested accordion
  (6 parents + 13 children) FLATTENED to 19 flat Q/A (contact shape), each
  former parent followed by its former children, text verbatim. FAQPage
  schema now 19 Q/A verbatim (faq-schema-verbatim GREEN at 19);
  content-equity GREEN (no loss). **NEW standing battery check `faq-flat`**
  (run_battery.py #11): no nested-FAQ markup, no `<ul>/<ol>` in any
  faq__answer — enforced sitewide; all 4 FAQ pages flat. Nested FAQ is now
  forbidden sitewide.
- **(c) WITHIN-PAGE VARIETY.** #partners-process (the page's 2nd sequential
  component) converted from numbered `.process-diagram` to the
  design-system `.flow` strip (Apply→Fit Call→Verification→Onboarding +
  timings + arrow connectors, role=img) over a `grid-2` of review-cards
  (per-phase detail; baseline H3s preserved). Zero new CSS (flow/grid-2/
  review-card all in-bundle + manifest). Distinct from the numbered grid
  used by #partners-benefits.
- **Verification:** battery ALL GREEN (incl. faq-flat) · zero-drift probe —
  home/contact/trust BYTE-IDENTICAL to the round-10 baseline, /partners/
  the only change (644→682 elems, intended) · overflow 360/390/768 =
  364(benign drawer phantom)/375/753 · Lighthouse desktop /partners/ a11y
  100 / BP 100 / SEO 100 / CLS 0 (perf host-limited, gate item 4) ·
  **axe /partners/ ZERO violations** · gate 52,660 B (unchanged).
- **OPEN (founder ruling):** #partners-principles is a 3rd `.process-diagram`
  instance — round-11 scope named only benefits+process; NOT touched
  (no over-reach). Rule whether principles should also get a distinct
  treatment. Dead nested-FAQ CSS in 09-extensions left for the next
  source-trim. New tooling: edge_probe.ps1 · kill_probe.ps1 ·
  shot_anchor.ps1 gained -Port/-Root.

## ROUND 10 — DESIGN SYSTEM CHANGEOVER (complete & approved, debut accepted)
Reports: round-10-step3.md · round-10-step6.md · **round-10.md (debut)**

## ✅ ROUND 10 APPROVED — DEBUT ACCEPTED (founder, 2026-06-13)
- New brand LIVE · axe clean ×11 surfaces · Lighthouse 100/100/100
  CLS~0 · no-traces proven · gate held 52.7 KB.
- **The cobalt / warm-paper / Fraunces system is now the GO-FORWARD
  BASELINE.** The old oxblood system is fully retired.
- **The probe fingerprint captured this round
  (_build/verify/css-probe-newskin-baseline.txt) is the NEW REGRESSION
  ANCHOR** — future CSS-touching rounds diff against it.
- **OLD-SKIN ARCHIVE RETAINED at _build/archive/old-skin/ — DO NOT
  DELETE** (founder order stands).

## NEXT-SESSION POLISH QUEUE — ✅ DONE IN ROUND 11 (see round-11 section above)
(a) header-align = verified no-op · (b) FAQ flatten + faq-flat standing
check = done · (c) within-page variety applied to #partners-process (flow).
Residual: #partners-principles 3rd process-diagram instance flagged for
ruling. Original queue text retained below for the audit record.
- **(a) HEADER ALIGNMENT (global chrome, one place):** the chrome
  container (logo/nav/phone row) is inset differently from the page/body
  container at BOTH mobile and desktop. Align the header's inner
  container to the SAME `--container-padding` as the body so header and
  content share one left edge. Fix in the 04-chrome installer (the
  `.container` override / header rules), one place, re-verify at 360 +
  desktop.
- **(b) FAQ PATTERN — standardize to the /contact/ shape sitewide:**
  flat question → prose answer · NO bullet lists inside answers · NO
  nested child-Q/As. WHERE A PAGE'S BASELINE FAQ WAS NESTED (e.g.
  /partners/ — 6 parents + 13 children), FLATTEN WITHOUT LOSING EQUITY:
  every parent AND child question/answer survives as its own flat Q/A
  pair. The content-equity differ must still pass; FAQPage schema stays
  verbatim to the rendered text. **Make this a STANDING BATTERY CHECK**
  (e.g. `faq-flat`: no faq__children / faq__child / nested markup; no
  `<ul>/<ol>` inside faq__answer).
- **(c) WITHIN-PAGE SECTION VARIETY (per-page composition rule):** the
  same numbered-grid / process-diagram component must NOT repeat twice
  on one page. Applied at each page's elevation/review, page-by-page —
  NOT one blunt global swap. Where a page repeats it now (e.g.
  /partners/ benefits + process), give the second instance a different
  treatment (e.g. process → flow/timeline). Log per page as elevated.

## STANDING RULE — NEW SECTIONS (founder, 2026-06-13, governs the grind)
Every new section built from here: **premium, purposeful UI.** SVG
diagrams / flows / charts (ProcessFlow, ComparisonGrid, DecisionTree,
BarChart from the design system) used WHERE THEY AID understanding,
conversion, or AI-citation — NEVER decorative. Every section earns its
place. Intents wired and logical on every CTA. Within the design
system's motion + token language ONLY — no new ad-hoc styles. (Governs
elevation, not the changeover round.)

## ROUND 10 · BLOCK 3 — RE-BASELINE + FULL VERIFICATION + DEBUT (steps 7–9)
### Step-6 audit rulings applied
- Manifest grep formalized as standing battery check `manifest`.
- KEEP_ADDITIONS curation = documented re-entry point.
- "Get the file diagnosed" kept in the lexicon (awaits first problem page).
- Old-skin archive RETAINED through the audit (no deletion).
- TODO 8 (mono) CLOSED · TODO 2 (vector logo) SUPERSEDED by the brand chain.
### Step 7 — re-baseline
- **AA verified IN-BUILD** (verify_aa.py): every text token clears its
  floor on every tier tint; teal focus ring ≥3:1 all tints + dark
  (3.52–4.24); every button state pins fill AND label. Confirms
  AA-MATRIX.md (one doc note: brass-bright on dark computes 7.98 vs
  printed 7.6 — both pass; computed is safer — CANONICAL value).
- css-drift re-pointed at SKIN tokens (01-tokens.css is the only hex home;
  checker now comment-aware).
- Go-forward fingerprint baseline captured
  (css-probe-newskin-baseline.txt, 11 surfaces × 1280/360, 0 failures).
  Probe settle bumped 700→1100ms (homepage cold-start robustness).
- `manifest` standing battery check live.
- Gate headroom: minified 52,660 B / 59,392 B (6,732 B).
### Step 8 — full verification ×10 + 404
- **axe-core: ZERO violations on all 11 surfaces.**
- **Lighthouse desktop: a11y 100 / BP 100 / SEO 100 / CLS 0 on all 10
  content pages** (404: a11y/BP/CLS perfect, SEO 66 = intentional
  noindex `is-crawlable` only).
- Keyboard (interaction_test.ps1): nav dropdown + drawer Escape-close,
  FAQ one-at-a-time — all pass.
- Overflow 360/390/768 clean (full-chrome pages carry a benign 4px
  off-screen-drawer phantom at true 360; body overflow-x:hidden = no
  user scroll, nothing cut — documented rounds-4/5 precedent).
- call-bar zero-CLS (`.has-call-bar` reserve) + auto-hide verified;
  reduced-motion zeroing incl. scroll entrance; @view-transition stays
  commented.
- **Real fixes the suite found** (all in the installer / session layer,
  survive re-install): vs-table → `.vs-scroll` (real 518px@360 overflow)
  · util-bar hidden ≤920 · drawer `<aside>`→`<div role=dialog>` +
  visibility:hidden when closed · dark-footer strong/disclosure/slim
  links re-inked light (were 1.02:1 dark-on-dark) · scroll-entrance
  transform-only (was opacity:0.01, failing contrast) · partners FAQ
  `<dl>/<dt>/<dd>`→`<div>/<h3>/<div>` (axe definition-list; schema
  verbatim still GREEN).
### Step 9 — DEBUT AUDIT (round-10.md)
- Every page screenshotted desktop + 360 beside the Design renders
  (_build/verify/shots/debut/ + DESIGN-{contact,file-review,404} pairs).
  Visual language matches; OURS pages taller (elevated baseline content).
- No-traces PASSED · byte report · probe delta (100% changed = full
  re-skin, intentional) · AA in-build · all flags.
### Debut state
- Battery ALL GREEN (incl. content-equity ×7, cta-lexicon, manifest).
- CSS minified 52,660 B / 59,392 B (6,732 B headroom) · source 75,018 B.
- 10 built pages + 404 on the new cobalt/warm-paper/Fraunces skin.

## ROUND 10 · BLOCK 2 — PAGE RE-SKIN + NO-TRACES + CTA LEXICON
### Step-3 audit rulings applied
- section--cta-band--light WHITELISTED (known upstream manifest
  omission — the design's own renders use it).
- .section--alt mapped as a one-line tokenized definition in
  09-extensions (class name kept across pages per ruling).
- Metric corrections / icon replacements / cascade fix RATIFIED — the
  corrected metric values are CANONICAL (Fraunces 97.8/25.5 +
  size-adjust 106.8 · Public Sans 95/22.5 + 102.9); baked into the
  installer so a handoff refresh cannot regress them.
### Step 4 — the 10 pages re-skinned (differs identical)
- Class-gap scan drove the strategy: 99 old classes → (a) NARROW ports
  into 09-extensions (legal-doc · process-diagram minus connectors ·
  nested-FAQ children · review-card facts · team-card · utilities;
  token-only, skin guarantee recuts them), (b) MARKUP SWAPS onto new
  vocabulary (tldr__label · ai-summary container · grid-2/3 ·
  link-wrap+link-standalone for tiles/pills · review-card shells for
  service/guide cards · home compare table → REAL <table class=
  "vs-table"> with mark-yes/no + sr-only kept), (c) the two money-page
  FORMS rebuilt on the render shells (reskin_forms.py) with the LOCKED
  CONTRACT preserved exactly — services[] names, full option sets +
  values, hidden meta, trackers, honeypot. Real Clutch quotes + NAP
  replaced the render placeholders; review cards on the new
  __name/__role/__verified shape with the work/outcome fact lines kept.
- 08-additions CURATED (old per-round precedent): call-bar, proof-strip,
  breadcrumb, rule-mark kept; calculator/research/editorial/verdict/
  problem/TOC/byline families DROPPED until their pages build
  (KEEP_ADDITIONS in the installer). One stray handoff hex
  (#FFFFFF inverted-primary hover) tokenized to var(--bg-card); the
  css-drift checker is now comment-aware.
- FORM PROBES on the new shells: file-review (default BOFU meta +
  referrer fallback + override) and contact (default-empty · NEW-key
  CTA swap "Scope the Setup" · texas state path) — ALL GREEN, 24 keys.
- DIFFERS IDENTICAL: contact 13/0/24 · legal 16-18/0/22 ·
  partners 42/7/26 · trust 39/6/26 — same dispositions as round 8.
### Step 5 — NO-TRACES PROOF PASSED (verify_no_traces.py)
- Zero old-system hexes (oxblood/old-paper/old-focus, 10-hex sweep)
  across sources + minified artifact · zero classes outside
  MANIFEST(208) ∪ 09-extensions-defined ∪ semantic whitelist ·
  motif-ledger/old logos/inter font OUT of the output (sources archived
  in _build/archive/old-skin/ — no git). figure-judgment.svg KEPT —
  content diagram, currentColor recuts it to cobalt.
- 404 BUILT from pages/404.html → /404.html (minimal chrome, real
  silo links + NAP, noindex via new robotsOverride, nf-* styles
  tokenized in 09-extensions).
- BRAND SCHEMA: Organization.logo + Brand.logo → ImageObject
  icon-512.png (512×512) per BRAND-CHAIN.
### Step 6 — CTA LEXICON installed (src/_data/ctaLexicon.json + battery check)
- Canonical: "Book the discovery call" (primary) · "Get the free file
  review" · "Speak to a ProAdvisor" (phone) · "Read the methodology" /
  "See how it works" (soft) · "Get the file diagnosed" (problem).
- Sanctioned (registry, role-annotated): "Send the Discovery Brief"
  (baseline submit) · "Start the Application" / "Ask a Question First"
  (round-9 partner rulings) · "Explore Services" · "The Four Trust
  Pillars" (anchor) · "Back to the homepage" (404).
- intents.json per-intent cta values = fenced machinery, auto-sanctioned.
- MAPPED to canonical: home hero "Speak to a ProAdvisor"→"Book the
  discovery call" + "Get your file reviewed"→"Get the free file review" ·
  file-review "Submit your file for review"/"Submit for free
  review"→"Get the free file review" ×3 · all "Call (877) 751-5575"
  ghost buttons→"Speak to a ProAdvisor" (hrefs/intents untouched).
- Battery check `cta-lexicon` standing: 10 distinct labels, all green.
### State at the step-6 STOP
- Battery ALL GREEN (incl. content-equity ×7, cta-lexicon).
- CSS: minified 52,121 B / 59,392 B (7,271 B headroom) · source
  74,466 B. Manifest grep ready to become a standing battery check at
  step 7.

## ROUND 10 · BLOCK 1 — PROBE ANCHOR + SKIN TRANSPLANT + LAYOUT CONVERSION
- **Step 1**: pre-changeover computed-style anchor archived
  (_build/verify/css-probe-pre-changeover.txt, 20 fingerprints; its
  file-review@1280 cell holds the STABLE hash 2a94e234 — the round-9
  batch file carried unreproducible probe noise in that one cell).
- **Step 2 — transplant**: new handoff fetched + inventory COMPLETE
  (nothing missing). SKIN installed via the rewritten
  _build/extract_css.py (now the SKIN INSTALLER): 00-fonts/01-tokens
  verbatim · 02-base kept (locked floor) · 03-conversion · 04-chrome ·
  05-tiers (tier-common PORTED: fallback @font-face deduped) ·
  06-motif-rules · 07-motion (@view-transition stays commented) ·
  08-additions · 09-extensions (session file, empty at install).
  **R1 APPLIED + VERIFIED**: #2B4FD6→var(--accent), #3D63E8→
  var(--color-accent-soft) across motif-rules/tier-common/conversion,
  installer asserts zero leftovers; marks RENDER (BOFU hero rule +
  quick-5 underscores confirmed at full res). Cascade fix shipped: the
  motif-rules footer-disclosure override also clears 04-chrome's
  gradient (it would have painted the mark's gap). **R2**:
  skin-tokens-draft.css excluded (installer FORBIDDEN list; same for
  fonts-preview.css). **R3**: queued for the OG batch round.
  FONTS: publicsans-var + ibmplexmono-400/500/600 latin woff2
  downloaded (fetch_fonts_skin.py); fraunces pair carried over.
  METRIC OVERRIDES RE-VERIFIED against the binaries
  (verify_font_metrics.py, capsize method; both fonts USE_TYPO_METRICS):
  declared values corrected — Fraunces 97.8/25.5 + size-adjust 106.8,
  Public Sans 95/22.5 + 102.9 — baked into the installer.
  ICONS: 8 Lucide diffed vs official (diff_lucide.py): 5 match, 3 REAL
  DRIFTS (menu/phone/star) replaced with official geometry in the
  handoff styling frame. BRAND CHAIN: head per BRAND-CHAIN.md
  (theme-color #FBFAF7, favicon set, apple-touch, /site.webmanifest
  passthrough, preload swap inter→publicsans), logos installed, old
  marks archived. OLD SKIN ARCHIVED (not deleted — no git):
  _build/archive/old-skin/.
- **Step 3 — layouts**: five tier layouts REBUILT (t-hub/t-location dark
  hero + motif-align-full/-ny · t-mofu compact+call-bar · t-guide
  compact, no call-bar · t-bofu minimal chrome + hero--rule + call-bar)
  + chrome partials re-cut to 03-chrome vocabulary (util-bar, sticky
  header + dropdowns, drawer, dark footer with aligned-segment
  disclosure, minimal variants) — NAV/FOOTER LINK SET CARRIED VERBATIM.
  tb-nav.js selectors re-pointed (behavior contract unchanged) +
  is-scrolled state; NEW tb-callbar.js (auto-hide/reveal);
  .has-call-bar body class reserves space (zero CLS). CONTENT MACHINERY
  FENCED — tb-forms/tb-faq/intents/schema/form contract/section IDs
  untouched. Legal pages moved t-mofu→t-guide (call-bar never on
  legal); trust callBar:false (hub-structured page).
- **First build on the new skin: minified 53,432 B / 59,392 B gate
  (5,960 B headroom) · source 73,789 B.** Per-tier samples rendered on
  OUR layouts beside the Design renders:
  _build/verify/shots/changeover/<tier>-{OURS,DESIGN}.png.
- FLAGS: CLASS-MANIFEST gap — design renders use
  `section--cta-band--light` (semantic, no rules) but the 208-list
  omits it (whitelist or regenerate upstream) · `.section--alt` does
  not exist in the new system (10 built pages still reference it —
  step-4 mapping decision) · old icons/motifs/CSS-archive removal lands
  at step 5 by design.

## ROUND 9 — CSS DEEP TRIM (TODO 17 CLOSED) + round-8 audit rulings
Full report: _build/reports/round-9.md
### Round-8 audit rulings APPLIED
- ROUND 8 APPROVED (trust rewordings, partners retirements, retargets).
- NEW intent key `partner-apply` (additive): /partners/ "Start the
  Application" CTAs (hero, process, application-cta, cta-band, FAQ
  submit link) → /contact/?intent=partner-apply; "Ask a Question
  First" stays ?intent=partner-question.
- Two-mention ceiling EXEMPTION CLASS logged: TOPICAL PAGES (e.g.
  /trust/) alongside the support-silo exception (ruling 18).
### The trim (founder-ordered; pass condition = zero visual/behavioral change)
- **RESULTS: minified 59,313 → 56,092 B (−3,221; headroom now 3,300 B
  under the 59,392 B gate — target ≥2,048 ✓) · source 88,646 → 74,975 B
  (−13,671; under the 75 KB target ✓; still over the 70 KB soft-cap,
  flagged as designed).**
- Per-file source savings: 03-components −5,134 (unused-rule DROP list
  + banner-only comments via extract_css.py) · 07-extensions −4,747
  (comment collapse + .initials-mark/.section-motif removal — dead
  since the round-7 photo wiring / never composed) · 05-kit −1,964
  (.disclosure + .hero--editorial de-curated; return via the extractor
  when the support silo / editorial pages build) · 06-chrome −1,197 ·
  00-fonts −629 · 01-tokens + 02-base LOCKED, untouched (≈870 B of
  unused rules + 6.1 KB comments left on the table pending TODO 7
  ratification).
- Levers: css_audit.py unused-selector proof (JS-injected classes
  whitelisted) · extract_css.py DROP_TOKENS_03/_05 + banner-only
  comment policy (regeneration reproduces the trimmed size) ·
  trim_session_css.py for session files · LF-only line endings (CRLF
  was costing ~1 B/line on disk) · round-8's :is() compaction stands.
### ZERO-DRIFT PROOF (new factory capability)
- css_probe.ps1 / css_probe_all.ps1: per-page hash of getComputedStyle
  for EVERY element (+::before/::after), fonts awaited, custom-property
  enumeration SORTED (Chrome enumerates them nondeterministically —
  diagnosed via css_probe_diag/props scripts). 10 pages × 2 viewports
  (1280/360) = 20 fingerprints.
- **Before/after: 20/20 IDENTICAL.** (One batch-run outlier on
  file-review@1280 was unreproducible probe noise — two consecutive
  re-probes returned the baseline hash exactly.)
### Round-9 verification
- Battery 33 checks ALL GREEN on the trimmed bundle (links 889 ·
  content-equity ×7 · css-bytes 56,092/59,392).
- Overflow spot-probes home / file-review / trust: 349/379/753 —
  identical to pre-trim.
- Lighthouse desktop post-trim: home a11y 100 · BP 100 · SEO 100 ·
  CLS 0 · perf 49 host-limited / file-review same quality · CLS 0 ·
  perf 52 / trust same quality · CLS 0 · perf 64 (benchmarkIndex
  120–166; go-remote gate item 4 stands).
- Prod build from clean: 9 pages, dev/* excluded, env fail-closed ✓.
### Scripts added (no-one-liner rule)
css_audit.py · css_probe.ps1 · css_probe_all.ps1 · css_probe_diag.ps1 ·
css_probe_props.ps1 · trim_session_css.py (+ extract_css.py round-9
trim logic). The probe pair is now the standing zero-drift harness for
ANY future CSS-touching round — and the regression-proof tool for the
upcoming design-system changeover.

## ROUND 8 — FIRST ELEVATION BATCH (6 pages) + round-7 audit rulings
Full report (standalone, with OPEN ITEMS): _build/reports/round-8.md
### Round-7 audit rulings APPLIED
- Elevation pattern APPROVED. /contact/ removals SIGNED OFF.
- CHROME-RELOCATED differ class implemented (equity-exceptions.json
  entries carry type chrome|removal; battery + equity_report.py report
  them separately; chrome class needs no per-page sign-off).
- Calendly FAQ #7 placement KEEP — flag closed.
- OG images → single auto-generated batch round before go-remote
  (GO-REMOTE GATE ITEM 6). TODO 9 re-pointed.
- Report rule EXTENDED: round reports are standalone files ending with
  an "OPEN ITEMS / STOPPED AT" section.
### Pages elevated (all URLs byte-identical, differ GREEN each)
| Page | Tier/tint | Notes |
|---|---|---|
| /legal/disclaimer/ | t-mofu · guide · chrome:full | legal-doc carried VERBATIM (header/meta/summary/TOC/sections, ids #sec-1…) |
| /legal/dpa/ | same | verbatim carry |
| /legal/privacy-policy/ | same | verbatim carry — the /legal/privacy/ dead-link sweep landed this round (see below) |
| /legal/terms/ | same | verbatim carry |
| /trust/ | t-mofu · HUB tint · chrome:full | full standing pattern; live page already carried quick-5+FAQ architecture — carried; 3 quick-5 questions REWORDED (answers verbatim; originals live verbatim in FAQ) to satisfy zero-overlap — SIGN-OFF REQUESTED |
| /partners/ | t-mofu · guide · chrome:full | nested FAQ (6 parents + 13 children) carried verbatim; NEW additive quick-5; FAQPage now mirrors the accordion (live schema NEVER matched rendered — defect class; 5 schema-only questions retired, SIGN-OFF REQUESTED) |
- Ported by _build/scripts/port_legal.py (legal ×4, generated njk +
  verbatim page JSON-LD) and hand-composed trust/partners from existing
  components ONLY (zero new component CSS for those two).
- Legal pages SKIP the Q/A architecture per founder ruling 16 (legal
  text is not Q/A content). Trust + partners carry the full pattern.
### LIVE DEFECTS found/fixed this round
- /legal/privacy/ dead-link SWEEP (founder-ordered): live carriers =
  contact (fixed round 7) + /quickbooks/speak-to-a-quickbooks-expert/
  (fix lands when that page elevates). No other carriers.
- /partners/ live dead links ×3 (never-built URLs): /partners/apply/ →
  /contact/?intent=partner-question · /partners/benefits/ →
  #partners-benefits · /partners/requirements/ → #partners-requirements.
  RETARGETS NEED SIGN-OFF; founder may prefer a partner-apply intent
  key or queueing /partners/apply/.
- /partners/ FAQPage schema/rendered mismatch (see table above).
- /trust/ editorial-break referenced /assets/img/services/
  trust-editorial-*.webp — assets DO NOT EXIST in the repo. Decorative
  aria-hidden section OMITTED; sharp pipeline ready when real imagery
  arrives.
### CSS
- Gate stress: legal-doc + breadcrumb extensions initially broke the
  58 KB gate (fail-closed worked: build refused at 59,840 B). Trim
  executed per ruling-2 condition (a): prose-link affordance compacted
  with :is() (~0.9 KB minified saved), legal-doc eyebrow rules merged.
- Final: minified 59,313 B / 59,392 B — **79 B headroom** ⚠ CRITICAL:
  next CSS-touching round MUST deep-trim first (gate does NOT move).
  Source 88,646 B (soft-cap flagged; trim target <75 KB stands).
- New tokenized extensions: .breadcrumb (ported from design 04-pages) ·
  .legal-doc system (design's .page--legal placeholder filled — upstream
  pending). faq__children/nested vocabulary already existed in
  03-components (zero cost).
### Battery upgrades this round
- content-equity: chrome-relocated class + FAQ-level exceptions.
- faq detection now matches faq__list--nested (partners' nested FAQ was
  silently skipped on first run — caught and fixed; all FAQ checks now
  fire on nested pages).
### Round-8 verification
- Battery 33 checks ALL GREEN (incl. content-equity ×7 pages: contact
  13/13 · disclaimer 16/16 · dpa 18/18 · privacy 18/18 · terms 18/18 ·
  partners 42/42 headings + 7/7 FAQ · trust 39/39 headings + 6/6 FAQ).
- 889 hrefs across 10 preview pages all resolve.
- Overflow 360/390/768: all 6 new pages clean (345-349/375-379/753).
- Lighthouse desktop: /trust/ a11y 100 · BP 100 · SEO 100 · CLS 0
  (one CLS regression found at 0.008 — hero <strong> font-swap shift —
  fixed by dropping inline bold from the hero subheading, text verbatim)
  · perf 48 host-limited. /legal/privacy-policy/ a11y 100 · BP 100 ·
  SEO 100 · CLS 0 · perf 79 host-limited (benchmarkIndex 114–174; gate
  item 4 stands).
- Screenshots: 6 pages desktop-full + mobile-360 — _build/verify/shots/.
- Word counts (built main vs baseline whole-page): disclaimer 1,311/1,653
  · dpa 1,245/1,587 · privacy 1,324/1,666 · terms 1,253/1,595 · trust
  2,061/2,397 · partners 2,623/2,715 — deltas ≈ the excluded newsletter
  band + legacy footer text counted in baseline whole-page numbers;
  content itself verbatim per differ.
### Round-8 flags needing founder ruling (full list in report OPEN ITEMS)
1. Trust quick-5 rewordings (3) · 2. Partners schema-question
retirements (5) · 3. Partners dead-link retargets (3) + apply-CTA
target · 4. Trust editorial imagery (assets missing) · 5. TRUST PAGE vs
TWO-MENTION CEILING: the trust page's baseline content carries ~6
independence mentions (its core topic) — equity carried; ceiling
exemption requested (like support silo) · 6. CSS 79 B headroom.
### Scripts added (no-one-liner rule)
port_legal.py · verify_round8.ps1 (batch overflow+shots) ·
equity_report.py gained CHROME-RELOCATED labeling.

## ROUND 7 — RULINGS APPLIED + /contact/ ELEVATED (T-BOFU)
### Ruling 1 APPLIED — sharp pipeline + David photo (TODO 14 CLOSED)
- @11ty/eleventy-img installed; `{% photo %}` async shortcode in
  eleventy.config.cjs: AVIF/WebP/JPEG, explicit width/height (CLS 0),
  loading=lazy default (`eager: true` opt-in for above-fold), alt
  REQUIRED (build fails without). Sources stay where the founder drops
  them; generated variants → /assets/img/generated/ (hashed names).
- david-westgate.jpg wired into the homepage team card through the
  pipeline (initials mark replaced). 9 variants generated from the
  212,156 B source: **64w AVIF 1,616 B (the 1× fetch) · 128w AVIF
  2,651 B (2×) · 192w AVIF 3,712 B · JPEG fallback 2,187–8,470 B** —
  ~99% smaller than the source at 1×. CSS: `.team-card picture`
  flex-shrink guard (+1 rule). Lighthouse home re-run: **CLS 0 with
  the photo live** — explicit-dims guarantee holds. Visual proof:
  shots/home-team-card.png.
### Ruling 2 APPLIED — CSS hard gate 55KB → 58KB (TODO 15 CLOSED)
- Gate now 59,392 B in BOTH enforcement points (eleventy.config.cjs
  build-fail + run_battery.py); extract_css.py label corrected (it
  reports source bytes; the gate is minified-artifact).
- Conditions logged per ruling: (a) SOURCE TRIM PASS is a scheduled
  task during silo elevation — execute tracker trim candidates
  (06-chrome/07-extensions comment condensing), target source back
  under 75 KB; (b) **58 KB is the ceiling through cutover — the gate
  does not move again.**
### TODO 5 CLOSED — all 11 unmapped intent keys resolved (pre-contact)
- Added to intents.json (additive, `_added`-marked, canonical pricing
  from the live tier pages): qb-faq · quickbooks · quickbooks-plan ·
  quickbooks-proadvisor · quickbooks-setup-{essentials $750–1.5K,
  standard $1.5–3K, complex $3–5K+} · quickbooks-migration-{simple
  from $2.5K, standard from $4.5K, complex from $7.5K} · techbrot-fit.
- New scout: _build/scripts/scout_intents.py (live-HTML intent scan vs
  registry, state-lookup aware). Result: **106/106 live intent keys
  mapped, zero unmapped.**
### Ruling 3 APPLIED — /contact/ ELEVATED (first baseline-page elevation)
- **Page**: src/contact.njk + contact.11tydata.js → /contact/ (URL
  byte-identical). T-BOFU layout, chrome:minimal, bofu tint. 1,396
  rendered words (baseline 951 — enriched, not gutted).
- **Sequence (10)**: contact-{hero · in-brief · tldr (bofu tint, body
  id=#contact-promise — the BASELINE SPEAKABLE selector preserved) ·
  ai-summary (quick-5 ruled) · expect (3-step process-diagram, live
  "What to expect" steps verbatim) · trust (5 "Why owners choose"
  bullets verbatim incl. disclaimer link + Direct contact / HQ cards) ·
  main (THE FORM, #contact-discovery-form) · alt (4 channels verbatim:
  Calendly / phone / partners / press) · faq (7 NEW buyer-objection
  Q/As) · cta (layout)}.
- **Baseline equity accounting** (battery check `content-equity`, NEW —
  see below): 13/13 baseline headings present or justified · H1, meta
  description, canonical, ContactPage + BreadcrumbList schema nodes
  (incl. og image ref + #contact-promise speakable) VERBATIM · live
  form contract reproduced: field names, services[] values+order+help
  lines, select options, consent text, "Send the Discovery Brief"
  label, ALL-EMPTY hidden meta defaults (live semantic — contact takes
  its meaning from URL params/referrer). JUSTIFIED REMOVALS (founder
  sign-off requested): "The monthly brief." newsletter section (round-4
  ruling: /subscribe unverified, no dead forms ship) + 4 legacy footer
  column headings (chrome:minimal per round-4 chrome variant rule).
  BSS title artifact stripped (TODO 4 applied for this page).
- **LIVE DEFECT fixed at elevation**: live consent + FAQ linked
  /legal/privacy/ — a URL that has NEVER existed (real page:
  /legal/privacy-policy/). Battery `links` caught it; elevation links
  the real page. Recorded alongside TODO 3's defect class.
- **Form probes** (_build/verify/form-payload-contact.json, 3 cases):
  default → all meta empty, source_page=referrer fallback, 24 keys ✓ ·
  ?intent=quickbooks-setup-standard (NEW key) → CTA "Scope the Setup",
  services=["qb-setup"] auto-checked ✓ · ?intent=texas → state-lookup
  __state_pillar__ path, CTA "Book the Discovery Call",
  services=["not-sure"] ✓. GA4 lead_submit/phone_click wired,
  console-only outside production.
- Quick-5 (contact): How fast does TechBrot respond? · What happens
  after I send the discovery brief? · Do I have to commit to anything
  on the call? · What should I put in the brief? · Where is TechBrot
  headquartered?
- FAQ (7, FAQPage verbatim, zero overlap, phone ≤2): discovery call
  cost? · sales pitch on the call? · not the right fit? · only
  QuickBooks businesses? · pricing after the call? · marketing list? ·
  urgent — skip the form? *(phone + Calendly)*
- New CSS (tokenized): .intake-checkbox__help · .intake-group__note ·
  .intake-field__optional · .intake-form__reassurance (live form's
  visible help/optional/reassurance text — baseline content).
  site.json emails gained hello@ + press@ (live page values).
### NEW BATTERY CHECK — content-equity differ (risk hierarchy #2, now enforced)
- run_battery.py check 8: for every built URL present in the FROZEN
  baseline — every baseline heading, FAQ Q/A, and schema node type must
  be present in the built page OR carry a founder-justified entry in
  _build/battery/equity-exceptions.json. Justified removals are
  REPORTED every round, never silent. First enforcement: /contact/
  GREEN (13 headings · 0 FAQ · 24 schema types accounted).
### Round-7 verification (full battery + probes, all on current build)
| Check | Result |
|---|---|
| Battery (19 checks incl. content-equity) | ✅ ALL GREEN |
| url-set / links / intents / founder-zero / css-drift | ✅ (251 hrefs across 4 preview pages resolve) |
| css-bytes | ✅ minified 56,642 B / 59,392 B gate (2,750 B headroom) · source 84,652 B ⚠ over soft-cap (trim pass scheduled per ruling 2) |
| Δ vs round 6 | +544 B minified (+983 B source): picture guard + form help/note/optional/reassurance |
| content-equity (/contact/) | ✅ 13 headings · 24 schema types · justified removals reported |
| overflow 360/390/768 (contact + home) | ✅ 349/379/753 — clean |
| Lighthouse desktop /contact/ | a11y 100 · BP 100 · SEO 100 · CLS 0 · perf 68 host-limited (benchmarkIndex 174; gate item 4) |
| Lighthouse desktop / (photo live) | a11y 100 · BP 100 · SEO 100 · **CLS 0** · perf 60 host-limited |
| Form payload proof | ✅ 3 probes (default / new key / state lookup) — form-payload-contact.json |
| Screenshots | contact desktop full / hero / mobile-360 + home-team-card (photo proof) — _build/verify/shots/ |
| Prod build from clean | ✅ 3 pages, dev/* excluded, env fail-closed intact |
### Round-7 scripts added (no-one-liner rule)
scout_intents.py · form_probe_contact.ps1 · screenshots-contact.ps1 ·
shot_anchor.ps1 (fragment-scrolled screenshots) · lighthouse-page.ps1
(added in the round-6 re-verify, reused here).

## ROUND 6 — HOMEPAGE MICRO-FIX + /quickbooks/file-review/ (T-BOFU #1)
### Homepage micro-fix (quick-5 oxblood rule scope)
- `.ai-summary--ruled` rule moved from `.ai-summary__item` (whole row,
  question + answer) to `.ai-summary__question` ONLY. Answer text now
  sits clean with no rule. Component-level CSS edit in 07-extensions.css
  — applies to the quick-5 pattern SITEWIDE (homepage today,
  file-review this round, every future page with the .ai-summary--ruled
  variant). Visual proof: home-quick5-fixed-desktop.png shot.

### /quickbooks/file-review/ — T-BOFU page (Sheet 8 BOFU priority #1)
- **Page**: src/quickbooks/file-review.njk + file-review.11tydata.js
  → permalink /quickbooks/file-review/ → renders as
  _site-prod/quickbooks/file-review/index.html. Intent key
  `file-review` added to intents.json (canonical key — every
  problem/symptom/error CTA converges here; today the homepage's hero
  ghost CTA is the first live consumer via `?intent=home`).
- **Layout**: NEW src/_includes/layouts/t-bofu.njk · chrome: minimal
  (logo + phone only, slim footer — no funnel leakage) · `.hero--compact`
  with 48×3 oxblood hairline accent (::before, design 05-kit §BOFU) ·
  ledger-bofu surface (--surface-tier-bofu, paper-deep #ECEAE2) on
  TL;DR + cta-band. Reusable for every future T-BOFU endpoint.
- **Page sequence (10 sections)** — file-review-{hero · in-brief · tldr
  (bofu tint, speakable-paired) · ai-summary (5 BOFU Q/A, ruled
  variant) · checks (6-row ledger list, NEW .checks-list extension) ·
  process (4-step .process-diagram reuse) · trust (4 trust-row items +
  2 verified Clutch cards) · form (full intake-form, intent=file-review
  default) · faq (7 buyer-objection Q/As, accordion, FAQPage verbatim)
  · cta (slim band, layout-supplied)}.
### THE FORM (the page's engine)
- form-contract.json payload reproduced EXACTLY (24 keys + services
  array + industry overwrite quirk). Captured proof:
  _build/verify/form-payload-file-review.json.
- HTML defaults set: `intent=file-review`, `source_type=bofu-conversion`,
  `funnel_stage=BOFU` (others empty; source_page intentionally
  empty so the live-engine semantic — URL param > document.referrer >
  empty — is preserved).
- **tb-forms.js round-6 change**: intent engine's data-meta loop
  changed from unconditional `el.value = meta[k]` to
  `if (meta[k]) el.value = meta[k]` — empty URL params no longer
  WIPE HTML defaults. The collect() loop still writes ALL data-meta
  fields to the payload "ALWAYS" — form-contract.json contract
  preserved. Verified with two probes:
  - DEFAULT URL (no params) → payload.intent = "file-review",
    source_type = "bofu-conversion", funnel_stage = "BOFU", services = [].
  - ?intent=cleanup&state=texas → payload.intent = "cleanup",
    state = "texas", services = ["cleanup"] (engine auto-checks per
    intents.json MAP["cleanup"].service); BOFU defaults preserved.
- Honeypot `company_website` present + sr-only + NOT in payload.
- GA4 lead_submit + phone_click wired via tbTrack; disabled outside
  production (console-only).
### CSS budget — INTAKE FORM CSS BACK IN BUNDLE
- Re-added to 07-extensions.css as a tokenized port from the design's
  03-components (lines ~2685–3050 form system + 4198–4373 success/error).
  The Part B drift block (29 hardcoded hex flagged in round 1) was
  re-tokenized AA-clean — accent / text-primary / border-hairline /
  bg-card / text-secondary / accent-tinted rgba. Trimmed to fit the
  hard gate: dropped intake-form__header/__eyebrow/__heading/__lede
  (form uses generic .section__header above the form instead), dropped
  the success-panel entrance animation and reduced-motion media (motion
  tokens already zero on the design token layer), dropped
  intake-checkbox--consent overrides and :has(input:checked) outer-card
  state. Result: form is fully styled, success panel + error states
  re-tokenized and present.
- **BYTE REPORT (vs ratified 55 KB hard gate)**:
  - minified: 56,098 B / 56,320 B hard gate · **headroom 222 B** ⚠ TIGHT
  - source: 83,675 B · over 70 KB soft-cap (flagged; soft-cap was
    already over from round 5)
  - Delta from round 5: +6,369 B minified (was 49,729 B → now 56,098 B).
  - Hard gate held, but with under 0.5% headroom. Next CSS-touching
    round needs a trim before adding net new selectors, or the
    founder may want to ratify a budget bump (e.g., 58 KB minified)
    to make /contact/ and the T-MOFU/T-GUIDE work breathe. **Flagged
    for ruling; this round stays under the existing gate.**
### JSON-LD @graph (file-review.11tydata.js)
- WebPage (speakable: #file-review-tldr-body + #file-review-in-brief-text)
- BreadcrumbList: Home → QuickBooks → File review
- Service (#service-file-review): "Free QuickBooks File Review",
  serviceType, areaServed=US, BusinessAudience, offers: Offer with
  price="0" priceCurrency=USD availability=InStock; provider = global
  Organization @id (#organization)
- FAQPage: 7 Q/A VERBATIM from the rendered accordion (battery
  `faq-schema-verbatim` GREEN)
- NO AggregateRating (under-5 rule stands)
### Quick-5 questions (file-review)
1. What is a QuickBooks file review?
2. What does the review cost?
3. How long does the review take?
4. What do you need from me?
5. Is my data safe?
### FAQ questions (file-review, accordion, FAQPage verbatim)
1. What if the review uncovers more problems than I expected?
2. Will I get pressured to buy ongoing monthly bookkeeping?
3. Can I just talk to a ProAdvisor on the phone first? *(phone in answer)*
4. We're a multi-entity or multi-year situation — does the free review still apply?
5. Is the written fixed-fee scope binding?
6. Who actually reviews the file?
7. What happens if you tell me the file is fine? *(phone in answer)*

Zero overlap with quick-5 (battery `faq-overlap` GREEN).
### Strategic in-body interlinks (chrome:minimal compensation)
TL;DR + F2 + F7 weave: /accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup
· /catch-up-bookkeeping/?intent=catch-up · /monthly-bookkeeping/?intent=monthly
· /quickbooks/. Every page CTA routes to #file-review-form or tel:.
### Round-6 verification (full battery + probes — RE-RUN 2026-06-13 after reboot)
The 2026-06-12 reboot hit during the final battery pass, AFTER the last
source edit (22:53: file-review source_page HTML default → empty, so the
live-engine semantic URL param > referrer > empty is preserved) but with
_site-prod, Lighthouse, and screenshots still built from the 22:34
pre-edit state. 2026-06-13: prod artifact rebuilt from clean and the
ENTIRE battery re-run on the current source — all artifacts in
_build/verify/ now post-date the final edit. The only page delta between
stale and current artifacts was that one hidden input (invisible).
| Check | Result |
|---|---|
| Battery (14 checks across home + file-review) | ✅ ALL GREEN |
| url-set | ✅ 3 URLs (home, file-review, dev/form-test) all in baseline∪queue (dev/* preview-only; prod output = 2 pages) |
| links | ✅ 219 hrefs across 3 pages all resolve |
| intents | ✅ all CTA intents in intents.json; 2 page intent keys unique |
| founder-zero | ✅ visible content clean |
| css-drift | ✅ zero hardcoded hex, zero undeclared vars in bundle |
| css-bytes | ✅ 56,098 B / 56,320 B (222 B headroom) ⚠ source 83,675 B over 70 KB soft-cap |
| ai-summary-5 (home + file-review) | ✅ exactly 5 Q/A each |
| faq-min-6 (home + file-review) | ✅ 7 FAQ items each |
| faq-overlap (home + file-review) | ✅ zero overlap each |
| faq-schema-verbatim (home + file-review) | ✅ 7 Q/A match accordion verbatim each |
| overflow 360 / 390 / 768 | ✅ file-review AND home: scrollW 349 / 379 / 753 — clean, zero overflow |
| Lighthouse desktop (file-review, fresh prod artifact, 2 runs) | a11y 100 / BP 100 / SEO 100 / CLS 0 · all failing audits performance-only · perf 29–32 at benchmarkIndex 77–90 (host much slower post-reboot than the 2026-06-12 run: perf 58 @ benchmarkIndex 192). Quality categories identical across all runs; perf NOT calibrated on this host — go-remote gate item 4 stands |
| Form payload proof | ✅ RE-CAPTURED both probes into _build/verify/form-payload-file-review.json: default (intent=file-review · source_type=bofu-conversion · funnel_stage=BOFU · services=[] · source_page=referrer fallback ✓ proves the 22:53 fix) + override ?intent=cleanup&state=texas (intent=cleanup · state=texas · services=["cleanup"] auto-checked · BOFU defaults preserved). 24 contract keys + services array. Known artifact quirk: _page_url shows `&amp;` — Chrome --dump-dom serialization escape during capture, not a page bug |
| Skin guarantee | ✅ css-drift zero |
| Screenshots | RE-SHOT on current build: file-review desktop full / hero desktop / mobile-360 + home-quick5 micro-fix (rule under question only, verified visually) — _build/verify/shots/ |

New named scripts this pass (founder no-one-liner rule):
_build/scripts/lighthouse-page.ps1 (parameterized page audit) ·
screenshots-file-review.ps1 · form_probe.ps1 (dual payload probe,
writes the form-payload artifact).

### DAVID PHOTO — flag (NOT wired this round; needs founder call)
- `assets/people/david-westgate.jpg` IS NOW ON DISK (212 KB JPG,
  written 2026-06-08). Round 5 logged "NOT present on disk" — that
  flag is OUT OF DATE.
- Standing order: "wire it with sharp the moment it exists." The
  sharp pipeline does NOT exist yet (round 4 deferred to "first
  image arrives"). Wiring inline without sharp would ship a raw
  212 KB JPG on the homepage, which would hurt LCP/perf on mobile
  and conflict with the standing order's intent.
- **Action**: KEEPING the typographic initials mark on the homepage
  team card this round. Two paths for the founder to pick:
  1. Build the sharp pipeline next round (Eleventy Image plugin,
     `{% photo %}` shortcode AVIF/WebP/JPEG with explicit dims) —
     proper standing-order compliance, also unblocks editorial-break
     slots.
  2. Ship inline `<img>` with explicit dims + lazy load as a deliberate
     interim, accept the perf hit, plan sharp upgrade for a later round.
- Until founder rules: David photo stays on the FLAG list (now with the
  correct on-disk state).

### Go-remote gate — item 2 CLOSED
- /quickbooks/file-review/ BUILT, verified, all CTAs that point at it
  no longer 404. Go-remote blockers remaining: item 1 (preview-header
  proof on Cloudflare), item 3 (TEST-MIGRATION-2026 live form POST),
  item 4 (Lighthouse re-verification on calibrated infra), item 5
  (`npm run build:prod` from clean — already proven each round).

## ROUND 5 — REFINEMENT (founder rulings + homepage)
### Rulings closed
1. **CSS BUDGET RATIFIED:** hard gate = minified ≤55KB (shipping artifact);
   source soft-cap 70KB, flagged never blocking. This round: minified
   49,729B / 56,320B (6.4KB headroom) · source 75,095B — OVER the 70KB
   soft-cap (flagged; FAQ family +7.4KB and guides +1.7KB drove it; next
   trim opportunity: comment condensing in 06-chrome/07-extensions).
2. **3 GUIDE URLS LOCKED** in build-new-queue.json + linked from
   #home-guides: /resources/guides/{quickbooks-cleanup, hire-a-bookkeeper,
   bookkeeping-rates}/ — T-GUIDE work, **GO-REMOTE BLOCKERS**.
3. **BUTTON COLOR CLOSED:** shipped system wins — ink-at-rest, oxblood
   hover.
### STANDING RULE — per-page Q/A architecture (sitewide)
- Quick-5 (.ai-summary--ruled, NY oxblood-left-rule pattern) sits DIRECTLY
  BELOW the TL;DR. AI-extraction layer; speakable-paired; OUT of FAQPage.
- Bottom FAQ accordion (#<slug>-faq, design .faq component) after
  framework/trust, before cta-band: 6–8 buyer-objection Q/As, one open at
  a time, panels crawlable when closed (grid-rows animation, motion
  tokens, reduced-motion honored). FAQPage JSON-LD carries the ACCORDION
  verbatim — one FAQPage per page. Phone-in-answers: ≤2 natural placements.
- ZERO OVERLAP between quick-5 and FAQ questions.
- Battery enforces all of it: ai-summary-5 · faq-min-6 · faq-overlap ·
  faq-schema-verbatim (schema == rendered text, entity-normalized).
### STANDING RULE — tier surfaces (final table)
| Tier | Surface token | Value |
|---|---|---|
| T-HUB | --surface-tier-hub | paper-mist #F7F5F0 |
| T-LOCATION | --surface-tier-hub | (approved: hub tint) |
| T-MOFU | --surface-tier-guide | paper-warm #F3F1EB |
| T-GUIDE | --surface-tier-guide | paper-warm #F3F1EB |
| T-BOFU | --surface-tier-bofu | paper-deep #ECEAE2 |
Application: TL;DR section + final cta-band sit on the tier surface;
cta-band light variant re-inks text, tier class supplies surface.
### STANDING RULE — prose link affordance (WCAG 1.4.1)
Prose links: whisper hairline underline at rest (ink-faint, 1px, 3px
offset) → accent color on hover/focus. Nav/buttons/card-list links exempt.
(Interpretation note: rest indicator is a full-width hairline; the 60→100
width animation remains the .btn--text treatment — text-decoration cannot
width-animate multiline safely.)
### Homepage changes
- Quick-5 relocated below TL;DR, ruled style; FAQ accordion added (7 Q/As;
  phone CTA in #1 cost and #6 multi-year answers); learning-center
  restored (3 locked guide URLs); industry tiles now TEXT-ONLY (Lucide
  removed there; remains sanctioned for table marks + future contact
  icons); team: lead-practice card carries the real italic-t logo mark.
- **DAVID PHOTO FLAG:** assets/people/david-westgate.jpg NOT present on
  disk (chat-attached image is not a file source). Card keeps typographic
  initials per ruling E fallback — drop the file in and it wires next
  round. Old source for the record: none — the card has only ever used
  initials "DW", no image was ever referenced.
- Diagram upgrade: judgment SVG 1,614B → 3,279B (period nodes, recon arcs,
  value gridlines, drift step, baseline ticks, double rule); process
  diagram + double-rule markers & junction dots (+~0.4KB CSS).
### Round-5 verification
Battery 10/10 GREEN (incl. new FAQ checks; schema-verbatim validated) ·
overflow probe 349/379/753 clean · Lighthouse a11y 100 / BP 100 / SEO 100,
zero failing audits · CLS 0 · accordion keyboard live-verified (one-at-a-
time, Escape + focus return, closed panels crawlable) · 1,957 rendered
words · founder-name-zero · skin guarantee (css-drift zero) · section
order (18): hero · in-brief · tldr · ai-summary · services · judgment ·
start · process · reviews · team · compare · industries · guides · states
· framework · trust · faq · cta. (Spec said 19 — actual is 18 with
in-brief counted; no section from the spec is missing.)

## ROUND 4 — HOMEPAGE FINAL BUILD
### Chrome (nav/footer TODO #1 CLOSED)
- NY-page chrome pattern ported as system components in 06-chrome.css
  (12.7KB source): util-bar · sticky .site-header with dropdown menus
  (button-toggled, aria-expanded, Escape/outside-click close) · mobile
  drawer (dialog, accordions, focus return, scroll lock) · dark
  .site-footer (brand col + 4 sitemap columns + disclosure + legal).
  Behavior in tb-nav.js (2.6KB, deferred, full-chrome pages only).
- **CHROME VARIANT RULE (standing):** `chrome: full` default — full nav +
  full footer. `chrome: minimal` for T-BOFU conversion endpoints
  (/contact/, /quickbooks/file-review/, future /book-a-call/): logo +
  phone header, slim footer (NAP + disclaimer + Privacy/Terms), no nav
  links = no funnel leakage. T-BOFU layout will default minimal. Verified
  on the dev harness page (chrome: minimal).
- Footer carries the MANDATORY trademark disclaimer — site chrome is
  exempt from the page two-mention ceiling (founder ruling). Newsletter
  band from the legacy footer EXCLUDED (/subscribe endpoint unverified —
  no dead forms ship).
### Standing ruling A — AI-SUMMARY IS ALWAYS FIVE
- Every page with the section: exactly 5 page-specific Q/A pairs, FAQPage
  schema pairs all five. Battery check `ai-summary-5` enforces ==5.
  Homepage: 5 built (incl. the two new: "Who is TechBrot for?", "What
  makes TechBrot different?"); FAQPage @graph node added (dump|safe).
  NO AggregateRating (under 5 reviews — rule stands; visible 5.0 display
  only, founder-supplied verified Clutch data).
### Standing ruling B — TIER-CODED SECTION SURFACES (tokens only)
- New tokens: --color-paper-mist #F7F5F0 (ONE new step interpolated
  inside the warm paper ramp) · --surface-tier-hub: paper-mist ·
  --surface-tier-bofu: paper-deep #ECEAE2 · --surface-tier-guide:
  paper-warm #F3F1EB. Changing the three tier tokens re-skins every page
  of that tier (skin guarantee holds).
- T-HUB applied: TL;DR + final cta-band on --surface-tier-hub; NO dark
  band on hub final-cta (dark = hero only). Light variant
  .section--cta-band--light re-inks text; the tier class supplies the
  surface. Verified: page dark surfaces = hero + footer chrome only.
- CONTRAST (WCAG, computed): on hub mist — primary 18.06 · body 13.20 ·
  secondary 6.36 · accent 8.82. On guide warm — 17.43/12.73/6.13/8.51.
  On bofu deep — 16.34/11.94/5.75/7.98. All AA+ (≥4.5). Btn paper-on-
  oxblood 9.19.
- **PROPOSAL (awaiting founder):** T-LOCATION → --surface-tier-hub
  (location pages are structurally hubs: dark hero + motif); T-MOFU →
  --surface-tier-guide (mid-funnel editorial kinship). If full
  distinction wanted, a 4th paper step is needed — say the word.
- NOTE: the design's .btn--primary is INK-bodied with oxblood hover
  (03-components truth); the brief §5 text says "oxblood". On the light
  band buttons render the system primary (ink). If oxblood-at-rest is
  wanted, that's an upstream component change — flag to ratify.
### Visual layer
- Process diagram: .process-diagram (extension) composing the design's
  .process-step — oxblood 2px phase markers, connecting hairlines, mono
  tabular numerals. Reusable on every service page.
- Judgment figure: partials/figure-judgment.svg — ledger-language inline
  SVG (720×220 explicit, currentColor, aria-hidden; flat drifting
  automation line w/ error ticks vs rising reconciled judgment line w/
  check marks + double ledger rule). In .ledger-figure component.
- Lucide icons (readme substitution policy): 8 inline-copied at
  stroke 1.5, 18px, currentColor — src/_includes/icons/ (3.5KB total).
- Comparison marks: .mark-yes/.mark-no CSS-drawn (no emoji/icon font)
  with .sr-only text equivalents.
- **EDITORIAL-BREAK SLOTS OPEN, AWAITING FOUNDER IMAGERY** — no real
  warm-toned documentary images exist in repo assets; nothing
  placeholder/stock shipped. sharp pipeline still pending first image.
### Content merge (sections as built, in order)
home-hero · home-in-brief · home-tldr (hub tint) · home-services ·
home-judgment (3 cards + figure) · home-start (6 buyer cards, intents:
cleanup, catch-up, monthly, qb-help*, quickbooks-setup, fractional-cfo —
*qb-help ADDED to intents.json additively; spec's qb-setup/cfo mapped to
EXISTING registry keys per "never duplicate") · home-process (diagram) ·
home-reviews (merged proof: 5.0 header + 2 verified Clutch cards,
founder-supplied) · home-team (initials marks, David Westgate operator
block + Intuit directory link) · home-compare (why-network table, honest
cells — solo bookkeeper concedes "named operator") · home-industries
(8 Lucide tiles + all-industries) · home-states (21 pills, all
repo/queue-verified) · home-ai-summary (5) · home-framework ·
home-trust · home-cta (light, hub tint).
### CSS BUDGET AMENDMENT (RATIFICATION NEEDED)
- The mandated scope cannot fit readable source in 55KB. Gate changed:
  **HARD gate = minified site.min.css ≤55KB (shipped artifact); source
  overage reported as flag.** This round: minified 43,016B / 56,320B
  (13.3KB headroom) · source 65,335B (flagged over).
- INTAKE FORM CSS (8.7KB) dropped from bundle this round — returns when
  file-review//contact/ builds. Dev harness functional unstyled-intake.
- Byte costs this round: chrome +12.7KB src · extensions +8.0KB src ·
  buyer/process/why-network/locations/industries sections +8.4KB src ·
  icons 3.5KB (HTML-inline) · judgment SVG 1.4KB · tb-nav.js 2.6KB.
### Round-4 flags/fixes (battery- or audit-caught)
- sr-only labels escaped the comparison table's overflow clip → page
  overflow at 360/390 (probe-caught) → .why-network__table positioned.
- Footer wordmark oxblood em = 1.96:1 on dark → inverted on dark chrome.
- 3 GUIDE URLS NOT LOCKED: Sheet 8 names no guide slugs (Sheet 5 backlog
  is topic-less /resources/guides/[topic]). Founder must specify the
  three; learning-center section joins the homepage when they build.
  Recorded in build-new-queue.json _pending_guides.
### Round-4 verification
battery ALL GREEN (incl. new ai-summary-5) · overflow probe 360/390/768:
349/379/753 scrollWidth — clean (drawer open + accordions also clean at
narrow widths; drawer mechanics keyboard-verified: Escape closes, focus
returns) · Lighthouse a11y 100 (zero failing audits) · BP 100 · SEO 100 ·
CLS 0 · perf NOT measurable this round (benchmarkIndex 83–108 under
load; go-remote gate item stands) · 1,796 rendered words · 88 internal
links in main, 79 unique anchor texts, none used >2×, zero bare
anchors · skin guarantee: css-drift check zero hardcoded hex/undeclared
vars in bundle · screenshots in _build/verify/shots/.

## ROUND 3 — HOMEPAGE REFINEMENT (founder audit response)
APPLIED:
- Two-mention disclaimer ceiling: homepage now has EXACTLY two independence/
  trademark mentions — cta-band disclaimer (#home-cta) + AI-summary entry
  (#home-ai-summary, question reworded to "Is TechBrot the same as Intuit or
  QuickBooks?"). Removed: in-brief disclosure block, in-brief source line
  "independent — not Intuit", and the FOOTER trademark sentence (it was a
  third mention). ⚠ Footer removal conflicts with design readme rule 7
  ("disclaimer mandatory … and in the footer") — founder ruling applied;
  reconcile upstream. CEILING IS NOW A STANDING RULE for all non-support
  pages; support silo keeps above-fold disclosure per Sheet 7.
- Hero: H1 unchanged (already the thesis). Subheading replaced with the
  ruled keyword line ("Certified QuickBooks ProAdvisors, accountants, and
  advisors … CFO advisory."). CTAs + intent params unchanged.
- Trust-row tiles per stat ruling: "4× ProAdvisor certifications" ·
  "2 verified Clutch reviews" · "Fixed-fee written-scope pricing" ·
  "Response within one business day" (replaced "U.S.-based" tile; all
  claims baseline-sourced).
AUDIT/PAGE MISMATCH (flagged, rule 7 — sections referenced by the audit
that DO NOT EXIST on the homepage as built; nothing invented):
- "Where accounting is going" section · "What clients say"/"Client work"
  review sections (no verified review TEXT is available in repo sources —
  needs founder-supplied Clutch quotes before any reviews section ships) ·
  stat-tile block ("U.S. incorporated"/"100% vetted") · Learning Center
  guide cards · buyer-routing "Where are you, actually?" · comparison
  table · David Westgate operator block · five-question AI-summary (built
  one has three) · engagement-process section · states grid.
  → The built homepage is the minimal T-HUB per brief §6. If the audit
  reflects a richer target homepage from the design chat, supply that
  section spec and it builds next round.
VERIFIED AFTER EDITS: battery ALL GREEN · overflow clean 360/390/768 ·
Lighthouse a11y 100 / BP 100 / SEO 100 (prod artifact, zero failing audits)
· Intuit-mention containers = exactly {#home-ai-summary, #home-cta}.
PERMISSIONS: .claude/settings.local.json updated per founder instruction.

## MODE: LOCALHOST-ONLY (locked by founder 2026-06-12, until explicitly lifted)
- NO git commits / push / remote setup. NO Cloudflare Pages. NO public preview.
- This file is the commit log until "go remote". First commit then captures
  the whole verified state at once.
- **GO-REMOTE GATE (ALL must pass BEFORE first deploy):**
  1. Fail-closed env safety proven with PREVIEW HEADERS (X-Robots-Tag) on the
     hosting platform — meta-level noindex already proven locally.
  2. `/quickbooks/file-review/` BUILT — homepage CTAs point at it; no CTA may
     404 on a public preview or production (founder ruling 2026-06-12).
  3. Live form test submission (marker TEST-MIGRATION-2026) posted to the
     real Apps Script endpoint and verified in the sheet.
  4. Lighthouse mobile ≥95 re-verified on calibrated infrastructure
     (PageSpeed Insights vs the Cloudflare preview). This machine's
     benchmarkIndex is 192 (~8× below Lighthouse reference) — local mobile
     scores are not calibrated; desktop run on clean build: perf 81 (LCP
     1.16s, host-limited TBT), a11y 100, BP 100, SEO 100, CLS 0.
  5. Production builds from clean output (`npm run build:prod` → _site-prod).
  6. OG-image batch round complete (founder ruling 2026-06-13): auto-generated
     OG cards for all pages via the proven sister-site pattern; the verbatim
     schema/og references (e.g. contact-og.png) resolve to real assets.

## STATUS SNAPSHOT
| Item | State |
|---|---|
| Part A baseline | ✅ FROZEN (139 repo pages) — _build/baseline/ |
| Part B design fetch | ✅ COMPLETE — _design/techbrot-design-system/ · tokens verified · drift documented below |
| Part C factory | ✅ Homepage-scope complete (11ty + bundle + env safety + battery + form/intent JS) |
| Session 2 homepage | ✅ BUILT + VERIFIED on localhost — David photo now live via sharp pipeline (round 7) |
| /quickbooks/file-review/ (T-BOFU #1) | ✅ ROUND 6 BUILT — go-remote gate item 2 CLOSED |
| /contact/ (FIRST ELEVATION, T-BOFU) | ✅ ROUND 7 ELEVATED — pattern APPROVED at audit |
| Sharp pipeline ({% photo %}) | ✅ ROUND 7 BUILT — unblocks editorial breaks, OG images, operator photos |
| Legal silo ×4 + /trust/ + /partners/ (FIRST BATCH) | ✅ ROUND 8 ELEVATED — APPROVED at audit |
| Elevated total | 11 of 139 baseline pages + home + file-review built (round-12 added /pricing/, /about/, /about/methodology/, /about/network/) |
| CSS budget | ✅ ROUND 9 TRIMMED — 56,092 B minified (3,300 B headroom) · 74,975 B source · zero-drift proven |
| Next build | Round 10 changeover ✅ + round 11 polish ✅ (awaiting audit). AFTER audit: the about-silo + /pricing/ elevation batch REVIVES on the new cobalt/warm-paper/Fraunces system — the grind toward the 200-page launch criterion resumes |

## LOCALHOST URLS (for founder check)
- Homepage: http://localhost:8080/ (eleventy --serve, preview build, live-reload)
- **PHONE / LAN (round 11): http://192.168.1.8:8080/** — the eleventy dev
  server binds all interfaces by default; reachable on this Wi-Fi at the
  PC's LAN IP 192.168.1.8 (the 192.168.11.1/198.1 addresses are VMware
  virtual adapters, not the LAN). Preview build = noindex + no analytics +
  live-reload. IP can change on DHCP lease renewal — re-check with
  Get-NetIPAddress (Wi-Fi interface) if the phone can't connect.
- Form harness: http://localhost:8080/dev/form-test/?intent=monthly (try other keys)
- Production artifact: http://localhost:8125/ (serve, _site-prod, what Lighthouse measured)
- Lighthouse reports: _build/verify/lighthouse-home.report.html / lighthouse-desktop.report.html

## PART B — DESIGN INVENTORY (handoff: "TechBrot Design System", fetched 2026-06-12)
- css/: 00-fonts (Google CDN) · 01-tokens (115 tokens, LOCKED) · 02-base
  (LOCKED) · 03-components (101KB, full vocabulary) · 04-pages (141KB,
  page-scoped) · 05-kit (brief-§5 kit) — full set archived in _design/.
- 18 React components in 6 groups · 5 tier templates (t-hub/mofu/bofu/guide/
  location) · ui_kits/website (rendered tier truth) · guidelines specimens ·
  assets: logo-t-black/white.png (200×240 raster — vector still pending),
  motif-ledger-full/single.svg (currentColor, explicit dims).
- TOKEN VERIFICATION: accent #841E1E ✓ · Fraunces/Inter/JetBrains Mono ✓ ·
  fs-12…fs-68 (16 steps) ✓ · space-1…space-40 (15 steps) ✓ · reduced-motion
  zeroing built into tokens ✓.
- DRIFT FOUND (handoff, documented — NOT zero):
  a. 29 hardcoded hex in 03-components.css lines ~4099–4360: the pasted-in
     "contact success panel + intent enrichment" block (off-palette #1A1A1A/
     #DDD9D0/#F0EEE9/#F8EDED/#E4C9C9) + var() fallbacks in the integrations
     dark band. NOT imported into our bundle. Re-tokenize when the contact
     page is rebuilt; upstream fix needed in the design project.
  b. 47 undeclared custom-property usages (--fs-11 ×19, --font-display ×10,
     --fs-19/26, --lh-13/15, --space-9) in the kb-* family + 04-pages.
     Affected sections not imported (except INTAKE FORM → --fs-11 aliased,
     see extensions). Upstream fix needed.

## SESSION-1 EXTENSIONS TO DESIGN CSS (all marked `EXTENSION` in-file; upstream to Claude Design pending)
| File | Change | Why |
|---|---|---|
| 01-tokens.css | `--fs-11: 0.6875rem` added by name | used-but-undeclared in INTAKE FORM (drift b) — brief rule: never inline |
| 01-tokens.css | `--text-eyebrow` → ink-mute (was ink-faint) | #8B8B85 measured 3.27:1 at 12-13px — WCAG AA fail; brief's "tokens AA-clean" premise was wrong |
| 01-tokens.css | font stacks gained metric-matched fallbacks | CLS 0 during webfont swap |
| 02-base.css | `text-rendering: optimizeLegibility` → `auto` | forced slow text path; multi-second Style&Layout on throttled mobile. CONFLICTS WITH "02-base LOCKED" — founder ratification requested |
| 03-components.css (subset) | `.service-card__list a, .service-card__cta { padding-block: var(--space-1) }` | Lighthouse/WCAG 2.2 24px touch-target fail |
| 06-chrome.css | `.site-base a` underline; lockup img explicit 25×30 box | link-distinguishability fail; CLS guard |
| 00-fonts.css | rewritten: self-hosted latin variable woff2 (Fraunces n+i, Inter), metric fallbacks | brief §4 mandate; kills render-blocking CDN CSS. JetBrains Mono NOT self-hosted yet (no usage on built pages) |
- extract_css.py preserves files carrying EXTENSION blocks on re-runs.
- BOM INCIDENT (fixed, battery-visible): PowerShell-written CSS carried UTF-8
  BOMs; concatenation put U+FEFF mid-bundle and esbuild escaped it INTO the
  next selector — `\feff :root` matched nothing and silently killed every
  token. Bundler now strips per-file BOMs. Lesson: all CSS bytes verified in
  the rendered page, not just in the file.

## FACTORY STATE (Part C, homepage scope)
- 11ty 3.1.6 · src/ + _includes/layouts/ (base.njk, t-hub.njk) + _data/
  (site.json single-source NAP/phone/emails/socials/formEndpoint/ga4Id ·
  intents.json · schemaGlobal.json — global @graph extracted VERBATIM from
  baseline: Organization+ProfessionalService, Brand, 2 Person, WebSite).
- CSS: ONE site.min.css bundled in eleventy.before (esbuild), budget-gated.
  Round byte report: source 48,935B / 56,320B budget (7,385B headroom) ·
  minified 30,518B. Curated sections: buttons, hero, tldr, ai-summary,
  service cards, final-cta, intake form (03) · in-brief, framework, cta-band,
  trust-row, disclosure, hero tiers (05) · chrome (06).
- Env fail-closed: preview = noindex,nofollow meta + NO gtag + dev pages
  built; production = index,follow + gtag + dev pages EXCLUDED + clean output
  dir (_site-prod). Proven both ways this round.
- JS: tb-analytics.js (phone_click delegation; events console-only outside
  production) · tb-forms.js (live contact.js port per form-contract.json +
  honeypot company_website [NOT in payload] + intent engine driven by
  intents.json + payload logger outside production).
- intents.json: 90 live keys + lookups + `home` (additive). 11 unmapped live
  keys still to resolve (TODO 5).
- Battery (_build/battery/run_battery.py, ALL GREEN this round): output-URL
  set vs baseline∪queue · anchor/internal-link audit · intent-key existence +
  front-matter duplicate check · founder-name-zero (visible text only) ·
  CSS hex/undeclared-var drift · CSS byte gate.

## HOMEPAGE (T-HUB) — built this round
- Sequence per brief §6: dark hero--hub + inline full-grade ledger motif
  (explicit 560×720, currentColor=accent) → in-brief + independence
  disclosure → TL;DR #home-tldr (speakable-paired) → silo card-grid
  #home-services (routing root: accounting, quickbooks, advisory, vs,
  find-an-accountant, pricing + trust/methodology/partners via list links)
  → ai-summary #home-ai-summary (3 Q&A incl. not-Intuit disambiguation)
  → framework ("Two delivery modes. One operating standard." — REAL coined
  concept from /about/ + /about/methodology/ baseline copy) → trust-row
  (Certified ProAdvisor ×4 products · "2 verified Clutch reviews" stated
  honestly · fixed-fee · U.S.-based) → cta-band + mandatory trademark
  disclaimer. No FAQ (not in T-HUB sequence; none fabricated).
- Funnel wiring: hero primary → /contact/?intent=home · hero ghost →
  /quickbooks/file-review/?intent=home (slug CONFIRMED by founder, queued
  next) · cta-band → /contact/?intent=home. Informational links carry no
  intent (nav links ≠ conversion CTAs — interpretation noted for audit).
- Schema: global @graph verbatim + per-page WebPage (speakable #home-tldr-body)
  + BreadcrumbList + ItemList(6 silos), all via dump|safe.
- Section IDs follow #home-* convention (anchors-are-equity rule).

## VERIFICATION RESULTS (this round, localhost)
| Check | Result |
|---|---|
| Battery (6 checks) | ✅ ALL GREEN |
| Lighthouse desktop (clean prod artifact) | perf 81 · a11y 100 · BP 100 · SEO 100 |
| CLS / LCP / FCP (desktop) | 0 / 1162ms / 756ms |
| Lighthouse mobile | NOT CALIBRATED on this host (benchmarkIndex 192; scores 39–72 across identical runs) → go-remote gate item 4 |
| Overflow 360 / 390 / 768 | ✅ clean (scrollWidth ≤ viewport, zero offenders) |
| Focus states | ✅ 2px #0F4FCC outline, 3px offset (spec) |
| Reduced motion | ✅ token-level zeroing (built into 01-tokens) |
| Keyboard form | ✅ filled + submitted via keyboard/programmatic fill; required-field errors are role=alert |
| Founder-name-zero | ✅ visible text clean; Person schema only |
| Form payload | ✅ logged, matches form-contract.json incl. industry-overwrite quirk — _build/verify/form-payload-logged.json. NOT posted (localhost mode) |
| Analytics gating | ✅ preview: zero external requests; lead_submit/phone_click console-logged "NOT sent" |
| Intent routing | ✅ ?intent=monthly swaps headline/CTA/service pre-check exactly like live engine |

## BUILD-NEW QUEUE — 25 URLS RESERVED (locked slugs; _build/build-new-queue.json)
1. / — ✅ BUILT (round 4) — quick-5 micro-fix round 6
2. /quickbooks/file-review/ — ✅ BUILT (round 6) — go-remote gate item 2 CLOSED
3.–25. /resources/guides/{quickbooks-cleanup,hire-a-bookkeeper,
   bookkeeping-rates}/ (3 T-GUIDE, go-remote blockers) · /about/team/ ·
   /reviews/ · /legal/ · /quickbooks/cleanup/{focused,standard,complex}/
   · /find-an-accountant/ + 16 state pillars — "URL reserved —
   content builds fresh."

## FOUNDER RULINGS LOG
1. 2026-06-12 — No live-site fetches; sources = repo + Claude Design only.
   Archived form/intent JS + form-contract.json KEPT as the payload ruling.
2. 24 live-but-not-in-repo URLs → BUILD-NEW queue, URLs locked.
3. baseline.json frozen (139 pages) as content-equity contract.
4. Build order: HOMEPAGE first, then silo-by-silo elevation.
5. LOCALHOST-ONLY mode; commit/push/Cloudflare deferred to "go remote".
6. GA4 events implemented but disabled outside production.
7. No live form POST until go-remote; payload logged instead.
8. /quickbooks/file-review/ CONFIRMED (Sheet 8); queued; go-remote blocker.
9. 2026-06-12 (round 6) — file-review intent registry: `file-review`
   added; canonical key for every problem/symptom/error CTA.
10. 2026-06-12 (round 6) — tb-forms.js intent engine: empty URL params
    no longer wipe HTML defaults; collect() loop still writes
    data-meta fields "ALWAYS" so the live form contract is preserved.
11. 2026-06-13 (round 7) — DAVID PHOTO: build the sharp pipeline NOW
    (factory infrastructure), wire the photo through it. No interim
    raw <img>.
12. 2026-06-13 (round 7) — CSS GATE: minified hard gate raised 55→58 KB
    (59,392 B). Conditions: source trim pass scheduled during silo
    elevation (target <75 KB source); 58 KB is the CEILING THROUGH
    CUTOVER — the gate does not move again.
13. 2026-06-13 (round 7) — BUILD ORDER: pattern-locking first — /contact/
    elevation (first elevation of an existing page) BEFORE cleanup tiers
    and the T-GUIDE trio. One page, then stop for audit.
14. 2026-06-13 (round-7 audit) — ELEVATION PATTERN APPROVED. The 4
    /contact/ removals SIGNED OFF. Chrome-relocated differ class created
    (footer/nav headings ≠ removals). Calendly FAQ #7 placement KEEP —
    real founder link, correct urgent-intent placement; flag closed.
15. 2026-06-13 — OG images: one auto-generated batch round before
    go-remote (gate item 6); not per-page work.
16. 2026-06-13 — BATCH ORDER: first elevation batch = legal silo +
    standalone trust pages (6 pages: legal×4, /trust/, /partners/),
    chrome:full, tier tints per table; legal pages skip the Q/A
    architecture; trust + partners get the full standing pattern.
17. 2026-06-13 (round-8 audit) — ROUND 8 APPROVED. Trust quick-5
    rewordings APPROVED · partners FAQPage retirements SIGNED OFF
    (schema that never matched rendered = live defect, not equity) ·
    partners retargets APPROVED with upgrade: NEW `partner-apply`
    intent key — "Start the Application" → ?intent=partner-apply,
    "Ask a Question First" → ?intent=partner-question; anchor
    retargets as-is · TODO 18 stands open (founder photography).
18. 2026-06-13 — TWO-MENTION CEILING EXEMPTION CLASS: TOPICAL PAGES.
    Pages whose baseline topic IS independence/trademark (e.g. /trust/)
    are exempt from the two-mention ceiling, alongside the Sheet-7
    support-silo exception. Ceiling still binds everywhere else.
19. 2026-06-13 — NEXT ROUND = CSS DEEP TRIM ONLY (TODO 17): source
    <75 KB, minified headroom ≥2 KB under the 59,392 B gate; computed
    styles must remain IDENTICAL on all 10 built pages (battery +
    overflow + spot Lighthouse home/file-review/trust = pass condition).
20. 2026-06-13 — STOP AFTER TRIM REPORT. No further page batches: a
    DESIGN SYSTEM CHANGEOVER is next (new brand, spec to follow);
    remaining elevation resumes on the new system. The about-silo +
    /pricing/ batch is CANCELLED pending the changeover.
21. 2026-06-13 (round 11) — HEADER ALIGN: founder ACCEPTED the edge_probe
    measurement disproving the round-10 visual impression. Header is NOT
    misaligned (pixel-identical to body/hero at all widths); the narrow
    reading-column inset >900px is INTENTIONAL — leave it. Task (a)
    closed "verified already aligned, no change."
22. 2026-06-13 (round 11) — FAQ FLAT is a STANDING RULE sitewide: every
    FAQ is the /contact/ shape (flat Q → prose answer, no bullet lists in
    answers, no nested child Q/As). Enforced by battery check `faq-flat`.
    Nested FAQ markup is retired. Where a baseline FAQ was nested
    (/partners/), every parent AND child survives as its own flat pair.
23. 2026-06-13 (round-11 audit) — ROUND 11 APPROVED. Within-page variety
    extended: #partners-principles (parallel list, not a sequence) →
    `grid-3` cards, removing the last numbered-grid repeat. STANDING
    COMPOSITION RULE reaffirmed: a numbered `.process-diagram` appears at
    most once per page; parallel lists take card grids, sequences take
    `.flow`/timeline. New session/model (Opus 4.8 1M) validated; the
    about-silo + /pricing/ elevation batch is next.

## STANDING RULES (locked)
- ROUND REPORTS ON DISK (founder rule 2026-06-13, EXTENDED same day):
  at the end of every round, the full round report is written to
  _build/reports/round-N.md in addition to the terminal output. The file
  must be COMPLETE STANDALONE — it ends with an "OPEN ITEMS / STOPPED AT"
  section carrying every question, flag, and pending ruling exactly as
  stated in the terminal sign-off. The founder audits from the file
  alone. (equity_report.py <url> generates the per-item differ for
  every elevation report.)
- CHROME-RELOCATED differ class (founder ruling 2026-06-13): baseline
  headings that exist only as site chrome (footer columns, nav) are
  classified CHROME-RELOCATED (present in the full-chrome variant), not
  removals — no per-page sign-off. True removals (e.g. the newsletter
  band) stay JUSTIFIED-REMOVED; the newsletter-band class itself is
  SIGNED OFF (2026-06-13).
- NO CHAINED/COMPLEX SHELL ONE-LINERS (founder rule 2026-06-12): every
  multi-step operation lives as a named script in _build/scripts/ —
  dev-server.ps1 · build-prod.ps1 · battery.ps1 · lighthouse.ps1 [desktop]
  · lighthouse-page.ps1 [-Path -Slug -Preset] · overflow_probe.ps1 [path]
  · screenshots.ps1 / screenshots-file-review.ps1 / screenshots-contact.ps1
  · shot_anchor.ps1 [-Path -Anchor -Out -Port -Root] (round-11: -Port/-Root
    added — shoot the preview _site/8090, not just _site-prod/8125)
  · edge_probe.ps1 [-Path -Width] (round-11: header/body left-edge +
    padding diagnostic) · kill_probe.ps1 (round-11: clear stray probe/
    screenshot chrome between runs — headless=new leaks on this machine)
  · form_probe.ps1 (file-review)
  · form_probe_contact.ps1 · scout_intents.py · equity_report.py [url]
  (+ lh_summary.py). Reuse every round; add new scripts there.
  Encoding gotcha (2026-06-13): em-dashes in .ps1 written as UTF-8
  no-BOM parse as CP-1252 smart quotes in PowerShell 5.1 and break
  string terminators — ASCII punctuation only in scripts.
- ONE CLASS SYSTEM SITE-WIDE — pages compose Design-system classes only; new
  patterns enter the component layer as named token-driven classes, reported
  with byte cost. (This round's additions: only the EXTENSION fixes above.)
- SECTION IDs are equity — existing IDs survive elevation; new pages use
  #<slug>-tldr / #<slug>-faq convention. Battery anchor audit every round.

## TODO LEDGER
| # | Item | Phase |
|---|---|---|
| 1 | NAV/FOOTER: no canonical design — minimal chrome shipping; do not invent | Until design ruling |
| 2 | ✅ SUPERSEDED round 10 (founder ruling) — the new brand chain ships vector logos (logo-horizontal[-dark].svg, monogram[-dark].svg, favicon.svg) + full favicon/PWA PNG set. The old PNG-mark need is moot | SUPERSEDED |
| 3 | /about/network/ missing canonical (live defect) — fix at elevation | Elevation |
| 4 | Strip `<title>BSS-1-11ty</title>` artifact (139/139) at port | Elevation |
| 5 | ✅ CLOSED round 7 — all 11 keys added to intents.json (additive, canonical pricing); scout_intents.py reports 106/106 live keys mapped | DONE |
| 6 | Upstream the Session-1 EXTENSION fixes + drift list to the Claude Design project | Founder relay |
| 7 | 02-base `text-rendering` edit conflicts with "locked" — ratify or revert | Founder ruling |
| 8 | ✅ CLOSED round 10 (founder confirmed) — changeover replaced JetBrains Mono with self-hosted IBM Plex Mono 400/500/600 (latin woff2); mono need fully met | DONE |
| 9 | og:image / twitter:image — RULED 2026-06-13: single batch round of auto-generated OG cards for ALL pages (proven sister-site pattern) before go-remote. Added as GO-REMOTE GATE ITEM 6. Not per-page work | OG batch round |
| 10 | CSS budget tension at scale: full design CSS is ~275KB vs 55KB budget — per-round curation holds for now; founder ruling needed before the budget blocks elevation | Watch |
| 11 | Research-layer logging start (Sheet 5: "cannot backfill") | Founder decision |
| 12 | Funnel-logic-per-tier table (symptom/error→file-review · vs→/switch/ [PLANNED v2 — confirm before wiring] · guides→soft CTA · hubs→primary service CTA) — fill as tiers build | Part C cont. |
| 13 | `--color-accent-soft #B85050` flagged "avoid/possibly vestigial" by brief §4 — confirm removal upstream | Founder relay |
| 14 | ✅ CLOSED round 7 — sharp pipeline built ({% photo %}, @11ty/eleventy-img), David photo wired through it on the homepage team card; CLS 0 verified | DONE |
| 15 | ✅ CLOSED round 7 — gate re-ratified 58 KB (59,392 B), CEILING THROUGH CUTOVER; source trim pass scheduled during silo elevation (target <75 KB source) | DONE |
| 16 | LIVE DEFECT /legal/privacy/ dead link — SWEEP COMPLETE round 8: only carriers were /contact/ (fixed r7) + /quickbooks/speak-to-a-quickbooks-expert/ (fix at its elevation). Plus NEW dead-link class found on /partners/ (apply/benefits/requirements — retargeted r8, sign-off pending) | speak-to-expert elevation |
| 17 | ✅ CLOSED round 9 — deep trim done: minified 56,092 B (3,300 B headroom), source 74,975 B (<75 KB ✓). Zero-drift proven (20/20 computed-style fingerprints identical). Remaining headroom if ever needed: ~870 B unused rules + 6.1 KB comments in LOCKED 01-tokens/02-base (needs TODO 7-class ratification) | DONE |
| 18 | /trust/ editorial-break imagery: live referenced /assets/img/services/trust-editorial-*.webp — not in repo. Decorative section omitted at elevation; needs founder-supplied real imagery through the sharp pipeline | Founder asset |
| 19 | Two-mention ceiling vs /trust/ baseline content (~6 independence mentions — the page's topic): equity carried, ceiling exemption requested | Founder ruling |
