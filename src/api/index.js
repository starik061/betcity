import { useAppStore } from "@/stores/appStore"; // Импортируем хранилище

const BASE_URL = "https://app.betcity.tech/api";

const authHeaders = () => {
  const { initDataUnsafe } = window.Telegram.WebApp;
  return {
    "tg-web-app-auth-date": initDataUnsafe.auth_date,
    "tg-web-app-query-id": initDataUnsafe?.query_id || 1,
    "tg-web-app-user": encodeURIComponent(JSON.stringify(initDataUnsafe.user)),
    "tg-web-app-hash": initDataUnsafe.hash
  };
};
const { initDataUnsafe } = window.Telegram.WebApp;
const testAuthHeaders = {
  "tg-web-app-auth-date": 1740752119,
  "tg-web-app-query-id": 1,
  "tg-web-app-user":
    "%7B%22id%22%3A91816918%2C%22first_name%22%3A%22%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22kiberYashka%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F75z-Wp2fYIdyCtf5n1gql97vk_8ShGjiaME8DY1jkkw.svg%22%7D",
  "tg-web-app-hash": "024adea9e3c5fcc27a5b57002e8f00f1e7c65a6272b62e72bb711ead12f745c9"
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

  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }
  console.log("headers", headers);
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/profile`, {
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
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/matches`, {
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/bet/${betID}`, {
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
  }
}

// _____________________

export async function updateBet(betID, data) {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/bet/${betID}`, {
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
  }
}

// _____________________

export async function getAllBets(betstype) {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

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
    const response = await fetch(`${BASE_URL}/bet${urlEnd}`, {
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/bet/completed`, {
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
    appStore.completedBetRewards = data;
  } catch (error) {
    console.error("Ошибка загрузки прогнозов:", error);
  }
}

// _____________________

export async function getUnreadCompletedBets() {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/bet/unread`, {
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
    appStore.unreadCompletedBets = data;
  } catch (error) {
    console.error(error);
  }
}

// _____________________

export async function markBetAsRead(betID) {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/bet/unread/${betID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    });

    // Проверяем статус ответа
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ phone })
    });

    // Проверяем статус ответа
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  // const url = `https://moongivBot/wallet?startapp=ref${appStore?.gameUserInfo?.id}`;
  const url = `https://t.me/Crypto_freedom_news_bot/betcity?startapp=ref${appStore?.gameUserInfo?.id}`;

  try {
    const response = await fetch(`${BASE_URL}/links/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify({ url })
    });

    // Проверяем статус ответа
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/daily/reward-status`, {
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
    appStore.dailyRewardStatus = data;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
}

// _____________________

export async function claimDailyReward() {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/daily/claim-reward`, {
      method: "POST",
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/${ratingTypeUrl}?limit=${limit}`, {
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
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/referrals`, {
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

    if (Array.isArray(data)) {
      appStore.referrals = data;
    }
  } catch (error) {
    console.error("Ошибка получения данных о топе игроков:", error);
  }
}

// _____________________

export async function octopusTapGameStatusCheck() {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/game/reward-status`, {
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

    appStore.octopusTapGameStatus = data?.hasClaimed;
  } catch (error) {
    console.error("Ошибка получения данных о топе игроков:", error);
  }
}

// _____________________
export async function claimOctopusTapReward() {
  const appStore = useAppStore();
  // Определяем, какие заголовки использовать
  let headers;

  if (import.meta.env.VITE_NODE_ENV === "production") {
    // В продакшене всегда используем authHeaders()
    headers = authHeaders();
  } else {
    // В разработке проверяем платформу
    if (appStore.platform === "tdesktop" || appStore.platform === "ios" || appStore.platform === "android") {
      headers = authHeaders();
    } else {
      headers = testAuthHeaders;
    }
  }

  try {
    const response = await fetch(`${BASE_URL}/users/game/claim-reward`, {
      method: "POST",
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

    appStore.gameUserInfo.balance += data?.reward;
  } catch (error) {
    console.error("Ошибка получения данных о топе игроков:", error);
  }
}
