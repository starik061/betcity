<template>
  <div class="main-container game-one-container">
    <img src="/img/tap-octopus.png" class="tap-octopus" alt="octopus for tap">
    <TopNavPanel class="top-panel-nav" />

    <ForecastDetails v-for="(item, index) in 2" :key="index" />

    <BottomNavPanel class="bottom-panel-nav" />
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
  bottom: calc(env(safe-area-inset-bottom, 34px) + 14px);
  transform: translate(-50%, 0);
}
</style>
