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
    const { productName, quantity } = body

    // Replace with actual test price IDs from your Stripe Dashboard
    const PRICE_MAP = {
      simple_start_monthly: 'price_XXX',
      simple_start_annual: 'price_YYY',
      essentials_monthly: 'price_AAA',
      essentials_annual: 'price_BBB',
      plus_monthly: 'price_CCC',
      plus_annual: 'price_DDD',
      advanced_monthly: 'price_EEE',
      advanced_annual: 'price_FFF',
    }

    const priceId = PRICE_MAP[body.priceKey]
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
      success_url: `${context.request.url.replace('/api/create-checkout-session', '')}?success=true`,
      cancel_url: `${context.request.url.replace('/api/create-checkout-session', '')}?canceled=true`,
      metadata: { plan: productName, tier: body.tier },
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    })
  }
}
