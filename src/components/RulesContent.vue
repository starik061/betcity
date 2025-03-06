<template>
  <div>
    <h2 class="rules-header">Правила</h2>

    <div class="ref-link-container rules-container with-octopus">
      <div class="image-container">
        <img src="/img/loading-four-star.png" alt="star image" class="star">
        <img src="/img/coin-red.png" alt="red coin" class="red-coin">
        <img src="/img/todo.png" alt=" tod olist image" class="todo-img">
        <img src="/img/rules-octopus.png" alt="betcity octopus mascot" class="octopus-img">
        <img src="/img/ball.png" alt="ball image" class="ball">
        <img src="/img/coin-lightblue.png" alt="lightblue coin" class="lightblue-coin">
        <div class="img-text play">Как играть?</div>
        <div class="img-text simple">Простые правила</div>
        <img src="/img/lighting.svg" alt="lighting" class="lighting">
        <img src="/img/lighting.svg" alt="lighting" class="lighting second">
      </div>
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
      <h2 class="rules-header">Как зарабатывать беткоины?</h2>

      <div class="rules-text-big margin">
        <span>За каждый <span style="color:#F7B23B">правильный</span> прогноз начисляем</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+3</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rules-text-big margin">
        Каждую неделю даётся четыре бонусных действия, которые можно использовать по одному разу:
      </div>

      <div class="rules-text-small margin">
        <span>1. Спрогнозировать точный исход матчей.</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+8</span>
        </div>
      </div>

      <div class="rules-text-small margin">
        <span>2. Выбрать тотал больше или меньше 2.5.</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+5</span>
        </div>
      </div>

      <!-- <div class="rules-text-small margin">
        <span>3. Написать минуту первого гола. Угадал?</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+10</span>
        </div>
      </div> -->

      <div class="rules-text-small margin">
        <span>3. Сделать ставку с риском.</span>
      </div>

      <div class="rules-text-small margin">
        <span>- За правильный прогноз</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">x2</span>
        </div>
      </div>

      <div class="rules-text-small ">
        <span>- За неправильный прогноз</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">-3</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rules-text-small margin">
        <span>Ежедневный вход а приложение</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+1</span>
        </div>
      </div>
      <p class="change-choice-text change-choice-text">* Начисляется автоматически за каждый день входа</p>

      <div class="divider"></div>

      <div class="rules-text-big margin">
        Приглашай друзей
      </div>

      <div class="rules-text-small margin">
        <span>Зайди в раздел
          <span class="friends-btn-immitator">
            <IconBottomNavFriends :width="'13'" :height="'13'" /><span>Friends</span>
          </span> и отправь пригласительную ссылку.</span>
      </div>

      <div class="ref-link-input-container rules">
        <input class="ref-link-input" type="text" name="" value="https://t.me/+kXJl2kywa6g3YWRi" disabled>
        <button type="button" class="copy-btn" disabled>
          <IconCopyBtn />
        </button>
      </div>

      <p class="change-choice-text change-choice-text">* Для каждого друга новая ссылка</p>

      <div class="rules-text-small ">
        <span>После авторизации друга в игре</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
          </div>
          <span class="score-text">+3</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="rules-text-small margin">
        <span>Игра "Три в ряд"</span>
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+1</span>
        </div>
      </div>
      <p class="change-choice-text change-choice-text">* Начисляется раз в день, макс. 1 беткоин за день</p>

      <div class="divider"></div>

      <div class="rules-text-big margin">
        Осьминог
      </div>

      <div class="rules-text-small octopus-rules">
        <span class="octopus-rules-text">Ищи нашего осьминого во время игры, тапай и получай бонусные
          беткоины каждый день.</span>
        <div class="octopus-shadow">
          <img src="/img/tap-octopus-rules.png" class="octopus-rules-img" alt="octopus for tap">
        </div>
      </div>

      <div class="octopus-section-additional-text-container">
        <div class="score">
          <div class="score-coin-wrapper">
            <img class="score-coin" src="/img/coin-cean.png" alt="coins">
          </div>
          <span class="score-text">+1</span>
        </div>
        <p class="change-choice-text change-choice-text" style="margin-bottom: 0;">* Макс. 1 беткоин за день</p>

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
          <div class="score-coin-wrapper">
            <div class="score-coin-wrapper">
              <img class="score-coin" src="/img/coin-cean.png" alt="coins">
            </div>
          </div>
          <span class="score-text" style="padding-left: 3px;">
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
          <div class="game-rules-list-number" style="background-color:#F7B23B">1</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">10.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">2</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">8.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">3</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">3.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">4</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">3.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">5</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">3.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">6</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">2.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">7</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">1.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">8</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">1.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">9</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">1.000 &#8381</p>
        </li>

        <li class="game-rules-list-item game-rules-prizes-list-item">
          <div class="game-rules-list-number">10</div>
          <p class="game-rules-list-text-2">Место</p>
          <p class="game-rules-list-text">1.000 &#8381</p>
        </li>
      </ul>

      <div class="rules-text-small margin">
        <span>Бонусы будут распределены случайным образом среди игроков>.</span>
      </div>

      <p class="change-choice-text change-choice-text">* Сохранить место в рейтинге и получить приз смогут только
        участники, зарегистрированные в БЕТСИТИ и указавшие номер телефона в личном кабинете.</p>
    </div>

    <div class="ref-link-container rules-container text">
      <h2 class="rules-header smaller-margin">Как я узнаю, что выиграл?</h2>

      <div class="rules-text-big bigger-margin">
        Проверь, что в твоем личном кабинете mini-app «Прогнозист Павел» указан номер телефона, по которому ты
        зарегистрирован в БЕТСИТИ.
      </div>

      <div class="rules-text-big bigger-margin">
        Если мы не сможем получить необходимую информацию в течение семи дней с момента окончания розыгрыша, игрок
        будет исключен из списка призеров.
      </div>
    </div>

    <div class="ref-link-container rules-container text">
      <h2 class="rules-header smaller-margin">Как начислят призы?</h2>

      <div class="rules-text-big bigger-margin">
        Обычно на проверки и начисление призов у букмекера уходит не более пяти рабочих дней. Мы дополнительно
        проинформируем призеров по мере получения от букмекера подтверждения начислений призов.
      </div>
    </div>

    <div class="ref-link-container rules-container text">
      <h2 class="rules-header smaller-margin">Полные условия конкурса. <br>Правила</h2>

      <div class="rules-text-small margin">
        <span>1. Быть гражданином России старше 18 лет на момент участия в конкурсе.</span>
      </div>

      <div class="rules-text-small margin">
        <span>2. Сделать прогнозы на исходы матчей в течение тура. Тур = неделя с понедельника 0:00 по воскресение
          23:59. Каждую неделю начинается новый тур. Победители тура определяются в течение следующей недели (следующего
          тура). </span>
      </div>
      <div class="rules-text-small margin">
        <span>3. Победители определяются по месту в рейтинге.</span>
      </div>
      <div class="rules-text-small margin">
        <span>4. Участвовать в конкурсе можно только с одной учетной записи. Попытки получить преимущество над
          остальными участниками конкурса за счет обхода правил, уязвимостей системы, иных злоупотреблений или
          потенциально нечестных действий, могут привести к аннулированию прогноза и дисквалификации участника(ов)
          конкурса.</span>
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
  flex: 1;

  &.arrow-item {
    flex-basis: 47px;
    flex: none;
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

.ref-link-input {
  font-family: "Styrene A";
  font-size: 10px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.65);
  pointer-events: none;
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
  font-size: 11px;

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
  margin-top: -12px;
  gap: 6px;
}

