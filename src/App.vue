<template>
  <!-- <transition name="slide" mode="out-in">
    <RouterView :key="this.$route.path" />
  </transition> -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  mounted() {
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.platform &&
      window.Telegram.WebApp.platform !== "unknown" &&
      window.Telegram.WebApp.platform !== "tdesktop" && // Исключаем десктопный Telegram
      Number(window.Telegram.WebApp?.version) >= 8.0
    ) {
      if (window.Telegram.WebApp.disableVerticalSwipes) {
        window.Telegram.WebApp.disableVerticalSwipes();
      }

      if (window.Telegram.WebApp.requestFullscreen) {
        window.Telegram.WebApp.requestFullscreen(); // Запросить полный экран (если доступно)
      } else {
        window.Telegram.WebApp.expand(); // Для iOS и fallback для Android
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
