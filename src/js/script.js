import '/src/sass/style.scss';

const burgerBtn = document.querySelector(".burger"),
    menu = document.querySelector(".header__menu"),
    closeBtn = document.querySelector(".header__menu-close");

burgerBtn.addEventListener("click", () => {
    menu.classList.add("header__menu_active"),
        document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("header__menu_active"),
        document.body.style.overflow = "";
});