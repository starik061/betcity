<template>
  <div class="padding-wrapper">
    <div class="main-container game-one-container">
      <TopNavPanel class="top-panel-nav" />

      <RulesContent />

      <BottomNavPanel class="bottom-panel-nav" />
    </div>

    <div class="shadows-container">
      <div class="body-shadow body-shadow-1"></div>
      <div class="body-shadow body-shadow-2"></div>
      <div class="body-shadow body-shadow-3"></div>
    </div>
  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import RulesContent from '@/components/RulesContent.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';

export default {
  components: { TopNavPanel, RulesContent, BottomNavPanel, },
  data() {
    return {

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
  padding-top: 60px;
  overflow: visible;
}

.top-panel-nav {
  margin-bottom: 30px;
}

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
</style>
