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

      <ForecastDetails ref="forecastDetails" :key="rerenderKey" />

      <BottomNavPanel class="bottom-panel-nav" />
    </div>



    <!-- ! Forecast settings modal -->
    <Modal v-if="betObject" :modalOpened="appStore.modalsState.forecastDetails"
      @close-modal="closeModal('forecastDetails')">
      <template #modal-content>
        <h2 class="forecast-header forecast-modal-header">{{ betObject.event }}</h2>


        <label class="forecast-modal-card" v-if="betObject.betObject.fact.isActive">
          <input class="visually-hidden" type="radio" name="game-forecast" checked disabled />
          <img v-if="betObject.betObject.fact.key === 'P1' || betObject.betObject.fact.key === 'P2'"
            class="forecast-img" :src="getBetTeamImg(betObject)" alt="team logo">
          <IconForecastDraw v-else class="forecast-img" />
          <p class="forecast-team"> {{ getBetTeamName(betObject) }}</p>
          <div class="forecast-coef">1.60</div>
        </label>

        <p class="forecast-modal-text">Повышенные бонусы за победу</p>

        <div class="forecast-modal-settings-container">
          <div v-if="betObject.betObject.exact.isActive" class="accuracy-forecast-line-wrapper">
            <span class="forecast-type-text">Точный исход</span>
            <span class="flex-centered">
              <span class="team-name">{{ betObject.liveMatch.homeTeam.name }}</span>
              <span class="team-score">{{ betObject.betObject.exact.valueHome }}</span></span>
            <span class="flex-centered">
              <span class="team-name">{{ betObject.liveMatch.awayTeam.name }}</span>
              <span class="team-score">{{ betObject.betObject.exact.valueAway }}</span>
            </span>
          </div>

          <div v-if="betObject.betObject.total.isActive" class="accuracy-forecast-line-wrapper">
            <span v-if="betObject.betObject.total.key === 'Tb'" class="forecast-type-text">Тотал больше 2.5</span>
            <span v-else class="forecast-type-text">Тотал меньше 2.5</span>
          </div>
          <div v-if="betObject.betObject.danger" class="accuracy-forecast-line-wrapper">
            <span class="forecast-type-text">Ставка с риском</span>
          </div>
        </div>

        <button v-if="!betObject.hasBets" class="main-btn main-forecast-btn" type="button"
          @click="handleCreateBetClick">Подтвердить
          прогноз</button>
        <button v-else class="main-btn main-forecast-btn" type="button" @click="handleChangeBetClick">Изменить
          прогноз</button>
      </template>
    </Modal>

    <!-- ! Daily rewards modal -->
    <Modal :modalOpened="appStore.modalsState.dailyReward" @close-modal="handleDailyModalClose">
      <template #modal-content>
        <strong class="daily-reward-modal-header">Ежедневная награда</strong>
        <p class="modal-text">Заходи каждый день и получай Беткоин</p>
        <div class="daily-reward-modal-img-container">
          <img src="/img/loading-one-rectangle.png" alt="background rectangle" class="background-rectangle">
          <div class="shadow-wrapper-everyday-modal"></div>
          <img src="/img/loading-four-gift.png" alt="gift image" class="octopus-img">
          <img src="/img/loading-four-star.png" alt="star image" class="star">
          <img src="/img/coin-lightblue.png" alt="lightblue coin" class="lightblue-coin">
          <img src="/img/coin-green.png" alt="green coin" class="green-coin">
          <img src="/img/lighting.svg" alt="lighting" class="lighting">
          <img src="/img/lighting.svg" alt="lighting" class="lighting second">

          <p class="days-count-text">{{ `${appStore.dailyRewardStatus.streak || 1} день входа` }} </p>

          <div class="daily-reward-modal-score">
            <div class="score-coin-wrapper big">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span>+1</span>
          </div>
        </div>
        <button class="main-btn main-forecast-btn" type="button" @click="handleDailyModalClose">Продолжить</button>
      </template>
    </Modal>

    <!-- ! Congratulations modal -->
    <Modal v-if="showedUnreadBet" :modalOpened="appStore.modalsState.congratulations"
      @close-modal="handleCloseCongratModal(showedUnreadBet.id)">
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
            <p class="congrat-modal-forecast-header">{{ `${showedUnreadBet?.event?.homeTeam?.name} VS
              ${showedUnreadBet?.event?.awayTeam?.name},
              ${formatMatchDate(showedUnreadBet?.event?.date)}` }}</p>
            <p class="congrat-modal-forecast-date">прогноз от {{ formatMatchDay(showedUnreadBet?.bet.date) }}</p>
          </div>
          <img v-if="getTeamLogo(showedUnreadBet) && getTeamLogo(showedUnreadBet) !== 'draw'"
            :src="getTeamLogo(showedUnreadBet)" alt="team logo" class="notification-bet-image">
          <IconForecastDraw v-else class="notification-bet-image" />

          <div class="score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ getBetAmount(showedUnreadBet) }}</span>
          </div>
        </div>
      </template>
    </Modal>


    <!-- ! Three in a row reward modal -->
    <Modal :modalOpened="appStore.modalsState.gameReward" @close-modal="handleGameRewardModalClose">
      <template #modal-content>
        <strong class="daily-reward-modal-header">Вау, награда</strong>
        <p class="modal-text">Играй в "Три в ряд" каждый <br /> день и получай Беткоин</p>
        <div class="daily-reward-modal-img-container game-reward-modal-container">
          <img src="/img/loading-one-rectangle.png" alt="background rectangle" class="background-rectangle">
          <div class="shadow-wrapper-everyday-modal"></div>
          <img src="/img/ball.png" alt="ball" class="ball">
          <img src="/img/loading-four-star.png" alt="star image" class="star">
          <img src="/img/coin-lightblue.png" alt="lightblue coin" class="lightblue-coin">
          <img src="/img/coin-green.png" alt="green coin" class="green-coin">
          <img src="/img/lighting.svg" alt="lighting" class="lighting">
          <img src="/img/lighting.svg" alt="lighting" class="lighting second">

          <p class="days-count-text">{{ `${appStore.gameRewardStatus.streak || 1} день входа` }} </p>

          <div class="daily-reward-modal-score">
            <div class="score-coin-wrapper big">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span>+1</span>
          </div>
        </div>
        <button class="main-btn main-forecast-btn" type="button" @click="handleGameRewardModalClose">Продолжить</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';
