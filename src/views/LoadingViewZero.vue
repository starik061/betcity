<template>
  <div class="main-container flex-container">
    <div class="shadows-container">
      <div class="body-shadow body-shadow-1"></div>
      <div class="body-shadow body-shadow-2"></div>
      <div class="body-shadow body-shadow-3 without-bottom-panel"></div>
    </div>

    <div class="avatar-octopus-container">
      <img src="/img/octopus-pavel.png" alt="octopus pavel - mascot of betcity" class="avatar-img">
    </div>

    <h2 class="header">Прогнозист <br> Павел</h2>

    <div class="image-container">
      <img src="/img/loading-zero-rectangle.png" alt="coins image" class="background-loading-image">
      <img src="/img/coin-cean.png" alt="sean coin" class="sean-coin">
      <img src="/img/coin-green.png" alt="green coin" class="green-coin">
      <img src="/img/coin-lightblue.png" alt="lightblue coin" class="lightblue-coin">

      <div class="ball-line moving "></div>
      <div class="ball-line second moving "></div>
      <div class="ball-line third moving "></div>

      <img src="/img/ball.png" alt="ball" class="ball rotating">
    </div>

    <p class="call-players-text">Зовем игроков на поле</p>

    <strong class="instruction-text">Делай прогнозы, копи баллы, получай подарки и удовольствие от игры</strong>
    <p class="call-players-text">in Telegram</p>
  </div>
</template>

<script>
import { useAppStore } from "@/stores/appStore";
import {
  authUser,
  generateRefLink,
  getMatchesLive,
  getDailyRewardStatus,
  getRating,
  getReferrals,
  octopusTapGameStatusCheck,
  getAllBets,
  getCompletedBetRewards,
  getUnreadCompletedBets,
  getGameRewardStatus
} from "@/api/index.js";

export default {
  components: {},
  data() {
    return {
      appStore: useAppStore(),
    }
  },

  async mounted() {
    this.appStore.init();

    const successAuth = await authUser.call(this);
    if (!successAuth) return
    await getMatchesLive();
    await getAllBets();

    await Promise.allSettled([
      getDailyRewardStatus(),
      generateRefLink(),
      getAllBets("active"),
      getAllBets("completed"),
      getCompletedBetRewards(),
      getRating("top", 100),
      getRating("top-weekly", 100),
      getReferrals(),
      octopusTapGameStatusCheck(),
      getUnreadCompletedBets(),
      getGameRewardStatus()
    ]);

    this.addBetsToMatches(this.appStore.liveMatches, this.appStore.activeBets);

    setTimeout(() => {
      let isFirstEnter = false;
      if (this.appStore?.gameUserInfo?.joinedAt === this.appStore?.gameUserInfo?.lastLogin) {
        isFirstEnter = true;
      }
      if (isFirstEnter) {
        this.$router.push("/loading-one");
      } else {
        this.$router.push("/main-view");
      }
    }, 1);
  },

  methods: {
    addPreloadLink(imageUrl) {
      if (!imageUrl) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = imageUrl;
      link.as = 'image';
      document.head.appendChild(link);
    },

    preloadTeamLogos() {
      // Проверяем наличие данных о матчах
      if (!this.appStore.liveMatches || !Array.isArray(this.appStore.liveMatches)) {
        return;
      }

      // Берем только первые 20 матчей (или меньше, если матчей меньше 20)
      const matchesToPreload = this.appStore.liveMatches.slice(0, 20);

      // Для каждого матча предзагружаем логотипы домашней и гостевой команд
      matchesToPreload.forEach(match => {
        if (match?.homeTeam?.logoUrl) {
          this.addPreloadLink(match.homeTeam.logoUrl);
        }

        if (match?.awayTeam?.logoUrl) {
          this.addPreloadLink(match.awayTeam.logoUrl);
        }
      });
    },

    addBetsToMatches(liveMatches, activeBets) {
      liveMatches.forEach(match => {
        // Ищем все ставки, которые соответствуют текущему матчу
        activeBets.forEach(bet => {
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
  padding-top: 11%;
  padding-bottom: 80px;
}

.avatar-octopus-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.4%;
  flex-shrink: 0;
  flex-grow: 0;
  aspect-ratio: 1/1;
  margin-top: 92px;
  margin-bottom: 14px;
  border-radius: 50%;
  border: 1px solid var(--color-element-border);
  overflow: hidden;
}

.avatar-img {
  width: 80%;
  height: 80%;
}

.header {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  line-height: 1.2;
}

.image-container {
  position: relative;
  width: 70%;
}

.call-players-text {
  margin-bottom: 10px;
  font-family: "Styrene A";
  font-size: 13px;
}

.instruction-text {
  margin-top: auto;
  margin-bottom: 10px;
  text-align: center;
}

.background-loading-image {
  display: block;
  width: 100%;
  margin-bottom: 16px;
}

.ball {
  width: 30%;
  position: absolute;
  top: 55%;
  left: 55%;
  transform: translate(-50%, -50%);
}

.ball-line {
  position: absolute;
  width: 13%;
  height: 2px;
  background-color: #F7B23B;
  top: 42%;
  left: 18%;

  &.second {
    top: 54%;
    left: 8%;
  }

  &.third {
    top: 67%;
    left: 15%;
  }
}

.sean-coin {
  position: absolute;
  width: 12.6%;
  aspect-ratio: 1/1;
  top: 0;
  left: 10%;
  transform: rotateX(20.6deg) translate(-50%, -50%);
}

.green-coin {
  position: absolute;
  width: 8.1%;
  aspect-ratio: 1/1;
  bottom: 16px;
  right: 14%;
  transform: rotateZ(50deg) translate(30%, 50%);
}

.lightblue-coin {
  position: absolute;
  width: 5.1%;
  aspect-ratio: 1/1;
  top: 15%;
  right: 4%;
  transform: rotateZ(30deg) translate(50%, 50%);
}

// Анимация вращения мяча
@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.rotating {
  animation: spin 2s linear infinite;
}

// --------------------------------------------------------<
// Анимация палок
@keyframes moveBackAndForth {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }
}

.ball-line:nth-child(1),
.ball-line:nth-child(3) {
  animation-delay: 0s;
}

.ball-line:nth-child(2) {
  animation-delay: 0.3s;
}


.moving {
  animation: moveBackAndForth 1s ease-in-out infinite;
}
</style>
