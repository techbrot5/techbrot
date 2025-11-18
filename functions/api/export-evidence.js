// ---------------------------------------------------------------------------
// functions/api/export-evidence.js
//
// Full evidence bundle generator (D1 + R2) with:
// - HTML report ("Order Evidence Report")
// - Real PDF via Cloudflare Browser Rendering API (env.BROWSER)
// - SHA-256 per-file hashes in index.json
// - Chain-of-custody timeline
// - CSV summary
// - ZIP builder with CRC32 and correct central directory
// ---------------------------------------------------------------------------

const enc = new TextEncoder();

// ---------------- CRC32 (for ZIP) ----------------
function makeCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
}
const CRC_TABLE = makeCRC32Table();

function crc32(buf) {
  let crc = 0 ^ -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

// ----------------- Helpers for binary writes -----------------
function writeU32(n) {
  return new Uint8Array([ n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff ]);
}
function writeU16(n) {
  return new Uint8Array([ n & 0xff, (n >> 8) & 0xff ]);
}
function concat(arr) {
  const len = arr.reduce((s, a) => s + a.length, 0);
  const out = new Uint8Array(len);
  let off = 0;
  for (const a of arr) { out.set(a, off); off += a.length; }
  return out;
}

// ----------------- SHA-256 for tamper-proof index -----------------
async function sha256(bytes) {
  const h = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// ----------------- ZIP builder (with CRC32) -----------------
function buildZipUint8Array(files) {
  // files: [{ name: string, data: Uint8Array }]
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const f of files) {
    const nameBytes = enc.encode(f.name);
    const data = f.data instanceof Uint8Array ? f.data : new Uint8Array(f.data);
    const c = crc32(data);
    const compressedSize = data.length;
    const uncompressedSize = data.length;

    // Local file header
    const localHeader = concat([
      Uint8Array.from([0x50,0x4b,0x03,0x04]), // signature
      writeU16(20), // version needed to extract
      writeU16(0),  // general purpose bit flag
      writeU16(0),  // compression method (0 = stored)
      writeU16(0),  // last mod time
      writeU16(0),  // last mod date
      writeU32(c),  // crc32
      writeU32(compressedSize),
      writeU32(uncompressedSize),
      writeU16(nameBytes.length),
      writeU16(0)   // extra length
    ]);
    const localEntry = concat([localHeader, nameBytes, data]);
    localParts.push(localEntry);

    // Central directory header
    const centralHeader = concat([
      Uint8Array.from([0x50,0x4b,0x01,0x02]), // central file header signature
      writeU16(20), // version made by
      writeU16(20), // version needed to extract
      writeU16(0),  // flags
      writeU16(0),  // compression
      writeU16(0),  // mod time
      writeU16(0),  // mod date
      writeU32(c),
      writeU32(compressedSize),
      writeU32(uncompressedSize),
      writeU16(nameBytes.length),
      writeU16(0), // extra
      writeU16(0), // comment length
      writeU16(0), // disk number start
      writeU16(0), // internal attrs
      writeU32(0), // external attrs
      writeU32(offset) // relative offset
    ]);

    const centralEntry = concat([centralHeader, nameBytes]);
    centralParts.push(centralEntry);

    offset += localEntry.length;
  }

  const centralDir = concat(centralParts);
  const eocd = concat([
    Uint8Array.from([0x50,0x4b,0x05,0x06]),
    writeU16(0), // disk number
    writeU16(0), // start disk
    writeU16(centralParts.length), // entries this disk
    writeU16(centralParts.length), // total entries
    writeU32(centralDir.length), // central size
    writeU32(offset), // central offset
    writeU16(0) // comment length
  ]);

  return concat([...localParts, centralDir, eocd]);
}

// ----------------- PDF generation via env.BROWSER (Cloudflare) -----------------
async function generatePdfFromHtml(env, html) {
  // env.BROWSER is expected (you updated wrangler.toml). Use built-in browser rendering.
  if (!env || !env.BROWSER) throw new Error("Browser rendering (env.BROWSER) not available");

  // Launch a browser session, render HTML, produce PDF
  const session = await env.BROWSER.launch();
  try {
    const page = await session.newPage();
    // set content and wait for load
    await page.setContent(html, { waitUntil: "load" });
    const pdfBuf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" }
    });
    // pdfBuf may be ArrayBuffer or Buffer-like
    return new Uint8Array(pdfBuf);
  } finally {
    try { await session.close(); } catch (_) {}
  }
}

// ----------------- Utility -----------------
function safeString(s) { return s == null ? "" : String(s); }

