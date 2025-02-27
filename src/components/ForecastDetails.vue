<template>
  <ul class="forecast-container">
    <li v-for="(liveMatch, liveMatchIdx) in liveMatchesList" :key="liveMatch?.id">
      <h2 class="forecast-header">{{ `${liveMatch.homeTeam.name} VS ${liveMatch.awayTeam.name},
        ${formatMatchDate(liveMatch?.date)}` }}</h2>

      <ul class="forecast-list">
        <li class="forecast-list-item">
          <input class="visually-hidden" type="radio" :id="'game-forecast' + liveMatch?.id + 1"
            :name="'game-forecast' + liveMatch?.id" value="P1" @click="toggleForecast(liveMatch?.id, 'P1')"
            :checked="selectedForecast[liveMatch?.id] === 'P1'" />
          <label class="forecast-choice-btn" :for="'game-forecast' + liveMatch?.id + 1">
            <div class="forecast-radio-immitator"></div>
            <img class="forecast-img" :src="liveMatch.homeTeam.logoUrl" alt="hometeam logo">
            <p class="forecast-team"> {{ liveMatch.homeTeam.name }}</p>
            <div class="forecast-coef">{{ this.getTeamCoef(liveMatch?.id, "homeTeam") }}</div>
          </label>
        </li>

        <li class="forecast-list-item">
          <input class="visually-hidden" type="radio" :id="'game-forecast' + liveMatch?.id + 2"
            :name="'game-forecast' + liveMatch?.id" value="X" @click="toggleForecast(liveMatch?.id, 'X')"
            :checked="selectedForecast[liveMatch?.id] === 'X'" />
          <label class="forecast-choice-btn" :for="'game-forecast' + liveMatch?.id + 2">
            <div class="forecast-radio-immitator"></div>
            <IconForecastDraw class="forecast-img" />
            <!-- <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo"> -->
            <p class="forecast-team"> Ничья</p>
            <div class="forecast-coef">{{ this.getTeamCoef(liveMatch?.id) }}</div>
          </label>
        </li>

        <li class="forecast-list-item">
          <input class="visually-hidden" type="radio" :id="'game-forecast' + liveMatch?.id + 3"
            :name="'game-forecast' + liveMatch?.id" value="P2" @click="toggleForecast(liveMatch?.id, 'P2')"
            :checked="selectedForecast[liveMatch?.id] === 'P2'" />
          <label class="forecast-choice-btn" :for="'game-forecast' + liveMatch?.id + 3">
            <div class="forecast-radio-immitator"></div>

            <img class="forecast-img" :src="liveMatch.awayTeam.logoUrl" alt="awayteam logo">
            <p class="forecast-team">{{ liveMatch.awayTeam.name }}</p>
            <div class="forecast-coef">{{ this.getTeamCoef(liveMatch?.id, "awayTeam") }}</div>
          </label>
        </li>
      </ul>

      <button v-if="!hasForecast[liveMatchIdx]" class="main-btn main-forecast-btn" type="button"
        @click="handleCreateBetClick(liveMatch)"> Подтвердить прогноз
      </button>
      <button v-else class="main-btn main-forecast-btn" type="button" @click="handleChangeBetClick(liveMatch)">Изменить
        прогноз</button>
      <!-- !Аккордеон -->
      <div class="accordion">

        <input type="checkbox" name="forecast-accordion" class="forecast-radio visually-hidden"
          :id="'forecast-radio' + liveMatch?.id">


        <label :for="'forecast-radio' + liveMatch?.id" class="accordion-header">
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
                  <IconAccordionSettingsButton @click="openModal('forecastDetails')" />
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
    </li>
  </ul>

</template>

<script>
import IconForecastDraw from '@/components/icons/IconForecastDraw.vue';
import IconBoxingGlove from '@/components/icons/IconBoxingGlove.vue';
import IconAccordionSettingsButton from '@/components/icons/IconAccordionSettingsButton.vue';
import { mapActions } from 'pinia';
import { useAppStore } from '@/stores/appStore';
import { createBet, changeBet } from "@/api/index.js";

export default {
  components: { IconForecastDraw, IconBoxingGlove, IconAccordionSettingsButton },
  data() {
    return {
      appStore: useAppStore(),
      selectedForecast: {}, // Для отслеживания выбранных прогнозов для каждой игры
      hasForecast: [false, true], // временно для демо
    }
  },

  computed: {
    liveMatchesList() {
      if (this.appStore.liveMatches && Array.isArray(this.appStore.liveMatches) && this.appStore.liveMatches.length > 0) {
        return this.appStore.liveMatches;
      }
      return []
    },
  },


  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal']),

    getTeamCoef(eventId, teamType) {
      const liveMatch = this.liveMatchesList.find(match => { return match.id === eventId; });
      if (liveMatch) {
        switch (teamType) {
          case 'homeTeam':
            return liveMatch?.results[0]?.coefficients.P1?.kf || 0;
          case 'awayTeam':
            return liveMatch?.results[0]?.coefficients.P2?.kf || 0;
          default:
            return liveMatch?.results[0]?.coefficients.X?.kf || 0
        }
      }
      return 0;
    },

    formatMatchDate(date) {
      if (!date) return "--:--"; // Если даты нет, возвращаем заглушку

      const matchDate = new Date(date);
      const hours = matchDate.getHours().toString().padStart(2, "0");
      const minutes = matchDate.getMinutes().toString().padStart(2, "0");

      return `${hours}:${minutes}`;
    },

    toggleForecast(matchId, value) {
      // Проверяем, если в данных указано определённое значение, очищаем выбор
      console.log("value", value)
      console.log("this.selectedForecast[matchId]", this.selectedForecast[matchId])
      if (this.selectedForecast[matchId] === value) {
        // Если выбран тот же прогноз, сбрасываем его
        delete this.selectedForecast[matchId];
      } else {
        // Устанавливаем новый прогноз для этого матча
        this.selectedForecast[matchId] = value;
      }
    },

    handleCreateBetClick(liveMatch) {
      createBet(liveMatch.results[0]?.id, "Tb", 155,)
    },

    handleChangeBetClick(liveMatch) {
      changeBet(liveMatch.results[0]?.id, "Tb", 155,)
    }
  }
}



</script>

<style lang="scss" scoped>
.margin-wrapper {
  margin-bottom: 160px;
}

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
  cursor: pointer;

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
  }
}

input:checked+.forecast-choice-btn {
  &::before {
    background: var(--color-main-blue);
  }

  & .forecast-radio-immitator {
    border-color: var(--color-main-blue);
    background-color: var(--color-main-blue);
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
  width: 60px;
  height: 60px;
}

.forecast-team {
  width: 60px;
  height: 20px;
  /* Высота для двух строк */
  overflow: hidden;
  font-family: 'Styrene A', sans-serif;
  font-size: 10px;
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 10px;
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
  margin-bottom: 30px;
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

.forecast-radio:checked~.accordion-content {
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
</style>
