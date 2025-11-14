import Stripe from 'stripe'

export async function onRequestGet({ request, env }) {
  const CORS = {
    'Access-Control-Allow-Origin': 'https://techbrot.com',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  }

  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { ...CORS, 'Content-Type': 'application/json' }
    })

  try {
    const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY
    if (!STRIPE_SECRET_KEY)
      return json({ error: 'Missing Stripe key' }, 500)

    const url = new URL(request.url)
    const sessionId =
      url.searchParams.get('session_id') ||
      url.searchParams.get('id') ||
      undefined

    if (!sessionId)
      return json({ error: 'Missing session_id' }, 400)

    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
      httpClient: Stripe.createFetchHttpClient()
    })

    /* ---------------------------------------------------
       RETRIEVE SESSION + EXPAND EVERYTHING NEEDED
    ----------------------------------------------------*/
    let session
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: [
          'line_items',
          'line_items.data.price.product',
          'payment_intent',
          'payment_intent.charges.data',
          'invoice',
          'customer'
        ]
      })
    } catch (err) {
      console.error('Stripe retrieve error', err)
      return json({
        error: 'Failed to retrieve Stripe session',
        details: String(err?.message)
      }, 500)
    }

    const rawLineItems = session.line_items?.data || []

    /* ---------------------------------------------------
       FIXED LINE ITEMS — CORRECT ANNUAL UNIT_AMOUNTS
    ----------------------------------------------------*/
    const line_items = rawLineItems.map(li => {
      const price = li.price || {}
      const product = price.product || {}
      const recurring = price.recurring || null

      // Stripe ALWAYS gives TRUE billed amount here:
      const amount_total = Number(li.amount_total || 0)

      // FIX — ALWAYS send billed amount as unit_amount
      const unit_amount = amount_total  

      // interval (month/year)
      const interval =
        recurring?.interval ||
        price?.recurring?.interval ||
        null

      return {
        id: li.id,
        description:
          li.description ||
          product?.name ||
          price.nickname ||
          '',
        quantity: Number(li.quantity || 1),
        amount_total,
        unit_amount,          // FIXED — always correct
        currency:
          li.currency ||
          price.currency ||
          session.currency ||
          'usd',
        recurring: interval ? { interval } : null,
        price_id: price.id || null,
        product: {
          id: product?.id || null,
          name: product?.name || null,
          metadata: product?.metadata || {}
        }
      }
    })

    /* ---------------------------------------------------
       FIXED TOTAL
    ----------------------------------------------------*/
    let amount_total = Number(session.amount_total || 0)
    if (!amount_total && line_items.length) {
      amount_total = line_items.reduce((sum, li) => sum + li.amount_total, 0)
    }

    /* ---------------------------------------------------
       RECEIPT URL / INVOICE URL LOGIC (ACH SAFE)
    ----------------------------------------------------*/
    let receipt_url = null
    let invoice_pdf = null
    let hosted_invoice_url = null

    // CARD receipts
    try {
      const pi = session.payment_intent
      if (pi?.charges?.data?.[0]) {
        receipt_url = pi.charges.data[0].receipt_url || null
      }
    } catch (_) {}

    // Invoices (ACH or subscription invoices)
    try {
      if (session.invoice) {
        invoice_pdf = session.invoice.invoice_pdf || null
        hosted_invoice_url = session.invoice.hosted_invoice_url || null
      }
    } catch (_) {}

    // If ACH → provide hosted invoice page instead
    if (!receipt_url && hosted_invoice_url) {
      receipt_url = hosted_invoice_url
    }

    /* ---------------------------------------------------
       CUSTOMER INFO
    ----------------------------------------------------*/
    const customer_email =
      session.customer_email ||
      session.customer?.email ||
      session.customer_details?.email ||
      ''

    const customer_name =
      session.customer_details?.name ||
      session.customer?.name ||
      ''

    /* ---------------------------------------------------
       FINAL RESPONSE
    ----------------------------------------------------*/
    const out = {
      session_id: session.id,
      mode: session.mode || null,
      payment_status: session.payment_status || null,
      currency:
        session.currency ||
        line_items[0]?.currency ||
        'usd',

      amount_total,

      customer_details: {
        email: customer_email,
        name: customer_name
      },

      line_items,

      receipt_url,
      invoice_pdf,
      hosted_invoice_url,

      raw_session: {
        id: session.id,
        created: session.created || null,
        metadata: session.metadata || {}
      }
    }

    return json(out, 200)

  } catch (err) {
    console.error('retrieve-checkout-session error', err)
    return new Response(JSON.stringify({
      error: 'Server error',
      details: String(err?.message)
    }), {
      status: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' }
    })
  }
}
