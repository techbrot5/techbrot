// admin/dashboard.js
// Frontend logic for dashboard + order page
(function(){
  const pinKey = "admin_pin_techbrot";
  const API = "/api";

  // Shared helpers
  function setPin(p){ localStorage.setItem(pinKey, p) }
  function getPin(){ return localStorage.getItem(pinKey) }
  function clearPin(){ localStorage.removeItem(pinKey) }
  function authHeaders(h={}) { h["x-admin-pin"] = getPin(); return h }

  function humanDate(s){ if(!s) return ""; const d=new Date(s); return d.toLocaleString() }

  // ---------------------- Dashboard page logic ----------------------
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

    function showLocked(){ adminStatus.textContent="Locked"; }
    function showUnlocked(){ adminStatus.textContent="Unlocked"; }

    if (getPin()) showUnlocked(); else showLocked();

    loginBtn.addEventListener("click", ()=> {
      const p = prompt("Enter ADMIN PIN");
      if (!p) return;
      setPin(p);
      showUnlocked();
      runSearch();
    });

    lockBtn.addEventListener("click", ()=> { clearPin(); showLocked(); resultsBody.innerHTML = "<tr><td colspan='8' class='small'>Locked</td></tr>"; });

    async function apiGet(path) {
      const headers = authHeaders({ "Accept":"application/json" });
      const res = await fetch(path, { headers });
      if (res.status===401) { alert("Unauthorized — wrong PIN"); clearPin(); showLocked(); throw new Error("Unauthorized"); }
      return res.json();
    }

    async function runSearch(){
      resultsBody.innerHTML = "<tr><td colspan='8' class='small'>Searching…</td></tr>";
      try {
        const q = qEl.value.trim();
        const f = filterEl.value;
        const fd = fromDate.value || "";
        const td = toDate.value || "";
        const min = minAmount.value || "";
        const max = maxAmount.value || "";
        const url = new URL(API+"/admin-search-orders", location.origin);
        url.searchParams.set("q", q);
        url.searchParams.set("filter", f);
        if (fd) url.searchParams.set("from", fd);
        if (td) url.searchParams.set("to", td);
        if (min) url.searchParams.set("min", min);
        if (max) url.searchParams.set("max", max);
        const res = await apiGet(url.toString());
        if (!res || !res.results || !res.results.length) {
          resultsBody.innerHTML = "<tr><td colspan='8' class='small'>No results</td></tr>";
          return;
        }
        resultsBody.innerHTML = "";
        for (const r of res.results) {
          const tr = document.createElement("tr");
          const risk = calculateRisk(r);
          tr.innerHTML = `
            <td><a href="/admin/order.html?order_id=${encodeURIComponent(r.order_id)}">${escapeHtml(r.order_id)}</a></td>
            <td>${escapeHtml(r.email||"")}</td>
            <td>${escapeHtml(r.amount||"")}</td>
            <td>${escapeHtml(r.currency||"")}</td>
            <td>${r.verified? "Yes":"No"}</td>
            <td>${escapeHtml(r.created_at? humanDate(r.created_at):"")}</td>
            <td>${risk}</td>
            <td class="actions">
              <a href="/admin/order.html?order_id=${encodeURIComponent(r.order_id)}" target="_blank">View</a>
              <a href="/api/export-evidence?order_id=${encodeURIComponent(r.order_id)}" target="_blank">Download</a>
            </td>
          `;
          resultsBody.appendChild(tr);
        }
      } catch (e) {
        resultsBody.innerHTML = "<tr><td colspan='8' class='small'>Error: "+escapeHtml(e.message||"")+"</td></tr>";
      }
    }

    function calculateRisk(r){
      const flags = [];
      try {
        if (!r.verified) flags.push('<span class="badge">Unverified</span>');
        // example: high amount
        if (Number(r.amount) > 1000) flags.push('<span class="badge">High value</span>');
        return flags.join(" ");
      } catch(e){ return "" }
    }

    searchBtn.addEventListener("click", runSearch);
    qEl.addEventListener("keydown", e=>{ if (e.key==="Enter") runSearch(); });

    exportAllBtn.addEventListener("click", ()=> {
      if (!confirm("Export ALL orders evidence (may be large). Continue?")) return;
      const pin = getPin();
      if (!pin) { alert("Unlock dashboard first"); return; }
      window.open("/api/export-evidence?order_id=ALL","_blank");
    });

    // initial run if unlocked
    if (getPin()) runSearch();
  }

  // ---------------------- Order page logic ----------------------
  if (document.getElementById("orderJson")) {
    const params = new URLSearchParams(location.search);
    const orderId = params.get("order_id");
    if (!orderId) { document.getElementById("orderJson").textContent = "Missing order_id"; }

    const pin = getPin();
    if (!pin) { alert("Unlock dashboard first"); location.href="/dashboard"; }

    const headers = authHeaders({ "Accept":"application/json" });

    async function apiGet(path){ const res = await fetch(path, { headers }); if (res.status===401){ alert("Unauthorized"); clearPin(); location.href="/dashboard"; } return res.json(); }

    async function loadOrder(){
      const el = document.getElementById("orderJson");
      el.textContent = "Loading…";
      const res = await apiGet(`/api/admin-get-order?order_id=${encodeURIComponent(orderId)}`);
      document.getElementById("orderTitle").textContent = "Order "+orderId;
      document.getElementById("orderMeta").textContent = `${res.order?.email || ""} • ${res.order?.verified? "Verified":"Unverified"} • ${res.order?.amount || ""} ${res.order?.currency || ""}`;
      document.getElementById("orderJson").textContent = JSON.stringify(res.order || {}, null, 2);

      // email timeline
      const timeline = (res.email_attempts||[]).map(e=>`[${new Date(e.created_at).toLocaleString()}] ${e.subject} — ${e.status}`).join("\n\n");
      document.getElementById("emailTimeline").textContent = timeline || "No email attempts";

      // r2 list
      const r2list = document.getElementById("r2List");
      r2list.innerHTML = "";
      (res.r2_files || []).forEach(f=>{
        const a = document.createElement("a");
        a.href = `/api/admin-get-order?order_id=${encodeURIComponent(orderId)}&download_key=${encodeURIComponent(f.key)}`;
        a.textContent = f.key;
        a.target = "_blank";
        r2list.appendChild(a);
        r2list.appendChild(document.createElement("br"));
      });

      // notes
      const notes = (res.order?.notes_json) ? JSON.parse(res.order.notes_json) : [];
      const notesEl = document.getElementById("notes");
      notesEl.innerHTML = notes.length ? notes.map(n=>`- ${n.when}: ${escapeHtml(n.text)}`).join("<br>") : "<div class='small muted'>No notes</div>";
      // risk flags
      const flags = [];
      if (!res.order?.verified) flags.push("Unverified");
      if (Number(res.order?.amount) > 10000) flags.push("Very high value");
      document.getElementById("riskFlags").innerHTML = flags.map(f=>`<span class="flag">${escapeHtml(f)}</span>`).join(" ");
    }

    // actions
    document.getElementById("downloadBtn").addEventListener("click", ()=> window.open(`/api/export-evidence?order_id=${encodeURIComponent(orderId)}`, "_blank"));
    document.getElementById("resendReceiptBtn").addEventListener("click", async ()=>{
      if (!confirm("Resend receipt email?")) return;
      const r = await fetch("/api/admin-resend-receipt", {
        method:"POST",
        headers: authHeaders({ "Content-Type":"application/json" }),
        body: JSON.stringify({ order_id: orderId })
      });
      const j = await r.json();
      alert(j.ok ? "Receipt resent" : ("Error: "+(j.error||"unknown")));
    });

    document.getElementById("resendVerifyBtn").addEventListener("click", async ()=>{
      if (!confirm("Resend verification email?")) return;
      const r = await fetch("/api/admin-resend-verify", {
        method:"POST",
        headers: authHeaders({ "Content-Type":"application/json" }),
        body: JSON.stringify({ order_id: orderId })
      });
      const j = await r.json();
      alert(j.ok ? "Verification resent" : ("Error: "+(j.error||"unknown")));
    });

    document.getElementById("forceFollowupBtn").addEventListener("click", async ()=>{
      if (!confirm("Trigger follow-up emails now?")) return;
      const r = await fetch("/api/admin-trigger-followup", {
        method:"POST",
        headers: authHeaders({ "Content-Type":"application/json" }),
        body: JSON.stringify({ order_id: orderId })
      });
      const j = await r.json();
      alert(j.ok ? "Follow-up triggered" : ("Error: "+(j.error||"unknown")));
    });

    document.getElementById("markVerifiedBtn").addEventListener("click", async ()=>{
      if (!confirm("Mark order as verified (admin override)?")) return;
      const r = await fetch("/api/admin-add-note", {
        method:"POST",
        headers: authHeaders({ "Content-Type":"application/json" }),
        body: JSON.stringify({ order_id: orderId, note: "Admin marked verified", mark_verified: true })
      });
      const j = await r.json();
      if (j.ok) { alert("Marked verified"); loadOrder(); } else alert("Error");
    });

    document.getElementById("addNoteBtn").addEventListener("click", async ()=> {
      const text = document.getElementById("noteInput").value.trim();
      if (!text) return alert("Note required");
      const r = await fetch("/api/admin-add-note", {
        method:"POST",
        headers: authHeaders({ "Content-Type":"application/json" }),
        body: JSON.stringify({ order_id: orderId, note: text })
      });
      const j = await r.json();
      if (j.ok) { document.getElementById("noteInput").value=""; loadOrder(); } else alert("Error: "+(j.error||""));
    });

    loadOrder();
  }

  // ---------------------- Utility ----------------------
  function escapeHtml(s){ if (s==null) return ""; return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
})();
