<template>
  <div>
    <div class="main-container game-one-container">
      <!-- <img src="/img/tap-octopus.png" class="tap-octopus" alt="octopus for tap"> -->

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
