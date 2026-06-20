import React from "react";

/** Phone conversion unit — always "Talk to a Certified ProAdvisor". */
export function PhoneCta({
  label = "Talk to a Certified ProAdvisor",
  number = "(555) 014-0220",
  detail = "Mon–Fri, 9am–6pm ET",
  inverted = false,
}) {
  const tel = "tel:" + String(number).replace(/[^+\d]/g, "");
  return (
    <div className={inverted ? "phone-cta phone-cta--inverted" : "phone-cta"}>
      <p className="phone-cta__label">{label}</p>
      <a className="phone-cta__number" href={tel}>
        {number}
      </a>
      {detail ? <p className="phone-cta__detail">{detail}</p> : null}
    </div>
  );
}
