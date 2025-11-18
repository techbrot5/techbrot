// functions/api/admin-delete-evidence.js
// ---------------------------------------------------------------------------
// Deletes R2 evidence for an order.
// Requires: x-admin-pin == env.ADMIN_PIN
// POST body: { order_id: "...", confirm: "yes" }
// Writes immutable audit record to R2
// ---------------------------------------------------------------------------

export async function onRequestPost(context) {
  const { request, env } = context;
  const r2 = env.R2;

  const adminPin = request.headers.get("x-admin-pin");
  if (!adminPin || adminPin !== env.ADMIN_PIN) {
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  let body = null;
  try { body = await request.json(); }
  catch { }

  if (!body || !body.order_id) {
    return new Response(JSON.stringify({ error: "order_id required" }), { status: 400 });
  }

  if (!body.confirm || body.confirm !== "yes") {
    return new Response(JSON.stringify({
      error: "confirmation_required",
      message: "Send confirm: \"yes\" to delete evidence."
    }), { status: 400 });
  }

  const order_id = body.order_id;

  const audit = {
    action: "delete_evidence",
    order_id,
    performed_by: "admin",
    performed_at: new Date().toISOString(),
    deleted: [],
    errors: []
  };

  async function deletePrefix(prefix) {
    try {
      const list = await r2.list({ prefix });
      for (const obj of list.objects || []) {
        try {
          await r2.delete(obj.key);
          audit.deleted.push(obj.key);
        } catch (err) {
          audit.errors.push({ key: obj.key, error: String(err) });
        }
      }
    } catch (err) {
      audit.errors.push({ prefix, error: String(err) });
    }
  }

  // Email attempts
  await deletePrefix(`email_attempts/${order_id}`);

  // Verification files
  await deletePrefix(`verification/${order_id}`);

  // Write audit log
  const logKey = `deletions/${order_id}/deletion-${Date.now()}.json`;
  try {
    await r2.put(logKey, JSON.stringify(audit, null, 2), {
      httpMetadata: { contentType: "application/json" }
    });
  } catch (err) {
    audit.errors.push({ key: logKey, error: String(err) });
  }

  return new Response(JSON.stringify({ ok: true, audit }, null, 2), {
    headers: { "Content-Type": "application/json" }
  });
}
