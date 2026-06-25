# FAQ STRATEGY — TechBrot (permanent · governs ALL FAQ work)
_Recorded 2026-06-25 (founder ruling). Read this before any FAQ change._

## WHY (research-grounded, June 2026)
- **Google killed FAQ rich results (2026-05-07).** The expandable SERP dropdowns
  are GONE. FAQPage schema is still valid and still parsed (Bing, Perplexity, AI
  crawlers) — but it is now an **AI-CITATION + on-page USER-CONVERSION** play,
  NOT a Google-SERP-display lever. Do not optimize FAQs for a dead rich result.
- **AI engines (AI Overviews, ChatGPT, Perplexity, Gemini, Claude) pull clean Q&A
  regardless of schema — the CONTENT is the active ingredient.** Schema helps
  non-Google parsers; the visible, useful answer is what earns the citation.
- **Only ~38% of AI-cited pages rank top-10 traditionally** → AI citation is
  winnable independent of traditional rank. This is TechBrot's edge: a new brand
  earns citations through genuine usefulness, not domain authority.

## STANDING FAQ RULES (apply to every page)
1. **Optimize for AI citation + user conversion**, not the dead Google FAQ rich
   result. Keep FAQPage schema valid and text-consistent with the visible Q&A.
2. **Q&A must be VISIBLE on the page** — never hidden, tabbed-away, or schema-only.
   AI trusts what users can see; schema-only Q&A is a citation risk.
3. **Answer-first · generic · genuinely useful · real-user phrasing.** Lead with
   the answer. Phrase questions the way a real owner would search/ask. Minimal
   "TechBrot" — a new brand earns citations through usefulness; self-reference
   does not. NO templated/stuffed/boilerplate bloat — it does NOT earn AI
   citations and drags page quality.
4. **Per-page-type FAQ caps** (count = distinct, non-duplicate questions):
   | page-type | cap | note |
   |---|---|---|
   | hub (t-hub) | 8–10 | currently UNDER → ADD best net-new questions |
   | money / BOFU (t-money) | 5–7 | |
   | prose (t-prose) | 5–8 | |
   | pillar (t-state-pillar) | 8–12 | |
   | location (t-location) | 6–8 | 4–6 only for genuinely thin city children |
   | comparison (t-comparison) | 5–7 | |
   | dedicated /faq/ hub pages | 15–30 | EXEMPT — they ARE the FAQ hub |
5. **PHONE-IN-FAQ (resolution, founder 2026-06-25 — OPTION C):** the goal is the
   phone in a citable answer where a user would want to call — NOT a mandatory new
   question. **Default = weave `(877) 751-5575` NATURALLY into the most call-relevant
   EXISTING answer** ("how do we start?", "what does it cost?", or a "how do I reach
   a ProAdvisor?" Q if one already exists). This is EQUITY-SAFE (content-equity checks
   baseline FAQ *question* text, not answers) and respects the cap with no baseline
   question removed. **Only ADD a dedicated call-intent question where there is cap
   room (under-cap page) AND no baseline question would be removed** (or the page is
   non-baseline) — judgment per page on which reads best. NEVER remove or reword a
   baseline FAQ *question* to fit a call-intent Q (that's a content-equity removal
   needing founder sign-off + an equity-exceptions.json entry).
   ⚠️ WHY THIS RULE EXISTS: a first attempt added call-intent *questions* by replacing
   the weakest at cap on baseline money pages → removed baseline FAQ questions → 26
   content-equity failures (reverted). Answers are free to rewrite; questions are
   equity-protected. PROCESS: for ALL FAQ work, run the content-equity check to
   COMPLETION and READ the verdict before committing — `--fast` includes content-equity
   but SKIPS the faq-schema/overlap/flat checks, so a FULL run (or targeted faq verify)
   is still required before flip.
6. **PHONE-IN-META:** phone number in meta descriptions (+ titles where natural)
   on **high-intent page types ONLY** — money (D1), triage (D7), pillars (D3),
   contact + file-review (F1). Click-to-call from search/mobile. NOT sitewide.
7. **Silo interlinks in answers** (stripTags-safe — visible HTML shows the link,
   schema text strips it). Strategic, genuinely-relevant links to child/sibling
   pages for topical authority. Relevant links only, never stuffed.

## SCHEMA-LINK SAFETY (confirmed)
FAQ answers render visible via `{{ item.a | safe }}`; the FAQPage `mainEntity`
text is built with `stripTags(i.a)` in each data file's `eleventyComputed.pageGraph`
→ in-answer `<a>` renders for users, strips to plain anchor-text in schema, so
FAQPage stays valid and Q&A==schema holds at the text level. (Before adding links
to a file, confirm its FAQPage builder uses the stripTags pattern — see TASK 5
35-file check.) `aiSummary` quick-answers feed a separate **QAPage** node, not
FAQPage — keep them distinct; do not duplicate them into the `faq` array.

## DE-DUP DISCIPLINE (de-dup ≠ cut)
Over-cap pages are typically over because a condensed quick-answer block was
authored INTO the `faq` array on top of the detailed questions (duplicate-content
drag). Removing duplicates is **equity-POSITIVE** — it is not cutting a ranking
asset. A genuine distinct question is a ranking asset and is preserved. When two
near-identical questions have DIFFERENT answers, diff the answers before cutting.

## EXECUTION ORDER (this initiative)
0. Record strategy (this file) · 1. De-dup (approved) · 2. Answer rewrite
(answer-first/generic + fold in 1–2 call-intent Q&As) · 3. t-hub additions ·
4. Phone-in-meta (high-intent types) · 5. Silo interlinks (after 35-file check).
Battery-gate + commit per task. Show founder before any equity-sensitive cut.
