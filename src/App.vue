<template>
  <transition name="slide" mode="out-in">
    <RouterView />
  </transition>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  mounted() {
    // if (
    //   window.Telegram &&
    //   window.Telegram.WebApp &&
    //   window.Telegram.WebApp.platform &&
    //   !window.Telegram.WebApp.platform === "unknown" &&
    //   Number(window.Telegram.WebApp?.version) >= 8.0
    // ) {
    //   window.Telegram.WebApp.requestFullscreen();
    // }
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.platform &&
      window.Telegram.WebApp.platform !== "unknown" &&
      Number(window.Telegram.WebApp?.version) >= 8.0
    ) {
      if (window.Telegram.WebApp.disableVerticalSwipes) {
        window.Telegram.WebApp.disableVerticalSwipes();
      }

      if (window.Telegram.WebApp.requestFullscreen) {
        window.Telegram.WebApp.requestFullscreen(); // Запросить полный экран (если доступно)
      } else {
        window.Telegram.WebApp.expand(); // Для iOS и доп. расширения на Android
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
  /* Входящий экран начинает справа */
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  /* Уходящий экран уходит влево */
  opacity: 0;
}
</style>
