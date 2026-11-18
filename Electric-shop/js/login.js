
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    clearErrors();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let valid = true;

    if (email.value.trim() === "") {
        showError("emailError", "Email is required.");
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError("emailError", "Invalid email address.");
        valid = false;
    }

    if (password.value === "") {
        showError("passwordError", "Password is required.");
        valid = false;
    }

    if (valid) {
        let savedEmail = localStorage.getItem("email");
        let savedPassword = localStorage.getItem("password");

        if (email.value.trim() === savedEmail &&
            password.value === savedPassword) {

            alert("Login successful!");
            window.location.href = "dashboard.html";

        }
        else {
            showError("passwordError", "Invalid email or password. Please register first.");
        }
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
