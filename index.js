const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Teachers" && password === "teachers@waa") {
        alert("You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Work%20Files/index.html");
        location.reload();
    } if (username === "Mme.Sophie" && password === "mme.sophie@waa") {
        alert("You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Work%20Files/index.html");
        location.reload();
    } if (username === "Mr.Oliver" && password === "mr.oliver@waa") {
        alert("You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Work%20Files/index.html");
        location.reload();
    } if (username === "Ms.Paula" && password === "ms.paula@waa") {
        alert("You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Work%20Files/index.html");
        location.reload();
    } if (username === "Ms.Keely" && password === "ms.keely@waa") {
        alert("You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Work%20Files/index.html");
        location.reload();
    } if (username === "Admin" && password === "Ch@tunette312") {
        alert("Welcome Admin. You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Work%20Files/index.html");
        location.reload();
    } if (username === "Student" && password === "033412") {
        alert("You have successfully logged in. To continue please copy & Paste http://10.70.160.207:10001/Students/index.html");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})