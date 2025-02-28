<template>
  <div class="top-panel-container"
    :class="{ 'unusual-platform': this.appStore.platform !== 'ios' && this.appStore.platform !== 'android' }">
    <nav class="top-nav-container">
      <div class="left-side">
        <router-link class="top-nav-link" to="/profile">
          <img class="avatar" :src="avatarImage" />
        </router-link>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">{{ gameUserInfo?.balance || 0 }}</span>
        </div>
      </div>
      <div class="right-side">
        <div class="score notifications">
          <IconNotificationBell />
        </div>
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
import { useAppStore } from "@/stores/appStore";
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';

export default {
  components: { IconNotificationBell, IconGiftArrow },
  data() {
    return {
      appStore: useAppStore(),
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
</style>
