<template>
  <div class="padding-wrapper">
    <div class="shadows-container">
      <div class="body-shadow body-shadow-1"></div>
      <div class="body-shadow body-shadow-2"></div>
      <div class="body-shadow body-shadow-3"></div>
    </div>

    <div class="main-container game-one-container">
      <!-- <img src="/img/tap-octopus.png" class="tap-octopus" alt="octopus for tap"> -->

      <TopNavPanel class="top-panel-nav" />

      <RatingContent />

      <BottomNavPanel class="bottom-panel-nav" />
    </div>

  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import RatingContent from '@/components/RatingContent.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';
import { initBackButton } from "@/utils/initBackButton.js";

export default {
  components: { TopNavPanel, RatingContent, BottomNavPanel, },

  mounted() {
    initBackButton.call(this);
  },

};
</script>

<style lang="scss" scoped>
.shadows-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  min-width: 300px;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 24px;
  pointer-events: none;
}

.game-one-container {
  position: relative;
  overflow: visible;
}

.top-panel-nav {
  margin-bottom: 30px;
}
</style>
