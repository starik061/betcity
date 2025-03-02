<template>
  <div>
    <div class="user-rating">
      <span class="rating-list-number rating-list-number-self" :class="{ 'rectangular': userRank?.length > 1 }">{{
        userRank }}</span>
      <div class="user-rating-info-container">
        <img :src="avatarImage" class="user-rating-info-img" alt="user avatar">
        <p class="user-rating-info-name">{{ name }}<span class="user-rating-info-you">(вы)</span></p>
      </div>
      <div class="score user-rating-score">
        <div class="score-coin-wrapper">
          <img class="score-coin" src="/img/coin-cean.png" alt="coins">
        </div>
        <span class="score-text">{{ userBalance }}</span>
      </div>
    </div>

    <div class="btn-container">
      <button class="rating-btn btn-style" :class="{ 'active': !activeWeeklyRating }"
        @click="activeWeeklyRating = false">Общий</button>
      <button class="rating-btn btn-style" :class="{ 'active': activeWeeklyRating }"
        @click="activeWeeklyRating = true">Недельный</button>

    </div>

    <div class="rating-list-container">
      <h2 class="rating-list-header">Рейтинг</h2>

      <ul v-if="appStore.globalRating.length > 0 && !activeWeeklyRating" class="rating-list">
        <li class="rating-list-item" v-for="(topRatingItem, topRatingItemIdx) in appStore.globalRating"
          :key="topRatingItem + topRatingItemIdx">
          <span class="rating-list-number" :class="{ 'rectangular': (topRatingItemIdx + 1).toString.length > 1 }">{{
            topRatingItemIdx + 1 }}</span>
          <img :src="topRatingItem?.pic || avatarPlaceholder" class="user-rating-info-img rating-list-img"
            alt="user avatar">
          <span class="rating-list-username">{{ topRatingItem?.name || "-" }}</span>
          <div class="score user-rating-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ topRatingItem?.score || "-" }}</span>
          </div>
        </li>
      </ul>

      <ul v-else-if="appStore.weeklyRating.length > 0 && activeWeeklyRating" class="rating-list">
        <li class="rating-list-item" v-for="(topRatingItem, topRatingItemIdx) in appStore.weeklyRating"
          :key="topRatingItem + topRatingItemIdx">
          <span class="rating-list-number" :class="{ 'rectangular': (topRatingItemIdx + 1).toString.length > 1 }">
            {{ topRatingItemIdx + 1 }}</span>
          <img :src="topRatingItem?.pic || avatarPlaceholder" class="user-rating-info-img rating-list-img"
            alt="user avatar">
          <span class="rating-list-username">{{ topRatingItem?.name || "-" }}</span>
          <div class="score user-rating-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ topRatingItem?.weeklyScore || "-" }}</span>
          </div>
        </li>
      </ul>

      <p v-else class="no-data-text">Данные отсутствуют</p>
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
      activeWeeklyRating: false
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
    name() {
      if (this.gameUserInfo && this.gameUserInfo.name) {
        // Ограничение строки до 17 символов с использованием slice
        return this.gameUserInfo.name.slice(0, 17) + (this.gameUserInfo.name.length > 17 ? '...' : '');
      }
      return "Нет данных";
    },

    userRank() {
      return this.activeWeeklyRating ? (this.gameUserInfo?.weeklyRank.toString() || "-") : (this.gameUserInfo.scoreRank.toString() || "-")
    },
    userBalance() {
      return this.activeWeeklyRating ? (this.gameUserInfo?.weeklyScore?.toString() || "-") : (this.gameUserInfo?.score?.toString() || "-")
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


.rating-list-number-self {
  margin-right: 2.34%;
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
  background-color: var(--color-background);
  font-family: "Roboto";
  font-size: 15px;
  color: var(--color-text-dark);
  transition: all 0.1s ease;

  &.active {
    background-color: var(--color-element-border)
  }

  &:active {
    transform: scale(0.98);
    box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.5);
  }
}

.no-data-text {
  text-align: center;
}
</style>
