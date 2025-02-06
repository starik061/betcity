<template>
  <div class="main-container">

    <TopNavPanel class="top-panel-nav" />
    <BottomNavPanel class="bottom-panel-nav" />
  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';

export default {
  components: { TopNavPanel, BottomNavPanel },
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
.bottom-panel-nav {
  position: fixed;
  max-width: 450px;
  left: 50%;
  bottom: calc(env(safe-area-inset-bottom, 34px) + 14px);
  transform: translate(-50%, 0);
}

.top-panel-nav {
  position: fixed;
  max-width: 450px;
  left: 50%;
  top: calc(env(safe-area-inset-bottom, 9px) + 9px);
  transform: translate(-50%, 0);
}
</style>
