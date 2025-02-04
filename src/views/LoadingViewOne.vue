<template>
  <div class="main-container flex-container">
    <img src="/img/loading-view-1-main-picture.png" alt="octopus-mascot of betcity">
    <strong class="slogan">Получай крутые призы</strong>
    <p class="text">За прогнозы матчей онлайн</p>
    <RouterLink to="/Loading">Далее</RouterLink>
    <button @click="closeApp" class="close-button">
      Закрыть
    </button>
    <div class="dots">
      <span :class="{ active: currentScreen === 0 }"></span>
      <span :class="{ active: currentScreen === 1 }"></span>
      <span :class="{ active: currentScreen === 2 }"></span>
    </div>
  </div>
</template>

<script>
import { miniApp } from '@telegram-apps/sdk-vue';

export default {
  data() {
    return {
      currentScreen: 0,
    };
  },

  mounted() {
    if (miniApp.mount.isAvailable()) {
      miniApp.mount(); // Включает полноэкранный режим
      miniApp.isMounted(); // Проверяет, активен ли режим
      if (miniApp.requestFullscreen.isAvailable()) {
        miniApp.requestFullscreen(); // Запрашивает переход в полноэкранный режим
      }
    }
  },

  methods: {
    closeApp() {
      // Проверка доступности метода для закрытия
      if (miniApp.close.isAvailable()) {
        miniApp.close(); // Закрываем мини-приложение
      } else {
        console.warn('Метод мини-приложения "close" недоступен');
      }
    }
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
  margin-top: -20px;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  line-height: 1.2;
}

.text {
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



.close-button {
  padding: 10px 20px;
  background-color: #ff3333;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.close-button:hover {
  background-color: #cc0000;
}
</style>
