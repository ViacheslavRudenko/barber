const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

export const smoothScroll = (target) => {
  const startPosition = window.scrollY;
  const targetPosition = target.offsetTop;
  const distance = targetPosition - startPosition - headerHeight;
  const duration = 800;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Smooth exponential animation function
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b;
  };

  requestAnimationFrame(animation);
};
