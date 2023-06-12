const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu__button");
const checkbox = document.querySelector(".menu__toggle");
const menuBox = document.querySelector(".header__menu");

menu.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menuBox.classList.toggle("header__menu--open");
  checkbox.checked = !checkbox.checked;
});

const button = document.querySelector(".price__btn");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
