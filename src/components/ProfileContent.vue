<template>
  <div>
    <h2 class="rating-list-header">Профиль</h2>

    <nav class="profile-info-container">
      <div class="left-side">
        <img class="avatar" :src="avatarImage" />
        <div class="username-place-container">
          <p class="username">{{ name }} <span class="tg-username">{{ userName }}</span></p>
          <span class="rating-place" :class="{ 'rectangular': userRank?.length > 1 }">{{ userRank }}</span>
        </div>

      </div>

      <div class="right-side">
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">{{ gameUserInfo?.balance || 0 }}</span>
        </div>
        <p class="score-change-period">За неделю <span>{{ weekAmount }}</span></p>
      </div>
    </nav>

    <div class="phone-container">
      <b class="phone-container-header">Подтвердите номер телефона</b>
      <div class="phone-btn-container"
        :class="{ 'success': userPhoneInProfile, 'error': !userPhoneInProfile && phoneValidErrorMessage }">
        <MaskInput v-if="!userPhoneInProfile" class="user-phone" v-model="phoneNumberMasked"
          mask="+#-###-###-##-##-##-##-##-##" placeholder="+7-900-000-00-00" @input="validatePhoneNumber(phoneNumber)"
          @focus="onFocus" />
        <input v-else class="user-phone" :value="userPhoneInProfile" disabled />
        <button type="button" class="phone-approve-btn"
          :class="{ 'active': !userPhoneInProfile && !phoneValidErrorMessage }" @click="handlePhoneBtnClick"
          :disabled="userPhoneInProfile">
          <IconPhoneApproved />
        </button>
        <p v-if="userPhoneInProfile" class="phone-status-text">Номер подтвержден</p>
        <p v-else class="phone-status-text">Введите корректный номер</p>
      </div>
    </div>

    <h2 class="rating-list-header">История прогнозов</h2>

    <div class="btn-container">
      <button class="history-type-btn" :class="{ 'active': isHistoryTypeActive }" @click="toggleHistoryType(true)">
        <span>
          Активные
        </span>
        <span class="forecast-amount">{{ activeBets.length }}</span>
      </button>
      <button class="history-type-btn" :class="{ 'active': !isHistoryTypeActive }" @click="toggleHistoryType(false)">
        <span>
          Завершенные
        </span>
        <span class="forecast-amount">{{ completedBets.length }}</span>
      </button>


    </div>

    <ul v-if="isHistoryTypeActive && activeBets.length > 0" class="forecast-history-list">
      <li v-for="(activeBet, activeBetIdx) in activeBets" class="forecast-history-list-item"
        :key="activeBet + activeBetIdx">
        <div class="forecast-history-list-item-wrapper">
          <div class="forecast-history-info-container">
            <p class="forecast-history-header">{{ `${activeBet?.event?.homeTeam?.name} VS
              ${activeBet?.event?.awayTeam?.name}, ${formatMatchDate(activeBet?.date)}` }}</p>
            <p class="forecast-history-date">прогноз от {{ formatMatchDay(activeBet?.date) }}</p>
          </div>

          <img v-if="getTeamLogo(activeBet)" :src="getTeamLogo(activeBet)" alt="forecast winner"
            class="forecast-history-img">
          <IconForecastDraw v-else class="forecast-history-img" />

          <div v-if="getExactIndex(activeBet) || getTotalInfo(activeBet)?.index || activeBet?.danger"
            class="score forecast-history-score" @click="toggleDetails(activeBetIdx)">
            <svg class="forecast-history-score-arrow" :class="{ 'rotated': isExpanded(activeBetIdx) }" width="16"
              height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
                fill="white" />
            </svg>

            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ getBetAmount(completedBetRewards[completedBetIdx]) }}</span>
          </div>

          <div v-else class="score forecast-history-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ getBetAmount(activeBet[activeBetIdx]) }}</span>
          </div>
        </div>

        <div class="additionals-container" :class="{ 'expanded': isExpanded(activeBetIdx) }">
          <div v-if="getExactIndex(activeBet)" class="forecast-history-list-item-additional">Точный исход: {{
            activeBet?.event?.homeTeam?.name }} {{ getTeamValue(activeBet, getExactIndex(activeBet), "home")
            }}:
            {{
              activeBet?.event?.awayTeam?.name }} {{ getTeamValue(activeBet, getExactIndex(activeBet), "away") }}

          </div>
          <div v-if="getTotalInfo(activeBet)?.index && getTotalInfo(activeBet)?.coef === 'Tb'"
            class="forecast-history-list-item-additional">Тотал больше

          </div>
          <div v-if="getTotalInfo(activeBet)?.index && getTotalInfo(activeBet)?.coef === 'Tm'"
            class="forecast-history-list-item-additional">Тотал меньше </div>
          <div v-if="activeBet?.danger" class="forecast-history-list-item-additional">Ставка с риском
          </div>
        </div>
      </li>

    </ul>

    <ul v-else-if="!isHistoryTypeActive && completedBets.length > 0" class="forecast-history-list">
      <li v-for="(completedBet, completedBetIdx) in completedBets" class="forecast-history-list-item"
        :key="completedBet + completedBetIdx">
        <div class="forecast-history-list-item-wrapper">
          <div class="forecast-history-info-container">
            <p class="forecast-history-header">{{ `${completedBet?.event?.homeTeam?.name} VS
              ${completedBet?.event?.awayTeam?.name}, ${formatMatchDate(completedBet.date)}` }}</p>
            <p class="forecast-history-date">прогноз от {{ formatMatchDay(completedBet?.date) }}</p>
          </div>

          <img v-if="getTeamLogo(completedBet)" :src="getTeamLogo(completedBet)" alt="forecast winner"
            class="forecast-history-img">
          <IconForecastDraw v-else class="forecast-history-img" />

          <div v-if="getExactIndex(completedBet) || getTotalInfo(completedBet)?.index || completedBet?.danger"
            class="score forecast-history-score" @click="toggleDetails(completedBetIdx)">
            <svg class="forecast-history-score-arrow" :class="{ 'rotated': isExpanded(completedBetIdx) }" width="16"
              height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
                fill="white" />
            </svg>

            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ getBetAmount(completedBetRewards[completedBetIdx]) }}</span>
          </div>

          <div v-else class="score forecast-history-score">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
            <span class="score-text">{{ getBetAmount(completedBetRewards[completedBetIdx]) }}</span>
          </div>
        </div>

        <div class="additionals-container" :class="{ 'expanded': isExpanded(completedBetIdx) }">
          <div v-if="getExactIndex(completedBet)" class="forecast-history-list-item-additional">Точный исход: {{
            completedBet?.event?.homeTeam?.name }} {{ getTeamValue(completedBet, getExactIndex(completedBet), "home")
            }}:
            {{
              completedBet?.event?.awayTeam?.name }} {{ getTeamValue(completedBet, getExactIndex(completedBet), "away") }}
            <span :class="{
              'plus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getExactIndex(completedBet)]?.coefficient?.reward) > 0,
              'minus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getExactIndex(completedBet)]?.coefficient?.reward) < 0,
              'zero': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getExactIndex(completedBet)]?.coefficient?.reward) == 0,
            }">{{
              getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getExactIndex(completedBet)]?.coefficient?.reward)
            }}</span>
          </div>
          <div v-if="getTotalInfo(completedBet)?.index && getTotalInfo(completedBet)?.coef === 'Tb'"
            class="forecast-history-list-item-additional">Тотал больше
            <span :class="{
              'plus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) > 0,
              'minus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) < 0,
              'zero': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) == 0,
            }">{{
              getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward)
            }}</span>
          </div>
          <div v-if="getTotalInfo(completedBet)?.index && getTotalInfo(completedBet)?.coef === 'Tm'"
            class="forecast-history-list-item-additional">Тотал меньше <span :class="{
              'plus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) > 0,
              'minus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) < 0,
              'zero': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) == 0,
            }">{{
              getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward)
            }}</span></div>
          <div v-if="completedBet?.danger" class="forecast-history-list-item-additional">Ставка с риском <span :class="{
            'plus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) > 0,
            'minus': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) < 0,
            'zero': getBetExtraAmount(completedBetRewards[completedBetIdx]?.bet?.BetCoefficientKey[getTotalInfo(completedBet)?.index]?.coefficient?.reward) == 0,
          }">+1</span>
          </div>
        </div>
      </li>

    </ul>

    <p v-else class="no-bets-text">Ставки отсутствуют</p>
  </div>
