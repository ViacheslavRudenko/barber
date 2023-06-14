import { menu, toggleMenu } from "./Header/burgerMenu.js";
import { smoothScroll } from "./Header/scrollToSection.js";
import { initializeSwiper } from "./Main/swiper.js";

//Action of scrolling to section when click on header menu
export const links = document.querySelectorAll("a[data-target]");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Check if the screen width is below a certain threshold (e.g., 768 pixels)
    if (window.innerWidth < 768) {
      toggleMenu();
    }

    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    smoothScroll(targetElement);
  });
});

//Open burger menu
menu.addEventListener("click", toggleMenu);

//Swiper
initializeSwiper();
