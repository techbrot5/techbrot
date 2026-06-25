# PRE-PUBLISH AUDIT — TechBrot (standing · run before EVERY publish)
_Recorded 2026-06-25 (founder ruling). The technical-completeness gate that makes
the site look finished to Google, AI engines, and users. Run this whole checklist
before any production publish — not just the first flip. Once the domain is live,
every push is production, so this is a per-push gate._

Order: encoding (B) first, then head/meta (C), schema (D), links/hygiene (E).
REPORT findings before mass-fixing anything content-sensitive; mechanical fixes
(entities, canonicals, missing alt) may proceed directly. Battery-gate + commit
per task. Several of these are now AUTOMATED in `_build/battery/run_battery.py`
(noted **[battery]**); the rest are run-and-eyeball with the helper scripts.

## A. STANDING — this checklist is the deliverable
Keep this file + the BUILD-TRACKER "PRE-PUBLISH CHECKLIST" block in sync. Add new
checks here as defects are discovered (this file grows; never shrinks silently).

## B. ENCODING / MOJIBAKE  **[battery: meta-hygiene]**
- No CP1252↔UTF-8 mojibake anywhere rendered: `â€"`/`â€™`/`â€œ`/`Â§`/`Â·`/`Ã©` etc.
  in title, description, or body. Root cause = a file saved through a bad
  encoding round-trip. Fix at SOURCE with `_build/scripts/fix_mojibake.py`
  (derives keys at runtime; content-equity gated; render-checked).
- No literal HTML entities in the AUTO-ESCAPED meta fields. `<title>`/`<meta
  description>` render via `{{ }}` WITHOUT `|safe`, so `&middot;`/`&mdash;`/
  `&rsquo;`/`&amp;X` double-escape and show the literal "&amp;middot;" text in
  the tab/SERP. Author meta with literal Unicode (`·` `—` `’`); a literal `&` is
  fine. Fix with `_build/scripts/fix_meta_entities.py`. See memory
  [[meta-fields-autoescape]]. (Body fields render via `|safe` — entities OK there.)
- The `meta-hygiene` battery check fails the build if either reappears.

## C. <head> / META (every page)
- **TITLE** (standing rule, founder 2026-06-25):
  1. **LEAD with the page's primary keyword / intent** — the term the page targets,
     in the FIRST words (early words rank). Non-negotiable: every title must contain
     the keyword/intent it targets.
  2. **Brand suffix (` · TechBrot`) ONLY if the total stays ≤ 60 chars** (~600px,
     SERP-truncation-safe). If keyword + brand > 60 → **DROP the brand, keep the full
     keyword.** NEVER sacrifice keyword for brand. (So keyword-heavy BOFU titles
     naturally shed the brand; shorter informational/blog/tool titles keep it —
     keyword priority + the 60-char limit decide it, NOT a page-type split.)
  3. **UNIQUE sitewide** — no duplicate titles (duplicate meta is a ranking drag).
  4. No entities/mojibake (B). [Separator is the established `·`; revisit only on
     explicit founder call.]
- **META DESCRIPTION** (standing rule): LEAD with the value/answer + the keyword
  naturally (SERP term-bolding + CTR) · ≤ 160 chars (truncation-safe) · brand
  OPTIONAL (usefulness > self-reference) · UNIQUE per page · no entities/mojibake ·
  phone `(877) 751-5575` on high-intent types (t-money / t-triage / t-state-pillar /
  contact / file-review — DONE).
- **CANONICAL**: present + SELF-REFERENCING on every page (canonical href ==
  the page's own absolute https://techbrot.com URL). A wrong canonical can
  de-index the page — critical.
- **OG / TWITTER**: `og:title` `og:description` `og:image` + a twitter card,
  present + correct (social + some AI previews pull these).
- **ROBOTS (CRITICAL)**: production output must NOT carry `noindex`. Env is
  fail-closed — production ONLY when `ENVIRONMENT='production'`; anything else =
  noindex + X-Robots-Tag + no analytics. Before flip, prove production headers
  carry NO noindex and preview still does. No stray per-page noindex on prod.
- **lang / charset / viewport**: `<html lang="en-US">`, `<meta charset="utf-8">`,
  viewport present on every page.

## D. SCHEMA / STRUCTURED DATA (every page)
- Every page emits VALID JSON-LD (parses clean; no broken nodes). JSON-LD always
  via `dump|safe`.
- Schema MATCHES visible content (Google: structured data must reflect on-page
  content or it's ignored/penalised). FAQPage `mainEntity` == the visible FAQ
  (the `faq-schema-verbatim` battery check enforces this where FAQs render).
- Right schema per page-type: `Organization` sitewide · `LocalBusiness`/
  `ProfessionalService` where relevant · `Service` on money pages · `FAQPage`
  where FAQs exist · `BreadcrumbList` for nav · `Article` on blog · `Person`
  (David) ONLY where honest (scoped — money/pillar/service/about/partners).
- No broken `@id` references (e.g. `reviewedBy` → a `#david-westgate` Person node
  that must exist; isPartOf/about/publisher resolve).
- NO fabricated schema: no `AggregateRating`, no fake `reviewCount`/`Review` —
  only the 2 real Clutch reviews as content; no AggregateRating until 5+ real.
  Nothing implying Intuit affiliation.

## E. LINKS / TECHNICAL HYGIENE
- No broken internal links / 404s (**[battery: links]** resolves every internal
  href + same-page anchors against the URL contract).
- No orphan pages (every production page reachable via ≥1 internal link).
- Images: `alt` present on every `<img>`; no broken image refs; the David photo
  exists and is not over-compressed.
- Heading hierarchy: exactly one `<h1>` per page; logical H2/H3, no skipped
  levels (matters for AI extraction + a11y).
- `sitemap.xml`: present · accurate · every production URL · no `/dev/`/noindex.
- `robots.txt`: present · allows production · blocks dev/preview as needed ·
  references the sitemap.
- CSS byte gate **[battery: css-bytes]** · URL-set == contract **[battery:
  url-set]** · founder-name-zero **[battery: founder-zero]** · CTA lexicon
  **[battery: cta-lexicon]** · class manifest **[battery: manifest]** ·
  layout-v2 + old-kit **[battery]**.

## FLIP-SPECIFIC (one-time, at the actual production cutover)
- Prove `ENVIRONMENT='production'` output has NO noindex + analytics ON; preview
  still noindex (fail-closed). · Baseline-vs-prod URL recrawl == contract. ·
  Redirect map for any legacy slugs (none should change — additive only). ·
  Live axe + overflow (360/390/768) on the founder machine.
