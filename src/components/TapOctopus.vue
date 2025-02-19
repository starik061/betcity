<template>
  <div class="tap-octopus-container" :class="{ active: isActive }" @click="handleClick">
    <!-- <div class="content-wrapper"></div>
    <img src="/img/tap-octopus.png" alt="octopus for tap" class="tap-octopus" />
    <div class="tap-shadow tap-shadow-1"></div>
    <div class="tap-shadow tap-shadow-2"></div> -->

    <div class="element">
    </div>
    <div class="tap-shadow"></div>
    <img src="/img/tap-octopus.png" alt="octopus for tap" class="tap-octopus" :class="{ active: isOctopusActive }" />
    <p class="tap-text">Жми</p>


    <transition name="lighting">
      <img v-if="isLightingVisible" src="/img/lighting.svg" alt="lighting" class="lighting"
        :style="{ top: lightingPosition.top, left: lightingPosition.left }" />
    </transition>

    <div class="counter-container">
      <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
      <div class="range-container">
        <div class="range"></div>
      </div>

      <div class="count">+1</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isOctopusActive: false,
      isLightingVisible: false, // Показывает молнию
      lightingPosition: { top: "5%", left: "25%" }, // Начальная позиция молнии
      timer: null,
      octopusTimer: null,
      lightingTimer: null, // Отдельный таймер для скрытия молнии
    };
  },
  methods: {
    handleClick() {
      console.log("click");
      this.isActive = true;
      this.isOctopusActive = true;

      // Сбрасываем анимацию осьминога
      if (this.octopusTimer) {
        clearTimeout(this.octopusTimer);
      }
      this.octopusTimer = setTimeout(() => {
        this.isOctopusActive = false;
      }, 80);

      // Показать молнию в случайной позиции
      this.isLightingVisible = true;
      this.lightingPosition = {
        top: `${Math.random() * 40 + 5}%`, // Случайная позиция от 5% до 45%
        left: `${Math.random() * 40 + 10}%` // Случайная позиция от 10% до 50%
      };

      if (this.lightingTimer) {
        clearTimeout(this.lightingTimer);
      }
      this.lightingTimer = setTimeout(() => {
        this.isLightingVisible = false;
      }, 150); // Молния исчезает через 150 мс

      // Сбрасываем масштабирование через 2 секунды
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.isActive = false;
        this.timer = null;
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
.tap-octopus-container {
  position: fixed;
  width: 85px;
  height: 85px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  // clip-path: circle(50% at center);
  transition: transform 0.25s ease-out;
  /* Плавный переход */
  /* Начальное масштабирование */
  transform: scale(1);
  z-index: 100;
}

// .content-wrapper {
//   position: relative;
// }

.tap-octopus {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 72%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -52%) scale(1);

  pointer-events: auto;
  clip-path: circle(50% at center);
  z-index: 102;

  transition: transform 0.1s ease-out;
}

.tap-shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 124%;
  aspect-ratio: 1 / 1;
  border-radius: 45%;
  background-color: #E51C44;
  z-index: 101;

  background: linear-gradient(to bottom, #E51C44 0%, #00F0FF 100%);
  filter: blur(10px);
  opacity: 0.4;
  transform: translate(-50%, -50%) rotateZ(-30deg);

}


// .circle {
//   width: 80px;
//   height: 80px;
//   background-color: red;
//   background: linear-gradient(to bottom, #E51C44 0%, #00F0FF 100%);
//   mask-image: linear-gradient(white, white), linear-gradient(to bottom, #E51C44 0%, #00F0FF 100%);
//   mask-composite: exclude;
//   padding: 5px;
// }

.element {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  pointer-events: auto;
  transform: rotateZ(-30deg);
}

.element::before {
  content: "";
  position: absolute;
  top: -1.76%;
  left: -1.76%;
  right: -1.76%;
  bottom: -1.76%;
  background: linear-gradient(to bottom, #E51C44 0%, #00F0FF 100%);
  border-radius: inherit;
  z-index: -1;
}

.element::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(3, 47, 73);
  opacity: 0.96;
  /* Цвет фона внутри элемента */
  border-radius: inherit;
  z-index: 0;
}

.tap-text {
  position: absolute;
  top: 88.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
  font-weight: normal;
  pointer-events: none;
}

.lighting {
  position: absolute;
  top: 5%;
  right: 25%;
  transform: rotate(1deg);
  z-index: 103;
}

.counter-container {
  position: absolute;
  bottom: -22%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transform: translate(-50%, 0) scale(0.82);
  padding: 3px 8px 3px 3px;
  background-color: #fff;
  border-radius: 12px;
  opacity: 0;
  z-index: 120;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.sean-coin {
  width: 17px;
  height: 17px;
}

.range-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  height: 10px;
  padding: 0.5px;
  border: 1px solid rgba(22, 32, 47, 0.2);
  ;
  border-radius: 10px;
}

.range {
  width: 60%;
  height: calc(100% - 1px);
  background-color: #F7B23B;
  border-radius: 10px;
}

.count {
  position: absolute;
  right: -30%;
  top: -60%;
  padding: 3px 8px;
  font-size: 14px;
  background-color: var(--color-element-background-rose);
  border-radius: 12px;
  ;
}


// Стили для активного состояния

.tap-octopus-container.active {
  /* Масштабирование до 1.5 */
  transform: scale(1.5);

  & .tap-octopus.active {
    transform: translate(-50%, -52%) scale(1.1);
  }

  & .counter-container {
    transform: translate(-50%, 0) scale(0.82);
    opacity: 1;
  }
}

/* Transition для элемента lighting */
.lighting-enter-active,
.lighting-leave-active {
  transition: transform 0.5s ease-out, opacity 0.15s ease-out;
}

.lighting-enter {
  transform: scale(0.5);
  opacity: 0;
}

.lighting-enter-to {
  transform: scale(1);
  opacity: 1;
}

.lighting-leave {
  transform: scale(1);
  opacity: 1;
}

.lighting-leave-to {
  transform: scale(1.2);
  opacity: 0;
}
</style>
