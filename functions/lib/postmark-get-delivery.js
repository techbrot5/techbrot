// functions/lib/postmark-get-delivery.js
// Fetches full delivery/bounce/spam events for a Postmark MessageID

export async function getPostmarkDelivery(env, messageId) {
  if (!messageId) return { ok: false, error: "No MessageID provided" };

  const API = `https://api.postmarkapp.com/messages/outbound/messageid/${messageId}`;

  try {
    const res = await fetch(API, {
      method: "GET",
      headers: {
        "X-Postmark-Server-Token": env.POSTMARK_API_TOKEN,
        Accept: "application/json"
      }
    });

    const json = await res.json().catch(() => ({}));

    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      data: json
    };
  } catch (err) {
    return {
      ok: false,
      error: err.message || "Delivery check failed"
    };
  }
}

export default getPostmarkDelivery;
