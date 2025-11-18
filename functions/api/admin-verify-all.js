// functions/api/admin-verify-all.js
// ---------------------------------------------------------------------------
// STREAMING VERSION (SSE-like) FOR DASHBOARD PROGRESS MODAL
// - Streams verification logs progressively
// - Requires x-admin-pin == env.ADMIN_PIN
// - Uses limited concurrency (CONCURRENCY)
// ---------------------------------------------------------------------------

const CONCURRENCY = 6;

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env.DB;

  const adminPin = request.headers.get("x-admin-pin");
  if (!adminPin || adminPin !== env.ADMIN_PIN) {
    return new Response("unauthorized\n", {
      status: 401,
      headers: { "Content-Type": "text/plain" }
    });
  }

  // Create a streaming body
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  function log(line) {
    writer.write(encoder.encode(line + "\n"));
  }

  async function finish() {
    try { await writer.close(); } catch (_) { }
  }

  // Start streaming immediately
  log("🔍 Starting verification of all orders…");

  try {
    // fetch all order IDs
    const res = await db.prepare("SELECT order_id FROM orders ORDER BY created_at DESC").all();
    const rows = res?.results || [];
    const orderIds = rows.map(r => r.order_id).filter(Boolean);

    if (!orderIds.length) {
      log("No orders found.");
      await finish();
      return new Response(readable, {
        headers: { "Content-Type": "text/plain" }
      });
    }

    log(`Found ${orderIds.length} orders.`);
    log(`Running with concurrency = ${CONCURRENCY}`);

    let idx = 0;
    const results = [];

    async function verify(orderId) {
      const url = `${env.SITE_URL}/api/verify-evidence?order_id=${encodeURIComponent(orderId)}`;
      try {
        const res = await fetch(url, {
          headers: {
            "x-admin-pin": adminPin,
            "Accept": "application/json"
          }
        });

        const text = await res.text();
        let data;
        try { data = JSON.parse(text); }
        catch { data = { parseError: true, text }; }

        if (res.status === 200 && data.ok === true) {
          log(`✔ ${orderId} verified`);
          return { order_id: orderId, ok: true, data };
        } else {
          log(`✖ ${orderId} FAILED`);
          return { order_id: orderId, ok: false, data };
        }
      } catch (err) {
        log(`✖ ${orderId} error: ${err}`);
        return { order_id: orderId, ok: false, error: String(err) };
      }
    }

    const workers = new Array(CONCURRENCY).fill(0).map(async () => {
      while (true) {
        const i = idx++;
        if (i >= orderIds.length) break;
        const id = orderIds[i];
        const result = await verify(id);
        results.push(result);
      }
    });

    await Promise.all(workers);

    const failures = results.filter(r => !r.ok).length;
    const passed = results.length - failures;

    log("");
    log("Summary:");
    log(`Total orders: ${results.length}`);
    log(`Verified OK: ${passed}`);
    log(`Failed: ${failures}`);

  } catch (err) {
    log("Fatal error: " + String(err));
  }

  await finish();

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache"
    }
  });
}
