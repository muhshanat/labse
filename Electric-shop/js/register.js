
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    clearErrors();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById("country");
    let terms = document.getElementById("terms");

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        showError("nameError", "Name is required.");
        valid = false;
    }
    else if (!/^[A-Za-z ]+$/.test(name.value.trim())) {
        showError("nameError", "Only letters and spaces are allowed.");
        valid = false;
    }
    else if (name.value.trim().length < 3) {
        showError("nameError", "Name must be at least 3 characters.");
        valid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        showError("emailError", "Email is required.");
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError("emailError", "Invalid email address.");
        valid = false;
    }

    // Password validation
    if (password.value === "") {
        showError("passwordError", "Password is required.");
        valid = false;
    }
    else if (password.value.length < 6) {
        showError("passwordError", "Password must be at least 6 characters.");
        valid = false;
    }

    // Confirm password validation
    if (confirm.value === "") {
        showError("confirmError", "Please confirm your password.");
        valid = false;
    }
    else if (confirm.value !== password.value) {
        showError("confirmError", "Passwords do not match.");
        valid = false;
    }

    // Gender validation
    if (gender === null) {
        showError("genderError", "Please select your gender.");
        valid = false;
    }

    // Country validation
    if (country.value === "") {
        showError("countryError", "Please select your country.");
        valid = false;
    }

    // Terms validation
    if (terms.checked === false) {
        showError("termsError", "Please accept the Terms and Conditions.");
        valid = false;
    }

    // Save registration details
    if (valid) {

        localStorage.setItem("email", email.value.trim());
        localStorage.setItem("password", password.value);

        alert("Registration successful!");

        window.location.href = "index.html";
    }

});

function showError(errorId, message) {
    document.getElementById(errorId).innerHTML = message;
}

function clearErrors() {
    let errors = document.querySelectorAll(".error");

    errors.forEach(function(item) {
        item.innerHTML = "";
    });
}
