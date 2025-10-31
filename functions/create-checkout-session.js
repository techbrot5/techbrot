// functions/create-checkout-session.js
// Cloudflare Pages Function — creates a Stripe Checkout Session via direct API call (no stripe package).
// Expects POST JSON: { productId, productName, tier, priceKey, quantity, customerEmail }
// Returns: { url } on success

export async function onRequest(context) {
  const { request } = context;

  // Allow CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const { productId = '', productName = '', tier = '', priceKey = '', quantity = 1, customerEmail = '' } = body;

  if (!priceKey) {
    return new Response(JSON.stringify({ error: 'priceKey is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // ---------- PRICE MAP ----------
  // You can replace the price_data here with priceId: 'price_xxx' (if you pre-create Prices in Stripe).
  // Amounts are in cents.
  const PRICE_MAP = {
    // Simple Start
    simple_start_monthly: {
      // If you have a Stripe Price ID, set priceId: 'price_XXXX' instead of price_data
      price_data: { currency: 'usd', unit_amount: 3800, product_data: { name: 'Simple Start — Monthly' }, recurring: { interval: 'month' } }
    },
    simple_start_annual: {
      price_data: { currency: 'usd', unit_amount: 31900, product_data: { name: 'Simple Start — Annual (30% off)' }, recurring: { interval: 'year' } }
    },

    // Essentials
    essentials_monthly: {
      price_data: { currency: 'usd', unit_amount: 7500, product_data: { name: 'Essentials — Monthly' }, recurring: { interval: 'month' } }
    },
    essentials_annual: {
      price_data: { currency: 'usd', unit_amount: 63000, product_data: { name: 'Essentials — Annual (30% off)' }, recurring: { interval: 'year' } }
    },

    // Plus
    plus_monthly: {
      price_data: { currency: 'usd', unit_amount: 11500, product_data: { name: 'Plus — Monthly' }, recurring: { interval: 'month' } }
    },
    plus_annual: {
      price_data: { currency: 'usd', unit_amount: 96600, product_data: { name: 'Plus — Annual (30% off)' }, recurring: { interval: 'year' } }
    },

    // Advanced
    advanced_monthly: {
      price_data: { currency: 'usd', unit_amount: 27500, product_data: { name: 'Advanced — Monthly' }, recurring: { interval: 'month' } }
    },
    advanced_annual: {
      price_data: { currency: 'usd', unit_amount: 231000, product_data: { name: 'Advanced — Annual (30% off)' }, recurring: { interval: 'year' } }
    },
  };
  // ---------- END PRICE MAP ----------

  const mapping = PRICE_MAP[priceKey];
  if (!mapping) {
    return new Response(JSON.stringify({ error: 'Unknown priceKey' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Read Stripe secret from environment (Cloudflare Pages provides it in Deno.env)
  let STRIPE_SECRET_KEY = undefined;
  try {
    if (typeof Deno !== 'undefined' && Deno?.env?.get) {
      STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY');
    }
  } catch (e) { /** ignore if Deno not available */ }
  if (!STRIPE_SECRET_KEY && typeof process !== 'undefined' && process.env) {
    STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
  }
  if (!STRIPE_SECRET_KEY) {
    return new Response(JSON.stringify({ error: 'Stripe secret key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Determine origin for success/cancel fallback (prefer request's Origin header)
  const origin = request.headers.get('Origin') || (new URL(request.url)).origin;
  const successUrl = `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/cancel.html`;

  // Build form-encoded body for Stripe API
  const params = new URLSearchParams();
  // Allow cards by default
  params.append('payment_method_types[]', 'card');

  // mode: subscription if price_data.recurring exists OR mapping.priceId's corresponding Price is recurring
  const isRecurring = Boolean(mapping.price_data && mapping.price_data.recurring);
  const mode = isRecurring ? 'subscription' : 'payment';
  params.append('mode', mode);

  // Return URLS
  params.append('success_url', successUrl);
  params.append('cancel_url', cancelUrl);

  // quantity
  params.append('line_items[0][quantity]', String(quantity));

  // if mapping includes a pre-created priceId, prefer it
  if (mapping.priceId) {
    params.append('line_items[0][price]', mapping.priceId);
  } else if (mapping.price_data) {
    // create inline price_data (works for both subscription and one-time)
    const pd = mapping.price_data;
    params.append('line_items[0][price_data][currency]', pd.currency);
    if (typeof pd.unit_amount === 'number') params.append('line_items[0][price_data][unit_amount]', String(pd.unit_amount));
    // product_data name
    if (pd.product_data && pd.product_data.name) {
      params.append('line_items[0][price_data][product_data][name]', pd.product_data.name);
    }
    // recurring (for subscription)
    if (pd.recurring && pd.recurring.interval) {
      params.append('line_items[0][price_data][recurring][interval]', pd.recurring.interval);
    }
  } else {
    return new Response(JSON.stringify({ error: 'Configured price entry is invalid' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // optional prefill email
  if (customerEmail) params.append('customer_email', customerEmail);

  // optional metadata (useful to store productId/tier on the session)
  if (productId) params.append('metadata[productId]', productId);
  if (tier) params.append('metadata[tier]', tier);
  if (productName) params.append('metadata[productName]', productName);

  try {
    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await resp.json();
    if (!resp.ok) {
      console.error('Stripe API error', data);
      return new Response(JSON.stringify({ error: data.error ? data.error.message : 'Stripe API error' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // session object returned; depending on API version / flags, URL may be in data.url or data.checkout_session_url
    const sessionUrl = data.url || data.checkout_session_url || (data.redirect_to_url ? data.redirect_to_url.url : undefined);
    if (!sessionUrl) {
      console.error('No session url returned', data);
      return new Response(JSON.stringify({ error: 'No Checkout URL returned by Stripe' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    return new Response(JSON.stringify({ url: sessionUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    console.error('Unexpected error creating Stripe session', err);
    return new Response(JSON.stringify({ error: 'Unexpected server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}
