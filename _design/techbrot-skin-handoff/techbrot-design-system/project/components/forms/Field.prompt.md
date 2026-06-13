Form field wrapper — label above, hint or error below the control.

```jsx
<Field label="Work email" hint="We reply within one business day." htmlFor="email">
  <Input id="email" type="email" placeholder="you@company.com" />
</Field>
```

`error` replaces the hint and renders in critical red with `role="alert"`.
