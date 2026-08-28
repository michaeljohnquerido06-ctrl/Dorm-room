if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "index.html";
}

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {
    localStorage.setItem("loggedIn", "true");

    window.location.href = "index.html";
});