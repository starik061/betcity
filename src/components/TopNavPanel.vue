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
        <button class="score notifications" @click="openNotifications">
          <IconNotificationBell />
        </button>
      </div>



      <div class="notifications-modal" :class="{ show: this.isNotificationsOpen }">
        <button type="button" class="close-btn" @click="closeNotifications">
          <IconCloseBtn />
        </button>
        <h2 class="notifications-modal-header">Уведомления</h2>

        <ul class="system-notifications">
          <li class="system-notifications-row">
            <span class="system-notifications-row-text">Вышло обновление</span>
            <span class="system-notifications-row-date">01.02.2025</span>
          </li>

          <li class="system-notifications-row">
            <span class="system-notifications-row-text">Вышло обновление</span>
            <span class="system-notifications-row-date">03.02.2025</span>
          </li>
        </ul>

        <div class="divider"></div>

        <ul class="forecast-notifications">
          <li class="forecast-notifications-row">
            <span class="system-notifications-row-date">матч от 01.02.2025</span>
            <img class="forecast-notifications-img" src="/img/game-team-logo.png" alt="">
            <div class="score">
              <div class="score-coin-wrapper">
                <img class="score-coin" src="/img/coin-cean.png" alt="coins">
              </div>
              <span class="score-text">+1</span>
            </div>
          </li>

          <li class="forecast-notifications-row">
            <span class="system-notifications-row-date">матч от 01.02.2025</span>
            <img class="forecast-notifications-img" src="/img/game-team-logo.png" alt="">
            <div class="score">
              <div class="score-coin-wrapper">
                <img class="score-coin" src="/img/coin-cean.png" alt="coins">
              </div>
              <span class="score-text">+1</span>
            </div>
          </li>

          <li class="forecast-notifications-row">
            <span class="system-notifications-row-date">матч от 01.02.2025</span>
            <img class="forecast-notifications-img" src="/img/game-team-logo.png" alt="">
            <div class="score">
              <div class="score-coin-wrapper">
                <img class="score-coin" src="/img/coin-cean.png" alt="coins">
              </div>
              <span class="score-text">+1</span>
            </div>
          </li>
        </ul>

        <button class="main-btn btn-style notifications-btn" type="button"> Подробнее
        </button>
      </div>




    </nav>

    <div class="gift-element">
      <div class="gift-element-base-content-wrapper">
        <div class="gift-circle-top-container">
          <div class="gift-circle-top"></div>
        </div>

        <div class="shadow-wrapper"></div>
        <div class="gift-circle-top-container image-container">
          <img class="gift-image" src="/img/top-nav-gift.png" alt="gift" width="53px" height="53px">
        </div>

        <span>100 000&#8381 В ПОДАРОК</span>
        <IconGiftArrow />
      </div>
    </div>

  </div>
</template>

<script>
import IconNotificationBell from '@/components/icons/IconNotificationBell.vue';
import IconGiftArrow from '@/components/icons/IconGiftArrow.vue';
import IconCloseBtn from '@/components/icons/IconCloseBtn.vue';
import { useAppStore } from '@/stores/appStore';
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';

export default {
  components: { IconNotificationBell, IconGiftArrow, IconCloseBtn },
  data() {
    return {
      appStore: useAppStore(),
      isNotificationsOpen: false
    }
  },

  computed: {
    tgUser() {
      return this.appStore.initDataUnsafe?.user;
    },

    gameUserInfo() {
      return this.appStore.gameUserInfo;
    },
    avatarImage() {
      if (this.tgUser?.photo_url) {
        return this.tgUser.photo_url;
      }
      return avatarPlaceholder
    }
  },

  methods: {
    openNotifications() {
      this.isNotificationsOpen = true;
    },
    closeNotifications() {
      this.isNotificationsOpen = false;
    },
  }
}

</script>

<style lang="scss" scoped>
.top-panel-container {
  padding-top: calc(var(--tg-content-safe-area-inset-top) + 23px);

  &.unusual-platform {
    padding-top: 43px;
  }
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
</style>
