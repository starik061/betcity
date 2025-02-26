<template>
  <div>
    <h2 class="friends-header">Приглашай друзей и продлевай игру</h2>
    <p class="friends-text">За каждого нового друга <b>+1 ход обоим</b></p>

    <div class="ref-link-container">
      <div class="image-container">
        <img src="/img/coin-red.png" alt="red coin" class="red-coin">
        <img src="/img/friends-octopus.png" alt="betcity octopus mascot" class="octopus-img">
        <img src="/img/coin-cean.png" alt="cean coin" class="cean-coin">
        <div class="img-text score">1:1</div>
        <div class="img-text double">Удвоить</div>
        <div class="img-text win">Выиграет</div>
        <img src="/img/lighting.svg" alt="lighting" class="lighting">
        <img src="/img/lighting.svg" alt="lighting" class="lighting second">
      </div>

      <div class="ref-link-input-container">
        <input class="ref-link-input" type="text" name="" value="https://t.me/+kXJl2kywa6g3YWRi" disabled>
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

.ref-link-input {
  font-family: "Styrene A";
  font-size: 10px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.65);
  pointer-events: none;
}

.friends-content-image {
  display: block;
  width: 100%;
  transform: scale(1.05) translateY(-15px);
}

.image-container {
  position: relative;
  width: 100%;
  min-height: 150px;
  margin-bottom: 2px;

  & img {
    display: block;
  }
}

.octopus-img {
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}

.cean-coin {
  position: absolute;
  width: 5.8%;
  aspect-ratio: 1/1;
  top: 35%;
  right: 0;
}

.red-coin {
  position: absolute;
  width: 4.4%;
  aspect-ratio: 1/1;
  top: 5%;
  left: 8%;
  transform: rotateZ(-10deg);
}

.img-text {
  position: absolute;
  padding: 2px 6px;
  font-size: 11px;
  line-height: 1.2;
  background-color: var(--color-element-background-2);
  border-radius: 4px;

  &.score {
    top: 12%;
    left: 28%;
    transform: translate(-10%, -50%) rotate(-18deg);
  }

  &.double {
    top: 77%;
    right: 68%;
    transform: translate(-20%, -50%) rotate(-17deg);
  }

  &.win {
    top: 70%;
    left: 73%;
    transform: translate(-10%, -50%) rotate(18deg);
  }
}

.lighting {
  position: absolute;
  top: -4%;
  left: 81%;
  transform: rotate(-45deg) rotate(75deg);

  &.second {
    top: 55%;
    left: 8%;
    transform: rotate(-45deg);
  }
}
</style>
