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
        <img src="/img/loading-three-content-img.png" alt="betcity prize image" class="octopus-img">
        <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
        <img src="/img/coin-green.png" alt="green coin" class="green-coin">
        <div class="img-text double">Удвоить</div>
        <div class="img-text win">Выиграет</div>
        <div class="img-text score">1:1
        </div>
        <img src="/img/ball.png" alt="ball" class="ball">
        <img src="/img/lighting.svg" alt="lighting" class="lighting">
        <img src="/img/lighting.svg" alt="lighting" class="lighting second">
      </div>

      <strong class="slogan">Делай прогнозы и получай Беткоины</strong>
      <p class="text">За угаданные исходы матчей</p>
    </div>

    <div class="next-btn-dots-container">
      <RouterLink class="next-loading-view" to="/loading-four">
        <span>Далее</span>
        <IconNextBtnArrow />
      </RouterLink>

      <div class="dots">
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import IconNextBtnArrow from '@/components/icons/IconNextBtnArrow.vue';
export default {
  components: { IconNextBtnArrow },

  methods: {
    handleSwipe(direction) {
      if (direction === 'left') {
        this.$router.push("/loading-four");
      } else if (direction === 'right') {
        this.$router.push("/loading-two");
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
  width: 68%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sean-coin {
  position: absolute;
  width: 12.6%;
  aspect-ratio: 1/1;
  top: 65%;
  right: 0;
  transform: rotateZ(-10deg) translate(17%, 50%);
}

.green-coin {
  position: absolute;
  width: 8.1%;
  aspect-ratio: 1/1;
  top: 60%;
  left: 0;
  transform: rotateZ(60deg) translate(-120%, -30%);
}

.red-coin {
  position: absolute;
  width: 8.13%;
  aspect-ratio: 1/1;
  top: 0;
  right: 15%;
  transform: translate(-50%, -50%);
}

.img-text {
  position: absolute;
  padding: 2px 6px;
  font-size: 11px;
  line-height: 1.2;
  background-color: var(--color-element-background-2);
  border-radius: 4px;

  &.double {
    top: 42%;
    left: 0;
    transform: translate(-10%, -50%) rotate(-18deg);
  }

  &.win {
    top: 88%;
    right: 0;
    transform: translate(-20%, -50%) rotate(18deg);
  }

  &.score {
    top: 10%;
    left: 30%;
    transform: rotate(-18deg);
  }
}

.ball {
  width: 30%;
  position: absolute;
  bottom: 5%;
  left: -10%;
}

.lighting {
  position: absolute;
  top: 10%;
  left: 5%;
  transform: rotate(1deg);

  &.second {
    top: 12%;
    left: 100%;
    transform: rotate(30deg) translate(-50%, 40%);
  }
}
</style>
