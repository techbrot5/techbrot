# Round 87 — BLOG PROOF (NEW article type)

**STOP-AND-WAIT — NEW-TYPE PROOF GLANCE.** The blog is the second NEW type this phase.
Per the contract I built the full proof (hub + 8 category pages + 8 seed posts), ran the
battery GREEN, and am stopping for your glance before any further fan-out.

## 1. WHAT I DID (17 pages + architecture)
- **`t-article` layout** (`src/_includes/layouts/t-article.njk`) — article chrome: breadcrumb, category-eyebrow hero, firm byline-block with published/updated dates (founder-name-zero), `.prose` body, optional AI-summary, FAQ, related, CTA band.
- **`src/_data/blogCategories.js`** — single source of truth for the 8 categories.
- **`src/blog/category.njk`** — ONE template that paginates over the categories to generate all **8 category pages** (`/blog/category/<slug>/`), each listing its posts via 11ty's auto-collection.
- **`src/blog/posts/posts.11tydata.js`** — shared post data + **centralized schema** (BlogPosting + WebPage + BreadcrumbList + FAQPage) computed once for every post; permalink/breadcrumb/categoryLabel computed from frontmatter.
- **8 seed posts** as markdown in `src/blog/posts/` (one per category), ~900–1,200 words each, 6 FAQ each, internal links into money pages, honest CTAs.
- **`/blog/` hub** (`src/blog/index.njk`) — latest posts + all categories; legacy hub hero (hero__motif, design-fidelity-correct).
- Registered all 17 URLs in the build queue.

## 2. PREVIEW URLS
**Hub:** https://techbrot-preview.pages.dev/blog/
**The 8 seed posts:**
- /blog/quickbooks-online-vs-desktop-2026/ — honest Desktop wind-down take
- /blog/5-signs-your-books-need-a-cleanup/ — links the cleanup money page + estimator
- /blog/bookkeeping-vs-accounting/ — evergreen, glossary-adjacent
- /blog/profit-vs-cash-flow/ — links cash-flow/CFO + the runway calculator
- /blog/w2-vs-1099-worker-classification/ — payroll, "general info not legal advice"
- /blog/get-your-books-ready-for-tax-season/ — **taxes, stays in-lane ("we don't file taxes")**
- /blog/will-ai-replace-your-bookkeeper/ — the honest "assisted, not replaced" take
- /blog/inside-the-techbrot-partner-program/ — **partner-spotlight done honestly (see §3)**
**Category example:** https://techbrot-preview.pages.dev/blog/category/quickbooks/

## 3. DECISIONS / THINKING (audit the honesty calls)
- **Tier = t-guide article** per ARCHITECTURE-TRUTH. Byline is firm-level ("the Certified QuickBooks ProAdvisor team") — **founder-name-zero**; author/publisher in schema are the #organization.
- **partner-spotlight, honestly.** A "spotlight" category invites fabrication. I did NOT invent a partner. The seed post is **about the partner program itself**, and explicitly promises that any future named spotlight runs only with that partner's permission and describes a real relationship. Flagging this so you can confirm the approach (and supply real partner stories when you want them).
- **taxes, in-lane.** TechBrot doesn't file taxes, so the taxes post is "how to get your books *ready* for tax season" — operational prep + clean CPA handoff, explicitly "not tax advice, your CPA files." No tax-prep drift.
- **AI post is genuinely honest**, not a hit piece or a hype piece — names where AI helps (matching, categorization, flagging) and where it's dangerous (confidently wrong on judgment calls), landing on "assisted, human-accountable."
- **No fabricated anything.** No stats, no review counts, no case studies, no invented partners. Where a post could have leaned on a number, it argues from mechanism instead. The research datasets are still N<20, so nothing original-data is cited.
- **DRY architecture** so fan-out is cheap: new posts are just a markdown file with frontmatter (the schema + chrome are automatic); new categories are one line in `blogCategories.js`.

## 4. VERIFICATION (battery GREEN)
- **BATTERY PASSED — all green.** url-set 551 ✓ (17 new registered) · cta-lexicon 16 labels ✓ · faq-flat 484 pages ✓ · design-fidelity ✓ (posts carry byline-block; categories carry a pull-quote; hub carries hero__motif) · manifest ✓ · variety ✓.
- **Schema validated:** every post emits BlogPosting + WebPage + BreadcrumbList + **FAQPage (6 Qs)**; categories emit CollectionPage + Breadcrumb; hub emits Blog + ItemList. All parse.
- **CSS:** 80,259B / 83,968B — **unchanged** (blog is pure templates/content, reused classes).
- **Two issues caught + fixed mid-build:** faq-min-6 flagged all 8 posts at 5 FAQ → added a 6th to each; `intent=partner` (nonexistent) → `partner-question`.
- **Honesty/founder-name-zero/not-Intuit** all clean. **Live axe/overflow @360/390/768 remains the founder-machine flip-gate.**

## 5. COUNT
COUNT: total pages live = 545 · re-skinned (142) + growth this phase = 403 · pages added THIS turn = [/blog/, /blog/category/{quickbooks,bookkeeping,accounting,payroll,taxes,business-finance,ai-and-accounting,partner-spotlight}/, /blog/quickbooks-online-vs-desktop-2026/, /blog/5-signs-your-books-need-a-cleanup/, /blog/bookkeeping-vs-accounting/, /blog/profit-vs-cash-flow/, /blog/w2-vs-1099-worker-classification/, /blog/get-your-books-ready-for-tax-season/, /blog/will-ai-replace-your-bookkeeper/, /blog/inside-the-techbrot-partner-program/] · blog seed cluster remaining = 0 (8/8 done) · next cluster = your call (more posts, or /vs/ + QB money pages backlog)

## 6. OPEN ITEMS / NEXT / STOP STATE
- **STOPPED for your glance** (NEW-type proof gate). Both NEW types this phase (tools + blog) are now proven.
- **One thing to confirm:** the partner-spotlight approach (§3) — program-explainer now, real named spotlights only with permission. OK?
- **On your word**, options next: (a) write more blog posts per category, (b) move to the backlog — /vs/ additions (7), QB money pages (~18), coined-frameworks hub (6), industry high-fee (6), or the pricing/partners/trust/legal/careers children. No blockers, no honesty calls outstanding.
