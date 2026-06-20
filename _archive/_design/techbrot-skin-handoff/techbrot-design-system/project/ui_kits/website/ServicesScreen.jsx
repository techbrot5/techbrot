import React from "react";
import { Navbar } from "../../components/navigation/Navbar.jsx";
import { Footer } from "../../components/navigation/Footer.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Card } from "../../components/content/Card.jsx";
import { Field } from "../../components/forms/Field.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Select } from "../../components/forms/Select.jsx";
import { ComparisonGrid } from "../../components/diagrams/ComparisonGrid.jsx";
import { DecisionTree } from "../../components/diagrams/DecisionTree.jsx";

const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" };

export function ServicesScreen({ onNavigate }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div data-screen-label="Services" style={{ background: "var(--bg-page)" }}>
      <Navbar active="Services" onNavigate={onNavigate} />

      <section style={{ ...wrap, padding: "80px var(--container-pad) 64px" }}>
        <p className="tb-eyebrow" style={{ margin: "0 0 14px" }}>Services</p>
        <h1 style={{ fontSize: "var(--text-5xl)", maxWidth: "16em", margin: "0 0 20px" }}>
          Built around your systems, not our software.
        </h1>
        <p style={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-snug)", color: "var(--text-secondary)", maxWidth: "32em", margin: 0 }}>
          We advise on twelve accounting, payroll, and operations platforms. The recommendation
          is whatever fits your business — we hold no reseller incentives.
        </p>
      </section>

      <section style={{ ...wrap, padding: "0 var(--container-pad) 88px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <Card eyebrow="2 weeks · fixed fee" title="Systems review">
            <p>Full audit of your accounting stack with a prioritized, costed fix list. Yours to
            implement with anyone.</p>
          </Card>
          <Card eyebrow="4–10 weeks" title="Cleanup &amp; migration">
            <p>Historical cleanup, chart-of-accounts redesign, automation setup, and platform
            migration when the data says move.</p>
          </Card>
          <Card eyebrow="Ongoing" title="Monthly advisory">
            <p>We run your close process reviews, watch your tooling, and train your team as the
            business grows.</p>
          </Card>
        </div>
      </section>

      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ ...wrap, padding: "80px var(--container-pad)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <h2 style={{ margin: "0 0 24px" }}>Where each platform wins</h2>
            <ComparisonGrid
              options={["QBO", "Xero", "NetSuite"]}
              caption="Mid-market capability snapshot (TechBrot assessment, 2026)."
              criteria={[
                { label: "Multi-location inventory", values: [1, 1, 2] },
                { label: "Native payroll", values: [2, 1, 0] },
                { label: "Ecommerce integrations", values: [2, 2, 1] },
                { label: "Audit-grade controls", values: [1, 1, 2] },
                { label: "Starting price / mo", values: ["$35", "$20", "$1,250"] },
              ]}
            />
          </div>
          <div>
            <h2 style={{ margin: "0 0 24px" }}>A first-pass decision</h2>
            <DecisionTree
              caption="Simplified — the review replaces this with your actual constraints."
              root={{
                label: "Inventory across\nmultiple locations?",
                yes: { label: "Revenue > $25M?", yes: { label: "NetSuite tier" }, no: { label: "QBO Advanced" } },
                no: { label: "QBO Plus / Xero" },
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ ...wrap, padding: "88px var(--container-pad)" }}>
        <div style={{ maxWidth: 560 }}>
          <h2 style={{ margin: "0 0 8px" }}>Start with a systems review</h2>
          <p style={{ color: "var(--text-secondary)", margin: "0 0 32px" }}>
            Tell us where the close hurts. We reply within one business day.
          </p>
          {sent ? (
            <div style={{ background: "var(--positive-100)", border: "1px solid var(--positive-600)", borderRadius: "var(--radius-md)", padding: "16px 20px", color: "var(--positive-700)", fontWeight: 500 }}>
              Thanks — your note is in. We'll reply within one business day.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              style={{ display: "grid", gap: 20 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Field label="Name" htmlFor="svc-name">
                  <Input id="svc-name" placeholder="Your name" required />
                </Field>
                <Field label="Work email" htmlFor="svc-email">
                  <Input id="svc-email" type="email" placeholder="you@company.com" required />
                </Field>
              </div>
              <Field label="Accounting system" htmlFor="svc-sys">
                <Select id="svc-sys" options={["QuickBooks Online", "QuickBooks Desktop", "Xero", "NetSuite", "Sage Intacct", "Other / not sure"]} />
              </Field>
              <Field label="What hurts" hint="Optional — a sentence is plenty." htmlFor="svc-msg">
                <Input id="svc-msg" multiline placeholder="Month-end takes three weeks and nobody trusts the AR aging…" />
              </Field>
              <div>
                <Button variant="primary" size="lg" type="submit">Request the review</Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
