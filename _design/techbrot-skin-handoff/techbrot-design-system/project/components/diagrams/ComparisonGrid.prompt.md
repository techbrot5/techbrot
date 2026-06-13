Software comparison matrix — dots (0/1/2 = none/partial/full) or mono strings per cell. Optionally tint one column.

```jsx
<ComparisonGrid
  options={["QuickBooks Online", "Xero", "NetSuite"]}
  highlightColumn={0}
  caption="Inventory capability, mid-market tier (TechBrot assessment, 2026)"
  criteria={[
    { label: "Multi-location inventory", values: [1, 1, 2] },
    { label: "Native payroll", values: [2, 1, 0] },
    { label: "Starting price / mo", values: ["$35", "$20", "$1,250"] },
  ]}
/>
```

Real, sourced assessments only — never decorative checkmark walls.
