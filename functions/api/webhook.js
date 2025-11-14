// /functions/api/stripe-webhook.js
import Stripe from 'stripe'

/**
 * Stripe Webhook for Cloudflare Pages Functions
 *
 * - Validates Stripe signature using STRIPE_WEBHOOK_SECRET (env)
 * - Handles: checkout.session.completed, payment_intent.succeeded, invoice.paid,
 *   charge.dispute.created, charge.dispute.closed
 * - Links Stripe event data to your existing acceptance_records row using metadata.order_id
 * - Writes payment fields to D1: stripe_session_id, stripe_payment_intent, stripe_charge_id,
 *   stripe_customer_id, stripe_subscription_id, receipt_url, card_brand, card_last4,
 *   amount, currency, payment_status, risk_level
 * - Records dispute events to acceptance_records (dispute_id, dispute_status, dispute_reason, dispute_created_at)
 *
 * Required environment bindings:
 *  - env.DB         (D1 binding)
 *  - env.STRIPE_SECRET_KEY
 *  - env.STRIPE_WEBHOOK_SECRET
 *
 * Deploy:
 *  - Set STRIPE_WEBHOOK_SECRET to the endpoint signing secret from Stripe
 *  - Point your Stripe webhook endpoint to <your-pages-url>/api/stripe-webhook
 */

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'https://techbrot.com',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function onRequestPost(context) {
  const { request, env } = context

  const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY
  const STRIPE_WEBHOOK_SECRET = env.STRIPE_WEBHOOK_SECRET
  const db = env.DB

  if (!STRIPE_WEBHOOK_SECRET || !STRIPE_SECRET_KEY) {
    return jsonError('Stripe webhook secret or Stripe key missing in env', 500)
  }

  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
    httpClient: Stripe.createFetchHttpClient(),
  })

  // Get raw body text for signature verification
  let rawBody
  try {
    rawBody = await request.text()
  } catch (err) {
    console.error('Failed to read raw body', err)
    return jsonError('Failed to read request body', 400)
  }

  // Retrieve signature header
  const sig = request.headers.get('stripe-signature')
  if (!sig) {
    return jsonError('Missing Stripe signature header', 400)
  }

  let event
  try {
    // constructEvent verifies signature and parses JSON
    event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Stripe signature verification failed', err.message)
    return jsonError('Invalid signature', 400)
  }

  try {
    const type = event.type
    const obj = event.data.object || {}

    // Helper to update acceptance record given order_id
    async function linkToAcceptanceRecord(orderId, updates = {}) {
      if (!orderId) return null
      // Build SET clause dynamically
      const keys = Object.keys(updates)
      if (!keys.length) return null

      const setClause = keys.map(k => `${k} = ?`).join(', ')
      const values = keys.map(k => updates[k])
      // update by order_id
      const sql = `UPDATE acceptance_records SET ${setClause} WHERE order_id = ?`
      try {
        await db.prepare(sql).bind(...values, orderId).run()
        return true
      } catch (err) {
        console.error('D1 update error', err)
        return false
      }
    }

    // Helper to optionally store a dispute record on acceptance_records
    async function recordDispute(orderId, dispute) {
      if (!orderId) return null
      const updates = {
        dispute_id: dispute.id || null,
        dispute_status: dispute.status || null,
        dispute_reason: dispute.reason || null,
        dispute_created_at: dispute.created ? new Date(dispute.created * 1000).toISOString() : null,
        dispute_last_update: new Date().toISOString()
      }
      return await linkToAcceptanceRecord(orderId, updates)
    }

    // Extract order_id from metadata if present
    const metadata = obj.metadata || {}
    const orderId = metadata.order_id || metadata.order_id?.toString?.() || null

    // Handlers for event types
    switch (type) {
      case 'checkout.session.completed': {
        // session object contains: id, payment_intent, customer, subscription (maybe), amount_total, currency, metadata
        const session = obj
        const updates = {
          stripe_session_id: session.id || null,
          stripe_customer_id: session.customer ? String(session.customer) : null,
          stripe_subscription_id: session.subscription ? String(session.subscription) : null,
          stripe_payment_intent: session.payment_intent ? String(session.payment_intent) : null,
          payment_status: session.payment_status || null,
          receipt_url: session.payment_intent ? null : null // will be filled by payment_intent.succeeded
        }

        // Link
        await linkToAcceptanceRecord(orderId, updates)
        // Optionally fetch PaymentIntent details to store more fields immediately
        if (session.payment_intent) {
          try {
            const pi = await stripe.paymentIntents.retrieve(session.payment_intent)
            const charge = (pi.charges && pi.charges.data && pi.charges.data[0]) || null
            const more = {
              stripe_payment_intent: pi.id || null,
              amount: typeof pi.amount === 'number' ? pi.amount : null,
              currency: pi.currency || null,
              payment_status: pi.status || null
            }
            if (charge) {
              more.stripe_charge_id = charge.id || null
              more.card_brand = (charge.payment_method_details && charge.payment_method_details.card && charge.payment_method_details.card.brand) || null
              more.card_last4 = (charge.payment_method_details && charge.payment_method_details.card && charge.payment_method_details.card.last4) || null
              more.receipt_url = charge.receipt_url || null
              // risk level if present
              if (charge.outcome && charge.outcome.risk_level) {
                more.risk_level = charge.outcome.risk_level
              }
            }
            await linkToAcceptanceRecord(orderId, more)
          } catch (err) {
            console.warn('Could not fetch paymentIntent from Stripe', err.message)
          }
        }

        break
      }

      case 'payment_intent.succeeded': {
        const pi = obj
        // find the initial order_id: pi.metadata may contain it, or the Checkout Session will have it (we prefer pi.metadata)
        const piOrderId = (pi.metadata && pi.metadata.order_id) || orderId || null

        // attach basic PI info
        const updates = {
          stripe_payment_intent: pi.id || null,
          amount: typeof pi.amount === 'number' ? pi.amount : null,
          currency: pi.currency || null,
          payment_status: pi.status || null
        }

        // add charges info if available
        const charge = (pi.charges && pi.charges.data && pi.charges.data[0]) || null
        if (charge) {
          updates.stripe_charge_id = charge.id || null
          updates.stripe_customer_id = charge.customer ? String(charge.customer) : null
          updates.receipt_url = charge.receipt_url || null
          // card details
          updates.card_brand = (charge.payment_method_details && charge.payment_method_details.card && charge.payment_method_details.card.brand) || null
          updates.card_last4 = (charge.payment_method_details && charge.payment_method_details.card && charge.payment_method_details.card.last4) || null
          // risk level
          if (charge.outcome && charge.outcome.risk_level) {
            updates.risk_level = charge.outcome.risk_level
          }
        }

        await linkToAcceptanceRecord(piOrderId, updates)
        break
      }

      case 'invoice.paid': {
        const inv = obj
        // invoice.metadata may contain order_id
        const invOrderId = (inv.metadata && inv.metadata.order_id) || orderId || null
        const updates = {
          invoice_id: inv.id || null,
          invoice_paid_at: inv.status_transitions && inv.status_transitions.paid_at ? new Date(inv.status_transitions.paid_at * 1000).toISOString() : null,
          invoice_amount_paid: typeof inv.amount_paid === 'number' ? inv.amount_paid : null,
          invoice_currency: inv.currency || null,
        }
        await linkToAcceptanceRecord(invOrderId, updates)
        break
      }

      case 'charge.dispute.created': {
        const dispute = obj
        // dispute.charge may have metadata via charge; get charge to examine metadata/order_id
        let disputeOrderId = orderId
        try {
          // fetch the charge to look for metadata (may be useful)
          const charge = await stripe.charges.retrieve(dispute.charge)
          // charge.metadata may contain order_id
          if (!disputeOrderId && charge && charge.metadata && charge.metadata.order_id) disputeOrderId = charge.metadata.order_id
        } catch (e) {
          console.warn('Could not fetch charge for dispute', e.message)
        }

        // record dispute details in DB
        await recordDispute(disputeOrderId, dispute)

        // Optionally, you could prepare an evidence packet and notify admin or automatically submit evidence
        // For now, just log and save details
        console.info('Dispute created for order', disputeOrderId, dispute.id)
        break
      }

      case 'charge.dispute.closed': {
        const dispute = obj
        let disputeOrderId = orderId
        try {
          const charge = await stripe.charges.retrieve(dispute.charge)
          if (!disputeOrderId && charge && charge.metadata && charge.metadata.order_id) disputeOrderId = charge.metadata.order_id
        } catch (e) {
          console.warn('Could not fetch charge for dispute.closed', e.message)
        }
        // update DB with closure and reason/outcome
        const updates = {
          dispute_id: dispute.id || null,
          dispute_status: dispute.status || null,
          dispute_reason: dispute.reason || null,
          dispute_closed_at: dispute.created ? new Date(dispute.created * 1000).toISOString() : new Date().toISOString()
        }
        await linkToAcceptanceRecord(disputeOrderId, updates)
        break
      }

      default: {
        // For any other events, we may want to log or store them.
        console.info('Unhandled stripe event type', type)
      }
    }

    // Acknowledge receipt
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (err) {
    console.error('Error handling webhook event', err)
    return jsonError('Webhook handler error', 500)
  }

  function jsonError(message, status = 400) {
    return new Response(JSON.stringify({ error: message }), {
      status,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() }
    })
  }
}
