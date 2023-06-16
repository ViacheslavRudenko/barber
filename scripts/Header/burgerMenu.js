const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu__button");
const checkbox = document.querySelector(".menu__toggle");
const menuBox = document.querySelector(".header__menu");
const body = document.querySelector("body");

const toggleMenu = () => {
  menuButton.classList.toggle("open");
  menuBox.classList.toggle("header__menu--open");
  body.classList.toggle("overflow-hidden");
  checkbox.checked = !checkbox.checked;
};

export { menu, toggleMenu };
