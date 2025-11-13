import Stripe from 'stripe'

/* -----------------------------------------
   CORS helper — use your production domain
------------------------------------------*/
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'https://techbrot.com',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  }
}

/* Preflight */
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() })
}

/* ----------------------------------------------------
   MAIN: create checkout session after acceptance page
----------------------------------------------------- */
export async function onRequestPost(context) {
  try {
    /* -----------------------------
       1. Stripe initialization (FIXED)
    ------------------------------*/
    const STRIPE_SECRET_KEY = context.env.STRIPE_SECRET_KEY

    if (!STRIPE_SECRET_KEY) {
      return jsonError('Stripe key missing', 500)
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
      httpClient: Stripe.createFetchHttpClient(),
    })

    const body = await context.request.json().catch(() => ({}))

    /* -----------------------------
       2. Price Map (unchanged)
    ------------------------------*/
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
      quickstart_workflow_one_time_PLACEHOLDER:'price_1SOMkgANBQOX99HKrPY11AYl',

      essential_care_monthly_PLACEHOLDER: 'price_1SOMteANBQOX99HKhyjvN5JA',
      essential_care_annual_PLACEHOLDER:  'price_1SOMteANBQOX99HKLmHg8o35',

      growth_care_monthly_PLACEHOLDER:    'price_1SOMvbANBQOX99HKdXuX1AOf',
      growth_care_annual_PLACEHOLDER:     'price_1SOMvbANBQOX99HKLEIEDGpE',

      premium_care_monthly_PLACEHOLDER:   'price_1SOMxlANBQOX99HKm4uQLuBK',
      premium_care_annual_PLACEHOLDER:    'price_1SOMxlANBQOX99HK48CU6qZu',

      cfo_lite_monthly_PLACEHOLDER:       'price_CFO_MONTHLY_PLACEHOLDER',
      cfo_lite_annual_PLACEHOLDER:        'price_CFO_ANNUAL_PLACEHOLDER',

      firmconnect_monthly:  'price_1SQFPKARpo86Gznp5QMogQMd',
      firmconnect_annual:   'price_FIRM_ANNUAL_PLACEHOLDER'
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

      setup_basic_one_time_PLACEHOLDER:'one_time',
      setup_premium_one_time_PLACEHOLDER:'one_time',
      setup_advanced_one_time_PLACEHOLDER:'one_time',
      cleanup_3_one_time_PLACEHOLDER:'one_time',
      cleanup_6_one_time_PLACEHOLDER:'one_time',
      cleanup_12_one_time_PLACEHOLDER:'one_time',
      migration_basic_one_time_PLACEHOLDER:'one_time',
      migration_full_one_time_PLACEHOLDER:'one_time',
      quickstart_session_one_time_PLACEHOLDER:'one_time',
      quickstart_workflow_one_time_PLACEHOLDER:'one_time',

      firmconnect_monthly:'recurring',
      firmconnect_annual:'recurring'
    }

    /* -----------------------------
       3. Normalize key (unchanged)
    ------------------------------*/
    const normalizeKey = (k) => {
      if (!k) return k
      return String(k)
        .toLowerCase()
        .trim()
        .replace(/\$/g, '')
        .replace(/&/g, 'and')
        .replace(/[\|\/\\]+/g, ' ')
        .replace(/[^a-z0-9\s-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[-\s]+/g, '_')
    }

    /* -----------------------------
       4. Convert acceptance-page data
    ------------------------------*/
    let items = []

    if (Array.isArray(body.lineItems)) {
      items = body.lineItems
        .map(li => ({
          priceKey: li.priceId || li.priceKey || li.key || null,
          quantity: Number(li.quantity || 1),
          label: li.label || li.name || '',
          unit_amount: li.unit_amount || li.price || null
        }))
        .filter(x => x.priceKey)
    }

    if (!items.length) {
      return jsonError('No valid line items', 400)
    }

    /* -----------------------------
       5. Resolve Stripe price IDs
    ------------------------------*/
    const resolved = items.map(it => {
      const raw = String(it.priceKey)
      const norm = normalizeKey(raw)
      const priceId = PRICE_MAP[raw] || PRICE_MAP[norm] || null
      const priceType =
        PRICE_TYPE_MAP[raw] ||
        PRICE_TYPE_MAP[norm] ||
        (norm.includes('one_time') ? 'one_time' : 'recurring')

      return { ...it, priceId, priceType, key: raw }
    })

    /* -----------------------------
       6. Determine mode
    ------------------------------*/
    const hasRecurring = resolved.some(r => r.priceType === 'recurring')
    const mode = hasRecurring ? 'subscription' : 'payment'

    /* -----------------------------
       7. Build line items
    ------------------------------*/
    const line_items = await Promise.all(
      resolved.map(async r => {
        if (r.priceId) {
          return { price: r.priceId, quantity: r.quantity }
        }

        const amount = Number(r.unit_amount || 0)
        if (!amount) throw new Error(`Missing amount for: ${r.key}`)

        const price_data = {
          currency: 'usd',
          product_data: { name: r.label || r.key },
          unit_amount: Math.round(amount * 100)
        }

        if (r.priceType === 'recurring') {
          const interval = r.key.toLowerCase().includes('annual') ? 'year' : 'month'
          price_data.recurring = { interval }
        }

        return { price_data, quantity: r.quantity }
      })
    )

    /* -----------------------------
       8. Metadata
    ------------------------------*/
    const metadata = {
      createdAt: new Date().toISOString(),
      items: JSON.stringify(
        resolved.map(r => ({
          key: r.key,
          qty: r.quantity,
          amount: r.unit_amount || null
        }))
      ).slice(0, 480),
      event: 'techbrot_precheckout'
    }

    /* -----------------------------
       9. Create Stripe session
    ------------------------------*/
    const session = await stripe.checkout.sessions.create({
      mode,
      payment_method_types: ['card', 'us_bank_account'],
      line_items,
      success_url: 'https://techbrot.com/support/success.html',
      cancel_url: 'https://techbrot.com/support/cancel.html',
      metadata
    })

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
    })

  } catch (err) {
    console.error('Stripe Checkout error:', err)
    return jsonError(err.message || 'Server error', 500)
  }

  function jsonError(message, status = 400) {
    return new Response(JSON.stringify({ error: message }), {
      status,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
    })
  }
}
