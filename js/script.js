document.addEventListener("DOMContentLoaded", () => {
  const actionButton = document.querySelector(".js-action-btn");
  const targetSection = document.getElementById("js-target-section");

  const easingFunction = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const animateScroll = (target, duration = 1000) => {
    const initialPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + initialPosition;
    const animationStart = performance.now();

    const performAnimation = (currentTime) => {
      const elapsedTime = currentTime - animationStart;
      const progress = elapsedTime / duration;

      if (progress < 1) {
        const easedProgress = easingFunction(progress);
        const currentPosition =
          initialPosition + (targetPosition - initialPosition) * easedProgress;
        window.scrollTo(0, currentPosition);
        requestAnimationFrame(performAnimation);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(performAnimation);
  };

  if (actionButton) {
    actionButton.addEventListener("click", (event) => {
      event.preventDefault();
      animateScroll(targetSection);
    });
  }
});
