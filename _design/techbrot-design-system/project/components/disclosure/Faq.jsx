import React from "react";

/** Accessible FAQ accordion using the production .faq__* system. */
export function Faq({ items = [], defaultOpen = -1 }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="faq__list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq__item" key={i}>
            <h3 className="faq__question">
              <button
                type="button"
                className="faq__trigger"
                aria-expanded={isOpen ? "true" : "false"}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.question}
              </button>
            </h3>
            <div className="faq__answer" data-open={isOpen ? "true" : "false"}>
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
