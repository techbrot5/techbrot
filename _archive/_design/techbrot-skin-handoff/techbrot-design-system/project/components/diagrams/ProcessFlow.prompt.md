Horizontal process map — the workhorse explainer for workflows and methodologies. Highlight the step where TechBrot intervenes.

```jsx
<ProcessFlow
  title="The month-end close, restructured"
  steps={[
    { label: "Transactions in", sublabel: "bank feeds + receipts" },
    { label: "Weekly reconcile", sublabel: "cadence: 7 days", highlight: true },
    { label: "Review", sublabel: "exceptions only" },
    { label: "Close", sublabel: "day 3" },
  ]}
/>
```

Wraps on narrow screens. Mono sublabels carry the data; one cobalt highlight max.
