<template>
  <div>
    <div class="forecast-container">
      <h2 class="forecast-header">Chelsy VS Bayern, 19:40</h2>

      <ul class="forecast-list">
        <li class="forecast-list-item">
          <label class="forecast-choice-btn">
            <div class="forecast-radio-immitator"></div>
            <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
            <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo">
            <p class="forecast-team"> Chelsey</p>
            <div class="forecast-coef">1.60</div>
          </label>
        </li>

        <li class="forecast-list-item">
          <label class="forecast-choice-btn">
            <div class="forecast-radio-immitator"></div>
            <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
            <IconForecastDraw class="forecast-img" />
            <!-- <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo"> -->
            <p class="forecast-team"> Ничья</p>
            <div class="forecast-coef">1.60</div>
          </label>
        </li>

        <li class="forecast-list-item">
          <label class="forecast-choice-btn">
            <div class="forecast-radio-immitator"></div>
            <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
            <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo">
            <p class="forecast-team"> Chelsey2</p>
            <div class="forecast-coef">1.60</div>
          </label>
        </li>
      </ul>

      <button class="main-btn main-forecast-btn" type="button">Подтвердить прогноз</button>

      <!-- !Аккордеон -->
      <div class="accordion">

        <input type="checkbox" name="forecast-accordion" class="visually-hidden" id="forecast-radio1">


        <label for="forecast-radio1" class="accordion-header">
          <IconBoxingGlove :starColor="'#0070F3'" :width="'30'" :height="'30'" />
          <span>Повышенные бонусы за победу</span>
          <svg class="accordion-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
              fill="white" />
          </svg>
        </label>

        <div class="accordion-content">
          <ul class="accordion-content-settings-list">
            <li class="accordion-content-settings-list-item">
              <label class="accordion-content-settings-label">
                <input type="checkbox" class="visually-hidden" name="">
                <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                <span class="accordion-content-settings-text">Точный исход</span>
                <button type="button" class="accordion-settings-btn">
                  <IconAccordionSettingsButton @click="openModal('forecastDetails')" />
                </button>
              </label>
            </li>
            <li class="accordion-content-settings-list-item">
              <label class="accordion-content-settings-label">
                <input type="checkbox" class="visually-hidden" name="">
                <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                <span class="accordion-content-settings-text">Минута <br /> первого гола</span>
                <button type="button" class="accordion-settings-btn">
                  <IconAccordionSettingsButton />
                </button>
              </label>
            </li>
            <li class="accordion-content-settings-list-item">
              <label class="accordion-content-settings-label">
                <input type="checkbox" class="visually-hidden" name="">
                <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                <span class="accordion-content-settings-text">Тотал больше 2.5</span>
              </label>
            </li>
            <li class="accordion-content-settings-list-item">
              <label class="accordion-content-settings-label">
                <input type="checkbox" class="visually-hidden" name="">
                <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                <span class="accordion-content-settings-text">Тотал меньше 2.5</span>
              </label>
            </li>
            <li class="accordion-content-settings-list-item">
              <label class="accordion-content-settings-label">
                <input type="checkbox" class="visually-hidden" name="">
                <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                <span class="accordion-content-settings-text">Ставка с риском</span>
              </label>
            </li>
          </ul>
          <div style="height: 10px;"></div>
        </div>
      </div>
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
          <img class="daily-reward-modal-img" src="/img/daily-modal-img.png" alt="">
          <p class="days-count-text">12 день входа</p>


          <div class="daily-reward-modal-score">
            <img src="/img/coin.png" alt="coins">
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
import IconForecastDraw from '@/components/icons/IconForecastDraw.vue';
import IconBoxingGlove from '@/components/icons/IconBoxingGlove.vue';
import IconAccordionSettingsButton from '@/components/icons/IconAccordionSettingsButton.vue';
import Modal from '@/components/Modal.vue';

import { useAppStore } from '@/stores/appStore';// Импортируем хранилище
import { mapActions } from 'pinia';

export default {
  components: { IconForecastDraw, IconBoxingGlove, IconAccordionSettingsButton, Modal },

  data() {
    return {
      appStore: useAppStore(),
    }
  },

  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal'])
  }
}
</script>

<style lang="scss" scoped>
.forecast-container {
  margin-bottom: 30px;
}

.forecast-header {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: auto;
  text-align: center;
}

.forecast-list {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2.75%;
  margin-bottom: 12px;
}

.forecast-list-item {
  flex-grow: 1;
  flex-shrink: 1;
}

.forecast-choice-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 13% 17.5% 7.5%;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(22, 32, 47, 0) 0%, rgba(85, 92, 103, 1) 50%, rgba(85, 92, 103, 0.6) 100%);

    /* Обрезаем центр, оставляя только градиентную рамку */
    mask:
      linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    mask-composite: destination-out;
    mask-composite: exclude;

    pointer-events: none;
  }
}

.forecast-radio-immitator {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  border: 1px solid var(--color-element-background-2);
}

.forecast-img {
  width: 100%;
  height: 100%;
}

.forecast-team {
  font-family: 'Styrene A', sans-serif;
  font-size: 10px;
}

.forecast-coef {
  width: auto;
  padding: 2px 8px;
  border-radius: 6px;
  background-color: var(--color-element-background-2);
  font-size: 12px;
  font-weight: bold;
}

.main-forecast-btn {
  width: 100%;
  margin-bottom: 12px;
  padding: 12.5px;
}

.accordion {
  padding: 8px 13px;
  border-radius: 8px;
  border: 1px solid var(--color-main-blue);
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 3.33vw;
  font-weight: bold;

  @media screen and (min-width: 450px) {
    font-size: 16px;
  }
}

.accordion-arrow {
  margin-left: auto;

}

.accordion-content {
  max-height: 0;
  font-size: 3.33vw;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(0px);

  @media screen and (min-width: 450px) {
    font-size: 16px;
  }
}

#forecast-radio1:checked~.accordion-content {
  max-height: 128px;
  transform: translateY(10px);
}

// .accordion:has(.accordion-header:hover) .accordion-content {
//   max-height: 100px;
// }

.accordion-content-settings-list {
  display: flex;
  justify-content: flex-start;

  flex-wrap: wrap;
  gap: 14px;
}

.accordion-content-settings-list-item {
  flex-basis: calc(50% - 10px);
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.accordion-content-settings-label {
  position: relative;
  height: 30px;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;
}

.accordion-settings-btn {
  width: 30px;
  height: 30px;
  background-color: transparent !important;
  border: none;
  margin-left: auto;
  padding: 0;
}

.accordion-checkbox-immitator {
  position: static;
  width: 8px;
  height: 8px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 4px;
}

.accordion-content-settings-text {
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: wrap;
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
  bottom: 27%;
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
</style>
