<template>
  <div>
    <div class="user-rating">
      <span class="user-rating-number">4769</span>
      <div class="user-rating-info-container">
        <img :src="avatarImage" class="user-rating-info-img" alt="user avatar">
        <p class="user-rating-info-name">{{ name }}<span class="user-rating-info-you">(вы)</span></p>
      </div>
      <div class="score user-rating-score">
        <div class="score-coin-wrapper">
          <img class="score-coin" src="/img/coin-cean.png" alt="coins">
        </div>
        <span class="score-text">{{ gameUserInfo?.balance || 0 }}</span>
      </div>
    </div>

    <div class="btn-container">
      <label class="rating-btn">
        <input class="visually-hidden" type="radio" name="rating-type" checked>Общий</input>
      </label>
      <label class="rating-btn">
        <input class="visually-hidden" type="radio" name="rating-type">Недельный</input>
      </label>
    </div>

    <div class="rating-list-container">
      <h2 class="rating-list-header">Рейтинг</h2>

      <ul class="rating-list">
        <li class="rating-list-item">
          <span class="rating-list-number">1</span>
          <img src="/img/avatar-placeholder.webp" class="user-rating-info-img rating-list-img" alt="user avatar">
          <span class="rating-list-username">Maxim</span>
          <div class="score user-rating-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">2000</span>
          </div>
        </li>

        <li class="rating-list-item">
          <span class="rating-list-number">2</span>
          <img src="/img/avatar-placeholder.webp" class="user-rating-info-img rating-list-img" alt="user avatar">
          <span class="rating-list-username">Maxim</span>
          <div class="score user-rating-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">2000</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/appStore';
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';

export default {
  components: {},

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
    },

    name() {
      if (this.tgUser) {
        if (this.tgUser?.first_name || this.tgUser?.last_name) {
          let username = this.tgUser.first_name + " " + this.tgUser.last_name;
          // Ограничение строки до 15 символов с использованием slice
          return username.slice(0, 15) + (username.length > 15 ? '...' : '');
        }
      }
      return "Нет данных";
    },
  }
}
</script>

<style lang="scss" scoped>
.user-rating {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  padding: 16px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-element-border)
}

.user-rating-number {
  margin-right: 2.34%;
  padding: 4px 6px;
  font-size: 18px;
  font-weight: bold;
  background-color: var(--color-element-background-2);
  border-radius: 20px;
}

.user-rating-info-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
}

.user-rating-info-name {
  font-size: 14px;
  font-weight: bold;
  flex-grow: 1;
}

.user-rating-info-img {
  flex-grow: 0;
  margin-right: 8px;
}

.user-rating-info-you {
  margin-left: 5.2%;
  font-family: "Roboto";
  font-size: 14px;
  color: var(--color-element-background-2);
  text-transform: lowercase;
}

.btn-container {
  display: flex;
  width: 100%;
  gap: 1.03%;
  margin-bottom: 10px;
}

.rating-btn {
  padding: 8px;
  text-align: center;
  flex-grow: 1;
  flex-basis: 50%;
  border-radius: 8px;
  background-color: var(--color-element-background);
  font-family: "Roboto";
  font-size: 15px;
}
</style>
