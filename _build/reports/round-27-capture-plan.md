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
