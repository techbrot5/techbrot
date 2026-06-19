# KITCHEN-SINK SAMPLE SPEC — build instructions for agents (Design re-architecture prep)

You are building **synthetic kitchen-sink reference pages** under `/dev/` for the visual redesign.
Each page is the COMPLETE component inventory for ONE page-type family: every section variant that
family can use, in canonical order, with REAL composite content, on the CURRENT component system (the
"before" Design redesigns from). These are preview-only, noindex, never shipped, excluded from sitemap.
**This is prep — do NOT redesign or invent visual styling. Reproduce the existing system exactly.**

## The /dev/ mechanism (already wired — you just create one `.njk` per page)
- Create `src/dev/<slug>.njk`. `src/dev/dev.11tydata.js` auto-sets `permalink: /dev/<slug>/` on preview
  and `false` in production (fail-closed → never shipped). `layouts/base.njk` auto-emits
  `noindex,nofollow` whenever `env.production` is false (all preview /dev pages). `src/sitemap.njk`
  already excludes every `/dev/` URL. **You do not touch dev.11tydata.js, sitemap, robots, or base.**

## Source of truth for markup = the BUILT HTML
For exact current-system class names + real content, read the **rendered** page at
`_site/<page-path>/index.html` and copy the `<section>...</section>` blocks out of its `<main>`.
Do NOT copy from `src/*.njk` partials (those contain Nunjucks logic). The built HTML is the truth.
- Family membership (which live pages belong to a family): `_build/reports/_page-family-map.txt`.
- The component union per family + richest rep: `_build/reports/_signature-clusters.txt` and the
  canonical ordered section list per family in `_build/reports/SECTION-SIGNATURE-MAP.md` (read your
  family's cluster entry).

## Frontmatter template (every kitchen-sink page)
```
---json
{
  "layout": "layouts/<the family's tier layout>.njk",
  "slug": "<slug>",
  "title": "DEV kitchen-sink · <FAM code + name> · TechBrot",
  "description": "Preview-only complete component inventory for the <family> page type.",
  "breadcrumb": [
    { "name": "Home", "href": "/" },
    { "name": "<silo>", "href": "/<silo>/" },
    { "name": "<this page>" }
  ],
  "hero": { "eyebrow": "...", "heading": "...", "subheading": "...",
            "actions": [ {"label":"...","href":"tel:+18777515575","class":"btn--primary"},
                         {"label":"...","href":"#...","class":"btn--ghost"} ] },
  "inBrief": { "text": "..." },
  "ctaBand": { "eyebrow":"...", "heading":"...", "lede":"...",
               "actions":[ {"label":"...","tel":true,"class":"btn--primary"} ] }
}
---
```
- Pick `layout` to MATCH the family's real representative. Find it by grepping the rep's src file
  frontmatter (`grep -n layout src/<rep>.11tydata.js src/<rep>.njk`). The 7 layouts: `t-hub`, `t-bofu`,
  `t-mofu`, `t-guide`, `t-location`, `t-article`, `base`. (Layout renders breadcrumb→hero→in-brief→
  `{{content}}`→final-CTA; hero variants are driven by `heroFigure`/`heroLight`/`heroRule` flags —
  set the same flags the rep uses so the hero variant matches.)
- For families whose rep has NO hero or NO cta (legal, form endpoint), omit those keys and let the
  layout skip them (or use `base.njk` like `/contact/` does).

## Body = the UNION of every section variant, canonical order
The layout renders breadcrumb + hero + in-brief + final-CTA. YOUR body (the `{{content}}`) holds, in
this order, EVERY section the family uses:
`TL;DR → AI-summary/quick-5 → [ALL body section variants: every card type, every diagram, every table,
prose blocks, num/checks-list, fix-steps, call-breakout, deliver-card, proof-strip, stat-row,
pull-quote, related-grid, etc.] → (BOTH conversion seams if the family alternates: intake-form AND
call-block) → FAQ`.
- Take the union ACROSS the family's member pages — if section X appears on some members and Y on
  others, include BOTH. The page is intentionally longer than any single real page.
- Copy each section's real markup + real copy from the built HTML of a member page that has it.
- **Every `id` must be prefixed with this page's slug** (e.g. `id="<slug>-ai-summary"`,
  `aria-controls="<slug>-faq-a1"`) so ids stay unique. Update `aria-controls`/`id` pairs together.

## Label box — FIRST element in the body (so Design sees coverage)
Put this as the very first thing in the body, before TL;DR:
```html
<section class="section section--compact" id="<slug>-devlabel">
  <div class="container">
    <div style="border:2px dashed var(--color-accent,#841E1E);border-radius:8px;padding:var(--space-5);background:#FBF6F6">
      <p style="font-family:var(--font-mono);font-size:12px;letter-spacing:.04em;margin:0 0 .5rem">KITCHEN-SINK REFERENCE · NOT SHIPPED</p>
      <p style="margin:0"><strong>Family &lt;FAM code&gt; · &lt;name&gt;</strong> — complete component inventory.
      Represents <strong>&lt;N&gt; live pages</strong>: &lt;list the page-types / sub-shapes it covers&gt;.
      Sections below = the UNION of every variant this type uses, in canonical order.</p>
    </div>
  </div>
</section>
```
Fill `<FAM code>`, name, `<N>`, and the represented sub-shapes from your family's row in
SECTION-SIGNATURE-MAP.md.

## Hard constraints (honesty + system fidelity)
- Use ONLY existing component classes seen in the built HTML. Do NOT invent classes, add CSS files,
  or write new visual styling. Inline `style="..."` is allowed ONLY where the existing /dev samples
  already use it (layout nudges); don't restyle components.
- REAL content only — copy from live pages. No fabricated stats, reviews, prices, dates, clients,
  certifications. Reviews: copy the real Clutch review text already on live pages, OR keep the
  existing `PLACEHOLDER` marker pattern used in `src/dev/sample-t-bofu.njk`. No `AggregateRating`.
- Founder-name-zero (firm / "Certified ProAdvisor team" only). Keep not-Intuit / we-don't-file-taxes
  disclaimers that appear in the source. Phone token in tel: links = `+18777515575`.
- Do NOT add JSON-LD to these dev pages (schema is re-attached post-redesign; dev pages are visual
  references only). Omit any `<script type="application/ld+json">`.
- Do NOT modify any shipped page, partial, layout, data file, CSS, or config. Only create new
  `src/dev/kitchen-sink-*.njk` files.

## Per-page self-check before you finish
1. File at `src/dev/<slug>.njk`, valid `---json` frontmatter, layout matches the rep.
2. Body contains the label box + TL;DR + AI-summary + EVERY body variant in the union + FAQ.
3. Both conversion seams included where the family alternates them.
4. All ids slug-prefixed and unique; faq trigger/answer id pairs match.
5. Real composite content; no fabrication; no JSON-LD; no new classes.

Return: the list of files you created and one line per page noting which sections you included.
