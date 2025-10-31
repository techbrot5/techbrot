import Stripe from 'stripe'

export async function onRequestPost(context) {
  try {
    const STRIPE_SECRET_KEY = context.env.STRIPE_SECRET_KEY
    if (!STRIPE_SECRET_KEY) {
      return new Response(JSON.stringify({ error: 'Stripe key missing' }), {
        status: 500,
      })
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY)

    const body = await context.request.json()
    const { productName, quantity, priceKey } = body

    // ✅ Real Stripe Price IDs
    const PRICE_MAP = {
      simple_start_monthly: 'price_1SOGodANBQOX99HKiCITtJ4Z',
      simple_start_annual: 'price_1SOGutANBQOX99HKZ6voFANy',

      // You can add more plans below as you create them in Stripe
      // essentials_monthly: 'price_xxx',
      // essentials_annual: 'price_xxx',
      // plus_monthly: 'price_xxx',
      // plus_annual: 'price_xxx',
    }

    const priceId = PRICE_MAP[priceKey]
    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Invalid price key' }), {
        status: 400,
      })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        { price: priceId, quantity: quantity || 1 },
      ],
      success_url: `${new URL(context.request.url).origin}/?success=true`,
      cancel_url: `${new URL(context.request.url).origin}/?canceled=true`,
      metadata: { plan: productName },
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Stripe Checkout error:', err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    })
  }
}
