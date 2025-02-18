export default {
  mounted(el, binding) {
    let startX = 0;
    const threshold = 50; // минимальное расстояние для определения свайпа

    const touchStartHandler = (e) => {
      startX = e.touches[0].clientX;
    };

    const touchEndHandler = (e) => {
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;
      if (Math.abs(diffX) > threshold) {
        const direction = diffX > 0 ? "right" : "left";
        binding.value(direction);
      }
    };

    el.__swipeHandlers = { touchStartHandler, touchEndHandler };

    el.addEventListener("touchstart", touchStartHandler);
    el.addEventListener("touchend", touchEndHandler);
  },
  unmounted(el) {
    if (el.__swipeHandlers) {
      el.removeEventListener("touchstart", el.__swipeHandlers.touchStartHandler);
      el.removeEventListener("touchend", el.__swipeHandlers.touchEndHandler);
      delete el.__swipeHandlers;
    }
  }
};
