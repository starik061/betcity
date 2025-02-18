import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    modalsState: {
      dailyReward: false,
      forecastDetails: false,
      congratulations: true
    },
    user: null,
    webApp: undefined,
    platform: "android"
  }),
  actions: {
    init() {
      if (window.Telegram?.WebApp) {
        const { WebApp } = window.Telegram;
        WebApp.ready();
        WebApp.disableVerticalSwipes?.();

        this.webApp = WebApp;
        this.user = WebApp.initDataUnsafe?.user || null;

        if (WebApp.platform !== "tdesktop") {
          WebApp.expand();

          if (parseFloat(WebApp.version) >= 8.0) {
            WebApp.requestFullscreen?.();
          }
        }
      }
    },
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
