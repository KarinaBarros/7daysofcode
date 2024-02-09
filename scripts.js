document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var navLinks = document.getElementById("navLinks");

    toggleButton.addEventListener("click", function () {
        if (navLinks.style.display === "none") {
            navLinks.style.display = "block";
        } else {
            navLinks.style.display = "none";
        }
    });
});