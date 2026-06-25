# add reviewedBy David to money D1 pages that lack it (founder decision 1).
# Insert after the WebPage node's "inLanguage":"en-US" (first occurrence).
import glob, re, sys
sys.stdout.reconfigure(encoding="utf-8")
TOKEN=',"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}'
money_njk=[f for f in glob.glob("src/**/*.njk",recursive=True)
           if '"layout": "layouts/t-money.njk"' in open(f,encoding="utf-8").read() and "/dev/" not in f.replace("\\","/")]
added=[]; skipped=[]
for n in money_njk:
    d=n[:-4]+".11tydata.js"
    s=open(d,encoding="utf-8").read()
    if 'reviewedBy' in s and 'david-westgate' in s:
        skipped.append(d); continue
    # insert after first inLanguage in the WebPage node
    new,count=re.subn(r'("@type":"WebPage".*?"inLanguage":"en-US")', r'\1'+TOKEN, s, count=1, flags=re.S)
    if count==1:
        open(d,"w",encoding="utf-8",newline="\n").write(new); added.append(d)
    else:
        skipped.append(d+" (NO WebPage/inLanguage anchor!)")
print(f"reviewedBy ADDED to {len(added)} money pages:")
for a in sorted(added): print("  ",a.replace("\\","/"))
print(f"\nskipped (already had it / no anchor): {len(skipped)}")
for s2 in skipped:
    if "NO WebPage" in s2: print("  !!",s2)
