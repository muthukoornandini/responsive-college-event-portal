// ==========================================
// REGISTRATION FORM VALIDATION
// ==========================================

document.getElementById("regForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const dept =
        document.getElementById("dept").value.trim();

    const event =
        document.getElementById("eventSelect").value;

    const successMessage =
        document.getElementById("successMessage");


    // Check empty fields
    if (!name || !email || !mobile || !dept || !event) {

        successMessage.innerHTML =
            `<p class="error-message">
                ⚠️ Please fill all required fields.
            </p>`;

        return;
    }


    // Check mobile number
    if (!/^[0-9]{10}$/.test(mobile)) {

        successMessage.innerHTML =
            `<p class="error-message">
                ⚠️ Please enter a valid 10-digit mobile number.
            </p>`;

        return;
    }


    // Successful registration
    successMessage.innerHTML =
        `<p class="text-success">
            ✅ Registration successful for
            <strong>${event}</strong>!
            Welcome, ${name}.
        </p>`;

});


// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const queryName =
        document.getElementById("queryName").value.trim();

    const queryEmail =
        document.getElementById("queryEmail").value.trim();

    const queryMsg =
        document.getElementById("queryMsg").value.trim();


    if (!queryName || !queryEmail || !queryMsg) {

        alert("Please fill all contact form fields.");

        return;
    }


    alert("Your enquiry has been submitted successfully!");

    this.reset();

});


// ==========================================
// DYNAMIC ANNOUNCEMENT
// ==========================================

document.getElementById("announcements").innerHTML =
    `
    <p>
        <strong>Latest:</strong>
        🎉 Campus Fest 2026 registrations are now open!
        Registration closes on October 4.
    </p>
    `;


// ==========================================
// EVENT REGISTER BUTTON
// ==========================================

document.querySelectorAll(".register-btn").forEach(function (btn) {

    btn.addEventListener("click", function () {

        const selectedEvent =
            this.dataset.event;


        // Select event automatically
        document.getElementById("eventSelect").value =
            selectedEvent;


        // Scroll to registration section
        document.getElementById("registration").scrollIntoView({
            behavior: "smooth"
        });

    });

});