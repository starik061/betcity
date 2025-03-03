<template>
  <ul v-if="betsDetails?.length > 0" class="forecast-container">
    <li v-for="(betDetail, betDetailIdx) in betsDetails" :key="betDetail.matchID">
      <h2 class="forecast-header">{{ `${liveMatches[betDetailIdx].homeTeam.name} VS
        ${liveMatches[betDetailIdx].awayTeam.name},
        ${formatMatchDate(liveMatches[betDetailIdx]?.date)}` }}</h2>

      <ul class="forecast-list">
        <li class="forecast-list-item">
          <input class="visually-hidden" type="radio" :id="'game-forecast' + betDetailIdx + 1"
            :name="'game-forecast' + betDetailIdx" value="P1" :checked="betDetail.fact.key === 'P1'"
            @click="toggleFact($event, betDetailIdx)" />
          <label class="forecast-choice-btn" :for="'game-forecast' + betDetailIdx + 1">
            <div class="forecast-radio-immitator"></div>
            <img class="forecast-img" :src="liveMatches[betDetailIdx].homeTeam.logoUrl" alt="hometeam logo">
            <p class="forecast-team"> {{ liveMatches[betDetailIdx].homeTeam.name }}</p>
            <div class="forecast-coef">{{ this.getTeamCoef(betDetail.matchID, "homeTeam") }}</div>
          </label>
        </li>

        <li class="forecast-list-item">
          <input class="visually-hidden" type="radio" :id="'game-forecast' + betDetailIdx + 2"
            :name="'game-forecast' + betDetailIdx" value="X" :checked="betDetail.fact.key === 'X'"
            @click="toggleFact($event, betDetailIdx)" />
          <label class="forecast-choice-btn" :for="'game-forecast' + betDetailIdx + 2">
            <div class="forecast-radio-immitator"></div>
            <IconForecastDraw class="forecast-img" />
            <!-- <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo"> -->
            <p class="forecast-team"> Ничья</p>
            <div class="forecast-coef">{{ this.getTeamCoef(betDetail.matchID) }}</div>
          </label>
        </li>

        <li class="forecast-list-item">
          <input class="visually-hidden" type="radio" :id="'game-forecast' + betDetailIdx + 3"
            :name="'game-forecast' + betDetailIdx" value="P2" :checked="betDetail.fact.key === 'P2'"
            @click="toggleFact($event, betDetailIdx)" />
          <label class="forecast-choice-btn" :for="'game-forecast' + betDetailIdx + 3">
            <div class="forecast-radio-immitator"></div>

            <img class="forecast-img" :src="liveMatches[betDetailIdx].awayTeam.logoUrl" alt="awayteam logo">
            <p class="forecast-team">{{ liveMatches[betDetailIdx].awayTeam.name }}</p>
            <div class="forecast-coef">{{ this.getTeamCoef(betDetail.matchID, "awayTeam") }}</div>
          </label>
        </li>
      </ul>

      <button class="main-btn main-forecast-btn"
        :disabled="!betDetail.fact.isActive && !betDetail.exact.isActive && !betDetail.total.isActive" type="button"
        @click="handleApproveForecastBtnClick(betDetail, betDetailIdx)">
        Подтвердить
        прогноз
      </button>
      <!-- <button v-else class="main-btn main-forecast-btn" type="button"
        @click="handleChangeBetClick(liveMatchIdx)">Изменить
        прогноз</button> -->

      <!-- !Аккордеон -->
      <div class="accordion-forecast-amount-wrapper">
        <div class="forecasts-amount-indicator">1</div>
        <div class="accordion">
          <input type="checkbox" name="forecast-accordion" class="forecast-radio visually-hidden"
            :id="'forecast-radio' + betDetail.matchID">

          <label :for="'forecast-radio' + betDetail.matchID" class="accordion-header">
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
                <input type="checkbox" class="visually-hidden" :id="'exact-checkbox' + betDetailIdx"
                  v-model="betsDetails[betDetailIdx].exact.isActive">
                <label class="accordion-content-settings-label" :for="'exact-checkbox' + betDetailIdx">
                  <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                  <span class="accordion-content-settings-text">Точный исход</span>
                </label>

                <div class="exact-score-container" :class="{ 'disabled': !betDetail.exact.isActive }">
                  <p class="team-name">{{ liveMatches[betDetailIdx].homeTeam.name }}</p>
                  <input type="number" placeholder="0" v-model.number="betDetail.exact.valueHome"
                    @input="handleScoreInput($event, 'valueHome', betDetailIdx)" :disabled="!betDetail.exact.isActive">
                </div>

                <div class="exact-score-container" :class="{ 'disabled': !betDetail.exact.isActive }">
                  <p class="team-name">{{ liveMatches[betDetailIdx].awayTeam.name }}</p>
                  <input type="number" placeholder="0" v-model.number="betDetail.exact.valueAway"
                    @input="handleScoreInput($event, 'valueAway', betDetailIdx)" :disabled="!betDetail.exact.isActive">
                </div>
              </li>

              <li class="accordion-content-settings-list-item">
                <input type="checkbox" class="visually-hidden" :id="'total-checkbox' + betDetailIdx + 1" value="Tb"
                  :checked="betDetail.total.key === 'Tb'" @click="toggleTotal($event, betDetailIdx)">
                <label class="accordion-content-settings-label"
                  :class="{ 'no-active': betDetail.total.key !== 'Tb' && betDetail.total.key !== '' }"
                  :for="'total-checkbox' + betDetailIdx + 1">
                  <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                  <span class="accordion-content-settings-text">Тотал больше</span>
                </label>

                <input type="checkbox" class="visually-hidden" :id="'total-checkbox' + betDetailIdx + 2" value="Tm"
                  :checked="betDetail.total.key === 'Tm'" @click="toggleTotal($event, betDetailIdx)">
                <label class="accordion-content-settings-label"
                  :class="{ 'no-active': betDetail.total.key !== 'Tm' && betDetail.total.key !== '' }"
                  :for="'total-checkbox' + betDetailIdx + 2">
                  <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                  <span class="accordion-content-settings-text">Тотал меньше</span>
                </label>
              </li>

              <li class="accordion-content-settings-list-item">
                <input type="checkbox" class="visually-hidden danger-checkbox" :id="'danger-checkbox' + betDetailIdx"
                  v-model="betDetail.danger" :checked="betDetail.danger === true">
                <label class="accordion-content-settings-label" :for="'danger-checkbox' + betDetailIdx">
                  <div class="forecast-radio-immitator accordion-checkbox-immitator"></div>
                  <span class="accordion-content-settings-text">Ставка с риском</span>
                </label>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </li>
  </ul>
  <p v-else class="no-matches-text">Доступные для прогнозов матчи отсутствуют.</p>
