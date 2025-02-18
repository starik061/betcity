<template>
  <div class="padding-wrapper">
    <div class="main-container game-one-container">
      <div class="shadows-container">
        <div class="body-shadow body-shadow-1"></div>
        <div class="body-shadow body-shadow-2"></div>
        <div class="body-shadow body-shadow-3"></div>
      </div>

      <TopNavPanel class="top-panel-nav" />

      <ProfileContent />

      <BottomNavPanel class="bottom-panel-nav" />
    </div>

  </div>
</template>

<script>
import TopNavPanel from '@/components/TopNavPanel.vue';
import ProfileContent from '@/components/ProfileContent.vue';
import BottomNavPanel from '@/components/BottomNavPanel.vue';

export default {
  components: { TopNavPanel, ProfileContent, BottomNavPanel, },
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
  overflow: visible;
}

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
</style>
