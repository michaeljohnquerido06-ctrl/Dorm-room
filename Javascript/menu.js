    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton")
    const sidebar = document.getElementById("sidebar");

    menuButton.addEventListener("click", function () {
        sidebar.classList.remove("hidden");
    });

    closeButton.addEventListener("click",function () {
        sidebar.classList.add("hidden");
    });