</template>

<script>
import IconForecastDraw from '@/components/icons/IconForecastDraw.vue';
import IconBoxingGlove from '@/components/icons/IconBoxingGlove.vue';
import IconAccordionSettingsButton from '@/components/icons/IconAccordionSettingsButton.vue';
import { mapActions } from 'pinia';
import { useAppStore } from '@/stores/appStore';


export default {
  components: { IconForecastDraw, IconBoxingGlove, IconAccordionSettingsButton },
  data() {
    return {
      appStore: useAppStore(),
      selectedForecast: {}, // Для отслеживания выбранных прогнозов для каждой игры
      betsDetails: [], // массив для привязки полей аккордеона к переменным
    }
  },

  mounted() {
    if (this.appStore.liveMatches && Array.isArray(this.appStore.liveMatches) && this.appStore.liveMatches.length > 0) {
      this.appStore.liveMatches.map((liveMatch) => this.betsDetails.push({
        matchID: liveMatch.id,
        fact: {
          isActive: false,
          key: "",
        },
        total: {
          isActive: false,
          key: "",
        },
        exact: {
          isActive: false,
          key: "",
          valueHome: 0,
          valueAway: 0,
        },
        danger: false
      }))
    }
  },

  computed: {
    liveMatches() {
      if (this.appStore.liveMatches && Array.isArray(this.appStore.liveMatches)) {
        return this.appStore.liveMatches;
      }
      return []
    },
  },


  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal']),

    getTeamCoef(eventId, teamType) {
      const liveMatch = this.liveMatches.find(match => { return match.id === eventId; });
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

    toggleFact(event, index) {
      if (this.betsDetails[index].fact.key === event.target.value) {
        this.betsDetails[index].fact.isActive = false;
        this.betsDetails[index].fact.key = "";
      }
      else {
        this.betsDetails[index].fact.isActive = true;
        this.betsDetails[index].fact.key = event.target.value;
      }
    },

    toggleTotal(event, index) {
      if (this.betsDetails[index].total.key === event.target.value) {
        this.betsDetails[index].total.isActive = false;
        this.betsDetails[index].total.key = "";
      }
      else {
        this.betsDetails[index].total.isActive = true;
        this.betsDetails[index].total.key = event.target.value;
      }
    },

    handleScoreInput(event, team, index) {
      console.log(event.target.value);
      let value = parseInt(event.target.value, 10);

      if (isNaN(value)) value = 0;
      if (value < 0) value = 0;
      if (value > 1000) value = 1000;

      this.betsDetails[index].exact[team] = value;
    },

    handleApproveForecastBtnClick(betObject, index) {
      this.appStore.betObject = {
        betObject: betObject,

        event: `${this.liveMatches[index].homeTeam.name} VS
        ${this.liveMatches[index].awayTeam.name},
        ${this.formatMatchDate(this.liveMatches[index]?.date)}`,

        liveMatch: this.liveMatches[index]
      }

      this.openModal("forecastDetails");
    },


    handleCreateBetClick(liveMatchIdx) {
      this.appStore.currentBetData = this.liveMatchesWithBets[liveMatchIdx].bets;
      this.openModal("forecastDetails")

      // this.currentBetData.matchId = liveMatch.id
      // this.currentBetData.coefficients = [{
      //   key: "X",
      //   id: liveMatch.results[0].coefficientId,
      //   danger: false
      // }]
      // console.log(this.currentBetData.matchId)
      // console.log(this.currentBetData.coefficients)
      // createBet(this.currentBetData.matchId, this.currentBetData.coefficients)
    },

    handleChangeBetClick(liveMatchIdx) {
      this.appStore.currentBetData = this.liveMatchesWithBets[liveMatchIdx].bets;
      this.openModal("forecastDetails")
      // changeBet(liveMatch.results[0]?.id, "Tb", 155,)
    },

    hasBets(liveMatch) {
      if (liveMatch.bets && Array.isArray(liveMatch.bets) && liveMatch.bets.length > 0) {
        return true;
      }
      return false;
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

input:checked+label .accordion-checkbox-immitator {
  border-color: var(--color-main-blue);
  background-color: var(--color-main-blue);
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

.main-forecast-btn:disabled {
  background: var(--color-background);
  color: var(--color-element-border);
  outline: 1px solid var(--color-element-border);
}

.accordion-forecast-amount-wrapper {
  position: relative;
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

.forecasts-amount-indicator {
  position: absolute;
  top: -9px;
  left: 7px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-element-background-rose);
  color: var(--color-text);
  font-size: 8px;
  border-radius: 3px;
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
  max-height: 202px;
  transform: translateY(10px);
}

.accordion-content-settings-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 3.33vw;

  @media screen and (min-width: 450px) {
    font-size: 16px;
  }
}

.accordion-content-settings-list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--color-element-border);

  &:last-child {
    border-bottom: none;

  }
}

.accordion-content-settings-label {
  position: relative;
  height: 44px;
  width: 50%;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;

  &.no-active {
    color: var(--color-element-border);

  }
}

.exact-score-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  gap: 2px;
  font-family: "Styrene A";
  font-size: 10px;
  color: var(--color-text);
  line-height: 12px;
  margin-right: 4px;
  margin-bottom: 14px;

  &.disabled {
    color: var(--color-element-border);

    & input[type="number"] {
      color: var(--color-element-border);
    }
  }


  &:last-child {
    margin-right: 0;
  }

  & input[type="number"] {
    width: 100%;
    border: 1px solid var(--color-element-border);
    background-color: transparent;
    border-radius: 8px;
    padding: 8px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--color-text);
  }
}

.team-name {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.accordion-checkbox-immitator {
  position: static;
  width: 8px;
  height: 8px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 5px;
}

.accordion-content-settings-text {
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: wrap;
  line-height: 1;
}

.no-matches-text {
  margin-top: 60px;
  font-size: 13px;
  text-align: center;
}
</style>
