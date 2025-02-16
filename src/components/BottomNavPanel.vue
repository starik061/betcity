<template>
  <nav class="bottom-nav-panel-container">
    <div class="logo-btn-shadow-holder"></div>

    <ul class="bottom-nav-panel-list">
      <li class="bottom-nav-panel-list-item">
        <router-link to="/rules" class="bottom-nav-panel-link">
          <IconBottomNavRules />
          <p class="bottom-nav-panel-text">Rules</p>
        </router-link>
      </li>
      <li class="bottom-nav-panel-list-item">
        <router-link to="/home" class="bottom-nav-panel-link">
          <IconBottomNavGame />
          <p class="bottom-nav-panel-text">Game</p>
        </router-link>
      </li>
      <li class="bottom-nav-panel-list-item">
        <router-link to="/rating" class="bottom-nav-panel-link">
          <IconBottomNavRating />
          <p class="bottom-nav-panel-text">Rating</p>
        </router-link>
      </li>
      <li class="bottom-nav-panel-list-item">
        <router-link to="/friends" class="bottom-nav-panel-link">
          <IconBottomNavFriends />
          <p class="bottom-nav-panel-text">Friends</p>
        </router-link>
      </li>
    </ul>
    <IconLogoButton class="logo-btn" @click="handleHomeClick" />

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
  z-index: 20;
}




.logo-btn-shadow-holder {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  background-color: transparent;
  border: 0;
  -webkit-box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
  -moz-box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
  box-shadow: 0px 0px 38px 18px rgba(0, 112, 243, 0.64);
}
</style>
