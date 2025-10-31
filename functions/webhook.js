// functions/webhook.js
export async function onRequestPost(context) {
  const STRIPE_SECRET = context.env.STRIPE_SECRET || process.env.STRIPE_SECRET;
  const payload = await context.request.text();
  const sig = context.request.headers.get('stripe-signature');

  // You need the webhook signing secret (from stripe listen or dashboard)
  const stripeWebhookSecret = context.env.STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeWebhookSecret) {
    return new Response('Missing webhook secret on server', { status: 500 });
  }

  // Use Stripe's recommended verification algorithm: HMAC SHA256 using webhook secret.
  // Since we are not using stripe-node library in workers, verify manually:
  // stripe-signature header format: t=...,v1=signature
  // Compute HMAC SHA256 of payload using webhook secret and compare v1.
  // Cloudflare Workers supports Web Crypto:
  try {
    const sigHeader = sig || '';
    const matches = sigHeader.split(',').reduce((acc, part) => {
      const [k, v] = part.split('=');
      acc[k] = v;
      return acc;
    }, {});
    const v1 = matches.v1;
    const t = matches.t;

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(stripeWebhookSecret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const data = enc.encode(`${t}.${payload}`);
    const signatureBuffer = await crypto.subtle.sign('HMAC', key, data);
    const computed = Array.from(new Uint8Array(signatureBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

    if (!computed || computed !== v1) {
      return new Response('Invalid signature', { status: 400 });
    }
  } catch (err) {
    return new Response('Webhook verification failed', { status: 400 });
  }

  const event = JSON.parse(payload);

  // handle the event types you care about
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // session.metadata, session.customer, session.amount_total, etc
    // Fulfill order: create user, mark product purchased, send email, etc.
    // (Do your business logic here)
  }

  return new Response(JSON.stringify({ received: true }), { status: 200, headers: { 'content-type': 'application/json' } });
}
