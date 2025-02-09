<template>
  <div class="user-rating">
    <span class="user-rating-number">4769</span>
    <div class="user-rating-info-container">
      <img src="/img/avatar-placeholder.webp" class="user-rating-info-img" alt="user avatar">
      <p class="user-rating-info-name">Mihail<span class="user-rating-info-you">(вы)</span></p>
    </div>
    <div class="score user-rating-score">
      <img class="score-coin" src="/img/coin.png" alt="coins">
      <span class="score-text">200</span>
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
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">2000</span>
        </div>
      </li>

      <li class="rating-list-item">
        <span class="rating-list-number">2</span>
        <img src="/img/avatar-placeholder.webp" class="user-rating-info-img rating-list-img" alt="user avatar">
        <span class="rating-list-username">Maxim</span>
        <div class="score user-rating-score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">2000</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import IconGiftArrow from '@/components/icons/IconGiftArrow.vue';


export default {
  components: {},

}
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 3px 8px 3px 3px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);

  &.user-rating-score {
    margin-left: auto;
  }
}

.score-coin {
  width: 17px;
  height: 17px;
}

.score-text {
  font-size: 14px;
  font-weight: bold;
  line-height: auto;

  & .games-count {
    font-size: 12px;
  }
}

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
  justify-content: center;
  align-items: center;
}

.user-rating-info-img {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 8.7%;
  border-radius: 50%;
  overflow: hidden;
}

.user-rating-info-name {
  font-size: 14px;
  font-weight: bold;

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

.rating-list-container {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--color-element-border);
  padding: 16px;
}

.rating-list-header {
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}

.rating-list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.63%;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-element-border);
}

.rating-list-number {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50%;
  background-color: var(--color-element-background-2);
}

.rating-list-img {
  margin-right: 0;
}
</style>
