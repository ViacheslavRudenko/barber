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

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    effect: "cards",
    loop: true,
  });

  var nextButton = document.querySelector(".swiper-button-next");
  var prevButton = document.querySelector(".swiper-button-prev");

  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });

  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });
});