// ---------------------------------------------------------------------------
// Main Handler
// ---------------------------------------------------------------------------

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env.DB;
  const r2 = env.R2;

  const url = new URL(request.url);
  const order_id = url.searchParams.get("order_id");

  if (!order_id) {
    return new Response(JSON.stringify({ error: "order_id required" }), { status: 400, headers: { "Content-Type": "application/json" }});
  }

  // files will hold { name, data: Uint8Array }
  const files = [];

  // chain of custody log
  const chain_of_custody = [];
  function step(action, meta = {}) {
    chain_of_custody.push({ action, at: new Date().toISOString(), ...meta });
  }
  step("export_started", { order_id });

  // ---------------- D1 extraction ----------------
  async function dumpTable(table, whereClause, binds = []) {
    step("dump_table_start", { table, whereClause });
    try {
      const sql = `SELECT * FROM ${table} ${whereClause}`;
      const r = await db.prepare(sql).bind(...binds).all();
      const rows = r?.results || [];

      files.push({ name: `D1/${table}.json`, data: enc.encode(JSON.stringify(rows, null, 2)) });

      if (table === "orders") {
        const csvLines = [
          "order_id,email,amount,currency,verified,created_at",
          ...rows.map(rr => [
            `"${(safeString(rr.order_id)).replace(/"/g, '""')}"`,
            `"${(safeString(rr.email)).replace(/"/g, '""')}"`,
            safeString(rr.amount),
            safeString(rr.currency),
            (rr.verified ? "1" : "0"),
            `"${safeString(rr.created_at)}"`
          ].join(","))
        ];
        files.push({ name: "D1/orders-summary.csv", data: enc.encode(csvLines.join("\n")) });
      }

      step("dump_table_done", { table, rows: rows.length });
      return rows;
    } catch (err) {
      step("dump_table_error", { table, error: String(err) });
      return [];
    }
  }

  const orders = await dumpTable("orders", "WHERE order_id = ?", [order_id]);

  await dumpTable("acceptance_records", "WHERE stripe_session_id = (SELECT stripe_session_id FROM orders WHERE order_id = ? LIMIT 1)", [order_id]);
  await dumpTable("email_attempts", "WHERE order_id = ?", [order_id]);
  await dumpTable("verification_logs", "WHERE order_id = ?", [order_id]);

  // ---------------- R2 extraction ----------------
  async function fetchR2Prefix(prefix, label) {
    step("r2_list_start", { prefix });
    try {
      const list = await r2.list({ prefix });
      for (const obj of list.objects || []) {
        try {
          const o = await r2.get(obj.key);
          if (!o) { step("r2_get_missing", { key: obj.key }); continue; }
          const data = new Uint8Array(await o.arrayBuffer());
          const shortName = obj.key.split("/").pop();
          files.push({ name: `R2/${label}/${shortName}`, data });
          step("r2_get_ok", { key: obj.key, size: data.length });
        } catch (e) {
          step("r2_get_error", { key: obj.key, error: String(e) });
        }
      }
      step("r2_list_done", { prefix });
    } catch (err) {
      step("r2_list_error", { prefix, error: String(err) });
    }
  }

  // email attempt evidence (R2)
  await fetchR2Prefix(`email_attempts/${order_id}`, "email_attempts");

  // verification evidence - note: this uses the 'verification' prefix (as your verify handler stores there)
  await fetchR2Prefix(`verification/${order_id}`, "verification");

  // ---------------- HTML report ----------------
  step("generate_html_report");
  const orderObj = orders?.[0] || null;
  const reportHtml = `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Order Evidence Report — ${order_id}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      body{font-family:Inter,system-ui,Arial;margin:18px;color:#111}
      .meta{font-size:13px;color:#666}
      pre{background:#f8fbfa;padding:12px;border-radius:8px;overflow:auto}
      h1{font-size:20px;margin-bottom:6px}
    </style>
  </head>
  <body>
    <h1>Order Evidence Report</h1>
    <div class="meta">Order ID: <strong>${order_id}</strong> • Generated: ${new Date().toISOString()}</div>
    <hr>
    <h3>Order snapshot</h3>
    <pre>${JSON.stringify(orderObj, null, 2)}</pre>
    <h3>Included files</h3>
    <ul>
      ${files.map(f => `<li>${f.name}</li>`).join("")}
    </ul>
    <hr>
    <p style="font-size:12px;color:#666">TechBrot — internal evidence report</p>
  </body>
  </html>
  `;

  files.push({ name: `report/${order_id}.html`, data: enc.encode(reportHtml) });

  // ---------------- PDF generation (real PDF via env.BROWSER) ----------------
  step("generate_pdf");
  try {
    let pdfBytes;
    try {
      pdfBytes = await generatePdfFromHtml(env, reportHtml); // returns Uint8Array
      step("generate_pdf_ok", { bytes: pdfBytes.length });
    } catch (err) {
      step("generate_pdf_error", { error: String(err) });
      // fallback: create a small text-based PDF-like file (not ideal) but ensure something exists
      const fallback = `PDF generation failed: ${String(err)}\n\nIncluded HTML report available as report/${order_id}.html`;
      pdfBytes = enc.encode(fallback);
    }
    files.push({ name: `report/${order_id}.pdf`, data: pdfBytes });
  } catch (err) {
    step("generate_pdf_unexpected", { error: String(err) });
  }

  // ---------------- Compute SHA-256 for every file and add index.json ----------------
  step("compute_hashes");
  const shaMap = {};
  for (const f of files) {
    try {
      const hash = await sha256(f.data);
      shaMap[f.name] = hash;
      step("hash_ok", { name: f.name, sha256: hash });
    } catch (err) {
      step("hash_error", { name: f.name, error: String(err) });
      shaMap[f.name] = null;
    }
  }

  const indexObj = {
    order_id,
    generated_at: new Date().toISOString(),
    files: files.map(f => f.name),
    sha256: shaMap,
    chain_of_custody
  };

  files.push({ name: "index.json", data: enc.encode(JSON.stringify(indexObj, null, 2)) });
  step("index_added");

  // ---------------- Build ZIP and return ----------------
  step("build_zip");
  try {
    const zipArray = buildZipUint8Array(files);
    const zipBlob = new Blob([zipArray], { type: "application/zip" });
    step("build_zip_ok", { bytes: zipArray.length });
    return new Response(zipBlob, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="evidence-bundle-${order_id}.zip"`
      }
    });
  } catch (err) {
    step("build_zip_error", { error: String(err) });
    return new Response(JSON.stringify({ error: "zip_build_failed", details: String(err) }), { status: 500, headers: { "Content-Type": "application/json" }});
  }
}
