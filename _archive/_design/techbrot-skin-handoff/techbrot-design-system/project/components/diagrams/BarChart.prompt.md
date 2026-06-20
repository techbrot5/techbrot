Horizontal bar chart for research figures — ink bars, one cobalt highlight, mono values.

```jsx
<BarChart
  caption="Median days to close, by reconciliation cadence (n = 247)"
  unit=" days"
  data={[
    { label: "Weekly", value: 3.1, highlight: true },
    { label: "Biweekly", value: 6.8 },
    { label: "Monthly", value: 13.0 },
  ]}
/>
```

Always caption with source + sample size.
