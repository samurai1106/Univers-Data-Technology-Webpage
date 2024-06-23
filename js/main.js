// ------------------ Page loader ------------------
window.addEventListener("load", () => {
    const loader = document.querySelector(".pre-loader");

    loader.classList.add("hide");
});

// ========================== Acceuil slider ==========================

const backgroundImages = document.querySelectorAll(".background");
const DotBtns = document.querySelectorAll(".dot");

let ImageIndex = 0;

function changeBackground() {
    backgroundImages[ImageIndex].classList.remove("show");
    DotBtns[ImageIndex].classList.remove("active");

    ImageIndex++;

    if(ImageIndex >= backgroundImages.length) {
        ImageIndex = 0;
    }

    backgroundImages[ImageIndex].classList.add("show");
    DotBtns[ImageIndex].classList.add("active");
}

setInterval(changeBackground, 6000);

DotBtns.forEach((dot) => {
    dot.addEventListener("click", (ev) => {
        DotBtns.forEach(dot => {
            dot.classList.remove("active");
        });
        backgroundImages.forEach(image => {
            image.classList.remove("show");
        });
        dot.classList.add("active");
        backgroundImages[ev.target.id].classList.add("show");
    });
});

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