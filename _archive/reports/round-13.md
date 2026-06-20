# ROUND 13 — mobile-nav fix · head migration · Cloudflare deploy (prep)

Date: 2026-06-13. Combined round. Parts A + B built + verified locally;
Part C is local-prep + a precise blocker list (the first live deploy needs
founder-held access — git/Cloudflare/DNS/GSC). STOP at the end.

Round-12 audit rulings applied: (1) "The Team" retarget SIGNED OFF; (2)
"Become a Partner" ADDED to ctaLexicon sanctioned (nav-card/secondary only,
not a primary btn) + logged; (3) /about/team/ stays excluded; (4) timeline
visual flagged for a Design micro-order; (5) CSS source soft-cap noted.

---

## (A) MOBILE NAV — header overflow fixed (global chrome) ✅ VERIFIED

**Root cause (confirmed):** at true phone widths the header flex row (logo +
full phone number + hamburger) overran the viewport and pushed the hamburger
off-screen. It was masked in DevTools/`--window-size` because Chrome headless
**clamps** the window to a minimum width — exactly the "DevTools hides it"
trap. A true 360 viewport (iframe) reproduced it.

**Fix (global, token-only):**
- Below 480px the phone collapses to its tappable icon — the number span is
  hidden and the link keeps its accessible name via a new `aria-label="Call
  TechBrot at (877) 751-5575"` (axe-clean). Frees ~110px so the hamburger
  always fits.
- `.site-header__actions{min-width:0}` lets the actions row shrink rather
  than push the hamburger out.
- `body{scrollbar-gutter:stable}` sitewide — header and body share one
  viewport reference; content width doesn't shift when the scrollbar appears.

**Verified at TRUE 360/390** (iframe capture, not `--window-size`): header =
logo + phone-icon + hamburger, all on-screen, no clipping
(`shots/r13/hdr-true360.png`, `hdr-true390.png`). Battery GREEN · axe ZERO ·
element counts unchanged (home 782, terms 378 — pure restyle, no DOM shift) ·
gate 53,611 B.

## (B) HEAD MIGRATION — entity graph + per-page heads ✅ DONE

**Entity graph (schemaGlobal.json) → expertise-first:**
- Organization / Brand / WebSite descriptions, slogans, alternateNames, image
  caption, keywords, and the network/CFO/payroll service descriptions all
  rewritten to remove "platform / network / vetted-partner" language →
  "independent firm of Certified QuickBooks ProAdvisors." Zero platform/network
  strings remain in the schema.
- **David Westgate removed from the Organization `employee` array** and his
  Person node reframed: jobTitle "Texas Operating Partner — Certified
  QuickBooks ProAdvisor", `worksFor` removed, description states he operates
  an independent Texas practice and is **not an employee**; the "reviewing
  authority for published content" claim was dropped (firm-level authorship).
- **Founder Person node KEPT as the off-page E-E-A-T anchor only:** name in
  schema (sanctioned), description rewritten to credentials/expertise (no
  platform-architecture / partner-network / AI-SEO language), `url` repointed
  from the non-existent `/about/team/` to `/about/`. Credentials set to the
  round-13 real list: **QBO Level 2, Desktop, Payroll, and Intuit Certified
  Bookkeeping Professional** — Enterprise removed from the founder, Advisory
  NOT claimed.
- **Credential reconciliation (FLAG — see open items):** Enterprise is real
  but held by David (his node now defines it); the founder doesn't claim it.
  So the FIRM/team aggregate is QBO L2 + Desktop + Enterprise (David) +
  Payroll + Bookkeeping (founder) — all real. The founder Person node claims
  only his four.
- Self-hosted fonts VERIFIED: all 6 woff2 in `00-fonts.css` exist on disk;
  the head preloads (fraunces-var, publicsans-var) match installed files.
  theme-color `#FBFAF7` confirmed.

