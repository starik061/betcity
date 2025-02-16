<template>
  <div class="padding-wrapper">
    <div class="main-container game-one-container">
      <img src="/img/tap-octopus.png" class="tap-octopus" alt="octopus for tap">

      <TopNavPanel class="top-panel-nav" />

      <ForecastDetails v-for="(item, index) in 2" :key="index" />

      <BottomNavPanel class="bottom-panel-nav" />
    </div>

    <div class="shadows-container">
      <div class="body-shadow body-shadow-1"></div>
      <div class="body-shadow body-shadow-2"></div>
      <div class="body-shadow body-shadow-3"></div>
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
        <p class="modal-text">Твой прогноз выиграл!</p>
        <div class="congrat-modal-img-container">
          <img class="congrat-modal-img" src="/img/congrat-modal-img.png" alt="">
        </div>

        <div class="congrat-modal-forecast-container">
          <div class="congrat-modal-forecast-text-container">
            <p class="congrat-modal-forecast-header">Chelsey VS Bayern, 19:40</p>
            <p class="congrat-modal-forecast-date">прогноз от 01.02.2025</p>
          </div>
          <img class="congrat-modal-team-img" src="/img/game-team-logo.png" alt="">

          <div class="score">
            <img class="score-coin" src="/img/coin.png" alt="coins">
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
import Modal from '@/components/Modal.vue';

import { useAppStore } from '@/stores/appStore';// Импортируем хранилище
import { mapActions } from 'pinia';

export default {
  components: { TopNavPanel, BottomNavPanel, ForecastDetails, Modal },

  data() {
    return {
      appStore: useAppStore(),
    }
  },

  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal'])
  }
};
</script>

<style lang="scss" scoped>
.padding-wrapper {
  padding-bottom: 160px;
}

.shadows-container {
  position: fixed;
  top: 0;
  left: 0;
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
  padding-top: 48px;
  overflow: visible;
}

.tap-octopus {
  position: absolute;
  top: 55vh;
  right: -20%;
  width: 22.5%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.top-panel-nav {
  margin-bottom: 30px;
}

.bottom-panel-nav {
  position: fixed;
  max-width: 450px;
  left: 50%;
  bottom: 60px;
  transform: translate(-50%, 0);
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
  width: 100%;
  height: 314px;
}

.congrat-modal-img {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  transform: scale(1.10);
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
  font-size: 8px;
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
</style>
