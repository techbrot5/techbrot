Text input (or textarea with `multiline`). White surface, strong hairline border, cobalt focus ring.

```jsx
<Input id="email" type="email" placeholder="you@company.com" />
<Input multiline placeholder="Tell us about your current setup…" />
<Input invalid defaultValue="not-an-email" />
```

Wrap in `<Field>` for label/hint/error. Heights: 40px single-line.
