<template>
  <div>
    <h2 class="friends-header">Приглашай друзей и продлевай игру</h2>
    <p class="friends-text">За каждого нового друга <b>+1 ход обоим</b></p>

    <div class="ref-link-container">
      <img class="friends-content-image" src="/img/ref-image.png" alt="octopus image">

      <div class="ref-link-input-container">
        <input class="ref-link-input" type="text" name="" value="https://www.figma.com">
        <button type="button" class="copy-btn">
          <IconCopyBtn />
        </button>
      </div>
    </div>

    <div class="rating-list-container">
      <h2 class="rating-list-header">Статистика друзей</h2>

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
          <span class="rating-list-number rectangular">1248</span>
          <img src="/img/avatar-placeholder.webp" class="user-rating-info-img rating-list-img" alt="user avatar">
          <span class="rating-list-username">Rina</span>
          <div class="score user-rating-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">20000</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconCopyBtn from '@/components/icons/IconCopyBtn.vue';

export default {
  components: { IconCopyBtn },
}
</script>

<style lang="scss" scoped>
.friends-header {
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.friends-text {
  margin-bottom: 26px;
  font-family: "Styrene A";
  text-align: center;
  font-size: 14px;

  & b {
    text-transform: uppercase;
  }
}

.ref-link-container {
  width: 100%;
  margin-bottom: 19px;
  border: 1px solid var(--color-element-border);
  border-radius: 8px;
}

.friends-content-image {
  display: block;
  width: 100%;
  transform: scale(1.05) translateY(-15px);
}
</style>
