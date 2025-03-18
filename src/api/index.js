import { useAppStore } from "@/stores/appStore"; // Импортируем хранилище

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_REF_URL = import.meta.env.VITE_REF_URL;

const authHeaders = () => {
  const { initDataUnsafe } = window.Telegram.WebApp;
  return {
    "tg-web-app-auth-date": initDataUnsafe.auth_date,
    "tg-web-app-query-id": initDataUnsafe?.query_id || 1,
    "tg-web-app-user": encodeURIComponent(JSON.stringify(initDataUnsafe.user)),
    "tg-web-app-hash": initDataUnsafe.hash
  };
};

export async function authUser() {
  const appStore = useAppStore();
  let startParam = "";
  if (appStore && appStore.initDataUnsafe && appStore.initDataUnsafe.start_param) {
    startParam = appStore.initDataUnsafe.start_param;
  } else {
    // Если нет, проверяем URL
    const params = new URLSearchParams(window.location.search);
    const startApp = params.get("startapp");

    if (startApp) {
      startParam = startApp;
    }
  }

  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({
        startParam
      })
    });

    // Проверяем статус ответа
    if (response.status !== 200 && response.status !== 201) {
      throw new Error(`Ошибка авторизации: ${response.status}`);
    }

    // Проверяем, есть ли данные в теле ответа
    const text = await response.text(); // Сначала получаем текстовый ответ
    const data = text ? JSON.parse(text) : null; // Преобразуем в JSON, если есть текст

    if (data) {
      appStore.gameUserInfo = data;
    } else {
      console.error("Ответ пустой или не является JSON");
    }

    return true;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    this.$router.push("/error");
    return false;
  }
}

// _____________________
export async function getUserProfile() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    // Проверяем, есть ли данные в теле ответа
    const text = await response.text(); // Сначала получаем текстовый ответ
    const data = text ? JSON.parse(text) : null; // Преобразуем в JSON, если есть текст

    if (data) {
      appStore.gameUserInfo = data;
    } else {
      console.error("Ответ пустой или не является JSON");
    }
  } catch (error) {
    console.error("Ошибка загрузки данных профиля:", error);
  }
}
// _____________________

export async function getMatchesLive() {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.liveMatches = data;
  } catch (error) {
    console.error("Ошибка загрузки активных матчей:", error);
  }
}

// _____________________

export async function createBet(betID, data) {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/bet/${betID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(data) // Преобразуем объект в строку
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("Ошибка создания прогноза", error);
    throw error; // Прокидываем ошибку дальше
  }
}

// _____________________

export async function updateBet(betID, data) {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/bet/${betID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(data) // Преобразуем объект в строку
    });

    // Проверяем статус ответа
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error("Ошибка обновления прогноза", error);
    throw error; // Прокидываем ошибку дальше
  }
}

// _____________________

export async function getAllBets(betstype) {
  const appStore = useAppStore();
  let headers = authHeaders();

  // betstype случаи:
  //.  - если не задан, то выдает все
  // "active" - только активные
  // "completed" - только завершенные
  let urlEnd;
  switch (betstype) {
    case "active": {
      urlEnd = "?status=active";
      break;
    }
    case "completed": {
      urlEnd = "?status=completed";
      break;
    }
    default: {
      urlEnd = "";
    }
  }

  // switch (betstype) {
  //   case "active": {
  //     urlEnd = "/active";
  //     break;
  //   }
  //   case "completed": {
  //     urlEnd = "/completed";
  //     break;
  //   }
  //   default: {
  //     urlEnd = "";
  //   }
  // }

  try {
    const response = await fetch(`${VITE_BASE_URL}/bet${urlEnd}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();

    switch (betstype) {
      case "active": {
        appStore.activeBets = data;
        break;
      }
      case "completed": {
        appStore.completedBets = data;
        break;
      }
      default: {
        appStore.allBets = data;
      }
    }
  } catch (error) {
    console.error("Ошибка загрузки прогнозов:", error);
  }
}

// _____________________

export async function getCompletedBetRewards() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/bet/completed`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.completedBetRewards = data;
  } catch (error) {
    console.error("Ошибка загрузки прогнозов:", error);
  }
}

// _____________________

export async function getUnreadCompletedBets() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/bet/unread`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.unreadCompletedBets = data;
  } catch (error) {
    console.error(error);
  }
}

// _____________________

export async function markBetAsRead(betID) {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/bet/unread/${betID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

// _____________________

export async function setPhoneNumber(phone) {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ phone })
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// _____________________
export async function generateRefLink() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/links/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ url: `${VITE_REF_URL}${appStore?.gameUserInfo?.id}` })
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    // Проверяем, есть ли данные в теле ответа
    const text = await response.text(); // Сначала получаем текстовый ответ
    const data = text ? JSON.parse(text) : null; // Преобразуем в JSON, если есть текст

    if (data) {
      appStore.refLink = data?.shortUrl;
    } else {
      console.error("Ответ пустой или не является JSON");
    }
  } catch (error) {
    console.error("Ошибка генерации реф.:", error);
  }
}

// _____________________

export async function getDailyRewardStatus() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/daily/reward-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.dailyRewardStatus = data;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}

// _____________________

export async function claimDailyReward() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/daily/claim-reward`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data.reward;
  } catch (error) {
    console.error("Ошибка получения ежедневной награды:", error);
    return false;
  }
}

// _____________________

export async function getRating(ratingTypeUrl = "top", limit = 10) {
  // ratingTypeUrl может быть"top" или ""top-weekly

  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/${ratingTypeUrl}?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();

    if (ratingTypeUrl === "top") {
      appStore.globalRating = data;
    }
    if (ratingTypeUrl === "top-weekly") {
      appStore.weeklyRating = data;
    }
  } catch (error) {
    console.error("Ошибка получения данных о топе игроков:", error);
  }
}

// _____________________

export async function getReferrals() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/referrals`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();

    if (Array.isArray(data)) {
      appStore.referrals = data;
    }
  } catch (error) {
    console.error("Ошибка получения данных о друзьях:", error);
  }
}

// _____________________

export async function octopusTapGameStatusCheck() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/octopus/reward-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();

    appStore.octopusTapGameStatus = data?.hasClaimed;
  } catch (error) {
    console.error("Ошибка в запросе о получении статуса награды за тапанье Осьминога:", error);
  }
}

// _____________________
export async function claimOctopusTapReward() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/octopus/claim-reward`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();
  } catch (error) {
    console.error("Ошибка в запросе о получении награды за тапанье Осьминога:", error);
  }
}

// _____________________
export async function claimExternalGameReward() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/game/reward-approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }
    const data = await response.json();
    appStore.gameRewardStatus.status = data?.status;

    return data?.reward;
  } catch (error) {
    console.error("Ошибка в запросе о получении награды за игру Три в ряд:", error);
    return false;
  }
}

// _____________________

export async function getGameRewardStatus() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/game/reward-request-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.gameRewardStatus.status = data?.status;
    appStore.gameRewardStatus.streak = data?.streak;
  } catch (error) {
    console.error("Ошибка запроса о статусе награды за игру", error);
  }
}

// _____________________

export async function sendGameRewardRequest() {
  const appStore = useAppStore();
  let headers = authHeaders();

  try {
    const response = await fetch(`${VITE_BASE_URL}/users/game/reward-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    if (response.status !== 201 && response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    appStore.gameRewardStatus.status = data?.status;
  } catch (error) {
    console.error("Ошибка запроса о статусе награды за игру", error);
  }
}
