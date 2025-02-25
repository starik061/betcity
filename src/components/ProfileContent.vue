<template>
  <div>
    <h2 class="rating-list-header">Профиль</h2>

    <nav class="profile-info-container">
      <div class="left-side">
        <img class="avatar" :src="avatarImage" />
        <div class="username-place-container">
          <p class="username">{{ name }} <span class="tg-username">{{ userName }}</span></p>
          <span class="rating-place">5000</span>
        </div>

      </div>

      <div class="right-side">
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">{{ gameUserInfo.balance || 0 }}</span>
        </div>
        <p class="score-change-period">За неделю<span>+2</span></p>
      </div>
    </nav>

    <div class="phone-container">
      <b class="phone-container-header">Подтвердите номер телефона</b>
      <div class="phone-btn-container" :class="{ 'success': isPhoneValid }">
        <input type=" tel" name="" id="" class="user-phone" v-model="phoneNumber" @focus="onFocus" @input="onPhoneInput"
          max="16" placeholder="+7-900-000-00-00">
        <button type="button" class="phone-approve-btn">
          <IconPhoneApproved />
        </button>
        <p class="phone-status-text">Номер подтвержден</p>
      </div>
    </div>

    <h2 class="rating-list-header">История прогнозов</h2>

    <ul class="forecast-history-list">
      <li class="forecast-history-list-item">
        <div class="forecast-history-list-item-wrapper">
          <div class="forecast-history-info-container">
            <p class="forecast-history-header">Chelsey VS Bayern, 19:40</p>
            <p class="forecast-history-date">прогноз от 01.02.2025</p>
          </div>

          <img src="/img/game-team-logo.png" alt="forecast winner" class="forecast-history-img">

          <div class="score forecast-history-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">+2</span>
          </div>
        </div>

      </li>

      <li class="forecast-history-list-item">
        <div class="forecast-history-list-item-wrapper">
          <div class="forecast-history-info-container">
            <p class="forecast-history-header">Chelsey VS Bayern, 19:40</p>
            <p class="forecast-history-date">прогноз от 01.02.2025</p>
          </div>

          <img src="/img/game-team-logo.png" alt="forecast winner" class="forecast-history-img">

          <div class="score forecast-history-score">
            <svg class="forecast-history-score-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
                fill="white" />
            </svg>

            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">+2</span>
          </div>
        </div>
        <div class="forecast-history-list-item-additional">Тотал меньше <span>+1</span></div>
      </li>

    </ul>
  </div>
</template>

<script>
import IconPhoneApproved from '@/components/icons/IconPhoneApproved.vue';
import { useAppStore } from "@/stores/appStore";
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';

export default {
  components: { IconPhoneApproved },

  data() {
    return {
      appStore: useAppStore(),
      phoneNumber: '',
      isPhoneValid: false,
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

    userName() {
      if (this.tgUser?.username) {
        // Ограничение строки до 15 символов с использованием slice
        return "@" + this.tgUser?.username.slice(0, 15) + (this.tgUser?.username > 15 ? '...' : '');
      }
      return "Нет данных";
    }
  },

  methods: {
    onFocus() {
      if (this.phoneNumber === '' || this.phoneNumber === '+7') {
        this.phoneNumber = '+7';  // Если поле пустое, ставим +7
      }
    },

    onPhoneInput(event) {
      this.isPhoneValid = false;

      let value = event.target.value;

      // Убираем все нецифровые символы (кроме плюса)
      const rawValue = value.replace(/\D/g, '');

      // Если длина после удаления нецифровых символов больше 16, обрезаем
      if (rawValue.length > 16) {
        this.phoneNumber = formatPhoneNumber(rawValue.slice(0, 16));
        return;
      }

      // Если значение пустое или не начинается с +7, восстанавливаем +7
      if (rawValue === '' || !rawValue.startsWith('7')) {
        this.phoneNumber = '+7';
      } else {
        // Начинаем с +7
        let formattedValue = '+7';

        // Форматируем номер телефона с дефисами
        if (rawValue.length > 1) {
          formattedValue += '-' + rawValue.slice(1, 4);
        }
        if (rawValue.length > 4) {
          formattedValue += '-' + rawValue.slice(4, 7);
        }
        if (rawValue.length > 7) {
          formattedValue += '-' + rawValue.slice(7, 9);
        }
        if (rawValue.length > 9) {
          formattedValue += '-' + rawValue.slice(9, 11);
        }

        // Ограничиваем длину строки до 16 символов (с дефисами)
        if (formattedValue.length > 16) {
          formattedValue = formattedValue.slice(0, 16);
        }

        this.phoneNumber = formattedValue;

        // Проверяем, если длина форматированного значения равна 16
        if (this.phoneNumber.length === 16) {
          this.isPhoneValid = true;
        }
      }
    },
  }
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

}

.phone-btn-container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.92%;

  &.success {
    & .user-phone {
      outline: 1.2px solid var(--color-element-lemongreen);
    }

    & .phone-status-text {
      display: block;
    }
  }
}

.phone-approve-btn {
  height: 34px;
  padding: 5px 8px;
  background-color: var(--color-main-blue);
  border-radius: 6px;
  flex-grow: 0;
  border: none;
}

.phone-status-text {
  display: none;
  position: absolute;
  bottom: -15px;
  left: 0;
  font-family: "Styrene A";
  font-size: 8px;
  color: var(--color-element-lemongreen);
}

.forecast-history-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.forecast-history-list-item {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--color-element-border);
}

.forecast-history-list-item-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.forecast-history-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.forecast-history-header {
  font-size: 13px;
  font-weight: bold;
}

.forecast-history-date {
  text-transform: lowercase;
  font-family: "Styrene A";
  font-size: 8px;
}

.forecast-history-score {
  position: relative;
  margin-left: 43px;
  flex-grow: 0;
  flex-shrink: 0;
}

.forecast-history-img {
  width: 30px;
  height: 30px;
  margin-left: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.forecast-history-list-item-additional {
  margin-top: 8px;
  padding-top: 6px;
  border-top: 1px solid var(--color-element-border);
  font-family: "Styrene A";
  font-size: 8px;
  text-align: end;

  & span {
    color: var(--color-element-lemongreen)
  }
}

.forecast-history-score-arrow {
  position: absolute;
  top: 50%;
  left: -22px;
  transform: translateY(-50%) rotate(0deg);
}
</style>
