<template>
  <div v-swipe="handleSwipe">
    <div class="main-container flex-container">
      <div class="shadows-container">
        <div class="body-shadow body-shadow-1"></div>
        <div class="body-shadow body-shadow-2"></div>
        <div class="body-shadow body-shadow-3 without-bottom-panel"></div>
      </div>


      <div class="image-container">
        <img src="/img/loading-one-rectangle.png" alt="background rectangle" class="background-rectangle">
        <img src="/img/coin-red.png" alt="red coin" class="red-coin">
        <div class="shadow-wrapper"></div>
        <img src="/img/loading-one-octopus.png" alt="betcity octopus mascot" class="octopus-img">
        <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
        <img src="/img/coin-green.png" alt="green coin" class="green-coin">
        <img src="/img/coin-lightblue.png" alt="lightblue coin" class="lightblue-coin">
        <img src="/img/i-am-pavel.png" alt="octopus greetings" class="pavel">
      </div>

      <strong class="slogan">Рад видеть тебя! <br>Начнем игру?</strong>
      <p class="text">Что тебя ждет в приложении?</p>

    </div>

    <div class="next-btn-dots-container">
      <RouterLink class="next-loading-view" to="/loading-two">
        <span>Далее</span>
        <IconNextBtnArrow />
      </RouterLink>

      <div class="dots">
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import IconNextBtnArrow from '@/components/icons/IconNextBtnArrow.vue';
import { initBackButton } from "@/utils/initBackButton.js";

export default {
  components: { IconNextBtnArrow },

  mounted() {
    initBackButton.call(this);
  },

  methods: {
    handleSwipe(direction) {
      if (direction === "left") {
        this.$router.push("/loading-two");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
}

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

.next-loading-view {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.83;
  padding: 2px 11px;
  color: #232E3C;
  background-color: #D0D0D2;
  border-radius: 15px;
  text-decoration: none;
}

.next-btn-dots-container {
  position: fixed;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
}

.image-container {
  position: relative;
  width: 63%;

  & img {
    display: block;
  }
}

.background-rectangle {
  width: 100%;
}

.octopus-img {
  position: absolute;
  width: 94%;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
}

.sean-coin {
  position: absolute;
  width: 12.6%;
  aspect-ratio: 1/1;
  top: 8%;
  right: 0;
  transform: rotateZ(-15deg) translate(40%, 50%);
}

.green-coin {
  position: absolute;
  width: 8.1%;
  aspect-ratio: 1/1;
  top: 2%;
  left: 14%;
  transform: rotateZ(60deg) translate(30%, 50%);
}

.lightblue-coin {
  position: absolute;
  width: 5.1%;
  aspect-ratio: 1/1;
  top: 55%;
  right: 4%;
  transform: rotateZ(30deg) translate(50%, 50%);
}

.red-coin {
  position: absolute;
  width: 8.13%;
  aspect-ratio: 1/1;
  top: 75%;
  left: 2%;
  transform: rotateZ(-10deg) translate(-50%, -50%);
}

.pavel {
  position: absolute;
  width: 32.5%;
  top: 45%;
  left: 8%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.shadow-wrapper {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50px);
  width: 50%;
  height: 50%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 45%;
    background: linear-gradient(to bottom, #FBE3DD 0%, #FBE3DD 100%);
    filter: blur(15px);
    opacity: 0.2;
  }
}
</style>
