// admin/dashboard.js
// Robust frontend logic for the admin dashboard + order page.
// Improvements:
// - safer fetch with timeout and consistent error handling
// - uses DOM creation instead of innerHTML for rows (prevents accidental event interference)
// - reliable openOrder() that uses window.open with fully qualified path
// - downloadEvidence() that fetches zip and forces a proper download (with retries)
// - debounce on search input
// - defensive checks and helpful UI messages
(function () {
  const pinKey = "admin_pin_techbrot";
  const API_BASE = "/api";
  const DEFAULT_TIMEOUT = 20000; // ms

  // ---------------- Shared helpers ----------------
  function setPin(p) { localStorage.setItem(pinKey, p); }
  function getPin() { return localStorage.getItem(pinKey); }
  function clearPin() { localStorage.removeItem(pinKey); }
  function authHeaders(extra = {}) {
    const pin = getPin();
    const h = Object.assign({}, extra);
    if (pin) h["x-admin-pin"] = pin;
    return h;
  }

  function humanDate(s) {
    if (!s) return "";
    try { return new Date(s).toLocaleString(); } catch (e) { return s; }
  }

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function buildUrl(path) {
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    return `${location.origin}${path}`;
  }

  function safeLog(context, err) {
    console.warn("[admin]", context, err);
  }

  // Fetch with timeout
  async function fetchWithTimeout(url, opts = {}, timeout = DEFAULT_TIMEOUT) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    opts.signal = controller.signal;
    try {
      const res = await fetch(url, opts);
      clearTimeout(id);
      return res;
    } catch (err) {
      clearTimeout(id);
      throw err;
    }
  }

  async function apiGetJson(url) {
    const headers = authHeaders({ "Accept": "application/json" });
    const res = await fetchWithTimeout(url, { headers }, DEFAULT_TIMEOUT);
    if (res.status === 401) {
      clearPin();
      throw new Error("Unauthorized (bad PIN)");
    }
    const txt = await res.text();
    try { return JSON.parse(txt); }
    catch { throw new Error("Invalid JSON: " + txt.slice(0, 200)); }
  }

  async function apiPostJson(url, body) {
    const headers = authHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json"
    });
    const res = await fetchWithTimeout(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }, DEFAULT_TIMEOUT);

    if (res.status === 401) {
      clearPin();
      throw new Error("Unauthorized (bad PIN)");
    }

    const txt = await res.text();
    try { return JSON.parse(txt); }
    catch { throw new Error("Invalid JSON: " + txt.slice(0, 200)); }
  }

  // Force blob download
  async function streamToDownload(response, filename) {
    try {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      return true;
    } catch (err) {
      safeLog("streamToDownload", err);
      return false;
    }
  }

  async function downloadEvidence(orderId, opts = {}) {
    const maxRetries = opts.retries ?? 1;
    const filename = `evidence-bundle-${orderId}.zip`;
    const url = buildUrl(`${API_BASE}/export-evidence?order_id=${encodeURIComponent(orderId)}`);

    let attempt = 0;
    while (attempt <= maxRetries) {
      attempt++;
      try {
        const res = await fetchWithTimeout(url, {
          method: "GET",
          headers: authHeaders({ "Accept": "application/zip" })
        }, DEFAULT_TIMEOUT * 3);

        if (!res.ok) throw new Error(res.status + " " + res.statusText);

        const ok = await streamToDownload(res, filename);
        if (!ok) throw new Error("Save failed");
        return { ok: true };
      } catch (err) {
        safeLog("downloadEvidence", err);
        if (attempt > maxRetries) return { ok: false, error: String(err) };
        await new Promise(r => setTimeout(r, 700));
      }
    }
  }

  // ---------------- Dashboard Page Logic ----------------
  if (document.getElementById("resultsBody")) {

    const qEl = document.getElementById("q");
    const filterEl = document.getElementById("filter");
    const searchBtn = document.getElementById("searchBtn");
    const resultsBody = document.getElementById("resultsBody");
    const loginBtn = document.getElementById("loginBtn");
    const lockBtn = document.getElementById("lockBtn");
    const adminStatus = document.getElementById("adminStatus");
    const exportAllBtn = document.getElementById("exportAllBtn");
    const fromDate = document.getElementById("fromDate");
    const toDate = document.getElementById("toDate");
    const minAmount = document.getElementById("minAmount");
    const maxAmount = document.getElementById("maxAmount");

    // ---------------- ADDED BUTTONS ----------------
    const verifyAllBtn = document.getElementById("verifyAllBtn");
    const deleteEvidenceBtn = document.getElementById("deleteEvidenceBtn");

    // Progress modal
    const progressModal = document.getElementById("progressModal");
    const progressLog = document.getElementById("progressLog");
    const closeProgressBtn = document.getElementById("closeProgressBtn");

    // Delete modal
    const deleteModal = document.getElementById("deleteModal");
    const deleteOrderInput = document.getElementById("deleteOrderInput");
    const deleteConfirmBtn = document.getElementById("deleteConfirmBtn");
    const deleteCancelBtn = document.getElementById("deleteCancelBtn");
    const deleteResult = document.getElementById("deleteResult");

    // ---------------- Helpers ----------------
    function showLocked() { adminStatus.textContent = "Locked"; }
    function showUnlocked() { adminStatus.textContent = "Unlocked"; }

    function debounce(fn, wait = 250) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
      };
    }

    // ---------- Modal helpers (ADDED) ----------
    function openProgressModal() {
      progressLog.textContent = "";
      progressModal.style.display = "flex";
    }
    function closeProgressModal() {
      progressModal.style.display = "none";
    }

    function openDeleteModal() {
      deleteOrderInput.value = "";
      deleteResult.style.display = "none";
      deleteModal.style.display = "flex";
    }
    function closeDeleteModal() {
      deleteModal.style.display = "none";
    }

    closeProgressBtn.addEventListener("click", closeProgressModal);

    // ---------- Login / Unlock ----------
    if (getPin()) showUnlocked();
    else showLocked();

    loginBtn.addEventListener("click", () => {
      if (getPin()) {
        clearPin();
        showLocked();
        resultsBody.innerHTML = `<tr><td colspan="8">Locked</td></tr>`;
        return;
      }

      const p = prompt("Enter ADMIN PIN");
      if (!p) return;
      setPin(p);
      showUnlocked();
      runSearch();
    });

    lockBtn.addEventListener("click", () => {
      clearPin();
      showLocked();
      resultsBody.innerHTML = `<tr><td colspan="8">Locked</td></tr>`;
    });

    // ---------- Create row ----------
    function createRow(item) {
      const tr = document.createElement("tr");

      const tdOrder = document.createElement("td");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = item.order_id;
      link.addEventListener("click", e => {
        e.preventDefault();
        openOrder(item.order_id);
      });
      tdOrder.appendChild(link);
      tr.appendChild(tdOrder);

      const tdEmail = document.createElement("td");
      tdEmail.textContent = item.email;
      tr.appendChild(tdEmail);

      const tdAmount = document.createElement("td");
      tdAmount.textContent = item.amount;
      tr.appendChild(tdAmount);

      const tdCurrency = document.createElement("td");
      tdCurrency.textContent = item.currency;
      tr.appendChild(tdCurrency);

      const tdVerified = document.createElement("td");
      tdVerified.textContent = item.verified ? "Yes" : "No";
      tr.appendChild(tdVerified);

      const tdCreated = document.createElement("td");
      tdCreated.textContent = humanDate(item.created_at);
      tr.appendChild(tdCreated);

      const tdRisk = document.createElement("td");
      tdRisk.innerHTML = calculateRiskHtml(item);
      tr.appendChild(tdRisk);

      const tdActions = document.createElement("td");
      tdActions.className = "actions";

      const viewBtn = document.createElement("button");
      viewBtn.textContent = "View";
      viewBtn.className = "ghost-link";
      viewBtn.addEventListener("click", () => openOrder(item.order_id));
      tdActions.appendChild(viewBtn);

      const dlBtn = document.createElement("button");
      dlBtn.textContent = "Download";
      dlBtn.className = "ghost-link";
      dlBtn.addEventListener("click", async () => {
        const prev = dlBtn.textContent;
        dlBtn.textContent = "Loading…";
        dlBtn.disabled = true;
        const r = await downloadEvidence(item.order_id);
        if (!r.ok) alert(r.error);
        dlBtn.textContent = prev;
        dlBtn.disabled = false;
      });
      tdActions.appendChild(dlBtn);

      tr.appendChild(tdActions);
      return tr;
    }

    function calculateRiskHtml(r) {
      const flags = [];
      if (!r.verified) flags.push('<span class="badge">Unverified</span>');
      if (Number(r.amount) > 1000) flags.push('<span class="badge">High value</span>');
      return flags.join(" ");
    }

    function openOrder(orderId) {
      const url = buildUrl(`/admin/order.html?order_id=${encodeURIComponent(orderId)}`);
      window.open(url, "_blank");
    }

    // ---------- Run Search ----------
    async function runSearch() {
      if (!getPin()) {
        resultsBody.innerHTML = `<tr><td colspan="8">Locked</td></tr>`;
        return;
      }

      resultsBody.innerHTML = `<tr><td colspan="8">Searching…</td></tr>`;

      try {
        const url = new URL(buildUrl(`${API_BASE}/admin-search-orders`));
        if (qEl.value) url.searchParams.set("q", qEl.value);
        if (filterEl.value) url.searchParams.set("filter", filterEl.value);
        if (fromDate.value) url.searchParams.set("from", fromDate.value);
        if (toDate.value) url.searchParams.set("to", toDate.value);
        if (minAmount.value) url.searchParams.set("min", minAmount.value);
        if (maxAmount.value) url.searchParams.set("max", maxAmount.value);

        const res = await apiGetJson(url.toString());
        if (!res.results.length) {
          resultsBody.innerHTML = `<tr><td colspan="8">No results</td></tr>`;
          return;
        }

        resultsBody.innerHTML = "";
        res.results.forEach(r => resultsBody.appendChild(createRow(r)));

      } catch (err) {
        resultsBody.innerHTML =
          `<tr><td colspan="8">Error: ${escapeHtml(String(err))}</td></tr>`;
      }
    }

    const debouncedSearch = debounce(runSearch);
    qEl.addEventListener("input", debouncedSearch);
    searchBtn.addEventListener("click", runSearch);

    // ---------- Export All ----------
    exportAllBtn.addEventListener("click", () => {
      if (!getPin()) return alert("Unlock dashboard first");
      if (!confirm("Export ALL orders? May be large.")) return;
      window.open(buildUrl(`${API_BASE}/export-evidence?order_id=ALL`), "_blank");
    });

    // -------------------------------------------
    // VERIFY ALL (ADDED)
    // -------------------------------------------
    verifyAllBtn.addEventListener("click", async () => {
      if (!getPin()) return alert("Unlock dashboard first");
      if (!confirm("Verify evidence for ALL orders?")) return;

      openProgressModal();
      progressLog.textContent = "Starting verification…\n";

      try {
        const res = await fetch(buildUrl(`${API_BASE}/admin-verify-all`), {
          headers: authHeaders({ "Accept": "text/event-stream" })
        });

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const txt = decoder.decode(value);
          progressLog.textContent += txt;
          progressLog.scrollTop = progressLog.scrollHeight;
        }

        progressLog.textContent += "\n✓ Completed.\n";

      } catch (err) {
        progressLog.textContent += "\nError: " + err + "\n";
      }
    });

    // -------------------------------------------
    // DELETE EVIDENCE (ADDED)
    // -------------------------------------------
    deleteEvidenceBtn.addEventListener("click", () => {
      if (!getPin()) return alert("Unlock dashboard first");
      openDeleteModal();
    });

    deleteCancelBtn.addEventListener("click", closeDeleteModal);

    deleteConfirmBtn.addEventListener("click", async () => {
      const orderId = deleteOrderInput.value.trim();
      if (!orderId) return alert("Order ID required");

      deleteResult.style.display = "block";
      deleteResult.textContent = "Processing…";

      try {
        const j = await apiPostJson(buildUrl(`${API_BASE}/admin-delete-evidence`), {
          order_id: orderId
        });
        deleteResult.textContent = JSON.stringify(j, null, 2);
      } catch (err) {
        deleteResult.textContent = "Error: " + String(err);
      }
    });

    // auto-run
    if (getPin()) runSearch();
  }

  // ---------------- Order Page Logic ----------------
  if (document.getElementById("orderJson")) {
    const params = new URLSearchParams(location.search);
    const orderId = params.get("order_id");

    if (!orderId) {
      document.getElementById("orderJson").textContent = "Missing order_id";
      return;
    }

    if (!getPin()) {
      alert("Unlock dashboard first");
      location.href = "/dashboard";
      return;
    }

    async function apiGet(path) {
      const res = await fetchWithTimeout(path, {
        headers: authHeaders({ "Accept": "application/json" })
      }, DEFAULT_TIMEOUT);

      if (res.status === 401) {
        clearPin();
        alert("Unauthorized");
        location.href = "/dashboard";
      }

      const txt = await res.text();
      return JSON.parse(txt);
    }

    async function loadOrder() {
      const el = document.getElementById("orderJson");
      el.textContent = "Loading…";

      try {
        const res = await apiGet(buildUrl(`${API_BASE}/admin-get-order?order_id=${encodeURIComponent(orderId)}`));

        document.getElementById("orderTitle").textContent = "Order " + orderId;
        document.getElementById("orderMeta").textContent =
          `${res.order?.email} • ${res.order?.verified ? "Verified" : "Unverified"} • ${res.order?.amount} ${res.order?.currency}`;

        document.getElementById("orderJson").textContent =
          JSON.stringify(res.order, null, 2);

        const timelineEl = document.getElementById("emailTimeline");
        const timeline = (res.email_attempts || [])
          .map(e => `[${humanDate(e.created_at)}] ${e.subject} — ${e.status}`)
          .join("\n\n");
        timelineEl.textContent = timeline || "No email attempts";

        const r2List = document.getElementById("r2List");
        r2List.innerHTML = "";
        (res.r2_files || []).forEach(f => {
          const div = document.createElement("div");
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = f.key;
          a.addEventListener("click", async (ev) => {
            ev.preventDefault();
            const dlUrl = buildUrl(`${API_BASE}/admin-get-order?order_id=${encodeURIComponent(orderId)}&download_key=${encodeURIComponent(f.key)}`);
            const resp = await fetchWithTimeout(dlUrl, {
              headers: authHeaders({ "Accept": "application/octet-stream" })
            });
            const filename = f.key.split("/").pop();
            await streamToDownload(resp, filename);
          });
          div.appendChild(a);
          r2List.appendChild(div);
        });

        const notes = res.order?.notes_json ? JSON.parse(res.order.notes_json) : [];
        const notesEl = document.getElementById("notes");
        notesEl.innerHTML = "";
        if (notes.length) {
          notes.forEach(n => {
            const d = document.createElement("div");
            d.textContent = `${n.when}: ${n.text}`;
            notesEl.appendChild(d);
          });
        } else {
          notesEl.innerHTML = `<div class="small muted">No notes</div>`;
        }

        const flags = [];
        if (!res.order?.verified) flags.push("Unverified");
        if (Number(res.order?.amount) > 10000) flags.push("Very high value");

        document.getElementById("riskFlags").innerHTML =
          flags.map(f => `<span class="flag">${escapeHtml(f)}</span>`).join(" ");

      } catch (err) {
        document.getElementById("orderJson").textContent = "Error: " + err;
      }
    }

    // Action buttons
    document.getElementById("downloadBtn").addEventListener("click", async () => {
      await downloadEvidence(orderId);
    });

    document.getElementById("resendReceiptBtn").addEventListener("click", async () => {
      if (!confirm("Resend receipt email?")) return;
      const j = await apiPostJson(buildUrl(`${API_BASE}/admin-resend-receipt`), { order_id: orderId });
      alert(j.ok ? "Receipt resent" : j.error);
    });

    document.getElementById("resendVerifyBtn").addEventListener("click", async () => {
      if (!confirm("Resend verification email?")) return;
      const j = await apiPostJson(buildUrl(`${API_BASE}/admin-resend-verify`), { order_id: orderId });
      alert(j.ok ? "Verification resent" : j.error);
    });

    document.getElementById("forceFollowupBtn").addEventListener("click", async () => {
      if (!confirm("Trigger follow-up emails now?")) return;
      const j = await apiPostJson(buildUrl(`${API_BASE}/admin-trigger-followup`), { order_id: orderId });
      alert(j.ok ? "Triggered" : j.error);
    });

    document.getElementById("markVerifiedBtn").addEventListener("click", async () => {
      if (!confirm("Mark order verified?")) return;
      const j = await apiPostJson(buildUrl(`${API_BASE}/admin-add-note`), {
        order_id: orderId,
        note: "Admin marked verified",
        mark_verified: true
      });
      if (j.ok) loadOrder();
      else alert(j.error);
    });

    document.getElementById("addNoteBtn").addEventListener("click", async () => {
      const text = document.getElementById("noteInput").value.trim();
      if (!text) return alert("Note required");
      const j = await apiPostJson(buildUrl(`${API_BASE}/admin-add-note`), {
        order_id: orderId,
        note: text
      });
      if (j.ok) {
        document.getElementById("noteInput").value = "";
        loadOrder();
      } else alert(j.error);
    });

    loadOrder();
  }

})();
