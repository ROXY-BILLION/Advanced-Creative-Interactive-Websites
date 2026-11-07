const MenuBtn = document.getElementById("menuToggle");
const NavLinks = document.getElementById("navLinks");

MenuBtn.addEventListener("click", function () {
    NavLinks.classList.toggle("active");
});

NavLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        NavLinks.classList.remove("active");
    });
});