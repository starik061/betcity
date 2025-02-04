<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  mounted() {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.expand(); // Развернуть Web App
      if (window.Telegram.WebApp.requestFullscreen) {
        window.Telegram.WebApp.requestFullscreen(); // Запросить полный экран (если доступно)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
