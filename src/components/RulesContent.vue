<template>
  <div>
    <h2 class="rules-header">Правила</h2>

    <div class="ref-link-container rules-container with-octopus">
      <img class="rules-content-image" src="/img/rules-image.png" alt="octopus image">
    </div>

    <div class="ref-link-container rules-container">
      <ul class="game-rules-list">

        <li class="game-rules-list-item">
          <div class="game-rules-list-number">1</div>
          <p class="game-rules-list-text">Выбери победителя или ничью</p>
        </li>

        <li class="game-rules-list-item arrow-item">
          <svg class="game-rules-list-item-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
              fill="white" />
          </svg>
        </li>

        <li class="game-rules-list-item">
          <div class="game-rules-list-number">2</div>
          <p class="game-rules-list-text">Получай Беткоины за выигрыш</p>
        </li>

        <li class="game-rules-list-item  arrow-item">
          <svg class="game-rules-list-item-arrow " width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
              fill="white" />
          </svg>
        </li>

        <li class="game-rules-list-item">
          <div class="game-rules-list-number">3</div>
          <p class="game-rules-list-text">Участвуй в рейтинге и получай фрибеты</p>
        </li>
      </ul>
    </div>

    <p class="change-choice-text change-choice-text">* Прогноз можно поменять до начала матча. Текущий выбор будет
      подсвечен</p>

    <div class="ref-link-container rules-container text">
      <h2 class="rules-header">Как зарабатывать беткоины</h2>

      <div class="rules-text-big margin">
        <span>За каждый <span style="color:#F7B23B">правильный</span> прогноз начисляем</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">+2</span>
        </div>
      </div>

      <div class="rules-text-big">
        <span>За каждый <span style=" color:#E43659">неправильный</span> прогноз минусуем</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">+2</span>
        </div>
      </div>

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
.rules-header {
  margin-bottom: 35px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}


.ref-link-container {
  position: relative;
  width: 100%;
  margin-bottom: 19px;
  border: 1px solid var(--color-element-border);
  border-radius: 8px;
}

.rules-container {
  margin-bottom: 10px;

  &.with-octopus {
    margin-bottom: 30px;
  }

  &.text {
    padding: 20px 11px;
  }
}

.rules-content-image {
  display: block;
  margin: 0 auto;
  width: 85%;
  transform: scale(1.15) translateY(-10px);
}

.game-rules-list {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 6px;
}

.game-rules-list-number {
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main-blue);
  border-radius: 6px;
  font-size: 13px;
  font-weight: bold;
}

.game-rules-list-text {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
}

.game-rules-list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  flex-grow: 1;

  &.arrow-item {
    flex-basis: 47px;
    flex-grow: 0;
    align-self: center;
  }
}

.game-rules-list-item-arrow {
  transform: rotate(-90deg);
}

.change-choice-text {
  margin-bottom: 20px;
  font-family: "Styrene A";
  font-size: 10px;
  color: var(--color-main-blue)
}

.rules-text-big {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: bold;

  &.margin {
    margin-bottom: 6px;
  }
}
</style>
