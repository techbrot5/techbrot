// /functions/api/acceptance-log.js
// Stores acceptance evidence in D1, uploads screenshot to R2,
// computes SHA-256 evidence hash. Email removed.

export async function onRequestPost({ request, env }) {
  try {
    const db = env.DB;
    const R2 = env.R2;
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
    }

    // Core acceptance fields
    const order_id = body.order_id || ("TB-" + Math.random().toString(36).slice(2, 9).toUpperCase());
    const email = body.email || "";
    const ip = body.ip || "";
    const user_agent = body.user_agent || request.headers.get("user-agent") || "";
    const timezone = body.timezone || "";
    const terms_version = body.terms_version || "1.0";
    const refund_policy_version = body.refund_policy_version || "1.0";
    const stripe_session_id = body.stripe_session_id || "";
    const price_id = body.price_id || "";
    const plan_name = body.plan_name || "";

    const cart_json = JSON.stringify(body.cart || []);
    const lineitems_json = JSON.stringify(body.lineItems || []);
    const raw_json = JSON.stringify(body);

    // Screenshot variables
    let screenshot_url = "";
    let evidence_hash = "";

    if (body.screenshot_base64) {
      const dataUrl = body.screenshot_base64;
      const matches = dataUrl.match(/^data:(image\/\w+);base64,(.+)$/);

      let b64 = matches ? matches[2] : dataUrl;

      // Decode base64 → bytes
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      // Compute SHA-256 evidence hash
      const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
      evidence_hash = [...new Uint8Array(hashBuffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

      // Upload to R2
      const filename = `screenshots/${Date.now()}_${Math.random().toString(36).slice(2, 8)}.jpg`;
      await R2.put(filename, bytes);

      screenshot_url = `${env.R2_PUBLIC_URL}/${filename}`;
    }

    // Insert acceptance record into D1
    const stmt = `
      INSERT INTO acceptance_records
      (email, order_id, ip_address, user_agent, timezone, terms_version,
       refund_policy_version, accepted_at, stripe_session_id, price_id, plan_name,
       cart_json, lineitems_json, screenshot_url, evidence_hash, raw_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.prepare(stmt).bind(
      email,
      order_id,
      ip,
      user_agent,
      timezone,
      terms_version,
      refund_policy_version,
      stripe_session_id,
      price_id,
      plan_name,
      cart_json,
      lineitems_json,
      screenshot_url,
      evidence_hash,
      raw_json
    ).run();

    return new Response(
      JSON.stringify({
        ok: true,
        order_id,
        screenshot_url,
        evidence_hash
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
