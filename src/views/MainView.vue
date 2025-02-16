<template>
  <div class="main-container game-one-container">
    <img src="/img/tap-octopus.png" class="tap-octopus" alt="octopus for tap">

    <TopNavPanel class="top-panel-nav" />

    <ForecastDetails v-for="(item, index) in 2" :key="index" />

    <BottomNavPanel class="bottom-panel-nav" />
  </div>

  <div class="shadows-container">
    <div class="body-shadow body-shadow-1"></div>
    <div class="body-shadow body-shadow-2"></div>
    <div class="body-shadow body-shadow-3"></div>
  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';
import ForecastDetails from "@/components/ForecastDetails.vue";

export default {
  components: { TopNavPanel, BottomNavPanel, ForecastDetails },
  data() {
    return {
      currentScreen: 0,
    };
  },

  mounted() {

  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>
.shadows-container {
  position: fixed;
  top: 0;
  left: 0;
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
  padding-top: 48px;
  overflow: visible;
}

.tap-octopus {
  position: absolute;
  top: 55vh;
  right: -20%;
  width: 22.5%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.top-panel-nav {
  margin-bottom: 30px;
}

.bottom-panel-nav {
  position: fixed;
  max-width: 450px;
  left: 50%;
  bottom: 60px;
  transform: translate(-50%, 0);
}
</style>
