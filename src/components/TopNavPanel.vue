<template>
  <div class="top-panel-container"
    :class="{ 'unusual-platform': this.appStore.platform !== 'ios' && this.appStore.platform !== 'android' }">
    <nav class="top-nav-container">
      <div class="left-side">
        <router-link class="top-nav-link" to="/profile">
          <img class="avatar btn-style" :src="avatarImage" />
        </router-link>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">{{ gameUserInfo?.balance || 0 }}</span>
        </div>
      </div>
      <div class="right-side">
        <button class="score notifications" :class="{ 'unread': areForecastNotifications || areSystemNotifications }"
          @click="openNotifications">
          <IconNotificationBell />
        </button>
      </div>

      <div class="notifications-modal" :class="{ show: this.isNotificationsOpen }">
        <button type="button" class="close-btn" @click="closeNotifications">
          <IconCloseBtn />
        </button>
        <h2 class="notifications-modal-header">Уведомления</h2>

        <ul v-if="areSystemNotifications" class="system-notifications">
          <li class="system-notifications-row">
            <span class="system-notifications-row-text">Вышло обновление</span>
            <span class="system-notifications-row-date">01.02.2025</span>
          </li>
        </ul>

        <div v-if="areSystemNotifications" class="divider"></div>

        <ul v-if="areForecastNotifications" class="forecast-notifications">
          <li v-for="(unReadBet, unReadBetIdx) in unreadCompletedBets" class="forecast-notifications-row"
            :key="unReadBet + unReadBetIdx" @click="handleForecastNotificationClick(unReadBet)">
            <span class="system-notifications-row-date">матч от {{ formatMatchDay(unReadBet?.bet.date) }}</span>
            <img v-if="getTeamLogo(unReadBet) && getTeamLogo(unReadBet) !== 'draw'" :src="getTeamLogo(unReadBet)"
              alt="team logo" class="notification-bet-image">
            <IconForecastDraw v-else class="notification-bet-image" />

            <div class="score">
              <div class="score-coin-wrapper">
                <img class="score-coin" src="/img/coin-cean.png" alt="coins">
              </div>
              <span class="score-text">{{ getBetAmount(unReadBet) }}</span>
            </div>
          </li>
        </ul>

        <p v-if="!areForecastNotifications && !areSystemNotifications" class="no-notifications-text">У вас нет
          непрочитанных уведомлений</p>

        <button class="main-btn btn-style notifications-btn" type="button" @click="handleMoreDetailsBtn"> Подробнее
        </button>
      </div>

    </nav>

    <div class="gift-element">
      <div class="gift-element-base-content-wrapper gift-btn-style" @click="openBonusLink">
        <div class="gift-circle-top-container">
          <div class="gift-circle-top"></div>
        </div>

        <div class="shadow-wrapper"></div>
        <div class="gift-circle-top-container image-container">
          <img class="gift-image" src="/img/top-nav-gift.png" alt="gift" width="53px" height="53px">
        </div>

        <span>2 000&#8381 В ПОДАРОК</span>
        <IconGiftArrow />

      </div>
    </div>

  </div>
</template>

<script>
import IconNotificationBell from '@/components/icons/IconNotificationBell.vue';
import IconGiftArrow from '@/components/icons/IconGiftArrow.vue';
import IconForecastDraw from '@/components/icons/IconForecastDraw.vue';
import IconCloseBtn from '@/components/icons/IconCloseBtn.vue';
import { useAppStore } from '@/stores/appStore';
import { mapActions } from 'pinia';
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';

