// ---------------------------------------------------------------------------
// functions/api/export-evidence.js
//
// Fully enhanced evidence bundle generator:
// - D1 evidence (orders, acceptance_records, email_attempts, verification_logs)
// - R2 evidence (email_attempt + verification files)
// - CSV summary for orders
// - HTML report for human-readable review
// - index.json metadata
//
// Output: evidence-bundle-<order_id>.zip
// ---------------------------------------------------------------------------

const enc = new TextEncoder();

// ---- ZIP Helpers (no external libs) ---------------------------------------
function writeUint32LE(num) {
  return new Uint8Array([
    num & 0xff,
    (num >> 8) & 0xff,
    (num >> 16) & 0xff,
    (num >> 24) & 0xff,
  ]);
}

function writeUint16LE(num) {
  return new Uint8Array([num & 0xff, (num >> 8) & 0xff]);
}

async function createZip(files, filename) {
  const parts = [];
  const central = [];
  let offset = 0;

  for (const f of files) {
    const nameBytes = enc.encode(f.name);
    const data = f.data;

    const header = new Uint8Array([
      0x50,0x4b,0x03,0x04,
      20,0, // version
      0,0,  // flags
      0,0,  // compression = store
      0,0,  // mod time
      0,0,  // mod date
      ...[0,0,0,0], // crc32
      ...writeUint32LE(data.length),
      ...writeUint32LE(data.length),
      ...writeUint16LE(nameBytes.length),
      ...writeUint16LE(0),
    ]);

    const local = new Uint8Array(header.length + nameBytes.length + data.length);
    local.set(header, 0);
    local.set(nameBytes, header.length);
    local.set(data, header.length + nameBytes.length);

    const centralHeader = new Uint8Array([
      0x50,0x4b,0x01,0x02,
      20,0,
      20,0,
      0,0,
      0,0,
      0,0,
      0,0,
      ...[0,0,0,0], // crc
      ...writeUint32LE(data.length),
      ...writeUint32LE(data.length),
      ...writeUint16LE(nameBytes.length),
      ...writeUint16LE(0),
      ...writeUint16LE(0),
      ...writeUint16LE(0),
      ...writeUint16LE(0),
      ...writeUint32LE(0),
      ...writeUint32LE(offset),
    ]);

    const centralEntry = new Uint8Array(centralHeader.length + nameBytes.length);
    centralEntry.set(centralHeader, 0);
    centralEntry.set(nameBytes, centralHeader.length);

    parts.push(local);
    central.push(centralEntry);
    offset += local.length;
  }

  const centralSize = central.reduce((acc, v) => acc + v.length, 0);
  const centralOffset = offset;

  const eocd = new Uint8Array([
    0x50,0x4b,0x05,0x06,
    0,0,
    0,0,
    ...writeUint16LE(central.length),
    ...writeUint16LE(central.length),
    ...writeUint32LE(centralSize),
    ...writeUint32LE(centralOffset),
    0,0,
  ]);

  return new Response(
    new Blob([...parts, ...central, eocd], { type: "application/zip" }),
    {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    }
  );
}

// ----------------------------------------------------------------------------
// Main Handler
// ----------------------------------------------------------------------------

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env.DB;
  const r2 = env.R2;

  const url = new URL(request.url);
  const order_id = url.searchParams.get("order_id");

  if (!order_id) {
    return new Response(JSON.stringify({ error: "order_id required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const files = [];

  // ---------------------------------------------------------------------------
  // 1) D1 Evidence Extraction
  // ---------------------------------------------------------------------------

  async function dumpTable(table, whereClause, binds = []) {
    try {
      const sql = `SELECT * FROM ${table} ${whereClause}`;
      const r = await db.prepare(sql).bind(...binds).all();
      const rows = r?.results || [];

      files.push({
        name: `D1/${table}.json`,
        data: enc.encode(JSON.stringify(rows, null, 2)),
      });

      // Auto-generate CSV for orders (main record)
      if (table === "orders") {
        const csv = [
          "order_id,email,amount,currency,verified,created_at",
          ...rows.map(r =>
            [
              r.order_id,
              r.email,
              r.amount,
              r.currency,
              r.verified ? 1 : 0,
              r.created_at,
            ].join(",")
          ),
        ].join("\n");

        files.push({
          name: `D1/orders-summary.csv`,
          data: enc.encode(csv),
        });
      }

      return rows;
    } catch (err) {
      return [];
    }
  }

  const orders = await dumpTable("orders", "WHERE order_id = ?", [order_id]);

  await dumpTable(
    "acceptance_records",
    "WHERE stripe_session_id = (SELECT stripe_session_id FROM orders WHERE order_id = ? LIMIT 1)",
    [order_id]
  );

  await dumpTable("email_attempts", "WHERE order_id = ?", [order_id]);
  await dumpTable("verification_logs", "WHERE order_id = ?", [order_id]);

  // ---------------------------------------------------------------------------
  // 2) R2 Evidence
  // ---------------------------------------------------------------------------

  async function fetchR2Prefix(prefix, label) {
    const list = await r2.list({ prefix });
    for (const obj of list.objects) {
      const fileObj = await r2.get(obj.key);
      if (!fileObj) continue;
      const data = new Uint8Array(await fileObj.arrayBuffer());

      const shortName = obj.key.split("/").pop();
      files.push({
        name: `R2/${label}/${shortName}`,
        data,
      });
    }
  }

  // Email attempt evidence
  await fetchR2Prefix(`email_attempts/${order_id}`, "email_attempts");

  // Verification evidence
  await fetchR2Prefix(`orders/${order_id}`, "verification");

  // ---------------------------------------------------------------------------
  // 3) HTML Evidence Report
  // ---------------------------------------------------------------------------

  const orderObj = orders?.[0] || null;

  const reportHtml = `
    <html>
      <body style="font-family:Arial;padding:18px;color:#111">
        <h2>Evidence Report — ${order_id}</h2>
        <p>Generated: ${new Date().toISOString()}</p>
        <hr>
        <h3>Order Summary</h3>
        <pre>${JSON.stringify(orderObj, null, 2)}</pre>
        <p>All JSON + CSV + R2 evidence files are included in this bundle.</p>
        <p style="margin-top:40px;font-size:12px;color:#666">
          TechBrot Internal Evidence Report
        </p>
      </body>
    </html>
  `;

  files.push({
    name: `report/${order_id}-report.html`,
    data: enc.encode(reportHtml),
  });

  // ---------------------------------------------------------------------------
  // 4) index.json for Metadata
  // ---------------------------------------------------------------------------

  const metadata = {
    order_id,
    generated_at: new Date().toISOString(),
    files: files.map(f => f.name),
  };

  files.push({
    name: "index.json",
    data: enc.encode(JSON.stringify(metadata, null, 2)),
  });

  // ---------------------------------------------------------------------------
  // 5) Build & Return ZIP
  // ---------------------------------------------------------------------------

  const zipName = `evidence-bundle-${order_id}.zip`;
  return createZip(files, zipName);
}
