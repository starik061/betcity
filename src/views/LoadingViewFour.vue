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
        <img src="/img/loading-four-cap.png" alt="cap" class="cap">
        <div class="shadow-wrapper"></div>
        <img src="/img/loading-four-gift.png" alt="gift image" class="octopus-img">
        <img src="/img/loading-four-star.png" alt="star image" class="star">
        <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
        <img src="/img/coin-green.png" alt="green coin" class="green-coin">
        <div class="img-text prizes">Призы</div>
        <div class="img-text betcoins">БЕТКОИНЫ</div>
        <img src="/img/lighting.svg" alt="lighting" class="lighting">
        <img src="/img/lighting.svg" alt="lighting" class="lighting second">
      </div>

      <strong class="slogan">Будь первым в рейтинге</strong>
      <p class="text">Копи больше беткоинов и участвуй в рейтинге за подарки</p>
      <RouterLink class="main-btn next-forecast-btn" to="/main-view">
        Сделать первый прогноз
      </RouterLink>

      <div class="next-btn-dots-container visually-hidden">
        <div class="dots">
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
        </div>
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
      if (direction === 'left') {
        this.$router.push("/main-view");
      } else if (direction === 'right') {
        this.$router.push("/loading-three");
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

.next-btn-dots-container {
  position: fixed;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
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

.image-container {
  position: relative;
  width: 65%;

  & img {
    display: block;
  }
}

.background-rectangle {
  width: 100%;
}

.octopus-img {
  position: absolute;
  width: 68%;
  top: 40%;
  left: 63%;
  transform: translate(-50%, -50%);
}

.sean-coin {
  position: absolute;
  width: 12.6%;
  aspect-ratio: 1/1;
  top: 10%;
  left: 14%;
  transform: rotateZ(-10deg) translate(17%, 50%);
}

.green-coin {
  position: absolute;
  width: 8.5%;
  aspect-ratio: 1/1;
  top: 100%;
  left: 52%;
  transform: translate(-50%, -50%);
}

.cap {
  position: absolute;
  width: 52%;
  aspect-ratio: 1/1;
  bottom: 3%;
  left: 6%;
  transform: rotate(-15deg);

}

.img-text {
  position: absolute;
  padding: 2px 6px;
  font-size: 11px;
  line-height: 1.2;
  background-color: var(--color-element-background-2);
  border-radius: 4px;

  &.prizes {
    top: 50%;
    left: 13%;
    transform: translate(-10%, -50%) rotate(-18deg);
  }

  &.betcoins {
    bottom: 13%;
    left: 50%;
    transform: rotate(20deg);
  }
}

.star {
  position: absolute;
  width: 15%;
  bottom: 20%;
  right: 10%;
}

.lighting {
  position: absolute;
  top: 5%;
  right: 25%;
  transform: rotate(1deg);

  &.second {
    top: 38%;
    left: 8%;
    transform: rotate(-45deg);
  }
}

.next-forecast-btn {
  border-radius: 8px;
}

.shadow-wrapper {
  position: absolute;
  top: 30%;
  left: 55%;
  transform: translate(-50%, -50px);
  width: 60%;
  height: 60%;

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
    opacity: 0.15;
  }
}
</style>
