<template>
  <div class="padding-wrapper">
    <div class="shadows-container">
      <div class="body-shadow body-shadow-1"></div>
      <div class="body-shadow body-shadow-2"></div>
      <div class="body-shadow body-shadow-3"></div>
    </div>

    <div class="main-container game-one-container">

      <TapOctopus />

      <TopNavPanel class="top-panel-nav" />

      <ForecastDetails />

      <BottomNavPanel class="bottom-panel-nav" />
    </div>



    <!-- ! Forecast settings modal -->
    <Modal :modalOpened="appStore.modalsState.forecastDetails" @close-modal="closeModal('forecastDetails')">
      <template #modal-content>
        <h2 class="forecast-header forecast-modal-header">Chelsey VS Bayern, 19:40</h2>


        <label class="forecast-modal-card">
          <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
          <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo">
          <p class="forecast-team"> Chelsey</p>
          <div class="forecast-coef">1.60</div>
        </label>


        <p class="forecast-modal-text">Повышенные бонусы за победу</p>

        <div class="forecast-modal-settings-container">
          <div>
            <span>Точный исход</span>
            <span>
              <span>Chelsey</span>
              <span>2</span></span>
            <span>
              <span>Bayern</span>
              <span>0</span>
            </span>
          </div>

          <div>
            <span>Минута первого гола</span>
            <span>2</span>
          </div>
        </div>

        <button class="main-btn main-forecast-btn" type="button">Подтвердить прогноз</button>
      </template>
    </Modal>

    <!-- ! Daily rewards modal -->
    <Modal :modalOpened="appStore.modalsState.dailyReward" @close-modal="closeModal('dailyReward')">
      <template #modal-content>
        <strong class="daily-reward-modal-header">Ежедневная награда</strong>
        <p class="modal-text">Заходи каждый день и получай Беткоин</p>
        <div class="daily-reward-modal-img-container">
          <img src="/img/loading-one-rectangle.png" alt="background rectangle" class="background-rectangle">
          <img src="/img/loading-four-gift.png" alt="gift image" class="octopus-img">
          <img src="/img/loading-four-star.png" alt="star image" class="star">
          <img src="/img/coin-lightblue.png" alt="lightblue coin" class="lightblue-coin">
          <img src="/img/coin-green.png" alt="green coin" class="green-coin">
          <img src="/img/lighting.svg" alt="lighting" class="lighting">
          <img src="/img/lighting.svg" alt="lighting" class="lighting second">

          <p class="days-count-text">12 день входа</p>

          <div class="daily-reward-modal-score">
            <div class="score-coin-wrapper big">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span>+1</span>
          </div>
        </div>
        <button class="main-btn main-forecast-btn" type="button">Продолжить</button>
      </template>
    </Modal>

    <!-- ! Congratulations modal -->
    <Modal :modalOpened="appStore.modalsState.congratulations" @close-modal="closeModal('congratulations')">
      <template #modal-content>
        <strong class="daily-reward-modal-header">Поздравляем!</strong>
        <p class="congrat-modal-text">Твой прогноз выиграл!</p>
        <div class="congrat-modal-img-container">
          <div class="image-container">
            <img src="/img/loading-one-rectangle.png" alt="background rectangle" class="background-rectangle">
            <img src="/img/congrat-modal-cup.png" alt="cup" class="cup">
            <img src="/img/ball.png" alt="ball" class="ball">
            <img src="/img/congrat-star.svg" alt="star image" class="congrat-star">
            <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
            <img src="/img/coin-green.png" alt="green coin" class="green-coin">
            <img src="/img/lighting.svg" alt="lighting" class="lighting">
            <img src="/img/lighting.svg" alt="lighting" class="lighting second">
            <img src="/img/congrat-star-pink.svg" alt="star image" class="congrat-star-pink">
            <img src="/img/congrat-star-pink.svg" alt="star image" class="congrat-star-pink second">
            <img src="/img/congrat-triangle.svg" alt="triangle" class="congrat-triangle">
            <img src="/img/congrat-triangle-2.svg" alt="triangle" class="congrat-triangle second">
            <img src="/img/congrat-confetti-1.svg" alt="confetti" class="congrat-confetti-1">
            <img src="/img/congrat-confetti-2.svg" alt="confetti" class="congrat-confetti-2">
            <img src="/img/congrat-confetti-3.svg" alt="confetti" class="congrat-confetti-3">
            <img src="/img/congrat-stick-1.svg" alt="stick" class="stick">
            <img src="/img/congrat-stick-2.svg" alt="stick" class="stick second">
            <div class="deco-circle"></div>
          </div>
        </div>

        <div class="congrat-modal-forecast-container">
          <div class="congrat-modal-forecast-text-container">
            <p class="congrat-modal-forecast-header">Chelsey VS Bayern, 19:40</p>
            <p class="congrat-modal-forecast-date">прогноз от 01.02.2025</p>
          </div>
          <img class="congrat-modal-team-img" src="/img/game-team-logo.png" alt="">

          <div class="score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">+1</span>
          </div>
        </div>
      </template>
    </Modal>

  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';
import ForecastDetails from "@/components/ForecastDetails.vue";
import TapOctopus from "@/components/TapOctopus.vue";
import Modal from '@/components/Modal.vue';

import { useAppStore } from '@/stores/appStore';// Импортируем хранилище
import { mapActions } from 'pinia';

export default {
  components: { TopNavPanel, BottomNavPanel, ForecastDetails, TapOctopus, Modal },

  data() {
    return {
      appStore: useAppStore(),
    }
  },

  mounted() {
    // setTimeout(() => { this.openModal("dailyReward") }, 1200);
  },

  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal'])
  }
};
</script>

