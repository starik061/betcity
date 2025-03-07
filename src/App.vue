<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
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
/* Альтернативный вариант с вертикальным смещением */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
