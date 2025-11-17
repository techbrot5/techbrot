// ------------------------------------------------------------------
// functions/api/payment-confirmed.js
// Sends immediate receipt (personalized from Stripe when available),
// then sends a verification email (token link). Logs everything for evidence.
// Cleaned, consolidated and safe.
// ------------------------------------------------------------------

import Stripe from "stripe";
import sendEmail from "./postmark.js";

export async function onRequestPost(context) {
  const { env, request } = context;

  // safe parse
  const body = await request.json().catch(() => null);

  if (!body || !body.order_id || !body.email) {
    return new Response(JSON.stringify({ error: "order_id and email required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const order_id = String(body.order_id);
  const email = String(body.email).trim();
  const session_id = body.session_id || null;

  // Generate verification token + TTL
  const token = typeof crypto?.randomUUID === "function"
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now();

  const ttlDays = Number(env.VERIFY_TOKEN_TTL_DAYS || 7);
  const expiresAt = new Date(Date.now() + ttlDays * 24 * 3600 * 1000).toISOString();

  // Insert / upsert basic order row (paid flag) — keep minimal columns, safe bind
  const incomingName = body.name || "";
  const incomingAmount = Number(body.amount || 0); // may be cents or decimal depending on caller
  const incomingCurrency = (body.currency || "USD").toString();

  try {
    await env.DB.prepare(`
      INSERT INTO orders
        (order_id, email, name, paid, amount, currency, stripe_session_id, created_at, next_email_index)
      VALUES (?, ?, ?, 1, ?, ?, ?, datetime('now'), 1)
      ON CONFLICT(order_id) DO UPDATE SET
        paid = 1,
        stripe_session_id = COALESCE(excluded.stripe_session_id, stripe_session_id)
    `)
      .bind(order_id, email, incomingName, incomingAmount, incomingCurrency, session_id)
      .run();
  } catch (e) {
    console.error("DB insert order error:", e);
  }

  // Store token in orders table
  try {
    await env.DB.prepare(`
      UPDATE orders
      SET verification_token = ?, token_expires_at = ?
      WHERE order_id = ?
    `).bind(token, expiresAt, order_id).run();
  } catch (e) {
    console.warn("token store error:", e);
  }

  // Prepare data to enrich from Stripe
  let stripeSession = null;
  let official = { receipt_url: null, invoice_pdf: null, hosted_invoice_url: null, raw_metadata: {} };
  let customerName = incomingName || "";
  let amountCents = Number(incomingAmount || 0); // cents
  let currency = (incomingCurrency || "USD").toLowerCase();
  let lineItems = []; // structured line items

  if (session_id && env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
        apiVersion: "2024-06-20",
        httpClient: Stripe.createFetchHttpClient()
      });

      stripeSession = await stripe.checkout.sessions.retrieve(session_id, {
        expand: [
          "line_items",
          "line_items.data.price.product",
          "payment_intent",
          "payment_intent.charges.data",
          "invoice",
          "customer",
          "customer_details"
        ]
      });

      // pick best amount_total (payment intent / invoice fallbacks included later)
      amountCents = Number(stripeSession.amount_total ?? amountCents);

      currency = (stripeSession.currency || currency || "usd").toLowerCase();

      customerName = stripeSession.customer_details?.name || stripeSession.customer?.name || customerName;

      // official receipts
      try {
        const pi = stripeSession.payment_intent;
        const charge = pi?.charges?.data?.[0] ?? null;
        const chargeReceipt = charge?.receipt_url || null;
        official.receipt_url = chargeReceipt || stripeSession.receipt_url || null;
      } catch (_) {
        official.receipt_url = stripeSession.receipt_url || null;
      }

      official.invoice_pdf = stripeSession.invoice?.invoice_pdf || null;
      official.hosted_invoice_url = stripeSession.invoice?.hosted_invoice_url || null;
      official.raw_metadata = stripeSession?.metadata || {};

      // line items array
      const li = stripeSession.line_items?.data || [];
      if (Array.isArray(li) && li.length) {
        lineItems = li.map(row => {
          const desc = row.description || row.price?.product?.name || row.price?.nickname || "Item";
          const qty = Number(row.quantity || 1);
          const unitCents = Number(row.price?.unit_amount ?? 0);
          // subtotal cents sometimes provided by API fields
          const subtotalCents = Number(row.amount_subtotal ?? row.amount_total ?? (unitCents * qty));
          return {
            id: row.id || null,
            description: desc,
            quantity: qty,
            unit_cents: unitCents,
            subtotal_cents: subtotalCents,
            currency: row.currency || row.price?.currency || currency
          };
        });
      }

      // If session doesn't include amount_total, try payment_intent.amount_received or invoice.amount_paid
      if (!amountCents || amountCents === 0) {
        const paymentIntent = stripeSession.payment_intent || null;
        const invoice = stripeSession.invoice || null;
        amountCents = Number(paymentIntent?.amount_received ?? invoice?.amount_paid ?? amountCents);
      }
    } catch (err) {
      console.warn("Stripe retrieval failed:", err?.message || err);
    }
  }

  // Final computed decimals for display
  const amountDecimal = (Number(amountCents) || 0) / 100;
  const displayAmount = `${amountDecimal.toFixed(2)} ${String(currency || "USD").toUpperCase()}`;

  // Build a Stripe-style line items HTML or fallback to single line
  let finalItemsHtml = "";
  if (lineItems.length) {
    const rows = lineItems.map(li => {
      const unitDisplay = (Number(li.unit_cents || 0) / 100).toFixed(2);
      const subtotalDisplay = (Number(li.subtotal_cents || 0) / 100).toFixed(2);
      return `
        <tr>
          <td style="padding:8px 0;border-bottom:0">${escapeHtml(li.description)}</td>
          <td style="padding:8px 0;border-bottom:0;text-align:right">${li.quantity}</td>
          <td style="padding:8px 0;border-bottom:0;text-align:right">${unitDisplay}</td>
          <td style="padding:8px 0;border-bottom:0;text-align:right"><strong>${subtotalDisplay}</strong></td>
        </tr>
      `;
    }).join("");

    finalItemsHtml = `
      <table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:14px">
        <thead>
          <tr style="border-bottom:1px solid #e6f0ea">
            <th style="text-align:left;padding-bottom:6px">Item</th>
            <th style="text-align:right;padding-bottom:6px">Qty</th>
            <th style="text-align:right;padding-bottom:6px">Unit</th>
            <th style="text-align:right;padding-bottom:6px">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
        <tfoot>
          <tr style="border-top:1px solid #e6f0ea">
            <td colspan="3" style="padding-top:10px;text-align:right">Total:</td>
            <td style="padding-top:10px;text-align:right;font-size:16px"><strong>${escapeHtml(displayAmount)}</strong></td>
          </tr>
        </tfoot>
      </table>
    `;
  } else {
    finalItemsHtml = `<p style="margin:8px 0">Amount charged: <strong>${escapeHtml(displayAmount)}</strong></p>`;
  }

  // Build the receipt HTML (Email #1) — includes company footer and "why you received this" line
  const businessAddressHtml = `
    TechBrot Inc.<br/>
    5030 E 2nd St, Casper, WY 82609<br/>
    support@techbrot.com • +1 (877) 751-5575
  `;

  const receiptHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;line-height:1.45;color:#111;">
      <div style="max-width:680px;margin:0 auto;padding:20px;">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:56px;height:56px;border-radius:8px;background:#f6f9f7;display:flex;align-items:center;justify-content:center;font-weight:700;color:#0fd46c">TB</div>
          <div>
            <h2 style="margin:0;font-size:18px">Thanks for your purchase${customerName ? `, ${escapeHtml(customerName)}` : ""}.</h2>
            <div style="color:#666;font-size:13px">Order ID: <strong>${escapeHtml(order_id)}</strong></div>
          </div>
        </div>

        <div style="margin-top:18px;padding:16px;border-radius:8px;background:#fff;border:1px solid #eef6f2">
          <h3 style="margin:0 0 8px 0">Payment receipt</h3>

          ${finalItemsHtml}

          ${official.receipt_url ? `<p style="margin:12px 0">Download official receipt: <a href="${escapeHtml(official.receipt_url)}">${escapeHtml(official.receipt_url)}</a></p>` : ""}

        </div>

        <p style="margin:16px 0 6px 0">We’ll begin activation shortly. If you did not make this purchase, contact <a href="mailto:support@techbrot.com">support@techbrot.com</a> immediately.</p>

        <p style="margin:16px 0 6px 0;font-size:12px;color:#777">You received this email because you completed a purchase at TechBrot.com.</p>

        <footer style="margin-top:14px;color:#888;font-size:12px">${businessAddressHtml}<br/><span style="color:#0fd46c">Certified QuickBooks ProAdvisor</span></footer>
      </div>
    </div>
  `;

  // Send receipt email (Email #1)
  let sentReceipt = { ok: false, status: 0, provider_id: null, r2key: null };
  try {
    sentReceipt = await sendEmail(env, {
      to: email,
      subject: `Your TechBrot Receipt — Order ${order_id}`,
      html: receiptHtml,
      text: null,
      order_id
    });
  } catch (e) {
    console.warn("sendReceipt error:", e);
  }

  // Log receipt attempt into email_attempts
  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts
        (order_id, email_to, subject, body_snippet, status, provider_event_id, raw_r2_key)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      order_id,
      email,
      `Receipt — Order ${order_id}`,
      (stripHtml(receiptHtml) || "").slice(0, 200),
      sentReceipt.ok ? "sent" : "failed",
      sentReceipt.provider_id || `postmark_${Date.now()}`,
      sentReceipt.r2key
    ).run();
  } catch (e) {
    console.warn("log receipt email attempt error:", e);
  }

  // Build verification email (Email #2). Include same line items and customer name for stronger evidence.
  const verifyUrl = `${(env.SITE_URL || "").replace(/\/$/, "")}/verify?order_id=${encodeURIComponent(order_id)}&token=${encodeURIComponent(token)}`;

  const verifyHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;line-height:1.45;color:#111;">
      <div style="max-width:680px;margin:0 auto;padding:20px;">
        <h2 style="margin:0 0 12px 0">Please verify & authorize your TechBrot order</h2>
        <p style="margin:0 0 8px 0">Order ID: <strong>${escapeHtml(order_id)}</strong></p>
        <p style="margin:0 0 8px 0">Customer: <strong>${customerName ? escapeHtml(customerName) : escapeHtml(email)}</strong></p>

        <div style="margin:12px 0;padding:12px;border-radius:6px;background:#fff;border:1px solid #eef6f2">
          ${finalItemsHtml}
          <p style="margin:8px 0 0 0">Total: <strong>${escapeHtml(displayAmount)}</strong></p>
        </div>

        <p style="margin:12px 0 16px 0">Click the button below to confirm this purchase. This action serves as authorization evidence for future records.</p>

        <p>
          <a href="${verifyUrl}" style="display:inline-block;padding:12px 18px;border-radius:8px;text-decoration:none;background:#0fd46c;color:#042;font-weight:bold;">
            Verify & Authorize
          </a>
        </p>

        <p style="margin-top:12px;color:#666;font-size:13px">Token expires: ${escapeHtml(expiresAt)} UTC.</p>

        <p style="margin-top:14px">If you did not make this payment, contact <a href="mailto:support@techbrot.com">support@techbrot.com</a> immediately.</p>

        <p style="margin:16px 0 6px 0;font-size:12px;color:#777">You received this email because you completed a purchase at TechBrot.com.</p>

        <footer style="margin-top:14px;color:#888;font-size:12px">${businessAddressHtml}<br/><span style="color:#0fd46c">Certified QuickBooks ProAdvisor</span></footer>
      </div>
    </div>
  `;

  let sentVerify = { ok: false, status: 0, provider_id: null, r2key: null };
  try {
    sentVerify = await sendEmail(env, {
      to: email,
      subject: `Please verify your TechBrot Order ${order_id}`,
      html: verifyHtml,
      text: null,
      order_id
    });
  } catch (e) {
    console.warn("sendVerify error:", e);
  }

  // Log verification attempt
  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts
        (order_id, email_to, subject, body_snippet, status, provider_event_id, raw_r2_key)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      order_id,
      email,
      `Verify Order ${order_id}`,
      (stripHtml(verifyHtml) || "").slice(0, 200),
      sentVerify.ok ? "sent" : "failed",
      sentVerify.provider_id || `postmark_${Date.now()}`,
      sentVerify.r2key
    ).run();
  } catch (e) {
    console.warn("log verify email attempt error:", e);
  }

  // Update orders: set next email index and last sent timestamp
  try {
    await env.DB.prepare(`
      UPDATE orders
      SET next_email_index = 2,
          last_email_sent_at = datetime('now')
      WHERE order_id = ?
    `).bind(order_id).run();
  } catch (e) {
    console.warn("update next_email_index error:", e);
  }

  // Store combined provider logs to R2 for quick lookup (optional summary)
  try {
    const summaryKey = `email_attempts/${order_id}/summary-${Date.now()}.json`;
    await env.R2.put(summaryKey, JSON.stringify({
      order_id,
      session_id,
      sentReceipt,
      sentVerify,
      stripe_session_present: !!stripeSession,
      official_links: official
    }, null, 2), { httpMetadata: { contentType: "application/json" } });
  } catch (e) {
    console.warn("R2 summary write failed:", e);
  }

  // Final response
  return new Response(JSON.stringify({ ok: true, order_id }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });

  // -------------------------
  // Helpers
  // -------------------------
  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function stripHtml(html) {
    if (!html) return "";
    return String(html).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  }
}
