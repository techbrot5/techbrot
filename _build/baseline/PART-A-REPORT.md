# Session 1 · Part A — Baseline Report (2026-06-12)

Status: COMPLETE — awaiting founder audit. baseline.json is FROZEN on approval.

## Deliverables (all in _build/baseline/)
- **baseline.json** — 139 page records: url, title, meta_description, canonical,
  robots, ordered H1–H3, parsed JSON-LD + entity types, FAQ Q/A sets, sorted
  internal hrefs, intent keys, form inventory, word_count.
- **reconciliation.json** — three-bucket reconciliation (repo / live sitemap /
  blueprint Sheet 1 URL contract).
- **form-contract.json** — exact live form payload shape (Apps Script must keep
  working unchanged).
- **intent-coverage.json** — per-page intent keys vs the live intent-map.js registry.
- **live-sitemap.xml, live-contact.js, live-intent-map.js, live-contact-intents.js**
  — archived from techbrot.com (these JS files are NOT in the repo).
- Scripts: extract_baseline.py, reconcile.py, intent_stats.py, samples.py.

## Totals
- 139 pages crawled from repo folders. 0 JSON-LD parse errors. 1,103 FAQ Q/A
  pairs across 132 pages. Word count min 950 / median 2,615 / max 7,351.
- Every page: exactly one H1, full Organization/ProfessionalService graph,
  BreadcrumbList. FAQPage on 132.

## Per-silo counts
| Silo | Pages |
|---|---|
| accounting | 47 |
| find-an-accountant | 43 |
| quickbooks | 32 |
| vs | 5 |
| legal | 4 |
| about | 3 |
| partners | 2 |
| contact / pricing / trust | 1 each |

## Reconciliation buckets
- **folder + sitemap: 93**
- **folder-only (live orphans, not in live sitemap): 46** — the entire
  new-york tree (39: pillar + cities + industries + service children) plus 7
  FAQ pages (/accounting/faq/, /accounting/advisory/faq/,
  /accounting/bookkeeping/faq/, /accounting/industries/faq/, /partners/faq/,
  /quickbooks/faq/, /quickbooks/payroll/faq/).
- **sheet-only (never built → build-new backlog): 331** Sheet 1 planned URLs
  (tax silo, blog, guides, switch silo, tools, remaining states…).
- Home (/) intentionally absent from repo — recorded as a founder decision,
  not a regression.

## ⚠ CRITICAL FLAG — repo is NOT a complete snapshot of the live site
24 URLs are live (all probed, all HTTP 200) but have no folder in this repo:
- `/` (home — documented intentional deletion; the only one on record)
- `/about/team/`, `/reviews/`, `/legal/` (hub)
- `/quickbooks/cleanup/complex|focused|standard/` (3 tier pages)
- `/find-an-accountant/` (hub) + 16 state pillars (alabama, arizona, colorado,
  georgia, indiana, maryland, massachusetts, michigan, minnesota, nevada,
  new-jersey, north-carolina, ohio, pennsylvania, virginia, washington)

Under risk hierarchy #1 (every live slug preserved forever) the rebuild cannot
ship from repo folders alone — these 23 non-home pages would 404.
**Founder decision required:** were these deleted intentionally (like home), or
should I crawl them from the live site into a baseline addendum before freeze?

Also: CLAUDE.md says find-an-accountant/ is "NOT in the known sitemap" — the
LIVE sitemap (112 URLs) does include /find-an-accountant/ + 20 state pillars.
The true sitemap orphans are the NY tree + the 7 FAQ pages.

## Blueprint staleness noted (no action taken)
- Sheet 1 marks /accounting/faq/ and /accounting/bookkeeping/faq/ as
  SPRINT/BACKLOG, but both are built in repo and live (200).
- Sheet 1 has no URL rows for state pillars/children (they live in Sheets 2–3
  as templates), so 46 repo URLs are "not in Sheet 1" by notation, not error.

## Intent coverage (new requirement, captured)
- Live registry (intent-map.js): **88 base keys** + `__state_pillar__` /
  `__state_advisory__` fallbacks + TB_LOOKUPS state/city/industry tables.
- **99 of 139 pages** carry intent keys (CTA `?intent=` params or hidden form
  values); **106 unique keys** in use. 40 pages have none (legal, about, faq
  hubs, etc.).
- 21 used keys absent from the registry: 10 are state/advisory slugs served
  by the fallback templates **by design** (california, florida, illinois,
  new-york, texas + -advisory). **11 are genuinely unmapped** and fall to
  default contact copy: qb-faq, quickbooks, quickbooks-migration-{complex,
  simple,standard}, quickbooks-plan, quickbooks-proadvisor,
  quickbooks-setup-{complex,essentials,standard}, techbrot-fit.
  → must be resolved when building _data/intents.json (Part C).

## Form contract (new requirement, captured — see form-contract.json)
- Endpoint: the Apps Script URL (in live contact.js; hardcoded as form action
  on the 5 state-pillar intake forms). Empty string = native POST fallback.
- Contact discovery form posts ONE flat JSON object via fetch,
  `Content-Type: text/plain;charset=utf-8`; 24 keys captured in order;
  `services` is the only array. Success = `ok` truthy or `result==='success'`.
- **Quirk to preserve:** the hidden `industry_intent` (data-meta="industry")
  always overwrites the visible industry select in the payload key `industry`
  — the user's selection is dropped. Ported as-is so Apps Script keeps working.
- State pillar forms POST natively (urlencoded) straight to Apps Script with
  a different field set — payload shape differs from the contact form.
- GA4 (G-K2Z8GK69Z5) loads sitewide, but **no lead_submit or phone_click
  events exist in current JS** — both are NEW work for Part C, not ports.

## Live on-page defects found (fix in rebuild, flag here for the record)
1. /about/network/ has NO canonical tag (template comment only).
2. Every page (139/139) ships a stray second `<title>BSS-1-11ty</title>`
   (Bootstrap Studio export artifact) — baseline records the first/real title.
3. Titles/descriptions duplicated in commented-out "global fallback" head
   blocks — comments correctly excluded from baseline.

## 3 sample records (abridged; full records in baseline.json)
1. **/legal/privacy-policy/** — "Privacy Policy · How TechBrot Handles Your
   Data · TechBrot" · canonical OK · 1 H1 / 17 H2 · 1,665 words · 0 FAQ ·
   schema: WebPage, Organization, ProfessionalService, Person, BreadcrumbList…
   · 33 internal hrefs · footer subscribe form only.
2. **/quickbooks/help/error-codes/h202/** — "QuickBooks Error H202: What It
   Means & How to Fix It · TechBrot" · 1 H1 / 15 H2 / 20 H3 · 2,958 words ·
   6 FAQ pairs · schema adds TechArticle + HowTo(+Step/Tool) + FAQPage +
   SoftwareApplication + Speakable · intent key qb-error-h202 · 41 hrefs.
3. **/find-an-accountant/new-york/cities/brooklyn/** — "Brooklyn Bookkeeper &
   QuickBooks Accountant · TechBrot" · 1 H1 / 16 H2 / 4 H3 · 2,163 words ·
   8 FAQ pairs · schema adds City + AdministrativeArea + FAQPage + Speakable ·
   intent key new-york · 53 internal hrefs.

## STOPPED per CLAUDE.md. Awaiting audit before Part B (design fetch).
Open decision for the founder:
1. The 23 live-but-not-in-repo URLs — intentional deletions or baseline
   addendum from live crawl?
