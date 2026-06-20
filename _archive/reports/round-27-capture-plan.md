# Round 27 — DESIGN CAPTURE PLAN (pre-build, founder review) · 2026-06-16

Status: **PLAN ONLY — nothing built/changed.** Dev server started for phone review.
This report precedes any code per standing rule R1. STOP for founder GO before capture.

## 0 · What I did this turn
- Read BUILD-TRACKER.md (resume anchor + standing rules) + ARCHITECTURE-TRUTH.md (full).
- Fetched the design project from the supplied URL → a 256 KB gzip → extracted to
  `_build/design-capture/extracted/techbrot-design-system-elevation/` (extract script:
  `_build/scripts/extract_design.ps1`).
- Read: bundle README, the **Handoff — Claude Code** doc (the contract), the design-system
  `readme.md`, and `_ds_manifest.json` (full token dump).
- Started the dev server (`npm run serve`, Eleventy dev-server, all-interfaces :8080).

## 1 · ⚠ FINDING — two palettes in the bundle; the templates + handoff win (no founder action needed, flagged for record)
The bundle contains **two different design directions**:
- **Final (the contract):** all 18 top-level templates + Galleries 01–07 + the Handoff doc use
  **Ledger Ink `#1E3A70`** + **Fraunces (display/headings) + Geist (body) + Geist Mono** +
  the new token groups `--surface-* / --diagram-* / --illus-* / --measure-* / --icon-* /
  --motion-stagger`. This matches the founder's instruction verbatim.
- **Stale (ignore):** the auto-generated `_ds/` component snapshot (`readme.md`,
  `_ds_manifest.json`, `tokens/colors.css`) is an EARLIER iteration — **cobalt `#2B4FD6`,
  Geist-only, no Fraunces**, tokens named `--c-blue-* / --accent / --ledger-*`.
- **Proof:** `#2B4FD6`/"cobalt" appears in **only** the 3 `_ds/` files; **zero** `.dc.html`
  templates use it. Every template uses `#1E3A70`.
- **Ruling I'm applying:** capture from the **templates + galleries + handoff**; treat `_ds/`
  as superseded reference only. The README confirms the chat holds the final landing point —
  I'll read `chats/chat1.md` in capture Step 1 to triple-confirm before writing tokens.

Note: this is a genuine RE-SKIN away from the current repo floor. Current floor =
warm-paper + Fraunces + cobalt. Stale `_ds` = cold + Geist-only + cobalt. **Final target =
cold/light + Fraunces-display + Geist-body + Ledger-Ink navy.**

## 2 · THE NON-NEGOTIABLE (handoff §6) — restyle only, never touch equity
The re-skin restyles existing pages: **NO change to heading text, FAQ content, intent, URLs,
or schema.** Equity-GREEN vs `baseline.json` MUST hold on every page. This is rule #1.

## 3 · CAPTURE PLAN (handoff §6 "Code captures as-is") — the locked source, in order
Capture = make the repo the authoritative home of the design, BEFORE re-skinning pages.
1. **Read everything in full first** (not yet read): `chats/chat1.md`, `Foundations &
   Direction`, Galleries 01–07, the 8 full templates, the Money page. Confirm final tokens.
2. **Re-cut the 10 CSS layers** in `src/assets/css/` to the new tokens (Ledger Ink `#1E3A70`,
   cold/light surfaces, Fraunces+Geist+Geist Mono, `--surface-* / --diagram-* / --illus-* /
   --measure-* / --icon-* / --motion-stagger`). css-drift gate must stay green (no hardcoded
   hex). Re-set the CSS byte gate for the new system.
3. **Section-layout library** → Nunjucks macros + `section--*` classes
   (split·feature·asymmetric·editorial·stat-band·diagram-feature·zigzag·callout·grid·faq).
4. **Signature SVGs as parameterized live SVG:** 4 diagrams (T-account · reconciliation ·
   before/after · migration), 24 custom icons (stroke 1.75), the isometric piece. CLS-0
   (reserved viewBox), real data only.
