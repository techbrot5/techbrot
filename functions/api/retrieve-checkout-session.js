// /functions/api/retrieve-checkout-session.js
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
    if (!STRIPE_SECRET_KEY) return json({ error: 'Missing Stripe key' }, 500)

    const url = new URL(request.url)
    const sessionId = url.searchParams.get('session_id') || url.searchParams.get('id') || undefined
    if (!sessionId) return json({ error: 'Missing session_id' }, 400)

    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
      httpClient: Stripe.createFetchHttpClient()
    })

    // Retrieve session and expand line items/products
    let session
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items.data.price.product', 'payment_intent', 'customer']
      })
    } catch (err) {
      console.error('Stripe retrieve error', err)
      return json({ error: 'Failed to retrieve Stripe session', details: String(err && err.message) }, 500)
    }

    // Normalize line items for frontend (safe shape)
    const rawLineItems = (session.line_items && session.line_items.data) || []
    const line_items = rawLineItems.map(li => {
      const priceObj = li.price || {}
      const product = priceObj.product || (priceObj.product && priceObj.product.id) || {}
      const recurring = priceObj.recurring || (li.price && li.price.recurring) || null

      // unit amount: prefer price.unit_amount if available; fallback to amount_subtotal / quantity
      let unit_amount = null
      if (typeof priceObj.unit_amount !== 'undefined' && priceObj.unit_amount !== null) {
        unit_amount = priceObj.unit_amount
      } else if (li.amount_subtotal && li.quantity) {
        unit_amount = Math.round((Number(li.amount_subtotal) / Number(li.quantity)) || 0)
      } else {
        unit_amount = li.amount_subtotal || null
      }

      return {
        id: li.id,
        description: li.description || (product && product.name) || priceObj.nickname || '',
        quantity: li.quantity || 1,
        amount_total: Number(li.amount_subtotal || li.amount_total || 0),
        unit_amount: Number(unit_amount || 0),
        currency: li.currency || priceObj.currency || (session.currency || 'usd'),
        recurring: recurring ? { interval: recurring.interval } : null,
        price_id: priceObj.id || null,
        product: product && typeof product === 'object' ? {
          id: product.id || null,
          name: product.name || null,
          metadata: product.metadata || {}
        } : null
      }
    })

    // Compute amount_total (prefer session.amount_total; fallback to summing line_items)
    let amount_total = Number(session.amount_total || 0)
    if (!amount_total && line_items.length) {
      amount_total = line_items.reduce((s, li) => s + (li.amount_total || 0), 0)
    }

    // Build minimal, stable response object for front-end
    const out = {
      session_id: session.id,
      mode: session.mode || null,
      payment_status: session.payment_status || null,
      currency: session.currency || (line_items[0] && line_items[0].currency) || 'usd',
      amount_total: amount_total, // in cents
      customer_details: {
        email: session.customer_email || (session.customer && session.customer.email) || (session.customer_details && session.customer_details.email) || '',
        name: (session.customer_details && session.customer_details.name) || (session.customer && session.customer.name) || ''
      },
      line_items,
      raw_session: {
        id: session.id,
        created: session.created || null,
        metadata: session.metadata || {}
      }
    }

    return json(out, 200)
  } catch (err) {
    console.error('retrieve-checkout-session error', err)
    return new Response(JSON.stringify({ error: 'Server error', details: String(err && err.message) }), {
      status: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' }
    })
  }
}
