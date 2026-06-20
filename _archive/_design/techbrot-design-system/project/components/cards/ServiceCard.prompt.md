Service offering card for 3-up grids — eyebrow, serif heading, body, arrow link list, arrow CTA. Hairline border, lifts on hover.

```jsx
<div className="services__grid">
  <ServiceCard
    eyebrow="Bookkeeping"
    heading="Monthly bookkeeping"
    body="Books closed by the 10th, with a P&L you can act on."
    links={[{ label: "Cleanup & catch-up" }, { label: "Catch-up bookkeeping" }]}
  />
</div>
```

Wrap a set in `<div className="services__grid">` for the responsive 3-column layout.
