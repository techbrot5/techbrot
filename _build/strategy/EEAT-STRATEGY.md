# E-E-A-T STRATEGY — TechBrot (standing · portable to any firm site)
_Recorded 2026-06-25 (founder ruling). The rule + the reasoning. Reusable on other
projects (e.g. Westgate)._

## WHY
Google and AI engines reward demonstrable Experience, Expertise, Authoritativeness,
Trust — and they increasingly cross-check it. The winning move for an honest firm is
NOT to manufacture signals (fake reviews, inflated counts, blanket "reviewed by an
expert" stamps) — those are fragile and, once detected, actively harmful. It is to
make REAL signals legible: name the real people who do the work where it's contextual,
scope authorship/review claims to where they're genuinely true, and let a single
accurate entity description repeated consistently do the corroboration that link-
stuffing can't. Honesty is the durable SEO strategy here, not a constraint on it.

## STANDING RULES
1. **`reviewedBy` is SCOPED, never blanket.** Attach the `reviewedBy` Person node only
   to pages a real named operator genuinely reviews or delivers — money/service pages
   (D1), state pillars/service-landings (D3/D5), and /about/ + /partners/ (where that
   operator is the subject). NEVER blanket-stamp it onto glossary, blog, tools, legal,
   generic-info, or help pages where no real review role exists — that's the fabrication
   Google penalises. (History: it was once on ~574 pages; scoped down to the honest set.)
2. **One real named individual, named where contextual.** David Westgate — a real Texas
   operator running Westgate Financial Services, a partner practice delivering TechBrot
   engagements, with a verifiable Intuit ProAdvisor credential — is the ONLY named
   person in visible content. He appears where it's contextually true: home (#home-team),
   the TX/NY pillars, and the /about/ + /partners/ operator blocks. The founder is NOT
   named in visible content — he exists ONLY in the global Person schema node as the
   E-E-A-T anchor. Everywhere else the voice is "the Certified QuickBooks ProAdvisor
   team" (founder-name-zero, enforced by the `founder-zero` battery check).
3. **No fabrication, ever.** No invented reviews, ratings, team members, case studies,
   certifications, or imagery. Only the 2 real Clutch reviews as review proof; NO
   `AggregateRating` until 5+ real reviews exist. Credentials stated only as held +
   verifiable. (Enforced by the schema audit: 0 AggregateRating/Review/rating fields.)
4. **Entity corroboration by CONSISTENT ACCURATE MENTION, not link volume.** The firm's
   identity (independent U.S. Certified QuickBooks ProAdvisor firm; Delaware C-Corp;
   not affiliated with Intuit) is described the SAME way across pages + the Organization
   schema (name, logo, url, contactPoint, sameAs socials, address) — that consistency is
   what AI engines use to resolve the entity. Outbound corroboration links are deliberate
   and minimal: exactly ONE westgatefs.com link (in /partners/ mission), the firm's real
   socials in `sameAs`, and honest authority citations (e.g. IRS/state .gov on tax pages,
   the Intuit ProAdvisor directory as a general citation) — never a pile of links to
   simulate authority. A second link to the same entity adds nothing; an accurate repeated
   description adds everything.
5. **Independence + credential honesty.** "Certified QuickBooks ProAdvisor" is stated as a
   credential the team HOLDS from Intuit — explicitly NOT affiliation, endorsement, or
   sponsorship. Never imply Intuit affiliation (Sheet-7 triage discipline).

## APPLIED (this initiative)
- David operator block authored onto /about/ (`#about-operator`) + /partners/
  (`#partners-operator`), each CONTEXTUAL (about = the named-operator network made
  concrete; partners = proof a partner already runs the model), not boilerplate copy.
  `reviewedBy: #david-westgate` added to both pages' WebPage/AboutPage nodes.
- /trust/ deliberately STAYS team-voice (founder-name-zero) — the firm's "why you won't
  find fake reviews here" essay + the 2 real Clutch reviews carry trust there without a
  named individual; reversing that was considered and rejected.
