// OG-image generator — Direction A "Editorial Petrol" (founder-approved 2026-06-28).
// Pipeline: satori (HTML + instanced brand fonts -> SVG, text vectorized to paths)
//           -> sharp (SVG -> optimized 1200x630 PNG).
// Usage:
//   node _build/scripts/og-gen.mjs --samples   # render Phase-2 review set -> _build/og-samples/phase2/
//   node _build/scripts/og-gen.mjs             # full batch: crawl _site-prod, write src/assets/og/cards/<slug>.png
// Static fonts come from _build/og-fonts/ (regenerate via og_fonts.py only if brand fonts change).
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REPO = join(import.meta.dirname, '..', '..');
const FONTS = join(REPO, '_build', 'og-fonts');
const F = (n) => readFileSync(join(FONTS, n));
const fonts = [
  { name:'Fraunces', data:F('fraunces-600.ttf'), weight:600, style:'normal' },
  { name:'Geist', data:F('geist-600.ttf'), weight:600, style:'normal' },
  { name:'Geist', data:F('geist-500.ttf'), weight:500, style:'normal' },
  { name:'Geist', data:F('geist-400.ttf'), weight:400, style:'normal' },
];
const C = { petrol:'#0E4A50', ink:'#14110C', cream:'#F5F3EC', creamSoft:'rgba(245,243,236,0.62)', amber:'#C9A961' };
const monoUri = 'data:image/svg+xml;base64,' + Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M8 10 H38 V54 H26 V22 H8 Z" fill="${C.cream}"/><rect x="42" y="10" width="14" height="12" fill="${C.cream}"/></svg>`).toString('base64');

