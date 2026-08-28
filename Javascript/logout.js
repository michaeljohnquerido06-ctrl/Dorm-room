const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    window.location.href = "Login.html";
});