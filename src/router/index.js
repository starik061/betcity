import { createRouter, createWebHistory } from "vue-router";
import LoadingViewOne from "../views/LoadingViewOne.vue";
import LoadingViewTwo from "../views/LoadingViewTwo.vue";
import UnsupportedPlatform from "../views/UnsupportedPlatform.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loading-one",
      component: LoadingViewOne
    },
    {
      path: "/123",
      name: "loading-two",
      component: LoadingViewTwo
    },

    {
      path: "/unsupported-platform",
      name: "unsupported-platform",
      component: UnsupportedPlatform
    }
  ]
});

router.beforeEach((to, from, next) => {
  //Здесь происходит проверка на какой платформе Телеграм открыто приложение, и если это не телефон, то перенаправляет на страницу ошибки
  window.appRouter = router;
  if (
    (!window.Telegram ||
      !window.Telegram.WebApp ||
      !window.Telegram.WebApp.platform ||
      window.Telegram.WebApp.platform === "unknown") &&
    to.path !== "/unsupported-platform"
  ) {
    next("/unsupported-platform"); // Страница ошибки
  } else {
    next();
  }
});

export default router;
