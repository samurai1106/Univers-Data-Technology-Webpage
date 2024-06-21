// ========================== Responsive Menu ==========================

const MenuBtn = document.querySelector("#menu-btn");
const Menu = document.querySelector("#menu");
const MenuLinks = document.querySelectorAll("nav ul li a");

MenuBtn.addEventListener("click", () => {
    Menu.classList.toggle("show-menu");
});

MenuLinks.forEach((Link) => {
    Link.addEventListener("click", () => {
        Menu.classList.remove("show-menu");
    });
});

// ========================== Landing section heading animation (ISICOD) ==========================
const animatedHeading = document.querySelector(".name h1");

window.addEventListener("load", () => {
    animatedHeading.classList.add("animate");
});

setInterval(() => {
    animatedHeading.classList.toggle("animate");
}, 2800)