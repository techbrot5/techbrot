# META STRATEGY — TechBrot (standing · portable to any SEO site)
_Recorded 2026-06-25 (founder ruling). The `<title>` + `<meta description>` rule and
the reasoning. Reusable on other projects (e.g. Westgate)._

## WHY
The title + meta description are the page's SERP/AI-result billboard. Two hard
constraints decide everything:
1. **Truncation** — Google shows ~60 chars of title (~600px) and ~150–160 of the
   description; anything past that is invisible. So the message AND the keyword must
   live in the front.
2. **Keyword placement** — early words carry more ranking + relevance weight, and a
   keyword in the title/description gets **bolded** in the SERP (CTR lift). So both
   fields must LEAD with the term the page targets, not bury it behind boilerplate.
Duplicate titles/descriptions are a ranking drag (Google can't tell pages apart), so
every page's pair must be unique.

## STANDING RULES (apply to every page)
1. **TITLE — keyword-LED, ≤ 60 displayed chars, brand-if-it-fits, unique.**
   - Front-load the page's primary keyword/intent (the exact term the page is about).
     Non-negotiable: the title MUST contain its target keyword, in the first words.
   - Append the brand suffix ` · TechBrot` ONLY if the whole title stays ≤ 60 displayed
     chars. If keyword + brand > 60 → **DROP the brand, keep the full keyword.** NEVER
     shorten/sacrifice the keyword to fit the brand.
   - Result is rule-driven, NOT a page-type split: keyword-heavy BOFU titles naturally
     shed the brand (no room); shorter informational/blog/tool titles keep it.
   - UNIQUE sitewide. Separator is the established `·` (middot) — keep it.
2. **DESCRIPTION — value+keyword led, ≤ 160 displayed chars, unique.**
   - Lead with the value/answer and the keyword naturally (SERP term-bolding + CTR).
   - ≤ 160 displayed chars (so nothing the user needs is truncated).
   - Brand is OPTIONAL (usefulness > self-reference).
   - UNIQUE per page.
3. **PHONE in the description on HIGH-INTENT types only** — money (D1) · triage (D7) ·
   state pillars (D3) · contact + file-review (F1). `(877) 751-5575`, natural, within
   the ≤160 so it survives truncation. NOT sitewide (bloat on info pages).
4. **Measure DISPLAYED length, not source length.** `{{ title }}`/`{{ description }}`
   auto-escape, so source `&amp;` is 5 chars but DISPLAYS as 1 (`&`). Always
   HTML-unescape before counting. (And per [[meta-fields-autoescape]], author meta with
   literal Unicode — never HTML entities — or they render literally.)
5. **No entities / no mojibake** in either field — enforced by the `meta-hygiene`
   battery check; uniqueness enforced by the `meta-unique` battery check.

## METHOD (the rewrite, per page-type waves)
Authored per page, NOT bulk-stamped: ground each title/description in the page's real
H1/intro/keyword; vary phrasing; keep every pair unique. Battery-gate + commit per wave.
Highest-value clusters first. Scope when recorded: 263 titles >60 + 511 descriptions
>160 (the 52 high-intent descriptions were already tightened in the TASK-4 phone pass;
6 high-intent titles done in wave 1).
