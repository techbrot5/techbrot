document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-section .faq-item");

  faqItems.forEach(item => {
    const header = item.querySelector("h3");
    const toggle = item.querySelector(".faq-toggle");

    const toggleFaq = () => {
      item.classList.toggle("faq-active");
    };

    header.addEventListener("click", toggleFaq);
    toggle.addEventListener("click", toggleFaq);
  });
});