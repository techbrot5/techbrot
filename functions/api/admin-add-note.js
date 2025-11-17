// functions/api/admin-add-note.js
// Adds an internal note to orders.notes_json (array) and optionally marks verified
export async function onRequestPost(context){
  const { request, env } = context;
  const db = env.DB;

  const pin = request.headers.get("x-admin-pin");
  if (!pin || pin !== env.ADMIN_PIN) return unauthorized();

  const body = await request.json().catch(()=>({}));
  const order_id = (body.order_id || "").toString();
  const noteText = (body.note || "").toString();
  const markVerified = Boolean(body.mark_verified);

  if (!order_id || !noteText) return new Response(JSON.stringify({ error:"order_id & note required" }), { status:400, headers:{ "Content-Type":"application/json" }});

  try {
    // fetch existing notes
    const row = await db.prepare(`SELECT notes_json FROM orders WHERE order_id = ? LIMIT 1`).bind(order_id).first();
    const notes = row && row.notes_json ? JSON.parse(row.notes_json) : [];
    const newNote = { when: new Date().toISOString(), text: noteText };
    notes.push(newNote);
    await db.prepare(`UPDATE orders SET notes_json = ? ${markVerified ? ", verified = 1, verified_at = datetime('now')" : ""} WHERE order_id = ?`)
      .bind(JSON.stringify(notes), order_id).run();

    return new Response(JSON.stringify({ ok:true }), { headers:{ "Content-Type":"application/json" }});
  } catch (e) {
    console.error("admin-add-note error", e);
    return new Response(JSON.stringify({ error:"server error" }), { status:500, headers:{ "Content-Type":"application/json" }});
  }

  function unauthorized(){ return new Response(JSON.stringify({ error:"unauthorized" }), { status:401, headers:{ "Content-Type":"application/json" } }); }
}
