// ---------------------------------------------------------------------------
// functions/api/export-evidence-all.js
//
// Streams evidence for *ALL* orders into one multi-order ZIP.
// Prevents RAM overload — streams part-by-part.
// Uses the same "export-evidence" endpoint internally.
// Admin-PIN protected.
// ---------------------------------------------------------------------------

const enc = new TextEncoder();

// Basic ZIP writing functions with "stored" compression
function writeU16(n){ return new Uint8Array([n&0xFF,(n>>8)&0xFF]); }
function writeU32(n){ return new Uint8Array([n&0xFF,(n>>8)&0xFF,(n>>16)&0xFF,(n>>24)&0xFF]); }

function makeCRC32Table(){
  const t=new Uint32Array(256);
  for(let i=0;i<256;i++){
    let c=i;
    for(let k=0;k<8;k++){
      c=(c & 1)?(0xEDB88320 ^ (c>>>1)):(c>>>1);
    }
    t[i]=c>>>0;
  }
  return t;
}
const CRC=makeCRC32Table();
function crc32(buf){
  let c=0^(-1);
  for(let i=0;i<buf.length;i++){ c=(c>>>8) ^ CRC[(c^buf[i]) & 0xFF]; }
  return (c^(-1))>>>0;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env.DB;

  // PIN required
  const adminPin = request.headers.get("x-admin-pin");
  if (!adminPin || adminPin !== env.ADMIN_PIN) {
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  // Get all orders
  const all = await db.prepare("SELECT order_id FROM orders ORDER BY created_at DESC").all();
  const orderIds = (all?.results || []).map(r => r.order_id);

  if (!orderIds.length) {
    return new Response(JSON.stringify({ error: "no_orders" }), { status: 404 });
  }

  const boundary = Date.now();
  const filename = `all-evidence-${boundary}.zip`;

  // Stream ZIP to client
  const stream = new ReadableStream({
    async start(controller) {
      let central = [];
      let offset = 0;

      async function addFile(pathName, dataBytes) {
        const nameBytes = enc.encode(pathName);
        const data = dataBytes;
        const c = crc32(data);

        // Local header
        const local = new Uint8Array([
          0x50,0x4b,0x03,0x04,
          20,0,  // version
          0,0,   // flags
          0,0,   // method
          0,0,   // time
          0,0,   // date
        ]);
        controller.enqueue(local);
        controller.enqueue(writeU32(c));
        controller.enqueue(writeU32(data.length));
        controller.enqueue(writeU32(data.length));
        controller.enqueue(writeU16(nameBytes.length));
        controller.enqueue(writeU16(0));
        controller.enqueue(nameBytes);
        controller.enqueue(data);

        // Central record
        const cen = new Uint8Array([
          0x50,0x4b,0x01,0x02,
          20,0,
          20,0,
          0,0,
          0,0,
          0,0,
          0,0
        ]);
        central.push(cen);
        central.push(writeU32(c));
        central.push(writeU32(data.length));
        central.push(writeU32(data.length));
        central.push(writeU16(nameBytes.length));
        central.push(writeU16(0));
        central.push(writeU16(0));
        central.push(writeU16(0));
        central.push(writeU16(0));
        central.push(writeU32(0));
        central.push(writeU32(offset));
        central.push(nameBytes);

        offset += (
          local.length +
          4 + // crc32
          4 + // size
          4 + // size
          2 + // name length
          2 + // extra length
          nameBytes.length +
          data.length
        );
      }

      // Fetch ZIP for each order_id
      for (const oid of orderIds) {
        const url = `${env.SITE_URL}/api/export-evidence?order_id=${encodeURIComponent(oid)}`;
        const res = await fetch(url, {
          headers: { "x-admin-pin": adminPin }
        });
        const arr = new Uint8Array(await res.arrayBuffer());
        await addFile(`${oid}/evidence-bundle.zip`, arr);
      }

      // Write central directory
      const centralBytes = central.map(a => a instanceof Uint8Array ? a : new Uint8Array([a]));
      const centralBlob = new Uint8Array(centralBytes.reduce((s,a)=>s+a.length, 0));
      let off = 0;
      for (const a of centralBytes) { centralBlob.set(a, off); off += a.length; }
      controller.enqueue(centralBlob);

      // EOCD
      const eocd = new Uint8Array([
        0x50,0x4b,0x05,0x06,
        0,0,
        0,0,
        ...writeU16(central.length/13), // number of entries (each entry ~13 pieces)
        ...writeU16(central.length/13),
        ...writeU32(centralBlob.length),
        ...writeU32(offset),
        0,0
      ]);
      controller.enqueue(eocd);

      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`
    }
  });
}
