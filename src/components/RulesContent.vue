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

      <div class="divider"></div>

      <div class="rules-text-big margin">
        Каждую неделю даётся четыре бонусных действия, которые можно использовать по одному разу:
      </div>

      <div class="rules-text-small margin">
        <span>1. Спрогнозировать точный исход матчей.</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">+3</span>
        </div>
      </div>

      <div class="rules-text-small margin">
        <span>2. Выбрать тотал больше или меньше 2.5.</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">+3</span>
        </div>
      </div>

      <div class="rules-text-small margin">
        <span>3. Написать минуту первого гола. Угадал?</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">+5</span>
        </div>
      </div>

      <div class="rules-text-small ">
        <span>4. Сделать ставку с риском.</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">x2</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rules-text-big margin">
        Приглашай друзей
      </div>

      <div class="rules-text-small margin">
        <span>Зайди в раздел
          <span class="friends-btn-immitator">
            <IconBottomNavFriends :width="13" :height="13" /><span>Friends</span>
          </span> и отправь пригласительную ссылку.</span>
      </div>

      <div class="ref-link-input-container rules">
        <input class="ref-link-input" type="text" name="" value="https://www.figma.com">
        <button type="button" class="copy-btn">
          <IconCopyBtn />
        </button>
      </div>

      <p class="change-choice-text change-choice-text">* Для каждого друга новая ссылка</p>

      <div class="rules-text-small ">
        <span>После авторизации друга в игре</span>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">+1</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rules-text-big margin">
        Осьминог
      </div>

      <div class="rules-text-small octopus-rules">
        <span class="octopus-rules-text">Ищи нашего осьминого во время игры, тапай и получай бонусные
          беткоины каждый день.</span>
        <img src="/img/tap-octopus.png" class="octopus-rules-img" alt="octopus for tap">
      </div>
    </div>

    <div class="ref-link-container rules-container text">
      <h2 class="rules-header smaller-margin">Призы</h2>

      <div class="rules-text-big bigger-margin">
        Фрибеты распределяются в зависимости от места пользователя в рейтинге.
      </div>

      <div class="rules-frame-text-container">
        <p class="rules-frame-text">Чем больше БЕТКОИНОВ, тем выше место игрока</p>
        <div class="score">
          <img class="score-coin" src="/img/coin.png" alt="coins">
          <span class="score-text">
            <IconRulesPrizesArrow />
          </span>
        </div>
      </div>

      <p class="change-choice-text change-choice-text">* При равенстве беткоинов победитель определяется случайным
        образом среди игроков, набравших одинаковое количество очков.</p>

      <div class="divider"></div>

      <div class="rules-text-big biggest-margin">
        Номиналы фрибетов в рейтинге распределяются следующим образом:
      </div>

      <ul class="game-rules-list game-rules-prizes-list">

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">1</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">Холодильник</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">2</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">Стиральная машина</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">3</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">Автомобиль</p>
        </li>
      </ul>

      <div class="rules-text-small margin">
        <span>Остальные участники рейтинга разыгрывают XX фрибетов по ХХХ рублей. Бонусы будут распределены случайным
          образом среди игроков.</span>
      </div>

      <p class="change-choice-text change-choice-text">* Сохранить место в рейтинге и получить приз смогут только
        учавтники, зарегистрированные в БЕТСИТИ и указавшие номер телефона в личном кабинете.</p>

      <div class="divider"></div>

      <div class="read-full-rules-link-wrapper">
        <a href="#" class="read-full-rules-link">Читать полные правила</a>
      </div>
    </div>


  </div>
</template>

<script>
import IconCopyBtn from '@/components/icons/IconCopyBtn.vue';
import IconBottomNavFriends from '@/components/icons/IconBottomNavFriends.vue';
import IconRulesPrizesArrow from '@/components/icons/IconRulesPrizesArrow.vue';

export default {
  components: { IconCopyBtn, IconBottomNavFriends, IconRulesPrizesArrow },
}
</script>

<style lang="scss" scoped>
.rules-header {
  margin-bottom: 35px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  &.smaller-margin {
    margin-bottom: 20px;
  }
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
  gap: 6px;
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

  &.bigger-margin {
    margin-bottom: 16px;
  }

  &.biggest-margin {
    margin-bottom: 20px;
  }
}

.rules-text-small {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Styrene A";
  font-size: 10px;

  &.margin {
    margin-bottom: 6px;
  }
}

.divider {
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: var(--color-element-border)
}

.friends-btn-immitator {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  padding: 2.5px 5px 2.5px;
  border-radius: 4.19px;
  border: 1px solid var(--color-element-border);
  font-size: 6.29px;
}

.octopus-rules {
  margin-top: -22px;
  gap: 6px;
}

.octopus-rules-img {
  max-width: 88px;
  aspect-ratio: 1/1;
  margin-bottom: -10px;
  flex-grow: 0;
  flex-shrink: 1;
}

.octopus-rules-text {
  width: 62%;
}

.rules-frame-text-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--color-main-blue);
  font-size: 13px;
}

.game-rules-prizes-list {
  padding: 0 1.89%;
  margin-bottom: 16px;

}

.rules-frame-text {
  width: 55%
}

.game-rules-list-text {
  margin-top: 10px;
  font-size: 12px;
}

.game-rules-list-text-2 {
  font-family: "Styrene A";
  font-size: 10px;
}

.game-rules-prizes-list-item {
  width: 20%;
  flex-grow: 0;
}

.read-full-rules-link-wrapper {
  text-align: center;
}

.read-full-rules-link {
  text-decoration: underline;
  font-family: "Styrene A";
  font-size: 10px;
}
</style>
