Faq — hairline-row accordion with serif questions and a CSS plus/minus indicator. Used on every tier for objections/answers (FAQPage schema in production).

```jsx
<Faq
  defaultOpen={0}
  items={[
    { question: "How long does a cleanup take?", answer: "Most files take 2–6 weeks depending on transaction volume and how many accounts have never been reconciled." },
    { question: "Do you work with QuickBooks Desktop?", answer: "Yes — and we handle Desktop-to-Online migrations when the file warrants it." },
  ]}
/>
```

Answers can be JSX (multiple `<p>`s). Questions are sentence-case, written the way a client would ask.
