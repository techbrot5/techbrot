 (function () {
    emailjs.init("YcaZtH_XS2qvGxlNF");
  })();

  // Show modal
  function showModal() {
    document.getElementById("consultationModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }

  // Hide modal
  function hideModal() {
    document.getElementById("consultationModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  // Simulate loading animation before showing modal
  function startLoading() {
    const btn = document.getElementById("consultationBtn");
    if (!btn) return;
    btn.innerHTML = 'Please wait... <span class="spinner"></span>';
    btn.disabled = true;

    setTimeout(() => {
      showModal();
      btn.innerHTML = "Get a Free Consultation";
      btn.disabled = false;
    }, 1000);
  }

  // Auto-bind all buttons with this class
  document.addEventListener("DOMContentLoaded", function () {
    // Attach modal open event to all matching buttons
    const openButtons = document.querySelectorAll("#consultationBtn, .open-consultation-modal");
    openButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        startLoading();
      });
    });

    // Form submit via EmailJS
    const form = document.getElementById("consultationForm");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const submitBtn = form.querySelector(".submit-btn");
        submitBtn.innerHTML = 'Please wait... <span class="spinner"></span>';
        submitBtn.disabled = true;

        const formData = {
          full_name: form.full_name.value,
          email: form.email.value,
          phone: form.phone.value
        };

        emailjs
          .send("service_aphji1a", "template_iwuzpym", formData)
          .then(() => setTimeout(() => (window.location.href = "../../thank-you.html"), 4000))
          .catch(() => {
            submitBtn.innerHTML = "Schedule Now";
            submitBtn.disabled = false;
          });
      });
    }
  });