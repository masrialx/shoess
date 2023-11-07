const signupForm = document.getElementById("signupForm");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");
const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!username || !email || !password || !confirmPassword || password !== confirmPassword) {
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
    } else {
        errorMsg.style.display = "none";
        successMsg.style.display = "block";

        // Your code here to create the account (e.g., using AJAX or submitting the form)
        // For demonstration purposes, we'll just clear the form after showing success message:
        signupForm.reset();
    }
});