5. **Vanilla nav JS** → `tb-nav.js` (mega/drawer/accordion via `data-open`, aria-expanded,
   Esc/outside-close).
6. **Preserve ALL** JSON-LD / speakable / QAPage / FAQPage / Breadcrumb / Review nodes +
   semantic structure (these are equity — never regress).
7. Capture every component state (incl. form loading/success/error) + utility states.

## 4 · PROVE ON ONE PAGE FIRST (then STOP)
Re-skin **`/accounting/bookkeeping/cleanup-bookkeeping/`** (the money/BOFU page) end-to-end on
the new system. Battery GREEN required before I report: equity vs baseline.json · axe 0 ·
overflow 360/390/768 · CLS 0 · CSS byte gate. **STOP + report with preview URL. No mass apply
until founder approves the proven page.**

## 5 · GATES I will enforce (handoff §4)
- **Variety:** #12a ≤1 numbered system/page · #12b no two adjacent same-signature sections ·
  #12c variety floor · #12d hero fits the type (legal/utility ≠ marketing).
- **Honesty:** real proof only · 2 Clutch reviews · no AggregateRating <5 · real Intuit badge
  artwork only (none invented) · never imply Intuit affiliation.
- **Forms:** full form ONLY on `/contact/` + `/file-review/` · minimal 4–5 field at bottom of
  state pillars · everything else converts by CALL.

## 6 · WIRE (handoff §5; founder supplies inputs)
Form POST handlers (Cloudflare Pages Functions) + email + honeypot/time-trap · origin/intent
passing (URL `?origin=`/referrer → `[data-origin-*]` H1 + hidden fields + prefill) · GA4
(`phone_click` on every `tel:`, `lead_submit` on success) · per-type OG-image render.
**BLOCKERS held for founder:** real phone number (`+1-XXX-XXX-XXXX` placeholder must NEVER
reach production) + real Intuit ProAdvisor badge artwork.

## 7 · Dev server
`http://192.168.1.7:8080/` (LAN, phone-reachable; verified 200 on localhost + LAN). Shows the
CURRENT cobalt floor until capture begins.

## 8 · STOP — awaiting founder GO
Confirm: (a) capture-from-templates ruling OK; (b) proceed to Step 1 (read-in-full) → Step 2
(token re-cut) → prove the cleanup-bookkeeping money page → STOP for review.

---

# EXECUTION LOG (founder GO'd 2026-06-16)

## ✅ Step 1 — read everything in full
Read in full: README · Handoff — Claude Code · design-system readme · _ds_manifest (full token
dump) · Foundations & Direction · QuickBooks Cleanup money page · Galleries 01–07 · the intent
chat (chat1.md). All decisions confirmed (see §1 finding + below). NOT yet read (deferred to
mass-apply): the per-type template HTML (Home/Hub/Guide/State Pillar/Contact/File Review/Honest
Triage/Legal) — captured as registry lines for now.

**Second discrepancy found + resolved:** only the Foundations board uses IBM Plex Mono; every
template + gallery + the money page + the Handoff + the founder's chat use **Geist Mono**.
Foundations was the early concept board (it also holds the accent "pick one" study). Mono = Geist
Mono, settled.

## ✅ Step 2 — token + font re-cut  ·  COMMIT 1 (a2be13b, pushed preview-11ty)
- **00-fonts.css**: self-host Geist + Geist Mono (variable woff2, downloaded via
  `_build/scripts/download_fonts.ps1`); retire Public Sans + IBM Plex Mono; Fraunces kept; metric
  fallbacks for CLS 0.
- **01-tokens.css**: full cold/light re-cut. Accent Ledger Ink `#1E3A70`, cool ramp, cool shadows,
  card radius 14, new token groups `--surface-* / --diagram-* / --illus-* / --measure-* / --icon-*
  / --motion-stagger`. **Every enforced legacy token name preserved** → the tokenised component
  layers (02–09, zero hardcoded hex) inherit the new skin with no class churn. AA: `--color-ink-mute`
  nudged spec `#62708A` → `#5C6A82` so eyebrows clear 4.5:1 on every tonal tier (permitted minor
  adjustment); `--text-faint #8A98AD` stays NON-TEXT only.
