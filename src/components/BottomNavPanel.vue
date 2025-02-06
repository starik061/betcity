<template>
  <nav class="bottom-nav-panel-container">
    <IconLogoButton class="logo-btn" id="mask" />
    <ul class="bottom-nav-panel-list">
      <li class="bottom-nav-panel-list-item">
        <router-link to="/home" class="bottom-nav-panel-link">
          <IconBottomNavRules />
          <p class="bottom-nav-panel-text">Rules</p>
        </router-link>
      </li>
      <li class="bottom-nav-panel-list-item">
        <router-link to=" /home" class="bottom-nav-panel-link">
          <IconBottomNavGame />
          <p class="bottom-nav-panel-text">Game</p>
        </router-link>
      </li>
      <li class="bottom-nav-panel-list-item">
        <router-link to="/home" class="bottom-nav-panel-link">
          <IconBottomNavRating />
          <p class="bottom-nav-panel-text">Rating</p>
        </router-link>
      </li>
      <li class="bottom-nav-panel-list-item">
        <router-link to="/home" class="bottom-nav-panel-link">
          <IconBottomNavGame />
          <p class="bottom-nav-panel-text">Friends</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconBottomNavRules from '@/components/icons/IconBottomNavRules.vue';
import IconBottomNavGame from '@/components/icons/IconBottomNavGame.vue';
import IconBottomNavFriends from '@/components/icons/IconBottomNavFriends.vue';
import IconBottomNavRating from '@/components/icons/IconBottomNavRating.vue';
import IconLogoButton from '@/components/icons/IconLogoButton.vue';

export default {
  components: { IconLogoButton, IconBottomNavRules, IconBottomNavRating, IconBottomNavFriends, IconBottomNavGame },

}
</script>

<style lang="scss" scoped>
.bottom-nav-panel-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 14px;
}

.bottom-nav-panel-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px 25px 10px 10px;
  background-color: transparent;
  z-index: 10;
}

.bottom-nav-panel-list-item {
  &:nth-child(1) {
    margin-right: 2.7%
  }

  &:nth-child(3) {
    margin-left: 12.5%;
  }

  &:nth-child(2) {
    margin-right: 12.5%;
  }

  &:nth-child(4) {
    margin-left: 2.7%;
  }
}

.bottom-nav-panel-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 59px;
  height: 53px;

}

.bottom-nav-panel-text {
  font-weight: bold;
  font-size: 12px;
  line-height: auto;
  letter-spacing: 0;
}

.logo-btn {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  // -webkit-box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
  // -moz-box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
  // box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
}
</style>
