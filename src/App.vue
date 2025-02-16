<template>
  <transition name="slide" mode="out-in">
    <RouterView :key="this.$route.fullPath" />
  </transition>
  <!-- <RouterView /> -->
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  mounted() {
    //   if (window.Telegram?.WebApp) {
    //     const { WebApp } = window.Telegram;
    //     WebApp.disableVerticalSwipes?.(); // Безопасный вызов без if

    //     // Проверяем, что НЕ десктопная версия
    //     if (WebApp.platform !== "tdesktop") {
    //       // Вызываем expand() для всех версий
    //       WebApp.expand();

    //       // Если доступно requestFullscreen() (для версий >= 8.0), используем его
    //       if (parseFloat(WebApp.version) >= 8.0) {
    //         WebApp.requestFullscreen?.();
    //       }
    //     }
    //   }
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
