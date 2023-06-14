import { menu, toggleMenu } from "./Header/burgerMenu.js";
import { smoothScroll } from "./Header/scrollToSection.js";
import { initializeSwiper } from "./Main/swiper.js";

//Action of scrolling to section when click on header menu
smoothScroll();

//Open burger menu
menu.addEventListener("click", toggleMenu);

//Swiper
initializeSwiper();
