<template>
  <img src="/public/img/loading-view-1-main-picture.png" alt="octopus-mascot of betcity">
  <strong>Получай крутые призы</strong>
  <p>За прогнозы матчей онлайн</p>
  <RouterLink to="/Loading">Далее</RouterLink>
  <div class="dots">
    <span :class="{ active: currentScreen === 0 }"></span>
    <span :class="{ active: currentScreen === 1 }"></span>
    <span :class="{ active: currentScreen === 2 }"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentScreen: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
