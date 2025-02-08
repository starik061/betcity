<template>
  <div class="main-container game-one-container">
    <TopNavPanel class="top-panel-nav" />

    <ForecastDetails />

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
  padding-top: 48px;
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
