export async function onRequestPost(context) {
  try {
    const db = context.env.DB; // your D1 binding

    const body = await context.request.json();

    const stmt = `
      INSERT INTO acceptance_records 
      (email, ip_address, user_agent, terms_version, accepted_at, stripe_session_id, price_id, plan_name, raw_json)
      VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?)
    `;

    await db.prepare(stmt).bind(
      body.email || "",
      body.ip || "",
      body.user_agent || "",
      body.terms_version || "1.0",
      body.stripe_session_id || "",
      "",
      "",
      JSON.stringify(body)
    ).run();

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}
