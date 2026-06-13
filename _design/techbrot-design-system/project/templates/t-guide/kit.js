// Minimal FAQ accordion behavior for tier mockups (matches production .faq__* contract).
document.addEventListener("click", function (e) {
  const trigger = e.target.closest(".faq__trigger");
  if (!trigger) return;
  const item = trigger.closest(".faq__item");
  const answer = item.querySelector(".faq__answer");
  const open = trigger.getAttribute("aria-expanded") === "true";
  // close siblings
  item.parentElement.querySelectorAll(".faq__trigger").forEach(function (t) {
    t.setAttribute("aria-expanded", "false");
  });
  item.parentElement.querySelectorAll(".faq__answer").forEach(function (a) {
    a.setAttribute("data-open", "false");
  });
  if (!open) {
    trigger.setAttribute("aria-expanded", "true");
    answer.setAttribute("data-open", "true");
  }
});
