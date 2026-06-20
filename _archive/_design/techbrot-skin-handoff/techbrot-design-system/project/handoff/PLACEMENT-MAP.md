# COMPONENT → TIER PLACEMENT MAP

The assembly rules: which component ships on which tier, and where in the
sequence. ✓ = ships by rule · opt = page-by-page call · — = never.
Tier sequences themselves are LOCKED architecture (build repo); this maps the
new system's components onto them.

| Component (classes) | T-HUB | T-LOCATION | T-MOFU | T-GUIDE | T-BOFU | Slot / rule |
|---|---|---|---|---|---|---|
| Dark hero + full motif (`hero--hub/--location`, `hero__motif`) | ✓ | ✓ (state contour ledger) | — | — | — | The only dark band on the page |
| Compact hero (`hero--compact`) | — | — | ✓ | ✓ | ✓ | Paper hero |
| Gapped-rule hero mark (`hero--rule`) | — | — | opt | — | ✓ | BOFU signature; MOFU only when no motif row |
| Single-row motif (`cta-band__motif`) | ✓ | ✓ | ✓ | opt | ✓ | cta-band punctuation; MOFU may also use under hero |
| Proof strip (`proof-strip` / `--dark`) | opt | ✓ | opt | — | ✓ | Directly under money-page heroes; dark variant on hub/location |
| **Sticky call bar** (`call-bar`, `has-call-bar`) | — | ✓ | ✓ | — | ✓ | Mobile ≤919px, service/conversion tiers only; never on guides/legal |
| Breadcrumb (`breadcrumb`) | — | ✓ | ✓ | ✓ | ✓ | Every page below home; BreadcrumbList schema pairs |
| in-brief / TL;DR (`in-brief`, `tldr`) | ✓ | ✓ | ✓ | ✓ | ✓ | TL;DR sits on the tier surface; speakable-paired |
| Quick-5 (`ai-summary--ruled`) | ✓ | ✓ | ✓ | ✓ | ✓ | Directly below TL;DR; exactly 5; out of FAQPage |
| Buyer-signal cards (`buyer-card`) | ✓ | opt | ✓ | — | — | Routing sections |
| vs-table + furniture (`vs-table`, `verdict`, `choose-grid`) | — | — | ✓ | opt | — | Comparison pages; verdict after table |
| Problem pattern (`error-badge`, `fix-steps`, `call-breakout`) | — | — | ✓ (problem silo) | — | opt | Symptom/error pages (~40); breakout before form/CTA |
| Calculator family (`tool-panel`, `radio-tiles`, `stepper`, `tool-result`, `tool-cta`) | — | — | ✓ (tool pages) | opt | opt | Result block always hands off to file-review |
| Sticky TOC (`toc`, `guide-grid`) | — | — | — | ✓ | — | ≥920px sticky left column; static box on mobile |
| Firm byline (`byline-block`) + reviewed meta (`meta-reviewed`) | — | — | ✓ | ✓ | — | Top of article (byline) + foot (meta); research pages both |
| Research dress (`stat-cite`, `fig-caption`, `dataset-header`) | — | — | — | ✓ (research) | — | Dataset/research pages; stat-cite max 2/page |
| Editorial listing (`post-card`, `filter-chips`, `pagination`) | — | — | — | ✓ (index) | — | /resources/ index template |
| Trust-row (`trust-row`) | ✓ | ✓ | opt | — | ✓ | Before FAQ (hub) or before form (bofu) |
| Review cards (`review-card`) | opt | opt | — | — | ✓ | Verified quotes only; max 2 |
| Intake form (`intake-*`) | — | ✓ (state variant) | — | — | ✓ (full 24-key) | BOFU = full contract; location = state contract |
| phone-cta (`phone-cta`) | opt | ✓ | opt | — | ✓ | Breakouts, alt-channels, drawer foot |
| FAQ accordion (`faq__*`) | ✓ | ✓ | ✓ | ✓ | ✓ | 6–8 buyer-objection Q/As; FAQPage verbatim; zero quick-5 overlap |
| cta-band (`section--cta-band--light` + tier class) | ✓ hub tint | ✓ hub tint | ✓ guide tint | ✓ guide tint | ✓ bofu tint | Light variant + tier surface (ruling B table); dark variant marketing-only |
| Disclosure (`disclosure`, footer variant) | ✓ | ✓ | ✓ | ✓ | ✓ | Two-mention ceiling; chrome exempt |
| Chrome full (`site-header`, `site-footer`) | ✓ | ✓ | ✓ | ✓ | — | — |
| Chrome minimal (`site-header--minimal`, `site-footer--minimal`) | — | — | — | — | ✓ | No nav = no funnel leakage |
| Stat / pull-quote (`stat-row`, `pull-quote`) | ✓ | opt | opt | ✓ | — | The rich-feel layer; one pull-quote per page |
| Flow diagram (`flow`) | ✓ | — | opt | opt | ✓ | Process strips |
| Skip-link + focus states | ✓ | ✓ | ✓ | ✓ | ✓ | Global (03-chrome / tokens) |
| 404 (`rule-mark`, silo list) | — | — | — | — | — | Single global page (`pages/404.html`) |
| Motion layer (04) | ✓ | ✓ | ✓ | ✓ | ✓ | Global; view-transition opt-in |

**Surface table (standing rule, restated):** T-HUB + T-LOCATION → `--surface-tier-hub`
(mist `#F6F4EF`) · T-MOFU + T-GUIDE → `--surface-tier-guide` (warm `#F4F2EC`) ·
T-BOFU → `--surface-tier-bofu` (deep `#EDEAE1`). TL;DR + final cta-band sit on
the tier surface.
