// /functions/api/payment-complete-update.js
import Stripe from 'stripe'

export async function onRequestPost({ request, env }) {
  try {
    // --- config & helpers ---
    const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY
    const db = env.DB // D1 binding
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://techbrot.com',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    }

    const jsonResponse = (obj, status = 200) =>
      new Response(JSON.stringify(obj), {
        status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })

    if (!STRIPE_SECRET_KEY) return jsonResponse({ error: 'Missing Stripe key' }, 500)

    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
      httpClient: Stripe.createFetchHttpClient()
    })

    // Accept body JSON or fallback to empty object
    const body = await request.json().catch(() => ({}))

    // session id from body or query param
    const url = new URL(request.url)
    const sessionId =
      (body && (body.session_id || body.id || body.session)) ||
      url.searchParams.get('session_id') ||
      url.searchParams.get('id') ||
      undefined

    if (!sessionId) return jsonResponse({ error: 'Missing session_id' }, 400)

    // Retrieve the Stripe Checkout Session (expand commonly useful fields)
    let session
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items.data.price.product', 'payment_intent', 'customer', 'invoice']
      })
    } catch (err) {
      console.error('Stripe retrieve error', err)
      return jsonResponse({ error: 'Failed to retrieve Stripe session', details: String(err && err.message) }, 500)
    }

    // Extract canonical details from Session
    const sess = session || {}
    const line_items = (sess.line_items && sess.line_items.data) || []
    const paymentIntent = sess.payment_intent || (sess.payment_intent && sess.payment_intent.id) || null
    const invoice = sess.invoice || null
    const customer = sess.customer || null
    const customer_email = sess.customer_email || (customer && customer.email) || (sess.customer_details && sess.customer_details.email) || ''
    const customer_id = (customer && (customer.id || customer)) || (sess.customer && (sess.customer.id || sess.customer)) || null
    const payment_status = sess.payment_status || (paymentIntent && paymentIntent.status) || ''
    const currency = (line_items[0] && (line_items[0].currency || (line_items[0].price && line_items[0].price.currency))) || (sess.currency) || 'usd'
    // compute amount totals safely
    let amount_total = sess.amount_total || 0
    if (!amount_total && paymentIntent && paymentIntent.amount_received) amount_total = paymentIntent.amount_received
    if (!amount_total && invoice && invoice.amount_paid) amount_total = invoice.amount_paid
    // amount is in cents for Stripe objects; normalize to dollars for storage if desired
    const amount_total_cents = Number(amount_total || 0)
    const amount_total_decimal = amount_total_cents ? (amount_total_cents / 100) : 0

    // Build safe JSON snippets to store
    const lineitems_json = JSON.stringify(line_items.map(li => ({
      id: li.id,
      description: li.description || (li.price && li.price.product && li.price.product.name) || (li.price && li.price.nickname) || '',
      price: (li.price && (li.price.id || li.price)) || null,
      currency: li.currency || (li.price && li.price.currency) || null,
      unit_amount: (li.price && li.price.unit_amount) || li.amount_subtotal || null,
      quantity: li.quantity || 1
    })))

    const session_json = JSON.stringify({
      id: sess.id,
      mode: sess.mode,
      payment_status: sess.payment_status,
      customer_email,
      customer_id,
      amount_total_cents,
      currency,
      created: sess.created || null
    })

    // === D1: determine which columns exist in acceptance_records ===
    async function getAcceptanceColumns() {
      try {
        // PRAGMA table_info returns rows with 'name' key in D1
        const r = await db.prepare("PRAGMA table_info('acceptance_records')").all()
        const rows = (r && r.results) || []
        return new Set(rows.map(row => row.name))
      } catch (e) {
        console.warn('Could not read acceptance_records schema', e)
        return new Set()
      }
    }

    const cols = await getAcceptanceColumns()

    // Helper: update row if exists
    async function findRecordBySession(session_id) {
      try {
        const q = `SELECT * FROM acceptance_records WHERE stripe_session_id = ? ORDER BY id DESC LIMIT 1`
        const res = await db.prepare(q).bind(session_id).first()
        return res && res.results && res.results[0] ? res.results[0] : (res || null)
      } catch (e) {
        // Some D1 adapters return .all() / .first() differently; try alternative
        try {
          const alt = await db.prepare(q).bind(session_id).all()
          const altRows = (alt && alt.results) || []
          return altRows[0] || null
        } catch (ee) {
          console.warn('findRecordBySession failure', ee)
          return null
        }
      }
    }

    // Note: D1 SDK usage can vary; attempt to query safely
    let existingRow = null
    try {
      const q = `SELECT * FROM acceptance_records WHERE stripe_session_id = ? ORDER BY id DESC LIMIT 1`
      const r = await db.prepare(q).bind(sess.id).all()
      const rows = (r && r.results) || []
      existingRow = rows[0] || null
    } catch (e) {
      // fallback - ignore
      existingRow = null
    }

    // Build update mapping only for columns that exist
    const toUpdate = {}
    if (cols.has('customer_id')) toUpdate.customer_id = customer_id || null
    if (cols.has('customer_email')) toUpdate.customer_email = customer_email || null
    if (cols.has('payment_intent_id')) toUpdate.payment_intent_id = (paymentIntent && paymentIntent.id) || (typeof paymentIntent === 'string' ? paymentIntent : null)
    if (cols.has('invoice_id')) toUpdate.invoice_id = (invoice && invoice.id) || null
    if (cols.has('paid_amount')) toUpdate.paid_amount = amount_total_decimal
    if (cols.has('paid_amount_cents')) toUpdate.paid_amount_cents = amount_total_cents
    if (cols.has('currency')) toUpdate.currency = currency || null
    if (cols.has('payment_status')) toUpdate.payment_status = payment_status || null
    if (cols.has('lineitems_json')) toUpdate.lineitems_json = lineitems_json
    if (cols.has('session_json')) toUpdate.session_json = session_json
    if (cols.has('receipt_url') && paymentIntent && paymentIntent.charges && paymentIntent.charges.data && paymentIntent.charges.data[0]) {
      toUpdate.receipt_url = paymentIntent.charges.data[0].receipt_url || null
    }

    // If existing row found -> UPDATE
    if (existingRow) {
      // Build SET clause and bindings
      const setParts = []
      const bindVals = []
      for (const [k, v] of Object.entries(toUpdate)) {
        setParts.push(`${k} = ?`)
        bindVals.push(v)
      }
      // also set updated timestamp if column exists
      if (cols.has('updated_at')) {
        setParts.push(`updated_at = datetime('now')`)
      } else if (cols.has('completed_at')) {
        setParts.push(`completed_at = datetime('now')`)
      }
      // ensure stripe_session_id in WHERE
      const sql = `UPDATE acceptance_records SET ${setParts.join(', ')} WHERE stripe_session_id = ?`
      bindVals.push(sess.id)
      try {
        await db.prepare(sql).bind(...bindVals).run()
      } catch (e) {
        console.error('D1 update error', e)
        return jsonResponse({ error: 'Database update failed', details: String(e && e.message) }, 500)
      }

      return jsonResponse({
        ok: true,
        action: 'updated',
        stripe_session_id: sess.id,
        session: { id: sess.id, mode: sess.mode },
        payment: {
          customer_id,
          customer_email,
          payment_intent: paymentIntent && (paymentIntent.id || paymentIntent),
          invoice: invoice && invoice.id,
          amount_total_cents,
          amount_total_decimal,
          currency,
          payment_status
        }
      }, 200)
    }

    // No existing row -> INSERT a minimal record (only safe columns)
    // Build insert columns / values arrays
    const insertCols = []
    const insertVals = []

    // common fields we can safely insert if exist
    if (cols.has('stripe_session_id')) { insertCols.push('stripe_session_id'); insertVals.push(sess.id) }
    if (cols.has('email')) { insertCols.push('email'); insertVals.push(customer_email || '') }
    if (cols.has('order_id')) {
      // prefer any metadata order_id on session, else generate TB-... canonical like earlier
      const maybeOrder = (sess.metadata && sess.metadata.order_id) || `TB-${Math.random().toString(36).slice(2,9).toUpperCase()}`
      insertCols.push('order_id'); insertVals.push(maybeOrder)
    }
    if (cols.has('cart_json')) { insertCols.push('cart_json'); insertVals.push(JSON.stringify([])) }
    if (cols.has('lineitems_json')) { insertCols.push('lineitems_json'); insertVals.push(lineitems_json) }
    if (cols.has('session_json')) { insertCols.push('session_json'); insertVals.push(session_json) }
    if (cols.has('customer_id')) { insertCols.push('customer_id'); insertVals.push(customer_id || null) }
    if (cols.has('customer_email')) { insertCols.push('customer_email'); insertVals.push(customer_email || null) }
    if (cols.has('payment_intent_id')) { insertCols.push('payment_intent_id'); insertVals.push((paymentIntent && paymentIntent.id) || null) }
    if (cols.has('invoice_id')) { insertCols.push('invoice_id'); insertVals.push((invoice && invoice.id) || null) }
    if (cols.has('paid_amount')) { insertCols.push('paid_amount'); insertVals.push(amount_total_decimal) }
    if (cols.has('paid_amount_cents')) { insertCols.push('paid_amount_cents'); insertVals.push(amount_total_cents) }
    if (cols.has('currency')) { insertCols.push('currency'); insertVals.push(currency) }
    if (cols.has('payment_status')) { insertCols.push('payment_status'); insertVals.push(payment_status || '') }
    if (cols.has('accepted_at')) {
      // keep accepted_at for compatibility; set to now if exists
      insertCols.push('accepted_at'); insertVals.push(new Date().toISOString())
    } else if (cols.has('created_at')) {
      insertCols.push('created_at'); insertVals.push(new Date().toISOString())
    }

    // Build INSERT statement
    if (insertCols.length === 0) {
      // No known columns we can insert into - fail gracefully
      return jsonResponse({ error: 'No writable columns found in acceptance_records' }, 500)
    }

    const placeholders = insertCols.map(() => '?').join(', ')
    const insertSQL = `INSERT INTO acceptance_records (${insertCols.join(', ')}) VALUES (${placeholders})`

    try {
      await db.prepare(insertSQL).bind(...insertVals).run()
    } catch (e) {
      console.error('D1 insert error', e)
      return jsonResponse({ error: 'Database insert failed', details: String(e && e.message) }, 500)
    }

    return jsonResponse({
      ok: true,
      action: 'inserted',
      stripe_session_id: sess.id,
      session: { id: sess.id, mode: sess.mode },
      payment: {
        customer_id,
        customer_email,
        payment_intent: paymentIntent && (paymentIntent.id || paymentIntent),
        invoice: invoice && invoice.id,
        amount_total_cents,
        amount_total_decimal,
        currency,
        payment_status
      }
    }, 200)

  } catch (err) {
    console.error('payment-complete-update error', err)
    return new Response(JSON.stringify({ error: 'Server error', details: String(err && err.message) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
