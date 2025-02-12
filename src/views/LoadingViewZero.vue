<template>
  <div class="main-container flex-container">
    <div class="avatar-octopus-container">
      <img src="/img/avatar-placeholder.webp" alt="" class="avatar-img">
    </div>

    <h2 class="header">Прогнозист <br> Павел</h2>

    <div class="image-container">
      <img src="/public/img/loading-zero-coins.png" alt="coins image" class="background-loading-image">

      <div class="ball-line moving "></div>
      <div class="ball-line second moving "></div>
      <div class="ball-line third moving "></div>

      <img src="/public/img/ball.png" alt="ball" class="ball rotating">
    </div>

    <p class="call-players-text">Зовем игроков на поле</p>

    <strong class="instruction-text">Делай прогнозы, копи баллы, получай подарки и удовольствие от игры</strong>
    <p class="call-players-text">in Telegram</p>
  </div>
</template>

<script>


export default {
  components: {},
  data() {

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
    this.goOn()
  },

  methods: {
    goOn() {
      setTimeout(() => {
        this.$router.push("/loading-one")
      }, 1500)
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
  padding-top: 60px;
  padding-bottom: 150px;
}

.avatar-octopus-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.4%;
  aspect-ratio: 1/1;
  margin-bottom: 14px;
  border-radius: 50%;
  border: 1px solid var(--color-element-border);
  overflow: hidden;
}

.avatar-img {
  width: 80%;
  height: 80%;
}

.header {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  line-height: 1.2;
}

.image-container {
  position: relative;
  width: 59%;

}

.call-players-text {
  font-family: "Styrene A";
  font-size: 13px;
}

.instruction-text {
  margin-top: auto;
  margin-bottom: 10px;
  text-align: center;
}

.background-loading-image {
  display: block;
  width: 100%;
}

.ball {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ball-line {
  position: absolute;
  width: 13%;
  height: 1px;
  background-color: #F7B23B;
  top: 50%;
  left: 15%;

  &.second {
    top: 63%;
    left: 5%;
  }

  &.third {
    top: 74%;
    left: 11%;
  }
}

// Анимация вращения мяча
@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.rotating {
  animation: spin 2s linear infinite;
}

// --------------------------------------------------------<
// Анимация палок
@keyframes moveBackAndForth {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }
}

.ball-line:nth-child(1),
.ball-line:nth-child(3) {
  animation-delay: 0s;
}

.ball-line:nth-child(2) {
  animation-delay: 0.3s;
}


.moving {
  animation: moveBackAndForth 1s ease-in-out infinite;
}
</style>
