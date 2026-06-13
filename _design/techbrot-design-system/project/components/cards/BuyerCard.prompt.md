Buyer-routing card — opens with an italic serif sentence describing the reader's situation, then routes to the right service. Use in `buyer-routing__grid` wrappers.

```jsx
<div className="buyer-routing__grid">
  <BuyerCard
    signal="Your books are eight months behind."
    heading="Cleanup & catch-up"
    body="We rebuild the ledger, reconcile every account, and hand back books you can file on."
  />
</div>
```

The `signal` is the distinctive element — write it in second person, present tense, no exclamation.
