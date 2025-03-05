import { defineStore } from "pinia";
import { fixBodyPadding } from "@/utils/fixBodyPadding.js";

export const useAppStore = defineStore("app", {
  state: () => ({
    modalsState: {
      dailyReward: false,
      forecastDetails: false,
      congratulations: false
    },
    initDataUnsafe: null,
    platform: undefined,

    gameUserInfo: null,
    refLink: "",
    dailyRewardStatus: { hasClaimed: false, streak: 0 },

    globalRating: [],
    weeklyRating: [],
    referrals: [],

    liveMatches: [],
    allBets: [], // возможно излишнее свойство
    activeBets: [],
    completedBets: [],

    betObject: null,

    octopusTapGameStatus: false
  }),
  actions: {
    init() {
      if (window.Telegram?.WebApp) {
        const { WebApp } = window.Telegram;
        WebApp.ready();
        WebApp.disableVerticalSwipes?.();

        this.platform = WebApp.platform;
        this.initDataUnsafe = WebApp.initDataUnsafe || null;

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
      document.documentElement.style.overflow = "hidden";
      this.$patch((state) => {
        state.modalsState[name] = true;
      });
    },
    closeModal(name) {
      fixBodyPadding();
      document.body.style.overflow = "";
      document.documentElement.style.overflowY = "scroll"; // Всегда показываем вертикальную прокрутку
      document.documentElement.style.overflowX = "hidden"; // Отключаем горизонтальную прокрутку

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
