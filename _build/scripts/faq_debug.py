import re, json, html
SITE="_site"
NBSP=" "; ZWSP="​"
urls=["/accounting/services/","/find-an-accountant/california/cities/oakland/",
      "/quickbooks/faq/","/quickbooks/migration/quickbooks-to-xero/"]
def _ws(s):
    s=s.replace(NBSP," ").replace(ZWSP,"")
    return re.sub(r"\s+"," ",s).strip()
def nschema(s): return _ws(s)
def nvis(s): return _ws(html.unescape(s))
def vistext(h):
    b=re.sub(r"<script\b.*?</script>"," ",h,flags=re.S|re.I)
    b=re.sub(r"<style\b.*?</style>"," ",b,flags=re.S|re.I)
    b=re.sub(r"<[^>]+>","",b)
    return nvis(b)
for url in urls:
    try: h=open(SITE+url+"index.html",encoding="utf-8",errors="ignore").read()
    except Exception as e:
        print(url,"READ ERR",e); continue
    faqs=[]
    for m in re.finditer(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',h,re.S|re.I):
        try: data=json.loads(m.group(1).strip())
        except: continue
        nodes=data.get("@graph",[data]) if isinstance(data,dict) else (data if isinstance(data,list) else [])
        for n in nodes:
            if isinstance(n,dict):
                t=n.get("@type"); ts=t if isinstance(t,list) else [t]
                if "FAQPage" in ts:
                    for it in n.get("mainEntity",[]):
                        a=it.get("acceptedAnswer",{})
                        faqs.append((it.get("name",""),a.get("text","") if isinstance(a,dict) else ""))
    vis=vistext(h).lower()
    print("\n==== %s  (%d FAQ) ===="%(url,len(faqs)))
    for q,a in faqs:
        na=nschema(a); ok=na.lower() in vis
        nq=nschema(q); okq=nq.lower() in vis
        if not okq:
            print(" Q-MISS:",repr(nq[:80]))
        if not ok:
            lo,hi=0,len(na)
            while lo<hi:
                mid=(lo+hi+1)//2
                if na[:mid].lower() in vis: lo=mid
                else: hi=mid-1
            print(" A-MISS break@%d schema-next=%r"%(lo,na[lo:lo+30]))
