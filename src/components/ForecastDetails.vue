<template>
  <div>
    <h2 class="forecast-header">Chelsy VS Bayern, 19:40</h2>

    <ul class="forecast-list">
      <li class="forecast-list-item">
        <label class="forecast-choice-btn">
          <div class="forecast-radio-immitator"></div>
          <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
          <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo">
          <p class="forecast-team"> Chelsey</p>
          <div class="forecast-coef">1.60</div>
        </label>
      </li>

      <li class="forecast-list-item">
        <label class="forecast-choice-btn">
          <div class="forecast-radio-immitator"></div>
          <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
          <IconForecastDraw class="forecast-img" />
          <!-- <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo"> -->
          <p class="forecast-team"> Ничья</p>
          <div class="forecast-coef">1.60</div>
        </label>
      </li>

      <li class="forecast-list-item">
        <label class="forecast-choice-btn">
          <div class="forecast-radio-immitator"></div>
          <input class="visually-hidden" type="radio" name="game-forecast" value="win1" />
          <img class="forecast-img" src="/img/game-team-logo.png" alt="team logo">
          <p class="forecast-team"> Chelsey2</p>
          <div class="forecast-coef">1.60</div>
        </label>
      </li>
    </ul>


    <div class="accordion">
      <div class="accordion-header">
        <IconBoxingGlove :starColor="'#0070F3'" :width="'30'" :height="'30'" />
        <span>Повышенные бонусы за победу</span>
        <svg class="accordion-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M2.25105 5.21967C2.58579 4.92678 3.1285 4.92678 3.46323 5.21967L8 9.18934L12.5368 5.21967C12.8715 4.92678 13.4142 4.92678 13.7489 5.21967C14.0837 5.51256 14.0837 5.98744 13.7489 6.28033L8.60609 10.7803C8.27136 11.0732 7.72864 11.0732 7.39391 10.7803L2.25105 6.28033C1.91632 5.98744 1.91632 5.51256 2.25105 5.21967Z"
            fill="white" />
        </svg>
      </div>

      <div class="accordion-content">
        <p>Это скрытый контент, который появляется при клике.</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconForecastDraw from '@/components/icons/IconForecastDraw.vue';
import IconBoxingGlove from '@/components/icons/IconBoxingGlove.vue';

export default {
  components: { IconForecastDraw, IconBoxingGlove },
}
</script>

<style lang="scss" scoped>
.forecast-header {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: auto;
  text-align: center;
}

.forecast-list {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2.75%;
  margin-bottom: 12px;
}

.forecast-list-item {
  flex-grow: 1;
  flex-shrink: 1;

}

.forecast-choice-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 13% 17.5% 7.5%;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    padding: 1px;
    /* Толщина границы */
    border-radius: inherit;
    /* Наследуем скругление */
    background: linear-gradient(180deg, rgba(22, 32, 47, 0) 0%, rgba(85, 92, 103, 1) 50%, rgba(85, 92, 103, 0.6) 100%);

    /* Обрезаем центр, оставляя только градиентную рамку */
    mask:
      linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    mask-composite: destination-out;
    mask-composite: exclude;

    pointer-events: none;
  }
}

.forecast-radio-immitator {
  position: absolute;
  top: 7.4%;
  right: 7.4%;
  width: 7.4%;
  height: auto;
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  border: 1px solid var(--color-element-background-2);
}

.forecast-img {
  width: 100%;
  height: 100%;
}

.forecast-team {
  font-family: 'Styrene A', sans-serif;
  font-size: 10px;
}

.forecast-coef {
  width: auto;
  padding: 2px 8px;
  border-radius: 6px;
  background-color: var(--color-element-background-2);
  font-size: 12px;
  font-weight: bold;
}

.accordion {

  border-radius: 8px;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 8px 13px;
  cursor: pointer;
  font-size: 3.33vw;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid var(--color-main-blue);

  @media screen and (min-width: 450px) {
    font-size: 16px;
  }
}

.accordion-arrow {
  margin-left: auto;

}

.accordion-content {
  padding: 10px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.accordion:has(.accordion-header:hover) .accordion-content {
  max-height: 100px;
}
</style>
