import { nextTick } from "vue";

export const initBackButton = function () {
  this.$nextTick(() => {
    if (window.Telegram?.WebApp?.BackButton && this.$router) {
      const history = this.$router.options.history;
      const previousRoute = history.state?.back;

      // Извлекаем только путь из previousRoute
      const previousPath =
        typeof previousRoute === "string" ? new URL(previousRoute, window.location.origin).pathname : "/"; // если данные не строка, установим дефолтное значение

      // Проверяем, что путь не равен "/"
      if (previousPath === "/") {
        window.Telegram.WebApp.BackButton.offClick(this.telegramBackButtonHandler);
        window.Telegram.WebApp.BackButton.hide();
      } else {
        if (!window.Telegram.WebApp.BackButton.isVisible) {
          window.Telegram.WebApp.BackButton.offClick(this.telegramBackButtonHandler);
          window.Telegram.WebApp.BackButton.onClick(this.telegramBackButtonHandler);
          window.Telegram.WebApp.BackButton.show();
        }
      }
    }
  });
};