**Per-page heads — all 13 built pages + 404 now pass the rules:** title ≤ 60
chars with `· TechBrot` brand suffix at the END; description ≤ 155; phone in
the meta on high-call-intent pages only (home, pricing, contact, file-review)
— not on legal/about/methodology/network/trust/partners. Titles reworked to
lead with the searched intent (e.g. home "QuickBooks ProAdvisor Bookkeeping &
Accounting · TechBrot"; pricing "Fixed-Fee Bookkeeping & QuickBooks Pricing ·
TechBrot"). Audit tool: `_build/scripts/head_audit.py` (0 violations).
**FAQPage/page schema intact** — content-equity + faq-schema-verbatim GREEN on
every page after the migration; founder name remains schema-only.

## (C) CLOUDFLARE PAGES DEPLOY — local prep done; BLOCKED on founder access

**Local prep completed (no credentials needed):**
- **`/sitemap.xml`** now generated — 13 real URLs (excludes /dev/, /404.html,
  itself). **`/robots.txt`** now generated and **fail-closed**: production =
  `Allow: /` + `Sitemap:` line; any non-production build = `Disallow: /`.
- **Prod env verified:** `npm run build:prod` writes 16 files from clean;
  built home has `robots: index, follow` (noindex OFF) and the GA4 gtag
  present. Preview build = noindex meta + no gtag + robots Disallow. Env
  fail-closed proven both ways (go-remote gate item 5 ✓; meta side of item 1
  ✓).
- **`.gitignore`** added (ignores node_modules/_site/_site-prod/_build/verify;
  tracks scripts/reports/baseline/battery/queue).

**Cloudflare Pages build settings (for the founder to enter):**
- Build command: `npm run build:prod`
- Output directory: `_site-prod`
- Environment variable: **`ENVIRONMENT=production`** (CRITICAL — flips
  noindex OFF, GA4 ON, excludes /dev/. Without it the build stays
  fail-closed/noindex, which is the safe default.)
- Node 18+.

**BLOCKERS — need founder action (per the brief, NOT guessed):**
1. **This project is NOT a git repository** and I hold no GitHub credentials.
   Founder: create/confirm the GitHub repo, then either (a) git init + commit
   + push so Cloudflare can connect it (continuous deploy), or (b) direct
   upload via Wrangler (needs a Cloudflare API token). The recommended
   `.gitignore` is ready; I can run the local `git init` + first commit on
   your go — I will NOT add a remote or push without your repo + credentials.
2. **Cloudflare account access** (founder-held): create the Pages project,
   connect the repo (or upload), set the build settings + `ENVIRONMENT`
   variable above.
3. **Domain DNS:** point `techbrot.com` at the Pages project (founder's DNS).
4. **Preview X-Robots-Tag header (go-remote gate item 1):** configure
   Cloudflare so PREVIEW deploys (`*.pages.dev`) send `X-Robots-Tag: noindex`
   (Pages preview settings / a Pages Function), while production omits it. The
   meta-level + robots.txt fail-closed is proven; the HEADER is a
   platform-config step only the account holder can set/verify.
5. **GA4 live check:** after deploy, confirm `G-K2Z8GK69Z5` fires on
   techbrot.com (Realtime).
6. **PageSpeed Insights (gate item 4):** run on the live homepage — the first
   calibrated perf number (local benchmarkIndex is uncalibrated).
7. **Live form test (gate item 3):** submit the form on the live domain with
   `TEST-MIGRATION-2026` in the name field; verify the row lands in the Apps
   Script sheet.
8. **GSC:** add/verify the techbrot.com property and submit
   `https://techbrot.com/sitemap.xml`.

**GO-REMOTE GATE STATUS:**
- Item 1 (fail-closed env w/ preview headers): meta + robots.txt ✓ locally;
  the X-Robots-Tag preview HEADER pending Cloudflare config (blocker 4).
- Item 2 (/quickbooks/file-review/ built): ✅ CLOSED (round 6).
- Item 3 (live form POST TEST-MIGRATION-2026): ⛔ needs live domain.
- Item 4 (PageSpeed on calibrated infra): ⛔ needs live URL.
- Item 5 (prod build from clean): ✅ proven (16 files).
- Item 6 (OG-image batch): ⏳ separate round, not in scope here.

---

## FILES TOUCHED
- `src/_data/ctaLexicon.json` — "Become a Partner" sanctioned (ruling 2).
- `src/_includes/partials/site-header.njk` — phone aria-label + number span class.
- `src/assets/css/04-chrome.css` — phone icon-only ≤480 + actions min-width:0.
- `src/assets/css/02-base.css` — body scrollbar-gutter:stable.
- `src/_data/schemaGlobal.json` — entity graph expertise-first rewrite.
- 13 page njk front-matters — titles + meta descriptions optimized.
- NEW `src/sitemap.njk`, `src/robots.njk`, `.gitignore`.
- NEW `_build/scripts/head_audit.py`.

## OPEN ITEMS / STOPPED AT
1. **Credential reconciliation — SIGN-OFF REQUESTED:** founder Person node now
   claims QBO L2 / Desktop / Payroll / **Intuit Certified Bookkeeping
   Professional** (Enterprise removed from the founder, Advisory not claimed,
   per round-13). Enterprise stays real via David's node. Please confirm: (a)
   the exact name of the bookkeeping credential ("Intuit Certified Bookkeeping
   Professional" assumed); (b) that David holds Enterprise (his node claims
   it). The round-12 visible cert lists on /about/ + /pricing/ still read
   "QBO L2, Desktop, Enterprise, Payroll" (accurate at team level) — say the
   word and I'll add "Bookkeeping" to those visible lists for consistency.
2. **Phone-in-meta on home:** home is a hub (not strictly BOFU/local) but the
   highest call-intent page — I kept the phone in its meta. Flag if you want
   it removed to follow "BOFU + local only" strictly.
3. **Part C is BLOCKED** on the 8 founder-action items above. The site is
   deploy-ready locally (prod build clean, env fail-closed, sitemap + robots
   live). On your go (repo + Cloudflare access), I can run `git init` + the
   first commit and walk the Pages setup; the account actions themselves are
   yours. STOPPED here for that.