import ForecastDetails from "@/components/ForecastDetails.vue";
import IconForecastDraw from "@/components/icons/IconForecastDraw.vue";
import TapOctopus from "@/components/TapOctopus.vue";
import Modal from '@/components/Modal.vue';
import { toast } from 'vue3-toastify';
import { initBackButton } from "@/utils/initBackButton.js";

import { useAppStore } from '@/stores/appStore';// Импортируем хранилище
import { mapActions } from 'pinia';

import {
  claimDailyReward, createBet, updateBet, getRating, getCompletedBetRewards, getMatchesLive,
  getAllBets, markBetAsRead, getUnreadCompletedBets, claimExternalGameReward
} from "@/api/index.js";


export default {
  components: { TopNavPanel, BottomNavPanel, ForecastDetails, TapOctopus, Modal, IconForecastDraw },

  data() {
    return {
      appStore: useAppStore(),
      rerenderKey: 0
    }
  },
  computed: {
    betObject() {
      if (this.appStore && this.appStore.betObject) {
        return this.appStore.betObject;
      }
      return null;
    },

    showedUnreadBet() {
      return this.appStore.showedUnreadBet;
    }
  },
  mounted() {
    initBackButton.call(this);
    if (!this.appStore.dailyRewardStatus.hasClaimed) { setTimeout(() => { this.openModal("dailyReward") }, 500); };
    if (!this.appStore.gameRewardStatus.hasClaimed) { setTimeout(() => { this.openModal("gameReward") }, 1000); };
  },

  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal']),

    async handleDailyModalClose() {
      const reward = await claimDailyReward();
      this.closeModal('dailyReward')
      if (reward) {
        this.appStore.gameUserInfo.balance += reward;
        this.appStore.dailyRewardStatus.hasClaimed = true;
        getRating("top", 100);
        getRating("top-weekly", 100);
        toast.success("Ежедневная награда получена");
      }
    },

    async handleGameRewardModalClose() {
      const reward = await claimExternalGameReward();
      this.closeModal('gameReward')
      if (reward) {
        this.appStore.gameUserInfo.balance += reward;
        this.appStore.gameRewardStatus.hasClaimed = true;
        getRating("top", 100);
        getRating("top-weekly", 100);
        toast.success("Награда за игру получена");
      }
    },

    getBetTeamName(betObject) {
      if (betObject.betObject && betObject.betObject.fact && betObject.betObject.fact.isActive) {
        switch (betObject.betObject.fact.key) {
          case "P1": {
            return betObject.liveMatch.homeTeam.name
            break;
          }

          case "P2": {
            return betObject.liveMatch.awayTeam.name
            break;
          }

          default: {
            return "Ничья";
          }
        }
      }
      return "";
    },

    getTeamLogo(bet) {
      if (!bet || !bet.bet.BetCoefficientKey || !bet.event) return null;

      for (const key of bet.bet.BetCoefficientKey) {

        if (key?.coefficient?.coefficientKey === "P1") {
          return bet.event.homeTeam.logoUrl;
        }
        if (key?.coefficient?.coefficientKey === "P2") {
          return bet.event.awayTeam.logoUrl;
        }
        if (key?.coefficient?.coefficientKey === "X") {
          return "draw";
        }
      }

      return null;
    },

    getBetTeamImg(betObject) {
      if (betObject.betObject && betObject.betObject.fact && betObject.betObject.fact.isActive) {
        switch (betObject.betObject.fact.key) {
          case "P1": {
            return betObject.liveMatch.homeTeam.logoUrl
            break;
          }

          case "P2": {
            return betObject.liveMatch.awayTeam.logoUrl
            break;
          }

          default: {
            return "Ничья";
          }
        }
      }
      return "";
    },

    addBetsToMatches(liveMatches, allBets) {
      liveMatches.forEach(match => {
        // Ищем все ставки, которые соответствуют текущему матчу
        allBets.forEach(bet => {
          if (bet.eventId === match.id) {
            // Если у матча ещё нет свойства `bets`, создаём его
            if (!match.bets) {
              match.bets = [];
            }

            // Добавляем ставку в массив `bets` для этого матча
            match.bets.push(bet);
          }
        });
      });
    },

    async handleCreateBetClick() {
      try {
        this.closeModal('forecastDetails')

        let currentMatchID = this.betObject.betObject.matchID

        let currentBetData = {
          danger: false,
          coefficients: []
        }

        if (this.betObject.betObject.danger) {
          currentBetData.danger = true;
        }

        if (this.betObject.betObject.fact.isActive) {
          currentBetData.coefficients.push({
            key: this.betObject.betObject.fact.key,
            id: this.betObject.liveMatch.results[0].coefficientId
          })
        }

        if (this.betObject.betObject.exact.isActive) {
          currentBetData.coefficients.push({
            // key: this.betObject.betObject.exact.key,
            key: this.betObject.liveMatch.results[2].coefficientId,
            id: this.betObject.liveMatch.results[2].coefficientId,
            value: `${this.betObject.betObject.exact.valueHome}:${this.betObject.betObject.exact.valueAway}`
          })
        }

        if (this.betObject.betObject.total.isActive) {
          currentBetData.coefficients.push({
            key: this.betObject.betObject.total.key,
            id: this.betObject.liveMatch.results[1].coefficientId,
          })
        }


        await createBet(currentMatchID, currentBetData);

        await Promise.allSettled([
          getMatchesLive(),
          getAllBets(),
          getAllBets("active"),
          getAllBets("completed"),
          getCompletedBetRewards()
        ]);

        toast.success("Прогноз успешно подтвержден");
        this.addBetsToMatches(this.appStore.liveMatches, this.appStore.activeBets);
        // this.$refs.forecastDetails.$forceUpdate();
        this.rerenderKey++;
      }
      catch (error) {
        toast.error("Ошибка! Не удалось подтвердить прогноз");
      }
    },

    async handleChangeBetClick() {
      try {
        this.closeModal('forecastDetails')

        let betID = this.betObject.betObject.betID

        let currentBetData = {
          danger: false,
          coefficients: []
        }

        if (this.betObject.betObject.danger) {
          currentBetData.danger = true;
        }

        if (this.betObject.betObject.fact.isActive) {
          currentBetData.coefficients.push({
            key: this.betObject.betObject.fact.key,
            id: this.betObject.liveMatch.results[0].coefficientId
          })
        }

        if (this.betObject.betObject.exact.isActive) {
          currentBetData.coefficients.push({
            // key: this.betObject.betObject.exact.key,
            key: this.betObject.liveMatch.results[2].coefficientId,
            id: this.betObject.liveMatch.results[2].coefficientId,
            value: `${this.betObject.betObject.exact.valueHome}:${this.betObject.betObject.exact.valueAway}`
          })
        }

        if (this.betObject.betObject.total.isActive) {
          currentBetData.coefficients.push({
            key: this.betObject.betObject.total.key,
            id: this.betObject.liveMatch.results[1].coefficientId,
          })
        }

        await updateBet(betID, currentBetData)

        await Promise.allSettled([
          getMatchesLive(),
          getAllBets(),
          getAllBets("active"),
          getAllBets("completed"),
          getCompletedBetRewards()
        ]);

        toast.success("Прогноз успешно изменен");
        this.addBetsToMatches(this.appStore.liveMatches, this.appStore.activeBets);
        // this.$refs.forecastDetails.$forceUpdate();
        this.rerenderKey++;
      }
      catch (error) {
        toast.error("Ошибка! Не удалось изменить прогноз");
      }
    },

    formatMatchDay(isoString) {
      if (!isoString) return "";

      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    },

    formatMatchDate(date) {
      if (!date) return "--:--"; // Если даты нет, возвращаем заглушку

      const matchDate = new Date(date);
      const hours = matchDate.getHours().toString().padStart(2, "0");
      const minutes = matchDate.getMinutes().toString().padStart(2, "0");

      return `${hours}:${minutes}`;
    },

    getBetAmount(bet) {
      if (!bet || (!bet.balanceDelta && bet?.balanceDelta != 0)) { return "-"; }

      if (Number(bet.balanceDelta) > 0) {
        return "+" + bet.balanceDelta
      }

      if (Number(bet.amount) === 0) {
        return bet.balanceDelta
      }

      return "-";
    },

    async handleCloseCongratModal(id) {
      await markBetAsRead(id);
      await getUnreadCompletedBets();
      this.closeModal('congratulations');
    }
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
  text-align: center;
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

.forecast-img {
  width: 60px;
  height: 60px;
}

.forecast-modal-settings-container {
  width: 100%;
  margin-bottom: 30px;
  font-size: 13px;
}

.accuracy-forecast-line-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-element-border);

  &:last-child {
    border-bottom: none;
  }
}

.forecast-type-text {
  margin-right: auto;
}

.team-name {
  font-family: "Styrene A";
  font-size: 10px;
  margin-left: 15px;
  margin-right: 6px;
  line-height: 1;
}

.team-score {
  display: inline-block;
  border-radius: 6px;
  font-size: 12px;
  padding: 2px 8px;
  background-color: var(--color-element-background-2);
}

.flex-centered {
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 10px;
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

.score-coin-wrapper::before.big {
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
  z-index: -1;
}

.congrat-modal-text {
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
}

.shadow-wrapper-everyday-modal {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50px);
  width: 70%;
  height: 70%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 45%;
    background: linear-gradient(to bottom, #00F0FF 0%, #00F0FF 100%);
    filter: blur(35px);
    opacity: 0.15;
  }
}

.notification-bet-image {
  width: 30px;
  height: 30px;
  flex-grow: 0;
  flex-shrink: 0;
}

.game-reward-modal-container {
  position: relative;

  & .ball {
    position: absolute;
    width: 46%;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
  }
}
</style>
