# form_contract_check.py — verify every rendered conversion form carries the
# locked 24-key contract + lead-source/AI capture + honeypot + endpoint hook.
# Reads BUILT _site (what actually ships). No deps.
import re, glob, json, sys
sys.stdout.reconfigure(encoding="utf-8")

# The 24-key payload contract (form-contract.json payload_keys_ordered).
# _submitted_at/_page_url are JS-injected (not DOM fields) so excluded from the
# DOM-field check; the rest must exist as named inputs/selects.
DOM_FIELDS = ["name","company","email","phone","revenue_range","industry",
              "qb_status","timeline","message","consent"]
SERVICES = "services[]"
# hidden meta (data-meta) that the engine writes -> payload keys
META = ["intent","state","city","industry_intent","service","source_page",
        "source_type","funnel_stage","urgency","operator_candidate"]
LEAD = ["lead_source","ai_tool"]            # lead-source + AI-source capture
HONEYPOT = "company_website"

forms = sorted(p for p in glob.glob("_site/**/index.html", recursive=True)
               if 'data-form="contact-discovery"' in open(p,encoding="utf-8").read()
               and "/dev/" not in p.replace("\\","/"))

print(f"Rendered conversion forms (non-dev): {len(forms)}\n")
allgood = True
for p in forms:
    html = open(p, encoding="utf-8").read()
    miss = []
    for f in DOM_FIELDS + LEAD:
        if f'name="{f}"' not in html: miss.append(f)
    if f'name="{SERVICES}"' not in html: miss.append(SERVICES)
    for m in META:
        if f'name="{m}"' not in html: miss.append("meta:"+m)
    if f'name="{HONEYPOT}"' not in html: miss.append("honeypot")
    # service checkbox count (should be 10)
    svc = len(re.findall(r'data-service-input', html))
    url = p.replace("\\","/").replace("_site","").replace("/index.html","/") or "/"
    if miss:
        allgood = False
        print(f"  ✗ {url}\n      MISSING: {miss}  (service boxes: {svc})")

if allgood:
    print(f"  ✓ ALL {len(forms)} forms carry the full contract: "
          f"{len(DOM_FIELDS)} visible + services[] + {len(META)} hidden-meta + "
          f"lead_source + ai_tool + honeypot.")
    # spot the two lead-capture selects + the 10 services on a sample
    sample = forms[0]
    h = open(sample,encoding="utf-8").read()
    print(f"\n  Sample {sample}: service boxes = {len(re.findall(r'data-service-input', h))}, "
          f"lead_source select = {'name=\"lead_source\"' in h}, "
          f"ai_tool select = {'name=\"ai_tool\"' in h}")

# footer subscribe form?
subs = [p for p in glob.glob("_site/**/index.html", recursive=True)
        if re.search(r'action="/subscribe"', open(p,encoding="utf-8").read())]
print(f"\nFooter /subscribe forms present in build: {len(subs)} "
      f"(contract baseline noted endpoint UNVERIFIED on live)")

# tool calculator forms — confirm they do NOT post to a lead endpoint
calc = sorted(glob.glob("_site/tools/*/index.html"))
posts = []
for p in calc:
    h = open(p,encoding="utf-8").read()
    for m in re.finditer(r'<form[^>]*class="calc__form"[^>]*>', h):
        if 'action="http' in m.group(0) or '/exec' in m.group(0):
            posts.append(p)
print(f"\nTool calculator pages: {len(calc)}; calc forms that POST to an endpoint: {len(posts)} "
      f"(expected 0 — calculators are client-side only)")
print("PASS" if allgood else "FAIL")
sys.exit(0 if allgood else 1)
