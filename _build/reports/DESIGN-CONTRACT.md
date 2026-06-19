# DESIGN CONTRACT — the freeze line for the pre-flip visual re-architecture
**For:** Claude Design. **Read with:** `SECTION-SIGNATURE-MAP.md` (the type map) + the 25
`/dev/kitchen-sink-*/` reference pages (the complete component inventory per type).
**Authority:** this contract is binding; if anything here conflicts with a design idea, this wins.
The redesign is a complete re-skin of the LOOK — the MEANING and the schema-able STRUCTURE are frozen
because they are TechBrot's AI-citation + Google-ranking engine (six months of equity).

---

## ✅ FREE — Design owns all of this (break the current system freely)
- **All visuals**: palette, type scale, spacing, color, texture, imagery, iconography, motion.
- **All layout & composition**: grids, section rhythm, whitespace, hero treatments, breakpoints.
- **Components**: add new ones (hairlines, eyebrows, tables, callouts, whatever suits), remove or
  replace existing ones, restructure how any section is built. The current component classes are a
  starting point, not a constraint.
- **Per-type distinct UX** — this is encouraged: **hubs ≠ money pages ≠ guides ≠ locations.** Each
  page-type family (the 25) gets its own look and interaction model.
- **AI-summary block** and **final-CTA band** specifically: give them **genuinely different
  treatments per type** (a hub's AI-summary need not look like a money page's; a guide's final CTA
  need not look like a location's). Today they're near-identical everywhere — differentiate them.
- **Conversion treatment**: how `intake-form`, `call-block`, and `call-breakout` look and where they
  sit, per type. (You may unify or further differentiate the three seams — your call.)
- **Chrome**: header / mega-nav / footer / mobile call-bar styling.

## 🔒 FROZEN — must survive the redesign byte-for-byte (Code re-attaches schema to the new design)
1. **Every URL.** Not one slug changes. The redesign re-skins existing pages in place; no route moves,
   no page is dropped, new pages are additive only. (Full list: `live-urls-v5.txt`, 586 URLs.)
2. **All content / copy.** Every sentence, definition, list item, table value, FAQ answer, and number
   is content equity — carry it across unchanged. Elevate the presentation, never gut the substance.
   (No fabricated stats/reviews/prices/dates/clients/certifications may be ADDED, either.)
3. **All headings AND their exact wording — including question-form phrasing.** An H2 that reads
   "How much does a QuickBooks cleanup cost?" stays that text. Headings are ranking + AI-extraction
   anchors; reword nothing. You may restyle them; you may not rewrite them.
4. **The FAQ as a Q&A block whose VISIBLE text matches the FAQPage schema verbatim.** Every page's
   on-page FAQ question + answer text must remain present and must continue to match the JSON-LD
   `FAQPage` Q/A strings character-for-character. The FAQ must stay a real, crawlable Q&A block (not
   collapsed into prose, not image-only, not hidden from the initial DOM). Accordion interaction is
   fine; the answer text must exist in the served HTML.
5. **TL;DR / speakable content stays real selectable text** in the DOM (not baked into an image, not
   injected only by JS). The `speakable` nodes point at on-page text — keep that text present and
   selectable.
6. **Valid heading hierarchy.** Exactly one `<h1>` per page; no skipped levels (no h2→h4). Section
   headings keep their level. This is both a11y (axe-clean) and SEO structure.
7. **The JSON-LD graph** — `Service` / `FAQPage` / `DefinedTerm` / `DefinedTermSet` / `Breadcrumb` /
   `BlogPosting` / `Organization` / `Person` / `speakable`, and their `@id` cross-references. The
   meaning each node encodes is frozen. **Code re-attaches/regenerates the schema against the new
   markup after the redesign** — but the redesign must preserve the underlying structures schema is
   derived from (the heading a `Service.name` comes from, the Q/A the `FAQPage` mirrors, the term a
   `DefinedTerm` defines, the breadcrumb trail). Don't design in a way that erases a schema-bearing
   structure.

## How the two fit together (the working rule)
> **Design styles the LOOK. The meaning + the schema-able structure is frozen. Code re-attaches the
> schema to the new design.**

So: a kitchen-sink page shows you every section a type uses (the inventory). You decide how each
section looks and how the type's overall layout works. The text in those sections, the headings, the
FAQ Q&A, the TL;DR, and the heading hierarchy come across unchanged; Code then wires the JSON-LD back
onto your new markup. If a proposed design would require changing a heading's wording, dropping a FAQ
answer from the DOM, or collapsing the Q&A block — that's over the freeze line; flag it instead.

## Notes on the kitchen-sink reference set (what you're designing from)
- 25 pages at `/dev/kitchen-sink-<FAM>-<name>/` (preview only, noindex, never shipped). Each is a
  COMPOSITE: the union of every section variant its type uses, in canonical order, with real content.
  It is intentionally longer/denser than any single live page so no component is missed.
- Each page's top **devlabel box** states which family it is, how many live pages it represents, and
  which sub-shapes it covers — so one redesign of that page covers N live pages.
- They are built on the CURRENT component system on purpose — that's your "before." Redesign from it.
- Two existing realities to design around (detail in `SECTION-SIGNATURE-MAP.md`): (a) two body
  "languages" today — 177 prose pages (D2) vs 66 card/service pages (D1); (b) location children:
  CA/TX/FL/IL are partial-generated/consistent, NY is hand-authored — design the type once, Code
  re-aligns NY to it.
