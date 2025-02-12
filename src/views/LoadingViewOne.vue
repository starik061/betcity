<template>
  <div class="main-container flex-container">
    <img src="/img/loading-view-1-main-picture.png" alt="octopus-mascot of betcity">
    <strong class="slogan">Рад видеть тебя! <br>Начнем игру?</strong>
    <p class="text">Что тебя ждет в приложении?</p>
    <RouterLink class="next-loading-view" to="/loading-two">
      <span>Далее</span>
      <IconNextBtnArrow />
    </RouterLink>

    <div class="dots">
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import IconNextBtnArrow from '@/components/icons/IconNextBtnArrow.vue';

export default {
  components: { IconNextBtnArrow },
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
.flex-container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slogan {
  display: inline-block;
  margin-top: 26px;
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
  line-height: 1.2;
}

.text {
  margin-bottom: 9vh;
  font-family: 'Styrene A';
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-text);
  opacity: 0.4;
}

.dots span.active {
  opacity: 1;
}

.next-loading-view {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.83;
  padding: 2px 11px;
  color: #232E3C;
  background-color: #D0D0D2;
  border-radius: 15px;
  text-decoration: none;
}
</style>
