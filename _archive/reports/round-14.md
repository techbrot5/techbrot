# ROUND 14 — footer fix · credential display · nav-CTA verify · preview branch

Date: 2026-06-13. Parts A/B/C built + verified locally. Part D: the
preview-11ty branch is committed locally and verified fail-closed, but the
PUSH is BLOCKED (no git remote + no credentials — founder action).

═══════════════════════════════════════════════════════════════════════
## ⚠ PREVIEW URL — NOT LIVE YET (push is blocked on your GitHub access)
═══════════════════════════════════════════════════════════════════════
Cloudflare assigns the preview URL only AFTER the branch is pushed. Once you
push `preview-11ty`, the branch-alias URL will be (expected):

        https://preview-11ty.techbrot.pages.dev

(Cloudflare also mints a per-deploy hash URL `<hash>.techbrot.pages.dev`; the
branch alias above is the stable one.) **It does not exist until you run the
push below.** I could not create it — see Part D blocker.

**To make it live (run these — they need YOUR GitHub credentials):**
```
cd "C:/Users/MR KHAN/Documents/Github/TechBrot"
git remote add origin https://github.com/techbrot5/techbrot.git
git push -u origin preview-11ty
```
This pushes ONLY the new branch `preview-11ty`. It does NOT touch `main` /
techbrot.com. (The local branch has independent history — a new remote branch,
no fast-forward to main, no merge.)

**🛑 BEFORE/AT THE PUSH — the one critical safety setting:** in Cloudflare
Pages → project → Settings → Environment variables, make sure
`ENVIRONMENT=production` is set for the **Production** environment ONLY, NOT
for **Preview**. If Preview also gets `ENVIRONMENT=production`, the preview-11ty
deploy would build as production (index,follow + GA4) and Google could index
the incomplete new site — harming the old site's ranking. With Preview env
clean, the build is fail-closed (verified below).
═══════════════════════════════════════════════════════════════════════

## (A) FOOTER BRAND LANGUAGE ✅
`site.json` `tagline` (the only consumer is the global `site-footer__note`)
changed from "A modern accounting platform with vetted local partners" →
**"An independent firm of Certified QuickBooks ProAdvisors."** Verified in the
built footer.
- **Zero-drift:** home `ff2cc67c`→`ff2cc67c` and trust `1f2bd792`→`1f2bd792`
  IDENTICAL (text-only change = zero style drift). Pricing's hash shifted only
  because of the Part-B cert text widening the flex `trust-row` item (element
  count unchanged 596; the footer portion is style-neutral, proven by
  home/trust). Bundle byte-identical (53,611 B — no CSS touched). Battery +
  axe GREEN.

## (B) CREDENTIAL DISPLAY ✅
Added **Bookkeeping** to the visible cert lists — team aggregate, no individual
named:
- `/about/` credentials lede: "…QuickBooks Online (Level 2), Desktop,
  Enterprise, Payroll, and Bookkeeping certifications."
- `/pricing/` standards trust-row: "QBO L2, Desktop, Enterprise, Payroll,
  Bookkeeping."
Attribution stays "Certified QuickBooks ProAdvisor team" (firm-level). Aggregate
is honest: QBO L2 + Desktop + Payroll + Bookkeeping (founder) + Enterprise
(David / Texas operating partner). **content-equity GREEN** (about 48/0/24,
pricing 29/7/27) — cert text isn't a heading/FAQ/schema node. axe ZERO on both.

## (C) DESKTOP NAV CTA AT NARROW WIDTHS ✅ PASS
The header `.site-header__cta` ("Book the discovery call" btn) is hidden at
`≤920px` (`04-chrome.css`), which covers ≤480/390/360. Confirmed at TRUE 360
via iframe capture (`shots/r14/hdr360.png`): header = logo + phone-icon +
hamburger only; no CTA button, no overflow, hamburger on-screen. The two CTAs
visible in that shot are in the hero (page body), not the header. The drawer
footer carries the primary CTA. **No change needed.**

## (D) CLOUDFLARE PREVIEW BRANCH — local setup DONE, push BLOCKED
**Repo state at start:** NOT a git repository (confirmed — matches round 13).
No remote, no credentials on this machine.

**Done locally (safe, touches nothing remote):**
- `git init`; created branch **`preview-11ty`** (no local `main` carries any
  commit — the initial branch is unborn, so there is nothing of mine that
  could land on main).
- Committed the current working state: **commit `1981ef5`, 717 tracked files.**
  `.gitignore` excludes node_modules / _site / _site-prod / _build/verify /
  `.claude` (verified 0 staged from each).
- **Fail-closed env VERIFIED** (preview build, no ENVIRONMENT=production):
  home `robots: noindex, nofollow` · `/robots.txt` = `Disallow: /` · GA4 gtag
  ABSENT. So a preview deploy will not be indexed.
- `git remote -v` → none. I literally cannot reach techbrot5/techbrot or main.

**BLOCKER (push — founder action, per the brief's "do NOT guess credentials"):**
add the `origin` remote and `git push -u origin preview-11ty` with your GitHub
access (commands at the top). Cloudflare Pages then auto-creates the preview
deployment; report back the actual URL and I'll run PageSpeed / form POST / GA4
checks against it.

**Cloudflare Pages build settings — CORRECTED (one project-wide command + a
per-environment variable; Cloudflare uses ONE build command, not per-branch):**
- Build command: **`npm run build`**  (= `eleventy`; reads `ENVIRONMENT`)
- Output directory: **`_site`**
- `ENVIRONMENT=production` set on the **Production** environment ONLY.
- Result, automatically: **Production (main)** with the env var → index,follow
  + GA4 + dev pages excluded. **Preview (preview-11ty)** with NO env var →
  noindex + robots Disallow + no GA4 + (dev pages built but unindexed) =
  fail-closed. The output dir is `_site` for BOTH; the env var alone flips
  behavior (verified: `env.production` gates robots, GA4, and the dev-page
  `permalink:false`).
- **Do NOT set the build command to `npm run build:prod`** — that script
  hardcodes `ENVIRONMENT=production` (cross-env), which would force the PREVIEW
  to index. `build:prod`/`_site-prod` are local-testing conveniences only.

**Old site / main:** UNTOUCHED. The 11ty build exists only on the local
`preview-11ty` branch; nothing has been pushed. No merge to main until the
200-page launch sign-off.

---
## FILES TOUCHED
- `src/_data/site.json` — tagline (footer brand language).
- `src/about.njk`, `src/pricing.njk` — Bookkeeping added to visible cert lists.
- `.gitignore` — added `.claude/`.
- NEW local git repo on branch `preview-11ty` (commit 1981ef5).

## OPEN ITEMS / STOPPED AT
1. **PUSH BLOCKED** — needs your GitHub credentials (commands at top). This is
   the only thing between here and a live preview URL.
2. **Cloudflare env-var scoping is the critical safety item** — `ENVIRONMENT
   =production` must be Production-only, never Preview. Please confirm in the
   Pages settings before/at the push.
3. **Build settings (corrected above):** ONE command `npm run build`, output
   `_site`, with `ENVIRONMENT=production` on the Production environment only.
   This makes preview fail-closed and prod indexed with no per-branch command.
   Confirm your Pages project uses `npm run build` (NOT `build:prod`) so the
   preview can't accidentally index.
4. **Orphan history:** the local `preview-11ty` has independent history from
   the remote `main` (old site). That's fine for an isolated preview branch.
   If you'd rather branch from the existing repo's history, say so and I'll
   adjust before you push.
STOPPED here for the push (your access) + the env-scoping confirmation.
