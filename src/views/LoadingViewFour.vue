<template>
  <div class="main-container flex-container">
    <img src="/img/loading-view-4-main-picture.png" alt="octopus-mascot of betcity">
    <strong class="slogan">Будь первым в рейтинге</strong>
    <p class="text">Копи больше беткоинов и участвуй в рейтинге за подарки</p>
    <RouterLink class="main-btn" to="/main-view">
      Сделать первый прогноз
    </RouterLink>

    <div class="dots">
      <span class="active"></span>
      <span class="active"></span>
      <span class="active"></span>
      <span class="active"></span>
    </div>
  </div>
</template>

<script>
import IconNextBtnArrow from '@/components/icons/IconNextBtnArrow.vue';

export default {
  components: { IconNextBtnArrow },
  data() {
    return {
      currentScreen: 1,
    };
  },

  mounted() {
    // if (miniApp.mount.isAvailable()) {
    //   miniApp.mount(); // Включает полноэкранный режим
    //   miniApp.isMounted(); // Проверяет, активен ли режим
    //   if (miniApp.requestFullscreen.isAvailable()) {
    //     miniApp.requestFullscreen(); // Запрашивает переход в полноэкранный режим
    //   }
    // }
    if (window.telegram?.WebApp?.requestFullscreen) {
      window.telegram.WebApp.requestFullscreen();
    }

  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slogan {
  display: inline-block;
  margin-top: 26px;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  line-height: 1.2;
}

.text {
  margin-bottom: 9vh;
  font-family: 'Styrene A';
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-text);
  opacity: 0.4;
}

.dots span.active {
  opacity: 1;
}
</style>
