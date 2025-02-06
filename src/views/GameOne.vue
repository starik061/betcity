<template>
  <BottomNavPanel />
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

<style lang="scss" scoped></style>