.octopus-rules-img {
  max-width: 88px;
  aspect-ratio: 1/1;
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
  padding: 0 5%;
  margin-bottom: 16px;
  justify-content: space-between;
  row-gap: 16px;
  flex-wrap: wrap;
}

.rules-frame-text {
  width: 55%
}

.game-rules-list-text {
  // margin-top: 10px;
  font-size: 12px;
}

.game-rules-list-text-2 {
  font-family: "Styrene A";
  font-size: 10px;
}

.game-rules-prizes-list-item {
  width: 33%;
  flex-grow: 0;
  flex: unset;
}

.read-full-rules-link-wrapper {
  text-align: center;
}

.read-full-rules-link {
  text-decoration: underline;
  font-family: "Styrene A";
  font-size: 10px;
}

.image-container {
  position: relative;
  width: 100%;
  min-height: 129px;

  & img {
    display: block;
  }
}

.octopus-img {
  position: absolute;
  width: 41%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}

.ball {
  width: 7.3%;
  position: absolute;
  top: -2%;
  left: 5%;
}

.todo-img {
  position: absolute;
  width: 16.4%;
  aspect-ratio: 1/1;
  top: 5%;
  right: 25%;
}

.lightblue-coin {
  position: absolute;
  width: 5.8%;
  aspect-ratio: 1/1;
  top: 32%;
  right: 12%;
  transform: rotateZ(45deg);
}

.red-coin {
  position: absolute;
  width: 4.4%;
  aspect-ratio: 1/1;
  top: 63%;
  left: 23%;
  transform: rotateZ(-10deg);
}

.img-text {
  position: absolute;
  padding: 2px 6px;
  font-size: 11px;
  line-height: 1.2;
  background-color: var(--color-element-background-2);
  border-radius: 4px;

  &.play {
    top: 42%;
    left: 12%;
    transform: translate(-10%, -50%) rotate(-18deg);
  }

  &.simple {
    top: 77%;
    right: 0;
    transform: translate(-20%, -50%) rotate(7deg);
  }
}

.star {
  position: absolute;
  width: 5.8%;
  bottom: 2%;
  right: 2%;
}

.lighting {
  position: absolute;
  top: -5%;
  left: 40%;
  transform: rotate(-45deg);

  &.second {
    top: 77%;
    left: 8%;
    transform: rotate(-60deg);
  }
}

.octopus-shadow {
  position: relative;
  margin-bottom: -10px;
  flex-grow: 0;
  flex-shrink: 1;


  &::before {
    content: "";
    position: absolute;
    top: -7.5px;
    left: 0;
    width: 80px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #E51C44 0%, #00F0FF 100%);
    filter: blur(20px);
    opacity: 0.6;
    z-index: -1;
    transform: rotate(-45deg);
  }
}

.octopus-section-additional-text-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}
</style>
