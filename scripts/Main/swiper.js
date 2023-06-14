export const initializeSwiper = () => {
  const swiper = new Swiper(".swiper-container", {
    effect: "cards",
    loop: true,
  });

  const nextButton = document.querySelector(".swiper-button-next");
  const prevButton = document.querySelector(".swiper-button-prev");

  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });

  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });
};

document.addEventListener("DOMContentLoaded", initializeSwiper);
