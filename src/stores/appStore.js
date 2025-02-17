import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    modalsState: {
      dailyReward: false,
      forecastDetails: false,
      congratulations: true
    }, // Сюда будут добавляться модалки динамически
    user: null, // Храним текущего пользователя
    settings: {} // Можно добавить настройки приложения
  }),
  actions: {
    openModal(name) {
      this.$patch((state) => {
        state.modalsState[name] = true;
      });
    },
    closeModal(name) {
      this.$patch((state) => {
        state.modalsState[name] = false;
      });
    },
    setUser(userData) {
      this.user = userData;
    },
    updateSetting(key, value) {
      this.$patch((state) => {
        state.settings[key] = value;
      });
    }
  }
});
