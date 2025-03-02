<template>
  <div :key="resetKey" class="tap-octopus-container" @click="handleClick" ref="octopus">
    <div class="element"></div>
    <div class="tap-shadow"></div>
    <img src="/img/tap-octopus.png" alt="octopus for tap" class="tap-octopus" ref="octopusImg" />
    <p class="tap-text">Жми</p>

    <img src="/img/lighting.svg" alt="lighting" class="lighting" ref="lighting0" />
    <img src="/img/lighting.svg" alt="lighting" class="lighting" ref="lighting1" />
    <img src="/img/lighting.svg" alt="lighting" class="lighting" ref="lighting2" />
    <img src="/img/lighting.svg" alt="lighting" class="lighting" ref="lighting3" />
    <img src="/img/lighting.svg" alt="lighting" class="lighting" ref="lighting4" />


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
import { useAppStore } from "@/stores/appStore";
import {
  claimOctopusTapReward
} from "@/api/index.js";
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      resetKey: 0, // нужен чтоб после скрытия элемента не было багов с прошлыми анимациями на нем, таким образом это как бы новый элемент

      appStore: useAppStore(),

      shakeAnimation: null,
      countdownInterval: null,
      timeRemaining: 8,
      clickCount: 0, // Добавляем переменную для отслеживания кликов
      maxClicks: 15, // Максимальное количество кликов
      timeout: null, // Переменная для хранения таймера, чтобы остановить клики после 8 секунд
      hasMovedToCenter: false, // Флаг, чтобы избежать повторного движения в центр
      gameOver: false,
    };
  },
  mounted() {
    if (this.appStore.octopusTapGameStatus) {
      // Если пользователь не получил награду за тапалку в этот день то запускать осминога
      this.startGameShowing();
    }
  },
  methods: {
    startGameShowing() {
      const delay = Math.random() * 5 + 0; // 5-10 секунд стоит для тестов -исправить потом вторую 5 на 20
      gsap.delayedCall(delay, this.showOctopus);
    },

    resetGame() {
      // Сбрасываем все внутренние переменные в начальное состояние
      this.clickCount = 0;
      this.timeRemaining = 8;
      this.gameOver = false;
      this.hasMovedToCenter = false;

      // Останавливаем все активные анимации
      if (this.shakeAnimation) {
        gsap.killTweensOf(this.$refs.octopus); // Убиваем анимацию осьминога
      }

      // Сбрасываем стили элементов в начальные позиции
      gsap.set(this.$refs.octopus, {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
      });

      gsap.set(this.$refs.octopusImg, {
        scale: 1,
      });

      // Сбрасываем молнии
      for (let i = 0; i < 5; i++) {
        const lightning = this.$refs[`lighting${i}`];
        if (lightning) {
          gsap.set(lightning, { opacity: 0 });
        }
      }

      // Сбрасываем счетчик и его анимации
      gsap.set(this.$refs.counterContainer, {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(this.$refs.range, {
        width: '100%',
      });

      // Очищаем таймеры
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.resetKey++;

      if (!this.appStore.octopusTapGameStatus) {
        this.startGameShowing();
      }

    },

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

    handleClick() {
      if (this.gameOver) return; // Игнорируем клики после окончания игры

      if (!this.hasMovedToCenter) {
        this.moveToCenter();
      } else {
        this.incrementClickCount();
      }
    },

    moveToCenter() {
      this.hasMovedToCenter = true;
      gsap.killTweensOf(this.$refs.octopus);

      const { top, left, width, height } = this.$refs.octopus.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      gsap.to(this.$refs.octopus, {
        x: centerX - (left + width / 2),
        y: centerY - (top + height / 2),
        scale: 1.5,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(this.$refs.counterContainer, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      this.startCountdown();
    },

    incrementClickCount() {
      this.clickCount++;

      gsap.to(this.$refs.octopusImg, {
        scale: 1.7,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });

      // Генерация случайного количества молний от 3 до 5
      const lightningCount = Math.floor(Math.random() * 3) + 3; // Рандом от 3 до 5

      // Появление молний с рандомной задержкой
      for (let i = 0; i < lightningCount; i++) {
        const lightning = this.$refs[`lighting${i}`]; // Получаем молнию по индексу

        // Случайная позиция для молнии
        const randomTop = Math.random() * 50 + 5; // Случайное значение от 5% до 55% для верхней половины экрана
        const randomLeft = Math.random() * 90 + 5; // Случайное значение от 5% до 95% по горизонтали

        // Анимация появления молнии
        gsap.set(lightning, { top: `${randomTop}%`, left: `${randomLeft}%`, opacity: 1 });
        gsap.to(lightning, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          delay: Math.random() * 0.3, // Рандомная задержка перед исчезновением
        });
      }

      if (this.clickCount >= this.maxClicks) {
        this.gameOver = true;
        clearInterval(this.countdownInterval);

        this.appStore.octopusTapGameStatus = true;

        this.successExplosion();  // Запуск феерии успеха
        toast.success("Награда получена!");
        claimOctopusTapReward()
      }
    },


    startCountdown() {
      this.timeRemaining = 8;
      this.clickCount = 0; // Сброс кликов при запуске таймера
      this.timeout = setTimeout(() => {
        this.hideCounterContainer();

        if (this.clickCount < this.maxClicks) {
          toast.error("Вы не успели. Попробуйте еще раз позже.");
          this.hideOctopus();
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


    hideCounterContainer() {
      gsap.to(this.$refs.counterContainer, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out",
      });
    },

    hideOctopus() {
      if (this.clickCount < this.maxClicks) {
        gsap.to(this.$refs.octopus, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            this.$refs.octopus.style.display = "none";
            this.resetGame(); // Сбрасываем игру после скрытия осьминога
          },
        });
      }
    },

    // Метод для феерии при успешном клике
    successExplosion() {
      // Увеличиваем осьминога с эффектом исчезновения
      gsap.to(this.$refs.octopus, {
        scale: 2.5,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          this.$refs.octopus.style.display = "none"; // Прячет осьминога
          this.resetGame(); // Сбрасываем игру после феерии
        }
      });

      // Добавляем искры или вспышки
      gsap.to(this.$refs.octopus, {
        scale: 2,
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
        onStart: () => {
          this.createFireworks();  // Генерация фейерверков
        }
      });
    },

    // Функция для создания эффекта фейерверков
    createFireworks() {
      const fireworksContainer = document.createElement("div");
      fireworksContainer.style.position = "absolute";
      fireworksContainer.style.top = `${this.$refs.octopus.getBoundingClientRect().top}px`;
      fireworksContainer.style.left = `${this.$refs.octopus.getBoundingClientRect().left}px`;
      fireworksContainer.style.pointerEvents = "none";
      document.body.appendChild(fireworksContainer);

      for (let i = 0; i < 20; i++) {
        const spark = document.createElement("div");
        spark.style.position = "absolute";
        spark.style.width = "10px";
        spark.style.height = "10px";
        spark.style.backgroundColor = "white";
        spark.style.borderRadius = "50%";
        spark.style.opacity = 1;
        fireworksContainer.appendChild(spark);

        gsap.fromTo(
          spark,
          { x: 0, y: 0, opacity: 1 },
          {
            x: Math.random() * 200 - 100, // Генерация случайных координат
            y: Math.random() * 200 - 100,
            opacity: 0,
            scale: 0.2,
            duration: 0.8,
            repeat: 0,
            ease: "power2.out",
            delay: Math.random() * 0.3,  // Немного случайности в начале
            onComplete: () => {
              spark.remove();  // Удаляем элемент после анимации
            }
          }
        );
      }

      // Удаление контейнера с фейерверками после завершения анимации
      gsap.delayedCall(1, () => {
        fireworksContainer.remove();
      });
    }
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
  opacity: 0;
  /* Молнии скрыты изначально */
  pointer-events: none;
  /* Блокируем взаимодействие с молниями */
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