<style lang="scss" scoped>
.shadows-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  min-width: 300px;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 24px;
  pointer-events: none;
}

.game-one-container {
  position: relative;
  overflow: visible;
}

.top-panel-nav {
  margin-bottom: 30px;
}

.forecast-modal-header {
  margin-bottom: 30px;
}

.forecast-modal-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  ;
  padding: 11px 19px;
  border-radius: 8px;
  border: 1px solid var(--color-main-blue);
  margin-bottom: 30px;
}

.forecast-modal-text {
  margin-bottom: 20px;
  text-align: center;
}

.forecast-modal-settings-container {
  margin-bottom: 30px;
}

// Стили модалки ежедневной награды
.daily-reward-modal-header {
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}

.modal-text {
  font-family: "Styrene A";
  font-size: 10px;
  margin-bottom: 0;
  text-align: center;
}

.daily-reward-modal-img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 29px;

}

.daily-reward-modal-img {
  display: inline-block;
  width: 79%;
  height: auto;
}

.days-count-text {
  position: absolute;
  left: 50%;
  bottom: 23%;
  transform: translateX(-50%);
  font-family: "Styrene A";
  font-size: 8px;
}

.daily-reward-modal-score {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 16px 6px 6px;
  position: absolute;
  left: 50%;
  bottom: 4.1%;
  transform: translateX(-50%);
  font-size: 28px;
  background-color: var(--color-element-background-2);
  border-radius: 24px;

  & img {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    flex-grow: 0;
  }
}

.congrat-modal-img-container {
  position: relative;
  width: 72%;
  margin-bottom: 25px;
}


.congrat-modal-forecast-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--color-main-blue);
  border-radius: 12px;
}

.congrat-modal-team-img {
  width: 30px;
  height: 30px;
}

.congrat-modal-forecast-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
}

.congrat-modal-forecast-header {
  font-size: 13px;
}

.congrat-modal-forecast-date {
  font-family: "Styrene A";
  font-size: 11px;
}

.background-rectangle {
  width: 100%;
}

.octopus-img {
  position: absolute;
  width: 85%;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg);
}

.lightblue-coin {
  position: absolute;
  width: 12.6%;
  aspect-ratio: 1/1;
  top: 15%;
  left: 0;
  transform: rotateZ(-10deg) translate(-9%, 0);
}

.green-coin {
  position: absolute;
  width: 8.5%;
  aspect-ratio: 1/1;
  top: 70%;
  left: 84%;
  transform: translate(-50%, -50%) rotateZ(60deg);
}

.star {
  position: absolute;
  width: 12%;
  bottom: 35%;
  left: 21%;
}

.lighting {
  position: absolute;
  top: 5%;
  left: 25%;
  transform: rotate(-45deg);

  &.second {
    top: 25%;
    left: 84%;
    transform: rotate(25deg);
  }
}

.congrat-modal-img-container {
  & .cup {
    position: absolute;
    width: 62%;
    right: -8%;
    top: 15%;
  }

  & .ball {
    position: absolute;
    width: 36%;
    left: 4%;
    bottom: 4%;
  }

  & .sean-coin {
    position: absolute;
    width: 12.6%;
    top: 45%;
    left: 10%;
    transform: rotateZ(-20deg);
  }

  & .congrat-star {
    position: absolute;
    width: 11.4%;
    bottom: 20%;
    left: -1%;
    transform: translate(-50%, -50%);
  }

  & .green-coin {
    position: absolute;
    width: 8.1%;
    top: 82%;
    left: 75%;
    transform: rotateZ(45deg);
  }

  .lighting {
    position: absolute;
    top: 15%;
    left: 25%;
    transform: rotate(-45deg);

    &.second {
      top: 67%;
      left: 88%;
      transform: rotate(25deg);
    }
  }
}

.congrat-star-pink {
  position: absolute;
  width: 10.6%;
  top: 4%;
  right: -15%;
  transform: rotateZ(-10deg);

  &.second {
    width: 4%;
    top: 25%;
    right: 90%;
    transform: rotateZ(-10deg);
  }
}

.congrat-triangle {
  position: absolute;
  width: 7%;
  top: 14%;
  left: -10%;
  transform: rotateZ(5deg);

  &.second {
    width: 5.5%;
    top: 30%;
    left: 108%;
  }
}

.congrat-confetti-1 {
  position: absolute;
  width: 12%;
  top: -12%;
  left: -13%;
}

.congrat-confetti-2 {
  position: absolute;
  width: 8%;
  top: 6%;
  left: 80%;
  transform: rotateZ(-1deg);
}

.congrat-confetti-3 {
  position: absolute;
  width: 12%;
  top: -14%;
  right: -15%;
  transform: rotateZ(-1deg);
}

.stick {
  position: absolute;
  width: 10%;
  bottom: 34%;
  left: 22%;
  transform: rotate(-3deg);

  &.second {
    width: 12%;
    bottom: 7%;
    left: 92%;
    transform: rotate(3deg);
  }
}

.deco-circle {
  position: absolute;
  top: -30%;
  left: -24%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #B766FF;
}

.score-coin-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.score-coin-wrapper::before {
  content: "";
  position: absolute;
  top: 10%;
  left: 2.5px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #56C9D0 0%, #E2E1B8 100%);
  filter: blur(1px);
  opacity: 0.7;
}

.congrat-modal-text {
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
}
</style>
