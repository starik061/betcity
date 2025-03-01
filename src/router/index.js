import { createRouter, createWebHistory } from "vue-router";
import LoadingViewZero from "../views/LoadingViewZero.vue";
import LoadingViewOne from "../views/LoadingViewOne.vue";
import LoadingViewTwo from "../views/LoadingViewTwo.vue";
import LoadingViewThree from "../views/LoadingViewThree.vue";
import LoadingViewFour from "../views/LoadingViewFour.vue";
import MainView from "../views/MainView.vue";
import Rules from "../views/Rules.vue";
import Rating from "../views/Rating.vue";
import Friends from "../views/Friends.vue";
import Profile from "../views/Profile.vue";
import UnsupportedPlatform from "../views/UnsupportedPlatform.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loading",
      component: LoadingViewZero
    },
    {
      path: "/loading-one",
      name: "loading-one",
      component: LoadingViewOne
    },
    {
      path: "/loading-two",
      name: "loading-two",
      component: LoadingViewTwo
    },
    {
      path: "/loading-three",
      name: "loading-three",
      component: LoadingViewThree
    },
    {
      path: "/loading-four",
      name: "loading-four",
      component: LoadingViewFour
    },
    {
      path: "/main-view",
      name: "main-view",
      component: MainView
    },
    {
      path: "/rules",
      name: "rules",
      component: Rules
    },
    {
      path: "/rating",
      name: "rating",
      component: Rating
    },
    {
      path: "/friends",
      name: "friends",
      component: Friends
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },

    {
      path: "/unsupported-platform",
      name: "unsupported-platform",
      component: UnsupportedPlatform
    },

    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: UnsupportedPlatform
    }
  ]
});

// router.beforeEach((to, from, next) => {
// Этот код нужен для перенаправления на стартовый компонент загрузки, если пользователь обновляет страницу,и иначе теряются данные от хранилища
// if (from.name == null && to.path !== "/" && to.path !== "/error") {
//   next("/");
// } else {
//   next();
// }
// });

// router.beforeEach((to, from, next) => {
//Здесь происходит проверка на какой платформе Телеграм открыто приложение, и если это не телефон, то перенаправляет на страницу ошибки
//   window.appRouter = router;
//   if (
//     (!window.Telegram ||
//       !window.Telegram.WebApp ||
//       !window.Telegram.WebApp.platform ||
//       window.Telegram.WebApp.platform === "unknown") &&
//     to.path !== "/unsupported-platform"
//   ) {
//     next("/unsupported-platform"); // Страница ошибки
//   } else {
//     next();
//   }
// });

// Здесь мы иницуализируем кнопку назад в Телеграме или кнопку Закрыть для ствартового загрузочного экрана
// Функция-обработчик для кнопки "назад"
function telegramBackButtonHandler() {
  // Выполняем переход назад с помощью Vue Router
  router.back();
}
router.afterEach((to, from) => {
  if (window.Telegram?.WebApp?.BackButton) {
    // Если текущий маршрут 'loading', скрываем кнопку и удаляем обработчик
    if (to.name === "loading") {
      window.Telegram.WebApp.BackButton.offClick(telegramBackButtonHandler);
      window.Telegram.WebApp.BackButton.hide();
    } else {
      // Если не 'loading', устанавливаем обработчик и отображаем кнопку
      window.Telegram.WebApp.BackButton.offClick(telegramBackButtonHandler);
      window.Telegram.WebApp.BackButton.onClick(telegramBackButtonHandler);
      window.Telegram.WebApp.BackButton.show();
    }
  }
});

export default router;
