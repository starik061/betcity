<template>
  <div class="tap-octopus-container" @click="triggerAnimation" ref="octopus">
    <div class="element"></div>
    <div class="tap-shadow"></div>
    <img src="/img/tap-octopus.png" alt="octopus for tap" class="tap-octopus" />
    <p class="tap-text">Жми</p>

    <img src="/img/lighting.svg" alt="lighting" class="lighting" />

    <div class="counter-container" ref="counterContainer">
      <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
      <div class="range-container">
        <div class="range" ref="range"></div>
      </div>
      <div class="count">+1</div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      shakeAnimation: null,
      countdownInterval: null,
      timeRemaining: 8,
      clickCount: 0, // Добавляем переменную для отслеживания кликов
      maxClicks: 15, // Максимальное количество кликов
      timeout: null, // Переменная для хранения таймера, чтобы остановить клики после 8 секунд
    };
  },
  mounted() {
    // Запускаем анимацию появления через случайное время от 20 до 25 секунд
    const delay = Math.random() * 5 + 0; // 5-10 секунд стоит для тестов -исправить потом вторую 5 на 20
    gsap.delayedCall(delay, this.showOctopus);
  },
  methods: {
    showOctopus() {
      if (!this.$refs.octopus) return;
      // Генерируем случайные координаты появления осьминога
      const top = Math.random() * 60 + 15;
      const left = Math.random() < 0.5 ? "2%" : "98%";

      gsap.set(this.$refs.octopus, {
        opacity: 0,
        scale: 0,
        top: `${top}vh`,
        left: left,
      });

      gsap.to(this.$refs.octopus, {
        opacity: 1,
        scale: 1.1,
        duration: 1.2,
        ease: "power2.out",
        onComplete: this.startShakeAnimation, // Запуск анимации после завершения появления
      });
    },

    startShakeAnimation() {
      // Добавляем бесконечное движение влево-вправо
      this.shakeAnimation = gsap.to(this.$refs.octopus, {
        x: 7,  // Двигаем осьминога на 7px влево
        duration: 0.6,
        repeat: -1,  // Бесконечно
        yoyo: true,  // Двигается в обе стороны
        ease: "sine.inOut",  // Плавное движение
      });
    },

    triggerAnimation() {
      gsap.killTweensOf(this.$refs.octopus);

      const { top, left, width, height } = this.$refs.octopus.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const tl = gsap.timeline();
      tl.to(this.$refs.octopus, {
        x: centerX - (left + width / 2),
        y: centerY - (top + height / 2),
        scale: 1.5,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(this.$refs.counterContainer, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.4");

      this.startCountdown();
    },

    startCountdown() {
      this.timeRemaining = 8;
      this.clickCount = 0; // Сброс кликов при запуске таймера
      this.timeout = setTimeout(() => {
        if (this.clickCount < this.maxClicks) {
          this.hideCounterContainer();
        }
      }, this.timeRemaining * 1000); // Таймер на 8 секунд

      this.countdownInterval = setInterval(() => {
        if (this.timeRemaining <= 0) {
          clearInterval(this.countdownInterval);
        } else {
          this.timeRemaining--;
        }
        const width = (this.timeRemaining / 8) * 100;
        gsap.to(this.$refs.range, { width: `${width}%`, duration: 1 });
      }, 1000);
    },

    incrementClickCount() {
      this.clickCount++;
      if (this.clickCount >= this.maxClicks) {
        clearTimeout(this.timeout); // Останавливаем таймер, если количество кликов достигло максимума
      }
    },

    hideCounterContainer() {
      gsap.to(this.$refs.counterContainer, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out",
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.tap-octopus-container {
  position: absolute;
  width: 85px;
  height: 85px;
  z-index: 100;
  opacity: 0;
  transform: translate(-50%, -50%);
}

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
  border-radius: 10px;
}

.range {
  width: calc(100% - 0.5px);
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
  line-height: 1;
  background-color: var(--color-element-background-rose);
  border-radius: 12px;
}
</style>
