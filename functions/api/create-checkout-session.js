import Stripe from 'stripe'

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  }
}

export async function onRequestOptions(context) {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

export async function onRequestPost(context) {
  try {
    const STRIPE_SECRET_KEY = context.env.STRIPE_SECRET_KEY
    if (!STRIPE_SECRET_KEY) {
      return new Response(JSON.stringify({ error: 'Stripe key missing' }), {
        status: 500,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      })
    }
    const stripe = new Stripe(STRIPE_SECRET_KEY)

    const body = await context.request.json().catch(()=>({}))

    // --- PRICE_MAP and PRICE_TYPE_MAP (keep your existing map) ---
    const PRICE_MAP = {
      simple_start_monthly: 'price_1SOGodANBQOX99HKiCITtJ4Z',
      simple_start_annual:  'price_1SOGutANBQOX99HKZ6voFANy',
      essentials_monthly:  'price_1SOPp3ANBQOX99HKgiSFutBo',
      essentials_annual:   'price_1SOPqJANBQOX99HKHiSAqrRC',
      plus_monthly:        'price_1SOPsVANBQOX99HKLrF6iXz6',
      plus_annual:         'price_1SOPtPANBQOX99HKSK6jTnCV',
      advanced_monthly:    'price_1SOPujANBQOX99HKCHxxENYD',
      advanced_annual:     'price_1SOPvYANBQOX99HKMGoTodsy',

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

    const PRICE_TYPE_MAP = {
      simple_start_monthly: 'recurring',
      simple_start_annual:  'recurring',
      essentials_monthly: 'recurring',
      essentials_annual:  'recurring',
      plus_monthly: 'recurring',
      plus_annual: 'recurring',
      advanced_monthly: 'recurring',
      advanced_annual: 'recurring',

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

    function normalizeKeyToMap(k) {
      if (!k || typeof k !== 'string') return k;
      let s = k.toLowerCase().trim();
      s = s.replace(/\$/g, '').replace(/&/g, 'and');
      s = s.replace(/[\|\/\\]+/g, ' ').replace(/[^a-z0-9\s-]+/g, ' ');
      s = s.replace(/\s+/g, ' ').replace(/[-\s]+/g, '_');
      s = s.replace(/_monthly$/, '_monthly').replace(/_annual$/, '_annual').replace(/_one_time$/, '_one_time').replace(/_one-time$/, '_one_time');
      return s;
    }

    // ---------- Build items array (normalized) ----------
    let items = []
    if (Array.isArray(body.lineItems) && body.lineItems.length) {
      items = body.lineItems.map(li => ({
        priceKey: li.priceKey || li.priceId || li.key || null,
        quantity: Number(li.quantity || li.qty || 1),
        label: li.label || li.name || '',
        unit_amount: (li.unit_amount || li.unitAmount || li.amount || null)
      })).filter(x => x.priceKey)
    } else if (body.priceKey) {
      items = [{ priceKey: body.priceKey, quantity: Number(body.quantity || 1), label: body.productName || '', unit_amount: body.unit_amount || null }]
    } else if (Array.isArray(body.cart) && body.cart.length) {
      items = body.cart.map(ci => ({
        priceKey: ci.priceKey || ci.priceId || ci.key || null,
        quantity: Number(ci.quantity || 1),
        label: ci.product || ci.productName || '',
        unit_amount: (ci.unit_amount || ci.price || null)
      })).filter(x => x.priceKey)
    }

    if (!items.length) {
      return new Response(JSON.stringify({ error: 'No valid line items found in request' }), { status: 400, headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
    }

    // ---------- Resolve price IDs & types ----------
    const resolved = items.map(it => {
      const rawKey = String(it.priceKey)
      const norm = normalizeKeyToMap(rawKey)
      const priceId = PRICE_MAP[rawKey] || PRICE_MAP[norm] || null
      const priceType = PRICE_TYPE_MAP[rawKey] || PRICE_TYPE_MAP[norm] ||
        (String(norm).includes('one_time') ? 'one_time' : (String(norm).includes('_monthly') || String(norm).includes('_annual') ? 'recurring' : 'one_time'))
      return { ...it, key: rawKey, norm, priceId, priceType }
    })

    // If some resolved are missing priceId but also missing numeric amount -> error
    const missing = resolved.filter(r => !r.priceId)
    const missingWithoutAmount = missing.filter(m => !m.unit_amount && !m.price)
    if (missing.length && missingWithoutAmount.length === missing.length) {
      return new Response(JSON.stringify({ error: 'Missing priceId mapping for some priceKey(s)', missing: missing.map(m => m.key) }), {
        status: 400,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
      })
    }

    // ---------- Determine session mode: subscription if any recurring ----------
    const hasRecurring = resolved.some(r => r.priceType === 'recurring')
    const priceMode = hasRecurring ? 'subscription' : 'payment'

    // ---------- Build Stripe line_items array ----------
    const line_items = await Promise.all(resolved.map(async r => {
      if (r.priceId) return { price: r.priceId, quantity: Number(r.quantity || 1) }

      const numeric = Number(r.unit_amount || r.price || 0)
      if (!numeric || numeric <= 0) throw new Error('Missing numeric amount for key: ' + r.key)
      const unit_amount_cents = Math.round(numeric * 100)
      const price_data = { currency: 'usd', product_data: { name: r.label || r.key || 'Custom product' }, unit_amount: unit_amount_cents }
      if (r.priceType === 'recurring') {
        const k = (r.key + ' ' + r.norm).toLowerCase()
        const interval = k.includes('annual') || k.includes('year') ? 'year' : 'month'
        price_data.recurring = { interval }
      }
      return { price_data, quantity: Number(r.quantity || 1) }
    }))

    // ---------- Create deterministic idempotency key from items ----------
    // simple stable hash (djb2) over JSON of resolved items (keeps same for identical cart)
    const keySource = JSON.stringify(resolved.map(r => ({ key: r.key, priceId: r.priceId, qty: r.quantity, unit: r.unit_amount || null })))
    function djb2Hash(str) {
      let h = 5381
      for (let i = 0; i < str.length; i++) { h = ((h << 5) + h) + str.charCodeAt(i) } // h * 33 + c
      return 'idemp_' + (h >>> 0).toString(36)
    }
    const idempotencyKey = djb2Hash(keySource)

    // DEBUG: include some server debug info in response for testing (remove in prod)
    const debugInfo = { itemCount: resolved.length, hasRecurring, priceMode, idempotencyKeySample: idempotencyKey.slice(0,16) }

    // ---------- Create session with idempotency to avoid duplicate creations ----------
    const session = await stripe.checkout.sessions.create({
      mode: priceMode,
      payment_method_types: ['card', 'us_bank_account'],
      line_items,
      success_url: 'https://techbrot.com/success',
      cancel_url: 'https://techbrot.com/cancel',
      metadata: { createdAt: new Date().toISOString(), items: JSON.stringify(resolved.map(r => ({ key: r.key, quantity: r.quantity }))) }
    }, { idempotencyKey }) // <--- pass idempotency key to Stripe SDK

    // Return a single URL (and debug info while testing)
    return new Response(JSON.stringify({ url: session.url, debug: debugInfo }), {
      status: 200,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error('Stripe Checkout error:', err)
    return new Response(JSON.stringify({ error: err.message || 'Server Error' }), {
      status: 500,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
    })
  }
}
