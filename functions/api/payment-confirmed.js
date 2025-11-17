// ------------------------------------------------------------------
// functions/api/payment-confirmed.js
// Sends immediate receipt (personalized from Stripe when available),
// then sends a verification email (token link). Logs everything for evidence.
// ------------------------------------------------------------------

import Stripe from "stripe";
import { sendEmail } from "./postmark.js";

export async function onRequestPost(context) {
  const env = context.env;
  const req = context.request;

  // safe parse
  const body = await req.json().catch(() => null);

  if (!body || !body.order_id || !body.email) {
    return new Response(
      JSON.stringify({ error: "order_id and email required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const order_id = String(body.order_id);
  const email = String(body.email).trim();
  const session_id = body.session_id || null;

  // -------------------------
  // Generate verification token and TTL
  // -------------------------
  const token =
    typeof crypto?.randomUUID === "function"
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now();

  const ttlDays = Number(env.VERIFY_TOKEN_TTL_DAYS || 7);
  const expiresAt = new Date(Date.now() + ttlDays * 24 * 3600 * 1000).toISOString();

  // -------------------------
  // Upsert order row (paid = 1)
  // Keep name/amount/currency placeholders — we'll enrich from Stripe when available
  // -------------------------
  const incomingName = body.name || "";
  const incomingAmount = Number(body.amount || 0); // cents or decimal depending on caller; we'll treat as cents if numeric
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

  // store token in orders table
  try {
    await env.DB.prepare(`
      UPDATE orders
      SET verification_token = ?, token_expires_at = ?
      WHERE order_id = ?
    `).bind(token, expiresAt, order_id).run();
  } catch (e) {
    console.warn("token store error:", e);
  }

  // -------------------------
  // Attempt to enrich from Stripe (if session_id & key present)
  // -------------------------
  let stripeSession = null;
  let stripeReceiptUrl = null;
  let customerName = incomingName || "";
  let amountCents = Number(incomingAmount || 0);
  let currency = (incomingCurrency || "USD").toLowerCase();
  let itemsHtml = "";
  let paymentMethodLabel = "";
  let official = {}; // contains receipt_url, invoice_pdf, hosted_invoice_url

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

      // amount in cents
      amountCents = Number(stripeSession.amount_total || amountCents);
      currency = (stripeSession.currency || currency || "usd").toLowerCase();
      customerName = stripeSession.customer_details?.name || stripeSession.customer?.name || customerName;

      // receipt_url if available (card charge)
      try {
        const pi = stripeSession.payment_intent;
        if (pi?.charges?.data?.[0]) {
          stripeReceiptUrl = pi.charges.data[0].receipt_url || null;
        }
      } catch (_) {
        stripeReceiptUrl = null;
      }

      // official links
      official = {
        receipt_url: stripeReceiptUrl || null,
        invoice_pdf: stripeSession.invoice?.invoice_pdf || null,
        hosted_invoice_url: stripeSession.invoice?.hosted_invoice_url || null,
        raw_metadata: stripeSession?.metadata || {}
      };

      // payment method summary
      try {
        paymentMethodLabel = (stripeSession.payment_method_types && stripeSession.payment_method_types[0]) || "";
      } catch (_) { paymentMethodLabel = ""; }

      // build itemsHtml if line items present
      try {
        const li = stripeSession.line_items?.data || [];
        if (Array.isArray(li) && li.length) {
          itemsHtml = `<table style="width:100%;border-collapse:collapse;margin:12px 0">` +
            li.map(row => {
              const desc = row.description || row.price?.product?.name || row.price?.nickname || "Item";
              const qty = Number(row.quantity || 1);
              // amount_subtotal sometimes present; fallback to price.unit_amount
              let unitAmt = Number(row.price?.unit_amount ?? 0);
              let amountSubtotal = Number(row.amount_subtotal ?? row.amount_total ?? (unitAmt * qty));
              // amountSubtotal is in cents
              const unitDisplay = (unitAmt / 100).toFixed(2);
              return `<tr>
                <td style="padding:6px 0">${escapeHtml(desc)}</td>
                <td style="padding:6px 0;text-align:right">${qty} × ${unitDisplay}</td>
              </tr>`;
            }).join("") +
            `</table>`;
        }
      } catch (e) {
        itemsHtml = "";
      }

    } catch (err) {
      console.warn("Stripe retrieval failed:", err?.message || err);
    }
  }

  // fallback if no items html or no stripe session
  if (!itemsHtml) {
    const amountDecimal = (Number(amountCents) || 0) / 100;
    itemsHtml = `<p style="margin:8px 0">Amount charged: <strong>${amountDecimal.toFixed(2)} ${currency.toUpperCase()}</strong></p>`;
  }

  // -------------------------
  // Build receipt HTML (Email #1)
  // -------------------------
  const amountDecimal = (Number(amountCents) || 0) / 100;
  const displayAmount = `${amountDecimal.toFixed(2)} ${currency ? currency.toUpperCase() : "USD"}`;

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
          ${itemsHtml}
          <p style="margin:10px 0 0 0">Total: <strong style="font-size:18px">${escapeHtml(displayAmount)}</strong></p>
          ${official.receipt_url ? `<p style="margin:10px 0">Download your official receipt: <a href="${escapeHtml(official.receipt_url)}">${escapeHtml(official.receipt_url)}</a></p>` : ""}
        </div>

        <p style="margin:16px 0 6px 0">We’ll begin activation shortly. If you did not make this purchase, contact <a href="mailto:support@techbrot.com">support@techbrot.com</a> immediately.</p>

        <footer style="margin-top:20px;color:#888;font-size:12px">
          TechBrot • <span style="color:#0fd46c">Certified QuickBooks ProAdvisor</span>
        </footer>
      </div>
    </div>
  `;

  // -------------------------
  // Send receipt email (Email #1)
  // -------------------------
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

  // Log receipt attempt into email_attempts (and R2 logging is handled inside sendEmail)
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

  // -------------------------
  // Build verification email (Email #2) — SENT IMMEDIATELY
  // -------------------------
  const verifyUrl =
    `${(env.SITE_URL || "").replace(/\/$/, "")}/verify` +
    `?order_id=${encodeURIComponent(order_id)}` +
    `&token=${encodeURIComponent(token)}`;

  const verifyHtml = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;line-height:1.45;color:#111;">
      <div style="max-width:680px;margin:0 auto;padding:20px;">
        <h2 style="margin:0 0 12px 0">Please verify & authorize your TechBrot order</h2>
        <p style="margin:0 0 8px 0">Order ID: <strong>${escapeHtml(order_id)}</strong></p>
        <p style="margin:0 0 16px 0">Click the button below to confirm this purchase. This action serves as authorization evidence for future records.</p>

        <p>
          <a href="${verifyUrl}" style="display:inline-block;padding:12px 18px;border-radius:8px;text-decoration:none;background:#0fd46c;color:#042;font-weight:bold;">
            Verify & Authorize
          </a>
        </p>

        <p style="margin-top:16px;color:#666;font-size:13px">Token expires: ${escapeHtml(expiresAt)} UTC.</p>

        <p style="margin-top:14px">If you did not make this payment, contact <a href="mailto:support@techbrot.com">support@techbrot.com</a> immediately.</p>

        <footer style="margin-top:20px;color:#888;font-size:12px">
          TechBrot • <span style="color:#0fd46c">Certified QuickBooks ProAdvisor</span>
        </footer>
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

  // -------------------------
  // Update orders: set next_email_index = 2 (first follow-up will be next run),
  // update last_email_sent_at to now
  // -------------------------
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

  // -------------------------
  // Store combined provider logs to R2 for quick lookup (optional summary)
  // -------------------------
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
    // not fatal
    console.warn("R2 summary write failed:", e);
  }

  // -------------------------
  // Final response
  // -------------------------
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
