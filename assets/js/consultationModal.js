    (function() {
        emailjs.init("YcaZtH_XS2qvGxlNF"); // Initialize EmailJS with Public Key
    })();

    function startLoading() {
        var btn = document.getElementById("consultationBtn");
        btn.innerHTML = 'Please wait... <span class="spinner"></span>';
        btn.disabled = true;

        setTimeout(() => {
            showModal();
            btn.innerHTML = 'Get a free consultation';
            btn.disabled = false;
        }, 1200);
    }

    function showModal() {
        document.getElementById("consultationModal").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    function hideModal() {
        document.getElementById("consultationModal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("consultationForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            var submitButton = this.querySelector("button[type='submit']");
            submitButton.innerHTML = 'Please wait... <span class="spinner"></span>';
            submitButton.disabled = true;

            // Collect form data
            var formData = {
                full_name: this.full_name.value,
                email: this.email.value,
                phone: this.phone.value
            };

            // Send email using EmailJS
            emailjs.send("service_aphji1a", "template_iwuzpym", formData)
                .then(function(response) {
                    console.log("Email sent successfully!", response);

                    // Redirect after 5 seconds
                    setTimeout(function() {
                        window.location.href = "../../thank-you.html";
                    }, 5000);
                })
                .catch(function(error) {
                    console.error("Email sending failed!", error);
                    
                    // Restore button state on error
                    submitButton.innerHTML = "Schedule Now";
                    submitButton.disabled = false;
                });
        });
    });