/*** Mobile Navigation ***/
const MenuBtn = document.getElementById("menuToggle");
const NavLinks = document.getElementById("navLinks");

MenuBtn.addEventListener("click", function () {
    const isOpen = NavLinks.classList.toggle("active");

    MenuBtn.setAttribute("aria-expanded", isOpen);
    MenuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

NavLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        NavLinks.classList.remove("active");

        MenuBtn.setAttribute("aria-expanded", "false");
        MenuBtn.setAttribute("aria-label", "Open navigation");
    });
});