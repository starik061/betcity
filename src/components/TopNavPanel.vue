<template>
  <nav class="top-nav-cotainer">
    <div class="left-side">
      <img class="avatar" src="/img/avatar-placeholder.webp" />
      <div class="score">
        <img class="score-coin" src="/img/coin.png" alt="coins">
        <span class="score-text">200</span>
      </div>
    </div>
    <div class="right-side">
      <div class="score score-games">
        <IconBoxingGlove />
        <span class="score-text games-count">4/4</span>
      </div>
      <div class="score notifications">
        <IconNotificationBell />
      </div>
    </div>

  </nav>
</template>

<script>
import IconBoxingGlove from '@/components/icons/IconBoxingGlove.vue';
import IconNotificationBell from '@/components/icons/IconNotificationBell.vue';


export default {
  components: { IconBoxingGlove, IconNotificationBell },

}
</script>

<style lang="scss" scoped>
.top-nav-cotainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 8px 3px 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;

}

.left-side,
.right-side {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.02vw;
}

.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: grey;
  object-fit: cover;
}

.score {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 3px 8px 3px 3px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);

  &.score-games {
    padding: 1.5px 8px 1.5px 2px;
  }

  &.notifications {
    padding: 2px 8px 2px 8px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 2%;
      left: 78%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background-color: red;
      border-radius: 50%;
    }
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
</style>
