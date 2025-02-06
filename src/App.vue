<template>
  <RouterView />
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
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
