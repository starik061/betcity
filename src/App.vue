<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  mounted() {
    // Проверяем, что WebApp доступен
    if (window.Telegram?.WebApp && window.Telegram.WebApp.BackButton) {
      this.setupBackButtonHandler();
    }
  },

  methods: {
    setupBackButtonHandler() {
      const telegram = window.Telegram.WebApp;

      const backButtonHandler = () => {
        this.$router.back(); // Переход назад по маршруту
      };

      const currentRoute = this.$route;
      const previousRoute = this.$router.options.history.state?.back; // Получаем предыдущий маршрут

      // Единственный маршрут, на котором скрываем кнопку назад
      const excludedRoutes = ["/"];

      if (!previousRoute || excludedRoutes.includes(currentRoute.path) || excludedRoutes.includes(previousRoute)) {
        // Если предыдущего маршрута нет или текущий/предыдущий маршрут — "/"
        telegram.BackButton.offClick(backButtonHandler);
        telegram.BackButton.hide();
      } else {
        // В остальных случаях показываем кнопку назад
        telegram.BackButton.onClick(backButtonHandler);
        telegram.BackButton.show();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* Анимация смены экрана справа налево */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s;
}

.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: none;
  opacity: 1;
}

.slide-leave {
  transform: none;
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
