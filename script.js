// Mobile-menu Toggle Bar

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");

        menuBtn.classList.toggle("fa-xmark");
        menuBtn.classList.toggle("fa-grip-lines");
    });
});