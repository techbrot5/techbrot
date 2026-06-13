Data table for research findings and comparisons — hairline rules, sunken header, mono numerics.

```jsx
<DataTable
  caption="Median close time by reconciliation cadence (n = 247)"
  columns={[
    { key: "cadence", label: "Cadence" },
    { key: "close", label: "Median close", numeric: true },
    { key: "delta", label: "vs. monthly", numeric: true },
  ]}
  rows={[
    { cadence: "Weekly", close: "3.1 days", delta: "−4.2×" },
    { cadence: "Monthly", close: "13.0 days", delta: "—" },
  ]}
/>
```
