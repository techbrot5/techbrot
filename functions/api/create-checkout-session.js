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
    const body = await context.request.json().catch(() => ({}))

    // Accept either:
    // { priceKey, quantity, productName } OR
    // { lineItems: [{ priceKey, quantity, label, unit_amount }] }
    // OR legacy { cart, lineItems } from client — we will try to normalize.

    // ---------- PRICE MAP (your existing mapping) ----------
    const PRICE_MAP = {
      simple_start_monthly: 'price_1SOGodANBQOX99HKiCITtJ4Z',
      simple_start_annual:  'price_1SOGutANBQOX99HKZ6voFANy',

      essentials_monthly:  'price_1SOPp3ANBQOX99HKgiSFutBo',
      essentials_annual:   'price_1SOPqJANBQOX99HKHiSAqrRC',

      plus_monthly:        'price_1SOPsVANBQOX99HKLrF6iXz6',
      plus_annual:         'price_1SOPtPANBQOX99HKSK6jTnCV',

      advanced_monthly:    'price_1SOPujANBQOX99HKCHxxENYD',
      advanced_annual:     'price_1SOPvYANBQOX99HKMGoTodsy',

      // one-time / setup (keep your IDs)
      setup_basic_one_time_PLACEHOLDER:     'price_1SOIxiANBQOX99HKhcipo0Kw',
      setup_premium_one_time_PLACEHOLDER:   'price_1SOJ3GANBQOX99HKy3Cw42qr',
      setup_advanced_one_time_PLACEHOLDER:  'price_1SOJ5GANBQOX99HKNN2yasP3',

      cleanup_3_one_time_PLACEHOLDER:       'price_1SOMqCANBQOX99HKsOFctjrf',
      cleanup_6_one_time_PLACEHOLDER:       'price_1SOMqCANBQOX99HKx5i36dFO',
      cleanup_12_one_time_PLACEHOLDER:      'price_1SOMqCANBQOX99HKHKCJegu6',

      migration_basic_one_time_PLACEHOLDER: 'price_1SOMmqANBQOX99HKVW52VuDE',
      migration_full_one_time_PLACEHOLDER:  'price_1SOMmqANBQOX99HKcpCyIQXs',

      quickstart_session_one_time_PLACEHOLDER: 'price_1SOMkgANBQOX99HKEXn8s4Az',
      quickstart_workflow_one_time_PLACEHOLDER: 'price_1SOMkgANBQOX99HKrPY11AYl',

      essential_care_monthly_PLACEHOLDER: 'price_1SOMteANBQOX99HKhyjvN5JA',
      essential_care_annual_PLACEHOLDER:  'price_1SOMteANBQOX99HKLmHg8o35',

      growth_care_monthly_PLACEHOLDER:    'price_1SOMvbANBQOX99HKdXuX1AOf',
      growth_care_annual_PLACEHOLDER:     'price_1SOMvbANBQOX99HKLEIEDGpE',

      premium_care_monthly_PLACEHOLDER:   'price_1SOMxlANBQOX99HKm4uQLuBK',
      premium_care_annual_PLACEHOLDER:    'price_1SOMxlANBQOX99HK48CU6qZu',

      cfo_lite_monthly_PLACEHOLDER:       'price_CFO_MONTHLY_PLACEHOLDER',
      cfo_lite_annual_PLACEHOLDER:        'price_CFO_ANNUAL_PLACEHOLDER'
    }

    // ---------- PRICE TYPE MAP (you should set 'recurring' for subscription prices and 'one_time' for one-time prices)
    // This helps decide mode: subscription vs payment
    const PRICE_TYPE_MAP = {
      // example:
      simple_start_monthly: 'recurring',
      simple_start_annual:  'recurring',
      essentials_monthly: 'recurring',
      essentials_annual:  'recurring',
      plus_monthly: 'recurring',
      plus_annual: 'recurring',
      advanced_monthly: 'recurring',
      advanced_annual: 'recurring',

      // one-time (setup/cleanup/migration/quickstart sessions)
      setup_basic_one_time_PLACEHOLDER: 'one_time',
      setup_premium_one_time_PLACEHOLDER: 'one_time',
      setup_advanced_one_time_PLACEHOLDER: 'one_time',
      cleanup_3_one_time_PLACEHOLDER: 'one_time',
      cleanup_6_one_time_PLACEHOLDER: 'one_time',
      cleanup_12_one_time_PLACEHOLDER: 'one_time',
      migration_basic_one_time_PLACEHOLDER: 'one_time',
      migration_full_one_time_PLACEHOLDER: 'one_time',
      quickstart_session_one_time_PLACEHOLDER: 'one_time',
      quickstart_workflow_one_time_PLACEHOLDER: 'one_time',
    }

    // ---------- Normalize incoming items ----------
    let items = []

    // If caller sent lineItems array (your client earlier sends { lineItems })
    if (Array.isArray(body.lineItems) && body.lineItems.length) {
      // expect objects with priceId or priceKey (we prefer priceKey)
      items = body.lineItems.map(li => {
        return {
          priceKey: li.priceKey || li.priceId || li.key || null,
          quantity: Number(li.quantity || li.qty || 1),
          label: li.label || li.name || ''
        }
      }).filter(x => x.priceKey)
    } else if (body.priceKey) {
      // single-item shorthand
      items = [{ priceKey: body.priceKey, quantity: Number(body.quantity || 1), label: body.productName || '' }]
    } else if (Array.isArray(body.cart) && body.cart.length) {
      // legacy cart coming from frontend — convert to priceKeys by heuristic or reject
      items = body.cart.map(ci => ({
        // if client provided priceKey in cart item, use it; otherwise leave null
        priceKey: ci.priceKey || ci.priceId || null,
        quantity: Number(ci.quantity || 1),
        label: ci.product || ci.productName || ''
      })).filter(x => x.priceKey)
    }

    if (!items.length) {
      return new Response(JSON.stringify({ error: 'No valid line items found in request', example: { priceKey: 'simple_start_monthly', quantity: 1 } }), {
        status: 400,
        headers: corsHeaders(),
      })
    }

    // ---------- Build Stripe session line_items with price IDs ----------
    // Determine if this is subscription-only or mixed; Stripe Checkout mode must be uniform per session.
    // We'll decide mode = 'subscription' if ALL items are recurring; 'payment' if ALL items are one_time.
    // Mixed types => return helpful error (you can alternatively create payment session client-side per type).
    const resolved = items.map(it => {
      const key = String(it.priceKey)
      const priceId = PRICE_MAP[key] || null
      const priceType = PRICE_TYPE_MAP[key] || (String(key).includes('one_time') ? 'one_time' : 'recurring')
      return { ...it, key, priceId, priceType }
    })

    // detect missing price IDs
    const missing = resolved.filter(r => !r.priceId)
    if (missing.length) {
      return new Response(JSON.stringify({ error: 'Missing priceId mapping for some priceKey(s)', missing: missing.map(m => m.key) }), {
        status: 400,
        headers: corsHeaders()
      })
    }

    const allTypes = Array.from(new Set(resolved.map(r => r.priceType)))
    if (allTypes.length > 1) {
      // mixed recurring + one_time not allowed in single Checkout session mode
      return new Response(JSON.stringify({
        error: 'Mixed price types in cart (subscription + one-time). Stripe Checkout requires a single mode per session.',
        detail: 'Split checkout into subscription vs one-time, or create server-side logic to create multiple sessions.'
      }), { status: 400, headers: corsHeaders() })
    }

    const priceMode = allTypes[0] === 'one_time' ? 'payment' : 'subscription'
    const line_items = resolved.map(r => ({ price: r.priceId, quantity: Number(r.quantity || 1) }))

    // Create session
    const session = await stripe.checkout.sessions.create({
      mode: priceMode,
      line_items,
      success_url: 'https://techbrot.com/success',
      cancel_url: 'https://techbrot.com/cancel',
      metadata: { createdAt: new Date().toISOString(), items: JSON.stringify(resolved.map(r => ({ key: r.key, quantity: r.quantity }))) }
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error('Stripe Checkout error:', err)
    // return stack only in dev; here we send message
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: corsHeaders()
    })
  }
}
