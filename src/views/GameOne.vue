<template>
  <div class="main-container">

    <BottomNavPanel class="bottom-panel-nav" />
  </div>
</template>

<script>
import BottomNavPanel from '@/components/BottomNavPanel.vue';

export default {
  components: { BottomNavPanel },
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
  bottom: env(safe-area-inset-bottom, 48px);
  transform: translate(-50%, 0);
}
</style>
