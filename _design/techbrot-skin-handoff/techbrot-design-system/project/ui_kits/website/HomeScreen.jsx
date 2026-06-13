import React from "react";
import { Navbar } from "../../components/navigation/Navbar.jsx";
import { Footer } from "../../components/navigation/Footer.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Card } from "../../components/content/Card.jsx";
import { Stat } from "../../components/content/Stat.jsx";
import { ProcessFlow } from "../../components/diagrams/ProcessFlow.jsx";
import { BarChart } from "../../components/diagrams/BarChart.jsx";

const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--container-pad)",
};

const h2Style = {
  fontSize: "var(--text-3xl)",
  margin: "0 0 12px",
};

const Eyebrow = ({ children }) => <p className="tb-eyebrow" style={{ margin: "0 0 14px" }}>{children}</p>;

export function HomeScreen({ onNavigate }) {
  return (
    <div data-screen-label="Home" style={{ background: "var(--bg-page)" }}>
      <Navbar onNavigate={onNavigate} />

      {/* Hero */}
      <section style={{ ...wrap, padding: "96px var(--container-pad) 80px" }}>
        <Eyebrow>Accounting technology advisory</Eyebrow>
        <h1
          style={{
            fontSize: "var(--text-6xl)",
            maxWidth: "13.5em",
            margin: "0 0 24px",
          }}
        >
          Your books should close themselves.
        </h1>
        <p
          style={{
            fontSize: "var(--text-xl)",
            lineHeight: "var(--leading-snug)",
            color: "var(--text-secondary)",
            maxWidth: "30em",
            margin: "0 0 36px",
          }}
        >
          TechBrot designs the accounting systems, workflows, and processes that let growing
          businesses trust their numbers — on QuickBooks, Xero, NetSuite, or whatever comes next.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate && onNavigate("Services")}>
            Book a systems review
          </Button>
          <Button variant="secondary" size="lg" onClick={() => onNavigate && onNavigate("Methodology")}>
            See the methodology
          </Button>
        </div>
        <div style={{ display: "flex", gap: 64, marginTop: 72, flexWrap: "wrap" }}>
          <Stat value="247" label="QuickBooks files audited" />
          <Stat value="3 days" delta="−22 days" label="Median close after engagement" />
          <Stat value="12" label="Systems we advise on" deltaTone="neutral" />
        </div>
      </section>

      <hr style={{ ...wrap, margin: 0 }} />

      {/* Services */}
      <section style={{ ...wrap, padding: "88px var(--container-pad)" }}>
        <Eyebrow>Services</Eyebrow>
        <h2 style={h2Style}>Three ways we work</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "36em", margin: "0 0 40px" }}>
          Every engagement starts with the same question: where does your team lose time and trust
          in the numbers?
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <Card eyebrow="Diagnose" title="Systems review" href="#">
            <p>
              A two-week audit of your accounting stack — chart of accounts, automations,
              integrations, and close process — with a prioritized fix list.
            </p>
          </Card>
          <Card eyebrow="Redesign" title="Cleanup &amp; migration" href="#">
            <p>
              We rebuild the workflow: clean historicals, restructured accounts, and a migration
              path if your platform no longer fits.
            </p>
          </Card>
          <Card eyebrow="Run" title="Monthly advisory" href="#">
            <p>
              Ongoing oversight of your close, your tooling, and your team's process — so the
              system keeps working as you grow.
            </p>
          </Card>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ ...wrap, padding: "88px var(--container-pad)" }}>
          <Eyebrow>Methodology</Eyebrow>
          <h2 style={h2Style}>The month-end close, restructured</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "36em", margin: "0 0 40px" }}>
            The fastest closes we've measured share one structural choice: reconciliation happens
            weekly, so month-end reviews exceptions instead of everything.
          </p>
          <ProcessFlow
            steps={[
              { label: "Transactions in", sublabel: "bank feeds + receipts" },
              { label: "Weekly reconcile", sublabel: "cadence: 7 days", highlight: true },
              { label: "Review", sublabel: "exceptions only" },
              { label: "Close", sublabel: "day 3" },
            ]}
          />
        </div>
      </section>

      {/* Research */}
      <section style={{ ...wrap, padding: "88px var(--container-pad)" }}>
        <Eyebrow>Research</Eyebrow>
        <h2 style={h2Style}>Research, not marketing</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "36em", margin: "0 0 40px" }}>
          We publish what we measure across real client files — methods, sample sizes, and all.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.1fr", gap: 20, alignItems: "start" }}>
          <Card eyebrow="Research · 2026" title="What a clean month-end actually looks like" href="#">
            <p>247 QuickBooks files, one finding: cadence beats headcount.</p>
          </Card>
          <Card eyebrow="Comparison · 2026" title="QuickBooks, Xero, or NetSuite in 2026" href="#">
            <p>Where each platform actually wins, by company profile.</p>
          </Card>
          <div style={{ paddingTop: 8 }}>
            <BarChart
              caption="Median days to close, by reconciliation cadence (n = 247)"
              unit=" days"
              data={[
                { label: "Weekly reconcile", value: 3.1, highlight: true },
                { label: "Biweekly", value: 6.8 },
                { label: "Monthly", value: 13.0 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "var(--ink-surface)" }}>
        <div style={{ ...wrap, padding: "88px var(--container-pad)", textAlign: "center" }}>
          <h2
            style={{
              color: "var(--paper-on-ink)",
              fontSize: "var(--text-4xl)",
              margin: "0 auto 16px",
              maxWidth: "18em",
            }}
          >
            Stop checking numbers you should be able to trust.
          </h2>
          <p style={{ color: "var(--muted-on-ink)", margin: "0 0 32px" }}>
            A systems review takes two weeks. The fix list is yours either way.
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 48,
              padding: "0 24px",
              background: "var(--paper-on-ink)",
              color: "var(--ink-900)",
              borderRadius: "var(--radius-sm)",
              fontWeight: 500,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Book a systems review
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
