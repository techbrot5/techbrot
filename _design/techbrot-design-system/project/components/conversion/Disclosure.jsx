import React from "react";

/** "We are not Intuit" independence banner — locked pattern. */
export function Disclosure({
  eyebrow = "Independent disclosure",
  children,
}) {
  return (
    <aside className="disclosure">
      <p className="disclosure__eyebrow">{eyebrow}</p>
      <p className="disclosure__text">
        {children || (
          <>
            <strong>TechBrot is an independent accounting firm and Certified QuickBooks
            ProAdvisor practice.</strong> We are not Intuit, and we are not affiliated with,
            endorsed by, or sponsored by Intuit Inc. QuickBooks and Intuit are registered
            trademarks of Intuit Inc., used here for identification only.
          </>
        )}
      </p>
    </aside>
  );
}
