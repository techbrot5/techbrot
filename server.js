// server.js - minimal Checkout session creator
require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(express.json());
app.use(express.static('public')); // serve front-end from /public

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', // 'payment' for one-time, 'subscription' for recurring
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Test product - Sunglasses' },
          unit_amount: 1999, // cents -> $19.99
        },
        quantity: 1,
      }],
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
