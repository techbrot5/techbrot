import React from "react";
import { Navbar } from "../../components/navigation/Navbar.jsx";
import { Footer } from "../../components/navigation/Footer.jsx";
import { Avatar } from "../../components/core/Avatar.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Callout } from "../../components/content/Callout.jsx";
import { DataTable } from "../../components/content/DataTable.jsx";
import { BarChart } from "../../components/diagrams/BarChart.jsx";

const col = { maxWidth: "var(--measure-text)", margin: "0 auto", padding: "0 var(--container-pad)" };
const bodyP = { fontSize: "var(--text-lg)", lineHeight: "var(--leading-body)", margin: "0 0 24px" };

export function ArticleScreen({ onNavigate }) {
  return (
    <div data-screen-label="Research article" style={{ background: "var(--bg-page)" }}>
      <Navbar active="Research" onNavigate={onNavigate} />

      <article>
        <header style={{ ...col, padding: "80px var(--container-pad) 0" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <Badge variant="brass">Research</Badge>
            <Badge>QuickBooks</Badge>
          </div>
          <h1 style={{ fontSize: "var(--text-5xl)", margin: "0 0 20px" }}>
            What a clean month-end actually looks like
          </h1>
          <p
            style={{
              fontSize: "var(--text-xl)",
              lineHeight: "var(--leading-snug)",
              color: "var(--text-secondary)",
              margin: "0 0 28px",
            }}
          >
            We audited 247 QuickBooks files to find out why closing takes 25 days for some teams
            and 3 for others. The answer is structural, not effort.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 32, borderBottom: "1px solid var(--line)" }}>
            <Avatar name="Dana Whitfield" size="lg" />
            <div style={{ fontSize: "var(--text-sm)" }}>
              <div style={{ fontWeight: 600 }}>Dana Whitfield</div>
              <div style={{ color: "var(--text-muted)" }}>Principal advisor · May 2026 · 9 min read</div>
            </div>
          </div>
        </header>

        <div style={{ ...col, padding: "40px var(--container-pad) 80px" }}>
          <p style={bodyP}>
            Every team we audited believed their close was slow because of volume. More
            transactions, more entities, more people — surely that's why it takes three weeks.
            The data disagrees. Close time correlated with <strong>reconciliation cadence</strong>,
            not transaction count, in 41 of 44 slow-closing files.
          </p>
          <p style={bodyP}>
            Teams that reconcile weekly walk into month-end with seven days of open questions.
            Teams that reconcile monthly walk in with thirty — and every unanswered question
            blocks someone else's.
          </p>

          <h2 style={{ margin: "40px 0 16px" }}>The finding</h2>
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", padding: 24, margin: "0 0 24px" }}>
            <BarChart
              caption="Median days to close, by reconciliation cadence. TechBrot file audit, 2025–2026 (n = 247)."
              unit=" days"
              data={[
                { label: "Weekly", value: 3.1, highlight: true },
                { label: "Biweekly", value: 6.8 },
                { label: "Monthly", value: 13.0 },
                { label: "Ad hoc", value: 24.5 },
              ]}
            />
          </div>

          <Callout tone="info" title="From the research" style={{ margin: "0 0 24px" }}>
            Cadence beat headcount in every revenue band we measured. A two-person team
            reconciling weekly closes faster than a five-person team reconciling monthly.
          </Callout>

          <p style={bodyP}>
            The pattern held across platforms. This is not a QuickBooks finding — it's a process
            finding that happens to show up clearly in QuickBooks data.
          </p>

          <h2 style={{ margin: "40px 0 16px" }}>By the numbers</h2>
          <DataTable
            caption="Close-time distribution by cadence (days)"
            columns={[
              { key: "cadence", label: "Cadence" },
              { key: "p25", label: "P25", numeric: true },
              { key: "median", label: "Median", numeric: true },
              { key: "p75", label: "P75", numeric: true },
            ]}
            rows={[
              { cadence: "Weekly", p25: "2.0", median: "3.1", p75: "4.8" },
              { cadence: "Biweekly", p25: "4.5", median: "6.8", p75: "9.9" },
              { cadence: "Monthly", p25: "9.1", median: "13.0", p75: "19.4" },
              { cadence: "Ad hoc", p25: "15.2", median: "24.5", p75: "31.0" },
            ]}
            style={{ marginBottom: 24 }}
          />

          <h2 style={{ margin: "40px 0 16px" }}>What to do with this</h2>
          <p style={bodyP}>
            If your close runs past day ten, don't hire first. Move reconciliation to a weekly
            cadence, route receipts to one place, and let month-end become an exceptions review.
            That restructuring is most of what our <a href="#">cleanup engagements</a> do.
          </p>
          <p style={{ ...bodyP, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            Method: 247 QuickBooks Online files audited between January 2025 and March 2026.
            Close time measured from period end to locked books. Full methodology available on request.
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
