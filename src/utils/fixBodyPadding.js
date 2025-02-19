export const fixBodyPadding = () => {
  const paddingValue = window.innerWidth - document.body.offsetWidth;

  document.body.style.paddingRight = paddingValue + "px";
};
