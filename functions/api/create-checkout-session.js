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

    // ✅ Real Stripe Price IDs
    const PRICE_MAP = {
      simple_start_monthly: 'price_1SOGodANBQOX99HKiCITtJ4Z',
      simple_start_annual: 'price_1SOGutANBQOX99HKZ6voFANy',

      // Add more plans as you create them
      // essentials_monthly: 'price_xxx',
      // essentials_annual: 'price_xxx',
      // plus_monthly: 'price_xxx',
      // plus_annual: 'price_xxx',
      // advanced_monthly: 'price_xxx',
      // advanced_annual: 'price_xxx',
    }

const priceId = PRICE_MAP[priceKey];
if (!priceId) {
  return new Response(JSON.stringify({
    error: 'Invalid price key',
    receivedKey: priceKey,
    validKeys: Object.keys(PRICE_MAP)
  }), {
    status: 400,
    headers: corsHeaders(),
  });
}

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
