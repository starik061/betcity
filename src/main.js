import "normalize.css";
import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import SwipeDirective from "@/directives/swipe.js";

// Функция, которая будет выполнять все нужные проверки Telegram WebApp
function initTelegramWebApp() {
  if (window.Telegram?.WebApp) {
    const { WebApp } = window.Telegram;
    WebApp.ready();
    WebApp.disableVerticalSwipes?.(); // Безопасный вызов без if

    // Проверяем, что НЕ десктопная версия
    if (WebApp.platform !== "tdesktop") {
      // Вызываем expand() для всех версий
      WebApp.expand();

      // Если доступно requestFullscreen() (для версий >= 8.0), используем его
      if (parseFloat(WebApp.version) >= 8.0) {
        WebApp.requestFullscreen?.();
      }
    }
  }
}

const app = createApp(App);

app.directive("swipe", SwipeDirective);
app.use(createPinia()).use(router).mount("#root");

// Вызываем инициализацию Telegram WebApp после монтирования Vue приложения
initTelegramWebApp();
