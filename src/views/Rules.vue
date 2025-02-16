<template>
  <div>
    <div class="main-container game-one-container">
      <TopNavPanel class="top-panel-nav" />

      <RulesContent />

      <BottomNavPanel class="bottom-panel-nav" />
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
  padding-top: 48px;
  overflow: visible;
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
