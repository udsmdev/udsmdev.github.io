const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Marina" && password === "Marina2@23") {
        alert("You have successfully logged in. To continue please copy & Paste ");
        location.reload();
    } if (username === "Fjord" && password === "Fjord2@23") {
        alert("You have successfully logged in. To continue please copy & Paste ");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
