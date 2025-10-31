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

    // ---------- FULL PRICE_MAP (placeholders & existing IDs) ----------
    // Replace each 'price_..._PLACEHOLDER' with the real Stripe Price ID
    const PRICE_MAP = {
      // Simple Start (already set)
      simple_start_monthly: 'price_1SOGodANBQOX99HKiCITtJ4Z',
      simple_start_annual:  'price_1SOGutANBQOX99HKZ6voFANy',

      // ====== Newly moved: map remaining 3 subscription products here (placed below Simple Start) ======
      // Essentials
      essentials_monthly:  'price_1SOPp3ANBQOX99HKgiSFutBo',
      essentials_annual:   'price_1SOPqJANBQOX99HKHiSAqrRC',

      // Plus
      plus_monthly:        'price_1SOPsVANBQOX99HKLrF6iXz6',
      plus_annual:         'price_1SOPtPANBQOX99HKSK6jTnCV',

      // Advanced
      advanced_monthly:    'price_1SOPujANBQOX99HKCHxxENYD',
      advanced_annual:     'price_1SOPvYANBQOX99HKMGoTodsy',
      // =============================================================================================

      // One-time / Setup tiers (All-in-One Setup & Onboarding) — existing IDs you provided
      setup_basic_one_time_PLACEHOLDER:     'price_1SOIxiANBQOX99HKhcipo0Kw',
      setup_premium_one_time_PLACEHOLDER:   'price_1SOJ3GANBQOX99HKy3Cw42qr',
      setup_advanced_one_time_PLACEHOLDER:  'price_1SOJ5GANBQOX99HKNN2yasP3',

      // Cleanup options (one-time estimates)
      cleanup_3_one_time_PLACEHOLDER:       'price_1SOMqCANBQOX99HKsOFctjrf',   // 3 months (~$250)
      cleanup_6_one_time_PLACEHOLDER:       'price_1SOMqCANBQOX99HKx5i36dFO',   // 6 months (~$450)
      cleanup_12_one_time_PLACEHOLDER:      'price_1SOMqCANBQOX99HKHKCJegu6',  // 12+ months (~$1200)

      // Migration Service (one-time)
      migration_basic_one_time_PLACEHOLDER: 'price_1SOMmqANBQOX99HKVW52VuDE',
      migration_full_one_time_PLACEHOLDER:  'price_1SOMmqANBQOX99HKcpCyIQXs',

      // QuickStart tiers (one-time / sessions)
      quickstart_session_one_time_PLACEHOLDER: 'price_1SOMkgANBQOX99HKEXn8s4Az', // $99/hr session
      quickstart_workflow_one_time_PLACEHOLDER: 'price_1SOMkgANBQOX99HKrPY11AYl', // $199 workflow pack

      // Recurring plans — monthly / annual (your filled IDs for other plans)
      essential_care_monthly_PLACEHOLDER: 'price_1SOMteANBQOX99HKhyjvN5JA',
      essential_care_annual_PLACEHOLDER:  'price_1SOMteANBQOX99HKLmHg8o35',

      growth_care_monthly_PLACEHOLDER:    'price_1SOMvbANBQOX99HKdXuX1AOf',
      growth_care_annual_PLACEHOLDER:     'price_1SOMvbANBQOX99HKLEIEDGpE',

      premium_care_monthly_PLACEHOLDER:   'price_1SOMxlANBQOX99HKm4uQLuBK',
      premium_care_annual_PLACEHOLDER:    'price_1SOMxlANBQOX99HK48CU6qZu',

      cfo_lite_monthly_PLACEHOLDER:       'price_CFO_MONTHLY_PLACEHOLDER',
      cfo_lite_annual_PLACEHOLDER:        'price_CFO_ANNUAL_PLACEHOLDER'
    }

    // ---------- Existing single-price logic (unchanged) ----------
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
    // NOTE: this code currently creates a single-line subscription session.
    // If you later want to support multi-line carts, swap to the multi-line worker we discussed.
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
