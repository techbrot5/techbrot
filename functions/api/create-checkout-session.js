import Stripe from 'stripe'

/**
 * CORS helper — change Access-Control-Allow-Origin to your origin for production
 */
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*', // <-- set to 'https://techbrot.com' in production
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  }
}

/**
 * Respond to preflight OPTIONS requests so browsers can send POST
 */
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  })
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
    const body = await context.request.json().catch(() => ({}))

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

    // ---------- PRICE TYPE MAP ----------
    const PRICE_TYPE_MAP = {
      simple_start_monthly: 'recurring',
      simple_start_annual:  'recurring',
      essentials_monthly: 'recurring',
      essentials_annual:  'recurring',
      plus_monthly: 'recurring',
      plus_annual: 'recurring',
      advanced_monthly: 'recurring',
      advanced_annual: 'recurring',

      // one-time
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

    // ---------- Helpers ----------
    function normalizeKeyToMap(k) {
      if (!k || typeof k !== 'string') return k;
      // common client key formats like "Simple Start|Monthly|monthly" -> "simple_start_monthly"
      let s = k.toLowerCase().trim();
      // remove currency symbols and stray punctuation
      s = s.replace(/\$/g, '').replace(/&/g, 'and');
      // replace pipes and slashes with space, remove non-alphanum except spaces
      s = s.replace(/[\|\/\\]+/g, ' ').replace(/[^a-z0-9\s-]+/g, ' ');
      // collapse multiple whitespace, replace spaces and hyphens with underscore
      s = s.replace(/\s+/g, ' ').replace(/[-\s]+/g, '_');
      // normalize common suffix words
      s = s.replace(/_monthly$/, '_monthly').replace(/_annual$/, '_annual').replace(/_one_time$/, '_one_time').replace(/_one-time$/, '_one_time');
      return s;
    }

    // ---------- Normalize incoming items (include unit_amount fallback) ----------
    let items = []

    if (Array.isArray(body.lineItems) && body.lineItems.length) {
      items = body.lineItems.map(li => ({
        priceKey: li.priceKey || li.priceId || li.key || null,
        quantity: Number(li.quantity || li.qty || 1),
        label: li.label || li.name || '',
        unit_amount: (li.unit_amount || li.unitAmount || li.amount || null) // numeric (dollars) expected from client
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
      return new Response(JSON.stringify({ error: 'No valid line items found in request', example: { priceKey: 'simple_start_monthly', quantity: 1 } }), {
        status: 400,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      })
    }

    // ---------- Resolve price IDs & types, try normalized lookup ----------
    const resolved = items.map(it => {
      const rawKey = String(it.priceKey)
      const norm = normalizeKeyToMap(rawKey)
      // try direct match, then normalized match
      const priceId = PRICE_MAP[rawKey] || PRICE_MAP[norm] || null
      // priceType: check explicit map for raw or normalized name, fallback guessing by text
      const priceType = PRICE_TYPE_MAP[rawKey] || PRICE_TYPE_MAP[norm] || (String(rawKey).includes('one_time') || String(rawKey).includes('one-time') || String(norm).includes('one_time') ? 'one_time' : (String(rawKey).includes('monthly') || String(norm).includes('_monthly') ? 'recurring' : (String(rawKey).includes('annual') || String(norm).includes('_annual') ? 'recurring' : 'one_time')))
      return { ...it, key: rawKey, norm, priceId, priceType }
    })

    // ---------- If some resolved entries still lack priceId, we'll attempt fallback using unit_amount/price ---
    const missing = resolved.filter(r => !r.priceId)

    // If all missing and none provide a numeric amount, error out
    const missingWithoutAmount = missing.filter(m => !m.unit_amount && !m.price)
    if (missing.length && missingWithoutAmount.length === missing.length) {
      // return clear error listing missing keys
      return new Response(JSON.stringify({ error: 'Missing priceId mapping for some priceKey(s)', missing: missing.map(m => m.key) }), {
        status: 400,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' }
      })
    }

  // Determine session mode: prefer 'subscription' if any recurring items exist.
// This allows including both recurring and one-time prices in the same Checkout Session
// (server will send mode: 'subscription' when there is at least one recurring price).
const typesSet = new Set(resolved.map(r => r.priceType));
const hasRecurring = Array.from(typesSet).some(t => t === 'recurring');
const hasOneTime = Array.from(typesSet).some(t => t === 'one_time');

let priceMode;
if (hasRecurring) {
  // When at least one recurring price exists, use subscription mode.
  // Stripe will create a subscription and will invoice any one-time items on the first invoice.
  priceMode = 'subscription';
} else {
  // All one-time => use payment mode (single payment)
  priceMode = 'payment';
}

    // ---------- Build Stripe line_items. For items without priceId use price_data fallback when possible ----------
    const line_items = await Promise.all(resolved.map(async r => {
      if (r.priceId) {
        return { price: r.priceId, quantity: Number(r.quantity || 1) }
      }

      // fallback: create price_data using numeric amount (prefer unit_amount, then price)
      const numeric = Number(r.unit_amount || r.price || 0)
      if (!numeric || numeric <= 0) {
        // defensive — should not happen because we filtered earlier, but guard
        throw new Error('Missing numeric amount for fallback price for key: ' + r.key)
      }

      // Stripe expects integer cents
      const unit_amount_cents = Math.round(numeric * 100)

      // determine recurring interval if this item is a recurring fallback
      let price_data = {
        currency: 'usd', // change if needed
        product_data: { name: r.label || r.key || 'Custom product' },
        unit_amount: unit_amount_cents
      }

      if (r.priceType === 'recurring') {
        // pick interval by scanning key (monthly vs annual)
        const k = (String(r.key || '') + ' ' + String(r.norm || '')).toLowerCase();
        const interval = k.includes('annual') || k.includes('year') ? 'year' : 'month';
        price_data.recurring = { interval: interval }
      }

      return { price_data, quantity: Number(r.quantity || 1) }
    }))

    // Create session
    const session = await stripe.checkout.sessions.create({
      mode: priceMode,
      line_items,
      success_url: 'https://techbrot.com/success',
      cancel_url: 'https://techbrot.com/cancel',
      metadata: { createdAt: new Date().toISOString(), items: JSON.stringify(resolved.map(r => ({ key: r.key, quantity: r.quantity }))) }
    })

    return new Response(JSON.stringify({ url: session.url }), {
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
