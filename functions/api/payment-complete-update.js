// /functions/api/payment-complete-update.js
import Stripe from 'stripe'

export async function onRequestPost({ request, env }) {
  try {
    const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY
    const db = env.DB
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

    const body = await request.json().catch(() => ({}))

    const url = new URL(request.url)
    const sessionId =
      (body && (body.session_id || body.id || body.session)) ||
      url.searchParams.get('session_id') ||
      url.searchParams.get('id') ||
      undefined

    if (!sessionId) return jsonResponse({ error: 'Missing session_id' }, 400)

    let session
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items.data.price.product', 'payment_intent', 'customer', 'invoice']
      })
    } catch (err) {
      console.error('Stripe retrieve error', err)
      return jsonResponse({ error: 'Failed to retrieve Stripe session', details: String(err?.message) }, 500)
    }

    const sess = session || {}
    const line_items = (sess.line_items && sess.line_items.data) || []

    /* -------------------------------
       FIX #1 – PaymentIntent object + ID properly extracted
    ---------------------------------*/
    const paymentIntentObj = sess.payment_intent || null
    const paymentIntentId =
      (paymentIntentObj && paymentIntentObj.id) ||
      (typeof paymentIntentObj === "string" ? paymentIntentObj : null)

    /* -------------------------------
       FIX #2 – Invoice fallback (ACH support)
    ---------------------------------*/
    const invoiceObj =
      sess.invoice ||
      (paymentIntentObj && paymentIntentObj.invoice) ||
      null

    const customer = sess.customer || null
    const customer_email =
      sess.customer_email ||
      (customer && customer.email) ||
      (sess.customer_details && sess.customer_details.email) ||
      ''

    const customer_id =
      (customer && (customer.id || customer)) ||
      (sess.customer && (sess.customer.id || sess.customer)) ||
      null

    const payment_status =
      sess.payment_status ||
      (paymentIntentObj && paymentIntentObj.status) ||
      ''

    const currency =
      sess.currency ||
      (line_items[0]?.currency ||
        line_items[0]?.price?.currency) ||
      'usd'

    let amount_total = sess.amount_total || 0
    if (!amount_total && paymentIntentObj?.amount_received)
      amount_total = paymentIntentObj.amount_received
    if (!amount_total && invoiceObj?.amount_paid)
      amount_total = invoiceObj.amount_paid

    const amount_total_cents = Number(amount_total || 0)
    const amount_total_decimal = amount_total_cents / 100

    const lineitems_json = JSON.stringify(
      line_items.map(li => ({
        id: li.id,
        description:
          li.description ||
          li.price?.product?.name ||
          li.price?.nickname ||
          '',
        price: li.price?.id || null,
        currency: li.currency || li.price?.currency || null,
        unit_amount: li.price?.unit_amount || li.amount_subtotal || null,
        quantity: li.quantity || 1
      }))
    )

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

    async function getAcceptanceColumns() {
      try {
        const r = await db.prepare("PRAGMA table_info('acceptance_records')").all()
        const rows = (r && r.results) || []
        return new Set(rows.map(row => row.name))
      } catch (e) {
        console.warn('schema read error', e)
        return new Set()
      }
    }

    const cols = await getAcceptanceColumns()

    let existingRow = null
    try {
      const q = `SELECT * FROM acceptance_records WHERE stripe_session_id = ? ORDER BY id DESC LIMIT 1`
      const r = await db.prepare(q).bind(sess.id).all()
      const rows = (r && r.results) || []
      existingRow = rows[0] || null
    } catch (_) {}

    const toUpdate = {}
    if (cols.has('customer_id')) toUpdate.customer_id = customer_id
    if (cols.has('customer_email')) toUpdate.customer_email = customer_email
    if (cols.has('payment_intent_id')) toUpdate.payment_intent_id = paymentIntentId
    if (cols.has('invoice_id')) toUpdate.invoice_id = invoiceObj?.id || null
    if (cols.has('paid_amount')) toUpdate.paid_amount = amount_total_decimal
    if (cols.has('paid_amount_cents')) toUpdate.paid_amount_cents = amount_total_cents
    if (cols.has('currency')) toUpdate.currency = currency
    if (cols.has('payment_status')) toUpdate.payment_status = payment_status
    if (cols.has('lineitems_json')) toUpdate.lineitems_json = lineitems_json
    if (cols.has('session_json')) toUpdate.session_json = session_json

    /* -------------------------------
       FIX #3 – ACH-safe receipt_url fallback
    ---------------------------------*/
    if (cols.has('receipt_url')) {
      const achFallback =
        invoiceObj?.hosted_invoice_url ||
        sess.receipt_url ||
        null

      const cardReceipt =
        paymentIntentObj?.charges?.data?.[0]?.receipt_url ||
        null

      toUpdate.receipt_url = cardReceipt || achFallback
    }

    if (existingRow) {
      const setParts = []
      const bindVals = []
      for (const [k, v] of Object.entries(toUpdate)) {
        setParts.push(`${k} = ?`)
        bindVals.push(v)
      }
      if (cols.has('updated_at')) {
        setParts.push(`updated_at = datetime('now')`)
      } else if (cols.has('completed_at')) {
        setParts.push(`completed_at = datetime('now')`)
      }

      const sql = `UPDATE acceptance_records SET ${setParts.join(', ')} WHERE stripe_session_id = ?`
      bindVals.push(sess.id)

      try {
        await db.prepare(sql).bind(...bindVals).run()
      } catch (e) {
        console.error('D1 update error', e)
        return jsonResponse({ error: 'Database update failed', details: String(e?.message) }, 500)
      }

      return jsonResponse({
        ok: true,
        action: 'updated',
        stripe_session_id: sess.id,
        session: { id: sess.id, mode: sess.mode },
        payment: {
          customer_id,
          customer_email,
          payment_intent: paymentIntentId,
          invoice: invoiceObj?.id || null,
          amount_total_cents,
          amount_total_decimal,
          currency,
          payment_status
        }
      }, 200)
    }

    const insertCols = []
    const insertVals = []

    if (cols.has('stripe_session_id')) { insertCols.push('stripe_session_id'); insertVals.push(sess.id) }
    if (cols.has('email')) { insertCols.push('email'); insertVals.push(customer_email || '') }
    if (cols.has('order_id')) {
      const maybeOrder = (sess.metadata && sess.metadata.order_id) || `TB-${Math.random().toString(36).slice(2,9).toUpperCase()}`
      insertCols.push('order_id'); insertVals.push(maybeOrder)
    }
    if (cols.has('cart_json')) { insertCols.push('cart_json'); insertVals.push(JSON.stringify([])) }
    if (cols.has('lineitems_json')) { insertCols.push('lineitems_json'); insertVals.push(lineitems_json) }
    if (cols.has('session_json')) { insertCols.push('session_json'); insertVals.push(session_json) }
    if (cols.has('customer_id')) { insertCols.push('customer_id'); insertVals.push(customer_id) }
    if (cols.has('customer_email')) { insertCols.push('customer_email'); insertVals.push(customer_email) }
    if (cols.has('payment_intent_id')) { insertCols.push('payment_intent_id'); insertVals.push(paymentIntentId) }
    if (cols.has('invoice_id')) { insertCols.push('invoice_id'); insertVals.push(invoiceObj?.id || null) }
    if (cols.has('paid_amount')) { insertCols.push('paid_amount'); insertVals.push(amount_total_decimal) }
    if (cols.has('paid_amount_cents')) { insertCols.push('paid_amount_cents'); insertVals.push(amount_total_cents) }
    if (cols.has('currency')) { insertCols.push('currency'); insertVals.push(currency) }
    if (cols.has('payment_status')) { insertCols.push('payment_status'); insertVals.push(payment_status) }
    if (cols.has('accepted_at')) {
      insertCols.push('accepted_at'); insertVals.push(new Date().toISOString())
    } else if (cols.has('created_at')) {
      insertCols.push('created_at'); insertVals.push(new Date().toISOString())
    }

    if (!insertCols.length) {
      return jsonResponse({ error: 'No writable columns found in acceptance_records' }, 500)
    }

    const placeholders = insertCols.map(() => '?').join(', ')
    const insertSQL = `INSERT INTO acceptance_records (${insertCols.join(', ')}) VALUES (${placeholders})`

    try {
      await db.prepare(insertSQL).bind(...insertVals).run()
    } catch (e) {
      console.error('D1 insert error', e)
      return jsonResponse({ error: 'Database insert failed', details: String(e?.message) }, 500)
    }

    return jsonResponse({
      ok: true,
      action: 'inserted',
      stripe_session_id: sess.id,
      session: { id: sess.id, mode: sess.mode },
      payment: {
        customer_id,
        customer_email,
        payment_intent: paymentIntentId,
        invoice: invoiceObj?.id || null,
        amount_total_cents,
        amount_total_decimal,
        currency,
        payment_status
      }
    }, 200)

  } catch (err) {
    console.error('payment-complete-update error', err)
    return new Response(JSON.stringify({ error: 'Server error', details: String(err?.message) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
