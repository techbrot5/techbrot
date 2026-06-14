# Cloudflare deploy fix — root cause + fix (read me first)

## 🔴 ROUND 18 LIVE-DEPLOY DIAGNOSIS — THE REAL BLOCKER (dashboard config)
Pushed `preview-11ty` (`21b6446`, carries the CF CSS fix `7cc89e2`). Cloudflare
reported **✅ Deploy successful**, deployment URL **https://938f0c02.techbrot.pages.dev**
(project domain is `techbrot.pages.dev`, NOT `techbrot5`). Ran the three gates:
- **Artifact:** `/assets/css/site.min.css` → **HTTP/1.1 404 Not Found**. ❌
- **Wiring:** `/` → **404**; `/accounting/` → 200 but serves the **OLD repo page**,
  linking `../assets/bootstrap/css/bootstrap.min.css`, `../assets/css/04-pages.css`,
  `../assets/css/01-tokens.css` — the legacy Bootstrap CSS, NOT `/assets/css/site.min.css`. ❌
- **Visual:** the served pages are the OLD Bootstrap design (home 404s) — not the
  cobalt `_site`. ❌

**Root cause (proven): Cloudflare is publishing the repository ROOT, not `_site`.**
The repo root is the old Bootstrap site — it has no `index.html` (home deleted →
`/` 404s), no `site.min.css` (→ CSS 404s), and old per-route folders that still
serve with legacy CSS (→ `/accounting/` shows the old page). This is NOT the build
(the fresh-clone `npm ci --omit=dev && npm run build` produces a complete, styled
`_site`, and that build is now on origin). It is a **build-output-directory
misconfiguration in the Cloudflare Pages dashboard.**

### THE FIX (founder — Cloudflare dashboard; I have no dashboard access)
Cloudflare → Pages → project **techbrot** → **Settings → Builds & deployments → Build configuration**:
- **Build command:** `npm run build`
- **Build output directory:** **`_site`**  ← almost certainly blank or `/` right now;
  that is what makes CF publish the repo root. Set it to `_site`.
- **Root directory:** `/` (leave default — the build runs at repo root and emits `_site`).
- **Environment variable** `ENVIRONMENT=production` on the **Production** deployment only.
Then **Retry deployment** (or push) and re-run the three gates against the new
`<hash>.techbrot.pages.dev`. With output dir = `_site`, `/` and
`/assets/css/site.min.css` will both 200 and pages render cobalt.

(Tip to retrieve the deploy URL without the dashboard: the GitHub **check-runs**
API for the pushed commit carries it — `https://api.github.com/repos/techbrot5/techbrot/commits/<sha>/check-runs`,
"Cloudflare Pages" check → Preview URL.)

---


Two separate Cloudflare failures were diagnosed and fixed. Both are
**build-pipeline only — no page content changed.** Commits are on `preview-11ty`.

---

## ⚠ ACTION FOR YOU: push, then redeploy
Unpushed commits on `preview-11ty` (origin is at `ced7855`):
- **`7cc89e2`** — the CSS-404 fix (first-class CSS template). **This is the one
  that matters for the unstyled preview.**
- `baaea7d` — round-17 page 1 (/accounting/payroll-management/).

**Push both, then let Cloudflare redeploy.** If the preview still 404s on the CSS
after this deploy, it is no longer a repo problem — see the CF-dashboard checklist
at the bottom.

---

## Problem 2 (the current one): /assets/css/site.min.css → 404, pages unstyled

### How I diagnosed it (no guessing)
1. **Traced the CSS build path.** `site.min.css` was created by a side-effect
   `fs.writeFileSync(...)` inside an `eleventy.before` hook in `eleventy.config.cjs`
   — i.e. written **directly to the output dir, outside Eleventy's own write
   pipeline**. It is part of `npm run build` (not a separate script).
2. **Checked the source is committed.** All 10 `src/assets/css/*.css` files are
   tracked in git (`git ls-files` confirms). So the input isn't missing.
3. **Fresh-clone, CF-exact test** (the decisive one — my earlier test was flawed
   because `_site` was locked and never truly cold). `git clone` of `preview-11ty`
   to a temp dir (committed files only, cold — no `_site`), then
   `npm ci --omit=dev` (exactly what Cloudflare runs), then `npm run build`:
   **the build produced `site.min.css` (53,773 B) fine.** So the SOURCE and the
   BUILD are correct.

### Root cause
The build is correct; the fragile part was the **mechanism**. A file written by a
hook straight into the output dir is **not tracked by Eleventy as build output**.
That is the one non-canonical surface that can be dropped from a deployed
artifact on CI even when the HTML (real Eleventy output) deploys — which is
exactly the symptom: pages load, only `site.min.css` is missing.

### The fix (`7cc89e2`)
Moved the bundle into a **first-class Eleventy template**:
`src/assets/css/site.min.css.11ty.js` (`permalink: /assets/css/site.min.css`).
It now flows through Eleventy's normal writer — the build log shows
`[11ty] Writing _site/assets/css/site.min.css from ...site.min.css.11ty.js` — so
the bundle is a tracked output that is always in `_site` and always deployed.
Removed the old `eleventy.before` hook and the now-dead `CSS_ORDER`/budget
constants from `eleventy.config.cjs`. **Same esbuild minify, same 58KB gate, same
BOM strip, byte-identical 53,773 B output.**

### Verified
Fresh cold clone of `7cc89e2` → `npm ci --omit=dev` → `npm run build` →
`site.min.css` written by Eleventy's tracked writer (53,773 B, valid CSS). Then
`npx serve _site` (plain static — the true CF proxy): `/`→200,
`/assets/css/site.min.css`→**200, 53,773 B, `text/css`**, pages→200. Battery
css-drift + css-bytes GREEN.

### Honest caveat
The CF failure was **not reproducible locally** — on Windows the old hook built
the CSS fine in the fresh clone too. So I cannot prove from here that the hook was
*the* cause; I can prove the fix removes the one CI-fragile surface and makes the
CSS a guaranteed-deployed Eleventy output. The next CF deploy of `7cc89e2` is the
confirmation. If it still 404s, it's CF-side (checklist below).

---

## Problem 1 (earlier, already pushed in `ced7855`, commit `6d30375`)
Pages were unstyled AND home didn't load. Root cause: all build tools
(`@11ty/eleventy`, `@11ty/eleventy-img`, `esbuild`, `cross-env`) were in
`devDependencies`. When CF's prod env omits devDependencies (`NODE_ENV=production`),
`eleventy` isn't installed → `npm run build` fails → no `_site` → CF serves the
repo root (no home — it was deleted; no `site.min.css` — old `assets/` has only
the legacy Bootstrap CSS). Fix: moved those four to `dependencies` (`axe-core`
stays devDependency). This is why pages now load; Problem 2 (CSS) remained.

---

## If the CSS still 404s after pushing `7cc89e2` — CF dashboard checklist
The repo is proven correct, so anything left is Cloudflare configuration:
1. **Build command** = `npm run build` (exactly).
2. **Build output directory** = `_site`.
3. **Retry deployment / clear build cache** — a stale cached build can persist.
4. **Env vars**: `ENVIRONMENT=production` on the **Production** deployment only
   (never Preview). Do not set `TB_OUTDIR`.
5. Read the **CF build log** for the failing deploy — confirm it shows
   `[css] minified 53773B ... → assets/css/site.min.css (first-class template)`
   and `Writing _site/assets/css/site.min.css`. If that line is present, the file
   is built and the issue is output-dir/cache; if absent, paste the log.
