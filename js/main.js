// ========================== Changing navbar color on scroll ==========================

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

// ========================== Sections observing to change navbar links decoration ==========================

const Sections = document.querySelectorAll(".main-section");
const NavLinks = document.querySelectorAll(".navLinks");

const SectionsOptions = {
    threshold: 0.5,
};

const SectionsObserver = new IntersectionObserver((entries, SectionsObserver) => {
entries.forEach((entry) => {
    if (!entry.isIntersecting) {
        return;
    } else {
        NavLinks.forEach((link) => {
            link.classList.remove("active");
        });
    document.querySelector(`.${entry.target.id}`).classList.add("active");
    }
});
}, SectionsOptions);

Sections.forEach((Section) => {
SectionsObserver.observe(Section);
});

NavLinks.forEach((link) => {
    link.addEventListener("click", (ev) => {
        NavLinks.forEach((link) => {
            link.classList.remove("active");
        })
        link.classList.add("active")
    });
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

// ========================== Landing section heading animation (ISICOD) ==========================
const animatedHeading = document.querySelector(".name h1");

window.addEventListener("load", () => {
    animatedHeading.classList.add("animate");
});

setInterval(() => {
    animatedHeading.classList.toggle("animate");
}, 2800)