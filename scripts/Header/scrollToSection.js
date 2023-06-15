const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

export const smoothScroll = (target) => {
  const targetPosition = target.offsetTop - headerHeight;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};
