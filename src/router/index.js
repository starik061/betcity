import { createRouter, createWebHistory } from "vue-router";
import LoadingViewOne from "../views/LoadingViewOne.vue";
import LoadingViewTwo from "../views/LoadingViewTwo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loading-one",
      component: LoadingViewOne
    },
    {
      path: "/",
      name: "loading-two",
      component: LoadingViewTwo
    }
  ]
});

export default router;
