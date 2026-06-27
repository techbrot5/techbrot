"""Pre-flip CTA polish: every hero/CTA action that is a phone (tel:) CTA should show the
VISIBLE phone number ("Call (877) 751-5575") instead of a generic label like
"Speak to a ProAdvisor". Non-phone CTAs keep their label. Applies to every layout's
action renderer (a.label / action.label). The {% if ...tel... %} guard means only phone
CTAs change. Idempotent."""
import glob

A_OLD = ">{{ a.label }}</a>"
A_NEW = '>{% if a.tel or (a.href and a.href.startsWith("tel:")) %}Call {{ site.phone.display }}{% else %}{{ a.label }}{% endif %}</a>'
ACT_OLD = ">{{ action.label }}</a>"
ACT_NEW = '>{% if action.tel or (action.href and action.href.startsWith("tel:")) %}Call {{ site.phone.display }}{% else %}{{ action.label }}{% endif %}</a>'

total = 0
for path in glob.glob("src/_includes/layouts/*.njk"):
    txt = open(path, encoding="utf-8").read()
    orig = txt
    na = txt.count(A_OLD); txt = txt.replace(A_OLD, A_NEW)
    nb = txt.count(ACT_OLD); txt = txt.replace(ACT_OLD, ACT_NEW)
    if txt != orig:
        open(path, "w", encoding="utf-8", newline="\n").write(txt)
        total += na + nb
        print("  %-44s a:%d action:%d" % (path.replace("\\", "/").split("layouts/")[1], na, nb))
print("renderers converted:", total)
