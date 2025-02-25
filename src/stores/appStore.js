import { defineStore } from "pinia";
import { fixBodyPadding } from "@/utils/fixBodyPadding.js";

export const useAppStore = defineStore("app", {
  state: () => ({
    modalsState: {
      dailyReward: false,
      forecastDetails: false,
      congratulations: false
    },
    initData: null,
    initDataUnsafe: null,
    platform: undefined,
    isFirstEnter: false,

    gameUserInfo: null,
    liveMatches: null
  }),
  actions: {
    init() {
      if (window.Telegram?.WebApp) {
        const { WebApp } = window.Telegram;
        WebApp.ready();
        WebApp.disableVerticalSwipes?.();

        this.platform = WebApp.platform;
        this.initDataUnsafe = WebApp.initDataUnsafe || null;
        this.initData = WebApp.initData || null;

        if (WebApp.platform !== "tdesktop") {
          WebApp.expand();

          if (parseFloat(WebApp.version) >= 8.0) {
            WebApp.requestFullscreen?.();
          }
        }
      }
    },
    openModal(name) {
      fixBodyPadding();
      document.body.style.overflow = "hidden";
      this.$patch((state) => {
        state.modalsState[name] = true;
      });
    },
    closeModal(name) {
      fixBodyPadding();
      document.body.style.overflow = "";
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