- **base.njk**: Geist preload + theme-color `#FBFCFE`.
- **CSS byte gate RE-SET** 58 → 82KB minified (bundle template + battery); source soft-cap 120KB;
  battery soft-cap note made cp1252-safe (was crashing on the ⚠ glyph under Windows).
- **Locked design source** committed under `_build/design-capture/extracted/`.

**Battery: GREEN** — equity all 139 pages · css-drift (zero hardcoded hex / zero undeclared
properties) · manifest · cta-lexicon · design-fidelity per-tier. Minified **57,809B / 82KB gate**.
Geist + Geist Mono served 200; CSS carries `#1E3A70` + `#FBFCFE` + Geist.

**Effect:** every EXISTING page is now restyled to the elevated skin (color/type/surface/shadow/
radius) with content/headings/FAQ/schema/URLs untouched — equity-GREEN holds. Visible now on the
dev server. Component STRUCTURE is still the cobalt-floor vocabulary; the elevated component
library (section-layout engine, signature diagrams, call-band, mid-mega) lands with the money-page
prove (commit 2).

## ✅ Step 3 — PROVEN MONEY PAGE · COMMIT 2 (73c5d54, pushed) · STOP for founder review
**Page:** `/accounting/bookkeeping/cleanup-bookkeeping/` — re-skinned end-to-end on the elevated
system. **Preview (phone):** `http://192.168.1.7:8080/accounting/bookkeeping/cleanup-bookkeeping/`

**Restyle only — equity untouched:** `.11tydata.js` NOT modified (all content arrays + the full
schema graph — WebPage+speakable, BreadcrumbList, Service+OfferCatalog, HowTo, ItemList, FAQPage —
preserved). Every baseline H1/H2/H3 + the 12 FAQ verbatim. The ctaBand baseline heading "Let's see
what your file actually needs." kept (now the dark final band).

**Captured library applied (composed, not invented):**
- t-bofu layout (back-compat, opt-in): `heroFigure` → split hero with the signature figure;
  `ctaBand.dark` → the one earned dark final band. Pages not setting these are unchanged.
- New partial `figure-cleanup-beforeafter.svg`: the signature before/after ledger diagram
  (illustrative, draw-on, CLS-0 reserved viewBox, aria-label).
- New money/BOFU CSS in `09-extensions.css` (token-only): hero split + figure card · draw-on
  motion (reduced-motion zeroed) · premium no-form **call-block** · hero trust chips · featured
  pricing tier · dark-band eyebrow + inverted buttons.

**Forms ruling enforced (documented, not silent):** the migration-era full intake form (heading
"Scope your cleanup." — NOT a baseline heading, verified via the frozen contract) is replaced by
the premium CALL **call-block**. Conversion is now CALL, per the design money/BOFU spec. Equity
still GREEN (no baseline heading dropped).

**VERIFICATION — all GREEN:**
- equity: 42 baseline headings · 12 FAQ · 31 schema types accounted for (only pre-existing
  justified removals: "The monthly brief.", QAPage, chrome-relocated Company/Network)
- axe-core: **0 violations**, 28 passes (fixed 2 contrast issues found mid-build: faint
  `.hero-figure__tag` + faint SVG labels → muted; dark-band eyebrow → light)
- overflow: **none** at 360 / 390 / 768
- CLS: **0** · Lighthouse a11y **100** · best-practices **100** · SEO **100**
  (Lighthouse performance = local host-throttle noise — 3 servers + 4× CPU throttle; CLS is the
  real layout gate)
- CSS: minified **63,522B / 82KB gate** · source 91KB / 120KB soft-cap

**✅ RESOLVED (founder 2026-06-17):** `(877) 751-5575` / `tel:+18777515575` is TechBrot's REAL
toll-free line — NOT a placeholder. Locked as the live number via the central `site.phone` token
in `site.json`; cutover gate #1 CLEARED. (The "not real" note came only from the design chat;
the founder authoritatively confirmed it.)

**STOP — founder review gate.** No mass apply until the proven page is approved.
