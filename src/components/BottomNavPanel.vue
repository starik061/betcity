<template>
  <div>
    <div class="shadows-container">
      <div class="bottom-nav-shadow"></div>
    </div>

    <nav class="bottom-nav-panel-container">
      <div class="logo-btn-shadow-holder"></div>

      <ul class="bottom-nav-panel-list">
        <li class="bottom-nav-panel-list-item">
          <router-link to="/rules" class="bottom-nav-panel-link btn-style">
            <IconBottomNavRules />
            <p class="bottom-nav-panel-text">Rules</p>
          </router-link>
        </li>
        <li class="bottom-nav-panel-list-item">
          <router-link to="/game" class="bottom-nav-panel-link btn-style">
            <IconBottomNavGame />
            <p class="bottom-nav-panel-text">Game</p>
          </router-link>
        </li>
        <li class="bottom-nav-panel-list-item">
          <router-link to="/rating" class="bottom-nav-panel-link btn-style">
            <IconBottomNavRating />
            <p class="bottom-nav-panel-text">Rating</p>
          </router-link>
        </li>
        <li class="bottom-nav-panel-list-item">
          <router-link to="/friends" class="bottom-nav-panel-link btn-style">
            <IconBottomNavFriends />
            <p class="bottom-nav-panel-text">Friends</p>
          </router-link>
        </li>
      </ul>
      <IconLogoButton class="logo-btn" @click="handleHomeClick" />

    </nav>
  </div>
</template>

<script>
import IconBottomNavRules from '@/components/icons/IconBottomNavRules.vue';
import IconBottomNavGame from '@/components/icons/IconBottomNavGame.vue';
import IconBottomNavFriends from '@/components/icons/IconBottomNavFriends.vue';
import IconBottomNavRating from '@/components/icons/IconBottomNavRating.vue';
import IconLogoButton from '@/components/icons/IconLogoButton.vue';

export default {
  components: { IconLogoButton, IconBottomNavRules, IconBottomNavRating, IconBottomNavFriends, IconBottomNavGame },

  methods: {
    handleHomeClick() {
      this.$router.push('/main-view');
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav-panel-container {
  width: 362px;
  margin: 0 auto;
  padding: 0 14px;
}

.shadows-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 11;
  min-width: 300px;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 24px;
  pointer-events: none;
}

.bottom-nav-shadow {
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 1px;
  height: 1px;
  border-radius: 50%;

  background-color: rgba(0, 240, 255, 0.35);
  backdrop-filter: blur(1px);

  -webkit-box-shadow: 10px 10px 160px 100px rgba(0, 240, 255, 0.35);
  -moz-box-shadow: 10px 10px 160px 100px rgba(0, 240, 255, 0.35);
  box-shadow: 10px 10px 160px 100px rgba(0, 240, 255, 0.35);
  z-index: 11;
}


.bottom-nav-panel-list {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  background-image: url("/img/bottom-panel-frame.svg");
  background-clip: padding-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  z-index: 10;
}

.bottom-nav-panel-list-item {
  &:nth-child(1) {
    margin-right: 1.5%
  }

  &:nth-child(3) {
    margin-left: auto;
  }

  &:nth-child(2) {
    margin-right: auto;
  }

  &:nth-child(4) {
    margin-left: 1.5%;
  }
}

.bottom-nav-panel-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 59px;
  height: 45px;
  border-radius: 6px;

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
  transform: translate(-51%, -49%);
  border-radius: 50%;
  z-index: 20;

  &:active {
    box-shadow: 0 0 28px rgba(0, 112, 243, 1);
  }
}




.logo-btn-shadow-holder {
  width: 69px;
  height: 69px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-51%,
      -49%);
  border-radius: 50%;

  background-color: transparent;
  border: 0;
  -webkit-box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
  -moz-box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
  box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
}
</style>