const ENT = { '&amp;':'&','&rsquo;':'’','&lsquo;':'‘','&ldquo;':'“','&rdquo;':'”','&middot;':'·','&ndash;':'–','&mdash;':'—','&#39;':'’','&quot;':'"','&apos;':'’','&nbsp;':' ' };
const decode = (s) => s.replace(/&[a-z]+;|&#\d+;/gi, (m) => ENT[m] ?? m);
const cleanTitle = (ogTitle) => decode(ogTitle).replace(/\s*[·|]\s*TechBrot\s*$/,'').trim();
const titleCase = (slug) => slug.split('-').map(w => w.length<=2 ? w.toUpperCase() : w[0].toUpperCase()+w.slice(1)).join(' ');

// URL silo -> human category label (deterministic, covers all pages)
function categoryFor(url) {
  const s = url.split('/').filter(Boolean);
  if (s.length === 0) return 'Accounting & Advisory';
  if (s[0] === 'find-an-accountant') return s.length === 1 ? 'Find an Accountant' : titleCase(s[1]);
  if (s[0] === 'accounting') {
    if (s[1] === 'bookkeeping') return 'Bookkeeping';
    if (s[1] === 'advisory') return 'Advisory';
    if (s[1] === 'industries') return 'Industry Accounting';
    return 'Accounting';
  }
  if (s[0] === 'quickbooks') {
    if (s[1] === 'help') return 'QuickBooks Help';
    if (s[1] === 'payroll') return 'QuickBooks Payroll';
    if (s[1] === 'migration') return 'QuickBooks Migration';
    if (s[1] === 'online' || s[1] === 'desktop' || s[1] === 'enterprise') return 'QuickBooks';
    return 'QuickBooks';
  }
  const map = { vs:'Comparison', pricing:'Pricing', contact:'Get in Touch', trust:'Trust & Independence',
    partners:'Partners', about:'About TechBrot', resources:'Guide', blog:'Insights', legal:'Legal',
    compare:'Comparison', switch:'Switch to TechBrot', platforms:'Platforms', tools:'Tools' };
  return map[s[0]] || 'TechBrot';
}

// adaptive title size by char length — left text panel is ~650px wide (narrower than full-bleed)
const titleSize = (t) => t.length <= 40 ? 58 : t.length <= 56 ? 52 : 46;

const h = (type, style, children) => ({ type, props: { style, ...(children !== undefined ? { children } : {}) } });

// Direction B — "Split Ledger": ink text panel (left) + petrol monogram panel (right), amber divider.
function card({ title, category }) {
  const fs = titleSize(title);
  return h('div', { width:'1200px', height:'630px', display:'flex', flexDirection:'row', fontFamily:'Geist' }, [
    h('div', { display:'flex', flexDirection:'column', justifyContent:'space-between', width:'770px', height:'630px', background:C.ink, padding:'66px 60px' }, [
      h('div', { display:'flex', alignItems:'center', gap:'14px' }, [
        { type:'img', props:{ src:monoUri, width:40, height:40 } },
        h('div', { fontFamily:'Fraunces', fontSize:'27px', fontWeight:600, color:C.cream, letterSpacing:'-0.5px' }, 'TechBrot'),
      ]),
      h('div', { display:'flex', flexDirection:'column' }, [
        h('div', { fontFamily:'Geist', fontSize:'20px', fontWeight:600, letterSpacing:'4px', textTransform:'uppercase', color:C.amber, marginBottom:'20px' }, category),
        h('div', { fontFamily:'Fraunces', fontSize:`${fs}px`, fontWeight:600, lineHeight:1.07, letterSpacing:'-1px', color:C.cream }, title),
      ]),
      h('div', { fontFamily:'Geist', fontSize:'21px', fontWeight:500, color:C.creamSoft }, 'techbrot.com · Certified QuickBooks ProAdvisors'),
    ]),
    h('div', { display:'flex', width:'430px', height:'630px', background:C.petrol, alignItems:'center', justifyContent:'center', position:'relative', borderLeft:`3px solid ${C.amber}` }, [
      h('div', { position:'absolute', left:0, right:0, top:'150px', height:'100px', display:'flex' },
        Array.from({length:4}, (_,i)=> h('div', { position:'absolute', left:0, right:0, top:i*16, height:'1px', background:'rgba(245,243,236,0.10)' }))),
      { type:'img', props:{ src:monoUri, width:170, height:170 } },
    ]),
  ]);
}

export async function renderCard({ title, category }) {
  const svg = await satori(card({ title, category }), { width:1200, height:630, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel:9, quality:90 }).toBuffer();
}

// url -> flat card slug (MUST match the ogCard eleventy filter)
export const cardSlug = (url) => { const f = url.replace(/^\/|\/$/g,'').replace(/\//g,'-'); return f || 'home'; };
const ogTitleOf = (html) => { const m = html.match(/<meta property="og:title" content="([^"]*)"/); return m ? m[1] : ''; };

async function main() {
  const samples = process.argv.includes('--samples');
  const SITE = join(REPO, '_site-prod');
  if (samples) {
    const outDir = join(REPO, '_build', 'og-samples', 'phase2'); mkdirSync(outDir, { recursive:true });
    const set = [
      { url:'/', file:'index.html' },
      { url:'/accounting/bookkeeping/cleanup-bookkeeping/', file:'accounting/bookkeeping/cleanup-bookkeeping/index.html' },
      { url:'/find-an-accountant/new-york/', file:'find-an-accountant/new-york/index.html' },
      { url:'/quickbooks/help/error-codes/h202/', file:'quickbooks/help/error-codes/h202/index.html' },
      { url:'/contact/', file:'contact/index.html' },
    ];
    for (const p of set) {
      const html = readFileSync(join(SITE, p.file), 'utf8');
      const title = cleanTitle(ogTitleOf(html)); const category = categoryFor(p.url);
      const buf = await renderCard({ title, category });
      writeFileSync(join(outDir, cardSlug(p.url) + '.png'), buf);
      console.log(`  [${category}]  ${title}  -> ${cardSlug(p.url)}.png (${(buf.length/1024).toFixed(1)}KB)`);
    }
    console.log('Phase-2 samples ->', outDir);
    return;
  }
  // full batch
  const outDir = join(REPO, 'src', 'assets', 'og', 'cards'); mkdirSync(outDir, { recursive:true });
  const pages = [];
  (function walk(dir){ for (const e of readdirSync(dir)) { const p = join(dir, e); const st = statSync(p);
    if (st.isDirectory()) walk(p); else if (e === 'index.html') {
      let url = '/' + p.slice(SITE.length+1).replace(/\\/g,'/').replace(/index\.html$/,'');
      pages.push({ url, file:p }); } } })(SITE);
  let n=0, bytes=0, max=0;
  for (const pg of pages) {
    const html = readFileSync(pg.file,'utf8');
    if (/<meta name="robots" content="noindex/i.test(html)) continue; // skip noindex/dev
    const title = cleanTitle(ogTitleOf(html)); if (!title) continue;
    const buf = await renderCard({ title, category:categoryFor(pg.url) });
    writeFileSync(join(outDir, cardSlug(pg.url) + '.png'), buf);
    n++; bytes+=buf.length; max=Math.max(max,buf.length);
    if (n%100===0) console.log(`  ${n} cards...`);
  }
  console.log(`Generated ${n} OG cards -> ${outDir}  (avg ${(bytes/n/1024).toFixed(1)}KB, max ${(max/1024).toFixed(1)}KB)`);
}
main();
