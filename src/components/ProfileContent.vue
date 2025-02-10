<template>
  <h2 class="rating-list-header">Профиль</h2>

  <nav class="profile-info-container">
    <div class="left-side">
      <img class="avatar" src="/img/avatar-placeholder.webp" />
      <div class="username-place-container">
        <p class="username">Игорь Петров <span class="tg-username">@igorpet</span></p>
        <span class="rating-place">5000</span>
      </div>

    </div>

    <div class="right-side">
      <div class="score">
        <img class="score-coin" src="/img/coin.png" alt="coins">
        <span class="score-text">200</span>
      </div>
      <p class="score-change-period">За неделю<span>+2</span></p>
    </div>
  </nav>

  <div class="phone-container">
    <b class="phone-container-header">Подтвердите номер телефона</b>
    <div class="phone-btn-container">
      <input type=" tel" name="" id="" class="user-phone" value="+7-900-000-00-00">
      <button type="button" class="phone-approve-btn">
        <IconPhoneApproved />
      </button>
    </div>
  </div>

  <h2 class="rating-list-header">История прогнозов</h2>

  <ul>
    <li>
      <div>
        <p></p>
        <p></p>
      </div>

      <img src="" alt="">

      <div class="score">
        <img class="score-coin" src="/img/coin.png" alt="coins">
        <span class="score-text">+1</span>
      </div>
    </li>
  </ul>
</template>

<script>
import IconPhoneApproved from '@/components/icons/IconPhoneApproved.vue';

export default {
  components: { IconPhoneApproved },

}
</script>

<style lang="scss" scoped>
.profile-info-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
}

.left-side {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  flex-grow: 1;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-right: auto;
}

.username-place-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
}

.username {
  font-size: 12px;
  font-weight: bold;
}

.tg-username {
  margin-left: 6px;
  font-family: "Styrene A";
  font-size: 8px;
  align-self: flex-start;
}

.rating-place {
  padding: 2px 4px;
  font-family: "Styrene A";
  font-size: 8px;
  background-color: var(--color-element-background-2);
  border-radius: 20px;
}

.score-change-period {
  font-family: "Styrene A";
  font-size: 8px;

  & span {
    color: var(--color-element-lemongreen)
  }
}


.phone-container {
  width: 100%;
  margin-bottom: 30px;
}

.phone-container-header {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
}

.user-phone {
  height: 34px;
  padding: 8px 10px;
  border: none;
  background-color: var(--color-element-background-2);
  color: var(--color-text);
  border-radius: 6px;
  font-size: 13px;
  font-weight: bold;
  flex-grow: 1;
  pointer-events: none;
}

.phone-btn-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.92%;
}

.phone-approve-btn {
  height: 34px;
  padding: 5px 8px;
  background-color: var(--color-main-blue);
  border-radius: 6px;
  flex-grow: 0;
  border: none;

}
</style>
