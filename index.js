
const submitBtn = document.getElementById("btn");
let nextuserId = 1;
const users = [];
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validationForm();
});
localStorage.setItem("registeredEmails", JSON.stringify(["pkmak7447@gmail.com", "princeak7447@gmail.com"]));
const result = document.querySelector("#submission");
function validationForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("conform");
    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("erroremail");
    const errorPassword = document.getElementById("errorpassword");
    const errorConfirm = document.getElementById("errorCfPas");
    let errorMessage = 0;

    if (!/^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})*$/.test(name.value)) {
        errorName.innerHTML = "Enter Name more then two words . ";
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errorEmail.innerHTML = "Invalid email. ";
        errorMessage++;
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])[0-9a-zA-Z!@#\$%\^&\*]{6,}$/.test(password.value)) {
        errorPassword.innerHTML = "Password should have at least 6 characters, 1 lowercase, 1 uppercase, 1 number, and 1 special characters. ";
        errorMessage++;
    }
    const registeredEmails = JSON.parse(localStorage.getItem("registeredEmails"));
    if (registeredEmails.includes(email.value)) {
        result.innerHTML = "This email is already registered.";
        return false;
    } else {
        result.innerHTML = "This email is not registered.";
    }
    if (password.value !== confirmPassword.value) {
        errorConfirm.innerHTML = "enter the correct password. ";
        errorMessage++;
    }

    if (errorMessage === 0) {
        const newUser = {
            id: nextId,
            name: name.value,
            email: email.value,
            password: password.value
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        nextuserId++;
        window.location.href = "signin.html";
    } else {
        errorMessage++;
    }
}