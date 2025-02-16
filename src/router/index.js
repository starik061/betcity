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
  // history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
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
    }
  ]
});

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

export default router;
