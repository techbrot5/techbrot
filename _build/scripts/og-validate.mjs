// Validate live OG/Twitter cards the way a social debugger does:
// fetch each page as a crawler, parse the full meta set, fetch + measure the image.
import sharp from 'sharp';

const BASE = 'https://techbrot.com';
const UA = 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)';
const PAGES = ['/', '/accounting/bookkeeping/cleanup-bookkeeping/', '/find-an-accountant/new-york/',
  '/quickbooks/help/error-codes/h202/', '/contact/', '/vs/'];
const need = ['og:title','og:description','og:url','og:type','og:site_name','og:image','og:image:width','og:image:height','og:image:alt','twitter:card','twitter:title','twitter:description','twitter:image'];
const metaRe = (k) => new RegExp(`<meta (?:property|name)="${k.replace(/[:]/g,'\\:')}" content="([^"]*)"`, 'i');
const get = (html,k) => { const m = html.match(metaRe(k)); return m ? m[1] : null; };

let allOk = true;
for (const path of PAGES) {
  const url = BASE + path;
  const res = await fetch(url, { headers: { 'user-agent': UA } });
  const html = await res.text();
  const tags = Object.fromEntries(need.map(k => [k, get(html, k)]));
  const missing = need.filter(k => !tags[k]);
  // image check
  let imgOk=false, dims='', ctype='', kb='', imgStatus='';
  if (tags['og:image']) {
    const ir = await fetch(tags['og:image'], { headers:{'user-agent':UA} });
    imgStatus = ir.status; ctype = ir.headers.get('content-type') || '';
    const buf = Buffer.from(await ir.arrayBuffer()); kb = (buf.length/1024).toFixed(1);
    try { const m = await sharp(buf).metadata(); dims = `${m.width}x${m.height}`; } catch {}
    imgOk = ir.status===200 && ctype.startsWith('image/') && dims==='1200x630' && buf.length < 5*1024*1024;
  }
  const twCard = tags['twitter:card'];
  const twLarge = twCard === 'summary_large_image';
  const absImg = (tags['og:image']||'').startsWith('https://');
  const twEqOg = tags['twitter:image'] === tags['og:image'];
  const pageOk = res.status===200 && missing.length===0 && imgOk && twLarge && absImg && twEqOg;
  allOk = allOk && pageOk;
  console.log(`\n${pageOk?'PASS':'FAIL'}  ${path}  (page HTTP ${res.status})`);
  console.log(`   og:title       ${tags['og:title']}`);
  console.log(`   og:description ${(tags['og:description']||'').slice(0,70)}...`);
  console.log(`   og:image       ${tags['og:image']}  [HTTP ${imgStatus} ${ctype} ${dims} ${kb}KB]`);
  console.log(`   og:image:alt   ${tags['og:image:alt']}`);
  console.log(`   twitter:card   ${twCard}  | twitter==og img: ${twEqOg} | abs-https: ${absImg} | <5MB & 1200x630: ${imgOk}`);
  if (missing.length) console.log(`   MISSING TAGS: ${missing.join(', ')}`);
}
console.log(`\n==== ${allOk ? 'ALL PAGES VALID (debugger-equivalent checks)' : 'SOME PAGES HAVE ISSUES'} ====`);

// Independent third-party parser (Microlink) on the homepage
try {
  const r = await fetch('https://api.microlink.io/?url=' + encodeURIComponent(BASE + '/'));
  const j = await r.json();
  console.log('\n--- Microlink (independent parser) on homepage ---');
  console.log('  status:', j.status, '| title:', j.data?.title);
  console.log('  image:', j.data?.image?.url, j.data?.image?.width + 'x' + j.data?.image?.height);
} catch (e) { console.log('Microlink check skipped:', String(e).slice(0,80)); }
