import Stripe from 'stripe'

export async function onRequestPost(context) {
  try {
    const STRIPE_SECRET_KEY = context.env.STRIPE_SECRET_KEY
    if (!STRIPE_SECRET_KEY) {
      return new Response(JSON.stringify({ error: 'Stripe key missing' }), {
        status: 500,
        headers: corsHeaders(),
      })
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY)
    const body = await context.request.json()
    const { productName, quantity, priceKey } = body

    // ✅ Real Stripe Price IDs (test or live). Fill placeholders below as you create prices in Stripe.
    const PRICE_MAP = {
      // Simple Start (already set)
      simple_start_monthly: 'price_1SOGodANBQOX99HKiCITtJ4Z',
      simple_start_annual:  'price_1SOGutANBQOX99HKZ6voFANy',

      // Essentials (placeholders — replace with your Stripe price IDs)
      essentials_monthly:  'price_ESSENTIALS_MONTHLY_PLACEHOLDER',
      essentials_annual:   'price_ESSENTIALS_ANNUAL_PLACEHOLDER',

      // Plus (placeholders)
      plus_monthly:        'price_PLUS_MONTHLY_PLACEHOLDER',
      plus_annual:         'price_PLUS_ANNUAL_PLACEHOLDER',

      // Advanced (placeholders)
      advanced_monthly:    'price_ADVANCED_MONTHLY_PLACEHOLDER',
      advanced_annual:     'price_ADVANCED_ANNUAL_PLACEHOLDER',

      // (Add other product price keys here as required)
    }

    const priceId = PRICE_MAP[priceKey]
    if (!priceId) {
      return new Response(JSON.stringify({
        error: 'Invalid price key',
        receivedKey: priceKey,
        validKeys: Object.keys(PRICE_MAP)
      }), {
        status: 400,
        headers: corsHeaders(),
      })
    }

    // Create Checkout Session (subscription mode for these plans)
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: quantity || 1 }],
      success_url: 'https://techbrot.com/success',
      cancel_url: 'https://techbrot.com/cancel',
      metadata: { plan: productName },
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Stripe Checkout error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: corsHeaders(),
    })
  }
}

// ✅ Add CORS headers for cross-domain requests
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

// ✅ Handle OPTIONS (preflight) requests
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  })
}
