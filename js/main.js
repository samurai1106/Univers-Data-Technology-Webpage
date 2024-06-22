// ========================== Changing navbar opacity on scroll ==========================

const navbar = document.querySelector("nav");

window.addEventListener("load", () => {
if (window.scrollY >= 100) {
    navbar.classList.add("sticky");
} else {
    navbar.classList.remove("sticky");
}
});

window.addEventListener("scroll", () => { 
if (window.scrollY >= 100) {
    navbar.classList.add("sticky");
} else {
    navbar.classList.remove("sticky");
}
});

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

// ========================== Scroll to top button ==========================
const scrollUpBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
if (window.scrollY > 500) {
    scrollUpBtn.classList.add("show-up-btn");
} else {
    scrollUpBtn.classList.remove("show-up-btn");
}
});

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});