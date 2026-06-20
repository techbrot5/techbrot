Binary decision tree for "which system / which path" guidance. Questions in plain boxes, outcomes in cobalt leaves.

```jsx
<DecisionTree
  caption="Choosing your accounting platform — simplified"
  root={{
    label: "Inventory across\nmultiple locations?",
    yes: { label: "Revenue > $25M?", yes: { label: "NetSuite tier" }, no: { label: "QBO Advanced" } },
    no: { label: "QBO Plus / Xero" },
  }}
/>
```

Keep labels ≤2 short lines (`\n` splits). Max ~3 levels — deeper trees belong in articles as multiple diagrams.
