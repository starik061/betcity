<template>
  <div class="main-container flex-container">
    <div class="body-shadow body-shadow-1"></div>
    <div class="body-shadow body-shadow-2"></div>
    <div class="body-shadow body-shadow-3"></div>

    <img src="/img/loading-view-2-main-picture.png" alt="octopus-mascot of betcity">
    <strong class="slogan">Получай крутые призы</strong>
    <p class="text">За прогнозы матчей онлайн</p>
  </div>

  <div class="next-btn-dots-container">
    <RouterLink class="next-loading-view" to="/loading-three">
      <span>Далее</span>
      <IconNextBtnArrow />
    </RouterLink>

    <div class="dots">
      <span class="active"></span>
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
  margin-top: -20px;
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

.next-btn-dots-container {
  position: fixed;
  left: 50%;
  bottom: 127px;
  transform: translateX(-50%);
}
</style>