</template>

<script>
import IconPhoneApproved from '@/components/icons/IconPhoneApproved.vue';
import { useAppStore } from "@/stores/appStore";
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';
import { setPhoneNumber } from "@/api/index.js";
import { toast } from 'vue3-toastify';
import { MaskInput } from 'vue-3-mask';
import IconForecastDraw from '@/components/icons/IconForecastDraw.vue';

export default {
  components: { IconPhoneApproved, MaskInput, IconForecastDraw },

  data() {
    return {
      appStore: useAppStore(),
      phoneNumberMasked: '',
      weekAmount: "0",
      isPhoneValid: false,
      phoneValidErrorMessage: false,

      isHistoryTypeActive: true,

      expandedItemsArray: [] // Массив для хранения индексов раскрытых элементов
    }
  },

  mounted() {
    this.getWeekAmount();
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

    userName() {
      if (this.appStore.initDataUnsafe?.user?.username) {
        // Ограничение строки до 15 символов с использованием slice
        return "@" + this.appStore.initDataUnsafe?.user?.username.slice(0, 15) + (this.appStore.initDataUnsafe?.user?.username > 15 ? '...' : '');
      }
      return "Нет данных";
    },

    userRank() {
      return this.appStore.gameUserInfo.scoreRank.toString() || "-";
    },

    phoneNumber() {
      return this.phoneNumberMasked.replace(/[^\d]/g, '').replace(/^/, '+');
    },
    userPhoneInProfile() {
      if (this.appStore.gameUserInfo && this.appStore.gameUserInfo.phone) {
        // Убираем все нецифровые символы из строки
        const digits = this.appStore.gameUserInfo.phone.replace(/\D/g, '');

        // Начинаем с плюса
        let formattedNumber = '+';

        // Добавляем цифры в нужном формате
        for (let i = 0; i < digits.length; i++) {
          // Поставим дефис после определённых позиций
          if (i === 1) {
            formattedNumber += '-';
          } else if (i === 4 || i === 7 || i === 9 || i === 11 || i === 13 || i === 15 || i === 17 || i === 19) {
            formattedNumber += '-';
          }

          // Добавляем цифру
          formattedNumber += digits[i];
        }

        return formattedNumber;

      }
      return false
    },

    allBets() {
      return Array.isArray(this.appStore.allBets) ? this.appStore.allBets : [];
    },
    activeBets() {
      return Array.isArray(this.appStore.activeBets) ? this.appStore.activeBets : [];
    },
    completedBets() {
      return Array.isArray(this.appStore.completedBets) ? this.appStore.completedBets : [];
    },
    completedBetRewards() {
      return Array.isArray(this.appStore.completedBetRewards) ? this.appStore.completedBetRewards : [];
    }
  },

  methods: {
    formatMatchDate(date) {
      if (!date) return "--:--"; // Если даты нет, возвращаем заглушку

      const matchDate = new Date(date);
      const hours = matchDate.getHours().toString().padStart(2, "0");
      const minutes = matchDate.getMinutes().toString().padStart(2, "0");

      return `${hours}:${minutes}`;
    },

    formatMatchDay(isoString) {
      if (!isoString) return "";

      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    },

    getWeekAmount() {
      if (Array.isArray(this.completedBetRewards)) {
        let temp = this.completedBetRewards.reduce((total, bet) => {
          console.log(bet.balanceDelta)
          return total + bet.balanceDelta;
        }, 0);

        this.weekAmount = temp.toString();
      }

      this.weekAmount = "0"
    },

    onFocus() {
      this.phoneValidErrorMessage = false;
    },
    validatePhoneNumber(value) {
      if (value.length < 10) {
        this.isPhoneValid = false;

        return false;
      }

      this.isPhoneValid = true;
      return true;
    },
    toggleHistoryType(boolean) {
      this.isHistoryTypeActive = boolean;
      this.expandedItemsArray = []; // Очищаем массив раскрытых элементов
    },

    getTeamLogo(bet) {
      if (!bet || !bet.BetCoefficientKey || !bet.event) return null;

      for (const key of bet.BetCoefficientKey) {
        if (key.coefficientKey === "P1") {
          return bet.event.homeTeam.logoUrl;
        }
        if (key.coefficientKey === "P2") {
          return bet.event.awayTeam.logoUrl;
        }
        if (key.coefficientKey === "X") {
          return bet.event.draw || null;
        }
      }

      return null;
    },

    getBetAmount(bet) {
      if (!bet || (!bet.balanceDelta && bet?.balanceDelta != 0)) { return "-"; }

      if (Number(bet.balanceDelta) > 0) {
        return "+" + bet.balanceDelta
      }

      if (Number(bet.balanceDelta) === 0) {
        return bet.balanceDelta
      }

      return "-";
    },

    getBetExtraAmount(number) {
      if (!number && number !== 0) { return "-"; }

      if (Number(number) > 0) {
        return "+" + number
      }

      if (Number(number) === 0) {
        return number
      }

      return "-";
    },

    async handlePhoneBtnClick() {
      if (!this.validatePhoneNumber(this.phoneNumber)) {
        this.phoneValidErrorMessage = true;
        return;
      }
      if (this.isPhoneValid) {
        const isPhoneAccepted = await setPhoneNumber(this.phoneNumber);

        if (isPhoneAccepted) {
          await getUserProfile();
          toast.success("Номер телефона подтвержден");
          this.$forceUpdate();
        }
        else {
          toast.error("Проверьте правильность введенного номера. Он должен содержать от 10 до 20 цифр");
          this.phoneValidErrorMessage = true;
        }
      }
    },

    getExactIndex(bet) {
      const index = bet?.BetCoefficientKey?.findIndex(betKey => {
        return betKey.coefficientId === betKey.coefficientKey
      });
      return index !== -1 ? index : false;
    },

    getTotalInfo(bet) {
      const index = bet?.BetCoefficientKey?.findIndex(betKey => {
        return betKey.coefficientKey === "Tb" || betKey.coefficientKey === "Tm"
      });

      return index !== -1 ? { index, coef: bet?.BetCoefficientKey[index].coefficientKey } : { index: false };
    },

    getTeamValue(bet, index, teamType) {
      if (bet.BetCoefficientKey[index].value) {
        const valueArray = bet.BetCoefficientKey[index].value.split(":");
        return teamType === "home" ? valueArray[0] : valueArray[1];
      }
      return "-"
    },

    toggleDetails(index) {
      const position = this.expandedItemsArray.indexOf(index);
      if (position === -1) {
        // Если элемент не найден в массиве, добавляем его (раскрываем)
        this.expandedItemsArray.push(index);
      } else {
        this.expandedItemsArray.splice(position, 1);
      }
    },

    isExpanded(index) {
      return this.expandedItemsArray.includes(index);
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  font-family: "Styrene A";
  font-size: 8px;
  background-color: var(--color-element-background-2);
  border-radius: 20px;

  &.rectangular {
    width: auto;
    padding: 0 8px;
    border-radius: 6px;
  }
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
  background-color: var(--color-element-border);
  color: var(--color-text);
  border-radius: 6px;
  font-size: 13px;
  font-weight: bold;
  flex-grow: 1;

  &::placeholder {
    color: white;
    opacity: 0.35;
  }
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

  &.error {
    & .user-phone {
      outline: 1.2px solid var(--color-element-background-rose);
    }

    & .phone-status-text {
      display: block;
      color: var(--color-element-background-rose);
    }
  }
}

.phone-approve-btn {
  height: 34px;
  padding: 5px 8px;
  background-color: var(--color-element-border);
  border-radius: 6px;
  flex-grow: 0;
  border: none;

  &.active {
    background-color: var(--color-main-blue);
  }
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

.additionals-container {
  border-top: none;
  max-height: 0;
  overflow: hidden;
  transition: clip-path 0.3s ease, padding-top 0.3s ease, margin-top 0.3s ease, max-height 0.2s ease;

  clip-path: inset(0 0 100% 0);
  /* Начальное состояние: контейнер скрыт */

  &.expanded {
    border-top: 1px solid var(--color-element-border);
    max-height: 500px;
    margin-top: 8px;
    padding-top: 6px;
    clip-path: inset(0 0 0 0);
    /* Показываем контейнер плавно */
  }
}

.forecast-history-list-item-additional {
  font-family: "Styrene A";
  font-size: 8px;
  text-align: end;
  margin-bottom: 2px;

  & span {
    &.plus {
      color: var(--color-element-lemongreen);
    }

    &.minus {
      color: var(--color-element-background-rose);
    }

    &.zero {
      color: var(--color-element-border);
    }
  }
}

.forecast-history-score-arrow {
  position: absolute;
  top: 50%;
  left: -22px;
  transform: translateY(-50%) rotate(0deg);
  transform-origin: center;
  transition: transform 0.3s ease;

  &.rotated {
    transform: translateY(-50%) rotate(180deg);
  }
}


.btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px;
  gap: 4px;
  margin-bottom: 20px;
  background-color: var(--color-element-border);
  border-radius: 11px;
}

.history-type-btn {
  flex-basis: calc(50% - 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  gap: 6px;
  font-size: 15px;
  line-height: 1;
  color: var(--color-text);
  border-radius: 8px;

  &.active {
    background-color: var(--color-element-background);
  }
}

.forecast-amount {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  border-radius: 50%;
  background-color: #313A45;

  &.rectangular {
    width: auto;
    padding-left: 5px;
    padding-left: 5px;
    border-radius: 10px;

  }
}

.no-bets-text {
  margin-top: 60px;
  text-align: center;
}

.forecast-history-score {
  cursor: pointer;
}
</style>