export default {
  components: { IconNotificationBell, IconGiftArrow, IconCloseBtn, IconForecastDraw },
  data() {
    return {
      appStore: useAppStore(),
      isNotificationsOpen: false
    }
  },

  computed: {
    gameUserInfo() {
      return this.appStore.gameUserInfo;
    },
    avatarImage() {
      if (this.gameUserInfo?.pic) {
        return this.gameUserInfo?.pic;
      }
      return avatarPlaceholder
    },

    areSystemNotifications() {
      // Здесь нужно написать условие для показа этого вида уведомлений когда продумается функционал
      return false
    },
    areForecastNotifications() {
      if (this.appStore.unreadCompletedBets && Array.isArray(this.appStore.unreadCompletedBets)) {
        return this.appStore.unreadCompletedBets.length > 0
      }
      return false;
    },
    unreadCompletedBets() {
      if (this.appStore.unreadCompletedBets && Array.isArray(this.appStore.unreadCompletedBets)) {
        return this.appStore.unreadCompletedBets
      }
      return []
    }
  },

  methods: {
    ...mapActions(useAppStore, ['openModal', 'closeModal']),

    openNotifications() {
      this.isNotificationsOpen = true;
    },
    closeNotifications() {
      this.isNotificationsOpen = false;
    },

    handleMoreDetailsBtn() {
      this.$router.push("/profile");
    },

    formatMatchDay(isoString) {
      if (!isoString) return "";

      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
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

    handleForecastNotificationClick(bet) {
      this.appStore.showedUnreadBet = bet;
      this.openModal("congratulations")
    },

    openBonusLink() {
      window.Telegram.WebApp.openLink("https://promote.betcity.ru/2000freebet_reg/?widget_id=freebet2000_bonus2k&refcode=gift_button&icm=1214&utm_source=1214&utm_medium=cpm&utm_campaign=freebet2000_bonus2k_gift_button&utm_content=gift_button_bonus2k");
    }
  }
}

</script>

<style lang="scss" scoped>
.top-panel-container {
  // padding-top: calc(var(--tg-content-safe-area-inset-top) + 23px);
  padding-top: 72px;

  // &.unusual-platform {
  // padding-top: 43px;
  // }
}

.top-nav-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 3px 8px 3px 4px;
  background-color: var(--color-element-background);
  border-radius: 20px;
}

.left-side,
.right-side {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.02vw;
}

.top-nav-link {
  display: flex;
}

.score {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 3px 8px 3px 3px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);

  &.notifications {
    padding: 2px 8px 2px 8px;
    position: relative;

    &::after {
      display: none;
      content: '';
      position: absolute;
      top: 2%;
      left: 78%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background-color: var(--color-element-background-rose);
      border-radius: 50%;
    }
  }

  &.notifications.unread {
    &::after {
      display: block;
    }
  }
}

.score-text {
  font-size: 14px;
  font-weight: bold;
  line-height: auto;
}

.gift-element {
  max-width: 80%;
  margin: 0 auto;
  padding: 7px 22px;
  border: 1px solid var(--color-element-border);
  border-radius: 20px;
  background-color: var(--color-element-background);
  font-size: 14px;
  font-weight: bold;
  line-height: auto;
  text-transform: uppercase;
}

.gift-element-base-content-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.gift-circle-top-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -41px);
  width: 68px;
  /* Половина высоты круга */
  height: 34px;
  overflow: hidden;

  &.image-container {
    height: 68px;
  }
}

.gift-circle-top {
  width: 68px;
  height: 68px;
  background-color: var(--color-element-background);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.gift-image {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 7%);
}

.shadow-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -41px);
  width: 68px;
  /* Половина высоты круга */
  height: 34px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-radius: 45%;
    background: linear-gradient(to bottom, #56C9D0 0%, #E2E1B8 100%);
    filter: blur(15px);
    opacity: 0.7;
    transform: rotate(-30deg);
  }
}

.score-coin {
  z-index: 1;
}

.score-coin-wrapper::before {
  z-index: 0;
}

// Стили для модалки уведомлений
.notifications-modal {
  position: absolute;
  top: 9px;
  right: 0;
  width: 70%;
  min-height: 52px;
  padding: 18px 10px;
  background-color: var(--color-background);
  border-radius: 16px;
  z-index: 9999;

  transform: scale(0.9);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;

  &.show {
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }
}

.close-btn {
  position: absolute;
  margin: 0;
  padding: 0;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  border: 0;
}

.notifications-modal-header {
  font-size: 13px;
  margin-bottom: 26px;
}

.system-notifications-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
}

.system-notifications-row-text {
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.system-notifications-row-date {
  font-family: "Styrene A";
  font-size: 8px;
  ;
}

.divider {
  width: 100%;
  height: 1px;
  margin: 11px 0;
  background-color: var(--color-element-border);
}

.forecast-notifications {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  padding-top: 4px;
}

.forecast-notifications-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid var(--color-main-blue);
  border-radius: 12px;
}

.forecast-notifications-img {
  width: 30px;
  height: 30px;
}

.notifications-btn {
  width: 100%;
  margin-bottom: 0;
}

.no-notifications-text {
  font-size: 11px;
  width: 100%;
  text-align: center;
  padding: 60px 10%;
}

.notification-bet-image {
  width: 30px;
  height: 30px;
  flex-grow: 0;
  flex-shrink: 0;
}


.gift-btn-style:active {
  transition: transform 0.15s ease;
  transform: scale(0.95);
}
</style>
